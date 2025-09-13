import { throwTypeError } from "../figma_app/465776";
import { n3, ey, yG } from "../905/859698";
import a from "../vendor/923386";
import { A as _$$A } from "../905/920142";
import { mapVariableResolvedDataType } from "../figma_app/349248";
import { LibraryAgeEnum } from "../figma_app/633080";
var s = a;
export function $$c0(e, t) {
  if (!e) return null;
  let i = A(t);
  let n = s()(e, i);
  return e.map(e => ({
    team_id: e.team_id,
    team_name: e.team_name,
    num_insertions: e[i],
    percent_insertions: `${Math.round(100 * e[i] / n)}%`
  })).filter(e => e.num_insertions > 0).sort((e, t) => t.num_insertions - e.num_insertions);
}
export function $$u3(e) {
  if (!e) return null;
  if (0 === e.length) return [];
  let t = e.map(e => ({
    date: p(e.week_start),
    value: e.insertions
  }));
  let i = p(_$$A().format("YYYY-MM-DD"));
  t[0].date.getDate() !== i.getDate() && t.unshift({
    date: i,
    value: 0
  });
  return t;
}
function p(e) {
  let t = _$$A(e);
  return 6 === t.day() ? t.toDate() : t.day(6).toDate();
}
export function $$m1(e, t, i) {
  if (!e) return [];
  let n = A(_(i));
  let a = y(_(i));
  return e.map(e => ({
    file_key: t,
    key: n3(e.key),
    name: e.name,
    num_existing_instances: e.usages,
    num_insertions: e[n],
    num_detachments: e[a],
    thumbnail_url: e.thumbnail_url,
    style_type: e.style_type
  }));
}
export function $$h4(e, t, i) {
  if (!e) return [];
  let n = A(_(i));
  let a = y(_(i));
  return e.map(e => ({
    file_key: t,
    key: ey(e.key),
    name: e.name ?? "",
    variableCollectionKey: yG(e.variable_set_key),
    collectionName: e.variable_set_name,
    num_existing_instances: e.usages,
    num_insertions: e[n],
    num_detachments: e[a],
    resolvedType: mapVariableResolvedDataType(e.type)
  }));
}
export function $$g5(e) {
  return e ? e.map(e => ({
    id: e.mode_id,
    name: e.mode_name,
    num_existing_instances: e.usages,
    collectionKey: e.variable_set_key,
    collectionName: e.variable_set_name
  })) : [];
}
export function $$f2(e) {
  return e ? e.map(e => ({
    fileName: e.file_name,
    fileKey: e.file_key,
    teamName: e.team_name,
    numInstances: e.usages,
    lastModified: e.last_modified
  })) : [];
}
function _(e) {
  switch (e) {
    case LibraryAgeEnum.THIRTY_DAYS:
      return 30;
    case LibraryAgeEnum.SIXTY_DAYS:
      return 60;
    case LibraryAgeEnum.NINETY_DAYS:
      return 90;
    case LibraryAgeEnum.YEAR:
      return 365;
    default:
      throwTypeError(e);
  }
}
function A(e) {
  switch (e) {
    case 30:
      return "insertions_30";
    case 60:
      return "insertions_60";
    case 90:
      return "insertions_90";
    default:
      return "insertions_year";
  }
}
function y(e) {
  switch (e) {
    case 30:
      return "detachments_30";
    case 60:
      return "detachments_60";
    case 90:
      return "detachments_90";
    default:
      return "detachments_year";
  }
}
export const Im = $$c0;
export const Wb = $$m1;
export const _4 = $$f2;
export const fX = $$u3;
export const rV = $$h4;
export const uU = $$g5;