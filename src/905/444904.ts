import { jsx, jsxs } from "react/jsx-runtime";
import { useDispatch } from "react-redux";
import { ButtonLargeWide } from "../905/521428";
import { Link } from "../905/438674";
import { analyticsEventManager, trackEventAnalytics } from "../905/449184";
import { customHistory } from "../905/612521";
import { h as _$$h } from "../905/207101";
import { useSubscription } from "../figma_app/288654";
import { getResourceDataOrFallback } from "../905/723791";
import { u as _$$u } from "../905/684425";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { getI18nString, renderI18nText } from "../905/303541";
import { showModalHandler } from "../905/156213";
import { getUserId } from "../905/372672";
import { OrgUserIsMfaRestrictedView, FileByKey } from "../figma_app/43951";
import { UserTypeEnum } from "../figma_app/736948";
import { Ro } from "../figma_app/805373";
import { J } from "../905/71895";
import { t as _$$t2 } from "../905/751495";
export function $$I0({
  isInFileBrowser: e = !1,
  org: t,
  switchAccountsSection: i,
  fileKey: I
}) {
  let E = getUserId();
  let x = useDispatch();
  let S = useSubscription(OrgUserIsMfaRestrictedView, {
    orgId: t.id
  });
  let w = "loaded" === S.status;
  let C = w ? S.data.currentUser.baseOrgUser?.isMfaRestricted : void 0;
  let T = !0 === getResourceDataOrFallback(C);
  let k = w && (S.data.currentUser.baseOrgUser?.org?.mfaRequired === UserTypeEnum.GUESTS || S.data.currentUser.baseOrgUser?.org?.mfaRequired === UserTypeEnum.ALL_USERS);
  let R = useSubscription(FileByKey, {
    fileKey: I ?? ""
  }, {
    enabled: !!I
  });
  let N = "loaded" === R.status && R.data.file?.canRead;
  function P() {
    return jsx("div", {
      className: cssBuilderInstance.pb16.$,
      children: jsx(Ro, {
        entity: t,
        size: 64
      })
    });
  }
  return (_$$h(() => {
    analyticsEventManager.trackDefinedEvent("mfa.modal_shown", {
      orgId: t.id,
      userId: E ?? void 0,
      fileKey: I
    });
  }), k && !T || N) ? jsx("div", {
    className: cssBuilderInstance.zIndex0.$,
    children: jsx(_$$u, {
      headerImage: jsx(P, {}),
      headerText: N ? getI18nString("mfa_required_modal.regained_access_to_file.title") : getI18nString("mfa_required_modal.mfa_enabled.title"),
      secondaryText: e ? getI18nString("mfa_required_modal.mfa_enabled.subtile_for_file_browser") : getI18nString("mfa_required_modal.mfa_enabled.subtile"),
      unblockFileBrowserSidebar: e,
      children: jsx(ButtonLargeWide, {
        variant: "primary",
        type: "submit",
        onClick: () => {
          customHistory.reload("User set up MFA. Reloading to reflect changes.");
        },
        children: renderI18nText("mfa_required_modal.mfa_enabled.reload")
      })
    })
  }) : jsx("div", {
    className: cssBuilderInstance.zIndex0.$,
    children: jsxs(_$$u, {
      headerImage: jsx(P, {}),
      headerText: getI18nString("mfa_required_modal.title", {
        orgName: t.name
      }),
      secondaryText: getI18nString("mfa_required_modal.subtitle", {
        orgName: t.name
      }),
      unblockFileBrowserSidebar: e,
      children: [jsx(ButtonLargeWide, {
        variant: "primary",
        type: "submit",
        onClick: () => {
          trackEventAnalytics("Two-factor setup started");
          E ? x(showModalHandler({
            type: _$$t2
          })) : x(showModalHandler({
            type: J
          }));
        },
        children: renderI18nText("mfa_required_modal.cta")
      }), jsx("div", {
        className: cssBuilderInstance.pt20.font13.justifyCenter.fontNormal.$,
        children: jsx(Link, {
          newTab: !0,
          href: "https://help.figma.com/hc/articles/360039817634-Enable-two-factor-authentication-2FA",
          trusted: !0,
          children: renderI18nText("general.learn_more")
        })
      }), i]
    })
  });
}
export const H = $$I0;