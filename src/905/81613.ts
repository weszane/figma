import { jsx } from "react/jsx-runtime";
import { useId } from "react";
import a from "classnames";
import { X } from "../figma_app/313269";
import { getI18nString } from "../905/303541";
import { ResourceType } from "../figma_app/45218";
import { A as _$$A } from "../905/794518";
import { I5, J7 } from "../905/599844";
var s = a;
export function $$p0({
  defaultValue: e,
  onChange: t,
  placeholderText: i,
  resourceType: a,
  required: p,
  error: m
}) {
  let h = useId();
  return jsx(_$$A, {
    label: getI18nString("community.publishing.description"),
    labelId: h,
    error: m,
    required: p,
    children: jsx("div", {
      className: s()(I5, {
        [J7]: !!m
      }),
      children: jsx(X, {
        fallback: null,
        errorFallback: null,
        toolbarProps: {
          "aria-labelledby": h
        },
        placeholder: i || (() => {
          switch (a) {
            case ResourceType.HUB_FILE:
              return getI18nString("community.publishing.describe_your_file");
            case ResourceType.PLUGIN:
              return getI18nString("community.publishing.describe_your_plugin");
            case ResourceType.WIDGET:
              return getI18nString("community.publishing.describe_your_widget");
            default:
              return;
          }
        })(),
        defaultValue: e,
        onInputChange: t
      })
    })
  });
}
export const A = $$p0;