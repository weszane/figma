import { Mz } from "../vendor/925040";
import { V0 } from "../figma_app/858344";
let $$a0 = e => e.selectedView;
let $$s1 = Mz($$a0, e => "workspace" === e.view && e.subView === V0.DIRECTORY ? e.workspaceId : void 0);
export const h = $$a0;
export const o = $$s1;