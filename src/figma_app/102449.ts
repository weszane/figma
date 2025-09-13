import { jsx, jsxs } from "react/jsx-runtime";
import { Button } from "../905/521428";
import { x } from "../905/211326";
import { SvgComponent } from "../905/714743";
import { renderI18nText } from "../905/303541";
import { X } from "../figma_app/91315";
import { hv } from "../905/952832";
import { Ro, CH, z6 } from "../figma_app/805373";
import { n1, Lq, Lw, Kk, iE, sH, iQ, Ew } from "../905/687467";
import { A } from "../1617/754897";
let _ = (e, t = {}) => function (r) {
  let c = r.size;
  let _ = () => {
    r.dispatch(X({
      entity: r.entity,
      entityType: r.entityType,
      shape: t.editorShape ? t.editorShape : void 0
    }));
  };
  let h = {
    width: `${c}px`,
    minWidth: `${c}px`,
    height: `${c}px`,
    minHeight: `${c}px`
  };
  let m = r.avatarEditorState && r.avatarEditorState.status === hv.UPLOADING && r.entity === r.avatarEditorState.entity;
  let g = t.className ? t.className : n1;
  let f = jsx(x, {
    isLoading: m,
    className: `${Lq} ${g}`,
    children: () => jsx(e, {
      size: c,
      ...r
    })
  });
  let E = jsx("div", {
    className: `${g} ${r.overlayClass || ""}`,
    children: jsx(SvgComponent, {
      className: `${Lw} ${Kk} ${g} ${r.overlayClass || ""}`,
      svg: r.icon || A
    })
  });
  return t.withButton ? jsxs("div", {
    className: `${iE} ${n1}`,
    style: h,
    children: [f, E, jsx("div", {
      className: sH,
      children: jsx(Button, {
        variant: "ghost",
        onClick: _,
        children: renderI18nText("avatar_editor.edit")
      })
    })]
  }) : jsxs("div", {
    className: `${iQ} ${g}`,
    onClick: _,
    style: h,
    children: [f, E]
  });
};
let $$h0 = _(Ro);
let $$m2 = _(Ro, {
  withButton: !0
});
let $$g1 = _(CH, {
  editorShape: "SQUARE",
  className: Ew
});
let $$f3 = _(z6, {
  editorShape: "SQUARE",
  className: Ew
});
export const ER = $$h0;
export const FL = $$g1;
export const Id = $$m2;
export const j = $$f3;