import { throwTypeError } from "../figma_app/465776";
import { atom } from "../figma_app/27355";
import { createReduxSubscriptionAtom } from "../905/111321";
import { createOptimistCommitAction, createOptimistRevertAction } from "../905/676456";
import { createActionCreator, createOptimistAction } from "../905/73481";
import { j } from "../905/848904";
import { ET, F5 } from "../905/284406";
import { H } from "../905/581820";
export class $$u2 {
  constructor(e) {
    this.binding = new $$p1(e, {}, {
      update: (e, t) => {
        let {
          instance,
          id
        } = t;
        let r = {
          ...e
        };
        r[id] ? r[id] = j(r[id], instance) : r[id] = instance;
        return r;
      },
      tombstone: (e, t) => {
        let i = {
          ...e
        };
        delete i[t.id];
        return i;
      },
      remoteUpdate: (e, t) => {
        let i = {
          ...e
        };
        for (let e in t.instances) i[e] ? i[e] = j(i[e], t.instances[e]) : i[e] = t.instances[e];
        return i;
      },
      optimisticUpdate: (e, t) => {
        let i = {
          ...e
        };
        for (let n in t.updates) {
          if (!e[n]) continue;
          let r = H(i[n], t.updates[n]);
          i[n] = r;
        }
        return i;
      }
    }, (e, t) => e[t]);
  }
}
export class $$p1 {
  constructor(e, t, i, n) {
    this.debugName = e;
    this.initialState = t;
    this.actionHandlers = i;
    this.getInstance = n;
    this.actions = {
      update: createActionCreator(`LIVESTORE_UPDATE_${this.debugName}`),
      tombstone: createActionCreator(`LIVESTORE_TOMBSTONE_${this.debugName}`),
      remoteUpdate: createActionCreator(`LIVESTORE_REMOTE_UPDATE_${this.debugName}`),
      optimisticUpdate: createOptimistAction(`LIVESTORE_OPTIMISTIC_UPDATE_${this.debugName}`, (e, t, {
        optimistId: i
      }) => i)
    };
    this.reducer = (e = this.initialState, t) => this.actions.update.matches(t) ? this.actionHandlers.update(e, t.payload) : this.actions.tombstone.matches(t) ? this.actionHandlers.tombstone(e, t.payload) : this.actions.remoteUpdate.matches(t) ? this.actionHandlers.remoteUpdate(e, t.payload) : this.actions.optimisticUpdate.matches(t) ? this.actionHandlers.optimisticUpdate(e, t.payload) : e;
  }
}
export class $$m0 {
  constructor(e, t, i, n, r, a) {
    this.reduxStore = e;
    this.reduxKey = t;
    this.bindings = i;
    this.objectDef = n;
    this.fetchObject = r;
    this.syncObject = a;
    this.atoms = new Map();
  }
  remoteUpdate(e) {
    this.reduxStore().dispatch(this.bindings.actions.remoteUpdate({
      instances: e
    }));
  }
  optimisticUpdate(e) {
    let t = this.reduxStore().dispatch;
    let i = t(this.bindings.actions.optimisticUpdate({
      updates: e
    }));
    return e => {
      "COMMIT" === e ? t(createOptimistCommitAction(i)) : "REJECT" === e ? t(createOptimistRevertAction(i)) : throwTypeError(e);
    };
  }
  createAtom(e) {
    let t = !1;
    let i = createReduxSubscriptionAtom(this.reduxStore, i => {
      let n = this.bindings.getInstance(i[this.reduxKey], e);
      void 0 !== n && (t = !0);
      return n;
    }, {
      notifyImmediate: !0
    });
    return atom(e => e(i) || (t ? ET : F5), (t, i, n) => {
      if ("REMOTE_UPDATE" === n.type) {
        n.value === ET ? this.reduxStore().dispatch(this.bindings.actions.tombstone({
          id: e
        })) : this.reduxStore().dispatch(this.bindings.actions.update({
          id: e,
          instance: n.value
        }));
        return;
      }
      if ("OPTIMISTIC_UPDATE" === n.type) throw Error("Unexpected");
    });
  }
  atom(e) {
    if (this.atoms.get(e)) return this.atoms.get(e);
    {
      let t = this.createAtom(e);
      this.atoms.set(e, t);
      return t;
    }
  }
  debugState() {
    return this.reduxStore().getState()[this.reduxKey];
  }
}
export const OS = $$m0;
export const Xc = $$p1;
export const cZ = $$u2;