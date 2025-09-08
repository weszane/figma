import { NC } from "../905/17179";
import { logError } from "../905/714362";
import { Sb } from "../905/359847";
import { Qi } from "../905/172918";
import { createOptimistThunk } from "../905/350402";
import { x1 as _$$x } from "../figma_app/740025";
import { N } from "../905/696711";
import { Ug } from "../figma_app/45218";
import { A } from "../905/665703";
let $$p2 = NC("COMMUNITY_SET_SHELVES_FOR_SHELF_TYPE");
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
  let s = A.getCommunityShelves(a);
  N(s, e, n);
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
  let a = A.getCommunityShelves({
    shelfType: t,
    filterLabel: r,
    limitShelfContent: n
  });
  N(a, e, i);
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
    let t = _$$x(e);
    t === Ug.HUB_FILE ? r.push(e) : t === Ug.PLUGIN ? n.push(e) : t === Ug.WIDGET && i.push(e);
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