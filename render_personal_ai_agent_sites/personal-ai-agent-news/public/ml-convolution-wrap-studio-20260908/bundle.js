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
      FFT2.prototype.transform = function transform(out, data2) {
        if (out === data2)
          throw new Error("Input and output buffers must be different");
        this._out = out;
        this._data = data2;
        this._inv = 0;
        this._transform4();
        this._out = null;
        this._data = null;
      };
      FFT2.prototype.realTransform = function realTransform(out, data2) {
        if (out === data2)
          throw new Error("Input and output buffers must be different");
        this._out = out;
        this._data = data2;
        this._inv = 0;
        this._realTransform4();
        this._out = null;
        this._data = null;
      };
      FFT2.prototype.inverseTransform = function inverseTransform(out, data2) {
        if (out === data2)
          throw new Error("Input and output buffers must be different");
        this._out = out;
        this._data = data2;
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
        const data2 = this._data;
        const evenR = data2[off];
        const evenI = data2[off + 1];
        const oddR = data2[off + step];
        const oddI = data2[off + step + 1];
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
        const data2 = this._data;
        const inv = this._inv ? -1 : 1;
        const step2 = step * 2;
        const step3 = step * 3;
        const Ar = data2[off];
        const Ai = data2[off + 1];
        const Br = data2[off + step];
        const Bi = data2[off + step + 1];
        const Cr = data2[off + step2];
        const Ci = data2[off + step2 + 1];
        const Dr = data2[off + step3];
        const Di = data2[off + step3 + 1];
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
        const data2 = this._data;
        const evenR = data2[off];
        const oddR = data2[off + step];
        const leftR = evenR + oddR;
        const rightR = evenR - oddR;
        out[outOff] = leftR;
        out[outOff + 1] = 0;
        out[outOff + 2] = rightR;
        out[outOff + 3] = 0;
      };
      FFT2.prototype._singleRealTransform4 = function _singleRealTransform4(outOff, off, step) {
        const out = this._out;
        const data2 = this._data;
        const inv = this._inv ? -1 : 1;
        const step2 = step * 2;
        const step3 = step * 3;
        const Ar = data2[off];
        const Br = data2[off + step];
        const Cr = data2[off + step2];
        const Dr = data2[off + step3];
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

  // .codex-tmp/personal-ai-agent-news/ml-convolution-wrap-studio-20260908/app.js
  var import_fft = __toESM(require_fft());
  var $ = (x) => document.getElementById(x);
  var initial = [1, 2, 1, 2];
  var kernels = { smooth: [0.25, 0.5, 0.25], difference: [1, 0, -1], delay: [0, 0, 1] };
  var fmt = (x) => Math.abs(x) < 1e-10 ? "0" : Number(x.toPrecision(5)).toString();
  var data;
  $("inputs").innerHTML = initial.map((v, i) => "<label>x[" + i + '] <output id="o' + i + '"></output><input type="range" id="x' + i + '" aria-label="Input ' + i + '" min="-2" max="2" step="0.25" value="' + v + '"></label>').join("");
  function draw() {
    const c = $("plot"), r = c.getBoundingClientRect(), d = devicePixelRatio || 1;
    c.width = r.width * d;
    c.height = r.height * d;
    const g = c.getContext("2d");
    g.scale(d, d);
    g.fillStyle = "white";
    g.fillRect(0, 0, r.width, r.height);
    const max = Math.max(1, ...data.linear, ...data.real), min = Math.min(-0.5, ...data.linear, ...data.real), X = (i) => 40 + (r.width - 65) * (i + 0.5) / 8, Y = (v) => 25 + (r.height - 65) * (max - v) / (max - min);
    g.font = "12px system-ui";
    g.textAlign = "center";
    g.strokeStyle = "#cdd5df";
    g.beginPath();
    g.moveTo(35, Y(0));
    g.lineTo(r.width - 15, Y(0));
    g.stroke();
    g.fillStyle = "#2b333c";
    g.fillText(fmt(max), 15, 30);
    g.fillText(fmt(min), 15, r.height - 38);
    for (let i = 0; i < 8; i++) {
      g.fillStyle = "#246988";
      if (i < 6) {
        const y = Y(data.linear[i]);
        g.fillRect(X(i) - 8, Math.min(y, Y(0)), 16, Math.max(1, Math.abs(y - Y(0))));
      }
      if (i < data.size) {
        g.fillStyle = "#b34b76";
        g.beginPath();
        g.arc(X(i), Y(data.real[i]), 4, 0, 2 * Math.PI);
        g.fill();
      }
      g.fillStyle = "#2b333c";
      g.fillText(String(i), X(i), r.height - 12);
    }
  }
  function render() {
    const x = initial.map((_, i) => +$("x" + i).value), h = kernels[$("kernel").value], size = +$("size").value, linear = Array(6).fill(0);
    x.forEach((a, i) => h.forEach((b, j) => linear[i + j] += a * b));
    const fft = new import_fft.default(size), X = fft.createComplexArray(), H = fft.createComplexArray(), P = fft.createComplexArray(), out = fft.createComplexArray();
    fft.transform(X, fft.toComplexArray(Array.from({ length: size }, (_, i) => x[i] || 0)));
    fft.transform(H, fft.toComplexArray(Array.from({ length: size }, (_, i) => h[i] || 0)));
    for (let i = 0; i < size; i++) {
      P[2 * i] = X[2 * i] * H[2 * i] - X[2 * i + 1] * H[2 * i + 1];
      P[2 * i + 1] = X[2 * i] * H[2 * i + 1] + X[2 * i + 1] * H[2 * i];
    }
    fft.inverseTransform(out, P);
    const real = Array.from({ length: size }, (_, i) => out[2 * i]), imaginary = Array.from({ length: size }, (_, i) => out[2 * i + 1]), folded = Array(size).fill(0);
    linear.forEach((v, i) => folded[i % size] += v);
    data = { x, h, size, linear, real, imaginary, folded, error: Math.max(...real.map((v, i) => Math.abs(v - folded[i]))) };
    x.forEach((v, i) => $("o" + i).textContent = fmt(v));
    $("rows").innerHTML = Array.from({ length: 8 }, (_, i) => "<tr><td>" + i + "</td><td>" + (i < 6 ? fmt(linear[i]) : "0 (padded)") + "</td><td>" + (i < size ? fmt(real[i]) : "No sample") + "</td><td>" + (i < size ? fmt(folded[i]) : "No sample") + "</td></tr>").join("");
    $("status").textContent = size === 4 ? "Tail contribution: index 4 adds " + fmt(linear[4]) + " to 0; index 5 adds " + fmt(linear[5]) + " to 1." : "Eight samples provide room for the complete six-sample linear result.";
    $("proof").textContent = "Max FFT versus folded-sum error: " + data.error.toExponential(2) + ". Max imaginary remainder: " + Math.max(...imaginary.map(Math.abs)).toExponential(2) + ".";
    draw();
  }
  initial.forEach((_, i) => $("x" + i).oninput = render);
  $("kernel").onchange = render;
  $("size").onchange = render;
  $("impulse").onclick = () => {
    [0, 0, 0, 1].forEach((v, i) => $("x" + i).value = v);
    render();
  };
  $("reset").onclick = () => {
    initial.forEach((v, i) => $("x" + i).value = v);
    $("kernel").value = "smooth";
    $("size").value = "4";
    render();
  };
  $("export").onclick = () => {
    const u = URL.createObjectURL(new Blob([JSON.stringify(data, null, 2)], { type: "application/json" })), a = document.createElement("a");
    a.href = u;
    a.download = "convolution-wrap.json";
    a.click();
    setTimeout(() => URL.revokeObjectURL(u), 1e3);
  };
  window.addEventListener("resize", draw);
  render();
})();
