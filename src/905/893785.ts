import { useMemo } from "react";
import r from "../vendor/336892";
import { J } from "../905/931050";
import { APILoadingStatus } from "../905/520829";
import { p } from "../905/896627";
var a = r;
function d({
  error: e,
  currentValue: t,
  setValue: i
}) {
  if (!i) return !1;
  switch (e.key) {
    case "AUTHOR_IS_INVALID_COCREATOR":
      {
        let {
          author
        } = e.data;
        i(a()(t, author));
        return !0;
      }
    case "DUPLICATE_COCREATORS":
      {
        let {
          duplicateCocreators
        } = e.data;
        i(a()(t, ...duplicateCocreators));
        return !0;
      }
    case "INVALID_COCREATORS":
      {
        let {
          invalidCocreators
        } = e.data;
        i(a()(t, ...invalidCocreators));
        return !0;
      }
  }
  return !1;
}
export function $$c0(e) {
  p(e, d);
  let t = J(async () => await e.deps.allowedCocreatorsPromise, [e.deps.allowedCocreatorsPromise]);
  let i = useMemo(() => t.status === APILoadingStatus.SUCCESS ? t.value : [], [t]);
  return {
    ...e,
    validCocreators: i
  };
}
export const w = $$c0;