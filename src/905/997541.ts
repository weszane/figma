import { getFeatureFlags } from "../905/601108";
import { createOptimistThunk } from "../905/350402";
import { sf } from "../905/929976";
import { F } from "../905/642505";
import { K } from "../figma_app/193867";
import { z } from "../905/875422";
import { mK } from "../figma_app/681697";
let $$c0 = createOptimistThunk((e, {
  multiple: t,
  accept: i
}) => {
  let n = document.createElement("input");
  n.type = "file";
  n.multiple = t;
  i && (n.accept = i);
  n.style.display = "none";
  n.onchange = t => {
    let i = e.getState().selectedView;
    if (!("folder" === i.view || K(i))) {
      let t = e.getState();
      let i = t.user?.drafts_folder_id;
      i && e.dispatch(sf({
        view: "folder",
        folderId: i
      }));
    }
    e.dispatch($$u(t));
    n.remove();
  };
  document.body.appendChild(n);
  n.click();
});
let $$u = createOptimistThunk((e, t) => {
  if (!F) return;
  let i = t.target;
  let r = (t, i) => {
    e.dispatch(z({
      name: t,
      blob: i
    }));
  };
  if (i.files) for (let t = 0; t < i.files.length; t++) {
    let a = i.files[t];
    a && a.name.endsWith(".sketch.zip") ? zip.createReader(new zip.BlobReader(a), e => {
      e.getEntries(e => {
        if (e.length) {
          for (let t of e) if (t.filename.endsWith("Data")) {
            t.getData(new zip.BlobWriter(), e => {
              r(a.name.slice(0, -4), e);
            });
            return;
          }
          r(a.name, a);
        }
      });
    }, () => {
      r(a.name, a);
    }) : getFeatureFlags().internal_only_debug_tools && a && a.name.endsWith(".repo") ? mK(e, a.name, a) : r(a.name, a);
  }
});
export const u = $$c0;