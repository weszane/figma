export function $$r0(e, t) {
  let {
    flexDirection,
    justifyContent,
    alignItems
  } = t.styles;
  let a = function (e) {
    switch (e) {
      case "flex-start":
        return "MIN";
      case "flex-end":
        return "MAX";
      case "center":
        return "CENTER";
      case "space-between":
        return "SPACE_BETWEEN";
      case "space-around":
        return "SPACE_EVENLY";
      default:
        throw Error(`Unknown justify-content: ${e}`);
    }
  }(justifyContent);
  let n = function (e) {
    switch (e) {
      case "flex-start":
        return "MIN";
      case "center":
        return "CENTER";
      case "flex-end":
        return "MAX";
      default:
        throw Error(`Unknown align-items: ${e}`);
    }
  }(alignItems);
  e.stackPrimarySizing = "FIXED";
  e.stackCounterSizing = "FIXED";
  e.stackMode = "column" === flexDirection ? "VERTICAL" : "HORIZONTAL";
  e.stackPrimaryAlignItems = a;
  e.stackCounterAlignItems = n;
}
export const u = $$r0;