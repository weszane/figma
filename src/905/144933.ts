import { Vt, yG, nK, ey } from "../905/859698";
import { VariableResolvedDataType, PropertyScope } from "../figma_app/763686";
import { getTrackingSessionId } from "../905/471229";
import { generateUUIDv4 } from "../905/871474";
import { createNoOpValidator, createMetaValidator, APIParameterUtils } from "../figma_app/181241";
import { XHR } from "../905/910117";
import { e as _$$e } from "../figma_app/324237";
import { h as _$$h } from "../905/632544";
import { L } from "../905/178090";
import { to } from "../figma_app/701107";
import { T } from "../905/858738";
import { PrimaryWorkflowEnum } from "../figma_app/633080";
import { j9 } from "../figma_app/162807";
export let $$f1 = {
  504: XHR.RetryStrategy.NO_RETRY
};
function _(e) {
  return e.substring(0, 50);
}
export function $$A2(e) {
  return {
    ...e,
    type: PrimaryWorkflowEnum.VARIABLE_SET,
    version: Vt(e.version),
    variableThumbnailsUrl: e.variable_thumbnails_url,
    subscriptionStatus: "LIBRARY",
    key: yG(e.key)
  };
}
export function $$y4(e) {
  return {
    ...e,
    type: PrimaryWorkflowEnum.VARIABLE,
    version: nK(e.version),
    sortPosition: e.sort_position,
    variableSetId: e.variable_set_id,
    resolvedType: VariableResolvedDataType[e.variable_type],
    scopes: e.scopes ? e.scopes.map(e => PropertyScope[e]) : [],
    subscriptionStatus: "LIBRARY",
    key: ey(e.key),
    variableCollectionKey: yG("")
  };
}
export function $$b3(e) {
  return e.map(e => e === PrimaryWorkflowEnum.STATE_GROUP ? "variant" : e);
}
export let $$v0 = new class {
  constructor() {
    this.ComponentsSchemaValidator = createNoOpValidator();
    this.CanvasAssetsSchemaValidator = createNoOpValidator();
    this.CommunityLibrariesComponentsSchemaValidator = createNoOpValidator();
    this.LibraryAssetsSchemaValidator = createNoOpValidator();
    this.LibraryAssetsByLibraryKeySchemaValidator = createNoOpValidator();
    this.CommunityLibraryAssetsSchemaValidator = createNoOpValidator();
    this.CommunityLegacyResourcesQuerySchemaValidator = createNoOpValidator();
    this.ResourcesQuerySchemaValidator = createMetaValidator("ResourcesQuerySchemaValidator", to, null, !0);
    this.HubProfilesSchemaValidator = createNoOpValidator();
    this.getHubProfiles = e => this.HubProfilesSchemaValidator.validate(async ({
      xr: t
    }) => await t.get("/api/search/hub_profiles", APIParameterUtils.toAPIParameters(e), {
      retryStrategyOverride: $$f1
    }));
    this.CommunityMentionsSchemaValidator = createNoOpValidator();
    this.PluginsSearchSchemaValidator = createNoOpValidator();
    this.PrivatePluginsSearchSchemaValidator = createNoOpValidator();
    this.WidgetsSearchSchemaValidator = createNoOpValidator();
    this.PrivateWidgetsSearchSchemaValidator = createNoOpValidator();
    this.HubFilesSchemaValidator = createNoOpValidator();
    this.getHubFiles = e => this.HubFilesSchemaValidator.validate(async ({
      xr: t
    }) => await t.get("/api/search/hub_files", APIParameterUtils.toAPIParameters(e), {
      retryStrategyOverride: $$f1
    }));
    this.ExtensionsSchemaValidator = createNoOpValidator();
    this.getExtensions = e => this.ExtensionsSchemaValidator.validate(async ({
      xr: t
    }) => await t.get("/api/search/extensions", APIParameterUtils.toAPIParameters(e), {
      retryStrategyOverride: $$f1
    }));
    this.FullResultsSchemaValidator = createNoOpValidator();
    this.getFullResults = e => this.FullResultsSchemaValidator.validate(async ({
      xr: t
    }) => await t.get("/api/search/full_results", APIParameterUtils.toAPIParameters(e, ["creator_ids[]", "folder_ids[]", "team_ids[]", "org_ids[]"]), {
      retryStrategyOverride: $$f1
    }));
    this.PreviewSearchSchemaValidator = createNoOpValidator();
    this.getPreviewResults = e => this.PreviewSearchSchemaValidator.validate(async ({
      xr: t
    }) => await t.get("/api/search/file_browser_preview", APIParameterUtils.toAPIParameters(e, ["creator_ids[]", "folder_ids[]", "team_ids[]", "org_ids[]"]), {
      retryStrategyOverride: $$f1
    }));
    this.CodeSuggestionsResultSchemaValidator = createNoOpValidator();
    this.CodeSuggestionsBulkResultSchemaValidator = createNoOpValidator();
    this.argsWithQueryIdAndSessionId = e => ({
      ...e,
      queryId: generateUUIDv4(),
      sessionId: getTrackingSessionId()
    });
    this.getCodeSuggestions = e => this.CodeSuggestionsResultSchemaValidator.validate(async ({
      xr: t
    }) => await t.post("/api/search/code_suggestions", APIParameterUtils.toAPIParameters(e), {
      retryStrategyOverride: $$f1
    }));
    this.getCodeSuggestionsBulk = e => this.CodeSuggestionsBulkResultSchemaValidator.validate(async ({
      xr: t
    }) => await t.post("/api/search/code_suggestions_bulk", APIParameterUtils.toAPIParameters(e), {
      retryStrategyOverride: $$f1
    }));
    this.getCodeSuggestions_DEPRECATED = e => {
      let t = this.argsWithQueryIdAndSessionId(e);
      return this.CodeSuggestionsResultSchemaValidator.validate(async ({
        xr: e
      }) => await e.post("/api/search/code_suggestions", this.codeSuggestionRequestToAPIParameters(t), {
        retryStrategyOverride: $$f1
      }));
    };
    this.codeSuggestionRequestToAPIParameters = e => {
      let {
        thumbnailB64,
        ...i
      } = e;
      return {
        ...APIParameterUtils.toAPIParameters(i),
        thumbnail_b64: thumbnailB64
      };
    };
    this.FacetSearchSchemaValidator = createNoOpValidator();
    this.getFacetSearchResults = e => {
      let {
        query,
        facetType,
        restrictOrgId,
        restrictTeamId
      } = e;
      return this.FacetSearchSchemaValidator.validate(async ({
        xr: e
      }) => await e.get("/api/search/facet_search", APIParameterUtils.toAPIParameters({
        query,
        facet_type: facetType,
        sort: j9.RELEVANCY,
        desc: !0,
        is_global: !restrictOrgId && !restrictTeamId,
        org_id: restrictOrgId,
        team_id: restrictTeamId
      }), {
        retryStrategyOverride: $$f1
      }));
    };
    this.FileMoveSearchSchemaValidator = createNoOpValidator();
    this.getFileMoveSearchResults = e => {
      let {
        query,
        orgId,
        maxNumResults
      } = e;
      return this.FileMoveSearchSchemaValidator.validate(async ({
        xr: e
      }) => await e.get("/api/file_move/search", APIParameterUtils.toAPIParameters({
        query,
        sort: j9.RELEVANCY,
        desc: !0,
        org_id: orgId,
        max_num_results: maxNumResults
      }), {
        retryStrategyOverride: $$f1
      }));
    };
  }
  postComponents(e) {
    return this.ComponentsSchemaValidator.validate(async ({
      xr: t
    }) => await t.post("/api/search/components", APIParameterUtils.toAPIParameters(e), {
      retryStrategyOverride: $$f1
    }));
  }
  postComponentsFromFile(e) {
    return this.ComponentsSchemaValidator.validate(async ({
      xr: t
    }) => await t.post("/api/search/components_from_file", APIParameterUtils.toAPIParameters(e), {
      retryStrategyOverride: $$f1
    }));
  }
  postComponentsFromImage(e, t) {
    let i = APIParameterUtils.toAPIParameters(t);
    return this.ComponentsSchemaValidator.validate(async ({
      xr: t
    }) => await t.post("/api/search/components_from_image", {
      ...i,
      query_data: e
    }));
  }
  getAssetsFromCommunityLibraries(e) {
    return this.CommunityLibrariesComponentsSchemaValidator.validate(async ({
      xr: t
    }) => await t.get("/api/search/community_libraries/assets", APIParameterUtils.toAPIParameters(function (e) {
      let t = {};
      for (let [i, n] of Object.entries(e ?? {})) "hubFileIds" === i ? t["hub_file_ids[]"] = n : t[i] = n;
      return t;
    }(e), ["hub_file_ids[]"]), {
      retryStrategyOverride: $$f1
    }));
  }
  getLibraryAssets(e) {
    return this.LibraryAssetsSchemaValidator.validate(async ({
      xr: t
    }) => await t.get("/api/search/library_assets", APIParameterUtils.toAPIParameters(e), {
      retryStrategyOverride: $$f1
    }));
  }
  getLibraryAssetsByLibraryKey(e) {
    return this.LibraryAssetsByLibraryKeySchemaValidator.validate(async ({
      xr: t
    }) => await t.get("/api/search/library_assets", APIParameterUtils.toAPIParameters({
      ...e,
      group_by_library_key: !0
    }), {
      retryStrategyOverride: $$f1
    }));
  }
  getCommunityLibraryAssets(e) {
    return this.CommunityLibraryAssetsSchemaValidator.validate(async ({
      xr: t
    }) => await t.get("/api/search/community_libraries/library_assets", APIParameterUtils.toAPIParameters(e), {
      retryStrategyOverride: $$f1
    }));
  }
  getCommunityLegacyResources(e) {
    return this.CommunityLegacyResourcesQuerySchemaValidator.validate(async ({
      xr: t
    }) => await t.get("/api/search/community_resources", APIParameterUtils.toAPIParameters(e), {
      retryStrategyOverride: $$f1
    }));
  }
  getResources(e) {
    let t = APIParameterUtils.toAPIParameters({
      ...e,
      resource_type: e.resource_type && e.resource_type.join(",")
    });
    return this.ResourcesQuerySchemaValidator.validate(async ({
      xr: e
    }) => await e.get("/api/search/resources", t, {
      retryStrategyOverride: $$f1
    }));
  }
  getCommunityMentions(e) {
    return this.CommunityMentionsSchemaValidator.validate(async ({
      xr: t
    }) => await t.get("/api/search/community_mentions", APIParameterUtils.toAPIParameters({
      query: e.query
    }), {
      retryStrategyOverride: $$f1
    }));
  }
  getCommunityPlugins(e, t, i, n, r, a) {
    let s = r ? {
      is_inspect: `${r}`,
      capability_type: T() ? _$$h.VSCODE : null
    } : {
      editor_type: n
    };
    let l = this.PluginsSearchSchemaValidator.validate(async ({
      xr: n
    }) => await n.get("/api/search/community_resources", APIParameterUtils.toAPIParameters({
      query: _(e),
      current_org_id: t || void 0,
      resource_type: L.BrowseResourceTypes.PLUGINS,
      sort_by: _$$e.Search.RELEVANCY,
      price: i,
      ...s
    }), {
      retryStrategyOverride: $$f1
    }));
    return a ? [l, this.PrivatePluginsSearchSchemaValidator.validate(async ({
      xr: n
    }) => await n.get("/api/search/community_resources", APIParameterUtils.toAPIParameters({
      query: _(e),
      current_org_id: t || void 0,
      resource_type: L.BrowseResourceTypes.PLUGINS,
      sort_by: _$$e.Search.RELEVANCY,
      price: i,
      ...s,
      org_search: !0
    }), {
      retryStrategyOverride: $$f1
    })).then(({
      data: e
    }) => e.meta.results)] : [l, Promise.resolve([])];
  }
  getCommunityWidgets(e, t, i, n, r) {
    let a = this.WidgetsSearchSchemaValidator.validate(async ({
      xr: r
    }) => await r.get("/api/search/community_resources", APIParameterUtils.toAPIParameters({
      query: _(e),
      current_org_id: t || "",
      resource_type: L.BrowseResourceTypes.WIDGETS,
      editor_type: n,
      sort_by: _$$e.Search.RELEVANCY,
      price: i
    }), {
      retryStrategyOverride: $$f1
    }));
    return r ? [a, this.PrivateWidgetsSearchSchemaValidator.validate(async ({
      xr: r
    }) => await r.get("/api/search/community_resources", APIParameterUtils.toAPIParameters({
      query: _(e),
      current_org_id: t || "",
      resource_type: L.BrowseResourceTypes.WIDGETS,
      editor_type: n,
      sort_by: _$$e.Search.RELEVANCY,
      price: i,
      org_search: !0
    }), {
      retryStrategyOverride: $$f1
    })).then(({
      data: e
    }) => e.meta.results)] : [a, Promise.resolve([])];
  }
}();
export const $W = $$v0;
export const Sm = $$f1;
export const YQ = $$A2;
export const _$$in = $$b3;
export const yX = $$y4;
