import n from "../vendor/879378";
import { IpcStorageHandler } from "../905/724705";
import { W6 } from "../905/327522";
var r = n;
let $$o5 = new IpcStorageHandler();
let $$l2 = "restored-autosave";
let $$d0 = "Autosave Commit Changes";
let $$c4 = "autosave-new-files-update";
let $$u3 = "autosave-new-files-delete";
let $$p6 = "autosave-new-file-sync-start";
let $$m1 = r()(() => {
  try {
    $$o5.sendToAllTabs($$c4);
  } catch (e) {
    W6("Failed to notify all tabs of new files update", {
      error: e.message
    });
  }
}, 1e3);
export const Cr = $$d0;
export const HZ = $$m1;
export const a = $$l2;
export const c6 = $$u3;
export const ec = $$c4;
export const hp = $$o5;
export const m6 = $$p6;