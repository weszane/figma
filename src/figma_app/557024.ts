import { jsx, jsxs } from "react/jsx-runtime";
import { useMemo, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { throwTypeError } from "../figma_app/465776";
import { useModalManager } from "../905/437088";
import { t as _$$t } from "../905/150656";
import { ModalRootComponent } from "../905/38914";
import { vo, Y9, hE, nB, jk } from "../figma_app/272243";
import { K as _$$K } from "../905/443068";
import { e as _$$e } from "../905/149844";
import { A as _$$A } from "../905/920142";
import { useSubscription } from "../figma_app/288654";
import { getResourceDataOrFallback } from "../905/723791";
import { P as _$$P } from "../905/347284";
import { s as _$$s } from "../cssbuilder/589278";
import { getI18nString, renderI18nText } from "../905/303541";
import { l as _$$l } from "../905/618243";
import { hideModal } from "../905/156213";
import { fu } from "../figma_app/831799";
import { isDefaultFileAlt, isTrashed } from "../905/760074";
import { $n } from "../905/930279";
import { selectOpenFileKey, selectOpenFile } from "../figma_app/516028";
import { selectCurrentUser } from "../905/372672";
import { RepoFiles } from "../figma_app/43951";
import { KindEnum } from "../905/129884";
import { e0 } from "../905/696396";
import { registerModal } from "../905/102752";
import { v as _$$v } from "../905/202020";
import { p$, jG, Ge } from "../905/822842";
var L = (e => (e.ACTIVE = "active", e.YOURS = "yours", e.ARCHIVED = "archived", e))(L || {});
function P(e) {
  return jsx("div", {
    className: p$,
    children: e.text
  });
}
function D() {
  return jsx("div", {
    className: _$$s.h1.wFull.colorBgTertiary.$
  });
}
function k(e) {
  let t = (getResourceDataOrFallback(e.recentFileVersions) || []).filter(e => !e.user.isSystemUser).find(e => 7 !== e.view);
  if (t) {
    let r = t.checkpoint && _$$A.utc(t.checkpoint?.createdAt).toDate();
    return {
      file_key: e.key,
      user: t.user,
      is_merged: 10 === t.view,
      created_at: r && r > t.updatedAt ? r : t.updatedAt
    };
  }
  return {
    file_key: e.key,
    created_at: e.createdAt,
    user: e.creator,
    is_merged: !1
  };
}
export function $$M0(e) {
  let t = useSubscription(RepoFiles, {
    repoId: e
  }, {
    enabled: null !== e
  });
  let r = useMemo(() => {
    if ("loaded" !== t.status || !e) return [];
    let {
      repo
    } = t.data;
    return (t.data.repo?.files || []).filter(e => repo && !isDefaultFileAlt(e, repo)).map(e => ({
      ...e,
      name: e._name || getI18nString("fullscreen.filename_view.title_placeholder")
    }));
  }, [t, e]);
  let n = useMemo(() => {
    let e = r.map(k) || [];
    let t = {};
    e.filter(e => !!e).forEach(e => t[e?.file_key] = e);
    return t;
  }, [r]);
  let a = useMemo(() => r.filter(e => !e.deletedAt), [r]);
  let s = useMemo(() => {
    let e = [...a];
    e.sort((e, t) => t.updatedAt.valueOf() - e.updatedAt.valueOf());
    return e;
  }, [a]);
  let o = useMemo(() => s.filter(e => e.roleOnObjectForUser?.isOwnerOfResource === !0), [s]);
  let l = useMemo(() => s.filter(e => !isTrashed(e)), [s]);
  let d = useMemo(() => s.filter(e => isTrashed(e)), [s]);
  return useMemo(() => "loaded" !== t.status ? t : {
    status: "loaded",
    errors: null,
    data: {
      activeBranches: l,
      archivedBranches: d,
      ownBranches: o,
      branchActivityByKey: n,
      repo: t.data.repo
    }
  }, [t, l, d, o, n]);
}
function F() {
  let e = useDispatch();
  let t = useCallback(() => {
    e(hideModal());
  }, [e]);
  let [r, _] = useState(null);
  let h = useModalManager({
    open: !0,
    onClose: t
  });
  let [m, x, w] = _$$t.useTabs({
    active: !0,
    yours: !0,
    archived: !0
  });
  let L = useSelector(selectOpenFileKey);
  let k = useSelector(selectOpenFile);
  let F = selectCurrentUser();
  let j = $n();
  let U = $$M0(k?.fileRepoId || "");
  let B = useMemo(() => "loaded" === U.status ? U.data.repo : null, [U]);
  let G = useMemo(() => "loaded" === U.status ? U.data.branchActivityByKey : {}, [U]);
  let {
    selectedBranches,
    emptyStateText
  } = useMemo(() => {
    switch (w.activeTab) {
      case "active":
        return {
          emptyStateText: renderI18nText("collaboration.branching_modal.tab_active_empty_state"),
          selectedBranches: "loaded" === U.status ? U.data.activeBranches : []
        };
      case "yours":
        return {
          emptyStateText: renderI18nText("collaboration.branching_modal.tab_yours_empty_state"),
          selectedBranches: "loaded" === U.status ? U.data.ownBranches : []
        };
      case "archived":
        return {
          emptyStateText: renderI18nText("collaboration.branching_modal.tab_archived_empty_state"),
          selectedBranches: "loaded" === U.status ? U.data.archivedBranches : []
        };
      default:
        throwTypeError(w.activeTab);
    }
  }, [w, U]);
  let z = useMemo(() => selectedBranches.length < 1, [selectedBranches]);
  let W = "enabled" === j.createBranch.status;
  let K = useMemo(() => selectedBranches.filter(e => !!B && !isDefaultFileAlt(e, B)).map(e => {
    let t = G[e.key];
    return jsx(_$$v, {
      branch: e,
      isArchived: !!e.trashedAt,
      isCurrentBranch: L === e.key,
      isLoadingActivity: "loading" === U.status,
      isMain: !1,
      isMerged: !!t?.is_merged,
      isSelected: r === e.key,
      name: e.name,
      repo: B,
      setSelected: () => _(e.key),
      touchedAt: t?.created_at,
      user: t?.user
    }, e.key);
  }), [selectedBranches, G, B, L, r, _, U.status]);
  if (!k || !F) return null;
  let Y = jsx(_$$P, {
    className: jG,
    children: z ? jsx(P, {
      text: emptyStateText
    }) : jsx("ul", {
      className: Ge,
      children: K
    })
  });
  let $ = _$$s.p8.$;
  let X = _$$s.pr4.$;
  return jsx(fu, {
    name: e0.BRANCHES_MODAL,
    properties: {
      fileRepoId: k.fileRepoId,
      fileKey: k.key
    },
    children: jsx(ModalRootComponent, {
      manager: h,
      width: "lg",
      children: jsxs(vo, {
        children: [jsx(Y9, {
          children: jsx(hE, {
            children: renderI18nText("collaboration.branching_modal.title")
          })
        }), jsxs(nB, {
          padding: 0,
          children: [jsx("div", {
            className: $,
            children: jsxs(_$$t.TabStrip, {
              manager: w,
              children: [jsx(_$$t.Tab, {
                ...m.active,
                children: renderI18nText("collaboration.branching_modal.tab_active")
              }), jsx(_$$t.Tab, {
                ...m.yours,
                children: renderI18nText("collaboration.branching_modal.tab_yours")
              }), jsx(_$$t.Tab, {
                ...m.archived,
                children: renderI18nText("collaboration.branching_modal.tab_archived")
              }), W && jsx(jk, {
                children: jsx(_$$K, {
                  "aria-label": getI18nString("collaboration.branching_modal.create_branch_tooltip"),
                  onClick: () => {
                    k && e(_$$l({
                      trackingContextName: e0.FILE_BROWSER,
                      sourceFileKey: k.key,
                      dispatchedFromEditor: !0
                    }));
                  },
                  htmlAttributes: {
                    "data-tooltip-type": KindEnum.TEXT,
                    "data-tooltip": getI18nString("collaboration.branching_modal.create_branch_tooltip")
                  },
                  children: jsx(_$$e, {})
                })
              })]
            })
          }), jsx(D, {}), jsx("div", {
            className: X,
            children: jsx(_$$t.TabPanel, {
              ...x[w.activeTab],
              children: Y
            })
          })]
        })]
      })
    })
  });
}
F.displayName = "BranchesModal";
export let $$j1 = registerModal(F, "BranchesModal");
export const Yj = $$M0;
export const jS = $$j1;