import { createActionCreator } from "../905/73481";
import { createOptimistThunk } from "../905/350402";
let $$a0 = createActionCreator("HUB_FILE_PUT_ALL");
let $$s1 = createActionCreator("HUB_FILE_DEL_ALL");
let $$o2 = createOptimistThunk((e, {
  hubFiles: t,
  src: i
}) => {
  if (!t) return;
  let n = [];
  let r = [];
  for (let e of t) {
    if (e.unpublished_at) {
      r.push(e);
      continue;
    }
    try {
      n.push(function (e, t) {
        if (!e || !e.id) throw Error(`${t} Invalid hubFile id`);
        let i = e.current_hub_file_version_id;
        if (!i) throw Error(`${t} Invalid hubFile ${e.id}: current version id does not exist`);
        if (!e.versions || !e.versions[i]) throw Error(`${t} Invalid hubFile ${e.id}: version id ${i} does not exist in versions`);
        return e;
      }(e, i));
    } catch (e) {
      console.error(e);
    }
  }
  e.dispatch($$a0(n));
  e.dispatch($$s1(r));
});
export const D3 = $$a0;
export const L1 = $$s1;
export const Sb = $$o2;