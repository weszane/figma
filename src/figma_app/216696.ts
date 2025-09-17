import { createActionCreator } from "../905/73481";
import { logError } from "../905/714362";
import { Sb } from "../905/359847";
import { Qi } from "../905/172918";
import { createOptimistThunk } from "../905/350402";
import { getResourceTypeV2 } from "../figma_app/740025";
import { setupLoadingStateHandler } from "../905/696711";
import { ResourceTypeNoComment2 } from "../figma_app/45218";
import { communityShelfService } from "../905/665703";
let $$p2 = createActionCreator("COMMUNITY_SET_SHELVES_FOR_SHELF_TYPE");
let $$_1 = createOptimistThunk((e, {
  shelfType: t,
  limit: r
}, {
  loadingKey: n
}) => {
  let a = {
    shelfType: t,
    limitShelfContent: r
  };
  let s = communityShelfService.getCommunityShelves(a);
  setupLoadingStateHandler(s, e, n);
  s.then(({
    data: r
  }) => {
    let n = r.meta;
    n.forEach(t => m(e.dispatch, t.shelf_content));
    e.dispatch($$p2({
      shelfType: t,
      shelves: n
    }));
  }).catch(e => {
    logError("collections", "error fetching collections", {
      ...a,
      error: e.toString()
    });
  });
}, ({
  shelfType: e,
  limit: t
}) => `COMMUNITY_FETCH_SHELVES_FOR_SHELF_TYPE_${e}_${t}`);
let $$h0 = createOptimistThunk((e, {
  shelfType: t,
  filterLabel: r,
  limit: n
}, {
  loadingKey: i
}) => {
  let a = communityShelfService.getCommunityShelves({
    shelfType: t,
    filterLabel: r,
    limitShelfContent: n
  });
  setupLoadingStateHandler(a, e, i);
  a.then(({
    data: r
  }) => {
    let n = r.meta;
    n.forEach(t => m(e.dispatch, t.shelf_content));
    e.dispatch($$p2({
      shelfType: t,
      shelves: n
    }));
  });
}, ({
  shelfType: e,
  filterLabel: t,
  limit: r
}) => `COMMUNITY_FETCH_SHELVES_FOR_SHELF_TYPE_AND_FILTER_LABEL_${e}_${t}_${r}`);
function m(e, t) {
  let r = [];
  let n = [];
  let i = [];
  t.forEach(e => {
    let t = getResourceTypeV2(e);
    t === ResourceTypeNoComment2.HUB_FILE ? r.push(e) : t === ResourceTypeNoComment2.PLUGIN ? n.push(e) : t === ResourceTypeNoComment2.WIDGET && i.push(e);
  });
  e(Sb({
    hubFiles: r,
    src: "fetchShelvesForShelfType"
  }));
  e(Qi({
    publishedPlugins: [...n, ...i],
    src: "fetchShelvesForShelfType"
  }));
}
export const Dw = $$h0;
export const sz = $$_1;
export const wJ = $$p2;