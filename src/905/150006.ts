import { handleOptimistTransaction } from "../905/842794";
import { Q as _$$Q } from "../905/573154";
export function $$a0(e) {
  let {
    requestPromise,
    fallbackError,
    store,
    next,
    action
  } = e;
  store.dispatch(_$$Q({
    promise: requestPromise,
    fallbackError
  }));
  return handleOptimistTransaction(requestPromise, next, action);
}
export const Q = $$a0;