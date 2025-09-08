import { jsx, jsxs } from "react/jsx-runtime";
import { useContext, Component } from "react";
import { useDispatch, useSelector } from "../vendor/514228";
import { hS } from "../905/437088";
import { bL } from "../905/38914";
import { vo, r1, nB } from "../figma_app/272243";
import { A as _$$A } from "../905/920165";
import { trackEventAnalytics } from "../905/449184";
import { vd } from "../figma_app/637027";
import { x } from "../905/211326";
import { s as _$$s } from "../cssbuilder/589278";
import { s as _$$s2 } from "../905/573154";
import { getI18nString, renderI18nText } from "../905/303541";
import { pI, nx, _E } from "../figma_app/443991";
import { c as _$$c } from "../905/370443";
import { A as _$$A2 } from "../905/639174";
import { uW } from "../905/187165";
import { hv, Pf, ck } from "../905/952832";
import { registerModal, ModalSupportsBackground } from "../905/102752";
import { Rv } from "../figma_app/728075";
import { pL } from "../figma_app/639088";
let $$x0 = registerModal(function (e) {
  let t = useDispatch();
  let i = useContext(uW);
  let o = useSelector(e => e.avatarEditorState);
  let l = hS(e);
  return jsx(x, {
    isLoading: o.status !== hv.POSITIONING,
    children: () => jsx(w, {
      ...e,
      fplModalManager: l,
      designTokens: i,
      avatarEditorState: o,
      dispatch: t
    })
  });
}, "AVATAR_EDITOR_MODAL", ModalSupportsBackground.YES);
let S = {
  CIRCLE: (e, t) => {
    e.fillStyle = t.colorBg;
    e.beginPath();
    e.moveTo(0, 0);
    e.lineTo(200, 0);
    e.lineTo(200, 200);
    e.lineTo(0, 200);
    e.lineTo(0, 0);
    e.moveTo(0, 100);
    e.arc(100, 100, 100, 0, 2 * Math.PI, !0);
    e.fill();
    e.restore();
  },
  SQUARE: e => {
    e.fillStyle = Rv;
    let t = Math.floor(20);
    let i = new Path2D();
    i.moveTo(10 + t, 10);
    i.lineTo(190 - t, 10);
    i.arcTo(190, 10, 190, 10 + t, t);
    i.lineTo(190, 190 - t);
    i.arcTo(190, 190, 190 - t, 190, t);
    i.lineTo(10 + t, 190);
    i.arcTo(10, 190, 10, 190 - t, t);
    i.lineTo(10, 10 + t);
    i.arcTo(10, 10, 10 + t, 10, t);
    i.moveTo(0, 0);
    i.lineTo(200, 0);
    i.lineTo(200, 200);
    i.lineTo(0, 200);
    i.lineTo(0, 0);
    i.closePath();
    e.fill(i, "evenodd");
    e.restore();
  }
};
class w extends Component {
  constructor() {
    super(...arguments);
    this.mask = S[this.props.avatarEditorState.shape ?? "CIRCLE"];
    this.previewScale = 0;
    this.previewOffset = {
      x: 100,
      y: 100
    };
    this.canvasStyle = {
      background: `url('${_$$A2()}')`,
      width: 200,
      height: 200,
      display: "block",
      margin: "20px auto 10px auto",
      cursor: "move"
    };
    this.dragStart = null;
    this.state = {
      hasImageLoaded: !1,
      sliderScale: 0
    };
    this.componentDidMount = async () => {
      try {
        this.image = await this.loadImageFile(this.props.avatarEditorState.file);
      } catch {
        this.props.dispatch(_$$s2.error(getI18nString("avatar_editor.an_error_occurred_while_loading_the_image")));
        this.props.onClose();
        return;
      }
      if (this.image.width < Pf.LARGE || this.image.height < Pf.LARGE) {
        this.props.dispatch(_$$s2.error(getI18nString("avatar_editor.your_profile_image_must_be_at_least_500_x500_px")));
        this.props.onClose();
        return;
      }
      this.setState({
        hasImageLoaded: !0
      });
    };
    this.startUpload = () => {
      this.props.onClose();
      let e = this.props.avatarEditorState.entityType === ck.WORKSPACE ? "image/png" : "image/jpeg";
      this.props.dispatch(pI({
        entity: this.props.avatarEditorState.entity,
        entityType: this.props.avatarEditorState.entityType,
        small: nx(_E(this.image, Pf.SMALL, this.computeImagePosition(Pf.SMALL), e)),
        large: nx(_E(this.image, Pf.LARGE, this.computeImagePosition(Pf.LARGE), e)),
        contentType: e
      }));
      trackEventAnalytics("Change Profile Picture");
    };
    this.loadImageFile = e => {
      let t = new Image();
      return new Promise((i, n) => {
        t.onerror = e => {
          n(e);
        };
        t.onload = () => {
          URL.revokeObjectURL(r);
          i(t);
        };
        let r = URL.createObjectURL(e);
        t.src = r;
      });
    };
    this.mountCanvas = e => {
      if (!e) return;
      this.ctx = e.getContext("2d");
      let t = window.devicePixelRatio || 1;
      e.width = 200 * t;
      e.height = 200 * t;
      this.ctx.scale(t, t);
      let i = this.hasAlpha(this.image) ? Math.max(this.image.width, this.image.height) * Math.SQRT2 : Math.min(this.image.width, this.image.height);
      this.previewScale = 200 / i;
      this.renderCanvasContent();
    };
    this.onCanvasDown = e => {
      let t = e.nativeEvent;
      0 === t.button && (e.preventDefault(), document.addEventListener("mousemove", this.onCanvasMove), document.addEventListener("mouseup", this.onCanvasUp), this.dragStart = {
        x: t.pageX,
        y: t.pageY
      });
    };
    this.onCanvasMove = e => {
      if (e.preventDefault(), this.dragStart) {
        let t = this.dragStart;
        this.previewOffset.x += e.pageX - t.x;
        this.previewOffset.y += e.pageY - t.y;
        this.renderCanvasContent();
        this.dragStart = {
          x: e.pageX,
          y: e.pageY
        };
      }
    };
    this.onCanvasUp = e => {
      e.preventDefault();
      document.removeEventListener("mousemove", this.onCanvasMove);
      document.removeEventListener("mouseup", this.onCanvasMove);
      this.dragStart = null;
    };
    this.buttonRef = e => {
      e && (e.autofocus = !0);
    };
  }
  hasAlpha(e) {
    this.ctx.clearRect(0, 0, 200, 200);
    this.ctx.drawImage(e, 0, 0, 200, 200);
    return this.ctx.getImageData(0, 0, 1, 1).data[3] < 255;
  }
  computeImageScaleFactor(e) {
    e = e ?? this.state.sliderScale;
    return this.previewScale * Math.pow(100, e);
  }
  computeImagePosition(e) {
    let t = e / 200;
    let i = this.computeImageScaleFactor() * t;
    let n = this.image.width * i;
    let r = this.image.height * i;
    return {
      x: this.previewOffset.x * t - n / 2,
      y: this.previewOffset.y * t - r / 2,
      width: n,
      height: r
    };
  }
  renderCanvasContent() {
    let e = this.ctx;
    e.clearRect(0, 0, 200, 200);
    let t = this.computeImagePosition(200);
    e.drawImage(this.image, t.x, t.y, t.width, t.height);
    e.save();
    this.mask(e, this.props.designTokens);
  }
  render() {
    return this.state.hasImageLoaded ? jsx(bL, {
      manager: this.props.fplModalManager,
      width: 296,
      children: jsxs(vo, {
        children: [jsx(r1, {
          children: renderI18nText("avatar_editor.modal_title")
        }), jsx(nB, {
          children: jsx(x, {
            isLoading: this.props.avatarEditorState.status !== hv.POSITIONING,
            children: () => jsxs("div", {
              className: _$$s.flex.flexColumn.gap24.itemsCenter.$,
              children: [jsx("canvas", {
                ref: this.mountCanvas,
                style: this.canvasStyle,
                onMouseDown: this.onCanvasDown
              }), jsxs("div", {
                className: _$$s.itemSelfStretch.flex.gap16.itemsCenter.font20.$,
                children: [jsx("span", {
                  "aria-hidden": "true",
                  className: _$$s.selectNone.$,
                  children: "-"
                }), jsx(_$$A, {
                  "aria-label": getI18nString("avatar_editor.scale"),
                  min: -.5,
                  max: 1,
                  step: .001,
                  bigStep: .1,
                  value: this.state.sliderScale,
                  onChange: e => {
                    let t = this.computeImageScaleFactor();
                    let i = this.computeImageScaleFactor(e);
                    this.previewOffset.x += (100 - this.previewOffset.x) * (1 - i / t);
                    this.previewOffset.y += (100 - this.previewOffset.y) * (1 - i / t);
                    this.previewScale = Math.pow(100, e);
                    this.setState({
                      sliderScale: e
                    }, () => {
                      this.renderCanvasContent();
                    });
                  }
                }), jsx("span", {
                  "aria-hidden": "true",
                  className: _$$s.selectNone.$,
                  children: "+"
                })]
              }), jsx(vd, {
                onClick: this.startUpload,
                className: pL,
                ref: this.buttonRef,
                trackingProperties: {
                  trackingDescriptor: _$$c.SAVE_PROFILE_PICTURE
                },
                children: renderI18nText("avatar_editor.save_image")
              })]
            })
          })
        })]
      })
    }) : null;
  }
}
w.displayName = "AvatarEditorModal";
export const _ = $$x0;