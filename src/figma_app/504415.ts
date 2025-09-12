import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useDispatch, useSelector } from "react-redux";
import { nB, wi, jk, vo, Y9, hE } from "../figma_app/272243";
import { Label } from "../905/270045";
import { p as _$$p } from "../905/185998";
import { T as _$$T } from "../905/909590";
import { E as _$$E } from "../905/632989";
import { $n } from "../905/521428";
import { useModalManager } from "../905/437088";
import { bL } from "../905/38914";
import { ViewType } from "../figma_app/763686";
import { trackEventAnalytics } from "../905/449184";
import { RecordingComponent, handleFocusEvent, generateRecordingKey } from "../figma_app/878298";
import { logError } from "../905/714362";
import { renderI18nText, getI18nString } from "../905/303541";
import { fk } from "../figma_app/618433";
import { popModalStack } from "../905/156213";
import { D, m as _$$m } from "../905/852057";
import { selectCurrentFile } from "../figma_app/516028";
import { _b } from "../figma_app/841351";
import { registerModal } from "../905/102752";
import { B } from "../905/867899";
import { u as _$$u, R } from "../905/375517";
let x = class e extends RecordingComponent {
  constructor(t) {
    super(t);
    this.onConfirmSavepointModal = (e, t) => {
      let r = e || "";
      let n = t || "";
      this.props.editingSavepointID && this.props.fileKey ? (this.props.dispatch(D({
        fileKey: this.props.fileKey,
        savepointID: this.props.editingSavepointID,
        label: r,
        description: n
      })), this.hideModal(), trackEventAnalytics("History Version Edited Information", {
        savepointId: this.props.editingSavepointID,
        labelLength: r.length,
        descriptionLength: n.length
      })) : r.length > 0 && this.props.fileKey && (this.props.dispatch(_$$m({
        fileKey: this.props.fileKey,
        label: r,
        description: n
      })), this.hideModal(), trackEventAnalytics(`History Version Created from ${this.props.isHistoryMode ? "History Mode" : "Keyboard Shortcut"}`, {
        savepointId: this.props.editingSavepointID,
        labelLength: r.length,
        descriptionLength: n.length
      }));
      this.clearSavedInputs();
    };
    this.hideModal = () => {
      this.props.dispatch(popModalStack());
    };
    this.onSubmit = handleFocusEvent(this, "submit", () => {
      this.onConfirmSavepointModal(this.state.label, this.state.description);
    });
    this.onCancel = () => {
      this.clearSavedInputs();
      this.hideModal();
    };
    this.saveHistoryInputs = () => {
      e.keepSavepointModalInput = !0;
      e.savedLabelInput = this.state.label;
      e.savedDescriptionInput = this.state.description;
    };
    this.clearSavedInputs = () => {
      e.keepSavepointModalInput = !1;
      e.savedLabelInput = "";
      e.savedDescriptionInput = "";
    };
    this.onLabelChange = e => {
      this.setState({
        label: e
      });
    };
    this.onLabelBlur = e => {
      this.onLabelChange(e.target.value);
    };
    this.onDescriptionChange = e => {
      this.setState({
        description: e
      });
    };
    this.onDescriptionBlur = e => {
      this.onDescriptionChange(e.target.value);
    };
    this.goHistoryMode = () => {
      this.props.isHistoryMode || (this.props.dispatch(_b()), this.saveHistoryInputs(), this.hideModal());
    };
    this.state = {
      label: "",
      description: "",
      disableConfirm: !this.props.isLabelReadOnly
    };
  }
  hydrateLabelAndDescription() {
    this.state.label.length < 1 && this.state.description.length < 1 && (e.keepSavepointModalInput ? this.setState({
      label: e.savedLabelInput,
      description: e.savedDescriptionInput
    }) : this.setState({
      label: this.props.label,
      description: this.props.description
    }));
  }
  componentDidMount() {
    this.hydrateLabelAndDescription();
    super.componentDidMount();
  }
  UNSAFE_componentWillReceiveProps() {
    this.hydrateLabelAndDescription();
  }
  render() {
    if (this.props.isViewOnly) return null;
    let e = this.state.disableConfirm;
    this.state.label && this.state.label.length > 0 && (e = !1);
    let t = renderI18nText("collaboration.feedback.save_modal.save");
    let r = renderI18nText("collaboration.feedback.save_modal.cancel");
    return jsxs(Fragment, {
      children: [jsxs(nB, {
        children: [jsxs("div", {
          className: _$$u,
          children: [this.props.isEditingMergeSavepoint && jsx(Label, {
            htmlFor: "savepoint-modal-title",
            children: renderI18nText("collaboration.feedback.save_modal.merge_name_placeholder")
          }), jsx(_$$p, {
            id: "savepoint-modal-title",
            disabled: this.props.isLabelReadOnly,
            onChange: this.onLabelChange,
            htmlAttributes: {
              onBlur: this.onLabelBlur
            },
            placeholder: getI18nString("fullscreen.savepoint_modal.title"),
            "aria-label": getI18nString("fullscreen.savepoint_modal.title_label"),
            recordingKey: generateRecordingKey(this.props, "title"),
            value: this.state.label
          })]
        }), jsxs("div", {
          className: _$$u,
          children: [this.props.isEditingMergeSavepoint && jsx(Label, {
            htmlFor: "savepoint-modal-description",
            children: renderI18nText("fullscreen.savepoint_modal.give_this_merge_a_description")
          }), jsx(_$$T, {
            id: "savepoint-modal-description",
            "aria-label": getI18nString("fullscreen.savepoint_modal.description_label"),
            value: this.state.description,
            placeholder: getI18nString("collaboration.feedback.save_modal.description_placeholder"),
            onChange: this.onDescriptionChange,
            htmlAttributes: {
              onBlur: this.onDescriptionBlur
            },
            recordingKey: generateRecordingKey(this.props, "description")
          })]
        }), this.props.hasCMSData && jsx("div", {
          className: _$$u,
          children: jsx(B, {})
        }), jsx("div", {
          className: _$$u,
          children: !this.props.isHistoryMode && !this.props.hideShowFullVersionHistoryCTA && jsx(_$$E, {
            className: R,
            onClick: this.goHistoryMode,
            children: renderI18nText("fullscreen.savepoint_modal.show_full_version_history")
          })
        })]
      }), jsx(wi, {
        children: jsxs(jk, {
          children: [jsx($n, {
            variant: "secondary",
            onClick: this.onCancel,
            children: r
          }), jsx($n, {
            type: "submit",
            disabled: e,
            "data-testid": "savepoint-modal-submit",
            onClick: this.onSubmit,
            children: t
          })]
        })
      })]
    });
  }
};
function N(e, t) {
  return e ? t ? renderI18nText("collaboration.feedback.save_modal.edit_merge_details") : renderI18nText("collaboration.feedback.save_modal.edit_version_information") : renderI18nText("collaboration.feedback.save_modal.add_to_version_history");
}
x.displayName = "SavepointModal";
x.keepSavepointModalInput = !1;
x.savedLabelInput = "";
x.savedDescriptionInput = "";
let $$C1 = registerModal(function (e) {
  let t = useModalManager(e);
  let r = selectCurrentFile();
  let s = useDispatch();
  let o = useSelector(e => e.mirror.appModel.topLevelMode === ViewType.HISTORY);
  let l = e.description || "";
  let d = e.label || "";
  let c = e.savepointID;
  let h = e.isEditingMergeSavepoint || !1;
  let m = e.hideShowFullVersionHistoryCTA || !1;
  let f = r?.key;
  let y = fk(f);
  let b = N(c, h);
  return r && null != f ? jsx(bL, {
    manager: t,
    width: "lg",
    children: jsxs(vo, {
      children: [jsx(Y9, {
        children: jsx(hE, {
          children: b
        })
      }), jsx(x, {
        description: l,
        dispatch: s,
        editingSavepointID: c,
        fileKey: f,
        hasCMSData: y,
        hideShowFullVersionHistoryCTA: m,
        isEditingMergeSavepoint: h,
        isHistoryMode: o,
        isViewOnly: !r.canEdit,
        label: d,
        recordingKey: "savepointModal"
      })]
    })
  }) : (logError("Save Point Modal", "File key is missing.", {}, {
    reportAsSentryError: !0
  }), null);
});
let $$w0 = registerModal(function (e) {
  let t = selectCurrentFile();
  let r = useDispatch();
  let s = useModalManager(e);
  let o = N(e.savepointID, !1);
  return t ? jsx(bL, {
    manager: s,
    width: "lg",
    children: jsxs(vo, {
      children: [jsx(Y9, {
        children: jsx(hE, {
          children: o
        })
      }), jsx(x, {
        description: e.description ?? "",
        dispatch: r,
        editingSavepointID: e.savepointID,
        fileKey: t.key,
        hasCMSData: !1,
        isHistoryMode: !0,
        isLabelReadOnly: !0,
        isViewOnly: !t.canEdit,
        label: e.label ?? "",
        recordingKey: "savepointModal"
      })]
    })
  }) : null;
}, "DevModeSavepointModal");
export const S = $$w0;
export const y = $$C1;