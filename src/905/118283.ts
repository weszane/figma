import { AT } from "../905/155604";
import { C } from "../905/797765";
import { EM } from "../figma_app/229837";
export function $$s0(e, t) {
  return (i, s, o) => {
    let l;
    let {
      primaryKey,
      uniqueName
    } = AT(o.objectDef);
    if (!i.realtime_token) return null;
    try {
      l = EM(i.realtime_token);
    } catch (e) {
      console.error(`LiveStore failed to parse realtime token ${i.realtime_token}`);
      l = null;
    }
    if (!l) return null;
    if (!t || !C.has(t)) throw Error(`Unknown realtime channel for object type ${uniqueName}`);
    return e.subscribe({
      type: t,
      token: l
    }, e => {
      if (!(primaryKey in e)) throw Error(`Couldn't find primaryKey ${primaryKey} in ${e}`);
      s === e[primaryKey] && o.remoteUpdate({
        [s]: e
      });
    });
  };
}
export const E = $$s0;