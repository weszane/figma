import { jsx } from "react/jsx-runtime";
import { memo, useMemo, useCallback } from "react";
import { f as _$$f } from "../905/949464";
import { O as _$$O } from "../905/587457";
import { N as _$$N } from "../905/301843";
import { c as _$$c } from "../905/486270";
import { zl } from "../figma_app/27355";
import u from "classnames";
import { Ay } from "../905/612521";
import { Rs } from "../figma_app/288654";
import { s as _$$s } from "../cssbuilder/589278";
import { lW } from "../figma_app/850075";
import { to } from "../figma_app/828186";
import { FAuthProviderType } from "../figma_app/191312";
import { fy7 } from "../figma_app/43951";
import { Ib } from "../905/129884";
import { Rs as _$$Rs } from "../905/991973";
import { N as _$$N2 } from "../905/438674";
import { tx, t as _$$t } from "../905/303541";
import { ex } from "../905/524523";
import { J } from "../905/614223";
import { N_ } from "../figma_app/637027";
import { b as _$$b } from "../905/217163";
import { M as _$$M } from "../figma_app/155411";
import { Ag, HA } from "../figma_app/255679";
let o = memo(function (e) {
  return _$$O() ? jsx("svg", {
    width: "16",
    height: "16",
    fill: "none",
    viewBox: "0 0 16 16",
    ...e,
    children: jsx("path", {
      fill: "var(--color-icon)",
      d: "M12.458 5.25a.75.75 0 0 1 1.041.691v4.276a1 1 0 0 1-.485.857L8.258 13.93a.5.5 0 0 1-.515 0l-4.758-2.855c-.3-.18-.486-.506-.486-.857V5.94a.75.75 0 0 1 1.137-.64L8 7.917l4.363-2.618zM3.5 10.217l4 2.4V8.781l-4-2.4zm5-1.435v3.834l3.999-2.4V6.384zM8.001 2a2 2 0 1 1-.002 4.002A2 2 0 0 1 8.001 2m0 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2"
    })
  }) : jsx("svg", {
    width: "16",
    height: "16",
    fill: "none",
    viewBox: "0 0 16 16",
    ...e,
    children: jsx("path", {
      fill: "var(--color-icon)",
      d: "M12.01 5.694a.75.75 0 0 1 .991.71v4.287c0 .379-.215.724-.553.894l-4.723 2.362a.5.5 0 0 1-.448 0l-4.723-2.362a1 1 0 0 1-.555-.894V6.404c0-.522.518-.873.993-.71l.094.04L7.5 7.94l4.414-2.207zM3 10.691l4 2V8.808l-4-2zm5-1.882v3.881l4-1.999V6.81zM7.501 2a2 2 0 1 1-.002 4.002A2 2 0 0 1 7.501 2m0 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2"
    })
  });
});
var p = u;
let S = ex("apple_ui_kit", function () {
  let e = jsx(_$$N2, {
    trusted: !1,
    newTab: !0,
    href: "https://developer.apple.com/support/downloads/terms/apple-design-resources/Apple-Design-Resources-License-20230621-English.pdf",
    children: tx("design_systems.preset_libraries.tooltip.apple_license_link")
  });
  return jsx("div", {
    className: _$$s.alignCenter.$,
    children: jsx("div", {
      children: tx("design_systems.preset_libraries.tooltip.ui_kit_tooltip", {
        licenseLink: e,
        author: _$$t("design_systems.preset_libraries.tooltip.apple")
      })
    })
  });
});
let C = ex("community_fragment_license_tooltip", function () {
  let e = jsx("div", {
    className: "x1rg5ohu x14atkfc",
    children: jsx(_$$N2, {
      trusted: !1,
      newTab: !0,
      href: "https://creativecommons.org/licenses/by/4.0/",
      children: jsx("div", {
        className: _$$s.colorTextBrand.justifyCenter.hAuto.$,
        children: tx("community.community_license")
      })
    })
  });
  return jsx("div", {
    className: _$$s.flex.flexColumn.alignCenter.justifyCenter.$,
    children: jsx(J, {
      mode: "dark",
      children: jsx("div", {
        children: tx("community.community_license_text", {
          licenseLink: e
        })
      })
    })
  });
});
let T = ex("figma_ui_kit", function () {
  let e = jsx(_$$N2, {
    trusted: !1,
    newTab: !0,
    href: "https://creativecommons.org/licenses/by/4.0/",
    children: tx("design_systems.preset_libraries.tooltip.figma_license_link")
  });
  return jsx("div", {
    className: _$$s.flex.flexColumn.alignCenter.justifyCenter.$,
    children: jsx("div", {
      children: tx("design_systems.preset_libraries.tooltip.ui_kit_tooltip", {
        licenseLink: e,
        author: _$$t("design_systems.preset_libraries.tooltip.figma")
      })
    })
  });
});
let k = ex("google_ui_kit", function () {
  let e = jsx(_$$N2, {
    trusted: !1,
    newTab: !0,
    href: "https://creativecommons.org/licenses/by/4.0/",
    children: tx("design_systems.preset_libraries.tooltip.google_license_link")
  });
  return jsx("div", {
    className: _$$s.flex.flexColumn.alignCenter.justifyCenter.$,
    children: jsx("div", {
      children: tx("design_systems.preset_libraries.tooltip.ui_kit_tooltip", {
        licenseLink: e,
        author: _$$t("design_systems.preset_libraries.tooltip.google")
      })
    })
  });
});
let N = ex("visual_assets_tooltip", function (e) {
  let t = jsx(N_, {
    className: _$$s.colorTextBrand.justifyCenter.hAuto.$,
    trusted: !1,
    target: "_blank",
    href: "https://creativecommons.org/licenses/by/4.0/",
    children: tx("community.visual_assets.license_tooltip.license_link")
  });
  return jsx("div", {
    className: _$$s.alignCenter.$,
    children: e.authorName ? tx("community.visual_assets.license_tooltip_with_link", {
      authorName: e.authorName,
      licenseLink: t
    }) : tx("community.visual_assets.license_tooltip.no_author_name_with_link", {
      licenseLink: t
    })
  });
}, e => ({
  authorName: e.getAttribute("data-tooltip-author-name")
}));
export function $$L0({
  libraryKey: e,
  isLarge: t,
  showTooltip: i,
  tooltipDelay: s,
  tooltipLocation: u,
  forSelect: I,
  redirectToHubFile: E,
  isFragment: x,
  isNewIcon: w
}) {
  var R;
  var L;
  let F = function ({
    libraryKey: e,
    showTooltip: t,
    tooltipDelay: i = 500,
    tooltipLocation: n,
    isFragment: a
  }) {
    let s = _$$M();
    let o = zl.get(_$$Rs);
    let l = to();
    let d = lW(l);
    let u = e && d[e];
    let p = Rs(fy7, {
      group: s
    }, {
      enabled: null != s
    });
    let m = useMemo(() => {
      let e = null != i ? {
        "data-tooltip-timeout-delay": i
      } : {
        "data-tooltip-show-immediately": !0
      };
      return {
        ...(null != n ? {
          [`data-tooltip-show-${n}`]: !0
        } : {}),
        ...e
      };
    }, [n, i]);
    if (u || a) return {
      "data-tooltip": C,
      "data-tooltip-type": Ib.SPECIAL,
      "data-tooltip-interactive": !0,
      "data-tooltip-max-width": 200,
      ...m
    };
    if (t && null != e) {
      if (Ag(e)) {
        let t = o?.[e]?.author_name;
        return {
          "data-tooltip": N,
          "data-tooltip-type": Ib.SPECIAL,
          "data-tooltip-interactive": !0,
          "data-tooltip-max-width": 210,
          "data-tooltip-author-name": t,
          ...m
        };
      }
      switch (HA(p, e)) {
        case FAuthProviderType.APPLE:
          return {
            "data-tooltip": S,
            "data-tooltip-type": Ib.SPECIAL,
            "data-tooltip-interactive": !0,
            "data-tooltip-max-width": 200,
            ...m
          };
        case FAuthProviderType.GOOGLE:
          return {
            "data-tooltip": k,
            "data-tooltip-type": Ib.SPECIAL,
            "data-tooltip-interactive": !0,
            "data-tooltip-max-width": 210,
            ...m
          };
        case FAuthProviderType.FIGMA:
          return {
            "data-tooltip": T,
            "data-tooltip-type": Ib.SPECIAL,
            "data-tooltip-interactive": !0,
            "data-tooltip-max-width": 210,
            ...m
          };
        case void 0:
          return;
      }
    }
  }({
    libraryKey: e,
    showTooltip: i,
    tooltipDelay: s,
    tooltipLocation: u,
    isFragment: x
  });
  let M = _$$b({
    libraryKey: e
  });
  let j = useCallback(e => {
    e.stopPropagation();
    e.preventDefault();
    M?.data?.link && Ay.redirect(M?.data?.link, "_blank");
  }, [M]);
  let U = useCallback(e => {
    e.preventDefault();
    e.stopPropagation();
  }, []);
  let B = p()("community_library_icon--icon--Y-z7F", {
    "community_library_icon--forSelect--AahTe": I,
    "community_library_icon--forRedirect--U97pQ": E
  });
  R = !!w;
  L = !!t;
  let V = R ? L ? jsx(_$$f, {
    className: B
  }) : jsx(o, {
    className: B
  }) : L ? jsx(_$$N, {
    className: B
  }) : jsx(_$$c, {
    className: B
  });
  return E && e ? jsx("div", {
    className: _$$s.flex.alignCenter.justifyCenter.flexShrink0.$,
    onClick: j,
    onMouseDown: U,
    onPointerDown: U,
    role: "button",
    tabIndex: -1,
    ...(F ?? {}),
    children: V
  }) : jsx("div", {
    className: _$$s.flex.alignCenter.justifyCenter.flexShrink0.$,
    ...(F ?? {}),
    children: V
  });
}
export function $$F1() {
  return jsx("div", {
    className: _$$s.flex.alignCenter.justifyCenter.flexShrink0.ml4.mr4.$,
    children: jsx($$L0, {
      libraryKey: void 0,
      forSelect: !0
    })
  });
}
export const E = $$L0;
export const t = $$F1;