import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useCallback, useMemo, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deepEqual } from "../905/382883";
import { t as _$$t } from "../905/150656";
import { N as _$$N } from "../905/438674";
import { Button } from "../905/521428";
import { k as _$$k } from "../905/443820";
import { DialogContents, DialogHeader, DialogTitle, DialogBody, DialogFooter, DialogActionStrip } from "../figma_app/272243";
import { UI3ConditionalWrapper } from "../905/341359";
import _ from "../vendor/241899";
import { useDebouncedCallback } from "use-debounce";
import { H as _$$H } from "../905/620380";
import { getI18nString, renderI18nText } from "../905/303541";
import { resolveMessage } from "../905/231762";
import { b as _$$b } from "../905/403202";
import { L as _$$L } from "../905/884941";
import { h as _$$h } from "../905/706336";
import { I as _$$I } from "../905/293573";
import { r as _$$r } from "../905/334940";
import { o as _$$o } from "../905/785255";
import { r as _$$r2 } from "../905/290294";
import { D as _$$D } from "../905/572843";
import { i_, MQ, Lz } from "../905/497882";
import { a as _$$a } from "../905/94741";
import { A as _$$A2 } from "../905/601732";
import { __, tZ, Mm } from "../905/271611";
import { A as _$$A3 } from "../905/554063";
import { A as _$$A4 } from "../905/425801";
import { A as _$$A5 } from "../905/813387";
import { A as _$$A6 } from "../905/144978";
import { x as _$$x } from "../905/956141";
import { S as _$$S } from "../905/60183";
import { m as _$$m } from "../905/964225";
import { A as _$$A7 } from "../905/567946";
import { X as _$$X, S as _$$S2 } from "../905/109653";
import { jT } from "../905/870778";
import { a as _$$a2 } from "../905/482941";
import { y as _$$y } from "../905/616507";
import { Yv } from "../905/488777";
import { vj } from "../905/652712";
import { l as _$$l } from "../905/493845";
import { B as _$$B } from "../905/536646";
import { wC } from "../905/448440";
import $ from "lodash-es/mapValues";
import q from "../vendor/781591";
import Z from "../vendor/52566";
import { T as _$$T, e } from "../905/15569";
import { A as _$$A8 } from "../905/17894";
import { zX } from "../905/104173";
import { fe } from "../905/234639";
import { O as _$$O } from "../905/592467";
import { Oo, PT } from "../905/524815";
import { n as _$$n } from "../905/341791";
import { w as _$$w } from "../905/893785";
import { J as _$$J3 } from "../905/296347";
import { W as _$$W } from "../905/526272";
import { lW } from "../figma_app/11182";
import { hideModal } from "../905/156213";
import { $$in, WX } from "../figma_app/350203";
import { useTracking, TrackingProvider } from "../figma_app/831799";
import { Yw, Of } from "../905/201596";
import { Rv, mN } from "../figma_app/599979";
import { eY } from "../figma_app/722362";
import { useCurrentUserOrg } from "../905/845253";
import { selectUser } from "../905/372672";
import { getCurrentUserOrgUser } from "../figma_app/951233";
import { ResourceTypeNoComment } from "../figma_app/45218";
import { e0 } from "../905/696396";
import { t as _$$t3 } from "../figma_app/305141";
import { _t } from "../figma_app/171413";
import { l as _$$l2 } from "../905/121353";
import { KT, Cd, ME, jc, DK, $o } from "../905/54042";
var h = _;
var X = $;
var J = q;
var Q = Z;
let es = {
  ...Oo,
  category: zX
};
let eo = {
  ...PT,
  displayName: "MakeForm",
  fields: es,
  fieldToDeps: {
    ...PT.fieldToDeps,
    name: {
      ...PT.fieldToDeps.name,
      defaultName: {
        type: "form",
        source: "siteTitle"
      }
    },
    carouselMedia: {
      ...PT.fieldToDeps.carouselMedia,
      generateInitialValue: {
        type: "constant",
        value: {
          generate: _$$O,
          preferOverExistingValue: !0
        }
      }
    },
    category: {
      urlSlug: {
        type: "constant",
        value: "make"
      },
      viewerModeField: {
        type: "otherField",
        source: "viewerMode"
      }
    },
    description: {
      ...PT.fieldToDeps.description,
      valueRequired: {
        type: "constant",
        value: !1
      }
    },
    profileHandle: {
      ...PT.fieldToDeps.profileHandle,
      valueRequired: {
        type: "constant",
        value: !1
      }
    },
    tosAccepted: {
      ...PT.fieldToDeps.tosAccepted,
      defaultValue: {
        type: "form",
        source: "autoAcceptToSIfNeeded"
      }
    }
  }
};
let el = _$$T(eo);
let ed = e(el, fe, e => {
  let t = X()(e, "currentValue");
  let r = Q()(t, e => e === _$$A8);
  return J()(r, "carouselMedia");
});
function eO({
  draft: e,
  publishedDomainInfo: t,
  fastForwardOnMount: r
}) {
  let s;
  let _;
  let {
    existingHubFile
  } = e.deps;
  let Y = useDispatch();
  let {
    trackEvent
  } = useTracking();
  let X = _$$H(trackEvent);
  let q = useCallback(() => {
    Y(hideModal());
    X.current($$in, {
      step: WX.CLOSED
    });
  }, [Y, X]);
  let J = _$$D(e.fieldStates);
  _$$W(e.fieldStates.viewerMode);
  let Z = _$$J3({
    tagsV1Field: e.fieldStates.tagsV1,
    tagsV2Field: e.fieldStates.tagsV2
  });
  let Q = _$$n(e.fieldStates.carouselMedia);
  let ee = _$$w(e.fieldStates.cocreators);
  let et = useMemo(() => ({
    details: !0,
    thumbnail: !0,
    advanced: !0
  }), []);
  let [er, en, ei] = _$$t.useTabs(et, {
    orientation: "vertical"
  });
  let ea = _$$b(ei);
  let {
    stepWithErrors,
    clearStepWithErrors,
    checkProgress,
    checkOverallProgress
  } = _$$o([{
    id: "details",
    checkpoints: [{
      check: () => i_(e.fieldStates.name),
      onFail: () => __(tZ.NAME_INPUT)
    }, {
      check: () => i_(e.fieldStates.description),
      onFail: () => __(tZ.DESCRIPTION_INPUT)
    }, {
      check: () => i_(e.fieldStates.tagsV2) && i_(e.fieldStates.tagsV1),
      onFail: () => __(tZ.TAGS_SECTION)
    }],
    onFail: () => {
      J.name.onTouched?.();
      J.description.onTouched?.();
      J.tagsV2.onTouched?.();
      J.tagsV1.onTouched?.();
    }
  }, {
    id: "thumbnail",
    checkpoints: [{
      check: () => i_(e.fieldStates.carouselMedia),
      onFail: () => __(tZ.THUMBNAIL_UPLOADER)
    }],
    onFail: () => {
      J.carouselMedia.onTouched?.();
    }
  }, {
    id: "advanced",
    checkpoints: [{
      check: () => i_(e.fieldStates.profileHandle),
      onFail: () => __(tZ.PROFILE_HANDLE_INPUT)
    }, {
      check: () => i_(e.fieldStates.cocreators),
      onFail: () => __(tZ.COCREATORS_INPUT)
    }, {
      check: () => i_(e.fieldStates.tosAccepted),
      onFail: () => __(tZ.TOS_AGREED_CHECKBOX)
    }, {
      check: () => i_(e.fieldStates.supportContact),
      onFail: () => __(tZ.SUPPORT_CONTACT_INPUT)
    }],
    onFail: () => {
      J.profileHandle.onTouched?.();
      J.cocreators.onTouched?.();
      J.supportContact.onTouched?.();
      J.tosAccepted.onTouched?.();
    }
  }], ea.activeTab);
  useEffect(() => {
    clearStepWithErrors();
  }, [e.fieldStates, clearStepWithErrors]);
  let {
    draftSubmissionResult,
    clearDraftSubmissionResult,
    submit
  } = _$$r2(e, useCallback(() => {
    X.current($$in, {
      step: WX.PUBLISH
    });
  }, [X]));
  let eT = useRef(r ? MQ(e) ? "ready" : "waiting_for_draft_to_stabilize" : "disabled");
  useEffect(() => {
    switch (eT.current) {
      case "waiting_for_draft_to_stabilize":
        MQ(e) && (eT.current = "ready");
        break;
      case "ready":
        checkOverallProgress();
        eT.current = "progress_check";
        break;
      case "progress_check":
        stepWithErrors && stepWithErrors !== ea.activeTab ? (ea.setActiveTab(stepWithErrors), eT.current = "tab_switch") : (stepWithErrors || submit?.(), eT.current = "completed");
        break;
      case "tab_switch":
        checkProgress();
        eT.current = "completed";
    }
  }, [checkProgress, checkOverallProgress, stepWithErrors, submit, ea, e]);
  let [eI, eS] = useState(_$$X.STOPPED);
  let ev = eI === _$$X.PLAYING;
  s = draftSubmissionResult ? jsx(_$$S2, {
    publishedResourceContent: "data" in draftSubmissionResult ? draftSubmissionResult.data.hubFile : void 0,
    draftSubmissionStatus: draftSubmissionResult.result,
    carouselMediaField: e.fieldStates.carouselMedia,
    nameField: e.fieldStates.name,
    authorField: e.fieldStates.author,
    onAnimationStateChange: eS,
    viewerModeField: e.fieldStates.viewerMode,
    hideLikeAndUsage: !0
  }) : jsxs("div", {
    className: KT,
    children: [jsxs("div", {
      className: Cd,
      children: [jsxs(_$$t.TabStrip, {
        manager: ea,
        children: [jsx(_$$y, {
          ...er.details,
          index: 1,
          text: getI18nString("community.publishing.write_a_description"),
          selected: "details" === ea.activeTab,
          hasErrors: "details" === stepWithErrors
        }), jsx(_$$y, {
          ...er.thumbnail,
          index: 2,
          text: getI18nString("community.publishing.fine_tune_the_preview"),
          selected: "thumbnail" === ea.activeTab,
          hasErrors: "thumbnail" === stepWithErrors
        }), jsx(_$$y, {
          ...er.advanced,
          index: 3,
          text: getI18nString("community.publishing.add_the_final_details"),
          selected: "advanced" === ea.activeTab,
          hasErrors: "advanced" === stepWithErrors
        })]
      }), jsxs("div", {
        className: ME,
        "aria-hidden": !0,
        children: [jsx("div", {
          className: jc,
          children: getI18nString("community.publishing.resource_preview")
        }), jsx(_$$x, {
          carouselMediaField: e.fieldStates.carouselMedia,
          nameField: e.fieldStates.name,
          authorField: e.fieldStates.author
        })]
      })]
    }), jsxs("div", {
      className: DK,
      children: [jsxs(_$$t.TabPanel, {
        ...en.details,
        children: [jsx(Mm, {
          id: tZ.NAME_INPUT,
          children: t => jsx(_$$A6, {
            ref: t,
            nameField: e.fieldStates.name,
            ...J.name
          })
        }), jsx(Mm, {
          id: tZ.DESCRIPTION_INPUT,
          children: t => jsx(_$$A5, {
            ref: t,
            descriptionField: e.fieldStates.description,
            ...J.description
          })
        }), i_(e.fieldStates.category) && jsx(Mm, {
          id: tZ.TAGS_SECTION,
          children: e => Z.validV2Tags.length > 0 ? jsx(vj, {
            ref: e,
            tagsFieldsManager: Z,
            touchedFieldsTracker: J,
            autoScrollAutocompleteResultsIntoView: {
              behavior: "smooth",
              block: "end"
            }
          }) : jsx(Yv, {
            ref: e,
            tagsV1Field: Z.tagsV1Field,
            ...J.tagsV1,
            autoScrollAutocompleteResultsIntoView: {
              behavior: "smooth",
              block: "end"
            }
          })
        }), t && jsx(_$$A7, {
          label: getI18nString("community.publishing.preview_url"),
          children: jsx(_$$N, {
            href: t.fullURL,
            newTab: !0,
            children: t.fullURL
          })
        })]
      }), jsx(_$$t.TabPanel, {
        ...en.thumbnail,
        children: jsx(Mm, {
          id: tZ.THUMBNAIL_UPLOADER,
          children: e => jsx(_$$l, {
            ref: e,
            carouselMediaFieldManager: Q,
            trackingEventName: $$in,
            ...J.carouselMedia
          })
        })
      }), jsxs(_$$t.TabPanel, {
        ...en.advanced,
        children: [jsx(Mm, {
          id: tZ.PROMPT_VISIBILITY_CHECKBOX,
          children: e => jsx(_$$m, {
            ref: e
          })
        }), jsx(_$$A2, {
          authorField: e.fieldStates.author
        }), jsx(Mm, {
          id: tZ.PROFILE_HANDLE_INPUT,
          children: t => jsx(_$$S, {
            ref: t,
            profileHandleField: e.fieldStates.profileHandle,
            ...J.profileHandle
          })
        }), jsx(Mm, {
          id: tZ.COCREATORS_INPUT,
          children: jsx(_$$A3, {
            cocreatorsFieldManager: ee,
            ...J.cocreators
          })
        }), jsx(Mm, {
          id: tZ.TOS_AGREED_CHECKBOX,
          children: t => jsx(_$$B, {
            ref: t,
            tosAcceptedField: e.fieldStates.tosAccepted
          })
        }), jsx(_$$A4, {
          commentsSettingField: e.fieldStates.commentsSetting
        }), jsx(Mm, {
          id: tZ.SUPPORT_CONTACT_INPUT,
          children: t => jsx(_$$a2, {
            ref: t,
            priceField: e.fieldStates.price,
            supportContactField: e.fieldStates.supportContact,
            ...J.supportContact
          })
        })]
      })]
    })]
  });
  _ = ev || draftSubmissionResult?.result !== "success" ? ev || draftSubmissionResult?.result !== "failure" ? jsxs(Fragment, {
    children: [ea.isOnFirstTab ? jsx(Button, {
      variant: "secondary",
      onClick: q,
      children: getI18nString("general.cancel")
    }) : !ev && jsx(Button, {
      variant: "secondary",
      onClick: ea.selectPreviousTab,
      children: getI18nString("general.back")
    }), ea.isOnLastTab ? jsx(Button, {
      disabled: draftSubmissionResult?.result === "pending" || ev,
      onClick: () => {
        checkProgress() && submit?.();
      },
      "data-testid": "resource-publishing-make-form-view-submit-button",
      children: draftSubmissionResult?.result === "pending" || ev ? jsx(_$$k, {
        size: "sm"
      }) : getI18nString("community.publishing.publish")
    }) : jsx(Button, {
      onClick: () => {
        checkProgress() && ea.selectNextTab();
      },
      "data-testid": "resource-publishing-make-form-view-next-step-button",
      children: getI18nString("general.next")
    })]
  }) : jsx(_$$h, {
    holdTimeInMs: 5e3,
    onMouseHold: async () => {
      Y(lW({
        stringToCopy: JSON.stringify({
          figFileKey: e.deps.figFile?.key,
          existingHubFileId: existingHubFile?.id,
          createNewVersionOnSubmit: e.deps.createNewVersionOnSubmit,
          userId: e.deps.user.id,
          orgId: e.deps.org?.id,
          orgUserId: e.deps.orgUser?.id,
          allowedAuthors: e.deps.allowedAuthors,
          allowedCocreators: await _$$a(e.deps.allowedCocreatorsPromise.then(e => e.map(e => e.id))),
          authedProfilesById: Object.fromEntries(Object.entries(e.deps.authedProfilesById).map(([e, t]) => [e, h()(t, "id", "team_id", "org_id")])),
          authedActiveCommunityProfile: e.deps.authedActiveCommunityProfile && h()(e.deps.authedActiveCommunityProfile, "id", "team_id", "org_id"),
          errors: "error" === e.status ? e.errors.map(_$$L) : []
        }, void 0, 2),
        ignoreLineBreaks: !1,
        successText: getI18nString("community.publishing.debug_info_copied_to_clipboard")
      }));
    },
    children: jsx(Button, {
      variant: "secondary",
      onClick: clearDraftSubmissionResult,
      children: getI18nString("general.go_back")
    })
  }) : jsx(ek, {
    publishedHubFile: draftSubmissionResult.data.hubFile,
    publishedDomainInfo: t
  });
  let eA = useMemo(() => {
    if (!ev && draftSubmissionResult?.result !== "success") {
      if (stepWithErrors) return stepWithErrors === ea.activeTab ? getI18nString("community.publishing.please_fill_out_required_fields_and_correct_any_errors") : getI18nString("community.publishing.updates_are_needed_in_another_step");
      if ("error" === e.status) {
        let t;
        let r = e.errors.find(e => "submission" === e.type);
        let n = r?.data.rawError;
        (t = _$$l2(r)) || !n || (t = resolveMessage(n));
        return t ?? getI18nString("community.publishing.an_error_occurred_please_try_again");
      }
    }
  }, [e, draftSubmissionResult?.result, ev, stepWithErrors, ea.activeTab]);
  useEffect(() => {
    X.current($$in, {
      step: WX.OPENED
    });
  }, [X]);
  let ex = Lz(e.fieldStates.name, "");
  let eN = useDebouncedCallback(() => {
    X.current($$in, {
      step: WX.EDIT_NAME
    });
  }, 2e3);
  useEffect(() => {
    ex && J.name.touched && eN();
  }, [ex, eN, J.name.touched]);
  let eO = Lz(e.fieldStates.description, "");
  let eR = useDebouncedCallback(() => {
    X.current($$in, {
      step: WX.EDIT_DESCRIPTION
    });
  }, 1e4);
  useEffect(() => {
    eO && J.description.touched && eR();
  }, [eO, eR, J.description.touched]);
  return jsx(UI3ConditionalWrapper, {
    children: jsxs(_$$I, {
      onClose: q,
      width: "fit-content",
      height: "dynamic",
      children: [jsxs(DialogContents, {
        children: [jsx(DialogHeader, {
          children: jsx(DialogTitle, {
            children: renderI18nText("community.publishing.publish_your_file_to_community")
          })
        }), jsx(DialogBody, {
          padding: 0,
          scrolling: "none",
          children: s
        }), jsxs(DialogFooter, {
          children: [jsx("span", {
            className: $o,
            "aria-live": "assertive",
            "aria-atomic": !0,
            children: eA
          }), jsx(DialogActionStrip, {
            children: _
          })]
        })]
      }), jsx(_$$r, {
        draft: e,
        customRetryAction: {
          draftFailedToSubmit: submit
        }
      })]
    })
  });
}
function eR(e) {
  let {
    figFile,
    existingHubFile
  } = e;
  let n = selectUser();
  let o = useSelector(e => getCurrentUserOrgUser(e) ?? void 0, deepEqual);
  let l = useCurrentUserOrg();
  let d = useSelector(e => Rv(figFile?.team_id ?? null, e, existingHubFile ?? null, figFile?.parent_org_id ?? null), deepEqual);
  let c = useSelector(e => e.authedProfilesById);
  let u = useSelector(e => e.authedActiveCommunityProfile ?? void 0);
  let p = useMemo(async () => figFile ? (await mN(figFile)) ?? [] : [], [figFile]);
  let _ = eY();
  let h = _$$t3();
  return {
    user: n,
    org: l,
    orgUser: o,
    allowedAuthors: d,
    allowedCocreatorsPromise: p,
    authedProfilesById: c,
    authedActiveCommunityProfile: u,
    sceneGraph: _,
    siteTitle: (h.title ?? h.placeholder).trim()
  };
}
export function $$eL0(e) {
  let t = eR(e);
  let r = ed({
    ...e,
    ...t
  });
  let i = _t(e.figFile?.key ?? "");
  return jsx(TrackingProvider, {
    name: e0.COMMUNITY_HUB_FILE_PUBLISH_MODAL_V2,
    properties: {
      userId: t.user.id,
      orgId: t.org?.id,
      resourceType: ResourceTypeNoComment.HUB_FILE,
      resourceId: e.existingHubFile?.id,
      fileKey: e.figFile?.key,
      editorType: e.figFile?.editor_type,
      isPaid: wC(r.fieldStates.price)
    },
    children: jsx(eO, {
      draft: r,
      publishedDomainInfo: i
    })
  });
}
function eP({
  draft: e,
  publishedDomainInfo: t,
  canPublishAsHubFile: r,
  cannotPublishAsHubFileReason: s,
  onPublishFailure: o
}) {
  let l = useDispatch();
  let d = _$$H(o);
  let {
    trackEvent
  } = useTracking();
  let _ = _$$H(trackEvent);
  let [h, m] = useState();
  useEffect(() => {
    _.current($$in, {
      step: WX.OPENED
    });
  }, [_]);
  useEffect(() => {
    r && !h && (async () => {
      if (e.submit) {
        _.current($$in, {
          step: WX.PUBLISH
        });
        m({
          result: "pending"
        });
        let t = await e.submit();
        "failure" === t.result ? (_.current($$in, {
          step: WX.ERROR
        }), d.current?.("failed_to_submit")) : _.current($$in, {
          step: WX.SUCCESS
        });
        m(t);
      }
    })();
  }, [e, h, r, d, _]);
  useEffect(() => {
    s && (_.current($$in, {
      step: WX.ERROR,
      errorType: "source_file_cannot_be_published",
      errorReason: s
    }), m({
      result: "failure"
    }), d.current?.("source_file_cannot_be_published"));
  }, [s, d, _]);
  useEffect(() => {
    !h && !e.submit && MQ(e) && (_.current($$in, {
      step: WX.ERROR,
      errorType: "errors_in_form"
    }), m({
      result: "failure"
    }), d.current?.("errors_in_form"));
  }, [e, h, d, _]);
  let y = useCallback(() => {
    l(hideModal());
  }, [l]);
  let [b, T] = useState(_$$X.STOPPED);
  let v = b === _$$X.PLAYING;
  let A = useMemo(() => {
    if (!v && h?.result === "failure") {
      let t;
      if (s) return Yw(s);
      let r = "error" === e.status ? e.errors.find(e => "submission" === e.type) : void 0;
      let n = r?.data.rawError;
      (t = _$$l2(r)) || !n || (t = resolveMessage(n));
      return t ?? getI18nString("community.publishing.an_error_occurred_please_try_again");
    }
  }, [e, h?.result, v, s]);
  return jsx(UI3ConditionalWrapper, {
    children: jsxs(_$$I, {
      onClose: y,
      width: "fit-content",
      height: "dynamic",
      children: [jsxs(DialogContents, {
        children: [jsx(DialogHeader, {
          children: jsx(DialogTitle, {
            children: renderI18nText("community.publishing.publish_your_file_to_community")
          })
        }), jsx(DialogBody, {
          padding: 0,
          scrolling: "none",
          children: jsx(_$$S2, {
            publishedResourceContent: h?.result === "success" ? h.data.hubFile : void 0,
            draftSubmissionStatus: h?.result ?? "pending",
            carouselMediaField: e.fieldStates.carouselMedia,
            nameField: e.fieldStates.name,
            authorField: e.fieldStates.author,
            onAnimationStateChange: T,
            viewerModeField: e.fieldStates.viewerMode,
            hideLikeAndUsage: !0
          })
        }), jsxs(DialogFooter, {
          children: [jsx("span", {
            className: $o,
            "aria-live": "assertive",
            "aria-atomic": !0,
            children: A
          }), jsx(DialogActionStrip, {
            children: h?.result === "success" && !v && jsx(ek, {
              publishedHubFile: h.data.hubFile,
              publishedDomainInfo: t
            })
          })]
        })]
      }), jsx(_$$r, {
        draft: e,
        customRetryAction: {
          draftFailedToSubmit: e.submit
        }
      })]
    })
  });
}
export function $$eD1(e) {
  let t = eR(e);
  let r = el({
    ...e,
    ...t,
    autoAcceptToSIfNeeded: !0
  }, {
    name: t.siteTitle
  });
  let a = _t(e.figFile?.key ?? "");
  let {
    canPublishAsHubFile,
    reason
  } = Of(e.figFile);
  let [l, d] = useState(!1);
  return l ? jsx(eO, {
    draft: r,
    publishedDomainInfo: a,
    fastForwardOnMount: !0
  }) : jsx(eP, {
    draft: r,
    publishedDomainInfo: a,
    onPublishFailure: e => {
      "errors_in_form" === e && d(!0);
    },
    canPublishAsHubFile,
    cannotPublishAsHubFileReason: reason
  });
}
function ek({
  publishedHubFile: e,
  publishedDomainInfo: t
}) {
  return jsxs(Fragment, {
    children: [jsx(eM, {
      publishedResourceContent: e
    }), jsx(eF, {
      publishedDomainInfo: t
    })]
  });
}
function eM({
  publishedResourceContent: e
}) {
  return jsx(_$$N.Button, {
    variant: "secondary",
    href: jT(e),
    newTab: !0,
    trusted: !0,
    "data-testid": "resource-publishing-success-screen-actions-see-in-community-button",
    children: getI18nString("community.publishing.see_in_community")
  });
}
function eF({
  publishedDomainInfo: e
}) {
  return e ? jsx(_$$N.Button, {
    href: e.fullURL,
    newTab: !0,
    trusted: !0,
    "data-testid": "resource-publishing-success-screen-actions-go-to-web-button",
    children: getI18nString("community.publishing.go_to_web")
  }) : null;
}
export const M = $$eL0;
export const S = $$eD1;