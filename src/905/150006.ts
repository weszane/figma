import { handleOptimistTransaction } from "../905/842794";
import { handlePromiseError } from "../905/573154";
export function $$a0(e) {
  let {
    requestPromise,
    fallbackError,
    store,
    next,
    action
  } = e;
  store.dispatch(handlePromiseError({
    promise: requestPromise,
    fallbackError
  }));
  return handleOptimistTransaction(requestPromise, next, action);
}
export const Q = $$a0;