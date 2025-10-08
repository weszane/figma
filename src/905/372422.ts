import { useMemo, useRef, useEffect } from "react";
import { DesignWorkspace, Fullscreen, PrototypingTsApi } from "../figma_app/763686";
import { useNavigateToViewport } from "../905/104740";
import { setPropertiesPanelTab } from "../figma_app/741237";
import { useSceneGraphSelector } from "../figma_app/722362";
import { Y } from "../905/462154";
import { x } from "../905/628884";
export function $$c0({
  magicLinkOutput: e,
  aiTrackingContext: t
}) {
  let i = useNavigateToViewport();
  let {
    generatedInteractions
  } = e;
  let u = useMemo(() => generatedInteractions.map(e => e.id), [generatedInteractions]);
  let p = useRef(useSceneGraphSelector());
  useEffect(() => {
    setPropertiesPanelTab(DesignWorkspace.PROTOTYPE);
    i(Y(generatedInteractions.map(e => e.mapping), p.current));
    Fullscreen.selectNodesFromNoodles(u);
    PrototypingTsApi.setMagicLinkIsDone();
  }, [generatedInteractions, u, i]);
  return x({
    aiTrackingContext: t
  });
}
export const h = $$c0;