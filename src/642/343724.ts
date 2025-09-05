import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useSelector } from "../vendor/514228";
import { bL, Y9, JU, X0, UC } from "../figma_app/57171";
import { E as _$$E } from "../905/632989";
import { K } from "../905/443068";
import { f as _$$f } from "../905/257420";
import { _ as _$$_ } from "../905/821768";
import { _ as _$$_2 } from "../905/862468";
import { g as _$$g } from "../905/687265";
import { glU, rcl, uQ6 } from "../figma_app/763686";
import { Ay } from "@stylexjs/stylex";
import { md } from "../figma_app/27355";
import { Pt } from "../figma_app/806412";
import { tx } from "../905/303541";
import { A as _$$A } from "../905/482208";
import { jo } from "../figma_app/753501";
import { A0, Br } from "../figma_app/454974";
import { q5 } from "../figma_app/516028";
import { Ib } from "../905/129884";
import { c1 } from "../figma_app/357047";
import { BZ } from "../642/998522";
import { X } from "../642/70391";
import { X as _$$X } from "../642/183469";
import { U } from "../1528/28142";
import { JT } from "../figma_app/632248";
import { x as _$$x } from "../905/719609";
import { y as _$$y } from "../figma_app/13082";
let E = {
  showAllLayersButton: {
    margin: "x1hlb6i2",
    marginInline: null,
    marginLeft: null,
    marginBlock: null,
    marginTop: null,
    marginBottom: null,
    marginRight: "x1db2dqx",
    marginInlineStart: null,
    marginInlineEnd: null,
    display: "x78zum5",
    alignItems: "x6s0dn4",
    gap: "x1rjybxy",
    rowGap: null,
    columnGap: null,
    borderRadius: "x19y5rnk",
    borderStartStartRadius: null,
    borderStartEndRadius: null,
    borderEndStartRadius: null,
    borderEndEndRadius: null,
    borderTopLeftRadius: null,
    borderTopRightRadius: null,
    borderBottomLeftRadius: null,
    borderBottomRightRadius: null,
    height: "xxk0z11",
    width: "xh8yej3",
    ..._$$g.textBodyMedium,
    "--color-icon": "xmauxvm x1x9btor",
    backgroundColor: "xv2f06h",
    color: "x1n0bwc9 x1c5oinq",
    $$css: !0
  }
};
export function $$M0({
  isLayersOpen: e,
  onToggleLayers: t,
  recordingKey: s,
  ...n
}) {
  let a = q5();
  let d = a?.thumbnailGuid || null;
  return jsxs(Fragment, {
    children: [jsxs(bL, {
      isOpen: e,
      toggle: t,
      height: "fill",
      children: [jsxs(Y9, {
        variant: "leftPanel",
        size: "lg",
        "data-onboarding-key": BZ,
        children: [jsx(JU, {
          recordingKey: Pt(s, "layersCollapsedRow"),
          htmlAttributes: {
            onContextMenu: jo
          },
          children: tx("fullscreen.pages_panel.layers_tab")
        }), e && jsx(X0, {
          children: jsx(A, {
            recordingKey: Pt(s, "layersOptionMenu")
          })
        })]
      }), jsx(UC, {
        children: jsx(_$$X, {
          ...n,
          thumbnailGuid: d
        })
      })]
    }), n.reserveBottomHeight && n.showAllLayers && jsx("div", {
      className: "x78zum5 xl56j7k x10l6tqk x1ey2m1c xu96u03 x3m8u43 xsdox4t x1yjdb4r xoegz02",
      children: jsxs(_$$E, {
        onClick: n.showAllLayers,
        ...Ay.props(E.showAllLayersButton),
        children: [jsx(_$$f, {}), tx("sites.layer_view.show_all_layers")]
      })
    })]
  });
}
function A(e) {
  let t = useSelector(e => e.mirror.appModel.keyboardShortcuts);
  let s = md(X);
  let i = "collapse-layers";
  let l = () => {
    glU?.triggerActionEnumInUserEditScope(rcl.COLLAPSE_LAYERS, {});
  };
  if (A0(uQ6.LAYERS_PANEL_OVERFLOW_MENU)) {
    let s = [{
      displayText: _$$A(i),
      callback: l,
      sideText: c1(t, i),
      rightJustifySideText: !0,
      icon: jsx(_$$_, {}),
      recordingKey: i
    }, {
      displayText: _$$A("auto-rename-layers"),
      callback: () => {
        Br({
          source: uQ6.LAYERS_PANEL_OVERFLOW_MENU,
          trackingDataSource: "layers_panel_overflow_menu"
        });
      },
      icon: jsx(_$$_2, {}),
      rightIcon: jsx(_$$y, {
        variant: _$$x.ON_MENU,
        helpUrlVariant: JT.AUTO_RENAME_LAYERS
      }),
      recordingKey: "auto-rename-layers"
    }];
    return jsx(U, {
      dropdownItems: s,
      lean: "left",
      recordingKey: e.recordingKey
    });
  }
  return s ? jsx(K, {
    "aria-label": _$$A(i),
    onClick: l,
    recordingKey: Pt(e.recordingKey, i),
    htmlAttributes: {
      "data-tooltip-type": Ib.TEXT,
      "data-tooltip": _$$A(i)
    },
    children: jsx(_$$_, {})
  }) : jsx(Fragment, {});
}
export const o = $$M0;