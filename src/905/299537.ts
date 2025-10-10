import { Positioning } from "../figma_app/763686";
import { defaultSessionLocalIDString } from "../905/871411";
import { atomWithReducer } from "../figma_app/27355";
let s = {
  positionRelativeToSelection: Positioning.ABOVE,
  currentlySelectedNode: {
    nodeId: defaultSessionLocalIDString,
    ariaLabel: null
  }
};
let $$o0 = atomWithReducer(s, (e, t) => {
  switch (t.type) {
    case "SET_POS_RELATIVE_TO_SELECTION":
      return {
        ...e,
        positionRelativeToSelection: t.payload
      };
    case "SET_CURRENTLY_SELECTED_NODE":
      return {
        ...e,
        currentlySelectedNode: t.payload
      };
    default:
      return e;
  }
});
export const f = $$o0;