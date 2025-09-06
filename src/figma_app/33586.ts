import { useDispatch } from "../vendor/514228";
import { throwTypeError } from "../figma_app/465776";
import { getI18nString } from "../905/303541";
import { AC, Pg } from "../figma_app/777551";
import { JZ } from "../figma_app/696043";
import { r as _$$r } from "../figma_app/896657";
import { to } from "../905/156213";
import { A } from "../905/482208";
import { LR } from "../figma_app/120210";
import { TA } from "../905/372672";
import { M } from "../figma_app/170366";
import { YQ } from "../figma_app/300692";
import { m3 } from "../figma_app/45218";
import { k2 } from "../figma_app/10554";
import { ho, k0, ZQ } from "../figma_app/155287";
import { KM } from "../figma_app/224019";
import { H } from "../figma_app/441663";
import { cq } from "../905/794154";
import { K } from "../figma_app/364226";
export function $$I1(e) {
  let t;
  let r = useDispatch();
  let i = TA();
  if (!e || i !== e.creator.id) return null;
  if (AC(e)) t = getI18nString("community.plugins.cancel_review");else if (m3(e)) {
    if (Pg(e)) return null;
    t = getI18nString("community.resource.delist");
  } else t = getI18nString("community.resource.unpublish");
  return {
    displayText: t,
    callback: () => {
      r(to({
        type: H,
        data: {
          plugin: e
        },
        showModalsBeneath: !0
      }));
    }
  };
}
export function $$S0(e, t) {
  let r = useDispatch();
  let i = LR();
  let {
    close
  } = cq();
  let o = e && !e.error ? t ? getI18nString("community.plugins.publish_new_version") : getI18nString("community.resource.publish") : t ? t.is_widget ? getI18nString("community.plugins.edit_resource_details.widget") : getI18nString("community.plugins.edit_resource_details.plugin") : void 0;
  return o ? {
    displayText: o,
    callback: () => {
      i();
      close();
      r(_$$r({
        localFileId: e?.localFileId,
        publishedPluginId: t?.id,
        entryPoint: k2.EDITOR
      }));
    }
  } : null;
}
export function $$v2(e, t) {
  let r = useDispatch();
  if (!e || !t) return null;
  switch (e) {
    case ho.LOAD:
      return {
        action: () => {
          let e = t.localFileId;
          r(JZ({
            resourceType: k0(t) ? "widget" : "plugin",
            localFileIdToRemove: e
          }));
        },
        msg: getI18nString("universal_insert.missing_manifest"),
        buttonText: getI18nString("universal_insert.locate"),
        displayText: getI18nString("universal_insert.locate_missing_manifest")
      };
    case ho.VALIDATE:
    case ho.PARSE:
      return {
        action: () => {
          r(to({
            type: K,
            data: {
              localPlugin: t
            }
          }));
        },
        msg: getI18nString("universal_insert.manifest_error"),
        buttonText: getI18nString("universal_insert.see_details"),
        displayText: getI18nString("universal_insert.manifest_error_view")
      };
    default:
      throwTypeError(e);
  }
}
export function $$A5(e, t, r, i = k2.EDITOR) {
  let s = useDispatch();
  let {
    close
  } = cq();
  return {
    displayText: getI18nString("universal_insert.manage_permissions"),
    callback: () => {
      r && r();
      close();
      let n = e && ZQ(e) ? e.localFileId : void 0;
      s(_$$r({
        localFileId: n,
        publishedPluginId: t?.id,
        initialTab: KM.PERMISSIONS,
        entryPoint: i
      }));
    }
  };
}
export function $$x4(e) {
  let t = M();
  return e ? {
    displayText: A(YQ()),
    callback: () => {
      t && t.openExtensionDirectory(e.localFileId);
    }
  } : null;
}
export function $$N3(e, t) {
  return {
    displayText: e ? getI18nString("universal_insert.remove_local_version") : getI18nString("universal_insert.remove"),
    callback: t
  };
}
export function $$C6(e) {
  let {
    extension,
    publishedExtension,
    localPublishedExtension
  } = e;
  let s = useDispatch();
  return !publishedExtension || localPublishedExtension ? null : {
    displayText: getI18nString("qa.extensions.locate_local_version"),
    callback: () => {
      s(JZ({
        resourceType: k0(extension) ? "widget" : "plugin"
      }));
    }
  };
}
export const NV = $$S0;
export const OX = $$I1;
export const Pt = $$v2;
export const qi = $$N3;
export const qu = $$x4;
export const x2 = $$A5;
export const xZ = $$C6;