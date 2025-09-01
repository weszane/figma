import { __rest } from "../vendor/56636";
import { forwardRef, useContext } from "react";
import { ParentContext, warnInvalidConstraints } from "../figma_app/706870";
import { round, image } from "../905/719694";
import { useImageSize } from "../905/866878";
import { domNodeFromRectangle } from "../905/270626";
import { normalizeProps } from "../905/202646";
import { getDefaultRectangleProps } from "../905/712000";
exports.Image = void 0;
let u = e => "fill-parent" === e ? e : round(e);
exports.Image = forwardRef(function (e, t) {
  var i;
  var p;
  let {
    attributes
  } = e;
  let h = __rest(e, ["attributes"]);
  let g = useContext(ParentContext);
  warnInvalidConstraints(Object.assign(Object.assign({}, h), {
    parent: g
  }));
  let {
    width,
    height
  } = useImageSize(e);
  let A = "string" == typeof h.src ? image(h.src) : h.src;
  let y = normalizeProps(Object.assign(Object.assign(Object.assign({}, getDefaultRectangleProps()), h), {
    fill: A,
    width: null !== (i = u(width)) && void 0 !== i ? i : 0,
    height: null !== (p = u(height)) && void 0 !== p ? p : 0
  }));
  return domNodeFromRectangle(y, g, t, attributes);
});