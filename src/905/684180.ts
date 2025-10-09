import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useEffect, useId } from "react";
import { useDispatch } from "react-redux";
import { Label } from "../905/270045";
import { IconButton } from "../905/443068";
import { v as _$$v } from "../905/442517";
import { Link } from "../905/438674";
import { B } from "../905/950875";
import { FullscreenPerfMetrics, AppStateTsApi } from "../figma_app/763686";
import { useAtomWithSubscription } from "../figma_app/27355";
import { trackEventAnalytics } from "../905/449184";
import { generateRecordingKey } from "../figma_app/878298";
import { Point } from "../905/736624";
import { RecordingScrollContainer } from "../905/347284";
import { getI18nString, renderI18nText } from "../905/303541";
import { styleBuilderInstance } from "../905/941192";
import { hideModal } from "../905/156213";
import { no } from "../figma_app/701001";
import { Tm, Zz, xk } from "../figma_app/952446";
import { useDeepEqualSceneValue } from "../figma_app/167249";
import { KindEnum } from "../905/129884";
import { registerModal } from "../905/102752";
import { GQ } from "../figma_app/32128";
import { DraggableModalManager } from "../905/748636";
function C(e) {
  let t = useDispatch<AppDispatch>();
  let i = GQ();
  let s = useAtomWithSubscription(Tm);
  let [o, l] = useState(() => Zz());
  let d = useDeepEqualSceneValue(() => FullscreenPerfMetrics?.getFileNodeCount() ?? 0);
  let c = no();
  let A = Math.max(s - o, 0);
  useEffect(() => {
    let e = setInterval(() => l(Zz()), 5e3);
    return () => clearInterval(e);
  }, []);
  return jsx(DraggableModalManager, {
    initialPosition: new Point(i + 2, 88),
    initialConstraints: {
      x: "left",
      y: "top"
    },
    title: getI18nString("manage_memory_modal.manage_memory_modal_title"),
    initialWidth: 320,
    minTopMargin: 40,
    recordingKey: generateRecordingKey("ManageMemoryModal", "modal"),
    dragHeaderOnly: !0,
    onClose: () => {
      t(hideModal());
      e.markModalClosed();
    },
    children: jsxs(RecordingScrollContainer, {
      scrollBarAlways: !1,
      className: "manage_memory--manageMemoryModal--gbZet",
      children: [jsx(k, {
        totalMemoryUsagePercent: s,
        importedMemoryUsagePercent: o,
        pageContentMemoryUsagePercent: A
      }), jsx(R, {
        totalMemoryUsagePercent: s,
        importedMemoryUsagePercent: o,
        pageContentMemoryUsagePercent: A,
        totalLayers: d,
        onToggle: () => {
          trackEventAnalytics("in_file_memory_usage_toggle", {
            new_status: !c,
            memory_used_percent: s
          });
          AppStateTsApi.uiState().showInFileMemoryPercentage.set(!c);
        },
        isToggleEnabled: c
      }), jsx("div", {
        className: "manage_memory--manageMemoryDivider--A-LLv"
      }), jsx(N, {})]
    })
  });
}
C.displayName = "ManageMemoryModal";
export let $$T0 = registerModal(C, "ManageMemoryModal");
function k(e) {
  return jsx("div", {
    className: "manage_memory--usageBarBodyContainer--c1BrW",
    children: jsxs("div", {
      className: "manage_memory--usageBarContainer--pQ2DL",
      children: [jsx("div", {
        className: "manage_memory--progressBarNotchContainer--OkDhl",
        style: {
          left: `${xk}%`
        },
        children: jsx("div", {})
      }), jsxs("div", {
        className: "manage_memory--usageBarBorder--sSZdq",
        children: [jsx("div", {
          className: "manage_memory--usageBarFillPage--k-CBs manage_memory--usageBarFill--1P3YV",
          style: {
            width: `${e.pageContentMemoryUsagePercent}%`
          }
        }), jsx("div", {
          className: "manage_memory--usageBarFillImported--5-Q9v manage_memory--usageBarFill--1P3YV",
          style: {
            width: `${e.importedMemoryUsagePercent}%`
          }
        })]
      })]
    })
  });
}
function R(e) {
  let t = useId();
  return jsxs("div", {
    className: "manage_memory--memoryStatisticsContainer--Gi61h",
    children: [jsxs("div", {
      children: [renderI18nText("manage_memory_modal.total_memory_used"), jsx("div", {
        children: `${e.totalMemoryUsagePercent.toFixed(1)}%`
      })]
    }), jsxs("div", {
      children: [renderI18nText("manage_memory_modal.total_layers"), jsx("div", {
        children: e.totalLayers.toLocaleString()
      })]
    }), jsxs("div", {
      children: [jsxs("div", {
        children: [jsx("div", {
          className: "manage_memory--memoryStatisticsPageContentIndicator--NXP0V manage_memory--memoryStatisticsIndicator--qMFyF"
        }), renderI18nText("manage_memory_modal.page_content")]
      }), jsx("div", {
        children: `${e.pageContentMemoryUsagePercent.toFixed(1)}%`
      })]
    }), 0 !== e.importedMemoryUsagePercent && jsxs("div", {
      children: [jsxs("div", {
        children: [jsx("div", {
          className: "manage_memory--memoryStatisticsImportedComponentIndicator--yGDXP manage_memory--memoryStatisticsIndicator--qMFyF"
        }), renderI18nText("manage_memory_modal.imported_components")]
      }), jsx("div", {
        children: `${e.importedMemoryUsagePercent.toFixed(1)}%`
      })]
    }), jsxs(Label, {
      htmlFor: t,
      children: [jsxs("div", {
        className: "manage_memory--toggleMemoryStatsText--zpxbz",
        children: [renderI18nText("manage_memory_modal.show_memory_in_layers_panel"), jsx(IconButton, {
          "aria-label": getI18nString("manage_memory_modal.show_memory_in_layers_panel_warning"),
          htmlAttributes: {
            "data-tooltip-type": KindEnum.TEXT,
            "data-tooltip-show-immediately": !0,
            "data-tooltip": getI18nString("manage_memory_modal.show_memory_in_layers_panel_warning")
          },
          children: jsx(B, {})
        })]
      }), jsx(_$$v, {
        id: t,
        checked: e.isToggleEnabled,
        onChange: e.onToggle
      })]
    })]
  });
}
function N() {
  return jsx("div", {
    className: "manage_memory--memoryReductionTipsContainer--Ls677",
    children: jsxs("div", {
      children: [jsx("p", {
        children: jsx("b", {
          style: styleBuilderInstance.fontSemiBold.$,
          children: renderI18nText("memory_warning_modal.memory_reduction_tips_modal_title")
        })
      }), jsx("br", {}), jsxs("ol", {
        className: "manage_memory--bulletedListManageMemory--pyJyb",
        children: [jsxs("li", {
          children: [jsx("b", {
            style: styleBuilderInstance.fontMedium.$,
            children: renderI18nText("memory_warning_modal.memory_reduction_tips_break_files_header")
          }), renderI18nText("memory_warning_modal.memory_reduction_tips_break_files")]
        }), jsx("br", {}), jsxs("li", {
          children: [jsx("b", {
            style: styleBuilderInstance.fontMedium.$,
            children: renderI18nText("memory_warning_modal.memory_reduction_tips_clean_layers_header")
          }), renderI18nText("memory_warning_modal.memory_reduction_tips_clean_layers")]
        }), jsx("br", {}), jsxs("li", {
          children: [jsx("b", {
            style: styleBuilderInstance.fontMedium.$,
            children: renderI18nText("memory_warning_modal.memory_reduction_tips_flatten_shapes_header")
          }), renderI18nText("memory_warning_modal.memory_reduction_tips_flatten_shapes")]
        }), jsx("br", {}), jsxs("li", {
          children: [jsx("b", {
            style: styleBuilderInstance.fontMedium.$,
            children: renderI18nText("memory_warning_modal.memory_reduction_tips_trim_components_header")
          }), renderI18nText("memory_warning_modal.memory_reduction_tips_trim_components")]
        })]
      }), jsx("br", {}), jsx("p", {
        children: jsx(O, {})
      })]
    })
  });
}
function P() {
  return jsx(Link, {
    newTab: !0,
    href: "https://help.figma.com/hc/articles/360040528173",
    children: renderI18nText("memory_warning_modal.help_center")
  });
}
function O() {
  return renderI18nText("memory_warning_modal.help_center_resource_and_link", {
    helpCenterLink: jsx(P, {})
  });
}
export const gG = $$T0;
