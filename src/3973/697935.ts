import { eU, FZ } from "../figma_app/27355";
import { Uv, bT, Uw } from "../3973/473379";
export function $$i4(e) {
  return e.status === Uv.ERRORED && e.cause === bT.TIMEOUT;
}
let n = eU({
  status: Uv.NOT_STARTED,
  initCompletedPromise: void 0
});
let $$o0 = FZ(n, function (e, t) {
  switch (t?.type) {
    case Uw.RESET:
      return {
        status: Uv.NOT_STARTED,
        initCompletedPromise: void 0
      };
    case Uw.START:
      if (e.status === Uv.NOT_STARTED) {
        let {
          initCompletedPromise,
          sdkKey
        } = t.payload;
        return {
          status: Uv.IN_PROGRESS,
          sdkKey,
          initCompletedPromise
        };
      }
      break;
    case Uw.ERROR:
      if (e.status === Uv.IN_PROGRESS) {
        let {
          sdkKey,
          initCompletedPromise
        } = e;
        let {
          cause
        } = t.payload;
        return {
          status: Uv.ERRORED,
          sdkKey,
          cause,
          initCompletedPromise
        };
      }
      break;
    case Uw.COMPLETE:
      if (e.status === Uv.IN_PROGRESS) {
        let {
          sdkKey,
          initCompletedPromise
        } = e;
        return {
          status: Uv.COMPLETED,
          sdkKey,
          initCompletedPromise
        };
      }
  }
  return e;
});
let $$_2 = eU(e => e($$o0));
let $$l5 = eU(e => e($$o0).initCompletedPromise);
let $$u3 = eU(0);
let $$c1 = eU(!1);
export const MQ = $$o0;
export const UY = $$c1;
export const ZJ = $$_2;
export const gR = $$u3;
export const hH = $$i4;
export const u_ = $$l5;