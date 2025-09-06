import { HapticType } from "../905/380844";
import { JA } from "../figma_app/763686";
import { desktopAPIInstance } from "../figma_app/876459";
export let $$s0 = {
  trigger(e) {
    if (desktopAPIInstance) switch (e) {
      case JA.GENERIC:
        desktopAPIInstance.triggerHaptic(HapticType.GENERIC, 1, 0);
        break;
      case JA.LEVEL:
        desktopAPIInstance.triggerHaptic(HapticType.LEVEL, 1, 0);
        break;
      case JA.SNAP:
        desktopAPIInstance.triggerHaptic(HapticType.SNAP, 1, 0);
        break;
      default:
        throw Error(e);
    }
  }
};
export const H = $$s0;