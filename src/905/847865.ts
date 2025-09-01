export function $$n0(e) {
  switch (e.type) {
    case "TOPLEVEL":
      return {
        type: "TOPLEVEL",
        variant: e.variant,
        topLevelFrames: r(e.topLevelFrames),
        unfilteredScene: r(e.unfilteredScene)
      };
    case "HOTSPOTS":
      return {
        type: "HOTSPOTS",
        variant: e.variant,
        selectedHotspots: r(e.selectedHotspots),
        contextFrames: r(e.contextFrames),
        frameTextSummaries: r(e.frameTextSummaries),
        unfilteredScene: r(e.unfilteredScene),
        selectedNodeIDs: r(e.selectedNodeIDs)
      };
    case "EMPTY":
      return {
        type: "EMPTY"
      };
    default:
      throw Error("Unsupported MagicLinkSelectionInput type");
  }
}
function r(e) {
  let t = new Map();
  let i = 0;
  return JSON.stringify(function e(n) {
    if ("object" != typeof n || null === n) return n;
    if (t.has(n)) return {
      $ref: t.get(n)
    };
    {
      let r = i++;
      t.set(n, r);
      let a = Array.isArray(n) ? [] : {};
      for (let t in n) n.hasOwnProperty(t) && (a[t] = e(n[t]));
      return {
        $id: r,
        value: a
      };
    }
  }(e));
}
export const w = $$n0;