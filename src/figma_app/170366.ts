import { y } from '../905/27090';
import { k } from '../905/585266';
import { isVsCodeEnvironment } from '../905/858738';
import { desktopAPIInstance } from '../figma_app/876459';
let o = null;
export function $$l0() {
  o || (desktopAPIInstance && (o = new k()), isVsCodeEnvironment() && (o = new y()));
  return o;
}
export const M = $$l0;