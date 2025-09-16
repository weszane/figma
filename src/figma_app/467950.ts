import { jsx } from "react/jsx-runtime";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useAtomValueAndSetter } from "../figma_app/27355";
import { selectWithShallowEqual } from "../905/103090";
import { isDevHandoffEditorType } from "../figma_app/976749";
import { UX } from "../figma_app/740163";
import { QZ, VZ } from "../figma_app/727192";
import { hD, LI } from "../figma_app/970285";
export function $$p0() {
  let e = isDevHandoffEditorType();
  let {
    openFile,
    sceneGraphSelection,
    currentPage,
    currentSelectedProperty,
    saveAsState,
    dropdownShown,
    pickerShown,
    exportSettings
  } = selectWithShallowEqual(e => ({
    openFile: e.openFile,
    sceneGraphSelection: e.mirror.sceneGraphSelection,
    currentSelectedProperty: e.mirror.appModel.currentSelectedProperty,
    currentPage: e.mirror.appModel.currentPage,
    saveAsState: e.saveAsState,
    dropdownShown: e.dropdownShown,
    pickerShown: e.pickerShown,
    exportSettings: e.mirror.selectionProperties.exportSettings
  }));
  let E = hD();
  let y = UX();
  let b = useDispatch();
  let {
    collapsedInspectionPanelAtom,
    collapseEnabled
  } = QZ("export");
  let [S, v] = useAtomValueAndSetter(collapsedInspectionPanelAtom);
  let A = useCallback(e => {
    v(!S);
    e.stopPropagation();
  }, [S, v]);
  let x = useCallback(() => (S && v(!1), !0), [S, v]);
  return jsx(VZ, {
    hideHeader: !0,
    noPadding: !0,
    recordingKey: "export",
    noBorder: !0,
    children: jsx("div", {
      className: e ? "export_panel--devModePanelWrapper--kCKhP" : void 0,
      children: jsx(LI, {
        currentPage,
        currentSelectedProperty,
        dispatch: b,
        dropdownShown,
        exportSettings,
        headerClickTriggersAddProperty: !collapseEnabled,
        isPanelBodyCollapsedAtom: collapseEnabled ? collapsedInspectionPanelAtom : void 0,
        isSelectionRenamable: LI.isSelectionRenamable(Object.keys(sceneGraphSelection)),
        numSelected: Object.keys(sceneGraphSelection).length,
        onAddClick: collapseEnabled ? x : void 0,
        onHeaderClick: collapseEnabled ? A : void 0,
        openFile,
        panelWidth: y,
        pickerShown,
        saveAsState,
        sceneGraphSelection,
        singleNodeName: E
      })
    })
  });
}
export const L = $$p0;