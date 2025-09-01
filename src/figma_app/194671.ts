import { l7 } from "../905/189185";
import { C } from "../905/887158";
import { debugState } from "../905/407919";
import { Oe } from "../figma_app/933328";
import { Hf } from "../figma_app/407414";
let $$l1 = {
  [C.REQUIRE_TOP_PADDING_VARIABLES]: "paddingTop",
  [C.REQUIRE_BOTTOM_PADDING_VARIABLES]: "paddingBottom",
  [C.REQUIRE_LEFT_PADDING_VARIABLES]: "paddingLeft",
  [C.REQUIRE_RIGHT_PADDING_VARIABLES]: "paddingRight"
};
let $$d0 = {
  STACK_PADDING_TOP: "paddingTop",
  STACK_PADDING_BOTTOM: "paddingBottom",
  STACK_PADDING_LEFT: "paddingLeft",
  STACK_PADDING_RIGHT: "paddingRight"
};
export async function $$c2(e, t, r, i, d, c) {
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
  let y = await E(Oe(f));
  if (!y) return !1;
  if (d) {
    switch (u) {
      case "paddingTop":
        e.stackTopPadding = resolvedValue.value;
        break;
      case "paddingBottom":
        e.stackBottomPadding = resolvedValue.value;
        break;
      case "paddingLeft":
        e.stackLeftPadding = resolvedValue.value;
        break;
      case "paddingRight":
        e.stackRightPadding = resolvedValue.value;
    }
    return !0;
  }
  try {
    if (l7.user("design-linter-apply-padding-variable", () => {
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
    console.error("Design linting error setting bound padding variable: ", e);
    return !1;
  }
}
export const N3 = $$d0;
export const QX = $$l1;
export const nw = $$c2;