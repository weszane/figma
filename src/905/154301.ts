import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFeatureFlags } from "../905/601108";
import { KeyCodes } from "../905/63728";
import { ButtonSecondary, ButtonNegativeTracked } from "../figma_app/637027";
import { LazyInputForwardRef } from "../905/408237";
import { LargeLoadingSpinner } from "../figma_app/858013";
import { getI18nString, renderI18nText } from "../905/303541";
import { styleBuilderInstance } from "../905/941192";
import { hideModal, showModalHandler, popModalStack } from "../905/156213";
import { deleteTeamAction } from "../figma_app/240735";
import { TrackingProvider } from "../figma_app/831799";
import { FlashActions } from "../905/573154";
import { teamAPIClient } from "../905/834575";
import { KindEnum } from "../905/129884";
import { registerModal } from "../905/102752";
import { ConfirmationModal, HeaderModal } from "../905/519092";
import { v as _$$v } from "../905/621749";
import { kL, Vq, _Z, v0, pL } from "../figma_app/639088";
export let $$E0 = registerModal(function (e) {
  let [t, i] = useState("");
  let y = useDispatch();
  let E = useSelector(e => e.teams);
  let x = e.team.id;
  let S = 1 === Object.values(E).length;
  let w = !e.team.org_id;
  let {
    isLoaded,
    teamDraftCount,
    teamProjectCount,
    teamProjectFileCount,
    hasPublishedSite
  } = function ({
    teamId: e,
    fileCountsEnabled: t
  }) {
    let i = useDispatch();
    let [n, o] = useState(!1);
    let [l, d] = useState(0);
    let [c, p] = useState(0);
    let [m, h] = useState(0);
    let [g, A] = useState(!1);
    let [y, b] = useState(!1);
    useEffect(() => {
      if (!t) {
        o(!0);
        return;
      }
      n || teamAPIClient.getDeletionFileCount({
        teamId: e
      }).then(({
        data: e
      }) => {
        let {
          drafts_count,
          team_project_file_count,
          team_project_count
        } = e.meta;
        d(drafts_count);
        p(team_project_count);
        h(team_project_file_count);
        o(!0);
      }).catch(() => {
        i(FlashActions.error(getI18nString("flash.team_deletion_file_count_fetching_error")));
      });
    }, [n, e, t, i]);
    useEffect(() => {
      if (!getFeatureFlags().sites) {
        A(!0);
        b(!1);
        return;
      }
      g || teamAPIClient.getHasPublishedSite({
        teamId: e
      }).then(({
        data: e
      }) => {
        let {
          has_published_site
        } = e.meta;
        b(has_published_site);
        A(!0);
      }).catch(() => {
        i(FlashActions.error(getI18nString("flash.team_deletion_file_count_fetching_error")));
      });
    }, [i, g, e]);
    return {
      isLoaded: n && g,
      teamDraftCount: l,
      teamProjectCount: c,
      teamProjectFileCount: m,
      hasPublishedSite: y
    };
  }({
    teamId: x,
    fileCountsEnabled: w
  });
  let P = e => {
    e.preventDefault();
    y(hideModal());
  };
  if (!e.team.org_id && e.subscriptionStatus) return jsx(TrackingProvider, {
    name: "Blocked Pro Team Delete Modal",
    children: jsx(ConfirmationModal, {
      title: getI18nString("team_delete_modal.pro_plan_cancel_modal_header"),
      confirmText: getI18nString("team_delete_modal.proceed_to_cancel"),
      onConfirm: () => {
        y(showModalHandler({
          type: _$$v,
          data: {
            teamId: e.team.id
          }
        }));
      },
      cancelText: getI18nString("team_delete_modal.dismiss"),
      trackedConfirmationProperties: {
        teamId: e.team.id
      },
      children: renderI18nText("team_delete_modal.cancel_to_delete_team", {
        teamName: e.team.name
      })
    })
  });
  if (!isLoaded) return jsx(TrackingProvider, {
    name: "Team Delete Modal",
    properties: {
      teamid: e.team.id
    },
    children: jsx(HeaderModal, {
      maxWidth: 344,
      minWidth: 344,
      fixedTop: !0,
      onClose: P,
      title: getI18nString("team_delete_modal.delete_this_props_team_name", {
        teamName: e.team.name
      }),
      children: jsx("div", {
        style: styleBuilderInstance.add({
          height: "200px"
        }).$,
        children: jsx(LargeLoadingSpinner, {})
      })
    })
  });
  let O = e.team.name !== t;
  return jsx(TrackingProvider, {
    name: "Team Delete Modal",
    properties: {
      teamid: e.team.id
    },
    children: jsx(HeaderModal, {
      maxWidth: 344,
      minWidth: 344,
      fixedTop: !0,
      onClose: P,
      title: getI18nString("team_delete_modal.delete_this_props_team_name", {
        teamName: e.team.name
      }),
      children: jsxs("div", {
        className: kL,
        children: [w ? renderI18nText("team_delete_modal.starter_pro_warning_confirmation_text", {
          teamName: jsx("span", {
            className: Vq,
            children: e.team.name
          })
        }) : renderI18nText("team_delete_modal.warning_confirmation_text", {
          teamName: jsx("span", {
            className: Vq,
            children: e.team.name
          })
        }), w && (teamDraftCount > 0 || teamProjectFileCount > 0) && jsxs(Fragment, {
          children: [jsx("span", {
            children: "\xa0"
          }), renderI18nText("team_delete_modal.this_includes"), jsx("div", {
            children: "\xa0"
          }), jsxs("ul", {
            children: [teamDraftCount > 0 && jsxs("li", {
              children: ["\u2022", " ", renderI18nText("team_delete_modal.team_draft_file_count", {
                numDrafts: teamDraftCount
              })]
            }), teamProjectFileCount > 0 && jsxs("li", {
              children: ["\u2022", " ", renderI18nText("team_delete_modal.team_project_file_count", {
                numFiles: teamProjectFileCount,
                projectCount: renderI18nText("team_delete_modal.team_project_count", {
                  numProjects: teamProjectCount
                })
              })]
            })]
          })]
        }), getFeatureFlags().sites && hasPublishedSite && jsxs(Fragment, {
          children: [jsx("div", {
            children: "\xa0"
          }), renderI18nText("team_delete_modal.any_published_websites_will_be_unpublished_and_taken_offline")]
        }), jsxs("div", {
          children: [jsx("div", {
            children: "\xa0"
          }), renderI18nText("team_delete_modal.days_to_undo_deletion", {
            numDays: jsx("span", {
              className: Vq,
              children: renderI18nText("team_delete_modal.days_for_team_deletion_undo", {
                numDays: 28
              })
            })
          })]
        }), jsx("div", {
          children: "\xa0"
        }), renderI18nText("team_delete_modal.to_confirm_please_enter_the_name_of_the_team"), jsxs("form", {
          onSubmit: t => {
            t.preventDefault();
            e.onDeleteTeam && e.onDeleteTeam();
            y(deleteTeamAction({
              team: e.team,
              userInitiated: !0,
              teamDelete: !0
            }));
            y(popModalStack());
            i("");
          },
          children: [jsx("div", {
            children: jsx(LazyInputForwardRef, {
              className: _Z,
              type: "text",
              value: t,
              onKeyDown: e => {
                e.keyCode === KeyCodes.ENTER && e.preventDefault();
              },
              onChange: e => {
                i(e.currentTarget.value);
              },
              autoComplete: "off",
              autoCorrect: "off",
              autoCapitalize: "off",
              spellCheck: !1
            })
          }), S && jsxs(Fragment, {
            children: [jsx("div", {
              children: "\xa0"
            }), renderI18nText("team_delete_modal.deleting_last_team_notice", {
              notice: jsx("span", {
                className: Vq,
                children: renderI18nText("team_delete_modal.warning_note")
              })
            })]
          }), jsxs("div", {
            className: v0,
            children: [jsx(ButtonSecondary, {
              onClick: P,
              children: renderI18nText("general.cancel")
            }), jsx(ButtonNegativeTracked, {
              type: "submit",
              className: pL,
              disabled: O,
              children: jsx("span", {
                "data-tooltip": getI18nString("team_delete_modal.to_confirm_please_enter_the_name_of_the_team"),
                "data-tooltip-type": O ? KindEnum.TEXT : null,
                children: renderI18nText("team_delete_modal.delete_team")
              })
            })]
          })]
        })]
      })
    })
  });
}, "TeamConfirmDeleteModal");
export const H = $$E0;