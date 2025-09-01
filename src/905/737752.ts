export function $$n0(e) {
  if (null == e) return {};
  if ("string" == typeof e || "number" == typeof e) return {
    padding: e
  };
  let {
    top,
    bottom,
    left,
    right
  } = e;
  return {
    paddingTop: top,
    paddingBottom: bottom,
    paddingLeft: left,
    paddingRight: right
  };
}
export const Q = $$n0;