import { vh, td } from "../figma_app/181241";
import { XHR } from "../905/910117";
export let $$a0 = new class {
  constructor() {
    this.InContextPublishedComponentsSchemaValidator = vh();
    this.InContextPublishedComponentsStatusSchemaValidator = vh();
    this.LibraryPublishedComponentsV2WithCodeConnectSchemaValidator = vh();
    this.ConnectedRepositoriesSchemaValidator = vh();
    this.LibraryIngestionStatusSchemaValidator = vh();
    this.RepositorySourceFilesSchemaValidator = vh();
    this.RepositorySourceFileComponentsSchemaValidator = vh();
    this.CreateCodeConnectMapSchemaValidator = vh();
    this.UpdateCodeConnectMapSchemaValidator = vh();
    this.DeleteCodeConnectMapSchemaValidator = vh();
    this.setLibraryGithubRepositoriesValidator = vh();
    this.getRepositoryDirectoriesValidator = vh();
    this.setRepositoryDirectoriesValidator = vh();
    this.CreateCodeConnectBulkMapSchemaValidator = vh();
    this.DeleteCodeConnectBulkMapSchemaValidator = vh();
    this.GithubSourceFileContentsSchemaValidator = vh();
  }
  getComponentNames(e) {
    return XHR.post("/api/code_connect/component_names", {
      nodes: e
    });
  }
  getInContextPublishedComponents(e) {
    return this.InContextPublishedComponentsSchemaValidator.validate(async ({
      xr: t
    }) => await t.post("/api/code_connect/library/in_context/published_components", {
      asset_keys: e
    }));
  }
  getInContextPublishedComponentsStatus(e) {
    return this.InContextPublishedComponentsStatusSchemaValidator.validate(async ({
      xr: t
    }) => await t.post("/api/code_connect/library/in_context/published_components/status", {
      asset_keys: e
    }));
  }
  getLibraryPublishedComponentsWithCodeConnect(e) {
    let {
      libraryKey
    } = e;
    return this.LibraryPublishedComponentsV2WithCodeConnectSchemaValidator.validate(async ({
      xr: e
    }) => await e.get(`/api/code_connect/library/${libraryKey}/published_components`));
  }
  getConnectedRepositories(e) {
    return this.ConnectedRepositoriesSchemaValidator.validate(async ({
      xr: t
    }) => await t.get(`/api/code_connect/libraries/${e.libraryKey}/repositories`, td.toAPIParameters(e)));
  }
  getLibraryIngestionStatus(e) {
    return this.LibraryIngestionStatusSchemaValidator.validate(async ({
      xr: t
    }) => await t.get(`/api/code_connect/library/${e.libraryKey}/status`));
  }
  getRepositorySourceFiles(e) {
    return this.RepositorySourceFilesSchemaValidator.validate(async ({
      xr: t
    }) => await t.get(`/api/code_connect/libraries/${e.libraryKey}/source_files`, td.toAPIParameters({
      repository: e.repository
    })));
  }
  getRepositoryFileComponents(e) {
    return this.RepositorySourceFileComponentsSchemaValidator.validate(async ({
      xr: t
    }) => await t.get(`/api/code_connect/libraries/${e.libraryKey}/source_files/file_details`, td.toAPIParameters({
      repository: e.repository,
      path: e.path
    })));
  }
  createCodeConnectMap(e) {
    return this.CreateCodeConnectMapSchemaValidator.validate(async ({
      xr: t
    }) => await t.post("/api/code_connect/map", td.toAPIParameters(e)));
  }
  updateCodeConnectMap(e) {
    return this.UpdateCodeConnectMapSchemaValidator.validate(async ({
      xr: t
    }) => await t.put("/api/code_connect/map", td.toAPIParameters(e)));
  }
  deleteCodeConnectMap(e) {
    return this.DeleteCodeConnectMapSchemaValidator.validate(async ({
      xr: t
    }) => await t.del("/api/code_connect/map", td.toAPIParameters(e)));
  }
  setLibraryGithubRepositories(e) {
    return this.setLibraryGithubRepositoriesValidator.validate(async ({
      xr: t
    }) => await t.put(`/api/code_connect/libraries/${e.libraryKey}/repositories`, td.toAPIParameters({
      repository_ids: e.repositoryIds
    })));
  }
  getRepositoryDirectories(e) {
    return this.getRepositoryDirectoriesValidator.validate(async ({
      xr: t
    }) => await t.get(`/api/code_connect/libraries/${e.libraryKey}/repositories/${e.repositoryId}/directories`));
  }
  setRepositoryDirectories(e) {
    return this.setRepositoryDirectoriesValidator.validate(async ({
      xr: t
    }) => await t.put(`/api/code_connect/libraries/${e.libraryKey}/repositories/${e.repositoryId}/directories`, td.toAPIParameters({
      directories: e.directories
    })));
  }
  createCodeConnectBulkMap(e) {
    return this.CreateCodeConnectBulkMapSchemaValidator.validate(async ({
      xr: t
    }) => await t.post("/api/code_connect/bulk_map", td.toAPIParameters(e)));
  }
  deleteCodeConnectBulkMap(e) {
    return this.DeleteCodeConnectBulkMapSchemaValidator.validate(async ({
      xr: t
    }) => await t.del("/api/code_connect/bulk_map", td.toAPIParameters(e)));
  }
  getGithubSourceFileContents(e) {
    return this.GithubSourceFileContentsSchemaValidator.validate(async ({
      xr: t
    }) => await t.post(`/api/code_connect/libraries/${e.libraryKey}/source_files/contents`, td.toAPIParameters({
      repository_id: e.repositoryId,
      file_path: e.filePath
    })));
  }
}();
export const Q = $$a0;