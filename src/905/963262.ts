export let $$n1 = /_INTERNAL_PILL_KEY_[0-9]+_/g;
export function $$r0({
  output: e,
  sceneGraph: t,
  includeInstancePills: i = !0,
  unrenderableInstanceMessage: n
}) {
  let r;
  let a;
  if ("example" in e.data) {
    r = e.data.example.sections;
    a = e.data.example.language;
  } else {
    if ("VALUE" === e.data.type) return {
      language: "javascript",
      code: e.data.preview,
      pills: {}
    };
    r = e.data.sections;
    a = e.data.language;
  }
  let s = 0;
  let o = {};
  return {
    language: a,
    code: r.map(e => {
      if ("CODE" === e.type) return e.code;
      if ("INSTANCE" === e.type) {
        let r = `_INTERNAL_PILL_KEY_${s++}_`;
        let a = t.get(e.guid);
        return (o[r] = {
          type: "INSTANCE",
          id: e.guid,
          name: a?.name ?? ""
        }, i) ? r : n ?? "";
      }
      if ("ERROR" === e.type) {
        let t = `_INTERNAL_PILL_KEY_${s++}_`;
        o[t] = {
          type: "ERROR",
          id: t,
          message: e.message,
          errorObject: e.errorObject
        };
        return t;
      }
      console.error("Unknown section type", e);
      return "";
    }).join(""),
    pills: o
  };
}
export const A = $$r0;
export const k = $$n1;