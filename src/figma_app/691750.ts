import { jsx, jsxs } from "react/jsx-runtime";
import { useRef, useMemo } from "react";
import { useSelector } from "react-redux";
import { E as _$$E } from "../905/632989";
import { y as _$$y } from "../905/582657";
import { U } from "../905/103637";
import { U as _$$U } from "../905/275247";
import { l as _$$l } from "../905/509505";
import { E as _$$E2 } from "../905/235326";
import { Fullscreen } from "../figma_app/763686";
import _ from "classnames";
import { generateRecordingKey } from "../figma_app/878298";
import { getI18nString } from "../905/303541";
import { isInvalidValue } from "../905/216495";
import { dT } from "../figma_app/889655";
import { Ib } from "../905/129884";
import { e as _$$e } from "../905/579635";
import { Yj, kt, xA, _F } from "../figma_app/92985";
import { $ } from "../905/330495";
import { u as _$$u } from "../figma_app/398802";
var h = _;
let v = "ui3_instance_attribution_button--iconDefault--0g0Lj";
export function $$A0(e) {
  let t = useSelector(dT);
  let {
    backingSymbolGUID,
    backingStateGroupGUID
  } = $(t);
  let A = Yj();
  let x = A?.data?.libraryKeyToFile;
  let N = kt();
  let C = useRef(!1);
  !1 === C.current && A && "loading" === A.status && (C.current = !0);
  let {
    text,
    icon,
    tooltip
  } = useMemo(() => {
    if (N) return {
      text: getI18nString("design_systems.instance_panel.from_this_file"),
      icon: jsx(_$$y, {
        className: v
      }),
      tooltip: getI18nString("design_systems.instance_panel.go_to_main_component")
    };
    if (!x) return {};
    if (xA(x)) return {
      text: x.hubFile?.currentHubFileVersion?.name,
      icon: jsx(U, {
        className: v
      }),
      tooltip: getI18nString("design_systems.instance_panel.view_library_in_community")
    };
    {
      let e = _F(x);
      return {
        text: x.file?.name,
        icon: e ? jsx(_$$U, {
          className: v
        }) : jsx(_$$l, {
          className: v
        }),
        tooltip: getI18nString("design_systems.instance_panel.go_to_main_component_nin_library")
      };
    }
  }, [x, N]);
  return !N && A && "loaded" !== A.status ? jsx("div", {
    className: "ui3_instance_attribution_button--loadingPlaceholder--6uYUv"
  }) : text && icon ? jsx(_$$e, {
    condition: !!e.isInDesignSAP,
    wrapper: e => jsx(_$$u, {
      children: e
    }),
    children: jsx("div", {
      className: h()("ui3_instance_attribution_button--instanceAttributionHeader--QC-Fh", {
        "ui3_instance_attribution_button--loading--g-7o4": C.current
      }),
      children: jsx(_$$E, {
        className: "ui3_instance_attribution_button--ui3DescriptionButton--ikoS6",
        onClick: function () {
          Fullscreen && (backingSymbolGUID && !isInvalidValue(backingSymbolGUID) ? Fullscreen.goToSymbolOrStateGroupById(backingSymbolGUID, !0) : backingStateGroupGUID && !isInvalidValue(backingStateGroupGUID) && Fullscreen.goToSymbolOrStateGroupById(backingStateGroupGUID, !0));
        },
        recordingKey: generateRecordingKey(e.recordingKey, "instanceAttributionButton"),
        htmlAttributes: {
          "data-tooltip-type": Ib.TEXT,
          "data-tooltip": tooltip
        },
        children: jsxs("div", {
          className: "ui3_instance_attribution_button--content--fh3rr",
          children: [jsx("div", {
            className: "ui3_instance_attribution_button--ui3DescriptionText--oW5ap ellipsis--ellipsis--Tjyfa",
            children: text
          }), jsxs("div", {
            className: "ui3_instance_attribution_button--iconContainer--KrzPT",
            children: [icon, jsx(_$$E2, {
              className: "ui3_instance_attribution_button--iconHover--zpzOS"
            })]
          })]
        })
      })
    })
  }) : null;
}
export const W = $$A0;
