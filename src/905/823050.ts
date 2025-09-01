export function $$n0(e) {
  let t = new Set(e);
  return (e, i, ...n) => {
    let r = (n.length ? n : i?.children) || [];
    if (r = Array.isArray(r) ? r : [r], t.has(e)) return {
      type: e,
      props: i,
      children: r
    };
    if ("function" == typeof e) {
      r = r.map((e, t) => ("object" == typeof e?.props && (e.props = {
        key: "children-" + t,
        ...e.props
      }), e));
      let t = e({
        ...i,
        children: r
      });
      t && "object" == typeof t && t.props && i && null != i.key && (t.props.key = i.key);
      return t;
    }
    throw Error("Component is not a function");
  };
}
export function $$r1(e) {
  return `(${$$n0.toString()})(${JSON.stringify(e)})`;
}
export const H = $$n0;
export const n = $$r1;