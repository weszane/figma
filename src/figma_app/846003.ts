import { getFeatureFlags } from "../905/601108";
import { Ay as _$$Ay } from "../905/612521";
import { getInitialOptions } from "../figma_app/169182";
import { Oe } from "../905/34809";
import { $T } from "../figma_app/422062";
import { Ag } from "../figma_app/471982";
import { Af } from "../figma_app/49598";
import { l5 } from "../figma_app/559491";
import { Qv, sf } from "../905/929976";
import { yJ } from "../figma_app/78808";
import { yJ as _$$yJ, bE } from "../figma_app/598926";
import { OB } from "../figma_app/91703";
import { yJ as _$$yJ2 } from "../905/466026";
import { Rz } from "../905/977218";
import { uE } from "../figma_app/314264";
import { L8 } from "../905/760074";
import { Qr, hL, OR } from "../905/697795";
import { B8 } from "../figma_app/682945";
import { WQ } from "../figma_app/345997";
import { $Z, vU, Np, Mo } from "../figma_app/193867";
import { w } from "../figma_app/119601";
import { YH, _X } from "../figma_app/502247";
import { oD, wN } from "../figma_app/53721";
import { A$ } from "../905/548208";
import { o0 } from "../905/844131";
import { q } from "../905/417890";
export function $$w1(e, t) {
  return null == e || null == t ? e !== t : $Z.requireHistoryChange(e, t);
}
let O = (e, t) => $Z.selectedViewHasMissingResources(e, t);
export function $$R2(e) {
  return new $T().selectedViewMissingResourceType(e);
}
let L = 0;
let $$P0 = e => t => function (r) {
  let o = e.getState().selectedView;
  t(r);
  let P = e.getState();
  if (Qv.matches(r)) {
    let t = P.selectedView;
    if (t === o0 && (t = getInitialOptions().selected_view || vU(P, _$$Ay.location.pathname, _$$Ay.location.search, _$$Ay.location.hash)), "fullscreen" === t.view && t.fileKey) {
      let {
        fileKey
      } = t;
      let i = e.getState().fileByKey[fileKey];
      i && !r.payload.fromRealtime && oD(t.editorType) !== i.editor_type && (t.editorType = wN(i.editor_type ?? "design"));
    }
    if ("abandonedDraftFiles" === t.view || "licenseGroup" === t.view || "orgAdminSettings" === t.view || "orgDomainManagement" === t.view || "orgIdpManagement" === t.view || "seatRequests" === t.view || "teamAdminConsole" === t.view || O(P, t) && (t = {
      view: "resourceUnavailable",
      resourceType: $$R2(t)
    }), "teamUpgrade" === t.view && t.teamId) {
      let e = P.teams[t.teamId];
      e && e.pro_team && !WQ(e) && (t = {
        view: "team",
        teamId: t.teamId,
        teamViewTab: A$.SETTINGS
      });
    }
    t !== o0 ? e.dispatch(sf(t)) : P.user?.drafts_folder_id ? e.dispatch(sf({
      view: "folder",
      folderId: P.user.drafts_folder_id
    })) : e.dispatch(sf({
      view: "recentsAndSharing"
    }));
  } else if (OB.matches(r)) {
    let e = {
      view: "fullscreen",
      fileKey: r.payload.file.key,
      editorType: r.payload.fullscreenEditorType
    };
    let t = Np(P, e);
    _$$Ay.replace(t, {
      ...e,
      jsCommitHash: Qr()
    });
  } else if (sf.matches(r)) {
    if ("prototype" !== o.view && "prototype" === r.payload.view && q()) {
      let e = Np(P, r.payload);
      _$$Ay.redirect(e);
    }
    "fullscreen" === r.payload.view && ("fullscreen" !== o.view || r.payload.editorType !== o.editorType) && B8(r.payload.editorType);
    let {
      selectedView
    } = e.getState();
    if (!("inlinePreview" in selectedView && selectedView.inlinePreview) && !r.payload.fromPopstate) {
      let t = Np(P, r.payload);
      _$$Ay.location.pathname + _$$Ay.location.search !== t ? (("fullscreen" !== r.payload.view || r.payload.fileKey !== getInitialOptions().editing_file?.key) && !YH && w() && _X("fileBrowserHistory middleware selectView").then(t => {
        e.dispatch(Qv(t.data.meta));
      }), !r.payload.forceReplaceState && (_$$Ay.location.state || Mo(o)) && $$w1(o, r.payload) ? _$$Ay.push(t, {
        ...r.payload,
        previousSelectedView: o,
        jsCommitHash: Qr()
      }) : _$$Ay.replace(t, {
        ...r.payload,
        previousSelectedView: o,
        jsCommitHash: Qr()
      })) : null == _$$Ay.location.state && _$$Ay.replace(t, {
        ...r.payload,
        previousSelectedView: o,
        jsCommitHash: Qr()
      });
      e.getState()?.user?.appData?.loggedOut && "fullscreen" !== r.payload.view && _$$Ay.reload("User Logged out");
    }
    if ("searchAndBrowse" === r.payload.subView) {
      let e = r.payload.data;
      e && !e.category && hL(Ag(e));
    } else OR(P, r.payload);
  } else if (Af.matches(r) && "hubFile" === P.selectedView.subView) OR(P, {
    hubFileId: r.payload.hubFileId,
    subView: "hubFile",
    view: "communityHub"
  });else if (l5.matches(r)) {
    let t = e.getState().selectedView;
    let n = r.payload.publishedPlugins;
    let a = t && "communityHub" === t.view && "plugin" === t.subView && t.publishedPluginId;
    if (a && n && n.some(e => e.id === a)) {
      if (_$$Ay) {
        let e = Np(P, t);
        _$$Ay.replace(e);
      }
      OR(P, t);
    }
  } else if (_$$yJ.matches(r)) {
    if (!getFeatureFlags().folder_page_fix_tab_titles) {
      let t = e.getState().selectedView;
      "folder" === t.view && t.folderId === r.payload.folder.id && OR(P, t);
    }
  } else if (bE.matches(r)) {
    let t = e.getState().selectedView;
    if ("folder" === t.view && t.folderId === r.payload.id) {
      getFeatureFlags().folder_page_fix_tab_titles || OR(P, t);
      let e = Np(P, t);
      _$$Ay.replace(e, {
        ...t,
        jsCommitHash: Qr()
      });
    }
  } else if (_$$yJ2.matches(r)) {
    let t = e.getState().selectedView;
    if ("fullscreen" === t.view) {
      let e = t.fileKey && P.fileByKey[t.fileKey];
      if (e) {
        let n = L8(e, P.repos);
        if (n && n.id === r.payload.repo.id) {
          OR(P, t);
          let e = Np(P, t);
          _$$Ay && _$$Ay.replace(e, {
            ...t,
            jsCommitHash: Qr()
          });
        }
      }
    }
  } else if (yJ.matches(r)) {
    let t = e.getState().selectedView;
    if ("fullscreen" === t.view && r.payload.file.key === t.fileKey || "prototype" === t.view && r.payload.file.key === t.file.key) {
      OR(P, t);
      let e = Np(P, t);
      _$$Ay && _$$Ay.replace(e, {
        ...t,
        jsCommitHash: Qr()
      });
    }
  } else if (Rz.matches(r)) {
    let t = e.getState().selectedView;
    t?.view === "search" && (_$$Ay.replace(Np(P, t), {
      ...t,
      jsCommitHash: Qr()
    }), OR(P, t));
  } else Oe.matches(r) ? uE("File Browser Sidebar Clicked", e.getState(), {
    clickedResourceType: r.payload.clickedResourceType,
    resourceIdOrKey: r.payload.resourceIdOrKey
  }) : 0 === L && (L = setTimeout(function () {
    L = 0;
    null === e.getState().selectedView && e.dispatch(sf({
      view: "recentsAndSharing"
    }));
  }, 0));
  return r;
};
export const Ay = $$P0;
export const SW = $$w1;
export const vS = $$R2;