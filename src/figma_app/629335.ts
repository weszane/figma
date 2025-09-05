import { um, eU, yu, zl } from "../figma_app/27355";
import { getStorage } from "../905/657224";
import { bt } from "../905/270322";
import { YI, P$ } from "../figma_app/152368";
function o() {
  let e = getStorage().get("last-timer-set-time") || 180;
  return {
    seconds: YI(e % 60),
    minutes: YI(Math.floor(e / 60)),
    lastUsedTime: e,
    isStopping: !1,
    lastAction: {
      type: "reset-state"
    }
  };
}
let $$l0 = um(o(), (e, t) => {
  let r = {
    ...e,
    lastAction: t
  };
  switch (t.type) {
    case "set-seconds":
      return {
        ...r,
        seconds: t.seconds
      };
    case "set-minutes":
      return {
        ...r,
        minutes: t.minutes
      };
    case "set-time":
      return {
        ...r,
        minutes: t.minutes,
        seconds: t.seconds
      };
    case "add-minutes":
      let n = Math.min(Math.max(0, parseInt(r.minutes) + t.minutes), 99).toString();
      let i = 1 === n.length ? "0" + n : n;
      return {
        ...r,
        minutes: i
      };
    case "start-timer":
      let a = 60 * parseInt(r.minutes) + parseInt(r.seconds);
      if (1e3 * a <= 0) return r;
      return {
        ...r,
        lastUsedTime: a
      };
    case "reset-state":
      return o();
    default:
      return r;
  }
});
let $$d2 = bt(e => e.timer);
let c = eU({});
let $$u1 = yu(eU(e => (e(c), Math.max(0, Math.ceil(P$(e($$d2).time) / 1e3))), (e, t, r) => {
  t(c, {});
}), ({
  setSelf: e
}) => {
  let t = setInterval(() => {
    let t = zl.get($$d2);
    !t || !t.time || t?.time?.isPaused || e("RECOMPUTE");
  }, 200);
  return () => clearInterval(t);
});
export const $ = $$l0;
export const Ld = $$u1;
export const jo = $$d2;