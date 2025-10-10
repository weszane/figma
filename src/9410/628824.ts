import { jsx, jsxs } from "react/jsx-runtime";
import { useSetAtom } from "../figma_app/27355";
import { zm } from "../figma_app/384673";
import { c as _$$c } from "../figma_app/763535";
import { f as _$$f } from "../figma_app/913332";
import { FProductAccessType } from "../figma_app/191312";
import { wH } from "../figma_app/680166";
import { hV } from "../figma_app/822177";
import { WithTrackedButton } from "../figma_app/617427";
import { renderI18nText } from "../905/303541";
import { UpgradeAction } from "../905/370443";
import { getCurrentTemplate, hasTemplateEntity } from "../figma_app/622574";
import { b4 } from "../figma_app/106207";
import { useIsProgressBarHiddenOrLocked } from "../figma_app/722362";
import { selectCurrentFile } from "../figma_app/516028";
import { ITemplateType } from "../905/862883";
import { RJ } from "../figma_app/869006";
import { BannerInset } from "../figma_app/59509";
import { BannerMessage } from "../905/363675";
import { h8 } from "../figma_app/478006";
import { TrackingProvider } from "../figma_app/831799";
import { useState } from "react";
import { y as _$$y } from "../905/175043";
import { O } from "../905/936515";
function T({
  children: e,
  dataTestId: t,
  trackingContext: i = "Whiteboard Banner",
  onDismiss: n
}) {
  h8({
    isFigjamDLTBanner: !1
  });
  return jsx(TrackingProvider, {
    name: i,
    children: jsx("div", {
      className: "whiteboard_banner--root--fw3hW banner--root--0lk16 banner--banner--fgRdl",
      "data-testid": t,
      children: jsx(BannerInset, {
        variant: "brand",
        icon: null,
        onDismiss: n ?? void 0,
        children: jsx(BannerMessage, {
          children: jsx("div", {
            className: "whiteboard_banner--contentWrapper--uU9Yv banner--contentWrapper--NMmQM",
            children: e
          })
        })
      })
    })
  });
}
function w() {
  let e = useIsProgressBarHiddenOrLocked();
  let t = getCurrentTemplate();
  let i = b4();
  let n = selectCurrentFile();
  if (!hasTemplateEntity() || e) return null;
  let a = t?.publishedByUser?.handle ? jsx("div", {
    children: renderI18nText("whiteboard.delightful_toolbar.custom_template_banner.youre_viewing_a_team_template", {
      userName: jsx("b", {
        children: t?.publishedByUser.handle
      })
    })
  }) : renderI18nText("whiteboard.delightful_toolbar.custom_template_banner.youre_viewing_a_template");
  return jsx(T, {
    dataTestId: "team-template-banner",
    trackingContext: "Team Template Banner",
    children: jsxs("div", {
      className: "team_template_banner--contentContainer--AgNFD",
      children: [a, jsx(RJ, {
        viewOnly: !0,
        variant: "brand-secondary"
      }), jsx(WithTrackedButton, {
        onClick: () => {
          t && n && i({
            templateIdentifier: {
              type: ITemplateType.TeamTemplate,
              file_key: t.fileKey
            },
            templateName: t.name
          });
        },
        trackingProperties: {
          trackingDescriptor: UpgradeAction.USE_IN_NEW_FILE
        },
        children: renderI18nText("whiteboard.delightful_toolbar.custom_template_banner.new_file_button")
      })]
    })
  });
}
function k() {
  let [e, t] = useState(!0);
  return e ? jsx(T, {
    dataTestId: "version-history-banner",
    trackingContext: "Version History Banner",
    onDismiss: () => t(!1),
    children: renderI18nText("whiteboard.delightful_toolbar.version_history_banner_text", {
      selectIcon: jsx(_$$y, {}),
      handIcon: jsx(O, {})
    })
  }) : null;
}
export var $$N0 = (e => (e[e.NONE = 0] = "NONE", e[e.TEAM_TEMPLATES = 1] = "TEAM_TEMPLATES", e[e.VERSION_HISTORY = 2] = "VERSION_HISTORY", e[e.VIEW_ONLY = 3] = "VIEW_ONLY", e[e.PROVISIONAL_ACCESS = 4] = "PROVISIONAL_ACCESS", e))($$N0 || {});
export function $$A1({
  activeBannerType: e
}) {
  let t = useSetAtom(hV);
  let {
    getProvisionalAccessBanner
  } = wH();
  let u = zm();
  let p = getProvisionalAccessBanner(FProductAccessType.WHITEBOARD);
  switch (e) {
    case 1:
      return jsx(w, {});
    case 2:
      return jsx(k, {});
    case 3:
      return jsx(_$$f, {
        onClose: () => t(!0)
      });
    case 4:
      return jsx(_$$c, {
        text: p.text,
        licenseType: FProductAccessType.WHITEBOARD,
        hasSecondaryToolbelt: u,
        shouldShowCurf: p.shouldShowCurf
      });
    default:
      return null;
  }
}
export const i = $$N0;
export const _ = $$A1;