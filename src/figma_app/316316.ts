import { jsx } from "react/jsx-runtime";
import { r } from "../905/808584";
import { E as _$$E } from "../905/730894";
import { N as _$$N } from "../905/201779";
import { x as _$$x } from "../905/433966";
import { r as _$$r } from "../905/857502";
import { M } from "../905/763508";
import { M as _$$M } from "../905/989861";
import { x as _$$x2 } from "../905/149501";
import { H } from "../905/203408";
import { D } from "../905/537702";
import { s as _$$s } from "../905/243629";
import { C as _$$C } from "../905/803937";
import { u as _$$u } from "../905/911813";
import { x as _$$x3 } from "../905/697290";
import { $ } from "../905/64245";
import { i as _$$i } from "../905/708784";
import { V } from "../905/106549";
import { P } from "../figma_app/237095";
import { R as _$$R } from "../905/309415";
import { i as _$$i2 } from "../figma_app/901786";
import { S as _$$S } from "../figma_app/674146";
import { V as _$$V } from "../1577/612419";
import { k } from "../figma_app/647906";
import { w as _$$w } from "../figma_app/912879";
import { r as _$$r2 } from "../figma_app/809090";
import { A as _$$A } from "../figma_app/121266";
import { s as _$$s2 } from "../figma_app/402269";
import { q } from "../figma_app/831881";
export function $$L0(e) {
  switch (e) {
    case "CLOSE_OVERLAY":
      return jsx(r, {});
    case "GO_BACK":
      return jsx(_$$E, {});
    case "NAVIGATE_TO":
    default:
      return jsx(_$$N, {});
    case "OPEN_OVERLAY":
      return jsx(_$$x, {});
    case "OPEN_URL":
      return jsx(_$$r, {});
    case "SCROLL_TO":
      return jsx(M, {});
    case "SWAP_WITH":
      return jsx(_$$M, {});
    case "SWAP_STATE_TO":
      return jsx(_$$x2, {});
    case "UPDATE_MEDIA_PLAY_PAUSE_OPTIONS":
    case "UPDATE_MEDIA_PLAY":
    case "UPDATE_MEDIA_PAUSE":
    case "UPDATE_MEDIA_TOGGLE_PLAY_PAUSE":
      return jsx(H, {});
    case "UPDATE_MEDIA_MUTE_UNMUTE_OPTIONS":
    case "UPDATE_MEDIA_MUTE":
    case "UPDATE_MEDIA_UNMUTE":
    case "UPDATE_MEDIA_TOGGLE_MUTE_UNMUTE":
      return jsx(D, {});
    case "UPDATE_MEDIA_SKIP_BY_OPTIONS":
    case "UPDATE_MEDIA_SKIP_FORWARD":
    case "UPDATE_MEDIA_SKIP_BACKWARD":
      return jsx(_$$s, {});
    case "UPDATE_MEDIA_SKIP_TO":
      return jsx(_$$C, {});
    case "SET_VARIABLE":
      return jsx(_$$u, {});
    case "SET_VARIABLE_MODE":
      return jsx(_$$x3, {});
    case "CONDITIONAL":
      return jsx($, {});
    case "NONE":
      return jsx(_$$i, {});
  }
}
export function $$P2(e) {
  switch (e) {
    case "NONE":
    default:
      return jsx(_$$i, {});
    case "ON_CLICK":
      return jsx(V, {});
    case "DRAG":
      return jsx(P, {});
    case "ON_HOVER":
      return jsx(_$$R, {});
    case "ON_PRESS":
      return jsx(_$$i2, {});
    case "ON_KEY_DOWN":
      return jsx(_$$S, {});
    case "MOUSE_ENTER":
      return jsx(_$$V, {});
    case "MOUSE_LEAVE":
      return jsx(k, {});
    case "MOUSE_DOWN":
      return jsx(_$$w, {});
    case "MOUSE_UP":
      return jsx(_$$r2, {});
    case "AFTER_TIMEOUT":
      return jsx(_$$A, {});
    case "ON_MEDIA_HIT":
      return jsx(_$$s2, {});
    case "ON_MEDIA_END":
      return jsx(q, {});
  }
}
export function $$D1(e) {
  return 1 === e.numSelected && !!e.numVideosSelected;
}
export const av = $$L0;
export const dq = $$D1;
export const e7 = $$P2;