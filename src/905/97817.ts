import { useMemoStable } from "../905/19536";
import { wq } from "../905/234821";
export function $$a0(e, t = !0) {
  let {
    data,
    status
  } = wq();
  return useMemoStable(() => {
    if ("loaded" === status) return t ? data.filter(t => t.comments[0]?.client_meta?.node_id === e) : data.filter(t => t.comments[0]?.client_meta?.node_id === e && t.comments.length > 0 && !t.comments[0].resolved_at);
  }, [data, e, status, t]);
}
export const x = $$a0;