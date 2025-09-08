import { useRef, useEffect, useMemo, useState, useCallback } from "react";
import { useSelector, useDispatch } from "../vendor/514228";
import { throwTypeError } from "../figma_app/465776";
import { AppStateTsApi } from "../figma_app/763686";
import { Rs } from "../figma_app/288654";
import { getI18nString } from "../905/303541";
import { rH } from "../figma_app/49598";
import { showModalHandler } from "../905/156213";
import { DM } from "../905/889062";
import { Rv } from "../figma_app/599979";
import { Jj, bY } from "../figma_app/2023";
import { $T } from "../figma_app/12535";
import { fullscreenValue } from "../figma_app/455680";
import { FC } from "../figma_app/212807";
import { FFileType } from "../figma_app/191312";
import { FBc } from "../figma_app/43951";
import { M4 } from "../905/713695";
import { getObservableValue } from "../figma_app/84367";
import { p6 } from "../figma_app/803787";
import { Se } from "../905/71785";
import { $S } from "../905/918620";
import { m as _$$m } from "../figma_app/913212";
import { $6 } from "../figma_app/791586";
import { rY } from "../figma_app/524655";
export function $$C2(e) {
  let t;
  let i = useSelector(e => e.mirror.appModel.pagesList || []);
  let a = i.length > 0 ? i[0].nodeId : "";
  let o = getObservableValue(AppStateTsApi?.canvasGrid().canvasGridArray, []);
  let l = useSelector(p6);
  switch (e?.editorType) {
    case "slides":
      t = rY(o)[0];
      break;
    case "cooper":
      let d = Object.values(l)[0];
      d && (t = d.node_id);
      break;
    default:
      t = a;
  }
  let c = useRef(null);
  useEffect(() => () => {
    c.current?.url && URL.revokeObjectURL(c.current.url);
  }, []);
  return () => {
    let i = $T(e, t);
    c.current = i;
    return i;
  };
}
export function $$T1(e) {
  let t = FC();
  let i = useSelector(e => e.authedProfilesById);
  let a = useSelector(e => e.figFileDuplicatedFromHubFile);
  let s = Rs(FBc({
    fileKey: e?.key ?? ""
  }), {
    enabled: !!e
  });
  let l = useMemo(() => "loaded" === s.status ? s.data.file?.publishedHubFile ?? null : null, [s]);
  if (!e || "loading" === s.status) return {
    canPublishAsHubFile: void 0
  };
  let d = Se(l);
  let c = $$k3(e, e.canEdit, {
    ...t,
    authedProfilesById: i,
    figFileDuplicatedFromHubFile: a
  }, d);
  return c ? {
    canPublishAsHubFile: !1,
    reason: c
  } : {
    canPublishAsHubFile: !0
  };
}
export function $$k3(e, t, i, n) {
  if (!t) return "CANNOT_EDIT_FILE";
  if ("is_template" in e && e.is_template || e.trackTags?.isTemplate || "is_new_user_playground_library" in e && e.is_new_user_playground_library || e.track_tags?.source === "default") return "IS_DEFAULT_FILE";
  if ("has_file_link_password" in e ? e.has_file_link_password : e.hasFileLinkPassword) return "FILE_REQUIRES_PASSWORD";
  let r = "parent_org_id" in e ? e.parent_org_id ?? null : "parentOrgId" in e ? e.parentOrgId : null;
  if (0 === Rv("team_id" in e ? e.team_id : e.teamId, i, n, r).length) return "NO_ALLOWED_AUTHORS";
  let a = !!i.figFileDuplicatedFromHubFile[e.key];
  let s = !n;
  if (a && s) return "CANNOT_PUBLISH_REMIX";
}
export function $$R5(e) {
  if (e) switch (e) {
    case "UNKNOWN":
      return getI18nString("general.error");
    case "CANNOT_EDIT_FILE":
      return getI18nString("community.publish.hub_file_error.you_do_not_have_edit_permissions");
    case "IS_DEFAULT_FILE":
      return getI18nString("community.publish.hub_file_error.cannot_publish_default_files");
    case "FILE_REQUIRES_PASSWORD":
      return getI18nString("community.publish.hub_file_error.cannot_publish_password_protected_files");
    case "NO_ALLOWED_AUTHORS":
      return getI18nString("community.permissions_modal_publish_tab.footer.publish_admins_only");
    case "CANNOT_PUBLISH_REMIX":
      return getI18nString("community.publish.hub_file_error.remixes_unavailable_until_first_publish");
    default:
      throwTypeError(e);
  }
}
export function $$N0({
  figFileKey: e
}) {
  let t = useDispatch();
  let {
    data
  } = M4.useFile(e);
  let a = $S({
    fileKey: e ?? "",
    file: data ?? null
  });
  let s = useMemo(() => data ? "loaded" === a.status && a.data.file ? Jj(a.data.file) : bY(data) : void 0, [data, a]);
  let [o, l] = useState(!1);
  return {
    inProgress: o,
    doSetup: useCallback(async () => {
      if (!s) return !1;
      switch (l(!0), s.editor_type) {
        case FFileType.COOPER:
          fullscreenValue?.triggerAction("cooper-make-brand-templates", {
            source: "share-modal-publish-to-community"
          });
          break;
        case FFileType.FIGMAKE:
          if (await $6(s.key)) {
            t(showModalHandler({
              type: _$$m,
              data: {}
            }));
            return !1;
          }
      }
      await t(rH({
        fileKey: s.key
      }));
      l(!1);
      return !0;
    }, [t, s])
  };
}
export function $$P4(e, t) {
  let i = $$C2(e);
  let [r, a] = useState(null);
  useEffect(() => {
    if (!e) {
      a(null);
      return;
    }
    if (e.editorType === FFileType.FIGMAKE && t) {
      let n = {
        key: e.key,
        thumbnail_guid: e.thumbnailGuid ?? null
      };
      DM(n, t).then(a).catch(() => {
        a(i());
      });
    } else a(i());
  }, [e, t, i]);
  return r;
}
export const Hz = $$N0;
export const Of = $$T1;
export const Pb = $$C2;
export const Q1 = $$k3;
export const T6 = $$P4;
export const Yw = $$R5;