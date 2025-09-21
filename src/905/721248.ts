import eb from 'classnames';
import { Fragment as _$$Fragment, cloneElement, Component, createContext, createRef, memo, Suspense, useCallback, useContext, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Fragment, jsx, jsxs } from 'react/jsx-runtime';
import { setTagGlobal } from '../905/11';
import { r as _$$r2 } from '../905/11924';
import { ModalRootComponent } from '../905/38914';
import { d as _$$d } from '../905/49800';
import { tF as _$$tF, Hm, lp, ue } from '../905/61300';
import { KeyCodes } from '../905/63728';
import { ModalSupportsBackground, registerModal } from '../905/102752';
import { t as _$$t2 } from '../905/117577';
import { J as _$$J3 } from '../905/125993';
import { KindEnum } from '../905/129884';
import { hideModal, popModalStack, showModalHandler } from '../905/156213';
import { zW } from '../905/162414';
import { setupToggleButton } from '../905/167712';
import { CustomCauseError } from '../905/194389';
import { h as _$$h } from '../905/207101';
import { x as _$$x } from '../905/211326';
import { J as _$$J2 } from '../905/225412';
import { waitForAnimationFrame } from '../905/236856';
import { HiddenLabel, Label } from '../905/270045';
import { ov, S2 } from '../905/300250';
import { VisualBellActions } from '../905/302958';
import { getI18nString, renderI18nText } from '../905/303541';
import { R as _$$R } from '../905/307199';
import { b as _$$b, c as _$$c } from '../905/308099';
import { v as _$$v } from '../905/318279';
import { wG } from '../905/331989';
import { enterPreviewDetachedState } from '../905/346794';
import { P as _$$P } from '../905/347284';
import { createOptimistThunk } from '../905/350402';
import { selectCurrentUser } from '../905/372672';
import { deepEqual } from '../905/382883';
import { tq as _$$tq, lo, SR } from '../905/386270';
import { $2, C_, cs, FD, ju, KZ, Mt, MY, Oh, Oi, on, PE, rB, Rw, s$, uA, WE, Xp, Y1, yi } from '../905/432493';
import { useModalManager } from '../905/437088';
import { Link } from '../905/438674';
import { IconButton } from '../905/443068';
import { k as _$$k2 } from '../905/443820';
import { analyticsEventManager, trackEventAnalytics } from '../905/449184';
import { notificationActions } from '../905/463586';
import { $T, _V, ED, z2 } from '../905/467351';
import { FS } from '../905/491806';
import { bL as _$$bL3, mc as _$$mc, c$, l9 } from '../905/493196';
import { getLibraryNames } from '../905/506188';
import { Button, ButtonWide } from '../905/521428';
import { BranchType, CPPEventType, SourceDirection } from '../905/535806';
import { AccessLevelEnum } from '../905/557142';
import { r as _$$r } from '../905/571562';
import { VisualBellIcon } from '../905/576487';
import { n6 as _$$n, _l, b_, ds, gf, Ur, YH } from '../905/585030';
import { getFeatureFlags } from '../905/601108';
import { o as _$$o } from '../905/605383';
import { X as _$$X } from '../905/606795';
import { customHistory } from '../905/612521';
import { currentSelectionAtom, isActiveAtom } from '../905/617744';
import { R as _$$R2 } from '../905/621802';
import { ButtonPrimitive } from '../905/632989';
import { getVisibleTheme } from '../905/640017';
import { In } from '../905/672640';
import { e0 as _$$e2 } from '../905/696396';
import { G as _$$G } from '../905/702115';
import { H as _$$H } from '../905/706055';
import { ak as _$$ak, ed as _$$ed, es as _$$es, FD as _$$FD, Hb as _$$Hb, iG as _$$iG, tp as _$$tp, ai, Dn, G9, ho, j2, jT, k2, kb, kd, Kl, lq, lT, LX, mK, OF, oW, pG, Rm, rU, S1, sB, UT, v2, w5, Wd, WH, Wr, XA, Xl } from '../905/710747';
import { liveStoreInstance } from '../905/713695';
import { TI } from '../905/713722';
import { logError, logInfo } from '../905/714362';
import { SvgComponent } from '../905/714743';
import { l as _$$l2 } from '../905/716947';
import { u as _$$u, BL, or, qW, Ss, xY } from '../905/720292';
import { getResourceDataOrFallback } from '../905/723791';
import { useHasFilePermission } from '../905/728491';
import { nS as _$$nS, tW as _$$tW, ak, FA, qj, ss, wy } from '../905/746499';
import { G as _$$G2 } from '../905/750789';
import { ErrorBoundaryCrash, useErrorBoundaryContext } from '../905/751457';
import { handleModalError } from '../905/760074';
import { WB } from '../905/761735';
import { fG } from '../905/772425';
import { convertKiwiToVariableIdString } from '../905/805904';
import { w as _$$w2 } from '../905/835474';
import { yG } from '../905/859698';
import { ud } from '../905/862913';
import { ProjectDevelopmentPhases } from '../905/869235';
import { m as _$$m } from '../905/871166';
import { areSessionLocalIDsEqual, sessionLocalIDToString } from '../905/871411';
import { XHR } from '../905/910117';
import { A as _$$A0 } from '../905/920142';
import { selectViewAction } from '../905/929976';
import { $n as _$$$n } from '../905/930279';
import { q as _$$q } from '../905/932270';
import o, { lQ } from '../905/934246';
import { fileEntityDataMapper } from '../905/943101';
import { a as _$$a } from '../905/964520';
import { qp } from '../905/977779';
import { Ar, GC, SS } from '../905/984793';
import { rY } from '../905/985490';
import { h1 } from '../905/986103';
import { B8 } from '../905/993733';
import { A as _$$A6 } from '../1617/380980';
import { A as _$$A4 } from '../1617/466789';
import { A as _$$A1 } from '../1617/954184';
import { A as _$$A3 } from '../2854/952200';
import { A as _$$A2 } from '../3850/204081';
import { A as _$$A } from '../3850/839808';
import { A as _$$A12 } from '../4711/505562';
import { A as _$$A8 } from '../5724/267849';
import { A as _$$A7 } from '../5724/739816';
import { A as _$$A10 } from '../6828/117346';
import { A as _$$A13 } from '../6828/191424';
import { A as _$$A11 } from '../6828/250823';
import { A as _$$A15 } from '../6828/364616';
import { A as _$$A9 } from '../6828/555288';
import { A as _$$A14 } from '../6828/954206';
import { cssBuilderInstance } from '../cssbuilder/589278';
import { atom, useAtomValueAndSetter, useAtomWithSubscription, Xr } from '../figma_app/27355';
import { BranchingSourceViewSidebarView, BranchOpenMergeRequest, FileCanEdit, RepoReviewerSuggestions } from '../figma_app/43951';
import { FEditorType } from '../figma_app/53721';
import { bL as _$$bL, Y9 as _$$Y, JU, UC } from '../figma_app/57171';
import { isNotNullish } from '../figma_app/95419';
import { JR, Qp } from '../figma_app/162641';
import { getSupportEmail } from '../figma_app/169182';
import { EditorLocation } from '../figma_app/175992';
import { getPropertyScopes } from '../figma_app/198712';
import { MM, ms } from '../figma_app/236327';
import { UB } from '../figma_app/249941';
import { DialogActionStrip, DialogBody, DialogContents, DialogFooter, DialogHeader, DialogTitle } from '../figma_app/272243';
import { useSubscription } from '../figma_app/288654';
import { mapUserProperties } from '../figma_app/349248';
import { rY as _$$rY } from '../figma_app/394327';
import { _5, ec as _$$ec, Yz } from '../figma_app/449837';
import { assertNotNullish, throwTypeError } from '../figma_app/465776';
import { B3 } from '../figma_app/481279';
import { selectOpenFile } from '../figma_app/516028';
import { setHeapMemoryMode } from '../figma_app/527873';
import { jq } from '../figma_app/563413';
import { $z } from '../figma_app/617427';
import { getStyleTypeLabel } from '../figma_app/646357';
import { flatten, mapFilter } from '../figma_app/656233';
import { DocumentMode, FileAndBranchTipType, GitReferenceType, LibraryUpdateStatus, PreviewStage, PropertyScope, SceneGraphHelpers, SchemaJoinStatus, VariablesBindings, ViewType } from '../figma_app/763686';
import { compareNumbers } from '../figma_app/766708';
import { Z_ } from '../figma_app/793953';
import { Ro } from '../figma_app/805373';
import { TrackingProvider } from '../figma_app/831799';
import { LoadingOverlay } from '../figma_app/858013';
import { MenuContainerComp, MenuItemComp, MenuRootComp, setupMenu } from '../figma_app/860955';
import { BadgeSize } from '../figma_app/919079';
import { camelToSnakeWithLeading, capitalize } from '../figma_app/930338';
import { eE as _$$eE, Wy } from '../figma_app/952446';
import { A as _$$A5 } from '../svg/660901';
import nR from '../vendor/73823';
import eW from '../vendor/128080';
import n$ from '../vendor/239910';
import nM from '../vendor/626715';
import { _m } from '../vendor/891888';
import i$ from '../vendor/946678';
import Q from '../vendor/961736';
let J = Q;
createOptimistThunk(async (e, t) => {
  try {
    let e = XHR.put(`/api/merge_requests/${t.mergeRequestKey}`, {
      closed: t.closed
    });
    await WB()?.optimisticallyUpdate({
      MergeRequest: {
        [t.mergeRequestId]: {
          closedAt: t.closed ? new Date() : null
        }
      }
    }, e);
  } catch (i) {
    e.dispatch(VisualBellActions.enqueue({
      message: t.closed ? getI18nString('collaboration.branching.error_converting_merge_request_to_draft') : getI18nString('collaboration.branching.error_submitting_merge_request'),
      type: 'merge-request-close',
      error: !0
    }));
  }
});
let ed = createOptimistThunk(async (e, t) => {
  let i = t.approved ? 'merge-request-approve' : t.changesRequested ? 'merge-request-changes-requested' : '';
  i && e.dispatch(VisualBellActions.enqueue({
    icon: VisualBellIcon.SPINNER,
    message: getI18nString('collaboration.branching.submitting_review'),
    type: i
  }));
  try {
    let n = XHR.put(`/api/merge_requests/${t.mergeRequestKey}/reviewers`, {
      ...(t.changesRequested != null && {
        changes_requested: t.changesRequested
      }),
      ...(t.approved != null && {
        approved: t.approved
      }),
      ...(t.notes != null && {
        notes: t.notes
      })
    });
    await WB()?.optimisticallyUpdate({
      MergeRequestReviewer: {
        [t.mergeRequestReviewerId]: {
          ...(!t.approved && t.changesRequested && {
            changesRequestedAt: new Date()
          }),
          ...(t.approved && {
            approvedAt: new Date()
          }),
          ...(t.notes != null && {
            notes: t.notes
          })
        }
      }
    }, n);
    let r = t.approved ? getI18nString('collaboration.branching.approved_review') : t.changesRequested ? getI18nString('collaboration.branching.suggested_changes_on_review') : '';
    r && i && e.dispatch(VisualBellActions.enqueue({
      icon: VisualBellIcon.CHECK,
      message: r,
      type: i
    }));
  } catch (t) {
    e.dispatch(VisualBellActions.enqueue({
      message: getI18nString('collaboration.branching.error_leaving_review'),
      type: i,
      error: !0
    }));
  }
});
let ec = createOptimistThunk(async (e, t) => {
  try {
    let e = XHR.put(`/api/merge_requests/${t.mergeRequestKey}/reviewers`, {
      notes: t.notes
    });
    await WB()?.optimisticallyUpdate({
      MergeRequestReviewer: {
        [t.mergeRequestReviewerId]: {
          notes: t.notes
        }
      }
    }, e);
  } catch (t) {
    e.dispatch(VisualBellActions.enqueue({
      message: getI18nString('collaboration.branching.error_updating_reviewer_comment'),
      type: 'merge-request-update-notes',
      error: !0
    }));
  }
});
let eu = createOptimistThunk(async (e, t) => {
  try {
    let e = XHR.post(`/api/merge_requests/${t.mergeRequestKey}/${t.isApprove ? 'approve' : 'unapprove'}`);
    await WB()?.optimisticallyUpdate({
      MergeRequestReviewer: {
        [t.mergeRequestReviewerId]: {
          approvedAt: t.isApprove ? new Date() : null
        }
      }
    }, e);
  } catch (i) {
    e.dispatch(VisualBellActions.enqueue({
      message: t.isApprove ? getI18nString('collaboration.branching.error_approving') : getI18nString('collaboration.branching.error_removing_approval'),
      type: 'merge-request-approve',
      error: !0
    }));
  }
});
let ep = createOptimistThunk(async (e, t) => {
  try {
    let i = XHR.put(`/api/merge_requests/${t.mergeRequestKey}`, {
      rerequest: !0,
      description: t.description,
      include_invited: 'true'
    });
    await WB()?.optimisticallyUpdate({
      MergeRequest: {
        [t.mergeRequestId]: {
          description: t.description,
          requestedAt: new Date()
        }
      }
    }, i);
    e.dispatch(VisualBellActions.enqueue({
      icon: VisualBellIcon.CHECK,
      message: getI18nString('collaboration.branching.review_requested'),
      type: 'merge-re-request'
    }));
  } catch (t) {
    e.dispatch(VisualBellActions.enqueue({
      message: getI18nString('collaboration.branching.error_re_sending_merge_request'),
      type: 'merge-request-resend',
      error: !0
    }));
  }
});
let em = createOptimistThunk(async (e, t) => {
  try {
    let e = XHR.put(`/api/merge_requests/${t.mergeRequestKey}`, {
      ...t.mergeRequestPayload,
      include_invited: 'true'
    });
    await WB()?.optimisticallyUpdate({
      MergeRequest: {
        [t.mergeRequestId]: {
          title: t.mergeRequestPayload.title,
          description: t.mergeRequestPayload.description
        }
      }
    }, e);
  } catch (t) {
    e.dispatch(VisualBellActions.enqueue({
      message: getI18nString('collaboration.branching.error_updating_merge_request'),
      type: 'merge-request-update',
      error: !0
    }));
  }
});
let eh = createOptimistThunk(async (e, t) => {
  let i = e.getState();
  e.dispatch(VisualBellActions.enqueue({
    icon: VisualBellIcon.SPINNER,
    message: getI18nString('collaboration.branching.submitting_request'),
    type: 'merge-request-submit'
  }));
  try {
    let {
      wasCreated
    } = await eg(t, i.openFile.key);
    e.dispatch(VisualBellActions.enqueue({
      icon: wasCreated ? VisualBellIcon.CHECK : void 0,
      message: wasCreated ? getI18nString('collaboration.branching.request_submitted') : getI18nString('collaboration.branching.a_merge_request_is_already_open_for_this_branch'),
      type: 'merge-request-submit'
    }));
  } catch (i) {
    e.dispatch(VisualBellActions.enqueue({
      message: t.title ? getI18nString('collaboration.branching.error_submitting_merge_request') : getI18nString('collaboration.branching.title_missing_from_merge_request'),
      type: 'merge-request-submit',
      error: !0
    }));
  }
});
let eg = async (e, t) => {
  let i = await XHR.post('/api/merge_requests', {
    ...e,
    branch_key: t,
    include_invited: 'true'
  });
  return {
    mergeRequest: i.data.meta.merge_request,
    wasCreated: i.status === 201
  };
};
let ev = eb;
let eC = 'chunk_diff--overlayChunk--vY17L';
let eT = 'chunk_tile--itemRow--DBep5';
let ek = 'chunk_tile--faint--QrXp2';
let eR = 'chunk_tile--title--Jrj1k';
let eN = 'chunk_tile--stylePreviewContainer--dQhyt';
let eP = 'chunk_tile--textStylePreviewInverted--LQ72y';
function eO({
  isDarkBackground: e,
  displayNode: t,
  shouldSkip: i
}) {
  let r = e ? 'chunk_diff--faintDarkBackground--wOnvP' : 'chunk_diff--faintLightBackground--d-LBw';
  if (i) {
    return jsx('div', {
      className: r,
      children: renderI18nText('collaboration.branching_chunk.fallback_no_item')
    });
  }
  if (t && $2(t)) {
    let e = s$(t);
    return jsx(SvgComponent, {
      svg: e,
      className: 'chunk_diff--grid--80il5',
      autosize: !0,
      width: '40px'
    });
  }
  return jsx('div', {
    className: r,
    children: renderI18nText('collaboration.branching_chunk.fallback_missing_preview')
  });
}
function eD({
  className: e,
  title: t,
  image: i,
  style: a,
  displayNode: s,
  displayNodeStyleType: o,
  isMainChunkCanvas: l,
  shouldSkip: d
}) {
  let c = getVisibleTheme() === 'dark';
  let u = !d && !(s && $2(s)) && void 0 === i;
  let p = KZ(o);
  let m = o === 'TEXT';
  let h = o === 'FILL';
  let g = ev()({
    'chunk_diff--chunkImage--hEGkg': !0,
    [eN]: m || h
  });
  let f = ev()({
    [eP]: m && c
  });
  let _ = useMemo(() => cs(i, s) ? {
    data: i.image,
    width: i.width,
    height: i.height,
    scale: getFeatureFlags().branching_detail_view_zoom ? p ? 2 : 4 : 2
  } : null, [i, s, p]);
  let A = rB(c, a?.backgroundColor, o);
  let y = _ ? jsx(_$$ec, {
    className: g,
    canvasClassName: f,
    style: {
      ...a
    },
    image: _
  }) : jsx('div', {
    style: a,
    className: g,
    children: jsx(_$$x, {
      isLoading: u,
      children: () => jsx(eO, {
        isDarkBackground: A,
        displayNode: s,
        isMainChunkCanvas: l,
        shouldSkip: d
      })
    })
  });
  return jsx(or, {
    containerStyle: e,
    isDarkBackground: A,
    title: t,
    children: y
  });
}
let eL = memo(e => {
  let {
    chunkDetail
  } = e;
  let [i, a] = useState(Ss.SIDE_BY_SIDE);
  let [s, o] = useState(0.5);
  let [l, d] = useState(!0);
  let c = e.displayChunk.mainChunk.displayNode.type === 'CANVAS';
  let u = e.displayChunk.mainChunk.displayNode.styleType;
  let p = getVisibleTheme() === 'dark';
  let h = rB(p, e.beforeBackgroundColorStyle.backgroundColor, u) ? 'chunk_diff--beforeChunk---fPIR chunk_diff--_chunk--2CSwp' : 'chunk_diff--beforeChunkLightCanvas--jrMYC chunk_diff--beforeChunk---fPIR chunk_diff--_chunk--2CSwp';
  useEffect(() => {
    e.showOptions || a(Ss.SIDE_BY_SIDE);
  }, [e.showOptions]);
  let g = () => {
    let t = !!e.beforeImage || !!e.afterImage;
    return jsx(BL, {
      isPreviewAvailable: t,
      showOptions: e.showOptions,
      view: i,
      onSideBySideClick: () => a(Ss.SIDE_BY_SIDE),
      onOverlayClick: () => a(Ss.OVERLAY)
    });
  };
  return jsxs('div', {
    className: 'chunk_diff--container--YZ2OE',
    children: [i === Ss.SIDE_BY_SIDE && jsxs(qW, {
      zoomPercentageOptions: getFeatureFlags().branching_detail_view_zoom ? [25, 50, 100, 150] : [25, 50, 100],
      resetStateOnChangeValue: e.displayChunk.mainChunk.originalIndex,
      zoomOnMousePointer: !1,
      children: [jsx(eD, {
        className: h,
        style: e.beforeBackgroundColorStyle,
        title: renderI18nText('collaboration.branching_chunk.side_by_side_left_label'),
        image: e.beforeImage,
        shouldSkip: e.displayChunk.mainChunk.phase === LibraryUpdateStatus.CREATED,
        displayNode: e.chunkDetail?.diffBasis?.find($2),
        displayNodeStyleType: u,
        isMainChunkCanvas: c
      }), jsx(eD, {
        className: 'chunk_diff--afterChunk--1K5OP chunk_diff--_chunk--2CSwp',
        style: e.beforeBackgroundColorStyle,
        title: renderI18nText('collaboration.branching_chunk.side_by_side_right_label'),
        image: e.afterImage,
        shouldSkip: e.displayChunk.mainChunk.phase === LibraryUpdateStatus.REMOVED,
        displayNode: e.displayChunk.mainChunk.displayNode,
        displayNodeStyleType: u,
        isMainChunkCanvas: c
      }), g()]
    }), i === Ss.OVERLAY && jsxs(xY, {
      zoomPercentageOptions: getFeatureFlags().branching_detail_view_zoom ? [25, 50, 100, 150] : [25, 50, 100],
      resetStateOnChangeValue: e.displayChunk.mainChunk.originalIndex,
      zoomOnMousePointer: !1,
      children: [jsx(eD, {
        image: e.beforeImage,
        style: e.beforeBackgroundColorStyle,
        className: eC,
        shouldSkip: e.displayChunk.mainChunk.phase === LibraryUpdateStatus.CREATED,
        displayNodeStyleType: u,
        isMainChunkCanvas: c
      }), l && jsx(eD, {
        style: {
          ...e.beforeBackgroundColorStyle,
          opacity: s
        },
        image: e.afterImage,
        className: eC,
        shouldSkip: e.displayChunk.mainChunk.phase === LibraryUpdateStatus.REMOVED,
        displayNodeStyleType: u,
        isMainChunkCanvas: c
      }), jsx(_$$u, {
        opacity: s,
        isAfterImageShown: l,
        onToggleClick: () => d(!l),
        onOpacityChange: e => o(e.a)
      }), g()]
    }), chunkDetail ? jsx(B8, {
      changes: chunkDetail.nodeChanges,
      basis: chunkDetail.diffBasis,
      chunk: e.displayChunk.mainChunk,
      compareThumbnailSource: e.compareThumbnailSource
    }) : null]
  });
});
let eU = 'chunk_phase--phaseLabel--jHaPR';
function eH(e) {
  let t = ['chunk_phase--phaseBadge--F19Lq'];
  e.className && t.push(e.className);
  let i = 'chunk_phase--phaseIcon--w-X7b';
  switch (e.phase) {
    case LibraryUpdateStatus.UPDATED_LIBRARY:
      {
        t.push('chunk_phase--updatedLibrary--pFUV9');
        let r = getI18nString('collaboration.branching_chunk.phase_updated_library');
        return jsxs('div', {
          className: t.join(' '),
          children: [jsx(SvgComponent, {
            'svg': _$$A,
            'className': i,
            'autosize': !0,
            'width': '10px',
            'data-tooltip-type': e.hideLabel ? KindEnum.TEXT : void 0,
            'data-tooltip': r
          }), !e.hideLabel && jsx('span', {
            className: eU,
            children: r
          })]
        });
      }
    case LibraryUpdateStatus.CREATED:
      {
        t.push('chunk_phase--added--PSD48');
        let r = getI18nString('collaboration.branching_chunk.phase_created');
        return jsxs('div', {
          className: t.join(' '),
          children: [jsx(SvgComponent, {
            'svg': _$$A4,
            'className': i,
            'autosize': !0,
            'width': '8px',
            'data-tooltip-type': e.hideLabel ? KindEnum.TEXT : void 0,
            'data-tooltip': r
          }), !e.hideLabel && jsx('span', {
            className: eU,
            children: r
          })]
        });
      }
    case LibraryUpdateStatus.REMOVED:
      {
        t.push('chunk_phase--removed--WDLhF');
        let r = getI18nString('collaboration.branching_chunk.phase_removed');
        return jsxs('div', {
          className: t.join(' '),
          children: [jsx(SvgComponent, {
            'svg': _$$A3,
            'className': i,
            'autosize': !0,
            'width': '8px',
            'data-tooltip-type': e.hideLabel ? KindEnum.TEXT : void 0,
            'data-tooltip': r
          }), !e.hideLabel && jsx('span', {
            className: eU,
            children: r
          })]
        });
      }
    case LibraryUpdateStatus.UPDATED:
      {
        t.push('chunk_phase--edited--1KN2v');
        let r = getI18nString('collaboration.branching_chunk.phase_updated');
        return jsxs('div', {
          className: t.join(' '),
          children: [jsx(SvgComponent, {
            'svg': _$$A2,
            'className': i,
            'autosize': !0,
            'width': '8px',
            'data-tooltip-type': e.hideLabel ? KindEnum.TEXT : void 0,
            'data-tooltip': r
          }), !e.hideLabel && jsx('span', {
            className: eU,
            children: r
          })]
        });
      }
    case LibraryUpdateStatus.UNMODIFIED:
      return null;
    default:
      throwTypeError(e.phase);
  }
}
let eK = eW;
let e$ = 'chunk_property_changes--additionOrRemoval--7t5J4';
let eZ = new Set(['guid', 'phase']);
function eX(e) {
  let {
    value
  } = e;
  return void 0 === value ? null : value && typeof value == 'object' || Array.isArray(value) ? jsx('div', {
    className: 'chunk_property_changes--nestedValue--qJ45p',
    children: jsx(eQ, {
      value
    })
  }) : value.toString();
}
function eQ(e) {
  let {
    value
  } = e;
  return void 0 === value ? null : Array.isArray(value) ? jsx('div', {
    children: value.map((e, t) => jsx(eQ, {
      value: e
    }, t))
  }) : value && typeof value == 'object' ? jsx('div', {
    children: Object.entries(value).map(([e, t]) => jsx('div', {
      className: 'chunk_property_changes--objectChangeObjectValue--7kJ9b',
      children: renderI18nText('collaboration.branching_chunk.property_change_node_value_denoter', {
        propertyName: e,
        propertyValue: jsx(eX, {
          value: t
        })
      })
    }, e))
  }) : jsx('div', {
    children: value.toString()
  });
}
function eJ(e) {
  let {
    prevValue,
    newValue
  } = e;
  return jsxs('div', {
    className: 'chunk_property_changes--objectChange--BL0gA',
    children: [prevValue ? jsx('div', {
      className: 'chunk_property_changes--objectChangeElemLeft--aAmuX',
      children: jsx(eQ, {
        value: prevValue
      })
    }) : null, jsx('div', {
      children: renderI18nText('collaboration.branching_chunk.property_change_changed_value_denoter')
    }), newValue ? jsx('div', {
      className: 'chunk_property_changes--objectChangeElemRight--SKPdA',
      children: jsx(eQ, {
        value: newValue
      })
    }) : null]
  });
}
function e0(e) {
  let {
    prevValue,
    newValue
  } = e;
  return void 0 !== prevValue && void 0 !== newValue ? renderI18nText('collaboration.branching_chunk.property_change_edited', {
    prevValue: prevValue.toString(),
    newValue: newValue.toString()
  }) : void 0 !== prevValue ? renderI18nText('collaboration.branching_chunk.property_change_removed', {
    prevValue: prevValue.toString()
  }) : void 0 !== newValue ? renderI18nText('collaboration.branching_chunk.property_change_added', {
    newValue: newValue.toString()
  }) : null;
}
function e1(e) {
  let {
    prevValue,
    newValue
  } = e;
  if ([prevValue, newValue].some(Array.isArray)) {
    let {
      removed,
      added
    } = function (e, t) {
      let i = [];
      let n = t ? [...t] : [];
      e && e.forEach(e => {
        let t = n.findIndex(t => eK()(e, t));
        t > -1 ? n.splice(t, 1) : i.push(e);
      });
      return {
        removed: i,
        added: n
      };
    }(prevValue, newValue);
    return jsxs('div', {
      children: [removed.length ? jsxs('div', {
        children: [renderI18nText('collaboration.branching_chunk.property_change_node_removed_items'), jsx('div', {
          className: e$,
          children: jsx(eQ, {
            value: removed
          })
        })]
      }) : null, added.length ? jsxs('div', {
        children: [renderI18nText('collaboration.branching_chunk.property_change_node_added_items'), jsx('div', {
          className: e$,
          children: jsx(eQ, {
            value: added
          })
        })]
      }) : null]
    });
  }
  return [prevValue, newValue].some(e => e && typeof e == 'object') ? jsx(eJ, {
    prevValue,
    newValue
  }) : jsx(e0, {
    prevValue,
    newValue
  });
}
function e2(e) {
  let {
    fieldName,
    prevValue,
    newValue
  } = e;
  return jsxs('div', {
    className: 'chunk_property_changes--property--WdCvZ',
    children: [jsx('div', {
      className: 'chunk_property_changes--propertyTitle--ntp3n',
      children: capitalize(camelToSnakeWithLeading(fieldName).split('_').join(' '))
    }), jsx('div', {
      children: jsx(e1, {
        prevValue,
        newValue
      })
    })]
  });
}
function e5(e) {
  let {
    basis,
    changes
  } = e;
  if (changes.phase === 'REMOVED') return renderI18nText('collaboration.branching_chunk.property_change_node_removed');
  let r = Object.keys(changes).filter(e => !eZ.has(e));
  return jsx(Fragment, {
    children: r.map(e => jsx(e2, {
      fieldName: e,
      prevValue: basis[e],
      newValue: changes[e]
    }, e))
  });
}
function e4(e) {
  let t = e.basis;
  t.phase === 'REMOVED' && (t = e.changes);
  return jsx(UB, {
    node: t,
    className: 'chunk_property_changes--nodeIcon--FOfdw'
  });
}
function e3(e) {
  let {
    basis,
    changes
  } = e;
  return jsxs('div', {
    className: 'chunk_property_changes--node--lx12y',
    children: [jsxs('div', {
      className: 'chunk_property_changes--nodeTitle--r0xjW',
      children: [jsx(e4, {
        basis,
        changes
      }), basis && basis.name ? basis.name : changes && changes.name ? changes.name : 'Unnamed node']
    }), jsx('div', {
      className: 'chunk_property_changes--nodeContents--YUPSE',
      children: jsx(e5, {
        changes,
        basis
      })
    })]
  });
}
function e6(e) {
  let {
    basis,
    changes
  } = e;
  let a = useMemo(() => {
    let e = {};
    (basis || []).forEach(t => {
      t.guid && (e[sessionLocalIDToString(t.guid)] = t);
    });
    return e;
  }, [basis]);
  return changes && basis ? jsx(_$$P, {
    className: 'chunk_property_changes--scrollContainer--1xvIv',
    children: jsxs('div', {
      className: 'chunk_property_changes--chunkPropertyChanges---T6-3 text--fontPos11--2LvXf text--_fontBase--QdLsd',
      children: [jsx('div', {
        className: 'chunk_property_changes--mainTitle--W8ykx',
        children: renderI18nText('collaboration.branching_chunk.property_change_non-previewable')
      }), jsx('div', {
        children: changes.map(e => jsx(e3, {
          changes: e,
          basis: a[sessionLocalIDToString(e.guid)]
        }, sessionLocalIDToString(e.guid)))
      })]
    })
  }) : null;
}
class e7 extends Component {
  constructor(e) {
    super(e);
    this.state = {
      hasError: !1
    };
  }
  static getDerivedStateFromError() {
    return {
      hasError: !0
    };
  }
  componentDidCatch() {}
  render() {
    return this.state.hasError ? renderI18nText('collaboration.branching_chunk.error') : jsx(e6, {
      changes: this.props.changes,
      basis: this.props.basis
    });
  }
}
let tl = renderI18nText('collaboration.branching_chunk.tile_preview_node_fallback');
let td = renderI18nText('collaboration.branching_chunk.tile_empty_page_fallback');
let tc = memo(e => {
  let {
    displayNode,
    parentNode,
    image,
    onClick,
    phase,
    isImageLoading,
    backgroundColorStyle
  } = e;
  let c = displayNode.name ? _$$w2(displayNode.name) : void 0;
  let u = displayNode.styleType;
  let p = u === 'TEXT';
  let h = getVisibleTheme() === 'dark';
  let g = useRef(null);
  let f = useRef(null);
  let [_, A] = useState(null);
  let [y, b] = useState(null);
  let v = e => {
    if (!e || !g.current || !f.current) {
      return {
        prefix: ''
      };
    }
    let t = g.current;
    let i = f.current;
    let n = document.createElement('div');
    if (n.style.cssText = 'display: inline; white-space: nowrap;', t.appendChild(n), n.innerText = e, n.getBoundingClientRect().width <= 176) {
      t.removeChild(n);
      return {
        prefix: e
      };
    }
    let r = '\u2026';
    n.getBoundingClientRect().width <= 376 && (r = '');
    let a = '';
    let s = '';
    let o = 0;
    let l = e.length - 1;
    let d = l;
    for (; d > 0;) {
      let t = e.slice(0, d);
      n.innerText = t;
      let {
        width
      } = n.getBoundingClientRect();
      if (width >= 161 && width <= 176) {
        a = t;
        break;
      }
      width < 161 ? o = d : width > 176 && (l = d);
      d = Math.floor((l + o) / 2);
      a = t;
    }
    t.removeChild(n);
    i.appendChild(n);
    let c = !0;
    o = d;
    l = e.length - 1;
    let u = o;
    for (; u < l;) {
      let t = `${r} ${e.slice(u)}`;
      n.innerText = t;
      let {
        width
      } = n.getBoundingClientRect();
      if (c && width < 200 || width >= 185 && width <= 200) {
        s = t;
        break;
      }
      width < 185 ? l = u : width > 200 && (o = u);
      u = Math.floor((l + o) / 2);
      c = !1;
      s = t;
    }
    i.removeChild(n);
    return {
      prefix: a,
      suffix: s
    };
  };
  useEffect(() => {
    let {
      prefix,
      suffix
    } = v(c);
    A(prefix);
    suffix ? b(suffix) : b(null);
  }, [c]);
  let I = ev()({
    'chunk_tile--container--mpddX chunk_tile--_containerBorder--kUoXs': !0,
    'chunk_tile--clickable---Aa4s': void 0 !== onClick,
    'chunk_tile--disappear--kR8Vi': !_
  });
  let x = ev()({
    'chunk_tile--imageBox--D9uhw': !0,
    [eN]: p || u === 'FILL'
  });
  let S = ev()({
    'chunk_tile--image--cMcns': !0,
    [eP]: p && h
  });
  let w = {
    textAlign: 'left'
  };
  return jsx(Fragment, {
    children: jsxs(ButtonPrimitive, {
      className: I,
      onClick,
      children: [jsxs('div', {
        className: x,
        style: backgroundColorStyle,
        children: [isImageLoading ? jsx(Qp, {
          className: 'chunk_tile--loading--1mH3A',
          animationType: JR.LIGHT_SHIMMER
        }) : image ? jsx('img', {
          srcSet: `${image} 2x`,
          className: S,
          draggable: !1,
          alt: ''
        }) : (() => {
          let {
            displayNode
          } = e;
          if (u === 'GRID') {
            let e = s$(displayNode);
            return jsx(SvgComponent, {
              svg: e,
              className: 'chunk_tile--gridIcon--BISRZ',
              autosize: !0,
              width: '40px'
            });
          }
          return displayNode.type === 'CANVAS' ? jsx('div', {
            className: ek,
            children: td
          }) : jsx('div', {
            className: ek,
            children: tl
          });
        })(), phase !== LibraryUpdateStatus.UNMODIFIED && !isImageLoading && jsx(eH, {
          phase,
          className: 'chunk_tile--phase--TMVK0'
        })]
      }), jsxs('div', {
        className: 'chunk_tile--detailBox--svIR3',
        children: [jsxs('div', {
          className: eT,
          children: [jsx(UB, {
            className: 'chunk_tile--nodeIcon--fvcpD object_row--layerIcon--dTOdu',
            node: displayNode,
            parentNode
          }), jsx('div', {
            className: eR,
            ref: g,
            style: w,
            dir: 'auto',
            children: _
          })]
        }), jsx('div', {
          className: y && y.length > 0 ? eT : '',
          children: jsx('div', {
            className: eR,
            ref: f,
            style: w,
            dir: 'auto',
            children: y && y.length > 0 && y
          })
        }), (!!e.affectedCount || !!e.variantCount) && jsxs('div', {
          className: `${ek} chunk_tile--bottom---H91S`,
          children: [!!e.variantCount && jsx(Fragment, {
            children: e.phase === LibraryUpdateStatus.UPDATED || e.phase === LibraryUpdateStatus.UPDATED_LIBRARY ? renderI18nText('collaboration.branching_chunk.tile_variants_changed', {
              variantCount: e.variantCount
            }) : renderI18nText('collaboration.branching_chunk.tile_variants', {
              variantCount: e.variantCount
            })
          }), !!e.affectedCount && !!e.variantCount && renderI18nText('collaboration.branching_chunk.tile_variants_and_affected_items_separator'), !!e.affectedCount && renderI18nText('collaboration.branching_chunk.tile_affected_items', {
            affectedCount: e.affectedCount
          })]
        })]
      })]
    })
  });
});
let tm = 'chunk_row--container---E60d chunk_tile--_containerBorder--kUoXs';
function th({
  children: e,
  onClick: t
}) {
  return t ? jsx(ButtonPrimitive, {
    onClick: t,
    className: ev()(tm, 'chunk_row--containerClickable--jquBH chunk_tile--clickable---Aa4s', cssBuilderInstance.wFull.$),
    children: e
  }) : jsx('div', {
    className: ev()(tm, cssBuilderInstance.wFull.$),
    children: e
  });
}
function tg({
  assetName: e,
  icon: t
}) {
  return jsxs('div', {
    className: 'chunk_row--assetLabel--SMLMR',
    children: [t && jsx('div', {
      className: 'chunk_row--assetLabelIcon--dc4qL',
      children: t
    }), jsx('span', {
      children: e
    })]
  });
}
function t_({
  assetName: e,
  phase: t,
  onClick: i
}) {
  return jsx(th, {
    onClick: i,
    children: jsxs('div', {
      className: 'variable_set_chunk_row--rowChildren--j9WwF',
      children: [jsxs('div', {
        className: 'variable_set_chunk_row--rowLeftChildren--wqINC',
        children: [jsx(tg, {
          assetName: e,
          icon: jsx(SvgComponent, {
            svg: _$$A5
          })
        }), jsx(eH, {
          className: 'variable_set_chunk_row--phase--RNlqr',
          phase: t
        })]
      }), jsx('div', {
        className: 'variable_set_chunk_row--rowRightChildren--lmXMC',
        children: i ? jsx(In, {
          icon: 'chevron-right-32'
        }) : jsx('div', {
          className: cssBuilderInstance.h32.$
        })
      })]
    })
  });
}
let tA = 'chunk_section--systemImprovement--aPJZS';
let ty = 'chunk_section--questionMark--uQ9fS';
let tv = e => e.displayNode.styleType !== 'GRID';
function tI(e) {
  let {
    group,
    pageIdToInfo,
    onChunkClick,
    images
  } = e;
  let o = group.mainChunk;
  let l = Xp(o, pageIdToInfo);
  let d = sessionLocalIDToString(o.displayNode.guid);
  let c = useMemo(() => onChunkClick ? () => onChunkClick(group) : void 0, [onChunkClick, group]);
  let u = useMemo(() => o.phase !== LibraryUpdateStatus.UNMODIFIED || MY(o) ? o.phase : LibraryUpdateStatus.UPDATED, [o]);
  let p = group.type === 'state-group' ? group.variantChunks.filter(e => e.mainChunk.phase !== LibraryUpdateStatus.UNMODIFIED).length : 0;
  let h = 'affectedChunks' in group ? group.affectedChunks.length : 0;
  let g = useMemo(() => C_(o), [o]);
  return jsx(tc, {
    affectedCount: h,
    backgroundColorStyle: l,
    displayNode: o.displayNode,
    image: tv(o) ? images[d] : null,
    isImageLoading: !(d in images),
    onClick: c,
    parentNode: g,
    phase: u,
    variantCount: p
  }, d);
}
var tE = (e => (e[e.GRID = 0] = 'GRID', e[e.LIST = 1] = 'LIST', e))(tE || {});
let tx = memo(e => {
  let {
    displayGroups,
    onChangeVisibleGroups,
    onChunkClick,
    pageIdToInfo,
    displayType = 0
  } = e;
  let [l, d] = useState(Math.min(displayGroups.length, 120));
  let c = l < displayGroups.length;
  let u = useRef(!1);
  e.initiallyCollapsed && !u.current && e.onAllChunksRendered && (e.onAllChunksRendered(), u.current = !0);
  let m = e.displayGroups.map(e => sessionLocalIDToString(e.mainChunk.displayNode.guid)).join(',');
  let h = !!e.onChangeVisibleGroups;
  let g = useRef(new WeakMap());
  let f = useRef(new Set());
  let _ = useRef(window.IntersectionObserver ? new IntersectionObserver(t => {
    if (h) {
      let i = !1;
      for (let e of t) {
        let t = g.current.get(e.target);
        if (t) {
          for (let n of t) {
            if (e.isIntersecting && !f.current.has(n)) {
              let e = f.current.size;
              f.current.add(n).size > e && (i = !0);
            } else {
              f.current.$$delete(n) && (i = !0);
            }
          }
        }
      }
      i && e.onChangeVisibleGroups && e.onChangeVisibleGroups(Array.from(f.current));
    }
  }) : null);
  let A = useRef(window.IntersectionObserver ? FS('chunk_section--stickyHeader--joj5o') : null);
  useEffect(() => {
    if (h && !_.current) {
      for (let e of displayGroups || []) f.current.add(e);
      onChangeVisibleGroups && onChangeVisibleGroups(Array.from(f.current));
    }
  }, [_, h, onChangeVisibleGroups, displayGroups]);
  useEffect(() => {
    let {
      current
    } = A;
    let {
      current: _current
    } = _;
    return () => {
      _current && _current.disconnect();
      current && current.disconnect();
    };
  }, [_, A]);
  let y = !0 === getFeatureFlags().branching_system_updates_copy;
  let b = jsx('div', {
    className: tA,
    children: renderI18nText('collaboration.branching_chunk.non_visible_updates_description')
  });
  let v = jsxs('div', {
    className: tA,
    children: [renderI18nText('collaboration.branching_chunk.section_file_optimization'), jsx(SvgComponent, {
      'svg': _$$A6,
      'className': ty,
      'data-tooltip-type': KindEnum.TEXT,
      'data-tooltip': getI18nString('collaboration.branching_chunk.section_file_optimization_tooltip'),
      'autosize': !0,
      'width': '11px'
    })]
  });
  return jsx('div', {
    className: 'chunk_section--container--fZyzH',
    children: jsxs(_$$bL, {
      defaultOpen: !0,
      children: [jsx('div', {
        className: 'chunk_section--headerRow--7eHQl',
        ref: e => {
          e && A.current && A.current.observe(e);
        },
        children: jsx(_$$Y, {
          size: 'lg',
          children: jsx(JU, {
            size: 'lg',
            children: e.header
          })
        })
      }), jsxs(UC, {
        children: [(e.systemImprovements || []).includes('file_improvement') && (y ? b : v), (e.systemImprovements || []).includes('interrupted_merge_recovery') && jsxs('div', {
          className: tA,
          children: [renderI18nText('collaboration.branching_chunk.section_system_improvement'), jsx(SvgComponent, {
            'svg': _$$A6,
            'className': ty,
            'data-tooltip-type': KindEnum.TEXT,
            'data-tooltip': getI18nString('collaboration.branching_chunk.section_system_improvement_tooltip'),
            'autosize': !0,
            'width': '11px'
          })]
        }), e.displayGroups.length > 0 && jsx(_$$o, {
          chunkSize: 5,
          className: displayType === 1 ? 'chunk_section--chunkList--SBKZz' : 'chunk_section--tilesGrid--K5qck',
          listKey: m,
          onAllChunksRendered: e.initiallyCollapsed ? void 0 : e.onAllChunksRendered,
          children: e.displayGroups.slice(0, l).map(t => {
            let i = t.mainChunk;
            let r = sessionLocalIDToString(i.displayNode.guid);
            return jsx('div', {
              ref: e => {
                e && _.current && h && (_.current.observe(e), g.current.set(e, [t]));
              },
              children: displayType === 0 ? jsx(tI, {
                group: t,
                pageIdToInfo,
                onChunkClick,
                images: e.images
              }) : jsx(t_, {
                assetName: t.mainChunk.displayNode.name ?? getI18nString('variables.variable_collection'),
                phase: t.mainChunk.phase,
                onClick: onChunkClick ? () => onChunkClick(t) : void 0
              })
            }, r);
          })
        }), c && jsx('div', {
          className: 'chunk_section--nextPageButtonContainer--qjP0o',
          children: jsx(ButtonWide, {
            variant: 'secondary',
            onClick: () => {
              d(Math.min(l + 120, displayGroups.length));
            },
            children: (() => {
              let e = Math.min(120, displayGroups.length - l);
              return renderI18nText('collaboration.branching_chunk.section_see_more', {
                remainingChanges: e
              });
            })()
          })
        })]
      })]
    })
  });
});
let tw = memo(e => {
  let {
    displayGroupsByPage,
    pageIdToInfo,
    displayGroupsByStyle,
    displayGroupsByVariableSet,
    displayGroupsByLibrary,
    images,
    systemImprovements
  } = e;
  let u = useMemo(() => Object.keys(displayGroupsByLibrary).map(_$$l2), [displayGroupsByLibrary]);
  let p = getLibraryNames(u);
  let m = e => getI18nString('collaboration.branching_chunk.local_style_type', {
    styleType: getStyleTypeLabel(e)
  });
  let h = e => p.data?.[e] || getI18nString('collaboration.branching_chunk.fallback_missing_library_name');
  let [g, f] = useState(1);
  let _ = useRef(g);
  let A = useRef(null);
  let y = useCallback(() => {
    A.current = null;
    f(_.current);
  }, [_]);
  let b = useCallback(() => {
    _.current += 1;
    A.current || (A.current = requestAnimationFrame(y));
  }, [y]);
  let v = 0;
  let I = (e.sortedPageIds ? e.sortedPageIds : Object.keys(displayGroupsByPage)).map(r => {
    let a = displayGroupsByPage[r];
    v += a.length;
    return {
      key: r,
      displayGroups: displayGroupsByPage[r],
      node: jsx(tx, {
        onChangeVisibleGroups: e.onChangeVisibleGroups,
        displayGroups: a,
        header: pageIdToInfo[r]?.name,
        images,
        pageIdToInfo,
        onChunkClick: e.onChunkClick,
        onAllChunksRendered: b,
        initiallyCollapsed: !1
      }, r)
    };
  });
  let x = Object.keys(displayGroupsByStyle).map(t => {
    let r = displayGroupsByStyle[t];
    v += r.length;
    return {
      key: t,
      displayGroups: displayGroupsByStyle[t],
      node: jsx(tx, {
        onChangeVisibleGroups: e.onChangeVisibleGroups,
        displayGroups: r,
        onChunkClick: e.onChunkClick,
        header: m(t),
        images,
        pageIdToInfo,
        onAllChunksRendered: b,
        initiallyCollapsed: !1
      }, t)
    };
  });
  let S = useMemo(() => flatten(Object.values(displayGroupsByVariableSet)), [displayGroupsByVariableSet]);
  let w = S.length ? [{
    key: 'variableSets',
    displayGroups: S,
    node: jsx(tx, {
      displayGroups: S,
      displayType: tE.LIST,
      header: getI18nString('variables.variable_collections'),
      images,
      initiallyCollapsed: !1,
      onAllChunksRendered: b,
      onChangeVisibleGroups: e.onChangeVisibleGroups,
      onChunkClick: e.onChunkClick,
      pageIdToInfo
    }, 'variableSets')
  }] : [];
  v += w.length;
  let C = Object.keys(displayGroupsByLibrary).map(t => {
    let r = displayGroupsByLibrary[t];
    v += r.length;
    return {
      key: t,
      displayGroups: displayGroupsByLibrary[t],
      node: jsx(tx, {
        displayGroups: r,
        header: h(_$$l2(t)),
        icon: _$$A7,
        images,
        initiallyCollapsed: !1,
        onAllChunksRendered: b,
        onChangeVisibleGroups: e.onChangeVisibleGroups,
        onChunkClick: e.onChunkClick,
        pageIdToInfo
      }, t)
    };
  });
  let T = e.otherChanges && e.otherChanges.length > 0 ? [{
    key: 'other',
    displayGroups: e.otherChanges,
    node: jsx(tx, {
      onChangeVisibleGroups: e.onChangeVisibleGroups,
      displayGroups: e.otherChanges,
      header: getI18nString('collaboration.branching_chunk.header_other_changes'),
      images,
      pageIdToInfo,
      onChunkClick: e.onChunkClick,
      onAllChunksRendered: b,
      initiallyCollapsed: !1
    }, 'other')
  }] : [];
  e.otherChanges && (v += e.otherChanges.length);
  let k = (systemImprovements && systemImprovements.length > 0 ? [{
    key: 'system',
    displayGroups: [],
    node: jsx(tx, {
      displayGroups: [],
      header: getFeatureFlags().branching_system_updates_copy ? getI18nString('collaboration.branching_chunk.non_visible_updates') : 'System improvements',
      images: {},
      initiallyCollapsed: !1,
      onAllChunksRendered: lQ,
      onChangeVisibleGroups: lQ,
      onChunkClick: lQ,
      pageIdToInfo: {},
      systemImprovements
    }, 'system')
  }] : [...w, ...I, ...x, ...C, ...T]).slice(0, g);
  return jsx('div', {
    className: 'diff_summary--container--Z4AUc',
    children: k.length > 0 ? k.map((e, t) => v > 120 && t !== 0 ? cloneElement(e.node, {
      initiallyCollapsed: !0
    }) : e.node) : 'No incoming changes to show.'
  });
});
let tk = memo(e => {
  let {
    displayGroup,
    onChunkClick,
    setVisibleGroups,
    pageIdToInfo,
    summaryImages
  } = e;
  if (!summaryImages) return null;
  let o = displayGroup.affectedChunks.map((e, t) => ({
    ...e,
    index: t
  }));
  return jsx('div', {
    className: _$$es,
    children: jsx(tx, {
      onChangeVisibleGroups: setVisibleGroups,
      pageIdToInfo,
      displayGroups: o,
      header: getI18nString('collaboration.branching_to_source.instances_affected', {
        chunkCount: displayGroup.affectedChunks.length
      }),
      images: summaryImages,
      icon: _$$A,
      onChunkClick,
      initiallyCollapsed: !1
    }, sessionLocalIDToString(displayGroup.mainChunk.displayNode.guid) ?? '')
  });
});
var tN = (e => (e.SUMMARY = 'summary', e.DETAIL = 'detail', e.AFFECTED_SUMMARY = 'affected_summary', e.AFFECTED_DETAIL = 'affected_detail', e.VARIANT_SUMMARY = 'variant_summary', e.VARIANT_DETAIL = 'variant_detail', e.VARIABLE_SET_DETAIL = 'variable_set_detail', e))(tN || {});
function tP(e) {
  return e.view === 'detail' || e.view === 'variable_set_detail' || e.view === 'variant_summary';
}
function tO(e) {
  let {
    selected,
    onClick,
    header,
    count
  } = e;
  return jsx(Fragment, {
    children: jsx('div', {
      className: selected ? Wr : LX,
      onClick,
      children: jsxs('div', {
        className: Wd,
        children: [header.length > 80 ? jsx(_$$R, {
          text: header,
          maxWidth: 400
        }) : jsx('span', {
          dir: 'auto',
          children: header
        }), count && jsx('div', {
          className: selected ? sB : OF,
          children: ` ${count} `
        })]
      })
    })
  });
}
function tD(e) {
  return _$$w2(e.mainChunk.displayNode.name || '');
}
function tL({
  currentView: e
}) {
  let t = tD(e.displayGroup);
  let i = e.displayGroup.variableChunks.filter(e => e.phase !== LibraryUpdateStatus.UNMODIFIED).length;
  return jsxs('div', {
    className: k2,
    children: [jsx('span', {
      dir: 'auto',
      children: t
    }), jsx('span', {
      className: w5,
      children: getI18nString('variables.diff.details_title_changed_variables', {
        numChangedVariables: i
      })
    })]
  });
}
function tF({
  currentView: e,
  setCurrentViewAndTrack: t
}) {
  let {
    displayGroup
  } = e;
  let r = tD(displayGroup);
  let a = displayGroup.type === 'state-group' ? {
    view: tN.VARIANT_SUMMARY,
    displayGroup
  } : {
    view: tN.DETAIL,
    displayGroup
  };
  return jsxs(Fragment, {
    children: [jsx(tO, {
      selected: e.view === a.view,
      onClick: () => t(a),
      header: r
    }), displayGroup.affectedChunks.length > 0 && jsx(tO, {
      selected: e.view === tN.AFFECTED_SUMMARY,
      onClick: () => t({
        view: tN.AFFECTED_SUMMARY,
        displayGroup
      }),
      header: getI18nString('collaboration.branching_to_source.affected_items'),
      count: displayGroup.affectedChunks.length
    })]
  });
}
function tM({
  currentView: e
}) {
  let t = tD(e.detailDisplayGroup);
  return jsx(tO, {
    selected: !0,
    onClick: lQ,
    header: t
  });
}
function tj(e) {
  let {
    currentView,
    setCurrentViewAndTrack
  } = e;
  switch (currentView.view) {
    case tN.VARIABLE_SET_DETAIL:
      return jsx(tL, {
        currentView
      });
    case tN.DETAIL:
    case tN.AFFECTED_SUMMARY:
    case tN.VARIANT_SUMMARY:
      return jsx(tF, {
        currentView,
        setCurrentViewAndTrack
      });
    case tN.AFFECTED_DETAIL:
    case tN.VARIANT_DETAIL:
      return jsx(tM, {
        currentView
      });
    default:
      throwTypeError(currentView);
  }
}
let tU = memo(e => {
  let {
    displayGroup,
    onChunkClick,
    setVisibleGroups,
    pageIdToInfo,
    summaryImages
  } = e;
  let {
    modifiedVariants,
    unmodifiedVariants
  } = ju(displayGroup);
  return modifiedVariants.length + unmodifiedVariants.length === 0 ? jsx('div', {
    className: Dn,
    children: renderI18nText('collaboration.branching_to_source.all_variants_were_removed')
  }) : jsxs('div', {
    className: mK,
    children: [modifiedVariants.length > 0 && summaryImages && jsx(tx, {
      onChangeVisibleGroups: setVisibleGroups,
      pageIdToInfo,
      images: summaryImages,
      displayGroups: modifiedVariants,
      header: getI18nString('collaboration.branching_to_source.modified_variants', {
        variantCount: modifiedVariants.length
      }),
      onChunkClick,
      initiallyCollapsed: !1
    }), unmodifiedVariants.length > 0 && summaryImages && jsx(tx, {
      onChangeVisibleGroups: setVisibleGroups,
      pageIdToInfo,
      images: summaryImages,
      displayGroups: unmodifiedVariants,
      header: getI18nString('collaboration.branching_to_source.unmodified_variants', {
        variantCount: unmodifiedVariants.length
      }),
      initiallyCollapsed: !0
    })]
  });
});
let tV = 'update_banner--button--lYM67';
let tG = 'update_banner--icon--wIDnp';
var tH = (e => (e[e.NO_UPDATES = 0] = 'NO_UPDATES', e[e.CONFLICTING_UPDATES = 1] = 'CONFLICTING_UPDATES', e[e.NON_CONFLICTING_UPDATES = 2] = 'NON_CONFLICTING_UPDATES', e[e.CONFLICT_MERGE_BLOCKED = 3] = 'CONFLICT_MERGE_BLOCKED', e[e.UNREAD_COMMENTS = 4] = 'UNREAD_COMMENTS', e[e.DUPLICATED_GUIDS = 5] = 'DUPLICATED_GUIDS', e))(tH || {});
function tW(e, t, i, n, r) {
  return r ? 5 : i ? 1 : t ? 3 : e ? 2 : n ? 4 : 0;
}
function tK(e) {
  return jsx('div', {
    className: 'update_banner--container--vGcC6',
    children: e.isLoading ? jsxs(Fragment, {
      children: [jsx('span', {
        className: tG,
        children: jsx(_$$k2, {})
      }), jsx('div', {
        children: renderI18nText('collaboration.branching_merge_modal.calculating_conflicts')
      })]
    }) : jsxs(Fragment, {
      children: [jsx(SvgComponent, {
        svg: _$$A8,
        className: tG
      }), jsx('div', {
        children: e.text
      }), e.button]
    })
  });
}
function tY(e) {
  let {
    isLoading,
    isBlockingUpdate,
    isEditorOnRepo,
    numConflicts,
    canUpdate,
    unreadCommentCount
  } = e;
  let l = t => jsx('div', {
    className: tV,
    children: jsx(Button, {
      onClick: e.switchToUpdateFromMain,
      children: t
    })
  });
  switch (tW(canUpdate, isBlockingUpdate, numConflicts !== 0, !!unreadCommentCount && unreadCommentCount !== 0, e.hasDuplicateConflictingGuids)) {
    case 5:
      return jsx(Fragment, {});
    case 1:
      return jsx(tK, {
        isLoading,
        text: getI18nString('collaboration.branching_merge_modal.this_branch_has_conflicts_with_the_main_file', {
          numConflicts
        }),
        button: l(getI18nString('collaboration.branching_merge_modal.resolve_conflicts'))
      });
    case 3:
      if (isEditorOnRepo) {
        let e = getI18nString('collaboration.branching_merge_modal.updates_from_main_file_must_be_applied_before_merging');
        return jsx(tK, {
          isLoading,
          text: e,
          button: l(getI18nString('collaboration.branching_merge_modal.update_from_main_file'))
        });
      }
      let d = getI18nString('collaboration.branching_merge_modal.updates_from_main_file_must_be_applied_before_submitting_a_merge_request');
      return jsx(tK, {
        isLoading,
        text: d,
        button: l(getI18nString('collaboration.branching_merge_modal.update_from_main_file'))
      });
    case 0:
      let c = getI18nString('collaboration.branching_merge_modal.no_update_and_no_conflicts_from_main');
      return jsx(tK, {
        isLoading,
        text: c,
        button: jsx(Fragment, {})
      });
    case 2:
      let u;
      let m = getI18nString('collaboration.branching_merge_modal.updates_are_available_for_this_branch_but_you_can_merge_without_updating');
      return jsx(tK, {
        isLoading,
        text: m,
        button: (u = getI18nString('collaboration.branching_merge_modal.update_from_main_file'), jsx('div', {
          className: tV,
          children: jsx(Button, {
            variant: 'secondary',
            onClick: e.switchToUpdateFromMain,
            children: u
          })
        }))
      });
    case 4:
      return jsx(tK, {
        isLoading,
        text: getI18nString('collaboration.branching_merge_modal.you_have_unread_comments_on_this_branch', {
          unreadCommentCount: unreadCommentCount || 0
        }),
        button: jsx(Fragment, {})
      });
  }
}
let tZ = createContext(void 0);
function tX(e) {
  let t = {};
  tJ(e, (e, i) => {
    let n = function (e) {
      let t = VariablesBindings.getLocalVariableInfo(e);
      if (t) {
        return {
          type: 'local',
          value: t
        };
      }
      let i = VariablesBindings.getSubscribedVariableInfo(e);
      return i ? {
        type: 'subscribed',
        value: i
      } : null;
    }(e);
    let r = new Map();
    if (n) {
      let e = n.type === 'local' ? n.value.keyForPublish : n.value.key;
      e && i && r.set(yG(e), i);
    }
    let a = n?.value.name ?? getI18nString('variables.missing_name');
    let s = VariablesBindings.getVariableResolvedValue(e, r);
    t0(t, e, i, {
      name: a,
      value: s
    });
  });
  return t;
}
function tQ({
  children: e,
  variableDiffMap: t
}) {
  let i = useMemo(() => {
    let e = Object.values(t);
    let i = e.map(e => e.prev);
    let n = e.map(e => e.next);
    let r = {};
    tJ(n, (e, t) => {
      let i = VariablesBindings.getLocalVariableInfo(e) ?? VariablesBindings.getSubscribedVariableInfo(e);
      let n = i?.name ?? getI18nString('variables.missing_name');
      let a = i && 'keyForPublish' in i;
      let s = i && 'key' in i;
      let o = a ? i.keyForPublish : s ? i.key : null;
      let l = o && t ? new Map([[yG(o), t]]) : new Map();
      let d = VariablesBindings.getVariableResolvedValue(e, l);
      t0(r, e, t, {
        name: n,
        value: d
      });
    });
    let a = atom(() => r);
    return {
      prev: atom(() => {
        b_();
        let e = {};
        tJ(i, (t, i) => {
          let n = VariablesBindings.getLocalVariableInfo(t) ?? VariablesBindings.getSubscribedVariableInfo(t);
          let r = n?.name ?? getI18nString('variables.missing_name');
          let a = n && 'keyForPublish' in n;
          let s = n && 'key' in n;
          let o = a ? n.keyForPublish : s ? n.key : null;
          let l = o && i ? new Map([[yG(o), i]]) : new Map();
          let d = VariablesBindings.getVariableResolvedValue(t, l);
          t0(e, t, i, {
            name: r,
            value: d
          });
        });
        gf(GitReferenceType.BRANCH);
        return e;
      }),
      next: a
    };
  }, [t]);
  return jsx(tZ.Provider, {
    value: i,
    children: e
  });
}
function tJ(e, t) {
  for (let i of e) {
    for (let e of i.variableDataValues?.entries ?? []) {
      if (e.variableData?.dataType === 'ALIAS') {
        let i = e.variableData.value?.alias;
        i && e.modeID && t(convertKiwiToVariableIdString(i), sessionLocalIDToString(e.modeID));
      }
    }
  }
}
function t0(e, t, i, n) {
  e.hasOwnProperty(t) || (e[t] = {});
  e[t][i] = n;
}
let io = 'variables_diff--diffNameIcon--jyVa-';
let il = 'variables_diff--divider--9ofbu';
let id = 'variables_diff--dropdownRow--E6md-';
let ic = 'variables_diff--diffContainer--UeSzZ';
let iu = 'variables_diff--diffValue--CcMXG';
let ip = 'variables_diff--unchanged--PNiD3';
let im = 'variables_diff--diffArrow--vL2T-';
function ig({
  name: e,
  resolvedType: t,
  phase: i
}) {
  return jsx('div', {
    className: 'variables_diff--variableDiffNameContainer--MOtjY',
    children: jsxs('div', {
      className: 'variables_diff--variableDiffName--7JTpE',
      children: [jsx(_$$m, {
        name: e,
        resolvedType: t
      }), jsx('div', {
        className: io,
        children: jsx(eH, {
          phase: i,
          hideLabel: !0
        })
      })]
    })
  });
}
function i_({
  restrictWidth: e,
  children: t
}) {
  return jsx('div', {
    className: e ? 'variables_diff--dropdownRowNameRestrictedWidth--yz2FQ' : void 0,
    children: t
  });
}
function iA({
  scopes: e
}) {
  return jsxs('div', {
    className: id,
    children: [jsx(i_, {
      restrictWidth: !0,
      children: renderI18nText('variables.modes.option.scope')
    }), jsx(iR, {
      scopes: e
    })]
  });
}
function iy({
  codeSyntaxMapEntries: e
}) {
  return jsxs('div', {
    className: 'variables_diff--codeSyntaxRow--474J8 variables_diff--dropdownRow--E6md-',
    children: [jsx(i_, {
      children: renderI18nText('variables.branching.code_syntax')
    }), jsx(ib, {
      codeSyntaxMapEntries: e
    })]
  });
}
function ib({
  codeSyntaxMapEntries: e
}) {
  let t = [];
  for (let i of _$$tq) {
    let r = e?.find(e => SR(e.platform) === i);
    if (r) {
      let e = lo(i);
      t.push(jsx(iN, {
        platform: e,
        value: r.value
      }, t.length));
      continue;
    }
    t.push(jsx(iN, {
      platform: lo(i),
      value: void 0
    }, t.length));
  }
  return jsx(Fragment, {
    children: t
  });
}
function iv({
  isPublishable: e
}) {
  return jsx('div', {
    className: id,
    children: jsx(i_, {
      children: e ? renderI18nText('variables.branching.show_when_publishing') : renderI18nText('variables.branching.hide_from_publishing')
    })
  });
}
function iI({
  name: e,
  resolvedType: t,
  numHiddenChanges: i
}) {
  return jsxs(Fragment, {
    children: [jsx('div', {
      className: 'variables_diff--nameWithChanges--eD1qR',
      children: jsx(_$$m, {
        name: e,
        resolvedType: t
      })
    }), i && jsx('div', {
      className: 'variables_diff--numHiddenChanges--TwPsQ',
      children: getI18nString('variables.diff.number_of_hidden_changes', {
        numHiddenChanges: i
      })
    })]
  });
}
function iE({
  name: e,
  diff: t,
  resolvedType: i,
  numHiddenChanges: a
}) {
  let {
    next,
    phase
  } = t;
  let [l, d] = useState(!1);
  return jsxs('div', {
    className: 'variables_diff--diffDropdownContainer--wHJA4',
    children: [jsxs('div', {
      className: 'variables_diff--diffDropdownNameContainer--uMkHy',
      children: [jsx('div', {
        className: io,
        children: jsx(setupToggleButton, {
          'checked': l,
          'aria-label': getI18nString('variables.diff.toggle_variable_details'),
          'onIcon': jsx(_$$r, {}),
          'offIcon': jsx(_$$R2, {}),
          'onChange': e => d(e)
        })
      }), jsx(iI, {
        name: e,
        resolvedType: i,
        numHiddenChanges: a
      }), jsx('div', {
        className: io,
        children: jsx(eH, {
          phase,
          hideLabel: !0
        })
      })]
    }), jsx('div', {
      children: l && jsxs('div', {
        className: 'variables_diff--dropdownContent--1LjZZ',
        children: [jsx(iA, {
          scopes: next.variableScopes ? getPropertyScopes(next.variableScopes) : [PropertyScope.ALL_SCOPES]
        }), jsx('div', {
          className: il
        }), jsx(iy, {
          codeSyntaxMapEntries: next.codeSyntax?.entries ?? []
        }), jsx('div', {
          className: il
        }), jsx(iv, {
          isPublishable: !!next.isPublishable
        })]
      })
    })]
  });
}
function ix({
  prev: e,
  next: t,
  phase: i
}) {
  return jsxs('div', {
    className: ic,
    children: [e && jsx('div', {
      className: ev()({
        [iu]: !0,
        [ip]: !(t || i === LibraryUpdateStatus.REMOVED)
      }),
      children: e
    }), e && t && jsx('div', {
      'className': im,
      'data-testid': 'diff-arrow',
      'children': jsx(SvgComponent, {
        svg: _$$A9
      })
    }), t && jsx('div', {
      className: ev()({
        [iu]: !0,
        [ip]: !(e || i === LibraryUpdateStatus.CREATED)
      }),
      children: t
    })]
  });
}
function iS({
  prev: e,
  next: t,
  phase: i
}) {
  let r = e === t ? void 0 : e;
  return jsxs('div', {
    className: 'variables_diff--modeDiffName--qbO0V',
    children: [jsxs('div', {
      className: ev()(ic, 'variables_diff--diffNameText--tD4YA'),
      children: [r && jsx('div', {
        className: iu,
        children: r
      }), r && t && jsx('div', {
        className: im,
        children: jsx(SvgComponent, {
          svg: _$$A9
        })
      }), t && jsx('div', {
        className: iu,
        children: t
      })]
    }), jsx('div', {
      className: io,
      children: jsx(eH, {
        phase: i,
        hideLabel: !0
      })
    })]
  });
}
function iw({
  value: e
}) {
  return jsxs('div', {
    className: 'variables_diff--colorValue--qYN3p',
    children: [jsx(_$$J2, {
      color: e
    }), jsx('span', {
      children: TI.format(e)
    })]
  });
}
function iC({
  value: e
}) {
  return jsx('span', {
    'data-tooltip-type': KindEnum.TEXT,
    'data-tooltip': e,
    'children': e
  });
}
function iT({
  value: e
}) {
  return jsx(iC, {
    value: String(e)
  });
}
function ik({
  value: e
}) {
  return jsxs('div', {
    className: 'variables_diff--booleanValue--TPFPs',
    children: [jsx(_$$d, {
      checked: e,
      onChange: lQ,
      label: jsx(HiddenLabel, {
        children: e ? getI18nString('variables.values.boolean.true') : getI18nString('variables.values.boolean.false')
      })
    }), jsx('span', {
      children: e ? getI18nString('variables.values.boolean.true') : getI18nString('variables.values.boolean.false')
    })]
  });
}
function iR({
  scopes: e
}) {
  return B3(e);
}
function iN({
  key: e,
  platform: t,
  value: i
}) {
  return jsxs('div', {
    className: 'variables_diff--codeSyntaxValueRow--Zszhz',
    children: [jsx('span', {
      className: 'variables_diff--codeSyntaxPlatform--Wkq5k',
      children: t
    }), i ? jsx(_$$G2, {
      text: i
    }) : jsx('div', {
      className: 'variables_diff--emptyCodeSyntax--MrA7Y'
    })]
  }, e);
}
function iO({
  variableData: e,
  modeID: t,
  aliasCache: i
}) {
  switch (assertNotNullish(e.dataType), e.dataType) {
    case 'BOOLEAN':
      assertNotNullish(e.value?.boolValue);
      return jsx(ik, {
        value: e.value.boolValue
      });
    case 'FLOAT':
      assertNotNullish(e.value?.floatValue);
      return jsx(iT, {
        value: e.value.floatValue
      });
    case 'STRING':
      assertNotNullish(e.value?.textValue);
      return jsx(iC, {
        value: e.value.textValue
      });
    case 'COLOR':
      assertNotNullish(e.value?.colorValue);
      return jsx(iw, {
        value: e.value.colorValue
      });
    case 'ALIAS':
      assertNotNullish(e.value?.alias);
      return jsx(iD, {
        variableID: convertKiwiToVariableIdString(e.value.alias),
        modeID: sessionLocalIDToString(t),
        aliasCache: i
      });
    case 'NODE_FIELD_ALIAS':
    case 'CMS_ALIAS':
    case 'JS_RUNTIME_ALIAS':
    case 'PROP_REF':
    case 'MANAGED_STRING_ALIAS':
    case 'EXPRESSION':
    case 'MAP':
    case 'SYMBOL_ID':
    case 'FONT_STYLE':
    case 'TEXT_DATA':
    case 'INVALID':
    case 'IMAGE':
    case 'LINK':
    case 'JS_RUNTIME_ALIAS':
    case 'SLOT_CONTENT_ID':
    case 'DATE':
      return jsx(Fragment, {});
    default:
      throwTypeError(e.dataType);
  }
}
function iD({
  variableID: e,
  modeID: t,
  aliasCache: i
}) {
  let r = i[e]?.[t];
  return r ? jsx(wG, {
    text: r.name,
    tooltip: r.name,
    thumbnailValue: r.value
  }) : null;
}
function iL({
  displayGroup: e,
  prevAliasCache: t,
  nextAliasCache: i
}) {
  let a = useMemo(() => {
    function t(e) {
      return e.id != null && e.name != null && e.sortPosition != null;
    }
    let {
      originalIndex,
      displayNode
    } = e.mainChunk;
    let r = rY.getChunkChanges(GitReferenceType.BRANCH, originalIndex);
    let a = (displayNode.variableSetModes ?? []).filter(t);
    let s = (r.diffBasis[0]?.variableSetModes ?? a).filter(t);
    let o = {};
    for (let e of a) {
      o[sessionLocalIDToString(e.id)] = {
        id: e.id,
        next: e,
        phase: LibraryUpdateStatus.CREATED
      };
    }
    for (let e of s) {
      let t = sessionLocalIDToString(e.id);
      o.hasOwnProperty(t) ? (o[t].prev = e, o[t].next?.name === e.name ? o[t].phase = LibraryUpdateStatus.UNMODIFIED : o[t].phase = LibraryUpdateStatus.UPDATED) : o[t] = {
        id: e.id,
        prev: e,
        phase: LibraryUpdateStatus.REMOVED
      };
    }
    return Object.values(o).sort((e, t) => {
      let i = e.next?.sortPosition ?? e.prev?.sortPosition ?? '';
      let n = t.next?.sortPosition ?? t.prev?.sortPosition ?? '';
      return -compareNumbers(i, n);
    });
  }, [e.mainChunk]);
  let s = useMemo(() => {
    let t = e.variableChunks.filter(e => e.phase !== LibraryUpdateStatus.UNMODIFIED).sort((e, t) => {
      let i = e.displayNode.sortPosition ?? '';
      let n = t.displayNode.sortPosition ?? '';
      return -compareNumbers(i, n);
    });
    let i = {};
    for (let e of t) {
      let {
        variableId,
        diffBasis,
        displayNode
      } = e;
      i[variableId] = {
        prev: diffBasis,
        next: displayNode,
        phase: e.phase
      };
    }
    return i;
  }, [e.variableChunks]);
  return jsx(tQ, {
    variableDiffMap: s,
    children: jsxs(SS, {
      gridColumnSizes: `repeat(${a.length + 1}, 280px) minmax(40px, 1fr)`,
      children: [jsxs(GC, {
        isHeader: !0,
        children: [jsx(Ar, {
          children: getI18nString('variables.authoring_modal.table.name_header')
        }), a.map(e => jsx(Ar, {
          children: jsx(iS, {
            prev: e.prev?.name,
            next: e.next?.name,
            phase: e.phase
          })
        }, `mode--${sessionLocalIDToString(e.id)}`)), jsx(Ar, {})]
      }), Object.entries(s).map(([e, r]) => jsx(iF, {
        diff: r,
        variableSetModeDiffs: a,
        prevAliasCache: t,
        nextAliasCache: i
      }, e))]
    })
  });
}
function iF({
  diff: e,
  variableSetModeDiffs: t,
  prevAliasCache: i,
  nextAliasCache: a
}) {
  let {
    prev,
    next,
    phase
  } = e;
  let d = 0;
  prev.variableScopes !== next.variableScopes && d++;
  prev.codeSyntax !== next.codeSyntax && d++;
  prev.isPublishable !== next.isPublishable && d++;
  return jsxs(GC, {
    children: [jsx(Ar, {
      hasPadding: !1,
      children: d > 0 ? jsx(iE, {
        name: next.name ?? getI18nString('variables.missing_name'),
        diff: e,
        resolvedType: next.variableResolvedType,
        numHiddenChanges: d
      }) : jsx(ig, {
        name: next.name ?? getI18nString('variables.missing_name'),
        phase,
        resolvedType: next.variableResolvedType
      })
    }), t.map(e => {
      let t = iM(prev, e.id);
      let d = iM(next, e.id);
      let c = _$$rY(t, d);
      let u = [LibraryUpdateStatus.UNMODIFIED, LibraryUpdateStatus.UPDATED].includes(e.phase) ? phase : e.phase;
      return jsx(Ar, {
        children: jsx(Suspense, {
          fallback: null,
          children: jsx(ix, {
            prev: t && !c ? jsx(iO, {
              variableData: t,
              modeID: e.id,
              aliasCache: i
            }) : void 0,
            next: d && jsx(iO, {
              variableData: d,
              modeID: e.id,
              aliasCache: a
            }),
            phase: u
          })
        })
      }, `value--${sessionLocalIDToString(e.id)}`);
    }), jsx(Ar, {})]
  });
}
function iM(e, t) {
  return e.variableDataValues?.entries?.find(e => areSessionLocalIDsEqual(e.modeID, t))?.variableData;
}
let iz = 'branching_reviews_modals--input--0a8d0';
var iH = (e => (e.APPROVED = 'approve', e.CHANGES_REQUESTED = 'suggest_changes', e))(iH || {});
let iW = registerModal(e => {
  let t;
  let i;
  let s = useDispatch();
  let [o, u] = useState(e.mergeRequestReviewer.notes || '');
  let [p, m] = useState(e.mergeRequestReviewer.approved_at ? 'approve' : e.mergeRequestReviewer.changes_requested_at ? 'suggest_changes' : '');
  let {
    inputRef,
    inputProps: {
      onChange,
      onFocus,
      onMouseLeave,
      onMouseUp,
      onKeyUp
    }
  } = _$$X({
    onChange: e => {
      e.stopPropagation();
      u(e.currentTarget.value);
    }
  });
  let b = useModalManager(e);
  return jsx(ModalRootComponent, {
    manager: b,
    width: 'lg',
    height: 'fixed',
    children: jsxs(DialogContents, {
      children: [jsx(DialogHeader, {
        children: jsx(DialogTitle, {
          children: renderI18nText('collaboration.branching_reviews.finish_your_review')
        })
      }), jsxs(DialogBody, {
        children: [jsx('form', {
          className: 'branching_reviews_modals--radioGroup--eWuSc',
          children: jsxs(_$$b, {
            legend: jsx(_$$q, {
              children: getI18nString('collaboration.branching_reviews.finish_your_review')
            }),
            value: p,
            onChange: e => {
              m(e);
              inputRef.current?.focus();
            },
            children: [jsx(_$$c, {
              label: jsx(Label, {
                children: renderI18nText('collaboration.branching_reviews.approve')
              }),
              value: 'approve'
            }), jsx(_$$c, {
              label: jsx(Label, {
                children: renderI18nText('collaboration.branching_reviews.suggest_changes')
              }),
              value: 'suggest_changes'
            })]
          })
        }), jsx(_$$v, {
          ref: e => {
            e?.textarea && (inputRef.current = e.textarea);
          },
          bypassModifiers: !0,
          className: iz,
          focusToEnd: !0,
          onChange,
          onFocus,
          onKeyUp,
          onMouseLeave,
          onMouseUp,
          placeholder: (t = e.mergeRequest.owner?.handle, i = e.mergeRequest.reviewers.length > 1, t ? i ? getI18nString('collaboration.branching_reviews.leave_a_comment_for_owner_and_other_reviewers', {
            ownerHandle: t
          }) : getI18nString('collaboration.branching_reviews.leave_a_comment_for_owner', {
            ownerHandle: t
          }) : getI18nString('collaboration.branching_reviews.leave_a_comment')),
          value: o
        })]
      }), jsx(DialogFooter, {
        children: jsxs(DialogActionStrip, {
          children: [jsx($z, {
            recordingKey: 'leaveReviewModal',
            onClick: () => {
              s(ed({
                mergeRequestKey: e.mergeRequest.key,
                mergeRequestReviewerId: e.mergeRequestReviewer.id,
                changesRequested: p === 'suggest_changes',
                approved: p === 'approve',
                notes: o
              }));
              s(popModalStack());
            },
            disabled: !p,
            children: renderI18nText('collaboration.branching_reviews.submit')
          }), ' ']
        })
      })]
    })
  });
}, 'leave-review-modal');
let iK = registerModal(e => {
  let [t, i] = useState(e.existingMergeRequest?.description || '');
  let a = useModalManager({
    open: !0,
    onClose: e.onClose ? e.onClose : () => {}
  });
  let s = getI18nString('collaboration.branching_reviews.add_context_optional');
  let o = e.existingMergeRequest ? getI18nString('collaboration.branching_reviews.give_reviewers_more_context_for_your_latest_changes') : getI18nString('collaboration.branching_reviews.give_reviewers_more_context_for_your_changes');
  return jsx(ModalRootComponent, {
    width: 'md',
    manager: a,
    children: jsxs(DialogContents, {
      children: [jsx(DialogHeader, {
        children: getI18nString('collaboration.branching_reviews.request_review')
      }), jsxs(DialogBody, {
        scrolling: 'none',
        children: [jsx('div', {
          className: 'branching_reviews_modals--subtitle--bjYCq',
          children: o
        }), jsx(_$$v, {
          className: iz,
          value: t,
          placeholder: s,
          focusOnMount: !0,
          focusToEnd: !0,
          onChange: e => {
            i(e.currentTarget.value);
          }
        })]
      }), jsx(DialogFooter, {
        children: jsx(DialogActionStrip, {
          children: jsx($z, {
            variant: 'primary',
            recordingKey: 'requestReviewModal',
            onClick: () => {
              e.onRequestReview(t);
            },
            children: renderI18nText('collaboration.branching_reviews.send_to_reviewers', {
              numReviewers: e.numReviewers
            })
          })
        })
      })]
    })
  });
}, 'request-review-modal');
let iZ = i$;
let ne = 'expandable_multiline_container--container--cb5ml';
let nt = 'expandable_multiline_container--truncatedText--h5hOS';
function ni(e) {
  let {
    containerClassName,
    onExpandCallback,
    text
  } = e;
  let [s, o] = useState(!1);
  let [l, d] = useState(!1);
  let c = useRef(!1);
  let u = useRef(null);
  let p = () => !!u.current && u.current.scrollHeight > u.current.clientHeight;
  useLayoutEffect(() => {
    u?.current && (u.current.style.setProperty('--NLines', `${e.defaultLines}`), u.current.className = nt);
    o(!1);
    c.current = !0;
    d(p());
  }, [text, e.defaultLines, d]);
  useLayoutEffect(() => {
    c.current && (d(p()), c.current = !1);
  }, []);
  let m = useCallback(() => {
    onExpandCallback ? onExpandCallback(!s) : o(!s);
  }, [s, onExpandCallback]);
  let h = s ? 'Show less' : 'Show more';
  return jsxs('div', {
    className: containerClassName ? `${containerClassName} ${ne}` : ne,
    children: [jsx('div', {
      ref: u,
      className: s ? '' : nt,
      children: text
    }), l && jsx('div', {
      className: 'expandable_multiline_container--toggleToExpandPrompt--aiBqe',
      onClick: m,
      children: h
    })]
  });
}
let nn = 'reviewer_row--avatar--4cwsV';
let nr = 'sidebar_details--reviewersHeaderName--I1DlQ text--fontPos11--2LvXf text--_fontBase--QdLsd';
let na = 'sidebar_details--dropdownHeader--6DyP-';
let ns = 'sidebar_details--resultsSection--GQUL9';
let no = 'sidebar_details--sidebarIcon--J15D-';
let nl = 'sidebar_details--noResults--XFtLq';
let nd = {
  textAlign: 'left'
};
function nc(e) {
  let t = e.fadedAvatar ? 'reviewer_row--fadedAvatar--WMoMz reviewer_row--avatar--4cwsV' : nn;
  return jsx(nf, {
    avatarClassName: t,
    button: e.button,
    description: e.description,
    editingNotes: e.editingNotes || !1,
    inlineDescription: e.inlineDescription,
    isInDropdown: e.isInDropdown,
    isReviewRequestor: !1,
    mergeRequest: e.mergeRequest || null,
    onSetEditingNotes: e.onSetEditingNotes || null,
    reviewer: e.reviewer,
    user: e.user
  });
}
function nu(e) {
  return jsx(nc, {
    user: e.user,
    inlineDescription: e.inlineDescription,
    description: e.description,
    className: e.className,
    fadedAvatar: e.fadedAvatar
  });
}
function np(e) {
  return jsx(nc, {
    user: e.user,
    inlineDescription: e.inlineDescription,
    description: e.description || e.user.email,
    className: e.className,
    fadedAvatar: e.fadedAvatar,
    isInDropdown: !0
  });
}
function nm(e) {
  let t = jsx(Button, {
    variant: 'secondary',
    onClick: e.onClickAdd,
    children: renderI18nText('collaboration.branching_to_source.add')
  });
  return jsx(nc, {
    user: e.user,
    inlineDescription: e.inlineDescription,
    description: e.description,
    className: e.className,
    fadedAvatar: e.fadedAvatar,
    button: t
  });
}
function nh(e) {
  let t = jsx('div', {
    className: no,
    children: jsx(IconButton, {
      'onClick': e.onClickRemove,
      'aria-label': getI18nString('collaboration.branching_to_source.remove'),
      'children': jsx(SvgComponent, {
        svg: _$$A3,
        className: 'reviewer_row--icon--dxdcf'
      })
    })
  });
  return jsx(nc, {
    user: e.user,
    inlineDescription: e.inlineDescription,
    description: e.description,
    className: e.className,
    fadedAvatar: e.fadedAvatar,
    button: t
  });
}
function ng(e) {
  let t = selectCurrentUser();
  let i = t && t.id === e.user.id;
  let [a, s] = useState(!1);
  let {
    getTriggerProps,
    manager
  } = setupMenu();
  return jsx(nc, {
    button: e.archivedBranch ? void 0 : i && (e.reviewer.approved_at || e.reviewer.changes_requested_at) ? jsxs(MenuRootComp, {
      manager,
      children: [jsx(IconButton, {
        ...getTriggerProps(),
        'aria-label': getI18nString('collaboration.branching_to_source.more_options_label'),
        'children': jsx(_$$J3, {})
      }), jsx(MenuContainerComp, {
        children: jsx(MenuItemComp, {
          onClick: () => {
            s(!0);
          },
          children: e.reviewer.notes ? getI18nString('collaboration.branching_to_source.edit_comment') : getI18nString('collaboration.branching_to_source.add_comment')
        })
      })]
    }) : null,
    className: e.className,
    description: e.description,
    editingNotes: a,
    fadedAvatar: e.fadedAvatar,
    inlineDescription: i ? getI18nString('collaboration.branching_to_source.you') : void 0,
    mergeRequest: e.mergeRequest,
    onSetEditingNotes: s,
    reviewer: e.reviewer,
    user: e.user
  });
}
function nf(e) {
  let t = !e.isReviewRequestor;
  let i = t && e.reviewer?.notes || !t && e.mergeRequest?.description || '';
  let s = e.editingNotes;
  let o = e.isReviewRequestor ? e.mergeRequest?.requested_at : e.reviewer?.changes_requested_at || e.reviewer?.approved_at;
  let [l, d] = useState(i);
  let c = useDispatch();
  useEffect(() => {
    s || d(i);
  }, [i, s]);
  let u = t && e.reviewer ? ED(e.reviewer) : void 0;
  let m = t && e.reviewer?.changes_requested_at || t && e.reviewer?.approved_at;
  let h = m && e.mergeRequest && e.mergeRequest?.requested_at && e.mergeRequest?.requested_at > m;
  let g = () => {
    e.onSetEditingNotes && e.onSetEditingNotes(!1);
  };
  let f = t ? u === _V.CHANGES_REQUESTED ? getI18nString('collaboration.branching_to_source.suggest_changes') : getI18nString('collaboration.branching_to_source.add_a_comment') : getI18nString('collaboration.branching_to_source.add_context');
  let _ = t ? () => {
    t && e.onSetEditingNotes && e.onSetEditingNotes(!1);
    (!t || e.reviewer && e.mergeRequest?.key) && (!t || l !== e.reviewer?.notes) && c(ec({
      mergeRequestKey: e.mergeRequest.key,
      mergeRequestReviewerId: t ? e.reviewer.id : '',
      notes: l
    }));
  } : () => {
    e.onSetEditingNotes && e.onSetEditingNotes(!1);
    e.mergeRequest && l !== e.mergeRequest.description && c(em({
      mergeRequestId: e.mergeRequest.id,
      mergeRequestKey: e.mergeRequest.key,
      mergeRequestPayload: {
        title: e.mergeRequest.title,
        description: l,
        reviewers: e.mergeRequest.reviewers.map(e => e.user.id)
      }
    }));
  };
  let A = jsx('div', {
    className: 'reviewer_row--name--BZgSS ellipsis--ellipsis--Tjyfa',
    style: nd,
    dir: 'auto',
    children: e.user.handle
  });
  let y = jsx('div', {
    className: t ? 'reviewer_row--inlineDescription--7CFiG reviewer_row--inlineDescriptionRequestor--xW0v5 text--fontPos11--2LvXf text--_fontBase--QdLsd' : 'reviewer_row--inlineDescriptionRequestor--xW0v5 text--fontPos11--2LvXf text--_fontBase--QdLsd',
    children: t ? e.inlineDescription : getI18nString('collaboration.branching_to_source.requested_a_review')
  });
  return jsx('div', {
    className: e.isInDropdown ? 'reviewer_row--dropdownContainer--er3ds reviewer_row--container--V5wAE' : 'reviewer_row--container--V5wAE',
    children: jsxs('div', {
      className: 'reviewer_row--details--HaWjX',
      children: [jsxs('div', {
        className: 'reviewer_row--topRow--HTOyr',
        children: [jsxs('div', {
          className: 'reviewer_row--avatarWithName--6GuS6',
          children: [jsx(Ro, {
            className: e.avatarClassName,
            size: 24,
            entity: e.user
          }), jsxs('div', {
            className: 'reviewer_row--textDetails--qLBoJ',
            children: [jsx('div', {
              className: 'reviewer_row--title--ccY9Q ellipsis--ellipsis--Tjyfa text--fontPos11--2LvXf text--_fontBase--QdLsd',
              children: renderI18nText('collaboration.branching_to_source.reviewer_description', {
                reviewerName: A,
                requestFragment: y
              })
            }), t && e.description && jsx('div', {
              className: 'reviewer_row--description--pBlVV text--fontPos11--2LvXf text--_fontBase--QdLsd ellipsis--ellipsis--Tjyfa',
              children: e.description
            })]
          })]
        }), t && jsx('div', {
          className: 'reviewer_row--button--4nD5y',
          children: e.button
        })]
      }), jsxs('div', {
        className: 'reviewer_row--rowBody--GBkBh',
        children: [void 0 !== u && t && h && jsx('div', {
          className: 'reviewer_row--outdated--Ciuvu',
          children: renderI18nText('collaboration.branching_to_source.reviewed_older_version_of_branch')
        }), void 0 !== u && t && jsx('div', {
          className: 'reviewer_row--statusBadge--N4PHD',
          children: jsx($T, {
            mergeRequestStatus: u,
            size: BadgeSize.LARGE,
            outdated: !!h
          })
        }), i && !s && jsx(ni, {
          text: i,
          defaultLines: 4,
          containerClassName: 'reviewer_row--expandableContainer--hXobO'
        }), s && jsxs('div', {
          className: 'reviewer_row--editNotesContainer--q5NpK',
          children: [jsx(_$$v, {
            autoFocus: e.editingNotes,
            bypassModifiers: !0,
            className: 'reviewer_row--editNotesTextarea--1TBy1',
            focusOnMount: !0,
            focusToEnd: !0,
            maxLength: 1e4,
            onChange: e => d(e.currentTarget.value),
            onEscape: g,
            placeholder: f,
            preventSubmitOnBlur: !0,
            submit: _,
            value: l
          }), jsxs('div', {
            className: 'reviewer_row--editNotesSubmitButtons--7nTpT',
            children: [jsx(Button, {
              variant: 'secondary',
              onClick: g,
              children: renderI18nText('collaboration.branching_to_source.cancel')
            }), jsx(Button, {
              onClick: _,
              children: renderI18nText('collaboration.branching_to_source.save')
            })]
          })]
        }), o && jsx('div', {
          className: 'reviewer_row--timestamp--hUbn-',
          children: _$$A0(o).format('MMM DD YYYY h:mm a')
        })]
      })]
    })
  });
}
function nA(e) {
  let [t, i] = useState('');
  let s = zW();
  let [o, l] = useState([]);
  let [d, c] = useState();
  let [u, p] = useState(-1);
  let [m, h] = useState(!1);
  let g = useDispatch();
  let f = (e, t) => {
    t.includes(e) && (c(e), p(t.indexOf(e)));
  };
  let _ = (e, t) => {
    e >= t.length || e < 0 || (c(t[e]), p(e));
  };
  let A = () => {
    c(void 0);
    p(-1);
  };
  let y = new Set(e.reviewers.map(e => e.user.id));
  useEffect(() => {
    let e = !1;
    (async function () {
      h(!0);
      return await fG(t, s, !1);
    })().then(t => {
      e || (h(!1), t ? l(t.mentions) : l([]));
    }).catch(() => {
      g(VisualBellActions.enqueue({
        message: getI18nString('collaboration.branching_to_source.an_error_occurred_fetching_your_contacts'),
        error: !0
      }));
    });
    return () => {
      e = !0;
    };
  }, [t, s, l, g, h]);
  let b = t => {
    y.has(t.id) ? e.removeFromReviewers(t) : e.addToReviewers(t);
  };
  let v = Array.from(e.initialSuggestions.values());
  let I = o.filter(t => !e.initialSuggestions.has(t.id) && t.id !== e.currentUser.id);
  let x = o.filter(t => t.id !== e.currentUser.id);
  let w = t === '' ? v.concat(I) : x;
  let C = t => t.map(t => jsx('div', {
    onMouseOver: () => f(t, w),
    children: jsx(MM, {
      className: t === d ? 'sidebar_details--dropdownOptionActive--oCpk4 sidebar_details--dropdownOption---YZT3' : 'sidebar_details--dropdownOption---YZT3',
      checked: y.has(t.id),
      onClick: () => b(t),
      children: jsx(np, {
        user: t,
        description: t.email ? t.email : e.initialSuggestions?.get(t.id)?.editorContext
      })
    })
  }, t.id));
  let T = C(v);
  let k = C(I);
  let R = C(x);
  let N = t => {
    switch (t.keyCode) {
      case KeyCodes.ESCAPE:
        t.preventDefault();
        t.stopPropagation();
        e.showDropdown(!1);
        break;
      case KeyCodes.DOWN_ARROW:
        _(u + 1, w);
        break;
      case KeyCodes.UP_ARROW:
        _(u - 1, w);
        break;
      case KeyCodes.ENTER:
        t.preventDefault();
        t.stopPropagation();
        b(w[u]);
        break;
      default:
        A();
    }
  };
  return (useEffect(() => (document.addEventListener('keydown', N), () => {
    document.removeEventListener('keydown', N);
  })), e.currentUser) ? jsx('div', {
    className: 'sidebar_details--reviewersDropdownWrapper--dpBnl',
    children: jsxs(ms, {
      className: 'sidebar_details--reviewersDropdown--EN261',
      style: {
        padding: 0
      },
      children: [jsx('div', {
        className: 'sidebar_details--searchBarContainer--V4JUI',
        children: jsx(Fragment, {
          children: jsx(jq, {
            query: t,
            onChange: i,
            clearSearch: () => i(''),
            onClose: () => e.showDropdown(!1),
            focusOnMount: !0,
            hideXIcon: !1
          })
        })
      }), (T.length > 0 || k.length > 0) && jsx(_$$P, {
        className: 'sidebar_details--searchResultsContainer--pbnRS',
        hideScrollbar: !0,
        children: t === '' ? jsxs(Fragment, {
          children: [T.length > 0 && jsxs('div', {
            className: ns,
            children: [jsx('div', {
              className: na,
              children: renderI18nText('collaboration.branching_to_source.search_suggested')
            }), T]
          }), k.length > 0 && jsxs('div', {
            className: ns,
            children: [jsx('div', {
              className: na,
              children: renderI18nText('collaboration.branching_to_source.other_team_member')
            }), k]
          })]
        }) : jsx(Fragment, {
          children: m ? jsx('div', {
            className: nl,
            children: jsx(LoadingOverlay, {})
          }) : R.length === 0 ? jsx('div', {
            className: nl,
            children: renderI18nText('collaboration.branching_to_source.no_results_matching_query', {
              query: t
            })
          }) : jsx('div', {
            className: ns,
            children: R
          })
        })
      })]
    })
  }) : null;
}
function ny(e) {
  let {
    reviewers,
    onAdd,
    onRemove,
    onApprove,
    readOnly
  } = e;
  let l = new Set(e.reviewers.map(e => e.user.id));
  let d = useSubscription(BranchingSourceViewSidebarView, {
    branchKey: e.branchKey
  });
  let c = useMemo(() => d.transform(e => e.file ? fileEntityDataMapper.toSinatra(e.file) : null).data, [d]);
  let u = useMemo(() => d.transform(e => e.file?.repo ? _$$H.toSinatra(e.file.repo) : null).data, [d]);
  let p = useRef(null);
  let m = selectCurrentUser();
  let h = function (e, t, i = 3) {
    return useSubscription(RepoReviewerSuggestions, {
      repoId: e || ''
    }, {
      enabled: !!e
    }).transform(e => {
      let n = getResourceDataOrFallback(e.repo)?.roles || [];
      let r = getResourceDataOrFallback(e.repo)?.team?.roles || [];
      let a = new Map();
      for (let e of [...n, ...r]) {
        if (a.size >= i) break;
        if (!e.pending && e.userId && e.userId !== t?.id && e.user && !a.has(e.userId) && e.level >= AccessLevelEnum.EDITOR) {
          let t = e.resourceType === 'file_repo' ? EditorLocation.EDITOR_ON_MAIN : EditorLocation.EDITOR_ON_TEAM;
          a.set(e.userId, {
            ...mapUserProperties(e.user),
            editorContext: t
          });
        }
      }
      return a;
    });
  }(u?.id || null, m).data || new Map();
  let g = useHasFilePermission(FileCanEdit, c?.key ?? '').unwrapOr(!1) && !readOnly;
  let f = _$$$n().mergeBranch.status === 'enabled';
  let [_, A] = useState(!1);
  let b = new Map(Array.from(h).filter(([e]) => !l.has(e)));
  let v = t => e.mergeRequestPersisted && e.mergeRequestInDraft ? g ? jsx(nh, {
    user: t.user,
    onClickRemove: () => onRemove(t.user)
  }, t.user.id) : jsx(nu, {
    user: t.user
  }) : e.mergeRequestPersisted ? jsx(ng, {
    user: t.user,
    isApproved: !!t.approved_at,
    reviewer: t,
    archivedBranch: !!c?.trashed_at,
    canEditBranch: g,
    onClickToggleApprove: () => onApprove(t.user, !t.approved_at),
    onClickRemove: () => onRemove(t.user),
    mergeRequest: e.mergeRequest
  }, t.user.id) : g ? jsx(nh, {
    user: t.user,
    onClickRemove: () => onRemove(t.user)
  }, t.user.id) : jsx(nu, {
    user: t.user
  });
  useEffect(() => {
    let e = e => {
      let t = p.current;
      _ && t && !t.contains(e.target) && A(!1);
    };
    document.addEventListener('click', e);
    return () => {
      document.removeEventListener('click', e);
    };
  });
  let I = (e => {
    let [t, i] = iZ()(e, e => !!e.approved_at);
    let [n, r] = iZ()(t, e => e.user.id === m?.id);
    let [a, s] = iZ()(i, e => e.user.id === m?.id);
    return [...r, ...n, ...a, ...s];
  })(reviewers);
  return jsxs(_$$P, {
    className: 'sidebar_details--reviewsSidebarContainer--27ITJ',
    children: [e.mergeRequest && jsx('div', {
      className: 'sidebar_details--requesterWrapper--u6KrU',
      children: jsx(nv, {
        mergeRequest: e.mergeRequest || null,
        isBranchArchived: !!c?.trashed_at
      })
    }), jsxs('div', {
      className: 'sidebar_details--reviewersWrapper--YzDlk',
      children: [jsxs('div', {
        className: 'sidebar_details--reviewersHeader--VPeSw sidebar_details--reviewerRequesterHeader--s1rF6',
        children: [jsx('span', {
          className: nr,
          children: renderI18nText('collaboration.branching_to_source.reviewers')
        }), g && jsx('div', {
          className: no,
          children: jsx(IconButton, {
            'onClick': e => {
              e.stopPropagation();
              A(e => !e);
            },
            'aria-label': getI18nString('collaboration.branching_to_source.add_reviewers'),
            'children': jsx(SvgComponent, {
              svg: _$$A1,
              className: 'sidebar_details--plusIcon--AHH1Y'
            })
          })
        })]
      }), jsxs(Fragment, {
        children: [_ && jsx('div', {
          ref: p,
          className: 'sidebar_details--reviewersDropdownAnchor--gUD8X',
          children: jsx(nA, {
            currentUser: m,
            initialSuggestions: h,
            reviewers,
            addToReviewers: onAdd,
            removeFromReviewers: onRemove,
            showDropdown: A
          })
        }), reviewers.length === 0 && jsx(nb, {
          canEditReviewers: g,
          canMerge: f,
          suggestionsSize: b.size,
          sourceFileName: u?.name || getI18nString('collaboration.branching_to_source.this_repository')
        }), jsx('div', {
          children: Array.from(I.values()).map(e => jsx(_$$Fragment, {
            children: v(e)
          }, e.user.id))
        }), g && (!e.mergeRequestPersisted || e.reviewers.length === 0) && b.size > 0 && jsxs(Fragment, {
          children: [jsx('div', {
            className: 'sidebar_details--suggestionsHeader--eJMo-',
            children: renderI18nText('collaboration.branching_to_source.suggested')
          }), Array.from(b.values()).map(e => jsx(nm, {
            user: e,
            description: e.editorContext,
            fadedAvatar: !0,
            onClickAdd: () => onAdd(e)
          }, e.id))]
        })]
      })]
    })]
  });
}
function nb(e) {
  let t = '';
  t = e.canMerge ? getI18nString('collaboration.branching_to_source.add_people_to_approve_or_provide_feedback_on_your_changes_they_ll_get_notified_when_you_add_them') : e.canEditReviewers ? e.suggestionsSize > 0 ? getI18nString('collaboration.branching_to_source.no_reviewers_add_suggestions.seat_rename', {
    fileName: e.sourceFileName
  }) : getI18nString('collaboration.branching_to_source.no_reviewers_add_no_suggestions.seat_rename', {
    fileName: e.sourceFileName
  }) : getI18nString('collaboration.branching_to_source.no_reviewers_added');
  return jsx('div', {
    className: 'sidebar_details--emptyState--j3RzZ',
    children: t
  });
}
function nv(e) {
  let [t, i] = useState(!1);
  let a = selectCurrentUser();
  let s = a && a.id === e.mergeRequest?.owner?.id && !e.isBranchArchived;
  let {
    manager,
    getTriggerProps
  } = setupMenu();
  let d = useRef(null);
  if (!e.mergeRequest || !e.mergeRequest.owner || !e.mergeRequest.requested_at) return null;
  let c = getTriggerProps();
  return jsxs('div', {
    className: 'sidebar_details--requestDetails--ION4d',
    children: [jsxs('div', {
      className: 'sidebar_details--reviewerRequesterHeader--s1rF6',
      children: [jsx('span', {
        className: nr,
        children: renderI18nText('collaboration.branching_to_source.review_request')
      }), s && jsxs(MenuRootComp, {
        manager,
        children: [jsx('div', {
          className: no,
          children: jsx(IconButton, {
            'aria-label': getI18nString('collaboration.branching_to_source.more_options_label'),
            ...c,
            'ref': e => {
              c.ref(e);
              d.current = e;
            },
            'children': jsx(_$$J3, {})
          })
        }), jsx(MenuContainerComp, {
          children: jsx(MenuItemComp, {
            onClick: () => {
              i(!0);
            },
            children: renderI18nText('collaboration.branching_to_source.edit_description')
          })
        })]
      })]
    }), jsx(nf, {
      isReviewRequestor: !0,
      avatarClassName: nn,
      user: e.mergeRequest.owner,
      mergeRequest: e.mergeRequest,
      editingNotes: t,
      onSetEditingNotes: e => {
        e || d?.current?.focus();
        i(e);
      }
    })]
  });
}
let nI = 'to_source_view--bold--9cOcI';
function nx(e) {
  return e.view === tN.SUMMARY ? void 0 : e.view === tN.AFFECTED_DETAIL || e.view === tN.VARIANT_DETAIL ? e.detailDisplayGroup : e.displayGroup;
}
function nS(e) {
  let t = useDispatch();
  let i = jsx('span', {
    className: nI,
    children: e.sourceFile.name
  });
  let r = jsx('span', {
    className: nI,
    children: e.branchFile.name
  });
  let s = e.canMerge ? e.mergeDisabled ? jsx('span', {
    children: renderI18nText('collaboration.branching_to_source.conflicts_must_be_resolved_to_merge_this_branch', {
      sourceFileName: i
    })
  }) : jsx('span', {
    children: renderI18nText('collaboration.branching_to_source.you_are_able_to_merge_this_branch_along_with_other_editors_of', {
      sourceFileName: i
    })
  }) : e.fileMerge && e.fileMerge.mergeResultCheckpointId ? jsx('span', {
    children: renderI18nText('collaboration.branching_to_source.this_branch_was_merged_into', {
      sourceFileName: i,
      relativeTimestamp: jsx(h1, {
        date: e.fileMerge.updatedAt
      })
    })
  }) : e.isBranchArchived ? jsx('span', {
    children: renderI18nText('collaboration.branching_to_source.branch_was_archived', {
      branchFileName: r,
      relativeTimestamp: e.branchFile.trashed_at ? jsx(h1, {
        date: e.branchFile.trashed_at
      }) : null
    })
  }) : jsx('span', {
    children: renderI18nText('collaboration.branching_to_source.only_editors_of_file_can_merge_this_branch', {
      sourceFileName: i
    })
  });
  let o = () => {
    t(showModalHandler({
      type: iK,
      showModalsBeneath: !0,
      data: {
        numReviewers: e.numReviewers,
        existingMergeRequest: e.mergeRequest,
        onRequestReview: e.onRequestReview
      }
    }));
  };
  let l = () => {
    t(showModalHandler({
      type: iW,
      showModalsBeneath: !0,
      data: {
        mergeRequest: e.mergeRequest,
        mergeRequestReviewer: e.reviewer
      }
    }));
  };
  let d = t => t ? jsx(Button, {
    variant: 'primary',
    onClick: e.onMerge,
    disabled: e.mergeDisabled,
    children: renderI18nText('collaboration.branching_to_source.merge_branch')
  }) : jsx(Button, {
    variant: 'secondary',
    onClick: e.onMerge,
    disabled: e.mergeDisabled,
    children: renderI18nText('collaboration.branching_to_source.merge_branch')
  });
  let c = (t, i) => {
    let r = i ? getI18nString('collaboration.branching_to_source.resend_review_request') : getI18nString('collaboration.branching_to_source.request_review');
    return t ? jsx(Button, {
      variant: 'primary',
      onClick: o,
      disabled: e.requestReviewDisabled,
      children: r
    }) : jsx(Button, {
      variant: 'secondary',
      onClick: o,
      disabled: e.requestReviewDisabled,
      children: r
    });
  };
  let u = (e, t) => {
    let i = t ? getI18nString('collaboration.branching_to_source.review_again') : getI18nString('collaboration.branching_to_source.add_your_review');
    return e ? jsx(Button, {
      variant: 'primary',
      onClick: l,
      children: i
    }) : jsx(Button, {
      variant: 'secondary',
      onClick: l,
      children: i
    });
  };
  let [m, h] = (() => {
    let t = null;
    let i = null;
    let n = e.mergeRequestStatus === _V.APPROVED;
    if (!e.reviewCreated && e.canRequestReview) {
      i = c(!0, !1);
      e.canMerge && (t = d(!1));
    } else if (e.reviewCreated && e.isOwnerOfReview) {
      i = c(!n, !0);
      e.canMerge && (t = d(n));
    } else if (e.reviewCreated && e.reviewer && e.mergeRequest) {
      let r = e.reviewer.approved_at || e.reviewer.changes_requested_at;
      let a = e.mergeRequest.requested_at || 0;
      let s = r && r > a;
      i = u(!s, !!r);
      e.canMerge && (t = d(n && !!e.reviewer.approved_at && !!s));
    } else {
      e.canMerge && (t = d(n));
    }
    return [t, i];
  })();
  let g = !(m || h);
  return jsx(ak, {
    children: g ? jsx('div', {
      className: 'to_source_view--footerNoActions--3OQRg to_source_view--footer--cn1Of',
      children: s
    }) : jsxs('div', {
      className: 'to_source_view--footer--cn1Of',
      children: [jsx('div', {
        className: 'to_source_view--footerHelpWithActions--Rojjb',
        children: s
      }), m, h]
    })
  });
}
let nw = memo(e => {
  let t = useDispatch();
  let [i, s] = useState({
    view: tN.SUMMARY
  });
  let {
    branch,
    repo,
    source,
    openFileKey,
    modalCloseIntent,
    mergeRequest,
    fileMerge
  } = e;
  let f = _$$$n();
  let _ = f.mergeBranch.status === 'enabled';
  let A = f.updateBranch.status === 'enabled';
  let y = getFeatureFlags().branching_and_merging_debug ?? !1;
  let b = useContext(ss);
  let v = useCallback(t => {
    switch (s(t), t.view) {
      case tN.AFFECTED_DETAIL:
      case tN.DETAIL:
      case tN.VARIANT_DETAIL:
        trackEventAnalytics('View Chunk Detail', {
          numDisplayGroups: e.displayGroups?.length ?? 0,
          view: t.view,
          branchModalTrackingId: b,
          branchKey: branch.key
        });
        break;
      case tN.AFFECTED_SUMMARY:
      case tN.SUMMARY:
      case tN.VARIANT_SUMMARY:
        trackEventAnalytics('View Chunk Summary', {
          numDisplayGroups: e.displayGroups?.length ?? 0,
          view: t.view,
          branchModalTrackingId: b,
          branchKey: branch.key
        });
    }
  }, [s, e.displayGroups, b, branch.key]);
  let I = useMemo(() => mergeRequest ? {
    id: mergeRequest.id,
    key: mergeRequest.key,
    branch_file_key: mergeRequest.branchFileKey,
    file_repo_id: mergeRequest.fileRepoId,
    file_merge_id: mergeRequest.fileMergeId,
    review_number: mergeRequest.reviewNumber,
    title: mergeRequest.title,
    description: mergeRequest.description,
    closed_at: mergeRequest.closedAt,
    created_at: mergeRequest.createdAt,
    requested_at: mergeRequest.requestedAt,
    owner: mergeRequest.owner ? {
      id: mergeRequest.owner.id,
      handle: mergeRequest.owner.handle,
      img_url: mergeRequest.owner.imgUrl
    } : null,
    reviewers: mergeRequest.reviewers.map(e => ({
      id: e.id,
      user_id: e.userId,
      approved_at: e.approvedAt,
      changes_requested_at: e.changesRequestedAt,
      notes: e.notes,
      user: {
        id: e.user.id,
        handle: e.user.handle,
        img_url: e.user.imgUrl
      }
    }))
  } : null, [mergeRequest]);
  let x = I?.review_number;
  let S = selectCurrentUser();
  let C = useHasFilePermission(FileCanEdit, branch.key).unwrapOr(!1);
  let O = I?.owner?.id === S?.id;
  let D = !!branch.trashed_at;
  let L = !D && (!I && C || !!I && O);
  let F = e => {
    I ? t(em({
      mergeRequestId: I.id,
      mergeRequestKey: I.key,
      mergeRequestPayload: {
        title: branch.name,
        description: I.description ?? '',
        reviewers: e.map(e => e.user.id)
      }
    })) : B(e);
  };
  let [M, B] = useState(I?.reviewers ?? []);
  let z = e => {
    trackEventAnalytics('Merge Request Reviewer Assigned', {
      reviewNumber: x,
      branchKey: branch.key,
      sourceKey: source.key,
      assignerId: S?.id,
      reviewerId: e.id
    });
  };
  let W = e => {
    trackEventAnalytics('Merge Request Reviewer Unassigned', {
      reviewNumber: x,
      branchKey: branch.key,
      sourceKey: source.key,
      assignerId: S?.id,
      reviewerId: e.id
    });
  };
  let Q = e => {
    let t = M.concat([{
      id: 'temp',
      user_id: e.id,
      approved_at: null,
      changes_requested_at: null,
      notes: null,
      user: e
    }]);
    B(t);
    F(t);
    z(e);
  };
  let ei = e => {
    let t = M.filter(t => t.user.id !== e.id);
    B(t);
    F(t);
    W(e);
  };
  let ea = (e, i) => {
    let n = M.find(t => t.user_id === e.id);
    I && n && t(eu({
      mergeRequestReviewerId: n.id,
      mergeRequestKey: I.key,
      isApprove: i
    }));
  };
  let [es, eo] = useState([]);
  let el = () => i.view === tN.DETAIL || i.view === tN.AFFECTED_DETAIL || i.view === tN.VARIANT_DETAIL;
  let {
    allDisplayGroups,
    displayGroupsByPage,
    pageIdToInfo,
    displayGroupsByStyle,
    displayGroupsByVariableSet,
    displayGroupsByLibrary,
    sortedPageIds
  } = useMemo(() => e.styleKeyToFileKey ? on(e.displayGroups ?? [], e.styleKeyToFileKey, e.styleKeyToLibraryKey ?? {}, SourceDirection.TO_SOURCE) : on([], {}, {}, SourceDirection.TO_SOURCE), [e.displayGroups, e.styleKeyToFileKey, e.styleKeyToLibraryKey]);
  let ex = function (e, t, i, n, a, s, o, l) {
    let [d, c] = useState(null);
    let [u, p] = useState({});
    let h = useRef(new Set());
    let g = useRef(new Set());
    let f = e?.from_checkpoint_key;
    let _ = e?.to_checkpoint_key;
    let [A, y] = useState(!1);
    let [b, v] = useState(null);
    let [I, E] = useState({
      from: {},
      to: {}
    });
    let x = useContext(ss);
    useEffect(() => {
      if (!l || !n.length) return;
      let e = performance.now();
      y(!1);
      _l();
      let r = n.filter(e => e.type === 'variable-collection').map(e => e.variableChunks).flat();
      let a = tX(r.map(e => e.diffBasis));
      gf(GitReferenceType.BRANCH);
      y(!0);
      rY.trackGranularLoadTime({
        branchKey: t,
        sourceKey: i,
        durationMs: performance.now() - e,
        functionName: 'reversibleChangesEstablished',
        branchModalTrackingId: x
      });
      E({
        from: a,
        to: tX(r.map(e => e.displayNode))
      });
    }, [l, n, t, i, x]);
    let [S, w] = useMemo(() => {
      let e;
      let t;
      if (!n.length) return [[], null];
      e = g.current;
      (t = (t = a).filter(t => !e.has(sessionLocalIDToString(t.mainChunk.displayNode.guid)))).length || e.size || (t = n.slice(0, 20));
      let i = t;
      let r = function (e, t, i) {
        if (e.view === tN.DETAIL || e.view === tN.AFFECTED_DETAIL || e.view === tN.VARIANT_SUMMARY || e.view === tN.VARIANT_DETAIL) {
          let t = nx(e);
          return t && !i.has(sessionLocalIDToString(t.mainChunk.displayNode.guid)) ? t : null;
        }
      }(s, 0, h.current);
      for (let e of i) g.current.add(sessionLocalIDToString(e.mainChunk.displayNode.guid));
      r && h.current.add(sessionLocalIDToString(r.mainChunk.displayNode.guid));
      return [i, r];
    }, [n, h, g, s, a]);
    return (useEffect(() => {
      f && _ && A && setTimeout(async () => {
        if (w) {
          let e = PE(o, w.mainChunk);
          let {
            nodeId,
            to,
            fromPromise
          } = function (e, t) {
            let i = sessionLocalIDToString(e.mainChunk.displayNode.guid);
            let n = KZ(e.mainChunk.displayNode.styleType);
            let r = [{
              id: e.basisChunkGuid !== null ? e.basisChunkGuid : i,
              backgroundColor: t,
              isStyle: n
            }];
            let a = FD({
              nodes: [{
                id: i,
                backgroundColor: t,
                isStyle: n
              }],
              scale: getFeatureFlags().branching_detail_view_zoom ? n ? 4 : 8 : void 0
            });
            let s = new Promise(async e => {
              for (let e = 0; e < 5; e++) await waitForAnimationFrame();
              b_();
              let t = FD({
                nodes: r,
                scale: getFeatureFlags().branching_detail_view_zoom ? n ? 4 : 8 : void 0
              });
              gf(GitReferenceType.BRANCH);
              e(t[0]);
            });
            return {
              nodeId: i,
              to: a[0],
              fromPromise: s
            };
          }(w, e);
          p(e => J()({}, e, {
            [nodeId]: {
              to
            }
          }));
          let r = await fromPromise;
          p(e => J()({}, e, {
            [nodeId]: {
              from: r
            }
          }));
        }
        let [e, n] = await Mt(S, t, i, f, x);
        e.then(e => {
          c(t => ({
            ...t,
            ...e
          }));
        }).catch(e => {
          v(e);
        });
        n.then(e => {
          c(t => ({
            ...t,
            ...e
          }));
        }).catch(e => {
          v(e);
        });
      }, s.view === tN.SUMMARY ? 0 : 200);
    }, [o, S, w, t, i, f, _, s, A, x]), b) ? {
      status: 'error',
      error: b
    } : {
      status: 'loaded',
      summaryImages: d,
      detailImages: u,
      aliasVariableCaches: I
    };
  }(e.checkpointDiff, branch.key, source.key, allDisplayGroups, es, i, pageIdToInfo, e.isConflictDetectionLoading);
  if (ex.status === 'error') throw ex.error;
  let {
    summaryImages,
    detailImages,
    aliasVariableCaches
  } = ex;
  let eT = useCallback(e => {
    let t = allDisplayGroups[e];
    if (!t) {
      handleModalError(new Error('No display group found for index'), {
        index: e,
        length: allDisplayGroups.length
      });
      return;
    }
    t.type === 'state-group' ? v({
      view: tN.VARIANT_SUMMARY,
      displayGroup: t
    }) : t.type === 'variable-collection' ? v({
      view: tN.VARIABLE_SET_DETAIL,
      displayGroup: t
    }) : v({
      view: tN.DETAIL,
      displayGroup: t
    });
  }, [allDisplayGroups, v]);
  let ek = !!summaryImages || allDisplayGroups.length === 0 && !e.isConflictDetectionLoading;
  _$$tW({
    isDoneLoading: ek,
    isDoneLoadingSourceDiff: e.hasSourceDiffLoaded,
    isDoneLoadingConflicts: !e.isConflictDetectionLoading,
    direction: SourceDirection.TO_SOURCE,
    branchFileKey: branch.key,
    sourceFileKey: branch.source_file_key,
    fileRepoId: branch.file_repo_id,
    displayGroups: e.displayGroups ?? [],
    conflictGroups: e.conflictGroups ?? [],
    modalCloseIntent,
    branchModalTrackingId: b,
    entryPointDirection: SourceDirection.TO_SOURCE
  });
  useEffect(() => {
    I && B(I.reviewers);
  }, [I, S, branch]);
  useEffect(() => {
    if (!tP(i) || allDisplayGroups.length <= 1) return;
    let e = e => {
      if (!document.activeElement) return;
      let t = i.displayGroup.index;
      switch (e.code) {
        case 'ArrowLeft':
          t > 0 && eT(t - 1);
          e.preventDefault();
          break;
        case 'ArrowRight':
          t < allDisplayGroups.length - 1 && eT(t + 1);
          e.preventDefault();
      }
    };
    document.addEventListener('keydown', e, {
      capture: !0
    });
    return () => document.removeEventListener('keydown', e, {
      capture: !0
    });
  }, [i, allDisplayGroups, eT]);
  useEffect(() => {
    if (!y) return;
    let e = 'BranchPermissionsDebugger';
    window[e] = {
      logPermissions() {
        console.log(f);
      }
    };
    return () => {
      window[e] = void 0;
    };
  }, [f, y]);
  let [eR, eN] = useState(!1);
  useEffect(() => {
    if (getFeatureFlags().branching_conflict_banner_logging && !e.isConflictDetectionLoading && !eR) {
      let t = e.conflictGroups?.length ?? 0;
      let i = !!e.unreadCommentCount && e.unreadCommentCount !== 0;
      let n = A || _ ? tW(A, e.isMergeBlocked, t !== 0, i, e.hasDuplicateConflictingGuids) : null;
      let r = n === tH.CONFLICTING_UPDATES || n === tH.CONFLICT_MERGE_BLOCKED;
      !e.isMergeBlocked && _ || r || (eN(!0), handleModalError(new Error('Merge button disabled without conflict banner'), {
        bannerState: n ? tH[n] : null,
        isMergeBlocked: e.isMergeBlocked,
        conflictCount: t,
        unreadCommentCount: e.unreadCommentCount,
        hasDuplicateConflictingGuids: e.hasDuplicateConflictingGuids,
        mergeBranchStatus: f.mergeBranch.status,
        mergeBranchReason: f.mergeBranch.reason,
        updateBranchStatus: f.updateBranch.status,
        updateBranchReason: f.updateBranch.reason
      }));
    }
  }, [A, _, e.isMergeBlocked, e.isConflictDetectionLoading, e.conflictGroups, e.hasDuplicateConflictingGuids, e.unreadCommentCount, eR, eN, f]);
  let eP = useCallback(async () => {
    await ds();
    t(hideModal());
    let e = {
      branchKey: branch.key,
      sourceKey: branch?.source_file_key,
      direction: SourceDirection.FROM_SOURCE,
      backFileKey: branch.key
    };
    t(selectViewAction({
      view: 'fullscreen',
      fileKey: branch.key,
      editorType: FEditorType.Design,
      mergeParams: e
    }));
  }, [t, branch]);
  let eO = useMemo(() => {
    if (i.view === tN.SUMMARY || i.view === tN.AFFECTED_SUMMARY) return null;
    let e = nx(i);
    return e ? rY.getChunkChanges(GitReferenceType.BRANCH, e.mainChunk.originalIndex) : null;
  }, [i]);
  let eD = {
    direction: SourceDirection.TO_SOURCE
  };
  let eM = useCallback(e => eT(e.index), [eT]);
  let ej = e.openMergeRequest ? z2(e.openMergeRequest) : null;
  let eU = () => jsxs('div', {
    children: [jsxs('div', {
      className: 'to_source_view--reviewTitleContainer--kPDvw',
      children: [jsx(SvgComponent, {
        className: UT,
        svg: _$$A10
      }), jsx('div', {
        className: 'to_source_view--reviewTitleUneditable--MhdSl text--fontPos14--OL9Hp text--_fontBase--QdLsd',
        children: branch.name
      })]
    }), jsxs('div', {
      className: 'to_source_view--sourceText--Oqd53',
      children: [repo?.name, ' \xB7 ', renderI18nText('collaboration.branching_to_source.change', {
        numChanges: allDisplayGroups.length
      })]
    }), jsx('div', {
      className: 'to_source_view--statusIndicator--iUkm8',
      children: jsx($T, {
        mergeRequestStatus: ej,
        size: BadgeSize.LARGE
      })
    })]
  });
  let eB = i => {
    if (t(popModalStack()), I) {
      let e = i !== (I.description || '');
      t(ep({
        mergeRequestId: I.id,
        mergeRequestKey: I.key,
        ...(e && {
          description: i
        })
      }));
    } else {
      t(eh({
        title: branch.name,
        description: i,
        reviewers: M.map(e => e.user.id)
      }));
    }
    e.onCloseModal();
  };
  let eV = S && M.find(e => e.user_id === S.id);
  return ek && e.checkpointDiff ? allDisplayGroups.length === 0 ? jsx(qj, {
    children: jsx(wy, {
      children: jsx(_$$nS, {
        children: jsx('div', {
          className: _$$iG,
          children: renderI18nText('collaboration.branching_to_source.no_changes_to_merge')
        })
      })
    })
  }) : jsx('div', {
    className: Kl,
    children: jsxs('div', {
      className: i.view === tN.SUMMARY ? Xl : _$$ed,
      children: [(() => {
        let t = jsxs(Fragment, {
          children: [(A || _) && jsx(tY, {
            numConflicts: e.conflictGroups?.length ?? 0,
            isLoading: e.isConflictDetectionLoading,
            isBlockingUpdate: e.isMergeBlocked,
            isEditorOnRepo: e.isEditorOnRepo,
            canUpdate: A,
            switchToUpdateFromMain: openFileKey === branch.key ? e.onSwitchToUpdateFromMain : eP,
            unreadCommentCount: e.unreadCommentCount,
            hasDuplicateConflictingGuids: e.hasDuplicateConflictingGuids
          }), jsx(wy, {
            children: jsxs(TrackingProvider, {
              name: _$$e2.BRANCHING_REVIEW_MODAL,
              properties: {
                fileKey: branch.key,
                fileRepoId: branch.file_repo_id,
                ...eD
              },
              children: [jsxs(FA, {
                className: kb,
                children: [jsx('div', {
                  className: 'to_source_view--reviewHeader--VyxPo',
                  children: eU()
                }), jsx(ny, {
                  branchKey: branch.key,
                  mergeRequestPersisted: !!I,
                  mergeRequestInDraft: !!I && !!I.closed_at,
                  readOnly: !L,
                  reviewers: M,
                  onAdd: Q,
                  onRemove: ei,
                  onApprove: ea,
                  mergeRequest: I
                })]
              }), jsx(_$$P, {
                className: lq,
                children: jsx(_$$nS, {
                  children: summaryImages && jsx('div', {
                    children: jsx(tw, {
                      onChunkClick: eM,
                      onChangeVisibleGroups: eo,
                      displayGroupsByPage,
                      sortedPageIds,
                      pageIdToInfo,
                      displayGroupsByStyle,
                      displayGroupsByVariableSet,
                      displayGroupsByLibrary,
                      images: summaryImages
                    })
                  })
                })
              })]
            })
          }), jsx(nS, {
            branchFile: branch,
            canMerge: _,
            canRequestReview: C,
            fileMerge,
            isBranchArchived: D,
            isOwnerOfReview: !!(S && I?.owner?.id === S.id),
            mergeDisabled: e.isMergeBlocked || e.isConflictDetectionLoading || !_,
            mergeRequest: I || void 0,
            mergeRequestStatus: ej,
            numReviewers: M.length,
            onMerge: e.onSubmit({
              pendingMessage: getI18nString('collaboration.branching_to_source.merging_branch_name_changes', {
                branchName: branch.name
              }),
              successMessage: getI18nString('collaboration.branching_to_source.branch_merged'),
              checkpointDiff: e.checkpointDiff
            }),
            onRequestReview: eB,
            requestReviewDisabled: M.length < 1 || !C,
            reviewCreated: !!I && !I.closed_at,
            reviewer: eV || void 0,
            sourceFile: source
          })]
        });
        let r = i.view === tN.SUMMARY;
        return 'inert' in HTMLElement.prototype ? jsx(qj, {
          inert: !r,
          children: t
        }) : jsx(qj, {
          children: r ? t : null
        });
      })(), (() => {
        if (i.view === tN.SUMMARY) return null;
        let e = nx(i);
        if (!e) return null;
        let t = detailImages[sessionLocalIDToString(e.mainChunk.displayNode.guid) || ''];
        let r = t?.from;
        let a = t?.to;
        return jsxs(qj, {
          children: [jsxs(wy, {
            children: [jsx(TrackingProvider, {
              name: _$$e2.BRANCH_DIFF_DETAIL,
              properties: {
                fileKey: branch.source_file_key,
                fileRepoId: branch.file_repo_id
              },
              children: jsxs('div', {
                className: WH,
                children: [jsxs('div', {
                  className: Rm,
                  children: [jsxs('div', {
                    className: ho,
                    children: [jsx('div', {
                      className: j2,
                      children: jsx(IconButton, {
                        'aria-label': getI18nString('collaboration.branching_to_source.back_to_summary_view'),
                        'onClick': () => {
                          i.view === tN.AFFECTED_DETAIL ? v({
                            view: tN.AFFECTED_SUMMARY,
                            displayGroup: i.displayGroup
                          }) : i.view === tN.VARIANT_DETAIL ? v({
                            view: tN.VARIANT_SUMMARY,
                            displayGroup: i.displayGroup
                          }) : v({
                            view: tN.SUMMARY
                          });
                        },
                        'children': jsx(_$$t2, {})
                      })
                    }), jsx(tj, {
                      currentView: i,
                      setCurrentViewAndTrack: v
                    })]
                  }), jsxs('div', {
                    className: S1,
                    children: [i.view === tN.VARIABLE_SET_DETAIL && jsx('span', {
                      className: w5,
                      children: getI18nString('variables.diff.only_changed_variables_are_shown')
                    }), jsx(eH, {
                      className: _$$ak,
                      phase: e.mainChunk.phase
                    })]
                  })]
                }), jsxs(_$$P, {
                  className: lq,
                  innerClassName: XA,
                  children: [(el() || i.view === tN.VARIANT_SUMMARY) && jsx(eL, {
                    beforeImage: r,
                    beforeBackgroundColorStyle: Oh(e.mainChunk, pageIdToInfo),
                    afterImage: a,
                    afterBackgroundColorStyle: Oh(e.mainChunk, pageIdToInfo),
                    showOptions: e.mainChunk.phase !== LibraryUpdateStatus.CREATED && e.mainChunk.phase !== LibraryUpdateStatus.REMOVED,
                    displayChunk: e,
                    chunkDetail: eO,
                    compareThumbnailSource: ProjectDevelopmentPhases.BRANCHING
                  }), i.view === tN.VARIANT_SUMMARY && jsx(tU, {
                    displayGroup: i.displayGroup,
                    onChunkClick: e => {
                      v({
                        view: tN.VARIANT_DETAIL,
                        displayGroup: i.displayGroup,
                        detailDisplayGroup: e
                      });
                    },
                    setVisibleGroups: eo,
                    pageIdToInfo,
                    summaryImages
                  }), i.view === tN.AFFECTED_SUMMARY && jsx(tk, {
                    displayGroup: i.displayGroup,
                    onChunkClick: e => {
                      v({
                        view: tN.AFFECTED_DETAIL,
                        displayGroup: i.displayGroup,
                        detailDisplayGroup: e
                      });
                    },
                    setVisibleGroups: eo,
                    pageIdToInfo,
                    summaryImages
                  }), i.view === tN.VARIABLE_SET_DETAIL && jsx('div', {
                    className: _$$tp,
                    children: jsx(iL, {
                      displayGroup: i.displayGroup,
                      prevAliasCache: aliasVariableCaches.from,
                      nextAliasCache: aliasVariableCaches.to
                    })
                  })]
                })]
              }, `${i.view}-${sessionLocalIDToString(e.mainChunk.displayNode.guid)}`)
            }), !!getFeatureFlags().branching_and_merging_debug && jsx(FA, {
              className: pG,
              children: eO ? jsx(e7, {
                changes: eO.nodeChanges,
                basis: eO.diffBasis
              }) : getI18nString('collaboration.branching_to_source.placeholder_for_non_previewable_changes')
            })]
          }), tP(i) && jsx(ak, {
            children: jsxs('div', {
              className: G9,
              children: [jsx('div', {
                className: ai,
                children: jsx(IconButton, {
                  'aria-label': getI18nString('collaboration.branching_to_source.view_previous_detail'),
                  'onClick': () => eT(i.displayGroup.index - 1),
                  'disabled': i.displayGroup.index === 0,
                  'children': jsx(_$$t2, {})
                })
              }), jsx('div', {
                className: lT,
                children: renderI18nText('collaboration.branching_to_source.group_m_of_n', {
                  groupIndex: i.displayGroup.index + 1,
                  numGroups: allDisplayGroups.length
                })
              }), jsx('div', {
                className: ai,
                children: jsx(IconButton, {
                  'aria-label': getI18nString('collaboration.branching_to_source.view_next_detail'),
                  'onClick': () => eT(i.displayGroup.index + 1),
                  'disabled': i.displayGroup.index === allDisplayGroups.length - 1,
                  'children': jsx(_$$a, {})
                })
              })]
            })
          })]
        });
      })()]
    })
  }) : jsx(qj, {
    children: jsx(wy, {
      children: jsx(_$$nS, {
        children: jsx('div', {
          className: _$$FD,
          children: jsx(_$$G, {
            hasLoadedConflictDetection: !e.isConflictDetectionLoading,
            hasLoadedDiffs: !!e.checkpointDiff,
            ignoreConflictDetection: !A
          })
        })
      })
    })
  });
});
let nC = 'BranchMergeDebugger';
function nT(e, t) {
  return t.find(t => sessionLocalIDToString(t.displayNode.guid) === e);
}
function nk(e, t) {
  return t?.find(t => sessionLocalIDToString(t.mainChunk.displayNode.guid) === e);
}
let nN = nR;
let nO = atom('off');
let nF = memo(e => {
  let {
    mainPickDisplayGroups,
    mainPickGUIDs,
    branchPickGUIDs,
    conflictDetection,
    branchKey,
    sourceKey,
    fromCheckpointKey,
    styleKeyToFileKey,
    styleKeyToLibraryKey,
    pickedAllFromBranch,
    nonConflictDisplayGroups,
    didResolveConflicts,
    viewOnly
  } = e;
  let {
    nonConflictingSourceChunkGUIDs,
    nonConflictingBranchChunkGUIDs,
    identicalChunkGUIDs
  } = o;
  let [w, C] = useState([]);
  let T = useSelector(e => e.mirror.appModel.branchingSceneState);
  let k = useContext(ss);
  let {
    otherChanges,
    displayGroupsByPage,
    displayGroupsByStyle,
    displayGroupsByVariableSet,
    displayGroupsByLibrary,
    pageIdToInfo
  } = useMemo(() => function (e, t, i, n) {
    if (!(t.length > 0)) {
      return {
        ...on(e, i, n, SourceDirection.FROM_SOURCE),
        otherChanges: []
      };
    }
    {
      let r = on(t, i, n, SourceDirection.FROM_SOURCE);
      return {
        ...r,
        otherChanges: e.map((e, t) => ({
          ...e,
          index: r.allDisplayGroups.length + t
        }))
      };
    }
  }(nonConflictDisplayGroups, mainPickDisplayGroups, styleKeyToFileKey, styleKeyToLibraryKey), [nonConflictDisplayGroups, mainPickDisplayGroups, styleKeyToFileKey, styleKeyToLibraryKey]);
  let M = nonConflictDisplayGroups.length + mainPickDisplayGroups.length;
  let j = useMemo(() => {
    let e = [];
    !didResolveConflicts && M === 0 && (e.push('file_improvement'), identicalChunkGUIDs.length > 0 && e.push('interrupted_merge_recovery'));
    return e;
  }, [didResolveConflicts, M, identicalChunkGUIDs]);
  useEffect(() => {
    j.length > 0 && trackEventAnalytics('System Improvements During Update', {
      branchKey: e.branchKey,
      sourceKey: e.sourceKey,
      checkpointDiffKey: e.checkpointDiffKey,
      fromCheckpointKey: e.fromCheckpointKey,
      displayGroups: M,
      identicalGuids: identicalChunkGUIDs.length,
      file_improvements: j.includes('file_improvement'),
      interrupted_merge_recovery: j.includes('interrupted_merge_recovery'),
      branchModalTrackingId: k
    }, {
      forwardToDatadog: !0
    });
  }, [j, e.sourceKey, e.branchKey, e.checkpointDiffKey, e.fromCheckpointKey, M, identicalChunkGUIDs, k]);
  let U = function (e, t, i, n, a, s, o, l, d) {
    let [c, u] = useState(!1);
    let [p, m] = useState(null);
    let [h, g] = useState(null);
    let f = useRef(new Set());
    _$$h(() => {
      try {
        _$$n(e, t, i, n, a);
        u(!0);
      } catch (e) {
        g(new CustomCauseError('Failed to merge conflict resolution picks', {
          cause: e
        }));
      }
    });
    let A = useContext(ss);
    return (useEffect(() => {
      setTimeout(async () => {
        if (!c) return;
        let e = d.filter(e => {
          let t = sessionLocalIDToString(e.mainChunk.displayNode.guid);
          return !f.current.has(t) && (f.current.add(t), !0);
        });
        if (e.length === 0) return;
        let [t, i] = await Mt(e, s, o, l, A);
        t.then(e => {
          m(t => ({
            ...t,
            ...e
          }));
        });
        i.then(e => {
          m(t => ({
            ...t,
            ...e
          }));
        });
      }, 0);
    }, [c, s, l, o, d, A]), h) ? {
      status: 'error',
      error: h
    } : p === null ? {
      status: 'loading'
    } : {
      status: 'loaded',
      images: p
    };
  }(mainPickGUIDs, branchPickGUIDs, nonConflictingSourceChunkGUIDs, nonConflictingBranchChunkGUIDs, identicalChunkGUIDs, branchKey, sourceKey, fromCheckpointKey, w);
  let [B, V] = useAtomValueAndSetter(nO);
  if (useEffect(() => {
    B === 'loading' && (U.status === 'loaded' || U.status === 'error') && V('loaded');
  }, [U, B, V]), U.status === 'error') {
    throw U.error;
  }
  let z = useCallback(e => {
    C(e);
  }, [C]);
  return jsxs('div', {
    className: 'changes_review--grid--KCKhB',
    children: [jsx('div', {
      className: 'changes_review--sidebar--N8-46 changes_review--sidebarBorder--Xs026',
      children: e.didResolveConflicts ? jsxs(Fragment, {
        children: [jsxs(ButtonPrimitive, {
          className: 'changes_review--reviewConflictChanges--nqttn changes_review--reviewChanges--uhXd5',
          onClick: e.uncompleteResolution,
          children: [jsx(SvgComponent, {
            svg: _$$A11,
            className: 'changes_review--reviewChevron--TWKyU',
            width: '10px',
            autosize: !0
          }), renderI18nText('collaboration.branching_from_source.review_changes')]
        }), jsx('div', {
          children: pickedAllFromBranch ? jsxs(Fragment, {
            children: [jsx('p', {
              children: renderI18nText('collaboration.branching_from_source.you_chose_to_keep_all_changes_from_the_branch_for_conflicts')
            }), '\xA0', jsx('p', {
              children: renderI18nText('collaboration.branching_from_source.continue_to_apply_non_conflicting_changes', {
                changeCount: nonConflictDisplayGroups.length
              })
            })]
          }) : jsx(Fragment, {
            children: renderI18nText('collaboration.branching_from_source.confirm_your_picks_as_well_as_additional_changes_that_may_be_pulled_into_your_file')
          })
        })]
      }) : jsxs(Fragment, {
        children: [jsx('div', {
          className: 'changes_review--reviewChanges--uhXd5',
          children: renderI18nText('collaboration.branching_from_source.review_changes')
        }), jsx('div', {
          children: renderI18nText('collaboration.branching_from_source.these_changes_have_been_made_to_the_main_file')
        })]
      })
    }), jsx('div', {
      className: 'changes_review--mainContent--ItN1b',
      children: jsx(_$$P, {
        className: 'changes_review--scrollbar--8e66S',
        children: jsx(tw, {
          onChangeVisibleGroups: z,
          otherChanges,
          displayGroupsByPage,
          pageIdToInfo,
          displayGroupsByStyle,
          displayGroupsByVariableSet,
          displayGroupsByLibrary,
          images: U.status === 'loaded' ? U.images : {},
          systemImprovements: j
        })
      })
    }), jsx('div', {
      className: 'changes_review--sidebarFooter--HtGs6 changes_review--sidebarBorder--Xs026',
      children: jsx(ButtonWide, {
        variant: 'primary',
        type: 'submit',
        onClick: e.applyChanges,
        disabled: viewOnly || T !== FileAndBranchTipType.STAGED_BRANCH_TIP,
        children: renderI18nText('collaboration.branching_from_source.apply_changes')
      })
    })]
  });
});
let nj = nM;
function nG(e) {
  let t = useMemo(() => e.chunk ? C_(e.chunk) : void 0, [e.chunk]);
  return jsx('div', {
    className: ev()({
      'chunk_title--chunkTitle--CeIJT': !0,
      'chunk_title--noBorder--Kk010': e.noBorder
    }),
    children: e.chunk ? jsxs(Fragment, {
      children: [jsx(UB, {
        node: e.chunk.displayNode,
        parentNode: t,
        className: 'chunk_title--headerIcon--kHPnp object_row--layerIcon--dTOdu'
      }), jsx(_$$R, {
        text: _$$w2(e.chunk.displayNode.name || ''),
        element: 'h4',
        id: e.id
      })]
    }) : jsx(_$$R, {
      text: _$$w2(e.siblingChunk?.displayNode.name || ''),
      element: 'h4',
      id: e.id
    })
  });
}
let nH = 'selection_columns--selected--wv1-g';
function nW(e) {
  let t = typeof e.leftLabel == 'string' ? void 0 : e.leftLabel.labelledBy;
  let i = typeof e.rightLabel == 'string' ? void 0 : e.rightLabel.labelledBy;
  return jsxs('div', {
    className: ev()('selection_columns--columns--iPmSx', e.className),
    children: [jsx('section', {
      'className': ev()('selection_columns--leftChunk--uOUKy selection_columns--chunkItem--mJ8QX', e.choice === BranchType.MAIN && nH),
      'aria-labelledby': t,
      'aria-label': typeof e.leftLabel == 'string' ? e.leftLabel : void 0,
      'children': e.leftChildren
    }), jsx('section', {
      'className': ev()('selection_columns--rightChunk--QxrFK selection_columns--chunkItem--mJ8QX', e.choice === BranchType.BRANCH && nH),
      'aria-labelledby': i,
      'aria-label': typeof e.rightLabel == 'string' ? e.rightLabel : void 0,
      'children': e.rightChildren
    })]
  });
}
function nK({
  children: e
}) {
  return jsx('div', {
    className: 'variable_collections_conflict_group_diff--row--5-C3N',
    children: e
  });
}
function nY({
  mainChunk: e,
  branchChunk: t,
  choice: i
}) {
  let r = e?.displayNode.variableSetModes?.sort((e, t) => -1 * compareNumbers(e.sortPosition, t.sortPosition)) ?? [];
  let a = t?.displayNode.variableSetModes?.sort((e, t) => -1 * compareNumbers(e.sortPosition, t.sortPosition)) ?? [];
  function o({
    key: e,
    name: t
  }) {
    return t == null ? jsx(nK, {
      children: null
    }, e) : jsx(nK, {
      children: renderI18nText('variables.diff.conflict_collection_name', {
        collectionName: jsx('strong', {
          children: t
        })
      })
    }, e);
  }
  function l({
    key: e,
    modes: t
  }) {
    let i = mapFilter(t, e => e.name).join(', ');
    return jsx(nK, {
      children: renderI18nText('variables.diff.conflict_modes', {
        modeNames: jsx('strong', {
          children: i
        })
      })
    }, e);
  }
  let {
    leftChildren,
    rightChildren
  } = function () {
    let i = [];
    let n = [];
    e?.displayNode.name !== t?.displayNode.name && (i.push(o({
      key: 'name-l',
      name: e?.displayNode.name
    })), n.push(o({
      key: 'name-r',
      name: t?.displayNode.name
    })));
    deepEqual(r, a) || (i.push(l({
      key: 'mode-l',
      modes: r
    })), n.push(l({
      key: 'mode-r',
      modes: a
    })));
    return {
      leftChildren: i,
      rightChildren: n
    };
  }();
  return jsx('div', {
    className: 'variable_collections_conflict_group_diff--chunksInConflict--L-iE9 conflict_group_diff--chunksInConflict--KY8CG',
    children: jsx(nW, {
      choice: i,
      leftLabel: e?.displayNode.name || getI18nString('variables.diff.collection_label_main'),
      leftChildren,
      rightLabel: t?.displayNode.name || getI18nString('variables.diff.collection_label_branch'),
      rightChildren
    })
  });
}
let nZ = n$;
let nX = 'variables_conflict_group_diff--modeValueRowName--gNLKt';
let nQ = 'variables_conflict_group_diff--codeSyntaxRowName--PdVWt variables_conflict_group_diff--modeValueRowName--gNLKt';
let nJ = 'variables_conflict_group_diff--divider--Ol0eH';
function n0({
  children: e
}) {
  return jsx('div', {
    className: 'variables_conflict_group_diff--modeValueRow--z0ENJ',
    children: e
  });
}
function n1({
  children: e
}) {
  return jsxs(Fragment, {
    children: [jsx('div', {
      className: nJ
    }), jsx(n0, {
      children: e
    })]
  });
}
function n2({
  mainChunk: e,
  mainVariableSetChunk: t,
  branchChunk: i,
  branchVariableSetChunk: r,
  choice: a,
  mainAliasCache: s,
  branchAliasCache: o
}) {
  let l = t?.displayNode.variableSetModes?.sort((e, t) => -1 * compareNumbers(e.sortPosition, t.sortPosition)) ?? [];
  let d = nZ()(l, e => sessionLocalIDToString(e.id));
  let c = l.map(t => e?.displayNode.variableDataValues?.entries?.find(e => areSessionLocalIDsEqual(e.modeID, t.id))).filter(isNotNullish);
  let u = r?.displayNode.variableSetModes?.sort((e, t) => -1 * compareNumbers(e.sortPosition, t.sortPosition)) ?? [];
  let p = nZ()(u, e => sessionLocalIDToString(e.id));
  let m = u.map(e => i?.displayNode.variableDataValues?.entries?.find(t => areSessionLocalIDsEqual(t.modeID, e.id))).filter(isNotNullish);
  let h = lp(c, m, e => sessionLocalIDToString(e.modeID));
  let g = getPropertyScopes(e?.displayNode.variableScopes ?? []);
  let f = getPropertyScopes(i?.displayNode.variableScopes ?? []);
  let _ = e?.displayNode.codeSyntax && e?.displayNode.codeSyntax.entries ? e?.displayNode.codeSyntax.entries : void 0;
  let A = i?.displayNode.codeSyntax && i?.displayNode.codeSyntax.entries ? i?.displayNode.codeSyntax.entries : void 0;
  function y({
    key: e,
    modeName: t,
    modeID: i,
    variableData: r,
    aliasCache: a
  }) {
    return jsxs(n0, {
      children: [jsx('div', {
        className: nX,
        children: t
      }), jsx(iO, {
        variableData: r,
        modeID: i,
        aliasCache: a
      })]
    }, e);
  }
  function b({
    key: e
  }) {
    return jsx(n0, {
      children: null
    }, e);
  }
  function v({
    key: e,
    scopes: t
  }) {
    return jsxs(n1, {
      children: [jsx('div', {
        className: nX,
        children: renderI18nText('variables.modes.option.scope')
      }), jsx(iR, {
        scopes: t
      })]
    }, e);
  }
  function I({
    key: e,
    codeSyntaxMapEntries: t
  }) {
    return jsxs(n1, {
      children: [jsx('div', {
        className: nQ,
        children: renderI18nText('variables.branching.code_syntax')
      }), jsx('div', {
        className: 'variables_conflict_group_diff--codeSyntaxValueContainer--H9zD9',
        children: jsx(ib, {
          codeSyntaxMapEntries: t
        })
      })]
    }, e);
  }
  function x({
    key: e,
    isPublishable: t
  }) {
    return jsxs(Fragment, {
      children: [jsx('div', {
        className: nJ
      }), jsx(n0, {
        children: jsx('div', {
          className: nQ,
          children: t ? renderI18nText('variables.branching.show_when_publishing') : renderI18nText('variables.branching.hide_from_publishing')
        })
      }, e)]
    });
  }
  let {
    leftChildren,
    rightChildren
  } = function () {
    let t = [];
    let n = [];
    h.forEach(([e, i], r) => {
      e ? t.push(y({
        key: sessionLocalIDToString(e.modeID),
        modeName: d[sessionLocalIDToString(e.modeID)].name ?? '',
        modeID: e.modeID,
        variableData: e.variableData,
        aliasCache: s
      })) : t.push(b({
        key: r
      }));
      i ? n.push(y({
        key: sessionLocalIDToString(i.modeID),
        modeName: p[sessionLocalIDToString(i.modeID)].name ?? '',
        modeID: i.modeID,
        variableData: i.variableData,
        aliasCache: o
      })) : n.push(b({
        key: r
      }));
    });
    let r = h.length;
    t.push(v({
      key: r,
      scopes: g
    }));
    n.push(v({
      key: r,
      scopes: f
    }));
    r++;
    t.push(I({
      key: r,
      codeSyntaxMapEntries: _
    }));
    n.push(I({
      key: r,
      codeSyntaxMapEntries: A
    }));
    r++;
    t.push(x({
      key: r,
      isPublishable: e?.displayNode.isPublishable
    }));
    n.push(x({
      key: r,
      isPublishable: i?.displayNode.isPublishable
    }));
    return {
      leftChildren: t,
      rightChildren: n
    };
  }();
  return jsx('div', {
    className: 'variables_conflict_group_diff--chunksInConflict--BU-Cf conflict_group_diff--chunksInConflict--KY8CG',
    children: jsx(nW, {
      choice: a,
      leftLabel: {
        labelledBy: `variable-chunk-main-title-${e?.originalIndex}`
      },
      leftChildren: jsxs(Fragment, {
        children: [jsx(nG, {
          chunk: e,
          siblingChunk: i,
          noBorder: !0,
          id: `chunk-title-${e?.originalIndex}`
        }), leftChildren]
      }),
      rightLabel: {
        labelledBy: `variable-chunk-branch-title-${i?.originalIndex}`
      },
      rightChildren: jsxs(Fragment, {
        children: [jsx(nG, {
          chunk: i,
          siblingChunk: e,
          noBorder: !0,
          id: `variable-chunk-branch-title-${i?.originalIndex}`
        }), rightChildren]
      })
    })
  });
}
let n5 = 'conflict_group_diff--selected---jRD1 selection_columns--selected--wv1-g';
let n4 = 'conflict_group_diff--diffHeaderTitle--13SSF text--fontPos14--OL9Hp text--_fontBase--QdLsd';
let n3 = 'conflict_group_diff--diffHeaderLabel--lTGme text--fontPos11--2LvXf text--_fontBase--QdLsd';
let n6 = 'conflict_group_diff--labelSelected--t2o7J';
let n7 = 'conflict_group_diff--checkmark--0Yq33';
let n8 = 'conflict_group_diff--conflictGroupDiffContainer--JaBCV';
let n9 = 'conflict_group_diff--darkBackgroundText--W-o5I';
let re = 'conflict_group_diff--lightBackgroundText--FduPR';
function ri({
  isDarkBackground: e,
  displayNode: t
}) {
  if (t && $2(t)) {
    let e = s$(t);
    return jsx(SvgComponent, {
      svg: e,
      className: 'conflict_group_diff--grid--ojJey',
      autosize: !0,
      width: '40px'
    });
  }
  return jsx('span', {
    className: e ? n9 : re,
    children: renderI18nText('collaboration.branching_from_source.preview_unavailable')
  });
}
function rn(e) {
  let {
    chunk,
    loading,
    imageData,
    imageBackgroundColor
  } = e;
  let o = chunk?.phase === LibraryUpdateStatus.REMOVED;
  let l = chunk?.displayNode;
  let d = chunk?.displayNode.styleType === 'TEXT';
  let c = chunk?.displayNode.styleType === 'FILL';
  let u = getVisibleTheme() === 'dark';
  let p = chunk ? uA(chunk, imageBackgroundColor) : {
    backgroundColor: imageBackgroundColor
  };
  let h = rB(u, imageBackgroundColor, chunk?.displayNode.styleType);
  let g = ev()({
    [eN]: d || c
  });
  let f = ev()({
    [eP]: d && u
  });
  let _ = useMemo(() => imageData && cs(imageData, l) ? {
    width: imageData.width,
    height: imageData.height,
    data: imageData.image,
    scale: 2
  } : null, [imageData, l]);
  return !chunk || o ? jsx('div', {
    style: {
      backgroundColor: imageBackgroundColor
    },
    className: n8,
    children: jsx('span', {
      className: h ? n9 : re,
      children: chunk ? o ? (() => {
        if (chunk && chunk.displayNode.styleType && chunk.displayNode.styleType !== 'NONE') return renderI18nText('collaboration.branching_from_source.this_style_was_removed');
        switch (chunk?.displayNode.type) {
          case 'CANVAS':
            return renderI18nText('collaboration.branching_from_source.this_page_was_removed');
          case 'FRAME':
            return renderI18nText('collaboration.branching_from_source.this_frame_was_removed');
          case 'SYMBOL':
            return renderI18nText('collaboration.branching_from_source.this_component_was_removed');
          default:
            return renderI18nText('collaboration.branching_from_source.this_layer_was_removed');
        }
      })() : renderI18nText('collaboration.branching_from_source.preview_unavailable') : renderI18nText('collaboration.branching_from_source.no_item')
    })
  }) : jsxs('div', {
    className: n8,
    style: p,
    children: [loading && jsx(_$$k2, {}), _ && jsx(_$$ec, {
      image: _,
      className: g,
      canvasClassName: f
    }), (_ == null || imageData == null) && jsx(ri, {
      isDarkBackground: h,
      displayNode: l
    })]
  });
}
function rr(e) {
  let {
    mainChunk,
    branchChunk,
    loadingImages,
    choice,
    mainImage,
    mainImageBackgroundColor,
    branchImage,
    branchImageBackgroundColor
  } = e;
  return mainChunk || branchChunk ? jsxs(Yz, {
    className: 'conflict_group_diff--chunksInConflict--KY8CG',
    resetStateOnChangeValue: mainImage,
    zoomPercentageOptions: [25, 50, 100],
    zoomOnMousePointer: !1,
    children: [jsx(nW, {
      choice,
      leftLabel: {
        labelledBy: `main-chunk-title-${mainChunk?.originalIndex}`
      },
      leftChildren: jsxs(Fragment, {
        children: [jsx(nG, {
          chunk: mainChunk,
          siblingChunk: branchChunk,
          id: `main-chunk-title-${mainChunk?.originalIndex}`
        }), jsx(rn, {
          imageBackgroundColor: mainImageBackgroundColor,
          chunk: mainChunk,
          loading: loadingImages,
          imageData: mainImage
        })]
      }),
      rightLabel: {
        labelledBy: `branch-chunk-title-${branchChunk?.originalIndex}`
      },
      rightChildren: jsxs(Fragment, {
        children: [jsx(nG, {
          chunk: branchChunk,
          siblingChunk: mainChunk,
          id: `branch-chunk-title-${branchChunk?.originalIndex}`
        }), jsx(rn, {
          imageBackgroundColor: branchImageBackgroundColor,
          chunk: branchChunk,
          loading: loadingImages,
          imageData: branchImage
        })]
      })
    }), jsx('div', {
      className: 'conflict_group_diff--zoomSelector--mnStt',
      children: jsx(_5, {})
    })]
  }) : jsx(Fragment, {});
}
function ra(e) {
  useEffect(() => {
    let t = t => {
      if (!document.activeElement) return;
      let i = !0;
      switch (t.keyCode) {
        case KeyCodes.BRACKET_LEFT:
          e(BranchType.MAIN);
          break;
        case KeyCodes.BRACKET_RIGHT:
          e(BranchType.BRANCH);
          break;
        default:
          i = !1;
      }
      i && (t.preventDefault(), t.stopPropagation());
    };
    document.addEventListener('keydown', t);
    return () => document.removeEventListener('keydown', t);
  }, [e]);
}
function rs({
  chooseForConflict: e,
  choice: t,
  group: i,
  fileName: a,
  branchName: s
}) {
  ra(useCallback(t => e(i, t), [e, i]));
  return jsxs(Fragment, {
    children: [jsxs('div', {
      className: ev()('conflict_group_diff--diffHeaderLeft--jlkCd conflict_group_diff--diffHeaderItem--TWJfb conflict_resolution--mainHeader--l2ahY conflict_resolution--headerBorder--mFV8I', t === BranchType.MAIN && n5),
      children: [jsx('div', {
        className: n4,
        children: jsx(_$$R, {
          text: a,
          element: 'h3'
        })
      }), jsx('div', {
        className: ev()(n3, t === BranchType.MAIN && n6),
        children: renderI18nText('collaboration.branching_from_source.main')
      })]
    }), jsxs('div', {
      className: ev()('conflict_group_diff--diffHeaderRight--9h2Uw conflict_group_diff--diffHeaderItem--TWJfb conflict_resolution--branchHeader--zbjpj conflict_resolution--headerBorder--mFV8I', t === BranchType.BRANCH && n5),
      children: [jsxs('div', {
        className: n4,
        children: [jsx(SvgComponent, {
          className: 'conflict_group_diff--diffHeaderIcon--mn8Ej',
          svg: _$$A12
        }), jsx(_$$R, {
          text: s,
          element: 'h3'
        })]
      }), jsx('div', {
        className: ev()(n3, t === BranchType.BRANCH && n6),
        children: renderI18nText('collaboration.branching_from_source.branch')
      })]
    })]
  });
}
function ro({
  chooseForConflict: e,
  choice: t,
  group: i,
  loadingImages: a,
  mainImages: s,
  branchImages: o,
  mainAliasCache: l,
  branchAliasCache: d
}) {
  let {
    sourceChunks,
    branchChunks
  } = i;
  ra(useCallback(t => e(i, t), [e, i]));
  let p = useMemo(() => lp(sourceChunks, branchChunks, Hm), [sourceChunks, branchChunks]);
  return jsx('div', {
    className: 'conflict_group_diff--diffContents--vciWn conflict_resolution--diffPreview--Gn3q6',
    children: jsx(_$$P, {
      className: 'conflict_group_diff--scrollContainer--SX-Xd',
      innerClassName: 'conflict_group_diff--innerScrollContainer--VWi96',
      children: p.map(([e, i]) => {
        let r = e ? Hm(e) : void 0;
        let c = i ? Hm(i) : void 0;
        let u = e ? s[sessionLocalIDToString(e.displayNode.guid)] : void 0;
        let m = i ? o[sessionLocalIDToString(i.displayNode.guid)] : void 0;
        return jsx(rd, {
          alignedChunks: p,
          branchAliasCache: d,
          branchChunk: i,
          branchImage: m,
          choice: t,
          loadingImages: a,
          mainAliasCache: l,
          mainChunk: e,
          mainImage: u
        }, `${r}:${c}`);
      })
    })
  });
}
function rl({
  chooseForConflict: e,
  choice: t,
  group: i,
  viewOnly: a
}) {
  let s = useCallback(t => e(i, t), [e, i]);
  let o = e => {
    t === e ? s(void 0) : s(e);
  };
  return (ra(s), a) ? null : jsxs(Fragment, {
    children: [jsx('div', {
      className: ev()('conflict_group_diff--diffFooterLeft--gdTe1 conflict_group_diff--diffFooterItem--A5WYQ conflict_resolution--mainFooter--ramGe', t === BranchType.MAIN && n5),
      children: jsx(ButtonWide, {
        'variant': 'secondary',
        'iconPrefix': jsx(_$$r2, {
          className: n7
        }),
        'onClick': () => {
          o(BranchType.MAIN);
        },
        'aria-pressed': t === BranchType.MAIN,
        'children': renderI18nText('collaboration.branching_from_source.keep_main')
      })
    }), jsx('div', {
      className: ev()('conflict_group_diff--diffFooterRight--adX-Z conflict_group_diff--diffFooterItem--A5WYQ conflict_resolution--branchFooter--8jDG8', t === BranchType.BRANCH && n5),
      children: jsx(ButtonWide, {
        'variant': 'secondary',
        'iconPrefix': jsx(_$$r2, {
          className: n7
        }),
        'onClick': () => {
          o(BranchType.BRANCH);
        },
        'aria-pressed': t === BranchType.BRANCH,
        'children': renderI18nText('collaboration.branching_from_source.keep_branch')
      })
    })]
  });
}
function rd({
  alignedChunks: e,
  branchChunk: t,
  branchImage: i,
  choice: r,
  loadingImages: a,
  mainChunk: s,
  mainImage: o,
  mainAliasCache: l,
  branchAliasCache: d
}) {
  let c = function () {
    if (!s && !t) return null;
    if ((s ?? t).displayNode.type === 'VARIABLE_SET') {
      return jsx(nY, {
        mainChunk: s,
        branchChunk: t,
        choice: r
      });
    }
    if ((s ?? t).displayNode.type === 'VARIABLE') {
      let [i, a] = e[0];
      return jsx(n2, {
        mainChunk: s,
        mainVariableSetChunk: i,
        branchChunk: t,
        branchVariableSetChunk: a,
        choice: r,
        mainAliasCache: l,
        branchAliasCache: d
      });
    }
    return jsx(rr, {
      mainChunk: s,
      branchChunk: t,
      choice: r,
      loadingImages: a,
      mainImage: o?.image,
      mainImageBackgroundColor: o?.backgroundColor || yi,
      branchImage: i?.image,
      branchImageBackgroundColor: i?.backgroundColor || yi
    });
  }();
  return c ? jsx('div', {
    className: 'conflict_group_diff--conflictPair--DeI3v',
    children: c
  }) : null;
}
function rg(e) {
  let t = function (e) {
    switch (e) {
      case BranchType.BRANCH:
        return getI18nString('collaboration.branching_from_source.branch');
      case BranchType.MAIN:
        return getI18nString('collaboration.branching_from_source.main');
      default:
        return null;
    }
  }(e.choice);
  return jsxs('div', {
    className: ev()('conflict_list--resolvedBadge--7rjR5 text--fontPos9--naThA text--_fontBase--QdLsd', t ? null : 'conflict_list--hiddenBadge--a3sEO'),
    children: [jsx(SvgComponent, {
      svg: _$$A13,
      className: 'conflict_list--checkIcon--GOZ0X'
    }), ' ', t]
  });
}
function rf(e) {
  let t = e.displayNode;
  let i = _$$w2(t.name || '');
  let a = useMemo(() => ({
    'data-tooltip': i,
    'data-tooltip-type': KindEnum.TEXT
  }), [i]);
  return jsxs('div', {
    className: 'conflict_list--rowChunkDisplay--r3So6',
    children: [jsx('div', {
      className: 'conflict_list--iconContainer--QHdJ2',
      children: jsx(UB, {
        className: 'conflict_list--nodeIcon--63RSB object_row--layerIcon--dTOdu',
        node: t,
        parentNode: e.parentNode
      })
    }), jsx('div', {
      className: 'conflict_list--conflictTitleTextContainer--HP4Hx',
      children: jsx(_$$R, {
        text: i,
        tooltipPropsWhenTruncated: a
      })
    })]
  });
}
function r_(e) {
  let {
    conflictGroup,
    numUniqueItems
  } = e;
  return numUniqueItems > 1 ? renderI18nText('collaboration.branching_from_source.num_unique_items_related_items', {
    numUniqueItems
  }) : jsx(rf, {
    displayNode: conflictGroup.sourceChunks[0]?.displayNode || conflictGroup.branchChunks[0].displayNode
  });
}
function rA(e) {
  let t = useMemo(() => C_(e.chunk), [e.chunk]);
  return jsx('div', {
    className: 'conflict_list--conflictSubItem--JuGqp',
    children: jsx(rf, {
      displayNode: e.chunk.displayNode,
      parentNode: t
    })
  });
}
function ry(e) {
  let {
    conflictGroup
  } = e;
  let i = new Set();
  return jsxs(Fragment, {
    children: [conflictGroup.sourceChunks.map(e => {
      let t = Hm(e);
      i.add(t);
      return jsx(rA, {
        chunk: e
      }, t);
    }), conflictGroup.branchChunks.map(e => {
      let t = Hm(e);
      return i.has(t) ? null : jsx(rA, {
        chunk: e
      }, t);
    })]
  });
}
function rb({
  conflictGroups: e,
  picks: t,
  setAllPicks: i,
  viewOnly: a
}) {
  let s = e.reduce((e, i) => t[i.id] ? e + 1 : e, 0);
  let o = useMemo(() => {
    let e = nj()(Object.values(t));
    return (e.length === 1 ? e[0] : void 0) ?? '';
  }, [t]);
  return jsxs('div', {
    className: 'conflict_list--sidebarHeader--WOTdH conflict_resolution--sidebarHeader--DW5jM conflict_resolution--sidebarBorder--6T7B7 conflict_resolution--headerBorder--mFV8I',
    children: [jsx('div', {
      children: renderI18nText('collaboration.branching_from_source.num_conflicts', {
        conflictCount: e.length,
        pickedCount: s
      })
    }), !a && jsx('div', {
      children: jsxs(_$$bL3, {
        onChange: e => {
          e && i(e);
        },
        value: o,
        children: [jsx(l9, {
          label: jsx(HiddenLabel, {
            children: renderI18nText('collaboration.branching_from_source.resolve_all')
          })
        }), jsxs(_$$mc, {
          children: [jsx(c$, {
            value: '',
            disabled: !0,
            children: renderI18nText('collaboration.branching_from_source.resolve_all')
          }), jsx(c$, {
            value: BranchType.MAIN,
            children: getI18nString('collaboration.branching_from_source.pick_main_file')
          }), jsx(c$, {
            value: BranchType.BRANCH,
            children: getI18nString('collaboration.branching_from_source.pick_branch')
          })]
        })]
      })
    })]
  });
}
function rv({
  conflictGroupSections: e,
  picks: t,
  selectedConflict: i,
  selectConflict: a,
  selectedSection: s,
  setSelectedSection: o
}) {
  let l = useRef(null);
  let [d, c] = useState(!0);
  let [u, p] = useState(0);
  useLayoutEffect(() => {
    l.current && p(l.current.getClipContainer().clientHeight);
  }, [d, l, p]);
  return jsxs('div', {
    className: 'conflict_list--sidebarContents--QcDlW conflict_resolution--sidebarContents--AgGrv conflict_resolution--sidebarBorder--6T7B7',
    children: [jsx(rI, {
      conflictGroupSections: e,
      currentSelection: s,
      setCurrentSelection: o,
      picks: t,
      isOpen: d,
      setIsOpen: c
    }), jsx(_$$P, {
      className: 'conflict_list--scrollContainer--SOS5e',
      ref: l,
      children: jsx(rw, {
        picks: t,
        selectedConflict: i,
        selectConflict: a,
        sectionConflictGroups: s[1],
        listHeight: u
      }, s[1][0]?.id)
    })]
  });
}
function rI(e) {
  let {
    conflictGroupSections,
    currentSelection,
    setCurrentSelection,
    picks,
    isOpen,
    setIsOpen
  } = e;
  let l = conflictGroupSections.length > 1;
  return jsxs('div', {
    className: 'conflict_list--pageSelectionContainer--si-pv',
    children: [jsxs('div', {
      className: 'conflict_list--sectionHeader--jrojq',
      children: [jsx('h3', {
        className: 'conflict_list--pageSelectionTitle--koWkI',
        children: currentSelection[0]
      }), l && jsx(Fragment, {
        children: jsx('div', {
          className: 'conflict_list--sectionCloseOpenControl--lU2j5',
          onClick: () => setIsOpen(!isOpen),
          children: jsx(SvgComponent, {
            svg: isOpen ? _$$A15 : _$$A11
          })
        })
      })]
    }), jsx('div', {
      className: ev()(isOpen && l ? null : 'conflict_list--sectionItemsHidden--qtvg9'),
      children: jsx(_$$P, {
        scrollBarAlways: !1,
        className: 'conflict_list--sectionItemsScrollContainer--1xKoi conflict_list--scrollContainer--SOS5e',
        children: conflictGroupSections.map(([e, t]) => jsx(rE, {
          pageName: e,
          isSelected: currentSelection[1][0].id === t[0].id,
          setToCurrentPage: () => setCurrentSelection([e, t]),
          conflicted: !t.every(e => picks[e.id])
        }, t[0]?.id))
      })
    })]
  });
}
function rE(e) {
  let {
    pageName,
    isSelected,
    setToCurrentPage,
    conflicted
  } = e;
  return jsxs('div', {
    className: isSelected ? 'conflict_list--pageRowSelected--s1QMe conflict_list--pageRow--as-Kw' : 'conflict_list--pageRow--as-Kw',
    onClick: () => {
      setToCurrentPage();
    },
    children: [jsx(SvgComponent, {
      className: 'conflict_list--pageRowSvg--SF5s1',
      svg: _$$A14
    }), jsx('div', {
      className: 'conflict_list--pageName--xnoWb',
      children: pageName
    }), conflicted && jsx('div', {
      className: 'conflict_list--conflictedTag--2xAC5',
      children: renderI18nText('collaboration.branching_from_source.conflicted')
    })]
  });
}
let rx = e => nj()(e.sourceChunks.map(Hm).concat(e.branchChunks.map(Hm))).length;
function rS(e) {
  let {
    conflictGroup,
    numUniqItems,
    choice,
    isSelected,
    onClick
  } = e;
  return jsxs('div', {
    className: ev()('conflict_list--rowItem--xCLbn', isSelected ? 'conflict_list--selectedItem--i-v8a' : null),
    onClick,
    children: [jsxs('div', {
      className: 'conflict_list--conflictTitle--vR197',
      children: [jsx(r_, {
        conflictGroup,
        numUniqueItems: numUniqItems
      }), choice && jsx(rg, {
        choice
      })]
    }), numUniqItems > 1 ? jsx('div', {
      className: 'conflict_list--conflictSubItems--ZDAYQ',
      children: jsx(ry, {
        conflictGroup
      })
    }) : null]
  });
}
function rw(e) {
  let {
    sectionConflictGroups,
    picks,
    selectConflict,
    selectedConflict,
    listHeight
  } = e;
  let l = createRef();
  let d = useMemo(() => sectionConflictGroups.map(e => [...e.sourceChunks, ...e.branchChunks].some(e => Y1(e)) ? 1 : rx(e)), [sectionConflictGroups]);
  useLayoutEffect(() => {
    l.current && l.current.scrollToItem(sectionConflictGroups.indexOf(selectedConflict));
  }, [selectedConflict, l, sectionConflictGroups]);
  let c = useCallback(({
    index: e,
    style: r
  }) => {
    let o = sectionConflictGroups[e];
    let l = picks[o.id];
    return jsx('div', {
      style: r,
      children: jsx(rS, {
        conflictGroup: o,
        numUniqItems: d[e],
        choice: l,
        onClick: () => selectConflict(o),
        isSelected: o === selectedConflict
      }, `conflict-${e}`)
    });
  }, [selectedConflict, sectionConflictGroups, picks, selectConflict, d]);
  let u = e => e > 1 ? 32 * (e + 1) : 32;
  return jsx(_m, {
    ref: l,
    height: listHeight,
    itemCount: sectionConflictGroups.length,
    itemSize: e => u(d[e]),
    width: '100%',
    overscanCount: 5,
    children: c
  });
}
var rC = (e => (e.STYLES = 'Styles', e.MULTIPAGE = 'Multipage', e.VARIABLES = 'Variables', e))(rC || {});
var rT = (e => (e.PAGE = 'Page', e.LIBRARY = 'Library', e))(rT || {});
function rk(e, t, i, n) {
  Ur(e, t);
  let r = i.map(e => ({
    ...e,
    backgroundColor: SceneGraphHelpers.getNodePageBackgroundColor(e.id),
    isStyle: e.isStyle
  }));
  let a = FD({
    nodes: r
  });
  let s = tX(n);
  b_();
  let o = {};
  a.forEach((e, t) => {
    let i = r[t];
    o[i.id] = {
      image: e,
      backgroundColor: i.backgroundColor
    };
  });
  return {
    imagesByNodeId: o,
    aliasVariableCache: s
  };
}
let rR = memo(e => {
  let {
    conflictDetection,
    picks,
    choosePicks,
    branchPickGUIDs,
    pickedAllFromBranch,
    styleKeyToFileKey,
    styleKeyToLibraryKey,
    hasNonConflictDisplayGroups,
    viewOnly
  } = e;
  let {
    conflictGroups
  } = t;
  let y = ud();
  let b = useAtomWithSubscription(qp);
  let I = useSelector(e => e.mirror.appModel.pagesList);
  let x = useMemo(() => function (e, t, i, n, r, a) {
    let s = {};
    let o = {};
    let l = {};
    let d = {};
    let c = {};
    e.forEach(e => {
      let t = function (e, t, i, n, r) {
        let {
          sourceChunks,
          branchChunks
        } = e;
        let o = sourceChunks.concat(branchChunks);
        let l = null;
        for (let e of o) {
          if (Rw(e) && e.displayNode.styleType) return 'Styles';
          if (Y1(e)) return 'Variables';
          if (Oi(e)) {
            let t = r[e.styleKey || ''] || e.componentLibraryKey || 'defaultKey';
            let n = t === 'defaultKey' ? 'Libraries' : i[t]?.name ?? 'Libraries';
            return {
              type: 'Library',
              key: t,
              name: n
            };
          }
          {
            let t = WE(e);
            let i = t.guid;
            let n = t.name;
            if (l && l.key !== i) return 'Multipage';
            l = {
              type: 'Page',
              key: i,
              name: n
            };
          }
        }
        return l;
      }(e, 0, i, 0, r);
      if (t === 'Multipage' || t === 'Styles' || t === 'Variables') {
        c[t] = c[t] || [];
        c[t].push(e);
      } else if (t && t.type === 'Page') {
        o[t.key] = o[t.key] || [];
        o[t.key].push(e);
        s[t.key] = t.name;
      } else if (t && t.type === 'Library') {
        d[t.key] = d[t.key] || [];
        d[t.key].push(e);
        l[t.key] = t.name;
      } else {
        throw new Error('No section for conflict group');
      }
    });
    let u = ['Variables', 'Styles', 'Multipage'].filter(e => c[e]).map(e => [function (e) {
      switch (e) {
        case 'Styles':
          return getI18nString('collaboration.conflict_local_styles');
        case 'Variables':
          return getI18nString('collaboration.conflict_local_variables');
        case 'Multipage':
          return getI18nString('collaboration.conflict_multipage');
      }
    }(e), c[e]]);
    let p = Object.keys(o);
    let m = new Map(a.map((e, t) => [e.nodeId, t]));
    p.sort((e, t) => m.get(e) - m.get(t));
    let h = p.map(e => [s[e], o[e]]);
    let g = Object.keys(d).map(e => [l[e], d[e]]);
    return u.concat(h).concat(g);
  }(conflictGroups, 0, b, 0, styleKeyToLibraryKey, I), [conflictGroups, y, b, styleKeyToFileKey, styleKeyToLibraryKey, I]);
  let S = useMemo(() => nN()(x, ([e, t]) => t), [x]);
  let [w, C] = useState(0);
  let [N, P] = useState(x[0]);
  let O = useCallback(e => {
    let t;
    let i = x.map(([e, t]) => t.length).map((t = 0, e => t += e)).findIndex(t => t > e);
    C(e);
    P(x[i]);
  }, [x, C, P]);
  let [D, L] = useState(!1);
  let M = S[w];
  let j = useRef(null);
  let [U, B] = useState(null);
  let V = function (e, t, i, n, a) {
    let [s, o] = useState({
      status: 'loading',
      id: null
    });
    let [l, d] = useState(!1);
    let {
      mainGuidsToAlwaysApplyToGenerateImages,
      extraGuidsToApplyToGenerateMainImageFromDiff,
      branchGuidsToAlwaysApplyToGenerateImages,
      extraGuidsToApplyToGenerateBranchImageFromConflictDiff
    } = useMemo(() => function (e, t, i) {
      let {
        conflictGroups: _conflictGroups,
        nonConflictingBranchChunkGUIDs,
        nonConflictingSourceChunkGUIDs,
        identicalChunkGUIDs
      } = e;
      let o = _conflictGroups.filter(e => t[e.id] === BranchType.BRANCH && e !== i);
      let l = _conflictGroups.filter(e => t[e.id] === BranchType.MAIN && e !== i);
      let d = nj()(nN()(l, e => ue(e, BranchType.MAIN)));
      let c = nj()(nN()(o, e => ue(e, BranchType.BRANCH)));
      let u = _conflictGroups.filter(e => !t[e.id]);
      let p = c.concat(nonConflictingBranchChunkGUIDs, identicalChunkGUIDs);
      let m = d.concat(nonConflictingSourceChunkGUIDs);
      let h = nj()(nN()([i].concat(u), e => ue(e, BranchType.BRANCH)));
      return {
        mainGuidsToAlwaysApplyToGenerateImages: m,
        extraGuidsToApplyToGenerateMainImageFromDiff: nj()(nN()([i].concat(u), e => ue(e, BranchType.MAIN))),
        branchGuidsToAlwaysApplyToGenerateImages: p,
        extraGuidsToApplyToGenerateBranchImageFromConflictDiff: h
      };
    }(e, t, i), [e, t, i]);
    let h = useContext(ss);
    _$$h(() => {
      let e = setTimeout(() => {
        try {
          _l();
          d(!0);
        } catch (e) {
          o({
            status: 'error',
            error: e
          });
        }
      }, 0);
      return () => {
        clearTimeout(e);
      };
    });
    useEffect(() => {
      if (!l || n.current === i.id) return;
      if (s.status === 'loading') {
        if (s.id === i.id) return;
        s.timer && clearTimeout(s.timer);
      }
      let e = setTimeout(() => {
        try {
          let e = Date.now();
          let t = i.sourceChunks.length;
          logInfo('Branching', 'Generating conflict images', {
            conflictGroup: i.id,
            type: 'main'
          });
          trackEventAnalytics('Conflict Image Generation started', {
            branchModalTrackingId: h,
            numChunks: t,
            conflictGroupId: i.id,
            branch_key: a,
            ...Z_()
          });
          let r = i.sourceChunks.map(e => e.displayNode);
          let s = i.branchChunks.map(e => e.displayNode);
          let {
            imagesByNodeId: _imagesByNodeId,
            aliasVariableCache: _aliasVariableCache
          } = rk(mainGuidsToAlwaysApplyToGenerateImages.concat(extraGuidsToApplyToGenerateMainImageFromDiff), branchGuidsToAlwaysApplyToGenerateImages, i.sourceChunks.map(e => ({
            id: sessionLocalIDToString(e.displayNode.guid),
            isStyle: void 0 !== e.displayNode.styleType
          })), r);
          logInfo('Branching', 'Generating conflict images', {
            conflictGroup: i.id,
            type: 'branch'
          });
          let {
            imagesByNodeId,
            aliasVariableCache
          } = rk(mainGuidsToAlwaysApplyToGenerateImages, branchGuidsToAlwaysApplyToGenerateImages.concat(extraGuidsToApplyToGenerateBranchImageFromConflictDiff), i.branchChunks.map(e => ({
            id: sessionLocalIDToString(e.displayNode.guid),
            isStyle: void 0 !== e.displayNode.styleType && e.displayNode.styleType !== 'NONE'
          })), s);
          n.current = i.id;
          o({
            status: 'loaded',
            mainImages: _imagesByNodeId,
            branchImages: imagesByNodeId,
            mainAliasCache: _aliasVariableCache,
            branchAliasCache: aliasVariableCache
          });
          trackEventAnalytics('Conflict Image Generation finished', {
            branchModalTrackingId: h,
            numChunks: t,
            conflictGroupId: i.id,
            durationMs: Date.now() - e,
            branch_key: a,
            ...Z_()
          });
        } catch (e) {
          e instanceof rY.InvalidStateTransitionError ? s.status === 'loading' && s.timer && clearTimeout(s.timer) : o({
            status: 'error',
            error: e
          });
        }
      }, 0);
      o({
        status: 'loading',
        id: i.id,
        timer: e
      });
    }, [mainGuidsToAlwaysApplyToGenerateImages, extraGuidsToApplyToGenerateMainImageFromDiff, branchGuidsToAlwaysApplyToGenerateImages, extraGuidsToApplyToGenerateBranchImageFromConflictDiff, i, n, s, l, h, a]);
    return s;
  }(conflictDetection, picks, M, j, e.branchKey);
  V.status === 'error' && B(V.error);
  let [z, W] = useAtomValueAndSetter(nO);
  useEffect(() => {
    z === 'loading' && V.status === 'loaded' && W('loaded');
  }, [z, W, V]);
  let K = useCallback(e => {
    e >= S.length ? O(0) : e < 0 ? O(S.length - 1) : O(e);
  }, [S, O]);
  let Y = useCallback(e => {
    K(S.findIndex(t => t.id === e.id));
  }, [S, K]);
  let q = useCallback(e => {
    P(e);
    e[1].includes(M) || K(S.findIndex(t => t.id === e[1][0].id));
  }, [P, M, K, S]);
  let Z = useCallback(() => {
    let e = (w + 1) % S.length;
    let t = S[e];
    for (; e !== w && picks[t.id];) {
      e = (e + 1) % S.length;
      t = S[e];
    }
    O(e);
  }, [w, S, picks, O]);
  let X = useCallback(() => {
    K(w + 1);
  }, [K, w]);
  let Q = useCallback(() => {
    K(w - 1);
  }, [K, w]);
  function J(e, t) {
    choosePicks([{
      group: e,
      choice: t
    }]);
    Z();
  }
  if (useEffect(() => {
    let e = e => {
      if (!document.activeElement) return;
      let t = !0;
      switch (e.keyCode) {
        case KeyCodes.UP_ARROW:
          Q();
          break;
        case KeyCodes.DOWN_ARROW:
          X();
          break;
        default:
          t = !1;
      }
      t && (e.preventDefault(), e.stopPropagation());
    };
    document.addEventListener('keydown', e);
    return () => document.removeEventListener('keydown', e);
  }, [X, Q]), U) {
    throw U;
  }
  return jsxs('div', {
    className: 'conflict_resolution--grid--u5JPY',
    children: [jsx(rb, {
      conflictGroups,
      picks,
      setAllPicks(e) {
        choosePicks(conflictGroups.map(t => ({
          group: t,
          choice: e
        })));
        j.current = null;
      },
      viewOnly
    }), jsx(rs, {
      branchName: e.branchName,
      choice: picks[M.id],
      chooseForConflict: J,
      fileName: e.fileName,
      group: M
    }), jsxs(TrackingProvider, {
      name: _$$e2.BRANCHING_CONFLICT_GROUP,
      properties: {
        conflictGroup: M.id,
        conflictGroupIdx: w,
        conflictGroupCount: conflictGroups.length
      },
      children: [jsx(rv, {
        conflictGroupSections: x,
        picks,
        selectedConflict: M,
        selectConflict: Y,
        selectedSection: N,
        setSelectedSection: q
      }), jsx(ro, {
        branchAliasCache: V.status === 'loaded' ? V.branchAliasCache : {},
        branchImages: V.status === 'loaded' ? V.branchImages : {},
        branchName: e.branchName,
        choice: picks[M.id],
        chooseForConflict: J,
        fileName: e.fileName,
        group: M,
        loadingImages: V.status === 'loading',
        mainAliasCache: V.status === 'loaded' ? V.mainAliasCache : {},
        mainImages: V.status === 'loaded' ? V.mainImages : {},
        showOptions: !1
      }), jsx(rl, {
        branchName: e.branchName,
        choice: picks[M.id],
        chooseForConflict: J,
        fileName: e.fileName,
        group: M,
        showOptions: !1,
        viewOnly
      })]
    }), !viewOnly && jsx('div', {
      className: 'conflict_resolution--sidebarFooter--be5Kq conflict_resolution--sidebarBorder--6T7B7',
      children: pickedAllFromBranch && !hasNonConflictDisplayGroups ? jsx(ButtonWide, {
        onClick(i) {
          if (!D) {
            L(!0);
            try {
              _l();
              let {
                nonConflictingSourceChunkGUIDs,
                nonConflictingBranchChunkGUIDs,
                identicalChunkGUIDs
              } = conflictDetection;
              Ur(nonConflictingSourceChunkGUIDs, branchPickGUIDs.concat(nonConflictingBranchChunkGUIDs).concat(identicalChunkGUIDs), PreviewStage.STAGE);
              e.onSubmit(i);
            } catch (e) {
              B(new CustomCauseError('Failed to set all picks from branch', {
                cause: e
              }));
            }
          }
        },
        disabled: viewOnly || D,
        children: renderI18nText('collaboration.branching_from_source.confirm_picks')
      }) : jsx(ButtonWide, {
        onClick: e.completeResolution,
        disabled: !e.hasPicksForAll || D,
        children: renderI18nText('collaboration.branching_from_source.next')
      })
    })]
  });
});
let rN = memo(e => {
  let {
    conflictDetection,
    isConflictDetectionLoading,
    checkpointDiff,
    displayGroups,
    modalCloseIntent
  } = e;
  let [d, c] = useState({});
  let [u, p] = useState(!1);
  let f = useMemo(() => (conflictDetection?.conflictGroups || []).every(e => !!d[e.id]), [conflictDetection, d]);
  let _ = useMemo(() => !checkpointDiff || !!isConflictDetectionLoading || conflictDetection && conflictDetection.conflictGroups.length > 0 && !u, [conflictDetection, u, isConflictDetectionLoading, checkpointDiff]);
  let A = useMemo(() => _$$tF(displayGroups ?? [], conflictDetection?.conflictGroups || [], conflictDetection?.identicalChunkGUIDs || []), [displayGroups, conflictDetection]);
  let y = getFeatureFlags().branching_and_merging_debug ?? !1;
  useLayoutEffect(() => {
    modalCloseIntent && conflictDetection && conflictDetection.conflictGroups.length > 0 && !u && trackEventAnalytics('Exit Conflict Resolution Early', {
      branchFileKey: e.branch.key,
      sourceFileKey: e.branch.source_file_key,
      fileRepoId: e.branch.file_repo_id,
      numConflicts: conflictDetection.conflictGroups.length
    });
  }, [modalCloseIntent]);
  let b = useContext(ss);
  let [v, I] = useAtomValueAndSetter(nO);
  useEffect(() => (I('loading'), () => I('off')), [I]);
  _$$tW({
    isDoneLoading: v === 'loaded',
    direction: SourceDirection.FROM_SOURCE,
    branchFileKey: e.branch.key,
    sourceFileKey: e.branch.source_file_key,
    fileRepoId: e.branch.file_repo_id,
    displayGroups: displayGroups ?? [],
    conflictGroups: conflictDetection?.conflictGroups || [],
    modalCloseIntent,
    branchModalTrackingId: b,
    entryPointDirection: e.entryPointDirection || SourceDirection.FROM_SOURCE
  });
  let x = _$$$n();
  let S = useAtomWithSubscription(_$$eE);
  let w = useSelector(e => e.mirror.appModel.topLevelMode);
  let C = useSelector(e => e.mirror.appModel.multiplayerSessionState);
  useEffect(() => {
    if (!y) return;
    let e = 'BranchPermissionsDebugger';
    window[e] = {
      logPermissions() {
        console.log(x);
      }
    };
    return () => {
      window[e] = void 0;
    };
  }, [x, y]);
  let k = x.updateBranch.status !== 'enabled';
  let [O, D] = useState(!1);
  if (useEffect(() => {
    getFeatureFlags().branching_view_only_error && k && conflictDetection && conflictDetection.conflictGroups.length > 0 && !O && (handleModalError(new Error('From source modal opened with view-only permissions'), {
      updateBranchStatus: x.updateBranch.status,
      updateBranchReason: x.updateBranch.reason,
      memoryWarningLevel: Wy[S],
      topLevelMode: ViewType[w],
      multiplayerSessionState: SchemaJoinStatus[C],
      conflictCount: conflictDetection.conflictGroups.length
    }), analyticsEventManager.trackDefinedEvent('scenegraph_and_sync.branching.conflict_resolution_blocked', {
      reason: x.updateBranch.reason,
      status: x.updateBranch.status,
      multiplayerSessionState: SchemaJoinStatus[C],
      conflictCount: conflictDetection.conflictGroups.length
    }), D(!0));
  }, [k, x, S, w, C, conflictDetection, O]), !checkpointDiff || isConflictDetectionLoading || !conflictDetection) {
    return jsx(qj, {
      children: jsx('div', {
        className: _$$FD,
        children: jsx(_$$G, {
          hasLoadedConflictDetection: !isConflictDetectionLoading,
          hasLoadedDiffs: !!checkpointDiff
        })
      })
    });
  }
  let [L, F] = iZ()(conflictDetection?.conflictGroups || [], e => d[e.id] === BranchType.BRANCH);
  let M = nN()(L, e => ue(e, BranchType.BRANCH));
  let j = new Set(nN()(F, e => ue(e, BranchType.MAIN)));
  let U = (displayGroups ?? []).filter(e => j.has(sessionLocalIDToString(e.mainChunk.displayNode.guid)));
  let B = L.length === (conflictDetection?.conflictGroups || []).length;
  let V = {
    direction: SourceDirection.FROM_SOURCE
  };
  let z = {
    fileKey: e.branch.key,
    fileRepoId: e.repo.id
  };
  return _ ? jsx(qj, {
    children: jsx(wy, {
      children: jsx(TrackingProvider, {
        name: _$$e2.BRANCHING_CONFLICT_RESOLUTION_MODAL,
        properties: {
          ...z,
          ...V
        },
        children: jsx(rR, {
          branchKey: e.branch?.key,
          branchName: e.branch?.name,
          branchPickGUIDs: M,
          choosePicks(e) {
            let t = {};
            e.forEach(e => {
              t[e.group.id] = e.choice;
            });
            c(e => ({
              ...e,
              ...t
            }));
          },
          completeResolution() {
            b_();
            p(!0);
          },
          conflictDetection,
          fileName: e.repo?.name,
          hasNonConflictDisplayGroups: A.length > 0,
          hasPicksForAll: f,
          onSubmit: e.onSubmit({
            pendingMessage: getI18nString('collaboration.branching_from_source.keeping_changes_on_branch'),
            successMessage: getI18nString('collaboration.branching_from_source.changes_kept'),
            checkpointDiff,
            conflictResolutionDetails: {
              branchPickGroups: L.length,
              mainPickGroups: F.length,
              nonConflictingGroups: A.length
            }
          }),
          pickedAllFromBranch: B,
          picks: d,
          styleKeyToFileKey: e.styleKeyToFileKey ?? {},
          styleKeyToLibraryKey: e.styleKeyToLibraryKey ?? {},
          viewOnly: k
        })
      })
    })
  }) : jsx(TrackingProvider, {
    name: _$$e2.BRANCHING_UPDATE_FROM_MAIN_MODAL,
    properties: {
      ...z,
      ...V
    },
    children: jsx(nF, {
      applyChanges: e.onSubmit({
        pendingMessage: getI18nString('collaboration.branching_from_source.applying_changes_from_main_file'),
        successMessage: getI18nString('collaboration.branching_from_source.changes_applied'),
        checkpointDiff,
        conflictResolutionDetails: {
          branchPickGroups: L.length,
          mainPickGroups: F.length,
          nonConflictingGroups: A.length
        }
      }),
      branchKey: e.branch.key,
      branchPickGUIDs: M,
      checkpointDiffKey: checkpointDiff.key,
      conflictDetection,
      didResolveConflicts: F.length > 0 || L.length > 0,
      fromCheckpointKey: checkpointDiff.from_checkpoint_key,
      mainPickDisplayGroups: U,
      mainPickGUIDs: Array.from(j),
      nonConflictDisplayGroups: A,
      pickedAllFromBranch: B,
      sourceKey: e.branch.source_file_key,
      styleKeyToFileKey: e.styleKeyToFileKey ?? {},
      styleKeyToLibraryKey: e.styleKeyToLibraryKey ?? {},
      uncompleteResolution() {
        b_();
        p(!1);
      },
      viewOnly: k
    })
  });
});
let rP = (e, t) => {
  let i = t.mergeBranch.status === 'enabled';
  let n = t.updateBranch.status === 'enabled';
  if (!i && !n || !e) return !1;
  let r = e.buggedConflictingGUIDs.sort() || [];
  let a = e.identicalChunkGUIDs.sort() || [];
  let o = deepEqual(r, a);
  return r.length > 0 && !o;
};
function rO({
  mergeDirection: e,
  sourceCheckpointKey: t,
  onClose: i,
  children: a,
  preventUserClose: s
}) {
  let o = useModalManager({
    open: !0,
    onClose: i,
    preventUserClose: s
  });
  let u = useMemo(() => {
    switch (e) {
      case SourceDirection.TO_SOURCE:
        return renderI18nText('collaboration.branching_merge_modal.title_merge_to_source');
      case SourceDirection.FROM_SOURCE:
        if (t != null) return renderI18nText('collaboration.branching_merge_modal.title_merge_from_source_version');
        return renderI18nText('collaboration.branching_merge_modal.title_merge_from_source');
    }
  }, [e, t]);
  return jsx(ModalRootComponent, {
    width: 1056,
    height: 'fixed',
    manager: o,
    children: jsxs(DialogContents, {
      children: [jsx(DialogHeader, {
        children: jsx(DialogTitle, {
          children: u
        })
      }), jsx(DialogBody, {
        padding: 0,
        children: jsx('div', {
          className: jT,
          children: jsx('div', {
            className: _$$Hb,
            children: a
          })
        })
      })]
    })
  });
}
function rD(e) {
  let t = useErrorBoundaryContext();
  _$$h(() => {
    let i = {
      direction: e.mergeDirection,
      branchKey: e.branchKey,
      branchModalTrackingId: e.branchModalTrackingId,
      error: t.error?.message
    };
    logError('branching', 'Branching Error Modal Shown', i);
    trackEventAnalytics('Branching Error Modal Shown', i, {
      forwardToDatadog: !0
    });
  });
  return jsx(rO, {
    mergeDirection: e.mergeDirection,
    sourceCheckpointKey: e.sourceCheckpointKey,
    onClose: lQ,
    preventUserClose: !0,
    children: jsx(wy, {
      children: jsxs('div', {
        className: oW,
        children: [jsx('div', {
          className: v2,
          children: e.mergeDirection === SourceDirection.FROM_SOURCE ? renderI18nText('collaboration.branching_merge_modal.unexpected_error_from_source') : renderI18nText('collaboration.branching_merge_modal.unexpected_error_to_source')
        }), jsx('div', {
          className: rU,
          children: renderI18nText('collaboration.branching_merge_modal.for_help_please_contact_figma_support', {
            supportEmailLink: jsx(Link, {
              href: `mailto:${getSupportEmail()}`,
              newTab: !0,
              children: renderI18nText('collaboration.branching_merge_modal.figma_support')
            })
          })
        }), jsx('div', {
          className: kd,
          children: jsx(Button, {
            variant: 'primary',
            onClick: () => customHistory.reload('cannot parse diff'),
            children: renderI18nText('collaboration.branching_merge_modal.refresh_required_action')
          })
        })]
      })
    })
  });
}
let rL = 0;
function rF(e) {
  let t = useSelector(e => e.fileVersion);
  let i = useSelector(e => e.currentUserOrgId);
  let s = useDispatch();
  let o = useContext(ss);
  let [l, d] = useState(null);
  let [c, u] = useState(!1);
  let [p, h] = useState(!1);
  let {
    diffInfo: _diffInfo,
    error: _error
  } = YH(GitReferenceType.BRANCH, e.branchKey, e.sourceKey, e.direction, t, i, e.sourceCheckpointKey ?? null);
  if (_error) throw _error;
  let {
    diffInfo,
    error
  } = YH(GitReferenceType.SOURCE, e.branchKey, e.sourceKey, e.direction, t, i, e.sourceCheckpointKey ?? null);
  if (error) throw error;
  useEffect(() => {
    (async function () {
      _diffInfo.displayGroups !== null && diffInfo.displayGroups !== null && (await enterPreviewDetachedState(o, e.direction), h(!0));
    })();
  }, [_diffInfo.displayGroups, diffInfo.displayGroups, o, e.direction]);
  useEffect(() => {
    setHeapMemoryMode(DocumentMode.MERGE_MODAL);
  }, []);
  useEffect(() => {
    if (!c && diffInfo.styleKeyToLibraryKey != null && _diffInfo.styleKeyToLibraryKey != null && l == null && p) {
      let t = e.sourceKey;
      let i = e.branchKey;
      u(!0);
      try {
        let e = rY.getConflicts({
          branchKey: i,
          sourceKey: t,
          branchModalTrackingId: o
        });
        d(e);
        u(!1);
      } catch (e) {
        handleModalError(e);
        s(VisualBellActions.enqueue({
          message: 'An error occurred while calculating conflicts',
          error: !0
        }));
      }
    }
  }, [diffInfo.styleKeyToLibraryKey, _diffInfo.styleKeyToLibraryKey, l, c, s, e.branchKey, e.sourceKey, o, e.direction, p]);
  return jsx(rM, {
    sourceDiffInfo: p ? diffInfo : {
      displayGroups: null,
      styleKeyToFileKey: null,
      styleKeyToLibraryKey: null,
      checkpointDiff: null
    },
    branchDiffInfo: p ? _diffInfo : {
      displayGroups: null,
      styleKeyToFileKey: null,
      styleKeyToLibraryKey: null,
      checkpointDiff: null
    },
    conflictDetectionInfo: p ? l : null,
    branchKey: e.branchKey,
    sourceKey: e.sourceKey,
    direction: e.direction,
    backFileKey: e.backFileKey,
    sourceCheckpointKey: e.sourceCheckpointKey,
    unreadCommentCount: e.unreadCommentCount
  });
}
function rM(e) {
  let t;
  let i = useDispatch();
  let [s, o] = useAtomValueAndSetter(currentSelectionAtom);
  let l = s ?? e.direction;
  _$$h(() => (o(e.direction), () => o(null)));
  let d = e.direction;
  let [c, u] = useState(null);
  let [g, f] = useState(!1);
  let A = useSelector(selectOpenFile);
  let I = A?.key || null;
  let S = selectCurrentUser();
  let D = useSelector(e => e.roles);
  let L = useSubscription(BranchOpenMergeRequest, {
    branchFileKey: e.branchKey
  });
  let F = L.status === 'loaded' ? L.data.file?.openMergeRequest ?? null : null;
  let W = L.status === 'loaded' ? L.data.file?.fileMerges?.find(e => !!e.mergeResultCheckpointId && e.direction === 0) ?? null : null;
  let K = F ? F.mergeRequest : W ? W.mergeRequest : null;
  let Y = A?.fileRepoId;
  let q = S?.id;
  let X = q && Y && D.byRepoId[Y]?.[q];
  let Q = !!(X && X.level > AccessLevelEnum.VIEWER);
  let J = useSelector(e => e.mirror.appModel.topLevelMode);
  let ee = _$$$n();
  let et = useRef(!0);
  useEffect(() => {
    et.current ? et.current = !1 : em();
  }, [I]);
  useEffect(() => {
    i(notificationActions.clearAll());
  }, [i]);
  useEffect(() => {
    K && i(selectViewAction({
      view: 'fullscreen',
      editorType: FEditorType.Design,
      fileKey: e.branchKey,
      reviewNumber: K.reviewNumber ?? void 0
    }));
  }, [i, e.branchKey, K]);
  useEffect(() => {
    J === ViewType.BRANCHING || c || u({
      navigationKey: null,
      reason: 'not_in_branching_mode'
    });
  }, [J, c]);
  let ei = Xr(isActiveAtom);
  useEffect(() => (ei(!0), setTagGlobal('bm.isMergeModalOpen', !0), () => {
    ei(!1);
    setTagGlobal('bm.isMergeModalOpen', void 0);
  }), [ei]);
  let en = e.sourceDiffInfo.checkpointDiff || null;
  let er = e.sourceDiffInfo.displayGroups || null;
  let ea = e.sourceDiffInfo.styleKeyToFileKey || null;
  let es = e.sourceDiffInfo.styleKeyToLibraryKey || null;
  let eo = e.branchDiffInfo.checkpointDiff || null;
  let el = e.branchDiffInfo.displayGroups || null;
  let ed = e.branchDiffInfo.styleKeyToFileKey || null;
  let ec = e.branchDiffInfo.styleKeyToLibraryKey || null;
  let eu = e.conflictDetectionInfo;
  let ep = eu === null;
  useEffect(() => {
    en && l === SourceDirection.FROM_SOURCE && en.to_checkpoint_key === en.from_checkpoint_key && handleModalError(new Error('No changes from main'));
  }, [en, l]);
  (function (e, t, i, n, a) {
    let s = getFeatureFlags().internal_only_debug_tools ?? !1;
    let o = useContext(ss);
    useEffect(() => {
      if (s) {
        window[nC] = {
          getBranchChunks: e => {
            let t = rY.getChunks(GitReferenceType.BRANCH).map(e => ({
              ...e,
              phaseString: LibraryUpdateStatus[e.phase],
              diffTypeString: GitReferenceType[e.diffType]
            }));
            return e ? nT(e, t) : t;
          },
          getSourceChunks: e => {
            let t = rY.getChunks(GitReferenceType.SOURCE).map(e => ({
              ...e,
              phaseString: LibraryUpdateStatus[e.phase],
              diffTypeString: GitReferenceType[e.diffType]
            }));
            return e ? nT(e, t) : t;
          },
          getBranchDisplayGroups: e => e ? nk(e, a) : a,
          getSourceDisplayGroups: e => e ? nk(e, n) : n,
          getConflicts: () => i,
          getConflictGroups: e => {
            let t = i?.conflictGroups || [];
            return e ? t.find(t => t.sourceChunks.find(t => sessionLocalIDToString(t.displayNode.guid) === e) || t.branchChunks.find(t => sessionLocalIDToString(t.displayNode.guid) === e) || t.secondaryBranchChunkGUIDs.find(t => t === e) || t.secondarySourceChunkGUIDs.find(t => t === e)) : t;
          }
        };
        return () => window[nC] = void 0;
      }
    }, [a, n, i, s, e, t, o]);
  })(e.branchKey, e.sourceKey, eu, er, el);
  useEffect(() => {
    if (!c) return;
    let t = e.branchKey;
    let n = e.sourceKey;
    i(ov({
      hideModal: !0,
      mergeParams: {
        branchKey: t,
        sourceKey: n,
        direction: l,
        branchModalTrackingId: rL
      },
      userInitiated: !0,
      reason: c.reason
    }));
    c.navigationKey && c.navigationKey !== I ? i(selectViewAction({
      view: 'fullscreen',
      fileKey: c.navigationKey,
      editorType: FEditorType.Design
    })) : i(selectViewAction({
      view: 'fullscreen',
      editorType: FEditorType.Design,
      fileKey: e.branchKey,
      reviewNumber: void 0
    }));
  }, [i, c]);
  let em = useCallback((e, t) => {
    c || u({
      navigationKey: e,
      reason: t || 'unknown_reason'
    });
  }, [c]);
  let eh = liveStoreInstance.useFile(e.branchKey).data;
  let eg = useSelector(e => {
    let t = eh?.file_repo_id;
    if (t) return t in e.repos ? e.repos[t] : void 0;
  });
  let ef = liveStoreInstance.useFile(eg?.default_file_key).data;
  if (!eg || !eh || !ef) {
    logError('branching', 'Unable to get file data', {
      repo: !!eg,
      branch: !!eh,
      source: !!ef
    });
    return new Error('Unable to get file data');
  }
  let e_ = useCallback(() => {
    b_();
    o(SourceDirection.FROM_SOURCE);
    rY.updateBranchingStagerDirection(SourceDirection.FROM_SOURCE);
  }, [o]);
  let ey = useCallback(t => n => {
    let {
      pendingMessage,
      successMessage,
      checkpointDiff,
      conflictResolutionDetails
    } = t;
    if (g || !checkpointDiff) return;
    f(!0);
    let d = {
      branchKey: e.branchKey,
      sourceKey: e.sourceKey,
      toCheckpointKey: checkpointDiff?.to_checkpoint_key,
      fromCheckpointKey: checkpointDiff?.from_checkpoint_key,
      direction: l
    };
    n.preventDefault();
    i(S2({
      mergeParams: d,
      checkpointDiff,
      pendingMessage,
      successMessage,
      conflictResolutionDetails,
      user: S,
      branchModalTrackingId: rL
    }));
  }, [i, l, e.branchKey, e.sourceKey, g, S]);
  let eb = useCallback(() => {
    em(e.backFileKey, 'user_closed_modal');
  }, [em, e.backFileKey]);
  let ev = rP(eu, ee);
  let eI = l === SourceDirection.TO_SOURCE ? renderI18nText('collaboration.branching_merge_modal.banner_review_conflicts') : renderI18nText('collaboration.branching_merge_modal.banner_resolve_conflicts');
  return jsxs(rO, {
    mergeDirection: l,
    sourceCheckpointKey: e.sourceCheckpointKey,
    onClose: eb,
    children: [ev && jsx(TrackingProvider, {
      name: _$$e2.BRANCHING_CONFLICTING_GUIDS_BUG,
      properties: {
        fileKey: eh.key,
        fileRepoId: eh.file_repo_id,
        numToRemap: eu?.buggedConflictingGUIDs.length
      },
      children: jsx(tK, {
        isLoading: ep,
        text: eI,
        button: l === SourceDirection.TO_SOURCE ? (t = renderI18nText('collaboration.branching_merge_modal.button_review_conflicts'), jsx('div', {
          className: tV,
          children: jsx(Button, {
            onClick: e_,
            children: t
          })
        })) : jsx(Fragment, {})
      })
    }), l === SourceDirection.TO_SOURCE && jsx(nw, {
      branch: eh,
      checkpointDiff: eo,
      conflictGroups: eu?.conflictGroups ?? null,
      displayGroups: el,
      fileMerge: W,
      hasDuplicateConflictingGuids: ev,
      hasSourceDiffLoaded: !!en,
      isConflictDetectionLoading: ep,
      isEditorOnRepo: Q,
      isMergeBlocked: eu?.isMergeRequired || !1,
      mergeRequest: K,
      modalCloseIntent: c,
      onCloseModal: eb,
      onSubmit: ey,
      onSwitchToUpdateFromMain: e_,
      openFile: em,
      openFileKey: I,
      openMergeRequest: F,
      repo: eg,
      source: ef,
      styleKeyToFileKey: ed,
      styleKeyToLibraryKey: ec,
      unreadCommentCount: e.unreadCommentCount
    }), l === SourceDirection.FROM_SOURCE && jsx(rN, {
      branch: eh,
      checkpointDiff: en,
      conflictDetection: eu,
      displayGroups: er,
      entryPointDirection: d,
      isConflictDetectionLoading: ep,
      modalCloseIntent: c,
      onSubmit: ey,
      repo: eg,
      styleKeyToFileKey: ea,
      styleKeyToLibraryKey: es
    })]
  });
}
export let $$rj0 = registerModal(e => {
  _$$h(() => (trackEventAnalytics('Branch Modal Opened', {
    branchKey: e.branchKey,
    sourceKey: e.sourceKey,
    direction: e.direction,
    branchModalTrackingId: rL,
    read_only: e.readOnly,
    ...Z_()
  }), () => {
    rL++;
  }));
  return jsx(ss.Provider, {
    value: rL,
    children: jsx(ErrorBoundaryCrash, {
      fallback: jsx(rD, {
        mergeDirection: e.direction,
        sourceCheckpointKey: e.sourceCheckpointKey,
        branchKey: e.branchKey,
        branchModalTrackingId: rL
      }),
      boundaryKey: 'BranchMergeModalInner',
      sentryTags: {
        'bm.branchingFailureType': CPPEventType.UNHANDLED
      },
      children: jsx(rF, {
        ...e
      })
    })
  });
}, 'BranchMergeModalWithDeferredConflicts', ModalSupportsBackground.YES);
export const $l = $$rj0;