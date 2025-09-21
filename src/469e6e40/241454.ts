import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { throwTypeError } from "../figma_app/465776";
import { P as _$$P } from "../905/697522";
import { getFeatureFlags } from "../905/601108";
import { debugState } from "../905/407919";
import { XHR } from "../905/910117";
import { SvgComponent } from "../905/714743";
import { NU } from "../figma_app/204891";
import { y as _$$y } from "../905/171275";
import { s as _$$s } from "../cssbuilder/589278";
import { getI18nString, renderI18nText } from "../905/303541";
import { VisualBellActions } from "../905/302958";
import { TextWithTruncation } from "../905/984674";
import { isProrationBillingEnabledForCurrentPlan } from "../figma_app/618031";
import { q as _$$q } from "../905/749058";
import { Wq } from "../figma_app/481749";
import { hideModal, popModalStack } from "../905/156213";
import { IJ, uo } from "../figma_app/990058";
import { TrackingProvider } from "../figma_app/831799";
import { ProductAccessTypeEnum } from "../905/513035";
import { jL } from "../figma_app/658324";
import { FPlanFeatureType, FOrganizationLevelType } from "../figma_app/191312";
import { isLoading } from "../905/18797";
import { hasScimToken } from "../figma_app/336853";
import { setupLoadingStateHandler } from "../905/696711";
import { e as _$$e } from "../figma_app/119601";
import { AccessLevelEnum } from "../905/557142";
import { createNoOpValidator } from "../figma_app/181241";
import { h as _$$h } from "../figma_app/124713";
import { registerModal } from "../905/102752";
import { l as _$$l } from "../figma_app/121794";
import { ConfirmationModal2 } from "../figma_app/918700";
import { A as _$$A } from "../1617/755299";
import { A as _$$A2 } from "../1617/342635";
import { A as _$$A3 } from "../svg/57540";
let O = new class {
  constructor() {
    this.OrgJoinRequestSchemaValidator = createNoOpValidator();
  }
  getOrgJoinRequest(e) {
    return this.OrgJoinRequestSchemaValidator.validate(async ({
      xr: t
    }) => await t.get(`/api/org_join_request/${e.selectedOrgJoinRequest}`));
  }
}();
let U = "confirm_org_user_actions--bold--FUp4f";
let F = "confirm_org_user_actions--spacing--ZBS-Z";
let q = "confirm_org_user_actions--learnMoreLink--M---Z confirm_org_user_actions--link--kN9aV blue_link--blueLink--9rlnd";
export let $$z2 = registerModal(function (e) {
  let t = useDispatch();
  let a = isProrationBillingEnabledForCurrentPlan();
  let s = e.orgUserIds.length;
  let r = getI18nString("org_settings.remove_user_modal.title.users_only_text", {
    userCount: s
  });
  let l = getI18nString("org_settings.remove_user_modal.button");
  let d = getFeatureFlags().ext_figma_apps ? getI18nString("org_settings.remove_user_modal.warning_no_username_text_v2", {
    userCount: s,
    orgName: e.org.name
  }) : getI18nString("org_settings.remove_user_modal.warning_no_username_text", {
    userCount: s,
    orgName: e.org.name
  });
  let c = renderI18nText("org_settings.remove_user_modal.information_text", {
    userCount: s,
    sharedProjects: jsx("span", {
      className: _$$s.fontSemiBold.$,
      children: renderI18nText("org_settings.remove_user_modal.unassigned_drafts")
    })
  });
  return jsx(TrackingProvider, {
    name: "Confirm Remove Modal",
    properties: {
      orgId: e.org.id,
      numUsers: s
    },
    children: jsx(_$$l, {
      dispatch: t,
      onConfirm: () => {
        t(IJ({
          orgId: e.org.id,
          params: {
            org_user_ids: e.orgUserIds
          },
          userInitiated: !0
        }));
        t(hideModal());
      },
      onHide: () => {
        if (e.onHide) {
          e.onHide();
          return;
        }
        t(popModalStack());
      },
      disableClickOutsideToHide: !0,
      buttonText: l,
      title: r,
      checkboxText: getI18nString("org_settings.remove_user_modal.confirmation_checkbox_text"),
      makeButtonAppearNegative: !0,
      children: jsxs("div", {
        children: [jsx("p", {
          className: U,
          children: d
        }), jsx("p", {
          className: F,
          children: c
        }), a ? jsx("p", {
          className: F,
          children: jsx(TextWithTruncation, {
            children: getI18nString("org_settings.remove_user_modal.any_available_seats_free_up", {
              userCount: s
            })
          })
        }) : null]
      })
    })
  });
}, "OrgConfirmDeleteModal");
function V(e) {
  let t = useDispatch();
  let a = _$$q(Wq, !0);
  function s(e, t) {
    return 1 === e ? t ? renderI18nText("confirm_account_change.upgrade.all_licenses.description_p1.singular", {
      userName: t,
      seatType: jsx("span", {
        className: _$$s.fontSemiBold.$,
        children: renderI18nText("confirm_account_change.seat_type.full_seat")
      })
    }) : renderI18nText("confirm_account_change.upgrade.all_licenses.description_p1.singular.no_username", {
      seatType: jsx("span", {
        className: _$$s.fontSemiBold.$,
        children: renderI18nText("confirm_account_change.seat_type.full_seat")
      })
    }) : renderI18nText("confirm_account_change.upgrade.all_licenses.description_p1.plural", {
      numUsers: e,
      seatType: jsx("span", {
        className: _$$s.fontSemiBold.$,
        children: renderI18nText("confirm_account_change.seat_type.full_seat")
      })
    });
  }
  function o(e, t) {
    return 1 === e ? t ? renderI18nText("confirm_account_change.downgrade.all_licenses.description_p1.singular", {
      userName: jsx("span", {
        className: _$$s.fontSemiBold.$,
        children: t
      }),
      viewerRestricted: jsx("span", {
        className: _$$s.fontSemiBold.$,
        children: renderI18nText("confirm_account_change.seat_type.viewer_restricted")
      })
    }) : renderI18nText("confirm_account_change.downgrade.all_licenses.description_p1.singular.no_username", {
      viewerRestricted: jsx("span", {
        className: _$$s.fontSemiBold.$,
        children: renderI18nText("confirm_account_change.seat_type.viewer_restricted")
      })
    }) : renderI18nText("confirm_account_change.downgrade.all_licenses.description_p1.plural", {
      numUsers: e,
      viewerRestricted: jsx("span", {
        className: _$$s.fontSemiBold.$,
        children: renderI18nText("confirm_account_change.seat_type.viewer_restricted")
      })
    });
  }
  let d = e.orgUserIds.length;
  let c = e.accountType === FPlanFeatureType.FULL;
  let u = function (e, t, a) {
    var i;
    if (e) switch (t) {
      case ProductAccessTypeEnum.DESIGN:
        return jsxs(Fragment, {
          children: [s(a, void 0), jsx("span", {
            className: _$$s.ml2.$,
            children: renderI18nText("confirm_account_change.upgrade.design.description_p2")
          }), jsxs("ul", {
            className: _$$s.mt8.$,
            children: [jsxs("li", {
              className: _$$s.flex.ml2.mt8.$,
              children: [jsx(SvgComponent, {
                className: _$$s.colorIcon.mr8.$,
                svg: _$$A
              }), renderI18nText("confirm_account_change.generic.design.edit_share_or_create")]
            }), jsxs("li", {
              className: _$$s.flex.ml2.mt8.$,
              children: [jsx(SvgComponent, {
                className: _$$s.colorIcon.mr8.$,
                svg: _$$A
              }), renderI18nText("confirm_account_change.generic.design.give_access_to_drafts")]
            }), jsxs("li", {
              className: _$$s.flex.ml2.mt8.$,
              children: [jsx(SvgComponent, {
                className: _$$s.colorIcon.mr8.$,
                svg: _$$A
              }), renderI18nText("confirm_account_change.generic.design.access_all_templates_and_libraries")]
            }), jsxs("li", {
              className: _$$s.flex.ml2.mt8.$,
              children: [jsx(SvgComponent, {
                className: _$$s.colorIcon.mr8.$,
                svg: _$$A
              }), jsx("span", {
                className: _$$s.mr4.$,
                children: renderI18nText("confirm_account_change.generic.design.free_dev_mode_access")
              }), jsx("a", {
                className: q,
                target: "_blank",
                rel: "noopener",
                href: "https://help.figma.com/hc/articles/19813618057623",
                children: renderI18nText("confirm_account_change.generic.design.free_dev_mode_access.learn_more")
              })]
            })]
          })]
        });
      case ProductAccessTypeEnum.FIGJAM:
        return jsxs(Fragment, {
          children: [s(a, void 0), jsx("span", {
            className: _$$s.ml2.$,
            children: renderI18nText("confirm_account_change.upgrade.design.description_p2")
          }), jsxs("ul", {
            className: _$$s.mt8.$,
            children: [jsxs("li", {
              className: _$$s.flex.ml2.mt8.$,
              children: [jsx(SvgComponent, {
                className: _$$s.colorIcon.mr8.$,
                svg: _$$A
              }), renderI18nText("confirm_account_change.generic.figjam.edit_share_or_create")]
            }), jsxs("li", {
              className: _$$s.flex.ml2.mt8.$,
              children: [jsx(SvgComponent, {
                className: _$$s.colorIcon.mr8.$,
                svg: _$$A
              }), renderI18nText("confirm_account_change.generic.figjam.give_access_to_drafts")]
            }), jsxs("li", {
              className: _$$s.flex.ml2.mt8.$,
              children: [jsx(SvgComponent, {
                className: _$$s.colorIcon.mr8.$,
                svg: _$$A
              }), renderI18nText("confirm_account_change.generic.figjam.access_all_templates_and_libraries")]
            })]
          })]
        });
      case ProductAccessTypeEnum.DEV_MODE:
        let d;
        d = 1 === a ? renderI18nText("confirm_account_change.upgrade.dev_mode.another_option.singular.no_username") : renderI18nText("confirm_account_change.upgrade.dev_mode.another_option.plural");
        return jsxs(Fragment, {
          children: [s(a, i), jsx("span", {
            className: _$$s.ml2.$,
            children: renderI18nText("confirm_account_change.upgrade.dev_mode.description_p2")
          }), jsxs("ul", {
            className: _$$s.mt8.$,
            children: [jsxs("li", {
              className: _$$s.flex.ml2.mt8.$,
              children: [jsx(SvgComponent, {
                className: _$$s.colorIcon.mr8.$,
                svg: _$$A
              }), renderI18nText("confirm_account_change.generic.dev_mode.advanced_inspect")]
            }), jsxs("li", {
              className: _$$s.flex.ml2.mt8.$,
              children: [jsx(SvgComponent, {
                className: _$$s.colorIcon.mr8.$,
                svg: _$$A
              }), renderI18nText("confirm_account_change.generic.dev_mode.integrations")]
            }), jsxs("li", {
              className: _$$s.flex.ml2.mt8.$,
              children: [jsx(SvgComponent, {
                className: _$$s.colorIcon.mr8.$,
                svg: _$$A
              }), renderI18nText("confirm_account_change.generic.dev_mode.annotations")]
            })]
          }), jsxs("div", {
            className: _$$s.flex.mt32.mb8.py8.px4.colorBgSecondary.$,
            children: [jsx("div", {
              className: _$$s.w48.mr8.$,
              children: jsx(_$$P, {})
            }), jsxs("div", {
              className: _$$s.flexGrow1.$,
              children: [d, jsx("br", {}), jsx("a", {
                className: q,
                target: "_blank",
                rel: "noopener",
                href: "https://help.figma.com/hc/articles/19813618057623",
                children: renderI18nText("confirm_account_change.generic.design.free_dev_mode_access.learn_more")
              })]
            })]
          })]
        });
      default:
        throwTypeError(t);
    } else switch (t) {
      case ProductAccessTypeEnum.DESIGN:
        return jsxs(Fragment, {
          children: [o(a, void 0), jsx("span", {
            className: _$$s.ml2.$,
            children: renderI18nText("confirm_account_change.downgrade.design.description_p2")
          }), jsxs("ul", {
            className: _$$s.mt8.$,
            children: [jsxs("li", {
              className: _$$s.flex.ml2.mt8.$,
              children: [jsx(SvgComponent, {
                className: _$$s.colorIconDanger.mr8.$,
                svg: _$$A2
              }), renderI18nText("confirm_account_change.generic.design.edit_share_or_create")]
            }), jsxs("li", {
              className: _$$s.flex.ml2.mt8.$,
              children: [jsx(SvgComponent, {
                className: _$$s.colorIconDanger.mr8.$,
                svg: _$$A2
              }), renderI18nText("confirm_account_change.generic.design.give_access_to_drafts")]
            }), jsxs("li", {
              className: _$$s.flex.ml2.mt8.$,
              children: [jsx(SvgComponent, {
                className: _$$s.colorIconDanger.mr8.$,
                svg: _$$A2
              }), renderI18nText("confirm_account_change.generic.design.access_all_templates_and_libraries")]
            }), jsxs("li", {
              className: _$$s.flex.ml2.mt8.$,
              children: [jsx(SvgComponent, {
                className: _$$s.colorIconDanger.mr8.$,
                svg: _$$A2
              }), renderI18nText("confirm_account_change.downgrade.design.give_access_to_drafts")]
            }), jsxs("li", {
              className: _$$s.flex.ml2.mt8.$,
              children: [jsx(SvgComponent, {
                className: _$$s.colorIconDanger.mr8.$,
                svg: _$$A2
              }), jsx("span", {
                className: _$$s.mr4.$,
                children: renderI18nText("confirm_account_change.generic.design.free_dev_mode_access")
              }), jsx("a", {
                className: q,
                target: "_blank",
                rel: "noopener",
                href: "https://help.figma.com/hc/articles/19813618057623",
                children: renderI18nText("confirm_account_change.generic.design.free_dev_mode_access.learn_more")
              })]
            })]
          })]
        });
      case ProductAccessTypeEnum.FIGJAM:
        return jsxs(Fragment, {
          children: [o(a, void 0), jsx("span", {
            className: _$$s.ml2.$,
            children: renderI18nText("confirm_account_change.downgrade.design.description_p2")
          }), jsxs("ul", {
            className: _$$s.mt8.$,
            children: [jsxs("li", {
              className: _$$s.flex.ml2.mt8.$,
              children: [jsx(SvgComponent, {
                className: _$$s.colorIconDanger.mr8.$,
                svg: _$$A2
              }), renderI18nText("confirm_account_change.generic.figjam.edit_share_or_create")]
            }), jsxs("li", {
              className: _$$s.flex.ml2.mt8.$,
              children: [jsx(SvgComponent, {
                className: _$$s.colorIconDanger.mr8.$,
                svg: _$$A2
              }), renderI18nText("confirm_account_change.generic.figjam.give_access_to_drafts")]
            }), jsxs("li", {
              className: _$$s.flex.ml2.mt8.$,
              children: [jsx(SvgComponent, {
                className: _$$s.colorIconDanger.mr8.$,
                svg: _$$A2
              }), renderI18nText("confirm_account_change.generic.figjam.access_all_templates_and_libraries")]
            }), jsxs("li", {
              className: _$$s.flex.ml2.mt8.$,
              children: [jsx(SvgComponent, {
                className: _$$s.colorIconDanger.mr8.$,
                svg: _$$A2
              }), renderI18nText("confirm_account_change.downgrade.design.give_access_to_drafts")]
            })]
          })]
        });
      case ProductAccessTypeEnum.DEV_MODE:
        return jsxs(Fragment, {
          children: [o(a, void 0), jsx("span", {
            className: _$$s.ml2.$,
            children: renderI18nText("confirm_account_change.downgrade.dev_mode.description_p2")
          }), jsxs("ul", {
            className: _$$s.mt8.$,
            children: [jsxs("li", {
              className: _$$s.flex.ml2.mt8.$,
              children: [jsx(SvgComponent, {
                className: _$$s.colorIconDanger.mr8.$,
                svg: _$$A2
              }), renderI18nText("confirm_account_change.generic.dev_mode.advanced_inspect")]
            }), jsxs("li", {
              className: _$$s.flex.ml2.mt8.$,
              children: [jsx(SvgComponent, {
                className: _$$s.colorIconDanger.mr8.$,
                svg: _$$A2
              }), renderI18nText("confirm_account_change.generic.dev_mode.integrations")]
            }), jsxs("li", {
              className: _$$s.flex.ml2.mt8.$,
              children: [jsx(SvgComponent, {
                className: _$$s.colorIconDanger.mr8.$,
                svg: _$$A2
              }), renderI18nText("confirm_account_change.generic.dev_mode.annotations")]
            })]
          })]
        });
      default:
        throwTypeError(t);
    }
  }(c, e.licenseType, d);
  return jsx(TrackingProvider, {
    name: "Confirm Account Change Modal",
    properties: {
      targetRole: e.accountType,
      orgId: e.org.id,
      licenseType: e.licenseType,
      numUsers: d
    },
    children: jsx(ConfirmationModal2, {
      confirmText: c ? getI18nString("confirm_account_change.grant_edit_access_confirm_text") : getI18nString("confirm_account_change.remove_edit_access_confirm_text"),
      confirmationTitle: function (e, t, a) {
        if (e) switch (t) {
          case ProductAccessTypeEnum.DESIGN:
            return jsx("span", {
              className: U,
              children: renderI18nText("confirm_account_change.grant_figma_design_access_title.seat_rename", {
                numUsers: a
              })
            });
          case ProductAccessTypeEnum.FIGJAM:
            return jsx("span", {
              className: U,
              children: renderI18nText("confirm_account_change.grant_figjam_access_title.seat_rename", {
                numUsers: a
              })
            });
          case ProductAccessTypeEnum.DEV_MODE:
            return jsx("span", {
              className: U,
              children: renderI18nText("confirm_account_change.upgrade.dev_mode.title", {
                numUsers: a
              })
            });
          default:
            throwTypeError(t);
        } else switch (t) {
          case ProductAccessTypeEnum.DESIGN:
            return jsx("span", {
              className: U,
              children: renderI18nText("confirm_account_change.remove_figma_design_access_title.seat_rename", {
                numUsers: a
              })
            });
          case ProductAccessTypeEnum.FIGJAM:
            return jsx("span", {
              className: U,
              children: renderI18nText("confirm_account_change.remove_figjam_access_title.seat_rename", {
                numUsers: a
              })
            });
          case ProductAccessTypeEnum.DEV_MODE:
            return jsx("span", {
              className: U,
              children: renderI18nText("confirm_account_change.remove_dev_mode_access_title", {
                numUsers: a
              })
            });
          default:
            throwTypeError(t);
        }
      }(c, e.licenseType, d),
      destructive: !c,
      disableClickOutsideToHide: !0,
      isLoading: !1,
      onCancel: e.onHide,
      onConfirm: () => {
        e.licenseType !== ProductAccessTypeEnum.DEV_MODE || c || a();
        (function () {
          let a = {
            org_user_ids: e.orgUserIds,
            paid_statuses: {
              [e.licenseType]: e.accountType
            },
            entry_point: _$$h.MEMBERS_TAB
          };
          t(uo({
            orgId: e.org.id,
            lastUpdateTimestampOverride: e.lastUpdateTimestampIfUsingUnloadedOrgUsers,
            params: a,
            successCallback: () => {
              t(VisualBellActions.enqueue({
                message: getI18nString("confirm_account_change.account_type_successfully_updated.seat_rename", {
                  numUsers: e.orgUserIds.length
                }),
                type: "paid-status-changed"
              }));
              jL({
                planType: FOrganizationLevelType.ORG,
                planId: e.org.id
              });
              e.updateAccountTypeFilterCounts();
            }
          }));
          e.onHide?.();
        })();
      },
      onHide: e.onHide,
      popStack: !0,
      trackedConfirmationProperties: {
        productType: e.licenseType
      },
      children: u
    })
  });
}
let $$W1 = registerModal(function (e) {
  return jsx(V, {
    ...e
  });
}, "OrgConfirmAccountChangeModal");
let $$H3 = registerModal(function (e) {
  let t = useDispatch();
  return jsx(ConfirmationModal2, {
    confirmationTitle: getI18nString("confirm_billing_group_change.title"),
    confirmText: getI18nString("confirm_billing_group_change.confirm_button"),
    onConfirm: () => {
      let a;
      a = e.newLicenseGroup ? {
        org_user_ids: e.orgUserIds,
        license_group_id: e.newLicenseGroup.id
      } : {
        org_user_ids: e.orgUserIds,
        license_group_id: null
      };
      t(uo({
        orgId: e.org.id,
        lastUpdateTimestampOverride: e.lastUpdateTimestampIfUsingUnloadedOrgUsers,
        params: a,
        successCallback: () => {
          let a = e.orgUserIds.length;
          t(VisualBellActions.enqueue({
            message: getI18nString("confirm_billing_group_change.success_message", {
              numUsers: a
            }),
            type: "license-group-changed"
          }));
          e.updateLicenseGroupFilterCounts();
        }
      }));
    },
    onCancel: e.onHide,
    onHide: e.onHide,
    disableClickOutsideToHide: !0,
    popStack: !0,
    children: (() => {
      let t = e.orgUserIds.length;
      let a = _$$e(e.newLicenseGroup?.admin_users_metadata);
      let s = !!e.newLicenseGroup?.is_orphaned;
      return !e.isCurrentUserOrgAdmin && e.newLicenseGroup ? renderI18nText("confirm_workspace_change.confirmation_description_no_username", {
        numUsers: t,
        workspaceName: jsx("span", {
          className: U,
          children: e.newLicenseGroup.name
        })
      }) : !e.newLicenseGroup || s ? renderI18nText("confirm_workspace_change.confirmation_description_with_organization_admin_warning_no_username", {
        numUsers: t,
        workspaceName: jsx("span", {
          className: U,
          children: e.newLicenseGroup ? e.newLicenseGroup.name : getI18nString("confirm_workspace_change.unassigned")
        })
      }) : renderI18nText("confirm_billing_group_change.confirmation_description_with_billing_group_admin_warning_no_username", {
        numUsers: t,
        billingGroupName: jsx("span", {
          className: U,
          children: e.newLicenseGroup.name
        }),
        listOfBillingGroupAdmins: jsx("span", {
          className: U,
          children: a
        })
      });
    })()
  });
}, "OrgConfirmLicenseGroupChangeModal");
let $$Y0 = registerModal(function (e) {
  let t = e.selectedOrgJoinRequest;
  let a = useSelector(e => e.orgById[e.currentUserOrgId]);
  let r = useSelector(e => e.orgSamlConfig);
  let l = useDispatch();
  let [o, x] = useState();
  let b = `ORG_JOIN_REQUEST_APPROVE_${t}`;
  let v = o && o.requester_user.handle;
  let f = o && o.invite_level && o.invite_level <= AccessLevelEnum.VIEWER;
  let y = !!(o && o.deprovisioned_user);
  useEffect(() => {
    O.getOrgJoinRequest({
      selectedOrgJoinRequest: t
    }).then(({
      data: e
    }) => {
      x(e.meta);
    }).catch(e => {
      let t = e?.data?.message || getI18nString("org_join_request.generic_fetch_error");
      l(VisualBellActions.enqueue({
        message: t,
        type: "org-join-request-get-error",
        error: !0
      }));
    });
  }, [t, l]);
  let k = () => {
    l(popModalStack());
  };
  if (!o) return null;
  let E = null;
  if (o.inviter_user) switch (o.resource_type) {
    case "file":
    case "file_repo":
      E = f ? renderI18nText("org_join_request.description_view_file", {
        inviterName: o.inviter_user.handle,
        resourceName: o.resource_name
      }) : renderI18nText("org_join_request.description_edit_file", {
        inviterName: o.inviter_user.handle,
        resourceName: o.resource_name
      });
      break;
    case "folder":
      E = f ? renderI18nText("org_join_request.description_view_folder", {
        inviterName: o.inviter_user.handle,
        resourceName: o.resource_name
      }) : renderI18nText("org_join_request.description_edit_folder", {
        inviterName: o.inviter_user.handle,
        resourceName: o.resource_name
      });
      break;
    case "team":
      E = f ? renderI18nText("org_join_request.description_view_team", {
        inviterName: o.inviter_user.handle,
        resourceName: o.resource_name
      }) : renderI18nText("org_join_request.description_edit_team", {
        inviterName: o.inviter_user.handle,
        resourceName: o.resource_name
      });
      break;
    default:
      console.error("Unhandled orgJoinRequest.resource_type");
  }
  return jsx("div", {
    children: jsx(TrackingProvider, {
      name: "Handle Org Join Request Modal",
      properties: {
        deprovisionedUser: y
      },
      children: jsxs(ConfirmationModal2, {
        confirmationTitle: getI18nString("org_join_request.modal_title", {
          requesterName: v ?? ""
        }),
        confirmText: y ? getI18nString("org_join_request.deprovisioned_confirmation_button_text") : getI18nString("org_join_request.add_to_org_confirmation_button_text"),
        onConfirm: y ? k : () => {
          let e = XHR.put(`/api/org_join_request/${t}/approve`, {
            source: "email"
          });
          setupLoadingStateHandler(e, {
            dispatch: l
          }, b);
          e.then(() => {
            k();
            l(VisualBellActions.enqueue({
              message: getI18nString("org_join_request.request_approved_message", {
                requesterName: v ?? ""
              }),
              type: "org-join-request-approve-success"
            }));
          }, e => {
            let t = e.message || e?.data?.message || getI18nString("org_join_request.approve_error");
            l(VisualBellActions.enqueue({
              message: t,
              type: "org-join-request-approve-failure",
              error: !0
            }));
          });
        },
        cancelText: getI18nString("org_join_request.cancel_text"),
        hideCancel: y,
        disableClickOutsideToHide: !0,
        hideOnConfirm: !1,
        isLoading: isLoading(debugState.getState().loadingState, b),
        loadingText: getI18nString("org_join_request.loading_confirmation_button_text"),
        children: [y && jsxs("div", {
          className: "confirm_org_user_actions--alertBanner--7G9Lr confirm_org_user_actions--banner--T7B90",
          children: [jsx(SvgComponent, {
            width: "16px",
            height: "16px",
            useOriginalSrcFills_DEPRECATED: !1,
            svg: _$$A3,
            style: {
              marginRight: 14
            }
          }), renderI18nText("org_join_request.user_deprovisioned_warning")]
        }), jsxs("div", {
          className: _$$s.flex.flexRow.gap10.$,
          children: [o.file && jsx("div", {
            className: _$$s.hFull.$,
            children: jsx(NU, {
              file: o.file,
              borderRadius: 4,
              size: _$$y.SMALL
            })
          }), jsxs("div", {
            children: [renderI18nText("org_join_request.description_would_like_to_join", {
              requesterNameAndEmail: jsxs("span", {
                className: U,
                children: [v, " (", o.requester_user.email, ")"]
              }),
              orgName: a.name
            }), " ", E]
          })]
        }), !y && hasScimToken(r) && jsx("div", {
          className: "confirm_org_user_actions--banner--T7B90",
          children: renderI18nText("org_join_request.scim_enabled_banner")
        })]
      })
    })
  });
}, "HandleOrgJoinRequestModal");
export const pp = $$Y0;
export const PT = $$W1;
export const IY = $$z2;
export const FW = $$H3;