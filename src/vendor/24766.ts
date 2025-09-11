import { createEditor } from "../vendor/408361";
export function createHeadlessEditor(e) {
  let r = createEditor(e);
  r._headless = !0;
  ["registerDecoratorListener", "registerRootListener", "registerMutationListener", "getRootElement", "setRootElement", "getElementByKey", "focus", "blur"].forEach(e => {
    r[e] = () => {
      throw Error(`${e} is not supported in headless mode`);
    };
  });
  return r;
}
export const D = createHeadlessEditor;
