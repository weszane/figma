import { hV } from "../figma_app/387100";
import { getFeatureFlags } from "../905/601108";
import { M4 } from "../905/713695";
import { Fk } from "../figma_app/167249";
import { Q } from "../905/577205";
import { $W } from "../905/144933";
import { vh, td } from "../figma_app/181241";
async function i(e) {
  await new Promise(e => setTimeout(e, 500));
  let t = {};
  e.assets.forEach(e => {
    t[e.key] = Array.from({
      length: 5
    }).map((e, t) => ({
      codebase_component_id: `mock-component-id-${t + 1}`,
      thumbnail_url: `https://example.com/thumbnail${t + 1}.png`,
      name: `MockComponent${t + 1}`,
      src_path: `src/components/MockComponent${t + 1}.tsx`,
      scanned_at: new Date().toISOString(),
      confidence_level: 0 === t ? "high" : "low",
      score: .95 - .1 * t
    }));
  });
  return {
    results: t
  };
}
let _ = new class {
  constructor() {
    this.SearchCodeSuggestionsSchemaValidator = vh();
    this.SearchBulkCodeSuggestionsSchemaValidator = vh();
  }
  searchCodeSuggestions(e) {
    return this.SearchCodeSuggestionsSchemaValidator.validate(async ({
      xr: t
    }) => await t.post("/api/search/code_suggestions", td.toAPIParameters(e)));
  }
  searchBulkCodeSuggestions(e) {
    return this.SearchBulkCodeSuggestionsSchemaValidator.validate(async ({
      xr: t
    }) => await t.post("/api/search/code_suggestions_bulk", td.toAPIParameters(e)));
  }
}();
let $$u4 = M4.Query({
  fetch: async e => (await Q.getLibraryPublishedComponentsWithCodeConnect({
    libraryKey: e
  })).data.meta,
  key: "libraryPublishedComponentsCodeConnect"
});
let $$m3 = M4.Query({
  fetch: async e => (await Q.getLibraryIngestionStatus({
    libraryKey: e
  })).data.meta,
  key: "libraryIngestionStatus"
});
let $$p2 = M4.Query({
  fetch: async e => (await Q.getInContextPublishedComponents(e)).data.meta,
  key: "inContextPublishedComponentsCodeConnect"
});
let $$g5 = M4.Query({
  fetch: async e => (await Q.getRepositoryDirectories(e)).data.meta,
  key: "repositoryDirectories"
});
let $$f0 = M4.Query({
  fetch: async e => getFeatureFlags().dt_ccv2_dd ? i(e) : (await _.searchBulkCodeSuggestions(e)).data.meta,
  key: "bulkSuggestions"
});
M4.Query({
  fetch: async e => (await $W.getCodeSuggestions(e)).data.meta.results
});
let $$h1 = M4.Query({
  fetch: async e => (await Q.getGithubSourceFileContents(e)).data.meta
});
let $$b7 = M4.Mutation(e => Q.createCodeConnectMap(e));
let $$x11 = M4.Mutation(async e => {
  await Q.updateCodeConnectMap(e);
});
let $$y9 = M4.Mutation(async e => {
  await Q.deleteCodeConnectMap(e);
});
let $$v6 = M4.Mutation(e => Q.createCodeConnectBulkMap(e));
let $$w8 = M4.Mutation(async e => {
  await Q.deleteCodeConnectBulkMap(e);
});
let $$T10 = M4.Mutation(async ({
  libraryKey: e,
  repositoryId: t,
  directories: n
}, {
  query: a
}) => {
  let r = await Q.setRepositoryDirectories({
    libraryKey: e,
    repositoryId: t,
    directories: n
  });
  a.mutate($$g5({
    libraryKey: e,
    repositoryId: t
  }), () => ({
    directories: n
  }));
  return r.data.meta;
});
let j = e => !!e && (e.isStateGroup ? e.childrenNodes.every(e => e.isIconLikeContainer) : e.isIconLikeContainer);
export function $$k12() {
  return Fk(e => {
    var t;
    var n;
    if (!getFeatureFlags().dt_component_browser_icons_flow) return new Set();
    let i = new Set();
    t = e.getRoot();
    n = e => {
      ("SYMBOL" === e.type || e.isStateGroup) && j(e) && i.add(e.guid);
    };
    t && hV(t, n);
    return i;
  });
}
export const Mo = $$f0;
export const Fq = $$h1;
export const GD = $$p2;
export const wP = $$m3;
export const t2 = $$u4;
export const iW = $$g5;
export const LO = $$v6;
export const RL = $$b7;
export const _E = $$w8;
export const S6 = $$y9;
export const l_ = $$T10;
export const K5 = $$x11;
export const bV = $$k12;