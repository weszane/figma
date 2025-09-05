import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useEffect, useId } from "react";
import { useDispatch } from "../vendor/514228";
import { J } from "../905/270045";
import { K } from "../905/443068";
import { v as _$$v } from "../905/442517";
import { N as _$$N } from "../905/438674";
import { B } from "../905/950875";
import { CeL, Ez5 } from "../figma_app/763686";
import { md } from "../figma_app/27355";
import { sx } from "../905/449184";
import { Pt } from "../figma_app/806412";
import { Point } from "../905/736624";
import { P as _$$P } from "../905/347284";
import { t as _$$t, tx } from "../905/303541";
import { sx as _$$sx } from "../905/941192";
import { Ce } from "../905/156213";
import { no } from "../figma_app/701001";
import { Tm, Zz, xk } from "../figma_app/952446";
import { Fk } from "../figma_app/167249";
import { Ib } from "../905/129884";
import { Ju } from "../905/102752";
import { GQ } from "../figma_app/32128";
import { Ao } from "../905/748636";
function C(e) {
  let t = useDispatch();
  let i = GQ();
  let s = md(Tm);
  let [o, l] = useState(() => Zz());
  let d = Fk(() => CeL?.getFileNodeCount() ?? 0);
  let c = no();
  let A = Math.max(s - o, 0);
  useEffect(() => {
    let e = setInterval(() => l(Zz()), 5e3);
    return () => clearInterval(e);
  }, []);
  return jsx(Ao, {
    initialPosition: new Point(i + 2, 88),
    initialConstraints: {
      x: "left",
      y: "top"
    },
    title: _$$t("manage_memory_modal.manage_memory_modal_title"),
    initialWidth: 320,
    minTopMargin: 40,
    recordingKey: Pt("ManageMemoryModal", "modal"),
    dragHeaderOnly: !0,
    onClose: () => {
      t(Ce());
      e.markModalClosed();
    },
    children: jsxs(_$$P, {
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
          sx("in_file_memory_usage_toggle", {
            new_status: !c,
            memory_used_percent: s
          });
          Ez5.uiState().showInFileMemoryPercentage.set(!c);
        },
        isToggleEnabled: c
      }), jsx("div", {
        className: "manage_memory--manageMemoryDivider--A-LLv"
      }), jsx(N, {})]
    })
  });
}
C.displayName = "ManageMemoryModal";
export let $$T0 = Ju(C, "ManageMemoryModal");
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
      children: [tx("manage_memory_modal.total_memory_used"), jsx("div", {
        children: `${e.totalMemoryUsagePercent.toFixed(1)}%`
      })]
    }), jsxs("div", {
      children: [tx("manage_memory_modal.total_layers"), jsx("div", {
        children: e.totalLayers.toLocaleString()
      })]
    }), jsxs("div", {
      children: [jsxs("div", {
        children: [jsx("div", {
          className: "manage_memory--memoryStatisticsPageContentIndicator--NXP0V manage_memory--memoryStatisticsIndicator--qMFyF"
        }), tx("manage_memory_modal.page_content")]
      }), jsx("div", {
        children: `${e.pageContentMemoryUsagePercent.toFixed(1)}%`
      })]
    }), 0 !== e.importedMemoryUsagePercent && jsxs("div", {
      children: [jsxs("div", {
        children: [jsx("div", {
          className: "manage_memory--memoryStatisticsImportedComponentIndicator--yGDXP manage_memory--memoryStatisticsIndicator--qMFyF"
        }), tx("manage_memory_modal.imported_components")]
      }), jsx("div", {
        children: `${e.importedMemoryUsagePercent.toFixed(1)}%`
      })]
    }), jsxs(J, {
      htmlFor: t,
      children: [jsxs("div", {
        className: "manage_memory--toggleMemoryStatsText--zpxbz",
        children: [tx("manage_memory_modal.show_memory_in_layers_panel"), jsx(K, {
          "aria-label": _$$t("manage_memory_modal.show_memory_in_layers_panel_warning"),
          htmlAttributes: {
            "data-tooltip-type": Ib.TEXT,
            "data-tooltip-show-immediately": !0,
            "data-tooltip": _$$t("manage_memory_modal.show_memory_in_layers_panel_warning")
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
          style: _$$sx.fontSemiBold.$,
          children: tx("memory_warning_modal.memory_reduction_tips_modal_title")
        })
      }), jsx("br", {}), jsxs("ol", {
        className: "manage_memory--bulletedListManageMemory--pyJyb",
        children: [jsxs("li", {
          children: [jsx("b", {
            style: _$$sx.fontMedium.$,
            children: tx("memory_warning_modal.memory_reduction_tips_break_files_header")
          }), tx("memory_warning_modal.memory_reduction_tips_break_files")]
        }), jsx("br", {}), jsxs("li", {
          children: [jsx("b", {
            style: _$$sx.fontMedium.$,
            children: tx("memory_warning_modal.memory_reduction_tips_clean_layers_header")
          }), tx("memory_warning_modal.memory_reduction_tips_clean_layers")]
        }), jsx("br", {}), jsxs("li", {
          children: [jsx("b", {
            style: _$$sx.fontMedium.$,
            children: tx("memory_warning_modal.memory_reduction_tips_flatten_shapes_header")
          }), tx("memory_warning_modal.memory_reduction_tips_flatten_shapes")]
        }), jsx("br", {}), jsxs("li", {
          children: [jsx("b", {
            style: _$$sx.fontMedium.$,
            children: tx("memory_warning_modal.memory_reduction_tips_trim_components_header")
          }), tx("memory_warning_modal.memory_reduction_tips_trim_components")]
        })]
      }), jsx("br", {}), jsx("p", {
        children: jsx(O, {})
      })]
    })
  });
}
function P() {
  return jsx(_$$N, {
    newTab: !0,
    href: "https://help.figma.com/hc/articles/360040528173",
    children: tx("memory_warning_modal.help_center")
  });
}
function O() {
  return tx("memory_warning_modal.help_center_resource_and_link", {
    helpCenterLink: jsx(P, {})
  });
}
export const gG = $$T0;