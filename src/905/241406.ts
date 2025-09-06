import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useRef, useState, useMemo, Component } from "react";
import { useSelector, connect } from "../vendor/514228";
import { s_ } from "../905/17223";
import { nR, $$, CY } from "../figma_app/637027";
import { B } from "../905/714743";
import { renderI18nText } from "../905/303541";
import { Uu } from "../figma_app/471982";
import { n7 } from "../905/926523";
import { Lo } from "../905/156213";
import { kc, sD } from "../figma_app/740025";
import { Ju } from "../905/102752";
import { Ro } from "../figma_app/805373";
import { EL } from "../905/748636";
import { d_ } from "../figma_app/918700";
import { NJ } from "../figma_app/419216";
import { pL } from "../figma_app/639088";
import { A as _$$A } from "../6828/188155";
import { A as _$$A2 } from "../6828/313793";
let b = "merge_profiles--modalContentContainer--s4kpp";
let v = "merge_profiles--title--9EsnZ";
let I = "merge_profiles--profileInfoContainer--IAO8o";
let E = "merge_profiles--handle--B5IbH";
let x = "merge_profiles--selectHandle--RFUar merge_profiles--handle--B5IbH";
let S = "merge_profiles--selectedHandle--yS2X6 merge_profiles--selectHandle--RFUar merge_profiles--handle--B5IbH";
let w = "merge_profiles--rowContainer--SYWrB";
let C = "merge_profiles--subText--nT4-1";
let T = "merge_profiles--largeAvatarContainer--KCmCx";
function N(e) {
  return jsxs("div", {
    className: "merge_profiles--footer--fRy7i",
    children: [jsx("div", {
      className: "merge_profiles--footerLeft--vMoq3",
      children: e.footerLeft
    }), e.footerRight && jsx("div", {
      className: "merge_profiles--buttonRow--vJdxK modal--buttonRow--o2A0S",
      children: e.footerRight
    })]
  });
}
function P(e) {
  let t = useRef();
  let [i, a] = useState(!1);
  let s = `MergeProfileDisabledTooltipKey-${e.user.id}`;
  let o = Uu(e.user);
  let l = "merge_profiles--connectUserRow--p7hQl";
  o ? l = "merge_profiles--disableConnectUserRow--3RsHX merge_profiles--connectUserRow--p7hQl" : e.isSelected && (l = "merge_profiles--selectedConnectUserRow--fCP2P");
  return jsxs("div", {
    className: "merge_profiles--connectUserRowContainer--3Qh24",
    children: [jsxs("div", {
      className: l,
      onClick: o ? void 0 : e.onClick,
      children: [jsx(Ro, {
        size: 40,
        entity: e.user
      }), jsxs("div", {
        className: "merge_profiles--connectUserRowTextContainer--Yaqz6",
        children: [jsx("div", {
          className: "merge_profiles--connectUserRowText----ZEh",
          children: e.text
        }), jsx("div", {
          className: "merge_profiles--connectUserRowSubText--cNRM6",
          children: e.subText
        })]
      })]
    }), o && jsxs("div", {
      "data-onboarding-key": s,
      onMouseEnter: () => {
        t.current && clearTimeout(t.current);
        a(!0);
      },
      onMouseLeave: () => {
        t.current = setTimeout(() => a(!1), 300);
      },
      children: [jsx("div", {
        className: "merge_profiles--notAllowedText--9heHc",
        children: renderI18nText("community.merge_profile_modal.not_allowed")
      }), i && jsx(NJ, {
        targetKey: s,
        className: "merge_profiles--notAllowedTextTooltip--OtwkV pointer_modal--pointerModal--wrpFz text--fontNeg11--StdFq text--_fontBase--QdLsd text--_negText--j9g-L",
        shouldCenterArrow: EL.FALLBACK,
        backgroundColor: "var(--color-bg-tooltip)",
        children: jsx("div", {
          children: renderI18nText("community.merge_profile_modal.cannot_connect_approved_sellers")
        })
      })]
    })]
  });
}
export function $$O1(e) {
  let t = useSelector(e => e.authedUsers);
  let i = useSelector(e => e.authedProfilesById);
  let s = kc();
  let [c, u] = useState(null);
  let {
    profilesOnly
  } = e;
  let h = useMemo(() => {
    let e = [];
    Object.values(i).forEach(i => {
      if (i.id !== s?.id && i.public_at && i.primary_user_id) {
        let n = t.byId[i.primary_user_id];
        e.push({
          user: n,
          text: `@${i.profile_handle}`,
          subText: n.email,
          onClick: () => {
            u(n);
          }
        });
      }
    });
    profilesOnly || Object.values(t.byId).forEach(t => {
      t.community_profile_id || e.push({
        user: t,
        text: t.name,
        subText: t.email,
        onClick: () => {
          u(t);
        }
      });
    });
    return e;
  }, [i, t, s, profilesOnly, u]);
  let g = 0 === h.length;
  return jsxs(Fragment, {
    children: [jsxs("div", {
      className: b,
      children: [jsx("div", {
        className: v,
        children: g ? renderI18nText("community.merge_profile_modal.add_an_account_to_connect") : renderI18nText("community.merge_profile_modal.pick_the_account_you_want_to_connect")
      }), jsx("div", {
        className: "merge_profiles--connectUserRowsContainer--36Qzg",
        children: g ? jsx(B, {
          svg: _$$A,
          useOriginalSrcFills_DEPRECATED: !0
        }) : h.map(e => jsx(P, {
          isSelected: c?.id === e.user.id,
          user: e.user,
          text: e.text,
          subText: e.subText,
          onClick: e.onClick
        }, e.user.id))
      }), jsx("div", {
        className: C,
        children: jsx("p", {
          children: g ? renderI18nText("community.merge_profile_modal.no_accounts_found") : renderI18nText("community.merge_profile_modal.missing_account_try_again")
        })
      })]
    }), jsx(N, {
      footerLeft: e.footerLeft,
      footerRight: jsxs(Fragment, {
        children: [e.onCancel && jsx(nR, {
          onClick: e.onCancel,
          children: renderI18nText("general.cancel")
        }), jsx($$, {
          disabled: !c,
          onClick: () => {
            c && e.onSubmit(c);
          },
          className: pL,
          children: profilesOnly ? renderI18nText("community.merge_profile_modal.connect") : renderI18nText("general.continue")
        })]
      })
    })]
  });
}
var D = (e => (e[e.SELECT_ACCOUNT = 0] = "SELECT_ACCOUNT", e[e.CONTINUE = 1] = "CONTINUE", e[e.CHOOSE_PROFILE_HANDLE = 2] = "CHOOSE_PROFILE_HANDLE", e))(D || {});
class L extends Component {
  constructor(e) {
    super(e);
    this.onSelectUserToMerge = e => {
      this.setState({
        selectedUser: e,
        primaryUser: this.props.currentUser
      });
      e.community_profile_id || (this.props.dispatch(n7({
        primaryUserId: this.props.currentUser.id,
        secondaryUserId: e.id
      })), this.props.dispatch(Lo()));
      this.setState({
        step: 1
      });
    };
    this.state = {
      step: 0,
      selectedUser: null,
      primaryUser: null
    };
  }
  renderContinueStep(e) {
    let t = this.props.authedProfilesById[this.props.currentUser.community_profile_id];
    return jsxs(Fragment, {
      children: [jsxs("div", {
        className: b,
        children: [jsx("div", {
          className: v,
          children: renderI18nText("community.merge_profile_modal.merge_profiles_to_connect_accounts")
        }), jsxs("div", {
          className: w,
          children: [jsxs("div", {
            className: I,
            children: [jsx("div", {
              className: T,
              children: jsx(Ro, {
                entity: t,
                size: 96
              })
            }), jsx("div", {
              className: E,
              children: `@${t.profile_handle}`
            })]
          }), jsxs("div", {
            className: I,
            children: [e ? jsx("div", {
              className: T,
              children: jsx(Ro, {
                entity: e,
                size: 96
              })
            }) : jsx("div", {
              className: T,
              children: jsx(B, {
                svg: _$$A2,
                useOriginalSrcFills_DEPRECATED: !0
              })
            }), jsx("div", {
              className: E,
              children: `@${e ? e.profile_handle : "noprofileyet"}`
            })]
          })]
        }), jsxs("div", {
          className: C,
          children: [jsx("p", {
            children: renderI18nText("community.merge_profile_modal.existing_community_profile_merge_info")
          }), jsx("br", {}), jsx("p", {
            children: renderI18nText("community.merge_profile_modal.combine_all_profile_resources_info")
          })]
        })]
      }), jsx(N, {
        footerLeft: jsx("div", {
          children: renderI18nText("community.merge_profile_modal.confirm_your_new_profile_details_next")
        }),
        footerRight: jsxs(Fragment, {
          children: [jsx(nR, {
            onClick: () => this.props.dispatch(Lo()),
            children: renderI18nText("general.cancel")
          }), jsx($$, {
            onClick: () => this.setState({
              step: 2
            }),
            className: pL,
            children: renderI18nText("general.continue")
          })]
        })
      })]
    });
  }
  renderChooseHandleStep() {
    let e = this.props.authedProfilesById[this.props.currentUser.community_profile_id];
    let t = e => this.state.primaryUser?.id === e?.id;
    return jsxs(Fragment, {
      children: [jsxs("div", {
        className: b,
        children: [jsx("div", {
          className: v,
          children: renderI18nText("community.merge_profile_modal.choose_your_new_profile_handle")
        }), jsx("div", {
          className: I,
          children: e ? jsx(Ro, {
            entity: e,
            size: 96
          }) : jsx(B, {
            svg: _$$A2,
            useOriginalSrcFills_DEPRECATED: !0
          })
        }), jsxs("div", {
          className: "merge_profiles--profileComparisonInfoContainer--HJBRJ merge_profiles--profileInfoContainer--IAO8o",
          children: [jsx("div", {
            className: "merge_profiles--rowContainerFlexEnd--Szxmb merge_profiles--rowContainer--SYWrB",
            children: jsx("div", {
              onClick: () => {
                this.setState({
                  primaryUser: this.props.currentUser
                });
              },
              className: t(this.props.currentUser) ? S : x,
              children: `@${e ? e.profile_handle : "noprofileyet"}`
            })
          }), jsx("div", {
            className: w,
            children: jsx("div", {
              className: "merge_profiles--handleDivide--P9AYd",
              children: renderI18nText("community.profiles.or")
            })
          }), jsx("div", {
            className: "merge_profiles--rowContainerFlexStart--fajIh merge_profiles--rowContainer--SYWrB",
            children: jsx("div", {
              onClick: () => {
                this.setState({
                  primaryUser: this.state.selectedUser
                });
              },
              className: t(this.state.selectedUser) ? S : x,
              children: `@${this.state.selectedUser?.community_profile_handle ? this.state.selectedUser.community_profile_handle : "noprofileyet"}`
            })
          })]
        }), jsxs("div", {
          className: C,
          children: [jsx("p", {
            children: renderI18nText("community.merge_profile_modal.handle_selection_info")
          }), jsx("br", {}), jsx("p", {
            children: renderI18nText("community.merge_profile_modal.community_avatar_info")
          })]
        })]
      }), jsx(N, {
        footerLeft: jsxs("div", {
          children: [renderI18nText("community.merge_profile_modal.merging_profiles_cant_be_undone"), " ", jsx(CY, {
            href: "https://help.figma.com/hc/articles/1500005162381-Manage-Community-profiles-and-settings#add-profile",
            target: "_blank",
            trusted: !0,
            children: renderI18nText("community.merge_profile_modal.learn_more")
          })]
        }),
        footerRight: jsxs(Fragment, {
          children: [jsx(nR, {
            onClick: () => this.props.dispatch(Lo()),
            children: renderI18nText("general.cancel")
          }), jsx($$, {
            onClick: () => {
              this.props.dispatch(n7({
                primaryUserId: this.state.primaryUser.id,
                secondaryUserId: this.state.primaryUser.id === this.props.currentUser.id ? this.state.selectedUser.id : this.props.currentUser.id
              }));
              this.props.dispatch(Lo());
            },
            className: pL,
            children: renderI18nText("community.merge_profile_modal.merge_profiles")
          })]
        })
      })]
    });
  }
  render() {
    let e = this.state.selectedUser && sD(this.state.selectedUser, this.props.authedProfilesById);
    return jsxs(d_, {
      size: 560,
      className: "merge_profiles--modal--1x-5z modal--modal--fXC8G modal--modalShadow--d-rJf modal--modalBare--AlP7E",
      popStack: !0,
      children: [jsx(s_, {
        ...this.props
      }), jsx("div", {
        children: 0 === this.state.step ? jsx($$O1, {
          onSubmit: this.onSelectUserToMerge,
          onCancel: () => this.props.dispatch(Lo())
        }) : 1 === this.state.step ? this.renderContinueStep(e) : 2 === this.state.step ? this.renderChooseHandleStep() : null
      })]
    });
  }
}
L.displayName = "MergeProfilesModal";
L.id = "profile-merge";
let F = connect(e => ({
  loadingState: e.loadingState,
  authedProfilesById: e.authedProfilesById,
  currentUser: e.user
}))(L);
let $$M0 = Ju(F, "MergeProfilesModal");
export const g = $$M0;
export const $ = $$O1;