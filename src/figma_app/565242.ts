import { jsx } from "react/jsx-runtime";
import { useMemo, useState, useEffect } from "react";
import { ServiceCategories as _$$e } from "../905/165054";
import { N as _$$N } from "../905/670143";
import { I as _$$I } from "../905/783004";
import { G } from "../905/594445";
import { _ as _$$_ } from "../905/144222";
import { p as _$$p } from "../figma_app/304289";
import { Egt, Z_n, rXF } from "../figma_app/763686";
import { l7 } from "../905/189185";
import { UN } from "../905/700578";
import { Xr } from "../figma_app/27355";
import { tT, oA } from "../905/663269";
import { Nz } from "../905/417232";
import { Ez, e6, TZ, hu, kI } from "../figma_app/766708";
import { $D } from "../905/11";
import { g as _$$g } from "../905/880308";
import { t as _$$t } from "../905/303541";
import { lf, hl } from "../figma_app/11329";
import { X } from "../905/145028";
import { G as _$$G } from "../905/707993";
import { rU, _j, ap } from "../figma_app/843119";
import { oj } from "../figma_app/986594";
import { sD } from "../905/937198";
import { Y5 } from "../figma_app/455680";
import { zk } from "../figma_app/198712";
import { A2 } from "../figma_app/872077";
function O(e) {
  return e.sort((e, t) => Ez(t.position, e.position));
}
export function $$R3(e) {
  return function (e, t) {
    let {
      collection,
      status
    } = _$$G({
      collectionStableId: e
    });
    return useMemo(() => "loaded" !== status ? null : null == collection ? (sD("collection is null", {
      collectionId: e,
      fieldName: t
    }), null) : collection.fieldSchemas.find((e) => e.name === t) ?? null, [collection, e, t, status]);
  }(e, rU.Slug);
}
function L(e, t) {
  let {
    collection
  } = _$$G({
    collectionStableId: e
  });
  return useMemo(() => {
    if (collection?.fieldSchemas) {
      let e = collection.fieldSchemas.find((e) => e.name === t);
      return e?.id ?? null;
    }
    return null;
  }, [collection?.fieldSchemas, t]);
}
export function $$P6(e) {
  return L(e, rU.Slug);
}
export function $$D4(e) {
  return L(e, rU.Title);
}
export function $$k7(e) {
  let t = _$$G({
    collectionStableId: e
  });
  return t.status === tT.Loaded ? O((oA(t.collection)?.fieldSchemas ?? []).map((e) => ({
    ...e,
    action: "noop"
  }))) : [];
}
function M(e, t, r, n = {}) {
  let {
    name
  } = n;
  if (name) i = r > 1 ? `${name} ${r}` : `${name}`;else switch (e) {
    case _j.RICH_TEXT:
      i = _$$t("dakota.collection_field_editor.create_dropdown.rich_text_with_unique_index", {
        uniqueIndex: r
      });
      break;
    case _j.PLAIN_TEXT:
      i = _$$t("dakota.collection_field_editor.create_dropdown.plain_text_with_unique_index", {
        uniqueIndex: r
      });
      break;
    case _j.LINK:
      i = _$$t("dakota.collection_field_editor.create_dropdown.link_with_unique_index", {
        uniqueIndex: r
      });
      break;
    case _j.IMAGE:
      i = _$$t("dakota.collection_field_editor.create_dropdown.image_with_unique_index", {
        uniqueIndex: r
      });
      break;
    case _j.DATE:
      i = _$$t("dakota.collection_field_editor.create_dropdown.date_time_with_unique_index", {
        uniqueIndex: r
      });
      break;
    default:
      i = "";
  }
  let s = n.properties || {};
  e !== _j.DATE || ("dateType" in s ? Object.values(ap).includes(s.dateType) || ($D(_$$e.CMS, Error("Invalid DateType on Date field schema properties"), {
    extra: {
      properties: n.properties,
      fieldSchemaId: n.id
    }
  }), s = {
    ...s,
    dateType: ap.PLAIN_DATE
  }) : s = {
    ...s,
    dateType: ap.PLAIN_DATE
  });
  let o = _$$g();
  return {
    id: o,
    stableId: o,
    databaseId: o,
    name,
    fieldType: e,
    required: !!n.hasOwnProperty("required") && !!n.required,
    position: t ? e6(t) : TZ,
    properties: s,
    action: "create",
    version: "1"
  };
}
export function $$F0(e) {
  let t = e?.id;
  let [r, n] = useState([]);
  let s = Xr(lf);
  let o = Xr(hl);
  let [l, d] = useState([]);
  useEffect(() => {
    if (!t) {
      n(function () {
        let e = _$$g();
        let t = _$$g();
        return [{
          name: rU.Title,
          type: "string",
          fieldType: _j.PLAIN_TEXT,
          required: !0,
          position: TZ,
          properties: {},
          version: "1",
          id: e,
          stableId: e,
          databaseId: e
        }, {
          name: rU.Slug,
          type: "string",
          required: !0,
          fieldType: _j.SLUG,
          position: e6(TZ),
          properties: {},
          version: "1",
          id: t,
          stableId: t,
          databaseId: t
        }];
      }().map((e) => ({
        ...e,
        action: "create"
      })));
      return;
    }
    X({
      collectionStableId: t
    }).then((e) => {
      e ? e.fieldSchemas && n(O(e.fieldSchemas.map((e) => ({
        ...e,
        action: "noop"
      })))) : $D(_$$e.CMS, Error("useCollectionFields hook could not get the collection from livegraph"), {
        extra: {
          collectionId: t
        }
      });
    });
  }, [t]);
  let c = r.some((e, t) => r.some((r, n) => t !== n && r.name === e.name));
  return {
    collectionFields: r,
    createField: (e) => {
      let t = r[r.length - 1].position;
      let i = r.filter((t) => !(t.fieldType === _j.PLAIN_TEXT && [rU.Slug, rU.Title].includes(t.name)) && t.fieldType === e).length;
      let a = M(e, t || null, i + 1);
      n((e) => [...e, a]);
      s(a.id);
      o(a.id);
    },
    renameField: (e, i, s, o) => {
      if (e && i && s) {
        let e = s.trim();
        if (e !== o && e.length > 0) {
          if (!r.find((e) => e.id === i)) {
            $D(_$$e.CMS, Error("Renaming field failed: field not found in collection"), {
              extra: {
                fieldId: i,
                collectionId: t
              }
            });
            return;
          }
          let s = r.filter((t) => t.id !== i && (t.name === e || t.name.startsWith(e))).length;
          s > 0 && (e = `${e} ${s + 1}`);
          n(r.map((t) => t.id !== i ? t : "noop" === t.action ? {
            ...t,
            name: e,
            action: "update"
          } : {
            ...t,
            name: e
          }));
        }
      }
    },
    reorderField: (e, t, r) => {
      n((n) => {
        let i;
        let a = n.findIndex((e) => e.id === t);
        if (-1 === a) return n;
        let s = n[a];
        if (r === Nz.BEFORE) {
          if (0 === a) i = hu(s.position);else {
            let e = n[a - 1];
            if (!e) return n;
            i = kI(e.position, s.position);
          }
        } else if (r === Nz.AFTER) {
          if (a === n.length - 1) i = e6(s.position);else {
            let e = n[a + 1];
            if (!e) return n;
            i = kI(s.position, e.position);
          }
        }
        return O(n.map((t) => t.id === e ? {
          ...t,
          position: i ?? t.position,
          action: "create" === t.action ? "create" : "update"
        } : t));
      });
    },
    deleteField: (e) => {
      d((t) => [...t, e]);
      n((t) => t.filter((t) => t.stableId !== e.stableId));
      s(null);
    },
    submitFieldChanges: () => {
      if (t) {
        for (let t of r) "create" === t.action ? A2.createFieldSchema({
          collection: e,
          attributes: {
            name: t.name,
            required: t.required,
            position: t.position,
            fieldType: t.fieldType,
            properties: t.properties
          }
        }) : "update" === t.action && A2.updateFieldSchema({
          collection: e,
          fieldSchema: t,
          newAttributes: {
            name: t.name,
            fieldType: t.fieldType,
            position: t.position,
            properties: t.properties,
            required: t.required
          }
        });
        for (let t of l) A2.deleteFieldSchema({
          collection: e,
          fieldSchema: t
        });
      }
    },
    canEditField: (e) => {
      let t = r.find((t) => t.id === e);
      return t && !Object.values(rU).includes(t.name);
    },
    duplicateField: (e) => {
      let t = r.find((t) => t.id === e);
      let i = r[r.length - 1]?.position;
      if (!t || !i) return;
      let a = r.filter((e) => e.name === t.name || e.name.startsWith(t.name)).length;
      let o = M(t.fieldType, i || null, a + 1, {
        name: t.name,
        required: t.required,
        properties: t.properties
      });
      n((e) => [...e, o]);
      s(o.id);
    },
    canSubmit: !c,
    updateFieldProperties: (e, t) => {
      n((r) => r.map((r) => r.id === e ? {
        ...r,
        properties: {
          ...r.properties,
          ...t
        },
        action: "noop" === r.action ? "update" : r.action
      } : r));
    }
  };
}
export function $$j5(e) {
  switch (e) {
    case "link":
    case "slug":
      return jsx(_$$N, {});
    case "plain_text":
      return jsx(_$$I, {});
    case "rich_text":
      return jsx(G, {});
    case "image":
      return jsx(_$$_, {});
    case "date":
      return jsx(_$$p, {});
  }
}
export function $$U1(e, t) {
  let r = UN();
  let n = oj(r.getDirectlySelectedNodes());
  let i = {
    type: "IMAGE",
    color: {
      r: 1,
      g: 1,
      b: 1,
      a: 1
    },
    opacity: 1,
    imageScaleMode: "FILL",
    imageVar: {
      value: {
        cmsAliasValue: {
          collectionId: e,
          fieldId: t,
          itemId: ""
        }
      },
      dataType: "CMS_ALIAS",
      resolvedDataType: "IMAGE"
    }
  };
  let a = n[0].fills;
  let s = a.findIndex((t) => "IMAGE" === t.type && t.imageVar?.value?.cmsAliasValue?.collectionId === e);
  -1 !== s ? a[s] = i : a.push(i);
  l7.user("dakota-set-image-binding", () => {
    Egt?.clearSelection();
    Egt?.addToSelection([...new Set((n || []).flatMap((t) => t.getNodesForCmsBinding(e).map((e) => e.guid)))]);
    Y5.updateSelectionProperties({
      fillPaints: a
    }, {
      shouldCommit: zk.YES
    });
    Egt?.replaceSelection(n?.map((e) => e.guid) ?? [], !1);
  });
}
export function $$B2(e, t) {
  let r = UN();
  let n = oj(r.getDirectlySelectedNodes());
  let i = {
    type: Z_n.CMS_ALIAS,
    resolvedType: rXF.STRING,
    value: {
      collectionId: e,
      fieldSchemaId: t,
      itemId: "",
      type: "DATE"
    }
  };
  l7.user("dakota-set-date-binding", () => {
    for (let t of (n || []).flatMap((t) => t.getNodesForCmsBinding(e).filter((e) => "TEXT" === e.type))) t.updateVariableConsumption("TEXT_DATA", i);
  });
}
export const $h = $$F0;
export const If = $$U1;
export const Jo = $$B2;
export const Mo = $$R3;
export const QM = $$D4;
export const Tu = $$j5;
export const VC = $$P6;
export const uE = $$k7;