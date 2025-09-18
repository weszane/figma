import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useCallback, useMemo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deepEqual } from "../905/382883";
import { t as _$$t } from "../905/150656";
import { Button } from "../905/521428";
import { k as _$$k } from "../905/443820";
import { DialogContents, DialogHeader, DialogTitle, DialogBody, DialogFooter, DialogActionStrip } from "../figma_app/272243";
import { UI3ConditionalWrapper } from "../905/341359";
import p from "../vendor/241899";
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
import { i_, Lz } from "../905/497882";
import { a as _$$a } from "../905/94741";
import { A as _$$A2 } from "../905/601732";
import { __, tZ, Mm } from "../905/271611";
import { t as _$$t3 } from "../905/104116";
import { P as _$$P } from "../905/19648";
import { A as _$$A3 } from "../905/554063";
import { A as _$$A4 } from "../905/425801";
import { A as _$$A5 } from "../905/813387";
import { A as _$$A6 } from "../905/144978";
import { x as _$$x } from "../905/956141";
import { S as _$$S } from "../905/60183";
import { X as _$$X, S as _$$S2 } from "../905/109653";
import { gx, Dg } from "../905/870778";
import { a as _$$a2 } from "../905/482941";
import { y as _$$y } from "../905/616507";
import { Yv } from "../905/488777";
import { vj } from "../905/652712";
import { l as _$$l } from "../905/493845";
import { B as _$$B } from "../905/536646";
import { wC } from "../905/448440";
import { AC } from "../905/524815";
import { n as _$$n } from "../905/341791";
import { t as _$$t4 } from "../905/431558";
import { w as _$$w } from "../905/893785";
import { J as _$$J3 } from "../905/296347";
import { h as _$$h2 } from "../905/214561";
import { W as _$$W } from "../905/526272";
import { lW } from "../figma_app/11182";
import { hideModal } from "../905/156213";
import { $$in, PublishModalState } from "../figma_app/350203";
import { useTracking, TrackingProvider } from "../figma_app/831799";
import { Rv, mN } from "../figma_app/599979";
import { useSceneGraphSelector } from "../figma_app/722362";
import { useCurrentUserOrg } from "../905/845253";
import { selectUser } from "../905/372672";
import { getCurrentUserOrgUser } from "../figma_app/951233";
import { ResourceTypeNoComment } from "../figma_app/45218";
import { e0 } from "../905/696396";
import { KT, Cd, ME, jc, DK, $o } from "../905/54042";
var m = p;
function ep({
  draft: e
}) {
  let t;
  let i;
  let {
    existingHubFile
  } = e.deps;
  let p = useDispatch();
  let {
    trackEvent
  } = useTracking();
  let Y = _$$H(trackEvent);
  let Q = useCallback(() => {
    p(hideModal());
    Y.current($$in, {
      step: PublishModalState.CLOSED
    });
  }, [p, Y]);
  let er = _$$D(e.fieldStates);
  _$$W(e.fieldStates.viewerMode);
  let ea = _$$t4(e.fieldStates.category);
  let es = _$$J3({
    tagsV1Field: e.fieldStates.tagsV1,
    tagsV2Field: e.fieldStates.tagsV2
  });
  let eo = _$$n(e.fieldStates.carouselMedia, useMemo(() => {}, []));
  let el = _$$w(e.fieldStates.cocreators);
  let ed = useMemo(() => ({
    details: !0,
    thumbnail: !0,
    advanced: !0
  }), []);
  let [ec, ep, em] = _$$t.useTabs(ed, {
    orientation: "vertical"
  });
  let eg = _$$b(em);
  let {
    stepWithErrors,
    clearStepWithErrors,
    checkProgress
  } = _$$o([{
    id: "details",
    checkpoints: [{
      check: () => i_(e.fieldStates.name),
      onFail: () => __(tZ.NAME_INPUT)
    }, {
      check: () => i_(e.fieldStates.description),
      onFail: () => __(tZ.DESCRIPTION_INPUT)
    }, {
      check: () => i_(e.fieldStates.category),
      onFail: () => __(tZ.CATEGORY_SELECT)
    }, {
      check: () => i_(e.fieldStates.tagsV2) && i_(e.fieldStates.tagsV1),
      onFail: () => __(tZ.TAGS_SECTION)
    }],
    onFail: () => {
      er.name.onTouched?.();
      er.description.onTouched?.();
      er.category.onTouched?.();
      er.tagsV2.onTouched?.();
      er.tagsV1.onTouched?.();
    }
  }, {
    id: "thumbnail",
    checkpoints: [{
      check: () => i_(e.fieldStates.carouselMedia),
      onFail: () => {
        let t = e.fieldStates.carouselMedia;
        let i = "error" === t.status ? t.errors[0] : void 0;
        if (i && "key" in i) {
          let {
            key
          } = i;
          switch (key) {
            case "THUMBNAIL_MEDIUM_MISSING":
              __(tZ.THUMBNAIL_UPLOADER);
              break;
            case "CAROUSEL_MEDIA_EMPTY":
            case "HAS_TOO_MANY_CAROUSEL_MEDIA":
            case "HAS_TOO_MANY_VIDEOS":
              __(tZ.CAROUSEL_MEDIA_UPLOADER);
          }
        }
      }
    }],
    onFail: () => {
      er.carouselMedia.onTouched?.();
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
      er.profileHandle.onTouched?.();
      er.cocreators.onTouched?.();
      er.supportContact.onTouched?.();
      er.tosAccepted.onTouched?.();
    }
  }], eg.activeTab);
  useEffect(() => {
    clearStepWithErrors();
  }, [e.fieldStates, clearStepWithErrors]);
  let {
    draftSubmissionResult,
    clearDraftSubmissionResult,
    submit
  } = _$$r2(e, useCallback(() => {
    Y.current($$in, {
      step: PublishModalState.PUBLISH
    });
  }, [Y]));
  let [eI, eE] = useState(_$$X.STOPPED);
  let ex = eI === _$$X.PLAYING;
  t = draftSubmissionResult ? jsx(_$$S2, {
    publishedResourceContent: "data" in draftSubmissionResult ? draftSubmissionResult.data.hubFile : void 0,
    draftSubmissionStatus: draftSubmissionResult.result,
    carouselMediaField: e.fieldStates.carouselMedia,
    nameField: e.fieldStates.name,
    authorField: e.fieldStates.author,
    onAnimationStateChange: eE
  }) : jsxs("div", {
    className: KT,
    children: [jsxs("div", {
      className: Cd,
      children: [jsxs(_$$t.TabStrip, {
        manager: eg,
        children: [jsx(_$$y, {
          ...ec.details,
          index: 1,
          text: getI18nString("community.publishing.describe_your_resource"),
          selected: "details" === eg.activeTab,
          hasErrors: "details" === stepWithErrors
        }), jsx(_$$y, {
          ...ec.thumbnail,
          index: 2,
          text: getI18nString("community.publishing.set_a_thumbnail"),
          selected: "thumbnail" === eg.activeTab,
          hasErrors: "thumbnail" === stepWithErrors
        }), jsx(_$$y, {
          ...ec.advanced,
          index: 3,
          text: getI18nString("community.publishing.add_the_final_details"),
          selected: "advanced" === eg.activeTab,
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
        ...ep.details,
        children: [jsx(Mm, {
          id: tZ.NAME_INPUT,
          children: t => jsx(_$$A6, {
            ref: t,
            nameField: e.fieldStates.name,
            ...er.name
          })
        }), jsx(Mm, {
          id: tZ.DESCRIPTION_INPUT,
          children: t => jsx(_$$A5, {
            ref: t,
            descriptionField: e.fieldStates.description,
            ...er.description
          })
        }), jsx(Mm, {
          id: tZ.CATEGORY_SELECT,
          children: e => jsx(_$$P, {
            ref: e,
            categoryFieldManager: ea,
            ...er.category
          })
        }), i_(e.fieldStates.category) && jsx(Mm, {
          id: tZ.TAGS_SECTION,
          children: e => es.validV2Tags.length > 0 ? jsx(vj, {
            ref: e,
            tagsFieldsManager: es,
            touchedFieldsTracker: er,
            autoScrollAutocompleteResultsIntoView: {
              behavior: "smooth",
              block: "end"
            }
          }) : jsx(Yv, {
            ref: e,
            tagsV1Field: es.tagsV1Field,
            ...er.tagsV1,
            autoScrollAutocompleteResultsIntoView: {
              behavior: "smooth",
              block: "end"
            }
          })
        })]
      }), jsxs(_$$t.TabPanel, {
        ...ep.thumbnail,
        children: [jsx(Mm, {
          id: tZ.THUMBNAIL_UPLOADER,
          children: e => jsx(_$$l, {
            ref: e,
            carouselMediaFieldManager: eo,
            trackingEventName: $$in,
            ...er.carouselMedia
          })
        }), jsx(Mm, {
          id: tZ.CAROUSEL_MEDIA_UPLOADER,
          children: e => jsx(_$$t3, {
            ref: e,
            carouselMediaFieldManager: eo,
            ...er.carouselMedia
          })
        })]
      }), jsxs(_$$t.TabPanel, {
        ...ep.advanced,
        children: [jsx(_$$A2, {
          authorField: e.fieldStates.author
        }), jsx(Mm, {
          id: tZ.PROFILE_HANDLE_INPUT,
          children: t => jsx(_$$S, {
            ref: t,
            profileHandleField: e.fieldStates.profileHandle,
            ...er.profileHandle
          })
        }), jsx(Mm, {
          id: tZ.COCREATORS_INPUT,
          children: jsx(_$$A3, {
            cocreatorsFieldManager: el,
            ...er.cocreators
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
            ...er.supportContact
          })
        })]
      })]
    })]
  });
  i = ex || draftSubmissionResult?.result !== "success" ? ex || draftSubmissionResult?.result !== "failure" ? jsxs(Fragment, {
    children: [eg.isOnFirstTab ? jsx(Button, {
      variant: "secondary",
      onClick: Q,
      children: getI18nString("general.cancel")
    }) : !ex && jsx(Button, {
      variant: "secondary",
      onClick: eg.selectPreviousTab,
      children: getI18nString("general.back")
    }), eg.isOnLastTab ? jsx(Button, {
      disabled: draftSubmissionResult?.result === "pending" || ex,
      onClick: () => {
        checkProgress() && submit?.();
      },
      "data-testid": "resource-publishing-sites-form-view-submit-button",
      children: draftSubmissionResult?.result === "pending" || ex ? jsx(_$$k, {
        size: "sm"
      }) : getI18nString("community.publishing.publish")
    }) : jsx(Button, {
      onClick: () => {
        checkProgress() && eg.selectNextTab();
      },
      "data-testid": "resource-publishing-sites-form-view-next-step-button",
      children: getI18nString("general.next")
    })]
  }) : jsx(_$$h, {
    holdTimeInMs: 5e3,
    onMouseHold: async () => {
      p(lW({
        stringToCopy: JSON.stringify({
          figFileKey: e.deps.figFile?.key,
          existingHubFileId: existingHubFile?.id,
          createNewVersionOnSubmit: e.deps.createNewVersionOnSubmit,
          userId: e.deps.user.id,
          orgId: e.deps.org?.id,
          orgUserId: e.deps.orgUser?.id,
          allowedAuthors: e.deps.allowedAuthors,
          allowedCocreators: await _$$a(e.deps.allowedCocreatorsPromise.then(e => e.map(e => e.id))),
          authedProfilesById: Object.fromEntries(Object.entries(e.deps.authedProfilesById).map(([e, t]) => [e, m()(t, "id", "team_id", "org_id")])),
          authedActiveCommunityProfile: e.deps.authedActiveCommunityProfile && m()(e.deps.authedActiveCommunityProfile, "id", "team_id", "org_id"),
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
  }) : jsxs(Fragment, {
    children: [jsx(gx, {
      publishedResourceContent: draftSubmissionResult.data.hubFile
    }), jsx(Dg, {
      publishedResourceContent: draftSubmissionResult.data.hubFile
    })]
  });
  let eS = useMemo(() => {
    if (!ex && draftSubmissionResult?.result !== "success") {
      if (stepWithErrors) return stepWithErrors === eg.activeTab ? getI18nString("community.publishing.please_fill_out_required_fields_and_correct_any_errors") : getI18nString("community.publishing.updates_are_needed_in_another_step");
      if ("error" === e.status) {
        let t;
        let i = e.errors.find(e => "submission" === e.type);
        let n = i?.data.rawError;
        (t = $$eh1(i)) || !n || (t = resolveMessage(n));
        return t ?? getI18nString("community.publishing.an_error_occurred_please_try_again");
      }
    }
  }, [e, draftSubmissionResult?.result, ex, stepWithErrors, eg.activeTab]);
  useEffect(() => {
    Y.current($$in, {
      step: PublishModalState.OPENED
    });
  }, [Y]);
  let ew = Lz(e.fieldStates.name, "");
  let eC = useDebouncedCallback(() => {
    Y.current($$in, {
      step: PublishModalState.EDIT_NAME
    });
  }, 2e3);
  useEffect(() => {
    ew && er.name.touched && eC();
  }, [ew, eC, er.name.touched]);
  let eT = Lz(e.fieldStates.description, "");
  let ek = useDebouncedCallback(() => {
    Y.current($$in, {
      step: PublishModalState.EDIT_DESCRIPTION
    });
  }, 1e4);
  useEffect(() => {
    eT && er.description.touched && ek();
  }, [eT, ek, er.description.touched]);
  return jsx(UI3ConditionalWrapper, {
    children: jsxs(_$$I, {
      onClose: Q,
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
          children: t
        }), jsxs(DialogFooter, {
          children: [jsx("span", {
            className: $o,
            "aria-live": "assertive",
            "aria-atomic": !0,
            children: eS
          }), jsx(DialogActionStrip, {
            children: i
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
export function $$em0(e) {
  let {
    figFile,
    existingHubFile
  } = e;
  let o = selectUser();
  let l = _$$h2(figFile);
  let d = useSelector(e => getCurrentUserOrgUser(e) ?? void 0, deepEqual);
  let c = useCurrentUserOrg();
  let u = useSelector(e => Rv(figFile?.team_id ?? null, e, existingHubFile ?? null, figFile?.parent_org_id ?? null), deepEqual);
  let p = useSelector(e => e.authedProfilesById);
  let m = useSelector(e => e.authedActiveCommunityProfile ?? void 0);
  let h = useMemo(async () => figFile ? (await mN(figFile)) ?? [] : [], [figFile]);
  let g = useSceneGraphSelector();
  let f = AC({
    ...e,
    user: o,
    org: c,
    orgUser: d,
    canvasThumbnailPromise: l,
    allowedAuthors: u,
    allowedCocreatorsPromise: h,
    authedProfilesById: p,
    authedActiveCommunityProfile: m,
    sceneGraph: g
  });
  return jsx(TrackingProvider, {
    name: e0.COMMUNITY_HUB_FILE_PUBLISH_MODAL_V2,
    properties: {
      userId: o.id,
      orgId: c?.id,
      resourceType: ResourceTypeNoComment.HUB_FILE,
      resourceId: existingHubFile?.id,
      fileKey: figFile?.key,
      editorType: figFile?.editor_type,
      isPaid: wC(f.fieldStates.price)
    },
    children: jsx(ep, {
      draft: f
    })
  });
}
export function $$eh1(e) {
  if (e && "submission" === e.type && "ERROR_PUBLISHING_SITE" === e.key) return getI18nString("community.publishing.failed_to_deploy_site_please_check_settings_and_try_again");
}
export const A = $$em0;
export const l = $$eh1;