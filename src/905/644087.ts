import { rVj } from "../figma_app/763686";
import { getI18nString } from "../905/303541";
import { _i, U8, E8 } from "../figma_app/800999";
export let $$s0 = new class {
  getDisplayStringFromKeyTrigger(e, t) {
    let i;
    let s = _i(t);
    if (e === rVj.KEYBOARD) return s ? getI18nString("proto.interaction.type.key_specific", {
      key_combo: U8(s)
    }) : getI18nString("proto.interaction.type.key_gamepad");
    switch (e) {
      case rVj.XBOX_ONE:
        i = "XBOX_ONE";
        break;
      case rVj.PS4:
        i = "PS4";
        break;
      case rVj.SWITCH_PRO:
        i = "SWITCH_PRO";
        break;
      case rVj.UNKNOWN_CONTROLLER:
      default:
        i = "UNKNOWN_CONTROLLER";
    }
    let o = E8({
      keyCodes: t,
      triggerDevice: i
    }, !0);
    return o ? getI18nString("proto.interaction.type.gamepad_specific", {
      key_combo: o
    }) : getI18nString("proto.interaction.type.key_gamepad");
  }
}();
export const u = $$s0;