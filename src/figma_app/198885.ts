import { createSelector } from "../vendor/925040";
import { DUserRole } from "../figma_app/858344";
let $$a0 = e => e.selectedView;
let $$s1 = createSelector($$a0, e => "workspace" === e.view && e.subView === DUserRole.DIRECTORY ? e.workspaceId : void 0);
export const h = $$a0;
export const o = $$s1;