import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import n from "classnames";
import { IW, RE } from "../figma_app/563413";
import { s as _$$s } from "../cssbuilder/589278";
import { vN } from "../7222/396421";
import { K } from "../905/443068";
import { L } from "../905/704296";
import { getI18nString } from "../905/303541";
import { ON } from "../9410/148230";
var a = n;
function p({
  onClick: e
}) {
  return jsx(K, {
    "aria-label": getI18nString("common.close"),
    onClick: e,
    children: jsx(L, {})
  });
}
export function $$m1({
  searchQuery: e,
  setSearchQuery: t,
  showCloseButton: i,
  placeholder: n
}) {
  let {
    canDismiss,
    maybeUseLightTemplateOnDismiss
  } = vN();
  return jsxs("div", {
    className: _$$s.flex.flexRow.itemsCenter.pl8.pr12.py8.gap12.$,
    children: [jsx(IW, {
      className: a()(ON, _$$s.wFull.borderBox.bRadius6.colorBgSecondary.$),
      query: e,
      clearSearch: () => t(""),
      onChange: t,
      placeholder: n,
      focusOnMount: !0,
      withSmallXIcon: !0
    }), i && canDismiss && jsx(p, {
      onClick: maybeUseLightTemplateOnDismiss
    })]
  });
}
export function $$f2({
  searchQuery: e,
  setSearchQuery: t,
  onBack: i,
  showCloseButton: n,
  placeholder: d
}) {
  let {
    canDismiss,
    maybeUseLightTemplateOnDismiss
  } = vN();
  return jsxs("div", {
    className: a()(_$$s.flex.flexRow.itemsCenter.pl8.pr12.py8.gap12.$),
    children: [jsx(RE, {
      className: a()(ON, _$$s.wFull.borderBox.bRadius6.colorBgSecondary.$),
      query: e,
      clearSearch: () => t(""),
      onChange: t,
      onBack: i,
      placeholder: d,
      focusOnMount: !0,
      withSmallXIcon: !0
    }), n && canDismiss && jsx(p, {
      onClick: maybeUseLightTemplateOnDismiss
    })]
  });
}
export function $$g0({
  icon: e,
  title: t,
  subtitle: i
}) {
  return jsxs(Fragment, {
    children: [jsxs("div", {
      className: _$$s.flex.flexRow.gap6.lh24.itemsCenter.$,
      children: [e, jsx("h1", {
        className: _$$s.colorText.fontInter.font14.fontNormal.fontSemiBold.spacingCompact.$,
        children: t
      })]
    }), jsx("h2", {
      className: _$$s.colorTextSecondary.textBodyMedium.$,
      children: i
    })]
  });
}
export const _8 = $$g0;
export const tJ = $$m1;
export const ui = $$f2;