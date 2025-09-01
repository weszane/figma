var $$n8;
var $$r0;
var $$a6;
var s;
var $$o4;
var $$l5;
let d;
let $$c7;
let u;
function p(e, t, i) {
  t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i;
  return e;
}
class m {
  constructor(e) {
    p(this, "handle", void 0);
    this.handle = e;
  }
}
class h extends m {
  constructor(e) {
    super(e);
    p(this, "handle", void 0);
    this.handle = e;
  }
}
class g {
  constructor(e) {
    p(this, "handle", void 0);
    this.handle = e;
  }
}
export class $$f3 extends g {
  getCopy() {
    return u.getCopy(this.handle);
  }
  set(e) {
    u.set(this.handle, e);
  }
  subscribeFromJs(e) {
    return u.subscribeFromJs(this.handle, e);
  }
  unsubscribeFromJs(e) {
    u.unsubscribeFromJs(this.handle, e);
  }
  constructor(e) {
    super(e);
    p(this, "handle", void 0);
    this.handle = e;
  }
}
export function $$_2(e) {
  d = e.HTMLWindowView_Internal;
  globalThis.HTMLWindowView = m;
  globalThis.MutableHTMLWindowView = h;
  $$c7 = e.HTMLWindow;
  u = e.WritableObservableValue_KeyboardLayout__Internal;
  globalThis.WritableObservableValue_KeyboardLayout_ = g;
  globalThis.MutableWritableObservableValue_KeyboardLayout_ = $$f3;
}
export function $$A1() {
  return {
    hTMLWindow: $$c7,
    hTMLWindowView_Internal: d,
    writableObservableValue_KeyboardLayout__Internal: u
  };
}
!function (e) {
  e[e.CUT = 0] = "CUT";
  e[e.COPY = 1] = "COPY";
  e[e.PASTE = 2] = "PASTE";
}($$n8 || ($$n8 = {}));
(function (e) {
  e[e.TEXT = 0] = "TEXT";
  e[e.KEY_PRESS = 1] = "KEY_PRESS";
  e[e.KEY_RELEASE = 2] = "KEY_RELEASE";
  e[e.MOUSE_MOVE = 3] = "MOUSE_MOVE";
  e[e.MOUSE_ENTER = 4] = "MOUSE_ENTER";
  e[e.MOUSE_LEAVE = 5] = "MOUSE_LEAVE";
  e[e.MOUSE_PRESS = 6] = "MOUSE_PRESS";
  e[e.MOUSE_DRAG = 7] = "MOUSE_DRAG";
  e[e.MOUSE_RELEASE = 8] = "MOUSE_RELEASE";
  e[e.MOUSE_WHEEL = 9] = "MOUSE_WHEEL";
  e[e.MOUSE_DROP = 10] = "MOUSE_DROP";
  e[e.MOUSE_ROTATE = 11] = "MOUSE_ROTATE";
  e[e.MOUSE_SCALE = 12] = "MOUSE_SCALE";
  e[e.MOUSE_SCALE_END = 13] = "MOUSE_SCALE_END";
  e[e.FOCUS_GAINED = 14] = "FOCUS_GAINED";
  e[e.FOCUS_LOST = 15] = "FOCUS_LOST";
  e[e.CLIPBOARD = 16] = "CLIPBOARD";
  e[e.MOUSE_MOVE_COALESCED = 17] = "MOUSE_MOVE_COALESCED";
  e[e.MOUSE_DRAG_COALESCED = 18] = "MOUSE_DRAG_COALESCED";
  e[e.CONTEXT_MENU_OPEN = 19] = "CONTEXT_MENU_OPEN";
  e[e.MOUSE_CANCEL = 20] = "MOUSE_CANCEL";
  e[e.APP_FOCUS_GAINED = 21] = "APP_FOCUS_GAINED";
  e[e.APP_FOCUS_LOST = 22] = "APP_FOCUS_LOST";
})($$r0 || ($$r0 = {}));
(function (e) {
  e[e.MOUSE = 0] = "MOUSE";
  e[e.TOUCH = 1] = "TOUCH";
  e[e.STYLUS = 2] = "STYLUS";
  e[e.TRACKPAD = 3] = "TRACKPAD";
})($$a6 || ($$a6 = {}));
(function (e) {
  e[e.MOBILE_NATIVE_NAVBAR = 0] = "MOBILE_NATIVE_NAVBAR";
})(s || (s = {}));
(function (e) {
  e[e.PREVIOUS = 0] = "PREVIOUS";
  e[e.NEXT = 1] = "NEXT";
})($$o4 || ($$o4 = {}));
(function (e) {
  e[e.UNKNOWN = 0] = "UNKNOWN";
  e[e.US_QWERTY = 1] = "US_QWERTY";
  e[e.DVORAK = 2] = "DVORAK";
  e[e.GERMAN = 3] = "GERMAN";
  e[e.FRENCH_AZERTY = 4] = "FRENCH_AZERTY";
  e[e.HIRAGANA_KANA = 5] = "HIRAGANA_KANA";
  e[e.UK_MAC = 6] = "UK_MAC";
  e[e.UK_PC = 7] = "UK_PC";
  e[e.SWEDISH = 8] = "SWEDISH";
  e[e.FINNISH = 9] = "FINNISH";
  e[e.DANISH = 10] = "DANISH";
  e[e.NORWEGIAN = 11] = "NORWEGIAN";
  e[e.ITALIAN = 12] = "ITALIAN";
  e[e.SPANISH = 13] = "SPANISH";
  e[e.SPANISH_LATAM = 14] = "SPANISH_LATAM";
  e[e.CHINESE = 15] = "CHINESE";
  e[e.PORTUGUESE = 16] = "PORTUGUESE";
  e[e.KOREAN = 17] = "KOREAN";
})($$l5 || ($$l5 = {}));
export const Bx = $$r0;
export const KO = $$A1;
export const LQ = $$_2;
export const Sr = $$f3;
export const YV = $$o4;
export const aT = $$l5;
export const gm = $$a6;
export const sd = $$c7;
export const zy = $$n8;