import { logErrorAndReturn } from '../905/607410';
import { createDeferredPromise } from '../905/874553';
export function $$a0(e, t) {
  let i = {};
  i.useValue = function (a) {
    if (t && i[a] && t(a, i[a]) && delete i[a], !i[a]) {
      let t = createDeferredPromise();
      e(a).then(e => t.resolve(e)).catch(e => t.reject(e));
      i[a] = {
        deferred: t,
        created: Date.now()
      };
    }
    let {
      deferred
    } = i[a];
    switch (deferred.status) {
      case 'pending':
        logErrorAndReturn(deferred.promise);
        return new Error('unreachable');
      case 'rejected':
        throw deferred.error;
      case 'resolved':
        return deferred.result;
    }
  };
  return i;
}
export function $$s1(e) {
  return (t, i) => Date.now() - i.created > e;
}
export const m = $$a0;
export const y = $$s1;