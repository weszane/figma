import { c2 } from "../905/382883";
import { ServiceCategories as _$$e } from "../905/165054";
import { dI, sH, fn } from "../905/871411";
import { getSingletonSceneGraph } from "../905/700578";
import { getFeatureFlags } from "../905/601108";
import { $D } from "../905/11";
import { t as _$$t } from "../905/303541";
import { se, _j } from "../figma_app/843119";
import { E7 } from "../905/216495";
import { xT } from "../figma_app/841415";
export function $$_7(e, t, r) {
  let n;
  let i = getSingletonSceneGraph();
  switch (e?.type) {
    case "internal":
      return (n = t.find(t => t.guid === e.id)?.name || (e.id ? i?.get(e.id)?.name : void 0)) ? "/" === n ? _$$t("sites.panel.home") : n : "";
    case "url":
      return e.url;
    case "cms_link_field_alias":
      return e.fieldName;
    case "internal_cms_item_page":
      return (n = r.find(t => t.guid === e.id)?.name) ? ("/" === n ? _$$t("sites.panel.home") : n) + "/slug" : "";
    case "internal_cms_item_page_item":
      return (n = r.find(t => t.guid === e.id)?.name) ? ("/" === n ? _$$t("sites.panel.home") : n) + "/\u2026" : "";
    case "back":
      return _$$t("sites.panel.link_panel.back");
    case "anchor_link":
      return _$$t("sites.panel.link_panel.anchor_link");
    default:
      return "";
  }
}
export function $$h6(e) {
  try {
    let t = se.parse(JSON.parse(e));
    if (t.url) return {
      type: "url",
      url: t.url,
      openInNewTab: t.openInNewTab
    };
    if (t.guid) {
      let e = dI(t.guid);
      if (t.cmsTarget) {
        if (t.cmsTarget.cmsItemId && t.cmsTarget.fieldSchemaId) return {
          type: "internal_cms_item_page_item",
          itemId: t.cmsTarget.cmsItemId,
          fieldSchemaId: t.cmsTarget.fieldSchemaId,
          id: e
        };
        throw Error("Invalid cmsTarget in hyperlink for cms item page link");
      }
      return {
        type: "internal",
        id: e
      };
    }
  } catch (e) {
    $D(_$$e.CMS, Error("could not convert Fig.Hyperlink to Link"), {
      extra: {
        error: e.message
      }
    });
  }
  return {
    type: "url",
    url: "",
    openInNewTab: !0
  };
}
export function $$m0(e) {
  if ("url" === e.type) return {
    url: xT(e.url),
    openInNewTab: e.openInNewTab
  };
  if ("internal" === e.type || "internal_cms_item_page_item" === e.type) {
    let t = sH(e.id);
    return fn(t) ? "internal_cms_item_page_item" === e.type ? {
      guid: t,
      cmsTarget: {
        nodeId: t,
        cmsItemId: e.itemId,
        fieldSchemaId: e.fieldSchemaId
      }
    } : {
      guid: t
    } : ($D(_$$e.CMS, Error("Invalid node GUID for link"), {
      extra: {
        link: e
      }
    }), {});
  }
  return {};
}
export function $$g2(e) {
  return null == e || null == e.nodeId || null == e.cmsItemId || null == e.fieldSchemaId ? null : {
    type: "internal_cms_item_page_item",
    id: dI(e.nodeId),
    itemId: e.cmsItemId,
    fieldSchemaId: e.fieldSchemaId
  };
}
export function $$f3(e, t, r, n, s) {
  if (e && n) {
    let o = t && null != t.nodeId && null != t.cmsItemId && e.value.fieldSchemaId === r ? {
      type: "internal_cms_item_page",
      collectionId: e.value.collectionId,
      id: dI(t.nodeId)
    } : null;
    if (o) return o;
    let d = n && n.fieldType === _j.LINK && r && e.value.fieldSchemaId !== r ? {
      type: "cms_link_field_alias",
      collectionId: e.value.collectionId,
      fieldId: e.value.fieldSchemaId,
      fieldName: n.name,
      openInNewTab: s
    } : null;
    if (d) return d;
    $D(_$$e.CMS, Error("could not create a valid CMS Link from CMSAlias and provided args"), {
      extra: {
        cmsAlias: e,
        cmsTarget: t,
        fieldSchemaId: n?.id,
        slugFieldSchemaId: r
      }
    });
  }
  return null;
}
export function $$E4(e) {
  if (!getFeatureFlags().sts_links_v2) return !1;
  let t = "BACK" === e.connectionType;
  let r = "INTERNAL_NODE" === e.connectionType && "SCROLL_TO" === e.navigationType;
  return !!e.simpleLink && (r || t);
}
export function $$y5({
  interactionType: e,
  actions: t
}) {
  return "ON_CLICK" === E7(e) && 1 === t.length && void 0 !== t.find(e => e.connectionURL || "NAVIGATE" === e.navigationType) || getFeatureFlags().sts_links_v2 && t.find(e => $$E4(e));
}
export function $$b1(e, t) {
  return e?.type === t?.type && (e?.type === "cms_link_field_alias" && t?.type === "cms_link_field_alias" ? e.collectionId === t.collectionId && e.fieldId === t.fieldId && e.fieldName === t.fieldName : e?.type === "internal_cms_item_page_item" && t?.type === "internal_cms_item_page_item" ? e.fieldSchemaId === t.fieldSchemaId && e.id === t.id : c2(e, t));
}
export const Kd = $$m0;
export const MR = $$b1;
export const NW = $$g2;
export const Yt = $$f3;
export const cn = $$E4;
export const kc = $$y5;
export const o0 = $$h6;
export const u3 = $$_7;