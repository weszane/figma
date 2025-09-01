import { t } from "../905/303541";
var $$r6 = (e => (e.CURRENT_USER_READ = "current_user:read", e.FILES_READ_DEPRECATING = "files:read", e.FILE_CONTENT_READ = "file_content:read", e.FILE_CODE_CONNECT_WRITE = "file_code_connect:write", e.FILE_COMMENTS_READ = "file_comments:read", e.FILE_COMMENTS_WRITE = "file_comments:write", e.FILE_DEV_RESOURCES_READ = "file_dev_resources:read", e.FILE_DEV_RESOURCES_WRITE = "file_dev_resources:write", e.FILE_METADATA_READ = "file_metadata:read", e.FILE_VARIABLES_READ = "file_variables:read", e.FILE_VARIABLES_WRITE = "file_variables:write", e.FILE_VERSIONS_READ = "file_versions:read", e.LIBRARY_ANALYTICS = "library_analytics:read", e.LIBRARY_ASSETS_READ = "library_assets:read", e.LIBRARY_CONTENT_READ = "library_content:read", e.PROJECTS_READ = "projects:read", e.TEAM_LIBRARY_CONTENT_READ = "team_library_content:read", e.WEBHOOKS_READ = "webhooks:read", e.WEBHOOKS_WRITE = "webhooks:write", e))($$r6 || {});
var $$a1 = (e => (e.CURRENT_USER = "CURRENT_USER", e.CODE_CONNECT = "CODE_CONNECT", e.COMMENTS = "COMMENTS", e.DEV_RESOURCES = "DEV_RESOURCES", e.FILE_CONTENT = "FILE_CONTENT", e.FILE_METADATA = "FILE_METADATA", e.FILE_VERSIONS = "FILE_VERSIONS", e.LIBRARY_ANALYTICS = "LIBRARY_ANALYTICS", e.LIBRARY_ASSETS = "LIBRARY_ASSETS", e.LIBRARY_CONTENT = "LIBRARY_CONTENT", e.PROJECTS = "PROJECTS", e.TEAM_LIBRARY_CONTENT = "TEAM_LIBRARY_CONTENT", e.VARIABLES = "VARIABLES", e.WEBHOOKS = "WEBHOOKS", e))($$a1 || {});
var $$s4 = (e => (e.NO_ACCESS = "NO_ACCESS", e.READ = "READ", e.WRITE = "WRITE", e.READ_WRITE = "READ_WRITE", e))($$s4 || {});
export function $$o5(e) {
  switch (e) {
    case "CODE_CONNECT":
      return {
        name: t("tokens.settings.dev_token_modal.scope.code_connect_name"),
        description: t("tokens.settings.dev_token_modal.scope.code_connect_description"),
        levels: ["NO_ACCESS", "WRITE"]
      };
    case "COMMENTS":
      return {
        name: t("tokens.settings.dev_token_modal.scope.comments_name"),
        description: t("tokens.settings.dev_token_modal.scope.comments_description_v2"),
        levels: ["NO_ACCESS", "READ", "WRITE", "READ_WRITE"]
      };
    case "CURRENT_USER":
      return {
        name: t("tokens.settings.dev_token_modal.scope.current_user_name"),
        description: t("tokens.settings.dev_token_modal.scope.current_user_description"),
        levels: ["NO_ACCESS", "READ"]
      };
    case "DEV_RESOURCES":
      return {
        name: t("tokens.settings.dev_token_modal.scope.dev_resources_name"),
        description: t("tokens.settings.dev_token_modal.scope.dev_resources_description"),
        levels: ["NO_ACCESS", "READ", "WRITE"]
      };
    case "FILE_CONTENT":
      return {
        name: t("tokens.settings.dev_token_modal.scope.file_content_name"),
        description: t("tokens.settings.dev_token_modal.scope.file_content_description_v2"),
        levels: ["NO_ACCESS", "READ"]
      };
    case "FILE_METADATA":
      return {
        name: t("tokens.settings.dev_token_modal.scope.file_metadata_name"),
        description: t("tokens.settings.dev_token_modal.scope.file_metadata_description"),
        levels: ["NO_ACCESS", "READ"]
      };
    case "FILE_VERSIONS":
      return {
        name: t("tokens.settings.dev_token_modal.scope.file_versions_name"),
        description: t("tokens.settings.dev_token_modal.scope.file_versions_description"),
        levels: ["NO_ACCESS", "READ"]
      };
    case "LIBRARY_ANALYTICS":
      return {
        name: t("tokens.settings.dev_token_modal.scope.library_analytics_name"),
        description: t("tokens.settings.dev_token_modal.scope.library_analytics_description"),
        levels: ["NO_ACCESS", "READ"]
      };
    case "LIBRARY_ASSETS":
      return {
        name: t("tokens.settings.dev_token_modal.scope.library_assets_name"),
        description: t("tokens.settings.dev_token_modal.scope.library_assets_description"),
        levels: ["NO_ACCESS", "READ"]
      };
    case "LIBRARY_CONTENT":
      return {
        name: t("tokens.settings.dev_token_modal.scope.library_content_name"),
        description: t("tokens.settings.dev_token_modal.scope.library_content_description"),
        levels: ["NO_ACCESS", "READ"]
      };
    case "PROJECTS":
      return {
        name: t("tokens.settings.dev_token_modal.scope.projects_name"),
        description: t("tokens.settings.dev_token_modal.scope.projects_description"),
        levels: ["NO_ACCESS", "READ"]
      };
    case "TEAM_LIBRARY_CONTENT":
      return {
        name: t("tokens.settings.dev_token_modal.scope.team_library_content_name"),
        description: t("tokens.settings.dev_token_modal.scope.team_library_content_description"),
        levels: ["NO_ACCESS", "READ"]
      };
    case "VARIABLES":
      return {
        name: t("tokens.settings.dev_token_modal.scope.variables_name"),
        description: t("tokens.settings.dev_token_modal.scope.variables_description"),
        levels: ["NO_ACCESS", "READ", "READ_WRITE"]
      };
    case "WEBHOOKS":
      return {
        name: t("tokens.settings.dev_token_modal.scope.webhooks_name"),
        description: t("tokens.settings.dev_token_modal.scope.webhooks_description_v2"),
        levels: ["NO_ACCESS", "READ", "WRITE", "READ_WRITE"]
      };
  }
}
export function $$l0(e) {
  switch (e) {
    case "NO_ACCESS":
      return t("tokens.settings.dev_token_modal.scope.no_access");
    case "READ":
      return t("tokens.settings.dev_token_modal.scope.read_only");
    case "WRITE":
      return t("tokens.settings.dev_token_modal.scope.write_only");
    case "READ_WRITE":
      return t("tokens.settings.dev_token_modal.scope.read_write");
    default:
      return "";
  }
}
export function $$d3(e) {
  let t = {
    CODE_CONNECT: "NO_ACCESS",
    COMMENTS: "NO_ACCESS",
    CURRENT_USER: "NO_ACCESS",
    DEV_RESOURCES: "NO_ACCESS",
    FILE_CONTENT: "NO_ACCESS",
    FILE_VERSIONS: "NO_ACCESS",
    FILE_METADATA: "NO_ACCESS",
    LIBRARY_ANALYTICS: "NO_ACCESS",
    LIBRARY_ASSETS: "NO_ACCESS",
    LIBRARY_CONTENT: "NO_ACCESS",
    PROJECTS: "NO_ACCESS",
    TEAM_LIBRARY_CONTENT: "NO_ACCESS",
    VARIABLES: "NO_ACCESS",
    WEBHOOKS: "NO_ACCESS"
  };
  for (let i of e) switch (i) {
    case "current_user:read":
      t.CURRENT_USER = "READ";
      break;
    case "files:read":
    case "file_content:read":
      t.FILE_CONTENT = "READ";
      break;
    case "file_code_connect:write":
      t.CODE_CONNECT = "WRITE";
      break;
    case "file_comments:read":
    case "file_comments:write":
      "NO_ACCESS" !== t.COMMENTS ? t.COMMENTS = "READ_WRITE" : "file_comments:read" === i ? t.COMMENTS = "READ" : t.COMMENTS = "WRITE";
      break;
    case "file_dev_resources:read":
    case "file_dev_resources:write":
      "NO_ACCESS" !== t.DEV_RESOURCES ? t.DEV_RESOURCES = "READ_WRITE" : "file_dev_resources:read" === i ? t.DEV_RESOURCES = "READ" : t.DEV_RESOURCES = "WRITE";
      break;
    case "file_metadata:read":
      t.FILE_METADATA = "READ";
      break;
    case "file_variables:read":
    case "file_variables:write":
      "NO_ACCESS" !== t.VARIABLES ? t.VARIABLES = "READ_WRITE" : "file_variables:read" === i ? t.VARIABLES = "READ" : t.VARIABLES = "WRITE";
      break;
    case "file_versions:read":
      t.FILE_VERSIONS = "READ";
      break;
    case "library_analytics:read":
      t.LIBRARY_ANALYTICS = "READ";
      break;
    case "library_assets:read":
      t.LIBRARY_ASSETS = "READ";
      break;
    case "library_content:read":
      t.LIBRARY_CONTENT = "READ";
      break;
    case "projects:read":
      t.PROJECTS = "READ";
      break;
    case "team_library_content:read":
      t.TEAM_LIBRARY_CONTENT = "READ";
      break;
    case "webhooks:read":
    case "webhooks:write":
      "NO_ACCESS" !== t.WEBHOOKS ? t.WEBHOOKS = "READ_WRITE" : "webhooks:read" === i ? t.WEBHOOKS = "READ" : t.WEBHOOKS = "WRITE";
  }
  return t;
}
export function $$c2(e) {
  let t = [];
  Object.entries(e).forEach(([e, i]) => {
    if ("NO_ACCESS" !== i) switch (e) {
      case "CODE_CONNECT":
        t.push("file_code_connect:write");
        break;
      case "COMMENTS":
        "READ" === i ? t.push("file_comments:read") : ("WRITE" === i || t.push("file_comments:read"), t.push("file_comments:write"));
        break;
      case "CURRENT_USER":
        t.push("current_user:read");
        break;
      case "DEV_RESOURCES":
        "READ" === i ? t.push("file_dev_resources:read") : (t.push("file_dev_resources:read"), t.push("file_dev_resources:write"));
        break;
      case "FILE_CONTENT":
        t.push("file_content:read");
        break;
      case "FILE_METADATA":
        t.push("file_metadata:read");
        break;
      case "FILE_VERSIONS":
        t.push("file_versions:read");
        break;
      case "LIBRARY_ANALYTICS":
        t.push("library_analytics:read");
        break;
      case "LIBRARY_ASSETS":
        t.push("library_assets:read");
        break;
      case "LIBRARY_CONTENT":
        t.push("library_content:read");
        break;
      case "PROJECTS":
        t.push("projects:read");
        break;
      case "TEAM_LIBRARY_CONTENT":
        t.push("team_library_content:read");
        break;
      case "VARIABLES":
        "READ" === i ? t.push("file_variables:read") : (t.push("file_variables:read"), t.push("file_variables:write"));
        break;
      case "WEBHOOKS":
        "READ" === i ? t.push("webhooks:read") : ("WRITE" === i || t.push("webhooks:read"), t.push("webhooks:write"));
    }
  });
  return t;
}
export const E0 = $$l0;
export const IJ = $$a1;
export const Wc = $$c2;
export const av = $$d3;
export const eK = $$s4;
export const qq = $$o5;
export const sy = $$r6;