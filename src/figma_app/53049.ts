import { n as _$$n } from "../905/347702";
import { XHR } from "../905/910117";
import { n as _$$n2 } from "../905/815475";
export let $$a0 = _$$n(async ({
  fileKey: e,
  selectedGuids: t
}) => {
  let r = function ({
    fileKey: e,
    selectedGuids: t
  }) {
    let r = new URL(`/api/file_proxy/file/${e}/canvas`, window.location.origin);
    t?.length && r.searchParams.set("nodes_to_extract", t.join(","));
    return r.pathname + r.search;
  }({
    fileKey: e,
    selectedGuids: t
  });
  let [a] = await _$$n2(r, (e, t) => XHR.post(e, {
    fv: `${t}`
  }, {
    responseType: "arraybuffer"
  }).then(({
    data: e
  }) => e));
  return a;
});
export const R = $$a0;