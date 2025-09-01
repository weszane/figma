export function $$n1(e) {
  return function (e) {
    let t = {};
    for (let r in e) {
      let n = e[r];
      let i = r.substring(0, r.lastIndexOf("#"));
      i && n && (t[i] = "value" in n ? n.value : n.defaultValue);
    }
    return t;
  }(e.isCodeInstance ? e.componentProperties() : e.isState ? e.parentNode.componentPropertyDefinitions() : e.componentPropertyDefinitions());
}
export function $$i0(e) {
  return Object.entries(e.isCodeInstance ? e.componentProperties() : e.isState ? e.parentNode.componentPropertyDefinitions() : e.componentPropertyDefinitions()).filter(([e, t]) => "INSTANCE_SWAP" === t.type).reduce((e, [t, r]) => {
    let n = t.substring(0, t.lastIndexOf("#"));
    return {
      ...e,
      [n]: "value" in r ? r.value : r.defaultValue
    };
  }, {});
}
export const K8 = $$i0;
export const jT = $$n1;