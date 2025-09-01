import { isProdCluster, isStagingCluster } from "../figma_app/169182";
export function $$r0() {
  let e = isProdCluster() ? "figma" : isStagingCluster() ? "figma-staging-123" : "";
  return Promise.resolve({
    installation: `https://github.com/apps/${e}/installations/select_target`,
    manage: `https://github.com/apps/${e}`
  });
}
export const l = $$r0;