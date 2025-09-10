import { NC } from "../905/17179";
import { getInitialOptions } from "../figma_app/169182";
import { getI18nString } from "../905/303541";
import { J } from "../905/231762";
import { createOptimistThunk } from "../905/350402";
import { x } from "../905/962579";
var $$n1;
var c = 0;
function u(e) {
  return "string" == typeof e ? e : J({
    data: {
      i18n: e
    }
  }, e.fallback_text);
}
let p = createOptimistThunk((e, t) => {
  let i = e.getState();
  for (let r in i.flashes) {
    let a = i.flashes[r];
    if (a.message === t.message && a.status === t.status) {
      e.dispatch($$n1.remove({
        id: parseInt(r)
      }));
      break;
    }
  }
  let r = t.id;
  setTimeout(() => {
    e.dispatch($$n1.remove({
      id: r
    }));
  }, t.timeout && t.timeout > $$n1.TIMEOUT ? t.timeout : $$n1.TIMEOUT);
  e.dispatch($$n1.add(t));
  return r;
});
let $$m0 = createOptimistThunk((e, t) => {
  t.promise.catch(({
    response: i
  }) => {
    try {
      i = JSON.parse(i);
      let t = J({
        ...i,
        data: {
          ...i.data,
          i18n: i.i18n
        }
      }, i.message);
      e.dispatch($$n1.error(t));
    } catch (i) {
      e.dispatch($$n1.error(t.fallbackError || getI18nString("general.an_error_occurred_while_performing_that_action")));
    }
  });
});
(e => {
  e.add = NC("FLASH_ADD");
  e.remove = NC("FLASH_REMOVE");
  e.removeAll = NC("FLASH_REMOVE_ALL");
  e.TIMEOUT = 3e3;
  e.TIMEOUT_SERVER_SIDE = 6e3;
  e.init = createOptimistThunk(t => {
    let i = getInitialOptions().flash;
    i && (i.error ? t.dispatch(e.error(u(i.error), e.TIMEOUT_SERVER_SIDE)) : i.warn ? t.dispatch(e.flash(u(i.warn), e.TIMEOUT_SERVER_SIDE)) : i.success && t.dispatch(e.flash(u(i.success), e.TIMEOUT_SERVER_SIDE)));
  });
  e.flash = function (e, t) {
    return p({
      message: e,
      status: x.DEFAULT,
      timeout: t,
      id: c++
    });
  };
  e.error = function (e, t) {
    return p({
      message: e,
      status: x.ERROR,
      timeout: t,
      id: c++
    });
  };
})($$n1 || ($$n1 = {}));
export const Q = $$m0;
export const s = $$n1;
