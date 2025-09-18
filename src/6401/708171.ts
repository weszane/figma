import { createReduxSubscriptionAtomWithState } from "../905/270322";
import { useCallback } from "react";
import { UserActionState } from "../figma_app/763686";
import { useAtomWithSubscription, atom, useAtomValueAndSetter } from "../figma_app/27355";
import { useSceneGraphSelection } from "../figma_app/722362";
let r = createReduxSubscriptionAtomWithState(e => e.mirror.appModel.activeUserAction);
export function $$o1(e) {
  let t = useSceneGraphSelection();
  let l = t && 1 === Object.keys(t).length && t[e];
  let a = useAtomWithSubscription(r);
  return l && a === UserActionState.DEFAULT;
}
let p = atom(null);
export function $$c0(e) {
  let [t, l] = useAtomValueAndSetter(p);
  return {
    isEmbedActive: t === e,
    setActiveEmbed: useCallback(() => {
      l(e);
    }, [e, l])
  };
}
export const _ = $$c0;
export const s = $$o1;