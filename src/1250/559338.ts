import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useCallback, useRef, useEffect, useState } from "react";
import { useSelector, useDispatch, useStore } from "react-redux";
import { K } from "../905/443068";
import { LayoutTabType, FullscreenPerfMetrics, AppStateTsApi, CorePerfInfo } from "../figma_app/763686";
import { atom, useAtomWithSubscription, useAtomValueAndSetter } from "../figma_app/27355";
import { trackEventAnalytics } from "../905/449184";
import { customHistory } from "../905/612521";
import { F } from "../905/680873";
import { SvgComponent } from "../905/714743";
import { Ih } from "../figma_app/617427";
import { o as _$$o } from "../905/160095";
import { renderI18nText, getI18nString } from "../905/303541";
import { selectViewAction } from "../905/929976";
import { getSelectedEditorType } from "../figma_app/976749";
import { TY, Ht } from "../figma_app/701001";
import { Wy, xk, P3, Zz, Tm, Vu, eE, pl, im } from "../figma_app/952446";
import { setupRemovableAtomFamily } from "../figma_app/615482";
import { FEditorType } from "../figma_app/53721";
import { $w } from "../figma_app/453508";
import { hideModal, showModalHandler } from "../905/156213";
import { gG } from "../905/684180";
import { A as _$$A } from "../6828/7452";
import { A as _$$A2 } from "../5724/965092";
import { A as _$$A3 } from "../svg/193428";
import { A as _$$A4 } from "../svg/945453";
import { A as _$$A5 } from "../svg/57540";
import { A as _$$A6 } from "../svg/821527";
let k = "memory_warning--memoryUsageContainer--CWdMy";
function O(e) {
  let t;
  let n;
  let r;
  let o;
  let l;
  let d = useSelector(e => !e.openFile?.canEdit);
  let c = TY();
  let _ = useSelector(e => e.mirror.appModel.activeCanvasEditModeType === LayoutTabType.HISTORY && e.versionHistory.activeId && "current_version" !== e.versionHistory.activeId);
  let m = e.warningLevel;
  m === Wy.WARNING ? (l = renderI18nText("fullscreen.pages_panel.memory_usage_try_removing_unneeded_content"), c ? l = renderI18nText("fullscreen.pages_panel.memory_usage_recovery_mode_high_content") : d && !_ ? l = renderI18nText("fullscreen.pages_panel.memory_usage_warning_edit_access_needed") : d && _ ? l = renderI18nText("fullscreen.pages_panel.memory_usage_read_only_view_version_history") : !d && _ && (l = renderI18nText("fullscreen.pages_panel.memory_usage_warning_edit_view_version_history"))) : m === Wy.ERROR ? (l = renderI18nText("fullscreen.pages_panel.memory_usage_to_avoid_losing_file_access"), c ? l = renderI18nText("fullscreen.pages_panel.memory_usage_recovery_mode_high_content") : d && !_ ? l = renderI18nText("fullscreen.pages_panel.memory_usage_error_contact_file_owner") : d && _ ? l = renderI18nText("fullscreen.pages_panel.memory_usage_read_only_view_version_history") : !d && _ && (l = renderI18nText("fullscreen.pages_panel.memory_usage_error_edit_view_version_history"))) : m === Wy.SAFE && e.hasHadUnsafeWarningLevel && (l = renderI18nText("fullscreen.pages_panel.memory_usage_this_file_has_enough_memory"), c && (l = renderI18nText("fullscreen.pages_panel.memory_usage_recovery_mode_low_content")));
  let f = l;
  if (m === Wy.WARNING) {
    t = "memory_warning--warningMemoryContentContainerWarning--SUOy5 memory_warning--warningMemoryContentContainer--xajq3";
    n = "memory_warning--memoryWarningContentIconWarning--7lQhY";
    r = c ? _$$A4 : _$$A2;
    o = c ? renderI18nText("fullscreen.pages_panel.memory_usage_recovery_mode_high") : renderI18nText("fullscreen.pages_panel.memory_usage_memory_running_low");
  } else if (m === Wy.ERROR) {
    t = "memory_warning--warningMemoryContentContainerError---AmhI memory_warning--warningMemoryContentContainer--xajq3";
    n = "memory_warning--memoryWarningContentIconError--iWcmQ";
    r = c ? _$$A4 : _$$A5;
    o = c ? renderI18nText("fullscreen.pages_panel.memory_usage_recovery_mode_high") : renderI18nText("fullscreen.pages_panel.memory_usage_almost_out_of_memory");
  } else {
    if (m !== Wy.SAFE || !e.hasHadUnsafeWarningLevel) return null;
    t = "memory_warning--warningMemoryContentContainerSafe--KUmYN memory_warning--warningMemoryContentContainer--xajq3";
    n = "memory_warning--memoryWarningContentIconSafe--BHw5o";
    r = _$$A;
    o = c ? renderI18nText("fullscreen.pages_panel.memory_usage_recovery_mode_low") : renderI18nText("fullscreen.pages_panel.memory_usage_youre_good_to_go");
  }
  return jsx("div", {
    className: "memory_warning--memoryWarningContentBetaContainer--xcDgj",
    children: jsxs("div", {
      className: t,
      children: [jsx("div", {
        className: "memory_warning--memoryWarningContentIconContainer--CeqsI",
        children: jsx(SvgComponent, {
          className: n,
          svg: r
        })
      }), jsxs("div", {
        className: "memory_warning--memoryWarningContentBodyHeader--HRmSt",
        children: [jsx("div", {
          className: "memory_warning--memoryWarningContentHeader--b9El-",
          children: o
        }), jsxs("p", {
          children: [f, " ", (m === Wy.ERROR || m === Wy.WARNING) && jsx(_$$o, {
            newTab: !0,
            className: m === Wy.ERROR ? "memory_warning--learnMoreLinkError--JsmPQ" : "memory_warning--learnMoreLinkWarning--AHB-S",
            href: "https://help.figma.com/hc/articles/360040528173-Reduce-memory-usage-in-files",
            trusted: !1,
            trackingEventName: "memory_warning_learn_more_clicked",
            children: renderI18nText("fullscreen.pages_panel.memory_usage_learn_more")
          })]
        })]
      })]
    })
  });
}
export function $$R0(e) {
  let t = e.showSidePercentage;
  let n = e.warningLevel && e.warningLevel >= Wy.ERROR;
  return jsxs(Fragment, {
    children: [jsxs("div", {
      className: "memory_warning--usageBarContainer--F67OB",
      children: [jsx(SvgComponent, {
        style: {
          left: `${xk}%`
        },
        className: "memory_warning--icon--HcqCK",
        svg: _$$A3
      }), jsx("div", {
        className: t && n ? "memory_warning--usageBarBorderDanger--3tbol memory_warning--usageBarBorder--RmhaH" : "memory_warning--usageBarBorder--RmhaH",
        children: jsx("div", {
          className: t && n ? "memory_warning--usageBarFillDanger--Ew9Tl memory_warning--usageBarFill--ximmI" : "memory_warning--usageBarFill--ximmI",
          style: {
            width: `${e.memoryUsagePercent}%`
          }
        })
      })]
    }), t && jsx("div", {
      className: n ? "memory_warning--usageBarTextDanger--d9-gr memory_warning--usageBarText--6Z1O9" : "memory_warning--usageBarText--6Z1O9",
      children: `${Math.trunc(e.memoryUsagePercent).toString()}%`
    })]
  });
}
let M = setupRemovableAtomFamily(() => atom(Wy.SAFE));
export function $$P1(e) {
  let t = useDispatch();
  let {
    toggleManageMemoryModal,
    closeManageMemoryModal
  } = function () {
    let e = useSelector(e => e.modalShown?.type === gG.type);
    let t = useDispatch();
    let n = useCallback(() => {
      let n = P3();
      trackEventAnalytics("toggle_manage_memory_modal", {
        memoryUsedPercent: n,
        totalLayers: FullscreenPerfMetrics?.getFileNodeCount(),
        pageContentPct: n - Zz()
      });
      e ? t(hideModal()) : t(showModalHandler({
        type: gG,
        data: {
          markModalClosed: () => {}
        }
      }));
    }, [t, e]);
    let a = useCallback(() => {
      e && t(hideModal());
    }, [t, e]);
    let o = TY();
    let l = useRef(!1);
    useEffect(() => {
      !o || e || l.current || (l.current = !0, n(), AppStateTsApi?.uiState().showMemoryUsage.set(!0));
    }, [o, e, n]);
    return {
      toggleManageMemoryModal: n,
      closeManageMemoryModal: a
    };
  }();
  let c = useAtomWithSubscription(Tm);
  let u = useAtomWithSubscription(Vu);
  let m = useAtomWithSubscription(eE);
  let p = function ({
    warningLevel: e
  }) {
    let t = e !== Wy.SAFE;
    let [n, a] = useState(t);
    useEffect(() => {
      t && a(!0);
    }, [t]);
    return n;
  }({
    warningLevel: m
  });
  let g = getSelectedEditorType();
  let f = TY();
  let [y, v] = useState(f);
  !function ({
    warningLevel: e,
    usingTestMemory: t,
    memoryUsedPercent: n,
    fileKey: a
  }) {
    let [o, s] = useAtomValueAndSetter(M);
    let d = useStore();
    let c = F(() => {
      var t;
      var r;
      let i = d.getState();
      let o = !i.openFile?.canEdit;
      let s = i.mirror.appModel.topLevelMode;
      t = {
        warningEvent: "BANNER_LEVEL_CHANGE",
        fileKey: a
      };
      r = {
        warningLevel: Wy[e],
        memoryUsedPercent: n,
        topLevelMode: s,
        isReadOnly: o
      };
      $w(t, {
        warningOnPct: xk,
        errorOnPct: pl,
        ...r
      });
    });
    let u = e !== o && !t;
    useEffect(() => {
      u && (s(e), c.current());
    }, [e, u, s, c]);
  }({
    warningLevel: m,
    usingTestMemory: u,
    memoryUsedPercent: c,
    fileKey: e.fileKey
  });
  (function ({
    warningLevel: e,
    hasHadUnsafeWarningLevel: t
  }) {
    let n = e === Wy.SAFE && t;
    useEffect(() => {
      if (n) {
        let e = () => {
          "hidden" === document.visibilityState && (AppStateTsApi.uiState().showMemoryUsage.set(!1), document.removeEventListener("visibilitychange", e));
        };
        document.addEventListener("visibilitychange", e);
        return () => {
          document.removeEventListener("visibilitychange", e);
        };
      }
    }, [n]);
  })({
    warningLevel: m,
    hasHadUnsafeWarningLevel: p
  });
  (function ({
    warningLevel: e
  }) {
    useEffect(() => {
      let t = e !== Wy.SAFE;
      AppStateTsApi.uiState().showInFileMemoryPercentage.set(t);
      t && AppStateTsApi.uiState().showMemoryUsage.set(!0);
    }, [e]);
  })({
    warningLevel: m
  });
  let k = Ht();
  return k || f ? jsx(D, {
    closeManageMemoryModal,
    dispatch: t,
    editorType: g,
    fileKey: e.fileKey,
    hasHadUnsafeWarningLevel: p,
    memoryUsedPct: c,
    recoveryMemDisplay: y,
    setRecoveryMemDisplay: v,
    showMemoryUsage: k,
    toggleManageMemoryModal,
    warningLevel: m
  }) : null;
}
function D(e) {
  let t = t => {
    let n = {
      view: "fullscreen",
      editorType: t === FEditorType.Design ? FEditorType.Design : FEditorType.Whiteboard,
      fileKey: e.fileKey,
      isRecoveryMode: !1
    };
    trackEventAnalytics("exit_recovery_mode", {
      currentAllocatedBytes: CorePerfInfo?.getTotalUsedHeapMemory(),
      maxAllocatedBytes: CorePerfInfo?.getMaxUsedHeapMemory(),
      fileKey: e.fileKey
    });
    e.dispatch(selectViewAction(n));
    customHistory.reload("Memory warning panel");
  };
  let {
    warningLevel,
    hasHadUnsafeWarningLevel,
    memoryUsedPct,
    showMemoryUsage,
    editorType,
    recoveryMemDisplay
  } = e;
  let h = warningLevel === Wy.ERROR;
  let y = TY();
  return jsx(Fragment, {
    children: (showMemoryUsage || recoveryMemDisplay) && jsxs("div", {
      className: k,
      id: k,
      children: [jsxs("div", {
        className: "memory_warning--memoryUsageHeader--WNS5R",
        children: [jsx("div", {
          className: "memory_warning--memoryUsageHeaderTitle--65Nsp",
          children: renderI18nText("fullscreen.pages_panel.memory_usage")
        }), jsx("div", {
          className: "memory_warning--memoryUsageCloseIcon--6rw0p",
          children: !h && jsx(K, {
            "aria-label": getI18nString("common.close"),
            onClick: () => {
              trackEventAnalytics("manage_memory_modal_closed", {
                currentAllocatedBytes: CorePerfInfo?.getTotalUsedHeapMemory(),
                maxAllocatedBytes: CorePerfInfo?.getMaxUsedHeapMemory(),
                fileKey: e.fileKey
              });
              AppStateTsApi.uiState().showMemoryUsage.set(!1);
              AppStateTsApi.uiState().showInFileMemoryPercentage.set(!1);
              e.closeManageMemoryModal();
              e.setRecoveryMemDisplay(!1);
            },
            children: jsx(SvgComponent, {
              svg: _$$A6
            })
          })
        })]
      }), jsx("div", {
        className: h ? "memory_warning--memoryUsageBodyContainerError--6oxZX" : "memory_warning--memoryUsageBodyContainer--NE4lJ",
        children: jsx($$R0, {
          memoryUsagePercent: memoryUsedPct,
          showSidePercentage: !0,
          warningLevel
        })
      }), jsx(O, {
        warningLevel,
        hasHadUnsafeWarningLevel
      }), (() => {
        let t = getI18nString("manage_memory_modal.manage_memory_button");
        let n = () => {
          e.toggleManageMemoryModal();
        };
        return jsx("div", {
          className: "memory_warning--memoryWarningButtonContainer--GkcGB",
          children: jsx(Ih, {
            variant: "secondary",
            onClick: () => n(),
            trackingProperties: {
              buttonContext: t
            },
            children: t
          })
        });
      })(), y && memoryUsedPct < im && jsx("div", {
        className: showMemoryUsage ? "memory_warning--recoveryModeBannerExitButtonContainer--7A1pw" : "memory_warning--recoveryModeExitButtonContainer--Y21eB",
        children: jsx(Ih, {
          variant: "primary",
          onClick: () => t(editorType),
          children: renderI18nText("fullscreen.pages_panel.memory_usage_recovery_mode_exit")
        })
      })]
    })
  });
}
export const wc = $$R0;
export const QU = $$P1;