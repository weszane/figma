import { um } from "../figma_app/27355";
import { glU } from "../figma_app/763686";
export let $$$$n0 = um(!1, (e, t) => {
  switch (t.type) {
    case "ACTIVATE_AND_MAXIMIZE":
      glU?.setActiveEmbed(t.payload.embedNodeID);
      return !0;
    case "MINIMIZE":
      return !1;
    default:
      return e;
  }
});
export const n = $$$$n0;