import { jsx } from "react/jsx-runtime";
import { useSelector, useDispatch } from "react-redux";
import { trackEventAnalytics } from "../905/449184";
import { parsePxInt } from "../figma_app/783094";
import { YO } from "../figma_app/672951";
import { getAtomMutate } from "../figma_app/566371";
import { FlashActions } from "../905/573154";
import { getI18nString } from "../905/303541";
import { o as _$$o } from "../figma_app/29593";
import { U } from "../905/926550";
import { J } from "../905/844906";
import { l as _$$l } from "../905/37596";
import { S as _$$S } from "../figma_app/11182";
import { showModalHandler } from "../905/156213";
import { j6, fu } from "../figma_app/831799";
import { logAndTrackCTA } from "../figma_app/314264";
import { F } from "../905/224";
import { k4, jl } from "../figma_app/199513";
import { rR, sK } from "../figma_app/598018";
import { vL } from "../905/652992";
import { EE } from "../905/316062";
import { fileActionEnum } from "../figma_app/630077";
import { j } from "../905/834956";
import { DV } from "../905/739964";
import { W } from "../905/25249";
import { tgj } from "../figma_app/27776";
export function $$w1(e) {
  let t = useSelector(e => e.currentUserOrgId);
  let r = useSelector(e => e.currentTeamId);
  let n = useSelector(e => e.loadedFolders);
  let u = getAtomMutate(k4);
  let f = t || r;
  let E = useSelector(e => e.teams);
  let A = YO(e);
  let w = useDispatch();
  return ({
    folder: e,
    shouldShowJoinButton: r
  }) => {
    let i = e.teamId;
    let o = e && i ? E[i] : void 0;
    let l = o ? o.org_id : e.orgId;
    if ("loaded" !== A.status) return [];
    let O = !!A.data?.canShare;
    let R = !!A.data?.canMove;
    let L = !!A.data?.canRestore;
    let P = !!A.data?.canPermanentlyDelete;
    let D = window.innerWidth <= parsePxInt(tgj);
    let k = [];
    return e.trashedAt ? (L && k.push({
      displayText: getI18nString("project_menu.restore"),
      onClick: () => {
        trackEventAnalytics("Folder Restore Click", {
          folderId: e.id,
          teamId: i,
          orgId: l
        });
        o && !rR(o, {
          type: sK.ADD_PROJECT
        }) ? w(showModalHandler({
          type: DV,
          data: {
            team: o,
            resource: vL.FOLDER,
            action: fileActionEnum.CREATE_FOLDER,
            currentPlan: F.Plan.STARTER,
            upsellPlan: F.Plan.PRO,
            editorType: null
          }
        })) : u({
          folderId: e.id,
          team: o
        }).catch(() => {
          w(FlashActions.error(getI18nString("file_browser.api_folder.error_when_restoring")));
        });
      },
      disabled: !L
    }), P && k.push({
      displayText: getI18nString("project_menu.permanently_delete"),
      onClick: () => {
        trackEventAnalytics("Folder Permanently Delete Click", {
          folderId: e.id,
          teamId: e.teamId,
          orgId: l
        });
        w(showModalHandler({
          type: U(),
          data: {
            folder: e,
            folderOrgId: l
          }
        }));
      },
      disabled: !P
    }), [{
      key: "trashed",
      items: k
    }]) : (k.push({
      displayText: getI18nString("file_browser.copy_link"),
      onClick: () => {
        let r = EE(e.id, t);
        w(_$$S({
          url: r,
          linkType: "project"
        }));
      }
    }), r || (O && D && k.push({
      displayText: getI18nString("sidebar.share"),
      onClick: () => {
        w(jl({
          folderId: e.id,
          loadedFolders: n
        }));
        w(showModalHandler({
          type: W,
          data: {
            folderId: e.id
          }
        }));
      }
    }), (l === f || i === f) && k.push({
      displayText: getI18nString("sidebar.move_project"),
      onClick: () => {
        w(jl({
          folderId: e.id,
          loadedFolders: n
        }));
        w(showModalHandler({
          type: J,
          data: {
            folderId: e.id
          }
        }));
      },
      disabled: !R
    })), [{
      key: "default",
      items: k
    }, {
      key: "settings",
      items: [{
        displayText: getI18nString("project_menu.settings"),
        onClick: () => {
          w(showModalHandler({
            type: _$$l,
            data: {
              folderId: e.id
            }
          }));
        },
        trackingEventName: "Folder Settings Click",
        trackingProperties: {
          folderId: e.id,
          entryPoint: "Folder Context Menu"
        }
      }]
    }]);
  };
}
export function $$O0({
  className: e,
  folder: t,
  useLGPerms: r
}) {
  let a = useSelector(e => e.dropdownShown);
  let s = useDispatch();
  let o = j6();
  let l = $$w1(t.id);
  let d = a?.data?.targetRect;
  if (!d) return null;
  let c = l({
    folder: t,
    useLGPerms: r
  });
  return jsx(fu, {
    name: "Folder Context Menu",
    children: jsx(j, {
      className: e,
      items: _$$o(c),
      parentRect: d,
      showPoint: !1,
      lean: "right",
      dispatch: s,
      onSelectItem: (e, t) => {
        e.callback && e.callback("", {}, s, t);
        e.trackingProperties && logAndTrackCTA({
          ...o.properties,
          trackingContext: e.trackingEventName || o.name,
          ...e.trackingProperties
        });
      },
      shouldUsePortal: !0,
      autofocusPrevOnDismount: !0
    })
  });
}
export const p = $$O0;
export const u = $$w1;