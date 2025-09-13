import { jsxs, jsx } from "react/jsx-runtime";
import { useHandleChangeEvent } from "../figma_app/878298";
import r from "classnames";
import { SvgComponent } from "../905/714743";
import { KindEnum } from "../905/129884";
var s = r;
let d = "file_upload_icon_input--disabledIcon--JLhI1";
export function $$u0(e) {
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
  let g = useHandleChangeEvent(recordingKey, "change", e => {
    onFileInputChange(inputRef)();
  });
  return jsxs("label", {
    htmlFor: e.inputId,
    className: s()("file_upload_icon_input--fileUploadIconLabel--GkBse", {
      [d]: isDisabled
    }),
    "data-tooltip-type": KindEnum.TEXT,
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
      onChange: g,
      type: "file"
    }), e.children || svg && jsx("div", {
      className: "file_upload_icon_input--svg--qwaj3",
      children: jsx(SvgComponent, {
        title: svgAltText,
        ariaLabel: svgAltText,
        svg,
        autosize: !0,
        className: s()({
          [d]: isDisabled
        })
      })
    })]
  });
}
export const n = $$u0;