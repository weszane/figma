import { jsx, jsxs } from "react/jsx-runtime";
import { SelectionPaintHelpers } from "../figma_app/763686";
import { permissionScopeHandler } from "../905/189185";
import { GP } from "../figma_app/15927";
import { trackEventAnalytics } from "../905/449184";
import { RecordingComponent, setupPlayback, generateRecordingKey } from "../figma_app/878298";
import { s_ } from "../905/17223";
import { BigTextInputForwardRef, ButtonSecondary, ButtonBasePrimary } from "../figma_app/637027";
import { SvgComponent } from "../905/714743";
import { getI18nString, renderI18nText } from "../905/303541";
import { hideModal } from "../905/156213";
import { generateSerializableStyleThumbnail, generateThumbnailFromStyleConsumer } from "../figma_app/80990";
import { registerLegacyModal } from "../905/102752";
import { zi } from "../905/824449";
import { ModalContainer } from "../figma_app/918700";
import { yl, v0, Lu, pL } from "../figma_app/639088";
import { A as _$$A } from "../2854/751030";
export let $$b0 = "PAINT_DATA_STYLES";
registerLegacyModal($$b0, e => jsx(v, {
  recordingKey: "SelectionColorsStylesModal",
  originalPaint: e.modalShown.data.originalPaint,
  paintDataNodesInPaint: e.modalShown.data.paintDataNodesInPaint,
  conflictNodesCount: e.modalShown.data.conflictNodesCount,
  type: e.modalShown.data.type,
  ...e
}));
class v extends RecordingComponent {
  constructor(e) {
    super(e);
    this.previewUrl = Array(this.props.paintDataNodesInPaint.length).fill("");
    this.previewStyleThumbnail = Array(this.props.paintDataNodesInPaint.length).fill({
      type: "INVALID"
    });
    this.multiplePaintDatas = this.props.paintDataNodesInPaint.length > 1;
    this.onSelectSamePaintClick = () => {
      let e = GP(this.props.originalPaint);
      SelectionPaintHelpers.selectConflictingWithPaint(e);
      this.props.dispatch(hideModal());
    };
    this.onCancel = e => {
      e.preventDefault();
      this.props.dispatch(hideModal());
    };
    this.onSubmit = setupPlayback(this, "submit", e => {
      let t;
      e.preventDefault();
      this.state.error && this.setState({
        error: !1
      });
      let i = GP(this.props.originalPaint);
      let n = e.target.elements;
      let l = !1;
      let d = this.props.type;
      if ("create" === d.kind) {
        if (!n.styleName) {
          this.setState({
            error: !0
          });
          console.error("elements.styleName does not exist");
          return;
        }
        permissionScopeHandler.user("create-style-from-selection-paints", () => {
          void 0 == n.styleName.length ? (l = SelectionPaintHelpers.createStylesFromPaintDatas(i, Array.of(n.styleName.value)), t = 1) : (l = SelectionPaintHelpers.createStylesFromPaintDatas(i, Array.from(n.styleName).map(e => e.value)), t = n.styleName.length);
          l && trackEventAnalytics("Style Created from Selection Paint", {
            styleCount: t
          });
        });
      } else permissionScopeHandler.user("apply-style-to-selection-paints", () => {
        (l = SelectionPaintHelpers.applyStyleToPaintDatas(i, d.styleGuid)) && trackEventAnalytics("Apply Style to Selection Paint ", {
          count: this.props.paintDataNodesInPaint.length
        });
      });
      l ? this.props.dispatch(hideModal()) : this.setState({
        error: !0
      });
    }, {
      record: e => void 0 == e.target.styleName.length ? {
        styleName: {
          value: e.target.styleName.value
        }
      } : {
        styleName: Array.from(e.target.styleName).map(e => ({
          value: e.value
        }))
      },
      playback: e => ({
        preventDefault() {},
        target: {
          elements: {
            styleName: e.styleName
          }
        }
      })
    });
    this.inputRef = e => {
      e?.select();
    };
    this.state = {
      error: !1
    };
    for (let t = 0; t < e.paintDataNodesInPaint.length; t++) {
      this.previewStyleThumbnail[t] = generateSerializableStyleThumbnail("FILL", e.paintDataNodesInPaint[t].nodeId, e.paintDataNodesInPaint[t].inheritStyleKeyField);
      ("INVALID" === this.previewStyleThumbnail[t].type || this.previewStyleThumbnail[t].fillPaints.length > 1 || "SOLID" !== this.previewStyleThumbnail[t].fillPaints[0].type) && (this.previewUrl[t] = generateThumbnailFromStyleConsumer(e.paintDataNodesInPaint[t].nodeId, e.paintDataNodesInPaint[t].inheritStyleKeyField));
    }
  }
  render() {
    let e = "create" === this.props.type.kind ? this.multiplePaintDatas ? getI18nString("design_systems.create_style.create_new_color_styles") : getI18nString("design_systems.create_style.create_new_color_style") : this.multiplePaintDatas ? getI18nString("design_systems.create_style.color_conflict") : "";
    let t = "create" === this.props.type.kind ? this.multiplePaintDatas ? getI18nString("design_systems.create_style.create_styles") : getI18nString("design_systems.create_style.create_style") : getI18nString("design_systems.create_style.use_style");
    let i = "create" === this.props.type.kind ? getI18nString("design_systems.create_style.error_creating_style") : getI18nString("design_systems.create_style.error_applying_style");
    return jsxs(ModalContainer, {
      title: e,
      size: "small",
      className: yl,
      ...this.props,
      children: [jsx(s_, {
        dispatch: this.props.dispatch
      }), jsxs("form", {
        onSubmit: this.onSubmit,
        children: ["create" === this.props.type.kind && this.props.paintDataNodesInPaint.map((e, t) => jsxs("div", {
          className: "style_modal--inputRow---zgXu",
          children: [jsx("div", {
            className: "style_modal--chitContainer--Pt9NK",
            children: jsx(zi, {
              dsStyle: {
                thumbnail_url: this.previewUrl[t],
                style_type: "FILL",
                meta: {
                  style_thumbnail: this.previewStyleThumbnail[t]
                }
              }
            })
          }), jsx(BigTextInputForwardRef, {
            className: "style_modal--textInput--35ro2",
            name: "styleName",
            ref: 0 === t ? this.inputRef : null,
            placeholder: getI18nString("design_systems.create_style.untitled_with_count", {
              index: t + 1
            })
          })]
        }, e)), this.state.error && jsx("div", {
          className: "style_modal--errorMessage--jMAH7",
          children: i
        }), this.multiplePaintDatas && "apply" === this.props.type.kind && jsx("div", {
          className: "style_modal--applyMultipleStylesMessage--3yNZn",
          children: renderI18nText("design_systems.create_style.conflict", {
            conflictNodesCount: this.props.conflictNodesCount
          })
        }), jsxs("div", {
          className: v0,
          children: [this.multiplePaintDatas && "apply" === this.props.type.kind && jsxs(ButtonSecondary, {
            type: "button",
            className: `${Lu} style_modal--selectButton--t8zHP`,
            onClick: this.onSelectSamePaintClick,
            recordingKey: generateRecordingKey(this.props, "showMe"),
            children: [jsx(SvgComponent, {
              className: "style_modal--targetIcon--x4NAU",
              svg: _$$A
            }), renderI18nText("design_systems.create_style.show_me")]
          }), jsx(ButtonSecondary, {
            type: "button",
            className: Lu,
            onClick: this.onCancel,
            children: renderI18nText("design_systems.create_style.cancel")
          }), jsx(ButtonBasePrimary, {
            type: "submit",
            className: pL,
            children: t
          })]
        })]
      })]
    });
  }
}
v.displayName = "SelectionColorsStylesModal";
export const t = $$b0;