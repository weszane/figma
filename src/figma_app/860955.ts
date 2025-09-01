import { jsx, jsxs } from "react/jsx-runtime";
import { forwardRef } from "react";
import { DP } from "../905/158740";
import { G } from "../905/289770";
import { J } from "../905/614223";
import { A } from "../vendor/723372";
import { S } from "../figma_app/215667";
import { c as _$$c } from "../905/453572";
import { r as _$$r } from "../905/571562";
import { R } from "../905/621802";
import { a as _$$a } from "../905/339331";
import { b as _$$b, g8 as _$$g, ZP as _$$ZP, MJ as _$$MJ, LJ, mc as _$$mc, bL as _$$bL, hE as _$$hE, YJ as _$$YJ, q7 as _$$q, N_ as _$$N_ } from "../905/465888";
import { Q } from "../905/586361";
import { s as _$$s } from "../905/536340";
import { AS, iM, rv, p$, AR, CT, zc, kL, BB, XT, Th, Ji, DD, Os, Pq, _5, Sv, me } from "../905/379736";
export function $$E7(e) {
  return _$$b({
    ...e,
    offset: 4
  });
}
export function $$y9(e) {
  let {
    version
  } = DP();
  return jsx(_$$g, {
    offset: {
      mainAxis: "ui2" === version ? 0 : 4,
      alignmentAxis: -8
    },
    ...e
  });
}
$$y9.displayName = "Menu.SubMenu";
export let $$b6 = forwardRef(({
  children: e,
  hasChecked: t,
  ...r
}, i) => jsx(_$$ZP, {
  className: A(AS, iM),
  ...r,
  ref: i,
  hasChecked: t,
  children: jsxs("span", {
    className: A(rv, p$),
    children: [jsxs("span", {
      className: AR,
      children: [void 0 !== t && jsx(_$$c, {
        className: CT,
        "aria-hidden": !0
      }), e]
    }), jsx("span", {
      className: zc,
      children: jsx(R, {})
    })]
  })
}));
$$b6.displayName = "Menu.SubTrigger";
export let $$T1 = forwardRef(({
  children: e,
  ...t
}, r) => {
  let i = S();
  let {
    color
  } = G();
  return jsx(_$$MJ, {
    className: A(kL, "light" === ("dark" === i ? "dark" : color) ? BB : XT),
    ...t,
    ref: r,
    children: jsxs(J, {
      mode: "dark" === i ? "dark" : void 0,
      children: [jsx(LJ, {
        className: Th,
        direction: "up",
        children: jsx(_$$a, {})
      }), e, jsx(LJ, {
        className: Th,
        direction: "down",
        children: jsx(_$$r, {})
      })]
    })
  });
});
$$T1.displayName = "Menu.SubContainer";
export let $$I11 = forwardRef(({
  children: e,
  ...t
}, r) => {
  let i = S();
  let {
    color
  } = G();
  let {
    fpl_consistent_menu_indent_by_default
  } = Q();
  return jsx(_$$mc, {
    className: A(kL, "light" === ("dark" === i ? "dark" : color) ? BB : XT, {
      [Ji]: fpl_consistent_menu_indent_by_default && !t.rareUseIndentOptOut
    }),
    ...t,
    ref: r,
    children: jsxs(J, {
      mode: "dark" === i ? "dark" : void 0,
      children: [jsx(LJ, {
        className: Th,
        direction: "up",
        children: jsx(_$$a, {})
      }), e, jsx(LJ, {
        className: Th,
        direction: "down",
        children: jsx(_$$r, {})
      })]
    })
  });
});
export function $$S8(e) {
  return jsx(_$$bL, {
    ...e
  });
}
$$I11.displayName = "Menu.Container";
$$S8.displayName = "Menu.Root";
export let $$v10 = forwardRef((e, t) => jsx(_$$hE, {
  className: DD,
  ...e,
  ref: t
}));
$$v10.displayName = "Menu.Title";
export let $$A13 = forwardRef((e, t) => jsx(_$$hE, {
  className: _$$s,
  ...e,
  ref: t
}));
$$A13.displayName = "Menu.HiddenTitle";
export let $$x5 = forwardRef((e, t) => jsx(_$$YJ, {
  className: Os,
  ...e,
  ref: t
}));
$$x5.displayName = "Menu.Group";
export let $$N12 = forwardRef(({
  children: e,
  ...t
}, r) => jsx(_$$q, {
  className: AS,
  ...t,
  ref: r,
  children: jsx("span", {
    className: rv,
    children: e
  })
}));
$$N12.displayName = "Menu.Item";
export let $$C2 = forwardRef(({
  children: e,
  ...t
}, r) => jsx(_$$N_, {
  className: AS,
  ...t,
  ref: r,
  children: jsx("span", {
    className: rv,
    children: e
  })
}));
export function $$w3(e) {
  return jsx("span", {
    className: Pq,
    ...e
  });
}
export function $$O4(e) {
  return jsx("span", {
    className: _5,
    ...e
  });
}
export function $$R0(e) {
  return jsx("div", {
    className: Sv,
    ...e
  });
}
export function $$L14(e) {
  return jsx("div", {
    className: Sv,
    ...e
  });
}
export function $$P15() {
  return jsx("li", {
    className: me,
    role: "separator"
  });
}
$$C2.displayName = "Menu.Link";
$$w3.displayName = "Menu.ItemTrail";
$$O4.displayName = "Menu.ItemLead";
$$R0.displayName = "Menu.SubText";
$$L14.displayName = "Menu.Shortcut";
$$P15.displayName = "Menu.Separator";
export const ME = $$R0;
export const MJ = $$T1;
export const N_ = $$C2;
export const Ov = $$w3;
export const Q$ = $$O4;
export const YJ = $$x5;
export const ZP = $$b6;
export const b = $$E7;
export const bL = $$S8;
export const g8 = $$y9;
export const hE = $$v10;
export const mc = $$I11;
export const q7 = $$N12;
export const r1 = $$A13;
export const rm = $$L14;
export const wv = $$P15;