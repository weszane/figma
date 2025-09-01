import { D } from "../vendor/24766";
import { Wn } from "../vendor/693164";
import { Ey } from "../vendor/408361";
export function $$s0(e) {
  if (!e) return null;
  let t = D({
    nodes: [Ey],
    onError: () => {}
  });
  t.update(() => {
    Wn(e, []);
  }, {
    discrete: !0
  });
  return JSON.stringify(t.getEditorState().toJSON());
}
export const F = $$s0;