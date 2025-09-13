import { useMemo } from "react";
import { parsePxInt } from "../figma_app/783094";
import { KeyCodes } from "../905/63728";
import { rDe } from "../figma_app/27776";
let o = parsePxInt(rDe);
KeyCodes.UP_ARROW;
KeyCodes.DOWN_ARROW;
KeyCodes.LEFT_ARROW;
KeyCodes.RIGHT_ARROW;
KeyCodes.ESCAPE;
KeyCodes.I;
export var $$l5 = (e => (e.FILE = "file", e.RECENT = "recent", e.PREFERRED = "preferred", e))($$l5 || {});
export function $$d4(e) {
  switch (e.type) {
    case "file":
      return e.libraryKey;
    case "recent":
      return "recent";
    case "preferred":
      return "preferred";
  }
}
export function $$c2(e, t) {
  switch (e.type) {
    case "file":
      if (t && e.libraryKey === t) return "local";
      return "subscribed";
    case "recent":
      return "recents";
    case "preferred":
      return "preferred";
  }
}
export var $$u3 = (e => (e[e.INSTANCE_SWAP_PICKER = 0] = "INSTANCE_SWAP_PICKER", e[e.RESOURCE_INSERT_MODAL = 1] = "RESOURCE_INSERT_MODAL", e[e.PREFERRED_VALUES_PICKER = 2] = "PREFERRED_VALUES_PICKER", e))($$u3 || {});
export function $$p1(e) {
  return "drilldown-picker-select-" + e;
}
export function $$m0(e) {
  return useMemo(() => 1 === e ? {
    modalWidth: o,
    numColsForSmall: 6,
    numColsForNormal: 3
  } : {
    modalWidth: 240,
    numColsForSmall: 4,
    numColsForNormal: 2
  }, [e]);
}
export const TQ = $$m0;
export const YU = $$p1;
export const Z4 = $$c2;
export const Zl = $$u3;
export const ez = $$d4;
export const iN = $$l5;