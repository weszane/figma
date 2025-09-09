import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Fullscreen, AppStateTsApi } from "../figma_app/763686";
import o from "classnames";
import { Y } from "../905/506207";
import { co } from "../figma_app/958735";
import { T as _$$T } from "../905/858738";
import { dq } from "../905/845253";
import { getObservableValue } from "../figma_app/84367";
import { G } from "../1250/269770";
import { Xr } from "../figma_app/27355";
import { trackEventAnalytics } from "../905/449184";
import { debugState } from "../905/407919";
import { getInitialOptions } from "../figma_app/169182";
import { useSubscription } from "../figma_app/288654";
import { sendMetric } from "../905/485103";
import { g3, zI } from "../figma_app/304207";
import { UC } from "../figma_app/91703";
import { lX } from "../figma_app/107215";
import { workshopModeExpirationAtom } from "../figma_app/789";
import { Be } from "../figma_app/844435";
import { rB } from "../figma_app/236178";
import { selectCurrentFile } from "../figma_app/516028";
import { _6 } from "../figma_app/386952";
import { o as _$$o, n as _$$n } from "../figma_app/264395";
import { DeveloperRelatedLinks, FileWorkshopMode, OpenEditorFileData } from "../figma_app/43951";
import { X_ } from "../figma_app/197432";
import { d as _$$d } from "../figma_app/550089";
import { j6 } from "../9410/793186";
import { lA, $J } from "../figma_app/957070";
var l = o;
function O() {
  _$$o();
  return jsx(Fragment, {});
}
function L(e) {
  let t = _6();
  let i = "fullscreen" === t.view ? t.fileKey : null;
  let o = useDispatch();
  let l = useSelector(e => e.fileByKey);
  let d = useSelector(e => e.userAnalyticsData);
  let c = useSelector(e => e.user);
  let u = selectCurrentFile();
  let p = u?.canEdit;
  let {
    orgId
  } = e;
  let m = null != i && !!l[i]?.is_favorited;
  let L = useSubscription(DeveloperRelatedLinks, {
    fileKey: i || ""
  }, {
    enabled: !!i
  });
  useEffect(() => {
    if ("loaded" === L.status) {
      let e = L.data.file?.developerRelatedLinks;
      let t = e?.reduce((e, t) => {
        let i = e.get(t.nodeId) ?? [];
        i.push(t);
        e.set(t.nodeId, i);
        return e;
      }, new Map());
      if (t) try {
        Fullscreen.setDeveloperRelatedLinks(t);
      } catch {}
    }
  }, [L]);
  let R = useRef(!1);
  let D = Xr(workshopModeExpirationAtom);
  let M = useSubscription(FileWorkshopMode, {
    fileKey: i || ""
  }, {
    enabled: !!i
  });
  useLayoutEffect(() => {
    if ("loaded" !== M.status) return;
    let e = M.data.figFileWorkshopMode;
    D(e ? e.expiresAt : null);
    e && e.expiresAt > new Date() && (R.current = !0);
    o(lX(e ? {
      id: e.id,
      until: e.expiresAt,
      loaded: !0
    } : {
      loaded: !0
    }));
  }, [M, o, D]);
  let P = useRef(null);
  let F = useRef(!1);
  let B = useRef(null);
  let U = useRef(null);
  let G = useSubscription(OpenEditorFileData, {
    fileKey: i || ""
  }, {
    enabled: !!i
  });
  useLayoutEffect(() => {
    if ("loaded" !== G.status || G.errors.length > 0 && null === G.data.file) return;
    let e = G.data.file;
    if (null === P.current) {
      let t = getInitialOptions().editing_file;
      null !== e && t && e.key === t.key && !!t.can_edit !== e.canEdit && (trackEventAnalytics("open_file_inconsistent_permission", {
        file_key: e.key,
        lg_can_edit: e.canEdit,
        sinatra_can_edit: t.can_edit,
        user: debugState.getState().user?.id
      }, {
        batchRequest: !0
      }), sendMetric("open_file.inconsistent_permissions", {
        lg_can_edit: e.canEdit,
        sinatra_can_edit: t.can_edit
      }));
    }
    if (X_({
      openFile: e,
      wasInWorkshop: R.current,
      previousCanEdit: P.current,
      wasInUnclaimedTryFile: F.current,
      previousCanView: U.current,
      previousFileKey: B.current?.key || null
    }, o), null == e) return;
    U.current = e.canView;
    P.current = e.canEdit;
    R.current && e.isTryFile && (F.current = !0);
    let t = debugState.getState().selectedView;
    "fullscreen" === t.view && t.fileKey === e?.key && B.current !== e && (o(UC({
      openFile: {
        ...e,
        isFavorited: m
      },
      isLiveGraphSync: !0
    })), B.current = e);
  }, [G, o, m]);
  let K = Be();
  useLayoutEffect(() => {
    let e = debugState.getState().selectedView;
    if (!K.loaded || "fullscreen" !== e.view) return;
    let {
      plugins,
      widgets,
      orgPlugins,
      orgWidgets
    } = K;
    let a = {
      ...plugins,
      ...orgPlugins
    };
    let s = {
      ...widgets,
      ...orgWidgets
    };
    o(g3(a));
    o(zI(s));
  }, [o, orgId, K]);
  rB();
  return p && _$$n(d, c?.email) ? jsx(O, {}) : jsx(Fragment, {});
}
function P() {
  co();
  return null;
}
export function $$F0({
  children: e,
  setShouldShowDragAndDropBorder: t,
  onPointerDown: i = j6,
  isDragTarget: o = !1
}) {
  let c = useSelector(e => e.modalShown);
  let f = _$$T();
  let g = getObservableValue(AppStateTsApi?.devHandoffState()?.focusMode, !1);
  let _ = dq();
  let x = useRef(!1);
  return jsx(_$$d, {
    children: jsx(Y, {
      isDragTarget: () => o,
      onTargetDragEnter: () => {
        t(!0);
      },
      onTargetDragLeave: () => {
        t(!1);
      },
      onTargetDrop: () => {
        t(!1);
      },
      style: {
        flex: "1 1 auto"
      },
      children: jsxs("div", {
        "aria-hidden": !!c,
        className: l()(lA, f && g && $J),
        onPointerDown: e => {
          i(e, x);
        },
        children: [jsx(L, {
          orgId: _
        }), e, jsx(G, {}), jsx(P, {})]
      })
    })
  });
}
export const v = $$F0;