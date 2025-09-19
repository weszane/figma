import { jsx, Fragment } from "react/jsx-runtime";
import { forwardRef, useRef, useImperativeHandle } from "react";
import { Checkbox } from "../905/274480";
import { Label } from "../905/270045";
import { Link } from "../905/438674";
import { getI18nString, renderI18nText } from "../905/303541";
import { Zc, Lz } from "../905/497882";
import { A } from "../905/567946";
export let $$u0 = forwardRef(function ({
  tosAcceptedField: e
}, t) {
  let i = useRef(null);
  if (useImperativeHandle(t, () => ({
    focus: e => {
      i.current?.focus(e);
    }
  }), []), !Zc(e)) return jsx(Fragment, {});
  let u = Lz(e, void 0);
  return jsx(A, {
    label: getI18nString("community.publishing.community_terms_of_service"),
    required: !0,
    children: jsx(Checkbox, {
      ref: i,
      label: jsx(Label, {
        children: renderI18nText("community.publishing.i_agree_to_the_terms_of_service", {
          termsOfService: jsx(Link, {
            href: "https://www.figma.com/tos/",
            newTab: !0,
            trusted: !0,
            children: renderI18nText("community.publishing.community_terms_of_service")
          })
        })
      }),
      checked: u,
      onChange: () => {
        u ? e.setValue(!1) : e.setValue(!0);
      }
    })
  });
});
export const B = $$u0;