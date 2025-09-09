import { useSelector } from "react-redux";
export let $$r0 = function () {
  let e = useSelector(e => e.mirror.sceneGraph);
  let t = Object.keys(useSelector(e => e.mirror.sceneGraphSelection)).map(t => e.get(t));
  return t.length && t.every(e => e?.type === "INSTANCE");
};
export const A = $$r0;
