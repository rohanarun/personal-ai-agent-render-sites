(() => {
  // .codex-tmp/isotonic-build/node_modules/isotonic/dist/mjs/isotonic.min.js
  var A = "undefined" != typeof BigUint64Array;
  var Q = Symbol();
  var E = new TextDecoder("utf-16le");
  function B(A2, Q2) {
    const B2 = new Uint32Array(A2)[Q2 + -4 >>> 2] >>> 1, g2 = new Uint16Array(A2, Q2, B2);
    return B2 <= 32 ? String.fromCharCode.apply(String, g2) : E.decode(g2);
  }
  function g(A2) {
    const Q2 = {};
    function E2(A3, Q3) {
      return A3 ? B(A3.buffer, Q3) : "<yet unknown>";
    }
    const g2 = A2.env = A2.env || {};
    return g2.abort = g2.abort || function(A3, B2, I2, C2) {
      const t2 = Q2.memory || g2.memory;
      throw Error(`abort: ${E2(t2, A3)} at ${E2(t2, B2)}:${I2}:${C2}`);
    }, g2.trace = g2.trace || function(A3, B2, ...I2) {
      const C2 = Q2.memory || g2.memory;
      console.log(`trace: ${E2(C2, A3)}${B2 ? " " : ""}${I2.slice(0, B2).join(", ")}`);
    }, g2.seed = g2.seed || Date.now, A2.Math = A2.Math || Math, A2.Date = A2.Date || Date, Q2;
  }
  var I = function() {
    throw Error("Operation requires compiling with --exportRuntime");
  };
  function C(Q2, E2) {
    const g2 = E2.exports, C2 = g2.memory, t2 = g2.table, r2 = g2.__new || I, n2 = g2.__pin || I, e2 = g2.__unpin || I, R2 = g2.__collect || I, o2 = g2.__rtti_base, s = o2 ? function(A2) {
      return A2[o2 >>> 2];
    } : I;
    function a(A2) {
      const Q3 = (function(A3) {
        const Q4 = new Uint32Array(C2.buffer);
        if ((A3 >>>= 0) >= s(Q4)) throw Error(`invalid id: ${A3}`);
        return Q4[(o2 + 4 >>> 2) + 2 * A3];
      })(A2);
      if (!(7 & Q3)) throw Error(`not an array: ${A2}, flags=${Q3}`);
      return Q3;
    }
    function w(A2) {
      const Q3 = new Uint32Array(C2.buffer);
      if ((A2 >>>= 0) >= s(Q3)) throw Error(`invalid id: ${A2}`);
      return Q3[(o2 + 4 >>> 2) + 2 * A2 + 1];
    }
    function D(A2) {
      return 31 - Math.clz32(A2 >>> 6 & 31);
    }
    function c(A2, Q3, E3) {
      const B2 = C2.buffer;
      if (E3) switch (A2) {
        case 2:
          return new Float32Array(B2);
        case 3:
          return new Float64Array(B2);
      }
      else switch (A2) {
        case 0:
          return new (Q3 ? Int8Array : Uint8Array)(B2);
        case 1:
          return new (Q3 ? Int16Array : Uint16Array)(B2);
        case 2:
          return new (Q3 ? Int32Array : Uint32Array)(B2);
        case 3:
          return new (Q3 ? BigInt64Array : BigUint64Array)(B2);
      }
      throw Error(`unsupported align: ${A2}`);
    }
    function y(A2) {
      const Q3 = new Uint32Array(C2.buffer), E3 = a(Q3[A2 + -8 >>> 2]), B2 = D(E3);
      let g3 = 4 & E3 ? A2 : Q3[A2 + 4 >>> 2];
      const I2 = 2 & E3 ? Q3[A2 + 12 >>> 2] : Q3[g3 + -4 >>> 2] >>> B2;
      return c(B2, 2048 & E3, 4096 & E3).subarray(g3 >>>= B2, g3 + I2);
    }
    function M(A2, Q3, E3) {
      return new A2(F(A2, Q3, E3));
    }
    function F(A2, Q3, E3) {
      const B2 = C2.buffer, g3 = new Uint32Array(B2), I2 = g3[E3 + 4 >>> 2];
      return new A2(B2, I2, g3[I2 + -4 >>> 2] >>> Q3);
    }
    function U(A2, E3, B2) {
      Q2[`__get${E3}`] = M.bind(null, A2, B2), Q2[`__get${E3}View`] = F.bind(null, A2, B2);
    }
    return Q2.__new = r2, Q2.__pin = n2, Q2.__unpin = e2, Q2.__collect = R2, Q2.__newString = function(A2) {
      if (null == A2) return 0;
      const Q3 = A2.length, E3 = r2(Q3 << 1, 1), B2 = new Uint16Array(C2.buffer);
      for (var g3 = 0, I2 = E3 >>> 1; g3 < Q3; ++g3) B2[I2 + g3] = A2.charCodeAt(g3);
      return E3;
    }, Q2.__getString = function(A2) {
      if (!A2) return null;
      const Q3 = C2.buffer;
      if (1 !== new Uint32Array(Q3)[A2 + -8 >>> 2]) throw Error(`not a string: ${A2}`);
      return B(Q3, A2);
    }, Q2.__newArray = function(A2, Q3) {
      const E3 = a(A2), B2 = D(E3), g3 = Q3.length, I2 = r2(g3 << B2, 4 & E3 ? A2 : 0);
      let t3;
      if (4 & E3) t3 = I2;
      else {
        n2(I2);
        const Q4 = r2(2 & E3 ? 16 : 12, A2);
        e2(I2);
        const i3 = new Uint32Array(C2.buffer);
        i3[Q4 + 0 >>> 2] = I2, i3[Q4 + 4 >>> 2] = I2, i3[Q4 + 8 >>> 2] = g3 << B2, 2 & E3 && (i3[Q4 + 12 >>> 2] = g3), t3 = Q4;
      }
      const i2 = c(B2, 2048 & E3, 4096 & E3);
      if (16384 & E3) for (let A3 = 0; A3 < g3; ++A3) {
        const E4 = Q3[A3];
        i2[(I2 >>> B2) + A3] = E4;
      }
      else i2.set(Q3, I2 >>> B2);
      return t3;
    }, Q2.__getArrayView = y, Q2.__getArray = function(A2) {
      const Q3 = y(A2), E3 = Q3.length, B2 = new Array(E3);
      for (let A3 = 0; A3 < E3; A3++) B2[A3] = Q3[A3];
      return B2;
    }, Q2.__getArrayBuffer = function(A2) {
      const Q3 = C2.buffer, E3 = new Uint32Array(Q3)[A2 + -4 >>> 2];
      return Q3.slice(A2, A2 + E3);
    }, [Int8Array, Uint8Array, Uint8ClampedArray, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array].forEach(((A2) => {
      U(A2, A2.name, 31 - Math.clz32(A2.BYTES_PER_ELEMENT));
    })), A && [BigUint64Array, BigInt64Array].forEach(((A2) => {
      U(A2, A2.name.slice(3), 3);
    })), Q2.__instanceof = function(A2, Q3) {
      const E3 = new Uint32Array(C2.buffer);
      let B2 = E3[A2 + -8 >>> 2];
      if (B2 <= s(E3)) do {
        if (B2 == Q3) return true;
        B2 = w(B2);
      } while (B2);
      return false;
    }, Q2.memory = Q2.memory || C2, Q2.table = Q2.table || t2, i(g2, Q2);
  }
  function t(A2) {
    return "undefined" != typeof Response && A2 instanceof Response;
  }
  function r(A2) {
    return A2 instanceof WebAssembly.Module;
  }
  async function n(A2, Q2 = {}) {
    if (t(A2 = await A2)) return e(A2, Q2);
    const E2 = r(A2) ? A2 : await WebAssembly.compile(A2), B2 = g(Q2), I2 = await WebAssembly.instantiate(E2, Q2);
    return { module: E2, instance: I2, exports: C(B2, I2) };
  }
  async function e(A2, Q2 = {}) {
    if (!WebAssembly.instantiateStreaming) return n(t(A2 = await A2) ? A2.arrayBuffer() : A2, Q2);
    const E2 = g(Q2), B2 = await WebAssembly.instantiateStreaming(A2, Q2), I2 = C(E2, B2.instance);
    return { ...B2, exports: I2 };
  }
  function i(A2, E2 = {}) {
    const B2 = A2.__argumentsLength ? (Q2) => {
      A2.__argumentsLength.value = Q2;
    } : A2.__setArgumentsLength || A2.__setargc || (() => {
    });
    for (let g2 in A2) {
      if (!Object.prototype.hasOwnProperty.call(A2, g2)) continue;
      const I2 = A2[g2];
      let C2 = g2.split("."), t2 = E2;
      for (; C2.length > 1; ) {
        let A3 = C2.shift();
        Object.prototype.hasOwnProperty.call(t2, A3) || (t2[A3] = {}), t2 = t2[A3];
      }
      let r2 = C2[0], n2 = r2.indexOf("#");
      if (n2 >= 0) {
        const E3 = r2.substring(0, n2), C3 = t2[E3];
        if (void 0 === C3 || !C3.prototype) {
          const A3 = function(...Q2) {
            return A3.wrap(A3.prototype.constructor(0, ...Q2));
          };
          A3.prototype = { valueOf() {
            return this[Q];
          } }, A3.wrap = function(E4) {
            return Object.create(A3.prototype, { [Q]: { value: E4, writable: false } });
          }, C3 && Object.getOwnPropertyNames(C3).forEach(((Q2) => Object.defineProperty(A3, Q2, Object.getOwnPropertyDescriptor(C3, Q2)))), t2[E3] = A3;
        }
        if (r2 = r2.substring(n2 + 1), t2 = t2[E3].prototype, /^(get|set):/.test(r2)) {
          if (!Object.prototype.hasOwnProperty.call(t2, r2 = r2.substring(4))) {
            let E4 = A2[g2.replace("set:", "get:")], B3 = A2[g2.replace("get:", "set:")];
            Object.defineProperty(t2, r2, { get() {
              return E4(this[Q]);
            }, set(A3) {
              B3(this[Q], A3);
            }, enumerable: true });
          }
        } else "constructor" === r2 ? (t2[r2] = (...A3) => (B2(A3.length), I2(...A3))).original = I2 : (t2[r2] = function(...A3) {
          return B2(A3.length), I2(this[Q], ...A3);
        }).original = I2;
      } else /^(get|set):/.test(r2) ? Object.prototype.hasOwnProperty.call(t2, r2 = r2.substring(4)) || Object.defineProperty(t2, r2, { get: A2[g2.replace("set:", "get:")], set: A2[g2.replace("get:", "set:")], enumerable: true }) : "function" == typeof I2 && I2 !== B2 ? (t2[r2] = (...A3) => (B2(A3.length), I2(...A3))).original = I2 : t2[r2] = I2;
    }
    return E2;
  }
  var R = { instantiate: n, instantiateSync: function(A2, Q2 = {}) {
    const E2 = r(A2) ? A2 : new WebAssembly.Module(A2), B2 = g(Q2), I2 = new WebAssembly.Instance(E2, Q2);
    return { module: E2, instance: I2, exports: C(B2, I2) };
  }, instantiateStreaming: e, demangle: i };
  var o = (A2) => R.instantiate(fetch("data:application/octet-binary;base64,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AUECdGooAgQiAkUEQEEAQdALQdcCQRIQAAALIAAgAmggAUEEdGpBAnRqKAJgBUEACwsL6QIBA38gAUH8////A0sEQEGACUHQC0HKA0EdEAAACyAAQQwgAUETakFwcUEEayABQQxNGyICEA4iAUUEQEEEPwAiAUEQdEEEayAAKAKgDEd0IAJBAUEbIAJna3RBAWtqIAIgAkH+////AUkbakH//wNqQYCAfHFBEHYhAyABIAMgASADShtAAEEASARAIANAAEEASARAAAsLIAAgAUEQdD8AQRB0EAsgACACEA4iAUUEQEEAQdALQfADQRAQAAALCyACIAEoAgBBfHFLBEBBAEHQC0HyA0EOEAAACyAAIAEQCSABKAIAIQMgAkEEakEPcQRAQQBB0AtB5QJBDhAAAAsgA0F8cSACayIEQRBPBEAgASACIANBAnFyNgIAIAIgAUEEamoiAiAEQQRrQQFyNgIAIAAgAhAKBSABIANBfnE2AgAgAUEEaiIAIAEoAgBBfHFqIAAgASgCAEF8cWooAgBBfXE2AgALIAEL1gIBAX8CQCABRQ0AIABBADoAACAAIAFqIgJBAWtBADoAACABQQJNDQAgAEEAOgABIABBADoAAiACQQJrQQA6AAAgAkEDa0EAOgAAIAFBBk0NACAAQQA6AAMgAkEEa0EAOgAAIAFBCE0NACAAQQAgAGtBA3EiAmoiAEEANgIAIAAgASACa0F8cSICaiIBQQRrQQA2AgAgAkEITQ0AIABBADYCBCAAQQA2AgggAUEMa0EANgIAIAFBCGtBADYCACACQRhNDQAgAEEANgIMIABBADYCECAAQQA2AhQgAEEANgIYIAFBHGtBADYCACABQRhrQQA2AgAgAUEUa0EANgIAIAFBEGtBADYCACAAIABBBHFBGGoiAWohACACIAFrIQEDQCABQSBPBEAgAEIANwMAIABCADcDCCAAQgA3AxAgAEIANwMYIAFBIGshASAAQSBqIQAMAQsLCwuyAQEBfyAAQez///8DTwRAQYAJQcAJQYQCQR8QAAALIwQjBU8EQAJAQYAQIQIDQCACEA1rIQIjBkUEQCMErULIAX5C5ACAp0GACGokBQwCCyACQQBKDQALIwQjBCMFa0GACElBCnRqJAULCyAAQRBqIQIjDUUEQBAMCyMNIAIQDyICIAE2AgwgAiAANgIQ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aiACNgIAC3UBA38gACgCDEEBayEDA0AgAyAEa0EBSgRAIAAgBLcgAyAEa0ECbbecoKoiAhAUIAFjBEAgAiEEBSAAIAIQFCABZEUEQCACDwsgAiEDCwwBCwsgACADEBQgAWMEQCADQQFqDwsgACAEEBQgAWQEQCAEDwsgAwsRACAAIAE2AiQgACABQQAQEgsRACAAIAE2AiggACABQQAQEgsRACAAIAE2AiwgACABQQAQEgsEACAACxEAIAAgATYCMCAAIAFBABASC1oCAn8BfCAAKAIMIgIEQCAAKAIEIQEgACgCBCACQQFrQQN0aiEAA0AgACABSwRAIAErAwAhAyABIAArAwA5AwAgACADOQMAIAFBCGohASAAQQhrIQAMAQsLCwstAQJ/IAAgACgCDCICQQFqIgNBAxAXIAAoAgQgAkEDdGogATkDACAAIAM2AgwL7gMBAn8jEUEYayQREDQjEUIANwMAIxFCADcDCCMRQgA3AxAgASACIANBARA1IxEgASACIAMQPSIDNgIAIxEgA0EAEDoiAjYCBCMRIANBARA6IgE2AggjESADQQIQOiIDNgIMIAAtACBFBEAgARAqIAMQKgsgASADEDYDQCAEIAEoAgxIBEAgASAEEBQgACsDAGMEQCABIAQgACsDABAcCyABIAQQFCAAKwMIZARAIAEgBCAAKwMIEBwLIARBAWohBAwBCwsgAC0AIEUEQCABECoLQQAhBANAIAQgAigCDEgEQCACIAQQFCAAKwMYZARAIAAgAiAEEBQ5AxgLIAIgBBAUIAArAxBjBEAgACACIAQQFDkDEAsgBEEBaiEEDAELCyMRQQAQPCIENgIQIxFBABA8IgU2AhQgBCACQQAQFBArIAUgAUEAEBQQK0EBIQMDQCADIAEoAgxBAWtIBEAgASADEBQgASADQQFrEBShmUSN7bWg98awPmQEf0EBBSABIAMQFCABIANBAWoQFKGZRI3ttaD3xrA+ZAsEQCAEIAIgAxAUECsgBSABIAMQFBArCyADQQFqIQMMAQsLIAQgAiACKAIMQQFrEBQQKyAFIAEgASgCDEEBaxAUECsgACAEECUgACAFECYjEUEYaiQRCy8AIAEgACgCCEEDdk8EQEHACkHwD0HpCkHAABAAAAsgACgCBCABQQN0aiACOQMACzgBAX8gAARAIABBFGsiASgC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ACMRQQRrJBEQNCMRIAA2AgAgACABECQhACMRQQRqJBEgAAskAQF8IxFBBGskERA0IxEgADYCACAAKwMAIQEjEUEEaiQRIAELIAAjEUEEayQREDQjESAANgIAIAAgATkDACMRQQRqJBELJAEBfCMRQQRrJBEQNCMRIAA2AgAgACsDCCEBIxFBBGokESABCyAAIxFBBGskERA0IxEgADYCACAAIAE5AwgjEUEEaiQRCyQBAXwjEUEEayQREDQjESAANgIAIAArAxAhASMRQQRqJBEgAQsgACMRQQRrJBEQNCMRIAA2AgAgACABOQMQIxFBBGokEQskAQF8IxFBBGskERA0IxEgADYCACAAKwMYIQEjEUEEaiQRIAELIAAjEUEEayQREDQjESAANgIAIAAgATkDGCMRQQRqJBELIgAjEUEEayQREDQjESAANgIAIAAtACAhACMRQQRqJBEgAAsgACMRQQRrJBEQNCMRIAA2AgAgACABOgAgIxFBBGokEQsiACMRQQRrJBEQNCMRIAA2AgAgAC0AISEAIxFBBGokESAACyAAIxFBBGskERA0IxEgADYCACAAIAE6ACEjEUEEaiQRCyIAIxFBBGskERA0IxEgADYCACAAKAIkIQAjEUEEaiQRIAALJgAjEUEIayQREDQjESAANgIAIxEgATYCBCAAIAEQJSMRQQhqJBELIgAjEUEEayQREDQjESAANgIAIAAoAighACMRQQRqJBEgAAsmACMRQQhrJBEQNCMRIAA2AgAjESABNgIEIAAgARAmIxFBCGokEQsiACMRQQRrJBEQNCMRIAA2AgAgACgCLCEAIxFBBGokESAACyYAIxFBCGskERA0IxEgADYCACMRIAE2AgQgACABECcjEUEIaiQRCyIAIxFBBGskERA0IxEgADYCACAAKAIwIQAjEUEEaiQRIAALJgAjEUEIayQREDQjESAANgIAIxEgATYCBCAAIAEQKSMRQQhqJBELKQAjEUEEayQREDQjESAANgIAIAAgASACIAMgBBA+IQAjEUEEaiQRIAALOAAjEUEQayQREDQjESAANgIAIxEgATYCBCMRIAI2AggjESADNgIMIAAgASACIAMQLCMRQRBqJBELKgAjEUEIayQREDQjESAANgIAIxEgATYCBCAAIAEQNyEAIxFBCGokESAAC2kAIxFBBGskERA0IxEgADYCACAAQQBBA0EDQbAQEDgQJSAAQQBBA0EDQdAQEDgQJiAAQQBBA0EDQfAQEDgQJyAAQZARECkgAEQAAAAAAADwfzkDECAARAAAAAAAAPD/OQMYIxFBBGokEQsL0QcuAEGMCAsBLABBmAgLIwEAAAAcAAAASQBuAHYAYQBsAGkAZAAgAGwAZQBuAGcAdABoAEG8CAsBLABByAgLIQEAAAAaAAAAfgBsAGkAYgAvAGEAcgByAGEAeQAuAHQAcwBB7AgLATwAQfgICy8BAAAAKAAAAEEAbABsAG8AYwBhAHQAaQBvAG4AIAB0AG8AbwAgAGwAYQByAGcAZQBBrAkLATwAQbgJCycBAAAAIAAAAH4AbABpAGIALwByAHQALwBpAHQAYwBtAHMALgB0AHMAQawKCwE8AEG4CgsrAQAAACQAAABJAG4AZABlAHgAIABvAHUAdAAgAG8AZgAgAHIAYQBuAGcAZQBB7AoLASwAQfgKCxsBAAAAFAAAAH4AbABpAGIALwByAHQALgB0AHMAQbwLCwE8AEHICwslAQAAAB4AAAB+AGwAaQBiAC8AcgB0AC8AdABsAHMAZgAuAHQAcwBB/AsLARwAQYgMCwkGAAAACAAAAAEAQZwMCwEcAEGoDAsJBgAAAAgAAAACAEG8DAsBfABByAwLZQEAAABeAAAARQBsAGUAbQBlAG4AdAAgAHQAeQBwAGUAIABtAHUAcwB0ACAAYgBlACAAbgB1AGwAbABhAGIAbABlACAAaQBmACAAYQByAHIAYQB5ACAAaQBzACAAaABvAGwAZQB5AEG8DQsBPABByA0LLQEAAAAmAAAAfgBsAGkAYgAvAGEAcgByAGEAeQBiAHUAZgBmAGUAcgAuAHQAcwBB/A0LATwAQYgOCy8BAAAAKAAAAGEAcwBzAGUAbQBiAGwAeQAvAGkAcwBvAHQAbwBuAGkAYwAuAHQAcwBBvA4LARwAQcgOCwkIAAAACAAAAAMAQdwOCwEcAEH8DgsBHABBnA8LARwAQbwPCwEcAEHIDwsJCgAAAAgAAAAEAEHcDwsBPABB6A8LKwEAAAAkAAAAfgBsAGkAYgAvAHQAeQBwAGUAZABhAHIAcgBhAHkALgB0AHMAQZwQCwEcAEG8EAsBHABB3BALARwAQfwQCwEcAEGIEQsJCgAAAAgAAAAFAEGcEQsBPABBqBELMQEAAAAqAAAATwBiAGoAZQBjAHQAIABhAGwAcgBlAGEAZAB5ACAAcABpAG4AbgBlAGQAQdwRCwE8AEHoEQsvAQAAACgAAABPAGIAagBlAGMAdAAgAGkAcwAgAG4AbwB0ACAAcABpAG4AbgBlAGQAQaASCw0MAAAAIAAAAAAAAAAgAEG8EgsSAhoAAAAAAAACQQAAAAAAAAIJAEHcEgsCCBoAQfwSCwUBGgAAAg==").then(((A3) => A3.arrayBuffer())), {}).then((({ exports: Q2 }) => {
    const E2 = Q2, B2 = E2.__pin, g2 = E2.__unpin, I2 = E2.__newArray, C2 = E2.__getArray;
    return new class {
      iso;
      constructor({ yMin: A3 = -1 / 0, yMax: Q3 = 1 / 0, increasing: g3 = true, clipOutOfBound: I3 = true } = {}) {
        this.iso = new E2.__IsotonicRegression(A3, Q3, g3, I3), B2(this.iso);
      }
      fit(A3, Q3, C3) {
        let t2 = C3;
        void 0 === C3 && (t2 = new Array(A3.length).fill(1)), this.__checkFitParam(A3, Q3, t2);
        let r2 = B2(I2(E2.xArrayID, A3)), n2 = B2(I2(E2.yArrayID, Q3)), e2 = B2(I2(E2.wArrayID, t2));
        this.iso.fit(r2, n2, e2), g2(r2), g2(n2), g2(e2);
      }
      predict(A3) {
        let Q3 = B2(I2(E2.newXArrayID, A3)), t2 = this.iso.predict(Q3), r2 = C2(t2);
        return g2(Q3), r2;
      }
      reset() {
        this.iso.reset();
      }
      destroy() {
        g2(this.iso);
      }
      get xThresholds() {
        return C2(this.iso.xThresholds);
      }
      get yThresholds() {
        return C2(this.iso.yThresholds);
      }
      get xMin() {
        return this.iso.xMin;
      }
      get xMax() {
        return this.iso.xMax;
      }
      __checkFitParam(A3, Q3, E3) {
        if (A3.length <= 1 || Q3.length <= 1 || E3.length <= 1) throw new Error("The length of input arrays should be greater than 1.");
        if (A3.length !== Q3.length) throw new Error("The x array and y array should have the same length.");
      }
    }({ increasing: A2 });
  }));

  // .codex-tmp/personal-ai-agent-news/ml-isotonic-studio-20260908/app.js
  var $ = (id) => document.getElementById(id);
  var x = [1, 2, 3, 4, 5, 6];
  var initial = [1, 5, 3, 4, 8, 6];
  var models;
  var snapshot;
  $("editors").innerHTML = x.map((n2, i2) => `<div><strong>x = ${n2}</strong><label for="y${i2}">Observed y: <output id="yo${i2}">${initial[i2]}</output></label><input id="y${i2}" aria-label="Observation ${n2}" type="range" min="0" max="10" step="0.5" value="${initial[i2]}"><label for="w${i2}">Weight: <output id="wo${i2}">1</output></label><input class="weight" id="w${i2}" aria-label="Weight ${n2}" type="range" min="1" max="5" step="1" value="1"></div>`).join("");
  function draw(y, w, fit) {
    const c = $("canvas"), r2 = c.getBoundingClientRect(), d = devicePixelRatio || 1;
    c.width = r2.width * d;
    c.height = r2.height * d;
    const g2 = c.getContext("2d");
    g2.scale(d, d);
    const X = (i2) => 42 + i2 * (r2.width - 68) / 5, Y = (v) => r2.height - 38 - v * (r2.height - 64) / 10;
    g2.font = "13px Arial";
    for (let v = 0; v <= 10; v += 2) {
      g2.strokeStyle = "#d8e0e5";
      g2.beginPath();
      g2.moveTo(36, Y(v));
      g2.lineTo(r2.width - 18, Y(v));
      g2.stroke();
      g2.fillStyle = "#606574";
      g2.fillText(v, 10, Y(v) + 4);
    }
    x.forEach((n2, i2) => {
      g2.fillStyle = "#606574";
      g2.fillText(n2, X(i2) - 4, r2.height - 15);
      g2.strokeStyle = "#aab8c0";
      g2.setLineDash([4, 4]);
      g2.beginPath();
      g2.moveTo(X(i2), Y(y[i2]));
      g2.lineTo(X(i2), Y(fit[i2]));
      g2.stroke();
    });
    g2.setLineDash([]);
    g2.lineWidth = 3;
    g2.strokeStyle = "#147783";
    g2.beginPath();
    fit.forEach((v, i2) => i2 ? g2.lineTo(X(i2), Y(v)) : g2.moveTo(X(i2), Y(v)));
    g2.stroke();
    y.forEach((v, i2) => {
      g2.fillStyle = "#c3466d";
      g2.beginPath();
      g2.arc(X(i2), Y(v), 4 + Math.sqrt(w[i2]) * 2, 0, 2 * Math.PI);
      g2.fill();
      g2.strokeStyle = "white";
      g2.lineWidth = 1;
      g2.stroke();
    });
    c.setAttribute("aria-label", `Observed ${y.join(", ")}. Fitted ${fit.map((v) => v.toFixed(2)).join(", ")}.`);
  }
  function render() {
    if (!models) return;
    try {
      const y = x.map((_, i2) => Number($("y" + i2).value)), w = x.map((_, i2) => Number($("w" + i2).value));
      y.forEach((v, i2) => $("yo" + i2).textContent = v);
      w.forEach((v, i2) => $("wo" + i2).textContent = v);
      const direction = $("direction").value, m = models[direction];
      m.reset();
      m.fit(x, y, w);
      const fitted = m.predict(x), sse = y.reduce((s, v, i2) => s + w[i2] * (v - fitted[i2]) ** 2, 0);
      snapshot = { x, observed: y, weights: w, direction, fitted, weighted_squared_error: sse };
      $("error").textContent = sse.toFixed(3);
      $("levels").textContent = new Set(fitted.map((v) => v.toFixed(8))).size;
      $("values").textContent = "Fitted y = [" + fitted.map((v) => v.toFixed(3)).join(", ") + "]";
      $("status").textContent = direction === "up" ? "Constraint: each fitted value is at least its left neighbor." : "Constraint: each fitted value is at most its left neighbor.";
      $("export").disabled = false;
      draw(y, w, fitted);
    } catch (e2) {
      snapshot = null;
      $("status").textContent = "Fit failed: " + e2.message;
      $("export").disabled = true;
    }
  }
  $("editors").addEventListener("input", render);
  $("direction").onchange = render;
  $("reset").onclick = () => {
    initial.forEach((v, i2) => {
      $("y" + i2).value = v;
      $("w" + i2).value = 1;
    });
    $("direction").value = "up";
    render();
  };
  $("rising").onclick = () => {
    x.forEach((v, i2) => {
      $("y" + i2).value = v;
      $("w" + i2).value = 1;
    });
    $("direction").value = "up";
    render();
  };
  $("export").onclick = () => {
    if (!snapshot) return;
    const u = URL.createObjectURL(new Blob([JSON.stringify(snapshot, null, 2)], { type: "application/json" }));
    const a = document.createElement("a");
    a.href = u;
    a.download = "isotonic-fit.json";
    a.click();
    setTimeout(() => URL.revokeObjectURL(u), 1e3);
  };
  new ResizeObserver(render).observe($("canvas"));
  async function start() {
    try {
      models = { up: await o(true), down: await o(false) };
      render();
    } catch (e2) {
      $("status").textContent = "The local WebAssembly solver could not load: " + e2.message;
    }
  }
  start();
})();
