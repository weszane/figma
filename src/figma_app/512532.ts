import { permissionScopeHandler } from "../905/189185";
import { C } from "../905/887158";
import { debugState } from "../905/407919";
import { loadSharedVariableThunk } from "../figma_app/933328";
import { Hf } from "../figma_app/407414";
let $$l1 = {
  [C.REQUIRE_BOTTOM_LEFT_CORNER_RADIUS_VARIABLES]: "bottomLeftRadius",
  [C.REQUIRE_BOTTOM_RIGHT_CORNER_RADIUS_VARIABLES]: "bottomRightRadius",
  [C.REQUIRE_TOP_LEFT_CORNER_RADIUS_VARIABLES]: "topLeftRadius",
  [C.REQUIRE_TOP_RIGHT_CORNER_RADIUS_VARIABLES]: "topRightRadius"
};
let $$d2 = {
  RECTANGLE_BOTTOM_LEFT_CORNER_RADIUS: "bottomLeftRadius",
  RECTANGLE_BOTTOM_RIGHT_CORNER_RADIUS: "bottomRightRadius",
  RECTANGLE_TOP_LEFT_CORNER_RADIUS: "topLeftRadius",
  RECTANGLE_TOP_RIGHT_CORNER_RADIUS: "topRightRadius"
};
export async function $$c0(e, t, r, i, d, c) {
  let u = $$l1[i];
  if (!u) return !1;
  let {
    fixes,
    suggestionId
  } = t;
  if (!fixes || 0 === fixes.length) return !1;
  let h = fixes[0];
  if (!h) return !1;
  let {
    variableId,
    resolvedValue
  } = h;
  if (!variableId) return !1;
  let f = r.availableVariables[variableId];
  if (!f?.node_id) return !1;
  let E = debugState.dispatch;
  let y = await E(loadSharedVariableThunk(f));
  if (!y) return Promise.resolve(!1);
  if (d) {
    switch (e.rectangleCornerRadiiIndependent = !0, u) {
      case "topLeftRadius":
        e.rectangleTopLeftCornerRadius = resolvedValue.value;
        break;
      case "topRightRadius":
        e.rectangleTopRightCornerRadius = resolvedValue.value;
        break;
      case "bottomLeftRadius":
        e.rectangleBottomLeftCornerRadius = resolvedValue.value;
        break;
      case "bottomRightRadius":
        e.rectangleBottomRightCornerRadius = resolvedValue.value;
    }
    return !0;
  }
  try {
    if (permissionScopeHandler.user("design-linter-apply-corner-radius-variable", () => {
      e.setBoundVariable(u, y);
    }), c) {
      let e = f.variableSetId;
      let t = "LIBRARY" === f.subscriptionStatus ? f.key.toString() : f.keyForPublish.toString();
      Hf({
        suggestionId,
        variableKey: t,
        subscriptionStatus: f.subscriptionStatus,
        variableSetId: e,
        ruleId: i
      });
    }
    return !0;
  } catch (e) {
    console.error("Design linting error setting bound variable: ", e);
    return !1;
  }
}
export const Nd = $$c0;
export const SF = $$l1;
export const tY = $$d2;