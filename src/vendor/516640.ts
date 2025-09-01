import { A2 } from "../vendor/815544";
import { sA } from "../vendor/127";
import { d0, Y9 } from "../vendor/345274";
import { b as _$$b } from "../vendor/712065";
import { K_, H5, L7, $1 } from "../vendor/798288";
import { n as _$$n, l as _$$l } from "../vendor/616758";
import { q as _$$q, l as _$$l2 } from "../vendor/476421";
import { c$ } from "../vendor/922997";
import { Ie, o as _$$o, $m, NT, yF, eT, ei, p_, jR, dT, Wd, wR, rf, wI, XS, PJ, zL, Gn, W3, $4, pB, g1, bb, X2 } from "../vendor/193284";
import { nr } from "../vendor/704264";
import { nx, OY } from "../vendor/929565";
import { t as _$$t, H as _$$H } from "../vendor/411725";
import { dm } from "../vendor/186187";
import { BB } from "../vendor/436633";
import { Kp } from "../vendor/64215";
import { DJ, wg } from "../vendor/73976";
let p = new WeakMap();
function f(e) {
  return p.has(e);
}
function h(e) {
  return p.get(e);
}
function m(e, t) {
  let n = e.tagName;
  let r = e.value;
  if (Ie(e, t)) {
    let t = e.type;
    if ("INPUT" === n && ("button" === t || "submit" === t || "reset" === t)) return r;
    if (!r || "OPTION" === n) return;
    return _$$o;
  }
  return "OPTION" === n || "SELECT" === n ? e.value : "INPUT" === n || "TEXTAREA" === n ? r : void 0;
}
let g = /url\((?:(')([^']*)'|(")([^"]*)"|([^)]*))\)/gm;
let y = /^[A-Za-z]+:|^\/\//;
let v = /^["']?data:.*,/i;
let w = /[^a-z1-6-_]/;
function S(e) {
  let t = e.toLowerCase().trim();
  return w.test(t) ? "div" : t;
}
function E(e, t) {
  return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${e}' height='${t}' style='background-color:silver'%3E%3C/svg%3E`;
}
let T = {
  FullSnapshot: 2,
  IncrementalSnapshot: 3,
  Meta: 4,
  Focus: 6,
  ViewEnd: 7,
  VisualViewport: 8,
  FrustrationRecord: 9
};
let N = {
  Document: 0,
  DocumentType: 1,
  Element: 2,
  Text: 3,
  CDATA: 4,
  DocumentFragment: 11
};
let b = {
  Mutation: 0,
  MouseMove: 1,
  MouseInteraction: 2,
  Scroll: 3,
  ViewportResize: 4,
  Input: 5,
  TouchMove: 6,
  MediaInteraction: 7,
  StyleSheetRule: 8
};
let I = {
  MouseUp: 0,
  MouseDown: 1,
  Click: 2,
  ContextMenu: 3,
  DblClick: 4,
  Focus: 5,
  Blur: 6,
  TouchStart: 7,
  TouchEnd: 9
};
let M = {
  Play: 0,
  Pause: 1
};
function C(e) {
  if (void 0 !== e && 0 !== e.length) return e.map(e => ({
    cssRules: Array.from(e.cssRules || e.rules, e => e.cssText),
    disabled: e.disabled || void 0,
    media: e.media.length > 0 ? Array.from(e.media) : void 0
  }));
}
function R(e, t, n, r) {
  if (t === $m.HIDDEN) return null;
  let o = e.getAttribute(n);
  if (t === $m.MASK && n !== NT && !yF.includes(n) && n !== r.actionNameAttribute) {
    let t = e.tagName;
    switch (n) {
      case "title":
      case "alt":
      case "placeholder":
        return _$$o;
    }
    if ("IMG" === t && ("src" === n || "srcset" === n)) {
      if (e.naturalWidth > 0) return E(e.naturalWidth, e.naturalHeight);
      let {
        width,
        height
      } = e.getBoundingClientRect();
      return width > 0 || height > 0 ? E(width, height) : eT;
    }
    if ("SOURCE" === t && ("src" === n || "srcset" === n)) return eT;
    if ("A" === t && "href" === n || o && n.startsWith("data-") || "IFRAME" === t && "srcdoc" === n) return _$$o;
  }
  return o && "string" == typeof o ? ei(o, 1e6) : o;
}
function _(e) {
  var t;
  var n;
  let r;
  if (!e) return null;
  try {
    r = e.rules || e.cssRules;
  } catch (e) {}
  return r ? (t = Array.from(r, nr() ? D : L).join(""), n = e.href, t.replace(g, (e, t, r, o, i, a) => {
    let s = r || i || a;
    if (!n || !s || y.test(s) || v.test(s)) return e;
    let l = t || o || "";
    return `url(${l}${function (e, t) {
      try {
        return c$(e, t).href;
      } catch (t) {
        return e;
      }
    }(s, n)}${l})`;
  })) : null;
}
function D(e) {
  return "selectorText" in e && e.selectorText.includes(":") ? e.cssText.replace(/(\[[\w-]+[^\\])(:[^\]]+\])/g, "$1\\$2") : L(e);
}
function L(e) {
  return "styleSheet" in e && _(e.styleSheet) || e.cssText;
}
function O(e, t) {
  let n = function (e, t) {
    switch (e.nodeType) {
      case e.DOCUMENT_NODE:
        return {
          type: N.Document,
          childNodes: A(e, t),
          adoptedStyleSheets: C(e.adoptedStyleSheets)
        };
      case e.DOCUMENT_FRAGMENT_NODE:
        return function (e, t) {
          let n = p_(e);
          n && t.serializationContext.shadowRootsController.addShadowRoot(e);
          return {
            type: N.DocumentFragment,
            childNodes: A(e, t),
            isShadowRoot: n,
            adoptedStyleSheets: n ? C(e.adoptedStyleSheets) : void 0
          };
        }(e, t);
      case e.DOCUMENT_TYPE_NODE:
        return {
          type: N.DocumentType,
          name: e.name,
          publicId: e.publicId,
          systemId: e.systemId
        };
      case e.ELEMENT_NODE:
        return function (e, t) {
          let n = S(e.tagName);
          let r = "svg" === e.tagName || e instanceof SVGElement || void 0;
          let o = jR(dT(e), t.parentNodePrivacyLevel);
          if (o === $m.HIDDEN) {
            let {
              width,
              height
            } = e.getBoundingClientRect();
            return {
              type: N.Element,
              tagName: n,
              attributes: {
                rr_width: `${width}px`,
                rr_height: `${height}px`,
                [NT]: Wd
              },
              childNodes: [],
              isSVG: r
            };
          }
          if (o === $m.IGNORE) return;
          let i = function (e, t, n) {
            let r;
            let o;
            if (t === $m.HIDDEN) return {};
            let i = {};
            let a = S(e.tagName);
            let s = e.ownerDocument;
            for (let r = 0; r < e.attributes.length; r += 1) {
              let o = e.attributes.item(r).name;
              let a = R(e, t, o, n.configuration);
              null !== a && (i[o] = a);
            }
            if (e.value && ("textarea" === a || "select" === a || "option" === a || "input" === a)) {
              let n = m(e, t);
              void 0 !== n && (i.value = n);
            }
            if ("option" === a && t === $m.ALLOW && e.selected && (i.selected = e.selected), "link" === a) {
              let t = Array.from(s.styleSheets).find(t => t.href === e.href);
              let n = _(t);
              n && t && (i._cssText = n);
            }
            if ("style" === a && e.sheet) {
              let t = _(e.sheet);
              t && (i._cssText = t);
            }
            "input" === a && ("radio" === e.type || "checkbox" === e.type) && (t === $m.ALLOW ? i.checked = !!e.checked : Ie(e, t) && delete i.checked);
            ("audio" === a || "video" === a) && (i.rr_mediaState = e.paused ? "paused" : "played");
            let l = n.serializationContext;
            switch (l.status) {
              case 0:
                r = Math.round(e.scrollTop);
                o = Math.round(e.scrollLeft);
                (r || o) && l.elementsScrollPositions.set(e, {
                  scrollTop: r,
                  scrollLeft: o
                });
                break;
              case 1:
                l.elementsScrollPositions.has(e) && ({
                  scrollTop: r,
                  scrollLeft: o
                } = l.elementsScrollPositions.get(e));
            }
            o && (i.rr_scrollLeft = o);
            r && (i.rr_scrollTop = r);
            return i;
          }(e, o, t);
          let a = [];
          wR(e) && "style" !== n && (a = A(e, t.parentNodePrivacyLevel === o && t.ignoreWhiteSpace === ("head" === n) ? t : {
            ...t,
            parentNodePrivacyLevel: o,
            ignoreWhiteSpace: "head" === n
          }));
          return {
            type: N.Element,
            tagName: n,
            attributes: i,
            childNodes: a,
            isSVG: r
          };
        }(e, t);
      case e.TEXT_NODE:
        return function (e, t) {
          let n = rf(e, t.ignoreWhiteSpace || !1, t.parentNodePrivacyLevel);
          if (void 0 !== n) return {
            type: N.Text,
            textContent: n
          };
        }(e, t);
      case e.CDATA_SECTION_NODE:
        return {
          type: N.CDATA,
          textContent: ""
        };
    }
  }(e, t);
  if (!n) return null;
  let r = h(e) || P++;
  n.id = r;
  p.set(e, r);
  t.serializedNodeIds && t.serializedNodeIds.add(r);
  return n;
}
let P = 1;
function A(e, t) {
  let n = [];
  wI(e, e => {
    let r = O(e, t);
    r && n.push(r);
  });
  return n;
}
function $(e) {
  return !!e.changedTouches;
}
function k(e) {
  return !0 === e.composed && XS(e.target) ? e.composedPath()[0] : e.target;
}
let V = (e, t) => {
  let n = window.visualViewport;
  let r = {
    layoutViewportX: e,
    layoutViewportY: t,
    visualViewportX: e,
    visualViewportY: t
  };
  n && (function (e) {
    return Math.abs(e.pageTop - e.offsetTop - window.scrollY) > 25 || Math.abs(e.pageLeft - e.offsetLeft - window.scrollX) > 25;
  }(n) ? (r.layoutViewportX = Math.round(e + n.offsetLeft), r.layoutViewportY = Math.round(t + n.offsetTop)) : (r.visualViewportX = Math.round(e - n.offsetLeft), r.visualViewportY = Math.round(t - n.offsetTop)));
  return r;
};
let F = e => ({
  scale: e.scale,
  offsetLeft: e.offsetLeft,
  offsetTop: e.offsetTop,
  pageLeft: e.pageLeft,
  pageTop: e.pageTop,
  height: e.height,
  width: e.width
});
function z(e, t) {
  return {
    data: {
      source: e,
      ...t
    },
    type: T.IncrementalSnapshot,
    timestamp: nx()
  };
}
function W(e) {
  let {
    clientX,
    clientY
  } = $(e) ? e.changedTouches[0] : e;
  if (window.visualViewport) {
    let {
      visualViewportX,
      visualViewportY
    } = V(clientX, clientY);
    t = visualViewportX;
    n = visualViewportY;
  }
  if (!Number.isFinite(clientX) || !Number.isFinite(clientY)) {
    e.isTrusted && A2("mouse/touch event without x/y");
    return;
  }
  return {
    x: clientX,
    y: clientY
  };
}
let B = {
  pointerup: I.MouseUp,
  mousedown: I.MouseDown,
  click: I.Click,
  contextmenu: I.ContextMenu,
  dblclick: I.DblClick,
  focus: I.Focus,
  blur: I.Blur,
  touchstart: I.TouchStart,
  touchend: I.TouchEnd
};
function G(e, t, n, r = document) {
  let {
    throttled,
    cancel
  } = _$$n(r => {
    let o = k(r);
    if (!o || PJ(o, e.defaultPrivacyLevel) === $m.HIDDEN || !f(o)) return;
    let i = h(o);
    let a = o === document ? {
      scrollTop: zL(),
      scrollLeft: Gn()
    } : {
      scrollTop: Math.round(o.scrollTop),
      scrollLeft: Math.round(o.scrollLeft)
    };
    n.set(o, a);
    t(z(b.Scroll, {
      id: i,
      x: a.scrollLeft,
      y: a.scrollTop
    }));
  }, 100);
  let {
    stop
  } = _$$q(e, r, "scroll", throttled, {
    capture: !0,
    passive: !0
  });
  return {
    stop: () => {
      stop();
      cancel();
    }
  };
}
function U(e) {
  let t = [];
  let n = e;
  for (; n.parentRule;) {
    let e = Array.from(n.parentRule.cssRules).indexOf(n);
    t.unshift(e);
    n = n.parentRule;
  }
  if (!n.parentStyleSheet) return;
  let r = Array.from(n.parentStyleSheet.cssRules).indexOf(n);
  t.unshift(r);
  return t;
}
function X(e, t, n = document) {
  let r;
  let o = e.defaultPrivacyLevel;
  let i = new WeakMap();
  let a = n !== document;
  let {
    stop
  } = _$$l2(e, n, a ? ["change"] : ["input", "change"], e => {
    let t = k(e);
    (t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement || t instanceof HTMLSelectElement) && c(t);
  }, {
    capture: !0,
    passive: !0
  });
  if (a) r = _$$l;else {
    let e = [_$$t(HTMLInputElement.prototype, "value", c), _$$t(HTMLInputElement.prototype, "checked", c), _$$t(HTMLSelectElement.prototype, "value", c), _$$t(HTMLTextAreaElement.prototype, "value", c), _$$t(HTMLSelectElement.prototype, "selectedIndex", c)];
    r = () => {
      e.forEach(e => e.stop());
    };
  }
  return {
    stop: () => {
      r();
      stop();
    }
  };
  function c(e) {
    let t;
    let n = PJ(e, o);
    if (n === $m.HIDDEN) return;
    let r = e.type;
    if ("radio" === r || "checkbox" === r) {
      if (Ie(e, n)) return;
      t = {
        isChecked: e.checked
      };
    } else {
      let r = m(e, n);
      if (void 0 === r) return;
      t = {
        text: r
      };
    }
    p(e, t);
    let i = e.name;
    "radio" === r && i && e.checked && document.querySelectorAll(`input[type="radio"][name="${CSS.escape(i)}"]`).forEach(t => {
      t !== e && p(t, {
        isChecked: !1
      });
    });
  }
  function p(e, n) {
    if (!f(e)) return;
    let r = i.get(e);
    r && r.text === n.text && r.isChecked === n.isChecked || (i.set(e, n), t(z(b.Input, {
      id: h(e),
      ...n
    })));
  }
}
function K(e, t, n, r) {
  let o = W3();
  if (!o) return {
    stop: _$$l,
    flush: _$$l
  };
  let i = function (e) {
    let t = _$$l;
    let n = [];
    function r() {
      t();
      e(n);
      n = [];
    }
    let {
      throttled,
      cancel
    } = _$$n(r, 16, {
      leading: !1
    });
    return {
      addMutations: e => {
        0 === n.length && (t = BB(throttled, {
          timeout: 100
        }));
        n.push(...e);
      },
      flush: r,
      stop: () => {
        t();
        cancel();
      }
    };
  }(r => {
    !function (e, t, n, r) {
      let o = new Map();
      e.filter(e => "childList" === e.type).forEach(e => {
        e.removedNodes.forEach(e => {
          !function e(t, n) {
            XS(t) && n(t.shadowRoot);
            wI(t, t => e(t, n));
          }(e, r.removeShadowRoot);
        });
      });
      let i = e.filter(e => e.target.isConnected && function (e) {
        let t = e;
        for (; t;) {
          if (!f(t) && !p_(t)) return !1;
          t = $4(t);
        }
        return !0;
      }(e.target) && PJ(e.target, n.defaultPrivacyLevel, o) !== $m.HIDDEN);
      let {
        adds,
        removes,
        hasBeenSerialized
      } = function (e, t, n, r) {
        let o = new Set();
        let i = new Map();
        for (let t of e) {
          t.addedNodes.forEach(e => {
            o.add(e);
          });
          t.removedNodes.forEach(e => {
            o.has(e) || i.set(e, t.target);
            o.$$delete(e);
          });
        }
        let a = Array.from(o);
        !function (e) {
          e.sort((e, t) => {
            let n = e.compareDocumentPosition(t);
            return n & Node.DOCUMENT_POSITION_CONTAINED_BY ? -1 : n & Node.DOCUMENT_POSITION_CONTAINS ? 1 : n & Node.DOCUMENT_POSITION_FOLLOWING ? 1 : n & Node.DOCUMENT_POSITION_PRECEDING ? -1 : 0;
          });
        }(a);
        let s = new Set();
        let l = [];
        for (let e of a) {
          if (c(e)) continue;
          let o = PJ(e.parentNode, t.defaultPrivacyLevel, r);
          if (o === $m.HIDDEN || o === $m.IGNORE) continue;
          let i = O(e, {
            serializedNodeIds: s,
            parentNodePrivacyLevel: o,
            serializationContext: {
              status: 2,
              shadowRootsController: n
            },
            configuration: t
          });
          if (!i) continue;
          let a = $4(e);
          l.push({
            nextId: function (e) {
              let t = e.nextSibling;
              for (; t;) {
                if (f(t)) return h(t);
                t = t.nextSibling;
              }
              return null;
            }(e),
            parentId: h(a),
            node: i
          });
        }
        let u = [];
        i.forEach((e, t) => {
          f(t) && u.push({
            parentId: h(e),
            id: h(t)
          });
        });
        return {
          adds: l,
          removes: u,
          hasBeenSerialized: c
        };
        function c(e) {
          return f(e) && s.has(h(e));
        }
      }(i.filter(e => "childList" === e.type), n, r, o);
      let u = function (e, t, n) {
        var r;
        let o = [];
        let i = new Set();
        for (let a of e.filter(e => !i.has(e.target) && (i.add(e.target), !0))) {
          if (a.target.textContent === a.oldValue) continue;
          let e = PJ($4(a.target), t.defaultPrivacyLevel, n);
          e !== $m.HIDDEN && e !== $m.IGNORE && o.push({
            id: h(a.target),
            value: null !== (r = rf(a.target, !1, e)) && void 0 !== r ? r : null
          });
        }
        return o;
      }(i.filter(e => "characterData" === e.type && !hasBeenSerialized(e.target)), n, o);
      let c = function (e, t, n) {
        let r = [];
        let o = new Map();
        let i = e.filter(e => {
          let t = o.get(e.target);
          return !(t && t.has(e.attributeName)) && (t ? t.add(e.attributeName) : o.set(e.target, new Set([e.attributeName])), !0);
        });
        let a = new Map();
        for (let e of i) {
          let o;
          if (e.target.getAttribute(e.attributeName) === e.oldValue) continue;
          let i = PJ(e.target, t.defaultPrivacyLevel, n);
          let s = R(e.target, i, e.attributeName, t);
          if ("value" === e.attributeName) {
            let t = m(e.target, i);
            if (void 0 === t) continue;
            o = t;
          } else o = "string" == typeof s ? s : null;
          let l = a.get(e.target);
          l || (l = {
            id: h(e.target),
            attributes: {}
          }, r.push(l), a.set(e.target, l));
          l.attributes[e.attributeName] = o;
        }
        return r;
      }(i.filter(e => "attributes" === e.type && !hasBeenSerialized(e.target)), n, o);
      (u.length || c.length || removes.length || adds.length) && t(z(b.Mutation, {
        adds,
        removes,
        texts: u,
        attributes: c
      }));
    }(r.concat(a.takeRecords()), e, t, n);
  });
  let a = new o(dm(i.addMutations));
  a.observe(r, {
    attributeOldValue: !0,
    attributes: !0,
    characterData: !0,
    characterDataOldValue: !0,
    childList: !0,
    subtree: !0
  });
  return {
    stop: () => {
      a.disconnect();
      i.stop();
    },
    flush: () => {
      i.flush();
    }
  };
}
let q = (e, t, n) => {
  let r = new Map();
  let o = {
    addShadowRoot: i => {
      if (r.has(i)) return;
      let a = K(t, e, o, i);
      let s = X(e, t, i);
      let l = G(e, t, n, i);
      r.set(i, {
        flush: () => a.flush(),
        stop: () => {
          a.stop();
          s.stop();
          l.stop();
        }
      });
    },
    removeShadowRoot: e => {
      let t = r.get(e);
      t && (t.stop(), r.$$delete(e));
    },
    stop: () => {
      r.forEach(({
        stop: e
      }) => e());
    },
    flush: () => {
      r.forEach(({
        flush: e
      }) => e());
    }
  };
  return o;
};
let ee = 5 * OY;
export function $$et0(e, t, n, c, p, m) {
  let g;
  let y = [];
  let v = m || sA(t.sessionReplayEndpointBuilder, 6e4, t => {
    e.notify(14, {
      error: t
    });
    A2("Error reported to customer", {
      "error.message": t.message
    });
  });
  if (d0()) ({
    addRecord: g
  } = function (e) {
    let t = Y9();
    return {
      addRecord: n => {
        let r = e.findView();
        t.send("record", n, r.id);
      }
    };
  }(c));else {
    let r = function (e, t, n, r) {
      let o = {
        status: 0,
        nextSegmentCreationReason: "init"
      };
      let {
        unsubscribe
      } = e.subscribe(2, () => {
        l("view_change");
      });
      let {
        unsubscribe: _unsubscribe
      } = e.subscribe(11, e => {
        l(e.reason);
      });
      function l(e) {
        1 === o.status && (o.segment.flush((t, r) => {
          let o = function (e, t, n) {
            let r = new FormData();
            r.append("segment", new Blob([e], {
              type: "application/octet-stream"
            }), `${t.session.id}-${t.start}`);
            let o = JSON.stringify({
              raw_segment_size: n,
              compressed_segment_size: e.byteLength,
              ...t
            });
            r.append("event", new Blob([o], {
              type: "application/json"
            }));
            return {
              data: r,
              bytesCount: e.byteLength
            };
          }(r.output, t, r.rawBytesCount);
          Kp(e) ? n.sendOnExit(o) : n.send(o);
        }), DJ(o.expirationTimeoutId));
        o = "stop" !== e ? {
          status: 0,
          nextSegmentCreationReason: e
        } : {
          status: 2
        };
      }
      return {
        addRecord: e => {
          if (2 !== o.status) {
            if (0 === o.status) {
              let e = t();
              if (!e) return;
              o = {
                status: 1,
                segment: function ({
                  context: e,
                  creationReason: t,
                  encoder: n
                }) {
                  let r = 0;
                  let o = e.view.id;
                  let i = {
                    start: 1 / 0,
                    end: -1 / 0,
                    creation_reason: t,
                    records_count: 0,
                    has_full_snapshot: !1,
                    index_in_view: K_(o),
                    source: "browser",
                    ...e
                  };
                  H5(o);
                  return {
                    addRecord: function (e, t) {
                      i.start = Math.min(i.start, e.timestamp);
                      i.end = Math.max(i.end, e.timestamp);
                      i.records_count += 1;
                      i.has_full_snapshot || (i.has_full_snapshot = e.type === T.FullSnapshot);
                      let o = n.isEmpty ? '{"records":[' : ",";
                      n.write(o + JSON.stringify(e), e => {
                        t(r += e);
                      });
                    },
                    flush: function (e) {
                      if (n.isEmpty) throw Error("Empty segment flushed");
                      n.write(`],${JSON.stringify(i).slice(1)}
`);
                      n.finish(t => {
                        L7(i.view.id, t.rawBytesCount);
                        e(i, t);
                      });
                    }
                  };
                }({
                  encoder: r,
                  context: e,
                  creationReason: o.nextSegmentCreationReason
                }),
                expirationTimeoutId: wg(() => {
                  l("segment_duration_limit");
                }, ee)
              };
            }
            o.segment.addRecord(e, e => {
              e > 6e4 && l("segment_bytes_limit");
            });
          }
        },
        stop: () => {
          l("stop");
          unsubscribe();
          _unsubscribe();
        }
      };
    }(e, () => function (e, t, n) {
      let r = t.findTrackedSession();
      let o = n.findView();
      if (r && o) return {
        application: {
          id: e
        },
        session: {
          id: r.id
        },
        view: {
          id: o.id
        }
      };
    }(t.applicationId, n, c), v, p);
    g = r.addRecord;
    y.push(r.stop);
  }
  let {
    stop
  } = function (e) {
    let {
      emit,
      configuration,
      lifeCycle
    } = e;
    if (!emit) throw Error("emit function is required");
    let o = n => {
      emit(n);
      _$$b("record", {
        record: n
      });
      let r = e.viewHistory.findView();
      $1(r.id);
    };
    let i = function () {
      let e = new WeakMap();
      return {
        set(t, n) {
          (t !== document || document.scrollingElement) && e.set(t === document ? document.scrollingElement : t, n);
        },
        get: t => e.get(t),
        has: t => e.has(t)
      };
    }();
    let c = q(configuration, o, i);
    let {
      stop: _stop
    } = function (e, t, n, r, o, i) {
      let a = (n = nx(), o = {
        status: 0,
        elementsScrollPositions: e,
        shadowRootsController: t
      }) => {
        let {
          width,
          height
        } = pB();
        let s = [{
          data: {
            height,
            href: window.location.href,
            width
          },
          type: T.Meta,
          timestamp: n
        }, {
          data: {
            has_focus: document.hasFocus()
          },
          type: T.Focus,
          timestamp: n
        }, {
          data: {
            node: O(document, {
              serializationContext: o,
              parentNodePrivacyLevel: r.defaultPrivacyLevel,
              configuration: r
            }),
            initialOffset: {
              left: Gn(),
              top: zL()
            }
          },
          type: T.FullSnapshot,
          timestamp: n
        }];
        window.visualViewport && s.push({
          data: F(window.visualViewport),
          type: T.VisualViewport,
          timestamp: n
        });
        return s;
      };
      i(a());
      let {
        unsubscribe
      } = n.subscribe(2, n => {
        o();
        i(a(n.startClocks.timeStamp, {
          shadowRootsController: t,
          status: 1,
          elementsScrollPositions: e
        }));
      });
      return {
        stop: unsubscribe
      };
    }(i, c, lifeCycle, configuration, m, e => e.forEach(e => o(e)));
    function m() {
      c.flush();
      y.flush();
    }
    let g = function () {
      let e = new WeakMap();
      let t = 1;
      return {
        getIdForEvent: n => (e.has(n) || e.set(n, t++), e.get(n))
      };
    }();
    let y = K(o, configuration, c, document);
    let v = [y, function (e, t) {
      let {
        throttled,
        cancel
      } = _$$n(e => {
        let n = k(e);
        if (f(n)) {
          let r = W(e);
          if (!r) return;
          let o = {
            id: h(n),
            timeOffset: 0,
            x: r.x,
            y: r.y
          };
          t(z($(e) ? b.TouchMove : b.MouseMove, {
            positions: [o]
          }));
        }
      }, 50, {
        trailing: !1
      });
      let {
        stop: _stop2
      } = _$$l2(e, document, ["mousemove", "touchmove"], throttled, {
        capture: !0,
        passive: !0
      });
      return {
        stop: () => {
          _stop2();
          cancel();
        }
      };
    }(configuration, o), _$$l2(configuration, document, Object.keys(B), e => {
      let t;
      let r = k(e);
      if (PJ(r, configuration.defaultPrivacyLevel) === $m.HIDDEN || !f(r)) return;
      let i = h(r);
      let a = B[e.type];
      if (a !== I.Blur && a !== I.Focus) {
        let n = W(e);
        if (!n) return;
        t = {
          id: i,
          type: a,
          x: n.x,
          y: n.y
        };
      } else t = {
        id: i,
        type: a
      };
      o({
        id: g.getIdForEvent(e),
        ...z(b.MouseInteraction, t)
      });
    }, {
      capture: !0,
      passive: !0
    }), G(configuration, o, i, document), function (e, t) {
      let n = g1(e).subscribe(e => {
        t(z(b.ViewportResize, e));
      });
      return {
        stop: () => {
          n.unsubscribe();
        }
      };
    }(configuration, o), X(configuration, o), _$$l2(configuration, document, ["play", "pause"], e => {
      let t = k(e);
      t && PJ(t, configuration.defaultPrivacyLevel) !== $m.HIDDEN && f(t) && o(z(b.MediaInteraction, {
        id: h(t),
        type: "play" === e.type ? M.Play : M.Pause
      }));
    }, {
      capture: !0,
      passive: !0
    }), function (e) {
      function t(e, t) {
        e && f(e.ownerNode) && t(h(e.ownerNode));
      }
      let n = [_$$H(CSSStyleSheet.prototype, "insertRule", ({
        target: n,
        parameters: [r, o]
      }) => {
        t(n, t => e(z(b.StyleSheetRule, {
          id: t,
          adds: [{
            rule: r,
            index: o
          }]
        })));
      }), _$$H(CSSStyleSheet.prototype, "deleteRule", ({
        target: n,
        parameters: [r]
      }) => {
        t(n, t => e(z(b.StyleSheetRule, {
          id: t,
          removes: [{
            index: r
          }]
        })));
      })];
      function r(r) {
        n.push(_$$H(r.prototype, "insertRule", ({
          target: n,
          parameters: [r, o]
        }) => {
          t(n.parentStyleSheet, t => {
            let i = U(n);
            i && (i.push(o || 0), e(z(b.StyleSheetRule, {
              id: t,
              adds: [{
                rule: r,
                index: i
              }]
            })));
          });
        }), _$$H(r.prototype, "deleteRule", ({
          target: n,
          parameters: [r]
        }) => {
          t(n.parentStyleSheet, t => {
            let o = U(n);
            o && (o.push(r), e(z(b.StyleSheetRule, {
              id: t,
              removes: [{
                index: o
              }]
            })));
          });
        }));
      }
      "undefined" != typeof CSSGroupingRule ? r(CSSGroupingRule) : (r(CSSMediaRule), r(CSSSupportsRule));
      return {
        stop: () => {
          n.forEach(e => e.stop());
        }
      };
    }(o), _$$l2(configuration, window, ["focus", "blur"], () => {
      o({
        data: {
          has_focus: document.hasFocus()
        },
        type: T.Focus,
        timestamp: nx()
      });
    }), function (e, t) {
      let n = window.visualViewport;
      if (!n) return {
        stop: _$$l
      };
      let {
        throttled,
        cancel
      } = _$$n(() => {
        t({
          data: F(n),
          type: T.VisualViewport,
          timestamp: nx()
        });
      }, 200, {
        trailing: !1
      });
      let {
        stop: _stop3
      } = _$$l2(e, n, ["resize", "scroll"], throttled, {
        capture: !0,
        passive: !0
      });
      return {
        stop: () => {
          _stop3();
          cancel();
        }
      };
    }(configuration, o), function (e, t, n) {
      let r = e.subscribe(12, e => {
        var r;
        var o;
        e.rawRumEvent.type === bb.ACTION && e.rawRumEvent.action.type === X2.CLICK && e.rawRumEvent.action.frustration?.type?.length && "events" in e.domainContext && e.domainContext.events && e.domainContext.events.length && t({
          timestamp: e.rawRumEvent.date,
          type: T.FrustrationRecord,
          data: {
            frustrationTypes: e.rawRumEvent.action.frustration.type,
            recordIds: e.domainContext.events.map(e => n.getIdForEvent(e))
          }
        });
      });
      return {
        stop: () => {
          r.unsubscribe();
        }
      };
    }(lifeCycle, o, g), function (e, t) {
      let n = e.subscribe(5, () => {
        t({
          timestamp: nx(),
          type: T.ViewEnd
        });
      });
      return {
        stop: () => {
          n.unsubscribe();
        }
      };
    }(lifeCycle, e => {
      m();
      o(e);
    })];
    return {
      stop: () => {
        c.stop();
        v.forEach(e => e.stop());
        _stop();
      },
      flushMutations: m,
      shadowRootsController: c
    };
  }({
    emit: g,
    configuration: t,
    lifeCycle: e,
    viewHistory: c
  });
  y.push(stop);
  return {
    stop: () => {
      y.forEach(e => e());
    }
  };
}
export const startRecording = $$et0;