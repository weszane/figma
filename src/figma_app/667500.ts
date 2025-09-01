import { createContext, useContext } from "react";
import { assertNotNullish } from "../figma_app/95419";
let $$a0 = createContext({
  canGoBack: !1,
  canGoForward: !1,
  goBack: () => {},
  goForward: () => {}
});
let $$s1 = () => assertNotNullish(useContext($$a0), "Must be wrapped within <FileBrowserNavigationContext.Provider>");
export const C = $$a0;
export const Y = $$s1;