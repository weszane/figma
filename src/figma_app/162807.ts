import { t } from "../905/303541";
var $$i31 = (e => (e.FILES = "files", e.PROJECTS = "projects", e.TEAMS = "teams", e.USERS = "users", e.HUB_FILES = "hub_files", e.PUBLIC_PLUGINS = "public_plugins", e.PRIVATE_PLUGINS = "private_plugins", e.PUBLIC_PROFILES = "public_profiles", e.PUBLIC_WIDGETS = "public_widgets", e.PRIVATE_WIDGETS = "private_widgets", e))($$i31 || {});
var $$a9 = (e => (e.RESOURCE = "resource", e.CREATOR = "creator", e.SPACE = "space", e))($$a9 || {});
var $$s18 = (e => (e.USERS = "users", e.PROJECTS = "projects", e.TEAMS = "teams", e.ORGS = "orgs", e))($$s18 || {});
var $$o29 = (e => (e.FOLDER = "folders", e.TEAM = "teams", e.ORG = "orgs", e))($$o29 || {});
var $$l32 = (e => (e.DROPDOWN = "dropdown", e.AUTOCOMPLETE = "autocomplete", e))($$l32 || {});
var $$d25 = (e => (e.PILL = "pill", e.CLEAR_ALL = "clear_all", e.ALL_TYPES = "all_types", e.SELECTION = "selection", e))($$d25 || {});
var $$c0 = (e => (e.ALL_FILES = "FILES", e.DESIGN_FILES = "DESIGN_FILES", e.FIGJAM_FILES = "FIGJAM_FILES", e.SLIDES = "SLIDES", e.USERS = "USERS", e.PROJECTS = "PROJECTS", e.TEAMS = "TEAMS", e.PLUGINS = "PLUGINS", e.WIDGETS = "WIDGETS", e.SITES = "SITES", e.BUZZ = "BUZZ", e.MAKE = "MAKE", e))($$c0 || {});
var $$u20 = (e => (e.NAME = "name", e.FUZZY_NAME = "fuzzy-name", e.NAME_WORD_DELIMITER_V2 = "name-word-delimiter-v2", e.DEEP_SEARCH_TEXT = "deep-search-text", e.PAGE_NAME = "page-name", e.FRAME_NAME = "frame-name", e.FRAGMENT_RETRIEVAL = "fragment-retrieval", e))($$u20 || {});
var $$p6 = (e => (e.ONE_TYPE = "one_type", e.ALL_TYPES_BLOCKING = "all_types_blocking", e.ALL_TYPES_STREAMING = "all_types_streaming", e))($$p6 || {});
export function $$_13(e) {
  if (!e) return null;
  switch (e.value) {
    case "FILES":
    case "DESIGN_FILES":
    case "FIGJAM_FILES":
    case "SLIDES":
    case "SITES":
    case "BUZZ":
    case "MAKE":
      return "files";
    case "USERS":
      return "users";
    case "PROJECTS":
      return "projects";
    case "TEAMS":
      return "teams";
    case "PLUGINS":
      return "private_plugins";
    case "WIDGETS":
      return "private_widgets";
    default:
      return null;
  }
}
export function $$h11(e) {
  switch (e) {
    case "files":
      return "FILES";
    case "users":
      return "USERS";
    case "projects":
      return "PROJECTS";
    case "teams":
      return "TEAMS";
    case "private_plugins":
      return "PLUGINS";
    case "private_widgets":
      return "WIDGETS";
    default:
      return null;
  }
}
export var $$m16 = (e => (e.DESIGN = "design", e.FIGJAM = "whiteboard", e.SLIDES = "slides", e.SITES = "sites", e.COOPER = "cooper", e.FIGMAKE = "figmake", e))($$m16 || {});
export function $$g14(e) {
  if (e) switch (e.value) {
    case "DESIGN_FILES":
      return "design";
    case "FIGJAM_FILES":
      return "whiteboard";
    case "SLIDES":
      return "slides";
    case "SITES":
      return "sites";
    case "BUZZ":
      return "cooper";
    case "MAKE":
      return "figmake";
    default:
      return;
  }
}
export function $$f3(e) {
  if (!e) return null;
  let t = {};
  for (let [r, n] of Object.entries(e)) n && ("creatorIds" === r ? t["creator_ids[]"] = n : "folderIds" === r && n.length > 0 ? t["folder_ids[]"] = n : "teamIds" === r && n.length > 0 ? t["team_ids[]"] = n : "orgIds" === r && n.length > 0 ? t["org_ids[]"] = n : t[r] = n);
  return t;
}
export var $$E7 = (e => (e.ORG = "internal", e.ORG_GUEST = "internal_guest", e.PERSONAL = "personal", e.COMMUNITY = "community", e))($$E7 || {});
export let $$y21 = {
  internal: {
    modelTypes: ["files", "projects", "users", "teams", "private_plugins", "private_widgets"],
    correspondingModelTypes: {
      hub_files: "files",
      public_profiles: "users",
      public_plugins: "private_plugins",
      public_widgets: "private_widgets"
    },
    defaultModelType: "files"
  },
  internal_guest: {
    modelTypes: ["files", "projects", "users", "teams"],
    correspondingModelTypes: {
      hub_files: "files",
      public_profiles: "users"
    },
    defaultModelType: "files"
  },
  personal: {
    modelTypes: ["files", "projects", "users"],
    correspondingModelTypes: {
      hub_files: "files",
      public_profiles: "users"
    },
    defaultModelType: "files"
  },
  community: {
    modelTypes: ["hub_files", "public_plugins", "public_profiles", "public_widgets"],
    correspondingModelTypes: {
      files: "hub_files",
      users: "public_profiles",
      private_plugins: "public_plugins",
      private_widgets: "public_widgets"
    },
    defaultModelType: "hub_files"
  }
};
var $$b24 = (e => (e.POPULARITY = "popularity", e.RECENCY = "recency", e.RELEVANCY = "relevancy", e.NAME = "name", e.AUTHOR_NAME = "author_name", e.INSTALL_COUNT = "install_count", e.MEMBER_COUNT = "member_count", e.UPDATED_AT = "updated_at", e.TOUCHED_AT = "touched_at", e.CREATED_AT = "created_at", e.EMAIL = "email", e))($$b24 || {});
var $$T12 = (e => (e.NAME = "name", e.AUTHOR_NAME = "author_name", e.UPDATED_AT = "updated_at", e.INSTALL_COUNT = "install_count", e.RELEVANCY = "relevancy", e.RUN_COUNT = "run_count", e))($$T12 || {});
var $$I19 = (e => (e.NAME = "name", e.AUTHOR_NAME = "author_name", e.UPDATED_AT = "updated_at", e.INSTALL_COUNT = "install_count", e.RELEVANCY = "relevancy", e))($$I19 || {});
var $$S22 = (e => (e.POPULARITY = "popularity", e.RECENCY = "recency", e))($$S22 || {});
var $$v2 = (e => (e.RELEVANCY = "relevancy", e.NAME = "name", e.TOUCHED_AT = "touched_at", e.CREATED_AT = "created_at", e.OWNER = "owner", e))($$v2 || {});
var $$A26 = (e => (e.RELEVANCY = "relevancy", e.NAME = "name", e.CREATED_AT = "created_at", e))($$A26 || {});
var $$x28 = (e => (e.RELEVANCY = "relevancy", e.NAME = "name", e.FILES_LAST_TOUCHED_AT = "files_last_touched_at", e.CREATED_AT = "created_at", e.MEMBER_COUNT = "member_count", e))($$x28 || {});
var $$N17 = (e => (e.RELEVANCY = "relevancy", e.NAME = "name", e.EMAIL = "email", e))($$N17 || {});
var $$C15 = (e => (e.RELEVANCY = "relevancy", e))($$C15 || {});
var $$w10 = (e => (e.RELEVANCY = "relevancy", e))($$w10 || {});
var $$O1 = (e => (e.PREVIEW = "preview", e.FULL_PAGE = "full_page", e.OUTSIDE_FILE_BROWSER = "outside_file_browser", e))($$O1 || {});
var $$R30 = (e => (e.OPEN = "open", e.CLOSE = "close", e))($$R30 || {});
export function $$L27(e) {
  switch (e) {
    case "files":
      return t("search.search_model_type_header.files");
    case "projects":
      return t("search.search_model_type_header.projects");
    case "teams":
      return t("search.search_model_type_header.teams");
    case "users":
      return t("search.search_model_type_header.people");
    case "hub_files":
      return t("search.search_model_type_header.hub_files");
    case "public_plugins":
      return t("search.search_model_type_header.public_plugins");
    case "private_plugins":
      return t("search.search_model_type_header.private_plugins");
    case "public_profiles":
      return t("search.search_model_type_header.creators");
    case "public_widgets":
      return t("search.search_model_type_header.public_widgets");
    case "private_widgets":
      return t("search.search_model_type_header.private_widgets");
  }
}
export function $$P23(e) {
  switch (e) {
    case "files":
      return t("search.search_model_type.empty_state_files");
    case "projects":
      return t("search.search_model_type.empty_state_projects");
    case "teams":
      return t("search.search_model_type.empty_state_teams");
    case "users":
      return t("search.search_model_type.empty_state_people");
    case "hub_files":
      return t("search.search_model_type.empty_state_hub_files");
    case "public_plugins":
      return t("search.search_model_type.empty_state_public_plugins");
    case "private_plugins":
      return t("search.search_model_type.empty_state_private_plugins");
    case "public_profiles":
      return t("search.search_model_type.empty_state_creators");
    case "public_widgets":
      return t("search.search_model_type.empty_state_public_widgets");
    case "private_widgets":
      return t("search.search_model_type.empty_state_private_widgets");
    default:
      return "";
  }
}
let $$D5 = 4;
let $$k4 = 10;
let $$M8 = 30;
export const $L = $$c0;
export const L0 = $$O1;
export const Lk = $$v2;
export const Lr = $$f3;
export const MU = $$k4;
export const Or = $$D5;
export const Rr = $$p6;
export const Rx = $$E7;
export const Rz = $$M8;
export const WY = $$a9;
export const W_ = $$w10;
export const Wr = $$h11;
export const XW = $$T12;
export const Xr = $$_13;
export const Zr = $$g14;
export const _M = $$C15;
export const _Y = $$m16;
export const a7 = $$N17;
export const dC = $$s18;
export const dt = $$I19;
export const f9 = $$u20;
export const fS = $$y21;
export const gw = $$S22;
export const hf = $$P23;
export const j9 = $$b24;
export const jD = $$d25;
export const mp = $$A26;
export const q6 = $$L27;
export const qm = $$x28;
export const qy = $$o29;
export const tC = $$R30;
export const uH = $$i31;
export const uR = $$l32;