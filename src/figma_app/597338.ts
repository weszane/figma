import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState, useEffect, useCallback, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "../vendor/514228";
import { L as _$$L } from "../905/704296";
import { HistoryChangesBindings, ChangeType } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import { trackEventAnalytics } from "../905/449184";
import { A } from "../905/920142";
import { qc } from "../figma_app/858013";
import { B } from "../905/714743";
import { getI18nString, renderI18nText } from "../905/303541";
import { cU } from "../figma_app/841351";
import { Ib } from "../905/129884";
import { Ro } from "../figma_app/805373";
import { K0 } from "../figma_app/778125";
import { A as _$$A } from "../6828/315990";
let E = "diffing_compare_summary--comparingDetailsText--WlaVi";
export function $$b1(e, t = !1) {
  let r = A(new Date());
  let n = A(e);
  return n.isSame(r, "day") ? getI18nString("collaboration.feedback.time_hour_minutes", {
    time: n.toDate()
  }) : n.isSame(r, "year") ? getI18nString("collaboration.feedback.time_date_minutes_without_year", {
    time: n.toDate()
  }) : t ? getI18nString("collaboration.feedback.time_date_minutes", {
    time: n.toDate()
  }) : getI18nString("collaboration.feedback.date", {
    time: n.toDate()
  });
}
export function $$T2(e, t) {
  return e ? jsx(Ro, {
    size: t,
    entity: {
      img_url: e
    }
  }) : jsx("div", {
    className: "diffing_compare_summary--noUserImage--XijV0"
  });
}
function I(e) {
  return Math.max(HistoryChangesBindings.getChangeCountForStatus(e), 0);
}
export function $$S0({
  compareId: e,
  versions: t
}) {
  let r = useDispatch();
  let [c, g] = useState(null);
  let [S, v] = useState({});
  let A = useSelector(e => !!e.modalShown);
  let x = I(ChangeType.EDITED);
  let N = x + I(ChangeType.CREATED) + (I(ChangeType.LIBRARY_UPDATES) + I(ChangeType.AFFECTED)) + I(ChangeType.REMOVED);
  let C = [];
  let w = Object.keys(S).length;
  let O = w > 8;
  let R = O ? 6 : w;
  Object.entries(S).slice(0, R).forEach(([e, t]) => {
    C.push(jsx("span", {
      className: "diffing_compare_summary--editorAvatar--w3xnL",
      children: $$T2(t, 24)
    }, e));
  });
  O && C.push(jsx("span", {
    className: "diffing_compare_summary--editorsOverflowText--JcgMo",
    children: renderI18nText("collaboration.feedback.compare_changes_overflow_editors", {
      numAddlEditors: w - 6
    })
  }));
  useEffect(() => {
    let r = t.find(t => t.id === e);
    r && g(r);
  }, [e, t]);
  useEffect(() => {
    if (!c) return;
    let e = t.filter(e => e.created_at && c.created_at && e.created_at >= c.created_at);
    if (0 === e.length) return;
    let r = {};
    e.forEach(e => {
      r = {
        ...r,
        ...e.participating_images_dict
      };
      e.user.handle && e.user.img_url && (r[e.user.handle] = e.user.img_url);
    });
    Object.keys(r).length > 0 && v(r);
  }, [c, t]);
  let L = useCallback(t => {
    t.stopPropagation();
    setTimeout(() => {
      r(cU());
      trackEventAnalytics("Version History Compare Stop", {
        fromVersionId: e
      });
    }, 300);
  }, [r, e]);
  let P = useCallback(t => {
    A || "Escape" !== t.key || (r(cU()), trackEventAnalytics("Version History Compare Stop", {
      fromVersionId: e
    }));
  }, [r, A, e]);
  return (useLayoutEffect(() => (document.addEventListener("keydown", P), () => {
    document.removeEventListener("keydown", P);
  }), [P]), getFeatureFlags().version_diffing) ? jsx("div", {
    className: "diffing_compare_summary--comparingDetailsContainerLeft--UrX34",
    children: jsxs("div", {
      children: [jsxs("div", {
        className: "diffing_compare_summary--comparingDetailsHeaderContainer--FgJvD",
        children: [jsx("div", {
          className: "diffing_compare_summary--comparingDetailsHeaderText--CToWP",
          children: renderI18nText("collaboration.feedback.compare_changes_m2")
        }), jsx(K0, {
          onClick: L,
          "data-tooltip-type": Ib.TEXT,
          "data-tooltip": getI18nString("collaboration.feedback.close_tooltip"),
          recordingKey: "button-close",
          children: jsx(_$$L, {})
        })]
      }), !c && jsx("div", {
        className: "diffing_compare_summary--comparingDetailsSpinnerContainer--DWjiP",
        children: jsx(qc, {})
      }), !!c && jsxs("div", {
        children: [c && function (e) {
          let t = e.label;
          return t || e.created_at ? jsxs("div", {
            className: "diffing_compare_summary--compareWithVersionName--B9k0o",
            children: [jsx("div", {
              className: "diffing_compare_summary--versionName--NyScQ",
              children: t || $$b1(e.created_at)
            }), jsx(B, {
              svg: _$$A,
              className: "diffing_compare_summary--arrowLeftRightIcon--XdePz"
            }), jsx("div", {
              className: "diffing_compare_summary--currentText--FoiBm",
              children: renderI18nText("collaboration.feedback.current_file")
            })]
          }) : null;
        }(c), 0 === N && jsx("div", {
          className: E,
          children: renderI18nText("collaboration.feedback.no_visible_changes")
        }), N > 0 && w > 0 && jsxs(Fragment, {
          children: [C.length > 0 && jsx("div", {
            className: "diffing_compare_summary--editorAvatarsContainer--vdLWd",
            children: C
          }), jsx("div", {
            className: E,
            children: renderI18nText("collaboration.feedback.num_editors_of_changes", {
              numEditors: w
            })
          })]
        })]
      })]
    })
  }) : null;
}
export const ZI = $$S0;
export const xX = $$b1;
export const $_ = $$T2;