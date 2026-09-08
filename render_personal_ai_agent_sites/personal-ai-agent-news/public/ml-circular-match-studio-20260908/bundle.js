(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // ../../../../../../../private/tmp/fft-build/node_modules/fft.js/lib/fft.js
  var require_fft = __commonJS({
    "../../../../../../../private/tmp/fft-build/node_modules/fft.js/lib/fft.js"(exports, module) {
      "use strict";
      function FFT2(size) {
        this.size = size | 0;
        if (this.size <= 1 || (this.size & this.size - 1) !== 0)
          throw new Error("FFT size must be a power of two and bigger than 1");
        this._csize = size << 1;
        var table = new Array(this.size * 2);
        for (var i = 0; i < table.length; i += 2) {
          const angle = Math.PI * i / this.size;
          table[i] = Math.cos(angle);
          table[i + 1] = -Math.sin(angle);
        }
        this.table = table;
        var power = 0;
        for (var t = 1; this.size > t; t <<= 1)
          power++;
        this._width = power % 2 === 0 ? power - 1 : power;
        this._bitrev = new Array(1 << this._width);
        for (var j = 0; j < this._bitrev.length; j++) {
          this._bitrev[j] = 0;
          for (var shift = 0; shift < this._width; shift += 2) {
            var revShift = this._width - shift - 2;
            this._bitrev[j] |= (j >>> shift & 3) << revShift;
          }
        }
        this._out = null;
        this._data = null;
        this._inv = 0;
      }
      module.exports = FFT2;
      FFT2.prototype.fromComplexArray = function fromComplexArray(complex, storage) {
        var res = storage || new Array(complex.length >>> 1);
        for (var i = 0; i < complex.length; i += 2)
          res[i >>> 1] = complex[i];
        return res;
      };
      FFT2.prototype.createComplexArray = function createComplexArray() {
        const res = new Array(this._csize);
        for (var i = 0; i < res.length; i++)
          res[i] = 0;
        return res;
      };
      FFT2.prototype.toComplexArray = function toComplexArray(input, storage) {
        var res = storage || this.createComplexArray();
        for (var i = 0; i < res.length; i += 2) {
          res[i] = input[i >>> 1];
          res[i + 1] = 0;
        }
        return res;
      };
      FFT2.prototype.completeSpectrum = function completeSpectrum(spectrum) {
        var size = this._csize;
        var half = size >>> 1;
        for (var i = 2; i < half; i += 2) {
          spectrum[size - i] = spectrum[i];
          spectrum[size - i + 1] = -spectrum[i + 1];
        }
      };
      FFT2.prototype.transform = function transform2(out, data) {
        if (out === data)
          throw new Error("Input and output buffers must be different");
        this._out = out;
        this._data = data;
        this._inv = 0;
        this._transform4();
        this._out = null;
        this._data = null;
      };
      FFT2.prototype.realTransform = function realTransform(out, data) {
        if (out === data)
          throw new Error("Input and output buffers must be different");
        this._out = out;
        this._data = data;
        this._inv = 0;
        this._realTransform4();
        this._out = null;
        this._data = null;
      };
      FFT2.prototype.inverseTransform = function inverseTransform(out, data) {
        if (out === data)
          throw new Error("Input and output buffers must be different");
        this._out = out;
        this._data = data;
        this._inv = 1;
        this._transform4();
        for (var i = 0; i < out.length; i++)
          out[i] /= this.size;
        this._out = null;
        this._data = null;
      };
      FFT2.prototype._transform4 = function _transform4() {
        var out = this._out;
        var size = this._csize;
        var width = this._width;
        var step = 1 << width;
        var len = size / step << 1;
        var outOff;
        var t;
        var bitrev = this._bitrev;
        if (len === 4) {
          for (outOff = 0, t = 0; outOff < size; outOff += len, t++) {
            const off = bitrev[t];
            this._singleTransform2(outOff, off, step);
          }
        } else {
          for (outOff = 0, t = 0; outOff < size; outOff += len, t++) {
            const off = bitrev[t];
            this._singleTransform4(outOff, off, step);
          }
        }
        var inv = this._inv ? -1 : 1;
        var table = this.table;
        for (step >>= 2; step >= 2; step >>= 2) {
          len = size / step << 1;
          var quarterLen = len >>> 2;
          for (outOff = 0; outOff < size; outOff += len) {
            var limit = outOff + quarterLen;
            for (var i = outOff, k = 0; i < limit; i += 2, k += step) {
              const A = i;
              const B = A + quarterLen;
              const C = B + quarterLen;
              const D = C + quarterLen;
              const Ar = out[A];
              const Ai = out[A + 1];
              const Br = out[B];
              const Bi = out[B + 1];
              const Cr = out[C];
              const Ci = out[C + 1];
              const Dr = out[D];
              const Di = out[D + 1];
              const MAr = Ar;
              const MAi = Ai;
              const tableBr = table[k];
              const tableBi = inv * table[k + 1];
              const MBr = Br * tableBr - Bi * tableBi;
              const MBi = Br * tableBi + Bi * tableBr;
              const tableCr = table[2 * k];
              const tableCi = inv * table[2 * k + 1];
              const MCr = Cr * tableCr - Ci * tableCi;
              const MCi = Cr * tableCi + Ci * tableCr;
              const tableDr = table[3 * k];
              const tableDi = inv * table[3 * k + 1];
              const MDr = Dr * tableDr - Di * tableDi;
              const MDi = Dr * tableDi + Di * tableDr;
              const T0r = MAr + MCr;
              const T0i = MAi + MCi;
              const T1r = MAr - MCr;
              const T1i = MAi - MCi;
              const T2r = MBr + MDr;
              const T2i = MBi + MDi;
              const T3r = inv * (MBr - MDr);
              const T3i = inv * (MBi - MDi);
              const FAr = T0r + T2r;
              const FAi = T0i + T2i;
              const FCr = T0r - T2r;
              const FCi = T0i - T2i;
              const FBr = T1r + T3i;
              const FBi = T1i - T3r;
              const FDr = T1r - T3i;
              const FDi = T1i + T3r;
              out[A] = FAr;
              out[A + 1] = FAi;
              out[B] = FBr;
              out[B + 1] = FBi;
              out[C] = FCr;
              out[C + 1] = FCi;
              out[D] = FDr;
              out[D + 1] = FDi;
            }
          }
        }
      };
      FFT2.prototype._singleTransform2 = function _singleTransform2(outOff, off, step) {
        const out = this._out;
        const data = this._data;
        const evenR = data[off];
        const evenI = data[off + 1];
        const oddR = data[off + step];
        const oddI = data[off + step + 1];
        const leftR = evenR + oddR;
        const leftI = evenI + oddI;
        const rightR = evenR - oddR;
        const rightI = evenI - oddI;
        out[outOff] = leftR;
        out[outOff + 1] = leftI;
        out[outOff + 2] = rightR;
        out[outOff + 3] = rightI;
      };
      FFT2.prototype._singleTransform4 = function _singleTransform4(outOff, off, step) {
        const out = this._out;
        const data = this._data;
        const inv = this._inv ? -1 : 1;
        const step2 = step * 2;
        const step3 = step * 3;
        const Ar = data[off];
        const Ai = data[off + 1];
        const Br = data[off + step];
        const Bi = data[off + step + 1];
        const Cr = data[off + step2];
        const Ci = data[off + step2 + 1];
        const Dr = data[off + step3];
        const Di = data[off + step3 + 1];
        const T0r = Ar + Cr;
        const T0i = Ai + Ci;
        const T1r = Ar - Cr;
        const T1i = Ai - Ci;
        const T2r = Br + Dr;
        const T2i = Bi + Di;
        const T3r = inv * (Br - Dr);
        const T3i = inv * (Bi - Di);
        const FAr = T0r + T2r;
        const FAi = T0i + T2i;
        const FBr = T1r + T3i;
        const FBi = T1i - T3r;
        const FCr = T0r - T2r;
        const FCi = T0i - T2i;
        const FDr = T1r - T3i;
        const FDi = T1i + T3r;
        out[outOff] = FAr;
        out[outOff + 1] = FAi;
        out[outOff + 2] = FBr;
        out[outOff + 3] = FBi;
        out[outOff + 4] = FCr;
        out[outOff + 5] = FCi;
        out[outOff + 6] = FDr;
        out[outOff + 7] = FDi;
      };
      FFT2.prototype._realTransform4 = function _realTransform4() {
        var out = this._out;
        var size = this._csize;
        var width = this._width;
        var step = 1 << width;
        var len = size / step << 1;
        var outOff;
        var t;
        var bitrev = this._bitrev;
        if (len === 4) {
          for (outOff = 0, t = 0; outOff < size; outOff += len, t++) {
            const off = bitrev[t];
            this._singleRealTransform2(outOff, off >>> 1, step >>> 1);
          }
        } else {
          for (outOff = 0, t = 0; outOff < size; outOff += len, t++) {
            const off = bitrev[t];
            this._singleRealTransform4(outOff, off >>> 1, step >>> 1);
          }
        }
        var inv = this._inv ? -1 : 1;
        var table = this.table;
        for (step >>= 2; step >= 2; step >>= 2) {
          len = size / step << 1;
          var halfLen = len >>> 1;
          var quarterLen = halfLen >>> 1;
          var hquarterLen = quarterLen >>> 1;
          for (outOff = 0; outOff < size; outOff += len) {
            for (var i = 0, k = 0; i <= hquarterLen; i += 2, k += step) {
              var A = outOff + i;
              var B = A + quarterLen;
              var C = B + quarterLen;
              var D = C + quarterLen;
              var Ar = out[A];
              var Ai = out[A + 1];
              var Br = out[B];
              var Bi = out[B + 1];
              var Cr = out[C];
              var Ci = out[C + 1];
              var Dr = out[D];
              var Di = out[D + 1];
              var MAr = Ar;
              var MAi = Ai;
              var tableBr = table[k];
              var tableBi = inv * table[k + 1];
              var MBr = Br * tableBr - Bi * tableBi;
              var MBi = Br * tableBi + Bi * tableBr;
              var tableCr = table[2 * k];
              var tableCi = inv * table[2 * k + 1];
              var MCr = Cr * tableCr - Ci * tableCi;
              var MCi = Cr * tableCi + Ci * tableCr;
              var tableDr = table[3 * k];
              var tableDi = inv * table[3 * k + 1];
              var MDr = Dr * tableDr - Di * tableDi;
              var MDi = Dr * tableDi + Di * tableDr;
              var T0r = MAr + MCr;
              var T0i = MAi + MCi;
              var T1r = MAr - MCr;
              var T1i = MAi - MCi;
              var T2r = MBr + MDr;
              var T2i = MBi + MDi;
              var T3r = inv * (MBr - MDr);
              var T3i = inv * (MBi - MDi);
              var FAr = T0r + T2r;
              var FAi = T0i + T2i;
              var FBr = T1r + T3i;
              var FBi = T1i - T3r;
              out[A] = FAr;
              out[A + 1] = FAi;
              out[B] = FBr;
              out[B + 1] = FBi;
              if (i === 0) {
                var FCr = T0r - T2r;
                var FCi = T0i - T2i;
                out[C] = FCr;
                out[C + 1] = FCi;
                continue;
              }
              if (i === hquarterLen)
                continue;
              var ST0r = T1r;
              var ST0i = -T1i;
              var ST1r = T0r;
              var ST1i = -T0i;
              var ST2r = -inv * T3i;
              var ST2i = -inv * T3r;
              var ST3r = -inv * T2i;
              var ST3i = -inv * T2r;
              var SFAr = ST0r + ST2r;
              var SFAi = ST0i + ST2i;
              var SFBr = ST1r + ST3i;
              var SFBi = ST1i - ST3r;
              var SA = outOff + quarterLen - i;
              var SB = outOff + halfLen - i;
              out[SA] = SFAr;
              out[SA + 1] = SFAi;
              out[SB] = SFBr;
              out[SB + 1] = SFBi;
            }
          }
        }
      };
      FFT2.prototype._singleRealTransform2 = function _singleRealTransform2(outOff, off, step) {
        const out = this._out;
        const data = this._data;
        const evenR = data[off];
        const oddR = data[off + step];
        const leftR = evenR + oddR;
        const rightR = evenR - oddR;
        out[outOff] = leftR;
        out[outOff + 1] = 0;
        out[outOff + 2] = rightR;
        out[outOff + 3] = 0;
      };
      FFT2.prototype._singleRealTransform4 = function _singleRealTransform4(outOff, off, step) {
        const out = this._out;
        const data = this._data;
        const inv = this._inv ? -1 : 1;
        const step2 = step * 2;
        const step3 = step * 3;
        const Ar = data[off];
        const Br = data[off + step];
        const Cr = data[off + step2];
        const Dr = data[off + step3];
        const T0r = Ar + Cr;
        const T1r = Ar - Cr;
        const T2r = Br + Dr;
        const T3r = inv * (Br - Dr);
        const FAr = T0r + T2r;
        const FBr = T1r;
        const FBi = -T3r;
        const FCr = T0r - T2r;
        const FDr = T1r;
        const FDi = T3r;
        out[outOff] = FAr;
        out[outOff + 1] = 0;
        out[outOff + 2] = FBr;
        out[outOff + 3] = FBi;
        out[outOff + 4] = FCr;
        out[outOff + 5] = 0;
        out[outOff + 6] = FDr;
        out[outOff + 7] = FDi;
      };
    }
  });

  // .codex-tmp/personal-ai-agent-news/ml-circular-match-studio-20260908/app.js
  var import_fft = __toESM(require_fft());
  var $ = (id) => document.getElementById(id);
  var N = 16;
  var fft = new import_fft.default(N);
  var presets = { asymmetric: [1, 1, 1, -1, 1, -1, -1, 1, -1, -1, -1, 1, 1, -1, 1, -1], periodic: Array.from({ length: N }, (_, i) => i % 4 < 2 ? 1 : -1), constant: Array(N).fill(1) };
  var x = presets.asymmetric.slice();
  var draw = [];
  var state;
  function newNoise() {
    draw = Array.from(crypto.getRandomValues(new Uint32Array(N)), (v) => 2 * v / 4294967296 - 1);
  }
  function transform(a) {
    const out = fft.createComplexArray();
    fft.transform(out, fft.toComplexArray(a));
    return out;
  }
  function calculate() {
    const shift = +$("shift").value, n = +$("n").value, k = +$("candidate").value;
    const y = x.map((_, j) => x[(j - shift + N) % N] + n * draw[j]);
    const X = transform(x), Y = transform(y), product = fft.createComplexArray(), result = fft.createComplexArray();
    for (let i = 0; i < N; i++) {
      const a = X[2 * i], b = X[2 * i + 1], c = Y[2 * i], d = Y[2 * i + 1];
      product[2 * i] = a * c + b * d;
      product[2 * i + 1] = a * d - b * c;
    }
    fft.inverseTransform(result, product);
    const correlation = x.map((_, i) => result[2 * i] / N), direct = x.map((_, i) => x.reduce((s, v, j) => s + v * y[(j + i) % N], 0) / N);
    const aligned = x.map((_, j) => x[(j - k + N) % N]), mse = aligned.reduce((s, v, j) => s + (v - y[j]) ** 2, 0) / N;
    const maximum = Math.max(...correlation), peaks = correlation.flatMap((v, i) => maximum - v <= 1e-9 ? [i] : []);
    state = { x: x.slice(), draw: draw.slice(), shift, n, k, y, aligned, correlation, direct, mse, peaks, error: Math.max(...correlation.map((v, i) => Math.abs(v - direct[i]))) };
  }
  function plot(id) {
    const c = $(id), g = c.getContext("2d");
    g.clearRect(0, 0, 640, 400);
    g.font = "26px system-ui";
    g.textAlign = "center";
    return g;
  }
  function render() {
    calculate();
    const s = state;
    $("os").textContent = s.shift;
    $("on").textContent = s.n.toFixed(1);
    $("ok").textContent = s.k;
    $("mse").textContent = s.mse.toFixed(5);
    $("corr").textContent = s.correlation[s.k].toFixed(5);
    $("count").textContent = s.peaks.length;
    $("error").textContent = s.error.toExponential(1);
    $("peaks").textContent = (s.peaks.length === 1 ? "Best lag: " : "Tied peak lags: ") + s.peaks.join(", ");
    [...$("pattern").children].forEach((b, i) => {
      b.setAttribute("aria-pressed", String(x[i] === 1));
      b.innerHTML = "<small>" + i + "</small>" + (x[i] === 1 ? "+1" : "-1");
      b.setAttribute("aria-label", "Reference sample " + i + ": " + x[i]);
    });
    const g = plot("signal"), px = (j) => 40 + j * 560 / 15, py = (v) => 185 - v * 47;
    g.strokeStyle = "#c9d6d0";
    g.beginPath();
    g.moveTo(35, 185);
    g.lineTo(610, 185);
    g.stroke();
    for (const [a, color] of [[s.aligned, "#16644c"], [s.y, "#b33667"]]) {
      g.strokeStyle = color;
      g.fillStyle = color;
      g.lineWidth = 3;
      g.beginPath();
      a.forEach((v, j) => j ? g.lineTo(px(j), py(v)) : g.moveTo(px(j), py(v)));
      g.stroke();
      a.forEach((v, j) => {
        g.beginPath();
        g.arc(px(j), py(v), 4, 0, Math.PI * 2);
        g.fill();
      });
    }
    g.fillStyle = "#40564b";
    [0, 5, 10, 15].forEach((j) => g.fillText(j, px(j), 375));
    const h = plot("score"), scale = Math.max(1, ...s.correlation.map(Math.abs)), cy = (v) => 185 - v / scale * 145;
    h.strokeStyle = "#c9d6d0";
    h.beginPath();
    h.moveTo(25, 185);
    h.lineTo(615, 185);
    h.stroke();
    s.correlation.forEach((v, j) => {
      const left = 30 + j * 36.5, y = cy(v), height = Math.max(1, Math.abs(185 - y));
      h.fillStyle = s.peaks.includes(j) ? "#16644c" : "#9baea4";
      h.fillRect(left, Math.min(y, 185), 26, height);
      if (j === s.k) {
        h.strokeStyle = "#b33667";
        h.lineWidth = 3;
        h.strokeRect(left - 2, Math.min(y, 185) - 2, 30, height + 4);
      }
      h.fillStyle = "#40564b";
      if (j % 4 === 0 || j === 15) h.fillText(j, left + 13, 375);
    });
  }
  for (let i = 0; i < N; i++) {
    const b = document.createElement("button");
    b.addEventListener("click", () => {
      x[i] *= -1;
      $("preset").value = "custom";
      render();
    });
    $("pattern").append(b);
  }
  ["shift", "n", "candidate"].forEach((id) => $(id).addEventListener("input", render));
  $("preset").addEventListener("change", () => {
    x = presets[$("preset").value].slice();
    render();
  });
  $("noise").addEventListener("click", () => {
    newNoise();
    render();
  });
  $("best").addEventListener("click", () => {
    $("candidate").value = state.peaks[0];
    render();
  });
  $("score").addEventListener("pointerdown", (e) => {
    const r = $("score").getBoundingClientRect();
    $("candidate").value = Math.max(0, Math.min(15, Math.floor(((e.clientX - r.left) * 640 / r.width - 30) / 36.5)));
    render();
  });
  $("reset").addEventListener("click", () => {
    x = presets.asymmetric.slice();
    $("preset").value = "asymmetric";
    $("shift").value = 5;
    $("n").value = 0.3;
    $("candidate").value = 0;
    render();
  });
  $("export").addEventListener("click", () => {
    const a = document.createElement("a"), url = URL.createObjectURL(new Blob([JSON.stringify(state, null, 2)], { type: "application/json" }));
    a.href = url;
    a.download = "circular-match.json";
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1e3);
  });
  newNoise();
  render();
})();
