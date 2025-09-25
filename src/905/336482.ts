import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useCallback, useMemo, useEffect, useState, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { throwTypeError } from "../figma_app/465776";
import { getI18nString, renderI18nText } from "../905/303541";
import { Jj, bY } from "../figma_app/2023";
import { FPublicationStatusType, FTemplateCategoryType, FFileType } from "../figma_app/191312";
import { liveStoreInstance } from "../905/713695";
import { PageTypeEnum } from "../figma_app/10554";
import { $S } from "../905/918620";
import { deepEqual } from "../905/382883";
import { t as _$$t2 } from "../905/150656";
import { Button } from "../905/521428";
import { k as _$$k } from "../905/443820";
import { DialogContents, DialogHeader, DialogTitle, DialogBody, DialogFooter, DialogActionStrip } from "../figma_app/272243";
import { UI3ConditionalWrapper } from "../905/341359";
import { useAtomValueAndSetter } from "../figma_app/27355";
import b from "../vendor/241899";
import { useDebouncedCallback } from "use-debounce";
import { H as _$$H } from "../905/620380";
import { h as _$$h } from "../905/207101";
import { resolveMessage } from "../905/231762";
import { b as _$$b } from "../905/403202";
import { L as _$$L } from "../905/884941";
import { h as _$$h2 } from "../905/706336";
import { I as _$$I } from "../905/293573";
import { r as _$$r } from "../905/334940";
import { o as _$$o } from "../905/785255";
import { r as _$$r2 } from "../905/290294";
import { D as _$$D } from "../905/572843";
import { withSubmissionError, unsetSymbol } from "../905/17894";
import { isFieldValidated, assertFieldReady, getFieldValueOrDefault, canSetFieldValue } from "../905/497882";
import { a as _$$a } from "../905/94741";
import { A as _$$A3 } from "../905/601732";
import { __, tZ, Mm } from "../905/271611";
import { A as _$$A4 } from "../905/554063";
import { A as _$$A5 } from "../905/425801";
import { A as _$$A6 } from "../905/813387";
import { A as _$$A7 } from "../905/144978";
import { S as _$$S } from "../905/60183";
import { X as _$$X, S as _$$S2 } from "../905/109653";
import { gx, Dg } from "../905/870778";
import { a as _$$a2 } from "../905/482941";
import { y as _$$y } from "../905/616507";
import { Yv } from "../905/488777";
import { B as _$$B } from "../905/536646";
import { WN, wC, LG } from "../905/448440";
import { ServiceCategories } from "../905/165054";
import { getFeatureFlags } from "../905/601108";
import J from "../vendor/781591";
import { debugState } from "../905/407919";
import { reportError } from "../905/11";
import { getValueOrFallback } from "../905/872825";
import { setupFormValidationHandler, setupAtomFormHandler } from "../905/15569";
import { q as _$$q } from "../905/840070";
import { v as _$$v, V as _$$V } from "../905/513628";
import { S as _$$S4 } from "../905/622482";
import { T as _$$T2 } from "../905/191864";
import { z as _$$z } from "../905/348343";
import { om } from "../905/175462";
import { i2 } from "../905/57749";
import { aS } from "../905/772769";
import { f as _$$f } from "../905/265642";
import { Y as _$$Y } from "../905/192715";
import { m as _$$m } from "../905/601661";
import { OA, PP, PH, Pn } from "../905/230175";
import { maybeCreateSavepoint } from "../905/294113";
import { S3, Rr, fY, YI, SK, Ur, RN, nz, fe } from "../905/234639";
import { w as _$$w } from "../905/893785";
import { W as _$$W } from "../905/526272";
import { lW } from "../figma_app/11182";
import { hideModal } from "../905/156213";
import { $$in, PublishModalState } from "../figma_app/350203";
import { useTracking, TrackingProvider } from "../figma_app/831799";
import { Rv, mN } from "../figma_app/599979";
import { useCurrentUserOrg } from "../905/845253";
import { selectUser } from "../905/372672";
import { getCurrentUserOrgUser } from "../figma_app/951233";
import { ResourceTypeNoComment, hasClientMeta } from "../figma_app/45218";
import { LibrarySourceEnum } from "../figma_app/633080";
import { e0 as _$$e3 } from "../905/696396";
import { pz } from "../figma_app/825489";
import { KT, Cd, DK, $o, ME, jc } from "../905/54042";
import { r as _$$r3 } from "../905/490676";
import { PrototypingTsApi } from "../figma_app/763686";
import { t as _$$t3 } from "../905/104116";
import { CategorySelectDropdown } from "../905/19648";
import { $ as _$$$ } from "../905/410306";
import { H as _$$H2 } from "../905/367945";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { A as _$$A8 } from "../905/172237";
import { r as _$$r4 } from "../905/783627";
import { x as _$$x } from "../905/956141";
import { K as _$$K } from "../905/198422";
import { d as _$$d } from "../905/49800";
import { HiddenLabel } from "../905/270045";
import { FieldContainer } from "../905/567946";
import { vj } from "../905/652712";
import { l as _$$l } from "../905/493845";
import { Z9 } from "../905/104173";
import { nV, bn } from "../905/361060";
import { m as _$$m3 } from "../905/924751";
import { aB } from "../905/576221";
import { u as _$$u } from "../905/747030";
import { ZS } from "../figma_app/519839";
import { n as _$$n } from "../905/341791";
import { t as _$$t4 } from "../905/431558";
import { p as _$$p } from "../905/896627";
import { J as _$$J3 } from "../905/296347";
import { h as _$$h4 } from "../905/214561";
import { M as _$$M } from "../figma_app/590972";
import { A as _$$A0 } from "../905/121353";
var v = b;
var ee = J;
let ey = {
  displayName: "CooperForm",
  fields: {
    name: om,
    description: _$$z,
    tagsV1: _$$f,
    carouselMedia: _$$v,
    viewerMode: _$$m,
    author: _$$q,
    profileHandle: i2,
    cocreators: _$$S4,
    commentsSetting: _$$T2,
    tosAccepted: _$$Y,
    price: WN,
    supportContact: aS
  },
  fieldToDeps: {
    name: {
      figFile: {
        type: "form",
        source: "figFile"
      },
      existingResourceContent: {
        type: "form",
        source: "existingHubFile"
      }
    },
    description: {
      existingResourceContent: {
        type: "form",
        source: "existingHubFile"
      },
      valueRequired: {
        type: "constant",
        value: !0
      }
    },
    tagsV1: {
      existingResourceContent: {
        type: "form",
        source: "existingHubFile"
      }
    },
    carouselMedia: {
      existingResourceContent: {
        type: "form",
        source: "existingHubFile"
      },
      createNewVersionOnSubmit: {
        type: "form",
        source: "createNewVersionOnSubmit"
      },
      allowVideos: {
        type: "constant",
        value: !1
      },
      disallowExtraMedia: {
        type: "constant",
        value: !0
      },
      generateInitialValue: {
        type: "constant",
        value: {
          generate: OA,
          preferOverExistingValue: !0,
          disallowManualUpdate: !0
        }
      },
      viewerModeField: {
        type: "otherField",
        source: "viewerMode"
      }
    },
    viewerMode: {
      figFile: {
        type: "form",
        source: "figFile"
      },
      existingHubFile: {
        type: "form",
        source: "existingHubFile"
      },
      createNewVersionOnSubmit: {
        type: "form",
        source: "createNewVersionOnSubmit"
      }
    },
    author: {
      existingResourceContent: {
        type: "form",
        source: "existingHubFile"
      },
      user: {
        type: "form",
        source: "user"
      },
      allowedAuthors: {
        type: "form",
        source: "allowedAuthors"
      },
      authedProfilesById: {
        type: "form",
        source: "authedProfilesById"
      },
      authedActiveCommunityProfile: {
        type: "form",
        source: "authedActiveCommunityProfile"
      }
    },
    profileHandle: {
      authorField: {
        type: "otherField",
        source: "author"
      },
      authedProfilesById: {
        type: "form",
        source: "authedProfilesById"
      },
      valueRequired: {
        type: "constant",
        value: !0
      }
    },
    cocreators: {
      existingResourceContent: {
        type: "form",
        source: "existingHubFile"
      },
      authedProfilesById: {
        type: "form",
        source: "authedProfilesById"
      },
      allowedCocreatorsPromise: {
        type: "form",
        source: "allowedCocreatorsPromise"
      },
      authorField: {
        type: "otherField",
        source: "author"
      },
      priceField: {
        type: "otherField",
        source: "price"
      }
    },
    commentsSetting: {
      existingResourceContent: {
        type: "form",
        source: "existingHubFile"
      }
    },
    tosAccepted: {
      orgUser: {
        type: "form",
        source: "orgUser"
      }
    },
    price: {
      figFile: {
        type: "form",
        source: "figFile"
      },
      authorField: {
        type: "otherField",
        source: "author"
      },
      user: {
        type: "form",
        source: "user"
      },
      org: {
        type: "form",
        source: "org"
      },
      existingResourceContent: {
        type: "form",
        source: "existingHubFile"
      }
    },
    supportContact: {
      existingResourceContent: {
        type: "form",
        source: "existingHubFile"
      },
      priceField: {
        type: "otherField",
        source: "price"
      }
    }
  },
  validate: ({
    existingHubFile: e,
    publishableComponentNodeIds: t,
    localComponents: i
  }) => PP({
    hasExistingResourceContent: !!e,
    publishableComponentNodeIds: t,
    localComponents: i
  }),
  canSubmit: ({}, e) => Object.keys(e).every(t => isFieldValidated(e[t])),
  submit: async (e, t) => {
    let i;
    let n;
    let r;
    let a;
    let s;
    let {
      createNewVersionOnSubmit,
      figFile,
      publishableComponentNodeIds
    } = e;
    let {
      description
    } = t;
    if (createNewVersionOnSubmit) try {
      i = (await maybeCreateSavepoint(figFile.key, "Published to Community hub", assertFieldReady(description).currentValue, debugState.dispatch))?.id;
    } catch (e) {
      reportError(ServiceCategories.COMMUNITY, e);
      return new withSubmissionError.SubmissionError({
        key: "ERROR_CREATING_SAVEPOINT",
        data: {
          rawError: e,
          debugInfo: {
            figFileKey: figFile.key
          }
        }
      });
    }
    try {
      n = await S3({
        ...e,
        ...t,
        newVersionId: i
      });
    } catch (n) {
      reportError(ServiceCategories.COMMUNITY, n);
      return new withSubmissionError.SubmissionError({
        key: "ERROR_UPLOADING_IMAGES",
        data: {
          rawError: n,
          debugInfo: {
            createNewVersionOnSubmit,
            existingHubFileId: _$$L(e.existingHubFile?.id),
            newVersionId: _$$L(i),
            carouselMediaFieldValue: _$$L(t.carouselMedia.currentValue)
          }
        }
      });
    }
    try {
      createNewVersionOnSubmit ? {
        hubFile: r,
        actingProfile: a,
        profileCreated: s
      } = await Rr({
        ...e,
        ...t,
        ...n,
        newVersionId: i
      }) : {
        hubFile: r
      } = await fY({
        ...e,
        ...t,
        ...n
      });
    } catch (t) {
      reportError(ServiceCategories.COMMUNITY, t);
      return new withSubmissionError.SubmissionError({
        key: "ERROR_FINALIZING_VERSION",
        data: t instanceof YI ? {
          rawError: t.rawError,
          debugInfo: {
            createNewVersionOnSubmit: _$$L(createNewVersionOnSubmit),
            existingHubFileId: _$$L(e.existingHubFile?.id),
            requestPayload: _$$L(t.requestPayload)
          }
        } : {
          rawError: t
        }
      });
    }
    try {
      SK({
        ...e,
        ...t,
        hubFile: r,
        actingProfile: a,
        profileCreated: s,
        updateSource: "CooperForm.submit"
      });
    } catch (e) {
      reportError(ServiceCategories.COMMUNITY, e);
      return new withSubmissionError.SubmissionError({
        key: "ERROR_UPDATING_STORES",
        data: {
          rawError: e
        }
      });
    }
    try {
      await PH({
        publishableComponentNodeIds,
        hubFileId: r.id,
        savepointDescription: "cooper hub file publish"
      });
    } catch (t) {
      let e = t instanceof Error ? t : void 0;
      e && reportError(ServiceCategories.COMMUNITY, e);
      return new withSubmissionError.SubmissionError({
        key: "ERROR_PUBLISHING_LIBRARY_CHANGES",
        data: {
          rawError: e,
          debugInfo: {
            publishableComponentNodeIds,
            ...(e ? {} : ee()(t, "dispatch"))
          }
        }
      });
    }
    if (getFeatureFlags().cmty_m10n_poll_hub_file_statuses_on_publish) try {
      let e = await Ur(r.id);
      if (void 0 === e) {
        let e = Error("Validations not passed in time");
        reportError(ServiceCategories.COMMUNITY, e);
        return new withSubmissionError.SubmissionError({
          key: "ERROR_VALIDATIONS_NOT_PASSED_IN_TIME",
          data: {
            rawError: e
          }
        });
      }
      r.publishing_status = getValueOrFallback(e, FPublicationStatusType) ?? null;
      RN(r, "CooperForm.submit");
    } catch (e) {
      reportError(ServiceCategories.COMMUNITY, e);
      return new withSubmissionError.SubmissionError({
        key: "ERROR_VALIDATING_STATUS",
        data: {
          rawError: e
        }
      });
    }
    try {
      nz(r);
    } catch (e) {
      reportError(ServiceCategories.COMMUNITY, e);
      return new withSubmissionError.SubmissionError({
        key: "ERROR_UPDATING_STORES",
        data: {
          rawError: e
        }
      });
    }
    return {
      hubFile: r,
      actingProfile: a,
      profileCreated: s
    };
  }
};
let eb = setupFormValidationHandler(ey);
let ev = setupAtomFormHandler(eb, fe);
function eM({
  draft: e
}) {
  let t;
  let i;
  let {
    existingHubFile
  } = e.deps;
  let l = useDispatch();
  let {
    trackEvent
  } = useTracking();
  let c = _$$H(trackEvent);
  let u = useCallback(() => {
    l(hideModal());
    c.current($$in, {
      step: PublishModalState.CLOSED
    });
  }, [l, c]);
  let p = _$$D(e.fieldStates);
  _$$W(e.fieldStates.viewerMode);
  let m = _$$w(e.fieldStates.cocreators);
  let y = useMemo(() => ({
    details: !0,
    advanced: !0
  }), []);
  let [b, x, D] = _$$t2.useTabs(y, {
    orientation: "vertical"
  });
  let Z = _$$b(D);
  let {
    stepWithErrors,
    clearStepWithErrors,
    checkProgress
  } = _$$o([{
    id: "details",
    checkpoints: [{
      check: () => isFieldValidated(e.fieldStates.name),
      onFail: () => __(tZ.NAME_INPUT)
    }, {
      check: () => isFieldValidated(e.fieldStates.description),
      onFail: () => __(tZ.DESCRIPTION_INPUT)
    }, {
      check: () => isFieldValidated(e.fieldStates.tagsV1),
      onFail: () => __(tZ.TAGS_SECTION)
    }],
    onFail: () => {
      p.name.onTouched?.();
      p.description.onTouched?.();
      p.tagsV1.onTouched?.();
    }
  }, {
    id: "advanced",
    checkpoints: [{
      check: () => isFieldValidated(e.fieldStates.profileHandle),
      onFail: () => __(tZ.PROFILE_HANDLE_INPUT)
    }, {
      check: () => isFieldValidated(e.fieldStates.cocreators),
      onFail: () => __(tZ.COCREATORS_INPUT)
    }, {
      check: () => isFieldValidated(e.fieldStates.tosAccepted),
      onFail: () => __(tZ.TOS_AGREED_CHECKBOX)
    }, {
      check: () => isFieldValidated(e.fieldStates.supportContact),
      onFail: () => __(tZ.SUPPORT_CONTACT_INPUT)
    }],
    onFail: () => {
      p.profileHandle.onTouched?.();
      p.cocreators.onTouched?.();
      p.price.onTouched?.();
      p.supportContact.onTouched?.();
      p.tosAccepted.onTouched?.();
    }
  }], Z.activeTab);
  useEffect(() => {
    clearStepWithErrors();
  }, [e.fieldStates, clearStepWithErrors]);
  let {
    draftSubmissionResult,
    clearDraftSubmissionResult,
    submit
  } = _$$r2(e, useCallback(() => {
    c.current($$in, {
      step: PublishModalState.PUBLISH
    });
  }, [c]));
  let [en, er] = useState(_$$X.STOPPED);
  let ea = en === _$$X.PLAYING;
  t = draftSubmissionResult ? jsx(_$$S2, {
    publishedResourceContent: "data" in draftSubmissionResult ? draftSubmissionResult.data.hubFile : void 0,
    draftSubmissionStatus: draftSubmissionResult.result,
    carouselMediaField: e.fieldStates.carouselMedia,
    nameField: e.fieldStates.name,
    authorField: e.fieldStates.author,
    onAnimationStateChange: er,
    showThumbnailWithLetterbox: !0,
    viewerModeField: e.fieldStates.viewerMode
  }) : jsxs("div", {
    className: KT,
    children: [jsx("div", {
      className: Cd,
      children: jsxs(_$$t2.TabStrip, {
        manager: Z,
        children: [jsx(_$$y, {
          ...b.details,
          index: 1,
          text: getI18nString("community.publishing.describe_your_resource"),
          selected: "details" === Z.activeTab,
          hasErrors: "details" === stepWithErrors
        }), jsx(_$$y, {
          ...b.advanced,
          index: 2,
          text: getI18nString("community.publishing.add_the_final_details"),
          selected: "advanced" === Z.activeTab,
          hasErrors: "advanced" === stepWithErrors
        })]
      })
    }), jsxs("div", {
      className: DK,
      children: [jsxs(_$$t2.TabPanel, {
        ...x.details,
        children: [jsx(Mm, {
          id: tZ.NAME_INPUT,
          children: t => jsx(_$$A7, {
            ref: t,
            nameField: e.fieldStates.name,
            ...p.name
          })
        }), jsx(Mm, {
          id: tZ.DESCRIPTION_INPUT,
          children: t => jsx(_$$A6, {
            ref: t,
            descriptionField: e.fieldStates.description,
            ...p.description
          })
        }), jsx(Mm, {
          id: tZ.TAGS_SECTION,
          children: t => jsx(Yv, {
            ref: t,
            tagsV1Field: e.fieldStates.tagsV1,
            ...p.tagsV1,
            autoScrollAutocompleteResultsIntoView: {
              behavior: "smooth",
              block: "end"
            }
          })
        })]
      }), jsxs(_$$t2.TabPanel, {
        ...x.advanced,
        children: [jsx(_$$A3, {
          authorField: e.fieldStates.author
        }), jsx(Mm, {
          id: tZ.PROFILE_HANDLE_INPUT,
          children: t => jsx(_$$S, {
            ref: t,
            profileHandleField: e.fieldStates.profileHandle,
            ...p.profileHandle
          })
        }), jsx(Mm, {
          id: tZ.COCREATORS_INPUT,
          children: jsx(_$$A4, {
            cocreatorsFieldManager: m,
            ...p.cocreators
          })
        }), jsx(Mm, {
          id: tZ.TOS_AGREED_CHECKBOX,
          children: t => jsx(_$$B, {
            ref: t,
            tosAcceptedField: e.fieldStates.tosAccepted
          })
        }), jsx(_$$A5, {
          commentsSettingField: e.fieldStates.commentsSetting
        }), jsx(Mm, {
          id: tZ.SUPPORT_CONTACT_INPUT,
          children: t => jsx(_$$a2, {
            ref: t,
            priceField: e.fieldStates.price,
            supportContactField: e.fieldStates.supportContact,
            ...p.supportContact
          })
        })]
      })]
    })]
  });
  i = ea || draftSubmissionResult?.result !== "success" ? ea || draftSubmissionResult?.result !== "failure" ? jsxs(Fragment, {
    children: [Z.isOnFirstTab ? jsx(Button, {
      variant: "secondary",
      onClick: u,
      children: getI18nString("general.cancel")
    }) : !ea && jsx(Button, {
      variant: "secondary",
      onClick: Z.selectPreviousTab,
      children: getI18nString("general.back")
    }), Z.isOnLastTab ? jsx(Button, {
      disabled: draftSubmissionResult?.result === "pending" || ea,
      onClick: () => {
        checkProgress() && submit?.();
      },
      children: draftSubmissionResult?.result === "pending" || ea ? jsx(_$$k, {
        size: "sm"
      }) : getI18nString("community.publishing.publish")
    }) : jsx(Button, {
      onClick: () => {
        checkProgress() && Z.selectNextTab();
      },
      children: getI18nString("general.next")
    })]
  }) : jsx(_$$h2, {
    holdTimeInMs: 5e3,
    onMouseHold: async () => {
      l(lW({
        stringToCopy: JSON.stringify({
          figFileKey: e.deps.figFile?.key,
          existingHubFileId: existingHubFile?.id,
          createNewVersionOnSubmit: e.deps.createNewVersionOnSubmit,
          userId: e.deps.user.id,
          orgId: e.deps.org?.id,
          orgUserId: e.deps.orgUser?.id,
          allowedAuthors: e.deps.allowedAuthors,
          allowedCocreators: await _$$a(e.deps.allowedCocreatorsPromise.then(e => e.map(e => e.id))),
          authedProfilesById: Object.fromEntries(Object.entries(e.deps.authedProfilesById).map(([e, t]) => [e, v()(t, "id", "team_id", "org_id")])),
          authedActiveCommunityProfile: e.deps.authedActiveCommunityProfile && v()(e.deps.authedActiveCommunityProfile, "id", "team_id", "org_id"),
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
  let es = useMemo(() => {
    if (!ea && draftSubmissionResult?.result !== "success") {
      if (stepWithErrors) return stepWithErrors === Z.activeTab ? getI18nString("community.publishing.please_fill_out_required_fields_and_correct_any_errors") : getI18nString("community.publishing.updates_are_needed_in_another_step");
      if ("error" === e.status) {
        let t;
        let i = e.errors.find(e => "submission" === e.type)?.data.rawError;
        i && (t = resolveMessage(i));
        return t ?? getI18nString("community.publishing.an_error_occurred_please_try_again");
      }
    }
  }, [e, draftSubmissionResult?.result, ea, stepWithErrors, Z.activeTab]);
  useEffect(() => {
    c.current($$in, {
      step: PublishModalState.OPENED
    });
  }, [c]);
  let eo = getFieldValueOrDefault(e.fieldStates.name, "");
  let el = useDebouncedCallback(() => {
    c.current($$in, {
      step: PublishModalState.EDIT_NAME
    });
  }, 2e3);
  useEffect(() => {
    eo && p.name.touched && el();
  }, [eo, el, p.name.touched]);
  let ed = getFieldValueOrDefault(e.fieldStates.description, "");
  let ec = useDebouncedCallback(() => {
    c.current($$in, {
      step: PublishModalState.EDIT_DESCRIPTION
    });
  }, 1e4);
  useEffect(() => {
    ed && p.description.touched && ec();
  }, [ed, ec, p.description.touched]);
  return jsx(UI3ConditionalWrapper, {
    children: jsxs(_$$I, {
      onClose: u,
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
            children: es
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
function ej(e) {
  let {
    figFile,
    existingHubFile
  } = e;
  let s = selectUser();
  let o = useSelector(e => getCurrentUserOrgUser(e) ?? void 0, deepEqual);
  let l = useCurrentUserOrg();
  let d = useSelector(e => Rv(figFile?.team_id ?? null, e, existingHubFile ?? null, figFile?.parent_org_id ?? null), deepEqual);
  let c = useSelector(e => e.authedProfilesById);
  let u = useSelector(e => e.authedActiveCommunityProfile ?? void 0);
  let p = useMemo(async () => figFile ? (await mN(figFile)) ?? [] : [], [figFile]);
  let {
    publishableComponentNodeIds,
    localComponents
  } = useSelector(e => {
    try {
      return Pn(e);
    } catch (e) {
      return {
        publishableComponentNodeIds: [],
        localComponents: []
      };
    }
  }, deepEqual);
  let f = ev({
    ...e,
    user: s,
    org: l,
    orgUser: o,
    allowedAuthors: d,
    allowedCocreatorsPromise: p,
    authedProfilesById: c,
    authedActiveCommunityProfile: u,
    publishableComponentNodeIds,
    localComponents
  });
  _$$h(() => {
    f.fieldStates.carouselMedia.currentValue !== unsetSymbol && f.fieldStates.carouselMedia.resetValue();
  });
  let [_, A] = useAtomValueAndSetter(pz);
  useLayoutEffect(() => {
    if (_ !== LibrarySourceEnum.HUBFILE) {
      A(LibrarySourceEnum.HUBFILE);
      return () => {
        A(_);
      };
    }
  }, [A]);
  return jsx(TrackingProvider, {
    name: _$$e3.COMMUNITY_HUB_FILE_PUBLISH_MODAL_V2,
    properties: {
      userId: s.id,
      orgId: l?.id,
      resourceType: ResourceTypeNoComment.HUB_FILE,
      resourceId: existingHubFile?.id,
      fileKey: figFile?.key,
      editorType: figFile?.editor_type,
      isPaid: wC(f.fieldStates.price)
    },
    children: jsx(eM, {
      draft: f
    })
  });
}
function eY({
  figFilePages: e,
  priceField: t
}) {
  let {
    existingResourceContent
  } = t.deps;
  return hasClientMeta(existingResourceContent) ? jsx("div", {
    className: cssBuilderInstance.pt8.pb8.$,
    children: jsx(_$$A8, {
      pagesList: e,
      isFirstTimePublish: !existingResourceContent,
      isWhiteboardFile: existingResourceContent?.viewer_mode === FTemplateCategoryType.WHITEBOARD || t.deps.figFile?.editor_type === FFileType.WHITEBOARD
    })
  }) : null;
}
function e0({
  viewerModeField: e
}) {
  let t = getFieldValueOrDefault(e, void 0);
  return canSetFieldValue(e) || t === FTemplateCategoryType.PROTOTYPE ? jsx(FieldContainer, {
    label: getI18nString("community.publishing.prototype_preview"),
    children: jsxs("div", {
      className: cssBuilderInstance.flex.itemsCenter.gap8.$,
      children: [jsx(_$$d, {
        label: jsx(HiddenLabel, {
          children: getI18nString("community.publishing.include_prototypes_in_thumbnail")
        }),
        checked: t === FTemplateCategoryType.PROTOTYPE,
        onChange: t => {
          e.setValue?.(t ? FTemplateCategoryType.PROTOTYPE : FTemplateCategoryType.CANVAS);
        },
        disabled: !canSetFieldValue(e)
      }), getI18nString("community.publishing.include_prototypes_in_thumbnail")]
    })
  }) : null;
}
async function e9({
  publishableModuleNodeIds: e = [],
  localModules: t = {},
  renameSlideThemeForTemplatePublish: i,
  name: n,
  hubFile: r
}) {
  let a = Object.values(t).map(e => e.node_id);
  let s = i(assertFieldReady(n).currentValue) ? a : e;
  if (s.length > 0) {
    let {
      onPublishSuccess,
      onPublishProgress,
      onPublishError
    } = _$$u(FFileType.SLIDES);
    await new Promise(n => {
      requestAnimationFrame(async () => {
        await debugState.dispatch(ZS({
          savepointDescription: "Community slide template publish",
          itemsToPublish: new Set(s),
          hubFileId: r.id,
          onPublishSuccess,
          onPublishProgress,
          onPublishError
        }));
        n();
      });
    });
  }
}
let te = {
  name: om,
  description: _$$z,
  category: Z9,
  tagsV1: _$$f,
  tagsV2: _$$m3,
  carouselMedia: _$$v,
  viewerMode: _$$m,
  scalingMode: {
    displayName: "ScalingModeField",
    fetchInitialValue: ({
      existingHubFile: e,
      viewerModeField: t
    }) => t.currentValue === unsetSymbol ? unsetSymbol : t.currentValue === FTemplateCategoryType.PROTOTYPE ? e?.scaling_mode ? e.scaling_mode : nV : void 0,
    validate: ({
      viewerModeField: e
    }, t) => {
      if (e.currentValue === FTemplateCategoryType.PROTOTYPE) {
        if (void 0 === t) return [{
          key: "SCALING_MODE_MISSING",
          data: {}
        }];
        if (!bn.includes(t)) return [{
          key: "UNSUPPORTED_SCALING_MODE",
          data: {
            scalingMode: t
          }
        }];
      }
      if (e.currentValue !== unsetSymbol && e.currentValue !== FTemplateCategoryType.PROTOTYPE && void 0 !== t) return [{
        key: "VIEWER_MODE_NOT_PROTOTYPE",
        data: {
          viewerMode: e.currentValue
        }
      }];
    },
    canSet: ({
      viewerModeField: e
    }) => e.currentValue === FTemplateCategoryType.PROTOTYPE
  },
  author: _$$q,
  profileHandle: i2,
  cocreators: _$$S4,
  commentsSetting: _$$T2,
  tosAccepted: _$$Y,
  price: WN,
  supportContact: aS
};
let tt = setupFormValidationHandler({
  displayName: "HubFileForm",
  fields: te,
  fieldToDeps: {
    name: {
      figFile: {
        type: "form",
        source: "figFile"
      },
      existingResourceContent: {
        type: "form",
        source: "existingHubFile"
      }
    },
    description: {
      existingResourceContent: {
        type: "form",
        source: "existingHubFile"
      },
      valueRequired: {
        type: "constant",
        value: !0
      }
    },
    category: {
      figFile: {
        type: "form",
        source: "figFile"
      },
      existingResourceContent: {
        type: "form",
        source: "existingHubFile"
      },
      viewerModeField: {
        type: "otherField",
        source: "viewerMode"
      }
    },
    tagsV1: {
      existingResourceContent: {
        type: "form",
        source: "existingHubFile"
      }
    },
    tagsV2: {
      existingResourceContent: {
        type: "form",
        source: "existingHubFile"
      },
      categoryField: {
        type: "otherField",
        source: "category"
      }
    },
    carouselMedia: {
      existingResourceContent: {
        type: "form",
        source: "existingHubFile"
      },
      createNewVersionOnSubmit: {
        type: "form",
        source: "createNewVersionOnSubmit"
      },
      allowVideos: {
        type: "form",
        source: "allowVideosInCarouselMedia"
      },
      viewerModeField: {
        type: "otherField",
        source: "viewerMode"
      }
    },
    viewerMode: {
      figFile: {
        type: "form",
        source: "figFile"
      },
      existingHubFile: {
        type: "form",
        source: "existingHubFile"
      },
      createNewVersionOnSubmit: {
        type: "form",
        source: "createNewVersionOnSubmit"
      },
      figFilePrototypeStatus: {
        type: "form",
        source: "figFilePrototypeStatus"
      }
    },
    scalingMode: {
      existingHubFile: {
        type: "form",
        source: "existingHubFile"
      },
      viewerModeField: {
        type: "otherField",
        source: "viewerMode"
      }
    },
    author: {
      existingResourceContent: {
        type: "form",
        source: "existingHubFile"
      },
      user: {
        type: "form",
        source: "user"
      },
      allowedAuthors: {
        type: "form",
        source: "allowedAuthors"
      },
      authedProfilesById: {
        type: "form",
        source: "authedProfilesById"
      },
      authedActiveCommunityProfile: {
        type: "form",
        source: "authedActiveCommunityProfile"
      }
    },
    profileHandle: {
      authorField: {
        type: "otherField",
        source: "author"
      },
      authedProfilesById: {
        type: "form",
        source: "authedProfilesById"
      },
      valueRequired: {
        type: "constant",
        value: !0
      }
    },
    cocreators: {
      existingResourceContent: {
        type: "form",
        source: "existingHubFile"
      },
      authedProfilesById: {
        type: "form",
        source: "authedProfilesById"
      },
      allowedCocreatorsPromise: {
        type: "form",
        source: "allowedCocreatorsPromise"
      },
      authorField: {
        type: "otherField",
        source: "author"
      },
      priceField: {
        type: "otherField",
        source: "price"
      }
    },
    commentsSetting: {
      existingResourceContent: {
        type: "form",
        source: "existingHubFile"
      }
    },
    tosAccepted: {
      orgUser: {
        type: "form",
        source: "orgUser"
      }
    },
    price: {
      figFile: {
        type: "form",
        source: "figFile"
      },
      authorField: {
        type: "otherField",
        source: "author"
      },
      user: {
        type: "form",
        source: "user"
      },
      org: {
        type: "form",
        source: "org"
      },
      existingResourceContent: {
        type: "form",
        source: "existingHubFile"
      }
    },
    supportContact: {
      existingResourceContent: {
        type: "form",
        source: "existingHubFile"
      },
      priceField: {
        type: "otherField",
        source: "price"
      }
    }
  },
  validate: ({
    existingHubFile: e,
    publishableModuleNodeIds: t = [],
    localModules: i = {}
  }, n) => {
    let r = [];
    n.viewerMode.currentValue === FTemplateCategoryType.SLIDE_TEMPLATE && (!e && 0 === t.length || aB(Object.values(i), new Set(t))) && r.push({
      key: "NO_SLIDES_TO_PUBLISH",
      data: {}
    });
    return r;
  },
  canSubmit: ({
    renameSlideThemeForTemplatePublish: e
  }, t) => (t.viewerMode.currentValue !== FTemplateCategoryType.SLIDE_TEMPLATE || !!e) && Object.keys(t).every(e => isFieldValidated(t[e])),
  submit: async (e, t) => {
    let i;
    let n;
    let r;
    let a;
    let s;
    let {
      createNewVersionOnSubmit,
      figFile
    } = e;
    let {
      description,
      viewerMode
    } = t;
    if (createNewVersionOnSubmit) try {
      i = (await maybeCreateSavepoint(figFile.key, "Published to Community hub", assertFieldReady(description).currentValue, debugState.dispatch))?.id;
    } catch (e) {
      reportError(ServiceCategories.COMMUNITY, e);
      return new withSubmissionError.SubmissionError({
        key: "ERROR_CREATING_SAVEPOINT",
        data: {
          rawError: e,
          debugInfo: {
            figFileKey: figFile.key
          }
        }
      });
    }
    try {
      n = await S3({
        ...e,
        ...t,
        newVersionId: i
      });
    } catch (n) {
      reportError(ServiceCategories.COMMUNITY, n);
      return new withSubmissionError.SubmissionError({
        key: "ERROR_UPLOADING_IMAGES",
        data: {
          rawError: n,
          debugInfo: {
            createNewVersionOnSubmit,
            existingHubFileId: _$$L(e.existingHubFile?.id),
            newVersionId: _$$L(i),
            carouselMediaFieldValue: _$$L(t.carouselMedia.currentValue)
          }
        }
      });
    }
    try {
      createNewVersionOnSubmit ? {
        hubFile: r,
        actingProfile: a,
        profileCreated: s
      } = await Rr({
        ...e,
        ...t,
        ...n,
        newVersionId: i
      }) : {
        hubFile: r
      } = await fY({
        ...e,
        ...t,
        ...n
      });
    } catch (t) {
      reportError(ServiceCategories.COMMUNITY, t);
      return new withSubmissionError.SubmissionError({
        key: "ERROR_FINALIZING_VERSION",
        data: t instanceof YI ? {
          rawError: t.rawError,
          debugInfo: {
            createNewVersionOnSubmit: _$$L(createNewVersionOnSubmit),
            existingHubFileId: _$$L(e.existingHubFile?.id),
            requestPayload: _$$L(t.requestPayload)
          }
        } : {
          rawError: t
        }
      });
    }
    try {
      SK({
        ...e,
        ...t,
        hubFile: r,
        actingProfile: a,
        profileCreated: s,
        updateSource: "HubFileForm.submit"
      });
      viewerMode.currentValue === FTemplateCategoryType.SLIDE_TEMPLATE && (await e9({
        ...e,
        ...t,
        hubFile: r
      }));
    } catch (e) {
      reportError(ServiceCategories.COMMUNITY, e);
      return new withSubmissionError.SubmissionError({
        key: "ERROR_UPDATING_STORES",
        data: {
          rawError: e
        }
      });
    }
    if (getFeatureFlags().cmty_m10n_poll_hub_file_statuses_on_publish) try {
      let e = await Ur(r.id);
      if (void 0 === e) {
        let e = Error("Validations not passed in time");
        reportError(ServiceCategories.COMMUNITY, e);
        return new withSubmissionError.SubmissionError({
          key: "ERROR_VALIDATIONS_NOT_PASSED_IN_TIME",
          data: {
            rawError: e
          }
        });
      }
      r.publishing_status = getValueOrFallback(e, FPublicationStatusType) ?? null;
      RN(r, "HubFileForm.submit");
    } catch (e) {
      reportError(ServiceCategories.COMMUNITY, e);
      return new withSubmissionError.SubmissionError({
        key: "ERROR_VALIDATING_STATUS",
        data: {
          rawError: e
        }
      });
    }
    try {
      nz(r);
    } catch (e) {
      reportError(ServiceCategories.COMMUNITY, e);
      return new withSubmissionError.SubmissionError({
        key: "ERROR_UPDATING_STORES",
        data: {
          rawError: e
        }
      });
    }
    return {
      hubFile: r,
      actingProfile: a,
      profileCreated: s
    };
  }
});
let ti = setupAtomFormHandler(tt, fe);
function ts({
  error: e,
  resetValue: t
}) {
  switch (e.key) {
    case "SCALING_MODE_MISSING":
    case "VIEWER_MODE_NOT_PROTOTYPE":
      t();
      return !0;
  }
  return !1;
}
function td({
  draft: e
}) {
  var t;
  let i;
  let s;
  let {
    canvasThumbnailPromise,
    existingHubFile
  } = e.deps;
  let c = useDispatch();
  let {
    trackEvent
  } = useTracking();
  let p = _$$H(trackEvent);
  let m = useCallback(() => {
    c(hideModal());
    p.current($$in, {
      step: PublishModalState.CLOSED
    });
  }, [c, p]);
  let y = useSelector(e => "mirror" in e ? e.mirror.appModel.pagesList : []);
  let b = _$$D(e.fieldStates);
  _$$W(e.fieldStates.viewerMode);
  t = e.fieldStates.scalingMode;
  _$$p(t, ts);
  let x = _$$t4(e.fieldStates.category);
  let X = _$$J3({
    tagsV1Field: e.fieldStates.tagsV1,
    tagsV2Field: e.fieldStates.tagsV2
  });
  let Q = _$$n(e.fieldStates.carouselMedia, useMemo(() => e.fieldStates.viewerMode.currentValue === unsetSymbol ? void 0 : {
    promise: _$$V(canvasThumbnailPromise, e.fieldStates.viewerMode.currentValue),
    source: "file_thumbnail"
  }, [canvasThumbnailPromise, e.fieldStates.viewerMode.currentValue]));
  let J = _$$w(e.fieldStates.cocreators);
  let ee = useMemo(() => ({
    details: !0,
    thumbnail: !0,
    advanced: !0
  }), []);
  let [et, ei, en] = _$$t2.useTabs(ee, {
    orientation: "vertical"
  });
  let er = _$$b(en);
  let {
    stepWithErrors,
    clearStepWithErrors,
    checkProgress
  } = _$$o([{
    id: "details",
    checkpoints: [{
      check: () => isFieldValidated(e.fieldStates.name),
      onFail: () => __(tZ.NAME_INPUT)
    }, {
      check: () => isFieldValidated(e.fieldStates.description),
      onFail: () => __(tZ.DESCRIPTION_INPUT)
    }, {
      check: () => isFieldValidated(e.fieldStates.category),
      onFail: () => __(tZ.CATEGORY_SELECT)
    }, {
      check: () => isFieldValidated(e.fieldStates.tagsV2) && isFieldValidated(e.fieldStates.tagsV1),
      onFail: () => __(tZ.TAGS_SECTION)
    }],
    onFail: () => {
      b.name.onTouched?.();
      b.description.onTouched?.();
      b.category.onTouched?.();
      b.tagsV2.onTouched?.();
      b.tagsV1.onTouched?.();
    }
  }, {
    id: "thumbnail",
    checkpoints: [{
      check: () => isFieldValidated(e.fieldStates.carouselMedia),
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
      b.carouselMedia.onTouched?.();
    }
  }, {
    id: "advanced",
    checkpoints: [{
      check: () => isFieldValidated(e.fieldStates.profileHandle),
      onFail: () => __(tZ.PROFILE_HANDLE_INPUT)
    }, {
      check: () => isFieldValidated(e.fieldStates.cocreators),
      onFail: () => __(tZ.COCREATORS_INPUT)
    }, {
      check: () => isFieldValidated(e.fieldStates.tosAccepted),
      onFail: () => __(tZ.TOS_AGREED_CHECKBOX)
    }, {
      check: () => isFieldValidated(e.fieldStates.price),
      onFail: () => __(tZ.PRICE_INPUT)
    }, {
      check: () => isFieldValidated(e.fieldStates.supportContact),
      onFail: () => __(tZ.SUPPORT_CONTACT_INPUT)
    }],
    onFail: () => {
      b.profileHandle.onTouched?.();
      b.cocreators.onTouched?.();
      b.price.onTouched?.();
      b.supportContact.onTouched?.();
      b.tosAccepted.onTouched?.();
    }
  }], er.activeTab);
  useEffect(() => {
    clearStepWithErrors();
  }, [e.fieldStates, clearStepWithErrors]);
  let {
    draftSubmissionResult,
    clearDraftSubmissionResult,
    submit
  } = _$$r2(e, useCallback(() => {
    p.current($$in, {
      step: PublishModalState.PUBLISH
    });
  }, [p]));
  let [ep, em] = useState(_$$X.STOPPED);
  let eh = ep === _$$X.PLAYING;
  i = draftSubmissionResult ? jsx(_$$S2, {
    publishedResourceContent: "data" in draftSubmissionResult ? draftSubmissionResult.data.hubFile : void 0,
    draftSubmissionStatus: draftSubmissionResult.result,
    carouselMediaField: e.fieldStates.carouselMedia,
    nameField: e.fieldStates.name,
    authorField: e.fieldStates.author,
    onAnimationStateChange: em,
    viewerModeField: e.fieldStates.viewerMode
  }) : jsxs("div", {
    className: KT,
    children: [jsxs("div", {
      className: Cd,
      children: [jsxs(_$$t2.TabStrip, {
        manager: er,
        children: [jsx(_$$y, {
          ...et.details,
          index: 1,
          text: getI18nString("community.publishing.describe_your_resource"),
          selected: "details" === er.activeTab,
          hasErrors: "details" === stepWithErrors
        }), jsx(_$$y, {
          ...et.thumbnail,
          index: 2,
          text: getI18nString("community.publishing.set_a_thumbnail"),
          selected: "thumbnail" === er.activeTab,
          hasErrors: "thumbnail" === stepWithErrors
        }), jsx(_$$y, {
          ...et.advanced,
          index: 3,
          text: getI18nString("community.publishing.add_the_final_details"),
          selected: "advanced" === er.activeTab,
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
      children: [jsxs(_$$t2.TabPanel, {
        ...ei.details,
        children: [jsx(Mm, {
          id: tZ.NAME_INPUT,
          children: t => jsx(_$$A7, {
            ref: t,
            nameField: e.fieldStates.name,
            ...b.name
          })
        }), jsx(Mm, {
          id: tZ.DESCRIPTION_INPUT,
          children: t => jsx(_$$A6, {
            ref: t,
            descriptionField: e.fieldStates.description,
            ...b.description
          })
        }), jsx(Mm, {
          id: tZ.CATEGORY_SELECT,
          children: e => jsx(CategorySelectDropdown, {
            ref: e,
            categoryFieldManager: x,
            ...b.category
          })
        }), isFieldValidated(e.fieldStates.category) && jsx(Mm, {
          id: tZ.TAGS_SECTION,
          children: e => X.validV2Tags.length > 0 ? jsx(vj, {
            ref: e,
            tagsFieldsManager: X,
            touchedFieldsTracker: b,
            autoScrollAutocompleteResultsIntoView: {
              behavior: "smooth",
              block: "end"
            }
          }) : jsx(Yv, {
            ref: e,
            tagsV1Field: X.tagsV1Field,
            ...b.tagsV1,
            autoScrollAutocompleteResultsIntoView: {
              behavior: "smooth",
              block: "end"
            }
          })
        })]
      }), jsxs(_$$t2.TabPanel, {
        ...ei.thumbnail,
        children: [jsx(Mm, {
          id: tZ.THUMBNAIL_UPLOADER,
          children: e => jsx(_$$l, {
            ref: e,
            carouselMediaFieldManager: Q,
            trackingEventName: $$in,
            ...b.carouselMedia
          })
        }), jsx(e0, {
          viewerModeField: e.fieldStates.viewerMode
        }), jsx(Mm, {
          id: tZ.CAROUSEL_MEDIA_UPLOADER,
          children: e => jsx(_$$t3, {
            ref: e,
            carouselMediaFieldManager: Q,
            ...b.carouselMedia
          })
        })]
      }), jsxs(_$$t2.TabPanel, {
        ...ei.advanced,
        children: [jsx(_$$A3, {
          authorField: e.fieldStates.author
        }), jsx(Mm, {
          id: tZ.PROFILE_HANDLE_INPUT,
          children: t => jsx(_$$S, {
            ref: t,
            profileHandleField: e.fieldStates.profileHandle,
            ...b.profileHandle
          })
        }), jsx(Mm, {
          id: tZ.COCREATORS_INPUT,
          children: jsx(_$$A4, {
            cocreatorsFieldManager: J,
            ...b.cocreators
          })
        }), jsx(Mm, {
          id: tZ.TOS_AGREED_CHECKBOX,
          children: t => jsx(_$$B, {
            ref: t,
            tosAcceptedField: e.fieldStates.tosAccepted
          })
        }), jsx(_$$A5, {
          commentsSettingField: e.fieldStates.commentsSetting
        }), !LG(existingHubFile) && jsx(_$$H2, {
          priceField: e.fieldStates.price
        }), (wC(e.fieldStates.price) || LG(existingHubFile)) && jsxs(Fragment, {
          children: [jsx(Mm, {
            id: tZ.PRICE_INPUT,
            children: t => jsx(_$$K, {
              ref: t,
              priceField: e.fieldStates.price,
              ...b.price
            })
          }), jsx(_$$r4, {
            authorField: e.fieldStates.author,
            existingResourceContent: existingHubFile
          }), jsx(eY, {
            figFilePages: y,
            priceField: e.fieldStates.price
          }), jsx(_$$$, {})]
        }), jsx(Mm, {
          id: tZ.SUPPORT_CONTACT_INPUT,
          children: t => jsx(_$$a2, {
            ref: t,
            priceField: e.fieldStates.price,
            supportContactField: e.fieldStates.supportContact,
            ...b.supportContact
          })
        })]
      })]
    })]
  });
  s = eh || draftSubmissionResult?.result !== "success" ? eh || draftSubmissionResult?.result !== "failure" ? jsxs(Fragment, {
    children: [er.isOnFirstTab ? jsx(Button, {
      variant: "secondary",
      onClick: m,
      children: getI18nString("general.cancel")
    }) : !eh && jsx(Button, {
      variant: "secondary",
      onClick: er.selectPreviousTab,
      children: getI18nString("general.back")
    }), er.isOnLastTab ? jsx(Button, {
      disabled: draftSubmissionResult?.result === "pending" || eh,
      onClick: () => {
        checkProgress() && submit?.();
      },
      "data-testid": "resource-publishing-hub-file-form-view-submit-button",
      children: draftSubmissionResult?.result === "pending" || eh ? jsx(_$$k, {
        size: "sm"
      }) : getI18nString("community.publishing.publish")
    }) : jsx(Button, {
      onClick: () => {
        checkProgress() && er.selectNextTab();
      },
      "data-testid": "resource-publishing-hub-file-form-view-next-step-button",
      children: getI18nString("general.next")
    })]
  }) : jsx(_$$h2, {
    holdTimeInMs: 5e3,
    onMouseHold: async () => {
      c(lW({
        stringToCopy: JSON.stringify({
          figFileKey: e.deps.figFile?.key,
          existingHubFileId: existingHubFile?.id,
          createNewVersionOnSubmit: e.deps.createNewVersionOnSubmit,
          userId: e.deps.user.id,
          orgId: e.deps.org?.id,
          orgUserId: e.deps.orgUser?.id,
          allowedAuthors: e.deps.allowedAuthors,
          allowedCocreators: await _$$a(e.deps.allowedCocreatorsPromise.then(e => e.map(e => e.id))),
          authedProfilesById: Object.fromEntries(Object.entries(e.deps.authedProfilesById).map(([e, t]) => [e, v()(t, "id", "team_id", "org_id")])),
          authedActiveCommunityProfile: e.deps.authedActiveCommunityProfile && v()(e.deps.authedActiveCommunityProfile, "id", "team_id", "org_id"),
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
  let eg = useMemo(() => {
    if (!eh && draftSubmissionResult?.result !== "success") {
      if (stepWithErrors) return stepWithErrors === er.activeTab ? getI18nString("community.publishing.please_fill_out_required_fields_and_correct_any_errors") : getI18nString("community.publishing.updates_are_needed_in_another_step");
      if ("error" === e.status) {
        let t;
        let i = e.errors.find(e => "submission" === e.type)?.data.rawError;
        i && (t = resolveMessage(i));
        return t ?? getI18nString("community.publishing.an_error_occurred_please_try_again");
      }
    }
  }, [e, draftSubmissionResult?.result, eh, stepWithErrors, er.activeTab]);
  useEffect(() => {
    p.current($$in, {
      step: PublishModalState.OPENED
    });
  }, [p]);
  let ef = getFieldValueOrDefault(e.fieldStates.name, "");
  let e_ = useDebouncedCallback(() => {
    p.current($$in, {
      step: PublishModalState.EDIT_NAME
    });
  }, 2e3);
  useEffect(() => {
    ef && b.name.touched && e_();
  }, [ef, e_, b.name.touched]);
  let eA = getFieldValueOrDefault(e.fieldStates.description, "");
  let ey = useDebouncedCallback(() => {
    p.current($$in, {
      step: PublishModalState.EDIT_DESCRIPTION
    });
  }, 1e4);
  useEffect(() => {
    eA && b.description.touched && ey();
  }, [eA, ey, b.description.touched]);
  return jsx(UI3ConditionalWrapper, {
    children: jsxs(_$$I, {
      onClose: m,
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
          children: i
        }), jsxs(DialogFooter, {
          children: [jsx("span", {
            className: $o,
            "aria-live": "assertive",
            "aria-atomic": !0,
            children: eg
          }), jsx(DialogActionStrip, {
            children: s
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
function tc(e) {
  let {
    figFile,
    existingHubFile
  } = e;
  let s = selectUser();
  let o = _$$h4(figFile);
  let l = useSelector(e => getCurrentUserOrgUser(e) ?? void 0, deepEqual);
  let d = useCurrentUserOrg();
  let c = useSelector(e => Rv(figFile?.team_id ?? null, e, existingHubFile ?? null, figFile?.parent_org_id ?? null), deepEqual);
  let u = useSelector(e => e.authedProfilesById);
  let p = useSelector(e => e.authedActiveCommunityProfile ?? void 0);
  let h = useMemo(async () => figFile ? (await mN(figFile)) ?? [] : [], [figFile]);
  let g = ti({
    ...e,
    figFilePrototypeStatus: PrototypingTsApi?.firstPagePrototypeStatus(),
    allowVideosInCarouselMedia: !1,
    canvasThumbnailPromise: o,
    user: s,
    org: d,
    orgUser: l,
    allowedAuthors: c,
    allowedCocreatorsPromise: h,
    authedProfilesById: u,
    authedActiveCommunityProfile: p
  });
  return jsx(TrackingProvider, {
    name: _$$e3.COMMUNITY_HUB_FILE_PUBLISH_MODAL_V2,
    properties: {
      userId: s.id,
      orgId: d?.id,
      resourceType: ResourceTypeNoComment.HUB_FILE,
      resourceId: existingHubFile?.id,
      fileKey: figFile?.key,
      editorType: figFile?.editor_type,
      isPaid: wC(g.fieldStates.price)
    },
    children: jsx(td, {
      draft: g
    })
  });
}
export function $$tm1(e) {
  return e !== FFileType.SLIDES;
}
export function $$th0({
  publishingEntryPoint: e,
  figFileKey: t
}) {
  let {
    status,
    data
  } = liveStoreInstance.useFile(t);
  let h = $S({
    fileKey: t,
    file: data ?? null
  });
  let g = useMemo(() => data ? "loaded" === h.status && h.data.file ? Jj(h.data.file) : bY(data) : void 0, [data, h]);
  let f = useSelector(e => {
    let i = e.figFilePublishedAsHubFile[t];
    return i ? e.hubFiles[i] : void 0;
  });
  let _ = function (e) {
    switch (e) {
      case FFileType.COOPER:
        return ej;
      case FFileType.SITES:
        return _$$A0;
      case FFileType.FIGMAKE:
        return _$$M;
      default:
        return tc;
    }
  }(data?.editor_type);
  switch (e) {
    case PageTypeEnum.EDITOR:
    case PageTypeEnum.UNIVERSAL_POSTING:
      if (g) return jsx(_, {
        figFile: g,
        existingHubFile: f,
        createNewVersionOnSubmit: !0
      });
      break;
    case PageTypeEnum.RESOURCE_PAGE:
      if (f) return jsx(_, {
        figFile: g,
        existingHubFile: f,
        createNewVersionOnSubmit: !1
      });
      break;
    default:
      throwTypeError(e);
  }
  return "loading" === status || "loading" === h.status ? null : jsx(_$$r3, {
    title: getI18nString("community.publishing.publish_your_file_to_community")
  });
}
export const T = $$th0;
export const W = $$tm1;