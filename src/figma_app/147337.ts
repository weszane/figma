import { useMemo, useCallback } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { resourceUtils } from "../905/989992";
import { useMultiSubscription, useSubscription } from "../figma_app/288654";
import { FlashActions } from "../905/573154";
import { getI18nString } from "../905/303541";
import { a as _$$a } from "../905/999566";
import { showModalHandler } from "../905/156213";
import { nb } from "../figma_app/543100";
import { getUserId } from "../905/372672";
import { Au } from "../figma_app/518077";
import { FileWorkspacePinActionsView, WorkspacePinnedFileKeysView } from "../figma_app/43951";
export let $$m0 = "workspace";
export function $$g3(e, t = {}) {
  let r = getUserId();
  let o = useSelector(e => e.currentUserOrgId);
  let l = useMemo(() => e.map(e => ({
    fileKey: e,
    orgId: o
  })), [e, o]);
  let d = useMultiSubscription(FileWorkspacePinActionsView, l, t);
  let c = Au(o);
  let u = resourceUtils.all([c, ...d.map(e => e.result)]);
  return resourceUtils.useTransform(u, ([t, ...n]) => {
    let i = new Map();
    n.forEach((n, a) => {
      let {
        file
      } = n;
      let l = e[a];
      let d = file?.computedWorkspace?.workspace ?? null;
      if (!o || !file || !d) {
        i.set(l, null);
        return;
      }
      let c = d.pinnedFiles;
      let u = c?.find(e => e.file?.key === l);
      let p = !!c && c.length >= $$T1;
      let _ = !!t && t === d.id;
      let h = d.canAdmin;
      let m = u?.creator?.id === r;
      let g = !u && (_ || h) && (file.canPinToWorkspace || file.canEdit);
      let f = g && !p;
      let E = u && (m || h);
      if (g) {
        i.set(l, {
          shouldShowPinFileToWorkspaceAction: g,
          canPinFileToWorkspace: f,
          canEditPin: !1,
          existingFilePinId: null,
          workspaceHasMaxPins: p
        });
        return;
      }
      if (E) {
        i.set(l, {
          shouldShowPinFileToWorkspaceAction: g,
          canPinFileToWorkspace: f,
          canEditPin: !0,
          existingFilePinId: u.id,
          workspaceHasMaxPins: p
        });
        return;
      }
      i.set(l, {
        shouldShowPinFileToWorkspaceAction: !1,
        canPinFileToWorkspace: !1,
        canEditPin: !1,
        existingFilePinId: null,
        workspaceHasMaxPins: p
      });
    });
    return i;
  }, f);
}
function f(e, t) {
  let r = Array.from(e.keys());
  let n = Array.from(t.keys());
  return r.length === n.length && r.every(r => shallowEqual(e.get(r), t.get(r)));
}
export function $$E5(e, t = {}) {
  let r = $$g3(useMemo(() => e ? [e] : [], [e]), t);
  return resourceUtils.useTransformShallowEqual(r, t => t.get(e ?? ""));
}
export function $$y6(e, t) {
  let r = function (e, {
    enabled: t = !0
  } = {}) {
    let r = useSubscription(WorkspacePinnedFileKeysView, {
      workspaceId: e
    }, {
      enabled: t
    });
    return resourceUtils.useTransformShallowEqual(r, e => {
      if (!e.workspace || !e.workspace.pinnedFiles) return null;
      let t = [];
      for (let r of e.workspace.pinnedFiles) r.file && t.push(r.file.id);
      return t;
    });
  }(t);
  let n = resourceUtils.all([e, r]);
  return resourceUtils.useTransformShallowEqual(n, ([e, r]) => {
    if (!e) return [];
    let n = [];
    let i = new Set(...(r ?? []));
    for (let r of e) !r || r.workspaceId !== t || !r.canPinToWorkspace || i.has(r.key) || n.push(r);
    return n;
  });
}
export function $$b2(e) {
  let t = useDispatch();
  return useCallback((r, n) => {
    if (n) {
      t(FlashActions.error(getI18nString("file_browser.pinning.add_pin_error_max_pins", {
        maxNumWorkspacePins: $$T1
      })));
      return;
    }
    t(showModalHandler({
      type: _$$a(),
      data: {
        fileKey: r,
        source: e
      }
    }));
  }, [t, e]);
}
export let $$T1 = 8;
export function $$I4(e) {
  return {
    type: nb.FILE,
    file: {
      ...e,
      signedPreviewThumbnailUrls: null
    },
    sharedWithYouFields: null
  };
}
export const AH = $$m0;
export const D1 = $$T1;
export const GI = $$b2;
export const H6 = $$g3;
export const bn = $$I4;
export const pH = $$E5;
export const z1 = $$y6;