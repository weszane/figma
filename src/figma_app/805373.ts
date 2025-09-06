import { jsx, jsxs } from "react/jsx-runtime";
import { Component } from "react";
import { E as _$$E } from "../905/632989";
import { A as _$$A } from "../905/410311";
import o from "classnames";
import { oW } from "../905/675859";
import { Ex, zE } from "../figma_app/919079";
import { B as _$$B } from "../905/714743";
import { renderI18nText, getI18nString } from "../905/303541";
import { E as _$$E2 } from "../905/984674";
import { Ib } from "../905/129884";
import { Xx, us, $L, sC } from "../figma_app/136698";
import { A as _$$A2 } from "../6828/321914";
import { A as _$$A3 } from "../6828/666729";
import { A as _$$A4 } from "../6828/741368";
import { A as _$$A5 } from "../6828/586295";
import { A as _$$A6 } from "../6828/197318";
import { A as _$$A7 } from "../6828/529093";
import { A as _$$A8 } from "../6828/31844";
import { A as _$$A9 } from "../6828/795123";
import { A as _$$A0 } from "../6828/391394";
import { A as _$$A1 } from "../6828/388456";
import { A as _$$A10 } from "../6828/900825";
import { A as _$$A11 } from "../6828/151530";
import { A as _$$A12 } from "../6828/303995";
import { A as _$$A13 } from "../6828/842644";
import { A as _$$A14 } from "../6828/964277";
import { A as _$$A15 } from "../6828/743990";
import { A as _$$A16 } from "../6828/690855";
import { A as _$$A17 } from "../6828/810288";
import { A as _$$A18 } from "../6828/488285";
import { A as _$$A19 } from "../6828/296555";
var l = o;
let g = "avatar--avatar--fFibd";
let f = "avatar--dim--UbqLc";
let E = "avatar--avatarWithHandle--Z3934";
let y = "avatar--avatarWithOutwardBorder--3JJ57";
let b = "avatar--avatarWithInwardBorder--L469R";
let T = "avatar--clickableAvatarWithHandle--d90vX";
let V = [_$$A2, _$$A3, _$$A4, _$$A5, _$$A6, _$$A7, _$$A8, _$$A9, _$$A0, _$$A1, _$$A10, _$$A11, _$$A12, _$$A13, _$$A14, _$$A15, _$$A16, _$$A17];
let $$H = ["avatar--workspaceAvatarBlue--XbbpI", "avatar--workspaceAvatarPurple--FOGSP", "avatar--workspaceAvatarGreen--PWm5o", "avatar--workspaceAvatarTeal--4j3FH"];
let z = [];
for (let e = 0; e < V.length * $$H.length; e += 1) {
  let t = e % V.length;
  let r = V[t];
  let n = (e + Math.floor(e / V.length)) % $$H.length;
  let i = $$H[n];
  z.push({
    svgSrc: r,
    className: i
  });
}
export function $$W12(e) {
  return e.startsWith("https://www.gravatar.com/avatar/");
}
export function $$K11(e) {
  return e && !$$W12(e) ? e : void 0;
}
let Y = {
  CIRCLE: `${g} avatar--circle--ag36Q`,
  SQUARE: `${g} avatar--square--p4eL1`,
  ROUNDED_SQUARE: `${g} avatar--roundedSquare--cq522`
};
function $(e) {
  return "number" == typeof e ? {
    imgSize: e,
    fallbackSize: e
  } : e;
}
class X {
  constructor(e, t) {
    this.lower = e;
    this.upper = t;
  }
  contains(e) {
    return e >= this.lower && e < this.upper;
  }
}
let q = new X(65, 91);
let J = new X(97, 123);
let Z = new X(48, 58);
export class $$Q2 extends Component {
  render() {
    let e = {
      display: "flex",
      justifyContent: "center",
      color: this.props.tint || Xx(this.props.color),
      backgroundColor: this.props.color || void 0,
      opacity: this.props.opacity
    };
    let t = this.props.enabled || !0;
    let {
      size,
      fontSize
    } = this.props;
    size && (e.width = `${size}px`, e.height = `${size}px`, e.lineHeight = `${size}px`, e.fontSize = `${fontSize ?? size / 2}px`);
    let a = Y[this.props.shape || "CIRCLE"];
    return jsx("span", {
      "data-testid": this.props.dataTestId,
      style: e,
      className: l()(a, this.props.className || "", {
        [f]: !t,
        [y]: "outward" === this.props.borderStyle,
        [b]: "inward" === this.props.borderStyle
      }),
      "aria-hidden": "true",
      children: this.props.children
    });
  }
}
class ee extends Component {
  render() {
    return jsx($$Q2, {
      dataTestId: "initial-avatar",
      ...this.props,
      children: this.props.initial
    });
  }
}
export function $$et8(e) {
  let t = {};
  if (e.size && e.svgSizeRatio) {
    let r = e.size * e.svgSizeRatio;
    t.width = `${r}px`;
    t.height = `${r}px`;
  }
  if (!e.removeCustomFill) {
    let r = Xx(e.color);
    t.fill = r;
  }
  return jsx($$Q2, {
    ...e,
    children: jsx("div", {
      style: t,
      children: jsx(_$$B, {
        svg: e.svg,
        autosize: !0,
        ariaLabel: e.label
      })
    })
  });
}
class er extends Component {
  render() {
    let {
      size
    } = this.props;
    let t = size ? `${size}px` : void 0;
    let r = Y[this.props.shape || "CIRCLE"];
    let i = this.props.enabled || !0;
    return jsx(_$$B, {
      className: `${r} ${this.props.className || ""} ${i ? "" : f}`,
      style: this.props.style || {},
      svg: this.props.src,
      autosize: !0,
      width: t,
      height: t,
      dataTestId: "svg-avatar",
      ariaLabel: this.props.label
    });
  }
}
class en extends Component {
  constructor(e) {
    super(e);
    this.state = {
      loadError: !1
    };
  }
  render() {
    let e = {};
    let t = this.props.style || {};
    if (this.props.size) {
      let r = this.state.loadError ? $(this.props.size)?.fallbackSize : $(this.props.size)?.imgSize;
      let n = `${r}px`;
      e.width = n;
      e.height = n;
      t.width = n;
      t.height = n;
    }
    let r = this.props.enabled || !0;
    let i = Y[this.props.shape || "CIRCLE"];
    let a = this.state.loadError || !this.props.imgUrl ? this.props.children : jsx(oW, {
      "data-testid": "image-avatar",
      className: `${r ? "" : f}`,
      style: e,
      src: this.props.imgUrl,
      onError: () => this.setState({
        loadError: !0
      }),
      alt: this.props.label ?? ""
    });
    return jsx("div", {
      className: l()(i, this.props.className, {
        [f]: !r,
        [y]: "outward" === this.props.borderStyle,
        [b]: "inward" === this.props.borderStyle
      }),
      style: t,
      children: a
    });
  }
}
let ei = [q, J, Z];
let ea = {
  colors: us,
  getInitial: e => e ? e[0] : null,
  defaultFallbackAvatarSvg: _$$A18
};
let es = ["fallback_text", "handle", "name", "email"];
let eo = (e, t = ea) => class extends Component {
  constructor() {
    super(...arguments);
    this.computeFallbackInitial = () => {
      let e = eg((this.props.initializableEntityProperties ? this.props.initializableEntityProperties : es).map(e => this.props.entity[e]));
      return e && "string" == typeof e ? t.getInitial(e) : null;
    };
    this.computeFallbackColor = () => $L(this.props.entity.id, t.colors);
  }
  render() {
    let r = this.props.fallbackInitial || this.computeFallbackInitial();
    let i = this.computeFallbackColor() || null;
    let a = this.props.entity.img_url || this.props.entity.imageURL || this.props.entity.imageUrl || this.props.entity.imgUrl || null;
    return jsx(e, {
      imgUrl: a,
      fallbackInitial: r,
      fallbackColor: this.props.defaultFallbackAvatarSvg && !r ? null : i,
      fallbackTintColor: this.props.defaultFallbackAvatarSvg ? void 0 : t.defaultFallbackTintColor,
      ...this.props,
      defaultFallbackAvatarSvg: this.props.defaultFallbackAvatarSvg || t.defaultFallbackAvatarSvg
    });
  }
};
class el extends Component {
  renderFallback() {
    let {
      size,
      fontSize,
      fallbackSvg,
      avatarSvg,
      svgSizeRatio
    } = this.props;
    let s = $(size)?.fallbackSize;
    if (avatarSvg) return jsx($$et8, {
      color: this.props.fallbackColor,
      enabled: this.props.enabled,
      fontSize,
      label: this.props.label,
      opacity: this.props.opacity,
      shape: this.props.shape,
      size: s,
      svg: avatarSvg,
      svgSizeRatio,
      tint: this.props.fallbackTintColor
    });
    if (fallbackSvg) return jsx(er, {
      size: $(size)?.fallbackSize,
      src: fallbackSvg,
      shape: this.props.shape,
      label: this.props.label
    });
    if (this.props.hideFallbackInitial) return jsx($$Q2, {
      size: $(size)?.fallbackSize,
      fontSize,
      className: this.props.className,
      tint: this.props.fallbackTintColor,
      color: this.props.fallbackColor,
      enabled: this.props.enabled,
      shape: this.props.shape
    });
    let o = this.props.fallbackInitial;
    return o ? jsx(ee, {
      borderStyle: this.props.borderStyle,
      className: this.props.className,
      color: this.props.fallbackColor,
      enabled: this.props.enabled,
      fontSize,
      initial: o,
      shape: this.props.shape,
      size: $(size)?.fallbackSize,
      tint: this.props.fallbackTintColor
    }) : this.props.defaultFallbackAvatarSvg ? jsx(er, {
      className: this.props.className,
      size: $(size)?.fallbackSize,
      src: this.props.defaultFallbackAvatarSvg,
      style: {
        fill: this.props.fallbackTintColor || void 0,
        background: this.props.fallbackColor || void 0
      },
      enabled: this.props.enabled,
      shape: this.props.shape,
      label: this.props.label
    }) : jsx($$Q2, {
      size: $(size)?.fallbackSize,
      fontSize,
      className: this.props.className,
      tint: this.props.fallbackTintColor,
      color: this.props.fallbackColor,
      enabled: this.props.enabled,
      shape: this.props.shape
    });
  }
  render() {
    return !this.props.imgUrl || $$W12(this.props.imgUrl) ? this.renderFallback() : jsx(en, {
      size: this.props.size || null,
      imgUrl: this.props.imgUrl,
      className: `${this.props.className || ""}`,
      enabled: this.props.enabled,
      shape: this.props.shape,
      borderStyle: this.props.borderStyle,
      label: this.props.label,
      children: this.renderFallback()
    });
  }
}
el.displayName = "Avatar";
let ed = eo(el, {
  ...ea,
  getInitial: e => {
    let t = e.charCodeAt(0);
    return ei.some(e => e.contains(t)) ? e[0] : null;
  }
});
let $$ec3 = ed;
export function $$eu10({
  entity: e,
  size: t = 40,
  shape: r = "SQUARE"
}) {
  if (e.imgUrl) return jsx(ed, {
    shape: r,
    entity: e,
    size: t
  });
  let i = sC(e?.id, z);
  return jsx(er, {
    src: i.svgSrc,
    size: t,
    shape: r,
    className: i.className
  });
}
export let $$ep4 = eo(el, {
  ...ea,
  defaultFallbackAvatarSvg: _$$A19,
  getInitial: e => e.charCodeAt(0) === e.codePointAt(0) ? e[0] : null
});
export function $$e_7(e) {
  return jsx($$ep4, {
    shape: "SQUARE",
    ...e
  });
}
export function $$eh5(e) {
  return jsx("div", {
    className: e.isHovered ? "avatar--multiTeamAvatarContainerHovered--2V7AO" : "avatar--multiTeamAvatarContainer--Rb-Kn",
    children: e.teams.slice(0, 3).map(t => jsx($$e_7, {
      entity: t,
      ...e
    }, t.id))
  });
}
class em extends Component {
  render() {
    let e = this.props.size || 0;
    let t = Math.round(e / 4) + 1;
    let r = Math.round(t / 5);
    return jsxs("span", {
      className: "avatar--avatarBellWrapper--sd6MY",
      style: e ? {
        width: `${e}px`,
        height: `${e}px`
      } : void 0,
      children: [this.props.showBell && jsx("div", {
        className: "avatar--bell--Lk6s9",
        style: e ? {
          width: `${t}px`,
          height: `${t}px`,
          top: `-${r}px`,
          right: `-${r}px`
        } : void 0
      }), this.props.children]
    });
  }
}
em.displayName = "AvatarBellWrapper";
let eg = (e = [], t = "?") => e.find(e => e) || t;
let ef = (e, t) => class extends Component {
  constructor() {
    super(...arguments);
    this.onClick = e => {
      this.props.onClick && this.props.onClick(e, this.props.entity);
    };
  }
  render() {
    let r = this.props["data-tooltip-proxy-element-id"] || `avatar_${this.props.entity.id}_tooltip_proxy`;
    let i = this.props.onClick ? _$$E : "div";
    return jsxs(i, {
      className: l()(E, this.props.className, {
        [T]: this.props.onClick,
        "avatar--disabledDimAvatarWithHandle--5l6cM": this.props.enabled
      }),
      onClick: this.onClick,
      "data-tooltip-proxy-element-id": r,
      "data-onboarding-key": this.props["data-onboarding-key"],
      children: [jsx("div", {
        id: r,
        "data-tooltip-type": Ib.TEXT,
        "data-tooltip": this.props["data-tooltip"],
        "data-tooltip-offset-x": this.props["data-tooltip-offset-x"],
        "data-tooltip-offset-y": this.props["data-tooltip-offset-y"],
        "data-tooltip-max-width": this.props["data-tooltip-max-width"],
        children: e && jsx(e, {
          ...this.props,
          className: void 0
        })
      }), jsx(t, {
        ...this.props
      }), this.props.children]
    });
  }
};
export var $$eE0 = (e => (e.DEFAULT = "default", e.HEADING_MEDIUM = "heading_medium", e))($$eE0 || {});
let ey = {
  default: void 0,
  heading_medium: "avatar--labelHeadingMedium--IeX2-"
};
class eb extends Component {
  render() {
    let {
      labelSize = "default"
    } = this.props;
    let t = ey[labelSize];
    let r = this.props.showTruncatedTextTooltip ? jsx(_$$E2, {
      truncate: !0,
      children: this.props.text
    }) : jsx("span", {
      className: "avatar--handle--wlTXK",
      children: this.props.text
    });
    let i = this.props.showTruncatedTextTooltip ? void 0 : this.props.tooltipText ?? void 0;
    return jsxs("div", {
      className: l()("avatar--info--vDGTn", t),
      title: i,
      children: [jsxs("div", {
        className: l()("avatar--handleRow--0K2-H", E, t, {
          [T]: this.props.onLabelClick
        }),
        onClick: this.props.onLabelClick,
        children: [this.props.text.length > 0 && r, this.props.showIsMe && jsx("span", {
          className: l()("avatar--isMe--LeNkH", t),
          children: renderI18nText("avatar.tooltip.you")
        }), this.props.badge && jsx(Ex, {
          ...this.props.badge
        }), this.props.isScimUser && jsx(Ex, {
          color: zE.DEFAULT,
          text: getI18nString("members_table.org_user_name_cell.scim_badge")
        })]
      }), this.props.email && jsx("div", {
        className: this.props.onEmailClick ? "avatar--emailHover--ekuTn" : "",
        onClick: this.props.onEmailClick,
        title: this.props.emailTitle ?? void 0,
        children: jsx("div", {
          className: "avatar--email--G3FcZ",
          children: this.props.email
        })
      })]
    });
  }
}
let eT = e => class extends Component {
  render() {
    let t = [this.props.overrideHandle, this.props.entity.handle, this.props.entity.name];
    this.props.fallbackToEmail && t.push(this.props.entity.email);
    let r = eg(t, this.props.defaultText);
    let i = this.props.includeUserEmailAddress ? this.props.entity.email : null;
    let {
      title,
      emailTitle
    } = r ? {
      title: `${r}${i ? `
${i}` : ""}`,
      emailTitle: null
    } : {
      title: null,
      emailTitle: i
    };
    let {
      onEmailClick,
      onLabelClick,
      ...d
    } = this.props;
    return jsx(e, {
      text: r,
      email: this.props.includeUserEmailAddress ? this.props.entity.email : null,
      tooltipText: this.props.showTooltip ? title : null,
      emailTitle: this.props.showTooltip ? emailTitle : null,
      onEmailClick,
      onLabelClick,
      ...d
    });
  }
};
let eI = eT(eb);
let $$eS1 = ef(ed, eI);
let $$ev9 = ef($$e_7, eT(eb));
let $$eA6 = ef(function () {
  return jsx(_$$A, {
    className: "xe5c7bq"
  });
}, eI);
export const H = $$eE0;
export const az = $$eS1;
export const pw = $$Q2;
export const Ro = $$ec3;
export const w7 = $$ep4;
export const md = $$eh5;
export const i9 = $$eA6;
export const CH = $$e_7;
export const fZ = $$et8;
export const rE = $$ev9;
export const z6 = $$eu10;
export const Sw = $$K11;
export const Pq = $$W12;