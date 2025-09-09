import { useMemo } from "react";
import { Rs } from "../figma_app/288654";
import { L8 } from "../905/182534";
import { FileBrowserSearchBarData } from "../figma_app/43951";
import { Rz } from "../figma_app/162807";
export function $$l0(e) {
  let t = Rs(FileBrowserSearchBarData, {
    currentOrgId: e
  });
  let i = useMemo(() => "loaded" !== t.status ? [] : L8(t.data, Rz), [t]);
  return {
    status: t.status,
    searches: i
  };
}
export const S = $$l0;