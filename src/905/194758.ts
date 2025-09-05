import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useMemo, useRef } from "react";
import { useDispatch } from "../vendor/514228";
import { ServiceCategories as _$$e } from "../905/165054";
import { d as _$$d } from "../905/976845";
import { $ } from "../905/411599";
import { X } from "../905/647103";
import { V } from "../905/900932";
import { ruz } from "../figma_app/763686";
import p from "classnames";
import { $D } from "../905/11";
import { a as _$$a } from "../905/29104";
import { t as _$$t } from "../905/303541";
import { BK } from "../905/848862";
import { Ib } from "../905/129884";
import { j } from "../905/834956";
import { JT } from "../figma_app/632248";
import { B3, Ag } from "../figma_app/862289";
import { Sn } from "../905/946805";
import { $I } from "../figma_app/322845";
import { w as _$$w, q } from "../905/112768";
import { r6 } from "../905/507950";
import { J } from "../905/494216";
var m = p;
export function $$C0({
  paint: e
}) {
  let t = useDispatch();
  let i = BK("AI_IMAGE_TOOLS_DROPDOWN");
  let p = useMemo(() => !!(e && ruz?.canEditSelectedImage()), [e]);
  let m = useMemo(() => [{
    displayText: _$$t("fullscreen.properties_panel.ai_image_tools.remove_background"),
    icon: jsx(T, {
      disabled: !p,
      children: jsx($, {})
    }),
    disabled: !p,
    callback: () => void $I({
      moduleToOpen: {
        type: "custom",
        module: jsx(_$$w, {
          source: "image-settings-panel"
        }),
        beforeModuleOpen: () => {
          let e = ruz?.getNodeImagePairsForEdit() ?? [];
          B3(JT.REMOVE_BACKGROUND);
          Ag(JT.REMOVE_BACKGROUND, J, {
            source: "image-settings-panel",
            targets: e
          }, {
            isBatch: e.length > 1
          });
        },
        name: Sn.BACKGROUND_REMOVE_TOAST
      },
      trackingData: {
        source: "image_settings_remove_background"
      }
    })
  }, {
    displayText: _$$t("fullscreen.properties_panel.ai_image_tools.upscale_image"),
    icon: jsx(T, {
      disabled: !p,
      children: jsx(X, {})
    }),
    disabled: !p,
    callback: () => void $I({
      moduleToOpen: {
        type: "custom",
        module: jsx(q, {
          source: "image-settings-panel"
        }),
        beforeModuleOpen: () => {
          let e = ruz?.getNodeImagePairsForEdit() ?? [];
          B3(JT.UPSCALE_IMAGE);
          Ag(JT.UPSCALE_IMAGE, r6, {
            source: "image-settings-panel",
            targets: e
          }, {
            isBatch: e.length > 1
          });
        },
        name: Sn.UPSCALE_IMAGE_TOAST
      },
      trackingData: {
        source: "image_settings_upscale_image"
      }
    })
  }], [p]);
  let C = useRef(null);
  let k = C.current?.getBoundingClientRect();
  k || (i.showing && $D(_$$e.AI_PRODUCTIVITY, Error("AiImageTools: dropdownBoundingRect is null")), k = new DOMRect(0, 0, 0, 0));
  let R = _$$a() ? _$$t("fullscreen.properties_panel.ai_image_tools") : _$$t("fullscreen.properties_panel.ai_image_tools_ga");
  return jsxs(Fragment, {
    children: [jsx(_$$d, {
      "aria-expanded": i.showing,
      ref: C,
      "aria-label": R,
      onClick: () => i.toggle(),
      htmlAttributes: {
        "data-tooltip-type": Ib.TEXT,
        "data-tooltip": R
      },
      children: jsx(V, {})
    }), i.showing && jsx(j, {
      dispatch: t,
      parentRect: k,
      onSelectItem: e => {
        e.callback && e.callback();
      },
      showPoint: !1,
      items: m,
      lean: "left"
    })]
  });
}
function T({
  children: e,
  disabled: t
}) {
  return jsx("div", {
    className: m()({
      "ai_image_tools--iconDisabled--aa3Z4": t
    }),
    children: e
  });
}
export const $O = $$C0;