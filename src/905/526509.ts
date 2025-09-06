import { atom, um } from "../figma_app/27355";
var $$r0 = (e => (e.ClickOut = "clickOut", e.KeyboardEsc = "keyboardEsc", e.ToolSelected = "toolSelected", e.ChevronClicked = "chevronClicked", e.PropertyChanged = "propertyChanged", e.CloseButton = "closeButton", e.ClickDemotedDlt = "clickDemotedDlt", e.OpenedShapesSidebar = "openedShapesSidebar", e))($$r0 || {});
let $$a1 = atom({
  stage: "FULL",
  thresholdWidth: 774,
  numPrimaryTools: 4
});
let $$s2 = um({
  state: "closed"
}, function (e, t) {
  return "open" === t.type ? {
    state: "open",
    tool: t.tool
  } : "close" === t.type && "open" === e.state && "clickOut" !== t.source ? {
    state: "closed"
  } : e;
});
export const Yg = $$r0;
export const c5 = $$a1;
export const oh = $$s2;