import { fileSelectedShareModalTab } from "../figma_app/91703";
import { hideModal, popModalStack, showModalHandler } from "../905/156213";
import { fullscreenValue } from "../figma_app/455680";
import { FContainerType, FFileType, FAccessLevelType } from "../figma_app/191312";
import { ShareAction } from "../figma_app/707808";
import { n as _$$n, a as _$$a } from "../905/114254";
import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useDispatch, useSelector } from "react-redux";
import { useModalManager } from "../905/437088";
import { ModalRootComponent, ModalFormContents } from "../905/38914";
import { DialogContents, DialogHeader, DialogTitle, DialogBody, DialogFooter, DialogActionStrip } from "../figma_app/272243";
import { Button } from "../905/521428";
import { BaseLinkComponent } from "../905/551536";
import { renderI18nText, getI18nString } from "../905/303541";
import { getCurrentTeam, getCurrentTeamId } from "../figma_app/598018";
import { registerModal, ModalSupportsBackground } from "../905/102752";
import { memo, useMemo, useCallback, useState, useEffect, useRef, useLayoutEffect } from "react";
import { sha1Hex } from "../905/125019";
import { k as _$$k } from "../905/443820";
import { Fullscreen } from "../figma_app/763686";
import { permissionScopeHandler } from "../905/189185";
import { getFeatureFlags } from "../905/601108";
import { atom, useAtomValueAndSetter, useAtomWithSubscription, Xr, atomStoreManager } from "../figma_app/27355";
import C from "classnames";
import { parsePxNumber } from "../figma_app/783094";
import { useSubscription } from "../figma_app/288654";
import { SvgComponent } from "../905/714743";
import { $z } from "../figma_app/617427";
import { VisualBellActions } from "../905/302958";
import { X as _$$X } from "../905/859195";
import { UpgradeAction } from "../905/370443";
import { TrackingProvider, useTracking } from "../figma_app/831799";
import { T6 } from "../905/201596";
import { Et as _$$Et, mZ, b2 } from "../figma_app/622574";
import { $x, $W } from "../figma_app/599979";
import { selectCurrentFile } from "../figma_app/516028";
import { useCurrentUserOrg } from "../905/845253";
import { selectCurrentUser } from "../905/372672";
import { OpenEditorFileData } from "../figma_app/43951";
import { l as _$$l, s as _$$s } from "../905/618307";
import { LibrarySourceEnum } from "../figma_app/633080";
import { ContainerTypeMap } from "../905/186961";
import { e0 as _$$e } from "../905/696396";
import { N as _$$N2 } from "../905/620375";
import { A as _$$A } from "../905/81613";
import { A as _$$A2 } from "../905/392698";
import { pz } from "../figma_app/825489";
import { VisualBellIcon } from "../905/576487";
import { $u } from "../figma_app/524655";
import { r as _$$r } from "../905/149895";
import { z as _$$z } from "../905/284530";
import { A as _$$A3 } from "../5724/663128";
import { X0 } from "../905/784221";
import { throwTypeError } from "../figma_app/465776";
import { deepEqual } from "../905/382883";
import { UI3ConditionalWrapper } from "../905/341359";
import { useDebouncedCallback } from "use-debounce";
import { H as _$$H } from "../905/620380";
import { useSprigWithSampling } from "../905/99656";
import { resolveMessage } from "../905/231762";
import { I as _$$I } from "../905/293573";
import { o as _$$o2 } from "../905/785255";
import { r as _$$r2 } from "../905/290294";
import { D as _$$D } from "../905/572843";
import { Lz, Zc, i_, c_ } from "../905/497882";
import { __, tZ, Mm } from "../905/271611";
import { _ as _$$_ } from "../905/144222";
import { c as _$$c2 } from "../905/598842";
import { B as _$$B2 } from "../905/950875";
import { A as _$$A6 } from "../905/813387";
import { A as _$$A7 } from "../905/144978";
import { lQ } from "../905/934246";
import { b as _$$b } from "../905/22449";
import { c as _$$c3 } from "../905/34525";
import { nl } from "../905/590952";
import { A as _$$A8 } from "../905/567946";
import { iy, uK, O0, Ee, I1 } from "../905/916525";
import { X as _$$X2, S as _$$S } from "../905/109653";
import { Ai, vu } from "../905/870778";
import { l as _$$l2 } from "../905/493845";
import { PP, PH, Pn, OA } from "../905/230175";
import { ServiceCategories } from "../905/165054";
import { i as _$$i2 } from "../905/970229";
import { uploadRequest } from "../905/827765";
import { debugState } from "../905/407919";
import { reportError } from "../905/11";
import { T as _$$T, e as _$$e3 } from "../905/15569";
import { o as _$$o3 } from "../905/17894";
import { v as _$$v } from "../905/513628";
import { z as _$$z2 } from "../905/348343";
import { om } from "../905/175462";
import { renameFileOptimistic, filePutAction } from "../figma_app/78808";
import { q as _$$q } from "../figma_app/446378";
import { n as _$$n2 } from "../905/341791";
import { useIsSelectedViewFullscreenCooper } from "../figma_app/828186";
import { INTERNAL_PUBLISH_MODAL, PublishModalState } from "../figma_app/350203";
import { getCurrentFileType } from "../figma_app/976749";
import { liveStoreInstance } from "../905/713695";
import { B3, $o } from "../905/54042";
import { bL as _$$bL, l9, mc, c$ } from "../905/493196";
import { HiddenLabel } from "../905/270045";
import { c$ as _$$c$ } from "../figma_app/236327";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { n as _$$n3 } from "../figma_app/537817";
import { hideDropdownAction, showDropdownThunk } from "../905/929976";
import { Um } from "../905/848862";
import { A as _$$A9 } from "../905/794518";
import { Cf, it } from "../905/504727";
import { A as _$$A0 } from "../6828/814452";
import { VJh } from "../figma_app/27776";
import { A as _$$A1 } from "../svg/619883";
let y = registerModal(function ({
  open: e
}) {
  let t = useDispatch();
  let i = getCurrentTeam();
  let n = i?.student_team ? renderI18nText("templates.limit_modal.student") : renderI18nText("templates.limit_modal.professional");
  let a = () => {
    t(hideModal());
  };
  let s = useModalManager({
    open: e,
    onClose: a
  });
  return jsx(ModalRootComponent, {
    manager: s,
    width: "md",
    children: jsxs(DialogContents, {
      children: [jsx(DialogHeader, {
        children: jsx(DialogTitle, {
          children: renderI18nText("templates.limit_modal.title", {
            templateLimit: 5
          })
        })
      }), jsx(DialogBody, {
        children: jsx("div", {
          children: renderI18nText("templates.limit_modal.description", {
            templateLimit: 5,
            planName: n
          })
        })
      }), jsx(DialogFooter, {
        children: jsxs(DialogActionStrip, {
          children: [jsx(BaseLinkComponent, {
            href: "https://www.figma.com/pricing#figjam",
            target: "_blank",
            trusted: !0,
            children: jsx(Button, {
              variant: "secondary",
              children: renderI18nText("templates.limit_modal.secondary_text")
            })
          }), jsx(Button, {
            variant: "primary",
            onClick: a,
            children: renderI18nText("templates.limit_modal.primary_text")
          })]
        })
      })]
    })
  });
}, "TemplateLimitModal");
var T = C;
var Q = (e => (e.IDLE = "IDLE", e.PUBLISH_TEMPLATE_INITIATED = "PUBLISH_TEMPLATE_INITIATED", e.PUBLISH_TEMPLATE_SUCCESS = "PUBLISH_TEMPLATE_SUCCESS", e.PUBLISH_TEMPLATE_ERRORED = "PUBLISH_TEMPLATE_ERRORED", e.UNPUBLISH_TEMPLATE_INITIATED = "UNPUBLISH_TEMPLATE_INITIATED", e.UNPUBLISH_TEMPLATE_SUCCESS = "UNPUBLISH_TEMPLATE_SUCCESS", e.UNPUBLISH_TEMPLATE_ERRORED = "UNPUBLISH_TEMPLATE_ERRORED", e))(Q || {});
let J = atom({
  state: "IDLE"
});
let ee = atom(null, (e, t, i) => {
  t(J, i);
});
let ei = "make-template-publish";
function eo() {
  return jsx(_$$z, {
    orientation: "vertical",
    iconSrc: _$$A3,
    variant: "brand",
    children: renderI18nText("slides.templates.publish_modal.info_text")
  });
}
let eE = memo(function (e) {
  return jsx("svg", {
    width: "16",
    height: "16",
    fill: "none",
    viewBox: "0 0 16 16",
    ...e,
    children: jsx("path", {
      fill: "var(--color-icon)",
      d: "M11.204 8.01A2 2 0 0 1 13 10v.025c.57.116 1 .62 1 1.225v1.5l-.007.128a1.25 1.25 0 0 1-1.115 1.115L12.75 14h-3.5l-.128-.007a1.25 1.25 0 0 1-1.115-1.115L8 12.75v-1.5c0-.605.43-1.109 1-1.225V10a2 2 0 0 1 2-2zM12.5 3A1.5 1.5 0 0 1 14 4.5v3a.5.5 0 0 1-1 0V7H6v5h.5a.5.5 0 0 1 0 1h-3l-.153-.008a1.5 1.5 0 0 1-1.34-1.339L2 11.5v-7A1.5 1.5 0 0 1 3.5 3zm-3.25 8a.25.25 0 0 0-.25.25v1.5c0 .138.112.25.25.25h3.5a.25.25 0 0 0 .25-.25v-1.5a.25.25 0 0 0-.25-.25zM3 11.5a.5.5 0 0 0 .5.5H5V7H3zM11 9a1 1 0 0 0-.995.897L10 10h2a1 1 0 0 0-1-1M3.5 4a.5.5 0 0 0-.5.5V6h10V4.5a.5.5 0 0 0-.5-.5z"
    })
  });
});
let ew = "buzz_info_banner--textRow--JA3PO";
let eC = "buzz_info_banner--textRowSecondary--f9VRI";
let eT = "buzz_info_banner--iconContainer--lTTed";
function ek() {
  return jsxs("div", {
    className: "buzz_info_banner--infoBannerContainer--iThPH",
    children: [jsxs("div", {
      className: "buzz_info_banner--frame--jke6e",
      children: [jsx("div", {
        className: "buzz_info_banner--imageTopText--4o-jx",
        children: jsx(eR, {})
      }), jsx("div", {
        className: "buzz_info_banner--bottomImageFrame--xaadx",
        children: jsx(_$$_, {
          style: {
            "--color-icon": "var(--color-icon-brand)"
          }
        })
      })]
    }), jsxs("div", {
      className: "buzz_info_banner--rightColumn--oTDMa",
      children: [jsxs("div", {
        className: ew,
        children: [jsx("div", {
          className: eT,
          children: jsx(eE, {})
        }), getI18nString("community.publishing.org_template_modal.info_text_restrictions")]
      }), jsxs("div", {
        className: T()(ew, eC),
        children: [jsx("div", {
          className: eT,
          children: jsx(_$$c2, {
            style: {
              "--color-icon": "var(--color-icon-secondary)"
            }
          })
        }), getI18nString("community.publishing.org_template_modal.info_text_edit")]
      }), jsxs("div", {
        className: T()(ew, eC),
        children: [jsx("div", {
          className: eT,
          children: jsx(_$$B2, {
            style: {
              "--color-icon": "var(--color-icon-secondary)"
            }
          })
        }), getI18nString("community.publishing.org_template_modal.info_text_image_text_names")]
      })]
    })]
  });
}
function eR() {
  return jsxs("svg", {
    width: "52",
    height: "17",
    viewBox: "0 0 52 17",
    fill: "none",
    children: [jsx("rect", {
      x: "0.5",
      y: "0.5",
      width: "51",
      height: "16",
      fill: "var(--color-bg)"
    }), jsx("rect", {
      x: "0.5",
      y: "0.5",
      width: "51",
      height: "16",
      stroke: "var(--color-border-selected-strong)"
    }), jsx("rect", {
      x: "5",
      y: "5",
      width: "36",
      height: "1",
      rx: "0.5",
      fill: "var(--color-border-selected-strong)"
    }), jsx("rect", {
      x: "5",
      y: "8",
      width: "36",
      height: "1",
      rx: "0.5",
      fill: "var(--color-border-selected-strong)"
    }), jsx("path", {
      d: "M5 11.5C5 11.2239 5.22386 11 5.5 11H27.5C27.7761 11 28 11.2239 28 11.5C28 11.7761 27.7761 12 27.5 12H5.5C5.22386 12 5 11.7761 5 11.5Z",
      fill: "var(--color-border-selected-strong)"
    })]
  });
}
function eU({
  publishScopeField: e
}) {
  let t = useCurrentUserOrg();
  let i = getCurrentTeam();
  let n = Lz(e, void 0);
  return jsx(_$$A8, {
    label: getI18nString("templates.publishing.scope.label"),
    children: jsxs(_$$b, {
      className: iy,
      value: n,
      onChange: Zc(e) ? t => e.setValue(t) : lQ,
      children: [i && jsx(eB, {
        publishScope: ContainerTypeMap.TEAM,
        publishScopeEntity: i
      }, ContainerTypeMap.TEAM), t && jsx(eB, {
        publishScope: ContainerTypeMap.ORG,
        publishScopeEntity: t
      }, ContainerTypeMap.ORG)]
    })
  });
}
function eB({
  publishScope: e,
  publishScopeEntity: t
}) {
  return jsxs("label", {
    className: uK,
    children: [jsx(nl, {
      team: t
    }), jsx(_$$c3, {
      value: e,
      id: e,
      className: O0
    }), jsx("div", {
      className: Ee,
      children: t.name
    }), jsx("div", {
      className: I1,
      children: eV(e)
    })]
  });
}
let eV = e => e === ContainerTypeMap.TEAM ? getI18nString("templates.publishing.scope.team") : e === ContainerTypeMap.ORG ? getI18nString("templates.publishing.scope.organization") : throwTypeError(e);
let e2 = {
  [ContainerTypeMap.ORG]: FContainerType.ORG,
  [ContainerTypeMap.TEAM]: FContainerType.TEAM
};
let e3 = {
  name: om,
  description: _$$z2,
  publishScope: {
    displayName: "PublishScopeField",
    fetchInitialValue: ({
      existingTemplate: e
    }) => (e && function (e) {
      switch (e.publishScope) {
        case ContainerTypeMap.ORG:
          return ContainerTypeMap.ORG;
        case ContainerTypeMap.TEAM:
          return ContainerTypeMap.TEAM;
        default:
          return;
      }
    }(e)) ?? ContainerTypeMap.ORG,
    validate: ({
      figFile: e
    }, t) => {
      let i = [];
      [ContainerTypeMap.ORG, ContainerTypeMap.TEAM].includes(t) || i.push({
        key: "INVALID_PUBLISH_SCOPE",
        data: {
          publishScope: t
        }
      });
      e.parent_org_id || t !== ContainerTypeMap.ORG || i.push({
        key: "FILE_MISSING_ORG_ID",
        data: {
          publishScope: t
        }
      });
      e.team_id || t !== ContainerTypeMap.TEAM || i.push({
        key: "FILE_MISSING_TEAM_ID",
        data: {
          publishScope: t
        }
      });
      return i;
    },
    canSet: () => !0
  },
  carouselMedia: _$$v
};
let e6 = _$$T({
  displayName: "TemplateForm",
  fields: e3,
  fieldToDeps: {
    name: {
      figFile: {
        type: "form",
        source: "figFile"
      },
      existingResourceContent: {
        type: "form",
        source: "existingTemplate"
      }
    },
    description: {
      existingResourceContent: {
        type: "form",
        source: "existingTemplate"
      },
      valueRequired: {
        type: "constant",
        value: !1
      }
    },
    publishScope: {
      figFile: {
        type: "form",
        source: "figFile"
      },
      existingTemplate: {
        type: "form",
        source: "existingTemplate"
      }
    },
    carouselMedia: {
      allowVideos: {
        type: "constant",
        value: !1
      },
      disallowExtraMedia: {
        type: "constant",
        value: !0
      },
      existingResourceContent: {
        type: "form",
        source: "existingTemplate"
      }
    }
  },
  validate: ({
    existingTemplate: e,
    publishableComponentNodeIds: t,
    localComponents: i
  }) => PP({
    hasExistingResourceContent: !!e,
    publishableComponentNodeIds: t,
    localComponents: i
  }),
  canSubmit: ({}, e) => Object.keys(e).every(t => i_(e[t])),
  submit: async (e, t) => {
    let i;
    let {
      figFile,
      publishableComponentNodeIds
    } = e;
    let {
      name,
      description,
      publishScope,
      carouselMedia
    } = t;
    let d = e2[c_(publishScope).currentValue];
    try {
      await PH({
        publishableComponentNodeIds,
        publishScope: d,
        savepointDescription: "cooper template publish"
      });
    } catch (t) {
      let e = t instanceof Error ? t : void 0;
      e && reportError(ServiceCategories.COMMUNITY, e);
      return new _$$o3.SubmissionError({
        key: "ERROR_PUBLISHING_LIBRARY_CHANGES",
        data: {
          rawError: e
        }
      });
    }
    let c = null;
    let u = c_(carouselMedia).currentValue.thumbnailMedium || null;
    let p = u && "buffer" in u ? u.buffer : null;
    if (p) {
      let {
        data: {
          status,
          meta
        }
      } = await _$$q.uploadTemplateCoverImage({
        fileKey: figFile.key
      });
      if (200 !== status) return new _$$o3.SubmissionError({
        key: "ERROR_UPLOADING_IMAGES",
        data: {
          rawError: Error("Failed to upload cover image")
        }
      });
      let {
        cover_image_upload_url,
        fields = {}
      } = meta;
      c = meta.signature;
      let a = new FormData();
      Object.entries(fields).forEach(([e, t]) => a.append(e, t));
      a.set("content-type", _$$i2(p) ?? "image/png");
      a.append("file", new Blob([p]));
      try {
        await uploadRequest(cover_image_upload_url, a);
      } catch (e) {
        reportError(ServiceCategories.COMMUNITY, e);
        return new _$$o3.SubmissionError({
          key: "ERROR_UPLOADING_IMAGES",
          data: {
            rawError: e
          }
        });
      }
    }
    try {
      let e = {};
      (u || c) && (e.cover_image_uploaded = "true");
      c && (e.signature = c);
      i = (await _$$q.upsertTemplate({
        fileKey: figFile.key,
        payload: {
          name: c_(name).currentValue,
          description: c_(description).currentValue,
          publish_scope: c_(publishScope).currentValue
        },
        params: e
      })).data;
    } catch (e) {
      reportError(ServiceCategories.COMMUNITY, e);
      return new _$$o3.SubmissionError({
        key: "ERROR_FINALIZING_TEMPLATE",
        data: {
          rawError: e
        }
      });
    }
    try {
      figFile.name === getI18nString("fullscreen.fullscreen_view_selector.untitled") && debugState.dispatch(renameFileOptimistic({
        file: {
          key: figFile.key
        },
        name: c_(name).currentValue
      }));
      debugState.dispatch(filePutAction({
        file: {
          key: figFile.key,
          is_team_template: !0
        }
      }));
    } catch (e) {
      reportError(ServiceCategories.COMMUNITY, e);
      return new _$$o3.SubmissionError({
        key: "ERROR_UPDATING_STORES",
        data: {
          rawError: e
        }
      });
    }
    return {
      templatePublishPayload: i
    };
  }
});
let e7 = _$$e3(e6, ({
  figFile: e,
  existingTemplate: t
}) => t ? `new_from_${e.key}_based_on_${t.id}` : `new_from_${e.key}`);
function tr({
  source: e
}) {
  let t = selectCurrentFile();
  let i = selectCurrentUser();
  let n = getCurrentTeamId();
  let r = useCurrentUserOrg();
  let a = t?.template || void 0;
  let s = t?.libraryKey || void 0;
  let {
    status,
    data
  } = liveStoreInstance.useFile(t?.key);
  let {
    publishableComponentNodeIds,
    localComponents
  } = useSelector(Pn, deepEqual);
  return "loading" !== status && data && s ? jsx(TrackingProvider, {
    name: _$$e.TEAM_TEMPLATE_PUBLISH_MODAL_V2,
    properties: {
      source: e,
      userId: i?.id,
      orgId: r?.id,
      teamId: n,
      resourceId: a?.id,
      fileKey: data?.key,
      editorType: data?.editor_type
    },
    children: jsx(ta, {
      figFile: data,
      existingTemplate: a?.unpublishedAt ? void 0 : a,
      publishableComponentNodeIds,
      localComponents
    })
  }) : null;
}
function ta({
  figFile: e,
  existingTemplate: t,
  publishableComponentNodeIds: i,
  localComponents: n
}) {
  let a;
  let s;
  let o = useDispatch();
  let l = selectCurrentFile();
  let u = getCurrentFileType();
  let {
    trackEvent
  } = useTracking();
  let g = _$$H(trackEvent);
  let _ = e7({
    figFile: e,
    existingTemplate: t,
    publishableComponentNodeIds: i,
    localComponents: n
  });
  let A = _$$D(_.fieldStates);
  let y = _$$n2(_.fieldStates.carouselMedia, useMemo(() => ({
    promise: (async () => (await OA())?.thumbnailMedium ?? null)(),
    source: "other"
  }), []));
  let {
    draftSubmissionResult,
    clearDraftSubmissionResult,
    submit
  } = _$$r2(_, useCallback(() => {
    g.current(INTERNAL_PUBLISH_MODAL, {
      step: PublishModalState.PUBLISH
    });
  }, [g]));
  let S = function () {
    let {
      Sprig
    } = useSprigWithSampling();
    return useCallback(() => {
      Sprig("track", "buzz_published_file");
    }, [Sprig]);
  }();
  let w = useIsSelectedViewFullscreenCooper();
  let C = useCallback(() => {
    w && draftSubmissionResult?.result === "success" && S();
    o(hideModal());
    g.current(INTERNAL_PUBLISH_MODAL, {
      step: PublishModalState.CLOSED
    });
  }, [w, draftSubmissionResult?.result, o, g, S]);
  let {
    checkProgress
  } = _$$o2([{
    id: "details",
    checkpoints: [{
      check: () => i_(_.fieldStates.name),
      onFail: () => __(tZ.NAME_INPUT)
    }, {
      check: () => i_(_.fieldStates.carouselMedia),
      onFail: () => __(tZ.THUMBNAIL_UPLOADER)
    }, {
      check: () => i_(_.fieldStates.description),
      onFail: () => __(tZ.DESCRIPTION_INPUT)
    }],
    onFail: () => {
      A.name.onTouched?.();
      A.carouselMedia.onTouched?.();
      A.description.onTouched?.();
    }
  }], "details");
  let [k, R] = useState(_$$X2.STOPPED);
  let N = k === _$$X2.PLAYING;
  a = draftSubmissionResult ? jsx(_$$S, {
    publishedResourceContent: "success" === draftSubmissionResult.result ? t : void 0,
    draftSubmissionStatus: draftSubmissionResult.result,
    carouselMediaField: _.fieldStates.carouselMedia,
    nameField: _.fieldStates.name,
    publishScopeField: _.fieldStates.publishScope,
    onAnimationStateChange: R,
    showThumbnailWithLetterbox: !0
  }) : jsxs("div", {
    className: B3,
    children: [jsx(ek, {}), jsx(Mm, {
      id: tZ.NAME_INPUT,
      children: e => jsx(_$$A7, {
        ref: e,
        nameField: _.fieldStates.name,
        ...A.name
      })
    }), jsx(Mm, {
      id: tZ.THUMBNAIL_UPLOADER,
      children: e => jsx(_$$l2, {
        ref: e,
        carouselMediaFieldManager: y,
        ...A.carouselMedia,
        trackingEventName: INTERNAL_PUBLISH_MODAL,
        showThumbnailWithLetterbox: !0
      })
    }), jsx(Mm, {
      id: tZ.DESCRIPTION_INPUT,
      children: e => jsx(_$$A6, {
        ref: e,
        descriptionField: _.fieldStates.description,
        publishScopeField: _.fieldStates.publishScope,
        ...A.description
      })
    }), jsx(eU, {
      publishScopeField: _.fieldStates.publishScope
    })]
  });
  s = N || draftSubmissionResult?.result !== "success" ? N || draftSubmissionResult?.result !== "failure" ? jsxs(Fragment, {
    children: [jsx(Button, {
      variant: "secondary",
      onClick: C,
      children: getI18nString("general.cancel")
    }), jsx(Button, {
      disabled: draftSubmissionResult?.result === "pending" || N,
      onClick: () => {
        checkProgress() && submit?.();
      },
      "data-testid": "publishing-modal-publish-button",
      children: draftSubmissionResult?.result === "pending" || N ? jsx(_$$k, {
        size: "sm"
      }) : getI18nString("community.publishing.publish")
    })]
  }) : jsx(Button, {
    variant: "secondary",
    onClick: clearDraftSubmissionResult,
    children: getI18nString("general.go_back")
  }) : l?.libraryKey ? jsxs(Fragment, {
    children: [jsx(Ai, {
      editorType: u,
      libraryKey: l.libraryKey
    }), jsx(vu, {
      editorType: u,
      libraryKey: l.libraryKey,
      variant: "primary"
    })]
  }) : jsx(Fragment, {});
  let P = useMemo(() => {
    if (!N && draftSubmissionResult?.result !== "success" && "error" === _.status) return (() => {
      let e = _.errors.find(e => "validation" === e.type);
      if (e) return ts(e);
      let t = _.errors.find(e => "submission" === e.type)?.data.rawError;
      return t && resolveMessage(t) ? resolveMessage(t) : getI18nString("community.publishing.an_error_occurred_please_try_again");
    })();
  }, [_, draftSubmissionResult?.result, N]);
  useEffect(() => {
    g.current(INTERNAL_PUBLISH_MODAL, {
      step: PublishModalState.OPENED
    });
  }, [g]);
  let O = Lz(_.fieldStates.name, "");
  let D = useDebouncedCallback(() => {
    g.current(INTERNAL_PUBLISH_MODAL, {
      step: PublishModalState.EDIT_NAME
    });
  }, 2e3);
  useEffect(() => {
    O && A.name.touched && D();
  }, [O, D, A.name.touched]);
  let L = Lz(_.fieldStates.description, "");
  let M = useDebouncedCallback(() => {
    g.current(INTERNAL_PUBLISH_MODAL, {
      step: PublishModalState.EDIT_DESCRIPTION
    });
  }, 1e4);
  useEffect(() => {
    L && A.description.touched && M();
  }, [L, M, A.description.touched]);
  return jsx(UI3ConditionalWrapper, {
    children: jsx(_$$I, {
      onClose: C,
      width: "fit-content",
      height: "dynamic",
      children: jsxs(DialogContents, {
        children: [jsx(DialogHeader, {
          children: jsx(DialogTitle, {
            children: getI18nString("community.publishing.org_template_modal.header")
          })
        }), jsx(DialogBody, {
          padding: 0,
          scrolling: "none",
          children: a
        }), jsxs(DialogFooter, {
          children: [jsx("span", {
            className: $o,
            "aria-live": "assertive",
            "aria-atomic": !0,
            children: P
          }), jsx(DialogActionStrip, {
            children: s
          })]
        })]
      })
    })
  });
}
let ts = e => {
  if (e && "validation" === e.type) {
    let t = e.key;
    switch (t) {
      case "NO_COMPONENTS_TO_PUBLISH":
        return;
      case "UNPUBLISHING_ALL_COMPONENTS":
        return getI18nString("design_systems.libraries_modal.no_publishable_assets");
      default:
        throwTypeError(t);
    }
  }
};
let tf = "template_publish_modal--selectionItemLeft--TCVge";
let tA = "TEMPLATE_PUBLISH_MODAL_SCOPE_DROPDOWN";
function ty({
  org: e,
  team: t,
  value: i,
  onChange: n,
  required: r,
  error: a
}) {
  let s = e => e === ContainerTypeMap.ORG ? getI18nString("templates.publishing.scope.organization") : getI18nString("templates.publishing.scope.team");
  return jsx(_$$A9, {
    label: getI18nString("templates.publishing.scope.label"),
    error: a,
    required: r,
    children: jsx(tI, {
      value: i,
      items: (() => {
        let i = [];
        e && i.push({
          name: e.name,
          scope: ContainerTypeMap.ORG,
          imgUrl: e.img_url || "",
          description: s(ContainerTypeMap.ORG)
        });
        t && i.push({
          name: t.name,
          scope: ContainerTypeMap.TEAM,
          imgUrl: t.imgUrl || "",
          description: s(ContainerTypeMap.TEAM)
        });
        return i;
      })(),
      onChange: n
    })
  });
}
function tb(e) {
  let {
    item
  } = e;
  return jsxs("div", {
    className: tf,
    children: [jsx(_$$n3, {
      size: 24,
      team: {
        name: item.name,
        img_url: item.imgUrl
      }
    }), jsxs("span", {
      className: cssBuilderInstance.flex.gap12.itemsCenter.$,
      children: [jsx("span", {
        children: item.name
      }), jsx("span", {
        className: cssBuilderInstance.colorTextSecondary.$,
        children: `(${item.description})`
      })]
    })]
  });
}
function tv(e) {
  let {
    item
  } = e;
  return jsxs("div", {
    className: cssBuilderInstance.flex.itemsCenter.justifyBetween.$,
    children: [jsxs("div", {
      className: tf,
      children: [jsx(_$$n3, {
        size: 16,
        team: {
          name: item.name,
          img_url: item.imgUrl
        }
      }), jsx("span", {
        children: item.name
      })]
    }), jsx("span", {
      className: cssBuilderInstance.colorTextMenuSecondary.$,
      children: item.description
    })]
  });
}
function tI({
  value: e,
  items: t,
  onChange: i
}) {
  let [n, r] = useState(() => {
    let i = t.findIndex(t => t.scope === e);
    return -1 === i ? 0 : i;
  });
  let a = (e, t) => {
    t(e ? hideDropdownAction() : showDropdownThunk({
      type: tA
    }));
  };
  let s = t.find(t => t.scope === e);
  let o = useRef(null);
  let l = Um()?.type === tA;
  let u = useDispatch();
  return getFeatureFlags().figjam_fpl_template_publish_scope ? jsxs(_$$bL, {
    value: e,
    onChange: i,
    children: [jsx(l9, {
      width: "fill",
      label: jsx(HiddenLabel, {
        children: getI18nString("templates.publishing.scope.label")
      }),
      size: "lg",
      children: s ? jsx(tb, {
        item: s
      }) : getI18nString("common.select")
    }), jsx(mc, {
      children: t.map(e => jsx(c$, {
        value: e.scope,
        children: jsx(tv, {
          item: e
        })
      }, e.scope))
    })]
  }) : jsxs(Fragment, {
    children: [jsx("div", {
      ref: o,
      children: jsxs("button", {
        type: "button",
        className: "template_publish_modal--publishScopeSelectTrigger--m48Fa publish_modal--categorySelectTriggerUI3--yeDOp publish_modal--categorySelectTrigger--UCp2x",
        onClick: () => a(l, u),
        role: "listbox",
        children: [jsx(tx, {
          item: t[n],
          inDropdown: !1,
          hideArrow: !0
        }), jsx("span", {
          className: "template_publish_modal--publishScopeSelectTriggerIcon--37IIw publish_modal--categorySelectTriggerIcon--43Irx",
          children: jsx(SvgComponent, {
            svg: _$$A0
          })
        })]
      })
    }), l && jsx(tE, {
      items: t,
      onChange: i,
      setSelectedIndex: r,
      dropdownTargetRef: o
    })]
  });
}
function tE({
  items: e,
  dropdownTargetRef: t,
  onChange: i,
  setSelectedIndex: n
}) {
  let r = jsx(Fragment, {
    children: e.map((e, t) => jsx(_$$c$, {
      onClick: () => {
        n(t);
        i(e.scope);
      },
      children: jsx(tx, {
        item: e,
        inDropdown: !0
      })
    }, t))
  });
  let a = t?.current?.getBoundingClientRect();
  return a ? jsx(Cf, {
    targetRect: a,
    showPoint: !1,
    minWidth: 512,
    maxWidth: 512,
    autofocusPrevOnDismount: !0,
    focusContainerOnMount: !0,
    type: it.MATCH_BACKGROUND,
    propagateCloseClick: !0,
    children: r
  }) : null;
}
function tx({
  item: {
    name: e,
    scope: t,
    imgUrl: i
  },
  inDropdown: n,
  hideArrow: r
}) {
  let a = t === ContainerTypeMap.ORG ? getI18nString("templates.publishing.scope.organization") : getI18nString("templates.publishing.scope.team");
  return jsxs("div", {
    className: T()(n ? "template_publish_modal--selectionItemDropdown--mT46A" : "template_publish_modal--selectionItem--sCqY-", {
      "template_publish_modal--hoverTextColorUI3--0cOZ1": n
    }),
    children: [jsxs("div", {
      className: tf,
      children: [jsx(_$$n3, {
        size: 24,
        team: {
          name: e,
          img_url: i
        }
      }), jsx("div", {
        className: T()({
          "template_publish_modal--primaryTextColorUI3--cOUeH text--fontPos11--2LvXf text--_fontBase--QdLsd": n
        }),
        children: e
      })]
    }), jsxs("div", {
      className: T()("template_publish_modal--selectionItemRight--FGHvH", {
        "template_publish_modal--secondaryTextColorUI3--q330T text--fontPos11--2LvXf text--_fontBase--QdLsd": n
      }),
      children: [jsx("div", {
        children: n ? a : `(${a})`
      }), jsx("div", {
        className: T()(!n && !r && "template_publish_modal--selectionItemArrow--RT0Oq")
      })]
    })]
  });
}
let tC = parsePxNumber(VJh);
let tT = "USER_UPLOADED";
let tk = ["name", "description", "publish_scope"];
let tR = atom(!1);
function tN({
  fileKey: e,
  source: t
}) {
  let i = useCurrentUserOrg();
  let n = selectCurrentUser();
  let r = useSubscription(OpenEditorFileData, {
    fileKey: e || ""
  }, {
    enabled: !!e
  });
  let a = "loaded" === r.status ? r.data.file : null;
  let s = T6(a, n);
  return "loaded" === r.status && a ? jsx(tO, {
    file: a,
    org: i,
    source: t,
    canvasThumbnail: s
  }) : null;
}
function tP({
  source: e
}) {
  let t = selectCurrentFile();
  let i = useCurrentUserOrg();
  let n = selectCurrentUser();
  let r = T6(t, n);
  let a = t?.editorType === FFileType.SLIDES;
  let [o, l] = useAtomValueAndSetter(pz);
  return (useEffect(() => {
    a && (l(LibrarySourceEnum.LIBRARY), permissionScopeHandler.system("slides-prepare-modules-for-publish", () => Fullscreen?.createSlideModulesForPublish()));
  }, [a, l]), t) ? jsx(tO, {
    file: t,
    org: i,
    source: e,
    canvasThumbnail: r
  }) : null;
}
function tO({
  file: e,
  org: t,
  source: i,
  canvasThumbnail: n
}) {
  var a;
  let o = _$$Et(e) ? e.template : null;
  let l = mZ(e);
  let h = getCurrentTeamId();
  let g = e.name;
  let A = e.team;
  let y = useDispatch();
  let E = useRef(null);
  let [x, C] = useState();
  let [k, R] = useState(!1);
  let M = g === getI18nString("fullscreen.fullscreen_view_selector.untitled");
  let [B, V] = useState(o?.name || (M ? "" : g));
  let [z, W] = useState(o?.description || "");
  let [X, ea] = useAtomValueAndSetter(b2);
  let [es, ed] = useState({});
  let [ec, eu] = useState(() => o ? o.publishScope : t ? ContainerTypeMap.ORG : ContainerTypeMap.TEAM);
  let ep = selectCurrentUser();
  let em = useMemo(() => ep ? {
    name: ep.name,
    imgUrl: ep.img_url
  } : null, [ep]);
  let eh = {
    name: t?.name,
    imgUrl: t?.img_url
  };
  let eg = {
    name: A?.name,
    imgUrl: A?.imgUrl
  };
  let ef = em || (ec === ContainerTypeMap.ORG ? eh : eg);
  let e_ = e.editorType === FFileType.SLIDES;
  let eA = e.editorType === FFileType.COOPER;
  let ey = e.editorType === FFileType.FIGMAKE;
  let [eb, ev] = useState((a = e.template, !e || !a || a?.unpublishedAt || a?.thumbnailGuid !== tT ? null : {
    url: a.thumbnailUrl
  }));
  let [eI, eE] = useState(null);
  let {
    initiateTemplatePublish,
    publishInProgress
  } = _$$r();
  let {
    initiateTemplatePublish: _initiateTemplatePublish,
    publishInProgress: _publishInProgress
  } = _$$X();
  let {
    initiateTemplatePublish: _initiateTemplatePublish2,
    publishInProgress: _publishInProgress2
  } = function () {
    let e = useDispatch();
    let t = useAtomWithSubscription(J);
    let i = Xr(ee);
    let n = "PUBLISH_TEMPLATE_INITIATED" === t.state || "UNPUBLISH_TEMPLATE_INITIATED" === t.state;
    return {
      initiateTemplatePublish: useCallback(t => {
        n || (i({
          state: Q.PUBLISH_TEMPLATE_INITIATED,
          request: t
        }), _$$l({
          ...t,
          dispatch: e,
          onSuccess: () => {
            atomStoreManager.set(ee, {
              state: Q.PUBLISH_TEMPLATE_SUCCESS
            });
            e(VisualBellActions.enqueue({
              type: ei,
              message: t.isPublishedTemplate ? getI18nString("cooper.templates.template_updates_published") : getI18nString("cooper.templates.template_published"),
              icon: VisualBellIcon.CHECK
            }));
            e(hideModal());
          },
          onFailure: t => {
            atomStoreManager.set(ee, {
              state: Q.PUBLISH_TEMPLATE_ERRORED
            });
            e(VisualBellActions.enqueue({
              type: ei,
              message: getI18nString("cooper.templates.template_failed_published"),
              error: !0
            }));
          }
        }));
      }, [e, n, i]),
      publishInProgress: n
    };
  }();
  useEffect(() => {
    e_ && R(publishInProgress);
    eA && R(_publishInProgress);
    ey && R(_publishInProgress2);
  }, [eA, _publishInProgress, e_, publishInProgress, ey, _publishInProgress2]);
  let eR = useCallback(async e => {
    try {
      let t = await $x(e, eb || n || void 0);
      ev(t);
      eE(null);
    } catch (e) {
      eE(e.message);
    }
  }, [eb, n]);
  let eN = useCallback(() => {
    ev(null);
    eE(null);
  }, []);
  let eP = () => {
    y(hideModal());
    y(VisualBellActions.enqueue({
      message: o ? getI18nString("templates.publishing.bell.updated") : getI18nString("templates.publishing.bell.success"),
      type: "template-publish-success"
    }));
    ea(!1);
  };
  let eO = () => {
    y(VisualBellActions.enqueue({
      message: getI18nString("templates.publishing.bell.failure"),
      type: "template-publish-error",
      error: !0
    }));
  };
  let eD = () => {
    y(popModalStack());
  };
  let eL = useAtomWithSubscription(tR);
  let eF = useModalManager({
    open: eL,
    onClose: eD
  });
  let eM = $u();
  let ej = () => {
    if (e_ && initiateTemplatePublish) {
      let t = _$$s({
        name: B,
        description: z,
        publish_scope: ec
      });
      ed(t);
      Object.keys(t).length > 0 || eM(() => {
        initiateTemplatePublish({
          fileKey: e.key,
          name: B,
          description: z,
          publishScope: ec,
          customThumbnail: eb,
          shouldRenameFile: M,
          onErrorsChanged: ed,
          isPublishedTemplate: !!o,
          libraryKey: e.libraryKey
        });
      });
    } else if (eA && _initiateTemplatePublish) {
      let t = _$$s({
        name: B,
        description: z,
        publish_scope: ec
      });
      if (ed(t), Object.keys(t).length > 0) return;
      _initiateTemplatePublish({
        fileKey: e.key,
        name: B,
        description: z,
        publishScope: ec,
        customThumbnail: eb,
        shouldRenameFile: M,
        onErrorsChanged: ed,
        isPublishedTemplate: !!o,
        libraryKey: e.libraryKey
      });
    } else if (ey && _initiateTemplatePublish2) {
      let t = _$$s({
        name: B,
        description: z,
        publish_scope: ec
      });
      if (ed(t), Object.keys(t).length > 0) return;
      _initiateTemplatePublish2({
        fileKey: e.key,
        name: B,
        description: z,
        publishScope: ec,
        customThumbnail: eb,
        shouldRenameFile: M,
        onErrorsChanged: ed,
        isPublishedTemplate: !!o,
        libraryKey: e.libraryKey
      });
    } else {
      R(!0);
      _$$l({
        fileKey: e.key,
        name: B,
        description: z,
        publishScope: ec,
        customThumbnail: eb,
        shouldRenameFile: M,
        onErrorsChanged: ed,
        onSuccess: eP,
        onFailure: eO,
        dispatch: y
      }).finally(() => {
        R(!1);
      });
    }
  };
  useLayoutEffect(() => {
    let e = requestAnimationFrame(() => {
      let e = E?.current?.clientWidth;
      e && e > 0 && C(e);
    });
    return () => cancelAnimationFrame(e);
  }, []);
  let eU = useMemo(() => eb ? {
    ...eb,
    type: "image"
  } : n ? "buffer" in n ? {
    ...n,
    sha1: sha1Hex(n.buffer),
    type: "image"
  } : {
    ...n,
    type: "image"
  } : void 0, [n, eb]);
  return (useEffect(() => {
    l || y(VisualBellActions.enqueue({
      message: getI18nString("templates.publishing.bell.no_publish_access"),
      type: "template-publish-error",
      error: !0
    }));
  }, [l, y]), l) ? jsx(TrackingProvider, {
    name: _$$e.TEAM_TEMPLATE_PUBLISH_MODAL,
    properties: {
      source: i,
      orgId: t?.id,
      teamId: h
    },
    children: jsx(ModalRootComponent, {
      manager: eF,
      width: tC,
      children: jsxs(ModalFormContents, {
        onSubmit: () => {
          t && A?.orgAccess === FAccessLevelType.SECRET && !getFeatureFlags().pro_templates_lg ? y(showModalHandler({
            type: X0,
            data: {
              title: renderI18nText("templates.confirmation.publish.secret.title_v2"),
              content: renderI18nText("templates.confirmation.publish.secret.description", {
                teamName: A.name,
                orgName: t.name
              }),
              confirmText: renderI18nText("templates.confirmation.publish.secret.confirm.publish_anyway"),
              destructive: !1,
              onConfirm: ej
            }
          })) : ej();
        },
        children: [jsx(DialogHeader, {
          children: jsx(DialogTitle, {
            children: o ? getI18nString("templates.publishing.header.updates") : getI18nString("templates.publishing.header")
          })
        }), jsxs(DialogBody, {
          padding: 0,
          scrolling: "none",
          children: [jsx("div", {
            className: "template_publish_modal--previewContainer--n-cU6 publish_modal--previewContainer--q2lDp",
            children: jsx("div", {
              className: "template_publish_modal--previewContainerInner--hWw8Z",
              children: jsx(_$$N2, {
                name: B,
                author: ef,
                thumbnail: eU,
                isCustomThumbnailSet: function (e, t, {
                  customThumbnail: i
                } = {}) {
                  return !!(i || t?.thumbnailGuid && t.thumbnailGuid !== tT) || !!e?.thumbnailGuid;
                }(e, e.template, {
                  customThumbnail: eb
                }),
                enableUpload: !0,
                onUpload: eR,
                uploadError: eI || void 0,
                enableRestore: !!eb,
                onRestore: eN
              })
            })
          }), jsxs("div", {
            className: "template_publish_modal--containerUI3--iLgCa publish_modal_accordion--contentUI3--9oSSM",
            children: [jsx(_$$A2, {
              value: B,
              onChange: e => V(e.currentTarget.value),
              error: es.name,
              autoFocus: !0,
              disabled: k
            }), jsx(_$$A, {
              defaultValue: z,
              onChange: W,
              placeholderText: getI18nString("templates.publishing.description.placeholder"),
              error: es.description
            }), jsx(ty, {
              org: t,
              team: A,
              value: ec,
              onChange: eu
            })]
          }), t && (!o || o?.publishScope === ContainerTypeMap.TEAM) && ec === ContainerTypeMap.ORG && e_ && jsx(eo, {})]
        }), jsxs(DialogFooter, {
          children: [jsx("div", {
            children: !!$W(tk, es) && jsxs("div", {
              className: T()("template_publish_modal--footerText--dB9b6 publish_modal--footerText--2Sv9Q publish_modal--_userSelectNone--sP-aW", "template_publish_modal--footerError--AkcLv publish_modal--footerError--06reN text--fontPos11--2LvXf text--_fontBase--QdLsd"),
              "data-testid": "publish-modal-footer-text",
              children: [jsx(SvgComponent, {
                svg: _$$A1
              }), renderI18nText("community.publish.fix_errors")]
            })
          }), jsxs(DialogActionStrip, {
            children: [jsx($z, {
              variant: "secondary",
              disabled: k,
              onClick: eD,
              children: renderI18nText("general.cancel")
            }), jsx($z, {
              variant: "primary",
              type: "submit",
              ref: E,
              trackingProperties: {
                trackingDescriptor: UpgradeAction.PUBLISH,
                hasExistingTemplate: !!o,
                fileKey: e.key,
                productType: e.editorType
              },
              disabled: k,
              children: k ? jsx("div", {
                className: "template_publish_modal--loadingButton--W-lNc",
                style: {
                  width: x ? `${x - 16}px` : void 0
                },
                children: jsx(_$$k, {
                  size: "sm"
                })
              }) : o ? renderI18nText("templates.publishing.publish.updates") : renderI18nText("templates.publishing.publish")
            })]
          })]
        })]
      })
    })
  }) : null;
}
let tD = registerModal(function ({
  fileKey: e,
  source: t,
  open: i
}) {
  let n = selectCurrentFile();
  return (Xr(tR)(i), !n && e) ? jsx(tN, {
    fileKey: e,
    source: t
  }) : n ? n.editorType === FFileType.COOPER && getFeatureFlags().cooper ? jsx(tr, {
    source: t
  }) : jsx(tP, {
    source: t
  }) : null;
}, "TemplatePublishModal", ModalSupportsBackground.YES);
export function $$tL2(e, t, i) {
  e(showModalHandler({
    type: tD,
    data: {
      fileKey: t,
      source: i
    }
  }));
}
export function $$tF0(e) {
  e(showModalHandler({
    type: y
  }));
}
export function $$tM1(e, t, i, d) {
  if (_$$n(i)) {
    _$$a({
      source: d,
      onSubmit: () => $$tL2(e, t, d),
      onCancel: () => {
        e(fileSelectedShareModalTab({
          view: ShareAction.INVITE
        }));
        e(popModalStack());
      },
      dispatch: e
    });
    return;
  }
  i === FFileType.COOPER && fullscreenValue.triggerAction("cooper-make-brand-templates", {
    source: d
  });
  $$tL2(e, t, d);
}
export const i$ = $$tF0;
export const YM = $$tM1;
export const rg = $$tL2;
