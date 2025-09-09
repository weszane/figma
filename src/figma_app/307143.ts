import { useEffect } from "react";
import { useSelector } from "react-redux";
import { I7 } from "../figma_app/594947";
import { q5 } from "../figma_app/516028";
import { wA } from "../figma_app/336853";
function l() {
  let e = useSelector(e => wA(e));
  let t = q5();
  return {
    currentOrg: e,
    currentTeam: t?.team ?? null,
    currentFile: t
  };
}
export function $$$$d1() {
  let {
    currentOrg,
    currentTeam,
    currentFile
  } = l();
  let i = I7("exp_aa_test_teamid_fullscreen_menu");
  useEffect(() => {
    !currentOrg && currentTeam && currentFile && "design" === currentFile.editorType && i.getConfig();
  }, [currentOrg, currentTeam, currentFile, i]);
}
export function $$c0({
  file: e
}) {
  let {
    currentOrg,
    currentTeam
  } = l();
  useEffect(() => {
    if (currentOrg || !currentTeam || e?.editorType !== "design") return;
  }, [currentOrg, currentTeam, e]);
}
export const d = $$c0;
export const n = $$$$d1;
