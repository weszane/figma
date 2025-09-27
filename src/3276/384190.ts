import { WorkerFuseSearch } from "../905/81982";
let o = new WorkerFuseSearch({
  keys: ["name"],
  threshold: .1
});
export function $$a0(e, t) {
  o.set(t);
  return o.search(e);
}
export const n = $$a0;