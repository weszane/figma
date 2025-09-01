import { o, p } from "../figma_app/516794";
import { useSprigWithSampling } from "../905/99656";
export let $$a1 = o();
export function $$s0() {
  let {
    Sprig
  } = useSprigWithSampling();
  p($$a1, () => {
    Sprig("track", "interactive_slide_element_inserted");
  });
  return null;
}
export const A = $$s0;
export const g = $$a1;