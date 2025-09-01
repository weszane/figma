import { W } from "../905/187396";
import { Uz } from "../905/63728";
import { rr } from "../figma_app/778880";
import { bG } from "../905/149328";
import { e } from "../905/361125";
let l = class e {
  constructor(t, r) {
    this._isUIShown = t;
    this._inCommentsMode = !1;
    this._rcsUserFlags = [];
    this._hideUITask = new W();
    this.handleProgressBarStoppedShowing = () => {
      this.showUiAndScheduleFade();
    };
    this.onWindowFocus = () => {
      this.showUiAndScheduleFade();
    };
    this.didEnterCommentsMode = () => {
      this._hideUITask.reset();
      this._setUIShown(!0);
      this._inCommentsMode = !0;
    };
    this.didLeaveCommentsMode = () => {
      this._inCommentsMode && (this._inCommentsMode = !1, this.showUiAndScheduleFade());
    };
    this.didRscUserFlagsUpdate = e => {
      this._rcsUserFlags = e;
    };
    this.handleUnhideUI = () => {
      this.showUiAndScheduleFade();
    };
    this.handlePageMouseDownOrTouchStart = e => {
      "CURRENT_TLF" === e.type || "DEVICE_FRAME" === e.type ? this._setUIShown(!1) : "PROTOTYPE_BACKGROUND" === e.type && (this._hideUITask.reset(), this._isUIShown() ? this._setUIShown(!1) : this.showUiAndScheduleFade());
    };
    this.handleHotspotClicked = () => {
      this._setUIShown(!1);
    };
    this.handlePageMouseMove = (e, t) => {
      let r = e.clientY;
      let n = window.innerHeight - e.clientY;
      let i = 85 > Math.abs(window.innerWidth / 2 + t / 2 - e.clientX) && n < 60;
      r < bG() ? this.showUiAndScheduleFade() : i ? this.showUiAndScheduleFade() : this.scheduleFadeIfNecessary();
    };
    this.handleHeaderOrFooterMove = e => {
      this._hideUITask.reset();
      this._isUIShown() || this._setUIShown(!0);
      e.stopPropagation();
    };
    this.handleHeaderOrFooterBlur = e => {
      this.scheduleFadeIfNecessary();
    };
    this.handleHeaderOrFooterFocus = e => {
      this._hideUITask.reset();
      this._setUIShown(!0);
    };
    this.handleKeyDown = (e, t) => {
      (t && this._isUIShown() || e.keyCode === Uz.ESCAPE) && this.showUiAndScheduleFade();
    };
    this.teardown = () => {
      this._hideUITask.reset();
    };
    this.showUiAndScheduleFade = () => {
      this._isUIShown() || this._setUIShown(!0);
      this._hideUITask.reset();
      this.scheduleFadeIfNecessary();
    };
    this.scheduleFadeIfNecessary = () => {
      this._hideUITask.isScheduled() || this._hideUITask.scheduleOnce(() => {
        this._setUIShown(!1);
      }, e.FADE_DELAY_MS);
    };
    this._setUIShown = t => {
      let n = !t && this._inCommentsMode;
      let i = !t && this._rcsUserFlags.reduce((t, r) => t || e.RCS_SHOWN_ON_UI.has(r), !1);
      n || i || r(t);
    };
  }
};
l.FADE_DELAY_MS = rr ? 1e3 : 2e3;
l.RCS_SHOWN_ON_UI = new Set([e]);