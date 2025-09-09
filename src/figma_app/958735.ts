import { useEffect } from "react";
import { useStore } from "react-redux";
import { microtaskThrottle } from "../905/915765";
import { UserActionState, SchemaJoinStatus, AppStateTsApi } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import { tg } from "../figma_app/933328";
import { createActionAndReducerWrapper } from "../905/270322";
import { KQ } from "../figma_app/646357";
import { subscribeObservable } from "../figma_app/84367";
let {
  action,
  reducer
} = createActionAndReducerWrapper("SYNC_PUBLISHABLE_SYMBOLS", []);
let {
  action: _action,
  reducer: _reducer
} = createActionAndReducerWrapper("SYNC_PUBLISHABLE_STATE_GROUPS", []);
let {
  action: _action2,
  reducer: _reducer2
} = createActionAndReducerWrapper("SYNC_PUBLISHABLE_STYLES", []);
let {
  action: _action3,
  reducer: _reducer3
} = createActionAndReducerWrapper("SYNC_PUBLISHABLE_MODULES", []);
let {
  action: _action4,
  reducer: _reducer4
} = createActionAndReducerWrapper("SYNC_SUBSCRIBED_SYMBOLS", []);
let {
  action: _action5,
  reducer: _reducer5
} = createActionAndReducerWrapper("SYNC_SUBSCRIBED_SYMBOLS_ON_CURRENT_PAGE", []);
let {
  action: _action6,
  reducer: _reducer6
} = createActionAndReducerWrapper("SYNC_SUBSCRIBED_STATE_GROUPS", []);
let {
  action: _action7,
  reducer: _reducer7
} = createActionAndReducerWrapper("SYNC_SUBSCRIBED_STATE_GROUPS_ON_CURRENT_PAGE", []);
let {
  action: _action8,
  reducer: _reducer8
} = createActionAndReducerWrapper("SYNC_DIRECTLY_SUBSCRIBED_STYLES", []);
let {
  action: _action9,
  reducer: _reducer9
} = createActionAndReducerWrapper("SYNC_DIRECTLY_SUBSCRIBED_STYLES_ON_CURRENT_PAGE", []);
let {
  action: _action0,
  reducer: _reducer0
} = createActionAndReducerWrapper("SYNC_INDIRECTLY_SUBSCRIBED_STYLES", []);
let {
  action: _action1,
  reducer: _reducer1
} = createActionAndReducerWrapper("SYNC_LOCAL_SYMBOLS_THAT_HAVE_USAGES", []);
let {
  action: _action10,
  reducer: _reducer10
} = createActionAndReducerWrapper("SYNC_LOCAL_SYMBOLS_THAT_HAVE_USAGES_ON_CURRENT_PAGE", []);
let {
  action: _action11,
  reducer: _reducer11
} = createActionAndReducerWrapper("SYNC_LOCAL_STYLES_THAT_HAVE_USAGES", []);
let {
  action: _action12,
  reducer: _reducer12
} = createActionAndReducerWrapper("SYNC_LOCAL_STYLES_THAT_HAVE_USAGES_ON_CURRENT_PAGE", []);
export function $$V11() {
  let e = getFeatureFlags().dse_module_publish;
  let t = useStore();
  useEffect(() => function (e) {
    let t = () => KQ(e);
    let r = microtaskThrottle(t);
    let n = "normal";
    let i = e.subscribe(() => {
      let {
        activeUserAction,
        multiplayerSessionState
      } = e.getState().mirror.appModel;
      let a = function (e) {
        switch (e) {
          case UserActionState.DEFAULT:
          case UserActionState.SELECTING_TEXT:
          case UserActionState.CLICKING_TO_CHANGE_SELECTION:
            return !1;
          case UserActionState.DRAGGING:
          case UserActionState.RESIZING:
          case UserActionState.ROTATING:
            return !0;
        }
      }(activeUserAction) || multiplayerSessionState === SchemaJoinStatus.DETACHED;
      "normal" === n && a ? n = "paused" : "paused" !== n || a ? "enqueued" !== n || a || (t(), n = "normal") : n = "normal";
    });
    let {
      publishableSymbols,
      publishableStateGroups,
      publishableStyles,
      publishableModules
    } = AppStateTsApi.libraryAssets();
    let m = H(e, [{
      observable: publishableSymbols,
      action
    }, {
      observable: publishableStateGroups,
      action: _action
    }, {
      observable: publishableStyles,
      action: _action2
    }, ...(getFeatureFlags().dse_module_publish ? [{
      observable: publishableModules,
      action: _action3
    }] : [])], () => {
      "normal" === n ? r() : n = "enqueued";
    });
    return () => {
      m();
      i();
      r.cancel();
    };
  }(t), [t, e]);
  useEffect(() => function (e) {
    let {
      subscribedSymbols,
      subscribedStateGroups
    } = AppStateTsApi.libraryAssets();
    return H(e, [{
      observable: subscribedSymbols,
      action: _action4
    }, {
      observable: subscribedStateGroups,
      action: _action6
    }], () => e.dispatch(tg()));
  }(t), [t]);
  useEffect(() => function (e) {
    let {
      localSymbolsThatHaveUsages,
      directlySubscribedStyles,
      indirectlySubscribedStyles,
      localStylesThatHaveUsages
    } = AppStateTsApi.libraryAssets();
    return H(e, [{
      observable: directlySubscribedStyles,
      action: _action8
    }, {
      observable: indirectlySubscribedStyles,
      action: _action0
    }, {
      observable: localSymbolsThatHaveUsages,
      action: _action1
    }, {
      observable: localStylesThatHaveUsages,
      action: _action11
    }]);
  }(t), [t]);
  useEffect(() => function (e) {
    let {
      subscribedSymbolsOnCurrentPage,
      subscribedStateGroupsOnCurrentPage,
      directlySubscribedStylesOnCurrentPage,
      localSymbolsThatHaveUsagesOnCurrentPage,
      localStylesThatHaveUsagesOnCurrentPage
    } = AppStateTsApi.libraryAssets();
    return H(e, [{
      observable: subscribedSymbolsOnCurrentPage,
      action: _action5
    }, {
      observable: subscribedStateGroupsOnCurrentPage,
      action: _action7
    }, {
      observable: directlySubscribedStylesOnCurrentPage,
      action: _action9
    }, {
      observable: localSymbolsThatHaveUsagesOnCurrentPage,
      action: _action10
    }, {
      observable: localStylesThatHaveUsagesOnCurrentPage,
      action: _action12
    }]);
  }(t), [t]);
}
function H(e, t, r) {
  let n = [];
  for (let {
    observable,
    action
  } of t) {
    e.dispatch(action(observable.getCopy()));
    r?.();
    n.push(subscribeObservable(observable, {
      onChangeDeferred: () => {
        e.dispatch(action(observable.getCopy()));
        r?.();
      }
    }));
  }
  return () => {
    for (let e of n) e();
  };
}
export const $K = reducer;
export const F0 = _reducer5;
export const Fx = _reducer3;
export const GN = _reducer1;
export const QI = _reducer6;
export const Qu = _reducer12;
export const RG = _reducer10;
export const Te = _reducer;
export const ax = _reducer2;
export const cQ = _reducer9;
export const ck = _reducer0;
export const co = $$V11;
export const db = _reducer11;
export const hu = _reducer7;
export const lR = _reducer8;
export const uN = _reducer4;
