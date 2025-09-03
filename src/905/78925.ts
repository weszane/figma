import { jsx, Fragment } from "react/jsx-runtime";
import { useState, useMemo, useRef, useCallback } from "react";
import { lQ } from "../905/934246";
import { Z_n, rXF, rcl } from "../figma_app/763686";
import { l7 } from "../905/189185";
import { getFeatureFlags } from "../905/601108";
import { t as _$$t } from "../905/303541";
import { Jo, If } from "../figma_app/565242";
import { _j } from "../figma_app/843119";
import { oj, Hb } from "../figma_app/986594";
import { getSingletonSceneGraph } from "../905/700578";
import { gL } from "../figma_app/618433";
import { dx } from "../figma_app/649254";
import { U } from "../905/492359";
import { wv } from "../figma_app/328825";
import { Y5 } from "../figma_app/455680";
import { di } from "../figma_app/149989";
export function $$b0({
  onClose: e,
  cmsFieldTypes: t
}) {
  let [i, b] = useState("");
  let {
    collection,
    fields,
    selectedItem,
    currentView,
    selectedNodes
  } = function () {
    let e = getSingletonSceneGraph();
    let t = oj(e.getDirectlySelectedNodes());
    let i = t[0]?.getNearestDakotaCollectionId();
    let n = gL(i ?? "");
    let a = t[0]?.getNearestDakotaCollectionItemId();
    let s = dx({
      collectionId: i,
      itemId: a
    });
    let o = useMemo(() => n.data && n.data.fieldSchemas && s.data && s.data.fields ? (n.data?.fieldSchemas || []).map(e => {
      let t = s.data?.fields?.find(t => t.fieldSchemaId === e.id);
      return {
        type: "CMS_FIELD",
        value: e,
        itemField: t
      };
    }) : [], [n.data, s.data]);
    let l = useMemo(() => {
      let e = t[0]?.getDakotaFieldId();
      return o.find(t => t.value.id === e) ?? null;
    }, [o, t]);
    let d = useMemo(() => ({
      type: "CMS_FIELDS",
      collectionId: n.data?.id ?? "",
      collectionName: n.data?.name ?? "",
      layout: "list"
    }), [n]);
    return {
      collection: n.data,
      fields: o,
      selectedItem: l,
      currentView: d,
      selectedNodes: t
    };
  }();
  let w = fields.filter(e => t.find(t => t.fieldType === e.value.fieldType));
  let C = useRef(null);
  let T = useCallback(t => {
    if (!collection) return;
    let i = (e, i, n) => {
      let r = {
        type: Z_n.CMS_ALIAS,
        resolvedType: e,
        value: {
          collectionId: collection.id,
          fieldSchemaId: t.value.id
        }
      };
      l7.user(n, () => {
        selectedNodes?.forEach(e => e.getNodesForCmsBinding(collection.id).forEach(e => e.updateVariableConsumption(i, r)));
      });
    };
    switch (t.value.fieldType) {
      case _j.RICH_TEXT:
        selectedNodes?.every(e => "CMS_RICH_TEXT" === e.type) ? i(rXF.JS_RUNTIME_ALIAS, "CMS_SERIALIZED_RICH_TEXT_DATA", "dakota-set-rich-text-binding") : selectedNodes?.every(e => "TEXT" === e.type) && (selectedNodes?.every(e => !e.isInstanceSublayer) ? Y5.triggerActionEnumInUserEditScope(rcl.CREATE_CMS_RICH_TEXT, {
          args: {
            collectionId: collection.id,
            fieldId: t.value.id
          }
        }) : getFeatureFlags().cms_rt_instances && selectedNodes?.every(e => e.isInstanceSublayer) && Y5.triggerActionEnumInUserEditScope(rcl.CREATE_CMS_RICH_TEXT_IN_INSTANCE, {
          args: {
            collectionId: collection.id,
            fieldId: t.value.id
          }
        }));
        break;
      case _j.PLAIN_TEXT:
        i(rXF.STRING, "TEXT_DATA", "dakota-set-text-binding");
        break;
      case _j.DATE:
        Jo(collection.id, t.value.id);
        break;
      case _j.IMAGE:
        If(collection.id, t.value.id);
    }
    e();
  }, [collection, e, selectedNodes]);
  let k = Hb();
  if (!U() || !selectedNodes || 0 === selectedNodes.length) return null;
  let R = null == collection || wv(t);
  if (!k || R) {
    let e = R ? _$$t("cms_specs.to_update_connections_must_be_in_cms_container") : _$$t("cms_specs.to_update_connections_all_selected");
    return jsx("div", {
      style: {
        height: "160px",
        color: "var(--color-text-secondary)",
        display: "flex",
        alignItems: "center",
        textAlign: "center",
        padding: "0 38px 0 38px"
      },
      children: e
    });
  }
  return jsx(di, {
    cmsCollectionItem: {
      collectionName: collection.name,
      cmsFields: w,
      fieldTypes: t
    },
    currentView,
    disabledVariableIds: new Set(),
    dsStyles: [],
    onCMSFieldSelected: T,
    onClose: e,
    onSearchInputChange: b,
    onVariableSelected: lQ,
    pickerControls: jsx(Fragment, {}),
    pickerType: "fields",
    recordingKey: "cmsBindingsDropdown",
    searchInputRef: C,
    searchQuery: i,
    selectedItem,
    variableSets: [],
    variables: []
  });
}
export const h = $$b0;