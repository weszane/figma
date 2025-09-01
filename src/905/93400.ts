import { jsx } from "react/jsx-runtime";
import { useMemo, useEffect, useState } from "react";
import a from "../vendor/116389";
import { H } from "../905/620380";
import { d as _$$d } from "../905/381451";
import { U } from "../905/331038";
import { w as _$$w } from "../905/113805";
import { A as _$$A } from "../905/17894";
import { lN, Yv } from "../905/488777";
import { w8, vj } from "../905/652712";
import { Z9 } from "../905/104173";
import { f as _$$f } from "../905/265642";
import { m as _$$m } from "../905/924751";
import { J } from "../905/296347";
import { A as _$$A2 } from "../905/794518";
var s = a;
let y = "resource_publish_tags_autocomplete--tagsPublishingWrapperUI3--7ihCs";
export function $$b0({
  categoryId: e,
  tagsV1: t,
  tagsV2: i,
  existingResourceContent: a,
  allCategories: b,
  onChange: v,
  onErrors: I
}) {
  let E = H(v);
  let x = H(I);
  let S = useMemo(() => {
    if (e) return b.find(t => t.id === e);
  }, [e, b]);
  let w = _$$d(Z9, {
    existingResourceContent: a
  }, S);
  useEffect(() => {
    w.setValue?.(S);
  }, [S, w]);
  let C = J({
    tagsV1Field: _$$d(_$$f, {
      existingResourceContent: a
    }, t),
    tagsV2Field: _$$d(_$$m, {
      categoryField: w,
      existingResourceContent: a
    }, useMemo(() => i ? s()(i.map(e => S?.tags?.find(t => t.text === e))) : [], [S?.tags, i]))
  });
  let {
    tagsV1Field,
    tagsV2Field,
    validV2Tags
  } = C;
  useEffect(() => {
    E.current({
      tags: tagsV1Field.currentValue === _$$A ? [] : [...tagsV1Field.currentValue],
      tagsV2: tagsV2Field.currentValue === _$$A ? [] : tagsV2Field.currentValue.map(e => e.text)
    });
  }, [E, tagsV1Field.currentValue, tagsV2Field.currentValue]);
  let [N, P] = useState(!1);
  let O = _$$w(tagsV1Field, !N);
  let D = U(O, lN);
  let [L, F] = useState(!1);
  let M = _$$w(tagsV2Field, !L);
  let j = U(M, w8);
  useEffect(() => {
    x.current({
      tags: D,
      tagsV2: j
    });
  }, [x, D, j]);
  return validV2Tags.length > 0 ? jsx(vj, {
    tagsFieldsManager: C,
    touchedFieldsTracker: {
      tagsV1: {
        touched: N,
        onTouched: () => P(!0)
      },
      tagsV2: {
        touched: L,
        onTouched: () => F(!0)
      }
    },
    PublishModalRowComponent: _$$A2,
    autocompleteInputContainerClassName: y
  }) : jsx(Yv, {
    tagsV1Field: C.tagsV1Field,
    touched: N,
    onTouched: () => P(!0),
    PublishModalRowComponent: _$$A2,
    autocompleteInputContainerClassName: y
  });
}
export const SE = $$b0;