import { atomStoreManager } from "../figma_app/27355";
import { createActionCreator } from "../905/73481";
import { trackEventAnalytics } from "../905/449184";
import { desktopAPIInstance } from "../figma_app/876459";
import { createOptimistThunk } from "../905/350402";
import { sf } from "../905/929976";
import { h } from "../905/662353";
import { wI, JI, kl, OL, Gc } from "../figma_app/840917";
import { hp, c6, ec, m6 } from "../905/725909";
import { M4 } from "../905/713695";
let $$_4 = createOptimistThunk(async (e, t) => {
  let r = e.getState()?.user?.id;
  if (!r) return;
  let n = Object.keys(t);
  await wI(r, n);
  hp.sendToAllTabs(c6, n);
  trackEventAnalytics("Delete New Autosave Files", {
    deletedCount: n.length
  });
});
let $$h0 = createOptimistThunk(async e => {
  let t = e.getState();
  let r = t.user?.id;
  if (!r) return;
  await JI(r);
  let n = await kl(r);
  e.dispatch($$f2({
    filesWithChangesInIDB: n.unsyncedFiles,
    filesCreatedOffline: n.newFiles
  }));
  e.dispatch($$m1(n.nextGarbageCollectionTimestamp));
});
let $$m1 = createActionCreator("SET_AUTOSAVE_NEXT_GARBAGE_COLLECTION_TIMESTAMP");
let $$g5 = createActionCreator("SET_AUTOSAVE_SNOOZE");
let $$f2 = createActionCreator("SET_UNCLAIMED_FILES");
export function $$E3(e) {
  hp.register(ec, () => function (e) {
    let t = e.getState().user?.id ?? null;
    M4.fetch(OL({
      userId: t
    }), {
      policy: "networkOnly"
    });
  }(e));
  hp.register(c6, t => function (e, t) {
    let r = atomStoreManager.get(h);
    r && t.includes(r) && (desktopAPIInstance ? desktopAPIInstance.close({
      suppressReopening: !0,
      shouldForceClose: !0
    }) : e.dispatch(sf({
      view: "recentsAndSharing"
    })));
    e.dispatch($$h0());
  }(e, t));
  hp.register(m6, ({
    localFileKey: e,
    realFileKey: t
  }) => Gc(e, t));
}
export const Jw = $$h0;
export const TP = $$m1;
export const Y3 = $$f2;
export const h0 = $$E3;
export const vv = $$_4;
export const zE = $$g5;