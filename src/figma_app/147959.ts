import { HapticType } from "../905/380844";
import { JA } from "../figma_app/763686";
import { eD } from "../figma_app/876459";
export let $$s0 = {
  trigger(e) {
    if (eD) switch (e) {
      case JA.GENERIC:
        eD.triggerHaptic(HapticType.GENERIC, 1, 0);
        break;
      case JA.LEVEL:
        eD.triggerHaptic(HapticType.LEVEL, 1, 0);
        break;
      case JA.SNAP:
        eD.triggerHaptic(HapticType.SNAP, 1, 0);
        break;
      default:
        throw Error(e);
    }
  }
};
export const H = $$s0;