import { useMemo } from "react";
import { useSubscription } from "../figma_app/288654";
import { L8 } from "../905/182534";
import { FileBrowserSearchBarData } from "../figma_app/43951";
import { MAX_ITEMS } from "../figma_app/162807";
export function $$l0(e) {
  let t = useSubscription(FileBrowserSearchBarData, {
    currentOrgId: e
  });
  let i = useMemo(() => "loaded" !== t.status ? [] : L8(t.data, MAX_ITEMS), [t]);
  return {
    status: t.status,
    searches: i
  };
}
export const S = $$l0;