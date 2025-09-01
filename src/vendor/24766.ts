import { ie } from "../vendor/408361";
export function $$s0(e) {
  let r = ie(e);
  r._headless = !0;
  ["registerDecoratorListener", "registerRootListener", "registerMutationListener", "getRootElement", "setRootElement", "getElementByKey", "focus", "blur"].forEach(e => {
    r[e] = () => {
      throw Error(`${e} is not supported in headless mode`);
    };
  });
  return r;
}
export const D = $$s0;