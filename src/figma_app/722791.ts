import { QB, $7, B_ } from "../905/258397";
export let $$i1 = new Set(["USER", "PLUGIN", "AI", "REST_API"]);
export function $$a4(e, t) {
  return Number($$i1.has(t.type)) - Number($$i1.has(e.type));
}
export let $$s3 = {
  MIXED: "MIXED",
  USER: "USER",
  PLUGIN: "PLGIN",
  AI: "AI",
  INVALID: "INVLD",
  SYSTEM: "SYSTM",
  TEST_SETUP: "TEST",
  REST_API: "REST",
  ONBOARDING: "ONBRD",
  AUTOSAVE: "ASAVE"
};
export function $$o2(e) {
  let t = [];
  for (let r of e?.snapshots ?? []) for (let e of r.frames ?? []) for (let r of e.stack ?? []) t.push(r);
  return t.sort($$a4);
}
export function $$l0(e) {
  let t = "INVALID";
  for (let r of e) if (r.type && "INVALID" !== r.type) {
    if ("INVALID" === t) t = r.type;else if (t !== r.type) {
      t = "MIXED";
      break;
    }
  }
  return {
    type: "editType",
    value: t
  };
}
export class $$d5 {
  constructor(e) {
    this.fieldNamesByFieldNumber = function (e) {
      let t = new Map();
      let r = e.definitions.find(e => "NodeChange" === e.name);
      if (!r) {
        console.error("Couldn't find NodeChange definition in schema");
        return t;
      }
      for (let e of r.fields) t.set(e.value, e.name);
      return t;
    }(e);
  }
  generateEditScopeItems(e) {
    let {
      editScopeInfo,
      aiEditedNodeChangeFieldNumbers
    } = e;
    return QB([editScopeInfo?.snapshots && this.generateEditScopeSnapshotsItem(editScopeInfo.snapshots), aiEditedNodeChangeFieldNumbers && this.generateAiEditedNodeFieldsItem(aiEditedNodeChangeFieldNumbers)]);
  }
  generateEditScopeSnapshotsItem(e) {
    return $7({
      label: "Edit Scope Snapshots",
      list: e,
      generateChild: (e, t) => t.nodeChangeFieldNumbers ? {
        label: e,
        children: [$7({
          label: "Frames",
          list: t.frames ?? [],
          generateChild: (e, t) => this.generateEditScopeSnapshotFrameItem(e, t),
          expandByDefault: !0
        }), $7({
          label: "Fields",
          list: t.nodeChangeFieldNumbers ?? [],
          generateChild: (e, t) => this.generateFieldItem(e, t),
          expandByDefault: !0
        })],
        expandByDefault: !0
      } : $7({
        label: e,
        list: t.frames ?? [],
        generateChild: (e, t) => this.generateEditScopeSnapshotFrameItem(e, t),
        expandByDefault: !0
      }),
      expandByDefault: !0
    });
  }
  generateAiEditedNodeFieldsItem(e) {
    return $7({
      label: "AI Edited Fields",
      list: e || [],
      expandByDefault: !0,
      generateChild: (e, t) => this.generateFieldItem(e, t)
    });
  }
  generateEditScopeSnapshotFrameItem(e, t) {
    return $7({
      label: e,
      list: t.stack ?? [],
      generateChild: (e, t) => B_(e, {
        type: "editScope",
        value: t
      }),
      expandByDefault: !0
    });
  }
  generateFieldItem(e, t) {
    let r = this.fieldNamesByFieldNumber.get(t);
    return B_(e, r ? {
      type: "nonUserText",
      value: r
    } : {
      type: "error",
      value: `Unknown field number ${t}`
    });
  }
}
export const TZ = $$l0;
export const YY = $$i1;
export const iC = $$o2;
export const nP = $$s3;
export const nd = $$a4;
export const tP = $$d5;