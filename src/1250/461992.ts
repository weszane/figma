import { ServiceCategories as _$$e } from "../905/165054";
import { setupResourceAtomHandler } from "../figma_app/566371";
import { reportError } from "../905/11";
import { N } from "../7222/898730";
import { SortOptions } from "../figma_app/324237";
import { ResourceTypeEnum } from "../figma_app/306946";
import { u8 } from "../figma_app/350203";
import { FFileType, FPlanNameType } from "../figma_app/191312";
import { Pe } from "../1250/610336";
import { a as _$$a, z } from "../figma_app/601188";
import { li, e2 } from "../figma_app/622574";
if (443 == require.j) {}
export function $$p4({
  limit: e = N,
  resourceTypes: t,
  teamId: n,
  orgId: l,
  caller: d,
  includeContent: c = !1,
  enableQuery: _ = !0,
  sortBy: m = SortOptions.Browse.ALL_TIME,
  selfPublished: p
}) {
  let [{
    data: g,
    status: f,
    hasNextPage: h,
    isFetchingNextPage: b
  }, {
    fetchNextPage: x
  }] = setupResourceAtomHandler(_$$a.ResourcesPaginatedQuery({
    resourceType: t,
    orgId: l,
    teamId: n,
    caller: d,
    pageSize: e,
    includeContent: c,
    sortBy: m,
    selfPublished: p
  }), {
    enabled: _ && (!!n || !!l)
  });
  return !_ || n || l ? {
    resources: g ?? [],
    loading: "loading" === f,
    hasNextPage: h ?? !1,
    isFetchingNextPage: b,
    fetchNextPage: x
  } : (reportError(_$$e.COMMUNITY, Error("useInternalResources: teamId and orgId cannot both be undefined"), {
    extra: {
      resourceTypes: t,
      caller: d
    }
  }), {
    resources: [],
    loading: !1,
    hasNextPage: !1,
    isFetchingNextPage: !1,
    fetchNextPage: () => {}
  });
}
export function $$g3({
  limit: e = N,
  orgId: t,
  caller: n,
  includeContent: a = !1
}) {
  return $$p4({
    limit: e,
    resourceTypes: [ResourceTypeEnum.PLUGIN],
    teamId: void 0,
    orgId: t,
    caller: n,
    includeContent: a,
    enableQuery: !!t,
    sortBy: SortOptions.Browse.ALL_TIME
  });
}
export function $$f0({
  orgId: e,
  teamId: t,
  resourceType: n,
  planTier: a,
  sortBy: r,
  isTemplatesPublishingDisabledForOrg: i
}) {
  return $$p4({
    resourceTypes: [n],
    limit: u8,
    orgId: e,
    teamId: t,
    caller: z.RESOURCE_HUB,
    includeContent: !0,
    enableQuery: Pe(a, n, i),
    sortBy: r
  });
}
export function $$h2(e, t, n, a = u8) {
  let {
    templatesByTeam,
    isLoading
  } = li({
    teamId: t,
    editorType: FFileType.COOPER,
    pageSize: a + 1,
    enabled: Pe(e, ResourceTypeEnum.COOPER_TEMPLATE_FILE, n)
  });
  let o = templatesByTeam?.templates ?? [];
  let {
    templatesByTeam: _templatesByTeam,
    isLoading: _isLoading
  } = li({
    teamId: t,
    editorType: FFileType.WHITEBOARD,
    pageSize: a + 1,
    enabled: Pe(e, ResourceTypeEnum.FIGJAM_TEMPLATE, n)
  });
  let p = _templatesByTeam?.templates ?? [];
  let {
    templatesByTeam: _templatesByTeam2,
    isLoading: _isLoading2
  } = li({
    teamId: t,
    editorType: FFileType.SLIDES,
    pageSize: a + 1,
    enabled: Pe(e, ResourceTypeEnum.SLIDE_TEMPLATE, n)
  });
  let b = _templatesByTeam2?.templates ?? [];
  let {
    templatesByTeam: _templatesByTeam3,
    isLoading: _isLoading3
  } = li({
    teamId: t,
    editorType: FFileType.FIGMAKE,
    pageSize: a + 1,
    enabled: Pe(e, ResourceTypeEnum.FIGMAKE_TEMPLATE, n)
  });
  let v = _templatesByTeam3?.templates ?? [];
  return {
    [FFileType.COOPER]: {
      templates: o,
      isLoading,
      hasMoreTemplates: o.length > a
    },
    [FFileType.WHITEBOARD]: {
      templates: p,
      isLoading: _isLoading,
      hasMoreTemplates: p.length > a
    },
    [FFileType.SLIDES]: {
      templates: b,
      isLoading: _isLoading2,
      hasMoreTemplates: b.length > a
    },
    [FFileType.FIGMAKE]: {
      templates: v,
      isLoading: _isLoading3,
      hasMoreTemplates: v.length > a
    }
  };
}
export function $$b1(e, t, n, a = u8) {
  let r = e === FPlanNameType.ENTERPRISE;
  let {
    teamTemplates,
    isLoading
  } = e2({
    orgId: t,
    editorType: FFileType.COOPER,
    areWorkspacesEnabled: r,
    numTemplatesPerTeam: a + 1,
    filterByIds: null,
    enabled: Pe(e, ResourceTypeEnum.COOPER_TEMPLATE_FILE, n)
  });
  let s = teamTemplates.flatMap(e => e.templates.map(e => e.template));
  let {
    teamTemplates: _teamTemplates,
    isLoading: _isLoading4
  } = e2({
    orgId: t,
    editorType: FFileType.WHITEBOARD,
    areWorkspacesEnabled: r,
    numTemplatesPerTeam: a + 1,
    filterByIds: null,
    enabled: Pe(e, ResourceTypeEnum.FIGJAM_TEMPLATE, n)
  });
  let g = _teamTemplates.flatMap(e => e.templates.map(e => e.template));
  let {
    teamTemplates: _teamTemplates2,
    isLoading: _isLoading5
  } = e2({
    orgId: t,
    editorType: FFileType.SLIDES,
    areWorkspacesEnabled: r,
    numTemplatesPerTeam: a + 1,
    filterByIds: null,
    enabled: Pe(e, ResourceTypeEnum.SLIDE_TEMPLATE, n)
  });
  let x = _teamTemplates2.flatMap(e => e.templates.map(e => e.template));
  let {
    teamTemplates: _teamTemplates3,
    isLoading: _isLoading6
  } = e2({
    orgId: t,
    editorType: FFileType.FIGMAKE,
    areWorkspacesEnabled: r,
    numTemplatesPerTeam: a + 1,
    filterByIds: null,
    enabled: Pe(e, ResourceTypeEnum.FIGMAKE_TEMPLATE, n)
  });
  let w = _teamTemplates3.flatMap(e => e.templates.map(e => e.template));
  return {
    [FFileType.COOPER]: {
      templates: s,
      isLoading,
      hasMoreTemplates: s.length > a
    },
    [FFileType.WHITEBOARD]: {
      templates: g,
      isLoading: _isLoading4,
      hasMoreTemplates: g.length > a
    },
    [FFileType.SLIDES]: {
      templates: x,
      isLoading: _isLoading5,
      hasMoreTemplates: x.length > a
    },
    [FFileType.FIGMAKE]: {
      templates: w,
      isLoading: _isLoading6,
      hasMoreTemplates: w.length > a
    }
  };
}
export const GO = $$f0;
export const NQ = $$b1;
export const er = $$h2;
export const wO = $$g3;
export const yH = $$p4;