import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { desktopAPIInstance } from "../figma_app/876459";
import { h as _$$h } from "../905/207101";
import { CloseButton } from "../905/17223";
import { Spacing, ButtonBasePrimaryTracked } from "../figma_app/637027";
import { renderI18nText, getI18nString } from "../905/303541";
import { kR } from "../c5e2cae0/894125";
import { Dw } from "../figma_app/976345";
import { selectViewAction } from "../905/929976";
import { hideModal, popModalStack } from "../905/156213";
import { WX } from "../figma_app/482142";
import { TrackingProvider } from "../figma_app/831799";
import { selectPermissionsState } from "../figma_app/212807";
import { getSelectedView } from "../figma_app/386952";
import { getUserCurrency } from "../figma_app/514043";
import { getEditableTeamsWithoutPaidAccess } from "../figma_app/345997";
import { UpgradeSteps } from "../figma_app/831101";
import { CreateUpgradeAction, TeamType } from "../figma_app/707808";
import { ModalView } from "../figma_app/918700";
import { debounce } from "../905/915765";
import { XHR } from "../905/910117";
import { I as _$$I } from "../c5e2cae0/393403";
import { LazyInputForwardRef } from "../905/408237";
import { LoadingSpinner } from "../figma_app/858013";
import { createOptimistThunk } from "../905/350402";
import { bE } from "../905/98702";
import { bE as _$$bE } from "../figma_app/240735";
import { e5 } from "../figma_app/297957";
import { trackTeamEvent } from "../figma_app/314264";
import { getUserId } from "../905/372672";
import { selectTeams } from "../905/338617";
import { G } from "../figma_app/66216";
import { KV, $g, Eh, DI, u1, GK, b as _$$b } from "../c5e2cae0/62130";
import { I as _$$I2 } from "../905/641938";
import { I as _$$I3 } from "../c5e2cae0/718426";
let L = createOptimistThunk((e, {
  teamName: t,
  selectedView: a,
  currency: s,
  onSuccess: r,
  onError: i,
  onBillingCompleteRedirectInfo: l
}) => {
  let n;
  XHR.post("/api/teams/create", {
    team_name: t
  }).then(({
    data: t
  }) => (n = "team" in t.meta ? t.meta.team : t.meta, e.dispatch(_$$bE({
    team: n
  })), trackTeamEvent("Team Created", n.id, e.getState()), G.getTeam({
    teamId: n.id
  }))).then(({
    data: t
  }) => {
    for (let a of t.meta) e.dispatch(bE({
      role: a
    }));
    r();
    e.dispatch(WX({
      teamId: n.id,
      selectedView: a,
      newTeam: !0,
      currency: s,
      ...(l ? {
        onBillingCompleteRedirectInfo: l
      } : {})
    }));
  }).catch(() => {
    i();
  });
});
function V(e) {
  let t = useDispatch();
  let a = getUserId();
  let l = useSelector(selectTeams);
  let n = useSelector(e => e.roles.byTeamId);
  let [d, m] = useState(!1);
  let [_, u] = useState(!1);
  let [h, g] = useState("");
  let x = getUserCurrency();
  let f = () => {
    t(hideModal());
  };
  let y = debounce(() => {
    m(!0);
    h ? t(L({
      teamName: h,
      selectedView: e.selectedView,
      currency: x,
      onSuccess: f,
      onError: () => {
        m(!1);
        u(!0);
      },
      onBillingCompleteRedirectInfo: e.onBillingCompleteRedirectInfo
    })) : (m(!1), u(!0));
  });
  return a && !e5({
    userId: a,
    teams: Object.values(l),
    rolesByTeamId: n
  }) ? jsxs("div", {
    "data-testid": "createTeamToUpgradeView",
    children: [jsx("p", {
      className: KV,
      children: renderI18nText("universal_upgrade_sequence.subtitle")
    }), _ && jsxs(Fragment, {
      children: [jsx(_$$I, {
        message: getI18nString("universal_upgrade_sequence.error"),
        marginTop: 16
      }), jsx(Spacing, {
        multiple: 1
      })]
    }), jsx(Spacing, {
      multiple: 2
    }), jsxs("div", {
      className: $g,
      children: [jsx("div", {
        className: Eh,
        children: jsx(LazyInputForwardRef, {
          dataTestId: "createTeamInput",
          placeholder: getI18nString("universal_upgrade_sequence.team_name.placeholder"),
          value: h || "",
          onChange: e => {
            g(e.target.value);
          },
          required: !0,
          maxLength: 255
        })
      }), jsx(ButtonBasePrimaryTracked, {
        dataTestId: "nextButton",
        className: DI,
        disabled: !h || d,
        onClick: y,
        children: d ? jsx(LoadingSpinner, {
          className: u1
        }) : renderI18nText("universal_upgrade_sequence.next")
      })]
    })]
  }) : null;
}
export function $$z0(e) {
  let [t, a] = useState("selectTeam");
  let N = useDispatch();
  let b = getSelectedView();
  let C = selectPermissionsState();
  let w = useSelector(e => e.payment.promo);
  let E = useSelector(e => e.payment.billingPeriod);
  let A = () => {
    N(popModalStack());
  };
  let I = () => {
    N(hideModal());
    e.onDone?.();
  };
  let k = t => {
    "teamUpgrade" === b.view ? N(selectViewAction({
      ...b,
      teamFlowType: CreateUpgradeAction.UPGRADE_EXISTING_TEAM,
      teamId: t.id,
      paymentStep: kR(b.paymentStep, CreateUpgradeAction.UPGRADE_EXISTING_TEAM, b.billingPeriod || null, w, b.planType || TeamType.UNDETERMINED, w ? UpgradeSteps.CONFIRM_PAY : UpgradeSteps.CHOOSE_PLAN),
      billingPeriod: e.billingPeriod || E,
      entryPoint: e.entryPoint
    })) : N(WX({
      teamId: t.id,
      selectedView: b,
      newTeam: !1,
      currency: getUserCurrency(),
      billingPeriod: e.billingPeriod,
      onBillingCompleteRedirectInfo: e.onBillingCompleteRedirectInfo,
      entryPoint: e.entryPoint,
      openInNewTab: e.openInNewTab
    }));
    I();
  };
  let P = () => {
    0 === getEditableTeamsWithoutPaidAccess(C).length ? (N(Dw({
      openInNewTab: !desktopAPIInstance
    })), a("createTeam")) : a("selectTeam");
  };
  return (_$$h(() => {
    e.plan === _$$I2.PRO && P();
  }), "selectTeam" === t) ? (() => {
    let t = getEditableTeamsWithoutPaidAccess(C);
    return jsx(TrackingProvider, {
      name: "Upgrade Select Team Modal",
      children: jsxs(ModalView, {
        hide: A,
        size: 436,
        children: [jsx("h1", {
          "data-testid": "modalTitle",
          className: GK,
          children: renderI18nText("universal_upgrade_sequence.title")
        }), jsx(CloseButton, {
          dataTestId: "closeButton",
          className: _$$b,
          onClick: A,
          innerText: getI18nString("universal_upgrade_sequence.close_modal")
        }), jsx(Spacing, {
          multiple: 2
        }), jsx(_$$I3, {
          eligibleTeams: t,
          selectTeam: k
        }), jsx(Spacing, {
          multiple: 2
        }), jsx(V, {
          selectedView: b,
          onBillingCompleteRedirectInfo: e.onBillingCompleteRedirectInfo
        })]
      })
    });
  })() : jsx(Fragment, {});
}
export const UniversalUpgradeSequence = $$z0;