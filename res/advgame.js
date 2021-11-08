(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a4, b3) => {
    for (var prop in b3 || (b3 = {}))
      if (__hasOwnProp.call(b3, prop))
        __defNormalProp(a4, prop, b3[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b3)) {
        if (__propIsEnum.call(b3, prop))
          __defNormalProp(a4, prop, b3[prop]);
      }
    return a4;
  };
  var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[Object.keys(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __reExport = (target, module, desc) => {
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && key !== "default")
          __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
    }
    return target;
  };
  var __toModule = (module) => {
    return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", module && module.__esModule && "default" in module ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
  };
  var __publicField = (obj, key, value) => {
    __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
    return value;
  };

  // node_modules/preact/dist/preact.module.js
  function a(n2, l4) {
    for (var u4 in l4)
      n2[u4] = l4[u4];
    return n2;
  }
  function h(n2) {
    var l4 = n2.parentNode;
    l4 && l4.removeChild(n2);
  }
  function v(l4, u4, i4) {
    var t3, o4, r3, f4 = {};
    for (r3 in u4)
      r3 == "key" ? t3 = u4[r3] : r3 == "ref" ? o4 = u4[r3] : f4[r3] = u4[r3];
    if (arguments.length > 2 && (f4.children = arguments.length > 3 ? n.call(arguments, 2) : i4), typeof l4 == "function" && l4.defaultProps != null)
      for (r3 in l4.defaultProps)
        f4[r3] === void 0 && (f4[r3] = l4.defaultProps[r3]);
    return y(l4, f4, t3, o4, null);
  }
  function y(n2, i4, t3, o4, r3) {
    var f4 = { type: n2, props: i4, key: t3, ref: o4, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: r3 == null ? ++u : r3 };
    return l.vnode != null && l.vnode(f4), f4;
  }
  function d(n2) {
    return n2.children;
  }
  function _(n2, l4) {
    this.props = n2, this.context = l4;
  }
  function k(n2, l4) {
    if (l4 == null)
      return n2.__ ? k(n2.__, n2.__.__k.indexOf(n2) + 1) : null;
    for (var u4; l4 < n2.__k.length; l4++)
      if ((u4 = n2.__k[l4]) != null && u4.__e != null)
        return u4.__e;
    return typeof n2.type == "function" ? k(n2) : null;
  }
  function b(n2) {
    var l4, u4;
    if ((n2 = n2.__) != null && n2.__c != null) {
      for (n2.__e = n2.__c.base = null, l4 = 0; l4 < n2.__k.length; l4++)
        if ((u4 = n2.__k[l4]) != null && u4.__e != null) {
          n2.__e = n2.__c.base = u4.__e;
          break;
        }
      return b(n2);
    }
  }
  function m(n2) {
    (!n2.__d && (n2.__d = true) && t.push(n2) && !g.__r++ || r !== l.debounceRendering) && ((r = l.debounceRendering) || o)(g);
  }
  function g() {
    for (var n2; g.__r = t.length; )
      n2 = t.sort(function(n3, l4) {
        return n3.__v.__b - l4.__v.__b;
      }), t = [], n2.some(function(n3) {
        var l4, u4, i4, t3, o4, r3;
        n3.__d && (o4 = (t3 = (l4 = n3).__v).__e, (r3 = l4.__P) && (u4 = [], (i4 = a({}, t3)).__v = t3.__v + 1, j(r3, t3, i4, l4.__n, r3.ownerSVGElement !== void 0, t3.__h != null ? [o4] : null, u4, o4 == null ? k(t3) : o4, t3.__h), z(u4, t3), t3.__e != o4 && b(t3)));
      });
  }
  function w(n2, l4, u4, i4, t3, o4, r3, f4, s4, a4) {
    var h4, v3, p4, _3, b3, m3, g3, w4 = i4 && i4.__k || c, A4 = w4.length;
    for (u4.__k = [], h4 = 0; h4 < l4.length; h4++)
      if ((_3 = u4.__k[h4] = (_3 = l4[h4]) == null || typeof _3 == "boolean" ? null : typeof _3 == "string" || typeof _3 == "number" || typeof _3 == "bigint" ? y(null, _3, null, null, _3) : Array.isArray(_3) ? y(d, { children: _3 }, null, null, null) : _3.__b > 0 ? y(_3.type, _3.props, _3.key, null, _3.__v) : _3) != null) {
        if (_3.__ = u4, _3.__b = u4.__b + 1, (p4 = w4[h4]) === null || p4 && _3.key == p4.key && _3.type === p4.type)
          w4[h4] = void 0;
        else
          for (v3 = 0; v3 < A4; v3++) {
            if ((p4 = w4[v3]) && _3.key == p4.key && _3.type === p4.type) {
              w4[v3] = void 0;
              break;
            }
            p4 = null;
          }
        j(n2, _3, p4 = p4 || e, t3, o4, r3, f4, s4, a4), b3 = _3.__e, (v3 = _3.ref) && p4.ref != v3 && (g3 || (g3 = []), p4.ref && g3.push(p4.ref, null, _3), g3.push(v3, _3.__c || b3, _3)), b3 != null ? (m3 == null && (m3 = b3), typeof _3.type == "function" && _3.__k != null && _3.__k === p4.__k ? _3.__d = s4 = x(_3, s4, n2) : s4 = P(n2, _3, p4, w4, b3, s4), a4 || u4.type !== "option" ? typeof u4.type == "function" && (u4.__d = s4) : n2.value = "") : s4 && p4.__e == s4 && s4.parentNode != n2 && (s4 = k(p4));
      }
    for (u4.__e = m3, h4 = A4; h4--; )
      w4[h4] != null && (typeof u4.type == "function" && w4[h4].__e != null && w4[h4].__e == u4.__d && (u4.__d = k(i4, h4 + 1)), N(w4[h4], w4[h4]));
    if (g3)
      for (h4 = 0; h4 < g3.length; h4++)
        M(g3[h4], g3[++h4], g3[++h4]);
  }
  function x(n2, l4, u4) {
    var i4, t3;
    for (i4 = 0; i4 < n2.__k.length; i4++)
      (t3 = n2.__k[i4]) && (t3.__ = n2, l4 = typeof t3.type == "function" ? x(t3, l4, u4) : P(u4, t3, t3, n2.__k, t3.__e, l4));
    return l4;
  }
  function A(n2, l4) {
    return l4 = l4 || [], n2 == null || typeof n2 == "boolean" || (Array.isArray(n2) ? n2.some(function(n3) {
      A(n3, l4);
    }) : l4.push(n2)), l4;
  }
  function P(n2, l4, u4, i4, t3, o4) {
    var r3, f4, e3;
    if (l4.__d !== void 0)
      r3 = l4.__d, l4.__d = void 0;
    else if (u4 == null || t3 != o4 || t3.parentNode == null)
      n:
        if (o4 == null || o4.parentNode !== n2)
          n2.appendChild(t3), r3 = null;
        else {
          for (f4 = o4, e3 = 0; (f4 = f4.nextSibling) && e3 < i4.length; e3 += 2)
            if (f4 == t3)
              break n;
          n2.insertBefore(t3, o4), r3 = o4;
        }
    return r3 !== void 0 ? r3 : t3.nextSibling;
  }
  function C(n2, l4, u4, i4, t3) {
    var o4;
    for (o4 in u4)
      o4 === "children" || o4 === "key" || o4 in l4 || H(n2, o4, null, u4[o4], i4);
    for (o4 in l4)
      t3 && typeof l4[o4] != "function" || o4 === "children" || o4 === "key" || o4 === "value" || o4 === "checked" || u4[o4] === l4[o4] || H(n2, o4, l4[o4], u4[o4], i4);
  }
  function $(n2, l4, u4) {
    l4[0] === "-" ? n2.setProperty(l4, u4) : n2[l4] = u4 == null ? "" : typeof u4 != "number" || s.test(l4) ? u4 : u4 + "px";
  }
  function H(n2, l4, u4, i4, t3) {
    var o4;
    n:
      if (l4 === "style")
        if (typeof u4 == "string")
          n2.style.cssText = u4;
        else {
          if (typeof i4 == "string" && (n2.style.cssText = i4 = ""), i4)
            for (l4 in i4)
              u4 && l4 in u4 || $(n2.style, l4, "");
          if (u4)
            for (l4 in u4)
              i4 && u4[l4] === i4[l4] || $(n2.style, l4, u4[l4]);
        }
      else if (l4[0] === "o" && l4[1] === "n")
        o4 = l4 !== (l4 = l4.replace(/Capture$/, "")), l4 = l4.toLowerCase() in n2 ? l4.toLowerCase().slice(2) : l4.slice(2), n2.l || (n2.l = {}), n2.l[l4 + o4] = u4, u4 ? i4 || n2.addEventListener(l4, o4 ? T : I, o4) : n2.removeEventListener(l4, o4 ? T : I, o4);
      else if (l4 !== "dangerouslySetInnerHTML") {
        if (t3)
          l4 = l4.replace(/xlink[H:h]/, "h").replace(/sName$/, "s");
        else if (l4 !== "href" && l4 !== "list" && l4 !== "form" && l4 !== "tabIndex" && l4 !== "download" && l4 in n2)
          try {
            n2[l4] = u4 == null ? "" : u4;
            break n;
          } catch (n3) {
          }
        typeof u4 == "function" || (u4 != null && (u4 !== false || l4[0] === "a" && l4[1] === "r") ? n2.setAttribute(l4, u4) : n2.removeAttribute(l4));
      }
  }
  function I(n2) {
    this.l[n2.type + false](l.event ? l.event(n2) : n2);
  }
  function T(n2) {
    this.l[n2.type + true](l.event ? l.event(n2) : n2);
  }
  function j(n2, u4, i4, t3, o4, r3, f4, e3, c4) {
    var s4, h4, v3, y4, p4, k3, b3, m3, g3, x3, A4, P3 = u4.type;
    if (u4.constructor !== void 0)
      return null;
    i4.__h != null && (c4 = i4.__h, e3 = u4.__e = i4.__e, u4.__h = null, r3 = [e3]), (s4 = l.__b) && s4(u4);
    try {
      n:
        if (typeof P3 == "function") {
          if (m3 = u4.props, g3 = (s4 = P3.contextType) && t3[s4.__c], x3 = s4 ? g3 ? g3.props.value : s4.__ : t3, i4.__c ? b3 = (h4 = u4.__c = i4.__c).__ = h4.__E : ("prototype" in P3 && P3.prototype.render ? u4.__c = h4 = new P3(m3, x3) : (u4.__c = h4 = new _(m3, x3), h4.constructor = P3, h4.render = O), g3 && g3.sub(h4), h4.props = m3, h4.state || (h4.state = {}), h4.context = x3, h4.__n = t3, v3 = h4.__d = true, h4.__h = []), h4.__s == null && (h4.__s = h4.state), P3.getDerivedStateFromProps != null && (h4.__s == h4.state && (h4.__s = a({}, h4.__s)), a(h4.__s, P3.getDerivedStateFromProps(m3, h4.__s))), y4 = h4.props, p4 = h4.state, v3)
            P3.getDerivedStateFromProps == null && h4.componentWillMount != null && h4.componentWillMount(), h4.componentDidMount != null && h4.__h.push(h4.componentDidMount);
          else {
            if (P3.getDerivedStateFromProps == null && m3 !== y4 && h4.componentWillReceiveProps != null && h4.componentWillReceiveProps(m3, x3), !h4.__e && h4.shouldComponentUpdate != null && h4.shouldComponentUpdate(m3, h4.__s, x3) === false || u4.__v === i4.__v) {
              h4.props = m3, h4.state = h4.__s, u4.__v !== i4.__v && (h4.__d = false), h4.__v = u4, u4.__e = i4.__e, u4.__k = i4.__k, u4.__k.forEach(function(n3) {
                n3 && (n3.__ = u4);
              }), h4.__h.length && f4.push(h4);
              break n;
            }
            h4.componentWillUpdate != null && h4.componentWillUpdate(m3, h4.__s, x3), h4.componentDidUpdate != null && h4.__h.push(function() {
              h4.componentDidUpdate(y4, p4, k3);
            });
          }
          h4.context = x3, h4.props = m3, h4.state = h4.__s, (s4 = l.__r) && s4(u4), h4.__d = false, h4.__v = u4, h4.__P = n2, s4 = h4.render(h4.props, h4.state, h4.context), h4.state = h4.__s, h4.getChildContext != null && (t3 = a(a({}, t3), h4.getChildContext())), v3 || h4.getSnapshotBeforeUpdate == null || (k3 = h4.getSnapshotBeforeUpdate(y4, p4)), A4 = s4 != null && s4.type === d && s4.key == null ? s4.props.children : s4, w(n2, Array.isArray(A4) ? A4 : [A4], u4, i4, t3, o4, r3, f4, e3, c4), h4.base = u4.__e, u4.__h = null, h4.__h.length && f4.push(h4), b3 && (h4.__E = h4.__ = null), h4.__e = false;
        } else
          r3 == null && u4.__v === i4.__v ? (u4.__k = i4.__k, u4.__e = i4.__e) : u4.__e = L(i4.__e, u4, i4, t3, o4, r3, f4, c4);
      (s4 = l.diffed) && s4(u4);
    } catch (n3) {
      u4.__v = null, (c4 || r3 != null) && (u4.__e = e3, u4.__h = !!c4, r3[r3.indexOf(e3)] = null), l.__e(n3, u4, i4);
    }
  }
  function z(n2, u4) {
    l.__c && l.__c(u4, n2), n2.some(function(u5) {
      try {
        n2 = u5.__h, u5.__h = [], n2.some(function(n3) {
          n3.call(u5);
        });
      } catch (n3) {
        l.__e(n3, u5.__v);
      }
    });
  }
  function L(l4, u4, i4, t3, o4, r3, f4, c4) {
    var s4, a4, v3, y4 = i4.props, p4 = u4.props, d4 = u4.type, _3 = 0;
    if (d4 === "svg" && (o4 = true), r3 != null) {
      for (; _3 < r3.length; _3++)
        if ((s4 = r3[_3]) && (s4 === l4 || (d4 ? s4.localName == d4 : s4.nodeType == 3))) {
          l4 = s4, r3[_3] = null;
          break;
        }
    }
    if (l4 == null) {
      if (d4 === null)
        return document.createTextNode(p4);
      l4 = o4 ? document.createElementNS("http://www.w3.org/2000/svg", d4) : document.createElement(d4, p4.is && p4), r3 = null, c4 = false;
    }
    if (d4 === null)
      y4 === p4 || c4 && l4.data === p4 || (l4.data = p4);
    else {
      if (r3 = r3 && n.call(l4.childNodes), a4 = (y4 = i4.props || e).dangerouslySetInnerHTML, v3 = p4.dangerouslySetInnerHTML, !c4) {
        if (r3 != null)
          for (y4 = {}, _3 = 0; _3 < l4.attributes.length; _3++)
            y4[l4.attributes[_3].name] = l4.attributes[_3].value;
        (v3 || a4) && (v3 && (a4 && v3.__html == a4.__html || v3.__html === l4.innerHTML) || (l4.innerHTML = v3 && v3.__html || ""));
      }
      if (C(l4, p4, y4, o4, c4), v3)
        u4.__k = [];
      else if (_3 = u4.props.children, w(l4, Array.isArray(_3) ? _3 : [_3], u4, i4, t3, o4 && d4 !== "foreignObject", r3, f4, r3 ? r3[0] : i4.__k && k(i4, 0), c4), r3 != null)
        for (_3 = r3.length; _3--; )
          r3[_3] != null && h(r3[_3]);
      c4 || ("value" in p4 && (_3 = p4.value) !== void 0 && (_3 !== l4.value || d4 === "progress" && !_3) && H(l4, "value", _3, y4.value, false), "checked" in p4 && (_3 = p4.checked) !== void 0 && _3 !== l4.checked && H(l4, "checked", _3, y4.checked, false));
    }
    return l4;
  }
  function M(n2, u4, i4) {
    try {
      typeof n2 == "function" ? n2(u4) : n2.current = u4;
    } catch (n3) {
      l.__e(n3, i4);
    }
  }
  function N(n2, u4, i4) {
    var t3, o4;
    if (l.unmount && l.unmount(n2), (t3 = n2.ref) && (t3.current && t3.current !== n2.__e || M(t3, null, u4)), (t3 = n2.__c) != null) {
      if (t3.componentWillUnmount)
        try {
          t3.componentWillUnmount();
        } catch (n3) {
          l.__e(n3, u4);
        }
      t3.base = t3.__P = null;
    }
    if (t3 = n2.__k)
      for (o4 = 0; o4 < t3.length; o4++)
        t3[o4] && N(t3[o4], u4, typeof n2.type != "function");
    i4 || n2.__e == null || h(n2.__e), n2.__e = n2.__d = void 0;
  }
  function O(n2, l4, u4) {
    return this.constructor(n2, u4);
  }
  function S(u4, i4, t3) {
    var o4, r3, f4;
    l.__ && l.__(u4, i4), r3 = (o4 = typeof t3 == "function") ? null : t3 && t3.__k || i4.__k, f4 = [], j(i4, u4 = (!o4 && t3 || i4).__k = v(d, null, [u4]), r3 || e, e, i4.ownerSVGElement !== void 0, !o4 && t3 ? [t3] : r3 ? null : i4.firstChild ? n.call(i4.childNodes) : null, f4, !o4 && t3 ? t3 : r3 ? r3.__e : i4.firstChild, o4), z(f4, u4);
  }
  function D(n2, l4) {
    var u4 = { __c: l4 = "__cC" + f++, __: n2, Consumer: function(n3, l5) {
      return n3.children(l5);
    }, Provider: function(n3) {
      var u5, i4;
      return this.getChildContext || (u5 = [], (i4 = {})[l4] = this, this.getChildContext = function() {
        return i4;
      }, this.shouldComponentUpdate = function(n4) {
        this.props.value !== n4.value && u5.some(m);
      }, this.sub = function(n4) {
        u5.push(n4);
        var l5 = n4.componentWillUnmount;
        n4.componentWillUnmount = function() {
          u5.splice(u5.indexOf(n4), 1), l5 && l5.call(n4);
        };
      }), n3.children;
    } };
    return u4.Provider.__ = u4.Consumer.contextType = u4;
  }
  var n, l, u, i, t, o, r, f, e, c, s;
  var init_preact_module = __esm({
    "node_modules/preact/dist/preact.module.js"() {
      init_preact_shim();
      e = {};
      c = [];
      s = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
      n = c.slice, l = { __e: function(n2, l4) {
        for (var u4, i4, t3; l4 = l4.__; )
          if ((u4 = l4.__c) && !u4.__)
            try {
              if ((i4 = u4.constructor) && i4.getDerivedStateFromError != null && (u4.setState(i4.getDerivedStateFromError(n2)), t3 = u4.__d), u4.componentDidCatch != null && (u4.componentDidCatch(n2), t3 = u4.__d), t3)
                return u4.__E = u4;
            } catch (l5) {
              n2 = l5;
            }
        throw n2;
      } }, u = 0, i = function(n2) {
        return n2 != null && n2.constructor === void 0;
      }, _.prototype.setState = function(n2, l4) {
        var u4;
        u4 = this.__s != null && this.__s !== this.state ? this.__s : this.__s = a({}, this.state), typeof n2 == "function" && (n2 = n2(a({}, u4), this.props)), n2 && a(u4, n2), n2 != null && this.__v && (l4 && this.__h.push(l4), m(this));
      }, _.prototype.forceUpdate = function(n2) {
        this.__v && (this.__e = true, n2 && this.__h.push(n2), m(this));
      }, _.prototype.render = d, t = [], o = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, g.__r = 0, f = 0;
    }
  });

  // src/utils/preact-shim.js
  var init_preact_shim = __esm({
    "src/utils/preact-shim.js"() {
      init_preact_module();
    }
  });

  // node_modules/yaml/dist/PlainValue-ec8e588e.js
  var require_PlainValue_ec8e588e = __commonJS({
    "node_modules/yaml/dist/PlainValue-ec8e588e.js"(exports) {
      init_preact_shim();
      "use strict";
      var Char = {
        ANCHOR: "&",
        COMMENT: "#",
        TAG: "!",
        DIRECTIVES_END: "-",
        DOCUMENT_END: "."
      };
      var Type = {
        ALIAS: "ALIAS",
        BLANK_LINE: "BLANK_LINE",
        BLOCK_FOLDED: "BLOCK_FOLDED",
        BLOCK_LITERAL: "BLOCK_LITERAL",
        COMMENT: "COMMENT",
        DIRECTIVE: "DIRECTIVE",
        DOCUMENT: "DOCUMENT",
        FLOW_MAP: "FLOW_MAP",
        FLOW_SEQ: "FLOW_SEQ",
        MAP: "MAP",
        MAP_KEY: "MAP_KEY",
        MAP_VALUE: "MAP_VALUE",
        PLAIN: "PLAIN",
        QUOTE_DOUBLE: "QUOTE_DOUBLE",
        QUOTE_SINGLE: "QUOTE_SINGLE",
        SEQ: "SEQ",
        SEQ_ITEM: "SEQ_ITEM"
      };
      var defaultTagPrefix = "tag:yaml.org,2002:";
      var defaultTags = {
        MAP: "tag:yaml.org,2002:map",
        SEQ: "tag:yaml.org,2002:seq",
        STR: "tag:yaml.org,2002:str"
      };
      function findLineStarts(src) {
        const ls = [0];
        let offset = src.indexOf("\n");
        while (offset !== -1) {
          offset += 1;
          ls.push(offset);
          offset = src.indexOf("\n", offset);
        }
        return ls;
      }
      function getSrcInfo(cst) {
        let lineStarts, src;
        if (typeof cst === "string") {
          lineStarts = findLineStarts(cst);
          src = cst;
        } else {
          if (Array.isArray(cst))
            cst = cst[0];
          if (cst && cst.context) {
            if (!cst.lineStarts)
              cst.lineStarts = findLineStarts(cst.context.src);
            lineStarts = cst.lineStarts;
            src = cst.context.src;
          }
        }
        return {
          lineStarts,
          src
        };
      }
      function getLinePos(offset, cst) {
        if (typeof offset !== "number" || offset < 0)
          return null;
        const {
          lineStarts,
          src
        } = getSrcInfo(cst);
        if (!lineStarts || !src || offset > src.length)
          return null;
        for (let i4 = 0; i4 < lineStarts.length; ++i4) {
          const start = lineStarts[i4];
          if (offset < start) {
            return {
              line: i4,
              col: offset - lineStarts[i4 - 1] + 1
            };
          }
          if (offset === start)
            return {
              line: i4 + 1,
              col: 1
            };
        }
        const line = lineStarts.length;
        return {
          line,
          col: offset - lineStarts[line - 1] + 1
        };
      }
      function getLine(line, cst) {
        const {
          lineStarts,
          src
        } = getSrcInfo(cst);
        if (!lineStarts || !(line >= 1) || line > lineStarts.length)
          return null;
        const start = lineStarts[line - 1];
        let end = lineStarts[line];
        while (end && end > start && src[end - 1] === "\n")
          --end;
        return src.slice(start, end);
      }
      function getPrettyContext({
        start,
        end
      }, cst, maxWidth = 80) {
        let src = getLine(start.line, cst);
        if (!src)
          return null;
        let {
          col
        } = start;
        if (src.length > maxWidth) {
          if (col <= maxWidth - 10) {
            src = src.substr(0, maxWidth - 1) + "\u2026";
          } else {
            const halfWidth = Math.round(maxWidth / 2);
            if (src.length > col + halfWidth)
              src = src.substr(0, col + halfWidth - 1) + "\u2026";
            col -= src.length - maxWidth;
            src = "\u2026" + src.substr(1 - maxWidth);
          }
        }
        let errLen = 1;
        let errEnd = "";
        if (end) {
          if (end.line === start.line && col + (end.col - start.col) <= maxWidth + 1) {
            errLen = end.col - start.col;
          } else {
            errLen = Math.min(src.length + 1, maxWidth) - col;
            errEnd = "\u2026";
          }
        }
        const offset = col > 1 ? " ".repeat(col - 1) : "";
        const err = "^".repeat(errLen);
        return `${src}
${offset}${err}${errEnd}`;
      }
      var Range = class {
        static copy(orig) {
          return new Range(orig.start, orig.end);
        }
        constructor(start, end) {
          this.start = start;
          this.end = end || start;
        }
        isEmpty() {
          return typeof this.start !== "number" || !this.end || this.end <= this.start;
        }
        setOrigRange(cr, offset) {
          const {
            start,
            end
          } = this;
          if (cr.length === 0 || end <= cr[0]) {
            this.origStart = start;
            this.origEnd = end;
            return offset;
          }
          let i4 = offset;
          while (i4 < cr.length) {
            if (cr[i4] > start)
              break;
            else
              ++i4;
          }
          this.origStart = start + i4;
          const nextOffset = i4;
          while (i4 < cr.length) {
            if (cr[i4] >= end)
              break;
            else
              ++i4;
          }
          this.origEnd = end + i4;
          return nextOffset;
        }
      };
      var Node = class {
        static addStringTerminator(src, offset, str) {
          if (str[str.length - 1] === "\n")
            return str;
          const next = Node.endOfWhiteSpace(src, offset);
          return next >= src.length || src[next] === "\n" ? str + "\n" : str;
        }
        static atDocumentBoundary(src, offset, sep) {
          const ch0 = src[offset];
          if (!ch0)
            return true;
          const prev = src[offset - 1];
          if (prev && prev !== "\n")
            return false;
          if (sep) {
            if (ch0 !== sep)
              return false;
          } else {
            if (ch0 !== Char.DIRECTIVES_END && ch0 !== Char.DOCUMENT_END)
              return false;
          }
          const ch1 = src[offset + 1];
          const ch2 = src[offset + 2];
          if (ch1 !== ch0 || ch2 !== ch0)
            return false;
          const ch3 = src[offset + 3];
          return !ch3 || ch3 === "\n" || ch3 === "	" || ch3 === " ";
        }
        static endOfIdentifier(src, offset) {
          let ch = src[offset];
          const isVerbatim = ch === "<";
          const notOk = isVerbatim ? ["\n", "	", " ", ">"] : ["\n", "	", " ", "[", "]", "{", "}", ","];
          while (ch && notOk.indexOf(ch) === -1)
            ch = src[offset += 1];
          if (isVerbatim && ch === ">")
            offset += 1;
          return offset;
        }
        static endOfIndent(src, offset) {
          let ch = src[offset];
          while (ch === " ")
            ch = src[offset += 1];
          return offset;
        }
        static endOfLine(src, offset) {
          let ch = src[offset];
          while (ch && ch !== "\n")
            ch = src[offset += 1];
          return offset;
        }
        static endOfWhiteSpace(src, offset) {
          let ch = src[offset];
          while (ch === "	" || ch === " ")
            ch = src[offset += 1];
          return offset;
        }
        static startOfLine(src, offset) {
          let ch = src[offset - 1];
          if (ch === "\n")
            return offset;
          while (ch && ch !== "\n")
            ch = src[offset -= 1];
          return offset + 1;
        }
        static endOfBlockIndent(src, indent, lineStart) {
          const inEnd = Node.endOfIndent(src, lineStart);
          if (inEnd > lineStart + indent) {
            return inEnd;
          } else {
            const wsEnd = Node.endOfWhiteSpace(src, inEnd);
            const ch = src[wsEnd];
            if (!ch || ch === "\n")
              return wsEnd;
          }
          return null;
        }
        static atBlank(src, offset, endAsBlank) {
          const ch = src[offset];
          return ch === "\n" || ch === "	" || ch === " " || endAsBlank && !ch;
        }
        static nextNodeIsIndented(ch, indentDiff, indicatorAsIndent) {
          if (!ch || indentDiff < 0)
            return false;
          if (indentDiff > 0)
            return true;
          return indicatorAsIndent && ch === "-";
        }
        static normalizeOffset(src, offset) {
          const ch = src[offset];
          return !ch ? offset : ch !== "\n" && src[offset - 1] === "\n" ? offset - 1 : Node.endOfWhiteSpace(src, offset);
        }
        static foldNewline(src, offset, indent) {
          let inCount = 0;
          let error = false;
          let fold = "";
          let ch = src[offset + 1];
          while (ch === " " || ch === "	" || ch === "\n") {
            switch (ch) {
              case "\n":
                inCount = 0;
                offset += 1;
                fold += "\n";
                break;
              case "	":
                if (inCount <= indent)
                  error = true;
                offset = Node.endOfWhiteSpace(src, offset + 2) - 1;
                break;
              case " ":
                inCount += 1;
                offset += 1;
                break;
            }
            ch = src[offset + 1];
          }
          if (!fold)
            fold = " ";
          if (ch && inCount <= indent)
            error = true;
          return {
            fold,
            offset,
            error
          };
        }
        constructor(type, props, context) {
          Object.defineProperty(this, "context", {
            value: context || null,
            writable: true
          });
          this.error = null;
          this.range = null;
          this.valueRange = null;
          this.props = props || [];
          this.type = type;
          this.value = null;
        }
        getPropValue(idx, key, skipKey) {
          if (!this.context)
            return null;
          const {
            src
          } = this.context;
          const prop = this.props[idx];
          return prop && src[prop.start] === key ? src.slice(prop.start + (skipKey ? 1 : 0), prop.end) : null;
        }
        get anchor() {
          for (let i4 = 0; i4 < this.props.length; ++i4) {
            const anchor = this.getPropValue(i4, Char.ANCHOR, true);
            if (anchor != null)
              return anchor;
          }
          return null;
        }
        get comment() {
          const comments = [];
          for (let i4 = 0; i4 < this.props.length; ++i4) {
            const comment = this.getPropValue(i4, Char.COMMENT, true);
            if (comment != null)
              comments.push(comment);
          }
          return comments.length > 0 ? comments.join("\n") : null;
        }
        commentHasRequiredWhitespace(start) {
          const {
            src
          } = this.context;
          if (this.header && start === this.header.end)
            return false;
          if (!this.valueRange)
            return false;
          const {
            end
          } = this.valueRange;
          return start !== end || Node.atBlank(src, end - 1);
        }
        get hasComment() {
          if (this.context) {
            const {
              src
            } = this.context;
            for (let i4 = 0; i4 < this.props.length; ++i4) {
              if (src[this.props[i4].start] === Char.COMMENT)
                return true;
            }
          }
          return false;
        }
        get hasProps() {
          if (this.context) {
            const {
              src
            } = this.context;
            for (let i4 = 0; i4 < this.props.length; ++i4) {
              if (src[this.props[i4].start] !== Char.COMMENT)
                return true;
            }
          }
          return false;
        }
        get includesTrailingLines() {
          return false;
        }
        get jsonLike() {
          const jsonLikeTypes = [Type.FLOW_MAP, Type.FLOW_SEQ, Type.QUOTE_DOUBLE, Type.QUOTE_SINGLE];
          return jsonLikeTypes.indexOf(this.type) !== -1;
        }
        get rangeAsLinePos() {
          if (!this.range || !this.context)
            return void 0;
          const start = getLinePos(this.range.start, this.context.root);
          if (!start)
            return void 0;
          const end = getLinePos(this.range.end, this.context.root);
          return {
            start,
            end
          };
        }
        get rawValue() {
          if (!this.valueRange || !this.context)
            return null;
          const {
            start,
            end
          } = this.valueRange;
          return this.context.src.slice(start, end);
        }
        get tag() {
          for (let i4 = 0; i4 < this.props.length; ++i4) {
            const tag = this.getPropValue(i4, Char.TAG, false);
            if (tag != null) {
              if (tag[1] === "<") {
                return {
                  verbatim: tag.slice(2, -1)
                };
              } else {
                const [_3, handle, suffix] = tag.match(/^(.*!)([^!]*)$/);
                return {
                  handle,
                  suffix
                };
              }
            }
          }
          return null;
        }
        get valueRangeContainsNewline() {
          if (!this.valueRange || !this.context)
            return false;
          const {
            start,
            end
          } = this.valueRange;
          const {
            src
          } = this.context;
          for (let i4 = start; i4 < end; ++i4) {
            if (src[i4] === "\n")
              return true;
          }
          return false;
        }
        parseComment(start) {
          const {
            src
          } = this.context;
          if (src[start] === Char.COMMENT) {
            const end = Node.endOfLine(src, start + 1);
            const commentRange = new Range(start, end);
            this.props.push(commentRange);
            return end;
          }
          return start;
        }
        setOrigRanges(cr, offset) {
          if (this.range)
            offset = this.range.setOrigRange(cr, offset);
          if (this.valueRange)
            this.valueRange.setOrigRange(cr, offset);
          this.props.forEach((prop) => prop.setOrigRange(cr, offset));
          return offset;
        }
        toString() {
          const {
            context: {
              src
            },
            range,
            value
          } = this;
          if (value != null)
            return value;
          const str = src.slice(range.start, range.end);
          return Node.addStringTerminator(src, range.end, str);
        }
      };
      var YAMLError = class extends Error {
        constructor(name, source, message) {
          if (!message || !(source instanceof Node))
            throw new Error(`Invalid arguments for new ${name}`);
          super();
          this.name = name;
          this.message = message;
          this.source = source;
        }
        makePretty() {
          if (!this.source)
            return;
          this.nodeType = this.source.type;
          const cst = this.source.context && this.source.context.root;
          if (typeof this.offset === "number") {
            this.range = new Range(this.offset, this.offset + 1);
            const start = cst && getLinePos(this.offset, cst);
            if (start) {
              const end = {
                line: start.line,
                col: start.col + 1
              };
              this.linePos = {
                start,
                end
              };
            }
            delete this.offset;
          } else {
            this.range = this.source.range;
            this.linePos = this.source.rangeAsLinePos;
          }
          if (this.linePos) {
            const {
              line,
              col
            } = this.linePos.start;
            this.message += ` at line ${line}, column ${col}`;
            const ctx = cst && getPrettyContext(this.linePos, cst);
            if (ctx)
              this.message += `:

${ctx}
`;
          }
          delete this.source;
        }
      };
      var YAMLReferenceError = class extends YAMLError {
        constructor(source, message) {
          super("YAMLReferenceError", source, message);
        }
      };
      var YAMLSemanticError = class extends YAMLError {
        constructor(source, message) {
          super("YAMLSemanticError", source, message);
        }
      };
      var YAMLSyntaxError = class extends YAMLError {
        constructor(source, message) {
          super("YAMLSyntaxError", source, message);
        }
      };
      var YAMLWarning = class extends YAMLError {
        constructor(source, message) {
          super("YAMLWarning", source, message);
        }
      };
      function _defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value,
            enumerable: true,
            configurable: true,
            writable: true
          });
        } else {
          obj[key] = value;
        }
        return obj;
      }
      var PlainValue = class extends Node {
        static endOfLine(src, start, inFlow) {
          let ch = src[start];
          let offset = start;
          while (ch && ch !== "\n") {
            if (inFlow && (ch === "[" || ch === "]" || ch === "{" || ch === "}" || ch === ","))
              break;
            const next = src[offset + 1];
            if (ch === ":" && (!next || next === "\n" || next === "	" || next === " " || inFlow && next === ","))
              break;
            if ((ch === " " || ch === "	") && next === "#")
              break;
            offset += 1;
            ch = next;
          }
          return offset;
        }
        get strValue() {
          if (!this.valueRange || !this.context)
            return null;
          let {
            start,
            end
          } = this.valueRange;
          const {
            src
          } = this.context;
          let ch = src[end - 1];
          while (start < end && (ch === "\n" || ch === "	" || ch === " "))
            ch = src[--end - 1];
          let str = "";
          for (let i4 = start; i4 < end; ++i4) {
            const ch2 = src[i4];
            if (ch2 === "\n") {
              const {
                fold,
                offset
              } = Node.foldNewline(src, i4, -1);
              str += fold;
              i4 = offset;
            } else if (ch2 === " " || ch2 === "	") {
              const wsStart = i4;
              let next = src[i4 + 1];
              while (i4 < end && (next === " " || next === "	")) {
                i4 += 1;
                next = src[i4 + 1];
              }
              if (next !== "\n")
                str += i4 > wsStart ? src.slice(wsStart, i4 + 1) : ch2;
            } else {
              str += ch2;
            }
          }
          const ch0 = src[start];
          switch (ch0) {
            case "	": {
              const msg = "Plain value cannot start with a tab character";
              const errors = [new YAMLSemanticError(this, msg)];
              return {
                errors,
                str
              };
            }
            case "@":
            case "`": {
              const msg = `Plain value cannot start with reserved character ${ch0}`;
              const errors = [new YAMLSemanticError(this, msg)];
              return {
                errors,
                str
              };
            }
            default:
              return str;
          }
        }
        parseBlockValue(start) {
          const {
            indent,
            inFlow,
            src
          } = this.context;
          let offset = start;
          let valueEnd = start;
          for (let ch = src[offset]; ch === "\n"; ch = src[offset]) {
            if (Node.atDocumentBoundary(src, offset + 1))
              break;
            const end = Node.endOfBlockIndent(src, indent, offset + 1);
            if (end === null || src[end] === "#")
              break;
            if (src[end] === "\n") {
              offset = end;
            } else {
              valueEnd = PlainValue.endOfLine(src, end, inFlow);
              offset = valueEnd;
            }
          }
          if (this.valueRange.isEmpty())
            this.valueRange.start = start;
          this.valueRange.end = valueEnd;
          return valueEnd;
        }
        parse(context, start) {
          this.context = context;
          const {
            inFlow,
            src
          } = context;
          let offset = start;
          const ch = src[offset];
          if (ch && ch !== "#" && ch !== "\n") {
            offset = PlainValue.endOfLine(src, start, inFlow);
          }
          this.valueRange = new Range(start, offset);
          offset = Node.endOfWhiteSpace(src, offset);
          offset = this.parseComment(offset);
          if (!this.hasComment || this.valueRange.isEmpty()) {
            offset = this.parseBlockValue(offset);
          }
          return offset;
        }
      };
      exports.Char = Char;
      exports.Node = Node;
      exports.PlainValue = PlainValue;
      exports.Range = Range;
      exports.Type = Type;
      exports.YAMLError = YAMLError;
      exports.YAMLReferenceError = YAMLReferenceError;
      exports.YAMLSemanticError = YAMLSemanticError;
      exports.YAMLSyntaxError = YAMLSyntaxError;
      exports.YAMLWarning = YAMLWarning;
      exports._defineProperty = _defineProperty;
      exports.defaultTagPrefix = defaultTagPrefix;
      exports.defaultTags = defaultTags;
    }
  });

  // node_modules/yaml/dist/parse-cst.js
  var require_parse_cst = __commonJS({
    "node_modules/yaml/dist/parse-cst.js"(exports) {
      init_preact_shim();
      "use strict";
      var PlainValue = require_PlainValue_ec8e588e();
      var BlankLine = class extends PlainValue.Node {
        constructor() {
          super(PlainValue.Type.BLANK_LINE);
        }
        get includesTrailingLines() {
          return true;
        }
        parse(context, start) {
          this.context = context;
          this.range = new PlainValue.Range(start, start + 1);
          return start + 1;
        }
      };
      var CollectionItem = class extends PlainValue.Node {
        constructor(type, props) {
          super(type, props);
          this.node = null;
        }
        get includesTrailingLines() {
          return !!this.node && this.node.includesTrailingLines;
        }
        parse(context, start) {
          this.context = context;
          const {
            parseNode,
            src
          } = context;
          let {
            atLineStart,
            lineStart
          } = context;
          if (!atLineStart && this.type === PlainValue.Type.SEQ_ITEM)
            this.error = new PlainValue.YAMLSemanticError(this, "Sequence items must not have preceding content on the same line");
          const indent = atLineStart ? start - lineStart : context.indent;
          let offset = PlainValue.Node.endOfWhiteSpace(src, start + 1);
          let ch = src[offset];
          const inlineComment = ch === "#";
          const comments = [];
          let blankLine = null;
          while (ch === "\n" || ch === "#") {
            if (ch === "#") {
              const end2 = PlainValue.Node.endOfLine(src, offset + 1);
              comments.push(new PlainValue.Range(offset, end2));
              offset = end2;
            } else {
              atLineStart = true;
              lineStart = offset + 1;
              const wsEnd = PlainValue.Node.endOfWhiteSpace(src, lineStart);
              if (src[wsEnd] === "\n" && comments.length === 0) {
                blankLine = new BlankLine();
                lineStart = blankLine.parse({
                  src
                }, lineStart);
              }
              offset = PlainValue.Node.endOfIndent(src, lineStart);
            }
            ch = src[offset];
          }
          if (PlainValue.Node.nextNodeIsIndented(ch, offset - (lineStart + indent), this.type !== PlainValue.Type.SEQ_ITEM)) {
            this.node = parseNode({
              atLineStart,
              inCollection: false,
              indent,
              lineStart,
              parent: this
            }, offset);
          } else if (ch && lineStart > start + 1) {
            offset = lineStart - 1;
          }
          if (this.node) {
            if (blankLine) {
              const items = context.parent.items || context.parent.contents;
              if (items)
                items.push(blankLine);
            }
            if (comments.length)
              Array.prototype.push.apply(this.props, comments);
            offset = this.node.range.end;
          } else {
            if (inlineComment) {
              const c4 = comments[0];
              this.props.push(c4);
              offset = c4.end;
            } else {
              offset = PlainValue.Node.endOfLine(src, start + 1);
            }
          }
          const end = this.node ? this.node.valueRange.end : offset;
          this.valueRange = new PlainValue.Range(start, end);
          return offset;
        }
        setOrigRanges(cr, offset) {
          offset = super.setOrigRanges(cr, offset);
          return this.node ? this.node.setOrigRanges(cr, offset) : offset;
        }
        toString() {
          const {
            context: {
              src
            },
            node,
            range,
            value
          } = this;
          if (value != null)
            return value;
          const str = node ? src.slice(range.start, node.range.start) + String(node) : src.slice(range.start, range.end);
          return PlainValue.Node.addStringTerminator(src, range.end, str);
        }
      };
      var Comment = class extends PlainValue.Node {
        constructor() {
          super(PlainValue.Type.COMMENT);
        }
        parse(context, start) {
          this.context = context;
          const offset = this.parseComment(start);
          this.range = new PlainValue.Range(start, offset);
          return offset;
        }
      };
      function grabCollectionEndComments(node) {
        let cnode = node;
        while (cnode instanceof CollectionItem)
          cnode = cnode.node;
        if (!(cnode instanceof Collection))
          return null;
        const len = cnode.items.length;
        let ci = -1;
        for (let i4 = len - 1; i4 >= 0; --i4) {
          const n2 = cnode.items[i4];
          if (n2.type === PlainValue.Type.COMMENT) {
            const {
              indent,
              lineStart
            } = n2.context;
            if (indent > 0 && n2.range.start >= lineStart + indent)
              break;
            ci = i4;
          } else if (n2.type === PlainValue.Type.BLANK_LINE)
            ci = i4;
          else
            break;
        }
        if (ci === -1)
          return null;
        const ca = cnode.items.splice(ci, len - ci);
        const prevEnd = ca[0].range.start;
        while (true) {
          cnode.range.end = prevEnd;
          if (cnode.valueRange && cnode.valueRange.end > prevEnd)
            cnode.valueRange.end = prevEnd;
          if (cnode === node)
            break;
          cnode = cnode.context.parent;
        }
        return ca;
      }
      var Collection = class extends PlainValue.Node {
        static nextContentHasIndent(src, offset, indent) {
          const lineStart = PlainValue.Node.endOfLine(src, offset) + 1;
          offset = PlainValue.Node.endOfWhiteSpace(src, lineStart);
          const ch = src[offset];
          if (!ch)
            return false;
          if (offset >= lineStart + indent)
            return true;
          if (ch !== "#" && ch !== "\n")
            return false;
          return Collection.nextContentHasIndent(src, offset, indent);
        }
        constructor(firstItem) {
          super(firstItem.type === PlainValue.Type.SEQ_ITEM ? PlainValue.Type.SEQ : PlainValue.Type.MAP);
          for (let i4 = firstItem.props.length - 1; i4 >= 0; --i4) {
            if (firstItem.props[i4].start < firstItem.context.lineStart) {
              this.props = firstItem.props.slice(0, i4 + 1);
              firstItem.props = firstItem.props.slice(i4 + 1);
              const itemRange = firstItem.props[0] || firstItem.valueRange;
              firstItem.range.start = itemRange.start;
              break;
            }
          }
          this.items = [firstItem];
          const ec = grabCollectionEndComments(firstItem);
          if (ec)
            Array.prototype.push.apply(this.items, ec);
        }
        get includesTrailingLines() {
          return this.items.length > 0;
        }
        parse(context, start) {
          this.context = context;
          const {
            parseNode,
            src
          } = context;
          let lineStart = PlainValue.Node.startOfLine(src, start);
          const firstItem = this.items[0];
          firstItem.context.parent = this;
          this.valueRange = PlainValue.Range.copy(firstItem.valueRange);
          const indent = firstItem.range.start - firstItem.context.lineStart;
          let offset = start;
          offset = PlainValue.Node.normalizeOffset(src, offset);
          let ch = src[offset];
          let atLineStart = PlainValue.Node.endOfWhiteSpace(src, lineStart) === offset;
          let prevIncludesTrailingLines = false;
          while (ch) {
            while (ch === "\n" || ch === "#") {
              if (atLineStart && ch === "\n" && !prevIncludesTrailingLines) {
                const blankLine = new BlankLine();
                offset = blankLine.parse({
                  src
                }, offset);
                this.valueRange.end = offset;
                if (offset >= src.length) {
                  ch = null;
                  break;
                }
                this.items.push(blankLine);
                offset -= 1;
              } else if (ch === "#") {
                if (offset < lineStart + indent && !Collection.nextContentHasIndent(src, offset, indent)) {
                  return offset;
                }
                const comment = new Comment();
                offset = comment.parse({
                  indent,
                  lineStart,
                  src
                }, offset);
                this.items.push(comment);
                this.valueRange.end = offset;
                if (offset >= src.length) {
                  ch = null;
                  break;
                }
              }
              lineStart = offset + 1;
              offset = PlainValue.Node.endOfIndent(src, lineStart);
              if (PlainValue.Node.atBlank(src, offset)) {
                const wsEnd = PlainValue.Node.endOfWhiteSpace(src, offset);
                const next = src[wsEnd];
                if (!next || next === "\n" || next === "#") {
                  offset = wsEnd;
                }
              }
              ch = src[offset];
              atLineStart = true;
            }
            if (!ch) {
              break;
            }
            if (offset !== lineStart + indent && (atLineStart || ch !== ":")) {
              if (offset < lineStart + indent) {
                if (lineStart > start)
                  offset = lineStart;
                break;
              } else if (!this.error) {
                const msg = "All collection items must start at the same column";
                this.error = new PlainValue.YAMLSyntaxError(this, msg);
              }
            }
            if (firstItem.type === PlainValue.Type.SEQ_ITEM) {
              if (ch !== "-") {
                if (lineStart > start)
                  offset = lineStart;
                break;
              }
            } else if (ch === "-" && !this.error) {
              const next = src[offset + 1];
              if (!next || next === "\n" || next === "	" || next === " ") {
                const msg = "A collection cannot be both a mapping and a sequence";
                this.error = new PlainValue.YAMLSyntaxError(this, msg);
              }
            }
            const node = parseNode({
              atLineStart,
              inCollection: true,
              indent,
              lineStart,
              parent: this
            }, offset);
            if (!node)
              return offset;
            this.items.push(node);
            this.valueRange.end = node.valueRange.end;
            offset = PlainValue.Node.normalizeOffset(src, node.range.end);
            ch = src[offset];
            atLineStart = false;
            prevIncludesTrailingLines = node.includesTrailingLines;
            if (ch) {
              let ls = offset - 1;
              let prev = src[ls];
              while (prev === " " || prev === "	")
                prev = src[--ls];
              if (prev === "\n") {
                lineStart = ls + 1;
                atLineStart = true;
              }
            }
            const ec = grabCollectionEndComments(node);
            if (ec)
              Array.prototype.push.apply(this.items, ec);
          }
          return offset;
        }
        setOrigRanges(cr, offset) {
          offset = super.setOrigRanges(cr, offset);
          this.items.forEach((node) => {
            offset = node.setOrigRanges(cr, offset);
          });
          return offset;
        }
        toString() {
          const {
            context: {
              src
            },
            items,
            range,
            value
          } = this;
          if (value != null)
            return value;
          let str = src.slice(range.start, items[0].range.start) + String(items[0]);
          for (let i4 = 1; i4 < items.length; ++i4) {
            const item = items[i4];
            const {
              atLineStart,
              indent
            } = item.context;
            if (atLineStart)
              for (let i5 = 0; i5 < indent; ++i5)
                str += " ";
            str += String(item);
          }
          return PlainValue.Node.addStringTerminator(src, range.end, str);
        }
      };
      var Directive = class extends PlainValue.Node {
        constructor() {
          super(PlainValue.Type.DIRECTIVE);
          this.name = null;
        }
        get parameters() {
          const raw = this.rawValue;
          return raw ? raw.trim().split(/[ \t]+/) : [];
        }
        parseName(start) {
          const {
            src
          } = this.context;
          let offset = start;
          let ch = src[offset];
          while (ch && ch !== "\n" && ch !== "	" && ch !== " ")
            ch = src[offset += 1];
          this.name = src.slice(start, offset);
          return offset;
        }
        parseParameters(start) {
          const {
            src
          } = this.context;
          let offset = start;
          let ch = src[offset];
          while (ch && ch !== "\n" && ch !== "#")
            ch = src[offset += 1];
          this.valueRange = new PlainValue.Range(start, offset);
          return offset;
        }
        parse(context, start) {
          this.context = context;
          let offset = this.parseName(start + 1);
          offset = this.parseParameters(offset);
          offset = this.parseComment(offset);
          this.range = new PlainValue.Range(start, offset);
          return offset;
        }
      };
      var Document = class extends PlainValue.Node {
        static startCommentOrEndBlankLine(src, start) {
          const offset = PlainValue.Node.endOfWhiteSpace(src, start);
          const ch = src[offset];
          return ch === "#" || ch === "\n" ? offset : start;
        }
        constructor() {
          super(PlainValue.Type.DOCUMENT);
          this.directives = null;
          this.contents = null;
          this.directivesEndMarker = null;
          this.documentEndMarker = null;
        }
        parseDirectives(start) {
          const {
            src
          } = this.context;
          this.directives = [];
          let atLineStart = true;
          let hasDirectives = false;
          let offset = start;
          while (!PlainValue.Node.atDocumentBoundary(src, offset, PlainValue.Char.DIRECTIVES_END)) {
            offset = Document.startCommentOrEndBlankLine(src, offset);
            switch (src[offset]) {
              case "\n":
                if (atLineStart) {
                  const blankLine = new BlankLine();
                  offset = blankLine.parse({
                    src
                  }, offset);
                  if (offset < src.length) {
                    this.directives.push(blankLine);
                  }
                } else {
                  offset += 1;
                  atLineStart = true;
                }
                break;
              case "#":
                {
                  const comment = new Comment();
                  offset = comment.parse({
                    src
                  }, offset);
                  this.directives.push(comment);
                  atLineStart = false;
                }
                break;
              case "%":
                {
                  const directive = new Directive();
                  offset = directive.parse({
                    parent: this,
                    src
                  }, offset);
                  this.directives.push(directive);
                  hasDirectives = true;
                  atLineStart = false;
                }
                break;
              default:
                if (hasDirectives) {
                  this.error = new PlainValue.YAMLSemanticError(this, "Missing directives-end indicator line");
                } else if (this.directives.length > 0) {
                  this.contents = this.directives;
                  this.directives = [];
                }
                return offset;
            }
          }
          if (src[offset]) {
            this.directivesEndMarker = new PlainValue.Range(offset, offset + 3);
            return offset + 3;
          }
          if (hasDirectives) {
            this.error = new PlainValue.YAMLSemanticError(this, "Missing directives-end indicator line");
          } else if (this.directives.length > 0) {
            this.contents = this.directives;
            this.directives = [];
          }
          return offset;
        }
        parseContents(start) {
          const {
            parseNode,
            src
          } = this.context;
          if (!this.contents)
            this.contents = [];
          let lineStart = start;
          while (src[lineStart - 1] === "-")
            lineStart -= 1;
          let offset = PlainValue.Node.endOfWhiteSpace(src, start);
          let atLineStart = lineStart === start;
          this.valueRange = new PlainValue.Range(offset);
          while (!PlainValue.Node.atDocumentBoundary(src, offset, PlainValue.Char.DOCUMENT_END)) {
            switch (src[offset]) {
              case "\n":
                if (atLineStart) {
                  const blankLine = new BlankLine();
                  offset = blankLine.parse({
                    src
                  }, offset);
                  if (offset < src.length) {
                    this.contents.push(blankLine);
                  }
                } else {
                  offset += 1;
                  atLineStart = true;
                }
                lineStart = offset;
                break;
              case "#":
                {
                  const comment = new Comment();
                  offset = comment.parse({
                    src
                  }, offset);
                  this.contents.push(comment);
                  atLineStart = false;
                }
                break;
              default: {
                const iEnd = PlainValue.Node.endOfIndent(src, offset);
                const context = {
                  atLineStart,
                  indent: -1,
                  inFlow: false,
                  inCollection: false,
                  lineStart,
                  parent: this
                };
                const node = parseNode(context, iEnd);
                if (!node)
                  return this.valueRange.end = iEnd;
                this.contents.push(node);
                offset = node.range.end;
                atLineStart = false;
                const ec = grabCollectionEndComments(node);
                if (ec)
                  Array.prototype.push.apply(this.contents, ec);
              }
            }
            offset = Document.startCommentOrEndBlankLine(src, offset);
          }
          this.valueRange.end = offset;
          if (src[offset]) {
            this.documentEndMarker = new PlainValue.Range(offset, offset + 3);
            offset += 3;
            if (src[offset]) {
              offset = PlainValue.Node.endOfWhiteSpace(src, offset);
              if (src[offset] === "#") {
                const comment = new Comment();
                offset = comment.parse({
                  src
                }, offset);
                this.contents.push(comment);
              }
              switch (src[offset]) {
                case "\n":
                  offset += 1;
                  break;
                case void 0:
                  break;
                default:
                  this.error = new PlainValue.YAMLSyntaxError(this, "Document end marker line cannot have a non-comment suffix");
              }
            }
          }
          return offset;
        }
        parse(context, start) {
          context.root = this;
          this.context = context;
          const {
            src
          } = context;
          let offset = src.charCodeAt(start) === 65279 ? start + 1 : start;
          offset = this.parseDirectives(offset);
          offset = this.parseContents(offset);
          return offset;
        }
        setOrigRanges(cr, offset) {
          offset = super.setOrigRanges(cr, offset);
          this.directives.forEach((node) => {
            offset = node.setOrigRanges(cr, offset);
          });
          if (this.directivesEndMarker)
            offset = this.directivesEndMarker.setOrigRange(cr, offset);
          this.contents.forEach((node) => {
            offset = node.setOrigRanges(cr, offset);
          });
          if (this.documentEndMarker)
            offset = this.documentEndMarker.setOrigRange(cr, offset);
          return offset;
        }
        toString() {
          const {
            contents,
            directives,
            value
          } = this;
          if (value != null)
            return value;
          let str = directives.join("");
          if (contents.length > 0) {
            if (directives.length > 0 || contents[0].type === PlainValue.Type.COMMENT)
              str += "---\n";
            str += contents.join("");
          }
          if (str[str.length - 1] !== "\n")
            str += "\n";
          return str;
        }
      };
      var Alias = class extends PlainValue.Node {
        parse(context, start) {
          this.context = context;
          const {
            src
          } = context;
          let offset = PlainValue.Node.endOfIdentifier(src, start + 1);
          this.valueRange = new PlainValue.Range(start + 1, offset);
          offset = PlainValue.Node.endOfWhiteSpace(src, offset);
          offset = this.parseComment(offset);
          return offset;
        }
      };
      var Chomp = {
        CLIP: "CLIP",
        KEEP: "KEEP",
        STRIP: "STRIP"
      };
      var BlockValue = class extends PlainValue.Node {
        constructor(type, props) {
          super(type, props);
          this.blockIndent = null;
          this.chomping = Chomp.CLIP;
          this.header = null;
        }
        get includesTrailingLines() {
          return this.chomping === Chomp.KEEP;
        }
        get strValue() {
          if (!this.valueRange || !this.context)
            return null;
          let {
            start,
            end
          } = this.valueRange;
          const {
            indent,
            src
          } = this.context;
          if (this.valueRange.isEmpty())
            return "";
          let lastNewLine = null;
          let ch = src[end - 1];
          while (ch === "\n" || ch === "	" || ch === " ") {
            end -= 1;
            if (end <= start) {
              if (this.chomping === Chomp.KEEP)
                break;
              else
                return "";
            }
            if (ch === "\n")
              lastNewLine = end;
            ch = src[end - 1];
          }
          let keepStart = end + 1;
          if (lastNewLine) {
            if (this.chomping === Chomp.KEEP) {
              keepStart = lastNewLine;
              end = this.valueRange.end;
            } else {
              end = lastNewLine;
            }
          }
          const bi = indent + this.blockIndent;
          const folded = this.type === PlainValue.Type.BLOCK_FOLDED;
          let atStart = true;
          let str = "";
          let sep = "";
          let prevMoreIndented = false;
          for (let i4 = start; i4 < end; ++i4) {
            for (let j4 = 0; j4 < bi; ++j4) {
              if (src[i4] !== " ")
                break;
              i4 += 1;
            }
            const ch2 = src[i4];
            if (ch2 === "\n") {
              if (sep === "\n")
                str += "\n";
              else
                sep = "\n";
            } else {
              const lineEnd = PlainValue.Node.endOfLine(src, i4);
              const line = src.slice(i4, lineEnd);
              i4 = lineEnd;
              if (folded && (ch2 === " " || ch2 === "	") && i4 < keepStart) {
                if (sep === " ")
                  sep = "\n";
                else if (!prevMoreIndented && !atStart && sep === "\n")
                  sep = "\n\n";
                str += sep + line;
                sep = lineEnd < end && src[lineEnd] || "";
                prevMoreIndented = true;
              } else {
                str += sep + line;
                sep = folded && i4 < keepStart ? " " : "\n";
                prevMoreIndented = false;
              }
              if (atStart && line !== "")
                atStart = false;
            }
          }
          return this.chomping === Chomp.STRIP ? str : str + "\n";
        }
        parseBlockHeader(start) {
          const {
            src
          } = this.context;
          let offset = start + 1;
          let bi = "";
          while (true) {
            const ch = src[offset];
            switch (ch) {
              case "-":
                this.chomping = Chomp.STRIP;
                break;
              case "+":
                this.chomping = Chomp.KEEP;
                break;
              case "0":
              case "1":
              case "2":
              case "3":
              case "4":
              case "5":
              case "6":
              case "7":
              case "8":
              case "9":
                bi += ch;
                break;
              default:
                this.blockIndent = Number(bi) || null;
                this.header = new PlainValue.Range(start, offset);
                return offset;
            }
            offset += 1;
          }
        }
        parseBlockValue(start) {
          const {
            indent,
            src
          } = this.context;
          const explicit = !!this.blockIndent;
          let offset = start;
          let valueEnd = start;
          let minBlockIndent = 1;
          for (let ch = src[offset]; ch === "\n"; ch = src[offset]) {
            offset += 1;
            if (PlainValue.Node.atDocumentBoundary(src, offset))
              break;
            const end = PlainValue.Node.endOfBlockIndent(src, indent, offset);
            if (end === null)
              break;
            const ch2 = src[end];
            const lineIndent = end - (offset + indent);
            if (!this.blockIndent) {
              if (src[end] !== "\n") {
                if (lineIndent < minBlockIndent) {
                  const msg = "Block scalars with more-indented leading empty lines must use an explicit indentation indicator";
                  this.error = new PlainValue.YAMLSemanticError(this, msg);
                }
                this.blockIndent = lineIndent;
              } else if (lineIndent > minBlockIndent) {
                minBlockIndent = lineIndent;
              }
            } else if (ch2 && ch2 !== "\n" && lineIndent < this.blockIndent) {
              if (src[end] === "#")
                break;
              if (!this.error) {
                const src2 = explicit ? "explicit indentation indicator" : "first line";
                const msg = `Block scalars must not be less indented than their ${src2}`;
                this.error = new PlainValue.YAMLSemanticError(this, msg);
              }
            }
            if (src[end] === "\n") {
              offset = end;
            } else {
              offset = valueEnd = PlainValue.Node.endOfLine(src, end);
            }
          }
          if (this.chomping !== Chomp.KEEP) {
            offset = src[valueEnd] ? valueEnd + 1 : valueEnd;
          }
          this.valueRange = new PlainValue.Range(start + 1, offset);
          return offset;
        }
        parse(context, start) {
          this.context = context;
          const {
            src
          } = context;
          let offset = this.parseBlockHeader(start);
          offset = PlainValue.Node.endOfWhiteSpace(src, offset);
          offset = this.parseComment(offset);
          offset = this.parseBlockValue(offset);
          return offset;
        }
        setOrigRanges(cr, offset) {
          offset = super.setOrigRanges(cr, offset);
          return this.header ? this.header.setOrigRange(cr, offset) : offset;
        }
      };
      var FlowCollection = class extends PlainValue.Node {
        constructor(type, props) {
          super(type, props);
          this.items = null;
        }
        prevNodeIsJsonLike(idx = this.items.length) {
          const node = this.items[idx - 1];
          return !!node && (node.jsonLike || node.type === PlainValue.Type.COMMENT && this.prevNodeIsJsonLike(idx - 1));
        }
        parse(context, start) {
          this.context = context;
          const {
            parseNode,
            src
          } = context;
          let {
            indent,
            lineStart
          } = context;
          let char = src[start];
          this.items = [{
            char,
            offset: start
          }];
          let offset = PlainValue.Node.endOfWhiteSpace(src, start + 1);
          char = src[offset];
          while (char && char !== "]" && char !== "}") {
            switch (char) {
              case "\n":
                {
                  lineStart = offset + 1;
                  const wsEnd = PlainValue.Node.endOfWhiteSpace(src, lineStart);
                  if (src[wsEnd] === "\n") {
                    const blankLine = new BlankLine();
                    lineStart = blankLine.parse({
                      src
                    }, lineStart);
                    this.items.push(blankLine);
                  }
                  offset = PlainValue.Node.endOfIndent(src, lineStart);
                  if (offset <= lineStart + indent) {
                    char = src[offset];
                    if (offset < lineStart + indent || char !== "]" && char !== "}") {
                      const msg = "Insufficient indentation in flow collection";
                      this.error = new PlainValue.YAMLSemanticError(this, msg);
                    }
                  }
                }
                break;
              case ",":
                {
                  this.items.push({
                    char,
                    offset
                  });
                  offset += 1;
                }
                break;
              case "#":
                {
                  const comment = new Comment();
                  offset = comment.parse({
                    src
                  }, offset);
                  this.items.push(comment);
                }
                break;
              case "?":
              case ":": {
                const next = src[offset + 1];
                if (next === "\n" || next === "	" || next === " " || next === "," || char === ":" && this.prevNodeIsJsonLike()) {
                  this.items.push({
                    char,
                    offset
                  });
                  offset += 1;
                  break;
                }
              }
              default: {
                const node = parseNode({
                  atLineStart: false,
                  inCollection: false,
                  inFlow: true,
                  indent: -1,
                  lineStart,
                  parent: this
                }, offset);
                if (!node) {
                  this.valueRange = new PlainValue.Range(start, offset);
                  return offset;
                }
                this.items.push(node);
                offset = PlainValue.Node.normalizeOffset(src, node.range.end);
              }
            }
            offset = PlainValue.Node.endOfWhiteSpace(src, offset);
            char = src[offset];
          }
          this.valueRange = new PlainValue.Range(start, offset + 1);
          if (char) {
            this.items.push({
              char,
              offset
            });
            offset = PlainValue.Node.endOfWhiteSpace(src, offset + 1);
            offset = this.parseComment(offset);
          }
          return offset;
        }
        setOrigRanges(cr, offset) {
          offset = super.setOrigRanges(cr, offset);
          this.items.forEach((node) => {
            if (node instanceof PlainValue.Node) {
              offset = node.setOrigRanges(cr, offset);
            } else if (cr.length === 0) {
              node.origOffset = node.offset;
            } else {
              let i4 = offset;
              while (i4 < cr.length) {
                if (cr[i4] > node.offset)
                  break;
                else
                  ++i4;
              }
              node.origOffset = node.offset + i4;
              offset = i4;
            }
          });
          return offset;
        }
        toString() {
          const {
            context: {
              src
            },
            items,
            range,
            value
          } = this;
          if (value != null)
            return value;
          const nodes = items.filter((item) => item instanceof PlainValue.Node);
          let str = "";
          let prevEnd = range.start;
          nodes.forEach((node) => {
            const prefix = src.slice(prevEnd, node.range.start);
            prevEnd = node.range.end;
            str += prefix + String(node);
            if (str[str.length - 1] === "\n" && src[prevEnd - 1] !== "\n" && src[prevEnd] === "\n") {
              prevEnd += 1;
            }
          });
          str += src.slice(prevEnd, range.end);
          return PlainValue.Node.addStringTerminator(src, range.end, str);
        }
      };
      var QuoteDouble = class extends PlainValue.Node {
        static endOfQuote(src, offset) {
          let ch = src[offset];
          while (ch && ch !== '"') {
            offset += ch === "\\" ? 2 : 1;
            ch = src[offset];
          }
          return offset + 1;
        }
        get strValue() {
          if (!this.valueRange || !this.context)
            return null;
          const errors = [];
          const {
            start,
            end
          } = this.valueRange;
          const {
            indent,
            src
          } = this.context;
          if (src[end - 1] !== '"')
            errors.push(new PlainValue.YAMLSyntaxError(this, 'Missing closing "quote'));
          let str = "";
          for (let i4 = start + 1; i4 < end - 1; ++i4) {
            const ch = src[i4];
            if (ch === "\n") {
              if (PlainValue.Node.atDocumentBoundary(src, i4 + 1))
                errors.push(new PlainValue.YAMLSemanticError(this, "Document boundary indicators are not allowed within string values"));
              const {
                fold,
                offset,
                error
              } = PlainValue.Node.foldNewline(src, i4, indent);
              str += fold;
              i4 = offset;
              if (error)
                errors.push(new PlainValue.YAMLSemanticError(this, "Multi-line double-quoted string needs to be sufficiently indented"));
            } else if (ch === "\\") {
              i4 += 1;
              switch (src[i4]) {
                case "0":
                  str += "\0";
                  break;
                case "a":
                  str += "\x07";
                  break;
                case "b":
                  str += "\b";
                  break;
                case "e":
                  str += "";
                  break;
                case "f":
                  str += "\f";
                  break;
                case "n":
                  str += "\n";
                  break;
                case "r":
                  str += "\r";
                  break;
                case "t":
                  str += "	";
                  break;
                case "v":
                  str += "\v";
                  break;
                case "N":
                  str += "\x85";
                  break;
                case "_":
                  str += "\xA0";
                  break;
                case "L":
                  str += "\u2028";
                  break;
                case "P":
                  str += "\u2029";
                  break;
                case " ":
                  str += " ";
                  break;
                case '"':
                  str += '"';
                  break;
                case "/":
                  str += "/";
                  break;
                case "\\":
                  str += "\\";
                  break;
                case "	":
                  str += "	";
                  break;
                case "x":
                  str += this.parseCharCode(i4 + 1, 2, errors);
                  i4 += 2;
                  break;
                case "u":
                  str += this.parseCharCode(i4 + 1, 4, errors);
                  i4 += 4;
                  break;
                case "U":
                  str += this.parseCharCode(i4 + 1, 8, errors);
                  i4 += 8;
                  break;
                case "\n":
                  while (src[i4 + 1] === " " || src[i4 + 1] === "	")
                    i4 += 1;
                  break;
                default:
                  errors.push(new PlainValue.YAMLSyntaxError(this, `Invalid escape sequence ${src.substr(i4 - 1, 2)}`));
                  str += "\\" + src[i4];
              }
            } else if (ch === " " || ch === "	") {
              const wsStart = i4;
              let next = src[i4 + 1];
              while (next === " " || next === "	") {
                i4 += 1;
                next = src[i4 + 1];
              }
              if (next !== "\n")
                str += i4 > wsStart ? src.slice(wsStart, i4 + 1) : ch;
            } else {
              str += ch;
            }
          }
          return errors.length > 0 ? {
            errors,
            str
          } : str;
        }
        parseCharCode(offset, length, errors) {
          const {
            src
          } = this.context;
          const cc = src.substr(offset, length);
          const ok = cc.length === length && /^[0-9a-fA-F]+$/.test(cc);
          const code = ok ? parseInt(cc, 16) : NaN;
          if (isNaN(code)) {
            errors.push(new PlainValue.YAMLSyntaxError(this, `Invalid escape sequence ${src.substr(offset - 2, length + 2)}`));
            return src.substr(offset - 2, length + 2);
          }
          return String.fromCodePoint(code);
        }
        parse(context, start) {
          this.context = context;
          const {
            src
          } = context;
          let offset = QuoteDouble.endOfQuote(src, start + 1);
          this.valueRange = new PlainValue.Range(start, offset);
          offset = PlainValue.Node.endOfWhiteSpace(src, offset);
          offset = this.parseComment(offset);
          return offset;
        }
      };
      var QuoteSingle = class extends PlainValue.Node {
        static endOfQuote(src, offset) {
          let ch = src[offset];
          while (ch) {
            if (ch === "'") {
              if (src[offset + 1] !== "'")
                break;
              ch = src[offset += 2];
            } else {
              ch = src[offset += 1];
            }
          }
          return offset + 1;
        }
        get strValue() {
          if (!this.valueRange || !this.context)
            return null;
          const errors = [];
          const {
            start,
            end
          } = this.valueRange;
          const {
            indent,
            src
          } = this.context;
          if (src[end - 1] !== "'")
            errors.push(new PlainValue.YAMLSyntaxError(this, "Missing closing 'quote"));
          let str = "";
          for (let i4 = start + 1; i4 < end - 1; ++i4) {
            const ch = src[i4];
            if (ch === "\n") {
              if (PlainValue.Node.atDocumentBoundary(src, i4 + 1))
                errors.push(new PlainValue.YAMLSemanticError(this, "Document boundary indicators are not allowed within string values"));
              const {
                fold,
                offset,
                error
              } = PlainValue.Node.foldNewline(src, i4, indent);
              str += fold;
              i4 = offset;
              if (error)
                errors.push(new PlainValue.YAMLSemanticError(this, "Multi-line single-quoted string needs to be sufficiently indented"));
            } else if (ch === "'") {
              str += ch;
              i4 += 1;
              if (src[i4] !== "'")
                errors.push(new PlainValue.YAMLSyntaxError(this, "Unescaped single quote? This should not happen."));
            } else if (ch === " " || ch === "	") {
              const wsStart = i4;
              let next = src[i4 + 1];
              while (next === " " || next === "	") {
                i4 += 1;
                next = src[i4 + 1];
              }
              if (next !== "\n")
                str += i4 > wsStart ? src.slice(wsStart, i4 + 1) : ch;
            } else {
              str += ch;
            }
          }
          return errors.length > 0 ? {
            errors,
            str
          } : str;
        }
        parse(context, start) {
          this.context = context;
          const {
            src
          } = context;
          let offset = QuoteSingle.endOfQuote(src, start + 1);
          this.valueRange = new PlainValue.Range(start, offset);
          offset = PlainValue.Node.endOfWhiteSpace(src, offset);
          offset = this.parseComment(offset);
          return offset;
        }
      };
      function createNewNode(type, props) {
        switch (type) {
          case PlainValue.Type.ALIAS:
            return new Alias(type, props);
          case PlainValue.Type.BLOCK_FOLDED:
          case PlainValue.Type.BLOCK_LITERAL:
            return new BlockValue(type, props);
          case PlainValue.Type.FLOW_MAP:
          case PlainValue.Type.FLOW_SEQ:
            return new FlowCollection(type, props);
          case PlainValue.Type.MAP_KEY:
          case PlainValue.Type.MAP_VALUE:
          case PlainValue.Type.SEQ_ITEM:
            return new CollectionItem(type, props);
          case PlainValue.Type.COMMENT:
          case PlainValue.Type.PLAIN:
            return new PlainValue.PlainValue(type, props);
          case PlainValue.Type.QUOTE_DOUBLE:
            return new QuoteDouble(type, props);
          case PlainValue.Type.QUOTE_SINGLE:
            return new QuoteSingle(type, props);
          default:
            return null;
        }
      }
      var ParseContext = class {
        static parseType(src, offset, inFlow) {
          switch (src[offset]) {
            case "*":
              return PlainValue.Type.ALIAS;
            case ">":
              return PlainValue.Type.BLOCK_FOLDED;
            case "|":
              return PlainValue.Type.BLOCK_LITERAL;
            case "{":
              return PlainValue.Type.FLOW_MAP;
            case "[":
              return PlainValue.Type.FLOW_SEQ;
            case "?":
              return !inFlow && PlainValue.Node.atBlank(src, offset + 1, true) ? PlainValue.Type.MAP_KEY : PlainValue.Type.PLAIN;
            case ":":
              return !inFlow && PlainValue.Node.atBlank(src, offset + 1, true) ? PlainValue.Type.MAP_VALUE : PlainValue.Type.PLAIN;
            case "-":
              return !inFlow && PlainValue.Node.atBlank(src, offset + 1, true) ? PlainValue.Type.SEQ_ITEM : PlainValue.Type.PLAIN;
            case '"':
              return PlainValue.Type.QUOTE_DOUBLE;
            case "'":
              return PlainValue.Type.QUOTE_SINGLE;
            default:
              return PlainValue.Type.PLAIN;
          }
        }
        constructor(orig = {}, {
          atLineStart,
          inCollection,
          inFlow,
          indent,
          lineStart,
          parent
        } = {}) {
          PlainValue._defineProperty(this, "parseNode", (overlay, start) => {
            if (PlainValue.Node.atDocumentBoundary(this.src, start))
              return null;
            const context = new ParseContext(this, overlay);
            const {
              props,
              type,
              valueStart
            } = context.parseProps(start);
            const node = createNewNode(type, props);
            let offset = node.parse(context, valueStart);
            node.range = new PlainValue.Range(start, offset);
            if (offset <= start) {
              node.error = new Error(`Node#parse consumed no characters`);
              node.error.parseEnd = offset;
              node.error.source = node;
              node.range.end = start + 1;
            }
            if (context.nodeStartsCollection(node)) {
              if (!node.error && !context.atLineStart && context.parent.type === PlainValue.Type.DOCUMENT) {
                node.error = new PlainValue.YAMLSyntaxError(node, "Block collection must not have preceding content here (e.g. directives-end indicator)");
              }
              const collection = new Collection(node);
              offset = collection.parse(new ParseContext(context), offset);
              collection.range = new PlainValue.Range(start, offset);
              return collection;
            }
            return node;
          });
          this.atLineStart = atLineStart != null ? atLineStart : orig.atLineStart || false;
          this.inCollection = inCollection != null ? inCollection : orig.inCollection || false;
          this.inFlow = inFlow != null ? inFlow : orig.inFlow || false;
          this.indent = indent != null ? indent : orig.indent;
          this.lineStart = lineStart != null ? lineStart : orig.lineStart;
          this.parent = parent != null ? parent : orig.parent || {};
          this.root = orig.root;
          this.src = orig.src;
        }
        nodeStartsCollection(node) {
          const {
            inCollection,
            inFlow,
            src
          } = this;
          if (inCollection || inFlow)
            return false;
          if (node instanceof CollectionItem)
            return true;
          let offset = node.range.end;
          if (src[offset] === "\n" || src[offset - 1] === "\n")
            return false;
          offset = PlainValue.Node.endOfWhiteSpace(src, offset);
          return src[offset] === ":";
        }
        parseProps(offset) {
          const {
            inFlow,
            parent,
            src
          } = this;
          const props = [];
          let lineHasProps = false;
          offset = this.atLineStart ? PlainValue.Node.endOfIndent(src, offset) : PlainValue.Node.endOfWhiteSpace(src, offset);
          let ch = src[offset];
          while (ch === PlainValue.Char.ANCHOR || ch === PlainValue.Char.COMMENT || ch === PlainValue.Char.TAG || ch === "\n") {
            if (ch === "\n") {
              let inEnd = offset;
              let lineStart;
              do {
                lineStart = inEnd + 1;
                inEnd = PlainValue.Node.endOfIndent(src, lineStart);
              } while (src[inEnd] === "\n");
              const indentDiff = inEnd - (lineStart + this.indent);
              const noIndicatorAsIndent = parent.type === PlainValue.Type.SEQ_ITEM && parent.context.atLineStart;
              if (src[inEnd] !== "#" && !PlainValue.Node.nextNodeIsIndented(src[inEnd], indentDiff, !noIndicatorAsIndent))
                break;
              this.atLineStart = true;
              this.lineStart = lineStart;
              lineHasProps = false;
              offset = inEnd;
            } else if (ch === PlainValue.Char.COMMENT) {
              const end = PlainValue.Node.endOfLine(src, offset + 1);
              props.push(new PlainValue.Range(offset, end));
              offset = end;
            } else {
              let end = PlainValue.Node.endOfIdentifier(src, offset + 1);
              if (ch === PlainValue.Char.TAG && src[end] === "," && /^[a-zA-Z0-9-]+\.[a-zA-Z0-9-]+,\d\d\d\d(-\d\d){0,2}\/\S/.test(src.slice(offset + 1, end + 13))) {
                end = PlainValue.Node.endOfIdentifier(src, end + 5);
              }
              props.push(new PlainValue.Range(offset, end));
              lineHasProps = true;
              offset = PlainValue.Node.endOfWhiteSpace(src, end);
            }
            ch = src[offset];
          }
          if (lineHasProps && ch === ":" && PlainValue.Node.atBlank(src, offset + 1, true))
            offset -= 1;
          const type = ParseContext.parseType(src, offset, inFlow);
          return {
            props,
            type,
            valueStart: offset
          };
        }
      };
      function parse(src) {
        const cr = [];
        if (src.indexOf("\r") !== -1) {
          src = src.replace(/\r\n?/g, (match, offset2) => {
            if (match.length > 1)
              cr.push(offset2);
            return "\n";
          });
        }
        const documents = [];
        let offset = 0;
        do {
          const doc = new Document();
          const context = new ParseContext({
            src
          });
          offset = doc.parse(context, offset);
          documents.push(doc);
        } while (offset < src.length);
        documents.setOrigRanges = () => {
          if (cr.length === 0)
            return false;
          for (let i4 = 1; i4 < cr.length; ++i4)
            cr[i4] -= i4;
          let crOffset = 0;
          for (let i4 = 0; i4 < documents.length; ++i4) {
            crOffset = documents[i4].setOrigRanges(cr, crOffset);
          }
          cr.splice(0, cr.length);
          return true;
        };
        documents.toString = () => documents.join("...\n");
        return documents;
      }
      exports.parse = parse;
    }
  });

  // node_modules/yaml/dist/resolveSeq-d03cb037.js
  var require_resolveSeq_d03cb037 = __commonJS({
    "node_modules/yaml/dist/resolveSeq-d03cb037.js"(exports) {
      init_preact_shim();
      "use strict";
      var PlainValue = require_PlainValue_ec8e588e();
      function addCommentBefore(str, indent, comment) {
        if (!comment)
          return str;
        const cc = comment.replace(/[\s\S]^/gm, `$&${indent}#`);
        return `#${cc}
${indent}${str}`;
      }
      function addComment(str, indent, comment) {
        return !comment ? str : comment.indexOf("\n") === -1 ? `${str} #${comment}` : `${str}
` + comment.replace(/^/gm, `${indent || ""}#`);
      }
      var Node = class {
      };
      function toJSON(value, arg, ctx) {
        if (Array.isArray(value))
          return value.map((v3, i4) => toJSON(v3, String(i4), ctx));
        if (value && typeof value.toJSON === "function") {
          const anchor = ctx && ctx.anchors && ctx.anchors.get(value);
          if (anchor)
            ctx.onCreate = (res2) => {
              anchor.res = res2;
              delete ctx.onCreate;
            };
          const res = value.toJSON(arg, ctx);
          if (anchor && ctx.onCreate)
            ctx.onCreate(res);
          return res;
        }
        if ((!ctx || !ctx.keep) && typeof value === "bigint")
          return Number(value);
        return value;
      }
      var Scalar = class extends Node {
        constructor(value) {
          super();
          this.value = value;
        }
        toJSON(arg, ctx) {
          return ctx && ctx.keep ? this.value : toJSON(this.value, arg, ctx);
        }
        toString() {
          return String(this.value);
        }
      };
      function collectionFromPath(schema, path, value) {
        let v3 = value;
        for (let i4 = path.length - 1; i4 >= 0; --i4) {
          const k3 = path[i4];
          if (Number.isInteger(k3) && k3 >= 0) {
            const a4 = [];
            a4[k3] = v3;
            v3 = a4;
          } else {
            const o4 = {};
            Object.defineProperty(o4, k3, {
              value: v3,
              writable: true,
              enumerable: true,
              configurable: true
            });
            v3 = o4;
          }
        }
        return schema.createNode(v3, false);
      }
      var isEmptyPath = (path) => path == null || typeof path === "object" && path[Symbol.iterator]().next().done;
      var Collection = class extends Node {
        constructor(schema) {
          super();
          PlainValue._defineProperty(this, "items", []);
          this.schema = schema;
        }
        addIn(path, value) {
          if (isEmptyPath(path))
            this.add(value);
          else {
            const [key, ...rest] = path;
            const node = this.get(key, true);
            if (node instanceof Collection)
              node.addIn(rest, value);
            else if (node === void 0 && this.schema)
              this.set(key, collectionFromPath(this.schema, rest, value));
            else
              throw new Error(`Expected YAML collection at ${key}. Remaining path: ${rest}`);
          }
        }
        deleteIn([key, ...rest]) {
          if (rest.length === 0)
            return this.delete(key);
          const node = this.get(key, true);
          if (node instanceof Collection)
            return node.deleteIn(rest);
          else
            throw new Error(`Expected YAML collection at ${key}. Remaining path: ${rest}`);
        }
        getIn([key, ...rest], keepScalar) {
          const node = this.get(key, true);
          if (rest.length === 0)
            return !keepScalar && node instanceof Scalar ? node.value : node;
          else
            return node instanceof Collection ? node.getIn(rest, keepScalar) : void 0;
        }
        hasAllNullValues() {
          return this.items.every((node) => {
            if (!node || node.type !== "PAIR")
              return false;
            const n2 = node.value;
            return n2 == null || n2 instanceof Scalar && n2.value == null && !n2.commentBefore && !n2.comment && !n2.tag;
          });
        }
        hasIn([key, ...rest]) {
          if (rest.length === 0)
            return this.has(key);
          const node = this.get(key, true);
          return node instanceof Collection ? node.hasIn(rest) : false;
        }
        setIn([key, ...rest], value) {
          if (rest.length === 0) {
            this.set(key, value);
          } else {
            const node = this.get(key, true);
            if (node instanceof Collection)
              node.setIn(rest, value);
            else if (node === void 0 && this.schema)
              this.set(key, collectionFromPath(this.schema, rest, value));
            else
              throw new Error(`Expected YAML collection at ${key}. Remaining path: ${rest}`);
          }
        }
        toJSON() {
          return null;
        }
        toString(ctx, {
          blockItem,
          flowChars,
          isMap,
          itemIndent
        }, onComment, onChompKeep) {
          const {
            indent,
            indentStep,
            stringify
          } = ctx;
          const inFlow = this.type === PlainValue.Type.FLOW_MAP || this.type === PlainValue.Type.FLOW_SEQ || ctx.inFlow;
          if (inFlow)
            itemIndent += indentStep;
          const allNullValues = isMap && this.hasAllNullValues();
          ctx = Object.assign({}, ctx, {
            allNullValues,
            indent: itemIndent,
            inFlow,
            type: null
          });
          let chompKeep = false;
          let hasItemWithNewLine = false;
          const nodes = this.items.reduce((nodes2, item, i4) => {
            let comment;
            if (item) {
              if (!chompKeep && item.spaceBefore)
                nodes2.push({
                  type: "comment",
                  str: ""
                });
              if (item.commentBefore)
                item.commentBefore.match(/^.*$/gm).forEach((line) => {
                  nodes2.push({
                    type: "comment",
                    str: `#${line}`
                  });
                });
              if (item.comment)
                comment = item.comment;
              if (inFlow && (!chompKeep && item.spaceBefore || item.commentBefore || item.comment || item.key && (item.key.commentBefore || item.key.comment) || item.value && (item.value.commentBefore || item.value.comment)))
                hasItemWithNewLine = true;
            }
            chompKeep = false;
            let str2 = stringify(item, ctx, () => comment = null, () => chompKeep = true);
            if (inFlow && !hasItemWithNewLine && str2.includes("\n"))
              hasItemWithNewLine = true;
            if (inFlow && i4 < this.items.length - 1)
              str2 += ",";
            str2 = addComment(str2, itemIndent, comment);
            if (chompKeep && (comment || inFlow))
              chompKeep = false;
            nodes2.push({
              type: "item",
              str: str2
            });
            return nodes2;
          }, []);
          let str;
          if (nodes.length === 0) {
            str = flowChars.start + flowChars.end;
          } else if (inFlow) {
            const {
              start,
              end
            } = flowChars;
            const strings = nodes.map((n2) => n2.str);
            if (hasItemWithNewLine || strings.reduce((sum, str2) => sum + str2.length + 2, 2) > Collection.maxFlowStringSingleLineLength) {
              str = start;
              for (const s4 of strings) {
                str += s4 ? `
${indentStep}${indent}${s4}` : "\n";
              }
              str += `
${indent}${end}`;
            } else {
              str = `${start} ${strings.join(" ")} ${end}`;
            }
          } else {
            const strings = nodes.map(blockItem);
            str = strings.shift();
            for (const s4 of strings)
              str += s4 ? `
${indent}${s4}` : "\n";
          }
          if (this.comment) {
            str += "\n" + this.comment.replace(/^/gm, `${indent}#`);
            if (onComment)
              onComment();
          } else if (chompKeep && onChompKeep)
            onChompKeep();
          return str;
        }
      };
      PlainValue._defineProperty(Collection, "maxFlowStringSingleLineLength", 60);
      function asItemIndex(key) {
        let idx = key instanceof Scalar ? key.value : key;
        if (idx && typeof idx === "string")
          idx = Number(idx);
        return Number.isInteger(idx) && idx >= 0 ? idx : null;
      }
      var YAMLSeq = class extends Collection {
        add(value) {
          this.items.push(value);
        }
        delete(key) {
          const idx = asItemIndex(key);
          if (typeof idx !== "number")
            return false;
          const del = this.items.splice(idx, 1);
          return del.length > 0;
        }
        get(key, keepScalar) {
          const idx = asItemIndex(key);
          if (typeof idx !== "number")
            return void 0;
          const it = this.items[idx];
          return !keepScalar && it instanceof Scalar ? it.value : it;
        }
        has(key) {
          const idx = asItemIndex(key);
          return typeof idx === "number" && idx < this.items.length;
        }
        set(key, value) {
          const idx = asItemIndex(key);
          if (typeof idx !== "number")
            throw new Error(`Expected a valid index, not ${key}.`);
          this.items[idx] = value;
        }
        toJSON(_3, ctx) {
          const seq = [];
          if (ctx && ctx.onCreate)
            ctx.onCreate(seq);
          let i4 = 0;
          for (const item of this.items)
            seq.push(toJSON(item, String(i4++), ctx));
          return seq;
        }
        toString(ctx, onComment, onChompKeep) {
          if (!ctx)
            return JSON.stringify(this);
          return super.toString(ctx, {
            blockItem: (n2) => n2.type === "comment" ? n2.str : `- ${n2.str}`,
            flowChars: {
              start: "[",
              end: "]"
            },
            isMap: false,
            itemIndent: (ctx.indent || "") + "  "
          }, onComment, onChompKeep);
        }
      };
      var stringifyKey = (key, jsKey, ctx) => {
        if (jsKey === null)
          return "";
        if (typeof jsKey !== "object")
          return String(jsKey);
        if (key instanceof Node && ctx && ctx.doc)
          return key.toString({
            anchors: Object.create(null),
            doc: ctx.doc,
            indent: "",
            indentStep: ctx.indentStep,
            inFlow: true,
            inStringifyKey: true,
            stringify: ctx.stringify
          });
        return JSON.stringify(jsKey);
      };
      var Pair = class extends Node {
        constructor(key, value = null) {
          super();
          this.key = key;
          this.value = value;
          this.type = Pair.Type.PAIR;
        }
        get commentBefore() {
          return this.key instanceof Node ? this.key.commentBefore : void 0;
        }
        set commentBefore(cb) {
          if (this.key == null)
            this.key = new Scalar(null);
          if (this.key instanceof Node)
            this.key.commentBefore = cb;
          else {
            const msg = "Pair.commentBefore is an alias for Pair.key.commentBefore. To set it, the key must be a Node.";
            throw new Error(msg);
          }
        }
        addToJSMap(ctx, map) {
          const key = toJSON(this.key, "", ctx);
          if (map instanceof Map) {
            const value = toJSON(this.value, key, ctx);
            map.set(key, value);
          } else if (map instanceof Set) {
            map.add(key);
          } else {
            const stringKey = stringifyKey(this.key, key, ctx);
            const value = toJSON(this.value, stringKey, ctx);
            if (stringKey in map)
              Object.defineProperty(map, stringKey, {
                value,
                writable: true,
                enumerable: true,
                configurable: true
              });
            else
              map[stringKey] = value;
          }
          return map;
        }
        toJSON(_3, ctx) {
          const pair = ctx && ctx.mapAsMap ? new Map() : {};
          return this.addToJSMap(ctx, pair);
        }
        toString(ctx, onComment, onChompKeep) {
          if (!ctx || !ctx.doc)
            return JSON.stringify(this);
          const {
            indent: indentSize,
            indentSeq,
            simpleKeys
          } = ctx.doc.options;
          let {
            key,
            value
          } = this;
          let keyComment = key instanceof Node && key.comment;
          if (simpleKeys) {
            if (keyComment) {
              throw new Error("With simple keys, key nodes cannot have comments");
            }
            if (key instanceof Collection) {
              const msg = "With simple keys, collection cannot be used as a key value";
              throw new Error(msg);
            }
          }
          let explicitKey = !simpleKeys && (!key || keyComment || (key instanceof Node ? key instanceof Collection || key.type === PlainValue.Type.BLOCK_FOLDED || key.type === PlainValue.Type.BLOCK_LITERAL : typeof key === "object"));
          const {
            doc,
            indent,
            indentStep,
            stringify
          } = ctx;
          ctx = Object.assign({}, ctx, {
            implicitKey: !explicitKey,
            indent: indent + indentStep
          });
          let chompKeep = false;
          let str = stringify(key, ctx, () => keyComment = null, () => chompKeep = true);
          str = addComment(str, ctx.indent, keyComment);
          if (!explicitKey && str.length > 1024) {
            if (simpleKeys)
              throw new Error("With simple keys, single line scalar must not span more than 1024 characters");
            explicitKey = true;
          }
          if (ctx.allNullValues && !simpleKeys) {
            if (this.comment) {
              str = addComment(str, ctx.indent, this.comment);
              if (onComment)
                onComment();
            } else if (chompKeep && !keyComment && onChompKeep)
              onChompKeep();
            return ctx.inFlow && !explicitKey ? str : `? ${str}`;
          }
          str = explicitKey ? `? ${str}
${indent}:` : `${str}:`;
          if (this.comment) {
            str = addComment(str, ctx.indent, this.comment);
            if (onComment)
              onComment();
          }
          let vcb = "";
          let valueComment = null;
          if (value instanceof Node) {
            if (value.spaceBefore)
              vcb = "\n";
            if (value.commentBefore) {
              const cs = value.commentBefore.replace(/^/gm, `${ctx.indent}#`);
              vcb += `
${cs}`;
            }
            valueComment = value.comment;
          } else if (value && typeof value === "object") {
            value = doc.schema.createNode(value, true);
          }
          ctx.implicitKey = false;
          if (!explicitKey && !this.comment && value instanceof Scalar)
            ctx.indentAtStart = str.length + 1;
          chompKeep = false;
          if (!indentSeq && indentSize >= 2 && !ctx.inFlow && !explicitKey && value instanceof YAMLSeq && value.type !== PlainValue.Type.FLOW_SEQ && !value.tag && !doc.anchors.getName(value)) {
            ctx.indent = ctx.indent.substr(2);
          }
          const valueStr = stringify(value, ctx, () => valueComment = null, () => chompKeep = true);
          let ws = " ";
          if (vcb || this.comment) {
            ws = `${vcb}
${ctx.indent}`;
          } else if (!explicitKey && value instanceof Collection) {
            const flow = valueStr[0] === "[" || valueStr[0] === "{";
            if (!flow || valueStr.includes("\n"))
              ws = `
${ctx.indent}`;
          } else if (valueStr[0] === "\n")
            ws = "";
          if (chompKeep && !valueComment && onChompKeep)
            onChompKeep();
          return addComment(str + ws + valueStr, ctx.indent, valueComment);
        }
      };
      PlainValue._defineProperty(Pair, "Type", {
        PAIR: "PAIR",
        MERGE_PAIR: "MERGE_PAIR"
      });
      var getAliasCount = (node, anchors) => {
        if (node instanceof Alias) {
          const anchor = anchors.get(node.source);
          return anchor.count * anchor.aliasCount;
        } else if (node instanceof Collection) {
          let count = 0;
          for (const item of node.items) {
            const c4 = getAliasCount(item, anchors);
            if (c4 > count)
              count = c4;
          }
          return count;
        } else if (node instanceof Pair) {
          const kc = getAliasCount(node.key, anchors);
          const vc = getAliasCount(node.value, anchors);
          return Math.max(kc, vc);
        }
        return 1;
      };
      var Alias = class extends Node {
        static stringify({
          range,
          source
        }, {
          anchors,
          doc,
          implicitKey,
          inStringifyKey
        }) {
          let anchor = Object.keys(anchors).find((a4) => anchors[a4] === source);
          if (!anchor && inStringifyKey)
            anchor = doc.anchors.getName(source) || doc.anchors.newName();
          if (anchor)
            return `*${anchor}${implicitKey ? " " : ""}`;
          const msg = doc.anchors.getName(source) ? "Alias node must be after source node" : "Source node not found for alias node";
          throw new Error(`${msg} [${range}]`);
        }
        constructor(source) {
          super();
          this.source = source;
          this.type = PlainValue.Type.ALIAS;
        }
        set tag(t3) {
          throw new Error("Alias nodes cannot have tags");
        }
        toJSON(arg, ctx) {
          if (!ctx)
            return toJSON(this.source, arg, ctx);
          const {
            anchors,
            maxAliasCount
          } = ctx;
          const anchor = anchors.get(this.source);
          if (!anchor || anchor.res === void 0) {
            const msg = "This should not happen: Alias anchor was not resolved?";
            if (this.cstNode)
              throw new PlainValue.YAMLReferenceError(this.cstNode, msg);
            else
              throw new ReferenceError(msg);
          }
          if (maxAliasCount >= 0) {
            anchor.count += 1;
            if (anchor.aliasCount === 0)
              anchor.aliasCount = getAliasCount(this.source, anchors);
            if (anchor.count * anchor.aliasCount > maxAliasCount) {
              const msg = "Excessive alias count indicates a resource exhaustion attack";
              if (this.cstNode)
                throw new PlainValue.YAMLReferenceError(this.cstNode, msg);
              else
                throw new ReferenceError(msg);
            }
          }
          return anchor.res;
        }
        toString(ctx) {
          return Alias.stringify(this, ctx);
        }
      };
      PlainValue._defineProperty(Alias, "default", true);
      function findPair(items, key) {
        const k3 = key instanceof Scalar ? key.value : key;
        for (const it of items) {
          if (it instanceof Pair) {
            if (it.key === key || it.key === k3)
              return it;
            if (it.key && it.key.value === k3)
              return it;
          }
        }
        return void 0;
      }
      var YAMLMap = class extends Collection {
        add(pair, overwrite) {
          if (!pair)
            pair = new Pair(pair);
          else if (!(pair instanceof Pair))
            pair = new Pair(pair.key || pair, pair.value);
          const prev = findPair(this.items, pair.key);
          const sortEntries = this.schema && this.schema.sortMapEntries;
          if (prev) {
            if (overwrite)
              prev.value = pair.value;
            else
              throw new Error(`Key ${pair.key} already set`);
          } else if (sortEntries) {
            const i4 = this.items.findIndex((item) => sortEntries(pair, item) < 0);
            if (i4 === -1)
              this.items.push(pair);
            else
              this.items.splice(i4, 0, pair);
          } else {
            this.items.push(pair);
          }
        }
        delete(key) {
          const it = findPair(this.items, key);
          if (!it)
            return false;
          const del = this.items.splice(this.items.indexOf(it), 1);
          return del.length > 0;
        }
        get(key, keepScalar) {
          const it = findPair(this.items, key);
          const node = it && it.value;
          return !keepScalar && node instanceof Scalar ? node.value : node;
        }
        has(key) {
          return !!findPair(this.items, key);
        }
        set(key, value) {
          this.add(new Pair(key, value), true);
        }
        toJSON(_3, ctx, Type) {
          const map = Type ? new Type() : ctx && ctx.mapAsMap ? new Map() : {};
          if (ctx && ctx.onCreate)
            ctx.onCreate(map);
          for (const item of this.items)
            item.addToJSMap(ctx, map);
          return map;
        }
        toString(ctx, onComment, onChompKeep) {
          if (!ctx)
            return JSON.stringify(this);
          for (const item of this.items) {
            if (!(item instanceof Pair))
              throw new Error(`Map items must all be pairs; found ${JSON.stringify(item)} instead`);
          }
          return super.toString(ctx, {
            blockItem: (n2) => n2.str,
            flowChars: {
              start: "{",
              end: "}"
            },
            isMap: true,
            itemIndent: ctx.indent || ""
          }, onComment, onChompKeep);
        }
      };
      var MERGE_KEY = "<<";
      var Merge = class extends Pair {
        constructor(pair) {
          if (pair instanceof Pair) {
            let seq = pair.value;
            if (!(seq instanceof YAMLSeq)) {
              seq = new YAMLSeq();
              seq.items.push(pair.value);
              seq.range = pair.value.range;
            }
            super(pair.key, seq);
            this.range = pair.range;
          } else {
            super(new Scalar(MERGE_KEY), new YAMLSeq());
          }
          this.type = Pair.Type.MERGE_PAIR;
        }
        addToJSMap(ctx, map) {
          for (const {
            source
          } of this.value.items) {
            if (!(source instanceof YAMLMap))
              throw new Error("Merge sources must be maps");
            const srcMap = source.toJSON(null, ctx, Map);
            for (const [key, value] of srcMap) {
              if (map instanceof Map) {
                if (!map.has(key))
                  map.set(key, value);
              } else if (map instanceof Set) {
                map.add(key);
              } else if (!Object.prototype.hasOwnProperty.call(map, key)) {
                Object.defineProperty(map, key, {
                  value,
                  writable: true,
                  enumerable: true,
                  configurable: true
                });
              }
            }
          }
          return map;
        }
        toString(ctx, onComment) {
          const seq = this.value;
          if (seq.items.length > 1)
            return super.toString(ctx, onComment);
          this.value = seq.items[0];
          const str = super.toString(ctx, onComment);
          this.value = seq;
          return str;
        }
      };
      var binaryOptions = {
        defaultType: PlainValue.Type.BLOCK_LITERAL,
        lineWidth: 76
      };
      var boolOptions = {
        trueStr: "true",
        falseStr: "false"
      };
      var intOptions = {
        asBigInt: false
      };
      var nullOptions = {
        nullStr: "null"
      };
      var strOptions = {
        defaultType: PlainValue.Type.PLAIN,
        doubleQuoted: {
          jsonEncoding: false,
          minMultiLineLength: 40
        },
        fold: {
          lineWidth: 80,
          minContentWidth: 20
        }
      };
      function resolveScalar(str, tags, scalarFallback) {
        for (const {
          format,
          test,
          resolve
        } of tags) {
          if (test) {
            const match = str.match(test);
            if (match) {
              let res = resolve.apply(null, match);
              if (!(res instanceof Scalar))
                res = new Scalar(res);
              if (format)
                res.format = format;
              return res;
            }
          }
        }
        if (scalarFallback)
          str = scalarFallback(str);
        return new Scalar(str);
      }
      var FOLD_FLOW = "flow";
      var FOLD_BLOCK = "block";
      var FOLD_QUOTED = "quoted";
      var consumeMoreIndentedLines = (text, i4) => {
        let ch = text[i4 + 1];
        while (ch === " " || ch === "	") {
          do {
            ch = text[i4 += 1];
          } while (ch && ch !== "\n");
          ch = text[i4 + 1];
        }
        return i4;
      };
      function foldFlowLines(text, indent, mode, {
        indentAtStart,
        lineWidth = 80,
        minContentWidth = 20,
        onFold,
        onOverflow
      }) {
        if (!lineWidth || lineWidth < 0)
          return text;
        const endStep = Math.max(1 + minContentWidth, 1 + lineWidth - indent.length);
        if (text.length <= endStep)
          return text;
        const folds = [];
        const escapedFolds = {};
        let end = lineWidth - indent.length;
        if (typeof indentAtStart === "number") {
          if (indentAtStart > lineWidth - Math.max(2, minContentWidth))
            folds.push(0);
          else
            end = lineWidth - indentAtStart;
        }
        let split = void 0;
        let prev = void 0;
        let overflow = false;
        let i4 = -1;
        let escStart = -1;
        let escEnd = -1;
        if (mode === FOLD_BLOCK) {
          i4 = consumeMoreIndentedLines(text, i4);
          if (i4 !== -1)
            end = i4 + endStep;
        }
        for (let ch; ch = text[i4 += 1]; ) {
          if (mode === FOLD_QUOTED && ch === "\\") {
            escStart = i4;
            switch (text[i4 + 1]) {
              case "x":
                i4 += 3;
                break;
              case "u":
                i4 += 5;
                break;
              case "U":
                i4 += 9;
                break;
              default:
                i4 += 1;
            }
            escEnd = i4;
          }
          if (ch === "\n") {
            if (mode === FOLD_BLOCK)
              i4 = consumeMoreIndentedLines(text, i4);
            end = i4 + endStep;
            split = void 0;
          } else {
            if (ch === " " && prev && prev !== " " && prev !== "\n" && prev !== "	") {
              const next = text[i4 + 1];
              if (next && next !== " " && next !== "\n" && next !== "	")
                split = i4;
            }
            if (i4 >= end) {
              if (split) {
                folds.push(split);
                end = split + endStep;
                split = void 0;
              } else if (mode === FOLD_QUOTED) {
                while (prev === " " || prev === "	") {
                  prev = ch;
                  ch = text[i4 += 1];
                  overflow = true;
                }
                const j4 = i4 > escEnd + 1 ? i4 - 2 : escStart - 1;
                if (escapedFolds[j4])
                  return text;
                folds.push(j4);
                escapedFolds[j4] = true;
                end = j4 + endStep;
                split = void 0;
              } else {
                overflow = true;
              }
            }
          }
          prev = ch;
        }
        if (overflow && onOverflow)
          onOverflow();
        if (folds.length === 0)
          return text;
        if (onFold)
          onFold();
        let res = text.slice(0, folds[0]);
        for (let i5 = 0; i5 < folds.length; ++i5) {
          const fold = folds[i5];
          const end2 = folds[i5 + 1] || text.length;
          if (fold === 0)
            res = `
${indent}${text.slice(0, end2)}`;
          else {
            if (mode === FOLD_QUOTED && escapedFolds[fold])
              res += `${text[fold]}\\`;
            res += `
${indent}${text.slice(fold + 1, end2)}`;
          }
        }
        return res;
      }
      var getFoldOptions = ({
        indentAtStart
      }) => indentAtStart ? Object.assign({
        indentAtStart
      }, strOptions.fold) : strOptions.fold;
      var containsDocumentMarker = (str) => /^(%|---|\.\.\.)/m.test(str);
      function lineLengthOverLimit(str, lineWidth, indentLength) {
        if (!lineWidth || lineWidth < 0)
          return false;
        const limit = lineWidth - indentLength;
        const strLen = str.length;
        if (strLen <= limit)
          return false;
        for (let i4 = 0, start = 0; i4 < strLen; ++i4) {
          if (str[i4] === "\n") {
            if (i4 - start > limit)
              return true;
            start = i4 + 1;
            if (strLen - start <= limit)
              return false;
          }
        }
        return true;
      }
      function doubleQuotedString(value, ctx) {
        const {
          implicitKey
        } = ctx;
        const {
          jsonEncoding,
          minMultiLineLength
        } = strOptions.doubleQuoted;
        const json = JSON.stringify(value);
        if (jsonEncoding)
          return json;
        const indent = ctx.indent || (containsDocumentMarker(value) ? "  " : "");
        let str = "";
        let start = 0;
        for (let i4 = 0, ch = json[i4]; ch; ch = json[++i4]) {
          if (ch === " " && json[i4 + 1] === "\\" && json[i4 + 2] === "n") {
            str += json.slice(start, i4) + "\\ ";
            i4 += 1;
            start = i4;
            ch = "\\";
          }
          if (ch === "\\")
            switch (json[i4 + 1]) {
              case "u":
                {
                  str += json.slice(start, i4);
                  const code = json.substr(i4 + 2, 4);
                  switch (code) {
                    case "0000":
                      str += "\\0";
                      break;
                    case "0007":
                      str += "\\a";
                      break;
                    case "000b":
                      str += "\\v";
                      break;
                    case "001b":
                      str += "\\e";
                      break;
                    case "0085":
                      str += "\\N";
                      break;
                    case "00a0":
                      str += "\\_";
                      break;
                    case "2028":
                      str += "\\L";
                      break;
                    case "2029":
                      str += "\\P";
                      break;
                    default:
                      if (code.substr(0, 2) === "00")
                        str += "\\x" + code.substr(2);
                      else
                        str += json.substr(i4, 6);
                  }
                  i4 += 5;
                  start = i4 + 1;
                }
                break;
              case "n":
                if (implicitKey || json[i4 + 2] === '"' || json.length < minMultiLineLength) {
                  i4 += 1;
                } else {
                  str += json.slice(start, i4) + "\n\n";
                  while (json[i4 + 2] === "\\" && json[i4 + 3] === "n" && json[i4 + 4] !== '"') {
                    str += "\n";
                    i4 += 2;
                  }
                  str += indent;
                  if (json[i4 + 2] === " ")
                    str += "\\";
                  i4 += 1;
                  start = i4 + 1;
                }
                break;
              default:
                i4 += 1;
            }
        }
        str = start ? str + json.slice(start) : json;
        return implicitKey ? str : foldFlowLines(str, indent, FOLD_QUOTED, getFoldOptions(ctx));
      }
      function singleQuotedString(value, ctx) {
        if (ctx.implicitKey) {
          if (/\n/.test(value))
            return doubleQuotedString(value, ctx);
        } else {
          if (/[ \t]\n|\n[ \t]/.test(value))
            return doubleQuotedString(value, ctx);
        }
        const indent = ctx.indent || (containsDocumentMarker(value) ? "  " : "");
        const res = "'" + value.replace(/'/g, "''").replace(/\n+/g, `$&
${indent}`) + "'";
        return ctx.implicitKey ? res : foldFlowLines(res, indent, FOLD_FLOW, getFoldOptions(ctx));
      }
      function blockString({
        comment,
        type,
        value
      }, ctx, onComment, onChompKeep) {
        if (/\n[\t ]+$/.test(value) || /^\s*$/.test(value)) {
          return doubleQuotedString(value, ctx);
        }
        const indent = ctx.indent || (ctx.forceBlockIndent || containsDocumentMarker(value) ? "  " : "");
        const indentSize = indent ? "2" : "1";
        const literal = type === PlainValue.Type.BLOCK_FOLDED ? false : type === PlainValue.Type.BLOCK_LITERAL ? true : !lineLengthOverLimit(value, strOptions.fold.lineWidth, indent.length);
        let header = literal ? "|" : ">";
        if (!value)
          return header + "\n";
        let wsStart = "";
        let wsEnd = "";
        value = value.replace(/[\n\t ]*$/, (ws) => {
          const n2 = ws.indexOf("\n");
          if (n2 === -1) {
            header += "-";
          } else if (value === ws || n2 !== ws.length - 1) {
            header += "+";
            if (onChompKeep)
              onChompKeep();
          }
          wsEnd = ws.replace(/\n$/, "");
          return "";
        }).replace(/^[\n ]*/, (ws) => {
          if (ws.indexOf(" ") !== -1)
            header += indentSize;
          const m3 = ws.match(/ +$/);
          if (m3) {
            wsStart = ws.slice(0, -m3[0].length);
            return m3[0];
          } else {
            wsStart = ws;
            return "";
          }
        });
        if (wsEnd)
          wsEnd = wsEnd.replace(/\n+(?!\n|$)/g, `$&${indent}`);
        if (wsStart)
          wsStart = wsStart.replace(/\n+/g, `$&${indent}`);
        if (comment) {
          header += " #" + comment.replace(/ ?[\r\n]+/g, " ");
          if (onComment)
            onComment();
        }
        if (!value)
          return `${header}${indentSize}
${indent}${wsEnd}`;
        if (literal) {
          value = value.replace(/\n+/g, `$&${indent}`);
          return `${header}
${indent}${wsStart}${value}${wsEnd}`;
        }
        value = value.replace(/\n+/g, "\n$&").replace(/(?:^|\n)([\t ].*)(?:([\n\t ]*)\n(?![\n\t ]))?/g, "$1$2").replace(/\n+/g, `$&${indent}`);
        const body = foldFlowLines(`${wsStart}${value}${wsEnd}`, indent, FOLD_BLOCK, strOptions.fold);
        return `${header}
${indent}${body}`;
      }
      function plainString(item, ctx, onComment, onChompKeep) {
        const {
          comment,
          type,
          value
        } = item;
        const {
          actualString,
          implicitKey,
          indent,
          inFlow
        } = ctx;
        if (implicitKey && /[\n[\]{},]/.test(value) || inFlow && /[[\]{},]/.test(value)) {
          return doubleQuotedString(value, ctx);
        }
        if (!value || /^[\n\t ,[\]{}#&*!|>'"%@`]|^[?-]$|^[?-][ \t]|[\n:][ \t]|[ \t]\n|[\n\t ]#|[\n\t :]$/.test(value)) {
          return implicitKey || inFlow || value.indexOf("\n") === -1 ? value.indexOf('"') !== -1 && value.indexOf("'") === -1 ? singleQuotedString(value, ctx) : doubleQuotedString(value, ctx) : blockString(item, ctx, onComment, onChompKeep);
        }
        if (!implicitKey && !inFlow && type !== PlainValue.Type.PLAIN && value.indexOf("\n") !== -1) {
          return blockString(item, ctx, onComment, onChompKeep);
        }
        if (indent === "" && containsDocumentMarker(value)) {
          ctx.forceBlockIndent = true;
          return blockString(item, ctx, onComment, onChompKeep);
        }
        const str = value.replace(/\n+/g, `$&
${indent}`);
        if (actualString) {
          const {
            tags
          } = ctx.doc.schema;
          const resolved = resolveScalar(str, tags, tags.scalarFallback).value;
          if (typeof resolved !== "string")
            return doubleQuotedString(value, ctx);
        }
        const body = implicitKey ? str : foldFlowLines(str, indent, FOLD_FLOW, getFoldOptions(ctx));
        if (comment && !inFlow && (body.indexOf("\n") !== -1 || comment.indexOf("\n") !== -1)) {
          if (onComment)
            onComment();
          return addCommentBefore(body, indent, comment);
        }
        return body;
      }
      function stringifyString(item, ctx, onComment, onChompKeep) {
        const {
          defaultType
        } = strOptions;
        const {
          implicitKey,
          inFlow
        } = ctx;
        let {
          type,
          value
        } = item;
        if (typeof value !== "string") {
          value = String(value);
          item = Object.assign({}, item, {
            value
          });
        }
        const _stringify = (_type) => {
          switch (_type) {
            case PlainValue.Type.BLOCK_FOLDED:
            case PlainValue.Type.BLOCK_LITERAL:
              return blockString(item, ctx, onComment, onChompKeep);
            case PlainValue.Type.QUOTE_DOUBLE:
              return doubleQuotedString(value, ctx);
            case PlainValue.Type.QUOTE_SINGLE:
              return singleQuotedString(value, ctx);
            case PlainValue.Type.PLAIN:
              return plainString(item, ctx, onComment, onChompKeep);
            default:
              return null;
          }
        };
        if (type !== PlainValue.Type.QUOTE_DOUBLE && /[\x00-\x08\x0b-\x1f\x7f-\x9f]/.test(value)) {
          type = PlainValue.Type.QUOTE_DOUBLE;
        } else if ((implicitKey || inFlow) && (type === PlainValue.Type.BLOCK_FOLDED || type === PlainValue.Type.BLOCK_LITERAL)) {
          type = PlainValue.Type.QUOTE_DOUBLE;
        }
        let res = _stringify(type);
        if (res === null) {
          res = _stringify(defaultType);
          if (res === null)
            throw new Error(`Unsupported default string type ${defaultType}`);
        }
        return res;
      }
      function stringifyNumber({
        format,
        minFractionDigits,
        tag,
        value
      }) {
        if (typeof value === "bigint")
          return String(value);
        if (!isFinite(value))
          return isNaN(value) ? ".nan" : value < 0 ? "-.inf" : ".inf";
        let n2 = JSON.stringify(value);
        if (!format && minFractionDigits && (!tag || tag === "tag:yaml.org,2002:float") && /^\d/.test(n2)) {
          let i4 = n2.indexOf(".");
          if (i4 < 0) {
            i4 = n2.length;
            n2 += ".";
          }
          let d4 = minFractionDigits - (n2.length - i4 - 1);
          while (d4-- > 0)
            n2 += "0";
        }
        return n2;
      }
      function checkFlowCollectionEnd(errors, cst) {
        let char, name;
        switch (cst.type) {
          case PlainValue.Type.FLOW_MAP:
            char = "}";
            name = "flow map";
            break;
          case PlainValue.Type.FLOW_SEQ:
            char = "]";
            name = "flow sequence";
            break;
          default:
            errors.push(new PlainValue.YAMLSemanticError(cst, "Not a flow collection!?"));
            return;
        }
        let lastItem;
        for (let i4 = cst.items.length - 1; i4 >= 0; --i4) {
          const item = cst.items[i4];
          if (!item || item.type !== PlainValue.Type.COMMENT) {
            lastItem = item;
            break;
          }
        }
        if (lastItem && lastItem.char !== char) {
          const msg = `Expected ${name} to end with ${char}`;
          let err;
          if (typeof lastItem.offset === "number") {
            err = new PlainValue.YAMLSemanticError(cst, msg);
            err.offset = lastItem.offset + 1;
          } else {
            err = new PlainValue.YAMLSemanticError(lastItem, msg);
            if (lastItem.range && lastItem.range.end)
              err.offset = lastItem.range.end - lastItem.range.start;
          }
          errors.push(err);
        }
      }
      function checkFlowCommentSpace(errors, comment) {
        const prev = comment.context.src[comment.range.start - 1];
        if (prev !== "\n" && prev !== "	" && prev !== " ") {
          const msg = "Comments must be separated from other tokens by white space characters";
          errors.push(new PlainValue.YAMLSemanticError(comment, msg));
        }
      }
      function getLongKeyError(source, key) {
        const sk = String(key);
        const k3 = sk.substr(0, 8) + "..." + sk.substr(-8);
        return new PlainValue.YAMLSemanticError(source, `The "${k3}" key is too long`);
      }
      function resolveComments(collection, comments) {
        for (const {
          afterKey,
          before,
          comment
        } of comments) {
          let item = collection.items[before];
          if (!item) {
            if (comment !== void 0) {
              if (collection.comment)
                collection.comment += "\n" + comment;
              else
                collection.comment = comment;
            }
          } else {
            if (afterKey && item.value)
              item = item.value;
            if (comment === void 0) {
              if (afterKey || !item.commentBefore)
                item.spaceBefore = true;
            } else {
              if (item.commentBefore)
                item.commentBefore += "\n" + comment;
              else
                item.commentBefore = comment;
            }
          }
        }
      }
      function resolveString(doc, node) {
        const res = node.strValue;
        if (!res)
          return "";
        if (typeof res === "string")
          return res;
        res.errors.forEach((error) => {
          if (!error.source)
            error.source = node;
          doc.errors.push(error);
        });
        return res.str;
      }
      function resolveTagHandle(doc, node) {
        const {
          handle,
          suffix
        } = node.tag;
        let prefix = doc.tagPrefixes.find((p4) => p4.handle === handle);
        if (!prefix) {
          const dtp = doc.getDefaults().tagPrefixes;
          if (dtp)
            prefix = dtp.find((p4) => p4.handle === handle);
          if (!prefix)
            throw new PlainValue.YAMLSemanticError(node, `The ${handle} tag handle is non-default and was not declared.`);
        }
        if (!suffix)
          throw new PlainValue.YAMLSemanticError(node, `The ${handle} tag has no suffix.`);
        if (handle === "!" && (doc.version || doc.options.version) === "1.0") {
          if (suffix[0] === "^") {
            doc.warnings.push(new PlainValue.YAMLWarning(node, "YAML 1.0 ^ tag expansion is not supported"));
            return suffix;
          }
          if (/[:/]/.test(suffix)) {
            const vocab = suffix.match(/^([a-z0-9-]+)\/(.*)/i);
            return vocab ? `tag:${vocab[1]}.yaml.org,2002:${vocab[2]}` : `tag:${suffix}`;
          }
        }
        return prefix.prefix + decodeURIComponent(suffix);
      }
      function resolveTagName(doc, node) {
        const {
          tag,
          type
        } = node;
        let nonSpecific = false;
        if (tag) {
          const {
            handle,
            suffix,
            verbatim
          } = tag;
          if (verbatim) {
            if (verbatim !== "!" && verbatim !== "!!")
              return verbatim;
            const msg = `Verbatim tags aren't resolved, so ${verbatim} is invalid.`;
            doc.errors.push(new PlainValue.YAMLSemanticError(node, msg));
          } else if (handle === "!" && !suffix) {
            nonSpecific = true;
          } else {
            try {
              return resolveTagHandle(doc, node);
            } catch (error) {
              doc.errors.push(error);
            }
          }
        }
        switch (type) {
          case PlainValue.Type.BLOCK_FOLDED:
          case PlainValue.Type.BLOCK_LITERAL:
          case PlainValue.Type.QUOTE_DOUBLE:
          case PlainValue.Type.QUOTE_SINGLE:
            return PlainValue.defaultTags.STR;
          case PlainValue.Type.FLOW_MAP:
          case PlainValue.Type.MAP:
            return PlainValue.defaultTags.MAP;
          case PlainValue.Type.FLOW_SEQ:
          case PlainValue.Type.SEQ:
            return PlainValue.defaultTags.SEQ;
          case PlainValue.Type.PLAIN:
            return nonSpecific ? PlainValue.defaultTags.STR : null;
          default:
            return null;
        }
      }
      function resolveByTagName(doc, node, tagName) {
        const {
          tags
        } = doc.schema;
        const matchWithTest = [];
        for (const tag of tags) {
          if (tag.tag === tagName) {
            if (tag.test)
              matchWithTest.push(tag);
            else {
              const res = tag.resolve(doc, node);
              return res instanceof Collection ? res : new Scalar(res);
            }
          }
        }
        const str = resolveString(doc, node);
        if (typeof str === "string" && matchWithTest.length > 0)
          return resolveScalar(str, matchWithTest, tags.scalarFallback);
        return null;
      }
      function getFallbackTagName({
        type
      }) {
        switch (type) {
          case PlainValue.Type.FLOW_MAP:
          case PlainValue.Type.MAP:
            return PlainValue.defaultTags.MAP;
          case PlainValue.Type.FLOW_SEQ:
          case PlainValue.Type.SEQ:
            return PlainValue.defaultTags.SEQ;
          default:
            return PlainValue.defaultTags.STR;
        }
      }
      function resolveTag(doc, node, tagName) {
        try {
          const res = resolveByTagName(doc, node, tagName);
          if (res) {
            if (tagName && node.tag)
              res.tag = tagName;
            return res;
          }
        } catch (error) {
          if (!error.source)
            error.source = node;
          doc.errors.push(error);
          return null;
        }
        try {
          const fallback = getFallbackTagName(node);
          if (!fallback)
            throw new Error(`The tag ${tagName} is unavailable`);
          const msg = `The tag ${tagName} is unavailable, falling back to ${fallback}`;
          doc.warnings.push(new PlainValue.YAMLWarning(node, msg));
          const res = resolveByTagName(doc, node, fallback);
          res.tag = tagName;
          return res;
        } catch (error) {
          const refError = new PlainValue.YAMLReferenceError(node, error.message);
          refError.stack = error.stack;
          doc.errors.push(refError);
          return null;
        }
      }
      var isCollectionItem = (node) => {
        if (!node)
          return false;
        const {
          type
        } = node;
        return type === PlainValue.Type.MAP_KEY || type === PlainValue.Type.MAP_VALUE || type === PlainValue.Type.SEQ_ITEM;
      };
      function resolveNodeProps(errors, node) {
        const comments = {
          before: [],
          after: []
        };
        let hasAnchor = false;
        let hasTag = false;
        const props = isCollectionItem(node.context.parent) ? node.context.parent.props.concat(node.props) : node.props;
        for (const {
          start,
          end
        } of props) {
          switch (node.context.src[start]) {
            case PlainValue.Char.COMMENT: {
              if (!node.commentHasRequiredWhitespace(start)) {
                const msg = "Comments must be separated from other tokens by white space characters";
                errors.push(new PlainValue.YAMLSemanticError(node, msg));
              }
              const {
                header,
                valueRange
              } = node;
              const cc = valueRange && (start > valueRange.start || header && start > header.start) ? comments.after : comments.before;
              cc.push(node.context.src.slice(start + 1, end));
              break;
            }
            case PlainValue.Char.ANCHOR:
              if (hasAnchor) {
                const msg = "A node can have at most one anchor";
                errors.push(new PlainValue.YAMLSemanticError(node, msg));
              }
              hasAnchor = true;
              break;
            case PlainValue.Char.TAG:
              if (hasTag) {
                const msg = "A node can have at most one tag";
                errors.push(new PlainValue.YAMLSemanticError(node, msg));
              }
              hasTag = true;
              break;
          }
        }
        return {
          comments,
          hasAnchor,
          hasTag
        };
      }
      function resolveNodeValue(doc, node) {
        const {
          anchors,
          errors,
          schema
        } = doc;
        if (node.type === PlainValue.Type.ALIAS) {
          const name = node.rawValue;
          const src = anchors.getNode(name);
          if (!src) {
            const msg = `Aliased anchor not found: ${name}`;
            errors.push(new PlainValue.YAMLReferenceError(node, msg));
            return null;
          }
          const res = new Alias(src);
          anchors._cstAliases.push(res);
          return res;
        }
        const tagName = resolveTagName(doc, node);
        if (tagName)
          return resolveTag(doc, node, tagName);
        if (node.type !== PlainValue.Type.PLAIN) {
          const msg = `Failed to resolve ${node.type} node here`;
          errors.push(new PlainValue.YAMLSyntaxError(node, msg));
          return null;
        }
        try {
          const str = resolveString(doc, node);
          return resolveScalar(str, schema.tags, schema.tags.scalarFallback);
        } catch (error) {
          if (!error.source)
            error.source = node;
          errors.push(error);
          return null;
        }
      }
      function resolveNode(doc, node) {
        if (!node)
          return null;
        if (node.error)
          doc.errors.push(node.error);
        const {
          comments,
          hasAnchor,
          hasTag
        } = resolveNodeProps(doc.errors, node);
        if (hasAnchor) {
          const {
            anchors
          } = doc;
          const name = node.anchor;
          const prev = anchors.getNode(name);
          if (prev)
            anchors.map[anchors.newName(name)] = prev;
          anchors.map[name] = node;
        }
        if (node.type === PlainValue.Type.ALIAS && (hasAnchor || hasTag)) {
          const msg = "An alias node must not specify any properties";
          doc.errors.push(new PlainValue.YAMLSemanticError(node, msg));
        }
        const res = resolveNodeValue(doc, node);
        if (res) {
          res.range = [node.range.start, node.range.end];
          if (doc.options.keepCstNodes)
            res.cstNode = node;
          if (doc.options.keepNodeTypes)
            res.type = node.type;
          const cb = comments.before.join("\n");
          if (cb) {
            res.commentBefore = res.commentBefore ? `${res.commentBefore}
${cb}` : cb;
          }
          const ca = comments.after.join("\n");
          if (ca)
            res.comment = res.comment ? `${res.comment}
${ca}` : ca;
        }
        return node.resolved = res;
      }
      function resolveMap(doc, cst) {
        if (cst.type !== PlainValue.Type.MAP && cst.type !== PlainValue.Type.FLOW_MAP) {
          const msg = `A ${cst.type} node cannot be resolved as a mapping`;
          doc.errors.push(new PlainValue.YAMLSyntaxError(cst, msg));
          return null;
        }
        const {
          comments,
          items
        } = cst.type === PlainValue.Type.FLOW_MAP ? resolveFlowMapItems(doc, cst) : resolveBlockMapItems(doc, cst);
        const map = new YAMLMap();
        map.items = items;
        resolveComments(map, comments);
        let hasCollectionKey = false;
        for (let i4 = 0; i4 < items.length; ++i4) {
          const {
            key: iKey
          } = items[i4];
          if (iKey instanceof Collection)
            hasCollectionKey = true;
          if (doc.schema.merge && iKey && iKey.value === MERGE_KEY) {
            items[i4] = new Merge(items[i4]);
            const sources = items[i4].value.items;
            let error = null;
            sources.some((node) => {
              if (node instanceof Alias) {
                const {
                  type
                } = node.source;
                if (type === PlainValue.Type.MAP || type === PlainValue.Type.FLOW_MAP)
                  return false;
                return error = "Merge nodes aliases can only point to maps";
              }
              return error = "Merge nodes can only have Alias nodes as values";
            });
            if (error)
              doc.errors.push(new PlainValue.YAMLSemanticError(cst, error));
          } else {
            for (let j4 = i4 + 1; j4 < items.length; ++j4) {
              const {
                key: jKey
              } = items[j4];
              if (iKey === jKey || iKey && jKey && Object.prototype.hasOwnProperty.call(iKey, "value") && iKey.value === jKey.value) {
                const msg = `Map keys must be unique; "${iKey}" is repeated`;
                doc.errors.push(new PlainValue.YAMLSemanticError(cst, msg));
                break;
              }
            }
          }
        }
        if (hasCollectionKey && !doc.options.mapAsMap) {
          const warn = "Keys with collection values will be stringified as YAML due to JS Object restrictions. Use mapAsMap: true to avoid this.";
          doc.warnings.push(new PlainValue.YAMLWarning(cst, warn));
        }
        cst.resolved = map;
        return map;
      }
      var valueHasPairComment = ({
        context: {
          lineStart,
          node,
          src
        },
        props
      }) => {
        if (props.length === 0)
          return false;
        const {
          start
        } = props[0];
        if (node && start > node.valueRange.start)
          return false;
        if (src[start] !== PlainValue.Char.COMMENT)
          return false;
        for (let i4 = lineStart; i4 < start; ++i4)
          if (src[i4] === "\n")
            return false;
        return true;
      };
      function resolvePairComment(item, pair) {
        if (!valueHasPairComment(item))
          return;
        const comment = item.getPropValue(0, PlainValue.Char.COMMENT, true);
        let found = false;
        const cb = pair.value.commentBefore;
        if (cb && cb.startsWith(comment)) {
          pair.value.commentBefore = cb.substr(comment.length + 1);
          found = true;
        } else {
          const cc = pair.value.comment;
          if (!item.node && cc && cc.startsWith(comment)) {
            pair.value.comment = cc.substr(comment.length + 1);
            found = true;
          }
        }
        if (found)
          pair.comment = comment;
      }
      function resolveBlockMapItems(doc, cst) {
        const comments = [];
        const items = [];
        let key = void 0;
        let keyStart = null;
        for (let i4 = 0; i4 < cst.items.length; ++i4) {
          const item = cst.items[i4];
          switch (item.type) {
            case PlainValue.Type.BLANK_LINE:
              comments.push({
                afterKey: !!key,
                before: items.length
              });
              break;
            case PlainValue.Type.COMMENT:
              comments.push({
                afterKey: !!key,
                before: items.length,
                comment: item.comment
              });
              break;
            case PlainValue.Type.MAP_KEY:
              if (key !== void 0)
                items.push(new Pair(key));
              if (item.error)
                doc.errors.push(item.error);
              key = resolveNode(doc, item.node);
              keyStart = null;
              break;
            case PlainValue.Type.MAP_VALUE:
              {
                if (key === void 0)
                  key = null;
                if (item.error)
                  doc.errors.push(item.error);
                if (!item.context.atLineStart && item.node && item.node.type === PlainValue.Type.MAP && !item.node.context.atLineStart) {
                  const msg = "Nested mappings are not allowed in compact mappings";
                  doc.errors.push(new PlainValue.YAMLSemanticError(item.node, msg));
                }
                let valueNode = item.node;
                if (!valueNode && item.props.length > 0) {
                  valueNode = new PlainValue.PlainValue(PlainValue.Type.PLAIN, []);
                  valueNode.context = {
                    parent: item,
                    src: item.context.src
                  };
                  const pos = item.range.start + 1;
                  valueNode.range = {
                    start: pos,
                    end: pos
                  };
                  valueNode.valueRange = {
                    start: pos,
                    end: pos
                  };
                  if (typeof item.range.origStart === "number") {
                    const origPos = item.range.origStart + 1;
                    valueNode.range.origStart = valueNode.range.origEnd = origPos;
                    valueNode.valueRange.origStart = valueNode.valueRange.origEnd = origPos;
                  }
                }
                const pair = new Pair(key, resolveNode(doc, valueNode));
                resolvePairComment(item, pair);
                items.push(pair);
                if (key && typeof keyStart === "number") {
                  if (item.range.start > keyStart + 1024)
                    doc.errors.push(getLongKeyError(cst, key));
                }
                key = void 0;
                keyStart = null;
              }
              break;
            default:
              if (key !== void 0)
                items.push(new Pair(key));
              key = resolveNode(doc, item);
              keyStart = item.range.start;
              if (item.error)
                doc.errors.push(item.error);
              next:
                for (let j4 = i4 + 1; ; ++j4) {
                  const nextItem = cst.items[j4];
                  switch (nextItem && nextItem.type) {
                    case PlainValue.Type.BLANK_LINE:
                    case PlainValue.Type.COMMENT:
                      continue next;
                    case PlainValue.Type.MAP_VALUE:
                      break next;
                    default: {
                      const msg = "Implicit map keys need to be followed by map values";
                      doc.errors.push(new PlainValue.YAMLSemanticError(item, msg));
                      break next;
                    }
                  }
                }
              if (item.valueRangeContainsNewline) {
                const msg = "Implicit map keys need to be on a single line";
                doc.errors.push(new PlainValue.YAMLSemanticError(item, msg));
              }
          }
        }
        if (key !== void 0)
          items.push(new Pair(key));
        return {
          comments,
          items
        };
      }
      function resolveFlowMapItems(doc, cst) {
        const comments = [];
        const items = [];
        let key = void 0;
        let explicitKey = false;
        let next = "{";
        for (let i4 = 0; i4 < cst.items.length; ++i4) {
          const item = cst.items[i4];
          if (typeof item.char === "string") {
            const {
              char,
              offset
            } = item;
            if (char === "?" && key === void 0 && !explicitKey) {
              explicitKey = true;
              next = ":";
              continue;
            }
            if (char === ":") {
              if (key === void 0)
                key = null;
              if (next === ":") {
                next = ",";
                continue;
              }
            } else {
              if (explicitKey) {
                if (key === void 0 && char !== ",")
                  key = null;
                explicitKey = false;
              }
              if (key !== void 0) {
                items.push(new Pair(key));
                key = void 0;
                if (char === ",") {
                  next = ":";
                  continue;
                }
              }
            }
            if (char === "}") {
              if (i4 === cst.items.length - 1)
                continue;
            } else if (char === next) {
              next = ":";
              continue;
            }
            const msg = `Flow map contains an unexpected ${char}`;
            const err = new PlainValue.YAMLSyntaxError(cst, msg);
            err.offset = offset;
            doc.errors.push(err);
          } else if (item.type === PlainValue.Type.BLANK_LINE) {
            comments.push({
              afterKey: !!key,
              before: items.length
            });
          } else if (item.type === PlainValue.Type.COMMENT) {
            checkFlowCommentSpace(doc.errors, item);
            comments.push({
              afterKey: !!key,
              before: items.length,
              comment: item.comment
            });
          } else if (key === void 0) {
            if (next === ",")
              doc.errors.push(new PlainValue.YAMLSemanticError(item, "Separator , missing in flow map"));
            key = resolveNode(doc, item);
          } else {
            if (next !== ",")
              doc.errors.push(new PlainValue.YAMLSemanticError(item, "Indicator : missing in flow map entry"));
            items.push(new Pair(key, resolveNode(doc, item)));
            key = void 0;
            explicitKey = false;
          }
        }
        checkFlowCollectionEnd(doc.errors, cst);
        if (key !== void 0)
          items.push(new Pair(key));
        return {
          comments,
          items
        };
      }
      function resolveSeq(doc, cst) {
        if (cst.type !== PlainValue.Type.SEQ && cst.type !== PlainValue.Type.FLOW_SEQ) {
          const msg = `A ${cst.type} node cannot be resolved as a sequence`;
          doc.errors.push(new PlainValue.YAMLSyntaxError(cst, msg));
          return null;
        }
        const {
          comments,
          items
        } = cst.type === PlainValue.Type.FLOW_SEQ ? resolveFlowSeqItems(doc, cst) : resolveBlockSeqItems(doc, cst);
        const seq = new YAMLSeq();
        seq.items = items;
        resolveComments(seq, comments);
        if (!doc.options.mapAsMap && items.some((it) => it instanceof Pair && it.key instanceof Collection)) {
          const warn = "Keys with collection values will be stringified as YAML due to JS Object restrictions. Use mapAsMap: true to avoid this.";
          doc.warnings.push(new PlainValue.YAMLWarning(cst, warn));
        }
        cst.resolved = seq;
        return seq;
      }
      function resolveBlockSeqItems(doc, cst) {
        const comments = [];
        const items = [];
        for (let i4 = 0; i4 < cst.items.length; ++i4) {
          const item = cst.items[i4];
          switch (item.type) {
            case PlainValue.Type.BLANK_LINE:
              comments.push({
                before: items.length
              });
              break;
            case PlainValue.Type.COMMENT:
              comments.push({
                comment: item.comment,
                before: items.length
              });
              break;
            case PlainValue.Type.SEQ_ITEM:
              if (item.error)
                doc.errors.push(item.error);
              items.push(resolveNode(doc, item.node));
              if (item.hasProps) {
                const msg = "Sequence items cannot have tags or anchors before the - indicator";
                doc.errors.push(new PlainValue.YAMLSemanticError(item, msg));
              }
              break;
            default:
              if (item.error)
                doc.errors.push(item.error);
              doc.errors.push(new PlainValue.YAMLSyntaxError(item, `Unexpected ${item.type} node in sequence`));
          }
        }
        return {
          comments,
          items
        };
      }
      function resolveFlowSeqItems(doc, cst) {
        const comments = [];
        const items = [];
        let explicitKey = false;
        let key = void 0;
        let keyStart = null;
        let next = "[";
        let prevItem = null;
        for (let i4 = 0; i4 < cst.items.length; ++i4) {
          const item = cst.items[i4];
          if (typeof item.char === "string") {
            const {
              char,
              offset
            } = item;
            if (char !== ":" && (explicitKey || key !== void 0)) {
              if (explicitKey && key === void 0)
                key = next ? items.pop() : null;
              items.push(new Pair(key));
              explicitKey = false;
              key = void 0;
              keyStart = null;
            }
            if (char === next) {
              next = null;
            } else if (!next && char === "?") {
              explicitKey = true;
            } else if (next !== "[" && char === ":" && key === void 0) {
              if (next === ",") {
                key = items.pop();
                if (key instanceof Pair) {
                  const msg = "Chaining flow sequence pairs is invalid";
                  const err = new PlainValue.YAMLSemanticError(cst, msg);
                  err.offset = offset;
                  doc.errors.push(err);
                }
                if (!explicitKey && typeof keyStart === "number") {
                  const keyEnd = item.range ? item.range.start : item.offset;
                  if (keyEnd > keyStart + 1024)
                    doc.errors.push(getLongKeyError(cst, key));
                  const {
                    src
                  } = prevItem.context;
                  for (let i5 = keyStart; i5 < keyEnd; ++i5)
                    if (src[i5] === "\n") {
                      const msg = "Implicit keys of flow sequence pairs need to be on a single line";
                      doc.errors.push(new PlainValue.YAMLSemanticError(prevItem, msg));
                      break;
                    }
                }
              } else {
                key = null;
              }
              keyStart = null;
              explicitKey = false;
              next = null;
            } else if (next === "[" || char !== "]" || i4 < cst.items.length - 1) {
              const msg = `Flow sequence contains an unexpected ${char}`;
              const err = new PlainValue.YAMLSyntaxError(cst, msg);
              err.offset = offset;
              doc.errors.push(err);
            }
          } else if (item.type === PlainValue.Type.BLANK_LINE) {
            comments.push({
              before: items.length
            });
          } else if (item.type === PlainValue.Type.COMMENT) {
            checkFlowCommentSpace(doc.errors, item);
            comments.push({
              comment: item.comment,
              before: items.length
            });
          } else {
            if (next) {
              const msg = `Expected a ${next} in flow sequence`;
              doc.errors.push(new PlainValue.YAMLSemanticError(item, msg));
            }
            const value = resolveNode(doc, item);
            if (key === void 0) {
              items.push(value);
              prevItem = item;
            } else {
              items.push(new Pair(key, value));
              key = void 0;
            }
            keyStart = item.range.start;
            next = ",";
          }
        }
        checkFlowCollectionEnd(doc.errors, cst);
        if (key !== void 0)
          items.push(new Pair(key));
        return {
          comments,
          items
        };
      }
      exports.Alias = Alias;
      exports.Collection = Collection;
      exports.Merge = Merge;
      exports.Node = Node;
      exports.Pair = Pair;
      exports.Scalar = Scalar;
      exports.YAMLMap = YAMLMap;
      exports.YAMLSeq = YAMLSeq;
      exports.addComment = addComment;
      exports.binaryOptions = binaryOptions;
      exports.boolOptions = boolOptions;
      exports.findPair = findPair;
      exports.intOptions = intOptions;
      exports.isEmptyPath = isEmptyPath;
      exports.nullOptions = nullOptions;
      exports.resolveMap = resolveMap;
      exports.resolveNode = resolveNode;
      exports.resolveSeq = resolveSeq;
      exports.resolveString = resolveString;
      exports.strOptions = strOptions;
      exports.stringifyNumber = stringifyNumber;
      exports.stringifyString = stringifyString;
      exports.toJSON = toJSON;
    }
  });

  // node_modules/yaml/dist/warnings-1000a372.js
  var require_warnings_1000a372 = __commonJS({
    "node_modules/yaml/dist/warnings-1000a372.js"(exports) {
      init_preact_shim();
      "use strict";
      var PlainValue = require_PlainValue_ec8e588e();
      var resolveSeq = require_resolveSeq_d03cb037();
      var binary = {
        identify: (value) => value instanceof Uint8Array,
        default: false,
        tag: "tag:yaml.org,2002:binary",
        resolve: (doc, node) => {
          const src = resolveSeq.resolveString(doc, node);
          if (typeof Buffer === "function") {
            return Buffer.from(src, "base64");
          } else if (typeof atob === "function") {
            const str = atob(src.replace(/[\n\r]/g, ""));
            const buffer = new Uint8Array(str.length);
            for (let i4 = 0; i4 < str.length; ++i4)
              buffer[i4] = str.charCodeAt(i4);
            return buffer;
          } else {
            const msg = "This environment does not support reading binary tags; either Buffer or atob is required";
            doc.errors.push(new PlainValue.YAMLReferenceError(node, msg));
            return null;
          }
        },
        options: resolveSeq.binaryOptions,
        stringify: ({
          comment,
          type,
          value
        }, ctx, onComment, onChompKeep) => {
          let src;
          if (typeof Buffer === "function") {
            src = value instanceof Buffer ? value.toString("base64") : Buffer.from(value.buffer).toString("base64");
          } else if (typeof btoa === "function") {
            let s4 = "";
            for (let i4 = 0; i4 < value.length; ++i4)
              s4 += String.fromCharCode(value[i4]);
            src = btoa(s4);
          } else {
            throw new Error("This environment does not support writing binary tags; either Buffer or btoa is required");
          }
          if (!type)
            type = resolveSeq.binaryOptions.defaultType;
          if (type === PlainValue.Type.QUOTE_DOUBLE) {
            value = src;
          } else {
            const {
              lineWidth
            } = resolveSeq.binaryOptions;
            const n2 = Math.ceil(src.length / lineWidth);
            const lines = new Array(n2);
            for (let i4 = 0, o4 = 0; i4 < n2; ++i4, o4 += lineWidth) {
              lines[i4] = src.substr(o4, lineWidth);
            }
            value = lines.join(type === PlainValue.Type.BLOCK_LITERAL ? "\n" : " ");
          }
          return resolveSeq.stringifyString({
            comment,
            type,
            value
          }, ctx, onComment, onChompKeep);
        }
      };
      function parsePairs(doc, cst) {
        const seq = resolveSeq.resolveSeq(doc, cst);
        for (let i4 = 0; i4 < seq.items.length; ++i4) {
          let item = seq.items[i4];
          if (item instanceof resolveSeq.Pair)
            continue;
          else if (item instanceof resolveSeq.YAMLMap) {
            if (item.items.length > 1) {
              const msg = "Each pair must have its own sequence indicator";
              throw new PlainValue.YAMLSemanticError(cst, msg);
            }
            const pair = item.items[0] || new resolveSeq.Pair();
            if (item.commentBefore)
              pair.commentBefore = pair.commentBefore ? `${item.commentBefore}
${pair.commentBefore}` : item.commentBefore;
            if (item.comment)
              pair.comment = pair.comment ? `${item.comment}
${pair.comment}` : item.comment;
            item = pair;
          }
          seq.items[i4] = item instanceof resolveSeq.Pair ? item : new resolveSeq.Pair(item);
        }
        return seq;
      }
      function createPairs(schema, iterable, ctx) {
        const pairs2 = new resolveSeq.YAMLSeq(schema);
        pairs2.tag = "tag:yaml.org,2002:pairs";
        for (const it of iterable) {
          let key, value;
          if (Array.isArray(it)) {
            if (it.length === 2) {
              key = it[0];
              value = it[1];
            } else
              throw new TypeError(`Expected [key, value] tuple: ${it}`);
          } else if (it && it instanceof Object) {
            const keys = Object.keys(it);
            if (keys.length === 1) {
              key = keys[0];
              value = it[key];
            } else
              throw new TypeError(`Expected { key: value } tuple: ${it}`);
          } else {
            key = it;
          }
          const pair = schema.createPair(key, value, ctx);
          pairs2.items.push(pair);
        }
        return pairs2;
      }
      var pairs = {
        default: false,
        tag: "tag:yaml.org,2002:pairs",
        resolve: parsePairs,
        createNode: createPairs
      };
      var YAMLOMap = class extends resolveSeq.YAMLSeq {
        constructor() {
          super();
          PlainValue._defineProperty(this, "add", resolveSeq.YAMLMap.prototype.add.bind(this));
          PlainValue._defineProperty(this, "delete", resolveSeq.YAMLMap.prototype.delete.bind(this));
          PlainValue._defineProperty(this, "get", resolveSeq.YAMLMap.prototype.get.bind(this));
          PlainValue._defineProperty(this, "has", resolveSeq.YAMLMap.prototype.has.bind(this));
          PlainValue._defineProperty(this, "set", resolveSeq.YAMLMap.prototype.set.bind(this));
          this.tag = YAMLOMap.tag;
        }
        toJSON(_3, ctx) {
          const map = new Map();
          if (ctx && ctx.onCreate)
            ctx.onCreate(map);
          for (const pair of this.items) {
            let key, value;
            if (pair instanceof resolveSeq.Pair) {
              key = resolveSeq.toJSON(pair.key, "", ctx);
              value = resolveSeq.toJSON(pair.value, key, ctx);
            } else {
              key = resolveSeq.toJSON(pair, "", ctx);
            }
            if (map.has(key))
              throw new Error("Ordered maps must not include duplicate keys");
            map.set(key, value);
          }
          return map;
        }
      };
      PlainValue._defineProperty(YAMLOMap, "tag", "tag:yaml.org,2002:omap");
      function parseOMap(doc, cst) {
        const pairs2 = parsePairs(doc, cst);
        const seenKeys = [];
        for (const {
          key
        } of pairs2.items) {
          if (key instanceof resolveSeq.Scalar) {
            if (seenKeys.includes(key.value)) {
              const msg = "Ordered maps must not include duplicate keys";
              throw new PlainValue.YAMLSemanticError(cst, msg);
            } else {
              seenKeys.push(key.value);
            }
          }
        }
        return Object.assign(new YAMLOMap(), pairs2);
      }
      function createOMap(schema, iterable, ctx) {
        const pairs2 = createPairs(schema, iterable, ctx);
        const omap2 = new YAMLOMap();
        omap2.items = pairs2.items;
        return omap2;
      }
      var omap = {
        identify: (value) => value instanceof Map,
        nodeClass: YAMLOMap,
        default: false,
        tag: "tag:yaml.org,2002:omap",
        resolve: parseOMap,
        createNode: createOMap
      };
      var YAMLSet = class extends resolveSeq.YAMLMap {
        constructor() {
          super();
          this.tag = YAMLSet.tag;
        }
        add(key) {
          const pair = key instanceof resolveSeq.Pair ? key : new resolveSeq.Pair(key);
          const prev = resolveSeq.findPair(this.items, pair.key);
          if (!prev)
            this.items.push(pair);
        }
        get(key, keepPair) {
          const pair = resolveSeq.findPair(this.items, key);
          return !keepPair && pair instanceof resolveSeq.Pair ? pair.key instanceof resolveSeq.Scalar ? pair.key.value : pair.key : pair;
        }
        set(key, value) {
          if (typeof value !== "boolean")
            throw new Error(`Expected boolean value for set(key, value) in a YAML set, not ${typeof value}`);
          const prev = resolveSeq.findPair(this.items, key);
          if (prev && !value) {
            this.items.splice(this.items.indexOf(prev), 1);
          } else if (!prev && value) {
            this.items.push(new resolveSeq.Pair(key));
          }
        }
        toJSON(_3, ctx) {
          return super.toJSON(_3, ctx, Set);
        }
        toString(ctx, onComment, onChompKeep) {
          if (!ctx)
            return JSON.stringify(this);
          if (this.hasAllNullValues())
            return super.toString(ctx, onComment, onChompKeep);
          else
            throw new Error("Set items must all have null values");
        }
      };
      PlainValue._defineProperty(YAMLSet, "tag", "tag:yaml.org,2002:set");
      function parseSet(doc, cst) {
        const map = resolveSeq.resolveMap(doc, cst);
        if (!map.hasAllNullValues())
          throw new PlainValue.YAMLSemanticError(cst, "Set items must all have null values");
        return Object.assign(new YAMLSet(), map);
      }
      function createSet(schema, iterable, ctx) {
        const set2 = new YAMLSet();
        for (const value of iterable)
          set2.items.push(schema.createPair(value, null, ctx));
        return set2;
      }
      var set = {
        identify: (value) => value instanceof Set,
        nodeClass: YAMLSet,
        default: false,
        tag: "tag:yaml.org,2002:set",
        resolve: parseSet,
        createNode: createSet
      };
      var parseSexagesimal = (sign, parts) => {
        const n2 = parts.split(":").reduce((n3, p4) => n3 * 60 + Number(p4), 0);
        return sign === "-" ? -n2 : n2;
      };
      var stringifySexagesimal = ({
        value
      }) => {
        if (isNaN(value) || !isFinite(value))
          return resolveSeq.stringifyNumber(value);
        let sign = "";
        if (value < 0) {
          sign = "-";
          value = Math.abs(value);
        }
        const parts = [value % 60];
        if (value < 60) {
          parts.unshift(0);
        } else {
          value = Math.round((value - parts[0]) / 60);
          parts.unshift(value % 60);
          if (value >= 60) {
            value = Math.round((value - parts[0]) / 60);
            parts.unshift(value);
          }
        }
        return sign + parts.map((n2) => n2 < 10 ? "0" + String(n2) : String(n2)).join(":").replace(/000000\d*$/, "");
      };
      var intTime = {
        identify: (value) => typeof value === "number",
        default: true,
        tag: "tag:yaml.org,2002:int",
        format: "TIME",
        test: /^([-+]?)([0-9][0-9_]*(?::[0-5]?[0-9])+)$/,
        resolve: (str, sign, parts) => parseSexagesimal(sign, parts.replace(/_/g, "")),
        stringify: stringifySexagesimal
      };
      var floatTime = {
        identify: (value) => typeof value === "number",
        default: true,
        tag: "tag:yaml.org,2002:float",
        format: "TIME",
        test: /^([-+]?)([0-9][0-9_]*(?::[0-5]?[0-9])+\.[0-9_]*)$/,
        resolve: (str, sign, parts) => parseSexagesimal(sign, parts.replace(/_/g, "")),
        stringify: stringifySexagesimal
      };
      var timestamp = {
        identify: (value) => value instanceof Date,
        default: true,
        tag: "tag:yaml.org,2002:timestamp",
        test: RegExp("^(?:([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})(?:(?:t|T|[ \\t]+)([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2}(\\.[0-9]+)?)(?:[ \\t]*(Z|[-+][012]?[0-9](?::[0-9]{2})?))?)?)$"),
        resolve: (str, year, month, day, hour, minute, second, millisec, tz) => {
          if (millisec)
            millisec = (millisec + "00").substr(1, 3);
          let date = Date.UTC(year, month - 1, day, hour || 0, minute || 0, second || 0, millisec || 0);
          if (tz && tz !== "Z") {
            let d4 = parseSexagesimal(tz[0], tz.slice(1));
            if (Math.abs(d4) < 30)
              d4 *= 60;
            date -= 6e4 * d4;
          }
          return new Date(date);
        },
        stringify: ({
          value
        }) => value.toISOString().replace(/((T00:00)?:00)?\.000Z$/, "")
      };
      function shouldWarn(deprecation) {
        const env = typeof process !== "undefined" && process.env || {};
        if (deprecation) {
          if (typeof YAML_SILENCE_DEPRECATION_WARNINGS !== "undefined")
            return !YAML_SILENCE_DEPRECATION_WARNINGS;
          return !env.YAML_SILENCE_DEPRECATION_WARNINGS;
        }
        if (typeof YAML_SILENCE_WARNINGS !== "undefined")
          return !YAML_SILENCE_WARNINGS;
        return !env.YAML_SILENCE_WARNINGS;
      }
      function warn(warning, type) {
        if (shouldWarn(false)) {
          const emit = typeof process !== "undefined" && process.emitWarning;
          if (emit)
            emit(warning, type);
          else {
            console.warn(type ? `${type}: ${warning}` : warning);
          }
        }
      }
      function warnFileDeprecation(filename) {
        if (shouldWarn(true)) {
          const path = filename.replace(/.*yaml[/\\]/i, "").replace(/\.js$/, "").replace(/\\/g, "/");
          warn(`The endpoint 'yaml/${path}' will be removed in a future release.`, "DeprecationWarning");
        }
      }
      var warned = {};
      function warnOptionDeprecation(name, alternative) {
        if (!warned[name] && shouldWarn(true)) {
          warned[name] = true;
          let msg = `The option '${name}' will be removed in a future release`;
          msg += alternative ? `, use '${alternative}' instead.` : ".";
          warn(msg, "DeprecationWarning");
        }
      }
      exports.binary = binary;
      exports.floatTime = floatTime;
      exports.intTime = intTime;
      exports.omap = omap;
      exports.pairs = pairs;
      exports.set = set;
      exports.timestamp = timestamp;
      exports.warn = warn;
      exports.warnFileDeprecation = warnFileDeprecation;
      exports.warnOptionDeprecation = warnOptionDeprecation;
    }
  });

  // node_modules/yaml/dist/Schema-88e323a7.js
  var require_Schema_88e323a7 = __commonJS({
    "node_modules/yaml/dist/Schema-88e323a7.js"(exports) {
      init_preact_shim();
      "use strict";
      var PlainValue = require_PlainValue_ec8e588e();
      var resolveSeq = require_resolveSeq_d03cb037();
      var warnings = require_warnings_1000a372();
      function createMap(schema, obj, ctx) {
        const map2 = new resolveSeq.YAMLMap(schema);
        if (obj instanceof Map) {
          for (const [key, value] of obj)
            map2.items.push(schema.createPair(key, value, ctx));
        } else if (obj && typeof obj === "object") {
          for (const key of Object.keys(obj))
            map2.items.push(schema.createPair(key, obj[key], ctx));
        }
        if (typeof schema.sortMapEntries === "function") {
          map2.items.sort(schema.sortMapEntries);
        }
        return map2;
      }
      var map = {
        createNode: createMap,
        default: true,
        nodeClass: resolveSeq.YAMLMap,
        tag: "tag:yaml.org,2002:map",
        resolve: resolveSeq.resolveMap
      };
      function createSeq(schema, obj, ctx) {
        const seq2 = new resolveSeq.YAMLSeq(schema);
        if (obj && obj[Symbol.iterator]) {
          for (const it of obj) {
            const v3 = schema.createNode(it, ctx.wrapScalars, null, ctx);
            seq2.items.push(v3);
          }
        }
        return seq2;
      }
      var seq = {
        createNode: createSeq,
        default: true,
        nodeClass: resolveSeq.YAMLSeq,
        tag: "tag:yaml.org,2002:seq",
        resolve: resolveSeq.resolveSeq
      };
      var string = {
        identify: (value) => typeof value === "string",
        default: true,
        tag: "tag:yaml.org,2002:str",
        resolve: resolveSeq.resolveString,
        stringify(item, ctx, onComment, onChompKeep) {
          ctx = Object.assign({
            actualString: true
          }, ctx);
          return resolveSeq.stringifyString(item, ctx, onComment, onChompKeep);
        },
        options: resolveSeq.strOptions
      };
      var failsafe = [map, seq, string];
      var intIdentify$2 = (value) => typeof value === "bigint" || Number.isInteger(value);
      var intResolve$1 = (src, part, radix) => resolveSeq.intOptions.asBigInt ? BigInt(src) : parseInt(part, radix);
      function intStringify$1(node, radix, prefix) {
        const {
          value
        } = node;
        if (intIdentify$2(value) && value >= 0)
          return prefix + value.toString(radix);
        return resolveSeq.stringifyNumber(node);
      }
      var nullObj = {
        identify: (value) => value == null,
        createNode: (schema, value, ctx) => ctx.wrapScalars ? new resolveSeq.Scalar(null) : null,
        default: true,
        tag: "tag:yaml.org,2002:null",
        test: /^(?:~|[Nn]ull|NULL)?$/,
        resolve: () => null,
        options: resolveSeq.nullOptions,
        stringify: () => resolveSeq.nullOptions.nullStr
      };
      var boolObj = {
        identify: (value) => typeof value === "boolean",
        default: true,
        tag: "tag:yaml.org,2002:bool",
        test: /^(?:[Tt]rue|TRUE|[Ff]alse|FALSE)$/,
        resolve: (str) => str[0] === "t" || str[0] === "T",
        options: resolveSeq.boolOptions,
        stringify: ({
          value
        }) => value ? resolveSeq.boolOptions.trueStr : resolveSeq.boolOptions.falseStr
      };
      var octObj = {
        identify: (value) => intIdentify$2(value) && value >= 0,
        default: true,
        tag: "tag:yaml.org,2002:int",
        format: "OCT",
        test: /^0o([0-7]+)$/,
        resolve: (str, oct) => intResolve$1(str, oct, 8),
        options: resolveSeq.intOptions,
        stringify: (node) => intStringify$1(node, 8, "0o")
      };
      var intObj = {
        identify: intIdentify$2,
        default: true,
        tag: "tag:yaml.org,2002:int",
        test: /^[-+]?[0-9]+$/,
        resolve: (str) => intResolve$1(str, str, 10),
        options: resolveSeq.intOptions,
        stringify: resolveSeq.stringifyNumber
      };
      var hexObj = {
        identify: (value) => intIdentify$2(value) && value >= 0,
        default: true,
        tag: "tag:yaml.org,2002:int",
        format: "HEX",
        test: /^0x([0-9a-fA-F]+)$/,
        resolve: (str, hex) => intResolve$1(str, hex, 16),
        options: resolveSeq.intOptions,
        stringify: (node) => intStringify$1(node, 16, "0x")
      };
      var nanObj = {
        identify: (value) => typeof value === "number",
        default: true,
        tag: "tag:yaml.org,2002:float",
        test: /^(?:[-+]?\.inf|(\.nan))$/i,
        resolve: (str, nan) => nan ? NaN : str[0] === "-" ? Number.NEGATIVE_INFINITY : Number.POSITIVE_INFINITY,
        stringify: resolveSeq.stringifyNumber
      };
      var expObj = {
        identify: (value) => typeof value === "number",
        default: true,
        tag: "tag:yaml.org,2002:float",
        format: "EXP",
        test: /^[-+]?(?:\.[0-9]+|[0-9]+(?:\.[0-9]*)?)[eE][-+]?[0-9]+$/,
        resolve: (str) => parseFloat(str),
        stringify: ({
          value
        }) => Number(value).toExponential()
      };
      var floatObj = {
        identify: (value) => typeof value === "number",
        default: true,
        tag: "tag:yaml.org,2002:float",
        test: /^[-+]?(?:\.([0-9]+)|[0-9]+\.([0-9]*))$/,
        resolve(str, frac1, frac2) {
          const frac = frac1 || frac2;
          const node = new resolveSeq.Scalar(parseFloat(str));
          if (frac && frac[frac.length - 1] === "0")
            node.minFractionDigits = frac.length;
          return node;
        },
        stringify: resolveSeq.stringifyNumber
      };
      var core = failsafe.concat([nullObj, boolObj, octObj, intObj, hexObj, nanObj, expObj, floatObj]);
      var intIdentify$1 = (value) => typeof value === "bigint" || Number.isInteger(value);
      var stringifyJSON = ({
        value
      }) => JSON.stringify(value);
      var json = [map, seq, {
        identify: (value) => typeof value === "string",
        default: true,
        tag: "tag:yaml.org,2002:str",
        resolve: resolveSeq.resolveString,
        stringify: stringifyJSON
      }, {
        identify: (value) => value == null,
        createNode: (schema, value, ctx) => ctx.wrapScalars ? new resolveSeq.Scalar(null) : null,
        default: true,
        tag: "tag:yaml.org,2002:null",
        test: /^null$/,
        resolve: () => null,
        stringify: stringifyJSON
      }, {
        identify: (value) => typeof value === "boolean",
        default: true,
        tag: "tag:yaml.org,2002:bool",
        test: /^true|false$/,
        resolve: (str) => str === "true",
        stringify: stringifyJSON
      }, {
        identify: intIdentify$1,
        default: true,
        tag: "tag:yaml.org,2002:int",
        test: /^-?(?:0|[1-9][0-9]*)$/,
        resolve: (str) => resolveSeq.intOptions.asBigInt ? BigInt(str) : parseInt(str, 10),
        stringify: ({
          value
        }) => intIdentify$1(value) ? value.toString() : JSON.stringify(value)
      }, {
        identify: (value) => typeof value === "number",
        default: true,
        tag: "tag:yaml.org,2002:float",
        test: /^-?(?:0|[1-9][0-9]*)(?:\.[0-9]*)?(?:[eE][-+]?[0-9]+)?$/,
        resolve: (str) => parseFloat(str),
        stringify: stringifyJSON
      }];
      json.scalarFallback = (str) => {
        throw new SyntaxError(`Unresolved plain scalar ${JSON.stringify(str)}`);
      };
      var boolStringify = ({
        value
      }) => value ? resolveSeq.boolOptions.trueStr : resolveSeq.boolOptions.falseStr;
      var intIdentify = (value) => typeof value === "bigint" || Number.isInteger(value);
      function intResolve(sign, src, radix) {
        let str = src.replace(/_/g, "");
        if (resolveSeq.intOptions.asBigInt) {
          switch (radix) {
            case 2:
              str = `0b${str}`;
              break;
            case 8:
              str = `0o${str}`;
              break;
            case 16:
              str = `0x${str}`;
              break;
          }
          const n3 = BigInt(str);
          return sign === "-" ? BigInt(-1) * n3 : n3;
        }
        const n2 = parseInt(str, radix);
        return sign === "-" ? -1 * n2 : n2;
      }
      function intStringify(node, radix, prefix) {
        const {
          value
        } = node;
        if (intIdentify(value)) {
          const str = value.toString(radix);
          return value < 0 ? "-" + prefix + str.substr(1) : prefix + str;
        }
        return resolveSeq.stringifyNumber(node);
      }
      var yaml11 = failsafe.concat([{
        identify: (value) => value == null,
        createNode: (schema, value, ctx) => ctx.wrapScalars ? new resolveSeq.Scalar(null) : null,
        default: true,
        tag: "tag:yaml.org,2002:null",
        test: /^(?:~|[Nn]ull|NULL)?$/,
        resolve: () => null,
        options: resolveSeq.nullOptions,
        stringify: () => resolveSeq.nullOptions.nullStr
      }, {
        identify: (value) => typeof value === "boolean",
        default: true,
        tag: "tag:yaml.org,2002:bool",
        test: /^(?:Y|y|[Yy]es|YES|[Tt]rue|TRUE|[Oo]n|ON)$/,
        resolve: () => true,
        options: resolveSeq.boolOptions,
        stringify: boolStringify
      }, {
        identify: (value) => typeof value === "boolean",
        default: true,
        tag: "tag:yaml.org,2002:bool",
        test: /^(?:N|n|[Nn]o|NO|[Ff]alse|FALSE|[Oo]ff|OFF)$/i,
        resolve: () => false,
        options: resolveSeq.boolOptions,
        stringify: boolStringify
      }, {
        identify: intIdentify,
        default: true,
        tag: "tag:yaml.org,2002:int",
        format: "BIN",
        test: /^([-+]?)0b([0-1_]+)$/,
        resolve: (str, sign, bin) => intResolve(sign, bin, 2),
        stringify: (node) => intStringify(node, 2, "0b")
      }, {
        identify: intIdentify,
        default: true,
        tag: "tag:yaml.org,2002:int",
        format: "OCT",
        test: /^([-+]?)0([0-7_]+)$/,
        resolve: (str, sign, oct) => intResolve(sign, oct, 8),
        stringify: (node) => intStringify(node, 8, "0")
      }, {
        identify: intIdentify,
        default: true,
        tag: "tag:yaml.org,2002:int",
        test: /^([-+]?)([0-9][0-9_]*)$/,
        resolve: (str, sign, abs) => intResolve(sign, abs, 10),
        stringify: resolveSeq.stringifyNumber
      }, {
        identify: intIdentify,
        default: true,
        tag: "tag:yaml.org,2002:int",
        format: "HEX",
        test: /^([-+]?)0x([0-9a-fA-F_]+)$/,
        resolve: (str, sign, hex) => intResolve(sign, hex, 16),
        stringify: (node) => intStringify(node, 16, "0x")
      }, {
        identify: (value) => typeof value === "number",
        default: true,
        tag: "tag:yaml.org,2002:float",
        test: /^(?:[-+]?\.inf|(\.nan))$/i,
        resolve: (str, nan) => nan ? NaN : str[0] === "-" ? Number.NEGATIVE_INFINITY : Number.POSITIVE_INFINITY,
        stringify: resolveSeq.stringifyNumber
      }, {
        identify: (value) => typeof value === "number",
        default: true,
        tag: "tag:yaml.org,2002:float",
        format: "EXP",
        test: /^[-+]?([0-9][0-9_]*)?(\.[0-9_]*)?[eE][-+]?[0-9]+$/,
        resolve: (str) => parseFloat(str.replace(/_/g, "")),
        stringify: ({
          value
        }) => Number(value).toExponential()
      }, {
        identify: (value) => typeof value === "number",
        default: true,
        tag: "tag:yaml.org,2002:float",
        test: /^[-+]?(?:[0-9][0-9_]*)?\.([0-9_]*)$/,
        resolve(str, frac) {
          const node = new resolveSeq.Scalar(parseFloat(str.replace(/_/g, "")));
          if (frac) {
            const f4 = frac.replace(/_/g, "");
            if (f4[f4.length - 1] === "0")
              node.minFractionDigits = f4.length;
          }
          return node;
        },
        stringify: resolveSeq.stringifyNumber
      }], warnings.binary, warnings.omap, warnings.pairs, warnings.set, warnings.intTime, warnings.floatTime, warnings.timestamp);
      var schemas = {
        core,
        failsafe,
        json,
        yaml11
      };
      var tags = {
        binary: warnings.binary,
        bool: boolObj,
        float: floatObj,
        floatExp: expObj,
        floatNaN: nanObj,
        floatTime: warnings.floatTime,
        int: intObj,
        intHex: hexObj,
        intOct: octObj,
        intTime: warnings.intTime,
        map,
        null: nullObj,
        omap: warnings.omap,
        pairs: warnings.pairs,
        seq,
        set: warnings.set,
        timestamp: warnings.timestamp
      };
      function findTagObject(value, tagName, tags2) {
        if (tagName) {
          const match = tags2.filter((t3) => t3.tag === tagName);
          const tagObj = match.find((t3) => !t3.format) || match[0];
          if (!tagObj)
            throw new Error(`Tag ${tagName} not found`);
          return tagObj;
        }
        return tags2.find((t3) => (t3.identify && t3.identify(value) || t3.class && value instanceof t3.class) && !t3.format);
      }
      function createNode(value, tagName, ctx) {
        if (value instanceof resolveSeq.Node)
          return value;
        const {
          defaultPrefix,
          onTagObj,
          prevObjects,
          schema,
          wrapScalars
        } = ctx;
        if (tagName && tagName.startsWith("!!"))
          tagName = defaultPrefix + tagName.slice(2);
        let tagObj = findTagObject(value, tagName, schema.tags);
        if (!tagObj) {
          if (typeof value.toJSON === "function")
            value = value.toJSON();
          if (!value || typeof value !== "object")
            return wrapScalars ? new resolveSeq.Scalar(value) : value;
          tagObj = value instanceof Map ? map : value[Symbol.iterator] ? seq : map;
        }
        if (onTagObj) {
          onTagObj(tagObj);
          delete ctx.onTagObj;
        }
        const obj = {
          value: void 0,
          node: void 0
        };
        if (value && typeof value === "object" && prevObjects) {
          const prev = prevObjects.get(value);
          if (prev) {
            const alias = new resolveSeq.Alias(prev);
            ctx.aliasNodes.push(alias);
            return alias;
          }
          obj.value = value;
          prevObjects.set(value, obj);
        }
        obj.node = tagObj.createNode ? tagObj.createNode(ctx.schema, value, ctx) : wrapScalars ? new resolveSeq.Scalar(value) : value;
        if (tagName && obj.node instanceof resolveSeq.Node)
          obj.node.tag = tagName;
        return obj.node;
      }
      function getSchemaTags(schemas2, knownTags, customTags, schemaId) {
        let tags2 = schemas2[schemaId.replace(/\W/g, "")];
        if (!tags2) {
          const keys = Object.keys(schemas2).map((key) => JSON.stringify(key)).join(", ");
          throw new Error(`Unknown schema "${schemaId}"; use one of ${keys}`);
        }
        if (Array.isArray(customTags)) {
          for (const tag of customTags)
            tags2 = tags2.concat(tag);
        } else if (typeof customTags === "function") {
          tags2 = customTags(tags2.slice());
        }
        for (let i4 = 0; i4 < tags2.length; ++i4) {
          const tag = tags2[i4];
          if (typeof tag === "string") {
            const tagObj = knownTags[tag];
            if (!tagObj) {
              const keys = Object.keys(knownTags).map((key) => JSON.stringify(key)).join(", ");
              throw new Error(`Unknown custom tag "${tag}"; use one of ${keys}`);
            }
            tags2[i4] = tagObj;
          }
        }
        return tags2;
      }
      var sortMapEntriesByKey = (a4, b3) => a4.key < b3.key ? -1 : a4.key > b3.key ? 1 : 0;
      var Schema = class {
        constructor({
          customTags,
          merge,
          schema,
          sortMapEntries,
          tags: deprecatedCustomTags
        }) {
          this.merge = !!merge;
          this.name = schema;
          this.sortMapEntries = sortMapEntries === true ? sortMapEntriesByKey : sortMapEntries || null;
          if (!customTags && deprecatedCustomTags)
            warnings.warnOptionDeprecation("tags", "customTags");
          this.tags = getSchemaTags(schemas, tags, customTags || deprecatedCustomTags, schema);
        }
        createNode(value, wrapScalars, tagName, ctx) {
          const baseCtx = {
            defaultPrefix: Schema.defaultPrefix,
            schema: this,
            wrapScalars
          };
          const createCtx = ctx ? Object.assign(ctx, baseCtx) : baseCtx;
          return createNode(value, tagName, createCtx);
        }
        createPair(key, value, ctx) {
          if (!ctx)
            ctx = {
              wrapScalars: true
            };
          const k3 = this.createNode(key, ctx.wrapScalars, null, ctx);
          const v3 = this.createNode(value, ctx.wrapScalars, null, ctx);
          return new resolveSeq.Pair(k3, v3);
        }
      };
      PlainValue._defineProperty(Schema, "defaultPrefix", PlainValue.defaultTagPrefix);
      PlainValue._defineProperty(Schema, "defaultTags", PlainValue.defaultTags);
      exports.Schema = Schema;
    }
  });

  // node_modules/yaml/dist/Document-9b4560a1.js
  var require_Document_9b4560a1 = __commonJS({
    "node_modules/yaml/dist/Document-9b4560a1.js"(exports) {
      init_preact_shim();
      "use strict";
      var PlainValue = require_PlainValue_ec8e588e();
      var resolveSeq = require_resolveSeq_d03cb037();
      var Schema = require_Schema_88e323a7();
      var defaultOptions = {
        anchorPrefix: "a",
        customTags: null,
        indent: 2,
        indentSeq: true,
        keepCstNodes: false,
        keepNodeTypes: true,
        keepBlobsInJSON: true,
        mapAsMap: false,
        maxAliasCount: 100,
        prettyErrors: false,
        simpleKeys: false,
        version: "1.2"
      };
      var scalarOptions = {
        get binary() {
          return resolveSeq.binaryOptions;
        },
        set binary(opt) {
          Object.assign(resolveSeq.binaryOptions, opt);
        },
        get bool() {
          return resolveSeq.boolOptions;
        },
        set bool(opt) {
          Object.assign(resolveSeq.boolOptions, opt);
        },
        get int() {
          return resolveSeq.intOptions;
        },
        set int(opt) {
          Object.assign(resolveSeq.intOptions, opt);
        },
        get null() {
          return resolveSeq.nullOptions;
        },
        set null(opt) {
          Object.assign(resolveSeq.nullOptions, opt);
        },
        get str() {
          return resolveSeq.strOptions;
        },
        set str(opt) {
          Object.assign(resolveSeq.strOptions, opt);
        }
      };
      var documentOptions = {
        "1.0": {
          schema: "yaml-1.1",
          merge: true,
          tagPrefixes: [{
            handle: "!",
            prefix: PlainValue.defaultTagPrefix
          }, {
            handle: "!!",
            prefix: "tag:private.yaml.org,2002:"
          }]
        },
        1.1: {
          schema: "yaml-1.1",
          merge: true,
          tagPrefixes: [{
            handle: "!",
            prefix: "!"
          }, {
            handle: "!!",
            prefix: PlainValue.defaultTagPrefix
          }]
        },
        1.2: {
          schema: "core",
          merge: false,
          tagPrefixes: [{
            handle: "!",
            prefix: "!"
          }, {
            handle: "!!",
            prefix: PlainValue.defaultTagPrefix
          }]
        }
      };
      function stringifyTag(doc, tag) {
        if ((doc.version || doc.options.version) === "1.0") {
          const priv = tag.match(/^tag:private\.yaml\.org,2002:([^:/]+)$/);
          if (priv)
            return "!" + priv[1];
          const vocab = tag.match(/^tag:([a-zA-Z0-9-]+)\.yaml\.org,2002:(.*)/);
          return vocab ? `!${vocab[1]}/${vocab[2]}` : `!${tag.replace(/^tag:/, "")}`;
        }
        let p4 = doc.tagPrefixes.find((p5) => tag.indexOf(p5.prefix) === 0);
        if (!p4) {
          const dtp = doc.getDefaults().tagPrefixes;
          p4 = dtp && dtp.find((p5) => tag.indexOf(p5.prefix) === 0);
        }
        if (!p4)
          return tag[0] === "!" ? tag : `!<${tag}>`;
        const suffix = tag.substr(p4.prefix.length).replace(/[!,[\]{}]/g, (ch) => ({
          "!": "%21",
          ",": "%2C",
          "[": "%5B",
          "]": "%5D",
          "{": "%7B",
          "}": "%7D"
        })[ch]);
        return p4.handle + suffix;
      }
      function getTagObject(tags, item) {
        if (item instanceof resolveSeq.Alias)
          return resolveSeq.Alias;
        if (item.tag) {
          const match = tags.filter((t3) => t3.tag === item.tag);
          if (match.length > 0)
            return match.find((t3) => t3.format === item.format) || match[0];
        }
        let tagObj, obj;
        if (item instanceof resolveSeq.Scalar) {
          obj = item.value;
          const match = tags.filter((t3) => t3.identify && t3.identify(obj) || t3.class && obj instanceof t3.class);
          tagObj = match.find((t3) => t3.format === item.format) || match.find((t3) => !t3.format);
        } else {
          obj = item;
          tagObj = tags.find((t3) => t3.nodeClass && obj instanceof t3.nodeClass);
        }
        if (!tagObj) {
          const name = obj && obj.constructor ? obj.constructor.name : typeof obj;
          throw new Error(`Tag not resolved for ${name} value`);
        }
        return tagObj;
      }
      function stringifyProps(node, tagObj, {
        anchors,
        doc
      }) {
        const props = [];
        const anchor = doc.anchors.getName(node);
        if (anchor) {
          anchors[anchor] = node;
          props.push(`&${anchor}`);
        }
        if (node.tag) {
          props.push(stringifyTag(doc, node.tag));
        } else if (!tagObj.default) {
          props.push(stringifyTag(doc, tagObj.tag));
        }
        return props.join(" ");
      }
      function stringify(item, ctx, onComment, onChompKeep) {
        const {
          anchors,
          schema
        } = ctx.doc;
        let tagObj;
        if (!(item instanceof resolveSeq.Node)) {
          const createCtx = {
            aliasNodes: [],
            onTagObj: (o4) => tagObj = o4,
            prevObjects: new Map()
          };
          item = schema.createNode(item, true, null, createCtx);
          for (const alias of createCtx.aliasNodes) {
            alias.source = alias.source.node;
            let name = anchors.getName(alias.source);
            if (!name) {
              name = anchors.newName();
              anchors.map[name] = alias.source;
            }
          }
        }
        if (item instanceof resolveSeq.Pair)
          return item.toString(ctx, onComment, onChompKeep);
        if (!tagObj)
          tagObj = getTagObject(schema.tags, item);
        const props = stringifyProps(item, tagObj, ctx);
        if (props.length > 0)
          ctx.indentAtStart = (ctx.indentAtStart || 0) + props.length + 1;
        const str = typeof tagObj.stringify === "function" ? tagObj.stringify(item, ctx, onComment, onChompKeep) : item instanceof resolveSeq.Scalar ? resolveSeq.stringifyString(item, ctx, onComment, onChompKeep) : item.toString(ctx, onComment, onChompKeep);
        if (!props)
          return str;
        return item instanceof resolveSeq.Scalar || str[0] === "{" || str[0] === "[" ? `${props} ${str}` : `${props}
${ctx.indent}${str}`;
      }
      var Anchors = class {
        static validAnchorNode(node) {
          return node instanceof resolveSeq.Scalar || node instanceof resolveSeq.YAMLSeq || node instanceof resolveSeq.YAMLMap;
        }
        constructor(prefix) {
          PlainValue._defineProperty(this, "map", Object.create(null));
          this.prefix = prefix;
        }
        createAlias(node, name) {
          this.setAnchor(node, name);
          return new resolveSeq.Alias(node);
        }
        createMergePair(...sources) {
          const merge = new resolveSeq.Merge();
          merge.value.items = sources.map((s4) => {
            if (s4 instanceof resolveSeq.Alias) {
              if (s4.source instanceof resolveSeq.YAMLMap)
                return s4;
            } else if (s4 instanceof resolveSeq.YAMLMap) {
              return this.createAlias(s4);
            }
            throw new Error("Merge sources must be Map nodes or their Aliases");
          });
          return merge;
        }
        getName(node) {
          const {
            map
          } = this;
          return Object.keys(map).find((a4) => map[a4] === node);
        }
        getNames() {
          return Object.keys(this.map);
        }
        getNode(name) {
          return this.map[name];
        }
        newName(prefix) {
          if (!prefix)
            prefix = this.prefix;
          const names = Object.keys(this.map);
          for (let i4 = 1; true; ++i4) {
            const name = `${prefix}${i4}`;
            if (!names.includes(name))
              return name;
          }
        }
        resolveNodes() {
          const {
            map,
            _cstAliases
          } = this;
          Object.keys(map).forEach((a4) => {
            map[a4] = map[a4].resolved;
          });
          _cstAliases.forEach((a4) => {
            a4.source = a4.source.resolved;
          });
          delete this._cstAliases;
        }
        setAnchor(node, name) {
          if (node != null && !Anchors.validAnchorNode(node)) {
            throw new Error("Anchors may only be set for Scalar, Seq and Map nodes");
          }
          if (name && /[\x00-\x19\s,[\]{}]/.test(name)) {
            throw new Error("Anchor names must not contain whitespace or control characters");
          }
          const {
            map
          } = this;
          const prev = node && Object.keys(map).find((a4) => map[a4] === node);
          if (prev) {
            if (!name) {
              return prev;
            } else if (prev !== name) {
              delete map[prev];
              map[name] = node;
            }
          } else {
            if (!name) {
              if (!node)
                return null;
              name = this.newName();
            }
            map[name] = node;
          }
          return name;
        }
      };
      var visit = (node, tags) => {
        if (node && typeof node === "object") {
          const {
            tag
          } = node;
          if (node instanceof resolveSeq.Collection) {
            if (tag)
              tags[tag] = true;
            node.items.forEach((n2) => visit(n2, tags));
          } else if (node instanceof resolveSeq.Pair) {
            visit(node.key, tags);
            visit(node.value, tags);
          } else if (node instanceof resolveSeq.Scalar) {
            if (tag)
              tags[tag] = true;
          }
        }
        return tags;
      };
      var listTagNames = (node) => Object.keys(visit(node, {}));
      function parseContents(doc, contents) {
        const comments = {
          before: [],
          after: []
        };
        let body = void 0;
        let spaceBefore = false;
        for (const node of contents) {
          if (node.valueRange) {
            if (body !== void 0) {
              const msg = "Document contains trailing content not separated by a ... or --- line";
              doc.errors.push(new PlainValue.YAMLSyntaxError(node, msg));
              break;
            }
            const res = resolveSeq.resolveNode(doc, node);
            if (spaceBefore) {
              res.spaceBefore = true;
              spaceBefore = false;
            }
            body = res;
          } else if (node.comment !== null) {
            const cc = body === void 0 ? comments.before : comments.after;
            cc.push(node.comment);
          } else if (node.type === PlainValue.Type.BLANK_LINE) {
            spaceBefore = true;
            if (body === void 0 && comments.before.length > 0 && !doc.commentBefore) {
              doc.commentBefore = comments.before.join("\n");
              comments.before = [];
            }
          }
        }
        doc.contents = body || null;
        if (!body) {
          doc.comment = comments.before.concat(comments.after).join("\n") || null;
        } else {
          const cb = comments.before.join("\n");
          if (cb) {
            const cbNode = body instanceof resolveSeq.Collection && body.items[0] ? body.items[0] : body;
            cbNode.commentBefore = cbNode.commentBefore ? `${cb}
${cbNode.commentBefore}` : cb;
          }
          doc.comment = comments.after.join("\n") || null;
        }
      }
      function resolveTagDirective({
        tagPrefixes
      }, directive) {
        const [handle, prefix] = directive.parameters;
        if (!handle || !prefix) {
          const msg = "Insufficient parameters given for %TAG directive";
          throw new PlainValue.YAMLSemanticError(directive, msg);
        }
        if (tagPrefixes.some((p4) => p4.handle === handle)) {
          const msg = "The %TAG directive must only be given at most once per handle in the same document.";
          throw new PlainValue.YAMLSemanticError(directive, msg);
        }
        return {
          handle,
          prefix
        };
      }
      function resolveYamlDirective(doc, directive) {
        let [version] = directive.parameters;
        if (directive.name === "YAML:1.0")
          version = "1.0";
        if (!version) {
          const msg = "Insufficient parameters given for %YAML directive";
          throw new PlainValue.YAMLSemanticError(directive, msg);
        }
        if (!documentOptions[version]) {
          const v0 = doc.version || doc.options.version;
          const msg = `Document will be parsed as YAML ${v0} rather than YAML ${version}`;
          doc.warnings.push(new PlainValue.YAMLWarning(directive, msg));
        }
        return version;
      }
      function parseDirectives(doc, directives, prevDoc) {
        const directiveComments = [];
        let hasDirectives = false;
        for (const directive of directives) {
          const {
            comment,
            name
          } = directive;
          switch (name) {
            case "TAG":
              try {
                doc.tagPrefixes.push(resolveTagDirective(doc, directive));
              } catch (error) {
                doc.errors.push(error);
              }
              hasDirectives = true;
              break;
            case "YAML":
            case "YAML:1.0":
              if (doc.version) {
                const msg = "The %YAML directive must only be given at most once per document.";
                doc.errors.push(new PlainValue.YAMLSemanticError(directive, msg));
              }
              try {
                doc.version = resolveYamlDirective(doc, directive);
              } catch (error) {
                doc.errors.push(error);
              }
              hasDirectives = true;
              break;
            default:
              if (name) {
                const msg = `YAML only supports %TAG and %YAML directives, and not %${name}`;
                doc.warnings.push(new PlainValue.YAMLWarning(directive, msg));
              }
          }
          if (comment)
            directiveComments.push(comment);
        }
        if (prevDoc && !hasDirectives && (doc.version || prevDoc.version || doc.options.version) === "1.1") {
          const copyTagPrefix = ({
            handle,
            prefix
          }) => ({
            handle,
            prefix
          });
          doc.tagPrefixes = prevDoc.tagPrefixes.map(copyTagPrefix);
          doc.version = prevDoc.version;
        }
        doc.commentBefore = directiveComments.join("\n") || null;
      }
      function assertCollection(contents) {
        if (contents instanceof resolveSeq.Collection)
          return true;
        throw new Error("Expected a YAML collection as document contents");
      }
      var Document = class {
        constructor(options) {
          this.anchors = new Anchors(options.anchorPrefix);
          this.commentBefore = null;
          this.comment = null;
          this.contents = null;
          this.directivesEndMarker = null;
          this.errors = [];
          this.options = options;
          this.schema = null;
          this.tagPrefixes = [];
          this.version = null;
          this.warnings = [];
        }
        add(value) {
          assertCollection(this.contents);
          return this.contents.add(value);
        }
        addIn(path, value) {
          assertCollection(this.contents);
          this.contents.addIn(path, value);
        }
        delete(key) {
          assertCollection(this.contents);
          return this.contents.delete(key);
        }
        deleteIn(path) {
          if (resolveSeq.isEmptyPath(path)) {
            if (this.contents == null)
              return false;
            this.contents = null;
            return true;
          }
          assertCollection(this.contents);
          return this.contents.deleteIn(path);
        }
        getDefaults() {
          return Document.defaults[this.version] || Document.defaults[this.options.version] || {};
        }
        get(key, keepScalar) {
          return this.contents instanceof resolveSeq.Collection ? this.contents.get(key, keepScalar) : void 0;
        }
        getIn(path, keepScalar) {
          if (resolveSeq.isEmptyPath(path))
            return !keepScalar && this.contents instanceof resolveSeq.Scalar ? this.contents.value : this.contents;
          return this.contents instanceof resolveSeq.Collection ? this.contents.getIn(path, keepScalar) : void 0;
        }
        has(key) {
          return this.contents instanceof resolveSeq.Collection ? this.contents.has(key) : false;
        }
        hasIn(path) {
          if (resolveSeq.isEmptyPath(path))
            return this.contents !== void 0;
          return this.contents instanceof resolveSeq.Collection ? this.contents.hasIn(path) : false;
        }
        set(key, value) {
          assertCollection(this.contents);
          this.contents.set(key, value);
        }
        setIn(path, value) {
          if (resolveSeq.isEmptyPath(path))
            this.contents = value;
          else {
            assertCollection(this.contents);
            this.contents.setIn(path, value);
          }
        }
        setSchema(id, customTags) {
          if (!id && !customTags && this.schema)
            return;
          if (typeof id === "number")
            id = id.toFixed(1);
          if (id === "1.0" || id === "1.1" || id === "1.2") {
            if (this.version)
              this.version = id;
            else
              this.options.version = id;
            delete this.options.schema;
          } else if (id && typeof id === "string") {
            this.options.schema = id;
          }
          if (Array.isArray(customTags))
            this.options.customTags = customTags;
          const opt = Object.assign({}, this.getDefaults(), this.options);
          this.schema = new Schema.Schema(opt);
        }
        parse(node, prevDoc) {
          if (this.options.keepCstNodes)
            this.cstNode = node;
          if (this.options.keepNodeTypes)
            this.type = "DOCUMENT";
          const {
            directives = [],
            contents = [],
            directivesEndMarker,
            error,
            valueRange
          } = node;
          if (error) {
            if (!error.source)
              error.source = this;
            this.errors.push(error);
          }
          parseDirectives(this, directives, prevDoc);
          if (directivesEndMarker)
            this.directivesEndMarker = true;
          this.range = valueRange ? [valueRange.start, valueRange.end] : null;
          this.setSchema();
          this.anchors._cstAliases = [];
          parseContents(this, contents);
          this.anchors.resolveNodes();
          if (this.options.prettyErrors) {
            for (const error2 of this.errors)
              if (error2 instanceof PlainValue.YAMLError)
                error2.makePretty();
            for (const warn of this.warnings)
              if (warn instanceof PlainValue.YAMLError)
                warn.makePretty();
          }
          return this;
        }
        listNonDefaultTags() {
          return listTagNames(this.contents).filter((t3) => t3.indexOf(Schema.Schema.defaultPrefix) !== 0);
        }
        setTagPrefix(handle, prefix) {
          if (handle[0] !== "!" || handle[handle.length - 1] !== "!")
            throw new Error("Handle must start and end with !");
          if (prefix) {
            const prev = this.tagPrefixes.find((p4) => p4.handle === handle);
            if (prev)
              prev.prefix = prefix;
            else
              this.tagPrefixes.push({
                handle,
                prefix
              });
          } else {
            this.tagPrefixes = this.tagPrefixes.filter((p4) => p4.handle !== handle);
          }
        }
        toJSON(arg, onAnchor) {
          const {
            keepBlobsInJSON,
            mapAsMap,
            maxAliasCount
          } = this.options;
          const keep = keepBlobsInJSON && (typeof arg !== "string" || !(this.contents instanceof resolveSeq.Scalar));
          const ctx = {
            doc: this,
            indentStep: "  ",
            keep,
            mapAsMap: keep && !!mapAsMap,
            maxAliasCount,
            stringify
          };
          const anchorNames = Object.keys(this.anchors.map);
          if (anchorNames.length > 0)
            ctx.anchors = new Map(anchorNames.map((name) => [this.anchors.map[name], {
              alias: [],
              aliasCount: 0,
              count: 1
            }]));
          const res = resolveSeq.toJSON(this.contents, arg, ctx);
          if (typeof onAnchor === "function" && ctx.anchors)
            for (const {
              count,
              res: res2
            } of ctx.anchors.values())
              onAnchor(res2, count);
          return res;
        }
        toString() {
          if (this.errors.length > 0)
            throw new Error("Document with errors cannot be stringified");
          const indentSize = this.options.indent;
          if (!Number.isInteger(indentSize) || indentSize <= 0) {
            const s4 = JSON.stringify(indentSize);
            throw new Error(`"indent" option must be a positive integer, not ${s4}`);
          }
          this.setSchema();
          const lines = [];
          let hasDirectives = false;
          if (this.version) {
            let vd = "%YAML 1.2";
            if (this.schema.name === "yaml-1.1") {
              if (this.version === "1.0")
                vd = "%YAML:1.0";
              else if (this.version === "1.1")
                vd = "%YAML 1.1";
            }
            lines.push(vd);
            hasDirectives = true;
          }
          const tagNames = this.listNonDefaultTags();
          this.tagPrefixes.forEach(({
            handle,
            prefix
          }) => {
            if (tagNames.some((t3) => t3.indexOf(prefix) === 0)) {
              lines.push(`%TAG ${handle} ${prefix}`);
              hasDirectives = true;
            }
          });
          if (hasDirectives || this.directivesEndMarker)
            lines.push("---");
          if (this.commentBefore) {
            if (hasDirectives || !this.directivesEndMarker)
              lines.unshift("");
            lines.unshift(this.commentBefore.replace(/^/gm, "#"));
          }
          const ctx = {
            anchors: Object.create(null),
            doc: this,
            indent: "",
            indentStep: " ".repeat(indentSize),
            stringify
          };
          let chompKeep = false;
          let contentComment = null;
          if (this.contents) {
            if (this.contents instanceof resolveSeq.Node) {
              if (this.contents.spaceBefore && (hasDirectives || this.directivesEndMarker))
                lines.push("");
              if (this.contents.commentBefore)
                lines.push(this.contents.commentBefore.replace(/^/gm, "#"));
              ctx.forceBlockIndent = !!this.comment;
              contentComment = this.contents.comment;
            }
            const onChompKeep = contentComment ? null : () => chompKeep = true;
            const body = stringify(this.contents, ctx, () => contentComment = null, onChompKeep);
            lines.push(resolveSeq.addComment(body, "", contentComment));
          } else if (this.contents !== void 0) {
            lines.push(stringify(this.contents, ctx));
          }
          if (this.comment) {
            if ((!chompKeep || contentComment) && lines[lines.length - 1] !== "")
              lines.push("");
            lines.push(this.comment.replace(/^/gm, "#"));
          }
          return lines.join("\n") + "\n";
        }
      };
      PlainValue._defineProperty(Document, "defaults", documentOptions);
      exports.Document = Document;
      exports.defaultOptions = defaultOptions;
      exports.scalarOptions = scalarOptions;
    }
  });

  // node_modules/yaml/dist/index.js
  var require_dist = __commonJS({
    "node_modules/yaml/dist/index.js"(exports) {
      init_preact_shim();
      "use strict";
      var parseCst = require_parse_cst();
      var Document$1 = require_Document_9b4560a1();
      var Schema = require_Schema_88e323a7();
      var PlainValue = require_PlainValue_ec8e588e();
      var warnings = require_warnings_1000a372();
      require_resolveSeq_d03cb037();
      function createNode(value, wrapScalars = true, tag) {
        if (tag === void 0 && typeof wrapScalars === "string") {
          tag = wrapScalars;
          wrapScalars = true;
        }
        const options = Object.assign({}, Document$1.Document.defaults[Document$1.defaultOptions.version], Document$1.defaultOptions);
        const schema = new Schema.Schema(options);
        return schema.createNode(value, wrapScalars, tag);
      }
      var Document = class extends Document$1.Document {
        constructor(options) {
          super(Object.assign({}, Document$1.defaultOptions, options));
        }
      };
      function parseAllDocuments(src, options) {
        const stream = [];
        let prev;
        for (const cstDoc of parseCst.parse(src)) {
          const doc = new Document(options);
          doc.parse(cstDoc, prev);
          stream.push(doc);
          prev = doc;
        }
        return stream;
      }
      function parseDocument(src, options) {
        const cst = parseCst.parse(src);
        const doc = new Document(options).parse(cst[0]);
        if (cst.length > 1) {
          const errMsg = "Source contains multiple documents; please use YAML.parseAllDocuments()";
          doc.errors.unshift(new PlainValue.YAMLSemanticError(cst[1], errMsg));
        }
        return doc;
      }
      function parse(src, options) {
        const doc = parseDocument(src, options);
        doc.warnings.forEach((warning) => warnings.warn(warning));
        if (doc.errors.length > 0)
          throw doc.errors[0];
        return doc.toJSON();
      }
      function stringify(value, options) {
        const doc = new Document(options);
        doc.contents = value;
        return String(doc);
      }
      var YAML = {
        createNode,
        defaultOptions: Document$1.defaultOptions,
        Document,
        parse,
        parseAllDocuments,
        parseCST: parseCst.parse,
        parseDocument,
        scalarOptions: Document$1.scalarOptions,
        stringify
      };
      exports.YAML = YAML;
    }
  });

  // node_modules/yaml/index.js
  var require_yaml = __commonJS({
    "node_modules/yaml/index.js"(exports, module) {
      init_preact_shim();
      module.exports = require_dist().YAML;
    }
  });

  // node_modules/events/events.js
  var require_events = __commonJS({
    "node_modules/events/events.js"(exports, module) {
      init_preact_shim();
      "use strict";
      var R2 = typeof Reflect === "object" ? Reflect : null;
      var ReflectApply = R2 && typeof R2.apply === "function" ? R2.apply : function ReflectApply2(target, receiver, args) {
        return Function.prototype.apply.call(target, receiver, args);
      };
      var ReflectOwnKeys;
      if (R2 && typeof R2.ownKeys === "function") {
        ReflectOwnKeys = R2.ownKeys;
      } else if (Object.getOwnPropertySymbols) {
        ReflectOwnKeys = function ReflectOwnKeys2(target) {
          return Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target));
        };
      } else {
        ReflectOwnKeys = function ReflectOwnKeys2(target) {
          return Object.getOwnPropertyNames(target);
        };
      }
      function ProcessEmitWarning(warning) {
        if (console && console.warn)
          console.warn(warning);
      }
      var NumberIsNaN = Number.isNaN || function NumberIsNaN2(value) {
        return value !== value;
      };
      function EventEmitter() {
        EventEmitter.init.call(this);
      }
      module.exports = EventEmitter;
      module.exports.once = once;
      EventEmitter.EventEmitter = EventEmitter;
      EventEmitter.prototype._events = void 0;
      EventEmitter.prototype._eventsCount = 0;
      EventEmitter.prototype._maxListeners = void 0;
      var defaultMaxListeners = 10;
      function checkListener(listener) {
        if (typeof listener !== "function") {
          throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
        }
      }
      Object.defineProperty(EventEmitter, "defaultMaxListeners", {
        enumerable: true,
        get: function() {
          return defaultMaxListeners;
        },
        set: function(arg) {
          if (typeof arg !== "number" || arg < 0 || NumberIsNaN(arg)) {
            throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + ".");
          }
          defaultMaxListeners = arg;
        }
      });
      EventEmitter.init = function() {
        if (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        }
        this._maxListeners = this._maxListeners || void 0;
      };
      EventEmitter.prototype.setMaxListeners = function setMaxListeners(n2) {
        if (typeof n2 !== "number" || n2 < 0 || NumberIsNaN(n2)) {
          throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n2 + ".");
        }
        this._maxListeners = n2;
        return this;
      };
      function _getMaxListeners(that) {
        if (that._maxListeners === void 0)
          return EventEmitter.defaultMaxListeners;
        return that._maxListeners;
      }
      EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
        return _getMaxListeners(this);
      };
      EventEmitter.prototype.emit = function emit(type) {
        var args = [];
        for (var i4 = 1; i4 < arguments.length; i4++)
          args.push(arguments[i4]);
        var doError = type === "error";
        var events = this._events;
        if (events !== void 0)
          doError = doError && events.error === void 0;
        else if (!doError)
          return false;
        if (doError) {
          var er;
          if (args.length > 0)
            er = args[0];
          if (er instanceof Error) {
            throw er;
          }
          var err = new Error("Unhandled error." + (er ? " (" + er.message + ")" : ""));
          err.context = er;
          throw err;
        }
        var handler = events[type];
        if (handler === void 0)
          return false;
        if (typeof handler === "function") {
          ReflectApply(handler, this, args);
        } else {
          var len = handler.length;
          var listeners = arrayClone(handler, len);
          for (var i4 = 0; i4 < len; ++i4)
            ReflectApply(listeners[i4], this, args);
        }
        return true;
      };
      function _addListener(target, type, listener, prepend) {
        var m3;
        var events;
        var existing;
        checkListener(listener);
        events = target._events;
        if (events === void 0) {
          events = target._events = Object.create(null);
          target._eventsCount = 0;
        } else {
          if (events.newListener !== void 0) {
            target.emit("newListener", type, listener.listener ? listener.listener : listener);
            events = target._events;
          }
          existing = events[type];
        }
        if (existing === void 0) {
          existing = events[type] = listener;
          ++target._eventsCount;
        } else {
          if (typeof existing === "function") {
            existing = events[type] = prepend ? [listener, existing] : [existing, listener];
          } else if (prepend) {
            existing.unshift(listener);
          } else {
            existing.push(listener);
          }
          m3 = _getMaxListeners(target);
          if (m3 > 0 && existing.length > m3 && !existing.warned) {
            existing.warned = true;
            var w4 = new Error("Possible EventEmitter memory leak detected. " + existing.length + " " + String(type) + " listeners added. Use emitter.setMaxListeners() to increase limit");
            w4.name = "MaxListenersExceededWarning";
            w4.emitter = target;
            w4.type = type;
            w4.count = existing.length;
            ProcessEmitWarning(w4);
          }
        }
        return target;
      }
      EventEmitter.prototype.addListener = function addListener(type, listener) {
        return _addListener(this, type, listener, false);
      };
      EventEmitter.prototype.on = EventEmitter.prototype.addListener;
      EventEmitter.prototype.prependListener = function prependListener(type, listener) {
        return _addListener(this, type, listener, true);
      };
      function onceWrapper() {
        if (!this.fired) {
          this.target.removeListener(this.type, this.wrapFn);
          this.fired = true;
          if (arguments.length === 0)
            return this.listener.call(this.target);
          return this.listener.apply(this.target, arguments);
        }
      }
      function _onceWrap(target, type, listener) {
        var state = { fired: false, wrapFn: void 0, target, type, listener };
        var wrapped = onceWrapper.bind(state);
        wrapped.listener = listener;
        state.wrapFn = wrapped;
        return wrapped;
      }
      EventEmitter.prototype.once = function once2(type, listener) {
        checkListener(listener);
        this.on(type, _onceWrap(this, type, listener));
        return this;
      };
      EventEmitter.prototype.prependOnceListener = function prependOnceListener(type, listener) {
        checkListener(listener);
        this.prependListener(type, _onceWrap(this, type, listener));
        return this;
      };
      EventEmitter.prototype.removeListener = function removeListener(type, listener) {
        var list, events, position, i4, originalListener;
        checkListener(listener);
        events = this._events;
        if (events === void 0)
          return this;
        list = events[type];
        if (list === void 0)
          return this;
        if (list === listener || list.listener === listener) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else {
            delete events[type];
            if (events.removeListener)
              this.emit("removeListener", type, list.listener || listener);
          }
        } else if (typeof list !== "function") {
          position = -1;
          for (i4 = list.length - 1; i4 >= 0; i4--) {
            if (list[i4] === listener || list[i4].listener === listener) {
              originalListener = list[i4].listener;
              position = i4;
              break;
            }
          }
          if (position < 0)
            return this;
          if (position === 0)
            list.shift();
          else {
            spliceOne(list, position);
          }
          if (list.length === 1)
            events[type] = list[0];
          if (events.removeListener !== void 0)
            this.emit("removeListener", type, originalListener || listener);
        }
        return this;
      };
      EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
      EventEmitter.prototype.removeAllListeners = function removeAllListeners(type) {
        var listeners, events, i4;
        events = this._events;
        if (events === void 0)
          return this;
        if (events.removeListener === void 0) {
          if (arguments.length === 0) {
            this._events = Object.create(null);
            this._eventsCount = 0;
          } else if (events[type] !== void 0) {
            if (--this._eventsCount === 0)
              this._events = Object.create(null);
            else
              delete events[type];
          }
          return this;
        }
        if (arguments.length === 0) {
          var keys = Object.keys(events);
          var key;
          for (i4 = 0; i4 < keys.length; ++i4) {
            key = keys[i4];
            if (key === "removeListener")
              continue;
            this.removeAllListeners(key);
          }
          this.removeAllListeners("removeListener");
          this._events = Object.create(null);
          this._eventsCount = 0;
          return this;
        }
        listeners = events[type];
        if (typeof listeners === "function") {
          this.removeListener(type, listeners);
        } else if (listeners !== void 0) {
          for (i4 = listeners.length - 1; i4 >= 0; i4--) {
            this.removeListener(type, listeners[i4]);
          }
        }
        return this;
      };
      function _listeners(target, type, unwrap) {
        var events = target._events;
        if (events === void 0)
          return [];
        var evlistener = events[type];
        if (evlistener === void 0)
          return [];
        if (typeof evlistener === "function")
          return unwrap ? [evlistener.listener || evlistener] : [evlistener];
        return unwrap ? unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
      }
      EventEmitter.prototype.listeners = function listeners(type) {
        return _listeners(this, type, true);
      };
      EventEmitter.prototype.rawListeners = function rawListeners(type) {
        return _listeners(this, type, false);
      };
      EventEmitter.listenerCount = function(emitter, type) {
        if (typeof emitter.listenerCount === "function") {
          return emitter.listenerCount(type);
        } else {
          return listenerCount.call(emitter, type);
        }
      };
      EventEmitter.prototype.listenerCount = listenerCount;
      function listenerCount(type) {
        var events = this._events;
        if (events !== void 0) {
          var evlistener = events[type];
          if (typeof evlistener === "function") {
            return 1;
          } else if (evlistener !== void 0) {
            return evlistener.length;
          }
        }
        return 0;
      }
      EventEmitter.prototype.eventNames = function eventNames() {
        return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
      };
      function arrayClone(arr, n2) {
        var copy = new Array(n2);
        for (var i4 = 0; i4 < n2; ++i4)
          copy[i4] = arr[i4];
        return copy;
      }
      function spliceOne(list, index) {
        for (; index + 1 < list.length; index++)
          list[index] = list[index + 1];
        list.pop();
      }
      function unwrapListeners(arr) {
        var ret = new Array(arr.length);
        for (var i4 = 0; i4 < ret.length; ++i4) {
          ret[i4] = arr[i4].listener || arr[i4];
        }
        return ret;
      }
      function once(emitter, name) {
        return new Promise(function(resolve, reject) {
          function errorListener(err) {
            emitter.removeListener(name, resolver);
            reject(err);
          }
          function resolver() {
            if (typeof emitter.removeListener === "function") {
              emitter.removeListener("error", errorListener);
            }
            resolve([].slice.call(arguments));
          }
          ;
          eventTargetAgnosticAddListener(emitter, name, resolver, { once: true });
          if (name !== "error") {
            addErrorHandlerIfEventEmitter(emitter, errorListener, { once: true });
          }
        });
      }
      function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
        if (typeof emitter.on === "function") {
          eventTargetAgnosticAddListener(emitter, "error", handler, flags);
        }
      }
      function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
        if (typeof emitter.on === "function") {
          if (flags.once) {
            emitter.once(name, listener);
          } else {
            emitter.on(name, listener);
          }
        } else if (typeof emitter.addEventListener === "function") {
          emitter.addEventListener(name, function wrapListener(arg) {
            if (flags.once) {
              emitter.removeEventListener(name, wrapListener);
            }
            listener(arg);
          });
        } else {
          throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
        }
      }
    }
  });

  // src/advgame.jsx
  init_preact_shim();

  // node_modules/preact/debug/dist/debug.module.js
  init_preact_shim();
  init_preact_module();

  // node_modules/preact/devtools/dist/devtools.module.js
  init_preact_shim();
  init_preact_module();
  typeof window != "undefined" && window.__PREACT_DEVTOOLS__ && window.__PREACT_DEVTOOLS__.attachPreact("10.5.14", l, { Fragment: d, Component: _ });

  // node_modules/preact/debug/dist/debug.module.js
  var o2 = {};
  function a2(n2) {
    return n2.type === d ? "Fragment" : typeof n2.type == "function" ? n2.type.displayName || n2.type.name : typeof n2.type == "string" ? n2.type : "#text";
  }
  var i2 = [];
  var s2 = [];
  function c2() {
    return i2.length > 0 ? i2[i2.length - 1] : null;
  }
  var l2 = false;
  function u2(n2) {
    return typeof n2.type == "function" && n2.type != d;
  }
  function f2(n2) {
    for (var t3 = [n2], e3 = n2; e3.__o != null; )
      t3.push(e3.__o), e3 = e3.__o;
    return t3.reduce(function(n3, t4) {
      n3 += "  in " + a2(t4);
      var e4 = t4.__source;
      return e4 ? n3 += " (at " + e4.fileName + ":" + e4.lineNumber + ")" : l2 || (l2 = true, console.warn("Add @babel/plugin-transform-react-jsx-source to get a more detailed component stack. Note that you should not add it to production builds of your App for bundle size reasons.")), n3 + "\n";
    }, "");
  }
  var p = typeof WeakMap == "function";
  var d2 = _.prototype.setState;
  _.prototype.setState = function(n2, t3) {
    return this.__v == null ? this.state == null && console.warn('Calling "this.setState" inside the constructor of a component is a no-op and might be a bug in your application. Instead, set "this.state = {}" directly.\n\n' + f2(c2())) : this.__P == null && console.warn(`Can't call "this.setState" on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method.

` + f2(this.__v)), d2.call(this, n2, t3);
  };
  var h2 = _.prototype.forceUpdate;
  function y2(n2) {
    var t3 = n2.props, e3 = a2(n2), o4 = "";
    for (var r3 in t3)
      if (t3.hasOwnProperty(r3) && r3 !== "children") {
        var i4 = t3[r3];
        typeof i4 == "function" && (i4 = "function " + (i4.displayName || i4.name) + "() {}"), i4 = Object(i4) !== i4 || i4.toString ? i4 + "" : Object.prototype.toString.call(i4), o4 += " " + r3 + "=" + JSON.stringify(i4);
      }
    var s4 = t3.children;
    return "<" + e3 + o4 + (s4 && s4.length ? ">..</" + e3 + ">" : " />");
  }
  _.prototype.forceUpdate = function(n2) {
    return this.__v == null ? console.warn('Calling "this.forceUpdate" inside the constructor of a component is a no-op and might be a bug in your application.\n\n' + f2(c2())) : this.__P == null && console.warn(`Can't call "this.forceUpdate" on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method.

` + f2(this.__v)), h2.call(this, n2);
  }, function() {
    !function() {
      var t4 = l.__b, e4 = l.diffed, o4 = l.__, r4 = l.vnode, a4 = l.__r;
      l.diffed = function(n2) {
        u2(n2) && s2.pop(), i2.pop(), e4 && e4(n2);
      }, l.__b = function(n2) {
        u2(n2) && i2.push(n2), t4 && t4(n2);
      }, l.__ = function(n2, t5) {
        s2 = [], o4 && o4(n2, t5);
      }, l.vnode = function(n2) {
        n2.__o = s2.length > 0 ? s2[s2.length - 1] : null, r4 && r4(n2);
      }, l.__r = function(n2) {
        u2(n2) && s2.push(n2), a4 && a4(n2);
      };
    }();
    var t3 = false, e3 = l.__b, r3 = l.diffed, c4 = l.vnode, l4 = l.__e, d4 = l.__, h4 = l.__h, m3 = p ? { useEffect: new WeakMap(), useLayoutEffect: new WeakMap(), lazyPropTypes: new WeakMap() } : null, v3 = [];
    l.__e = function(n2, t4, e4) {
      if (t4 && t4.__c && typeof n2.then == "function") {
        var o4 = n2;
        n2 = new Error("Missing Suspense. The throwing component was: " + a2(t4));
        for (var r4 = t4; r4; r4 = r4.__)
          if (r4.__c && r4.__c.__c) {
            n2 = o4;
            break;
          }
        if (n2 instanceof Error)
          throw n2;
      }
      try {
        l4(n2, t4, e4), typeof n2.then != "function" && setTimeout(function() {
          throw n2;
        });
      } catch (n3) {
        throw n3;
      }
    }, l.__ = function(n2, t4) {
      if (!t4)
        throw new Error("Undefined parent passed to render(), this is the second argument.\nCheck if the element is available in the DOM/has the correct id.");
      var e4;
      switch (t4.nodeType) {
        case 1:
        case 11:
        case 9:
          e4 = true;
          break;
        default:
          e4 = false;
      }
      if (!e4) {
        var o4 = a2(n2);
        throw new Error("Expected a valid HTML node as a second argument to render.	Received " + t4 + " instead: render(<" + o4 + " />, " + t4 + ");");
      }
      d4 && d4(n2, t4);
    }, l.__b = function(n2) {
      var r4 = n2.type, i4 = function n3(t4) {
        return t4 ? typeof t4.type == "function" ? n3(t4.__) : t4 : {};
      }(n2.__);
      if (t3 = true, r4 === void 0)
        throw new Error("Undefined component passed to createElement()\n\nYou likely forgot to export your component or might have mixed up default and named imports" + y2(n2) + "\n\n" + f2(n2));
      if (r4 != null && typeof r4 == "object") {
        if (r4.__k !== void 0 && r4.__e !== void 0)
          throw new Error("Invalid type passed to createElement(): " + r4 + "\n\nDid you accidentally pass a JSX literal as JSX twice?\n\n  let My" + a2(n2) + " = " + y2(r4) + ";\n  let vnode = <My" + a2(n2) + " />;\n\nThis usually happens when you export a JSX literal and not the component.\n\n" + f2(n2));
        throw new Error("Invalid type passed to createElement(): " + (Array.isArray(r4) ? "array" : r4));
      }
      if (r4 !== "thead" && r4 !== "tfoot" && r4 !== "tbody" || i4.type === "table" ? r4 === "tr" && i4.type !== "thead" && i4.type !== "tfoot" && i4.type !== "tbody" && i4.type !== "table" ? console.error("Improper nesting of table. Your <tr> should have a <thead/tbody/tfoot/table> parent." + y2(n2) + "\n\n" + f2(n2)) : r4 === "td" && i4.type !== "tr" ? console.error("Improper nesting of table. Your <td> should have a <tr> parent." + y2(n2) + "\n\n" + f2(n2)) : r4 === "th" && i4.type !== "tr" && console.error("Improper nesting of table. Your <th> should have a <tr>." + y2(n2) + "\n\n" + f2(n2)) : console.error("Improper nesting of table. Your <thead/tbody/tfoot> should have a <table> parent." + y2(n2) + "\n\n" + f2(n2)), n2.ref !== void 0 && typeof n2.ref != "function" && typeof n2.ref != "object" && !("$$typeof" in n2))
        throw new Error(`Component's "ref" property should be a function, or an object created by createRef(), but got [` + typeof n2.ref + "] instead\n" + y2(n2) + "\n\n" + f2(n2));
      if (typeof n2.type == "string") {
        for (var s4 in n2.props)
          if (s4[0] === "o" && s4[1] === "n" && typeof n2.props[s4] != "function" && n2.props[s4] != null)
            throw new Error(`Component's "` + s4 + '" property should be a function, but got [' + typeof n2.props[s4] + "] instead\n" + y2(n2) + "\n\n" + f2(n2));
      }
      if (typeof n2.type == "function" && n2.type.propTypes) {
        if (n2.type.displayName === "Lazy" && m3 && !m3.lazyPropTypes.has(n2.type)) {
          var c5 = "PropTypes are not supported on lazy(). Use propTypes on the wrapped component itself. ";
          try {
            var l5 = n2.type();
            m3.lazyPropTypes.set(n2.type, true), console.warn(c5 + "Component wrapped in lazy() is " + a2(l5));
          } catch (n3) {
            console.warn(c5 + "We will log the wrapped component's name once it is loaded.");
          }
        }
        var u4 = n2.props;
        n2.type.__f && delete (u4 = function(n3, t4) {
          for (var e4 in t4)
            n3[e4] = t4[e4];
          return n3;
        }({}, u4)).ref, function(n3, t4, e4, r5, a4) {
          Object.keys(n3).forEach(function(e5) {
            var i5;
            try {
              i5 = n3[e5](t4, e5, r5, "prop", null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (n4) {
              i5 = n4;
            }
            !i5 || i5.message in o2 || (o2[i5.message] = true, console.error("Failed prop type: " + i5.message + (a4 && "\n" + a4() || "")));
          });
        }(n2.type.propTypes, u4, 0, a2(n2), function() {
          return f2(n2);
        });
      }
      e3 && e3(n2);
    }, l.__h = function(n2, e4, o4) {
      if (!n2 || !t3)
        throw new Error("Hook can only be invoked from render methods.");
      h4 && h4(n2, e4, o4);
    };
    var b3 = function(n2, t4) {
      return { get: function() {
        var e4 = "get" + n2 + t4;
        v3 && v3.indexOf(e4) < 0 && (v3.push(e4), console.warn("getting vnode." + n2 + " is deprecated, " + t4));
      }, set: function() {
        var e4 = "set" + n2 + t4;
        v3 && v3.indexOf(e4) < 0 && (v3.push(e4), console.warn("setting vnode." + n2 + " is not allowed, " + t4));
      } };
    }, w4 = { nodeName: b3("nodeName", "use vnode.type"), attributes: b3("attributes", "use vnode.props"), children: b3("children", "use vnode.props.children") }, g3 = Object.create({}, w4);
    l.vnode = function(n2) {
      var t4 = n2.props;
      if (n2.type !== null && t4 != null && ("__source" in t4 || "__self" in t4)) {
        var e4 = n2.props = {};
        for (var o4 in t4) {
          var r4 = t4[o4];
          o4 === "__source" ? n2.__source = r4 : o4 === "__self" ? n2.__self = r4 : e4[o4] = r4;
        }
      }
      n2.__proto__ = g3, c4 && c4(n2);
    }, l.diffed = function(n2) {
      if (n2.__k && n2.__k.forEach(function(t4) {
        if (t4 && t4.type === void 0) {
          delete t4.__, delete t4.__b;
          var e5 = Object.keys(t4).join(",");
          throw new Error("Objects are not valid as a child. Encountered an object with the keys {" + e5 + "}.\n\n" + f2(n2));
        }
      }), t3 = false, r3 && r3(n2), n2.__k != null)
        for (var e4 = [], o4 = 0; o4 < n2.__k.length; o4++) {
          var a4 = n2.__k[o4];
          if (a4 && a4.key != null) {
            var i4 = a4.key;
            if (e4.indexOf(i4) !== -1) {
              console.error('Following component has two or more children with the same key attribute: "' + i4 + '". This may cause glitches and misbehavior in rendering process. Component: \n\n' + y2(n2) + "\n\n" + f2(n2));
              break;
            }
            e4.push(i4);
          }
        }
    };
  }();

  // src/game/AdvGame.jsx
  init_preact_shim();

  // src/utils/ContentScaler.jsx
  init_preact_shim();
  init_preact_module();

  // node_modules/preact/hooks/dist/hooks.module.js
  init_preact_shim();
  init_preact_module();
  var t2;
  var u3;
  var r2;
  var o3 = 0;
  var i3 = [];
  var c3 = l.__b;
  var f3 = l.__r;
  var e2 = l.diffed;
  var a3 = l.__c;
  var v2 = l.unmount;
  function m2(t3, r3) {
    l.__h && l.__h(u3, t3, o3 || r3), o3 = 0;
    var i4 = u3.__H || (u3.__H = { __: [], __h: [] });
    return t3 >= i4.__.length && i4.__.push({}), i4.__[t3];
  }
  function l3(n2) {
    return o3 = 1, p2(w2, n2);
  }
  function p2(n2, r3, o4) {
    var i4 = m2(t2++, 2);
    return i4.t = n2, i4.__c || (i4.__ = [o4 ? o4(r3) : w2(void 0, r3), function(n3) {
      var t3 = i4.t(i4.__[0], n3);
      i4.__[0] !== t3 && (i4.__ = [t3, i4.__[1]], i4.__c.setState({}));
    }], i4.__c = u3), i4.__;
  }
  function y3(r3, o4) {
    var i4 = m2(t2++, 3);
    !l.__s && k2(i4.__H, o4) && (i4.__ = r3, i4.__H = o4, u3.__H.__h.push(i4));
  }
  function h3(r3, o4) {
    var i4 = m2(t2++, 4);
    !l.__s && k2(i4.__H, o4) && (i4.__ = r3, i4.__H = o4, u3.__h.push(i4));
  }
  function s3(n2) {
    return o3 = 5, d3(function() {
      return { current: n2 };
    }, []);
  }
  function d3(n2, u4) {
    var r3 = m2(t2++, 7);
    return k2(r3.__H, u4) && (r3.__ = n2(), r3.__H = u4, r3.__h = n2), r3.__;
  }
  function F(n2) {
    var r3 = u3.context[n2.__c], o4 = m2(t2++, 9);
    return o4.c = n2, r3 ? (o4.__ == null && (o4.__ = true, r3.sub(u3)), r3.props.value) : n2.__;
  }
  function q(n2) {
    var r3 = m2(t2++, 10), o4 = l3();
    return r3.__ = n2, u3.componentDidCatch || (u3.componentDidCatch = function(n3) {
      r3.__ && r3.__(n3), o4[1](n3);
    }), [o4[0], function() {
      o4[1](void 0);
    }];
  }
  function x2() {
    i3.forEach(function(t3) {
      if (t3.__P)
        try {
          t3.__H.__h.forEach(g2), t3.__H.__h.forEach(j2), t3.__H.__h = [];
        } catch (u4) {
          t3.__H.__h = [], l.__e(u4, t3.__v);
        }
    }), i3 = [];
  }
  l.__b = function(n2) {
    u3 = null, c3 && c3(n2);
  }, l.__r = function(n2) {
    f3 && f3(n2), t2 = 0;
    var r3 = (u3 = n2.__c).__H;
    r3 && (r3.__h.forEach(g2), r3.__h.forEach(j2), r3.__h = []);
  }, l.diffed = function(t3) {
    e2 && e2(t3);
    var o4 = t3.__c;
    o4 && o4.__H && o4.__H.__h.length && (i3.push(o4) !== 1 && r2 === l.requestAnimationFrame || ((r2 = l.requestAnimationFrame) || function(n2) {
      var t4, u4 = function() {
        clearTimeout(r3), b2 && cancelAnimationFrame(t4), setTimeout(n2);
      }, r3 = setTimeout(u4, 100);
      b2 && (t4 = requestAnimationFrame(u4));
    })(x2)), u3 = void 0;
  }, l.__c = function(t3, u4) {
    u4.some(function(t4) {
      try {
        t4.__h.forEach(g2), t4.__h = t4.__h.filter(function(n2) {
          return !n2.__ || j2(n2);
        });
      } catch (r3) {
        u4.some(function(n2) {
          n2.__h && (n2.__h = []);
        }), u4 = [], l.__e(r3, t4.__v);
      }
    }), a3 && a3(t3, u4);
  }, l.unmount = function(t3) {
    v2 && v2(t3);
    var u4 = t3.__c;
    if (u4 && u4.__H)
      try {
        u4.__H.__.forEach(g2);
      } catch (t4) {
        l.__e(t4, u4.__v);
      }
  };
  var b2 = typeof requestAnimationFrame == "function";
  function g2(n2) {
    var t3 = u3;
    typeof n2.__c == "function" && n2.__c(), u3 = t3;
  }
  function j2(n2) {
    var t3 = u3;
    n2.__c = n2.__(), u3 = t3;
  }
  function k2(n2, t3) {
    return !n2 || n2.length !== t3.length || t3.some(function(t4, u4) {
      return t4 !== n2[u4];
    });
  }
  function w2(n2, t3) {
    return typeof t3 == "function" ? t3(n2) : t3;
  }

  // node_modules/preact/compat/dist/compat.module.js
  init_preact_shim();
  init_preact_module();
  init_preact_module();
  function S2(n2, t3) {
    for (var e3 in t3)
      n2[e3] = t3[e3];
    return n2;
  }
  function C2(n2, t3) {
    for (var e3 in n2)
      if (e3 !== "__source" && !(e3 in t3))
        return true;
    for (var r3 in t3)
      if (r3 !== "__source" && n2[r3] !== t3[r3])
        return true;
    return false;
  }
  function E(n2) {
    this.props = n2;
  }
  (E.prototype = new _()).isPureReactComponent = true, E.prototype.shouldComponentUpdate = function(n2, t3) {
    return C2(this.props, n2) || C2(this.state, t3);
  };
  var w3 = l.__b;
  l.__b = function(n2) {
    n2.type && n2.type.__f && n2.ref && (n2.props.ref = n2.ref, n2.ref = null), w3 && w3(n2);
  };
  var R = typeof Symbol != "undefined" && Symbol.for && Symbol.for("react.forward_ref") || 3911;
  var A3 = l.__e;
  l.__e = function(n2, t3, e3) {
    if (n2.then) {
      for (var r3, u4 = t3; u4 = u4.__; )
        if ((r3 = u4.__c) && r3.__c)
          return t3.__e == null && (t3.__e = e3.__e, t3.__k = e3.__k), r3.__c(n2, t3);
    }
    A3(n2, t3, e3);
  };
  var O2 = l.unmount;
  function L2() {
    this.__u = 0, this.t = null, this.__b = null;
  }
  function U(n2) {
    var t3 = n2.__.__c;
    return t3 && t3.__e && t3.__e(n2);
  }
  function M2() {
    this.u = null, this.o = null;
  }
  l.unmount = function(n2) {
    var t3 = n2.__c;
    t3 && t3.__R && t3.__R(), t3 && n2.__h === true && (n2.type = null), O2 && O2(n2);
  }, (L2.prototype = new _()).__c = function(n2, t3) {
    var e3 = t3.__c, r3 = this;
    r3.t == null && (r3.t = []), r3.t.push(e3);
    var u4 = U(r3.__v), o4 = false, i4 = function() {
      o4 || (o4 = true, e3.__R = null, u4 ? u4(l4) : l4());
    };
    e3.__R = i4;
    var l4 = function() {
      if (!--r3.__u) {
        if (r3.state.__e) {
          var n3 = r3.state.__e;
          r3.__v.__k[0] = function n4(t5, e4, r4) {
            return t5 && (t5.__v = null, t5.__k = t5.__k && t5.__k.map(function(t6) {
              return n4(t6, e4, r4);
            }), t5.__c && t5.__c.__P === e4 && (t5.__e && r4.insertBefore(t5.__e, t5.__d), t5.__c.__e = true, t5.__c.__P = r4)), t5;
          }(n3, n3.__c.__P, n3.__c.__O);
        }
        var t4;
        for (r3.setState({ __e: r3.__b = null }); t4 = r3.t.pop(); )
          t4.forceUpdate();
      }
    }, f4 = t3.__h === true;
    r3.__u++ || f4 || r3.setState({ __e: r3.__b = r3.__v.__k[0] }), n2.then(i4, i4);
  }, L2.prototype.componentWillUnmount = function() {
    this.t = [];
  }, L2.prototype.render = function(n2, t3) {
    if (this.__b) {
      if (this.__v.__k) {
        var e3 = document.createElement("div"), r3 = this.__v.__k[0].__c;
        this.__v.__k[0] = function n3(t4, e4, r4) {
          return t4 && (t4.__c && t4.__c.__H && (t4.__c.__H.__.forEach(function(n4) {
            typeof n4.__c == "function" && n4.__c();
          }), t4.__c.__H = null), (t4 = S2({}, t4)).__c != null && (t4.__c.__P === r4 && (t4.__c.__P = e4), t4.__c = null), t4.__k = t4.__k && t4.__k.map(function(t5) {
            return n3(t5, e4, r4);
          })), t4;
        }(this.__b, e3, r3.__O = r3.__P);
      }
      this.__b = null;
    }
    var u4 = t3.__e && v(d, null, n2.fallback);
    return u4 && (u4.__h = null), [v(d, null, t3.__e ? null : n2.children), u4];
  };
  var T3 = function(n2, t3, e3) {
    if (++e3[1] === e3[0] && n2.o.delete(t3), n2.props.revealOrder && (n2.props.revealOrder[0] !== "t" || !n2.o.size))
      for (e3 = n2.u; e3; ) {
        for (; e3.length > 3; )
          e3.pop()();
        if (e3[1] < e3[0])
          break;
        n2.u = e3 = e3[2];
      }
  };
  (M2.prototype = new _()).__e = function(n2) {
    var t3 = this, e3 = U(t3.__v), r3 = t3.o.get(n2);
    return r3[0]++, function(u4) {
      var o4 = function() {
        t3.props.revealOrder ? (r3.push(u4), T3(t3, n2, r3)) : u4();
      };
      e3 ? e3(o4) : o4();
    };
  }, M2.prototype.render = function(n2) {
    this.u = null, this.o = new Map();
    var t3 = A(n2.children);
    n2.revealOrder && n2.revealOrder[0] === "b" && t3.reverse();
    for (var e3 = t3.length; e3--; )
      this.o.set(t3[e3], this.u = [1, 0, this.u]);
    return n2.children;
  }, M2.prototype.componentDidUpdate = M2.prototype.componentDidMount = function() {
    var n2 = this;
    this.o.forEach(function(t3, e3) {
      T3(n2, e3, t3);
    });
  };
  var j3 = typeof Symbol != "undefined" && Symbol.for && Symbol.for("react.element") || 60103;
  var P2 = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;
  var V = function(n2) {
    return (typeof Symbol != "undefined" && typeof Symbol() == "symbol" ? /fil|che|rad/i : /fil|che|ra/i).test(n2);
  };
  _.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(n2) {
    Object.defineProperty(_.prototype, n2, { configurable: true, get: function() {
      return this["UNSAFE_" + n2];
    }, set: function(t3) {
      Object.defineProperty(this, n2, { configurable: true, writable: true, value: t3 });
    } });
  });
  var H2 = l.event;
  function Z() {
  }
  function Y() {
    return this.cancelBubble;
  }
  function $2() {
    return this.defaultPrevented;
  }
  l.event = function(n2) {
    return H2 && (n2 = H2(n2)), n2.persist = Z, n2.isPropagationStopped = Y, n2.isDefaultPrevented = $2, n2.nativeEvent = n2;
  };
  var q3;
  var G = { configurable: true, get: function() {
    return this.class;
  } };
  var J = l.vnode;
  l.vnode = function(n2) {
    var t3 = n2.type, e3 = n2.props, r3 = e3;
    if (typeof t3 == "string") {
      for (var u4 in r3 = {}, e3) {
        var o4 = e3[u4];
        u4 === "value" && "defaultValue" in e3 && o4 == null || (u4 === "defaultValue" && "value" in e3 && e3.value == null ? u4 = "value" : u4 === "download" && o4 === true ? o4 = "" : /ondoubleclick/i.test(u4) ? u4 = "ondblclick" : /^onchange(textarea|input)/i.test(u4 + t3) && !V(e3.type) ? u4 = "oninput" : /^on(Ani|Tra|Tou|BeforeInp)/.test(u4) ? u4 = u4.toLowerCase() : P2.test(u4) ? u4 = u4.replace(/[A-Z0-9]/, "-$&").toLowerCase() : o4 === null && (o4 = void 0), r3[u4] = o4);
      }
      t3 == "select" && r3.multiple && Array.isArray(r3.value) && (r3.value = A(e3.children).forEach(function(n3) {
        n3.props.selected = r3.value.indexOf(n3.props.value) != -1;
      })), t3 == "select" && r3.defaultValue != null && (r3.value = A(e3.children).forEach(function(n3) {
        n3.props.selected = r3.multiple ? r3.defaultValue.indexOf(n3.props.value) != -1 : r3.defaultValue == n3.props.value;
      })), n2.props = r3;
    }
    t3 && e3.class != e3.className && (G.enumerable = "className" in e3, e3.className != null && (r3.class = e3.className), Object.defineProperty(r3, "className", G)), n2.$$typeof = j3, J && J(n2);
  };
  var K = l.__r;
  l.__r = function(n2) {
    K && K(n2), q3 = n2.__c;
  };

  // src/utils/ContentScaler.jsx
  function ContentScaler(props) {
    const [windowSize, setWindowSize] = l3({ width: 0, height: 0 });
    let ref = s3();
    y3(() => {
      let oldWidth = null;
      function updateSize() {
        let tagName = null;
        if (document.activeElement)
          tagName = document.activeElement.tagName;
        if (ref.current.clientWidth != oldWidth || tagName != "INPUT") {
          oldWidth = ref.current.clientWidth;
          if (tagName == "INPUT")
            document.activeElement.blur();
          setWindowSize({
            width: ref.current.clientWidth,
            height: ref.current.clientHeight
          });
        }
      }
      updateSize();
      let resizeObserver = new ResizeObserver(updateSize);
      resizeObserver.observe(ref.current);
      return () => {
        resizeObserver.disconnect();
      };
    }, []);
    let useWidth = props.width;
    let useHeight = props.height;
    let orientation = "landscape";
    if (windowSize.height > windowSize.width) {
      useWidth = props.portraitWidth || props.width;
      useHeight = props.portraitHeight || props.height;
      orientation = "portrait";
    }
    let scale;
    if (windowSize.width / useWidth < windowSize.height / useHeight)
      scale = windowSize.width / useWidth;
    else
      scale = windowSize.height / useHeight;
    let scaledWidth = useWidth * scale;
    let scaledHeight = useHeight * scale;
    let posX = (windowSize.width - scaledWidth) / 2;
    let posY = (windowSize.height - scaledHeight) / 2;
    let transform = `translate(${posX}px,${posY}px) scale(${scale})`;
    let innerStyle = {
      "width": useWidth + "px",
      "height": useHeight + "px",
      "transform": transform
    };
    let content = props.children;
    if (!ref.current)
      content = null;
    let ctx = {
      orientation,
      scale
    };
    return /* @__PURE__ */ v(ContentScaler.OrientationContext.Provider, {
      value: ctx
    }, /* @__PURE__ */ v("div", {
      ref,
      class: orientation + " content-scaler-outer"
    }, /* @__PURE__ */ v("div", {
      style: innerStyle,
      class: "content-scaler-inner"
    }, content)));
  }
  ContentScaler.OrientationContext = D();
  ContentScaler.Reset = (props) => {
    let ctx = F(ContentScaler.OrientationContext);
    let scale = ctx.scale;
    let oneOverScale = 1 / scale;
    let innerStyle = {
      "width": `calc( 100% * ${scale} )`,
      "height": `calc( 100% * ${scale} )`,
      "transform": `scale(${oneOverScale})`,
      "transform-origin": "0 0"
    };
    return /* @__PURE__ */ v("div", {
      class: props.class
    }, /* @__PURE__ */ v("div", {
      style: innerStyle
    }, props.children));
  };

  // src/view/AdvView.jsx
  init_preact_shim();

  // src/view/VerbListView.jsx
  init_preact_shim();

  // src/utils/react-util.js
  init_preact_shim();
  function useForceUpdate() {
    const [_3, forceUpdate] = p2((x3) => x3 + 1, 0);
    return forceUpdate;
  }
  function useFactory(factory) {
    let ref = s3();
    if (!ref.current) {
      ref.current = factory();
    }
    return ref.current;
  }
  function useEventUpdate(target, event2) {
    let forceUpdate = useForceUpdate();
    h3(() => {
      let updater = forceUpdate;
      target.on(event2, updater);
      return () => {
        target.off(event2, updater);
      };
    }, [target, event2]);
  }
  function useModel(cls, config) {
    let model = useFactory(() => new cls(config));
    useEventUpdate(model, "change");
    return model;
  }
  function useIsValueChanged(value) {
    let ref = s3();
    let change = false;
    if (value != ref.current)
      change = true;
    ref.current = value;
    return change;
  }
  function emStyle(x3, y4, w4, h4) {
    return {
      "left": x3 + 0.2 + "em",
      "top": y4 + 0.2 + "em",
      "width": w4 - 0.4 + "em",
      "height": h4 - 0.4 + "em",
      "box-sizing": "border-box",
      "border-width": "0.1em",
      "border-style": "solid",
      "padding": "0.2em",
      "line-height": "1em",
      "margin": "0.2em",
      "border-color": "transparent"
    };
  }
  function emAppStyle() {
    return {
      "margin": "-0.2em",
      "width": "100%",
      "height": "100%"
    };
  }
  function accessibleLinkProps() {
    function onKeyDown(e3) {
      if (e3.keyCode == 13 || e3.keyCode == 32) {
        e3.stopPropagation();
        e3.preventDefault();
        e3.target.click();
      }
    }
    return {
      tabindex: "0",
      onkeydown: onKeyDown
    };
  }
  function useInterval(callback, delay2) {
    const savedCallback = s3(callback);
    y3(() => {
      savedCallback.current = callback;
    }, [callback]);
    y3(() => {
      if (delay2 === null) {
        return;
      }
      const id = setInterval(() => savedCallback.current(), delay2);
      return () => clearInterval(id);
    }, [delay2]);
  }
  function useCountUp(value, enable) {
    let [currentValue, setCurrentValue] = l3(value);
    if (value < currentValue)
      setCurrentValue(value);
    function count() {
      if (Math.abs(value - currentValue) < 1) {
        setCurrentValue(value);
        return;
      }
      if (currentValue < value) {
        currentValue = currentValue + (value - currentValue) * 0.25;
        setCurrentValue(currentValue);
      }
    }
    let delay2 = null;
    if (value != currentValue && enable)
      delay2 = 50;
    useInterval(count, delay2);
    if (!enable)
      return value;
    return currentValue;
  }
  function useWindowEventListener(message, callback) {
    y3(() => {
      function onEvent(e3) {
        callback(e3);
      }
      window.addEventListener(message, onEvent);
      return () => {
        window.removeEventListener(message, onEvent);
      };
    }, [event, callback]);
  }

  // src/view/VerbListView.jsx
  function VerbListView(props) {
    let verbButtons = [];
    let i4 = 0;
    let disabled = false;
    if (props.model.story.getMessage())
      disabled = true;
    for (let verb of props.model.story.getVerbs()) {
      let cls = "bg-info adv-bx text-center text-white adv-btn ";
      if (props.model.currentVerb == verb.id)
        cls += " active";
      verbButtons.push(/* @__PURE__ */ v("button", {
        style: emStyle(0, i4 * 2, 7, 2),
        class: cls,
        onclick: props.model.dispatcher("toggleCurrentVerb", verb.id),
        disabled
      }, verb.label));
      i4++;
    }
    return /* @__PURE__ */ v("div", {
      style: emStyle(0, 18, 8, 11),
      class: "bg-body adv-bx"
    }, verbButtons);
  }

  // src/view/LocationView.jsx
  init_preact_shim();

  // src/utils/WebUtil.mjs
  init_preact_shim();
  var import_yaml = __toModule(require_yaml());
  async function fetchEx(url, options = {}) {
    let res, fetchRes;
    try {
      fetchRes = await fetch(url, {
        method: "GET"
      });
      switch (options.parse) {
        case "yaml":
          res = await fetchRes.text();
          res = import_yaml.default.parse(res);
          break;
        case "json":
          res = await fetchRes.json();
          break;
        default:
          res = await fetchRes.text();
          break;
      }
    } catch (e3) {
      console.log(e3);
      throw e3;
    }
    if (fetchRes.status != 200)
      throw new Error(res.message);
    return res;
  }
  function linkify(text, processor) {
    let m3 = text.match(/(^.*)\[([^\*]*)\](.*$)/);
    if (!m3)
      m3 = text.match(/(^.*)\*([^\*]*)\*(.*$)/);
    if (!m3)
      return [text];
    return [...linkify(m3[1], processor), processor(m3[2]), ...linkify(m3[3], processor)];
  }

  // src/view/LocationView.jsx
  function LocationView(props) {
    let ref = s3();
    let changed = useIsValueChanged(props.model.story.currentLocationId);
    h3(() => {
      if (changed)
        ref.current.scrollTop = 0;
    });
    function storyLink(objectId) {
      let object = props.model.story.getObjectById(objectId);
      if (!object)
        throw new Error("Unknown object: " + objectId);
      let accessible = null;
      if (props.model.currentVerb)
        accessible = accessibleLinkProps();
      return /* @__PURE__ */ v("a", __spreadValues({
        onclick: props.model.dispatcher("objectClick", object.id)
      }, accessible), object.getName());
    }
    let descs = props.model.story.getCurrentLocationDescriptions();
    let text = [];
    let loc = props.model.story.getCurrentLocation();
    if (loc.getHeader())
      text.push(/* @__PURE__ */ v("p", {
        class: "adv-location-top bg-primary"
      }, loc.getHeader()));
    for (let desc of descs) {
      desc = desc.toString();
      text.push(/* @__PURE__ */ v("p", null, linkify(desc, storyLink)));
    }
    let things = props.model.story.getThingsByCurrentLocation();
    for (let thing of things) {
      let desc = props.model.story.evalClause(thing.description);
      if (desc)
        text.push(/* @__PURE__ */ v("p", null, linkify(desc, storyLink)));
    }
    let cls = "adv-bx bg-white text-black adv-location-description ";
    if (props.model.currentVerb)
      cls += "adv-verb-selected";
    return /* @__PURE__ */ v(d, null, /* @__PURE__ */ v("div", {
      style: emStyle(0, 2, 19, 16),
      class: "adv-bx bg-white"
    }), /* @__PURE__ */ v("div", {
      style: emStyle(0, 2, 18.75, 16),
      class: cls,
      ref
    }, text));
  }

  // src/view/AlertView.jsx
  init_preact_shim();
  function AlertView(props) {
    let ref = s3();
    let message, fn, text;
    h3(() => {
      if (ref.current)
        ref.current.scrollTop = 0;
    });
    if (!props.model.story.getMessage() || props.model.story.getAlternatives())
      return null;
    let messages = [];
    for (let message2 of props.model.story.getMessage())
      messages.push(/* @__PURE__ */ v("p", null, message2));
    fn = props.model.dispatcher("dismissMessage");
    text = "OK";
    return /* @__PURE__ */ v(d, null, /* @__PURE__ */ v("div", {
      class: "adv-modal-cover bg-body"
    }), /* @__PURE__ */ v("div", {
      style: emStyle(1, 3, 17, 17),
      class: "bg-white adv-bx border-dark"
    }, /* @__PURE__ */ v("div", {
      style: emStyle(0, 0, 16, 13),
      class: "text-black adv-location-description",
      ref
    }, messages), /* @__PURE__ */ v("button", {
      style: emStyle(3, 13, 10, 2),
      class: "adv-btn bg-info text-white adv-bx",
      onclick: fn
    }, text)));
  }

  // src/view/InventoryView.jsx
  init_preact_shim();
  function InventoryView(props) {
    let things = props.model.story.getInventoryThings();
    let thingList = [];
    let accessible = null;
    if (props.model.currentVerb)
      accessible = accessibleLinkProps();
    for (let thing of things) {
      thingList.push(/* @__PURE__ */ v("a", __spreadValues({
        onclick: props.model.dispatcher("objectClick", thing.id)
      }, accessible), thing.getName()));
    }
    let cls = "adv-bx bg-body text-warning adv-inventory";
    if (props.model.currentVerb)
      cls += " adv-verb-selected";
    return /* @__PURE__ */ v("div", {
      style: emStyle(8, 18, 11, 11),
      class: cls
    }, thingList);
  }

  // src/view/HeaderView.jsx
  init_preact_shim();
  function HeaderView(props) {
    let countScore = Math.round(useCountUp(props.model.story.getCompletePercentage(), true));
    return /* @__PURE__ */ v(d, null, /* @__PURE__ */ v("div", {
      style: emStyle(0, 0, 19, 2),
      class: "adv-bx bg-black"
    }), /* @__PURE__ */ v("div", {
      style: emStyle(0, 0, 19, 2),
      class: "adv-bx adv-btn bg-black text-white text-center"
    }, props.model.story.getName()), /* @__PURE__ */ v("a", {
      style: emStyle(0, 0, 2, 2),
      class: "adv-bx text-center text-white adv-btn adv-menu-button",
      onclick: props.model.dispatcher("toggleMenu")
    }, /* @__PURE__ */ v("div", {
      class: "bi bi-three-dots-vertical"
    })), /* @__PURE__ */ v("div", {
      style: emStyle(14, 0, 5, 2),
      class: "adv-bx text-end text-white"
    }, countScore, "%"));
  }

  // src/view/ChoiceView.jsx
  init_preact_shim();

  // src/model/StoryAlternative.mjs
  init_preact_shim();
  var StoryAlternative = class {
    constructor(label, todo) {
      this.label = label;
      this.do = todo;
    }
  };

  // src/view/ChoiceView.jsx
  function ChoiceView(props) {
    let ref = s3();
    let message, fn, text;
    h3(() => {
      if (ref.current)
        ref.current.scrollTop = 0;
    });
    if (!props.model.story.getAlternatives())
      return null;
    let descriptions = [];
    for (let message2 of props.model.story.getMessage())
      if (!(message2 instanceof StoryAlternative))
        descriptions.push(/* @__PURE__ */ v("p", null, message2));
    let alternativeButtons = [];
    let i4 = 0;
    let top = 23 - props.model.story.getAlternatives().length * 3;
    for (let alternative of props.model.story.getAlternatives()) {
      alternativeButtons.push(/* @__PURE__ */ v("button", {
        style: emStyle(1, top + 3 * i4, 14, 3),
        class: "adv-btn bg-info text-white adv-bx",
        onclick: props.model.dispatcher("alternativeClick", i4)
      }, alternative.label));
      i4++;
    }
    return /* @__PURE__ */ v(d, null, /* @__PURE__ */ v("div", {
      class: "adv-modal-cover bg-body"
    }), /* @__PURE__ */ v("div", {
      style: emStyle(1, 3, 17, 25),
      class: "bg-white adv-bx border-dark"
    }, /* @__PURE__ */ v("div", {
      style: emStyle(0, 0, 16, top),
      class: "text-black adv-location-description",
      ref
    }, descriptions), alternativeButtons));
  }

  // src/view/MenuView.jsx
  init_preact_shim();
  function MenuView(props) {
    if (!props.model.menuVisible)
      return null;
    menuItems = {
      restart: "Restart",
      refresh: "Refresh",
      undo: "Undo"
    };
    let menuButtons = [];
    let i4 = 0;
    for (let k3 in menuItems) {
      let dispatcher = function() {
        props.model.dispatcher("toggleMenu")();
        props.model.dispatcher(k3)();
      };
      menuButtons.push(/* @__PURE__ */ v("a", {
        style: emStyle(0, i4 * 2, 9, 2),
        class: "adv-bx text-black adv-menu-item",
        onclick: dispatcher
      }, menuItems[k3]));
      i4++;
    }
    return /* @__PURE__ */ v(d, null, /* @__PURE__ */ v("div", {
      class: "adv-modal-cover bg-body",
      onclick: props.model.dispatcher("toggleMenu")
    }), /* @__PURE__ */ v("div", {
      style: emStyle(0, 1, 10, i4 * 2 + 1),
      class: "adv-bx bg-white border-black"
    }, menuButtons));
  }

  // src/view/ErrorView.jsx
  init_preact_shim();
  function ErrorView(props) {
    let error = props.error;
    return /* @__PURE__ */ v("div", {
      style: emStyle(0, 0, 20, 30),
      class: "bg-dark adv-bx"
    }, /* @__PURE__ */ v("div", {
      style: emStyle(0, 6, 19, 16),
      class: "adv-bx bg-body"
    }), /* @__PURE__ */ v("div", {
      style: emStyle(0, 4, 19, 2),
      class: "text-warning"
    }, error.name), /* @__PURE__ */ v("div", {
      style: emStyle(0, 6, 19, 16),
      class: "text-white"
    }, error.message));
  }

  // src/view/AdvView.jsx
  function AdvView(props) {
    let storyContent;
    if (props.model.story) {
      storyContent = /* @__PURE__ */ v(d, null, /* @__PURE__ */ v(HeaderView, {
        model: props.model
      }), /* @__PURE__ */ v(LocationView, {
        model: props.model
      }), /* @__PURE__ */ v(InventoryView, {
        model: props.model
      }), /* @__PURE__ */ v(VerbListView, {
        model: props.model
      }), /* @__PURE__ */ v(ChoiceView, {
        model: props.model
      }), /* @__PURE__ */ v(AlertView, {
        model: props.model
      }), /* @__PURE__ */ v(MenuView, {
        model: props.model
      }));
    }
    return /* @__PURE__ */ v("div", {
      style: emStyle(0, 0, 20, 30),
      class: "bg-dark adv-bx"
    }, storyContent);
  }

  // src/model/AdvModel.js
  init_preact_shim();
  var import_events2 = __toModule(require_events());

  // src/model/Story.mjs
  init_preact_shim();

  // src/model/StoryObject.mjs
  init_preact_shim();
  var StoryObject = class {
    constructor(spec) {
      this.type = Object.keys(spec)[0];
      this.id = spec[this.type];
      switch (this.type) {
        case "thing":
          this.applySpec(spec, {
            thing: null,
            description: "There is a [" + spec.thing + "] here.",
            use: { fail: "Can't do that" },
            talkto: { fail: "Can't do that" },
            location: null,
            drop: "Dropped",
            pickup: "Taken",
            lookat: "Nothing interesting about it",
            name: spec.thing,
            exists: true,
            goto: { fail: "Can't do that" }
          });
          this.appliedVerbs = [];
          break;
        case "location":
          this.applySpec(spec, {
            name: spec.location,
            location: null,
            description: "you are in " + spec.location,
            enter: true,
            leave: true,
            header: null
          });
          break;
        case "state":
          this.value = spec.value;
          break;
        case "def":
          this.applySpec(spec, {
            def: null,
            do: null
          });
          break;
        default:
          throw new Error("Unknown story object type: " + this.type);
      }
    }
    getHeader() {
      return this.story.evalClause(this.header);
    }
    applySpec(spec, defaults) {
      for (let k3 in defaults) {
        if (spec.hasOwnProperty(k3))
          this[k3] = spec[k3];
        else
          this[k3] = defaults[k3];
      }
      for (let k3 in spec)
        if (!defaults.hasOwnProperty(k3))
          throw new Error("Unknown property: " + k3);
    }
    setStory(story) {
      this.story = story;
      if (this.type == "location") {
        for (let i4 in this.things)
          this.things[i4].setStory(story);
      }
    }
    assertType(type) {
      if (this.type != type)
        throw new Error(this.id + " is a " + this.type + ", not a " + type);
    }
    getName() {
      return this.story.yaMachine.evalSync(this.name);
    }
    getAlternatives() {
      let res = [];
      for (let i4 in this.alternatives) {
        let alternative = this.alternatives[i4];
        alternative.index = i4;
        let use = true;
        if (alternative.exists) {
          if (!this.story.evalClause(alternative.exists))
            use = false;
        }
        if (use)
          res.push(alternative);
      }
      return res;
    }
    getAlternative(index) {
      return this.alternatives[index];
    }
    setValue(value) {
      this.assertType("state");
      this.value = value;
    }
    getValue() {
      this.assertType("state");
      return this.story.evalClause(this.value);
    }
    async run() {
      this.assertType("def");
      return await this.story.yaMachine.evalAsync(this.do);
    }
  };

  // src/model/StoryException.mjs
  init_preact_shim();
  var StoryException = class {
    constructor(message) {
      this.message = message;
    }
    getMessage() {
      return this.message;
    }
  };

  // src/utils/YaMachine.mjs
  init_preact_shim();

  // src/utils/promise-util.mjs
  init_preact_shim();
  function createMethodPromise() {
    let resolve, reject;
    let p4 = new Promise((argResolve, argReject) => {
      resolve = argResolve;
      reject = argReject;
    });
    p4.resolve = resolve;
    p4.reject = reject;
    return p4;
  }
  function maybeAsync(fn) {
    let resolved, resolvedVal;
    let rejected, rejectedVal;
    let promise;
    function resolve(v3) {
      resolved = true;
      resolvedVal = v3;
    }
    function reject(v3) {
      rejected = true;
      rejectedVal = v3;
    }
    promise = fn(resolve, reject);
    if (resolved)
      return resolvedVal;
    if (rejected)
      throw rejectedVal;
    return new Promise((resolve2, reject2) => {
      promise.then(() => {
        if (resolved)
          resolve2(resolvedVal);
        if (rejected)
          reject2(rejectedVal);
        else
          reject2(Error("Function did not resolve or reject"));
      }).catch((e3) => {
        reject2(e3);
      });
    });
  }
  function isPromise(p4) {
    if (p4 instanceof Promise)
      return true;
    if (p4 instanceof Object && p4.hasOwnProperty("then"))
      return true;
    return false;
  }

  // src/utils/YaMachine.mjs
  var import_yaml2 = __toModule(require_yaml());
  var YaMachineContext = class {
    isReturned() {
      return this.returned;
    }
    setReturnValue(v3) {
      this.returned = true;
      this.returnValue = v3;
    }
    getReturnValue(v3) {
      return this.returnValue;
    }
  };
  var YaMachineError = class extends Error {
    constructor(message, range) {
      super(message);
      this.name = "YaMachineError";
      this.range = range;
    }
  };
  var YaMachine = class {
    constructor() {
      this.special = {
        if: this.if.bind(this),
        and: this.and.bind(this),
        or: this.or.bind(this),
        return: this.return.bind(this),
        obj: this.obj.bind(this),
        quote: this.quote.bind(this)
      };
      this.functions = {};
      this.macros = {};
      this.addFunction("not", (s4) => !this.castToBool(s4));
    }
    castToBool(value) {
      return value;
    }
    assertValidKeys(o4, validKeys) {
      let fn = Object.keys(o4)[0];
      for (let key in o4)
        if (!validKeys.includes(key) && key != "__sourceRange" && key != "__keySourceRange")
          throw new Error("Unknown key " + key + " for call to " + fn);
    }
    preprocess(clause) {
      if (this.isPrimitive(clause))
        return clause;
      else if (clause instanceof Array) {
        let res = [];
        for (let subClause of clause)
          res.push(this.preprocess(subClause));
        return res;
      } else if (typeof clause == "object") {
        let res = {};
        for (let k3 in clause) {
          let a4 = k3.split("-");
          let o4 = this.preprocess(clause[k3]);
          for (let i4 = a4.length - 1; i4 >= 1; i4--) {
            let newO = {};
            newO[a4[i4]] = o4;
            if (o4) {
              newO.__sourceRange = o4.__keySourceRange;
              newO.__keySourceRange = o4.__keySourceRange;
            }
            o4 = newO;
          }
          res[a4[0]] = o4;
        }
        return res;
      } else
        throw new Error("Unknown form: " + JSON.stringify(clause));
    }
    addFunction(name, fn) {
      this.functions[name] = fn;
    }
    addMacro(name, fn) {
      this.macros[name] = fn;
    }
    and(clause, context) {
      return maybeAsync(async (resolve, reject) => {
        try {
          this.assertValidKeys(clause, ["and"]);
          if (!(clause.and instanceof Array))
            throw new Error("and needs an array");
          let ret = true;
          for (let argPart of clause.and) {
            if (ret) {
              let v3 = this.evalWithContext(argPart, context);
              if (isPromise(v3))
                v3 = await v3;
              ret = ret && this.castToBool(v3);
            }
          }
          resolve(ret);
        } catch (e3) {
          reject(e3);
        }
      });
    }
    or(clause, context) {
      return maybeAsync(async (resolve, reject) => {
        try {
          this.assertValidKeys(clause, ["or"]);
          if (!(clause.or instanceof Array))
            throw new Error("or needs an array");
          let ret = false;
          for (let argPart of clause.or) {
            if (!ret) {
              let v3 = this.evalWithContext(argPart, context);
              if (isPromise(v3))
                v3 = await v3;
              ret = ret || this.castToBool(v3);
            }
          }
          resolve(ret);
        } catch (e3) {
          reject(e3);
        }
      });
    }
    if(clause, context) {
      return maybeAsync(async (resolve, reject) => {
        try {
          this.assertValidKeys(clause, ["if", "then", "else"]);
          let ifRes = this.evalWithContext(clause.if, context);
          if (isPromise(ifRes))
            ifRes = await ifRes;
          ifRes = this.castToBool(ifRes);
          if (ifRes && clause.then)
            return resolve(this.evalWithContext(clause.then, context));
          if (!ifRes && clause.else)
            return resolve(this.evalWithContext(clause.else, context));
          return resolve(void 0);
        } catch (e3) {
          reject(e3);
        }
      });
    }
    return(clause, context) {
      return maybeAsync(async (resolve, reject) => {
        try {
          this.assertValidKeys(clause, ["return"]);
          if (context.isReturned())
            return resolve(context.getReturnValue());
          let v3 = this.evalWithContext(clause.return, context);
          if (isPromise(v3))
            v3 = await v3;
          context.setReturnValue(v3);
          resolve(context.getReturnValue());
        } catch (e3) {
          reject(e3);
        }
      });
    }
    obj(clause, context) {
      return maybeAsync(async (resolve, reject) => {
        try {
          this.assertValidKeys(clause, ["obj"]);
          let ret;
          if (clause.obj instanceof Array)
            ret = [];
          else if (typeof clause.obj == "object")
            ret = {};
          else {
            let v3 = this.evalWithContext(clause.obj, context);
            if (isPromise(v3))
              v3 = await v3;
            return resolve(v3);
          }
          for (let c4 in clause.obj) {
            let v3 = this.evalWithContext(clause.obj[c4], context);
            if (isPromise(v3))
              v3 = await v3;
            ret[c4] = v3;
          }
          resolve(ret);
        } catch (e3) {
          reject(e3);
        }
      });
    }
    quote(clause, context) {
      return maybeAsync(async (resolve, reject) => {
        try {
          this.assertValidKeys(clause, ["quote"]);
          return resolve(clause);
        } catch (e3) {
          reject(e3);
        }
      });
    }
    isPrimitive(clause) {
      if (typeof clause == "string" || typeof clause == "boolean" || typeof clause == "number" || typeof clause == "undefined" || clause === null)
        return true;
      if (clause instanceof String)
        return true;
      return false;
    }
    evalWithContext(clause, context) {
      return maybeAsync(async (resolve, reject) => {
        try {
          if (context.isReturned())
            return resolve(context.getReturnValue());
          else if (this.isPrimitive(clause))
            return resolve(clause);
          else if (clause instanceof Array) {
            let ret;
            for (let subClause of clause) {
              if (!context.isReturned()) {
                ret = this.evalWithContext(subClause, context);
                if (isPromise(ret))
                  ret = await ret;
              }
            }
            if (context.isReturned())
              return resolve(context.getReturnValue());
            resolve(ret);
          } else if (typeof clause == "object") {
            let ret;
            let fn = Object.keys(clause)[0];
            if (this.special[fn]) {
              ret = this.special[fn](clause, context);
              if (isPromise(ret))
                ret = await ret;
              if (context.isReturned())
                ret = context.getReturnValue();
            } else if (this.macros[fn]) {
              let form = this.macros[fn](clause);
              ret = this.evalWithContext(form, context);
              if (isPromise(ret))
                ret = await ret;
              if (context.isReturned())
                ret = context.getReturnValue();
            } else if (this.functions[fn]) {
              this.assertValidKeys(clause, [fn]);
              let argClause = clause[fn];
              let arg = this.evalWithContext(argClause, context);
              if (isPromise(arg))
                arg = await arg;
              ret = this.functions[fn](arg);
              if (isPromise(ret))
                ret = await ret;
              if (context.isReturned())
                ret = context.getReturnValue();
            } else
              throw new YaMachineError("Unknown function '" + fn + "'.", clause[fn].__keySourceRange);
            resolve(ret);
          } else
            throw new Error("Unknown form: " + JSON.stringify(clause));
        } catch (e3) {
          reject(e3);
        }
      });
    }
    evalSync(clause) {
      let context = new YaMachineContext();
      let v3 = this.evalWithContext(clause, context);
      if (isPromise(v3))
        throw new Error("Async not allowed here");
      return v3;
    }
    async evalAsync(clause) {
      let context = new YaMachineContext();
      return await this.evalWithContext(clause, context);
    }
    toAnnotatedJS(doc) {
      let ret;
      switch (doc.constructor.name) {
        case "Document":
          return this.toAnnotatedJS(doc.contents);
          break;
        case "YAMLSeq":
          ret = [];
          for (let item of doc.items)
            ret.push(this.toAnnotatedJS(item));
          ret.__sourceRange = doc.range;
          return ret;
          break;
        case "YAMLMap":
          ret = {};
          for (let item of doc.items) {
            if (item.constructor.name != "Pair")
              throw new Error("Expected pair");
            let k3 = this.toAnnotatedJS(item.key);
            let v3 = this.toAnnotatedJS(item.value);
            v3.__keySourceRange = k3.__sourceRange;
            ret[k3] = v3;
          }
          ret.__sourceRange = doc.range;
          return ret;
          break;
        case "Scalar":
          ret = new String(doc.value);
          ret.__sourceRange = doc.range;
          return ret;
          break;
        default:
          throw new Error("Unknown YAML node type: " + doc.constructor.name);
          break;
      }
    }
    parseAndPreprocess(s4) {
      import_yaml2.default.parse(s4);
      let doc = import_yaml2.default.parseDocument(s4);
      let o4 = this.toAnnotatedJS(doc);
      return this.preprocess(o4);
    }
  };

  // src/model/StoryVerbs.mjs
  init_preact_shim();
  var StoryVerb = class {
    constructor() {
    }
    setStory(story) {
      this.story = story;
    }
    async evalAndCheck(clause) {
      let res = await this.story.yaMachine.evalAsync(clause);
      if (res instanceof StoryException)
        return false;
      if (typeof res == "string")
        await this.story.message(res);
      return true;
    }
  };
  var SimpleClauseVerb = class extends StoryVerb {
    constructor() {
      super();
    }
    async execute(object) {
      if (object.type != "thing") {
        this.story.message("Can't do that");
        return;
      }
      if (await this.evalAndCheck(object[this.id])) {
        if (!object.appliedVerbs.includes(this.id))
          object.appliedVerbs.push(this.id);
      }
    }
  };
  var GotoVerb = class extends StoryVerb {
    constructor() {
      super();
      this.id = "goto";
      this.label = "GO TO";
    }
    async execute(object) {
      let current = this.story.getCurrentLocation();
      if (!await this.evalAndCheck(current.leave))
        return;
      if (object.type == "thing") {
        await this.story.yaMachine.evalAsync(object.goto);
      } else {
        if (!await this.evalAndCheck(object.enter))
          return;
        this.story.currentLocationId = object.id;
      }
    }
  };
  var PickupVerb = class extends StoryVerb {
    constructor() {
      super();
      this.id = "pickup";
      this.label = "PICK UP";
    }
    async execute(object) {
      if (object.type != "thing") {
        await this.story.message("Can't pick that up");
        return;
      }
      if (!await this.evalAndCheck(object.pickup))
        return;
      object.location = "inventory";
    }
  };
  var DropVerb = class extends StoryVerb {
    constructor() {
      super();
      this.id = "drop";
      this.label = "DROP";
    }
    async execute(object) {
      if (object.type != "thing") {
        await this.story.message("Can't drop that.");
        return;
      }
      if (!await this.evalAndCheck(object.drop))
        return;
      object.location = this.story.currentLocationId;
    }
  };
  var LookatVerb = class extends SimpleClauseVerb {
    constructor() {
      super();
      this.id = "lookat";
      this.label = "LOOK AT";
    }
  };
  var UseVerb = class extends SimpleClauseVerb {
    constructor() {
      super();
      this.id = "use";
      this.label = "USE";
    }
  };
  var TalktoVerb = class extends SimpleClauseVerb {
    constructor() {
      super();
      this.id = "talkto";
      this.label = "TALK TO";
    }
  };
  function createVerbs() {
    let classes = [
      GotoVerb,
      LookatVerb,
      UseVerb,
      PickupVerb,
      DropVerb,
      TalktoVerb
    ];
    let verbs = [];
    for (let cls of classes) {
      let verb = new cls();
      if (!verb.id)
        throw new Error("Verb doesn't have an id");
      verbs.push(verb);
    }
    return verbs;
  }

  // src/model/Story.mjs
  var import_events = __toModule(require_events());
  var import_yaml3 = __toModule(require_yaml());
  var Story = class extends import_events.default {
    constructor(source) {
      super();
      try {
        this.spec = import_yaml3.default.parse(new String(source));
        this.name = "Interactive Fiction Game";
        this.completeMessage = "Thanks for playing!";
        this.actions = [];
        this.setupYaMachine();
        this.verbsById = {};
        for (let verb of createVerbs()) {
          this.verbsById[verb.id] = verb;
          verb.setStory(this);
          this.yaMachine.addFunction(verb.id, async (arg) => {
            await this.execute(verb.id, arg);
          });
        }
        this.setupStory();
      } catch (e3) {
        this.error = e3;
        return;
      }
    }
    setupYaMachine() {
      let functions = {
        have: (id) => {
          return this.getObjectById(id, "thing").location == "inventory";
        },
        in: (id) => {
          return this.getCurrentLocation().id == id;
        },
        spawn: async (id) => {
          let o4 = this.getObjectById(id, "def");
          return await o4.run();
        },
        setdead: (none) => {
          this.dead = true;
        },
        set: (stateId) => {
          this.getObjectById(stateId, "state").setValue(true);
        },
        reset: (stateId) => {
          this.getObjectById(stateId, "state").setValue(false);
        },
        state: (stateId) => {
          return this.getObjectById(stateId, "state").getValue();
        },
        _message: async (message) => {
          return await this.message(message);
        },
        exception: (message) => {
          return new StoryException(message);
        },
        applied: (o4) => {
          let thing = this.getObjectById(o4.thing, "thing");
          return thing.appliedVerbs.includes(o4.verb);
        },
        _alternative: (o4) => {
          if (o4.hasOwnProperty("exists")) {
            if (!this.evalClause(o4.exists))
              return null;
          }
          return new StoryAlternative(o4.label, o4.do);
        }
      };
      let macros = {
        alternative: (clause) => {
          let v3 = { _alternative: { obj: {
            label: clause.alternative,
            do: {
              quote: clause.do
            }
          } } };
          if (clause.hasOwnProperty("exists"))
            v3._alternative.obj.exists = clause.exists;
          return v3;
        },
        fail: (clause) => {
          return [
            { message: clause.fail },
            { return: { exception: null } }
          ];
        },
        die: (clause) => {
          return [
            { message: clause.die },
            { setdead: null },
            { return: { exception: null } }
          ];
        },
        did: (clause) => {
          let verb = Object.keys(clause.did)[0];
          let thing = clause.did[verb];
          return {
            applied: {
              obj: {
                verb,
                thing
              }
            }
          };
        },
        message: (clause) => {
          return {
            _message: {
              obj: clause.message
            }
          };
        }
      };
      this.yaMachine = new YaMachine();
      for (let f4 in functions)
        this.yaMachine.addFunction(f4, functions[f4].bind(this));
      for (let m3 in macros)
        this.yaMachine.addMacro(m3, macros[m3].bind(this));
    }
    getVerbs() {
      let res = [];
      for (let verbId in this.verbsById)
        if (this.storyVerbs.includes(verbId))
          res.push(this.verbsById[verbId]);
      return res;
    }
    setupStory() {
      this.spec = this.yaMachine.preprocess(this.spec);
      this.objectives = [];
      this.objects = [];
      this.storyVerbs = ["goto", "pickup"];
      let startId;
      for (let objectSpec of this.spec) {
        let type = Object.keys(objectSpec)[0];
        switch (type) {
          case "objectives":
          case "name":
          case "complete-message":
          case "start":
            if (objectSpec.name)
              this.name = objectSpec.name;
            if (objectSpec["complete-message"])
              this.completeMessage = objectSpec["complete-message"];
            if (objectSpec.objectives)
              this.objectives = objectSpec.objectives;
            if (objectSpec.start)
              startId = objectSpec.start;
            break;
          case "verbs":
            this.storyVerbs = objectSpec.verbs;
            break;
          default:
            let o4 = new StoryObject(objectSpec);
            o4.setStory(this);
            this.objects.push(o4);
            if (o4.things)
              for (let object of o4.things)
                this.objects.push(object);
            break;
        }
      }
      if (!startId)
        startId = this.getStartLocation().id;
      this.currentLocationId = startId;
      this.currentMessage = null;
      this.yaMachine.evalAsync(this.getCurrentLocation().enter);
    }
    getStartLocation() {
      for (let object of this.objects)
        if (object.type == "location")
          return object;
    }
    getObjectById(id, type) {
      for (let object of this.objects)
        if (object.id == id) {
          if (type)
            object.assertType(type);
          return object;
        }
      return null;
    }
    getCurrentLocation() {
      return this.getObjectById(this.currentLocationId);
    }
    getCurrentLocationDescriptions() {
      return this.evalClauseArray(this.getCurrentLocation().description);
    }
    async actionExecute(verbId, objectId) {
      this.actions.push({
        action: verbId,
        objectId
      });
      await this.execute(verbId, objectId);
    }
    async execute(verbId, objectId) {
      let o4 = this.getObjectById(objectId);
      await this.verbsById[verbId].execute(o4);
      this.emit("change");
      if (this.dead || this.getCompletePercentage() == 100) {
        throw new Error("completion not yet implemented");
        await this.message("Thanks for playing!");
        this.restart();
        this.emit("change");
      }
    }
    async message(message) {
      if (this.currentMessage)
        throw new Error("there is already a message");
      if (message instanceof Array)
        this.currentMessage = message;
      else
        this.currentMessage = [message];
      let m3 = createMethodPromise();
      this.messagePromise = m3;
      this.emit("change");
      if (this.applyingActions && this.applyingActions.length) {
        let action = this.applyingActions.shift();
        if (action.action == "dismissMessage") {
          if (this.getAlternatives())
            m3.reject("Bad story structure");
          else
            this.dismissMessage();
        } else if (action.action == "chooseAlternative") {
          if (!this.getAlternatives())
            m3.reject("Bad story structure");
          else {
            await this.chooseAlternative(action.index);
            m3.resolve();
          }
        } else {
          m3.reject("Bad story structure");
        }
      }
      return await m3;
    }
    getMessage() {
      return this.currentMessage;
    }
    getAlternatives() {
      if (!this.currentMessage)
        return null;
      let alternatives = [];
      for (let a4 of this.currentMessage)
        if (a4 instanceof StoryAlternative)
          alternatives.push(a4);
      if (!alternatives.length)
        return null;
      return alternatives;
    }
    dismissMessage() {
      this.actions.push({
        action: "dismissMessage"
      });
      let p4 = this.messagePromise;
      this.currentMessage = null;
      this.messagePromise = null;
      if (p4)
        p4.resolve();
      this.emit("change");
    }
    async chooseAlternative(index) {
      this.actions.push({
        action: "chooseAlternative",
        index
      });
      let p4 = this.messagePromise;
      let todo = this.getAlternatives()[index].do;
      this.currentMessage = null;
      this.messagePromise = null;
      this.emit("change");
      let v3 = await this.yaMachine.evalAsync(todo);
      if (p4)
        p4.resolve(v3);
      this.emit("change");
    }
    getThingsByCurrentLocation() {
      let current = this.getCurrentLocation();
      let res = [];
      for (let object of this.objects) {
        if (object.type == "thing" && object.location == current.id && this.evalClause(object.exists))
          res.push(object);
      }
      return res;
    }
    getDestinationsByCurrentLocation() {
      let current = this.getCurrentLocation();
      let res = [];
      for (let id of current.destinations)
        res.push(this.getObjectById(id));
      return res;
    }
    getInventoryThings() {
      let res = [];
      for (let object of this.objects) {
        if (object.type == "thing" && object.location == "inventory")
          res.push(object);
      }
      return res;
    }
    evalClause(clause) {
      return this.yaMachine.evalSync(clause);
    }
    evalClauseArray(clauseArray) {
      let res = [];
      if (!(clauseArray instanceof Array))
        return [this.evalClause(clauseArray)];
      for (let clause of clauseArray) {
        let c4 = this.evalClause(clause);
        if (c4) {
          if (c4 instanceof Array)
            res = [...res, ...c4];
          else
            res.push(c4);
        }
      }
      return res;
    }
    getCompletePercentage() {
      if (!this.objectives.length)
        return 0;
      let complete = 0;
      for (let objectiveClause of this.objectives) {
        let v3 = this.evalClause(objectiveClause);
        if (v3 && !(v3 instanceof StoryException))
          complete++;
      }
      let percentage = Math.round(100 * complete / this.objectives.length);
      return percentage;
    }
    getName() {
      return this.name;
    }
    getActions() {
      return this.actions;
    }
    isMessageAction(action) {
      if (action.action == "dismissMessage" || action.action == "chooseAlternative")
        return true;
      return false;
    }
    haveMoreActionsToApply() {
      for (let action in this.applyingActions)
        if (!this.isMessageAction(action))
          return true;
      return false;
    }
    async applyActions(actions) {
      this.applyingActions = actions;
      while (this.applyingActions.length) {
        let action = this.applyingActions.shift();
        if (this.isMessageAction(action))
          throw new Error("Unexpected message action");
        if (this.haveMoreActionsToApply())
          await this.actionExecute(action.action, action.objectId);
        else
          this.actionExecute(action.action, action.objectId);
      }
      this.applyingActions = null;
    }
    getError() {
      return this.error;
    }
  };

  // src/model/AdvModel.js
  var AdvModel = class extends import_events2.default {
    constructor(props) {
      super();
      __publicField(this, "dispatcher", (fn, ...args) => {
        return () => {
          this[fn](...args);
          this.emit("change");
        };
      });
      this.props = props;
      this.safeLoadStory();
    }
    toggleCurrentVerb(verb) {
      if (this.currentVerb == verb)
        this.currentVerb = null;
      else
        this.currentVerb = verb;
    }
    objectClick(id) {
      if (!this.currentVerb)
        return;
      this.story.actionExecute(this.currentVerb, id).catch((e3) => {
        this.error = e3;
        this.emit("change");
      });
      this.currentVerb = null;
    }
    alternativeClick(index) {
      this.story.chooseAlternative(index);
    }
    dismissMessage() {
      this.story.dismissMessage();
    }
    async refresh() {
      if (!this.story)
        return await this.safeLoadStory();
      try {
        this.error = null;
        let actions = this.story.getActions();
        await this.loadStory();
        await this.story.applyActions(actions);
        this.emit("change");
      } catch (e3) {
        this.error = e3;
        this.emit("change");
      }
    }
    async undo() {
      let actions = this.story.getActions();
      actions.pop();
      await this.loadStory();
      await this.story.applyActions(actions);
      this.emit("change");
    }
    async restart() {
      await this.loadStory();
    }
    async loadStory() {
      if (this.props.storyUrl)
        this.storySource = await fetchEx(this.props.storyUrl);
      else if (this.props.storyStorageKey)
        this.storySource = window.localStorage.getItem(this.props.storyStorageKey);
      else if (this.props.storySessionKey)
        this.storySource = window.sessionStorage.getItem(this.props.storySessionKey);
      else {
        this.storySource = null;
        throw new Error("No story to load...");
      }
      if (this.story) {
        this.story.removeAllListeners();
        this.story = null;
      }
      console.log("creating story");
      this.story = new Story(this.storySource);
      console.log("story created");
      this.story.on("change", () => {
        this.emit("change");
      });
      this.emit("change");
    }
    async safeLoadStory() {
      try {
        this.error = null;
        await this.loadStory();
      } catch (e3) {
        this.error = e3;
        this.emit("change");
      }
    }
    toggleMenu() {
      this.menuVisible = !this.menuVisible;
    }
    getError() {
      if (this.story)
        return this.story.getError();
      if (this.error)
        return this.error;
      return Error("No story loaded");
    }
  };

  // src/game/AdvGame.jsx
  function AdvGame(props) {
    let model = useModel(AdvModel, props);
    let [error, resetError] = q();
    useWindowEventListener("message", (ev) => {
      switch (ev.data) {
        case "refresh":
          try {
            model.refresh();
            resetError();
          } catch (e3) {
            console.log("can't refresh,,");
          }
          break;
      }
    });
    if (model.getError())
      error = model.getError();
    let gameContent;
    if (error) {
      gameContent = /* @__PURE__ */ v(ErrorView, {
        error
      });
    } else {
      gameContent = /* @__PURE__ */ v(AdvView, {
        model
      });
    }
    return /* @__PURE__ */ v(ContentScaler, {
      width: "200",
      height: "300"
    }, /* @__PURE__ */ v("div", {
      class: "adv-main"
    }, /* @__PURE__ */ v("div", {
      style: emAppStyle()
    }, gameContent)));
  }

  // src/advgame.jsx
  for (let el of document.getElementsByClassName("adv-game"))
    S(/* @__PURE__ */ v(AdvGame, __spreadValues({}, el.dataset)), el);
})();
