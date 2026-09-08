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

  // .codex-tmp/dtw-build/node_modules/dynamic-time-warping/src/dynamic-time-warping.js
  var require_dynamic_time_warping = __commonJS({
    ".codex-tmp/dtw-build/node_modules/dynamic-time-warping/src/dynamic-time-warping.js"(exports, module) {
      (function() {
        "use strict";
        function DynamicTimeWarping(ts1, ts2, distanceFunction) {
          var ser1 = ts1;
          var ser2 = ts2;
          var distFunc = distanceFunction;
          var distance;
          var matrix;
          var path2;
          var getDistance = function() {
            if (distance !== void 0) {
              return distance;
            }
            matrix = [];
            for (var i = 0; i < ser1.length; i++) {
              matrix[i] = [];
              for (var j = 0; j < ser2.length; j++) {
                var cost2 = Infinity;
                if (i > 0) {
                  cost2 = Math.min(cost2, matrix[i - 1][j]);
                  if (j > 0) {
                    cost2 = Math.min(cost2, matrix[i - 1][j - 1]);
                    cost2 = Math.min(cost2, matrix[i][j - 1]);
                  }
                } else {
                  if (j > 0) {
                    cost2 = Math.min(cost2, matrix[i][j - 1]);
                  } else {
                    cost2 = 0;
                  }
                }
                matrix[i][j] = cost2 + distFunc(ser1[i], ser2[j]);
              }
            }
            return matrix[ser1.length - 1][ser2.length - 1];
          };
          this.getDistance = getDistance;
          var getPath = function() {
            if (path2 !== void 0) {
              return path2;
            }
            if (matrix === void 0) {
              getDistance();
            }
            var i = ser1.length - 1;
            var j = ser2.length - 1;
            path2 = [[i, j]];
            while (i > 0 || j > 0) {
              if (i > 0) {
                if (j > 0) {
                  if (matrix[i - 1][j] < matrix[i - 1][j - 1]) {
                    if (matrix[i - 1][j] < matrix[i][j - 1]) {
                      path2.push([i - 1, j]);
                      i--;
                    } else {
                      path2.push([i, j - 1]);
                      j--;
                    }
                  } else {
                    if (matrix[i - 1][j - 1] < matrix[i][j - 1]) {
                      path2.push([i - 1, j - 1]);
                      i--;
                      j--;
                    } else {
                      path2.push([i, j - 1]);
                      j--;
                    }
                  }
                } else {
                  path2.push([i - 1, j]);
                  i--;
                }
              } else {
                path2.push([i, j - 1]);
                j--;
              }
            }
            path2 = path2.reverse();
            return path2;
          };
          this.getPath = getPath;
        }
        var root = typeof self === "object" && self.self === self && self || typeof global === "object" && global.global === global && global || this;
        if (typeof exports !== "undefined" && !exports.nodeType) {
          if (typeof module !== "undefined" && !module.nodeType && module.exports) {
            exports = module.exports = DynamicTimeWarping;
          }
          exports.DynamicTimeWarping = DynamicTimeWarping;
        } else {
          root.DynamicTimeWarping = DynamicTimeWarping;
        }
        if (typeof define === "function" && define.amd) {
          define("dynamic-time-warping", [], function() {
            return DynamicTimeWarping;
          });
        }
      })();
    }
  });

  // .codex-tmp/personal-ai-agent-news/ml-warping-path-studio-20260908/app.js
  var import_dynamic_time_warping = __toESM(require_dynamic_time_warping());
  var $ = (id) => document.getElementById(id);
  var base = [0, 1, 4, 4, 1, 0];
  var presets = { stretched: [0, 1, 1, 4, 4, 4, 1, 0], identical: [...base], delayed: [0, 0, 1, 4, 4, 0] };
  var A;
  var B;
  var path = [];
  var total = 0;
  var valid = true;
  function cost(a, b) {
    return $("metric").value === "absolute" ? Math.abs(a - b) : (a - b) ** 2;
  }
  function inputs() {
    for (const [id, seq] of [["A", A], ["B", B]]) {
      $("seq" + id).innerHTML = seq.map((v, i) => "<label>" + id + "[" + i + ']<input type="number" aria-label="' + id + " sample " + i + '" id="' + id + i + '" min="0" max="6" step="1" value="' + v + '"></label>').join("");
      seq.forEach((_, i) => $(id + i).oninput = (e) => {
        seq[i] = e.target.value === "" ? NaN : +e.target.value;
        calculate();
      });
    }
  }
  function reset() {
    A = [...base];
    B = [...presets[$("preset").value]];
    inputs();
    calculate();
  }
  function calculate() {
    valid = [...A, ...B].every((v) => Number.isInteger(v) && v >= 0 && v <= 6);
    $("error").textContent = valid ? "" : "Every sample must be an integer from 0 to 6.";
    $("export").disabled = $("pair").disabled = !valid;
    if (!valid) {
      $("total").textContent = $("baseline").textContent = $("length").textContent = "Invalid";
      $("costs").innerHTML = "";
      $("selected").textContent = "Alignment unavailable.";
      const c = $("signal");
      c.getContext("2d").clearRect(0, 0, c.width, c.height);
      return;
    }
    const engine = new import_dynamic_time_warping.default(A, B, cost);
    total = engine.getDistance();
    path = engine.getPath();
    $("total").textContent = total;
    $("baseline").textContent = A.length === B.length ? A.reduce((s, a, i) => s + cost(a, B[i]), 0) : "Unequal lengths";
    $("length").textContent = path.length;
    $("pair").max = path.length;
    $("pair").value = 1;
    render();
  }
  function render() {
    if (!valid) return;
    const selected = path[+$("pair").value - 1];
    $("selected").textContent = "A[" + selected[0] + "] = " + A[selected[0]] + "; B[" + selected[1] + "] = " + B[selected[1]] + "; local cost " + cost(A[selected[0]], B[selected[1]]) + ".";
    const grid = $("costs");
    grid.style.gridTemplateColumns = "32px repeat(" + B.length + ",minmax(0,1fr))";
    grid.innerHTML = '<div class="cell">A/B</div>' + B.map((_, j) => '<div class="cell">' + j + "</div>").join("") + A.map((a, i) => '<div class="cell">' + i + "</div>" + B.map((b, j) => {
      const on = path.some((p) => p[0] === i && p[1] === j), sel = selected[0] === i && selected[1] === j;
      return '<div class="cell ' + (on ? "path " : "") + (sel ? "selected" : "") + '" style="background:rgba(49,119,154,' + (0.06 + 0.35 * cost(a, b) / ($("metric").value === "absolute" ? 6 : 36)) + ')">' + cost(a, b) + "</div>";
    }).join("")).join("");
    const canvas = $("signal"), r = canvas.getBoundingClientRect(), d = devicePixelRatio || 1;
    canvas.width = r.width * d;
    canvas.height = r.height * d;
    const c = canvas.getContext("2d");
    c.scale(d, d);
    const left = 34, right = r.width - 22, x = (i) => left + i / (Math.max(A.length, B.length) - 1) * (right - left), span = r.height * 0.25, ya = (v) => r.height * 0.39 - v / 6 * span, yb = (v) => r.height * 0.89 - v / 6 * span;
    c.lineWidth = 1;
    c.strokeStyle = "#dce2e6";
    c.font = "12px system-ui";
    c.fillStyle = "#465866";
    for (const [label, y] of [["A", ya], ["B", yb]]) {
      c.fillText(label, 6, y(3));
      [0, 6].forEach((v) => {
        c.fillText(v, 20, y(v) + 3);
        c.beginPath();
        c.moveTo(left, y(v));
        c.lineTo(right, y(v));
        c.stroke();
      });
    }
    path.forEach(([i, j]) => {
      c.strokeStyle = selected[0] === i && selected[1] === j ? "#a33b19" : "#bccbd2";
      c.lineWidth = selected[0] === i && selected[1] === j ? 3 : 1;
      c.beginPath();
      c.moveTo(x(i), ya(A[i]));
      c.lineTo(x(j), yb(B[j]));
      c.stroke();
    });
    for (const [seq, y, color] of [[A, ya, "#216a9a"], [B, yb, "#986122"]]) {
      c.strokeStyle = color;
      c.lineWidth = 2;
      c.beginPath();
      seq.forEach((v, i) => i ? c.lineTo(x(i), y(v)) : c.moveTo(x(i), y(v)));
      c.stroke();
      c.fillStyle = color;
      seq.forEach((v, i) => {
        c.beginPath();
        c.arc(x(i), y(v), 4, 0, 2 * Math.PI);
        c.fill();
      });
    }
    c.fillStyle = "#465866";
    for (let i = 0; i < Math.max(A.length, B.length); i++) c.fillText(i, x(i) - 3, r.height - 7);
  }
  $("pair").oninput = render;
  $("preset").onchange = reset;
  $("metric").onchange = calculate;
  $("reset").onclick = reset;
  $("export").onclick = () => {
    const data = { A, B, localCost: $("metric").value, totalCost: total, path, pathCosts: path.map(([i, j]) => cost(A[i], B[j])) };
    const u = URL.createObjectURL(new Blob([JSON.stringify(data, null, 2)], { type: "application/json" }));
    const a = document.createElement("a");
    a.href = u;
    a.download = "warping-path.json";
    a.click();
    setTimeout(() => URL.revokeObjectURL(u), 1e3);
  };
  new ResizeObserver(() => path.length && render()).observe($("signal").parentElement);
  reset();
})();
