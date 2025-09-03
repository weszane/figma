import { throwTypeError } from "../figma_app/465776";
import { AD } from "../905/871411";
import { getFeatureFlags } from "../905/601108";
import { k as _$$k } from "../905/651849";
import { t as _$$t } from "../905/303541";
import { gl, hS, oV, _W } from "../905/216495";
import { ag, i5, f0 } from "../figma_app/975811";
export class $$c30 {
  constructor() {
    this.parse = e => e;
    this.format = e => e || "";
  }
}
export class $$u16 {
  constructor() {
    this.format = e => e ? e.replace(/_/g, " ").toLowerCase().replace(/^./g, e => e.toUpperCase()) : "";
  }
}
export class $$p26 {
  constructor() {
    this.format = e => {
      switch (e) {
        case "PASS_THROUGH":
          return _$$t("fullscreen.properties_panel.color_picker.blend_mode_select.pass_through");
        case "NORMAL":
          return _$$t("fullscreen.properties_panel.color_picker.blend_mode_select.normal");
        case "DARKEN":
          return _$$t("fullscreen.properties_panel.color_picker.blend_mode_select.darken");
        case "MULTIPLY":
          return _$$t("fullscreen.properties_panel.color_picker.blend_mode_select.multiply");
        case "LINEAR_BURN":
          return _$$t("fullscreen.properties_panel.color_picker.blend_mode_select.linear_burn");
        case "COLOR_BURN":
          return _$$t("fullscreen.properties_panel.color_picker.blend_mode_select.color_burn");
        case "LIGHTEN":
          return _$$t("fullscreen.properties_panel.color_picker.blend_mode_select.lighten");
        case "SCREEN":
          return _$$t("fullscreen.properties_panel.color_picker.blend_mode_select.screen");
        case "LINEAR_DODGE":
          return _$$t("fullscreen.properties_panel.color_picker.blend_mode_select.linear_dodge");
        case "COLOR_DODGE":
          return _$$t("fullscreen.properties_panel.color_picker.blend_mode_select.color_dodge");
        case "OVERLAY":
          return _$$t("fullscreen.properties_panel.color_picker.blend_mode_select.overlay");
        case "SOFT_LIGHT":
          return _$$t("fullscreen.properties_panel.color_picker.blend_mode_select.soft_light");
        case "HARD_LIGHT":
          return _$$t("fullscreen.properties_panel.color_picker.blend_mode_select.hard_light");
        case "DIFFERENCE":
          return _$$t("fullscreen.properties_panel.color_picker.blend_mode_select.difference");
        case "EXCLUSION":
          return _$$t("fullscreen.properties_panel.color_picker.blend_mode_select.exclusion");
        case "HUE":
          return _$$t("fullscreen.properties_panel.color_picker.blend_mode_select.hue");
        case "SATURATION":
          return _$$t("fullscreen.properties_panel.color_picker.blend_mode_select.saturation");
        case "COLOR":
          return _$$t("fullscreen.properties_panel.color_picker.blend_mode_select.color");
        case "LUMINOSITY":
          return _$$t("fullscreen.properties_panel.color_picker.blend_mode_select.luminosity");
        default:
          return "";
      }
    };
  }
}
export class $$_14 {
  constructor(e) {
    this.getPaint = e;
    this.format = e => {
      switch (e) {
        case "SOLID":
          return _$$t("fullscreen.properties_panel.solid");
        case "VIDEO":
          return _$$t("fullscreen.properties_panel.video");
        case "IMAGE":
          return null != this.getPaint().animatedImage ? _$$t("fullscreen.properties_panel.gif") : _$$t("fullscreen.properties_panel.image");
        case "GRADIENT_LINEAR":
          return _$$t("fullscreen.properties_panel.linear");
        case "GRADIENT_RADIAL":
          return _$$t("fullscreen.properties_panel.radial");
        case "GRADIENT_ANGULAR":
          return _$$t("fullscreen.properties_panel.angular");
        case "GRADIENT_DIAMOND":
          return _$$t("fullscreen.properties_panel.diamond");
        case "PATTERN":
          return _$$t("fullscreen.properties_panel.pattern");
        case "NOISE":
          return _$$t("fullscreen.properties_panel.noise");
        default:
          return "";
      }
    };
  }
}
export class $$h2 {
  constructor() {
    this.format = e => {
      switch (e) {
        case "FILL":
          return _$$t("fullscreen.properties_panel.image_scale.fill");
        case "FIT":
          return _$$t("fullscreen.properties_panel.image_scale.fit");
        case "STRETCH":
          return _$$t("fullscreen.properties_panel.image_scale.crop");
        case "TILE":
          return _$$t("fullscreen.properties_panel.image_scale.tile");
        default:
          return "";
      }
    };
  }
}
export class $$m25 {
  constructor() {
    this.format = e => {
      switch (e) {
        case "INNER_SHADOW":
          return _$$t("fullscreen.properties_panel.effects.inner_shadow");
        case "DROP_SHADOW":
          return _$$t("fullscreen.properties_panel.effects.drop_shadow");
        case "FOREGROUND_BLUR":
          return _$$t("fullscreen.properties_panel.effects.layer_blur");
        case "BACKGROUND_BLUR":
          return _$$t("fullscreen.properties_panel.effects.background_blur");
        case "REPEAT":
          return _$$t("fullscreen.properties_panel.transform_modifiers.repeat");
        case "SYMMETRY":
          return _$$t("fullscreen.properties_panel.transform_modifiers.symmetry");
        case "GRAIN":
          return _$$t("fullscreen.properties_panel.effects.texture");
        case "NOISE":
          return _$$t("fullscreen.properties_panel.effects.noise");
        case "GLASS":
          return _$$t("fullscreen.properties_panel.effects.glass");
        default:
          return "";
      }
    };
  }
}
export class $$g20 {
  constructor() {
    this.format = e => {
      switch (e) {
        case "REPEAT":
          return _$$t("fullscreen.properties_panel.transform_modifiers.repeat");
        case "SYMMETRY":
          return _$$t("fullscreen.properties_panel.transform_modifiers.symmetry");
        case "SKEW":
          return _$$t("fullscreen.properties_panel.transform_modifiers.skew");
        default:
          return "";
      }
    };
  }
}
export class $$f17 {
  constructor(e) {
    this.scene = e;
  }
  hasNameForNode(e) {
    return e === AD || null == e || !!this.scene.get(e);
  }
  format(e) {
    if (gl(e)) return _$$t("fullscreen.mixed");
    if (e === AD || null == e) return _$$t("proto.node_name_formatter.none");
    let t = this.scene.get(e);
    return t ? t.stateAbbreviatedName || t.name : _$$t("proto.node_name_formatter.missing");
  }
}
export function $$E8(e) {
  if (!hS(e.connectionType)) return oV;
  let t = _W(e.connectionType, "NONE");
  let r = _W(e.mediaAction, "PLAY");
  switch (t) {
    case "NONE":
      return "NONE";
    case "INTERNAL_NODE":
      if (!hS(e.navigationType)) return oV;
      switch (_W(e.navigationType, "NAVIGATE")) {
        case "NAVIGATE":
          return "NAVIGATE_TO";
        case "OVERLAY":
          return "OPEN_OVERLAY";
        case "SCROLL_TO":
          return "SCROLL_TO";
        case "SWAP":
          return "SWAP_WITH";
        case "SWAP_STATE":
          return "SWAP_STATE_TO";
      }
    case "BACK":
      return "GO_BACK";
    case "CLOSE":
      return "CLOSE_OVERLAY";
    case "URL":
      return "OPEN_URL";
    case "SET_VARIABLE":
      return "SET_VARIABLE";
    case "SET_VARIABLE_MODE":
      return "SET_VARIABLE_MODE";
    case "UPDATE_MEDIA_RUNTIME":
      switch (r) {
        case "PLAY":
          return "UPDATE_MEDIA_PLAY";
        case "PAUSE":
          return "UPDATE_MEDIA_PAUSE";
        case "TOGGLE_PLAY_PAUSE":
          return "UPDATE_MEDIA_TOGGLE_PLAY_PAUSE";
        case "MUTE":
          return "UPDATE_MEDIA_MUTE";
        case "UNMUTE":
          return "UPDATE_MEDIA_UNMUTE";
        case "TOGGLE_MUTE_UNMUTE":
          return "UPDATE_MEDIA_TOGGLE_MUTE_UNMUTE";
        case "SKIP_FORWARD":
          return "UPDATE_MEDIA_SKIP_FORWARD";
        case "SKIP_BACKWARD":
          return "UPDATE_MEDIA_SKIP_BACKWARD";
        case "SKIP_TO":
          return "UPDATE_MEDIA_SKIP_TO";
        case "SET_PLAYBACK_RATE":
          return "UPDATE_MEDIA_SET_PLAYBACK_RATE";
      }
    case "CONDITIONAL":
      return "CONDITIONAL";
    case "OBJECT_ANIMATION":
      return "OBJECT_ANIMATION";
  }
}
export function $$y15(e) {
  if ("UPDATE_MEDIA_RUNTIME" === e.connectionType) {
    if (gl(e.mediaAction)) return oV;
    switch (_W(e.mediaAction, "PLAY")) {
      case "PLAY":
      case "PAUSE":
      case "TOGGLE_PLAY_PAUSE":
        return "UPDATE_MEDIA_PLAY_PAUSE_OPTIONS";
      case "MUTE":
      case "UNMUTE":
      case "TOGGLE_MUTE_UNMUTE":
        return "UPDATE_MEDIA_MUTE_UNMUTE_OPTIONS";
      case "SKIP_FORWARD":
      case "SKIP_BACKWARD":
        return "UPDATE_MEDIA_SKIP_BY_OPTIONS";
      case "SKIP_TO":
        return "UPDATE_MEDIA_SKIP_TO";
    }
  }
  return $$E8(e);
}
export class $$b19 {
  constructor(e) {
    this.useNoneInsteadOfInstant = !1;
    this.format = e => {
      if (null == e) return "";
      switch (e) {
        case "INSTANT":
          return this.useNoneInsteadOfInstant ? _$$t("slides.properties_panel.slide_transition.option.none") : _$$t("proto.transition_behavior.instant");
        case "DISSOLVE":
          return _$$t("proto.transition_behavior.dissolve");
        case "PUSH":
          return _$$t("proto.transition_behavior.push");
        case "MOVE":
          return _$$t("proto.transition_behavior.move_in");
        case "MOVE_OUT":
          return _$$t("proto.transition_behavior.move_out");
        case "SLIDE":
          return _$$t("proto.transition_behavior.slide_in");
        case "SLIDE_OUT":
          return _$$t("proto.transition_behavior.slide_out");
        case "SMART_ANIMATE":
          return _$$t("proto.transition_behavior.smart_animate");
        case "SCROLL_ANIMATE":
          return _$$t("proto.transition_behavior.animate");
      }
      return "";
    };
    e && (this.useNoneInsteadOfInstant = e);
  }
}
export function $$T23(e) {
  if (!e) return "NONE";
  if ("URL" === e.connectionType) return "OPEN_URL";
  if ("BACK" === e.connectionType) return "GO_BACK";
  if ("CLOSE" === e.connectionType) return "CLOSE_OVERLAY";
  if ("INTERNAL_NODE" === e.connectionType) switch (e.navigationType) {
    case void 0:
    case null:
    case "NAVIGATE":
      return "NAVIGATE_TO";
    case "SCROLL_TO":
      return "SCROLL_TO";
    case "OVERLAY":
      return "OPEN_OVERLAY";
    case "SWAP":
      return "SWAP_WITH";
    case "SWAP_STATE":
      return "SWAP_STATE_TO";
  }
  if ("SET_VARIABLE" === e.connectionType) return "SET_VARIABLE";
  if ("SET_VARIABLE_MODE" === e.connectionType) return "SET_VARIABLE_MODE";
  if ("UPDATE_MEDIA_RUNTIME" === e.connectionType) switch (e.mediaAction) {
    case void 0:
    case "PLAY":
      return "UPDATE_MEDIA_PLAY";
    case "PAUSE":
      return "UPDATE_MEDIA_PAUSE";
    case "TOGGLE_PLAY_PAUSE":
      return "UPDATE_MEDIA_TOGGLE_PLAY_PAUSE";
    case "MUTE":
      return "UPDATE_MEDIA_MUTE";
    case "UNMUTE":
      return "UPDATE_MEDIA_UNMUTE";
    case "TOGGLE_MUTE_UNMUTE":
      return "UPDATE_MEDIA_TOGGLE_MUTE_UNMUTE";
    case "SKIP_FORWARD":
      return "UPDATE_MEDIA_SKIP_FORWARD";
    case "SKIP_BACKWARD":
      return "UPDATE_MEDIA_SKIP_BACKWARD";
    case "SKIP_TO":
      return "UPDATE_MEDIA_SKIP_TO";
  }
  return "CONDITIONAL" === e.connectionType ? "CONDITIONAL" : ("NONE" === e.connectionType || console.warn("Unknown connection type", e.connectionType), "NONE");
}
export class $$I21 {
  constructor(e, t) {
    this.isUI3 = !1;
    this.selectionIsComponentOrInstance = !1;
    this.isUI3 = !!e;
    this.selectionIsComponentOrInstance = !!t;
  }
  format(e) {
    switch (e) {
      case "NONE":
        return _$$t("proto.action_none");
      case "NAVIGATE_TO":
        return _$$t("proto.action_navigate_to");
      case "OPEN_OVERLAY":
        return _$$t("proto.action_open_overlay");
      case "SCROLL_TO":
        return _$$t("proto.action_scroll_to");
      case "SWAP_WITH":
        return _$$t("proto.action_swap_overlay");
      case "SWAP_STATE_TO":
        return _$$t("proto.action_change_to");
      case "GO_BACK":
        return _$$t("proto.action_back");
      case "CLOSE_OVERLAY":
        return _$$t("proto.action_close_overlay");
      case "OPEN_URL":
        return _$$t("proto.action_open_link");
      case "SET_VARIABLE":
        if (getFeatureFlags().ds_variable_props_proto && this.selectionIsComponentOrInstance) return _$$t("proto.action_set_variable_or_component_property");
        return _$$t("proto.action_set_variable");
      case "SET_VARIABLE_MODE":
        return _$$t("proto.action_set_variable_mode");
      case "UPDATE_MEDIA_PLAY":
        return _$$t("proto.action_update_media_play_only");
      case "UPDATE_MEDIA_PAUSE":
        return _$$t("proto.action_update_media_pause_only");
      case "UPDATE_MEDIA_TOGGLE_PLAY_PAUSE":
      case "UPDATE_MEDIA_TOGGLE_MUTE_UNMUTE":
        return _$$t("proto.action_update_media_toggle");
      case "UPDATE_MEDIA_MUTE":
        return _$$t("proto.action_update_media_mute_only");
      case "UPDATE_MEDIA_UNMUTE":
        return _$$t("proto.action_update_media_unmute_only");
      case "UPDATE_MEDIA_SKIP_FORWARD":
        return _$$t("proto.action_update_media_jump_forward");
      case "UPDATE_MEDIA_SKIP_BACKWARD":
        return _$$t("proto.action_update_media_jump_backward");
      case "UPDATE_MEDIA_SKIP_TO":
        return _$$t("proto.action_update_media_set_to_specific_time");
      case "UPDATE_MEDIA_PLAY_PAUSE_OPTIONS":
        return _$$t("proto.action_update_media_play_pause_video");
      case "UPDATE_MEDIA_MUTE_UNMUTE_OPTIONS":
        return _$$t("proto.action_update_media_mute_unmute_video");
      case "UPDATE_MEDIA_SKIP_BY_OPTIONS":
        return _$$t("proto.action_update_media_jump_forward_backward");
      case "CONDITIONAL":
        return this.isUI3 && !getFeatureFlags().exp_proto_rename_conditional ? _$$t("proto.action_check_if_else") : _$$t("proto.action_conditional");
      default:
        return "";
    }
  }
}
export class $$S13 {
  constructor(e, t) {
    this.isUI3 = !1;
    this.selectionIsComponentOrInstance = !1;
    this.isUI3 = !!e;
    this.selectionIsComponentOrInstance = !!t;
  }
  format(e) {
    switch (e) {
      case "NONE":
        return _$$t("proto.action_none");
      case "NAVIGATE_TO":
        return _$$t("proto.action_navigate_to");
      case "OPEN_OVERLAY":
        return _$$t("proto.action_open_overlay");
      case "SCROLL_TO":
        return _$$t("proto.action_scroll_to");
      case "SWAP_WITH":
        return _$$t("proto.action_swap_overlay");
      case "SWAP_STATE_TO":
        return _$$t("proto.action_change_to");
      case "GO_BACK":
        return _$$t("proto.action_back");
      case "CLOSE_OVERLAY":
        return _$$t("proto.action_close_overlay");
      case "OPEN_URL":
        return _$$t("proto.action_open_link");
      case "SET_VARIABLE":
        if (getFeatureFlags().ds_variable_props_proto && this.selectionIsComponentOrInstance) return _$$t("proto.action_set_variable_or_component_property");
        return _$$t("proto.action_set_variable");
      case "SET_VARIABLE_MODE":
        return _$$t("proto.action_set_variable_mode");
      case "UPDATE_MEDIA_PLAY":
        return _$$t("proto.action_update_media_play");
      case "UPDATE_MEDIA_PAUSE":
        return _$$t("proto.action_update_media_pause");
      case "UPDATE_MEDIA_TOGGLE_PLAY_PAUSE":
      case "UPDATE_MEDIA_TOGGLE_MUTE_UNMUTE":
        return _$$t("proto.action_update_media_toggle");
      case "UPDATE_MEDIA_MUTE":
        return _$$t("proto.action_update_media_mute");
      case "UPDATE_MEDIA_UNMUTE":
        return _$$t("proto.action_update_media_unmute");
      case "UPDATE_MEDIA_SKIP_FORWARD":
        return _$$t("proto.action_update_media_forward");
      case "UPDATE_MEDIA_SKIP_BACKWARD":
        return _$$t("proto.action_update_media_backward");
      case "UPDATE_MEDIA_SKIP_TO":
        return _$$t("proto.action_update_media_set_time");
      case "UPDATE_MEDIA_PLAY_PAUSE_OPTIONS":
        return _$$t("proto.action_update_media_play_pause");
      case "UPDATE_MEDIA_MUTE_UNMUTE_OPTIONS":
        return _$$t("proto.action_update_media_mute_unmute");
      case "UPDATE_MEDIA_SKIP_BY_OPTIONS":
        return _$$t("proto.action_update_media_jump_time");
      case "CONDITIONAL":
        return this.isUI3 && !getFeatureFlags().exp_proto_rename_conditional ? _$$t("proto.action_check_if_else") : _$$t("proto.action_conditional");
      default:
        return "";
    }
  }
}
export class $$v12 {
  constructor(e, t) {
    this.isUI3 = !1;
    this.selectionIsComponentOrInstance = !1;
    this.isUI3 = !!e;
    this.selectionIsComponentOrInstance = !!t;
  }
  format(e) {
    switch (e) {
      case "NONE":
        return _$$t("proto.action_none_interaction");
      case "NAVIGATE_TO":
        return _$$t("proto.action_navigate_to_interaction");
      case "OPEN_OVERLAY":
        return _$$t("proto.action_open_overlay_interaction");
      case "SCROLL_TO":
        return _$$t("proto.action_scroll_to_interaction");
      case "SWAP_WITH":
        return _$$t("proto.action_swap_overlay_interaction");
      case "SWAP_STATE_TO":
        return _$$t("proto.action_change_to_interaction");
      case "GO_BACK":
        return _$$t("proto.action_back_interaction");
      case "CLOSE_OVERLAY":
        return _$$t("proto.action_close_overlay_interaction");
      case "OPEN_URL":
        return _$$t("proto.action_open_link_interaction");
      case "SET_VARIABLE":
        if (getFeatureFlags().ds_variable_props_proto && this.selectionIsComponentOrInstance) return _$$t("proto.action_set_variable_or_property_interaction");
        return _$$t("proto.action_set_variable_interaction");
      case "SET_VARIABLE_MODE":
        return _$$t("proto.action_set_variable_mode_interaction");
      case "UPDATE_MEDIA_PLAY":
        return _$$t("proto.action_update_media_play_interaction");
      case "UPDATE_MEDIA_PAUSE":
        return _$$t("proto.action_update_media_pause_interaction");
      case "UPDATE_MEDIA_TOGGLE_PLAY_PAUSE":
      case "UPDATE_MEDIA_TOGGLE_MUTE_UNMUTE":
        return _$$t("proto.action_update_media_toggle_interaction");
      case "UPDATE_MEDIA_MUTE":
        return _$$t("proto.action_update_media_mute_interaction");
      case "UPDATE_MEDIA_UNMUTE":
        return _$$t("proto.action_update_media_unmute_interaction");
      case "UPDATE_MEDIA_SKIP_FORWARD":
        return _$$t("proto.action_update_media_forward_interaction");
      case "UPDATE_MEDIA_SKIP_BACKWARD":
        return _$$t("proto.action_update_media_backward_interaction");
      case "UPDATE_MEDIA_SKIP_TO":
        return _$$t("proto.action_update_media_set_time_interaction");
      case "UPDATE_MEDIA_PLAY_PAUSE_OPTIONS":
        return _$$t("proto.action_update_media_play_pause_interaction");
      case "UPDATE_MEDIA_MUTE_UNMUTE_OPTIONS":
        return _$$t("proto.action_update_media_mute_unmute_interaction");
      case "UPDATE_MEDIA_SKIP_BY_OPTIONS":
        return _$$t("proto.action_update_media_jump_time_interaction");
      case "CONDITIONAL":
        return this.isUI3 && !getFeatureFlags().exp_proto_rename_conditional ? _$$t("proto.action_check_if_else_interaction") : _$$t("proto.action_conditional_interaction");
      default:
        return "";
    }
  }
}
export class $$A27 {
  constructor() {
    this.oneHourInSeconds = 3600;
    this.secondsFormatter = new ag(i5.SECONDS, this.oneHourInSeconds);
    this.timestampFormatter = new f0(this.oneHourInSeconds, !0);
  }
  format(e) {
    if (!e || !hS(e)) return _$$t("proto.action_none");
    let t = hS(e.mediaSkipToTime) ? e.mediaSkipToTime ?? 0 : 0;
    let r = hS(e.mediaSkipByAmount) ? e.mediaSkipByAmount ?? 5 : 5;
    let n = this.secondsFormatter.format(r);
    let i = this.timestampFormatter.format(t);
    if ("UPDATE_MEDIA_RUNTIME" === e.connectionType) switch (e.mediaAction) {
      case "TOGGLE_PLAY_PAUSE":
        return _$$t("proto.action_update_media_play_pause");
      case "PLAY":
        return _$$t("proto.action_update_media_play");
      case "PAUSE":
        return _$$t("proto.action_update_media_pause");
      case "TOGGLE_MUTE_UNMUTE":
        return _$$t("proto.action_update_media_mute_unmute");
      case "MUTE":
        return _$$t("proto.action_update_media_mute");
      case "UNMUTE":
        return _$$t("proto.action_update_media_unmute");
      case "SKIP_FORWARD":
        return `${_$$t("proto.action_update_media_jump")} (+${n})`;
      case "SKIP_BACKWARD":
        return `${_$$t("proto.action_update_media_jump")} (-${n})`;
      case "SKIP_TO":
        return `${_$$t("proto.action_update_media_set")} (${i})`;
    }
    _$$k.error("You should not be using PrototypeVideoActionSidebarFormatter to format non-video actions!");
    return "";
  }
}
let x = () => _$$t("proto.interaction.type.mouse_enter_deprecated");
let N = () => _$$t("proto.interaction.type.mouse_leave_deprecated");
export class $$C11 {
  constructor() {
    this.format = e => {
      if (null == e) return _$$t("proto.interaction.type.none");
      switch (e) {
        case "NONE":
          return _$$t("proto.interaction.type.none");
        case "ON_CLICK":
          return _$$t("proto.interaction.type.on_click");
        case "ON_HOVER":
          return _$$t("proto.interaction.type.while_hovering");
        case "ON_PRESS":
          return _$$t("proto.interaction.type.while_pressing");
        case "DRAG":
          return _$$t("proto.interaction.type.on_drag");
        case "MOUSE_IN":
          return x();
        case "MOUSE_OUT":
          return N();
        case "MOUSE_ENTER":
          return _$$t("proto.interaction.type.mouse_enter");
        case "MOUSE_LEAVE":
          return _$$t("proto.interaction.type.mouse_leave");
        case "MOUSE_DOWN":
          return _$$t("proto.interaction.type.mouse_down");
        case "MOUSE_UP":
          return _$$t("proto.interaction.type.mouse_up");
        case "AFTER_TIMEOUT":
          return _$$t("proto.interaction.type.after_delay");
        case "ON_KEY_DOWN":
          return _$$t("proto.interaction.type.key_gamepad");
        case "ON_VOICE":
          return _$$t("proto.interaction.type.on_voice");
        case "ON_MEDIA_HIT":
          return _$$t("proto.interaction.type.when_video_hits");
        case "ON_MEDIA_END":
          return _$$t("proto.interaction.type.when_video_ends");
        default:
          throwTypeError(e);
      }
    };
  }
}
export class $$w3 {
  constructor() {
    this.format = e => {
      if (null == e) return _$$t("proto.interaction.type.none");
      switch (e) {
        case "NONE":
          return _$$t("proto.interaction.type.none");
        case "ON_CLICK":
          return _$$t("proto.interaction.type.on_tap");
        case "ON_HOVER":
          return _$$t("proto.interaction.type.while_hovering");
        case "ON_PRESS":
          return _$$t("proto.interaction.type.while_pressing");
        case "DRAG":
          return _$$t("proto.interaction.type.on_drag");
        case "MOUSE_IN":
          return x();
        case "MOUSE_OUT":
          return N();
        case "MOUSE_ENTER":
          return _$$t("proto.interaction.type.mouse_enter");
        case "MOUSE_LEAVE":
          return _$$t("proto.interaction.type.mouse_leave");
        case "MOUSE_DOWN":
          return _$$t("proto.interaction.type.touch_down");
        case "MOUSE_UP":
          return _$$t("proto.interaction.type.touch_up");
        case "AFTER_TIMEOUT":
          return _$$t("proto.interaction.type.after_delay");
        case "ON_KEY_DOWN":
          return _$$t("proto.interaction.type.key_gamepad");
        case "ON_VOICE":
          return _$$t("proto.interaction.type.on_voice");
        case "ON_MEDIA_HIT":
          return _$$t("proto.interaction.type.when_video_hits");
        case "ON_MEDIA_END":
          return _$$t("proto.interaction.type.when_video_ends");
        default:
          throwTypeError(e);
      }
    };
  }
}
export class $$O7 {
  constructor() {
    this.format = e => {
      if (null == e) return _$$t("proto.interaction.type.none");
      switch (e) {
        case "NONE":
          return _$$t("proto.interaction.type.none");
        case "ON_CLICK":
          return _$$t("proto.interaction.type.click");
        case "ON_HOVER":
          return _$$t("proto.interaction.type.hover");
        case "ON_PRESS":
          return _$$t("proto.interaction.type.press");
        case "DRAG":
          return _$$t("proto.interaction.type.drag");
        case "MOUSE_IN":
          return x();
        case "MOUSE_OUT":
          return N();
        case "MOUSE_ENTER":
          return _$$t("proto.interaction.type.mouse_enter");
        case "MOUSE_LEAVE":
          return _$$t("proto.interaction.type.mouse_leave");
        case "MOUSE_DOWN":
          return _$$t("proto.interaction.type.mouse_down");
        case "MOUSE_UP":
          return _$$t("proto.interaction.type.mouse_up");
        case "AFTER_TIMEOUT":
          return _$$t("proto.interaction.type.delay");
        case "ON_KEY_DOWN":
          return _$$t("proto.interaction.type.key");
        case "ON_VOICE":
          return _$$t("proto.interaction.type.voice");
        case "ON_MEDIA_HIT":
          return _$$t("proto.interaction.type.video_hits");
        case "ON_MEDIA_END":
          return _$$t("proto.interaction.type.video_ends");
        default:
          return throwTypeError(e);
      }
    };
  }
}
export class $$R4 {
  constructor() {
    this.format = e => {
      if (null == e) return _$$t("proto.interaction.type.none");
      switch (e) {
        case "NONE":
          return _$$t("proto.interaction.type.none");
        case "ON_CLICK":
          return _$$t("proto.interaction.type.tap");
        case "ON_HOVER":
          return _$$t("proto.interaction.type.hover");
        case "ON_PRESS":
          return _$$t("proto.interaction.type.press");
        case "DRAG":
          return _$$t("proto.interaction.type.drag");
        case "MOUSE_IN":
          return x();
        case "MOUSE_OUT":
          return N();
        case "MOUSE_ENTER":
          return _$$t("proto.interaction.type.mouse_enter");
        case "MOUSE_LEAVE":
          return _$$t("proto.interaction.type.mouse_leave");
        case "MOUSE_DOWN":
          return _$$t("proto.interaction.type.touch_down");
        case "MOUSE_UP":
          return _$$t("proto.interaction.type.touch_up");
        case "AFTER_TIMEOUT":
          return _$$t("proto.interaction.type.delay");
        case "ON_KEY_DOWN":
          return _$$t("proto.interaction.type.key");
        case "ON_VOICE":
          return _$$t("proto.interaction.type.voice");
        case "ON_MEDIA_HIT":
          return _$$t("proto.interaction.type.video_hits");
        case "ON_MEDIA_END":
          return _$$t("proto.interaction.type.video_ends");
        default:
          return throwTypeError(e);
      }
    };
  }
}
export class $$L1 {
  constructor() {
    this.format = e => {
      switch (e) {
        case "CENTER":
          return _$$t("proto.overlay_position_centered");
        case "TOP_LEFT":
          return _$$t("proto.overlay_position_top_left");
        case "TOP_CENTER":
          return _$$t("proto.overlay_position_top_center");
        case "TOP_RIGHT":
          return _$$t("proto.overlay_position_top_right");
        case "BOTTOM_LEFT":
          return _$$t("proto.overlay_position_bottom_left");
        case "BOTTOM_CENTER":
          return _$$t("proto.overlay_position_bottom_center");
        case "BOTTOM_RIGHT":
          return _$$t("proto.overlay_position_bottom_right");
        case "MANUAL":
          return _$$t("proto.overlay_position_manual");
        default:
          return "";
      }
    };
  }
}
export class $$P6 {
  constructor() {
    this.format = e => {
      switch (e) {
        case "SQUARE":
          return _$$t("whiteboard.shapes.square");
        case "ROUNDED_RECTANGLE":
          return _$$t("whiteboard.shapes.rounded_rectangle");
        case "DIAMOND":
          return _$$t("whiteboard.shapes.diamond");
        case "ELLIPSE":
          return _$$t("whiteboard.shapes.ellipse");
        case "TRIANGLE_UP":
          return _$$t("whiteboard.shapes.triangle");
        case "TRIANGLE_DOWN":
          return _$$t("whiteboard.shapes.downward_pointing_triangle");
        case "PARALLELOGRAM_LEFT":
          return _$$t("whiteboard.shapes.left_leaning_parallelogram");
        case "PARALLELOGRAM_RIGHT":
          return _$$t("whiteboard.shapes.right_leaning_parallelogram");
        case "ENG_DATABASE":
          return _$$t("whiteboard.shapes.cylinder");
        case "ENG_QUEUE":
          return _$$t("whiteboard.shapes.horizontal_cylinder");
        case "ENG_FILE":
          return _$$t("whiteboard.shapes.file");
        case "ENG_FOLDER":
          return _$$t("whiteboard.shapes.folder");
        case "TRAPEZOID":
          return _$$t("whiteboard.shapes.trapezoid");
        case "STAR":
          return _$$t("whiteboard.shapes.star");
        case "SHIELD":
          return _$$t("whiteboard.shapes.shield");
        case "HEXAGON":
          return _$$t("whiteboard.shapes.hexagon");
        case "PENTAGON":
          return _$$t("whiteboard.shapes.pentagon");
        case "OCTAGON":
          return _$$t("whiteboard.shapes.octagon");
        case "PLUS":
          return _$$t("whiteboard.shapes.plus");
        case "PREDEFINED_PROCESS":
          return _$$t("whiteboard.shapes.predefined_process");
        case "MANUAL_INPUT":
          return _$$t("whiteboard.shapes.manual_input");
        case "CHEVRON":
          return _$$t("whiteboard.shapes.chevron");
        case "DOCUMENT_SINGLE":
          return _$$t("whiteboard.shapes.document_single");
        case "DOCUMENT_MULTIPLE":
          return _$$t("whiteboard.shapes.document_multiple");
        case "ARROW_LEFT":
          return _$$t("whiteboard.shapes.arrow_left");
        case "ARROW_RIGHT":
          return _$$t("whiteboard.shapes.arrow_right");
        case "SUMMING_JUNCTION":
          return _$$t("whiteboard.shapes.summing_junction");
        case "OR":
          return _$$t("whiteboard.shapes.or");
        case "SPEECH_BUBBLE":
          return _$$t("whiteboard.shapes.speech_bubble");
        case "INTERNAL_STORAGE":
          return _$$t("whiteboard.shapes.internal_storage");
        case "MINDMAP_TREE_NUCLEUS":
          return _$$t("whiteboard.shapes.mindmap");
        default:
          return "";
      }
    };
  }
}
export class $$$$D22 {
  constructor() {
    this.format = e => {
      switch (e) {
        case "BASIC":
          return _$$t("whiteboard.shape_collection_type.basic");
        case "DIAGRAMMING":
          return _$$t("whiteboard.shape_collection_type.flowchart");
        case "MISC":
          return _$$t("whiteboard.shape_collection_type.misc");
        default:
          return throwTypeError(e);
      }
    };
  }
}
export class $$k0 {
  constructor() {
    this.format = e => {
      switch (e) {
        case "STRAIGHT":
          return _$$t("whiteboard.delightful_toolbar.connector");
        case "ELBOWED":
          return _$$t("whiteboard.shapes_sidebar.bent_connector");
        case "CURVED":
          return _$$t("whiteboard.shapes_sidebar.curved_connector");
        case "STRAIGHT_NO_ENDPOINTS":
          return _$$t("whiteboard.shapes_sidebar.connector_no_endpoints");
        default:
          return throwTypeError(e);
      }
    };
  }
}
export class $$M10 {
  constructor() {
    this.format = e => {
      switch (e) {
        case "PASS_THROUGH":
          return _$$t("fullscreen.properties_panel.blend_mode.pass_through");
        case "NORMAL":
          return _$$t("fullscreen.properties_panel.blend_mode.normal");
        case "DARKEN":
          return _$$t("fullscreen.properties_panel.blend_mode.darken");
        case "MULTIPLY":
          return _$$t("fullscreen.properties_panel.blend_mode.multiply");
        case "LINEAR_BURN":
          return _$$t("fullscreen.properties_panel.blend_mode.linear_burn");
        case "COLOR_BURN":
          return _$$t("fullscreen.properties_panel.blend_mode.color_burn");
        case "LIGHTEN":
          return _$$t("fullscreen.properties_panel.blend_mode.lighten");
        case "SCREEN":
          return _$$t("fullscreen.properties_panel.blend_mode.screen");
        case "LINEAR_DODGE":
          return _$$t("fullscreen.properties_panel.blend_mode.linear_dodge");
        case "COLOR_DODGE":
          return _$$t("fullscreen.properties_panel.blend_mode.color_dodge");
        case "OVERLAY":
          return _$$t("fullscreen.properties_panel.blend_mode.overlay");
        case "SOFT_LIGHT":
          return _$$t("fullscreen.properties_panel.blend_mode.soft_light");
        case "HARD_LIGHT":
          return _$$t("fullscreen.properties_panel.blend_mode.hard_light");
        case "DIFFERENCE":
          return _$$t("fullscreen.properties_panel.blend_mode.difference");
        case "EXCLUSION":
          return _$$t("fullscreen.properties_panel.blend_mode.exclusion");
        case "HUE":
          return _$$t("fullscreen.properties_panel.blend_mode.hue");
        case "SATURATION":
          return _$$t("fullscreen.properties_panel.blend_mode.saturation");
        case "COLOR":
          return _$$t("fullscreen.properties_panel.blend_mode.color");
        case "LUMINOSITY":
          return _$$t("fullscreen.properties_panel.blend_mode.luminosity");
      }
    };
  }
}
let $$F5 = {
  format(e) {
    switch (e) {
      case "SCROLLS":
        return _$$t("proto.scroll_panel.position_dropdown.scroll_with_parent");
      case "FIXED_WHEN_CHILD_OF_SCROLLING_FRAME":
        return _$$t("proto.scroll_panel.position_dropdown.fixed_stay_in_place");
      case "STICKY_SCROLLS":
        return _$$t("proto.scroll_panel.position_dropdown.sticky_stop_at_top_edge");
    }
  }
};
let $$j29 = {
  format(e) {
    switch (e) {
      case "SCROLLS":
        return _$$t("proto.scroll_panel.position_dropdown.scroll_with_parent");
      case "FIXED_WHEN_CHILD_OF_SCROLLING_FRAME":
        return _$$t("proto.scroll_panel.position_dropdown.fixed");
      case "STICKY_SCROLLS":
        return _$$t("proto.scroll_panel.position_dropdown.sticky");
    }
  }
};
let $$U9 = {
  format(e) {
    switch (e) {
      case "NONE":
        return _$$t("proto.scroll_panel.overflow_dropdown.no_scrolling");
      case "HORIZONTAL":
        return _$$t("proto.scroll_panel.overflow_dropdown.horizontal");
      case "VERTICAL":
        return _$$t("proto.scroll_panel.overflow_dropdown.vertical");
      case "BOTH":
        return _$$t("proto.scroll_panel.overflow_dropdown.both_directions");
    }
  }
};
let $$B18 = {
  format(e) {
    switch (e) {
      case "RELATIVE":
        return _$$t("sites.panel.position_panel.relative");
      case "ABSOLUTE":
        return _$$t("sites.panel.position_panel.absolute");
      case "FIXED":
        return _$$t("sites.panel.position_panel.fixed");
      case "STICKY":
        return _$$t("sites.panel.position_panel.sticky");
    }
  }
};
let $$G28 = {
  format(e) {
    switch (e) {
      case "PAGE_LOAD":
        return _$$t("sites.panel.interactions_panel.page_load");
      case "THIS_LAYER_IN_VIEW":
        return _$$t("sites.panel.interactions_panel.this_layer_in_view");
      case "OTHER_LAYER_IN_VIEW":
        return _$$t("sites.panel.interactions_panel.other_layer_in_view");
      case "SCROLL_DIRECTION":
        return _$$t("sites.panel.interactions_panel.scroll_direction");
      case "PAGE_HEIGHT":
        return _$$t("sites.panel.interactions_panel.on_scroll");
    }
  }
};
export class $$V24 {
  constructor() {
    this.format = (e, t) => {
      switch (e) {
        case "HORIZONTAL":
          if (t) return _$$t("inspect_panel.properties.flow.horizontal_wrap");
          return _$$t("inspect_panel.properties.flow.horizontal");
        case "VERTICAL":
          return _$$t("inspect_panel.properties.flow.vertical");
        case "GRID":
          return _$$t("inspect_panel.properties.flow.grid");
        default:
          return "";
      }
    };
  }
}
export const AW = $$k0;
export const Cr = $$L1;
export const D = $$h2;
export const EX = $$w3;
export const Eq = $$R4;
export const Ge = $$F5;
export const J = $$P6;
export const JV = $$O7;
export const Od = $$E8;
export const Rk = $$U9;
export const SU = $$M10;
export const VG = $$C11;
export const Xi = $$v12;
export const Z6 = $$S13;
export const ZB = $$_14;
export const _X = $$y15;
export const _r = $$u16;
export const cP = $$f17;
export const dg = $$B18;
export const el = $$b19;
export const ey = $$g20;
export const js = $$I21;
export const kv = $$$$D22;
export const mj = $$T23;
export const oc = $$V24;
export const qj = $$m25;
export const ro = $$p26;
export const sX = $$A27;
export const vX = $$G28;
export const wi = $$j29;
export const yt = $$c30;