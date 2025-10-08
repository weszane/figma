import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useMemo, useRef } from "react";
import { useDispatch } from "react-redux";
import { ServiceCategories } from "../905/165054";
import { DialogTriggerButton } from "../905/976845";
import { $ } from "../905/411599";
import { X } from "../905/647103";
import { V } from "../905/900932";
import { ImageToolsBindings } from "../figma_app/763686";
import p from "classnames";
import { reportError } from "../905/11";
import { a as _$$a } from "../905/29104";
import { getI18nString } from "../905/303541";
import { useDropdown } from "../905/848862";
import { KindEnum } from "../905/129884";
import { j } from "../905/834956";
import { JT } from "../figma_app/632248";
import { B3, Ag } from "../figma_app/862289";
import { ExtensionFeatureKey } from "../905/946805";
import { $I } from "../figma_app/322845";
import { RemoveBackgroundAction, UpscaleImageAction } from "../905/112768";
import { r6 } from "../905/507950";
import { J } from "../905/494216";
var m = p;
export function $$C0({
  paint: e
}) {
  let t = useDispatch();
  let i = useDropdown("AI_IMAGE_TOOLS_DROPDOWN");
  let p = useMemo(() => !!(e && ImageToolsBindings?.canEditSelectedImage()), [e]);
  let m = useMemo(() => [{
    displayText: getI18nString("fullscreen.properties_panel.ai_image_tools.remove_background"),
    icon: jsx(T, {
      disabled: !p,
      children: jsx($, {})
    }),
    disabled: !p,
    callback: () => void $I({
      moduleToOpen: {
        type: "custom",
        module: jsx(RemoveBackgroundAction, {
          source: "image-settings-panel"
        }),
        beforeModuleOpen: () => {
          let e = ImageToolsBindings?.getNodeImagePairsForEdit() ?? [];
          B3(JT.REMOVE_BACKGROUND);
          Ag(JT.REMOVE_BACKGROUND, J, {
            source: "image-settings-panel",
            targets: e
          }, {
            isBatch: e.length > 1
          });
        },
        name: ExtensionFeatureKey.BACKGROUND_REMOVE_TOAST
      },
      trackingData: {
        source: "image_settings_remove_background"
      }
    })
  }, {
    displayText: getI18nString("fullscreen.properties_panel.ai_image_tools.upscale_image"),
    icon: jsx(T, {
      disabled: !p,
      children: jsx(X, {})
    }),
    disabled: !p,
    callback: () => void $I({
      moduleToOpen: {
        type: "custom",
        module: jsx(UpscaleImageAction, {
          source: "image-settings-panel"
        }),
        beforeModuleOpen: () => {
          let e = ImageToolsBindings?.getNodeImagePairsForEdit() ?? [];
          B3(JT.UPSCALE_IMAGE);
          Ag(JT.UPSCALE_IMAGE, r6, {
            source: "image-settings-panel",
            targets: e
          }, {
            isBatch: e.length > 1
          });
        },
        name: ExtensionFeatureKey.UPSCALE_IMAGE_TOAST
      },
      trackingData: {
        source: "image_settings_upscale_image"
      }
    })
  }], [p]);
  let C = useRef(null);
  let k = C.current?.getBoundingClientRect();
  k || (i.showing && reportError(ServiceCategories.AI_PRODUCTIVITY, Error("AiImageTools: dropdownBoundingRect is null")), k = new DOMRect(0, 0, 0, 0));
  let R = _$$a() ? getI18nString("fullscreen.properties_panel.ai_image_tools") : getI18nString("fullscreen.properties_panel.ai_image_tools_ga");
  return jsxs(Fragment, {
    children: [jsx(DialogTriggerButton, {
      "aria-expanded": i.showing,
      ref: C,
      "aria-label": R,
      onClick: () => i.toggle(),
      htmlAttributes: {
        "data-tooltip-type": KindEnum.TEXT,
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