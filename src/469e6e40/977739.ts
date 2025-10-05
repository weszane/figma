import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState, useEffect, useCallback, useMemo } from "react";
import { useDispatch } from "react-redux";
import { useModalManager } from "../905/437088";
import { Checkbox } from "../905/274480";
import { Label } from "../905/270045";
import { ModalRootComponent, ModalFormContents } from "../905/38914";
import { DialogHeader, DialogTitle, DialogBody, DialogFooter, DialogActionStrip } from "../figma_app/272243";
import { getAtomMutate } from "../figma_app/566371";
import { RadioGroup, RadioOption } from "../905/306088";
import { LoadingSpinner } from "../figma_app/858013";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { FlashActions } from "../905/573154";
import { WithTrackedButton } from "../figma_app/617427";
import { renderI18nText, getI18nString } from "../905/303541";
import { AutoLayout } from "../905/470281";
import { TextWithTruncation } from "../905/984674";
import { UpgradeAction } from "../905/370443";
import { TrackingProvider } from "../figma_app/831799";
import { liveStoreInstance, setupResourceAtomHandler } from "../905/713695";
import { handleErrorWithToast } from "../figma_app/345997";
import { Rs } from "../figma_app/761870";
import { fm, X4, Cn, by, UI } from "../c5e2cae0/453906";
import { registerModal } from "../905/102752";
import { hK } from "../figma_app/211706";
import { noop } from 'lodash-es';
import { Wi } from "../figma_app/162641";
import { UserAvatar, AvatarSize } from "../905/590952";
import { getOrgAdminsAction } from "../figma_app/990058";
import { fetchTeamUsers } from "../905/584989";
import { SimpleFuseSearch } from "../905/81982";
import { d as _$$d } from "../905/44199";
import { organizationAPIService } from "../figma_app/617654";
import { teamAPIClient } from "../905/834575";
import { P as _$$P } from "../905/392438";
function U(e) {
  let t = e.searchResult;
  return jsxs("div", {
    className: e.isSelected ? "admin_search_input--userRowSelected--jfVgG autocomplete_permissions--contactRowSelected--xYJKX autocomplete_permissions--contactRow--DRMiv" : "admin_search_input--userRow--ingGG autocomplete_permissions--contactRow--DRMiv",
    children: [jsx("div", {
      className: "admin_search_input--userAvator--FG3LO autocomplete_permissions--avatar--Hb2O-",
      children: jsx(UserAvatar, {
        user: t,
        size: AvatarSize.MEDIUM
      })
    }), jsxs("div", {
      children: [jsx("div", {
        className: "admin_search_input--name--s2UoA autocomplete_permissions--name--62sCS ellipsis--ellipsis--Tjyfa",
        children: t.name
      }), jsx("div", {
        className: "admin_search_input--email--DzKVd autocomplete_permissions--email--HCICx ellipsis--ellipsis--Tjyfa",
        children: t.email
      })]
    })]
  });
}
function F(e) {
  return jsx("div", {
    children: e.token.content.name
  });
}
function $$q(e) {
  let t = useDispatch();
  let {
    planId,
    planType,
    initialEmails,
    autocomplete,
    setAutocomplete,
    initialEmailsLoaded,
    setInitialEmailsLoaded
  } = e;
  let [u, m] = useState([]);
  useEffect(() => {
    planType === fm.TEAM ? t(fetchTeamUsers({
      teamId: planId
    })) : t(getOrgAdminsAction({
      orgId: planId
    }));
  }, [t, planId, planType]);
  let g = useCallback(({
    data: e
  }) => {
    let t = e.meta;
    m(t);
    let a = t.filter(e => null != e.email && initialEmails.includes(e.email));
    !1 === initialEmailsLoaded && (setAutocomplete({
      ...Rs(),
      tokens: a.map(e => ({
        state: _$$d.OK,
        content: e
      }))
    }), setInitialEmailsLoaded(!0));
  }, [initialEmails, initialEmailsLoaded, setAutocomplete, setInitialEmailsLoaded]);
  return (useEffect(() => {
    planType === fm.ORGANIZATION ? organizationAPIService.getOrgAdmins({
      orgId: planId
    }).then(g) : teamAPIClient.getTeamAdmins({
      teamId: planId
    }).then(g);
  }, [initialEmails, initialEmailsLoaded, g, planId, planType, setAutocomplete]), initialEmailsLoaded) ? jsxs("div", {
    className: cssBuilderInstance.p2.w400.$,
    children: [jsx(_$$P, {
      autocomplete,
      autocompleteResultsClassName: "admin_search_input--autocompleteResults--N5LMj",
      onChange: setAutocomplete,
      validateToken: noop,
      getSearchResults: e => {
        let t = new SimpleFuseSearch([], {
          keys: ["name", "email"],
          threshold: 0,
          tokenize: !0,
          matchAllTokens: !0
        });
        t.set(u.filter(t => !e.tokens.map(e => e.content.id).includes(t.id)));
        return t.search(e.inputValue);
      },
      SearchResultComponent: U,
      TokenComponent: F
    }), 0 === autocomplete.tokens.length ? jsx(AutoLayout, {
      direction: "vertical",
      padding: {
        top: 2
      },
      children: jsx(TextWithTruncation, {
        fontWeight: "regular",
        color: "" !== autocomplete.errorMessage ? "danger" : "default",
        fontSize: 11,
        children: renderI18nText("new_editor_notifications_modal.error_message_for_empty_admins")
      })
    }) : null]
  }) : jsx(Wi, {
    className: "admin_search_input--loadingText---G5Vg"
  });
}
function $(e) {
  switch (e) {
    case X4.DAILY:
      return {
        label: renderI18nText("new_editor_notifications_modal.daily"),
        description: renderI18nText("new_editor_notifications_modal.daily_description")
      };
    case X4.WEEKLY:
      return {
        label: renderI18nText("new_editor_notifications_modal.weekly"),
        description: renderI18nText("new_editor_notifications_modal.weekly_description")
      };
    case X4.MONTHLY:
      return {
        label: renderI18nText("new_editor_notifications_modal.monthly"),
        description: renderI18nText("new_editor_notifications_modal.monthly_description")
      };
  }
}
let B = liveStoreInstance.Query({
  fetch: async e => {
    let t = await Cn.getNotificationSettings({
      planId: e.planId,
      planType: e.planType,
      notificationType: by.NEW_EDITOR_NOTIFICATION
    });
    return t.data?.meta ?? null;
  },
  output: ({
    data: e
  }) => e && 0 !== e.frequencies.length ? e : {
    frequencies: [],
    recipient_settings: UI.SPECIFIC_ADMINS,
    recipients: []
  }
});
let G = liveStoreInstance.Mutation(async (e, {
  query: t,
  xr: a
}) => {
  let {
    planId,
    planType,
    frequencies,
    recipientSettings,
    recipients
  } = e;
  t.mutate(B({
    planId,
    planType
  }), e => {
    null != e && (e.frequencies = frequencies, e.recipient_settings = recipientSettings, e.recipients = recipients);
  });
  await a.put("/api/billing/notification_settings", {
    plan_id: planId,
    plan_type: planType,
    notification_type: by.NEW_EDITOR_NOTIFICATION,
    frequencies: Array.from(frequencies),
    recipient_settings: recipientSettings,
    recipients
  });
});
let $$z0 = registerModal(function ({
  planType: e,
  planId: t,
  ...a
}) {
  let C = useModalManager(a);
  let N = useDispatch();
  let I = function (e) {
    switch (e) {
      case fm.TEAM:
        return [X4.DAILY, X4.WEEKLY];
      case fm.ORGANIZATION:
        return [X4.DAILY, X4.MONTHLY];
    }
  }(e);
  let [T, A] = setupResourceAtomHandler(B({
    planId: t,
    planType: e
  }));
  let [R, O] = useState();
  let [L, D] = useState();
  let M = useMemo(() => R || (T.data ? new Set(T.data.frequencies) : new Set()), [R, T.data]);
  let P = useMemo(() => L || (T.data ? T.data.recipient_settings : UI.SPECIFIC_ADMINS), [L, T.data]);
  let U = getAtomMutate(G);
  let [F, z] = useState(Rs());
  let [V, W] = useState(!1);
  let [H, Y] = useState(!1);
  let J = "loaded" !== T.status ? jsx(LoadingSpinner, {
    className: cssBuilderInstance.mlAuto.mrAuto.mt32.$
  }) : jsxs(Fragment, {
    children: [jsx(AutoLayout, {
      direction: "vertical",
      spacing: 0,
      children: jsx(TextWithTruncation, {
        fontWeight: "medium",
        fontSize: 11,
        children: renderI18nText("new_editor_notifications_modal.how_often_would_you_like_receive_emails")
      })
    }), jsx(AutoLayout, {
      direction: "vertical",
      children: I.map(e => jsx(Checkbox, {
        disabled: V || "loaded" !== T.status,
        checked: M.has(e),
        onChange: t => {
          let a = new Set(M);
          t ? a.add(e) : a.$$delete(e);
          O(a);
        },
        label: jsx(Label, {
          className: cssBuilderInstance.fontMedium.$,
          children: $(e).label
        }),
        htmlAttributes: {
          "data-testid": `${e} option`
        },
        children: $(e).description
      }, e))
    }), 0 === M.size ? null : jsxs(Fragment, {
      children: [jsxs(AutoLayout, {
        direction: "vertical",
        spacing: 0,
        children: [jsx(TextWithTruncation, {
          fontWeight: "medium",
          fontSize: 11,
          children: renderI18nText("new_editor_notifications_modal.who_should_get_them")
        }), jsx(hK, {
          height: 1
        }), jsx(TextWithTruncation, {
          fontWeight: "regular",
          color: "secondary",
          fontSize: 11,
          children: renderI18nText("new_editor_notifications_modal.we_recommend_only_adding")
        })]
      }), jsx(RadioGroup, {
        value: P,
        onChange: e => {
          D(e);
        },
        children: jsx(AutoLayout, {
          direction: "vertical",
          padding: {
            vertical: 2
          },
          children: [UI.ALL_ADMINS, UI.SPECIFIC_ADMINS].map(a => jsx(AutoLayout, {
            direction: "vertical",
            padding: {
              left: 8
            },
            width: "100%",
            children: jsx(RadioOption, {
              value: a,
              _isChecked: a === P,
              _onChange: e => {
                D(e);
              },
              children: jsxs(AutoLayout, {
                direction: "vertical",
                width: "100%",
                height: "hug-contents",
                padding: {
                  left: 4
                },
                children: [jsx(TextWithTruncation, {
                  fontSize: 11,
                  fontWeight: "medium",
                  children: function (e) {
                    switch (e) {
                      case UI.ALL_ADMINS:
                        return renderI18nText("new_editor_notifications_modal.all_admins");
                      case UI.SPECIFIC_ADMINS:
                        return renderI18nText("new_editor_notifications_modal.specific_admins");
                    }
                  }(a)
                }), a === UI.SPECIFIC_ADMINS && P === UI.SPECIFIC_ADMINS && jsx($$q, {
                  planType: e,
                  planId: t,
                  autocomplete: F,
                  setAutocomplete: e => {
                    z({
                      ...e,
                      errorMessage: ""
                    });
                  },
                  initialEmails: T.data.recipients ?? [],
                  initialEmailsLoaded: H,
                  setInitialEmailsLoaded: Y
                })]
              })
            })
          }, a))
        })
      })]
    })]
  });
  return jsx(TrackingProvider, {
    name: "new_editor_notifications_modal",
    children: jsx(ModalRootComponent, {
      manager: C,
      width: "lg",
      children: jsxs(ModalFormContents, {
        onSubmit: async n => {
          if (n.preventDefault(), P === UI.SPECIFIC_ADMINS && 0 === F.tokens.length && 0 !== M.size) {
            z({
              ...F,
              errorMessage: "Add the name of at least on admin"
            });
            return;
          }
          W(!0);
          try {
            let n = P === UI.ALL_ADMINS ? [] : F.tokens.map(e => e.content.email).filter(e => void 0 !== e);
            await U({
              planId: t,
              planType: e,
              notificationType: by.NEW_EDITOR_NOTIFICATION,
              frequencies: Array.from(M),
              recipientSettings: P,
              recipients: n
            });
            W(!1);
            N(FlashActions.flash(getI18nString("new_editor_notifications_modal.confirmation_v2")));
            a.onClose();
          } catch {
            W(!1);
            handleErrorWithToast("An error has occured. Please try again.", N);
          }
        },
        children: [jsx(DialogHeader, {
          children: jsx(DialogTitle, {
            children: getI18nString("new_editor_notifications_modal.header")
          })
        }), jsx(DialogBody, {
          children: jsxs(AutoLayout, {
            direction: "vertical",
            spacing: 16,
            padding: {
              top: 8,
              bottom: 8
            },
            children: [jsx(TextWithTruncation, {
              children: renderI18nText("new_editor_notifications_modal.get_emailed_when_members_upgrade_from_free_to_paid")
            }), J]
          })
        }), jsx(DialogFooter, {
          children: jsxs(DialogActionStrip, {
            children: [jsx(WithTrackedButton, {
              variant: "secondary",
              onClick: a.onClose,
              trackingProperties: {
                trackingDescriptor: UpgradeAction.CANCEL
              },
              children: getI18nString("general.cancel")
            }), jsx(WithTrackedButton, {
              type: "submit",
              disabled: V || "loaded" !== T.status || "" !== F.inputValue,
              trackingProperties: {
                trackingDescriptor: UpgradeAction.SAVE
              },
              children: getI18nString("general.save")
            })]
          })
        })]
      })
    })
  });
}, "NewEditorNotificationSettingsModal");
export const q = $$z0;