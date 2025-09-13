import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { forwardRef, useCallback, useRef, useImperativeHandle, useState, useEffect } from "react";
import { CheckboxPrimitive } from "../905/549791";
import { Button } from "../905/521428";
import { l as _$$l } from "../905/479687";
import { J } from "../905/129695";
import d from "classnames";
import { getI18nString } from "../905/303541";
import { U } from "../905/331038";
import { w as _$$w } from "../905/113805";
import { Lz, Zc } from "../905/497882";
import { s as _$$s } from "../905/924751";
import { jI, uS } from "../figma_app/740025";
import { A as _$$A } from "../905/567946";
import { lN, Hs } from "../905/488777";
var c = d;
export function $$y1(e) {
  if (e && "exception" !== e.type && "TOO_MANY_TAGS" === e.key) {
    let {
      maxTags
    } = e.data;
    return getI18nString("community.publishing.select_up_to_n_tags_error", {
      maxTagsPerResource: maxTags
    });
  }
}
let b = forwardRef(function ({
  tagsFieldsManager: e,
  onTouched: t
}, i) {
  let {
    tagsV2Field: {
      setValue
    },
    validV2Tags
  } = e;
  let u = Lz(e.tagsV2Field, []);
  let p = useCallback(e => !!u.find(t => _$$s(t, e)), [u]);
  let m = useCallback(t => !Zc(e.tagsV2Field) || !p(t) && u.length >= jI, [p, u.length, e.tagsV2Field]);
  let _ = useCallback(e => {
    setValue && (p(e) ? setValue(u.filter(t => !_$$s(t, e))) : setValue([...u, e]));
  }, [p, u, setValue]);
  let A = validV2Tags.find(e => !m(e));
  let y = useRef(null);
  useImperativeHandle(i, () => ({
    focus: e => {
      y.current?.focus(e);
    }
  }), []);
  return jsx("div", {
    className: "tags_v2_select--tagContainer--No6Vt",
    children: validV2Tags.map(e => {
      let i = p(e);
      let r = m(e);
      let s = uS(e);
      return jsxs("span", {
        className: c()("tags_v2_select--tag--ukyQf", {
          "tags_v2_select--disabled--2jKbM": r
        }),
        children: [jsx(CheckboxPrimitive, {
          ref: e === A ? y : void 0,
          id: `tagsV2Select-tag-${e.text}`,
          className: "tags_v2_select--hiddenCheckbox---pexC",
          "aria-label": s,
          onChange: () => {
            t?.();
            _(e);
          },
          checked: i,
          disabled: r
        }), i ? jsx(_$$l, {
          className: "tags_v2_select--checkIcon--tAdmB"
        }) : jsx(J, {
          className: "tags_v2_select--plusIcon---VuuX"
        }), jsx("label", {
          htmlFor: `tagsV2Select-tag-${e.text}`,
          children: s
        })]
      }, e.text);
    })
  });
});
let $$v0 = forwardRef(function ({
  tagsFieldsManager: e,
  touchedFieldsTracker: t,
  autoScrollAutocompleteResultsIntoView: i,
  PublishModalRowComponent: a = _$$A,
  autocompleteInputContainerClassName: o
}, l) {
  let {
    tagsV1Field,
    tagsV2Field,
    validV2Tags
  } = e;
  let v = _$$w(tagsV1Field, !t.tagsV1.touched);
  let I = U(v, lN, validV2Tags);
  let E = _$$w(tagsV2Field, !t.tagsV2.touched);
  let x = U(E, $$y1);
  let S = Lz(tagsV1Field, []);
  let w = useRef(Lz(tagsV1Field, []).length > 0);
  let [C, T] = useState(w.current);
  useEffect(() => {
    S.length > 0 && T(!0);
  }, [S]);
  let k = useRef(null);
  let R = useRef(null);
  useImperativeHandle(l, () => ({
    focus: e => {
      x ? k.current?.focus(e) : R.current?.focus(e);
    }
  }), [x]);
  return jsxs(Fragment, {
    children: [jsx(a, {
      label: getI18nString("community.publishing.recommended_tags"),
      subLabel: validV2Tags.length > jI ? getI18nString("community.publishing.select_up_to_n_tags_to_help_people_discover_your_resource", {
        maxTagsPerResource: jI
      }) : getI18nString("community.publishing.select_tags_to_help_people_discover_your_resource"),
      error: x,
      afterErrorContent: !C && jsx(Button, {
        variant: "link",
        onClick: () => {
          T(!0);
        },
        children: getI18nString("community.publishing.add_custom_tags")
      }),
      children: jsx(b, {
        ref: k,
        tagsFieldsManager: e,
        touched: t.tagsV2.touched,
        onTouched: t.tagsV2.onTouched
      })
    }), C && jsx(a, {
      label: getI18nString("community.publishing.custom_tags"),
      error: I,
      children: jsx(Hs, {
        ref: R,
        tagsV1Field,
        validV2Tags,
        touched: t.tagsV1.touched,
        onTouched: t.tagsV1.onTouched,
        autoFocusAutocompleteInput: !w.current,
        autoScrollAutocompleteResultsIntoView: i,
        autocompleteInputContainerClassName: o
      })
    })]
  });
});
export const vj = $$v0;
export const w8 = $$y1;