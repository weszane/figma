import { ServiceCategories as _$$e } from "../905/165054";
import { reportError } from "../905/11";
import { L } from "../905/694400";
export function $$s0(e, t, i) {
  let [s] = t.useSyncedState(i, null);
  let [o, l] = t.useSyncedState(`resolved_${i}`, null);
  t.useEffect(() => {
    if (s && !o) {
      let t = L(s);
      if (t) try {
        let i = e.createImage(t).hash;
        l(i);
      } catch (e) {
        reportError(_$$e.FIGJAM, e);
        return;
      }
    }
  }, [s, o]);
  return o;
}
export const l = $$s0;