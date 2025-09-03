import _require2 from "../905/10835";
import _require from "../905/10835";
import { jsx, jsxs } from "react/jsx-runtime";
import { throwTypeError } from "../figma_app/465776";
import { N } from "../905/438674";
import { J } from "../905/614223";
import { getFeatureFlags } from "../905/601108";
import { B } from "../905/714743";
import { s as _$$s } from "../cssbuilder/589278";
import { tx, t as _$$t, YD } from "../905/303541";
import { fu } from "../figma_app/831799";
import { q5 } from "../figma_app/516028";
import { _ as _$$_ } from "../905/919117";
import { JT } from "../figma_app/632248";
import { wj, qy } from "../figma_app/862289";
import { E as _$$E } from "../905/719609";
import { z } from "../905/788559";
import { Rw, XU } from "../905/576487";
import { A as _$$A } from "../4711/136271";
export function $$b3(e, t) {
  for (let i of e) if (i.type === t) return !0;
  return !1;
}
export function $$v0(e) {
  return e && e.total > 0 ? e.progress / e.total : 0;
}
export function $$I2(e, t) {
  return e?.messageComponentKey ? function (e) {
    switch (e.messageComponentKey) {
      case Rw.UPSELL_LIBRARIES_COMPONENT_CREATION_NUDGE:
        return jsx(E, {});
      case Rw.SLIDES_REMOVE_AUTO_LAYOUT:
        {
          let {
            SlidesRemovedAutoLayoutVisualBell
          } = _require;
          return jsx(SlidesRemovedAutoLayoutVisualBell, {});
        }
      case Rw.SLIDE_CONVERSION_VISUAL_BELL:
        {
          let {
            SlideConversionVisualBell
          } = _require2;
          return jsx(SlideConversionVisualBell, {});
        }
      case Rw.DESIGN_LINTER_COPY_SELECTION:
        return jsx(x, {});
      case Rw.BOARD_TO_DECK_FEEDBACK:
        return jsx(S, {});
      case Rw.SLIDES_OUTLINE_TO_DECK_FEEDBACK:
        return jsx(w, {});
      case Rw.FIRST_DRAFT_FEEDBACK:
        return jsx(C, {
          aiTrackingContext: e.aiTrackingContext
        });
      default:
        return throwTypeError(e, `visual bell message component key ${e.messageComponentKey} does not exist`);
    }
  }(e) : e?.i18n ? function ({
    i18n: e
  }) {
    let {
      id,
      params
    } = e;
    switch (id) {
      case XU.FILE_MOVE_FOLDER_BELL_ID:
        return tx("visual_bell.file_move_folder", {
          folderName: jsx("span", {
            className: _$$s.fontSemiBold.$,
            children: params.text
          })
        });
      case XU.SITES_PUBLISH_SUCCESS_BELL_ID:
        return tx("sites.toolbar.publish_modal.published_your_site_is_live_at", {
          domain: jsx("div", {
            style: {
              display: "inline-block"
            },
            children: jsx(J, {
              brand: "seascape",
              mode: "dark",
              children: jsx(N, {
                href: `https://${params.text}`,
                newTab: !0,
                children: params.text
              })
            })
          })
        });
      case XU.FIGMAKE_PUBLISH_SUCCESS_BELL_ID:
        return tx("figmake.publish.published_your_site_is_live_at", {
          domain: jsx("div", {
            style: {
              display: "inline-block"
            },
            children: jsx(J, {
              brand: "seascape",
              mode: "dark",
              children: jsx(N, {
                href: `https://${params.text}`,
                newTab: !0,
                children: params.text
              })
            })
          })
        });
      default:
        throwTypeError(id);
    }
  }(e) : function (e, t) {
    if (!e) return "";
    let i = e.message || "";
    if (i) {
      let t = e.interpolate?.nodes;
      if (t) {
        let e = function (e) {
          switch ((e = Array.from(new Set(e))).sort(), e.length) {
            case 0:
              return "";
            case 1:
              return e[0];
            case 2:
              return getFeatureFlags().ce_localize_al_visual_bells ? _$$t("visual_bell.list_of_two_objects", {
                object1: e[0],
                object2: e[1]
              }) : `${e[0]} and ${e[1]}`;
            case 3:
              return getFeatureFlags().ce_localize_al_visual_bells ? _$$t("visual_bell.list_of_three_objects", {
                object1: e[0],
                object2: e[1],
                object3: e[2]
              }) : `${e[0]}, ${e[1]}, and ${e[2]}`;
            default:
              {
                let t = e.length - 3;
                return getFeatureFlags().ce_localize_al_visual_bells ? _$$t("visual_bell.list_of_more_than_three_objects", {
                  object1: e[0],
                  object2: e[1],
                  object3: e[2],
                  numRemaining: t
                }) : `${e[0]}, ${e[1]}, ${e[2]}, and ${t} other object${t > 1 ? "s" : ""}`;
              }
          }
        }(t);
        i = getFeatureFlags().ce_localize_al_visual_bells ? YD(i, {
          nodes: e
        }) : i.replace("{{nodes}}", e);
      }
    }
    t && t.total > 0 && (i += ` ${t.progress} / ${t.total}`);
    return i;
  }(e, t);
}
function E(e) {
  let t = q5();
  return jsx(fu, {
    name: "library upsell bell",
    properties: {
      fileKey: t?.key,
      teamId: t?.teamId
    },
    children: tx("rcs.upsell_libraries.click_in_toolbar_to_turn_into_component", {
      svg: jsx(B, {
        svg: _$$A,
        className: "upsell_libraries_visual_bell--createComponentSVG--dmDjt",
        title: _$$t("rcs.upsell_libraries.upsell_libraries.create_component_icon_title"),
        role: "img"
      })
    })
  });
}
function x() {
  _$$_();
  return jsxs("div", {
    className: _$$s.flex.itemsCenter.gap4.mr32.selectNone.$,
    children: [jsx("span", {
      className: _$$s.textBodyMediumStrong.$,
      children: tx("design_linter.copy_selection_toast.main_text")
    }), jsx("span", {
      className: _$$s.textBodyMedium.$,
      children: tx("design_linter.copy_selection_toast.sub_text")
    }), jsx(_$$E, {
      children: tx("general.beta")
    })]
  });
}
function S() {
  let {
    aiTrackingContext,
    state
  } = wj(JT.BOARD_TO_DECK);
  return state !== qy.DONE ? null : jsx(T, {
    aiTrackingContext
  });
}
function w() {
  let {
    aiTrackingContext,
    state
  } = wj(JT.SLIDES_OUTLINE_TO_DECK);
  return state !== qy.DONE ? null : jsx(T, {
    aiTrackingContext
  });
}
function C({
  aiTrackingContext: e
}) {
  return jsx(T, {
    aiTrackingContext: e
  });
}
function T({
  aiTrackingContext: e
}) {
  return jsxs("div", {
    className: _$$s.w350.flex.flexRow.justifyBetween.itemsCenter.$,
    children: [jsx("p", {
      className: _$$s.textBodyMediumStrong.alignCenter.$,
      children: tx("slides.present_summary.visual_bells.complete")
    }), jsx(z, {
      aiTrackingContext: e
    }, "feedbackButtons")]
  });
}
export function $$k1(e) {
  return e?.button ? ["primary" in e.button ? e.button.primary : e.button, "secondary" in e.button ? e.button.secondary : void 0] : [void 0, void 0];
}
export const OT = $$v0;
export const hB = $$k1;
export const zC = $$I2;
export const I2 = $$b3;