import { jsx } from "react/jsx-runtime";
import { renderI18nText } from "../905/303541";
import { Fl } from "../figma_app/656450";
import { Ro } from "../figma_app/805373";
export function $$r1({
  userId: e,
  user: t,
  loading: n,
  size: a,
  defaultClassName: i,
  loadingClassName: r
}) {
  return t ? jsx(Ro, {
    size: a,
    entity: t,
    className: i
  }) : n ? jsx("div", {
    className: r,
    style: {
      width: a,
      height: a
    }
  }) : jsx(Ro, {
    size: a,
    entity: {
      id: e
    },
    className: i
  });
}
export function $$l0({
  userId: e,
  user: t,
  loading: n,
  defaultClassName: s,
  loadingClassName: r
}) {
  return t ? jsx("span", {
    className: s,
    children: t.handle
  }) : n ? jsx("span", {
    className: r
  }) : Fl(e) ? jsx("span", {
    className: s,
    children: renderI18nText("voting.voter_username.visitor")
  }) : jsx("span", {
    className: s,
    children: renderI18nText("voting.voter_username.unavailable")
  });
}
export const m = $$l0;
export const v = $$r1;