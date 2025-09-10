import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { memo, useMemo, createRef, useEffect, useState, useRef } from "react";
import { A as _$$A } from "../vendor/648136";
import { _m } from "../vendor/891888";
import { mergeSorted } from "../figma_app/656233";
import { useAtomWithSubscription, useAtomValueAndSetter } from "../figma_app/27355";
import { useStableMemo } from "../905/19536";
import c from "../vendor/73823";
import { analyticsEventManager } from "../905/449184";
import { parsePxNumber } from "../figma_app/783094";
import { useLatestRef } from "../figma_app/922077";
import { s as _$$s } from "../cssbuilder/589278";
import { AutoLayout, Spacer } from "../905/470281";
import { Ru } from "../905/251509";
import { Thumbnail } from "../figma_app/763686";
import { c1 } from "../905/589717";
import { HJx, EJM, hVg, k$X } from "../figma_app/27776";
import { l3, _Y, A9, fQ } from "../905/721983";
import { throwTypeError } from "../figma_app/465776";
import { PZ } from "../figma_app/766708";
import { F as _$$F } from "../905/989956";
import { y as _$$y } from "../905/829723";
import { bU } from "../figma_app/841197";
import { Cc } from "../905/545842";
import { aj, W6, Iu, F6, le, h8, Bc, KN, DA, pX, P0, a2 } from "../905/836986";
import { c6 } from "../figma_app/659187";
import { J as _$$J } from "../905/273120";
import { Z as _$$Z } from "../905/27174";
var u = c;
let v = parsePxNumber(HJx);
let I = parsePxNumber(EJM);
let E = new WeakMap();
function x(e) {
  let t = E.get(e);
  if (void 0 !== t) return t;
  let [i, n] = Thumbnail.generateThumbnailForNode(c1.fromKiwi(e), 4 * I, 4 * v, 4, {
    forceContentsOnly: !0,
    isDetatchedComponentScene: !1
  });
  if (!n || 0 === n.length || !i) {
    E.set(e, null);
    return null;
  }
  let {
    width,
    height
  } = i;
  let s = {
    url: URL.createObjectURL(new Blob([n])),
    renderWidth: width / 4,
    renderHeight: height / 4
  };
  E.set(e, s);
  return s;
}
let L = parsePxNumber(HJx);
let F = parsePxNumber(EJM);
function M({
  thumbnailInput: e
}) {
  let t = x(e);
  let i = c6(c1.fromKiwi(e));
  return t ? jsx("div", {
    className: _$$s.wFull.flex.flexShrink1.itemsCenter.justifyCenter.$,
    style: i,
    children: jsx(_$$J, {
      className: "node_thumbnail_display--thumbnailPreview--9qgOD",
      src: t.url,
      width: t.renderWidth > F ? F : t.renderWidth,
      height: t.renderHeight > L ? L : t.renderHeight
    })
  }) : jsx("span", {
    className: _$$s.noWrap.colorTextDesign.$,
    children: "Error generating thumbnail"
  });
}
function j({
  value: e
}) {
  switch (e.type) {
    case "blobIndex":
      return jsx(J, {
        ...e
      });
    case "userInputtedText":
      return jsx(W, {
        ...e
      });
    case "nonUserText":
      return jsx(K, {
        ...e
      });
    case "boolean":
      return jsx(H, {
        ...e
      });
    case "numeric":
      return jsx($, {
        ...e
      });
    case "position":
      return jsx(Y, {
        ...e
      });
    case "color":
      return jsx(q, {
        ...e
      });
    case "vector":
      return jsx(Z, {
        ...e
      });
    case "matrix":
      return jsx(X, {
        ...e
      });
    case "objectId":
      return jsx(aj, {
        id: e.value
      });
    case "nodeGuid":
      return jsx(W6, {
        guid: e.value,
        scene: e.scene
      });
    case "styleId":
      return jsx(Iu, {
        styleId: e.value,
        scene: e.scene
      });
    case "variableId":
      return jsx(F6, {
        variableId: e.value,
        scene: e.scene
      });
    case "variableOverrideId":
      return jsx(le, {
        variableOverrideId: e.value,
        scene: e.scene
      });
    case "variableCollectionId":
      return jsx(h8, {
        variableCollectionId: e.value,
        scene: e.scene
      });
    case "canvasNodeId":
      return jsx(Bc, {
        canvasNodeId: e.value,
        scene: e.scene
      });
    case "codeFileId":
      return jsx(KN, {
        codeFileId: e.value,
        scene: e.scene
      });
    case "codeLibraryId":
      return jsx(DA, {
        codeLibraryId: e.value,
        scene: e.scene
      });
    case "codeComponentId":
      return jsx(pX, {
        codeComponentId: e.value,
        scene: e.scene
      });
    case "genericGuid":
      return jsx(P0, {
        guid: e.value
      });
    case "guidPath":
      return jsx(a2, {
        guidPath: e.value
      });
    case "imageHash":
      return jsx(ee, {
        ...e
      });
    case "bytes":
      return jsx(Q, {
        ...e
      });
    case "metadata":
      return jsx(en, {
        ...e
      });
    case "error":
      return jsx(er, {
        ...e
      });
    case "nodeThumbnail":
      return jsx(M, {
        thumbnailInput: e.value
      });
    case "editScope":
      return jsx(ei, {
        ...e
      });
    case "timestamp":
      return jsx(en, {
        value: new Date(e.value).toLocaleString()
      });
    default:
      throwTypeError(e);
  }
}
let U = _$$s.noWrap;
let B = U.colorTextDesign;
let V = U.colorTextSuccess;
let G = U.colorTextDanger;
let z = U.colorTextSecondary;
function H({
  value: e
}) {
  return jsx("span", {
    className: V.$,
    children: e ? "TRUE" : "FALSE"
  });
}
function W({
  value: e
}) {
  let t = useAtomWithSubscription(Cc);
  let i = bU(e, t.sensitiveTextPolicy);
  return jsxs("span", {
    className: B.$,
    children: ['"', i, '"']
  });
}
function K({
  value: e
}) {
  return "" === e ? jsx(en, {
    value: "empty string"
  }) : jsx("span", {
    className: B.$,
    children: e
  });
}
function Y({
  value: e
}) {
  return jsxs(AutoLayout, {
    width: "hug-contents",
    children: [jsx("span", {
      className: B.$,
      children: PZ(e)
    }), jsxs("span", {
      className: z.$,
      children: ["(compressed: `", e, "`)"]
    })]
  });
}
function q({
  value: e
}) {
  let t = _$$F.format(e);
  return jsxs(AutoLayout, {
    width: "hug-contents",
    children: [jsx("span", {
      className: _$$s.inlineBlock.w12.h12.bRadius2.$,
      style: {
        backgroundColor: t
      }
    }), jsx("span", {
      className: B.$,
      children: t
    })]
  });
}
function $({
  value: e
}) {
  return jsx("span", {
    className: V.$,
    title: e.toString(),
    children: ea(e)
  });
}
function Z({
  value: e
}) {
  return jsx("span", {
    className: V.$,
    title: `<${e.x || 0}, ${e.y || 0}>`,
    children: `<${ea(e.x || 0)}, ${ea(e.y || 0)}>`
  });
}
function X({
  value: e
}) {
  let {
    m00,
    m01,
    m02,
    m10,
    m11,
    m12
  } = e;
  return jsxs("span", {
    className: V.$,
    children: ["[", [[m00, m01, m02], [m10, m11, m12]].map(e => `[${e.map(ea).join(", ")}]`).join(", "), "]"]
  });
}
function Q({
  value: e
}) {
  return jsx("span", {
    className: V.$,
    children: es(e)
  });
}
function J({
  value: e,
  scene: t
}) {
  let i = t.getBlobByIndex(e);
  return i === _$$y ? jsx(en, {
    value: `Blob ${e} :: [NOT SUPPORTED]`
  }) : i ? jsxs("span", {
    className: V.$,
    children: ["Blob ", e, " ::", " ", "string" == typeof i ? i : es(i.bytes)]
  }) : jsx(er, {
    value: `Blob ${e} :: [MISSING]`
  });
}
function ee({
  value: e
}) {
  let t = eo(e, "");
  return jsxs(Fragment, {
    children: [jsx("span", {
      className: V.$,
      children: t
    }), jsxs("span", {
      children: [jsx(et, {
        hash: t,
        name: "staging"
      }), " | ", jsx(et, {
        hash: t,
        name: "prod"
      })]
    })]
  });
}
function et({
  hash: e,
  name: t
}) {
  return jsx("a", {
    href: `https://${"staging" === t ? "staging-" : ""}admin.figma.com/admin/image/${e}`,
    children: t
  });
}
function ei({
  value: e
}) {
  return jsxs(AutoLayout, {
    width: "hug-contents",
    children: [jsx("span", {
      className: V.$,
      children: e.type
    }), jsx("span", {
      className: B.$,
      children: e.label
    }), e.editorType && jsxs("span", {
      title: "The editor type active when this scope was opened",
      className: z.$,
      children: ["(", e.editorType.toLowerCase(), ")"]
    })]
  });
}
function en({
  value: e
}) {
  return jsxs("span", {
    className: z.$,
    children: ["(", e, ")"]
  });
}
function er({
  value: e
}) {
  return jsx("span", {
    className: G.$,
    children: e
  });
}
function ea(e) {
  return "bigint" == typeof e || e % 1 == 0 ? e.toString() : e.toFixed(4);
}
function es(e) {
  return `binary[${e.length}] = ${eo(e, " ")}`;
}
function eo(e, t) {
  let i = "";
  for (let n = 0; n < e.length; ++n) {
    if (n >= 30) {
      i += "...";
      break;
    }
    i += function (e) {
      let t = e.toString(16);
      return 1 === t.length ? "0" + t : t;
    }(e[n]);
    i += t;
  }
  return i;
}
let ed = parsePxNumber(hVg);
let ec = parsePxNumber(k$X);
let $$eu0 = memo(function ({
  panel: e,
  items: t,
  diffItems: i,
  extraItems: d
}) {
  let [c, u] = useAtomValueAndSetter("middle" === e ? l3 : _Y);
  let [p, m] = useAtomValueAndSetter("middle" === e ? A9 : fQ);
  let h = useMemo(() => {
    let e = [];
    for (let t of d ?? []) e = e.concat(ey(t, 0, void 0, c, p));
    let n = e_(t ?? [], void 0, p);
    let r = null != i;
    let a = e_(i ?? [], void 0, p);
    for (let t of mergeSorted(n, a, e => eg(e, void 0))) e = r ? e.concat(eb(t.left, t.right, 0, void 0, c, p)) : e.concat(ey(t.left ?? t.right, 0, void 0, c, p));
    return e;
  }, [t, i, d, c, p]);
  let g = createRef();
  function f(e) {
    if (void 0 !== h[e]) {
      let t = h[e].value;
      if (t && "nodeThumbnail" === t.type) {
        let e = x(t.value);
        if (e) return e.renderHeight + ec;
      }
    }
    return ed;
  }
  useEffect(() => {
    g.current?.resetAfterIndex(0);
  }, [g, h]);
  return jsx(_$$A, {
    disableWidth: !0,
    children: ({
      height: t
    }) => jsx(_m, {
      ref: g,
      itemSize: f,
      itemCount: h.length,
      height: t,
      itemKey: e => h[e].expansionKey,
      itemData: {
        panel: e,
        displayedProperties: h,
        togglePropertyExpanded: u,
        togglePropertyPinned: m
      },
      width: "100%",
      children: ep
    })
  });
});
function ep({
  style: e,
  index: t,
  data: {
    panel: i,
    displayedProperties: a,
    togglePropertyExpanded: s,
    togglePropertyPinned: o
  }
}) {
  let l = a[t];
  let c = useLatestRef(l);
  let [u, p] = useState(!1);
  let m = useRef(void 0);
  useEffect(() => {
    c && null != Ru(c, l) && (clearTimeout(m.current), p(!0), m.current = setTimeout(() => p(!1), 250));
  }, [l, c]);
  useEffect(() => () => clearTimeout(m.current), []);
  let g = useStableMemo(e);
  return jsx(eh, {
    ...l,
    style: g,
    isChanging: u,
    panel: i,
    index: t,
    togglePropertyExpanded: s,
    togglePropertyPinned: o
  });
}
let em = memo(function ({
  diffValue: e,
  value: t
}) {
  return jsxs(AutoLayout, {
    width: "hug-contents",
    children: [null != e && jsx(j, {
      value: e
    }), null != e && jsx("span", {
      children: "\u21E8"
    }), null != t && jsx(j, {
      value: t
    })]
  });
});
let eh = memo(function ({
  childExpansionKeys: e,
  expansionKey: t,
  indent: i,
  isExpanded: r,
  isChanging: a,
  isPinned: s,
  isLeaf: o,
  isImage: l,
  label: d,
  index: c,
  style: u,
  value: m,
  diffValue: h,
  diffType: _,
  panel: A,
  togglePropertyExpanded: y,
  togglePropertyPinned: b
}) {
  return jsxs(_$$Z, {
    changeType: _,
    indent: l ? 0 : i,
    isChanging: a,
    isExpanded: r,
    isLeaf: o,
    isPinned: s,
    keyboardNavigationPath: [c],
    style: l ? {
      ...u,
      height: "fit-content",
      width: "100%",
      alignItems: "flex-start"
    } : u,
    toggleExpanded: i => {
      r || analyticsEventManager.trackDefinedEvent("figmascope.expand_row", {
        field: d,
        panel: A
      });
      y(t, i ? e : []);
    },
    togglePinned: l ? void 0 : () => {
      s || analyticsEventManager.trackDefinedEvent("figmascope.pin_row", {
        field: d,
        panel: A
      });
      b(t);
    },
    children: [l ? jsx(em, {
      diffValue: h,
      value: m
    }) : jsxs(Fragment, {
      children: [jsx("span", {
        className: _$$s.colorText.$,
        children: d
      }), jsx("div", {
        className: _$$s.ellipsis.noWrap.overflowHidden.alignCenter.$,
        children: jsx(em, {
          diffValue: h,
          value: m
        })
      })]
    }), jsx(Spacer, {})]
  });
});
let eg = (e, t) => {
  let i = e.key ?? e.label;
  return t ? [t, i].join(".") : i;
};
let ef = (e, t) => !!t[e];
let e_ = (e, t, i) => [...e.filter(e => ef(eg(e, t), i)), ...e.filter(e => !ef(eg(e, t), i))];
let eA = (e, t, i, n) => {
  if (e) return !1;
  let r = n[t];
  return null != r ? r : i ?? !1;
};
let ey = (e, t, i, n, r) => {
  let a = eg(e, i);
  let s = 0 === e.children.length;
  let o = e.value?.type === "nodeThumbnail";
  let l = eA(s, a, e.expandByDefault, n);
  let d = u()(e_(e.children ?? [], a, r), e => ey(e, t + 1, a, n, r));
  let c = {
    label: e.label,
    value: e.value,
    isExpanded: l,
    isLeaf: s,
    isImage: o,
    indent: t,
    expansionKey: a,
    childExpansionKeys: u()(d, e => [e.expansionKey, ...e.childExpansionKeys]),
    isPinned: ef(a, r)
  };
  return l ? [c, ...d] : [c];
};
let eb = (e, t, i, n, r, a) => {
  let s = e ?? t;
  if (!s) throw Error("Nothing to diff");
  if (e && t && eg(e, n) !== eg(t, n)) throw Error("Mismatched keys");
  let l = eg(s, n);
  let d = e_(e?.children ?? [], l, a);
  let c = e_(t?.children ?? [], l, a);
  let p = mergeSorted(d, c, e => eg(e, l));
  let m = !1;
  let h = u()(p, ({
    left: e,
    right: t
  }) => {
    let n = eb(e, t, i + 1, l, r, a);
    m = m || null != n[0].diffType;
    return n;
  });
  let g = 0 === p.length;
  let f = Ru(e, t, m);
  let A = eA(g, l, s.expandByDefault ?? !1, r);
  let y = s.value?.type === "nodeThumbnail";
  let b = {
    label: s.label,
    value: s.value,
    diffValue: e && t && f ? t?.value : void 0,
    isExpanded: A,
    isLeaf: g,
    isImage: y,
    indent: i,
    expansionKey: l,
    childExpansionKeys: u()(h, e => [e.expansionKey, ...e.childExpansionKeys]),
    isPinned: ef(l, a),
    diffType: f
  };
  return A ? [b, ...h] : [b];
};
export const P = $$eu0;