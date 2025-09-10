import { jsx, jsxs } from "react/jsx-runtime";
import { forwardRef, Component, PureComponent } from "react";
import { l as _$$l } from "../905/479687";
import s from "classnames";
import { e as _$$e } from "../905/280005";
import { Uz } from "../905/63728";
import { d as _$$d } from "../905/884707";
import { RecordingComponent, handleMouseEvent, handlePointerEvent } from "../figma_app/878298";
import { L } from "../905/408237";
import { B as _$$B } from "../905/714743";
import { s as _$$s } from "../cssbuilder/589278";
import { tf, h3 } from "../figma_app/831799";
import { _R } from "../figma_app/314264";
import { Ib } from "../905/129884";
import { N } from "../905/551536";
import { GC, zi, xZ, Ij, fY, HM, xJ, oC, ky, OK, I2, rd, FO, OY, Iw, dy, sY, yT, hz, _Z, ki, d1, ri, dQ, QC, z3, G, kv, hP, HI, Eg, Pf, MH, X7, _d } from "../905/190597";
import { A } from "../5724/663128";
var o = s;
let T = null;
export function $$I23(e) {
  T = e;
}
export function $$S17(e) {
  return jsx("div", {
    className: o()(GC, e.reversed && zi, e.className),
    children: e.children
  });
}
export class $$v30 extends RecordingComponent {
  constructor() {
    super(...arguments);
    this.onKeyDown = e => {
      T?.(e) || (this.props.onKeyDown?.(e), e.keyCode === Uz.ESCAPE && e.target.blur());
    };
    this.onClick = handleMouseEvent(this, "click", e => {
      this.props.onClick?.(e);
    });
    this.onPointerDown = handlePointerEvent(this, "pointerdown", e => {
      this.props.onPointerDown?.(e);
    });
  }
  render() {
    let {
      forwardedRef,
      ...t
    } = this.props;
    t.className = `${this.props.defaultClass} ${this.props.className || ""}`;
    let r = this.props.dataTestId;
    delete t.defaultClass;
    delete t.recordingKey;
    delete t.dataTestId;
    this.props.onClick && this.props.recordingKey && (t.onClick = this.onClick);
    this.props.onPointerDown && this.props.recordingKey && (t.onPointerDown = this.onPointerDown);
    return jsx("button", {
      ref: forwardedRef,
      onKeyDown: this.onKeyDown,
      ...t,
      "data-testid": r,
      children: this.props.children
    });
  }
}
$$v30.displayName = "ButtonBase";
let $$A0 = forwardRef(function ({
  fullWidth: e,
  ...t
}, r) {
  return jsx($$v30, {
    forwardedRef: r,
    defaultClass: o()(xZ, e && Ij),
    ...t
  });
});
let $$x31 = tf($$A0);
export class $$N32 extends Component {
  render() {
    let {
      fullWidth,
      ...t
    } = this.props;
    return jsx($$v30, {
      defaultClass: o()(fY, fullWidth && Ij),
      ...t
    });
  }
}
$$N32.displayName = "BigButtonPrimary";
export let $$C21 = tf($$N32);
export class $$w22 extends Component {
  render() {
    return jsx($$v30, {
      defaultClass: HM,
      type: "button",
      ...this.props
    });
  }
}
$$w22.displayName = "ButtonSecondary";
export let $$O29 = tf($$w22);
class R extends Component {
  render() {
    let {
      fullWidth,
      ...t
    } = this.props;
    return jsx($$v30, {
      defaultClass: o()(xJ, fullWidth && Ij),
      type: "button",
      ...t
    });
  }
}
R.displayName = "BigButtonSecondary";
export let $$L1 = tf(R);
export class $$P27 extends Component {
  render() {
    return jsx($$v30, {
      defaultClass: oC,
      type: "button",
      ...this.props
    });
  }
}
$$P27.displayName = "ButtonSecondaryNegative";
export class $$D25 extends Component {
  render() {
    return jsx($$v30, {
      defaultClass: ky,
      type: "button",
      ...this.props
    });
  }
}
$$D25.displayName = "ButtonNegative";
export let $$k24 = tf($$D25);
class M extends Component {
  render() {
    return jsx($$v30, {
      defaultClass: OK,
      type: "button",
      ...this.props
    });
  }
}
M.displayName = "BigButtonNegative";
export class $$F16 extends Component {
  render() {
    return jsx($$v30, {
      defaultClass: I2,
      ...this.props
    });
  }
}
$$F16.displayName = "ButtonWhite";
export let $$j7 = tf($$F16);
class U extends Component {
  render() {
    return jsx($$v30, {
      defaultClass: rd,
      ...this.props
    });
  }
}
U.displayName = "ButtonInverse";
class B extends Component {
  render() {
    let {
      fullWidth,
      ...t
    } = this.props;
    return jsx($$v30, {
      defaultClass: o()(FO, fullWidth && Ij),
      ...t
    });
  }
}
B.displayName = "BigButtonInverse";
export let $$G5 = tf(B);
class V extends Component {
  render() {
    return jsx($$v30, {
      defaultClass: OY,
      ...this.props
    });
  }
}
V.displayName = "ButtonGreen";
class H extends Component {
  render() {
    let {
      customClassName,
      ...t
    } = this.props;
    return jsx($$v30, {
      defaultClass: Iw,
      className: customClassName,
      ...t
    });
  }
}
H.displayName = "ButtonGrey";
tf(V);
class z extends Component {
  render() {
    return jsx($$v30, {
      defaultClass: this.props.solidWhenDisabled ? dy : sY,
      ...this.props
    });
  }
}
z.displayName = "BigButtonGreen";
class W extends Component {
  render() {
    return jsx($$v30, {
      defaultClass: yT,
      ...this.props
    });
  }
}
W.displayName = "BigButtonBlack";
tf(W);
class K extends Component {
  render() {
    let e = `${xZ} ${this.props.className || ""}`;
    let t = {
      ...this.props,
      className: e,
      rel: "noopener"
    };
    return jsx("a", {
      ...t,
      children: this.props.children
    });
  }
}
K.displayName = "ButtonLink";
export let $$Y26 = tf(K);
class $ extends Component {
  render() {
    let {
      fullWidth,
      ...t
    } = this.props;
    let r = o()(fY, this.props.fullWidth && Ij);
    let i = `${r} ${this.props.className || ""}`;
    t = {
      ...t,
      className: i,
      rel: "noopener"
    };
    return jsx("a", {
      ...t,
      children: this.props.children
    });
  }
}
$.displayName = "ButtonLink";
tf($);
class X extends Component {
  render() {
    let e = `${HM} ${this.props.className || ""}`;
    let t = {
      ...this.props,
      className: e,
      rel: "noopener"
    };
    return jsx("a", {
      ...t,
      children: this.props.children
    });
  }
}
X.displayName = "ButtonSecondaryLink";
export let $$q8 = tf(X);
class J extends Component {
  render() {
    let e = `${hz} ${this.props.className || ""}`;
    let t = {
      ...this.props,
      className: e,
      rel: "noopener"
    };
    return jsx("a", {
      ...t,
      children: this.props.children
    });
  }
}
J.displayName = "BigButtonSecondaryLink";
let $$Z12 = 255;
let $$Q33 = 118;
let $$ee20 = forwardRef(function ({
  className: e,
  ...t
}, r) {
  return jsx(L, {
    className: o()(_Z, e),
    ..._$$d(t),
    ref: r
  });
});
export class $$et19 extends Component {
  render() {
    let e = `${ki} ${this.props.className || ""}`;
    let t = {
      ...this.props,
      className: e
    };
    return jsx(L, {
      ...t
    });
  }
}
$$et19.displayName = "BigTextInput";
let er = h3(L);
export class $$en6 extends Component {
  render() {
    return jsxs("div", {
      className: this.props.className || (this.props.disabled ? d1 : ri),
      children: [jsx("label", {
        htmlFor: this.props.htmlName,
        className: o()(dQ, {
          [QC]: this.props.value,
          [z3]: this.props.hasError
        }),
        children: this.props.label
      }), this.props.trackingFieldName && jsx(er, {
        autoComplete: this.props.autoCompleteName,
        dataTestId: this.props.dataTestId,
        disabled: this.props.disabled,
        id: this.props.htmlName,
        maxLength: this.props.maxLength || 50,
        name: this.props.htmlName,
        onBlur: this.props.onBlur,
        onChange: this.props.onChange,
        onFocus: this.props.onFocus,
        onKeyPress: this.props.onKeyPress,
        placeholder: this.props.placeholder || this.props.label,
        required: this.props.required,
        trackingFieldName: this.props.trackingFieldName,
        trackingPopulationLevel: this.props.value ? _R.POPULATED_COMPLETE : _R.NOT_POPULATED,
        type: this.props.type || "text",
        value: this.props.value
      }), !this.props.trackingFieldName && jsx(L, {
        autoComplete: this.props.autoCompleteName,
        dataTestId: this.props.dataTestId,
        disabled: this.props.disabled,
        id: this.props.htmlName,
        maxLength: this.props.maxLength || 50,
        name: this.props.htmlName,
        onBlur: this.props.onBlur,
        onChange: this.props.onChange,
        onFocus: this.props.onFocus,
        onKeyPress: this.props.onKeyPress,
        placeholder: this.props.placeholder || this.props.label,
        required: this.props.required,
        type: this.props.type || "text",
        value: this.props.value
      }), this.props.tooltip && jsx(_$$B, {
        className: G,
        svg: A,
        "data-tooltip-type": Ib.TEXT,
        "data-tooltip": this.props.tooltip,
        "data-tooltip-timeout-delay": 300
      })]
    });
  }
}
export class $$ei28 extends PureComponent {
  constructor(e) {
    super(e);
    this.documentKeyDown = e => {
      e.keyCode === Uz.TAB && this.setState({
        showFocus: !0
      });
    };
    this.documentMouseDown = e => {
      this.setState({
        showFocus: !1
      });
    };
    this.onFocus = e => {
      this.state.showFocus || e.target.blur();
    };
    this.classNameForInput = () => {
      let e = `${kv} ${this.props.className || ""}`;
      this.state.showFocus && (e += ` ${hP}`);
      return e;
    };
    this.state = {
      showFocus: !1
    };
  }
  componentDidMount() {
    document.addEventListener("keydown", this.documentKeyDown);
    document.addEventListener("mousedown", this.documentMouseDown);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.documentKeyDown);
    document.removeEventListener("mousedown", this.documentMouseDown);
  }
  render() {
    let {
      svgOverride,
      classOverride,
      checked,
      ...i
    } = this.props;
    return jsxs("div", {
      className: HI,
      children: [jsx("input", {
        ...i,
        type: "checkbox",
        onFocus: this.onFocus,
        className: classOverride || this.classNameForInput(),
        checked
      }), checked ? jsx("div", {
        className: Eg,
        children: jsx(_$$l, {})
      }) : null]
    });
  }
}
export function $$ea3(e) {
  let t = `${Pf} ${e.className || ""}`;
  return jsx("label", {
    ...e,
    className: t
  });
}
$$ei28.displayName = "Checkbox";
let $$es9 = N;
let $$eo10 = tf($$es9);
export class $$el2 extends Component {
  render() {
    let {
      canFocus,
      trusted,
      className,
      ...i
    } = this.props;
    let a = `${MH} ${className || ""}`;
    let s = {
      ...i,
      className: a,
      rel: trusted ? "noopener" : "noopener nofollow noreferrer ugc",
      onClick: e => {
        this.props.onClick && this.props.onClick(e);
        this.props.href && _$$e(this.props.href, e);
      }
    };
    canFocus && (s = {
      href: "#",
      tabIndex: 0,
      ...s
    });
    return jsx("a", {
      ...s,
      children: this.props.children
    });
  }
}
$$el2.displayName = "Link";
export let $$ed13 = tf($$el2);
export class $$ec14 extends Component {
  render() {
    let e = `${X7} ${this.props.className || ""}`;
    let t = {
      ...this.props,
      className: e
    };
    return jsx("select", {
      ...t
    });
  }
}
export function $$eu4(e) {
  let t = e.multiple ? 8 * e.multiple : e.value ? e.value : 0;
  return "x" === e.direction ? jsx("div", {
    style: {
      width: t
    },
    className: _$$s.flexShrink0.$,
    "aria-hidden": "true"
  }) : jsx("div", {
    style: {
      height: t
    },
    className: _$$s.flexShrink0.$,
    "aria-hidden": "true"
  });
}
$$ec14.displayName = "BigSelect";
$$eu4.displayName = "Spacing";
let $$ep11 = tf(_$$B);
let $$e_15 = tf(e => jsx("a", {
  ...e,
  children: e.children
}));
let $$eh18 = tf(function (e) {
  return jsx($$v30, {
    defaultClass: o()(_d, e.className),
    ...e
  });
});
export const $$ = $$A0;
export const $9 = $$L1;
export const CY = $$el2;
export const JU = $$ea3;
export const Kz = $$eu4;
export const LA = $$G5;
export const Lf = $$en6;
export const M7 = $$j7;
export const NY = $$q8;
export const N_ = $$es9;
export const Ph = $$eo10;
export const RW = $$ep11;
export const TA = $$Z12;
export const Us = $$ed13;
export const VE = $$ec14;
export const Yo = $$e_15;
export const cw = $$F16;
export const e2 = $$S17;
export const eM = $$eh18;
export const il = $$et19;
export const ks = $$ee20;
export const nD = $$C21;
export const nR = $$w22;
export const ny = $$I23;
export const qM = $$k24;
export const qZ = $$D25;
export const rb = $$Y26;
export const s6 = $$P27;
export const tB = $$ei28;
export const tM = $$O29;
export const u4 = $$v30;
export const vd = $$x31;
export const vv = $$N32;
export const wG = $$Q33;
