import { UpgradeSteps } from "../figma_app/831101";
var $$i0 = (e => (e[e.INVITE = 0] = "INVITE", e[e.PUBLISH_COMMUNITY = 1] = "PUBLISH_COMMUNITY", e[e.PUBLISH_TEMPLATE = 2] = "PUBLISH_TEMPLATE", e[e.COLLABORATORS = 3] = "COLLABORATORS", e[e.EMBED_CODE = 4] = "EMBED_CODE", e[e.SHARE_SETTINGS = 5] = "SHARE_SETTINGS", e[e.FOLDER_MEMBERS = 6] = "FOLDER_MEMBERS", e[e.SHARE_GOOGLE_DEVICE_DISCLAIMER = 7] = "SHARE_GOOGLE_DEVICE_DISCLAIMER", e[e.SHARE_TO_GOOGLE_CLASSROOM = 8] = "SHARE_TO_GOOGLE_CLASSROOM", e[e.CONNECTED_PROJECT_USERS = 9] = "CONNECTED_PROJECT_USERS", e[e.UPDATE_SEAT = 10] = "UPDATE_SEAT", e))($$i0 || {});
var $$a13 = (e => (e.FILE = "file", e.FULLSCREEN_PREVIEW = "fullscreen_preview", e.SETTINGS = "settings", e))($$a13 || {});
var $$s10 = (e => (e.ACCOUNT = "account", e.PLUGINS = "plugins", e.COMMUNITY = "community", e.NOTIFICATIONS = "notifications", e))($$s10 || {});
export function $$o18(e) {
  return "search" === e.view;
}
export let $$l19 = {
  UNIVERSAL_PUBLISHING: "publish",
  ACCOUNT_SETTINGS: "settings"
};
var $$d14 = (e => (e.RESOURCES = "resources", e.FOLLOWERS = "followers", e.FOLLOWING = "following", e.METRICS = "metrics", e.SAVES = "saves", e))($$d14 || {});
var $$c2 = (e => (e[e.DEFAULT = 0] = "DEFAULT", e.FULLSCREEN = "fullscreen", e.FULLSCREEN_WITH_COMMENTS = "fullscreen_comments", e))($$c2 || {});
var $$u8 = (e => (e.ONBOARDING = "onboarding", e))($$u8 || {});
export function $$p9(e) {
  return "org" === e.view;
}
var $$_1 = (e => (e[e.PROJECT = 0] = "PROJECT", e[e.TEAM = 1] = "TEAM", e[e.WORKSPACE = 2] = "WORKSPACE", e[e.LICENSE_GROUP = 3] = "LICENSE_GROUP", e))($$_1 || {});
var $$h5 = (e => (e.UPGRADE_EXISTING_TEAM = "upgrade_existing_team", e.CREATE_AND_UPGRADE = "create_and_upgrade", e.CREATE = "create", e))($$h5 || {});
var $$m6 = (e => (e[e.UNDETERMINED = 0] = "UNDETERMINED", e[e.STARTER = 1] = "STARTER", e[e.TEAM = 2] = "TEAM", e[e.ORG = 3] = "ORG", e))($$m6 || {});
export function $$g16(e) {
  return "create" === e || "create_and_upgrade" === e;
}
export function $$f17(e) {
  return "upgrade_existing_team" === e;
}
export function $$E11(e, t) {
  return "create" === e && (t === UpgradeSteps.CREATE_TEAM || t === UpgradeSteps.ADD_COLLABORATORS) || t === UpgradeSteps.PLAN_COMPARISON;
}
let $$y15 = ["deletedFiles", "trashedFolders", "teamCreation", "folder", "addCollaborators", "team", "teamUpgrade", "orgAdminSettings", "licenseGroup", "workspace", "billingGroupDashboard", "search", "user", "promoReview", "eduReview", "teamFeed", "resourceUnavailable", "feed", "teamAdminConsole", "recentsAndSharing", "draftsToMove", "allProjects", "limitedTeamSharedProjects", "orgDomainManagement", "orgIdpManagement", "abandonedDraftFiles", "litmus", "componentBrowserLibrary", "seatRequests", "resourceHub"];
let $$b3 = ["recentsAndSharing", "folder", "allProjects", "limitedTeamSharedProjects", "team"];
let $$T7 = ["recentsAndSharing", "draftsToMove"];
export function $$I4(e) {
  return $$y15.includes(e.view);
}
export var $$S12 = (e => (e.NONE = "none", e.REPO_SELECTOR = "repo-selector", e.DIRECTORY_SELECTOR = "directory-selector", e))($$S12 || {});
export const A5 = $$i0;
export const Ft = $$_1;
export const G4 = $$c2;
export const Gn = $$b3;
export const QB = $$I4;
export const SC = $$h5;
export const Sc = $$m6;
export const T8 = $$T7;
export const U6 = $$u8;
export const bN = $$p9;
export const bb = $$s10;
export const ck = $$E11;
export const e6 = $$S12;
export const f0 = $$a13;
export const g3 = $$d14;
export const gu = $$y15;
export const h5 = $$g16;
export const jX = $$f17;
export const kV = $$o18;
export const ou = $$l19;