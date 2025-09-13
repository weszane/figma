import n, { getSingletonSceneGraph } from "../905/700578";
import { debugState } from "../905/407919";
import a, { getI18nString } from "../905/303541";
import { VisualBellActions } from "../905/302958";
import { S as _$$S } from "../figma_app/78808";
import { buildUploadUrl } from "../figma_app/169182";
import { Bb, ju, E_, Re, Ub, JT, co, _t, ZG, Yc, IM, QU, xe, H0, Fx, bH, kO, iL, Ax, Ay, NY, pA } from "../figma_app/274571";
import { buildFileUrl } from "../905/612685";
import { ShareContext } from "../905/91820";
import { Vn, mr } from "../figma_app/864246";
import { Xv } from "../905/225144";
import { generateUUIDv4 } from "../905/871474";
let d = `
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 2H3C2.44772 2 2 2.44772 2 3V10C2 10.5523 2.44772 11 3 11V12C1.89543 12 1 11.1046 1 10V3C1 1.89543 1.89543 1 3 1H10C11.1046 1 12 1.89543 12 3H11C11 2.44772 10.5523 2 10 2ZM6 5H13C13.5523 5 14 5.44772 14 6V13C14 13.5523 13.5523 14 13 14H6C5.44772 14 5 13.5523 5 13V6C5 5.44772 5.44772 5 6 5ZM4 6C4 4.89543 4.89543 4 6 4H13C14.1046 4 15 4.89543 15 6V13C15 14.1046 14.1046 15 13 15H6C4.89543 15 4 14.1046 4 13V6Z" fill="black" fill-opacity="0.9"/>
</svg>
`;
let c = `
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.52567 13.6568L8.17732 11.0052L8.88443 11.7123L6.23278 14.3639C4.96357 15.6331 2.90579 15.6331 1.63658 14.3639C0.367378 13.0947 0.367377 11.0369 1.63658 9.76772L4.28823 7.11607L4.99534 7.82317L2.34369 10.4748C1.46501 11.3535 1.46501 12.7781 2.34369 13.6568C3.22237 14.5355 4.64699 14.5355 5.52567 13.6568ZM11.7129 8.88383L11.0057 8.17673L13.6574 5.52507C14.5361 4.6464 14.5361 3.22177 13.6574 2.34309C12.7787 1.46441 11.3541 1.46442 10.4754 2.34309L7.82377 4.99475L7.11666 4.28764L9.76831 1.63599C11.0375 0.366784 13.0953 0.366784 14.3645 1.63599C15.6337 2.90519 15.6337 4.96298 14.3645 6.23218L11.7129 8.88383ZM6.26224 10.5043L10.5049 6.26164L9.73885 5.49561L5.49621 9.73825L6.26224 10.5043Z" fill="black" fill-opacity="0.9"/>
</svg>
`;
let u = `
<svg width='540' height='4' viewBox='0 0 540 4' fill='none' xmlns='http://www.w3.org/2000/svg'>
<path fill-rule='evenodd' clip-rule='evenodd' d='M540 0H0C0 2.20914 1.79087 4 4.00001 4H5C5 2.89543 5.89543 2 7 2H11C12.1046 2 13 2.89543 13 4H22.4194C22.4194 2.89543 23.3148 2 24.4194 2H28.4194C29.5239 2 30.4194 2.89543 30.4194 4H39.8387C39.8387 2.89543 40.7341 2 41.8387 2H45.8387C46.9433 2 47.8387 2.89543 47.8387 4H57.2581C57.2581 2.89543 58.1535 2 59.2581 2H63.2581C64.3626 2 65.2581 2.89543 65.2581 4H74.6774C74.6774 2.89543 75.5729 2 76.6774 2H80.6774C81.782 2 82.6774 2.89543 82.6774 4H92.0968C92.0968 2.89543 92.9922 2 94.0968 2H98.0968C99.2013 2 100.097 2.89543 100.097 4H109.516C109.516 2.89543 110.412 2 111.516 2H115.516C116.621 2 117.516 2.89543 117.516 4H126.935C126.935 2.89543 127.831 2 128.935 2H132.935C134.04 2 134.935 2.89543 134.935 4H144.355C144.355 2.89543 145.25 2 146.355 2H150.355C151.459 2 152.355 2.89543 152.355 4H161.774C161.774 2.89543 162.67 2 163.774 2H167.774C168.879 2 169.774 2.89543 169.774 4H179.194C179.194 2.89543 180.089 2 181.194 2H185.194C186.298 2 187.194 2.89543 187.194 4H196.613C196.613 2.89543 197.508 2 198.613 2H202.613C203.717 2 204.613 2.89543 204.613 4H214.032C214.032 2.89543 214.928 2 216.032 2H220.032C221.137 2 222.032 2.89543 222.032 4H231.452C231.452 2.89543 232.347 2 233.452 2H237.452C238.556 2 239.452 2.89543 239.452 4H248.871C248.871 2.89543 249.766 2 250.871 2H254.871C255.976 2 256.871 2.89543 256.871 4H266.29C266.29 2.89543 267.186 2 268.29 2H272.29C273.395 2 274.29 2.89543 274.29 4H283.71C283.71 2.89543 284.605 2 285.71 2H289.71C290.814 2 291.71 2.89543 291.71 4H301.129C301.129 2.89543 302.024 2 303.129 2H307.129C308.234 2 309.129 2.89543 309.129 4H318.548C318.548 2.89543 319.444 2 320.548 2H324.548C325.653 2 326.548 2.89543 326.548 4H335.968C335.968 2.89543 336.863 2 337.968 2H341.968C343.072 2 343.968 2.89543 343.968 4H353.387C353.387 2.89543 354.283 2 355.387 2H359.387C360.492 2 361.387 2.89543 361.387 4H370.806C370.806 2.89543 371.702 2 372.806 2H376.806C377.911 2 378.806 2.89543 378.806 4H388.226C388.226 2.89543 389.121 2 390.226 2H394.226C395.33 2 396.226 2.89543 396.226 4H405.645C405.645 2.89543 406.541 2 407.645 2H411.645C412.75 2 413.645 2.89543 413.645 4H423.064C423.064 2.89543 423.96 2 425.064 2H429.064C430.169 2 431.064 2.89543 431.064 4H440.484C440.484 2.89543 441.379 2 442.484 2H446.484C447.588 2 448.484 2.89543 448.484 4H457.903C457.903 2.89543 458.799 2 459.903 2H463.903C465.008 2 465.903 2.89543 465.903 4H475.322C475.322 2.89543 476.218 2 477.322 2H481.322C482.427 2 483.322 2.89543 483.322 4H492.742C492.742 2.89543 493.637 2 494.742 2H498.742C499.846 2 500.742 2.89543 500.742 4H510.161C510.161 2.89543 511.057 2 512.161 2H516.161C517.266 2 518.161 2.89543 518.161 4H527.581C527.581 2.89543 528.476 2 529.581 2H533.581C534.685 2 535.581 2.89543 535.581 4H536C538.209 4 540 2.20914 540 0Z' fill='white'/>
</svg>
`;
let p = buildUploadUrl("134d67d38337bfa10e028cc6e579ffc7ab7fedc5");
let m = `<svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0.909091V0H0.941176V0.909091C0.941176 2.66636 2.416 4.09091 4.23529 4.09091H8V5H4.23529C1.89621 5 0 3.16844 0 0.909091Z" fill="#C4C4C4"/>
</svg>`;
function A(e, t, i, n, r) {
  let {
    widget
  } = e;
  let {
    AutoLayout,
    SVG,
    Text
  } = a;
  return e.widget.h(AutoLayout, {
    name: "Extra top padding",
    overflow: "visible",
    direction: "horizontal",
    tooltip: i,
    height: 30,
    padding: {
      top: 7,
      right: 13,
      bottom: 7,
      left: 8
    },
    horizontalAlignItems: "center",
    verticalAlignItems: "center",
    spacing: 6,
    cornerRadius: 6,
    fill: "#F5F5F5",
    hoverStyle: {
      fill: "#E6E6E6"
    },
    onClick: n
  }, e.widget.h(SVG, {
    src: r
  }), e.widget.h(Text, {
    name: "",
    fill: "#000C",
    lineHeight: 22,
    fontSize: 11,
    fontFamily: "Inter",
    fontWeight: 500
  }, t));
}
function b(e, t) {
  let i;
  let {
    widget
  } = e;
  let {
    AutoLayout,
    Frame,
    Text
  } = n;
  let o = t => e.widget.h(Text, {
    ...Bb,
    fontWeight: "bold",
    spacing: 8,
    width: "fill-parent"
  }, t);
  let l = {
    direction: "vertical",
    padding: {
      vertical: 3
    },
    width: ju,
    verticalAlignItems: void 0
  };
  let d = o(t);
  l = {
    ...l,
    direction: "horizontal",
    verticalAlignItems: "center",
    padding: {
      top: 8
    }
  };
  let {
    emoji,
    text
  } = Xv(t);
  d = o(text.trim());
  emoji && (i = [function (e, t) {
    let {
      widget
    } = e;
    let {
      AutoLayout
    } = i;
    return e.widget.h(AutoLayout, {
      fill: {
        r: .9,
        g: .9,
        b: .9,
        a: 0
      },
      width: E_,
      height: E_,
      horizontalAlignItems: "center",
      verticalAlignItems: "center",
      cornerRadius: 6
    }, function (e, t, i) {
      let {
        widget
      } = e;
      let {
        Text
      } = n;
      return e.widget.h(Text, {
        fontSize: 14
      }, t);
    }(e, t, 0));
  }(e, emoji), e.widget.h(Frame, {
    width: Re,
    height: "fill-parent"
  })]);
  return e.widget.h(AutoLayout, l, i || [], d);
}
var v = (e => (e.NEWLINE = "\n", e.LIST_BULLET = "\u2022", e))(v || {});
function I(e) {
  let {
    widget
  } = e;
  let {
    AutoLayout,
    Rectangle
  } = t;
  let r = e.widget.h(Rectangle, {
    fill: {
      type: "image",
      src: p,
      imageSize: {
        width: Ub,
        height: Ub
      },
      scaleMode: "tile",
      scalingFactor: 1
    },
    height: 9999,
    width: Ub,
    positioning: "absolute",
    y: 0
  });
  return e.widget.h(AutoLayout, {
    height: "fill-parent",
    width: Ub
  }, r, function (e) {
    let {
      widget
    } = e;
    let {
      AutoLayout,
      Rectangle
    } = t;
    return e.widget.h(AutoLayout, {
      direction: "vertical",
      height: "fill-parent",
      width: Ub
    }, e.widget.h(AutoLayout, {
      fill: {
        r: 1,
        g: 1,
        b: 1,
        a: 0
      },
      height: "fill-parent",
      width: Ub
    }), e.widget.h(Rectangle, {
      fill: {
        type: "gradient-linear",
        gradientHandlePositions: [{
          x: .5,
          y: 0
        }, {
          x: 1,
          y: 1
        }, {
          x: 0,
          y: 0
        }],
        gradientStops: [{
          position: 0,
          color: {
            r: 1,
            g: 1,
            b: 1,
            a: 0
          }
        }, {
          position: 1,
          color: {
            r: 1,
            g: 1,
            b: 1,
            a: 1
          }
        }]
      },
      height: 40,
      width: Ub,
      y: {
        type: "bottom",
        offset: 56
      }
    }), e.widget.h(Rectangle, {
      fill: {
        r: 1,
        g: 1,
        b: 1,
        a: 1
      },
      height: 16,
      width: Ub,
      y: {
        type: "bottom",
        offset: 16
      }
    }));
  }(e));
}
function E(e, t) {
  let {
    widget
  } = e;
  let {
    AutoLayout
  } = i;
  return e.widget.h(AutoLayout, {
    height: "fill-parent",
    width: t
  });
}
let S = new class {
  constructor() {
    this.summaryMountedListeners = {};
  }
  attachMountedListener(e) {
    let t = generateUUIDv4();
    this.summaryMountedListeners[t] = e;
    return t;
  }
  removeListener(e) {
    return e in this.summaryMountedListeners && (delete this.summaryMountedListeners[e], !0);
  }
  clearListeners() {
    this.summaryMountedListeners = {};
  }
  onSummaryMount(e, t) {
    Object.values(this.summaryMountedListeners).forEach(i => {
      try {
        i(e, t);
      } catch (e) {}
    });
  }
}();
export function $$w0({
  figma: e
}) {
  let {
    widget
  } = e;
  let {
    AutoLayout,
    useSyncedState,
    useWidgetId
  } = t;
  widget.register(function () {
    let [y, x] = useSyncedState("ai-summary-items", JT);
    let w = useWidgetId();
    !function (e, t, i, n = "mounted") {
      let [r, a] = t.useSyncedState(n, !1);
      t.useEffect(() => {
        r || (a(!0), t.waitForTask(new Promise(() => {
          i();
        })));
      });
    }(0, widget, () => {
      S.onSummaryMount(w, x);
    });
    return e.widget.h(AutoLayout, {
      fill: {
        r: 0,
        g: 0,
        b: 0,
        a: 0
      },
      direction: "vertical",
      spacing: 0,
      effect: co,
      width: _t
    }, function (e) {
      let {
        widget
      } = e;
      let {
        AutoLayout,
        Frame,
        useEffect,
        useSyncedState,
        useWidgetId
      } = t;
      let x = useWidgetId();
      let [S] = useSyncedState("loading", !1);
      let [w] = useSyncedState("summarized-at", "");
      let [C, T] = useSyncedState("loadingText", `${ZG()}...`);
      let k = getSingletonSceneGraph();
      useEffect(() => {
        S && widget.waitForTask(new Promise(e => {
          setTimeout(() => {
            k.get(x) && T(Yc);
            e();
          }, 500);
        }));
      });
      return e.widget.h(AutoLayout, {
        cornerRadius: {
          topLeft: 8,
          topRight: 8,
          bottomLeft: 0,
          bottomRight: 0
        },
        fill: "#FFFFFF",
        width: _t
      }, I(e), S ? function (e, t) {
        let {
          widget
        } = e;
        let {
          AutoLayout,
          Text
        } = i;
        let {
          loadingText,
          paddingLeft,
          paddingRight
        } = t;
        return e.widget.h(AutoLayout, {
          fill: {
            r: 0,
            g: 0,
            b: 0,
            a: 0
          },
          direction: "vertical",
          spacing: 0,
          effect: co,
          width: "fill-parent",
          padding: {
            top: 32,
            bottom: 24,
            left: paddingLeft,
            right: paddingRight
          }
        }, e.widget.h(Text, Bb, loadingText));
      }(e, {
        loadingText: C,
        paddingLeft: 8,
        paddingRight: 8
      }) : function () {
        let [t] = useSyncedState("ai-summary-items", JT);
        let n = function (e) {
          let t = [];
          for (var i = 0; i < e.length; i++) {
            let n = e[i];
            let r = t.length > 0 ? t[t.length - 1] : null;
            if ("h2" === n.type) {
              let e = {
                type: "header_bullet_group",
                header: n,
                bullets: []
              };
              t.push({
                primitive: e,
                summaryStateIndex: i
              });
            } else r && r?.primitive.type === "header_bullet_group" && "li" === n.type ? r.primitive.bullets.push(n) : t.push({
              primitive: n,
              summaryStateIndex: i
            });
          }
          return t;
        }(t);
        let u = e.widget.h(AutoLayout, {
          direction: "vertical",
          width: "fill-parent",
          padding: {}
        }, e.widget.h(Frame, {
          height: 24,
          width: "fill-parent"
        }, e.widget.h(AutoLayout, {
          direction: "horizontal",
          width: ju,
          spacing: 8
        }, function (e, t) {
          let {
            widget
          } = e;
          let {
            Text
          } = i;
          let r = IM(t);
          return e.widget.h(Text, {
            ...QU,
            fill: {
              type: "solid",
              color: {
                r: 0,
                g: 0,
                b: 0,
                a: .55
              }
            },
            width: "hug-contents"
          }, r, v.NEWLINE);
        }(e, w))), n.map(t => function (t) {
          let {
            primitive
          } = t;
          return "header_bullet_group" === primitive.type ? function (e, t) {
            let {
              widget
            } = e;
            let {
              AutoLayout,
              Frame
            } = i;
            let a = e.widget.h(AutoLayout, {
              direction: "horizontal",
              width: "fill-parent"
            }, e.widget.h(Frame, {
              width: xe,
              height: "fill-parent"
            }), e.widget.h(AutoLayout, {
              direction: "vertical",
              width: "fill-parent",
              overflow: "visible"
            }, ...t.bullets.map((i, n) => function (e, t, i = !1) {
              let {
                widget: _widget
              } = e;
              let {
                AutoLayout: _AutoLayout,
                Frame: _Frame,
                SVG,
                Text
              } = n;
              let l = e.widget.h(_AutoLayout, {
                width: 1,
                height: "fill-parent"
              }, e.widget.h(_Frame, {
                height: H0 / 2,
                width: "fill-parent",
                hidden: !i,
                fill: Fx
              }), e.widget.h(_Frame, {
                height: "fill-parent",
                width: "fill-parent",
                hidden: i,
                fill: Fx
              }));
              let d = e.widget.h(_AutoLayout, {
                height: H0 / 2 + bH,
                verticalAlignItems: "end",
                overflow: "visible",
                positioning: "absolute",
                x: 0
              }, e.widget.h(SVG, {
                src: m
              }));
              let c = e.widget.h(_AutoLayout, {
                padding: {
                  vertical: 4
                },
                width: "fill-parent"
              }, e.widget.h(Text, {
                ...Bb,
                lineHeight: H0,
                width: "fill-parent",
                letterSpacing: -.006
              }, t));
              return e.widget.h(_AutoLayout, {
                direction: "horizontal",
                width: "fill-parent",
                overflow: "hidden",
                spacing: kO
              }, l, d, c);
            }(e, i.content, n === t.bullets.length - 1))));
            return e.widget.h(AutoLayout, {
              direction: "vertical",
              width: "hug-contents"
            }, b(e, t.header.content), a);
          }(e, primitive) : function (t) {
            switch (t.type) {
              case "h1":
                return function (e, t) {
                  let {
                    widget
                  } = e;
                  let {
                    AutoLayout,
                    Text
                  } = i;
                  let a = {
                    direction: "vertical",
                    padding: {
                      vertical: 3
                    },
                    width: ju
                  };
                  let s = {
                    ...Bb,
                    lineHeight: 32,
                    fontSize: 20,
                    fontWeight: "bold",
                    spacing: 8
                  };
                  a.padding.vertical = 8;
                  a.width = "fill-parent";
                  s.fontSize = 24;
                  s.fontWeight = "medium";
                  s.letterSpacing = -.25;
                  let o = e.widget.h(Text, s, t);
                  o = e.widget.h(Text, {
                    ...s
                  }, t);
                  return e.widget.h(AutoLayout, a, o);
                }(e, t.content);
              case "h2":
                return b(e, t.content);
              case "li":
                return function (e, t) {
                  let {
                    widget
                  } = e;
                  let {
                    AutoLayout,
                    Text
                  } = i;
                  let a = e.widget.h(Text, {
                    ...Bb,
                    paragraphIndent: 8,
                    width: iL + 8 + 8,
                    padding: {
                      right: 8
                    }
                  }, v.LIST_BULLET);
                  let s = e.widget.h(Text, {
                    ...Bb,
                    width: "fill-parent"
                  }, t);
                  return e.widget.h(AutoLayout, {
                    direction: "horizontal",
                    padding: {
                      vertical: 3
                    },
                    width: ju
                  }, a, s);
                }(e, t.content);
              default:
                return function (e, t) {
                  let {
                    widget
                  } = e;
                  let {
                    Text
                  } = i;
                  return e.widget.h(Text, Bb, t);
                }(e, t.content);
            }
          }(primitive);
        }(t)));
        let y = e.widget.h(AutoLayout, {
          direction: "horizontal",
          width: "fill-parent"
        }, E(e, Ax), u, E(e, Ax));
        return e.widget.h(AutoLayout, {
          direction: "vertical",
          width: "fill-parent",
          padding: {
            top: 40,
            bottom: 32
          }
        }, y, function (e, t) {
          let {
            widget
          } = e;
          let {
            AutoLayout,
            useSyncedState,
            useWidgetId
          } = i;
          let [p] = useSyncedState("ai-summary", "");
          let [m] = useSyncedState("ai-summary-items", JT);
          let y = useWidgetId();
          let [b] = useSyncedState("summarized-at", "");
          return e.widget.h(AutoLayout, {
            width: "fill-parent",
            direction: "horizontal",
            spacing: 8,
            padding: {
              top: 20
            }
          }, A(e, getI18nString("whiteboard.ai_summary.copy_button_text"), getI18nString("whiteboard.ai_summary.copy_button_tooltip"), () => {
            Vn(mr.TEXT_COPIED, {
              summary_node_id: y
            });
            p.length > 0 && Ay(y, p, m);
            NY.copySummaryDataToClipboard(t, b);
            debugState.dispatch(VisualBellActions.enqueue({
              message: getI18nString("whiteboard.ai_summary.copy_text_to_clipboard"),
              error: !1,
              type: "copy-summary-text-to-clipboard"
            }));
          }, d), A(e, getI18nString("whiteboard.ai_summary.copy_link_button_text"), getI18nString("whiteboard.ai_summary.copy_link_button_tooltip"), () => {
            Vn(mr.LINK_COPED, {
              summary_node_id: y
            });
            p.length > 0 && Ay(y, p, m);
            let e = debugState.getState().openFile;
            if (!e) return;
            let t = buildFileUrl({
              file: e,
              nodeId: y
            });
            debugState.dispatch(_$$S({
              fileKey: e.key,
              url: t,
              source: ShareContext.AI_SUMMARY_COPY_LINK_BUTTON,
              visualBellMessageOverride: getI18nString("whiteboard.ai_summary.copied_link_to_clipboard")
            }));
          }, c));
        }(e, t));
      }(), I(e));
    }(e), function (e) {
      let {
        widget
      } = e;
      let {
        Frame,
        SVG
      } = t;
      return e.widget.h(Frame, {
        width: _t,
        height: pA
      }, e.widget.h(SVG, {
        height: pA,
        width: "fill-parent",
        src: u
      }));
    }(e));
  });
}
export const V = $$w0;