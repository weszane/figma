import { mL } from "../figma_app/661371";
import { XHR } from "../905/910117";
import { BC, A9 } from "../905/784363";
import { l as _$$l } from "../905/412815";
export async function $$o0(e, t = "", i = "", l, d = !1) {
  d && (await _$$l());
  let {
    data: {
      meta
    }
  } = await XHR.post(`/api/multiplayer/${e}/create_savepoint`, {
    label: t,
    description: i
  });
  l(BC({
    history: {
      versions: [meta]
    },
    direction: mL
  }));
  l(A9({
    status: !1
  }));
  return meta;
}
export async function $$l1(e, t = "", i = "", n, r = !1) {
  return null != e ? await $$o0(e, t, i, n, r) : null;
}
export const J = $$o0;
export const m = $$l1;