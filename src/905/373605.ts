import { jsx } from "react/jsx-runtime";
import { aq } from "../figma_app/59509";
import { Q } from "../905/363675";
import { getI18nString, renderI18nText } from "../905/303541";
export function $$o0() {
  return jsx(aq, {
    variant: "brand",
    children: jsx(Q, {
      title: getI18nString("cms_file_operations_import_export.cms_data_not_available_for"),
      children: renderI18nText("cms_file_operations_import_export.rolling_back_to_previous_versions")
    })
  });
}
export const K = $$o0;