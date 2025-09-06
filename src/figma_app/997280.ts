import { jsx, jsxs } from "react/jsx-runtime";
import { forwardRef, useMemo } from "react";
import { useSelector } from "../vendor/514228";
import { E } from "../905/632989";
import o from "classnames";
import { renderI18nText } from "../905/303541";
import { dT } from "../figma_app/889655";
import { Bf } from "../figma_app/249941";
import { F } from "../905/280165";
import { Cj, jY, Vr } from "../figma_app/151869";
import { M_, TN, hh, kv, VZ, kh, bd } from "../905/522134";
var l = o;
let m = e => e && Array.isArray(e.selection);
let $$g1 = forwardRef((e, t) => {
  let r = useSelector(dT);
  let i = m(e) ? void 0 : e.selection?.name || e.title;
  let o = Cj(i);
  let g = e.className || M_;
  if (m(e)) return jsx("div", {
    className: g,
    children: jsx("span", {
      className: TN,
      children: renderI18nText("inspect_panel.property.selected", {
        numberOfItems: e.selection.length
      })
    })
  });
  if (!e.selection && !i) return null;
  let f = e.selection?.id;
  return e.selection?.type === "TEXT" ? jsxs("div", {
    className: g,
    children: [f && jsx(Bf, {
      className: hh,
      guid: f
    }), jsxs("span", {
      className: kv,
      children: [renderI18nText("inspect_panel.property.text"), "\xa0\xa0"]
    }), jsx(E, {
      className: l()(VZ, kh),
      onClick: o,
      actionOnPointerDown: !0,
      htmlAttributes: {
        dir: "auto"
      },
      children: i
    })]
  }) : jsxs("div", {
    className: g,
    children: [f && jsx(Bf, {
      className: hh,
      guid: f
    }), jsx(E, {
      className: l()(TN, kh),
      ref: t,
      onClick: o,
      actionOnPointerDown: !0,
      htmlAttributes: {
        dir: "auto"
      },
      children: i
    }), e.selection?.type === "INSTANCE" && !e.hideNavigateButton && jsx("div", {
      children: jsx(F, {
        instanceAndSublayerGUIDs: r,
        recordingKey: e.recordingKey
      })
    })]
  });
});
let f = () => {
  jY();
  let e = useSelector(e => e.mirror.sceneGraphSelection);
  let t = Vr();
  let r = useMemo(() => Object.keys(e), [e]);
  if (t && t.isAlive) {
    let e = t.isState && t.parentNode?.name || t.name;
    return {
      id: t.guid,
      name: e,
      type: t.type
    };
  }
  return 0 === r.length ? null : r;
};
let $$E0 = forwardRef((e, t) => {
  let r = f();
  let i = e.className || M_;
  let a = jsx($$g1, {
    title: e.title,
    className: i,
    selection: r
  });
  return e.customButtons ? jsxs("div", {
    className: bd,
    children: [a, e.customButtons]
  }) : a;
});
export const a = $$E0;
export const u = $$g1;