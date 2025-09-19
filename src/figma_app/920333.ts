import { jsx } from "react/jsx-runtime";
import { useRef, useEffect, useMemo, createContext, useContext, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { isNotNullish, assertNotNullish } from "../figma_app/95419";
import { t as _$$t } from "../905/150656";
import { useAtomWithSubscription } from "../figma_app/27355";
import { parsePxInt } from "../figma_app/783094";
import { selectWithShallowEqual } from "../905/103090";
import { Point } from "../905/736624";
import { isStatus } from "../figma_app/808294";
import { zK } from "../figma_app/913823";
import { cr } from "../905/879323";
import { _ as _$$_ } from "../905/793009";
import { usePluginedWidgets, usePublishedPlugins } from "../figma_app/844435";
import { qp } from "../905/977779";
import { selectCurrentFile, useCurrentFileKey } from "../figma_app/516028";
import { useCurrentUserOrg } from "../905/845253";
import { getUserId } from "../905/372672";
import { a6 } from "../figma_app/198840";
import { isNullOrFailure } from "../905/18797";
import { n as _$$n } from "../905/79930";
import { Rt, Vq as _$$Vq } from "../figma_app/979658";
import { SubscriptionStatus } from "../905/272080";
import { EditorType } from "../figma_app/155287";
import { $1, yz } from "../figma_app/76115";
import { yD } from "../905/92359";
import { wR, E0 } from "../figma_app/293326";
import { Yr1, Eg1 } from "../figma_app/27776";
let $$R9 = parsePxInt(Yr1) + parsePxInt(Eg1) + 5;
let $$L10 = new Point(wR, wR + E0);
export function $$P5(e, t, r, n) {
  let i = useSelector(e => e.figjamDefaultInserts)[t];
  let s = [];
  for (let n of i) r(n, e) && ("templates" === t ? s.push({
    type: _$$n.HubFile,
    template: n
  }) : s.push(n));
  e.push(...s);
  return e.slice(0, n);
}
export function $$D7(e, t) {
  let r = useRef(null);
  let n = useRef(!1);
  t.every(e => !!e) && !n.current && (r.current = e, n.current = !0);
  return null !== r.current ? r.current : e;
}
export function $$k4() {
  let e = useDispatch();
  let t = selectCurrentFile();
  let {
    fileVersion,
    loadingState,
    library
  } = selectWithShallowEqual(e => ({
    fileVersion: e.fileVersion,
    sceneGraphSelection: e.mirror.sceneGraphSelection,
    loadingState: e.loadingState,
    library: e.library
  }));
  let d = getUserId() || "";
  useEffect(() => {
    e(cr({
      shouldSearchDefaultLibraries: !0
    }));
  }, [e]);
  let u = t && fileVersion && isNullOrFailure(loadingState, yD(t.key));
  useEffect(() => {
    u && e(zK());
  }, [e, u]);
  let p = useAtomWithSubscription(qp);
  let m = $1({
    library,
    fileDataByLibraryKey: p
  });
  let g = yz(library.defaultPublished);
  return useMemo(() => {
    let e = new Set(g.subscribedFiles.map(e => e.library_key).filter(isNotNullish));
    let t = m.subscribedFiles.filter(t => t.library_key && !e.has(t.library_key));
    g.subscribedFiles = function (e, t) {
      let r = new Map(e.map(e => {
        var r;
        return [e.key, (r = 1e4 * Math.sin(t++)) - Math.floor(r)];
      }));
      return e.sort((e, t) => {
        let n = r.get(e.key) || 0;
        let i = r.get(t.key) || 0;
        return n > i ? 1 : n < i ? -1 : 0;
      });
    }(g.subscribedFiles, parseInt(d) % 1e3);
    return {
      subscribedFiles: [...t, ...g.subscribedFiles],
      libraryKeyToSubscribedItems: {
        ...m.libraryKeyToSubscribedItems,
        ...g.libraryKeyToSubscribedItems
      }
    };
  }, [g, m, d]);
}
export function $$M8() {
  let e = useCurrentUserOrg();
  let t = !!(e && e.plugins_whitelist_enforced);
  let r = !!(e && e.widgets_whitelist_enforced);
  return !t && !r;
}
let F = createContext(null);
export function $$j3() {
  return assertNotNullish(useContext(F), "Must be wrapped within <FigJamBrowseResourceModalContext.Provider>");
}
export function $$U6({
  initialTab: e,
  setPreviewResource: t,
  setSelectedCategory: r,
  searchQuery: a,
  children: s
}) {
  let l = useCurrentFileKey();
  let [d, u, p] = _$$t.useTabs({
    Recents: !1,
    Saved: !1,
    Explore: !1,
    Development: !1,
    All: !!l,
    Stickers: !!l,
    Templates: !!l,
    Widgets: !0,
    Plugins: !0,
    More: !0,
    RecentsCollage: !1
  }, {
    actionOnPointerDown: !0,
    defaultActive: e,
    recordingKey: "browseResourcesModal"
  });
  let {
    hubFiles
  } = selectWithShallowEqual(e => ({
    hubFiles: e.hubFiles,
    initialTab: e.universalInsertModal.initialTab
  }));
  let h = useCallback(e => {
    if (t(e), e && e.type === Rt.TEMPLATES) {
      let t = hubFiles[e.id];
      if (t) {
        let r = a6(t);
        _$$_("resource_previewed", {
          fileKey: l,
          resourceType: "template",
          resourceName: r.name,
          resourceId: e.id,
          templateType: _$$n.HubFile,
          triggeredFrom: _$$Vq(p.activeTab)
        });
      }
    }
  }, [l, hubFiles, t, p.activeTab]);
  let g = useMemo(() => ({
    tabManager: p,
    tabPropsMap: d,
    tabPanelPropsMap: u,
    setPreviewResource: h,
    setSelectedCategory: r,
    searchQuery: a
  }), [a, h, r, p, u, d]);
  return jsx(F.Provider, {
    value: g,
    children: s
  });
}
export function $$B0(e) {
  return e.filter(e => e.editor_type === EditorType.UNIVERSAL || e.editor_type === EditorType.FIGJAM);
}
export function $$G2() {
  return H(usePluginedWidgets(), useSelector(e => e.communityPayments));
}
export function $$V1() {
  return H(usePublishedPlugins(), useSelector(e => e.communityPayments));
}
function H(e, t) {
  return function (r) {
    let n = e[r.plugin_id];
    if (!n || !n.monetized_resource_metadata) return !0;
    let i = t[n.monetized_resource_metadata.id] || n.community_resource_payment;
    return !i || !isStatus(i, SubscriptionStatus.PENDING);
  };
}
export const H6 = $$B0;
export const Hb = $$V1;
export const Sp = $$G2;
export const cX = $$j3;
export const hY = $$k4;
export const ik = $$P5;
export const kx = $$U6;
export const mk = $$D7;
export const qZ = $$M8;
export const s3 = $$R9;
export const t$ = $$L10;