import { flatten } from "src/figma_app/656233";
import { RR } from "src/figma_app/338442";
import { Fullscreen, PageSelectionType } from "src/figma_app/13528";
import { ComponentPropType } from "src/figma_app/175377";
let $$o1 = (e, t) => {
  let i;
  if (e.length) {
    for (let n of e) {
      let e = t.get(n);
      if (!e || "INSTANCE" !== e.type) continue;
      let r = e.symbolId;
      if (!r) continue;
      let a = t.get(r);
      if (!a) continue;
      if (a.isLooseComponent) return;
      let s = a.containingStateGroupId;
      if (s) {
        if (void 0 === i) i = s;else if (s !== i) return;
      }
    }
    return i;
  }
};
let $$l4 = (e, t) => {
  let i;
  if (e.length) {
    for (let n of e) {
      let e;
      let r = t.get(n);
      if (r && (r.isInstance ? e = r.symbolId : r.isCodeInstance ? e = r.backingCodeComponent?.guid : "CODE_LAYER" === r.type && (e = r.guid), e)) {
        if (void 0 === i) i = e;else if (e !== i) return;
      }
    }
    return i;
  }
};
let d = (e, t, i) => {
  let o = function (e) {
    switch (e) {
      case ComponentPropType.TEXT:
        return RR.TEXT;
      case ComponentPropType.INSTANCE_SWAP:
        return RR.OVERRIDDEN_SYMBOL_ID;
      case ComponentPropType.BOOL:
        return RR.VISIBLE;
      default:
        throw Error(`Unsupported prop def type: ${e}`);
    }
  }(t.type);
  return flatten(e.map(e => Fullscreen?.getInstanceSublayersControlledByDirectPropAssignment(e, t.explicitDefID, o)?.map(e => i.guidFromDeveloperFriendlyId(e)) ?? []));
};
let $$c2 = (e, t) => {
  let i = (e, n, r = !0) => {
    if (r && (!e.visible || e.locked)) return [];
    let a = [];
    a.push(...e.childrenGuids.flatMap(e => {
      let a = t.get(e);
      return a ? i(a, n, r) : [];
    }));
    n(e) && a.push(e);
    return a;
  };
  return i(e, e => "TEXT" === e.type || "TEXT_PATH" === e.type);
};
let $$u0 = (e, t, i) => e.filter(e => {
  let n = e.propRefs["text-data"];
  return !(n && e.parentGuid && n.explicitDefID && t.some(e => e.explicitDefID === n.explicitDefID) && e.parentGuid === i);
});
export function $$p3(e, t, i, n, r, s, o) {
  return [...t.map(t => {
    let o = (i ? i[t.explicitDefID] : void 0) ?? t.defaultValue;
    let l = d(n, t, r);
    return {
      type: "TEXT_PROP_DEF",
      value: String(o ?? ""),
      setValue: i => {
        e.setProperties({
          [t.name]: i
        });
      },
      title: t.name,
      guids: l,
      onFocus: () => {
        0 !== l.length && (s(l[0]), r.get(l[0])?.hasMissingFont && setTimeout(() => {
          Fullscreen?.findMissingFontsAndShowPopoverWithScope(PageSelectionType.CURRENT_SELECTION);
        }, 0));
      }
    };
  }), ...o.map(e => ({
    type: "TEXT_NODE",
    value: e.characters,
    setValue: t => {
      e.characters = t;
    },
    title: e.name,
    guids: [e.guid],
    onFocus: () => {
      s(e.guid);
      r.get(e.guid)?.hasMissingFont && setTimeout(() => {
        Fullscreen?.findMissingFontsAndShowPopoverWithScope(PageSelectionType.CURRENT_SELECTION);
      }, 0);
    }
  }))];
}
export const E5 = $$u0;
export const Yi = $$o1;
export const _T = $$c2;
export const jv = $$p3;
export const k4 = $$l4;
