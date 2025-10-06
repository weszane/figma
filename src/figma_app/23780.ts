import { jsx, jsxs } from "react/jsx-runtime";
import { l as _$$l } from "../905/479687";
import a from "classnames";
import { c$ } from "../figma_app/236327";
import { KeyboardShortcut } from "../figma_app/420927";
import { cssBuilderInstance } from "../cssbuilder/589278";
var s = a;
export function $$c2(e) {
  return jsx("div", {
    className: "action_option--iconContainer--LFlTl action_option--_iconContainerBase--FtOiz",
    children: e.children
  });
}
function u(e) {
  return jsx("div", {
    className: "action_option--largeIconContainer--T0anG action_option--_iconContainerBase--FtOiz",
    children: e.children
  });
}
function p(e) {
  return jsx("div", {
    className: "action_option--rightIconContainer--rTqI4",
    children: e.children
  });
}
export function $$_0(e) {
  return jsxs(c$, {
    disabled: !e.isEnabled,
    onClick: e.onClick,
    onPointerUp: e.onPointerUp,
    recordingKey: e.recordingKey,
    className: s()("action_option--optionContainer--ru4UN", {
      "action_option--optionContainerLimitWidth--aaElZ": e.inPanel
    }),
    buttonRef: e.buttonRef,
    onboardingKey: e.onboardingKey,
    simulateHover: e.simulateHover,
    tooltip: e.tooltip,
    children: [!e.hideCheck && jsx("div", {
      className: "action_option--checkMarkContainer--hq6Bt action_option--iconContainer--LFlTl action_option--_iconContainerBase--FtOiz",
      children: e.isChecked && jsx(_$$l, {})
    }), e.children && jsx($$c2, {
      children: e.children
    }), jsx("div", {
      className: "action_option--text--fSMIm",
      children: e.text
    }), e.shortcut ? jsx(KeyboardShortcut, {
      shortcut: e.shortcut,
      className: "action_option--shortcut--w0R75 action_option--rightIconContainer--rTqI4"
    }) : e.rightIcon && jsx(p, {
      children: e.rightIcon
    })]
  });
}
export function $$h1(e) {
  return jsx("div", {
    className: "action_option--largeOptionContainerWrapper--AePOP",
    children: jsx(c$, {
      disabled: !e.isEnabled,
      onClick: e.onClick,
      onPointerUp: e.onPointerUp,
      recordingKey: e.recordingKey,
      className: "action_option--largeOptionContainer--qZzaL",
      buttonRef: e.buttonRef,
      onboardingKey: e.onboardingKey,
      simulateHover: e.simulateHover,
      tooltip: e.tooltip,
      children: jsxs("div", {
        className: cssBuilderInstance.flex.flexColumn.$,
        children: [jsxs("div", {
          className: cssBuilderInstance.flex.flexColumn.alignLeft.$,
          children: [jsx("div", {
            className: "action_option--largeText--d3Px5 action_option--text--fSMIm",
            children: e.text
          }), null != e.shortcut && jsx(KeyboardShortcut, {
            shortcut: e.shortcut,
            className: "action_option--largeShortcut--4uECE action_option--shortcut--w0R75 action_option--rightIconContainer--rTqI4"
          })]
        }), e.children && jsx(u, {
          children: e.children
        }), e.description && jsx("p", {
          className: "action_option--largeDescription--1RlSt",
          children: e.description
        })]
      })
    })
  });
}
export const a1 = $$_0;
export const by = $$h1;
export const Nu = $$c2;