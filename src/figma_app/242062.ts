import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState, useRef, useMemo, useCallback, useEffect, useReducer, useLayoutEffect, Fragment as _$$Fragment, memo, useContext } from "react";
import { wA, d4, Pj } from "../vendor/514228";
import { G as _$$G } from "../905/289770";
import { h3O, z7E, JA, Ez5, NLJ, m1T, glU } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import c from "classnames";
import { sn, Vq } from "../905/542194";
import { GL, e3 as _$$e, En, YN } from "../figma_app/191804";
import { j as _$$j } from "../figma_app/469468";
import { R as _$$R } from "../905/103090";
import { tH, H4 } from "../905/751457";
import { lg } from "../figma_app/976749";
import { x as _$$x } from "../figma_app/943271";
import { d as _$$d } from "../905/758967";
import { zw } from "../figma_app/682945";
import { Z0, _X, bs } from "../figma_app/62612";
import { R9 } from "../905/977824";
import { XM } from "../905/486443";
import { p8 } from "../figma_app/722362";
import { KP, _E } from "../figma_app/440875";
import { ut, J2 } from "../figma_app/84367";
import { viewportNavigatorContext } from "../figma_app/298911";
import { p as _$$p } from "../figma_app/372802";
import { buildUploadUrl, buildStaticUrl } from "../figma_app/169182";
import { o as _$$o } from "../905/755806";
import { eU as _$$eU, md, fp } from "../figma_app/27355";
import { xx } from "../figma_app/815945";
import { n as _$$n } from "../vendor/547481";
import { eD as _$$eD } from "../figma_app/876459";
import { w as _$$w, L as _$$L } from "../905/842040";
import { debugState } from "../905/407919";
import { H as _$$H } from "../figma_app/147959";
import { am } from "../figma_app/901889";
import { UK } from "../figma_app/740163";
import { Po } from "../figma_app/412189";
import { p as _$$p2, I as _$$I } from "../figma_app/210457";
import { P as _$$P } from "../vendor/348225";
import { N as _$$N } from "../vendor/930821";
import { EO, aG } from "../figma_app/178273";
import { K as _$$K } from "../figma_app/824081";
import { t as _$$t } from "../905/303541";
import { Gq } from "../figma_app/363242";
import { Ho, mu } from "../figma_app/308685";
import { n3, Tc } from "../905/797478";
import { oP } from "../figma_app/580087";
import { w3 } from "../figma_app/728075";
import { Rt, iU, VW, S8, z8, bu, iY, Lo, vD, hD, Dy, or, p as _$$p3, u0, Bj, DE, Lw, W7, PT, zr } from "../figma_app/938674";
import { S as _$$S } from "../figma_app/403368";
import { debug } from "../figma_app/465776";
import { x as _$$x2 } from "../905/437800";
import { Ay } from "../figma_app/778880";
import { mZ, AS } from "../figma_app/991227";
import { JR, p4, De } from "../905/496627";
import { ft } from "../figma_app/753501";
import { F as _$$F } from "../905/258517";
import { Fk } from "../figma_app/167249";
import { Y as _$$Y } from "../905/1768";
var n = {};
require.d(n, {
  GLARE_ANIMATION: () => ej,
  GRAY_BACKGROUND: () => eF,
  NONE: () => eB,
  ORANGE_GRADIENT: () => eM,
  PINK_GRADIENT: () => eD,
  animateBg: () => ek,
  glareAnimation: () => eU
});
var u = c;
var O = (e => (e.PINK_GRADIENT = "PINK_GRADIENT", e.ORANGE_GRADIENT = "ORANGE_GRADIENT", e.GRAY_BACKGROUND = "GRAY_BACKGROUND", e.GLARE_ANIMATION = "GLARE_ANIMATION", e.NONE = "NONE", e))(O || {});
let R = new Map([["happy birthday", "PINK_GRADIENT"], ["bday", "PINK_GRADIENT"], ["hbd", "PINK_GRADIENT"], ["fire", "ORANGE_GRADIENT"], ["fiire", "ORANGE_GRADIENT"], ["fiiire", "ORANGE_GRADIENT"], ["fiiiire", "ORANGE_GRADIENT"], ["lit", "ORANGE_GRADIENT"], ["heat", "ORANGE_GRADIENT"], ["hot", "ORANGE_GRADIENT"], ["spicy", "ORANGE_GRADIENT"], ["lowkey", "GRAY_BACKGROUND"], ["slick", "GLARE_ANIMATION"], ["this is clean", "GLARE_ANIMATION"], ["this clean", "GLARE_ANIMATION"], ["cleann", "GLARE_ANIMATION"], ["sharp", "GLARE_ANIMATION"], ["immaculate", "GLARE_ANIMATION"], ["pristine", "GLARE_ANIMATION"], ["polished", "GLARE_ANIMATION"], ["spotless", "GLARE_ANIMATION"], ["shiny", "GLARE_ANIMATION"]]);
let L = new Map([[buildUploadUrl("a83de90bf34495081ce2e8bcaf28d1d2c16e5186"), ["lol", "lmao", "rofl", "lmfao", "hehe", "haha", "sksk", "cryingg", "dyingg", "so funny", "rotfl"]], [buildUploadUrl("d1e0d7ed5e1aa13e8854dbd88b9fd650377a02f2"), ["fire", "fiire", "fiiire", "fiiiire", "spicy", "oh snap", "dope", "hot", "heat", "so good", "siick", "siiick", "siiiick", "on point", "rad", "sweeet", "sweeeet", "wagmi", "wgmi", "gmi"]], [buildUploadUrl("0606e9d967b5abb6d9a2853c2fff589f2ec2fc05"), ["hey", "hiya", "heyo", "hello", "howdy", "whats up", "what's up", "good morning", "gm", "greetings", "bye", "later", "ciao", "see ya", "cya", "wave"]], [buildUploadUrl("ffd0635e8f9322352eff0c15411ac0b536b98d87"), ["taking a look", "sus", "let me look", "let me see", "lemme see", "i see what you did there"]], [buildUploadUrl("ff5be810b821d264cc2c95f665d24a867c34e587"), ["gorgeous", "stunning", "love", "loove", "looove", "loooove", "looooove", "luv", "woww", "awww", "<3", "yass", "cute", "amazingg", "heart eyes", "beautiful", "my eyeballs are literally two giant hearts right now and i couldn't be happier", "beautiful", "adorable"]], [buildUploadUrl("78f60a21d2616c2a24c7645d8636dec855e48ffb"), ["ngmi", "bummer", "sad face", "uh oh", ":(", "noo", "oh no", "sorry to hear that", "rip", "rats", "big sad", "tragic", "fail", "womp", "that sucks"]], [buildUploadUrl("1429964104bceac90c5c8e731ce4cc50b27e2797"), ["wtf", "whoa", "no way", ":O", "woah", "whaat", "whaaat", "shook", "shooketh", "omg", "omfg", "speechless", "oh snap", "surprised"]], [buildUploadUrl("e15fa4fbba4b88b4f1f04ba64bb12abf12bcbc6c"), ["gift", "hbd", "bday", "birthday"]], [buildUploadUrl("778eea842ed4020f6209e97c77abcd84984e5c94"), ["cool", "coool", "swag", "chill"]], [buildStaticUrl("emoji/5/noto/medium/1f410.png"), ["goat"]]]);
var P = (e => (e[e.Standard = 0] = "Standard", e))(P || {});
let D = new Map();
L.forEach((e, t) => {
  !function (e, t, r) {
    e.forEach(e => r.set(e, t));
  }(e, t, D);
});
let k = (e, t) => {
  let r = t.get(e);
  r && R9.sendReaction(r);
};
class V extends _$$w {
  constructor() {
    super();
    this.type = "Particle";
    this.velocity = {
      x: 0,
      y: 0
    };
    this.kick = {
      x: 0,
      y: 0
    };
    this.kickDecay = 1;
    this.gravity = {
      x: 0,
      y: 0
    };
  }
  static fastVectorAddScaled(e, t, r) {
    e.x += t.x * r;
    e.y += t.y * r;
  }
  update(e) {
    V.fastVectorAddScaled(this.position, this.velocity, e);
    V.fastVectorAddScaled(this.position, this.kick, e);
    V.fastVectorAddScaled(this.kick, this.kick, Math.pow(this.kickDecay, e / .016) - 1);
    V.fastVectorAddScaled(this.velocity, this.gravity, e);
    return super.update(e);
  }
}
class H extends _$$L {
  constructor() {
    super(...arguments);
    this.MAX_PARTICLES = 512;
    this.addParticle = e => {
      this.getParticles().length < this.MAX_PARTICLES && this.addEntity(e);
    };
  }
  getParticles() {
    return this.getEntities().filter(e => e instanceof V);
  }
}
let X = class e {
  constructor() {
    this.previouslyCollidingCursors = new Set();
  }
  updateAndCheckCollisions(t) {
    let r = new Set();
    let n = [];
    for (let i = 0; i < t.length; i++) {
      let a = t[i];
      let s = e.closestNonSelfCursor(a, t.slice(i + 1));
      if (s && e.distanceBetween(a.mouse?.canvasSpacePosition, s.mouse?.canvasSpacePosition) < e.CURSOR_COLLISION_RADIUS) {
        let t = e.makeCursorProximityKey(a, s);
        this.previouslyCollidingCursors.has(t) || n.push([a, s]);
        r.add(t);
      }
    }
    this.previouslyCollidingCursors = r;
    return n;
  }
  static makeCursorProximityKey(e, t) {
    return [e.sessionId, t.sessionId].sort().join("+");
  }
  static distanceBetween(e, t) {
    if (!e || !t) return 1 / 0;
    let r = e.x - t.x;
    let n = e.y - t.y;
    return Math.sqrt(r * r + n * n);
  }
  static computeMidpoint(e, t) {
    return {
      x: (e.x + t.x) / 2,
      y: (e.y + t.y) / 2
    };
  }
  static closestNonSelfCursor(t, r) {
    let n = 1 / 0;
    let i = null;
    r.forEach(r => {
      if (r.sessionId !== t.sessionId) {
        let a = e.distanceBetween(t.mouse?.canvasSpacePosition, r.mouse?.canvasSpacePosition);
        a < n && (n = a, i = r);
      }
    });
    return i;
  }
};
X.CURSOR_COLLISION_RADIUS = 80;
let q = _$$eU(!1);
class J extends _$$w {
  constructor(e) {
    super();
    this.position = e;
    this.type = "BubblePopEntity";
    this.sortOrder = -2;
  }
}
class Z extends _$$w {
  constructor(e) {
    super();
    this.position = e;
    this.type = "SparkleEntity";
  }
}
class Q extends _$$w {
  constructor(e) {
    super();
    this.position = e;
    this.type = "StarParticle";
    this.scale = (1 + Math.random()) * .3;
    this.sortOrder = -.5;
    this.customData.emissionAngle = Math.random() * Math.PI * 2;
  }
}
class ee extends _$$w {
  constructor(e) {
    super();
    this.timedTriggers = e;
  }
  update(e) {
    this.age += e;
    this.timedTriggers = this.timedTriggers.filter(e => !(this.age >= e.time) || (e.event(), !1));
    return this.timedTriggers.length > 0;
  }
}
let et = class e extends _$$w {
  constructor({
    startingRelativePosition: t,
    startingRotation: r,
    position: n,
    viewportZoomScale: i,
    cursorOnRightForWindup: a,
    cursorOnRightForCollision: s,
    sessionId: o,
    getUserCursorTransform: l
  }) {
    super();
    this.type = "AnimatedCursorEntity";
    this.lifetime = .85;
    s && (this.sortOrder = -1);
    this.position = n;
    this.viewportZoomScale = i;
    this.cursorOnRightForWindup = a;
    this.cursorOnRightForCollision = s;
    let d = {
      transform: `translate(${t.x}px, ${t.y}px) rotate(${r}rad)`
    };
    let c = {
      transform: `translate(${(this.cursorOnRightForWindup ? 1 : -1) * 90}px, 70px) rotate(${this.cursorOnRightForWindup ? 1 : -1}rad) scale(0.9)`
    };
    let u = {
      transform: `translate(${(this.cursorOnRightForCollision ? 1 : -1) * 10}px, 0px) scale(2)`
    };
    let p = e.RANDOM_VECTORS.map(e => ({
      transform: `translate(${10 * e.x}px, ${10 * e.y}px) ${u.transform}`
    }));
    let _ = 1e3 / 60;
    this.customData = {
      sessionId: o,
      animations: [{
        keyframes: [d, c],
        timing: {
          duration: 12 * _,
          easing: "cubic-bezier(.26,.32,.12,1)"
        }
      }, {
        keyframes: [c, u],
        timing: {
          delay: 12 * _,
          duration: 4 * _,
          easing: "cubic-bezier(.16,.5,.47,1.25)"
        }
      }, {
        keyframes: p,
        timing: {
          delay: 16 * _,
          duration: 4 * _,
          easing: `steps(${p.length})`
        }
      }, {
        keyframes: [u, u],
        timing: {
          delay: 20 * _,
          duration: 18 * _
        }
      }],
      getReturnToCursorTransform: t => {
        let r = (this.cursorOnRightForCollision ? 1 : -1) * 10;
        let n = l();
        let a = (n.position.x - this.position.x) * i;
        let s = (n.position.y - this.position.y) * i;
        let o = n.rotation;
        return `translate(${e.lerp(r, a, t)}px,${e.lerp(0, s, t)}px) rotate(${e.lerp(0, o, t)}rad) scale(${e.lerp(2, 1, t)})`;
      }
    };
  }
  static lerp(e, t, r) {
    return e * (1 - r) + t * r;
  }
};
et.RANDOM_VECTORS = [{
  x: .626086772987037,
  y: -.24715772511262912
}, {
  x: .16558013014491735,
  y: -.4962441097195551
}];
let en = class e {
  constructor() {
    this.wiggleMeter = 0;
    this.wiggleMode = !1;
    this.lastUpdateTime = 0;
    this.shakeFactor = 0;
    this.shakeGracePeriod = 0;
    this.speedFactor = 0;
    this.mouseX = 0;
    this.mouseY = 0;
    this.hasLastMousePosition = !1;
    this.lastMouseX = 0;
    this.lastMouseY = 0;
    this.lastDirectionX = 0;
    this.lastDirectionY = 0;
    this.subscriptions = [];
    this.mouseLeftCanvas = !1;
    this.highFiveKeyPressed = !1;
    this.mouseButtonHeld = !1;
  }
  getWiggleMode() {
    return this.wiggleMode;
  }
  getShakeFactor() {
    return this.shakeFactor;
  }
  getAboutToHide() {
    return this.getWiggleMode() && this.wiggleMeter < e.WIGGLE_MODE_ABOUT_TO_HIDE_TIME / e.WIGGLE_MODE_DEACTIVATION_TIME;
  }
  onWiggleModeChange(e) {
    this.subscriptions.push(e);
    return () => {
      let t = this.subscriptions.indexOf(e);
      t >= 0 && this.subscriptions.splice(t, 1);
    };
  }
  setWiggleMode(e) {
    if (e !== this.wiggleMode) for (let t of (this.wiggleMode = e, this.subscriptions)) t(this.wiggleMode);
  }
  setMouseLeftCanvas(e) {
    this.mouseLeftCanvas = e;
  }
  getMouseLeftCanvas() {
    return this.mouseLeftCanvas;
  }
  setHighFiveKeyPressed(e) {
    this.highFiveKeyPressed = e;
  }
  getHighFiveKeyPressed() {
    return this.highFiveKeyPressed;
  }
  setMouseButtonHeld(e) {
    this.mouseButtonHeld = e;
    this.update();
  }
  getMousePosition() {
    return {
      x: this.mouseX,
      y: this.mouseY,
      overCanvas: !this.mouseLeftCanvas
    };
  }
  stopWigglingNow() {
    this.speedFactor = 0;
    this.shakeFactor = 0;
    this.shakeGracePeriod = 0;
    this.wiggleMeter = 0;
    this.hasLastMousePosition = !1;
    this.lastDirectionX = 0;
    this.lastDirectionY = 0;
    this.setWiggleMode(!1);
    this.update();
  }
  startOrRefreshWiggle() {
    this.setWiggleMode(!0);
    this.wiggleMeter = 1;
  }
  getDeltaTime() {
    let e = performance.now();
    let t = e - this.lastUpdateTime;
    this.lastUpdateTime = e;
    return t / 1e3;
  }
  update(e, t) {
    e ? this.setMousePositionAndUpdate(e, t) : this.updateWiggleMeter(t);
  }
  setMousePositionAndUpdate(t, r) {
    if (this.mouseLeftCanvas || this.mouseButtonHeld) return;
    let n = "number" == typeof r ? r : this.getDeltaTime();
    if (n <= 0) return;
    this.mouseX = t.x;
    this.mouseY = t.y;
    let i = 1;
    let a = (this.mouseX - this.lastMouseX) / n;
    let s = (this.mouseY - this.lastMouseY) / n;
    if (this.lastMouseX = this.mouseX, this.lastMouseY = this.mouseY, !this.hasLastMousePosition) {
      this.hasLastMousePosition = !0;
      return;
    }
    let o = Math.sqrt(a * a + s * s);
    if (o > 0) {
      let e = a / o;
      let t = s / o;
      i = e * this.lastDirectionX + t * this.lastDirectionY;
      this.lastDirectionX = e;
      this.lastDirectionY = t;
    }
    let l = n / e.WIGGLE_MODE_MOVEMENT_DECAY_TIME;
    let d = n / e.WIGGLE_MODE_MOVEMENT_MIN_TIME + l;
    this.speedFactor += Math.min(o * e.WIGGLE_MODE_MOVEMENT_SENSITIVITY, d);
    this.speedFactor = Math.max(0, this.speedFactor - l);
    this.speedFactor = Math.min(1, this.speedFactor);
    let c = this.speedFactor >= .8;
    let u = c && i < 0;
    let p = Math.abs(this.lastDirectionX) > Math.abs(this.lastDirectionY);
    c && u && p && (this.shakeFactor += 1 / (this.wiggleMode ? e.WIGGLE_MODE_REPLENISH_SHAKES : e.WIGGLE_MODE_MIN_SHAKES_TO_TRIGGER), this.shakeGracePeriod = 1);
    this.shakeGracePeriod > 0 ? this.shakeGracePeriod = Math.max(this.shakeGracePeriod - n / e.WIGGLE_MODE_SHAKE_GRACE_PERIOD, 0) : this.shakeFactor -= n / e.WIGGLE_MODE_SHAKE_RESET_TIME;
    this.shakeFactor = Math.min(Math.max(this.shakeFactor, 0), 1);
    c && (Math.abs(this.shakeFactor) >= .8 ? this.wiggleMeter = 1 : this.wiggleMode && Math.abs(this.shakeFactor) >= .3 && (this.wiggleMeter = Math.max(this.wiggleMeter, Math.abs(this.shakeFactor))));
    this.updateWiggleMeter(n);
  }
  updateWiggleMeter(t) {
    if ((t = "number" == typeof t ? t : this.getDeltaTime()) <= 0) return;
    this.wiggleMeter <= 0 ? this.setWiggleMode(!1) : this.wiggleMeter >= 1 && this.setWiggleMode(!0);
    let r = 0;
    r = this.mouseLeftCanvas ? -e.WIGGLE_MODE_LEAVE_CANVAS_GRACE_PERIOD : this.highFiveKeyPressed ? e.WIGGLE_MODE_HIGH_FIVE_KEY_TIME : this.wiggleMode ? -e.WIGGLE_MODE_DEACTIVATION_TIME : -e.WIGGLE_MODE_MOUSE_RESET_TIME;
    this.wiggleMeter += t / r;
    this.wiggleMeter = Math.min(Math.max(this.wiggleMeter, 0), 1);
  }
};
function ei() {
  return {
    cursorWiggleDetector: new en(),
    cursorEntitySystem: new H(),
    cursorCollisionDetector: new X(),
    cursorKinematics: new _$$p2()
  };
}
en.WIGGLE_MODE_DEACTIVATION_TIME = 6;
en.WIGGLE_MODE_ABOUT_TO_HIDE_TIME = 3;
en.WIGGLE_MODE_HIGH_FIVE_KEY_TIME = .5;
en.WIGGLE_MODE_MOUSE_RESET_TIME = .6;
en.WIGGLE_MODE_MOVEMENT_SENSITIVITY = 4e-5;
en.WIGGLE_MODE_MOVEMENT_MIN_TIME = .1;
en.WIGGLE_MODE_MOVEMENT_DECAY_TIME = 1.5;
en.WIGGLE_MODE_MIN_SHAKES_TO_TRIGGER = 6.5;
en.WIGGLE_MODE_REPLENISH_SHAKES = 3.5;
en.WIGGLE_MODE_SHAKE_GRACE_PERIOD = .3;
en.WIGGLE_MODE_SHAKE_RESET_TIME = .5;
en.WIGGLE_MODE_LEAVE_CANVAS_GRACE_PERIOD = .3;
let ea = xx(function (e) {
  return e.reduce((e, t) => (e[t.sessionID] = t, e), {});
});
function es(e, t, r, n, i) {
  let a = (_$$I(t.getHandsOnRight(), r) ? 1 : -1) * (Math.PI / 4);
  let s = 32 / n;
  let o = {
    x: e.x + s * Math.sin(a),
    y: e.y - s * Math.cos(a)
  };
  i || (o.x += 16 / n, o.y += 16 / n);
  return {
    position: o,
    rotation: a
  };
}
function eo(e, t) {
  return !!e.find(e => "AnimatedCursorEntity" === e.type && e.customData.sessionId === t);
}
function el(e, t, r, n, i) {
  return !("editor" !== e.deviceName || t?.mouse?.canvasSpacePosition == null || isNaN(t?.mouse?.canvasSpacePosition.x) || t.mouse.pageId !== r || (-1 === t.lastMouseMoveMs || window.performance.now() - t.lastMouseMoveMs > 6e4) && n !== e.sessionID) && e.sessionID !== i;
}
function ed() {
  let e = lg();
  let t = XM();
  return "whiteboard" === e && !t;
}
function e_({
  viewportInfo: e,
  bb: t
}) {
  let {
    zoomScale
  } = e;
  let n = t.w * zoomScale;
  let a = t.h * zoomScale;
  let s = (zoomScale - 1) * t.x;
  let o = (zoomScale - 1) * t.y;
  let l = {
    transform: `translate(${t.x + s}px, ${t.y + o}px)`,
    width: `${n}px`,
    height: `${a}px`
  };
  return jsx(_$$P.div, {
    className: "ai_animations--aiSelectionBox--vHELC",
    style: l,
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1
    },
    exit: {
      opacity: 0
    },
    transition: {
      duration: .1
    }
  });
}
function eh({
  viewportInfo: e
}) {
  let t = md(EO);
  let r = md(aG);
  return jsx(_$$N, {
    children: r && t.map(t => jsx(e_, {
      viewportInfo: e,
      bb: t.boundingBox
    }, t.guid))
  });
}
function em(e, t) {
  let r = 3 * e;
  let n = 3 * e;
  let i = 1.7999999999999998 * e;
  let a = [];
  for (let e = 0; e <= 100; e += 2) {
    if (0 === e || 100 === e) {
      a.push(eg(0, 0, 0));
      continue;
    }
    let t = Math.floor(Math.random() * r) - r / 2;
    let s = Math.floor(Math.random() * n) - n / 2;
    let o = Math.floor(Math.random() * i) - i / 2;
    a.push(eg(t, s, o));
  }
  return new Animation(new KeyframeEffect(t, a, {
    duration: 100,
    easing: "ease-in-out",
    iterations: 1 / 0
  }), document.timeline);
}
function eg(e, t, r) {
  return {
    transform: `translate(${e}px, ${t}px) rotate(${r}deg)`
  };
}
function ef(e) {
  return !!e.length && e.some(e => "running" === e.playState);
}
function eE(e) {
  let {
    content,
    children
  } = e;
  let [n, s] = useState(0);
  let o = useRef(0);
  let l = useRef([]);
  let d = useRef(null);
  let [c, u] = useState([]);
  let p = am();
  let _ = useMemo(() => 0 === content.length ? 0 : ((content.match(/\!+$/g) || [])[0] || "").length, [content]);
  let h = useCallback(e => {
    clearTimeout(o.current);
    o.current = setTimeout(() => {
      s(e => (e > 0 && h(250), Math.max(e - 1, 0)));
    }, e);
  }, []);
  useEffect(() => {
    s(_);
    h(1e3);
  }, [_, h]);
  useEffect(() => {
    if (!d.current) return;
    n > 1 && !l.current.length && (l.current = [em(1, d.current), em(1.5, d.current), em(2, d.current), em(2.5, d.current), em(3, d.current)]);
    let e = ef(l.current);
    if (n > 1) {
      let e = Math.min(n - 1 - 1, l.current.length - 1);
      l.current.forEach((t, r) => {
        r === e ? t.play() : t.cancel();
      });
    } else l.current.forEach(e => e?.cancel());
    let t = ef(l.current);
    !e && t && p("cursor_chat_rumble_triggered");
    u(l.current.map(e => e?.playState));
  }, [n, p]);
  return jsx("div", {
    "data-testid": "chat-animation-wrapper",
    "data-test-animation-state": c,
    ref: d,
    children
  });
}
let ey = {
  HANDLE_KEYDOWN: "HANDLE_KEYDOWN",
  HANDLE_INPUT: "HANDLE_INPUT",
  STOP_CHATTING: "STOP_CHATTING",
  START_FADING_INACTIVE_CHAT: "START_FADING_INACTIVE_CHAT",
  STOP_FADING_INACTIVE_CHAT: "STOP_FADING_INACTIVE_CHAT",
  HANDLE_EMOTE_ANIMATION_END: "HANDLE_EMOTE_ANIMATION_END"
};
let eb = {
  currentUserInput: "",
  previousLine: "",
  fadingOutText: "",
  isWidthLocked: !1,
  isShowingEmptyNewline: !1,
  inputIsEmpty: !0,
  currentEmoteBackground: O.NONE,
  width: 0,
  isFigJam: !1,
  isFadingInactiveChat: !1,
  shouldClose: !1,
  hasTypedAnything: !1
};
let eT = e => {
  let t = document.createElement("canvas").getContext("2d");
  if (!t) return e;
  t.font = "14px Inter, sans-serif";
  let r = Math.max(t.measureText(e.currentUserInput).width, t.measureText(e.previousLine).width);
  return {
    ...e,
    width: r
  };
};
function eI(e, t) {
  var r;
  let n = e.toLocaleLowerCase();
  let i = !(1 === (r = n.charAt(n.length - t.length - 1)).length && /[A-Za-z]/.test(r));
  return n.endsWith(t) && i;
}
let eS = (e, t, r) => {
  for (let t of D.keys()) eI(e, t) && (!function (e, t) {
    k(e, t);
    k(e, t);
    k(e, t);
    k(e, t);
    k(e, t);
    k(e, t);
  }(t, D), r("cursor_chat_emote_triggered", {
    keyword: t
  }));
};
let ev = e => {
  for (let [t, r] of R) if (r && eI(e, t)) return {
    key: t,
    background: r
  };
};
function eA(e, t) {
  switch (t.type) {
    case ey.HANDLE_INPUT:
      {
        let r = {
          ...e
        };
        let {
          value
        } = t.payload;
        if (e.isShowingEmptyNewline && (r.isShowingEmptyNewline = !1), value.length > r.currentUserInput.length && r.isFigJam) {
          let {
            key,
            background
          } = ev(value) ?? {};
          background && (r.currentEmoteBackground = background, t.payload.trackEvent("cursor_chat_background_effect_triggered", {
            keyword: key
          }));
          eS(value, P.Standard, t.payload.trackEvent);
        }
        r.fadingOutText = r.previousLine;
        r.previousLine = "";
        r.currentUserInput = value;
        e.hasTypedAnything || t.payload.trackEvent("cursor_chat_typed_something");
        r.hasTypedAnything = !0;
        r.inputIsEmpty = 0 === r.currentUserInput.length && 0 === r.previousLine.length;
        return eT(r);
      }
    case ey.HANDLE_KEYDOWN:
      {
        let r = t.payload;
        if ("Enter" === r.key) {
          if (!1 === e.hasTypedAnything) return e;
          let t = {
            ...e
          };
          t.isShowingEmptyNewline = !0;
          t.inputIsEmpty = !1;
          t.isWidthLocked = !0;
          t.fadingOutText = t.previousLine;
          t.previousLine = t.currentUserInput;
          t.currentUserInput = "";
          return eT(t);
        }
        if ("Escape" === r.key) return {
          ...e,
          shouldClose: !0
        };
        return e;
      }
    case ey.HANDLE_EMOTE_ANIMATION_END:
      {
        let t = {
          ...e
        };
        t.isWidthLocked = !1;
        t.currentEmoteBackground = O.NONE;
        return eT(t);
      }
    case ey.STOP_CHATTING:
      return {
        ...e,
        shouldClose: !0
      };
    case ey.START_FADING_INACTIVE_CHAT:
      return {
        ...e,
        isFadingInactiveChat: !0
      };
    case ey.STOP_FADING_INACTIVE_CHAT:
      return {
        ...e,
        isFadingInactiveChat: !1
      };
    default:
      return e;
  }
}
let eL = (e, t, r) => {
  useEffect(() => {
    if (e.current) {
      if (t) {
        e.current.style.width = "initial";
        return;
      }
      e.current.style.width = `${r + 35}px`;
    }
  }, [r, e, t]);
};
let eP = (e, t, r, n) => {
  useEffect(() => {
    r.current && n.current && (r.current.value = e, n.current.setAttribute("data-value", e));
  }, [e, t, r, n]);
};
let eD = "cursor_chat_emotes--PINK_GRADIENT--1KQ3C";
let ek = "cursor_chat_emotes--animateBg---meP2";
let eM = "cursor_chat_emotes--ORANGE_GRADIENT--cC1fw";
let eF = "cursor_chat_emotes--GRAY_BACKGROUND--DAHAE";
let ej = "cursor_chat_emotes--GLARE_ANIMATION--SuTBw";
let eU = "cursor_chat_emotes--glareAnimation--x1WJw";
let eB = "cursor_chat_emotes--NONE---FYHz";
function eG(e) {
  let t;
  let {
    color
  } = e;
  let o = "whiteboard" === lg();
  let d = useRef(null);
  let c = useRef(null);
  let u = wA();
  let p = am();
  let [{
    currentUserInput: h,
    previousLine: m,
    fadingOutText: g,
    isFadingInactiveChat: E,
    isShowingEmptyNewline: y,
    inputIsEmpty: b,
    currentEmoteBackground: T,
    width: I,
    shouldClose: S,
    hasTypedAnything: v
  }, A] = useReducer(eA, {
    ...eb,
    isFigJam: o
  });
  eL(d, b, I);
  eP(h, m, d, c);
  (function (e, t, r, n) {
    useEffect(() => {
      h3O?.sendChatMessage(e, t);
    }, [e, t]);
    let i = useCallback(() => {
      h3O?.sendChatMessage("", "");
      n(Ho());
    }, [n]);
    useEffect(() => {
      r && i();
    }, [r, i]);
    useEffect(() => () => i(), [i]);
  })(h, m, S, u);
  let x = useCallback(() => {
    u(Ho());
    A({
      type: ey.STOP_CHATTING
    });
  }, [u, A]);
  useEffect(() => {
    A({
      type: ey.STOP_FADING_INACTIVE_CHAT
    });
    let e = setTimeout(() => {
      A({
        type: ey.START_FADING_INACTIVE_CHAT
      });
    }, 5e3);
    let t = setTimeout(() => {
      A({
        type: ey.STOP_FADING_INACTIVE_CHAT
      });
      x();
    }, 8e3);
    return () => {
      clearTimeout(e);
      clearTimeout(t);
    };
  }, [h, A, x]);
  useEffect(() => {
    let e = e => {
      A({
        type: ey.HANDLE_KEYDOWN,
        payload: e
      });
    };
    let t = () => {
      document.removeEventListener("keydown", e);
    };
    let r = () => {
      document.addEventListener("keydown", e);
    };
    d.current && (window.focus(), d.current.focus({
      preventScroll: !0
    }));
    document.addEventListener("keydown", e);
    document.addEventListener("compositionstart", t);
    document.addEventListener("compositionend", r);
    return () => {
      document.removeEventListener("keydown", e);
      document.removeEventListener("compositionstart", t);
      document.removeEventListener("compositionend", r);
    };
  }, [A, d]);
  let N = useCallback(e => {
    if (n3(e.relatedTarget, Tc(oP))) {
      d.current?.focus();
      return;
    }
    x();
  }, [x]);
  let C = GL(color);
  let w = C === _$$e ? "chat_input--lightPlaceholder--YGSmc" : "chat_input--darkPlaceholder--BH5Qn";
  let O = _$$t("whiteboard.cursor_chat.say_something");
  switch (Gq()?.getPrimaryLocale(!1)) {
    case "ja":
      t = 18;
      break;
    case "ko-kr":
      t = 13;
      break;
    default:
      t = O.length;
  }
  let R = jsx("div", {
    className: `chat_input--mask--P6RFl ${E ? "chat_input--fading--EBfYy" : ""} `,
    style: {
      boxShadow: `2px 4px 8px ${color}40`
    },
    children: jsxs("label", {
      ref: c,
      className: "chat_input--inputSizer--9JY00",
      children: [jsx("input", {
        ref: d,
        className: `chat_input--input--2o9dx ${w} ${y ? "chat_input--expanded--1W44Y" : ""}`,
        dir: "auto",
        maxLength: 50,
        onBlur: N,
        onChange: e => A({
          type: ey.HANDLE_INPUT,
          payload: {
            value: e.currentTarget.value,
            trackEvent: p
          }
        }),
        placeholder: v ? "" : O,
        size: v ? 1 : t,
        spellCheck: !1,
        style: {
          color: C,
          backgroundColor: "transparent"
        },
        type: "text",
        value: h
      }), jsx("div", {
        className: `chat_input--chatBackground--Mdxwm ${n[T]}`,
        style: {
          background: color,
          color: C
        },
        onAnimationEnd: () => A({
          type: ey.HANDLE_EMOTE_ANIMATION_END
        })
      }), jsx("div", {
        style: {
          color: C
        },
        className: "chat_input--previousChat--Y2u9G",
        children: m
      }), jsx("div", {
        style: {
          color: C
        },
        className: "chat_input--fadingOutLine--VF6ni chat_input--previousChat--Y2u9G chat_input--animated--ADHj-",
        children: g
      }, g)]
    })
  });
  return o ? jsx(eE, {
    content: h,
    children: R
  }) : R;
}
function ez() {
  let e = _$$G();
  let t = _$$K();
  let r = d4(({
    multiplayer: {
      allUsers: e
    }
  }) => e[0]?.color || w3);
  let n = getFeatureFlags().fpl_enhanced_contrast_toggle && e.enhancedContrast ? En(r) : r;
  let a = Rt;
  return jsx("div", {
    className: a,
    style: {
      opacity: t ? 1 : 0
    },
    children: jsx(eG, {
      color: n
    })
  });
}
function eJ(e, t, r) {
  let n = z7E[t];
  return r ? buildStaticUrl(`multiplayer_cursors/ui3/${n}/${e.substring(1)}.png`) : buildStaticUrl(`multiplayer_cursors/v1/${n}/${e.substring(1)}.png`);
}
function eZ(e, t) {
  if (t) {
    let t = JR[e.substring(1)] ?? JR[p4];
    return `data:image/png;base64, ${t}`;
  }
  let r = De[e.substring(1)] ?? De[p4];
  return `data:image/png;base64, ${r}`;
}
function eQ({
  viewportInfo: e,
  cursorEntities: t
}) {
  let r = KP();
  let n = d4(({
    multiplayer: {
      allUsers: e
    }
  }) => e);
  return jsx(Fragment, {
    children: t.map(t => {
      let a;
      switch (t.type) {
        case "StarParticle":
          a = jsx(e7, {
            emissionAngle: t.customData.emissionAngle
          });
          break;
        case "BubblePopEntity":
          a = jsx(tt, {});
          break;
        case "SparkleEntity":
          a = jsx(tr, {});
          break;
        case "AnimatedCursorEntity":
          let s = t.customData.sessionId;
          let o = r.toString() === s;
          let l = o ? e3 : n.find(e => e.sessionID.toString() === s)?.color;
          a = jsx(e9, {
            customData: t.customData,
            color: l,
            isCurrentUser: o
          });
      }
      return a && jsx(e1, {
        canvasPosition: t.position,
        viewportInfo: e,
        rotation: t.rotation,
        scale: t.scale,
        children: a
      }, t.id);
    })
  });
}
function e0({
  cursorWiggleStatus: e,
  temporarilyHide: t,
  isCursorHandOnRight: r
}) {
  let [n, s] = useState(!1);
  useEffect(() => {
    let t = requestAnimationFrame(() => {
      s("HIDDEN" !== e);
    });
    return () => cancelAnimationFrame(t);
  }, [e]);
  return jsx("div", {
    className: "cursor_high_five--highFiveCursorForSelf--cVByQ",
    children: jsx(e5, {
      color: e3,
      isHighFiveHandOut: n,
      aboutToHide: "ABOUT_TO_HIDE" === e,
      temporarilyHide: t,
      isCursorHandOnRight: r
    })
  });
}
function e1({
  canvasPosition: e,
  viewportInfo: t,
  children: r,
  rotation: n = 0,
  scale: a = 1
}) {
  let s = Z0(t, e || {
    x: 0,
    y: 0
  });
  return jsx(e2, {
    viewportPosition: s,
    rotation: n,
    scale: a,
    children: r
  });
}
function e2({
  viewportPosition: e,
  children: t,
  rotation: r = 0,
  scale: n = 1
}) {
  let a = {
    transform: `translate3D(${0 | e.x}px, ${0 | e.y}px, 0) translate(-50%, -50%) rotate(${r}rad) scale(${n})`
  };
  return jsx("div", {
    className: "cursor_high_five--highFiveAbsoluteContainer---G725",
    style: a,
    children: t
  });
}
function e5({
  color: e,
  isHighFiveHandOut: t,
  temporarilyHide: r,
  isCursorHandOnRight: n,
  aboutToHide: a = !1
}) {
  return jsx("div", {
    className: u()({
      "cursor_high_five--highFiveAnimationContainer--jWFVT": !0,
      "cursor_high_five--highFiveAnimHighFiveHandOut--6q5Bu": t,
      "cursor_high_five--highFiveAnimHighFiveHandAboutToHide--tFRSO": a
    }),
    children: jsx("div", {
      style: {
        opacity: r ? "0" : "1"
      },
      className: u()({
        "cursor_high_five--highFiveWaveContainer--M1fBF": !0,
        "cursor_high_five--cursorHandOnRight--wSZLI": n
      }),
      children: jsx(e6, {
        color: e
      })
    })
  });
}
let e3 = "#FFFFFF";
let e4 = new Set([e3, "#0FA958", "#5551FF", "#9747FF", "#848484", "#D27C2C", "#F24E1E", "#FFC700", "#667799", "#9747FF", "#007BE5", "#FF24BD", "#F24822", "#FFCD29", "#14AE5C"]);
function e8({
  color: e
}) {
  let [t, r] = useState(!1);
  if (!e4.has(e)) {
    debug(!!e, `Unknown color ${e} for Cursor High Fives`);
    return jsx(Fragment, {});
  }
  let n = eJ(t ? e3 : e, z7E.HIGH_FIVE, !1);
  return jsx("img", {
    className: "cursor_high_five--handImage--mJVid",
    src: n,
    alt: "",
    onError: () => r(!0)
  });
}
function e6({
  color: e
}) {
  return jsx(e8, {
    color: e
  }, e);
}
function e7({
  emissionAngle: e
}) {
  return jsx("div", {
    className: "cursor_high_five--fallingStar--Kx2fO",
    children: jsx("div", {
      style: {
        transform: `rotate(${e}rad)`
      },
      children: jsx("div", {
        className: "cursor_high_five--shootingStar--tyk8Z",
        children: jsx(te, {})
      })
    })
  });
}
function e9({
  customData: e,
  color: t,
  isCurrentUser: r
}) {
  let n = useRef(null);
  useLayoutEffect(() => {
    if (!_$$x2()) return;
    let t = -1;
    e.animations.forEach((r, i) => {
      let a = n.current?.animate(r.keyframes, r.timing);
      a && i === e.animations.length - 1 && (a.onfinish = () => {
        let r = null;
        let i = 0;
        let a = 1e3 / 60 * 12;
        let s = o => {
          let l = null === r ? 0 : o - r;
          if (r = o, i += l, n.current && i < a) {
            let r = i / a;
            let o = Math.sin(2.1 * r) / .8632093666488737 * (1 - r) + r;
            n.current.style.transform = e.getReturnToCursorTransform(o);
            t = requestAnimationFrame(s);
          }
        };
        t = requestAnimationFrame(s);
      });
    });
    return () => {
      t >= 0 && cancelAnimationFrame(t);
    };
  }, [e, n]);
  return jsx("div", {
    ref: n,
    children: jsx(e6, {
      color: t
    })
  });
}
function te() {
  let e = buildUploadUrl("353e095c3f9c8488d9bb83dec3ce1d4c689f96db");
  return jsx("img", {
    className: "cursor_high_five--starImage--GqFaX",
    src: e,
    alt: "star"
  });
}
function tt() {
  return jsx("div", {
    className: "cursor_high_five--bubble--9DVru"
  });
}
function tr() {
  return jsx("div", {
    className: "cursor_high_five--sparkle--hCRWw",
    style: {
      backgroundImage: `url(${buildUploadUrl("d67d53e57e063de9a1d2ae0edfb4dc96b2db406f")})`
    }
  });
}
let to = "reactions--indicatorSolid--wjW1q";
function tl({
  viewportInfo: e,
  reactionInfo: t
}) {
  let r = Z0(e, t.canvasSpacePosition);
  let [n] = useState(.5 * Math.random() + 2);
  let [s] = useState(.4 * Math.random() + .3);
  let o = {
    animationDuration: `${n.toFixed(1)}s`
  };
  let l = {
    animationDuration: `${s.toFixed(1)}s`
  };
  let {
    x,
    y
  } = r;
  d -= 5;
  c -= 10;
  let [u] = useState(1 * Math.random() + .5);
  let p = {
    willChange: "transform",
    transform: `translate3D(${0 | x}px, ${0 | y}px, 0) scale(${u})`
  };
  let [_] = useState(Math.random() > .5 ? "reactions--forward--8SV6f" : "reactions--backward--ZCNdY");
  return jsx("div", {
    className: "reactions--translationContainer--G9Mik",
    style: p,
    "data-testid": "reaction",
    children: jsx("div", {
      className: "reactions--floatingEmojiContainer--olUKm",
      style: o,
      children: jsx("img", {
        src: t.reactionId,
        className: `reactions--floatingEmoji--IKqDo ${_}`,
        style: l,
        alt: ""
      })
    })
  });
}
function td({
  viewportInfo: e,
  multiplayerCursorsEnabled: t
}) {
  let r = R9.useReactionsBySessionId();
  let n = Object.keys(r);
  let s = KP();
  let o = Fk(e => e.getCurrentPage()?.guid);
  return jsx(Fragment, {
    children: n.map(n => {
      let l = r[n];
      let d = Object.keys(l).filter(e => l[e].pageId === o);
      return n === `${s}` || t ? jsx(_$$Fragment, {
        children: d.map(t => {
          let r = l[t];
          return jsx(tl, {
            viewportInfo: e,
            reactionInfo: r
          }, t);
        })
      }, n) : null;
    })
  });
}
function tc({
  multiplayerEmoji: e,
  viewportInfo: t
}) {
  let r = _$$x({
    subscribeToUpdates_EXPENSIVE: !0
  });
  let n = useRef(0);
  let [o, d] = useState(to);
  let [c, u] = useState(!1);
  let p = wA();
  let _ = useCallback(() => {
    p(mu());
  }, [p]);
  _$$Y(_, {
    closeOnEsc: !0,
    ignore: "allClicks"
  });
  let {
    reactImageUrl,
    reactName
  } = "REACTING_OR_CHATTING" === e.type ? {
    reactImageUrl: e.imageUrl,
    reactName: e.name
  } : {
    reactImageUrl: null,
    reactName: null
  };
  useEffect(() => {
    if (d(to), !reactImageUrl) return;
    let e = null;
    let t = null;
    let r = () => {
      R9.sendReaction(reactImageUrl);
      _$$H.trigger(JA.GENERIC);
      d(to);
      null != e && clearTimeout(e);
      e = setTimeout(() => {
        d("reactions--indicatorFading--ZTyOt reactions--indicatorSolid--wjW1q");
      }, 300);
    };
    let i = e => {
      " " === e.key && null !== t && clearInterval(t);
    };
    let a = e => {
      "CANVAS" === e.target.tagName && (n.current = Date.now(), r(), t && clearInterval(t), t = setInterval(() => {
        r();
      }, 60), e.stopPropagation(), e.preventDefault());
    };
    let s = e => {
      if (null != t) {
        let e = t;
        if (n.current > 0) {
          let e = Date.now() - n.current;
          _$$F.trackFromFullscreen("emoji_reaction", {
            duration: e,
            image: reactImageUrl,
            name: reactName
          }, !1);
          n.current = 0;
        }
        setTimeout(() => {
          clearInterval(e);
        }, 70);
      }
      e.stopPropagation();
      e.preventDefault();
    };
    let o = new Set();
    let c = 0;
    let p = null;
    let _ = e => {
      if ("mouse" === e.pointerType) {
        a(e);
        return;
      }
      if ("CANVAS" !== e.target.tagName || p && e.pointerId === p.pointerId) return;
      o.add(e.pointerId);
      let r = o.size;
      if (c = Math.max(r, c), 1 === r) {
        let t = new PointerEvent("pointermove", e);
        e.target?.dispatchEvent(t);
        p = new PointerEvent("pointerdown", e);
      }
      c <= 1 ? a(e) : (p && (e.target?.dispatchEvent(p), p = null), t && clearInterval(t), u(!0));
    };
    let g = e => {
      "mouse" !== e.pointerType && p && e.pointerId === p.pointerId && (p = new PointerEvent("pointerdown", {
        bubbles: p.bubbles,
        cancelable: p.cancelable,
        composed: p.composed,
        detail: p.detail,
        view: p.view,
        altKey: p.altKey,
        ctrlKey: p.ctrlKey,
        metaKey: p.metaKey,
        shiftKey: p.shiftKey,
        button: p.button,
        buttons: p.buttons,
        clientX: e.clientX,
        clientY: e.clientY,
        movementX: e.movementX,
        movementY: e.movementY,
        relatedTarget: p.relatedTarget,
        screenX: e.screenX,
        screenY: e.screenY,
        isPrimary: p.isPrimary,
        pointerId: p.pointerId,
        pointerType: p.pointerType
      }));
    };
    let f = e => {
      if ("mouse" === e.pointerType) {
        s(e);
        return;
      }
      if (!o.has(e.pointerId)) return;
      o.$$delete(e.pointerId);
      let t = o.size;
      1 === c && s(e);
      0 === t && (c = 0, p = null, u(!1));
    };
    let E = ft(!0);
    E ? (document.addEventListener("pointerdown", _, !0), document.addEventListener("pointermove", g, !0), document.addEventListener("pointerup", f, !0), document.addEventListener("pointercancel", f, !0)) : (document.addEventListener("mousedown", a, !0), document.addEventListener("mouseup", s, !0), document.addEventListener("mouseleave", s, !0));
    document.addEventListener("keydown", i);
    return () => {
      null != t && clearInterval(t);
      null != e && clearTimeout(e);
      E ? (document.removeEventListener("pointerdown", _, !0), document.removeEventListener("pointermove", g, !0), document.removeEventListener("pointerup", f, !0), document.removeEventListener("pointercancel", f, !0)) : (document.removeEventListener("mousedown", a, !0), document.removeEventListener("mouseup", s, !0), document.removeEventListener("mouseleave", s, !0));
      document.removeEventListener("keydown", i);
    };
  }, [reactImageUrl, reactName]);
  return reactImageUrl && r && !c ? jsx("div", {
    className: o,
    style: {
      willChange: "transform",
      transform: `translate3D(${r.x - t.x}px, ${r.y - 0}px, 0)`
    },
    children: jsx("img", {
      src: reactImageUrl,
      alt: ""
    })
  }) : null;
}
let $$tu0 = memo(function ({
  name: e,
  color: t,
  cursorType: r,
  chatMessage: s,
  isHighFiving: c,
  focusOnTextCursor: h,
  temporarilyHide: m,
  isCursorHandOnRight: g,
  isCursorPointingRight: f,
  editorType: E,
  isCursorAndChatAreaOffscreen: y,
  sessionId: b,
  prefersReducedMotion: T,
  isHighFivingSupported: I,
  useChatAnimation: S,
  disableMessageFade: v,
  isStaticView: A,
  isHoveringWidgetWithHiddenCursors: x
}) {
  let N = _$$G();
  let [C, w] = useState(1);
  let L = useMemo(() => GL(t), [t]);
  let P = getFeatureFlags().fpl_enhanced_contrast_toggle && N.enhancedContrast ? En(t) : t;
  let [D, k] = useState(O.NONE);
  let F = () => k(O.NONE);
  let [j, U] = useState(A);
  let [B, G] = s || [];
  useEffect(() => {
    let e;
    let t;
    B || G ? (U(!0), w(1)) : (U(!1), F());
    v || (e = setTimeout(() => {
      w(0);
    }, 5e3), t = setTimeout(() => {
      U(!1);
      F();
    }, 8e3));
    return () => {
      w(0);
      U(!1);
      F();
      clearTimeout(e);
      clearTimeout(t);
    };
  }, [B, G, v]);
  let V = "whiteboard" === E;
  useEffect(() => {
    if (V && B && !y) for (let e of R.keys()) {
      let t = R.get(e);
      t && eI(B, e) && k(t);
    }
  }, [B, y, V]);
  let H = useRef(null);
  useEffect(() => {
    if (H.current && H.current.innerText === B) {
      let e = sn.tryStop(`view_cursor_chat_message_${b}_${B}`);
      e && Vq.add("view_cursor_chat_message", e);
    }
  }, [B, H, b]);
  let z = getFeatureFlags().cursor_bot && f && r === z7E.DEFAULT;
  let W = r === z7E.PEN;
  let K = jsxs("div", {
    className: u()({
      [iU]: j,
      [VW]: !j,
      [S8]: !W,
      [z8]: z
    }),
    style: {
      color: L
    },
    children: [jsx("div", {
      className: j ? bu : iY,
      style: {
        opacity: j ? L === _$$e ? .8 : .5 : 1
      },
      dir: "auto",
      children: e
    }), j && jsxs("div", {
      className: Lo,
      style: {
        opacity: L === YN ? .8 * C : C,
        boxShadow: V ? void 0 : `2px 4px 8px ${P}40`
      },
      dir: "auto",
      children: [G && jsx("div", {
        className: G.length > 0 && (B?.length ?? 0) > 0 ? vD : "",
        children: G
      }), B && jsx("div", {
        ref: H,
        children: B
      })]
    }), jsx("div", {
      className: `${hD} ${n[D]}`,
      style: "NONE" !== D ? {
        background: P,
        overflow: "hidden",
        borderRadius: "2px 20px 20px 20px"
      } : {
        background: P
      },
      onAnimationEnd: () => F()
    })]
  });
  return h ? null : jsxs("div", {
    className: Dy,
    style: {
      opacity: x ? 0 : 1
    },
    "data-testid": `multiplayer-cursor-${b}`,
    children: [jsxs("div", {
      className: or,
      children: [I ? jsxs(Fragment, {
        children: [jsx("div", {
          className: _$$p3,
          children: jsx(e5, {
            color: t,
            isHighFiveHandOut: c,
            temporarilyHide: m,
            isCursorHandOnRight: g
          })
        }), jsx("img", {
          className: u()({
            [u0]: !0,
            [Bj]: !0,
            [DE]: c,
            [z8]: z
          }),
          src: eJ(t, c ? z7E.DEFAULT : r, !0),
          alt: `${c ? "highfive cursor" : "hand cursor"}`,
          onError: ({
            currentTarget: e
          }) => {
            e.onerror = null;
            e.src = eZ(t, !0);
          }
        })]
      }) : jsx("img", {
        className: u()({
          [u0]: !0,
          [z8]: z
        }),
        src: eJ(t, r, !0),
        alt: "cursor",
        onError: ({
          currentTarget: e
        }) => {
          e.onerror = null;
          e.src = eZ(t, !0);
        }
      }), b && jsx(_$$o, {
        sessionId: b
      })]
    }), (S || V) && !T ? jsx(eE, {
      content: B || "",
      children: K
    }) : K]
  });
});
let tp = memo(function ({
  isCursorAndChatAreaOffscreen: e,
  x: t,
  y: r,
  children: n
}) {
  let a = {
    display: e ? "none" : "block",
    willChange: "transform",
    transform: e ? "translate3D(-10000px, -10000px, 0)" : `translate3D(${t}px, ${r}px, 0)`
  };
  return jsx("div", {
    style: a,
    children: n
  });
});
function t_() {
  let e = _$$R(({
    multiplayer: {
      allUsers: e
    }
  }) => e.map(e => e.sessionID));
  let t = _X({
    subscribeToUpdates_expensive: !0
  });
  let r = useContext(viewportNavigatorContext);
  _$$x({
    subscribeToUpdates_EXPENSIVE: !1
  });
  let n = useMemo(() => r.getCommentsWrapperOffset(t), [r, t]);
  let o = KP();
  let d = XM();
  let c = d4(e => e.multiplayerEmoji);
  let u = !ut(Ez5?.uiState().hideMultiplayerCursors, !1);
  let p = p8("currentTool");
  let _ = ed();
  let [h, g, f, y] = function () {
    let [e] = useState(ei);
    !function (e) {
      let t = am();
      let [r, n] = fp(q);
      let i = ed();
      let o = function () {
        let e = d4(e => {
          let t = e.mirror.appModel.currentTool;
          return t === NLJ.SELECT || t === NLJ.HAND;
        });
        let t = d4(e => e.multiplayerEmoji?.type === "WHEEL" || e.multiplayerEmoji?.type === "REACTING_OR_CHATTING");
        let r = d4(e => e.mirror.appModel.activeCanvasEditModeType);
        return e && !t && r !== m1T.TEXT;
      }();
      let d = J2(UK().cursorHighFiveWiggle);
      let c = useRef(null);
      let u = useRef(0);
      useEffect(() => {
        o || e.stopWigglingNow();
      }, [e, o]);
      useEffect(() => {
        let r = e.onWiggleModeChange(r => {
          R9.sendHighFiveStatus(r);
          n(r);
          r && e.getHighFiveKeyPressed() ? t("figjam_cursor_high_five_events", {
            type: "enter_hands_up",
            source: "keyboard"
          }) : r && t("figjam_cursor_high_five_events", {
            type: "enter_hands_up",
            source: "mouse"
          });
        });
        return () => {
          r();
        };
      }, [e, n, t]);
      useEffect(() => {
        r ? (e.startOrRefreshWiggle(), e.setMouseLeftCanvas(!1), e.update()) : e.stopWigglingNow();
      }, [e, r]);
      let p = useCallback(() => {
        clearTimeout(u.current);
        u.current = setTimeout(() => {
          e.getHighFiveKeyPressed() && !e.getWiggleMode() && (e.update(), p());
        }, 250);
      }, [e]);
      useEffect(() => () => clearTimeout(u.current), []);
      let _ = Pj();
      let h = useCallback(t => {
        let r = t.metaKey || t.ctrlKey || t.altKey || t.shiftKey;
        if ("h" !== t.key || r) " " !== t.key && "/" !== t.key && !r && e.getWiggleMode() && (e.setHighFiveKeyPressed(!1), c.current = null, e.stopWigglingNow());else {
          if (!e.getHighFiveKeyPressed()) {
            let e = _.getState().mirror.appModel.currentTool;
            c.current = e;
          }
          e.setHighFiveKeyPressed(!0);
          e.update();
          p();
        }
      }, [e, p, _]);
      let m = useCallback(t => {
        "h" === t.key && (e.getWiggleMode() && null !== c.current && c.current !== NLJ.HAND && glU.triggerActionInUserEditScope("set-tool-default", {
          source: "cursor-high-fives"
        }), c.current = null, e.setHighFiveKeyPressed(!1), e.stopWigglingNow());
      }, [e, c]);
      let g = useCallback(t => {
        e.getWiggleMode() && (e.setHighFiveKeyPressed(!1), e.stopWigglingNow());
        (0 === t.button || 1 === t.button) && e.setMouseButtonHeld(!0);
      }, [e]);
      let f = useCallback(() => {
        e.setMouseButtonHeld(!1);
      }, [e]);
      let E = useCallback(t => {
        let r = !(t.target instanceof Element && t.target.closest("#fullscreen-root"));
        e.setMouseLeftCanvas(r);
        e.update({
          x: t.clientX,
          y: t.clientY
        });
      }, [e]);
      let y = i && o;
      Po("keydown", h, y);
      Po("keyup", m, y);
      Po("pointerdown", g, y);
      Po("pointerup", f, y);
      Po("mousemove", E, y && d);
    }(e.cursorWiggleDetector);
    let t = am();
    let [r, n] = useState([]);
    let [i, o] = useState("HIDDEN");
    let [d, c] = useState(new Set());
    let u = bs({
      subscribeToUpdates_expensive: !0
    });
    let p = useRef({
      oldEntitiesKey: "",
      oldHandsOnRightKey: "",
      oldWiggleMode: !1,
      oldWiggleStatus: "HIDDEN"
    });
    R9.useInfoBySessionIdSubscription(useMemo(() => _$$n(100, () => {
      let r = u.current;
      if (!r) return;
      (function (e, t, r) {
        if (!debugState || !h3O) return;
        let n = debugState.getState();
        let i = R9.infoBySessionId();
        if (!n.mirror || !n.mirror.appModel) return;
        let a = h3O.currentSessionID();
        let s = n.multiplayer;
        let o = n.mirror.appModel.currentPage;
        let d = s.observingSessionID;
        let c = ea(s.allUsers);
        let u = Object.values(i).filter(e => {
          if (!e.highFiveStatus || !e.mouse) return !1;
          let t = c[e.sessionId];
          return !!t && (t.sessionID === a || el(t, e, o, d, a));
        });
        t.cursorKinematics.updateCursors(u, a, t.cursorWiggleDetector.getWiggleMode(), t.cursorWiggleDetector.getMousePosition());
        let p = e?.zoomScale || 1;
        t.cursorCollisionDetector.updateAndCheckCollisions(u).forEach(e => function (e, t, r, n, i) {
          let [a, s] = e;
          let o = eo(n.cursorEntitySystem.getEntities(), a.sessionId);
          let d = eo(n.cursorEntitySystem.getEntities(), s.sessionId);
          if (o && d) return;
          let c = a.sessionId === r.toString();
          let u = s.sessionId === r.toString();
          let p = a.mouse.canvasSpacePosition;
          let _ = s.mouse.canvasSpacePosition;
          let h = X.computeMidpoint(p, _);
          h.y -= 38 / t;
          let m = p.x > _.x;
          let g = c || u ? c : m;
          (c && !o || u && !d) && n.cursorWiggleDetector.startOrRefreshWiggle();
          e.forEach((e, r) => {
            if (!eo(n.cursorEntitySystem.getEntities(), e.sessionId) && e.mouse) {
              let i = es(e.mouse.canvasSpacePosition, n.cursorKinematics, e.sessionId, t, c);
              _$$eD && setTimeout(() => {
                _$$H.trigger(JA.GENERIC);
              }, 400);
              n.cursorEntitySystem.addEntity(new et({
                startingRelativePosition: {
                  x: (i.position.x - h.x) * t,
                  y: (i.position.y - h.y) * t
                },
                startingRotation: i.rotation,
                position: h,
                viewportZoomScale: t,
                cursorOnRightForWindup: 0 === r ? m : !m,
                cursorOnRightForCollision: 0 === r ? g : !g,
                sessionId: e.sessionId,
                getUserCursorTransform: () => es(R9.infoBySessionId()[e.sessionId]?.mouse?.canvasSpacePosition || {
                  x: 0,
                  y: 0
                }, n.cursorKinematics, e.sessionId, t, 0 === r ? c : u)
              }));
            }
          });
          n.cursorEntitySystem.addEntity(new ee([{
            time: .3,
            event: () => {
              n.cursorEntitySystem.addEntity(new J(h));
              n.cursorEntitySystem.addEntity(new Z(h));
              for (let e = 0; e < 6; e++) n.cursorEntitySystem.addEntity(new Q(h));
            }
          }]));
          i("figjam_cursor_high_five_events", {
            type: "give_high_five"
          });
        }(e, p, a, t, r));
        t.cursorEntitySystem.update();
      })(r, e, t);
      let i = e.cursorEntitySystem.getEntities();
      let a = i.map(e => e.id).join(",");
      a !== p.current.oldEntitiesKey && n(i);
      let s = e.cursorWiggleDetector.getWiggleMode();
      let d = e.cursorWiggleDetector.getAboutToHide() ? "ABOUT_TO_HIDE" : s ? "SHOWN" : "HIDDEN";
      d !== p.current.oldWiggleStatus && o(d);
      let _ = e.cursorKinematics.getHandsOnRight();
      let h = Array.from(_.keys()).join(",");
      h !== p.current.oldHandsOnRightKey && c(new Set(_));
      p.current.oldEntitiesKey = a;
      p.current.oldWiggleMode = s;
      p.current.oldWiggleStatus = d;
      p.current.oldHandsOnRightKey = h;
    }), [u, t, e]));
    return [r, i, !e.cursorWiggleDetector.getMouseLeftCanvas(), d];
  }();
  let b = "HIDDEN" !== g;
  let w = mZ.NONE;
  let O = p === NLJ.HAND ? NLJ.HAND : NLJ.SELECT;
  let R = b ? NLJ.SELECT : O;
  "REACTING_OR_CHATTING" === c.type && c.isChatting ? w = mZ.CHAT : b && (w = mZ.HIGH_FIVE);
  let L = function (e) {
    let t = e === mZ.NONE;
    let [r, n] = useState(!t);
    useEffect(() => {
      let e = () => n(!1);
      if (!t) {
        n(!0);
        return;
      }
      if (!Ay.isIpad && !Ay.isMeetDevice) {
        document.addEventListener("mousemove", e);
        return () => document.removeEventListener("mousemove", e);
      }
      e();
    }, [t]);
    return r;
  }(w);
  if (null == t) return null;
  let P = {
    left: `${0 | t.x}px`,
    top: `${0 | t.y}px`,
    width: `${0 | t.width}px`,
    height: `${0 | t.height}px`
  };
  let D = (0 - t.offsetX) * t.zoomScale + n.x;
  let k = (0 - t.offsetY) * t.zoomScale + n.y;
  let M = {
    top: `${t.y + t.height / 2}px`,
    left: `${t.x + t.width / 2}px`,
    transform: `translate(${D}px, ${k}px)`
  };
  return jsxs(Fragment, {
    children: [jsx(_$$p, {
      children: jsx("div", {
        "aria-hidden": !0,
        "data-forward-events-to-fullscreen": !0,
        className: Lw,
        style: M,
        children: u && jsxs("div", {
          className: d ? W7 : PT,
          children: [jsx(eh, {
            viewportInfo: t
          }), e.map(e => e === o ? null : jsx(tm, {
            sessionID: e,
            viewportInfo: t,
            cursorEntities: h,
            cursorHandsOnRight: y,
            isHighFivingSupported: _
          }, e))]
        })
      })
    }), jsxs("div", {
      "aria-hidden": !0,
      "data-forward-events-to-fullscreen": !0,
      className: zr,
      style: P,
      children: [L && jsxs(AS, {
        currentToolForCursor: R,
        children: [w === mZ.CHAT && jsx(ez, {}), jsx(e0, {
          cursorWiggleStatus: g,
          temporarilyHide: !f || eo(h, o.toString()),
          isCursorHandOnRight: _$$I(y, o.toString())
        })]
      }), _ && u ? jsx(eQ, {
        viewportInfo: t,
        cursorEntities: h
      }) : null, t ? jsx(td, {
        viewportInfo: t,
        multiplayerCursorsEnabled: u
      }) : null, t && "REACTING_OR_CHATTING" === c.type ? jsx(tc, {
        multiplayerEmoji: c,
        viewportInfo: t
      }) : null]
    })]
  });
}
let th = (e, t, r) => {
  let n = useRef(null);
  n.current = e?.sessionId ?? n.current;
  useEffect(() => {
    n.current && r && zw?.setOtherUserChattingState(n.current, t);
  }, [r, t]);
  useEffect(() => (n.current && zw?.setOtherUserChattingState(n.current, !1), () => {
    n.current && zw?.setOtherUserChattingState(n.current, !1);
  }), []);
};
function tm({
  sessionID: e,
  viewportInfo: t,
  cursorEntities: r,
  cursorHandsOnRight: n,
  isHighFivingSupported: a
}) {
  let o = d4(({
    multiplayer: {
      allUsers: t
    }
  }) => t.find(t => t.sessionID === e));
  let l = p8("currentPage");
  let c = _$$j();
  let u = lg();
  let p = J2(_$$d().showOutlines);
  let _ = _$$S();
  let m = d4(({
    multiplayer: {
      observingSessionID: e
    }
  }) => -1 !== e);
  let g = R9.useInfoBySessionId({
    updateSynchronously: m
  })[e];
  let E = !_ && g ? g.chatMessage : [null];
  let b = KP();
  let S = _E();
  let N = !!(o && g?.mouse && el(o, g, l, S, b));
  if (th(g, !!(E && E.length && E[0]), N), !N || !g?.mouse) return null;
  let C = !!getFeatureFlags().ee_text_selection_in_mp && g.focusOnTextCursor;
  let w = p ? "#848484" : o.color;
  let O = g.mouse.canvasSpacePosition;
  let R = Z0(t, O);
  let L = function ({
    x: e,
    y: t
  }, {
    width: r,
    height: n
  }) {
    return e < 0 || t < 0 || e > r || t > n;
  }(R, t) && function ({
    x: e,
    y: t
  }) {
    return e < -400 || t < -100;
  }(R);
  let P = t.zoomScale;
  let D = (P - 1) * O.x;
  let k = (P - 1) * O.y;
  let M = o.sessionID.toString();
  return jsx(tp, {
    x: O.x + D,
    y: O.y + k,
    isCursorAndChatAreaOffscreen: L,
    children: jsx($$tu0, {
      chatMessage: E,
      color: w,
      cursorType: g.cursorType,
      editorType: u,
      focusOnTextCursor: C ?? !1,
      isCursorAndChatAreaOffscreen: L,
      isCursorHandOnRight: _$$I(n, M),
      isHighFiving: g.highFiveStatus,
      isHighFivingSupported: a,
      isHoveringWidgetWithHiddenCursors: g.isHoveringWidgetWithHiddenCursors,
      name: o.name,
      prefersReducedMotion: c,
      sessionId: o.sessionID,
      temporarilyHide: eo(r, M)
    })
  });
}
export function $$tg1() {
  return jsx(tH, {
    boundaryKey: "MultiplayerCursors",
    fallback: H4.NONE_I_KNOW_WHAT_IM_DOING,
    children: jsx(t_, {})
  });
}
export const k_ = $$tu0;
export const yL = $$tg1;