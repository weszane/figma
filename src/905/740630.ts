import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useMemo, useRef, useCallback, useState, useLayoutEffect } from "react";
import { throwTypeError } from "../figma_app/465776";
import { bL, l9, mc, c$, wv, YJ, WL } from "../905/493196";
import { h as _$$h } from "../905/270045";
import { l as _$$l } from "../905/716947";
import { useAtomWithSubscription } from "../figma_app/27355";
import { Uz } from "../905/63728";
import { _C } from "../figma_app/709893";
import { renderI18nText, getI18nString } from "../905/303541";
import { FX } from "../figma_app/12491";
import { sF } from "../figma_app/777207";
import { t as _$$t2 } from "../905/511388";
import { _G } from "../figma_app/516028";
import { Sh } from "../figma_app/803787";
import { I as _$$I } from "../figma_app/130633";
import { g as _$$g } from "../905/505662";
import { H } from "../905/286442";
import { c as _$$c } from "../905/566438";
import { R$ } from "../905/479155";
import { k as _$$k } from "../905/341245";
export function $$x0({
  showTooltipOnEllipsis: e,
  onSetAssetType: t,
  value: i,
  hideLocal: u,
  hidePresets: x,
  recordingKey: w,
  dropdownDataTestId: C
}) {
  let T = _G() ?? _$$l("");
  let k = useAtomWithSubscription(Sh);
  let {
    libraries,
    presets,
    librariesForConnectedProject,
    allLibrariesByLibraryKey
  } = _$$g();
  let D = useMemo(() => {
    switch (i.type) {
      case _$$I.ALL:
        return "all";
      case _$$I.LOCAL:
        return T;
      case _$$I.FILE:
        return i.libraryKey;
      case _$$I.RECENT:
        throw Error("RECENT is not supported");
      case _$$I.SITE_KIT:
        throw Error("asset type not supported");
      default:
        throwTypeError(i);
    }
  }, [T, i]);
  let L = useRef(null);
  let {
    active,
    target,
    focus
  } = H({
    ref: L,
    focusOptions: {
      enableAutoFocus: !1
    }
  });
  let U = {
    shortcuts: [{
      key: Uz.ENTER
    }]
  };
  _$$k({
    primaryAction: U,
    active,
    actionLabel: !1,
    target
  });
  let B = R$();
  let V = useCallback(() => {
    setTimeout(() => {
      B();
      focus();
    }, 0);
  }, [B, focus]);
  let G = useCallback(e => {
    switch (e) {
      case "all":
        t({
          type: _$$I.ALL
        });
        break;
      case T:
        t({
          type: _$$I.LOCAL
        });
        break;
      default:
        t({
          type: _$$I.FILE,
          libraryKey: e
        });
    }
    V();
  }, [T, t, V]);
  return jsxs(bL, {
    onChange: G,
    onOpenChange: V,
    value: D,
    recordingKey: w,
    children: [jsx(_$$c, {
      active,
      children: jsx(l9, {
        "data-testid": "library-select-trigger",
        ref: L,
        label: jsx(_$$h, {
          children: renderI18nText("design_systems.assets_panel.dropdown.aria_label")
        })
      })
    }), jsx(mc, {
      "data-testid": C,
      children: jsxs("div", {
        className: "x1hfn5x7",
        children: [jsx(c$, {
          value: "all",
          children: renderI18nText("design_systems.assets_panel.dropdown_type_all_libraries")
        }), k && !u && jsx(S, {
          value: T,
          text: getI18nString("design_systems.assets_panel.created_in_this_file"),
          showTooltipOnEllipsis: e
        }, T), libraries.length > 0 && jsxs(Fragment, {
          children: [jsx("div", {
            "data-testid": "subscribed-libraries-divider",
            children: jsx(wv, {})
          }, "subscribed-libraries-divider"), libraries.map(({
            libraryKey: t
          }) => jsx(S, {
            value: t,
            rightIcon: sF(t) && jsx(FX, {}),
            text: allLibrariesByLibraryKey.get(t)?.name ?? "",
            showTooltipOnEllipsis: e
          }, t))]
        }), librariesForConnectedProject.length > 0 && jsx(Fragment, {
          children: jsx(YJ, {
            groupLabel: jsx(WL, {
              children: renderI18nText("design_systems.libraries_modal.connected_project_libraries")
            }),
            children: librariesForConnectedProject.map(({
              libraryKey: t
            }) => jsx(S, {
              value: t,
              rightIcon: sF(t) && jsx(FX, {}),
              text: allLibrariesByLibraryKey.get(t)?.name ?? "",
              showTooltipOnEllipsis: e
            }, t))
          })
        }), !x && presets.length > 0 && jsxs(Fragment, {
          children: [jsx("div", {
            "data-testid": "preset-libraries-divider",
            children: jsx(wv, {})
          }, "preset-libraries-divider"), presets.map(({
            libraryKey: t
          }) => jsx(S, {
            value: t,
            rightIcon: jsx(_$$t2, {}),
            text: allLibrariesByLibraryKey.get(t)?.name ?? "",
            showTooltipOnEllipsis: e
          }, t))]
        })]
      })
    })]
  });
}
function S({
  value: e,
  rightIcon: t,
  text: i,
  showTooltipOnEllipsis: a
}) {
  let o = useRef(null);
  let [l, d] = useState(void 0);
  useLayoutEffect(() => {
    if (a) {
      let e = _C({
        textRef: o,
        text: i
      }) ? i : void 0;
      e !== l && d(e);
    } else l && d(void 0);
  }, [a, i, l]);
  return jsx(c$, {
    value: e,
    children: jsxs("div", {
      className: "x78zum5 x1txdalj",
      children: [jsx("span", {
        ref: o,
        className: "xb3r6kr xuxw1ft xlyipyv xz16r55",
        "data-tooltip": l,
        "data-tooltip-type": "text",
        children: i
      }), jsx("span", {
        className: "xayg1ih x1a6v3hu xe5c7bq",
        children: t
      })]
    })
  });
}
export const i = $$x0;