import { useMemo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isNotNullish } from "../figma_app/95419";
import { n as _$$n } from "../905/64411";
import { lY } from "../905/939482";
import { Mb } from "../figma_app/646357";
import { D2, VP } from "../905/18797";
import { x } from "../905/453561";
import { g } from "../905/505662";
export function $$p0({
  otherLibraryKeys: e,
  disabled: t = !1
} = {}) {
  let i = useDispatch();
  let m = useSelector(e => e.loadingState);
  let {
    libraries,
    presets,
    librariesForConnectedProject
  } = g({
    includeEmptyLibraries: !0
  });
  let _ = lY();
  let A = useMemo(() => _.map(e => x(e)).filter(isNotNullish), [_]);
  let y = useMemo(() => {
    let t = [...libraries, ...presets, ...A, ...librariesForConnectedProject].map(e => e.libraryKey);
    e?.forEach(e => {
      t.includes(e) || t.push(e);
    });
    return t;
  }, [libraries, presets, A, librariesForConnectedProject, e]);
  useEffect(() => {
    if (0 === y.length || t) return;
    let e = 0;
    for (let t of y) {
      if (e >= 5) break;
      let n = Mb(t);
      !D2(m, n) && (e += 1, VP(m, n) || i(_$$n({
        libraryKey: t,
        includeThumbnail: !0,
        includeRealtime: !0
      })));
    }
  }, [i, m, t, y]);
}
export const K = $$p0;
