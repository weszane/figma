import { useMemo } from "react";
import { useSelector } from "react-redux";
import { TileType, TileUtils } from "../figma_app/543100";
import { ComFileType } from "../905/915030";
import { IT } from "../905/864644";
import { Q } from "../figma_app/787018";
import { k8 } from "../figma_app/448654";
export function $$c0(e, t = !0) {
  return function (e, t = !0) {
    return {
      files: IT(e.fileKeys || u, t),
      repos: k8(e.repoIds || u, t),
      prototypes: Q(e.prototypeIds || u, t)
    };
  }(useMemo(() => {
    let t = {
      fileKeys: [],
      repoIds: [],
      prototypeIds: []
    };
    e.forEach(e => {
      if (e.type === TileType.FILE) t.fileKeys.push(TileUtils.getId(e));else if (e.type === TileType.REPO) t.repoIds.push(TileUtils.getId(e));else if (e.type === TileType.PROTOTYPE) {
        let i = e.prototype.id;
        t.prototypeIds.push(i);
      }
    });
    return t;
  }, [e]), t);
}
let u = [];
export function $$p1({
  enabled: e = !0
} = {}) {
  let t = useSelector(e => e.tileSelect);
  let i = useMemo(() => [...Object.keys(t[ComFileType.FILES]), ...Object.keys(t[ComFileType.PINNED_FILES])], [t]);
  let a = useMemo(() => Object.keys(t[ComFileType.REPOS]), [t]);
  let c = useMemo(() => Object.keys(t[ComFileType.PROTOTYPES]).map(e => {
    if (!e.includes(",")) throw Error(`Expected prototype id ${e} to be a client-side generated id`);
    let [t, i, n] = e.split(",");
    return n;
  }), [t]);
  return {
    filePermissions: IT(i, e),
    repoPermissions: k8(a, e),
    protoPermissions: Q(c, e)
  };
}
export const Cm = $$c0;
export const xD = $$p1;