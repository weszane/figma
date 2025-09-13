import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useDispatch } from "react-redux";
import { R } from "../3591/975641";
import { s as _$$s } from "../cssbuilder/589278";
import { renderI18nText } from "../905/303541";
import { TextWithTruncation } from "../905/984674";
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
    children: [jsx(TextWithTruncation, {
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
  let i = useDispatch();
  return jsx("div", {
    className: cV,
    children: jsx(g, {
      onClick: () => {
        i(JZ({
          resourceType: e.is_widget ? "widget" : "plugin"
        }));
      },
      children: jsx(TextWithTruncation, {
        children: renderI18nText("universal_insert.locate_local_version_text")
      })
    })
  });
}
export const A = $$c0;