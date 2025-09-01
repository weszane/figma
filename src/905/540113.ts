import { jsx } from "react/jsx-runtime";
import { useMemo } from "react";
import { Ph } from "../905/160095";
import { t as _$$t } from "../905/303541";
import { jN } from "../905/612685";
import { FFileType } from "../figma_app/191312";
export function $$d0({
  asset: e,
  editorType: t = FFileType.DESIGN
}) {
  let i = useMemo(() => jN({
    file: {
      key: e.file_key,
      editorType: t
    },
    nodeId: e.node_id
  }), [e.file_key, e.node_id, t]);
  let d = e.node_id ? _$$t("design_systems.libraries_modal.open_in_file") : _$$t("design_systems.libraries_modal.open_file");
  return jsx(Ph, {
    href: i,
    newTab: !0,
    trusted: !0,
    children: d
  });
}
export const U = $$d0;