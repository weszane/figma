import { throwTypeError } from "../figma_app/465776";
var $$i0 = (e => (e[e.NAME = 0] = "NAME", e[e.CREATED_AT = 1] = "CREATED_AT", e[e.TOUCHED_AT = 2] = "TOUCHED_AT", e[e.TRASHED_AT = 3] = "TRASHED_AT", e[e.OWNER = 4] = "OWNER", e[e.SEARCH_RELEVANCE = 5] = "SEARCH_RELEVANCE", e[e.PROJECT_NAME = 6] = "PROJECT_NAME", e[e.ACCESSED_AT = 7] = "ACCESSED_AT", e[e.SHARED_AT = 8] = "SHARED_AT", e))($$i0 || {});
export function $$a6(e) {
  switch (e) {
    case 0:
      return "name";
    case 1:
      return "created_at";
    case 2:
      return "touched_at";
    case 3:
      return "trashed_at";
    case 4:
      return "owner";
    case 5:
      return "search_relevance";
    case 6:
      return "project_name";
    case 7:
      return "accessed_at";
    case 8:
      return "shared_at";
    default:
      throwTypeError(e);
  }
}
export var $$s14 = (e => (e[e.ASC = 0] = "ASC", e[e.DESC = 1] = "DESC", e))($$s14 || {});
export function $$o2(e) {
  switch (e) {
    case 0:
      return "asc";
    case 1:
      return "desc";
    default:
      throwTypeError(e);
  }
}
var $$l11 = (e => (e[e.ANY = 0] = "ANY", e[e.SELF = 1] = "SELF", e[e.OTHER = 2] = "OTHER", e))($$l11 || {});
var $$d4 = (e => (e[e.CAN_BE_VIEWED = 0] = "CAN_BE_VIEWED", e[e.CAN_BE_RESTORED_DELETED = 1] = "CAN_BE_RESTORED_DELETED", e))($$d4 || {});
var $$c13 = (e => (e[e.ANY = 0] = "ANY", e[e.DESIGN = 1] = "DESIGN", e[e.FIGJAM = 2] = "FIGJAM", e[e.PROTOTYPE = 3] = "PROTOTYPE", e[e.SLIDES = 4] = "SLIDES", e[e.SITES = 5] = "SITES", e[e.COOPER = 6] = "COOPER", e[e.MAKE = 7] = "MAKE", e))($$c13 || {});
var $$u5 = (e => (e[e.LIST = 0] = "LIST", e[e.GRID = 1] = "GRID", e))($$u5 || {});
export function $$p8(e) {
  switch (e) {
    case 0:
      return "list";
    case 1:
      return "grid";
    default:
      throwTypeError(e);
  }
}
export var $$_7 = (e => (e.ALL = "", e.SHARED = "shared", e.ORG_DELETED_DRAFTS = "deleted_user_drafts", e))($$_7 || {});
export function $$h1(e) {
  switch (e) {
    case 0:
      return "resource_name";
    case 1:
      return "resource_created_at";
    case 8:
      return "shared_at";
    default:
      return null;
  }
}
export function $$m9(e) {
  switch (e) {
    case 3:
      return "trashedAt";
    case 0:
      return "name";
    case 1:
      return "createdAt";
    default:
      return null;
  }
}
export function $$g10(e) {
  switch (e) {
    case 1:
    default:
      return "can_be_restored_deleted";
    case 0:
      return "can_be_viewed";
  }
}
export function $$f3(e) {
  switch (e) {
    case 1:
      return "0";
    case 2:
      return "1";
    case 4:
      return "2";
    case 5:
      return "3";
    case 6:
      return "4";
    case 7:
      return "5";
    case 3:
    case 0:
      return null;
    default:
      throwTypeError(e);
  }
}
export var $$E12 = (e => (e[e.TIME = 0] = "TIME", e[e.ALPHABETICAL = 1] = "ALPHABETICAL", e[e.OTHER = 2] = "OTHER", e))($$E12 || {});
export const C0 = $$i0;
export const De = $$h1;
export const GB = $$o2;
export const Gv = $$f3;
export const Jh = $$d4;
export const XU = $$u5;
export const _5 = $$a6;
export const cT = $$_7;
export const jq = $$p8;
export const jx = $$m9;
export const mo = $$g10;
export const rJ = $$l11;
export const rR = $$E12;
export const t2 = $$c13;
export const ue = $$s14;