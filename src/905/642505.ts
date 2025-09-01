import { k0, gX } from "../figma_app/623293";
export let $$r0 = null;
export function $$a1() {
  return k0(Fig.importShimURL).then(() => {
    $$r0 = window.createFileImporter(Fig.importWorkerURL);
  }).catch(e => {
    if (!(e instanceof gX)) throw e;
  });
}
export const F = $$r0;
export const h = $$a1; 
