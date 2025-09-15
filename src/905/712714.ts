import { G5, S6 } from "../figma_app/795674";
import { u } from "../figma_app/187359";
import { liveStoreInstance } from "../905/713695";
import { Z } from "../905/939602";
import { PT } from "../905/669853";
import { o as _$$o } from "../905/918279";
let d = {
  num_insertions: 0,
  num_detachments: 0
};
let $$c9 = liveStoreInstance.Query({
  fetch: async e => (await PT.getComponent({
    fv: e.fileVersion || "0",
    componentKey: e.componentKey
  })).data.meta
});
let $$u1 = liveStoreInstance.Query({
  fetch: async e => (await PT.getComponentFileUsage({
    orgId: e.orgId || "",
    fv: e.fileVersion || "0",
    componentKey: e.componentKey
  })).data.meta
});
let $$p3 = liveStoreInstance.Query({
  fetch: async e => {
    let t = PT.getLibraryPublishedComponentsUsages({
      startTs: G5(_$$o[e.duration]).toString(),
      endTs: G5(0).toString(),
      libraryFileKey: e.libraryFileKey,
      orgIdForLogging: e.orgId,
      entrypointForLogging: e.entryPointForLogging
    });
    let i = PT.getLibraryPublishedComponentsActions({
      startTs: G5(_$$o[e.duration]).toString(),
      endTs: G5(0).toString(),
      libraryFileKey: e.libraryFileKey,
      orgIdForLogging: e.orgId,
      entrypointForLogging: e.entryPointForLogging
    });
    let [r, a] = await Promise.all([i, t]);
    return {
      actions: r.data.meta,
      usages: a.data.meta
    };
  },
  output: ({
    data: {
      actions: e,
      usages: t
    }
  }) => {
    let i = e.components ?? {};
    let n = e.state_groups ?? {};
    return {
      components: (t.components ?? []).map(e => {
        let t = e.component_key ? i[e.component_key] : d;
        return {
          ...e,
          ...(t ?? d)
        };
      }),
      stateGroups: (t.state_groups ?? []).map(e => {
        let t = e.id ? n[e.id] : d;
        return {
          ...e,
          ...(t ?? d)
        };
      })
    };
  }
});
let $$m5 = liveStoreInstance.Query({
  fetch: async ({
    fileKey: e,
    numDays: t
  }) => h((await PT.getLibraryWeeklyInsertions({
    fileKey: e,
    startTs: G5(t + 7).toString(),
    endTs: S6(1).toString()
  })).data.meta)
});
let h = e => e.map(e => ({
  date: new Date(e.date),
  value: e.num_insertions
}));
let $$g6 = liveStoreInstance.Query({
  fetch: async ({
    fileKey: e,
    numDays: t
  }) => f((await PT.getLibraryTeamUsage({
    fileKey: e,
    startTs: G5(t).toString(),
    endTs: S6(1).toString()
  })).data.meta)
});
let f = e => {
  let t = [...e];
  let i = 0;
  for (let e of t) i += +e.num_insertions;
  for (let e of t) e.percent_insertions = `${Math.round(100 * e.num_insertions / i)}%`;
  return t;
};
let $$_0 = liveStoreInstance.Query({
  fetch: async ({
    fileKey: e
  }) => (await PT.getLibraryStyleOverview({
    libraryFileKey: e
  })).data.meta
});
let $$A7 = liveStoreInstance.Query({
  fetch: async ({
    libraryFileKey: e,
    styleKey: t
  }) => (await PT.getLibraryStyleDetails({
    libraryFileKey: e,
    styleKey: t
  })).data.meta
});
let $$y8 = liveStoreInstance.Query({
  fetch: async ({
    fileKey: e
  }) => (await PT.getLibraryVariableOverview({
    libraryFileKey: e
  })).data.meta
});
let $$b2 = liveStoreInstance.Query({
  fetch: async ({
    libraryFileKey: e,
    variableKey: t
  }) => (await PT.getLibraryVariableDetails({
    libraryFileKey: e,
    variableKey: t
  })).data.meta
});
liveStoreInstance.Query({
  fetch: e => Z.getLibraryPublishedComponentsStats({
    libraryFileKey: e
  }),
  output: ({
    data: e
  }) => ({
    components: e.data.meta.components ?? [],
    stateGroups: e.data.meta.state_groups ?? []
  }),
  key: "libraryStatsForLibraryView"
});
export let $$v4 = liveStoreInstance.Query({
  fetch: e => liveStoreInstance.fetch(u(e)),
  output: ({
    data: e
  }) => ({
    components: e.components ?? [],
    stateGroups: e.state_groups ?? []
  }),
  key: "libraryStatsV2ForLibraryView"
});
export const DQ = $$_0;
export const Lp = $$u1;
export const U7 = $$b2;
export const Xk = $$p3;
export const Yt = $$v4;
export const bu = $$m5;
export const k9 = $$g6;
export const lY = $$A7;
export const y$ = $$y8;
export const yu = $$c9;