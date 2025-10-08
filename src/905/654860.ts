import { KeyCodes } from "../905/63728";
import { useDropdownState } from "../905/848862";
import { kz } from "../figma_app/171177";
import { useNavigationStack } from "../905/794154";
export function $$o0(e = !1) {
  let t = useDropdownState();
  let {
    isRoot,
    pop,
    autoClose
  } = useNavigationStack();
  kz(KeyCodes.ESCAPE, () => {
    t || (isRoot || e ? autoClose() : pop());
  }, !0);
}
export const z = $$o0;