import { eU, Iz } from "../figma_app/27355";
import { C } from "../905/887158";
import { IZ } from "../figma_app/99772";
import { pZ, a7, QR, y6 } from "../figma_app/620124";
let $$o2 = eU(e => {
  let t = e(IZ);
  let r = {};
  let n = 0;
  let o = (e, t, i) => {
    r[e] || (r[e] = {});
    r[e][t] || (r[e][t] = []);
    r[e][t].push(i);
    n++;
  };
  for (let e of t) {
    let {
      groupKey,
      ruleId,
      nodeType
    } = e;
    switch (ruleId) {
      case C.REQUIRE_FILL_COLOR_VARIABLES:
        !function (e, t, r) {
          "TEXT" === e ? o(pZ.TEXT_COLOR, t, r) : "FRAME" === e ? o(pZ.BACKGROUND_COLOR, t, r) : o(pZ.SHAPE_COLOR, t, r);
        }(nodeType, groupKey, e);
        break;
      case C.REQUIRE_STROKE_COLOR_VARIABLES:
        !function (e, t, r) {
          "TEXT" === e ? o(pZ.TEXT_STROKE_COLOR, t, r) : "FRAME" === e ? o(pZ.STROKE_COLOR, t, r) : o(pZ.SHAPE_STROKE_COLOR, t, r);
        }(nodeType, groupKey, e);
        break;
      case C.REQUIRE_TEXT_STYLES:
        o(pZ.TEXT_STYLE, groupKey, e);
        break;
      case C.REQUIRE_BOTTOM_LEFT_CORNER_RADIUS_VARIABLES:
      case C.REQUIRE_BOTTOM_RIGHT_CORNER_RADIUS_VARIABLES:
      case C.REQUIRE_TOP_LEFT_CORNER_RADIUS_VARIABLES:
      case C.REQUIRE_TOP_RIGHT_CORNER_RADIUS_VARIABLES:
        o(pZ.CORNER_RADIUS, groupKey, e);
        break;
      case C.REQUIRE_HORIZONTAL_SPACING_VARIABLES:
      case C.REQUIRE_GRID_COLUMN_GAP_VARIABLES:
        o(pZ.HORIZONTAL_SPACING, groupKey, e);
        break;
      case C.REQUIRE_VERTICAL_SPACING_VARIABLES:
      case C.REQUIRE_GRID_ROW_GAP_VARIABLES:
        o(pZ.VERTICAL_SPACING, groupKey, e);
        break;
      case C.REQUIRE_TOP_PADDING_VARIABLES:
      case C.REQUIRE_BOTTOM_PADDING_VARIABLES:
      case C.REQUIRE_LEFT_PADDING_VARIABLES:
      case C.REQUIRE_RIGHT_PADDING_VARIABLES:
        o(pZ.PADDING, groupKey, e);
        break;
      case C.TEXT_BACKGROUND_CONTRAST_AA:
        o(pZ.TEXT_BACKGROUND_CONTRAST_AA, groupKey, e);
        break;
      case C.REQUIRE_ASSETS_FROM_SELECTED_LIBRARIES:
        o(pZ.ASSETS_OUTSIDE_SELECTED_LIBRARIES, groupKey, e);
        break;
      case C.EXTENSIBILITY_RULE:
        o(pZ.EXTENSIBILITY_RULE, groupKey, e);
        break;
      default:
        throw Error("Unknown rule ID: " + ruleId);
    }
  }
  return {
    suggestionBlocks: r,
    violationCount: n
  };
});
let l = Iz(e => eU(t => {
  let {
    suggestionBlocks
  } = t($$o2);
  let n = [];
  let i = 0;
  let a = a7();
  for (let t of e) {
    let e = suggestionBlocks[t];
    e && 0 !== Object.keys(e).length && (i += Object.values(e).flat().length, n.push({
      blockConfig: a[t],
      violationsByGroupKey: e
    }));
  }
  return {
    blocks: n.sort((e, t) => e.blockConfig.priority - t.blockConfig.priority),
    totalViolations: i
  };
}));
let $$d6 = l(QR);
let $$c3 = l(y6);
let $$u0 = l([pZ.TEXT_STYLE]);
let $$p5 = l([pZ.TEXT_BACKGROUND_CONTRAST_AA]);
let $$_1 = l([pZ.ASSETS_OUTSIDE_SELECTED_LIBRARIES]);
let $$h7 = l([pZ.EXTENSIBILITY_RULE]);
let $$m4 = eU(!1);
export const GM = $$u0;
export const LG = $$_1;
export const QU = $$o2;
export const d9 = $$c3;
export const kR = $$m4;
export const qQ = $$p5;
export const r0 = $$d6;
export const yU = $$h7;