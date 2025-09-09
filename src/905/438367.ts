import { useMemo } from "react";
import { useSelector } from "react-redux";
import { sortByWithOptions } from "../figma_app/656233";
import { VariableResolvedDataType, Fullscreen } from "../figma_app/763686";
import { resourceUtils } from "../905/989992";
import l from "../vendor/239910";
import { Ez } from "../figma_app/766708";
import { $ } from "../905/383708";
import { kiwiParserCodec } from "../905/294864";
import { Rb, yp, kf, u5 } from "../figma_app/852050";
import { tS } from "../figma_app/516028";
import { Bh, oz } from "../figma_app/936646";
import { ti, LX } from "../figma_app/646357";
import { XV } from "../905/405710";
import { EU, KV } from "../905/255097";
var d = l;
export function $$y2({
  subscribedLibraries: e
}) {
  let t = useSelector(e => e.library);
  let i = tS();
  let o = Rb().filter(e => e.resolvedType === VariableResolvedDataType.COLOR).length > 0;
  let l = ti(t.local.styles, "FILL").length > 0;
  return useMemo(() => {
    let t = [EU];
    return ((o || l) && t.push(KV), i) ? t.concat((() => {
      let t = e.filter(e => e.fileKey !== i);
      sortByWithOptions(t, e => e.fileName);
      return t.map(e => e.fileKey);
    })()) : t;
  }, [o, l, i, e]);
}
export function $$b0() {
  let e = useSelector(e => e.mirror.appModel.currentPage);
  let [t, i] = useMemo(() => {
    let t = function () {
      let e = Fullscreen.getColorsUsedOnCurrentPage();
      return e.length > 0 ? function (e) {
        if (null == e.styleSetType) return null;
        let t = {
          type: e.styleSetType,
          paints: []
        };
        if (null == e.nodeChanges) return t;
        for (let i of e.nodeChanges) i.name && i.fillPaints && t.paints.push({
          name: i.name,
          paint: i.fillPaints[0]
        });
        return t;
      }(kiwiParserCodec.decodeMessage(e)) : null;
    }();
    return [e, (t?.paints ?? []).map(e => ({
      type: "paint",
      stylePaint: e
    }))];
  }, [e]);
  return i;
}
export function $$v3() {
  let e = useSelector(e => e.library);
  let t = Rb();
  let i = useMemo(() => [...t].sort((e, t) => e.sortPosition < t.sortPosition ? -1 : 1), [t]);
  let a = yp();
  let o = useMemo(() => d()(a, e => e.node_id), [a]);
  let l = useMemo(() => i.filter(e => e.resolvedType === VariableResolvedDataType.COLOR).map(e => ({
    type: "variable",
    variable: e,
    variableCollection: o[e.variableSetId]
  })), [i, o]);
  let c = useMemo(() => {
    let t = [...ti(e.local.styles, "FILL")];
    LX(t);
    return t.filter(XV).map(e => ({
      type: "style",
      style: e
    }));
  }, [e.local.styles]);
  return useMemo(() => [...l, ...c], [l, c]);
}
export function $$I1(e) {
  let t = tS();
  let i = e !== EU && e !== KV;
  let r = kf(i ? e : null);
  let a = u5(i ? e : null);
  let l = useMemo(() => i ? {
    fileKey: e,
    libraryKey: $(e)
  } : null, [i, e]);
  let p = Bh(l);
  let y = useMemo(() => resourceUtils.from(p).transform(e => oz(e, "FILL")), [p]);
  return useMemo(() => {
    if (!i || !t) return resourceUtils.loaded([]);
    let e = resourceUtils.all([r, a]).transform(([e, t]) => {
      let i = d()(t, e => e.node_id);
      return [...e].filter(e => e.resolvedType === VariableResolvedDataType.COLOR).sort((e, t) => Ez(e.sortPosition, t.sortPosition)).map(e => ({
        type: "variable",
        variable: e,
        variableCollection: i[e.variableSetId]
      }));
    });
    let n = y.transform(e => {
      let t = [...e].filter(XV);
      LX(t);
      return t.map(e => ({
        type: "style",
        style: e
      }));
    });
    return resourceUtils.all([e, n]).transform(([e, t]) => [...e, ...t]);
  }, [i, t, r, a, y]);
}
export const UV = $$b0;
export const PC = $$I1;
export const bR = $$y2;
export const Do = $$v3;
