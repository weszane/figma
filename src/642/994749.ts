import { memo } from "react";
import { jsx } from "react/jsx-runtime";
import { E } from "../905/632989";
import { e as _$$e } from "../905/678389";
import { c as _$$c } from "../905/90943";
import { h as _$$h } from "../905/510194";
import { i as _$$i } from "../642/423085";
import { y as _$$y } from "../905/757816";
import { J } from "../905/614223";
import { Ay } from "@stylexjs/stylex";
import { oW } from "../905/675859";
import { Qp, JR } from "../figma_app/162641";
import { t as _$$t } from "../905/303541";
import { DP } from "../905/640017";
import { ic } from "../figma_app/688398";
import { tS } from "../figma_app/516028";
import { Fk } from "../figma_app/167249";
let c = memo(function (e) {
  return jsx("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: jsx("path", {
      fill: "var(--color-icon)",
      fillRule: "evenodd",
      d: "m13 10.85.428-.297a2.5 2.5 0 1 0-2.856 0l.428.298V13h2zm.93 3.15h-3.86L7 14.877V16h10v-1.123zM10 13v-1.627a3.5 3.5 0 1 1 4 0V13q.07 0 .137.02l3.5 1a.5.5 0 0 1 .363.48v2a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .363-.48l3.5-1A.5.5 0 0 1 10 13m-2 5.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5",
      clipRule: "evenodd"
    })
  });
});
export let $$b0 = ["TEXT", "SECTION", "SLICE", "STICKY", "CONNECTOR", "STAMP"];
export function $$C1(e) {
  let t;
  let s = Fk((e, t) => e.get(t)?.visible, e.guid);
  let b = Fk((e, t) => e.get(t)?.type, e.guid);
  let C = tS();
  let v = DP();
  let S = ic(e.guid);
  if (!b) return null;
  switch (b) {
    case "TEXT":
      t = jsx(_$$e, {
        className: "xmauxvm"
      });
      break;
    case "SECTION":
      t = jsx(_$$c, {
        className: "xmauxvm"
      });
      break;
    case "SLICE":
      t = jsx(_$$h, {
        className: "xmauxvm"
      });
      break;
    case "STICKY":
      t = jsx(_$$i, {
        className: "xmauxvm"
      });
      break;
    case "CONNECTOR":
      t = jsx(_$$y, {
        className: "xmauxvm"
      });
      break;
    case "STAMP":
      t = jsx(c, {
        className: "xmauxvm"
      });
      break;
    default:
      t = S && C ? jsx(oW, {
        className: "x5yr21d xh8yej3 x4ouu4z",
        style: {
          objectFit: "contain",
          opacity: s ? 1 : .5
        },
        src: S,
        alt: _$$t("layer_icon.thumbnail.alt_text")
      }) : jsx(Qp, {
        className: "x5yr21d xh8yej3 x4ouu4z",
        animationType: JR.LIGHT_SHIMMER
      });
  }
  return jsx(E, {
    "aria-label": _$$t("layer_icon.button.pan_to_node"),
    htmlAttributes: {
      onDoubleClick: t => {
        e.navigateAndPanTo && (t.currentTarget?.blur(), e.navigateAndPanTo(e.guid));
      }
    },
    className: "x11g6tue",
    children: jsx("span", {
      ...Ay.props(j.iconHeight(e.size), j.iconWidth(e.size), j.iconContainer, "light" === v ? j.lightBackground : j.darkBackground, e.rowSelected && j.selected),
      children: jsx(J, {
        mode: "light",
        children: t
      })
    })
  });
}
let j = {
  iconHeight: e => [{
    height: null == e ? null : "x1f5funs",
    $$css: !0
  }, {
    "--height": (e => "number" == typeof e ? e + "px" : null != e ? e : void 0)(e)
  }],
  iconWidth: e => [{
    width: null == e ? null : "x1bl4301",
    $$css: !0
  }, {
    "--width": (e => "number" == typeof e ? e + "px" : null != e ? e : void 0)(e)
  }],
  darkBackground: {
    background: "x14ju1db",
    backgroundAttachment: null,
    backgroundClip: null,
    backgroundColor: null,
    backgroundImage: null,
    backgroundOrigin: null,
    backgroundPosition: null,
    backgroundPositionX: null,
    backgroundPositionY: null,
    backgroundRepeat: null,
    backgroundSize: null,
    $$css: !0
  },
  lightBackground: {
    background: "x1usue9s",
    backgroundAttachment: null,
    backgroundClip: null,
    backgroundColor: null,
    backgroundImage: null,
    backgroundOrigin: null,
    backgroundPosition: null,
    backgroundPositionX: null,
    backgroundPositionY: null,
    backgroundRepeat: null,
    backgroundSize: null,
    $$css: !0
  },
  iconContainer: {
    stroke: "xeutv01",
    "border-radius": "x19y5rnk",
    padding: "x1i3ajwb",
    paddingInline: null,
    paddingStart: null,
    paddingLeft: null,
    paddingEnd: null,
    paddingRight: null,
    paddingBlock: null,
    paddingTop: null,
    paddingBottom: null,
    boxSizing: "x9f619",
    display: "x78zum5",
    "align-items": "x6s0dn4",
    "justify-content": "xl56j7k",
    $$css: !0
  },
  selected: {
    padding: "xyf9f8g",
    paddingInline: null,
    paddingStart: null,
    paddingLeft: null,
    paddingEnd: null,
    paddingRight: null,
    paddingBlock: null,
    paddingTop: null,
    paddingBottom: null,
    border: "x1daebow",
    borderWidth: null,
    borderInlineWidth: null,
    borderInlineStartWidth: null,
    borderLeftWidth: null,
    borderInlineEndWidth: null,
    borderRightWidth: null,
    borderBlockWidth: null,
    borderTopWidth: null,
    borderBottomWidth: null,
    borderStyle: null,
    borderInlineStyle: null,
    borderInlineStartStyle: null,
    borderLeftStyle: null,
    borderInlineEndStyle: null,
    borderRightStyle: null,
    borderBlockStyle: null,
    borderTopStyle: null,
    borderBottomStyle: null,
    borderColor: null,
    borderInlineColor: null,
    borderInlineStartColor: null,
    borderLeftColor: null,
    borderInlineEndColor: null,
    borderRightColor: null,
    borderBlockColor: null,
    borderTopColor: null,
    borderBottomColor: null,
    $$css: !0
  }
};
export const w = $$b0;
export const N = $$C1;