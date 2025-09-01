import { jsxs, jsx } from "react/jsx-runtime";
import { useHandleChangeEvent } from "../figma_app/878298";
import o from "classnames";
import { B } from "../905/714743";
import { Ib } from "../905/129884";
var i = o;
let c = "file_upload_icon_input--disabledIcon--JLhI1";
export function $$d0(e) {
  let {
    svg,
    svgAltText,
    isDisabled,
    acceptedFileTypes,
    inputRef,
    onFileInputChange,
    singleFile,
    recordingKey
  } = e;
  let h = useHandleChangeEvent(recordingKey, "change", e => {
    onFileInputChange(inputRef)();
  });
  return jsxs("label", {
    htmlFor: e.inputId,
    className: i()("file_upload_icon_input--fileUploadIconLabel--GkBse", {
      [c]: isDisabled
    }),
    "data-tooltip-type": Ib.TEXT,
    "data-tooltip-show-immediately": !0,
    "data-tooltip": isDisabled ? null : e["data-tooltip"],
    children: [jsx("input", {
      ref: inputRef,
      accept: acceptedFileTypes,
      "aria-label": e["data-tooltip"],
      className: "file_upload_icon_input--fileInput--qwRav",
      disabled: isDisabled,
      id: e.inputId,
      multiple: !singleFile,
      name: e.inputId,
      onChange: h,
      type: "file"
    }), e.children || svg && jsx("div", {
      className: "file_upload_icon_input--svg--qwaj3",
      children: jsx(B, {
        title: svgAltText,
        ariaLabel: svgAltText,
        svg,
        autosize: !0,
        className: i()({
          [c]: isDisabled
        })
      })
    })]
  });
}
export const n = $$d0;