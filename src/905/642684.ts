import { isDevEnvironment } from "../figma_app/169182";
import { nl, b_ } from "../figma_app/257275";
let $$a2 = console.error;
let s = ["log", "error", "assert", "info", "warn", "clear"];
let o = {};
for (let e of s) o[e] = console[e];
let l = 0;
export function $$d1() {
  if (!(nl() || b_ || isDevEnvironment())) {
    if (0 === l) {
      console.clear();
      console.log("------- Clearing and silencing console.log from Figma -------");
      try {
        for (let e of s) console[e] = () => {};
      } catch (e) {
        console.log("unable to silence console");
      }
    }
    l++;
  }
}
export function $$c0() {
  if (!nl() && !b_ && 0 == --l) {
    try {
      for (let e of s) console[e] = o[e];
    } catch (e) {
      console.log("unable to restore console");
    }
    console.log("------- Restoring console.log functionality in Figma --------");
  }
}
export const AK = $$c0;
export const nB = $$d1;
export const yA = $$a2;