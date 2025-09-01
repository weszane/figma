import { Cx, x2, SI, of } from "../figma_app/714946";
export function $$r0(e, t, i, r) {
  t.dispatch(Cx({
    key: i
  }));
  e.then(() => {
    t.dispatch(x2({
      key: i
    }));
  }).catch(e => {
    r && t.dispatch(SI({
      key: i,
      reason: r(e) || null
    }));
    t.dispatch(of({
      key: i
    }));
  });
}
export const N = $$r0; 
