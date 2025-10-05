import { useMemo } from "react";
import { isNotNullish } from "../figma_app/95419";
import { createLoadedState, createLoadingState } from "../905/723791";
import { Fl } from "../figma_app/236178";
import { useHasResourcePresetKey } from "../figma_app/255679";
import { useOpenFileLibraryKey } from "../figma_app/516028";
import { useSubscribedLibraries } from "../figma_app/155728";
import { Nh, mb } from "../figma_app/188908";
import { useSiteKitAssets } from "../figma_app/177636";
import { filterLibrariesBySharingGroups } from "../905/825399";
import { lY } from "../905/939482";
import { x as _$$x } from "../905/453561";
export function $$$$g0({
  includeEmptyLibraries: e
} = {}) {
  let t = useOpenFileLibraryKey();
  let i = useSubscribedLibraries();
  let f = useHasResourcePresetKey();
  let _ = function () {
    let e = lY();
    let t = useMemo(() => e.map(e => _$$x(e)).filter(isNotNullish), [e]);
    return useMemo(() => {
      let e = new Map();
      t.forEach(t => e.set(t.libraryKey, t));
      return e;
    }, [t]);
  }();
  let A = useMemo(() => i.data ? i.data.map(t => Nh(t, {
    includeEmptyLibraries: e
  })).filter(isNotNullish) : [], [i.data, e]);
  let y = Fl();
  let b = useSiteKitAssets();
  let v = b.data?.libraries ?? null;
  let I = useMemo(() => "loaded" === b.status ? createLoadedState(b.data?.libraries) : "loading" === b.status ? createLoadingState() : {
    status: "disabled",
    errors: null,
    data: null
  }, [b.data?.libraries, b.status]);
  let E = useMemo(() => A.map(e => ({
    ...e,
    library_key: e.libraryKey
  })), [A]);
  let x = filterLibrariesBySharingGroups(E);
  return useMemo(() => {
    let e = [];
    let i = [];
    let n = new Map();
    A.forEach(r => {
      n.set(r.libraryKey, r);
      x.some(e => e.libraryKey === r.libraryKey) || (f(r.libraryKey) ? i.push(r) : r.libraryKey !== t && e.push(r));
    });
    let r = mb(e, y);
    let a = mb(i);
    let s = mb(x);
    if (v) for (let e of v) n.set(e.libraryKey, e);
    for (let e of _.values()) n.set(e.libraryKey, e);
    return {
      libraries: r,
      presets: a,
      librariesForConnectedProject: s,
      siteLibraries: I,
      allLibrariesByLibraryKey: n
    };
  }, [A, y, f, t, _, v, I, x]);
}
export const g = $$$$g0;