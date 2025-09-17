import { getSingletonSceneGraph } from "../905/700578";
import { Ez } from "../figma_app/766708";
import { X } from "../905/145028";
import { J } from "../905/539754";
import { logCmsError } from "../905/937198";
import { $$if } from "../figma_app/97020";
export async function $$d0(e) {
  let t = Object.values(e.nodeById).reduce((e, t) => (t.cmsCollectionBindingProperties?.collectionId && e.add(t.cmsCollectionBindingProperties.collectionId), t.cmsItemFieldBindingProperties?.collectionId && e.add(t.cmsItemFieldBindingProperties.collectionId), e), new Set());
  if (0 === t.size) return null;
  let i = {};
  let n = {};
  await Promise.all(Array.from(t).map(async r => {
    let [l, d] = await Promise.all([X({
      collectionStableId: r
    }), J({
      collectionStableId: r
    })]);
    if (null == l) {
      logCmsError("collection is null", {
        cmsCollectionIds: t,
        bundle: e
      });
      return;
    }
    if (null == d) {
      logCmsError("items is null", {
        cmsCollectionIds: t,
        bundle: e
      });
      return;
    }
    let c = (l.fieldSchemas ?? []).map(e => ({
      id: e.id,
      name: e.name,
      type: e.fieldType
    }));
    let u = function (e, t) {
      let i = new Set();
      t.forEach(e => {
        "slug" === e.type && i.add(e.id);
      });
      let n = {};
      let r = {};
      e.forEach(e => {
        let t = [];
        if (e.fields) for (let n of e.fields) {
          t.push({
            id: n.id,
            itemId: n.itemId,
            fieldSchemaId: n.fieldSchemaStableId,
            value: n.value ?? ""
          });
          i.has(n.fieldSchemaStableId) && n.value && (r[e.id] = n.value);
        }
        n[e.id] = {
          id: e.id,
          index: e.position ?? "",
          fields: t
        };
      });
      return {
        itemById: n,
        slugByItemId: r
      };
    }(d, c);
    let p = {
      id: r,
      name: l.name,
      fieldSchemas: c,
      itemById: u.itemById
    };
    i[r] = p;
    Object.assign(n, u.slugByItemId);
  }));
  return {
    collectionById: i,
    slugByItemId: n
  };
}
async function c(e) {
  let t = await X({
    collectionStableId: e
  });
  if (null == t) {
    logCmsError("collection is null", {
      collectionId: e
    });
    return null;
  }
  let i = Object.values(t.fieldSchemas).find(e => "slug" === e.fieldType)?.id;
  let n = await J({
    collectionStableId: e
  });
  if (null == n) {
    logCmsError("items is null", {
      collectionId: e
    });
    return null;
  }
  let r = {};
  n.forEach(e => {
    let t = e.fields?.find(e => e.fieldSchemaId === i);
    t && t.value && (r[t.value] = e.id);
  });
  return r;
}
async function u(e, t) {
  let i = getSingletonSceneGraph().get(e);
  if (!i || !$$if(i)) return null;
  let r = i.getDakotaSelector()?.collectionId;
  if (!r) {
    logCmsError("collectionId is null", {
      nodeId: e
    });
    return null;
  }
  let a = await c(r);
  return null == a ? (logCmsError("slugToItemIdMap is null", {
    collectionId: r
  }), null) : a[t] ?? null;
}
function p(e, t) {
  "cmsItemFieldBindingProperties" in e && !("itemId" in e.cmsItemFieldBindingProperties) && (e.cmsItemFieldBindingProperties.itemId = t);
  "overrides" in e && e.overrides.forEach(e => {
    "value" in e && p(e.value, t);
  });
}
export async function $$m1(e, t, i, n, a) {
  if (!i || (!function (e, t) {
    for (let i of Object.values(e.nodeById)) {
      if (i?.type !== "REPEATER") continue;
      let n = i.cmsCollectionBindingProperties;
      let a = i.cmsRepeaterBindingProperties;
      if (!n?.collectionId || !a?.nodesToInstances) continue;
      let s = n.collectionId;
      let o = t.collectionById[s];
      if (!o) continue;
      let l = Object.entries(o.itemById).sort((e, t) => Ez(t[1].index || "", e[1].index || "")).reduce((e, [t], i) => (e[i] = t, e), {});
      Object.entries(a.nodesToInstances).filter(([t]) => e.nodeById[t]).forEach(([t, i]) => {
        let n = e.nodeById[t];
        let r = l[i];
        r && p(n, r);
      });
    }
  }(e, i), !a)) return;
  let s = await u(n, a);
  if (s) {
    !function (e, t) {
      for (let i of Object.values(e.nodeById)) p(i, t);
    }(e, s);
    let n = function (e, t, i) {
      let n = Object.values(e.nodeById).filter(e => e.cmsItemFieldBindingProperties?.collectionId && e.cmsItemFieldBindingProperties?.fillPaintsBoundCmsVariables);
      let r = new Set();
      let a = [];
      n.forEach(e => {
        let {
          collectionId,
          fillPaintsBoundCmsVariables
        } = e.cmsItemFieldBindingProperties;
        let o = t.collectionById[collectionId];
        let l = o?.itemById[i];
        o && l && Object.values(fillPaintsBoundCmsVariables).forEach(e => {
          let t = e?.boundVariables?.image?.fieldSchemaId;
          if (!t) return;
          let i = o.fieldSchemas.find(e => e.id === t);
          if (!i || "image" !== i.type) return;
          let n = l.fields.find(e => e.fieldSchemaId === t);
          if (n?.value) try {
            let e = JSON.parse(n.value);
            let t = e.image;
            "string" != typeof t || r.has(t) || (r.add(t), a.push({
              hash: t,
              height: e.originalImageHeight ?? 0,
              width: e.originalImageWidth ?? 0
            }));
          } catch (e) {
            console.error("Error parsing image field value:", e);
          }
        });
      });
      return a;
    }(e, i, s);
    !function (e, t) {
      for (let i of t) e.assets[i.hash] || (e.assets[i.hash] = {
        type: "PAINT_ASSET",
        url: `${i.hash}.png`,
        size: {
          x: i.width,
          y: i.height
        }
      });
    }(e, n);
    (function (e, t) {
      let i = new Set();
      for (let t of e) i.add(t.hash);
      for (let n of t) i.has(n.hash) || e.push({
        filename: `${n.hash}.png`,
        hash: n.hash,
        size: {
          x: n.width,
          y: n.height
        },
        type: "PAINT_ASSET",
        nodePosition: null
      });
    })(t, n);
  }
}
export const f = $$d0;
export const v = $$m1;