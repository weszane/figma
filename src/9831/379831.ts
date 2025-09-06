import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState, useContext, useRef, memo, useCallback, useEffect, useMemo } from "react";
import i, { i as _$$i } from "../905/97346";
import { atom, setupCustomAtom, useAtomWithSubscription, useAtomValueAndSetter, Xr } from "../figma_app/27355";
import { analyticsEventManager } from "../905/449184";
import { l as _$$l } from "../905/745972";
import { Uz } from "../905/63728";
import { r as _$$r } from "../905/520829";
import { sx } from "../905/941192";
import { Oz, Lp, sg, wc, tH } from "../905/251509";
import { Cc, lX, lu } from "../905/545842";
import { Ok, ux, uW, NY } from "../figma_app/851625";
import { getRequest } from "../905/910117";
import { OC } from "../figma_app/386952";
import { E as _$$E } from "../905/694285";
import { MultiValueMap } from "../905/810750";
import { Sd, H$, AJ, jI, JN, bA, gg, q as _$$q } from "../905/235262";
import { Sv, Y6, hX } from "../905/104795";
import { zG, rf } from "../9831/302304";
import { A as _$$A } from "../vendor/648136";
import { Y1 } from "../vendor/891888";
import { mergeSorted } from "../figma_app/656233";
import { glU, Ez5 } from "../figma_app/763686";
import { zN, k9 } from "../905/19536";
import F from "../vendor/73823";
import { s as _$$s } from "../cssbuilder/589278";
import { M as _$$M, Y as _$$Y } from "../905/830372";
import { X9, nE, IO } from "../905/721983";
import { debounce } from "../905/915765";
import { isNotNullish } from "../figma_app/95419";
import { G2 } from "../figma_app/314591";
import { IV } from "../905/154591";
import { nK } from "../905/836986";
import { ww } from "../figma_app/194956";
import { ms, c$, wv } from "../figma_app/236327";
import { renderI18nText } from "../905/303541";
import { E as _$$E2 } from "../905/142894";
import { R as _$$R } from "../905/741991";
import { Z as _$$Z } from "../905/27174";
import eE from "classnames";
import { R as _$$R2 } from "../905/307199";
import { dP, M3 } from "../figma_app/119475";
import { B as _$$B } from "../905/714743";
import { A as _$$A2 } from "../f2246930/129503";
import { A as _$$A3 } from "../6828/718668";
import { o as _$$o } from "../905/153787";
import { P as _$$P } from "../905/625912";
import { CY } from "../figma_app/637027";
import { e as _$$e } from "../9831/266717";
import { A as _$$A4 } from "../1617/380980";
import { A as _$$A5 } from "../f2246930/458609";
import { A as _$$A6 } from "../svg/619883";
import { A as _$$A7 } from "../svg/821527";
import { E as _$$E3 } from "../905/984674";
import { zr, Pd, _H, io, _t, S3, xK } from "../905/440046";
var b = (e => (e[e.Fetched = 0] = "Fetched", e[e.Fetching = 1] = "Fetching", e[e.NeverFetched = 2] = "NeverFetched", e))(b || {});
let y = atom(e => {
  let t = e(OC);
  return "fullscreen" === t.view ? `/api/file/scenegraph_validations/${t.fileKey}` : _$$E(t) && t.urlParams?.type === "server_file" ? `/api/admin/scenegraph_validations/${t.urlParams.key}` : null;
});
let v = atom(e => null != e(y));
let C = (() => {
  let e = atom(Ok());
  return atom(t => t(e), async (t, r) => {
    let n;
    if (t(e).status === _$$r.LOADING) return;
    let s = t(y);
    if (s) {
      r(e, ux());
      try {
        n = await w(s);
      } catch (t) {
        r(e, uW(t));
        return;
      }
      r(e, NY(n));
    }
  });
})();
async function w(e) {
  let t = await getRequest(e);
  let r = new MultiValueMap();
  for (let e of t.data.meta.data.results.violations) if ("always-fail-for-testing" !== e.name) for (let t of e.instances) r.add(t.guid, t.message);
  return r;
}
var P = F;
function U(e, t, r) {
  return [...(e.getObject(r)?.mapDescendants(e => e.id) ?? []), ...(t?.getObject(r)?.mapDescendants(e => e.id) ?? [])];
}
let X = setupCustomAtom(atom({}), (e, t, r) => {
  let n = r(Cc);
  let s = r(lX);
  switch (t.type) {
    case "toggleExpanded":
      return X9(e, t.objectId, t.toggleSubtree ? U(n, s, t.objectId) : []);
    case "expandAncestors":
      return nE(e, function (e, t, r) {
        return [...(e.getObject(r)?.mapAncestors(e => e.id) ?? []), ...(t?.getObject(r)?.mapAncestors(e => e.id) ?? [])];
      }(n, s, t.objectId), !0);
    case "expandDescendants":
      return nE(e, [t.objectId, ...U(n, s, t.objectId)], !0);
    case "collapseDescendants":
      return IO(e, [t.objectId, ...U(n, s, t.objectId)]);
  }
});
let R = atom({
  status: "initial"
});
let Y = atom(0);
let M = atom(!1);
let H = atom(e => {
  if (e(M)) {
    let t = e(Y);
    return `Indexing search results (this may take a moment)... [${t}/???]`;
  }
  return null;
});
let V = Sv("searchMode", Y6.Search);
let W = atom(e => {
  let t = e(R);
  let r = e(Cc);
  let n = e(Sd);
  return "initial" === t.status ? n.map(e => r.getObject(e)).filter(isNotNullish).map(e => ({
    object: e,
    matches: []
  })).reverse() : "results" in t && t.results.length > 0 ? t.results : null;
});
let G = atom(e => {
  let t = e(R);
  if ("searching" === t.status && 0 === t.results.length) {
    let t = ["Searching..."];
    let r = e(H);
    r && t.push(r);
    return t;
  }
  if ("success" === t.status && 0 === t.results.length) {
    let t = ["No results found."];
    let r = e(Cc);
    r instanceof G2 && t.push("Some content may be unavailable because of incremental loading");
    "hide" === r.sensitiveTextPolicy && t.push("Searching text fields is limited beacuse text redaction has been applied.");
    return t;
  }
  return "error" === t.status ? ["Error searching:", String(t.error)] : null;
});
let $$J = atom(e => {
  if (e(V) !== Y6.Filter) return null;
  let t = e(R);
  return "results" in t ? t.results.map(e => e.object) : null;
});
let K = atom(e => {
  if (e(V) !== Y6.Filter) return null;
  let t = e(G);
  return t ? t.join(" ") : null;
});
let q = Sv("sortOrder", hX.Position);
let Z = atom(e => {
  let t = [hX.Position, hX.Name, hX.NodeId];
  e(Cc).rootObjects[0]?.displayProperties.memoryFraction != null && t.push(hX.Memory);
  t.sort();
  return t;
});
let Q = atom(e => {
  switch (e(q)) {
    case hX.Position:
      return et;
    case hX.Name:
      return ee;
    case hX.Memory:
      return en;
    case hX.NodeId:
      return er;
  }
});
function ee(e, t) {
  return e.displayProperties.name.localeCompare(t.displayProperties.name);
}
function et(e, t) {
  let [r, n] = es(e, t);
  if (r && n) {
    let e = r.parentIndex?.position;
    let t = n.parentIndex?.position;
    if (null == e && null == t) return 0;
    if (null == t) return 1;
    if (null == e) return -1;
    if (e < t) return -1;else if (e > t) return 1;
  }
  return ee(e, t);
}
function er(e, t) {
  let [r, n] = es(e, t);
  if (r && n) {
    let {
      sessionID,
      localID
    } = r.guid ?? {
      localID: -1,
      sessionID: -1
    };
    let {
      sessionID: _sessionID,
      localID: _localID
    } = n.guid ?? {
      localID: -1,
      sessionID: -1
    };
    return sessionID - _sessionID || localID - _localID;
  }
  return et(e, t);
}
function en(e, t) {
  return (t.displayProperties.memoryFraction ?? 0) - (e.displayProperties.memoryFraction ?? 0) || et(e, t);
}
function es(e, t) {
  return "nodeChange" in e && "nodeChange" in t ? [e.nodeChange, t.nodeChange] : [null, null];
}
let eh = ms;
let ep = c$;
let ef = wv;
function ex({
  contextMenuData: {
    objectId: e,
    position: t
  },
  onClose: r
}) {
  let [i, a] = useState(0);
  let o = t.left;
  let c = t.top + i > window.innerHeight ? t.top - i : t.top;
  let {
    canSelectInApp,
    selectInApp
  } = useContext(H$);
  let x = useRef(null);
  ww(x, r);
  let g = useAtomWithSubscription(Cc).getObject(e);
  let m = g instanceof _$$R ? g : null;
  let j = g instanceof _$$E2 ? g : null;
  let [b, y] = useAtomValueAndSetter(Oz);
  let v = Xr(X);
  if (null == g) return null;
  let C = e => () => {
    e();
    r();
  };
  let w = g.children.length > 0;
  let N = (() => {
    if (canSelectInApp?.(g)) return C(() => selectInApp(g));
  })();
  let I = e => C(() => glU.triggerAction(e, {
    guid: g.id
  }));
  let k = b?.object.id === g.id;
  return jsx(eh, {
    style: {
      ...sx.fixed.$,
      left: o,
      top: c
    },
    dropdownRef: e => {
      e && a(e.clientHeight);
    },
    children: jsxs("div", {
      ref: x,
      children: [N && jsx(ep, {
        onClick: N,
        children: "Jump to node"
      }), w && jsx(ep, {
        onClick: C(() => v({
          type: "expandDescendants",
          objectId: e
        })),
        children: "Expand descendants"
      }), w && jsx(ep, {
        onClick: C(() => v({
          type: "collapseDescendants",
          objectId: e
        })),
        children: "Collapse descendants"
      }), (N || w) && jsx(ef, {}), k && jsx(ep, {
        onClick: C(() => y({
          type: "clear"
        })),
        children: "Stop diffing against this node"
      }), (!k || b?.type !== Lp.Layer) && jsx(ep, {
        onClick: C(() => y({
          type: "start",
          diffType: Lp.Layer,
          id: e
        })),
        children: "Layer diff against this node"
      }), (!k || b?.type !== Lp.Tree) && jsx(ep, {
        onClick: C(() => y({
          type: "start",
          diffType: Lp.Tree,
          id: e
        })),
        children: "Tree diff against this node"
      }), m && jsx(ef, {}), m && jsx(ep, {
        onClick: C(() => {
          let e = JSON.stringify(m.nodeChange, null, 2);
          navigator.clipboard.writeText(e);
        }),
        children: "Copy NodeChange JSON"
      }), j && "DOCUMENT" !== j.type && "CANVAS" !== j.type && jsx(ep, {
        onClick: I("debug-print-as-test-code"),
        children: renderI18nText("fullscreen_actions.debug-print-as-test-code")
      }), j && "VECTOR" === j.type && jsx(ep, {
        onClick: I("debug-print-vector-network-as-test-code"),
        children: renderI18nText("fullscreen_actions.debug-print-vector-network-as-test-code")
      })]
    })
  });
}
let em = memo(function ({
  diffType: e,
  id: t,
  primaryId: r,
  secondaryId: i,
  leftBadges: l,
  indent: a,
  index: o,
  isExpanded: c,
  isLeaf: d,
  isSelected: u,
  isSelectedSecondary: h,
  memoryFraction: p,
  rightBadges: f,
  additionalBadges: x,
  name: g,
  style: m,
  select: j,
  toggle: b,
  showContextMenu: y
}) {
  let v = useCallback(e => {
    e.preventDefault();
    y({
      objectId: t,
      position: {
        left: e.clientX,
        top: e.clientY
      }
    });
  }, [t, y]);
  return jsxs(_$$Z, {
    changeType: e,
    indent: a,
    isExpanded: c,
    isLeaf: d,
    isSelected: u,
    isSelectedSecondary: h,
    keyboardNavigationPath: [o],
    onContextMenu: v,
    onMouseEnter: () => {
      Ez5 && Ez5.editorState().figmaScopeHighlightedNode.set(t);
    },
    onMouseLeave: () => {
      Ez5 && Ez5.editorState().figmaScopeHighlightedNode.set("");
    },
    select: () => j(t),
    style: m,
    toggleExpanded: e => b(t, e),
    children: [jsx(IV, {
      badges: l
    }), jsx(nK, {
      id: r
    }), i && jsx(nK, {
      id: i,
      secondary: !0
    }), jsx("div", {
      title: g,
      className: _$$s.ellipsis.noWrap.overflowHidden.$,
      children: g
    }), jsx(_$$M, {}), jsx(IV, {
      badges: f
    }), x && jsx(IV, {
      badges: x
    }), null != p && jsxs("span", {
      className: _$$s.colorTextSecondary.$,
      title: "Node memory usage",
      children: [(100 * p).toFixed(3), "%"]
    })]
  });
});
function ej({
  style: e,
  data: {
    displayedObjects: t,
    selectedId: r,
    selectedIds: s,
    ...i
  },
  index: l
}) {
  let a = t[l];
  let o = zN(e);
  return jsx(em, {
    ...a,
    ...i,
    isSelected: r === a.id,
    isSelectedSecondary: !!a && s.includes(a.id),
    style: o,
    index: l
  });
}
let eb = [];
function ey({
  appSelection: e
}) {
  let t = useAtomWithSubscription(ev);
  let [r, i] = useAtomValueAndSetter(AJ);
  let a = k9(() => e?.guids ?? eb, [e?.guids]);
  let [o, c] = useState(null);
  let d = useRef(null);
  useEffect(() => {
    let e = t.findIndex(e => e.id === r);
    e >= 0 && d.current?.scrollToItem(e, "smart");
  }, [t, r]);
  let u = Xr(X);
  useEffect(() => {
    u({
      type: "expandAncestors",
      objectId: r
    });
  }, [u, r]);
  let h = useCallback((e, t) => {
    u({
      type: "toggleExpanded",
      objectId: e,
      toggleSubtree: t
    });
  }, [u]);
  let p = useAtomWithSubscription(K);
  return 0 === t.length ? jsx("div", {
    children: p ?? "Empty Scene"
  }) : jsxs(Fragment, {
    children: [jsx(_$$A, {
      disableWidth: !0,
      children: ({
        height: e
      }) => jsx(Y1, {
        itemSize: 18,
        itemCount: t.length,
        height: e,
        ref: d,
        itemData: {
          displayedObjects: t,
          selectedId: r,
          selectedIds: a,
          select: i,
          toggle: h,
          showContextMenu: c
        },
        width: "100%",
        children: ej
      })
    }), o && jsx(ex, {
      contextMenuData: o,
      onClose: () => {
        c(null);
      }
    })]
  });
}
let ev = atom(e => e(eC) ?? e(ew));
let eC = atom(e => {
  let t = e($$J);
  if (!t) return null;
  let r = e(Cc);
  return t.map(e => ({
    ...e.displayProperties,
    diffType: void 0,
    additionalBadges: r.getAdditionalBadges?.(e.id) ?? [],
    id: e.id,
    indent: 0,
    isExpanded: !1,
    isLeaf: !0
  }));
});
let ew = atom(e => {
  let t = e(Cc);
  let r = t.rootObjects;
  let n = e(sg);
  let s = e(X);
  let i = e(Q);
  let l = (() => {
    switch (n.type) {
      case Lp.Tree:
        return [n.object];
      case Lp.Full:
        return n.resource.rootObjects;
      default:
        return [];
    }
  })();
  let a = {
    resource: t,
    sortFn: i,
    expandedIds: s
  };
  return P()(r, e => {
    if (!e) return [];
    if (0 === l.length) return eS(e, 0, a);
    let t = eI(e, l);
    return t ? eN(e, t, 0, a) : function e(t, r, n, s) {
      let i = t.id;
      let l = t.children;
      let a = 0 === l.length;
      let o = !!s.expandedIds[i];
      let c = !1;
      let d = P()(l, t => {
        let i = (() => {
          let i = eI(t, r);
          if (i) return eN(t, i, n + 1, s);
          let l = r.filter(e => e.someAncestor(e => e.id === t.id, {
            includeSelf: !0
          }));
          return l.length > 0 ? e(t, l, n + 1, s) : eS(t, n + 1, s);
        })();
        c = c || i[0]?.diffType != null;
        return i;
      });
      let u = {
        ...t.displayProperties,
        diffType: c ? "CHILD_MODIFIED" : void 0,
        additionalBadges: s.resource.getAdditionalBadges?.(i) ?? [],
        id: i,
        indent: n,
        isExpanded: o,
        isLeaf: a
      };
      return o ? [u, ...d] : [u];
    }(e, l, 0, a);
  });
});
function eS(e, t, r) {
  let n = e.id;
  let s = e.children;
  let i = 0 === s.length;
  let l = !!r.expandedIds[n];
  let a = {
    ...e.displayProperties,
    diffType: void 0,
    additionalBadges: r.resource.getAdditionalBadges?.(n) ?? [],
    id: n,
    indent: t,
    isExpanded: l,
    isLeaf: i
  };
  return l ? [a, ...P()(ek(s, r.sortFn), e => eS(e, t + 1, r))] : [a];
}
function eN(e, t, r, n) {
  let s = e ?? t;
  if (!s) throw Error("Diffing two nothings");
  if (e && t && e.id !== t.id) throw Error("Diffing nodes with mismatched keys");
  let i = s.id;
  let l = ek(e?.children ?? [], n.sortFn);
  let a = ek(t?.children ?? [], n.sortFn);
  let o = mergeSorted(l, a, e => e.id);
  let c = !1;
  let d = P()(o, ({
    left: e,
    right: t
  }) => {
    let s = eN(e, t, r + 1, n);
    c = c || s[0]?.diffType != null;
    return s;
  });
  let u = wc(e, t, c);
  let p = e?.displayProperties.name;
  let f = t?.displayProperties.name;
  let x = null != p && null != f && p !== f ? `${p} <=> ${f}` : s.displayProperties.name;
  let g = !!n.expandedIds[i];
  let m = {
    ...s.displayProperties,
    diffType: u,
    additionalBadges: n.resource.getAdditionalBadges?.(i) ?? [],
    id: i,
    indent: r,
    isExpanded: g,
    isLeaf: 0 === o.length,
    name: x
  };
  return g ? [m, ...d] : [m];
}
function eI(e, t) {
  return t.find(t => t.id === e.id);
}
function ek(e, t) {
  return e.slice().sort(t);
}
var eD = eE;
function eF({
  searchRef: e
}) {
  let t = Xr(AJ);
  let r = useAtomWithSubscription(W);
  let i = useAtomWithSubscription(G);
  let [a, o] = useState(!1);
  let c = useAtomWithSubscription(V) !== Y6.Filter && a;
  let d = useRef(null);
  ww(d, () => o(!1));
  let u = useCallback(e => {
    o(!1);
    t(e.object.id);
  }, [o, t]);
  return jsxs(dP, {
    className: _$$s.flex1.$,
    ref: d,
    allowVim: !0,
    children: [jsx(eP, {
      searchRef: e,
      setShowSearchResults: o
    }), c && (r ? jsx(e_, {
      searchResults: r,
      selectResult: u
    }) : i ? jsx(eO, {
      text: i
    }) : null)]
  });
}
function eP({
  searchRef: e,
  setShowSearchResults: t
}) {
  let r = useAtomWithSubscription(V);
  let i = function () {
    let e = useAtomWithSubscription(Cc);
    let t = Xr(R);
    let r = Xr(Y);
    let n = Xr(M);
    let i = useRef(0);
    let a = useMemo(() => debounce(s => {
      let l = ++i.current;
      n(!0);
      let a = new TaskController({
        priority: "user-visible"
      });
      scheduler.postTask(() => n(!0), {
        signal: a.signal,
        delay: 300
      }).catch(() => {});
      let o = e.getObject(s);
      o && t({
        status: "searching",
        results: [{
          object: o,
          matches: [{
            value: s,
            property: "id",
            isExact: !0
          }]
        }]
      });
      e.getSearch(r).then(e => e.searchWithText(s)).then(e => {
        a.abort();
        l === i.current && t({
          status: "success",
          results: e
        });
      }).catch(e => {
        console.error(e);
        a.abort();
        l === i.current && t({
          status: "error",
          error: e
        });
      });
    }, 200), [e, r, t, n]);
    return useCallback(e => 0 === e.length ? t({
      status: "initial"
    }) : a(e), [a, t]);
  }();
  let {
    setKeyboardNavigationElement
  } = M3({
    path: [0, 0],
    id: "input"
  });
  return jsx("input", {
    ref: t => {
      setKeyboardNavigationElement(t);
      e.current = t;
    },
    type: "text",
    placeholder: r,
    className: "search_bar--searchBar--qnpUm",
    onChange: e => i(e.target.value),
    onFocus: () => t(!0)
  });
}
function e$({
  children: e
}) {
  return jsx("div", {
    className: _$$s.absolute.zIndexModal.colorBg.b1.colorBorder.mt2.overflowAuto.$,
    style: {
      maxHeight: 450,
      minWidth: 500,
      boxShadow: "0px 2px 14px var(--color-shadow, rgba(0, 0, 0, 0.15))"
    },
    children: e
  });
}
function e_({
  searchResults: e,
  selectResult: t
}) {
  return jsx(e$, {
    children: e.map((e, r) => jsx(eU, {
      result: e,
      index: r,
      onClick: () => t(e)
    }, e.object.id))
  });
}
function eO({
  text: e
}) {
  return jsx(e$, {
    children: (Array.isArray(e) ? e : [e]).map((e, t) => jsx("div", {
      className: _$$s.colorBg.colorTextSecondary.px8.py4.$,
      children: e
    }, t))
  });
}
function eU({
  result: e,
  index: t,
  onClick: r
}) {
  let {
    object,
    matches
  } = e;
  let {
    displayProperties
  } = i;
  let {
    setKeyboardNavigationElement,
    keyboardNavigationItem,
    isFauxFocused
  } = M3({
    path: [1, t],
    id: object.id
  });
  useEffect(() => {
    keyboardNavigationItem && 0 === t && keyboardNavigationItem.fauxFocus();
  }, [keyboardNavigationItem, t]);
  return jsx("button", {
    ref: setKeyboardNavigationElement,
    className: eD()(_$$s.block.wFull.px4.py8.colorText.flex.itemsCenter.alignLeft.$, "search_bar--searchResult--0iOvc", isFauxFocused && "search_bar--fauxFocus--BYHwu"),
    onClick: r,
    children: jsxs(_$$Y, {
      spacing: 4,
      children: [jsx(IV, {
        badges: displayProperties.leftBadges
      }), jsx(nK, {
        id: object.displayProperties.primaryId
      }), jsx(_$$R2, {
        className: _$$s.overflowHidden.$,
        text: displayProperties.name
      }), jsx(_$$M, {}), matches.filter(({
        property: e
      }) => !["id", "guid", "name", "type", "phase"].includes(e)).map(({
        property: e,
        value: t
      }, r) => jsxs(_$$Y, {
        spacing: 4,
        width: "hug-contents",
        children: [jsxs("div", {
          children: [e, ":"]
        }), jsx("div", {
          children: t
        })]
      }, r))]
    })
  });
}
function ez({
  children: e
}) {
  return jsx("div", {
    className: _$$s.colorBorder.px8.py4.bb1.bSolid.$,
    children: jsx(_$$Y, {
      children: e
    })
  });
}
function eB(e) {
  let t = {
    className: "toolbar_components--iconButton--1-XNe",
    children: jsx(_$$B, {
      svg: e.svg
    }),
    title: e.label,
    "aria-label": e.label
  };
  return "href" in e ? jsx("a", {
    ...t,
    href: e.href,
    target: "blank"
  }) : jsx("button", {
    ...t,
    onClick: e.onClick,
    disabled: e.disabled
  });
}
function eY({
  searchRef: e
}) {
  let [t, r] = useAtomValueAndSetter(jI);
  let [i, o] = useAtomValueAndSetter(JN);
  let c = !!useContext(H$).selectInApp;
  let [d, u] = useAtomValueAndSetter(V);
  let [h, p] = useAtomValueAndSetter(bA);
  let [f, x] = useAtomValueAndSetter(q);
  let g = useAtomWithSubscription(Z);
  return jsxs(ez, {
    children: [jsx(eF, {
      searchRef: e
    }), jsxs("select", {
      name: "filter-or-search",
      title: "Determines whether the text box searches or filters",
      onChange: e => {
        u(e.target.value);
      },
      defaultValue: d,
      children: [jsx("option", {
        value: Y6.Search,
        children: "Search"
      }), jsx("option", {
        value: Y6.Filter,
        children: "Filter"
      })]
    }), jsx("select", {
      name: "sort",
      title: "Sets the left panel sort order",
      onChange: e => {
        let t = e.target.value;
        analyticsEventManager.trackDefinedEvent("figmascope.sort_order_change", {
          order: function (e) {
            switch (e) {
              case hX.Position:
                return "position";
              case hX.Name:
                return "name";
              case hX.Memory:
                return "memory";
              case hX.NodeId:
                return "node_id";
            }
          }(t)
        });
        x(t);
      },
      defaultValue: f,
      children: g.map(e => jsxs("option", {
        value: e,
        children: ["Sort by ", e]
      }, e))
    }), c && jsxs(Fragment, {
      children: [jsx("input", {
        name: "follow-selection",
        type: "checkbox",
        checked: h,
        onChange: e => p(e.target.checked)
      }), jsx("label", {
        htmlFor: "follow-selection",
        children: "Follow"
      })]
    }), jsx(eB, {
      label: "Select Previous",
      onClick: () => {
        r();
        analyticsEventManager.trackDefinedEvent("figmascope.select_prev_next", {
          direction: "prev",
          source: "button"
        });
      },
      disabled: !t,
      svg: _$$A2
    }), jsx(eB, {
      label: "Select Next",
      onClick: () => {
        o();
        analyticsEventManager.trackDefinedEvent("figmascope.select_prev_next", {
          direction: "next",
          source: "button"
        });
      },
      disabled: !i,
      svg: _$$A3
    })]
  });
}
function eZ({
  selectedObject: e,
  diffObject: t,
  onClose: r
}) {
  let s = useAtomWithSubscription(v);
  let [i, a] = useAtomValueAndSetter(Oz);
  return jsxs(ez, {
    children: [e ? i && t ? jsx(e1, {
      selectedObject: e,
      diffObject: t,
      diffState: i,
      setDiffState: a
    }) : jsx(e0, {
      object: e
    }) : t ? jsx(e0, {
      object: t
    }) : jsx(_$$M, {}), s && jsx(e3, {}), jsx(eB, {
      label: "Help",
      href: _$$e,
      svg: _$$A4
    }), r && jsx(eB, {
      label: "Close FigmaScope",
      onClick: r,
      svg: _$$A7
    })]
  });
}
let eQ = _$$s.flex1.ml10.my4.$;
function e0({
  object: e
}) {
  return jsx("div", {
    className: eQ,
    children: jsx("span", {
      className: _$$s.fontSemiBold.$,
      children: e.displayProperties.longName
    })
  });
}
function e1({
  selectedObject: e,
  diffObject: t,
  diffState: r,
  setDiffState: s
}) {
  let i = Xr(AJ);
  return jsxs("div", {
    className: _$$s.flex1.ml10.my4.$,
    children: [jsxs("div", {
      children: [jsx("span", {
        className: _$$s.colorTextSecondary.$,
        children: "Diffing "
      }), jsx("span", {
        className: _$$s.fontSemiBold.$,
        children: e.displayProperties.longName
      }), jsx("span", {
        className: _$$s.colorTextSecondary.$,
        children: " against "
      }), jsx("span", {
        className: _$$s.fontSemiBold.$,
        children: t.displayProperties.longName
      })]
    }), r && jsx("div", {
      className: _$$s.colorTextSecondary.mt8.$,
      children: jsxs(_$$Y, {
        spacing: 8,
        width: "hug-contents",
        height: "hug-contents",
        verticalAlignItems: "start",
        children: [jsxs("span", {
          children: ["Snapshot of", " ", jsx(CY, {
            onClick: () => i(r.object.id),
            className: _$$s.colorTextFigjam.fontSemiBold.$,
            trusted: !0,
            children: r.object.displayProperties.name
          }), r.type === Lp.Tree && " and full subtree", " was taken at", " ", r.time.toLocaleTimeString("en-US")]
        }), jsx(CY, {
          onClick: () => s({
            type: "refresh"
          }),
          className: _$$s.colorTextDesign.$,
          trusted: !0,
          children: "Refresh"
        }), jsx(CY, {
          onClick: () => s({
            type: "clear"
          }),
          className: _$$s.colorTextDanger.$,
          trusted: !0,
          children: "Finish"
        })]
      })
    })]
  });
}
function e3() {
  let [e, t] = useAtomValueAndSetter(C);
  let r = e.status === _$$r.LOADING;
  useEffect(() => {
    t();
  }, [t]);
  return jsx(eB, {
    label: r ? "Fetching scene graph validation failures" : "Refetch scenegraph validation failures",
    onClick: t,
    svg: r ? _$$A5 : _$$A6
  });
}
function e4({
  children: e
}) {
  return jsx("div", {
    className: _$$s.hFull.$,
    children: jsxs(_$$Y, {
      direction: "vertical",
      width: "fill-parent",
      height: "fill-parent",
      padding: 0,
      spacing: 0,
      children: [jsx(e5, {}), e]
    })
  });
}
function e5() {
  let {
    name,
    metadata
  } = useAtomWithSubscription(Cc);
  return jsxs(_$$Y, {
    direction: "horizontal",
    width: "fill-parent",
    height: 32,
    padding: 8,
    spacing: 32,
    backgroundColor: "toolbar",
    children: [name && jsx(_$$E3, {
      fontWeight: "bold",
      color: "toolbar",
      children: name
    }), metadata && Object.entries(metadata).map(([e, t]) => t && jsxs("span", {
      children: [jsxs(_$$E3, {
        color: "toolbar-secondary",
        children: [e, ": "]
      }), jsx(_$$E3, {
        color: "toolbar",
        fontFamily: "monospace",
        fontWeight: "bold",
        children: t
      })]
    }, e))]
  });
}
export let $$e60 = memo(function ({
  embedded: e = !1,
  emptyStateContent: t,
  onClose: r,
  appSelection: s,
  setAppSelection: i
}) {
  let a = useAtomWithSubscription(lu);
  switch (a.status) {
    case _$$r.INIT:
      return t ?? jsx(zG, {});
    case _$$r.LOADING:
      return jsx(zG, {});
    case _$$r.FAILURE:
      return jsx(rf, {
        error: a.error
      });
    case _$$r.SUCCESS:
  }
  if (0 === a.value.primaryResource.rootObjects.length) return jsx(rf, {
    error: "No root objects found. This is likely a bug - please report in #figmascope."
  });
  let o = jsx(e9, {
    appSelection: s,
    setAppSelection: i,
    onClose: r
  });
  return e ? o : jsx(e4, {
    children: o
  });
});
function e9({
  onClose: e,
  appSelection: t,
  setAppSelection: r
}) {
  let f = useRef(null);
  let x = useRef(null);
  let {
    windowInnerWidth
  } = _$$l();
  let [m, j] = useAtomValueAndSetter(e7);
  let [b, y] = useAtomValueAndSetter(te);
  let [v, w] = _$$i({
    onDrag(e) {
      let t = e.clientX / windowInnerWidth;
      j(`${(100 * t).toFixed(2)}%`);
    }
  });
  let [N, I] = _$$i({
    onDrag(e) {
      let t = x.current;
      if (!t) return;
      let r = (e.clientX - t.getBoundingClientRect().left) / t.clientWidth;
      y(`${(100 * r).toFixed(2)}%`);
    }
  });
  let k = Xr(jI);
  let E = Xr(JN);
  let D = useCallback(e => {
    let t = f.current;
    document.activeElement !== t && (e.keyCode === Uz.FORWARD_SLASH && t ? (t.focus(), e.preventDefault()) : e.keyCode === Uz.BRACKET_LEFT ? (analyticsEventManager.trackDefinedEvent("figmascope.select_prev_next", {
      direction: "prev",
      source: "keyboard"
    }), k()) : e.keyCode === Uz.BRACKET_RIGHT && (analyticsEventManager.trackDefinedEvent("figmascope.select_prev_next", {
      direction: "next",
      source: "keyboard"
    }), E()));
  }, [k, E]);
  let T = useAtomWithSubscription(Cc);
  window.figmaScope = T;
  window.figmaScopeScene = T;
  (function (e) {
    let [t, r] = useAtomValueAndSetter(C);
    t.status === _$$r.SUCCESS && e?.setSceneGraphValidationInfo?.(t.value);
    useEffect(() => {
      r();
    }, [r]);
  })(T);
  let A = useAtomWithSubscription(AJ);
  let F = useAtomWithSubscription(gg);
  let P = useAtomWithSubscription(tH);
  return jsx(_$$q, {
    appSelection: t,
    setAppSelection: r,
    children: jsxs("div", {
      className: zr,
      style: sx.$$if(v || N, {
        cursor: "ew-resize"
      }).$,
      onKeyDown: D,
      children: [jsxs("div", {
        className: Pd,
        style: {
          width: m
        },
        children: [jsx(eY, {
          searchRef: f
        }), jsxs(_$$o, {
          className: _H,
          children: [jsx("div", {
            ...w({
              style: {
                position: "absolute",
                top: 0,
                bottom: 0,
                right: "-3px",
                width: "5px",
                gridArea: "center",
                cursor: "ew-resize",
                zIndex: 9
              }
            })
          }), jsx(ey, {
            appSelection: t
          })]
        })]
      }), jsxs("div", {
        className: io,
        children: [jsx(eZ, {
          selectedObject: F,
          diffObject: P,
          onClose: e
        }), (F || P) && jsxs("div", {
          className: _t,
          ref: x,
          children: [jsxs(_$$o, {
            className: S3,
            style: {
              width: b
            },
            children: [jsx("div", {
              ...I({
                style: {
                  position: "absolute",
                  top: 0,
                  bottom: 0,
                  right: "-3px",
                  width: "5px",
                  gridArea: "center",
                  cursor: "ew-resize",
                  zIndex: 9
                }
              })
            }), jsx(_$$P, {
              panel: "middle",
              items: F?.rawProperties,
              diffItems: P?.rawProperties,
              extraItems: void 0
            }, A)]
          }), jsx(_$$o, {
            className: xK,
            children: jsx(_$$P, {
              panel: "right",
              items: F?.computedProperties,
              diffItems: P?.computedProperties,
              extraItems: T.getAdditionalProperties?.(A)
            }, A)
          })]
        })]
      })]
    })
  });
}
let e7 = Sv("leftPanelWidth", "35%");
let te = Sv("rightPanelWidth", "50%");
export const J = $$e60;