import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState, useCallback, Component } from "react";
import { useDispatch, useSelector } from "react-redux";
import { throwError } from "../figma_app/465776";
import { ServiceCategories } from "../905/165054";
import { analyticsEventManager, trackEventAnalytics } from "../905/449184";
import { getEmailDomain, isAllowedDomain } from "../figma_app/416935";
import { customHistory } from "../905/612521";
import { useSingleEffect } from "../905/791079";
import { handleSuspenseRetainRelease } from "../figma_app/566371";
import { reportError } from "../905/11";
import { sendWithRetry } from "../905/910117";
import { ErrorBoundaryCrash, errorBoundaryFallbackTypes } from "../905/751457";
import { _ as _$$_, S as _$$S } from "../figma_app/490799";
import { SvgComponent } from "../905/714743";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { FlashActions } from "../905/573154";
import { TrackedLink } from "../905/160095";
import { renderI18nText, getI18nString } from "../905/303541";
import { resolveMessage } from "../905/231762";
import { styleBuilderInstance } from "../905/941192";
import { ViewAccessTypeEnum } from "../905/513035";
import { Up, O$, s$, GL, vm, VB } from "../figma_app/361035";
import { Vh, kV, N9 } from "../figma_app/692987";
import { gu, Tj, gS, R9, Jh } from "../figma_app/441925";
import { lk } from "../figma_app/109538";
import { SalesUpsellModalType } from "../905/380801";
import { wW, VE } from "../c5e2cae0/793139";
import { _ as _$$_2 } from "../c5e2cae0/173602";
import { On } from "../9420/975542";
import { withTrackedClick, TrackingProvider } from "../figma_app/831799";
import { ProductTierEnum, RenewalTermEnum } from "../905/712921";
import { OnboardingStepEnum } from "../figma_app/736948";
import { UpgradeSteps, BillingCycle, createEmptyAddress, isAddressEmpty, SubscriptionType } from "../figma_app/831101";
import { CreateUpgradeAction } from "../figma_app/707808";
import { Nd, li, Uu, kH, K6, ER, i9, $y, uD, Bb } from "../c5e2cae0/763339";
import { x as _$$x } from "../c5e2cae0/907085";
import { j as _$$j } from "../c5e2cae0/282622";
import { z as _$$z } from "../c5e2cae0/580036";
import { y as _$$y, I as _$$I } from "../c5e2cae0/74041";
import { f as _$$f } from "../c5e2cae0/279252";
import { W as _$$W } from "../c5e2cae0/300137";
import { UR } from "../figma_app/307841";
import { getRumLoggingConfig } from "../905/16237";
import { selectViewAction } from "../905/929976";
import { showModalHandler } from "../905/156213";
import { setCurrencyAction } from "../figma_app/482142";
import { postUserFlag } from "../905/985254";
import { useSeparateBillingShippingExperiment } from "../figma_app/297957";
import { UpgradeAction } from "../905/370443";
import { setupPricesTransform } from "../905/84777";
import { wn } from "../9420/795870";
import { trackUserEvent } from "../figma_app/314264";
import { collaboratorSet } from "../905/332483";
import { renderRequestErrorInterstitial } from "../905/3140";
import { Al } from "../9420/394825";
import { isUsingLocalBuild } from "../figma_app/298277";
import { FResourceCategoryType, FUserRoleType } from "../figma_app/191312";
import { getUserIsoCode, getUserCurrency } from "../figma_app/514043";
import { extractOrgUsersByUserId } from "../figma_app/951233";
import { sendRoleInvites } from "../905/351260";
import { lB, Ey, To } from "../905/148137";
import { AccessLevelEnum } from "../905/557142";
import { TrackingKeyEnum } from "../905/696396";
import { organizationAPIService } from "../figma_app/617654";
import { validateVatGstId } from "../905/57562";
import { n as _$$n } from "../905/861286";
import { CheckboxPrimitive } from "../905/549791";
import { g as _$$g } from "../905/125190";
import { EnhancedInput } from "../figma_app/637027";
import { TeamAvatar } from "../905/590952";
import { Q as _$$Q } from "../905/249555";
import { G as _$$G } from "../905/142901";
import { wh, n5 } from "../c5e2cae0/705272";
import { T as _$$T } from "../c5e2cae0/45116";
import { A as _$$A } from "../5724/388041";
function C({
  eligibleTeamsByTeamId: e,
  selectedTeamIds: t,
  eligibleUsersByUserId: a,
  selectedUserSeatTypes: s
}) {
  let r = {};
  let i = {};
  t.forEach(t => {
    e[t].eligibleUsers.forEach(e => {
      if (!r[e]) {
        if (s[e]) r[e] = s[e];else {
          let s = a[e];
          i[e] || (i[e] = []);
          i[e].push(s.recommendedSeatTypeByTeamId[t]);
        }
      }
    });
  });
  return {
    ...r,
    ...Object.keys(i).reduce((e, t) => (e[t] = Up(i[t]), e), {})
  };
}
let $ = withTrackedClick(function (e) {
  return jsx("div", {
    className: Nd,
    onClick: e.onClick,
    children: renderI18nText("org_self_serve.headers.cancel")
  });
});
function U(e) {
  if (e.currentStep === OnboardingStepEnum.Confirmation) return null;
  let t = [];
  let a = null;
  if (e.newTeamProps) {
    let s = {
      step: OnboardingStepEnum.ChoosePlan,
      name: getI18nString("org_self_serve.headers.choose_plan")
    };
    let r = {
      step: OnboardingStepEnum.CreateTeam,
      name: getI18nString("org_self_serve.headers.create_team")
    };
    switch (e.newTeamProps?.teamFlowType) {
      case CreateUpgradeAction.CREATE:
        t.push({
          step: OnboardingStepEnum.PseudoCreateTeam,
          name: getI18nString("org_self_serve.headers.create_team")
        });
        t.push({
          step: OnboardingStepEnum.AddCollaborators,
          name: getI18nString("org_self_serve.headers.add_team_members")
        });
        t.push(s);
        break;
      case CreateUpgradeAction.CREATE_AND_UPGRADE:
        t.push(s);
        t.push(r);
        a = OnboardingStepEnum.CreateTeam;
        break;
      case CreateUpgradeAction.UPGRADE_EXISTING_TEAM:
        t.push(s);
    }
  }
  e.canSeeTeamAndSeatSelectionSteps && (t.push({
    step: OnboardingStepEnum.TeamSelect,
    name: getI18nString("org_self_serve.headers.teams_to_upgrade")
  }), e.isCampfireCart && t.push({
    step: OnboardingStepEnum.SeatSelect,
    name: getI18nString("checkout.choose_seats")
  }), a = a ?? OnboardingStepEnum.TeamSelect);
  e.isCampfireCart ? a = a ?? OnboardingStepEnum.Payment : (t.push({
    step: OnboardingStepEnum.Details,
    name: getI18nString("org_self_serve.headers.organization_details")
  }), a = a ?? OnboardingStepEnum.Details);
  t.push({
    step: OnboardingStepEnum.Payment,
    name: getI18nString("org_self_serve.headers.payment")
  });
  t.push({
    step: OnboardingStepEnum.Review,
    name: getI18nString("org_self_serve.headers.review")
  });
  t[t.findIndex(e => e.step === a)].step = OnboardingStepEnum.Initial;
  let r = 0;
  for (let a = 0; a < t.length; a++) if (t[a].step === e.currentStep) {
    r = a;
    break;
  }
  return jsxs("div", {
    className: li,
    children: [jsx($, {
      onClick: e.onFileBrowserClick
    }), jsx("div", {
      className: Uu,
      "data-testid": "stepBreadcrumbs",
      children: t.map((t, a) => jsx(On, {
        selected: e.currentStep === t.step,
        number: a + 1,
        text: t.name,
        onClick: () => {
          analyticsEventManager.trackDefinedEvent("monetization_upgrades.checkout_breadcrumb_navigation", {
            fromStep: e.currentStep,
            toStep: t.step,
            tier: ProductTierEnum.ORG,
            isCampfireCart: !!e.isCampfireCart
          });
          let a = function (e) {
            switch (e) {
              case OnboardingStepEnum.ChoosePlan:
                return UpgradeSteps.PLAN_COMPARISON;
              case OnboardingStepEnum.AddCollaborators:
                return UpgradeSteps.ADD_COLLABORATORS;
              case OnboardingStepEnum.PseudoCreateTeam:
                return UpgradeSteps.CREATE_TEAM;
              default:
                return null;
            }
          }(t.step);
          a && e.onSelectTeamUpgradeStep ? e.onSelectTeamUpgradeStep(a) : e.setStep(t.step);
        },
        canClick: a < r,
        lightText: !0
      }, a + 1))
    })]
  });
}
function eN({
  teams: e,
  selectedTeamIds: t,
  onToggle: a,
  newTeamName: r
}) {
  return jsx("div", {
    "data-testid": "org-select-teams-step",
    children: jsxs("div", {
      className: kH,
      children: [r && jsx(eb, {
        team: {
          id: "new-team",
          name: r,
          numMembers: 1
        },
        isSelected: !0,
        onToggle: a
      }, "new-team"), e.map(e => jsx(eb, {
        team: e,
        isSelected: t.has(e.id),
        onToggle: a
      }, e.id))]
    })
  });
}
function eb({
  team: e,
  isSelected: t,
  onToggle: a
}) {
  return jsxs("div", {
    "data-testid": `select_team--${e.id}`,
    children: [jsx(CheckboxPrimitive, {
      className: _$$Q,
      checked: t,
      onChange: () => a(e.id),
      id: `select-team-${e.id}`,
      disabled: "new-team" === e.id,
      "aria-disabled": "new-team" === e.id
    }), jsxs("label", {
      htmlFor: `select-team-${e.id}`,
      className: K6,
      style: styleBuilderInstance.if(t, styleBuilderInstance.colorBorderSelected.colorBgSelectedTertiary, styleBuilderInstance.colorBg.add({
        borderColor: "var(--color-bg)"
      })).$,
      children: [jsx(TeamAvatar, {
        team: e
      }), jsxs("span", {
        className: cssBuilderInstance.maxWFull.$,
        children: [jsx("span", {
          className: cssBuilderInstance.block.maxWFull.font14.fpl__textBodyLargeLineHeight.colorText.truncate.$,
          children: e.name
        }), jsx("span", {
          className: cssBuilderInstance.block.font11.colorTextSecondary.ellipsis.$,
          children: renderI18nText("checkout.org_select_teams_member_count", {
            count: e.numMembers
          })
        })]
      }), t && jsx("div", {
        className: ER,
        children: jsx(_$$g, {})
      })]
    })]
  }, e.id);
}
function eC({
  orgDetails: e,
  onChangeFormInput: t
}) {
  return jsx(_$$x, {
    title: getI18nString("checkout.organization_details"),
    children: jsxs("div", {
      className: cssBuilderInstance.font13.$,
      children: [jsx(EnhancedInput, {
        htmlName: "legal_org_name",
        label: getI18nString("org_self_serve.details_step.legal_company_name"),
        value: e.legalOrgName,
        onChange: t
      }), jsx(EnhancedInput, {
        htmlName: "org_name",
        label: getI18nString("org_self_serve.details_step.company_display_name"),
        placeholder: getI18nString("org_self_serve.details_step.company_display_name__different_from_company_name_sub_text"),
        value: e.orgName,
        onChange: t
      })]
    })
  });
}
let eI = ({
  selectedTeamIds: e,
  selectedUserSeatTypes: t,
  additionalSeatsCount: a,
  onChangeSeat: s,
  onChangeAdditionalSeats: i
}) => {
  let l = wh(e, t, a);
  let [n, d] = useState(l);
  let o = useCallback(e => {
    try {
      d(t => function (e, t) {
        let a = n5(e, t);
        switch (a.type) {
          case "success":
            return a.value;
          case "validation":
            throw Error("failed validation");
          case "error":
            throw Error("sent error");
        }
      }(t, e));
    } catch (e) {}
  }, []);
  return {
    changeUserSeatType: useCallback((e, t) => {
      o({
        type: "changeSeatType",
        userId: e,
        seatType: t
      });
      s(e, t);
    }, [s, o]),
    setAdditionalSeats: useCallback(e => {
      o({
        type: "setAdditionalSeats",
        additionalSeatCounts: e
      });
      i(e);
    }, [i, o]),
    selectSeatsState: n
  };
};
function ek({
  users: e,
  selectedUserSeatTypes: t,
  selectedTeamIds: a,
  additionalSeatsCount: r,
  onChangeSeat: i,
  onChangeAdditionalSeats: l,
  currency: n
}) {
  let d = _$$G({
    currency: n,
    tier: ProductTierEnum.ORG,
    renewalTerm: RenewalTermEnum.YEAR,
    showCents: !1
  });
  let [o] = handleSuspenseRetainRelease(d);
  if (null === o.data) throw Error("No seat types data");
  let c = o.data;
  let {
    changeUserSeatType,
    selectSeatsState,
    setAdditionalSeats
  } = eI({
    selectedTeamIds: a,
    selectedUserSeatTypes: t,
    additionalSeatsCount: r,
    onChangeSeat: i,
    onChangeAdditionalSeats: l
  });
  return jsx("div", {
    "data-testid": "select-seats-step-org",
    children: jsx(_$$T, {
      users: e,
      seatTypes: c,
      changeUserSeatType,
      selectSeatsState,
      setAdditionalSeats,
      tier: ProductTierEnum.ORG
    })
  });
}
export class $$eM2 extends Component {
  constructor(e) {
    super(e);
    this.canSeeTeamAndSeatSelectionSteps = () => Object.keys(this.state.eligibleTeamsByTeamId).length > 0 || this.state.loading || !!this.props.newTeamProps;
    this.effectiveStep = () => this.props.step === OnboardingStepEnum.Initial || this.props.step === OnboardingStepEnum.ChoosePlan ? this.props.newTeamProps?.teamFlowType === CreateUpgradeAction.CREATE_AND_UPGRADE ? OnboardingStepEnum.CreateTeam : this.canSeeTeamAndSeatSelectionSteps() ? OnboardingStepEnum.TeamSelect : OnboardingStepEnum.Payment : this.props.step;
    this.setStep = e => {
      this.props.dispatch(selectViewAction({
        view: "orgSelfServe",
        step: e,
        orgMigrated: !1,
        newTeamProps: this.props.newTeamProps,
        upsellSource: this.props.upsellSource
      }));
      this.setState(e => ({
        payment: {
          ...e.payment,
          card: null
        }
      }));
    };
    this.trackError = e => {
      analyticsEventManager.trackDefinedEvent("monetization_upgrades.checkout_payment_error", {
        message: e,
        paymentFlow: wn.ORG_UPGRADE,
        paymentMethodType: lB.CARD,
        isCampfireCart: !0
      });
    };
    this.onSubmit = () => {
      let e = this.effectiveStep();
      switch (e) {
        case OnboardingStepEnum.CreateTeam:
          this.state.newTeamName?.trim() && this.setStep(OnboardingStepEnum.TeamSelect);
          break;
        case OnboardingStepEnum.AddCollaborators:
          this.setStep(OnboardingStepEnum.Payment);
          break;
        case OnboardingStepEnum.PseudoCreateTeam:
          this.setStep(OnboardingStepEnum.TeamSelect);
          break;
        case OnboardingStepEnum.TeamSelect:
          let t = C({
            eligibleTeamsByTeamId: this.state.eligibleTeamsByTeamId,
            selectedTeamIds: this.state.selectedTeamIds,
            eligibleUsersByUserId: this.state.eligibleUsersByUserId,
            selectedUserSeatTypes: this.state.selectedUserSeatTypes
          });
          this.setState({
            selectedUserSeatTypes: t
          });
          this.setStep(OnboardingStepEnum.SeatSelect);
          break;
        case OnboardingStepEnum.SeatSelect:
          this.setStep(OnboardingStepEnum.Payment);
          break;
        case OnboardingStepEnum.Payment:
          this.onSubmitPaymentAndAddress();
          break;
        case OnboardingStepEnum.Review:
          this.onSubmitPurchaseOrder();
          break;
        case OnboardingStepEnum.Confirmation:
          break;
        default:
          throwError(e);
      }
    };
    this.getNextButtonText = () => {
      let e = this.effectiveStep();
      switch (e) {
        case OnboardingStepEnum.CreateTeam:
        case OnboardingStepEnum.PseudoCreateTeam:
        case OnboardingStepEnum.AddCollaborators:
          return getI18nString("org_self_serve.create_team_step.next_select_team");
        case OnboardingStepEnum.TeamSelect:
          return getI18nString("checkout.org_self_serve.next_select_seats");
        case OnboardingStepEnum.SeatSelect:
          return getI18nString("org_self_serve.payment_step.next_payment");
        case OnboardingStepEnum.Payment:
          return getI18nString("org_self_serve.review_step.next_review");
        case OnboardingStepEnum.Review:
        case OnboardingStepEnum.Confirmation:
          return "";
        default:
          throwError(e);
      }
    };
    this.getIsNextButtonDisabled = () => {
      let e = this.effectiveStep();
      switch (e) {
        case OnboardingStepEnum.CreateTeam:
        case OnboardingStepEnum.PseudoCreateTeam:
          return !this.state.newTeamName;
        case OnboardingStepEnum.TeamSelect:
          return this.state.loading;
        case OnboardingStepEnum.Payment:
          return this.state.apiPending || !this.state.orgDetails.legalOrgName;
        case OnboardingStepEnum.Review:
        case OnboardingStepEnum.Confirmation:
        case OnboardingStepEnum.AddCollaborators:
        case OnboardingStepEnum.SeatSelect:
          return !1;
        default:
          throwError(e);
      }
    };
    this.getIsNextButtonLoading = () => this.state.loading || this.state.apiPending;
    this.onTeamToggle = e => {
      let t = !this.state.selectedTeamIds.has(e);
      analyticsEventManager.trackDefinedEvent("monetization_upgrades.checkout_change_team_selection", {
        teamId: e,
        selectedTeam: t
      });
      t ? this.setState(t => ({
        selectedTeamIds: t.selectedTeamIds.add(e)
      })) : this.setState(t => (t.selectedTeamIds.$$delete(e), {
        selectedTeamIds: t.selectedTeamIds
      }));
    };
    this.onCardReady = e => {
      let t = {
        ...this.state.payment,
        card: e
      };
      this.setState({
        payment: t
      });
    };
    this.onAddressChange = e => {
      let t = {
        ...this.state.payment,
        address: e
      };
      this.setState({
        payment: t
      });
    };
    this.onShippingAddressChange = e => {
      this.setState({
        shippingAddress: e
      });
    };
    this.onNameOnPaymentMethodChange = e => {
      this.setState({
        nameOnPaymentMethod: e.trim()
      });
    };
    this.onClearToken = () => {
      let e = {
        ...this.state.payment,
        token: null
      };
      this.setState({
        payment: e
      });
    };
    this.onVatIdChange = e => {
      this.setState({
        vatId: e
      });
    };
    this.onRegionalVatIdChange = e => {
      this.setState({
        regionalVatId: e
      });
    };
    this.onVatValidationFail = e => {
      this.trackError(e);
      this.setState({
        apiPending: !1,
        paymentError: e
      });
    };
    this.onChangeNewTeamName = e => {
      this.setState({
        newTeamName: e.trim()
      });
    };
    this.onChangeOrgDetails = e => {
      let t = e.target.name;
      let a = e.target.value;
      if (!t) {
        e.preventDefault();
        console.error("HTMLInputElement is missing name attribute:", e.target);
        return;
      }
      let s = this.state.orgDetails;
      switch (t) {
        case "actor_name":
          s.actorName = a.trim();
          break;
        case "legal_org_name":
          s.legalOrgName = a.trim();
          break;
        case "org_name":
          s.orgName = a.trim();
      }
      this.setState({
        orgDetails: s
      });
    };
    this.contactSales = () => {
      this.props.dispatch(showModalHandler({
        type: lk,
        data: {
          source: SalesUpsellModalType.ORG_SELF_SERVE_UPGRADE_MODAL
        }
      }));
    };
    this.onFileBrowserClick = () => {
      this.props.newTeamProps && Al(this.props.user.id);
      customHistory.redirect("/files/recent");
    };
    this.updateAdditionalEmptySeats = e => {
      this.setState({
        additionalSeatCounts: e
      });
    };
    this.renderPurchaseSummary = () => {
      let e = this.effectiveStep() === OnboardingStepEnum.TeamSelect ? null : O$(this.state.selectedUserSeatTypes, this.state.additionalSeatCounts);
      return jsx(_$$z, {
        billingInterval: BillingCycle.YEAR,
        buttonText: this.getNextButtonText(),
        canEnforcePaidSeatMinimum: this.effectiveStep() === OnboardingStepEnum.SeatSelect,
        countByBillableProductKey: e,
        currency: this.state.currency,
        footer: jsxs("div", {
          className: i9,
          children: [jsx(SvgComponent, {
            svg: _$$A,
            className: $y
          }), jsx("p", {
            children: renderI18nText("org_self_serve.purchase_summary.have_questions", {
              contactSales: jsx("span", {
                className: uD,
                onClick: this.contactSales,
                children: renderI18nText("org_self_serve.purchase_summary.contact_our_sales_team")
              })
            })
          })]
        }),
        isButtonDisabled: this.getIsNextButtonDisabled(),
        isLoading: this.getIsNextButtonLoading(),
        onClickNext: this.onSubmit,
        onSwitchCurrency: e => {
          this.props.dispatch(setCurrencyAction({
            currency: e
          }));
          this.setState({
            currency: e
          });
        },
        tier: ProductTierEnum.ORG,
        title: getI18nString("checkout.your_organization_plan"),
        trackingProperties: {
          selectedTeamIds: gu(Array.from(this.state.selectedTeamIds)),
          selectedUserSeatTypes: Tj(this.state.selectedUserSeatTypes),
          countBySeatType: gS(e)
        }
      });
    };
    this.state = {
      loading: !0,
      eligibleTeamsByTeamId: {},
      selectedTeamIds: new Set(),
      eligibleUsersByUserId: {},
      selectedUserSeatTypes: {},
      additionalSeatCounts: {
        collaborator: 0,
        developer: 0,
        expert: 0
      },
      payment: {
        card: null,
        last4: null,
        address: createEmptyAddress(getUserIsoCode())
      },
      apiPending: !1,
      stripeCustomerId: null,
      taxRate: 0,
      orgDetails: {
        actorName: "",
        actorEmail: this.props.user.email,
        legalOrgName: "",
        orgName: ""
      },
      paymentError: null,
      currency: this.props.currency,
      shippingAddress: createEmptyAddress(getUserIsoCode()),
      nameOnPaymentMethod: "",
      vatId: null,
      regionalVatId: null,
      newTeamName: this.props.newTeamProps?.newTeamName || null,
      inviteEmails: this.props.newTeamProps?.inviteEmails || []
    };
  }
  componentDidMount() {
    this.fetchTeamEligibleUpgrades();
  }
  fetchTeamEligibleUpgrades() {
    return organizationAPIService.getEligibleUpgrades().catch(e => {
      let t = e.data.message;
      this.props.dispatch(selectViewAction({
        view: "recentsAndSharing"
      }));
      this.props.dispatch(FlashActions.error(t || getI18nString("org_self_serve.confirmation_step.sorry_there_was_an_error_processing_your_request_refresh_and_try_again")));
      this.setState({
        loading: !1
      });
      return Promise.reject();
    }).then(({
      data: e
    }) => {
      R9({
        eligibleTeamIds: e.meta.eligible_teams.map(e => e.id),
        eligibleTeamUsers: e.meta.eligible_team_users,
        tier: ProductTierEnum.ORG,
        step: this.effectiveStep()
      });
      let {
        eligibleTeamsByTeamId,
        selectedTeamIds,
        eligibleUsersByUserId,
        selectedUserSeatTypes
      } = function (e, t) {
        let a = e.reduce((e, t) => (e[t.id] = {
          ...t,
          eligibleUsers: new Set()
        }, e), {});
        let s = new Set(Object.keys(a));
        let r = {};
        t.forEach(e => {
          let t = e.user;
          let s = t.id;
          r[s] || (r[s] = {
            id: s,
            email: t.email,
            handle: t.handle,
            img_url: t.img_url,
            recommendedSeatTypeByTeamId: {},
            teamIds: []
          });
          r[s].recommendedSeatTypeByTeamId[e.team_id] = e.recommended_seat_type?.key ?? ViewAccessTypeEnum.VIEW;
          r[s].teamIds.push(e.team_id);
          a[e.team_id] && a[e.team_id].eligibleUsers.add(s);
        });
        let i = C({
          eligibleTeamsByTeamId: a,
          selectedTeamIds: s,
          eligibleUsersByUserId: r,
          selectedUserSeatTypes: {}
        });
        return {
          eligibleTeamsByTeamId: a,
          selectedTeamIds: s,
          eligibleUsersByUserId: r,
          selectedUserSeatTypes: i
        };
      }(e.meta.eligible_teams, e.meta.eligible_team_users);
      this.setState({
        loading: !1,
        eligibleTeamsByTeamId,
        selectedTeamIds,
        eligibleUsersByUserId,
        selectedUserSeatTypes
      });
    });
  }
  componentDidUpdate(e, t) {
    getEmailDomain(e.user.email) !== getEmailDomain(this.props.user.email) && customHistory.redirect("/purchase-organization");
  }
  getSubtotal() {
    let e = O$(this.state.selectedUserSeatTypes, this.state.additionalSeatCounts) || collaboratorSet.dict(e => 0);
    return Vh(e, s$(this.props.productPriceBySeatType));
  }
  getTaxTotal() {
    let e = O$(this.state.selectedUserSeatTypes, this.state.additionalSeatCounts) || collaboratorSet.dict(e => 0);
    return kV(e, s$(this.props.productPriceBySeatType), this.state.taxRate);
  }
  getTotal() {
    let e = O$(this.state.selectedUserSeatTypes, this.state.additionalSeatCounts) || collaboratorSet.dict(e => 0);
    return N9(e, s$(this.props.productPriceBySeatType), this.state.taxRate);
  }
  getDisplayedCostBreakdown() {
    let e = this.getSubtotal();
    let t = this.getTaxTotal();
    let a = this.getTotal();
    return GL({
      subtotal: e,
      taxTotal: t,
      total: a
    });
  }
  async onSubmitPaymentAndAddress() {
    let e = this.state.payment.address;
    let t = this.state.payment.card;
    let a = this.state.vatId;
    let s = this.state.regionalVatId;
    if (null === t) {
      let e = getI18nString("org_self_serve.payment_step.sorry_please_wait");
      this.trackError(e);
      this.setState({
        paymentError: e
      });
      return;
    }
    if (this.setState({
      apiPending: !0
    }), a && !(await validateVatGstId(a, e.country, () => {}, this.onVatValidationFail))) return;
    if (this.props.canSeeBillingAddressExp && !this.state.nameOnPaymentMethod) {
      let e = getI18nString("org_self_serve.payment_step.name_on_payment_method_is_required");
      this.trackError(e);
      this.setState({
        apiPending: !1,
        paymentError: e
      });
      return;
    }
    if (s && !(await validateVatGstId(s, e.country, () => {}, this.onVatValidationFail, e.region))) return;
    let r = this.props.canSeeBillingAddressExp ? {
      name: this.state.nameOnPaymentMethod,
      address_line1: e.line1,
      address_line2: e.line2,
      address_country: e.country,
      address_city: e.city,
      address_state: e.region,
      address_zip: e.postal_code
    } : void 0;
    Ey(t, r).then(t => {
      if (!t.error && t.token) return To(t.token.id, this.getSubtotal(), this.state.currency).then(t => this.props.canSeeBillingAddressExp ? sendWithRetry.post("/api/orgs/validate_payment", {
        payment_method: t.payment_method,
        billing_address: e,
        shipping_address: isAddressEmpty(this.state.shippingAddress) ? null : this.state.shippingAddress,
        selected_currency: this.state.currency,
        vat_gst_id: this.state.vatId,
        regional_vat_gst_id: this.state.regionalVatId || null
      }) : sendWithRetry.post("/api/orgs/validate_payment", {
        payment_method: t.payment_method,
        address: e,
        selected_currency: this.state.currency,
        vat_gst_id: this.state.vatId,
        regional_vat_gst_id: this.state.regionalVatId || null
      })).catch(e => {
        let t = e.data?.message || e.message;
        this.trackError(t);
        this.setState({
          apiPending: !1,
          paymentError: t
        });
        return Promise.reject();
      }).then(({
        data: e
      }) => {
        this.setState(a => ({
          payment: {
            ...a.payment,
            last4: t.token?.card?.last4 || null
          },
          stripeCustomerId: e.meta.stripe_customer_id,
          taxRate: e.meta.tax_percent,
          apiPending: !1
        }), () => this.setStep(OnboardingStepEnum.Review));
      });
      {
        let e = t.error?.message || getI18nString("org_self_serve.payment_step.there_was_an_error_processing_your_payment_please_try_again");
        this.trackError(e);
        this.setState({
          apiPending: !1,
          paymentError: e
        });
      }
    });
  }
  onSubmitPurchaseOrder() {
    this.props.dispatch(postUserFlag({
      completed_org_cart_flow: !0
    }));
    let e = O$(this.state.selectedUserSeatTypes, this.state.additionalSeatCounts);
    let t = this.getDisplayedCostBreakdown();
    let a = vm(this.props.productPriceBySeatType);
    let s = {
      legal_org_name: this.state.orgDetails.legalOrgName,
      org_name: this.state.orgDetails.orgName || this.state.orgDetails.legalOrgName,
      team_ids: Array.from(this.state.selectedTeamIds),
      requested_seats: e,
      selected_user_seat_types: VB(this.state.selectedUserSeatTypes),
      stripe_customer_id: this.state.stripeCustomerId,
      selected_currency: this.state.currency,
      vat_gst_id: this.state.vatId || null,
      regional_vat_gst_id: this.state.regionalVatId || null,
      displayed_cost_breakdown: t,
      displayed_price_keys: a
    };
    this.state.newTeamName && (s.new_team_options = {
      team_name: this.state.newTeamName,
      add_to_org: !0
    });
    this.setState({
      apiPending: !0
    });
    sendWithRetry.post("/api/orgs", s).catch(s => (this.props.dispatch(FlashActions.error(resolveMessage(s, s.data?.message || getI18nString("org_self_serve.review_step.sorry_there_was_an_error_please_try_again")))), reportError(ServiceCategories.BILLING_EXPERIENCE, Error(`[Billing] Org checkout API failed: ${s.data?.message}`), {
      extra: {
        eligibleTeamsByTeamId: this.state.eligibleTeamsByTeamId,
        eligibleUsersByUserId: this.state.eligibleUsersByUserId,
        selectedUserSeatTypes: this.state.selectedUserSeatTypes,
        selectedTeamIds: Array.from(this.state.selectedTeamIds),
        userId: this.props.user.id,
        countBySeatType: e,
        displayedCostBreakdown: t,
        displayedPriceKeys: a
      }
    }), this.setState({
      apiPending: !1
    }), Promise.reject())).then(e => {
      this.setState({
        apiPending: !1
      }, () => this.setStep(OnboardingStepEnum.Confirmation));
      this.state.inviteEmails.length && e.data.meta.new_team && this.props.dispatch(sendRoleInvites({
        emails: this.state.inviteEmails,
        resourceType: FResourceCategoryType.TEAM,
        resourceIdOrKey: e.data.meta.new_team.id,
        level: AccessLevelEnum.EDITOR,
        teamId: e.data.meta.new_team.id
      }));
      this.state.newTeamName && e.data.meta.new_team && Al(this.props.user.id);
      trackEventAnalytics("Self Serve Org Purchased (GTM)");
      trackUserEvent("Self Serve Org Purchased", {
        user: this.props.user
      }, {
        org_name: s.org_name,
        upsellSource: this.props.upsellSource
      });
    });
  }
  render() {
    let e;
    let t = this.effectiveStep();
    let a = Object.values(this.state.eligibleTeamsByTeamId).map(e => ({
      id: e.id,
      name: e.name,
      img_url: e.img_url,
      numMembers: e.eligibleUsers.size
    }));
    if (t === OnboardingStepEnum.Review) {
      let t = O$(this.state.selectedUserSeatTypes, this.state.additionalSeatCounts) || {};
      e = jsx(_$$j, {
        billingAddress: this.state.payment.address,
        billingInterval: BillingCycle.YEAR,
        countByBillableProductKey: t,
        currency: this.state.currency,
        displayName: this.state.orgDetails.orgName || this.state.orgDetails.legalOrgName,
        isRequestPending: this.state.apiPending,
        legalName: this.state.orgDetails.legalOrgName,
        navigateToEditDetails: () => this.setStep(OnboardingStepEnum.Payment),
        onSubmit: this.onSubmit,
        onSubmitTrackingProperties: {
          selectedTeamIds: gu(Array.from(this.state.selectedTeamIds)),
          selectedUserSeatTypes: Tj(this.state.selectedUserSeatTypes),
          countBySeatType: gS(O$(this.state.selectedUserSeatTypes, this.state.additionalSeatCounts)),
          domain: getEmailDomain(this.props.user.email),
          taxPercent: this.state.taxRate,
          subtotal: this.getSubtotal(),
          taxTotal: this.getTaxTotal(),
          total: this.getTotal()
        },
        shippingAddress: this.state.shippingAddress,
        taxPercent: this.state.taxRate,
        tier: ProductTierEnum.ORG,
        title: getI18nString("checkout.upgrade_to_an_organization_plan"),
        userEmail: this.state.orgDetails.actorEmail
      });
    } else e = t === OnboardingStepEnum.Confirmation ? jsx(_$$_2, {
      totalCents: this.getTotal(),
      orgMigrated: this.props.orgMigrated,
      onFileBrowserClick: this.onFileBrowserClick,
      orgPayment: this.state.payment,
      currency: this.state.currency
    }) : jsxs(Fragment, {
      children: [this.props.isOrgAdmin && jsx(wW, {
        onContactSales: this.contactSales,
        onFileBrowserClick: this.onFileBrowserClick
      }), isAllowedDomain(this.props.user.email) && jsx(VE, {
        onFileBrowserClick: this.onFileBrowserClick
      }), jsxs("div", {
        style: styleBuilderInstance.if(t === OnboardingStepEnum.CreateTeam, styleBuilderInstance.flex.justifyCenter, styleBuilderInstance.grid.add({
          gridTemplateColumns: "1fr 280px",
          gap: "48px"
        })).$,
        children: [t === OnboardingStepEnum.CreateTeam && jsx("div", {
          className: Bb,
          children: jsx(_$$y, {
            type: _$$I.ORG,
            teamName: this.state.newTeamName || "",
            setTeamName: this.onChangeNewTeamName,
            onNext: this.onSubmit
          })
        }), t === OnboardingStepEnum.TeamSelect && (this.state.loading ? jsx(_$$f, {}) : jsx(eN, {
          teams: a,
          selectedTeamIds: this.state.selectedTeamIds,
          onToggle: this.onTeamToggle,
          newTeamName: this.state.newTeamName
        })), t === OnboardingStepEnum.SeatSelect && (this.state.loading ? jsx(_$$f, {}) : jsx(ek, {
          users: function ({
            eligibleUsersByUserId: e,
            eligibleTeamsByTeamId: t,
            selectedTeamIds: a
          }) {
            let s = [];
            Object.values(e).filter(e => e.teamIds.some(e => a.includes(e))).forEach(e => {
              let r = e.teamIds;
              let i = a.filter(e => r.includes(e)).map(e => t[e]);
              let l = 1 === i.length ? i[0].name : getI18nString("checkout.multiple_teams_label");
              s.push({
                id: e.id,
                handle: e.handle,
                email: e.email,
                img_url: e.img_url,
                teams: l
              });
            });
            return s;
          }({
            eligibleUsersByUserId: this.state.eligibleUsersByUserId,
            eligibleTeamsByTeamId: this.state.eligibleTeamsByTeamId,
            selectedTeamIds: Array.from(this.state.selectedTeamIds)
          }),
          selectedTeamIds: Array.from(this.state.selectedTeamIds),
          selectedUserSeatTypes: this.state.selectedUserSeatTypes,
          additionalSeatsCount: this.state.additionalSeatCounts,
          currency: this.state.currency,
          onChangeSeat: (e, t) => {
            this.setState({
              selectedUserSeatTypes: {
                ...this.state.selectedUserSeatTypes,
                [e]: t
              }
            });
          },
          onChangeAdditionalSeats: this.updateAdditionalEmptySeats
        })), t === OnboardingStepEnum.Payment && jsxs("form", {
          "data-testid": "org-payment-and-details-step",
          children: [jsx(eC, {
            orgDetails: this.state.orgDetails,
            onChangeFormInput: this.onChangeOrgDetails
          }), jsx("div", {
            className: cssBuilderInstance.pt24.$,
            children: jsxs(_$$x, {
              title: getI18nString("checkout.payment_details"),
              children: [this.state.paymentError && jsx("div", {
                className: cssBuilderInstance.mb20.$,
                children: jsx(_$$_, {
                  color: _$$S.ERROR,
                  text: this.state.paymentError
                })
              }), jsx(_$$n, {
                allowFullWidthForm: !0,
                billingAddress: this.state.payment.address,
                canSeeBillingAddressExp: this.props.canSeeBillingAddressExp,
                cardId: "team-upgrade-page-card",
                id: "team-upgrade-page-form",
                isCheckoutFlow: !0,
                isCommunityCheckout: !1,
                nameOnPaymentMethod: this.state.nameOnPaymentMethod,
                onBillingAddressChange: this.onAddressChange,
                onCardReady: this.onCardReady,
                onClearToken: this.onClearToken,
                onRegionalVatIdChange: this.onRegionalVatIdChange,
                onShippingAddressChange: this.onShippingAddressChange,
                onVatIdChange: this.onVatIdChange,
                regionalVatId: this.state.regionalVatId,
                setNameOnPaymentMethod: this.onNameOnPaymentMethodChange,
                shippingAddress: this.state.shippingAddress,
                vatId: this.state.vatId
              })]
            })
          })]
        }), t !== OnboardingStepEnum.CreateTeam && this.renderPurchaseSummary()]
      })]
    });
    return jsxs(TrackingProvider, {
      name: TrackingKeyEnum.ORG_CHECKOUT_FLOW,
      properties: {
        step: t,
        currency: this.state.currency,
        upsellSource: this.props.upsellSource,
        entryPoint: this.props.entryPoint,
        eligibleTeamIds: gu(Object.keys(this.state.eligibleTeamsByTeamId)),
        prices: Jh(this.props.productPriceBySeatType)
      },
      enabled: !this.state.loading,
      trackingOptions: getRumLoggingConfig(),
      children: [t !== OnboardingStepEnum.Confirmation && jsx("div", {
        className: cssBuilderInstance.sticky.top0.zIndexTopBar.selectNone.$,
        children: jsx(U, {
          currentStep: this.props.step,
          setStep: this.setStep,
          canSeeTeamAndSeatSelectionSteps: this.canSeeTeamAndSeatSelectionSteps(),
          onFileBrowserClick: this.onFileBrowserClick,
          newTeamProps: this.props.newTeamProps,
          onSelectTeamUpgradeStep: e => {
            this.props.dispatch(selectViewAction({
              teamId: null,
              ...this.props.newTeamProps?.previousView,
              view: "teamUpgrade",
              paymentStep: e,
              teamFlowType: this.props.newTeamProps?.teamFlowType || CreateUpgradeAction.CREATE_AND_UPGRADE
            }));
          },
          isCampfireCart: !0
        })
      }), jsxs("div", {
        className: cssBuilderInstance.selectNone.$,
        style: styleBuilderInstance.mxAuto.add({
          padding: "48px",
          maxWidth: "1400px"
        }).$,
        children: [jsx($$eO0, {
          step: t
        }), e]
      })]
    });
  }
}
export function $$eR1(e) {
  let t = useDispatch<AppDispatch>();
  let a = useSelector(e => e.user);
  let r = useSelector(e => extractOrgUsersByUserId(e.orgUsersByOrgId, e.user.id).some(e => e.permission === FUserRoleType.ADMIN));
  let l = useSeparateBillingShippingExperiment();
  let d = useSelector(e => e.payment).currency || getUserCurrency();
  useSingleEffect(() => {
    let e = document.createElement("div");
    e.style.position = "fixed";
    e.style.inset = "0";
    e.style.background = "var(--color-bg-secondary)";
    e.style.zIndex = "-1";
    document.body.appendChild(e);
    return () => {
      document.body.removeChild(e);
    };
  });
  let o = setupPricesTransform({
    billableProductKeys: collaboratorSet,
    baseQuery: {
      currency: d,
      tier: ProductTierEnum.ORG,
      renewalTerm: RenewalTermEnum.YEAR,
      unit: RenewalTermEnum.YEAR
    }
  });
  let [c] = handleSuspenseRetainRelease(o);
  if ("loaded" !== c.status) return jsx(renderRequestErrorInterstitial, {});
  let u = c.data;
  return jsx(ErrorBoundaryCrash, {
    team: ServiceCategories.MONETIZATION_UPGRADES,
    boundaryKey: "OrgSelfServeBillingRemodelPage",
    fallback: errorBoundaryFallbackTypes.DEFAULT_FULL_PAGE,
    hasCustomWASMBuild: isUsingLocalBuild,
    children: jsx($$eM2, {
      ...e,
      dispatch: t,
      user: a,
      isOrgAdmin: r,
      canSeeBillingAddressExp: l,
      productPriceBySeatType: u,
      currency: d
    })
  });
}
export function $$eO0({
  step: e
}) {
  let t = function (e) {
    switch (e) {
      case OnboardingStepEnum.TeamSelect:
        return getI18nString("checkout.org_self_serve.select_teams_title");
      case OnboardingStepEnum.SeatSelect:
        return getI18nString("checkout.org_self_serve.select_seats_header");
      case OnboardingStepEnum.Payment:
        return getI18nString("checkout.enter_your_payment_details");
      case OnboardingStepEnum.Review:
        return getI18nString("checkout.everything_look_good");
      default:
        return null;
    }
  }(e);
  let a = function (e) {
    let t = jsx(TrackedLink, {
      href: "/pricing",
      trackingProperties: {
        trackingDescriptor: CreateUpgradeAction.LEARN_MORE_ABOUT_SEATS
      },
      newTab: !0,
      trusted: !0,
      children: renderI18nText("checkout.learn_more_about_seats")
    });
    switch (e) {
      case OnboardingStepEnum.TeamSelect:
        return getI18nString("checkout.org_self_serve.select_teams_subtitle");
      case OnboardingStepEnum.SeatSelect:
        return renderI18nText("checkout.select_seats_table.seat_types_have_been_suggested", {
          learnMoreAboutSeatsLink: t
        });
      case OnboardingStepEnum.Review:
        return getI18nString("checkout.confirm_your_plan_seats_and_payment_details_then_you_re_all_set");
      default:
        return null;
    }
  }(e);
  return t ? jsxs("div", {
    className: cssBuilderInstance.mb32.$,
    "data-testid": "cart-org-header",
    children: [jsx("h2", {
      className: cssBuilderInstance.font15.lh24.fontMedium.$,
      children: t
    }), a && jsx("p", {
      className: cssBuilderInstance.colorTextSecondary.font13.mt8.$,
      children: a
    }), UR() && jsx(_$$W, {
      billingPeriod: SubscriptionType.ANNUAL,
      isCampfireCart: !0
    })]
  }) : null;
}
$$eM2.displayName = "OrgSelfServePage";
export const OrgHeader = $$eO0;
export const OrgSelfServeBillingRemodelPage = $$eR1;
export const OrgSelfServeBillingRemodelPageInner = $$eM2;
