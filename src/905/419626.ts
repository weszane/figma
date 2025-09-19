import { jsx, jsxs } from "react/jsx-runtime";
import { getFeatureFlags } from "../905/601108";
import { sanitizeAndExtractText } from "../905/973142";
import { detectEditorStateFormat, parseEditorStateToPlainText } from "../figma_app/9619";
import { C, A } from "../figma_app/686450";
import { useSetupPlayback } from "../figma_app/878298";
export function $$d0({
  autoFocus: e,
  description: t,
  isViewOnly: i,
  namespace: d,
  onSave: c,
  placeholder: u,
  ariaLabelledBy: p,
  recordingKey: m
}) {
  let h = useSetupPlayback(m, "onInputChange", e => {
    let t = "lexical" === detectEditorStateFormat(e) ? parseEditorStateToPlainText(e) : sanitizeAndExtractText(e);
    c(e, t);
  });
  if (i && "" === t) return null;
  let g = t.replace(/&quot;/g, '"');
  let f = detectEditorStateFormat(g);
  return i ? jsx("div", {
    className: "rich_text_description_input--lexicalInputViewOnly--TBniB",
    children: jsx(C, {
      value: g,
      valueFormat: f,
      namespace: d,
      lexicalContentClassName: "rich_text_description_input--contentEditableReadOnly--oF2xI rich_text_description_input--contentEditableBase--enWn1"
    })
  }) : jsx("div", {
    className: "rich_text_description_input--lexicalInput--ciiTY ellipsis--ellipsis--Tjyfa",
    children: jsx(A, {
      value: g,
      valueFormat: f,
      onSave: ({
        html: e,
        lexical: t
      }) => {
        h(getFeatureFlags().ext_lexical_json_component_descriptions ? t : e);
      },
      placeholder: u ? jsxs("div", {
        className: "rich_text_description_input--placeholder--U1ddB",
        children: [" ", u, " "]
      }) : void 0,
      lexicalContentClassName: "rich_text_description_input--contentEditable--pr68U rich_text_description_input--contentEditableBase--enWn1",
      namespace: d,
      hasToolbar: !0,
      autoFocus: e,
      ariaLabelledBy: p
    })
  });
}
export const u = $$d0;