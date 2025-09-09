import { setupResourceAtomHandler, getAtomMutate } from "../figma_app/566371";
import { iW, l_ } from "../1250/51387";
export function $$i1({
  libraryKey: e,
  repositoryId: t
}, n) {
  let [i] = setupResourceAtomHandler(iW({
    libraryKey: e,
    repositoryId: t
  }), {
    enabled: n?.enabled ?? !0
  });
  return {
    directories: i.data?.directories ?? [],
    hasLoaded: "loaded" === i.status,
    isLoading: "loading" === i.status,
    errors: i.errors
  };
}
export function $$o0() {
  return getAtomMutate(l_);
}
export const L = $$o0;
export const v = $$i1;