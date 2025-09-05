import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useEffect, Component, PureComponent, useId, useCallback } from "react";
import { useSelector } from "../vendor/514228";
import { ServiceCategories as _$$e } from "../905/165054";
import { K as _$$K } from "../905/443068";
import { $n, IK } from "../905/521428";
import { c$, bL, l9, mc } from "../905/493196";
import { h as _$$h } from "../905/270045";
import { A as _$$A } from "../905/920165";
import { R as _$$R } from "../905/649743";
import { T as _$$T } from "../905/2124";
import { CUU, glU } from "../figma_app/763686";
import { l7 } from "../905/189185";
import { getFeatureFlags } from "../905/601108";
import { eU, fp } from "../figma_app/27355";
import E from "classnames";
import { az } from "../905/449184";
import { Pt } from "../figma_app/806412";
import { $D } from "../905/11";
import { Fe } from "../905/284552";
import { Y as _$$Y } from "../905/506207";
import { YQ } from "../905/502364";
import { t as _$$t, tx } from "../905/303541";
import { fu } from "../figma_app/831799";
import { LN } from "../figma_app/975811";
import { D as _$$D } from "../figma_app/451499";
import { dG } from "../figma_app/753501";
import { A as _$$A2 } from "../905/639174";
import { Y5 } from "../figma_app/455680";
import { f7 } from "../figma_app/896988";
import { Jr } from "../figma_app/624361";
import { y7, Lt } from "../figma_app/385874";
import { Sl } from "../905/619652";
import { Zr } from "../figma_app/678782";
import { J as _$$J } from "../905/95677";
import { q5 } from "../figma_app/516028";
import { Qn } from "../figma_app/12796";
import { zk } from "../figma_app/198712";
import { Ib } from "../905/129884";
import { qo } from "../905/959568";
import { X7 } from "../905/713167";
import { p as _$$p } from "../905/725707";
import { Y as _$$Y2 } from "../905/513028";
import { K as _$$K2 } from "../figma_app/622160";
import { A as _$$A3 } from "../905/502895";
import { $O } from "../905/194758";
import { Q7 } from "../905/203369";
import { u as _$$u } from "../figma_app/365543";
import { c as _$$c } from "../905/913880";
import { Id, fI } from "../figma_app/626177";
import { l6, c$ as _$$c$ } from "../905/794875";
import { GM } from "../figma_app/251115";
import { JT } from "../figma_app/632248";
import { B3 } from "../figma_app/862289";
import { Sn } from "../905/946805";
import { $I } from "../figma_app/322845";
import { Tu } from "../figma_app/724968";
import { Os } from "../905/705135";
import { F as _$$F } from "../905/153202";
import { v as _$$v } from "../905/501497";
import { P as _$$P } from "../905/38113";
import { IP, km, Vq, oc, rv, ZS, mw, GA as _$$GA, b_, ZM, Ts, G3, C0, Fu, D3, ho, mQ, dW, QY, Nd, ak, tx as _$$tx, CD, Wf } from "../905/119782";
import { A as _$$A4 } from "../3850/338929";
var y = E;
let e_ = "image-scale-mode-select";
let eh = l6;
let em = _$$c$;
let $$eg4 = eU(!1);
let ef = qo;
let eE = (e, t) => e.every((e, r) => e === t[r]);
export function $$ey2(e) {
  return !!y7(e) && e.image && "Checker" === e.image.name;
}
export async function $$eb0(e) {
  let t = Array.from(e.animatedImage.hash).map(e => e.toString(16).padStart(2, "0")).join("");
  await Jr().loadImageByHash(t);
  let r = Sl(e);
  return CUU.requestGIFData(r);
}
export function $$eT3(e) {
  let [, t] = fp($$eg4);
  useEffect(() => (t(!0), () => t(!1)), [t]);
  let r = GM();
  let s = Os();
  let o = X7();
  let l = q5();
  let d = useSelector(e => e.isOpenFileLoadedFromLiveGraph);
  return jsx(fu, {
    name: "Image Settings Modal",
    children: jsx(eI, {
      ...e,
      isUI3: !0,
      isAiEnabled: r && !s,
      insetImageSettings: o,
      openFile: l,
      isOpenFileLoadedFromLiveGraph: d
    })
  });
}
class eI extends Component {
  constructor(e) {
    super(e);
    this.onRotateClockwiseClick = () => {
      this.props.onChange(Lt(this.props.paint, 90), zk.YES);
      l7.user("image-rotate-clockwise", () => {
        glU.repairThumbnails();
      });
    };
    this.onScalingFactorChange = e => {
      this.props.onChange({
        ...this.props.paint,
        scale: e
      });
    };
    this.onPaintColorAdjustChange = (e, t, r) => {
      let n = {
        ...this.props.paint.paintFilter,
        [e]: t
      };
      this.props.onChange({
        ...this.props.paint,
        paintFilter: n
      }, r ? zk.YES : zk.NO);
      this.setState({
        forceThumbnailUpdate: r
      });
      r && az.trackDefinedEvent("ai_productivity.fills_panel_image_adjust_slider_updated", {
        sliderName: e,
        sliderValue: t?.toString()
      });
    };
    this.onGIFFrameChange = e => {
      let t = Math.round(e);
      this.setState({
        animationFrameForScrubber: t,
        playing: !1
      });
    };
    this.onVideoTimeChange = e => {
      this.setState({
        currentTimeForScrubber: e,
        playing: !1
      });
    };
    this.setGIFCoverFrame = e => {
      if (!this.state.animatedFrameData) {
        console.warn("No frame stored in state to update");
        return;
      }
      let t = e ?? this.state.animationFrameForScrubber;
      if ((null != e || t !== this.props.paint.animationFrame) && !this.props.updateStillImageAndSelectionPropertiesForGIF({
        ...this.props.paint,
        animationFrame: t
      }, this.state.animatedFrameData.data)) {
        console.warn("Failed to update image");
        return;
      }
    };
    this.setGIFPlaying = e => {
      this.setState({
        playing: e
      });
    };
    this.setVideoPlaying = e => {
      this.setState({
        playing: e
      });
    };
    this.onUpdateAnimatedFrameData = e => {
      this.setState({
        animatedFrameData: e
      });
    };
    this.onUpdateCurrentTime = e => {
      this.setState({
        currentTimeForScrubber: e
      });
    };
    this.setVideoDuration = e => {
      this.setState({
        videoDuration: e
      });
    };
    this.uploadImagePaint = () => {
      let e = this.props.paint.blendMode;
      let t = this.props.paint.opacity;
      glU.uploadPaintImage(e, t);
    };
    this.uploadMediaPaint = () => {
      let e = this.props.paint.blendMode;
      let t = this.props.paint.opacity;
      glU.uploadPaintMedia(e, t);
    };
    this.waitingForGIF = !1;
    this.clearGIFContentRequest = () => {
      this.waitingForGIF = !1;
    };
    this.setupGIF = () => {
      this.setState({
        animatedImage: null,
        animationFrameForScrubber: this.props.paint.animationFrame,
        playing: !1
      });
      this.waitingForGIF = !0;
      $$eb0(this.props.paint).then(e => {
        this.waitingForGIF && this.setState({
          animatedImage: _$$J(e)
        });
      }).catch(e => $D(_$$e.FIGJAM, e));
    };
    this.loadVideoJs = async () => {
      if (!this.state.videoJsLib) {
        let e = await Fe();
        this.setState({
          videoJsLib: e
        });
      }
    };
    this.setupVideoJs = () => {
      this.setState({
        currentTimeForScrubber: 0,
        videoDuration: 0,
        playing: !1,
        videoJsLib: null,
        isVideoLoaded: !1
      });
      this.loadVideoJs();
    };
    this.setIsVideoLoaded = e => {
      this.setState({
        isVideoLoaded: e
      });
    };
    this.setUserClickedVideoControls = e => {
      this.setState({
        userClickedVideoControls: e
      });
    };
    this.isAnimatedImage = () => !!this.props.paint.animatedImage;
    this.isVideo = () => !!this.props.paint.video || "VIDEO" === this.props.paint.type;
    this.isDragTarget = () => !0;
    this.onDragEnter = () => {
      this.setState({
        isDragHover: !0
      });
    };
    this.onDragLeave = () => {
      this.setState({
        isDragHover: !1
      });
    };
    this.onDrop = e => {
      this.setState({
        isDragHover: !1
      });
      let t = this.props.paint.blendMode;
      let r = this.props.paint.opacity;
      this.props.dropImageOnPaintThumbnail(t, r, e);
    };
    this.onImageButtonCointainerMouseOver = () => {
      this.setState({
        isPreviewHover: !0
      });
    };
    this.onImageButtonCointainerMouseOut = () => {
      this.setState({
        isPreviewHover: !1
      });
    };
    this.onImageButtonFocus = () => {
      this.setState({
        isImageButtonFocused: !0
      });
    };
    this.onImageButtonBlur = () => {
      this.setState({
        isImageButtonFocused: !1
      });
    };
    this.state = {
      isDragHover: !1,
      isPreviewHover: !1,
      isImageButtonFocused: !1,
      forceThumbnailUpdate: !1,
      animatedImage: null,
      animatedFrameData: null,
      animationFrameForScrubber: e.paint.animationFrame || 0,
      currentTimeForScrubber: 0,
      videoDuration: 0,
      playing: !1,
      videoJsLib: null,
      isVideoLoaded: !1,
      userClickedVideoControls: !1
    };
  }
  componentDidMount() {
    this.isAnimatedImage() ? this.setupGIF() : this.isVideo() && this.setupVideoJs();
  }
  UNSAFE_componentWillReceiveProps(e) {
    this.props.paint.animationFrame !== e.paint.animationFrame && this.setState({
      animationFrameForScrubber: e.paint.animationFrame
    });
  }
  componentDidUpdate(e) {
    let t = null != e.paint.animatedImage;
    let r = null != this.props.paint.animatedImage;
    !t && r ? this.setupGIF() : t && r ? eE(e.paint.animatedImage.hash, this.props.paint.animatedImage.hash) || this.setupGIF() : t && !r && this.clearGIFContentRequest();
    "STRETCH" === this.props.paint.imageScaleMode && YQ({
      id: "Image panel has cropped image"
    });
  }
  componentWillUnmount() {
    this.setVideoPlaying(!1);
    this.clearGIFContentRequest();
  }
  renderInlinePreview() {
    let e = this.props.insetImageSettings ? 208 : ef;
    let t = this.props.insetImageSettings ? 208 : 152;
    return this.isVideo() ? jsx(_$$A3, {
      className: IP,
      currentTime: this.state.currentTimeForScrubber,
      height: t,
      imagePaint: this.props.paint,
      isVideoLoaded: this.state.isVideoLoaded,
      onUpdateCurrentTime: this.onUpdateCurrentTime,
      openFileKey: this.props.openFile?.key,
      playing: this.state.playing,
      setDuration: this.setVideoDuration,
      setIsVideoLoaded: this.setIsVideoLoaded,
      setPlaying: this.setVideoPlaying,
      setUserClickedControls: this.setUserClickedVideoControls,
      userClickedControls: this.state.userClickedVideoControls,
      videoJsLib: this.state.videoJsLib,
      width: e
    }) : this.isAnimatedImage() ? jsx(_$$Y2, {
      imagePaint: this.props.paint,
      width: e,
      height: t,
      className: km,
      animatedImage: this.state.animatedImage,
      animationFrame: this.state.animationFrameForScrubber,
      onUpdateFrameData: this.onUpdateAnimatedFrameData,
      playing: this.state.playing
    }) : jsx(_$$K2, {
      imagePaint: this.props.paint,
      width: e,
      height: t,
      className: km,
      forceUpdate: this.state.forceThumbnailUpdate
    });
  }
  renderMediaControls(e) {
    if (this.isVideo()) {
      if (!e) return jsx(_$$c, {});
      if (this.props.paint.video) return jsx(_$$P, {
        paint: this.props.paint,
        currentTime: this.state.currentTimeForScrubber || 0,
        duration: this.state.videoDuration,
        onVideoTimeChange: this.onVideoTimeChange,
        disabled: null == this.props.paint.video,
        isVideoLoaded: this.state.isVideoLoaded,
        setPlaying: this.setVideoPlaying,
        playing: null != this.props.paint.video && this.state.playing,
        setUserClickedControls: this.setUserClickedVideoControls
      });
    } else if (this.isAnimatedImage()) return jsx(_$$F, {
      paint: this.props.paint,
      animationFrame: this.state.animationFrameForScrubber || 0,
      numFrames: this.state.animatedImage ? this.state.animatedImage.numFrames() : null,
      onGIFFrameChange: this.onGIFFrameChange,
      disabled: null == this.state.animatedImage,
      setPlaying: this.setGIFPlaying,
      playing: null != this.state.animatedImage && this.state.playing,
      setGIFCoverFrame: this.setGIFCoverFrame
    });else return jsxs(Fragment, {
      children: [this.props.isAiEnabled && jsx(eC, {
        onClose: this.props.onClose
      }), jsx(fu, {
        name: "Color Adjust Sliders",
        children: jsx("div", {
          className: y()(Vq, {
            [oc]: this.props.insetImageSettings
          }),
          children: ["exposure", "contrast", "vibrance", "temperature", "tint", "highlights", "shadows"].map(e => jsx($$eN5, {
            propertyName: e,
            onChange: this.onPaintColorAdjustChange,
            filterColorAdjust: this.props.paint.paintFilter,
            min: "contrast" === e ? -.3 : -1,
            max: "contrast" === e ? .3 : 1,
            recordingKey: Pt(this.props, e)
          }, e))
        })
      })]
    });
  }
  render() {
    let e = this.isVideo();
    let t = Qn(this.props.openFile);
    let r = !this.isVideo() && !this.isAnimatedImage() && this.props.isUI3 && this.props.isAiEnabled;
    let i = this.props.insetImageSettings ? 208 : ef;
    let a = this.props.insetImageSettings ? 208 : 152;
    let s = $$ey2(this.props.paint);
    var d = (this.state.isPreviewHover || this.state.isImageButtonFocused || s ? rv : ZS) + (this.state.isDragHover ? " " + mw : "");
    e && !t && (d = ZS);
    let c = jsxs(Fragment, {
      children: [getFeatureFlags().ce_tv_fpl_select ? jsx(ev, {
        ...this.props,
        recordingKey: Pt(this.props, "imageScale")
      }) : jsx(eA, {
        ...this.props,
        recordingKey: Pt(this.props, "imageScale")
      }), "TILE" === this.props.paint.imageScaleMode && jsx(ex, {
        className: y()({
          [_$$GA]: !this.props.insetImageSettings,
          [b_]: this.props.insetImageSettings
        }),
        value: "TILE" !== this.props.paint.imageScaleMode ? 1 : this.props.paint.scale,
        onChange: this.onScalingFactorChange,
        recordingKey: Pt(this.props, "scalingFactor")
      })]
    });
    let u = jsx("span", {
      className: y()({
        [ZM]: !this.props.insetImageSettings
      }),
      children: jsx($O, {
        paint: this.props.paint
      })
    });
    let _ = jsx("span", {
      className: y()({
        [Ts]: !this.props.insetImageSettings
      }),
      children: jsx(_$$K, {
        onClick: this.onRotateClockwiseClick,
        "aria-label": _$$t("fullscreen.properties_panel.rotate_90"),
        recordingKey: Pt(this.props, "rotateClockwise"),
        htmlAttributes: {
          "data-tooltip": _$$t("fullscreen.properties_panel.rotate_90"),
          "data-tooltip-type": Ib.TEXT
        },
        children: jsx(_$$R, {})
      })
    });
    return jsxs(Id, {
      className: y()({
        [G3]: this.props.insetImageSettings
      }),
      children: [this.props.insetImageSettings ? jsxs("div", {
        className: C0,
        "data-onboarding-key": e_,
        children: [jsx("div", {
          className: Fu,
          children: c
        }), jsxs("div", {
          className: D3,
          children: [r && u, _]
        })]
      }) : jsxs(fI, {
        "data-onboarding-key": e_,
        children: [c, r && u, _]
      }), jsx(_$$Y, {
        className: y()(d, {
          [ho]: this.props.insetImageSettings
        }),
        style: {
          backgroundImage: `url('${_$$A2()}')`
        },
        isDragTarget: this.isDragTarget,
        onMouseOver: this.onImageButtonCointainerMouseOver,
        onMouseOut: this.onImageButtonCointainerMouseOut,
        onTargetDragEnter: this.onDragEnter,
        onTargetDragLeave: this.onDragLeave,
        onTargetDrop: this.onDrop,
        recordingKey: Pt(this.props, "dropTarget"),
        children: jsxs("div", {
          className: y()({
            [mQ]: !this.props.insetImageSettings || this.props.insetImageSettings && s
          }),
          children: [this.renderInlinePreview(), jsxs("div", {
            className: dW,
            style: {
              width: i,
              height: a
            },
            children: [e && t && jsx("span", {
              className: QY,
              children: jsx($n, {
                onClick: this.uploadMediaPaint,
                htmlAttributes: {
                  onFocus: this.onImageButtonFocus,
                  onBlur: this.onImageButtonBlur
                },
                variant: "primary",
                children: tx("fullscreen.properties_panel.image_settings.upload_new")
              })
            }), !e && jsx(_$$v, {
              uploadImagePaint: this.uploadImagePaint,
              isInset: this.props.insetImageSettings,
              onClose: this.props.onClose
            })]
          })]
        })
      }), this.renderMediaControls(t), this.isAnimatedImage() && jsx(_$$u, {
        title: _$$t("fullscreen.properties_panel.gifs_in_figma_prototypes"),
        icon_DEPRECATED: _$$A4,
        userFlag: "dismissed_gifs_cover_frame_hint",
        hintText: _$$t("fullscreen.properties_panel.choose_which_frame_displayed")
      }), jsx(_$$p, {
        paint: this.props.paint,
        onChange: this.props.onChange,
        positionOverride: e ? void 0 : ew.opacityPositionOverride
      })]
    });
  }
}
eI.displayName = "ImageSettingsModal";
export let $$eS1 = ["FILL", "FIT", "STRETCH", "TILE"];
function ev(e) {
  let t = new _$$D();
  let r = t => {
    "STRETCH" === t ? Y5.triggerActionInUserEditScope("crop-image") : e.onChange({
      ...e.paint,
      imageScaleMode: t
    });
  };
  let i = $$eS1.map((e, r) => jsx(c$, {
    value: e,
    children: t.format(e)
  }, r));
  return jsx("span", {
    className: y()({
      [Nd]: !e.insetImageSettings,
      [ak]: e.insetImageSettings
    }),
    children: jsxs(bL, {
      value: e.paint.imageScaleMode.toString(),
      onChange: e => {
        r(e);
      },
      recordingKey: e.recordingKey,
      children: [jsx(l9, {
        width: "fill",
        label: jsx(_$$h, {
          children: _$$t("fullscreen.properties_panel.image_scale_mode")
        })
      }), jsx(mc, {
        children: i
      })]
    })
  });
}
ev.displayName = "ImageScaleSelection";
class eA extends PureComponent {
  constructor() {
    super(...arguments);
    this.imageScaleModeFormatter = new _$$D();
    this.onImageScaleModeChange = e => {
      "STRETCH" === e ? Y5.triggerActionInUserEditScope("crop-image") : this.props.onChange({
        ...this.props.paint,
        imageScaleMode: e
      });
    };
  }
  render() {
    let e = $$eS1.map((e, t) => jsx(em, {
      value: e,
      recordingKey: Pt(this.props, e)
    }, t));
    return jsx(eh, {
      ariaLabel: _$$t("fullscreen.properties_panel.image_scale_mode"),
      className: y()({
        [Nd]: !this.props.insetImageSettings,
        [ak]: this.props.insetImageSettings
      }),
      dispatch: this.props.dispatch,
      dropdownShown: this.props.dropdownShown,
      formatter: this.imageScaleModeFormatter,
      id: "image-scale-mode-select",
      onChange: this.onImageScaleModeChange,
      onMouseDown: dG,
      property: this.props.paint.imageScaleMode,
      recordingKey: this.props.recordingKey,
      children: e
    });
  }
}
eA.displayName = "ImageScaleSelection";
class ex extends PureComponent {
  constructor() {
    super(...arguments);
    this.formatter = new LN({
      min: .01,
      max: 100
    });
  }
  render() {
    return jsx(Q7, {
      className: this.props.className,
      formatter: this.formatter,
      property: this.props.value,
      disabled: this.props.disabled,
      onChange: this.props.onChange,
      recordingKey: this.props.recordingKey
    });
  }
}
export function $$eN5({
  min: e = -1,
  max: t = 1,
  propertyName: r,
  ...a
}) {
  let s = useId();
  let o = X7();
  return jsxs(fI, {
    children: [jsx("div", {
      id: s,
      className: _$$tx,
      children: function (e) {
        switch (e) {
          case "exposure":
            return _$$t("fullscreen.properties_panel.exposure");
          case "contrast":
            return _$$t("fullscreen.properties_panel.contrast");
          case "vibrance":
            return _$$t("fullscreen.properties_panel.saturation");
          case "temperature":
            return _$$t("fullscreen.properties_panel.temperature");
          case "tint":
            return _$$t("fullscreen.properties_panel.tint");
          case "highlights":
            return _$$t("fullscreen.properties_panel.highlights");
          case "shadows":
            return _$$t("fullscreen.properties_panel.shadows");
        }
      }(r)
    }), jsx("div", {
      className: y()(CD, {
        [Wf]: o
      }),
      children: jsx(_$$A, {
        "aria-labelledby": s,
        bigStep: .1,
        defaultValue: 0,
        hints: [0],
        htmlAttributes: {
          onKeyDownCapture: e => {
            Y5.isReady() && f7(e);
          }
        },
        max: t,
        min: e,
        onChange: (e, {
          commit: t
        }) => {
          a.onChange(r, e, t);
        },
        rangeAnchor: 0,
        recordingKey: a.recordingKey,
        step: .01,
        value: a.filterColorAdjust?.[r] || 0
      })
    })]
  });
}
function eC({
  onClose: e
}) {
  let t = useCallback(() => {
    B3(JT.EDIT_IMAGE);
    scheduler.postTask(() => {
      e();
      $I({
        moduleToOpen: {
          type: "custom",
          module: jsx(Tu, {}),
          name: Sn.EDIT_IMAGE
        },
        trackingData: {
          source: "image_settings"
        }
      });
    });
  }, [e]);
  return Zr(JT.EDIT_IMAGE) ? jsx("div", {
    className: "x1xk1jr8",
    children: jsx(IK, {
      onClick: t,
      variant: "secondary",
      children: jsxs("div", {
        className: "x78zum5 x6s0dn4 xl56j7k",
        children: [jsx(_$$T, {}), tx("fullscreen_actions.edit_image")]
      })
    })
  }) : null;
}
ex.displayName = "ScalingFactorInputs";
let ew = {
  opacityPositionOverride: {
    gridColumnStart: "xv2tl8m",
    $$css: !0
  }
};
export const Bc = $$eb0;
export const GA = $$eS1;
export const II = $$ey2;
export const SY = $$eT3;
export const Vk = $$eg4;
export const ih = $$eN5;