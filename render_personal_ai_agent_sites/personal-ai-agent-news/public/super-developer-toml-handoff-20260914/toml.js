var TOML = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // ../../../../../../../private/tmp/smol-toml-1.3.1.mjs
  var smol_toml_1_3_1_exports = {};
  __export(smol_toml_1_3_1_exports, {
    TomlDate: () => w,
    TomlError: () => c,
    default: () => Se,
    parse: () => V,
    stringify: () => L
  });
  function R(e2, n) {
    let i = e2.slice(0, n).split(/\r\n|\n|\r/g);
    return [i.length, i.pop().length + 1];
  }
  function Z(e2, n, i) {
    let l = e2.split(/\r\n|\n|\r/g), r = "", t = (Math.log10(n + 1) | 0) + 1;
    for (let f = n - 1; f <= n + 1; f++) {
      let o = l[f - 1];
      o && (r += f.toString().padEnd(t, " "), r += ":  ", r += o, r += `
`, f === n && (r += " ".repeat(t + i + 2), r += `^
`));
    }
    return r;
  }
  var c = class extends Error {
    line;
    column;
    codeblock;
    constructor(n, i) {
      let [l, r] = R(i.toml, i.ptr), t = Z(i.toml, l, r);
      super(`Invalid TOML document: ${n}

${t}`, i), this.line = l, this.column = r, this.codeblock = t;
    }
  };
  function s(e2, n = 0, i = e2.length) {
    let l = e2.indexOf(`
`, n);
    return e2[l - 1] === "\r" && l--, l <= i ? l : -1;
  }
  function h(e2, n) {
    for (let i = n; i < e2.length; i++) {
      let l = e2[i];
      if (l === `
`) return i;
      if (l === "\r" && e2[i + 1] === `
`) return i + 1;
      if (l < " " && l !== "	" || l === "\x7F") throw new c("control characters are not allowed in comments", { toml: e2, ptr: n });
    }
    return e2.length;
  }
  function m(e2, n, i, l) {
    let r;
    for (; (r = e2[n]) === " " || r === "	" || !i && (r === `
` || r === "\r" && e2[n + 1] === `
`); ) n++;
    return l || r !== "#" ? n : m(e2, h(e2, n), i);
  }
  function T(e2, n, i, l, r = false) {
    if (!l) return n = s(e2, n), n < 0 ? e2.length : n;
    for (let t = n; t < e2.length; t++) {
      let f = e2[t];
      if (f === "#") t = s(e2, t);
      else {
        if (f === i) return t + 1;
        if (f === l) return t;
        if (r && (f === `
` || f === "\r" && e2[t + 1] === `
`)) return t;
      }
    }
    throw new c("cannot find end of structure", { toml: e2, ptr: n });
  }
  function x(e2, n) {
    let i = e2[n], l = i === e2[n + 1] && e2[n + 1] === e2[n + 2] ? e2.slice(n, n + 3) : i;
    n += l.length - 1;
    do
      n = e2.indexOf(l, ++n);
    while (n > -1 && i !== "'" && e2[n - 1] === "\\" && e2[n - 2] !== "\\");
    return n > -1 && (n += l.length, l.length > 1 && (e2[n] === i && n++, e2[n] === i && n++)), n;
  }
  var j = /^(\d{4}-\d{2}-\d{2})?[T ]?(?:(\d{2}):\d{2}:\d{2}(?:\.\d+)?)?(Z|[-+]\d{2}:\d{2})?$/i;
  var w = class e extends Date {
    #n = false;
    #t = false;
    #e = null;
    constructor(n) {
      let i = true, l = true, r = "Z";
      if (typeof n == "string") {
        let t = n.match(j);
        t ? (t[1] || (i = false, n = `0000-01-01T${n}`), l = !!t[2], t[2] && +t[2] > 23 ? n = "" : (r = t[3] || null, n = n.toUpperCase(), !r && l && (n += "Z"))) : n = "";
      }
      super(n), isNaN(this.getTime()) || (this.#n = i, this.#t = l, this.#e = r);
    }
    isDateTime() {
      return this.#n && this.#t;
    }
    isLocal() {
      return !this.#n || !this.#t || !this.#e;
    }
    isDate() {
      return this.#n && !this.#t;
    }
    isTime() {
      return this.#t && !this.#n;
    }
    isValid() {
      return this.#n || this.#t;
    }
    toISOString() {
      let n = super.toISOString();
      if (this.isDate()) return n.slice(0, 10);
      if (this.isTime()) return n.slice(11, 23);
      if (this.#e === null) return n.slice(0, -1);
      if (this.#e === "Z") return n;
      let i = +this.#e.slice(1, 3) * 60 + +this.#e.slice(4, 6);
      return i = this.#e[0] === "-" ? i : -i, new Date(this.getTime() - i * 6e4).toISOString().slice(0, -1) + this.#e;
    }
    static wrapAsOffsetDateTime(n, i = "Z") {
      let l = new e(n);
      return l.#e = i, l;
    }
    static wrapAsLocalDateTime(n) {
      let i = new e(n);
      return i.#e = null, i;
    }
    static wrapAsLocalDate(n) {
      let i = new e(n);
      return i.#t = false, i.#e = null, i;
    }
    static wrapAsLocalTime(n) {
      let i = new e(n);
      return i.#n = false, i.#e = null, i;
    }
  };
  var z = /^((0x[0-9a-fA-F](_?[0-9a-fA-F])*)|(([+-]|0[ob])?\d(_?\d)*))$/;
  var K = /^[+-]?\d(_?\d)*(\.\d(_?\d)*)?([eE][+-]?\d(_?\d)*)?$/;
  var M = /^[+-]?0[0-9_]/;
  var F = /^[0-9a-f]{4,8}$/i;
  var k = { b: "\b", t: "	", n: `
`, f: "\f", r: "\r", '"': '"', "\\": "\\" };
  function b(e2, n = 0, i = e2.length) {
    let l = e2[n] === "'", r = e2[n++] === e2[n] && e2[n] === e2[n + 1];
    r && (i -= 2, e2[n += 2] === "\r" && n++, e2[n] === `
` && n++);
    let t = 0, f, o = "", a = n;
    for (; n < i - 1; ) {
      let u = e2[n++];
      if (u === `
` || u === "\r" && e2[n] === `
`) {
        if (!r) throw new c("newlines are not allowed in strings", { toml: e2, ptr: n - 1 });
      } else if (u < " " && u !== "	" || u === "\x7F") throw new c("control characters are not allowed in strings", { toml: e2, ptr: n - 1 });
      if (f) {
        if (f = false, u === "u" || u === "U") {
          let d = e2.slice(n, n += u === "u" ? 4 : 8);
          if (!F.test(d)) throw new c("invalid unicode escape", { toml: e2, ptr: t });
          try {
            o += String.fromCodePoint(parseInt(d, 16));
          } catch {
            throw new c("invalid unicode escape", { toml: e2, ptr: t });
          }
        } else if (r && (u === `
` || u === " " || u === "	" || u === "\r")) {
          if (n = m(e2, n - 1, true), e2[n] !== `
` && e2[n] !== "\r") throw new c("invalid escape: only line-ending whitespace may be escaped", { toml: e2, ptr: t });
          n = m(e2, n);
        } else if (u in k) o += k[u];
        else throw new c("unrecognized escape sequence", { toml: e2, ptr: t });
        a = n;
      } else !l && u === "\\" && (t = n - 1, f = true, o += e2.slice(a, t));
    }
    return o + e2.slice(a, i - 1);
  }
  function D(e2, n, i) {
    if (e2 === "true") return true;
    if (e2 === "false") return false;
    if (e2 === "-inf") return -1 / 0;
    if (e2 === "inf" || e2 === "+inf") return 1 / 0;
    if (e2 === "nan" || e2 === "+nan" || e2 === "-nan") return NaN;
    if (e2 === "-0") return 0;
    let l;
    if ((l = z.test(e2)) || K.test(e2)) {
      if (M.test(e2)) throw new c("leading zeroes are not allowed", { toml: n, ptr: i });
      let t = +e2.replace(/_/g, "");
      if (isNaN(t)) throw new c("invalid number", { toml: n, ptr: i });
      if (l && !Number.isSafeInteger(t)) throw new c("integer value cannot be represented losslessly", { toml: n, ptr: i });
      return t;
    }
    let r = new w(e2);
    if (!r.isValid()) throw new c("invalid value", { toml: n, ptr: i });
    return r;
  }
  function G(e2, n, i, l) {
    let r = e2.slice(n, i), t = r.indexOf("#");
    t > -1 && (h(e2, t), r = r.slice(0, t));
    let f = r.trimEnd();
    if (!l) {
      let o = r.indexOf(`
`, f.length);
      if (o > -1) throw new c("newlines are not allowed in inline tables", { toml: e2, ptr: n + o });
    }
    return [f, t];
  }
  function g(e2, n, i, l) {
    if (l === 0) throw new c("document contains excessively nested structures. aborting.", { toml: e2, ptr: n });
    let r = e2[n];
    if (r === "[" || r === "{") {
      let [o, a] = r === "[" ? $(e2, n, l) : I(e2, n, l), u = T(e2, a, ",", i);
      if (i === "}") {
        let d = s(e2, a, u);
        if (d > -1) throw new c("newlines are not allowed in inline tables", { toml: e2, ptr: d });
      }
      return [o, u];
    }
    let t;
    if (r === '"' || r === "'") {
      t = x(e2, n);
      let o = b(e2, n, t);
      if (i) {
        if (t = m(e2, t, i !== "]"), e2[t] && e2[t] !== "," && e2[t] !== i && e2[t] !== `
` && e2[t] !== "\r") throw new c("unexpected character encountered", { toml: e2, ptr: t });
        t += +(e2[t] === ",");
      }
      return [o, t];
    }
    t = T(e2, n, ",", i);
    let f = G(e2, n, t - +(e2[t - 1] === ","), i === "]");
    if (!f[0]) throw new c("incomplete key-value declaration: no value specified", { toml: e2, ptr: n });
    return i && f[1] > -1 && (t = m(e2, n + f[1]), t += +(e2[t] === ",")), [D(f[0], e2, n), t];
  }
  var U = /^[a-zA-Z0-9-_]+[ \t]*$/;
  function E(e2, n, i = "=") {
    let l = n - 1, r = [], t = e2.indexOf(i, n);
    if (t < 0) throw new c("incomplete key-value: cannot find end of key", { toml: e2, ptr: n });
    do {
      let f = e2[n = ++l];
      if (f !== " " && f !== "	") if (f === '"' || f === "'") {
        if (f === e2[n + 1] && f === e2[n + 2]) throw new c("multiline strings are not allowed in keys", { toml: e2, ptr: n });
        let o = x(e2, n);
        if (o < 0) throw new c("unfinished string encountered", { toml: e2, ptr: n });
        l = e2.indexOf(".", o);
        let a = e2.slice(o, l < 0 || l > t ? t : l), u = s(a);
        if (u > -1) throw new c("newlines are not allowed in keys", { toml: e2, ptr: n + l + u });
        if (a.trimStart()) throw new c("found extra tokens after the string part", { toml: e2, ptr: o });
        if (t < o && (t = e2.indexOf(i, o), t < 0)) throw new c("incomplete key-value: cannot find end of key", { toml: e2, ptr: n });
        r.push(b(e2, n, o));
      } else {
        l = e2.indexOf(".", n);
        let o = e2.slice(n, l < 0 || l > t ? t : l);
        if (!U.test(o)) throw new c("only letter, numbers, dashes and underscores are allowed in keys", { toml: e2, ptr: n });
        r.push(o.trimEnd());
      }
    } while (l + 1 && l < t);
    return [r, m(e2, t + 1, true, true)];
  }
  function I(e2, n, i) {
    let l = {}, r = /* @__PURE__ */ new Set(), t, f = 0;
    for (n++; (t = e2[n++]) !== "}" && t; ) {
      if (t === `
`) throw new c("newlines are not allowed in inline tables", { toml: e2, ptr: n - 1 });
      if (t === "#") throw new c("inline tables cannot contain comments", { toml: e2, ptr: n - 1 });
      if (t === ",") throw new c("expected key-value, found comma", { toml: e2, ptr: n - 1 });
      if (t !== " " && t !== "	") {
        let o, a = l, u = false, [d, P] = E(e2, n - 1);
        for (let y = 0; y < d.length; y++) {
          if (y && (a = u ? a[o] : a[o] = {}), o = d[y], (u = Object.hasOwn(a, o)) && (typeof a[o] != "object" || r.has(a[o]))) throw new c("trying to redefine an already defined value", { toml: e2, ptr: n });
          !u && o === "__proto__" && Object.defineProperty(a, o, { enumerable: true, configurable: true, writable: true });
        }
        if (u) throw new c("trying to redefine an already defined value", { toml: e2, ptr: n });
        let [_, v] = g(e2, P, "}", i - 1);
        r.add(_), a[o] = _, n = v, f = e2[n - 1] === "," ? n - 1 : 0;
      }
    }
    if (f) throw new c("trailing commas are not allowed in inline tables", { toml: e2, ptr: f });
    if (!t) throw new c("unfinished table encountered", { toml: e2, ptr: n });
    return [l, n];
  }
  function $(e2, n, i) {
    let l = [], r;
    for (n++; (r = e2[n++]) !== "]" && r; ) {
      if (r === ",") throw new c("expected value, found comma", { toml: e2, ptr: n - 1 });
      if (r === "#") n = h(e2, n);
      else if (r !== " " && r !== "	" && r !== `
` && r !== "\r") {
        let t = g(e2, n - 1, "]", i - 1);
        l.push(t[0]), n = t[1];
      }
    }
    if (!r) throw new c("unfinished array encountered", { toml: e2, ptr: n });
    return [l, n];
  }
  function N(e2, n, i, l) {
    let r = n, t = i, f, o = false, a;
    for (let u = 0; u < e2.length; u++) {
      if (u) {
        if (r = o ? r[f] : r[f] = {}, t = (a = t[f]).c, l === 0 && (a.t === 1 || a.t === 2)) return null;
        if (a.t === 2) {
          let d = r.length - 1;
          r = r[d], t = t[d].c;
        }
      }
      if (f = e2[u], (o = Object.hasOwn(r, f)) && t[f]?.t === 0 && t[f]?.d) return null;
      o || (f === "__proto__" && (Object.defineProperty(r, f, { enumerable: true, configurable: true, writable: true }), Object.defineProperty(t, f, { enumerable: true, configurable: true, writable: true })), t[f] = { t: u < e2.length - 1 && l === 2 ? 3 : l, d: false, i: 0, c: {} });
    }
    if (a = t[f], a.t !== l && !(l === 1 && a.t === 3) || (l === 2 && (a.d || (a.d = true, r[f] = []), r[f].push(r = {}), a.c[a.i++] = a = { t: 1, d: false, i: 0, c: {} }), a.d)) return null;
    if (a.d = true, l === 1) r = o ? r[f] : r[f] = {};
    else if (l === 0 && o) return null;
    return [f, r, a.c];
  }
  function V(e2, n) {
    let i = n?.maxDepth ?? 1e3, l = {}, r = {}, t = l, f = r;
    for (let o = m(e2, 0); o < e2.length; ) {
      if (e2[o] === "[") {
        let a = e2[++o] === "[", u = E(e2, o += +a, "]");
        if (a) {
          if (e2[u[1] - 1] !== "]") throw new c("expected end of table declaration", { toml: e2, ptr: u[1] - 1 });
          u[1]++;
        }
        let d = N(u[0], l, r, a ? 2 : 1);
        if (!d) throw new c("trying to redefine an already defined table or value", { toml: e2, ptr: o });
        f = d[2], t = d[1], o = u[1];
      } else {
        let a = E(e2, o), u = N(a[0], t, f, 0);
        if (!u) throw new c("trying to redefine an already defined table or value", { toml: e2, ptr: o });
        let d = g(e2, a[1], void 0, i);
        u[1][u[0]] = d[0], o = d[1];
      }
      if (o = m(e2, o, true), e2[o] && e2[o] !== `
` && e2[o] !== "\r") throw new c("each key-value declaration must be followed by an end-of-line", { toml: e2, ptr: o });
      o = m(e2, o);
    }
    return l;
  }
  var C = /^[a-z0-9-_]+$/i;
  function p(e2) {
    let n = typeof e2;
    if (n === "object") {
      if (Array.isArray(e2)) return "array";
      if (e2 instanceof Date) return "date";
    }
    return n;
  }
  function X(e2) {
    for (let n = 0; n < e2.length; n++) if (p(e2[n]) !== "object") return false;
    return e2.length != 0;
  }
  function O(e2) {
    return JSON.stringify(e2).replace(/\x7f/g, "\\u007f");
  }
  function S(e2, n, i) {
    if (i === 0) throw new Error("Could not stringify the object: maximum object depth exceeded");
    if (n === "number") return isNaN(e2) ? "nan" : e2 === 1 / 0 ? "inf" : e2 === -1 / 0 ? "-inf" : e2.toString();
    if (n === "bigint" || n === "boolean") return e2.toString();
    if (n === "string") return O(e2);
    if (n === "date") {
      if (isNaN(e2.getTime())) throw new TypeError("cannot serialize invalid date");
      return e2.toISOString();
    }
    if (n === "object") return B(e2, i);
    if (n === "array") return Y(e2, i);
  }
  function B(e2, n) {
    let i = Object.keys(e2);
    if (i.length === 0) return "{}";
    let l = "{ ";
    for (let r = 0; r < i.length; r++) {
      let t = i[r];
      r && (l += ", "), l += C.test(t) ? t : O(t), l += " = ", l += S(e2[t], p(e2[t]), n - 1);
    }
    return l + " }";
  }
  function Y(e2, n) {
    if (e2.length === 0) return "[]";
    let i = "[ ";
    for (let l = 0; l < e2.length; l++) {
      if (l && (i += ", "), e2[l] === null || e2[l] === void 0) throw new TypeError("arrays cannot contain null or undefined values");
      i += S(e2[l], p(e2[l]), n - 1);
    }
    return i + " ]";
  }
  function q(e2, n, i) {
    if (i === 0) throw new Error("Could not stringify the object: maximum object depth exceeded");
    let l = "";
    for (let r = 0; r < e2.length; r++) l += `[[${n}]]
`, l += A(e2[r], n, i), l += `

`;
    return l;
  }
  function A(e2, n, i) {
    if (i === 0) throw new Error("Could not stringify the object: maximum object depth exceeded");
    let l = "", r = "", t = Object.keys(e2);
    for (let f = 0; f < t.length; f++) {
      let o = t[f];
      if (e2[o] !== null && e2[o] !== void 0) {
        let a = p(e2[o]);
        if (a === "symbol" || a === "function") throw new TypeError(`cannot serialize values of type '${a}'`);
        let u = C.test(o) ? o : O(o);
        if (a === "array" && X(e2[o])) r += q(e2[o], n ? `${n}.${u}` : u, i - 1);
        else if (a === "object") {
          let d = n ? `${n}.${u}` : u;
          r += `[${d}]
`, r += A(e2[o], d, i - 1), r += `

`;
        } else l += u, l += " = ", l += S(e2[o], a, i), l += `
`;
      }
    }
    return `${l}
${r}`.trim();
  }
  function L(e2, n) {
    if (p(e2) !== "object") throw new TypeError("stringify can only be called with an object");
    let i = n?.maxDepth ?? 1e3;
    return A(e2, "", i);
  }
  var Se = { parse: V, stringify: L, TomlDate: w, TomlError: c };
  return __toCommonJS(smol_toml_1_3_1_exports);
})();
/*! Bundled license information:

smol-toml/dist/error.js:
smol-toml/dist/util.js:
smol-toml/dist/date.js:
smol-toml/dist/primitive.js:
smol-toml/dist/extract.js:
smol-toml/dist/struct.js:
smol-toml/dist/parse.js:
smol-toml/dist/stringify.js:
smol-toml/dist/index.js:
  (*!
   * Copyright (c) Squirrel Chat et al., All rights reserved.
   * SPDX-License-Identifier: BSD-3-Clause
   *
   * Redistribution and use in source and binary forms, with or without
   * modification, are permitted provided that the following conditions are met:
   *
   * 1. Redistributions of source code must retain the above copyright notice, this
   *    list of conditions and the following disclaimer.
   * 2. Redistributions in binary form must reproduce the above copyright notice,
   *    this list of conditions and the following disclaimer in the
   *    documentation and/or other materials provided with the distribution.
   * 3. Neither the name of the copyright holder nor the names of its contributors
   *    may be used to endorse or promote products derived from this software without
   *    specific prior written permission.
   *
   * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
   * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
   * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
   * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
   * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
   * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
   * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
   * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
   * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
   * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
   *)
*/
