import { useMemo } from "react";
import r from "lodash-es/mapValues";
import { n as _$$n } from "../905/347702";
import { V, e as _$$e } from "../905/726668";
var a = r;
export let $$l1 = _$$n(function (e, {
  enabled: t = !0
} = {}) {
  let i = V(e, {
    enabled: t
  });
  return useMemo(() => i.transform(e => a()(e, e => e.name)), [i]);
});
export function $$d0(e, {
  enabled: t = !0
} = {}) {
  let i = _$$e(e, {
    enabled: t
  });
  return useMemo(() => i.transform(e => e?.name ?? null), [i]);
}
export const B = $$d0;
export const U = $$l1;
