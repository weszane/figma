import { jsx } from "react/jsx-runtime";
import { useDispatch } from "react-redux";
import { Gu } from "../figma_app/262240";
import { MenuRootComp, MenuContainerComp, MenuItemComp } from "../figma_app/860955";
import { AnimationTriggerType } from "../figma_app/763686";
import { permissionScopeHandler } from "../905/189185";
import { selectWithShallowEqual } from "../905/103090";
import { Dm } from "../figma_app/8833";
import { formatI18nMessage } from "../905/482208";
import { fullscreenValue } from "../figma_app/455680";
import { Q } from "../figma_app/320600";
import { Z4, D0 } from "../9410/315461";
import { kP, uc, eB, hT } from "../9410/228612";
import { Eo, zQ } from "../9410/564578";
export function $$_0({
  boundingRect: e,
  selectedView: t,
  targetObjectAnimation: i
}) {
  let a = useDispatch<AppDispatch>();
  let {
    appModel,
    sceneGraph,
    sceneGraphSelection
  } = selectWithShallowEqual(e => ({
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
  } = selectWithShallowEqual(e => ({
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
  return jsx(MenuRootComp, {
    manager: t,
    children: jsx(MenuContainerComp, {
      children: o.map(e => jsx(MenuItemComp, {
        onClick: () => {
          e.callback && e.callback();
        },
        children: formatI18nMessage(e.name)
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
        permissionScopeHandler.user("slides-merge-object-animation-with-above", () => {
          let t = Eo(_, e, x, d);
          t && (c(), n.objectAnimations = t);
        });
      }
    });
  }
  if (_.startCondition === AnimationTriggerType.TRIGGER && y && eB(y)) {
    let e = d[h + 2];
    e && uc(e) && r.push({
      name: "slides-merge-object-animation-with-below",
      callback: () => {
        permissionScopeHandler.user("slides-merge-object-animation-with-below", () => {
          let t = Eo(_, y, e, d);
          t && (c(), n.objectAnimations = t);
        });
      }
    });
  }
  _.startCondition === AnimationTriggerType.AFTER_PREVIOUS && (!y || eB(y)) && r.push({
    name: "slides-separate-object-animation",
    callback: () => {
      permissionScopeHandler.user("slides-separate-object-animation", () => {
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
      permissionScopeHandler.user("slides-delete-object-animation", () => {
        u();
        n.removeObjectAnimation(i);
        fullscreenValue.commit();
      });
    },
    recordingKey: "delete"
  });
  return r;
}
export const E = $$_0;
export const l = $$x1;
