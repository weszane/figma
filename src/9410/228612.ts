import { Gu } from "../figma_app/262240";
import { isNotNullish } from "../figma_app/95419";
import { ServiceCategories as _$$e } from "../905/165054";
import { Fullscreen, AnimationTriggerType } from "../figma_app/763686";
import { parseSessionLocalID } from "../905/871411";
import { reportError } from "../905/11";
var $$r2;
var $$c1 = (e => (e.SECTION_HEADER = "section header", e.ANIMATION = "animation", e))($$c1 || {});
export function $$u0(e) {
  return "section header" === e.type;
}
export function $$p3(e) {
  return "animation" === e.type;
}
(e => {
  let t = "CUSTOM_CUBIC";
  let i = [.17, 0, .2, 1];
  function r(e, t) {
    let i = t ?? parseSessionLocalID(Fullscreen?.generateUniqueID());
    if (!i) throw Error("Failed to generate unique ID for object animation interaction");
    return {
      id: i,
      event: {
        interactionType: "ON_CLICK"
      },
      actions: e
    };
  }
  e.fromPrototypeInteractions = function (e) {
    let r = [];
    let n = 0;
    for (let s of e) {
      if (!s.id) continue;
      let e = s.id;
      let l = (s.actions || []).map(e => "OBJECT_ANIMATION" === e.connectionType && e.transitionNodeID && void 0 !== e.animationType && "NONE" !== e.animationType ? {
        connectionType: e.connectionType,
        transitionNodeID: e.transitionNodeID,
        transitionDuration: e.transitionDuration ?? .3,
        animationType: e.animationType,
        animationPhase: e.animationPhase ?? "IN",
        easingType: e.easingType ?? t,
        easingFunction: e.easingFunction ?? i
      } : null).filter(isNotNullish);
      0 !== l.length && (l.forEach((t, i) => {
        0 === i ? (r.push({
          type: "section header",
          interactionIndex: n
        }), r.push({
          type: "animation",
          action: t,
          startCondition: AnimationTriggerType.TRIGGER,
          interactionId: e,
          interactionIndex: n
        })) : r.push({
          type: "animation",
          action: t,
          startCondition: AnimationTriggerType.AFTER_PREVIOUS,
          interactionId: e,
          interactionIndex: n
        });
      }), n++);
    }
    r.length > 0 && r.push({
      type: "section header",
      interactionIndex: n
    });
    return r;
  };
  e.toPrototypeInteractions = function (e) {
    let t = [];
    let i = null;
    for (let c of function (e) {
      let t = new Set();
      let i = new Set();
      return e.map(e => {
        if ($$u0(e)) return null;
        if ("OBJECT_ANIMATION" !== e.action.connectionType || !e.action.transitionNodeID) {
          reportError(_$$e.SLIDES, Error("Invalid object animation action"), {
            extra: {
              action: e.action
            }
          });
          return null;
        }
        let i = Gu(e.action.transitionNodeID);
        return i ? t.has(i) ? (reportError(_$$e.SLIDES, Error("Duplicate object animation transition node ID found:"), {
          extra: {
            action: e.action
          }
        }), null) : (t.add(i), e) : null;
      }).filter(isNotNullish).map((e, t) => {
        if (0 === t && e.startCondition !== AnimationTriggerType.TRIGGER) {
          let t = parseSessionLocalID(Fullscreen?.generateUniqueID());
          if (!t) throw Error("Failed to generate unique ID for object animation interaction");
          return {
            ...e,
            startCondition: AnimationTriggerType.TRIGGER,
            interactionId: t,
            interactionIndex: 0
          };
        }
        if (e.startCondition !== AnimationTriggerType.TRIGGER) return e;
        {
          let t = Gu(e.interactionId);
          if (!(!t || i.has(t))) {
            i.add(t);
            return e;
          }
          {
            let t = parseSessionLocalID(Fullscreen?.generateUniqueID());
            if (!t) throw Error("Failed to generate unique ID for object animation interaction");
            return {
              ...e,
              interactionId: t
            };
          }
        }
      });
    }(e)) if (c.startCondition === AnimationTriggerType.TRIGGER) {
      i = r([c.action], c.interactionId);
      t.push(i);
    } else {
      if (!i) throw Error("Expected current interaction to be non-null");
      i.actions?.push(c.action);
    }
    return t;
  };
  e.createBaseInteraction = r;
  e.createTestAction = function (e) {
    return {
      connectionType: "OBJECT_ANIMATION",
      transitionNodeID: parseSessionLocalID(e),
      transitionDuration: .3,
      animationType: "FADE",
      animationPhase: "IN",
      easingType: t,
      easingFunction: i
    };
  };
})($$r2 || ($$r2 = {}));
export const eB = $$u0;
export const hT = $$c1;
export const kP = $$r2;
export const uc = $$p3;