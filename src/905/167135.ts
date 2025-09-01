import { getInitialOptions } from "../figma_app/169182";
import { serializeQuery } from "../905/634134";
export function $$a0(e) {
  return (getInitialOptions().cluster_name ?? "") === "staging" ? `https://cors-image-proxy.staging.figma.com?${serializeQuery({
    url: e
  })}` : `https://cors-image-proxy.figma.com?${serializeQuery({
    url: e
  })}`;
}
export const p = $$a0;