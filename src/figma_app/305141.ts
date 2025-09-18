import { useCallback } from "react";
import { Fullscreen } from "../figma_app/763686";
import { permissionScopeHandler } from "../905/189185";
import { useDebouncedCallback } from "use-debounce";
import { Z } from "../905/521211";
import { useDeepEqualSceneValue } from "../figma_app/167249";
import { OG } from "../figma_app/876589";
export function $$c0() {
  let e = Z();
  let {
    guid,
    title
  } = useDeepEqualSceneValue(e => {
    let t = e.getCurrentPage();
    let r = t?.responsiveSetSettings;
    return {
      guid: t?.guid,
      title: r?.title
    };
  });
  return {
    title,
    placeholder: e,
    updateTitle: $$u1({
      guid: guid ?? "0:1",
      isSite: !0
    })
  };
}
export function $$u1({
  guid: e,
  isSite: t
}) {
  let r = OG(t ? "title" : "page_title");
  let o = useDebouncedCallback(t => {
    permissionScopeHandler.user("set-responsive-set-settings", () => {
      Fullscreen?.setResponsiveSetSettings({
        title: t.trim()
      }, [e]);
    });
  }, 500);
  return useCallback(e => (o(e), r(), o.flush), [r, o]);
}
export const t = $$c0;
export const z = $$u1;