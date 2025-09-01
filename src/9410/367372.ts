import { jsx } from "react/jsx-runtime";
import { wA } from "../vendor/514228";
import { Gu } from "../figma_app/262240";
import { bL, mc, q7 } from "../figma_app/860955";
import { luZ } from "../figma_app/763686";
import { l7 } from "../905/189185";
import { R } from "../905/103090";
import { Dm } from "../figma_app/8833";
import { A } from "../905/482208";
import { Y5 } from "../figma_app/455680";
import { Q } from "../figma_app/320600";
import { Z4, D0 } from "../9410/315461";
import { kP, uc, eB, hT } from "../9410/228612";
import { Eo, zQ } from "../9410/564578";
export function $$_0({
  boundingRect: e,
  selectedView: t,
  targetObjectAnimation: i
}) {
  let a = wA();
  let {
    appModel,
    sceneGraph,
    sceneGraphSelection
  } = R(e => ({
    appModel: e.mirror.appModel,
    sceneGraph: e.mirror.sceneGraph,
    sceneGraphSelection: e.mirror.sceneGraphSelection
  }));
  let {
    slideId,
    targetNodeId
  } = i;
  let m = y({
    sceneGraph,
    slideId,
    targetNodeId
  });
  let f = {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height,
    width: e.width,
    height: e.height
  };
  return jsx("div", {
    className: Dm,
    children: jsx(Q, {
      appModel,
      dispatch: a,
      lean: "left",
      menuItems: m,
      recordingKey: "slidesAnimationContextMenu",
      removeDisabledItems: !0,
      sceneGraph,
      sceneGraphSelection,
      selectedView: t,
      showPoint: !1,
      targetRect: f
    })
  });
}
export function $$x1({
  targetObjectAnimation: e,
  manager: t
}) {
  let {
    sceneGraph
  } = R(e => ({
    sceneGraph: e.mirror.sceneGraph
  }));
  let {
    slideId,
    targetNodeId
  } = e;
  let o = y({
    sceneGraph,
    slideId,
    targetNodeId
  });
  return jsx(bL, {
    manager: t,
    children: jsx(mc, {
      children: o.map(e => jsx(q7, {
        onClick: () => {
          e.callback && e.callback();
        },
        children: A(e.name)
      }, e.name))
    })
  });
}
function y({
  sceneGraph: e,
  slideId: t,
  targetNodeId: i
}) {
  let r = [];
  let n = e.get(t);
  let s = n?.objectAnimations ?? [];
  let d = kP.fromPrototypeInteractions(s);
  let c = Z4();
  let u = D0();
  let h = d.findIndex(e => uc(e) && Gu(e.action.transitionNodeID) === i);
  if (h < 0) return r;
  let _ = d[h];
  if (!n || !_) return r;
  let x = d[h - 1];
  let y = d[h + 1];
  if (x && eB(x)) {
    let e = d[h - 2];
    e && uc(e) && r.push({
      name: "slides-merge-object-animation-with-above",
      callback: () => {
        l7.user("slides-merge-object-animation-with-above", () => {
          let t = Eo(_, e, x, d);
          t && (c(), n.objectAnimations = t);
        });
      }
    });
  }
  if (_.startCondition === luZ.TRIGGER && y && eB(y)) {
    let e = d[h + 2];
    e && uc(e) && r.push({
      name: "slides-merge-object-animation-with-below",
      callback: () => {
        l7.user("slides-merge-object-animation-with-below", () => {
          let t = Eo(_, y, e, d);
          t && (c(), n.objectAnimations = t);
        });
      }
    });
  }
  _.startCondition === luZ.AFTER_PREVIOUS && (!y || eB(y)) && r.push({
    name: "slides-separate-object-animation",
    callback: () => {
      l7.user("slides-separate-object-animation", () => {
        let e = zQ(_, {
          type: hT.SECTION_HEADER,
          interactionIndex: _.interactionIndex + 1
        }, d);
        e && (c(), n.objectAnimations = e);
      });
    }
  });
  r.push({
    name: "slides-delete-object-animation",
    callback: () => {
      l7.user("slides-delete-object-animation", () => {
        u();
        n.removeObjectAnimation(i);
        Y5.commit();
      });
    },
    recordingKey: "delete"
  });
  return r;
}
export const E = $$_0;
export const l = $$x1;