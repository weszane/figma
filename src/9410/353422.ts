import { useMemo } from "react";
import { useSelector } from "react-redux";
import { useMappedEditorTypeA } from "../905/808775";
import { selectCurrentFile } from "../figma_app/516028";
import { isWorkshopModeActive } from "../figma_app/193867";
import { FDocumentType } from "../905/862883";
export function $$d1() {
  let e = !!selectCurrentFile()?.org;
  let t = useSelector(e => isWorkshopModeActive(e.selectedView) && !e.user);
  return !!(e && !t);
}
export function $$c0(e, t = 20) {
  let i = $$p2(e);
  let a = useSelector(e => e.faceStamps);
  return useMemo(() => {
    let e = new Map();
    i.forEach(t => {
      e.set(t.id, t);
    });
    a.forEach(t => {
      e.set(t.id, t);
    });
    return Array.from(e.values()).slice(0, t);
  }, [t, i, a]);
}
let u = (e, t) => (e.name || "").toLowerCase().includes(t.toLowerCase()) || (e.handle || "").toLowerCase().includes(t.toLowerCase()) || (e.email || "").toLowerCase().split("@")[0].includes(t.toLowerCase());
export function $$p2(e) {
  let t = useSelector(e => e.recentlyUsed.faceStamps[FDocumentType.FigJam]);
  return useMemo(() => t.map(e => e.user).filter(t => !e || u(t, e)), [t, e]);
}
export function $$h3() {
  let e = useSelector(e => e.recentlyUsed.faceStamps);
  let t = $$d1();
  let i = useMappedEditorTypeA();
  return useMemo(() => i && t ? e.figjam.map(e => e.user) : [], [i, e, t]);
}
export const U5 = $$c0;
export const d0 = $$d1;
export const d2 = $$p2;
export const qK = $$h3;