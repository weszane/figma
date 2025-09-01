import { jsxs, jsx } from "react/jsx-runtime";
import { PureComponent } from "react";
import { encodeBase64 } from "../905/561685";
export class $$s0 extends PureComponent {
  constructor(e) {
    super(e);
    this.canvasRef = (e) => this.canvas = e;
    this.resizeCanvasAndComputePadding = (e, t, i) => {
      let n = this.canvas.width = i.width;
      let r = this.canvas.height = i.height;
      let a = n / r;
      let s = this.canvas.getContext("2d");
      s.fillStyle = "rgba(0,0,0,0)";
      s.fillRect(0, 0, this.canvas.width, this.canvas.height);
      let o = s.createImageData(n, r);
      this.setState({
        imageData: o
      });
      let l = 0;
      n < e && r < t ? l = (t - r) / 2 : e / t < a && (l = (t - e / n * r) / 2);
      this.setState({
        verticalPadding: l
      });
      0 === l ? this.setState({
        constrainedHeight: Math.min(t, r)
      }) : this.setState({
        constrainedWidth: Math.min(e, n)
      });
    };
    this.renderCanvas = (e, t) => {
      let i = this.canvas.getContext("2d");
      let n = this.state.imageData;
      e || (e = 0);
      let r = t.blitFrame(e, n, i);
      this.props.onUpdateFrameData(r);
    };
    this.dimensionsForContainerDiv = () => {
      let e = {
        padding: `${this.state.verticalPadding}px 0px`
      };
      e.width = this.props.width;
      0 === this.state.verticalPadding && (e.height = this.props.height);
      return e;
    };
    this.dimensionsForContentElement = () => {
      let e = {
        display: "block",
        marginLeft: "auto",
        marginRight: "auto"
      };
      return 0 === this.state.verticalPadding ? {
        ...e,
        height: this.state.constrainedHeight
      } : {
        ...e,
        width: this.state.constrainedWidth
      };
    };
    this.state = {
      imageData: null,
      verticalPadding: 0,
      constrainedWidth: this.props.width,
      constrainedHeight: this.props.height
    };
  }
  UNSAFE_componentWillReceiveProps(e) {
    this.props.animatedImage !== e.animatedImage && e.animatedImage && this.resizeCanvasAndComputePadding(e.width, e.height, e.animatedImage);
  }
  componentDidUpdate(e, t) {
    this.props.animatedImage && (this.props.animatedImage !== e.animatedImage || this.props.animationFrame !== e.animationFrame) && this.renderCanvas(this.props.animationFrame, this.props.animatedImage);
  }
  componentDidMount() {
    this.props.animatedImage && this.renderCanvas(this.props.animationFrame, this.props.animatedImage);
  }
  render() {
    let e = this.props.playing && this.props.animatedImage;
    return jsxs("div", {
      style: this.dimensionsForContainerDiv(),
      children: [jsx("canvas", {
        className: this.props.className,
        ref: this.canvasRef,
        style: {
          ...this.dimensionsForContentElement(),
          display: e ? "none" : "inherit"
        }
      }), e && jsx("img", {
        style: this.dimensionsForContentElement(),
        src: `data:image/gif;base64,${encodeBase64(this.props.animatedImage.buf)}`,
        alt: ""
      })]
    });
  }
}
$$s0.displayName = "AnimatedPaintThumbnail";
export const Y = $$s0;