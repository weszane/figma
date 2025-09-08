import { parseSessionLocalID, isValidSessionLocalID, sessionLocalIDToString } from "../905/871411";
export function $$r0({
  sceneGraph: e,
  selectionNodeIds: t,
  toolArgs: i,
  allowMultiNode: r,
  allowPageNode: a
}) {
  if (i?.nodeId) {
    if ("string" != typeof i?.nodeId || "" === i.nodeId.trim()) throw Error(`Invalid nodeId provided in toolArgs: ${JSON.stringify(i)}`);
    let t = function (e) {
      let t = e.replace(/-/g, ":");
      let i = parseSessionLocalID(t);
      if (null === i || !isValidSessionLocalID(i)) throw Error(`Invalid nodeId provided: ${e}`);
      return sessionLocalIDToString(i);
    }(i.nodeId);
    try {
      return [function ({
        sceneGraph: e,
        nodeId: t
      }) {
        let i = e.get(t);
        if (!i) throw Error("Could not find node from the provided nodeId");
        return i;
      }({
        sceneGraph: e,
        nodeId: t
      })];
    } catch (e) {
      throw Error(`No node could not be found for the provided nodeId: ${t}. Make sure the Figma desktop app is open and the document containing the node is the active tab.`);
    }
  }
  return function (e, t, i, n) {
    if (0 === t.length) {
      if (n) {
        let t = e.getCurrentPage();
        if (!t) throw Error("No page found");
        return [t];
      }
      throw Error("Nothing is selected");
    }
    let r = t.map(t => e.get(t)).filter(e => null !== e);
    if (0 === r.length) throw Error("Could not find node from selection");
    if (r.length > 1 && !i) throw Error("Multiple nodes selected. Only selecting a single node is supported.");
    return r;
  }(e, t, r, a);
}
export const Q = $$r0;