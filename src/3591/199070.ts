import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { wA } from "../vendor/514228";
import { R } from "../3591/975641";
import { s as _$$s } from "../cssbuilder/589278";
import { tx } from "../905/303541";
import { E } from "../905/984674";
import { JZ } from "../figma_app/696043";
import { Pt } from "../figma_app/33586";
import { cV } from "../3591/656444";
export function $$c0({
  localResource: e,
  publishedResource: i
}) {
  let {
    error,
    localFilePath
  } = e || {};
  let o = Pt(error?.type, e);
  if (!e && i) return jsx(h, {
    resource: i
  });
  if (!e || null == localFilePath) return null;
  if (!error) return jsx(R, {
    className: cV,
    text: localFilePath.replace("/manifest.json", "")
  });
  if (!o) return null;
  let {
    action,
    msg,
    buttonText
  } = o;
  return jsxs(Fragment, {
    children: [jsx(E, {
      color: "danger",
      children: msg
    }), jsx(g, {
      onClick: action,
      isError: !0,
      children: buttonText
    })]
  });
}
function g({
  children: e,
  onClick: i,
  isError: t
}) {
  return jsx("button", {
    onClick: e => {
      e.stopPropagation();
      i();
    },
    className: _$$s.underline.bgTransparent.$$with({
      colorTextDanger: t,
      colorTextSecondary: !t
    }).$,
    children: e
  });
}
function h({
  resource: e
}) {
  let i = wA();
  return jsx("div", {
    className: cV,
    children: jsx(g, {
      onClick: () => {
        i(JZ({
          resourceType: e.is_widget ? "widget" : "plugin"
        }));
      },
      children: jsx(E, {
        children: tx("universal_insert.locate_local_version_text")
      })
    })
  });
}
export const A = $$c0;