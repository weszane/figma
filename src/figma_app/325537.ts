import { useEffect } from "react";
import { useSelector } from "../vendor/514228";
import { h3O } from "../figma_app/763686";
import { eU, zl, md, fp } from "../figma_app/27355";
import { R9 } from "../905/977824";
import { KP, Ww } from "../figma_app/440875";
import { iZ } from "../905/372672";
import { Wh } from "../figma_app/615482";
import { H, q } from "../905/457575";
import { jx, Ic } from "../figma_app/198516";
let $$_5 = H("");
let $$h3 = q();
let m = Wh(() => eU({}));
export function $$g2(e) {
  if (0 === e.messages.length && !e.isTyping && 0 === e.fileUpdates.length) {
    $$f7(e.node, {
      switchToPreview: !1
    });
    return;
  }
  zl.set(m, t => ({
    ...t,
    [e.node]: e
  }));
  h3O?.setNodeChatExchange(e.node, e);
}
export function $$f7(e, t) {
  zl.set(m, t => {
    let r = {
      ...t
    };
    delete r[e];
    return r;
  });
  h3O?.clearNodeChatExchange(e);
  t.switchToPreview && zl.set(jx, Ic.PREVIEW);
}
export function $$E1(e) {
  if (e) return zl.get(m)[e];
}
export function $$y6(e) {
  let t = KP();
  let r = R9.useInfoBySessionId({
    updateSynchronously: !1
  });
  let n = iZ();
  let a = useSelector(({
    multiplayer: {
      allUsers: e
    }
  }) => e);
  let s = r[t];
  let c = [];
  if (n && s && e) {
    for (let r of a) if (r.sessionID !== t && r.nodeChatExchanges) {
      let t = r.nodeChatExchanges.find(t => t.node === e);
      t?.isTyping && c.push(r);
    }
  }
  return c;
}
let b = Wh(() => eU({}));
export function $$T0(e) {
  let t;
  let r;
  let a = KP();
  let c = R9.useInfoBySessionId({
    updateSynchronously: !1
  });
  let u = iZ();
  let p = useSelector(({
    multiplayer: {
      allUsers: e
    }
  }) => e);
  let _ = md(m);
  let [h, g] = fp(b);
  let f = c[a];
  let E = Ww();
  if (u && f && e) {
    for (let n of p) if (n.nodeChatExchanges) {
      let i = n.nodeChatExchanges.find(t => t.node === e);
      if (i && i.messages.length > 0) {
        t = i;
        r = n;
        break;
      }
    }
  }
  if (useEffect(() => {
    e && E && r?.sessionID !== a && g(t => {
      let n = r?.nodeChatExchanges?.find(t => t.node === e);
      return n ? {
        ...t,
        [e]: n
      } : (delete t[e], t);
    });
  }, [e, g, r, a, E]), !r && e) {
    let t = _[e];
    return t ? {
      exchange: t,
      user: r
    } : {
      exchange: h[e],
      user: r
    };
  }
  return {
    exchange: t,
    user: r
  };
}
export let $$I4 = eU(null);
export const $W = $$T0;
export const A5 = $$E1;
export const YZ = $$g2;
export const Z3 = $$h3;
export const lA = $$I4;
export const mC = $$_5;
export const s0 = $$y6;
export const wi = $$f7;