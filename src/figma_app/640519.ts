import { s as _$$s } from "../905/573154";
import { G } from "../905/134161";
import { showModalHandler } from "../905/156213";
import { W } from "../905/985740";
import { y } from "../figma_app/504415";
import { createOptimistThunk } from "../905/350402";
let $$d0 = createOptimistThunk((e, {
  fileKey: t,
  versionId: r
}) => {
  W.getVersion({
    fileKey: t,
    versionId: r
  }).then(({
    data: t
  }) => {
    let r = t.meta.version;
    e.dispatch(showModalHandler({
      type: y,
      data: {
        description: r.description,
        label: r.label,
        savepointID: r.id,
        isEditingMergeSavepoint: !0
      }
    }));
  }, () => {
    e.dispatch(_$$s.error("An error occurred while retrieving the file history."));
  });
});
let $$c1 = createOptimistThunk(async (e, {
  fileKey: t
}, {
  liveStore: r
}) => {
  try {
    let {
      data
    } = await W.getVersions({
      fileKey: t,
      pageSize: 100
    });
    let o = await r.fetchFile(t);
    let l = data.meta.versions;
    e.dispatch(showModalHandler({
      type: G(),
      data: {
        fig: o,
        versions: l
      }
    }));
  } catch (t) {
    e.dispatch(_$$s.error("An error occurred while retrieving the file history."));
  }
});
export const T = $$d0;
export const Z = $$c1;