import { jsx, jsxs } from "react/jsx-runtime";
import { useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { ServiceCategories as _$$e } from "../905/165054";
import { hS } from "../905/437088";
import { bL } from "../905/38914";
import { vo, Y9, hE, nB } from "../figma_app/272243";
import { HistoryChangesBindings, FileSourceType } from "../figma_app/763686";
import { ReduxSceneGraph } from "../905/700578";
import { getFeatureFlags } from "../905/601108";
import { atomStoreManager, atom, useAtomValueAndSetter } from "../figma_app/27355";
import { ei, E1 } from "../figma_app/9054";
import { trackEventAnalytics } from "../905/449184";
import { parsePxNumber } from "../figma_app/783094";
import { h as _$$h } from "../905/207101";
import { l as _$$l } from "../905/745972";
import { useSubscription } from "../figma_app/288654";
import { tT } from "../905/723791";
import { reportError } from "../905/11";
import { Ss } from "../905/720292";
import { Nf, ec } from "../figma_app/449837";
import { qc } from "../figma_app/858013";
import { renderI18nText } from "../905/303541";
import { t as _$$t } from "../905/241707";
import { lW } from "../figma_app/11182";
import { useCurrentFileKey, selectCurrentFile } from "../figma_app/516028";
import { FEventType } from "../figma_app/191312";
import { DevModeActivity } from "../figma_app/43951";
import { IT } from "../905/713695";
import { cn, tP, kT } from "../figma_app/841351";
import { ViewType } from "../905/535806";
import { NK } from "../figma_app/111825";
import { compareChangesModalPadding } from "../figma_app/786175";
import { Hb, KJ, DF, Lg, $0, Sl, GE } from "../905/850755";
let $$F10 = {
  alwaysPan: !0,
  maxScale: 1
};
let $$j9 = {
  alwaysNavToSimilarViewport: !0
};
let $$U6 = 300;
let $$B11 = .5;
let $$G12 = 4;
export function $$V13(e, t) {
  let r = useSelector(e => e.openFile?.key);
  let n = useSelector(e => e.mirror.appModel.currentPage);
  let i = t ?? n;
  let s = useSelector(e => e.fileVersion);
  return !!r && !!i && !!e && cn(r, i, e, NK(s)) === atomStoreManager.get(tP);
}
export function $$H7(e) {
  let t = new Map();
  e.forEach((e, r) => {
    var n;
    let i = (n = e.nodeId) && getFeatureFlags().version_diffing ? Math.max(HistoryChangesBindings.getChangeCountForPage(n), 0) : 0;
    i > 0 && t.set(e.nodeId, i);
  });
  return t;
}
export function $$z8(e) {
  let t = useCurrentFileKey();
  let r = $$K1(e ?? "");
  let n = e ? ("loading" === r ? null : r)?.map(e => e.version?.id).filter(_$$t) : void 0;
  let a = kT({
    fileKey: t,
    pageSize: 200,
    versionIds: n
  });
  let [o] = IT(a, {
    enabled: !!t
  });
  useEffect(() => {
    "errors" === o.status && reportError(_$$e.FEEDBACK, Error(`Version fetch in CC error: ${o.errors}`));
  }, [o.status]);
  return {
    versions: o.data || [],
    requestStatus: "loading" === r ? "loading" : o.status
  };
}
ViewType.COMPARE_THUMBNAIL;
let W = atom("");
export function $$K1(e) {
  let t = selectCurrentFile();
  let r = t?.key;
  let n = useSubscription(DevModeActivity, {
    nodeId: e,
    fileKey: r ?? ""
  }, {
    enabled: !!r && !!e
  });
  let [a, o] = useAtomValueAndSetter(W);
  _$$h(() => o(""));
  return useMemo(() => {
    if ("loaded" === n.status) {
      let t = n.data.file;
      if (t.status === tT.Error) {
        reportError(_$$e.DEVELOPER_TOOLS, Error("[Dev mode activity] Error fetching activity log: File error = " + t.error));
        return null;
      }
      let r = t.data?.devModeActivity;
      if (!t.data || !r || 0 === r.length) return [];
      let i = r.filter(e => e.activityType === FEventType.STATUS_CHANGE).sort((e, t) => t.timestamp.getTime() - e.timestamp.getTime());
      let l = `${e} - ${i.length}`;
      e && l !== a && (o(l), trackEventAnalytics("dev_mode.activity.fetch_activity_log", {
        numEntries: i.length
      }, {
        forwardToDatadog: !0
      }));
      return i;
    }
    return "errors" === n.status ? (reportError(_$$e.DEVELOPER_TOOLS, Error("[Dev mode activity] Error fetching activity log: " + JSON.stringify(n.errors))), null) : "loading" === n.status ? "loading" : null;
  }, [n, a, e, o]);
}
export function $$Y0(e) {
  let t = new ReduxSceneGraph(FileSourceType.LIVE_FILE);
  let r = ei(e, !1, t);
  let n = r?.createdAt || null;
  let s = n ? new Date(n).toISOString() : void 0;
  let o = r?.lastEditedAt || null;
  let l = o ? new Date(o && o % 6e4 == 0 && o < 17061264e5 ? o + 6e4 : o).toISOString() : void 0;
  let d = E1()?.toISOString();
  let p = useSelector(e => "fullscreen" === e.selectedView.view && e.selectedView.filterStatusVersions);
  let _ = $$z8(p ? e : void 0);
  let m = useMemo(() => p ? _.versions : function (e, t, r, n) {
    let i = [];
    let a = !1;
    function s() {
      if (i.length > 0) {
        let e = i[i.length - 1];
        e.frameCreated = !0;
        e.frameEdited = void 0;
      }
    }
    for (let o of e) {
      let e = {
        ...o
      };
      if (e.canvas_url && (!a && n && e.created_at && e.created_at < n && (a = !0, e.lastViewed = !0), !t || !(e.edited_at > t))) {
        if (r && e.edited_at < r) {
          s();
          return i;
        }
        i.push(e);
      }
    }
    s();
    return i;
  }(_.versions, l, s, d), [_.versions, l, s, d, p]);
  let {
    requestStatus
  } = _;
  return {
    versions: m,
    versionsQueryLoaded: "loaded" === requestStatus || "disabled" === requestStatus
  };
}
export function $$$2({
  title: e,
  open: t,
  onClose: r,
  children: i
}) {
  let a = hS({
    open: t,
    onClose: r
  });
  let {
    windowInnerWidth
  } = _$$l();
  let c = parsePxNumber(compareChangesModalPadding);
  return jsx(bL, {
    manager: a,
    width: windowInnerWidth - c,
    height: "full",
    children: jsxs(vo, {
      children: [jsx(Y9, {
        children: jsx(hE, {
          children: e
        })
      }), jsx(nB, {
        className: Hb,
        children: i
      })]
    })
  });
}
function X(e) {
  return !!e && e.hasOwnProperty("getImage");
}
export function $$q4(e) {
  let {
    view,
    opacity,
    Overlay,
    hideNoImageText,
    header
  } = e;
  let l = () => void 0 !== opacity ? {
    opacity
  } : {};
  let d = useMemo(() => X(e.image) ? e.image : e.image && {
    data: e.image.image,
    width: e.image.width,
    height: e.image.height,
    scale: e.image.scale || $$G12
  }, [e]);
  return jsxs("div", {
    className: view === Ss.SIDE_BY_SIDE ? KJ : DF,
    children: [!!header && jsx("div", {
      className: Lg,
      children: header
    }), !d && jsx("div", {
      className: $0,
      children: !hideNoImageText && renderI18nText("collaboration.feedback.compare_changes_modal.no_image_found")
    }), X(e.image) ? jsx(Nf, {
      className: Sl,
      style: {
        ...l()
      },
      image: d,
      Overlay
    }) : d && jsx(ec, {
      className: Sl,
      style: {
        ...l()
      },
      image: d,
      Overlay
    })]
  });
}
export function $$J3() {
  return jsx("div", {
    className: GE,
    children: jsx(qc, {})
  });
}
export function $$Z5(e, t) {
  let r = e?.toString();
  r && t(lW({
    stringToCopy: r
  }));
}
export const DS = $$Y0;
export const Os = $$K1;
export const Q4 = $$$2;
export const Qp = $$J3;
export const R$ = $$q4;
export const WD = $$Z5;
export const _W = $$U6;
export const ee = $$H7;
export const jh = $$z8;
export const kh = $$j9;
export const ob = $$F10;
export const q0 = $$B11;
export const r1 = $$G12;
export const t$ = $$V13;