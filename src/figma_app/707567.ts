import { getFeatureFlags } from "../905/601108";
import { z } from "../905/239603";
import { debugState } from "../905/407919";
import { createNoOpValidator, APIParameterUtils } from "../figma_app/181241";
import { XHR } from "../905/910117";
import { tf, Rd, Q6, $5 } from "../905/295427";
import { getFileKeyFromSelectedView } from "../figma_app/193867";
import { n as _$$n } from "../905/347702";
let u = z.object({
  userPromptRaw: z.string(),
  jsx: z.string().optional(),
  theme: z.record(z.any()).optional(),
  trace: z.any().optional(),
  layoutJsx: z.string().optional(),
  v3Components: z.record(z.string()).optional(),
  userPrompt: z.string().optional(),
  userPromptFull: z.string().optional(),
  systemPrompt: z.string().optional()
});
let $$p1 = z.object({
  prompt_version: z.string().optional(),
  eval_results: z.array(u)
});
z.union([z.object({
  status: z.literal("pending")
}), z.object({
  status: z.literal("failed")
}), $$p1.extend({
  status: z.literal("success")
})]);
export let $$_0 = new class {
  constructor() {
    this.FirstDraftKitStatusSchemaValidator = createNoOpValidator();
    this.FirstDraftPublishStatusSchemaValidator = createNoOpValidator();
    this.FirstDraftAllKitsSchemaValidator = createNoOpValidator();
    this.FirstDraftMatchGroupSchemaValidator = createNoOpValidator();
    this.FirstDraftKitKeyFromLibraryKeySchemaValidator = createNoOpValidator();
    this.getFirstDraftKitKeyFromLibraryKey = _$$n(({
      libraryKey: e
    }) => this.FirstDraftKitKeyFromLibraryKeySchemaValidator.validate(async ({
      xr: t
    }) => await t.get("/api/first_draft/kit_key_from_library_key", APIParameterUtils.toAPIParameters({
      file_key: getFileKeyFromSelectedView(debugState?.getState().selectedView),
      library_key: e
    }), {
      headers: this.buildHeaders()
    })));
    this.FirstDraftMatchPresetModesSchemaValidator = createNoOpValidator();
    this.FirstDraftPublishLocalKitSchemaValidator = createNoOpValidator();
    this.FirstDraftUpdataMetadataSchemaValidator = createNoOpValidator();
    this.FirstDraftGenerateThemeV5SchemaValidator = createNoOpValidator();
    this.FirstDraftAllEvalSetsSchemaValidator = createNoOpValidator();
    this.FirstDraftRunEvalsSchemaValidator = createNoOpValidator();
    this.FirstDraftEvalStatusSchemaValidator = createNoOpValidator();
    this.FirstDraftGetRetrievedExamplesSchemaValidator = createNoOpValidator();
  }
  buildHeaders() {
    return {
      ...XHR.defaults.headers
    };
  }
  getFirstDraftKitStatus() {
    let e = getFileKeyFromSelectedView(debugState?.getState().selectedView);
    return this.FirstDraftKitStatusSchemaValidator.validate(async ({
      xr: t
    }) => await t.get(`/api/first_draft/kit_status/${e}`, null, {
      headers: this.buildHeaders()
    }));
  }
  postFirstDraftPublishStatus({
    productComponentKeyToVersion: e,
    groupedComponentKeyToVersion: t,
    exampleKeyToVersion: r,
    variableSetKeyToVersion: i,
    publishType: s,
    kitKey: o
  }) {
    let c = getFileKeyFromSelectedView(debugState?.getState().selectedView);
    return this.FirstDraftPublishStatusSchemaValidator.validate(async ({
      xr: a
    }) => await a.post("/api/first_draft/kit_status", {
      product_components: e,
      grouped_components: t,
      examples: r,
      variable_sets: i,
      is_local: s === tf.LOCAL_GENERATION,
      kit_key: o,
      type_info_version: getFeatureFlags().first_draft_direct_gen ? Rd : Q6,
      theme_info_version: $5,
      file_key: c
    }, {
      headers: this.buildHeaders()
    }));
  }
  getFirstDraftAllKits() {
    let e = getFileKeyFromSelectedView(debugState?.getState().selectedView);
    let t = debugState?.getState().currentUserOrgId;
    let r = debugState?.getState().currentTeamId;
    let i = {
      file_key: e
    };
    getFeatureFlags().first_draft_show_direct_gen_kits && (i = {
      ...i,
      org_id: t,
      team_id: r
    });
    return this.FirstDraftAllKitsSchemaValidator.validate(async ({
      xr: e
    }) => await e.get("/api/first_draft/all_kits", APIParameterUtils.toAPIParameters(i), {
      headers: this.buildHeaders()
    }));
  }
  getFirstDraftMatchGroup(e) {
    let t = getFileKeyFromSelectedView(debugState?.getState().selectedView);
    return this.FirstDraftMatchGroupSchemaValidator.validate(async ({
      xr: r
    }) => await r.get("/api/first_draft/match_group", APIParameterUtils.toAPIParameters({
      file_key: t,
      ...e
    }), {
      headers: this.buildHeaders()
    }));
  }
  postFirstDraftMatchPresetModes(e) {
    let t = getFileKeyFromSelectedView(debugState?.getState().selectedView);
    return this.FirstDraftMatchPresetModesSchemaValidator.validate(async ({
      xr: r
    }) => await r.post("/api/first_draft/match_preset_modes", {
      kit_key: e.kit_key,
      is_local: e.is_local,
      user_prompt: e.user_prompt,
      file_key: t
    }, {
      headers: this.buildHeaders()
    }));
  }
  postFirstDraftPublishLocalKit({
    fileKey: e,
    publishMetadata: t
  }) {
    return this.FirstDraftPublishLocalKitSchemaValidator.validate(async ({
      xr: r
    }) => await r.post(`/api/first_draft/publish_local_kit/${e}`, {
      publish_metadata: t,
      file_key: e
    }, {
      headers: this.buildHeaders()
    }));
  }
  postFirstDraftUpdateMetadata({
    fileKey: e,
    publishMetadata: t
  }) {
    return this.FirstDraftUpdataMetadataSchemaValidator.validate(async ({
      xr: r
    }) => await r.post(`/api/first_draft/update_metadata/${e}`, {
      publish_metadata: t,
      file_key: e
    }, {
      headers: this.buildHeaders()
    }));
  }
  postFirstDraftGenerateThemeV5({
    userPrompt: e,
    isLocal: t,
    kitKey: r
  }) {
    let n = getFileKeyFromSelectedView(debugState?.getState().selectedView);
    return this.FirstDraftGenerateThemeV5SchemaValidator.validate(async ({
      xr: i
    }) => await i.post("/api/first_draft/generate_theme", {
      user_prompt: e,
      is_local: t,
      kit_key: r,
      file_key: n
    }, {
      headers: this.buildHeaders()
    }));
  }
  getFirstDraftAllEvalSets() {
    return this.FirstDraftAllEvalSetsSchemaValidator.validate(async ({
      xr: e
    }) => await e.get("/api/first_draft/all_eval_sets", null, {
      headers: this.buildHeaders()
    }));
  }
  postFirstDraftRunEvals({
    model: e = "gpt-4-turbo-2024-04-09",
    selectedEval: t,
    isLocal: r,
    kitKey: n,
    evalPrompts: i
  }) {
    let a = {
      model: e,
      is_local: r,
      kit_key: n
    };
    i ? a.eval_prompts = i : a.eval_set_id = t;
    return this.FirstDraftRunEvalsSchemaValidator.validate(async ({
      xr: e
    }) => await e.post("/api/first_draft/run_evals", a, {
      headers: this.buildHeaders()
    }));
  }
  getFirstDraftsEvalStatus({
    s3Key: e
  }) {
    return this.FirstDraftEvalStatusSchemaValidator.validate(async ({
      xr: t
    }) => await t.post("/api/first_draft/eval_status", {
      s3_key: e
    }, {
      headers: this.buildHeaders()
    }));
  }
  getFirstDraftRetrievedExamples({
    kitKey: e,
    isLocal: t,
    prompt: r
  }) {
    return this.FirstDraftGetRetrievedExamplesSchemaValidator.validate(async ({
      xr: n
    }) => await n.post("/api/first_draft/get_retrieved_examples", {
      kit_key: e,
      is_local: t,
      prompt: r
    }, {
      headers: this.buildHeaders()
    }));
  }
}();
export const Gh = $$_0;
export const Xs = $$p1;