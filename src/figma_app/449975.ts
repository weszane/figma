import { useState, useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { ViewType } from "../figma_app/763686";
import { H } from "../905/620380";
import { I } from "../figma_app/583780";
import { useLatestRef } from "../figma_app/922077";
import { q0 } from "../figma_app/107215";
import { N } from "../figma_app/659940";
import { Cu } from "../figma_app/314264";
import { $K } from "../figma_app/247611";
import { g as _$$g } from "../figma_app/115586";
import { _X, qc } from "../figma_app/62612";
import { selectCurrentFile } from "../figma_app/516028";
import { f as _$$f } from "../905/940356";
import { i1 } from "../figma_app/193867";
import { J } from "../905/61366";
import { x } from "../figma_app/59886";
function _() {
  let [e, t] = useState(null);
  useEffect(() => {
    let e = e => {
      if (-1 === e[0] && -1 === e[1]) {
        t(null);
        return;
      }
      t(e);
    };
    $K.on("action", e);
    return () => {
      $K.removeListener("action", e);
    };
  }, [t]);
  return e;
}
var $$T1 = (e => (e[e.TRUE = 0] = "TRUE", e[e.FALSE = 1] = "FALSE", e[e.LOADING = 2] = "LOADING", e))($$T1 || {});
export function $$I5() {
  let e = _$$g();
  let t = useSelector(e => e.mirror.appModel.showUi);
  let r = useSelector(e => e.mirror.appModel.topLevelMode === ViewType.LAYOUT);
  let o = useSelector(e => i1(e.selectedView));
  let l = useMemo(() => new Date(), []);
  let {
    createdAt,
    key
  } = selectCurrentFile() || {
    createdAt: null,
    key: null
  };
  let p = useMemo(() => createdAt && 3e5 >= Math.abs(createdAt.getTime() - l.getTime()), [createdAt, l]);
  let _ = useSelector(e => {
    let t = e?.mirror?.appModel?.currentPage;
    let r = e?.mirror?.sceneGraph;
    let n = r?.get(t);
    return n ? !n.childCount || n.childrenAreAllGhosts ? 0 : 1 : 2;
  });
  let m = function (e) {
    let t = H(_$$f("figjam_editor_onboarded"));
    let r = useMemo(() => !!t.current, [e, t]);
    let i = !!_$$f("figjam_browse_templates_modal_onboarded");
    let a = _$$f("figjam_browse_templates_modal_onboarding_item_selected");
    return r || i && !a;
  }(key);
  let T = N();
  if (x()) return 1;
  let I = J();
  return T || !m || I || o ? 1 : e && createdAt ? t && r && p ? _ : 1 : 2;
}
export function $$S3(e) {
  return 0 === I(1 === e);
}
export let $$v0 = {
  marginLeft: 40,
  marginRight: 24,
  width: 216
};
function A(e, t) {
  return e.x < t.x + t.width && e.x + e.width > t.x && e.y < t.y + t.height && e.y + e.height > t.y;
}
export function $$x2(e, t) {
  let r = _X({
    subscribeToUpdates_expensive: e
  });
  let n = qc(r);
  let i = _();
  return !!e && !!t && !!i && (r.zoomScale >= 2 || A({
    x: n.x,
    y: n.y,
    width: 280 / r.zoomScale,
    height: n.height
  }, {
    x: -.5 * Math.min(i[0], 2432),
    y: -.5 * Math.min(i[1], 1212),
    width: i[0],
    height: i[1]
  }));
}
export function $$N7(e, t) {
  let r = _();
  let n = _X({
    subscribeToUpdates_expensive: e
  });
  let i = qc(n);
  return !!e && !!t && !!r && !A(i, function (e, t) {
    let r = e.x + e.width / 2;
    let n = e.y + e.height / 2;
    return {
      x: 1.5 * e.x + -.5 * r,
      y: 1.5 * e.y + (1 - t) * n,
      width: t * e.width,
      height: t * e.height
    };
  }({
    x: -.5 * Math.min(r[0], 2432),
    y: -.5 * Math.min(r[1], 1212),
    width: r[0],
    height: r[1]
  }, 1.5));
}
export function $$C6(e) {
  let {
    fileKey,
    didUserCancel,
    showStarterKit
  } = e;
  useEffect(() => {
    didUserCancel && Cu({
      fileKey,
      text: "Close starter kit",
      triggeredFrom: "starter_kit"
    });
  }, [fileKey, didUserCancel]);
  let a = useLatestRef(showStarterKit);
  useEffect(() => {
    0 === a && 1 === showStarterKit && Cu({
      fileKey,
      text: "Close starter kit implicit",
      triggeredFrom: "starter_kit"
    });
  }, [fileKey, a, showStarterKit]);
}
export function $$w4(e, t, r) {
  let [i, a] = useState(!1);
  let s = I(1 === e);
  useEffect(() => {
    (t || 0 !== s) && !i && (r(q0()), a(!0));
  }, [e, s, i, r, t]);
}
export const jm = $$v0;
export const iH = $$T1;
export const O$ = $$x2;
export const nw = $$S3;
export const lG = $$w4;
export const Mh = $$I5;
export const At = $$C6;
export const fu = $$N7;