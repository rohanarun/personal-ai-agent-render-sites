var AJV = (() => {
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

  // ../../../../../../../private/tmp/ajv-8.17.1.mjs
  var ajv_8_17_1_exports = {};
  __export(ajv_8_17_1_exports, {
    Ajv: () => $h,
    CodeGen: () => qh,
    KeywordCxt: () => wh,
    MissingRefError: () => jh,
    Name: () => Nh,
    ValidationError: () => kh,
    _: () => bh,
    __esModule: () => vh,
    default: () => Oh,
    nil: () => Sh,
    str: () => Eh,
    stringify: () => Ph
  });
  var Na = Object.create;
  var Ls = Object.defineProperty;
  var qa = Object.getOwnPropertyDescriptor;
  var ka = Object.getOwnPropertyNames;
  var ja = Object.getPrototypeOf;
  var Oa = Object.prototype.hasOwnProperty;
  var _ = (t, e) => () => (e || t((e = { exports: {} }).exports, e), e.exports);
  var Ia = (t, e, r, s) => {
    if (e && typeof e == "object" || typeof e == "function") for (let n of ka(e)) !Oa.call(t, n) && n !== r && Ls(t, n, { get: () => e[n], enumerable: !(s = qa(e, n)) || s.enumerable });
    return t;
  };
  var Ra = (t, e, r) => (r = t != null ? Na(ja(t)) : {}, Ia(e || !t || !t.__esModule ? Ls(r, "default", { value: t, enumerable: true }) : r, t));
  var We = _((O) => {
    "use strict";
    Object.defineProperty(O, "__esModule", { value: true });
    O.regexpCode = O.getEsmExportName = O.getProperty = O.safeStringify = O.stringify = O.strConcat = O.addCodeArg = O.str = O._ = O.nil = O._Code = O.Name = O.IDENTIFIER = O._CodeOrName = void 0;
    var Ge = class {
    };
    O._CodeOrName = Ge;
    O.IDENTIFIER = /^[a-z$_][a-z$_0-9]*$/i;
    var we = class extends Ge {
      constructor(e) {
        if (super(), !O.IDENTIFIER.test(e)) throw new Error("CodeGen: name must be a valid identifier");
        this.str = e;
      }
      toString() {
        return this.str;
      }
      emptyStr() {
        return false;
      }
      get names() {
        return { [this.str]: 1 };
      }
    };
    O.Name = we;
    var Q = class extends Ge {
      constructor(e) {
        super(), this._items = typeof e == "string" ? [e] : e;
      }
      toString() {
        return this.str;
      }
      emptyStr() {
        if (this._items.length > 1) return false;
        let e = this._items[0];
        return e === "" || e === '""';
      }
      get str() {
        var e;
        return (e = this._str) !== null && e !== void 0 ? e : this._str = this._items.reduce((r, s) => `${r}${s}`, "");
      }
      get names() {
        var e;
        return (e = this._names) !== null && e !== void 0 ? e : this._names = this._items.reduce((r, s) => (s instanceof we && (r[s.str] = (r[s.str] || 0) + 1), r), {});
      }
    };
    O._Code = Q;
    O.nil = new Q("");
    function xs(t, ...e) {
      let r = [t[0]], s = 0;
      for (; s < e.length; ) or(r, e[s]), r.push(t[++s]);
      return new Q(r);
    }
    O._ = xs;
    var nr = new Q("+");
    function Hs(t, ...e) {
      let r = [Je(t[0])], s = 0;
      for (; s < e.length; ) r.push(nr), or(r, e[s]), r.push(nr, Je(t[++s]));
      return Ta(r), new Q(r);
    }
    O.str = Hs;
    function or(t, e) {
      e instanceof Q ? t.push(...e._items) : e instanceof we ? t.push(e) : t.push(Aa(e));
    }
    O.addCodeArg = or;
    function Ta(t) {
      let e = 1;
      for (; e < t.length - 1; ) {
        if (t[e] === nr) {
          let r = Ca(t[e - 1], t[e + 1]);
          if (r !== void 0) {
            t.splice(e - 1, 3, r);
            continue;
          }
          t[e++] = "+";
        }
        e++;
      }
    }
    function Ca(t, e) {
      if (e === '""') return t;
      if (t === '""') return e;
      if (typeof t == "string") return e instanceof we || t[t.length - 1] !== '"' ? void 0 : typeof e != "string" ? `${t.slice(0, -1)}${e}"` : e[0] === '"' ? t.slice(0, -1) + e.slice(1) : void 0;
      if (typeof e == "string" && e[0] === '"' && !(t instanceof we)) return `"${t}${e.slice(1)}`;
    }
    function Ma(t, e) {
      return e.emptyStr() ? t : t.emptyStr() ? e : Hs`${t}${e}`;
    }
    O.strConcat = Ma;
    function Aa(t) {
      return typeof t == "number" || typeof t == "boolean" || t === null ? t : Je(Array.isArray(t) ? t.join(",") : t);
    }
    function Da(t) {
      return new Q(Je(t));
    }
    O.stringify = Da;
    function Je(t) {
      return JSON.stringify(t).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
    }
    O.safeStringify = Je;
    function Va(t) {
      return typeof t == "string" && O.IDENTIFIER.test(t) ? new Q(`.${t}`) : xs`[${t}]`;
    }
    O.getProperty = Va;
    function za(t) {
      if (typeof t == "string" && O.IDENTIFIER.test(t)) return new Q(`${t}`);
      throw new Error(`CodeGen: invalid export name: ${t}, use explicit $id name mapping`);
    }
    O.getEsmExportName = za;
    function Ua(t) {
      return new Q(t.toString());
    }
    O.regexpCode = Ua;
  });
  var cr = _((G) => {
    "use strict";
    Object.defineProperty(G, "__esModule", { value: true });
    G.ValueScope = G.ValueScopeName = G.Scope = G.varKinds = G.UsedValueState = void 0;
    var H = We(), ar = class extends Error {
      constructor(e) {
        super(`CodeGen: "code" for ${e} not defined`), this.value = e.value;
      }
    }, vt;
    (function(t) {
      t[t.Started = 0] = "Started", t[t.Completed = 1] = "Completed";
    })(vt || (G.UsedValueState = vt = {}));
    G.varKinds = { const: new H.Name("const"), let: new H.Name("let"), var: new H.Name("var") };
    var wt = class {
      constructor({ prefixes: e, parent: r } = {}) {
        this._names = {}, this._prefixes = e, this._parent = r;
      }
      toName(e) {
        return e instanceof H.Name ? e : this.name(e);
      }
      name(e) {
        return new H.Name(this._newName(e));
      }
      _newName(e) {
        let r = this._names[e] || this._nameGroup(e);
        return `${e}${r.index++}`;
      }
      _nameGroup(e) {
        var r, s;
        if (!((s = (r = this._parent) === null || r === void 0 ? void 0 : r._prefixes) === null || s === void 0) && s.has(e) || this._prefixes && !this._prefixes.has(e)) throw new Error(`CodeGen: prefix "${e}" is not allowed in this scope`);
        return this._names[e] = { prefix: e, index: 0 };
      }
    };
    G.Scope = wt;
    var bt = class extends H.Name {
      constructor(e, r) {
        super(r), this.prefix = e;
      }
      setValue(e, { property: r, itemIndex: s }) {
        this.value = e, this.scopePath = (0, H._)`.${new H.Name(r)}[${s}]`;
      }
    };
    G.ValueScopeName = bt;
    var Ka = (0, H._)`\n`, ir = class extends wt {
      constructor(e) {
        super(e), this._values = {}, this._scope = e.scope, this.opts = { ...e, _n: e.lines ? Ka : H.nil };
      }
      get() {
        return this._scope;
      }
      name(e) {
        return new bt(e, this._newName(e));
      }
      value(e, r) {
        var s;
        if (r.ref === void 0) throw new Error("CodeGen: ref must be passed in value");
        let n = this.toName(e), { prefix: o } = n, a = (s = r.key) !== null && s !== void 0 ? s : r.ref, i = this._values[o];
        if (i) {
          let u = i.get(a);
          if (u) return u;
        } else i = this._values[o] = /* @__PURE__ */ new Map();
        i.set(a, n);
        let c = this._scope[o] || (this._scope[o] = []), l = c.length;
        return c[l] = r.ref, n.setValue(r, { property: o, itemIndex: l }), n;
      }
      getValue(e, r) {
        let s = this._values[e];
        if (s) return s.get(r);
      }
      scopeRefs(e, r = this._values) {
        return this._reduceValues(r, (s) => {
          if (s.scopePath === void 0) throw new Error(`CodeGen: name "${s}" has no value`);
          return (0, H._)`${e}${s.scopePath}`;
        });
      }
      scopeCode(e = this._values, r, s) {
        return this._reduceValues(e, (n) => {
          if (n.value === void 0) throw new Error(`CodeGen: name "${n}" has no value`);
          return n.value.code;
        }, r, s);
      }
      _reduceValues(e, r, s = {}, n) {
        let o = H.nil;
        for (let a in e) {
          let i = e[a];
          if (!i) continue;
          let c = s[a] = s[a] || /* @__PURE__ */ new Map();
          i.forEach((l) => {
            if (c.has(l)) return;
            c.set(l, vt.Started);
            let u = r(l);
            if (u) {
              let d = this.opts.es5 ? G.varKinds.var : G.varKinds.const;
              o = (0, H._)`${o}${d} ${l} = ${u};${this.opts._n}`;
            } else if (u = n?.(l)) o = (0, H._)`${o}${u}${this.opts._n}`;
            else throw new ar(l);
            c.set(l, vt.Completed);
          });
        }
        return o;
      }
    };
    G.ValueScope = ir;
  });
  var P = _((E) => {
    "use strict";
    Object.defineProperty(E, "__esModule", { value: true });
    E.or = E.and = E.not = E.CodeGen = E.operators = E.varKinds = E.ValueScopeName = E.ValueScope = E.Scope = E.Name = E.regexpCode = E.stringify = E.getProperty = E.nil = E.strConcat = E.str = E._ = void 0;
    var q = We(), Z = cr(), pe = We();
    Object.defineProperty(E, "_", { enumerable: true, get: function() {
      return pe._;
    } });
    Object.defineProperty(E, "str", { enumerable: true, get: function() {
      return pe.str;
    } });
    Object.defineProperty(E, "strConcat", { enumerable: true, get: function() {
      return pe.strConcat;
    } });
    Object.defineProperty(E, "nil", { enumerable: true, get: function() {
      return pe.nil;
    } });
    Object.defineProperty(E, "getProperty", { enumerable: true, get: function() {
      return pe.getProperty;
    } });
    Object.defineProperty(E, "stringify", { enumerable: true, get: function() {
      return pe.stringify;
    } });
    Object.defineProperty(E, "regexpCode", { enumerable: true, get: function() {
      return pe.regexpCode;
    } });
    Object.defineProperty(E, "Name", { enumerable: true, get: function() {
      return pe.Name;
    } });
    var Nt = cr();
    Object.defineProperty(E, "Scope", { enumerable: true, get: function() {
      return Nt.Scope;
    } });
    Object.defineProperty(E, "ValueScope", { enumerable: true, get: function() {
      return Nt.ValueScope;
    } });
    Object.defineProperty(E, "ValueScopeName", { enumerable: true, get: function() {
      return Nt.ValueScopeName;
    } });
    Object.defineProperty(E, "varKinds", { enumerable: true, get: function() {
      return Nt.varKinds;
    } });
    E.operators = { GT: new q._Code(">"), GTE: new q._Code(">="), LT: new q._Code("<"), LTE: new q._Code("<="), EQ: new q._Code("==="), NEQ: new q._Code("!=="), NOT: new q._Code("!"), OR: new q._Code("||"), AND: new q._Code("&&"), ADD: new q._Code("+") };
    var ue = class {
      optimizeNodes() {
        return this;
      }
      optimizeNames(e, r) {
        return this;
      }
    }, ur = class extends ue {
      constructor(e, r, s) {
        super(), this.varKind = e, this.name = r, this.rhs = s;
      }
      render({ es5: e, _n: r }) {
        let s = e ? Z.varKinds.var : this.varKind, n = this.rhs === void 0 ? "" : ` = ${this.rhs}`;
        return `${s} ${this.name}${n};` + r;
      }
      optimizeNames(e, r) {
        if (e[this.name.str]) return this.rhs && (this.rhs = Re(this.rhs, e, r)), this;
      }
      get names() {
        return this.rhs instanceof q._CodeOrName ? this.rhs.names : {};
      }
    }, Et = class extends ue {
      constructor(e, r, s) {
        super(), this.lhs = e, this.rhs = r, this.sideEffects = s;
      }
      render({ _n: e }) {
        return `${this.lhs} = ${this.rhs};` + e;
      }
      optimizeNames(e, r) {
        if (!(this.lhs instanceof q.Name && !e[this.lhs.str] && !this.sideEffects)) return this.rhs = Re(this.rhs, e, r), this;
      }
      get names() {
        let e = this.lhs instanceof q.Name ? {} : { ...this.lhs.names };
        return St(e, this.rhs);
      }
    }, lr = class extends Et {
      constructor(e, r, s, n) {
        super(e, s, n), this.op = r;
      }
      render({ _n: e }) {
        return `${this.lhs} ${this.op}= ${this.rhs};` + e;
      }
    }, dr = class extends ue {
      constructor(e) {
        super(), this.label = e, this.names = {};
      }
      render({ _n: e }) {
        return `${this.label}:` + e;
      }
    }, fr = class extends ue {
      constructor(e) {
        super(), this.label = e, this.names = {};
      }
      render({ _n: e }) {
        return `break${this.label ? ` ${this.label}` : ""};` + e;
      }
    }, hr = class extends ue {
      constructor(e) {
        super(), this.error = e;
      }
      render({ _n: e }) {
        return `throw ${this.error};` + e;
      }
      get names() {
        return this.error.names;
      }
    }, pr = class extends ue {
      constructor(e) {
        super(), this.code = e;
      }
      render({ _n: e }) {
        return `${this.code};` + e;
      }
      optimizeNodes() {
        return `${this.code}` ? this : void 0;
      }
      optimizeNames(e, r) {
        return this.code = Re(this.code, e, r), this;
      }
      get names() {
        return this.code instanceof q._CodeOrName ? this.code.names : {};
      }
    }, Qe = class extends ue {
      constructor(e = []) {
        super(), this.nodes = e;
      }
      render(e) {
        return this.nodes.reduce((r, s) => r + s.render(e), "");
      }
      optimizeNodes() {
        let { nodes: e } = this, r = e.length;
        for (; r--; ) {
          let s = e[r].optimizeNodes();
          Array.isArray(s) ? e.splice(r, 1, ...s) : s ? e[r] = s : e.splice(r, 1);
        }
        return e.length > 0 ? this : void 0;
      }
      optimizeNames(e, r) {
        let { nodes: s } = this, n = s.length;
        for (; n--; ) {
          let o = s[n];
          o.optimizeNames(e, r) || (Fa(e, o.names), s.splice(n, 1));
        }
        return s.length > 0 ? this : void 0;
      }
      get names() {
        return this.nodes.reduce((e, r) => Pe(e, r.names), {});
      }
    }, le = class extends Qe {
      render(e) {
        return "{" + e._n + super.render(e) + "}" + e._n;
      }
    }, mr = class extends Qe {
    }, Ie = class extends le {
    };
    Ie.kind = "else";
    var be = class t extends le {
      constructor(e, r) {
        super(r), this.condition = e;
      }
      render(e) {
        let r = `if(${this.condition})` + super.render(e);
        return this.else && (r += "else " + this.else.render(e)), r;
      }
      optimizeNodes() {
        super.optimizeNodes();
        let e = this.condition;
        if (e === true) return this.nodes;
        let r = this.else;
        if (r) {
          let s = r.optimizeNodes();
          r = this.else = Array.isArray(s) ? new Ie(s) : s;
        }
        if (r) return e === false ? r instanceof t ? r : r.nodes : this.nodes.length ? this : new t(Gs(e), r instanceof t ? [r] : r.nodes);
        if (!(e === false || !this.nodes.length)) return this;
      }
      optimizeNames(e, r) {
        var s;
        if (this.else = (s = this.else) === null || s === void 0 ? void 0 : s.optimizeNames(e, r), !!(super.optimizeNames(e, r) || this.else)) return this.condition = Re(this.condition, e, r), this;
      }
      get names() {
        let e = super.names;
        return St(e, this.condition), this.else && Pe(e, this.else.names), e;
      }
    };
    be.kind = "if";
    var Ee = class extends le {
    };
    Ee.kind = "for";
    var yr = class extends Ee {
      constructor(e) {
        super(), this.iteration = e;
      }
      render(e) {
        return `for(${this.iteration})` + super.render(e);
      }
      optimizeNames(e, r) {
        if (super.optimizeNames(e, r)) return this.iteration = Re(this.iteration, e, r), this;
      }
      get names() {
        return Pe(super.names, this.iteration.names);
      }
    }, _r = class extends Ee {
      constructor(e, r, s, n) {
        super(), this.varKind = e, this.name = r, this.from = s, this.to = n;
      }
      render(e) {
        let r = e.es5 ? Z.varKinds.var : this.varKind, { name: s, from: n, to: o } = this;
        return `for(${r} ${s}=${n}; ${s}<${o}; ${s}++)` + super.render(e);
      }
      get names() {
        let e = St(super.names, this.from);
        return St(e, this.to);
      }
    }, Pt = class extends Ee {
      constructor(e, r, s, n) {
        super(), this.loop = e, this.varKind = r, this.name = s, this.iterable = n;
      }
      render(e) {
        return `for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})` + super.render(e);
      }
      optimizeNames(e, r) {
        if (super.optimizeNames(e, r)) return this.iterable = Re(this.iterable, e, r), this;
      }
      get names() {
        return Pe(super.names, this.iterable.names);
      }
    }, Xe = class extends le {
      constructor(e, r, s) {
        super(), this.name = e, this.args = r, this.async = s;
      }
      render(e) {
        return `${this.async ? "async " : ""}function ${this.name}(${this.args})` + super.render(e);
      }
    };
    Xe.kind = "func";
    var Be = class extends Qe {
      render(e) {
        return "return " + super.render(e);
      }
    };
    Be.kind = "return";
    var gr = class extends le {
      render(e) {
        let r = "try" + super.render(e);
        return this.catch && (r += this.catch.render(e)), this.finally && (r += this.finally.render(e)), r;
      }
      optimizeNodes() {
        var e, r;
        return super.optimizeNodes(), (e = this.catch) === null || e === void 0 || e.optimizeNodes(), (r = this.finally) === null || r === void 0 || r.optimizeNodes(), this;
      }
      optimizeNames(e, r) {
        var s, n;
        return super.optimizeNames(e, r), (s = this.catch) === null || s === void 0 || s.optimizeNames(e, r), (n = this.finally) === null || n === void 0 || n.optimizeNames(e, r), this;
      }
      get names() {
        let e = super.names;
        return this.catch && Pe(e, this.catch.names), this.finally && Pe(e, this.finally.names), e;
      }
    }, Ye = class extends le {
      constructor(e) {
        super(), this.error = e;
      }
      render(e) {
        return `catch(${this.error})` + super.render(e);
      }
    };
    Ye.kind = "catch";
    var Ze = class extends le {
      render(e) {
        return "finally" + super.render(e);
      }
    };
    Ze.kind = "finally";
    var $r = class {
      constructor(e, r = {}) {
        this._values = {}, this._blockStarts = [], this._constants = {}, this.opts = { ...r, _n: r.lines ? `
` : "" }, this._extScope = e, this._scope = new Z.Scope({ parent: e }), this._nodes = [new mr()];
      }
      toString() {
        return this._root.render(this.opts);
      }
      name(e) {
        return this._scope.name(e);
      }
      scopeName(e) {
        return this._extScope.name(e);
      }
      scopeValue(e, r) {
        let s = this._extScope.value(e, r);
        return (this._values[s.prefix] || (this._values[s.prefix] = /* @__PURE__ */ new Set())).add(s), s;
      }
      getScopeValue(e, r) {
        return this._extScope.getValue(e, r);
      }
      scopeRefs(e) {
        return this._extScope.scopeRefs(e, this._values);
      }
      scopeCode() {
        return this._extScope.scopeCode(this._values);
      }
      _def(e, r, s, n) {
        let o = this._scope.toName(r);
        return s !== void 0 && n && (this._constants[o.str] = s), this._leafNode(new ur(e, o, s)), o;
      }
      const(e, r, s) {
        return this._def(Z.varKinds.const, e, r, s);
      }
      let(e, r, s) {
        return this._def(Z.varKinds.let, e, r, s);
      }
      var(e, r, s) {
        return this._def(Z.varKinds.var, e, r, s);
      }
      assign(e, r, s) {
        return this._leafNode(new Et(e, r, s));
      }
      add(e, r) {
        return this._leafNode(new lr(e, E.operators.ADD, r));
      }
      code(e) {
        return typeof e == "function" ? e() : e !== q.nil && this._leafNode(new pr(e)), this;
      }
      object(...e) {
        let r = ["{"];
        for (let [s, n] of e) r.length > 1 && r.push(","), r.push(s), (s !== n || this.opts.es5) && (r.push(":"), (0, q.addCodeArg)(r, n));
        return r.push("}"), new q._Code(r);
      }
      if(e, r, s) {
        if (this._blockNode(new be(e)), r && s) this.code(r).else().code(s).endIf();
        else if (r) this.code(r).endIf();
        else if (s) throw new Error('CodeGen: "else" body without "then" body');
        return this;
      }
      elseIf(e) {
        return this._elseNode(new be(e));
      }
      else() {
        return this._elseNode(new Ie());
      }
      endIf() {
        return this._endBlockNode(be, Ie);
      }
      _for(e, r) {
        return this._blockNode(e), r && this.code(r).endFor(), this;
      }
      for(e, r) {
        return this._for(new yr(e), r);
      }
      forRange(e, r, s, n, o = this.opts.es5 ? Z.varKinds.var : Z.varKinds.let) {
        let a = this._scope.toName(e);
        return this._for(new _r(o, a, r, s), () => n(a));
      }
      forOf(e, r, s, n = Z.varKinds.const) {
        let o = this._scope.toName(e);
        if (this.opts.es5) {
          let a = r instanceof q.Name ? r : this.var("_arr", r);
          return this.forRange("_i", 0, (0, q._)`${a}.length`, (i) => {
            this.var(o, (0, q._)`${a}[${i}]`), s(o);
          });
        }
        return this._for(new Pt("of", n, o, r), () => s(o));
      }
      forIn(e, r, s, n = this.opts.es5 ? Z.varKinds.var : Z.varKinds.const) {
        if (this.opts.ownProperties) return this.forOf(e, (0, q._)`Object.keys(${r})`, s);
        let o = this._scope.toName(e);
        return this._for(new Pt("in", n, o, r), () => s(o));
      }
      endFor() {
        return this._endBlockNode(Ee);
      }
      label(e) {
        return this._leafNode(new dr(e));
      }
      break(e) {
        return this._leafNode(new fr(e));
      }
      return(e) {
        let r = new Be();
        if (this._blockNode(r), this.code(e), r.nodes.length !== 1) throw new Error('CodeGen: "return" should have one node');
        return this._endBlockNode(Be);
      }
      try(e, r, s) {
        if (!r && !s) throw new Error('CodeGen: "try" without "catch" and "finally"');
        let n = new gr();
        if (this._blockNode(n), this.code(e), r) {
          let o = this.name("e");
          this._currNode = n.catch = new Ye(o), r(o);
        }
        return s && (this._currNode = n.finally = new Ze(), this.code(s)), this._endBlockNode(Ye, Ze);
      }
      throw(e) {
        return this._leafNode(new hr(e));
      }
      block(e, r) {
        return this._blockStarts.push(this._nodes.length), e && this.code(e).endBlock(r), this;
      }
      endBlock(e) {
        let r = this._blockStarts.pop();
        if (r === void 0) throw new Error("CodeGen: not in self-balancing block");
        let s = this._nodes.length - r;
        if (s < 0 || e !== void 0 && s !== e) throw new Error(`CodeGen: wrong number of nodes: ${s} vs ${e} expected`);
        return this._nodes.length = r, this;
      }
      func(e, r = q.nil, s, n) {
        return this._blockNode(new Xe(e, r, s)), n && this.code(n).endFunc(), this;
      }
      endFunc() {
        return this._endBlockNode(Xe);
      }
      optimize(e = 1) {
        for (; e-- > 0; ) this._root.optimizeNodes(), this._root.optimizeNames(this._root.names, this._constants);
      }
      _leafNode(e) {
        return this._currNode.nodes.push(e), this;
      }
      _blockNode(e) {
        this._currNode.nodes.push(e), this._nodes.push(e);
      }
      _endBlockNode(e, r) {
        let s = this._currNode;
        if (s instanceof e || r && s instanceof r) return this._nodes.pop(), this;
        throw new Error(`CodeGen: not in block "${r ? `${e.kind}/${r.kind}` : e.kind}"`);
      }
      _elseNode(e) {
        let r = this._currNode;
        if (!(r instanceof be)) throw new Error('CodeGen: "else" without "if"');
        return this._currNode = r.else = e, this;
      }
      get _root() {
        return this._nodes[0];
      }
      get _currNode() {
        let e = this._nodes;
        return e[e.length - 1];
      }
      set _currNode(e) {
        let r = this._nodes;
        r[r.length - 1] = e;
      }
    };
    E.CodeGen = $r;
    function Pe(t, e) {
      for (let r in e) t[r] = (t[r] || 0) + (e[r] || 0);
      return t;
    }
    function St(t, e) {
      return e instanceof q._CodeOrName ? Pe(t, e.names) : t;
    }
    function Re(t, e, r) {
      if (t instanceof q.Name) return s(t);
      if (!n(t)) return t;
      return new q._Code(t._items.reduce((o, a) => (a instanceof q.Name && (a = s(a)), a instanceof q._Code ? o.push(...a._items) : o.push(a), o), []));
      function s(o) {
        let a = r[o.str];
        return a === void 0 || e[o.str] !== 1 ? o : (delete e[o.str], a);
      }
      function n(o) {
        return o instanceof q._Code && o._items.some((a) => a instanceof q.Name && e[a.str] === 1 && r[a.str] !== void 0);
      }
    }
    function Fa(t, e) {
      for (let r in e) t[r] = (t[r] || 0) - (e[r] || 0);
    }
    function Gs(t) {
      return typeof t == "boolean" || typeof t == "number" || t === null ? !t : (0, q._)`!${vr(t)}`;
    }
    E.not = Gs;
    var La = Js(E.operators.AND);
    function xa(...t) {
      return t.reduce(La);
    }
    E.and = xa;
    var Ha = Js(E.operators.OR);
    function Ga(...t) {
      return t.reduce(Ha);
    }
    E.or = Ga;
    function Js(t) {
      return (e, r) => e === q.nil ? r : r === q.nil ? e : (0, q._)`${vr(e)} ${t} ${vr(r)}`;
    }
    function vr(t) {
      return t instanceof q.Name ? t : (0, q._)`(${t})`;
    }
  });
  var I = _((S) => {
    "use strict";
    Object.defineProperty(S, "__esModule", { value: true });
    S.checkStrictMode = S.getErrorPath = S.Type = S.useFunc = S.setEvaluated = S.evaluatedPropsToName = S.mergeEvaluated = S.eachItem = S.unescapeJsonPointer = S.escapeJsonPointer = S.escapeFragment = S.unescapeFragment = S.schemaRefOrVal = S.schemaHasRulesButRef = S.schemaHasRules = S.checkUnknownRules = S.alwaysValidSchema = S.toHash = void 0;
    var T = P(), Ja = We();
    function Wa(t) {
      let e = {};
      for (let r of t) e[r] = true;
      return e;
    }
    S.toHash = Wa;
    function Qa(t, e) {
      return typeof e == "boolean" ? e : Object.keys(e).length === 0 ? true : (Xs(t, e), !Bs(e, t.self.RULES.all));
    }
    S.alwaysValidSchema = Qa;
    function Xs(t, e = t.schema) {
      let { opts: r, self: s } = t;
      if (!r.strictSchema || typeof e == "boolean") return;
      let n = s.RULES.keywords;
      for (let o in e) n[o] || en(t, `unknown keyword: "${o}"`);
    }
    S.checkUnknownRules = Xs;
    function Bs(t, e) {
      if (typeof t == "boolean") return !t;
      for (let r in t) if (e[r]) return true;
      return false;
    }
    S.schemaHasRules = Bs;
    function Xa(t, e) {
      if (typeof t == "boolean") return !t;
      for (let r in t) if (r !== "$ref" && e.all[r]) return true;
      return false;
    }
    S.schemaHasRulesButRef = Xa;
    function Ba({ topSchemaRef: t, schemaPath: e }, r, s, n) {
      if (!n) {
        if (typeof r == "number" || typeof r == "boolean") return r;
        if (typeof r == "string") return (0, T._)`${r}`;
      }
      return (0, T._)`${t}${e}${(0, T.getProperty)(s)}`;
    }
    S.schemaRefOrVal = Ba;
    function Ya(t) {
      return Ys(decodeURIComponent(t));
    }
    S.unescapeFragment = Ya;
    function Za(t) {
      return encodeURIComponent(br(t));
    }
    S.escapeFragment = Za;
    function br(t) {
      return typeof t == "number" ? `${t}` : t.replace(/~/g, "~0").replace(/\//g, "~1");
    }
    S.escapeJsonPointer = br;
    function Ys(t) {
      return t.replace(/~1/g, "/").replace(/~0/g, "~");
    }
    S.unescapeJsonPointer = Ys;
    function ei(t, e) {
      if (Array.isArray(t)) for (let r of t) e(r);
      else e(t);
    }
    S.eachItem = ei;
    function Ws({ mergeNames: t, mergeToName: e, mergeValues: r, resultToName: s }) {
      return (n, o, a, i) => {
        let c = a === void 0 ? o : a instanceof T.Name ? (o instanceof T.Name ? t(n, o, a) : e(n, o, a), a) : o instanceof T.Name ? (e(n, a, o), o) : r(o, a);
        return i === T.Name && !(c instanceof T.Name) ? s(n, c) : c;
      };
    }
    S.mergeEvaluated = { props: Ws({ mergeNames: (t, e, r) => t.if((0, T._)`${r} !== true && ${e} !== undefined`, () => {
      t.if((0, T._)`${e} === true`, () => t.assign(r, true), () => t.assign(r, (0, T._)`${r} || {}`).code((0, T._)`Object.assign(${r}, ${e})`));
    }), mergeToName: (t, e, r) => t.if((0, T._)`${r} !== true`, () => {
      e === true ? t.assign(r, true) : (t.assign(r, (0, T._)`${r} || {}`), Er(t, r, e));
    }), mergeValues: (t, e) => t === true ? true : { ...t, ...e }, resultToName: Zs }), items: Ws({ mergeNames: (t, e, r) => t.if((0, T._)`${r} !== true && ${e} !== undefined`, () => t.assign(r, (0, T._)`${e} === true ? true : ${r} > ${e} ? ${r} : ${e}`)), mergeToName: (t, e, r) => t.if((0, T._)`${r} !== true`, () => t.assign(r, e === true ? true : (0, T._)`${r} > ${e} ? ${r} : ${e}`)), mergeValues: (t, e) => t === true ? true : Math.max(t, e), resultToName: (t, e) => t.var("items", e) }) };
    function Zs(t, e) {
      if (e === true) return t.var("props", true);
      let r = t.var("props", (0, T._)`{}`);
      return e !== void 0 && Er(t, r, e), r;
    }
    S.evaluatedPropsToName = Zs;
    function Er(t, e, r) {
      Object.keys(r).forEach((s) => t.assign((0, T._)`${e}${(0, T.getProperty)(s)}`, true));
    }
    S.setEvaluated = Er;
    var Qs = {};
    function ti(t, e) {
      return t.scopeValue("func", { ref: e, code: Qs[e.code] || (Qs[e.code] = new Ja._Code(e.code)) });
    }
    S.useFunc = ti;
    var wr;
    (function(t) {
      t[t.Num = 0] = "Num", t[t.Str = 1] = "Str";
    })(wr || (S.Type = wr = {}));
    function ri(t, e, r) {
      if (t instanceof T.Name) {
        let s = e === wr.Num;
        return r ? s ? (0, T._)`"[" + ${t} + "]"` : (0, T._)`"['" + ${t} + "']"` : s ? (0, T._)`"/" + ${t}` : (0, T._)`"/" + ${t}.replace(/~/g, "~0").replace(/\\//g, "~1")`;
      }
      return r ? (0, T.getProperty)(t).toString() : "/" + br(t);
    }
    S.getErrorPath = ri;
    function en(t, e, r = t.opts.strictSchema) {
      if (r) {
        if (e = `strict mode: ${e}`, r === true) throw new Error(e);
        t.self.logger.warn(e);
      }
    }
    S.checkStrictMode = en;
  });
  var de = _((Pr) => {
    "use strict";
    Object.defineProperty(Pr, "__esModule", { value: true });
    var U = P(), si = { data: new U.Name("data"), valCxt: new U.Name("valCxt"), instancePath: new U.Name("instancePath"), parentData: new U.Name("parentData"), parentDataProperty: new U.Name("parentDataProperty"), rootData: new U.Name("rootData"), dynamicAnchors: new U.Name("dynamicAnchors"), vErrors: new U.Name("vErrors"), errors: new U.Name("errors"), this: new U.Name("this"), self: new U.Name("self"), scope: new U.Name("scope"), json: new U.Name("json"), jsonPos: new U.Name("jsonPos"), jsonLen: new U.Name("jsonLen"), jsonPart: new U.Name("jsonPart") };
    Pr.default = si;
  });
  var et = _((K) => {
    "use strict";
    Object.defineProperty(K, "__esModule", { value: true });
    K.extendErrors = K.resetErrorsCount = K.reportExtraError = K.reportError = K.keyword$DataError = K.keywordError = void 0;
    var j = P(), qt = I(), L = de();
    K.keywordError = { message: ({ keyword: t }) => (0, j.str)`must pass "${t}" keyword validation` };
    K.keyword$DataError = { message: ({ keyword: t, schemaType: e }) => e ? (0, j.str)`"${t}" keyword must be ${e} ($data)` : (0, j.str)`"${t}" keyword is invalid ($data)` };
    function ni(t, e = K.keywordError, r, s) {
      let { it: n } = t, { gen: o, compositeRule: a, allErrors: i } = n, c = sn(t, e, r);
      s ?? (a || i) ? tn(o, c) : rn(n, (0, j._)`[${c}]`);
    }
    K.reportError = ni;
    function oi(t, e = K.keywordError, r) {
      let { it: s } = t, { gen: n, compositeRule: o, allErrors: a } = s, i = sn(t, e, r);
      tn(n, i), o || a || rn(s, L.default.vErrors);
    }
    K.reportExtraError = oi;
    function ai(t, e) {
      t.assign(L.default.errors, e), t.if((0, j._)`${L.default.vErrors} !== null`, () => t.if(e, () => t.assign((0, j._)`${L.default.vErrors}.length`, e), () => t.assign(L.default.vErrors, null)));
    }
    K.resetErrorsCount = ai;
    function ii({ gen: t, keyword: e, schemaValue: r, data: s, errsCount: n, it: o }) {
      if (n === void 0) throw new Error("ajv implementation error");
      let a = t.name("err");
      t.forRange("i", n, L.default.errors, (i) => {
        t.const(a, (0, j._)`${L.default.vErrors}[${i}]`), t.if((0, j._)`${a}.instancePath === undefined`, () => t.assign((0, j._)`${a}.instancePath`, (0, j.strConcat)(L.default.instancePath, o.errorPath))), t.assign((0, j._)`${a}.schemaPath`, (0, j.str)`${o.errSchemaPath}/${e}`), o.opts.verbose && (t.assign((0, j._)`${a}.schema`, r), t.assign((0, j._)`${a}.data`, s));
      });
    }
    K.extendErrors = ii;
    function tn(t, e) {
      let r = t.const("err", e);
      t.if((0, j._)`${L.default.vErrors} === null`, () => t.assign(L.default.vErrors, (0, j._)`[${r}]`), (0, j._)`${L.default.vErrors}.push(${r})`), t.code((0, j._)`${L.default.errors}++`);
    }
    function rn(t, e) {
      let { gen: r, validateName: s, schemaEnv: n } = t;
      n.$async ? r.throw((0, j._)`new ${t.ValidationError}(${e})`) : (r.assign((0, j._)`${s}.errors`, e), r.return(false));
    }
    var Se = { keyword: new j.Name("keyword"), schemaPath: new j.Name("schemaPath"), params: new j.Name("params"), propertyName: new j.Name("propertyName"), message: new j.Name("message"), schema: new j.Name("schema"), parentSchema: new j.Name("parentSchema") };
    function sn(t, e, r) {
      let { createErrors: s } = t.it;
      return s === false ? (0, j._)`{}` : ci(t, e, r);
    }
    function ci(t, e, r = {}) {
      let { gen: s, it: n } = t, o = [ui(n, r), li(t, r)];
      return di(t, e, o), s.object(...o);
    }
    function ui({ errorPath: t }, { instancePath: e }) {
      let r = e ? (0, j.str)`${t}${(0, qt.getErrorPath)(e, qt.Type.Str)}` : t;
      return [L.default.instancePath, (0, j.strConcat)(L.default.instancePath, r)];
    }
    function li({ keyword: t, it: { errSchemaPath: e } }, { schemaPath: r, parentSchema: s }) {
      let n = s ? e : (0, j.str)`${e}/${t}`;
      return r && (n = (0, j.str)`${n}${(0, qt.getErrorPath)(r, qt.Type.Str)}`), [Se.schemaPath, n];
    }
    function di(t, { params: e, message: r }, s) {
      let { keyword: n, data: o, schemaValue: a, it: i } = t, { opts: c, propertyName: l, topSchemaRef: u, schemaPath: d } = i;
      s.push([Se.keyword, n], [Se.params, typeof e == "function" ? e(t) : e || (0, j._)`{}`]), c.messages && s.push([Se.message, typeof r == "function" ? r(t) : r]), c.verbose && s.push([Se.schema, a], [Se.parentSchema, (0, j._)`${u}${d}`], [L.default.data, o]), l && s.push([Se.propertyName, l]);
    }
  });
  var on = _((Te) => {
    "use strict";
    Object.defineProperty(Te, "__esModule", { value: true });
    Te.boolOrEmptySchema = Te.topBoolOrEmptySchema = void 0;
    var fi = et(), hi = P(), pi = de(), mi = { message: "boolean schema is false" };
    function yi(t) {
      let { gen: e, schema: r, validateName: s } = t;
      r === false ? nn(t, false) : typeof r == "object" && r.$async === true ? e.return(pi.default.data) : (e.assign((0, hi._)`${s}.errors`, null), e.return(true));
    }
    Te.topBoolOrEmptySchema = yi;
    function _i(t, e) {
      let { gen: r, schema: s } = t;
      s === false ? (r.var(e, false), nn(t)) : r.var(e, true);
    }
    Te.boolOrEmptySchema = _i;
    function nn(t, e) {
      let { gen: r, data: s } = t, n = { gen: r, keyword: "false schema", data: s, schema: false, schemaCode: false, schemaValue: false, params: {}, it: t };
      (0, fi.reportError)(n, mi, void 0, e);
    }
  });
  var Sr = _((Ce) => {
    "use strict";
    Object.defineProperty(Ce, "__esModule", { value: true });
    Ce.getRules = Ce.isJSONType = void 0;
    var gi = ["string", "number", "integer", "boolean", "null", "object", "array"], $i = new Set(gi);
    function vi(t) {
      return typeof t == "string" && $i.has(t);
    }
    Ce.isJSONType = vi;
    function wi() {
      let t = { number: { type: "number", rules: [] }, string: { type: "string", rules: [] }, array: { type: "array", rules: [] }, object: { type: "object", rules: [] } };
      return { types: { ...t, integer: true, boolean: true, null: true }, rules: [{ rules: [] }, t.number, t.string, t.array, t.object], post: { rules: [] }, all: {}, keywords: {} };
    }
    Ce.getRules = wi;
  });
  var Nr = _((me) => {
    "use strict";
    Object.defineProperty(me, "__esModule", { value: true });
    me.shouldUseRule = me.shouldUseGroup = me.schemaHasRulesForType = void 0;
    function bi({ schema: t, self: e }, r) {
      let s = e.RULES.types[r];
      return s && s !== true && an(t, s);
    }
    me.schemaHasRulesForType = bi;
    function an(t, e) {
      return e.rules.some((r) => cn(t, r));
    }
    me.shouldUseGroup = an;
    function cn(t, e) {
      var r;
      return t[e.keyword] !== void 0 || ((r = e.definition.implements) === null || r === void 0 ? void 0 : r.some((s) => t[s] !== void 0));
    }
    me.shouldUseRule = cn;
  });
  var tt = _((F) => {
    "use strict";
    Object.defineProperty(F, "__esModule", { value: true });
    F.reportTypeError = F.checkDataTypes = F.checkDataType = F.coerceAndCheckDataType = F.getJSONTypes = F.getSchemaTypes = F.DataType = void 0;
    var Ei = Sr(), Pi = Nr(), Si = et(), b = P(), un = I(), Me;
    (function(t) {
      t[t.Correct = 0] = "Correct", t[t.Wrong = 1] = "Wrong";
    })(Me || (F.DataType = Me = {}));
    function Ni(t) {
      let e = ln(t.type);
      if (e.includes("null")) {
        if (t.nullable === false) throw new Error("type: null contradicts nullable: false");
      } else {
        if (!e.length && t.nullable !== void 0) throw new Error('"nullable" cannot be used without "type"');
        t.nullable === true && e.push("null");
      }
      return e;
    }
    F.getSchemaTypes = Ni;
    function ln(t) {
      let e = Array.isArray(t) ? t : t ? [t] : [];
      if (e.every(Ei.isJSONType)) return e;
      throw new Error("type must be JSONType or JSONType[]: " + e.join(","));
    }
    F.getJSONTypes = ln;
    function qi(t, e) {
      let { gen: r, data: s, opts: n } = t, o = ki(e, n.coerceTypes), a = e.length > 0 && !(o.length === 0 && e.length === 1 && (0, Pi.schemaHasRulesForType)(t, e[0]));
      if (a) {
        let i = kr(e, s, n.strictNumbers, Me.Wrong);
        r.if(i, () => {
          o.length ? ji(t, e, o) : jr(t);
        });
      }
      return a;
    }
    F.coerceAndCheckDataType = qi;
    var dn = /* @__PURE__ */ new Set(["string", "number", "integer", "boolean", "null"]);
    function ki(t, e) {
      return e ? t.filter((r) => dn.has(r) || e === "array" && r === "array") : [];
    }
    function ji(t, e, r) {
      let { gen: s, data: n, opts: o } = t, a = s.let("dataType", (0, b._)`typeof ${n}`), i = s.let("coerced", (0, b._)`undefined`);
      o.coerceTypes === "array" && s.if((0, b._)`${a} == 'object' && Array.isArray(${n}) && ${n}.length == 1`, () => s.assign(n, (0, b._)`${n}[0]`).assign(a, (0, b._)`typeof ${n}`).if(kr(e, n, o.strictNumbers), () => s.assign(i, n))), s.if((0, b._)`${i} !== undefined`);
      for (let l of r) (dn.has(l) || l === "array" && o.coerceTypes === "array") && c(l);
      s.else(), jr(t), s.endIf(), s.if((0, b._)`${i} !== undefined`, () => {
        s.assign(n, i), Oi(t, i);
      });
      function c(l) {
        switch (l) {
          case "string":
            s.elseIf((0, b._)`${a} == "number" || ${a} == "boolean"`).assign(i, (0, b._)`"" + ${n}`).elseIf((0, b._)`${n} === null`).assign(i, (0, b._)`""`);
            return;
          case "number":
            s.elseIf((0, b._)`${a} == "boolean" || ${n} === null
              || (${a} == "string" && ${n} && ${n} == +${n})`).assign(i, (0, b._)`+${n}`);
            return;
          case "integer":
            s.elseIf((0, b._)`${a} === "boolean" || ${n} === null
              || (${a} === "string" && ${n} && ${n} == +${n} && !(${n} % 1))`).assign(i, (0, b._)`+${n}`);
            return;
          case "boolean":
            s.elseIf((0, b._)`${n} === "false" || ${n} === 0 || ${n} === null`).assign(i, false).elseIf((0, b._)`${n} === "true" || ${n} === 1`).assign(i, true);
            return;
          case "null":
            s.elseIf((0, b._)`${n} === "" || ${n} === 0 || ${n} === false`), s.assign(i, null);
            return;
          case "array":
            s.elseIf((0, b._)`${a} === "string" || ${a} === "number"
              || ${a} === "boolean" || ${n} === null`).assign(i, (0, b._)`[${n}]`);
        }
      }
    }
    function Oi({ gen: t, parentData: e, parentDataProperty: r }, s) {
      t.if((0, b._)`${e} !== undefined`, () => t.assign((0, b._)`${e}[${r}]`, s));
    }
    function qr(t, e, r, s = Me.Correct) {
      let n = s === Me.Correct ? b.operators.EQ : b.operators.NEQ, o;
      switch (t) {
        case "null":
          return (0, b._)`${e} ${n} null`;
        case "array":
          o = (0, b._)`Array.isArray(${e})`;
          break;
        case "object":
          o = (0, b._)`${e} && typeof ${e} == "object" && !Array.isArray(${e})`;
          break;
        case "integer":
          o = a((0, b._)`!(${e} % 1) && !isNaN(${e})`);
          break;
        case "number":
          o = a();
          break;
        default:
          return (0, b._)`typeof ${e} ${n} ${t}`;
      }
      return s === Me.Correct ? o : (0, b.not)(o);
      function a(i = b.nil) {
        return (0, b.and)((0, b._)`typeof ${e} == "number"`, i, r ? (0, b._)`isFinite(${e})` : b.nil);
      }
    }
    F.checkDataType = qr;
    function kr(t, e, r, s) {
      if (t.length === 1) return qr(t[0], e, r, s);
      let n, o = (0, un.toHash)(t);
      if (o.array && o.object) {
        let a = (0, b._)`typeof ${e} != "object"`;
        n = o.null ? a : (0, b._)`!${e} || ${a}`, delete o.null, delete o.array, delete o.object;
      } else n = b.nil;
      o.number && delete o.integer;
      for (let a in o) n = (0, b.and)(n, qr(a, e, r, s));
      return n;
    }
    F.checkDataTypes = kr;
    var Ii = { message: ({ schema: t }) => `must be ${t}`, params: ({ schema: t, schemaValue: e }) => typeof t == "string" ? (0, b._)`{type: ${t}}` : (0, b._)`{type: ${e}}` };
    function jr(t) {
      let e = Ri(t);
      (0, Si.reportError)(e, Ii);
    }
    F.reportTypeError = jr;
    function Ri(t) {
      let { gen: e, data: r, schema: s } = t, n = (0, un.schemaRefOrVal)(t, s, "type");
      return { gen: e, keyword: "type", data: r, schema: s.type, schemaCode: n, schemaValue: n, parentSchema: s, params: {}, it: t };
    }
  });
  var hn = _((kt) => {
    "use strict";
    Object.defineProperty(kt, "__esModule", { value: true });
    kt.assignDefaults = void 0;
    var Ae = P(), Ti = I();
    function Ci(t, e) {
      let { properties: r, items: s } = t.schema;
      if (e === "object" && r) for (let n in r) fn(t, n, r[n].default);
      else e === "array" && Array.isArray(s) && s.forEach((n, o) => fn(t, o, n.default));
    }
    kt.assignDefaults = Ci;
    function fn(t, e, r) {
      let { gen: s, compositeRule: n, data: o, opts: a } = t;
      if (r === void 0) return;
      let i = (0, Ae._)`${o}${(0, Ae.getProperty)(e)}`;
      if (n) {
        (0, Ti.checkStrictMode)(t, `default is ignored for: ${i}`);
        return;
      }
      let c = (0, Ae._)`${i} === undefined`;
      a.useDefaults === "empty" && (c = (0, Ae._)`${c} || ${i} === null || ${i} === ""`), s.if(c, (0, Ae._)`${i} = ${(0, Ae.stringify)(r)}`);
    }
  });
  var X = _((R) => {
    "use strict";
    Object.defineProperty(R, "__esModule", { value: true });
    R.validateUnion = R.validateArray = R.usePattern = R.callValidateCode = R.schemaProperties = R.allSchemaProperties = R.noPropertyInData = R.propertyInData = R.isOwnProperty = R.hasPropFunc = R.reportMissingProp = R.checkMissingProp = R.checkReportMissingProp = void 0;
    var M = P(), Or = I(), ye = de(), Mi = I();
    function Ai(t, e) {
      let { gen: r, data: s, it: n } = t;
      r.if(Rr(r, s, e, n.opts.ownProperties), () => {
        t.setParams({ missingProperty: (0, M._)`${e}` }, true), t.error();
      });
    }
    R.checkReportMissingProp = Ai;
    function Di({ gen: t, data: e, it: { opts: r } }, s, n) {
      return (0, M.or)(...s.map((o) => (0, M.and)(Rr(t, e, o, r.ownProperties), (0, M._)`${n} = ${o}`)));
    }
    R.checkMissingProp = Di;
    function Vi(t, e) {
      t.setParams({ missingProperty: e }, true), t.error();
    }
    R.reportMissingProp = Vi;
    function pn(t) {
      return t.scopeValue("func", { ref: Object.prototype.hasOwnProperty, code: (0, M._)`Object.prototype.hasOwnProperty` });
    }
    R.hasPropFunc = pn;
    function Ir(t, e, r) {
      return (0, M._)`${pn(t)}.call(${e}, ${r})`;
    }
    R.isOwnProperty = Ir;
    function zi(t, e, r, s) {
      let n = (0, M._)`${e}${(0, M.getProperty)(r)} !== undefined`;
      return s ? (0, M._)`${n} && ${Ir(t, e, r)}` : n;
    }
    R.propertyInData = zi;
    function Rr(t, e, r, s) {
      let n = (0, M._)`${e}${(0, M.getProperty)(r)} === undefined`;
      return s ? (0, M.or)(n, (0, M.not)(Ir(t, e, r))) : n;
    }
    R.noPropertyInData = Rr;
    function mn(t) {
      return t ? Object.keys(t).filter((e) => e !== "__proto__") : [];
    }
    R.allSchemaProperties = mn;
    function Ui(t, e) {
      return mn(e).filter((r) => !(0, Or.alwaysValidSchema)(t, e[r]));
    }
    R.schemaProperties = Ui;
    function Ki({ schemaCode: t, data: e, it: { gen: r, topSchemaRef: s, schemaPath: n, errorPath: o }, it: a }, i, c, l) {
      let u = l ? (0, M._)`${t}, ${e}, ${s}${n}` : e, d = [[ye.default.instancePath, (0, M.strConcat)(ye.default.instancePath, o)], [ye.default.parentData, a.parentData], [ye.default.parentDataProperty, a.parentDataProperty], [ye.default.rootData, ye.default.rootData]];
      a.opts.dynamicRef && d.push([ye.default.dynamicAnchors, ye.default.dynamicAnchors]);
      let y = (0, M._)`${u}, ${r.object(...d)}`;
      return c !== M.nil ? (0, M._)`${i}.call(${c}, ${y})` : (0, M._)`${i}(${y})`;
    }
    R.callValidateCode = Ki;
    var Fi = (0, M._)`new RegExp`;
    function Li({ gen: t, it: { opts: e } }, r) {
      let s = e.unicodeRegExp ? "u" : "", { regExp: n } = e.code, o = n(r, s);
      return t.scopeValue("pattern", { key: o.toString(), ref: o, code: (0, M._)`${n.code === "new RegExp" ? Fi : (0, Mi.useFunc)(t, n)}(${r}, ${s})` });
    }
    R.usePattern = Li;
    function xi(t) {
      let { gen: e, data: r, keyword: s, it: n } = t, o = e.name("valid");
      if (n.allErrors) {
        let i = e.let("valid", true);
        return a(() => e.assign(i, false)), i;
      }
      return e.var(o, true), a(() => e.break()), o;
      function a(i) {
        let c = e.const("len", (0, M._)`${r}.length`);
        e.forRange("i", 0, c, (l) => {
          t.subschema({ keyword: s, dataProp: l, dataPropType: Or.Type.Num }, o), e.if((0, M.not)(o), i);
        });
      }
    }
    R.validateArray = xi;
    function Hi(t) {
      let { gen: e, schema: r, keyword: s, it: n } = t;
      if (!Array.isArray(r)) throw new Error("ajv implementation error");
      if (r.some((c) => (0, Or.alwaysValidSchema)(n, c)) && !n.opts.unevaluated) return;
      let a = e.let("valid", false), i = e.name("_valid");
      e.block(() => r.forEach((c, l) => {
        let u = t.subschema({ keyword: s, schemaProp: l, compositeRule: true }, i);
        e.assign(a, (0, M._)`${a} || ${i}`), t.mergeValidEvaluated(u, i) || e.if((0, M.not)(a));
      })), t.result(a, () => t.reset(), () => t.error(true));
    }
    R.validateUnion = Hi;
  });
  var gn = _((ne) => {
    "use strict";
    Object.defineProperty(ne, "__esModule", { value: true });
    ne.validateKeywordUsage = ne.validSchemaType = ne.funcKeywordCode = ne.macroKeywordCode = void 0;
    var x = P(), Ne = de(), Gi = X(), Ji = et();
    function Wi(t, e) {
      let { gen: r, keyword: s, schema: n, parentSchema: o, it: a } = t, i = e.macro.call(a.self, n, o, a), c = _n(r, s, i);
      a.opts.validateSchema !== false && a.self.validateSchema(i, true);
      let l = r.name("valid");
      t.subschema({ schema: i, schemaPath: x.nil, errSchemaPath: `${a.errSchemaPath}/${s}`, topSchemaRef: c, compositeRule: true }, l), t.pass(l, () => t.error(true));
    }
    ne.macroKeywordCode = Wi;
    function Qi(t, e) {
      var r;
      let { gen: s, keyword: n, schema: o, parentSchema: a, $data: i, it: c } = t;
      Bi(c, e);
      let l = !i && e.compile ? e.compile.call(c.self, o, a, c) : e.validate, u = _n(s, n, l), d = s.let("valid");
      t.block$data(d, y), t.ok((r = e.valid) !== null && r !== void 0 ? r : d);
      function y() {
        if (e.errors === false) f(), e.modifying && yn(t), p(() => t.error());
        else {
          let g = e.async ? m() : h();
          e.modifying && yn(t), p(() => Xi(t, g));
        }
      }
      function m() {
        let g = s.let("ruleErrs", null);
        return s.try(() => f((0, x._)`await `), (k) => s.assign(d, false).if((0, x._)`${k} instanceof ${c.ValidationError}`, () => s.assign(g, (0, x._)`${k}.errors`), () => s.throw(k))), g;
      }
      function h() {
        let g = (0, x._)`${u}.errors`;
        return s.assign(g, null), f(x.nil), g;
      }
      function f(g = e.async ? (0, x._)`await ` : x.nil) {
        let k = c.opts.passContext ? Ne.default.this : Ne.default.self, N = !("compile" in e && !i || e.schema === false);
        s.assign(d, (0, x._)`${g}${(0, Gi.callValidateCode)(t, u, k, N)}`, e.modifying);
      }
      function p(g) {
        var k;
        s.if((0, x.not)((k = e.valid) !== null && k !== void 0 ? k : d), g);
      }
    }
    ne.funcKeywordCode = Qi;
    function yn(t) {
      let { gen: e, data: r, it: s } = t;
      e.if(s.parentData, () => e.assign(r, (0, x._)`${s.parentData}[${s.parentDataProperty}]`));
    }
    function Xi(t, e) {
      let { gen: r } = t;
      r.if((0, x._)`Array.isArray(${e})`, () => {
        r.assign(Ne.default.vErrors, (0, x._)`${Ne.default.vErrors} === null ? ${e} : ${Ne.default.vErrors}.concat(${e})`).assign(Ne.default.errors, (0, x._)`${Ne.default.vErrors}.length`), (0, Ji.extendErrors)(t);
      }, () => t.error());
    }
    function Bi({ schemaEnv: t }, e) {
      if (e.async && !t.$async) throw new Error("async keyword in sync schema");
    }
    function _n(t, e, r) {
      if (r === void 0) throw new Error(`keyword "${e}" failed to compile`);
      return t.scopeValue("keyword", typeof r == "function" ? { ref: r } : { ref: r, code: (0, x.stringify)(r) });
    }
    function Yi(t, e, r = false) {
      return !e.length || e.some((s) => s === "array" ? Array.isArray(t) : s === "object" ? t && typeof t == "object" && !Array.isArray(t) : typeof t == s || r && typeof t > "u");
    }
    ne.validSchemaType = Yi;
    function Zi({ schema: t, opts: e, self: r, errSchemaPath: s }, n, o) {
      if (Array.isArray(n.keyword) ? !n.keyword.includes(o) : n.keyword !== o) throw new Error("ajv implementation error");
      let a = n.dependencies;
      if (a?.some((i) => !Object.prototype.hasOwnProperty.call(t, i))) throw new Error(`parent schema must have dependencies of ${o}: ${a.join(",")}`);
      if (n.validateSchema && !n.validateSchema(t[o])) {
        let c = `keyword "${o}" value is invalid at path "${s}": ` + r.errorsText(n.validateSchema.errors);
        if (e.validateSchema === "log") r.logger.error(c);
        else throw new Error(c);
      }
    }
    ne.validateKeywordUsage = Zi;
  });
  var vn = _((_e) => {
    "use strict";
    Object.defineProperty(_e, "__esModule", { value: true });
    _e.extendSubschemaMode = _e.extendSubschemaData = _e.getSubschema = void 0;
    var oe = P(), $n = I();
    function ec(t, { keyword: e, schemaProp: r, schema: s, schemaPath: n, errSchemaPath: o, topSchemaRef: a }) {
      if (e !== void 0 && s !== void 0) throw new Error('both "keyword" and "schema" passed, only one allowed');
      if (e !== void 0) {
        let i = t.schema[e];
        return r === void 0 ? { schema: i, schemaPath: (0, oe._)`${t.schemaPath}${(0, oe.getProperty)(e)}`, errSchemaPath: `${t.errSchemaPath}/${e}` } : { schema: i[r], schemaPath: (0, oe._)`${t.schemaPath}${(0, oe.getProperty)(e)}${(0, oe.getProperty)(r)}`, errSchemaPath: `${t.errSchemaPath}/${e}/${(0, $n.escapeFragment)(r)}` };
      }
      if (s !== void 0) {
        if (n === void 0 || o === void 0 || a === void 0) throw new Error('"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"');
        return { schema: s, schemaPath: n, topSchemaRef: a, errSchemaPath: o };
      }
      throw new Error('either "keyword" or "schema" must be passed');
    }
    _e.getSubschema = ec;
    function tc(t, e, { dataProp: r, dataPropType: s, data: n, dataTypes: o, propertyName: a }) {
      if (n !== void 0 && r !== void 0) throw new Error('both "data" and "dataProp" passed, only one allowed');
      let { gen: i } = e;
      if (r !== void 0) {
        let { errorPath: l, dataPathArr: u, opts: d } = e, y = i.let("data", (0, oe._)`${e.data}${(0, oe.getProperty)(r)}`, true);
        c(y), t.errorPath = (0, oe.str)`${l}${(0, $n.getErrorPath)(r, s, d.jsPropertySyntax)}`, t.parentDataProperty = (0, oe._)`${r}`, t.dataPathArr = [...u, t.parentDataProperty];
      }
      if (n !== void 0) {
        let l = n instanceof oe.Name ? n : i.let("data", n, true);
        c(l), a !== void 0 && (t.propertyName = a);
      }
      o && (t.dataTypes = o);
      function c(l) {
        t.data = l, t.dataLevel = e.dataLevel + 1, t.dataTypes = [], e.definedProperties = /* @__PURE__ */ new Set(), t.parentData = e.data, t.dataNames = [...e.dataNames, l];
      }
    }
    _e.extendSubschemaData = tc;
    function rc(t, { jtdDiscriminator: e, jtdMetadata: r, compositeRule: s, createErrors: n, allErrors: o }) {
      s !== void 0 && (t.compositeRule = s), n !== void 0 && (t.createErrors = n), o !== void 0 && (t.allErrors = o), t.jtdDiscriminator = e, t.jtdMetadata = r;
    }
    _e.extendSubschemaMode = rc;
  });
  var Tr = _(($f, wn) => {
    "use strict";
    wn.exports = function t(e, r) {
      if (e === r) return true;
      if (e && r && typeof e == "object" && typeof r == "object") {
        if (e.constructor !== r.constructor) return false;
        var s, n, o;
        if (Array.isArray(e)) {
          if (s = e.length, s != r.length) return false;
          for (n = s; n-- !== 0; ) if (!t(e[n], r[n])) return false;
          return true;
        }
        if (e.constructor === RegExp) return e.source === r.source && e.flags === r.flags;
        if (e.valueOf !== Object.prototype.valueOf) return e.valueOf() === r.valueOf();
        if (e.toString !== Object.prototype.toString) return e.toString() === r.toString();
        if (o = Object.keys(e), s = o.length, s !== Object.keys(r).length) return false;
        for (n = s; n-- !== 0; ) if (!Object.prototype.hasOwnProperty.call(r, o[n])) return false;
        for (n = s; n-- !== 0; ) {
          var a = o[n];
          if (!t(e[a], r[a])) return false;
        }
        return true;
      }
      return e !== e && r !== r;
    };
  });
  var En = _((vf, bn) => {
    "use strict";
    var ge = bn.exports = function(t, e, r) {
      typeof e == "function" && (r = e, e = {}), r = e.cb || r;
      var s = typeof r == "function" ? r : r.pre || function() {
      }, n = r.post || function() {
      };
      jt(e, s, n, t, "", t);
    };
    ge.keywords = { additionalItems: true, items: true, contains: true, additionalProperties: true, propertyNames: true, not: true, if: true, then: true, else: true };
    ge.arrayKeywords = { items: true, allOf: true, anyOf: true, oneOf: true };
    ge.propsKeywords = { $defs: true, definitions: true, properties: true, patternProperties: true, dependencies: true };
    ge.skipKeywords = { default: true, enum: true, const: true, required: true, maximum: true, minimum: true, exclusiveMaximum: true, exclusiveMinimum: true, multipleOf: true, maxLength: true, minLength: true, pattern: true, format: true, maxItems: true, minItems: true, uniqueItems: true, maxProperties: true, minProperties: true };
    function jt(t, e, r, s, n, o, a, i, c, l) {
      if (s && typeof s == "object" && !Array.isArray(s)) {
        e(s, n, o, a, i, c, l);
        for (var u in s) {
          var d = s[u];
          if (Array.isArray(d)) {
            if (u in ge.arrayKeywords) for (var y = 0; y < d.length; y++) jt(t, e, r, d[y], n + "/" + u + "/" + y, o, n, u, s, y);
          } else if (u in ge.propsKeywords) {
            if (d && typeof d == "object") for (var m in d) jt(t, e, r, d[m], n + "/" + u + "/" + sc(m), o, n, u, s, m);
          } else (u in ge.keywords || t.allKeys && !(u in ge.skipKeywords)) && jt(t, e, r, d, n + "/" + u, o, n, u, s);
        }
        r(s, n, o, a, i, c, l);
      }
    }
    function sc(t) {
      return t.replace(/~/g, "~0").replace(/\//g, "~1");
    }
  });
  var rt = _((J) => {
    "use strict";
    Object.defineProperty(J, "__esModule", { value: true });
    J.getSchemaRefs = J.resolveUrl = J.normalizeId = J._getFullPath = J.getFullPath = J.inlineRef = void 0;
    var nc = I(), oc = Tr(), ac = En(), ic = /* @__PURE__ */ new Set(["type", "format", "pattern", "maxLength", "minLength", "maxProperties", "minProperties", "maxItems", "minItems", "maximum", "minimum", "uniqueItems", "multipleOf", "required", "enum", "const"]);
    function cc(t, e = true) {
      return typeof t == "boolean" ? true : e === true ? !Cr(t) : e ? Pn(t) <= e : false;
    }
    J.inlineRef = cc;
    var uc = /* @__PURE__ */ new Set(["$ref", "$recursiveRef", "$recursiveAnchor", "$dynamicRef", "$dynamicAnchor"]);
    function Cr(t) {
      for (let e in t) {
        if (uc.has(e)) return true;
        let r = t[e];
        if (Array.isArray(r) && r.some(Cr) || typeof r == "object" && Cr(r)) return true;
      }
      return false;
    }
    function Pn(t) {
      let e = 0;
      for (let r in t) {
        if (r === "$ref") return 1 / 0;
        if (e++, !ic.has(r) && (typeof t[r] == "object" && (0, nc.eachItem)(t[r], (s) => e += Pn(s)), e === 1 / 0)) return 1 / 0;
      }
      return e;
    }
    function Sn(t, e = "", r) {
      r !== false && (e = De(e));
      let s = t.parse(e);
      return Nn(t, s);
    }
    J.getFullPath = Sn;
    function Nn(t, e) {
      return t.serialize(e).split("#")[0] + "#";
    }
    J._getFullPath = Nn;
    var lc = /#\/?$/;
    function De(t) {
      return t ? t.replace(lc, "") : "";
    }
    J.normalizeId = De;
    function dc(t, e, r) {
      return r = De(r), t.resolve(e, r);
    }
    J.resolveUrl = dc;
    var fc = /^[a-z_][-a-z0-9._]*$/i;
    function hc(t, e) {
      if (typeof t == "boolean") return {};
      let { schemaId: r, uriResolver: s } = this.opts, n = De(t[r] || e), o = { "": n }, a = Sn(s, n, false), i = {}, c = /* @__PURE__ */ new Set();
      return ac(t, { allKeys: true }, (d, y, m, h) => {
        if (h === void 0) return;
        let f = a + y, p = o[h];
        typeof d[r] == "string" && (p = g.call(this, d[r])), k.call(this, d.$anchor), k.call(this, d.$dynamicAnchor), o[y] = p;
        function g(N) {
          let C = this.opts.uriResolver.resolve;
          if (N = De(p ? C(p, N) : N), c.has(N)) throw u(N);
          c.add(N);
          let w = this.refs[N];
          return typeof w == "string" && (w = this.refs[w]), typeof w == "object" ? l(d, w.schema, N) : N !== De(f) && (N[0] === "#" ? (l(d, i[N], N), i[N] = d) : this.refs[N] = f), N;
        }
        function k(N) {
          if (typeof N == "string") {
            if (!fc.test(N)) throw new Error(`invalid anchor "${N}"`);
            g.call(this, `#${N}`);
          }
        }
      }), i;
      function l(d, y, m) {
        if (y !== void 0 && !oc(d, y)) throw u(m);
      }
      function u(d) {
        return new Error(`reference "${d}" resolves to more than one schema`);
      }
    }
    J.getSchemaRefs = hc;
  });
  var ot = _(($e) => {
    "use strict";
    Object.defineProperty($e, "__esModule", { value: true });
    $e.getData = $e.KeywordCxt = $e.validateFunctionCode = void 0;
    var In = on(), qn = tt(), Ar = Nr(), Ot = tt(), pc = hn(), nt = gn(), Mr = vn(), $ = P(), v = de(), mc = rt(), fe = I(), st = et();
    function yc(t) {
      if (Cn(t) && (Mn(t), Tn(t))) {
        $c(t);
        return;
      }
      Rn(t, () => (0, In.topBoolOrEmptySchema)(t));
    }
    $e.validateFunctionCode = yc;
    function Rn({ gen: t, validateName: e, schema: r, schemaEnv: s, opts: n }, o) {
      n.code.es5 ? t.func(e, (0, $._)`${v.default.data}, ${v.default.valCxt}`, s.$async, () => {
        t.code((0, $._)`"use strict"; ${kn(r, n)}`), gc(t, n), t.code(o);
      }) : t.func(e, (0, $._)`${v.default.data}, ${_c(n)}`, s.$async, () => t.code(kn(r, n)).code(o));
    }
    function _c(t) {
      return (0, $._)`{${v.default.instancePath}="", ${v.default.parentData}, ${v.default.parentDataProperty}, ${v.default.rootData}=${v.default.data}${t.dynamicRef ? (0, $._)`, ${v.default.dynamicAnchors}={}` : $.nil}}={}`;
    }
    function gc(t, e) {
      t.if(v.default.valCxt, () => {
        t.var(v.default.instancePath, (0, $._)`${v.default.valCxt}.${v.default.instancePath}`), t.var(v.default.parentData, (0, $._)`${v.default.valCxt}.${v.default.parentData}`), t.var(v.default.parentDataProperty, (0, $._)`${v.default.valCxt}.${v.default.parentDataProperty}`), t.var(v.default.rootData, (0, $._)`${v.default.valCxt}.${v.default.rootData}`), e.dynamicRef && t.var(v.default.dynamicAnchors, (0, $._)`${v.default.valCxt}.${v.default.dynamicAnchors}`);
      }, () => {
        t.var(v.default.instancePath, (0, $._)`""`), t.var(v.default.parentData, (0, $._)`undefined`), t.var(v.default.parentDataProperty, (0, $._)`undefined`), t.var(v.default.rootData, v.default.data), e.dynamicRef && t.var(v.default.dynamicAnchors, (0, $._)`{}`);
      });
    }
    function $c(t) {
      let { schema: e, opts: r, gen: s } = t;
      Rn(t, () => {
        r.$comment && e.$comment && Dn(t), Pc(t), s.let(v.default.vErrors, null), s.let(v.default.errors, 0), r.unevaluated && vc(t), An(t), qc(t);
      });
    }
    function vc(t) {
      let { gen: e, validateName: r } = t;
      t.evaluated = e.const("evaluated", (0, $._)`${r}.evaluated`), e.if((0, $._)`${t.evaluated}.dynamicProps`, () => e.assign((0, $._)`${t.evaluated}.props`, (0, $._)`undefined`)), e.if((0, $._)`${t.evaluated}.dynamicItems`, () => e.assign((0, $._)`${t.evaluated}.items`, (0, $._)`undefined`));
    }
    function kn(t, e) {
      let r = typeof t == "object" && t[e.schemaId];
      return r && (e.code.source || e.code.process) ? (0, $._)`/*# sourceURL=${r} */` : $.nil;
    }
    function wc(t, e) {
      if (Cn(t) && (Mn(t), Tn(t))) {
        bc(t, e);
        return;
      }
      (0, In.boolOrEmptySchema)(t, e);
    }
    function Tn({ schema: t, self: e }) {
      if (typeof t == "boolean") return !t;
      for (let r in t) if (e.RULES.all[r]) return true;
      return false;
    }
    function Cn(t) {
      return typeof t.schema != "boolean";
    }
    function bc(t, e) {
      let { schema: r, gen: s, opts: n } = t;
      n.$comment && r.$comment && Dn(t), Sc(t), Nc(t);
      let o = s.const("_errs", v.default.errors);
      An(t, o), s.var(e, (0, $._)`${o} === ${v.default.errors}`);
    }
    function Mn(t) {
      (0, fe.checkUnknownRules)(t), Ec(t);
    }
    function An(t, e) {
      if (t.opts.jtd) return jn(t, [], false, e);
      let r = (0, qn.getSchemaTypes)(t.schema), s = (0, qn.coerceAndCheckDataType)(t, r);
      jn(t, r, !s, e);
    }
    function Ec(t) {
      let { schema: e, errSchemaPath: r, opts: s, self: n } = t;
      e.$ref && s.ignoreKeywordsWithRef && (0, fe.schemaHasRulesButRef)(e, n.RULES) && n.logger.warn(`$ref: keywords ignored in schema at path "${r}"`);
    }
    function Pc(t) {
      let { schema: e, opts: r } = t;
      e.default !== void 0 && r.useDefaults && r.strictSchema && (0, fe.checkStrictMode)(t, "default is ignored in the schema root");
    }
    function Sc(t) {
      let e = t.schema[t.opts.schemaId];
      e && (t.baseId = (0, mc.resolveUrl)(t.opts.uriResolver, t.baseId, e));
    }
    function Nc(t) {
      if (t.schema.$async && !t.schemaEnv.$async) throw new Error("async schema in sync schema");
    }
    function Dn({ gen: t, schemaEnv: e, schema: r, errSchemaPath: s, opts: n }) {
      let o = r.$comment;
      if (n.$comment === true) t.code((0, $._)`${v.default.self}.logger.log(${o})`);
      else if (typeof n.$comment == "function") {
        let a = (0, $.str)`${s}/$comment`, i = t.scopeValue("root", { ref: e.root });
        t.code((0, $._)`${v.default.self}.opts.$comment(${o}, ${a}, ${i}.schema)`);
      }
    }
    function qc(t) {
      let { gen: e, schemaEnv: r, validateName: s, ValidationError: n, opts: o } = t;
      r.$async ? e.if((0, $._)`${v.default.errors} === 0`, () => e.return(v.default.data), () => e.throw((0, $._)`new ${n}(${v.default.vErrors})`)) : (e.assign((0, $._)`${s}.errors`, v.default.vErrors), o.unevaluated && kc(t), e.return((0, $._)`${v.default.errors} === 0`));
    }
    function kc({ gen: t, evaluated: e, props: r, items: s }) {
      r instanceof $.Name && t.assign((0, $._)`${e}.props`, r), s instanceof $.Name && t.assign((0, $._)`${e}.items`, s);
    }
    function jn(t, e, r, s) {
      let { gen: n, schema: o, data: a, allErrors: i, opts: c, self: l } = t, { RULES: u } = l;
      if (o.$ref && (c.ignoreKeywordsWithRef || !(0, fe.schemaHasRulesButRef)(o, u))) {
        n.block(() => zn(t, "$ref", u.all.$ref.definition));
        return;
      }
      c.jtd || jc(t, e), n.block(() => {
        for (let y of u.rules) d(y);
        d(u.post);
      });
      function d(y) {
        (0, Ar.shouldUseGroup)(o, y) && (y.type ? (n.if((0, Ot.checkDataType)(y.type, a, c.strictNumbers)), On(t, y), e.length === 1 && e[0] === y.type && r && (n.else(), (0, Ot.reportTypeError)(t)), n.endIf()) : On(t, y), i || n.if((0, $._)`${v.default.errors} === ${s || 0}`));
      }
    }
    function On(t, e) {
      let { gen: r, schema: s, opts: { useDefaults: n } } = t;
      n && (0, pc.assignDefaults)(t, e.type), r.block(() => {
        for (let o of e.rules) (0, Ar.shouldUseRule)(s, o) && zn(t, o.keyword, o.definition, e.type);
      });
    }
    function jc(t, e) {
      t.schemaEnv.meta || !t.opts.strictTypes || (Oc(t, e), t.opts.allowUnionTypes || Ic(t, e), Rc(t, t.dataTypes));
    }
    function Oc(t, e) {
      if (e.length) {
        if (!t.dataTypes.length) {
          t.dataTypes = e;
          return;
        }
        e.forEach((r) => {
          Vn(t.dataTypes, r) || Dr(t, `type "${r}" not allowed by context "${t.dataTypes.join(",")}"`);
        }), Cc(t, e);
      }
    }
    function Ic(t, e) {
      e.length > 1 && !(e.length === 2 && e.includes("null")) && Dr(t, "use allowUnionTypes to allow union type keyword");
    }
    function Rc(t, e) {
      let r = t.self.RULES.all;
      for (let s in r) {
        let n = r[s];
        if (typeof n == "object" && (0, Ar.shouldUseRule)(t.schema, n)) {
          let { type: o } = n.definition;
          o.length && !o.some((a) => Tc(e, a)) && Dr(t, `missing type "${o.join(",")}" for keyword "${s}"`);
        }
      }
    }
    function Tc(t, e) {
      return t.includes(e) || e === "number" && t.includes("integer");
    }
    function Vn(t, e) {
      return t.includes(e) || e === "integer" && t.includes("number");
    }
    function Cc(t, e) {
      let r = [];
      for (let s of t.dataTypes) Vn(e, s) ? r.push(s) : e.includes("integer") && s === "number" && r.push("integer");
      t.dataTypes = r;
    }
    function Dr(t, e) {
      let r = t.schemaEnv.baseId + t.errSchemaPath;
      e += ` at "${r}" (strictTypes)`, (0, fe.checkStrictMode)(t, e, t.opts.strictTypes);
    }
    var It = class {
      constructor(e, r, s) {
        if ((0, nt.validateKeywordUsage)(e, r, s), this.gen = e.gen, this.allErrors = e.allErrors, this.keyword = s, this.data = e.data, this.schema = e.schema[s], this.$data = r.$data && e.opts.$data && this.schema && this.schema.$data, this.schemaValue = (0, fe.schemaRefOrVal)(e, this.schema, s, this.$data), this.schemaType = r.schemaType, this.parentSchema = e.schema, this.params = {}, this.it = e, this.def = r, this.$data) this.schemaCode = e.gen.const("vSchema", Un(this.$data, e));
        else if (this.schemaCode = this.schemaValue, !(0, nt.validSchemaType)(this.schema, r.schemaType, r.allowUndefined)) throw new Error(`${s} value must be ${JSON.stringify(r.schemaType)}`);
        ("code" in r ? r.trackErrors : r.errors !== false) && (this.errsCount = e.gen.const("_errs", v.default.errors));
      }
      result(e, r, s) {
        this.failResult((0, $.not)(e), r, s);
      }
      failResult(e, r, s) {
        this.gen.if(e), s ? s() : this.error(), r ? (this.gen.else(), r(), this.allErrors && this.gen.endIf()) : this.allErrors ? this.gen.endIf() : this.gen.else();
      }
      pass(e, r) {
        this.failResult((0, $.not)(e), void 0, r);
      }
      fail(e) {
        if (e === void 0) {
          this.error(), this.allErrors || this.gen.if(false);
          return;
        }
        this.gen.if(e), this.error(), this.allErrors ? this.gen.endIf() : this.gen.else();
      }
      fail$data(e) {
        if (!this.$data) return this.fail(e);
        let { schemaCode: r } = this;
        this.fail((0, $._)`${r} !== undefined && (${(0, $.or)(this.invalid$data(), e)})`);
      }
      error(e, r, s) {
        if (r) {
          this.setParams(r), this._error(e, s), this.setParams({});
          return;
        }
        this._error(e, s);
      }
      _error(e, r) {
        (e ? st.reportExtraError : st.reportError)(this, this.def.error, r);
      }
      $dataError() {
        (0, st.reportError)(this, this.def.$dataError || st.keyword$DataError);
      }
      reset() {
        if (this.errsCount === void 0) throw new Error('add "trackErrors" to keyword definition');
        (0, st.resetErrorsCount)(this.gen, this.errsCount);
      }
      ok(e) {
        this.allErrors || this.gen.if(e);
      }
      setParams(e, r) {
        r ? Object.assign(this.params, e) : this.params = e;
      }
      block$data(e, r, s = $.nil) {
        this.gen.block(() => {
          this.check$data(e, s), r();
        });
      }
      check$data(e = $.nil, r = $.nil) {
        if (!this.$data) return;
        let { gen: s, schemaCode: n, schemaType: o, def: a } = this;
        s.if((0, $.or)((0, $._)`${n} === undefined`, r)), e !== $.nil && s.assign(e, true), (o.length || a.validateSchema) && (s.elseIf(this.invalid$data()), this.$dataError(), e !== $.nil && s.assign(e, false)), s.else();
      }
      invalid$data() {
        let { gen: e, schemaCode: r, schemaType: s, def: n, it: o } = this;
        return (0, $.or)(a(), i());
        function a() {
          if (s.length) {
            if (!(r instanceof $.Name)) throw new Error("ajv implementation error");
            let c = Array.isArray(s) ? s : [s];
            return (0, $._)`${(0, Ot.checkDataTypes)(c, r, o.opts.strictNumbers, Ot.DataType.Wrong)}`;
          }
          return $.nil;
        }
        function i() {
          if (n.validateSchema) {
            let c = e.scopeValue("validate$data", { ref: n.validateSchema });
            return (0, $._)`!${c}(${r})`;
          }
          return $.nil;
        }
      }
      subschema(e, r) {
        let s = (0, Mr.getSubschema)(this.it, e);
        (0, Mr.extendSubschemaData)(s, this.it, e), (0, Mr.extendSubschemaMode)(s, e);
        let n = { ...this.it, ...s, items: void 0, props: void 0 };
        return wc(n, r), n;
      }
      mergeEvaluated(e, r) {
        let { it: s, gen: n } = this;
        s.opts.unevaluated && (s.props !== true && e.props !== void 0 && (s.props = fe.mergeEvaluated.props(n, e.props, s.props, r)), s.items !== true && e.items !== void 0 && (s.items = fe.mergeEvaluated.items(n, e.items, s.items, r)));
      }
      mergeValidEvaluated(e, r) {
        let { it: s, gen: n } = this;
        if (s.opts.unevaluated && (s.props !== true || s.items !== true)) return n.if(r, () => this.mergeEvaluated(e, $.Name)), true;
      }
    };
    $e.KeywordCxt = It;
    function zn(t, e, r, s) {
      let n = new It(t, r, e);
      "code" in r ? r.code(n, s) : n.$data && r.validate ? (0, nt.funcKeywordCode)(n, r) : "macro" in r ? (0, nt.macroKeywordCode)(n, r) : (r.compile || r.validate) && (0, nt.funcKeywordCode)(n, r);
    }
    var Mc = /^\/(?:[^~]|~0|~1)*$/, Ac = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
    function Un(t, { dataLevel: e, dataNames: r, dataPathArr: s }) {
      let n, o;
      if (t === "") return v.default.rootData;
      if (t[0] === "/") {
        if (!Mc.test(t)) throw new Error(`Invalid JSON-pointer: ${t}`);
        n = t, o = v.default.rootData;
      } else {
        let l = Ac.exec(t);
        if (!l) throw new Error(`Invalid JSON-pointer: ${t}`);
        let u = +l[1];
        if (n = l[2], n === "#") {
          if (u >= e) throw new Error(c("property/index", u));
          return s[e - u];
        }
        if (u > e) throw new Error(c("data", u));
        if (o = r[e - u], !n) return o;
      }
      let a = o, i = n.split("/");
      for (let l of i) l && (o = (0, $._)`${o}${(0, $.getProperty)((0, fe.unescapeJsonPointer)(l))}`, a = (0, $._)`${a} && ${o}`);
      return a;
      function c(l, u) {
        return `Cannot access ${l} ${u} levels up, current level is ${e}`;
      }
    }
    $e.getData = Un;
  });
  var Rt = _((zr) => {
    "use strict";
    Object.defineProperty(zr, "__esModule", { value: true });
    var Vr = class extends Error {
      constructor(e) {
        super("validation failed"), this.errors = e, this.ajv = this.validation = true;
      }
    };
    zr.default = Vr;
  });
  var at = _((Fr) => {
    "use strict";
    Object.defineProperty(Fr, "__esModule", { value: true });
    var Ur = rt(), Kr = class extends Error {
      constructor(e, r, s, n) {
        super(n || `can't resolve reference ${s} from id ${r}`), this.missingRef = (0, Ur.resolveUrl)(e, r, s), this.missingSchema = (0, Ur.normalizeId)((0, Ur.getFullPath)(e, this.missingRef));
      }
    };
    Fr.default = Kr;
  });
  var Ct = _((B) => {
    "use strict";
    Object.defineProperty(B, "__esModule", { value: true });
    B.resolveSchema = B.getCompilingSchema = B.resolveRef = B.compileSchema = B.SchemaEnv = void 0;
    var ee = P(), Dc = Rt(), qe = de(), te = rt(), Kn = I(), Vc = ot(), Ve = class {
      constructor(e) {
        var r;
        this.refs = {}, this.dynamicAnchors = {};
        let s;
        typeof e.schema == "object" && (s = e.schema), this.schema = e.schema, this.schemaId = e.schemaId, this.root = e.root || this, this.baseId = (r = e.baseId) !== null && r !== void 0 ? r : (0, te.normalizeId)(s?.[e.schemaId || "$id"]), this.schemaPath = e.schemaPath, this.localRefs = e.localRefs, this.meta = e.meta, this.$async = s?.$async, this.refs = {};
      }
    };
    B.SchemaEnv = Ve;
    function xr(t) {
      let e = Fn.call(this, t);
      if (e) return e;
      let r = (0, te.getFullPath)(this.opts.uriResolver, t.root.baseId), { es5: s, lines: n } = this.opts.code, { ownProperties: o } = this.opts, a = new ee.CodeGen(this.scope, { es5: s, lines: n, ownProperties: o }), i;
      t.$async && (i = a.scopeValue("Error", { ref: Dc.default, code: (0, ee._)`require("ajv/dist/runtime/validation_error").default` }));
      let c = a.scopeName("validate");
      t.validateName = c;
      let l = { gen: a, allErrors: this.opts.allErrors, data: qe.default.data, parentData: qe.default.parentData, parentDataProperty: qe.default.parentDataProperty, dataNames: [qe.default.data], dataPathArr: [ee.nil], dataLevel: 0, dataTypes: [], definedProperties: /* @__PURE__ */ new Set(), topSchemaRef: a.scopeValue("schema", this.opts.code.source === true ? { ref: t.schema, code: (0, ee.stringify)(t.schema) } : { ref: t.schema }), validateName: c, ValidationError: i, schema: t.schema, schemaEnv: t, rootId: r, baseId: t.baseId || r, schemaPath: ee.nil, errSchemaPath: t.schemaPath || (this.opts.jtd ? "" : "#"), errorPath: (0, ee._)`""`, opts: this.opts, self: this }, u;
      try {
        this._compilations.add(t), (0, Vc.validateFunctionCode)(l), a.optimize(this.opts.code.optimize);
        let d = a.toString();
        u = `${a.scopeRefs(qe.default.scope)}return ${d}`, this.opts.code.process && (u = this.opts.code.process(u, t));
        let m = new Function(`${qe.default.self}`, `${qe.default.scope}`, u)(this, this.scope.get());
        if (this.scope.value(c, { ref: m }), m.errors = null, m.schema = t.schema, m.schemaEnv = t, t.$async && (m.$async = true), this.opts.code.source === true && (m.source = { validateName: c, validateCode: d, scopeValues: a._values }), this.opts.unevaluated) {
          let { props: h, items: f } = l;
          m.evaluated = { props: h instanceof ee.Name ? void 0 : h, items: f instanceof ee.Name ? void 0 : f, dynamicProps: h instanceof ee.Name, dynamicItems: f instanceof ee.Name }, m.source && (m.source.evaluated = (0, ee.stringify)(m.evaluated));
        }
        return t.validate = m, t;
      } catch (d) {
        throw delete t.validate, delete t.validateName, u && this.logger.error("Error compiling schema, function code:", u), d;
      } finally {
        this._compilations.delete(t);
      }
    }
    B.compileSchema = xr;
    function zc(t, e, r) {
      var s;
      r = (0, te.resolveUrl)(this.opts.uriResolver, e, r);
      let n = t.refs[r];
      if (n) return n;
      let o = Fc.call(this, t, r);
      if (o === void 0) {
        let a = (s = t.localRefs) === null || s === void 0 ? void 0 : s[r], { schemaId: i } = this.opts;
        a && (o = new Ve({ schema: a, schemaId: i, root: t, baseId: e }));
      }
      if (o !== void 0) return t.refs[r] = Uc.call(this, o);
    }
    B.resolveRef = zc;
    function Uc(t) {
      return (0, te.inlineRef)(t.schema, this.opts.inlineRefs) ? t.schema : t.validate ? t : xr.call(this, t);
    }
    function Fn(t) {
      for (let e of this._compilations) if (Kc(e, t)) return e;
    }
    B.getCompilingSchema = Fn;
    function Kc(t, e) {
      return t.schema === e.schema && t.root === e.root && t.baseId === e.baseId;
    }
    function Fc(t, e) {
      let r;
      for (; typeof (r = this.refs[e]) == "string"; ) e = r;
      return r || this.schemas[e] || Tt.call(this, t, e);
    }
    function Tt(t, e) {
      let r = this.opts.uriResolver.parse(e), s = (0, te._getFullPath)(this.opts.uriResolver, r), n = (0, te.getFullPath)(this.opts.uriResolver, t.baseId, void 0);
      if (Object.keys(t.schema).length > 0 && s === n) return Lr.call(this, r, t);
      let o = (0, te.normalizeId)(s), a = this.refs[o] || this.schemas[o];
      if (typeof a == "string") {
        let i = Tt.call(this, t, a);
        return typeof i?.schema != "object" ? void 0 : Lr.call(this, r, i);
      }
      if (typeof a?.schema == "object") {
        if (a.validate || xr.call(this, a), o === (0, te.normalizeId)(e)) {
          let { schema: i } = a, { schemaId: c } = this.opts, l = i[c];
          return l && (n = (0, te.resolveUrl)(this.opts.uriResolver, n, l)), new Ve({ schema: i, schemaId: c, root: t, baseId: n });
        }
        return Lr.call(this, r, a);
      }
    }
    B.resolveSchema = Tt;
    var Lc = /* @__PURE__ */ new Set(["properties", "patternProperties", "enum", "dependencies", "definitions"]);
    function Lr(t, { baseId: e, schema: r, root: s }) {
      var n;
      if (((n = t.fragment) === null || n === void 0 ? void 0 : n[0]) !== "/") return;
      for (let i of t.fragment.slice(1).split("/")) {
        if (typeof r == "boolean") return;
        let c = r[(0, Kn.unescapeFragment)(i)];
        if (c === void 0) return;
        r = c;
        let l = typeof r == "object" && r[this.opts.schemaId];
        !Lc.has(i) && l && (e = (0, te.resolveUrl)(this.opts.uriResolver, e, l));
      }
      let o;
      if (typeof r != "boolean" && r.$ref && !(0, Kn.schemaHasRulesButRef)(r, this.RULES)) {
        let i = (0, te.resolveUrl)(this.opts.uriResolver, e, r.$ref);
        o = Tt.call(this, s, i);
      }
      let { schemaId: a } = this.opts;
      if (o = o || new Ve({ schema: r, schemaId: a, root: s, baseId: e }), o.schema !== o.root.schema) return o;
    }
  });
  var Ln = _((Nf, xc) => {
    xc.exports = { $id: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#", description: "Meta-schema for $data reference (JSON AnySchema extension proposal)", type: "object", required: ["$data"], properties: { $data: { type: "string", anyOf: [{ format: "relative-json-pointer" }, { format: "json-pointer" }] } }, additionalProperties: false };
  });
  var Hn = _((qf, xn) => {
    "use strict";
    var Hc = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, a: 10, A: 10, b: 11, B: 11, c: 12, C: 12, d: 13, D: 13, e: 14, E: 14, f: 15, F: 15 };
    xn.exports = { HEX: Hc };
  });
  var Zn = _((kf, Yn) => {
    "use strict";
    var { HEX: Gc } = Hn(), Jc = /^(?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)$/u;
    function Qn(t) {
      if (Bn(t, ".") < 3) return { host: t, isIPV4: false };
      let e = t.match(Jc) || [], [r] = e;
      return r ? { host: Qc(r, "."), isIPV4: true } : { host: t, isIPV4: false };
    }
    function Hr(t, e = false) {
      let r = "", s = true;
      for (let n of t) {
        if (Gc[n] === void 0) return;
        n !== "0" && s === true && (s = false), s || (r += n);
      }
      return e && r.length === 0 && (r = "0"), r;
    }
    function Wc(t) {
      let e = 0, r = { error: false, address: "", zone: "" }, s = [], n = [], o = false, a = false, i = false;
      function c() {
        if (n.length) {
          if (o === false) {
            let l = Hr(n);
            if (l !== void 0) s.push(l);
            else return r.error = true, false;
          }
          n.length = 0;
        }
        return true;
      }
      for (let l = 0; l < t.length; l++) {
        let u = t[l];
        if (!(u === "[" || u === "]")) if (u === ":") {
          if (a === true && (i = true), !c()) break;
          if (e++, s.push(":"), e > 7) {
            r.error = true;
            break;
          }
          l - 1 >= 0 && t[l - 1] === ":" && (a = true);
          continue;
        } else if (u === "%") {
          if (!c()) break;
          o = true;
        } else {
          n.push(u);
          continue;
        }
      }
      return n.length && (o ? r.zone = n.join("") : i ? s.push(n.join("")) : s.push(Hr(n))), r.address = s.join(""), r;
    }
    function Xn(t) {
      if (Bn(t, ":") < 2) return { host: t, isIPV6: false };
      let e = Wc(t);
      if (e.error) return { host: t, isIPV6: false };
      {
        let r = e.address, s = e.address;
        return e.zone && (r += "%" + e.zone, s += "%25" + e.zone), { host: r, escapedHost: s, isIPV6: true };
      }
    }
    function Qc(t, e) {
      let r = "", s = true, n = t.length;
      for (let o = 0; o < n; o++) {
        let a = t[o];
        a === "0" && s ? (o + 1 <= n && t[o + 1] === e || o + 1 === n) && (r += a, s = false) : (a === e ? s = true : s = false, r += a);
      }
      return r;
    }
    function Bn(t, e) {
      let r = 0;
      for (let s = 0; s < t.length; s++) t[s] === e && r++;
      return r;
    }
    var Gn = /^\.\.?\//u, Jn = /^\/\.(?:\/|$)/u, Wn = /^\/\.\.(?:\/|$)/u, Xc = /^\/?(?:.|\n)*?(?=\/|$)/u;
    function Bc(t) {
      let e = [];
      for (; t.length; ) if (t.match(Gn)) t = t.replace(Gn, "");
      else if (t.match(Jn)) t = t.replace(Jn, "/");
      else if (t.match(Wn)) t = t.replace(Wn, "/"), e.pop();
      else if (t === "." || t === "..") t = "";
      else {
        let r = t.match(Xc);
        if (r) {
          let s = r[0];
          t = t.slice(s.length), e.push(s);
        } else throw new Error("Unexpected dot segment condition");
      }
      return e.join("");
    }
    function Yc(t, e) {
      let r = e !== true ? escape : unescape;
      return t.scheme !== void 0 && (t.scheme = r(t.scheme)), t.userinfo !== void 0 && (t.userinfo = r(t.userinfo)), t.host !== void 0 && (t.host = r(t.host)), t.path !== void 0 && (t.path = r(t.path)), t.query !== void 0 && (t.query = r(t.query)), t.fragment !== void 0 && (t.fragment = r(t.fragment)), t;
    }
    function Zc(t) {
      let e = [];
      if (t.userinfo !== void 0 && (e.push(t.userinfo), e.push("@")), t.host !== void 0) {
        let r = unescape(t.host), s = Qn(r);
        if (s.isIPV4) r = s.host;
        else {
          let n = Xn(s.host);
          n.isIPV6 === true ? r = `[${n.escapedHost}]` : r = t.host;
        }
        e.push(r);
      }
      return (typeof t.port == "number" || typeof t.port == "string") && (e.push(":"), e.push(String(t.port))), e.length ? e.join("") : void 0;
    }
    Yn.exports = { recomposeAuthority: Zc, normalizeComponentEncoding: Yc, removeDotSegments: Bc, normalizeIPv4: Qn, normalizeIPv6: Xn, stringArrayToHexStripped: Hr };
  });
  var oo = _((jf, no) => {
    "use strict";
    var eu = /^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/iu, tu = /([\da-z][\d\-a-z]{0,31}):((?:[\w!$'()*+,\-.:;=@]|%[\da-f]{2})+)/iu;
    function eo(t) {
      return typeof t.secure == "boolean" ? t.secure : String(t.scheme).toLowerCase() === "wss";
    }
    function to(t) {
      return t.host || (t.error = t.error || "HTTP URIs must have a host."), t;
    }
    function ro(t) {
      let e = String(t.scheme).toLowerCase() === "https";
      return (t.port === (e ? 443 : 80) || t.port === "") && (t.port = void 0), t.path || (t.path = "/"), t;
    }
    function ru(t) {
      return t.secure = eo(t), t.resourceName = (t.path || "/") + (t.query ? "?" + t.query : ""), t.path = void 0, t.query = void 0, t;
    }
    function su(t) {
      if ((t.port === (eo(t) ? 443 : 80) || t.port === "") && (t.port = void 0), typeof t.secure == "boolean" && (t.scheme = t.secure ? "wss" : "ws", t.secure = void 0), t.resourceName) {
        let [e, r] = t.resourceName.split("?");
        t.path = e && e !== "/" ? e : void 0, t.query = r, t.resourceName = void 0;
      }
      return t.fragment = void 0, t;
    }
    function nu(t, e) {
      if (!t.path) return t.error = "URN can not be parsed", t;
      let r = t.path.match(tu);
      if (r) {
        let s = e.scheme || t.scheme || "urn";
        t.nid = r[1].toLowerCase(), t.nss = r[2];
        let n = `${s}:${e.nid || t.nid}`, o = Gr[n];
        t.path = void 0, o && (t = o.parse(t, e));
      } else t.error = t.error || "URN can not be parsed.";
      return t;
    }
    function ou(t, e) {
      let r = e.scheme || t.scheme || "urn", s = t.nid.toLowerCase(), n = `${r}:${e.nid || s}`, o = Gr[n];
      o && (t = o.serialize(t, e));
      let a = t, i = t.nss;
      return a.path = `${s || e.nid}:${i}`, e.skipEscape = true, a;
    }
    function au(t, e) {
      let r = t;
      return r.uuid = r.nss, r.nss = void 0, !e.tolerant && (!r.uuid || !eu.test(r.uuid)) && (r.error = r.error || "UUID is not valid."), r;
    }
    function iu(t) {
      let e = t;
      return e.nss = (t.uuid || "").toLowerCase(), e;
    }
    var so = { scheme: "http", domainHost: true, parse: to, serialize: ro }, cu = { scheme: "https", domainHost: so.domainHost, parse: to, serialize: ro }, Mt = { scheme: "ws", domainHost: true, parse: ru, serialize: su }, uu = { scheme: "wss", domainHost: Mt.domainHost, parse: Mt.parse, serialize: Mt.serialize }, lu = { scheme: "urn", parse: nu, serialize: ou, skipNormalize: true }, du = { scheme: "urn:uuid", parse: au, serialize: iu, skipNormalize: true }, Gr = { http: so, https: cu, ws: Mt, wss: uu, urn: lu, "urn:uuid": du };
    no.exports = Gr;
  });
  var io = _((Of, Dt) => {
    "use strict";
    var { normalizeIPv6: fu, normalizeIPv4: hu, removeDotSegments: it, recomposeAuthority: pu, normalizeComponentEncoding: At } = Zn(), Jr = oo();
    function mu(t, e) {
      return typeof t == "string" ? t = ae(he(t, e), e) : typeof t == "object" && (t = he(ae(t, e), e)), t;
    }
    function yu(t, e, r) {
      let s = Object.assign({ scheme: "null" }, r), n = ao(he(t, s), he(e, s), s, true);
      return ae(n, { ...s, skipEscape: true });
    }
    function ao(t, e, r, s) {
      let n = {};
      return s || (t = he(ae(t, r), r), e = he(ae(e, r), r)), r = r || {}, !r.tolerant && e.scheme ? (n.scheme = e.scheme, n.userinfo = e.userinfo, n.host = e.host, n.port = e.port, n.path = it(e.path || ""), n.query = e.query) : (e.userinfo !== void 0 || e.host !== void 0 || e.port !== void 0 ? (n.userinfo = e.userinfo, n.host = e.host, n.port = e.port, n.path = it(e.path || ""), n.query = e.query) : (e.path ? (e.path.charAt(0) === "/" ? n.path = it(e.path) : ((t.userinfo !== void 0 || t.host !== void 0 || t.port !== void 0) && !t.path ? n.path = "/" + e.path : t.path ? n.path = t.path.slice(0, t.path.lastIndexOf("/") + 1) + e.path : n.path = e.path, n.path = it(n.path)), n.query = e.query) : (n.path = t.path, e.query !== void 0 ? n.query = e.query : n.query = t.query), n.userinfo = t.userinfo, n.host = t.host, n.port = t.port), n.scheme = t.scheme), n.fragment = e.fragment, n;
    }
    function _u(t, e, r) {
      return typeof t == "string" ? (t = unescape(t), t = ae(At(he(t, r), true), { ...r, skipEscape: true })) : typeof t == "object" && (t = ae(At(t, true), { ...r, skipEscape: true })), typeof e == "string" ? (e = unescape(e), e = ae(At(he(e, r), true), { ...r, skipEscape: true })) : typeof e == "object" && (e = ae(At(e, true), { ...r, skipEscape: true })), t.toLowerCase() === e.toLowerCase();
    }
    function ae(t, e) {
      let r = { host: t.host, scheme: t.scheme, userinfo: t.userinfo, port: t.port, path: t.path, query: t.query, nid: t.nid, nss: t.nss, uuid: t.uuid, fragment: t.fragment, reference: t.reference, resourceName: t.resourceName, secure: t.secure, error: "" }, s = Object.assign({}, e), n = [], o = Jr[(s.scheme || r.scheme || "").toLowerCase()];
      o && o.serialize && o.serialize(r, s), r.path !== void 0 && (s.skipEscape ? r.path = unescape(r.path) : (r.path = escape(r.path), r.scheme !== void 0 && (r.path = r.path.split("%3A").join(":")))), s.reference !== "suffix" && r.scheme && n.push(r.scheme, ":");
      let a = pu(r);
      if (a !== void 0 && (s.reference !== "suffix" && n.push("//"), n.push(a), r.path && r.path.charAt(0) !== "/" && n.push("/")), r.path !== void 0) {
        let i = r.path;
        !s.absolutePath && (!o || !o.absolutePath) && (i = it(i)), a === void 0 && (i = i.replace(/^\/\//u, "/%2F")), n.push(i);
      }
      return r.query !== void 0 && n.push("?", r.query), r.fragment !== void 0 && n.push("#", r.fragment), n.join("");
    }
    var gu = Array.from({ length: 127 }, (t, e) => /[^!"$&'()*+,\-.;=_`a-z{}~]/u.test(String.fromCharCode(e)));
    function $u(t) {
      let e = 0;
      for (let r = 0, s = t.length; r < s; ++r) if (e = t.charCodeAt(r), e > 126 || gu[e]) return true;
      return false;
    }
    var vu = /^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u;
    function he(t, e) {
      let r = Object.assign({}, e), s = { scheme: void 0, userinfo: void 0, host: "", port: void 0, path: "", query: void 0, fragment: void 0 }, n = t.indexOf("%") !== -1, o = false;
      r.reference === "suffix" && (t = (r.scheme ? r.scheme + ":" : "") + "//" + t);
      let a = t.match(vu);
      if (a) {
        if (s.scheme = a[1], s.userinfo = a[3], s.host = a[4], s.port = parseInt(a[5], 10), s.path = a[6] || "", s.query = a[7], s.fragment = a[8], isNaN(s.port) && (s.port = a[5]), s.host) {
          let c = hu(s.host);
          if (c.isIPV4 === false) {
            let l = fu(c.host);
            s.host = l.host.toLowerCase(), o = l.isIPV6;
          } else s.host = c.host, o = true;
        }
        s.scheme === void 0 && s.userinfo === void 0 && s.host === void 0 && s.port === void 0 && s.query === void 0 && !s.path ? s.reference = "same-document" : s.scheme === void 0 ? s.reference = "relative" : s.fragment === void 0 ? s.reference = "absolute" : s.reference = "uri", r.reference && r.reference !== "suffix" && r.reference !== s.reference && (s.error = s.error || "URI is not a " + r.reference + " reference.");
        let i = Jr[(r.scheme || s.scheme || "").toLowerCase()];
        if (!r.unicodeSupport && (!i || !i.unicodeSupport) && s.host && (r.domainHost || i && i.domainHost) && o === false && $u(s.host)) try {
          s.host = URL.domainToASCII(s.host.toLowerCase());
        } catch (c) {
          s.error = s.error || "Host's domain name can not be converted to ASCII: " + c;
        }
        (!i || i && !i.skipNormalize) && (n && s.scheme !== void 0 && (s.scheme = unescape(s.scheme)), n && s.host !== void 0 && (s.host = unescape(s.host)), s.path && (s.path = escape(unescape(s.path))), s.fragment && (s.fragment = encodeURI(decodeURIComponent(s.fragment)))), i && i.parse && i.parse(s, r);
      } else s.error = s.error || "URI can not be parsed.";
      return s;
    }
    var Wr = { SCHEMES: Jr, normalize: mu, resolve: yu, resolveComponents: ao, equal: _u, serialize: ae, parse: he };
    Dt.exports = Wr;
    Dt.exports.default = Wr;
    Dt.exports.fastUri = Wr;
  });
  var uo = _((Qr) => {
    "use strict";
    Object.defineProperty(Qr, "__esModule", { value: true });
    var co = io();
    co.code = 'require("ajv/dist/runtime/uri").default';
    Qr.default = co;
  });
  var go = _((V) => {
    "use strict";
    Object.defineProperty(V, "__esModule", { value: true });
    V.CodeGen = V.Name = V.nil = V.stringify = V.str = V._ = V.KeywordCxt = void 0;
    var wu = ot();
    Object.defineProperty(V, "KeywordCxt", { enumerable: true, get: function() {
      return wu.KeywordCxt;
    } });
    var ze = P();
    Object.defineProperty(V, "_", { enumerable: true, get: function() {
      return ze._;
    } });
    Object.defineProperty(V, "str", { enumerable: true, get: function() {
      return ze.str;
    } });
    Object.defineProperty(V, "stringify", { enumerable: true, get: function() {
      return ze.stringify;
    } });
    Object.defineProperty(V, "nil", { enumerable: true, get: function() {
      return ze.nil;
    } });
    Object.defineProperty(V, "Name", { enumerable: true, get: function() {
      return ze.Name;
    } });
    Object.defineProperty(V, "CodeGen", { enumerable: true, get: function() {
      return ze.CodeGen;
    } });
    var bu = Rt(), mo = at(), Eu = Sr(), ct = Ct(), Pu = P(), ut = rt(), Vt = tt(), Br = I(), lo = Ln(), Su = uo(), yo = (t, e) => new RegExp(t, e);
    yo.code = "new RegExp";
    var Nu = ["removeAdditional", "useDefaults", "coerceTypes"], qu = /* @__PURE__ */ new Set(["validate", "serialize", "parse", "wrapper", "root", "schema", "keyword", "pattern", "formats", "validate$data", "func", "obj", "Error"]), ku = { errorDataPath: "", format: "`validateFormats: false` can be used instead.", nullable: '"nullable" keyword is supported by default.', jsonPointers: "Deprecated jsPropertySyntax can be used instead.", extendRefs: "Deprecated ignoreKeywordsWithRef can be used instead.", missingRefs: "Pass empty schema with $id that should be ignored to ajv.addSchema.", processCode: "Use option `code: {process: (code, schemaEnv: object) => string}`", sourceCode: "Use option `code: {source: true}`", strictDefaults: "It is default now, see option `strict`.", strictKeywords: "It is default now, see option `strict`.", uniqueItems: '"uniqueItems" keyword is always validated.', unknownFormats: "Disable strict mode or pass `true` to `ajv.addFormat` (or `formats` option).", cache: "Map is used as cache, schema object as key.", serialize: "Map is used as cache, schema object as key.", ajvErrors: "It is default now." }, ju = { ignoreKeywordsWithRef: "", jsPropertySyntax: "", unicode: '"minLength"/"maxLength" account for unicode characters by default.' }, fo = 200;
    function Ou(t) {
      var e, r, s, n, o, a, i, c, l, u, d, y, m, h, f, p, g, k, N, C, w, se, ce, tr, rr;
      let He = t.strict, sr = (e = t.code) === null || e === void 0 ? void 0 : e.optimize, Ks = sr === true || sr === void 0 ? 1 : sr || 0, Fs = (s = (r = t.code) === null || r === void 0 ? void 0 : r.regExp) !== null && s !== void 0 ? s : yo, Sa = (n = t.uriResolver) !== null && n !== void 0 ? n : Su.default;
      return { strictSchema: (a = (o = t.strictSchema) !== null && o !== void 0 ? o : He) !== null && a !== void 0 ? a : true, strictNumbers: (c = (i = t.strictNumbers) !== null && i !== void 0 ? i : He) !== null && c !== void 0 ? c : true, strictTypes: (u = (l = t.strictTypes) !== null && l !== void 0 ? l : He) !== null && u !== void 0 ? u : "log", strictTuples: (y = (d = t.strictTuples) !== null && d !== void 0 ? d : He) !== null && y !== void 0 ? y : "log", strictRequired: (h = (m = t.strictRequired) !== null && m !== void 0 ? m : He) !== null && h !== void 0 ? h : false, code: t.code ? { ...t.code, optimize: Ks, regExp: Fs } : { optimize: Ks, regExp: Fs }, loopRequired: (f = t.loopRequired) !== null && f !== void 0 ? f : fo, loopEnum: (p = t.loopEnum) !== null && p !== void 0 ? p : fo, meta: (g = t.meta) !== null && g !== void 0 ? g : true, messages: (k = t.messages) !== null && k !== void 0 ? k : true, inlineRefs: (N = t.inlineRefs) !== null && N !== void 0 ? N : true, schemaId: (C = t.schemaId) !== null && C !== void 0 ? C : "$id", addUsedSchema: (w = t.addUsedSchema) !== null && w !== void 0 ? w : true, validateSchema: (se = t.validateSchema) !== null && se !== void 0 ? se : true, validateFormats: (ce = t.validateFormats) !== null && ce !== void 0 ? ce : true, unicodeRegExp: (tr = t.unicodeRegExp) !== null && tr !== void 0 ? tr : true, int32range: (rr = t.int32range) !== null && rr !== void 0 ? rr : true, uriResolver: Sa };
    }
    var lt = class {
      constructor(e = {}) {
        this.schemas = {}, this.refs = {}, this.formats = {}, this._compilations = /* @__PURE__ */ new Set(), this._loading = {}, this._cache = /* @__PURE__ */ new Map(), e = this.opts = { ...e, ...Ou(e) };
        let { es5: r, lines: s } = this.opts.code;
        this.scope = new Pu.ValueScope({ scope: {}, prefixes: qu, es5: r, lines: s }), this.logger = Au(e.logger);
        let n = e.validateFormats;
        e.validateFormats = false, this.RULES = (0, Eu.getRules)(), ho.call(this, ku, e, "NOT SUPPORTED"), ho.call(this, ju, e, "DEPRECATED", "warn"), this._metaOpts = Cu.call(this), e.formats && Ru.call(this), this._addVocabularies(), this._addDefaultMetaSchema(), e.keywords && Tu.call(this, e.keywords), typeof e.meta == "object" && this.addMetaSchema(e.meta), Iu.call(this), e.validateFormats = n;
      }
      _addVocabularies() {
        this.addKeyword("$async");
      }
      _addDefaultMetaSchema() {
        let { $data: e, meta: r, schemaId: s } = this.opts, n = lo;
        s === "id" && (n = { ...lo }, n.id = n.$id, delete n.$id), r && e && this.addMetaSchema(n, n[s], false);
      }
      defaultMeta() {
        let { meta: e, schemaId: r } = this.opts;
        return this.opts.defaultMeta = typeof e == "object" ? e[r] || e : void 0;
      }
      validate(e, r) {
        let s;
        if (typeof e == "string") {
          if (s = this.getSchema(e), !s) throw new Error(`no schema with key or ref "${e}"`);
        } else s = this.compile(e);
        let n = s(r);
        return "$async" in s || (this.errors = s.errors), n;
      }
      compile(e, r) {
        let s = this._addSchema(e, r);
        return s.validate || this._compileSchemaEnv(s);
      }
      compileAsync(e, r) {
        if (typeof this.opts.loadSchema != "function") throw new Error("options.loadSchema should be a function");
        let { loadSchema: s } = this.opts;
        return n.call(this, e, r);
        async function n(u, d) {
          await o.call(this, u.$schema);
          let y = this._addSchema(u, d);
          return y.validate || a.call(this, y);
        }
        async function o(u) {
          u && !this.getSchema(u) && await n.call(this, { $ref: u }, true);
        }
        async function a(u) {
          try {
            return this._compileSchemaEnv(u);
          } catch (d) {
            if (!(d instanceof mo.default)) throw d;
            return i.call(this, d), await c.call(this, d.missingSchema), a.call(this, u);
          }
        }
        function i({ missingSchema: u, missingRef: d }) {
          if (this.refs[u]) throw new Error(`AnySchema ${u} is loaded but ${d} cannot be resolved`);
        }
        async function c(u) {
          let d = await l.call(this, u);
          this.refs[u] || await o.call(this, d.$schema), this.refs[u] || this.addSchema(d, u, r);
        }
        async function l(u) {
          let d = this._loading[u];
          if (d) return d;
          try {
            return await (this._loading[u] = s(u));
          } finally {
            delete this._loading[u];
          }
        }
      }
      addSchema(e, r, s, n = this.opts.validateSchema) {
        if (Array.isArray(e)) {
          for (let a of e) this.addSchema(a, void 0, s, n);
          return this;
        }
        let o;
        if (typeof e == "object") {
          let { schemaId: a } = this.opts;
          if (o = e[a], o !== void 0 && typeof o != "string") throw new Error(`schema ${a} must be string`);
        }
        return r = (0, ut.normalizeId)(r || o), this._checkUnique(r), this.schemas[r] = this._addSchema(e, s, r, n, true), this;
      }
      addMetaSchema(e, r, s = this.opts.validateSchema) {
        return this.addSchema(e, r, true, s), this;
      }
      validateSchema(e, r) {
        if (typeof e == "boolean") return true;
        let s;
        if (s = e.$schema, s !== void 0 && typeof s != "string") throw new Error("$schema must be a string");
        if (s = s || this.opts.defaultMeta || this.defaultMeta(), !s) return this.logger.warn("meta-schema not available"), this.errors = null, true;
        let n = this.validate(s, e);
        if (!n && r) {
          let o = "schema is invalid: " + this.errorsText();
          if (this.opts.validateSchema === "log") this.logger.error(o);
          else throw new Error(o);
        }
        return n;
      }
      getSchema(e) {
        let r;
        for (; typeof (r = po.call(this, e)) == "string"; ) e = r;
        if (r === void 0) {
          let { schemaId: s } = this.opts, n = new ct.SchemaEnv({ schema: {}, schemaId: s });
          if (r = ct.resolveSchema.call(this, n, e), !r) return;
          this.refs[e] = r;
        }
        return r.validate || this._compileSchemaEnv(r);
      }
      removeSchema(e) {
        if (e instanceof RegExp) return this._removeAllSchemas(this.schemas, e), this._removeAllSchemas(this.refs, e), this;
        switch (typeof e) {
          case "undefined":
            return this._removeAllSchemas(this.schemas), this._removeAllSchemas(this.refs), this._cache.clear(), this;
          case "string": {
            let r = po.call(this, e);
            return typeof r == "object" && this._cache.delete(r.schema), delete this.schemas[e], delete this.refs[e], this;
          }
          case "object": {
            let r = e;
            this._cache.delete(r);
            let s = e[this.opts.schemaId];
            return s && (s = (0, ut.normalizeId)(s), delete this.schemas[s], delete this.refs[s]), this;
          }
          default:
            throw new Error("ajv.removeSchema: invalid parameter");
        }
      }
      addVocabulary(e) {
        for (let r of e) this.addKeyword(r);
        return this;
      }
      addKeyword(e, r) {
        let s;
        if (typeof e == "string") s = e, typeof r == "object" && (this.logger.warn("these parameters are deprecated, see docs for addKeyword"), r.keyword = s);
        else if (typeof e == "object" && r === void 0) {
          if (r = e, s = r.keyword, Array.isArray(s) && !s.length) throw new Error("addKeywords: keyword must be string or non-empty array");
        } else throw new Error("invalid addKeywords parameters");
        if (Vu.call(this, s, r), !r) return (0, Br.eachItem)(s, (o) => Xr.call(this, o)), this;
        Uu.call(this, r);
        let n = { ...r, type: (0, Vt.getJSONTypes)(r.type), schemaType: (0, Vt.getJSONTypes)(r.schemaType) };
        return (0, Br.eachItem)(s, n.type.length === 0 ? (o) => Xr.call(this, o, n) : (o) => n.type.forEach((a) => Xr.call(this, o, n, a))), this;
      }
      getKeyword(e) {
        let r = this.RULES.all[e];
        return typeof r == "object" ? r.definition : !!r;
      }
      removeKeyword(e) {
        let { RULES: r } = this;
        delete r.keywords[e], delete r.all[e];
        for (let s of r.rules) {
          let n = s.rules.findIndex((o) => o.keyword === e);
          n >= 0 && s.rules.splice(n, 1);
        }
        return this;
      }
      addFormat(e, r) {
        return typeof r == "string" && (r = new RegExp(r)), this.formats[e] = r, this;
      }
      errorsText(e = this.errors, { separator: r = ", ", dataVar: s = "data" } = {}) {
        return !e || e.length === 0 ? "No errors" : e.map((n) => `${s}${n.instancePath} ${n.message}`).reduce((n, o) => n + r + o);
      }
      $dataMetaSchema(e, r) {
        let s = this.RULES.all;
        e = JSON.parse(JSON.stringify(e));
        for (let n of r) {
          let o = n.split("/").slice(1), a = e;
          for (let i of o) a = a[i];
          for (let i in s) {
            let c = s[i];
            if (typeof c != "object") continue;
            let { $data: l } = c.definition, u = a[i];
            l && u && (a[i] = _o(u));
          }
        }
        return e;
      }
      _removeAllSchemas(e, r) {
        for (let s in e) {
          let n = e[s];
          (!r || r.test(s)) && (typeof n == "string" ? delete e[s] : n && !n.meta && (this._cache.delete(n.schema), delete e[s]));
        }
      }
      _addSchema(e, r, s, n = this.opts.validateSchema, o = this.opts.addUsedSchema) {
        let a, { schemaId: i } = this.opts;
        if (typeof e == "object") a = e[i];
        else {
          if (this.opts.jtd) throw new Error("schema must be object");
          if (typeof e != "boolean") throw new Error("schema must be object or boolean");
        }
        let c = this._cache.get(e);
        if (c !== void 0) return c;
        s = (0, ut.normalizeId)(a || s);
        let l = ut.getSchemaRefs.call(this, e, s);
        return c = new ct.SchemaEnv({ schema: e, schemaId: i, meta: r, baseId: s, localRefs: l }), this._cache.set(c.schema, c), o && !s.startsWith("#") && (s && this._checkUnique(s), this.refs[s] = c), n && this.validateSchema(e, true), c;
      }
      _checkUnique(e) {
        if (this.schemas[e] || this.refs[e]) throw new Error(`schema with key or id "${e}" already exists`);
      }
      _compileSchemaEnv(e) {
        if (e.meta ? this._compileMetaSchema(e) : ct.compileSchema.call(this, e), !e.validate) throw new Error("ajv implementation error");
        return e.validate;
      }
      _compileMetaSchema(e) {
        let r = this.opts;
        this.opts = this._metaOpts;
        try {
          ct.compileSchema.call(this, e);
        } finally {
          this.opts = r;
        }
      }
    };
    lt.ValidationError = bu.default;
    lt.MissingRefError = mo.default;
    V.default = lt;
    function ho(t, e, r, s = "error") {
      for (let n in t) {
        let o = n;
        o in e && this.logger[s](`${r}: option ${n}. ${t[o]}`);
      }
    }
    function po(t) {
      return t = (0, ut.normalizeId)(t), this.schemas[t] || this.refs[t];
    }
    function Iu() {
      let t = this.opts.schemas;
      if (t) if (Array.isArray(t)) this.addSchema(t);
      else for (let e in t) this.addSchema(t[e], e);
    }
    function Ru() {
      for (let t in this.opts.formats) {
        let e = this.opts.formats[t];
        e && this.addFormat(t, e);
      }
    }
    function Tu(t) {
      if (Array.isArray(t)) {
        this.addVocabulary(t);
        return;
      }
      this.logger.warn("keywords option as map is deprecated, pass array");
      for (let e in t) {
        let r = t[e];
        r.keyword || (r.keyword = e), this.addKeyword(r);
      }
    }
    function Cu() {
      let t = { ...this.opts };
      for (let e of Nu) delete t[e];
      return t;
    }
    var Mu = { log() {
    }, warn() {
    }, error() {
    } };
    function Au(t) {
      if (t === false) return Mu;
      if (t === void 0) return console;
      if (t.log && t.warn && t.error) return t;
      throw new Error("logger must implement log, warn and error methods");
    }
    var Du = /^[a-z_$][a-z0-9_$:-]*$/i;
    function Vu(t, e) {
      let { RULES: r } = this;
      if ((0, Br.eachItem)(t, (s) => {
        if (r.keywords[s]) throw new Error(`Keyword ${s} is already defined`);
        if (!Du.test(s)) throw new Error(`Keyword ${s} has invalid name`);
      }), !!e && e.$data && !("code" in e || "validate" in e)) throw new Error('$data keyword must have "code" or "validate" function');
    }
    function Xr(t, e, r) {
      var s;
      let n = e?.post;
      if (r && n) throw new Error('keyword with "post" flag cannot have "type"');
      let { RULES: o } = this, a = n ? o.post : o.rules.find(({ type: c }) => c === r);
      if (a || (a = { type: r, rules: [] }, o.rules.push(a)), o.keywords[t] = true, !e) return;
      let i = { keyword: t, definition: { ...e, type: (0, Vt.getJSONTypes)(e.type), schemaType: (0, Vt.getJSONTypes)(e.schemaType) } };
      e.before ? zu.call(this, a, i, e.before) : a.rules.push(i), o.all[t] = i, (s = e.implements) === null || s === void 0 || s.forEach((c) => this.addKeyword(c));
    }
    function zu(t, e, r) {
      let s = t.rules.findIndex((n) => n.keyword === r);
      s >= 0 ? t.rules.splice(s, 0, e) : (t.rules.push(e), this.logger.warn(`rule ${r} is not defined`));
    }
    function Uu(t) {
      let { metaSchema: e } = t;
      e !== void 0 && (t.$data && this.opts.$data && (e = _o(e)), t.validateSchema = this.compile(e, true));
    }
    var Ku = { $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#" };
    function _o(t) {
      return { anyOf: [t, Ku] };
    }
  });
  var $o = _((Yr) => {
    "use strict";
    Object.defineProperty(Yr, "__esModule", { value: true });
    var Fu = { keyword: "id", code() {
      throw new Error('NOT SUPPORTED: keyword "id", use "$id" for schema ID');
    } };
    Yr.default = Fu;
  });
  var Eo = _((ke) => {
    "use strict";
    Object.defineProperty(ke, "__esModule", { value: true });
    ke.callRef = ke.getValidate = void 0;
    var Lu = at(), vo = X(), W = P(), Ue = de(), wo = Ct(), zt = I(), xu = { keyword: "$ref", schemaType: "string", code(t) {
      let { gen: e, schema: r, it: s } = t, { baseId: n, schemaEnv: o, validateName: a, opts: i, self: c } = s, { root: l } = o;
      if ((r === "#" || r === "#/") && n === l.baseId) return d();
      let u = wo.resolveRef.call(c, l, n, r);
      if (u === void 0) throw new Lu.default(s.opts.uriResolver, n, r);
      if (u instanceof wo.SchemaEnv) return y(u);
      return m(u);
      function d() {
        if (o === l) return Ut(t, a, o, o.$async);
        let h = e.scopeValue("root", { ref: l });
        return Ut(t, (0, W._)`${h}.validate`, l, l.$async);
      }
      function y(h) {
        let f = bo(t, h);
        Ut(t, f, h, h.$async);
      }
      function m(h) {
        let f = e.scopeValue("schema", i.code.source === true ? { ref: h, code: (0, W.stringify)(h) } : { ref: h }), p = e.name("valid"), g = t.subschema({ schema: h, dataTypes: [], schemaPath: W.nil, topSchemaRef: f, errSchemaPath: r }, p);
        t.mergeEvaluated(g), t.ok(p);
      }
    } };
    function bo(t, e) {
      let { gen: r } = t;
      return e.validate ? r.scopeValue("validate", { ref: e.validate }) : (0, W._)`${r.scopeValue("wrapper", { ref: e })}.validate`;
    }
    ke.getValidate = bo;
    function Ut(t, e, r, s) {
      let { gen: n, it: o } = t, { allErrors: a, schemaEnv: i, opts: c } = o, l = c.passContext ? Ue.default.this : W.nil;
      s ? u() : d();
      function u() {
        if (!i.$async) throw new Error("async schema referenced by sync schema");
        let h = n.let("valid");
        n.try(() => {
          n.code((0, W._)`await ${(0, vo.callValidateCode)(t, e, l)}`), m(e), a || n.assign(h, true);
        }, (f) => {
          n.if((0, W._)`!(${f} instanceof ${o.ValidationError})`, () => n.throw(f)), y(f), a || n.assign(h, false);
        }), t.ok(h);
      }
      function d() {
        t.result((0, vo.callValidateCode)(t, e, l), () => m(e), () => y(e));
      }
      function y(h) {
        let f = (0, W._)`${h}.errors`;
        n.assign(Ue.default.vErrors, (0, W._)`${Ue.default.vErrors} === null ? ${f} : ${Ue.default.vErrors}.concat(${f})`), n.assign(Ue.default.errors, (0, W._)`${Ue.default.vErrors}.length`);
      }
      function m(h) {
        var f;
        if (!o.opts.unevaluated) return;
        let p = (f = r?.validate) === null || f === void 0 ? void 0 : f.evaluated;
        if (o.props !== true) if (p && !p.dynamicProps) p.props !== void 0 && (o.props = zt.mergeEvaluated.props(n, p.props, o.props));
        else {
          let g = n.var("props", (0, W._)`${h}.evaluated.props`);
          o.props = zt.mergeEvaluated.props(n, g, o.props, W.Name);
        }
        if (o.items !== true) if (p && !p.dynamicItems) p.items !== void 0 && (o.items = zt.mergeEvaluated.items(n, p.items, o.items));
        else {
          let g = n.var("items", (0, W._)`${h}.evaluated.items`);
          o.items = zt.mergeEvaluated.items(n, g, o.items, W.Name);
        }
      }
    }
    ke.callRef = Ut;
    ke.default = xu;
  });
  var Po = _((Zr) => {
    "use strict";
    Object.defineProperty(Zr, "__esModule", { value: true });
    var Hu = $o(), Gu = Eo(), Ju = ["$schema", "$id", "$defs", "$vocabulary", { keyword: "$comment" }, "definitions", Hu.default, Gu.default];
    Zr.default = Ju;
  });
  var So = _((es) => {
    "use strict";
    Object.defineProperty(es, "__esModule", { value: true });
    var Kt = P(), ve = Kt.operators, Ft = { maximum: { okStr: "<=", ok: ve.LTE, fail: ve.GT }, minimum: { okStr: ">=", ok: ve.GTE, fail: ve.LT }, exclusiveMaximum: { okStr: "<", ok: ve.LT, fail: ve.GTE }, exclusiveMinimum: { okStr: ">", ok: ve.GT, fail: ve.LTE } }, Wu = { message: ({ keyword: t, schemaCode: e }) => (0, Kt.str)`must be ${Ft[t].okStr} ${e}`, params: ({ keyword: t, schemaCode: e }) => (0, Kt._)`{comparison: ${Ft[t].okStr}, limit: ${e}}` }, Qu = { keyword: Object.keys(Ft), type: "number", schemaType: "number", $data: true, error: Wu, code(t) {
      let { keyword: e, data: r, schemaCode: s } = t;
      t.fail$data((0, Kt._)`${r} ${Ft[e].fail} ${s} || isNaN(${r})`);
    } };
    es.default = Qu;
  });
  var No = _((ts) => {
    "use strict";
    Object.defineProperty(ts, "__esModule", { value: true });
    var dt = P(), Xu = { message: ({ schemaCode: t }) => (0, dt.str)`must be multiple of ${t}`, params: ({ schemaCode: t }) => (0, dt._)`{multipleOf: ${t}}` }, Bu = { keyword: "multipleOf", type: "number", schemaType: "number", $data: true, error: Xu, code(t) {
      let { gen: e, data: r, schemaCode: s, it: n } = t, o = n.opts.multipleOfPrecision, a = e.let("res"), i = o ? (0, dt._)`Math.abs(Math.round(${a}) - ${a}) > 1e-${o}` : (0, dt._)`${a} !== parseInt(${a})`;
      t.fail$data((0, dt._)`(${s} === 0 || (${a} = ${r}/${s}, ${i}))`);
    } };
    ts.default = Bu;
  });
  var ko = _((rs) => {
    "use strict";
    Object.defineProperty(rs, "__esModule", { value: true });
    function qo(t) {
      let e = t.length, r = 0, s = 0, n;
      for (; s < e; ) r++, n = t.charCodeAt(s++), n >= 55296 && n <= 56319 && s < e && (n = t.charCodeAt(s), (n & 64512) === 56320 && s++);
      return r;
    }
    rs.default = qo;
    qo.code = 'require("ajv/dist/runtime/ucs2length").default';
  });
  var jo = _((ss) => {
    "use strict";
    Object.defineProperty(ss, "__esModule", { value: true });
    var je = P(), Yu = I(), Zu = ko(), el = { message({ keyword: t, schemaCode: e }) {
      let r = t === "maxLength" ? "more" : "fewer";
      return (0, je.str)`must NOT have ${r} than ${e} characters`;
    }, params: ({ schemaCode: t }) => (0, je._)`{limit: ${t}}` }, tl = { keyword: ["maxLength", "minLength"], type: "string", schemaType: "number", $data: true, error: el, code(t) {
      let { keyword: e, data: r, schemaCode: s, it: n } = t, o = e === "maxLength" ? je.operators.GT : je.operators.LT, a = n.opts.unicode === false ? (0, je._)`${r}.length` : (0, je._)`${(0, Yu.useFunc)(t.gen, Zu.default)}(${r})`;
      t.fail$data((0, je._)`${a} ${o} ${s}`);
    } };
    ss.default = tl;
  });
  var Oo = _((ns) => {
    "use strict";
    Object.defineProperty(ns, "__esModule", { value: true });
    var rl = X(), Lt = P(), sl = { message: ({ schemaCode: t }) => (0, Lt.str)`must match pattern "${t}"`, params: ({ schemaCode: t }) => (0, Lt._)`{pattern: ${t}}` }, nl = { keyword: "pattern", type: "string", schemaType: "string", $data: true, error: sl, code(t) {
      let { data: e, $data: r, schema: s, schemaCode: n, it: o } = t, a = o.opts.unicodeRegExp ? "u" : "", i = r ? (0, Lt._)`(new RegExp(${n}, ${a}))` : (0, rl.usePattern)(t, s);
      t.fail$data((0, Lt._)`!${i}.test(${e})`);
    } };
    ns.default = nl;
  });
  var Io = _((os) => {
    "use strict";
    Object.defineProperty(os, "__esModule", { value: true });
    var ft = P(), ol = { message({ keyword: t, schemaCode: e }) {
      let r = t === "maxProperties" ? "more" : "fewer";
      return (0, ft.str)`must NOT have ${r} than ${e} properties`;
    }, params: ({ schemaCode: t }) => (0, ft._)`{limit: ${t}}` }, al = { keyword: ["maxProperties", "minProperties"], type: "object", schemaType: "number", $data: true, error: ol, code(t) {
      let { keyword: e, data: r, schemaCode: s } = t, n = e === "maxProperties" ? ft.operators.GT : ft.operators.LT;
      t.fail$data((0, ft._)`Object.keys(${r}).length ${n} ${s}`);
    } };
    os.default = al;
  });
  var Ro = _((as) => {
    "use strict";
    Object.defineProperty(as, "__esModule", { value: true });
    var ht = X(), pt = P(), il = I(), cl = { message: ({ params: { missingProperty: t } }) => (0, pt.str)`must have required property '${t}'`, params: ({ params: { missingProperty: t } }) => (0, pt._)`{missingProperty: ${t}}` }, ul = { keyword: "required", type: "object", schemaType: "array", $data: true, error: cl, code(t) {
      let { gen: e, schema: r, schemaCode: s, data: n, $data: o, it: a } = t, { opts: i } = a;
      if (!o && r.length === 0) return;
      let c = r.length >= i.loopRequired;
      if (a.allErrors ? l() : u(), i.strictRequired) {
        let m = t.parentSchema.properties, { definedProperties: h } = t.it;
        for (let f of r) if (m?.[f] === void 0 && !h.has(f)) {
          let p = a.schemaEnv.baseId + a.errSchemaPath, g = `required property "${f}" is not defined at "${p}" (strictRequired)`;
          (0, il.checkStrictMode)(a, g, a.opts.strictRequired);
        }
      }
      function l() {
        if (c || o) t.block$data(pt.nil, d);
        else for (let m of r) (0, ht.checkReportMissingProp)(t, m);
      }
      function u() {
        let m = e.let("missing");
        if (c || o) {
          let h = e.let("valid", true);
          t.block$data(h, () => y(m, h)), t.ok(h);
        } else e.if((0, ht.checkMissingProp)(t, r, m)), (0, ht.reportMissingProp)(t, m), e.else();
      }
      function d() {
        e.forOf("prop", s, (m) => {
          t.setParams({ missingProperty: m }), e.if((0, ht.noPropertyInData)(e, n, m, i.ownProperties), () => t.error());
        });
      }
      function y(m, h) {
        t.setParams({ missingProperty: m }), e.forOf(m, s, () => {
          e.assign(h, (0, ht.propertyInData)(e, n, m, i.ownProperties)), e.if((0, pt.not)(h), () => {
            t.error(), e.break();
          });
        }, pt.nil);
      }
    } };
    as.default = ul;
  });
  var To = _((is) => {
    "use strict";
    Object.defineProperty(is, "__esModule", { value: true });
    var mt = P(), ll = { message({ keyword: t, schemaCode: e }) {
      let r = t === "maxItems" ? "more" : "fewer";
      return (0, mt.str)`must NOT have ${r} than ${e} items`;
    }, params: ({ schemaCode: t }) => (0, mt._)`{limit: ${t}}` }, dl = { keyword: ["maxItems", "minItems"], type: "array", schemaType: "number", $data: true, error: ll, code(t) {
      let { keyword: e, data: r, schemaCode: s } = t, n = e === "maxItems" ? mt.operators.GT : mt.operators.LT;
      t.fail$data((0, mt._)`${r}.length ${n} ${s}`);
    } };
    is.default = dl;
  });
  var xt = _((cs) => {
    "use strict";
    Object.defineProperty(cs, "__esModule", { value: true });
    var Co = Tr();
    Co.code = 'require("ajv/dist/runtime/equal").default';
    cs.default = Co;
  });
  var Mo = _((ls) => {
    "use strict";
    Object.defineProperty(ls, "__esModule", { value: true });
    var us = tt(), z = P(), fl = I(), hl = xt(), pl = { message: ({ params: { i: t, j: e } }) => (0, z.str)`must NOT have duplicate items (items ## ${e} and ${t} are identical)`, params: ({ params: { i: t, j: e } }) => (0, z._)`{i: ${t}, j: ${e}}` }, ml = { keyword: "uniqueItems", type: "array", schemaType: "boolean", $data: true, error: pl, code(t) {
      let { gen: e, data: r, $data: s, schema: n, parentSchema: o, schemaCode: a, it: i } = t;
      if (!s && !n) return;
      let c = e.let("valid"), l = o.items ? (0, us.getSchemaTypes)(o.items) : [];
      t.block$data(c, u, (0, z._)`${a} === false`), t.ok(c);
      function u() {
        let h = e.let("i", (0, z._)`${r}.length`), f = e.let("j");
        t.setParams({ i: h, j: f }), e.assign(c, true), e.if((0, z._)`${h} > 1`, () => (d() ? y : m)(h, f));
      }
      function d() {
        return l.length > 0 && !l.some((h) => h === "object" || h === "array");
      }
      function y(h, f) {
        let p = e.name("item"), g = (0, us.checkDataTypes)(l, p, i.opts.strictNumbers, us.DataType.Wrong), k = e.const("indices", (0, z._)`{}`);
        e.for((0, z._)`;${h}--;`, () => {
          e.let(p, (0, z._)`${r}[${h}]`), e.if(g, (0, z._)`continue`), l.length > 1 && e.if((0, z._)`typeof ${p} == "string"`, (0, z._)`${p} += "_"`), e.if((0, z._)`typeof ${k}[${p}] == "number"`, () => {
            e.assign(f, (0, z._)`${k}[${p}]`), t.error(), e.assign(c, false).break();
          }).code((0, z._)`${k}[${p}] = ${h}`);
        });
      }
      function m(h, f) {
        let p = (0, fl.useFunc)(e, hl.default), g = e.name("outer");
        e.label(g).for((0, z._)`;${h}--;`, () => e.for((0, z._)`${f} = ${h}; ${f}--;`, () => e.if((0, z._)`${p}(${r}[${h}], ${r}[${f}])`, () => {
          t.error(), e.assign(c, false).break(g);
        })));
      }
    } };
    ls.default = ml;
  });
  var Ao = _((fs) => {
    "use strict";
    Object.defineProperty(fs, "__esModule", { value: true });
    var ds = P(), yl = I(), _l = xt(), gl = { message: "must be equal to constant", params: ({ schemaCode: t }) => (0, ds._)`{allowedValue: ${t}}` }, $l = { keyword: "const", $data: true, error: gl, code(t) {
      let { gen: e, data: r, $data: s, schemaCode: n, schema: o } = t;
      s || o && typeof o == "object" ? t.fail$data((0, ds._)`!${(0, yl.useFunc)(e, _l.default)}(${r}, ${n})`) : t.fail((0, ds._)`${o} !== ${r}`);
    } };
    fs.default = $l;
  });
  var Do = _((hs) => {
    "use strict";
    Object.defineProperty(hs, "__esModule", { value: true });
    var yt = P(), vl = I(), wl = xt(), bl = { message: "must be equal to one of the allowed values", params: ({ schemaCode: t }) => (0, yt._)`{allowedValues: ${t}}` }, El = { keyword: "enum", schemaType: "array", $data: true, error: bl, code(t) {
      let { gen: e, data: r, $data: s, schema: n, schemaCode: o, it: a } = t;
      if (!s && n.length === 0) throw new Error("enum must have non-empty array");
      let i = n.length >= a.opts.loopEnum, c, l = () => c ?? (c = (0, vl.useFunc)(e, wl.default)), u;
      if (i || s) u = e.let("valid"), t.block$data(u, d);
      else {
        if (!Array.isArray(n)) throw new Error("ajv implementation error");
        let m = e.const("vSchema", o);
        u = (0, yt.or)(...n.map((h, f) => y(m, f)));
      }
      t.pass(u);
      function d() {
        e.assign(u, false), e.forOf("v", o, (m) => e.if((0, yt._)`${l()}(${r}, ${m})`, () => e.assign(u, true).break()));
      }
      function y(m, h) {
        let f = n[h];
        return typeof f == "object" && f !== null ? (0, yt._)`${l()}(${r}, ${m}[${h}])` : (0, yt._)`${r} === ${f}`;
      }
    } };
    hs.default = El;
  });
  var Vo = _((ps) => {
    "use strict";
    Object.defineProperty(ps, "__esModule", { value: true });
    var Pl = So(), Sl = No(), Nl = jo(), ql = Oo(), kl = Io(), jl = Ro(), Ol = To(), Il = Mo(), Rl = Ao(), Tl = Do(), Cl = [Pl.default, Sl.default, Nl.default, ql.default, kl.default, jl.default, Ol.default, Il.default, { keyword: "type", schemaType: ["string", "array"] }, { keyword: "nullable", schemaType: "boolean" }, Rl.default, Tl.default];
    ps.default = Cl;
  });
  var ys = _((_t) => {
    "use strict";
    Object.defineProperty(_t, "__esModule", { value: true });
    _t.validateAdditionalItems = void 0;
    var Oe = P(), ms = I(), Ml = { message: ({ params: { len: t } }) => (0, Oe.str)`must NOT have more than ${t} items`, params: ({ params: { len: t } }) => (0, Oe._)`{limit: ${t}}` }, Al = { keyword: "additionalItems", type: "array", schemaType: ["boolean", "object"], before: "uniqueItems", error: Ml, code(t) {
      let { parentSchema: e, it: r } = t, { items: s } = e;
      if (!Array.isArray(s)) {
        (0, ms.checkStrictMode)(r, '"additionalItems" is ignored when "items" is not an array of schemas');
        return;
      }
      zo(t, s);
    } };
    function zo(t, e) {
      let { gen: r, schema: s, data: n, keyword: o, it: a } = t;
      a.items = true;
      let i = r.const("len", (0, Oe._)`${n}.length`);
      if (s === false) t.setParams({ len: e.length }), t.pass((0, Oe._)`${i} <= ${e.length}`);
      else if (typeof s == "object" && !(0, ms.alwaysValidSchema)(a, s)) {
        let l = r.var("valid", (0, Oe._)`${i} <= ${e.length}`);
        r.if((0, Oe.not)(l), () => c(l)), t.ok(l);
      }
      function c(l) {
        r.forRange("i", e.length, i, (u) => {
          t.subschema({ keyword: o, dataProp: u, dataPropType: ms.Type.Num }, l), a.allErrors || r.if((0, Oe.not)(l), () => r.break());
        });
      }
    }
    _t.validateAdditionalItems = zo;
    _t.default = Al;
  });
  var _s = _((gt) => {
    "use strict";
    Object.defineProperty(gt, "__esModule", { value: true });
    gt.validateTuple = void 0;
    var Uo = P(), Ht = I(), Dl = X(), Vl = { keyword: "items", type: "array", schemaType: ["object", "array", "boolean"], before: "uniqueItems", code(t) {
      let { schema: e, it: r } = t;
      if (Array.isArray(e)) return Ko(t, "additionalItems", e);
      r.items = true, !(0, Ht.alwaysValidSchema)(r, e) && t.ok((0, Dl.validateArray)(t));
    } };
    function Ko(t, e, r = t.schema) {
      let { gen: s, parentSchema: n, data: o, keyword: a, it: i } = t;
      u(n), i.opts.unevaluated && r.length && i.items !== true && (i.items = Ht.mergeEvaluated.items(s, r.length, i.items));
      let c = s.name("valid"), l = s.const("len", (0, Uo._)`${o}.length`);
      r.forEach((d, y) => {
        (0, Ht.alwaysValidSchema)(i, d) || (s.if((0, Uo._)`${l} > ${y}`, () => t.subschema({ keyword: a, schemaProp: y, dataProp: y }, c)), t.ok(c));
      });
      function u(d) {
        let { opts: y, errSchemaPath: m } = i, h = r.length, f = h === d.minItems && (h === d.maxItems || d[e] === false);
        if (y.strictTuples && !f) {
          let p = `"${a}" is ${h}-tuple, but minItems or maxItems/${e} are not specified or different at path "${m}"`;
          (0, Ht.checkStrictMode)(i, p, y.strictTuples);
        }
      }
    }
    gt.validateTuple = Ko;
    gt.default = Vl;
  });
  var Fo = _((gs) => {
    "use strict";
    Object.defineProperty(gs, "__esModule", { value: true });
    var zl = _s(), Ul = { keyword: "prefixItems", type: "array", schemaType: ["array"], before: "uniqueItems", code: (t) => (0, zl.validateTuple)(t, "items") };
    gs.default = Ul;
  });
  var xo = _(($s) => {
    "use strict";
    Object.defineProperty($s, "__esModule", { value: true });
    var Lo = P(), Kl = I(), Fl = X(), Ll = ys(), xl = { message: ({ params: { len: t } }) => (0, Lo.str)`must NOT have more than ${t} items`, params: ({ params: { len: t } }) => (0, Lo._)`{limit: ${t}}` }, Hl = { keyword: "items", type: "array", schemaType: ["object", "boolean"], before: "uniqueItems", error: xl, code(t) {
      let { schema: e, parentSchema: r, it: s } = t, { prefixItems: n } = r;
      s.items = true, !(0, Kl.alwaysValidSchema)(s, e) && (n ? (0, Ll.validateAdditionalItems)(t, n) : t.ok((0, Fl.validateArray)(t)));
    } };
    $s.default = Hl;
  });
  var Ho = _((vs) => {
    "use strict";
    Object.defineProperty(vs, "__esModule", { value: true });
    var Y = P(), Gt = I(), Gl = { message: ({ params: { min: t, max: e } }) => e === void 0 ? (0, Y.str)`must contain at least ${t} valid item(s)` : (0, Y.str)`must contain at least ${t} and no more than ${e} valid item(s)`, params: ({ params: { min: t, max: e } }) => e === void 0 ? (0, Y._)`{minContains: ${t}}` : (0, Y._)`{minContains: ${t}, maxContains: ${e}}` }, Jl = { keyword: "contains", type: "array", schemaType: ["object", "boolean"], before: "uniqueItems", trackErrors: true, error: Gl, code(t) {
      let { gen: e, schema: r, parentSchema: s, data: n, it: o } = t, a, i, { minContains: c, maxContains: l } = s;
      o.opts.next ? (a = c === void 0 ? 1 : c, i = l) : a = 1;
      let u = e.const("len", (0, Y._)`${n}.length`);
      if (t.setParams({ min: a, max: i }), i === void 0 && a === 0) {
        (0, Gt.checkStrictMode)(o, '"minContains" == 0 without "maxContains": "contains" keyword ignored');
        return;
      }
      if (i !== void 0 && a > i) {
        (0, Gt.checkStrictMode)(o, '"minContains" > "maxContains" is always invalid'), t.fail();
        return;
      }
      if ((0, Gt.alwaysValidSchema)(o, r)) {
        let f = (0, Y._)`${u} >= ${a}`;
        i !== void 0 && (f = (0, Y._)`${f} && ${u} <= ${i}`), t.pass(f);
        return;
      }
      o.items = true;
      let d = e.name("valid");
      i === void 0 && a === 1 ? m(d, () => e.if(d, () => e.break())) : a === 0 ? (e.let(d, true), i !== void 0 && e.if((0, Y._)`${n}.length > 0`, y)) : (e.let(d, false), y()), t.result(d, () => t.reset());
      function y() {
        let f = e.name("_valid"), p = e.let("count", 0);
        m(f, () => e.if(f, () => h(p)));
      }
      function m(f, p) {
        e.forRange("i", 0, u, (g) => {
          t.subschema({ keyword: "contains", dataProp: g, dataPropType: Gt.Type.Num, compositeRule: true }, f), p();
        });
      }
      function h(f) {
        e.code((0, Y._)`${f}++`), i === void 0 ? e.if((0, Y._)`${f} >= ${a}`, () => e.assign(d, true).break()) : (e.if((0, Y._)`${f} > ${i}`, () => e.assign(d, false).break()), a === 1 ? e.assign(d, true) : e.if((0, Y._)`${f} >= ${a}`, () => e.assign(d, true)));
      }
    } };
    vs.default = Jl;
  });
  var Wo = _((ie) => {
    "use strict";
    Object.defineProperty(ie, "__esModule", { value: true });
    ie.validateSchemaDeps = ie.validatePropertyDeps = ie.error = void 0;
    var ws = P(), Wl = I(), $t = X();
    ie.error = { message: ({ params: { property: t, depsCount: e, deps: r } }) => {
      let s = e === 1 ? "property" : "properties";
      return (0, ws.str)`must have ${s} ${r} when property ${t} is present`;
    }, params: ({ params: { property: t, depsCount: e, deps: r, missingProperty: s } }) => (0, ws._)`{property: ${t},
    missingProperty: ${s},
    depsCount: ${e},
    deps: ${r}}` };
    var Ql = { keyword: "dependencies", type: "object", schemaType: "object", error: ie.error, code(t) {
      let [e, r] = Xl(t);
      Go(t, e), Jo(t, r);
    } };
    function Xl({ schema: t }) {
      let e = {}, r = {};
      for (let s in t) {
        if (s === "__proto__") continue;
        let n = Array.isArray(t[s]) ? e : r;
        n[s] = t[s];
      }
      return [e, r];
    }
    function Go(t, e = t.schema) {
      let { gen: r, data: s, it: n } = t;
      if (Object.keys(e).length === 0) return;
      let o = r.let("missing");
      for (let a in e) {
        let i = e[a];
        if (i.length === 0) continue;
        let c = (0, $t.propertyInData)(r, s, a, n.opts.ownProperties);
        t.setParams({ property: a, depsCount: i.length, deps: i.join(", ") }), n.allErrors ? r.if(c, () => {
          for (let l of i) (0, $t.checkReportMissingProp)(t, l);
        }) : (r.if((0, ws._)`${c} && (${(0, $t.checkMissingProp)(t, i, o)})`), (0, $t.reportMissingProp)(t, o), r.else());
      }
    }
    ie.validatePropertyDeps = Go;
    function Jo(t, e = t.schema) {
      let { gen: r, data: s, keyword: n, it: o } = t, a = r.name("valid");
      for (let i in e) (0, Wl.alwaysValidSchema)(o, e[i]) || (r.if((0, $t.propertyInData)(r, s, i, o.opts.ownProperties), () => {
        let c = t.subschema({ keyword: n, schemaProp: i }, a);
        t.mergeValidEvaluated(c, a);
      }, () => r.var(a, true)), t.ok(a));
    }
    ie.validateSchemaDeps = Jo;
    ie.default = Ql;
  });
  var Xo = _((bs) => {
    "use strict";
    Object.defineProperty(bs, "__esModule", { value: true });
    var Qo = P(), Bl = I(), Yl = { message: "property name must be valid", params: ({ params: t }) => (0, Qo._)`{propertyName: ${t.propertyName}}` }, Zl = { keyword: "propertyNames", type: "object", schemaType: ["object", "boolean"], error: Yl, code(t) {
      let { gen: e, schema: r, data: s, it: n } = t;
      if ((0, Bl.alwaysValidSchema)(n, r)) return;
      let o = e.name("valid");
      e.forIn("key", s, (a) => {
        t.setParams({ propertyName: a }), t.subschema({ keyword: "propertyNames", data: a, dataTypes: ["string"], propertyName: a, compositeRule: true }, o), e.if((0, Qo.not)(o), () => {
          t.error(true), n.allErrors || e.break();
        });
      }), t.ok(o);
    } };
    bs.default = Zl;
  });
  var Ps = _((Es) => {
    "use strict";
    Object.defineProperty(Es, "__esModule", { value: true });
    var Jt = X(), re = P(), ed = de(), Wt = I(), td = { message: "must NOT have additional properties", params: ({ params: t }) => (0, re._)`{additionalProperty: ${t.additionalProperty}}` }, rd = { keyword: "additionalProperties", type: ["object"], schemaType: ["boolean", "object"], allowUndefined: true, trackErrors: true, error: td, code(t) {
      let { gen: e, schema: r, parentSchema: s, data: n, errsCount: o, it: a } = t;
      if (!o) throw new Error("ajv implementation error");
      let { allErrors: i, opts: c } = a;
      if (a.props = true, c.removeAdditional !== "all" && (0, Wt.alwaysValidSchema)(a, r)) return;
      let l = (0, Jt.allSchemaProperties)(s.properties), u = (0, Jt.allSchemaProperties)(s.patternProperties);
      d(), t.ok((0, re._)`${o} === ${ed.default.errors}`);
      function d() {
        e.forIn("key", n, (p) => {
          !l.length && !u.length ? h(p) : e.if(y(p), () => h(p));
        });
      }
      function y(p) {
        let g;
        if (l.length > 8) {
          let k = (0, Wt.schemaRefOrVal)(a, s.properties, "properties");
          g = (0, Jt.isOwnProperty)(e, k, p);
        } else l.length ? g = (0, re.or)(...l.map((k) => (0, re._)`${p} === ${k}`)) : g = re.nil;
        return u.length && (g = (0, re.or)(g, ...u.map((k) => (0, re._)`${(0, Jt.usePattern)(t, k)}.test(${p})`))), (0, re.not)(g);
      }
      function m(p) {
        e.code((0, re._)`delete ${n}[${p}]`);
      }
      function h(p) {
        if (c.removeAdditional === "all" || c.removeAdditional && r === false) {
          m(p);
          return;
        }
        if (r === false) {
          t.setParams({ additionalProperty: p }), t.error(), i || e.break();
          return;
        }
        if (typeof r == "object" && !(0, Wt.alwaysValidSchema)(a, r)) {
          let g = e.name("valid");
          c.removeAdditional === "failing" ? (f(p, g, false), e.if((0, re.not)(g), () => {
            t.reset(), m(p);
          })) : (f(p, g), i || e.if((0, re.not)(g), () => e.break()));
        }
      }
      function f(p, g, k) {
        let N = { keyword: "additionalProperties", dataProp: p, dataPropType: Wt.Type.Str };
        k === false && Object.assign(N, { compositeRule: true, createErrors: false, allErrors: false }), t.subschema(N, g);
      }
    } };
    Es.default = rd;
  });
  var Zo = _((Ns) => {
    "use strict";
    Object.defineProperty(Ns, "__esModule", { value: true });
    var sd = ot(), Bo = X(), Ss = I(), Yo = Ps(), nd = { keyword: "properties", type: "object", schemaType: "object", code(t) {
      let { gen: e, schema: r, parentSchema: s, data: n, it: o } = t;
      o.opts.removeAdditional === "all" && s.additionalProperties === void 0 && Yo.default.code(new sd.KeywordCxt(o, Yo.default, "additionalProperties"));
      let a = (0, Bo.allSchemaProperties)(r);
      for (let d of a) o.definedProperties.add(d);
      o.opts.unevaluated && a.length && o.props !== true && (o.props = Ss.mergeEvaluated.props(e, (0, Ss.toHash)(a), o.props));
      let i = a.filter((d) => !(0, Ss.alwaysValidSchema)(o, r[d]));
      if (i.length === 0) return;
      let c = e.name("valid");
      for (let d of i) l(d) ? u(d) : (e.if((0, Bo.propertyInData)(e, n, d, o.opts.ownProperties)), u(d), o.allErrors || e.else().var(c, true), e.endIf()), t.it.definedProperties.add(d), t.ok(c);
      function l(d) {
        return o.opts.useDefaults && !o.compositeRule && r[d].default !== void 0;
      }
      function u(d) {
        t.subschema({ keyword: "properties", schemaProp: d, dataProp: d }, c);
      }
    } };
    Ns.default = nd;
  });
  var sa = _((qs) => {
    "use strict";
    Object.defineProperty(qs, "__esModule", { value: true });
    var ea = X(), Qt = P(), ta = I(), ra = I(), od = { keyword: "patternProperties", type: "object", schemaType: "object", code(t) {
      let { gen: e, schema: r, data: s, parentSchema: n, it: o } = t, { opts: a } = o, i = (0, ea.allSchemaProperties)(r), c = i.filter((f) => (0, ta.alwaysValidSchema)(o, r[f]));
      if (i.length === 0 || c.length === i.length && (!o.opts.unevaluated || o.props === true)) return;
      let l = a.strictSchema && !a.allowMatchingProperties && n.properties, u = e.name("valid");
      o.props !== true && !(o.props instanceof Qt.Name) && (o.props = (0, ra.evaluatedPropsToName)(e, o.props));
      let { props: d } = o;
      y();
      function y() {
        for (let f of i) l && m(f), o.allErrors ? h(f) : (e.var(u, true), h(f), e.if(u));
      }
      function m(f) {
        for (let p in l) new RegExp(f).test(p) && (0, ta.checkStrictMode)(o, `property ${p} matches pattern ${f} (use allowMatchingProperties)`);
      }
      function h(f) {
        e.forIn("key", s, (p) => {
          e.if((0, Qt._)`${(0, ea.usePattern)(t, f)}.test(${p})`, () => {
            let g = c.includes(f);
            g || t.subschema({ keyword: "patternProperties", schemaProp: f, dataProp: p, dataPropType: ra.Type.Str }, u), o.opts.unevaluated && d !== true ? e.assign((0, Qt._)`${d}[${p}]`, true) : !g && !o.allErrors && e.if((0, Qt.not)(u), () => e.break());
          });
        });
      }
    } };
    qs.default = od;
  });
  var na = _((ks) => {
    "use strict";
    Object.defineProperty(ks, "__esModule", { value: true });
    var ad = I(), id = { keyword: "not", schemaType: ["object", "boolean"], trackErrors: true, code(t) {
      let { gen: e, schema: r, it: s } = t;
      if ((0, ad.alwaysValidSchema)(s, r)) {
        t.fail();
        return;
      }
      let n = e.name("valid");
      t.subschema({ keyword: "not", compositeRule: true, createErrors: false, allErrors: false }, n), t.failResult(n, () => t.reset(), () => t.error());
    }, error: { message: "must NOT be valid" } };
    ks.default = id;
  });
  var oa = _((js) => {
    "use strict";
    Object.defineProperty(js, "__esModule", { value: true });
    var cd = X(), ud = { keyword: "anyOf", schemaType: "array", trackErrors: true, code: cd.validateUnion, error: { message: "must match a schema in anyOf" } };
    js.default = ud;
  });
  var aa = _((Os) => {
    "use strict";
    Object.defineProperty(Os, "__esModule", { value: true });
    var Xt = P(), ld = I(), dd = { message: "must match exactly one schema in oneOf", params: ({ params: t }) => (0, Xt._)`{passingSchemas: ${t.passing}}` }, fd = { keyword: "oneOf", schemaType: "array", trackErrors: true, error: dd, code(t) {
      let { gen: e, schema: r, parentSchema: s, it: n } = t;
      if (!Array.isArray(r)) throw new Error("ajv implementation error");
      if (n.opts.discriminator && s.discriminator) return;
      let o = r, a = e.let("valid", false), i = e.let("passing", null), c = e.name("_valid");
      t.setParams({ passing: i }), e.block(l), t.result(a, () => t.reset(), () => t.error(true));
      function l() {
        o.forEach((u, d) => {
          let y;
          (0, ld.alwaysValidSchema)(n, u) ? e.var(c, true) : y = t.subschema({ keyword: "oneOf", schemaProp: d, compositeRule: true }, c), d > 0 && e.if((0, Xt._)`${c} && ${a}`).assign(a, false).assign(i, (0, Xt._)`[${i}, ${d}]`).else(), e.if(c, () => {
            e.assign(a, true), e.assign(i, d), y && t.mergeEvaluated(y, Xt.Name);
          });
        });
      }
    } };
    Os.default = fd;
  });
  var ia = _((Is) => {
    "use strict";
    Object.defineProperty(Is, "__esModule", { value: true });
    var hd = I(), pd = { keyword: "allOf", schemaType: "array", code(t) {
      let { gen: e, schema: r, it: s } = t;
      if (!Array.isArray(r)) throw new Error("ajv implementation error");
      let n = e.name("valid");
      r.forEach((o, a) => {
        if ((0, hd.alwaysValidSchema)(s, o)) return;
        let i = t.subschema({ keyword: "allOf", schemaProp: a }, n);
        t.ok(n), t.mergeEvaluated(i);
      });
    } };
    Is.default = pd;
  });
  var la = _((Rs) => {
    "use strict";
    Object.defineProperty(Rs, "__esModule", { value: true });
    var Bt = P(), ua = I(), md = { message: ({ params: t }) => (0, Bt.str)`must match "${t.ifClause}" schema`, params: ({ params: t }) => (0, Bt._)`{failingKeyword: ${t.ifClause}}` }, yd = { keyword: "if", schemaType: ["object", "boolean"], trackErrors: true, error: md, code(t) {
      let { gen: e, parentSchema: r, it: s } = t;
      r.then === void 0 && r.else === void 0 && (0, ua.checkStrictMode)(s, '"if" without "then" and "else" is ignored');
      let n = ca(s, "then"), o = ca(s, "else");
      if (!n && !o) return;
      let a = e.let("valid", true), i = e.name("_valid");
      if (c(), t.reset(), n && o) {
        let u = e.let("ifClause");
        t.setParams({ ifClause: u }), e.if(i, l("then", u), l("else", u));
      } else n ? e.if(i, l("then")) : e.if((0, Bt.not)(i), l("else"));
      t.pass(a, () => t.error(true));
      function c() {
        let u = t.subschema({ keyword: "if", compositeRule: true, createErrors: false, allErrors: false }, i);
        t.mergeEvaluated(u);
      }
      function l(u, d) {
        return () => {
          let y = t.subschema({ keyword: u }, i);
          e.assign(a, i), t.mergeValidEvaluated(y, a), d ? e.assign(d, (0, Bt._)`${u}`) : t.setParams({ ifClause: u });
        };
      }
    } };
    function ca(t, e) {
      let r = t.schema[e];
      return r !== void 0 && !(0, ua.alwaysValidSchema)(t, r);
    }
    Rs.default = yd;
  });
  var da = _((Ts) => {
    "use strict";
    Object.defineProperty(Ts, "__esModule", { value: true });
    var _d = I(), gd = { keyword: ["then", "else"], schemaType: ["object", "boolean"], code({ keyword: t, parentSchema: e, it: r }) {
      e.if === void 0 && (0, _d.checkStrictMode)(r, `"${t}" without "if" is ignored`);
    } };
    Ts.default = gd;
  });
  var fa = _((Cs) => {
    "use strict";
    Object.defineProperty(Cs, "__esModule", { value: true });
    var $d = ys(), vd = Fo(), wd = _s(), bd = xo(), Ed = Ho(), Pd = Wo(), Sd = Xo(), Nd = Ps(), qd = Zo(), kd = sa(), jd = na(), Od = oa(), Id = aa(), Rd = ia(), Td = la(), Cd = da();
    function Md(t = false) {
      let e = [jd.default, Od.default, Id.default, Rd.default, Td.default, Cd.default, Sd.default, Nd.default, Pd.default, qd.default, kd.default];
      return t ? e.push(vd.default, bd.default) : e.push($d.default, wd.default), e.push(Ed.default), e;
    }
    Cs.default = Md;
  });
  var ha = _((Ms) => {
    "use strict";
    Object.defineProperty(Ms, "__esModule", { value: true });
    var D = P(), Ad = { message: ({ schemaCode: t }) => (0, D.str)`must match format "${t}"`, params: ({ schemaCode: t }) => (0, D._)`{format: ${t}}` }, Dd = { keyword: "format", type: ["number", "string"], schemaType: "string", $data: true, error: Ad, code(t, e) {
      let { gen: r, data: s, $data: n, schema: o, schemaCode: a, it: i } = t, { opts: c, errSchemaPath: l, schemaEnv: u, self: d } = i;
      if (!c.validateFormats) return;
      n ? y() : m();
      function y() {
        let h = r.scopeValue("formats", { ref: d.formats, code: c.code.formats }), f = r.const("fDef", (0, D._)`${h}[${a}]`), p = r.let("fType"), g = r.let("format");
        r.if((0, D._)`typeof ${f} == "object" && !(${f} instanceof RegExp)`, () => r.assign(p, (0, D._)`${f}.type || "string"`).assign(g, (0, D._)`${f}.validate`), () => r.assign(p, (0, D._)`"string"`).assign(g, f)), t.fail$data((0, D.or)(k(), N()));
        function k() {
          return c.strictSchema === false ? D.nil : (0, D._)`${a} && !${g}`;
        }
        function N() {
          let C = u.$async ? (0, D._)`(${f}.async ? await ${g}(${s}) : ${g}(${s}))` : (0, D._)`${g}(${s})`, w = (0, D._)`(typeof ${g} == "function" ? ${C} : ${g}.test(${s}))`;
          return (0, D._)`${g} && ${g} !== true && ${p} === ${e} && !${w}`;
        }
      }
      function m() {
        let h = d.formats[o];
        if (!h) {
          k();
          return;
        }
        if (h === true) return;
        let [f, p, g] = N(h);
        f === e && t.pass(C());
        function k() {
          if (c.strictSchema === false) {
            d.logger.warn(w());
            return;
          }
          throw new Error(w());
          function w() {
            return `unknown format "${o}" ignored in schema at path "${l}"`;
          }
        }
        function N(w) {
          let se = w instanceof RegExp ? (0, D.regexpCode)(w) : c.code.formats ? (0, D._)`${c.code.formats}${(0, D.getProperty)(o)}` : void 0, ce = r.scopeValue("formats", { key: o, ref: w, code: se });
          return typeof w == "object" && !(w instanceof RegExp) ? [w.type || "string", w.validate, (0, D._)`${ce}.validate`] : ["string", w, ce];
        }
        function C() {
          if (typeof h == "object" && !(h instanceof RegExp) && h.async) {
            if (!u.$async) throw new Error("async format in sync schema");
            return (0, D._)`await ${g}(${s})`;
          }
          return typeof p == "function" ? (0, D._)`${g}(${s})` : (0, D._)`${g}.test(${s})`;
        }
      }
    } };
    Ms.default = Dd;
  });
  var pa = _((As) => {
    "use strict";
    Object.defineProperty(As, "__esModule", { value: true });
    var Vd = ha(), zd = [Vd.default];
    As.default = zd;
  });
  var ma = _((Ke) => {
    "use strict";
    Object.defineProperty(Ke, "__esModule", { value: true });
    Ke.contentVocabulary = Ke.metadataVocabulary = void 0;
    Ke.metadataVocabulary = ["title", "description", "default", "deprecated", "readOnly", "writeOnly", "examples"];
    Ke.contentVocabulary = ["contentMediaType", "contentEncoding", "contentSchema"];
  });
  var _a = _((Ds) => {
    "use strict";
    Object.defineProperty(Ds, "__esModule", { value: true });
    var Ud = Po(), Kd = Vo(), Fd = fa(), Ld = pa(), ya = ma(), xd = [Ud.default, Kd.default, (0, Fd.default)(), Ld.default, ya.metadataVocabulary, ya.contentVocabulary];
    Ds.default = xd;
  });
  var $a = _((Yt) => {
    "use strict";
    Object.defineProperty(Yt, "__esModule", { value: true });
    Yt.DiscrError = void 0;
    var ga;
    (function(t) {
      t.Tag = "tag", t.Mapping = "mapping";
    })(ga || (Yt.DiscrError = ga = {}));
  });
  var wa = _((zs) => {
    "use strict";
    Object.defineProperty(zs, "__esModule", { value: true });
    var Fe = P(), Vs = $a(), va = Ct(), Hd = at(), Gd = I(), Jd = { message: ({ params: { discrError: t, tagName: e } }) => t === Vs.DiscrError.Tag ? `tag "${e}" must be string` : `value of tag "${e}" must be in oneOf`, params: ({ params: { discrError: t, tag: e, tagName: r } }) => (0, Fe._)`{error: ${t}, tag: ${r}, tagValue: ${e}}` }, Wd = { keyword: "discriminator", type: "object", schemaType: "object", error: Jd, code(t) {
      let { gen: e, data: r, schema: s, parentSchema: n, it: o } = t, { oneOf: a } = n;
      if (!o.opts.discriminator) throw new Error("discriminator: requires discriminator option");
      let i = s.propertyName;
      if (typeof i != "string") throw new Error("discriminator: requires propertyName");
      if (s.mapping) throw new Error("discriminator: mapping is not supported");
      if (!a) throw new Error("discriminator: requires oneOf keyword");
      let c = e.let("valid", false), l = e.const("tag", (0, Fe._)`${r}${(0, Fe.getProperty)(i)}`);
      e.if((0, Fe._)`typeof ${l} == "string"`, () => u(), () => t.error(false, { discrError: Vs.DiscrError.Tag, tag: l, tagName: i })), t.ok(c);
      function u() {
        let m = y();
        e.if(false);
        for (let h in m) e.elseIf((0, Fe._)`${l} === ${h}`), e.assign(c, d(m[h]));
        e.else(), t.error(false, { discrError: Vs.DiscrError.Mapping, tag: l, tagName: i }), e.endIf();
      }
      function d(m) {
        let h = e.name("valid"), f = t.subschema({ keyword: "oneOf", schemaProp: m }, h);
        return t.mergeEvaluated(f, Fe.Name), h;
      }
      function y() {
        var m;
        let h = {}, f = g(n), p = true;
        for (let C = 0; C < a.length; C++) {
          let w = a[C];
          if (w?.$ref && !(0, Gd.schemaHasRulesButRef)(w, o.self.RULES)) {
            let ce = w.$ref;
            if (w = va.resolveRef.call(o.self, o.schemaEnv.root, o.baseId, ce), w instanceof va.SchemaEnv && (w = w.schema), w === void 0) throw new Hd.default(o.opts.uriResolver, o.baseId, ce);
          }
          let se = (m = w?.properties) === null || m === void 0 ? void 0 : m[i];
          if (typeof se != "object") throw new Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${i}"`);
          p = p && (f || g(w)), k(se, C);
        }
        if (!p) throw new Error(`discriminator: "${i}" must be required`);
        return h;
        function g({ required: C }) {
          return Array.isArray(C) && C.includes(i);
        }
        function k(C, w) {
          if (C.const) N(C.const, w);
          else if (C.enum) for (let se of C.enum) N(se, w);
          else throw new Error(`discriminator: "properties/${i}" must have "const" or "enum"`);
        }
        function N(C, w) {
          if (typeof C != "string" || C in h) throw new Error(`discriminator: "${i}" values must be unique strings`);
          h[C] = w;
        }
      }
    } };
    zs.default = Wd;
  });
  var ba = _((gh, Qd) => {
    Qd.exports = { $schema: "http://json-schema.org/draft-07/schema#", $id: "http://json-schema.org/draft-07/schema#", title: "Core schema meta-schema", definitions: { schemaArray: { type: "array", minItems: 1, items: { $ref: "#" } }, nonNegativeInteger: { type: "integer", minimum: 0 }, nonNegativeIntegerDefault0: { allOf: [{ $ref: "#/definitions/nonNegativeInteger" }, { default: 0 }] }, simpleTypes: { enum: ["array", "boolean", "integer", "null", "number", "object", "string"] }, stringArray: { type: "array", items: { type: "string" }, uniqueItems: true, default: [] } }, type: ["object", "boolean"], properties: { $id: { type: "string", format: "uri-reference" }, $schema: { type: "string", format: "uri" }, $ref: { type: "string", format: "uri-reference" }, $comment: { type: "string" }, title: { type: "string" }, description: { type: "string" }, default: true, readOnly: { type: "boolean", default: false }, examples: { type: "array", items: true }, multipleOf: { type: "number", exclusiveMinimum: 0 }, maximum: { type: "number" }, exclusiveMaximum: { type: "number" }, minimum: { type: "number" }, exclusiveMinimum: { type: "number" }, maxLength: { $ref: "#/definitions/nonNegativeInteger" }, minLength: { $ref: "#/definitions/nonNegativeIntegerDefault0" }, pattern: { type: "string", format: "regex" }, additionalItems: { $ref: "#" }, items: { anyOf: [{ $ref: "#" }, { $ref: "#/definitions/schemaArray" }], default: true }, maxItems: { $ref: "#/definitions/nonNegativeInteger" }, minItems: { $ref: "#/definitions/nonNegativeIntegerDefault0" }, uniqueItems: { type: "boolean", default: false }, contains: { $ref: "#" }, maxProperties: { $ref: "#/definitions/nonNegativeInteger" }, minProperties: { $ref: "#/definitions/nonNegativeIntegerDefault0" }, required: { $ref: "#/definitions/stringArray" }, additionalProperties: { $ref: "#" }, definitions: { type: "object", additionalProperties: { $ref: "#" }, default: {} }, properties: { type: "object", additionalProperties: { $ref: "#" }, default: {} }, patternProperties: { type: "object", additionalProperties: { $ref: "#" }, propertyNames: { format: "regex" }, default: {} }, dependencies: { type: "object", additionalProperties: { anyOf: [{ $ref: "#" }, { $ref: "#/definitions/stringArray" }] } }, propertyNames: { $ref: "#" }, const: true, enum: { type: "array", items: true, minItems: 1, uniqueItems: true }, type: { anyOf: [{ $ref: "#/definitions/simpleTypes" }, { type: "array", items: { $ref: "#/definitions/simpleTypes" }, minItems: 1, uniqueItems: true }] }, format: { type: "string" }, contentMediaType: { type: "string" }, contentEncoding: { type: "string" }, if: { $ref: "#" }, then: { $ref: "#" }, else: { $ref: "#" }, allOf: { $ref: "#/definitions/schemaArray" }, anyOf: { $ref: "#/definitions/schemaArray" }, oneOf: { $ref: "#/definitions/schemaArray" }, not: { $ref: "#" } }, default: true };
  });
  var Pa = _((A, Us) => {
    "use strict";
    Object.defineProperty(A, "__esModule", { value: true });
    A.MissingRefError = A.ValidationError = A.CodeGen = A.Name = A.nil = A.stringify = A.str = A._ = A.KeywordCxt = A.Ajv = void 0;
    var Xd = go(), Bd = _a(), Yd = wa(), Ea = ba(), Zd = ["/properties"], Zt = "http://json-schema.org/draft-07/schema", Le = class extends Xd.default {
      _addVocabularies() {
        super._addVocabularies(), Bd.default.forEach((e) => this.addVocabulary(e)), this.opts.discriminator && this.addKeyword(Yd.default);
      }
      _addDefaultMetaSchema() {
        if (super._addDefaultMetaSchema(), !this.opts.meta) return;
        let e = this.opts.$data ? this.$dataMetaSchema(Ea, Zd) : Ea;
        this.addMetaSchema(e, Zt, false), this.refs["http://json-schema.org/schema"] = Zt;
      }
      defaultMeta() {
        return this.opts.defaultMeta = super.defaultMeta() || (this.getSchema(Zt) ? Zt : void 0);
      }
    };
    A.Ajv = Le;
    Us.exports = A = Le;
    Us.exports.Ajv = Le;
    Object.defineProperty(A, "__esModule", { value: true });
    A.default = Le;
    var ef = ot();
    Object.defineProperty(A, "KeywordCxt", { enumerable: true, get: function() {
      return ef.KeywordCxt;
    } });
    var xe = P();
    Object.defineProperty(A, "_", { enumerable: true, get: function() {
      return xe._;
    } });
    Object.defineProperty(A, "str", { enumerable: true, get: function() {
      return xe.str;
    } });
    Object.defineProperty(A, "stringify", { enumerable: true, get: function() {
      return xe.stringify;
    } });
    Object.defineProperty(A, "nil", { enumerable: true, get: function() {
      return xe.nil;
    } });
    Object.defineProperty(A, "Name", { enumerable: true, get: function() {
      return xe.Name;
    } });
    Object.defineProperty(A, "CodeGen", { enumerable: true, get: function() {
      return xe.CodeGen;
    } });
    var tf = Rt();
    Object.defineProperty(A, "ValidationError", { enumerable: true, get: function() {
      return tf.default;
    } });
    var rf = at();
    Object.defineProperty(A, "MissingRefError", { enumerable: true, get: function() {
      return rf.default;
    } });
  });
  var er = Ra(Pa());
  var { Ajv: $h, __esModule: vh, KeywordCxt: wh, _: bh, str: Eh, stringify: Ph, nil: Sh, Name: Nh, CodeGen: qh, ValidationError: kh, MissingRefError: jh } = er;
  var Oh = er.default ?? er;
  return __toCommonJS(ajv_8_17_1_exports);
})();
