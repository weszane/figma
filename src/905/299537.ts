import { cfv } from "../figma_app/763686";
import { AD } from "../905/871411";
import { um } from "../figma_app/27355";
let s = {
  positionRelativeToSelection: cfv.ABOVE,
  currentlySelectedNode: {
    nodeId: AD,
    ariaLabel: null
  }
};
let $$o0 = um(s, (e, t) => {
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