function n(e) {
  if (Array.isArray(e)) return function (e) {
    let t = e.map(e => n(e)).join(",");
    return `[${t}]`;
  }(e);
  switch (typeof e) {
    case "object":
      if (null === e) return "null";
      return function (e) {
        let t = Object.entries(e).map(([e, t]) => `${JSON.stringify(e)}: ${n(t)}`).join(",");
        return `{ ${t} }`;
      }(e);
    case "string":
      if (e.startsWith("{")) return e;
      return JSON.stringify(e);
    case "number":
    case "boolean":
    case "undefined":
      return `${e}`;
    default:
      throw Error(`valueToString: Unknown value type for ${e}`);
  }
}
export function $$r0(e) {
  return Object.entries(e).map(([e, t]) => {
    switch (typeof t) {
      case "string":
        if (t.includes('"') && !t.startsWith("{")) return {
          name: e,
          value: `{${n(t)}}`
        };
        return {
          name: e,
          value: n(t)
        };
      case "object":
      case "number":
      case "boolean":
      case "undefined":
        return {
          name: e,
          value: `{${n(t)}}`
        };
      default:
        throw Error(`toReactProps: Unknown value type for ${t}`);
    }
  }).map(({
    name: e,
    value: t
  }) => `${e}=${t}`).join(" ");
}
export const d = $$r0;