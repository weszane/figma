import { M4 } from "../905/713695";
import { Q } from "../905/577205";
import { QV } from "../1250/958770";
let $$o0 = M4.Query({
  fetch: async e => (await Q.getRepositorySourceFiles(e)).data.meta.source_files ?? []
});
let $$s3 = M4.Query({
  fetch: async e => (await Q.getRepositoryFileComponents(e)).data.meta
});
let $$l2 = M4.Query({
  fetch: async ({
    planType: e,
    planParentId: t
  }) => (await QV.getOrgGithubInstallations({
    plan_type: e,
    parent_plan_id: t
  })).data.meta
});
M4.Query({
  fetch: async ({
    planType: e,
    planParentId: t
  }) => (await QV.getGithubRepositories({
    plan_type: e,
    plan_parent_id: t
  })).data.meta
});
let $$d4 = M4.Query({
  fetch: async e => {
    let t = await Q.getConnectedRepositories({
      libraryKey: e
    });
    return {
      availableRepositories: t.data.meta.available_repositories,
      selectedRepositories: t.data.meta.selected_repositories,
      libraryKey: e
    };
  },
  key: "connectedRepositoriesCodeConnect"
});
let $$c1 = M4.Mutation(async (e, {
  query: t
}) => {
  let {
    libraryKey,
    repositoryIds
  } = e;
  await Q.setLibraryGithubRepositories({
    libraryKey,
    repositoryIds
  });
  return await t.refetch($$d4(libraryKey));
});
export const Tp = $$o0;
export const XU = $$c1;
export const bg = $$l2;
export const rt = $$s3;
export const sN = $$d4;