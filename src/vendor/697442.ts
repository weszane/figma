var s; /**
       * @license
       * Video.js 8.10.0 <http://videojs.com/>
       * Copyright Brightcove, Inc. <https://www.brightcove.com/>
       * Available under Apache License Version 2.0
       * <https://github.com/videojs/video.js/blob/main/LICENSE>
       *
       * Includes vtt.js <https://github.com/mozilla/vtt.js>
       * Available under Apache License Version 2.0
       * <https://github.com/mozilla/vtt.js/blob/main/LICENSE>
       */
s = function () {
  "use strict";

  let e;
  let t;
  let s;
  let r;
  var n;
  var a = "8.10.0";
  let o = {};
  let l = function (e, t) {
    o[e] = o[e] || [];
    t && (o[e] = o[e].concat(t));
    return o[e];
  };
  function h(e, t) {
    return !((t = l(e).indexOf(t)) <= -1 || (o[e] = o[e].slice(), o[e].splice(t, 1), 0));
  }
  let d = {
    prefixed: !0
  };
  var u = [["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror", "fullscreen"], ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror", "-webkit-full-screen"]];
  var c = u[0];
  for (let t = 0; t < u.length; t++) if (u[t][1] in document) {
    e = u[t];
    break;
  }
  if (e) {
    for (let t = 0; t < e.length; t++) d[c[t]] = e[t];
    d.prefixed = e[0] !== c[0];
  }
  let p = [];
  function m(e) {
    return b(e) ? Object.keys(e) : [];
  }
  let g = function e(t, i = ":", s = "") {
    let r = "info";
    let n;
    function a(...e) {
      n("log", r, e);
    }
    n = (e, i, r) => {
      var n;
      var i = a.levels[i];
      var o = RegExp(`^(${i})$`);
      let l = t;
      if ("log" !== e && r.unshift(e.toUpperCase() + ":"), s && (l = "%c" + t, r.unshift(s)), r.unshift(l + ":"), p && (p.push([].concat(r)), n = p.length - 1e3, p.splice(0, 0 < n ? n : 0)), window.console) {
        let t = window.console[e];
        (t = t || "debug" !== e ? t : window.console.info || window.console.log) && i && o.test(e) && t[Array.isArray(r) ? "apply" : "call"](window.console, r);
      }
    };
    a.createLogger = (r, n, a) => e(t + ` ${n = void 0 !== n ? n : i} ` + r, n, void 0 !== a ? a : s);
    a.createNewLogger = (t, i, s) => e(t, i, s);
    a.levels = {
      all: "debug|log|warn|error",
      off: "",
      debug: "debug|log|warn|error",
      info: "log|warn|error",
      warn: "warn|error",
      error: "error",
      DEFAULT: r
    };
    a.level = e => {
      if ("string" == typeof e) {
        if (!a.levels.hasOwnProperty(e)) throw Error(`"${e}" in not a valid log level`);
        r = e;
      }
      return r;
    };
    a.history = () => p ? [].concat(p) : [];
    a.history.filter = e => (p || []).filter(t => RegExp(`.*${e}.*`).test(t[0]));
    a.history.clear = () => {
      p && (p.length = 0);
    };
    a.history.disable = () => {
      null !== p && (p.length = 0, p = null);
    };
    a.history.enable = () => {
      null === p && (p = []);
    };
    a.error = (...e) => n("error", r, e);
    a.warn = (...e) => n("warn", r, e);
    a.debug = (...e) => n("debug", r, e);
    return a;
  }("VIDEOJS");
  let f = g.createLogger;
  let y = Object.prototype.toString;
  function _(e, t) {
    m(e).forEach(i => t(e[i], i));
  }
  function v(e, t, i = 0) {
    return m(e).reduce((i, s) => t(i, e[s], s), i);
  }
  function b(e) {
    return !!e && "object" == typeof e;
  }
  function T(e) {
    return b(e) && "[object Object]" === y.call(e) && e.constructor === Object;
  }
  function S(...e) {
    let t = {};
    e.forEach(e => {
      e && _(e, (e, i) => {
        T(e) ? (T(t[i]) || (t[i] = {}), t[i] = S(t[i], e)) : t[i] = e;
      });
    });
    return t;
  }
  function w(e = {}) {
    var t;
    var i = [];
    for (let s in e) e.hasOwnProperty(s) && (t = e[s], i.push(t));
    return i;
  }
  function E(e, t, i, s = !0) {
    let r = i => Object.defineProperty(e, t, {
      value: i,
      enumerable: !0,
      writable: !0
    });
    var n = {
      configurable: !0,
      enumerable: !0,
      get() {
        var e = i();
        r(e);
        return e;
      }
    };
    s && (n.set = r);
    return Object.defineProperty(e, t, n);
  }
  var C = Object.freeze({
    __proto__: null,
    each: _,
    reduce: v,
    isObject: b,
    isPlain: T,
    merge: S,
    values: w,
    defineLazyProperty: E
  });
  let k = !1;
  let x = null;
  let I = !1;
  let A;
  let D = !1;
  let L = !1;
  let P = !1;
  let O = !1;
  let N = null;
  let R = null;
  let M = null;
  let U = !1;
  let B = !1;
  let F = !1;
  let q = !1;
  let j = !!(G() && ("ontouchstart" in window || window.navigator.maxTouchPoints || window.DocumentTouch && window.document instanceof window.DocumentTouch));
  var H;
  var V = window.navigator && window.navigator.userAgentData;
  if (V && V.platform && V.brands && (I = "Android" === V.platform, L = !!V.brands.find(e => "Microsoft Edge" === e.brand), P = !!V.brands.find(e => "Chromium" === e.brand), O = !L && P, N = R = (V.brands.find(e => "Chromium" === e.brand) || {}).version || null, B = "Windows" === V.platform), !P) {
    let e;
    let t = window.navigator && window.navigator.userAgent || "";
    k = /iPod/i.test(t);
    x = (V = t.match(/OS (\d+)_/i)) && V[1] ? V[1] : null;
    I = /Android/i.test(t);
    A = (V = t.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i)) ? (eG = V[1] && parseFloat(V[1]), H = V[2] && parseFloat(V[2]), eG && H ? parseFloat(V[1] + "." + V[2]) : eG || null) : null;
    D = /Firefox/i.test(t);
    L = /Edg/i.test(t);
    P = /Chrome/i.test(t) || /CriOS/i.test(t);
    O = !L && P;
    N = R = (H = t.match(/(Chrome|CriOS)\/(\d+)/)) && H[2] ? parseFloat(H[2]) : null;
    M = !(e = (n = /MSIE\s(\d+)\.\d/.exec(t)) && parseFloat(n[1])) && /Trident\/7.0/i.test(t) && /rv:11.0/.test(t) ? 11 : e;
    U = /Safari/i.test(t) && !O && !I && !L;
    B = /Windows/i.test(t);
    F = /iPad/i.test(t) || U && j && !/iPhone/i.test(t);
    q = /iPhone/i.test(t) && !F;
  }
  let $ = q || F || k;
  let z = (U || $) && !O;
  function W(e) {
    return "string" == typeof e && !!e.trim();
  }
  function G() {
    return document === window.document;
  }
  function X(e) {
    return b(e) && 1 === e.nodeType;
  }
  function K() {
    try {
      return window.parent !== window.self;
    } catch (e) {
      return !0;
    }
  }
  function Y(e) {
    return function (t, i) {
      return W(t) ? (i = X(i = W(i) ? document.querySelector(i) : i) ? i : document)[e] && i[e](t) : document[e](null);
    };
  }
  function Q(e = "div", t = {}, i = {}, s) {
    let r = document.createElement(e);
    Object.getOwnPropertyNames(t).forEach(function (e) {
      var i = t[e];
      "textContent" === e ? J(r, i) : r[e] === i && "tabIndex" !== e || (r[e] = i);
    });
    Object.getOwnPropertyNames(i).forEach(function (e) {
      r.setAttribute(e, i[e]);
    });
    s && ey(r, s);
    return r;
  }
  function J(e, t) {
    void 0 === e.textContent ? e.innerText = t : e.textContent = t;
    return e;
  }
  function Z(e, t) {
    t.firstChild ? t.insertBefore(e, t.firstChild) : t.appendChild(e);
  }
  function ee(e, t) {
    if (0 <= t.indexOf(" ")) throw Error("class has illegal whitespace characters");
    return e.classList.contains(t);
  }
  function et(e, ...t) {
    e.classList.add(...t.reduce((e, t) => e.concat(t.split(/\s+/)), []));
    return e;
  }
  function ei(e, ...t) {
    return e ? (e.classList.remove(...t.reduce((e, t) => e.concat(t.split(/\s+/)), [])), e) : (g.warn("removeClass was called with an element that doesn't exist"), null);
  }
  function es(e, t, i) {
    "boolean" != typeof (i = "function" == typeof i ? i(e, t) : i) && (i = void 0);
    t.split(/\s+/).forEach(t => e.classList.toggle(t, i));
    return e;
  }
  function er(e, t) {
    Object.getOwnPropertyNames(t).forEach(function (i) {
      var s = t[i];
      null == s || !1 === s ? e.removeAttribute(i) : e.setAttribute(i, !0 === s ? "" : s);
    });
  }
  function en(e) {
    var t = {};
    var i = ["autoplay", "controls", "playsinline", "loop", "muted", "default", "defaultMuted"];
    if (e && e.attributes && 0 < e.attributes.length) {
      var s = e.attributes;
      for (let e = s.length - 1; 0 <= e; e--) {
        var r = s[e].name;
        let n = s[e].value;
        i.includes(r) && (n = null !== n);
        t[r] = n;
      }
    }
    return t;
  }
  function ea(e, t) {
    return e.getAttribute(t);
  }
  function eo(e, t, i) {
    e.setAttribute(t, i);
  }
  function el(e, t) {
    e.removeAttribute(t);
  }
  function eh() {
    document.body.focus();
    document.onselectstart = function () {
      return !1;
    };
  }
  function ed() {
    document.onselectstart = function () {
      return !0;
    };
  }
  function eu(e) {
    if (e && e.getBoundingClientRect && e.parentNode) {
      let t = e.getBoundingClientRect();
      let i = {};
      ["bottom", "height", "left", "right", "top", "width"].forEach(e => {
        void 0 !== t[e] && (i[e] = t[e]);
      });
      i.height || (i.height = parseFloat(eS(e, "height")));
      i.width || (i.width = parseFloat(eS(e, "width")));
      return i;
    }
  }
  function ec(e) {
    if (!e || !e.offsetParent) return {
      left: 0,
      top: 0,
      width: 0,
      height: 0
    };
    var t = e.offsetWidth;
    var i = e.offsetHeight;
    let s = 0;
    let r = 0;
    for (; e.offsetParent && e !== document[d.fullscreenElement];) {
      s += e.offsetLeft;
      r += e.offsetTop;
      e = e.offsetParent;
    }
    return {
      left: s,
      top: r,
      width: t,
      height: i
    };
  }
  function ep(e, t) {
    var i = {
      x: 0,
      y: 0
    };
    if ($) {
      let t = e;
      for (; t && "html" !== t.nodeName.toLowerCase();) {
        var s;
        var r = eS(t, "transform");
        /^matrix/.test(r) ? (s = r.slice(7, -1).split(/,\s/).map(Number), i.x += s[4], i.y += s[5]) : /^matrix3d/.test(r) && (s = r.slice(9, -1).split(/,\s/).map(Number), i.x += s[12], i.y += s[13]);
        t = t.parentNode;
      }
    }
    var n = {};
    var a = ec(t.target);
    var e = ec(e);
    var o = e.width;
    var l = e.height;
    let h = t.offsetY - (e.top - a.top);
    let d = t.offsetX - (e.left - a.left);
    t.changedTouches && (d = t.changedTouches[0].pageX - e.left, h = t.changedTouches[0].pageY + e.top, $) && (d -= i.x, h -= i.y);
    n.y = 1 - Math.max(0, Math.min(1, h / l));
    n.x = Math.max(0, Math.min(1, d / o));
    return n;
  }
  function em(e) {
    return b(e) && 3 === e.nodeType;
  }
  function eg(e) {
    for (; e.firstChild;) e.removeChild(e.firstChild);
    return e;
  }
  function ef(e) {
    "function" == typeof e && (e = e());
    return (Array.isArray(e) ? e : [e]).map(e => X(e = "function" == typeof e ? e() : e) || em(e) ? e : "string" == typeof e && /\S/.test(e) ? document.createTextNode(e) : void 0).filter(e => e);
  }
  function ey(e, t) {
    ef(t).forEach(t => e.appendChild(t));
    return e;
  }
  function e_(e, t) {
    return ey(eg(e), t);
  }
  function ev(e) {
    return void 0 === e.button && void 0 === e.buttons || 0 === e.button && void 0 === e.buttons || "mouseup" === e.type && 0 === e.button && 0 === e.buttons || 0 === e.button && 1 === e.buttons;
  }
  V = Object.freeze({
    __proto__: null,
    get IS_IPOD() {
      return k;
    },
    get IOS_VERSION() {
      return x;
    },
    get IS_ANDROID() {
      return I;
    },
    get ANDROID_VERSION() {
      return A;
    },
    get IS_FIREFOX() {
      return D;
    },
    get IS_EDGE() {
      return L;
    },
    get IS_CHROMIUM() {
      return P;
    },
    get IS_CHROME() {
      return O;
    },
    get CHROMIUM_VERSION() {
      return N;
    },
    get CHROME_VERSION() {
      return R;
    },
    get IE_VERSION() {
      return M;
    },
    get IS_SAFARI() {
      return U;
    },
    get IS_WINDOWS() {
      return B;
    },
    get IS_IPAD() {
      return F;
    },
    get IS_IPHONE() {
      return q;
    },
    TOUCH_ENABLED: j,
    IS_IOS: $,
    IS_ANY_SAFARI: z
  });
  let eb = Y("querySelector");
  let eT = Y("querySelectorAll");
  function eS(e, t) {
    if (!e || !t || "function" != typeof window.getComputedStyle) return "";
    {
      let i;
      try {
        i = window.getComputedStyle(e);
      } catch (e) {
        return "";
      }
      return i ? i.getPropertyValue(t) || i[t] : "";
    }
  }
  function ew(e) {
    [...document.styleSheets].forEach(t => {
      try {
        var i = [...t.cssRules].map(e => e.cssText).join("");
        var s = document.createElement("style");
        s.textContent = i;
        e.document.head.appendChild(s);
      } catch (s) {
        (i = document.createElement("link")).rel = "stylesheet";
        i.type = t.type;
        i.media = t.media.mediaText;
        i.href = t.href;
        e.document.head.appendChild(i);
      }
    });
  }
  var eE = Object.freeze({
    __proto__: null,
    isReal: G,
    isEl: X,
    isInFrame: K,
    createEl: Q,
    textContent: J,
    prependTo: Z,
    hasClass: ee,
    addClass: et,
    removeClass: ei,
    toggleClass: es,
    setAttributes: er,
    getAttributes: en,
    getAttribute: ea,
    setAttribute: eo,
    removeAttribute: el,
    blockTextSelection: eh,
    unblockTextSelection: ed,
    getBoundingClientRect: eu,
    findPosition: ec,
    getPointerPosition: ep,
    isTextNode: em,
    emptyEl: eg,
    normalizeContent: ef,
    appendContent: ey,
    insertContent: e_,
    isSingleLeftClick: ev,
    $: eb,
    $$: eT,
    computedStyle: eS,
    copyStyleSheetsToWindow: ew
  });
  let eC = !1;
  let ek;
  function ex() {
    if (!1 !== ek.options.autoSetup) {
      var e = Array.prototype.slice.call(document.getElementsByTagName("video"));
      var t = Array.prototype.slice.call(document.getElementsByTagName("audio"));
      var i = Array.prototype.slice.call(document.getElementsByTagName("video-js"));
      var s = e.concat(t, i);
      if (s && 0 < s.length) for (function () {
        let e = 0;
        let t = s.length;
      }(); e < t; e++) {
        var r = s[e];
        if (!r || !r.getAttribute) {
          eI(1);
          break;
        }
        void 0 === r.player && null !== r.getAttribute("data-setup") && ek(r);
      } else eC || eI(1);
    }
  }
  function eI(e, t) {
    G() && (t && (ek = t), window.setTimeout(ex, e));
  }
  function eA() {
    eC = !0;
    window.removeEventListener("load", eA);
  }
  function eD(e) {
    var t = document.createElement("style");
    t.className = e;
    return t;
  }
  function eL(e, t) {
    e.styleSheet ? e.styleSheet.cssText = t : e.textContent = t;
  }
  G() && ("complete" === document.readyState ? eA() : window.addEventListener("load", eA));
  var eP = new WeakMap();
  let eO = 3;
  function eN(e, t) {
    var i;
    eP.has(e) && (0 === (i = eP.get(e)).handlers[t].length && (delete i.handlers[t], e.removeEventListener ? e.removeEventListener(t, i.dispatcher, !1) : e.detachEvent && e.detachEvent("on" + t, i.dispatcher)), Object.getOwnPropertyNames(i.handlers).length <= 0 && (delete i.handlers, delete i.dispatcher, delete i.disabled), 0 === Object.getOwnPropertyNames(i).length) && eP.$$delete(e);
  }
  function eR(e, t, i, s) {
    i.forEach(function (i) {
      e(t, i, s);
    });
  }
  function eM(e) {
    if (!e.fixed_) {
      if (!e || !e.isPropagationStopped || !e.isImmediatePropagationStopped) {
        var t;
        var i;
        let n = e || window.event;
        for (let t in e = {}, n) "layerX" === t || "layerY" === t || "keyLocation" === t || "webkitMovementX" === t || "webkitMovementY" === t || "path" === t || "returnValue" === t && n.preventDefault || (e[t] = n[t]);
        e.target || (e.target = e.srcElement || document);
        e.relatedTarget || (e.relatedTarget = e.fromElement === e.target ? e.toElement : e.fromElement);
        e.preventDefault = function () {
          n.preventDefault && n.preventDefault();
          e.returnValue = !1;
          n.returnValue = !1;
          e.defaultPrevented = !0;
        };
        e.defaultPrevented = !1;
        e.stopPropagation = function () {
          n.stopPropagation && n.stopPropagation();
          e.cancelBubble = !0;
          n.cancelBubble = !0;
          e.isPropagationStopped = s;
        };
        e.isPropagationStopped = r;
        e.stopImmediatePropagation = function () {
          n.stopImmediatePropagation && n.stopImmediatePropagation();
          e.isImmediatePropagationStopped = s;
          e.stopPropagation();
        };
        e.isImmediatePropagationStopped = r;
        null !== e.clientX && void 0 !== e.clientX && (t = document.documentElement, i = document.body, e.pageX = e.clientX + (t && t.scrollLeft || i && i.scrollLeft || 0) - (t && t.clientLeft || i && i.clientLeft || 0), e.pageY = e.clientY + (t && t.scrollTop || i && i.scrollTop || 0) - (t && t.clientTop || i && i.clientTop || 0));
        e.which = e.charCode || e.keyCode;
        null !== e.button && void 0 !== e.button && (e.button = 1 & e.button ? 0 : 4 & e.button ? 1 : 2 & e.button ? 2 : 0);
      }
      e.fixed_ = !0;
    }
    return e;
    function s() {
      return !0;
    }
    function r() {
      return !1;
    }
  }
  let eU = ["touchstart", "touchmove"];
  function eB(e, i, s) {
    if (Array.isArray(i)) return eR(eB, e, i, s);
    eP.has(e) || eP.set(e, {});
    let r = eP.get(e);
    if (r.handlers || (r.handlers = {}), r.handlers[i] || (r.handlers[i] = []), s.guid || (s.guid = eO++), r.handlers[i].push(s), r.dispatcher || (r.disabled = !1, r.dispatcher = function (t, i) {
      if (!r.disabled) {
        t = eM(t);
        var s = r.handlers[t.type];
        if (s) {
          var n = s.slice(0);
          for (function () {
            let s = 0;
            let r = n.length;
          }(); s < r && !t.isImmediatePropagationStopped(); s++) try {
            n[s].call(e, t, i);
          } catch (e) {
            g.error(e);
          }
        }
      }
    }), 1 === r.handlers[i].length) {
      if (e.addEventListener) {
        let s = !1;
        (function () {
          if ("boolean" != typeof t) {
            t = !1;
            try {
              var e = Object.defineProperty({}, "passive", {
                get() {
                  t = !0;
                }
              });
              window.addEventListener("test", null, e);
              window.removeEventListener("test", null, e);
            } catch (e) { }
          }
          return t;
        })() && -1 < eU.indexOf(i) && (s = {
          passive: !0
        });
        e.addEventListener(i, r.dispatcher, s);
      } else e.attachEvent && e.attachEvent("on" + i, r.dispatcher);
    }
  }
  function eF(e, t, i) {
    if (eP.has(e)) {
      let n = eP.get(e);
      if (n.handlers) {
        if (Array.isArray(t)) return eR(eF, e, t, i);
        var s = function (e, t) {
          n.handlers[t] = [];
          eN(e, t);
        };
        if (void 0 === t) for (let t in n.handlers) Object.prototype.hasOwnProperty.call(n.handlers || {}, t) && s(e, t); else {
          var r = n.handlers[t];
          if (r) {
            if (i) {
              if (i.guid) for (let e = 0; e < r.length; e++) r[e].guid === i.guid && r.splice(e--, 1);
              eN(e, t);
            } else s(e, t);
          }
        }
      }
    }
  }
  function eq(e, t, i) {
    var s = eP.has(e) ? eP.get(e) : {};
    var r = e.parentNode || e.ownerDocument;
    "string" == typeof t ? t = {
      type: t,
      target: e
    } : t.target || (t.target = e);
    t = eM(t);
    s.dispatcher && s.dispatcher.call(e, t, i);
    r && !t.isPropagationStopped() && !0 === t.bubbles ? eq.call(null, r, t, i) : !r && !t.defaultPrevented && t.target && t.target[t.type] && (eP.has(t.target) || eP.set(t.target, {}), s = eP.get(t.target), t.target[t.type]) && (s.disabled = !0, "function" == typeof t.target[t.type] && t.target[t.type](), s.disabled = !1);
    return !t.defaultPrevented;
  }
  function ej(e, t, i) {
    if (Array.isArray(t)) return eR(ej, e, t, i);
    function s() {
      eF(e, t, s);
      i.apply(this, arguments);
    }
    s.guid = i.guid = i.guid || eO++;
    eB(e, t, s);
  }
  function eH(e, t, i) {
    function s() {
      eF(e, t, s);
      i.apply(this, arguments);
    }
    s.guid = i.guid = i.guid || eO++;
    eB(e, t, s);
  }
  var eV = Object.freeze({
    __proto__: null,
    fixEvent: eM,
    on: eB,
    off: eF,
    trigger: eq,
    one: ej,
    any: eH
  });
  function e$(e, t, i) {
    t.guid || (t.guid = eO++);
    (e = t.bind(e)).guid = i ? i + "_" + t.guid : t.guid;
    return e;
  }
  function ez(e, t) {
    let i = window.performance.now();
    return function (...s) {
      var r = window.performance.now();
      r - i >= t && (e(...s), i = r);
    };
  }
  function eW(e, t, i, s = window) {
    let r;
    function n() {
      let n = this;
      let a = arguments;
      let o = function () {
        r = null;
        o = null;
        i || e.apply(n, a);
      };
      !r && i && e.apply(n, a);
      s.clearTimeout(r);
      r = s.setTimeout(o, t);
    }
    n.cancel = () => {
      s.clearTimeout(r);
      r = null;
    };
    return n;
  }
  var eG = Object.freeze({
    __proto__: null,
    UPDATE_REFRESH_INTERVAL: 30,
    bind_: e$,
    throttle: ez,
    debounce: eW
  });
  class eX {
    on(e, t) {
      var i = this.addEventListener;
      this.addEventListener = () => { };
      eB(this, e, t);
      this.addEventListener = i;
    }
    off(e, t) {
      eF(this, e, t);
    }
    one(e, t) {
      var i = this.addEventListener;
      this.addEventListener = () => { };
      ej(this, e, t);
      this.addEventListener = i;
    }
    any(e, t) {
      var i = this.addEventListener;
      this.addEventListener = () => { };
      eH(this, e, t);
      this.addEventListener = i;
    }
    trigger(e) {
      var t = e.type || e;
      e = eM(e = "string" == typeof e ? {
        type: t
      } : e);
      this.allowedEvents_[t] && this["on" + t] && this["on" + t](e);
      eq(this, e);
    }
    queueTrigger(e) {
      s = s || new Map();
      let t = e.type || e;
      let i = s.get(this);
      i || (i = new Map(), s.set(this, i));
      var r = i.get(t);
      i.$$delete(t);
      window.clearTimeout(r);
      var r = window.setTimeout(() => {
        i.$$delete(t);
        0 === i.size && (i = null, s.$$delete(this));
        this.trigger(e);
      }, 0);
      i.set(t, r);
    }
  }
  eX.prototype.allowedEvents_ = {};
  eX.prototype.addEventListener = eX.prototype.on;
  eX.prototype.removeEventListener = eX.prototype.off;
  eX.prototype.dispatchEvent = eX.prototype.trigger;
  let eK = e => "function" == typeof e.name ? e.name() : "string" == typeof e.name ? e.name : e.name_ || (e.constructor && e.constructor.name ? e.constructor.name : typeof e);
  let eY = e => e instanceof eX || !!e.eventBusEl_ && ["on", "one", "off", "trigger"].every(t => "function" == typeof e[t]);
  let eQ = e => "string" == typeof e && /\S/.test(e) || Array.isArray(e) && !!e.length;
  let eJ = (e, t, i) => {
    if (!e || !e.nodeName && !eY(e)) throw Error(`Invalid target for ${eK(t)}#${i}; must be a DOM node or evented object.`);
  };
  let eZ = (e, t, i) => {
    if (!eQ(e)) throw Error(`Invalid event type for ${eK(t)}#${i}; must be a non-empty string or array.`);
  };
  let e0 = (e, t, i) => {
    if ("function" != typeof e) throw Error(`Invalid listener for ${eK(t)}#${i}; must be a function.`);
  };
  let e1 = (e, t, i) => {
    let s;
    let r;
    let n;
    var a = t.length < 3 || t[0] === e || t[0] === e.eventBusEl_;
    a ? (s = e.eventBusEl_, 3 <= t.length && t.shift(), [r, n] = t) : [s, r, n] = t;
    eJ(s, e, i);
    eZ(r, e, i);
    e0(n, e, i);
    return {
      isTargetingSelf: a,
      target: s,
      type: r,
      listener: n = e$(e, n)
    };
  };
  let e2 = (e, t, i, s) => {
    eJ(e, e, t);
    e.nodeName ? eV[t](e, i, s) : e[t](i, s);
  };
  let e4 = {
    on(...e) {
      let {
        isTargetingSelf,
        target,
        type,
        listener
      } = e1(this, e, "on");
      if (e2(target, "on", type, listener), !isTargetingSelf) {
        let t = () => this.off(target, type, listener);
        t.guid = listener.guid;
        (e = () => this.off("dispose", t)).guid = listener.guid;
        e2(this, "on", "dispose", t);
        e2(target, "on", "dispose", e);
      }
    },
    one(...e) {
      let {
        isTargetingSelf,
        target,
        type,
        listener
      } = e1(this, e, "one");
      if (isTargetingSelf) e2(target, "one", type, listener); else {
        let e = (...t) => {
          this.off(target, type, e);
          listener.apply(null, t);
        };
        e.guid = listener.guid;
        e2(target, "one", type, e);
      }
    },
    any(...e) {
      let {
        isTargetingSelf,
        target,
        type,
        listener
      } = e1(this, e, "any");
      if (isTargetingSelf) e2(target, "any", type, listener); else {
        let e = (...t) => {
          this.off(target, type, e);
          listener.apply(null, t);
        };
        e.guid = listener.guid;
        e2(target, "any", type, e);
      }
    },
    off(e, t, i) {
      !e || eQ(e) ? eF(this.eventBusEl_, e, t) : (eJ(e, this, "off"), eZ(t, this, "off"), e0(i, this, "off"), i = e$(this, i), this.off("dispose", i), e.nodeName ? (eF(e, t, i), eF(e, "dispose", i)) : eY(e) && (e.off(t, i), e.off("dispose", i)));
    },
    trigger(e, t) {
      if (eJ(this.eventBusEl_, this, "trigger"), eQ(e && "string" != typeof e ? e.type : e)) return eq(this.eventBusEl_, e, t);
      throw Error(`Invalid event type for ${eK(this)}#trigger; must be a non-empty string or object with a type key that has a non-empty value.`);
    }
  };
  function e8(e, t = {}) {
    if (t = t.eventBusKey) {
      if (!e[t].nodeName) throw Error(`The eventBusKey "${t}" does not refer to an element.`);
      e.eventBusEl_ = e[t];
    } else e.eventBusEl_ = Q("span", {
      className: "vjs-event-bus"
    });
    Object.assign(e, e4);
    e.eventedCallbacks && e.eventedCallbacks.forEach(e => {
      e();
    });
    e.on("dispose", () => {
      e.off();
      [e, e.el_, e.eventBusEl_].forEach(function (e) {
        e && eP.has(e) && eP.$$delete(e);
      });
      window.setTimeout(() => {
        e.eventBusEl_ = null;
      }, 0);
    });
  }
  let e5 = {
    state: {},
    setState(e) {
      let t;
      "function" == typeof e && (e = e());
      _(e, (e, i) => {
        this.state[i] !== e && ((t = t || {})[i] = {
          from: this.state[i],
          to: e
        });
        this.state[i] = e;
      });
      t && eY(this) && this.trigger({
        changes: t,
        type: "statechanged"
      });
      return t;
    }
  };
  function e3(e, t) {
    Object.assign(e, e5);
    e.state = Object.assign({}, e.state, t);
    "function" == typeof e.handleStateChanged && eY(e) && e.on("statechanged", e.handleStateChanged);
  }
  function e6(e) {
    return "string" != typeof e ? e : e.replace(/./, e => e.toLowerCase());
  }
  function e7(e) {
    return "string" != typeof e ? e : e.replace(/./, e => e.toUpperCase());
  }
  function e9(e, t) {
    return e7(e) === e7(t);
  }
  var te = Object.freeze({
    __proto__: null,
    toLowerCase: e6,
    toTitleCase: e7,
    titleCaseEquals: e9
  });
  var tt = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== require.g ? require.g : "undefined" != typeof self ? self : {};
  function ti(e, t) {
    e(t = {
      exports: {}
    }, t.exports);
    return t.exports;
  }
  var ts = ti(function (e, t) {
    function i(e) {
      var t;
      return "number" == typeof (e = e && "object" == typeof e && (t = e.which || e.keyCode || e.charCode) ? t : e) ? o[e] : s[(t = String(e)).toLowerCase()] || r[t.toLowerCase()] || (1 === t.length ? t.charCodeAt(0) : void 0);
    }
    i.isEventKey = function (e, t) {
      if (e && "object" == typeof e) {
        if (null != (e = e.which || e.keyCode || e.charCode)) {
          if ("string" == typeof t) {
            var i = s[t.toLowerCase()];
            if (i || (i = r[t.toLowerCase()])) return i === e;
          } else if ("number" == typeof t) return t === e;
        }
        return !1;
      }
    };
    for (s = (t = e.exports = i).code = t.codes = {
      backspace: 8,
      tab: 9,
      enter: 13,
      shift: 16,
      ctrl: 17,
      alt: 18,
      "pause/break": 19,
      "caps lock": 20,
      esc: 27,
      space: 32,
      "page up": 33,
      "page down": 34,
      end: 35,
      home: 36,
      left: 37,
      up: 38,
      right: 39,
      down: 40,
      insert: 45,
      delete: 46,
      command: 91,
      "left command": 91,
      "right command": 93,
      "numpad *": 106,
      "numpad +": 107,
      "numpad -": 109,
      "numpad .": 110,
      "numpad /": 111,
      "num lock": 144,
      "scroll lock": 145,
      "my computer": 182,
      "my calculator": 183,
      ";": 186,
      "=": 187,
      ",": 188,
      "-": 189,
      ".": 190,
      "/": 191,
      "`": 192,
      "[": 219,
      "\\": 220,
      "]": 221,
      "'": 222
    }, r = t.aliases = {
      windows: 91,
      "\u21E7": 16,
      "\u2325": 18,
      "\u2303": 17,
      "\u2318": 91,
      ctl: 17,
      control: 17,
      option: 18,
      pause: 19,
      break: 19,
      caps: 20,
      return: 13,
      escape: 27,
      spc: 32,
      spacebar: 32,
      pgup: 33,
      pgdn: 34,
      ins: 45,
      del: 46,
      cmd: 91
    }, n = 97, void 0; n < 123; n++) {
      var s;
      var r;
      var n;
      s[String.fromCharCode(n)] = n - 32;
    }
    for (var n = 48; n < 58; n++) s[n - 48] = n;
    for (n = 1; n < 13; n++) s["f" + n] = n + 111;
    for (n = 0; n < 10; n++) s["numpad " + n] = n + 96;
    var a;
    var o = t.names = t.title = {};
    for (n in s) o[s[n]] = n;
    for (a in r) s[a] = r[a];
  });
  ts.code;
  ts.codes;
  ts.aliases;
  ts.names;
  ts.title;
  class tr {
    constructor(e, t, i) {
      !e && this.play ? this.player_ = e = this : this.player_ = e;
      this.isDisposed_ = !1;
      this.parentComponent_ = null;
      this.options_ = S({}, this.options_);
      t = this.options_ = S(this.options_, t);
      this.id_ = t.id || t.el && t.el.id;
      this.id_ || (e = e && e.id && e.id() || "no_player", this.id_ = e + "_component_" + eO++);
      this.name_ = t.name || null;
      t.el ? this.el_ = t.el : !1 !== t.createEl && (this.el_ = this.createEl());
      t.className && this.el_ && t.className.split(" ").forEach(e => this.addClass(e));
      ["on", "off", "one", "any", "trigger"].forEach(e => {
        this[e] = void 0;
      });
      !1 !== t.evented && (e8(this, {
        eventBusKey: this.el_ ? "el_" : null
      }), this.handleLanguagechange = this.handleLanguagechange.bind(this), this.on(this.player_, "languagechange", this.handleLanguagechange));
      e3(this, this.constructor.defaultState);
      this.children_ = [];
      this.childIndex_ = {};
      this.childNameIndex_ = {};
      this.setTimeoutIds_ = new Set();
      this.setIntervalIds_ = new Set();
      this.rafIds_ = new Set();
      this.namedRafs_ = new Map();
      (this.clearingTimersOnDispose_ = !1) !== t.initChildren && this.initChildren();
      this.ready(i);
      !1 !== t.reportTouchActivity && this.enableTouchActivity();
    }
    on(e, t) { }
    off(e, t) { }
    one(e, t) { }
    any(e, t) { }
    trigger(e, t) { }
    dispose(e = {}) {
      if (!this.isDisposed_) {
        if (this.readyQueue_ && (this.readyQueue_.length = 0), this.trigger({
          type: "dispose",
          bubbles: !1
        }), this.isDisposed_ = !0, this.children_) for (let e = this.children_.length - 1; 0 <= e; e--) this.children_[e].dispose && this.children_[e].dispose();
        this.children_ = null;
        this.childIndex_ = null;
        this.childNameIndex_ = null;
        this.parentComponent_ = null;
        this.el_ && (this.el_.parentNode && (e.restoreEl ? this.el_.parentNode.replaceChild(e.restoreEl, this.el_) : this.el_.parentNode.removeChild(this.el_)), this.el_ = null);
        this.player_ = null;
      }
    }
    isDisposed() {
      return !!this.isDisposed_;
    }
    player() {
      return this.player_;
    }
    options(e) {
      e && (this.options_ = S(this.options_, e));
      return this.options_;
    }
    el() {
      return this.el_;
    }
    createEl(e, t, i) {
      return Q(e, t, i);
    }
    localize(e, t, i = e) {
      var s = this.player_.language && this.player_.language();
      var r = this.player_.languages && this.player_.languages();
      var n = r && r[s];
      var s = s && s.split("-")[0];
      var r = r && r[s];
      let a = i;
      n && n[e] ? a = n[e] : r && r[e] && (a = r[e]);
      return a = t ? a.replace(/\{(\d+)\}/g, function (e, i) {
        return void 0 === (i = t[i - 1]) ? e : i;
      }) : a;
    }
    handleLanguagechange() { }
    contentEl() {
      return this.contentEl_ || this.el_;
    }
    id() {
      return this.id_;
    }
    name() {
      return this.name_;
    }
    children() {
      return this.children_;
    }
    getChildById(e) {
      return this.childIndex_[e];
    }
    getChild(e) {
      if (e) return this.childNameIndex_[e];
    }
    getDescendant(...e) {
      e = e.reduce((e, t) => e.concat(t), []);
      let t = this;
      for (let i = 0; i < e.length; i++) if (!(t = t.getChild(e[i])) || !t.getChild) return;
      return t;
    }
    setIcon(e, t = this.el()) {
      var i;
      var s;
      var r;
      if (this.player_.options_.experimentalSvgIcons) {
        r = "http://www.w3.org/2000/svg";
        i = Q("span", {
          className: "vjs-icon-placeholder vjs-svg-icon"
        }, {
          "aria-hidden": "true"
        });
        (s = document.createElementNS(r, "svg")).setAttributeNS(null, "viewBox", "0 0 512 512");
        r = document.createElementNS(r, "use");
        s.appendChild(r);
        r.setAttributeNS(null, "href", "#vjs-icon-" + e);
        i.appendChild(s);
        this.iconIsSet_ ? t.replaceChild(i, t.querySelector(".vjs-icon-placeholder")) : t.appendChild(i);
        this.iconIsSet_ = !0;
        return i;
      }
    }
    addChild(e, t = {}, i = this.children_.length) {
      let s;
      let r;
      if ("string" == typeof e) {
        r = e7(e);
        var n = t.componentClass || r;
        t.name = r;
        var a = tr.getComponent(n);
        if (!a) throw Error(`Component ${n} does not exist`);
        if ("function" != typeof a) return null;
        s = new a(this.player_ || this, t);
      } else s = e;
      if (s.parentComponent_ && s.parentComponent_.removeChild(s), this.children_.splice(i, 0, s), s.parentComponent_ = this, "function" == typeof s.id && (this.childIndex_[s.id()] = s), (r = r || s.name && e7(s.name())) && (this.childNameIndex_[r] = s, this.childNameIndex_[e6(r)] = s), "function" == typeof s.el && s.el()) {
        let e = null;
        this.children_[i + 1] && (this.children_[i + 1].el_ ? e = this.children_[i + 1].el_ : X(this.children_[i + 1]) && (e = this.children_[i + 1]));
        this.contentEl().insertBefore(s.el(), e);
      }
      return s;
    }
    removeChild(e) {
      if ((e = "string" == typeof e ? this.getChild(e) : e) && this.children_) {
        var t;
        let i = !1;
        for (let t = this.children_.length - 1; 0 <= t; t--) if (this.children_[t] === e) {
          i = !0;
          this.children_.splice(t, 1);
          break;
        }
        i && (e.parentComponent_ = null, this.childIndex_[e.id()] = null, this.childNameIndex_[e7(e.name())] = null, this.childNameIndex_[e6(e.name())] = null, t = e.el()) && t.parentNode === this.contentEl() && this.contentEl().removeChild(e.el());
      }
    }
    initChildren() {
      let e = this.options_.children;
      if (e) {
        let t;
        let i = this.options_;
        let s = tr.getComponent("Tech");
        (t = Array.isArray(e) ? e : Object.keys(e)).concat(Object.keys(this.options_).filter(function (e) {
          return !t.some(function (t) {
            return "string" == typeof t ? e === t : e === t.name;
          });
        })).map(t => {
          let i;
          let s;
          s = "string" == typeof t ? e[i = t] || this.options_[i] || {} : (i = t.name, t);
          return {
            name: i,
            opts: s
          };
        }).filter(e => (e = tr.getComponent(e.opts.componentClass || e7(e.name))) && !s.isTech(e)).forEach(e => {
          var t = e.name;
          let s = e.opts;
          !1 !== (s = void 0 !== i[t] ? i[t] : s) && ((s = !0 === s ? {} : s).playerOptions = this.options_.playerOptions, e = this.addChild(t, s)) && (this[t] = e);
        });
      }
    }
    buildCSSClass() {
      return "";
    }
    ready(e, t = !1) {
      e && (this.isReady_ ? t ? e.call(this) : this.setTimeout(e, 1) : (this.readyQueue_ = this.readyQueue_ || [], this.readyQueue_.push(e)));
    }
    triggerReady() {
      this.isReady_ = !0;
      this.setTimeout(function () {
        var e = this.readyQueue_;
        this.readyQueue_ = [];
        e && 0 < e.length && e.forEach(function (e) {
          e.call(this);
        }, this);
        this.trigger("ready");
      }, 1);
    }
    $(e, t) {
      return eb(e, t || this.contentEl());
    }
    $$(e, t) {
      return eT(e, t || this.contentEl());
    }
    hasClass(e) {
      return ee(this.el_, e);
    }
    addClass(...e) {
      et(this.el_, ...e);
    }
    removeClass(...e) {
      ei(this.el_, ...e);
    }
    toggleClass(e, t) {
      es(this.el_, e, t);
    }
    show() {
      this.removeClass("vjs-hidden");
    }
    hide() {
      this.addClass("vjs-hidden");
    }
    lockShowing() {
      this.addClass("vjs-lock-showing");
    }
    unlockShowing() {
      this.removeClass("vjs-lock-showing");
    }
    getAttribute(e) {
      return ea(this.el_, e);
    }
    setAttribute(e, t) {
      eo(this.el_, e, t);
    }
    removeAttribute(e) {
      el(this.el_, e);
    }
    width(e, t) {
      return this.dimension("width", e, t);
    }
    height(e, t) {
      return this.dimension("height", e, t);
    }
    dimensions(e, t) {
      this.width(e, !0);
      this.height(t);
    }
    dimension(e, t, i) {
      var s;
      var r;
      if (void 0 === t) return this.el_ ? -1 !== (r = (s = this.el_.style[e]).indexOf("px")) ? parseInt(s.slice(0, r), 10) : parseInt(this.el_["offset" + e7(e)], 10) : 0;
      -1 !== ("" + (t = null !== t && t == t ? t : 0)).indexOf("%") || -1 !== ("" + t).indexOf("px") ? this.el_.style[e] = t : this.el_.style[e] = "auto" === t ? "" : t + "px";
      i || this.trigger("componentresize");
    }
    currentDimension(e) {
      let t = 0;
      if ("width" !== e && "height" !== e) throw Error("currentDimension only accepts width or height value");
      (0 === (t = parseFloat(t = eS(this.el_, e))) || isNaN(t)) && (e = "offset" + e7(e), t = this.el_[e]);
      return t;
    }
    currentDimensions() {
      return {
        width: this.currentDimension("width"),
        height: this.currentDimension("height")
      };
    }
    currentWidth() {
      return this.currentDimension("width");
    }
    currentHeight() {
      return this.currentDimension("height");
    }
    focus() {
      this.el_.focus();
    }
    blur() {
      this.el_.blur();
    }
    handleKeyDown(e) {
      this.player_ && (ts.isEventKey(e, "Tab") || e.stopPropagation(), this.player_.handleKeyDown(e));
    }
    handleKeyPress(e) {
      this.handleKeyDown(e);
    }
    emitTapEvents() {
      let e;
      let t = 0;
      let i = null;
      function s() {
        e = !1;
      }
      this.on("touchstart", function (s) {
        1 === s.touches.length && (i = {
          pageX: s.touches[0].pageX,
          pageY: s.touches[0].pageY
        }, t = window.performance.now(), e = !0);
      });
      this.on("touchmove", function (t) {
        var s;
        (1 < t.touches.length || i && 10 < Math.sqrt((s = t.touches[0].pageX - i.pageX) * s + (t = t.touches[0].pageY - i.pageY) * t)) && (e = !1);
      });
      this.on("touchleave", s);
      this.on("touchcancel", s);
      this.on("touchend", function (s) {
        i = null;
        !0 === e && window.performance.now() - t < 200 && (s.preventDefault(), this.trigger("tap"));
      });
    }
    enableTouchActivity() {
      if (this.player() && this.player().reportUserActivity) {
        let t;
        let i = e$(this.player(), this.player().reportUserActivity);
        this.on("touchstart", function () {
          i();
          this.clearInterval(t);
          t = this.setInterval(i, 250);
        });
        var e = function (e) {
          i();
          this.clearInterval(t);
        };
        this.on("touchmove", i);
        this.on("touchend", e);
        this.on("touchcancel", e);
      }
    }
    setTimeout(e, t) {
      var i;
      e = e$(this, e);
      this.clearTimersOnDispose_();
      i = window.setTimeout(() => {
        this.setTimeoutIds_.has(i) && this.setTimeoutIds_.$$delete(i);
        e();
      }, t);
      this.setTimeoutIds_.add(i);
      return i;
    }
    clearTimeout(e) {
      this.setTimeoutIds_.has(e) && (this.setTimeoutIds_.$$delete(e), window.clearTimeout(e));
      return e;
    }
    setInterval(e, t) {
      e = e$(this, e);
      this.clearTimersOnDispose_();
      e = window.setInterval(e, t);
      this.setIntervalIds_.add(e);
      return e;
    }
    clearInterval(e) {
      this.setIntervalIds_.has(e) && (this.setIntervalIds_.$$delete(e), window.clearInterval(e));
      return e;
    }
    requestAnimationFrame(e) {
      var t;
      this.clearTimersOnDispose_();
      e = e$(this, e);
      t = window.requestAnimationFrame(() => {
        this.rafIds_.has(t) && this.rafIds_.$$delete(t);
        e();
      });
      this.rafIds_.add(t);
      return t;
    }
    requestNamedAnimationFrame(e, t) {
      var i;
      if (!this.namedRafs_.has(e)) {
        this.clearTimersOnDispose_();
        t = e$(this, t);
        i = this.requestAnimationFrame(() => {
          t();
          this.namedRafs_.has(e) && this.namedRafs_.$$delete(e);
        });
        this.namedRafs_.set(e, i);
        return e;
      }
    }
    cancelNamedAnimationFrame(e) {
      this.namedRafs_.has(e) && (this.cancelAnimationFrame(this.namedRafs_.get(e)), this.namedRafs_.$$delete(e));
    }
    cancelAnimationFrame(e) {
      this.rafIds_.has(e) && (this.rafIds_.$$delete(e), window.cancelAnimationFrame(e));
      return e;
    }
    clearTimersOnDispose_() {
      this.clearingTimersOnDispose_ || (this.clearingTimersOnDispose_ = !0, this.one("dispose", () => {
        [["namedRafs_", "cancelNamedAnimationFrame"], ["rafIds_", "cancelAnimationFrame"], ["setTimeoutIds_", "clearTimeout"], ["setIntervalIds_", "clearInterval"]].forEach(([e, t]) => {
          this[e].forEach((e, i) => this[t](i));
        });
        this.clearingTimersOnDispose_ = !1;
      }));
    }
    static registerComponent(e, t) {
      if ("string" != typeof e || !e) throw Error(`Illegal component name, "${e}"; must be a non-empty string.`);
      var i = tr.getComponent("Tech");
      var i = i && i.isTech(t);
      var s = tr === t || tr.prototype.isPrototypeOf(t.prototype);
      if (i || !s) {
        let t;
        t = i ? "techs must be registered using Tech.registerTech()" : "must be a Component subclass";
        return Error(`Illegal component, "${e}"; ${t}.`);
      }
      if (e = e7(e), tr.components_ || (tr.components_ = {}), s = tr.getComponent("Player"), "Player" === e && s && s.players) {
        let e = s.players;
        if (i = Object.keys(e), e && 0 < i.length && i.map(t => e[t]).every(Boolean)) throw Error("Can not register Player component after player has been created.");
      }
      tr.components_[e] = t;
      return tr.components_[e6(e)] = t;
    }
    static getComponent(e) {
      if (e && tr.components_) return tr.components_[e];
    }
  }
  function tn(e, t, i, s) {
    var r = i.length - 1;
    if ("number" != typeof s || s < 0 || r < s) throw Error(`Failed to execute '${e}' on 'TimeRanges': The index provided (${s}) is non-numeric or out of bounds (0-${r}).`);
    return i[s][t];
  }
  function ta(e) {
    let t;
    t = void 0 === e || 0 === e.length ? {
      length: 0,
      start() {
        throw Error("This TimeRanges object is empty");
      },
      end() {
        throw Error("This TimeRanges object is empty");
      }
    } : {
      length: e.length,
      start: tn.bind(null, "start", 0, e),
      end: tn.bind(null, "end", 1, e)
    };
    window.Symbol && window.Symbol.iterator && (t[window.Symbol.iterator] = () => (e || []).values());
    return t;
  }
  function to(e, t) {
    return Array.isArray(e) ? ta(e) : void 0 === e || void 0 === t ? ta() : ta([[e, t]]);
  }
  function tl(e, t) {
    let i = Math.floor((e = e < 0 ? 0 : e) % 60);
    let s = Math.floor(e / 60 % 60);
    let r = Math.floor(e / 3600);
    var n = Math.floor(t / 60 % 60);
    var t = Math.floor(t / 3600);
    s = (((r = 0 < (r = isNaN(e) || e === 1 / 0 ? s = i = "-" : r) || 0 < t ? r + ":" : "") || 10 <= n) && s < 10 ? "0" + s : s) + ":";
    return r + s + (i = i < 10 ? "0" + i : i);
  }
  tr.registerComponent("Component", tr);
  let th = tl;
  function td(e) {
    th = e;
  }
  function tu() {
    th = tl;
  }
  function tc(e, t = e) {
    return th(e, t);
  }
  var tp = Object.freeze({
    __proto__: null,
    createTimeRanges: to,
    createTimeRange: to,
    setFormatTime: td,
    resetFormatTime: tu,
    formatTime: tc
  });
  function tm(e, t) {
    var i;
    let s;
    let r = 0;
    if (!t) return 0;
    e && e.length || (e = to(0, 0));
    for (let n = 0; n < e.length; n++) {
      i = e.start(n);
      (s = e.end(n)) > t && (s = t);
      r += s - i;
    }
    return r / t;
  }
  function tg(e) {
    if (e instanceof tg) return e;
    "number" == typeof e ? this.code = e : "string" == typeof e ? this.message = e : b(e) && ("number" == typeof e.code && (this.code = e.code), Object.assign(this, e));
    this.message || (this.message = tg.defaultMessages[this.code] || "");
  }
  tg.prototype.code = 0;
  tg.prototype.message = "";
  tg.prototype.status = null;
  tg.errorTypes = ["MEDIA_ERR_CUSTOM", "MEDIA_ERR_ABORTED", "MEDIA_ERR_NETWORK", "MEDIA_ERR_DECODE", "MEDIA_ERR_SRC_NOT_SUPPORTED", "MEDIA_ERR_ENCRYPTED"];
  tg.defaultMessages = {
    1: "You aborted the media playback",
    2: "A network error caused the media download to fail part-way.",
    3: "The media playback was aborted due to a corruption problem or because the media used features your browser did not support.",
    4: "The media could not be loaded, either because the server or network failed or because the format is not supported.",
    5: "The media is encrypted and we do not have the keys to decrypt it."
  };
  for (let e = 0; e < tg.errorTypes.length; e++) {
    tg[tg.errorTypes[e]] = e;
    tg.prototype[tg.errorTypes[e]] = e;
  }
  var tf = function (e, t) {
    var i;
    var s = null;
    try {
      i = JSON.parse(e, t);
    } catch (e) {
      s = e;
    }
    return [s, i];
  };
  function ty(e) {
    return null != e && "function" == typeof e.then;
  }
  function t_(e) {
    ty(e) && e.then(null, e => { });
  }
  function tv(e) {
    return ["kind", "label", "language", "id", "inBandMetadataTrackDispatchType", "mode", "src"].reduce((t, i, s) => (e[i] && (t[i] = e[i]), t), {
      cues: e.cues && Array.prototype.map.call(e.cues, function (e) {
        return {
          startTime: e.startTime,
          endTime: e.endTime,
          text: e.text,
          id: e.id
        };
      })
    });
  }
  var tb = function (e) {
    var t = e.$$("track");
    let i = Array.prototype.map.call(t, e => e.track);
    return Array.prototype.map.call(t, function (e) {
      var t = tv(e.track);
      e.src && (t.src = e.src);
      return t;
    }).concat(Array.prototype.filter.call(e.textTracks(), function (e) {
      return -1 === i.indexOf(e);
    }).map(tv));
  };
  let tT = "vjs-modal-dialog";
  class tS extends tr {
    constructor(e, t) {
      super(e, t);
      this.handleKeyDown_ = e => this.handleKeyDown(e);
      this.close_ = e => this.close(e);
      this.opened_ = this.hasBeenOpened_ = this.hasBeenFilled_ = !1;
      this.closeable(!this.options_.uncloseable);
      this.content(this.options_.content);
      this.contentEl_ = Q("div", {
        className: tT + "-content"
      }, {
        role: "document"
      });
      this.descEl_ = Q("p", {
        className: tT + "-description vjs-control-text",
        id: this.el().getAttribute("aria-describedby")
      });
      J(this.descEl_, this.description());
      this.el_.appendChild(this.descEl_);
      this.el_.appendChild(this.contentEl_);
    }
    createEl() {
      return super.createEl("div", {
        className: this.buildCSSClass(),
        tabIndex: -1
      }, {
        "aria-describedby": this.id() + "_description",
        "aria-hidden": "true",
        "aria-label": this.label(),
        role: "dialog"
      });
    }
    dispose() {
      this.contentEl_ = null;
      this.descEl_ = null;
      this.previouslyActiveEl_ = null;
      super.dispose();
    }
    buildCSSClass() {
      return tT + " vjs-hidden " + super.buildCSSClass();
    }
    label() {
      return this.localize(this.options_.label || "Modal Window");
    }
    description() {
      let e = this.options_.description || this.localize("This is a modal window.");
      this.closeable() && (e += " " + this.localize("This modal can be closed by pressing the Escape key or activating the close button."));
      return e;
    }
    open() {
      var e;
      this.opened_ || (e = this.player(), this.trigger("beforemodalopen"), this.opened_ = !0, !this.options_.fillAlways && (this.hasBeenOpened_ || this.hasBeenFilled_) || this.fill(), this.wasPlaying_ = !e.paused(), this.options_.pauseOnOpen && this.wasPlaying_ && e.pause(), this.on("keydown", this.handleKeyDown_), this.hadControls_ = e.controls(), e.controls(!1), this.show(), this.conditionalFocus_(), this.el().setAttribute("aria-hidden", "false"), this.trigger("modalopen"), this.hasBeenOpened_ = !0);
    }
    opened(e) {
      "boolean" == typeof e && this[e ? "open" : "close"]();
      return this.opened_;
    }
    close() {
      var e;
      this.opened_ && (e = this.player(), this.trigger("beforemodalclose"), this.opened_ = !1, this.wasPlaying_ && this.options_.pauseOnOpen && e.play(), this.off("keydown", this.handleKeyDown_), this.hadControls_ && e.controls(!0), this.hide(), this.el().setAttribute("aria-hidden", "true"), this.trigger("modalclose"), this.conditionalBlur_(), this.options_.temporary) && this.dispose();
    }
    closeable(e) {
      if ("boolean" == typeof e) {
        var t;
        var e = this.closeable_ = !!e;
        let i = this.getChild("closeButton");
        e && !i && (t = this.contentEl_, this.contentEl_ = this.el_, i = this.addChild("closeButton", {
          controlText: "Close Modal Dialog"
        }), this.contentEl_ = t, this.on(i, "close", this.close_));
        !e && i && (this.off(i, "close", this.close_), this.removeChild(i), i.dispose());
      }
      return this.closeable_;
    }
    fill() {
      this.fillWith(this.content());
    }
    fillWith(e) {
      var t = this.contentEl();
      var i = t.parentNode;
      var s = t.nextSibling;
      this.trigger("beforemodalfill");
      this.hasBeenFilled_ = !0;
      i.removeChild(t);
      this.empty();
      e_(t, e);
      this.trigger("modalfill");
      s ? i.insertBefore(t, s) : i.appendChild(t);
      var e = this.getChild("closeButton");
      e && i.appendChild(e.el_);
    }
    empty() {
      this.trigger("beforemodalempty");
      eg(this.contentEl());
      this.trigger("modalempty");
    }
    content(e) {
      void 0 !== e && (this.content_ = e);
      return this.content_;
    }
    conditionalFocus_() {
      var e = document.activeElement;
      var t = this.player_.el_;
      this.previouslyActiveEl_ = null;
      (t.contains(e) || t === e) && (this.previouslyActiveEl_ = e, this.focus());
    }
    conditionalBlur_() {
      this.previouslyActiveEl_ && (this.previouslyActiveEl_.focus(), this.previouslyActiveEl_ = null);
    }
    handleKeyDown(e) {
      if (e.stopPropagation(), ts.isEventKey(e, "Escape") && this.closeable()) {
        e.preventDefault();
        this.close();
      } else if (ts.isEventKey(e, "Tab")) {
        let s;
        var t = this.focusableEls_();
        var i = this.el_.querySelector(":focus");
        for (let e = 0; e < t.length; e++) if (i === t[e]) {
          s = e;
          break;
        }
        document.activeElement === this.el_ && (s = 0);
        e.shiftKey && 0 === s ? (t[t.length - 1].focus(), e.preventDefault()) : e.shiftKey || s !== t.length - 1 || (t[0].focus(), e.preventDefault());
      }
    }
    focusableEls_() {
      var e = this.el_.querySelectorAll("*");
      return Array.prototype.filter.call(e, e => (e instanceof window.HTMLAnchorElement || e instanceof window.HTMLAreaElement) && e.hasAttribute("href") || (e instanceof window.HTMLInputElement || e instanceof window.HTMLSelectElement || e instanceof window.HTMLTextAreaElement || e instanceof window.HTMLButtonElement) && !e.hasAttribute("disabled") || e instanceof window.HTMLIFrameElement || e instanceof window.HTMLObjectElement || e instanceof window.HTMLEmbedElement || e.hasAttribute("tabindex") && -1 !== e.getAttribute("tabindex") || e.hasAttribute("contenteditable"));
    }
  }
  tS.prototype.options_ = {
    pauseOnOpen: !0,
    temporary: !0
  };
  tr.registerComponent("ModalDialog", tS);
  class tw extends eX {
    constructor(e = []) {
      super();
      this.tracks_ = [];
      Object.defineProperty(this, "length", {
        get() {
          return this.tracks_.length;
        }
      });
      for (let t = 0; t < e.length; t++) this.addTrack(e[t]);
    }
    addTrack(e) {
      let t = this.tracks_.length;
      "" + t in this || Object.defineProperty(this, t, {
        get() {
          return this.tracks_[t];
        }
      });
      -1 === this.tracks_.indexOf(e) && (this.tracks_.push(e), this.trigger({
        track: e,
        type: "addtrack",
        target: this
      }));
      e.labelchange_ = () => {
        this.trigger({
          track: e,
          type: "labelchange",
          target: this
        });
      };
      eY(e) && e.addEventListener("labelchange", e.labelchange_);
    }
    removeTrack(e) {
      var _this = this;
      let t;
      for (function () {
        let i = 0;
        let s = _this.length;
      }(); i < s; i++) if (this[i] === e) {
        (t = this[i]).off && t.off();
        this.tracks_.splice(i, 1);
        break;
      }
      t && this.trigger({
        track: t,
        type: "removetrack",
        target: this
      });
    }
    getTrackById(e) {
      var _this2 = this;
      let t = null;
      for (function () {
        let s = 0;
        let r = _this2.length;
      }(); s < r; s++) {
        var i = this[s];
        if (i.id === e) {
          t = i;
          break;
        }
      }
      return t;
    }
  }
  for (let e in tw.prototype.allowedEvents_ = {
    change: "change",
    addtrack: "addtrack",
    removetrack: "removetrack",
    labelchange: "labelchange"
  }) tw.prototype["on" + e] = null;
  function tE(e, t) {
    for (let i = 0; i < e.length; i++) Object.keys(e[i]).length && t.id !== e[i].id && (e[i].enabled = !1);
  }
  function tC(e, t) {
    for (let i = 0; i < e.length; i++) Object.keys(e[i]).length && t.id !== e[i].id && (e[i].selected = !1);
  }
  class tk extends tw {
    addTrack(e) {
      super.addTrack(e);
      this.queueChange_ || (this.queueChange_ = () => this.queueTrigger("change"));
      this.triggerSelectedlanguagechange || (this.triggerSelectedlanguagechange_ = () => this.trigger("selectedlanguagechange"));
      e.addEventListener("modechange", this.queueChange_);
      -1 === ["metadata", "chapters"].indexOf(e.kind) && e.addEventListener("modechange", this.triggerSelectedlanguagechange_);
    }
    removeTrack(e) {
      super.removeTrack(e);
      e.removeEventListener && (this.queueChange_ && e.removeEventListener("modechange", this.queueChange_), this.selectedlanguagechange_) && e.removeEventListener("modechange", this.triggerSelectedlanguagechange_);
    }
  }
  class tx {
    constructor(e) {
      tx.prototype.setCues_.call(this, e);
      Object.defineProperty(this, "length", {
        get() {
          return this.length_;
        }
      });
    }
    setCues_(e) {
      var t = this.length || 0;
      let i = 0;
      function s(e) {
        "" + e in this || Object.defineProperty(this, "" + e, {
          get() {
            return this.cues_[e];
          }
        });
      }
      var r = e.length;
      if (this.cues_ = e, this.length_ = e.length, t < r) for (i = t; i < r; i++) s.call(this, i);
    }
    getCueById(e) {
      var _this3 = this;
      let t = null;
      for (function () {
        let s = 0;
        let r = _this3.length;
      }(); s < r; s++) {
        var i = this[s];
        if (i.id === e) {
          t = i;
          break;
        }
      }
      return t;
    }
  }
  let tI = {
    alternative: "alternative",
    captions: "captions",
    main: "main",
    sign: "sign",
    subtitles: "subtitles",
    commentary: "commentary"
  };
  let tA = {
    alternative: "alternative",
    descriptions: "descriptions",
    main: "main",
    "main-desc": "main-desc",
    translation: "translation",
    commentary: "commentary"
  };
  let tD = {
    subtitles: "subtitles",
    captions: "captions",
    descriptions: "descriptions",
    chapters: "chapters",
    metadata: "metadata"
  };
  let tL = {
    disabled: "disabled",
    hidden: "hidden",
    showing: "showing"
  };
  class tP extends eX {
    constructor(e = {}) {
      super();
      let t = {
        id: e.id || "vjs_track_" + eO++,
        kind: e.kind || "",
        language: e.language || ""
      };
      let i = e.label || "";
      for (let e in t) Object.defineProperty(this, e, {
        get: () => t[e],
        set() { }
      });
      Object.defineProperty(this, "label", {
        get: () => i,
        set(e) {
          e !== i && (i = e, this.trigger("labelchange"));
        }
      });
    }
  }
  function tO(e) {
    var t = ["protocol", "hostname", "port", "pathname", "search", "hash", "host"];
    var i = document.createElement("a");
    i.href = e;
    var s = {};
    for (let e = 0; e < t.length; e++) s[t[e]] = i[t[e]];
    "http:" === s.protocol && (s.host = s.host.replace(/:80$/, ""));
    "https:" === s.protocol && (s.host = s.host.replace(/:443$/, ""));
    s.protocol || (s.protocol = window.location.protocol);
    s.host || (s.host = window.location.host);
    return s;
  }
  function tN(e) {
    var t;
    e.match(/^https?:\/\//) || ((t = document.createElement("a")).href = e, e = t.href);
    return e;
  }
  function tR(e, t = window.location) {
    return (":" === (e = tO(e)).protocol ? t : e).protocol + e.host !== t.protocol + t.host;
  }
  let tM = function (e) {
    return "string" == typeof e && (e = /^(\/?)([\s\S]*?)((?:\.{1,2}|[^\/]+?)(\.([^\.\/\?]+)))(?:[\/]*|[\?].*)$/.exec(e)) ? e.pop().toLowerCase() : "";
  };
  var tU = Object.freeze({
    __proto__: null,
    parseUrl: tO,
    getAbsoluteURL: tN,
    getFileExtension: tM,
    isCrossOrigin: tR
  });
  var tB = "undefined" != typeof window ? window : void 0 !== tt ? tt : "undefined" != typeof self ? self : {};
  var tF = tB;
  var tq = ti(function (e) {
    function t() {
      e.exports = t = Object.assign ? Object.assign.bind() : function (e) {
        for (var t = 1; t < $$arguments.length; t++) {
          var i;
          var s = $$arguments[t];
          for (i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i]);
        }
        return e;
      };
      e.exports.__esModule = !0;
      e.exports.$$default = e.exports;
      return t.apply(this, arguments);
    }
    e.exports = t;
    e.exports.__esModule = !0;
    e.exports.$$default = e.exports;
  });
  var tj = (tB = tq) && tB.__esModule && Object.prototype.hasOwnProperty.call(tB, "default") ? tB.$$default : tB;
  var tH = function (e) {
    var t;
    return !!e && ("[object Function]" === (t = tV.call(e)) || "function" == typeof e && "[object RegExp]" !== t || "undefined" != typeof window && (e === window.setTimeout || e === window.alert || e === window.confirm || e === window.prompt));
  };
  var tV = Object.prototype.toString;
  tY.httpHandler = function (e, t) {
    void 0 === t && (t = !1);
    return function (i, s, r) {
      if (i) e(i); else if (400 <= s.statusCode && s.statusCode <= 599) {
        if (i = r, t) {
          if (tF.TextDecoder) {
            var n;
            void 0 === (n = s.headers && s.headers["content-type"]) && (n = "");
            s = n.toLowerCase().split(";").reduce(function (e, t) {
              var t = t.split("=");
              var i = t[0];
              var t = t[1];
              return "charset" === i.trim() ? t.trim() : e;
            }, "utf-8");
            try {
              i = new TextDecoder(s).decode(r);
            } catch (e) { }
          } else i = String.fromCharCode.apply(null, new Uint8Array(r));
        }
        e({
          cause: i
        });
      } else e(null, r);
    };
  };
  for (t$ = function (e) {
    var t = {};
    e && e.trim().split("\n").forEach(function (e) {
      var i = e.indexOf(":");
      var s = e.slice(0, i).trim().toLowerCase();
      var e = e.slice(i + 1).trim();
      void 0 === t[s] ? t[s] = e : Array.isArray(t[s]) ? t[s].push(e) : t[s] = [t[s], e];
    });
    return t;
  }, tz = tY, tB = tY, tY.XMLHttpRequest = tF.XMLHttpRequest || function () { }, tY.XDomainRequest = ("withCredentials" in new tY.XMLHttpRequest()) ? tY.XMLHttpRequest : tF.XDomainRequest, tW = ["get", "put", "post", "patch", "head", "delete"], tG = function (e) {
    tY["delete" === e ? "del" : e] = function (t, i, s) {
      (i = tK(t, i, s)).method = e.toUpperCase();
      return tQ(i);
    };
  }, tX = 0, void 0; tX < tW.length; tX++) {
    var t$;
    var tz;
    var tB;
    var tW;
    var tG;
    var tX;
    tG(tW[tX]);
  }
  function tK(e, t, i) {
    var s = e;
    tH(t) ? (i = t, "string" == typeof e && (s = {
      uri: e
    })) : s = tq({}, t, {
      uri: e
    });
    s.callback = i;
    return s;
  }
  function tY(e, t, i) {
    return tQ(t = tK(e, t, i));
  }
  function tQ(e) {
    if (void 0 === e.callback) throw Error("callback argument missing");
    var t = !1;
    var i = function (i, s, r) {
      t || (t = !0, e.callback(i, s, r));
    };
    function s(e) {
      clearTimeout(o);
      (e = e instanceof Error ? e : Error("" + (e || "Unknown XMLHttpRequest Error"))).statusCode = 0;
      return i(e, g);
    }
    function r() {
      var t;
      var s;
      var r;
      if (!a) {
        clearTimeout(o);
        t = e.useXDR && void 0 === l.status ? 200 : 1223 === l.status ? 204 : l.status;
        s = g;
        r = null;
        0 !== t ? (s = {
          body: function () {
            var e = l.response || l.responseText || function (e) {
              try {
                if ("document" === e.responseType) return e.responseXML;
                var t = e.responseXML && "parsererror" === e.responseXML.documentElement.nodeName;
                if ("" === e.responseType && !t) return e.responseXML;
              } catch (e) { }
              return null;
            }(l);
            if (m) try {
              e = JSON.parse(e);
            } catch (e) { }
            return e;
          }(),
          statusCode: t,
          method: d,
          headers: {},
          url: h,
          rawRequest: l
        }, l.getAllResponseHeaders && (s.headers = t$(l.getAllResponseHeaders()))) : r = Error("Internal XMLHttpRequest Error");
        return i(r, s, s.body);
      }
    }
    var n;
    var a;
    var o;
    var l = e.xhr || null;
    var h = (l = l || new (e.cors || e.useXDR ? tY.XDomainRequest : tY.XMLHttpRequest)()).url = e.uri || e.url;
    var d = l.method = e.method || "GET";
    var u = e.body || e.data;
    var c = l.headers = e.headers || {};
    var p = !!e.sync;
    var m = !1;
    var g = {
      body: void 0,
      headers: {},
      statusCode: 0,
      method: d,
      url: h,
      rawRequest: l
    };
    if ("json" in e && !1 !== e.json && (m = !0, c.accept || c.Accept || (c.Accept = "application/json"), "GET" !== d) && "HEAD" !== d && (c["content-type"] || c["Content-Type"] || (c["Content-Type"] = "application/json"), u = JSON.stringify(!0 === e.json ? u : e.json)), l.onreadystatechange = function () {
      4 === l.readyState && setTimeout(r, 0);
    }, l.onload = r, l.onerror = s, l.onprogress = function () { }, l.onabort = function () {
      a = !0;
    }, l.ontimeout = s, l.open(d, h, !p, e.username, e.password), p || (l.withCredentials = !!e.withCredentials), !p && 0 < e.timeout && (o = setTimeout(function () {
      var e;
      a || (a = !0, l.abort("timeout"), (e = Error("XMLHttpRequest timeout")).code = "ETIMEDOUT", s(e));
    }, e.timeout)), l.setRequestHeader) for (n in c) c.hasOwnProperty(n) && l.setRequestHeader(n, c[n]); else if (e.headers && !function (e) {
      for (var t in e) if (e.hasOwnProperty(t)) return;
      return 1;
    }(e.headers)) throw Error("Headers cannot be set on an XDomainRequest object");
    "responseType" in e && (l.responseType = e.responseType);
    "beforeSend" in e && "function" == typeof e.beforeSend && e.beforeSend(l);
    l.send(u || null);
    return l;
  }
  function tJ(e, t) {
    var i = new window.WebVTT.Parser(window, window.vttjs, window.WebVTT.StringDecoder());
    let s = [];
    i.oncue = function (e) {
      t.addCue(e);
    };
    i.onparsingerror = function (e) {
      s.push(e);
    };
    i.onflush = function () {
      t.trigger({
        type: "loadeddata",
        target: t
      });
    };
    i.parse(e);
    0 < s.length && (window.console && window.console.groupCollapsed && window.console.groupCollapsed("Text Track parsing errors for " + t.src), s.forEach(e => g.error(e)), window.console) && window.console.groupEnd && window.console.groupEnd();
    i.flush();
  }
  function tZ(e, t) {
    var i = {
      uri: e
    };
    (e = tR(e)) && (i.cors = e);
    (e = "use-credentials" === t.tech_.crossOrigin()) && (i.withCredentials = e);
    tz(i, e$(this, function (e, i, s) {
      if (e) return g.error(e, i);
      t.loaded_ = !0;
      "function" != typeof window.WebVTT ? t.tech_ && t.tech_.any(["vttjsloaded", "vttjserror"], e => {
        if ("vttjserror" !== e.type) return tJ(s, t);
        g.error("vttjs failed to load, stopping trying to process " + t.src);
      }) : tJ(s, t);
    }));
  }
  tz.$$default = tB;
  class t0 extends tP {
    constructor(e = {}) {
      if (!e.tech) throw Error("A tech was not provided.");
      let t = tL[(e = S(e, {
        kind: tD[e.kind] || "subtitles",
        language: e.language || e.srclang || ""
      })).mode] || "disabled";
      let i = e.$$default;
      "metadata" !== e.kind && "chapters" !== e.kind || (t = "hidden");
      super(e);
      this.tech_ = e.tech;
      this.cues_ = [];
      this.activeCues_ = [];
      this.preload_ = !1 !== this.tech_.preloadTextTracks;
      let s = new tx(this.cues_);
      let r = new tx(this.activeCues_);
      let n = !1;
      this.timeupdateHandler = e$(this, function (e = {}) {
        this.tech_.isDisposed() || (this.tech_.isReady_ && (this.activeCues = this.activeCues, n) && (this.trigger("cuechange"), n = !1), "timeupdate" !== e.type && (this.rvf_ = this.tech_.requestVideoFrameCallback(this.timeupdateHandler)));
      });
      this.tech_.one("dispose", () => {
        this.stopTracking();
      });
      "disabled" !== t && this.startTracking();
      Object.defineProperties(this, {
        default: {
          get: () => i,
          set() { }
        },
        mode: {
          get: () => t,
          set(e) {
            tL[e] && t !== e && (t = e, this.preload_ || "disabled" === t || 0 !== this.cues.length || tZ(this.src, this), this.stopTracking(), "disabled" !== t && this.startTracking(), this.trigger("modechange"));
          }
        },
        cues: {
          get() {
            return this.loaded_ ? s : null;
          },
          set() { }
        },
        activeCues: {
          get() {
            var _this4 = this;
            if (!this.loaded_) return null;
            if (0 !== this.cues.length) {
              var e = this.tech_.currentTime();
              var t = [];
              for (function () {
                let s = 0;
                let r = _this4.cues.length;
              }(); s < r; s++) {
                var i = this.cues[s];
                i.startTime <= e && i.endTime >= e && t.push(i);
              }
              if (n = !1, t.length !== this.activeCues_.length) n = !0; else for (let e = 0; e < t.length; e++) -1 === this.activeCues_.indexOf(t[e]) && (n = !0);
              this.activeCues_ = t;
              r.setCues_(this.activeCues_);
            }
            return r;
          },
          set() { }
        }
      });
      e.src ? (this.src = e.src, this.preload_ || (this.loaded_ = !0), (this.preload_ || "subtitles" !== e.kind && "captions" !== e.kind) && tZ(this.src, this)) : this.loaded_ = !0;
    }
    startTracking() {
      this.rvf_ = this.tech_.requestVideoFrameCallback(this.timeupdateHandler);
      this.tech_.on("timeupdate", this.timeupdateHandler);
    }
    stopTracking() {
      this.rvf_ && (this.tech_.cancelVideoFrameCallback(this.rvf_), this.rvf_ = void 0);
      this.tech_.off("timeupdate", this.timeupdateHandler);
    }
    addCue(e) {
      let t = e;
      if (!("getCueAsHTML" in t)) {
        for (let i in t = new window.vttjs.VTTCue(e.startTime, e.endTime, e.text), e) i in t || (t[i] = e[i]);
        t.id = e.id;
        t.originalCue_ = e;
      }
      var i = this.tech_.textTracks();
      for (let e = 0; e < i.length; e++) i[e] !== this && i[e].removeCue(t);
      this.cues_.push(t);
      this.cues.setCues_(this.cues_);
    }
    removeCue(e) {
      let t = this.cues_.length;
      for (; t--;) {
        var i = this.cues_[t];
        if (i === e || i.originalCue_ && i.originalCue_ === e) {
          this.cues_.splice(t, 1);
          this.cues.setCues_(this.cues_);
          break;
        }
      }
    }
  }
  t0.prototype.allowedEvents_ = {
    cuechange: "cuechange"
  };
  class t1 extends tP {
    constructor(e = {}) {
      super(e = S(e, {
        kind: tA[e.kind] || ""
      }));
      let t = !1;
      Object.defineProperty(this, "enabled", {
        get: () => t,
        set(e) {
          "boolean" == typeof e && e !== t && (t = e, this.trigger("enabledchange"));
        }
      });
      e.enabled && (this.enabled = e.enabled);
      this.loaded_ = !0;
    }
  }
  class t2 extends tP {
    constructor(e = {}) {
      super(e = S(e, {
        kind: tI[e.kind] || ""
      }));
      let t = !1;
      Object.defineProperty(this, "selected", {
        get: () => t,
        set(e) {
          "boolean" == typeof e && e !== t && (t = e, this.trigger("selectedchange"));
        }
      });
      e.selected && (this.selected = e.selected);
    }
  }
  class t4 extends eX {
    constructor(e = {}) {
      let t;
      super();
      let i = new t0(e);
      this.kind = i.kind;
      this.src = i.src;
      this.srclang = i.language;
      this.label = i.label;
      this.$$default = i.$$default;
      Object.defineProperties(this, {
        readyState: {
          get: () => t
        },
        track: {
          get: () => i
        }
      });
      t = t4.NONE;
      i.addEventListener("loadeddata", () => {
        t = t4.LOADED;
        this.trigger({
          type: "load",
          target: this
        });
      });
    }
  }
  t4.prototype.allowedEvents_ = {
    load: "load"
  };
  t4.NONE = 0;
  t4.LOADING = 1;
  t4.LOADED = 2;
  t4.ERROR = 3;
  let t8 = {
    audio: {
      ListClass: class extends tw {
        constructor(e = []) {
          for (let t = e.length - 1; 0 <= t; t--) if (e[t].enabled) {
            tE(e, e[t]);
            break;
          }
          super(e);
          this.changing_ = !1;
        }
        addTrack(e) {
          e.enabled && tE(this, e);
          super.addTrack(e);
          e.addEventListener && (e.enabledChange_ = () => {
            this.changing_ || (this.changing_ = !0, tE(this, e), this.changing_ = !1, this.trigger("change"));
          }, e.addEventListener("enabledchange", e.enabledChange_));
        }
        removeTrack(e) {
          super.removeTrack(e);
          e.removeEventListener && e.enabledChange_ && (e.removeEventListener("enabledchange", e.enabledChange_), e.enabledChange_ = null);
        }
      },
      TrackClass: t1,
      capitalName: "Audio"
    },
    video: {
      ListClass: class extends tw {
        constructor(e = []) {
          for (let t = e.length - 1; 0 <= t; t--) if (e[t].selected) {
            tC(e, e[t]);
            break;
          }
          super(e);
          this.changing_ = !1;
          Object.defineProperty(this, "selectedIndex", {
            get() {
              for (let e = 0; e < this.length; e++) if (this[e].selected) return e;
              return -1;
            },
            set() { }
          });
        }
        addTrack(e) {
          e.selected && tC(this, e);
          super.addTrack(e);
          e.addEventListener && (e.selectedChange_ = () => {
            this.changing_ || (this.changing_ = !0, tC(this, e), this.changing_ = !1, this.trigger("change"));
          }, e.addEventListener("selectedchange", e.selectedChange_));
        }
        removeTrack(e) {
          super.removeTrack(e);
          e.removeEventListener && e.selectedChange_ && (e.removeEventListener("selectedchange", e.selectedChange_), e.selectedChange_ = null);
        }
      },
      TrackClass: t2,
      capitalName: "Video"
    },
    text: {
      ListClass: tk,
      TrackClass: t0,
      capitalName: "Text"
    }
  };
  Object.keys(t8).forEach(function (e) {
    t8[e].getterName = e + "Tracks";
    t8[e].privateName = e + "Tracks_";
  });
  let t5 = {
    remoteText: {
      ListClass: tk,
      TrackClass: t0,
      capitalName: "RemoteText",
      getterName: "remoteTextTracks",
      privateName: "remoteTextTracks_"
    },
    remoteTextEl: {
      ListClass: class {
        constructor(e = []) {
          this.trackElements_ = [];
          Object.defineProperty(this, "length", {
            get() {
              return this.trackElements_.length;
            }
          });
          for (function () {
            let t = 0;
            let i = e.length;
          }(); t < i; t++) this.addTrackElement_(e[t]);
        }
        addTrackElement_(e) {
          let t = this.trackElements_.length;
          "" + t in this || Object.defineProperty(this, t, {
            get() {
              return this.trackElements_[t];
            }
          });
          -1 === this.trackElements_.indexOf(e) && this.trackElements_.push(e);
        }
        getTrackElementByTrack_(e) {
          var _this8 = this;
          let t;
          for (function () {
            let i = 0;
            let s = _this8.trackElements_.length;
          }(); i < s; i++) if (e === this.trackElements_[i].track) {
            t = this.trackElements_[i];
            break;
          }
          return t;
        }
        removeTrackElement_(e) {
          var _this9 = this;
          for (function () {
            let t = 0;
            let i = _this9.trackElements_.length;
          }(); t < i; t++) if (e === this.trackElements_[t]) {
            this.trackElements_[t].track && "function" == typeof this.trackElements_[t].track.off && this.trackElements_[t].track.off();
            "function" == typeof this.trackElements_[t].off && this.trackElements_[t].off();
            this.trackElements_.splice(t, 1);
            break;
          }
        }
      },
      TrackClass: t4,
      capitalName: "RemoteTextTrackEls",
      getterName: "remoteTextTrackEls",
      privateName: "remoteTextTrackEls_"
    }
  };
  let t3 = Object.assign({}, t8, t5);
  t5.names = Object.keys(t5);
  t8.names = Object.keys(t8);
  t3.names = [].concat(t5.names).concat(t8.names);
  var tB = void 0 !== tt ? tt : "undefined" != typeof window ? window : {};
  var t6 = "undefined" != typeof document ? document : (t6 = tB["__GLOBAL_DOCUMENT_CACHE@4"]) || (tB["__GLOBAL_DOCUMENT_CACHE@4"] = {});
  var tt = t6;
  var t7 = Object.create || function (e) {
    if (1 != $$arguments.length) throw Error("Object.create shim only accepts one parameter.");
    t9.prototype = e;
    return new t9();
  };
  function t9() { }
  function ie(e, t) {
    this.name = "ParsingError";
    this.code = e.code;
    this.message = t || e.message;
  }
  function it(e) {
    function t(e, t, i, s) {
      return 3600 * (0 | e) + 60 * (0 | t) + (0 | i) + (0 | s) / 1e3;
    }
    return (e = e.match(/^(\d+):(\d{1,2})(:\d{1,2})?\.(\d{3})/)) ? e[3] ? t(e[1], e[2], e[3].replace(":", ""), e[4]) : 59 < e[1] ? t(e[1], e[2], 0, e[4]) : t(0, e[1], e[2], e[4]) : null;
  }
  function ii() {
    this.values = t7(null);
  }
  function is(e, t, i, s) {
    var r;
    var n;
    var a = s ? e.split(s) : [e];
    for (r in a) "string" == typeof a[r] && 2 === (n = a[r].split(i)).length && t(n[0].trim(), n[1].trim());
  }
  ((ie.prototype = t7(Error.prototype)).constructor = ie).Errors = {
    BadSignature: {
      code: 0,
      message: "Malformed WebVTT signature."
    },
    BadTimeStamp: {
      code: 1,
      message: "Malformed time stamp."
    }
  };
  ii.prototype = {
    set: function (e, t) {
      this.get(e) || "" === t || (this.values[e] = t);
    },
    get: function (e, t, i) {
      return i ? this.has(e) ? this.values[e] : t[i] : this.has(e) ? this.values[e] : t;
    },
    has: function (e) {
      return e in this.values;
    },
    alt: function (e, t, i) {
      for (var s = 0; s < i.length; ++s) if (t === i[s]) {
        this.set(e, t);
        break;
      }
    },
    integer: function (e, t) {
      /^-?\d+$/.test(t) && this.set(e, parseInt(t, 10));
    },
    percent: function (e, t) {
      return !!(t.match(/^([\d]{1,3})(\.[\d]*)?%$/) && 0 <= (t = parseFloat(t)) && t <= 100) && (this.set(e, t), !0);
    }
  };
  var ir = tt.createElement && tt.createElement("textarea");
  var ia = {
    c: "span",
    i: "i",
    b: "b",
    u: "u",
    ruby: "ruby",
    rt: "rt",
    v: "span",
    lang: "span"
  };
  var io = {
    white: "rgba(255,255,255,1)",
    lime: "rgba(0,255,0,1)",
    cyan: "rgba(0,255,255,1)",
    red: "rgba(255,0,0,1)",
    yellow: "rgba(255,255,0,1)",
    magenta: "rgba(255,0,255,1)",
    blue: "rgba(0,0,255,1)",
    black: "rgba(0,0,0,1)"
  };
  var il = {
    v: "title",
    lang: "lang"
  };
  var ih = {
    rt: "ruby"
  };
  function id(e, t) {
    for (l = e.document.createElement("div"), h = l, d = [], void 0; null !== (o = void 0, o = t ? (o = (o = t.match(/^([^<]*)(<[^>]*>?)?/))[1] || o[2], t = t.substr(o.length), o) : null);) {
      var i;
      var s;
      var r;
      var n;
      var a;
      var o;
      var l;
      var h;
      var d;
      "<" === o[0] ? "/" === o[1] ? d.length && d[d.length - 1] === o.substr(2).replace(">", "") && (d.pop(), h = h.parentNode) : (s = it(o.substr(1, o.length - 2))) ? (i = e.document.createProcessingInstruction("timestamp", s), h.appendChild(i)) : (s = o.match(/^<([^.\s/0-9>]+)(\.[^\s\\>]+)?([^>\\]+)?(\\?)>?$/)) && (r = s[1], n = s[3], a = void 0, i = (a = ia[r]) ? (a = e.document.createElement(a), (r = il[r]) && n && (a[r] = n.trim()), a) : null) && (r = h, ih[(n = i).localName] && ih[n.localName] !== r.localName || (s[2] && ((a = s[2].split(".")).forEach(function (e) {
        var t = /^bg_/.test(e);
        var e = t ? e.slice(3) : e;
        io.hasOwnProperty(e) && (e = io[e], i.style[t ? "background-color" : "color"] = e);
      }), i.className = a.join(" ")), d.push(s[1]), h.appendChild(i), h = i)) : h.appendChild(e.document.createTextNode((n = o, ir.innerHTML = n, n = ir.textContent, ir.textContent = "", n)));
    }
    return l;
  }
  var iu = [[1470, 1470], [1472, 1472], [1475, 1475], [1478, 1478], [1488, 1514], [1520, 1524], [1544, 1544], [1547, 1547], [1549, 1549], [1563, 1563], [1566, 1610], [1645, 1647], [1649, 1749], [1765, 1766], [1774, 1775], [1786, 1805], [1807, 1808], [1810, 1839], [1869, 1957], [1969, 1969], [1984, 2026], [2036, 2037], [2042, 2042], [2048, 2069], [2074, 2074], [2084, 2084], [2088, 2088], [2096, 2110], [2112, 2136], [2142, 2142], [2208, 2208], [2210, 2220], [8207, 8207], [64285, 64285], [64287, 64296], [64298, 64310], [64312, 64316], [64318, 64318], [64320, 64321], [64323, 64324], [64326, 64449], [64467, 64829], [64848, 64911], [64914, 64967], [65008, 65020], [65136, 65140], [65142, 65276], [67584, 67589], [67592, 67592], [67594, 67637], [67639, 67640], [67644, 67644], [67647, 67669], [67671, 67679], [67840, 67867], [67872, 67897], [67903, 67903], [67968, 68023], [68030, 68031], [68096, 68096], [68112, 68115], [68117, 68119], [68121, 68147], [68160, 68167], [68176, 68184], [68192, 68223], [68352, 68405], [68416, 68437], [68440, 68466], [68472, 68479], [68608, 68680], [126464, 126467], [126469, 126495], [126497, 126498], [126500, 126500], [126503, 126503], [126505, 126514], [126516, 126519], [126521, 126521], [126523, 126523], [126530, 126530], [126535, 126535], [126537, 126537], [126539, 126539], [126541, 126543], [126545, 126546], [126548, 126548], [126551, 126551], [126553, 126553], [126555, 126555], [126557, 126557], [126559, 126559], [126561, 126562], [126564, 126564], [126567, 126570], [126572, 126578], [126580, 126583], [126585, 126588], [126590, 126590], [126592, 126601], [126603, 126619], [126625, 126627], [126629, 126633], [126635, 126651], [1114109, 1114109]];
  function ic() { }
  function ip(e, t, i) {
    ic.call(this);
    this.cue = t;
    this.cueDiv = id(e, t.text);
    var s = {
      color: "rgba(255, 255, 255, 1)",
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      position: "relative",
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      display: "inline",
      writingMode: "" === t.vertical ? "horizontal-tb" : "lr" === t.vertical ? "vertical-lr" : "vertical-rl",
      unicodeBidi: "plaintext"
    };
    this.applyStyles(s, this.cueDiv);
    this.div = e.document.createElement("div");
    s = {
      direction: function (e) {
        var t = [];
        var i = "";
        if (e && e.childNodes) {
          for (r(t, e); i = function e(t) {
            var i;
            var s;
            var n;
            return t && t.length ? (s = (i = t.pop()).textContent || i.innerText) ? (n = s.match(/^.*(\n|\r)/)) ? n[t.length = 0] : s : "ruby" === i.tagName ? e(t) : i.childNodes ? (r(t, i), e(t)) : void 0 : null;
          }(t);) for (var s = 0; s < i.length; s++) if (function (e) {
            for (var t = 0; t < iu.length; t++) {
              var i = iu[t];
              if (e >= i[0] && e <= i[1]) return 1;
            }
          }(i.charCodeAt(s))) return "rtl";
        }
        return "ltr";
        function r(e, t) {
          for (var i = t.childNodes.length - 1; 0 <= i; i--) e.push(t.childNodes[i]);
        }
      }(this.cueDiv),
      writingMode: "" === t.vertical ? "horizontal-tb" : "lr" === t.vertical ? "vertical-lr" : "vertical-rl",
      unicodeBidi: "plaintext",
      textAlign: "middle" === t.align ? "center" : t.align,
      font: i.font,
      whiteSpace: "pre-line",
      position: "absolute"
    };
    this.applyStyles(s);
    this.div.appendChild(this.cueDiv);
    var r = 0;
    switch (t.positionAlign) {
      case "start":
      case "line-left":
        r = t.position;
        break;
      case "center":
        r = t.position - t.size / 2;
        break;
      case "end":
      case "line-right":
        r = t.position - t.size;
    }
    "" === t.vertical ? this.applyStyles({
      left: this.formatStyle(r, "%"),
      width: this.formatStyle(t.size, "%")
    }) : this.applyStyles({
      top: this.formatStyle(r, "%"),
      height: this.formatStyle(t.size, "%")
    });
    this.move = function (e) {
      this.applyStyles({
        top: this.formatStyle(e.top, "px"),
        bottom: this.formatStyle(e.bottom, "px"),
        left: this.formatStyle(e.left, "px"),
        right: this.formatStyle(e.right, "px"),
        height: this.formatStyle(e.height, "px"),
        width: this.formatStyle(e.width, "px")
      });
    };
  }
  function im(e) {
    var t;
    var i;
    var s;
    var r;
    e.div && (t = e.div.offsetHeight, i = e.div.offsetWidth, s = e.div.offsetTop, r = (r = (r = e.div.childNodes) && r[0]) && r.getClientRects && r.getClientRects(), e = e.div.getBoundingClientRect(), r = r ? Math.max(r[0] && r[0].height || 0, e.height / r.length) : 0);
    this.left = e.left;
    this.right = e.right;
    this.top = e.top || s;
    this.height = e.height || t;
    this.bottom = e.bottom || s + (e.height || t);
    this.width = e.width || i;
    this.lineHeight = void 0 !== r ? r : e.lineHeight;
  }
  function ig() { }
  ic.prototype.applyStyles = function (e, t) {
    for (var i in t = t || this.div, e) e.hasOwnProperty(i) && (t.style[i] = e[i]);
  };
  ic.prototype.formatStyle = function (e, t) {
    return 0 === e ? 0 : e + t;
  };
  (ip.prototype = t7(ic.prototype)).constructor = ip;
  im.prototype.move = function (e, t) {
    switch (t = void 0 !== t ? t : this.lineHeight, e) {
      case "+x":
        this.left += t;
        this.right += t;
        break;
      case "-x":
        this.left -= t;
        this.right -= t;
        break;
      case "+y":
        this.top += t;
        this.bottom += t;
        break;
      case "-y":
        this.top -= t;
        this.bottom -= t;
    }
  };
  im.prototype.overlaps = function (e) {
    return this.left < e.right && this.right > e.left && this.top < e.bottom && this.bottom > e.top;
  };
  im.prototype.overlapsAny = function (e) {
    for (var t = 0; t < e.length; t++) if (this.overlaps(e[t])) return !0;
    return !1;
  };
  im.prototype.within = function (e) {
    return this.top >= e.top && this.bottom <= e.bottom && this.left >= e.left && this.right <= e.right;
  };
  im.prototype.overlapsOppositeAxis = function (e, t) {
    switch (t) {
      case "+x":
        return this.left < e.left;
      case "-x":
        return this.right > e.right;
      case "+y":
        return this.top < e.top;
      case "-y":
        return this.bottom > e.bottom;
    }
  };
  im.prototype.intersectPercentage = function (e) {
    return Math.max(0, Math.min(this.right, e.right) - Math.max(this.left, e.left)) * Math.max(0, Math.min(this.bottom, e.bottom) - Math.max(this.top, e.top)) / (this.height * this.width);
  };
  im.prototype.toCSSCompatValues = function (e) {
    return {
      top: this.top - e.top,
      bottom: e.bottom - this.bottom,
      left: this.left - e.left,
      right: e.right - this.right,
      height: this.height,
      width: this.width
    };
  };
  im.getSimpleBoxPosition = function (e) {
    var t = e.div ? e.div.offsetHeight : e.tagName ? e.offsetHeight : 0;
    var i = e.div ? e.div.offsetWidth : e.tagName ? e.offsetWidth : 0;
    var s = e.div ? e.div.offsetTop : e.tagName ? e.offsetTop : 0;
    return {
      left: (e = e.div ? e.div.getBoundingClientRect() : e.tagName ? e.getBoundingClientRect() : e).left,
      right: e.right,
      top: e.top || s,
      height: e.height || t,
      bottom: e.bottom || s + (e.height || t),
      width: e.width || i
    };
  };
  ig.StringDecoder = function () {
    return {
      decode: function (e) {
        if (!e) return "";
        if ("string" != typeof e) throw Error("Error - expected string data.");
        return decodeURIComponent(encodeURIComponent(e));
      }
    };
  };
  ig.convertCueToDOMTree = function (e, t) {
    return e && t ? id(e, t) : null;
  };
  ig.processCues = function (e, t, i) {
    if (!e || !t || !i) return null;
    for (; i.firstChild;) i.removeChild(i.firstChild);
    var s = e.document.createElement("div");
    if (s.style.position = "absolute", s.style.left = "0", s.style.right = "0", s.style.top = "0", s.style.bottom = "0", s.style.margin = "1.5%", i.appendChild(s), function (e) {
      for (var t = 0; t < e.length; t++) if (e[t].hasBeenReset || !e[t].displayState) return 1;
    }(t)) for (a = [], o = im.getSimpleBoxPosition(s), l = {
      font: Math.round(.05 * o.height * 100) / 100 + "px sans-serif"
    }, h = 0, void 0; h < t.length; h++) {
        var r;
        var n;
        var a;
        var o;
        var l;
        var h;
        r = new ip(e, n = t[h], l);
        s.appendChild(r.div);
        (function (e, t, i, s) {
          var r;
          var n = new im(t);
          var a = t.cue;
          var o = function (e) {
            if ("number" == typeof e.line && (e.snapToLines || 0 <= e.line && e.line <= 100)) return e.line;
            if (!e.track || !e.track.textTrackList || !e.track.textTrackList.mediaElement) return -1;
            for (t = e.track, i = t.textTrackList, s = 0, r = 0, void 0; r < i.length && i[r] !== t; r++) {
              var t;
              var i;
              var s;
              var r;
              "showing" === i[r].mode && s++;
            }
            return -1 * ++s;
          }(a);
          var l = [];
          if (a.snapToLines) {
            switch (a.vertical) {
              case "":
                l = ["+y", "-y"];
                r = "height";
                break;
              case "rl":
                l = ["+x", "-x"];
                r = "width";
                break;
              case "lr":
                l = ["-x", "+x"];
                r = "width";
            }
            var h = n.lineHeight;
            var d = h * Math.round(o);
            var u = i[r] + h;
            var c = l[0];
            Math.abs(d) > u && (d = Math.ceil(u / h) * h * (d < 0 ? -1 : 1));
            o < 0 && (d += "" === a.vertical ? i.height : i.width, l = l.reverse());
            n.move(c, d);
          } else {
            var p = n.lineHeight / i.height * 100;
            switch (a.lineAlign) {
              case "center":
                o -= p / 2;
                break;
              case "end":
                o -= p;
            }
            switch (a.vertical) {
              case "":
                t.applyStyles({
                  top: t.formatStyle(o, "%")
                });
                break;
              case "rl":
                t.applyStyles({
                  left: t.formatStyle(o, "%")
                });
                break;
              case "lr":
                t.applyStyles({
                  right: t.formatStyle(o, "%")
                });
            }
            l = ["+y", "-x", "+x", "-y"];
            n = new im(t);
          }
          u = function (e, t) {
            for (n = new im(e), a = 1, o = 0, void 0; o < t.length; o++) {
              var r;
              var n;
              var a;
              var o;
              for (; e.overlapsOppositeAxis(i, t[o]) || e.within(i) && e.overlapsAny(s);) e.move(t[o]);
              if (e.within(i)) return e;
              var l = e.intersectPercentage(i);
              l < a && (r = new im(e), a = l);
              e = new im(n);
            }
            return r || n;
          }(n, l);
          t.move(u.toCSSCompatValues(i));
        })(0, r, o, a);
        n.displayState = r.div;
        a.push(im.getSimpleBoxPosition(r));
      } else for (var d = 0; d < t.length; d++) s.appendChild(t[d].displayState);
  };
  (ig.Parser = function (e, t, i) {
    i || (i = t, t = {});
    t = t || {};
    this.window = e;
    this.vttjs = t;
    this.state = "INITIAL";
    this.buffer = "";
    this.decoder = i || new TextDecoder("utf8");
    this.regionList = [];
  }).prototype = {
    reportOrThrowError: function (e) {
      if (!(e instanceof ie)) throw e;
      this.onparsingerror && this.onparsingerror(e);
    },
    parse: function (e) {
      var t = this;
      function i() {
        for (e = t.buffer, i = 0, void 0; i < e.length && "\r" !== e[i] && "\n" !== e[i];) {
          var e;
          var i;
          ++i;
        }
        var s = e.substr(0, i);
        "\r" === e[i] && ++i;
        "\n" === e[i] && ++i;
        t.buffer = e.substr(i);
        return s;
      }
      e && (t.buffer += t.decoder.decode(e, {
        stream: !0
      }));
      try {
        if ("INITIAL" === t.state) {
          if (!/\r\n|\n/.test(t.buffer)) return this;
          var s;
          var r;
          var n = (r = i()).match(/^WEBVTT([ \t].*)?$/);
          if (!n || !n[0]) throw new ie(ie.Errors.BadSignature);
          t.state = "HEADER";
        }
        for (var a = !1; t.buffer && /\r\n|\n/.test(t.buffer);) switch (a ? a = !1 : r = i(), t.state) {
          case "HEADER":
            /:/.test(r) ? (s = r).match(/X-TIMESTAMP-MAP/) ? is(s, function (e, i) {
              var s;
              "X-TIMESTAMP-MAP" === e && (e = i, s = new ii(), is(e, function (e, t) {
                switch (e) {
                  case "MPEGT":
                    s.integer(e + "S", t);
                    break;
                  case "LOCA":
                    s.set(e + "L", it(t));
                }
              }, /[^\d]:/, /,/), t.ontimestampmap) && t.ontimestampmap({
                MPEGTS: s.get("MPEGTS"),
                LOCAL: s.get("LOCAL")
              });
            }, /=/) : is(s, function (e, i) {
              var s;
              "Region" === e && (e = i, s = new ii(), is(e, function (e, t) {
                switch (e) {
                  case "id":
                    s.set(e, t);
                    break;
                  case "width":
                    s.percent(e, t);
                    break;
                  case "lines":
                    s.integer(e, t);
                    break;
                  case "regionanchor":
                  case "viewportanchor":
                    var i;
                    var r = t.split(",");
                    2 === r.length && ((i = new ii()).percent("x", r[0]), i.percent("y", r[1]), i.has("x") && i.has("y")) && (s.set(e + "X", i.get("x")), s.set(e + "Y", i.get("y")));
                    break;
                  case "scroll":
                    s.alt(e, t, ["up"]);
                }
              }, /=/, /\s/), s.has("id")) && ((e = new (t.vttjs.VTTRegion || t.window.VTTRegion)()).width = s.get("width", 100), e.lines = s.get("lines", 3), e.regionAnchorX = s.get("regionanchorX", 0), e.regionAnchorY = s.get("regionanchorY", 100), e.viewportAnchorX = s.get("viewportanchorX", 0), e.viewportAnchorY = s.get("viewportanchorY", 100), e.scroll = s.get("scroll", ""), t.onregion && t.onregion(e), t.regionList.push({
                id: s.get("id"),
                region: e
              }));
            }, /:/) : r || (t.state = "ID");
            continue;
          case "NOTE":
            r || (t.state = "ID");
            continue;
          case "ID":
            if (/^NOTE($|[ \t])/.test(r)) {
              t.state = "NOTE";
              break;
            }
            if (!r) continue;
            t.cue = new (t.vttjs.VTTCue || t.window.VTTCue)(0, 0, "");
            try {
              t.cue.align = "center";
            } catch (e) {
              t.cue.align = "middle";
            }
            if (t.state = "CUE", -1 === r.indexOf("--\x3e")) {
              t.cue.id = r;
              continue;
            }
          case "CUE":
            try {
              !function (e, t, i) {
                var s = e;
                function r() {
                  var t = it(e);
                  if (null === t) throw new ie(ie.Errors.BadTimeStamp, "Malformed timestamp: " + s);
                  e = e.replace(/^[^\sa-zA-Z-]+/, "");
                  return t;
                }
                function n() {
                  e = e.replace(/^\s+/, "");
                }
                if (n(), t.startTime = r(), n(), "--\x3e" !== e.substr(0, 3)) throw new ie(ie.Errors.BadTimeStamp, "Malformed time stamp (time stamps must be separated by '--\x3e'): " + s);
                e = e.substr(3);
                n();
                t.endTime = r();
                n();
                var a = e;
                var o = new ii();
                is(a, function (e, t) {
                  switch (e) {
                    case "region":
                      for (var s = i.length - 1; 0 <= s; s--) if (i[s].id === t) {
                        o.set(e, i[s].region);
                        break;
                      }
                      break;
                    case "vertical":
                      o.alt(e, t, ["rl", "lr"]);
                      break;
                    case "line":
                      var r = t.split(",");
                      var n = r[0];
                      o.integer(e, n);
                      o.percent(e, n) && o.set("snapToLines", !1);
                      o.alt(e, n, ["auto"]);
                      2 === r.length && o.alt("lineAlign", r[1], ["start", "center", "end"]);
                      break;
                    case "position":
                      r = t.split(",");
                      o.percent(e, r[0]);
                      2 === r.length && o.alt("positionAlign", r[1], ["start", "center", "end"]);
                      break;
                    case "size":
                      o.percent(e, t);
                      break;
                    case "align":
                      o.alt(e, t, ["start", "center", "end", "left", "right"]);
                  }
                }, /:/, /\s/);
                t.region = o.get("region", null);
                t.vertical = o.get("vertical", "");
                try {
                  t.line = o.get("line", "auto");
                } catch (e) { }
                t.lineAlign = o.get("lineAlign", "start");
                t.snapToLines = o.get("snapToLines", !0);
                t.size = o.get("size", 100);
                try {
                  t.align = o.get("align", "center");
                } catch (e) {
                  t.align = o.get("align", "middle");
                }
                try {
                  t.position = o.get("position", "auto");
                } catch (e) {
                  t.position = o.get("position", {
                    start: 0,
                    left: 0,
                    center: 50,
                    middle: 50,
                    end: 100,
                    right: 100
                  }, t.align);
                }
                t.positionAlign = o.get("positionAlign", {
                  start: "start",
                  left: "start",
                  center: "center",
                  middle: "center",
                  end: "end",
                  right: "end"
                }, t.align);
              }(r, t.cue, t.regionList);
            } catch (e) {
              t.reportOrThrowError(e);
              t.cue = null;
              t.state = "BADCUE";
              continue;
            }
            t.state = "CUETEXT";
            continue;
          case "CUETEXT":
            var o = -1 !== r.indexOf("--\x3e");
            if (!r || o && (a = !0)) {
              t.oncue && t.oncue(t.cue);
              t.cue = null;
              t.state = "ID";
              continue;
            }
            t.cue.text && (t.cue.text += "\n");
            t.cue.text += r.replace(/\u2028/g, "\n").replace(/u2029/g, "\n");
            continue;
          case "BADCUE":
            r || (t.state = "ID");
            continue;
        }
      } catch (e) {
        t.reportOrThrowError(e);
        "CUETEXT" === t.state && t.cue && t.oncue && t.oncue(t.cue);
        t.cue = null;
        t.state = "INITIAL" === t.state ? "BADWEBVTT" : "BADCUE";
      }
      return this;
    },
    flush: function () {
      try {
        if (this.buffer += this.decoder.decode(), (this.cue || "HEADER" === this.state) && (this.buffer += "\n\n", this.parse()), "INITIAL" === this.state) throw new ie(ie.Errors.BadSignature);
      } catch (e) {
        this.reportOrThrowError(e);
      }
      this.onflush && this.onflush();
      return this;
    }
  };
  var iy = {
    "": 1,
    lr: 1,
    rl: 1
  };
  var i_ = {
    start: 1,
    center: 1,
    end: 1,
    left: 1,
    right: 1,
    auto: 1,
    "line-left": 1,
    "line-right": 1
  };
  function iv(e) {
    return "string" == typeof e && !!i_[e.toLowerCase()] && e.toLowerCase();
  }
  function ib(e, t, i) {
    this.hasBeenReset = !1;
    var s = "";
    var r = !1;
    var n = e;
    var a = t;
    var o = i;
    var l = null;
    var h = "";
    var d = !0;
    var u = "auto";
    var c = "start";
    var p = "auto";
    var m = "auto";
    var g = 100;
    var f = "center";
    Object.defineProperties(this, {
      id: {
        enumerable: !0,
        get: function () {
          return s;
        },
        set: function (e) {
          s = "" + e;
        }
      },
      pauseOnExit: {
        enumerable: !0,
        get: function () {
          return r;
        },
        set: function (e) {
          r = !!e;
        }
      },
      startTime: {
        enumerable: !0,
        get: function () {
          return n;
        },
        set: function (e) {
          if ("number" != typeof e) throw TypeError("Start time must be set to a number.");
          n = e;
          this.hasBeenReset = !0;
        }
      },
      endTime: {
        enumerable: !0,
        get: function () {
          return a;
        },
        set: function (e) {
          if ("number" != typeof e) throw TypeError("End time must be set to a number.");
          a = e;
          this.hasBeenReset = !0;
        }
      },
      text: {
        enumerable: !0,
        get: function () {
          return o;
        },
        set: function (e) {
          o = "" + e;
          this.hasBeenReset = !0;
        }
      },
      region: {
        enumerable: !0,
        get: function () {
          return l;
        },
        set: function (e) {
          l = e;
          this.hasBeenReset = !0;
        }
      },
      vertical: {
        enumerable: !0,
        get: function () {
          return h;
        },
        set: function (e) {
          if (!1 === (e = "string" == typeof e && !!iy[e.toLowerCase()] && e.toLowerCase())) throw SyntaxError("Vertical: an invalid or illegal direction string was specified.");
          h = e;
          this.hasBeenReset = !0;
        }
      },
      snapToLines: {
        enumerable: !0,
        get: function () {
          return d;
        },
        set: function (e) {
          d = !!e;
          this.hasBeenReset = !0;
        }
      },
      line: {
        enumerable: !0,
        get: function () {
          return u;
        },
        set: function (e) {
          if ("number" != typeof e && "auto" !== e) throw SyntaxError("Line: an invalid number or illegal string was specified.");
          u = e;
          this.hasBeenReset = !0;
        }
      },
      lineAlign: {
        enumerable: !0,
        get: function () {
          return c;
        },
        set: function (e) {
          (e = iv(e)) && (c = e, this.hasBeenReset = !0);
        }
      },
      position: {
        enumerable: !0,
        get: function () {
          return p;
        },
        set: function (e) {
          if (e < 0 || 100 < e) throw Error("Position must be between 0 and 100.");
          p = e;
          this.hasBeenReset = !0;
        }
      },
      positionAlign: {
        enumerable: !0,
        get: function () {
          return m;
        },
        set: function (e) {
          (e = iv(e)) && (m = e, this.hasBeenReset = !0);
        }
      },
      size: {
        enumerable: !0,
        get: function () {
          return g;
        },
        set: function (e) {
          if (e < 0 || 100 < e) throw Error("Size must be between 0 and 100.");
          g = e;
          this.hasBeenReset = !0;
        }
      },
      align: {
        enumerable: !0,
        get: function () {
          return f;
        },
        set: function (e) {
          if (!(e = iv(e))) throw SyntaxError("align: an invalid or illegal alignment string was specified.");
          f = e;
          this.hasBeenReset = !0;
        }
      }
    });
    this.displayState = void 0;
  }
  ib.prototype.getCueAsHTML = function () {
    return WebVTT.convertCueToDOMTree(window, this.text);
  };
  var iT = {
    "": !0,
    up: !0
  };
  function iS(e) {
    return "number" == typeof e && 0 <= e && e <= 100;
  }
  function iw() {
    var e = 100;
    var t = 3;
    var i = 0;
    var s = 100;
    var r = 0;
    var n = 100;
    var a = "";
    Object.defineProperties(this, {
      width: {
        enumerable: !0,
        get: function () {
          return e;
        },
        set: function (t) {
          if (!iS(t)) throw Error("Width must be between 0 and 100.");
          e = t;
        }
      },
      lines: {
        enumerable: !0,
        get: function () {
          return t;
        },
        set: function (e) {
          if ("number" != typeof e) throw TypeError("Lines must be set to a number.");
          t = e;
        }
      },
      regionAnchorY: {
        enumerable: !0,
        get: function () {
          return s;
        },
        set: function (e) {
          if (!iS(e)) throw Error("RegionAnchorX must be between 0 and 100.");
          s = e;
        }
      },
      regionAnchorX: {
        enumerable: !0,
        get: function () {
          return i;
        },
        set: function (e) {
          if (!iS(e)) throw Error("RegionAnchorY must be between 0 and 100.");
          i = e;
        }
      },
      viewportAnchorY: {
        enumerable: !0,
        get: function () {
          return n;
        },
        set: function (e) {
          if (!iS(e)) throw Error("ViewportAnchorY must be between 0 and 100.");
          n = e;
        }
      },
      viewportAnchorX: {
        enumerable: !0,
        get: function () {
          return r;
        },
        set: function (e) {
          if (!iS(e)) throw Error("ViewportAnchorX must be between 0 and 100.");
          r = e;
        }
      },
      scroll: {
        enumerable: !0,
        get: function () {
          return a;
        },
        set: function (e) {
          !1 !== (e = "string" == typeof e && !!iT[e.toLowerCase()] && e.toLowerCase()) && (a = e);
        }
      }
    });
  }
  var iE = ti(function (e) {
    var e = e.exports = {
      WebVTT: ig,
      VTTCue: ib,
      VTTRegion: iw
    };
    tF.vttjs = e;
    tF.WebVTT = e.WebVTT;
    var t = e.VTTCue;
    var i = e.VTTRegion;
    var s = tF.VTTCue;
    var r = tF.VTTRegion;
    e.shim = function () {
      tF.VTTCue = t;
      tF.VTTRegion = i;
    };
    e.restore = function () {
      tF.VTTCue = s;
      tF.VTTRegion = r;
    };
    tF.VTTCue || e.shim();
  });
  iE.WebVTT;
  iE.VTTCue;
  iE.VTTRegion;
  class iC extends tr {
    constructor(e = {}, t = function () { }) {
      e.reportTouchActivity = !1;
      super(null, e, t);
      this.onDurationChange_ = e => this.onDurationChange(e);
      this.trackProgress_ = e => this.trackProgress(e);
      this.trackCurrentTime_ = e => this.trackCurrentTime(e);
      this.stopTrackingCurrentTime_ = e => this.stopTrackingCurrentTime(e);
      this.disposeSourceHandler_ = e => this.disposeSourceHandler(e);
      this.queuedHanders_ = new Set();
      this.hasStarted_ = !1;
      this.on("playing", function () {
        this.hasStarted_ = !0;
      });
      this.on("loadstart", function () {
        this.hasStarted_ = !1;
      });
      t3.names.forEach(t => {
        t = t3[t];
        e && e[t.getterName] && (this[t.privateName] = e[t.getterName]);
      });
      this.featuresProgressEvents || this.manualProgressOn();
      this.featuresTimeupdateEvents || this.manualTimeUpdatesOn();
      ["Text", "Audio", "Video"].forEach(t => {
        !1 === e[`native${t}Tracks`] && (this[`featuresNative${t}Tracks`] = !1);
      });
      !1 === e.nativeCaptions || !1 === e.nativeTextTracks ? this.featuresNativeTextTracks = !1 : !0 !== e.nativeCaptions && !0 !== e.nativeTextTracks || (this.featuresNativeTextTracks = !0);
      this.featuresNativeTextTracks || this.emulateTextTracks();
      this.preloadTextTracks = !1 !== e.preloadTextTracks;
      this.autoRemoteTextTracks_ = new t3.text.ListClass();
      this.initTrackListeners();
      e.nativeControlsForTouch || this.emitTapEvents();
      this.constructor && (this.name_ = this.constructor.name || "Unknown Tech");
    }
    triggerSourceset(e) {
      this.isReady_ || this.one("ready", () => this.setTimeout(() => this.triggerSourceset(e), 1));
      this.trigger({
        src: e,
        type: "sourceset"
      });
    }
    manualProgressOn() {
      this.on("durationchange", this.onDurationChange_);
      this.manualProgress = !0;
      this.one("ready", this.trackProgress_);
    }
    manualProgressOff() {
      this.manualProgress = !1;
      this.stopTrackingProgress();
      this.off("durationchange", this.onDurationChange_);
    }
    trackProgress(e) {
      this.stopTrackingProgress();
      this.progressInterval = this.setInterval(e$(this, function () {
        var e = this.bufferedPercent();
        this.bufferedPercent_ !== e && this.trigger("progress");
        1 === (this.bufferedPercent_ = e) && this.stopTrackingProgress();
      }), 500);
    }
    onDurationChange(e) {
      this.duration_ = this.duration();
    }
    buffered() {
      return to(0, 0);
    }
    bufferedPercent() {
      return tm(this.buffered(), this.duration_);
    }
    stopTrackingProgress() {
      this.clearInterval(this.progressInterval);
    }
    manualTimeUpdatesOn() {
      this.manualTimeUpdates = !0;
      this.on("play", this.trackCurrentTime_);
      this.on("pause", this.stopTrackingCurrentTime_);
    }
    manualTimeUpdatesOff() {
      this.manualTimeUpdates = !1;
      this.stopTrackingCurrentTime();
      this.off("play", this.trackCurrentTime_);
      this.off("pause", this.stopTrackingCurrentTime_);
    }
    trackCurrentTime() {
      this.currentTimeInterval && this.stopTrackingCurrentTime();
      this.currentTimeInterval = this.setInterval(function () {
        this.trigger({
          type: "timeupdate",
          target: this,
          manuallyTriggered: !0
        });
      }, 250);
    }
    stopTrackingCurrentTime() {
      this.clearInterval(this.currentTimeInterval);
      this.trigger({
        type: "timeupdate",
        target: this,
        manuallyTriggered: !0
      });
    }
    dispose() {
      this.clearTracks(t8.names);
      this.manualProgress && this.manualProgressOff();
      this.manualTimeUpdates && this.manualTimeUpdatesOff();
      super.dispose();
    }
    clearTracks(e) {
      (e = [].concat(e)).forEach(e => {
        var t = this[e + "Tracks"]() || [];
        let i = t.length;
        for (; i--;) {
          var s = t[i];
          "text" === e && this.removeRemoteTextTrack(s);
          t.removeTrack(s);
        }
      });
    }
    cleanupAutoTextTracks() {
      var e = this.autoRemoteTextTracks_ || [];
      let t = e.length;
      for (; t--;) {
        var i = e[t];
        this.removeRemoteTextTrack(i);
      }
    }
    reset() { }
    crossOrigin() { }
    setCrossOrigin() { }
    error(e) {
      void 0 !== e && (this.error_ = new tg(e), this.trigger("error"));
      return this.error_;
    }
    played() {
      return this.hasStarted_ ? to(0, 0) : to();
    }
    play() { }
    setScrubbing(e) { }
    scrubbing() { }
    setCurrentTime(e) {
      this.manualTimeUpdates && this.trigger({
        type: "timeupdate",
        target: this,
        manuallyTriggered: !0
      });
    }
    initTrackListeners() {
      t8.names.forEach(e => {
        var t = t8[e];
        let i = () => {
          this.trigger(e + "trackchange");
        };
        let s = this[t.getterName]();
        s.addEventListener("removetrack", i);
        s.addEventListener("addtrack", i);
        this.on("dispose", () => {
          s.removeEventListener("removetrack", i);
          s.removeEventListener("addtrack", i);
        });
      });
    }
    addWebVttScript_() {
      if (!window.WebVTT) {
        if (document.body.contains(this.el())) {
          if (!this.options_["vtt.js"] && T(iE) && 0 < Object.keys(iE).length) this.trigger("vttjsloaded"); else {
            let e = document.createElement("script");
            e.src = this.options_["vtt.js"] || "https://vjs.zencdn.net/vttjs/0.14.1/vtt.min.js";
            e.onload = () => {
              this.trigger("vttjsloaded");
            };
            e.onerror = () => {
              this.trigger("vttjserror");
            };
            this.on("dispose", () => {
              e.onload = null;
              e.onerror = null;
            });
            window.WebVTT = !0;
            this.el().parentNode.appendChild(e);
          }
        } else this.ready(this.addWebVttScript_);
      }
    }
    emulateTextTracks() {
      let e = this.textTracks();
      let t = this.remoteTextTracks();
      let i = t => e.addTrack(t.track);
      let s = t => e.removeTrack(t.track);
      t.on("addtrack", i);
      t.on("removetrack", s);
      this.addWebVttScript_();
      let r = () => this.trigger("texttrackchange");
      let n = () => {
        r();
        for (let i = 0; i < e.length; i++) {
          var t = e[i];
          t.removeEventListener("cuechange", r);
          "showing" === t.mode && t.addEventListener("cuechange", r);
        }
      };
      n();
      e.addEventListener("change", n);
      e.addEventListener("addtrack", n);
      e.addEventListener("removetrack", n);
      this.on("dispose", function () {
        t.off("addtrack", i);
        t.off("removetrack", s);
        e.removeEventListener("change", n);
        e.removeEventListener("addtrack", n);
        e.removeEventListener("removetrack", n);
        for (let t = 0; t < e.length; t++) e[t].removeEventListener("cuechange", r);
      });
    }
    addTextTrack(e, t, i) {
      var s;
      var r;
      if (e) {
        s = {};
        r = this.textTracks();
        s.kind = e;
        t && (s.label = t);
        i && (s.language = i);
        s.tech = this;
        e = new t3.text.TrackClass(s);
        r.addTrack(e);
        return e;
      }
      throw Error("TextTrack kind is required but was not provided");
    }
    createRemoteTextTrack(e) {
      e = S(e, {
        tech: this
      });
      return new t5.remoteTextEl.TrackClass(e);
    }
    addRemoteTextTrack(e = {}, t) {
      let i = this.createRemoteTextTrack(e);
      "boolean" != typeof t && (t = !1);
      this.remoteTextTrackEls().addTrackElement_(i);
      this.remoteTextTracks().addTrack(i.track);
      !1 === t && this.ready(() => this.autoRemoteTextTracks_.addTrack(i.track));
      return i;
    }
    removeRemoteTextTrack(e) {
      var t = this.remoteTextTrackEls().getTrackElementByTrack_(e);
      this.remoteTextTrackEls().removeTrackElement_(t);
      this.remoteTextTracks().removeTrack(e);
      this.autoRemoteTextTracks_.removeTrack(e);
    }
    getVideoPlaybackQuality() {
      return {};
    }
    requestPictureInPicture() {
      return Promise.reject();
    }
    disablePictureInPicture() {
      return !0;
    }
    setDisablePictureInPicture() { }
    requestVideoFrameCallback(e) {
      let t = eO++;
      !this.isReady_ || this.paused() ? (this.queuedHanders_.add(t), this.one("playing", () => {
        this.queuedHanders_.has(t) && (this.queuedHanders_.$$delete(t), e());
      })) : this.requestNamedAnimationFrame(t, e);
      return t;
    }
    cancelVideoFrameCallback(e) {
      this.queuedHanders_.has(e) ? this.queuedHanders_.$$delete(e) : this.cancelNamedAnimationFrame(e);
    }
    setPoster() { }
    playsinline() { }
    setPlaysinline() { }
    overrideNativeAudioTracks(e) { }
    overrideNativeVideoTracks(e) { }
    canPlayType(e) {
      return "";
    }
    static canPlayType(e) {
      return "";
    }
    static canPlaySource(e, t) {
      return iC.canPlayType(e.type);
    }
    static isTech(e) {
      return e.prototype instanceof iC || e instanceof iC || e === iC;
    }
    static registerTech(e, t) {
      if (iC.techs_ || (iC.techs_ = {}), !iC.isTech(t)) throw Error(`Tech ${e} must be a Tech`);
      if (!iC.canPlayType) throw Error("Techs must have a static canPlayType method on them");
      if (iC.canPlaySource) {
        e = e7(e);
        iC.techs_[e] = t;
        iC.techs_[e6(e)] = t;
        "Tech" !== e && iC.defaultTechOrder_.push(e);
        return t;
      }
      throw Error("Techs must have a static canPlaySource method on them");
    }
    static getTech(e) {
      if (e) return iC.techs_ && iC.techs_[e] ? iC.techs_[e] : (e = e7(e), window && window.videojs && window.videojs[e] ? (g.warn(`The ${e} tech was added to the videojs object when it should be registered using videojs.registerTech(name, tech)`), window.videojs[e]) : void 0);
    }
  }
  t3.names.forEach(function (e) {
    let t = t3[e];
    iC.prototype[t.getterName] = function () {
      this[t.privateName] = this[t.privateName] || new t.ListClass();
      return this[t.privateName];
    };
  });
  iC.prototype.featuresVolumeControl = !0;
  iC.prototype.featuresMuteControl = !0;
  iC.prototype.featuresFullscreenResize = !1;
  iC.prototype.featuresPlaybackRate = !1;
  iC.prototype.featuresProgressEvents = !1;
  iC.prototype.featuresSourceset = !1;
  iC.prototype.featuresTimeupdateEvents = !1;
  iC.prototype.featuresNativeTextTracks = !1;
  iC.prototype.featuresVideoFrameCallback = !1;
  iC.withSourceHandlers = function (e) {
    e.registerSourceHandler = function (t, i) {
      let s = e.sourceHandlers;
      s = s || (e.sourceHandlers = []);
      void 0 === i && (i = s.length);
      s.splice(i, 0, t);
    };
    e.canPlayType = function (t) {
      var i;
      var s = e.sourceHandlers || [];
      for (let e = 0; e < s.length; e++) if (i = s[e].canPlayType(t)) return i;
      return "";
    };
    e.selectSourceHandler = function (t, i) {
      var s = e.sourceHandlers || [];
      for (let e = 0; e < s.length; e++) if (s[e].canHandleSource(t, i)) return s[e];
      return null;
    };
    e.canPlaySource = function (t, i) {
      var s = e.selectSourceHandler(t, i);
      return s ? s.canHandleSource(t, i) : "";
    };
    ["seekable", "seeking", "duration"].forEach(function (e) {
      let t = this[e];
      "function" == typeof t && (this[e] = function () {
        return this.sourceHandler_ && this.sourceHandler_[e] ? this.sourceHandler_[e].apply(this.sourceHandler_, arguments) : t.apply(this, arguments);
      });
    }, e.prototype);
    e.prototype.setSource = function (t) {
      let i = e.selectSourceHandler(t, this.options_);
      i || (e.nativeSourceHandler ? i = e.nativeSourceHandler : g.error("No source handler found for the current source."));
      this.disposeSourceHandler();
      this.off("dispose", this.disposeSourceHandler_);
      i !== e.nativeSourceHandler && (this.currentSource_ = t);
      this.sourceHandler_ = i.handleSource(t, this, this.options_);
      this.one("dispose", this.disposeSourceHandler_);
    };
    e.prototype.disposeSourceHandler = function () {
      this.currentSource_ && (this.clearTracks(["audio", "video"]), this.currentSource_ = null);
      this.cleanupAutoTextTracks();
      this.sourceHandler_ && (this.sourceHandler_.dispose && this.sourceHandler_.dispose(), this.sourceHandler_ = null);
    };
  };
  tr.registerComponent("Tech", iC);
  iC.registerTech("Tech", iC);
  iC.defaultTechOrder_ = [];
  let ik = {};
  let ix = {};
  let iI = {};
  function iA(e, t, i, s = null) {
    var r = "call" + e7(i);
    var r = e.reduce(iO(r), s);
    var s = r === iI;
    var t = s ? null : t[i](r);
    var n = t;
    var a = s;
    for (let t = e.length - 1; 0 <= t; t--) {
      var o = e[t];
      o[i] && o[i](a, n);
    }
    return t;
  }
  let iD = {
    buffered: 1,
    currentTime: 1,
    duration: 1,
    muted: 1,
    played: 1,
    paused: 1,
    seekable: 1,
    volume: 1,
    ended: 1
  };
  let iL = {
    setCurrentTime: 1,
    setMuted: 1,
    setVolume: 1
  };
  let iP = {
    play: 1,
    pause: 1
  };
  function iO(e) {
    return (t, i) => t === iI ? iI : i[e] ? i[e](t) : t;
  }
  let iN = {
    opus: "video/ogg",
    ogv: "video/ogg",
    mp4: "video/mp4",
    mov: "video/mp4",
    m4v: "video/mp4",
    mkv: "video/x-matroska",
    m4a: "audio/mp4",
    mp3: "audio/mpeg",
    aac: "audio/aac",
    caf: "audio/x-caf",
    flac: "audio/flac",
    oga: "audio/ogg",
    wav: "audio/wav",
    m3u8: "application/x-mpegURL",
    mpd: "application/dash+xml",
    jpg: "image/jpeg",
    jpeg: "image/jpeg",
    gif: "image/gif",
    png: "image/png",
    svg: "image/svg+xml",
    webp: "image/webp"
  };
  let iR = function (e = "") {
    return iN[(e = tM(e)).toLowerCase()] || "";
  };
  function iM(e) {
    var t;
    e.type || (t = iR(e.src)) && (e.type = t);
    return e;
  }
  tr.registerComponent("MediaLoader", class extends tr {
    constructor(e, t, i) {
      if (super(e, S({
        createEl: !1
      }, t), i), t.playerOptions.sources && 0 !== t.playerOptions.sources.length) e.src(t.playerOptions.sources); else for (function () {
        let i = 0;
        let r = t.playerOptions.techOrder;
      }(); i < r.length; i++) {
        var s = e7(r[i]);
        let t = iC.getTech(s);
        if ((t = s ? t : tr.getComponent(s)) && t.isSupported()) {
          e.loadTech_(s);
          break;
        }
      }
    }
  });
  class iU extends tr {
    constructor(e, t) {
      super(e, t);
      this.options_.controlText && this.controlText(this.options_.controlText);
      this.handleMouseOver_ = e => this.handleMouseOver(e);
      this.handleMouseOut_ = e => this.handleMouseOut(e);
      this.handleClick_ = e => this.handleClick(e);
      this.handleKeyDown_ = e => this.handleKeyDown(e);
      this.emitTapEvents();
      this.enable();
    }
    createEl(e = "div", t = {}, i = {}) {
      t = Object.assign({
        className: this.buildCSSClass(),
        tabIndex: 0
      }, t);
      "button" === e && g.error(`Creating a ClickableComponent with an HTML element of ${e} is not supported; use a Button instead.`);
      i = Object.assign({
        role: "button"
      }, i);
      this.tabIndex_ = t.tabIndex;
      e = Q(e, t, i);
      this.player_.options_.experimentalSvgIcons || e.appendChild(Q("span", {
        className: "vjs-icon-placeholder"
      }, {
        "aria-hidden": !0
      }));
      this.createControlTextEl(e);
      return e;
    }
    dispose() {
      this.controlTextEl_ = null;
      super.dispose();
    }
    createControlTextEl(e) {
      this.controlTextEl_ = Q("span", {
        className: "vjs-control-text"
      }, {
        "aria-live": "polite"
      });
      e && e.appendChild(this.controlTextEl_);
      this.controlText(this.controlText_, e);
      return this.controlTextEl_;
    }
    controlText(e, t = this.el()) {
      if (void 0 === e) return this.controlText_ || "Need Text";
      var i = this.localize(e);
      this.controlText_ = e;
      J(this.controlTextEl_, i);
      this.nonIconControl || this.player_.options_.noUITitleAttributes || t.setAttribute("title", i);
    }
    buildCSSClass() {
      return "vjs-control vjs-button " + super.buildCSSClass();
    }
    enable() {
      this.enabled_ || (this.enabled_ = !0, this.removeClass("vjs-disabled"), this.el_.setAttribute("aria-disabled", "false"), void 0 !== this.tabIndex_ && this.el_.setAttribute("tabIndex", this.tabIndex_), this.on(["tap", "click"], this.handleClick_), this.on("keydown", this.handleKeyDown_));
    }
    disable() {
      this.enabled_ = !1;
      this.addClass("vjs-disabled");
      this.el_.setAttribute("aria-disabled", "true");
      void 0 !== this.tabIndex_ && this.el_.removeAttribute("tabIndex");
      this.off("mouseover", this.handleMouseOver_);
      this.off("mouseout", this.handleMouseOut_);
      this.off(["tap", "click"], this.handleClick_);
      this.off("keydown", this.handleKeyDown_);
    }
    handleLanguagechange() {
      this.controlText(this.controlText_);
    }
    handleClick(e) {
      this.options_.clickHandler && this.options_.clickHandler.call(this, arguments);
    }
    handleKeyDown(e) {
      ts.isEventKey(e, "Space") || ts.isEventKey(e, "Enter") ? (e.preventDefault(), e.stopPropagation(), this.trigger("click")) : super.handleKeyDown(e);
    }
  }
  tr.registerComponent("ClickableComponent", iU);
  class iB extends iU {
    constructor(e, t) {
      super(e, t);
      this.update();
      this.update_ = e => this.update(e);
      e.on("posterchange", this.update_);
    }
    dispose() {
      this.player().off("posterchange", this.update_);
      super.dispose();
    }
    createEl() {
      return Q("div", {
        className: "vjs-poster"
      });
    }
    crossOrigin(e) {
      if (void 0 === e) return this.$("img") ? this.$("img").crossOrigin : this.player_.tech_ && this.player_.tech_.isReady_ ? this.player_.crossOrigin() : this.player_.options_.crossOrigin || this.player_.options_.crossorigin || null;
      null !== e && "anonymous" !== e && "use-credentials" !== e ? this.player_.log.warn(`crossOrigin must be null,  "anonymous" or "use-credentials", given "${e}"`) : this.$("img") && (this.$("img").crossOrigin = e);
    }
    update(e) {
      var t = this.player().poster();
      this.setSrc(t);
      t ? this.show() : this.hide();
    }
    setSrc(e) {
      e ? (this.$("img") || this.el_.appendChild(Q("picture", {
        className: "vjs-poster",
        tabIndex: -1
      }, {}, Q("img", {
        loading: "lazy",
        crossOrigin: this.crossOrigin()
      }, {
        alt: ""
      }))), this.$("img").src = e) : this.el_.textContent = "";
    }
    handleClick(e) {
      this.player_.controls() && (this.player_.tech(!0) && this.player_.tech(!0).focus(), this.player_.paused() ? t_(this.player_.play()) : this.player_.pause());
    }
  }
  iB.prototype.crossorigin = iB.prototype.crossOrigin;
  tr.registerComponent("PosterImage", iB);
  let iF = {
    monospace: "monospace",
    sansSerif: "sans-serif",
    serif: "serif",
    monospaceSansSerif: '"Andale Mono", "Lucida Console", monospace',
    monospaceSerif: '"Courier New", monospace',
    proportionalSansSerif: "sans-serif",
    proportionalSerif: "serif",
    casual: '"Comic Sans MS", Impact, fantasy',
    script: '"Monotype Corsiva", cursive',
    smallcaps: '"Andale Mono", "Lucida Console", monospace, sans-serif'
  };
  function iq(e, t) {
    let i;
    if (4 === e.length) i = e[1] + e[1] + e[2] + e[2] + e[3] + e[3]; else {
      if (7 !== e.length) throw Error("Invalid color code provided, " + e + "; must be formatted as e.g. #f0e or #f604e2.");
      i = e.slice(1);
    }
    return "rgba(" + parseInt(i.slice(0, 2), 16) + "," + parseInt(i.slice(2, 4), 16) + "," + parseInt(i.slice(4, 6), 16) + "," + t + ")";
  }
  function ij(e, t, i) {
    try {
      e.style[t] = i;
    } catch (e) { }
  }
  tr.registerComponent("TextTrackDisplay", class extends tr {
    constructor(e, t, i) {
      super(e, t, i);
      let s = e => {
        this.updateDisplayOverlay();
        this.updateDisplay(e);
      };
      e.on("loadstart", e => this.toggleDisplay(e));
      e.on("texttrackchange", e => this.updateDisplay(e));
      e.on("loadedmetadata", e => {
        this.updateDisplayOverlay();
        this.preselectTrack(e);
      });
      e.ready(e$(this, function () {
        if (e.tech_ && e.tech_.featuresNativeTextTracks) this.hide(); else {
          e.on("fullscreenchange", s);
          e.on("playerresize", s);
          let i = window.screen.orientation || window;
          let r = window.screen.orientation ? "change" : "orientationchange";
          i.addEventListener(r, s);
          e.on("dispose", () => i.removeEventListener(r, s));
          var t = this.options_.playerOptions.tracks || [];
          for (let e = 0; e < t.length; e++) this.player_.addRemoteTextTrack(t[e], !0);
          this.preselectTrack();
        }
      }));
    }
    preselectTrack() {
      let e;
      let t;
      let i;
      var s = {
        captions: 1,
        subtitles: 1
      };
      var r = this.player_.textTracks();
      var n = this.player_.cache_.selectedLanguage;
      for (let o = 0; o < r.length; o++) {
        var a = r[o];
        n && n.enabled && n.language && n.language === a.language && a.kind in s ? i = a.kind !== n.kind && i || a : n && !n.enabled ? (i = null, e = null, t = null) : a.$$default && ("descriptions" !== a.kind || e ? a.kind in s && !t && (t = a) : e = a);
      }
      i ? i.mode = "showing" : t ? t.mode = "showing" : e && (e.mode = "showing");
    }
    toggleDisplay() {
      this.player_.tech_ && this.player_.tech_.featuresNativeTextTracks ? this.hide() : this.show();
    }
    createEl() {
      return super.createEl("div", {
        className: "vjs-text-track-display"
      }, {
        translate: "yes",
        "aria-live": "off",
        "aria-atomic": "true"
      });
    }
    clearDisplay() {
      "function" == typeof window.WebVTT && window.WebVTT.processCues(window, [], this.el_);
    }
    updateDisplay() {
      var e = this.player_.textTracks();
      var t = this.options_.allowMultipleShowingTracks;
      if (this.clearDisplay(), t) {
        var i = [];
        for (let t = 0; t < e.length; ++t) {
          var s = e[t];
          "showing" === s.mode && i.push(s);
        }
        this.updateForTrack(i);
      } else {
        let t = null;
        let i = null;
        let s = e.length;
        for (; s--;) {
          var r = e[s];
          "showing" === r.mode && ("descriptions" === r.kind ? t = r : i = r);
        }
        i ? ("off" !== this.getAttribute("aria-live") && this.setAttribute("aria-live", "off"), this.updateForTrack(i)) : t && ("assertive" !== this.getAttribute("aria-live") && this.setAttribute("aria-live", "assertive"), this.updateForTrack(t));
      }
    }
    updateDisplayOverlay() {
      if (this.player_.videoHeight() && window.CSS.supports("inset-inline: 10px")) {
        var e;
        var t;
        var i = this.player_.currentWidth();
        var s = this.player_.currentHeight();
        var r = i / s;
        var n = this.player_.videoWidth() / this.player_.videoHeight();
        let a = 0;
        let o = 0;
        .1 < Math.abs(r - n) && (n < r ? a = Math.round((i - s * n) / 2) : o = Math.round((s - i / n) / 2));
        ij(this.el_, "insetInline", (e = a) ? e + "px" : "");
        ij(this.el_, "insetBlock", (t = o) ? t + "px" : "");
      }
    }
    updateDisplayState(e) {
      var t = this.player_.textTrackSettings.getValues();
      var i = e.activeCues;
      let s = i.length;
      for (; s--;) {
        var r;
        var n = i[s];
        n && (n = n.displayState, t.color && (n.firstChild.style.color = t.color), t.textOpacity && ij(n.firstChild, "color", iq(t.color || "#fff", t.textOpacity)), t.backgroundColor && (n.firstChild.style.backgroundColor = t.backgroundColor), t.backgroundOpacity && ij(n.firstChild, "backgroundColor", iq(t.backgroundColor || "#000", t.backgroundOpacity)), t.windowColor && (t.windowOpacity ? ij(n, "backgroundColor", iq(t.windowColor, t.windowOpacity)) : n.style.backgroundColor = t.windowColor), t.edgeStyle && ("dropshadow" === t.edgeStyle ? n.firstChild.style.textShadow = "2px 2px 3px #222, 2px 2px 4px #222, 2px 2px 5px #222" : "raised" === t.edgeStyle ? n.firstChild.style.textShadow = "1px 1px #222, 2px 2px #222, 3px 3px #222" : "depressed" === t.edgeStyle ? n.firstChild.style.textShadow = "1px 1px #ccc, 0 1px #ccc, -1px -1px #222, 0 -1px #222" : "uniform" === t.edgeStyle && (n.firstChild.style.textShadow = "0 0 4px #222, 0 0 4px #222, 0 0 4px #222, 0 0 4px #222")), t.fontPercent && 1 !== t.fontPercent && (r = window.parseFloat(n.style.fontSize), n.style.fontSize = r * t.fontPercent + "px", n.style.height = "auto", n.style.top = "auto"), t.fontFamily) && "default" !== t.fontFamily && ("small-caps" === t.fontFamily ? n.firstChild.style.fontVariant = "small-caps" : n.firstChild.style.fontFamily = iF[t.fontFamily]);
      }
    }
    updateForTrack(e) {
      if (Array.isArray(e) || (e = [e]), "function" == typeof window.WebVTT && !e.every(e => !e.activeCues)) {
        var t = [];
        for (let s = 0; s < e.length; ++s) {
          var i = e[s];
          for (let e = 0; e < i.activeCues.length; ++e) t.push(i.activeCues[e]);
        }
        window.WebVTT.processCues(window, t, this.el_);
        for (let t = 0; t < e.length; ++t) {
          var s = e[t];
          for (let e = 0; e < s.activeCues.length; ++e) {
            var r = s.activeCues[e].displayState;
            et(r, "vjs-text-track-cue", "vjs-text-track-cue-" + (s.language || t));
            s.language && eo(r, "lang", s.language);
          }
          this.player_.textTrackSettings && this.updateDisplayState(s);
        }
      }
    }
  });
  tr.registerComponent("LoadingSpinner", class extends tr {
    createEl() {
      var e = this.player_.isAudio();
      var e = this.localize(e ? "Audio Player" : "Video Player");
      var e = Q("span", {
        className: "vjs-control-text",
        textContent: this.localize("{1} is loading.", [e])
      });
      var t = super.createEl("div", {
        className: "vjs-loading-spinner",
        dir: "ltr"
      });
      t.appendChild(e);
      return t;
    }
    handleLanguagechange() {
      this.$(".vjs-control-text").textContent = this.localize("{1} is loading.", [this.player_.isAudio() ? "Audio Player" : "Video Player"]);
    }
  });
  class iH extends iU {
    createEl(e, t = {}, i = {}) {
      t = Q("button", t = Object.assign({
        className: this.buildCSSClass()
      }, t), i = Object.assign({
        type: "button"
      }, i));
      this.player_.options_.experimentalSvgIcons || t.appendChild(Q("span", {
        className: "vjs-icon-placeholder"
      }, {
        "aria-hidden": !0
      }));
      this.createControlTextEl(t);
      return t;
    }
    addChild(e, t = {}) {
      var i = this.constructor.name;
      g.warn(`Adding an actionable (user controllable) child to a Button (${i}) is not supported; use a ClickableComponent instead.`);
      return tr.prototype.addChild.call(this, e, t);
    }
    enable() {
      super.enable();
      this.el_.removeAttribute("disabled");
    }
    disable() {
      super.disable();
      this.el_.setAttribute("disabled", "disabled");
    }
    handleKeyDown(e) {
      ts.isEventKey(e, "Space") || ts.isEventKey(e, "Enter") ? e.stopPropagation() : super.handleKeyDown(e);
    }
  }
  tr.registerComponent("Button", iH);
  class iV extends iH {
    constructor(e, t) {
      super(e, t);
      this.mouseused_ = !1;
      this.setIcon("play");
      this.on("mousedown", e => this.handleMouseDown(e));
    }
    buildCSSClass() {
      return "vjs-big-play-button";
    }
    handleClick(e) {
      var t = this.player_.play();
      if (this.mouseused_ && "clientX" in e && "clientY" in e) {
        t_(t);
        this.player_.tech(!0) && this.player_.tech(!0).focus();
      } else {
        var e = this.player_.getChild("controlBar");
        let i = e && e.getChild("playToggle");
        i ? (e = () => i.focus(), ty(t) ? t.then(e, () => { }) : this.setTimeout(e, 1)) : this.player_.tech(!0).focus();
      }
    }
    handleKeyDown(e) {
      this.mouseused_ = !1;
      super.handleKeyDown(e);
    }
    handleMouseDown(e) {
      this.mouseused_ = !0;
    }
  }
  iV.prototype.controlText_ = "Play Video";
  tr.registerComponent("BigPlayButton", iV);
  tr.registerComponent("CloseButton", class extends iH {
    constructor(e, t) {
      super(e, t);
      this.setIcon("cancel");
      this.controlText(t && t.controlText || this.localize("Close"));
    }
    buildCSSClass() {
      return "vjs-close-button " + super.buildCSSClass();
    }
    handleClick(e) {
      this.trigger({
        type: "close",
        bubbles: !1
      });
    }
    handleKeyDown(e) {
      ts.isEventKey(e, "Esc") ? (e.preventDefault(), e.stopPropagation(), this.trigger("click")) : super.handleKeyDown(e);
    }
  });
  class i$ extends iH {
    constructor(e, t = {}) {
      super(e, t);
      t.replay = void 0 === t.replay || t.replay;
      this.setIcon("play");
      this.on(e, "play", e => this.handlePlay(e));
      this.on(e, "pause", e => this.handlePause(e));
      t.replay && this.on(e, "ended", e => this.handleEnded(e));
    }
    buildCSSClass() {
      return "vjs-play-control " + super.buildCSSClass();
    }
    handleClick(e) {
      this.player_.paused() ? t_(this.player_.play()) : this.player_.pause();
    }
    handleSeeked(e) {
      this.removeClass("vjs-ended");
      this.player_.paused() ? this.handlePause(e) : this.handlePlay(e);
    }
    handlePlay(e) {
      this.removeClass("vjs-ended", "vjs-paused");
      this.addClass("vjs-playing");
      this.setIcon("pause");
      this.controlText("Pause");
    }
    handlePause(e) {
      this.removeClass("vjs-playing");
      this.addClass("vjs-paused");
      this.setIcon("play");
      this.controlText("Play");
    }
    handleEnded(e) {
      this.removeClass("vjs-playing");
      this.addClass("vjs-ended");
      this.setIcon("replay");
      this.controlText("Replay");
      this.one(this.player_, "seeked", e => this.handleSeeked(e));
    }
  }
  i$.prototype.controlText_ = "Play";
  tr.registerComponent("PlayToggle", i$);
  class iz extends tr {
    constructor(e, t) {
      super(e, t);
      this.on(e, ["timeupdate", "ended", "seeking"], e => this.update(e));
      this.updateTextNode_();
    }
    createEl() {
      var e = this.buildCSSClass();
      var t = super.createEl("div", {
        className: e + " vjs-time-control vjs-control"
      });
      var i = Q("span", {
        className: "vjs-control-text",
        textContent: this.localize(this.labelText_) + "\xa0"
      }, {
        role: "presentation"
      });
      t.appendChild(i);
      this.contentEl_ = Q("span", {
        className: e + "-display"
      }, {
        role: "presentation"
      });
      t.appendChild(this.contentEl_);
      return t;
    }
    dispose() {
      this.contentEl_ = null;
      this.textNode_ = null;
      super.dispose();
    }
    update(e) {
      (this.player_.options_.enableSmoothSeeking || "seeking" !== e.type) && this.updateContent(e);
    }
    updateTextNode_(e = 0) {
      e = tc(e);
      this.formattedTime_ !== e && (this.formattedTime_ = e, this.requestNamedAnimationFrame("TimeDisplay#updateTextNode_", () => {
        if (this.contentEl_) {
          let e = this.textNode_;
          e && this.contentEl_.firstChild !== e && (e = null, g.warn("TimeDisplay#updateTextnode_: Prevented replacement of text node element since it was no longer a child of this node. Appending a new node instead."));
          this.textNode_ = document.createTextNode(this.formattedTime_);
          this.textNode_ && (e ? this.contentEl_.replaceChild(this.textNode_, e) : this.contentEl_.appendChild(this.textNode_));
        }
      }));
    }
    updateContent(e) { }
  }
  iz.prototype.labelText_ = "Time";
  iz.prototype.controlText_ = "Time";
  tr.registerComponent("TimeDisplay", iz);
  class iW extends iz {
    buildCSSClass() {
      return "vjs-current-time";
    }
    updateContent(e) {
      let t;
      t = this.player_.ended() ? this.player_.duration() : this.player_.scrubbing() ? this.player_.getCache().currentTime : this.player_.currentTime();
      this.updateTextNode_(t);
    }
  }
  iW.prototype.labelText_ = "Current Time";
  iW.prototype.controlText_ = "Current Time";
  tr.registerComponent("CurrentTimeDisplay", iW);
  class iG extends iz {
    constructor(e, t) {
      super(e, t);
      t = e => this.updateContent(e);
      this.on(e, "durationchange", t);
      this.on(e, "loadstart", t);
      this.on(e, "loadedmetadata", t);
    }
    buildCSSClass() {
      return "vjs-duration";
    }
    updateContent(e) {
      var t = this.player_.duration();
      this.updateTextNode_(t);
    }
  }
  iG.prototype.labelText_ = "Duration";
  iG.prototype.controlText_ = "Duration";
  tr.registerComponent("DurationDisplay", iG);
  tr.registerComponent("TimeDivider", class extends tr {
    createEl() {
      var e = super.createEl("div", {
        className: "vjs-time-control vjs-time-divider"
      }, {
        "aria-hidden": !0
      });
      var t = super.createEl("div");
      var i = super.createEl("span", {
        textContent: "/"
      });
      t.appendChild(i);
      e.appendChild(t);
      return e;
    }
  });
  class iX extends iz {
    constructor(e, t) {
      super(e, t);
      this.on(e, "durationchange", e => this.updateContent(e));
    }
    buildCSSClass() {
      return "vjs-remaining-time";
    }
    createEl() {
      var e = super.createEl();
      !1 !== this.options_.displayNegative && e.insertBefore(Q("span", {}, {
        "aria-hidden": !0
      }, "-"), this.contentEl_);
      return e;
    }
    updateContent(e) {
      if ("number" == typeof this.player_.duration()) {
        let e;
        e = this.player_.ended() ? 0 : this.player_.remainingTimeDisplay ? this.player_.remainingTimeDisplay() : this.player_.remainingTime();
        this.updateTextNode_(e);
      }
    }
  }
  iX.prototype.labelText_ = "Remaining Time";
  iX.prototype.controlText_ = "Remaining Time";
  tr.registerComponent("RemainingTimeDisplay", iX);
  tr.registerComponent("LiveDisplay", class extends tr {
    constructor(e, t) {
      super(e, t);
      this.updateShowing();
      this.on(this.player(), "durationchange", e => this.updateShowing(e));
    }
    createEl() {
      var e = super.createEl("div", {
        className: "vjs-live-control vjs-control"
      });
      this.contentEl_ = Q("div", {
        className: "vjs-live-display"
      }, {
        "aria-live": "off"
      });
      this.contentEl_.appendChild(Q("span", {
        className: "vjs-control-text",
        textContent: this.localize("Stream Type") + "\xa0"
      }));
      this.contentEl_.appendChild(document.createTextNode(this.localize("LIVE")));
      e.appendChild(this.contentEl_);
      return e;
    }
    dispose() {
      this.contentEl_ = null;
      super.dispose();
    }
    updateShowing(e) {
      this.player().duration() === 1 / 0 ? this.show() : this.hide();
    }
  });
  class iK extends iH {
    constructor(e, t) {
      super(e, t);
      this.updateLiveEdgeStatus();
      this.player_.liveTracker && (this.updateLiveEdgeStatusHandler_ = e => this.updateLiveEdgeStatus(e), this.on(this.player_.liveTracker, "liveedgechange", this.updateLiveEdgeStatusHandler_));
    }
    createEl() {
      var e = super.createEl("button", {
        className: "vjs-seek-to-live-control vjs-control"
      });
      this.setIcon("circle", e);
      this.textEl_ = Q("span", {
        className: "vjs-seek-to-live-text",
        textContent: this.localize("LIVE")
      }, {
        "aria-hidden": "true"
      });
      e.appendChild(this.textEl_);
      return e;
    }
    updateLiveEdgeStatus() {
      !this.player_.liveTracker || this.player_.liveTracker.atLiveEdge() ? (this.setAttribute("aria-disabled", !0), this.addClass("vjs-at-live-edge"), this.controlText("Seek to live, currently playing live")) : (this.setAttribute("aria-disabled", !1), this.removeClass("vjs-at-live-edge"), this.controlText("Seek to live, currently behind live"));
    }
    handleClick() {
      this.player_.liveTracker.seekToLiveEdge();
    }
    dispose() {
      this.player_.liveTracker && this.off(this.player_.liveTracker, "liveedgechange", this.updateLiveEdgeStatusHandler_);
      this.textEl_ = null;
      super.dispose();
    }
  }
  function iY(e, t, i) {
    return Math.min(i, Math.max(t, isNaN(e = Number(e)) ? t : e));
  }
  iK.prototype.controlText_ = "Seek to live, currently playing live";
  tr.registerComponent("SeekToLive", iK);
  tB = Object.freeze({
    __proto__: null,
    clamp: iY
  });
  class iQ extends tr {
    constructor(e, t) {
      super(e, t);
      this.handleMouseDown_ = e => this.handleMouseDown(e);
      this.handleMouseUp_ = e => this.handleMouseUp(e);
      this.handleKeyDown_ = e => this.handleKeyDown(e);
      this.handleClick_ = e => this.handleClick(e);
      this.handleMouseMove_ = e => this.handleMouseMove(e);
      this.update_ = e => this.update(e);
      this.bar = this.getChild(this.options_.barName);
      this.vertical(!!this.options_.vertical);
      this.enable();
    }
    enabled() {
      return this.enabled_;
    }
    enable() {
      this.enabled() || (this.on("mousedown", this.handleMouseDown_), this.on("touchstart", this.handleMouseDown_), this.on("keydown", this.handleKeyDown_), this.on("click", this.handleClick_), this.on(this.player_, "controlsvisible", this.update), this.playerEvent && this.on(this.player_, this.playerEvent, this.update), this.removeClass("disabled"), this.setAttribute("tabindex", 0), this.enabled_ = !0);
    }
    disable() {
      var e;
      this.enabled() && (e = this.bar.el_.ownerDocument, this.off("mousedown", this.handleMouseDown_), this.off("touchstart", this.handleMouseDown_), this.off("keydown", this.handleKeyDown_), this.off("click", this.handleClick_), this.off(this.player_, "controlsvisible", this.update_), this.off(e, "mousemove", this.handleMouseMove_), this.off(e, "mouseup", this.handleMouseUp_), this.off(e, "touchmove", this.handleMouseMove_), this.off(e, "touchend", this.handleMouseUp_), this.removeAttribute("tabindex"), this.addClass("disabled"), this.playerEvent && this.off(this.player_, this.playerEvent, this.update), this.enabled_ = !1);
    }
    createEl(e, t = {}, i = {}) {
      t.className = t.className + " vjs-slider";
      t = Object.assign({
        tabIndex: 0
      }, t);
      i = Object.assign({
        role: "slider",
        "aria-valuenow": 0,
        "aria-valuemin": 0,
        "aria-valuemax": 100
      }, i);
      return super.createEl(e, t, i);
    }
    handleMouseDown(e) {
      var t = this.bar.el_.ownerDocument;
      "mousedown" === e.type && e.preventDefault();
      "touchstart" !== e.type || O || e.preventDefault();
      eh();
      this.addClass("vjs-sliding");
      this.trigger("slideractive");
      this.on(t, "mousemove", this.handleMouseMove_);
      this.on(t, "mouseup", this.handleMouseUp_);
      this.on(t, "touchmove", this.handleMouseMove_);
      this.on(t, "touchend", this.handleMouseUp_);
      this.handleMouseMove(e, !0);
    }
    handleMouseMove(e) { }
    handleMouseUp(e) {
      var t = this.bar.el_.ownerDocument;
      ed();
      this.removeClass("vjs-sliding");
      this.trigger("sliderinactive");
      this.off(t, "mousemove", this.handleMouseMove_);
      this.off(t, "mouseup", this.handleMouseUp_);
      this.off(t, "touchmove", this.handleMouseMove_);
      this.off(t, "touchend", this.handleMouseUp_);
      this.update();
    }
    update() {
      if (this.el_ && this.bar) {
        let e = this.getProgress();
        e !== this.progress_ && (this.progress_ = e, this.requestNamedAnimationFrame("Slider#update", () => {
          var t = this.vertical() ? "height" : "width";
          this.bar.el().style[t] = (100 * e).toFixed(2) + "%";
        }));
        return e;
      }
    }
    getProgress() {
      return Number(iY(this.getPercent(), 0, 1).toFixed(4));
    }
    calculateDistance(e) {
      e = ep(this.el_, e);
      return this.vertical() ? e.y : e.x;
    }
    handleKeyDown(e) {
      ts.isEventKey(e, "Left") || ts.isEventKey(e, "Down") ? (e.preventDefault(), e.stopPropagation(), this.stepBack()) : ts.isEventKey(e, "Right") || ts.isEventKey(e, "Up") ? (e.preventDefault(), e.stopPropagation(), this.stepForward()) : super.handleKeyDown(e);
    }
    handleClick(e) {
      e.stopPropagation();
      e.preventDefault();
    }
    vertical(e) {
      if (void 0 === e) return this.vertical_ || !1;
      this.vertical_ = !!e;
      this.vertical_ ? this.addClass("vjs-slider-vertical") : this.addClass("vjs-slider-horizontal");
    }
  }
  tr.registerComponent("Slider", iQ);
  let iJ = (e, t) => iY(e / t * 100, 0, 100).toFixed(2) + "%";
  tr.registerComponent("LoadProgressBar", class extends tr {
    constructor(e, t) {
      super(e, t);
      this.partEls_ = [];
      this.on(e, "progress", e => this.update(e));
    }
    createEl() {
      var e = super.createEl("div", {
        className: "vjs-load-progress"
      });
      var t = Q("span", {
        className: "vjs-control-text"
      });
      var i = Q("span", {
        textContent: this.localize("Loaded")
      });
      var s = document.createTextNode(": ");
      this.percentageEl_ = Q("span", {
        className: "vjs-control-text-loaded-percentage",
        textContent: "0%"
      });
      e.appendChild(t);
      t.appendChild(i);
      t.appendChild(s);
      t.appendChild(this.percentageEl_);
      return e;
    }
    dispose() {
      this.partEls_ = null;
      this.percentageEl_ = null;
      super.dispose();
    }
    update(e) {
      this.requestNamedAnimationFrame("LoadProgressBar#update", () => {
        var e = this.player_.liveTracker;
        var t = this.player_.buffered();
        var e = e && e.isLive() ? e.seekableEnd() : this.player_.duration();
        var i = this.player_.bufferedEnd();
        var s = this.partEls_;
        var e = iJ(i, e);
        this.percent_ !== e && (this.el_.style.width = e, J(this.percentageEl_, e), this.percent_ = e);
        for (let e = 0; e < t.length; e++) {
          var r = t.start(e);
          var n = t.end(e);
          let a = s[e];
          a || (a = this.el_.appendChild(Q()), s[e] = a);
          a.dataset.start === r && a.dataset.end === n || (a.dataset.start = r, a.dataset.end = n, a.style.left = iJ(r, i), a.style.width = iJ(n - r, i));
        }
        for (let e = s.length; e > t.length; e--) this.el_.removeChild(s[e - 1]);
        s.length = t.length;
      });
    }
  });
  tr.registerComponent("TimeTooltip", class extends tr {
    constructor(e, t) {
      super(e, t);
      this.update = ez(e$(this, this.update), 30);
    }
    createEl() {
      return super.createEl("div", {
        className: "vjs-time-tooltip"
      }, {
        "aria-hidden": "true"
      });
    }
    update(e, t, i) {
      var s = ec(this.el_);
      var r = eu(this.player_.el());
      var t = e.width * t;
      if (r && s) {
        var n = e.left - r.left + t;
        var t = e.width - t + (r.right - e.right);
        let a = s.width / 2;
        n < a ? a += a - n : t < a && (a = t);
        a < 0 ? a = 0 : a > s.width && (a = s.width);
        a = Math.round(a);
        this.el_.style.right = `-${a}px`;
        this.write(i);
      }
    }
    write(e) {
      J(this.el_, e);
    }
    updateTime(e, t, i, s) {
      this.requestNamedAnimationFrame("TimeTooltip#updateTime", () => {
        let r;
        var n;
        var a;
        var o = this.player_.duration();
        r = this.player_.liveTracker && this.player_.liveTracker.isLive() ? ((a = (n = this.player_.liveTracker.liveWindow()) - t * n) < 1 ? "" : "-") + tc(a, n) : tc(i, o);
        this.update(e, t, r);
        s && s();
      });
    }
  });
  class iZ extends tr {
    constructor(e, t) {
      super(e, t);
      this.setIcon("circle");
      this.update = ez(e$(this, this.update), 30);
    }
    createEl() {
      return super.createEl("div", {
        className: "vjs-play-progress vjs-slider-bar"
      }, {
        "aria-hidden": "true"
      });
    }
    update(e, t) {
      var i;
      var s = this.getChild("timeTooltip");
      s && (i = this.player_.scrubbing() ? this.player_.getCache().currentTime : this.player_.currentTime(), s.updateTime(e, t, i));
    }
  }
  iZ.prototype.options_ = {
    children: []
  };
  $ || I || iZ.prototype.options_.children.push("timeTooltip");
  tr.registerComponent("PlayProgressBar", iZ);
  class i0 extends tr {
    constructor(e, t) {
      super(e, t);
      this.update = ez(e$(this, this.update), 30);
    }
    createEl() {
      return super.createEl("div", {
        className: "vjs-mouse-display"
      });
    }
    update(e, t) {
      var i = t * this.player_.duration();
      this.getChild("timeTooltip").updateTime(e, t, i, () => {
        this.el_.style.left = e.width * t + "px";
      });
    }
  }
  i0.prototype.options_ = {
    children: ["timeTooltip"]
  };
  tr.registerComponent("MouseTimeDisplay", i0);
  class i1 extends iQ {
    constructor(e, t) {
      super(e, t);
      this.setEventHandlers_();
    }
    setEventHandlers_() {
      this.update_ = e$(this, this.update);
      this.update = ez(this.update_, 30);
      this.on(this.player_, ["ended", "durationchange", "timeupdate"], this.update);
      this.player_.liveTracker && this.on(this.player_.liveTracker, "liveedgechange", this.update);
      this.updateInterval = null;
      this.enableIntervalHandler_ = e => this.enableInterval_(e);
      this.disableIntervalHandler_ = e => this.disableInterval_(e);
      this.on(this.player_, ["playing"], this.enableIntervalHandler_);
      this.on(this.player_, ["ended", "pause", "waiting"], this.disableIntervalHandler_);
      "hidden" in document && "visibilityState" in document && this.on(document, "visibilitychange", this.toggleVisibility_);
    }
    toggleVisibility_(e) {
      "hidden" === document.visibilityState ? (this.cancelNamedAnimationFrame("SeekBar#update"), this.cancelNamedAnimationFrame("Slider#update"), this.disableInterval_(e)) : (this.player_.ended() || this.player_.paused() || this.enableInterval_(), this.update());
    }
    enableInterval_() {
      this.updateInterval || (this.updateInterval = this.setInterval(this.update, 30));
    }
    disableInterval_(e) {
      this.player_.liveTracker && this.player_.liveTracker.isLive() && e && "ended" !== e.type || this.updateInterval && (this.clearInterval(this.updateInterval), this.updateInterval = null);
    }
    createEl() {
      return super.createEl("div", {
        className: "vjs-progress-holder"
      }, {
        "aria-label": this.localize("Progress Bar")
      });
    }
    update(e) {
      if ("hidden" !== document.visibilityState) {
        let e = super.update();
        this.requestNamedAnimationFrame("SeekBar#update", () => {
          var t = this.player_.ended() ? this.player_.duration() : this.getCurrentTime_();
          var i = this.player_.liveTracker;
          let s = this.player_.duration();
          i && i.isLive() && (s = this.player_.liveTracker.liveCurrentTime());
          this.percent_ !== e && (this.el_.setAttribute("aria-valuenow", (100 * e).toFixed(2)), this.percent_ = e);
          this.currentTime_ === t && this.duration_ === s || (this.el_.setAttribute("aria-valuetext", this.localize("progress bar timing: currentTime={1} duration={2}", [tc(t, s), tc(s, s)], "{1} of {2}")), this.currentTime_ = t, this.duration_ = s);
          this.bar && this.bar.update(eu(this.el()), this.getProgress());
        });
        return e;
      }
    }
    userSeek_(e) {
      this.player_.liveTracker && this.player_.liveTracker.isLive() && this.player_.liveTracker.nextSeekedFromUser();
      this.player_.currentTime(e);
    }
    getCurrentTime_() {
      return this.player_.scrubbing() ? this.player_.getCache().currentTime : this.player_.currentTime();
    }
    getPercent() {
      let e;
      var t = this.getCurrentTime_();
      var i = this.player_.liveTracker;
      i && i.isLive() ? (e = (t - i.seekableStart()) / i.liveWindow(), i.atLiveEdge() && (e = 1)) : e = t / this.player_.duration();
      return e;
    }
    handleMouseDown(e) {
      ev(e) && (e.stopPropagation(), this.videoWasPlaying = !this.player_.paused(), this.player_.pause(), super.handleMouseDown(e));
    }
    handleMouseMove(e, t = !1) {
      if (ev(e) && !isNaN(this.player_.duration())) {
        let r;
        if (t || this.player_.scrubbing() || this.player_.scrubbing(!0), t = this.calculateDistance(e), (e = this.player_.liveTracker) && e.isLive()) {
          if (.99 <= t) return void e.seekToLiveEdge();
          var i = e.seekableStart();
          var s = e.liveCurrentTime();
          if ((r = (r = (r = i + t * e.liveWindow()) >= s ? s : r) <= i ? i + .1 : r) === 1 / 0) return;
        } else (r = t * this.player_.duration()) === this.player_.duration() && (r -= .1);
        this.userSeek_(r);
        this.player_.options_.enableSmoothSeeking && this.update();
      }
    }
    enable() {
      super.enable();
      var e = this.getChild("mouseTimeDisplay");
      e && e.show();
    }
    disable() {
      super.disable();
      var e = this.getChild("mouseTimeDisplay");
      e && e.hide();
    }
    handleMouseUp(e) {
      super.handleMouseUp(e);
      e && e.stopPropagation();
      this.player_.scrubbing(!1);
      this.player_.trigger({
        type: "timeupdate",
        target: this,
        manuallyTriggered: !0
      });
      this.videoWasPlaying ? t_(this.player_.play()) : this.update_();
    }
    stepForward() {
      this.userSeek_(this.player_.currentTime() + 5);
    }
    stepBack() {
      this.userSeek_(this.player_.currentTime() - 5);
    }
    handleAction(e) {
      this.player_.paused() ? this.player_.play() : this.player_.pause();
    }
    handleKeyDown(e) {
      var t;
      var i = this.player_.liveTracker;
      ts.isEventKey(e, "Space") || ts.isEventKey(e, "Enter") ? (e.preventDefault(), e.stopPropagation(), this.handleAction(e)) : ts.isEventKey(e, "Home") ? (e.preventDefault(), e.stopPropagation(), this.userSeek_(0)) : ts.isEventKey(e, "End") ? (e.preventDefault(), e.stopPropagation(), i && i.isLive() ? this.userSeek_(i.liveCurrentTime()) : this.userSeek_(this.player_.duration())) : /^[0-9]$/.test(ts(e)) ? (e.preventDefault(), e.stopPropagation(), t = 10 * (ts.codes[ts(e)] - ts.codes[0]) / 100, i && i.isLive() ? this.userSeek_(i.seekableStart() + i.liveWindow() * t) : this.userSeek_(this.player_.duration() * t)) : ts.isEventKey(e, "PgDn") ? (e.preventDefault(), e.stopPropagation(), this.userSeek_(this.player_.currentTime() - 60)) : ts.isEventKey(e, "PgUp") ? (e.preventDefault(), e.stopPropagation(), this.userSeek_(this.player_.currentTime() + 60)) : super.handleKeyDown(e);
    }
    dispose() {
      this.disableInterval_();
      this.off(this.player_, ["ended", "durationchange", "timeupdate"], this.update);
      this.player_.liveTracker && this.off(this.player_.liveTracker, "liveedgechange", this.update);
      this.off(this.player_, ["playing"], this.enableIntervalHandler_);
      this.off(this.player_, ["ended", "pause", "waiting"], this.disableIntervalHandler_);
      "hidden" in document && "visibilityState" in document && this.off(document, "visibilitychange", this.toggleVisibility_);
      super.dispose();
    }
  }
  i1.prototype.options_ = {
    children: ["loadProgressBar", "playProgressBar"],
    barName: "playProgressBar"
  };
  $ || I || i1.prototype.options_.children.splice(1, 0, "mouseTimeDisplay");
  tr.registerComponent("SeekBar", i1);
  class i2 extends tr {
    constructor(e, t) {
      super(e, t);
      this.handleMouseMove = ez(e$(this, this.handleMouseMove), 30);
      this.throttledHandleMouseSeek = ez(e$(this, this.handleMouseSeek), 30);
      this.handleMouseUpHandler_ = e => this.handleMouseUp(e);
      this.handleMouseDownHandler_ = e => this.handleMouseDown(e);
      this.enable();
    }
    createEl() {
      return super.createEl("div", {
        className: "vjs-progress-control vjs-control"
      });
    }
    handleMouseMove(e) {
      var t;
      var i;
      var s;
      var r;
      var n = this.getChild("seekBar");
      n && (t = n.getChild("playProgressBar"), i = n.getChild("mouseTimeDisplay"), t || i) && (s = ec(r = n.el()), r = iY(r = ep(r, e).x, 0, 1), i && i.update(s, r), t) && t.update(s, n.getProgress());
    }
    handleMouseSeek(e) {
      var t = this.getChild("seekBar");
      t && t.handleMouseMove(e);
    }
    enabled() {
      return this.enabled_;
    }
    disable() {
      var e;
      this.children().forEach(e => e.disable && e.disable());
      this.enabled() && (this.off(["mousedown", "touchstart"], this.handleMouseDownHandler_), this.off(this.el_, "mousemove", this.handleMouseMove), this.removeListenersAddedOnMousedownAndTouchstart(), this.addClass("disabled"), this.enabled_ = !1, this.player_.scrubbing()) && (e = this.getChild("seekBar"), this.player_.scrubbing(!1), e.videoWasPlaying) && t_(this.player_.play());
    }
    enable() {
      this.children().forEach(e => e.enable && e.enable());
      this.enabled() || (this.on(["mousedown", "touchstart"], this.handleMouseDownHandler_), this.on(this.el_, "mousemove", this.handleMouseMove), this.removeClass("disabled"), this.enabled_ = !0);
    }
    removeListenersAddedOnMousedownAndTouchstart() {
      var e = this.el_.ownerDocument;
      this.off(e, "mousemove", this.throttledHandleMouseSeek);
      this.off(e, "touchmove", this.throttledHandleMouseSeek);
      this.off(e, "mouseup", this.handleMouseUpHandler_);
      this.off(e, "touchend", this.handleMouseUpHandler_);
    }
    handleMouseDown(e) {
      var t = this.el_.ownerDocument;
      var i = this.getChild("seekBar");
      i && i.handleMouseDown(e);
      this.on(t, "mousemove", this.throttledHandleMouseSeek);
      this.on(t, "touchmove", this.throttledHandleMouseSeek);
      this.on(t, "mouseup", this.handleMouseUpHandler_);
      this.on(t, "touchend", this.handleMouseUpHandler_);
    }
    handleMouseUp(e) {
      var t = this.getChild("seekBar");
      t && t.handleMouseUp(e);
      this.removeListenersAddedOnMousedownAndTouchstart();
    }
  }
  i2.prototype.options_ = {
    children: ["seekBar"]
  };
  tr.registerComponent("ProgressControl", i2);
  class i4 extends iH {
    constructor(e, t) {
      super(e, t);
      this.setIcon("picture-in-picture-enter");
      this.on(e, ["enterpictureinpicture", "leavepictureinpicture"], e => this.handlePictureInPictureChange(e));
      this.on(e, ["disablepictureinpicturechanged", "loadedmetadata"], e => this.handlePictureInPictureEnabledChange(e));
      this.on(e, ["loadedmetadata", "audioonlymodechange", "audiopostermodechange"], () => this.handlePictureInPictureAudioModeChange());
      this.disable();
    }
    buildCSSClass() {
      return "vjs-picture-in-picture-control vjs-hidden " + super.buildCSSClass();
    }
    handlePictureInPictureAudioModeChange() {
      "audio" === this.player_.currentType().substring(0, 5) || this.player_.audioPosterMode() || this.player_.audioOnlyMode() ? (this.player_.isInPictureInPicture() && this.player_.exitPictureInPicture(), this.hide()) : this.show();
    }
    handlePictureInPictureEnabledChange() {
      document.pictureInPictureEnabled && !1 === this.player_.disablePictureInPicture() || this.player_.options_.enableDocumentPictureInPicture && "documentPictureInPicture" in window ? this.enable() : this.disable();
    }
    handlePictureInPictureChange(e) {
      this.player_.isInPictureInPicture() ? (this.setIcon("picture-in-picture-exit"), this.controlText("Exit Picture-in-Picture")) : (this.setIcon("picture-in-picture-enter"), this.controlText("Picture-in-Picture"));
      this.handlePictureInPictureEnabledChange();
    }
    handleClick(e) {
      this.player_.isInPictureInPicture() ? this.player_.exitPictureInPicture() : this.player_.requestPictureInPicture();
    }
    show() {
      "function" == typeof document.exitPictureInPicture && super.show();
    }
  }
  i4.prototype.controlText_ = "Picture-in-Picture";
  tr.registerComponent("PictureInPictureToggle", i4);
  class i8 extends iH {
    constructor(e, t) {
      super(e, t);
      this.setIcon("fullscreen-enter");
      this.on(e, "fullscreenchange", e => this.handleFullscreenChange(e));
      !1 === document[e.fsApi_.fullscreenEnabled] && this.disable();
    }
    buildCSSClass() {
      return "vjs-fullscreen-control " + super.buildCSSClass();
    }
    handleFullscreenChange(e) {
      this.player_.isFullscreen() ? (this.controlText("Exit Fullscreen"), this.setIcon("fullscreen-exit")) : (this.controlText("Fullscreen"), this.setIcon("fullscreen-enter"));
    }
    handleClick(e) {
      this.player_.isFullscreen() ? this.player_.exitFullscreen() : this.player_.requestFullscreen();
    }
  }
  i8.prototype.controlText_ = "Fullscreen";
  tr.registerComponent("FullscreenToggle", i8);
  tr.registerComponent("VolumeLevel", class extends tr {
    createEl() {
      var e = super.createEl("div", {
        className: "vjs-volume-level"
      });
      this.setIcon("circle", e);
      e.appendChild(super.createEl("span", {
        className: "vjs-control-text"
      }));
      return e;
    }
  });
  tr.registerComponent("VolumeLevelTooltip", class extends tr {
    constructor(e, t) {
      super(e, t);
      this.update = ez(e$(this, this.update), 30);
    }
    createEl() {
      return super.createEl("div", {
        className: "vjs-volume-tooltip"
      }, {
        "aria-hidden": "true"
      });
    }
    update(e, t, i, s) {
      if (!i) {
        var i = eu(this.el_);
        var r = eu(this.player_.el());
        var t = e.width * t;
        if (!r || !i) return;
        var n = e.left - r.left + t;
        var t = e.width - t + (r.right - e.right);
        let s = i.width / 2;
        n < s ? s += s - n : t < s && (s = t);
        s < 0 ? s = 0 : s > i.width && (s = i.width);
        this.el_.style.right = `-${s}px`;
      }
      this.write(s + "%");
    }
    write(e) {
      J(this.el_, e);
    }
    updateVolume(e, t, i, s, r) {
      this.requestNamedAnimationFrame("VolumeLevelTooltip#updateVolume", () => {
        this.update(e, t, i, s.toFixed(0));
        r && r();
      });
    }
  });
  class i5 extends tr {
    constructor(e, t) {
      super(e, t);
      this.update = ez(e$(this, this.update), 30);
    }
    createEl() {
      return super.createEl("div", {
        className: "vjs-mouse-display"
      });
    }
    update(e, t, i) {
      this.getChild("volumeLevelTooltip").updateVolume(e, t, i, 100 * t, () => {
        i ? this.el_.style.bottom = e.height * t + "px" : this.el_.style.left = e.width * t + "px";
      });
    }
  }
  i5.prototype.options_ = {
    children: ["volumeLevelTooltip"]
  };
  tr.registerComponent("MouseVolumeLevelDisplay", i5);
  class i3 extends iQ {
    constructor(e, t) {
      super(e, t);
      this.on("slideractive", e => this.updateLastVolume_(e));
      this.on(e, "volumechange", e => this.updateARIAAttributes(e));
      e.ready(() => this.updateARIAAttributes());
    }
    createEl() {
      return super.createEl("div", {
        className: "vjs-volume-bar vjs-slider-bar"
      }, {
        "aria-label": this.localize("Volume Level"),
        "aria-live": "polite"
      });
    }
    handleMouseDown(e) {
      ev(e) && super.handleMouseDown(e);
    }
    handleMouseMove(e) {
      var t;
      var i;
      var s;
      var r = this.getChild("mouseVolumeLevelDisplay");
      r && (t = eu(s = this.el()), i = this.vertical(), s = ep(s, e), s = iY(s = i ? s.y : s.x, 0, 1), r.update(t, s, i));
      ev(e) && (this.checkMuted(), this.player_.volume(this.calculateDistance(e)));
    }
    checkMuted() {
      this.player_.muted() && this.player_.muted(!1);
    }
    getPercent() {
      return this.player_.muted() ? 0 : this.player_.volume();
    }
    stepForward() {
      this.checkMuted();
      this.player_.volume(this.player_.volume() + .1);
    }
    stepBack() {
      this.checkMuted();
      this.player_.volume(this.player_.volume() - .1);
    }
    updateARIAAttributes(e) {
      var t = this.player_.muted() ? 0 : this.volumeAsPercentage_();
      this.el_.setAttribute("aria-valuenow", t);
      this.el_.setAttribute("aria-valuetext", t + "%");
    }
    volumeAsPercentage_() {
      return Math.round(100 * this.player_.volume());
    }
    updateLastVolume_() {
      let e = this.player_.volume();
      this.one("sliderinactive", () => {
        0 === this.player_.volume() && this.player_.lastVolume_(e);
      });
    }
  }
  i3.prototype.options_ = {
    children: ["volumeLevel"],
    barName: "volumeLevel"
  };
  $ || I || i3.prototype.options_.children.splice(0, 0, "mouseVolumeLevelDisplay");
  i3.prototype.playerEvent = "volumechange";
  tr.registerComponent("VolumeBar", i3);
  class i6 extends tr {
    constructor(e, t = {}) {
      var i;
      t.vertical = t.vertical || !1;
      (void 0 === t.volumeBar || T(t.volumeBar)) && (t.volumeBar = t.volumeBar || {}, t.volumeBar.vertical = t.vertical);
      super(e, t);
      i = this;
      e.tech_ && !e.tech_.featuresVolumeControl && i.addClass("vjs-hidden");
      i.on(e, "loadstart", function () {
        e.tech_.featuresVolumeControl ? i.removeClass("vjs-hidden") : i.addClass("vjs-hidden");
      });
      this.throttledHandleMouseMove = ez(e$(this, this.handleMouseMove), 30);
      this.handleMouseUpHandler_ = e => this.handleMouseUp(e);
      this.on("mousedown", e => this.handleMouseDown(e));
      this.on("touchstart", e => this.handleMouseDown(e));
      this.on("mousemove", e => this.handleMouseMove(e));
      this.on(this.volumeBar, ["focus", "slideractive"], () => {
        this.volumeBar.addClass("vjs-slider-active");
        this.addClass("vjs-slider-active");
        this.trigger("slideractive");
      });
      this.on(this.volumeBar, ["blur", "sliderinactive"], () => {
        this.volumeBar.removeClass("vjs-slider-active");
        this.removeClass("vjs-slider-active");
        this.trigger("sliderinactive");
      });
    }
    createEl() {
      let e = "vjs-volume-horizontal";
      this.options_.vertical && (e = "vjs-volume-vertical");
      return super.createEl("div", {
        className: "vjs-volume-control vjs-control " + e
      });
    }
    handleMouseDown(e) {
      var t = this.el_.ownerDocument;
      this.on(t, "mousemove", this.throttledHandleMouseMove);
      this.on(t, "touchmove", this.throttledHandleMouseMove);
      this.on(t, "mouseup", this.handleMouseUpHandler_);
      this.on(t, "touchend", this.handleMouseUpHandler_);
    }
    handleMouseUp(e) {
      var t = this.el_.ownerDocument;
      this.off(t, "mousemove", this.throttledHandleMouseMove);
      this.off(t, "touchmove", this.throttledHandleMouseMove);
      this.off(t, "mouseup", this.handleMouseUpHandler_);
      this.off(t, "touchend", this.handleMouseUpHandler_);
    }
    handleMouseMove(e) {
      this.volumeBar.handleMouseMove(e);
    }
  }
  i6.prototype.options_ = {
    children: ["volumeBar"]
  };
  tr.registerComponent("VolumeControl", i6);
  class i7 extends iH {
    constructor(e, t) {
      var i;
      super(e, t);
      i = this;
      e.tech_ && !e.tech_.featuresMuteControl && i.addClass("vjs-hidden");
      i.on(e, "loadstart", function () {
        e.tech_.featuresMuteControl ? i.removeClass("vjs-hidden") : i.addClass("vjs-hidden");
      });
      this.on(e, ["loadstart", "volumechange"], e => this.update(e));
    }
    buildCSSClass() {
      return "vjs-mute-control " + super.buildCSSClass();
    }
    handleClick(e) {
      var t = this.player_.volume();
      var i = this.player_.lastVolume_();
      0 === t ? (this.player_.volume(i < .1 ? .1 : i), this.player_.muted(!1)) : this.player_.muted(!this.player_.muted());
    }
    update(e) {
      this.updateIcon_();
      this.updateControlText_();
    }
    updateIcon_() {
      var e = this.player_.volume();
      let t = 3;
      this.setIcon("volume-high");
      $ && this.player_.tech_ && this.player_.tech_.el_ && this.player_.muted(this.player_.tech_.el_.muted);
      0 === e || this.player_.muted() ? (this.setIcon("volume-mute"), t = 0) : e < .33 ? (this.setIcon("volume-low"), t = 1) : e < .67 && (this.setIcon("volume-medium"), t = 2);
      ei(this.el_, [0, 1, 2, 3].reduce((e, t) => e + `${t ? " " : ""}vjs-vol-` + t, ""));
      et(this.el_, "vjs-vol-" + t);
    }
    updateControlText_() {
      var e = this.player_.muted() || 0 === this.player_.volume() ? "Unmute" : "Mute";
      this.controlText() !== e && this.controlText(e);
    }
  }
  i7.prototype.controlText_ = "Mute";
  tr.registerComponent("MuteToggle", i7);
  class i9 extends tr {
    constructor(e, t = {}) {
      void 0 !== t.inline ? t.inline = t.inline : t.inline = !0;
      (void 0 === t.volumeControl || T(t.volumeControl)) && (t.volumeControl = t.volumeControl || {}, t.volumeControl.vertical = !t.inline);
      super(e, t);
      this.handleKeyPressHandler_ = e => this.handleKeyPress(e);
      this.on(e, ["loadstart"], e => this.volumePanelState_(e));
      this.on(this.muteToggle, "keyup", e => this.handleKeyPress(e));
      this.on(this.volumeControl, "keyup", e => this.handleVolumeControlKeyUp(e));
      this.on("keydown", e => this.handleKeyPress(e));
      this.on("mouseover", e => this.handleMouseOver(e));
      this.on("mouseout", e => this.handleMouseOut(e));
      this.on(this.volumeControl, ["slideractive"], this.sliderActive_);
      this.on(this.volumeControl, ["sliderinactive"], this.sliderInactive_);
    }
    sliderActive_() {
      this.addClass("vjs-slider-active");
    }
    sliderInactive_() {
      this.removeClass("vjs-slider-active");
    }
    volumePanelState_() {
      this.volumeControl.hasClass("vjs-hidden") && this.muteToggle.hasClass("vjs-hidden") && this.addClass("vjs-hidden");
      this.volumeControl.hasClass("vjs-hidden") && !this.muteToggle.hasClass("vjs-hidden") && this.addClass("vjs-mute-toggle-only");
    }
    createEl() {
      let e = "vjs-volume-panel-horizontal";
      this.options_.inline || (e = "vjs-volume-panel-vertical");
      return super.createEl("div", {
        className: "vjs-volume-panel vjs-control " + e
      });
    }
    dispose() {
      this.handleMouseOut();
      super.dispose();
    }
    handleVolumeControlKeyUp(e) {
      ts.isEventKey(e, "Esc") && this.muteToggle.focus();
    }
    handleMouseOver(e) {
      this.addClass("vjs-hover");
      eB(document, "keyup", this.handleKeyPressHandler_);
    }
    handleMouseOut(e) {
      this.removeClass("vjs-hover");
      eF(document, "keyup", this.handleKeyPressHandler_);
    }
    handleKeyPress(e) {
      ts.isEventKey(e, "Esc") && this.handleMouseOut();
    }
  }
  i9.prototype.options_ = {
    children: ["muteToggle", "volumeControl"]
  };
  tr.registerComponent("VolumePanel", i9);
  class se extends iH {
    constructor(e, t) {
      super(e, t);
      this.validOptions = [5, 10, 30];
      this.skipTime = this.getSkipForwardTime();
      this.skipTime && this.validOptions.includes(this.skipTime) ? (this.setIcon("forward-" + this.skipTime), this.controlText(this.localize("Skip forward {1} seconds", [this.skipTime])), this.show()) : this.hide();
    }
    getSkipForwardTime() {
      var e = this.options_.playerOptions;
      return e.controlBar && e.controlBar.skipButtons && e.controlBar.skipButtons.forward;
    }
    buildCSSClass() {
      return `vjs-skip-forward-${this.getSkipForwardTime()} ` + super.buildCSSClass();
    }
    handleClick(e) {
      if (!isNaN(this.player_.duration())) {
        let e;
        var t = this.player_.currentTime();
        var i = this.player_.liveTracker;
        var i = i && i.isLive() ? i.seekableEnd() : this.player_.duration();
        e = t + this.skipTime <= i ? t + this.skipTime : i;
        this.player_.currentTime(e);
      }
    }
    handleLanguagechange() {
      this.controlText(this.localize("Skip forward {1} seconds", [this.skipTime]));
    }
  }
  se.prototype.controlText_ = "Skip Forward";
  tr.registerComponent("SkipForward", se);
  class st extends iH {
    constructor(e, t) {
      super(e, t);
      this.validOptions = [5, 10, 30];
      this.skipTime = this.getSkipBackwardTime();
      this.skipTime && this.validOptions.includes(this.skipTime) ? (this.setIcon("replay-" + this.skipTime), this.controlText(this.localize("Skip backward {1} seconds", [this.skipTime])), this.show()) : this.hide();
    }
    getSkipBackwardTime() {
      var e = this.options_.playerOptions;
      return e.controlBar && e.controlBar.skipButtons && e.controlBar.skipButtons.backward;
    }
    buildCSSClass() {
      return `vjs-skip-backward-${this.getSkipBackwardTime()} ` + super.buildCSSClass();
    }
    handleClick(e) {
      let t;
      var i = this.player_.currentTime();
      var s = this.player_.liveTracker;
      var s = s && s.isLive() && s.seekableStart();
      t = s && i - this.skipTime <= s ? s : i >= this.skipTime ? i - this.skipTime : 0;
      this.player_.currentTime(t);
    }
    handleLanguagechange() {
      this.controlText(this.localize("Skip backward {1} seconds", [this.skipTime]));
    }
  }
  st.prototype.controlText_ = "Skip Backward";
  tr.registerComponent("SkipBackward", st);
  class si extends tr {
    constructor(e, t) {
      super(e, t);
      t && (this.menuButton_ = t.menuButton);
      this.focusedChild_ = -1;
      this.on("keydown", e => this.handleKeyDown(e));
      this.boundHandleBlur_ = e => this.handleBlur(e);
      this.boundHandleTapClick_ = e => this.handleTapClick(e);
    }
    addEventListenerForItem(e) {
      e instanceof tr && (this.on(e, "blur", this.boundHandleBlur_), this.on(e, ["tap", "click"], this.boundHandleTapClick_));
    }
    removeEventListenerForItem(e) {
      e instanceof tr && (this.off(e, "blur", this.boundHandleBlur_), this.off(e, ["tap", "click"], this.boundHandleTapClick_));
    }
    removeChild(e) {
      "string" == typeof e && (e = this.getChild(e));
      this.removeEventListenerForItem(e);
      super.removeChild(e);
    }
    addItem(e) {
      (e = this.addChild(e)) && this.addEventListenerForItem(e);
    }
    createEl() {
      var e = this.options_.contentElType || "ul";
      this.contentEl_ = Q(e, {
        className: "vjs-menu-content"
      });
      this.contentEl_.setAttribute("role", "menu");
      var e = super.createEl("div", {
        append: this.contentEl_,
        className: "vjs-menu"
      });
      e.appendChild(this.contentEl_);
      eB(e, "click", function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
      });
      return e;
    }
    dispose() {
      this.contentEl_ = null;
      this.boundHandleBlur_ = null;
      this.boundHandleTapClick_ = null;
      super.dispose();
    }
    handleBlur(e) {
      let t = e.relatedTarget || document.activeElement;
      this.children().some(e => e.el() === t) || (e = this.menuButton_) && e.buttonPressed_ && t !== e.el().firstChild && e.unpressButton();
    }
    handleTapClick(e) {
      var t;
      this.menuButton_ && (this.menuButton_.unpressButton(), Array.isArray(t = this.children())) && (t = t.filter(t => t.el() === e.target)[0]) && "CaptionSettingsMenuItem" !== t.name() && this.menuButton_.focus();
    }
    handleKeyDown(e) {
      ts.isEventKey(e, "Left") || ts.isEventKey(e, "Down") ? (e.preventDefault(), e.stopPropagation(), this.stepForward()) : (ts.isEventKey(e, "Right") || ts.isEventKey(e, "Up")) && (e.preventDefault(), e.stopPropagation(), this.stepBack());
    }
    stepForward() {
      let e = 0;
      void 0 !== this.focusedChild_ && (e = this.focusedChild_ + 1);
      this.focus(e);
    }
    stepBack() {
      let e = 0;
      void 0 !== this.focusedChild_ && (e = this.focusedChild_ - 1);
      this.focus(e);
    }
    focus(e = 0) {
      var t = this.children().slice();
      t.length && t[0].hasClass("vjs-menu-title") && t.shift();
      0 < t.length && (e < 0 ? e = 0 : e >= t.length && (e = t.length - 1), t[this.focusedChild_ = e].el_.focus());
    }
  }
  tr.registerComponent("Menu", si);
  class ss extends tr {
    constructor(e, t = {}) {
      super(e, t);
      this.menuButton_ = new iH(e, t);
      this.menuButton_.controlText(this.controlText_);
      this.menuButton_.el_.setAttribute("aria-haspopup", "true");
      e = iH.prototype.buildCSSClass();
      this.menuButton_.el_.className = this.buildCSSClass() + " " + e;
      this.menuButton_.removeClass("vjs-control");
      this.addChild(this.menuButton_);
      this.update();
      this.enabled_ = !0;
      t = e => this.handleClick(e);
      this.handleMenuKeyUp_ = e => this.handleMenuKeyUp(e);
      this.on(this.menuButton_, "tap", t);
      this.on(this.menuButton_, "click", t);
      this.on(this.menuButton_, "keydown", e => this.handleKeyDown(e));
      this.on(this.menuButton_, "mouseenter", () => {
        this.addClass("vjs-hover");
        this.menu.show();
        eB(document, "keyup", this.handleMenuKeyUp_);
      });
      this.on("mouseleave", e => this.handleMouseLeave(e));
      this.on("keydown", e => this.handleSubmenuKeyDown(e));
    }
    update() {
      var e = this.createMenu();
      this.menu && (this.menu.dispose(), this.removeChild(this.menu));
      this.menu = e;
      this.addChild(e);
      this.buttonPressed_ = !1;
      this.menuButton_.el_.setAttribute("aria-expanded", "false");
      this.items && this.items.length <= this.hideThreshold_ ? (this.hide(), this.menu.contentEl_.removeAttribute("role")) : (this.show(), this.menu.contentEl_.setAttribute("role", "menu"));
    }
    createMenu() {
      var e;
      var t = new si(this.player_, {
        menuButton: this
      });
      if (this.hideThreshold_ = 0, this.options_.title && (e = Q("li", {
        className: "vjs-menu-title",
        textContent: e7(this.options_.title),
        tabIndex: -1
      }), e = new tr(this.player_, {
        el: e
      }), t.addItem(e)), this.items = this.createItems(), this.items) for (let e = 0; e < this.items.length; e++) t.addItem(this.items[e]);
      return t;
    }
    createItems() { }
    createEl() {
      return super.createEl("div", {
        className: this.buildWrapperCSSClass()
      }, {});
    }
    setIcon(e) {
      super.setIcon(e, this.menuButton_.el_);
    }
    buildWrapperCSSClass() {
      let e = "vjs-menu-button";
      !0 === this.options_.inline ? e += "-inline" : e += "-popup";
      var t = iH.prototype.buildCSSClass();
      return `vjs-menu-button ${e} ${t} ` + super.buildCSSClass();
    }
    buildCSSClass() {
      let e = "vjs-menu-button";
      !0 === this.options_.inline ? e += "-inline" : e += "-popup";
      return `vjs-menu-button ${e} ` + super.buildCSSClass();
    }
    controlText(e, t = this.menuButton_.el()) {
      return this.menuButton_.controlText(e, t);
    }
    dispose() {
      this.handleMouseLeave();
      super.dispose();
    }
    handleClick(e) {
      this.buttonPressed_ ? this.unpressButton() : this.pressButton();
    }
    handleMouseLeave(e) {
      this.removeClass("vjs-hover");
      eF(document, "keyup", this.handleMenuKeyUp_);
    }
    focus() {
      this.menuButton_.focus();
    }
    blur() {
      this.menuButton_.blur();
    }
    handleKeyDown(e) {
      ts.isEventKey(e, "Esc") || ts.isEventKey(e, "Tab") ? (this.buttonPressed_ && this.unpressButton(), ts.isEventKey(e, "Tab") || (e.preventDefault(), this.menuButton_.focus())) : (ts.isEventKey(e, "Up") || ts.isEventKey(e, "Down")) && !this.buttonPressed_ && (e.preventDefault(), this.pressButton());
    }
    handleMenuKeyUp(e) {
      (ts.isEventKey(e, "Esc") || ts.isEventKey(e, "Tab")) && this.removeClass("vjs-hover");
    }
    handleSubmenuKeyPress(e) {
      this.handleSubmenuKeyDown(e);
    }
    handleSubmenuKeyDown(e) {
      (ts.isEventKey(e, "Esc") || ts.isEventKey(e, "Tab")) && (this.buttonPressed_ && this.unpressButton(), ts.isEventKey(e, "Tab") || (e.preventDefault(), this.menuButton_.focus()));
    }
    pressButton() {
      this.enabled_ && (this.buttonPressed_ = !0, this.menu.show(), this.menu.lockShowing(), this.menuButton_.el_.setAttribute("aria-expanded", "true"), $ && K() || this.menu.focus());
    }
    unpressButton() {
      this.enabled_ && (this.buttonPressed_ = !1, this.menu.unlockShowing(), this.menu.hide(), this.menuButton_.el_.setAttribute("aria-expanded", "false"));
    }
    disable() {
      this.unpressButton();
      this.enabled_ = !1;
      this.addClass("vjs-disabled");
      this.menuButton_.disable();
    }
    enable() {
      this.enabled_ = !0;
      this.removeClass("vjs-disabled");
      this.menuButton_.enable();
    }
  }
  tr.registerComponent("MenuButton", ss);
  class sr extends ss {
    constructor(e, t) {
      let i = t.tracks;
      if (super(e, t), this.items.length <= 1 && this.hide(), i) {
        let e = e$(this, this.update);
        i.addEventListener("removetrack", e);
        i.addEventListener("addtrack", e);
        i.addEventListener("labelchange", e);
        this.player_.on("ready", e);
        this.player_.on("dispose", function () {
          i.removeEventListener("removetrack", e);
          i.removeEventListener("addtrack", e);
          i.removeEventListener("labelchange", e);
        });
      }
    }
  }
  tr.registerComponent("TrackButton", sr);
  let sn = ["Tab", "Esc", "Up", "Down", "Right", "Left"];
  class sa extends iU {
    constructor(e, t) {
      super(e, t);
      this.selectable = t.selectable;
      this.isSelected_ = t.selected || !1;
      this.multiSelectable = t.multiSelectable;
      this.selected(this.isSelected_);
      this.selectable ? this.multiSelectable ? this.el_.setAttribute("role", "menuitemcheckbox") : this.el_.setAttribute("role", "menuitemradio") : this.el_.setAttribute("role", "menuitem");
    }
    createEl(e, t, i) {
      this.nonIconControl = !0;
      t = super.createEl("li", Object.assign({
        className: "vjs-menu-item",
        tabIndex: -1
      }, t), i);
      i = Q("span", {
        className: "vjs-menu-item-text",
        textContent: this.localize(this.options_.label)
      });
      this.player_.options_.experimentalSvgIcons ? t.appendChild(i) : t.replaceChild(i, t.querySelector(".vjs-icon-placeholder"));
      return t;
    }
    handleKeyDown(e) {
      sn.some(t => ts.isEventKey(e, t)) || super.handleKeyDown(e);
    }
    handleClick(e) {
      this.selected(!0);
    }
    selected(e) {
      this.selectable && (e ? (this.addClass("vjs-selected"), this.el_.setAttribute("aria-checked", "true"), this.controlText(", selected"), this.isSelected_ = !0) : (this.removeClass("vjs-selected"), this.el_.setAttribute("aria-checked", "false"), this.controlText(""), this.isSelected_ = !1));
    }
  }
  tr.registerComponent("MenuItem", sa);
  class so extends sa {
    constructor(e, t) {
      var i = t.track;
      let s = e.textTracks();
      t.label = i.label || i.language || "Unknown";
      t.selected = "showing" === i.mode;
      super(e, t);
      this.track = i;
      this.kinds = (t.kinds || [t.kind || this.track.kind]).filter(Boolean);
      let r = (...e) => {
        this.handleTracksChange.apply(this, e);
      };
      let n = (...e) => {
        this.handleSelectedLanguageChange.apply(this, e);
      };
      if (e.on(["loadstart", "texttrackchange"], r), s.addEventListener("change", r), s.addEventListener("selectedlanguagechange", n), this.on("dispose", function () {
        e.off(["loadstart", "texttrackchange"], r);
        s.removeEventListener("change", r);
        s.removeEventListener("selectedlanguagechange", n);
      }), void 0 === s.onchange) {
        let e;
        this.on(["tap", "click"], function () {
          if ("object" != typeof window.Event) try {
            e = new window.Event("change");
          } catch (e) { }
          e || (e = document.createEvent("Event")).initEvent("change", !0, !0);
          s.dispatchEvent(e);
        });
      }
      this.handleTracksChange();
    }
    handleClick(e) {
      var t = this.track;
      var i = this.player_.textTracks();
      if (super.handleClick(e), i) for (let e = 0; e < i.length; e++) {
        var s = i[e];
        -1 !== this.kinds.indexOf(s.kind) && (s === t ? "showing" !== s.mode && (s.mode = "showing") : "disabled" !== s.mode && (s.mode = "disabled"));
      }
    }
    handleTracksChange(e) {
      var t = "showing" === this.track.mode;
      t !== this.isSelected_ && this.selected(t);
    }
    handleSelectedLanguageChange(e) {
      var t;
      "showing" !== this.track.mode || (t = this.player_.cache_.selectedLanguage) && t.enabled && t.language === this.track.language && t.kind !== this.track.kind || (this.player_.cache_.selectedLanguage = {
        enabled: !0,
        language: this.track.language,
        kind: this.track.kind
      });
    }
    dispose() {
      this.track = null;
      super.dispose();
    }
  }
  tr.registerComponent("TextTrackMenuItem", so);
  class sl extends so {
    constructor(e, t) {
      t.track = {
        player: e,
        kind: t.kind,
        kinds: t.kinds,
        default: !1,
        mode: "disabled"
      };
      t.kinds || (t.kinds = [t.kind]);
      t.label ? t.track.label = t.label : t.track.label = t.kinds.join(" and ") + " off";
      t.selectable = !0;
      t.multiSelectable = !1;
      super(e, t);
    }
    handleTracksChange(e) {
      var t = this.player().textTracks();
      let i = !0;
      for (function () {
        let e = 0;
        let r = t.length;
      }(); e < r; e++) {
        var s = t[e];
        if (-1 < this.options_.kinds.indexOf(s.kind) && "showing" === s.mode) {
          i = !1;
          break;
        }
      }
      i !== this.isSelected_ && this.selected(i);
    }
    handleSelectedLanguageChange(e) {
      var t = this.player().textTracks();
      let i = !0;
      for (function () {
        let e = 0;
        let r = t.length;
      }(); e < r; e++) {
        var s = t[e];
        if (-1 < ["captions", "descriptions", "subtitles"].indexOf(s.kind) && "showing" === s.mode) {
          i = !1;
          break;
        }
      }
      i && (this.player_.cache_.selectedLanguage = {
        enabled: !1
      });
    }
    handleLanguagechange() {
      this.$(".vjs-menu-item-text").textContent = this.player_.localize(this.options_.label);
      super.handleLanguagechange();
    }
  }
  tr.registerComponent("OffTextTrackMenuItem", sl);
  class sh extends sr {
    constructor(e, t = {}) {
      t.tracks = e.textTracks();
      super(e, t);
    }
    createItems(e = [], t = so) {
      let i;
      this.label_ && (i = this.label_ + " off");
      e.push(new sl(this.player_, {
        kinds: this.kinds_,
        kind: this.kind_,
        label: i
      }));
      this.hideThreshold_ += 1;
      var s = this.player_.textTracks();
      Array.isArray(this.kinds_) || (this.kinds_ = [this.kind_]);
      for (let i = 0; i < s.length; i++) {
        var r;
        var n = s[i];
        -1 < this.kinds_.indexOf(n.kind) && ((r = new t(this.player_, {
          track: n,
          kinds: this.kinds_,
          kind: this.kind_,
          selectable: !0,
          multiSelectable: !1
        })).addClass(`vjs-${n.kind}-menu-item`), e.push(r));
      }
      return e;
    }
  }
  tr.registerComponent("TextTrackButton", sh);
  class sd extends sa {
    constructor(e, t) {
      var i = t.track;
      var s = t.cue;
      var r = e.currentTime();
      t.selectable = !0;
      t.multiSelectable = !1;
      t.label = s.text;
      t.selected = s.startTime <= r && r < s.endTime;
      super(e, t);
      this.track = i;
      this.cue = s;
    }
    handleClick(e) {
      super.handleClick();
      this.player_.currentTime(this.cue.startTime);
    }
  }
  tr.registerComponent("ChaptersTrackMenuItem", sd);
  class su extends sh {
    constructor(e, t, i) {
      super(e, t, i);
      this.setIcon("chapters");
      this.selectCurrentItem_ = () => {
        this.items.forEach(e => {
          e.selected(this.track_.activeCues[0] === e.cue);
        });
      };
    }
    buildCSSClass() {
      return "vjs-chapters-button " + super.buildCSSClass();
    }
    buildWrapperCSSClass() {
      return "vjs-chapters-button " + super.buildWrapperCSSClass();
    }
    update(e) {
      e && e.track && "chapters" !== e.track.kind || ((e = this.findChaptersTrack()) !== this.track_ ? (this.setTrack(e), super.update()) : (!this.items || e && e.cues && e.cues.length !== this.items.length) && super.update());
    }
    setTrack(e) {
      var t;
      this.track_ !== e && (this.updateHandler_ || (this.updateHandler_ = this.update.bind(this)), this.track_ && ((t = this.player_.remoteTextTrackEls().getTrackElementByTrack_(this.track_)) && t.removeEventListener("load", this.updateHandler_), this.track_.removeEventListener("cuechange", this.selectCurrentItem_), this.track_ = null), this.track_ = e, this.track_) && (this.track_.mode = "hidden", (t = this.player_.remoteTextTrackEls().getTrackElementByTrack_(this.track_)) && t.addEventListener("load", this.updateHandler_), this.track_.addEventListener("cuechange", this.selectCurrentItem_));
    }
    findChaptersTrack() {
      var e = this.player_.textTracks() || [];
      for (let i = e.length - 1; 0 <= i; i--) {
        var t = e[i];
        if (t.kind === this.kind_) return t;
      }
    }
    getMenuCaption() {
      return this.track_ && this.track_.label ? this.track_.label : this.localize(e7(this.kind_));
    }
    createMenu() {
      this.options_.title = this.getMenuCaption();
      return super.createMenu();
    }
    createItems() {
      var e = [];
      if (this.track_) {
        var t = this.track_.cues;
        if (t) for (function () {
          let s = 0;
          let r = t.length;
        }(); s < r; s++) {
          var i = t[s];
          var i = new sd(this.player_, {
            track: this.track_,
            cue: i
          });
          e.push(i);
        }
      }
      return e;
    }
  }
  su.prototype.kind_ = "chapters";
  su.prototype.controlText_ = "Chapters";
  tr.registerComponent("ChaptersButton", su);
  class sc extends sh {
    constructor(e, t, i) {
      super(e, t, i);
      this.setIcon("audio-description");
      let s = e.textTracks();
      let r = e$(this, this.handleTracksChange);
      s.addEventListener("change", r);
      this.on("dispose", function () {
        s.removeEventListener("change", r);
      });
    }
    handleTracksChange(e) {
      var t = this.player().textTracks();
      let i = !1;
      for (function () {
        let e = 0;
        let r = t.length;
      }(); e < r; e++) {
        var s = t[e];
        if (s.kind !== this.kind_ && "showing" === s.mode) {
          i = !0;
          break;
        }
      }
      i ? this.disable() : this.enable();
    }
    buildCSSClass() {
      return "vjs-descriptions-button " + super.buildCSSClass();
    }
    buildWrapperCSSClass() {
      return "vjs-descriptions-button " + super.buildWrapperCSSClass();
    }
  }
  sc.prototype.kind_ = "descriptions";
  sc.prototype.controlText_ = "Descriptions";
  tr.registerComponent("DescriptionsButton", sc);
  class sp extends sh {
    constructor(e, t, i) {
      super(e, t, i);
      this.setIcon("subtitles");
    }
    buildCSSClass() {
      return "vjs-subtitles-button " + super.buildCSSClass();
    }
    buildWrapperCSSClass() {
      return "vjs-subtitles-button " + super.buildWrapperCSSClass();
    }
  }
  sp.prototype.kind_ = "subtitles";
  sp.prototype.controlText_ = "Subtitles";
  tr.registerComponent("SubtitlesButton", sp);
  class sm extends so {
    constructor(e, t) {
      t.track = {
        player: e,
        kind: t.kind,
        label: t.kind + " settings",
        selectable: !1,
        default: !1,
        mode: "disabled"
      };
      t.selectable = !1;
      t.name = "CaptionSettingsMenuItem";
      super(e, t);
      this.addClass("vjs-texttrack-settings");
      this.controlText(", opens " + t.kind + " settings dialog");
    }
    handleClick(e) {
      this.player().getChild("textTrackSettings").open();
    }
    handleLanguagechange() {
      this.$(".vjs-menu-item-text").textContent = this.player_.localize(this.options_.kind + " settings");
      super.handleLanguagechange();
    }
  }
  tr.registerComponent("CaptionSettingsMenuItem", sm);
  class sg extends sh {
    constructor(e, t, i) {
      super(e, t, i);
      this.setIcon("captions");
    }
    buildCSSClass() {
      return "vjs-captions-button " + super.buildCSSClass();
    }
    buildWrapperCSSClass() {
      return "vjs-captions-button " + super.buildWrapperCSSClass();
    }
    createItems() {
      var e = [];
      this.player().tech_ && this.player().tech_.featuresNativeTextTracks || !this.player().getChild("textTrackSettings") || (e.push(new sm(this.player_, {
        kind: this.kind_
      })), this.hideThreshold_ += 1);
      return super.createItems(e);
    }
  }
  sg.prototype.kind_ = "captions";
  sg.prototype.controlText_ = "Captions";
  tr.registerComponent("CaptionsButton", sg);
  class sf extends so {
    createEl(e, t, i) {
      t = (e = super.createEl(e, t, i)).querySelector(".vjs-menu-item-text");
      "captions" === this.options_.track.kind && (this.player_.options_.experimentalSvgIcons ? this.setIcon("captions", e) : t.appendChild(Q("span", {
        className: "vjs-icon-placeholder"
      }, {
        "aria-hidden": !0
      })), t.appendChild(Q("span", {
        className: "vjs-control-text",
        textContent: " " + this.localize("Captions")
      })));
      return e;
    }
  }
  tr.registerComponent("SubsCapsMenuItem", sf);
  class sy extends sh {
    constructor(e, t = {}) {
      super(e, t);
      this.label_ = "subtitles";
      this.setIcon("subtitles");
      -1 < ["en", "en-us", "en-ca", "fr-ca"].indexOf(this.player_.language_) && (this.label_ = "captions", this.setIcon("captions"));
      this.menuButton_.controlText(e7(this.label_));
    }
    buildCSSClass() {
      return "vjs-subs-caps-button " + super.buildCSSClass();
    }
    buildWrapperCSSClass() {
      return "vjs-subs-caps-button " + super.buildWrapperCSSClass();
    }
    createItems() {
      let e = [];
      this.player().tech_ && this.player().tech_.featuresNativeTextTracks || !this.player().getChild("textTrackSettings") || (e.push(new sm(this.player_, {
        kind: this.label_
      })), this.hideThreshold_ += 1);
      return e = super.createItems(e, sf);
    }
  }
  sy.prototype.kinds_ = ["captions", "subtitles"];
  sy.prototype.controlText_ = "Subtitles";
  tr.registerComponent("SubsCapsButton", sy);
  class s_ extends sa {
    constructor(e, t) {
      var i = t.track;
      let s = e.audioTracks();
      t.label = i.label || i.language || "Unknown";
      t.selected = i.enabled;
      super(e, t);
      this.track = i;
      this.addClass(`vjs-${i.kind}-menu-item`);
      let r = (...e) => {
        this.handleTracksChange.apply(this, e);
      };
      s.addEventListener("change", r);
      this.on("dispose", () => {
        s.removeEventListener("change", r);
      });
    }
    createEl(e, t, i) {
      t = (e = super.createEl(e, t, i)).querySelector(".vjs-menu-item-text");
      0 <= ["main-desc", "description"].indexOf(this.options_.track.kind) && (t.appendChild(Q("span", {
        className: "vjs-icon-placeholder"
      }, {
        "aria-hidden": !0
      })), t.appendChild(Q("span", {
        className: "vjs-control-text",
        textContent: " " + this.localize("Descriptions")
      })));
      return e;
    }
    handleClick(e) {
      if (super.handleClick(e), this.track.enabled = !0, this.player_.tech_.featuresNativeAudioTracks) {
        var t = this.player_.audioTracks();
        for (let e = 0; e < t.length; e++) {
          var i = t[e];
          i !== this.track && (i.enabled = i === this.track);
        }
      }
    }
    handleTracksChange(e) {
      this.selected(this.track.enabled);
    }
  }
  tr.registerComponent("AudioTrackMenuItem", s_);
  class sv extends sr {
    constructor(e, t = {}) {
      t.tracks = e.audioTracks();
      super(e, t);
      this.setIcon("audio");
    }
    buildCSSClass() {
      return "vjs-audio-button " + super.buildCSSClass();
    }
    buildWrapperCSSClass() {
      return "vjs-audio-button " + super.buildWrapperCSSClass();
    }
    createItems(e = []) {
      this.hideThreshold_ = 1;
      var t = this.player_.audioTracks();
      for (let s = 0; s < t.length; s++) {
        var i = t[s];
        e.push(new s_(this.player_, {
          track: i,
          selectable: !0,
          multiSelectable: !1
        }));
      }
      return e;
    }
  }
  sv.prototype.controlText_ = "Audio Track";
  tr.registerComponent("AudioTrackButton", sv);
  class sb extends sa {
    constructor(e, t) {
      var i = t.rate;
      var s = parseFloat(i, 10);
      t.label = i;
      t.selected = s === e.playbackRate();
      t.selectable = !0;
      t.multiSelectable = !1;
      super(e, t);
      this.label = i;
      this.rate = s;
      this.on(e, "ratechange", e => this.update(e));
    }
    handleClick(e) {
      super.handleClick();
      this.player().playbackRate(this.rate);
    }
    update(e) {
      this.selected(this.player().playbackRate() === this.rate);
    }
  }
  sb.prototype.contentElType = "button";
  tr.registerComponent("PlaybackRateMenuItem", sb);
  class sT extends ss {
    constructor(e, t) {
      super(e, t);
      this.menuButton_.el_.setAttribute("aria-describedby", this.labelElId_);
      this.updateVisibility();
      this.updateLabel();
      this.on(e, "loadstart", e => this.updateVisibility(e));
      this.on(e, "ratechange", e => this.updateLabel(e));
      this.on(e, "playbackrateschange", e => this.handlePlaybackRateschange(e));
    }
    createEl() {
      var e = super.createEl();
      this.labelElId_ = "vjs-playback-rate-value-label-" + this.id_;
      this.labelEl_ = Q("div", {
        className: "vjs-playback-rate-value",
        id: this.labelElId_,
        textContent: "1x"
      });
      e.appendChild(this.labelEl_);
      return e;
    }
    dispose() {
      this.labelEl_ = null;
      super.dispose();
    }
    buildCSSClass() {
      return "vjs-playback-rate " + super.buildCSSClass();
    }
    buildWrapperCSSClass() {
      return "vjs-playback-rate " + super.buildWrapperCSSClass();
    }
    createItems() {
      var e = this.playbackRates();
      var t = [];
      for (let i = e.length - 1; 0 <= i; i--) t.push(new sb(this.player(), {
        rate: e[i] + "x"
      }));
      return t;
    }
    handlePlaybackRateschange(e) {
      this.update();
    }
    playbackRates() {
      var e = this.player();
      return e.playbackRates && e.playbackRates() || [];
    }
    playbackRateSupported() {
      return this.player().tech_ && this.player().tech_.featuresPlaybackRate && this.playbackRates() && 0 < this.playbackRates().length;
    }
    updateVisibility(e) {
      this.playbackRateSupported() ? this.removeClass("vjs-hidden") : this.addClass("vjs-hidden");
    }
    updateLabel(e) {
      this.playbackRateSupported() && (this.labelEl_.textContent = this.player().playbackRate() + "x");
    }
  }
  sT.prototype.controlText_ = "Playback Rate";
  tr.registerComponent("PlaybackRateMenuButton", sT);
  class sS extends tr {
    buildCSSClass() {
      return "vjs-spacer " + super.buildCSSClass();
    }
    createEl(e = "div", t = {}, i = {}) {
      t.className || (t.className = this.buildCSSClass());
      return super.createEl(e, t, i);
    }
  }
  tr.registerComponent("Spacer", sS);
  tr.registerComponent("CustomControlSpacer", class extends sS {
    buildCSSClass() {
      return "vjs-custom-control-spacer " + super.buildCSSClass();
    }
    createEl() {
      return super.createEl("div", {
        className: this.buildCSSClass(),
        textContent: "\xa0"
      });
    }
  });
  class sw extends tr {
    createEl() {
      return super.createEl("div", {
        className: "vjs-control-bar",
        dir: "ltr"
      });
    }
  }
  sw.prototype.options_ = {
    children: ["playToggle", "skipBackward", "skipForward", "volumePanel", "currentTimeDisplay", "timeDivider", "durationDisplay", "progressControl", "liveDisplay", "seekToLive", "remainingTimeDisplay", "customControlSpacer", "playbackRateMenuButton", "chaptersButton", "descriptionsButton", "subsCapsButton", "audioTrackButton", "pictureInPictureToggle", "fullscreenToggle"]
  };
  tr.registerComponent("ControlBar", sw);
  class sE extends tS {
    constructor(e, t) {
      super(e, t);
      this.on(e, "error", e => {
        this.close();
        this.open(e);
      });
    }
    buildCSSClass() {
      return "vjs-error-display " + super.buildCSSClass();
    }
    content() {
      var e = this.player().error();
      return e ? this.localize(e.message) : "";
    }
  }
  sE.prototype.options_ = Object.assign({}, tS.prototype.options_, {
    pauseOnOpen: !1,
    fillAlways: !0,
    temporary: !1,
    uncloseable: !0
  });
  tr.registerComponent("ErrorDisplay", sE);
  let sC = "vjs-text-track-settings";
  var t6 = ["#000", "Black"];
  var tt = ["#00F", "Blue"];
  var sk = ["#0FF", "Cyan"];
  var sx = ["#0F0", "Green"];
  var sI = ["#F0F", "Magenta"];
  var sA = ["#F00", "Red"];
  var sD = ["#FFF", "White"];
  var sL = ["#FF0", "Yellow"];
  var sP = ["1", "Opaque"];
  var sO = ["0.5", "Semi-Transparent"];
  var sN = ["0", "Transparent"];
  let sR = {
    backgroundColor: {
      selector: ".vjs-bg-color > select",
      id: "captions-background-color-%s",
      label: "Color",
      options: [t6, sD, sA, sx, tt, sL, sI, sk]
    },
    backgroundOpacity: {
      selector: ".vjs-bg-opacity > select",
      id: "captions-background-opacity-%s",
      label: "Opacity",
      options: [sP, sO, sN]
    },
    color: {
      selector: ".vjs-text-color > select",
      id: "captions-foreground-color-%s",
      label: "Color",
      options: [sD, t6, sA, sx, tt, sL, sI, sk]
    },
    edgeStyle: {
      selector: ".vjs-edge-style > select",
      id: "%s",
      label: "Text Edge Style",
      options: [["none", "None"], ["raised", "Raised"], ["depressed", "Depressed"], ["uniform", "Uniform"], ["dropshadow", "Drop shadow"]]
    },
    fontFamily: {
      selector: ".vjs-font-family > select",
      id: "captions-font-family-%s",
      label: "Font Family",
      options: [["proportionalSansSerif", "Proportional Sans-Serif"], ["monospaceSansSerif", "Monospace Sans-Serif"], ["proportionalSerif", "Proportional Serif"], ["monospaceSerif", "Monospace Serif"], ["casual", "Casual"], ["script", "Script"], ["small-caps", "Small Caps"]]
    },
    fontPercent: {
      selector: ".vjs-font-percent > select",
      id: "captions-font-size-%s",
      label: "Font Size",
      options: [["0.50", "50%"], ["0.75", "75%"], ["1.00", "100%"], ["1.25", "125%"], ["1.50", "150%"], ["1.75", "175%"], ["2.00", "200%"], ["3.00", "300%"], ["4.00", "400%"]],
      default: 2,
      parser: e => "1.00" === e ? null : Number(e)
    },
    textOpacity: {
      selector: ".vjs-text-opacity > select",
      id: "captions-foreground-opacity-%s",
      label: "Opacity",
      options: [sP, sO]
    },
    windowColor: {
      selector: ".vjs-window-color > select",
      id: "captions-window-color-%s",
      label: "Color"
    },
    windowOpacity: {
      selector: ".vjs-window-opacity > select",
      id: "captions-window-opacity-%s",
      label: "Opacity",
      options: [sN, sO, sP]
    }
  };
  function sM(e, t) {
    if ((e = t ? t(e) : e) && "none" !== e) return e;
  }
  sR.windowColor.options = sR.backgroundColor.options;
  tr.registerComponent("TextTrackSettings", class extends tS {
    constructor(e, t) {
      t.temporary = !1;
      super(e, t);
      this.updateDisplay = this.updateDisplay.bind(this);
      this.fill();
      this.hasBeenOpened_ = this.hasBeenFilled_ = !0;
      this.endDialog = Q("p", {
        className: "vjs-control-text",
        textContent: this.localize("End of dialog window.")
      });
      this.el().appendChild(this.endDialog);
      this.setDefaults();
      void 0 === t.persistTextTrackSettings && (this.options_.persistTextTrackSettings = this.options_.playerOptions.persistTextTrackSettings);
      this.on(this.$(".vjs-done-button"), "click", () => {
        this.saveSettings();
        this.close();
      });
      this.on(this.$(".vjs-default-button"), "click", () => {
        this.setDefaults();
        this.updateDisplay();
      });
      _(sR, e => {
        this.on(this.$(e.selector), "change", this.updateDisplay);
      });
      this.options_.persistTextTrackSettings && this.restoreSettings();
    }
    dispose() {
      this.endDialog = null;
      super.dispose();
    }
    createElSelect_(e, t = "", i = "label") {
      let s = (e = sR[e]).id.replace("%s", this.id_);
      let r = [t, s].join(" ").trim();
      t = "vjs_select_" + eO++;
      return [`<${i} id="${s}"${"label" === i ? ` for="${t}" class="vjs-label"` : ""}>`, this.localize(e.label), `</${i}>`, `<select aria-labelledby="${r}" id="${t}">`].concat(e.options.map(e => {
        var t = s + "-" + e[1].replace(/\W+/g, "");
        return [`<option id="${t}" value="${e[0]}" `, `aria-labelledby="${r} ${t}">`, this.localize(e[1]), "</option>"].join("");
      })).concat("</select>").join("");
    }
    createElFgColor_() {
      var e = "captions-text-legend-" + this.id_;
      return ['<fieldset class="vjs-fg vjs-track-setting">', `<legend id="${e}">`, this.localize("Text"), "</legend>", '<span class="vjs-text-color">', this.createElSelect_("color", e), "</span>", '<span class="vjs-text-opacity vjs-opacity">', this.createElSelect_("textOpacity", e), "</span>", "</fieldset>"].join("");
    }
    createElBgColor_() {
      var e = "captions-background-" + this.id_;
      return ['<fieldset class="vjs-bg vjs-track-setting">', `<legend id="${e}">`, this.localize("Text Background"), "</legend>", '<span class="vjs-bg-color">', this.createElSelect_("backgroundColor", e), "</span>", '<span class="vjs-bg-opacity vjs-opacity">', this.createElSelect_("backgroundOpacity", e), "</span>", "</fieldset>"].join("");
    }
    createElWinColor_() {
      var e = "captions-window-" + this.id_;
      return ['<fieldset class="vjs-window vjs-track-setting">', `<legend id="${e}">`, this.localize("Caption Area Background"), "</legend>", '<span class="vjs-window-color">', this.createElSelect_("windowColor", e), "</span>", '<span class="vjs-window-opacity vjs-opacity">', this.createElSelect_("windowOpacity", e), "</span>", "</fieldset>"].join("");
    }
    createElColors_() {
      return Q("div", {
        className: "vjs-track-settings-colors",
        innerHTML: [this.createElFgColor_(), this.createElBgColor_(), this.createElWinColor_()].join("")
      });
    }
    createElFont_() {
      return Q("div", {
        className: "vjs-track-settings-font",
        innerHTML: ['<fieldset class="vjs-font-percent vjs-track-setting">', this.createElSelect_("fontPercent", "", "legend"), "</fieldset>", '<fieldset class="vjs-edge-style vjs-track-setting">', this.createElSelect_("edgeStyle", "", "legend"), "</fieldset>", '<fieldset class="vjs-font-family vjs-track-setting">', this.createElSelect_("fontFamily", "", "legend"), "</fieldset>"].join("")
      });
    }
    createElControls_() {
      var e = this.localize("restore all settings to the default values");
      return Q("div", {
        className: "vjs-track-settings-controls",
        innerHTML: [`<button type="button" class="vjs-default-button" title="${e}">`, this.localize("Reset"), `<span class="vjs-control-text"> ${e}</span>`, "</button>", `<button type="button" class="vjs-done-button">${this.localize("Done")}</button>`].join("")
      });
    }
    content() {
      return [this.createElColors_(), this.createElFont_(), this.createElControls_()];
    }
    label() {
      return this.localize("Caption Settings Dialog");
    }
    description() {
      return this.localize("Beginning of dialog window. Escape will cancel and close the window.");
    }
    buildCSSClass() {
      return super.buildCSSClass() + " vjs-text-track-settings";
    }
    getValues() {
      return v(sR, (e, t, i) => {
        s = this.$(t.selector);
        t = t.parser;
        var s = sM(s.options[s.options.selectedIndex].value, t);
        void 0 !== s && (e[i] = s);
        return e;
      }, {});
    }
    setValues(e) {
      _(sR, (t, i) => {
        var s = this.$(t.selector);
        var r = e[i];
        var n = t.parser;
        if (r) {
          for (let e = 0; e < s.options.length; e++) if (sM(s.options[e].value, n) === r) {
            s.selectedIndex = e;
            break;
          }
        }
      });
    }
    setDefaults() {
      _(sR, e => {
        var t = e.hasOwnProperty("default") ? e.$$default : 0;
        this.$(e.selector).selectedIndex = t;
      });
    }
    restoreSettings() {
      let e;
      try {
        e = JSON.parse(window.localStorage.getItem(sC));
      } catch (e) {
        g.warn(e);
      }
      e && this.setValues(e);
    }
    saveSettings() {
      if (this.options_.persistTextTrackSettings) {
        var e = this.getValues();
        try {
          Object.keys(e).length ? window.localStorage.setItem(sC, JSON.stringify(e)) : window.localStorage.removeItem(sC);
        } catch (e) {
          g.warn(e);
        }
      }
    }
    updateDisplay() {
      var e = this.player_.getChild("textTrackDisplay");
      e && e.updateDisplay();
    }
    conditionalBlur_() {
      this.previouslyActiveEl_ = null;
      var e = this.player_.controlBar;
      var t = e && e.subsCapsButton;
      var e = e && e.captionsButton;
      t ? t.focus() : e && e.focus();
    }
    handleLanguagechange() {
      this.fill();
    }
  });
  tr.registerComponent("ResizeManager", class extends tr {
    constructor(e, t) {
      let i = t.ResizeObserver || window.ResizeObserver;
      super(e, S({
        createEl: !(i = null !== t.ResizeObserver && i),
        reportTouchActivity: !1
      }, t));
      this.ResizeObserver = t.ResizeObserver || window.ResizeObserver;
      this.loadListener_ = null;
      this.resizeObserver_ = null;
      this.debouncedHandler_ = eW(() => {
        this.resizeHandler();
      }, 100, !1, this);
      i ? (this.resizeObserver_ = new this.ResizeObserver(this.debouncedHandler_), this.resizeObserver_.observe(e.el())) : (this.loadListener_ = () => {
        if (this.el_ && this.el_.contentWindow) {
          let e = this.debouncedHandler_;
          let t = this.unloadListener_ = function () {
            eF(this, "resize", e);
            eF(this, "unload", t);
            t = null;
          };
          eB(this.el_.contentWindow, "unload", t);
          eB(this.el_.contentWindow, "resize", e);
        }
      }, this.one("load", this.loadListener_));
    }
    createEl() {
      return super.createEl("iframe", {
        className: "vjs-resize-manager",
        tabIndex: -1,
        title: this.localize("No content")
      }, {
        "aria-hidden": "true"
      });
    }
    resizeHandler() {
      this.player_ && this.player_.trigger && this.player_.trigger("playerresize");
    }
    dispose() {
      this.debouncedHandler_ && this.debouncedHandler_.cancel();
      this.resizeObserver_ && (this.player_.el() && this.resizeObserver_.unobserve(this.player_.el()), this.resizeObserver_.disconnect());
      this.loadListener_ && this.off("load", this.loadListener_);
      this.el_ && this.el_.contentWindow && this.unloadListener_ && this.unloadListener_.call(this.el_.contentWindow);
      this.ResizeObserver = null;
      this.resizeObserver = null;
      this.debouncedHandler_ = null;
      this.loadListener_ = null;
      super.dispose();
    }
  });
  let sU = {
    trackingThreshold: 20,
    liveTolerance: 15
  };
  function sB(e) {
    let t = e.el();
    if (!t.resetSourceWatch_) {
      let i = {};
      let s = sH(e);
      let r = i => (...s) => (s = i.apply(t, s), sF(e), s);
      ["append", "appendChild", "insertAdjacentHTML"].forEach(e => {
        t[e] && (i[e] = t[e], t[e] = r(i[e]));
      });
      Object.defineProperty(t, "innerHTML", S(s, {
        set: r(s.set)
      }));
      t.resetSourceWatch_ = () => {
        t.resetSourceWatch_ = null;
        Object.keys(i).forEach(e => {
          t[e] = i[e];
        });
        Object.defineProperty(t, "innerHTML", s);
      };
      e.one("sourceset", t.resetSourceWatch_);
    }
  }
  tr.registerComponent("LiveTracker", class extends tr {
    constructor(e, t) {
      super(e, S(sU, t, {
        createEl: !1
      }));
      this.trackLiveHandler_ = () => this.trackLive_();
      this.handlePlay_ = e => this.handlePlay(e);
      this.handleFirstTimeupdate_ = e => this.handleFirstTimeupdate(e);
      this.handleSeeked_ = e => this.handleSeeked(e);
      this.seekToLiveEdge_ = e => this.seekToLiveEdge(e);
      this.reset_();
      this.on(this.player_, "durationchange", e => this.handleDurationchange(e));
      this.on(this.player_, "canplay", () => this.toggleTracking());
    }
    trackLive_() {
      var e = this.player_.seekable();
      if (e && e.length) {
        var e = Number(window.performance.now().toFixed(4));
        var t = -1 === this.lastTime_ ? 0 : (e - this.lastTime_) / 1e3;
        this.lastTime_ = e;
        this.pastSeekEnd_ = this.pastSeekEnd() + t;
        var e = this.liveCurrentTime();
        var t = this.player_.currentTime();
        let i = this.player_.paused() || this.seekedBehindLive_ || Math.abs(e - t) > this.options_.liveTolerance;
        (i = !!this.timeupdateSeen_ && e !== 1 / 0 && i) !== this.behindLiveEdge_ && (this.behindLiveEdge_ = i, this.trigger("liveedgechange"));
      }
    }
    handleDurationchange() {
      this.toggleTracking();
    }
    toggleTracking() {
      this.player_.duration() === 1 / 0 && this.liveWindow() >= this.options_.trackingThreshold ? (this.player_.options_.liveui && this.player_.addClass("vjs-liveui"), this.startTracking()) : (this.player_.removeClass("vjs-liveui"), this.stopTracking());
    }
    startTracking() {
      this.isTracking() || (this.timeupdateSeen_ || (this.timeupdateSeen_ = this.player_.hasStarted()), this.trackingInterval_ = this.setInterval(this.trackLiveHandler_, 30), this.trackLive_(), this.on(this.player_, ["play", "pause"], this.trackLiveHandler_), this.timeupdateSeen_ ? this.on(this.player_, "seeked", this.handleSeeked_) : (this.one(this.player_, "play", this.handlePlay_), this.one(this.player_, "timeupdate", this.handleFirstTimeupdate_)));
    }
    handleFirstTimeupdate() {
      this.timeupdateSeen_ = !0;
      this.on(this.player_, "seeked", this.handleSeeked_);
    }
    handleSeeked() {
      var e = Math.abs(this.liveCurrentTime() - this.player_.currentTime());
      this.seekedBehindLive_ = this.nextSeekedFromUser_ && 2 < e;
      this.nextSeekedFromUser_ = !1;
      this.trackLive_();
    }
    handlePlay() {
      this.one(this.player_, "timeupdate", this.seekToLiveEdge_);
    }
    reset_() {
      this.lastTime_ = -1;
      this.pastSeekEnd_ = 0;
      this.lastSeekEnd_ = -1;
      this.behindLiveEdge_ = !0;
      this.timeupdateSeen_ = !1;
      this.seekedBehindLive_ = !1;
      this.nextSeekedFromUser_ = !1;
      this.clearInterval(this.trackingInterval_);
      this.trackingInterval_ = null;
      this.off(this.player_, ["play", "pause"], this.trackLiveHandler_);
      this.off(this.player_, "seeked", this.handleSeeked_);
      this.off(this.player_, "play", this.handlePlay_);
      this.off(this.player_, "timeupdate", this.handleFirstTimeupdate_);
      this.off(this.player_, "timeupdate", this.seekToLiveEdge_);
    }
    nextSeekedFromUser() {
      this.nextSeekedFromUser_ = !0;
    }
    stopTracking() {
      this.isTracking() && (this.reset_(), this.trigger("liveedgechange"));
    }
    seekableEnd() {
      var e = this.player_.seekable();
      var t = [];
      let i = e ? e.length : 0;
      for (; i--;) t.push(e.end(i));
      return t.length ? t.sort()[t.length - 1] : 1 / 0;
    }
    seekableStart() {
      var e = this.player_.seekable();
      var t = [];
      let i = e ? e.length : 0;
      for (; i--;) t.push(e.start(i));
      return t.length ? t.sort()[0] : 0;
    }
    liveWindow() {
      var e = this.liveCurrentTime();
      return e === 1 / 0 ? 0 : e - this.seekableStart();
    }
    isLive() {
      return this.isTracking();
    }
    atLiveEdge() {
      return !this.behindLiveEdge();
    }
    liveCurrentTime() {
      return this.pastSeekEnd() + this.seekableEnd();
    }
    pastSeekEnd() {
      var e = this.seekableEnd();
      -1 !== this.lastSeekEnd_ && e !== this.lastSeekEnd_ && (this.pastSeekEnd_ = 0);
      this.lastSeekEnd_ = e;
      return this.pastSeekEnd_;
    }
    behindLiveEdge() {
      return this.behindLiveEdge_;
    }
    isTracking() {
      return "number" == typeof this.trackingInterval_;
    }
    seekToLiveEdge() {
      this.seekedBehindLive_ = !1;
      this.atLiveEdge() || (this.nextSeekedFromUser_ = !1, this.player_.currentTime(this.liveCurrentTime()));
    }
    dispose() {
      this.stopTracking();
      super.dispose();
    }
  });
  tr.registerComponent("TitleBar", class extends tr {
    constructor(e, t) {
      super(e, t);
      this.on("statechanged", e => this.updateDom_());
      this.updateDom_();
    }
    createEl() {
      this.els = {
        title: Q("div", {
          className: "vjs-title-bar-title",
          id: "vjs-title-bar-title-" + eO++
        }),
        description: Q("div", {
          className: "vjs-title-bar-description",
          id: "vjs-title-bar-description-" + eO++
        })
      };
      return Q("div", {
        className: "vjs-title-bar"
      }, {}, w(this.els));
    }
    updateDom_() {
      var e = this.player_.tech_;
      let t = e && e.el_;
      let i = {
        title: "aria-labelledby",
        description: "aria-describedby"
      };
      ["title", "description"].forEach(e => {
        var s = this.state[e];
        var r = this.els[e];
        var e = i[e];
        eg(r);
        s && J(r, s);
        t && (t.removeAttribute(e), s) && t.setAttribute(e, r.id);
      });
      this.state.title || this.state.description ? this.show() : this.hide();
    }
    update(e) {
      this.setState(e);
    }
    dispose() {
      var e = this.player_.tech_;
      var e = e && e.el_;
      e && (e.removeAttribute("aria-labelledby"), e.removeAttribute("aria-describedby"));
      super.dispose();
      this.els = null;
    }
  });
  let sF = e => {
    var t = e.el();
    if (t.hasAttribute("src")) e.triggerSourceset(t.src); else {
      var i = e.$$("source");
      var s = [];
      let t = "";
      if (!i.length) return !1;
      for (let e = 0; e < i.length; e++) {
        var r = i[e].src;
        r && -1 === s.indexOf(r) && s.push(r);
      }
      if (!s.length) return !1;
      1 === s.length && (t = s[0]);
      e.triggerSourceset(t);
    }
    return !0;
  };
  let sq = Object.defineProperty({}, "innerHTML", {
    get() {
      return this.cloneNode(!0).innerHTML;
    },
    set(e) {
      for (t = document.createElement(this.nodeName.toLowerCase()), t.innerHTML = e, i = document.createDocumentFragment(), void 0; t.childNodes.length;) {
        var t;
        var i;
        i.appendChild(t.childNodes[0]);
      }
      this.innerText = "";
      window.Element.prototype.appendChild.call(this, i);
      return this.innerHTML;
    }
  });
  let sj = (e, t) => {
    let i = {};
    for (let s = 0; s < e.length && !((i = Object.getOwnPropertyDescriptor(e[s], t)) && i.set && i.get); s++);
    i.enumerable = !0;
    i.configurable = !0;
    return i;
  };
  let sH = e => sj([e.el(), window.HTMLMediaElement.prototype, window.Element.prototype, sq], "innerHTML");
  let sV = Object.defineProperty({}, "src", {
    get() {
      return this.hasAttribute("src") ? tN(window.Element.prototype.getAttribute.call(this, "src")) : "";
    },
    set(e) {
      window.Element.prototype.setAttribute.call(this, "src", e);
      return e;
    }
  });
  class s$ extends iC {
    constructor(e, t) {
      this.featuresVideoFrameCallback = this.featuresVideoFrameCallback && "VIDEO" === this.el_.tagName;
      this.isScrubbing_ = !1;
      super(e, t);
      t = e.source;
      let i = !1;
      if (t && (this.el_.currentSrc !== t.src || e.tag && 3 === e.tag.initNetworkState_) ? this.setSource(t) : this.handleLateInit_(this.el_), e.enableSourceset && this.setupSourcesetHandling_(), this.el_.hasChildNodes()) {
        var s = this.el_.childNodes;
        let e = s.length;
        for (var r = []; e--;) {
          var n = s[e];
          "track" === n.nodeName.toLowerCase() && (this.featuresNativeTextTracks ? (this.remoteTextTrackEls().addTrackElement_(n), this.remoteTextTracks().addTrack(n.track), this.textTracks().addTrack(n.track), i || this.el_.hasAttribute("crossorigin") || !tR(n.src) || (i = !0)) : r.push(n));
        }
        for (let e = 0; e < r.length; e++) this.el_.removeChild(r[e]);
      }
      this.proxyNativeTracks_();
      this.featuresNativeTextTracks && i && g.warn("Text Tracks are being loaded from another origin but the crossorigin attribute isn't used.\nThis may prevent text tracks from loading.");
      this.restoreMetadataTracksInIOSNativePlayer_();
      (j || q) && !0 === e.nativeControlsForTouch && this.setControls(!0);
      this.proxyWebkitFullscreen_();
      this.triggerReady();
    }
    dispose() {
      this.el_ && this.el_.resetSourceset_ && this.el_.resetSourceset_();
      s$.disposeMediaElement(this.el_);
      this.options_ = null;
      super.dispose();
    }
    setupSourcesetHandling_() {
      !function (e) {
        if (e.featuresSourceset) {
          let t = e.el();
          if (!t.resetSourceset_) {
            let i = sj([e.el(), window.HTMLMediaElement.prototype, sV], "src");
            let s = t.setAttribute;
            let r = t.load;
            Object.defineProperty(t, "src", S(i, {
              set: s => (s = i.set.call(t, s), e.triggerSourceset(t.src), s)
            }));
            t.setAttribute = (i, r) => (r = s.call(t, i, r), /src/i.test(i) && e.triggerSourceset(t.src), r);
            t.load = () => {
              var i = r.call(t);
              sF(e) || (e.triggerSourceset(""), sB(e));
              return i;
            };
            t.currentSrc ? e.triggerSourceset(t.currentSrc) : sF(e) || sB(e);
            t.resetSourceset_ = () => {
              t.resetSourceset_ = null;
              t.load = r;
              t.setAttribute = s;
              Object.defineProperty(t, "src", i);
              t.resetSourceWatch_ && t.resetSourceWatch_();
            };
          }
        }
      }(this);
    }
    restoreMetadataTracksInIOSNativePlayer_() {
      let e;
      let t = this.textTracks();
      let i = () => {
        e = [];
        for (let s = 0; s < t.length; s++) {
          var i = t[s];
          "metadata" === i.kind && e.push({
            track: i,
            storedMode: i.mode
          });
        }
      };
      i();
      t.addEventListener("change", i);
      this.on("dispose", () => t.removeEventListener("change", i));
      let s = () => {
        for (let t = 0; t < e.length; t++) {
          var i = e[t];
          "disabled" === i.track.mode && i.track.mode !== i.storedMode && (i.track.mode = i.storedMode);
        }
        t.removeEventListener("change", s);
      };
      this.on("webkitbeginfullscreen", () => {
        t.removeEventListener("change", i);
        t.removeEventListener("change", s);
        t.addEventListener("change", s);
      });
      this.on("webkitendfullscreen", () => {
        t.removeEventListener("change", i);
        t.addEventListener("change", i);
        t.removeEventListener("change", s);
      });
    }
    overrideNative_(e, t) {
      if (t === this[`featuresNative${e}Tracks`]) {
        let i = e.toLowerCase();
        this[i + "TracksListeners_"] && Object.keys(this[i + "TracksListeners_"]).forEach(e => {
          this.el()[i + "Tracks"].removeEventListener(e, this[i + "TracksListeners_"][e]);
        });
        this[`featuresNative${e}Tracks`] = !t;
        this[i + "TracksListeners_"] = null;
        this.proxyNativeTracksForType_(i);
      }
    }
    overrideNativeAudioTracks(e) {
      this.overrideNative_("Audio", e);
    }
    overrideNativeVideoTracks(e) {
      this.overrideNative_("Video", e);
    }
    proxyNativeTracksForType_(e) {
      var t = t8[e];
      let i = this.el()[t.getterName];
      let s = this[t.getterName]();
      if (this[`featuresNative${t.capitalName}Tracks`] && i && i.addEventListener) {
        let r = {
          change: t => {
            var i = {
              type: "change",
              target: s,
              currentTarget: s,
              srcElement: s
            };
            s.trigger(i);
            "text" === e && this[t5.remoteText.getterName]().trigger(i);
          },
          addtrack(e) {
            s.addTrack(e.track);
          },
          removetrack(e) {
            s.removeTrack(e.track);
          }
        };
        let n = function () {
          var e = [];
          for (let t = 0; t < s.length; t++) {
            let r = !1;
            for (let e = 0; e < i.length; e++) if (i[e] === s[t]) {
              r = !0;
              break;
            }
            r || e.push(s[t]);
          }
          for (; e.length;) s.removeTrack(e.shift());
        };
        this[t.getterName + "Listeners_"] = r;
        Object.keys(r).forEach(e => {
          let t = r[e];
          i.addEventListener(e, t);
          this.on("dispose", s => i.removeEventListener(e, t));
        });
        this.on("loadstart", n);
        this.on("dispose", e => this.off("loadstart", n));
      }
    }
    proxyNativeTracks_() {
      t8.names.forEach(e => {
        this.proxyNativeTracksForType_(e);
      });
    }
    createEl() {
      let e = this.options_.tag;
      e && (this.options_.playerElIngest || this.movingMediaElementInDOM) || (e ? (t = e.cloneNode(!0), e.parentNode && e.parentNode.insertBefore(t, e), s$.disposeMediaElement(e), e = t) : (e = document.createElement("video"), t = S({}, this.options_.tag && en(this.options_.tag)), j && !0 === this.options_.nativeControlsForTouch || delete t.controls, er(e, Object.assign(t, {
        id: this.options_.techId,
        class: "vjs-tech"
      }))), e.playerId = this.options_.playerId);
      void 0 !== this.options_.preload && eo(e, "preload", this.options_.preload);
      void 0 !== this.options_.disablePictureInPicture && (e.disablePictureInPicture = this.options_.disablePictureInPicture);
      var t;
      var i = ["loop", "muted", "playsinline", "autoplay"];
      for (let t = 0; t < i.length; t++) {
        var s = i[t];
        var r = this.options_[s];
        void 0 !== r && (r ? eo(e, s, s) : el(e, s), e[s] = r);
      }
      return e;
    }
    handleLateInit_(e) {
      if (0 !== e.networkState && 3 !== e.networkState) {
        if (0 === e.readyState) {
          let e = !1;
          let t = function () {
            e = !0;
          };
          this.on("loadstart", t);
          let i = function () {
            e || this.trigger("loadstart");
          };
          this.on("loadedmetadata", i);
          this.ready(function () {
            this.off("loadstart", t);
            this.off("loadedmetadata", i);
            e || this.trigger("loadstart");
          });
        } else {
          let t = ["loadstart"];
          t.push("loadedmetadata");
          2 <= e.readyState && t.push("loadeddata");
          3 <= e.readyState && t.push("canplay");
          4 <= e.readyState && t.push("canplaythrough");
          this.ready(function () {
            t.forEach(function (e) {
              this.trigger(e);
            }, this);
          });
        }
      }
    }
    setScrubbing(e) {
      this.isScrubbing_ = e;
    }
    scrubbing() {
      return this.isScrubbing_;
    }
    setCurrentTime(e) {
      try {
        this.isScrubbing_ && this.el_.fastSeek && z ? this.el_.fastSeek(e) : this.el_.currentTime = e;
      } catch (e) {
        g(e, "Video is not ready. (Video.js)");
      }
    }
    duration() {
      if (this.el_.duration === 1 / 0 && I && O && 0 === this.el_.currentTime) {
        let e = () => {
          0 < this.el_.currentTime && (this.el_.duration === 1 / 0 && this.trigger("durationchange"), this.off("timeupdate", e));
        };
        this.on("timeupdate", e);
        return NaN;
      }
      return this.el_.duration || NaN;
    }
    width() {
      return this.el_.offsetWidth;
    }
    height() {
      return this.el_.offsetHeight;
    }
    proxyWebkitFullscreen_() {
      if ("webkitDisplayingFullscreen" in this.el_) {
        let e = function () {
          this.trigger("fullscreenchange", {
            isFullscreen: !1
          });
          this.el_.controls && !this.options_.nativeControlsForTouch && this.controls() && (this.el_.controls = !1);
        };
        let t = function () {
          "webkitPresentationMode" in this.el_ && "picture-in-picture" !== this.el_.webkitPresentationMode && (this.one("webkitendfullscreen", e), this.trigger("fullscreenchange", {
            isFullscreen: !0,
            nativeIOSFullscreen: !0
          }));
        };
        this.on("webkitbeginfullscreen", t);
        this.on("dispose", () => {
          this.off("webkitbeginfullscreen", t);
          this.off("webkitendfullscreen", e);
        });
      }
    }
    supportsFullScreen() {
      return "function" == typeof this.el_.webkitEnterFullScreen;
    }
    enterFullScreen() {
      let e = this.el_;
      if (e.paused && e.networkState <= e.HAVE_METADATA) {
        t_(this.el_.play());
        this.setTimeout(function () {
          e.pause();
          try {
            e.webkitEnterFullScreen();
          } catch (e) {
            this.trigger("fullscreenerror", e);
          }
        }, 0);
      } else try {
        e.webkitEnterFullScreen();
      } catch (e) {
        this.trigger("fullscreenerror", e);
      }
    }
    exitFullScreen() {
      this.el_.webkitDisplayingFullscreen ? this.el_.webkitExitFullScreen() : this.trigger("fullscreenerror", Error("The video is not fullscreen"));
    }
    requestPictureInPicture() {
      return this.el_.requestPictureInPicture();
    }
    requestVideoFrameCallback(e) {
      return this.featuresVideoFrameCallback && !this.el_.webkitKeys ? this.el_.requestVideoFrameCallback(e) : super.requestVideoFrameCallback(e);
    }
    cancelVideoFrameCallback(e) {
      this.featuresVideoFrameCallback && !this.el_.webkitKeys ? this.el_.cancelVideoFrameCallback(e) : super.cancelVideoFrameCallback(e);
    }
    src(e) {
      if (void 0 === e) return this.el_.src;
      this.setSrc(e);
    }
    reset() {
      s$.resetMediaElement(this.el_);
    }
    currentSrc() {
      return this.currentSource_ ? this.currentSource_.src : this.el_.currentSrc;
    }
    setControls(e) {
      this.el_.controls = !!e;
    }
    addTextTrack(e, t, i) {
      return this.featuresNativeTextTracks ? this.el_.addTextTrack(e, t, i) : super.addTextTrack(e, t, i);
    }
    createRemoteTextTrack(e) {
      var t;
      return this.featuresNativeTextTracks ? (t = document.createElement("track"), e.kind && (t.kind = e.kind), e.label && (t.label = e.label), (e.language || e.srclang) && (t.srclang = e.language || e.srclang), e.$$default && (t.$$default = e.$$default), e.id && (t.id = e.id), e.src && (t.src = e.src), t) : super.createRemoteTextTrack(e);
    }
    addRemoteTextTrack(e, t) {
      e = super.addRemoteTextTrack(e, t);
      this.featuresNativeTextTracks && this.el().appendChild(e);
      return e;
    }
    removeRemoteTextTrack(e) {
      if (super.removeRemoteTextTrack(e), this.featuresNativeTextTracks) {
        var t = this.$$("track");
        let i = t.length;
        for (; i--;) e !== t[i] && e !== t[i].track || this.el().removeChild(t[i]);
      }
    }
    getVideoPlaybackQuality() {
      var e;
      return "function" == typeof this.el().getVideoPlaybackQuality ? this.el().getVideoPlaybackQuality() : (e = {}, void 0 !== this.el().webkitDroppedFrameCount && void 0 !== this.el().webkitDecodedFrameCount && (e.droppedVideoFrames = this.el().webkitDroppedFrameCount, e.totalVideoFrames = this.el().webkitDecodedFrameCount), window.performance && (e.creationTime = window.performance.now()), e);
    }
  }
  E(s$, "TEST_VID", function () {
    var e;
    var t;
    if (G()) {
      e = document.createElement("video");
      (t = document.createElement("track")).kind = "captions";
      t.srclang = "en";
      t.label = "English";
      e.appendChild(t);
      return e;
    }
  });
  s$.isSupported = function () {
    try {
      s$.TEST_VID.volume = .5;
    } catch (e) {
      return !1;
    }
    return !(!s$.TEST_VID || !s$.TEST_VID.canPlayType);
  };
  s$.canPlayType = function (e) {
    return s$.TEST_VID.canPlayType(e);
  };
  s$.canPlaySource = function (e, t) {
    return s$.canPlayType(e.type);
  };
  s$.canControlVolume = function () {
    try {
      let t = s$.TEST_VID.volume;
      s$.TEST_VID.volume = t / 2 + .1;
      var e = t !== s$.TEST_VID.volume;
      return e && $ ? (window.setTimeout(() => {
        s$ && s$.prototype && (s$.prototype.featuresVolumeControl = t !== s$.TEST_VID.volume);
      }), !1) : e;
    } catch (e) {
      return !1;
    }
  };
  s$.canMuteVolume = function () {
    try {
      var e = s$.TEST_VID.muted;
      s$.TEST_VID.muted = !e;
      s$.TEST_VID.muted ? eo(s$.TEST_VID, "muted", "muted") : el(s$.TEST_VID, "muted");
      return e !== s$.TEST_VID.muted;
    } catch (e) {
      return !1;
    }
  };
  s$.canControlPlaybackRate = function () {
    if (I && O && R < 58) return !1;
    try {
      var e = s$.TEST_VID.playbackRate;
      s$.TEST_VID.playbackRate = e / 2 + .1;
      return e !== s$.TEST_VID.playbackRate;
    } catch (e) {
      return !1;
    }
  };
  s$.canOverrideAttributes = function () {
    try {
      var e = () => { };
      Object.defineProperty(document.createElement("video"), "src", {
        get: e,
        set: e
      });
      Object.defineProperty(document.createElement("audio"), "src", {
        get: e,
        set: e
      });
      Object.defineProperty(document.createElement("video"), "innerHTML", {
        get: e,
        set: e
      });
      Object.defineProperty(document.createElement("audio"), "innerHTML", {
        get: e,
        set: e
      });
    } catch (e) {
      return !1;
    }
    return !0;
  };
  s$.supportsNativeTextTracks = function () {
    return z || $ && O;
  };
  s$.supportsNativeVideoTracks = function () {
    return !(!s$.TEST_VID || !s$.TEST_VID.videoTracks);
  };
  s$.supportsNativeAudioTracks = function () {
    return !(!s$.TEST_VID || !s$.TEST_VID.audioTracks);
  };
  s$.Events = ["loadstart", "suspend", "abort", "error", "emptied", "stalled", "loadedmetadata", "loadeddata", "canplay", "canplaythrough", "playing", "waiting", "seeking", "seeked", "ended", "durationchange", "timeupdate", "progress", "play", "pause", "ratechange", "resize", "volumechange"];
  [["featuresMuteControl", "canMuteVolume"], ["featuresPlaybackRate", "canControlPlaybackRate"], ["featuresSourceset", "canOverrideAttributes"], ["featuresNativeTextTracks", "supportsNativeTextTracks"], ["featuresNativeVideoTracks", "supportsNativeVideoTracks"], ["featuresNativeAudioTracks", "supportsNativeAudioTracks"]].forEach(function ([e, t]) {
    E(s$.prototype, e, () => s$[t](), !0);
  });
  s$.prototype.featuresVolumeControl = s$.canControlVolume();
  s$.prototype.movingMediaElementInDOM = !$;
  s$.prototype.featuresFullscreenResize = !0;
  s$.prototype.featuresProgressEvents = !0;
  s$.prototype.featuresTimeupdateEvents = !0;
  s$.prototype.featuresVideoFrameCallback = !(!s$.TEST_VID || !s$.TEST_VID.requestVideoFrameCallback);
  s$.disposeMediaElement = function (e) {
    if (e) {
      for (e.parentNode && e.parentNode.removeChild(e); e.hasChildNodes();) e.removeChild(e.firstChild);
      if (e.removeAttribute("src"), "function" == typeof e.load) try {
        e.load();
      } catch (e) { }
    }
  };
  s$.resetMediaElement = function (e) {
    if (e) {
      var t = e.querySelectorAll("source");
      let i = t.length;
      for (; i--;) e.removeChild(t[i]);
      if (e.removeAttribute("src"), "function" == typeof e.load) try {
        e.load();
      } catch (e) { }
    }
  };
  ["muted", "defaultMuted", "autoplay", "controls", "loop", "playsinline"].forEach(function (e) {
    s$.prototype[e] = function () {
      return this.el_[e] || this.el_.hasAttribute(e);
    };
  });
  ["muted", "defaultMuted", "autoplay", "loop", "playsinline"].forEach(function (e) {
    s$.prototype["set" + e7(e)] = function (t) {
      (this.el_[e] = t) ? this.el_.setAttribute(e, e) : this.el_.removeAttribute(e);
    };
  });
  ["paused", "currentTime", "buffered", "volume", "poster", "preload", "error", "seeking", "seekable", "ended", "playbackRate", "defaultPlaybackRate", "disablePictureInPicture", "played", "networkState", "readyState", "videoWidth", "videoHeight", "crossOrigin"].forEach(function (e) {
    s$.prototype[e] = function () {
      return this.el_[e];
    };
  });
  ["volume", "src", "poster", "preload", "playbackRate", "defaultPlaybackRate", "disablePictureInPicture", "crossOrigin"].forEach(function (e) {
    s$.prototype["set" + e7(e)] = function (t) {
      this.el_[e] = t;
    };
  });
  ["pause", "load", "play"].forEach(function (e) {
    s$.prototype[e] = function () {
      return this.el_[e]();
    };
  });
  iC.withSourceHandlers(s$);
  s$.nativeSourceHandler = {};
  s$.nativeSourceHandler.canPlayType = function (e) {
    try {
      return s$.TEST_VID.canPlayType(e);
    } catch (e) {
      return "";
    }
  };
  s$.nativeSourceHandler.canHandleSource = function (e, t) {
    return e.type ? s$.nativeSourceHandler.canPlayType(e.type) : e.src ? (e = tM(e.src), s$.nativeSourceHandler.canPlayType("video/" + e)) : "";
  };
  s$.nativeSourceHandler.handleSource = function (e, t, i) {
    t.setSrc(e.src);
  };
  s$.nativeSourceHandler.dispose = function () { };
  s$.registerSourceHandler(s$.nativeSourceHandler);
  iC.registerTech("Html5", s$);
  let sz = ["progress", "abort", "suspend", "emptied", "stalled", "loadedmetadata", "loadeddata", "timeupdate", "resize", "volumechange", "texttrackchange"];
  let sW = {
    canplay: "CanPlay",
    canplaythrough: "CanPlayThrough",
    playing: "Playing",
    seeked: "Seeked"
  };
  let sG = ["tiny", "xsmall", "small", "medium", "large", "xlarge", "huge"];
  let sX = {};
  sG.forEach(e => {
    var t = "x" === e.charAt(0) ? "x-" + e.substring(1) : e;
    sX[e] = "vjs-layout-" + t;
  });
  let sK = {
    tiny: 210,
    xsmall: 320,
    small: 425,
    medium: 768,
    large: 1440,
    xlarge: 2560,
    huge: 1 / 0
  };
  class sY extends tr {
    boundDocumentFullscreenChange_ = e => this.documentFullscreenChange_(e);
    boundFullWindowOnEscKey_ = e => this.fullWindowOnEscKey(e);
    boundUpdateStyleEl_ = e => this.updateStyleEl_(e);
    boundApplyInitTime_ = e => this.applyInitTime_(e);
    boundUpdateCurrentBreakpoint_ = e => this.updateCurrentBreakpoint_(e);
    boundHandleTechClick_ = e => this.handleTechClick_(e);
    boundHandleTechDoubleClick_ = e => this.handleTechDoubleClick_(e);
    boundHandleTechTouchStart_ = e => this.handleTechTouchStart_(e);
    boundHandleTechTouchMove_ = e => this.handleTechTouchMove_(e);
    boundHandleTechTouchEnd_ = e => this.handleTechTouchEnd_(e);
    boundHandleTechTap_ = e => this.handleTechTap_(e);
    constructor(e, t, i) {
      this.tag = e;
      this.tagAttributes = e && en(e);
      this.isFullscreen_ = !1;
      this.log = f(this.id_);
      this.fsApi_ = d;
      this.isPosterFromTech_ = !1;
      this.queuedCallbacks_ = [];
      this.isReady_ = !1;
      this.hasStarted_ = !1;
      this.userActive_ = !1;
      this.debugEnabled_ = !1;
      this.audioOnlyMode_ = !1;
      this.audioPosterMode_ = !1;
      this.audioOnlyCache_ = {
        playerHeight: null,
        hiddenChildren: []
      };
      if (e.id = e.id || t.id || "vjs_video_" + eO++, (t = Object.assign(sY.getTagSettings(e), t)).initChildren = !1, t.createEl = !1, t.evented = !1, t.reportTouchActivity = !1, t.language || (s = e.closest("[lang]")) && (t.language = s.getAttribute("lang")), super(null, t, i), !this.options_ || !this.options_.techOrder || !this.options_.techOrder.length) throw Error("No techOrder specified. Did you overwrite videojs.options instead of just changing the properties you want to override?");
      if (this.language(this.options_.language), t.languages) {
        let e = {};
        Object.getOwnPropertyNames(t.languages).forEach(function (i) {
          e[i.toLowerCase()] = t.languages[i];
        });
        this.languages_ = e;
      } else this.languages_ = sY.prototype.options_.languages;
      this.resetCache_();
      this.poster_ = t.poster || "";
      this.controls_ = !!t.controls;
      e.controls = !1;
      e.removeAttribute("controls");
      this.changingSrc_ = !1;
      this.playCallbacks_ = [];
      this.playTerminatedQueue_ = [];
      e.hasAttribute("autoplay") ? this.autoplay(!0) : this.autoplay(this.options_.autoplay);
      t.plugins && Object.keys(t.plugins).forEach(e => {
        if ("function" != typeof this[e]) throw Error(`plugin "${e}" does not exist`);
      });
      this.scrubbing_ = !1;
      this.el_ = this.createEl();
      e8(this, {
        eventBusKey: "el_"
      });
      this.fsApi_.requestFullscreen && (eB(document, this.fsApi_.fullscreenchange, this.boundDocumentFullscreenChange_), this.on(this.fsApi_.fullscreenchange, this.boundDocumentFullscreenChange_));
      this.fluid_ && this.on(["playerreset", "resize"], this.boundUpdateStyleEl_);
      var s = S(this.options_);
      t.plugins && Object.keys(t.plugins).forEach(e => {
        this[e](t.plugins[e]);
      });
      t.debug && this.debug(!0);
      this.options_.playerOptions = s;
      this.middleware_ = [];
      this.playbackRates(t.playbackRates);
      t.experimentalSvgIcons && ((i = new window.DOMParser().parseFromString('<svg xmlns="http://www.w3.org/2000/svg">\n  <defs>\n    <symbol viewBox="0 0 48 48" id="vjs-icon-play">\n      <path d="M16 10v28l22-14z"></path>\n    </symbol>\n    <symbol viewBox="0 0 48 48" id="vjs-icon-pause">\n      <path d="M12 38h8V10h-8v28zm16-28v28h8V10h-8z"></path>\n    </symbol>\n    <symbol viewBox="0 0 48 48" id="vjs-icon-audio">\n      <path d="M24 2C14.06 2 6 10.06 6 20v14c0 3.31 2.69 6 6 6h6V24h-8v-4c0-7.73 6.27-14 14-14s14 6.27 14 14v4h-8v16h6c3.31 0 6-2.69 6-6V20c0-9.94-8.06-18-18-18z"></path>\n    </symbol>\n    <symbol viewBox="0 0 48 48" id="vjs-icon-captions">\n      <path d="M38 8H10c-2.21 0-4 1.79-4 4v24c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V12c0-2.21-1.79-4-4-4zM22 22h-3v-1h-4v6h4v-1h3v2a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2zm14 0h-3v-1h-4v6h4v-1h3v2a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2z"></path>\n    </symbol>\n    <symbol viewBox="0 0 48 48" id="vjs-icon-subtitles">\n      <path d="M40 8H8c-2.21 0-4 1.79-4 4v24c0 2.21 1.79 4 4 4h32c2.21 0 4-1.79 4-4V12c0-2.21-1.79-4-4-4zM8 24h8v4H8v-4zm20 12H8v-4h20v4zm12 0h-8v-4h8v4zm0-8H20v-4h20v4z"></path>\n    </symbol>\n    <symbol viewBox="0 0 48 48" id="vjs-icon-fullscreen-enter">\n      <path d="M14 28h-4v10h10v-4h-6v-6zm-4-8h4v-6h6v-4H10v10zm24 14h-6v4h10V28h-4v6zm-6-24v4h6v6h4V10H28z"></path>\n    </symbol>\n    <symbol viewBox="0 0 48 48" id="vjs-icon-fullscreen-exit">\n      <path d="M10 32h6v6h4V28H10v4zm6-16h-6v4h10V10h-4v6zm12 22h4v-6h6v-4H28v10zm4-22v-6h-4v10h10v-4h-6z"></path>\n    </symbol>\n    <symbol viewBox="0 0 48 48" id="vjs-icon-play-circle">\n      <path d="M20 33l12-9-12-9v18zm4-29C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 36c-8.82 0-16-7.18-16-16S15.18 8 24 8s16 7.18 16 16-7.18 16-16 16z"></path>\n    </symbol>\n    <symbol viewBox="0 0 48 48" id="vjs-icon-volume-mute">\n      <path d="M33 24c0-3.53-2.04-6.58-5-8.05v4.42l4.91 4.91c.06-.42.09-.85.09-1.28zm5 0c0 1.88-.41 3.65-1.08 5.28l3.03 3.03C41.25 29.82 42 27 42 24c0-8.56-5.99-15.72-14-17.54v4.13c5.78 1.72 10 7.07 10 13.41zM8.55 6L6 8.55 15.45 18H6v12h8l10 10V26.55l8.51 8.51c-1.34 1.03-2.85 1.86-4.51 2.36v4.13a17.94 17.94 0 0 0 7.37-3.62L39.45 42 42 39.45l-18-18L8.55 6zM24 8l-4.18 4.18L24 16.36V8z"></path>\n    </symbol>\n    <symbol viewBox="0 0 48 48" id="vjs-icon-volume-low">\n      <path d="M14 18v12h8l10 10V8L22 18h-8z"></path>\n    </symbol>\n    <symbol viewBox="0 0 48 48" id="vjs-icon-volume-medium">\n      <path d="M37 24c0-3.53-2.04-6.58-5-8.05v16.11c2.96-1.48 5-4.53 5-8.06zm-27-6v12h8l10 10V8L18 18h-8z"></path>\n    </symbol>\n    <symbol viewBox="0 0 48 48" id="vjs-icon-volume-high">\n      <path d="M6 18v12h8l10 10V8L14 18H6zm27 6c0-3.53-2.04-6.58-5-8.05v16.11c2.96-1.48 5-4.53 5-8.06zM28 6.46v4.13c5.78 1.72 10 7.07 10 13.41s-4.22 11.69-10 13.41v4.13c8.01-1.82 14-8.97 14-17.54S36.01 8.28 28 6.46z"></path>\n    </symbol>\n    <symbol viewBox="0 0 48 48" id="vjs-icon-spinner">\n      <path d="M18.8 21l9.53-16.51C26.94 4.18 25.49 4 24 4c-4.8 0-9.19 1.69-12.64 4.51l7.33 12.69.11-.2zm24.28-3c-1.84-5.85-6.3-10.52-11.99-12.68L23.77 18h19.31zm.52 2H28.62l.58 1 9.53 16.5C41.99 33.94 44 29.21 44 24c0-1.37-.14-2.71-.4-4zm-26.53 4l-7.8-13.5C6.01 14.06 4 18.79 4 24c0 1.37.14 2.71.4 4h14.98l-2.31-4zM4.92 30c1.84 5.85 6.3 10.52 11.99 12.68L24.23 30H4.92zm22.54 0l-7.8 13.51c1.4.31 2.85.49 4.34.49 4.8 0 9.19-1.69 12.64-4.51L29.31 26.8 27.46 30z"></path>\n    </symbol>\n    <symbol viewBox="0 0 24 24" id="vjs-icon-hd">\n      <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-8 12H9.5v-2h-2v2H6V9h1.5v2.5h2V9H11v6zm2-6h4c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1h-4V9zm1.5 4.5h2v-3h-2v3z"></path>\n    </symbol>\n    <symbol viewBox="0 0 48 48" id="vjs-icon-chapters">\n      <path d="M6 26h4v-4H6v4zm0 8h4v-4H6v4zm0-16h4v-4H6v4zm8 8h28v-4H14v4zm0 8h28v-4H14v4zm0-20v4h28v-4H14z"></path>\n    </symbol>\n    <symbol viewBox="0 0 40 40" id="vjs-icon-downloading">\n      <path d="M18.208 36.875q-3.208-.292-5.979-1.729-2.771-1.438-4.812-3.729-2.042-2.292-3.188-5.229-1.146-2.938-1.146-6.23 0-6.583 4.334-11.416 4.333-4.834 10.833-5.5v3.166q-5.167.75-8.583 4.646Q6.25 14.75 6.25 19.958q0 5.209 3.396 9.104 3.396 3.896 8.562 4.646zM20 28.417L11.542 20l2.083-2.083 4.917 4.916v-11.25h2.916v11.25l4.875-4.916L28.417 20zm1.792 8.458v-3.167q1.833-.25 3.541-.958 1.709-.708 3.167-1.875l2.333 2.292q-1.958 1.583-4.25 2.541-2.291.959-4.791 1.167zm6.791-27.792q-1.541-1.125-3.25-1.854-1.708-.729-3.541-1.021V3.042q2.5.25 4.77 1.208 2.271.958 4.271 2.5zm4.584 21.584l-2.25-2.25q1.166-1.5 1.854-3.209.687-1.708.937-3.541h3.209q-.292 2.5-1.229 4.791-.938 2.292-2.521 4.209zm.541-12.417q-.291-1.833-.958-3.562-.667-1.73-1.833-3.188l2.375-2.208q1.541 1.916 2.458 4.208.917 2.292 1.167 4.75z"></path>\n    </symbol>\n    <symbol viewBox="0 0 48 48" id="vjs-icon-file-download">\n      <path d="M10.8 40.55q-1.35 0-2.375-1T7.4 37.15v-7.7h3.4v7.7h26.35v-7.7h3.4v7.7q0 1.4-1 2.4t-2.4 1zM24 32.1L13.9 22.05l2.45-2.45 5.95 5.95V7.15h3.4v18.4l5.95-5.95 2.45 2.45z"></path>\n    </symbol>\n    <symbol viewBox="0 0 48 48" id="vjs-icon-file-download-done">\n      <path d="M9.8 40.5v-3.45h28.4v3.45zm9.2-9.05L7.4 19.85l2.45-2.35L19 26.65l19.2-19.2 2.4 2.4z"></path>\n    </symbol>\n    <symbol viewBox="0 0 48 48" id="vjs-icon-file-download-off">\n      <path d="M4.9 4.75L43.25 43.1 41 45.3l-4.75-4.75q-.05.05-.075.025-.025-.025-.075-.025H10.8q-1.35 0-2.375-1T7.4 37.15v-7.7h3.4v7.7h22.05l-7-7-1.85 1.8L13.9 21.9l1.85-1.85L2.7 7zm26.75 14.7l2.45 2.45-3.75 3.8-2.45-2.5zM25.7 7.15V21.1l-3.4-3.45V7.15z"></path>\n    </symbol>\n    <symbol viewBox="0 0 48 48" id="vjs-icon-share">\n      <path d="M36 32.17c-1.52 0-2.89.59-3.93 1.54L17.82 25.4c.11-.45.18-.92.18-1.4s-.07-.95-.18-1.4l14.1-8.23c1.07 1 2.5 1.62 4.08 1.62 3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6c0 .48.07.95.18 1.4l-14.1 8.23c-1.07-1-2.5-1.62-4.08-1.62-3.31 0-6 2.69-6 6s2.69 6 6 6c1.58 0 3.01-.62 4.08-1.62l14.25 8.31c-.1.42-.16.86-.16 1.31A5.83 5.83 0 1 0 36 32.17z"></path>\n    </symbol>\n    <symbol viewBox="0 0 48 48" id="vjs-icon-cog">\n      <path d="M38.86 25.95c.08-.64.14-1.29.14-1.95s-.06-1.31-.14-1.95l4.23-3.31c.38-.3.49-.84.24-1.28l-4-6.93c-.25-.43-.77-.61-1.22-.43l-4.98 2.01c-1.03-.79-2.16-1.46-3.38-1.97L29 4.84c-.09-.47-.5-.84-1-.84h-8c-.5 0-.91.37-.99.84l-.75 5.3a14.8 14.8 0 0 0-3.38 1.97L9.9 10.1a1 1 0 0 0-1.22.43l-4 6.93c-.25.43-.14.97.24 1.28l4.22 3.31C9.06 22.69 9 23.34 9 24s.06 1.31.14 1.95l-4.22 3.31c-.38.3-.49.84-.24 1.28l4 6.93c.25.43.77.61 1.22.43l4.98-2.01c1.03.79 2.16 1.46 3.38 1.97l.75 5.3c.08.47.49.84.99.84h8c.5 0 .91-.37.99-.84l.75-5.3a14.8 14.8 0 0 0 3.38-1.97l4.98 2.01a1 1 0 0 0 1.22-.43l4-6.93c.25-.43.14-.97-.24-1.28l-4.22-3.31zM24 31c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"></path>\n    </symbol>\n    <symbol viewBox="0 0 48 48" id="vjs-icon-square">\n      <path d="M36 8H12c-2.21 0-4 1.79-4 4v24c0 2.21 1.79 4 4 4h24c2.21 0 4-1.79 4-4V12c0-2.21-1.79-4-4-4zm0 28H12V12h24v24z"></path>\n    </symbol>\n    <symbol viewBox="0 0 48 48" id="vjs-icon-circle">\n      <circle cx="24" cy="24" r="20"></circle>\n    </symbol>\n    <symbol viewBox="0 0 48 48" id="vjs-icon-circle-outline">\n      <path d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 36c-8.82 0-16-7.18-16-16S15.18 8 24 8s16 7.18 16 16-7.18 16-16 16z"></path>\n    </symbol>\n    <symbol viewBox="0 0 48 48" id="vjs-icon-circle-inner-circle">\n      <path d="M24 4C12.97 4 4 12.97 4 24s8.97 20 20 20 20-8.97 20-20S35.03 4 24 4zm0 36c-8.82 0-16-7.18-16-16S15.18 8 24 8s16 7.18 16 16-7.18 16-16 16zm6-16c0 3.31-2.69 6-6 6s-6-2.69-6-6 2.69-6 6-6 6 2.69 6 6z"></path>\n    </symbol>\n    <symbol viewBox="0 0 48 48" id="vjs-icon-cancel">\n      <path d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm10 27.17L31.17 34 24 26.83 16.83 34 14 31.17 21.17 24 14 16.83 16.83 14 24 21.17 31.17 14 34 16.83 26.83 24 34 31.17z"></path>\n    </symbol>\n    <symbol viewBox="0 0 48 48" id="vjs-icon-replay">\n      <path d="M24 10V2L14 12l10 10v-8c6.63 0 12 5.37 12 12s-5.37 12-12 12-12-5.37-12-12H8c0 8.84 7.16 16 16 16s16-7.16 16-16-7.16-16-16-16z"></path>\n    </symbol>\n    <symbol viewBox="0 0 48 48" id="vjs-icon-repeat">\n      <path d="M14 14h20v6l8-8-8-8v6H10v12h4v-8zm20 20H14v-6l-8 8 8 8v-6h24V26h-4v8z"></path>\n    </symbol>\n    <symbol viewBox="0 96 48 48" id="vjs-icon-replay-5">\n      <path d="M17.689 98l-8.697 8.696 8.697 8.697 2.486-2.485-4.32-4.319h1.302c4.93 0 9.071 1.722 12.424 5.165 3.352 3.443 5.029 7.638 5.029 12.584h3.55c0-2.958-.553-5.73-1.658-8.313-1.104-2.583-2.622-4.841-4.555-6.774-1.932-1.932-4.19-3.45-6.773-4.555-2.584-1.104-5.355-1.657-8.313-1.657H15.5l4.615-4.615zm-8.08 21.659v13.861h11.357v5.008H9.609V143h12.7c.834 0 1.55-.298 2.146-.894.596-.597.895-1.31.895-2.145v-7.781c0-.835-.299-1.55-.895-2.147a2.929 2.929 0 0 0-2.147-.894h-8.227v-5.096H25.35v-4.384z"></path>\n    </symbol>\n    <symbol viewBox="0 96 48 48" id="vjs-icon-replay-10">\n      <path d="M42.315 125.63c0-4.997-1.694-9.235-5.08-12.713-3.388-3.479-7.571-5.218-12.552-5.218h-1.315l4.363 4.363-2.51 2.51-8.787-8.786L25.221 97l2.45 2.45-4.662 4.663h1.375c2.988 0 5.788.557 8.397 1.673 2.61 1.116 4.892 2.65 6.844 4.602 1.953 1.953 3.487 4.234 4.602 6.844 1.116 2.61 1.674 5.41 1.674 8.398zM8.183 142v-19.657H3.176V117.8h9.643V142zm13.63 0c-1.156 0-2.127-.393-2.912-1.178-.778-.778-1.168-1.746-1.168-2.902v-16.04c0-1.156.393-2.127 1.178-2.912.779-.779 1.746-1.168 2.902-1.168h7.696c1.156 0 2.126.392 2.911 1.177.779.78 1.168 1.747 1.168 2.903v16.04c0 1.156-.392 2.127-1.177 2.912-.779.779-1.746 1.168-2.902 1.168zm.556-4.636h6.583v-15.02H22.37z"></path>\n    </symbol>\n    <symbol viewBox="0 96 48 48" id="vjs-icon-replay-30">\n      <path d="M26.047 97l-8.733 8.732 8.733 8.733 2.496-2.494-4.336-4.338h1.307c4.95 0 9.108 1.73 12.474 5.187 3.367 3.458 5.051 7.668 5.051 12.635h3.565c0-2.97-.556-5.751-1.665-8.346-1.109-2.594-2.633-4.862-4.574-6.802-1.94-1.941-4.208-3.466-6.803-4.575-2.594-1.109-5.375-1.664-8.345-1.664H23.85l4.634-4.634zM2.555 117.531v4.688h10.297v5.25H5.873v4.687h6.979v5.156H2.555V142H13.36c1.061 0 1.95-.395 2.668-1.186.718-.79 1.076-1.772 1.076-2.94v-16.218c0-1.168-.358-2.149-1.076-2.94-.717-.79-1.607-1.185-2.668-1.185zm22.482.14c-1.149 0-2.11.39-2.885 1.165-.78.78-1.172 1.744-1.172 2.893v15.943c0 1.149.388 2.11 1.163 2.885.78.78 1.745 1.172 2.894 1.172h7.649c1.148 0 2.11-.388 2.884-1.163.78-.78 1.17-1.745 1.17-2.894v-15.943c0-1.15-.386-2.111-1.16-2.885-.78-.78-1.746-1.172-2.894-1.172zm.553 4.518h6.545v14.93H25.59z"></path>\n    </symbol>\n    <symbol viewBox="0 96 48 48" id="vjs-icon-forward-5">\n      <path d="M29.508 97l-2.431 2.43 4.625 4.625h-1.364c-2.965 0-5.742.554-8.332 1.66-2.589 1.107-4.851 2.629-6.788 4.566-1.937 1.937-3.458 4.2-4.565 6.788-1.107 2.59-1.66 5.367-1.66 8.331h3.557c0-4.957 1.68-9.16 5.04-12.611 3.36-3.45 7.51-5.177 12.451-5.177h1.304l-4.326 4.33 2.49 2.49 8.715-8.716zm-9.783 21.61v13.89h11.382v5.018H19.725V142h12.727a2.93 2.93 0 0 0 2.15-.896 2.93 2.93 0 0 0 .896-2.15v-7.798c0-.837-.299-1.554-.896-2.152a2.93 2.93 0 0 0-2.15-.896h-8.245V123h11.29v-4.392z"></path>\n    </symbol>\n    <symbol viewBox="0 96 48 48" id="vjs-icon-forward-10">\n      <path d="M23.119 97l-2.386 2.383 4.538 4.538h-1.339c-2.908 0-5.633.543-8.173 1.63-2.54 1.085-4.76 2.577-6.66 4.478-1.9 1.9-3.392 4.12-4.478 6.66-1.085 2.54-1.629 5.264-1.629 8.172h3.49c0-4.863 1.648-8.986 4.944-12.372 3.297-3.385 7.368-5.078 12.216-5.078h1.279l-4.245 4.247 2.443 2.442 8.55-8.55zm-9.52 21.45v4.42h4.871V142h4.513v-23.55zm18.136 0c-1.125 0-2.066.377-2.824 1.135-.764.764-1.148 1.709-1.148 2.834v15.612c0 1.124.38 2.066 1.139 2.824.764.764 1.708 1.145 2.833 1.145h7.489c1.125 0 2.066-.378 2.824-1.136.764-.764 1.145-1.709 1.145-2.833v-15.612c0-1.125-.378-2.067-1.136-2.825-.764-.764-1.708-1.145-2.833-1.145zm.54 4.42h6.408v14.617h-6.407z"></path>\n    </symbol>\n    <symbol viewBox="0 96 48 48" id="vjs-icon-forward-30">\n      <path d="M25.549 97l-2.437 2.434 4.634 4.635H26.38c-2.97 0-5.753.555-8.347 1.664-2.594 1.109-4.861 2.633-6.802 4.574-1.94 1.94-3.465 4.207-4.574 6.802-1.109 2.594-1.664 5.377-1.664 8.347h3.565c0-4.967 1.683-9.178 5.05-12.636 3.366-3.458 7.525-5.187 12.475-5.187h1.307l-4.335 4.338 2.495 2.494 8.732-8.732zm-11.553 20.53v4.689h10.297v5.249h-6.978v4.688h6.978v5.156H13.996V142h10.808c1.06 0 1.948-.395 2.666-1.186.718-.79 1.077-1.771 1.077-2.94v-16.217c0-1.169-.36-2.15-1.077-2.94-.718-.79-1.605-1.186-2.666-1.186zm21.174.168c-1.149 0-2.11.389-2.884 1.163-.78.78-1.172 1.745-1.172 2.894v15.942c0 1.15.388 2.11 1.162 2.885.78.78 1.745 1.17 2.894 1.17h7.649c1.149 0 2.11-.386 2.885-1.16.78-.78 1.17-1.746 1.17-2.895v-15.942c0-1.15-.387-2.11-1.161-2.885-.78-.78-1.745-1.172-2.894-1.172zm.552 4.516h6.542v14.931h-6.542z"></path>\n    </symbol>\n    <symbol viewBox="0 0 512 512" id="vjs-icon-audio-description">\n      <g fill-rule="evenodd"><path d="M227.29 381.351V162.993c50.38-1.017 89.108-3.028 117.631 17.126 27.374 19.342 48.734 56.965 44.89 105.325-4.067 51.155-41.335 94.139-89.776 98.475-24.085 2.155-71.972 0-71.972 0s-.84-1.352-.773-2.568m48.755-54.804c31.43 1.26 53.208-16.633 56.495-45.386 4.403-38.51-21.188-63.552-58.041-60.796v103.612c-.036 1.466.575 2.22 1.546 2.57"></path><path d="M383.78 381.328c13.336 3.71 17.387-11.06 23.215-21.408 12.722-22.571 22.294-51.594 22.445-84.774.221-47.594-18.343-82.517-35.6-106.182h-8.51c-.587 3.874 2.226 7.315 3.865 10.276 13.166 23.762 25.367 56.553 25.54 94.194.2 43.176-14.162 79.278-30.955 107.894"></path><path d="M425.154 381.328c13.336 3.71 17.384-11.061 23.215-21.408 12.721-22.571 22.291-51.594 22.445-84.774.221-47.594-18.343-82.517-35.6-106.182h-8.511c-.586 3.874 2.226 7.315 3.866 10.276 13.166 23.762 25.367 56.553 25.54 94.194.2 43.176-14.162 79.278-30.955 107.894"></path><path d="M466.26 381.328c13.337 3.71 17.385-11.061 23.216-21.408 12.722-22.571 22.292-51.594 22.445-84.774.221-47.594-18.343-82.517-35.6-106.182h-8.51c-.587 3.874 2.225 7.315 3.865 10.276 13.166 23.762 25.367 56.553 25.54 94.194.2 43.176-14.162 79.278-30.955 107.894M4.477 383.005H72.58l18.573-28.484 64.169-.135s.065 19.413.065 28.62h48.756V160.307h-58.816c-5.653 9.537-140.85 222.697-140.85 222.697zm152.667-145.282v71.158l-40.453-.27 40.453-70.888z"></path></g>\n    </symbol>\n    <symbol viewBox="0 0 48 48" id="vjs-icon-next-item">\n      <path d="M12 36l17-12-17-12v24zm20-24v24h4V12h-4z"></path>\n    </symbol>\n    <symbol viewBox="0 0 48 48" id="vjs-icon-previous-item">\n      <path d="M12 12h4v24h-4zm7 12l17 12V12z"></path>\n    </symbol>\n    <symbol viewBox="0 0 48 48" id="vjs-icon-shuffle">\n      <path d="M21.17 18.34L10.83 8 8 10.83l10.34 10.34 2.83-2.83zM29 8l4.09 4.09L8 37.17 10.83 40l25.09-25.09L40 19V8H29zm.66 18.83l-2.83 2.83 6.26 6.26L29 40h11V29l-4.09 4.09-6.25-6.26z"></path>\n    </symbol>\n    <symbol viewBox="0 0 48 48" id="vjs-icon-cast">\n      <path d="M42 6H6c-2.21 0-4 1.79-4 4v6h4v-6h36v28H28v4h14c2.21 0 4-1.79 4-4V10c0-2.21-1.79-4-4-4zM2 36v6h6c0-3.31-2.69-6-6-6zm0-8v4c5.52 0 10 4.48 10 10h4c0-7.73-6.27-14-14-14zm0-8v4c9.94 0 18 8.06 18 18h4c0-12.15-9.85-22-22-22z"></path>\n    </symbol>\n    <symbol viewBox="0 0 48 48" id="vjs-icon-picture-in-picture-enter">\n      <path d="M38 22H22v11.99h16V22zm8 16V9.96C46 7.76 44.2 6 42 6H6C3.8 6 2 7.76 2 9.96V38c0 2.2 1.8 4 4 4h36c2.2 0 4-1.8 4-4zm-4 .04H6V9.94h36v28.1z"></path>\n    </symbol>\n    <symbol viewBox="0 0 22 18" id="vjs-icon-picture-in-picture-exit">\n      <path d="M18 4H4v10h14V4zm4 12V1.98C22 .88 21.1 0 20 0H2C.9 0 0 .88 0 1.98V16c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2zm-2 .02H2V1.97h18v14.05z"></path>\n      <path fill="none" d="M-1-3h24v24H-1z"></path>\n    </symbol>\n    <symbol viewBox="0 0 1792 1792" id="vjs-icon-facebook">\n      <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759H734V905H479V609h255V391q0-186 104-288.5T1115 0q147 0 228 12z"></path>\n    </symbol>\n    <symbol viewBox="0 0 1792 1792" id="vjs-icon-linkedin">\n      <path d="M477 625v991H147V625h330zm21-306q1 73-50.5 122T312 490h-2q-82 0-132-49t-50-122q0-74 51.5-122.5T314 148t133 48.5T498 319zm1166 729v568h-329v-530q0-105-40.5-164.5T1168 862q-63 0-105.5 34.5T999 982q-11 30-11 81v553H659q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5T1285 602q171 0 275 113.5t104 332.5z"></path>\n    </symbol>\n    <symbol viewBox="0 0 1792 1792" id="vjs-icon-twitter">\n      <path d="M1684 408q-67 98-162 167 1 14 1 42 0 130-38 259.5T1369.5 1125 1185 1335.5t-258 146-323 54.5q-271 0-496-145 35 4 78 4 225 0 401-138-105-2-188-64.5T285 1033q33 5 61 5 43 0 85-11-112-23-185.5-111.5T172 710v-4q68 38 146 41-66-44-105-115t-39-154q0-88 44-163 121 149 294.5 238.5T884 653q-8-38-8-74 0-134 94.5-228.5T1199 256q140 0 236 102 109-21 205-78-37 115-142 178 93-10 186-50z"></path>\n    </symbol>\n    <symbol viewBox="0 0 1792 1792" id="vjs-icon-tumblr">\n      <path d="M1328 1329l80 237q-23 35-111 66t-177 32q-104 2-190.5-26T787 1564t-95-106-55.5-120-16.5-118V676H452V461q72-26 129-69.5t91-90 58-102 34-99T779 12q1-5 4.5-8.5T791 0h244v424h333v252h-334v518q0 30 6.5 56t22.5 52.5 49.5 41.5 81.5 14q78-2 134-29z"></path>\n    </symbol>\n    <symbol viewBox="0 0 1792 1792" id="vjs-icon-pinterest">\n      <path d="M1664 896q0 209-103 385.5T1281.5 1561 896 1664q-111 0-218-32 59-93 78-164 9-34 54-211 20 39 73 67.5t114 28.5q121 0 216-68.5t147-188.5 52-270q0-114-59.5-214T1180 449t-255-63q-105 0-196 29t-154.5 77-109 110.5-67 129.5T377 866q0 104 40 183t117 111q30 12 38-20 2-7 8-31t8-30q6-23-11-43-51-61-51-151 0-151 104.5-259.5T904 517q151 0 235.5 82t84.5 213q0 170-68.5 289T980 1220q-61 0-98-43.5T859 1072q8-35 26.5-93.5t30-103T927 800q0-50-27-83t-77-33q-62 0-105 57t-43 142q0 73 25 122l-99 418q-17 70-13 177-206-91-333-281T128 896q0-209 103-385.5T510.5 231 896 128t385.5 103T1561 510.5 1664 896z"></path>\n    </symbol>\n  </defs>\n</svg>', "image/svg+xml")).querySelector("parsererror") ? (g.warn("Failed to load SVG Icons. Falling back to Font Icons."), this.options_.experimentalSvgIcons = null) : ((s = i.documentElement).style.display = "none", this.el_.appendChild(s), this.addClass("vjs-svg-icons-enabled")));
      this.initChildren();
      this.isAudio("audio" === e.nodeName.toLowerCase());
      this.controls() ? this.addClass("vjs-controls-enabled") : this.addClass("vjs-controls-disabled");
      this.el_.setAttribute("role", "region");
      this.isAudio() ? this.el_.setAttribute("aria-label", this.localize("Audio Player")) : this.el_.setAttribute("aria-label", this.localize("Video Player"));
      this.isAudio() && this.addClass("vjs-audio");
      j && this.addClass("vjs-touch-enabled");
      $ || this.addClass("vjs-workinghover");
      sY.players[this.id_] = this;
      var i = a.split(".")[0];
      this.addClass("vjs-v" + i);
      this.userActive(!0);
      this.reportUserActivity();
      this.one("play", e => this.listenForUserActivity_(e));
      this.on("keydown", e => this.handleKeyDown(e));
      this.on("languagechange", e => this.handleLanguagechange(e));
      this.breakpoints(this.options_.breakpoints);
      this.responsive(this.options_.responsive);
      this.on("ready", () => {
        this.audioPosterMode(this.options_.audioPosterMode);
        this.audioOnlyMode(this.options_.audioOnlyMode);
      });
    }
    dispose() {
      this.trigger("dispose");
      this.off("dispose");
      eF(document, this.fsApi_.fullscreenchange, this.boundDocumentFullscreenChange_);
      eF(document, "keydown", this.boundFullWindowOnEscKey_);
      this.styleEl_ && this.styleEl_.parentNode && (this.styleEl_.parentNode.removeChild(this.styleEl_), this.styleEl_ = null);
      sY.players[this.id_] = null;
      this.tag && this.tag.player && (this.tag.player = null);
      this.el_ && this.el_.player && (this.el_.player = null);
      this.tech_ && (this.tech_.dispose(), this.isPosterFromTech_ = !1, this.poster_ = "");
      this.playerElIngest_ && (this.playerElIngest_ = null);
      this.tag && (this.tag = null);
      ix[this.id()] = null;
      t3.names.forEach(e => {
        (e = this[t3[e].getterName]()) && e.off && e.off();
      });
      super.dispose({
        restoreEl: this.options_.restoreEl
      });
    }
    createEl() {
      let e = this.tag;
      let t;
      let i = this.playerElIngest_ = e.parentNode && e.parentNode.hasAttribute && e.parentNode.hasAttribute("data-vjs-player");
      let s = "video-js" === this.tag.tagName.toLowerCase();
      i ? t = this.el_ = e.parentNode : s || (t = this.el_ = super.createEl("div"));
      let r = en(e);
      if (s) {
        for (t = this.el_ = e, e = this.tag = document.createElement("video"); t.children.length;) e.appendChild(t.firstChild);
        ee(t, "video-js") || et(t, "video-js");
        t.appendChild(e);
        i = this.playerElIngest_ = t;
        Object.keys(t).forEach(i => {
          try {
            e[i] = t[i];
          } catch (e) { }
        });
      }
      e.setAttribute("tabindex", "-1");
      r.tabindex = "-1";
      O && B && (e.setAttribute("role", "application"), r.role = "application");
      e.removeAttribute("width");
      e.removeAttribute("height");
      "width" in r && delete r.width;
      "height" in r && delete r.height;
      Object.getOwnPropertyNames(r).forEach(function (i) {
        s && "class" === i || t.setAttribute(i, r[i]);
        s && e.setAttribute(i, r[i]);
      });
      e.playerId = e.id;
      e.id += "_html5_api";
      e.className = "vjs-tech";
      (e.player = t.player = this).addClass("vjs-paused");
      !0 !== window.VIDEOJS_NO_DYNAMIC_STYLE && (this.styleEl_ = eD("vjs-styles-dimensions"), n = eb(".vjs-styles-defaults"), (a = eb("head")).insertBefore(this.styleEl_, n ? n.nextSibling : a.firstChild));
      this.fill_ = !1;
      this.fluid_ = !1;
      this.width(this.options_.width);
      this.height(this.options_.height);
      this.fill(this.options_.fill);
      this.fluid(this.options_.fluid);
      this.aspectRatio(this.options_.aspectRatio);
      this.crossOrigin(this.options_.crossOrigin || this.options_.crossorigin);
      var n;
      var a;
      var o = e.getElementsByTagName("a");
      for (let e = 0; e < o.length; e++) {
        var l = o.item(e);
        et(l, "vjs-hidden");
        l.setAttribute("hidden", "hidden");
      }
      e.initNetworkState_ = e.networkState;
      e.parentNode && !i && e.parentNode.insertBefore(t, e);
      Z(e, t);
      this.children_.unshift(e);
      this.el_.setAttribute("lang", this.language_);
      this.el_.setAttribute("translate", "no");
      return this.el_ = t;
    }
    crossOrigin(e) {
      if (void 0 === e) return this.techGet_("crossOrigin");
      null !== e && "anonymous" !== e && "use-credentials" !== e ? g.warn(`crossOrigin must be null,  "anonymous" or "use-credentials", given "${e}"`) : (this.techCall_("setCrossOrigin", e), this.posterImage && this.posterImage.crossOrigin(e));
    }
    width(e) {
      return this.dimension("width", e);
    }
    height(e) {
      return this.dimension("height", e);
    }
    dimension(e, t) {
      var i;
      var s = e + "_";
      if (void 0 === t) return this[s] || 0;
      "" === t || "auto" === t ? (this[s] = void 0, this.updateStyleEl_()) : isNaN(i = parseFloat(t)) ? g.error(`Improper value "${t}" supplied for for ` + e) : (this[s] = i, this.updateStyleEl_());
    }
    fluid(e) {
      var t;
      if (void 0 === e) return !!this.fluid_;
      this.fluid_ = !!e;
      eY(this) && this.off(["playerreset", "resize"], this.boundUpdateStyleEl_);
      e ? (this.addClass("vjs-fluid"), this.fill(!1), e = this, t = () => {
        this.on(["playerreset", "resize"], this.boundUpdateStyleEl_);
      }, eY(e) ? t() : (e.eventedCallbacks || (e.eventedCallbacks = []), e.eventedCallbacks.push(t))) : this.removeClass("vjs-fluid");
      this.updateStyleEl_();
    }
    fill(e) {
      if (void 0 === e) return !!this.fill_;
      this.fill_ = !!e;
      e ? (this.addClass("vjs-fill"), this.fluid(!1)) : this.removeClass("vjs-fill");
    }
    aspectRatio(e) {
      if (void 0 === e) return this.aspectRatio_;
      if (!/^\d+\:\d+$/.test(e)) throw Error("Improper value supplied for aspect ratio. The format should be width:height, for example 16:9.");
      this.aspectRatio_ = e;
      this.fluid(!0);
      this.updateStyleEl_();
    }
    updateStyleEl_() {
      if (!0 === window.VIDEOJS_NO_DYNAMIC_STYLE) {
        let t = "number" == typeof this.width_ ? this.width_ : this.options_.width;
        let i = "number" == typeof this.height_ ? this.height_ : this.options_.height;
        var e = this.tech_ && this.tech_.el();
        e && (0 <= t && (e.width = t), 0 <= i) && (e.height = i);
      } else {
        let t;
        let i;
        let s;
        e = (e = (void 0 !== this.aspectRatio_ && "auto" !== this.aspectRatio_ ? this.aspectRatio_ : 0 < this.videoWidth() ? this.videoWidth() + ":" + this.videoHeight() : "16:9").split(":"))[1] / e[0];
        t = void 0 !== this.width_ ? this.width_ : void 0 !== this.height_ ? this.height_ / e : this.videoWidth() || 300;
        i = void 0 !== this.height_ ? this.height_ : t * e;
        s = /^[^a-zA-Z]/.test(this.id()) ? "dimensions-" + this.id() : this.id() + "-dimensions";
        this.addClass(s);
        eL(this.styleEl_, `
      .${s} {
        width: ${t}px;
        height: ${i}px;
      }

      .${s}.vjs-fluid:not(.vjs-audio-only-mode) {
        padding-top: ${100 * e}%;
      }
    `);
      }
    }
    loadTech_(e, t) {
      this.tech_ && this.unloadTech_();
      var i;
      var s;
      var r = e7(e);
      var n = e.charAt(0).toLowerCase() + e.slice(1);
      "Html5" !== r && this.tag && (iC.getTech("Html5").disposeMediaElement(this.tag), this.tag.player = null, this.tag = null);
      this.techName_ = r;
      this.isReady_ = !1;
      let a = this.autoplay();
      let o = {
        source: t,
        autoplay: a = "string" != typeof this.autoplay() && (!0 !== this.autoplay() || !this.options_.normalizeAutoplay) && a,
        nativeControlsForTouch: this.options_.nativeControlsForTouch,
        playerId: this.id(),
        techId: this.id() + `_${n}_api`,
        playsinline: this.options_.playsinline,
        preload: this.options_.preload,
        loop: this.options_.loop,
        disablePictureInPicture: this.options_.disablePictureInPicture,
        muted: this.options_.muted,
        poster: this.poster(),
        language: this.language(),
        playerElIngest: this.playerElIngest_ || !1,
        "vtt.js": this.options_["vtt.js"],
        canOverridePoster: !!this.options_.techCanOverridePoster,
        enableSourceset: this.options_.enableSourceset
      };
      if (t3.names.forEach(e => {
        o[(e = t3[e]).getterName] = this[e.privateName];
      }), Object.assign(o, this.options_[r]), Object.assign(o, this.options_[n]), Object.assign(o, this.options_[e.toLowerCase()]), this.tag && (o.tag = this.tag), t && t.src === this.cache_.src && 0 < this.cache_.currentTime && (o.startTime = this.cache_.currentTime), !(n = iC.getTech(e))) throw Error(`No Tech named '${r}' exists! '${r}' should be registered using videojs.registerTech()'`);
      this.tech_ = new n(o);
      this.tech_.ready(e$(this, this.handleTechReady_), !0);
      i = this.textTracksJson_ || [];
      s = this.tech_;
      i.forEach(function (e) {
        let t = s.addRemoteTextTrack(e).track;
        !e.src && e.cues && e.cues.forEach(e => t.addCue(e));
      });
      s.textTracks();
      sz.forEach(e => {
        this.on(this.tech_, e, t => this[`handleTech${e7(e)}_`](t));
      });
      Object.keys(sW).forEach(e => {
        this.on(this.tech_, e, t => {
          0 === this.tech_.playbackRate() && this.tech_.seeking() ? this.queuedCallbacks_.push({
            callback: this[`handleTech${sW[e]}_`].bind(this),
            event: t
          }) : this[`handleTech${sW[e]}_`](t);
        });
      });
      this.on(this.tech_, "loadstart", e => this.handleTechLoadStart_(e));
      this.on(this.tech_, "sourceset", e => this.handleTechSourceset_(e));
      this.on(this.tech_, "waiting", e => this.handleTechWaiting_(e));
      this.on(this.tech_, "ended", e => this.handleTechEnded_(e));
      this.on(this.tech_, "seeking", e => this.handleTechSeeking_(e));
      this.on(this.tech_, "play", e => this.handleTechPlay_(e));
      this.on(this.tech_, "pause", e => this.handleTechPause_(e));
      this.on(this.tech_, "durationchange", e => this.handleTechDurationChange_(e));
      this.on(this.tech_, "fullscreenchange", (e, t) => this.handleTechFullscreenChange_(e, t));
      this.on(this.tech_, "fullscreenerror", (e, t) => this.handleTechFullscreenError_(e, t));
      this.on(this.tech_, "enterpictureinpicture", e => this.handleTechEnterPictureInPicture_(e));
      this.on(this.tech_, "leavepictureinpicture", e => this.handleTechLeavePictureInPicture_(e));
      this.on(this.tech_, "error", e => this.handleTechError_(e));
      this.on(this.tech_, "posterchange", e => this.handleTechPosterChange_(e));
      this.on(this.tech_, "textdata", e => this.handleTechTextData_(e));
      this.on(this.tech_, "ratechange", e => this.handleTechRateChange_(e));
      this.on(this.tech_, "loadedmetadata", this.boundUpdateStyleEl_);
      this.usingNativeControls(this.techGet_("controls"));
      this.controls() && !this.usingNativeControls() && this.addTechControlsListeners_();
      this.tech_.el().parentNode === this.el() || "Html5" === r && this.tag || Z(this.tech_.el(), this.el());
      this.tag && (this.tag.player = null, this.tag = null);
    }
    unloadTech_() {
      t3.names.forEach(e => {
        this[(e = t3[e]).privateName] = this[e.getterName]();
      });
      this.textTracksJson_ = tb(this.tech_);
      this.isReady_ = !1;
      this.tech_.dispose();
      this.tech_ = !1;
      this.isPosterFromTech_ && (this.poster_ = "", this.trigger("posterchange"));
      this.isPosterFromTech_ = !1;
    }
    tech(e) {
      void 0 === e && g.warn("Using the tech directly can be dangerous. I hope you know what you're doing.\nSee https://github.com/videojs/video.js/issues/2617 for more info.\n");
      return this.tech_;
    }
    version() {
      return {
        "video.js": a
      };
    }
    addTechControlsListeners_() {
      this.removeTechControlsListeners_();
      this.on(this.tech_, "click", this.boundHandleTechClick_);
      this.on(this.tech_, "dblclick", this.boundHandleTechDoubleClick_);
      this.on(this.tech_, "touchstart", this.boundHandleTechTouchStart_);
      this.on(this.tech_, "touchmove", this.boundHandleTechTouchMove_);
      this.on(this.tech_, "touchend", this.boundHandleTechTouchEnd_);
      this.on(this.tech_, "tap", this.boundHandleTechTap_);
    }
    removeTechControlsListeners_() {
      this.off(this.tech_, "tap", this.boundHandleTechTap_);
      this.off(this.tech_, "touchstart", this.boundHandleTechTouchStart_);
      this.off(this.tech_, "touchmove", this.boundHandleTechTouchMove_);
      this.off(this.tech_, "touchend", this.boundHandleTechTouchEnd_);
      this.off(this.tech_, "click", this.boundHandleTechClick_);
      this.off(this.tech_, "dblclick", this.boundHandleTechDoubleClick_);
    }
    handleTechReady_() {
      this.triggerReady();
      this.cache_.volume && this.techCall_("setVolume", this.cache_.volume);
      this.handleTechPosterChange_();
      this.handleTechDurationChange_();
    }
    handleTechLoadStart_() {
      this.removeClass("vjs-ended", "vjs-seeking");
      this.error(null);
      this.handleTechDurationChange_();
      this.paused() && this.hasStarted(!1);
      this.trigger("loadstart");
      this.manualAutoplay_(!0 === this.autoplay() && this.options_.normalizeAutoplay ? "play" : this.autoplay());
    }
    manualAutoplay_(e) {
      if (this.tech_ && "string" == typeof e) {
        let i;
        var t = () => {
          let e = this.muted();
          this.muted(!0);
          let t = () => {
            this.muted(e);
          };
          this.playTerminatedQueue_.push(t);
          var i = this.play();
          if (ty(i)) return i.catch(e => {
            t();
            return Error("Rejection at manualAutoplay. Restoring muted value. " + (e || ""));
          });
        };
        if ("any" !== e || this.muted() ? i = "muted" !== e || this.muted() ? this.play() : t() : ty(i = this.play()) && (i = i.catch(t)), ty(i)) return i.then(() => {
          this.trigger({
            type: "autoplay-success",
            autoplay: e
          });
        }).catch(() => {
          this.trigger({
            type: "autoplay-failure",
            autoplay: e
          });
        });
      }
    }
    updateSourceCaches_(e = "") {
      let t = e;
      let i = "";
      "string" != typeof t && (t = e.src, i = e.type);
      this.cache_.source = this.cache_.source || {};
      this.cache_.sources = this.cache_.sources || [];
      t && !i && (i = ((e, t) => {
        if (!t) return "";
        if (e.cache_.source.src === t && e.cache_.source.type) return e.cache_.source.type;
        var i = e.cache_.sources.filter(e => e.src === t);
        if (i.length) return i[0].type;
        var s = e.$$("source");
        for (let e = 0; e < s.length; e++) {
          var r = s[e];
          if (r.type && r.src && r.src === t) return r.type;
        }
        return iR(t);
      })(this, t));
      this.cache_.source = S({}, e, {
        src: t,
        type: i
      });
      var e = this.cache_.sources.filter(e => e.src && e.src === t);
      var s = [];
      var r = this.$$("source");
      var n = [];
      for (let e = 0; e < r.length; e++) {
        var a = en(r[e]);
        s.push(a);
        a.src && a.src === t && n.push(a.src);
      }
      n.length && !e.length ? this.cache_.sources = s : e.length || (this.cache_.sources = [this.cache_.source]);
      this.cache_.src = t;
    }
    handleTechSourceset_(e) {
      if (!this.changingSrc_) {
        let s = e => this.updateSourceCaches_(e);
        var t = this.currentSource().src;
        var i = e.src;
        (s = !t || /^blob:/.test(t) || !/^blob:/.test(i) || this.lastSource_ && (this.lastSource_.tech === i || this.lastSource_.player === t) ? s : () => { })(i);
        e.src || this.tech_.any(["sourceset", "loadstart"], e => {
          "sourceset" !== e.type && (e = this.techGet_("currentSrc"), this.lastSource_.tech = e, this.updateSourceCaches_(e));
        });
      }
      this.lastSource_ = {
        player: this.currentSource().src,
        tech: e.src
      };
      this.trigger({
        src: e.src,
        type: "sourceset"
      });
    }
    hasStarted(e) {
      if (void 0 === e) return this.hasStarted_;
      e !== this.hasStarted_ && (this.hasStarted_ = e, this.hasStarted_ ? this.addClass("vjs-has-started") : this.removeClass("vjs-has-started"));
    }
    handleTechPlay_() {
      this.removeClass("vjs-ended", "vjs-paused");
      this.addClass("vjs-playing");
      this.hasStarted(!0);
      this.trigger("play");
    }
    handleTechRateChange_() {
      0 < this.tech_.playbackRate() && 0 === this.cache_.lastPlaybackRate && (this.queuedCallbacks_.forEach(e => e.callback(e.event)), this.queuedCallbacks_ = []);
      this.cache_.lastPlaybackRate = this.tech_.playbackRate();
      this.trigger("ratechange");
    }
    handleTechWaiting_() {
      this.addClass("vjs-waiting");
      this.trigger("waiting");
      let e = this.currentTime();
      let t = () => {
        e !== this.currentTime() && (this.removeClass("vjs-waiting"), this.off("timeupdate", t));
      };
      this.on("timeupdate", t);
    }
    handleTechCanPlay_() {
      this.removeClass("vjs-waiting");
      this.trigger("canplay");
    }
    handleTechCanPlayThrough_() {
      this.removeClass("vjs-waiting");
      this.trigger("canplaythrough");
    }
    handleTechPlaying_() {
      this.removeClass("vjs-waiting");
      this.trigger("playing");
    }
    handleTechSeeking_() {
      this.addClass("vjs-seeking");
      this.trigger("seeking");
    }
    handleTechSeeked_() {
      this.removeClass("vjs-seeking", "vjs-ended");
      this.trigger("seeked");
    }
    handleTechPause_() {
      this.removeClass("vjs-playing");
      this.addClass("vjs-paused");
      this.trigger("pause");
    }
    handleTechEnded_() {
      this.addClass("vjs-ended");
      this.removeClass("vjs-waiting");
      this.options_.loop ? (this.currentTime(0), this.play()) : this.paused() || this.pause();
      this.trigger("ended");
    }
    handleTechDurationChange_() {
      this.duration(this.techGet_("duration"));
    }
    handleTechClick_(e) {
      this.controls_ && (void 0 === this.options_ || void 0 === this.options_.userActions || void 0 === this.options_.userActions.click || !1 !== this.options_.userActions.click) && (void 0 !== this.options_ && void 0 !== this.options_.userActions && "function" == typeof this.options_.userActions.click ? this.options_.userActions.click.call(this, e) : this.paused() ? t_(this.play()) : this.pause());
    }
    handleTechDoubleClick_(e) {
      !this.controls_ || Array.prototype.some.call(this.$$(".vjs-control-bar, .vjs-modal-dialog"), t => t.contains(e.target)) || void 0 !== this.options_ && void 0 !== this.options_.userActions && void 0 !== this.options_.userActions.doubleClick && !1 === this.options_.userActions.doubleClick || (void 0 !== this.options_ && void 0 !== this.options_.userActions && "function" == typeof this.options_.userActions.doubleClick ? this.options_.userActions.doubleClick.call(this, e) : this.isFullscreen() ? this.exitFullscreen() : this.requestFullscreen());
    }
    handleTechTap_() {
      this.userActive(!this.userActive());
    }
    handleTechTouchStart_() {
      this.userWasActive = this.userActive();
    }
    handleTechTouchMove_() {
      this.userWasActive && this.reportUserActivity();
    }
    handleTechTouchEnd_(e) {
      e.cancelable && e.preventDefault();
    }
    toggleFullscreenClass_() {
      this.isFullscreen() ? this.addClass("vjs-fullscreen") : this.removeClass("vjs-fullscreen");
    }
    documentFullscreenChange_(e) {
      if (!(e = e.target.player) || e === this) {
        e = this.el();
        let t = document[this.fsApi_.fullscreenElement] === e;
        !t && e.matches && (t = e.matches(":" + this.fsApi_.fullscreen));
        this.isFullscreen(t);
      }
    }
    handleTechFullscreenChange_(e, t) {
      t && (t.nativeIOSFullscreen && (this.addClass("vjs-ios-native-fs"), this.tech_.one("webkitendfullscreen", () => {
        this.removeClass("vjs-ios-native-fs");
      })), this.isFullscreen(t.isFullscreen));
    }
    handleTechFullscreenError_(e, t) {
      this.trigger("fullscreenerror", t);
    }
    togglePictureInPictureClass_() {
      this.isInPictureInPicture() ? this.addClass("vjs-picture-in-picture") : this.removeClass("vjs-picture-in-picture");
    }
    handleTechEnterPictureInPicture_(e) {
      this.isInPictureInPicture(!0);
    }
    handleTechLeavePictureInPicture_(e) {
      this.isInPictureInPicture(!1);
    }
    handleTechError_() {
      var e = this.tech_.error();
      e && this.error(e);
    }
    handleTechTextData_() {
      let e = 1 < $$arguments.length ? $$arguments[1] : null;
      this.trigger("textdata", e);
    }
    getCache() {
      return this.cache_;
    }
    resetCache_() {
      this.cache_ = {
        currentTime: 0,
        initTime: 0,
        inactivityTimeout: this.options_.inactivityTimeout,
        duration: NaN,
        lastVolume: 1,
        lastPlaybackRate: this.defaultPlaybackRate(),
        media: null,
        src: "",
        source: {},
        sources: [],
        playbackRates: [],
        volume: 1
      };
    }
    techCall_(e, t) {
      this.ready(function () {
        var i;
        if (e in iL) {
          i = this.middleware_;
          return this.tech_[e](i.reduce(iO(e), t));
        }
        if (e in iP) return iA(this.middleware_, this.tech_, e, t);
        try {
          this.tech_ && this.tech_[e](t);
        } catch (e) {
          g(e);
          return e;
        }
      }, !0);
    }
    techGet_(e) {
      if (this.tech_ && this.tech_.isReady_) {
        var t;
        var i;
        if (e in iD) {
          t = this.middleware_;
          i = this.tech_;
          return t.reduceRight(iO(e), i[e]());
        }
        if (e in iP) return iA(this.middleware_, this.tech_, e);
        try {
          return this.tech_[e]();
        } catch (t) {
          void 0 === this.tech_[e] ? g(`Video.js: ${e} method not defined for ${this.techName_} playback technology.`, t) : "TypeError" === t.name ? (g(`Video.js: ${e} unavailable on ${this.techName_} playback technology element.`, t), this.tech_.isReady_ = !1) : g(t);
          return t;
        }
      }
    }
    play() {
      return new Promise(e => {
        this.play_(e);
      });
    }
    play_(e = t_) {
      this.playCallbacks_.push(e);
      var t;
      var e = !!(!this.changingSrc_ && (this.src() || this.currentSrc()));
      var i = !!(z || $);
      this.waitToPlay_ && (this.off(["ready", "loadstart"], this.waitToPlay_), this.waitToPlay_ = null);
      this.isReady_ && e ? (t = this.techGet_("play"), i && this.hasClass("vjs-ended") && this.resetProgressBar_(), null === t ? this.runPlayTerminatedQueue_() : this.runPlayCallbacks_(t)) : (this.waitToPlay_ = e => {
        this.play_();
      }, this.one(["ready", "loadstart"], this.waitToPlay_), !e && i && this.load());
    }
    runPlayTerminatedQueue_() {
      var e = this.playTerminatedQueue_.slice(0);
      this.playTerminatedQueue_ = [];
      e.forEach(function (e) {
        e();
      });
    }
    runPlayCallbacks_(e) {
      var t = this.playCallbacks_.slice(0);
      this.playCallbacks_ = [];
      this.playTerminatedQueue_ = [];
      t.forEach(function (t) {
        t(e);
      });
    }
    pause() {
      this.techCall_("pause");
    }
    paused() {
      return !1 !== this.techGet_("paused");
    }
    played() {
      return this.techGet_("played") || to(0, 0);
    }
    scrubbing(e) {
      if (void 0 === e) return this.scrubbing_;
      this.scrubbing_ = !!e;
      this.techCall_("setScrubbing", this.scrubbing_);
      e ? this.addClass("vjs-scrubbing") : this.removeClass("vjs-scrubbing");
    }
    currentTime(e) {
      if (void 0 === e) {
        this.cache_.currentTime = this.techGet_("currentTime") || 0;
        return this.cache_.currentTime;
      }
      e < 0 && (e = 0);
      this.isReady_ && !this.changingSrc_ && this.tech_ && this.tech_.isReady_ ? (this.techCall_("setCurrentTime", e), this.cache_.initTime = 0, isFinite(e) && (this.cache_.currentTime = Number(e))) : (this.cache_.initTime = e, this.off("canplay", this.boundApplyInitTime_), this.one("canplay", this.boundApplyInitTime_));
    }
    applyInitTime_() {
      this.currentTime(this.cache_.initTime);
    }
    duration(e) {
      if (void 0 === e) return void 0 !== this.cache_.duration ? this.cache_.duration : NaN;
      (e = (e = parseFloat(e)) < 0 ? 1 / 0 : e) !== this.cache_.duration && ((this.cache_.duration = e) === 1 / 0 ? this.addClass("vjs-live") : this.removeClass("vjs-live"), isNaN(e) || this.trigger("durationchange"));
    }
    remainingTime() {
      return this.duration() - this.currentTime();
    }
    remainingTimeDisplay() {
      return Math.floor(this.duration()) - Math.floor(this.currentTime());
    }
    buffered() {
      let e = this.techGet_("buffered");
      return e && e.length ? e : to(0, 0);
    }
    seekable() {
      let e = this.techGet_("seekable");
      return e && e.length ? e : to(0, 0);
    }
    seeking() {
      return this.techGet_("seeking");
    }
    ended() {
      return this.techGet_("ended");
    }
    networkState() {
      return this.techGet_("networkState");
    }
    readyState() {
      return this.techGet_("readyState");
    }
    bufferedPercent() {
      return tm(this.buffered(), this.duration());
    }
    bufferedEnd() {
      var e = this.buffered();
      var t = this.duration();
      let i = e.end(e.length - 1);
      return i > t ? t : i;
    }
    volume(e) {
      let t;
      if (void 0 === e) return isNaN(t = parseFloat(this.techGet_("volume"))) ? 1 : t;
      t = Math.max(0, Math.min(1, e));
      this.cache_.volume = t;
      this.techCall_("setVolume", t);
      0 < t && this.lastVolume_(t);
    }
    muted(e) {
      if (void 0 === e) return this.techGet_("muted") || !1;
      this.techCall_("setMuted", e);
    }
    defaultMuted(e) {
      void 0 !== e && this.techCall_("setDefaultMuted", e);
      return this.techGet_("defaultMuted") || !1;
    }
    lastVolume_(e) {
      if (void 0 === e || 0 === e) return this.cache_.lastVolume;
      this.cache_.lastVolume = e;
    }
    supportsFullScreen() {
      return this.techGet_("supportsFullScreen") || !1;
    }
    isFullscreen(e) {
      var t;
      if (void 0 === e) return this.isFullscreen_;
      t = this.isFullscreen_;
      this.isFullscreen_ = !!e;
      this.isFullscreen_ !== t && this.fsApi_.prefixed && this.trigger("fullscreenchange");
      this.toggleFullscreenClass_();
    }
    requestFullscreen(e) {
      this.isInPictureInPicture() && this.exitPictureInPicture();
      let t = this;
      return new Promise((i, s) => {
        function r() {
          t.off("fullscreenerror", a);
          t.off("fullscreenchange", n);
        }
        function n() {
          r();
          i();
        }
        function a(e, t) {
          r();
          s(t);
        }
        t.one("fullscreenchange", n);
        t.one("fullscreenerror", a);
        var o = t.requestFullscreenHelper_(e);
        o && (o.then(r, r), o.then(i, s));
      });
    }
    requestFullscreenHelper_(e) {
      let t;
      if (this.fsApi_.prefixed || (t = this.options_.fullscreen && this.options_.fullscreen.options || {}, void 0 !== e && (t = e)), this.fsApi_.requestFullscreen) {
        (e = this.el_[this.fsApi_.requestFullscreen](t)) && e.then(() => this.isFullscreen(!0), () => this.isFullscreen(!1));
        return e;
      }
      this.tech_.supportsFullScreen() && !0 == !this.options_.preferFullWindow ? this.techCall_("enterFullScreen") : this.enterFullWindow();
    }
    exitFullscreen() {
      let e = this;
      return new Promise((t, i) => {
        function s() {
          e.off("fullscreenerror", n);
          e.off("fullscreenchange", r);
        }
        function r() {
          s();
          t();
        }
        function n(e, t) {
          s();
          i(t);
        }
        e.one("fullscreenchange", r);
        e.one("fullscreenerror", n);
        var a = e.exitFullscreenHelper_();
        a && (a.then(s, s), a.then(t, i));
      });
    }
    exitFullscreenHelper_() {
      var e;
      if (this.fsApi_.requestFullscreen) {
        (e = document[this.fsApi_.exitFullscreen]()) && t_(e.then(() => this.isFullscreen(!1)));
        return e;
      }
      this.tech_.supportsFullScreen() && !0 == !this.options_.preferFullWindow ? this.techCall_("exitFullScreen") : this.exitFullWindow();
    }
    enterFullWindow() {
      this.isFullscreen(!0);
      this.isFullWindow = !0;
      this.docOrigOverflow = document.documentElement.style.overflow;
      eB(document, "keydown", this.boundFullWindowOnEscKey_);
      document.documentElement.style.overflow = "hidden";
      et(document.body, "vjs-full-window");
      this.trigger("enterFullWindow");
    }
    fullWindowOnEscKey(e) {
      ts.isEventKey(e, "Esc") && !0 === this.isFullscreen() && (this.isFullWindow ? this.exitFullWindow() : this.exitFullscreen());
    }
    exitFullWindow() {
      this.isFullscreen(!1);
      this.isFullWindow = !1;
      eF(document, "keydown", this.boundFullWindowOnEscKey_);
      document.documentElement.style.overflow = this.docOrigOverflow;
      ei(document.body, "vjs-full-window");
      this.trigger("exitFullWindow");
    }
    disablePictureInPicture(e) {
      if (void 0 === e) return this.techGet_("disablePictureInPicture");
      this.techCall_("setDisablePictureInPicture", e);
      this.options_.disablePictureInPicture = e;
      this.trigger("disablepictureinpicturechanged");
    }
    isInPictureInPicture(e) {
      if (void 0 === e) return !!this.isInPictureInPicture_;
      this.isInPictureInPicture_ = !!e;
      this.togglePictureInPictureClass_();
    }
    requestPictureInPicture() {
      if (this.options_.enableDocumentPictureInPicture && window.documentPictureInPicture) {
        let e = document.createElement(this.el().tagName);
        e.classList = this.el().classList;
        e.classList.add("vjs-pip-container");
        this.posterImage && e.appendChild(this.posterImage.el().cloneNode(!0));
        this.titleBar && e.appendChild(this.titleBar.el().cloneNode(!0));
        e.appendChild(Q("p", {
          className: "vjs-pip-text"
        }, {}, this.localize("Playing in picture-in-picture")));
        return window.documentPictureInPicture.requestWindow({
          width: this.videoWidth(),
          height: this.videoHeight()
        }).then(t => (ew(t), this.el_.parentNode.insertBefore(e, this.el_), t.document.body.appendChild(this.el_), t.document.body.classList.add("vjs-pip-window"), this.player_.isInPictureInPicture(!0), this.player_.trigger("enterpictureinpicture"), t.addEventListener("pagehide", t => {
          t = t.target.querySelector(".video-js");
          e.parentNode.replaceChild(t, e);
          this.player_.isInPictureInPicture(!1);
          this.player_.trigger("leavepictureinpicture");
        }), t));
      }
      return "pictureInPictureEnabled" in document && !1 === this.disablePictureInPicture() ? this.techGet_("requestPictureInPicture") : Promise.reject("No PiP mode is available");
    }
    exitPictureInPicture() {
      return window.documentPictureInPicture && window.documentPictureInPicture.window ? (window.documentPictureInPicture.window.close(), Promise.resolve()) : "pictureInPictureEnabled" in document ? document.exitPictureInPicture() : void 0;
    }
    handleKeyDown(e) {
      var t;
      var i;
      var s = this.options_.userActions;
      s && s.hotkeys && (i = (t = this.el_.ownerDocument.activeElement).tagName.toLowerCase(), t.isContentEditable || ("input" === i ? -1 === ["button", "checkbox", "hidden", "radio", "reset", "submit"].indexOf(t.type) : -1 !== ["textarea"].indexOf(i)) || ("function" == typeof s.hotkeys ? s.hotkeys.call(this, e) : this.handleHotkeys(e)));
    }
    handleHotkeys(e) {
      var {
        fullscreenKey = e => ts.isEventKey(e, "f"),
        muteKey = e => ts.isEventKey(e, "m"),
        playPauseKey = e => ts.isEventKey(e, "k") || ts.isEventKey(e, "Space")
      } = this.options_.userActions ? this.options_.userActions.hotkeys : {};
      fullscreenKey.call(this, e) ? (e.preventDefault(), e.stopPropagation(), t = tr.getComponent("FullscreenToggle"), !1 !== document[this.fsApi_.fullscreenEnabled] && fullscreenKey.prototype.handleClick.call(this, e)) : muteKey.call(this, e) ? (e.preventDefault(), e.stopPropagation(), tr.getComponent("MuteToggle").prototype.handleClick.call(this, e)) : playPauseKey.call(this, e) && (e.preventDefault(), e.stopPropagation(), tr.getComponent("PlayToggle").prototype.handleClick.call(this, e));
    }
    canPlayType(e) {
      var _this5 = this;
      var t;
      for (function () {
        let s = 0;
        let r = _this5.options_.techOrder;
      }(); s < r.length; s++) {
        var i = r[s];
        let n = iC.getTech(i);
        if (n = n || tr.getComponent(i)) {
          if (n.isSupported() && (t = n.canPlayType(e))) return t;
        } else g.error(`The "${i}" tech is undefined. Skipped browser support check for that tech.`);
      }
      return "";
    }
    selectSource(e) {
      function t(e, t, i) {
        let s;
        e.some(e => t.some(t => {
          if (s = i(e, t)) return !0;
        }));
        return s;
      }
      var i = this.options_.techOrder.map(e => [e, iC.getTech(e)]).filter(([e, t]) => t ? t.isSupported() : (g.error(`The "${e}" tech is undefined. Skipped browser support check for that tech.`), !1));
      var s = ([e, t], i) => {
        if (t.canPlaySource(i, this.options_[e.toLowerCase()])) return {
          source: i,
          tech: e
        };
      };
      return (this.options_.sourceOrder ? t(e, i, (e, t) => s(t, e)) : t(i, e, s)) || !1;
    }
    handleSrc_(e, t) {
      if (void 0 === e) return this.cache_.src || "";
      this.resetRetryOnError_ && this.resetRetryOnError_();
      let i = function e(t) {
        if (Array.isArray(t)) {
          let i = [];
          t.forEach(function (t) {
            Array.isArray(t = e(t)) ? i = i.concat(t) : b(t) && i.push(t);
          });
          t = i;
        } else t = "string" == typeof t && t.trim() ? [iM({
          src: t
        })] : b(t) && "string" == typeof t.src && t.src && t.src.trim() ? [iM(t)] : [];
        return t;
      }(e);
      if (i.length) {
        if (this.changingSrc_ = !0, t || (this.cache_.sources = i), this.updateSourceCaches_(i[0]), function (e, t, i) {
          e.setTimeout(() => function e(t = {}, i = [], s, r, n = [], a = !1) {
            let [o, ...l] = i;
            if ("string" == typeof o) e(t, ik[o], s, r, n, a); else if (o) {
              let i = function (e, t) {
                var i = ix[e.id()];
                let s = null;
                if (null == i) {
                  s = t(e);
                  ix[e.id()] = [[t, s]];
                } else {
                  for (let e = 0; e < i.length; e++) {
                    var [r, n] = i[e];
                    r === t && (s = n);
                  }
                  null === s && (s = t(e), i.push([t, s]));
                }
                return s;
              }(r, o);
              if (!i.setSource) {
                n.push(i);
                return e(t, l, s, r, n, a);
              }
              i.setSource(Object.assign({}, t), function (o, h) {
                if (o) return e(t, l, s, r, n, a);
                n.push(i);
                e(h, t.type === h.type ? l : ik[h.type], s, r, n, a);
              });
            } else l.length ? e(t, l, s, r, n, a) : a ? s(t, n) : e(t, ik["*"], s, r, n, !0);
          }(t, ik[t.type], i, e), 1);
        }(this, i[0], (e, s) => {
          var r;
          if (this.middleware_ = s, t || (this.cache_.sources = i), this.updateSourceCaches_(e), this.src_(e)) return 1 < i.length ? this.handleSrc_(i.slice(1)) : (this.changingSrc_ = !1, this.setTimeout(function () {
            this.error({
              code: 4,
              message: this.options_.notSupportedMessage
            });
          }, 0), void this.triggerReady());
          r = this.tech_;
          s.forEach(e => e.setTech && e.setTech(r));
        }), 1 < i.length) {
          let e = () => {
            this.error(null);
            this.handleSrc_(i.slice(1), !0);
          };
          let t = () => {
            this.off("error", e);
          };
          this.one("error", e);
          this.one("playing", t);
          this.resetRetryOnError_ = () => {
            this.off("error", e);
            this.off("playing", t);
          };
        }
      } else this.setTimeout(function () {
        this.error({
          code: 4,
          message: this.options_.notSupportedMessage
        });
      }, 0);
    }
    src(e) {
      return this.handleSrc_(e, !1);
    }
    src_(e) {
      var t = this.selectSource([e]);
      return !t || (e9(t.tech, this.techName_) ? this.ready(function () {
        this.tech_.constructor.prototype.hasOwnProperty("setSource") ? this.techCall_("setSource", e) : this.techCall_("src", e.src);
        this.changingSrc_ = !1;
      }, !0) : (this.changingSrc_ = !0, this.loadTech_(t.tech, t.source), this.tech_.ready(() => {
        this.changingSrc_ = !1;
      })), !1);
    }
    load() {
      this.tech_ && this.tech_.vhs ? this.src(this.currentSource()) : this.techCall_("load");
    }
    reset() {
      this.paused() ? this.doReset_() : t_(this.play().then(() => this.doReset_()));
    }
    doReset_() {
      this.tech_ && this.tech_.clearTracks("text");
      this.removeClass("vjs-playing");
      this.addClass("vjs-paused");
      this.resetCache_();
      this.poster("");
      this.loadTech_(this.options_.techOrder[0], null);
      this.techCall_("reset");
      this.resetControlBarUI_();
      this.error(null);
      this.titleBar && this.titleBar.update({
        title: void 0,
        description: void 0
      });
      eY(this) && this.trigger("playerreset");
    }
    resetControlBarUI_() {
      this.resetProgressBar_();
      this.resetPlaybackRate_();
      this.resetVolumeBar_();
    }
    resetProgressBar_() {
      this.currentTime(0);
      var {
        currentTimeDisplay,
        durationDisplay,
        progressControl,
        remainingTimeDisplay
      } = this.controlBar || {};
      var i = (progressControl || {}).seekBar;
      currentTimeDisplay && currentTimeDisplay.updateContent();
      durationDisplay && durationDisplay.updateContent();
      remainingTimeDisplay && remainingTimeDisplay.updateContent();
      progressControl && (progressControl.update(), progressControl.loadProgressBar) && progressControl.loadProgressBar.update();
    }
    resetPlaybackRate_() {
      this.playbackRate(this.defaultPlaybackRate());
      this.handleTechRateChange_();
    }
    resetVolumeBar_() {
      this.volume(1);
      this.trigger("volumechange");
    }
    currentSources() {
      var e = this.currentSource();
      var t = [];
      0 !== Object.keys(e).length && t.push(e);
      return this.cache_.sources || t;
    }
    currentSource() {
      return this.cache_.source || {};
    }
    currentSrc() {
      return this.currentSource() && this.currentSource().src || "";
    }
    currentType() {
      return this.currentSource() && this.currentSource().type || "";
    }
    preload(e) {
      if (void 0 === e) return this.techGet_("preload");
      this.techCall_("setPreload", e);
      this.options_.preload = e;
    }
    autoplay(e) {
      let t;
      if (void 0 === e) return this.options_.autoplay || !1;
      "string" == typeof e && /(any|play|muted)/.test(e) || !0 === e && this.options_.normalizeAutoplay ? (this.options_.autoplay = e, this.manualAutoplay_("string" == typeof e ? e : "play"), t = !1) : this.options_.autoplay = !!e;
      t = void 0 === t ? this.options_.autoplay : t;
      this.tech_ && this.techCall_("setAutoplay", t);
    }
    playsinline(e) {
      void 0 !== e && (this.techCall_("setPlaysinline", e), this.options_.playsinline = e);
      return this.techGet_("playsinline");
    }
    loop(e) {
      if (void 0 === e) return this.techGet_("loop");
      this.techCall_("setLoop", e);
      this.options_.loop = e;
    }
    poster(e) {
      if (void 0 === e) return this.poster_;
      (e = e || "") !== this.poster_ && (this.poster_ = e, this.techCall_("setPoster", e), this.isPosterFromTech_ = !1, this.trigger("posterchange"));
    }
    handleTechPosterChange_() {
      var e;
      (!this.poster_ || this.options_.techCanOverridePoster) && this.tech_ && this.tech_.poster && (e = this.tech_.poster() || "") !== this.poster_ && (this.poster_ = e, this.isPosterFromTech_ = !0, this.trigger("posterchange"));
    }
    controls(e) {
      if (void 0 === e) return !!this.controls_;
      this.controls_ !== (e = !!e) && (this.controls_ = e, this.usingNativeControls() && this.techCall_("setControls", e), this.controls_ ? (this.removeClass("vjs-controls-disabled"), this.addClass("vjs-controls-enabled"), this.trigger("controlsenabled"), this.usingNativeControls() || this.addTechControlsListeners_()) : (this.removeClass("vjs-controls-enabled"), this.addClass("vjs-controls-disabled"), this.trigger("controlsdisabled"), this.usingNativeControls() || this.removeTechControlsListeners_()));
    }
    usingNativeControls(e) {
      if (void 0 === e) return !!this.usingNativeControls_;
      this.usingNativeControls_ !== (e = !!e) && (this.usingNativeControls_ = e, this.usingNativeControls_ ? (this.addClass("vjs-using-native-controls"), this.trigger("usingnativecontrols")) : (this.removeClass("vjs-using-native-controls"), this.trigger("usingcustomcontrols")));
    }
    error(e) {
      if (void 0 === e) return this.error_ || null;
      if (l("beforeerror").forEach(t => {
        b(t = t(this, e)) && !Array.isArray(t) || "string" == typeof t || "number" == typeof t || null === t ? e = t : this.log.error("please return a value that MediaError expects in beforeerror hooks");
      }), this.options_.suppressNotSupportedError && e && 4 === e.code) {
        let t = function () {
          this.error(e);
        };
        this.options_.suppressNotSupportedError = !1;
        this.any(["click", "touchstart"], t);
        this.one("loadstart", function () {
          this.off(["click", "touchstart"], t);
        });
      } else null === e ? (this.error_ = null, this.removeClass("vjs-error"), this.errorDisplay && this.errorDisplay.close()) : (this.error_ = new tg(e), this.addClass("vjs-error"), g.error(`(CODE:${this.error_.code} ${tg.errorTypes[this.error_.code]})`, this.error_.message, this.error_), this.trigger("error"), l("error").forEach(e => e(this, this.error_)));
    }
    reportUserActivity(e) {
      this.userActivity_ = !0;
    }
    userActive(e) {
      if (void 0 === e) return this.userActive_;
      (e = !!e) !== this.userActive_ && (this.userActive_ = e, this.userActive_ ? (this.userActivity_ = !0, this.removeClass("vjs-user-inactive"), this.addClass("vjs-user-active"), this.trigger("useractive")) : (this.tech_ && this.tech_.one("mousemove", function (e) {
        e.stopPropagation();
        e.preventDefault();
      }), this.userActivity_ = !1, this.removeClass("vjs-user-active"), this.addClass("vjs-user-inactive"), this.trigger("userinactive")));
    }
    listenForUserActivity_() {
      let e;
      let t;
      let i;
      let s;
      let r = e$(this, this.reportUserActivity);
      function n(t) {
        r();
        this.clearInterval(e);
      }
      this.on("mousedown", function () {
        r();
        this.clearInterval(e);
        e = this.setInterval(r, 250);
      });
      this.on("mousemove", function (e) {
        e.screenX === t && e.screenY === i || (t = e.screenX, i = e.screenY, r());
      });
      this.on("mouseup", n);
      this.on("mouseleave", n);
      var a = this.getChild("controlBar");
      !a || $ || I || (a.on("mouseenter", function (e) {
        0 !== this.player().options_.inactivityTimeout && (this.player().cache_.inactivityTimeout = this.player().options_.inactivityTimeout);
        this.player().options_.inactivityTimeout = 0;
      }), a.on("mouseleave", function (e) {
        this.player().options_.inactivityTimeout = this.player().cache_.inactivityTimeout;
      }));
      this.on("keydown", r);
      this.on("keyup", r);
      this.setInterval(function () {
        var e;
        this.userActivity_ && (this.userActivity_ = !1, this.userActive(!0), this.clearTimeout(s), (e = this.options_.inactivityTimeout) <= 0 || (s = this.setTimeout(function () {
          this.userActivity_ || this.userActive(!1);
        }, e)));
      }, 250);
    }
    playbackRate(e) {
      if (void 0 === e) return this.tech_ && this.tech_.featuresPlaybackRate ? this.cache_.lastPlaybackRate || this.techGet_("playbackRate") : 1;
      this.techCall_("setPlaybackRate", e);
    }
    defaultPlaybackRate(e) {
      return void 0 !== e ? this.techCall_("setDefaultPlaybackRate", e) : this.tech_ && this.tech_.featuresPlaybackRate ? this.techGet_("defaultPlaybackRate") : 1;
    }
    isAudio(e) {
      if (void 0 === e) return !!this.isAudio_;
      this.isAudio_ = !!e;
    }
    enableAudioOnlyUI_() {
      this.addClass("vjs-audio-only-mode");
      var e = this.children();
      let t = this.getChild("ControlBar");
      var i = t && t.currentHeight();
      e.forEach(e => {
        e !== t && e.el_ && !e.hasClass("vjs-hidden") && (e.hide(), this.audioOnlyCache_.hiddenChildren.push(e));
      });
      this.audioOnlyCache_.playerHeight = this.currentHeight();
      this.height(i);
      this.trigger("audioonlymodechange");
    }
    disableAudioOnlyUI_() {
      this.removeClass("vjs-audio-only-mode");
      this.audioOnlyCache_.hiddenChildren.forEach(e => e.show());
      this.height(this.audioOnlyCache_.playerHeight);
      this.trigger("audioonlymodechange");
    }
    audioOnlyMode(e) {
      return "boolean" != typeof e || e === this.audioOnlyMode_ ? this.audioOnlyMode_ : (this.audioOnlyMode_ = e) ? (e = [], this.isInPictureInPicture() && e.push(this.exitPictureInPicture()), this.isFullscreen() && e.push(this.exitFullscreen()), this.audioPosterMode() && e.push(this.audioPosterMode(!1)), Promise.all(e).then(() => this.enableAudioOnlyUI_())) : Promise.resolve().then(() => this.disableAudioOnlyUI_());
    }
    enablePosterModeUI_() {
      (this.tech_ && this.tech_).hide();
      this.addClass("vjs-audio-poster-mode");
      this.trigger("audiopostermodechange");
    }
    disablePosterModeUI_() {
      (this.tech_ && this.tech_).show();
      this.removeClass("vjs-audio-poster-mode");
      this.trigger("audiopostermodechange");
    }
    audioPosterMode(e) {
      return "boolean" != typeof e || e === this.audioPosterMode_ ? this.audioPosterMode_ : (this.audioPosterMode_ = e) ? (this.audioOnlyMode() ? this.audioOnlyMode(!1) : Promise.resolve()).then(() => {
        this.enablePosterModeUI_();
      }) : Promise.resolve().then(() => {
        this.disablePosterModeUI_();
      });
    }
    addTextTrack(e, t, i) {
      if (this.tech_) return this.tech_.addTextTrack(e, t, i);
    }
    addRemoteTextTrack(e, t) {
      if (this.tech_) return this.tech_.addRemoteTextTrack(e, t);
    }
    removeRemoteTextTrack(e = {}) {
      let t = e.track;
      if (t = t || e, this.tech_) return this.tech_.removeRemoteTextTrack(t);
    }
    getVideoPlaybackQuality() {
      return this.techGet_("getVideoPlaybackQuality");
    }
    videoWidth() {
      return this.tech_ && this.tech_.videoWidth && this.tech_.videoWidth() || 0;
    }
    videoHeight() {
      return this.tech_ && this.tech_.videoHeight && this.tech_.videoHeight() || 0;
    }
    language(e) {
      if (void 0 === e) return this.language_;
      this.language_ !== String(e).toLowerCase() && (this.language_ = String(e).toLowerCase(), eY(this)) && this.trigger("languagechange");
    }
    languages() {
      return S(sY.prototype.options_.languages, this.languages_);
    }
    toJSON() {
      var e = S(this.options_);
      var t = e.tracks;
      e.tracks = [];
      for (let s = 0; s < t.length; s++) {
        var i = t[s];
        (i = S(i)).player = void 0;
        e.tracks[s] = i;
      }
      return e;
    }
    createModal(e, t) {
      (t = t || {}).content = e || "";
      let i = new tS(this, t);
      this.addChild(i);
      i.on("dispose", () => {
        this.removeChild(i);
      });
      i.open();
      return i;
    }
    updateCurrentBreakpoint_() {
      if (this.responsive()) {
        var e = this.currentBreakpoint();
        var t = this.currentWidth();
        for (let s = 0; s < sG.length; s++) {
          var i = sG[s];
          if (t <= this.breakpoints_[i]) {
            if (e === i) return;
            e && this.removeClass(sX[e]);
            this.addClass(sX[i]);
            this.breakpoint_ = i;
            break;
          }
        }
      }
    }
    removeCurrentBreakpoint_() {
      var e = this.currentBreakpointClass();
      this.breakpoint_ = "";
      e && this.removeClass(e);
    }
    breakpoints(e) {
      void 0 !== e && (this.breakpoint_ = "", this.breakpoints_ = Object.assign({}, sK, e), this.updateCurrentBreakpoint_());
      return Object.assign(this.breakpoints_);
    }
    responsive(e) {
      return void 0 === e ? this.responsive_ : (e = !!e) !== this.responsive_ ? ((this.responsive_ = e) ? (this.on("playerresize", this.boundUpdateCurrentBreakpoint_), this.updateCurrentBreakpoint_()) : (this.off("playerresize", this.boundUpdateCurrentBreakpoint_), this.removeCurrentBreakpoint_()), e) : void 0;
    }
    currentBreakpoint() {
      return this.breakpoint_;
    }
    currentBreakpointClass() {
      return sX[this.breakpoint_] || "";
    }
    loadMedia(e, t) {
      var i;
      var s;
      var r;
      var n;
      var a;
      var o;
      var l;
      e && "object" == typeof e && (i = this.crossOrigin(), {
        artist: e,
        artwork: s,
        description: r,
        poster: n,
        src: a,
        textTracks: o,
        title: l
      } = (this.reset(), this.cache_.media = S(e), this.cache_.media), !s && n && (this.cache_.media.artwork = [{
        src: n,
        type: iR(n)
      }]), i && this.crossOrigin(i), a && this.src(a), n && this.poster(n), Array.isArray(o) && o.forEach(e => this.addRemoteTextTrack(e, !1)), this.titleBar && this.titleBar.update({
        title: l,
        description: r || e || ""
      }), this.ready(t));
    }
    getMedia() {
      var e;
      var t;
      return this.cache_.media ? S(this.cache_.media) : (e = this.poster(), t = {
        src: this.currentSources(),
        textTracks: Array.prototype.map.call(this.remoteTextTracks(), e => ({
          kind: e.kind,
          label: e.label,
          language: e.language,
          src: e.src
        }))
      }, e && (t.poster = e, t.artwork = [{
        src: t.poster,
        type: iR(t.poster)
      }]), t);
    }
    static getTagSettings(e) {
      var t;
      var i = {
        sources: [],
        tracks: []
      };
      var s = en(e);
      var r = s["data-setup"];
      if (ee(e, "vjs-fill") && (s.fill = !0), ee(e, "vjs-fluid") && (s.fluid = !0), null !== r && ([r, t] = tf(r || "{}"), r && g.error(r), Object.assign(s, t)), Object.assign(i, s), e.hasChildNodes()) {
        var n = e.childNodes;
        for (function () {
          let e = 0;
          let t = n.length;
        }(); e < t; e++) {
          var a = n[e];
          var o = a.nodeName.toLowerCase();
          "source" === o ? i.sources.push(en(a)) : "track" === o && i.tracks.push(en(a));
        }
      }
      return i;
    }
    debug(e) {
      if (void 0 === e) return this.debugEnabled_;
      e ? (this.trigger("debugon"), this.previousLogLevel_ = this.log.level, this.log.level("debug"), this.debugEnabled_ = !0) : (this.trigger("debugoff"), this.log.level(this.previousLogLevel_), this.previousLogLevel_ = void 0, this.debugEnabled_ = !1);
    }
    playbackRates(e) {
      if (void 0 === e) return this.cache_.playbackRates;
      Array.isArray(e) && e.every(e => "number" == typeof e) && (this.cache_.playbackRates = e, this.trigger("playbackrateschange"));
    }
  }
  t3.names.forEach(function (e) {
    let t = t3[e];
    sY.prototype[t.getterName] = function () {
      return this.tech_ ? this.tech_[t.getterName]() : (this[t.privateName] = this[t.privateName] || new t.ListClass(), this[t.privateName]);
    };
  });
  sY.prototype.crossorigin = sY.prototype.crossOrigin;
  sY.players = {};
  sD = window.navigator;
  sY.prototype.options_ = {
    techOrder: iC.defaultTechOrder_,
    html5: {},
    enableSourceset: !0,
    inactivityTimeout: 2e3,
    playbackRates: [],
    liveui: !1,
    children: ["mediaLoader", "posterImage", "titleBar", "textTrackDisplay", "loadingSpinner", "bigPlayButton", "liveTracker", "controlBar", "errorDisplay", "textTrackSettings", "resizeManager"],
    language: sD && (sD.languages && sD.languages[0] || sD.userLanguage || sD.language) || "en",
    languages: {},
    notSupportedMessage: "No compatible source was found for this media.",
    normalizeAutoplay: !1,
    fullscreen: {
      options: {
        navigationUI: "hide"
      }
    },
    breakpoints: {},
    responsive: !1,
    audioOnlyMode: !1,
    audioPosterMode: !1,
    enableSmoothSeeking: !1
  };
  sz.forEach(function (e) {
    sY.prototype[`handleTech${e7(e)}_`] = function () {
      return this.trigger(e);
    };
  });
  tr.registerComponent("Player", sY);
  let sQ = "plugin";
  let sJ = "activePlugins_";
  let sZ = {};
  let s0 = e => sZ.hasOwnProperty(e);
  let s1 = e => s0(e) ? sZ[e] : void 0;
  let s2 = (e, t) => {
    e[sJ] = e[sJ] || {};
    e[sJ][t] = !0;
  };
  let s4 = (e, t, i) => {
    i = (i ? "before" : "") + "pluginsetup";
    e.trigger(i, t);
    e.trigger(i + ":" + t.name, t);
  };
  let s8 = (e, t) => (t.prototype.name = e, function (...i) {
    s4(this, {
      name: e,
      plugin: t,
      instance: null
    }, !0);
    let s = new t(this, ...i);
    this[e] = () => s;
    s4(this, s.getEventHash());
    return s;
  });
  class s5 {
    constructor(e) {
      if (this.constructor === s5) throw Error("Plugin must be sub-classed; not directly instantiated.");
      this.player = e;
      this.log || (this.log = this.player.log.createLogger(this.name));
      e8(this);
      delete this.trigger;
      e3(this, this.constructor.defaultState);
      s2(e, this.name);
      this.dispose = this.dispose.bind(this);
      e.on("dispose", this.dispose);
    }
    version() {
      return this.constructor.VERSION;
    }
    getEventHash(e = {}) {
      e.name = this.name;
      e.plugin = this.constructor;
      e.instance = this;
      return e;
    }
    trigger(e, t = {}) {
      return eq(this.eventBusEl_, e, this.getEventHash(t));
    }
    handleStateChanged(e) { }
    dispose() {
      var {
        name,
        player
      } = this;
      this.trigger("dispose");
      this.off();
      player.off("dispose", this.dispose);
      player[sJ][name] = !1;
      this.player = this.state = null;
      player[name] = s8(name, sZ[name]);
    }
    static isBasic(e) {
      return "function" == typeof (e = "string" == typeof e ? s1(e) : e) && !s5.prototype.isPrototypeOf(e.prototype);
    }
    static registerPlugin(e, t) {
      if ("string" != typeof e) throw Error(`Illegal plugin name, "${e}", must be a string, was ${typeof e}.`);
      if (s0(e)) g.warn(`A plugin named "${e}" already exists. You may want to avoid re-registering plugins!`); else if (sY.prototype.hasOwnProperty(e)) throw Error(`Illegal plugin name, "${e}", cannot share a name with an existing player method!`);
      if ("function" != typeof t) throw Error(`Illegal plugin for "${e}", must be a function, was ${typeof t}.`);
      sZ[e] = t;
      e !== sQ && (s5.isBasic(t) ? sY.prototype[e] = function (e, t) {
        function i() {
          s4(this, {
            name: e,
            plugin: t,
            instance: null
          }, !0);
          var i = t.apply(this, arguments);
          s2(this, e);
          s4(this, {
            name: e,
            plugin: t,
            instance: i
          });
          return i;
        }
        Object.keys(t).forEach(function (e) {
          i[e] = t[e];
        });
        return i;
      }(e, t) : sY.prototype[e] = s8(e, t));
      return t;
    }
    static deregisterPlugin(e) {
      if (e === sQ) throw Error("Cannot de-register base plugin.");
      s0(e) && (delete sZ[e], delete sY.prototype[e]);
    }
    static getPlugins(e = Object.keys(sZ)) {
      let t;
      e.forEach(e => {
        var i = s1(e);
        i && ((t = t || {})[e] = i);
      });
      return t;
    }
    static getPluginVersion(e) {
      return (e = s1(e)) && e.VERSION || "";
    }
  }
  function s3(e, t, i, s) {
    {
      var r = t + ` is deprecated and will be removed in ${e}.0; please use ${i} instead.`;
      let n = !1;
      return function (...e) {
        n || g.warn(r);
        n = !0;
        return s.apply(this, e);
      };
    }
  }
  s5.getPlugin = s1;
  s5.BASE_PLUGIN_NAME = sQ;
  s5.registerPlugin(sQ, s5);
  sY.prototype.usingPlugin = function (e) {
    return !!this[sJ] && !0 === this[sJ][e];
  };
  sY.prototype.hasPlugin = function (e) {
    return !!s0(e);
  };
  let s6 = e => 0 === e.indexOf("#") ? e.slice(1) : e;
  function s7(e, t, i) {
    let s = s7.getPlayer(e);
    if (s) {
      t && g.warn(`Player "${e}" is already initialised. Options will not be applied.`);
      i && s.ready(i);
    } else {
      let r = "string" == typeof e ? eb("#" + s6(e)) : e;
      if (!X(r)) throw TypeError("The element or ID supplied is not valid. (videojs)");
      e = "getRootNode" in r && r.getRootNode() instanceof window.ShadowRoot ? r.getRootNode() : r.ownerDocument.body;
      r.ownerDocument.defaultView && e.contains(r) || g.warn("The element supplied is not included in the DOM");
      !0 === (t = t || {}).restoreEl && (t.restoreEl = (r.parentNode && r.parentNode.hasAttribute("data-vjs-player") ? r.parentNode : r).cloneNode(!0));
      l("beforesetup").forEach(e => {
        !b(e = e(r, S(t))) || Array.isArray(e) ? g.error("please return an object in beforesetup hooks") : t = S(t, e);
      });
      s = new (e = tr.getComponent("Player"))(r, t, i);
      l("setup").forEach(e => e(s));
    }
    return s;
  }
  function s9(e, t) {
    if (/^[a-z]+:/i.test(t)) return t;
    /^data:/.test(e) && (e = window.location && window.location.href || "");
    var i = "function" == typeof window.URL;
    var s = /^\/\//.test(e);
    var r = !window.location && !/\/\//i.test(e);
    i ? e = new window.URL(e, window.location || rt) : /\/\//i.test(e) || (e = re.buildAbsoluteURL(window.location && window.location.href || "", e));
    return i ? (i = new URL(t, e), r ? i.href.slice(rt.length) : s ? i.href.slice(i.protocol.length) : i.href) : re.buildAbsoluteURL(e, t);
  }
  s7.hooks_ = o;
  s7.hooks = l;
  s7.hook = function (e, t) {
    l(e, t);
  };
  s7.hookOnce = function (e, t) {
    l(e, [].concat(t).map(t => {
      let i = (...s) => (h(e, i), t(...s));
      return i;
    }));
  };
  s7.removeHook = h;
  !0 !== window.VIDEOJS_NO_DYNAMIC_STYLE && G() && !(t6 = eb(".vjs-styles-defaults")) && (t6 = eD("vjs-styles-defaults"), (sA = eb("head")) && sA.insertBefore(t6, sA.firstChild), eL(t6, `
      .video-js {
        width: 300px;
        height: 150px;
      }

      .vjs-fluid:not(.vjs-audio-only-mode) {
        padding-top: 56.25%
      }
    `));
  eI(1, s7);
  s7.VERSION = a;
  s7.options = sY.prototype.options_;
  s7.getPlayers = () => sY.players;
  s7.getPlayer = e => {
    let t;
    var i = sY.players;
    if ("string" == typeof e) {
      var s = s6(e);
      var r = i[playerId];
      if (player) return player;
      t = eb("#" + playerId);
    } else t = e;
    if (X(t)) {
      var {
        player,
        playerId
      } = t;
      if (player || i[playerId]) return player || i[playerId];
    }
  };
  s7.getAllPlayers = () => Object.keys(sY.players).map(e => sY.players[e]).filter(Boolean);
  s7.players = sY.players;
  s7.getComponent = tr.getComponent;
  s7.registerComponent = (e, t) => (iC.isTech(t) && g.warn(`The ${e} tech was registered as a component. It should instead be registered using videojs.registerTech(name, tech)`), tr.registerComponent.call(tr, e, t));
  s7.getTech = iC.getTech;
  s7.registerTech = iC.registerTech;
  s7.use = function (e, t) {
    ik[e] = ik[e] || [];
    ik[e].push(t);
  };
  Object.defineProperty(s7, "middleware", {
    value: {},
    writeable: !1,
    enumerable: !0
  });
  Object.defineProperty(s7.middleware, "TERMINATOR", {
    value: iI,
    writeable: !1,
    enumerable: !0
  });
  s7.browser = V;
  s7.obj = C;
  s7.mergeOptions = s3(9, "videojs.mergeOptions", "videojs.obj.merge", S);
  s7.defineLazyProperty = s3(9, "videojs.defineLazyProperty", "videojs.obj.defineLazyProperty", E);
  s7.bind = s3(9, "videojs.bind", "native Function.prototype.bind", e$);
  s7.registerPlugin = s5.registerPlugin;
  s7.deregisterPlugin = s5.deregisterPlugin;
  s7.plugin = (e, t) => (g.warn("videojs.plugin() is deprecated; use videojs.registerPlugin() instead"), s5.registerPlugin(e, t));
  s7.getPlugins = s5.getPlugins;
  s7.getPlugin = s5.getPlugin;
  s7.getPluginVersion = s5.getPluginVersion;
  s7.addLanguage = function (e, t) {
    e = ("" + e).toLowerCase();
    s7.options.languages = S(s7.options.languages, {
      [e]: t
    });
    return s7.options.languages[e];
  };
  s7.log = g;
  s7.createLogger = f;
  s7.time = tp;
  s7.createTimeRange = s3(9, "videojs.createTimeRange", "videojs.time.createTimeRanges", to);
  s7.createTimeRanges = s3(9, "videojs.createTimeRanges", "videojs.time.createTimeRanges", to);
  s7.formatTime = s3(9, "videojs.formatTime", "videojs.time.formatTime", tc);
  s7.setFormatTime = s3(9, "videojs.setFormatTime", "videojs.time.setFormatTime", td);
  s7.resetFormatTime = s3(9, "videojs.resetFormatTime", "videojs.time.resetFormatTime", tu);
  s7.parseUrl = s3(9, "videojs.parseUrl", "videojs.url.parseUrl", tO);
  s7.isCrossOrigin = s3(9, "videojs.isCrossOrigin", "videojs.url.isCrossOrigin", tR);
  s7.EventTarget = eX;
  s7.any = eH;
  s7.on = eB;
  s7.one = ej;
  s7.off = eF;
  s7.trigger = eq;
  s7.xhr = tz;
  s7.TextTrack = t0;
  s7.AudioTrack = t1;
  s7.VideoTrack = t2;
  ["isEl", "isTextNode", "createEl", "hasClass", "addClass", "removeClass", "toggleClass", "setAttributes", "getAttributes", "emptyEl", "appendContent", "insertContent"].forEach(e => {
    s7[e] = function () {
      g.warn(`videojs.${e}() is deprecated; use videojs.dom.${e}() instead`);
      return eE[e].apply(null, arguments);
    };
  });
  s7.computedStyle = s3(9, "videojs.computedStyle", "videojs.dom.computedStyle", eS);
  s7.dom = eE;
  s7.fn = eG;
  s7.num = tB;
  s7.str = te;
  s7.url = tU;
  ti(function (e, t) {
    /*! @name videojs-contrib-quality-levels @version 4.0.0 @license Apache-2.0 */e.exports = function (e) {
      var t = e && "object" == typeof e && "default" in e ? e : {
        default: e
      };
      class i {
        constructor(e) {
          let t = this;
          t.id = e.id;
          t.label = t.id;
          t.width = e.width;
          t.height = e.height;
          t.bitrate = e.bandwidth;
          t.frameRate = e.frameRate;
          t.enabled_ = e.enabled;
          Object.defineProperty(t, "enabled", {
            get: () => t.enabled_(),
            set(e) {
              t.enabled_(e);
            }
          });
          return t;
        }
      }
      class s extends t.$$default.EventTarget {
        constructor() {
          super();
          let e = this;
          e.levels_ = [];
          e.selectedIndex_ = -1;
          Object.defineProperty(e, "selectedIndex", {
            get: () => e.selectedIndex_
          });
          Object.defineProperty(e, "length", {
            get: () => e.levels_.length
          });
          e[Symbol.iterator] = () => e.levels_.values();
          return e;
        }
        addQualityLevel(e) {
          let t = this.getQualityLevelById(e.id);
          if (t) return t;
          let s = this.levels_.length;
          t = new i(e);
          "" + s in this || Object.defineProperty(this, s, {
            get() {
              return this.levels_[s];
            }
          });
          this.levels_.push(t);
          this.trigger({
            qualityLevel: t,
            type: "addqualitylevel"
          });
          return t;
        }
        removeQualityLevel(e) {
          var _this6 = this;
          let t = null;
          for (function () {
            let i = 0;
            let s = _this6.length;
          }(); i < s; i++) if (this[i] === e) {
            t = this.levels_.splice(i, 1)[0];
            this.selectedIndex_ === i ? this.selectedIndex_ = -1 : this.selectedIndex_ > i && this.selectedIndex_--;
            break;
          }
          t && this.trigger({
            qualityLevel: e,
            type: "removequalitylevel"
          });
          return t;
        }
        getQualityLevelById(e) {
          var _this7 = this;
          for (function () {
            let t = 0;
            let i = _this7.length;
          }(); t < i; t++) {
            let i = this[t];
            if (i.id === e) return i;
          }
          return null;
        }
        dispose() {
          this.selectedIndex_ = -1;
          this.levels_.length = 0;
        }
      }
      for (let e in s.prototype.allowedEvents_ = {
        change: "change",
        addqualitylevel: "addqualitylevel",
        removequalitylevel: "removequalitylevel"
      }, s.prototype.allowedEvents_) s.prototype["on" + e] = null;
      var r = "4.0.0";
      let n = function (e, t) {
        let i = e.qualityLevels;
        let n = new s();
        let a = function () {
          n.dispose();
          e.qualityLevels = i;
          e.off("dispose", a);
        };
        e.on("dispose", a);
        e.qualityLevels = () => n;
        e.qualityLevels.VERSION = r;
        return n;
      };
      let a = function (e) {
        return n(this, t.$$default.obj.merge({}, e));
      };
      t.$$default.registerPlugin("qualityLevels", a);
      a.VERSION = r;
      return a;
    }(s7);
  });
  var re = ti(function (e, t) {
    var i;
    var s;
    var r;
    var n;
    var a;
    i = /^(?=((?:[a-zA-Z0-9+\-.]+:)?))\1(?=((?:\/\/[^\/?#]*)?))\2(?=((?:(?:[^?#\/]*\/)*[^;?#\/]*)?))\3((?:;[^?#]*)?)(\?[^#]*)?(#[^]*)?$/;
    s = /^(?=([^\/?#]*))\1([^]*)$/;
    r = /(?:\/|^)\.(?=\/)/g;
    n = /(?:\/|^)\.\.\/(?!\.\.\/)[^\/]*(?=\/)/g;
    a = {
      buildAbsoluteURL: function (e, t, i) {
        if (i = i || {}, e = e.trim(), !(t = t.trim())) {
          if (!i.alwaysNormalize) return e;
          var r = a.parseURL(e);
          if (r) {
            r.path = a.normalizePath(r.path);
            return a.buildURLFromParts(r);
          }
          throw Error("Error trying to parse base URL.");
        }
        if (!(r = a.parseURL(t))) throw Error("Error trying to parse relative URL.");
        if (r.scheme) return i.alwaysNormalize ? (r.path = a.normalizePath(r.path), a.buildURLFromParts(r)) : t;
        if (!(t = a.parseURL(e))) throw Error("Error trying to parse base URL.");
        !t.netLoc && t.path && "/" !== t.path[0] && (e = s.exec(t.path), t.netLoc = e[1], t.path = e[2]);
        t.netLoc && !t.path && (t.path = "/");
        var n;
        var e = {
          scheme: t.scheme,
          netLoc: r.netLoc,
          path: null,
          params: r.params,
          query: r.query,
          fragment: r.fragment
        };
        r.netLoc || (e.netLoc = t.netLoc, "/" !== r.path[0] && (r.path ? (n = (n = t.path).substring(0, n.lastIndexOf("/") + 1) + r.path, e.path = a.normalizePath(n)) : (e.path = t.path, r.params || (e.params = t.params, r.query) || (e.query = t.query))));
        null === e.path && (e.path = i.alwaysNormalize ? a.normalizePath(r.path) : r.path);
        return a.buildURLFromParts(e);
      },
      parseURL: function (e) {
        return (e = i.exec(e)) ? {
          scheme: e[1] || "",
          netLoc: e[2] || "",
          path: e[3] || "",
          params: e[4] || "",
          query: e[5] || "",
          fragment: e[6] || ""
        } : null;
      },
      normalizePath: function (e) {
        for (e = e.split("").reverse().join("").replace(r, ""); e.length !== (e = e.replace(n, "")).length;);
        return e.split("").reverse().join("");
      },
      buildURLFromParts: function (e) {
        return e.scheme + e.netLoc + e.path + e.params + e.query + e.fragment;
      }
    };
    e.exports = a;
  });
  var rt = "http://example.com";
  var sx = function () {
    function e() {
      this.listeners = {};
    }
    var t = e.prototype;
    t.on = function (e, t) {
      this.listeners[e] || (this.listeners[e] = []);
      this.listeners[e].push(t);
    };
    t.off = function (e, t) {
      return !!this.listeners[e] && (t = this.listeners[e].indexOf(t), this.listeners[e] = this.listeners[e].slice(0), this.listeners[e].splice(t, 1), -1 < t);
    };
    t.trigger = function (e) {
      var t = this.listeners[e];
      if (t) {
        if (2 == $$arguments.length) for (i = t.length, s = 0, void 0; s < i; ++s) {
          var i;
          var s;
          t[s].call(this, $$arguments[1]);
        } else for (r = Array.prototype.slice.call(arguments, 1), n = t.length, a = 0, void 0; a < n; ++a) {
          var r;
          var n;
          var a;
          t[a].apply(this, r);
        }
      }
    };
    t.dispose = function () {
      this.listeners = {};
    };
    t.pipe = function (e) {
      this.on("data", function (t) {
        e.push(t);
      });
    };
    return e;
  }();
  /*! @name m3u8-parser @version 7.1.0 @license Apache-2.0 */
  class ri extends sx {
    constructor() {
      super();
      this.buffer = "";
    }
    push(e) {
      let t;
      for (this.buffer += e, t = this.buffer.indexOf("\n"); -1 < t; t = this.buffer.indexOf("\n")) {
        this.trigger("data", this.buffer.substring(0, t));
        this.buffer = this.buffer.substring(t + 1);
      }
    }
  }
  function rs(e) {
    var e = /([0-9.]*)?@?([0-9.]*)?/.exec(e || "");
    var t = {};
    e[1] && (t.length = parseInt(e[1], 10));
    e[2] && (t.offset = parseInt(e[2], 10));
    return t;
  }
  function rr(e) {
    var t = {};
    if (e) {
      var i;
      var s = e.split(RegExp('(?:^|,)((?:[^=]*)=(?:"[^"]*"|[^,]*))'));
      let r = s.length;
      for (; r--;) "" !== s[r] && ((i = /([^=]*)=(.*)/.exec(s[r]).slice(1))[0] = i[0].replace(/^\s+|\s+$/g, ""), i[1] = i[1].replace(/^\s+|\s+$/g, ""), i[1] = i[1].replace(/^['"](.*)['"]$/g, "$1"), t[i[0]] = i[1]);
    }
    return t;
  }
  class rn extends sx {
    constructor() {
      super();
      this.customParsers = [];
      this.tagMappers = [];
    }
    push(e) {
      let t;
      let i;
      0 !== (e = e.trim()).length && ("#" !== e[0] ? this.trigger("data", {
        type: "uri",
        uri: e
      }) : this.tagMappers.reduce((t, i) => (i = i(e)) === e ? t : t.concat([i]), [e]).forEach(e => {
        for (let t = 0; t < this.customParsers.length; t++) if (this.customParsers[t].call(this, e)) return;
        if (0 !== e.indexOf("#EXT")) this.trigger("data", {
          type: "comment",
          text: e.slice(1)
        }); else if (e = e.replace("\r", ""), t = /^#EXTM3U/.exec(e)) this.trigger("data", {
          type: "tag",
          tagType: "m3u"
        }); else if (t = /^#EXTINF:([0-9\.]*)?,?(.*)?$/.exec(e)) {
          i = {
            type: "tag",
            tagType: "inf"
          };
          t[1] && (i.duration = parseFloat(t[1]));
          t[2] && (i.title = t[2]);
          this.trigger("data", i);
        } else if (t = /^#EXT-X-TARGETDURATION:([0-9.]*)?/.exec(e)) {
          i = {
            type: "tag",
            tagType: "targetduration"
          };
          t[1] && (i.duration = parseInt(t[1], 10));
          this.trigger("data", i);
        } else if (t = /^#EXT-X-VERSION:([0-9.]*)?/.exec(e)) {
          i = {
            type: "tag",
            tagType: "version"
          };
          t[1] && (i.version = parseInt(t[1], 10));
          this.trigger("data", i);
        } else if (t = /^#EXT-X-MEDIA-SEQUENCE:(\-?[0-9.]*)?/.exec(e)) {
          i = {
            type: "tag",
            tagType: "media-sequence"
          };
          t[1] && (i.number = parseInt(t[1], 10));
          this.trigger("data", i);
        } else if (t = /^#EXT-X-DISCONTINUITY-SEQUENCE:(\-?[0-9.]*)?/.exec(e)) {
          i = {
            type: "tag",
            tagType: "discontinuity-sequence"
          };
          t[1] && (i.number = parseInt(t[1], 10));
          this.trigger("data", i);
        } else if (t = /^#EXT-X-PLAYLIST-TYPE:(.*)?$/.exec(e)) {
          i = {
            type: "tag",
            tagType: "playlist-type"
          };
          t[1] && (i.playlistType = t[1]);
          this.trigger("data", i);
        } else if (t = /^#EXT-X-BYTERANGE:(.*)?$/.exec(e)) {
          i = tj(rs(t[1]), {
            type: "tag",
            tagType: "byterange"
          });
          this.trigger("data", i);
        } else if (t = /^#EXT-X-ALLOW-CACHE:(YES|NO)?/.exec(e)) {
          i = {
            type: "tag",
            tagType: "allow-cache"
          };
          t[1] && (i.allowed = !/NO/.test(t[1]));
          this.trigger("data", i);
        } else if (t = /^#EXT-X-MAP:(.*)$/.exec(e)) {
          i = {
            type: "tag",
            tagType: "map"
          };
          t[1] && ((r = rr(t[1])).URI && (i.uri = r.URI), r.BYTERANGE) && (i.byterange = rs(r.BYTERANGE));
          this.trigger("data", i);
        } else if (t = /^#EXT-X-STREAM-INF:(.*)$/.exec(e)) {
          i = {
            type: "tag",
            tagType: "stream-inf"
          };
          t[1] && (i.attributes = rr(t[1]), i.attributes.RESOLUTION && (r = {}, (s = i.attributes.RESOLUTION.split("x"))[0] && (r.width = parseInt(s[0], 10)), s[1] && (r.height = parseInt(s[1], 10)), i.attributes.RESOLUTION = r), i.attributes.BANDWIDTH && (i.attributes.BANDWIDTH = parseInt(i.attributes.BANDWIDTH, 10)), i.attributes["FRAME-RATE"] && (i.attributes["FRAME-RATE"] = parseFloat(i.attributes["FRAME-RATE"])), i.attributes["PROGRAM-ID"]) && (i.attributes["PROGRAM-ID"] = parseInt(i.attributes["PROGRAM-ID"], 10));
          this.trigger("data", i);
        } else if (t = /^#EXT-X-MEDIA:(.*)$/.exec(e)) {
          i = {
            type: "tag",
            tagType: "media"
          };
          t[1] && (i.attributes = rr(t[1]));
          this.trigger("data", i);
        } else if (t = /^#EXT-X-ENDLIST/.exec(e)) this.trigger("data", {
          type: "tag",
          tagType: "endlist"
        }); else if (t = /^#EXT-X-DISCONTINUITY/.exec(e)) this.trigger("data", {
          type: "tag",
          tagType: "discontinuity"
        }); else if (t = /^#EXT-X-PROGRAM-DATE-TIME:(.*)$/.exec(e)) {
          i = {
            type: "tag",
            tagType: "program-date-time"
          };
          t[1] && (i.dateTimeString = t[1], i.dateTimeObject = new Date(t[1]));
          this.trigger("data", i);
        } else if (t = /^#EXT-X-KEY:(.*)$/.exec(e)) {
          i = {
            type: "tag",
            tagType: "key"
          };
          t[1] && (i.attributes = rr(t[1]), i.attributes.IV) && ("0x" === i.attributes.IV.substring(0, 2).toLowerCase() && (i.attributes.IV = i.attributes.IV.substring(2)), i.attributes.IV = i.attributes.IV.match(/.{8}/g), i.attributes.IV[0] = parseInt(i.attributes.IV[0], 16), i.attributes.IV[1] = parseInt(i.attributes.IV[1], 16), i.attributes.IV[2] = parseInt(i.attributes.IV[2], 16), i.attributes.IV[3] = parseInt(i.attributes.IV[3], 16), i.attributes.IV = new Uint32Array(i.attributes.IV));
          this.trigger("data", i);
        } else if (t = /^#EXT-X-START:(.*)$/.exec(e)) {
          i = {
            type: "tag",
            tagType: "start"
          };
          t[1] && (i.attributes = rr(t[1]), i.attributes["TIME-OFFSET"] = parseFloat(i.attributes["TIME-OFFSET"]), i.attributes.PRECISE = /YES/.test(i.attributes.PRECISE));
          this.trigger("data", i);
        } else if (t = /^#EXT-X-CUE-OUT-CONT:(.*)?$/.exec(e)) {
          i = {
            type: "tag",
            tagType: "cue-out-cont"
          };
          t[1] ? i.data = t[1] : i.data = "";
          this.trigger("data", i);
        } else if (t = /^#EXT-X-CUE-OUT:(.*)?$/.exec(e)) {
          i = {
            type: "tag",
            tagType: "cue-out"
          };
          t[1] ? i.data = t[1] : i.data = "";
          this.trigger("data", i);
        } else if (t = /^#EXT-X-CUE-IN:(.*)?$/.exec(e)) {
          i = {
            type: "tag",
            tagType: "cue-in"
          };
          t[1] ? i.data = t[1] : i.data = "";
          this.trigger("data", i);
        } else if ((t = /^#EXT-X-SKIP:(.*)$/.exec(e)) && t[1]) {
          (i = {
            type: "tag",
            tagType: "skip"
          }).attributes = rr(t[1]);
          i.attributes.hasOwnProperty("SKIPPED-SEGMENTS") && (i.attributes["SKIPPED-SEGMENTS"] = parseInt(i.attributes["SKIPPED-SEGMENTS"], 10));
          i.attributes.hasOwnProperty("RECENTLY-REMOVED-DATERANGES") && (i.attributes["RECENTLY-REMOVED-DATERANGES"] = i.attributes["RECENTLY-REMOVED-DATERANGES"].split("	"));
          this.trigger("data", i);
        } else if ((t = /^#EXT-X-PART:(.*)$/.exec(e)) && t[1]) {
          (i = {
            type: "tag",
            tagType: "part"
          }).attributes = rr(t[1]);
          ["DURATION"].forEach(function (e) {
            i.attributes.hasOwnProperty(e) && (i.attributes[e] = parseFloat(i.attributes[e]));
          });
          ["INDEPENDENT", "GAP"].forEach(function (e) {
            i.attributes.hasOwnProperty(e) && (i.attributes[e] = /YES/.test(i.attributes[e]));
          });
          i.attributes.hasOwnProperty("BYTERANGE") && (i.attributes.byterange = rs(i.attributes.BYTERANGE));
          this.trigger("data", i);
        } else if ((t = /^#EXT-X-SERVER-CONTROL:(.*)$/.exec(e)) && t[1]) {
          (i = {
            type: "tag",
            tagType: "server-control"
          }).attributes = rr(t[1]);
          ["CAN-SKIP-UNTIL", "PART-HOLD-BACK", "HOLD-BACK"].forEach(function (e) {
            i.attributes.hasOwnProperty(e) && (i.attributes[e] = parseFloat(i.attributes[e]));
          });
          ["CAN-SKIP-DATERANGES", "CAN-BLOCK-RELOAD"].forEach(function (e) {
            i.attributes.hasOwnProperty(e) && (i.attributes[e] = /YES/.test(i.attributes[e]));
          });
          this.trigger("data", i);
        } else if ((t = /^#EXT-X-PART-INF:(.*)$/.exec(e)) && t[1]) {
          (i = {
            type: "tag",
            tagType: "part-inf"
          }).attributes = rr(t[1]);
          ["PART-TARGET"].forEach(function (e) {
            i.attributes.hasOwnProperty(e) && (i.attributes[e] = parseFloat(i.attributes[e]));
          });
          this.trigger("data", i);
        } else if ((t = /^#EXT-X-PRELOAD-HINT:(.*)$/.exec(e)) && t[1]) {
          (i = {
            type: "tag",
            tagType: "preload-hint"
          }).attributes = rr(t[1]);
          ["BYTERANGE-START", "BYTERANGE-LENGTH"].forEach(function (e) {
            var t;
            i.attributes.hasOwnProperty(e) && (i.attributes[e] = parseInt(i.attributes[e], 10), t = "BYTERANGE-LENGTH" === e ? "length" : "offset", i.attributes.byterange = i.attributes.byterange || {}, i.attributes.byterange[t] = i.attributes[e], delete i.attributes[e]);
          });
          this.trigger("data", i);
        } else if ((t = /^#EXT-X-RENDITION-REPORT:(.*)$/.exec(e)) && t[1]) {
          (i = {
            type: "tag",
            tagType: "rendition-report"
          }).attributes = rr(t[1]);
          ["LAST-MSN", "LAST-PART"].forEach(function (e) {
            i.attributes.hasOwnProperty(e) && (i.attributes[e] = parseInt(i.attributes[e], 10));
          });
          this.trigger("data", i);
        } else if ((t = /^#EXT-X-DATERANGE:(.*)$/.exec(e)) && t[1]) {
          (i = {
            type: "tag",
            tagType: "daterange"
          }).attributes = rr(t[1]);
          ["ID", "CLASS"].forEach(function (e) {
            i.attributes.hasOwnProperty(e) && (i.attributes[e] = String(i.attributes[e]));
          });
          ["START-DATE", "END-DATE"].forEach(function (e) {
            i.attributes.hasOwnProperty(e) && (i.attributes[e] = new Date(i.attributes[e]));
          });
          ["DURATION", "PLANNED-DURATION"].forEach(function (e) {
            i.attributes.hasOwnProperty(e) && (i.attributes[e] = parseFloat(i.attributes[e]));
          });
          ["END-ON-NEXT"].forEach(function (e) {
            i.attributes.hasOwnProperty(e) && (i.attributes[e] = /YES/i.test(i.attributes[e]));
          });
          ["SCTE35-CMD", " SCTE35-OUT", "SCTE35-IN"].forEach(function (e) {
            i.attributes.hasOwnProperty(e) && (i.attributes[e] = i.attributes[e].toString(16));
          });
          var s;
          var r;
          var n;
          var a;
          var o = /^X-([A-Z]+-)+[A-Z]+$/;
          for (let e in i.attributes) o.test(e) && (n = /[0-9A-Fa-f]{6}/g.test(i.attributes[e]), a = /^\d+(\.\d+)?$/.test(i.attributes[e]), i.attributes[e] = n ? i.attributes[e].toString(16) : (a ? parseFloat : String)(i.attributes[e]));
          this.trigger("data", i);
        } else (t = /^#EXT-X-INDEPENDENT-SEGMENTS/.exec(e)) ? this.trigger("data", {
          type: "tag",
          tagType: "independent-segments"
        }) : (t = /^#EXT-X-CONTENT-STEERING:(.*)$/.exec(e)) ? ((i = {
          type: "tag",
          tagType: "content-steering"
        }).attributes = rr(t[1]), this.trigger("data", i)) : this.trigger("data", {
          type: "tag",
          data: e.slice(4)
        });
      }));
    }
    addParser({
      expression: e,
      customType: t,
      dataParser: i,
      segment: s
    }) {
      "function" != typeof i && (i = e => e);
      this.customParsers.push(r => {
        if (e.exec(r)) {
          this.trigger("data", {
            type: "custom",
            data: i(r),
            customType: t,
            segment: s
          });
          return !0;
        }
      });
    }
    addTagMapper({
      expression: e,
      map: t
    }) {
      this.tagMappers.push(i => e.test(i) ? t(i) : i);
    }
  }
  function ra(e) {
    let t = {};
    Object.keys(e).forEach(function (i) {
      t[i.toLowerCase().replace(/-(\w)/g, e => e[1].toUpperCase())] = e[i];
    });
    return t;
  }
  function ro(e) {
    var t;
    var i;
    var s;
    var r;
    var n;
    var {
      serverControl,
      targetDuration,
      partTargetDuration
    } = e;
    serverControl && (t = "#EXT-X-SERVER-CONTROL", i = "holdBack", s = "partHoldBack", r = targetDuration && 3 * targetDuration, n = partTargetDuration && 2 * partTargetDuration, targetDuration && !serverControl.hasOwnProperty(i) && (serverControl[i] = r, this.trigger("info", {
      message: t + ` defaulting HOLD-BACK to targetDuration * 3 (${r}).`
    })), r && serverControl[i] < r && (this.trigger("warn", {
      message: t + ` clamping HOLD-BACK (${serverControl[i]}) to targetDuration * 3 (${r})`
    }), serverControl[i] = r), partTargetDuration && !serverControl.hasOwnProperty(s) && (serverControl[s] = 3 * partTargetDuration, this.trigger("info", {
      message: t + ` defaulting PART-HOLD-BACK to partTargetDuration * 3 (${serverControl[s]}).`
    })), partTargetDuration) && serverControl[s] < n && (this.trigger("warn", {
      message: t + ` clamping PART-HOLD-BACK (${serverControl[s]}) to partTargetDuration * 2 (${n}).`
    }), serverControl[s] = n);
  }
  class rl extends sx {
    constructor() {
      super();
      this.lineStream = new ri();
      this.parseStream = new rn();
      this.lineStream.pipe(this.parseStream);
      this.lastProgramDateTime = null;
      let e = this;
      let t = [];
      let i = {};
      let s;
      let r;
      let n = !1;
      let a = {
        AUDIO: {},
        VIDEO: {},
        "CLOSED-CAPTIONS": {},
        SUBTITLES: {}
      };
      let o = 0;
      this.manifest = {
        allowCache: !0,
        discontinuityStarts: [],
        dateRanges: [],
        segments: []
      };
      let l = 0;
      let h = 0;
      let d = {};
      this.on("end", () => {
        !i.uri && (i.parts || i.preloadHints) && (!i.map && s && (i.map = s), !i.key && r && (i.key = r), i.timeline || "number" != typeof o || (i.timeline = o), this.manifest.preloadSegment = i);
      });
      this.parseStream.on("data", function (u) {
        let c;
        let p;
        ({
          tag() {
            ({
              version() {
                u.version && (this.manifest.version = u.version);
              },
              "allow-cache"() {
                this.manifest.allowCache = u.allowed;
                "allowed" in u || (this.trigger("info", {
                  message: "defaulting allowCache to YES"
                }), this.manifest.allowCache = !0);
              },
              byterange() {
                var e = {};
                "length" in u && ((i.byterange = e).length = u.length, "offset" in u || (u.offset = l));
                "offset" in u && ((i.byterange = e).offset = u.offset);
                l = e.offset + e.length;
              },
              endlist() {
                this.manifest.endList = !0;
              },
              inf() {
                "mediaSequence" in this.manifest || (this.manifest.mediaSequence = 0, this.trigger("info", {
                  message: "defaulting media sequence to zero"
                }));
                "discontinuitySequence" in this.manifest || (this.manifest.discontinuitySequence = 0, this.trigger("info", {
                  message: "defaulting discontinuity sequence to zero"
                }));
                u.title && (i.title = u.title);
                0 < u.duration && (i.duration = u.duration);
                0 === u.duration && (i.duration = .01, this.trigger("info", {
                  message: "updating zero segment duration to a small value"
                }));
                this.manifest.segments = t;
              },
              key() {
                if (u.attributes) {
                  if ("NONE" === u.attributes.METHOD) r = null; else if (u.attributes.URI) {
                    if ("com.apple.streamingkeydelivery" === u.attributes.KEYFORMAT) {
                      this.manifest.contentProtection = this.manifest.contentProtection || {};
                      this.manifest.contentProtection["com.apple.fps.1_0"] = {
                        attributes: u.attributes
                      };
                    } else if ("com.microsoft.playready" === u.attributes.KEYFORMAT) {
                      this.manifest.contentProtection = this.manifest.contentProtection || {};
                      this.manifest.contentProtection["com.microsoft.playready"] = {
                        uri: u.attributes.URI
                      };
                    } else {
                      if ("urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed" === u.attributes.KEYFORMAT) return -1 === ["SAMPLE-AES", "SAMPLE-AES-CTR", "SAMPLE-AES-CENC"].indexOf(u.attributes.METHOD) ? void this.trigger("warn", {
                        message: "invalid key method provided for Widevine"
                      }) : ("SAMPLE-AES-CENC" === u.attributes.METHOD && this.trigger("warn", {
                        message: "SAMPLE-AES-CENC is deprecated, please use SAMPLE-AES-CTR instead"
                      }), "data:text/plain;base64," !== u.attributes.URI.substring(0, 23) ? void this.trigger("warn", {
                        message: "invalid key URI provided for Widevine"
                      }) : u.attributes.KEYID && "0x" === u.attributes.KEYID.substring(0, 2) ? (this.manifest.contentProtection = this.manifest.contentProtection || {}, void (this.manifest.contentProtection["com.widevine.alpha"] = {
                        attributes: {
                          schemeIdUri: u.attributes.KEYFORMAT,
                          keyId: u.attributes.KEYID.substring(2)
                        },
                        pssh: function (e) {
                          for (t = window.atob ? window.atob(e) : Buffer.from(e, "base64").toString("binary"), i = new Uint8Array(t.length), s = 0, void 0; s < t.length; s++) {
                            var t;
                            var i;
                            var s;
                            i[s] = t.charCodeAt(s);
                          }
                          return i;
                        }(u.attributes.URI.split(",")[1])
                      })) : void this.trigger("warn", {
                        message: "invalid key ID provided for Widevine"
                      }));
                      u.attributes.METHOD || this.trigger("warn", {
                        message: "defaulting key method to AES-128"
                      });
                      r = {
                        method: u.attributes.METHOD || "AES-128",
                        uri: u.attributes.URI
                      };
                      void 0 !== u.attributes.IV && (r.iv = u.attributes.IV);
                    }
                  } else this.trigger("warn", {
                    message: "ignoring key declaration without URI"
                  });
                } else this.trigger("warn", {
                  message: "ignoring key declaration without attribute list"
                });
              },
              "media-sequence"() {
                isFinite(u.number) ? this.manifest.mediaSequence = u.number : this.trigger("warn", {
                  message: "ignoring invalid media sequence: " + u.number
                });
              },
              "discontinuity-sequence"() {
                isFinite(u.number) ? (this.manifest.discontinuitySequence = u.number, o = u.number) : this.trigger("warn", {
                  message: "ignoring invalid discontinuity sequence: " + u.number
                });
              },
              "playlist-type"() {
                /VOD|EVENT/.test(u.playlistType) ? this.manifest.playlistType = u.playlistType : this.trigger("warn", {
                  message: "ignoring unknown playlist type: " + u.playlist
                });
              },
              map() {
                s = {};
                u.uri && (s.uri = u.uri);
                u.byterange && (s.byterange = u.byterange);
                r && (s.key = r);
              },
              "stream-inf"() {
                this.manifest.playlists = t;
                this.manifest.mediaGroups = this.manifest.mediaGroups || a;
                u.attributes ? (i.attributes || (i.attributes = {}), tj(i.attributes, u.attributes)) : this.trigger("warn", {
                  message: "ignoring empty stream-inf attributes"
                });
              },
              media() {
                var e;
                this.manifest.mediaGroups = this.manifest.mediaGroups || a;
                u.attributes && u.attributes.TYPE && u.attributes["GROUP-ID"] && u.attributes.NAME ? ((e = this.manifest.mediaGroups[u.attributes.TYPE])[u.attributes["GROUP-ID"]] = e[u.attributes["GROUP-ID"]] || {}, c = e[u.attributes["GROUP-ID"]], (p = {
                  default: /yes/i.test(u.attributes.DEFAULT)
                }).$$default ? p.autoselect = !0 : p.autoselect = /yes/i.test(u.attributes.AUTOSELECT), u.attributes.LANGUAGE && (p.language = u.attributes.LANGUAGE), u.attributes.URI && (p.uri = u.attributes.URI), u.attributes["INSTREAM-ID"] && (p.instreamId = u.attributes["INSTREAM-ID"]), u.attributes.CHARACTERISTICS && (p.characteristics = u.attributes.CHARACTERISTICS), u.attributes.FORCED && (p.forced = /yes/i.test(u.attributes.FORCED)), c[u.attributes.NAME] = p) : this.trigger("warn", {
                  message: "ignoring incomplete or missing media group"
                });
              },
              discontinuity() {
                o += 1;
                i.discontinuity = !0;
                this.manifest.discontinuityStarts.push(t.length);
              },
              "program-date-time"() {
                void 0 === this.manifest.dateTimeString && (this.manifest.dateTimeString = u.dateTimeString, this.manifest.dateTimeObject = u.dateTimeObject);
                i.dateTimeString = u.dateTimeString;
                i.dateTimeObject = u.dateTimeObject;
                var e = this.lastProgramDateTime;
                this.lastProgramDateTime = new Date(u.dateTimeString).getTime();
                null === e && this.manifest.segments.reduceRight((e, t) => (t.programDateTime = e - 1e3 * t.duration, t.programDateTime), this.lastProgramDateTime);
              },
              targetduration() {
                !isFinite(u.duration) || u.duration < 0 ? this.trigger("warn", {
                  message: "ignoring invalid target duration: " + u.duration
                }) : (this.manifest.targetDuration = u.duration, ro.call(this, this.manifest));
              },
              start() {
                !u.attributes || isNaN(u.attributes["TIME-OFFSET"]) ? this.trigger("warn", {
                  message: "ignoring start declaration without appropriate attribute list"
                }) : this.manifest.start = {
                  timeOffset: u.attributes["TIME-OFFSET"],
                  precise: u.attributes.PRECISE
                };
              },
              "cue-out"() {
                i.cueOut = u.data;
              },
              "cue-out-cont"() {
                i.cueOutCont = u.data;
              },
              "cue-in"() {
                i.cueIn = u.data;
              },
              skip() {
                this.manifest.skip = ra(u.attributes);
                this.warnOnMissingAttributes_("#EXT-X-SKIP", u.attributes, ["SKIPPED-SEGMENTS"]);
              },
              part() {
                n = !0;
                var e = this.manifest.segments.length;
                var t = ra(u.attributes);
                i.parts = i.parts || [];
                i.parts.push(t);
                t.byterange && (t.byterange.hasOwnProperty("offset") || (t.byterange.offset = h), h = t.byterange.offset + t.byterange.length);
                var t = i.parts.length - 1;
                this.warnOnMissingAttributes_(`#EXT-X-PART #${t} for segment #` + e, u.attributes, ["URI", "DURATION"]);
                this.manifest.renditionReports && this.manifest.renditionReports.forEach((e, t) => {
                  e.hasOwnProperty("lastPart") || this.trigger("warn", {
                    message: `#EXT-X-RENDITION-REPORT #${t} lacks required attribute(s): LAST-PART`
                  });
                });
              },
              "server-control"() {
                var e = this.manifest.serverControl = ra(u.attributes);
                e.hasOwnProperty("canBlockReload") || (e.canBlockReload = !1, this.trigger("info", {
                  message: "#EXT-X-SERVER-CONTROL defaulting CAN-BLOCK-RELOAD to false"
                }));
                ro.call(this, this.manifest);
                e.canSkipDateranges && !e.hasOwnProperty("canSkipUntil") && this.trigger("warn", {
                  message: "#EXT-X-SERVER-CONTROL lacks required attribute CAN-SKIP-UNTIL which is required when CAN-SKIP-DATERANGES is set"
                });
              },
              "preload-hint"() {
                var e = this.manifest.segments.length;
                var t = ra(u.attributes);
                var s = t.type && "PART" === t.type;
                i.preloadHints = i.preloadHints || [];
                i.preloadHints.push(t);
                !t.byterange || t.byterange.hasOwnProperty("offset") || (t.byterange.offset = s ? h : 0, s && (h = t.byterange.offset + t.byterange.length));
                var r = i.preloadHints.length - 1;
                if (this.warnOnMissingAttributes_(`#EXT-X-PRELOAD-HINT #${r} for segment #` + e, u.attributes, ["TYPE", "URI"]), t.type) for (let s = 0; s < i.preloadHints.length - 1; s++) {
                  var n = i.preloadHints[s];
                  n.type && n.type === t.type && this.trigger("warn", {
                    message: `#EXT-X-PRELOAD-HINT #${r} for segment #${e} has the same TYPE ${t.type} as preload hint #` + s
                  });
                }
              },
              "rendition-report"() {
                var e = ra(u.attributes);
                this.manifest.renditionReports = this.manifest.renditionReports || [];
                this.manifest.renditionReports.push(e);
                var e = this.manifest.renditionReports.length - 1;
                var t = ["LAST-MSN", "URI"];
                n && t.push("LAST-PART");
                this.warnOnMissingAttributes_("#EXT-X-RENDITION-REPORT #" + e, u.attributes, t);
              },
              "part-inf"() {
                this.manifest.partInf = ra(u.attributes);
                this.warnOnMissingAttributes_("#EXT-X-PART-INF", u.attributes, ["PART-TARGET"]);
                this.manifest.partInf.partTarget && (this.manifest.partTargetDuration = this.manifest.partInf.partTarget);
                ro.call(this, this.manifest);
              },
              daterange() {
                this.manifest.dateRanges.push(ra(u.attributes));
                var e = this.manifest.dateRanges.length - 1;
                this.warnOnMissingAttributes_("#EXT-X-DATERANGE #" + e, u.attributes, ["ID", "START-DATE"]);
                let t = this.manifest.dateRanges[e];
                t.endDate && t.startDate && new Date(t.endDate) < new Date(t.startDate) && this.trigger("warn", {
                  message: "EXT-X-DATERANGE END-DATE must be equal to or later than the value of the START-DATE"
                });
                t.duration && t.duration < 0 && this.trigger("warn", {
                  message: "EXT-X-DATERANGE DURATION must not be negative"
                });
                t.plannedDuration && t.plannedDuration < 0 && this.trigger("warn", {
                  message: "EXT-X-DATERANGE PLANNED-DURATION must not be negative"
                });
                var i = !!t.endOnNext;
                if (i && !t.$$class && this.trigger("warn", {
                  message: "EXT-X-DATERANGE with an END-ON-NEXT=YES attribute must have a CLASS attribute"
                }), i && (t.duration || t.endDate) && this.trigger("warn", {
                  message: "EXT-X-DATERANGE with an END-ON-NEXT=YES attribute must not contain DURATION or END-DATE attributes"
                }), t.duration && t.endDate && (i = t.startDate.getTime() + 1e3 * t.duration, this.manifest.dateRanges[e].endDate = new Date(i)), d[t.id]) {
                  for (let e in d[t.id]) if (t[e] && JSON.stringify(d[t.id][e]) !== JSON.stringify(t[e])) {
                    this.trigger("warn", {
                      message: "EXT-X-DATERANGE tags with the same ID in a playlist must have the same attributes values"
                    });
                    break;
                  }
                  e = this.manifest.dateRanges.findIndex(e => e.id === t.id);
                  this.manifest.dateRanges[e] = tj(this.manifest.dateRanges[e], t);
                  d[t.id] = tj(d[t.id], t);
                  this.manifest.dateRanges.pop();
                } else d[t.id] = t;
              },
              "independent-segments"() {
                this.manifest.independentSegments = !0;
              },
              "content-steering"() {
                this.manifest.contentSteering = ra(u.attributes);
                this.warnOnMissingAttributes_("#EXT-X-CONTENT-STEERING", u.attributes, ["SERVER-URI"]);
              }
            }[u.tagType] || function () { }).call(e);
          },
          uri() {
            i.uri = u.uri;
            t.push(i);
            !this.manifest.targetDuration || "duration" in i || (this.trigger("warn", {
              message: "defaulting segment duration to the target duration"
            }), i.duration = this.manifest.targetDuration);
            r && (i.key = r);
            i.timeline = o;
            s && (i.map = s);
            h = 0;
            null !== this.lastProgramDateTime && (i.programDateTime = this.lastProgramDateTime, this.lastProgramDateTime += 1e3 * i.duration);
            i = {};
          },
          comment() { },
          custom() {
            u.segment ? (i.custom = i.custom || {}, i.custom[u.customType] = u.data) : (this.manifest.custom = this.manifest.custom || {}, this.manifest.custom[u.customType] = u.data);
          }
        })[u.type].call(e);
      });
    }
    warnOnMissingAttributes_(e, t, i) {
      let s = [];
      i.forEach(function (e) {
        t.hasOwnProperty(e) || s.push(e);
      });
      s.length && this.trigger("warn", {
        message: e + " lacks required attribute(s): " + s.join(", ")
      });
    }
    push(e) {
      this.lineStream.push(e);
    }
    end() {
      this.lineStream.push("\n");
      this.manifest.dateRanges.length && null === this.lastProgramDateTime && this.trigger("warn", {
        message: "A playlist with EXT-X-DATERANGE tag must contain atleast one EXT-X-PROGRAM-DATE-TIME tag"
      });
      this.lastProgramDateTime = null;
      this.trigger("end");
    }
    addParser(e) {
      this.parseStream.addParser(e);
    }
    addTagMapper(e) {
      this.parseStream.addTagMapper(e);
    }
  }
  function rh(e) {
    return rm.audio.test((e = void 0 === e ? "" : e).trim().toLowerCase());
  }
  function rd(e) {
    void 0 === e && (e = "");
    return window.MediaSource && window.MediaSource.isTypeSupported && window.MediaSource.isTypeSupported(rv(e)) || !1;
  }
  function ru(e) {
    return (e = void 0 === e ? "" : e).toLowerCase().split(",").every(function (e) {
      e = e.trim();
      for (var t = 0; t < rf.length; t++) if (rm["muxer" + rf[t]].test(e)) return !0;
      return !1;
    });
  }
  function rc(e) {
    return rT.test(e) ? "hls" : rS.test(e) ? "dash" : "application/vnd.videojs.vhs+json" === e ? "vhs-json" : null;
  }
  function rp(e, t) {
    if ("string" != typeof (e = "string" != typeof e && e && "function" == typeof e.toString ? e.toString() : e)) return new Uint8Array();
    t || (e = unescape(encodeURIComponent(e)));
    for (i = new Uint8Array(e.length), s = 0, void 0; s < e.length; s++) {
      var i;
      var s;
      i[s] = e.charCodeAt(s);
    }
    return i;
  }
  var rm = {
    mp4: /^(av0?1|avc0?[1234]|vp0?9|flac|opus|mp3|mp4a|mp4v|stpp.ttml.im1t)/,
    webm: /^(vp0?[89]|av0?1|opus|vorbis)/,
    ogg: /^(vp0?[89]|theora|flac|opus|vorbis)/,
    video: /^(av0?1|avc0?[1234]|vp0?[89]|hvc1|hev1|theora|mp4v)/,
    audio: /^(mp4a|flac|vorbis|opus|ac-[34]|ec-3|alac|mp3|speex|aac)/,
    text: /^(stpp.ttml.im1t)/,
    muxerVideo: /^(avc0?1)/,
    muxerAudio: /^(mp4a)/,
    muxerText: /a^/
  };
  var rg = ["video", "audio", "text"];
  var rf = ["Video", "Audio", "Text"];
  var ry = function (e) {
    return e && e.replace(/avc1\.(\d+)\.(\d+)/i, function (e, t, i) {
      return "avc1." + ("00" + Number(t).toString(16)).slice(-2) + "00" + ("00" + Number(i).toString(16)).slice(-2);
    });
  };
  var r_ = function (e) {
    var e = (e = void 0 === e ? "" : e).split(",");
    var t = [];
    e.forEach(function (e) {
      var i;
      e = e.trim();
      rg.forEach(function (s) {
        var r;
        var n = rm[s].exec(e.toLowerCase());
        !n || n.length <= 1 || (i = s, n = e.substring(0, n[1].length), r = e.replace(n, ""), t.push({
          type: n,
          details: r,
          mediaType: s
        }));
      });
      i || t.push({
        type: e,
        details: "",
        mediaType: "unknown"
      });
    });
    return t;
  };
  var rv = function (e) {
    var t;
    var i;
    var s;
    if (e && "string" == typeof e) {
      i = "video";
      1 === (t = e.toLowerCase().split(",").map(function (e) {
        return ry(e.trim());
      })).length && rh(t[0]) ? i = "audio" : 1 === t.length && (s = t[0], rm.text.test((s = void 0 === s ? "" : s).trim().toLowerCase())) && (i = "application");
      s = "mp4";
      t.every(function (e) {
        return rm.mp4.test(e);
      }) ? s = "mp4" : t.every(function (e) {
        return rm.webm.test(e);
      }) ? s = "webm" : t.every(function (e) {
        return rm.ogg.test(e);
      }) && (s = "ogg");
      return i + "/" + s + ';codecs="' + e + '"';
    }
  };
  var rb = "mp4a.40.2";
  var rT = /^(audio|video|application)\/(x-|vnd\.apple\.)?mpegurl/i;
  var rS = /^application\/dash\+xml/i;
  var rw = function (e) {
    return "function" === ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer instanceof ArrayBuffer;
  };
  var rE = function (e) {
    return e instanceof Uint8Array ? e : (Array.isArray(e) || rw(e) || e instanceof ArrayBuffer || (e = "number" != typeof e || "number" == typeof e && e != e ? 0 : [e]), new Uint8Array(e && e.buffer || e, e && e.byteOffset || 0, e && e.byteLength || 0));
  };
  var rC = window.BigInt || Number;
  var rk = [rC("0x1"), rC("0x100"), rC("0x10000"), rC("0x1000000"), rC("0x100000000"), rC("0x10000000000"), rC("0x1000000000000"), rC("0x100000000000000"), rC("0x10000000000000000")];
  255 !== (tt = new Uint8Array((tt = new Uint16Array([65484])).buffer, tt.byteOffset, tt.byteLength))[0] && tt[0];
  var rx = function (e, t) {
    var t = void 0 === t ? {} : t;
    var i = t.signed;
    var i = void 0 !== i && i;
    var t = t.le;
    var s = void 0 !== t && t;
    e = rE(e);
    var t = s ? "reduce" : "reduceRight";
    var t = (e[t] || Array.prototype[t]).call(e, function (t, i, r) {
      r = s ? r : Math.abs(r + 1 - e.length);
      return t + rC(i) * rk[r];
    }, rC(0));
    i && (i = rk[e.length] / rC(2) - rC(1)) < (t = rC(t)) && (t = (t = t - i - i) - rC(2));
    return Number(t);
  };
  var rI = function (e, t, i) {
    var i = void 0 === i ? {} : i;
    var s = i.offset;
    var r = void 0 === s ? 0 : s;
    var s = i.mask;
    var n = void 0 === s ? [] : s;
    e = rE(e);
    var i = (t = rE(t)).every || Array.prototype.every;
    return t.length && e.length - r >= t.length && i.call(t, function (t, i) {
      return t === (n[i] ? n[i] & e[r + i] : e[r + i]);
    });
  };
  function rA(e, t) {
    return (t = void 0 === t ? Object : t) && "function" == typeof t.freeze ? t.freeze(e) : e;
  }
  var rD = rA({
    HTML: "text/html",
    isHTML: function (e) {
      return e === rD.HTML;
    },
    XML_APPLICATION: "application/xml",
    XML_TEXT: "text/xml",
    XML_XHTML_APPLICATION: "application/xhtml+xml",
    XML_SVG_IMAGE: "image/svg+xml"
  });
  var rL = rA({
    HTML: "http://www.w3.org/1999/xhtml",
    isHTML: function (e) {
      return e === rL.HTML;
    },
    SVG: "http://www.w3.org/2000/svg",
    XML: "http://www.w3.org/XML/1998/namespace",
    XMLNS: "http://www.w3.org/2000/xmlns/"
  });
  var rP = function (e, t, i) {
    if (void 0 === i && (i = Array.prototype), e && "function" == typeof i.find) return i.find.call(e, t);
    for (var s = 0; s < e.length; s++) if (Object.prototype.hasOwnProperty.call(e, s)) {
      var r = e[s];
      if (t.call(void 0, r, s, e)) return r;
    }
  };
  function rO(e) {
    return "" !== e;
  }
  function rN(e, t) {
    e.hasOwnProperty(t) || (e[t] = !0);
    return e;
  }
  function rR(e) {
    return e ? Object.keys((e = e ? e.split(/[\t\n\f\r ]+/).filter(rO) : []).reduce(rN, {})) : [];
  }
  function rM(e, t) {
    for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
  }
  function rU(e, t) {
    var i = e.prototype;
    function s() { }
    i instanceof t || (s.prototype = t.prototype, rM(i, s = new s()), e.prototype = i = s);
    i.constructor != e && (i.constructor = e);
  }
  var sL = {};
  sL.ELEMENT_NODE = 1;
  sL.ATTRIBUTE_NODE = 2;
  sL.TEXT_NODE = 3;
  sL.CDATA_SECTION_NODE = 4;
  sL.ENTITY_REFERENCE_NODE = 5;
  sL.ENTITY_NODE = 6;
  sL.PROCESSING_INSTRUCTION_NODE = 7;
  sL.COMMENT_NODE = 8;
  sL.DOCUMENT_NODE = 9;
  sL.DOCUMENT_TYPE_NODE = 10;
  sL.DOCUMENT_FRAGMENT_NODE = 11;
  sL.NOTATION_NODE = 12;
  var sI = {};
  var rB = {};
  sI.INDEX_SIZE_ERR = (rB[1] = "Index size error", 1);
  sI.DOMSTRING_SIZE_ERR = (rB[2] = "DOMString size error", 2);
  var rF = sI.HIERARCHY_REQUEST_ERR = (rB[3] = "Hierarchy request error", 3);
  sI.WRONG_DOCUMENT_ERR = (rB[4] = "Wrong document", 4);
  sI.INVALID_CHARACTER_ERR = (rB[5] = "Invalid character", 5);
  sI.NO_DATA_ALLOWED_ERR = (rB[6] = "No data allowed", 6);
  sI.NO_MODIFICATION_ALLOWED_ERR = (rB[7] = "No modification allowed", 7);
  var rq = sI.NOT_FOUND_ERR = (rB[8] = "Not found", 8);
  function rj(e, t) {
    var i;
    t instanceof Error ? i = t : (i = this, Error.call(this, rB[e]), this.message = rB[e], Error.captureStackTrace && Error.captureStackTrace(this, rj));
    i.code = e;
    t && (this.message = this.message + ": " + t);
    return i;
  }
  function rH() { }
  function rV(e, t) {
    this._node = e;
    this._refresh = t;
    r$(this);
  }
  function r$(e) {
    var t = e._node._inc || e._node.ownerDocument._inc;
    if (e._inc !== t) {
      var i = e._refresh(e._node);
      if (ny(e, "length", i.length), !e.$$length || i.length < e.$$length) for (var s = i.length; s in e; s++) Object.prototype.hasOwnProperty.call(e, s) && delete e[s];
      rM(i, e);
      e._inc = t;
    }
  }
  function rz() { }
  function rW(e, t) {
    for (var i = e.length; i--;) if (e[i] === t) return i;
  }
  function rG(e, t, i, s) {
    s ? t[rW(t, s)] = i : t[t.length++] = i;
    e && (t = (i.ownerElement = e).ownerDocument) && (s && r0(t, e, s), s = e, e = i, (i = t) && i._inc++, e.namespaceURI === rL.XMLNS) && (s._nsMap[e.prefix ? e.localName : ""] = e.value);
  }
  function rX(e, t, i) {
    var s = rW(t, i);
    if (!(0 <= s)) throw new rj(rq, Error(e.tagName + "@" + i));
    for (n = t.length - 1, void 0; s < n;) {
      var r;
      var n;
      t[s] = t[++s];
    }
    t.length = n;
    e && (r = e.ownerDocument) && (r0(r, e, i), i.ownerElement = null);
  }
  function rK() { }
  function rY() { }
  function rQ(e) {
    return ("<" == e ? "&lt;" : ">" == e && "&gt;") || ("&" == e ? "&amp;" : '"' == e && "&quot;") || "&#" + e.charCodeAt() + ";";
  }
  function rJ(e, t) {
    if (t(e)) return 1;
    if (e = e.firstChild) do if (rJ(e, t)) return 1; while (e = e.nextSibling);
  }
  function rZ() {
    this.ownerDocument = this;
  }
  function r0(e, t, i) {
    e && e._inc++;
    i.namespaceURI === rL.XMLNS && delete t._nsMap[i.prefix ? i.localName : ""];
  }
  function r1(e, t, i) {
    if (e && e._inc) {
      e._inc++;
      var s = t.childNodes;
      if (i) s[s.length++] = i; else {
        for (r = t.firstChild, n = 0, void 0; r;) {
          var r;
          var n;
          r = (s[n++] = r).nextSibling;
        }
        s.length = n;
        delete s[s.length];
      }
    }
  }
  function r2(e, t) {
    var i = t.previousSibling;
    var s = t.nextSibling;
    i ? i.nextSibling = s : e.firstChild = s;
    s ? s.previousSibling = i : e.lastChild = i;
    t.parentNode = null;
    t.previousSibling = null;
    t.nextSibling = null;
    r1(e.ownerDocument, e);
    return t;
  }
  function r4(e) {
    return e && e.nodeType === rY.DOCUMENT_TYPE_NODE;
  }
  function r8(e) {
    return e && e.nodeType === rY.ELEMENT_NODE;
  }
  function r5(e) {
    return e && e.nodeType === rY.TEXT_NODE;
  }
  function r3(e, t) {
    var i;
    var e = e.childNodes || [];
    if (!rP(e, r8) && !r4(t)) {
      i = rP(e, r4);
      return !(t && i && e.indexOf(i) > e.indexOf(t));
    }
  }
  function r6(e, t) {
    var i;
    var e = e.childNodes || [];
    if (!rP(e, function (e) {
      return r8(e) && e !== t;
    })) {
      i = rP(e, r4);
      return !(t && i && e.indexOf(i) > e.indexOf(t));
    }
  }
  function r7(e, t, i) {
    var s = e.childNodes || [];
    var r = t.childNodes || [];
    if (t.nodeType === rY.DOCUMENT_FRAGMENT_NODE) {
      var n = r.filter(r8);
      if (1 < n.length || rP(r, r5)) throw new rj(rF, "More than one element or text in fragment");
      if (1 === n.length && !r6(e, i)) throw new rj(rF, "Element in fragment can not be inserted before doctype");
    }
    if (r8(t) && !r6(e, i)) throw new rj(rF, "Only one element can be added and only after doctype");
    if (r4(t)) {
      if (rP(s, function (e) {
        return r4(e) && e !== i;
      })) throw new rj(rF, "Only one doctype is allowed");
      if (r = rP(s, r8), i && s.indexOf(r) < s.indexOf(i)) throw new rj(rF, "Doctype can only be inserted before an element");
    }
  }
  function r9(e, t, i, s) {
    if (function (e, t, i) {
      var s;
      if (!(s = e) || s.nodeType !== rY.DOCUMENT_NODE && s.nodeType !== rY.DOCUMENT_FRAGMENT_NODE && s.nodeType !== rY.ELEMENT_NODE) throw new rj(rF, "Unexpected parent node type " + e.nodeType);
      if (i && i.parentNode !== e) throw new rj(rq, "child not in parent");
      if (!(s = t) || !(r8(s) || r5(s) || r4(s) || s.nodeType === rY.DOCUMENT_FRAGMENT_NODE || s.nodeType === rY.COMMENT_NODE || s.nodeType === rY.PROCESSING_INSTRUCTION_NODE) || r4(t) && e.nodeType !== rY.DOCUMENT_NODE) throw new rj(rF, "Unexpected node type " + t.nodeType + " for parent node type " + e.nodeType);
    }(e, t, i), e.nodeType === rY.DOCUMENT_NODE && (s || function (e, t, i) {
      var s = e.childNodes || [];
      var r = t.childNodes || [];
      if (t.nodeType === rY.DOCUMENT_FRAGMENT_NODE) {
        var n = r.filter(r8);
        if (1 < n.length || rP(r, r5)) throw new rj(rF, "More than one element or text in fragment");
        if (1 === n.length && !r3(e, i)) throw new rj(rF, "Element in fragment can not be inserted before doctype");
      }
      if (r8(t) && !r3(e, i)) throw new rj(rF, "Only one element can be added and only after doctype");
      if (r4(t)) {
        if (rP(s, r4)) throw new rj(rF, "Only one doctype is allowed");
        if (r = rP(s, r8), i && s.indexOf(r) < s.indexOf(i)) throw new rj(rF, "Doctype can only be inserted before an element");
        if (!i && r) throw new rj(rF, "Doctype can not be appended since element is present");
      }
    })(e, t, i), (s = t.parentNode) && s.removeChild(t), 11 === t.nodeType) {
      var r = t.firstChild;
      if (null == r) return t;
      var n = t.lastChild;
    } else r = n = t;
    for (s = i ? i.previousSibling : e.lastChild, r.previousSibling = s, n.nextSibling = i, s ? s.nextSibling = r : e.firstChild = r, null == i ? e.lastChild = n : i.previousSibling = n; r.parentNode = e, r !== n && (r = r.nextSibling););
    r1(e.ownerDocument || e, e);
    11 == t.nodeType && (t.firstChild = t.lastChild = null);
    return t;
  }
  function ne() {
    this._nsMap = {};
  }
  function nt() { }
  function ni() { }
  function ns() { }
  function nr() { }
  function nn() { }
  function na() { }
  function no() { }
  function nl() { }
  function nh() { }
  function nd() { }
  function nu() { }
  function nc() { }
  function np(e, t) {
    var i;
    var s = [];
    var r = 9 == this.nodeType && this.documentElement || this;
    var n = r.prefix;
    var a = r.namespaceURI;
    nf(this, s, e, t, i = a && null == n && null == r.lookupPrefix(a) ? [{
      namespace: a,
      prefix: null
    }] : i);
    return s.join("");
  }
  function nm(e, t, i) {
    var s = e.prefix || "";
    var r = e.namespaceURI;
    if (r && ("xml" !== s || r !== rL.XML) && r !== rL.XMLNS) {
      for (var n = i.length; n--;) {
        var a = i[n];
        if (a.prefix === s) return a.namespace !== r;
      }
      return 1;
    }
  }
  function ng(e, t, i) {
    e.push(" ", t, '="', i.replace(/[<>&"\t\n\r]/g, rQ), '"');
  }
  function nf(e, t, i, s, r) {
    if (r = r || [], s) {
      if (!(e = s(e))) return;
      if ("string" == typeof e) return void t.push(e);
    }
    switch (e.nodeType) {
      case 1:
        var n = e.attributes;
        var a = n.length;
        var o = e.firstChild;
        var l = e.tagName;
        var h = l;
        if (!(i = rL.isHTML(e.namespaceURI) || i) && !e.prefix && e.namespaceURI) {
          for (u = 0, void 0; u < n.length; u++) {
            var d;
            var u;
            if ("xmlns" === n.item(u).name) {
              d = n.item(u).value;
              break;
            }
          }
          if (!d) {
            for (var c = r.length - 1; 0 <= c; c--) if ("" === (p = r[c]).prefix && p.namespace === e.namespaceURI) {
              d = p.namespace;
              break;
            }
          }
          if (d !== e.namespaceURI) {
            for (c = r.length - 1, void 0; 0 <= c; c--) {
              var p;
              var c;
              if ((p = r[c]).namespace === e.namespaceURI) {
                p.prefix && (h = p.prefix + ":" + l);
                break;
              }
            }
          }
        }
        t.push("<", h);
        for (var m = 0; m < a; m++) "xmlns" == (g = n.item(m)).prefix ? r.push({
          prefix: g.localName,
          namespace: g.value
        }) : "xmlns" == g.nodeName && r.push({
          prefix: "",
          namespace: g.value
        });
        for (m = 0, void 0; m < a; m++) {
          var g;
          var f;
          var y;
          var m;
          nm(g = n.item(m), 0, r) && (ng(t, (f = g.prefix || "") ? "xmlns:" + f : "xmlns", y = g.namespaceURI), r.push({
            prefix: f,
            namespace: y
          }));
          nf(g, t, i, s, r);
        }
        if (l === h && nm(e, 0, r) && (ng(t, (f = e.prefix || "") ? "xmlns:" + f : "xmlns", y = e.namespaceURI), r.push({
          prefix: f,
          namespace: y
        })), o || i && !/^(?:meta|link|img|br|hr|input)$/i.test(l)) {
          if (t.push(">"), i && /^script$/i.test(l)) for (; o;) {
            o.data ? t.push(o.data) : nf(o, t, i, s, r.slice());
            o = o.nextSibling;
          } else for (; o;) {
            nf(o, t, i, s, r.slice());
            o = o.nextSibling;
          }
          t.push("</", h, ">");
        } else t.push("/>");
        return;
      case 9:
      case 11:
        for (o = e.firstChild; o;) {
          nf(o, t, i, s, r.slice());
          o = o.nextSibling;
        }
        return;
      case 2:
        return ng(t, e.name, e.value);
      case 3:
        return t.push(e.data.replace(/[<&>]/g, rQ));
      case 4:
        return t.push("<![CDATA[", e.data, "]]>");
      case 8:
        return t.push("\x3c!--", e.data, "--\x3e");
      case 10:
        var _ = e.publicId;
        var v = e.systemId;
        t.push("<!DOCTYPE ", e.name);
        return void (_ ? (t.push(" PUBLIC ", _), v && "." != v && t.push(" ", v), t.push(">")) : v && "." != v ? t.push(" SYSTEM ", v, ">") : ((_ = e.internalSubset) && t.push(" [", _, "]"), t.push(">")));
      case 7:
        return t.push("<?", e.target, " ", e.data, "?>");
      case 5:
        return t.push("&", e.nodeName, ";");
      default:
        t.push("??", e.nodeName);
    }
  }
  function ny(e, t, i) {
    e[t] = i;
  }
  sI.NOT_SUPPORTED_ERR = (rB[9] = "Not supported", 9);
  sI.INUSE_ATTRIBUTE_ERR = (rB[10] = "Attribute in use", 10);
  sI.INVALID_STATE_ERR = (rB[11] = "Invalid state", 11);
  sI.SYNTAX_ERR = (rB[12] = "Syntax error", 12);
  sI.INVALID_MODIFICATION_ERR = (rB[13] = "Invalid modification", 13);
  sI.NAMESPACE_ERR = (rB[14] = "Invalid namespace", 14);
  sI.INVALID_ACCESS_ERR = (rB[15] = "Invalid access", 15);
  rj.prototype = Error.prototype;
  rM(sI, rj);
  rH.prototype = {
    length: 0,
    item: function (e) {
      return 0 <= e && e < this.length ? this[e] : null;
    },
    toString: function (e, t) {
      for (i = [], s = 0, void 0; s < this.length; s++) {
        var i;
        var s;
        nf(this[s], i, e, t);
      }
      return i.join("");
    },
    filter: function (e) {
      return Array.prototype.filter.call(this, e);
    },
    indexOf: function (e) {
      return Array.prototype.indexOf.call(this, e);
    }
  };
  rV.prototype.item = function (e) {
    r$(this);
    return this[e] || null;
  };
  rU(rV, rH);
  rz.prototype = {
    length: 0,
    item: rH.prototype.item,
    getNamedItem: function (e) {
      for (var t = this.length; t--;) {
        var i = this[t];
        if (i.nodeName == e) return i;
      }
    },
    setNamedItem: function (e) {
      var t = e.ownerElement;
      if (t && t != this._ownerElement) throw new rj(10);
      t = this.getNamedItem(e.nodeName);
      rG(this._ownerElement, this, e, t);
      return t;
    },
    setNamedItemNS: function (e) {
      var t = e.ownerElement;
      if (t && t != this._ownerElement) throw new rj(10);
      t = this.getNamedItemNS(e.namespaceURI, e.localName);
      rG(this._ownerElement, this, e, t);
      return t;
    },
    removeNamedItem: function (e) {
      e = this.getNamedItem(e);
      rX(this._ownerElement, this, e);
      return e;
    },
    removeNamedItemNS: function (e, t) {
      e = this.getNamedItemNS(e, t);
      rX(this._ownerElement, this, e);
      return e;
    },
    getNamedItemNS: function (e, t) {
      for (var i = this.length; i--;) {
        var s = this[i];
        if (s.localName == t && s.namespaceURI == e) return s;
      }
      return null;
    }
  };
  rK.prototype = {
    hasFeature: function (e, t) {
      return !0;
    },
    createDocument: function (e, t, i) {
      var s = new rZ();
      s.implementation = this;
      s.childNodes = new rH();
      s.doctype = i || null;
      i && s.appendChild(i);
      t && (i = s.createElementNS(e, t), s.appendChild(i));
      return s;
    },
    createDocumentType: function (e, t, i) {
      var s = new na();
      s.name = e;
      s.nodeName = e;
      s.publicId = t || "";
      s.systemId = i || "";
      return s;
    }
  };
  rY.prototype = {
    firstChild: null,
    lastChild: null,
    previousSibling: null,
    nextSibling: null,
    attributes: null,
    parentNode: null,
    childNodes: null,
    ownerDocument: null,
    nodeValue: null,
    namespaceURI: null,
    prefix: null,
    localName: null,
    insertBefore: function (e, t) {
      return r9(this, e, t);
    },
    replaceChild: function (e, t) {
      r9(this, e, t, r7);
      t && this.removeChild(t);
    },
    removeChild: function (e) {
      return r2(this, e);
    },
    appendChild: function (e) {
      return this.insertBefore(e, null);
    },
    hasChildNodes: function () {
      return null != this.firstChild;
    },
    cloneNode: function (e) {
      return function e(t, i, s) {
        var r;
        var n = new i.constructor();
        for (var a in i) Object.prototype.hasOwnProperty.call(i, a) && "object" != typeof (r = i[a]) && r != n[a] && (n[a] = r);
        switch (i.childNodes && (n.childNodes = new rH()), n.ownerDocument = t, n.nodeType) {
          case 1:
            var o = i.attributes;
            var l = n.attributes = new rz();
            var h = o.length;
            l._ownerElement = n;
            for (var d = 0; d < h; d++) n.setAttributeNode(e(t, o.item(d), !0));
            break;
          case 2:
            s = !0;
        }
        if (s) for (var u = i.firstChild; u;) {
          n.appendChild(e(t, u, s));
          u = u.nextSibling;
        }
        return n;
      }(this.ownerDocument || this, this, e);
    },
    normalize: function () {
      for (var e = this.firstChild; e;) {
        var t = e.nextSibling;
        t && 3 == t.nodeType && 3 == e.nodeType ? (this.removeChild(t), e.appendData(t.data)) : (e.normalize(), e = t);
      }
    },
    isSupported: function (e, t) {
      return this.ownerDocument.implementation.hasFeature(e, t);
    },
    hasAttributes: function () {
      return 0 < this.attributes.length;
    },
    lookupPrefix: function (e) {
      for (var t = this; t;) {
        var i = t._nsMap;
        if (i) {
          for (var s in i) if (Object.prototype.hasOwnProperty.call(i, s) && i[s] === e) return s;
        }
        t = 2 == t.nodeType ? t.ownerDocument : t.parentNode;
      }
      return null;
    },
    lookupNamespaceURI: function (e) {
      for (var t = this; t;) {
        var i = t._nsMap;
        if (i && Object.prototype.hasOwnProperty.call(i, e)) return i[e];
        t = 2 == t.nodeType ? t.ownerDocument : t.parentNode;
      }
      return null;
    },
    isDefaultNamespace: function (e) {
      return null == this.lookupPrefix(e);
    }
  };
  rM(sL, rY);
  rM(sL, rY.prototype);
  rZ.prototype = {
    nodeName: "#document",
    nodeType: 9,
    doctype: null,
    documentElement: null,
    _inc: 1,
    insertBefore: function (e, t) {
      if (11 == e.nodeType) for (var i = e.firstChild; i;) {
        var s = i.nextSibling;
        this.insertBefore(i, t);
        i = s;
      } else {
        r9(this, e, t);
        null === (e.ownerDocument = this).documentElement && 1 === e.nodeType && (this.documentElement = e);
      }
      return e;
    },
    removeChild: function (e) {
      this.documentElement == e && (this.documentElement = null);
      return r2(this, e);
    },
    replaceChild: function (e, t) {
      r9(this, e, t, r7);
      e.ownerDocument = this;
      t && this.removeChild(t);
      r8(e) && (this.documentElement = e);
    },
    importNode: function (e, t) {
      return function e(t, i, s) {
        var r;
        switch (i.nodeType) {
          case 1:
            (r = i.cloneNode(!1)).ownerDocument = t;
          case 11:
            break;
          case 2:
            s = !0;
        }
        if ((r = r || i.cloneNode(!1)).ownerDocument = t, r.parentNode = null, s) for (var n = i.firstChild; n;) {
          r.appendChild(e(t, n, s));
          n = n.nextSibling;
        }
        return r;
      }(this, e, t);
    },
    getElementById: function (e) {
      var t = null;
      rJ(this.documentElement, function (i) {
        if (1 == i.nodeType && i.getAttribute("id") == e) {
          t = i;
          return !0;
        }
      });
      return t;
    },
    getElementsByClassName: function (e) {
      var t = rR(e);
      return new rV(this, function (i) {
        var s = [];
        0 < t.length && rJ(i.documentElement, function (r) {
          var n;
          var a;
          var o;
          r !== i && 1 === r.nodeType && (n = r.getAttribute("class")) && ((a = e === n) || (n = rR(n), a = t.every((o = n, function (e) {
            return o && -1 !== o.indexOf(e);
          }))), a) && s.push(r);
        });
        return s;
      });
    },
    createElement: function (e) {
      var t = new ne();
      t.ownerDocument = this;
      t.nodeName = e;
      t.tagName = e;
      t.localName = e;
      t.childNodes = new rH();
      return (t.attributes = new rz())._ownerElement = t;
    },
    createDocumentFragment: function () {
      var e = new nd();
      e.ownerDocument = this;
      e.childNodes = new rH();
      return e;
    },
    createTextNode: function (e) {
      var t = new ns();
      t.ownerDocument = this;
      t.appendData(e);
      return t;
    },
    createComment: function (e) {
      var t = new nr();
      t.ownerDocument = this;
      t.appendData(e);
      return t;
    },
    createCDATASection: function (e) {
      var t = new nn();
      t.ownerDocument = this;
      t.appendData(e);
      return t;
    },
    createProcessingInstruction: function (e, t) {
      var i = new nu();
      i.ownerDocument = this;
      i.tagName = i.nodeName = i.target = e;
      i.nodeValue = i.data = t;
      return i;
    },
    createAttribute: function (e) {
      var t = new nt();
      t.ownerDocument = this;
      t.name = e;
      t.nodeName = e;
      t.localName = e;
      t.specified = !0;
      return t;
    },
    createEntityReference: function (e) {
      var t = new nh();
      t.ownerDocument = this;
      t.nodeName = e;
      return t;
    },
    createElementNS: function (e, t) {
      var i = new ne();
      var s = t.split(":");
      var r = i.attributes = new rz();
      i.childNodes = new rH();
      i.ownerDocument = this;
      i.nodeName = t;
      i.tagName = t;
      i.namespaceURI = e;
      2 == s.length ? (i.prefix = s[0], i.localName = s[1]) : i.localName = t;
      return r._ownerElement = i;
    },
    createAttributeNS: function (e, t) {
      var i = new nt();
      var s = t.split(":");
      i.ownerDocument = this;
      i.nodeName = t;
      i.name = t;
      i.namespaceURI = e;
      i.specified = !0;
      2 == s.length ? (i.prefix = s[0], i.localName = s[1]) : i.localName = t;
      return i;
    }
  };
  rU(rZ, rY);
  rZ.prototype.getElementsByTagName = (ne.prototype = {
    nodeType: 1,
    hasAttribute: function (e) {
      return null != this.getAttributeNode(e);
    },
    getAttribute: function (e) {
      return (e = this.getAttributeNode(e)) && e.value || "";
    },
    getAttributeNode: function (e) {
      return this.attributes.getNamedItem(e);
    },
    setAttribute: function (e, t) {
      (e = this.ownerDocument.createAttribute(e)).value = e.nodeValue = "" + t;
      this.setAttributeNode(e);
    },
    removeAttribute: function (e) {
      (e = this.getAttributeNode(e)) && this.removeAttributeNode(e);
    },
    appendChild: function (e) {
      return 11 === e.nodeType ? this.insertBefore(e, null) : (e.parentNode && e.parentNode.removeChild(e), e.parentNode = this, e.previousSibling = this.lastChild, e.nextSibling = null, e.previousSibling ? e.previousSibling.nextSibling = e : this.firstChild = e, this.lastChild = e, r1(this.ownerDocument, this, e), e);
    },
    setAttributeNode: function (e) {
      return this.attributes.setNamedItem(e);
    },
    setAttributeNodeNS: function (e) {
      return this.attributes.setNamedItemNS(e);
    },
    removeAttributeNode: function (e) {
      return this.attributes.removeNamedItem(e.nodeName);
    },
    removeAttributeNS: function (e, t) {
      (e = this.getAttributeNodeNS(e, t)) && this.removeAttributeNode(e);
    },
    hasAttributeNS: function (e, t) {
      return null != this.getAttributeNodeNS(e, t);
    },
    getAttributeNS: function (e, t) {
      return (e = this.getAttributeNodeNS(e, t)) && e.value || "";
    },
    setAttributeNS: function (e, t, i) {
      (e = this.ownerDocument.createAttributeNS(e, t)).value = e.nodeValue = "" + i;
      this.setAttributeNode(e);
    },
    getAttributeNodeNS: function (e, t) {
      return this.attributes.getNamedItemNS(e, t);
    },
    getElementsByTagName: function (e) {
      return new rV(this, function (t) {
        var i = [];
        rJ(t, function (s) {
          s === t || 1 != s.nodeType || "*" !== e && s.tagName != e || i.push(s);
        });
        return i;
      });
    },
    getElementsByTagNameNS: function (e, t) {
      return new rV(this, function (i) {
        var s = [];
        rJ(i, function (r) {
          r === i || 1 !== r.nodeType || "*" !== e && r.namespaceURI !== e || "*" !== t && r.localName != t || s.push(r);
        });
        return s;
      });
    }
  }).getElementsByTagName;
  rZ.prototype.getElementsByTagNameNS = ne.prototype.getElementsByTagNameNS;
  rU(ne, rY);
  nt.prototype.nodeType = 2;
  rU(nt, rY);
  ni.prototype = {
    data: "",
    substringData: function (e, t) {
      return this.data.substring(e, e + t);
    },
    appendData: function (e) {
      e = this.data + e;
      this.nodeValue = this.data = e;
      this.length = e.length;
    },
    insertData: function (e, t) {
      this.replaceData(e, 0, t);
    },
    appendChild: function (e) {
      throw Error(rB[rF]);
    },
    deleteData: function (e, t) {
      this.replaceData(e, t, "");
    },
    replaceData: function (e, t, i) {
      var s = this.data.substring(0, e);
      var e = this.data.substring(e + t);
      this.nodeValue = this.data = i = s + i + e;
      this.length = i.length;
    }
  };
  rU(ni, rY);
  ns.prototype = {
    nodeName: "#text",
    nodeType: 3,
    splitText: function (e) {
      var t = (i = this.data).substring(e);
      var i = i.substring(0, e);
      this.data = this.nodeValue = i;
      this.length = i.length;
      var e = this.ownerDocument.createTextNode(t);
      this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
      return e;
    }
  };
  rU(ns, ni);
  nr.prototype = {
    nodeName: "#comment",
    nodeType: 8
  };
  rU(nr, ni);
  nn.prototype = {
    nodeName: "#cdata-section",
    nodeType: 4
  };
  rU(nn, ni);
  na.prototype.nodeType = 10;
  rU(na, rY);
  no.prototype.nodeType = 12;
  rU(no, rY);
  nl.prototype.nodeType = 6;
  rU(nl, rY);
  nh.prototype.nodeType = 5;
  rU(nh, rY);
  nd.prototype.nodeName = "#document-fragment";
  nd.prototype.nodeType = 11;
  rU(nd, rY);
  nu.prototype.nodeType = 7;
  rU(nu, rY);
  nc.prototype.serializeToString = function (e, t, i) {
    return np.call(e, t, i);
  };
  rY.prototype.toString = np;
  try {
    Object.defineProperty && (Object.defineProperty(rV.prototype, "length", {
      get: function () {
        r$(this);
        return this.$$length;
      }
    }), Object.defineProperty(rY.prototype, "textContent", {
      get: function () {
        return function e(t) {
          switch (t.nodeType) {
            case 1:
            case 11:
              var i = [];
              for (t = t.firstChild; t;) {
                7 !== t.nodeType && 8 !== t.nodeType && i.push(e(t));
                t = t.nextSibling;
              }
              return i.join("");
            default:
              return t.nodeValue;
          }
        }(this);
      },
      set: function (e) {
        switch (this.nodeType) {
          case 1:
          case 11:
            for (; this.firstChild;) this.removeChild(this.firstChild);
            (e || String(e)) && this.appendChild(this.ownerDocument.createTextNode(e));
            break;
          default:
            this.data = e;
            this.value = e;
            this.nodeValue = e;
        }
      }
    }), ny = function (e, t, i) {
      e["$$" + t] = i;
    });
  } catch (e) { }
  var sk = {
    DocumentType: na,
    DOMException: rj,
    DOMImplementation: rK,
    Element: ne,
    Node: rY,
    NodeList: rH,
    XMLSerializer: nc
  };
  var n_ = ti(function (e, t) {
    t.XML_ENTITIES = rA({
      amp: "&",
      apos: "'",
      gt: ">",
      lt: "<",
      quot: '"'
    });
    t.HTML_ENTITIES = rA({
      Aacute: "\xc1",
      aacute: "\xe1",
      Abreve: "\u0102",
      abreve: "\u0103",
      ac: "\u223E",
      acd: "\u223F",
      acE: "\u223E\u0333",
      Acirc: "\xc2",
      acirc: "\xe2",
      acute: "\xb4",
      Acy: "\u0410",
      acy: "\u0430",
      AElig: "\xc6",
      aelig: "\xe6",
      af: "\u2061",
      Afr: "\u{1D504}",
      afr: "\u{1D51E}",
      Agrave: "\xc0",
      agrave: "\xe0",
      alefsym: "\u2135",
      aleph: "\u2135",
      Alpha: "\u0391",
      alpha: "\u03B1",
      Amacr: "\u0100",
      amacr: "\u0101",
      amalg: "\u2A3F",
      AMP: "&",
      amp: "&",
      And: "\u2A53",
      and: "\u2227",
      andand: "\u2A55",
      andd: "\u2A5C",
      andslope: "\u2A58",
      andv: "\u2A5A",
      ang: "\u2220",
      ange: "\u29A4",
      angle: "\u2220",
      angmsd: "\u2221",
      angmsdaa: "\u29A8",
      angmsdab: "\u29A9",
      angmsdac: "\u29AA",
      angmsdad: "\u29AB",
      angmsdae: "\u29AC",
      angmsdaf: "\u29AD",
      angmsdag: "\u29AE",
      angmsdah: "\u29AF",
      angrt: "\u221F",
      angrtvb: "\u22BE",
      angrtvbd: "\u299D",
      angsph: "\u2222",
      angst: "\xc5",
      angzarr: "\u237C",
      Aogon: "\u0104",
      aogon: "\u0105",
      Aopf: "\u{1D538}",
      aopf: "\u{1D552}",
      ap: "\u2248",
      apacir: "\u2A6F",
      apE: "\u2A70",
      ape: "\u224A",
      apid: "\u224B",
      apos: "'",
      ApplyFunction: "\u2061",
      approx: "\u2248",
      approxeq: "\u224A",
      Aring: "\xc5",
      aring: "\xe5",
      Ascr: "\u{1D49C}",
      ascr: "\u{1D4B6}",
      Assign: "\u2254",
      ast: "*",
      asymp: "\u2248",
      asympeq: "\u224D",
      Atilde: "\xc3",
      atilde: "\xe3",
      Auml: "\xc4",
      auml: "\xe4",
      awconint: "\u2233",
      awint: "\u2A11",
      backcong: "\u224C",
      backepsilon: "\u03F6",
      backprime: "\u2035",
      backsim: "\u223D",
      backsimeq: "\u22CD",
      Backslash: "\u2216",
      Barv: "\u2AE7",
      barvee: "\u22BD",
      Barwed: "\u2306",
      barwed: "\u2305",
      barwedge: "\u2305",
      bbrk: "\u23B5",
      bbrktbrk: "\u23B6",
      bcong: "\u224C",
      Bcy: "\u0411",
      bcy: "\u0431",
      bdquo: "\u201E",
      becaus: "\u2235",
      Because: "\u2235",
      because: "\u2235",
      bemptyv: "\u29B0",
      bepsi: "\u03F6",
      bernou: "\u212C",
      Bernoullis: "\u212C",
      Beta: "\u0392",
      beta: "\u03B2",
      beth: "\u2136",
      between: "\u226C",
      Bfr: "\u{1D505}",
      bfr: "\u{1D51F}",
      bigcap: "\u22C2",
      bigcirc: "\u25EF",
      bigcup: "\u22C3",
      bigodot: "\u2A00",
      bigoplus: "\u2A01",
      bigotimes: "\u2A02",
      bigsqcup: "\u2A06",
      bigstar: "\u2605",
      bigtriangledown: "\u25BD",
      bigtriangleup: "\u25B3",
      biguplus: "\u2A04",
      bigvee: "\u22C1",
      bigwedge: "\u22C0",
      bkarow: "\u290D",
      blacklozenge: "\u29EB",
      blacksquare: "\u25AA",
      blacktriangle: "\u25B4",
      blacktriangledown: "\u25BE",
      blacktriangleleft: "\u25C2",
      blacktriangleright: "\u25B8",
      blank: "\u2423",
      blk12: "\u2592",
      blk14: "\u2591",
      blk34: "\u2593",
      block: "\u2588",
      bne: "=\u20E5",
      bnequiv: "\u2261\u20E5",
      bNot: "\u2AED",
      bnot: "\u2310",
      Bopf: "\u{1D539}",
      bopf: "\u{1D553}",
      bot: "\u22A5",
      bottom: "\u22A5",
      bowtie: "\u22C8",
      boxbox: "\u29C9",
      boxDL: "\u2557",
      boxDl: "\u2556",
      boxdL: "\u2555",
      boxdl: "\u2510",
      boxDR: "\u2554",
      boxDr: "\u2553",
      boxdR: "\u2552",
      boxdr: "\u250C",
      boxH: "\u2550",
      boxh: "\u2500",
      boxHD: "\u2566",
      boxHd: "\u2564",
      boxhD: "\u2565",
      boxhd: "\u252C",
      boxHU: "\u2569",
      boxHu: "\u2567",
      boxhU: "\u2568",
      boxhu: "\u2534",
      boxminus: "\u229F",
      boxplus: "\u229E",
      boxtimes: "\u22A0",
      boxUL: "\u255D",
      boxUl: "\u255C",
      boxuL: "\u255B",
      boxul: "\u2518",
      boxUR: "\u255A",
      boxUr: "\u2559",
      boxuR: "\u2558",
      boxur: "\u2514",
      boxV: "\u2551",
      boxv: "\u2502",
      boxVH: "\u256C",
      boxVh: "\u256B",
      boxvH: "\u256A",
      boxvh: "\u253C",
      boxVL: "\u2563",
      boxVl: "\u2562",
      boxvL: "\u2561",
      boxvl: "\u2524",
      boxVR: "\u2560",
      boxVr: "\u255F",
      boxvR: "\u255E",
      boxvr: "\u251C",
      bprime: "\u2035",
      Breve: "\u02D8",
      breve: "\u02D8",
      brvbar: "\xa6",
      Bscr: "\u212C",
      bscr: "\u{1D4B7}",
      bsemi: "\u204F",
      bsim: "\u223D",
      bsime: "\u22CD",
      bsol: "\\",
      bsolb: "\u29C5",
      bsolhsub: "\u27C8",
      bull: "\u2022",
      bullet: "\u2022",
      bump: "\u224E",
      bumpE: "\u2AAE",
      bumpe: "\u224F",
      Bumpeq: "\u224E",
      bumpeq: "\u224F",
      Cacute: "\u0106",
      cacute: "\u0107",
      Cap: "\u22D2",
      cap: "\u2229",
      capand: "\u2A44",
      capbrcup: "\u2A49",
      capcap: "\u2A4B",
      capcup: "\u2A47",
      capdot: "\u2A40",
      CapitalDifferentialD: "\u2145",
      caps: "\u2229\uFE00",
      caret: "\u2041",
      caron: "\u02C7",
      Cayleys: "\u212D",
      ccaps: "\u2A4D",
      Ccaron: "\u010C",
      ccaron: "\u010D",
      Ccedil: "\xc7",
      ccedil: "\xe7",
      Ccirc: "\u0108",
      ccirc: "\u0109",
      Cconint: "\u2230",
      ccups: "\u2A4C",
      ccupssm: "\u2A50",
      Cdot: "\u010A",
      cdot: "\u010B",
      cedil: "\xb8",
      Cedilla: "\xb8",
      cemptyv: "\u29B2",
      cent: "\xa2",
      CenterDot: "\xb7",
      centerdot: "\xb7",
      Cfr: "\u212D",
      cfr: "\u{1D520}",
      CHcy: "\u0427",
      chcy: "\u0447",
      check: "\u2713",
      checkmark: "\u2713",
      Chi: "\u03A7",
      chi: "\u03C7",
      cir: "\u25CB",
      circ: "\u02C6",
      circeq: "\u2257",
      circlearrowleft: "\u21BA",
      circlearrowright: "\u21BB",
      circledast: "\u229B",
      circledcirc: "\u229A",
      circleddash: "\u229D",
      CircleDot: "\u2299",
      circledR: "\xae",
      circledS: "\u24C8",
      CircleMinus: "\u2296",
      CirclePlus: "\u2295",
      CircleTimes: "\u2297",
      cirE: "\u29C3",
      cire: "\u2257",
      cirfnint: "\u2A10",
      cirmid: "\u2AEF",
      cirscir: "\u29C2",
      ClockwiseContourIntegral: "\u2232",
      CloseCurlyDoubleQuote: "\u201D",
      CloseCurlyQuote: "\u2019",
      clubs: "\u2663",
      clubsuit: "\u2663",
      Colon: "\u2237",
      colon: ":",
      Colone: "\u2A74",
      colone: "\u2254",
      coloneq: "\u2254",
      comma: ",",
      commat: "@",
      comp: "\u2201",
      compfn: "\u2218",
      complement: "\u2201",
      complexes: "\u2102",
      cong: "\u2245",
      congdot: "\u2A6D",
      Congruent: "\u2261",
      Conint: "\u222F",
      conint: "\u222E",
      ContourIntegral: "\u222E",
      Copf: "\u2102",
      copf: "\u{1D554}",
      coprod: "\u2210",
      Coproduct: "\u2210",
      COPY: "\xa9",
      copy: "\xa9",
      copysr: "\u2117",
      CounterClockwiseContourIntegral: "\u2233",
      crarr: "\u21B5",
      Cross: "\u2A2F",
      cross: "\u2717",
      Cscr: "\u{1D49E}",
      cscr: "\u{1D4B8}",
      csub: "\u2ACF",
      csube: "\u2AD1",
      csup: "\u2AD0",
      csupe: "\u2AD2",
      ctdot: "\u22EF",
      cudarrl: "\u2938",
      cudarrr: "\u2935",
      cuepr: "\u22DE",
      cuesc: "\u22DF",
      cularr: "\u21B6",
      cularrp: "\u293D",
      Cup: "\u22D3",
      cup: "\u222A",
      cupbrcap: "\u2A48",
      CupCap: "\u224D",
      cupcap: "\u2A46",
      cupcup: "\u2A4A",
      cupdot: "\u228D",
      cupor: "\u2A45",
      cups: "\u222A\uFE00",
      curarr: "\u21B7",
      curarrm: "\u293C",
      curlyeqprec: "\u22DE",
      curlyeqsucc: "\u22DF",
      curlyvee: "\u22CE",
      curlywedge: "\u22CF",
      curren: "\xa4",
      curvearrowleft: "\u21B6",
      curvearrowright: "\u21B7",
      cuvee: "\u22CE",
      cuwed: "\u22CF",
      cwconint: "\u2232",
      cwint: "\u2231",
      cylcty: "\u232D",
      Dagger: "\u2021",
      dagger: "\u2020",
      daleth: "\u2138",
      Darr: "\u21A1",
      dArr: "\u21D3",
      darr: "\u2193",
      dash: "\u2010",
      Dashv: "\u2AE4",
      dashv: "\u22A3",
      dbkarow: "\u290F",
      dblac: "\u02DD",
      Dcaron: "\u010E",
      dcaron: "\u010F",
      Dcy: "\u0414",
      dcy: "\u0434",
      DD: "\u2145",
      dd: "\u2146",
      ddagger: "\u2021",
      ddarr: "\u21CA",
      DDotrahd: "\u2911",
      ddotseq: "\u2A77",
      deg: "\xb0",
      Del: "\u2207",
      Delta: "\u0394",
      delta: "\u03B4",
      demptyv: "\u29B1",
      dfisht: "\u297F",
      Dfr: "\u{1D507}",
      dfr: "\u{1D521}",
      dHar: "\u2965",
      dharl: "\u21C3",
      dharr: "\u21C2",
      DiacriticalAcute: "\xb4",
      DiacriticalDot: "\u02D9",
      DiacriticalDoubleAcute: "\u02DD",
      DiacriticalGrave: "`",
      DiacriticalTilde: "\u02DC",
      diam: "\u22C4",
      Diamond: "\u22C4",
      diamond: "\u22C4",
      diamondsuit: "\u2666",
      diams: "\u2666",
      die: "\xa8",
      DifferentialD: "\u2146",
      digamma: "\u03DD",
      disin: "\u22F2",
      div: "\xf7",
      divide: "\xf7",
      divideontimes: "\u22C7",
      divonx: "\u22C7",
      DJcy: "\u0402",
      djcy: "\u0452",
      dlcorn: "\u231E",
      dlcrop: "\u230D",
      dollar: "$",
      Dopf: "\u{1D53B}",
      dopf: "\u{1D555}",
      Dot: "\xa8",
      dot: "\u02D9",
      DotDot: "\u20DC",
      doteq: "\u2250",
      doteqdot: "\u2251",
      DotEqual: "\u2250",
      dotminus: "\u2238",
      dotplus: "\u2214",
      dotsquare: "\u22A1",
      doublebarwedge: "\u2306",
      DoubleContourIntegral: "\u222F",
      DoubleDot: "\xa8",
      DoubleDownArrow: "\u21D3",
      DoubleLeftArrow: "\u21D0",
      DoubleLeftRightArrow: "\u21D4",
      DoubleLeftTee: "\u2AE4",
      DoubleLongLeftArrow: "\u27F8",
      DoubleLongLeftRightArrow: "\u27FA",
      DoubleLongRightArrow: "\u27F9",
      DoubleRightArrow: "\u21D2",
      DoubleRightTee: "\u22A8",
      DoubleUpArrow: "\u21D1",
      DoubleUpDownArrow: "\u21D5",
      DoubleVerticalBar: "\u2225",
      DownArrow: "\u2193",
      Downarrow: "\u21D3",
      downarrow: "\u2193",
      DownArrowBar: "\u2913",
      DownArrowUpArrow: "\u21F5",
      DownBreve: "\u0311",
      downdownarrows: "\u21CA",
      downharpoonleft: "\u21C3",
      downharpoonright: "\u21C2",
      DownLeftRightVector: "\u2950",
      DownLeftTeeVector: "\u295E",
      DownLeftVector: "\u21BD",
      DownLeftVectorBar: "\u2956",
      DownRightTeeVector: "\u295F",
      DownRightVector: "\u21C1",
      DownRightVectorBar: "\u2957",
      DownTee: "\u22A4",
      DownTeeArrow: "\u21A7",
      drbkarow: "\u2910",
      drcorn: "\u231F",
      drcrop: "\u230C",
      Dscr: "\u{1D49F}",
      dscr: "\u{1D4B9}",
      DScy: "\u0405",
      dscy: "\u0455",
      dsol: "\u29F6",
      Dstrok: "\u0110",
      dstrok: "\u0111",
      dtdot: "\u22F1",
      dtri: "\u25BF",
      dtrif: "\u25BE",
      duarr: "\u21F5",
      duhar: "\u296F",
      dwangle: "\u29A6",
      DZcy: "\u040F",
      dzcy: "\u045F",
      dzigrarr: "\u27FF",
      Eacute: "\xc9",
      eacute: "\xe9",
      easter: "\u2A6E",
      Ecaron: "\u011A",
      ecaron: "\u011B",
      ecir: "\u2256",
      Ecirc: "\xca",
      ecirc: "\xea",
      ecolon: "\u2255",
      Ecy: "\u042D",
      ecy: "\u044D",
      eDDot: "\u2A77",
      Edot: "\u0116",
      eDot: "\u2251",
      edot: "\u0117",
      ee: "\u2147",
      efDot: "\u2252",
      Efr: "\u{1D508}",
      efr: "\u{1D522}",
      eg: "\u2A9A",
      Egrave: "\xc8",
      egrave: "\xe8",
      egs: "\u2A96",
      egsdot: "\u2A98",
      el: "\u2A99",
      Element: "\u2208",
      elinters: "\u23E7",
      ell: "\u2113",
      els: "\u2A95",
      elsdot: "\u2A97",
      Emacr: "\u0112",
      emacr: "\u0113",
      empty: "\u2205",
      emptyset: "\u2205",
      EmptySmallSquare: "\u25FB",
      emptyv: "\u2205",
      EmptyVerySmallSquare: "\u25AB",
      emsp: "\u2003",
      emsp13: "\u2004",
      emsp14: "\u2005",
      ENG: "\u014A",
      eng: "\u014B",
      ensp: "\u2002",
      Eogon: "\u0118",
      eogon: "\u0119",
      Eopf: "\u{1D53C}",
      eopf: "\u{1D556}",
      epar: "\u22D5",
      eparsl: "\u29E3",
      eplus: "\u2A71",
      epsi: "\u03B5",
      Epsilon: "\u0395",
      epsilon: "\u03B5",
      epsiv: "\u03F5",
      eqcirc: "\u2256",
      eqcolon: "\u2255",
      eqsim: "\u2242",
      eqslantgtr: "\u2A96",
      eqslantless: "\u2A95",
      Equal: "\u2A75",
      equals: "=",
      EqualTilde: "\u2242",
      equest: "\u225F",
      Equilibrium: "\u21CC",
      equiv: "\u2261",
      equivDD: "\u2A78",
      eqvparsl: "\u29E5",
      erarr: "\u2971",
      erDot: "\u2253",
      Escr: "\u2130",
      escr: "\u212F",
      esdot: "\u2250",
      Esim: "\u2A73",
      esim: "\u2242",
      Eta: "\u0397",
      eta: "\u03B7",
      ETH: "\xd0",
      eth: "\xf0",
      Euml: "\xcb",
      euml: "\xeb",
      euro: "\u20AC",
      excl: "!",
      exist: "\u2203",
      Exists: "\u2203",
      expectation: "\u2130",
      ExponentialE: "\u2147",
      exponentiale: "\u2147",
      fallingdotseq: "\u2252",
      Fcy: "\u0424",
      fcy: "\u0444",
      female: "\u2640",
      ffilig: "\uFB03",
      fflig: "\uFB00",
      ffllig: "\uFB04",
      Ffr: "\u{1D509}",
      ffr: "\u{1D523}",
      filig: "\uFB01",
      FilledSmallSquare: "\u25FC",
      FilledVerySmallSquare: "\u25AA",
      fjlig: "fj",
      flat: "\u266D",
      fllig: "\uFB02",
      fltns: "\u25B1",
      fnof: "\u0192",
      Fopf: "\u{1D53D}",
      fopf: "\u{1D557}",
      ForAll: "\u2200",
      forall: "\u2200",
      fork: "\u22D4",
      forkv: "\u2AD9",
      Fouriertrf: "\u2131",
      fpartint: "\u2A0D",
      frac12: "\xbd",
      frac13: "\u2153",
      frac14: "\xbc",
      frac15: "\u2155",
      frac16: "\u2159",
      frac18: "\u215B",
      frac23: "\u2154",
      frac25: "\u2156",
      frac34: "\xbe",
      frac35: "\u2157",
      frac38: "\u215C",
      frac45: "\u2158",
      frac56: "\u215A",
      frac58: "\u215D",
      frac78: "\u215E",
      frasl: "\u2044",
      frown: "\u2322",
      Fscr: "\u2131",
      fscr: "\u{1D4BB}",
      gacute: "\u01F5",
      Gamma: "\u0393",
      gamma: "\u03B3",
      Gammad: "\u03DC",
      gammad: "\u03DD",
      gap: "\u2A86",
      Gbreve: "\u011E",
      gbreve: "\u011F",
      Gcedil: "\u0122",
      Gcirc: "\u011C",
      gcirc: "\u011D",
      Gcy: "\u0413",
      gcy: "\u0433",
      Gdot: "\u0120",
      gdot: "\u0121",
      gE: "\u2267",
      ge: "\u2265",
      gEl: "\u2A8C",
      gel: "\u22DB",
      geq: "\u2265",
      geqq: "\u2267",
      geqslant: "\u2A7E",
      ges: "\u2A7E",
      gescc: "\u2AA9",
      gesdot: "\u2A80",
      gesdoto: "\u2A82",
      gesdotol: "\u2A84",
      gesl: "\u22DB\uFE00",
      gesles: "\u2A94",
      Gfr: "\u{1D50A}",
      gfr: "\u{1D524}",
      Gg: "\u22D9",
      gg: "\u226B",
      ggg: "\u22D9",
      gimel: "\u2137",
      GJcy: "\u0403",
      gjcy: "\u0453",
      gl: "\u2277",
      gla: "\u2AA5",
      glE: "\u2A92",
      glj: "\u2AA4",
      gnap: "\u2A8A",
      gnapprox: "\u2A8A",
      gnE: "\u2269",
      gne: "\u2A88",
      gneq: "\u2A88",
      gneqq: "\u2269",
      gnsim: "\u22E7",
      Gopf: "\u{1D53E}",
      gopf: "\u{1D558}",
      grave: "`",
      GreaterEqual: "\u2265",
      GreaterEqualLess: "\u22DB",
      GreaterFullEqual: "\u2267",
      GreaterGreater: "\u2AA2",
      GreaterLess: "\u2277",
      GreaterSlantEqual: "\u2A7E",
      GreaterTilde: "\u2273",
      Gscr: "\u{1D4A2}",
      gscr: "\u210A",
      gsim: "\u2273",
      gsime: "\u2A8E",
      gsiml: "\u2A90",
      Gt: "\u226B",
      GT: ">",
      gt: ">",
      gtcc: "\u2AA7",
      gtcir: "\u2A7A",
      gtdot: "\u22D7",
      gtlPar: "\u2995",
      gtquest: "\u2A7C",
      gtrapprox: "\u2A86",
      gtrarr: "\u2978",
      gtrdot: "\u22D7",
      gtreqless: "\u22DB",
      gtreqqless: "\u2A8C",
      gtrless: "\u2277",
      gtrsim: "\u2273",
      gvertneqq: "\u2269\uFE00",
      gvnE: "\u2269\uFE00",
      Hacek: "\u02C7",
      hairsp: "\u200A",
      half: "\xbd",
      hamilt: "\u210B",
      HARDcy: "\u042A",
      hardcy: "\u044A",
      hArr: "\u21D4",
      harr: "\u2194",
      harrcir: "\u2948",
      harrw: "\u21AD",
      Hat: "^",
      hbar: "\u210F",
      Hcirc: "\u0124",
      hcirc: "\u0125",
      hearts: "\u2665",
      heartsuit: "\u2665",
      hellip: "\u2026",
      hercon: "\u22B9",
      Hfr: "\u210C",
      hfr: "\u{1D525}",
      HilbertSpace: "\u210B",
      hksearow: "\u2925",
      hkswarow: "\u2926",
      hoarr: "\u21FF",
      homtht: "\u223B",
      hookleftarrow: "\u21A9",
      hookrightarrow: "\u21AA",
      Hopf: "\u210D",
      hopf: "\u{1D559}",
      horbar: "\u2015",
      HorizontalLine: "\u2500",
      Hscr: "\u210B",
      hscr: "\u{1D4BD}",
      hslash: "\u210F",
      Hstrok: "\u0126",
      hstrok: "\u0127",
      HumpDownHump: "\u224E",
      HumpEqual: "\u224F",
      hybull: "\u2043",
      hyphen: "\u2010",
      Iacute: "\xcd",
      iacute: "\xed",
      ic: "\u2063",
      Icirc: "\xce",
      icirc: "\xee",
      Icy: "\u0418",
      icy: "\u0438",
      Idot: "\u0130",
      IEcy: "\u0415",
      iecy: "\u0435",
      iexcl: "\xa1",
      iff: "\u21D4",
      Ifr: "\u2111",
      ifr: "\u{1D526}",
      Igrave: "\xcc",
      igrave: "\xec",
      ii: "\u2148",
      iiiint: "\u2A0C",
      iiint: "\u222D",
      iinfin: "\u29DC",
      iiota: "\u2129",
      IJlig: "\u0132",
      ijlig: "\u0133",
      Im: "\u2111",
      Imacr: "\u012A",
      imacr: "\u012B",
      image: "\u2111",
      ImaginaryI: "\u2148",
      imagline: "\u2110",
      imagpart: "\u2111",
      imath: "\u0131",
      imof: "\u22B7",
      imped: "\u01B5",
      Implies: "\u21D2",
      in: "\u2208",
      incare: "\u2105",
      infin: "\u221E",
      infintie: "\u29DD",
      inodot: "\u0131",
      Int: "\u222C",
      int: "\u222B",
      intcal: "\u22BA",
      integers: "\u2124",
      Integral: "\u222B",
      intercal: "\u22BA",
      Intersection: "\u22C2",
      intlarhk: "\u2A17",
      intprod: "\u2A3C",
      InvisibleComma: "\u2063",
      InvisibleTimes: "\u2062",
      IOcy: "\u0401",
      iocy: "\u0451",
      Iogon: "\u012E",
      iogon: "\u012F",
      Iopf: "\u{1D540}",
      iopf: "\u{1D55A}",
      Iota: "\u0399",
      iota: "\u03B9",
      iprod: "\u2A3C",
      iquest: "\xbf",
      Iscr: "\u2110",
      iscr: "\u{1D4BE}",
      isin: "\u2208",
      isindot: "\u22F5",
      isinE: "\u22F9",
      isins: "\u22F4",
      isinsv: "\u22F3",
      isinv: "\u2208",
      it: "\u2062",
      Itilde: "\u0128",
      itilde: "\u0129",
      Iukcy: "\u0406",
      iukcy: "\u0456",
      Iuml: "\xcf",
      iuml: "\xef",
      Jcirc: "\u0134",
      jcirc: "\u0135",
      Jcy: "\u0419",
      jcy: "\u0439",
      Jfr: "\u{1D50D}",
      jfr: "\u{1D527}",
      jmath: "\u0237",
      Jopf: "\u{1D541}",
      jopf: "\u{1D55B}",
      Jscr: "\u{1D4A5}",
      jscr: "\u{1D4BF}",
      Jsercy: "\u0408",
      jsercy: "\u0458",
      Jukcy: "\u0404",
      jukcy: "\u0454",
      Kappa: "\u039A",
      kappa: "\u03BA",
      kappav: "\u03F0",
      Kcedil: "\u0136",
      kcedil: "\u0137",
      Kcy: "\u041A",
      kcy: "\u043A",
      Kfr: "\u{1D50E}",
      kfr: "\u{1D528}",
      kgreen: "\u0138",
      KHcy: "\u0425",
      khcy: "\u0445",
      KJcy: "\u040C",
      kjcy: "\u045C",
      Kopf: "\u{1D542}",
      kopf: "\u{1D55C}",
      Kscr: "\u{1D4A6}",
      kscr: "\u{1D4C0}",
      lAarr: "\u21DA",
      Lacute: "\u0139",
      lacute: "\u013A",
      laemptyv: "\u29B4",
      lagran: "\u2112",
      Lambda: "\u039B",
      lambda: "\u03BB",
      Lang: "\u27EA",
      lang: "\u27E8",
      langd: "\u2991",
      langle: "\u27E8",
      lap: "\u2A85",
      Laplacetrf: "\u2112",
      laquo: "\xab",
      Larr: "\u219E",
      lArr: "\u21D0",
      larr: "\u2190",
      larrb: "\u21E4",
      larrbfs: "\u291F",
      larrfs: "\u291D",
      larrhk: "\u21A9",
      larrlp: "\u21AB",
      larrpl: "\u2939",
      larrsim: "\u2973",
      larrtl: "\u21A2",
      lat: "\u2AAB",
      lAtail: "\u291B",
      latail: "\u2919",
      late: "\u2AAD",
      lates: "\u2AAD\uFE00",
      lBarr: "\u290E",
      lbarr: "\u290C",
      lbbrk: "\u2772",
      lbrace: "{",
      lbrack: "[",
      lbrke: "\u298B",
      lbrksld: "\u298F",
      lbrkslu: "\u298D",
      Lcaron: "\u013D",
      lcaron: "\u013E",
      Lcedil: "\u013B",
      lcedil: "\u013C",
      lceil: "\u2308",
      lcub: "{",
      Lcy: "\u041B",
      lcy: "\u043B",
      ldca: "\u2936",
      ldquo: "\u201C",
      ldquor: "\u201E",
      ldrdhar: "\u2967",
      ldrushar: "\u294B",
      ldsh: "\u21B2",
      lE: "\u2266",
      le: "\u2264",
      LeftAngleBracket: "\u27E8",
      LeftArrow: "\u2190",
      Leftarrow: "\u21D0",
      leftarrow: "\u2190",
      LeftArrowBar: "\u21E4",
      LeftArrowRightArrow: "\u21C6",
      leftarrowtail: "\u21A2",
      LeftCeiling: "\u2308",
      LeftDoubleBracket: "\u27E6",
      LeftDownTeeVector: "\u2961",
      LeftDownVector: "\u21C3",
      LeftDownVectorBar: "\u2959",
      LeftFloor: "\u230A",
      leftharpoondown: "\u21BD",
      leftharpoonup: "\u21BC",
      leftleftarrows: "\u21C7",
      LeftRightArrow: "\u2194",
      Leftrightarrow: "\u21D4",
      leftrightarrow: "\u2194",
      leftrightarrows: "\u21C6",
      leftrightharpoons: "\u21CB",
      leftrightsquigarrow: "\u21AD",
      LeftRightVector: "\u294E",
      LeftTee: "\u22A3",
      LeftTeeArrow: "\u21A4",
      LeftTeeVector: "\u295A",
      leftthreetimes: "\u22CB",
      LeftTriangle: "\u22B2",
      LeftTriangleBar: "\u29CF",
      LeftTriangleEqual: "\u22B4",
      LeftUpDownVector: "\u2951",
      LeftUpTeeVector: "\u2960",
      LeftUpVector: "\u21BF",
      LeftUpVectorBar: "\u2958",
      LeftVector: "\u21BC",
      LeftVectorBar: "\u2952",
      lEg: "\u2A8B",
      leg: "\u22DA",
      leq: "\u2264",
      leqq: "\u2266",
      leqslant: "\u2A7D",
      les: "\u2A7D",
      lescc: "\u2AA8",
      lesdot: "\u2A7F",
      lesdoto: "\u2A81",
      lesdotor: "\u2A83",
      lesg: "\u22DA\uFE00",
      lesges: "\u2A93",
      lessapprox: "\u2A85",
      lessdot: "\u22D6",
      lesseqgtr: "\u22DA",
      lesseqqgtr: "\u2A8B",
      LessEqualGreater: "\u22DA",
      LessFullEqual: "\u2266",
      LessGreater: "\u2276",
      lessgtr: "\u2276",
      LessLess: "\u2AA1",
      lesssim: "\u2272",
      LessSlantEqual: "\u2A7D",
      LessTilde: "\u2272",
      lfisht: "\u297C",
      lfloor: "\u230A",
      Lfr: "\u{1D50F}",
      lfr: "\u{1D529}",
      lg: "\u2276",
      lgE: "\u2A91",
      lHar: "\u2962",
      lhard: "\u21BD",
      lharu: "\u21BC",
      lharul: "\u296A",
      lhblk: "\u2584",
      LJcy: "\u0409",
      ljcy: "\u0459",
      Ll: "\u22D8",
      ll: "\u226A",
      llarr: "\u21C7",
      llcorner: "\u231E",
      Lleftarrow: "\u21DA",
      llhard: "\u296B",
      lltri: "\u25FA",
      Lmidot: "\u013F",
      lmidot: "\u0140",
      lmoust: "\u23B0",
      lmoustache: "\u23B0",
      lnap: "\u2A89",
      lnapprox: "\u2A89",
      lnE: "\u2268",
      lne: "\u2A87",
      lneq: "\u2A87",
      lneqq: "\u2268",
      lnsim: "\u22E6",
      loang: "\u27EC",
      loarr: "\u21FD",
      lobrk: "\u27E6",
      LongLeftArrow: "\u27F5",
      Longleftarrow: "\u27F8",
      longleftarrow: "\u27F5",
      LongLeftRightArrow: "\u27F7",
      Longleftrightarrow: "\u27FA",
      longleftrightarrow: "\u27F7",
      longmapsto: "\u27FC",
      LongRightArrow: "\u27F6",
      Longrightarrow: "\u27F9",
      longrightarrow: "\u27F6",
      looparrowleft: "\u21AB",
      looparrowright: "\u21AC",
      lopar: "\u2985",
      Lopf: "\u{1D543}",
      lopf: "\u{1D55D}",
      loplus: "\u2A2D",
      lotimes: "\u2A34",
      lowast: "\u2217",
      lowbar: "_",
      LowerLeftArrow: "\u2199",
      LowerRightArrow: "\u2198",
      loz: "\u25CA",
      lozenge: "\u25CA",
      lozf: "\u29EB",
      lpar: "(",
      lparlt: "\u2993",
      lrarr: "\u21C6",
      lrcorner: "\u231F",
      lrhar: "\u21CB",
      lrhard: "\u296D",
      lrm: "\u200E",
      lrtri: "\u22BF",
      lsaquo: "\u2039",
      Lscr: "\u2112",
      lscr: "\u{1D4C1}",
      Lsh: "\u21B0",
      lsh: "\u21B0",
      lsim: "\u2272",
      lsime: "\u2A8D",
      lsimg: "\u2A8F",
      lsqb: "[",
      lsquo: "\u2018",
      lsquor: "\u201A",
      Lstrok: "\u0141",
      lstrok: "\u0142",
      Lt: "\u226A",
      LT: "<",
      lt: "<",
      ltcc: "\u2AA6",
      ltcir: "\u2A79",
      ltdot: "\u22D6",
      lthree: "\u22CB",
      ltimes: "\u22C9",
      ltlarr: "\u2976",
      ltquest: "\u2A7B",
      ltri: "\u25C3",
      ltrie: "\u22B4",
      ltrif: "\u25C2",
      ltrPar: "\u2996",
      lurdshar: "\u294A",
      luruhar: "\u2966",
      lvertneqq: "\u2268\uFE00",
      lvnE: "\u2268\uFE00",
      macr: "\xaf",
      male: "\u2642",
      malt: "\u2720",
      maltese: "\u2720",
      Map: "\u2905",
      map: "\u21A6",
      mapsto: "\u21A6",
      mapstodown: "\u21A7",
      mapstoleft: "\u21A4",
      mapstoup: "\u21A5",
      marker: "\u25AE",
      mcomma: "\u2A29",
      Mcy: "\u041C",
      mcy: "\u043C",
      mdash: "\u2014",
      mDDot: "\u223A",
      measuredangle: "\u2221",
      MediumSpace: "\u205F",
      Mellintrf: "\u2133",
      Mfr: "\u{1D510}",
      mfr: "\u{1D52A}",
      mho: "\u2127",
      micro: "\xb5",
      mid: "\u2223",
      midast: "*",
      midcir: "\u2AF0",
      middot: "\xb7",
      minus: "\u2212",
      minusb: "\u229F",
      minusd: "\u2238",
      minusdu: "\u2A2A",
      MinusPlus: "\u2213",
      mlcp: "\u2ADB",
      mldr: "\u2026",
      mnplus: "\u2213",
      models: "\u22A7",
      Mopf: "\u{1D544}",
      mopf: "\u{1D55E}",
      mp: "\u2213",
      Mscr: "\u2133",
      mscr: "\u{1D4C2}",
      mstpos: "\u223E",
      Mu: "\u039C",
      mu: "\u03BC",
      multimap: "\u22B8",
      mumap: "\u22B8",
      nabla: "\u2207",
      Nacute: "\u0143",
      nacute: "\u0144",
      nang: "\u2220\u20D2",
      nap: "\u2249",
      napE: "\u2A70\u0338",
      napid: "\u224B\u0338",
      napos: "\u0149",
      napprox: "\u2249",
      natur: "\u266E",
      natural: "\u266E",
      naturals: "\u2115",
      nbsp: "\xa0",
      nbump: "\u224E\u0338",
      nbumpe: "\u224F\u0338",
      ncap: "\u2A43",
      Ncaron: "\u0147",
      ncaron: "\u0148",
      Ncedil: "\u0145",
      ncedil: "\u0146",
      ncong: "\u2247",
      ncongdot: "\u2A6D\u0338",
      ncup: "\u2A42",
      Ncy: "\u041D",
      ncy: "\u043D",
      ndash: "\u2013",
      ne: "\u2260",
      nearhk: "\u2924",
      neArr: "\u21D7",
      nearr: "\u2197",
      nearrow: "\u2197",
      nedot: "\u2250\u0338",
      NegativeMediumSpace: "\u200B",
      NegativeThickSpace: "\u200B",
      NegativeThinSpace: "\u200B",
      NegativeVeryThinSpace: "\u200B",
      nequiv: "\u2262",
      nesear: "\u2928",
      nesim: "\u2242\u0338",
      NestedGreaterGreater: "\u226B",
      NestedLessLess: "\u226A",
      NewLine: "\n",
      nexist: "\u2204",
      nexists: "\u2204",
      Nfr: "\u{1D511}",
      nfr: "\u{1D52B}",
      ngE: "\u2267\u0338",
      nge: "\u2271",
      ngeq: "\u2271",
      ngeqq: "\u2267\u0338",
      ngeqslant: "\u2A7E\u0338",
      nges: "\u2A7E\u0338",
      nGg: "\u22D9\u0338",
      ngsim: "\u2275",
      nGt: "\u226B\u20D2",
      ngt: "\u226F",
      ngtr: "\u226F",
      nGtv: "\u226B\u0338",
      nhArr: "\u21CE",
      nharr: "\u21AE",
      nhpar: "\u2AF2",
      ni: "\u220B",
      nis: "\u22FC",
      nisd: "\u22FA",
      niv: "\u220B",
      NJcy: "\u040A",
      njcy: "\u045A",
      nlArr: "\u21CD",
      nlarr: "\u219A",
      nldr: "\u2025",
      nlE: "\u2266\u0338",
      nle: "\u2270",
      nLeftarrow: "\u21CD",
      nleftarrow: "\u219A",
      nLeftrightarrow: "\u21CE",
      nleftrightarrow: "\u21AE",
      nleq: "\u2270",
      nleqq: "\u2266\u0338",
      nleqslant: "\u2A7D\u0338",
      nles: "\u2A7D\u0338",
      nless: "\u226E",
      nLl: "\u22D8\u0338",
      nlsim: "\u2274",
      nLt: "\u226A\u20D2",
      nlt: "\u226E",
      nltri: "\u22EA",
      nltrie: "\u22EC",
      nLtv: "\u226A\u0338",
      nmid: "\u2224",
      NoBreak: "\u2060",
      NonBreakingSpace: "\xa0",
      Nopf: "\u2115",
      nopf: "\u{1D55F}",
      Not: "\u2AEC",
      not: "\xac",
      NotCongruent: "\u2262",
      NotCupCap: "\u226D",
      NotDoubleVerticalBar: "\u2226",
      NotElement: "\u2209",
      NotEqual: "\u2260",
      NotEqualTilde: "\u2242\u0338",
      NotExists: "\u2204",
      NotGreater: "\u226F",
      NotGreaterEqual: "\u2271",
      NotGreaterFullEqual: "\u2267\u0338",
      NotGreaterGreater: "\u226B\u0338",
      NotGreaterLess: "\u2279",
      NotGreaterSlantEqual: "\u2A7E\u0338",
      NotGreaterTilde: "\u2275",
      NotHumpDownHump: "\u224E\u0338",
      NotHumpEqual: "\u224F\u0338",
      notin: "\u2209",
      notindot: "\u22F5\u0338",
      notinE: "\u22F9\u0338",
      notinva: "\u2209",
      notinvb: "\u22F7",
      notinvc: "\u22F6",
      NotLeftTriangle: "\u22EA",
      NotLeftTriangleBar: "\u29CF\u0338",
      NotLeftTriangleEqual: "\u22EC",
      NotLess: "\u226E",
      NotLessEqual: "\u2270",
      NotLessGreater: "\u2278",
      NotLessLess: "\u226A\u0338",
      NotLessSlantEqual: "\u2A7D\u0338",
      NotLessTilde: "\u2274",
      NotNestedGreaterGreater: "\u2AA2\u0338",
      NotNestedLessLess: "\u2AA1\u0338",
      notni: "\u220C",
      notniva: "\u220C",
      notnivb: "\u22FE",
      notnivc: "\u22FD",
      NotPrecedes: "\u2280",
      NotPrecedesEqual: "\u2AAF\u0338",
      NotPrecedesSlantEqual: "\u22E0",
      NotReverseElement: "\u220C",
      NotRightTriangle: "\u22EB",
      NotRightTriangleBar: "\u29D0\u0338",
      NotRightTriangleEqual: "\u22ED",
      NotSquareSubset: "\u228F\u0338",
      NotSquareSubsetEqual: "\u22E2",
      NotSquareSuperset: "\u2290\u0338",
      NotSquareSupersetEqual: "\u22E3",
      NotSubset: "\u2282\u20D2",
      NotSubsetEqual: "\u2288",
      NotSucceeds: "\u2281",
      NotSucceedsEqual: "\u2AB0\u0338",
      NotSucceedsSlantEqual: "\u22E1",
      NotSucceedsTilde: "\u227F\u0338",
      NotSuperset: "\u2283\u20D2",
      NotSupersetEqual: "\u2289",
      NotTilde: "\u2241",
      NotTildeEqual: "\u2244",
      NotTildeFullEqual: "\u2247",
      NotTildeTilde: "\u2249",
      NotVerticalBar: "\u2224",
      npar: "\u2226",
      nparallel: "\u2226",
      nparsl: "\u2AFD\u20E5",
      npart: "\u2202\u0338",
      npolint: "\u2A14",
      npr: "\u2280",
      nprcue: "\u22E0",
      npre: "\u2AAF\u0338",
      nprec: "\u2280",
      npreceq: "\u2AAF\u0338",
      nrArr: "\u21CF",
      nrarr: "\u219B",
      nrarrc: "\u2933\u0338",
      nrarrw: "\u219D\u0338",
      nRightarrow: "\u21CF",
      nrightarrow: "\u219B",
      nrtri: "\u22EB",
      nrtrie: "\u22ED",
      nsc: "\u2281",
      nsccue: "\u22E1",
      nsce: "\u2AB0\u0338",
      Nscr: "\u{1D4A9}",
      nscr: "\u{1D4C3}",
      nshortmid: "\u2224",
      nshortparallel: "\u2226",
      nsim: "\u2241",
      nsime: "\u2244",
      nsimeq: "\u2244",
      nsmid: "\u2224",
      nspar: "\u2226",
      nsqsube: "\u22E2",
      nsqsupe: "\u22E3",
      nsub: "\u2284",
      nsubE: "\u2AC5\u0338",
      nsube: "\u2288",
      nsubset: "\u2282\u20D2",
      nsubseteq: "\u2288",
      nsubseteqq: "\u2AC5\u0338",
      nsucc: "\u2281",
      nsucceq: "\u2AB0\u0338",
      nsup: "\u2285",
      nsupE: "\u2AC6\u0338",
      nsupe: "\u2289",
      nsupset: "\u2283\u20D2",
      nsupseteq: "\u2289",
      nsupseteqq: "\u2AC6\u0338",
      ntgl: "\u2279",
      Ntilde: "\xd1",
      ntilde: "\xf1",
      ntlg: "\u2278",
      ntriangleleft: "\u22EA",
      ntrianglelefteq: "\u22EC",
      ntriangleright: "\u22EB",
      ntrianglerighteq: "\u22ED",
      Nu: "\u039D",
      nu: "\u03BD",
      num: "#",
      numero: "\u2116",
      numsp: "\u2007",
      nvap: "\u224D\u20D2",
      nVDash: "\u22AF",
      nVdash: "\u22AE",
      nvDash: "\u22AD",
      nvdash: "\u22AC",
      nvge: "\u2265\u20D2",
      nvgt: ">\u20D2",
      nvHarr: "\u2904",
      nvinfin: "\u29DE",
      nvlArr: "\u2902",
      nvle: "\u2264\u20D2",
      nvlt: "<\u20D2",
      nvltrie: "\u22B4\u20D2",
      nvrArr: "\u2903",
      nvrtrie: "\u22B5\u20D2",
      nvsim: "\u223C\u20D2",
      nwarhk: "\u2923",
      nwArr: "\u21D6",
      nwarr: "\u2196",
      nwarrow: "\u2196",
      nwnear: "\u2927",
      Oacute: "\xd3",
      oacute: "\xf3",
      oast: "\u229B",
      ocir: "\u229A",
      Ocirc: "\xd4",
      ocirc: "\xf4",
      Ocy: "\u041E",
      ocy: "\u043E",
      odash: "\u229D",
      Odblac: "\u0150",
      odblac: "\u0151",
      odiv: "\u2A38",
      odot: "\u2299",
      odsold: "\u29BC",
      OElig: "\u0152",
      oelig: "\u0153",
      ofcir: "\u29BF",
      Ofr: "\u{1D512}",
      ofr: "\u{1D52C}",
      ogon: "\u02DB",
      Ograve: "\xd2",
      ograve: "\xf2",
      ogt: "\u29C1",
      ohbar: "\u29B5",
      ohm: "\u03A9",
      oint: "\u222E",
      olarr: "\u21BA",
      olcir: "\u29BE",
      olcross: "\u29BB",
      oline: "\u203E",
      olt: "\u29C0",
      Omacr: "\u014C",
      omacr: "\u014D",
      Omega: "\u03A9",
      omega: "\u03C9",
      Omicron: "\u039F",
      omicron: "\u03BF",
      omid: "\u29B6",
      ominus: "\u2296",
      Oopf: "\u{1D546}",
      oopf: "\u{1D560}",
      opar: "\u29B7",
      OpenCurlyDoubleQuote: "\u201C",
      OpenCurlyQuote: "\u2018",
      operp: "\u29B9",
      oplus: "\u2295",
      Or: "\u2A54",
      or: "\u2228",
      orarr: "\u21BB",
      ord: "\u2A5D",
      order: "\u2134",
      orderof: "\u2134",
      ordf: "\xaa",
      ordm: "\xba",
      origof: "\u22B6",
      oror: "\u2A56",
      orslope: "\u2A57",
      orv: "\u2A5B",
      oS: "\u24C8",
      Oscr: "\u{1D4AA}",
      oscr: "\u2134",
      Oslash: "\xd8",
      oslash: "\xf8",
      osol: "\u2298",
      Otilde: "\xd5",
      otilde: "\xf5",
      Otimes: "\u2A37",
      otimes: "\u2297",
      otimesas: "\u2A36",
      Ouml: "\xd6",
      ouml: "\xf6",
      ovbar: "\u233D",
      OverBar: "\u203E",
      OverBrace: "\u23DE",
      OverBracket: "\u23B4",
      OverParenthesis: "\u23DC",
      par: "\u2225",
      para: "\xb6",
      parallel: "\u2225",
      parsim: "\u2AF3",
      parsl: "\u2AFD",
      part: "\u2202",
      PartialD: "\u2202",
      Pcy: "\u041F",
      pcy: "\u043F",
      percnt: "%",
      period: ".",
      permil: "\u2030",
      perp: "\u22A5",
      pertenk: "\u2031",
      Pfr: "\u{1D513}",
      pfr: "\u{1D52D}",
      Phi: "\u03A6",
      phi: "\u03C6",
      phiv: "\u03D5",
      phmmat: "\u2133",
      phone: "\u260E",
      Pi: "\u03A0",
      pi: "\u03C0",
      pitchfork: "\u22D4",
      piv: "\u03D6",
      planck: "\u210F",
      planckh: "\u210E",
      plankv: "\u210F",
      plus: "+",
      plusacir: "\u2A23",
      plusb: "\u229E",
      pluscir: "\u2A22",
      plusdo: "\u2214",
      plusdu: "\u2A25",
      pluse: "\u2A72",
      PlusMinus: "\xb1",
      plusmn: "\xb1",
      plussim: "\u2A26",
      plustwo: "\u2A27",
      pm: "\xb1",
      Poincareplane: "\u210C",
      pointint: "\u2A15",
      Popf: "\u2119",
      popf: "\u{1D561}",
      pound: "\xa3",
      Pr: "\u2ABB",
      pr: "\u227A",
      prap: "\u2AB7",
      prcue: "\u227C",
      prE: "\u2AB3",
      pre: "\u2AAF",
      prec: "\u227A",
      precapprox: "\u2AB7",
      preccurlyeq: "\u227C",
      Precedes: "\u227A",
      PrecedesEqual: "\u2AAF",
      PrecedesSlantEqual: "\u227C",
      PrecedesTilde: "\u227E",
      preceq: "\u2AAF",
      precnapprox: "\u2AB9",
      precneqq: "\u2AB5",
      precnsim: "\u22E8",
      precsim: "\u227E",
      Prime: "\u2033",
      prime: "\u2032",
      primes: "\u2119",
      prnap: "\u2AB9",
      prnE: "\u2AB5",
      prnsim: "\u22E8",
      prod: "\u220F",
      Product: "\u220F",
      profalar: "\u232E",
      profline: "\u2312",
      profsurf: "\u2313",
      prop: "\u221D",
      Proportion: "\u2237",
      Proportional: "\u221D",
      propto: "\u221D",
      prsim: "\u227E",
      prurel: "\u22B0",
      Pscr: "\u{1D4AB}",
      pscr: "\u{1D4C5}",
      Psi: "\u03A8",
      psi: "\u03C8",
      puncsp: "\u2008",
      Qfr: "\u{1D514}",
      qfr: "\u{1D52E}",
      qint: "\u2A0C",
      Qopf: "\u211A",
      qopf: "\u{1D562}",
      qprime: "\u2057",
      Qscr: "\u{1D4AC}",
      qscr: "\u{1D4C6}",
      quaternions: "\u210D",
      quatint: "\u2A16",
      quest: "?",
      questeq: "\u225F",
      QUOT: '"',
      quot: '"',
      rAarr: "\u21DB",
      race: "\u223D\u0331",
      Racute: "\u0154",
      racute: "\u0155",
      radic: "\u221A",
      raemptyv: "\u29B3",
      Rang: "\u27EB",
      rang: "\u27E9",
      rangd: "\u2992",
      range: "\u29A5",
      rangle: "\u27E9",
      raquo: "\xbb",
      Rarr: "\u21A0",
      rArr: "\u21D2",
      rarr: "\u2192",
      rarrap: "\u2975",
      rarrb: "\u21E5",
      rarrbfs: "\u2920",
      rarrc: "\u2933",
      rarrfs: "\u291E",
      rarrhk: "\u21AA",
      rarrlp: "\u21AC",
      rarrpl: "\u2945",
      rarrsim: "\u2974",
      Rarrtl: "\u2916",
      rarrtl: "\u21A3",
      rarrw: "\u219D",
      rAtail: "\u291C",
      ratail: "\u291A",
      ratio: "\u2236",
      rationals: "\u211A",
      RBarr: "\u2910",
      rBarr: "\u290F",
      rbarr: "\u290D",
      rbbrk: "\u2773",
      rbrace: "}",
      rbrack: "]",
      rbrke: "\u298C",
      rbrksld: "\u298E",
      rbrkslu: "\u2990",
      Rcaron: "\u0158",
      rcaron: "\u0159",
      Rcedil: "\u0156",
      rcedil: "\u0157",
      rceil: "\u2309",
      rcub: "}",
      Rcy: "\u0420",
      rcy: "\u0440",
      rdca: "\u2937",
      rdldhar: "\u2969",
      rdquo: "\u201D",
      rdquor: "\u201D",
      rdsh: "\u21B3",
      Re: "\u211C",
      real: "\u211C",
      realine: "\u211B",
      realpart: "\u211C",
      reals: "\u211D",
      rect: "\u25AD",
      REG: "\xae",
      reg: "\xae",
      ReverseElement: "\u220B",
      ReverseEquilibrium: "\u21CB",
      ReverseUpEquilibrium: "\u296F",
      rfisht: "\u297D",
      rfloor: "\u230B",
      Rfr: "\u211C",
      rfr: "\u{1D52F}",
      rHar: "\u2964",
      rhard: "\u21C1",
      rharu: "\u21C0",
      rharul: "\u296C",
      Rho: "\u03A1",
      rho: "\u03C1",
      rhov: "\u03F1",
      RightAngleBracket: "\u27E9",
      RightArrow: "\u2192",
      Rightarrow: "\u21D2",
      rightarrow: "\u2192",
      RightArrowBar: "\u21E5",
      RightArrowLeftArrow: "\u21C4",
      rightarrowtail: "\u21A3",
      RightCeiling: "\u2309",
      RightDoubleBracket: "\u27E7",
      RightDownTeeVector: "\u295D",
      RightDownVector: "\u21C2",
      RightDownVectorBar: "\u2955",
      RightFloor: "\u230B",
      rightharpoondown: "\u21C1",
      rightharpoonup: "\u21C0",
      rightleftarrows: "\u21C4",
      rightleftharpoons: "\u21CC",
      rightrightarrows: "\u21C9",
      rightsquigarrow: "\u219D",
      RightTee: "\u22A2",
      RightTeeArrow: "\u21A6",
      RightTeeVector: "\u295B",
      rightthreetimes: "\u22CC",
      RightTriangle: "\u22B3",
      RightTriangleBar: "\u29D0",
      RightTriangleEqual: "\u22B5",
      RightUpDownVector: "\u294F",
      RightUpTeeVector: "\u295C",
      RightUpVector: "\u21BE",
      RightUpVectorBar: "\u2954",
      RightVector: "\u21C0",
      RightVectorBar: "\u2953",
      ring: "\u02DA",
      risingdotseq: "\u2253",
      rlarr: "\u21C4",
      rlhar: "\u21CC",
      rlm: "\u200F",
      rmoust: "\u23B1",
      rmoustache: "\u23B1",
      rnmid: "\u2AEE",
      roang: "\u27ED",
      roarr: "\u21FE",
      robrk: "\u27E7",
      ropar: "\u2986",
      Ropf: "\u211D",
      ropf: "\u{1D563}",
      roplus: "\u2A2E",
      rotimes: "\u2A35",
      RoundImplies: "\u2970",
      rpar: ")",
      rpargt: "\u2994",
      rppolint: "\u2A12",
      rrarr: "\u21C9",
      Rrightarrow: "\u21DB",
      rsaquo: "\u203A",
      Rscr: "\u211B",
      rscr: "\u{1D4C7}",
      Rsh: "\u21B1",
      rsh: "\u21B1",
      rsqb: "]",
      rsquo: "\u2019",
      rsquor: "\u2019",
      rthree: "\u22CC",
      rtimes: "\u22CA",
      rtri: "\u25B9",
      rtrie: "\u22B5",
      rtrif: "\u25B8",
      rtriltri: "\u29CE",
      RuleDelayed: "\u29F4",
      ruluhar: "\u2968",
      rx: "\u211E",
      Sacute: "\u015A",
      sacute: "\u015B",
      sbquo: "\u201A",
      Sc: "\u2ABC",
      sc: "\u227B",
      scap: "\u2AB8",
      Scaron: "\u0160",
      scaron: "\u0161",
      sccue: "\u227D",
      scE: "\u2AB4",
      sce: "\u2AB0",
      Scedil: "\u015E",
      scedil: "\u015F",
      Scirc: "\u015C",
      scirc: "\u015D",
      scnap: "\u2ABA",
      scnE: "\u2AB6",
      scnsim: "\u22E9",
      scpolint: "\u2A13",
      scsim: "\u227F",
      Scy: "\u0421",
      scy: "\u0441",
      sdot: "\u22C5",
      sdotb: "\u22A1",
      sdote: "\u2A66",
      searhk: "\u2925",
      seArr: "\u21D8",
      searr: "\u2198",
      searrow: "\u2198",
      sect: "\xa7",
      semi: ";",
      seswar: "\u2929",
      setminus: "\u2216",
      setmn: "\u2216",
      sext: "\u2736",
      Sfr: "\u{1D516}",
      sfr: "\u{1D530}",
      sfrown: "\u2322",
      sharp: "\u266F",
      SHCHcy: "\u0429",
      shchcy: "\u0449",
      SHcy: "\u0428",
      shcy: "\u0448",
      ShortDownArrow: "\u2193",
      ShortLeftArrow: "\u2190",
      shortmid: "\u2223",
      shortparallel: "\u2225",
      ShortRightArrow: "\u2192",
      ShortUpArrow: "\u2191",
      shy: "\xad",
      Sigma: "\u03A3",
      sigma: "\u03C3",
      sigmaf: "\u03C2",
      sigmav: "\u03C2",
      sim: "\u223C",
      simdot: "\u2A6A",
      sime: "\u2243",
      simeq: "\u2243",
      simg: "\u2A9E",
      simgE: "\u2AA0",
      siml: "\u2A9D",
      simlE: "\u2A9F",
      simne: "\u2246",
      simplus: "\u2A24",
      simrarr: "\u2972",
      slarr: "\u2190",
      SmallCircle: "\u2218",
      smallsetminus: "\u2216",
      smashp: "\u2A33",
      smeparsl: "\u29E4",
      smid: "\u2223",
      smile: "\u2323",
      smt: "\u2AAA",
      smte: "\u2AAC",
      smtes: "\u2AAC\uFE00",
      SOFTcy: "\u042C",
      softcy: "\u044C",
      sol: "/",
      solb: "\u29C4",
      solbar: "\u233F",
      Sopf: "\u{1D54A}",
      sopf: "\u{1D564}",
      spades: "\u2660",
      spadesuit: "\u2660",
      spar: "\u2225",
      sqcap: "\u2293",
      sqcaps: "\u2293\uFE00",
      sqcup: "\u2294",
      sqcups: "\u2294\uFE00",
      Sqrt: "\u221A",
      sqsub: "\u228F",
      sqsube: "\u2291",
      sqsubset: "\u228F",
      sqsubseteq: "\u2291",
      sqsup: "\u2290",
      sqsupe: "\u2292",
      sqsupset: "\u2290",
      sqsupseteq: "\u2292",
      squ: "\u25A1",
      Square: "\u25A1",
      square: "\u25A1",
      SquareIntersection: "\u2293",
      SquareSubset: "\u228F",
      SquareSubsetEqual: "\u2291",
      SquareSuperset: "\u2290",
      SquareSupersetEqual: "\u2292",
      SquareUnion: "\u2294",
      squarf: "\u25AA",
      squf: "\u25AA",
      srarr: "\u2192",
      Sscr: "\u{1D4AE}",
      sscr: "\u{1D4C8}",
      ssetmn: "\u2216",
      ssmile: "\u2323",
      sstarf: "\u22C6",
      Star: "\u22C6",
      star: "\u2606",
      starf: "\u2605",
      straightepsilon: "\u03F5",
      straightphi: "\u03D5",
      strns: "\xaf",
      Sub: "\u22D0",
      sub: "\u2282",
      subdot: "\u2ABD",
      subE: "\u2AC5",
      sube: "\u2286",
      subedot: "\u2AC3",
      submult: "\u2AC1",
      subnE: "\u2ACB",
      subne: "\u228A",
      subplus: "\u2ABF",
      subrarr: "\u2979",
      Subset: "\u22D0",
      subset: "\u2282",
      subseteq: "\u2286",
      subseteqq: "\u2AC5",
      SubsetEqual: "\u2286",
      subsetneq: "\u228A",
      subsetneqq: "\u2ACB",
      subsim: "\u2AC7",
      subsub: "\u2AD5",
      subsup: "\u2AD3",
      succ: "\u227B",
      succapprox: "\u2AB8",
      succcurlyeq: "\u227D",
      Succeeds: "\u227B",
      SucceedsEqual: "\u2AB0",
      SucceedsSlantEqual: "\u227D",
      SucceedsTilde: "\u227F",
      succeq: "\u2AB0",
      succnapprox: "\u2ABA",
      succneqq: "\u2AB6",
      succnsim: "\u22E9",
      succsim: "\u227F",
      SuchThat: "\u220B",
      Sum: "\u2211",
      sum: "\u2211",
      sung: "\u266A",
      Sup: "\u22D1",
      sup: "\u2283",
      sup1: "\xb9",
      sup2: "\xb2",
      sup3: "\xb3",
      supdot: "\u2ABE",
      supdsub: "\u2AD8",
      supE: "\u2AC6",
      supe: "\u2287",
      supedot: "\u2AC4",
      Superset: "\u2283",
      SupersetEqual: "\u2287",
      suphsol: "\u27C9",
      suphsub: "\u2AD7",
      suplarr: "\u297B",
      supmult: "\u2AC2",
      supnE: "\u2ACC",
      supne: "\u228B",
      supplus: "\u2AC0",
      Supset: "\u22D1",
      supset: "\u2283",
      supseteq: "\u2287",
      supseteqq: "\u2AC6",
      supsetneq: "\u228B",
      supsetneqq: "\u2ACC",
      supsim: "\u2AC8",
      supsub: "\u2AD4",
      supsup: "\u2AD6",
      swarhk: "\u2926",
      swArr: "\u21D9",
      swarr: "\u2199",
      swarrow: "\u2199",
      swnwar: "\u292A",
      szlig: "\xdf",
      Tab: "	",
      target: "\u2316",
      Tau: "\u03A4",
      tau: "\u03C4",
      tbrk: "\u23B4",
      Tcaron: "\u0164",
      tcaron: "\u0165",
      Tcedil: "\u0162",
      tcedil: "\u0163",
      Tcy: "\u0422",
      tcy: "\u0442",
      tdot: "\u20DB",
      telrec: "\u2315",
      Tfr: "\u{1D517}",
      tfr: "\u{1D531}",
      there4: "\u2234",
      Therefore: "\u2234",
      therefore: "\u2234",
      Theta: "\u0398",
      theta: "\u03B8",
      thetasym: "\u03D1",
      thetav: "\u03D1",
      thickapprox: "\u2248",
      thicksim: "\u223C",
      ThickSpace: "\u205F\u200A",
      thinsp: "\u2009",
      ThinSpace: "\u2009",
      thkap: "\u2248",
      thksim: "\u223C",
      THORN: "\xde",
      thorn: "\xfe",
      Tilde: "\u223C",
      tilde: "\u02DC",
      TildeEqual: "\u2243",
      TildeFullEqual: "\u2245",
      TildeTilde: "\u2248",
      times: "\xd7",
      timesb: "\u22A0",
      timesbar: "\u2A31",
      timesd: "\u2A30",
      tint: "\u222D",
      toea: "\u2928",
      top: "\u22A4",
      topbot: "\u2336",
      topcir: "\u2AF1",
      Topf: "\u{1D54B}",
      topf: "\u{1D565}",
      topfork: "\u2ADA",
      tosa: "\u2929",
      tprime: "\u2034",
      TRADE: "\u2122",
      trade: "\u2122",
      triangle: "\u25B5",
      triangledown: "\u25BF",
      triangleleft: "\u25C3",
      trianglelefteq: "\u22B4",
      triangleq: "\u225C",
      triangleright: "\u25B9",
      trianglerighteq: "\u22B5",
      tridot: "\u25EC",
      trie: "\u225C",
      triminus: "\u2A3A",
      TripleDot: "\u20DB",
      triplus: "\u2A39",
      trisb: "\u29CD",
      tritime: "\u2A3B",
      trpezium: "\u23E2",
      Tscr: "\u{1D4AF}",
      tscr: "\u{1D4C9}",
      TScy: "\u0426",
      tscy: "\u0446",
      TSHcy: "\u040B",
      tshcy: "\u045B",
      Tstrok: "\u0166",
      tstrok: "\u0167",
      twixt: "\u226C",
      twoheadleftarrow: "\u219E",
      twoheadrightarrow: "\u21A0",
      Uacute: "\xda",
      uacute: "\xfa",
      Uarr: "\u219F",
      uArr: "\u21D1",
      uarr: "\u2191",
      Uarrocir: "\u2949",
      Ubrcy: "\u040E",
      ubrcy: "\u045E",
      Ubreve: "\u016C",
      ubreve: "\u016D",
      Ucirc: "\xdb",
      ucirc: "\xfb",
      Ucy: "\u0423",
      ucy: "\u0443",
      udarr: "\u21C5",
      Udblac: "\u0170",
      udblac: "\u0171",
      udhar: "\u296E",
      ufisht: "\u297E",
      Ufr: "\u{1D518}",
      ufr: "\u{1D532}",
      Ugrave: "\xd9",
      ugrave: "\xf9",
      uHar: "\u2963",
      uharl: "\u21BF",
      uharr: "\u21BE",
      uhblk: "\u2580",
      ulcorn: "\u231C",
      ulcorner: "\u231C",
      ulcrop: "\u230F",
      ultri: "\u25F8",
      Umacr: "\u016A",
      umacr: "\u016B",
      uml: "\xa8",
      UnderBar: "_",
      UnderBrace: "\u23DF",
      UnderBracket: "\u23B5",
      UnderParenthesis: "\u23DD",
      Union: "\u22C3",
      UnionPlus: "\u228E",
      Uogon: "\u0172",
      uogon: "\u0173",
      Uopf: "\u{1D54C}",
      uopf: "\u{1D566}",
      UpArrow: "\u2191",
      Uparrow: "\u21D1",
      uparrow: "\u2191",
      UpArrowBar: "\u2912",
      UpArrowDownArrow: "\u21C5",
      UpDownArrow: "\u2195",
      Updownarrow: "\u21D5",
      updownarrow: "\u2195",
      UpEquilibrium: "\u296E",
      upharpoonleft: "\u21BF",
      upharpoonright: "\u21BE",
      uplus: "\u228E",
      UpperLeftArrow: "\u2196",
      UpperRightArrow: "\u2197",
      Upsi: "\u03D2",
      upsi: "\u03C5",
      upsih: "\u03D2",
      Upsilon: "\u03A5",
      upsilon: "\u03C5",
      UpTee: "\u22A5",
      UpTeeArrow: "\u21A5",
      upuparrows: "\u21C8",
      urcorn: "\u231D",
      urcorner: "\u231D",
      urcrop: "\u230E",
      Uring: "\u016E",
      uring: "\u016F",
      urtri: "\u25F9",
      Uscr: "\u{1D4B0}",
      uscr: "\u{1D4CA}",
      utdot: "\u22F0",
      Utilde: "\u0168",
      utilde: "\u0169",
      utri: "\u25B5",
      utrif: "\u25B4",
      uuarr: "\u21C8",
      Uuml: "\xdc",
      uuml: "\xfc",
      uwangle: "\u29A7",
      vangrt: "\u299C",
      varepsilon: "\u03F5",
      varkappa: "\u03F0",
      varnothing: "\u2205",
      varphi: "\u03D5",
      varpi: "\u03D6",
      varpropto: "\u221D",
      vArr: "\u21D5",
      varr: "\u2195",
      varrho: "\u03F1",
      varsigma: "\u03C2",
      varsubsetneq: "\u228A\uFE00",
      varsubsetneqq: "\u2ACB\uFE00",
      varsupsetneq: "\u228B\uFE00",
      varsupsetneqq: "\u2ACC\uFE00",
      vartheta: "\u03D1",
      vartriangleleft: "\u22B2",
      vartriangleright: "\u22B3",
      Vbar: "\u2AEB",
      vBar: "\u2AE8",
      vBarv: "\u2AE9",
      Vcy: "\u0412",
      vcy: "\u0432",
      VDash: "\u22AB",
      Vdash: "\u22A9",
      vDash: "\u22A8",
      vdash: "\u22A2",
      Vdashl: "\u2AE6",
      Vee: "\u22C1",
      vee: "\u2228",
      veebar: "\u22BB",
      veeeq: "\u225A",
      vellip: "\u22EE",
      Verbar: "\u2016",
      verbar: "|",
      Vert: "\u2016",
      vert: "|",
      VerticalBar: "\u2223",
      VerticalLine: "|",
      VerticalSeparator: "\u2758",
      VerticalTilde: "\u2240",
      VeryThinSpace: "\u200A",
      Vfr: "\u{1D519}",
      vfr: "\u{1D533}",
      vltri: "\u22B2",
      vnsub: "\u2282\u20D2",
      vnsup: "\u2283\u20D2",
      Vopf: "\u{1D54D}",
      vopf: "\u{1D567}",
      vprop: "\u221D",
      vrtri: "\u22B3",
      Vscr: "\u{1D4B1}",
      vscr: "\u{1D4CB}",
      vsubnE: "\u2ACB\uFE00",
      vsubne: "\u228A\uFE00",
      vsupnE: "\u2ACC\uFE00",
      vsupne: "\u228B\uFE00",
      Vvdash: "\u22AA",
      vzigzag: "\u299A",
      Wcirc: "\u0174",
      wcirc: "\u0175",
      wedbar: "\u2A5F",
      Wedge: "\u22C0",
      wedge: "\u2227",
      wedgeq: "\u2259",
      weierp: "\u2118",
      Wfr: "\u{1D51A}",
      wfr: "\u{1D534}",
      Wopf: "\u{1D54E}",
      wopf: "\u{1D568}",
      wp: "\u2118",
      wr: "\u2240",
      wreath: "\u2240",
      Wscr: "\u{1D4B2}",
      wscr: "\u{1D4CC}",
      xcap: "\u22C2",
      xcirc: "\u25EF",
      xcup: "\u22C3",
      xdtri: "\u25BD",
      Xfr: "\u{1D51B}",
      xfr: "\u{1D535}",
      xhArr: "\u27FA",
      xharr: "\u27F7",
      Xi: "\u039E",
      xi: "\u03BE",
      xlArr: "\u27F8",
      xlarr: "\u27F5",
      xmap: "\u27FC",
      xnis: "\u22FB",
      xodot: "\u2A00",
      Xopf: "\u{1D54F}",
      xopf: "\u{1D569}",
      xoplus: "\u2A01",
      xotime: "\u2A02",
      xrArr: "\u27F9",
      xrarr: "\u27F6",
      Xscr: "\u{1D4B3}",
      xscr: "\u{1D4CD}",
      xsqcup: "\u2A06",
      xuplus: "\u2A04",
      xutri: "\u25B3",
      xvee: "\u22C1",
      xwedge: "\u22C0",
      Yacute: "\xdd",
      yacute: "\xfd",
      YAcy: "\u042F",
      yacy: "\u044F",
      Ycirc: "\u0176",
      ycirc: "\u0177",
      Ycy: "\u042B",
      ycy: "\u044B",
      yen: "\xa5",
      Yfr: "\u{1D51C}",
      yfr: "\u{1D536}",
      YIcy: "\u0407",
      yicy: "\u0457",
      Yopf: "\u{1D550}",
      yopf: "\u{1D56A}",
      Yscr: "\u{1D4B4}",
      yscr: "\u{1D4CE}",
      YUcy: "\u042E",
      yucy: "\u044E",
      Yuml: "\u0178",
      yuml: "\xff",
      Zacute: "\u0179",
      zacute: "\u017A",
      Zcaron: "\u017D",
      zcaron: "\u017E",
      Zcy: "\u0417",
      zcy: "\u0437",
      Zdot: "\u017B",
      zdot: "\u017C",
      zeetrf: "\u2128",
      ZeroWidthSpace: "\u200B",
      Zeta: "\u0396",
      zeta: "\u03B6",
      Zfr: "\u2128",
      zfr: "\u{1D537}",
      ZHcy: "\u0416",
      zhcy: "\u0436",
      zigrarr: "\u21DD",
      Zopf: "\u2124",
      zopf: "\u{1D56B}",
      Zscr: "\u{1D4B5}",
      zscr: "\u{1D4CF}",
      zwj: "\u200D",
      zwnj: "\u200C"
    });
    t.entityMap = t.HTML_ENTITIES;
  });
  n_.XML_ENTITIES;
  n_.HTML_ENTITIES;
  n_.entityMap;
  var nv = rL;
  var sN = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/;
  var sO = RegExp("[\\-\\.0-9" + sN.source.slice(1, -1) + "\\u00B7\\u0300-\\u036F\\u203F-\\u2040]");
  var nb = RegExp("^" + sN.source + sO.source + "*(?::" + sN.source + sO.source + "*)?$");
  function nT(e, t) {
    this.message = e;
    this.locator = t;
    Error.captureStackTrace && Error.captureStackTrace(this, nT);
  }
  function nS() { }
  function nw(e, t) {
    t.lineNumber = e.lineNumber;
    t.columnNumber = e.columnNumber;
    return t;
  }
  function nE(e, t, i) {
    for (s = e.tagName, r = null, n = e.length, void 0; n--;) {
      var s;
      var r;
      var n;
      var a = e[n];
      var o = a.qName;
      var l = a.value;
      var o = 0 < (d = o.indexOf(":")) ? (h = a.prefix = o.slice(0, d), u = o.slice(d + 1), "xmlns" === h && u) : (h = null, "xmlns" === (u = o) && "");
      a.localName = u;
      !1 !== o && (null == r && (r = {}, nC(i, i = {})), i[o] = r[o] = l, a.uri = nv.XMLNS, t.startPrefixMapping(o, l));
    }
    for (n = e.length, void 0; n--;) {
      var h;
      var n;
      (h = (a = e[n]).prefix) && ("xml" === h && (a.uri = nv.XML), "xmlns" !== h) && (a.uri = i[h || ""]);
    }
    var d;
    var u = 0 < (d = s.indexOf(":")) ? (h = e.prefix = s.slice(0, d), e.localName = s.slice(d + 1)) : (h = null, e.localName = s);
    var c = e.uri = i[h || ""];
    if (t.startElement(c, u, s, e), !e.closed) {
      e.currentNSMap = i;
      e.localNSMap = r;
      return 1;
    }
    if (t.endElement(c, u, s), r) for (h in r) Object.prototype.hasOwnProperty.call(r, h) && t.endPrefixMapping(h);
  }
  function nC(e, t) {
    for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
  }
  function nk() {
    this.attributeNames = {};
  }
  (nT.prototype = Error()).name = nT.name;
  nS.prototype = {
    parse: function (e, t, i) {
      var s = this.domBuilder;
      s.startDocument();
      nC(t, t = {});
      (function (e, t, i, s, r) {
        function n(e) {
          var t = e.slice(1, -1);
          return Object.hasOwnProperty.call(i, t) ? i[t] : "#" === t.charAt(0) ? 65535 < (t = parseInt(t.substr(1).replace("x", "0x"))) ? String.fromCharCode(55296 + ((t -= 65536) >> 10), 56320 + (1023 & t)) : String.fromCharCode(t) : (r.error("entity not found:" + e), e);
        }
        function a(t) {
          var i;
          m < t && (i = e.substring(m, t).replace(/&#?\w+;/g, n), u && o(m), s.characters(i, 0, t - m), m = t);
        }
        function o(t, i) {
          for (; h <= t && (i = d.exec(e));) {
            h = (l = i.index) + i[0].length;
            u.lineNumber++;
          }
          u.columnNumber = t - l + 1;
        }
        for (l = 0, h = 0, d = /.*(?:\r\n?|\n)|.*$/g, u = s.locator, c = [{
          currentNSMap: t
        }], p = {}, m = 0, void 0; ;) {
          var l;
          var h;
          var d;
          var u;
          var c;
          var p;
          var m;
          try {
            var g;
            var f;
            var y = e.indexOf("<", m);
            if (y < 0) return e.substr(m).match(/^\s*$/) || (f = (g = s.doc).createTextNode(e.substr(m)), g.appendChild(f), s.currentElement = f);
            switch (m < y && a(y), e.charAt(y + 1)) {
              case "/":
                var _ = e.indexOf(">", y + 3);
                var v = e.substring(y + 2, _).replace(/[ \t\n\r]+$/g, "");
                var b = c.pop();
                _ < 0 ? (v = e.substring(y + 2).replace(/[\s<].*/, ""), r.error("end tag name: " + v + " is not complete:" + b.tagName), _ = y + 1 + v.length) : v.match(/\s</) && (v = v.replace(/[\s<].*/, ""), r.error("end tag name: " + v + " maybe not complete"), _ = y + 1 + v.length);
                var T = b.localNSMap;
                var S = b.tagName == v;
                if (S || b.tagName && b.tagName.toLowerCase() == v.toLowerCase()) {
                  if (s.endElement(b.uri, b.localName, v), T) for (var w in T) Object.prototype.hasOwnProperty.call(T, w) && s.endPrefixMapping(w);
                  S || r.fatalError("end tag name: " + v + " is not match the current start tagName:" + b.tagName);
                } else c.push(b);
                _++;
                break;
              case "?":
                u && o(y);
                _ = function (e, t, i) {
                  var s = e.indexOf("?>", t);
                  return s && (e = e.substring(t, s).match(/^<\?(\S*)\s*([\s\S]*?)\s*$/)) ? (e[0].length, i.processingInstruction(e[1], e[2]), s + 2) : -1;
                }(e, y, s);
                break;
              case "!":
                u && o(y);
                _ = function (e, t, i, s) {
                  if ("-" === e.charAt(t + 2)) return "-" === e.charAt(t + 3) ? (n = e.indexOf("--\x3e", t + 4), t < n ? (i.comment(e, t + 4, n - t - 4), n + 3) : (s.error("Unclosed comment"), -1)) : -1;
                  if ("CDATA[" == e.substr(t + 3, 6)) {
                    n = e.indexOf("]]>", t + 9);
                    i.startCDATA();
                    i.characters(e, t + 9, n - t - 9);
                    i.endCDATA();
                    return n + 3;
                  }
                  var r;
                  var s = function (e, t) {
                    var i;
                    var s = [];
                    var r = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
                    for (r.lastIndex = t, r.exec(e); i = r.exec(e);) if (s.push(i), i[1]) return s;
                  }(e, t);
                  var n = s.length;
                  return 1 < n && /!doctype/i.test(s[0][0]) ? (e = s[1][0], r = t = !1, 3 < n && (/^public$/i.test(s[2][0]) ? (t = s[3][0], r = 4 < n && s[4][0]) : /^system$/i.test(s[2][0]) && (r = s[3][0])), s = s[n - 1], i.startDTD(e, t, r), i.endDTD(), s.index + s[0].length) : -1;
                }(e, y, s, r);
                break;
              default:
                u && o(y);
                var E = new nk();
                var C = c[c.length - 1].currentNSMap;
                var _ = function (e, t, i, s, r, n) {
                  function a(e, t, s) {
                    i.attributeNames.hasOwnProperty(e) && n.fatalError("Attribute " + e + " redefined");
                    i.addValue(e, t.replace(/[\t\n\r]/g, " ").replace(/&#?\w+;/g, r), s);
                  }
                  for (l = ++t, h = 0, void 0; ;) {
                    var o;
                    var l;
                    var h;
                    var d = e.charAt(l);
                    switch (d) {
                      case "=":
                        if (1 === h) o = e.slice(t, l); else if (2 !== h) throw Error("attribute equal must after attrName");
                        h = 3;
                        break;
                      case "'":
                      case '"':
                        if (3 === h || 1 === h) {
                          if (1 === h && (n.warning('attribute value must after "="'), o = e.slice(t, l)), t = l + 1, !(0 < (l = e.indexOf(d, t)))) throw Error("attribute value no end '" + d + "' match");
                          u = e.slice(t, l);
                          a(o, u, t - 1);
                        } else {
                          if (4 != h) throw Error('attribute value must after "="');
                          u = e.slice(t, l);
                          a(o, u, t);
                          n.warning('attribute "' + o + '" missed start quot(' + d + ")!!");
                          t = l + 1;
                        }
                        h = 5;
                        break;
                      case "/":
                        switch (h) {
                          case 0:
                            i.setTagName(e.slice(t, l));
                          case 5:
                          case 6:
                          case 7:
                            h = 7;
                            i.closed = !0;
                          case 4:
                          case 1:
                            break;
                          case 2:
                            i.closed = !0;
                            break;
                          default:
                            throw Error("attribute invalid close char('/')");
                        }
                        break;
                      case "":
                        n.error("unexpected end of input");
                        0 == h && i.setTagName(e.slice(t, l));
                        return l;
                      case ">":
                        switch (h) {
                          case 0:
                            i.setTagName(e.slice(t, l));
                          case 5:
                          case 6:
                          case 7:
                            break;
                          case 4:
                          case 1:
                            "/" === (u = e.slice(t, l)).slice(-1) && (i.closed = !0, u = u.slice(0, -1));
                          case 2:
                            2 === h && (u = o);
                            4 == h ? (n.warning('attribute "' + u + '" missed quot(")!'), a(o, u, t)) : (nv.isHTML(s[""]) && u.match(/^(?:disabled|checked|selected)$/i) || n.warning('attribute "' + u + '" missed value!! "' + u + '" instead!!'), a(u, u, t));
                            break;
                          case 3:
                            throw Error("attribute value missed!!");
                        }
                        return l;
                      case "\x80":
                        d = " ";
                      default:
                        if (d <= " ") switch (h) {
                          case 0:
                            i.setTagName(e.slice(t, l));
                            h = 6;
                            break;
                          case 1:
                            o = e.slice(t, l);
                            h = 2;
                            break;
                          case 4:
                            var u = e.slice(t, l);
                            n.warning('attribute "' + u + '" missed quot(")!!');
                            a(o, u, t);
                          case 5:
                            h = 6;
                        } else switch (h) {
                          case 2:
                            i.tagName;
                            nv.isHTML(s[""]) && o.match(/^(?:disabled|checked|selected)$/i) || n.warning('attribute "' + o + '" missed value!! "' + o + '" instead2!!');
                            a(o, o, t);
                            t = l;
                            h = 1;
                            break;
                          case 5:
                            n.warning('attribute space is required"' + o + '"!!');
                          case 6:
                            h = 1;
                            t = l;
                            break;
                          case 3:
                            h = 4;
                            t = l;
                            break;
                          case 7:
                            throw Error("elements closed character '/' and '>' must be connected to");
                        }
                    }
                    l++;
                  }
                }(e, y, E, C, n, r);
                var k = E.length;
                if (!E.closed && function (e, t, i, s) {
                  var r = s[i];
                  null == r && ((r = e.lastIndexOf("</" + i + ">")) < t && (r = e.lastIndexOf("</" + i)), s[i] = r);
                  return r < t;
                }(e, _, E.tagName, p) && (E.closed = !0, i.nbsp || r.warning("unclosed xml attribute")), u && k) {
                  for (x = nw(u, {}), I = 0, void 0; I < k; I++) {
                    var x;
                    var I;
                    var A = E[I];
                    o(A.offset);
                    A.locator = nw(u, {});
                  }
                  s.locator = x;
                  nE(E, s, C) && c.push(E);
                  s.locator = u;
                } else nE(E, s, C) && c.push(E);
                nv.isHTML(E.uri) && !E.closed ? _ = function (e, t, i, s, r) {
                  if (/^(?:script|textarea)$/i.test(i)) {
                    var n = e.indexOf("</" + i + ">", t);
                    var e = e.substring(t + 1, n);
                    if (/[&<]/.test(e)) {
                      /^script$/i.test(i) || (e = e.replace(/&#?\w+;/g, s));
                      r.characters(e, 0, e.length);
                      return n;
                    }
                  }
                  return t + 1;
                }(e, _, E.tagName, n, s) : _++;
            }
          } catch (e) {
            if (e instanceof nT) throw e;
            r.error("element parse error: " + e);
            _ = -1;
          }
          m < _ ? m = _ : a(Math.max(y, m) + 1);
        }
      })(e, t, i, s, this.errorHandler);
      s.endDocument();
    }
  };
  nk.prototype = {
    setTagName: function (e) {
      if (!nb.test(e)) throw Error("invalid tagName:" + e);
      this.tagName = e;
    },
    addValue: function (e, t, i) {
      if (!nb.test(e)) throw Error("invalid attribute:" + e);
      this.attributeNames[e] = this.length;
      this[this.length++] = {
        qName: e,
        value: t,
        offset: i
      };
    },
    length: 0,
    getLocalName: function (e) {
      return this[e].localName;
    },
    getLocator: function (e) {
      return this[e].locator;
    },
    getQName: function (e) {
      return this[e].qName;
    },
    getURI: function (e) {
      return this[e].uri;
    },
    getValue: function (e) {
      return this[e].value;
    }
  };
  var sP = {
    XMLReader: nS,
    ParseError: nT
  };
  var nx = sk.DOMImplementation;
  var nI = sP.ParseError;
  var nA = sP.XMLReader;
  function nD(e) {
    return e.replace(/\r[\n\u0085]/g, "\n").replace(/[\r\u0085\u2028]/g, "\n");
  }
  function nL(e) {
    this.options = e || {
      locator: {}
    };
  }
  function nP() {
    this.cdata = !1;
  }
  function nO(e, t) {
    t.lineNumber = e.lineNumber;
    t.columnNumber = e.columnNumber;
  }
  function nN(e, t, i) {
    return "string" == typeof e ? e.substr(t, i) : e.length >= t + i || t ? new java.lang.String(e, t, i) + "" : e;
  }
  function nR(e, t) {
    (e.currentElement || e.doc).appendChild(t);
  }
  /*! @name mpd-parser @version 1.3.0 @license Apache-2.0 */
  nL.prototype.parseFromString = function (e, t) {
    var i = this.options;
    var s = new nA();
    var r = i.domBuilder || new nP();
    var n = i.errorHandler;
    var a = i.locator;
    var o = i.xmlns || {};
    var t = /\/x?html?$/.test(t);
    var l = t ? n_.HTML_ENTITIES : n_.XML_ENTITIES;
    a && r.setDocumentLocator(a);
    s.errorHandler = function (e, t, i) {
      if (!e) {
        if (t instanceof nP) return t;
        e = t;
      }
      var s = {};
      var r = e instanceof Function;
      function n(t) {
        var n = e[t];
        !n && r && (n = 2 == e.length ? function (i) {
          e(t, i);
        } : e);
        s[t] = n ? function (e) {
          n("[xmldom " + t + "]	" + e + function (e) {
            if (e) return "\n@" + (e.systemId || "") + "#[line:" + e.lineNumber + ",col:" + e.columnNumber + "]";
          }(i));
        } : function () { };
      }
      i = i || {};
      n("warning");
      n("error");
      n("fatalError");
      return s;
    }(n, r, a);
    s.domBuilder = i.domBuilder || r;
    t && (o[""] = rL.HTML);
    o.xml = o.xml || rL.XML;
    var n = i.normalizeLineEndings || nD;
    e && "string" == typeof e ? s.parse(n(e), o, l) : s.errorHandler.error("invalid doc source");
    return r.doc;
  };
  nP.prototype = {
    startDocument: function () {
      this.doc = new nx().createDocument(null, null, null);
      this.locator && (this.doc.documentURI = this.locator.systemId);
    },
    startElement: function (e, t, i, s) {
      var r = this.doc;
      var n = r.createElementNS(e, i || t);
      var a = s.length;
      nR(this, n);
      this.currentElement = n;
      this.locator && nO(this.locator, n);
      for (var o = 0; o < a; o++) {
        var e = s.getURI(o);
        var l = s.getValue(o);
        var i = s.getQName(o);
        var h = r.createAttributeNS(e, i);
        this.locator && nO(s.getLocator(o), h);
        h.value = h.nodeValue = l;
        n.setAttributeNode(h);
      }
    },
    endElement: function (e, t, i) {
      var s = this.currentElement;
      s.tagName;
      this.currentElement = s.parentNode;
    },
    startPrefixMapping: function (e, t) { },
    endPrefixMapping: function (e) { },
    processingInstruction: function (e, t) {
      e = this.doc.createProcessingInstruction(e, t);
      this.locator && nO(this.locator, e);
      nR(this, e);
    },
    ignorableWhitespace: function (e, t, i) { },
    characters: function (e, t, i) {
      var s;
      (e = nN.apply(this, arguments)) && (s = this.cdata ? this.doc.createCDATASection(e) : this.doc.createTextNode(e), this.currentElement ? this.currentElement.appendChild(s) : /^\s*$/.test(e) && this.doc.appendChild(s), this.locator) && nO(this.locator, s);
    },
    skippedEntity: function (e) { },
    endDocument: function () {
      this.doc.normalize();
    },
    setDocumentLocator: function (e) {
      (this.locator = e) && (e.lineNumber = 0);
    },
    comment: function (e, t, i) {
      e = nN.apply(this, arguments);
      e = this.doc.createComment(e);
      this.locator && nO(this.locator, e);
      nR(this, e);
    },
    startCDATA: function () {
      this.cdata = !0;
    },
    endCDATA: function () {
      this.cdata = !1;
    },
    startDTD: function (e, t, i) {
      var s = this.doc.implementation;
      s && s.createDocumentType && (s = s.createDocumentType(e, t, i), this.locator && nO(this.locator, s), nR(this, s), this.doc.doctype = s);
    },
    warning: function (e) { },
    error: function (e) { },
    fatalError: function (e) {
      throw new nI(e, this.locator);
    }
  };
  "endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl".replace(/\w+/g, function (e) {
    nP.prototype[e] = function () {
      return null;
    };
  });
  let nM = e => !!e && "object" == typeof e;
  let nU = (...e) => e.reduce((e, t) => ("object" == typeof t && Object.keys(t).forEach(i => {
    Array.isArray(e[i]) && Array.isArray(t[i]) ? e[i] = e[i].concat(t[i]) : nM(e[i]) && nM(t[i]) ? e[i] = nU(e[i], t[i]) : e[i] = t[i];
  }), e), {});
  let nB = e => Object.keys(e).map(t => e[t]);
  let nF = e => e.reduce((e, t) => e.concat(t), []);
  let nq = e => {
    if (!e.length) return [];
    var t = [];
    for (let i = 0; i < e.length; i++) t.push(e[i]);
    return t;
  };
  var nj = {
    INVALID_NUMBER_OF_PERIOD: "INVALID_NUMBER_OF_PERIOD",
    DASH_EMPTY_MANIFEST: "DASH_EMPTY_MANIFEST",
    DASH_INVALID_XML: "DASH_INVALID_XML",
    NO_BASE_URL: "NO_BASE_URL",
    SEGMENT_TIME_UNSPECIFIED: "SEGMENT_TIME_UNSPECIFIED",
    UNSUPPORTED_UTC_TIMING_SCHEME: "UNSUPPORTED_UTC_TIMING_SCHEME"
  };
  let nH = ({
    baseUrl: e = "",
    source: t = "",
    range: i = "",
    indexRange: s = ""
  }) => {
    if (e = {
      uri: t,
      resolvedUri: s9(e || "", t)
    }, i || s) {
      let r;
      t = (i || s).split("-");
      let n = window.BigInt ? window.BigInt(t[0]) : parseInt(t[0], 10);
      let a = window.BigInt ? window.BigInt(t[1]) : parseInt(t[1], 10);
      n < Number.MAX_SAFE_INTEGER && "bigint" == typeof n && (n = Number(n));
      a < Number.MAX_SAFE_INTEGER && "bigint" == typeof a && (a = Number(a));
      "bigint" == typeof (r = "bigint" == typeof a || "bigint" == typeof n ? window.BigInt(a) - window.BigInt(n) + window.BigInt(1) : a - n + 1) && r < Number.MAX_SAFE_INTEGER && (r = Number(r));
      e.byterange = {
        length: r,
        offset: n
      };
    }
    return e;
  };
  let nV = e => (e && "number" != typeof e && (e = parseInt(e, 10)), isNaN(e) ? null : e);
  let n$ = {
    static(e) {
      var {
        duration,
        timescale = 1,
        sourceDuration,
        periodDuration
      } = e;
      var e = nV(e.endNumber);
      var t = duration / timescale;
      return "number" == typeof e ? {
        start: 0,
        end: e
      } : "number" == typeof periodDuration ? {
        start: 0,
        end: periodDuration / duration
      } : {
        start: 0,
        end: sourceDuration / duration
      };
    },
    dynamic(e) {
      var {
        NOW,
        clientOffset,
        availabilityStartTime,
        timescale = 1,
        duration,
        periodStart = 0,
        minimumUpdatePeriod = 0,
        timeShiftBufferDepth = 1 / 0
      } = e;
      var e = nV(e.endNumber);
      var t = (NOW + clientOffset) / 1e3;
      var i = availabilityStartTime + periodStart;
      var s = Math.ceil((NOW + minimumUpdatePeriod - clientOffset) * timescale / duration);
      var a = Math.floor((NOW - clientOffset - timeShiftBufferDepth) * timescale / duration);
      var o = Math.floor((NOW - clientOffset) * timescale / duration);
      return {
        start: Math.max(0, periodStart),
        end: "number" == typeof e ? e : Math.min(availabilityStartTime, minimumUpdatePeriod)
      };
    }
  };
  let nz = e => {
    var {
      type,
      duration,
      timescale = 1,
      periodDuration,
      sourceDuration
    } = e;
    var {
      start,
      end
    } = n$[type](e);
    var a = ((e, t) => {
      var i = [];
      for (let s = e; s < t; s++) i.push(s);
      return i;
    })(start, end).map(t => {
      var {
        duration: _duration,
        timescale: _timescale = 1,
        periodStart,
        startNumber = 1
      } = e;
      return {
        number: startNumber + t,
        duration: _duration / _timescale,
        timeline: periodStart,
        time: t * _duration
      };
    });
    "static" === type && (start[o = start.length - 1].duration = ("number" == typeof periodDuration ? periodDuration : sourceDuration) - duration / timescale * end);
    return start;
  };
  let nW = e => {
    var {
      baseUrl,
      initialization = {},
      sourceDuration,
      indexRange = "",
      periodStart,
      presentationTime,
      number = 0,
      duration
    } = e;
    if (baseUrl) {
      i = nH({
        baseUrl,
        source: initialization.sourceURL,
        range: initialization.range
      });
      (t = nH({
        baseUrl,
        source: baseUrl,
        indexRange
      })).map = initialization;
      duration ? (r = nz(e)).length && (baseUrl.duration = indexRange[0].duration, baseUrl.timeline = indexRange[0].timeline) : sourceDuration && (baseUrl.duration = sourceDuration, baseUrl.timeline = periodStart);
      baseUrl.presentationTime = presentationTime || periodStart;
      baseUrl.number = number;
      return [baseUrl];
    }
    throw Error(nj.NO_BASE_URL);
  };
  let nG = (e, t, i) => {
    var s = e.sidx.map || null;
    var r = e.sidx.duration;
    var n = e.timeline || 0;
    var a = e.sidx.byterange;
    var a = a.offset + a.length;
    var o = t.timescale;
    var l = t.references.filter(e => 1 !== e.referenceType);
    var h = [];
    var d = e.endList ? "static" : "dynamic";
    var u = e.sidx.timeline;
    let c = u;
    let p = e.mediaSequence || 0;
    let m;
    m = "bigint" == typeof t.firstOffset ? window.BigInt(a) + t.firstOffset : a + t.firstOffset;
    for (let e = 0; e < l.length; e++) {
      let a;
      var g = t.references[e];
      var f = g.referencedSize;
      var g = g.subsegmentDuration;
      a = "bigint" == typeof m ? m + window.BigInt(f) - window.BigInt(1) : m + f - 1;
      var y = m + "-" + a;
      var y = {
        baseUrl: i,
        timescale: o,
        timeline: n,
        periodStart: u,
        presentationTime: c,
        number: p,
        duration: g,
        sourceDuration: r,
        indexRange: y,
        type: d
      };
      var y = nW(y)[0];
      s && (y.map = s);
      h.push(y);
      "bigint" == typeof m ? m += window.BigInt(f) : m += f;
      c += g / o;
      p++;
    }
    e.segments = h;
    return e;
  };
  let nX = ["AUDIO", "SUBTITLES"];
  let nK = e => {
    var t;
    t = ({
      timeline: e
    }) => e;
    return nB(e.reduce((e, i) => (i.forEach(i => {
      e[t(i)] = i;
    }), e), {})).sort((e, t) => e.timeline > t.timeline ? 1 : -1);
  };
  let nY = e => {
    var t;
    var i;
    let s = [];
    t = e;
    e = nX;
    i = (e, t, i, r) => {
      s = s.concat(e.playlists || []);
    };
    e.forEach(function (e) {
      for (var s in t.mediaGroups[e]) for (var r in t.mediaGroups[e][s]) i(t.mediaGroups[e][s][r], e, s, r);
    });
    return s;
  };
  let nQ = ({
    playlist: e,
    mediaSequence: t
  }) => {
    e.mediaSequence = t;
    e.segments.forEach((t, i) => {
      t.number = e.mediaSequence + i;
    });
  };
  let nJ = ({
    oldManifest: e,
    newManifest: t
  }) => {
    var i;
    var s;
    var r = e.playlists.concat(nY(e));
    var n = t.playlists.concat(nY(t));
    t.timelineStarts = nK([e.timelineStarts, t.timelineStarts]);
    ({
      oldPlaylists: i,
      newPlaylists: e,
      timelineStarts: s
    } = {
      oldPlaylists: r,
      newPlaylists: n,
      timelineStarts: t.timelineStarts
    });
    e.forEach(e => {
      e.discontinuitySequence = s.findIndex(function ({
        timeline: t
      }) {
        return t === e.timeline;
      });
      var t = ((e, t) => {
        for (let i = 0; i < e.length; i++) if (e[i].attributes.NAME === t) return e[i];
        return null;
      })(i, e.attributes.NAME);
      if (t && !e.sidx) {
        let i = e.segments[0];
        var r = t.segments.findIndex(function (e) {
          return Math.abs(e.presentationTime - i.presentationTime) < 1 / 60;
        });
        -1 === r ? (nQ({
          playlist: e,
          mediaSequence: t.mediaSequence + t.segments.length
        }), e.segments[0].discontinuity = !0, e.discontinuityStarts.unshift(0), (!t.segments.length && e.timeline > t.timeline || t.segments.length && e.timeline > t.segments[t.segments.length - 1].timeline) && e.discontinuitySequence--) : (t.segments[r].discontinuity && !i.discontinuity && (i.discontinuity = !0, e.discontinuityStarts.unshift(0), e.discontinuitySequence--), nQ({
          playlist: e,
          mediaSequence: t.segments[r].number
        }));
      }
    });
    return t;
  };
  let nZ = e => {
    var t;
    let i;
    return e && e.uri + "-" + (i = "bigint" == typeof (t = e.byterange).offset || "bigint" == typeof t.length ? window.BigInt(t.offset) + window.BigInt(t.length) - window.BigInt(1) : t.offset + t.length - 1, t.offset + "-" + i);
  };
  let n0 = e => {
    e = e.reduce(function (e, t) {
      e[t.attributes.baseUrl] || (e[t.attributes.baseUrl] = []);
      e[t.attributes.baseUrl].push(t);
      return e;
    }, {});
    let t = [];
    Object.values(e).forEach(e => {
      e = nB(e.reduce((e, t) => {
        var i = t.attributes.id + (t.attributes.lang || "");
        e[i] ? (t.segments && (t.segments[0] && (t.segments[0].discontinuity = !0), e[i].segments.push(...t.segments)), t.attributes.contentProtection && (e[i].attributes.contentProtection = t.attributes.contentProtection)) : (e[i] = t, e[i].attributes.timelineStarts = []);
        e[i].attributes.timelineStarts.push({
          start: t.attributes.periodStart,
          timeline: t.attributes.periodStart
        });
        return e;
      }, {}));
      t = t.concat(e);
    });
    return t.map(e => {
      var t;
      var i;
      e.discontinuityStarts = (t = e.segments || [], i = "discontinuity", t.reduce((e, t, s) => (t[i] && e.push(s), e), []));
      return e;
    });
  };
  let n1 = (e, t) => {
    var i = nZ(e.sidx);
    var t = i && t[i] && t[i].sidx;
    t && nG(e, t, e.sidx.resolvedUri);
    return e;
  };
  let n2 = (e, t = {}) => e.reduce((e, i) => {
    var s;
    var r;
    var n;
    var a;
    var o = i.attributes.label || i.attributes.lang || "text";
    e[o] || (e[o] = {
      language: o,
      default: !1,
      autoselect: !1,
      playlists: [],
      uri: ""
    });
    e[o].playlists.push(n1(({
      attributes: o,
      segments: i,
      mediaSequence: s,
      discontinuityStarts: r,
      discontinuitySequence: n
    } = i, void 0 === i && (i = [{
      uri: o.baseUrl,
      timeline: o.periodStart,
      resolvedUri: o.baseUrl || "",
      duration: o.sourceDuration,
      number: 0
    }], o.duration = o.sourceDuration), a = {
      NAME: o.id,
      BANDWIDTH: o.bandwidth,
      "PROGRAM-ID": 1
    }, o.codecs && (a.CODECS = o.codecs), a = {
      attributes: a,
      uri: "",
      endList: "static" === o.type,
      timeline: o.periodStart,
      resolvedUri: o.baseUrl || "",
      targetDuration: o.duration,
      timelineStarts: o.timelineStarts,
      discontinuityStarts: r,
      discontinuitySequence: n,
      mediaSequence: s,
      segments: i
    }, o.serviceLocation && (a.attributes.serviceLocation = o.serviceLocation), a), t));
    return e;
  }, {});
  let n4 = ({
    attributes: e,
    segments: t,
    sidx: i,
    discontinuityStarts: s
  }) => (s = {
    attributes: {
      NAME: e.id,
      AUDIO: "audio",
      SUBTITLES: "subs",
      RESOLUTION: {
        width: e.width,
        height: e.height
      },
      CODECS: e.codecs,
      BANDWIDTH: e.bandwidth,
      "PROGRAM-ID": 1
    },
    uri: "",
    endList: "static" === e.type,
    timeline: e.periodStart,
    resolvedUri: e.baseUrl || "",
    targetDuration: e.duration,
    discontinuityStarts: s,
    timelineStarts: e.timelineStarts,
    segments: t
  }, e.frameRate && (s.attributes["FRAME-RATE"] = e.frameRate), e.contentProtection && (s.contentProtection = e.contentProtection), e.serviceLocation && (s.attributes.serviceLocation = e.serviceLocation), i && (s.sidx = i), s);
  let n8 = ({
    attributes: e
  }) => "video/mp4" === e.mimeType || "video/webm" === e.mimeType || "video" === e.contentType;
  let n5 = ({
    attributes: e
  }) => "audio/mp4" === e.mimeType || "audio/webm" === e.mimeType || "audio" === e.contentType;
  let n3 = ({
    attributes: e
  }) => "text/vtt" === e.mimeType || "text" === e.contentType;
  let n6 = e => e ? Object.keys(e).reduce((t, i) => (i = e[i], t.concat(i.playlists)), []) : [];
  let n7 = ({
    dashPlaylists: e,
    locations: t,
    contentSteering: i,
    sidxMapping: s = {},
    previousManifest: r,
    eventStream: n
  }) => {
    var a;
    var o;
    var l;
    var h;
    var d;
    var u;
    var c;
    var p;
    return e.length ? ({
      sourceDuration: h,
      type: u,
      suggestedPresentationDelay: c,
      minimumUpdatePeriod: d
    } = e[0].attributes, a = n0(e.filter(n8)).map(n4), o = n0(e.filter(n5)), l = n0(e.filter(n3)), e = e.map(e => e.attributes.captionServices).filter(Boolean), h = {
      allowCache: !0,
      discontinuityStarts: [],
      segments: [],
      endList: !0,
      mediaGroups: {
        AUDIO: {},
        VIDEO: {},
        "CLOSED-CAPTIONS": {},
        SUBTITLES: {}
      },
      uri: "",
      duration: h,
      playlists: ((e, t = {}) => {
        if (Object.keys(t).length) for (let i in e) e[i] = n1(e[i], t);
        return e;
      })(a, s)
    }, 0 <= d && (h.minimumUpdatePeriod = 1e3 * d), t && (h.locations = t), i && (h.contentSteering = i), "dynamic" === u && (h.suggestedPresentationDelay = c), n && 0 < n.length && (h.eventStream = n), d = 0 === h.playlists.length, t = o.length ? ((e, t = {}, i) => {
      let s;
      e = e.reduce((e, r) => {
        var n = r.attributes.role && r.attributes.role.value || "";
        var a = r.attributes.lang || "";
        let o = r.attributes.label || "main";
        e[o = a && !r.attributes.label ? r.attributes.lang + (n ? ` (${n})` : "") : o] || (e[o] = {
          language: a,
          autoselect: !0,
          default: "main" === n,
          playlists: [],
          uri: ""
        });
        a = n1((({
          attributes: e,
          segments: t,
          sidx: i,
          mediaSequence: s,
          discontinuitySequence: r,
          discontinuityStarts: n
        }, a) => (r = {
          attributes: {
            NAME: e.id,
            BANDWIDTH: e.bandwidth,
            CODECS: e.codecs,
            "PROGRAM-ID": 1
          },
          uri: "",
          endList: "static" === e.type,
          timeline: e.periodStart,
          resolvedUri: e.baseUrl || "",
          targetDuration: e.duration,
          discontinuitySequence: r,
          discontinuityStarts: n,
          timelineStarts: e.timelineStarts,
          mediaSequence: s,
          segments: t
        }, e.contentProtection && (r.contentProtection = e.contentProtection), e.serviceLocation && (r.attributes.serviceLocation = e.serviceLocation), i && (r.sidx = i), a && (r.attributes.AUDIO = "audio", r.attributes.SUBTITLES = "subs"), r))(r, i), t);
        e[o].playlists.push(a);
        void 0 === s && "main" === n && ((s = r).$$default = !0);
        return e;
      }, {});
      s || (e[Object.keys(e)[0]].$$default = !0);
      return e;
    })(o, s, d) : null, i = l.length ? n2(l, s) : null, c = (u = a.concat(n6(t), n6(i))).map(({
      timelineStarts: e
    }) => e), h.timelineStarts = nK(c), p = h.timelineStarts, u.forEach(e => {
      e.mediaSequence = 0;
      e.discontinuitySequence = p.findIndex(function ({
        timeline: t
      }) {
        return t === e.timeline;
      });
      e.segments && e.segments.forEach((e, t) => {
        e.number = t;
      });
    }), t && (h.mediaGroups.AUDIO.audio = t), i && (h.mediaGroups.SUBTITLES.subs = i), e.length && (h.mediaGroups["CLOSED-CAPTIONS"].cc = e.reduce((e, t) => (t && t.forEach(t => {
      var {
        channel,
        language
      } = t;
      e[language] = {
        autoselect: !1,
        default: !1,
        instreamId: channel,
        language
      };
      t.hasOwnProperty("aspectRatio") && (e[language].aspectRatio = t.aspectRatio);
      t.hasOwnProperty("easyReader") && (e[language].easyReader = t.easyReader);
      t.hasOwnProperty("3D") && (e[language]["3D"] = t["3D"]);
    }), e), {})), r ? nJ({
      oldManifest: r,
      newManifest: h
    }) : h) : {};
  };
  let n9 = (e, t) => {
    var {
      type,
      minimumUpdatePeriod = 0,
      media = "",
      sourceDuration,
      timescale = 1,
      startNumber = 1,
      periodStart
    } = e;
    var h = [];
    let d = -1;
    for (let g = 0; g < t.length; g++) {
      let f;
      var u = t[g];
      var c = u.d;
      var p = u.r || 0;
      var u = u.t || 0;
      d < 0 && (d = u);
      u && u > d && (d = u);
      f = p < 0 ? (u = g + 1) === t.length ? "dynamic" === type && 0 < minimumUpdatePeriod && 0 < media.indexOf("$Number$") ? ((e, t, i) => {
        var {
          NOW,
          clientOffset,
          availabilityStartTime,
          timescale = 1,
          periodStart = 0,
          minimumUpdatePeriod = 0
        } = NOW;
        return Math.ceil((((NOW + clientOffset) / 1e3 + minimumUpdatePeriod - (availabilityStartTime + periodStart)) * timescale - t) / i);
      })(e, d, c) : (sourceDuration * timescale - d) / c : (t[u].t - d) / c : p + 1;
      var m = startNumber + h.length + f;
      let y = startNumber + h.length;
      for (; y < m;) {
        h.push({
          number: y,
          duration: c / timescale,
          time: d,
          timeline: periodStart
        });
        d += c;
        y++;
      }
    }
    return h;
  };
  let ae = /\$([A-z]*)(?:(%0)([0-9]+)d)?\$/g;
  let at = (e, t) => e.replace(ae, (e, i, s, r) => "$$" === e ? "$" : void 0 === t[i] ? e : (e = "" + t[i], "RepresentationID" === i || (r = s ? parseInt(r, 10) : 1) <= e.length ? e : Array(r - e.length + 1).join("0") + e));
  let ai = (e, t) => {
    let i = {
      RepresentationID: e.id,
      Bandwidth: e.bandwidth || 0
    };
    var {
      initialization = {
        sourceURL: "",
        range: ""
      }
    } = e;
    let r = nH({
      baseUrl: e.baseUrl,
      source: at(initialization.sourceURL, i),
      range: initialization.range
    });
    s = t;
    return ((t = e).duration || initialization ? t.duration ? nz(t) : n9(t, initialization) : [{
      number: t.startNumber || 1,
      duration: t.sourceDuration,
      time: 0,
      timeline: t.periodStart
    }]).map(t => {
      i.Number = t.number;
      i.Time = t.time;
      var s = at(e.media || "", i);
      var n = e.timescale || 1;
      var a = e.presentationTimeOffset || 0;
      var a = e.periodStart + (t.time - a) / n;
      return {
        uri: s,
        timeline: t.timeline,
        duration: t.duration,
        resolvedUri: s9(e.baseUrl || "", s),
        map: r,
        number: t.number,
        presentationTime: a
      };
    });
  };
  let as = (e, t) => {
    let i;
    let {
      duration,
      segmentUrls = [],
      periodStart
    } = e;
    if (!duration && !t || duration && t) throw Error(nj.SEGMENT_TIME_UNSPECIFIED);
    let a = segmentUrls.map(t => {
      var {
        baseUrl,
        initialization = {}
      } = i = e;
      var s = nH({
        baseUrl,
        source: initialization.sourceURL,
        range: initialization.range
      });
      (i = nH({
        baseUrl,
        source: t.media,
        range: t.mediaRange
      })).map = initialization;
      return baseUrl;
    });
    duration && (i = nz(e));
    return (i = t ? n9(e, t) : i).map((t, i) => {
      var s;
      var r;
      if (a[i]) {
        i = a[i];
        s = e.timescale || 1;
        r = e.presentationTimeOffset || 0;
        i.timeline = t.timeline;
        i.duration = t.duration;
        i.number = t.number;
        i.presentationTime = periodStart + (t.time - r) / s;
        return i;
      }
    }).filter(e => e);
  };
  let ar = ({
    attributes: e,
    segmentInfo: t
  }) => {
    let i;
    let s;
    t.template ? (s = ai, i = nU(e, t.template)) : t.base ? (s = nW, i = nU(e, t.base)) : t.list && (s = as, i = nU(e, t.list));
    var r;
    var n;
    var a;
    var e = {
      attributes: e
    };
    s && (r = s(i, t.segmentTimeline), i.duration ? ({
      duration: n,
      timescale: a = 1
    } = i, i.duration = n / a) : r.length ? i.duration = r.reduce((e, t) => Math.max(e, Math.ceil(t.duration)), 0) : i.duration = 0, e.attributes = i, e.segments = r, t.base) && i.indexRange && (e.sidx = r[0], e.segments = []);
    return e;
  };
  let an = e => e.map(ar);
  let aa = (e, t) => nq(e.childNodes).filter(({
    tagName: e
  }) => e === t);
  let ao = e => e.textContent.trim();
  let al = e => {
    var t;
    var i;
    var s;
    var r;
    var n;
    var e = /P(?:(\d*)Y)?(?:(\d*)M)?(?:(\d*)D)?(?:T(?:(\d*)H)?(?:(\d*)M)?(?:([\d.]*)S)?)?/.exec(e);
    return e ? ([e, t, i, s, r, n] = e.slice(1), 31536e3 * parseFloat(e || 0) + 2592e3 * parseFloat(t || 0) + 86400 * parseFloat(i || 0) + 3600 * parseFloat(s || 0) + 60 * parseFloat(r || 0) + parseFloat(n || 0)) : 0;
  };
  let ah = {
    mediaPresentationDuration: e => al(e),
    availabilityStartTime: e => (/^\d+-\d+-\d+T\d+:\d+:\d+(\.\d+)?$/.test(e) && (e += "Z"), Date.parse(e) / 1e3),
    minimumUpdatePeriod: e => al(e),
    suggestedPresentationDelay: e => al(e),
    type: e => e,
    timeShiftBufferDepth: e => al(e),
    start: e => al(e),
    width: e => parseInt(e, 10),
    height: e => parseInt(e, 10),
    bandwidth: e => parseInt(e, 10),
    frameRate: e => parseFloat(e.split("/").reduce((e, t) => e / t)),
    startNumber: e => parseInt(e, 10),
    timescale: e => parseInt(e, 10),
    presentationTimeOffset: e => parseInt(e, 10),
    duration(e) {
      var t = parseInt(e, 10);
      return isNaN(t) ? al(e) : t;
    },
    d: e => parseInt(e, 10),
    t: e => parseInt(e, 10),
    r: e => parseInt(e, 10),
    presentationTime: e => parseInt(e, 10),
    DEFAULT: e => e
  };
  let ad = e => e && e.attributes ? nq(e.attributes).reduce((e, t) => {
    var i = ah[t.name] || ah.DEFAULT;
    e[t.name] = i(t.value);
    return e;
  }, {}) : {};
  let au = {
    "urn:uuid:1077efec-c0b2-4d02-ace3-3c1e52e2fb4b": "org.w3.clearkey",
    "urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed": "com.widevine.alpha",
    "urn:uuid:9a04f079-9840-4286-ab92-e65be0885f95": "com.microsoft.playready",
    "urn:uuid:f239e769-efa3-4850-9c16-a903c6932efb": "com.adobe.primetime",
    "urn:mpeg:dash:mp4protection:2011": "mp4protection"
  };
  let ac = (e, t) => t.length ? nF(e.map(function (e) {
    return t.map(function (t) {
      var i = ao(t);
      var s = s9(e.baseUrl, i);
      var t = nU(ad(t), {
        baseUrl: s
      });
      s !== i && !t.serviceLocation && e.serviceLocation && (t.serviceLocation = e.serviceLocation);
      return t;
    });
  })) : e;
  let ap = e => {
    var t = aa(e, "SegmentTemplate")[0];
    var i = aa(e, "SegmentList")[0];
    var s = i && aa(i, "SegmentURL").map(e => nU({
      tag: "SegmentURL"
    }, ad(e)));
    var e = aa(e, "SegmentBase")[0];
    var r = i || t;
    var r = r && aa(r, "SegmentTimeline")[0];
    var n = i || e || t;
    var n = n && aa(n, "Initialization")[0];
    var t = t && ad(t);
    t && n ? t.initialization = n && ad(n) : t && t.initialization && (t.initialization = {
      sourceURL: t.initialization
    });
    let a = {
      template: t,
      segmentTimeline: r && aa(r, "S").map(e => ad(e)),
      list: i && nU(ad(i), {
        segmentUrls: s,
        initialization: ad(n)
      }),
      base: e && nU(ad(e), {
        initialization: ad(n)
      })
    };
    Object.keys(a).forEach(e => {
      a[e] || delete a[e];
    });
    return a;
  };
  let am = e => nF(aa(e.node, "EventStream").map(t => {
    let i = ad(t);
    let s = i.schemeIdUri;
    return aa(t, "Event").map(t => {
      var r = ad(t);
      var n = r.presentationTime || 0;
      var a = i.timescale || 1;
      var o = r.duration || 0;
      var n = n / a + e.attributes.start;
      return {
        schemeIdUri: s,
        value: i.value,
        id: r.id,
        start: n,
        end: n + o / a,
        messageData: ao(t) || r.messageData,
        contentEncoding: i.contentEncoding,
        presentationTimeOffset: i.presentationTimeOffset || 0
      };
    });
  }));
  let ag = (e, t, i) => s => {
    var r = ad(s);
    var n = ac(t, aa(s, "BaseURL"));
    var a = aa(s, "Role")[0];
    var a = {
      role: ad(a)
    };
    let o = nU(e, r, a);
    var l;
    var h;
    var r = aa(s, "Accessibility")[0];
    var r = "urn:scte:dash:cc:cea-608:2015" === (a = ad(r)).schemeIdUri ? ("string" != typeof a.value ? [] : a.value.split(";")).map(e => {
      let t;
      let i;
      i = e;
      /^CC\d=/.test(e) ? [t, i] = e.split("=") : /^CC\d$/.test(e) && (t = e);
      return {
        channel: t,
        language: i
      };
    }) : "urn:scte:dash:cc:cea-708:2015" === a.schemeIdUri ? ("string" != typeof a.value ? [] : a.value.split(";")).map(e => {
      var t;
      var i;
      let s = {
        channel: void 0,
        language: void 0,
        aspectRatio: 1,
        easyReader: 0,
        "3D": 0
      };
      /=/.test(e) ? ([t, i = ""] = e.split("="), s.channel = t, s.language = e, i.split(",").forEach(e => {
        var [e, t] = e.split(":");
        "lang" === e ? s.language = t : "er" === e ? s.easyReader = Number(t) : "war" === e ? s.aspectRatio = Number(t) : "3D" === e && (s["3D"] = Number(t));
      })) : s.language = e;
      s.channel && (s.channel = "SERVICE" + s.channel);
      return s;
    }) : void 0;
    r && (o = nU(o, {
      captionServices: r
    }));
    var a = aa(s, "Label")[0];
    a && a.childNodes.length && (o = nU(o, {
      label: r = a.childNodes[0].nodeValue.trim()
    }));
    var a = aa(s, "ContentProtection").reduce((e, t) => {
      var i = ad(t);
      i.schemeIdUri && (i.schemeIdUri = i.schemeIdUri.toLowerCase());
      var s = au[i.schemeIdUri];
      s && (e[s] = {
        attributes: i
      }, i = aa(t, "cenc:pssh")[0]) && (t = ao(i), e[s].pssh = t && function (e) {
        for (t = window.atob ? window.atob(e) : Buffer.from(e, "base64").toString("binary"), i = new Uint8Array(t.length), s = 0, void 0; s < t.length; s++) {
          var t;
          var i;
          var s;
          i[s] = t.charCodeAt(s);
        }
        return i;
      }(t));
      return e;
    }, {});
    Object.keys(a).length && (o = nU(o, {
      contentProtection: a
    }));
    var r = ap(s);
    var a = aa(s, "Representation");
    var s = nU(i, r);
    return nF(a.map((l = o, h = s, e => {
      var t = aa(e, "BaseURL");
      var t = ac(n, t);
      let i = nU(l, ad(e));
      let s = ap(e);
      return t.map(e => ({
        segmentInfo: nU(h, s),
        attributes: nU(i, e)
      }));
    })));
  };
  let af = (e, t = {}) => {
    var {
      manifestUri = "",
      NOW = Date.now(),
      clientOffset = 0,
      eventHandler = function () { }
    } = t;
    var n = aa(e, "Period");
    if (!n.length) throw Error(nj.INVALID_NUMBER_OF_PERIOD);
    var a = aa(e, "Location");
    let o = ad(e);
    var l;
    var t = ac([{
      baseUrl: manifestUri
    }], aa(e, "BaseURL"));
    var e = aa(e, "ContentSteering");
    o.type = o.type || "static";
    o.sourceDuration = o.mediaPresentationDuration || 0;
    o.NOW = NOW;
    o.clientOffset = clientOffset;
    a.length && (o.locations = a.map(ao));
    let h = [];
    n.forEach((e, t) => {
      var i;
      var s;
      var r = ad(e);
      var t = h[t - 1];
      r.start = ({
        attributes: t,
        priorPeriodAttributes: i,
        mpdType: s
      } = {
        attributes: r,
        priorPeriodAttributes: t ? t.attributes : null,
        mpdType: o.type
      }, "number" == typeof t.start ? t.start : i && "number" == typeof i.start && "number" == typeof i.duration ? i.start + i.duration : i || "static" !== s ? null : 0);
      h.push({
        node: e,
        attributes: r
      });
    });
    return {
      locations: o.locations,
      contentSteeringInfo: (i = eventHandler, 1 < (s = e).length && NOW({
        type: "warn",
        message: "The MPD manifest should contain no more than one ContentSteering tag"
      }), clientOffset.length ? ((i = nU({
        serverURL: ao(clientOffset[0])
      }, ad(clientOffset[0]))).queryBeforeStart = "true" === NOW.queryBeforeStart, NOW) : null),
      representationInfo: nF(h.map((l = manifestUri, (e, t) => {
        var i = ac(l, aa(e.node, "BaseURL"));
        var s = nU(o, {
          periodStart: e.attributes.start
        });
        "number" == typeof e.attributes.duration && (s.periodDuration = e.attributes.duration);
        var r = aa(e.node, "AdaptationSet");
        var e = ap(e.node);
        return nF(r.map(ag(s, i, e)));
      }))),
      eventStream: nF(h.map(am))
    };
  };
  let ay = e => {
    let t;
    if ("" === e) throw Error(nj.DASH_EMPTY_MANIFEST);
    var i;
    var s = new nL();
    try {
      t = (i = s.parseFromString(e, "application/xml")) && "MPD" === i.documentElement.tagName ? i.documentElement : null;
    } catch (e) { }
    if (!t || t && 0 < t.getElementsByTagName("parsererror").length) throw Error(nj.DASH_INVALID_XML);
    return t;
  };
  let a_ = e => {
    if (!(e = aa(e = ay(e), "UTCTiming")[0])) return null;
    var t = ad(e);
    switch (t.schemeIdUri) {
      case "urn:mpeg:dash:utc:http-head:2014":
      case "urn:mpeg:dash:utc:http-head:2012":
        t.method = "HEAD";
        break;
      case "urn:mpeg:dash:utc:http-xsdate:2014":
      case "urn:mpeg:dash:utc:http-iso:2014":
      case "urn:mpeg:dash:utc:http-xsdate:2012":
      case "urn:mpeg:dash:utc:http-iso:2012":
        t.method = "GET";
        break;
      case "urn:mpeg:dash:utc:direct:2014":
      case "urn:mpeg:dash:utc:direct:2012":
        t.method = "DIRECT";
        t.value = Date.parse(t.value);
        break;
      default:
        throw Error(nj.UNSUPPORTED_UTC_TIMING_SCHEME);
    }
    return t;
  };
  function av(e, t) {
    var i;
    var s;
    var r;
    void 0 === t && (t = 0);
    return (e = rE(e)).length - t < 10 || !rI(e, ak, {
      offset: t
    }) ? t : (t += (void 0 === (s = t) && (s = 0), r = (i = rE(i = e))[s + 5], i = i[s + 6] << 21 | i[s + 7] << 14 | i[s + 8] << 7 | i[s + 9], (16 & r) >> 4 ? 20 + i : 10 + i), av(e, t));
  }
  function ab(e) {
    return "string" == typeof e ? rp(e) : e;
  }
  function aT(e, t) {
    t = Array.isArray(i = t) ? i.map(function (e) {
      return aL(e);
    }) : [aL(i)];
    e = rE(e);
    var i;
    var s = [];
    if (t.length) for (var r = 0; r < e.length;) {
      var n = aD(e, r, !1);
      var a = aD(e, r + n.length);
      var o = r + n.length + a.length;
      127 === a.value && (a.value = function e(t, i, s) {
        var r;
        return s >= i.length ? i.length : (r = aD(i, s, !1), rI(t.bytes, r.bytes) ? s : e(t, i, s + (t = aD(i, s + r.length)).length + t.value + r.length));
      }(n, e, o), a.value !== e.length) && (a.value -= o);
      var l = o + a.value > e.length ? e.length : o + a.value;
      var o = e.subarray(o, l);
      rI(t[0], n.bytes) && (1 === t.length ? s.push(o) : s = s.concat(aT(o, t.slice(1))));
      r += n.length + a.length + o.length;
    }
    return s;
  }
  function aS(e, t, i, s) {
    void 0 === s && (s = 1 / 0);
    e = rE(e);
    i = [].concat(i);
    for (n = 0, a = 0, void 0; n < e.length && (a < s || r);) {
      var r;
      var n;
      var a;
      var o = void 0;
      if (rI(e.subarray(n), aP) ? o = 4 : rI(e.subarray(n), aO) && (o = 3), o) {
        if (a++, r) return aR(e.subarray(r, n));
        var l = void 0;
        "h264" === t ? l = 31 & e[n + o] : "h265" === t && (l = e[n + o] >> 1 & 63);
        -1 !== i.indexOf(l) && (r = n + o);
        n += o + ("h264" === t ? 1 : 2);
      } else n++;
    }
    return e.subarray(0, 0);
  }
  function aw(e) {
    e = rE(e);
    for (var t = 0; t < aB.length; t++) {
      var i = aB[t];
      if (aF[i](e)) return i;
    }
    return "";
  }
  var aE = function (e) {
    var t;
    var e = new DataView(e.buffer, e.byteOffset, e.byteLength);
    return e.getBigUint64 ? (t = e.getBigUint64(0)) < Number.MAX_SAFE_INTEGER ? Number(t) : t : 0x100000000 * e.getUint32(0) + e.getUint32(4);
  };
  var aC = function (e) {
    var t = new DataView(e.buffer, e.byteOffset, e.byteLength);
    var i = {
      version: e[0],
      flags: new Uint8Array(e.subarray(1, 4)),
      references: [],
      referenceId: t.getUint32(4),
      timescale: t.getUint32(8)
    };
    var s = 12;
    0 === i.version ? (i.earliestPresentationTime = t.getUint32(s), i.firstOffset = t.getUint32(s + 4), s += 8) : (i.earliestPresentationTime = aE(e.subarray(s)), i.firstOffset = aE(e.subarray(s + 8)), s += 16);
    var r = t.getUint16(s += 2);
    for (s += 2; 0 < r; s += 12, r--) i.references.push({
      referenceType: (128 & e[s]) >>> 7,
      referencedSize: 0x7fffffff & t.getUint32(s),
      subsegmentDuration: t.getUint32(s + 4),
      startsWithSap: !!(128 & e[s + 8]),
      sapType: (112 & e[s + 8]) >>> 4,
      sapDeltaTime: 0xfffffff & t.getUint32(s + 8)
    });
    return i;
  };
  var ak = rE([73, 68, 51]);
  var ax = {
    EBML: rE([26, 69, 223, 163]),
    DocType: rE([66, 130]),
    Segment: rE([24, 83, 128, 103]),
    SegmentInfo: rE([21, 73, 169, 102]),
    Tracks: rE([22, 84, 174, 107]),
    Track: rE([174]),
    TrackNumber: rE([215]),
    DefaultDuration: rE([35, 227, 131]),
    TrackEntry: rE([174]),
    TrackType: rE([131]),
    FlagDefault: rE([136]),
    CodecID: rE([134]),
    CodecPrivate: rE([99, 162]),
    VideoTrack: rE([224]),
    AudioTrack: rE([225]),
    Cluster: rE([31, 67, 182, 117]),
    Timestamp: rE([231]),
    TimestampScale: rE([42, 215, 177]),
    BlockGroup: rE([160]),
    BlockDuration: rE([155]),
    Block: rE([161]),
    SimpleBlock: rE([163])
  };
  var aI = [128, 64, 32, 16, 8, 4, 2, 1];
  var aA = function (e) {
    for (t = 1, i = 0, void 0; i < aI.length && !(e & aI[i]); i++) {
      var t;
      var i;
      t++;
    }
    return t;
  };
  var aD = function (e, t, i, s) {
    void 0 === i && (i = !0);
    void 0 === s && (s = !1);
    var r = aA(e[t]);
    var n = e.subarray(t, t + r);
    i && ((n = Array.prototype.slice.call(e, t, t + r))[0] ^= aI[r - 1]);
    return {
      length: r,
      value: rx(n, {
        signed: s
      }),
      bytes: n
    };
  };
  var aL = function e(t) {
    return "string" == typeof t ? t.match(/.{1,2}/g).map(e) : "number" == typeof t ? function (e, t) {
      for (i = void 0 !== (t = (void 0 === t ? {} : t).le) && t, s = Math.ceil((t = e = rC(e = "bigint" != typeof e && "number" != typeof e || "number" == typeof e && e != e ? 0 : e)).toString(2).length / 8), r = new Uint8Array(new ArrayBuffer(s)), n = 0, void 0; n < s; n++) {
        var i;
        var s;
        var r;
        var n;
        var a = i ? n : Math.abs(n + 1 - r.length);
        r[a] = Number(e / rk[n] & rC(255));
        e < 0 && (r[a] = Math.abs(~r[a]), r[a] -= 0 === n ? 1 : 2);
      }
      return r;
    }(t) : t;
  };
  var aP = rE([0, 0, 0, 1]);
  var aO = rE([0, 0, 1]);
  var aN = rE([0, 0, 3]);
  var aR = function (e) {
    for (t = [], i = 1, void 0; i < e.length - 2;) {
      var t;
      var i;
      rI(e.subarray(i, i + 3), aN) && (t.push(i + 2), i++);
      i++;
    }
    if (0 === t.length) return e;
    for (s = e.length - t.length, r = new Uint8Array(s), n = 0, i = 0, void 0; i < s; n++, i++) {
      var s;
      var r;
      var n;
      var i;
      n === t[0] && (n++, t.shift());
      r[i] = e[n];
    }
    return r;
  };
  var aM = {
    webm: rE([119, 101, 98, 109]),
    matroska: rE([109, 97, 116, 114, 111, 115, 107, 97]),
    flac: rE([102, 76, 97, 67]),
    ogg: rE([79, 103, 103, 83]),
    ac3: rE([11, 119]),
    riff: rE([82, 73, 70, 70]),
    avi: rE([65, 86, 73]),
    wav: rE([87, 65, 86, 69]),
    "3gp": rE([102, 116, 121, 112, 51, 103]),
    mp4: rE([102, 116, 121, 112]),
    fmp4: rE([115, 116, 121, 112]),
    mov: rE([102, 116, 121, 112, 113, 116]),
    moov: rE([109, 111, 111, 118]),
    moof: rE([109, 111, 111, 102])
  };
  var aU = {
    aac: function (e) {
      var t = av(e);
      return rI(e, [255, 16], {
        offset: t,
        mask: [255, 22]
      });
    },
    mp3: function (e) {
      var t = av(e);
      return rI(e, [255, 2], {
        offset: t,
        mask: [255, 6]
      });
    },
    webm: function (e) {
      return rI(e = aT(e, [ax.EBML, ax.DocType])[0], aM.webm);
    },
    mkv: function (e) {
      return rI(e = aT(e, [ax.EBML, ax.DocType])[0], aM.matroska);
    },
    mp4: function (e) {
      return !aU["3gp"](e) && !aU.mov(e) && (!!(rI(e, aM.mp4, {
        offset: 4
      }) || rI(e, aM.fmp4, {
        offset: 4
      }) || rI(e, aM.moof, {
        offset: 4
      }) || rI(e, aM.moov, {
        offset: 4
      })) || void 0);
    },
    mov: function (e) {
      return rI(e, aM.mov, {
        offset: 4
      });
    },
    "3gp": function (e) {
      return rI(e, aM["3gp"], {
        offset: 4
      });
    },
    ac3: function (e) {
      var t = av(e);
      return rI(e, aM.ac3, {
        offset: t
      });
    },
    ts: function (e) {
      if (e.length < 189 && 1 <= e.length) return 71 === e[0];
      for (var t = 0; t + 188 < e.length && t < 188;) {
        if (71 === e[t] && 71 === e[t + 188]) return !0;
        t += 1;
      }
      return !1;
    },
    flac: function (e) {
      var t = av(e);
      return rI(e, aM.flac, {
        offset: t
      });
    },
    ogg: function (e) {
      return rI(e, aM.ogg);
    },
    avi: function (e) {
      return rI(e, aM.riff) && rI(e, aM.avi, {
        offset: 8
      });
    },
    wav: function (e) {
      return rI(e, aM.riff) && rI(e, aM.wav, {
        offset: 8
      });
    },
    h264: function (e) {
      return aS(e, "h264", 7, 3).length;
    },
    h265: function (e) {
      return aS(e, "h265", [32, 33], 3).length;
    }
  };
  var aB = Object.keys(aU).filter(function (e) {
    return "ts" !== e && "h264" !== e && "h265" !== e;
  }).concat(["ts", "h264", "h265"]);
  aB.forEach(function (e) {
    var t = aU[e];
    aU[e] = function (e) {
      return t(rE(e));
    };
  });
  var aF = aU;
  /*! @name @videojs/http-streaming @version 3.10.0 @license Apache-2.0 */
  let aq = (e, t) => t && t.responseURL && e !== t.responseURL ? t.responseURL : e;
  let aj = e => s7.log.debug ? s7.log.debug.bind(s7, "VHS:", e + " >") : function () { };
  function aH(...e) {
    var t = s7.obj || s7;
    return (t.merge || t.mergeOptions).apply(t, e);
  }
  function aV(...e) {
    var t = s7.time || s7;
    return (t.createTimeRanges || t.createTimeRanges).apply(t, e);
  }
  function a$(e, t) {
    return aJ(e, function (e, i) {
      return e - aQ <= t && i + aQ >= t;
    });
  }
  function az(e, t) {
    return aJ(e, function (e) {
      return e - aY >= t;
    });
  }
  function aW(e) {
    if (e && e.length && e.end) return e.end(e.length - 1);
  }
  function aG(e, t) {
    let i = 0;
    if (e && e.length) for (let n = 0; n < e.length; n++) {
      var s = e.start(n);
      var r = e.end(n);
      r < t || (i += s < t && t <= r ? r - t : r - s);
    }
    return i;
  }
  function aX({
    defaultDuration: e,
    durationList: t,
    startIndex: i,
    endIndex: s
  }) {
    let r = 0;
    if (s < i && ([i, s] = [s, i]), i < 0) {
      for (let t = i; t < Math.min(0, s); t++) r += e;
      i = 0;
    }
    for (let e = i; e < s; e++) r += t[e].duration;
    return r;
  }
  function aK(e, t, i, s) {
    if (!e || !e.segments) return null;
    if (e.endList) return a9(e);
    if (null === t) return null;
    t = t || 0;
    let r = a7(e, e.mediaSequence + e.segments.length, t);
    i && (r -= s = "number" == typeof s ? s : a5(null, e));
    return Math.max(0, r);
  }
  let aY = 1 / 30;
  let aQ = 1 / 30 * 3;
  let aJ = function (e, t) {
    let i;
    var s = [];
    if (e && e.length) for (i = 0; i < e.length; i++) t(e.start(i), e.end(i)) && s.push([e.start(i), e.end(i)]);
    return aV(s);
  };
  let aZ = e => {
    var t = [];
    if (!e || !e.length) return "";
    for (let i = 0; i < e.length; i++) t.push(e.start(i) + " => " + e.end(i));
    return t.join(", ");
  };
  let a0 = e => {
    var t = [];
    for (let i = 0; i < e.length; i++) t.push({
      start: e.start(i),
      end: e.end(i)
    });
    return t;
  };
  let a1 = (e, t) => {
    if (!t.preload) return t.duration;
    let i = 0;
    (t.parts || []).forEach(function (e) {
      i += e.duration;
    });
    (t.preloadHints || []).forEach(function (t) {
      "PART" === t.type && (i += e.partTargetDuration);
    });
    return i;
  };
  let a2 = e => (e.segments || []).reduce((e, t, i) => (t.parts ? t.parts.forEach(function (s, r) {
    e.push({
      duration: s.duration,
      segmentIndex: i,
      partIndex: r,
      part: s,
      segment: t
    });
  }) : e.push({
    duration: t.duration,
    segmentIndex: i,
    partIndex: null,
    segment: t,
    part: null
  }), e), []);
  let a4 = e => (e = e.segments && e.segments.length && e.segments[e.segments.length - 1]) && e.parts || [];
  let a8 = ({
    preloadSegment: e
  }) => {
    var t;
    if (e) {
      ({
        parts: e,
        preloadHints: t
      } = e);
      return (t || []).reduce((e, t) => e + ("PART" === t.type ? 1 : 0), 0) + (e && e.length ? e.length : 0);
    }
  };
  let a5 = (e, t) => t.endList ? 0 : e && e.suggestedPresentationDelay ? e.suggestedPresentationDelay : (e = 0 < a4(t).length) && t.serverControl && t.serverControl.partHoldBack ? t.serverControl.partHoldBack : e && t.partTargetDuration ? 3 * t.partTargetDuration : t.serverControl && t.serverControl.holdBack ? t.serverControl.holdBack : t.targetDuration ? 3 * t.targetDuration : 0;
  let a3 = function (e, t) {
    let i = 0;
    let s = t - e.mediaSequence;
    let r = e.segments[s];
    if (r) {
      if (void 0 !== r.start) return {
        result: r.start,
        precise: !0
      };
      if (void 0 !== r.end) return {
        result: r.end - r.duration,
        precise: !0
      };
    }
    for (; s--;) {
      if (void 0 !== (r = e.segments[s]).end) return {
        result: i + r.end,
        precise: !0
      };
      if (i += a1(e, r), void 0 !== r.start) return {
        result: i + r.start,
        precise: !0
      };
    }
    return {
      result: i,
      precise: !1
    };
  };
  let a6 = function (e, t) {
    var i;
    let s = 0;
    let r = t - e.mediaSequence;
    for (; r < e.segments.length; r++) {
      if (void 0 !== (i = e.segments[r]).start) return {
        result: i.start - s,
        precise: !0
      };
      if (s += a1(e, i), void 0 !== i.end) return {
        result: i.end - s,
        precise: !0
      };
    }
    return {
      result: -1,
      precise: !1
    };
  };
  let a7 = function (e, t, i) {
    var s;
    return (t = void 0 === t ? e.mediaSequence + e.segments.length : t) < e.mediaSequence ? 0 : (s = a3(e, t)).precise ? s.result : (e = a6(e, t)).precise ? e.result : s.result + i;
  };
  let a9 = function (e, t, i) {
    if (!e) return 0;
    if ("number" != typeof i && (i = 0), void 0 === t) {
      if (e.totalDuration) return e.totalDuration;
      if (!e.endList) return window.Infinity;
    }
    return a7(e, t, i);
  };
  function oe(e) {
    return e.excludeUntil && e.excludeUntil > Date.now();
  }
  function ot(e) {
    return e.excludeUntil && e.excludeUntil === 1 / 0;
  }
  function oi(e) {
    var t = oe(e);
    return !e.disabled && !t;
  }
  function os(e, t) {
    return t.attributes && t.attributes[e];
  }
  function or(e, t) {
    var i = e && e.mediaGroups && e.mediaGroups.AUDIO || {};
    let s = !1;
    for (let e in i) {
      for (let r in i[e]) if (s = t(i[e][r])) break;
      if (s) break;
    }
    return !!s;
  }
  let on = (e, t) => {
    if (1 === e.playlists.length) return !0;
    let i = t.attributes.BANDWIDTH || Number.MAX_VALUE;
    return 0 === e.playlists.filter(e => !!oi(e) && (e.attributes.BANDWIDTH || 0) < i).length;
  };
  let oa = (e, t) => !(!e && !t || !e && t || e && !t || e !== t && (!e.id || !t.id || e.id !== t.id) && (!e.resolvedUri || !t.resolvedUri || e.resolvedUri !== t.resolvedUri) && (!e.uri || !t.uri || e.uri !== t.uri));
  let oo = e => {
    if (!e || !e.playlists || !e.playlists.length) return or(e, e => e.playlists && e.playlists.length || e.uri);
    for (let i = 0; i < e.playlists.length; i++) {
      let s = e.playlists[i];
      var t = s.attributes && s.attributes.CODECS;
      if ((!t || !t.split(",").every(e => rh(e))) && !(t = or(e, e => oa(s, e)))) return !1;
    }
    return !0;
  };
  var ol = {
    liveEdgeDelay: a5,
    duration: a9,
    seekable: function (e, t, i) {
      var s = t || 0;
      let r = aK(e, t, !0, i);
      return null === r ? aV() : aV(s, r = r < s ? s : r);
    },
    getMediaInfoForTime: function ({
      playlist: e,
      currentTime: t,
      startingSegmentIndex: i,
      startingPartIndex: s,
      startTime: r,
      exactManifestTimings: n
    }) {
      let a = t - r;
      var o = a2(e);
      let l = 0;
      for (let e = 0; e < o.length; e++) {
        var h = o[e];
        if (i === h.segmentIndex && ("number" != typeof s || "number" != typeof h.partIndex || s === h.partIndex)) {
          l = e;
          break;
        }
      }
      if (a < 0) {
        if (0 < l) for (let t = l - 1; 0 <= t; t--) {
          var d = o[t];
          if (a += d.duration, n) {
            if (a < 0) continue;
          } else if (a + aY <= 0) continue;
          return {
            partIndex: d.partIndex,
            segmentIndex: d.segmentIndex,
            startTime: r - aX({
              defaultDuration: e.targetDuration,
              durationList: o,
              startIndex: l,
              endIndex: t
            })
          };
        }
        return {
          partIndex: o[0] && o[0].partIndex || null,
          segmentIndex: o[0] && o[0].segmentIndex || 0,
          startTime: t
        };
      }
      if (l < 0) {
        for (let i = l; i < 0; i++) if ((a -= e.targetDuration) < 0) return {
          partIndex: o[0] && o[0].partIndex || null,
          segmentIndex: o[0] && o[0].segmentIndex || 0,
          startTime: t
        };
        l = 0;
      }
      for (let t = l; t < o.length; t++) {
        var u = o[t];
        a -= u.duration;
        var c = u.duration > aY;
        var p = 0 === a;
        var c = c && 0 <= a + aY;
        if (!p && !c || t === o.length - 1) {
          if (n) {
            if (0 < a) continue;
          } else if (0 <= a - aY) continue;
          return {
            partIndex: u.partIndex,
            segmentIndex: u.segmentIndex,
            startTime: r + aX({
              defaultDuration: e.targetDuration,
              durationList: o,
              startIndex: l,
              endIndex: t
            })
          };
        }
      }
      return {
        segmentIndex: o[o.length - 1].segmentIndex,
        partIndex: o[o.length - 1].partIndex,
        startTime: t
      };
    },
    isEnabled: oi,
    isDisabled: function (e) {
      return e.disabled;
    },
    isExcluded: oe,
    isIncompatible: ot,
    playlistEnd: aK,
    isAes: function (e) {
      for (let t = 0; t < e.segments.length; t++) if (e.segments[t].key) return !0;
      return !1;
    },
    hasAttribute: os,
    estimateSegmentRequestTime: function (e, t, i, s = 0) {
      return os("BANDWIDTH", i) ? (e * i.attributes.BANDWIDTH - 8 * s) / t : NaN;
    },
    isLowestEnabledRendition: on,
    isAudioOnly: oo,
    playlistMatch: oa,
    segmentDurationWithParts: a1
  };
  let oh = s7.log;
  let od = (e, t) => e + "-" + t;
  let ou = (e, t, i) => `placeholder-uri-${e}-${t}-` + i;
  let oc = (e, t) => {
    e.mediaGroups && ["AUDIO", "SUBTITLES"].forEach(i => {
      if (e.mediaGroups[i]) for (let s in e.mediaGroups[i]) for (let r in e.mediaGroups[i][s]) t(e.mediaGroups[i][s][r], i, s, r);
    });
  };
  let op = ({
    playlist: e,
    uri: t,
    id: i
  }) => {
    e.id = i;
    e.playlistErrors_ = 0;
    t && (e.uri = t);
    e.attributes = e.attributes || {};
  };
  let om = (e, t, i = ou) => {
    e.uri = t;
    for (let t = 0; t < e.playlists.length; t++) e.playlists[t].uri || (r = "placeholder-uri-" + t, e.playlists[t].uri = r);
    let s = oo(e);
    oc(e, (t, r, n, a) => {
      if (!t.playlists || !t.playlists.length) {
        if (s && "AUDIO" === r && !t.uri) for (let t = 0; t < e.playlists.length; t++) {
          var o = e.playlists[t];
          if (o.attributes && o.attributes.AUDIO && o.attributes.AUDIO === n) return;
        }
        t.playlists = [tj({}, t)];
      }
      t.playlists.forEach(function (t, s) {
        var o = i(r, n, a, t);
        var l = od(s, o);
        t.uri ? t.resolvedUri = t.resolvedUri || s9(e.uri, t.uri) : (t.uri = 0 === s ? o : l, t.resolvedUri = t.uri);
        t.id = t.id || l;
        t.attributes = t.attributes || {};
        e.playlists[t.id] = t;
        e.playlists[t.uri] = t;
      });
    });
    {
      var r;
      let t = e.playlists.length;
      for (; t--;) {
        var n = e.playlists[t];
        op({
          playlist: n,
          id: od(t, n.uri)
        });
        n.resolvedUri = s9(e.uri, n.uri);
        e.playlists[n.id] = n;
        (e.playlists[n.uri] = n).attributes.BANDWIDTH || oh.warn("Invalid playlist STREAM-INF detected. Missing BANDWIDTH attribute.");
      }
    }
    oc(e, t => {
      t.uri && (t.resolvedUri = s9(e.uri, t.uri));
    });
  };
  class og {
    constructor() {
      this.offset_ = null;
      this.pendingDateRanges_ = new Map();
      this.processedDateRanges_ = new Map();
    }
    setOffset(e = []) {
      null === this.offset_ && e.length && ([e] = e, void 0 !== e.programDateTime) && (this.offset_ = e.programDateTime / 1e3);
    }
    setPendingDateRanges(e = []) {
      var t;
      e.length && ([t] = e, t = t.startDate.getTime(), this.trimProcessedDateRanges_(t), this.pendingDateRanges_ = e.reduce((e, t) => (e.set(t.id, t), e), new Map()));
    }
    processDateRange(e) {
      this.pendingDateRanges_.$$delete(e.id);
      this.processedDateRanges_.set(e.id, e);
    }
    getDateRangesToProcess() {
      if (null === this.offset_) return [];
      let e = {};
      let t = [];
      for (let s of (this.pendingDateRanges_.forEach((i, s) => {
        this.processedDateRanges_.has(s) || (i.startTime = i.startDate.getTime() / 1e3 - this.offset_, i.processDateRange = () => this.processDateRange(i), t.push(i), i.$$class && (e[i.$$class] ? (s = e[i.$$class].push(i), i.classListIndex = s - 1) : (e[i.$$class] = [i], i.classListIndex = 0)));
      }), t)) {
        var i = e[s.$$class] || [];
        s.endDate ? s.endTime = s.endDate.getTime() / 1e3 - this.offset_ : s.endOnNext && i[s.classListIndex + 1] ? s.endTime = i[s.classListIndex + 1].startTime : s.duration ? s.endTime = s.startTime + s.duration : s.plannedDuration ? s.endTime = s.startTime + s.plannedDuration : s.endTime = s.startTime;
      }
      return t;
    }
    trimProcessedDateRanges_(e) {
      new Map(this.processedDateRanges_).forEach((t, i) => {
        t.startDate.getTime() < e && this.processedDateRanges_.$$delete(i);
      });
    }
  }
  function of(e) {
    var t = e.segments || [];
    var i = e.preloadSegment;
    if (i && i.parts && i.parts.length) {
      if (i.preloadHints) {
        for (let e = 0; e < i.preloadHints.length; e++) if ("MAP" === i.preloadHints[e].type) return t;
      }
      i.duration = e.targetDuration;
      i.preload = !0;
      t.push(i);
    }
    return t;
  }
  sD = s7.EventTarget;
  let oy = (e, t) => {
    if (!e) return t;
    var i = aH(e, t);
    if (e.preloadHints && !t.preloadHints && delete i.preloadHints, e.parts && !t.parts) delete i.parts; else if (e.parts && t.parts) for (let s = 0; s < t.parts.length; s++) e.parts && e.parts[s] && (i.parts[s] = aH(e.parts[s], t.parts[s]));
    !e.skipped && t.skipped && (i.skipped = !1);
    e.preload && !t.preload && (i.preload = !1);
    return i;
  };
  let o_ = (e, t) => {
    !e.resolvedUri && e.uri && (e.resolvedUri = s9(t, e.uri));
    e.key && !e.key.resolvedUri && (e.key.resolvedUri = s9(t, e.key.uri));
    e.map && !e.map.resolvedUri && (e.map.resolvedUri = s9(t, e.map.uri));
    e.map && e.map.key && !e.map.key.resolvedUri && (e.map.key.resolvedUri = s9(t, e.map.key.uri));
    e.parts && e.parts.length && e.parts.forEach(e => {
      e.resolvedUri || (e.resolvedUri = s9(t, e.uri));
    });
    e.preloadHints && e.preloadHints.length && e.preloadHints.forEach(e => {
      e.resolvedUri || (e.resolvedUri = s9(t, e.uri));
    });
  };
  let ov = (e, t) => e === t || e.segments && t.segments && e.segments.length === t.segments.length && e.endList === t.endList && e.mediaSequence === t.mediaSequence && e.preloadSegment === t.preloadSegment;
  let ob = (e, t, i = ov) => {
    var s = aH(e, {});
    var r = s.playlists[t.id];
    if (!r || i(r, t)) return null;
    t.segments = of(t);
    let n = aH(r, t);
    if (n.preloadSegment && !t.preloadSegment && delete n.preloadSegment, r.segments) {
      if (t.skip) {
        t.segments = t.segments || [];
        for (let e = 0; e < t.skip.skippedSegments; e++) t.segments.unshift({
          skipped: !0
        });
      }
      n.segments = ((e, t, i) => {
        let s;
        var r = e.slice();
        var n = t.slice();
        i = i || 0;
        var a = [];
        for (let e = 0; e < n.length; e++) {
          var o = r[e + i];
          var l = n[e];
          o ? (s = o.map || s, a.push(oy(o, l))) : (s && !l.map && (l.map = s), a.push(l));
        }
        return a;
      })(r.segments, t.segments, t.mediaSequence - r.mediaSequence);
    }
    n.segments.forEach(e => {
      o_(e, n.resolvedUri);
    });
    for (let e = 0; e < s.playlists.length; e++) s.playlists[e].id === t.id && (s.playlists[e] = n);
    s.playlists[t.id] = n;
    s.playlists[t.uri] = n;
    oc(e, (e, i, s, r) => {
      if (e.playlists) for (let i = 0; i < e.playlists.length; i++) t.id === e.playlists[i].id && (e.playlists[i] = n);
    });
    return s;
  };
  let oT = (e, t) => {
    var i = e.segments || [];
    var i = i[i.length - 1];
    var s = i && i.parts && i.parts[i.parts.length - 1];
    var s = s && s.duration || i && i.duration;
    return t && s ? 1e3 * s : 500 * (e.partTargetDuration || e.targetDuration || 10);
  };
  class oS extends sD {
    constructor(e, t, i = {}) {
      if (super(), !e) throw Error("A non-empty playlist URL or object is required");
      this.logger_ = aj("PlaylistLoader");
      var {
        withCredentials = !1
      } = i;
      this.src = e;
      this.vhs_ = t;
      this.withCredentials = withCredentials;
      this.addDateRangesToTextTrack_ = i.addDateRangesToTextTrack;
      var e = t.options_;
      this.customTagParsers = e && e.customTagParsers || [];
      this.customTagMappers = e && e.customTagMappers || [];
      this.llhls = e && e.llhls;
      this.dateRangesStorage_ = new og();
      this.state = "HAVE_NOTHING";
      this.handleMediaupdatetimeout_ = this.handleMediaupdatetimeout_.bind(this);
      this.on("mediaupdatetimeout", this.handleMediaupdatetimeout_);
      this.on("loadedplaylist", this.handleLoadedPlaylist_.bind(this));
    }
    handleLoadedPlaylist_() {
      var e = this.media();
      e && (this.dateRangesStorage_.setOffset(e.segments), this.dateRangesStorage_.setPendingDateRanges(e.dateRanges), (e = this.dateRangesStorage_.getDateRangesToProcess()).length) && this.addDateRangesToTextTrack_ && this.addDateRangesToTextTrack_(e);
    }
    handleMediaupdatetimeout_() {
      if ("HAVE_METADATA" === this.state) {
        var e = this.media();
        let t = s9(this.main.uri, e.uri);
        this.llhls && (t = ((e, t) => {
          if (!t.endList && t.serverControl) {
            let r = {};
            if (t.serverControl.canBlockReload) {
              var i;
              var s = t.preloadSegment;
              let e = t.mediaSequence + t.segments.length;
              s && (s = s.parts || [], -1 < (i = a8(t) - 1) && i != s.length - 1 && (r._HLS_part = i), -1 < i || s.length) && e--;
              r._HLS_msn = e;
            }
            if (t.serverControl && t.serverControl.canSkipUntil && (r._HLS_skip = t.serverControl.canSkipDateranges ? "v2" : "YES"), Object.keys(r).length) {
              let t = new window.URL(e);
              ["_HLS_skip", "_HLS_msn", "_HLS_part"].forEach(function (e) {
                r.hasOwnProperty(e) && t.searchParams.set(e, r[e]);
              });
              e = t.toString();
            }
          }
          return e;
        })(t, e));
        this.state = "HAVE_CURRENT_METADATA";
        this.request = this.vhs_.xhr({
          uri: t,
          withCredentials: this.withCredentials
        }, (e, t) => {
          if (this.request) return e ? this.playlistRequestError(this.request, this.media(), "HAVE_METADATA") : void this.haveMetadata({
            playlistString: this.request.responseText,
            url: this.media().uri,
            id: this.media().id
          });
        });
      }
    }
    playlistRequestError(e, t, i) {
      var {
        uri,
        id
      } = uri;
      this.request = null;
      i && (this.state = i);
      this.error = {
        playlist: this.main.playlists[id],
        status: e.status,
        message: `HLS playlist request error at URL: ${uri}.`,
        responseText: e.responseText,
        code: 500 <= e.status ? 4 : 2
      };
      this.trigger("error");
    }
    parseManifest_({
      url: e,
      manifestString: t
    }) {
      {
        var [{
          onwarn: t,
          oninfo: i,
          manifestString: s,
          customTagParsers: r = [],
          customTagMappers: n = [],
          llhls: a
        }] = [{
          onwarn: ({
            message: t
          }) => this.logger_(`m3u8-parser warn for ${e}: ` + t),
          oninfo: ({
            message: t
          }) => this.logger_(`m3u8-parser info for ${e}: ` + t),
          manifestString: t,
          customTagParsers: this.customTagParsers,
          customTagMappers: this.customTagMappers,
          llhls: this.llhls
        }];
        let o = new rl();
        t && o.on("warn", t);
        i && o.on("info", i);
        r.forEach(e => o.addParser(e));
        n.forEach(e => o.addTagMapper(e));
        o.push(s);
        o.end();
        let l = o.manifest;
        if (a || (["preloadSegment", "skip", "serverControl", "renditionReports", "partInf", "partTargetDuration"].forEach(function (e) {
          l.hasOwnProperty(e) && delete l[e];
        }), l.segments && l.segments.forEach(function (e) {
          ["parts", "preloadHints"].forEach(function (t) {
            e.hasOwnProperty(t) && delete e[t];
          });
        })), !l.targetDuration) {
          let e = 10;
          l.segments && l.segments.length && (e = l.segments.reduce((e, t) => Math.max(e, t.duration), 0));
          t && t({
            message: "manifest has no targetDuration defaulting to " + e
          });
          l.targetDuration = e;
        }
        (i = a4(l)).length && !l.partTargetDuration && (r = i.reduce((e, t) => Math.max(e, t.duration), 0), t && (t({
          message: "manifest has no partTargetDuration defaulting to " + r
        }), oh.error("LL-HLS manifest has parts but lacks required #EXT-X-PART-INF:PART-TARGET value. See https://datatracker.ietf.org/doc/html/draft-pantos-hls-rfc8216bis-09#section-4.4.3.7. Playback is not guaranteed.")), l.partTargetDuration = r);
        return l;
      }
    }
    haveMetadata({
      playlistString: e,
      playlistObject: t,
      url: i,
      id: s
    }) {
      this.request = null;
      this.state = "HAVE_METADATA";
      (t = t || this.parseManifest_({
        url: i,
        manifestString: e
      })).lastRequest = Date.now();
      op({
        playlist: t,
        uri: i,
        id: s
      });
      e = ob(this.main, t);
      this.targetDuration = t.partTargetDuration || t.targetDuration;
      this.pendingMedia_ = null;
      e ? (this.main = e, this.media_ = this.main.playlists[s]) : this.trigger("playlistunchanged");
      this.updateMediaUpdateTimeout_(oT(this.media(), !!e));
      this.trigger("loadedplaylist");
    }
    dispose() {
      this.trigger("dispose");
      this.stopRequest();
      window.clearTimeout(this.mediaUpdateTimeout);
      window.clearTimeout(this.finalRenditionTimeout);
      this.dateRangesStorage_ = new og();
      this.off();
    }
    stopRequest() {
      var e;
      this.request && (e = this.request, this.request = null, e.onreadystatechange = null, e.abort());
    }
    media(e, t) {
      if (!e) return this.media_;
      if ("HAVE_NOTHING" === this.state) throw Error("Cannot switch media playlist from " + this.state);
      if ("string" == typeof e) {
        if (!this.main.playlists[e]) throw Error("Unknown playlist URI: " + e);
        e = this.main.playlists[e];
      }
      if (window.clearTimeout(this.finalRenditionTimeout), t) {
        t = (e.partTargetDuration || e.targetDuration) / 2 * 1e3 || 5e3;
        this.finalRenditionTimeout = window.setTimeout(this.media.bind(this, e, !1), t);
      } else {
        let s = this.state;
        var t = !this.media_ || e.id !== this.media_.id;
        var i = this.main.playlists[e.id];
        if (i && i.endList || e.endList && e.segments.length) {
          this.request && (this.request.onreadystatechange = null, this.request.abort(), this.request = null);
          this.state = "HAVE_METADATA";
          this.media_ = e;
          t && (this.trigger("mediachanging"), "HAVE_MAIN_MANIFEST" === s ? this.trigger("loadedmetadata") : this.trigger("mediachange"));
        } else if (this.updateMediaUpdateTimeout_(oT(e, !0)), t) {
          if (this.state = "SWITCHING_MEDIA", this.request) {
            if (e.resolvedUri === this.request.url) return;
            this.request.onreadystatechange = null;
            this.request.abort();
            this.request = null;
          }
          this.media_ && this.trigger("mediachanging");
          this.pendingMedia_ = e;
          this.request = this.vhs_.xhr({
            uri: e.resolvedUri,
            withCredentials: this.withCredentials
          }, (t, i) => {
            if (this.request) {
              if (e.lastRequest = Date.now(), e.resolvedUri = aq(e.resolvedUri, i), t) return this.playlistRequestError(this.request, e, s);
              this.haveMetadata({
                playlistString: i.responseText,
                url: e.uri,
                id: e.id
              });
              "HAVE_MAIN_MANIFEST" === s ? this.trigger("loadedmetadata") : this.trigger("mediachange");
            }
          });
        }
      }
    }
    pause() {
      this.mediaUpdateTimeout && (window.clearTimeout(this.mediaUpdateTimeout), this.mediaUpdateTimeout = null);
      this.stopRequest();
      "HAVE_NOTHING" === this.state && (this.started = !1);
      "SWITCHING_MEDIA" === this.state ? this.media_ ? this.state = "HAVE_METADATA" : this.state = "HAVE_MAIN_MANIFEST" : "HAVE_CURRENT_METADATA" === this.state && (this.state = "HAVE_METADATA");
    }
    load(e) {
      this.mediaUpdateTimeout && (window.clearTimeout(this.mediaUpdateTimeout), this.mediaUpdateTimeout = null);
      var t = this.media();
      e ? (e = t ? (t.partTargetDuration || t.targetDuration) / 2 * 1e3 : 5e3, this.mediaUpdateTimeout = window.setTimeout(() => {
        this.mediaUpdateTimeout = null;
        this.load();
      }, e)) : this.started ? t && !t.endList ? this.trigger("mediaupdatetimeout") : this.trigger("loadedplaylist") : this.start();
    }
    updateMediaUpdateTimeout_(e) {
      this.mediaUpdateTimeout && (window.clearTimeout(this.mediaUpdateTimeout), this.mediaUpdateTimeout = null);
      this.media() && !this.media().endList && (this.mediaUpdateTimeout = window.setTimeout(() => {
        this.mediaUpdateTimeout = null;
        this.trigger("mediaupdatetimeout");
        this.updateMediaUpdateTimeout_(e);
      }, e));
    }
    start() {
      this.started = !0;
      "object" == typeof this.src ? (this.src.uri || (this.src.uri = window.location.href), this.src.resolvedUri = this.src.uri, setTimeout(() => {
        this.setupInitialPlaylist(this.src);
      }, 0)) : this.request = this.vhs_.xhr({
        uri: this.src,
        withCredentials: this.withCredentials
      }, (e, t) => {
        if (this.request) {
          if (this.request = null, e) {
            this.error = {
              status: t.status,
              message: `HLS playlist request error at URL: ${this.src}.`,
              responseText: t.responseText,
              code: 2
            };
            "HAVE_NOTHING" === this.state && (this.started = !1);
            return this.trigger("error");
          }
          this.src = aq(this.src, t);
          e = this.parseManifest_({
            manifestString: t.responseText,
            url: this.src
          });
          this.setupInitialPlaylist(e);
        }
      });
    }
    srcUri() {
      return "string" == typeof this.src ? this.src : this.src.uri;
    }
    setupInitialPlaylist(e) {
      var t;
      var i;
      var s;
      this.state = "HAVE_MAIN_MANIFEST";
      e.playlists ? (this.main = e, om(this.main, this.srcUri()), e.playlists.forEach(e => {
        e.segments = of(e);
        e.segments.forEach(t => {
          o_(t, e.resolvedUri);
        });
      }), this.trigger("loadedplaylist"), this.request || this.media(this.main.playlists[0])) : (t = this.srcUri() || window.location.href, this.main = (i = od(0, t), (s = {
        mediaGroups: {
          AUDIO: {},
          VIDEO: {},
          "CLOSED-CAPTIONS": {},
          SUBTITLES: {}
        },
        uri: window.location.href,
        resolvedUri: window.location.href,
        playlists: [{
          uri: t,
          id: i,
          resolvedUri: t,
          attributes: {}
        }]
      }).playlists[i] = s.playlists[0], s.playlists[t] = s.playlists[0], s), this.haveMetadata({
        playlistObject: e,
        url: t,
        id: this.main.playlists[0].id
      }), this.trigger("loadedmetadata"));
    }
    updateOrDeleteClone(e, t) {
      var i = this.main;
      var s = e.ID;
      let r = i.playlists.length;
      for (; r--;) {
        var n;
        var a;
        var o;
        var l;
        var h;
        var d = i.playlists[r];
        d.attributes["PATHWAY-ID"] === s && (n = d.resolvedUri, a = d.id, t ? (l = od(s, o = this.createCloneURI_(d.resolvedUri, e)), h = this.createCloneAttributes_(s, d.attributes), d = this.createClonePlaylist_(d, l, e, h), i.playlists[r] = d, i.playlists[l] = d, i.playlists[o] = d) : i.playlists.splice(r, 1), delete i.playlists[a], delete i.playlists[n]);
      }
      this.updateOrDeleteCloneMedia(e, t);
    }
    updateOrDeleteCloneMedia(e, t) {
      let i = this.main;
      let s = e.ID;
      ["AUDIO", "SUBTITLES", "CLOSED-CAPTIONS"].forEach(e => {
        if (i.mediaGroups[e] && i.mediaGroups[e][s]) {
          for (let t in i.mediaGroups[e]) if (t === s) {
            for (let s in i.mediaGroups[e][t]) i.mediaGroups[e][t][s].playlists.forEach((e, t) => {
              var e = i.playlists[e.id];
              var s = e.id;
              var e = e.resolvedUri;
              delete i.playlists[s];
              delete i.playlists[e];
            });
            delete i.mediaGroups[e][t];
          }
        }
      });
      t && this.createClonedMediaGroups_(e);
    }
    addClonePathway(e, t = {}) {
      var i = this.main;
      var s = i.playlists.length;
      var r = this.createCloneURI_(t.resolvedUri, e);
      var n = od(e.ID, r);
      var a = this.createCloneAttributes_(e.ID, t.attributes);
      var t = this.createClonePlaylist_(t, n, e, a);
      i.playlists[s] = t;
      i.playlists[n] = t;
      i.playlists[r] = t;
      this.createClonedMediaGroups_(e);
    }
    createClonedMediaGroups_(e) {
      let t = e.ID;
      let i = e["BASE-ID"];
      let s = this.main;
      ["AUDIO", "SUBTITLES", "CLOSED-CAPTIONS"].forEach(r => {
        if (s.mediaGroups[r] && !s.mediaGroups[r][t]) {
          for (let o in s.mediaGroups[r]) if (o === i) for (let i in s.mediaGroups[r][t] = {}, s.mediaGroups[r][o]) {
            var n = s.mediaGroups[r][o][i];
            s.mediaGroups[r][t][i] = tj({}, n);
            let l = s.mediaGroups[r][t][i];
            var a = this.createCloneURI_(n.resolvedUri, e);
            l.resolvedUri = a;
            l.uri = a;
            l.playlists = [];
            n.playlists.forEach((n, a) => {
              var o;
              var h = s.playlists[n.id];
              var d = ou(r, t, i);
              var d = od(t, d);
              h && !s.playlists[d] && (o = (h = this.createClonePlaylist_(h, d, e)).resolvedUri, s.playlists[d] = h, s.playlists[o] = h);
              l.playlists[a] = this.createClonePlaylist_(n, d, e);
            });
          }
        }
      });
    }
    createClonePlaylist_(e, t, i, s) {
      i = {
        resolvedUri: i = this.createCloneURI_(e.resolvedUri, i),
        uri: i,
        id: t
      };
      e.segments && (i.segments = []);
      s && (i.attributes = s);
      return aH(e, i);
    }
    createCloneURI_(e, t) {
      var i = new URL(e);
      i.hostname = t["URI-REPLACEMENT"].HOST;
      var s = t["URI-REPLACEMENT"].PARAMS;
      for (let e of Object.keys(s)) i.searchParams.set(e, s[e]);
      return i.href;
    }
    createCloneAttributes_(e, t) {
      let i = {
        "PATHWAY-ID": e
      };
      ["AUDIO", "SUBTITLES", "CLOSED-CAPTIONS"].forEach(s => {
        t[s] && (i[s] = e);
      });
      return i;
    }
    getKeyIdSet(e) {
      if (e.contentProtection) {
        var t = new Set();
        for (let s in e.contentProtection) {
          var i = e.contentProtection[s].attributes.keyId;
          i && t.add(i.toLowerCase());
        }
        return t;
      }
    }
  }
  function ow(e, t, i, s) {
    var r = "arraybuffer" === e.responseType ? e.response : e.responseText;
    !t && r && (e.responseTime = Date.now(), e.roundTripTime = e.responseTime - e.requestTime, e.bytesReceived = r.byteLength || r.length, e.bandwidth || (e.bandwidth = Math.floor(e.bytesReceived / e.roundTripTime * 8e3)));
    i.headers && (e.responseHeaders = i.headers);
    t && "ETIMEDOUT" === t.code && (e.timedout = !0);
    s(t = t || e.aborted || 200 === i.statusCode || 206 === i.statusCode || 0 === i.statusCode ? t : Error("sendWithRetry Failed with a response of: " + (e && (r || e.responseText))), e);
  }
  function oE() {
    function e(t, i) {
      t = aH({
        timeout: 45e3
      }, t);
      var s = e.beforeRequest || s7.Vhs.xhr.beforeRequest;
      var r = e._requestCallbackSet || s7.Vhs.xhr._requestCallbackSet || new Set();
      let n = e._responseCallbackSet || s7.Vhs.xhr._responseCallbackSet;
      s && "function" == typeof s && (s7.log.warn("beforeRequest is deprecated, use onRequest instead."), r.add(s));
      var a = !0 === s7.Vhs.xhr.original ? oL : s7.Vhs.xhr;
      var o = ((e, t) => {
        if (e && e.size) {
          let i = t;
          e.forEach(e => {
            i = e(i);
          });
          return i;
        }
      })(r, t);
      r.$$delete(s);
      let l = a(o || t, function (e, t) {
        n && n.size && n.forEach(i => {
          i(l, e, t);
        });
        return ow(l, e, t, i);
      });
      let h = l.abort;
      l.abort = function () {
        l.aborted = !0;
        return h.apply(l, arguments);
      };
      l.uri = t.uri;
      l.requestTime = Date.now();
      return l;
    }
    e.original = !0;
    return e;
  }
  function oC(e) {
    var t;
    var i = {};
    e.byterange && (i.Range = "bytes=" + (t = e.byterange).offset + "-" + ("bigint" == typeof t.offset || "bigint" == typeof t.length ? window.BigInt(t.offset) + window.BigInt(t.length) - window.BigInt(1) : t.offset + t.length - 1));
    return i;
  }
  function ok(e, t) {
    e = e.toString(16);
    return "00".substring(0, 2 - e.length) + e + (t % 2 ? " " : "");
  }
  function ox(e) {
    return 32 <= e && e < 126 ? String.fromCharCode(e) : ".";
  }
  function oI(e) {
    let t = {};
    Object.keys(e).forEach(i => {
      var s = e[i];
      rw(s) ? t[i] = {
        bytes: s.buffer,
        byteOffset: s.byteOffset,
        byteLength: s.byteLength
      } : t[i] = s;
    });
    return t;
  }
  function oA(e) {
    var t = e.byterange || {
      length: 1 / 0,
      offset: 0
    };
    return [t.length, t.offset, e.resolvedUri].join(",");
  }
  function oD(e) {
    return e.resolvedUri;
  }
  let oL = s7.xhr;
  let oP = e => {
    var t = Array.prototype.slice.call(e);
    let i = "";
    for (let e = 0; e < t.length / 16; e++) i += t.slice(16 * e, 16 * e + 16).map(ok).join("") + " " + t.slice(16 * e, 16 * e + 16).map(ox).join("") + "\n";
    return i;
  };
  sA = Object.freeze({
    __proto__: null,
    createTransferableMessage: oI,
    initSegmentId: oA,
    segmentKeyId: oD,
    hexDump: oP,
    tagDump: ({
      bytes: e
    }) => oP(e),
    textRanges: e => {
      var t;
      let i = "";
      let s;
      for (s = 0; s < e.length; s++) i += (t = s, e.start(t) + "-" + e.end(t) + " ");
      return i;
    }
  });
  let oO = e => e.transmuxedPresentationEnd - e.transmuxedPresentationStart - e.transmuxerPrependedSeconds;
  let oN = ({
    playlist: e,
    time: t,
    callback: i
  }) => {
    var s;
    var r;
    if (i) return e && void 0 !== t ? (e = ((e, t) => {
      if (!t || !t.segments || 0 === t.segments.length) return null;
      let i = 0;
      let s;
      for (let r = 0; r < t.segments.length && !(e <= (i = (s = t.segments[r]).videoTimingInfo ? s.videoTimingInfo.transmuxedPresentationEnd : i + s.duration)); r++);
      var r = t.segments[t.segments.length - 1];
      if (r.videoTimingInfo && r.videoTimingInfo.transmuxedPresentationEnd < e) return null;
      if (e > i) {
        if (e > i + .25 * r.duration) return null;
        s = r;
      }
      return {
        segment: s,
        estimatedStart: s.videoTimingInfo ? s.videoTimingInfo.transmuxedPresentationStart : i - s.duration,
        type: s.videoTimingInfo ? "accurate" : "estimate"
      };
    })(t, e)) ? "estimate" === e.type ? i({
      message: "Accurate programTime could not be determined. Please seek to e.seekTime and try again",
      seekTime: e.estimatedStart
    }) : (s = {
      mediaSeconds: t
    }, (r = (e = e.segment).dateTimeObject ? (r = e.videoTimingInfo.transmuxerPrependedSeconds, t -= e.videoTimingInfo.transmuxedPresentationStart + r, new Date(e.dateTimeObject.getTime() + 1e3 * t)) : null) && (s.programDateTime = r.toISOString()), i(null, s)) : i({
      message: "valid programTime was not found"
    }) : i({
      message: "getProgramTime: playlist and time must be provided"
    });
    throw Error("getProgramTime: callback must be provided");
  };
  let oR = ({
    programTime: e,
    playlist: t,
    retryCount: i = 2,
    seekTo: s,
    pauseAfterSeek: r = !0,
    tech: n,
    callback: a
  }) => {
    var o;
    var l;
    var h;
    if (a) return void 0 !== e && t && s ? t.endList || n.hasStarted_ ? (e => {
      if (!e.segments || 0 === e.segments.length) return !1;
      for (let t = 0; t < e.segments.length; t++) if (!e.segments[t].dateTimeObject) return !1;
      return !0;
    })(t) ? (h = ((e, t) => {
      let i;
      try {
        i = new Date(e);
      } catch (e) {
        return null;
      }
      if (!t || !t.segments || 0 === t.segments.length) return null;
      let s = t.segments[0];
      if (i < new Date(s.dateTimeObject)) return null;
      for (let e = 0; e < t.segments.length - 1 && (s = t.segments[e], !(i < new Date(t.segments[e + 1].dateTimeObject))); e++);
      var e = t.segments[t.segments.length - 1];
      var r = e.dateTimeObject;
      var n = e.videoTimingInfo ? oO(e.videoTimingInfo) : e.duration + .25 * e.duration;
      var n = new Date(r.getTime() + 1e3 * n);
      return i > n ? null : {
        segment: s = i > new Date(r) ? e : s,
        estimatedStart: s.videoTimingInfo ? s.videoTimingInfo.transmuxedPresentationStart : ol.duration(t, t.mediaSequence + t.segments.indexOf(s)),
        type: s.videoTimingInfo ? "accurate" : "estimate"
      };
    })(e, t)) ? (l = ((e, t) => {
      let i;
      let s;
      try {
        i = new Date(e);
        s = new Date(t);
      } catch (e) { }
      e = i.getTime();
      return (s.getTime() - e) / 1e3;
    })((o = h.segment).dateTimeObject, e), "estimate" === h.type ? 0 === i ? a({
      message: e + " is not buffered yet. Try again"
    }) : (s(h.estimatedStart + l), void n.one("seeked", () => {
      oR({
        programTime: e,
        playlist: t,
        retryCount: i - 1,
        seekTo: s,
        pauseAfterSeek: r,
        tech: n,
        callback: a
      });
    })) : (h = o.start + l, n.one("seeked", () => a(null, n.currentTime())), r && n.pause(), void s(h))) : a({
      message: e + " was not found in the stream"
    }) : a({
      message: "programDateTime tags must be provided in the manifest " + t.resolvedUri
    }) : a({
      message: "player must be playing a live stream to start buffering"
    }) : a({
      message: "seekToProgramTime: programTime, seekTo and playlist must be provided"
    });
    throw Error("seekToProgramTime: callback must be provided");
  };
  let oM = (e, t) => {
    if (4 === e.readyState) return t();
  };
  let oU = (e, t, i) => {
    let s = [];
    let r;
    let n = !1;
    function a(e, t, s, r) {
      t.abort();
      n = !0;
      return i(e, t, s, r);
    }
    function o(e, t) {
      var i;
      if (!n) return e ? a(e, t, "", s) : (i = t.responseText.substring(s && s.byteLength || 0, t.responseText.length), s = function () {
        for (i = $$arguments.length, s = Array(i), r = 0, void 0; r < i; r++) {
          var e;
          var t;
          var i;
          var s;
          var r;
          s[r] = $$arguments[r];
        }
        return (s = s.filter(function (e) {
          return e && (e.byteLength || e.length) && "string" != typeof e;
        })).length <= 1 ? rE(s[0]) : (e = new Uint8Array(s.reduce(function (e, t, i) {
          return e + (t.byteLength || t.length);
        }, 0)), t = 0, s.forEach(function (i) {
          i = rE(i);
          e.set(i, t);
          t += i.byteLength;
        }), e);
      }(s, rp(i, !0)), r = r || av(s), s.length < 10 || r && s.length < r + 2 || "ts" === (i = aw(s)) && s.length < 188 || !i && s.length < 376 ? oM(t, () => a(e, t, "", s)) : a(null, t, i, s));
    }
    let l = t({
      uri: e,
      beforeSend(e) {
        e.overrideMimeType("text/plain; charset=x-user-defined");
        e.addEventListener("progress", function ({ }) {
          return ow(e, null, {
            statusCode: e.status
          }, o);
        });
      }
    }, function (e, t) {
      return ow(l, e, t, o);
    });
    return l;
  };
  function oB(e, t) {
    if (!ov(e, t) || e.sidx && t.sidx && (e.sidx.offset !== t.sidx.offset || e.sidx.length !== t.sidx.length) || !e.sidx && t.sidx || e.sidx && !t.sidx || e.segments && !t.segments || !e.segments && t.segments) return !1;
    if (e.segments || t.segments) for (let r = 0; r < e.segments.length; r++) {
      var i = e.segments[r];
      var s = t.segments[r];
      if (i.uri !== s.uri || (i.byterange || s.byterange) && (i = i.byterange, s = s.byterange, i && !s || !i && s || i.offset !== s.offset || i.length !== s.length)) return !1;
    }
    return !0;
  }
  t6 = s7.EventTarget;
  let oF = (e, t, i, s) => `placeholder-uri-${e}-${t}-` + (s.attributes.NAME || i);
  let oq = ({
    mainXml: e,
    srcUrl: t,
    clientOffset: i,
    sidxMapping: s,
    previousManifest: r
  }) => (i = {
    manifestUri: t,
    clientOffset: i,
    sidxMapping: s,
    previousManifest: r
  }, om(r = n7({
    dashPlaylists: s = an((e = af(ay(e), i)).representationInfo),
    locations: e.locations,
    contentSteering: e.contentSteeringInfo,
    sidxMapping: i.sidxMapping,
    previousManifest: i.previousManifest,
    eventStream: e.eventStream
  }), t, oF), r);
  let oj = (e, t, i) => {
    let s = !0;
    let r = aH(e, {
      duration: t.duration,
      minimumUpdatePeriod: t.minimumUpdatePeriod,
      timelineStarts: t.timelineStarts
    });
    for (let e = 0; e < t.playlists.length; e++) {
      var n;
      var a = t.playlists[e];
      a.sidx && (o = nZ(a.sidx), i) && i[o] && i[o].sidx && nG(a, i[o].sidx, a.sidx.resolvedUri);
      var o = ob(r, a, oB);
      o && (r = o, s = !1);
    }
    oc(t, (e, t, i, n) => {
      var a;
      var o;
      e.playlists && e.playlists.length && (a = e.playlists[0].id, o = ob(r, e.playlists[0], oB)) && (n in (r = o).mediaGroups[t][i] || (r.mediaGroups[t][i][n] = e), r.mediaGroups[t][i][n].playlists[0] = r.playlists[a], s = !1);
    });
    oc(n = r, (e, i, s, r) => {
      r in t.mediaGroups[i][s] || delete n.mediaGroups[i][s][r];
    });
    return (s = t.minimumUpdatePeriod === e.minimumUpdatePeriod && s) ? null : r;
  };
  let oH = (e, t) => (!!(!e.map && !t.map) || !!(e.map && t.map && e.map.byterange.offset === t.map.byterange.offset && e.map.byterange.length === t.map.byterange.length)) && e.uri === t.uri && e.byterange.offset === t.byterange.offset && e.byterange.length === t.byterange.length;
  let oV = (e, t) => {
    var i = {};
    for (let n in e) {
      var s = e[n].sidx;
      if (s) {
        var r = nZ(s);
        if (!t[r]) break;
        oH(t[r].sidxInfo, s) && (i[r] = t[r]);
      }
    }
    return i;
  };
  class o$ extends t6 {
    constructor(e, t, i = {}, s) {
      this.vhs_ = t;
      this.withCredentials = withCredentials;
      this.addMetadataToTextTrack = i.addMetadataToTextTrack;
      super();
      this.mainPlaylistLoader_ = withCredentials || this;
      withCredentials || (this.isMain_ = !0);
      var {
        withCredentials = !1
      } = i;
      if (!e) throw Error("A non-empty playlist URL or object is required");
      this.on("minimumUpdatePeriod", () => {
        this.refreshXml_();
      });
      this.on("mediaupdatetimeout", () => {
        this.refreshMedia_(this.media().id);
      });
      this.state = "HAVE_NOTHING";
      this.loadedPlaylists_ = {};
      this.logger_ = aj("DashPlaylistLoader");
      this.isMain_ ? (this.mainPlaylistLoader_.srcUrl = e, this.mainPlaylistLoader_.sidxMapping_ = {}) : this.childPlaylist_ = e;
    }
    requestErrored_(e, t, i) {
      return !this.request || (this.request = null, e ? (this.error = "object" != typeof e || e instanceof Error ? {
        status: t.status,
        message: "DASH request error at URL: " + t.uri,
        response: t.response,
        code: 2
      } : e, i && (this.state = i), this.trigger("error"), !0) : void 0);
    }
    addSidxSegments_(e, t, i) {
      let s = e.sidx && nZ(e.sidx);
      if (e.sidx && s && !this.mainPlaylistLoader_.sidxMapping_[s]) {
        let r = aq(e.sidx.resolvedUri);
        let n = (r, n) => {
          if (!this.requestErrored_(r, n, t)) {
            let a;
            r = this.mainPlaylistLoader_.sidxMapping_;
            try {
              a = aC(rE(n.response).subarray(8));
            } catch (e) {
              return void this.requestErrored_(e, n, t);
            }
            r[s] = {
              sidxInfo: e.sidx,
              sidx: a
            };
            nG(e, a, e.sidx.resolvedUri);
            return i(!0);
          }
        };
        this.request = oU(r, this.vhs_.xhr, (t, i, s, a) => {
          var o;
          var l;
          return t ? n(t, i) : s && "mp4" === s ? ({
            offset: o,
            length: l
          } = e.sidx.byterange, a.length >= l + o ? n(t, {
            response: a.subarray(o, o + l),
            status: i.status,
            uri: i.uri
          }) : void (this.request = this.vhs_.xhr({
            uri: r,
            responseType: "arraybuffer",
            headers: oC({
              byterange: e.sidx.byterange
            })
          }, n))) : n({
            status: i.status,
            message: `Unsupported ${s || "unknown"} container type for sidx segment at URL: ` + r,
            response: "",
            playlist: e,
            internal: !0,
            playlistExclusionDuration: 1 / 0,
            code: 2
          }, i);
        });
      } else this.mediaRequest_ = window.setTimeout(() => i(!1), 0);
    }
    dispose() {
      this.trigger("dispose");
      this.stopRequest();
      this.loadedPlaylists_ = {};
      window.clearTimeout(this.minimumUpdatePeriodTimeout_);
      window.clearTimeout(this.mediaRequest_);
      window.clearTimeout(this.mediaUpdateTimeout);
      this.mediaUpdateTimeout = null;
      this.mediaRequest_ = null;
      this.minimumUpdatePeriodTimeout_ = null;
      this.mainPlaylistLoader_.createMupOnMedia_ && (this.off("loadedmetadata", this.mainPlaylistLoader_.createMupOnMedia_), this.mainPlaylistLoader_.createMupOnMedia_ = null);
      this.off();
    }
    hasPendingRequest() {
      return this.request || this.mediaRequest_;
    }
    stopRequest() {
      var e;
      this.request && (e = this.request, this.request = null, e.onreadystatechange = null, e.abort());
    }
    media(e) {
      if (!e) return this.media_;
      if ("HAVE_NOTHING" === this.state) throw Error("Cannot switch media playlist from " + this.state);
      let t = this.state;
      if ("string" == typeof e) {
        if (!this.mainPlaylistLoader_.main.playlists[e]) throw Error("Unknown playlist URI: " + e);
        e = this.mainPlaylistLoader_.main.playlists[e];
      }
      var i = !this.media_ || e.id !== this.media_.id;
      i && this.loadedPlaylists_[e.id] && this.loadedPlaylists_[e.id].endList ? (this.state = "HAVE_METADATA", this.media_ = e, i && (this.trigger("mediachanging"), this.trigger("mediachange"))) : i && (this.media_ && this.trigger("mediachanging"), this.addSidxSegments_(e, t, i => {
        this.haveMetadata({
          startingState: t,
          playlist: e
        });
      }));
    }
    haveMetadata({
      startingState: e,
      playlist: t
    }) {
      this.state = "HAVE_METADATA";
      this.loadedPlaylists_[t.id] = t;
      this.mediaRequest_ = null;
      this.refreshMedia_(t.id);
      "HAVE_MAIN_MANIFEST" === e ? this.trigger("loadedmetadata") : this.trigger("mediachange");
    }
    pause() {
      this.mainPlaylistLoader_.createMupOnMedia_ && (this.off("loadedmetadata", this.mainPlaylistLoader_.createMupOnMedia_), this.mainPlaylistLoader_.createMupOnMedia_ = null);
      this.stopRequest();
      window.clearTimeout(this.mediaUpdateTimeout);
      this.mediaUpdateTimeout = null;
      this.isMain_ && (window.clearTimeout(this.mainPlaylistLoader_.minimumUpdatePeriodTimeout_), this.mainPlaylistLoader_.minimumUpdatePeriodTimeout_ = null);
      "HAVE_NOTHING" === this.state && (this.started = !1);
    }
    load(e) {
      window.clearTimeout(this.mediaUpdateTimeout);
      this.mediaUpdateTimeout = null;
      var t = this.media();
      e ? (e = t ? t.targetDuration / 2 * 1e3 : 5e3, this.mediaUpdateTimeout = window.setTimeout(() => this.load(), e)) : this.started ? t && !t.endList ? (this.isMain_ && !this.minimumUpdatePeriodTimeout_ && (this.trigger("minimumUpdatePeriod"), this.updateMinimumUpdatePeriodTimeout_()), this.trigger("mediaupdatetimeout")) : this.trigger("loadedplaylist") : this.start();
    }
    start() {
      this.started = !0;
      this.isMain_ ? this.requestMain_((e, t) => {
        this.haveMain_();
        this.hasPendingRequest() || this.media_ || this.media(this.mainPlaylistLoader_.main.playlists[0]);
      }) : this.mediaRequest_ = window.setTimeout(() => this.haveMain_(), 0);
    }
    requestMain_(e) {
      this.request = this.vhs_.xhr({
        uri: this.mainPlaylistLoader_.srcUrl,
        withCredentials: this.withCredentials
      }, (t, i) => {
        if (this.requestErrored_(t, i)) "HAVE_NOTHING" === this.state && (this.started = !1); else {
          let t = i.responseText !== this.mainPlaylistLoader_.mainXml_;
          if (this.mainPlaylistLoader_.mainXml_ = i.responseText, i.responseHeaders && i.responseHeaders.date ? this.mainLoaded_ = Date.parse(i.responseHeaders.date) : this.mainLoaded_ = Date.now(), this.mainPlaylistLoader_.srcUrl = aq(this.mainPlaylistLoader_.srcUrl, i), !t) return e(i, t);
          this.handleMain_();
          this.syncClientServerClock_(() => e(i, t));
        }
      });
    }
    syncClientServerClock_(e) {
      let t = a_(this.mainPlaylistLoader_.mainXml_);
      return null === t ? (this.mainPlaylistLoader_.clientOffset_ = this.mainLoaded_ - Date.now(), e()) : "DIRECT" === t.method ? (this.mainPlaylistLoader_.clientOffset_ = t.value - Date.now(), e()) : void (this.request = this.vhs_.xhr({
        uri: s9(this.mainPlaylistLoader_.srcUrl, t.value),
        method: t.method,
        withCredentials: this.withCredentials
      }, (i, s) => {
        if (this.request) {
          let r;
          if (i) {
            this.mainPlaylistLoader_.clientOffset_ = this.mainLoaded_ - Date.now();
            return e();
          }
          r = "HEAD" === t.method ? s.responseHeaders && s.responseHeaders.date ? Date.parse(s.responseHeaders.date) : this.mainLoaded_ : Date.parse(s.responseText);
          this.mainPlaylistLoader_.clientOffset_ = r - Date.now();
          e();
        }
      }));
    }
    haveMain_() {
      this.state = "HAVE_MAIN_MANIFEST";
      this.isMain_ ? this.trigger("loadedplaylist") : this.media_ || this.media(this.childPlaylist_);
    }
    handleMain_() {
      this.mediaRequest_ = null;
      var e = this.mainPlaylistLoader_.main;
      let t = oq({
        mainXml: this.mainPlaylistLoader_.mainXml_,
        srcUrl: this.mainPlaylistLoader_.srcUrl,
        clientOffset: this.mainPlaylistLoader_.clientOffset_,
        sidxMapping: this.mainPlaylistLoader_.sidxMapping_,
        previousManifest: e
      });
      e && (t = oj(e, t, this.mainPlaylistLoader_.sidxMapping_));
      this.mainPlaylistLoader_.main = t || e;
      var i = this.mainPlaylistLoader_.main.locations && this.mainPlaylistLoader_.main.locations[0];
      i && i !== this.mainPlaylistLoader_.srcUrl && (this.mainPlaylistLoader_.srcUrl = i);
      (!e || t && t.minimumUpdatePeriod !== e.minimumUpdatePeriod) && this.updateMinimumUpdatePeriodTimeout_();
      this.addEventStreamToMetadataTrack_(t);
      return !!t;
    }
    updateMinimumUpdatePeriodTimeout_() {
      var e = this.mainPlaylistLoader_;
      e.createMupOnMedia_ && (e.off("loadedmetadata", e.createMupOnMedia_), e.createMupOnMedia_ = null);
      e.minimumUpdatePeriodTimeout_ && (window.clearTimeout(e.minimumUpdatePeriodTimeout_), e.minimumUpdatePeriodTimeout_ = null);
      let t = e.main && e.main.minimumUpdatePeriod;
      0 === t && (e.media() ? t = 1e3 * e.media().targetDuration : (e.createMupOnMedia_ = e.updateMinimumUpdatePeriodTimeout_, e.one("loadedmetadata", e.createMupOnMedia_)));
      "number" != typeof t || t <= 0 ? t < 0 && this.logger_(`found invalid minimumUpdatePeriod of ${t}, not setting a timeout`) : this.createMUPTimeout_(t);
    }
    createMUPTimeout_(e) {
      let t = this.mainPlaylistLoader_;
      t.minimumUpdatePeriodTimeout_ = window.setTimeout(() => {
        t.minimumUpdatePeriodTimeout_ = null;
        t.trigger("minimumUpdatePeriod");
        t.createMUPTimeout_(e);
      }, e);
    }
    refreshXml_() {
      this.requestMain_((e, t) => {
        var i;
        var s;
        let r;
        t && (this.media_ && (this.media_ = this.mainPlaylistLoader_.main.playlists[this.media_.id]), this.mainPlaylistLoader_.sidxMapping_ = (i = this.mainPlaylistLoader_.main, s = this.mainPlaylistLoader_.sidxMapping_, r = oV(i.playlists, s), oc(i, (e, t, i, n) => {
          e.playlists && e.playlists.length && (e = e.playlists, r = aH(r, oV(e, s)));
        }), r), this.addSidxSegments_(this.media(), this.state, e => {
          this.refreshMedia_(this.media().id);
        }));
      });
    }
    refreshMedia_(e) {
      if (!e) throw Error("refreshMedia_ must take a media id");
      this.media_ && this.isMain_ && this.handleMain_();
      var t = this.mainPlaylistLoader_.main.playlists;
      let i = !this.media_ || this.media_ !== t[e];
      if (i ? this.media_ = t[e] : this.trigger("playlistunchanged"), !this.mediaUpdateTimeout) {
        let e = () => {
          this.media().endList || (this.mediaUpdateTimeout = window.setTimeout(() => {
            this.trigger("mediaupdatetimeout");
            e();
          }, oT(this.media(), !!i)));
        };
        e();
      }
      this.trigger("loadedplaylist");
    }
    addEventStreamToMetadataTrack_(e) {
      e && this.mainPlaylistLoader_.main.eventStream && (e = this.mainPlaylistLoader_.main.eventStream.map(e => ({
        cueTime: e.start,
        frames: [{
          data: e.messageData
        }]
      })), this.addMetadataToTextTrack("EventStream", e, this.mainPlaylistLoader_.main.duration));
    }
    getKeyIdSet(e) {
      if (e.contentProtection) {
        var t = new Set();
        for (let s in e.contentProtection) {
          var i = e.contentProtection[s].attributes["cenc:default_KID"];
          i && t.add(i.replace(/-/g, "").toLowerCase());
        }
        return t;
      }
    }
  }
  var oz = {
    GOAL_BUFFER_LENGTH: 30,
    MAX_GOAL_BUFFER_LENGTH: 60,
    BACK_BUFFER_LENGTH: 30,
    GOAL_BUFFER_LENGTH_RATE: 1,
    INITIAL_BANDWIDTH: 4194304,
    BANDWIDTH_VARIANCE: 1.2,
    BUFFER_LOW_WATER_LINE: 0,
    MAX_BUFFER_LOW_WATER_LINE: 30,
    EXPERIMENTAL_MAX_BUFFER_LOW_WATER_LINE: 16,
    BUFFER_LOW_WATER_LINE_RATE: 1,
    BUFFER_HIGH_WATER_LINE: 30
  };
  function oW(e) {
    e.on = e.addEventListener;
    e.off = e.removeEventListener;
    return e;
  }
  let oG = e => {
    var t = new Uint8Array(new ArrayBuffer(e.length));
    for (let i = 0; i < e.length; i++) t[i] = e.charCodeAt(i);
    return t.buffer;
  };
  function oX(e) {
    return function () {
      let t = function (e) {
        try {
          return URL.createObjectURL(new Blob([e], {
            type: "application/javascript"
          }));
        } catch (i) {
          var t = new BlobBuilder();
          t.append(e);
          return URL.createObjectURL(t.getBlob());
        }
      }(e);
      var i = oW(new Worker(t));
      i.objURL = t;
      let s = i.terminate;
      i.on = i.addEventListener;
      i.off = i.removeEventListener;
      i.terminate = function () {
        URL.revokeObjectURL(t);
        return s.call(this);
      };
      return i;
    };
  }
  function oK(e) {
    return `var browserWorkerPolyFill = ${oW.toString()};
browserWorkerPolyFill(self);
` + e;
  }
  function oY(e) {
    return e.toString().replace(/^function.+?{/, "").slice(0, -1);
  }
  var oQ = oX(oK(oY(function () {
    function e() {
      this.init = function () {
        var e = {};
        this.on = function (t, i) {
          e[t] || (e[t] = []);
          e[t] = e[t].concat(i);
        };
        this.off = function (t, i) {
          return !!e[t] && (i = e[t].indexOf(i), e[t] = e[t].slice(), e[t].splice(i, 1), -1 < i);
        };
        this.trigger = function (t) {
          var i;
          var s;
          var r;
          var n = e[t];
          if (n) {
            if (2 == $$arguments.length) for (s = n.length, i = 0; i < s; ++i) n[i].call(this, $$arguments[1]); else {
              for (r = [], i = $$arguments.length, i = 1; i < $$arguments.length; ++i) r.push($$arguments[i]);
              for (s = n.length, i = 0; i < s; ++i) n[i].apply(this, r);
            }
          }
        };
        this.dispose = function () {
          e = {};
        };
      };
    }
    var t;
    var s;
    var r;
    var n;
    var a;
    var o;
    var l;
    var h;
    var d;
    var u;
    var c;
    var p;
    var m;
    var g;
    var f;
    var y;
    var _;
    var v;
    var b;
    var T;
    var S;
    var w;
    var E;
    var C;
    var k;
    var x;
    var I;
    var A;
    var D;
    var L;
    var P;
    var O;
    var N;
    var R;
    var M;
    var U;
    var B;
    var F = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== require.g ? require.g : "undefined" != typeof self ? self : {};
    e.prototype.pipe = function (e) {
      this.on("data", function (t) {
        e.push(t);
      });
      this.on("done", function (t) {
        e.flush(t);
      });
      this.on("partialdone", function (t) {
        e.partialFlush(t);
      });
      this.on("endedtimeline", function (t) {
        e.endTimeline(t);
      });
      this.on("reset", function (t) {
        e.reset(t);
      });
      return e;
    };
    e.prototype.push = function (e) {
      this.trigger("data", e);
    };
    e.prototype.flush = function (e) {
      this.trigger("done", e);
    };
    e.prototype.partialFlush = function (e) {
      this.trigger("partialdone", e);
    };
    e.prototype.endTimeline = function (e) {
      this.trigger("endedtimeline", e);
    };
    e.prototype.reset = function (e) {
      this.trigger("reset", e);
    };
    var q = e;
    var j = function (e) {
      var t;
      var e = new DataView(e.buffer, e.byteOffset, e.byteLength);
      return e.getBigUint64 ? (t = e.getBigUint64(0)) < Number.MAX_SAFE_INTEGER ? Number(t) : t : 0x100000000 * e.getUint32(0) + e.getUint32(4);
    };
    if (S = {
      avc1: [],
      avcC: [],
      btrt: [],
      dinf: [],
      dref: [],
      esds: [],
      ftyp: [],
      hdlr: [],
      mdat: [],
      mdhd: [],
      mdia: [],
      mfhd: [],
      minf: [],
      moof: [],
      moov: [],
      mp4a: [],
      mvex: [],
      mvhd: [],
      pasp: [],
      sdtp: [],
      smhd: [],
      stbl: [],
      stco: [],
      stsc: [],
      stsd: [],
      stsz: [],
      stts: [],
      styp: [],
      tfdt: [],
      tfhd: [],
      traf: [],
      trak: [],
      trun: [],
      trex: [],
      tkhd: [],
      vmhd: []
    }, "undefined" != typeof Uint8Array) {
      for (var H in S) S.hasOwnProperty(H) && (S[H] = [H.charCodeAt(0), H.charCodeAt(1), H.charCodeAt(2), H.charCodeAt(3)]);
      w = new Uint8Array([105, 115, 111, 109]);
      C = new Uint8Array([97, 118, 99, 49]);
      E = new Uint8Array([0, 0, 0, 1]);
      k = {
        video: ee = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 118, 105, 100, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 105, 100, 101, 111, 72, 97, 110, 100, 108, 101, 114, 0]),
        audio: ei = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0])
      };
      A = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1]);
      I = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]);
      L = D = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]);
      P = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
      O = D;
      x = new Uint8Array([0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0]);
    }
    function V(e, t) {
      var i = et();
      i.dataOffset = t;
      i.compositionTimeOffset = e.pts - e.dts;
      i.duration = e.duration;
      i.size = 4 * e.length;
      i.size += e.byteLength;
      e.keyFrame && (i.flags.dependsOn = 2, i.flags.isNonSyncSample = 0);
      return i;
    }
    function $(e) {
      for (var t = []; e--;) t.push(0);
      return t;
    }
    function z(e) {
      e = e || {};
      z.prototype.init.call(this);
      this.parse708captions_ = "boolean" != typeof e.parse708captions || e.parse708captions;
      this.captionPackets_ = [];
      this.ccStreams_ = [new ev(0, 0), new ev(0, 1), new ev(1, 0), new ev(1, 1)];
      this.parse708captions_ && (this.cc708Stream_ = new eg({
        captionServices: e.captionServices
      }));
      this.reset();
      this.ccStreams_.forEach(function (e) {
        e.on("data", this.trigger.bind(this, "data"));
        e.on("partialdone", this.trigger.bind(this, "partialdone"));
        e.on("done", this.trigger.bind(this, "done"));
      }, this);
      this.parse708captions_ && (this.cc708Stream_.on("data", this.trigger.bind(this, "data")), this.cc708Stream_.on("partialdone", this.trigger.bind(this, "partialdone")), this.cc708Stream_.on("done", this.trigger.bind(this, "done")));
    }
    function W(e) {
      return 32 <= e && e <= 127 || 160 <= e && e <= 255;
    }
    function G(e) {
      this.windowNum = e;
      this.reset();
    }
    function X(e, t, i) {
      this.serviceNum = e;
      this.text = "";
      this.currentWindow = new G(-1);
      this.windows = [];
      this.stream = i;
      "string" == typeof t && this.createTextDecoder(t);
    }
    function K(e) {
      return null === e ? "" : String.fromCharCode(e = ef[e] || e);
    }
    function Y() {
      for (e = [], t = ey + 1, void 0; t--;) {
        var e;
        var t;
        e.push({
          text: "",
          indent: 0,
          offset: 0
        });
      }
      return e;
    }
    function Q(e, t) {
      var i = 1;
      for (t < e && (i = -1); Math.abs(t - e) > ew;) e += i * eS;
      return e;
    }
    function J(e) {
      var t;
      var i;
      J.prototype.init.call(this);
      this.type_ = e || "shared";
      this.push = function (e) {
        "metadata" === e.type ? this.trigger("data", e) : "shared" !== this.type_ && e.type !== this.type_ || (void 0 === i && (i = e.dts), e.dts = Q(e.dts, i), e.pts = Q(e.pts, i), t = e.dts, this.trigger("data", e));
      };
      this.flush = function () {
        i = t;
        this.trigger("done");
      };
      this.endTimeline = function () {
        this.flush();
        this.trigger("endedtimeline");
      };
      this.discontinuity = function () {
        t = i = void 0;
      };
      this.reset = function () {
        this.discontinuity();
        this.trigger("reset");
      };
    }
    t = function (e) {
      for (i = [], s = 0, r = 1, void 0; r < $$arguments.length; r++) {
        var t;
        var i;
        var s;
        var r;
        i.push($$arguments[r]);
      }
      for (r = i.length; r--;) s += i[r].byteLength;
      for (new DataView((t = new Uint8Array(s + 8)).buffer, t.byteOffset, t.byteLength).setUint32(0, t.byteLength), t.set(e, 4), r = 0, s = 8; r < i.length; r++) {
        t.set(i[r], s);
        s += i[r].byteLength;
      }
      return t;
    };
    s = function () {
      return t(S.dinf, t(S.dref, A));
    };
    r = function (e) {
      return t(S.esds, new Uint8Array([0, 0, 0, 0, 3, 25, 0, 0, 0, 4, 17, 64, 21, 0, 6, 0, 0, 0, 218, 192, 0, 0, 218, 192, 5, 2, e.audioobjecttype << 3 | e.samplingfrequencyindex >>> 1, e.samplingfrequencyindex << 7 | e.channelcount << 3, 6, 1, 2]));
    };
    g = function (e) {
      return t(S.hdlr, k[e]);
    };
    m = function (e) {
      var i = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 3, 0, 1, 95, 144, e.duration >>> 24 & 255, e.duration >>> 16 & 255, e.duration >>> 8 & 255, 255 & e.duration, 85, 196, 0, 0]);
      e.samplerate && (i[12] = e.samplerate >>> 24 & 255, i[13] = e.samplerate >>> 16 & 255, i[14] = e.samplerate >>> 8 & 255, i[15] = 255 & e.samplerate);
      return t(S.mdhd, i);
    };
    p = function (e) {
      return t(S.mdia, m(e), g(e.type), o(e));
    };
    a = function (e) {
      return t(S.mfhd, new Uint8Array([0, 0, 0, 0, (0xff000000 & e) >> 24, (0xff0000 & e) >> 16, (65280 & e) >> 8, 255 & e]));
    };
    o = function (e) {
      return t(S.minf, "video" === e.type ? t(S.vmhd, x) : t(S.smhd, I), s(), y(e));
    };
    h = function (e) {
      for (i = e.length, s = [], void 0; i--;) {
        var i;
        var s;
        s[i] = b(e[i]);
      }
      return t.apply(null, [S.mvex].concat(s));
    };
    d = function (e) {
      e = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 1, 95, 144, (0xff000000 & e) >> 24, (0xff0000 & e) >> 16, (65280 & e) >> 8, 255 & e, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255]);
      return t(S.mvhd, e);
    };
    f = function (e) {
      for (s = e.samples || [], r = new Uint8Array(4 + s.length), n = 0, void 0; n < s.length; n++) {
        var i;
        var s;
        var r;
        var n;
        i = s[n].flags;
        r[n + 4] = i.dependsOn << 4 | i.isDependedOn << 2 | i.hasRedundancy;
      }
      return t(S.sdtp, r);
    };
    y = function (e) {
      return t(S.stbl, _(e), t(S.stts, O), t(S.stsc, L), t(S.stsz, P), t(S.stco, D));
    };
    _ = function (e) {
      return t(S.stsd, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1]), ("video" === e.type ? N : R)(e));
    };
    N = function (e) {
      for (r = e.sps || [], n = e.pps || [], a = [], o = [], l = 0, void 0; l < r.length; l++) {
        var i;
        var s;
        var r;
        var n;
        var a;
        var o;
        var l;
        a.push((65280 & r[l].byteLength) >>> 8);
        a.push(255 & r[l].byteLength);
        a = a.concat(Array.prototype.slice.call(r[l]));
      }
      for (l = 0; l < n.length; l++) {
        o.push((65280 & n[l].byteLength) >>> 8);
        o.push(255 & n[l].byteLength);
        o = o.concat(Array.prototype.slice.call(n[l]));
      }
      i = [S.avc1, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, (65280 & e.width) >> 8, 255 & e.width, (65280 & e.height) >> 8, 255 & e.height, 0, 72, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 1, 19, 118, 105, 100, 101, 111, 106, 115, 45, 99, 111, 110, 116, 114, 105, 98, 45, 104, 108, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 17, 17]), t(S.avcC, new Uint8Array([1, e.profileIdc, e.profileCompatibility, e.levelIdc, 255].concat([r.length], a, [n.length], o))), t(S.btrt, new Uint8Array([0, 28, 156, 128, 0, 45, 198, 192, 0, 45, 198, 192]))];
      e.sarRatio && (s = e.sarRatio[0], e = e.sarRatio[1], i.push(t(S.pasp, new Uint8Array([(0xff000000 & s) >> 24, (0xff0000 & s) >> 16, (65280 & s) >> 8, 255 & s, (0xff000000 & e) >> 24, (0xff0000 & e) >> 16, (65280 & e) >> 8, 255 & e]))));
      return t.apply(null, i);
    };
    R = function (e) {
      return t(S.mp4a, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, (65280 & e.channelcount) >> 8, 255 & e.channelcount, (65280 & e.samplesize) >> 8, 255 & e.samplesize, 0, 0, 0, 0, (65280 & e.samplerate) >> 8, 255 & e.samplerate, 0, 0]), r(e));
    };
    c = function (e) {
      e = new Uint8Array([0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, (0xff000000 & e.id) >> 24, (0xff0000 & e.id) >> 16, (65280 & e.id) >> 8, 255 & e.id, 0, 0, 0, 0, (0xff000000 & e.duration) >> 24, (0xff0000 & e.duration) >> 16, (65280 & e.duration) >> 8, 255 & e.duration, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, (65280 & e.width) >> 8, 255 & e.width, 0, 0, (65280 & e.height) >> 8, 255 & e.height, 0, 0]);
      return t(S.tkhd, e);
    };
    v = function (e) {
      var i;
      var s = t(S.tfhd, new Uint8Array([0, 0, 0, 58, (0xff000000 & e.id) >> 24, (0xff0000 & e.id) >> 16, (65280 & e.id) >> 8, 255 & e.id, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]));
      var r = Math.floor(e.baseMediaDecodeTime / 0x100000000);
      var n = Math.floor(e.baseMediaDecodeTime % 0x100000000);
      var r = t(S.tfdt, new Uint8Array([1, 0, 0, 0, r >>> 24 & 255, r >>> 16 & 255, r >>> 8 & 255, 255 & r, n >>> 24 & 255, n >>> 16 & 255, n >>> 8 & 255, 255 & n]));
      return "audio" === e.type ? (i = T(e, 92), t(S.traf, s, r, i)) : (n = f(e), i = T(e, n.length + 92), t(S.traf, s, r, i, n));
    };
    u = function (e) {
      e.duration = e.duration || 0xffffffff;
      return t(S.trak, c(e), p(e));
    };
    b = function (e) {
      var i = new Uint8Array([0, 0, 0, 0, (0xff000000 & e.id) >> 24, (0xff0000 & e.id) >> 16, (65280 & e.id) >> 8, 255 & e.id, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1]);
      "video" !== e.type && (i[i.length - 1] = 0);
      return t(S.trex, i);
    };
    M = function (e, t) {
      var i = 0;
      var s = 0;
      var r = 0;
      var n = 0;
      e.length && (void 0 !== e[0].duration && (i = 1), void 0 !== e[0].size && (s = 2), void 0 !== e[0].flags && (r = 4), void 0 !== e[0].compositionTimeOffset) && (n = 8);
      return [0, 0, i | s | r | n, 1, (0xff000000 & e.length) >>> 24, (0xff0000 & e.length) >>> 16, (65280 & e.length) >>> 8, 255 & e.length, (0xff000000 & t) >>> 24, (0xff0000 & t) >>> 16, (65280 & t) >>> 8, 255 & t];
    };
    U = function (e, i) {
      var s;
      var r;
      var n;
      var a;
      var o = e.samples || [];
      for (i += 20 + 16 * o.length, (r = new Uint8Array((e = M(o, i)).length + 16 * o.length)).set(e), s = e.length, a = 0; a < o.length; a++) {
        n = o[a];
        r[s++] = (0xff000000 & n.duration) >>> 24;
        r[s++] = (0xff0000 & n.duration) >>> 16;
        r[s++] = (65280 & n.duration) >>> 8;
        r[s++] = 255 & n.duration;
        r[s++] = (0xff000000 & n.size) >>> 24;
        r[s++] = (0xff0000 & n.size) >>> 16;
        r[s++] = (65280 & n.size) >>> 8;
        r[s++] = 255 & n.size;
        r[s++] = n.flags.isLeading << 2 | n.flags.dependsOn;
        r[s++] = n.flags.isDependedOn << 6 | n.flags.hasRedundancy << 4 | n.flags.paddingValue << 1 | n.flags.isNonSyncSample;
        r[s++] = 61440 & n.flags.degradationPriority;
        r[s++] = 15 & n.flags.degradationPriority;
        r[s++] = (0xff000000 & n.compositionTimeOffset) >>> 24;
        r[s++] = (0xff0000 & n.compositionTimeOffset) >>> 16;
        r[s++] = (65280 & n.compositionTimeOffset) >>> 8;
        r[s++] = 255 & n.compositionTimeOffset;
      }
      return t(S.trun, r);
    };
    B = function (e, i) {
      var s;
      var r;
      var n;
      var a;
      var o = e.samples || [];
      for (i += 20 + 8 * o.length, (s = new Uint8Array((e = M(o, i)).length + 8 * o.length)).set(e), r = e.length, a = 0; a < o.length; a++) {
        n = o[a];
        s[r++] = (0xff000000 & n.duration) >>> 24;
        s[r++] = (0xff0000 & n.duration) >>> 16;
        s[r++] = (65280 & n.duration) >>> 8;
        s[r++] = 255 & n.duration;
        s[r++] = (0xff000000 & n.size) >>> 24;
        s[r++] = (0xff0000 & n.size) >>> 16;
        s[r++] = (65280 & n.size) >>> 8;
        s[r++] = 255 & n.size;
      }
      return t(S.trun, s);
    };
    T = function (e, t) {
      return ("audio" === e.type ? B : U)(e, t);
    };
    var Z;
    var ee = {
      ftyp: n = function () {
        return t(S.ftyp, w, E, w, C);
      },
      mdat: function (e) {
        return t(S.mdat, e);
      },
      moof: function (e, i) {
        for (s = [], r = i.length, void 0; r--;) {
          var s;
          var r;
          s[r] = v(i[r]);
        }
        return t.apply(null, [S.moof, a(e)].concat(s));
      },
      moov: l = function (e) {
        for (i = e.length, s = [], void 0; i--;) {
          var i;
          var s;
          s[i] = u(e[i]);
        }
        return t.apply(null, [S.moov, d(0xffffffff)].concat(s).concat(h(e)));
      },
      initSegment: function (e) {
        var t = n();
        var e = l(e);
        var i = new Uint8Array(t.byteLength + e.byteLength);
        i.set(t);
        i.set(e, t.byteLength);
        return i;
      }
    };
    var et = function () {
      return {
        size: 0,
        flags: {
          isLeading: 0,
          dependsOn: 1,
          isDependedOn: 0,
          hasRedundancy: 0,
          degradationPriority: 0,
          isNonSyncSample: 1
        }
      };
    };
    var ei = {
      groupNalsIntoFrames: function (e) {
        var t;
        var i;
        var s = [];
        var r = [];
        for (r.byteLength = 0, r.nalCount = 0, t = s.byteLength = r.duration = 0; t < e.length; t++) "access_unit_delimiter_rbsp" === (i = e[t]).nalUnitType ? (s.length && (s.duration = i.dts - s.dts, r.byteLength += s.byteLength, r.nalCount += s.length, r.duration += s.duration, r.push(s)), (s = [i]).byteLength = i.data.byteLength, s.pts = i.pts, s.dts = i.dts) : ("slice_layer_without_partitioning_rbsp_idr" === i.nalUnitType && (s.keyFrame = !0), s.duration = i.dts - s.dts, s.byteLength += i.data.byteLength, s.push(i));
        r.length && (!s.duration || s.duration <= 0) && (s.duration = r[r.length - 1].duration);
        r.byteLength += s.byteLength;
        r.nalCount += s.length;
        r.duration += s.duration;
        r.push(s);
        return r;
      },
      groupFramesIntoGops: function (e) {
        var t;
        var i;
        var s = [];
        var r = [];
        for (s.byteLength = 0, s.nalCount = 0, s.duration = 0, s.pts = e[0].pts, s.dts = e[0].dts, r.byteLength = 0, r.nalCount = 0, r.duration = 0, r.pts = e[0].pts, r.dts = e[0].dts, t = 0; t < e.length; t++) (i = e[t]).keyFrame ? (s.length && (r.push(s), r.byteLength += s.byteLength, r.nalCount += s.nalCount, r.duration += s.duration), (s = [i]).nalCount = i.length, s.byteLength = i.byteLength, s.pts = i.pts, s.dts = i.dts, s.duration = i.duration) : (s.duration += i.duration, s.nalCount += i.length, s.byteLength += i.byteLength, s.push(i));
        r.length && s.duration <= 0 && (s.duration = r[r.length - 1].duration);
        r.byteLength += s.byteLength;
        r.nalCount += s.nalCount;
        r.duration += s.duration;
        r.push(s);
        return r;
      },
      extendFirstKeyFrame: function (e) {
        var t;
        !e[0][0].keyFrame && 1 < e.length && (t = e.shift(), e.byteLength -= t.byteLength, e.nalCount -= t.nalCount, e[0][0].dts = t.dts, e[0][0].pts = t.pts, e[0][0].duration += t.duration);
        return e;
      },
      generateSampleTable: function (e, t) {
        for (n = t || 0, a = [], o = 0, void 0; o < e.length; o++) {
          var i;
          var s;
          var r;
          var n;
          var a;
          var o;
          for (s = e[o], i = 0; i < s.length; i++) {
            r = s[i];
            n += (r = V(r, n)).size;
            a.push(r);
          }
        }
        return a;
      },
      concatenateNalData: function (e) {
        for (a = 0, o = e.byteLength, l = e.nalCount, h = new Uint8Array(o + 4 * l), d = new DataView(h.buffer), u = 0, void 0; u < e.length; u++) {
          var t;
          var i;
          var s;
          var r;
          var n;
          var a;
          var o;
          var l;
          var h;
          var d;
          var u;
          for (s = e[u], t = 0; t < s.length; t++) for (r = s[t], i = 0; i < r.length; i++) {
            n = r[i];
            d.setUint32(a, n.data.byteLength);
            h.set(n.data, a += 4);
            a += n.data.byteLength;
          }
        }
        return h;
      },
      generateSampleTableForFrame: function (e, t) {
        var i = [];
        var e = V(e, t || 0);
        i.push(e);
        return i;
      },
      concatenateNalDataForFrame: function (e) {
        for (i = 0, s = e.byteLength, r = e.length, n = new Uint8Array(s + 4 * r), a = new DataView(n.buffer), o = 0, void 0; o < e.length; o++) {
          var t;
          var i;
          var s;
          var r;
          var n;
          var a;
          var o;
          t = e[o];
          a.setUint32(i, t.data.byteLength);
          n.set(t.data, i += 4);
          i += t.data.byteLength;
        }
        return n;
      }
    };
    var es = [33, 16, 5, 32, 164, 27];
    var er = [33, 65, 108, 84, 1, 2, 4, 8, 168, 2, 4, 8, 17, 191, 252];
    var en = function (e) {
      return 9e4 * e;
    };
    var ea = function (e, t) {
      return e * t;
    };
    var eo = function (e) {
      return e / 9e4;
    };
    var el = function (e, t) {
      return e / t;
    };
    var eh = {
      ONE_SECOND_IN_TS: 9e4,
      secondsToVideoTs: en,
      videoTsToSeconds: eo,
      audioTsToVideoTs: function (e, t) {
        return e / t * 9e4;
      },
      videoTsToAudioTs: function (e, t) {
        return e / 9e4 * t;
      },
      metadataTsToSeconds: function (e, t, i) {
        return eo(i ? e : e - t);
      }
    };
    var ed = function () {
      var e;
      Z || (Z = Object.keys(e = {
        96e3: [es, [227, 64], $(154), [56]],
        88200: [es, [231], $(170), [56]],
        64e3: [es, [248, 192], $(240), [56]],
        48e3: [es, [255, 192], $(268), [55, 148, 128], $(54), [112]],
        44100: [es, [255, 192], $(268), [55, 163, 128], $(84), [112]],
        32e3: [es, [255, 192], $(268), [55, 234], $(226), [112]],
        24e3: [es, [255, 192], $(268), [55, 255, 128], $(268), [111, 112], $(126), [224]],
        16e3: [es, [255, 192], $(268), [55, 255, 128], $(268), [111, 255], $(269), [223, 108], $(195), [1, 192]],
        12e3: [er, $(268), [3, 127, 248], $(268), [6, 255, 240], $(268), [13, 255, 224], $(268), [27, 253, 128], $(259), [56]],
        11025: [er, $(268), [3, 127, 248], $(268), [6, 255, 240], $(268), [13, 255, 224], $(268), [27, 255, 192], $(268), [55, 175, 128], $(108), [112]],
        8e3: [er, $(268), [3, 121, 16], $(47), [7]]
      }).reduce(function (t, i) {
        t[i] = new Uint8Array(e[i].reduce(function (e, t) {
          return e.concat(t);
        }, []));
        return t;
      }, {}));
      return Z;
    };
    var en = {
      prefixWithSilence: function (e, t, i, s) {
        var r;
        var n;
        var a;
        var o;
        var l;
        var h = 0;
        var d = 0;
        if (t.length && (n = eh.audioTsToVideoTs(e.baseMediaDecodeTime, e.samplerate), r = Math.ceil(eh.ONE_SECOND_IN_TS / (e.samplerate / 1024)), i && s && (n -= Math.max(i, s), d = (h = Math.floor(n / r)) * r), !(h < 1 || d > eh.ONE_SECOND_IN_TS / 2))) {
          for (a = (a = ed()[e.samplerate]) || t[0].data, o = 0; o < h; o++) {
            l = t[0];
            t.splice(0, 0, {
              data: a,
              dts: l.dts - r,
              pts: l.pts - r
            });
          }
          e.baseMediaDecodeTime -= Math.floor(eh.videoTsToAudioTs(d, e.samplerate));
          return d;
        }
      },
      trimAdtsFramesByEarliestDts: function (e, t, i) {
        return t.minSegmentDts >= i ? e : (t.minSegmentDts = 1 / 0, e.filter(function (e) {
          return e.dts >= i && (t.minSegmentDts = Math.min(t.minSegmentDts, e.dts), t.minSegmentPts = t.minSegmentDts, !0);
        }));
      },
      generateSampleTable: function (e) {
        for (t = [], i = 0, void 0; i < e.length; i++) {
          var t;
          var i;
          t.push({
            size: e[i].data.byteLength,
            duration: 1024
          });
        }
        return t;
      },
      concatenateFrameData: function (e) {
        for (i = 0, s = new Uint8Array(function (e) {
          for (t = 0, i = 0, void 0; i < e.length; i++) {
            var t;
            var i;
            t += e[i].data.byteLength;
          }
          return t;
        }(e)), r = 0, void 0; r < e.length; r++) {
          var t;
          var i;
          var s;
          var r;
          t = e[r];
          s.set(t.data, i);
          i += t.data.byteLength;
        }
        return s;
      }
    };
    var eu = eh.ONE_SECOND_IN_TS;
    var ea = {
      clearDtsInfo: function (e) {
        delete e.minSegmentDts;
        delete e.maxSegmentDts;
        delete e.minSegmentPts;
        delete e.maxSegmentPts;
      },
      calculateTrackBaseMediaDecodeTime: function (e, t) {
        var i = e.minSegmentDts;
        t || (i -= e.timelineStartInfo.dts);
        t = Math.max(0, t = e.timelineStartInfo.baseMediaDecodeTime + i);
        "audio" === e.type && (t *= e.samplerate / eu, t = Math.floor(t));
        return t;
      },
      collectDtsInfo: function (e, t) {
        "number" == typeof t.pts && (void 0 === e.timelineStartInfo.pts && (e.timelineStartInfo.pts = t.pts), void 0 === e.minSegmentPts ? e.minSegmentPts = t.pts : e.minSegmentPts = Math.min(e.minSegmentPts, t.pts), void 0 === e.maxSegmentPts ? e.maxSegmentPts = t.pts : e.maxSegmentPts = Math.max(e.maxSegmentPts, t.pts));
        "number" == typeof t.dts && (void 0 === e.timelineStartInfo.dts && (e.timelineStartInfo.dts = t.dts), void 0 === e.minSegmentDts ? e.minSegmentDts = t.dts : e.minSegmentDts = Math.min(e.minSegmentDts, t.dts), void 0 === e.maxSegmentDts ? e.maxSegmentDts = t.dts : e.maxSegmentDts = Math.max(e.maxSegmentDts, t.dts));
      }
    };
    var el = {
      parseSei: function (e) {
        for (t = 0, i = {
          payloadType: -1,
          payloadSize: 0
        }, s = 0, r = 0, void 0; t < e.byteLength && 128 !== e[t];) {
          var t;
          var i;
          var s;
          var r;
          for (; 255 === e[t];) {
            s += 255;
            t++;
          }
          for (s += e[t++]; 255 === e[t];) {
            r += 255;
            t++;
          }
          if (r += e[t++], !i.payload && 4 === s) {
            if ("GA94" === String.fromCharCode(e[t + 3], e[t + 4], e[t + 5], e[t + 6])) {
              i.payloadType = s;
              i.payloadSize = r;
              i.payload = e.subarray(t, t + r);
              break;
            }
            i.payload = void 0;
          }
          t += r;
          r = s = 0;
        }
        return i;
      },
      parseUserData: function (e) {
        return 181 !== e.payload[0] || 49 != (e.payload[1] << 8 | e.payload[2]) || "GA94" !== String.fromCharCode(e.payload[3], e.payload[4], e.payload[5], e.payload[6]) || 3 !== e.payload[7] ? null : e.payload.subarray(8, e.payload.length - 1);
      },
      parseCaptionPackets: function (e, t) {
        var i;
        var s;
        var r;
        var n;
        var a = [];
        if (64 & t[0]) for (s = 31 & t[0], i = 0; i < s; i++) {
          n = {
            type: 3 & t[2 + (r = 3 * i)],
            pts: e
          };
          4 & t[2 + r] && (n.ccData = t[3 + r] << 8 | t[4 + r], a.push(n));
        }
        return a;
      },
      discardEmulationPreventionBytes: function (e) {
        for (t = e.byteLength, i = [], s = 1, void 0; s < t - 2;) {
          var t;
          var i;
          var s;
          0 === e[s] && 0 === e[s + 1] && 3 === e[s + 2] ? (i.push(s + 2), s += 2) : s++;
        }
        if (0 === i.length) return e;
        for (r = t - i.length, n = new Uint8Array(r), a = 0, s = 0, void 0; s < r; a++, s++) {
          var r;
          var n;
          var a;
          var s;
          a === i[0] && (a++, i.shift());
          n[s] = e[a];
        }
        return n;
      },
      USER_DATA_REGISTERED_ITU_T_T35: 4
    };
    var ec = q;
    var ep = el;
    (z.prototype = new ec()).push = function (e) {
      var t;
      "sei_rbsp" === e.nalUnitType && (t = ep.parseSei(e.escapedRBSP)).payload && t.payloadType === ep.USER_DATA_REGISTERED_ITU_T_T35 && (t = ep.parseUserData(t)) && (e.dts < this.latestDts_ ? this.ignoreNextEqualDts_ = !0 : e.dts === this.latestDts_ && this.ignoreNextEqualDts_ ? (this.numSameDts_--, this.numSameDts_ || (this.ignoreNextEqualDts_ = !1)) : (t = ep.parseCaptionPackets(e.pts, t), this.captionPackets_ = this.captionPackets_.concat(t), this.latestDts_ !== e.dts && (this.numSameDts_ = 0), this.numSameDts_++, this.latestDts_ = e.dts));
    };
    z.prototype.flushCCStreams = function (e) {
      this.ccStreams_.forEach(function (t) {
        return "flush" === e ? t.flush() : t.partialFlush();
      }, this);
    };
    z.prototype.flushStream = function (e) {
      this.captionPackets_.length && (this.captionPackets_.forEach(function (e, t) {
        e.presortIndex = t;
      }), this.captionPackets_.sort(function (e, t) {
        return e.pts === t.pts ? e.presortIndex - t.presortIndex : e.pts - t.pts;
      }), this.captionPackets_.forEach(function (e) {
        e.type < 2 ? this.dispatchCea608Packet(e) : this.dispatchCea708Packet(e);
      }, this), this.captionPackets_.length = 0);
      this.flushCCStreams(e);
    };
    z.prototype.flush = function () {
      return this.flushStream("flush");
    };
    z.prototype.partialFlush = function () {
      return this.flushStream("partialFlush");
    };
    z.prototype.reset = function () {
      this.latestDts_ = null;
      this.ignoreNextEqualDts_ = !1;
      this.numSameDts_ = 0;
      this.activeCea608Channel_ = [null, null];
      this.ccStreams_.forEach(function (e) {
        e.reset();
      });
    };
    z.prototype.dispatchCea608Packet = function (e) {
      this.setsTextOrXDSActive(e) ? this.activeCea608Channel_[e.type] = null : this.setsChannel1Active(e) ? this.activeCea608Channel_[e.type] = 0 : this.setsChannel2Active(e) && (this.activeCea608Channel_[e.type] = 1);
      null !== this.activeCea608Channel_[e.type] && this.ccStreams_[(e.type << 1) + this.activeCea608Channel_[e.type]].push(e);
    };
    z.prototype.setsChannel1Active = function (e) {
      return 4096 == (30720 & e.ccData);
    };
    z.prototype.setsChannel2Active = function (e) {
      return 6144 == (30720 & e.ccData);
    };
    z.prototype.setsTextOrXDSActive = function (e) {
      return 256 == (28928 & e.ccData) || 4138 == (30974 & e.ccData) || 6186 == (30974 & e.ccData);
    };
    z.prototype.dispatchCea708Packet = function (e) {
      this.parse708captions_ && this.cc708Stream_.push(e);
    };
    var em = {
      127: 9834,
      4128: 32,
      4129: 160,
      4133: 8230,
      4138: 352,
      4140: 338,
      4144: 9608,
      4145: 8216,
      4146: 8217,
      4147: 8220,
      4148: 8221,
      4149: 8226,
      4153: 8482,
      4154: 353,
      4156: 339,
      4157: 8480,
      4159: 376,
      4214: 8539,
      4215: 8540,
      4216: 8541,
      4217: 8542,
      4218: 9168,
      4219: 9124,
      4220: 9123,
      4221: 9135,
      4222: 9126,
      4223: 9121,
      4256: 12600
    };
    G.prototype.reset = function () {
      this.clearText();
      this.pendingNewLine = !1;
      this.winAttr = {};
      this.penAttr = {};
      this.penLoc = {};
      this.penColor = {};
      this.visible = 0;
      this.rowLock = 0;
      this.columnLock = 0;
      this.priority = 0;
      this.relativePositioning = 0;
      this.anchorVertical = 0;
      this.anchorHorizontal = 0;
      this.anchorPoint = 0;
      this.rowCount = 1;
      this.virtualRowCount = this.rowCount + 1;
      this.columnCount = 41;
      this.windowStyle = 0;
      this.penStyle = 0;
    };
    G.prototype.getText = function () {
      return this.rows.join("\n");
    };
    G.prototype.clearText = function () {
      this.rows = [""];
      this.rowIdx = 0;
    };
    G.prototype.newLine = function (e) {
      for (this.rows.length >= this.virtualRowCount && "function" == typeof this.beforeRowOverflow && this.beforeRowOverflow(e), 0 < this.rows.length && (this.rows.push(""), this.rowIdx++); this.rows.length > this.virtualRowCount;) {
        this.rows.shift();
        this.rowIdx--;
      }
    };
    G.prototype.isEmpty = function () {
      return 0 === this.rows.length || 1 === this.rows.length && "" === this.rows[0];
    };
    G.prototype.addText = function (e) {
      this.rows[this.rowIdx] += e;
    };
    G.prototype.backspace = function () {
      var e;
      this.isEmpty() || (e = this.rows[this.rowIdx], this.rows[this.rowIdx] = e.substr(0, e.length - 1));
    };
    X.prototype.init = function (e, t) {
      this.startPts = e;
      for (var i = 0; i < 8; i++) {
        this.windows[i] = new G(i);
        "function" == typeof t && (this.windows[i].beforeRowOverflow = t);
      }
    };
    X.prototype.setCurrentWindow = function (e) {
      this.currentWindow = this.windows[e];
    };
    X.prototype.createTextDecoder = function (e) {
      if ("undefined" == typeof TextDecoder) this.stream.trigger("log", {
        level: "warn",
        message: "The `encoding` option is unsupported without TextDecoder support"
      }); else try {
        this.textDecoder_ = new TextDecoder(e);
      } catch (t) {
        this.stream.trigger("log", {
          level: "warn",
          message: "TextDecoder could not be created with " + e + " encoding. " + t
        });
      }
    };
    var eg = function (e) {
      e = e || {};
      eg.prototype.init.call(this);
      var t;
      var i = this;
      var s = e.captionServices || {};
      var r = {};
      Object.keys(s).forEach(e => {
        t = s[e];
        /^SERVICE/.test(e) && (r[e] = t.encoding);
      });
      this.serviceEncodings = r;
      this.current708Packet = null;
      this.services = {};
      this.push = function (e) {
        (3 === e.type || null === i.current708Packet) && i.new708Packet();
        i.add708Bytes(e);
      };
    };
    eg.prototype = new ec();
    eg.prototype.new708Packet = function () {
      null !== this.current708Packet && this.push708Packet();
      this.current708Packet = {
        data: [],
        ptsVals: []
      };
    };
    eg.prototype.add708Bytes = function (e) {
      var t = e.ccData;
      var i = t >>> 8;
      var t = 255 & t;
      this.current708Packet.ptsVals.push(e.pts);
      this.current708Packet.data.push(i);
      this.current708Packet.data.push(t);
    };
    eg.prototype.push708Packet = function () {
      var e;
      var t = this.current708Packet;
      var i = t.data;
      var s = null;
      var r = 0;
      var n = i[r++];
      for (t.seq = n >> 6, t.sizeCode = 63 & n; r < i.length; r++) {
        e = 31 & (n = i[r++]);
        7 == (s = n >> 5) && 0 < e && (s = i[r++]);
        this.pushServiceBlock(s, r, e);
        0 < e && (r += e - 1);
      }
    };
    eg.prototype.pushServiceBlock = function (e, t, i) {
      for (r = t, n = this.current708Packet.data, a = (a = this.services[e]) || this.initService(e, r), void 0; r < t + i && r < n.length; r++) {
        var s;
        var r;
        var n;
        var a;
        W(s = n[r]) ? r = this.handleText(r, a) : 24 === s ? r = this.multiByteCharacter(r, a) : 16 === s ? r = this.extendedCommands(r, a) : 128 <= s && s <= 135 ? r = this.setCurrentWindow(r, a) : 152 <= s && s <= 159 ? r = this.defineWindow(r, a) : 136 === s ? r = this.clearWindows(r, a) : 140 === s ? r = this.deleteWindows(r, a) : 137 === s ? r = this.displayWindows(r, a) : 138 === s ? r = this.hideWindows(r, a) : 139 === s ? r = this.toggleWindows(r, a) : 151 === s ? r = this.setWindowAttributes(r, a) : 144 === s ? r = this.setPenAttributes(r, a) : 145 === s ? r = this.setPenColor(r, a) : 146 === s ? r = this.setPenLocation(r, a) : 143 === s ? a = this.reset(r, a) : 8 === s ? a.currentWindow.backspace() : 12 === s ? a.currentWindow.clearText() : 13 === s ? a.currentWindow.pendingNewLine = !0 : 14 === s ? a.currentWindow.clearText() : 141 === s && r++;
      }
    };
    eg.prototype.extendedCommands = function (e, t) {
      return e = W(this.current708Packet.data[++e]) ? this.handleText(e, t, {
        isExtended: !0
      }) : e;
    };
    eg.prototype.getPts = function (e) {
      return this.current708Packet.ptsVals[Math.floor(e / 2)];
    };
    eg.prototype.initService = function (e, t) {
      var i;
      var s = "SERVICE" + e;
      var r = this;
      s in this.serviceEncodings && (i = this.serviceEncodings[s]);
      this.services[e] = new X(e, i, r);
      this.services[e].init(this.getPts(t), function (t) {
        r.flushDisplayed(t, r.services[e]);
      });
      return this.services[e];
    };
    eg.prototype.handleText = function (e, t, i) {
      var s;
      var r = i && i.isExtended;
      var i = i && i.isMultiByte;
      var n = this.current708Packet.data;
      var a = r ? 4096 : 0;
      var o = n[e];
      var n = n[e + 1];
      var l = t.currentWindow;
      i ? (s = [o, n], e++) : s = [o];
      i = t.textDecoder_ && !r ? t.textDecoder_.decode(new Uint8Array(s)) : i ? String.fromCharCode(parseInt(n = s.map(e => ("0" + (255 & e).toString(16)).slice(-2)).join(""), 16)) : (t = em[r = a | o] || r, 4096 & r && r === t ? "" : String.fromCharCode(t));
      l.pendingNewLine && !l.isEmpty() && l.newLine(this.getPts(e));
      l.pendingNewLine = !1;
      l.addText(i);
      return e;
    };
    eg.prototype.multiByteCharacter = function (e, t) {
      var i = this.current708Packet.data;
      var s = i[e + 1];
      var i = i[e + 2];
      return e = W(s) && W(i) ? this.handleText(++e, t, {
        isMultiByte: !0
      }) : e;
    };
    eg.prototype.setCurrentWindow = function (e, t) {
      var i = this.current708Packet.data[e];
      t.setCurrentWindow(7 & i);
      return e;
    };
    eg.prototype.defineWindow = function (e, t) {
      var i = this.current708Packet.data;
      var s = i[e];
      t.setCurrentWindow(7 & s);
      var t = t.currentWindow;
      var s = i[++e];
      t.visible = (32 & s) >> 5;
      t.rowLock = (16 & s) >> 4;
      t.columnLock = (8 & s) >> 3;
      t.priority = 7 & s;
      s = i[++e];
      t.relativePositioning = (128 & s) >> 7;
      t.anchorVertical = 127 & s;
      s = i[++e];
      t.anchorHorizontal = s;
      s = i[++e];
      t.anchorPoint = (240 & s) >> 4;
      t.rowCount = 15 & s;
      s = i[++e];
      t.columnCount = 63 & s;
      s = i[++e];
      t.windowStyle = (56 & s) >> 3;
      t.penStyle = 7 & s;
      t.virtualRowCount = t.rowCount + 1;
      return e;
    };
    eg.prototype.setWindowAttributes = function (e, t) {
      var i = this.current708Packet.data;
      i[e];
      var t = t.currentWindow.winAttr;
      var s = i[++e];
      t.fillOpacity = (192 & s) >> 6;
      t.fillRed = (48 & s) >> 4;
      t.fillGreen = (12 & s) >> 2;
      t.fillBlue = 3 & s;
      s = i[++e];
      t.borderType = (192 & s) >> 6;
      t.borderRed = (48 & s) >> 4;
      t.borderGreen = (12 & s) >> 2;
      t.borderBlue = 3 & s;
      s = i[++e];
      t.borderType += (128 & s) >> 5;
      t.wordWrap = (64 & s) >> 6;
      t.printDirection = (48 & s) >> 4;
      t.scrollDirection = (12 & s) >> 2;
      t.justify = 3 & s;
      s = i[++e];
      t.effectSpeed = (240 & s) >> 4;
      t.effectDirection = (12 & s) >> 2;
      t.displayEffect = 3 & s;
      return e;
    };
    eg.prototype.flushDisplayed = function (e, t) {
      for (i = [], s = 0, void 0; s < 8; s++) {
        var i;
        var s;
        t.windows[s].visible && !t.windows[s].isEmpty() && i.push(t.windows[s].getText());
      }
      t.endPts = e;
      t.text = i.join("\n\n");
      this.pushCaption(t);
      t.startPts = e;
    };
    eg.prototype.pushCaption = function (e) {
      "" !== e.text && (this.trigger("data", {
        startPts: e.startPts,
        endPts: e.endPts,
        text: e.text,
        stream: "cc708_" + e.serviceNum
      }), e.text = "", e.startPts = e.endPts);
    };
    eg.prototype.displayWindows = function (e, t) {
      var i = this.current708Packet.data[++e];
      var s = this.getPts(e);
      this.flushDisplayed(s, t);
      for (var r = 0; r < 8; r++) i & 1 << r && (t.windows[r].visible = 1);
      return e;
    };
    eg.prototype.hideWindows = function (e, t) {
      var i = this.current708Packet.data[++e];
      var s = this.getPts(e);
      this.flushDisplayed(s, t);
      for (var r = 0; r < 8; r++) i & 1 << r && (t.windows[r].visible = 0);
      return e;
    };
    eg.prototype.toggleWindows = function (e, t) {
      var i = this.current708Packet.data[++e];
      var s = this.getPts(e);
      this.flushDisplayed(s, t);
      for (var r = 0; r < 8; r++) i & 1 << r && (t.windows[r].visible ^= 1);
      return e;
    };
    eg.prototype.clearWindows = function (e, t) {
      var i = this.current708Packet.data[++e];
      var s = this.getPts(e);
      this.flushDisplayed(s, t);
      for (var r = 0; r < 8; r++) i & 1 << r && t.windows[r].clearText();
      return e;
    };
    eg.prototype.deleteWindows = function (e, t) {
      var i = this.current708Packet.data[++e];
      var s = this.getPts(e);
      this.flushDisplayed(s, t);
      for (var r = 0; r < 8; r++) i & 1 << r && t.windows[r].reset();
      return e;
    };
    eg.prototype.setPenAttributes = function (e, t) {
      var i = this.current708Packet.data;
      i[e];
      var t = t.currentWindow.penAttr;
      var s = i[++e];
      t.textTag = (240 & s) >> 4;
      t.offset = (12 & s) >> 2;
      t.penSize = 3 & s;
      s = i[++e];
      t.italics = (128 & s) >> 7;
      t.underline = (64 & s) >> 6;
      t.edgeType = (56 & s) >> 3;
      t.fontStyle = 7 & s;
      return e;
    };
    eg.prototype.setPenColor = function (e, t) {
      var i = this.current708Packet.data;
      i[e];
      var t = t.currentWindow.penColor;
      var s = i[++e];
      t.fgOpacity = (192 & s) >> 6;
      t.fgRed = (48 & s) >> 4;
      t.fgGreen = (12 & s) >> 2;
      t.fgBlue = 3 & s;
      s = i[++e];
      t.bgOpacity = (192 & s) >> 6;
      t.bgRed = (48 & s) >> 4;
      t.bgGreen = (12 & s) >> 2;
      t.bgBlue = 3 & s;
      s = i[++e];
      t.edgeRed = (48 & s) >> 4;
      t.edgeGreen = (12 & s) >> 2;
      t.edgeBlue = 3 & s;
      return e;
    };
    eg.prototype.setPenLocation = function (e, t) {
      var i = this.current708Packet.data;
      i[e];
      var s = t.currentWindow.penLoc;
      t.currentWindow.pendingNewLine = !0;
      t = i[++e];
      s.row = 15 & t;
      t = i[++e];
      s.column = 63 & t;
      return e;
    };
    eg.prototype.reset = function (e, t) {
      var i = this.getPts(e);
      this.flushDisplayed(i, t);
      return this.initService(t.serviceNum, e);
    };
    var ef = {
      42: 225,
      92: 233,
      94: 237,
      95: 243,
      96: 250,
      123: 231,
      124: 247,
      125: 209,
      126: 241,
      127: 9608,
      304: 174,
      305: 176,
      306: 189,
      307: 191,
      308: 8482,
      309: 162,
      310: 163,
      311: 9834,
      312: 224,
      313: 160,
      314: 232,
      315: 226,
      316: 234,
      317: 238,
      318: 244,
      319: 251,
      544: 193,
      545: 201,
      546: 211,
      547: 218,
      548: 220,
      549: 252,
      550: 8216,
      551: 161,
      552: 42,
      553: 39,
      554: 8212,
      555: 169,
      556: 8480,
      557: 8226,
      558: 8220,
      559: 8221,
      560: 192,
      561: 194,
      562: 199,
      563: 200,
      564: 202,
      565: 203,
      566: 235,
      567: 206,
      568: 207,
      569: 239,
      570: 212,
      571: 217,
      572: 249,
      573: 219,
      574: 171,
      575: 187,
      800: 195,
      801: 227,
      802: 205,
      803: 204,
      804: 236,
      805: 210,
      806: 242,
      807: 213,
      808: 245,
      809: 123,
      810: 125,
      811: 92,
      812: 94,
      813: 95,
      814: 124,
      815: 126,
      816: 196,
      817: 228,
      818: 214,
      819: 246,
      820: 223,
      821: 165,
      822: 164,
      823: 9474,
      824: 197,
      825: 229,
      826: 216,
      827: 248,
      828: 9484,
      829: 9488,
      830: 9492,
      831: 9496
    };
    var ey = 14;
    var e_ = [4352, 4384, 4608, 4640, 5376, 5408, 5632, 5664, 5888, 5920, 4096, 4864, 4896, 5120, 5152];
    var ev = function (e, t) {
      ev.prototype.init.call(this);
      this.field_ = e || 0;
      this.dataChannel_ = t || 0;
      this.name_ = "CC" + (1 + (this.field_ << 1 | this.dataChannel_));
      this.setConstants();
      this.reset();
      this.push = function (e) {
        var t;
        var i;
        var s;
        var r;
        var n = 32639 & e.ccData;
        n === this.lastControlCode_ ? this.lastControlCode_ = null : (4096 == (61440 & n) ? this.lastControlCode_ = n : n !== this.PADDING_ && (this.lastControlCode_ = null), t = n >>> 8, i = 255 & n, n !== this.PADDING_ && (n === this.RESUME_CAPTION_LOADING_ ? this.mode_ = "popOn" : n === this.END_OF_CAPTION_ ? (this.mode_ = "popOn", this.clearFormatting(e.pts), this.flushDisplayed(e.pts), r = this.displayed_, this.displayed_ = this.nonDisplayed_, this.nonDisplayed_ = r, this.startPts_ = e.pts) : n === this.ROLL_UP_2_ROWS_ ? (this.rollUpRows_ = 2, this.setRollUp(e.pts)) : n === this.ROLL_UP_3_ROWS_ ? (this.rollUpRows_ = 3, this.setRollUp(e.pts)) : n === this.ROLL_UP_4_ROWS_ ? (this.rollUpRows_ = 4, this.setRollUp(e.pts)) : n === this.CARRIAGE_RETURN_ ? (this.clearFormatting(e.pts), this.flushDisplayed(e.pts), this.shiftRowsUp_(), this.startPts_ = e.pts) : n === this.BACKSPACE_ ? "popOn" === this.mode_ ? this.nonDisplayed_[this.row_].text = this.nonDisplayed_[this.row_].text.slice(0, -1) : this.displayed_[this.row_].text = this.displayed_[this.row_].text.slice(0, -1) : n === this.ERASE_DISPLAYED_MEMORY_ ? (this.flushDisplayed(e.pts), this.displayed_ = Y()) : n === this.ERASE_NON_DISPLAYED_MEMORY_ ? this.nonDisplayed_ = Y() : n === this.RESUME_DIRECT_CAPTIONING_ ? ("paintOn" !== this.mode_ && (this.flushDisplayed(e.pts), this.displayed_ = Y()), this.mode_ = "paintOn", this.startPts_ = e.pts) : this.isSpecialCharacter(t, i) ? (s = K((t = (3 & t) << 8) | i), this[this.mode_](e.pts, s), this.column_++) : this.isExtCharacter(t, i) ? ("popOn" === this.mode_ ? this.nonDisplayed_[this.row_].text = this.nonDisplayed_[this.row_].text.slice(0, -1) : this.displayed_[this.row_].text = this.displayed_[this.row_].text.slice(0, -1), s = K((t = (3 & t) << 8) | i), this[this.mode_](e.pts, s), this.column_++) : this.isMidRowCode(t, i) ? (this.clearFormatting(e.pts), this[this.mode_](e.pts, " "), this.column_++, 14 == (14 & i) && this.addFormatting(e.pts, ["i"]), 1 == (1 & i) && this.addFormatting(e.pts, ["u"])) : this.isOffsetControlCode(t, i) ? (this.nonDisplayed_[this.row_].offset = r = 3 & i, this.column_ += r) : this.isPAC(t, i) ? (r = e_.indexOf(7968 & n), "rollUp" === this.mode_ && (r - this.rollUpRows_ + 1 < 0 && (r = this.rollUpRows_ - 1), this.setRollUp(e.pts, r)), r !== this.row_ && (this.clearFormatting(e.pts), this.row_ = r), 1 & i && -1 === this.formatting_.indexOf("u") && this.addFormatting(e.pts, ["u"]), 16 == (16 & n) && (this.column_ = 4 * (r = (14 & n) >> 1), this.nonDisplayed_[this.row_].indent += r), this.isColorPAC(i) && 14 == (14 & i) && this.addFormatting(e.pts, ["i"])) : this.isNormalChar(t) && (0 === i && (i = null), s = K(t) + K(i), this[this.mode_](e.pts, s), this.column_ += s.length)));
      };
    };
    ev.prototype = new ec();
    ev.prototype.flushDisplayed = function (e) {
      let t = e => {
        this.trigger("log", {
          level: "warn",
          message: "Skipping a malformed 608 caption at index " + e + "."
        });
      };
      let i = [];
      this.displayed_.forEach((e, s) => {
        if (e && e.text && e.text.length) {
          try {
            e.text = e.text.trim();
          } catch (e) {
            t(s);
          }
          e.text.length && i.push({
            text: e.text,
            line: s + 1,
            position: 10 + Math.min(70, 10 * e.indent) + 2.5 * e.offset
          });
        } else null == e && t(s);
      });
      i.length && this.trigger("data", {
        startPts: this.startPts_,
        endPts: e,
        content: i,
        stream: this.name_
      });
    };
    ev.prototype.reset = function () {
      this.mode_ = "popOn";
      this.topRow_ = 0;
      this.startPts_ = 0;
      this.displayed_ = Y();
      this.nonDisplayed_ = Y();
      this.lastControlCode_ = null;
      this.column_ = 0;
      this.row_ = ey;
      this.rollUpRows_ = 2;
      this.formatting_ = [];
    };
    ev.prototype.setConstants = function () {
      0 === this.dataChannel_ ? (this.BASE_ = 16, this.EXT_ = 17, this.CONTROL_ = (20 | this.field_) << 8, this.OFFSET_ = 23) : 1 === this.dataChannel_ && (this.BASE_ = 24, this.EXT_ = 25, this.CONTROL_ = (28 | this.field_) << 8, this.OFFSET_ = 31);
      this.PADDING_ = 0;
      this.RESUME_CAPTION_LOADING_ = 32 | this.CONTROL_;
      this.END_OF_CAPTION_ = 47 | this.CONTROL_;
      this.ROLL_UP_2_ROWS_ = 37 | this.CONTROL_;
      this.ROLL_UP_3_ROWS_ = 38 | this.CONTROL_;
      this.ROLL_UP_4_ROWS_ = 39 | this.CONTROL_;
      this.CARRIAGE_RETURN_ = 45 | this.CONTROL_;
      this.RESUME_DIRECT_CAPTIONING_ = 41 | this.CONTROL_;
      this.BACKSPACE_ = 33 | this.CONTROL_;
      this.ERASE_DISPLAYED_MEMORY_ = 44 | this.CONTROL_;
      this.ERASE_NON_DISPLAYED_MEMORY_ = 46 | this.CONTROL_;
    };
    ev.prototype.isSpecialCharacter = function (e, t) {
      return e === this.EXT_ && 48 <= t && t <= 63;
    };
    ev.prototype.isExtCharacter = function (e, t) {
      return (e === this.EXT_ + 1 || e === this.EXT_ + 2) && 32 <= t && t <= 63;
    };
    ev.prototype.isMidRowCode = function (e, t) {
      return e === this.EXT_ && 32 <= t && t <= 47;
    };
    ev.prototype.isOffsetControlCode = function (e, t) {
      return e === this.OFFSET_ && 33 <= t && t <= 35;
    };
    ev.prototype.isPAC = function (e, t) {
      return e >= this.BASE_ && e < this.BASE_ + 8 && 64 <= t && t <= 127;
    };
    ev.prototype.isColorPAC = function (e) {
      return 64 <= e && e <= 79 || 96 <= e && e <= 127;
    };
    ev.prototype.isNormalChar = function (e) {
      return 32 <= e && e <= 127;
    };
    ev.prototype.setRollUp = function (e, t) {
      if ("rollUp" !== this.mode_ && (this.row_ = ey, this.mode_ = "rollUp", this.flushDisplayed(e), this.nonDisplayed_ = Y(), this.displayed_ = Y()), void 0 !== t && t !== this.row_) for (var i = 0; i < this.rollUpRows_; i++) {
        this.displayed_[t - i] = this.displayed_[this.row_ - i];
        this.displayed_[this.row_ - i] = {
          text: "",
          indent: 0,
          offset: 0
        };
      }
      void 0 === t && (t = this.row_);
      this.topRow_ = t - this.rollUpRows_ + 1;
    };
    ev.prototype.addFormatting = function (e, t) {
      this.formatting_ = this.formatting_.concat(t);
      t = t.reduce(function (e, t) {
        return e + "<" + t + ">";
      }, "");
      this[this.mode_](e, t);
    };
    ev.prototype.clearFormatting = function (e) {
      var t;
      this.formatting_.length && (t = this.formatting_.reverse().reduce(function (e, t) {
        return e + "</" + t + ">";
      }, ""), this.formatting_ = [], this[this.mode_](e, t));
    };
    ev.prototype.popOn = function (e, t) {
      var i = this.nonDisplayed_[this.row_].text;
      this.nonDisplayed_[this.row_].text = i + t;
    };
    ev.prototype.rollUp = function (e, t) {
      var i = this.displayed_[this.row_].text;
      this.displayed_[this.row_].text = i + t;
    };
    ev.prototype.shiftRowsUp_ = function () {
      for (var e = 0; e < this.topRow_; e++) this.displayed_[e] = {
        text: "",
        indent: 0,
        offset: 0
      };
      for (e = this.row_ + 1; e < ey + 1; e++) this.displayed_[e] = {
        text: "",
        indent: 0,
        offset: 0
      };
      for (e = this.topRow_; e < this.row_; e++) this.displayed_[e] = this.displayed_[e + 1];
      this.displayed_[this.row_] = {
        text: "",
        indent: 0,
        offset: 0
      };
    };
    ev.prototype.paintOn = function (e, t) {
      var i = this.displayed_[this.row_].text;
      this.displayed_[this.row_].text = i + t;
    };
    var ec = {
      CaptionStream: z,
      Cea608Stream: ev,
      Cea708Stream: eg
    };
    var eb = {
      H264_STREAM_TYPE: 27,
      ADTS_STREAM_TYPE: 15,
      METADATA_STREAM_TYPE: 21
    };
    var eT = q;
    var eS = 0x200000000;
    var ew = 0x100000000;
    function eE(e, t, i) {
      for (s = "", r = t, void 0; r < i; r++) {
        var s;
        var r;
        s += "%" + ("00" + e[r].toString(16)).slice(-2);
      }
      return s;
    }
    function eC(e, t, i) {
      return decodeURIComponent(eE(e, t, i));
    }
    function ek(e, t, i) {
      return unescape(eE(e, t, i));
    }
    function ex(e) {
      return e[0] << 21 | e[1] << 14 | e[2] << 7 | e[3];
    }
    J.prototype = new eT();
    var eI;
    var eA;
    var eD;
    var eT = J;
    var eL = (e, t, i) => {
      if (e) {
        for (var s = i; s < e.length; s++) if (e[s] === t) return s;
      }
      return -1;
    };
    var eP = {
      APIC: function (e) {
        var t;
        var i = 1;
        3 !== e.data[0] || (t = eL(e.data, 0, 1)) < 0 || (e.mimeType = ek(e.data, 1, t), e.pictureType = e.data[i = t + 1], (t = eL(e.data, 0, ++i)) < 0) || (e.description = eC(e.data, i, t), i = t + 1, "--\x3e" === e.mimeType ? e.url = ek(e.data, i, e.data.length) : e.pictureData = e.data.subarray(i, e.data.length));
      },
      "T*": function (e) {
        3 === e.data[0] && (e.value = eC(e.data, 1, e.data.length).replace(/\0*$/, ""), e.values = e.value.split("\0"));
      },
      TXXX: function (e) {
        var t;
        3 === e.data[0] && -1 !== (t = eL(e.data, 0, 1)) && (e.description = eC(e.data, 1, t), e.value = eC(e.data, t + 1, e.data.length).replace(/\0*$/, ""), e.data = e.value);
      },
      "W*": function (e) {
        e.url = ek(e.data, 0, e.data.length).replace(/\0.*$/, "");
      },
      WXXX: function (e) {
        var t;
        3 === e.data[0] && -1 !== (t = eL(e.data, 0, 1)) && (e.description = eC(e.data, 1, t), e.url = ek(e.data, t + 1, e.data.length).replace(/\0.*$/, ""));
      },
      PRIV: function (e) {
        for (var t = 0; t < e.data.length; t++) if (0 === e.data[t]) {
          e.owner = ek(e.data, 0, t);
          break;
        }
        e.privateData = e.data.subarray(t + 1);
        e.data = e.privateData;
      }
    };
    var eO = {
      parseId3Frames: function (e) {
        var t;
        var i = 10;
        var s = 0;
        var r = [];
        if (!(e.length < 10 || 73 !== e[0] || 68 !== e[1] || 51 !== e[2])) {
          s = ex(e.subarray(6, 10)) + 10;
          64 & e[5] && (i = (i += 4) + ex(e.subarray(10, 14)), s -= ex(e.subarray(16, 20)));
          do {
            if ((t = ex(e.subarray(i + 4, i + 8))) < 1) break;
            var n = {
              id: String.fromCharCode(e[i], e[i + 1], e[i + 2], e[i + 3]),
              data: e.subarray(i + 10, i + t + 10)
            };
          } while (n.key = n.id, eP[n.id] ? eP[n.id](n) : "T" === n.id[0] ? eP["T*"](n) : "W" === n.id[0] && eP["W*"](n), r.push(n), (i = i + 10 + t) < s);
          return r;
        }
      },
      parseSyncSafeInteger: ex,
      frameParsers: eP
    };
    var eN = q;
    var eR = function (e) {
      var t;
      var i = {
        descriptor: e && e.descriptor
      };
      var s = 0;
      var r = [];
      var n = 0;
      if (eR.prototype.init.call(this), this.dispatchType = eb.METADATA_STREAM_TYPE.toString(16), i.descriptor) for (t = 0; t < i.descriptor.length; t++) this.dispatchType += ("00" + i.descriptor[t].toString(16)).slice(-2);
      this.push = function (e) {
        var t;
        var i;
        var a;
        var o;
        var l;
        var h;
        var d;
        if ("timed-metadata" === e.type) {
          if (e.dataAlignmentIndicator && (n = 0, r.length = 0), 0 === r.length && (e.data.length < 10 || 73 !== e.data[0] || 68 !== e.data[1] || 51 !== e.data[2])) this.trigger("log", {
            level: "warn",
            message: "Skipping unrecognized metadata packet"
          }); else if (r.push(e), n += e.data.byteLength, 1 === r.length && (s = eO.parseSyncSafeInteger(e.data.subarray(6, 10)) + 10), !(n < s)) {
            for (t = {
              data: new Uint8Array(s),
              frames: [],
              pts: r[0].pts,
              dts: r[0].dts
            }, o = 0; o < s;) {
              t.data.set(r[0].data.subarray(0, s - o), o);
              o += r[0].data.byteLength;
              n -= r[0].data.byteLength;
              r.shift();
            }
            i = 10;
            64 & t.data[5] && (i = (i += 4) + eO.parseSyncSafeInteger(t.data.subarray(10, 14)), s -= eO.parseSyncSafeInteger(t.data.subarray(16, 20)));
            do if ((a = eO.parseSyncSafeInteger(t.data.subarray(i + 4, i + 8))) < 1) {
              this.trigger("log", {
                level: "warn",
                message: "Malformed ID3 frame encountered. Skipping remaining metadata parsing."
              });
              break;
            } while ((d = {
              id: String.fromCharCode(t.data[i], t.data[i + 1], t.data[i + 2], t.data[i + 3]),
              data: t.data.subarray(i + 10, i + a + 10)
            }).key = d.id, eO.frameParsers[d.id] ? eO.frameParsers[d.id](d) : "T" === d.id[0] ? eO.frameParsers["T*"](d) : "W" === d.id[0] && eO.frameParsers["W*"](d), "com.apple.streaming.transportStreamTimestamp" === d.owner && (h = (h = ((1 & (l = d.data)[3]) << 30 | l[4] << 22 | l[5] << 14 | l[6] << 6 | l[7] >>> 2) * 4) + (3 & l[7]), d.timeStamp = h, void 0 === t.pts && void 0 === t.dts && (t.pts = d.timeStamp, t.dts = d.timeStamp), this.trigger("timestamp", d)), t.frames.push(d), (i = i + 10 + a) < s);
            this.trigger("data", t);
          }
        }
      };
    };
    eR.prototype = new eN();
    var eN = eR;
    var eM = q;
    var eU = ec;
    var eB = function () {
      var e = new Uint8Array(188);
      var t = 0;
      eB.prototype.init.call(this);
      this.push = function (i) {
        var s;
        var r = 0;
        var n = 188;
        for (t ? ((s = new Uint8Array(i.byteLength + t)).set(e.subarray(0, t)), s.set(i, t), t = 0) : s = i; n < s.byteLength;) 71 === s[r] && 71 === s[n] ? (this.trigger("data", s.subarray(r, n)), r += 188, n += 188) : (r++, n++);
        r < s.byteLength && (e.set(s.subarray(r), 0), t = s.byteLength - r);
      };
      this.flush = function () {
        188 === t && 71 === e[0] && (this.trigger("data", e), t = 0);
        this.trigger("done");
      };
      this.endTimeline = function () {
        this.flush();
        this.trigger("endedtimeline");
      };
      this.reset = function () {
        t = 0;
        this.trigger("reset");
      };
    };
    eB.prototype = new eM();
    (eI = function () {
      var e;
      var t;
      var i;
      var s;
      eI.prototype.init.call(this);
      (s = this).packetsWaitingForPmt = [];
      this.programMapTable = void 0;
      e = function (e, s) {
        var r = 0;
        s.payloadUnitStartIndicator && (r += e[r] + 1);
        ("pat" === s.type ? t : i)(e.subarray(r), s);
      };
      t = function (e, t) {
        t.section_number = e[7];
        t.last_section_number = e[8];
        s.pmtPid = (31 & e[10]) << 8 | e[11];
        t.pmtPid = s.pmtPid;
      };
      i = function (e, t) {
        var i;
        var r;
        if (1 & e[5]) {
          for (s.programMapTable = {
            video: null,
            audio: null,
            "timed-metadata": {}
          }, i = 3 + ((15 & e[1]) << 8 | e[2]) - 4, r = 12 + ((15 & e[10]) << 8 | e[11]); r < i;) {
            var n = e[r];
            var a = (31 & e[r + 1]) << 8 | e[r + 2];
            n === eb.H264_STREAM_TYPE && null === s.programMapTable.video ? s.programMapTable.video = a : n === eb.ADTS_STREAM_TYPE && null === s.programMapTable.audio ? s.programMapTable.audio = a : n === eb.METADATA_STREAM_TYPE && (s.programMapTable["timed-metadata"][a] = n);
            r += 5 + ((15 & e[r + 3]) << 8 | e[r + 4]);
          }
          t.programMapTable = s.programMapTable;
        }
      };
      this.push = function (t) {
        var i = {};
        var s = 4;
        if (i.payloadUnitStartIndicator = !!(64 & t[1]), i.pid = 31 & t[1], i.pid <<= 8, i.pid |= t[2], 1 < (48 & t[3]) >>> 4 && (s += t[s] + 1), 0 === i.pid) {
          i.type = "pat";
          e(t.subarray(s), i);
          this.trigger("data", i);
        } else if (i.pid === this.pmtPid) for (i.type = "pmt", e(t.subarray(s), i), this.trigger("data", i); this.packetsWaitingForPmt.length;) this.processPes_.apply(this, this.packetsWaitingForPmt.shift()); else void 0 === this.programMapTable ? this.packetsWaitingForPmt.push([t, s, i]) : this.processPes_(t, s, i);
      };
      this.processPes_ = function (e, t, i) {
        i.pid === this.programMapTable.video ? i.streamType = eb.H264_STREAM_TYPE : i.pid === this.programMapTable.audio ? i.streamType = eb.ADTS_STREAM_TYPE : i.streamType = this.programMapTable["timed-metadata"][i.pid];
        i.type = "pes";
        i.data = e.subarray(t);
        this.trigger("data", i);
      };
    }).prototype = new eM();
    eI.STREAM_TYPES = {
      h264: 27,
      adts: 15
    };
    (eA = function () {
      function e(e, t, s) {
        var r;
        var n = new Uint8Array(e.size);
        var a = {
          type: t
        };
        var l = 0;
        var h = 0;
        if (e.data.length && !(e.size < 9)) {
          for (a.trackId = e.data[0].pid, l = 0; l < e.data.length; l++) {
            r = e.data[l];
            n.set(r.data, h);
            h += r.data.byteLength;
          }
          o(n, a);
          t = "video" === t || a.packetLength <= e.size;
          (s || t) && (e.size = 0, e.data.length = 0);
          t && i.trigger("data", a);
        }
      }
      var t;
      var i = this;
      var s = !1;
      var r = {
        data: [],
        size: 0
      };
      var n = {
        data: [],
        size: 0
      };
      var a = {
        data: [],
        size: 0
      };
      var o = function (e, t) {
        var i = e[0] << 16 | e[1] << 8 | e[2];
        t.data = new Uint8Array();
        1 == i && (t.packetLength = 6 + (e[4] << 8 | e[5]), t.dataAlignmentIndicator = 0 != (4 & e[6]), 192 & (i = e[7]) && (t.pts = (14 & e[9]) << 27 | (255 & e[10]) << 20 | (254 & e[11]) << 12 | (255 & e[12]) << 5 | (254 & e[13]) >>> 3, t.pts *= 4, t.pts += (6 & e[13]) >>> 1, t.dts = t.pts, 64 & i) && (t.dts = (14 & e[14]) << 27 | (255 & e[15]) << 20 | (254 & e[16]) << 12 | (255 & e[17]) << 5 | (254 & e[18]) >>> 3, t.dts *= 4, t.dts += (6 & e[18]) >>> 1), t.data = e.subarray(9 + e[8]));
      };
      eA.prototype.init.call(this);
      this.push = function (o) {
        ({
          pat: function () { },
          pes: function () {
            var t;
            var i;
            switch (o.streamType) {
              case eb.H264_STREAM_TYPE:
                t = r;
                i = "video";
                break;
              case eb.ADTS_STREAM_TYPE:
                t = n;
                i = "audio";
                break;
              case eb.METADATA_STREAM_TYPE:
                t = a;
                i = "timed-metadata";
                break;
              default:
                return;
            }
            o.payloadUnitStartIndicator && e(t, i, !0);
            t.data.push(o);
            t.size += o.data.byteLength;
          },
          pmt: function () {
            var e = {
              type: "metadata",
              tracks: []
            };
            null !== (t = o.programMapTable).video && e.tracks.push({
              timelineStartInfo: {
                baseMediaDecodeTime: 0
              },
              id: +t.video,
              codec: "avc",
              type: "video"
            });
            null !== t.audio && e.tracks.push({
              timelineStartInfo: {
                baseMediaDecodeTime: 0
              },
              id: +t.audio,
              codec: "adts",
              type: "audio"
            });
            s = !0;
            i.trigger("data", e);
          }
        })[o.type]();
      };
      this.reset = function () {
        r.size = 0;
        r.data.length = 0;
        n.size = 0;
        n.data.length = 0;
        this.trigger("reset");
      };
      this.flushStreams_ = function () {
        e(r, "video");
        e(n, "audio");
        e(a, "timed-metadata");
      };
      this.flush = function () {
        var e;
        !s && t && (e = {
          type: "metadata",
          tracks: []
        }, null !== t.video && e.tracks.push({
          timelineStartInfo: {
            baseMediaDecodeTime: 0
          },
          id: +t.video,
          codec: "avc",
          type: "video"
        }), null !== t.audio && e.tracks.push({
          timelineStartInfo: {
            baseMediaDecodeTime: 0
          },
          id: +t.audio,
          codec: "adts",
          type: "audio"
        }), i.trigger("data", e));
        s = !1;
        this.flushStreams_();
        this.trigger("done");
      };
    }).prototype = new eM();
    var eF = {
      PAT_PID: 0,
      MP2T_PACKET_LENGTH: 188,
      TransportPacketStream: eB,
      TransportParseStream: eI,
      ElementaryStream: eA,
      TimestampRolloverStream: eT,
      CaptionStream: eU.CaptionStream,
      Cea608Stream: eU.Cea608Stream,
      Cea708Stream: eU.Cea708Stream,
      MetadataStream: eN
    };
    for (eD in eb) eb.hasOwnProperty(eD) && (eF[eD] = eb[eD]);
    var eq;
    var ej;
    var eM = eF;
    var eT = q;
    var eH = eh.ONE_SECOND_IN_TS;
    var eV = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350];
    var e$ = function (e) {
      var t;
      var i = 0;
      e$.prototype.init.call(this);
      this.skipWarn_ = function (e, t) {
        this.trigger("log", {
          level: "warn",
          message: `adts skiping bytes ${e} to ${t} in frame ${i} outside syncword`
        });
      };
      this.push = function (s) {
        var r;
        var n;
        var a;
        var o;
        var l;
        var h;
        var d = 0;
        if (e || (i = 0), "audio" === s.type) {
          for (t && t.length ? ((t = new Uint8Array((a = t).byteLength + s.data.byteLength)).set(a), t.set(s.data, a.byteLength)) : t = s.data; d + 7 < t.length;) if (255 !== t[d] || 240 != (246 & t[d + 1])) {
            "number" != typeof h && (h = d);
            d++;
          } else {
            if ("number" == typeof h && (this.skipWarn_(h, d), h = null), n = 2 * (1 & ~t[d + 1]), r = (3 & t[d + 3]) << 11 | t[d + 4] << 3 | (224 & t[d + 5]) >> 5, l = (o = 1024 * (1 + (3 & t[d + 6]))) * eH / eV[(60 & t[d + 2]) >>> 2], t.byteLength - d < r) break;
            this.trigger("data", {
              pts: s.pts + i * l,
              dts: s.dts + i * l,
              sampleCount: o,
              audioobjecttype: 1 + (t[d + 2] >>> 6 & 3),
              channelcount: (1 & t[d + 2]) << 2 | (192 & t[d + 3]) >>> 6,
              samplerate: eV[(60 & t[d + 2]) >>> 2],
              samplingfrequencyindex: (60 & t[d + 2]) >>> 2,
              samplesize: 16,
              data: t.subarray(d + 7 + n, d + r)
            });
            i++;
            d += r;
          }
          "number" == typeof h && (this.skipWarn_(h, d), h = null);
          t = t.subarray(d);
        }
      };
      this.flush = function () {
        i = 0;
        this.trigger("done");
      };
      this.reset = function () {
        t = void 0;
        this.trigger("reset");
      };
      this.endTimeline = function () {
        t = void 0;
        this.trigger("endedtimeline");
      };
    };
    e$.prototype = new eT();
    var eU = e$;
    var eN = q;
    var ez = function (e) {
      var t = e.byteLength;
      var i = 0;
      var s = 0;
      this.length = function () {
        return 8 * t;
      };
      this.bitsAvailable = function () {
        return 8 * t + s;
      };
      this.loadWord = function () {
        var r = e.byteLength - t;
        var n = new Uint8Array(4);
        var a = Math.min(4, t);
        if (0 === a) throw Error("no bytes available");
        n.set(e.subarray(r, r + a));
        i = new DataView(n.buffer).getUint32(0);
        s = 8 * a;
        t -= a;
      };
      this.skipBits = function (e) {
        var r;
        e < s || (e = (e -= s) - 8 * (r = Math.floor(e / 8)), t -= r, this.loadWord());
        i <<= e;
        s -= e;
      };
      this.readBits = function (e) {
        var r = Math.min(s, e);
        var n = i >>> 32 - r;
        0 < (s -= r) ? i <<= r : 0 < t && this.loadWord();
        return 0 < (r = e - r) ? n << r | this.readBits(r) : n;
      };
      this.skipLeadingZeros = function () {
        for (var e = 0; e < s; ++e) if (0 != (i & 0x80000000 >>> e)) {
          i <<= e;
          s -= e;
          return e;
        }
        this.loadWord();
        return e + this.skipLeadingZeros();
      };
      this.skipUnsignedExpGolomb = function () {
        this.skipBits(1 + this.skipLeadingZeros());
      };
      this.skipExpGolomb = function () {
        this.skipBits(1 + this.skipLeadingZeros());
      };
      this.readUnsignedExpGolomb = function () {
        var e = this.skipLeadingZeros();
        return this.readBits(e + 1) - 1;
      };
      this.readExpGolomb = function () {
        var e = this.readUnsignedExpGolomb();
        return 1 & e ? 1 + e >>> 1 : -1 * (e >>> 1);
      };
      this.readBoolean = function () {
        return 1 === this.readBits(1);
      };
      this.readUnsignedByte = function () {
        return this.readBits(8);
      };
      this.loadWord();
    };
    var eW = function () {
      var e;
      var t;
      var i = 0;
      eW.prototype.init.call(this);
      this.push = function (s) {
        for (n = (t = t ? ((r = new Uint8Array(t.byteLength + s.data.byteLength)).set(t), r.set(s.data, t.byteLength), r) : s.data).byteLength, void 0; i < n - 3; i++) {
          var r;
          var n;
          if (1 === t[i + 2]) {
            e = i + 5;
            break;
          }
        }
        for (; e < n;) switch (t[e]) {
          case 0:
            if (0 !== t[e - 1]) e += 2; else if (0 !== t[e - 2]) e++; else {
              for (i + 3 !== e - 2 && this.trigger("data", t.subarray(i + 3, e - 2)); 1 !== t[++e] && e < n;);
              i = e - 2;
              e += 3;
            }
            break;
          case 1:
            0 !== t[e - 1] || 0 !== t[e - 2] || (this.trigger("data", t.subarray(i + 3, e - 2)), i = e - 2);
            e += 3;
            break;
          default:
            e += 3;
        }
        t = t.subarray(i);
        e -= i;
        i = 0;
      };
      this.reset = function () {
        t = null;
        i = 0;
        this.trigger("reset");
      };
      this.flush = function () {
        t && 3 < t.byteLength && this.trigger("data", t.subarray(i + 3));
        t = null;
        i = 0;
        this.trigger("done");
      };
      this.endTimeline = function () {
        this.flush();
        this.trigger("endedtimeline");
      };
    };
    function eG(e) {
      return e[0] << 21 | e[1] << 14 | e[2] << 7 | e[3];
    }
    eW.prototype = new eN();
    ej = {
      100: !0,
      110: !0,
      122: !0,
      244: !0,
      44: !0,
      83: !0,
      86: !0,
      118: !0,
      128: !0,
      138: !0,
      139: !0,
      134: !0
    };
    (eq = function () {
      var e;
      var t;
      var i;
      var s;
      var r;
      var n;
      var a;
      var o = new eW();
      eq.prototype.init.call(this);
      (e = this).push = function (e) {
        "video" === e.type && (t = e.trackId, i = e.pts, s = e.dts, o.push(e));
      };
      o.on("data", function (a) {
        var o = {
          trackId: t,
          pts: i,
          dts: s,
          data: a,
          nalUnitTypeCode: 31 & a[0]
        };
        switch (o.nalUnitTypeCode) {
          case 5:
            o.nalUnitType = "slice_layer_without_partitioning_rbsp_idr";
            break;
          case 6:
            o.nalUnitType = "sei_rbsp";
            o.escapedRBSP = r(a.subarray(1));
            break;
          case 7:
            o.nalUnitType = "seq_parameter_set_rbsp";
            o.escapedRBSP = r(a.subarray(1));
            o.config = n(o.escapedRBSP);
            break;
          case 8:
            o.nalUnitType = "pic_parameter_set_rbsp";
            break;
          case 9:
            o.nalUnitType = "access_unit_delimiter_rbsp";
        }
        e.trigger("data", o);
      });
      o.on("done", function () {
        e.trigger("done");
      });
      o.on("partialdone", function () {
        e.trigger("partialdone");
      });
      o.on("reset", function () {
        e.trigger("reset");
      });
      o.on("endedtimeline", function () {
        e.trigger("endedtimeline");
      });
      this.flush = function () {
        o.flush();
      };
      this.partialFlush = function () {
        o.partialFlush();
      };
      this.reset = function () {
        o.reset();
      };
      this.endTimeline = function () {
        o.endTimeline();
      };
      a = function (e, t) {
        for (i = 8, s = 8, r = 0, void 0; r < e; r++) {
          var i;
          var s;
          var r;
          i = 0 === (s = 0 !== s ? (i + t.readExpGolomb() + 256) % 256 : s) ? i : s;
        }
      };
      r = function (e) {
        for (t = e.byteLength, i = [], s = 1, void 0; s < t - 2;) {
          var t;
          var i;
          var s;
          0 === e[s] && 0 === e[s + 1] && 3 === e[s + 2] ? (i.push(s + 2), s += 2) : s++;
        }
        if (0 === i.length) return e;
        for (r = t - i.length, n = new Uint8Array(r), a = 0, s = 0, void 0; s < r; a++, s++) {
          var r;
          var n;
          var a;
          var s;
          a === i[0] && (a++, i.shift());
          n[s] = e[a];
        }
        return n;
      };
      n = function (e) {
        var t;
        var i;
        var s;
        var r;
        var n;
        var o;
        var l = 0;
        var h = 0;
        var d = 0;
        var u = 0;
        var c = [1, 1];
        var p = new ez(e);
        var e = p.readUnsignedByte();
        var m = p.readUnsignedByte();
        var g = p.readUnsignedByte();
        if (p.skipUnsignedExpGolomb(), ej[e] && (3 === (i = p.readUnsignedExpGolomb()) && p.skipBits(1), p.skipUnsignedExpGolomb(), p.skipUnsignedExpGolomb(), p.skipBits(1), p.readBoolean())) for (n = 3 !== i ? 8 : 12, o = 0; o < n; o++) p.readBoolean() && a(o < 6 ? 16 : 64, p);
        if (p.skipUnsignedExpGolomb(), 0 === (i = p.readUnsignedExpGolomb())) p.readUnsignedExpGolomb(); else if (1 === i) for (p.skipBits(1), p.skipExpGolomb(), p.skipExpGolomb(), t = p.readUnsignedExpGolomb(), o = 0; o < t; o++) p.skipExpGolomb();
        if (p.skipUnsignedExpGolomb(), p.skipBits(1), i = p.readUnsignedExpGolomb(), s = p.readUnsignedExpGolomb(), 0 === (r = p.readBits(1)) && p.skipBits(1), p.skipBits(1), p.readBoolean() && (l = p.readUnsignedExpGolomb(), h = p.readUnsignedExpGolomb(), d = p.readUnsignedExpGolomb(), u = p.readUnsignedExpGolomb()), p.readBoolean() && p.readBoolean()) {
          switch (p.readUnsignedByte()) {
            case 1:
              c = [1, 1];
              break;
            case 2:
              c = [12, 11];
              break;
            case 3:
              c = [10, 11];
              break;
            case 4:
              c = [16, 11];
              break;
            case 5:
              c = [40, 33];
              break;
            case 6:
              c = [24, 11];
              break;
            case 7:
              c = [20, 11];
              break;
            case 8:
              c = [32, 11];
              break;
            case 9:
              c = [80, 33];
              break;
            case 10:
              c = [18, 11];
              break;
            case 11:
              c = [15, 11];
              break;
            case 12:
              c = [64, 33];
              break;
            case 13:
              c = [160, 99];
              break;
            case 14:
              c = [4, 3];
              break;
            case 15:
              c = [3, 2];
              break;
            case 16:
              c = [2, 1];
              break;
            case 255:
              c = [p.readUnsignedByte() << 8 | p.readUnsignedByte(), p.readUnsignedByte() << 8 | p.readUnsignedByte()];
          }
          c && (c[0], c[1]);
        }
        return {
          profileIdc: e,
          levelIdc: g,
          profileCompatibility: m,
          width: 16 * (i + 1) - 2 * l - 2 * h,
          height: (2 - r) * (s + 1) * 16 - 2 * d - 2 * u,
          sarRatio: c
        };
      };
    }).prototype = new eN();
    var eT = eq;
    var eX = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350];
    var eK = function (e, t) {
      var i = 0 <= (i = e[t + 6] << 21 | e[t + 7] << 14 | e[t + 8] << 7 | e[t + 9]) ? i : 0;
      return (16 & e[t + 5]) >> 4 ? 20 + i : 10 + i;
    };
    var eY = function (e, t) {
      return e.length - t < 10 || 73 !== e[t] || 68 !== e[t + 1] || 51 !== e[t + 2] ? t : (t += eK(e, t), eY(e, t));
    };
    var eQ = function (e, t, i) {
      for (s = "", r = t, void 0; r < i; r++) {
        var s;
        var r;
        s += "%" + ("00" + e[r].toString(16)).slice(-2);
      }
      return s;
    };
    var eN = {
      isLikelyAacData: function (e) {
        var t = eY(e, 0);
        return e.length >= t + 2 && 255 == (255 & e[t]) && 240 == (240 & e[t + 1]) && 16 == (22 & e[t + 1]);
      },
      parseId3TagSize: eK,
      parseAdtsSize: function (e, t) {
        var i = (224 & e[t + 5]) >> 5;
        var s = e[t + 4] << 3;
        return 6144 & e[t + 3] | s | i;
      },
      parseType: function (e, t) {
        return 73 === e[t] && 68 === e[t + 1] && 51 === e[t + 2] ? "timed-metadata" : !0 & e[t] && 240 == (240 & e[t + 1]) ? "audio" : null;
      },
      parseSampleRate: function (e) {
        for (var t = 0; t + 5 < e.length;) {
          if (255 === e[t] && 240 == (246 & e[t + 1])) return eX[(60 & e[t + 2]) >>> 2];
          t++;
        }
        return null;
      },
      parseAacTimestamp: function (e) {
        var t;
        var i = 10;
        64 & e[5] && (i = (i += 4) + eG(e.subarray(10, 14)));
        do {
          if ((t = eG(e.subarray(i + 4, i + 8))) < 1) break;
          if ("PRIV" === String.fromCharCode(e[i], e[i + 1], e[i + 2], e[i + 3])) {
            for (r = e.subarray(i + 10, i + t + 10), n = 0, void 0; n < r.byteLength; n++) {
              var s;
              var r;
              var n;
              if (0 === r[n]) {
                if ("com.apple.streaming.transportStreamTimestamp" === unescape(eQ(r, 0, n))) return ((1 & (s = r.subarray(n + 1))[3]) << 30 | s[4] << 22 | s[5] << 14 | s[6] << 6 | s[7] >>> 2) * 4 + (3 & s[7]);
                break;
              }
            }
          }
        } while ((i = i + 10 + t) < e.byteLength);
        return null;
      }
    };
    var eJ = q;
    var eZ = eN;
    var e0 = function () {
      var e = new Uint8Array();
      var t = 0;
      e0.prototype.init.call(this);
      this.setTimestamp = function (e) {
        t = e;
      };
      this.push = function (i) {
        var s;
        var r;
        var n = 0;
        var a = 0;
        for (e.length ? (r = e.length, (e = new Uint8Array(i.byteLength + r)).set(e.subarray(0, r)), e.set(i, r)) : e = i; 3 <= e.length - a;) if (73 === e[a] && 68 === e[a + 1] && 51 === e[a + 2]) {
          if (e.length - a < 10 || a + (n = eZ.parseId3TagSize(e, a)) > e.length) break;
          s = {
            type: "timed-metadata",
            data: e.subarray(a, a + n)
          };
          this.trigger("data", s);
          a += n;
        } else if (255 == (255 & e[a]) && 240 == (240 & e[a + 1])) {
          if (e.length - a < 7 || a + (n = eZ.parseAdtsSize(e, a)) > e.length) break;
          s = {
            type: "audio",
            data: e.subarray(a, a + n),
            pts: t,
            dts: t
          };
          this.trigger("data", s);
          a += n;
        } else a++;
        e = 0 < (r = e.length - a) ? e.subarray(a) : new Uint8Array();
      };
      this.reset = function () {
        e = new Uint8Array();
        this.trigger("reset");
      };
      this.endTimeline = function () {
        e = new Uint8Array();
        this.trigger("endedtimeline");
      };
    };
    function e1(e, t) {
      for (i = Object.keys(t), s = 0, void 0; s < i.length; s++) {
        var i;
        var s;
        var r = i[s];
        "headOfPipeline" !== r && t[r].on && t[r].on("log", tl.bind(e, r));
      }
    }
    function e2(e, t) {
      var i;
      if (e.length === t.length) {
        for (i = 0; i < e.length; i++) if (e[i] !== t[i]) return;
        return 1;
      }
    }
    function e4(e, t, i, s, r, n) {
      return {
        start: {
          dts: e,
          pts: e + (i - t)
        },
        end: {
          dts: e + (s - t),
          pts: e + (r - i)
        },
        prependedContentDuration: n,
        baseMediaDecodeTime: e
      };
    }
    e0.prototype = new eJ();
    var e8;
    var e5;
    var e3;
    var eJ = q;
    var e6 = ee;
    var e7 = ei;
    var e9 = en;
    var te = ea;
    var tt = eM;
    var ti = eU;
    var ts = eT;
    var tr = eN.isLikelyAacData;
    var tn = eh.ONE_SECOND_IN_TS;
    var ta = ["audioobjecttype", "channelcount", "samplerate", "samplingfrequencyindex", "samplesize"];
    var to = ["width", "height", "profileIdc", "levelIdc", "profileCompatibility", "sarRatio"];
    var tl = function (e, t) {
      t.stream = e;
      this.trigger("log", t);
    };
    var th = function (e, t) {
      var i = [];
      var s = 0;
      var r = 0;
      var n = 1 / 0;
      var a = (t = t || {}).firstSequenceNumber || 0;
      th.prototype.init.call(this);
      this.push = function (t) {
        te.collectDtsInfo(e, t);
        e && ta.forEach(function (i) {
          e[i] = t[i];
        });
        i.push(t);
      };
      this.setEarliestDts = function (e) {
        s = e;
      };
      this.setVideoBaseMediaDecodeTime = function (e) {
        n = e;
      };
      this.setAudioAppendStart = function (e) {
        r = e;
      };
      this.flush = function () {
        var o;
        var l;
        var h;
        var d;
        var u;
        0 !== i.length && (o = e9.trimAdtsFramesByEarliestDts(i, e, s), e.baseMediaDecodeTime = te.calculateTrackBaseMediaDecodeTime(e, t.keepOriginalTimestamps), u = e9.prefixWithSilence(e, o, r, n), e.samples = e9.generateSampleTable(o), h = e6.mdat(e9.concatenateFrameData(o)), i = [], l = new Uint8Array((d = e6.moof(a, [e])).byteLength + h.byteLength), a++, l.set(d), l.set(h, d.byteLength), te.clearDtsInfo(e), h = Math.ceil(1024 * tn / e.samplerate), o.length && (d = o.length * h, this.trigger("segmentTimingInfo", e4(eh.audioTsToVideoTs(e.baseMediaDecodeTime, e.samplerate), o[0].dts, o[0].pts, o[0].dts + d, o[0].pts + d, u || 0)), this.trigger("timingInfo", {
          start: o[0].pts,
          end: o[0].pts + d
        })), this.trigger("data", {
          track: e,
          boxes: l
        }));
        this.trigger("done", "AudioSegmentStream");
      };
      this.reset = function () {
        te.clearDtsInfo(e);
        i = [];
        this.trigger("reset");
      };
    };
    function td(e) {
      var t = "";
      return (t += String.fromCharCode(e[0])) + String.fromCharCode(e[1]) + String.fromCharCode(e[2]) + String.fromCharCode(e[3]);
    }
    function tu(e, t) {
      var i;
      var s;
      var r;
      var n = [];
      if (!t.length) return null;
      for (i = 0; i < e.byteLength;) {
        s = ty(e[i] << 24 | e[i + 1] << 16 | e[i + 2] << 8 | e[i + 3]);
        r = t_(e.subarray(i + 4, i + 8));
        s = 1 < s ? i + s : e.byteLength;
        r === t[0] && (1 === t.length ? n.push(e.subarray(i + 8, s)) : (r = tu(e.subarray(i + 8, s), t.slice(1))).length && (n = n.concat(r)));
        i = s;
      }
      return n;
    }
    function tc(e) {
      return (31 & e[1]) << 8 | e[2];
    }
    function tp(e) {
      return !!(64 & e[1]);
    }
    function tm(e) {
      var t = 0;
      1 < (48 & e[3]) >>> 4 && (t += e[4] + 1);
      return t;
    }
    function tg(e) {
      switch (e) {
        case 5:
          return "slice_layer_without_partitioning_rbsp_idr";
        case 6:
          return "sei_rbsp";
        case 7:
          return "seq_parameter_set_rbsp";
        case 8:
          return "pic_parameter_set_rbsp";
        case 9:
          return "access_unit_delimiter_rbsp";
        default:
          return null;
      }
    }
    th.prototype = new eJ();
    (e8 = function (e, t) {
      var i;
      var s;
      var r = [];
      var n = [];
      var a = (t = t || {}).firstSequenceNumber || 0;
      e8.prototype.init.call(this);
      delete e.minPTS;
      this.gopCache_ = [];
      this.push = function (t) {
        te.collectDtsInfo(e, t);
        "seq_parameter_set_rbsp" !== t.nalUnitType || i || (i = t.config, e.sps = [t.data], to.forEach(function (t) {
          e[t] = i[t];
        }, this));
        "pic_parameter_set_rbsp" !== t.nalUnitType || s || (s = t.data, e.pps = [t.data]);
        r.push(t);
      };
      this.flush = function () {
        for (l = 0, void 0; r.length && "access_unit_delimiter_rbsp" !== r[0].nalUnitType;) {
          var i;
          var s;
          var o;
          var l;
          r.shift();
        }
        if (0 !== r.length) {
          if (i = e7.groupNalsIntoFrames(r), (i = e7.groupFramesIntoGops(i))[0][0].keyFrame || ((h = this.getGopForFusion_(r[0], e)) ? (l = h.duration, i.unshift(h), i.byteLength += h.byteLength, i.nalCount += h.nalCount, i.pts = h.pts, i.dts = h.dts, i.duration += h.duration) : i = e7.extendFirstKeyFrame(i)), n.length) {
            var h = t.alignGopsAtEnd ? this.alignGopsAtEnd_(i) : this.alignGopsAtStart_(i);
            if (!h) {
              this.gopCache_.unshift({
                gop: i.pop(),
                pps: e.pps,
                sps: e.sps
              });
              this.gopCache_.length = Math.min(6, this.gopCache_.length);
              r = [];
              this.resetStream_();
              return void this.trigger("done", "VideoSegmentStream");
            }
            te.clearDtsInfo(e);
            i = h;
          }
          te.collectDtsInfo(e, i);
          e.samples = e7.generateSampleTable(i);
          h = e6.mdat(e7.concatenateNalData(i));
          e.baseMediaDecodeTime = te.calculateTrackBaseMediaDecodeTime(e, t.keepOriginalTimestamps);
          this.trigger("processedGopsInfo", i.map(function (e) {
            return {
              pts: e.pts,
              dts: e.dts,
              byteLength: e.byteLength
            };
          }));
          s = i[0];
          o = i[i.length - 1];
          this.trigger("segmentTimingInfo", e4(e.baseMediaDecodeTime, s.dts, s.pts, o.dts + o.duration, o.pts + o.duration, l));
          this.trigger("timingInfo", {
            start: i[0].pts,
            end: i[i.length - 1].pts + i[i.length - 1].duration
          });
          this.gopCache_.unshift({
            gop: i.pop(),
            pps: e.pps,
            sps: e.sps
          });
          this.gopCache_.length = Math.min(6, this.gopCache_.length);
          r = [];
          this.trigger("baseMediaDecodeTime", e.baseMediaDecodeTime);
          this.trigger("timelineStartInfo", e.timelineStartInfo);
          o = new Uint8Array((s = e6.moof(a, [e])).byteLength + h.byteLength);
          a++;
          o.set(s);
          o.set(h, s.byteLength);
          this.trigger("data", {
            track: e,
            boxes: o
          });
        }
        this.resetStream_();
        this.trigger("done", "VideoSegmentStream");
      };
      this.reset = function () {
        this.resetStream_();
        r = [];
        this.gopCache_.length = 0;
        n.length = 0;
        this.trigger("reset");
      };
      this.resetStream_ = function () {
        te.clearDtsInfo(e);
        s = i = void 0;
      };
      this.getGopForFusion_ = function (t) {
        for (n = 1 / 0, a = 0, void 0; a < this.gopCache_.length; a++) {
          var i;
          var s;
          var r;
          var n;
          var a;
          s = (r = this.gopCache_[a]).gop;
          e.pps && e2(e.pps[0], r.pps[0]) && e.sps && e2(e.sps[0], r.sps[0]) && (s.dts < e.timelineStartInfo.dts || -1e4 <= (s = t.dts - s.dts - s.duration) && s <= 45e3 && (!i || s < n) && (i = r, n = s));
        }
        return i ? i.gop : null;
      };
      this.alignGopsAtStart_ = function (e) {
        for (a = e.byteLength, o = e.nalCount, l = e.duration, h = t = 0, void 0; h < n.length && t < e.length && (i = n[h], s = e[t], i.pts !== s.pts);) {
          var t;
          var i;
          var s;
          var r;
          var a;
          var o;
          var l;
          var h;
          s.pts > i.pts ? h++ : (t++, a -= s.byteLength, o -= s.nalCount, l -= s.duration);
        }
        return 0 === t ? e : t === e.length ? null : ((r = e.slice(t)).byteLength = a, r.duration = l, r.nalCount = o, r.pts = r[0].pts, r.dts = r[0].dts, r);
      };
      this.alignGopsAtEnd_ = function (e) {
        for (a = n.length - 1, o = e.length - 1, l = null, h = !1, void 0; 0 <= a && 0 <= o;) {
          var t;
          var i;
          var s;
          var r;
          var a;
          var o;
          var l;
          var h;
          if (t = n[a], i = e[o], t.pts === i.pts) {
            h = !0;
            break;
          }
          t.pts > i.pts ? a-- : (a === n.length - 1 && (l = o), o--);
        }
        return h || null !== l ? 0 === (s = h ? o : l) ? e : (r = (s = e.slice(s)).reduce(function (e, t) {
          e.byteLength += t.byteLength;
          e.duration += t.duration;
          e.nalCount += t.nalCount;
          return e;
        }, {
          byteLength: 0,
          duration: 0,
          nalCount: 0
        }), s.byteLength = r.byteLength, s.duration = r.duration, s.nalCount = r.nalCount, s.pts = s[0].pts, s.dts = s[0].dts, s) : null;
      };
      this.alignGopsWith = function (e) {
        n = e;
      };
    }).prototype = new eJ();
    ((e3 = function (e, t) {
      this.numberOfTracks = 0;
      this.metadataStream = t;
      void 0 !== (e = e || {}).remux ? this.remuxTracks = !!e.remux : this.remuxTracks = !0;
      "boolean" == typeof e.keepOriginalTimestamps ? this.keepOriginalTimestamps = e.keepOriginalTimestamps : this.keepOriginalTimestamps = !1;
      this.pendingTracks = [];
      this.videoTrack = null;
      this.pendingBoxes = [];
      this.pendingCaptions = [];
      this.pendingMetadata = [];
      this.pendingBytes = 0;
      this.emittedTracks = 0;
      e3.prototype.init.call(this);
      this.push = function (e) {
        return e.content || e.text ? this.pendingCaptions.push(e) : e.frames ? this.pendingMetadata.push(e) : (this.pendingTracks.push(e.track), this.pendingBytes += e.boxes.byteLength, "video" === e.track.type && (this.videoTrack = e.track, this.pendingBoxes.push(e.boxes)), void ("audio" === e.track.type && (this.audioTrack = e.track, this.pendingBoxes.unshift(e.boxes))));
      };
    }).prototype = new eJ()).flush = function (e) {
      var t;
      var i;
      var s;
      var r = 0;
      var n = {
        captions: [],
        captionStreams: {},
        metadata: [],
        info: {}
      };
      var a = 0;
      if (this.pendingTracks.length < this.numberOfTracks) {
        if ("VideoSegmentStream" !== e && "AudioSegmentStream" !== e || this.remuxTracks) return;
        if (0 === this.pendingTracks.length) {
          this.emittedTracks++;
          return void (this.emittedTracks >= this.numberOfTracks && (this.trigger("done"), this.emittedTracks = 0));
        }
      }
      if (this.videoTrack ? (a = this.videoTrack.timelineStartInfo.pts, to.forEach(function (e) {
        n.info[e] = this.videoTrack[e];
      }, this)) : this.audioTrack && (a = this.audioTrack.timelineStartInfo.pts, ta.forEach(function (e) {
        n.info[e] = this.audioTrack[e];
      }, this)), this.videoTrack || this.audioTrack) {
        for (1 === this.pendingTracks.length ? n.type = this.pendingTracks[0].type : n.type = "combined", this.emittedTracks += this.pendingTracks.length, e = e6.initSegment(this.pendingTracks), n.initSegment = new Uint8Array(e.byteLength), n.initSegment.set(e), n.data = new Uint8Array(this.pendingBytes), s = 0; s < this.pendingBoxes.length; s++) {
          n.data.set(this.pendingBoxes[s], r);
          r += this.pendingBoxes[s].byteLength;
        }
        for (s = 0; s < this.pendingCaptions.length; s++) {
          (t = this.pendingCaptions[s]).startTime = eh.metadataTsToSeconds(t.startPts, a, this.keepOriginalTimestamps);
          t.endTime = eh.metadataTsToSeconds(t.endPts, a, this.keepOriginalTimestamps);
          n.captionStreams[t.stream] = !0;
          n.captions.push(t);
        }
        for (s = 0; s < this.pendingMetadata.length; s++) {
          (i = this.pendingMetadata[s]).cueTime = eh.metadataTsToSeconds(i.pts, a, this.keepOriginalTimestamps);
          n.metadata.push(i);
        }
        for (n.metadata.dispatchType = this.metadataStream.dispatchType, this.pendingTracks.length = 0, this.videoTrack = null, this.pendingBoxes.length = 0, this.pendingCaptions.length = 0, this.pendingBytes = 0, this.pendingMetadata.length = 0, this.trigger("data", n), s = 0; s < n.captions.length; s++) {
          t = n.captions[s];
          this.trigger("caption", t);
        }
        for (s = 0; s < n.metadata.length; s++) {
          i = n.metadata[s];
          this.trigger("id3Frame", i);
        }
      }
      this.emittedTracks >= this.numberOfTracks && (this.trigger("done"), this.emittedTracks = 0);
    };
    e3.prototype.setRemux = function (e) {
      this.remuxTracks = e;
    };
    (e5 = function (e) {
      var t;
      var i;
      var s = this;
      var r = !0;
      e5.prototype.init.call(this);
      e = e || {};
      this.baseMediaDecodeTime = e.baseMediaDecodeTime || 0;
      this.transmuxPipeline_ = {};
      this.setupAacPipeline = function () {
        var r = {};
        (this.transmuxPipeline_ = r).type = "aac";
        r.metadataStream = new tt.MetadataStream();
        r.aacStream = new e0();
        r.audioTimestampRolloverStream = new tt.TimestampRolloverStream("audio");
        r.timedMetadataTimestampRolloverStream = new tt.TimestampRolloverStream("timed-metadata");
        r.adtsStream = new ti();
        r.coalesceStream = new e3(e, r.metadataStream);
        r.headOfPipeline = r.aacStream;
        r.aacStream.pipe(r.audioTimestampRolloverStream).pipe(r.adtsStream);
        r.aacStream.pipe(r.timedMetadataTimestampRolloverStream).pipe(r.metadataStream).pipe(r.coalesceStream);
        r.metadataStream.on("timestamp", function (e) {
          r.aacStream.setTimestamp(e.timeStamp);
        });
        r.aacStream.on("data", function (n) {
          "timed-metadata" !== n.type && "audio" !== n.type || r.audioSegmentStream || (i = i || {
            timelineStartInfo: {
              baseMediaDecodeTime: s.baseMediaDecodeTime
            },
            codec: "adts",
            type: "audio"
          }, r.coalesceStream.numberOfTracks++, r.audioSegmentStream = new th(i, e), r.audioSegmentStream.on("log", s.getLogTrigger_("audioSegmentStream")), r.audioSegmentStream.on("timingInfo", s.trigger.bind(s, "audioTimingInfo")), r.adtsStream.pipe(r.audioSegmentStream).pipe(r.coalesceStream), s.trigger("trackinfo", {
            hasAudio: !!i,
            hasVideo: !!t
          }));
        });
        r.coalesceStream.on("data", this.trigger.bind(this, "data"));
        r.coalesceStream.on("done", this.trigger.bind(this, "done"));
        e1(this, r);
      };
      this.setupTsPipeline = function () {
        var r = {};
        (this.transmuxPipeline_ = r).type = "ts";
        r.metadataStream = new tt.MetadataStream();
        r.packetStream = new tt.TransportPacketStream();
        r.parseStream = new tt.TransportParseStream();
        r.elementaryStream = new tt.ElementaryStream();
        r.timestampRolloverStream = new tt.TimestampRolloverStream();
        r.adtsStream = new ti();
        r.h264Stream = new ts();
        r.captionStream = new tt.CaptionStream(e);
        r.coalesceStream = new e3(e, r.metadataStream);
        r.headOfPipeline = r.packetStream;
        r.packetStream.pipe(r.parseStream).pipe(r.elementaryStream).pipe(r.timestampRolloverStream);
        r.timestampRolloverStream.pipe(r.h264Stream);
        r.timestampRolloverStream.pipe(r.adtsStream);
        r.timestampRolloverStream.pipe(r.metadataStream).pipe(r.coalesceStream);
        r.h264Stream.pipe(r.captionStream).pipe(r.coalesceStream);
        r.elementaryStream.on("data", function (n) {
          var a;
          if ("metadata" === n.type) {
            for (a = n.tracks.length; a--;) t || "video" !== n.tracks[a].type ? i || "audio" !== n.tracks[a].type || ((i = n.tracks[a]).timelineStartInfo.baseMediaDecodeTime = s.baseMediaDecodeTime) : (t = n.tracks[a]).timelineStartInfo.baseMediaDecodeTime = s.baseMediaDecodeTime;
            t && !r.videoSegmentStream && (r.coalesceStream.numberOfTracks++, r.videoSegmentStream = new e8(t, e), r.videoSegmentStream.on("log", s.getLogTrigger_("videoSegmentStream")), r.videoSegmentStream.on("timelineStartInfo", function (t) {
              i && !e.keepOriginalTimestamps && (i.timelineStartInfo = t, r.audioSegmentStream.setEarliestDts(t.dts - s.baseMediaDecodeTime));
            }), r.videoSegmentStream.on("processedGopsInfo", s.trigger.bind(s, "gopInfo")), r.videoSegmentStream.on("segmentTimingInfo", s.trigger.bind(s, "videoSegmentTimingInfo")), r.videoSegmentStream.on("baseMediaDecodeTime", function (e) {
              i && r.audioSegmentStream.setVideoBaseMediaDecodeTime(e);
            }), r.videoSegmentStream.on("timingInfo", s.trigger.bind(s, "videoTimingInfo")), r.h264Stream.pipe(r.videoSegmentStream).pipe(r.coalesceStream));
            i && !r.audioSegmentStream && (r.coalesceStream.numberOfTracks++, r.audioSegmentStream = new th(i, e), r.audioSegmentStream.on("log", s.getLogTrigger_("audioSegmentStream")), r.audioSegmentStream.on("timingInfo", s.trigger.bind(s, "audioTimingInfo")), r.audioSegmentStream.on("segmentTimingInfo", s.trigger.bind(s, "audioSegmentTimingInfo")), r.adtsStream.pipe(r.audioSegmentStream).pipe(r.coalesceStream));
            s.trigger("trackinfo", {
              hasAudio: !!i,
              hasVideo: !!t
            });
          }
        });
        r.coalesceStream.on("data", this.trigger.bind(this, "data"));
        r.coalesceStream.on("id3Frame", function (e) {
          e.dispatchType = r.metadataStream.dispatchType;
          s.trigger("id3Frame", e);
        });
        r.coalesceStream.on("caption", this.trigger.bind(this, "caption"));
        r.coalesceStream.on("done", this.trigger.bind(this, "done"));
        e1(this, r);
      };
      this.setBaseMediaDecodeTime = function (s) {
        var r = this.transmuxPipeline_;
        e.keepOriginalTimestamps || (this.baseMediaDecodeTime = s);
        i && (i.timelineStartInfo.dts = void 0, i.timelineStartInfo.pts = void 0, te.clearDtsInfo(i), r.audioTimestampRolloverStream) && r.audioTimestampRolloverStream.discontinuity();
        t && (r.videoSegmentStream && (r.videoSegmentStream.gopCache_ = []), t.timelineStartInfo.dts = void 0, t.timelineStartInfo.pts = void 0, te.clearDtsInfo(t), r.captionStream.reset());
        r.timestampRolloverStream && r.timestampRolloverStream.discontinuity();
      };
      this.setAudioAppendStart = function (e) {
        i && this.transmuxPipeline_.audioSegmentStream.setAudioAppendStart(e);
      };
      this.setRemux = function (t) {
        var i = this.transmuxPipeline_;
        e.remux = t;
        i && i.coalesceStream && i.coalesceStream.setRemux(t);
      };
      this.alignGopsWith = function (e) {
        t && this.transmuxPipeline_.videoSegmentStream && this.transmuxPipeline_.videoSegmentStream.alignGopsWith(e);
      };
      this.getLogTrigger_ = function (e) {
        var t = this;
        return function (i) {
          i.stream = e;
          t.trigger("log", i);
        };
      };
      this.push = function (e) {
        var t;
        r && ((t = tr(e)) && "aac" !== this.transmuxPipeline_.type ? this.setupAacPipeline() : t || "ts" === this.transmuxPipeline_.type || this.setupTsPipeline(), r = !1);
        this.transmuxPipeline_.headOfPipeline.push(e);
      };
      this.flush = function () {
        r = !0;
        this.transmuxPipeline_.headOfPipeline.flush();
      };
      this.endTimeline = function () {
        this.transmuxPipeline_.headOfPipeline.endTimeline();
      };
      this.reset = function () {
        this.transmuxPipeline_.headOfPipeline && this.transmuxPipeline_.headOfPipeline.reset();
      };
      this.resetCaptions = function () {
        this.transmuxPipeline_.captionStream && this.transmuxPipeline_.captionStream.reset();
      };
    }).prototype = new eJ();
    var tf = e5;
    var q = function (e) {
      return e >>> 0;
    };
    var en = function (e) {
      return ("00" + e.toString(16)).slice(-2);
    };
    var ty = q;
    var t_ = td;
    var tv = q;
    var tb = function (e) {
      return {
        isLeading: (12 & e[0]) >>> 2,
        dependsOn: 3 & e[0],
        isDependedOn: (192 & e[1]) >>> 6,
        hasRedundancy: (48 & e[1]) >>> 4,
        paddingValue: (14 & e[1]) >>> 1,
        isNonSyncSample: 1 & e[1],
        degradationPriority: e[2] << 8 | e[3]
      };
    };
    var ea = "undefined" != typeof window ? window : void 0 !== F ? F : "undefined" != typeof self ? self : {};
    var eM = ea;
    var tT = el.discardEmulationPreventionBytes;
    var tS = ec.CaptionStream;
    var tw = function (e) {
      var t = {
        version: e[0],
        flags: new Uint8Array(e.subarray(1, 4))
      };
      t.baseMediaDecodeTime = 1 === t.version ? j(e.subarray(4)) : tv(e[4] << 24 | e[5] << 16 | e[6] << 8 | e[7]);
      return t;
    };
    var tE = function (e) {
      var t;
      var i = {
        version: e[0],
        flags: new Uint8Array(e.subarray(1, 4)),
        samples: []
      };
      var s = new DataView(e.buffer, e.byteOffset, e.byteLength);
      var r = 1 & i.flags[2];
      var n = 4 & i.flags[2];
      var a = 1 & i.flags[1];
      var o = 2 & i.flags[1];
      var l = 4 & i.flags[1];
      var h = 8 & i.flags[1];
      var d = s.getUint32(4);
      var u = 8;
      for (r && (i.dataOffset = s.getInt32(u), u += 4), n && d && (t = {
        flags: tb(e.subarray(u, u + 4))
      }, u += 4, a && (t.duration = s.getUint32(u), u += 4), o && (t.size = s.getUint32(u), u += 4), h && (t.compositionTimeOffset = 1 === i.version ? s.getInt32(u) : s.getUint32(u), u += 4), i.samples.push(t), d--); d--;) {
        t = {};
        a && (t.duration = s.getUint32(u), u += 4);
        o && (t.size = s.getUint32(u), u += 4);
        l && (t.flags = tb(e.subarray(u, u + 4)), u += 4);
        h && (t.compositionTimeOffset = 1 === i.version ? s.getInt32(u) : s.getUint32(u), u += 4);
        i.samples.push(t);
      }
      return i;
    };
    var tC = function (e) {
      var t = new DataView(e.buffer, e.byteOffset, e.byteLength);
      var i = 1 & (e = {
        version: e[0],
        flags: new Uint8Array(e.subarray(1, 4)),
        trackId: t.getUint32(4)
      }).flags[2];
      var s = 2 & e.flags[2];
      var r = 8 & e.flags[2];
      var n = 16 & e.flags[2];
      var a = 32 & e.flags[2];
      var o = 65536 & e.flags[0];
      var l = 131072 & e.flags[0];
      var h = 8;
      i && (h += 4, e.baseDataOffset = t.getUint32(12), h += 4);
      s && (e.sampleDescriptionIndex = t.getUint32(h), h += 4);
      r && (e.defaultSampleDuration = t.getUint32(h), h += 4);
      n && (e.defaultSampleSize = t.getUint32(h), h += 4);
      a && (e.defaultSampleFlags = t.getUint32(h));
      o && (e.durationIsEmpty = !0);
      !i && l && (e.baseDataOffsetIsMoof = !0);
      return e;
    };
    var tk = eM;
    var tx = function (e, t) {
      var i = tu(e, ["moof", "traf"]);
      var e = tu(e, ["mdat"]);
      var s = {};
      var r = [];
      e.forEach(function (e, t) {
        t = i[t];
        r.push({
          mdat: e,
          traf: t
        });
      });
      r.forEach(function (e) {
        var i;
        var r;
        var n;
        var a;
        var o;
        var l = e.mdat;
        var e = e.traf;
        var h = tu(e, ["tfhd"]);
        var h = tC(h[0]);
        var d = h.trackId;
        var u = tu(e, ["tfdt"]);
        var u = 0 < u.length ? tw(u[0]).baseMediaDecodeTime : 0;
        var e = tu(e, ["trun"]);
        t === d && 0 < e.length && (i = u, r = h.defaultSampleDuration || 0, n = h.defaultSampleSize || 0, a = h.trackId, o = [], e.forEach(function (e) {
          (e = tE(e).samples).forEach(function (e) {
            void 0 === e.duration && (e.duration = r);
            void 0 === e.size && (e.size = n);
            e.trackId = a;
            e.dts = i;
            void 0 === e.compositionTimeOffset && (e.compositionTimeOffset = 0);
            "bigint" == typeof i ? (e.pts = i + tk.BigInt(e.compositionTimeOffset), i += tk.BigInt(e.duration)) : (e.pts = i + e.compositionTimeOffset, i += e.duration);
          });
          o = o.concat(e);
        }), u = function (e, t, i) {
          for (n = new DataView(e.buffer, e.byteOffset, e.byteLength), a = {
            logs: [],
            seiNals: []
          }, o = 0, void 0; o + 4 < e.length; o += s) {
            var s;
            var r;
            var n;
            var a;
            var o;
            if (s = n.getUint32(o), o += 4, !(s <= 0)) switch (31 & e[o]) {
              case 6:
                var l = e.subarray(o + 1, o + 1 + s);
                var h = function (e, t) {
                  for (i = e, s = 0, void 0; s < t.length; s++) {
                    var i;
                    var s;
                    var r = t[s];
                    if (i < r.size) return r;
                    i -= r.size;
                  }
                  return null;
                }(o, t);
                var l = {
                  nalUnitType: "sei_rbsp",
                  size: s,
                  data: l,
                  escapedRBSP: tT(l),
                  trackId: i
                };
                if (h) {
                  l.pts = h.pts;
                  l.dts = h.dts;
                  r = h;
                } else {
                  if (!r) {
                    a.logs.push({
                      level: "warn",
                      message: "We've encountered a nal unit without data at " + o + " for trackId " + i + ". See mux.js#223."
                    });
                    break;
                  }
                  l.pts = r.pts;
                  l.dts = r.dts;
                }
                a.seiNals.push(l);
            }
          }
          return a;
        }(l, o, d), s[d] || (s[d] = {
          seiNals: [],
          logs: []
        }), s[d].seiNals = s[d].seiNals.concat(u.seiNals), s[d].logs = s[d].logs.concat(u.logs));
      });
      return s;
    };
    var tI = function () {
      var e;
      var t;
      var i;
      var s;
      var r;
      var n;
      var a = !1;
      this.isInitialized = function () {
        return a;
      };
      this.init = function (t) {
        e = new tS();
        a = !0;
        n = !!t && t.isPartial;
        e.on("data", function (e) {
          e.startTime = e.startPts / s;
          e.endTime = e.endPts / s;
          r.captions.push(e);
          r.captionStreams[e.stream] = !0;
        });
        e.on("log", function (e) {
          r.logs.push(e);
        });
      };
      this.isNewInit = function (e, t) {
        return !(e && 0 === e.length || t && "object" == typeof t && 0 === Object.keys(t).length || i === e[0] && s === t[i]);
      };
      this.parse = function (e, n, a) {
        var o;
        var l;
        if (!this.isInitialized() || !n || !a) return null;
        if (this.isNewInit(n, a)) s = a[i = n[0]]; else if (null === i || !s) {
          t.push(e);
          return null;
        }
        for (; 0 < t.length;) {
          var h = t.shift();
          this.parse(h, n, a);
        }
        l = s;
        (o = null === (o = i) ? null : {
          seiNals: (e = tx(e, o)[o] || {}).seiNals,
          logs: e.logs,
          timescale: l
        }) && o.logs && (r.logs = r.logs.concat(o.logs));
        return null !== o && o.seiNals ? (this.pushNals(o.seiNals), this.flushStream(), r) : r.logs.length ? {
          logs: r.logs,
          captions: [],
          captionStreams: []
        } : null;
      };
      this.pushNals = function (t) {
        if (!this.isInitialized() || !t || 0 === t.length) return null;
        t.forEach(function (t) {
          e.push(t);
        });
      };
      this.flushStream = function () {
        if (!this.isInitialized()) return null;
        n ? e.partialFlush() : e.flush();
      };
      this.clearParsedCaptions = function () {
        r.captions = [];
        r.captionStreams = {};
        r.logs = [];
      };
      this.resetCaptionStream = function () {
        if (!this.isInitialized()) return null;
        e.reset();
      };
      this.clearAllCaptions = function () {
        this.clearParsedCaptions();
        this.resetCaptionStream();
      };
      this.reset = function () {
        t = [];
        s = i = null;
        r ? this.clearParsedCaptions() : r = {
          captions: [],
          captionStreams: {},
          logs: []
        };
        this.resetCaptionStream();
      };
      this.reset();
    };
    var tA = function (e) {
      for (t = 0, i = String.fromCharCode(e[t]), s = "", void 0; "\0" !== i;) {
        var t;
        var i;
        var s;
        s += i;
        i = String.fromCharCode(e[++t]);
      }
      return s + i;
    };
    var tD = function (e) {
      return void 0 !== e || null !== e;
    };
    var tL = q;
    var tP = en;
    var tO = function (e) {
      var t;
      var i;
      var s;
      var r;
      var n;
      var a;
      var o;
      var l = 4;
      var h = e[0];
      0 === h ? (l = (l += (r = tA(e.subarray(l))).length) + (n = tA(e.subarray(l))).length, s = (d = new DataView(e.buffer)).getUint32(l), o = d.getUint32(l += 4), t = d.getUint32(l += 4), i = d.getUint32(l += 4), l += 4) : 1 === h && (s = (d = new DataView(e.buffer)).getUint32(l), a = j(e.subarray(l += 4)), t = d.getUint32(l += 8), i = d.getUint32(l += 4), l = (l = (l += 4) + (r = tA(e.subarray(l))).length) + (n = tA(e.subarray(l))).length);
      var d = {
        scheme_id_uri: r,
        value: n,
        timescale: s || 1,
        presentation_time: a,
        presentation_time_delta: o,
        event_duration: t,
        id: i,
        message_data: new Uint8Array(e.subarray(l, e.byteLength))
      };
      n = "\0" !== (r = d).scheme_id_uri;
      a = 0 === (s = h) && tD(r.presentation_time_delta) && n;
      o = 1 === s && tD(r.presentation_time) && n;
      return !(1 < s) && a || o ? d : void 0;
    };
    var tN = function (e, t, i, s) {
      return e || 0 === e ? e / t : s + i / t;
    };
    var tR = eM;
    var tM = eO.parseId3Frames;
    var tU = function (e) {
      var t = 0 === e[0] ? 12 : 20;
      return tL(e[t] << 24 | e[1 + t] << 16 | e[2 + t] << 8 | e[3 + t]);
    };
    var tB = function (e) {
      var e = tu(e, ["moov", "trak"]);
      var t = [];
      e.forEach(function (e) {
        var i;
        var s = {};
        var r = tu(e, ["tkhd"])[0];
        r && (n = (r = new DataView(r.buffer, r.byteOffset, r.byteLength)).getUint8(0), s.id = 0 === n ? r.getUint32(12) : r.getUint32(20));
        var n = tu(e, ["mdia", "hdlr"])[0];
        n && (r = td(n.subarray(8, 12)), s.type = "vide" === r ? "video" : "soun" === r ? "audio" : r);
        var n = tu(e, ["mdia", "minf", "stbl", "stsd"])[0];
        n && (r = n.subarray(8), s.codec = td(r.subarray(4, 8)), n = tu(r, [s.codec])[0]) && (/^[asm]vc[1-9]$/i.test(s.codec) ? "avcC" === td((i = n.subarray(78)).subarray(4, 8)) && 11 < i.length ? (s.codec += ".", s.codec += tP(i[9]), s.codec += tP(i[10]), s.codec += tP(i[11])) : s.codec = "avc1.4d400d" : /^mp4[a,v]$/i.test(s.codec) ? "esds" === td((i = n.subarray(28)).subarray(4, 8)) && 20 < i.length && 0 !== i[19] ? (s.codec += "." + tP(i[19]), s.codec += "." + tP(i[20] >>> 2 & 63).replace(/^0/, "")) : s.codec = "mp4a.40.2" : s.codec = s.codec.toLowerCase());
        var r = tu(e, ["mdia", "mdhd"])[0];
        r && (s.timescale = tU(r));
        t.push(s);
      });
      return t;
    };
    var tF = {};
    tF.ts = {
      parseType: function (e, t) {
        return 0 === (e = tc(e)) ? "pat" : e === t ? "pmt" : t ? "pes" : null;
      },
      parsePat: function (e) {
        var t = tp(e);
        var i = 4 + tm(e);
        t && (i += e[i] + 1);
        return (31 & e[i + 10]) << 8 | e[i + 11];
      },
      parsePmt: function (e) {
        var t = {};
        var i = tp(e);
        var s = 4 + tm(e);
        if (i && (s += e[s] + 1), 1 & e[s + 5]) {
          for (r = 3 + ((15 & e[s + 1]) << 8 | e[s + 2]) - 4, n = 12 + ((15 & e[s + 10]) << 8 | e[s + 11]), void 0; n < r;) {
            var r;
            var n;
            var a = s + n;
            t[(31 & e[a + 1]) << 8 | e[a + 2]] = e[a];
            n += 5 + ((15 & e[a + 3]) << 8 | e[a + 4]);
          }
          return t;
        }
      },
      parsePayloadUnitStartIndicator: tp,
      parsePesType: function (e, t) {
        switch (t[tc(e)]) {
          case eb.H264_STREAM_TYPE:
            return "video";
          case eb.ADTS_STREAM_TYPE:
            return "audio";
          case eb.METADATA_STREAM_TYPE:
            return "timed-metadata";
          default:
            return null;
        }
      },
      parsePesTime: function (e) {
        var t;
        var i;
        var s;
        return !tp(e) || (t = 4 + tm(e)) >= e.byteLength ? null : (i = null, 192 & (s = e[t + 7]) && ((i = {}).pts = (14 & e[t + 9]) << 27 | (255 & e[t + 10]) << 20 | (254 & e[t + 11]) << 12 | (255 & e[t + 12]) << 5 | (254 & e[t + 13]) >>> 3, i.pts *= 4, i.pts += (6 & e[t + 13]) >>> 1, i.dts = i.pts, 64 & s) && (i.dts = (14 & e[t + 14]) << 27 | (255 & e[t + 15]) << 20 | (254 & e[t + 16]) << 12 | (255 & e[t + 17]) << 5 | (254 & e[t + 18]) >>> 3, i.dts *= 4, i.dts += (6 & e[t + 18]) >>> 1), i);
      },
      videoPacketContainsKeyFrame: function (e) {
        for (t = 4 + tm(e), i = e.subarray(t), s = 0, r = 0, n = !1, void 0; r < i.byteLength - 3; r++) {
          var t;
          var i;
          var s;
          var r;
          var n;
          if (1 === i[r + 2]) {
            s = r + 5;
            break;
          }
        }
        for (; s < i.byteLength;) switch (i[s]) {
          case 0:
            if (0 !== i[s - 1]) s += 2; else if (0 !== i[s - 2]) s++; else {
              for (r + 3 !== s - 2 && "slice_layer_without_partitioning_rbsp_idr" === tg(31 & i[r + 3]) && (n = !0); 1 !== i[++s] && s < i.length;);
              r = s - 2;
              s += 3;
            }
            break;
          case 1:
            0 !== i[s - 1] || 0 !== i[s - 2] || ("slice_layer_without_partitioning_rbsp_idr" === tg(31 & i[r + 3]) && (n = !0), r = s - 2);
            s += 3;
            break;
          default:
            s += 3;
        }
        i = i.subarray(r);
        s -= r;
        r = 0;
        return n = !!i && 3 < i.byteLength && "slice_layer_without_partitioning_rbsp_idr" === tg(31 & i[r + 3]) || n;
      }
    };
    tF.aac = eN;
    var tq = eh.ONE_SECOND_IN_TS;
    var tj = function (e, t) {
      for (s = 0, r = 188, void 0; r < e.byteLength;) {
        var i;
        var s;
        var r;
        if (71 === e[s] && 71 === e[r]) {
          switch (i = e.subarray(s, r), tF.ts.parseType(i, t.pid)) {
            case "pat":
              t.pid = tF.ts.parsePat(i);
              break;
            case "pmt":
              var n = tF.ts.parsePmt(i);
              t.table = t.table || {};
              Object.keys(n).forEach(function (e) {
                t.table[e] = n[e];
              });
          }
          s += 188;
          r += 188;
        } else {
          s++;
          r++;
        }
      }
    };
    var tH = function (e, t, i) {
      for (o = 0, l = 188, h = !1, void 0; l <= e.byteLength;) {
        var s;
        var r;
        var n;
        var a;
        var o;
        var l;
        var h;
        if (71 !== e[o] || 71 !== e[l] && l !== e.byteLength) {
          o++;
          l++;
        } else {
          if (s = e.subarray(o, l), "pes" === tF.ts.parseType(s, t.pid) && (r = tF.ts.parsePesType(s, t.table), n = tF.ts.parsePayloadUnitStartIndicator(s), "audio" === r) && n && (a = tF.ts.parsePesTime(s)) && (a.type = "audio", i.audio.push(a), h = !0), h) break;
          o += 188;
          l += 188;
        }
      }
      for (o = (l = e.byteLength) - 188, h = !1; 0 <= o;) if (71 !== e[o] || 71 !== e[l] && l !== e.byteLength) {
        o--;
        l--;
      } else {
        if (s = e.subarray(o, l), "pes" === tF.ts.parseType(s, t.pid) && (r = tF.ts.parsePesType(s, t.table), n = tF.ts.parsePayloadUnitStartIndicator(s), "audio" === r) && n && (a = tF.ts.parsePesTime(s)) && (a.type = "audio", i.audio.push(a), h = !0), h) break;
        o -= 188;
        l -= 188;
      }
    };
    var tV = function (e, t, i) {
      for (u = 0, c = 188, p = !1, m = {
        data: [],
        size: 0
      }, void 0; c < e.byteLength;) {
        var s;
        var r;
        var n;
        var a;
        var o;
        var l;
        var h;
        var d;
        var u;
        var c;
        var p;
        var m;
        if (71 === e[u] && 71 === e[c]) {
          if (s = e.subarray(u, c), "pes" === tF.ts.parseType(s, t.pid) && (r = tF.ts.parsePesType(s, t.table), n = tF.ts.parsePayloadUnitStartIndicator(s), "video" === r && (n && !p && (a = tF.ts.parsePesTime(s)) && (a.type = "video", i.video.push(a), p = !0), !i.firstKeyFrame))) {
            if (n && 0 !== m.size) {
              for (o = new Uint8Array(m.size), l = 0; m.data.length;) {
                h = m.data.shift();
                o.set(h, l);
                l += h.byteLength;
              }
              tF.ts.videoPacketContainsKeyFrame(o) && (d = tF.ts.parsePesTime(o)) && (i.firstKeyFrame = d, i.firstKeyFrame.type = "video");
              m.size = 0;
            }
            m.data.push(s);
            m.size += s.byteLength;
          }
          if (p && i.firstKeyFrame) break;
          u += 188;
          c += 188;
        } else {
          u++;
          c++;
        }
      }
      for (u = (c = e.byteLength) - 188, p = !1; 0 <= u;) if (71 === e[u] && 71 === e[c]) {
        if (s = e.subarray(u, c), "pes" === tF.ts.parseType(s, t.pid) && (r = tF.ts.parsePesType(s, t.table), n = tF.ts.parsePayloadUnitStartIndicator(s), "video" === r) && n && (a = tF.ts.parsePesTime(s)) && (a.type = "video", i.video.push(a), p = !0), p) break;
        u -= 188;
        c -= 188;
      } else {
        u--;
        c--;
      }
    };
    var t$ = function (e, t) {
      var i;
      var s;
      var r;
      var e = (tF.aac.isLikelyAacData(e) ? function (e) {
        for (s = !1, r = 0, n = null, a = null, o = 0, l = 0, void 0; 3 <= e.length - l;) {
          var t;
          var i;
          var s;
          var r;
          var n;
          var a;
          var o;
          var l;
          switch (tF.aac.parseType(e, l)) {
            case "timed-metadata":
              e.length - l < 10 ? s = !0 : (o = tF.aac.parseId3TagSize(e, l)) > e.length ? s = !0 : (null === a && (t = e.subarray(l, l + o), a = tF.aac.parseAacTimestamp(t)), l += o);
              break;
            case "audio":
              e.length - l < 7 ? s = !0 : (o = tF.aac.parseAdtsSize(e, l)) > e.length ? s = !0 : (null === n && (t = e.subarray(l, l + o), n = tF.aac.parseSampleRate(t)), r++, l += o);
              break;
            default:
              l++;
          }
          if (s) return null;
        }
        return null === n || null === a ? null : {
          audio: [{
            type: "audio",
            dts: a,
            pts: a
          }, {
            type: "audio",
            dts: a + 1024 * r * (i = tq / n),
            pts: a + 1024 * r * i
          }]
        };
      } : function (e) {
        var t;
        var i = {
          pid: null,
          table: null
        };
        var s = {};
        for (t in tj(e, i), i.table) if (i.table.hasOwnProperty(t)) switch (i.table[t]) {
          case eb.H264_STREAM_TYPE:
            s.video = [];
            tV(e, i, s);
            0 === s.video.length && delete s.video;
            break;
          case eb.ADTS_STREAM_TYPE:
            s.audio = [];
            tH(e, i, s);
            0 === s.audio.length && delete s.audio;
        }
        return s;
      })(e);
      return e && (e.audio || e.video) ? ((i = e).audio && i.audio.length && ((t || isNaN(s)) && (s = i.audio[0].dts), i.audio.forEach(function (e) {
        e.dts = Q(e.dts, s);
        e.pts = Q(e.pts, s);
        e.dtsTime = e.dts / tq;
        e.ptsTime = e.pts / tq;
      })), i.video && i.video.length && ((t || isNaN(r)) && (r = i.video[0].dts), i.video.forEach(function (e) {
        e.dts = Q(e.dts, r);
        e.pts = Q(e.pts, r);
        e.dtsTime = e.dts / tq;
        e.ptsTime = e.pts / tq;
      }), i.firstKeyFrame) && ((t = i.firstKeyFrame).dts = Q(t.dts, r), t.pts = Q(t.pts, r), t.dtsTime = t.dts / tq, t.ptsTime = t.pts / tq), e) : null;
    };
    class tz {
      constructor(e, t) {
        this.options = t || {};
        this.self = e;
        this.init();
      }
      init() {
        var e;
        var t;
        this.transmuxer && this.transmuxer.dispose();
        this.transmuxer = new tf(this.options);
        e = this.self;
        (t = this.transmuxer).on("data", function (t) {
          var i = t.initSegment;
          t.initSegment = {
            data: i.buffer,
            byteOffset: i.byteOffset,
            byteLength: i.byteLength
          };
          var i = t.data;
          t.data = i.buffer;
          e.postMessage({
            action: "data",
            segment: t,
            byteOffset: i.byteOffset,
            byteLength: i.byteLength
          }, [t.data]);
        });
        t.on("done", function (t) {
          e.postMessage({
            action: "done"
          });
        });
        t.on("gopInfo", function (t) {
          e.postMessage({
            action: "gopInfo",
            gopInfo: t
          });
        });
        t.on("videoSegmentTimingInfo", function (t) {
          var i = {
            start: {
              decode: eh.videoTsToSeconds(t.start.dts),
              presentation: eh.videoTsToSeconds(t.start.pts)
            },
            end: {
              decode: eh.videoTsToSeconds(t.end.dts),
              presentation: eh.videoTsToSeconds(t.end.pts)
            },
            baseMediaDecodeTime: eh.videoTsToSeconds(t.baseMediaDecodeTime)
          };
          t.prependedContentDuration && (i.prependedContentDuration = eh.videoTsToSeconds(t.prependedContentDuration));
          e.postMessage({
            action: "videoSegmentTimingInfo",
            videoSegmentTimingInfo: i
          });
        });
        t.on("audioSegmentTimingInfo", function (t) {
          var i = {
            start: {
              decode: eh.videoTsToSeconds(t.start.dts),
              presentation: eh.videoTsToSeconds(t.start.pts)
            },
            end: {
              decode: eh.videoTsToSeconds(t.end.dts),
              presentation: eh.videoTsToSeconds(t.end.pts)
            },
            baseMediaDecodeTime: eh.videoTsToSeconds(t.baseMediaDecodeTime)
          };
          t.prependedContentDuration && (i.prependedContentDuration = eh.videoTsToSeconds(t.prependedContentDuration));
          e.postMessage({
            action: "audioSegmentTimingInfo",
            audioSegmentTimingInfo: i
          });
        });
        t.on("id3Frame", function (t) {
          e.postMessage({
            action: "id3Frame",
            id3Frame: t
          });
        });
        t.on("caption", function (t) {
          e.postMessage({
            action: "caption",
            caption: t
          });
        });
        t.on("trackinfo", function (t) {
          e.postMessage({
            action: "trackinfo",
            trackInfo: t
          });
        });
        t.on("audioTimingInfo", function (t) {
          e.postMessage({
            action: "audioTimingInfo",
            audioTimingInfo: {
              start: eh.videoTsToSeconds(t.start),
              end: eh.videoTsToSeconds(t.end)
            }
          });
        });
        t.on("videoTimingInfo", function (t) {
          e.postMessage({
            action: "videoTimingInfo",
            videoTimingInfo: {
              start: eh.videoTsToSeconds(t.start),
              end: eh.videoTsToSeconds(t.end)
            }
          });
        });
        t.on("log", function (t) {
          e.postMessage({
            action: "log",
            log: t
          });
        });
      }
      pushMp4Captions(e) {
        this.captionParser || (this.captionParser = new tI(), this.captionParser.init());
        var t = new Uint8Array(e.data, e.byteOffset, e.byteLength);
        var e = this.captionParser.parse(t, e.trackIds, e.timescales);
        this.self.postMessage({
          action: "mp4Captions",
          captions: e && e.captions || [],
          logs: e && e.logs || [],
          data: t.buffer
        }, [t.buffer]);
      }
      probeMp4StartTime({
        timescales: e,
        data: t
      }) {
        var i;
        var s;
        i = e;
        e = "bigint" == typeof (s = tu(s = t, ["moof", "traf"]).reduce(function (e, t) {
          let s;
          var r = tu(t, ["tfhd"])[0];
          var r = tL(r[4] << 24 | r[5] << 16 | r[6] << 8 | r[7]);
          var r = i[r] || 9e4;
          var t = tu(t, ["tfdt"])[0];
          var n = new DataView(t.buffer, t.byteOffset, t.byteLength);
          var t = 1 === t[0] ? j(t.subarray(4, 12)) : n.getUint32(4);
          "bigint" == typeof t ? s = t / tR.BigInt(r) : "number" != typeof t || isNaN(t) || (s = t / r);
          return e = (s = s < Number.MAX_SAFE_INTEGER ? Number(s) : s) < e ? s : e;
        }, 1 / 0)) || isFinite(s) ? s : 0;
        this.self.postMessage({
          action: "probeMp4StartTime",
          startTime: e,
          data: t
        }, [t.buffer]);
      }
      probeMp4Tracks({
        data: e
      }) {
        var t = tB(e);
        this.self.postMessage({
          action: "probeMp4Tracks",
          tracks: t,
          data: e
        }, [e.buffer]);
      }
      probeEmsgID3({
        data: e,
        offset: t
      }) {
        t = function (e, t = 0) {
          return tu(e, ["emsg"]).map(e => {
            var e = tO(new Uint8Array(e));
            var i = tM(e.message_data);
            return {
              cueTime: tN(e.presentation_time, e.timescale, e.presentation_time_delta, t),
              duration: tN(e.event_duration, e.timescale),
              frames: i
            };
          });
        }(e, t);
        this.self.postMessage({
          action: "probeEmsgID3",
          id3Frames: t,
          emsgData: e
        }, [e.buffer]);
      }
      probeTs({
        data: e,
        baseStartTime: t
      }) {
        t = t$(e, t = "number" != typeof t || isNaN(t) ? void 0 : t * eh.ONE_SECOND_IN_TS);
        let i = null;
        t && ((i = {
          hasVideo: t.video && 2 === t.video.length || !1,
          hasAudio: t.audio && 2 === t.audio.length || !1
        }).hasVideo && (i.videoStart = t.video[0].ptsTime), i.hasAudio) && (i.audioStart = t.audio[0].ptsTime);
        this.self.postMessage({
          action: "probeTs",
          result: i,
          data: e
        }, [e.buffer]);
      }
      clearAllMp4Captions() {
        this.captionParser && this.captionParser.clearAllCaptions();
      }
      clearParsedMp4Captions() {
        this.captionParser && this.captionParser.clearParsedCaptions();
      }
      push(e) {
        e = new Uint8Array(e.data, e.byteOffset, e.byteLength);
        this.transmuxer.push(e);
      }
      reset() {
        this.transmuxer.reset();
      }
      setTimestampOffset(e) {
        e = e.timestampOffset || 0;
        this.transmuxer.setBaseMediaDecodeTime(Math.round(eh.secondsToVideoTs(e)));
      }
      setAudioAppendStart(e) {
        this.transmuxer.setAudioAppendStart(Math.ceil(eh.secondsToVideoTs(e.appendStart)));
      }
      setRemux(e) {
        this.transmuxer.setRemux(e.remux);
      }
      flush(e) {
        this.transmuxer.flush();
        self.postMessage({
          action: "done",
          type: "transmuxed"
        });
      }
      endTimeline() {
        this.transmuxer.endTimeline();
        self.postMessage({
          action: "endedtimeline",
          type: "transmuxed"
        });
      }
      alignGopsWith(e) {
        this.transmuxer.alignGopsWith(e.gopsToAlignWith.slice());
      }
    }
    self.onmessage = function (e) {
      "init" === e.data.action && e.data.options ? this.messageHandlers = new tz(self, e.data.options) : (this.messageHandlers || (this.messageHandlers = new tz(self)), e.data && e.data.action && "init" !== e.data.action && this.messageHandlers[e.data.action] && this.messageHandlers[e.data.action](e.data));
    };
  })));
  let oJ = (e, t, i) => {
    var {
      type,
      initSegment,
      captions,
      captionStreams,
      metadata,
      videoFrameDtsTime,
      videoFramePtsTime
    } = e.data.segment;
    t.buffer.push({
      captions,
      captionStreams,
      metadata
    });
    var t = e.data.segment.boxes || {
      data: e.data.segment.data
    };
    var n = {
      type,
      data: new Uint8Array(t.data, t.data.byteOffset, t.data.byteLength),
      initSegment: new Uint8Array(initSegment.data, initSegment.byteOffset, initSegment.byteLength)
    };
    void 0 !== videoFrameDtsTime && (captions.videoFrameDtsTime = videoFrameDtsTime);
    void 0 !== videoFramePtsTime && (captions.videoFramePtsTime = videoFramePtsTime);
    i(captions);
  };
  let oZ = ({
    transmuxedData: e,
    callback: t
  }) => {
    e.buffer = [];
    t(e);
  };
  let o0 = (e, t) => {
    t.gopInfo = e.data.gopInfo;
  };
  let o1 = e => {
    var t;
    var i;
    let {
      transmuxer,
      bytes,
      audioAppendStart,
      gopsToAlignWith,
      remux,
      onData,
      onTrackInfo,
      onAudioTimingInfo,
      onVideoTimingInfo,
      onVideoSegmentTimingInfo,
      onAudioSegmentTimingInfo,
      onId3,
      onCaptions,
      onDone,
      onEndedTimeline,
      onTransmuxerLog,
      isEndOfTimeline
    } = e;
    let b = {
      buffer: []
    };
    let T = v;
    transmuxer.onmessage = t => {
      transmuxer.currentTransmux !== e || ("data" === t.data.action && oJ(t, b, onData), "trackinfo" === t.data.action && onTrackInfo(t.data.trackInfo), "gopInfo" === t.data.action && o0(t, b), "audioTimingInfo" === t.data.action && onAudioTimingInfo(t.data.audioTimingInfo), "videoTimingInfo" === t.data.action && onVideoTimingInfo(t.data.videoTimingInfo), "videoSegmentTimingInfo" === t.data.action && onVideoSegmentTimingInfo(t.data.videoSegmentTimingInfo), "audioSegmentTimingInfo" === t.data.action && onAudioSegmentTimingInfo(t.data.audioSegmentTimingInfo), "id3Frame" === t.data.action && onId3([t.data.id3Frame], t.data.id3Frame.dispatchType), "caption" === t.data.action && onCaptions(t.data.caption), "endedtimeline" === t.data.action && (T = !1, onEndedTimeline()), "log" === t.data.action && onTransmuxerLog(t.data.log), "transmuxed" !== t.data.type) || T || (transmuxer.onmessage = null, oZ({
        transmuxedData: b,
        callback: onDone
      }), o2(transmuxer));
    };
    audioAppendStart && transmuxer.postMessage({
      action: "setAudioAppendStart",
      appendStart: audioAppendStart
    });
    Array.isArray(gopsToAlignWith) && transmuxer.postMessage({
      action: "alignGopsWith",
      gopsToAlignWith
    });
    void 0 !== remux && transmuxer.postMessage({
      action: "setRemux",
      remux
    });
    bytes.byteLength && (t = bytes instanceof ArrayBuffer ? bytes : bytes.buffer, i = bytes instanceof ArrayBuffer ? 0 : bytes.byteOffset, transmuxer.postMessage({
      action: "push",
      data: t,
      byteOffset: i,
      byteLength: bytes.byteLength
    }, [t]));
    isEndOfTimeline && transmuxer.postMessage({
      action: "endTimeline"
    });
    transmuxer.postMessage({
      action: "flush"
    });
  };
  let o2 = e => {
    e.currentTransmux = null;
    e.transmuxQueue.length && (e.currentTransmux = e.transmuxQueue.shift(), "function" == typeof e.currentTransmux ? e.currentTransmux() : o1(e.currentTransmux));
  };
  let o4 = (e, t) => {
    e.postMessage({
      action: t
    });
    o2(e);
  };
  let o8 = (e, t) => {
    t.currentTransmux ? t.transmuxQueue.push(o4.bind(null, t, e)) : (t.currentTransmux = e, o4(t, e));
  };
  let o5 = e => {
    e.transmuxer.currentTransmux ? e.transmuxer.transmuxQueue.push(e) : (e.transmuxer.currentTransmux = e, o1(e));
  };
  var o3 = e => {
    o8("reset", e);
  };
  var o6 = e => {
    let t = new oQ();
    t.currentTransmux = null;
    t.transmuxQueue = [];
    let i = t.terminate;
    t.terminate = () => (t.currentTransmux = null, t.transmuxQueue.length = 0, i.call(t));
    t.postMessage({
      action: "init",
      options: e
    });
    return t;
  };
  function o7(e) {
    let t = e.transmuxer;
    let i = e.endAction || e.action;
    let s = e.callback;
    var r;
    var n = tj({}, e, {
      endAction: null,
      transmuxer: null,
      callback: null
    });
    let a = r => {
      r.data.action === i && (t.removeEventListener("message", a), r.data.data && (r.data.data = new Uint8Array(r.data.data, e.byteOffset || 0, e.byteLength || r.data.data.byteLength), e.data) && (e.data = r.data.data), s(r.data));
    };
    t.addEventListener("message", a);
    e.data ? (r = e.data instanceof ArrayBuffer, n.byteOffset = r ? 0 : e.data.byteOffset, n.byteLength = e.data.byteLength, r = [r ? e.data : e.data.buffer], t.postMessage(n, r)) : t.postMessage(n);
  }
  function o9(e) {
    let t = 0;
    e.audio && t++;
    e.video && t++;
    return t;
  }
  function le(e, t) {
    var i = t.attributes || {};
    var s = ly(function (e) {
      if ((e = e.attributes || {}).CODECS) return r_(e.CODECS);
    }(t) || []);
    !lf(e, t) || s.audio || ((e, t) => {
      if (!lf(e, t)) return !0;
      var t = t.attributes || {};
      var i = e.mediaGroups.AUDIO[t.AUDIO];
      for (let e in i) if (!i[e].uri && !i[e].playlists) return !0;
      return !1;
    })(e, t) || (t = ly(function (e, t) {
      if (e.mediaGroups.AUDIO && t) {
        var i = e.mediaGroups.AUDIO[t];
        if (i) {
          for (var s in i) if ((s = i[s]).$$default && s.playlists) return r_(s.playlists[0].attributes.CODECS);
        }
      }
      return null;
    }(e, i.AUDIO) || [])).audio && (s.audio = t.audio);
    return s;
  }
  function lt(e, t) {
    return (e = e && window.getComputedStyle(e)) ? e[t] : "";
  }
  function li(e, t) {
    let i;
    let s;
    return (i = (i = e.attributes.BANDWIDTH ? e.attributes.BANDWIDTH : i) || window.Number.MAX_VALUE) - (s = (s = t.attributes.BANDWIDTH ? t.attributes.BANDWIDTH : s) || window.Number.MAX_VALUE);
  }
  let ls = {
    FAILURE: 2,
    TIMEOUT: -101,
    ABORTED: -102
  };
  let lr = e => {
    e.forEach(e => {
      e.abort();
    });
  };
  let ln = e => ({
    bandwidth: e.bandwidth,
    bytesReceived: e.bytesReceived || 0,
    roundTripTime: e.roundTripTime || 0
  });
  let la = e => {
    var t = e.target;
    var t = {
      bandwidth: 1 / 0,
      bytesReceived: 0,
      roundTripTime: Date.now() - t.requestTime || 0
    };
    t.bytesReceived = e.loaded;
    t.bandwidth = Math.floor(t.bytesReceived / t.roundTripTime * 8e3);
    return t;
  };
  let lo = (e, t) => t.timedout ? {
    status: t.status,
    message: "HLS request timed-out at URL: " + t.uri,
    code: ls.TIMEOUT,
    xhr: t
  } : t.aborted ? {
    status: t.status,
    message: "HLS request aborted at URL: " + t.uri,
    code: ls.ABORTED,
    xhr: t
  } : e ? {
    status: t.status,
    message: "HLS request errored at URL: " + t.uri,
    code: ls.FAILURE,
    xhr: t
  } : "arraybuffer" === t.responseType && 0 === t.response.byteLength ? {
    status: t.status,
    message: "Empty HLS response at URL: " + t.uri,
    code: ls.FAILURE,
    xhr: t
  } : null;
  let ll = (e, t, i) => (s, r) => {
    var n = r.response;
    var s = lo(s, r);
    if (s) return i(s, e);
    if (16 !== n.byteLength) return i({
      status: r.status,
      message: "Invalid HLS key at URL: " + r.uri,
      code: ls.FAILURE,
      xhr: r
    }, e);
    var s = new DataView(n);
    var a = new Uint32Array([s.getUint32(0), s.getUint32(4), s.getUint32(8), s.getUint32(12)]);
    for (let e = 0; e < t.length; e++) t[e].bytes = a;
    return i(null, e);
  };
  let lh = (e, t) => {
    var i = aw(e.map.bytes);
    if ("mp4" !== i) return t({
      internal: !0,
      message: `Found unsupported ${i || "unknown"} container for initialization segment at URL: ` + (e.map.resolvedUri || e.map.uri),
      code: ls.FAILURE
    });
    o7({
      action: "probeMp4Tracks",
      data: e.map.bytes,
      transmuxer: e.transmuxer,
      callback: ({
        tracks: i,
        data: s
      }) => (e.map.bytes = s, i.forEach(function (t) {
        e.map.tracks = e.map.tracks || {};
        e.map.tracks[t.type] || "number" == typeof (e.map.tracks[t.type] = t).id && t.timescale && (e.map.timescales = e.map.timescales || {}, e.map.timescales[t.id] = t.timescale);
      }), t(null))
    });
  };
  let ld = ({
    segment: e,
    bytes: t,
    trackInfoFn: i,
    timingInfoFn: s,
    videoSegmentTimingInfoFn: r,
    audioSegmentTimingInfoFn: n,
    id3Fn: a,
    captionsFn: o,
    isEndOfTimeline: l,
    endedTimelineFn: h,
    dataFn: d,
    doneFn: u,
    onTransmuxerLog: c
  }) => {
    var p = e.map && e.map.tracks || {};
    let m = !!(p.audio && p.video);
    let g = s.bind(null, e, "audio", "start");
    let f = s.bind(null, e, "audio", "end");
    let y = s.bind(null, e, "video", "start");
    let _ = s.bind(null, e, "video", "end");
    o7({
      action: "probeTs",
      transmuxer: e.transmuxer,
      data: t,
      baseStartTime: e.baseStartTime,
      callback: s => {
        e.bytes = t = s.data;
        (s = s.result) && (i(e, {
          hasAudio: s.hasAudio,
          hasVideo: s.hasVideo,
          isMuxed: m
        }), i = null);
        o5({
          bytes: t,
          transmuxer: e.transmuxer,
          audioAppendStart: e.audioAppendStart,
          gopsToAlignWith: e.gopsToAlignWith,
          remux: m,
          onData: t => {
            t.type = "combined" === t.type ? "video" : t.type;
            d(e, t);
          },
          onTrackInfo: t => {
            i && (m && (t.isMuxed = !0), i(e, t));
          },
          onAudioTimingInfo: e => {
            g && void 0 !== e.start && (g(e.start), g = null);
            f && void 0 !== e.end && f(e.end);
          },
          onVideoTimingInfo: e => {
            y && void 0 !== e.start && (y(e.start), y = null);
            _ && void 0 !== e.end && _(e.end);
          },
          onVideoSegmentTimingInfo: e => {
            r(e);
          },
          onAudioSegmentTimingInfo: e => {
            n(e);
          },
          onId3: (t, i) => {
            a(e, t, i);
          },
          onCaptions: t => {
            o(e, [t]);
          },
          isEndOfTimeline: l,
          onEndedTimeline: () => {
            h();
          },
          onTransmuxerLog: c,
          onDone: t => {
            u && (t.type = "combined" === t.type ? "video" : t.type, u(null, e, t));
          }
        });
      }
    });
  };
  let lu = ({
    segment: e,
    bytes: t,
    trackInfoFn: i,
    timingInfoFn: s,
    videoSegmentTimingInfoFn: r,
    audioSegmentTimingInfoFn: n,
    id3Fn: a,
    captionsFn: o,
    isEndOfTimeline: l,
    endedTimelineFn: h,
    dataFn: d,
    doneFn: u,
    onTransmuxerLog: c
  }) => {
    let p = new Uint8Array(t);
    if (0 < function e(t, i, s) {
      void 0 === s && (s = !1);
      i = Array.isArray(r = i) ? r.map(ab) : [ab(r)];
      t = rE(t);
      var r;
      var n = [];
      if (i.length) for (var a = 0; a < t.length;) {
        var o = (t[a] << 24 | t[a + 1] << 16 | t[a + 2] << 8 | t[a + 3]) >>> 0;
        var l = t.subarray(a + 4, a + 8);
        if (0 == o) break;
        if ((o = a + o) > t.length) {
          if (s) break;
          o = t.length;
        }
        var h = t.subarray(a + 8, o);
        rI(l, i[0]) && (1 === i.length ? n.push(h) : n.push.apply(n, e(h, i.slice(1), s)));
        a = o;
      }
      return n;
    }(p, ["moof"]).length) {
      e.isFmp4 = !0;
      let r = e.map.tracks;
      let n = {
        isFmp4: !0,
        hasVideo: !!r.video,
        hasAudio: !!r.audio
      };
      r.audio && r.audio.codec && "enca" !== r.audio.codec && (n.audioCodec = r.audio.codec);
      r.video && r.video.codec && "encv" !== r.video.codec && (n.videoCodec = r.video.codec);
      r.video && r.audio && (n.isMuxed = !0);
      i(e, n);
      let l = (t, i) => {
        d(e, {
          data: p,
          type: n.hasAudio && !n.isMuxed ? "audio" : "video"
        });
        i && i.length && a(e, i);
        t && t.length && o(e, t);
        u(null, e, {});
      };
      o7({
        action: "probeMp4StartTime",
        timescales: e.map.timescales,
        data: p,
        transmuxer: e.transmuxer,
        callback: ({
          data: i,
          startTime: a
        }) => {
          t = i.buffer;
          e.bytes = p = i;
          n.hasAudio && !n.isMuxed && s(e, "audio", "start", a);
          n.hasVideo && s(e, "video", "start", a);
          o7({
            action: "probeEmsgID3",
            data: p,
            transmuxer: e.transmuxer,
            offset: a,
            callback: ({
              emsgData: i,
              id3Frames: s
            }) => {
              t = i.buffer;
              e.bytes = p = i;
              r.video && i.byteLength && e.transmuxer ? o7({
                action: "pushMp4Captions",
                endAction: "mp4Captions",
                transmuxer: e.transmuxer,
                data: p,
                timescales: e.map.timescales,
                trackIds: [r.video.id],
                callback: i => {
                  t = i.data.buffer;
                  e.bytes = p = i.data;
                  i.logs.forEach(function (e) {
                    c(aH(e, {
                      stream: "mp4CaptionParser"
                    }));
                  });
                  l(i.captions, s);
                }
              }) : l(void 0, s);
            }
          });
        }
      });
    } else e.transmuxer ? (void 0 === e.container && (e.container = aw(p)), "ts" !== e.container && "aac" !== e.container ? (i(e, {
      hasAudio: !1,
      hasVideo: !1
    }), u(null, e, {})) : ld({
      segment: e,
      bytes: t,
      trackInfoFn: i,
      timingInfoFn: s,
      videoSegmentTimingInfoFn: r,
      audioSegmentTimingInfoFn: n,
      id3Fn: a,
      captionsFn: o,
      isEndOfTimeline: l,
      endedTimelineFn: h,
      dataFn: d,
      doneFn: u,
      onTransmuxerLog: c
    })) : u(null, e, {});
  };
  let lc = function ({
    id: e,
    key: t,
    encryptedBytes: i,
    decryptionWorker: s
  }, r) {
    let n;
    let a = t => {
      t.data.source === e && (s.removeEventListener("message", a), r(new Uint8Array((t = t.data.decrypted).bytes, t.byteOffset, t.byteLength)));
    };
    s.addEventListener("message", a);
    n = t.bytes.slice ? t.bytes.slice() : new Uint32Array(Array.prototype.slice.call(t.bytes));
    s.postMessage(oI({
      source: e,
      encrypted: i,
      key: n,
      iv: t.iv
    }), [i.buffer, n.buffer]);
  };
  let lp = ({
    decryptionWorker: e,
    segment: t,
    trackInfoFn: i,
    timingInfoFn: s,
    videoSegmentTimingInfoFn: r,
    audioSegmentTimingInfoFn: n,
    id3Fn: a,
    captionsFn: o,
    isEndOfTimeline: l,
    endedTimelineFn: h,
    dataFn: d,
    doneFn: u,
    onTransmuxerLog: c
  }) => {
    lc({
      id: t.requestId,
      key: t.key,
      encryptedBytes: t.encryptedBytes,
      decryptionWorker: e
    }, e => {
      t.bytes = e;
      lu({
        segment: t,
        bytes: t.bytes,
        trackInfoFn: i,
        timingInfoFn: s,
        videoSegmentTimingInfoFn: r,
        audioSegmentTimingInfoFn: n,
        id3Fn: a,
        captionsFn: o,
        isEndOfTimeline: l,
        endedTimelineFn: h,
        dataFn: d,
        doneFn: u,
        onTransmuxerLog: c
      });
    });
  };
  let lm = ({
    xhr: e,
    xhrOptions: t,
    decryptionWorker: i,
    segment: s,
    abortFn: r,
    progressFn: n,
    trackInfoFn: a,
    timingInfoFn: o,
    videoSegmentTimingInfoFn: l,
    audioSegmentTimingInfoFn: h,
    id3Fn: d,
    captionsFn: u,
    isEndOfTimeline: c,
    endedTimelineFn: p,
    dataFn: m,
    doneFn: g,
    onTransmuxerLog: f
  }) => {
    let y = [];
    var _;
    var v;
    var i = (({
      activeXhrs: e,
      decryptionWorker: t,
      trackInfoFn: i,
      timingInfoFn: s,
      videoSegmentTimingInfoFn: r,
      audioSegmentTimingInfoFn: n,
      id3Fn: a,
      captionsFn: o,
      isEndOfTimeline: l,
      endedTimelineFn: h,
      dataFn: d,
      doneFn: u,
      onTransmuxerLog: c
    }) => {
      let p = 0;
      let m = !1;
      return (g, f) => {
        if (!m) {
          if (g) {
            m = !0;
            lr(e);
            return u(g, f);
          }
          if ((p += 1) === e.length) {
            let p = function () {
              if (f.encryptedBytes) return lp({
                decryptionWorker: t,
                segment: f,
                trackInfoFn: i,
                timingInfoFn: s,
                videoSegmentTimingInfoFn: r,
                audioSegmentTimingInfoFn: n,
                id3Fn: a,
                captionsFn: o,
                isEndOfTimeline: l,
                endedTimelineFn: h,
                dataFn: d,
                doneFn: u,
                onTransmuxerLog: c
              });
              lu({
                segment: f,
                bytes: f.bytes,
                trackInfoFn: i,
                timingInfoFn: s,
                videoSegmentTimingInfoFn: r,
                audioSegmentTimingInfoFn: n,
                id3Fn: a,
                captionsFn: o,
                isEndOfTimeline: l,
                endedTimelineFn: h,
                dataFn: d,
                doneFn: u,
                onTransmuxerLog: c
              });
            };
            if (f.endOfAllRequests = Date.now(), f.map && f.map.encryptedBytes && !f.map.bytes) return lc({
              decryptionWorker: t,
              id: f.requestId + "-init",
              encryptedBytes: f.map.encryptedBytes,
              key: f.map.key
            }, t => {
              f.map.bytes = t;
              lh(f, t => {
                if (t) {
                  lr(e);
                  return u(t, f);
                }
                p();
              });
            });
            p();
          }
        }
      };
    })({
      activeXhrs: y,
      decryptionWorker: i,
      trackInfoFn: a,
      timingInfoFn: o,
      videoSegmentTimingInfoFn: l,
      audioSegmentTimingInfoFn: h,
      id3Fn: d,
      captionsFn: u,
      isEndOfTimeline: c,
      endedTimelineFn: p,
      dataFn: m,
      doneFn: g,
      onTransmuxerLog: f
    });
    s.key && !s.key.bytes && (a = [s.key], s.map && !s.map.bytes && s.map.key && s.map.key.resolvedUri === s.key.resolvedUri && a.push(s.map.key), o = e(aH(t, {
      uri: s.key.resolvedUri,
      responseType: "arraybuffer"
    }), ll(s, a, i)), y.push(o));
    s.map && !s.map.bytes && (!s.map.key || s.key && s.key.resolvedUri === s.map.key.resolvedUri || (l = e(aH(t, {
      uri: s.map.key.resolvedUri,
      responseType: "arraybuffer"
    }), ll(s, [s.map.key], i)), y.push(l)), h = aH(t, {
      uri: s.map.resolvedUri,
      responseType: "arraybuffer",
      headers: oC(s.map)
    }), {
      segment: _,
      finishProcessingFn: v
    } = {
        segment: s,
        finishProcessingFn: i
      }, d = e(h, (e, t) => {
        var e = lo(e, t);
        return e ? v(e, _) : (e = new Uint8Array(t.response), _.map.key ? (_.map.encryptedBytes = e, v(null, _)) : (_.map.bytes = e, void lh(_, function (e) {
          if (e) {
            e.xhr = t;
            e.status = t.status;
            return v(e, _);
          }
          v(null, _);
        })));
      }), y.push(d));
    var u = aH(t, {
      uri: s.part && s.part.resolvedUri || s.resolvedUri,
      responseType: "arraybuffer",
      headers: oC(s)
    });
    ({
      segment: b,
      finishProcessingFn: T,
      responseType: S
    } = {
      segment: s,
      finishProcessingFn: i,
      responseType: u.responseType
    });
    var b;
    var T;
    var S;
    var w;
    var E;
    var c = e(u, (e, t) => {
      var e = lo(e, t);
      return e ? T(e, b) : (e = "arraybuffer" !== S && t.responseText ? oG(t.responseText.substring(b.lastReachedChar || 0)) : t.response, b.stats = ln(t), b.key ? b.encryptedBytes = new Uint8Array(e) : b.bytes = new Uint8Array(e), T(null, b));
    });
    c.addEventListener("progress", ({
      segment: w,
      progressFn: E
    } = {
      segment: s,
      progressFn: n
    }, e => {
      if (!e.target.aborted) {
        w.stats = aH(w.stats, la(e));
        !w.stats.firstBytesReceivedAt && w.stats.bytesReceived && (w.stats.firstBytesReceivedAt = Date.now());
        return E(e, w);
      }
    }));
    y.push(c);
    let C = {};
    y.forEach(e => {
      var t;
      var i;
      e.addEventListener("loadend", ({
        loadendState: t,
        abortFn: i
      } = {
        loadendState: C,
        abortFn: r
      }, e => {
        e.target.aborted && i && !t.calledAbortFn && (i(), t.calledAbortFn = !0);
      }));
    });
    return () => lr(y);
  };
  let lg = aj("CodecUtils");
  let lf = (e, t) => (t = t.attributes || {}, e && e.mediaGroups && e.mediaGroups.AUDIO && t.AUDIO && e.mediaGroups.AUDIO[t.AUDIO]);
  let ly = function (e) {
    let t = {};
    e.forEach(({
      mediaType: e,
      type: i,
      details: s
    }) => {
      t[e] = t[e] || [];
      t[e].push(ry("" + i + s));
    });
    Object.keys(t).forEach(function (e) {
      1 < t[e].length ? (lg(`multiple ${e} codecs found as attributes: ${t[e].join(", ")}. Setting playlist codecs to null so that we wait for mux.js to probe segments for real codecs.`), t[e] = null) : t[e] = t[e][0];
    });
    return t;
  };
  let l_ = aj("PlaylistSelector");
  let lv = function (e) {
    var t;
    if (e && e.playlist) return JSON.stringify({
      id: (t = e.playlist).id,
      bandwidth: e.bandwidth,
      width: e.width,
      height: e.height,
      codecs: t.attributes && t.attributes.CODECS || ""
    });
  };
  let lb = function (e, t) {
    let i = e.slice();
    e.sort(function (e, s) {
      var r = t(e, s);
      return 0 === r ? i.indexOf(e) - i.indexOf(s) : r;
    });
  };
  function lT(e, t, i, s, r, n) {
    if (e) {
      var a = {
        bandwidth: t,
        width: i,
        height: s,
        limitRenditionByPlayerDimensions: r
      };
      let h = e.playlists;
      ol.isAudioOnly(e) && (h = n.getAudioTrackPlaylists_(), a.audioOnly = !0);
      let d = h.map(e => {
        var t = e.attributes && e.attributes.RESOLUTION && e.attributes.RESOLUTION.width;
        var i = e.attributes && e.attributes.RESOLUTION && e.attributes.RESOLUTION.height;
        return {
          bandwidth: e.attributes && e.attributes.BANDWIDTH || window.Number.MAX_VALUE,
          width: t,
          height: i,
          playlist: e
        };
      });
      lb(d, (e, t) => e.bandwidth - t.bandwidth);
      let u = (d = d.filter(e => !ol.isIncompatible(e.playlist))).filter(e => ol.isEnabled(e.playlist));
      let c = (e = (u = u.length ? u : d.filter(e => !ol.isDisabled(e.playlist))).filter(e => e.bandwidth * oz.BANDWIDTH_VARIANCE < t))[e.length - 1];
      var o = e.filter(e => e.bandwidth === c.bandwidth)[0];
      if (!1 === r) {
        let e = o || u[0] || d[0];
        if (e && e.playlist) {
          let t = o ? "bandwidthBestRep" : "sortedPlaylistReps";
          u[0] && (t = "enabledPlaylistReps");
          l_(`choosing ${lv(e)} using ${t} with options`, a);
          return e.playlist;
        }
      } else {
        let t;
        let h;
        let p;
        var l;
        var r = e.filter(e => e.width && e.height);
        lb(r, (e, t) => e.width - t.width);
        var e = r.filter(e => e.width === i && e.height === s);
        c = e[e.length - 1];
        var e = e.filter(e => e.bandwidth === c.bandwidth)[0];
        e || (c = (l = (t = r.filter(e => e.width > i || e.height > s)).filter(e => e.width === t[0].width && e.height === t[0].height))[l.length - 1], h = l.filter(e => e.bandwidth === c.bandwidth)[0]);
        n.leastPixelDiffSelector && (lb(l = r.map(e => (e.pixelDiff = Math.abs(e.width - i) + Math.abs(e.height - s), e)), (e, t) => e.pixelDiff === t.pixelDiff ? t.bandwidth - e.bandwidth : e.pixelDiff - t.pixelDiff), p = l[0]);
        let m = p || h || e || o || u[0] || d[0];
        if (m && m.playlist) {
          let t = "sortedPlaylistReps";
          p ? t = "leastPixelDiffRep" : h ? t = "resolutionPlusOneRep" : e ? t = "resolutionBestRep" : o ? t = "bandwidthBestRep" : u[0] && (t = "enabledPlaylistReps");
          l_(`choosing ${lv(m)} using ${t} with options`, a);
          return m.playlist;
        }
      }
      l_("could not choose a playlist with options", a);
      return null;
    }
  }
  function lS() {
    var e = this.useDevicePixelRatio && window.devicePixelRatio || 1;
    return lT(this.playlists.main, this.systemBandwidth, parseInt(lt(this.tech_.el(), "width"), 10) * e, parseInt(lt(this.tech_.el(), "height"), 10) * e, this.limitRenditionByPlayerDimensions, this.playlistController_);
  }
  function lw(e, t, i) {
    var s;
    let r;
    if (i && i.cues) for (r = i.cues.length; r--;) (s = i.cues[r]).startTime >= e && s.endTime <= t && i.removeCue(s);
  }
  let lE = ({
    inbandTextTracks: e,
    metadataArray: t,
    timestampOffset: i,
    videoDuration: s
  }) => {
    if (t) {
      let a = window.WebKitDataCue || window.VTTCue;
      let o = e.metadataTrack_;
      if (o && (t.forEach(e => {
        let t = e.cueTime + i;
        !("number" != typeof t || window.isNaN(t) || t < 0) && t < 1 / 0 && e.frames && e.frames.length && e.frames.forEach(e => {
          var i = new a(t, t, e.value || e.url || e.data || "");
          i.frame = e;
          i.value = e;
          Object.defineProperties(i.frame, {
            id: {
              get: () => (s7.log.warn("cue.frame.id is deprecated. Use cue.value.key instead."), i.value.key)
            },
            value: {
              get: () => (s7.log.warn("cue.frame.value is deprecated. Use cue.value.data instead."), i.value.data)
            },
            privateData: {
              get: () => (s7.log.warn("cue.frame.privateData is deprecated. Use cue.value.data instead."), i.value.data)
            }
          });
          o.addCue(i);
        });
      }), o.cues) && o.cues.length) {
        var r = o.cues;
        var n = [];
        for (let e = 0; e < r.length; e++) r[e] && n.push(r[e]);
        let e = n.reduce((e, t) => {
          var i = e[t.startTime] || [];
          i.push(t);
          e[t.startTime] = i;
          return e;
        }, {});
        let t = Object.keys(e).sort((e, t) => Number(e) - Number(t));
        t.forEach((i, r) => {
          var n = e[i];
          var i = isFinite(s) ? s : i;
          let a = Number(t[r + 1]) || i;
          n.forEach(e => {
            e.endTime = a;
          });
        });
      }
    }
  };
  let lC = {
    id: "ID",
    class: "CLASS",
    startDate: "START-DATE",
    duration: "DURATION",
    endDate: "END-DATE",
    endOnNext: "END-ON-NEXT",
    plannedDuration: "PLANNED-DURATION",
    scte35Out: "SCTE35-OUT",
    scte35In: "SCTE35-IN"
  };
  let lk = new Set(["id", "class", "startDate", "duration", "endDate", "endOnNext", "startTime", "endTime", "processDateRange"]);
  let lx = (e, t, i) => {
    e.metadataTrack_ || (e.metadataTrack_ = i.addRemoteTextTrack({
      kind: "metadata",
      label: "Timed Metadata"
    }, !1).track, s7.browser.IS_ANY_SAFARI) || (e.metadataTrack_.inBandMetadataTrackDispatchType = t);
  };
  let lI = e => "number" == typeof e && isFinite(e);
  let lA = e => {
    var {
      startOfSegment,
      duration,
      segment,
      part,
      playlist: {
        mediaSequence,
        id,
        segments = []
      },
      mediaIndex,
      partIndex,
      timeline
    } = e;
    var o = segments.length - 1;
    let u = "mediaIndex/partIndex increment";
    e.getMediaInfoForTime ? u = `getMediaInfoForTime (${e.getMediaInfoForTime})` : e.isSyncRequest && (u = "getSyncSegmentCandidate (isSyncRequest)");
    e.independent && (u += " with independent " + e.independent);
    var c = "number" == typeof partIndex;
    var e = e.segment.uri ? "segment" : "pre-segment";
    var p = c ? a8({
      preloadSegment: segment
    }) - 1 : 0;
    return e + ` [${mediaSequence + mediaIndex}/${mediaSequence + segments}]` + (c ? ` part [${partIndex}/${p}]` : "") + ` segment start/end [${segment.start} => ${segment.end}]` + (c ? ` part start/end [${part.start} => ${part.end}]` : "") + ` startOfSegment [${startOfSegment}]` + ` duration [${duration}]` + ` timeline [${timeline}]` + ` selected by [${u}]` + ` playlist [${id}]`;
  };
  let lD = e => e + "TimingInfo";
  let lL = ({
    timelineChangeController: e,
    currentTimeline: t,
    segmentTimeline: i,
    loaderType: s,
    audioDisabled: r
  }) => !(t === i || ("audio" === s ? (t = e.lastTimelineChange({
    type: "main"
  })) && t.to === i : "main" !== s || !r || (t = e.pendingTimelineChange({
    type: "audio"
  })) && t.to === i));
  let lP = ({
    segmentDuration: e,
    maxDuration: t
  }) => !!e && Math.round(e) > t + aY;
  let lO = (e, t) => {
    var i;
    var s;
    var r;
    var n;
    let a;
    return "hls" === t && (n = {
      audioTimingInfo: e.audioTimingInfo,
      videoTimingInfo: e.videoTimingInfo
    }, a = 0, ["video", "audio"].forEach(function (e) {
      if (e = n[start + "TimingInfo"]) {
        let i;
        var {
          start,
          end
        } = start;
        "bigint" == typeof start || "bigint" == typeof end ? i = window.BigInt(end) - window.BigInt(start) : "number" == typeof start && "number" == typeof end && (i = end - start);
        void 0 !== i && i > a && (a = i);
      }
    }), t = a = "bigint" == typeof a && a < Number.MAX_SAFE_INTEGER ? Number(a) : a) && (s = lP({
      segmentDuration: t,
      maxDuration: 2 * (i = e.playlist.targetDuration)
    }), r = lP({
      segmentDuration: t,
      maxDuration: i
    }), t = `Segment with index ${e.mediaIndex} from playlist ${e.playlist.id} has a duration of ${t} when the reported duration is ${e.duration} and the target duration is ${i}. For HLS content, a duration in excess of the target duration may result in playback issues. See the HLS specification section on EXT-X-TARGETDURATION for more details: https://tools.ietf.org/html/draft-pantos-http-live-streaming-23#section-4.3.3.1`, s || r) ? {
      severity: s ? "warn" : "info",
      message: t
    } : null;
  };
  class lN extends s7.EventTarget {
    constructor(e, t = 0) {
      if (super(), !e) throw TypeError("Initialization settings are required");
      if ("function" != typeof e.currentTime) throw TypeError("No currentTime getter specified");
      if (!e.mediaSource) throw TypeError("No MediaSource specified");
      this.bandwidth = e.bandwidth;
      this.throughput = {
        rate: 0,
        count: 0
      };
      this.roundTrip = NaN;
      this.resetStats_();
      this.mediaIndex = null;
      this.partIndex = null;
      this.hasPlayed_ = e.hasPlayed;
      this.currentTime_ = e.currentTime;
      this.seekable_ = e.seekable;
      this.seeking_ = e.seeking;
      this.duration_ = e.duration;
      this.mediaSource_ = e.mediaSource;
      this.vhs_ = e.vhs;
      this.loaderType_ = e.loaderType;
      this.currentMediaInfo_ = void 0;
      this.startingMediaInfo_ = void 0;
      this.segmentMetadataTrack_ = e.segmentMetadataTrack;
      this.goalBufferLength_ = e.goalBufferLength;
      this.sourceType_ = e.sourceType;
      this.sourceUpdater_ = e.sourceUpdater;
      this.inbandTextTracks_ = e.inbandTextTracks;
      this.state_ = "INIT";
      this.timelineChangeController_ = e.timelineChangeController;
      this.shouldSaveSegmentTimingInfo_ = !0;
      this.parse708captions_ = e.parse708captions;
      this.useDtsForTimestampOffset_ = e.useDtsForTimestampOffset;
      this.captionServices_ = e.captionServices;
      this.exactManifestTimings = e.exactManifestTimings;
      this.addMetadataToTextTrack = e.addMetadataToTextTrack;
      this.checkBufferTimeout_ = null;
      this.error_ = void 0;
      this.currentTimeline_ = -1;
      this.shouldForceTimestampOffsetAfterResync_ = !1;
      this.pendingSegment_ = null;
      this.xhrOptions_ = null;
      this.pendingSegments_ = [];
      this.audioDisabled_ = !1;
      this.isPendingTimestampOffset_ = !1;
      this.gopBuffer_ = [];
      this.timeMapping_ = 0;
      this.safeAppend_ = !1;
      this.appendInitSegment_ = {
        audio: !0,
        video: !0
      };
      this.playlistOfLastInitSegment_ = {
        audio: null,
        video: null
      };
      this.callQueue_ = [];
      this.loadQueue_ = [];
      this.metadataQueue_ = {
        id3: [],
        caption: []
      };
      this.waitingOnRemove_ = !1;
      this.quotaExceededErrorRetryTimeout_ = null;
      this.activeInitSegmentId_ = null;
      this.initSegments_ = {};
      this.cacheEncryptionKeys_ = e.cacheEncryptionKeys;
      this.keyCache_ = {};
      this.decrypter_ = e.decrypter;
      this.syncController_ = e.syncController;
      this.syncPoint_ = {
        segmentIndex: 0,
        time: 0
      };
      this.transmuxer_ = this.createTransmuxer_();
      this.triggerSyncInfoUpdate_ = () => this.trigger("syncinfoupdate");
      this.syncController_.on("syncinfoupdate", this.triggerSyncInfoUpdate_);
      this.mediaSource_.addEventListener("sourceopen", () => {
        this.isEndOfStream_() || (this.ended_ = !1);
      });
      this.fetchAtBuffer_ = !1;
      this.logger_ = aj(`SegmentLoader[${this.loaderType_}]`);
      Object.defineProperty(this, "state", {
        get() {
          return this.state_;
        },
        set(e) {
          e !== this.state_ && (this.logger_(this.state_ + " -> " + e), this.state_ = e, this.trigger("statechange"));
        }
      });
      this.sourceUpdater_.on("ready", () => {
        this.hasEnoughInfoToAppend_() && this.processCallQueue_();
      });
      "main" === this.loaderType_ && this.timelineChangeController_.on("pendingtimelinechange", () => {
        this.hasEnoughInfoToAppend_() && this.processCallQueue_();
      });
      "audio" === this.loaderType_ && this.timelineChangeController_.on("timelinechange", () => {
        this.hasEnoughInfoToLoad_() && this.processLoadQueue_();
        this.hasEnoughInfoToAppend_() && this.processCallQueue_();
      });
    }
    createTransmuxer_() {
      return o6({
        remux: !1,
        alignGopsAtEnd: this.safeAppend_,
        keepOriginalTimestamps: !0,
        parse708captions: this.parse708captions_,
        captionServices: this.captionServices_
      });
    }
    resetStats_() {
      this.mediaBytesTransferred = 0;
      this.mediaRequests = 0;
      this.mediaRequestsAborted = 0;
      this.mediaRequestsTimedout = 0;
      this.mediaRequestsErrored = 0;
      this.mediaTransferDuration = 0;
      this.mediaSecondsLoaded = 0;
      this.mediaAppends = 0;
    }
    dispose() {
      this.trigger("dispose");
      this.state = "DISPOSED";
      this.pause();
      this.abort_();
      this.transmuxer_ && this.transmuxer_.terminate();
      this.resetStats_();
      this.checkBufferTimeout_ && window.clearTimeout(this.checkBufferTimeout_);
      this.syncController_ && this.triggerSyncInfoUpdate_ && this.syncController_.off("syncinfoupdate", this.triggerSyncInfoUpdate_);
      this.off();
    }
    setAudio(e) {
      this.audioDisabled_ = !e;
      e ? this.appendInitSegment_.audio = !0 : this.sourceUpdater_.removeAudio(0, this.duration_());
    }
    abort() {
      "WAITING" !== this.state ? this.pendingSegment_ && (this.pendingSegment_ = null) : (this.abort_(), this.state = "READY", this.paused() || this.monitorBuffer_());
    }
    abort_() {
      this.pendingSegment_ && this.pendingSegment_.abortRequests && this.pendingSegment_.abortRequests();
      this.pendingSegment_ = null;
      this.callQueue_ = [];
      this.loadQueue_ = [];
      this.metadataQueue_.id3 = [];
      this.metadataQueue_.caption = [];
      this.timelineChangeController_.clearPendingTimelineChange(this.loaderType_);
      this.waitingOnRemove_ = !1;
      window.clearTimeout(this.quotaExceededErrorRetryTimeout_);
      this.quotaExceededErrorRetryTimeout_ = null;
    }
    checkForAbort_(e) {
      return "APPENDING" !== this.state || this.pendingSegment_ ? !this.pendingSegment_ || this.pendingSegment_.requestId !== e : (this.state = "READY", !0);
    }
    error(e) {
      void 0 !== e && (this.logger_("error occurred:", e), this.error_ = e);
      this.pendingSegment_ = null;
      return this.error_;
    }
    endOfStream() {
      this.ended_ = !0;
      this.transmuxer_ && o3(this.transmuxer_);
      this.gopBuffer_.length = 0;
      this.pause();
      this.trigger("ended");
    }
    buffered_() {
      var e = this.getMediaInfo_();
      if (!this.sourceUpdater_ || !hasAudio) return aV();
      if ("main" === this.loaderType_) {
        var {
          hasAudio,
          hasVideo,
          isMuxed
        } = hasAudio;
        if (hasVideo && hasAudio && !this.audioDisabled_ && !isMuxed) return this.sourceUpdater_.buffered();
        if (hasVideo) return this.sourceUpdater_.videoBuffered();
      }
      return this.sourceUpdater_.audioBuffered();
    }
    initSegmentForMap(e, t = !1) {
      if (!e) return null;
      var i = oA(e);
      let s = this.initSegments_[i];
      t && !s && e.bytes && (this.initSegments_[i] = s = {
        resolvedUri: e.resolvedUri,
        byterange: e.byterange,
        bytes: e.bytes,
        tracks: e.tracks,
        timescales: e.timescales
      });
      return s || e;
    }
    segmentKey(e, t = !1) {
      if (!e) return null;
      var i = oD(e);
      let s = this.keyCache_[i];
      this.cacheEncryptionKeys_ && t && !s && e.bytes && (this.keyCache_[i] = s = {
        resolvedUri: e.resolvedUri,
        bytes: e.bytes
      });
      t = {
        resolvedUri: (s || e).resolvedUri
      };
      s && (t.bytes = s.bytes);
      return t;
    }
    couldBeginLoading_() {
      return this.playlist_ && !this.paused();
    }
    load() {
      if (this.monitorBuffer_(), this.playlist_) return "INIT" === this.state && this.couldBeginLoading_() ? this.init_() : void (this.couldBeginLoading_() && ("READY" === this.state || "INIT" === this.state) && (this.state = "READY"));
    }
    init_() {
      this.state = "READY";
      this.resetEverything();
      return this.monitorBuffer_();
    }
    playlist(e, t = {}) {
      if (e) {
        var i;
        var s = this.playlist_;
        var r = this.pendingSegment_;
        this.playlist_ = e;
        this.xhrOptions_ = t;
        "INIT" === this.state && (e.syncInfo = {
          mediaSequence: e.mediaSequence,
          time: 0
        }, "main" === this.loaderType_) && this.syncController_.setDateTimeMappingForStart(e);
        let n = null;
        if (s && (s.id ? n = s.id : s.uri && (n = s.uri)), this.logger_(`playlist update [${n} => ${e.id || e.uri}]`), this.syncController_.updateMediaSequenceMap(e, this.currentTime_(), this.loaderType_), this.trigger("syncinfoupdate"), "INIT" === this.state && this.couldBeginLoading_()) return this.init_();
        s && s.uri === e.uri ? (t = e.mediaSequence - s.mediaSequence, this.logger_(`live window shift [${t}]`), null !== this.mediaIndex && (this.mediaIndex -= t, this.mediaIndex < 0 ? (this.mediaIndex = null, this.partIndex = null) : (i = this.playlist_.segments[this.mediaIndex], !this.partIndex || i.parts && i.parts.length && i.parts[this.partIndex] || (i = this.mediaIndex, this.logger_(`currently processing part (index ${this.partIndex}) no longer exists.`), this.resetLoader(), this.mediaIndex = i))), r && (r.mediaIndex -= t, r.mediaIndex < 0 ? (r.mediaIndex = null, r.partIndex = null) : (0 <= r.mediaIndex && (r.segment = e.segments[r.mediaIndex]), 0 <= r.partIndex && r.segment.parts && (r.part = r.segment.parts[r.partIndex]))), this.syncController_.saveExpiredSegmentInfo(s, e)) : (null !== this.mediaIndex && (e.endList || "number" != typeof e.partTargetDuration ? this.resyncLoader() : this.resetLoader()), this.currentMediaInfo_ = void 0, this.trigger("playlistupdate"));
      }
    }
    pause() {
      this.checkBufferTimeout_ && (window.clearTimeout(this.checkBufferTimeout_), this.checkBufferTimeout_ = null);
    }
    paused() {
      return null === this.checkBufferTimeout_;
    }
    resetEverything(e) {
      this.ended_ = !1;
      this.activeInitSegmentId_ = null;
      this.appendInitSegment_ = {
        audio: !0,
        video: !0
      };
      this.resetLoader();
      this.remove(0, 1 / 0, e);
      this.transmuxer_ && (this.transmuxer_.postMessage({
        action: "clearAllMp4Captions"
      }), this.transmuxer_.postMessage({
        action: "reset"
      }));
    }
    resetLoader() {
      this.fetchAtBuffer_ = !1;
      this.resyncLoader();
    }
    resyncLoader() {
      this.transmuxer_ && o3(this.transmuxer_);
      this.mediaIndex = null;
      this.partIndex = null;
      this.syncPoint_ = null;
      this.isPendingTimestampOffset_ = !1;
      this.shouldForceTimestampOffsetAfterResync_ = !0;
      this.callQueue_ = [];
      this.loadQueue_ = [];
      this.metadataQueue_.id3 = [];
      this.metadataQueue_.caption = [];
      this.abort();
      this.transmuxer_ && this.transmuxer_.postMessage({
        action: "clearParsedMp4Captions"
      });
    }
    remove(e, t, i = () => { }, s = !1) {
      if ((t = t === 1 / 0 ? this.duration_() : t) <= e) this.logger_("skipping remove because end ${end} is <= start ${start}"); else if (this.sourceUpdater_ && this.getMediaInfo_()) {
        let n = 1;
        var r = () => {
          0 == --n && i();
        };
        for (let i in !s && this.audioDisabled_ || (n++, this.sourceUpdater_.removeAudio(e, t, r)), (s || "main" === this.loaderType_) && (this.gopBuffer_ = ((e, t, i, s) => {
          var r = Math.ceil((t - s) * 9e4);
          var n = Math.ceil((i - s) * 9e4);
          var t = e.slice();
          let a = e.length;
          for (; a-- && !(e[a].pts <= n););
          if (-1 !== a) {
            let i = a + 1;
            for (; i-- && !(e[i].pts <= r););
            i = Math.max(i, 0);
            t.splice(i, a - i + 1);
          }
          return t;
        })(this.gopBuffer_, e, t, this.timeMapping_), n++, this.sourceUpdater_.removeVideo(e, t, r)), this.inbandTextTracks_) lw(e, t, this.inbandTextTracks_[i]);
        lw(e, t, this.segmentMetadataTrack_);
        r();
      } else this.logger_("skipping remove because no source updater or starting media info");
    }
    monitorBuffer_() {
      this.checkBufferTimeout_ && window.clearTimeout(this.checkBufferTimeout_);
      this.checkBufferTimeout_ = window.setTimeout(this.monitorBufferTick_.bind(this), 1);
    }
    monitorBufferTick_() {
      "READY" === this.state && this.fillBuffer_();
      this.checkBufferTimeout_ && window.clearTimeout(this.checkBufferTimeout_);
      this.checkBufferTimeout_ = window.setTimeout(this.monitorBufferTick_.bind(this), 500);
    }
    fillBuffer_() {
      var e;
      this.sourceUpdater_.updating() || (e = this.chooseNextRequest_()) && ("number" == typeof e.timestampOffset && (this.isPendingTimestampOffset_ = !1, this.timelineChangeController_.pendingTimelineChange({
        type: this.loaderType_,
        from: this.currentTimeline_,
        to: e.timeline
      })), this.loadSegment_(e));
    }
    isEndOfStream_(e = this.mediaIndex, t = this.playlist_, i = this.partIndex) {
      var s;
      return !(!t || !this.mediaSource_) && (s = "number" == typeof e && t.segments[e], e = e + 1 === t.segments.length, i = !s || !s.parts || i + 1 === s.parts.length, t.endList) && "open" === this.mediaSource_.readyState && e && i;
    }
    chooseNextRequest_() {
      var e = this.buffered_();
      var t = aW(e) || 0;
      var e = aG(e, this.currentTime_());
      var i = !this.hasPlayed_() && 1 <= e;
      var s = e >= this.goalBufferLength_();
      var r = this.playlist_.segments;
      if (!r.length || i || s) return null;
      this.syncPoint_ = this.syncPoint_ || this.syncController_.getSyncPoint(this.playlist_, this.duration_(), this.currentTimeline_, this.currentTime_(), this.loaderType_);
      (i = {
        partIndex: null,
        mediaIndex: null,
        startOfSegment: null,
        playlist: this.playlist_,
        isSyncRequest: !this.syncPoint_
      }).isSyncRequest ? (i.mediaIndex = function (e, t, i) {
        t = t || [];
        var s = [];
        let r = 0;
        for (let a = 0; a < t.length; a++) {
          var n = t[a];
          if (e === n.timeline && (s.push(a), (r += n.duration) > i)) return a;
        }
        return 0 === s.length ? 0 : s[s.length - 1];
      }(this.currentTimeline_, r, t), this.logger_("choose next request. Can not find sync point. Fallback to media Index: " + i.mediaIndex)) : null !== this.mediaIndex ? (s = r[this.mediaIndex], a = "number" == typeof this.partIndex ? this.partIndex : -1, i.startOfSegment = s.end || t, s.parts && s.parts[a + 1] ? (i.mediaIndex = this.mediaIndex, i.partIndex = a + 1) : i.mediaIndex = this.mediaIndex + 1) : ({
        segmentIndex: s,
        startTime: a,
        partIndex: o
      } = ol.getMediaInfoForTime({
        exactManifestTimings: this.exactManifestTimings,
        playlist: this.playlist_,
        currentTime: this.fetchAtBuffer_ ? t : this.currentTime_(),
        startingPartIndex: this.syncPoint_.partIndex,
        startingSegmentIndex: this.syncPoint_.segmentIndex,
        startTime: this.syncPoint_.time
      }), i.getMediaInfoForTime = this.fetchAtBuffer_ ? "bufferedEnd " + t : "currentTime " + this.currentTime_(), i.mediaIndex = s, i.startOfSegment = a, i.partIndex = o, this.logger_(`choose next request. Playlist switched and we have a sync point. Media Index: ${i.mediaIndex} `));
      let n = (t = r[i.mediaIndex]) && "number" == typeof i.partIndex && t.parts && t.parts[i.partIndex];
      if (!t || "number" == typeof i.partIndex && !n) return null;
      "number" != typeof i.partIndex && t.parts && (i.partIndex = 0, n = t.parts[0]);
      var a;
      var o;
      var s = this.vhs_.playlists && this.vhs_.playlists.main && this.vhs_.playlists.main.independentSegments || this.playlist_.independentSegments;
      e || !n || s || n.independent || (0 === i.partIndex ? (o = (a = r[i.mediaIndex - 1]).parts && a.parts.length && a.parts[a.parts.length - 1]) && o.independent && (--i.mediaIndex, i.partIndex = a.parts.length - 1, i.independent = "previous segment") : t.parts[i.partIndex - 1].independent && (--i.partIndex, i.independent = "previous part"));
      var e = this.mediaSource_ && "ended" === this.mediaSource_.readyState;
      return i.mediaIndex >= r.length - 1 && e && !this.seeking_() ? null : (this.shouldForceTimestampOffsetAfterResync_ && (this.shouldForceTimestampOffsetAfterResync_ = !1, i.forceTimestampOffset = !0, this.logger_("choose next request. Force timestamp offset after loader resync")), this.generateSegmentInfo_(i));
    }
    generateSegmentInfo_(e) {
      var {
        independent,
        playlist,
        mediaIndex,
        startOfSegment,
        isSyncRequest,
        partIndex,
        forceTimestampOffset,
        getMediaInfoForTime
      } = e;
      var l = playlist.segments[mediaIndex];
      var h = "number" == typeof partIndex && l.parts[partIndex];
      var i = {
        requestId: "segment-loader-" + Math.random(),
        uri: h && h.resolvedUri || l.resolvedUri,
        mediaIndex,
        partIndex: h ? partIndex : null,
        isSyncRequest,
        startOfSegment,
        playlist,
        bytes: null,
        encryptedBytes: null,
        timestampOffset: null,
        timeline: l.timeline,
        duration: h && h.duration || l.duration,
        segment: l,
        part: h,
        byteLength: 0,
        transmuxer: this.transmuxer_,
        getMediaInfoForTime,
        independent
      };
      var n = void 0 !== forceTimestampOffset ? forceTimestampOffset : this.isPendingTimestampOffset_;
      mediaIndex.timestampOffset = this.timestampOffsetForSegment_({
        segmentTimeline: l.timeline,
        currentTimeline: this.currentTimeline_,
        startOfSegment,
        buffered: this.buffered_(),
        overrideCheck: partIndex
      });
      var r = aW(this.sourceUpdater_.audioBuffered());
      "number" == typeof isSyncRequest && (mediaIndex.audioAppendStart = isSyncRequest - this.sourceUpdater_.audioTimestampOffset());
      this.sourceUpdater_.videoBuffered().length && (mediaIndex.gopsToAlignWith = ((e, t, i) => {
        let s;
        if (null == t || !e.length) return [];
        var r = Math.ceil((t - i + 3) * 9e4);
        for (s = 0; s < e.length && !(e[s].pts > r); s++);
        return e.slice(s);
      })(this.gopBuffer_, this.currentTime_() - this.sourceUpdater_.videoTimestampOffset(), this.timeMapping_));
      return mediaIndex;
    }
    timestampOffsetForSegment_(e) {
      var t;
      var i;
      var s;
      var r;
      ({
        segmentTimeline: e,
        currentTimeline: t,
        startOfSegment: i,
        buffered: s,
        overrideCheck: r
      } = e);
      return r || e !== t ? !(e < t) && s.length ? s.end(s.length - 1) : i : null;
    }
    earlyAbortWhenNeeded_(e) {
      if (!this.vhs_.tech_.paused() && this.xhrOptions_.timeout && this.playlist_.attributes.BANDWIDTH && !(Date.now() - (e.firstBytesReceivedAt || Date.now()) < 1e3)) {
        var t = this.currentTime_();
        var i = e.bandwidth;
        var s = this.pendingSegment_.duration;
        var e = ol.estimateSegmentRequestTime(s, i, this.playlist_, e.bytesReceived);
        [r, n, a = 1] = [this.buffered_(), t, this.vhs_.tech_.playbackRate()];
        var r = ((r.length ? r.end(r.length - 1) : 0) - n) / a - 1;
        if (!(e <= r)) {
          var n = function (e) {
            let {
              main,
              currentTime,
              bandwidth,
              duration,
              segmentDuration,
              timeUntilRebuffer,
              currentTimeline,
              syncController
            } = e;
            let h = (e = main.playlists.filter(e => !ol.isIncompatible(e))).filter(ol.isEnabled);
            var e = (h = h.length ? h : e.filter(e => !ol.isDisabled(e))).filter(ol.hasAttribute.bind(null, "BANDWIDTH")).map(e => {
              var t = syncController.getSyncPoint(e, duration, currentTimeline, currentTime) ? 1 : 2;
              return {
                playlist: e,
                rebufferingImpact: ol.estimateSegmentRequestTime(segmentDuration, bandwidth, e) * t - timeUntilRebuffer
              };
            });
            var d = e.filter(e => e.rebufferingImpact <= 0);
            lb(d, (e, t) => li(t.playlist, e.playlist));
            return d.length ? d[0] : (lb(e, (e, t) => e.rebufferingImpact - t.rebufferingImpact), e[0] || null);
          }({
            main: this.vhs_.playlists.main,
            currentTime: t,
            bandwidth: i,
            duration: this.duration_(),
            segmentDuration: s,
            timeUntilRebuffer: r,
            currentTimeline: this.currentTimeline_,
            syncController: this.syncController_
          });
          if (n) {
            var a = e - r - n.rebufferingImpact;
            let t = .5;
            r <= aY && (t = 1);
            !n.playlist || n.playlist.uri === this.playlist_.uri || a < t || (this.bandwidth = n.playlist.attributes.BANDWIDTH * oz.BANDWIDTH_VARIANCE + 1, this.trigger("earlyabort"));
          }
        }
      }
    }
    handleAbort_(e) {
      this.logger_("Aborting " + lA(e));
      this.mediaRequestsAborted += 1;
    }
    handleProgress_(e, t) {
      this.earlyAbortWhenNeeded_(t.stats);
      this.checkForAbort_(t.requestId) || this.trigger("progress");
    }
    handleTrackInfo_(e, t) {
      this.earlyAbortWhenNeeded_(e.stats);
      this.checkForAbort_(e.requestId) || this.checkForIllegalMediaSwitch(t) || (function (e, t) {
        if (!e && !t || !e && t || e && !t) return !1;
        if (e !== t) {
          var i = Object.keys(e).sort();
          var s = Object.keys(t).sort();
          if (i.length !== s.length) return !1;
          for (let n = 0; n < i.length; n++) {
            var r = i[n];
            if (r !== s[n] || e[r] !== t[r]) return !1;
          }
        }
        return !0;
      }(this.currentMediaInfo_, t = t || {}) || (this.appendInitSegment_ = {
        audio: !0,
        video: !0
      }, this.startingMediaInfo_ = t, this.currentMediaInfo_ = t, this.logger_("trackinfo update", t), this.trigger("trackinfo")), this.checkForAbort_(e.requestId)) || (this.pendingSegment_.trackInfo = t, this.hasEnoughInfoToAppend_() && this.processCallQueue_());
    }
    handleTimingInfo_(e, t, i, s) {
      var r;
      this.earlyAbortWhenNeeded_(e.stats);
      this.checkForAbort_(e.requestId) || ((e = this.pendingSegment_)[r = lD(t)] = e[r] || {}, e[r][i] = s, this.logger_(`timinginfo: ${t} - ${i} - ` + s), this.hasEnoughInfoToAppend_() && this.processCallQueue_());
    }
    handleCaptions_(e, t) {
      if (this.earlyAbortWhenNeeded_(e.stats), !this.checkForAbort_(e.requestId)) {
        if (0 === t.length) this.logger_("SegmentLoader received no captions from a caption event"); else if (this.pendingSegment_.hasAppendedData_) {
          let e = this.sourceUpdater_.videoTimestampOffset();
          let i = {};
          t.forEach(t => {
            i[t.stream] = i[t.stream] || {
              startTime: 1 / 0,
              captions: [],
              endTime: 0
            };
            var s = i[t.stream];
            s.startTime = Math.min(s.startTime, t.startTime + e);
            s.endTime = Math.max(s.endTime, t.endTime + e);
            s.captions.push(t);
          });
          Object.keys(i).forEach(t => {
            var {
              startTime,
              endTime,
              captions
            } = i[t];
            var a = this.inbandTextTracks_;
            this.logger_(`adding cues from ${startTime} -> ${endTime} for ` + t);
            var o = a;
            var l = this.vhs_.tech_;
            if (!o[t]) {
              l.trigger({
                type: "usage",
                name: "vhs-608"
              });
              let e = t;
              /^cc708_/.test(t) && (e = "SERVICE" + t.split("_")[1]);
              var h = l.textTracks().getTrackById(e);
              if (captionArray) o[t] = captionArray; else {
                let i = t;
                let s = t;
                let r = !1;
                (h = (l.options_.vhs && l.options_.vhs.captionServices || {})[e]) && (i = captionArray.label, s = captionArray.language, r = captionArray.$$default);
                o[t] = l.addRemoteTextTrack({
                  kind: "captions",
                  id: e,
                  default: r,
                  label: i,
                  language: s
                }, !1).track;
              }
            }
            lw(startTime, endTime, a[t]);
            var {
              inbandTextTracks,
              captionArray,
              timestampOffset
            } = {
              captionArray: captions,
              inbandTextTracks: a,
              timestampOffset: e
            };
            if (captionArray) {
              let e = window.WebKitDataCue || window.VTTCue;
              captionArray.forEach(t => {
                let i = t.stream;
                t.content ? t.content.forEach(s => {
                  var r = new e(t.startTime + timestampOffset, t.endTime + timestampOffset, s.text);
                  r.line = s.line;
                  r.align = "left";
                  r.position = s.position;
                  r.positionAlign = "line-left";
                  inbandTextTracks[i].addCue(r);
                }) : inbandTextTracks[i].addCue(new e(t.startTime + timestampOffset, t.endTime + timestampOffset, t.text));
              });
            }
          });
          this.transmuxer_ && this.transmuxer_.postMessage({
            action: "clearParsedMp4Captions"
          });
        } else this.metadataQueue_.caption.push(this.handleCaptions_.bind(this, e, t));
      }
    }
    handleId3_(e, t, i) {
      this.earlyAbortWhenNeeded_(e.stats);
      this.checkForAbort_(e.requestId) || (this.pendingSegment_.hasAppendedData_ ? this.addMetadataToTextTrack(i, t, this.duration_()) : this.metadataQueue_.id3.push(this.handleId3_.bind(this, e, t, i)));
    }
    processMetadataQueue_() {
      this.metadataQueue_.id3.forEach(e => e());
      this.metadataQueue_.caption.forEach(e => e());
      this.metadataQueue_.id3 = [];
      this.metadataQueue_.caption = [];
    }
    processCallQueue_() {
      var e = this.callQueue_;
      this.callQueue_ = [];
      e.forEach(e => e());
    }
    processLoadQueue_() {
      var e = this.loadQueue_;
      this.loadQueue_ = [];
      e.forEach(e => e());
    }
    hasEnoughInfoToLoad_() {
      var e;
      return "audio" !== this.loaderType_ || !(!(e = this.pendingSegment_) || this.getCurrentMediaInfo_() && lL({
        timelineChangeController: this.timelineChangeController_,
        currentTimeline: this.currentTimeline_,
        segmentTimeline: e.timeline,
        loaderType: this.loaderType_,
        audioDisabled: this.audioDisabled_
      }));
    }
    getCurrentMediaInfo_(e = this.pendingSegment_) {
      return e && e.trackInfo || this.currentMediaInfo_;
    }
    getMediaInfo_(e = this.pendingSegment_) {
      return this.getCurrentMediaInfo_(e) || this.startingMediaInfo_;
    }
    getPendingSegmentPlaylist() {
      return this.pendingSegment_ ? this.pendingSegment_.playlist : null;
    }
    hasEnoughInfoToAppend_() {
      var e;
      var t;
      var i;
      var s;
      return !!this.sourceUpdater_.ready() && !(this.waitingOnRemove_ || this.quotaExceededErrorRetryTimeout_ || (e = this.pendingSegment_, t = this.getCurrentMediaInfo_(), !e) || !t || ({
        hasAudio: t,
        hasVideo: i,
        isMuxed: s
      } = t, i && !e.videoTimingInfo) || t && !this.audioDisabled_ && !s && !e.audioTimingInfo || lL({
        timelineChangeController: this.timelineChangeController_,
        currentTimeline: this.currentTimeline_,
        segmentTimeline: e.timeline,
        loaderType: this.loaderType_,
        audioDisabled: this.audioDisabled_
      }));
    }
    handleData_(e, t) {
      if (this.earlyAbortWhenNeeded_(e.stats), !this.checkForAbort_(e.requestId)) {
        if (this.callQueue_.length || !this.hasEnoughInfoToAppend_()) this.callQueue_.push(this.handleData_.bind(this, e, t)); else {
          var i = this.pendingSegment_;
          if (this.setTimeMapping_(i.timeline), this.updateMediaSecondsLoaded_(i.part || i.segment), "closed" !== this.mediaSource_.readyState) {
            if (e.map && (e.map = this.initSegmentForMap(e.map, !0), i.segment.map = e.map), e.key && this.segmentKey(e.key, !0), i.isFmp4 = e.isFmp4, i.timingInfo = i.timingInfo || {}, i.isFmp4) {
              this.trigger("fmp4");
              i.timingInfo.start = i[lD(t.type)].start;
            } else {
              let t;
              e = this.getCurrentMediaInfo_();
              (e = "main" === this.loaderType_ && e && e.hasVideo) && (t = i.videoTimingInfo.start);
              i.timingInfo.start = this.trueSegmentStart_({
                currentStart: i.timingInfo.start,
                playlist: i.playlist,
                mediaIndex: i.mediaIndex,
                currentVideoTimestampOffset: this.sourceUpdater_.videoTimestampOffset(),
                useVideoTimingInfo: e,
                firstVideoFrameTimeForData: t,
                videoTimingInfo: i.videoTimingInfo,
                audioTimingInfo: i.audioTimingInfo
              });
            }
            if (this.updateAppendInitSegmentStatus(i, t.type), this.updateSourceBufferTimestampOffset_(i), i.isSyncRequest) {
              if (this.updateTimingInfoEnd_(i), this.syncController_.saveSegmentTimingInfo({
                segmentInfo: i,
                shouldSaveTimelineMapping: "main" === this.loaderType_
              }), (e = this.chooseNextRequest_()).mediaIndex !== i.mediaIndex || e.partIndex !== i.partIndex) return void this.logger_("sync segment was incorrect, not appending");
              this.logger_("sync segment was correct, appending");
            }
            i.hasAppendedData_ = !0;
            this.processMetadataQueue_();
            this.appendData_(i, t);
          }
        }
      }
    }
    updateAppendInitSegmentStatus(e, t) {
      "main" !== this.loaderType_ || "number" != typeof e.timestampOffset || e.changedTimestampOffset || (this.appendInitSegment_ = {
        audio: !0,
        video: !0
      });
      this.playlistOfLastInitSegment_[t] !== e.playlist && (this.appendInitSegment_[t] = !0);
    }
    getInitSegmentAndUpdateState_({
      type: e,
      initSegment: t,
      map: i,
      playlist: s
    }) {
      if (i) {
        var r = oA(i);
        if (this.activeInitSegmentId_ === r) return null;
        t = this.initSegmentForMap(i, !0).bytes;
        this.activeInitSegmentId_ = r;
      }
      return t && this.appendInitSegment_[e] ? (this.playlistOfLastInitSegment_[e] = s, this.appendInitSegment_[e] = !1, this.activeInitSegmentId_ = null, t) : null;
    }
    handleQuotaExceededError_({
      segmentInfo: e,
      type: t,
      bytes: i
    }, s) {
      var r = this.sourceUpdater_.audioBuffered();
      var n = this.sourceUpdater_.videoBuffered();
      1 < r.length && this.logger_("On QUOTA_EXCEEDED_ERR, found gaps in the audio buffer: " + a0(r).join(", "));
      1 < n.length && this.logger_("On QUOTA_EXCEEDED_ERR, found gaps in the video buffer: " + a0(n).join(", "));
      var a = r.length ? r.start(0) : 0;
      var o = r.length ? r.end(r.length - 1) : 0;
      var l = n.length ? n.start(0) : 0;
      var h = n.length ? n.end(n.length - 1) : 0;
      o - a <= 1 && h - l <= 1 ? (this.logger_(`On QUOTA_EXCEEDED_ERR, single segment too large to append to buffer, triggering an error. Appended byte length: ${i.byteLength}, audio buffer: ${a0(r).join(", ")}, video buffer: ${a0(n).join(", ")}, `), this.error({
        message: "Quota exceeded error with append of a single segment of content",
        excludeUntil: 1 / 0
      }), this.trigger("error")) : (this.waitingOnRemove_ = !0, this.callQueue_.push(this.appendToSourceBuffer_.bind(this, {
        segmentInfo: e,
        type: t,
        bytes: i
      })), o = this.currentTime_() - 1, this.logger_("On QUOTA_EXCEEDED_ERR, removing audio/video from 0 to " + o), this.remove(0, o, () => {
        this.logger_("On QUOTA_EXCEEDED_ERR, retrying append in 1s");
        this.waitingOnRemove_ = !1;
        this.quotaExceededErrorRetryTimeout_ = window.setTimeout(() => {
          this.logger_("On QUOTA_EXCEEDED_ERR, re-processing call queue");
          this.quotaExceededErrorRetryTimeout_ = null;
          this.processCallQueue_();
        }, 1e3);
      }, !0));
    }
    handleAppendError_({
      segmentInfo: e,
      type: t,
      bytes: i
    }, s) {
      s && (22 === s.code ? this.handleQuotaExceededError_({
        segmentInfo: e,
        type: t,
        bytes: i
      }) : (this.logger_("Received non QUOTA_EXCEEDED_ERR on append", s), this.error(`${t} append of ${i.length}b failed for segment #${e.mediaIndex} in playlist ` + e.playlist.id), this.trigger("appenderror")));
    }
    appendToSourceBuffer_({
      segmentInfo: e,
      type: t,
      initSegment: i,
      data: s,
      bytes: r
    }) {
      if (!r) {
        let e;
        let t;
        var n;
        var a = [s];
        let o = s.byteLength;
        i && (a.unshift(i), o += i.byteLength);
        e = 0;
        (n = {
          bytes: o,
          segments: a
        }).bytes && (t = new Uint8Array(n.bytes), n.segments.forEach(i => {
          t.set(i, e);
          e += i.byteLength;
        }));
        r = t;
      }
      this.sourceUpdater_.appendBuffer({
        segmentInfo: e,
        type: t,
        bytes: r
      }, this.handleAppendError_.bind(this, {
        segmentInfo: e,
        type: t,
        bytes: r
      }));
    }
    handleSegmentTimingInfo_(e, t, i) {
      this.pendingSegment_ && t === this.pendingSegment_.requestId && ((t = this.pendingSegment_.segment)[e += "TimingInfo"] || (t[e] = {}), t[e].transmuxerPrependedSeconds = i.prependedContentDuration || 0, t[e].transmuxedPresentationStart = i.start.presentation, t[e].transmuxedDecodeStart = i.start.decode, t[e].transmuxedPresentationEnd = i.end.presentation, t[e].transmuxedDecodeEnd = i.end.decode, t[e].baseMediaDecodeTime = i.baseMediaDecodeTime);
    }
    appendData_(e, t) {
      var {
        type,
        data
      } = t;
      data && data.byteLength && ("audio" === type && this.audioDisabled_ || (t = this.getInitSegmentAndUpdateState_({
        type,
        initSegment: t.initSegment,
        playlist: e.playlist,
        map: e.isFmp4 ? e.segment.map : null
      }), this.appendToSourceBuffer_({
        segmentInfo: e,
        type,
        initSegment: t,
        data
      })));
    }
    loadSegment_(e) {
      this.state = "WAITING";
      this.pendingSegment_ = e;
      this.trimBackBuffer_(e);
      "number" == typeof e.timestampOffset && this.transmuxer_ && this.transmuxer_.postMessage({
        action: "clearAllMp4Captions"
      });
      this.hasEnoughInfoToLoad_() ? this.updateTransmuxerAndRequestSegment_(e) : this.loadQueue_.push(() => {
        var t = tj({}, e, {
          forceTimestampOffset: !0
        });
        tj(e, this.generateSegmentInfo_(t));
        this.isPendingTimestampOffset_ = !1;
        this.updateTransmuxerAndRequestSegment_(e);
      });
    }
    updateTransmuxerAndRequestSegment_(e) {
      this.shouldUpdateTransmuxerTimestampOffset_(e.timestampOffset) && (this.gopBuffer_.length = 0, e.gopsToAlignWith = [], this.timeMapping_ = 0, this.transmuxer_.postMessage({
        action: "reset"
      }), this.transmuxer_.postMessage({
        action: "setTimestampOffset",
        timestampOffset: e.timestampOffset
      }));
      var t = this.createSimplifiedSegmentObj_(e);
      var i = this.isEndOfStream_(e.mediaIndex, e.playlist, e.partIndex);
      var s = null !== this.mediaIndex;
      var r = e.timeline !== this.currentTimeline_ && 0 < e.timeline;
      var i = i || s && r;
      this.logger_("Requesting " + lA(e));
      t.map && !t.map.bytes && (this.logger_("going to request init segment."), this.appendInitSegment_ = {
        video: !0,
        audio: !0
      });
      e.abortRequests = lm({
        xhr: this.vhs_.xhr,
        xhrOptions: this.xhrOptions_,
        decryptionWorker: this.decrypter_,
        segment: t,
        abortFn: this.handleAbort_.bind(this, e),
        progressFn: this.handleProgress_.bind(this),
        trackInfoFn: this.handleTrackInfo_.bind(this),
        timingInfoFn: this.handleTimingInfo_.bind(this),
        videoSegmentTimingInfoFn: this.handleSegmentTimingInfo_.bind(this, "video", e.requestId),
        audioSegmentTimingInfoFn: this.handleSegmentTimingInfo_.bind(this, "audio", e.requestId),
        captionsFn: this.handleCaptions_.bind(this),
        isEndOfTimeline: i,
        endedTimelineFn: () => {
          this.logger_("received endedtimeline callback");
        },
        id3Fn: this.handleId3_.bind(this),
        dataFn: this.handleData_.bind(this),
        doneFn: this.segmentRequestFinished_.bind(this),
        onTransmuxerLog: ({
          message: t,
          level: i,
          stream: s
        }) => {
          this.logger_(lA(e) + ` logged from transmuxer stream ${s} as a ${i}: ` + t);
        }
      });
    }
    trimBackBuffer_(e) {
      let t;
      var i;
      var s;
      var r;
      i = this.seekable_();
      s = this.currentTime_();
      r = this.playlist_.targetDuration || 10;
      t = s - oz.BACK_BUFFER_LENGTH;
      i.length && (t = Math.max(t, i.start(0)));
      var n = Math.min(s - r, t);
      0 < n && this.remove(0, n);
    }
    createSimplifiedSegmentObj_(e) {
      var t = e.segment;
      var i = e.part;
      var i = {
        resolvedUri: (i || t).resolvedUri,
        byterange: (i || t).byterange,
        requestId: e.requestId,
        transmuxer: e.transmuxer,
        audioAppendStart: e.audioAppendStart,
        gopsToAlignWith: e.gopsToAlignWith,
        part: e.part
      };
      var s = e.playlist.segments[e.mediaIndex - 1];
      s && s.timeline === t.timeline && (s.videoTimingInfo ? i.baseStartTime = s.videoTimingInfo.transmuxedDecodeEnd : s.audioTimingInfo && (i.baseStartTime = s.audioTimingInfo.transmuxedDecodeEnd));
      t.key && (s = t.key.iv || new Uint32Array([0, 0, 0, e.mediaIndex + e.playlist.mediaSequence]), i.key = this.segmentKey(t.key), i.key.iv = s);
      t.map && (i.map = this.initSegmentForMap(t.map));
      return i;
    }
    saveTransferStats_(e) {
      this.mediaRequests += 1;
      e && (this.mediaBytesTransferred += e.bytesReceived, this.mediaTransferDuration += e.roundTripTime);
    }
    saveBandwidthRelatedStats_(e, t) {
      this.pendingSegment_.byteLength = t.bytesReceived;
      e < 1 / 60 ? this.logger_("Ignoring segment's bandwidth because its duration of " + e + " is less than the min to record " + 1 / 60) : (this.bandwidth = t.bandwidth, this.roundTrip = t.roundTripTime);
    }
    handleTimeout_() {
      this.mediaRequestsTimedout += 1;
      this.bandwidth = 1;
      this.roundTrip = NaN;
      this.trigger("bandwidthupdate");
      this.trigger("timeout");
    }
    segmentRequestFinished_(e, t, i) {
      if (this.callQueue_.length) this.callQueue_.push(this.segmentRequestFinished_.bind(this, e, t, i)); else if (this.saveTransferStats_(t.stats), this.pendingSegment_ && t.requestId === this.pendingSegment_.requestId) {
        if (e) {
          this.pendingSegment_ = null;
          this.state = "READY";
          return e.code === ls.ABORTED ? void 0 : (this.pause(), e.code === ls.TIMEOUT ? void this.handleTimeout_() : (this.mediaRequestsErrored += 1, this.error(e), void this.trigger("error")));
        }
        e = this.pendingSegment_;
        this.saveBandwidthRelatedStats_(e.duration, t.stats);
        e.endOfAllRequests = t.endOfAllRequests;
        i.gopInfo && (this.gopBuffer_ = ((e, t, i) => {
          if (!t.length) return e;
          if (i) return t.slice();
          var s = t[0].pts;
          let r = 0;
          for (; r < e.length && !(e[r].pts >= s); r++);
          return e.slice(0, r).concat(t);
        })(this.gopBuffer_, i.gopInfo, this.safeAppend_));
        this.state = "APPENDING";
        this.trigger("appending");
        this.waitForAppendsToComplete_(e);
      }
    }
    setTimeMapping_(e) {
      null !== (e = this.syncController_.mappingForTimeline(e)) && (this.timeMapping_ = e);
    }
    updateMediaSecondsLoaded_(e) {
      "number" == typeof e.start && "number" == typeof e.end ? this.mediaSecondsLoaded += e.end - e.start : this.mediaSecondsLoaded += e.duration;
    }
    shouldUpdateTransmuxerTimestampOffset_(e) {
      return null !== e && ("main" === this.loaderType_ && e !== this.sourceUpdater_.videoTimestampOffset() || !this.audioDisabled_ && e !== this.sourceUpdater_.audioTimestampOffset());
    }
    trueSegmentStart_({
      currentStart: e,
      playlist: t,
      mediaIndex: i,
      firstVideoFrameTimeForData: s,
      currentVideoTimestampOffset: r,
      useVideoTimingInfo: n,
      videoTimingInfo: a,
      audioTimingInfo: o
    }) {
      return void 0 !== e ? e : n ? (e = t.segments[i - 1], 0 !== i && e && void 0 !== e.start && e.end === s + r ? a.start : s) : o.start;
    }
    waitForAppendsToComplete_(e) {
      var t;
      var i;
      var s = this.getCurrentMediaInfo_(e);
      s ? ({
        hasAudio: s,
        hasVideo: i,
        isMuxed: t
      } = s, i = "main" === this.loaderType_ && i, s = !this.audioDisabled_ && s && !t, e.waitingOnAppends = 0, e.hasAppendedData_ ? (i && e.waitingOnAppends++, s && e.waitingOnAppends++, i && this.sourceUpdater_.videoQueueCallback(this.checkAppendsDone_.bind(this, e)), s && this.sourceUpdater_.audioQueueCallback(this.checkAppendsDone_.bind(this, e))) : (e.timingInfo || "number" != typeof e.timestampOffset || (this.isPendingTimestampOffset_ = !0), e.timingInfo = {
        start: 0
      }, e.waitingOnAppends++, this.isPendingTimestampOffset_ || (this.updateSourceBufferTimestampOffset_(e), this.processMetadataQueue_()), this.checkAppendsDone_(e))) : (this.error({
        message: "No starting media returned, likely due to an unsupported media format.",
        playlistExclusionDuration: 1 / 0
      }), this.trigger("error"));
    }
    checkAppendsDone_(e) {
      this.checkForAbort_(e.requestId) || (e.waitingOnAppends--, 0 === e.waitingOnAppends && this.handleAppendsDone_());
    }
    checkForIllegalMediaSwitch(e) {
      i = this.loaderType_;
      t = this.getCurrentMediaInfo_();
      var t;
      var i = "main" === i && t && e ? e.hasAudio || e.hasVideo ? t.hasVideo && !e.hasVideo ? "Only audio found in segment when we expected video. We can't switch to audio only from a stream that had video. To get rid of this message, please add codec information to the manifest." : !t.hasVideo && e.hasVideo ? "Video found in segment when we expected only audio. We can't switch to a stream with video from an audio only stream. To get rid of this message, please add codec information to the manifest." : null : "Neither audio nor video found in segment." : null;
      return !!i && (this.error({
        message: i,
        playlistExclusionDuration: 1 / 0
      }), this.trigger("error"), !0);
    }
    updateSourceBufferTimestampOffset_(e) {
      if (null !== e.timestampOffset && "number" == typeof e.timingInfo.start && !e.changedTimestampOffset && "main" === this.loaderType_) {
        let t = !1;
        e.timestampOffset -= this.getSegmentStartTimeForTimestampOffsetCalculation_({
          videoTimingInfo: e.segment.videoTimingInfo,
          audioTimingInfo: e.segment.audioTimingInfo,
          timingInfo: e.timingInfo
        });
        e.changedTimestampOffset = !0;
        e.timestampOffset !== this.sourceUpdater_.videoTimestampOffset() && (this.sourceUpdater_.videoTimestampOffset(e.timestampOffset), t = !0);
        e.timestampOffset !== this.sourceUpdater_.audioTimestampOffset() && (this.sourceUpdater_.audioTimestampOffset(e.timestampOffset), t = !0);
        t && this.trigger("timestampoffset");
      }
    }
    getSegmentStartTimeForTimestampOffsetCalculation_({
      videoTimingInfo: e,
      audioTimingInfo: t,
      timingInfo: i
    }) {
      return this.useDtsForTimestampOffset_ ? e && "number" == typeof e.transmuxedDecodeStart ? e.transmuxedDecodeStart : t && "number" == typeof t.transmuxedDecodeStart ? t.transmuxedDecodeStart : i.start : i.start;
    }
    updateTimingInfoEnd_(e) {
      e.timingInfo = e.timingInfo || {};
      var t = this.getMediaInfo_();
      var t = "main" === this.loaderType_ && t && t.hasVideo && e.videoTimingInfo ? e.videoTimingInfo : e.audioTimingInfo;
      t && (e.timingInfo.end = "number" == typeof t.end ? t.end : t.start + e.duration);
    }
    handleAppendsDone_() {
      var e;
      var t;
      var i;
      this.pendingSegment_ && this.trigger("appendsdone");
      this.pendingSegment_ ? (e = this.pendingSegment_, this.updateTimingInfoEnd_(e), this.shouldSaveSegmentTimingInfo_ && this.syncController_.saveSegmentTimingInfo({
        segmentInfo: e,
        shouldSaveTimelineMapping: "main" === this.loaderType_
      }), (t = lO(e, this.sourceType_)) && ("warn" === t.severity ? s7.log.warn(t.message) : this.logger_(t.message)), this.recordThroughput_(e), this.pendingSegment_ = null, this.state = "READY", e.isSyncRequest && (this.trigger("syncinfoupdate"), !e.hasAppendedData_) ? this.logger_("Throwing away un-appended sync request " + lA(e)) : (this.logger_("Appended " + lA(e)), this.addSegmentMetadataCue_(e), this.fetchAtBuffer_ = !0, this.currentTimeline_ !== e.timeline && (this.timelineChangeController_.lastTimelineChange({
        type: this.loaderType_,
        from: this.currentTimeline_,
        to: e.timeline
      }), "main" !== this.loaderType_ || this.audioDisabled_ || this.timelineChangeController_.lastTimelineChange({
        type: "audio",
        from: this.currentTimeline_,
        to: e.timeline
      })), this.currentTimeline_ = e.timeline, this.trigger("syncinfoupdate"), t = e.segment, i = e.part, t = t.end && this.currentTime_() - t.end > 3 * e.playlist.targetDuration, i = i && i.end && this.currentTime_() - i.end > 3 * e.playlist.partTargetDuration, t || i ? (this.logger_(`bad ${t ? "segment" : "part"} ` + lA(e)), this.resetEverything()) : (null !== this.mediaIndex && this.trigger("bandwidthupdate"), this.trigger("progress"), this.mediaIndex = e.mediaIndex, this.partIndex = e.partIndex, this.isEndOfStream_(e.mediaIndex, e.playlist, e.partIndex) && this.endOfStream(), this.trigger("appended"), e.hasAppendedData_ && this.mediaAppends++, this.paused() || this.monitorBuffer_()))) : (this.state = "READY", this.paused() || this.monitorBuffer_());
    }
    recordThroughput_(e) {
      var t;
      var i;
      e.duration < 1 / 60 ? this.logger_("Ignoring segment's throughput because its duration of " + e.duration + " is less than the min to record " + 1 / 60) : (t = this.throughput.rate, i = Date.now() - e.endOfAllRequests + 1, e = Math.floor(e.byteLength / i * 8e3), this.throughput.rate += (e - t) / ++this.throughput.count);
    }
    addSegmentMetadataCue_(e) {
      var t;
      var i;
      var s;
      var r;
      this.segmentMetadataTrack_ && (t = (r = e.segment).start, i = r.end, lI(t)) && lI(i) && (lw(t, i, this.segmentMetadataTrack_), s = window.WebKitDataCue || window.VTTCue, r = {
        custom: r.custom,
        dateTimeObject: r.dateTimeObject,
        dateTimeString: r.dateTimeString,
        programDateTime: r.programDateTime,
        bandwidth: e.playlist.attributes.BANDWIDTH,
        resolution: e.playlist.attributes.RESOLUTION,
        codecs: e.playlist.attributes.CODECS,
        byteLength: e.byteLength,
        uri: e.uri,
        timeline: e.timeline,
        playlist: e.playlist.id,
        start: t,
        end: i
      }, (e = new s(t, i, JSON.stringify(r))).value = r, this.segmentMetadataTrack_.addCue(e));
    }
  }
  function lR() { }
  function lM(e) {
    return "string" != typeof e ? e : e.replace(/./, e => e.toUpperCase());
  }
  let lU = ["video", "audio"];
  let lB = (e, t) => {
    var i = t[e + "Buffer"];
    return i && i.updating || t.queuePending[e];
  };
  let lF = (e, t) => {
    if (0 !== t.queue.length) {
      let i = 0;
      let s = t.queue[i];
      if ("mediaSource" === s.type) t.updating() || "closed" === t.mediaSource.readyState || (t.queue.shift(), s.action(t), s.doneFn && s.doneFn(), lF("audio", t), lF("video", t)); else if ("mediaSource" !== e && t.ready() && "closed" !== t.mediaSource.readyState && !lB(e, t)) {
        if (s.type !== e) {
          if (null === (i = ((e, t) => {
            for (let s = 0; s < t.length; s++) {
              var i = t[s];
              if ("mediaSource" === i.type) break;
              if (i.type === e) return s;
            }
            return null;
          })(e, t.queue))) return;
          s = t.queue[i];
        }
        t.queue.splice(i, 1);
        (t.queuePending[e] = s).action(e, t);
        s.doneFn || (t.queuePending[e] = null, lF(e, t));
      }
    }
  };
  let lq = (e, t) => {
    var i = t[e + "Buffer"];
    var s = lM(e);
    i && (i.removeEventListener("updateend", t[`on${s}UpdateEnd_`]), i.removeEventListener("error", t[`on${s}Error_`]), t.codecs[e] = null, t[e + "Buffer"] = null);
  };
  let lj = (e, t) => e && t && -1 !== Array.prototype.indexOf.call(e.sourceBuffers, t);
  let lH = {
    appendBuffer: (e, t, i) => (s, r) => {
      var n = r[s + "Buffer"];
      if (lj(r.mediaSource, n)) {
        r.logger_(`Appending segment ${t.mediaIndex}'s ${e.length} bytes to ${s}Buffer`);
        try {
          n.appendBuffer(e);
        } catch (e) {
          r.logger_(`Error with code ${e.code} ` + (22 === e.code ? "(QUOTA_EXCEEDED_ERR) " : "") + `when appending segment ${t.mediaIndex} to ${s}Buffer`);
          r.queuePending[s] = null;
          i(e);
        }
      }
    },
    remove: (e, t) => (i, s) => {
      var r = s[i + "Buffer"];
      if (lj(s.mediaSource, r)) {
        s.logger_(`Removing ${e} to ${t} from ${i}Buffer`);
        try {
          r.remove(e, t);
        } catch (r) {
          s.logger_(`Remove ${e} to ${t} from ${i}Buffer failed`);
        }
      }
    },
    timestampOffset: e => (t, i) => {
      var s = i[t + "Buffer"];
      lj(i.mediaSource, s) && (i.logger_(`Setting ${t}timestampOffset to ` + e), s.timestampOffset = e);
    },
    callback: e => (t, i) => {
      e();
    },
    endOfStream: e => t => {
      if ("open" === t.mediaSource.readyState) {
        t.logger_(`Calling mediaSource endOfStream(${e || ""})`);
        try {
          t.mediaSource.endOfStream(e);
        } catch (e) {
          s7.log.warn("Failed to call media source endOfStream", e);
        }
      }
    },
    duration: e => t => {
      t.logger_("Setting mediaSource duration to " + e);
      try {
        t.mediaSource.duration = e;
      } catch (e) {
        s7.log.warn("Failed to set media source duration", e);
      }
    },
    abort: () => (e, t) => {
      if ("open" === t.mediaSource.readyState) {
        var i = t[e + "Buffer"];
        if (lj(t.mediaSource, i)) {
          t.logger_(`calling abort on ${e}Buffer`);
          try {
            i.abort();
          } catch (t) {
            s7.log.warn(`Failed to abort on ${e}Buffer`, t);
          }
        }
      }
    },
    addSourceBuffer: (e, t) => i => {
      var s = lM(e);
      var r = rv(t);
      i.logger_(`Adding ${e}Buffer with codec ${t} to mediaSource`);
      var r = i.mediaSource.addSourceBuffer(r);
      r.addEventListener("updateend", i[`on${s}UpdateEnd_`]);
      r.addEventListener("error", i[`on${s}Error_`]);
      i.codecs[e] = t;
      i[e + "Buffer"] = r;
    },
    removeSourceBuffer: e => t => {
      var i = t[e + "Buffer"];
      if (lq(e, t), lj(t.mediaSource, i)) {
        t.logger_(`Removing ${e}Buffer with codec ${t.codecs[e]} from mediaSource`);
        try {
          t.mediaSource.removeSourceBuffer(i);
        } catch (t) {
          s7.log.warn(`Failed to removeSourceBuffer ${e}Buffer`, t);
        }
      }
    },
    changeType: e => (t, i) => {
      var s = i[t + "Buffer"];
      var r = rv(e);
      if (lj(i.mediaSource, s) && i.codecs[t] !== e) {
        i.logger_(`changing ${t}Buffer codec from ${i.codecs[t]} to ` + e);
        try {
          s.changeType(r);
          i.codecs[t] = e;
        } catch (e) {
          s7.log.warn(`Failed to changeType on ${t}Buffer`, e);
        }
      }
    }
  };
  let lV = ({
    type: e,
    sourceUpdater: t,
    action: i,
    doneFn: s,
    name: r
  }) => {
    t.queue.push({
      type: e,
      action: i,
      doneFn: s,
      name: r
    });
    lF(e, t);
  };
  let l$ = (e, t) => i => {
    var s;
    t.queuePending[e] && (s = t.queuePending[e].doneFn, t.queuePending[e] = null, s) && s(t[e + "Error_"]);
    lF(e, t);
  };
  class lz extends s7.EventTarget {
    constructor(e) {
      super();
      this.mediaSource = e;
      this.sourceopenListener_ = () => lF("mediaSource", this);
      this.mediaSource.addEventListener("sourceopen", this.sourceopenListener_);
      this.logger_ = aj("SourceUpdater");
      this.audioTimestampOffset_ = 0;
      this.videoTimestampOffset_ = 0;
      this.queue = [];
      this.queuePending = {
        audio: null,
        video: null
      };
      this.delayedAudioAppendQueue_ = [];
      this.videoAppendQueued_ = !1;
      this.codecs = {};
      this.onVideoUpdateEnd_ = l$("video", this);
      this.onAudioUpdateEnd_ = l$("audio", this);
      this.onVideoError_ = e => {
        this.videoError_ = e;
      };
      this.onAudioError_ = e => {
        this.audioError_ = e;
      };
      this.createdSourceBuffers_ = !1;
      this.initializedEme_ = !1;
      this.triggeredReady_ = !1;
    }
    initializedEme() {
      this.initializedEme_ = !0;
      this.triggerReady();
    }
    hasCreatedSourceBuffers() {
      return this.createdSourceBuffers_;
    }
    hasInitializedAnyEme() {
      return this.initializedEme_;
    }
    ready() {
      return this.hasCreatedSourceBuffers() && this.hasInitializedAnyEme();
    }
    createSourceBuffers(e) {
      this.hasCreatedSourceBuffers() || (this.addOrChangeSourceBuffers(e), this.createdSourceBuffers_ = !0, this.trigger("createdsourcebuffers"), this.triggerReady());
    }
    triggerReady() {
      this.ready() && !this.triggeredReady_ && (this.triggeredReady_ = !0, this.trigger("ready"));
    }
    addSourceBuffer(e, t) {
      lV({
        type: "mediaSource",
        sourceUpdater: this,
        action: lH.addSourceBuffer(e, t),
        name: "addSourceBuffer"
      });
    }
    abort(e) {
      lV({
        type: e,
        sourceUpdater: this,
        action: lH.abort(e),
        name: "abort"
      });
    }
    removeSourceBuffer(e) {
      this.canRemoveSourceBuffer() ? lV({
        type: "mediaSource",
        sourceUpdater: this,
        action: lH.removeSourceBuffer(e),
        name: "removeSourceBuffer"
      }) : s7.log.error("removeSourceBuffer is not supported!");
    }
    canRemoveSourceBuffer() {
      return !s7.browser.IS_FIREFOX && window.MediaSource && window.MediaSource.prototype && "function" == typeof window.MediaSource.prototype.removeSourceBuffer;
    }
    static canChangeType() {
      return window.SourceBuffer && window.SourceBuffer.prototype && "function" == typeof window.SourceBuffer.prototype.changeType;
    }
    canChangeType() {
      return this.constructor.canChangeType();
    }
    changeType(e, t) {
      this.canChangeType() ? lV({
        type: e,
        sourceUpdater: this,
        action: lH.changeType(t),
        name: "changeType"
      }) : s7.log.error("changeType is not supported!");
    }
    addOrChangeSourceBuffers(e) {
      if (!e || "object" != typeof e || 0 === Object.keys(e).length) throw Error("Cannot addOrChangeSourceBuffers to undefined codecs");
      Object.keys(e).forEach(t => {
        var i = e[t];
        if (!this.hasCreatedSourceBuffers()) return this.addSourceBuffer(t, i);
        this.canChangeType() && this.changeType(t, i);
      });
    }
    appendBuffer(e, t) {
      var {
        segmentInfo,
        type,
        bytes
      } = e;
      this.processedAppend_ = !0;
      "audio" === type && this.videoBuffer && !this.videoAppendQueued_ ? (this.delayedAudioAppendQueue_.push([e, t]), this.logger_(`delayed audio append of ${bytes.length} until video append`)) : (e = t, lV({
        type,
        sourceUpdater: this,
        action: lH.appendBuffer(bytes, segmentInfo || {
          mediaIndex: -1
        }, e),
        doneFn: t,
        name: "appendBuffer"
      }), "video" === type && (this.videoAppendQueued_ = !0, this.delayedAudioAppendQueue_.length) && (r = this.delayedAudioAppendQueue_.slice(), this.logger_(`queuing delayed audio ${bytes.length} appendBuffers`), this.delayedAudioAppendQueue_.length = 0, bytes.forEach(e => {
        this.appendBuffer.apply(this, e);
      })));
    }
    audioBuffered() {
      return lj(this.mediaSource, this.audioBuffer) && this.audioBuffer.buffered || aV();
    }
    videoBuffered() {
      return lj(this.mediaSource, this.videoBuffer) && this.videoBuffer.buffered || aV();
    }
    buffered() {
      var e = lj(this.mediaSource, this.videoBuffer) ? this.videoBuffer : null;
      var t = lj(this.mediaSource, this.audioBuffer) ? this.audioBuffer : null;
      if (t && !e) return this.audioBuffered();
      if (e && !t) return this.videoBuffered();
      {
        var i = this.audioBuffered();
        var s = this.videoBuffered();
        let e = null;
        let t = null;
        let a = 0;
        var r = [];
        var n = [];
        if (!(i && i.length && s && s.length)) return aV();
        let o = i.length;
        for (; o--;) {
          r.push({
            time: i.start(o),
            type: "start"
          });
          r.push({
            time: i.end(o),
            type: "end"
          });
        }
        for (o = s.length; o--;) {
          r.push({
            time: s.start(o),
            type: "start"
          });
          r.push({
            time: s.end(o),
            type: "end"
          });
        }
        for (r.sort(function (e, t) {
          return e.time - t.time;
        }), o = 0; o < r.length; o++) {
          "start" === r[o].type ? 2 == ++a && (e = r[o].time) : "end" === r[o].type && 1 == --a && (t = r[o].time);
          null !== e && null !== t && (n.push([e, t]), e = null, t = null);
        }
        return aV(n);
      }
    }
    setDuration(e, t = lR) {
      lV({
        type: "mediaSource",
        sourceUpdater: this,
        action: lH.duration(e),
        name: "duration",
        doneFn: t
      });
    }
    endOfStream(e = null, t = lR) {
      "string" != typeof e && (e = void 0);
      lV({
        type: "mediaSource",
        sourceUpdater: this,
        action: lH.endOfStream(e),
        name: "endOfStream",
        doneFn: t
      });
    }
    removeAudio(e, t, i = lR) {
      this.audioBuffered().length && 0 !== this.audioBuffered().end(0) ? lV({
        type: "audio",
        sourceUpdater: this,
        action: lH.remove(e, t),
        doneFn: i,
        name: "remove"
      }) : i();
    }
    removeVideo(e, t, i = lR) {
      this.videoBuffered().length && 0 !== this.videoBuffered().end(0) ? lV({
        type: "video",
        sourceUpdater: this,
        action: lH.remove(e, t),
        doneFn: i,
        name: "remove"
      }) : i();
    }
    updating() {
      return !(!lB("audio", this) && !lB("video", this));
    }
    audioTimestampOffset(e) {
      void 0 !== e && this.audioBuffer && this.audioTimestampOffset_ !== e && (lV({
        type: "audio",
        sourceUpdater: this,
        action: lH.timestampOffset(e),
        name: "timestampOffset"
      }), this.audioTimestampOffset_ = e);
      return this.audioTimestampOffset_;
    }
    videoTimestampOffset(e) {
      void 0 !== e && this.videoBuffer && this.videoTimestampOffset !== e && (lV({
        type: "video",
        sourceUpdater: this,
        action: lH.timestampOffset(e),
        name: "timestampOffset"
      }), this.videoTimestampOffset_ = e);
      return this.videoTimestampOffset_;
    }
    audioQueueCallback(e) {
      this.audioBuffer && lV({
        type: "audio",
        sourceUpdater: this,
        action: lH.callback(e),
        name: "callback"
      });
    }
    videoQueueCallback(e) {
      this.videoBuffer && lV({
        type: "video",
        sourceUpdater: this,
        action: lH.callback(e),
        name: "callback"
      });
    }
    dispose() {
      this.trigger("dispose");
      lU.forEach(e => {
        this.abort(e);
        this.canRemoveSourceBuffer() ? this.removeSourceBuffer(e) : this[e + "QueueCallback"](() => lq(e, this));
      });
      this.videoAppendQueued_ = !1;
      this.delayedAudioAppendQueue_.length = 0;
      this.sourceopenListener_ && this.mediaSource.removeEventListener("sourceopen", this.sourceopenListener_);
      this.off();
    }
  }
  let lW = e => decodeURIComponent(escape(String.fromCharCode.apply(null, e)));
  let lG = new Uint8Array("\n\n".split("").map(e => e.charCodeAt(0)));
  class lX extends Error {
    constructor() {
      super("Trying to parse received VTT cues, but there is no WebVTT. Make sure vtt.js is loaded.");
    }
  }
  class lK extends lN {
    constructor(e, t = {}) {
      super(e, t);
      this.mediaSource_ = null;
      this.subtitlesTrack_ = null;
      this.loaderType_ = "subtitle";
      this.featuresNativeTextTracks_ = e.featuresNativeTextTracks;
      this.loadVttJs = e.loadVttJs;
      this.shouldSaveSegmentTimingInfo_ = !1;
    }
    createTransmuxer_() {
      return null;
    }
    buffered_() {
      var e;
      return this.subtitlesTrack_ && this.subtitlesTrack_.cues && this.subtitlesTrack_.cues.length ? aV([[(e = this.subtitlesTrack_.cues)[0].startTime, e[e.length - 1].startTime]]) : aV();
    }
    initSegmentForMap(e, t = !1) {
      if (!e) return null;
      var i = oA(e);
      let s = this.initSegments_[i];
      t && !s && e.bytes && ((t = new Uint8Array(t = lG.byteLength + e.bytes.byteLength)).set(e.bytes), t.set(lG, e.bytes.byteLength), this.initSegments_[i] = s = {
        resolvedUri: e.resolvedUri,
        byterange: e.byterange,
        bytes: t
      });
      return s || e;
    }
    couldBeginLoading_() {
      return this.playlist_ && this.subtitlesTrack_ && !this.paused();
    }
    init_() {
      this.state = "READY";
      this.resetEverything();
      return this.monitorBuffer_();
    }
    track(e) {
      void 0 !== e && (this.subtitlesTrack_ = e, "INIT" === this.state && this.couldBeginLoading_()) && this.init_();
      return this.subtitlesTrack_;
    }
    remove(e, t) {
      lw(e, t, this.subtitlesTrack_);
    }
    fillBuffer_() {
      var e = this.chooseNextRequest_();
      e && (null === this.syncController_.timestampOffsetForTimeline(e.timeline) ? (this.syncController_.one("timestampoffset", () => {
        this.state = "READY";
        this.paused() || this.monitorBuffer_();
      }), this.state = "WAITING_ON_TIMELINE") : this.loadSegment_(e));
    }
    timestampOffsetForSegment_() {
      return null;
    }
    chooseNextRequest_() {
      return this.skipEmptySegments_(super.chooseNextRequest_());
    }
    skipEmptySegments_(e) {
      for (; e && e.segment.empty;) {
        if (e.mediaIndex + 1 >= e.playlist.segments.length) {
          e = null;
          break;
        }
        e = this.generateSegmentInfo_({
          playlist: e.playlist,
          mediaIndex: e.mediaIndex + 1,
          startOfSegment: e.startOfSegment + e.duration,
          isSyncRequest: e.isSyncRequest
        });
      }
      return e;
    }
    stopForError(e) {
      this.error(e);
      this.state = "READY";
      this.pause();
      this.trigger("error");
    }
    segmentRequestFinished_(e, t, i) {
      if (this.subtitlesTrack_) {
        if (this.saveTransferStats_(t.stats), this.pendingSegment_) {
          if (e) {
            e.code === ls.TIMEOUT && this.handleTimeout_();
            e.code === ls.ABORTED ? this.mediaRequestsAborted += 1 : this.mediaRequestsErrored += 1;
            this.stopForError(e);
          } else {
            var s = this.pendingSegment_;
            this.saveBandwidthRelatedStats_(s.duration, t.stats);
            t.key && this.segmentKey(t.key, !0);
            this.state = "APPENDING";
            this.trigger("appending");
            var r = s.segment;
            if (r.map && (r.map.bytes = t.map.bytes), s.bytes = t.bytes, "function" != typeof window.WebVTT && "function" == typeof this.loadVttJs) {
              this.state = "WAITING_ON_VTTJS";
              this.loadVttJs().then(() => this.segmentRequestFinished_(e, t, i), () => this.stopForError({
                message: "Error loading vtt.js"
              }));
            } else {
              r.requested = !0;
              try {
                this.parseVTTCues_(s);
              } catch (e) {
                return void this.stopForError({
                  message: e.message
                });
              }
              if (this.updateTimeMapping_(s, this.syncController_.timelines[s.timeline], this.playlist_), s.cues.length ? s.timingInfo = {
                start: s.cues[0].startTime,
                end: s.cues[s.cues.length - 1].endTime
              } : s.timingInfo = {
                start: s.startOfSegment,
                end: s.startOfSegment + s.duration
              }, s.isSyncRequest) {
                this.trigger("syncinfoupdate");
                this.pendingSegment_ = null;
                this.state = "READY";
              } else {
                s.byteLength = s.bytes.byteLength;
                this.mediaSecondsLoaded += r.duration;
                s.cues.forEach(e => {
                  this.subtitlesTrack_.addCue(this.featuresNativeTextTracks_ ? new window.VTTCue(e.startTime, e.endTime, e.text) : e);
                });
                var n = this.subtitlesTrack_;
                var a = n.cues;
                if (a) {
                  var o = {};
                  for (let e = a.length - 1; 0 <= e; e--) {
                    var l = a[e];
                    var h = `${l.startTime}-${l.endTime}-` + l.text;
                    o[h] ? n.removeCue(l) : o[h] = l;
                  }
                }
                this.handleAppendsDone_();
              }
            }
          }
        } else {
          this.state = "READY";
          this.mediaRequestsAborted += 1;
        }
      } else this.state = "READY";
    }
    handleData_() { }
    updateTimingInfoEnd_() { }
    parseVTTCues_(e) {
      let t;
      let i = !1;
      if ("function" != typeof window.WebVTT) throw new lX();
      "function" == typeof window.TextDecoder ? t = new window.TextDecoder("utf8") : (t = window.WebVTT.StringDecoder(), i = !0);
      var s = new window.WebVTT.Parser(window, window.vttjs, t);
      if (e.cues = [], e.timestampmap = {
        MPEGTS: 0,
        LOCAL: 0
      }, s.oncue = e.cues.push.bind(e.cues), s.ontimestampmap = t => {
        e.timestampmap = t;
      }, s.onparsingerror = e => {
        s7.log.warn("Error encountered when parsing cues: " + e.message);
      }, e.segment.map) {
        let t = e.segment.map.bytes;
        i && (t = lW(t));
        s.parse(t);
      }
      let r = e.bytes;
      i && (r = lW(r));
      s.parse(r);
      s.flush();
    }
    updateTimeMapping_(e, t, i) {
      var s;
      var r;
      var n = e.segment;
      if (t) {
        if (e.cues.length) {
          let {
            MPEGTS,
            LOCAL
          } = e.timestampmap;
          let l = MPEGTS / 9e4 - LOCAL + t.mapping;
          e.cues.forEach(e => {
            var i = e.endTime - e.startTime;
            var s = 0 === MPEGTS ? e.startTime + l : this.handleRollover_(e.startTime + l, t.time);
            e.startTime = Math.max(s, 0);
            e.endTime = Math.max(s + i, 0);
          });
          i.syncInfo || (s = e.cues[0].startTime, r = e.cues[e.cues.length - 1].startTime, i.syncInfo = {
            mediaSequence: i.mediaSequence + e.mediaIndex,
            time: Math.min(s, r - n.duration)
          });
        } else n.empty = !0;
      }
    }
    handleRollover_(e, t) {
      let i;
      if (null === t) return e;
      let s = 9e4 * e;
      var r = 9e4 * t;
      for (i = r < s ? -0x200000000 : 0x200000000; 0x100000000 < Math.abs(s - r);) s += i;
      return s / 9e4;
    }
  }
  let lY = [{
    name: "VOD",
    run: (e, t, i, s, r) => i !== 1 / 0 ? {
      time: 0,
      segmentIndex: 0,
      partIndex: null
    } : null
  }, {
    name: "MediaSequence",
    run: (e, t, i, s, r, n) => {
      if (n) {
        var a = e.getMediaSequenceMap(n);
        if (a && 0 !== a.size && void 0 !== t.mediaSequence && Array.isArray(t.segments) && t.segments.length) {
          let e = t.mediaSequence;
          let i = 0;
          for (let s of t.segments) {
            var o = a.get(e);
            if (!o) break;
            if (r >= o.start && r < o.end) {
              if (Array.isArray(s.parts) && s.parts.length) {
                let e = o.start;
                let t = 0;
                for (let n of s.parts) {
                  var l = e;
                  var h = l + n.duration;
                  if (l <= r && r < h) return {
                    time: o.start,
                    segmentIndex: i,
                    partIndex: t
                  };
                  t++;
                  e = h;
                }
              }
              return {
                time: o.start,
                segmentIndex: i,
                partIndex: null
              };
            }
            i++;
            e++;
          }
        }
      }
      return null;
    }
  }, {
    name: "ProgramDateTime",
    run: (e, t, i, s, r) => {
      if (!Object.keys(e.timelineToDatetimeMappings).length) return null;
      let n = null;
      let a = null;
      var o = a2(t);
      r = r || 0;
      for (let i = 0; i < o.length; i++) {
        var l = o[t.endList || 0 === r ? i : o.length - (i + 1)];
        var h = l.segment;
        var d = e.timelineToDatetimeMappings[h.timeline];
        if (d && h.dateTimeObject) {
          let e = h.dateTimeObject.getTime() / 1e3 + d;
          if (h.parts && "number" == typeof l.partIndex) for (let t = 0; t < l.partIndex; t++) e += h.parts[t].duration;
          if (d = Math.abs(r - e), null !== a && (0 === d || a < d)) break;
          a = d;
          n = {
            time: e,
            segmentIndex: l.segmentIndex,
            partIndex: l.partIndex
          };
        }
      }
      return n;
    }
  }, {
    name: "Segment",
    run: (e, t, i, s, r) => {
      let n = null;
      let a = null;
      r = r || 0;
      var o = a2(t);
      for (let e = 0; e < o.length; e++) {
        var l = o[t.endList || 0 === r ? e : o.length - (e + 1)];
        var h = l.segment;
        var d = l.part && l.part.start || h && h.start;
        if (h.timeline === s && void 0 !== d) {
          if (h = Math.abs(r - d), null !== a && a < h) break;
          (!n || null === a || a >= h) && (a = h, n = {
            time: d,
            segmentIndex: l.segmentIndex,
            partIndex: l.partIndex
          });
        }
      }
      return n;
    }
  }, {
    name: "Discontinuity",
    run: (e, t, i, s, r) => {
      let n = null;
      if (r = r || 0, t.discontinuityStarts && t.discontinuityStarts.length) {
        let i = null;
        for (let s = 0; s < t.discontinuityStarts.length; s++) {
          var a = t.discontinuityStarts[s];
          var o = t.discontinuitySequence + s + 1;
          var o = e.discontinuities[o];
          if (o) {
            var l = Math.abs(r - o.time);
            if (null !== i && i < l) break;
            (!n || null === i || i >= l) && (i = l, n = {
              time: o.time,
              segmentIndex: a,
              partIndex: null
            });
          }
        }
      }
      return n;
    }
  }, {
    name: "Playlist",
    run: (e, t, i, s, r) => t.syncInfo ? {
      time: t.syncInfo.time,
      segmentIndex: t.syncInfo.mediaSequence - t.mediaSequence,
      partIndex: null
    } : null
  }];
  class lQ extends s7.EventTarget {
    constructor(e = 0) {
      super();
      this.timelines = [];
      this.discontinuities = [];
      this.timelineToDatetimeMappings = {};
      this.mediaSequenceStorage_ = new Map();
      this.logger_ = aj("SyncController");
    }
    getMediaSequenceMap(e) {
      return this.mediaSequenceStorage_.get(e);
    }
    updateMediaSequenceMap(e, t, i) {
      if (void 0 !== e.mediaSequence && Array.isArray(e.segments) && e.segments.length) {
        var s = this.getMediaSequenceMap(i);
        let r = new Map();
        let n = e.mediaSequence;
        let a;
        a = s ? s.has(e.mediaSequence) ? s.get(e.mediaSequence).start : (this.logger_(`MediaSequence sync for ${i} segment loader - received a gap between playlists.
Fallback base time to: ${t}.
Received media sequence: ${n}.
Current map: `, s), t) : 0;
        this.logger_(`MediaSequence sync for ${i} segment loader.
Received media sequence: ${n}.
base time is ${a}
Current map: `, s);
        e.segments.forEach(e => {
          var t = a;
          var e = t + e.duration;
          var t = {
            start: t,
            end: e
          };
          r.set(n, t);
          n++;
          a = e;
        });
        this.mediaSequenceStorage_.set(i, r);
      }
    }
    getSyncPoint(e, t, i, s, r) {
      if (t !== 1 / 0) return lY.find(({
        name: e
      }) => "VOD" === e).run(this, e, t);
      if (!(t = this.runStrategies_(e, t, i, s, r)).length) return null;
      for (let i of t) {
        var {
          syncPoint,
          strategy
        } = i;
        var {
          segmentIndex,
          time
        } = n;
        if (!(segmentIndex < 0)) {
          var h = time + e.segments[segmentIndex].duration;
          if (this.logger_(`Strategy: ${strategy}. Current time: ${s}. selected segment: ${segmentIndex}. Time: [${time} -> ${h}]}`), time <= s && s < h) {
            this.logger_("Found sync point with exact match: ", syncPoint);
            return syncPoint;
          }
        }
      }
      return this.selectSyncPoint_(t, {
        key: "time",
        value: s
      });
    }
    getExpiredTime(e, t) {
      return e && e.segments && (t = this.runStrategies_(e, t, e.discontinuitySequence, 0, "main")).length ? (0 < (t = this.selectSyncPoint_(t, {
        key: "segmentIndex",
        value: 0
      })).segmentIndex && (t.time *= -1), Math.abs(t.time + aX({
        defaultDuration: e.targetDuration,
        durationList: e.segments,
        startIndex: t.segmentIndex,
        endIndex: 0
      }))) : null;
    }
    runStrategies_(e, t, i, s, r) {
      var n = [];
      for (let l = 0; l < lY.length; l++) {
        var a = lY[l];
        var o = a.run(this, e, t, i, s, r);
        o && (o.strategy = a.name, n.push({
          strategy: a.name,
          syncPoint: o
        }));
      }
      return n;
    }
    selectSyncPoint_(e, t) {
      let i = e[0].syncPoint;
      let s = Math.abs(e[0].syncPoint[t.key] - t.value);
      let r = e[0].strategy;
      for (let a = 1; a < e.length; a++) {
        var n = Math.abs(e[a].syncPoint[t.key] - t.value);
        n < s && (s = n, i = e[a].syncPoint, r = e[a].strategy);
      }
      this.logger_(`syncPoint for [${t.key}: ${t.value}] chosen with strategy [${r}]: [time:${i.time}, segmentIndex:` + i.segmentIndex + ("number" == typeof i.partIndex ? ",partIndex:" + i.partIndex : "") + "]");
      return i;
    }
    saveExpiredSegmentInfo(e, t) {
      var i = t.mediaSequence - e.mediaSequence;
      if (86400 < i) s7.log.warn(`Not saving expired segment info. Media sequence gap ${i} is too large.`); else for (let r = i - 1; 0 <= r; r--) {
        var s = e.segments[r];
        if (s && void 0 !== s.start) {
          t.syncInfo = {
            mediaSequence: e.mediaSequence + r,
            time: s.start
          };
          this.logger_(`playlist refresh sync: [time:${t.syncInfo.time}, mediaSequence: ${t.syncInfo.mediaSequence}]`);
          this.trigger("syncinfoupdate");
          break;
        }
      }
    }
    setDateTimeMappingForStart(e) {
      var t;
      this.timelineToDatetimeMappings = {};
      e.segments && e.segments.length && e.segments[0].dateTimeObject && (t = (e = e.segments[0]).dateTimeObject.getTime() / 1e3, this.timelineToDatetimeMappings[e.timeline] = -t);
    }
    saveSegmentTimingInfo({
      segmentInfo: e,
      shouldSaveTimelineMapping: t
    }) {
      var i = this.calculateSegmentTimeMapping_(e, e.timingInfo, t);
      var s = e.segment;
      i && (this.saveDiscontinuitySyncInfo_(e), e.playlist.syncInfo || (e.playlist.syncInfo = {
        mediaSequence: e.playlist.mediaSequence + e.mediaIndex,
        time: s.start
      }));
      var i = s.dateTimeObject;
      s.discontinuity && t && i && (this.timelineToDatetimeMappings[s.timeline] = -i.getTime() / 1e3);
    }
    timestampOffsetForTimeline(e) {
      return void 0 === this.timelines[e] ? null : this.timelines[e].time;
    }
    mappingForTimeline(e) {
      return void 0 === this.timelines[e] ? null : this.timelines[e].mapping;
    }
    calculateSegmentTimeMapping_(e, t, i) {
      var s = e.segment;
      var r = e.part;
      let n = this.timelines[e.timeline];
      let a;
      let o;
      if ("number" == typeof e.timestampOffset) {
        n = {
          time: e.startOfSegment,
          mapping: e.startOfSegment - t.start
        };
        i && (this.timelines[e.timeline] = n, this.trigger("timestampoffset"), this.logger_(`time mapping for timeline ${e.timeline}: [time: ${n.time}] [mapping: ${n.mapping}]`));
        a = e.startOfSegment;
      } else {
        if (!n) return !1;
        a = t.start + n.mapping;
      }
      o = t.end + n.mapping;
      r && (r.start = a, r.end = o);
      (!s.start || a < s.start) && (s.start = a);
      s.end = o;
      return !0;
    }
    saveDiscontinuitySyncInfo_(e) {
      var t = e.playlist;
      var i = e.segment;
      if (i.discontinuity) this.discontinuities[i.timeline] = {
        time: i.start,
        accuracy: 0
      }; else if (t.discontinuityStarts && t.discontinuityStarts.length) for (let o = 0; o < t.discontinuityStarts.length; o++) {
        var s = t.discontinuityStarts[o];
        var r = t.discontinuitySequence + o + 1;
        var n = s - e.mediaIndex;
        var a = Math.abs(n);
        if (!this.discontinuities[r] || this.discontinuities[r].accuracy > a) {
          let o;
          o = n < 0 ? i.start - aX({
            defaultDuration: t.targetDuration,
            durationList: t.segments,
            startIndex: e.mediaIndex,
            endIndex: s
          }) : i.end + aX({
            defaultDuration: t.targetDuration,
            durationList: t.segments,
            startIndex: e.mediaIndex + 1,
            endIndex: s
          });
          this.discontinuities[r] = {
            time: o,
            accuracy: a
          };
        }
      }
    }
    dispose() {
      this.trigger("dispose");
      this.off();
    }
  }
  class lJ extends s7.EventTarget {
    constructor() {
      super();
      this.pendingTimelineChanges_ = {};
      this.lastTimelineChanges_ = {};
    }
    clearPendingTimelineChange(e) {
      this.pendingTimelineChanges_[e] = null;
      this.trigger("pendingtimelinechange");
    }
    pendingTimelineChange({
      type: e,
      from: t,
      to: i
    }) {
      "number" == typeof t && "number" == typeof i && (this.pendingTimelineChanges_[e] = {
        type: e,
        from: t,
        to: i
      }, this.trigger("pendingtimelinechange"));
      return this.pendingTimelineChanges_[e];
    }
    lastTimelineChange({
      type: e,
      from: t,
      to: i
    }) {
      "number" == typeof t && "number" == typeof i && (this.lastTimelineChanges_[e] = {
        type: e,
        from: t,
        to: i
      }, delete this.pendingTimelineChanges_[e], this.trigger("timelinechange"));
      return this.lastTimelineChanges_[e];
    }
    dispose() {
      this.trigger("dispose");
      this.pendingTimelineChanges_ = {};
      this.lastTimelineChanges_ = {};
      this.off();
    }
  }
  var lZ = oX(oK(oY(function () {
    var e = function () {
      function e() {
        this.listeners = {};
      }
      var t = e.prototype;
      t.on = function (e, t) {
        this.listeners[e] || (this.listeners[e] = []);
        this.listeners[e].push(t);
      };
      t.off = function (e, t) {
        return !!this.listeners[e] && (t = this.listeners[e].indexOf(t), this.listeners[e] = this.listeners[e].slice(0), this.listeners[e].splice(t, 1), -1 < t);
      };
      t.trigger = function (e) {
        var t = this.listeners[e];
        if (t) {
          if (2 == $$arguments.length) for (i = t.length, s = 0, void 0; s < i; ++s) {
            var i;
            var s;
            t[s].call(this, $$arguments[1]);
          } else for (r = Array.prototype.slice.call(arguments, 1), n = t.length, a = 0, void 0; a < n; ++a) {
            var r;
            var n;
            var a;
            t[a].apply(this, r);
          }
        }
      };
      t.dispose = function () {
        this.listeners = {};
      };
      t.pipe = function (e) {
        this.on("data", function (t) {
          e.push(t);
        });
      };
      return e;
    }(); /*! @name pkcs7 @version 1.0.4 @license Apache-2.0 */
    let t = null;
    class s {
      constructor(e) {
        let i;
        let s;
        let r;
        t = t || function () {
          let e;
          let t;
          let i;
          let s;
          let r;
          var n;
          var a;
          var o;
          var l = [[[], [], [], [], []], [[], [], [], [], []]];
          var h = l[0];
          var d = l[1];
          var u = h[4];
          var c = d[4];
          var p = [];
          var m = [];
          for (e = 0; e < 256; e++) m[(p[e] = e << 1 ^ 283 * (e >> 7)) ^ e] = e;
          for (t = i = 0; !u[t]; t ^= n || 1, i = m[i] || 1) for (o = (o = i ^ i << 1 ^ i << 2 ^ i << 3 ^ i << 4) >> 8 ^ 255 & o ^ 99, r = 0x1010101 * p[a = p[n = p[c[u[t] = o] = t]]] ^ 65537 * a ^ 257 * n ^ 0x1010100 * t, s = 257 * p[o] ^ 0x1010100 * o, e = 0; e < 4; e++) {
            h[e][t] = s = s << 24 ^ s >>> 8;
            d[e][o] = r = r << 24 ^ r >>> 8;
          }
          for (e = 0; e < 5; e++) {
            h[e] = h[e].slice(0);
            d[e] = d[e].slice(0);
          }
          return l;
        }();
        this._tables = [[t[0][0].slice(), t[0][1].slice(), t[0][2].slice(), t[0][3].slice(), t[0][4].slice()], [t[1][0].slice(), t[1][1].slice(), t[1][2].slice(), t[1][3].slice(), t[1][4].slice()]];
        var n = this._tables[0][4];
        var a = this._tables[1];
        var o = e.length;
        let l = 1;
        if (4 !== o && 6 !== o && 8 !== o) throw Error("Invalid aes key size");
        var h = e.slice(0);
        var d = [];
        for (this._key = [h, d], i = o; i < 4 * o + 28; i++) {
          r = h[i - 1];
          (i % o == 0 || 8 === o && i % o == 4) && (r = n[r >>> 24] << 24 ^ n[r >> 16 & 255] << 16 ^ n[r >> 8 & 255] << 8 ^ n[255 & r], i % o == 0) && (r = r << 8 ^ r >>> 24 ^ l << 24, l = l << 1 ^ 283 * (l >> 7));
          h[i] = h[i - o] ^ r;
        }
        for (s = 0; i; s++, i--) {
          r = h[3 & s ? i : i - 4];
          i <= 4 || s < 4 ? d[s] = r : d[s] = a[0][n[r >>> 24]] ^ a[1][n[r >> 16 & 255]] ^ a[2][n[r >> 8 & 255]] ^ a[3][n[255 & r]];
        }
      }
      decrypt(e, t, i, s, r, n) {
        var a;
        var o;
        var l = this._key[1];
        let h = e ^ l[0];
        let d = s ^ l[1];
        let u = i ^ l[2];
        let c = t ^ l[3];
        let p;
        var m = l.length / 4 - 2;
        let g;
        let f = 4;
        var e = this._tables[1];
        var y = e[0];
        var _ = e[1];
        var v = e[2];
        var b = e[3];
        var T = e[4];
        for (g = 0; g < m; g++) {
          p = y[h >>> 24] ^ _[d >> 16 & 255] ^ v[u >> 8 & 255] ^ b[255 & c] ^ l[f];
          a = y[d >>> 24] ^ _[u >> 16 & 255] ^ v[c >> 8 & 255] ^ b[255 & h] ^ l[f + 1];
          o = y[u >>> 24] ^ _[c >> 16 & 255] ^ v[h >> 8 & 255] ^ b[255 & d] ^ l[f + 2];
          c = y[c >>> 24] ^ _[h >> 16 & 255] ^ v[d >> 8 & 255] ^ b[255 & u] ^ l[f + 3];
          f += 4;
          h = p;
          d = a;
          u = o;
        }
        for (g = 0; g < 4; g++) {
          r[(3 & -g) + n] = T[h >>> 24] << 24 ^ T[d >> 16 & 255] << 16 ^ T[u >> 8 & 255] << 8 ^ T[255 & c] ^ l[f++];
          p = h;
          h = d;
          d = u;
          u = c;
          c = p;
        }
      }
    }
    class r extends e {
      constructor() {
        super(e);
        this.jobs = [];
        this.delay = 1;
        this.timeout_ = null;
      }
      processJob_() {
        this.jobs.shift()();
        this.jobs.length ? this.timeout_ = setTimeout(this.processJob_.bind(this), this.delay) : this.timeout_ = null;
      }
      push(e) {
        this.jobs.push(e);
        this.timeout_ || (this.timeout_ = setTimeout(this.processJob_.bind(this), this.delay));
      }
    }
    function n(e) {
      return e << 24 | (65280 & e) << 8 | (0xff0000 & e) >> 8 | e >>> 24;
    }
    class a {
      constructor(e, t, i, s) {
        var o = a.STEP;
        var l = new Int32Array(e.buffer);
        let h = new Uint8Array(e.byteLength);
        let d = 0;
        for (this.asyncStream_ = new r(), this.asyncStream_.push(this.decryptChunk_(l.subarray(d, d + o), t, i, h)), d = o; d < l.length; d += o) {
          i = new Uint32Array([n(l[d - 4]), n(l[d - 3]), n(l[d - 2]), n(l[d - 1])]);
          this.asyncStream_.push(this.decryptChunk_(l.subarray(d, d + o), t, i, h));
        }
        this.asyncStream_.push(function () {
          /*! @name aes-decrypter @version 4.0.1 @license Apache-2.0 */s(null, h.subarray(0, h.byteLength - h[h.byteLength - 1]));
        });
      }
      static get STEP() {
        return 32e3;
      }
      decryptChunk_(e, t, i, r) {
        return function () {
          var a = function (e, t, i) {
            let r;
            let a;
            let o;
            let l;
            let h;
            var d;
            var u;
            var c;
            var p;
            var m = new Int32Array(e.buffer, e.byteOffset, e.byteLength >> 2);
            var g = new s(Array.prototype.slice.call(t));
            var t = new Uint8Array(e.byteLength);
            var f = new Int32Array(t.buffer);
            for (r = i[0], a = i[1], o = i[2], l = i[3], h = 0; h < m.length; h += 4) {
              d = n(m[h]);
              u = n(m[h + 1]);
              c = n(m[h + 2]);
              p = n(m[h + 3]);
              g.decrypt(d, u, c, p, f, h);
              f[h] = n(f[h] ^ r);
              f[h + 1] = n(f[h + 1] ^ a);
              f[h + 2] = n(f[h + 2] ^ o);
              f[h + 3] = n(f[h + 3] ^ l);
              r = d;
              a = u;
              o = c;
              l = p;
            }
            return t;
          }(e, t, i);
          r.set(a, e.byteOffset);
        };
      }
    }
    var o = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== require.g ? require.g : "undefined" != typeof self ? self : {};
    var o = "undefined" != typeof window ? window : void 0 !== o ? o : "undefined" != typeof self ? self : {};
    var o = o.BigInt || Number;
    o("0x1");
    o("0x100");
    o("0x10000");
    o("0x1000000");
    o("0x100000000");
    o("0x10000000000");
    o("0x1000000000000");
    o("0x100000000000000");
    o("0x10000000000000000");
    255 !== (o = new Uint8Array((o = new Uint16Array([65484])).buffer, o.byteOffset, o.byteLength))[0] && o[0];
    self.onmessage = function (e) {
      let t = e.data;
      var e = new Uint8Array(t.encrypted.bytes, t.encrypted.byteOffset, t.encrypted.byteLength);
      new a(e, new Uint32Array(t.key.bytes, t.key.byteOffset, t.key.byteLength / 4), new Uint32Array(t.iv.bytes, t.iv.byteOffset, t.iv.byteLength / 4), function (e, i) {
        self.postMessage(function (e) {
          let t = {};
          Object.keys(e).forEach(i => {
            var s = e[i];
            ("function" === ArrayBuffer.isView ? ArrayBuffer.isView(s) : s && s.buffer instanceof ArrayBuffer) ? t[i] = {
              bytes: s.buffer,
              byteOffset: s.byteOffset,
              byteLength: s.byteLength
            } : t[i] = s;
          });
          return t;
        }({
          source: t.source,
          decrypted: i
        }), [i.buffer]);
      });
    };
  })));
  let l0 = (e, t) => {
    e.abort();
    e.pause();
    t && t.activePlaylistLoader && (t.activePlaylistLoader.pause(), t.activePlaylistLoader = null);
  };
  let l1 = (e, t) => {
    (t.activePlaylistLoader = e).load();
  };
  let l2 = {
    AUDIO: (e, t) => () => {
      var {
        mediaTypes: {
          [e]: e
        },
        excludePlaylist
      } = t;
      var r = e.activeTrack();
      var n = e.activeGroup();
      var n = (n.filter(e => e.$$default)[0] || n[0]).id;
      var a = e.tracks[n];
      if (r === a) excludePlaylist({
        error: {
          message: "Problem encountered loading the default audio track."
        }
      }); else {
        for (let e in s7.log.warn("Problem encountered loading the alternate audio track.Switching back to default."), e.tracks) e.tracks[e].enabled = e.tracks[e] === a;
        e.onTrackChanged();
      }
    },
    SUBTITLES: (e, t) => () => {
      var {
        [e]: e
      } = t.mediaTypes;
      s7.log.warn("Problem encountered loading the subtitle track.Disabling subtitle track.");
      var s = e.activeTrack();
      s && (s.mode = "disabled");
      e.onTrackChanged();
    }
  };
  let l4 = {
    AUDIO: (e, t, i) => {
      if (!t) return;
      let {
        tech,
        requestOptions,
        segmentLoaders: {
          [e]: _e
        }
      } = i;
      t.on("loadedmetadata", () => {
        var e = t.media();
        _e.playlist(e, requestOptions);
        (!tech.paused() || e.endList && "none" !== tech.preload()) && _e.load();
      });
      t.on("loadedplaylist", () => {
        _e.playlist(t.media(), requestOptions);
        tech.paused() || _e.load();
      });
      t.on("error", l2[e](e, i));
    },
    SUBTITLES: (e, t, i) => {
      let {
        tech,
        requestOptions,
        segmentLoaders: {
          [e]: _e2
        },
        mediaTypes: {
          [e]: _e3
        }
      } = i;
      t.on("loadedmetadata", () => {
        var e = t.media();
        _e2.playlist(e, requestOptions);
        _e2.track(_e3.activeTrack());
        (!tech.paused() || e.endList && "none" !== tech.preload()) && _e2.load();
      });
      t.on("loadedplaylist", () => {
        _e2.playlist(t.media(), requestOptions);
        tech.paused() || _e2.load();
      });
      t.on("error", l2[e](e, i));
    }
  };
  let l8 = {
    AUDIO: (e, t) => {
      var i;
      var {
        vhs,
        sourceType,
        segmentLoaders: {
          [e]: _e4
        },
        requestOptions,
        main: {
          mediaGroups
        },
        mediaTypes: {
          [e]: {
            groups,
            tracks,
            logger_
          }
        },
        mainPlaylistLoader
      } = t;
      var c = oo(mainPlaylistLoader.main);
      for (let n in mediaGroups[e] && 0 !== Object.keys(mediaGroups[e]).length || (mediaGroups[e] = {
        main: {
          default: {
            default: !0
          }
        }
      }, c && (mediaGroups[e].main.$$default.playlists = mainPlaylistLoader.main.playlists)), mediaGroups[e]) for (let p in groups[n] || (groups[n] = []), mediaGroups[e][n]) {
        let m = mediaGroups[e][n][p];
        let g;
        g = c ? (logger_(`AUDIO group '${n}' label '${p}' is a main playlist`), m.isMainPlaylist = !0, null) : "vhs-json" === sourceType && m.playlists ? new oS(m.playlists[0], vhs, requestOptions) : m.resolvedUri ? new oS(m.resolvedUri, vhs, requestOptions) : m.playlists && "dash" === sourceType ? new o$(m.playlists[0], vhs, requestOptions, mainPlaylistLoader) : null;
        m = aH({
          id: p,
          playlistLoader: g
        }, m);
        l4[e](e, m.playlistLoader, t);
        groups[n].push(m);
        void 0 === tracks[p] && (i = new s7.AudioTrack({
          id: p,
          kind: (e => {
            let t = e.$$default ? "main" : "alternative";
            return e.characteristics && 0 <= e.characteristics.indexOf("public.accessibility.describes-video") ? "main-desc" : t;
          })(m),
          enabled: !1,
          language: m.language,
          default: m.$$default,
          label: p
        }), tracks[p] = i);
      }
      _e4.on("error", l2[e](e, t));
    },
    SUBTITLES: (e, t) => {
      var i;
      var {
        tech,
        vhs,
        sourceType,
        segmentLoaders: {
          [e]: _e5
        },
        requestOptions,
        main: {
          mediaGroups
        },
        mediaTypes: {
          [e]: {
            groups,
            tracks
          }
        },
        mainPlaylistLoader
      } = t;
      for (let a in mediaGroups[e]) for (let c in groups[a] || (groups[a] = []), mediaGroups[e][a]) if (vhs.options_.useForcedSubtitles || !mediaGroups[e][a][c].forced) {
        let p = mediaGroups[e][a][c];
        let m;
        if ("hls" === sourceType) m = new oS(p.resolvedUri, vhs, requestOptions); else if ("dash" === sourceType) {
          if (!p.playlists.filter(e => e.excludeUntil !== 1 / 0).length) return;
          m = new o$(p.playlists[0], vhs, requestOptions, mainPlaylistLoader);
        } else "vhs-json" === sourceType && (m = new oS(p.playlists ? p.playlists[0] : p.resolvedUri, vhs, requestOptions));
        p = aH({
          id: c,
          playlistLoader: m
        }, p);
        l4[e](e, p.playlistLoader, t);
        groups[a].push(p);
        void 0 === tracks[c] && (i = tech.addRemoteTextTrack({
          id: c,
          kind: "subtitles",
          default: p.$$default && p.autoselect,
          language: p.language,
          label: c
        }, !1).track, tracks[c] = i);
      }
      _e5.on("error", l2[e](e, t));
    },
    "CLOSED-CAPTIONS": (e, t) => {
      var {
        tech,
        main: {
          mediaGroups
        },
        mediaTypes: {
          [e]: {
            groups,
            tracks
          }
        }
      } = t;
      for (let t in mediaGroups[e]) for (let l in groups[t] || (groups[t] = []), mediaGroups[e][t]) {
        var a = mediaGroups[e][t][l];
        if (/^(?:CC|SERVICE)/.test(a.instreamId)) {
          var o = tech.options_.vhs && tech.options_.vhs.captionServices || {};
          let e = {
            label: l,
            language: a.language,
            instreamId: a.instreamId,
            default: a.$$default && a.autoselect
          };
          void 0 === (e = o[e.instreamId] ? aH(e, o[e.instreamId]) : e).$$default && delete e.$$default;
          groups[t].push(aH({
            id: l
          }, a));
          void 0 === tracks[l] && (o = tech.addRemoteTextTrack({
            id: e.instreamId,
            kind: "captions",
            default: e.$$default,
            language: e.language,
            label: e.label
          }, !1).track, tracks[l] = o);
        }
      }
    }
  };
  let l5 = (e, t) => {
    for (let i = 0; i < e.length; i++) if (oa(t, e[i]) || e[i].playlists && l5(e[i].playlists, t)) return !0;
    return !1;
  };
  let l3 = {
    AUDIO: (e, t) => () => {
      var {
        [e]: {
          tracks
        }
      } = t.mediaTypes;
      for (let e in tracks) if (tracks[e].enabled) return tracks[e];
      return null;
    },
    SUBTITLES: (e, t) => () => {
      var {
        [e]: {
          tracks
        }
      } = t.mediaTypes;
      for (let e in tracks) if ("showing" === tracks[e].mode || "hidden" === tracks[e].mode) return tracks[e];
      return null;
    }
  };
  let l6 = e => {
    ["AUDIO", "SUBTITLES", "CLOSED-CAPTIONS"].forEach(t => {
      l8[t](t, e);
    });
    let {
      mediaTypes,
      mainPlaylistLoader,
      tech,
      vhs,
      segmentLoaders: {
        AUDIO,
        main
      }
    } = e;
    ["AUDIO", "SUBTITLES"].forEach(i => {
      var s;
      var r;
      mediaTypes[i].activeGroup = t => {
        var {
          mainPlaylistLoader: _mainPlaylistLoader,
          mediaTypes: {
            [i]: {
              groups
            }
          }
        } = e;
        var n = _mainPlaylistLoader.media();
        if (!n) return null;
        let a = null;
        n.attributes[i] && (a = groups[n.attributes[i]]);
        var o = Object.keys(groups);
        if (!a) {
          if ("AUDIO" === i && 1 < o.length && oo(e.main)) for (let e = 0; e < o.length; e++) {
            var l = groups[o[e]];
            if (l5(l, n)) {
              a = l;
              break;
            }
          } else groups.main ? a = groups.main : 1 === o.length && (a = groups[o[0]]);
        }
        return void 0 === t ? a : null !== t && a && a.filter(e => e.id === t.id)[0] || null;
      };
      mediaTypes[i].activeTrack = l3[i](i, e);
      mediaTypes[i].onGroupChanged = () => {
        var {
          segmentLoaders: {
            [i]: i,
            main: _main
          },
          mediaTypes: {
            [i]: _i
          }
        } = e;
        var n = _i.activeTrack();
        var a = _i.getActiveGroup();
        var o = _i.activePlaylistLoader;
        var l = _i.lastGroup_;
        a && l && a.id === l.id || (_i.lastGroup_ = a, _i.lastTrack_ = n, l0(i, _i), a && !a.isMainPlaylist && (a.playlistLoader ? (i.resyncLoader(), l1(a.playlistLoader, _i)) : o && _main.resetEverything()));
      };
      mediaTypes[i].onGroupChanging = () => {
        var {
          segmentLoaders: {
            [i]: i
          },
          mediaTypes: {
            [i]: _i2
          }
        } = e;
        _i2.lastGroup_ = null;
        i.abort();
        i.pause();
      };
      mediaTypes[i].onTrackChanged = () => {
        var t;
        var s;
        var {
          mainPlaylistLoader: _mainPlaylistLoader2,
          segmentLoaders: {
            [i]: i,
            main: _main2
          },
          mediaTypes: {
            [i]: _i3
          }
        } = e;
        var l = _i3.activeTrack();
        var h = _i3.getActiveGroup();
        var d = _i3.activePlaylistLoader;
        var u = _i3.lastTrack_;
        if ((!u || !l || u.id !== l.id) && (_i3.lastGroup_ = h, _i3.lastTrack_ = l, l0(i, _i3), h)) {
          if (h.isMainPlaylist) return l && u && l.id !== u.id && (s = (t = e.vhs.playlistController_).selectPlaylist(), t.media() !== s) ? (_i3.logger_(`track change. Switching main audio from ${u.id} to ` + l.id), _mainPlaylistLoader2.pause(), _main2.resetEverything(), void t.fastQualityChange_(s)) : void 0;
          if ("AUDIO" === i) {
            if (!h.playlistLoader) {
              _main2.setAudio(!0);
              return void _main2.resetEverything();
            }
            i.setAudio(!0);
            _main2.setAudio(!1);
          }
          d === h.playlistLoader || (i.track && i.track(l), i.resetEverything());
          l1(h.playlistLoader, _i3);
        }
      };
      mediaTypes[i].getActiveGroup = ([s, r] = [i, e.mediaTypes], () => {
        var e = r[s].activeTrack();
        return e ? r[s].activeGroup(e) : null;
      });
    });
    var o = mediaTypes.AUDIO.activeGroup();
    o && (o = (o.filter(e => e.$$default)[0] || o[0]).id, mediaTypes.AUDIO.tracks[o].enabled = !0, mediaTypes.AUDIO.onGroupChanged(), mediaTypes.AUDIO.onTrackChanged(), (mediaTypes.AUDIO.getActiveGroup().playlistLoader ? (main.setAudio(!1), AUDIO) : main).setAudio(!0));
    mainPlaylistLoader.on("mediachange", () => {
      ["AUDIO", "SUBTITLES"].forEach(e => mediaTypes[e].onGroupChanged());
    });
    mainPlaylistLoader.on("mediachanging", () => {
      ["AUDIO", "SUBTITLES"].forEach(e => mediaTypes[e].onGroupChanging());
    });
    let l = () => {
      mediaTypes.AUDIO.onTrackChanged();
      tech.trigger({
        type: "usage",
        name: "vhs-audio-change"
      });
    };
    for (let e in tech.audioTracks().addEventListener("change", l), tech.remoteTextTracks().addEventListener("change", mediaTypes.SUBTITLES.onTrackChanged), vhs.on("dispose", () => {
      tech.audioTracks().removeEventListener("change", l);
      tech.remoteTextTracks().removeEventListener("change", mediaTypes.SUBTITLES.onTrackChanged);
    }), tech.clearTracks("audio"), mediaTypes.AUDIO.tracks) tech.audioTracks().addTrack(mediaTypes.AUDIO.tracks[e]);
  };
  class l7 {
    constructor() {
      this.priority_ = [];
      this.pathwayClones_ = new Map();
    }
    set version(e) {
      1 === e && (this.version_ = e);
    }
    set ttl(e) {
      this.ttl_ = e || 300;
    }
    set reloadUri(e) {
      e && (this.reloadUri_ = s9(this.reloadUri_, e));
    }
    set priority(e) {
      e && e.length && (this.priority_ = e);
    }
    set pathwayClones(e) {
      e && e.length && (this.pathwayClones_ = new Map(e.map(e => [e.ID, e])));
    }
    get version() {
      return this.version_;
    }
    get ttl() {
      return this.ttl_;
    }
    get reloadUri() {
      return this.reloadUri_;
    }
    get priority() {
      return this.priority_;
    }
    get pathwayClones() {
      return this.pathwayClones_;
    }
  }
  class l9 extends s7.EventTarget {
    constructor(e, t) {
      super();
      this.currentPathway = null;
      this.defaultPathway = null;
      this.queryBeforeStart = !1;
      this.availablePathways_ = new Set();
      this.steeringManifest = new l7();
      this.proxyServerUrl_ = null;
      this.manifestType_ = null;
      this.ttlTimeout_ = null;
      this.request_ = null;
      this.currentPathwayClones = new Map();
      this.nextPathwayClones = new Map();
      this.excludedSteeringManifestURLs = new Set();
      this.logger_ = aj("Content Steering");
      this.xhr_ = e;
      this.getBandwidth_ = t;
    }
    assignTagProperties(e, t) {
      this.manifestType_ = t.serverUri ? "HLS" : "DASH";
      var i = t.serverUri || t.serverURL;
      i ? i.startsWith("data:") ? this.decodeDataUriManifest_(i.substring(i.indexOf(",") + 1)) : (this.steeringManifest.reloadUri = s9(e, i), this.defaultPathway = t.pathwayId || t.defaultServiceLocation, this.queryBeforeStart = t.queryBeforeStart, this.proxyServerUrl_ = t.proxyServerURL, this.defaultPathway && !this.queryBeforeStart && this.trigger("content-steering")) : (this.logger_(`steering manifest URL is ${i}, cannot request steering manifest.`), this.trigger("error"));
    }
    requestSteeringManifest(e) {
      var t = this.steeringManifest.reloadUri;
      if (t) {
        let i = e ? t : this.getRequestURI(t);
        i ? this.request_ = this.xhr_({
          uri: i
        }, (e, t) => {
          if (e) return 410 === t.status ? (this.logger_(`manifest request 410 ${e}.`), this.logger_(`There will be no more content steering requests to ${i} this session.`), void this.excludedSteeringManifestURLs.add(i)) : 429 === t.status ? (t = t.responseHeaders["retry-after"], this.logger_(`manifest request 429 ${e}.`), this.logger_(`content steering will retry in ${t} seconds.`), void this.startTTLTimeout_(parseInt(t, 10))) : (this.logger_(`manifest failed to load ${e}.`), void this.startTTLTimeout_());
          t = JSON.parse(this.request_.responseText);
          this.assignSteeringProperties_(t);
          this.startTTLTimeout_();
        }) : (this.logger_("No valid content steering manifest URIs. Stopping content steering."), this.trigger("error"), this.dispose());
      }
    }
    setProxyServerUrl_(e) {
      var e = new window.URL(e);
      var t = new window.URL(this.proxyServerUrl_);
      t.searchParams.set("url", encodeURI(e.toString()));
      return this.setSteeringParams_(t.toString());
    }
    decodeDataUriManifest_(e) {
      e = JSON.parse(window.atob(e));
      this.assignSteeringProperties_(e);
    }
    setSteeringParams_(e) {
      var t;
      var e = new window.URL(e);
      var i = this.getPathway();
      var s = this.getBandwidth_();
      i && (t = `_${this.manifestType_}_pathway`, e.searchParams.set(t, i));
      s && (t = `_${this.manifestType_}_throughput`, e.searchParams.set(t, s));
      return e.toString();
    }
    assignSteeringProperties_(e) {
      var t;
      this.steeringManifest.version = e.VERSION;
      this.steeringManifest.version ? (this.steeringManifest.ttl = e.TTL, this.steeringManifest.reloadUri = e["RELOAD-URI"], this.steeringManifest.priority = e["PATHWAY-PRIORITY"] || e["SERVICE-LOCATION-PRIORITY"], this.steeringManifest.pathwayClones = e["PATHWAY-CLONES"], this.nextPathwayClones = this.steeringManifest.pathwayClones, this.availablePathways_.size || (this.logger_("There are no available pathways for content steering. Ending content steering."), this.trigger("error"), this.dispose()), t = (e => {
        for (let t of e) if (this.availablePathways_.has(t)) return t;
        return [...this.availablePathways_][0];
      })(this.steeringManifest.priority), this.currentPathway !== t && (this.currentPathway = t, this.trigger("content-steering"))) : (this.logger_(`manifest version is ${e.VERSION}, which is not supported.`), this.trigger("error"));
    }
    getPathway() {
      return this.currentPathway || this.defaultPathway;
    }
    getRequestURI(e) {
      if (!e) return null;
      var t = e => this.excludedSteeringManifestURLs.has(e);
      if (this.proxyServerUrl_) {
        var i = this.setProxyServerUrl_(e);
        if (!t(i)) return i;
      }
      return t(i = this.setSteeringParams_(e)) ? null : i;
    }
    startTTLTimeout_(e = this.steeringManifest.ttl) {
      this.ttlTimeout_ = window.setTimeout(() => {
        this.requestSteeringManifest();
      }, 1e3 * e);
    }
    clearTTLTimeout_() {
      window.clearTimeout(this.ttlTimeout_);
      this.ttlTimeout_ = null;
    }
    abort() {
      this.request_ && this.request_.abort();
      this.request_ = null;
    }
    dispose() {
      this.off("content-steering");
      this.off("error");
      this.abort();
      this.clearTTLTimeout_();
      this.currentPathway = null;
      this.defaultPathway = null;
      this.queryBeforeStart = null;
      this.proxyServerUrl_ = null;
      this.manifestType_ = null;
      this.ttlTimeout_ = null;
      this.request_ = null;
      this.excludedSteeringManifestURLs = new Set();
      this.availablePathways_ = new Set();
      this.steeringManifest = new l7();
    }
    addAvailablePathway(e) {
      e && this.availablePathways_.add(e);
    }
    clearAvailablePathways() {
      this.availablePathways_.clear();
    }
    excludePathway(e) {
      return this.availablePathways_.$$delete(e);
    }
    didDASHTagChange(e, t) {
      return !t && this.steeringManifest.reloadUri || t && (s9(e, t.serverURL) !== this.steeringManifest.reloadUri || t.defaultServiceLocation !== this.defaultPathway || t.queryBeforeStart !== this.queryBeforeStart || t.proxyServerURL !== this.proxyServerUrl_);
    }
    getAvailablePathways() {
      return this.availablePathways_;
    }
  }
  let he = ["mediaRequests", "mediaRequestsAborted", "mediaRequestsTimedout", "mediaRequestsErrored", "mediaTransferDuration", "mediaBytesTransferred", "mediaAppends"];
  class ht extends s7.EventTarget {
    constructor(e) {
      super();
      let {
        src,
        withCredentials,
        tech,
        bandwidth,
        externVhs,
        useCueTags,
        playlistExclusionDuration,
        enableLowInitialPlaylist,
        sourceType,
        cacheEncryptionKeys,
        bufferBasedABR,
        leastPixelDiffSelector,
        captionServices
      } = e;
      if (!src) throw Error("A non-empty playlist URL or JSON manifest string is required");
      let g = e.maxPlaylistRetries;
      null != g || (g = 1 / 0);
      r = externVhs;
      this.bufferBasedABR = !!bufferBasedABR;
      this.leastPixelDiffSelector = !!leastPixelDiffSelector;
      this.withCredentials = withCredentials;
      this.tech_ = tech;
      this.vhs_ = tech.vhs;
      this.sourceType_ = sourceType;
      this.useCueTags_ = useCueTags;
      this.playlistExclusionDuration = playlistExclusionDuration;
      this.maxPlaylistRetries = g;
      this.enableLowInitialPlaylist = enableLowInitialPlaylist;
      this.useCueTags_ && (this.cueTagsTrack_ = this.tech_.addTextTrack("metadata", "ad-cues"), this.cueTagsTrack_.inBandMetadataTrackDispatchType = "");
      this.requestOptions_ = {
        withCredentials,
        maxPlaylistRetries: g,
        timeout: null
      };
      this.on("error", this.pauseLoading);
      this.mediaTypes_ = (() => {
        let e = {};
        ["AUDIO", "SUBTITLES", "CLOSED-CAPTIONS"].forEach(t => {
          e[t] = {
            groups: {},
            tracks: {},
            activePlaylistLoader: null,
            activeGroup: lR,
            activeTrack: lR,
            getActiveGroup: lR,
            onGroupChanged: lR,
            onTrackChanged: lR,
            lastTrack_: null,
            logger_: aj(`MediaGroups[${t}]`)
          };
        });
        return e;
      })();
      this.mediaSource = new window.MediaSource();
      this.handleDurationChange_ = this.handleDurationChange_.bind(this);
      this.handleSourceOpen_ = this.handleSourceOpen_.bind(this);
      this.handleSourceEnded_ = this.handleSourceEnded_.bind(this);
      this.mediaSource.addEventListener("durationchange", this.handleDurationChange_);
      this.mediaSource.addEventListener("sourceopen", this.handleSourceOpen_);
      this.mediaSource.addEventListener("sourceended", this.handleSourceEnded_);
      this.seekable_ = aV();
      this.hasPlayed_ = !1;
      this.syncController_ = new lQ(e);
      this.segmentMetadataTrack_ = tech.addRemoteTextTrack({
        kind: "metadata",
        label: "segment-metadata"
      }, !1).track;
      this.decrypter_ = new lZ();
      this.sourceUpdater_ = new lz(this.mediaSource);
      this.inbandTextTracks_ = {};
      this.timelineChangeController_ = new lJ();
      this.keyStatusMap_ = new Map();
      var f = {
        vhs: this.vhs_,
        parse708captions: e.parse708captions,
        useDtsForTimestampOffset: e.useDtsForTimestampOffset,
        captionServices,
        mediaSource: this.mediaSource,
        currentTime: this.tech_.currentTime.bind(this.tech_),
        seekable: () => this.seekable(),
        seeking: () => this.tech_.seeking(),
        duration: () => this.duration(),
        hasPlayed: () => this.hasPlayed_,
        goalBufferLength: () => this.goalBufferLength(),
        bandwidth,
        syncController: this.syncController_,
        decrypter: this.decrypter_,
        sourceType: this.sourceType_,
        inbandTextTracks: this.inbandTextTracks_,
        cacheEncryptionKeys,
        sourceUpdater: this.sourceUpdater_,
        timelineChangeController: this.timelineChangeController_,
        exactManifestTimings: e.exactManifestTimings,
        addMetadataToTextTrack: this.addMetadataToTextTrack.bind(this)
      };
      this.mainPlaylistLoader_ = "dash" === this.sourceType_ ? new o$(src, this.vhs_, aH(this.requestOptions_, {
        addMetadataToTextTrack: this.addMetadataToTextTrack.bind(this)
      })) : new oS(src, this.vhs_, aH(this.requestOptions_, {
        addDateRangesToTextTrack: this.addDateRangesToTextTrack_.bind(this)
      }));
      this.setupMainPlaylistLoaderListeners_();
      this.mainSegmentLoader_ = new lN(aH(f, {
        segmentMetadataTrack: this.segmentMetadataTrack_,
        loaderType: "main"
      }), e);
      this.audioSegmentLoader_ = new lN(aH(f, {
        loaderType: "audio"
      }), e);
      this.subtitleSegmentLoader_ = new lK(aH(f, {
        loaderType: "vtt",
        featuresNativeTextTracks: this.tech_.featuresNativeTextTracks,
        loadVttJs: () => new Promise((e, t) => {
          function i() {
            tech.off("vttjserror", r);
            e();
          }
          function r() {
            tech.off("vttjsloaded", i);
            t();
          }
          tech.one("vttjsloaded", i);
          tech.one("vttjserror", r);
          tech.addWebVttScript_();
        })
      }), e);
      this.contentSteeringController_ = new l9(this.vhs_.xhr, () => this.mainSegmentLoader_.bandwidth);
      this.setupSegmentLoaderListeners_();
      this.bufferBasedABR && (this.mainPlaylistLoader_.one("loadedplaylist", () => this.startABRTimer_()), this.tech_.on("pause", () => this.stopABRTimer_()), this.tech_.on("play", () => this.startABRTimer_()));
      he.forEach(e => {
        this[e + "_"] = function (e) {
          return this.audioSegmentLoader_[e] + this.mainSegmentLoader_[e];
        }.bind(this, e);
      });
      this.logger_ = aj("pc");
      this.triggeredFmp4Usage = !1;
      "none" === this.tech_.preload() ? (this.loadOnPlay_ = () => {
        this.loadOnPlay_ = null;
        this.mainPlaylistLoader_.load();
      }, this.tech_.one("play", this.loadOnPlay_)) : this.mainPlaylistLoader_.load();
      this.timeToLoadedData__ = -1;
      this.mainAppendsToLoadedData__ = -1;
      this.audioAppendsToLoadedData__ = -1;
      var f = "none" === this.tech_.preload() ? "play" : "loadstart";
      this.tech_.one(f, () => {
        let e = Date.now();
        this.tech_.one("loadeddata", () => {
          this.timeToLoadedData__ = Date.now() - e;
          this.mainAppendsToLoadedData__ = this.mainSegmentLoader_.mediaAppends;
          this.audioAppendsToLoadedData__ = this.audioSegmentLoader_.mediaAppends;
        });
      });
    }
    mainAppendsToLoadedData_() {
      return this.mainAppendsToLoadedData__;
    }
    audioAppendsToLoadedData_() {
      return this.audioAppendsToLoadedData__;
    }
    appendsToLoadedData_() {
      var e = this.mainAppendsToLoadedData_();
      var t = this.audioAppendsToLoadedData_();
      return -1 === e || -1 === t ? -1 : e + t;
    }
    timeToLoadedData_() {
      return this.timeToLoadedData__;
    }
    checkABR_(e = "abr") {
      var t = this.selectPlaylist();
      t && this.shouldSwitchToMedia_(t) && this.switchMedia_(t, e);
    }
    switchMedia_(e, t, i) {
      var s = this.media();
      var s = s && (s.id || s.uri);
      var r = e && (e.id || e.uri);
      s && s !== r && (this.logger_(`switch media ${s} -> ${r} from ` + t), this.tech_.trigger({
        type: "usage",
        name: "vhs-rendition-change-" + t
      }));
      this.mainPlaylistLoader_.media(e, i);
    }
    switchMediaForDASHContentSteering_() {
      ["AUDIO", "SUBTITLES", "CLOSED-CAPTIONS"].forEach(e => {
        var t = this.mediaTypes_[e];
        var t = t ? t.activeGroup() : null;
        let i = this.contentSteeringController_.getPathway();
        t && i && (t = (t.length ? t[0] : t).playlists.filter(e => e.attributes.serviceLocation === i)).length && this.mediaTypes_[e].activePlaylistLoader.media(t[0]);
      });
    }
    startABRTimer_() {
      this.stopABRTimer_();
      this.abrTimer_ = window.setInterval(() => this.checkABR_(), 250);
    }
    stopABRTimer_() {
      this.tech_.scrubbing && this.tech_.scrubbing() || (window.clearInterval(this.abrTimer_), this.abrTimer_ = null);
    }
    getAudioTrackPlaylists_() {
      let e;
      var t = this.main();
      var i = t && t.playlists || [];
      if (!t || !t.mediaGroups || !t.mediaGroups.AUDIO) return i;
      var s = t.mediaGroups.AUDIO;
      var r = Object.keys(s);
      if (Object.keys(this.mediaTypes_.AUDIO.groups).length) e = this.mediaTypes_.AUDIO.activeTrack(); else {
        var n = s.main || r.length && s[r[0]];
        for (let t in n) if (n[t].$$default) {
          e = {
            label: t
          };
          break;
        }
      }
      if (!e) return i;
      var a = [];
      for (let i in s) if (s[i][e.label]) {
        var o = s[i][e.label];
        if (o.playlists && o.playlists.length) a.push.apply(a, o.playlists); else if (o.uri) a.push(o); else if (t.playlists.length) for (let e = 0; e < t.playlists.length; e++) {
          var l = t.playlists[e];
          l.attributes && l.attributes.AUDIO && l.attributes.AUDIO === i && a.push(l);
        }
      }
      return a.length ? a : i;
    }
    setupMainPlaylistLoaderListeners_() {
      this.mainPlaylistLoader_.on("loadedmetadata", () => {
        var e = this.mainPlaylistLoader_.media();
        var t = 1.5 * e.targetDuration * 1e3;
        on(this.mainPlaylistLoader_.main, this.mainPlaylistLoader_.media()) ? this.requestOptions_.timeout = 0 : this.requestOptions_.timeout = t;
        e.endList && "none" !== this.tech_.preload() && (this.mainSegmentLoader_.playlist(e, this.requestOptions_), this.mainSegmentLoader_.load());
        l6({
          sourceType: this.sourceType_,
          segmentLoaders: {
            AUDIO: this.audioSegmentLoader_,
            SUBTITLES: this.subtitleSegmentLoader_,
            main: this.mainSegmentLoader_
          },
          tech: this.tech_,
          requestOptions: this.requestOptions_,
          mainPlaylistLoader: this.mainPlaylistLoader_,
          vhs: this.vhs_,
          main: this.main(),
          mediaTypes: this.mediaTypes_,
          excludePlaylist: this.excludePlaylist.bind(this)
        });
        this.triggerPresenceUsage_(this.main(), e);
        this.setupFirstPlay();
        !this.mediaTypes_.AUDIO.activePlaylistLoader || this.mediaTypes_.AUDIO.activePlaylistLoader.media() ? this.trigger("selectedinitialmedia") : this.mediaTypes_.AUDIO.activePlaylistLoader.one("loadedmetadata", () => {
          this.trigger("selectedinitialmedia");
        });
      });
      this.mainPlaylistLoader_.on("loadedplaylist", () => {
        this.loadOnPlay_ && this.tech_.off("play", this.loadOnPlay_);
        let e = this.mainPlaylistLoader_.media();
        if (!e) {
          let t;
          if (this.attachContentSteeringListeners_(), this.initContentSteeringController_(), this.excludeUnsupportedVariants_(), !(t = (t = this.enableLowInitialPlaylist ? this.selectInitialPlaylist() : t) || this.selectPlaylist()) || !this.shouldSwitchToMedia_(t) || (this.initialMedia_ = t, this.switchMedia_(this.initialMedia_, "initial"), !("vhs-json" === this.sourceType_ && this.initialMedia_.segments))) return;
          e = this.initialMedia_;
        }
        this.handleUpdatedMediaPlaylist(e);
      });
      this.mainPlaylistLoader_.on("error", () => {
        var e = this.mainPlaylistLoader_.error;
        this.excludePlaylist({
          playlistToExclude: e.playlist,
          error: e
        });
      });
      this.mainPlaylistLoader_.on("mediachanging", () => {
        this.mainSegmentLoader_.abort();
        this.mainSegmentLoader_.pause();
      });
      this.mainPlaylistLoader_.on("mediachange", () => {
        var e = this.mainPlaylistLoader_.media();
        var t = 1.5 * e.targetDuration * 1e3;
        on(this.mainPlaylistLoader_.main, this.mainPlaylistLoader_.media()) ? this.requestOptions_.timeout = 0 : this.requestOptions_.timeout = t;
        "dash" === this.sourceType_ && this.mainPlaylistLoader_.load();
        this.mainSegmentLoader_.pause();
        this.mainSegmentLoader_.playlist(e, this.requestOptions_);
        this.waitingForFastQualityPlaylistReceived_ ? this.runFastQualitySwitch_() : this.mainSegmentLoader_.load();
        this.tech_.trigger({
          type: "mediachange",
          bubbles: !0
        });
      });
      this.mainPlaylistLoader_.on("playlistunchanged", () => {
        var e = this.mainPlaylistLoader_.media();
        "playlist-unchanged" !== e.lastExcludeReason_ && this.stuckAtPlaylistEnd_(e) && (this.excludePlaylist({
          error: {
            message: "Playlist no longer updating.",
            reason: "playlist-unchanged"
          }
        }), this.tech_.trigger("playliststuck"));
      });
      this.mainPlaylistLoader_.on("renditiondisabled", () => {
        this.tech_.trigger({
          type: "usage",
          name: "vhs-rendition-disabled"
        });
      });
      this.mainPlaylistLoader_.on("renditionenabled", () => {
        this.tech_.trigger({
          type: "usage",
          name: "vhs-rendition-enabled"
        });
      });
    }
    handleUpdatedMediaPlaylist(e) {
      this.useCueTags_ && this.updateAdCues_(e);
      this.mainSegmentLoader_.pause();
      this.mainSegmentLoader_.playlist(e, this.requestOptions_);
      this.waitingForFastQualityPlaylistReceived_ && this.runFastQualitySwitch_();
      this.updateDuration(!e.endList);
      this.tech_.paused() || (this.mainSegmentLoader_.load(), this.audioSegmentLoader_ && this.audioSegmentLoader_.load());
    }
    triggerPresenceUsage_(e, t) {
      var i = e.mediaGroups || {};
      let s = !0;
      for (let t in e = Object.keys(i.AUDIO), i.AUDIO) for (let e in i.AUDIO[t]) i.AUDIO[t][e].uri || (s = !1);
      s && this.tech_.trigger({
        type: "usage",
        name: "vhs-demuxed"
      });
      Object.keys(i.SUBTITLES).length && this.tech_.trigger({
        type: "usage",
        name: "vhs-webvtt"
      });
      r.Playlist.isAes(t) && this.tech_.trigger({
        type: "usage",
        name: "vhs-aes"
      });
      e.length && 1 < Object.keys(i.AUDIO[e[0]]).length && this.tech_.trigger({
        type: "usage",
        name: "vhs-alternate-audio"
      });
      this.useCueTags_ && this.tech_.trigger({
        type: "usage",
        name: "vhs-playlist-cue-tags"
      });
    }
    shouldSwitchToMedia_(e) {
      var t = this.mainPlaylistLoader_.media() || this.mainPlaylistLoader_.pendingMedia_;
      var i = this.tech_.currentTime();
      var s = this.bufferLowWaterLine();
      var r = this.bufferHighWaterLine();
      var {
        currentPlaylist,
        buffered,
        currentTime,
        nextPlaylist,
        bufferLowWaterLine,
        bufferHighWaterLine,
        duration,
        bufferBasedABR,
        log
      } = {
        buffered: this.tech_.buffered(),
        currentTime: currentPlaylist,
        currentPlaylist: buffered,
        nextPlaylist: currentTime,
        bufferLowWaterLine: nextPlaylist,
        bufferHighWaterLine: bufferLowWaterLine,
        duration: this.duration(),
        bufferBasedABR: this.bufferBasedABR,
        log: this.logger_
      };
      if (nextPlaylist) {
        var h = `allowing switch ${currentPlaylist && currentPlaylist.id || "null"} -> ` + nextPlaylist.id;
        if (!currentPlaylist) {
          log(h + " as current playlist is not set");
          return !0;
        }
        if (nextPlaylist.id !== currentPlaylist.id) {
          var d = !!a$(buffered, currentTime).length;
          if (!currentPlaylist.endList) return d || "number" != typeof currentPlaylist.partTargetDuration ? (log(h + " as current playlist is live"), !0) : (log(`not ${h} as current playlist is live llhls, but currentTime isn't in buffered.`), !1);
          if (d = aG(buffered, currentTime), duration < (t = bufferBasedABR ? oz.EXPERIMENTAL_MAX_BUFFER_LOW_WATER_LINE : oz.MAX_BUFFER_LOW_WATER_LINE)) {
            log(h + ` as duration < max low water line (${duration} < ${buffered})`);
            return !0;
          }
          if (e = nextPlaylist.attributes.BANDWIDTH, a = currentPlaylist.attributes.BANDWIDTH, currentTime < duration && (!bufferBasedABR || d < bufferHighWaterLine)) {
            let t = h + ` as next bandwidth < current bandwidth (${currentTime} < ${duration})`;
            bufferBasedABR && (t += ` and forwardBuffer < bufferHighWaterLine (${d} < ${bufferHighWaterLine})`);
            log(t);
            return !0;
          }
          if ((!bufferBasedABR || duration < currentTime) && bufferLowWaterLine <= d) {
            let t = h + ` as forwardBuffer >= bufferLowWaterLine (${d} >= ${bufferLowWaterLine})`;
            bufferBasedABR && (t += ` and next bandwidth > current bandwidth (${currentTime} > ${duration})`);
            log(t);
            return !0;
          }
          log(`not ${h} as no switching criteria met`);
        }
      } else s7.log.warn("We received no playlist to switch to. Please check your stream.");
      return !1;
    }
    setupSegmentLoaderListeners_() {
      this.mainSegmentLoader_.on("bandwidthupdate", () => {
        this.checkABR_("bandwidthupdate");
        this.tech_.trigger("bandwidthupdate");
      });
      this.mainSegmentLoader_.on("timeout", () => {
        this.bufferBasedABR && this.mainSegmentLoader_.load();
      });
      this.bufferBasedABR || this.mainSegmentLoader_.on("progress", () => {
        this.trigger("progress");
      });
      this.mainSegmentLoader_.on("error", () => {
        var e = this.mainSegmentLoader_.error();
        this.excludePlaylist({
          playlistToExclude: e.playlist,
          error: e
        });
      });
      this.mainSegmentLoader_.on("appenderror", () => {
        this.error = this.mainSegmentLoader_.error_;
        this.trigger("error");
      });
      this.mainSegmentLoader_.on("syncinfoupdate", () => {
        this.onSyncInfoUpdate_();
      });
      this.mainSegmentLoader_.on("timestampoffset", () => {
        this.tech_.trigger({
          type: "usage",
          name: "vhs-timestamp-offset"
        });
      });
      this.audioSegmentLoader_.on("syncinfoupdate", () => {
        this.onSyncInfoUpdate_();
      });
      this.audioSegmentLoader_.on("appenderror", () => {
        this.error = this.audioSegmentLoader_.error_;
        this.trigger("error");
      });
      this.mainSegmentLoader_.on("ended", () => {
        this.logger_("main segment loader ended");
        this.onEndOfStream();
      });
      this.mainSegmentLoader_.on("earlyabort", e => {
        this.bufferBasedABR || (this.delegateLoaders_("all", ["abort"]), this.excludePlaylist({
          error: {
            message: "Aborted early because there isn't enough bandwidth to complete the request without rebuffering."
          },
          playlistExclusionDuration: 10
        }));
      });
      var e = () => {
        if (!this.sourceUpdater_.hasCreatedSourceBuffers()) return this.tryToCreateSourceBuffers_();
        var e = this.getCodecsOrExclude_();
        e && this.sourceUpdater_.addOrChangeSourceBuffers(e);
      };
      this.mainSegmentLoader_.on("trackinfo", e);
      this.audioSegmentLoader_.on("trackinfo", e);
      this.mainSegmentLoader_.on("fmp4", () => {
        this.triggeredFmp4Usage || (this.tech_.trigger({
          type: "usage",
          name: "vhs-fmp4"
        }), this.triggeredFmp4Usage = !0);
      });
      this.audioSegmentLoader_.on("fmp4", () => {
        this.triggeredFmp4Usage || (this.tech_.trigger({
          type: "usage",
          name: "vhs-fmp4"
        }), this.triggeredFmp4Usage = !0);
      });
      this.audioSegmentLoader_.on("ended", () => {
        this.logger_("audioSegmentLoader ended");
        this.onEndOfStream();
      });
    }
    mediaSecondsLoaded_() {
      return Math.max(this.audioSegmentLoader_.mediaSecondsLoaded + this.mainSegmentLoader_.mediaSecondsLoaded);
    }
    load() {
      this.mainSegmentLoader_.load();
      this.mediaTypes_.AUDIO.activePlaylistLoader && this.audioSegmentLoader_.load();
      this.mediaTypes_.SUBTITLES.activePlaylistLoader && this.subtitleSegmentLoader_.load();
    }
    fastQualityChange_(e = this.selectPlaylist()) {
      e && e === this.mainPlaylistLoader_.media() ? this.logger_("skipping fastQualityChange because new media is same as old") : (this.switchMedia_(e, "fast-quality"), this.waitingForFastQualityPlaylistReceived_ = !0);
    }
    runFastQualitySwitch_() {
      this.waitingForFastQualityPlaylistReceived_ = !1;
      this.mainSegmentLoader_.pause();
      this.mainSegmentLoader_.resetEverything(() => {
        this.tech_.setCurrentTime(this.tech_.currentTime());
      });
    }
    play() {
      var e;
      if (!this.setupFirstPlay()) {
        this.tech_.ended() && this.tech_.setCurrentTime(0);
        this.hasPlayed_ && this.load();
        e = this.tech_.seekable();
        return this.tech_.duration() === 1 / 0 && this.tech_.currentTime() < e.start(0) ? this.tech_.setCurrentTime(e.end(e.length - 1)) : void 0;
      }
    }
    setupFirstPlay() {
      var e = this.mainPlaylistLoader_.media();
      if (!e || this.tech_.paused() || this.hasPlayed_) return !1;
      if (!e.endList || e.start) {
        var t = this.seekable();
        if (!t.length) return !1;
        var i = t.end(0);
        let s = i;
        e.start && (s = (e = e.start.timeOffset) < 0 ? Math.max(i + e, t.start(0)) : Math.min(i, e));
        this.trigger("firstplay");
        this.tech_.setCurrentTime(s);
      }
      this.hasPlayed_ = !0;
      this.load();
      return !0;
    }
    handleSourceOpen_() {
      var e;
      this.tryToCreateSourceBuffers_();
      this.tech_.autoplay() && void 0 !== (e = this.tech_.play()) && "function" == typeof e.then && e.then(null, e => { });
      this.trigger("sourceopen");
    }
    handleSourceEnded_() {
      var e;
      var t;
      this.inbandTextTracks_.metadataTrack_ && (e = this.inbandTextTracks_.metadataTrack_.cues) && e.length && (t = this.duration(), e[e.length - 1].endTime = isNaN(t) || Math.abs(t) === 1 / 0 ? Number.MAX_VALUE : t);
    }
    handleDurationChange_() {
      this.tech_.trigger("durationchange");
    }
    onEndOfStream() {
      var e;
      let t = this.mainSegmentLoader_.ended_;
      this.mediaTypes_.AUDIO.activePlaylistLoader && (t = ((e = this.mainSegmentLoader_.getCurrentMediaInfo_()) && !e.hasVideo || t) && this.audioSegmentLoader_.ended_);
      t && (this.stopABRTimer_(), this.sourceUpdater_.endOfStream());
    }
    stuckAtPlaylistEnd_(e) {
      var t;
      var i;
      return !!this.seekable().length && null !== (t = this.syncController_.getExpiredTime(e, this.duration())) && (e = r.Playlist.playlistEnd(e, t), t = this.tech_.currentTime(), (i = this.tech_.buffered()).length ? (i = i.end(i.length - 1)) - t <= aQ && e - i <= aQ : e - t <= aQ);
    }
    excludePlaylist({
      playlistToExclude: e = this.mainPlaylistLoader_.media(),
      error: t = {},
      playlistExclusionDuration: i
    }) {
      if (e = e || this.mainPlaylistLoader_.media(), i = i || t.playlistExclusionDuration || this.playlistExclusionDuration, e) {
        let a;
        e.playlistErrors_++;
        var s = this.mainPlaylistLoader_.main.playlists;
        var r = s.filter(oi);
        var r = 1 === r.length && r[0] === e;
        if (1 === s.length && i !== 1 / 0) {
          s7.log.warn(`Problem encountered with playlist ${e.id}. Trying again since it is the only playlist.`);
          this.tech_.trigger("retryplaylist");
          return this.mainPlaylistLoader_.load(r);
        }
        if (r) {
          if (this.main().contentSteering) {
            let t = this.pathwayAttribute_(e);
            var n = 1e3 * this.contentSteeringController_.steeringManifest.ttl;
            this.contentSteeringController_.excludePathway(t);
            this.excludeThenChangePathway_();
            return void setTimeout(() => {
              this.contentSteeringController_.addAvailablePathway(t);
            }, n);
          }
          let t = !1;
          s.forEach(i => {
            var s;
            i !== e && void 0 !== (s = i.excludeUntil) && s !== 1 / 0 && (t = !0, delete i.excludeUntil);
          });
          t && (s7.log.warn("Removing other playlists from the exclusion list because the last rendition is about to be excluded."), this.tech_.trigger("retryplaylist"));
        }
        if (a = e.playlistErrors_ > this.maxPlaylistRetries ? 1 / 0 : Date.now() + 1e3 * i, e.excludeUntil = a, t.reason && (e.lastExcludeReason_ = t.reason), this.tech_.trigger("excludeplaylist"), this.tech_.trigger({
          type: "usage",
          name: "vhs-rendition-excluded"
        }), n = this.selectPlaylist()) {
          s = t.internal ? this.logger_ : s7.log.warn;
          i = t.message ? " " + t.message : "";
          s(`${t.internal ? "Internal problem" : "Problem"} encountered with playlist ${e.id}.` + i + ` Switching to playlist ${n.id}.`);
          n.attributes.AUDIO !== e.attributes.AUDIO && this.delegateLoaders_("audio", ["abort", "pause"]);
          n.attributes.SUBTITLES !== e.attributes.SUBTITLES && this.delegateLoaders_("subtitle", ["abort", "pause"]);
          this.delegateLoaders_("main", ["abort", "pause"]);
          s = n.targetDuration / 2 * 1e3 || 5e3;
          i = "number" == typeof n.lastRequest && Date.now() - n.lastRequest <= s;
          return this.switchMedia_(n, "exclude", r || i);
        }
        this.error = "Playback cannot continue. No available working or supported playlists.";
        this.trigger("error");
      } else {
        this.error = t;
        "open" !== this.mediaSource.readyState ? this.trigger("error") : this.sourceUpdater_.endOfStream("network");
      }
    }
    pauseLoading() {
      this.delegateLoaders_("all", ["abort", "pause"]);
      this.stopABRTimer_();
    }
    delegateLoaders_(e, t) {
      let i = [];
      var s = "all" === e;
      (s || "main" === e) && i.push(this.mainPlaylistLoader_);
      var r = [];
      (s || "audio" === e) && r.push("AUDIO");
      (s || "subtitle" === e) && (r.push("CLOSED-CAPTIONS"), r.push("SUBTITLES"));
      r.forEach(e => {
        (e = this.mediaTypes_[e] && this.mediaTypes_[e].activePlaylistLoader) && i.push(e);
      });
      ["main", "audio", "subtitle"].forEach(t => {
        var s = this[t + "SegmentLoader_"];
        s && (e === t || "all" === e) && i.push(s);
      });
      i.forEach(e => t.forEach(t => {
        "function" == typeof e[t] && e[t]();
      }));
    }
    setCurrentTime(e) {
      var t = a$(this.tech_.buffered(), e);
      return this.mainPlaylistLoader_ && this.mainPlaylistLoader_.media() && this.mainPlaylistLoader_.media().segments ? t && t.length ? e : (this.mainSegmentLoader_.pause(), this.mainSegmentLoader_.resetEverything(), this.mediaTypes_.AUDIO.activePlaylistLoader && (this.audioSegmentLoader_.pause(), this.audioSegmentLoader_.resetEverything()), this.mediaTypes_.SUBTITLES.activePlaylistLoader && (this.subtitleSegmentLoader_.pause(), this.subtitleSegmentLoader_.resetEverything()), void this.load()) : 0;
    }
    duration() {
      var e;
      return this.mainPlaylistLoader_ && (e = this.mainPlaylistLoader_.media()) ? e.endList ? this.mediaSource ? this.mediaSource.duration : r.Playlist.duration(e) : 1 / 0 : 0;
    }
    seekable() {
      return this.seekable_;
    }
    onSyncInfoUpdate_() {
      let e;
      if (this.mainPlaylistLoader_) {
        var t = this.mainPlaylistLoader_.media();
        if (t) {
          var i = this.syncController_.getExpiredTime(t, this.duration());
          if (null !== i) {
            var s = this.mainPlaylistLoader_.main;
            var n = r.Playlist.seekable(t, i, r.Playlist.liveEdgeDelay(s, t));
            if (0 !== n.length) {
              let a;
              let o;
              if (this.mediaTypes_.AUDIO.activePlaylistLoader && (t = this.mediaTypes_.AUDIO.activePlaylistLoader.media(), null === (i = this.syncController_.getExpiredTime(t, this.duration())) || 0 === (e = r.Playlist.seekable(t, i, r.Playlist.liveEdgeDelay(s, t))).length)) return;
              this.seekable_ && this.seekable_.length && (a = this.seekable_.end(0), o = this.seekable_.start(0));
              !e || e.start(0) > n.end(0) || n.start(0) > e.end(0) ? this.seekable_ = n : this.seekable_ = aV([[(e.start(0) > n.start(0) ? e : n).start(0), (e.end(0) < n.end(0) ? e : n).end(0)]]);
              this.seekable_ && this.seekable_.length && this.seekable_.end(0) === a && this.seekable_.start(0) === o || (this.logger_(`seekable updated [${aZ(this.seekable_)}]`), this.tech_.trigger("seekablechanged"));
            }
          }
        }
      }
    }
    updateDuration(e) {
      if (this.updateDuration_ && (this.mediaSource.removeEventListener("sourceopen", this.updateDuration_), this.updateDuration_ = null), "open" !== this.mediaSource.readyState) {
        this.updateDuration_ = this.updateDuration.bind(this, e);
        this.mediaSource.addEventListener("sourceopen", this.updateDuration_);
      } else {
        if (e) return (e = this.seekable()).length ? void ((isNaN(this.mediaSource.duration) || this.mediaSource.duration < e.end(e.length - 1)) && this.sourceUpdater_.setDuration(e.end(e.length - 1))) : void 0;
        e = this.tech_.buffered();
        let t = r.Playlist.duration(this.mainPlaylistLoader_.media());
        0 < e.length && (t = Math.max(t, e.end(e.length - 1)));
        this.mediaSource.duration !== t && this.sourceUpdater_.setDuration(t);
      }
    }
    dispose() {
      this.trigger("dispose");
      this.decrypter_.terminate();
      this.mainPlaylistLoader_.dispose();
      this.mainSegmentLoader_.dispose();
      this.contentSteeringController_.dispose();
      this.keyStatusMap_.clear();
      this.loadOnPlay_ && this.tech_.off("play", this.loadOnPlay_);
      ["AUDIO", "SUBTITLES"].forEach(e => {
        var t = this.mediaTypes_[e].groups;
        for (let e in t) t[e].forEach(e => {
          e.playlistLoader && e.playlistLoader.dispose();
        });
      });
      this.audioSegmentLoader_.dispose();
      this.subtitleSegmentLoader_.dispose();
      this.sourceUpdater_.dispose();
      this.timelineChangeController_.dispose();
      this.stopABRTimer_();
      this.updateDuration_ && this.mediaSource.removeEventListener("sourceopen", this.updateDuration_);
      this.mediaSource.removeEventListener("durationchange", this.handleDurationChange_);
      this.mediaSource.removeEventListener("sourceopen", this.handleSourceOpen_);
      this.mediaSource.removeEventListener("sourceended", this.handleSourceEnded_);
      this.off();
    }
    main() {
      return this.mainPlaylistLoader_.main;
    }
    media() {
      return this.mainPlaylistLoader_.media() || this.initialMedia_;
    }
    areMediaTypesKnown_() {
      var e = !!this.mediaTypes_.AUDIO.activePlaylistLoader;
      var t = !!this.mainSegmentLoader_.getCurrentMediaInfo_();
      var e = !e || !!this.audioSegmentLoader_.getCurrentMediaInfo_();
      return t && e;
    }
    getCodecsOrExclude_() {
      let e = {
        main: this.mainSegmentLoader_.getCurrentMediaInfo_() || {},
        audio: this.audioSegmentLoader_.getCurrentMediaInfo_() || {}
      };
      let t = this.mainSegmentLoader_.getPendingSegmentPlaylist() || this.media();
      e.video = e.main;
      var i = le(this.main(), t);
      let s = {};
      var r = !!this.mediaTypes_.AUDIO.activePlaylistLoader;
      if (e.main.hasVideo && (s.video = i.video || e.main.videoCodec || "avc1.4d400d"), e.main.isMuxed && (s.video += "," + (i.audio || e.main.audioCodec || rb)), (e.main.hasAudio && !e.main.isMuxed || e.audio.hasAudio || r) && (s.audio = i.audio || e.main.audioCodec || e.audio.audioCodec || rb, e.audio.isFmp4 = (e.main.hasAudio && !e.main.isMuxed ? e.main : e.audio).isFmp4), s.audio || s.video) {
        let n;
        let a = {};
        if (["video", "audio"].forEach(function (t) {
          var i;
          s.hasOwnProperty(t) && !((i = e[t].isFmp4) ? rd : ru)(s[t]) && (a[i = e[t].isFmp4 ? "browser" : "muxer"] = a[i] || [], a[i].push(s[t]), "audio" === t && (n = i));
        }), r && n && t.attributes.AUDIO) {
          let e = t.attributes.AUDIO;
          this.main().playlists.forEach(i => {
            (i.attributes && i.attributes.AUDIO) === e && i !== t && (i.excludeUntil = 1 / 0);
          });
          this.logger_(`excluding audio group ${e} as ${n} does not support codec(s): "${s.audio}"`);
        }
        if (!Object.keys(a).length) {
          if (this.sourceUpdater_.hasCreatedSourceBuffers() && !this.sourceUpdater_.canChangeType()) {
            let e = [];
            if (["video", "audio"].forEach(t => {
              var i = (r_(this.sourceUpdater_.codecs[t] || "")[0] || {}).type;
              var r = (r_(s[t] || "")[0] || {}).type;
              i && r && i.toLowerCase() !== r.toLowerCase() && e.push(`"${this.sourceUpdater_.codecs[t]}" -> "${s[t]}"`);
            }), e.length) return void this.excludePlaylist({
              playlistToExclude: t,
              error: {
                message: `Codec switching not supported: ${e.join(", ")}.`,
                internal: !0
              },
              playlistExclusionDuration: 1 / 0
            });
          }
          return s;
        }
        i = Object.keys(a).reduce((e, t) => (e && (e += ", "), e += `${t} does not support codec(s): "${a[t].join(",")}"`), "") + ".";
        this.excludePlaylist({
          playlistToExclude: t,
          error: {
            internal: !0,
            message: i
          },
          playlistExclusionDuration: 1 / 0
        });
      } else this.excludePlaylist({
        playlistToExclude: t,
        error: {
          message: "Could not determine codecs for playlist."
        },
        playlistExclusionDuration: 1 / 0
      });
    }
    tryToCreateSourceBuffers_() {
      var e;
      "open" !== this.mediaSource.readyState || this.sourceUpdater_.hasCreatedSourceBuffers() || this.areMediaTypesKnown_() && (e = this.getCodecsOrExclude_()) && (this.sourceUpdater_.createSourceBuffers(e), e = [e.video, e.audio].filter(Boolean).join(","), this.excludeIncompatibleVariants_(e));
    }
    excludeUnsupportedVariants_() {
      let e = this.main().playlists;
      let t = [];
      Object.keys(e).forEach(i => {
        var s;
        var r;
        var i = e[i];
        -1 === t.indexOf(i.id) && (t.push(i.id), r = [], !(s = le(this.main, i)).audio || ru(s.audio) || rd(s.audio) || r.push("audio codec " + s.audio), !s.video || ru(s.video) || rd(s.video) || r.push("video codec " + s.video), s.text && "stpp.ttml.im1t" === s.text && r.push("text codec " + s.text), r.length) && (i.excludeUntil = 1 / 0, this.logger_(`excluding ${i.id} for unsupported: ` + r.join(", ")));
      });
    }
    excludeIncompatibleVariants_(e) {
      let t = [];
      let i = this.main().playlists;
      let s = o9(e = ly(r_(e)));
      let r = e.video && r_(e.video)[0] || null;
      let n = e.audio && r_(e.audio)[0] || null;
      Object.keys(i).forEach(e => {
        var a;
        var o;
        var l;
        var e = i[e];
        -1 === t.indexOf(e.id) && e.excludeUntil !== 1 / 0 && (t.push(e.id), a = [], o = o9(l = le(this.mainPlaylistLoader_.main, e)), l.audio || l.video) && (o !== s && a.push(`codec count "${o}" !== "${s}"`), this.sourceUpdater_.canChangeType() || (o = l.video && r_(l.video)[0] || null, l = l.audio && r_(l.audio)[0] || null, o && r && o.type.toLowerCase() !== r.type.toLowerCase() && a.push(`video codec "${o.type}" !== "${r.type}"`), l && n && l.type.toLowerCase() !== n.type.toLowerCase() && a.push(`audio codec "${l.type}" !== "${n.type}"`)), a.length) && (e.excludeUntil = 1 / 0, this.logger_(`excluding ${e.id}: ` + a.join(" && ")));
      });
    }
    updateAdCues_(e) {
      let t = 0;
      var i = this.seekable();
      i.length && (t = i.start(0));
      var [s, r, i = 0] = [e, this.cueTagsTrack_, t];
      if (s.segments) {
        let e = i;
        let t;
        for (let i = 0; i < s.segments.length; i++) {
          var n;
          var a;
          var o = s.segments[i];
          if (t = t || function (e, t) {
            var i = e.cues;
            for (let e = 0; e < i.length; e++) {
              var s = i[e];
              if (t >= s.adStartTime && t <= s.adEndTime) return s;
            }
            return null;
          }(r, e + o.duration / 2)) {
            if ("cueIn" in o) {
              t.endTime = e;
              t.adEndTime = e;
              e += o.duration;
              t = null;
              continue;
            }
            if (e < t.endTime) {
              e += o.duration;
              continue;
            }
            t.endTime += o.duration;
          } else {
            "cueOut" in o && ((t = new window.VTTCue(e, e + o.duration, o.cueOut)).adStartTime = e, t.adEndTime = e + parseFloat(o.cueOut), r.addCue(t));
            "cueOutCont" in o && ([n, a] = o.cueOutCont.split("/").map(parseFloat), (t = new window.VTTCue(e, e + o.duration, "")).adStartTime = e - n, t.adEndTime = t.adStartTime + a, r.addCue(t));
          }
          e += o.duration;
        }
      }
    }
    goalBufferLength() {
      var e = this.tech_.currentTime();
      var t = oz.GOAL_BUFFER_LENGTH;
      var i = oz.GOAL_BUFFER_LENGTH_RATE;
      var s = Math.max(t, oz.MAX_GOAL_BUFFER_LENGTH);
      return Math.min(t + e * i, s);
    }
    bufferLowWaterLine() {
      var e = this.tech_.currentTime();
      var t = oz.BUFFER_LOW_WATER_LINE;
      var i = oz.BUFFER_LOW_WATER_LINE_RATE;
      var s = Math.max(t, oz.MAX_BUFFER_LOW_WATER_LINE);
      var r = Math.max(t, oz.EXPERIMENTAL_MAX_BUFFER_LOW_WATER_LINE);
      return Math.min(t + e * i, this.bufferBasedABR ? r : s);
    }
    bufferHighWaterLine() {
      return oz.BUFFER_HIGH_WATER_LINE;
    }
    addDateRangesToTextTrack_(e) {
      lx(this.inbandTextTracks_, "com.apple.streaming", this.tech_);
      {
        var {
          inbandTextTracks,
          dateRanges
        } = {
          inbandTextTracks: this.inbandTextTracks_,
          dateRanges: inbandTextTracks
        };
        let i = inbandTextTracks.metadataTrack_;
        if (i) {
          let e = window.WebKitDataCue || window.VTTCue;
          dateRanges.forEach(t => {
            for (let r of Object.keys(t)) {
              var s;
              lk.has(r) || ((s = new e(t.startTime, t.endTime, "")).id = t.id, s.type = "com.apple.quicktime.HLS", s.value = {
                key: lC[r],
                data: t[r]
              }, "scte35Out" !== r && "scte35In" !== r || (s.value.data = new Uint8Array(s.value.data.match(/[\da-f]{2}/gi)).buffer), i.addCue(s));
            }
            t.processDateRange();
          });
        }
      }
    }
    addMetadataToTextTrack(e, t, i) {
      var s = this.sourceUpdater_.videoBuffer ? this.sourceUpdater_.videoTimestampOffset() : this.sourceUpdater_.audioTimestampOffset();
      lx(this.inbandTextTracks_, e, this.tech_);
      lE({
        inbandTextTracks: this.inbandTextTracks_,
        metadataArray: t,
        timestampOffset: s,
        videoDuration: i
      });
    }
    pathwayAttribute_(e) {
      return e.attributes["PATHWAY-ID"] || e.attributes.serviceLocation;
    }
    initContentSteeringController_() {
      var e = this.main();
      if (e.contentSteering) {
        for (let t of e.playlists) this.contentSteeringController_.addAvailablePathway(this.pathwayAttribute_(t));
        this.contentSteeringController_.assignTagProperties(e.uri, e.contentSteering);
        this.contentSteeringController_.queryBeforeStart ? this.contentSteeringController_.requestSteeringManifest(!0) : this.tech_.one("canplay", () => {
          this.contentSteeringController_.requestSteeringManifest();
        });
      }
    }
    resetContentSteeringController_() {
      this.contentSteeringController_.clearAvailablePathways();
      this.contentSteeringController_.dispose();
      this.initContentSteeringController_();
    }
    attachContentSteeringListeners_() {
      this.contentSteeringController_.on("content-steering", this.excludeThenChangePathway_.bind(this));
      "dash" === this.sourceType_ && this.mainPlaylistLoader_.on("loadedplaylist", () => {
        let e = this.main();
        (this.contentSteeringController_.didDASHTagChange(e.uri, e.contentSteering) || (() => {
          var t = this.contentSteeringController_.getAvailablePathways();
          var i = [];
          for (let r of e.playlists) {
            var s = r.attributes.serviceLocation;
            if (s && (i.push(s), !t.has(s))) return !0;
          }
          return !(i.length || !t.size);
        })()) && this.resetContentSteeringController_();
      });
    }
    excludeThenChangePathway_() {
      let e = this.contentSteeringController_.getPathway();
      if (e) {
        this.handlePathwayClones_();
        let t = this.main().playlists;
        let i = new Set();
        let s = !1;
        Object.keys(t).forEach(r => {
          var r = t[r];
          var n = this.pathwayAttribute_(r);
          var n = n && e !== n;
          r.excludeUntil !== 1 / 0 || "content-steering" !== r.lastExcludeReason_ || n || (delete r.excludeUntil, delete r.lastExcludeReason_, s = !0);
          var a = !r.excludeUntil && r.excludeUntil !== 1 / 0;
          !i.has(r.id) && n && a && (i.add(r.id), r.excludeUntil = 1 / 0, r.lastExcludeReason_ = "content-steering", this.logger_(`excluding ${r.id} for ` + r.lastExcludeReason_));
        });
        "DASH" === this.contentSteeringController_.manifestType_ && Object.keys(this.mediaTypes_).forEach(t => {
          var t = this.mediaTypes_[t];
          t.activePlaylistLoader && (t = t.activePlaylistLoader.media_) && t.attributes.serviceLocation !== e && (s = !0);
        });
        s && this.changeSegmentPathway_();
      }
    }
    handlePathwayClones_() {
      var e = this.main().playlists;
      var t = this.contentSteeringController_.currentPathwayClones;
      var i = this.contentSteeringController_.nextPathwayClones;
      if (t && t.size || i && i.size) {
        for (var [s, r] of t.entries()) i.get(s) || (this.mainPlaylistLoader_.updateOrDeleteClone(r), this.contentSteeringController_.excludePathway(s));
        for (let [s, r] of i.entries()) {
          var n = t.get(s);
          n ? this.equalPathwayClones_(n, r) || (this.mainPlaylistLoader_.updateOrDeleteClone(r, !0), this.contentSteeringController_.addAvailablePathway(s)) : (e.filter(e => e.attributes["PATHWAY-ID"] === r["BASE-ID"]).forEach(e => {
            this.mainPlaylistLoader_.addClonePathway(r, e);
          }), this.contentSteeringController_.addAvailablePathway(s));
        }
        this.contentSteeringController_.currentPathwayClones = new Map(JSON.parse(JSON.stringify([...i])));
      }
    }
    equalPathwayClones_(e, t) {
      if (e["BASE-ID"] !== t["BASE-ID"] || e.ID !== t.ID || e["URI-REPLACEMENT"].HOST !== t["URI-REPLACEMENT"].HOST) return !1;
      var i = e["URI-REPLACEMENT"].PARAMS;
      var s = t["URI-REPLACEMENT"].PARAMS;
      for (let e in i) if (i[e] !== s[e]) return !1;
      for (let e in s) if (i[e] !== s[e]) return !1;
      return !0;
    }
    changeSegmentPathway_() {
      var e = this.selectPlaylist();
      this.pauseLoading();
      "DASH" === this.contentSteeringController_.manifestType_ && this.switchMediaForDASHContentSteering_();
      this.switchMedia_(e, "content-steering");
    }
    excludeNonUsablePlaylistsByKeyId_() {
      if (this.mainPlaylistLoader_ && this.mainPlaylistLoader_.main) {
        let e = 0;
        let t = "non-usable";
        this.mainPlaylistLoader_.main.playlists.forEach(i => {
          var s = this.mainPlaylistLoader_.getKeyIdSet(i);
          s && s.size && s.forEach(s => {
            var r = "usable";
            var r = this.keyStatusMap_.has(s) && this.keyStatusMap_.get(s) === r;
            var n = i.lastExcludeReason_ === t && i.excludeUntil === 1 / 0;
            r ? n && (delete i.excludeUntil, delete i.lastExcludeReason_, this.logger_(`enabling playlist ${i.id} because key ID ${s} is usable`)) : (i.excludeUntil !== 1 / 0 && i.lastExcludeReason_ !== t && (i.excludeUntil = 1 / 0, i.lastExcludeReason_ = t, this.logger_(`excluding playlist ${i.id} because the key ID ${s} doesn't exist in the keyStatusMap or is not usable`)), e++);
          });
        });
        e >= this.mainPlaylistLoader_.main.playlists.length && this.mainPlaylistLoader_.main.playlists.forEach(e => {
          var i = e && e.attributes && e.attributes.RESOLUTION && e.attributes.RESOLUTION.height < 720;
          var s = e.excludeUntil === 1 / 0 && e.lastExcludeReason_ === t;
          i && s && (delete e.excludeUntil, s7.log.warn(`enabling non-HD playlist ${e.id} because all playlists were excluded due to ${t} key IDs`));
        });
      }
    }
    addKeyStatus_(e, t) {
      e = ("string" == typeof e ? e : Array.from(new Uint8Array(e)).map(e => e.toString(16).padStart(2, "0")).join("")).slice(0, 32).toLowerCase();
      this.logger_(`KeyStatus '${t}' with key ID ${e} added to the keyStatusMap`);
      this.keyStatusMap_.set(e, t);
    }
    updatePlaylistByKeyStatus(e, t) {
      this.addKeyStatus_(e, t);
      this.waitingForFastQualityPlaylistReceived_ || this.excludeNonUsableThenChangePlaylist_();
      this.mainPlaylistLoader_.off("loadedplaylist", this.excludeNonUsableThenChangePlaylist_.bind(this));
      this.mainPlaylistLoader_.on("loadedplaylist", this.excludeNonUsableThenChangePlaylist_.bind(this));
    }
    excludeNonUsableThenChangePlaylist_() {
      this.excludeNonUsablePlaylistsByKeyId_();
      this.fastQualityChange_();
    }
  }
  class hi {
    constructor(e, t, i) {
      var s;
      var r;
      var n;
      var a = e.playlistController_;
      var o = a.fastQualityChange_.bind(a);
      t.attributes && (s = t.attributes.RESOLUTION, this.width = s && s.width, this.height = s && s.height, this.bandwidth = t.attributes.BANDWIDTH, this.frameRate = t.attributes["FRAME-RATE"]);
      this.codecs = le(a.main(), t);
      this.playlist = t;
      this.id = i;
      this.enabled = (r = e.playlists, n = t.id, e => {
        var t = r.main.playlists[n];
        var i = ot(t);
        var s = oi(t);
        return void 0 === e ? s : (e ? delete t.disabled : t.disabled = !0, e === s || i || (o(), e ? r.trigger("renditionenabled") : r.trigger("renditiondisabled")), e);
      });
    }
  }
  let hs = ["seeking", "seeked", "pause", "playing", "error"];
  class hr {
    constructor(e) {
      this.playlistController_ = e.playlistController;
      this.tech_ = e.tech;
      this.seekable = e.seekable;
      this.allowSeeksWithinUnsafeLiveWindow = e.allowSeeksWithinUnsafeLiveWindow;
      this.liveRangeSafeTimeDelta = e.liveRangeSafeTimeDelta;
      this.media = e.media;
      this.consecutiveUpdates = 0;
      this.lastRecordedTime = null;
      this.checkCurrentTimeTimeout_ = null;
      this.logger_ = aj("PlaybackWatcher");
      this.logger_("initialize");
      let t = () => this.monitorCurrentTime_();
      let i = () => this.monitorCurrentTime_();
      let s = () => this.techWaiting_();
      let r = () => this.resetTimeUpdate_();
      let n = this.playlistController_;
      let a = ["main", "subtitle", "audio"];
      let o = {};
      a.forEach(e => {
        o[e] = {
          reset: () => this.resetSegmentDownloads_(e),
          updateend: () => this.checkSegmentDownloads_(e)
        };
        n[e + "SegmentLoader_"].on("appendsdone", o[e].updateend);
        n[e + "SegmentLoader_"].on("playlistupdate", o[e].reset);
        this.tech_.on(["seeked", "seeking"], o[e].reset);
      });
      let l = e => {
        ["main", "audio"].forEach(t => {
          n[t + "SegmentLoader_"][e]("appended", this.seekingAppendCheck_);
        });
      };
      this.seekingAppendCheck_ = () => {
        this.fixesBadSeeks_() && (this.consecutiveUpdates = 0, this.lastRecordedTime = this.tech_.currentTime(), l("off"));
      };
      this.clearSeekingAppendCheck_ = () => l("off");
      this.watchForBadSeeking_ = () => {
        this.clearSeekingAppendCheck_();
        l("on");
      };
      this.tech_.on("seeked", this.clearSeekingAppendCheck_);
      this.tech_.on("seeking", this.watchForBadSeeking_);
      this.tech_.on("waiting", s);
      this.tech_.on(hs, r);
      this.tech_.on("canplay", i);
      this.tech_.one("play", t);
      this.dispose = () => {
        this.clearSeekingAppendCheck_();
        this.logger_("dispose");
        this.tech_.off("waiting", s);
        this.tech_.off(hs, r);
        this.tech_.off("canplay", i);
        this.tech_.off("play", t);
        this.tech_.off("seeking", this.watchForBadSeeking_);
        this.tech_.off("seeked", this.clearSeekingAppendCheck_);
        a.forEach(e => {
          n[e + "SegmentLoader_"].off("appendsdone", o[e].updateend);
          n[e + "SegmentLoader_"].off("playlistupdate", o[e].reset);
          this.tech_.off(["seeked", "seeking"], o[e].reset);
        });
        this.checkCurrentTimeTimeout_ && window.clearTimeout(this.checkCurrentTimeTimeout_);
        this.resetTimeUpdate_();
      };
    }
    monitorCurrentTime_() {
      this.checkCurrentTime_();
      this.checkCurrentTimeTimeout_ && window.clearTimeout(this.checkCurrentTimeTimeout_);
      this.checkCurrentTimeTimeout_ = window.setTimeout(this.monitorCurrentTime_.bind(this), 250);
    }
    resetSegmentDownloads_(e) {
      var t = this.playlistController_[e + "SegmentLoader_"];
      0 < this[e + "StalledDownloads_"] && this.logger_(`resetting possible stalled download count for ${e} loader`);
      this[e + "StalledDownloads_"] = 0;
      this[e + "Buffered_"] = t.buffered_();
    }
    checkSegmentDownloads_(e) {
      var t = this.playlistController_;
      var i = t[e + "SegmentLoader_"];
      var s = i.buffered_();
      var r = function (e, t) {
        if (e !== t) {
          if (!e && t || !t && e || e.length !== t.length) return !0;
          for (let i = 0; i < e.length; i++) if (e.start(i) !== t.start(i) || e.end(i) !== t.end(i)) return !0;
        }
        return !1;
      }(this[e + "Buffered_"], s);
      this[e + "Buffered_"] = s;
      r ? this.resetSegmentDownloads_(e) : (this[e + "StalledDownloads_"]++, this.logger_(`found #${this[e + "StalledDownloads_"]} ${e} appends that did not increase buffer (possible stalled download)`, {
        playlistId: i.playlist_ && i.playlist_.id,
        buffered: a0(s)
      }), this[e + "StalledDownloads_"] < 10 || (this.logger_(e + " loader stalled download exclusion"), this.resetSegmentDownloads_(e), this.tech_.trigger({
        type: "usage",
        name: `vhs-${e}-download-exclusion`
      }), "subtitle" !== e && t.excludePlaylist({
        error: {
          message: `Excessive ${e} segment downloading detected.`
        },
        playlistExclusionDuration: 1 / 0
      })));
    }
    checkCurrentTime_() {
      var e;
      var t;
      if (!this.tech_.paused() && !this.tech_.seeking()) {
        e = this.tech_.currentTime();
        t = this.tech_.buffered();
        return this.lastRecordedTime === e && (!t.length || e + aQ >= t.end(t.length - 1)) ? this.techWaiting_() : void (5 <= this.consecutiveUpdates && e === this.lastRecordedTime ? (this.consecutiveUpdates++, this.waiting_()) : e === this.lastRecordedTime ? this.consecutiveUpdates++ : (this.consecutiveUpdates = 0, this.lastRecordedTime = e));
      }
    }
    resetTimeUpdate_() {
      this.consecutiveUpdates = 0;
    }
    fixesBadSeeks_() {
      let e;
      if (!this.tech_.seeking()) return !1;
      var t = this.seekable();
      var i = this.tech_.currentTime();
      if (this.afterSeekableWindow_(t, i, this.media(), this.allowSeeksWithinUnsafeLiveWindow) && (e = s = t.end(t.length - 1)), this.beforeSeekableWindow_(t, i) && (e = (s = t.start(0)) + (s === t.end(0) ? 0 : aQ)), void 0 !== e) this.logger_(`Trying to seek outside of seekable at time ${i} with seekable range ${aZ(t)}. Seeking to ` + e + "."); else {
        var s = this.playlistController_.sourceUpdater_;
        var t = this.tech_.buffered();
        var r = s.audioBuffer ? s.audioBuffered() : null;
        var s = s.videoBuffer ? s.videoBuffered() : null;
        var n = this.media();
        var a = n.partTargetDuration || 2 * (n.targetDuration - aY);
        var o = [r, s];
        for (let e = 0; e < o.length; e++) if (o[e] && aG(o[e], i) < a) return !1;
        if (0 === (n = az(t, i)).length) return !1;
        e = n.start(0) + aQ;
        this.logger_(`Buffered region starts (${n.start(0)})  just beyond seek point (${i}). Seeking to ${e}.`);
      }
      this.tech_.setCurrentTime(e);
      return !0;
    }
    waiting_() {
      var e;
      var t;
      this.techWaiting_() || (e = this.tech_.currentTime(), (t = a$(t = this.tech_.buffered(), e)).length && e + 3 <= t.end(0) && (this.resetTimeUpdate_(), this.tech_.setCurrentTime(e), this.logger_(`Stopped at ${e} while inside a buffered region [${t.start(0)} -> ${t.end(0)}]. Attempting to resume playback by seeking to the current time.`), this.tech_.trigger({
        type: "usage",
        name: "vhs-unknown-waiting"
      })));
    }
    techWaiting_() {
      var e;
      var t = this.seekable();
      var i = this.tech_.currentTime();
      return !!this.tech_.seeking() || (this.beforeSeekableWindow_(t, i) ? (t = t.end(t.length - 1), this.logger_(`Fell out of live window at time ${i}. Seeking to live point (seekable end) ` + t), this.resetTimeUpdate_(), this.tech_.setCurrentTime(t), this.tech_.trigger({
        type: "usage",
        name: "vhs-live-resync"
      }), !0) : (t = this.tech_.vhs.playlistController_.sourceUpdater_, e = this.tech_.buffered(), this.videoUnderflow_({
        audioBuffered: t.audioBuffered(),
        videoBuffered: t.videoBuffered(),
        currentTime: i
      }) ? (this.resetTimeUpdate_(), this.tech_.setCurrentTime(i), this.tech_.trigger({
        type: "usage",
        name: "vhs-video-underflow"
      }), !0) : 0 < (t = az(e, i)).length && (this.logger_(`Stopped at ${i} and seeking to ` + t.start(0)), this.resetTimeUpdate_(), this.skipTheGap_(i), !0)));
    }
    afterSeekableWindow_(e, t, i, s = !1) {
      if (!e.length) return !1;
      let r = e.end(e.length - 1) + aQ;
      var n = !i.endList;
      var a = "number" == typeof i.partTargetDuration;
      return t > (r = n && (a || s) ? e.end(e.length - 1) + 3 * i.targetDuration : r);
    }
    beforeSeekableWindow_(e, t) {
      return !!(e.length && 0 < e.start(0) && t < e.start(0) - this.liveRangeSafeTimeDelta);
    }
    videoUnderflow_({
      videoBuffered: e,
      audioBuffered: t,
      currentTime: i
    }) {
      if (e) {
        var s;
        var r;
        let n;
        e.length && t.length ? (s = a$(e, i - 3), r = a$(e, i), (t = a$(t, i)).length && !r.length && s.length && (n = {
          start: s.end(0),
          end: t.end(0)
        })) : az(e, i).length || (n = this.gapFromVideoUnderflow_(e, i));
        return !!n && (this.logger_(`Encountered a gap in video from ${n.start} to ${n.end}. Seeking to current time ` + i), !0);
      }
    }
    skipTheGap_(e) {
      var t = this.tech_.buffered();
      var i = this.tech_.currentTime();
      var t = az(t, i);
      this.resetTimeUpdate_();
      0 !== t.length && i === e && (this.logger_("skipTheGap_:", "currentTime:", i, "scheduled currentTime:", e, "nextRange start:", t.start(0)), this.tech_.setCurrentTime(t.start(0) + aY), this.tech_.trigger({
        type: "usage",
        name: "vhs-gap-skip"
      }));
    }
    gapFromVideoUnderflow_(e, t) {
      var i = function (e) {
        if (e.length < 2) return aV();
        var t = [];
        for (let r = 1; r < e.length; r++) {
          var i = e.end(r - 1);
          var s = e.start(r);
          t.push([i, s]);
        }
        return aV(t);
      }(e);
      for (let e = 0; e < i.length; e++) {
        var s = i.start(e);
        var r = i.end(e);
        if (t - s < 4 && 2 < t - s) return {
          start: s,
          end: r
        };
      }
      return null;
    }
  }
  let hn = {
    errorInterval: 30,
    getSource(e) {
      return e(this.tech({
        IWillNotUseThisInPlugins: !0
      }).currentSource_ || this.currentSource());
    }
  };
  let ha = function (e, t) {
    let i = 0;
    let s = 0;
    function r(t) {
      null != t && (s = e.duration() !== 1 / 0 && e.currentTime() || 0, e.one("loadedmetadata", l), e.src(t), e.trigger({
        type: "usage",
        name: "vhs-error-reload"
      }), e.play());
    }
    function n() {
      if (Date.now() - i < 1e3 * o.errorInterval) e.trigger({
        type: "usage",
        name: "vhs-error-reload-canceled"
      }); else {
        if (o.getSource && "function" == typeof o.getSource) {
          i = Date.now();
          return o.getSource.call(e, r);
        }
        s7.log.error("ERROR: reloadSourceOnError - The option getSource must be a function!");
      }
    }
    function a() {
      e.off("loadedmetadata", l);
      e.off("error", n);
      e.off("dispose", a);
    }
    let o = aH(hn, t);
    e.ready(() => {
      e.trigger({
        type: "usage",
        name: "vhs-error-reload-initialized"
      });
    });
    let l = function () {
      s && e.currentTime(s);
    };
    e.on("error", n);
    e.on("dispose", a);
    e.reloadSourceOnError = function (t) {
      a();
      ha(e, t);
    };
  };
  function ho(e, t) {
    var i = t.media();
    let s = -1;
    for (let t = 0; t < e.length; t++) if (e[t].id === i.id) {
      s = t;
      break;
    }
    e.selectedIndex_ = s;
    e.trigger({
      selectedIndex: s,
      type: "change"
    });
  }
  let hl = {
    PlaylistLoader: oS,
    Playlist: ol,
    utils: sA,
    STANDARD_PLAYLIST_SELECTOR: lS,
    INITIAL_PLAYLIST_SELECTOR: function () {
      var e = this.playlists.main.playlists.filter(ol.isEnabled);
      lb(e, (e, t) => li(e, t));
      var e = e.filter(e => !!le(this.playlists.main, e).video);
      return e[0] || null;
    },
    lastBandwidthSelector: lS,
    movingAverageBandwidthSelector: function (e) {
      let t = -1;
      let i = -1;
      if (e < 0 || 1 < e) throw Error("Moving average bandwidth decay must be between 0 and 1.");
      return function () {
        var s = this.useDevicePixelRatio && window.devicePixelRatio || 1;
        t < 0 && (t = this.systemBandwidth, i = this.systemBandwidth);
        0 < this.systemBandwidth && this.systemBandwidth !== i && (t = e * this.systemBandwidth + (1 - e) * t, i = this.systemBandwidth);
        return lT(this.playlists.main, t, parseInt(lt(this.tech_.el(), "width"), 10) * s, parseInt(lt(this.tech_.el(), "height"), 10) * s, this.limitRenditionByPlayerDimensions, this.playlistController_);
      };
    },
    comparePlaylistBandwidth: li,
    comparePlaylistResolution: function (e, t) {
      let i;
      let s;
      return (i = (i = e.attributes.RESOLUTION && e.attributes.RESOLUTION.width ? e.attributes.RESOLUTION.width : i) || window.Number.MAX_VALUE) === (s = (s = t.attributes.RESOLUTION && t.attributes.RESOLUTION.width ? t.attributes.RESOLUTION.width : s) || window.Number.MAX_VALUE) && e.attributes.BANDWIDTH && t.attributes.BANDWIDTH ? e.attributes.BANDWIDTH - t.attributes.BANDWIDTH : i - s;
    },
    xhr: oE()
  };
  Object.keys(oz).forEach(e => {
    Object.defineProperty(hl, e, {
      get: () => (s7.log.warn(`using Vhs.${e} is UNSAFE be sure you know what you are doing`), oz[e]),
      set(t) {
        s7.log.warn(`using Vhs.${e} is UNSAFE be sure you know what you are doing`);
        "number" != typeof t || t < 0 ? s7.log.warn(`value of Vhs.${e} must be greater than or equal to 0`) : oz[e] = t;
      }
    });
  });
  let hh = "videojs-vhs";
  hl.canPlaySource = function () {
    return s7.log.warn("VHS is no longer a tech. Please remove it from your player's techOrder.");
  };
  let hd = ({
    player: e,
    sourceKeySystems: t,
    audioMedia: i,
    mainPlaylists: s
  }) => {
    if (!e.eme.initializeMediaKeys) return Promise.resolve();
    var r;
    var i = i ? s.concat([i]) : s;
    s = i;
    r = Object.keys(t);
    var i = s.reduce((e, t) => {
      var i;
      t.contentProtection && Object.keys(i = r.reduce((e, i) => {
        var s = t.contentProtection[i];
        s && s.pssh && (e[i] = {
          pssh: s.pssh
        });
        return e;
      }, {})).length && e.push(i);
      return e;
    }, []);
    let n = [];
    let a = [];
    i.forEach(t => {
      a.push(new Promise((t, i) => {
        e.tech_.one("keysessioncreated", t);
      }));
      n.push(new Promise((i, s) => {
        e.eme.initializeMediaKeys({
          keySystems: t
        }, e => {
          e ? s(e) : i();
        });
      }));
    });
    return Promise.race([Promise.all(n), Promise.race(a)]);
  };
  let hu = ({
    player: e,
    sourceKeySystems: t,
    media: i,
    audioMedia: s
  }) => !(!(t = ((e, t, i) => {
    if (!e) return e;
    let s = {};
    t && t.attributes && t.attributes.CODECS && (s = ly(r_(t.attributes.CODECS)));
    i && i.attributes && i.attributes.CODECS && (s.audio = i.attributes.CODECS);
    var r = rv(s.video);
    var n = rv(s.audio);
    var a = {};
    for (let i in e) {
      a[i] = {};
      n && (a[i].audioContentType = n);
      r && (a[i].videoContentType = r);
      t.contentProtection && t.contentProtection[i] && t.contentProtection[i].pssh && (a[i].pssh = t.contentProtection[i].pssh);
      "string" == typeof e[i] && (a[i].url = e[i]);
    }
    return aH(e, a);
  })(t, i, s)) || (e.currentSource().keySystems = t) && !e.eme && (s7.log.warn("DRM encrypted source cannot be decrypted without a DRM plugin"), 1));
  let hc = () => {
    if (!window.localStorage) return null;
    var e = window.localStorage.getItem(hh);
    if (!e) return null;
    try {
      return JSON.parse(e);
    } catch (e) {
      return null;
    }
  };
  let hp = (e, t) => {
    e._requestCallbackSet || (e._requestCallbackSet = new Set());
    e._requestCallbackSet.add(t);
  };
  let hm = (e, t) => {
    e._responseCallbackSet || (e._responseCallbackSet = new Set());
    e._responseCallbackSet.add(t);
  };
  let hg = (e, t) => {
    e._requestCallbackSet && (e._requestCallbackSet.$$delete(t), e._requestCallbackSet.size || delete e._requestCallbackSet);
  };
  let hf = (e, t) => {
    e._responseCallbackSet && (e._responseCallbackSet.$$delete(t), e._responseCallbackSet.size || delete e._responseCallbackSet);
  };
  hl.supportsNativeHls = function () {
    if (!document || !document.createElement) return !1;
    let e = document.createElement("video");
    return !!s7.getTech("Html5").isSupported() && ["application/vnd.apple.mpegurl", "audio/mpegurl", "audio/x-mpegurl", "application/x-mpegurl", "video/x-mpegurl", "video/mpegurl", "application/mpegurl"].some(function (t) {
      return /maybe|probably/i.test(e.canPlayType(t));
    });
  }();
  hl.supportsNativeDash = !!(document && document.createElement && s7.getTech("Html5").isSupported()) && /maybe|probably/i.test(document.createElement("video").canPlayType("application/dash+xml"));
  hl.supportsTypeNatively = e => "hls" === e ? hl.supportsNativeHls : "dash" === e && hl.supportsNativeDash;
  hl.isSupported = function () {
    return s7.log.warn("VHS is no longer a tech. Please remove it from your player's techOrder.");
  };
  hl.xhr.onRequest = function (e) {
    hp(hl.xhr, e);
  };
  hl.xhr.onResponse = function (e) {
    hm(hl.xhr, e);
  };
  hl.xhr.offRequest = function (e) {
    hg(hl.xhr, e);
  };
  hl.xhr.offResponse = function (e) {
    hf(hl.xhr, e);
  };
  class hy extends s7.getComponent("Component") {
    constructor(e, t, i) {
      this.logger_ = aj("VhsHandler");
      this.tech_ = t;
      this.source_ = e;
      this.stats = {};
      this.ignoreNextSeekingEvent_ = !1;
      if (super(t, i.vhs), "number" == typeof i.initialBandwidth && (this.options_.bandwidth = i.initialBandwidth), t.options_ && t.options_.playerId && (i = s7.getPlayer(t.options_.playerId), this.player_ = i), this.setOptions_(), this.options_.overrideNative && t.overrideNativeAudioTracks && t.overrideNativeVideoTracks) {
        t.overrideNativeAudioTracks(!0);
        t.overrideNativeVideoTracks(!0);
      } else if (this.options_.overrideNative && (t.featuresNativeVideoTracks || t.featuresNativeAudioTracks)) throw Error("Overriding native VHS requires emulated tracks. See https://git.io/vMpjB");
      this.on(document, ["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "MSFullscreenChange"], e => {
        var t = document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement;
        t && t.contains(this.tech_.el()) ? this.playlistController_.fastQualityChange_() : this.playlistController_.checkABR_();
      });
      this.on(this.tech_, "seeking", function () {
        this.ignoreNextSeekingEvent_ ? this.ignoreNextSeekingEvent_ = !1 : this.setCurrentTime(this.tech_.currentTime());
      });
      this.on(this.tech_, "error", function () {
        this.tech_.error() && this.playlistController_ && this.playlistController_.pauseLoading();
      });
      this.on(this.tech_, "play", this.play);
    }
    setOptions_(e = {}) {
      this.options_ = aH(this.options_, e);
      this.options_.withCredentials = this.options_.withCredentials || !1;
      this.options_.limitRenditionByPlayerDimensions = !1 !== this.options_.limitRenditionByPlayerDimensions;
      this.options_.useDevicePixelRatio = this.options_.useDevicePixelRatio || !1;
      this.options_.useBandwidthFromLocalStorage = void 0 !== this.source_.useBandwidthFromLocalStorage ? this.source_.useBandwidthFromLocalStorage : this.options_.useBandwidthFromLocalStorage || !1;
      this.options_.useForcedSubtitles = this.options_.useForcedSubtitles || !1;
      this.options_.useNetworkInformationApi = this.options_.useNetworkInformationApi || !1;
      this.options_.useDtsForTimestampOffset = this.options_.useDtsForTimestampOffset || !1;
      this.options_.customTagParsers = this.options_.customTagParsers || [];
      this.options_.customTagMappers = this.options_.customTagMappers || [];
      this.options_.cacheEncryptionKeys = this.options_.cacheEncryptionKeys || !1;
      this.options_.llhls = !1 !== this.options_.llhls;
      this.options_.bufferBasedABR = this.options_.bufferBasedABR || !1;
      "number" != typeof this.options_.playlistExclusionDuration && (this.options_.playlistExclusionDuration = 60);
      "number" != typeof this.options_.bandwidth && this.options_.useBandwidthFromLocalStorage && ((e = hc()) && e.bandwidth && (this.options_.bandwidth = e.bandwidth, this.tech_.trigger({
        type: "usage",
        name: "vhs-bandwidth-from-local-storage"
      })), e) && e.throughput && (this.options_.throughput = e.throughput, this.tech_.trigger({
        type: "usage",
        name: "vhs-throughput-from-local-storage"
      }));
      "number" != typeof this.options_.bandwidth && (this.options_.bandwidth = oz.INITIAL_BANDWIDTH);
      this.options_.enableLowInitialPlaylist = this.options_.enableLowInitialPlaylist && this.options_.bandwidth === oz.INITIAL_BANDWIDTH;
      ["withCredentials", "useDevicePixelRatio", "limitRenditionByPlayerDimensions", "bandwidth", "customTagParsers", "customTagMappers", "cacheEncryptionKeys", "playlistSelector", "initialPlaylistSelector", "bufferBasedABR", "liveRangeSafeTimeDelta", "llhls", "useForcedSubtitles", "useNetworkInformationApi", "useDtsForTimestampOffset", "exactManifestTimings", "leastPixelDiffSelector"].forEach(e => {
        void 0 !== this.source_[e] && (this.options_[e] = this.source_[e]);
      });
      this.limitRenditionByPlayerDimensions = this.options_.limitRenditionByPlayerDimensions;
      this.useDevicePixelRatio = this.options_.useDevicePixelRatio;
    }
    setOptions(e = {}) {
      this.setOptions_(e);
    }
    src(e, t) {
      e && (this.setOptions_(), this.options_.src = 0 === (e = this.source_.src).toLowerCase().indexOf("data:application/vnd.videojs.vhs+json,") ? JSON.parse(e.substring(e.indexOf(",") + 1)) : e, this.options_.tech = this.tech_, this.options_.externVhs = hl, this.options_.sourceType = rc(t), this.options_.seekTo = e => {
        this.tech_.setCurrentTime(e);
      }, this.playlistController_ = new ht(this.options_), e = aH({
        liveRangeSafeTimeDelta: aQ
      }, this.options_, {
        seekable: () => this.seekable(),
        media: () => this.playlistController_.media(),
        playlistController: this.playlistController_
      }), this.playbackWatcher_ = new hr(e), this.playlistController_.on("error", () => {
        var e = s7.players[this.tech_.options_.playerId];
        let t = this.playlistController_.error;
        "object" != typeof t || t.code ? "string" == typeof t && (t = {
          message: t,
          code: 3
        }) : t.code = 3;
        e.error(t);
      }), t = this.options_.bufferBasedABR ? hl.movingAverageBandwidthSelector(.55) : hl.STANDARD_PLAYLIST_SELECTOR, this.playlistController_.selectPlaylist = (this.selectPlaylist || t).bind(this), this.playlistController_.selectInitialPlaylist = hl.INITIAL_PLAYLIST_SELECTOR.bind(this), this.playlists = this.playlistController_.mainPlaylistLoader_, this.mediaSource = this.playlistController_.mediaSource, Object.defineProperties(this, {
        selectPlaylist: {
          get() {
            return this.playlistController_.selectPlaylist;
          },
          set(e) {
            this.playlistController_.selectPlaylist = e.bind(this);
          }
        },
        throughput: {
          get() {
            return this.playlistController_.mainSegmentLoader_.throughput.rate;
          },
          set(e) {
            this.playlistController_.mainSegmentLoader_.throughput.rate = e;
            this.playlistController_.mainSegmentLoader_.throughput.count = 1;
          }
        },
        bandwidth: {
          get() {
            let e = this.playlistController_.mainSegmentLoader_.bandwidth;
            var t = window.navigator.connection || window.navigator.mozConnection || window.navigator.webkitConnection;
            this.options_.useNetworkInformationApi && t && (e = 1e7 <= (t = 1e3 * t.downlink * 1e3) && 1e7 <= e ? Math.max(e, t) : t);
            return e;
          },
          set(e) {
            this.playlistController_.mainSegmentLoader_.bandwidth = e;
            this.playlistController_.mainSegmentLoader_.throughput = {
              rate: 0,
              count: 0
            };
          }
        },
        systemBandwidth: {
          get() {
            return Math.floor(1 / (1 / (this.bandwidth || 1) + (0 < this.throughput ? 1 / this.throughput : 0)));
          },
          set() {
            s7.log.error('The "systemBandwidth" property is read-only');
          }
        }
      }), this.options_.bandwidth && (this.bandwidth = this.options_.bandwidth), this.options_.throughput && (this.throughput = this.options_.throughput), Object.defineProperties(this.stats, {
        bandwidth: {
          get: () => this.bandwidth || 0,
          enumerable: !0
        },
        mediaRequests: {
          get: () => this.playlistController_.mediaRequests_() || 0,
          enumerable: !0
        },
        mediaRequestsAborted: {
          get: () => this.playlistController_.mediaRequestsAborted_() || 0,
          enumerable: !0
        },
        mediaRequestsTimedout: {
          get: () => this.playlistController_.mediaRequestsTimedout_() || 0,
          enumerable: !0
        },
        mediaRequestsErrored: {
          get: () => this.playlistController_.mediaRequestsErrored_() || 0,
          enumerable: !0
        },
        mediaTransferDuration: {
          get: () => this.playlistController_.mediaTransferDuration_() || 0,
          enumerable: !0
        },
        mediaBytesTransferred: {
          get: () => this.playlistController_.mediaBytesTransferred_() || 0,
          enumerable: !0
        },
        mediaSecondsLoaded: {
          get: () => this.playlistController_.mediaSecondsLoaded_() || 0,
          enumerable: !0
        },
        mediaAppends: {
          get: () => this.playlistController_.mediaAppends_() || 0,
          enumerable: !0
        },
        mainAppendsToLoadedData: {
          get: () => this.playlistController_.mainAppendsToLoadedData_() || 0,
          enumerable: !0
        },
        audioAppendsToLoadedData: {
          get: () => this.playlistController_.audioAppendsToLoadedData_() || 0,
          enumerable: !0
        },
        appendsToLoadedData: {
          get: () => this.playlistController_.appendsToLoadedData_() || 0,
          enumerable: !0
        },
        timeToLoadedData: {
          get: () => this.playlistController_.timeToLoadedData_() || 0,
          enumerable: !0
        },
        buffered: {
          get: () => a0(this.tech_.buffered()),
          enumerable: !0
        },
        currentTime: {
          get: () => this.tech_.currentTime(),
          enumerable: !0
        },
        currentSource: {
          get: () => this.tech_.currentSource_,
          enumerable: !0
        },
        currentTech: {
          get: () => this.tech_.name_,
          enumerable: !0
        },
        duration: {
          get: () => this.tech_.duration(),
          enumerable: !0
        },
        main: {
          get: () => this.playlists.main,
          enumerable: !0
        },
        playerDimensions: {
          get: () => this.tech_.currentDimensions(),
          enumerable: !0
        },
        seekable: {
          get: () => a0(this.tech_.seekable()),
          enumerable: !0
        },
        timestamp: {
          get: () => Date.now(),
          enumerable: !0
        },
        videoPlaybackQuality: {
          get: () => this.tech_.getVideoPlaybackQuality(),
          enumerable: !0
        }
      }), this.tech_.one("canplay", this.playlistController_.setupFirstPlay.bind(this.playlistController_)), this.tech_.on("bandwidthupdate", () => {
        if (this.options_.useBandwidthFromLocalStorage) {
          var e = {
            bandwidth: this.bandwidth,
            throughput: Math.round(this.throughput)
          };
          if (window.localStorage) {
            var t = (t = hc()) ? aH(t, e) : e;
            try {
              window.localStorage.setItem(hh, JSON.stringify(t));
            } catch (e) {
              return;
            }
          }
        }
      }), this.playlistController_.on("selectedinitialmedia", () => {
        var e;
        (e = this).representations = () => {
          var t = e.playlistController_.main();
          var t = oo(t) ? e.playlistController_.getAudioTrackPlaylists_() : t.playlists;
          return t ? t.filter(e => !ot(e)).map((t, i) => new hi(e, t, t.id)) : [];
        };
      }), this.playlistController_.sourceUpdater_.on("createdsourcebuffers", () => {
        this.setupEme_();
      }), this.on(this.playlistController_, "progress", function () {
        this.tech_.trigger("progress");
      }), this.on(this.playlistController_, "firstplay", function () {
        this.ignoreNextSeekingEvent_ = !0;
      }), this.setupQualityLevels_(), this.tech_.el()) && (this.mediaSourceUrl_ = window.URL.createObjectURL(this.playlistController_.mediaSource), this.tech_.src(this.mediaSourceUrl_));
    }
    createKeySessions_() {
      var e = this.playlistController_.mediaTypes_.AUDIO.activePlaylistLoader;
      this.logger_("waiting for EME key session creation");
      hd({
        player: this.player_,
        sourceKeySystems: this.source_.keySystems,
        audioMedia: e && e.media(),
        mainPlaylists: this.playlists.main.playlists
      }).then(() => {
        this.logger_("created EME key session");
        this.playlistController_.sourceUpdater_.initializedEme();
      }).catch(e => {
        this.logger_("error while creating EME key session", e);
        this.player_.error({
          message: "Failed to initialize media keys for EME",
          code: 3
        });
      });
    }
    handleWaitingForKey_() {
      this.logger_("waitingforkey fired, attempting to create any new key sessions");
      this.createKeySessions_();
    }
    setupEme_() {
      var e = this.playlistController_.mediaTypes_.AUDIO.activePlaylistLoader;
      var e = hu({
        player: this.player_,
        sourceKeySystems: this.source_.keySystems,
        media: this.playlists.media(),
        audioMedia: e && e.media()
      });
      this.player_.tech_.on("keystatuschange", e => {
        this.playlistController_.updatePlaylistByKeyStatus(e.keyId, e.status);
      });
      this.handleWaitingForKey_ = this.handleWaitingForKey_.bind(this);
      this.player_.tech_.on("waitingforkey", this.handleWaitingForKey_);
      e ? this.createKeySessions_() : this.playlistController_.sourceUpdater_.initializedEme();
    }
    setupQualityLevels_() {
      var e = s7.players[this.tech_.options_.playerId];
      e && e.qualityLevels && !this.qualityLevels_ && (this.qualityLevels_ = e.qualityLevels(), this.playlistController_.on("selectedinitialmedia", () => {
        var e;
        e = this.qualityLevels_;
        this.representations().forEach(t => {
          e.addQualityLevel(t);
        });
        ho(e, this.playlists);
      }), this.playlists.on("mediachange", () => {
        ho(this.qualityLevels_, this.playlists);
      }));
    }
    static version() {
      return {
        "@videojs/http-streaming": "3.10.0",
        "mux.js": "7.0.2",
        "mpd-parser": "1.3.0",
        "m3u8-parser": "7.1.0",
        "aes-decrypter": "4.0.1"
      };
    }
    version() {
      return this.constructor.version();
    }
    canChangeType() {
      return lz.canChangeType();
    }
    play() {
      this.playlistController_.play();
    }
    setCurrentTime(e) {
      this.playlistController_.setCurrentTime(e);
    }
    duration() {
      return this.playlistController_.duration();
    }
    seekable() {
      return this.playlistController_.seekable();
    }
    dispose() {
      this.playbackWatcher_ && this.playbackWatcher_.dispose();
      this.playlistController_ && this.playlistController_.dispose();
      this.qualityLevels_ && this.qualityLevels_.dispose();
      this.tech_ && this.tech_.vhs && delete this.tech_.vhs;
      this.mediaSourceUrl_ && window.URL.revokeObjectURL && (window.URL.revokeObjectURL(this.mediaSourceUrl_), this.mediaSourceUrl_ = null);
      this.tech_ && this.tech_.off("waitingforkey", this.handleWaitingForKey_);
      super.dispose();
    }
    convertToProgramTime(e, t) {
      return oN({
        playlist: this.playlistController_.media(),
        time: e,
        callback: t
      });
    }
    seekToProgramTime(e, t, i = !0, s = 2) {
      return oR({
        programTime: e,
        playlist: this.playlistController_.media(),
        retryCount: s,
        pauseAfterSeek: i,
        seekTo: this.options_.seekTo,
        tech: this.options_.tech,
        callback: t
      });
    }
    setupXhrHooks_() {
      this.xhr.onRequest = e => {
        hp(this.xhr, e);
      };
      this.xhr.onResponse = e => {
        hm(this.xhr, e);
      };
      this.xhr.offRequest = e => {
        hg(this.xhr, e);
      };
      this.xhr.offResponse = e => {
        hf(this.xhr, e);
      };
      this.player_.trigger("xhr-hooks-ready");
    }
  }
  let h_ = {
    name: "videojs-http-streaming",
    VERSION: "3.10.0",
    canHandleSource: (e, t = {}) => (t = aH(s7.options, t), h_.canPlayType(e.type, t)),
    handleSource: (e, t, i = {}) => (i = aH(s7.options, i), t.vhs = new hy(e, t, i), t.vhs.xhr = oE(), t.vhs.setupXhrHooks_(), t.vhs.src(e.src, e.type), t.vhs),
    canPlayType: (e, t) => (e = rc(e)) && (t = h_.getOverrideNative(t), !hl.supportsTypeNatively(e) || t) ? "maybe" : "",
    getOverrideNative(e = {}) {
      var {
        vhs = {}
      } = e;
      var t = !(s7.browser.IS_ANY_SAFARI || s7.browser.IS_IOS);
      var {
        overrideNative = t
      } = e;
      return vhs;
    }
  };
  rd("avc1.4d400d,mp4a.40.2") && s7.getTech("Html5").registerSourceHandler(h_, 0);
  s7.VhsHandler = hy;
  s7.VhsSourceHandler = h_;
  s7.Vhs = hl;
  s7.use || s7.registerComponent("Vhs", hl);
  s7.options.vhs = s7.options.vhs || {};
  s7.getPlugin && s7.getPlugin("reloadSourceOnError") || s7.registerPlugin("reloadSourceOnError", function (e) {
    ha(this, e);
  });
  return s7;
};
module.exports = s(); 
