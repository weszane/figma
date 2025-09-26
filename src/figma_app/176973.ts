import { z } from "../905/239603";
import { createActionCreator } from "../905/73481";
import { sendWithRetry } from "../905/910117";
import { processHubFilesThunk } from "../905/359847";
import { createOptimistThunk } from "../905/350402";
import { liveStoreInstance } from "../905/713695";
import { fileEntityModel } from "../905/806985";
import { fileApiHandler } from "../figma_app/787550";
import { hubFileAPI } from "../905/473998";
export let $$p2 = createActionCreator("ONBOARDING_TEMPLATES_PUT_ALL");
createOptimistThunk(e => {
  hubFileAPI.getTemplates({
    type: "onboarding"
  }).then(({
    data: t
  }) => {
    let r = t.meta;
    Object.keys(r).forEach(t => {
      e.dispatch(processHubFilesThunk({
        hubFiles: r[t],
        src: "getOnboardingTemplates"
      }));
    });
    e.dispatch($$p2(r));
  });
});
createOptimistThunk((e, t) => sendWithRetry.post("/api/files/first_template_type", {
  template_type: t.type
}));
export let $$_1 = liveStoreInstance.Query({
  fetch: async e => {
    let t = await fileApiHandler.getTaggedUserFiles({
      ...e
    });
    return 200 !== t.status || t.data.meta.files.length < 1 ? [] : t.data.meta.files;
  },
  key: "starter_files",
  schema: z.array(fileEntityModel)
});
liveStoreInstance.Query({
  fetch: async () => {
    let e = await hubFileAPI.getStartingPointsTemplates();
    if (200 !== e.status) throw Error("Failed to fetch starting points templates");
    return e.data.meta;
  },
  key: "starting_points_templates"
});
export let $$h0 = liveStoreInstance.Query({
  fetch: async () => {
    let e = await hubFileAPI.getStartingPointsTemplatesAndAssets();
    if (200 !== e.status) throw Error("Failed to fetch starting points templates and assets");
    return e.data.meta;
  },
  key: "starting_points_templates_and_assets"
});
export const Dz = $$h0;
export const XZ = $$_1;
export const c0 = $$p2;
