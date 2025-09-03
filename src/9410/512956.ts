import { jsx, Fragment } from "react/jsx-runtime";
import { useRef, useEffect } from "react";
import { throwTypeError } from "../figma_app/465776";
import { cfv } from "../figma_app/763686";
import { eU, zl, fp } from "../figma_app/27355";
import { xi } from "../905/714362";
import { PX, Uj } from "../9410/659371";
import { S } from "../figma_app/773693";
import { ss } from "../figma_app/402783";
var $$p2 = (e => (e[e.NONE = 0] = "NONE", e[e.SUMMARIZE_STICKIES = 1] = "SUMMARIZE_STICKIES", e[e.SORT_STICKIES_BY_TOPIC = 2] = "SORT_STICKIES_BY_TOPIC", e[e.SORT_STICKIES_BY_COLOR = 3] = "SORT_STICKIES_BY_COLOR", e[e.SORT_STICKIES_BY_AUTHOR = 4] = "SORT_STICKIES_BY_AUTHOR", e[e.SORT_STICKIES_BY_STAMP_COUNT = 5] = "SORT_STICKIES_BY_STAMP_COUNT", e[e.SORT_STICKIES_BY_STAMP_TYPE = 6] = "SORT_STICKIES_BY_STAMP_TYPE", e[e.MIND_MAP_GENERATE_IDEAS = 7] = "MIND_MAP_GENERATE_IDEAS", e))($$p2 || {});
let $$h3 = eU(0);
let m = eU(null, (e, t, i) => {
  t($$h3, i);
});
export function $$f0(e) {
  zl.set(m, e);
}
export function $$g1() {
  let [e, t] = fp($$h3);
  let i = useRef(null);
  let p = function () {
    let {
      summarizeCanvasSelection
    } = ss(cfv.ABOVE, void 0, "QUICK_ACTION");
    let t = PX();
    let {
      expandSelectedMindmapNode
    } = S();
    return r => {
      switch (r) {
        case 0:
          xi("AI Actions", 'Unexpected AI action "none" requested');
          break;
        case 1:
          summarizeCanvasSelection();
          break;
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
          {
            let e = function (e) {
              switch (e) {
                case 2:
                  return Uj.CLUSTER;
                case 3:
                  return Uj.CLUSTER_BY_COLOR;
                case 4:
                  return Uj.CLUSTER_BY_AUTHOR;
                case 5:
                  return Uj.CLUSTER_BY_STAMP_COUNT;
                case 6:
                  return Uj.CLUSTER_BY_STAMP_TYPE;
                default:
                  return;
              }
            }(r);
            if (!e) {
              xi("AI Actions", "Unexpected AI action requested", {
                action: r
              });
              return;
            }
            t({
              type: e,
              disabled: !1,
              displayText: ""
            });
            break;
          }
        case 7:
          expandSelectedMindmapNode();
          break;
        default:
          throwTypeError(r);
      }
    };
  }();
  useEffect(() => {
    (async () => {
      if (0 !== e && e !== i.current) {
        i.current = e;
        try {
          p(e);
          await new Promise(e => setTimeout(e, 1e3));
        } finally {
          t(0);
          i.current = null;
        }
      }
    })();
  }, [e, t, p]);
  return jsx(Fragment, {});
}
export const J7 = $$f0;
export const bY = $$g1;
export const hG = $$p2;
export const hQ = $$h3;