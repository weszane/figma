import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState, useRef, useEffect, useMemo } from "react";
import { E as _$$E } from "../905/172252";
import { G } from "../905/289770";
import { P } from "../vendor/348225";
import { N as _$$N } from "../vendor/930821";
import { t as _$$t } from "../905/303541";
let c = {
  ENTER_TO_LOOP: 600,
  LAYOUT_STEP: 600,
  EXPAND_TO_ICON: 300,
  ICON_TO_CODE: 300,
  CODE_DURATION: 6e3,
  CODE_EXIT: 300,
  ICONS_DURATION: 6e3,
  ICONS_EXIT: 300,
  RESET_PAUSE: 800
};
let p = e => `var(${e})`;
let u = {
  bg: "--animation-bg",
  stroke: "--animation-stroke",
  strokeLight: "--animation-stroke-light",
  fill: "--animation-fill",
  icon: "--animation-icon"
};
let h = {
  light: {
    [u.bg]: p("--color-bg"),
    [u.stroke]: p("--ramp-violet-400"),
    [u.strokeLight]: p("--ramp-violet-300"),
    [u.fill]: p("--ramp-violet-100"),
    [u.icon]: p("--color-icon-brand")
  },
  dark: {
    [u.bg]: p("--color-bg"),
    [u.stroke]: p("--color-border"),
    [u.strokeLight]: p("--color-border"),
    [u.fill]: p("--color-bg-secondary"),
    [u.icon]: p("--color-icon-secondary")
  }
};
function m(e, t = "top") {
  let n = "light" === e ? "255, 255, 255" : "44, 44, 44";
  let o = [{
    position: 0,
    alpha: 1
  }, {
    position: .1179,
    alpha: .991615
  }, {
    position: .2138,
    alpha: .967585
  }, {
    position: .2912,
    alpha: .9296
  }, {
    position: .3534,
    alpha: .879348
  }, {
    position: .4037,
    alpha: .818519
  }, {
    position: .4456,
    alpha: .7488
  }, {
    position: .4824,
    alpha: .671881
  }, {
    position: .5176,
    alpha: .589452
  }, {
    position: .5544,
    alpha: .5032
  }, {
    position: .5963,
    alpha: .414815
  }, {
    position: .6466,
    alpha: .325985
  }, {
    position: .7088,
    alpha: .2384
  }, {
    position: .7862,
    alpha: .153748
  }, {
    position: .8821,
    alpha: .0737185
  }, {
    position: 1,
    alpha: 0
  }].map(e => `rgba(${n}, ${e.alpha}) ${100 * e.position}%`).join(", ");
  return `linear-gradient(${"top" === t ? "to bottom" : "to top"}, ${o})`;
}
let x = {
  light: {
    top: m("light", "top"),
    bottom: m("light", "bottom")
  },
  dark: {
    top: m("dark", "top"),
    bottom: m("dark", "bottom")
  }
};
export function $$g0({
  frozenPhase: e
}) {
  let [t, n] = useState(e || "enter");
  let [r, s] = useState(0);
  let d = useRef(0);
  let m = G();
  useEffect(() => {
    let o;
    if (e) return;
    let i = e => {
      n(() => e);
    };
    ({
      enter: () => {
        o = setTimeout(() => i("loop"), c.ENTER_TO_LOOP);
      },
      loop: () => {
        o = setTimeout(() => {
          s(e => {
            let t = (e + 1) % 5;
            0 === t && (d.current += 1, d.current >= 1 && setTimeout(() => i("exit"), 200));
            return t;
          });
        }, c.LAYOUT_STEP);
      },
      exit: () => i("expand"),
      expand: () => {
        o = setTimeout(() => i("icon"), c.EXPAND_TO_ICON);
      },
      icon: () => {
        o = setTimeout(() => i("code"), c.ICON_TO_CODE);
      },
      code: () => {
        o = setTimeout(() => i("codeExit"), c.CODE_DURATION);
      },
      codeExit: () => {
        o = setTimeout(() => i("fallingIcons"), c.CODE_EXIT);
      },
      fallingIcons: () => {
        o = setTimeout(() => i("fallingIconsExit"), c.ICONS_DURATION);
      },
      fallingIconsExit: () => {
        o = setTimeout(() => i("reset"), c.ICONS_EXIT);
      },
      reset: () => {
        o = setTimeout(() => i("enter"), c.RESET_PAUSE);
      },
      fixingErrors: () => {}
    })[t]();
    return () => clearTimeout(o);
  }, [t, r, e]);
  useEffect(() => {
    e || (n(() => "enter"), s(0), d.current = 0);
  }, [e]);
  let x = {
    initial: {
      width: 79
    },
    step1: {
      width: 120,
      transition: {
        duration: .4,
        ease: "easeOut"
      }
    },
    step2: {
      width: 79,
      transition: {
        duration: .4,
        ease: "easeOut"
      }
    },
    expand: {
      width: 250,
      height: 170,
      x: 1,
      y: 1,
      transition: {
        duration: .6,
        type: "spring",
        bounce: 0
      }
    },
    reset: {
      width: 79,
      height: 79.0029,
      x: 0,
      y: 0,
      transition: {
        duration: .6,
        type: "spring"
      }
    }
  };
  let g = {
    initial: {
      width: 79,
      x: 172.499
    },
    step1: {
      width: 120,
      x: 131.499
    },
    step2: {
      width: 79,
      x: 172.499
    }
  };
  let _ = {
    initial: {
      width: 159,
      x: 0
    },
    step1: {
      width: 118,
      x: 0
    },
    step2: {
      width: 159,
      x: 0
    }
  };
  let I = () => {
    switch (r) {
      case 0:
      default:
        return "initial";
      case 1:
        return "step1";
      case 2:
        return "step2";
    }
  };
  let C = () => {
    switch (r) {
      case 3:
        return "step1";
      case 4:
        return "step2";
      default:
        return "initial";
    }
  };
  let E = {
    hidden: {
      opacity: 0,
      scale: 1,
      y: 8
    },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: .4,
        type: "spring"
      }
    },
    exit: {
      opacity: 0,
      scale: .6,
      y: 8,
      transition: {
        duration: .4,
        type: "spring"
      }
    }
  };
  let j = {
    ...E,
    exit: {
      opacity: 0,
      scale: .6,
      y: -8,
      transition: {
        duration: .4,
        type: "spring"
      }
    }
  };
  let N = {
    ...E,
    exit: {
      width: 250,
      height: 170,
      x: 1,
      y: 1,
      scale: 1,
      opacity: 1,
      transition: {
        ease: "easeOut",
        duration: .3
      }
    }
  };
  let T = () => {
    switch (t) {
      case "exit":
      case "expand":
        return "exit";
      case "icon":
      case "code":
      case "codeExit":
      case "fixingErrors":
      case "fallingIcons":
      case "fallingIconsExit":
        return "hidden";
      case "reset":
        return "show";
      default:
        return;
    }
  };
  return jsx("div", {
    className: "xdpfuu1 x1jn0hjm x1yjdb4r x78zum5 xdt5ytf x6s0dn4 xl56j7k",
    style: h[m.color],
    children: jsx("div", {
      className: "xwzcjdk xs4flsr xe8ttls x1rea2x4",
      children: jsxs("div", {
        className: "x78zum5 xdt5ytf x6s0dn4 x1rea2x4",
        children: [jsxs("div", {
          className: "x1ymmuzg x1ri49h8 x1n2onr6 x1rea2x4",
          children: ["expand" === t || "icon" === t || "fixingErrors" === t || "code" === t || "codeExit" === t || "fallingIcons" === t || "fallingIconsExit" === t ? jsx(P.div, {
            className: "x10l6tqk xqyf9gi x1a842fp x4pepcl x1yjdb4r xoegz02",
            initial: {
              opacity: 0
            },
            animate: {
              opacity: "fallingIconsExit" === t || "reset" === t ? 0 : 1
            },
            transition: {
              duration: .3
            }
          }) : null, jsxs(P.svg, {
            width: "252",
            height: "172",
            viewBox: "0 0 252 172",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            variants: {
              hidden: {
                opacity: 0
              },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: .15,
                  delayChildren: .1,
                  type: "spring",
                  duration: .4
                }
              }
            },
            initial: "hidden",
            animate: "show",
            style: {
              position: "relative",
              zIndex: 9
            },
            children: [jsx(P.g, {
              variants: N,
              children: jsx(P.rect, {
                animate: "loop" === t ? x[I()] : "expand" === t || "icon" === t || "code" === t || "codeExit" === t || "fallingIcons" === t || "fallingIconsExit" === t || "fixingErrors" === t ? x.expand : "reset" === t ? x.reset : x.initial,
                height: "79.0029",
                initial: x.initial,
                rx: "12.5015",
                stroke: p(u.stroke),
                strokeDasharray: "6 6",
                strokeWidth: "0.997067",
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 25,
                  duration: .3
                },
                x: "0.498534",
                y: "0.498534"
              })
            }), jsx(P.g, {
              variants: j,
              animate: T(),
              children: jsx(P.rect, {
                y: "0.498534",
                height: "79.0029",
                rx: "12.5015",
                stroke: p(u.stroke),
                strokeWidth: "0.997067",
                strokeDasharray: "6 6",
                initial: {
                  x: 92.4985,
                  width: 159.003
                },
                animate: "loop" === t ? {
                  x: 1 === r ? 132.4985 : 92.4985,
                  width: {
                    initial: {
                      width: 159,
                      x: 0
                    },
                    step1: {
                      width: 118,
                      x: 12
                    },
                    step2: {
                      width: 159,
                      x: 0
                    }
                  }[I()].width
                } : {
                  x: 92.4985,
                  width: 159.003
                },
                transition: {
                  duration: .4,
                  ease: "easeOut"
                }
              })
            }), jsx(P.g, {
              variants: j,
              animate: T(),
              children: jsx(P.rect, {
                animate: "loop" === t ? {
                  width: _[C()].width
                } : _.initial,
                height: "79.0029",
                initial: _.initial,
                rx: "12.5015",
                stroke: p(u.stroke),
                strokeDasharray: "6 6",
                strokeWidth: "0.997067",
                transition: {
                  duration: .4,
                  ease: "easeOut"
                },
                x: "0.498534",
                y: "92.4985"
              })
            }), jsx(P.g, {
              variants: j,
              animate: T(),
              children: jsx(P.rect, {
                y: "92.4985",
                height: "79.0029",
                rx: "12.5015",
                stroke: p(u.stroke),
                strokeWidth: "0.997067",
                strokeDasharray: "6 6",
                initial: {
                  x: 172.499,
                  width: 79
                },
                animate: "loop" === t ? {
                  x: g[C()].x,
                  width: g[C()].width
                } : {
                  x: 172.499,
                  width: 79
                },
                transition: {
                  duration: .4,
                  ease: "easeOut"
                }
              })
            })]
          }), jsx(b, {
            animationPhase: t
          }), jsx(f, {
            animationPhase: t
          }), jsx(v, {
            animationPhase: t
          })]
        }), jsx(y, {
          animationPhase: t
        })]
      })
    })
  });
}
function y({
  animationPhase: e
}) {
  let [t, n] = useState(0);
  useEffect(() => {
    let e = setInterval(() => {
      n(e => (e + 1) % 4);
    }, 350);
    return () => clearInterval(e);
  }, []);
  let a = e => "fixingErrors" === e ? _$$t("figmake.thinking_state.fixing_errors") : "expand" === e || "icon" === e || "code" === e ? _$$t("figmake.thinking_state.label_3") : "codeExit" === e || "fallingIcons" === e || "fallingIconsExit" === e ? _$$t("figmake.thinking_state.label_2") : _$$t("figmake.thinking_state.label_1");
  let c = useMemo(() => a(e), [e]);
  return jsxs("div", {
    className: "xqui205 xemv814 xno9bf3 x1betce5 x1n0bwc9 x1kpxq89 x78zum5 xl56j7k x87ps6o",
    style: {
      display: "flex",
      alignItems: "baseline"
    },
    children: [jsx(_$$E, {
      "aria-live": "polite",
      children: c
    }), jsx("div", {
      "aria-hidden": "true",
      children: jsx(_$$N, {
        mode: "wait",
        children: jsxs(P.span, {
          initial: {
            opacity: 0,
            y: 8
          },
          animate: {
            opacity: 1,
            y: 0
          },
          exit: {
            opacity: 0,
            y: -8
          },
          transition: {
            duration: .3,
            ease: "easeOut"
          },
          children: [jsx("span", {
            children: c
          }), jsx(P.span, {
            style: {
              display: "inline-block",
              width: "0.3em",
              textAlign: "left",
              marginLeft: "0"
            },
            "aria-hidden": "true",
            children: ".".repeat(t)
          })]
        }, c)
      })
    })]
  });
}
function f({
  animationPhase: e
}) {
  let t = "code" === e || "fixingErrors" === e;
  let n = "codeExit" === e;
  let i = G();
  return jsxs(Fragment, {
    children: [jsx(P.div, {
      style: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "200px",
        height: "140px",
        overflow: "hidden",
        zIndex: 7
      },
      variants: {
        initial: {
          opacity: 0
        },
        show: {
          opacity: 1,
          transition: {
            duration: .4
          }
        },
        exit: {
          opacity: 0,
          transition: {
            duration: .4
          }
        }
      },
      initial: "initial",
      animate: n ? "exit" : t ? "show" : "initial",
      children: jsx(P.div, {
        style: {
          position: "absolute",
          width: "100%"
        },
        variants: {
          initial: {
            y: 128,
            opacity: 1,
            transition: {
              duration: .4,
              type: "spring"
            }
          },
          animate: {
            y: -300,
            opacity: 1,
            transition: {
              duration: 8,
              ease: "linear",
              repeat: 1 / 0,
              repeatType: "loop"
            }
          },
          exit: {
            y: -300,
            opacity: 0,
            transition: {
              duration: .4,
              type: "spring"
            }
          }
        },
        initial: "initial",
        animate: n ? "exit" : t ? "animate" : "initial",
        children: jsxs("svg", {
          width: "189",
          height: "400",
          viewBox: "0 0 189 400",
          fill: "none",
          children: [jsx("rect", {
            x: "0.5",
            y: "0.5",
            width: "110",
            height: "11",
            rx: "3.5",
            fill: p(u.fill),
            stroke: p(u.strokeLight),
            strokeDasharray: "4 4"
          }), jsx("rect", {
            x: "0.5",
            y: "23.5",
            width: "159",
            height: "11",
            rx: "3.5",
            fill: p(u.fill),
            stroke: p(u.strokeLight),
            strokeDasharray: "4 4"
          }), jsx("rect", {
            x: "0.5",
            y: "47.5",
            width: "77",
            height: "11",
            rx: "3.5",
            fill: p(u.fill),
            stroke: p(u.strokeLight),
            strokeDasharray: "4 4"
          }), jsx("rect", {
            x: "0.5",
            y: "70.5",
            width: "188",
            height: "11",
            rx: "3.5",
            fill: p(u.fill),
            stroke: p(u.strokeLight),
            strokeDasharray: "4 4"
          }), jsx("rect", {
            x: "0.5",
            y: "94.5",
            width: "141",
            height: "11",
            rx: "3.5",
            fill: p(u.fill),
            stroke: p(u.strokeLight),
            strokeDasharray: "4 4"
          }), jsx("rect", {
            x: "0.5",
            y: "117.5",
            width: "110",
            height: "11",
            rx: "3.5",
            fill: p(u.fill),
            stroke: p(u.strokeLight),
            strokeDasharray: "4 4"
          }), jsx("rect", {
            x: "0.5",
            y: "140.5",
            width: "165",
            height: "11",
            rx: "3.5",
            fill: p(u.fill),
            stroke: p(u.strokeLight),
            strokeDasharray: "4 4"
          }), jsx("rect", {
            x: "0.5",
            y: "170.5",
            width: "110",
            height: "11",
            rx: "3.5",
            fill: p(u.fill),
            stroke: p(u.strokeLight),
            strokeDasharray: "4 4"
          }), jsx("rect", {
            x: "0.5",
            y: "193.5",
            width: "159",
            height: "11",
            rx: "3.5",
            fill: p(u.fill),
            stroke: p(u.strokeLight),
            strokeDasharray: "4 4"
          }), jsx("rect", {
            x: "0.5",
            y: "217.5",
            width: "77",
            height: "11",
            rx: "3.5",
            fill: p(u.fill),
            stroke: p(u.strokeLight),
            strokeDasharray: "4 4"
          }), jsx("rect", {
            x: "0.5",
            y: "240.5",
            width: "188",
            height: "11",
            rx: "3.5",
            fill: p(u.fill),
            stroke: p(u.strokeLight),
            strokeDasharray: "4 4"
          }), jsx("rect", {
            x: "0.5",
            y: "264.5",
            width: "141",
            height: "11",
            rx: "3.5",
            fill: p(u.fill),
            stroke: p(u.strokeLight),
            strokeDasharray: "4 4"
          }), jsx("rect", {
            x: "0.5",
            y: "287.5",
            width: "110",
            height: "11",
            rx: "3.5",
            fill: p(u.fill),
            stroke: p(u.strokeLight),
            strokeDasharray: "4 4"
          }), jsx("rect", {
            x: "0.5",
            y: "310.5",
            width: "165",
            height: "11",
            rx: "3.5",
            fill: p(u.fill),
            stroke: p(u.strokeLight),
            strokeDasharray: "4 4"
          })]
        })
      })
    }), jsx(P.div, {
      style: {
        position: "absolute",
        width: "238px",
        height: "82px",
        left: "8px",
        top: "4px",
        background: x[i.color].top,
        zIndex: 8,
        pointerEvents: "none"
      },
      initial: {
        opacity: 0
      },
      animate: {
        opacity: t ? 1 : 0
      },
      transition: {
        duration: .4
      }
    }), jsx(P.div, {
      style: {
        position: "absolute",
        width: "238px",
        height: "62px",
        left: "8px",
        top: "110px",
        background: x[i.color].bottom,
        zIndex: 8,
        pointerEvents: "none"
      },
      initial: {
        opacity: 0
      },
      animate: {
        opacity: t ? 1 : 0
      },
      transition: {
        duration: .4
      }
    })]
  });
}
let _ = {
  duration: .4,
  type: "spring"
};
function b({
  animationPhase: e
}) {
  let t = {
    initial: {
      opacity: 0,
      scale: 0,
      x: 12,
      y: 124,
      transition: _
    },
    show: {
      opacity: 1,
      scale: 1,
      x: 12,
      y: 124,
      transition: _
    },
    exit: {
      opacity: 0,
      scale: .6,
      x: 12,
      y: 124,
      transition: {
        ..._,
        delay: .1
      }
    }
  };
  return jsxs(P.svg, {
    width: "36",
    height: "36",
    viewBox: "0 0 36 36",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      zIndex: 9,
      background: p(u.bg),
      borderRadius: 36,
      transformOrigin: "center"
    },
    variants: t,
    initial: "initial",
    animate: "codeExit" === e ? "exit" : "icon" === e || "code" === e || "fixingErrors" === e ? "show" : "initial",
    children: [jsx("rect", {
      x: "0.5",
      y: "0.5",
      width: "35",
      height: "35",
      rx: "17.5",
      fill: p(u.bg),
      fillOpacity: "0.3"
    }), jsx("rect", {
      x: "0.5",
      y: "0.5",
      width: "35",
      height: "35",
      rx: "17.5",
      stroke: p(u.strokeLight)
    }), jsx("path", {
      d: "M14.8779 13.0316C15.0963 12.8874 15.3927 12.9116 15.585 13.1038C15.777 13.2961 15.8014 13.5926 15.6572 13.8109L15.585 13.8988L11.4824 18.0013L15.585 22.1038C15.8044 22.3235 15.8045 22.6792 15.585 22.8988C15.3654 23.1181 15.0096 23.1181 14.79 22.8988L10.29 18.3988C10.1847 18.2934 10.1251 18.1503 10.125 18.0013C10.125 17.8894 10.1585 17.7805 10.2197 17.6888L10.29 17.6038L14.79 13.1038L14.8779 13.0316ZM20.415 13.1029C20.6073 12.9107 20.9037 12.8864 21.1221 13.0306L21.21 13.1029L25.71 17.6029L25.7803 17.6878C25.8416 17.7796 25.875 17.8883 25.875 18.0003C25.875 18.1494 25.8154 18.2923 25.71 18.3978L21.21 22.8978C20.9903 23.1174 20.6347 23.1174 20.415 22.8978C20.1954 22.6781 20.1955 22.3225 20.415 22.1029L24.5176 18.0003L20.415 13.8978L20.3428 13.8099C20.1986 13.5916 20.2229 13.2951 20.415 13.1029Z",
      fill: p(u.icon)
    })]
  });
}
function v({
  animationPhase: e
}) {
  let t = (e, t, n, o, i) => ({
    initial: {
      x: e,
      y: -50,
      rotate: t,
      opacity: 1,
      scale: 1
    },
    animate: {
      x: e,
      y: [-64, 236],
      rotate: n,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 2.2,
        ease: "linear",
        repeat: 1 / 0,
        repeatDelay: 0,
        repeatType: "loop",
        delay: o,
        times: [0, 1]
      }
    },
    exit: {
      x: e,
      y: [-64, 236],
      opacity: 0,
      rotate: n,
      scale: .6,
      transition: {
        duration: .4,
        type: "spring"
      }
    }
  });
  let n = t(34, 0, -5, 0, 0);
  let i = t(138, -5, 5, .2, 0);
  let r = t(75, 0, -15, .5, .1);
  let s = t(183, -5, 5, .7, .15);
  let d = t(20, 0, 15, 1, .2);
  let c = t(128, -5, 5, 1.2, .25);
  let p = t(70, 0, -12, 1.5, .25);
  let u = t(164, -6, 6, 1.7, .3);
  let h = () => {
    switch (e) {
      case "fallingIcons":
        return "animate";
      case "fallingIconsExit":
      case "reset":
        return "exit";
      default:
        return "initial";
    }
  };
  let m = G();
  return jsxs(Fragment, {
    children: [jsxs(P.div, {
      style: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 252,
        height: 172,
        zIndex: 7,
        overflow: "hidden"
      },
      animate: {
        opacity: "fallingIconsExit" === e || "reset" === e ? 0 : 1
      },
      transition: {
        duration: .3
      },
      children: [jsx(P.div, {
        style: {
          position: "absolute"
        },
        variants: d,
        initial: "initial",
        animate: h(),
        children: jsx(I, {})
      }), jsx(P.div, {
        style: {
          position: "absolute"
        },
        variants: i,
        initial: "initial",
        animate: h(),
        children: jsx(C, {})
      }), jsx(P.div, {
        style: {
          position: "absolute"
        },
        variants: p,
        initial: "initial",
        animate: h(),
        children: jsx(j, {})
      }), jsx(P.div, {
        style: {
          position: "absolute"
        },
        variants: n,
        initial: "initial",
        animate: h(),
        children: jsx(N, {})
      }), jsx(P.div, {
        style: {
          position: "absolute"
        },
        variants: c,
        initial: "initial",
        animate: h(),
        children: jsx(E, {})
      }), jsx(P.div, {
        style: {
          position: "absolute"
        },
        variants: r,
        initial: "initial",
        animate: h(),
        children: jsx(S, {})
      }), jsx(P.div, {
        style: {
          position: "absolute"
        },
        variants: s,
        initial: "initial",
        animate: h(),
        children: jsx(A, {})
      }), jsx(P.div, {
        style: {
          position: "absolute"
        },
        variants: u,
        initial: "initial",
        animate: h(),
        children: jsx(T, {})
      })]
    }), jsx(P.div, {
      style: {
        position: "absolute",
        width: "238px",
        height: "92px",
        left: "8px",
        top: "-10px",
        background: x[m.color].top,
        zIndex: 7,
        pointerEvents: "none"
      }
    }), jsx(P.div, {
      style: {
        position: "absolute",
        width: "238px",
        height: "62px",
        left: "8px",
        top: "110px",
        background: x[m.color].bottom,
        zIndex: 7,
        pointerEvents: "none"
      }
    })]
  });
}
function I() {
  return jsxs("svg", {
    width: "40",
    height: "40",
    viewBox: "0 0 40 40",
    fill: "none",
    children: [jsxs("g", {
      clipPath: "url(#clip0_7376_774364)",
      children: [jsx("path", {
        d: "M6.66699 19.9998C6.66699 19.5089 7.06496 19.1109 7.55588 19.1109H32.4448C32.9357 19.1109 33.3337 19.5089 33.3337 19.9998C33.3337 20.4908 32.9357 20.8887 32.4448 20.8887H7.55588C7.06496 20.8887 6.66699 20.4908 6.66699 19.9998Z",
        fill: p(u.icon)
      }), jsx("path", {
        d: "M20.0003 6.6665C20.4912 6.6665 20.8892 7.06447 20.8892 7.55539L20.8892 32.4443C20.8892 32.9352 20.4912 33.3332 20.0003 33.3332C19.5094 33.3332 19.1114 32.9352 19.1114 32.4443L19.1114 7.55539C19.1114 7.06447 19.5094 6.6665 20.0003 6.6665Z",
        fill: p(u.icon)
      }), jsx("path", {
        d: "M29.4284 10.5717C29.7755 10.9189 29.7755 11.4817 29.4284 11.8288L11.8293 29.4279C11.4822 29.7751 10.9194 29.7751 10.5722 29.4279C10.2251 29.0808 10.2251 28.518 10.5722 28.1708L28.1713 10.5717C28.5185 10.2246 29.0813 10.2246 29.4284 10.5717Z",
        fill: p(u.icon)
      }), jsx("path", {
        d: "M10.5729 10.5718C10.92 10.2246 11.4828 10.2246 11.83 10.5718L29.4291 28.1709C29.7762 28.518 29.7762 29.0808 29.4291 29.4279C29.0819 29.7751 28.5191 29.7751 28.172 29.4279L10.5729 11.8288C10.2258 11.4817 10.2258 10.9189 10.5729 10.5718Z",
        fill: p(u.icon)
      })]
    }), jsx("defs", {
      children: jsx("clipPath", {
        id: "clip0_7376_774364",
        children: jsx("rect", {
          width: "26.6667",
          height: "26.6667",
          fill: "white",
          transform: "translate(6.66699 6.6665)"
        })
      })
    })]
  });
}
function C() {
  return jsxs("svg", {
    width: "40",
    height: "40",
    viewBox: "0 0 40 40",
    fill: "none",
    children: [jsx("g", {
      clipPath: "url(#clip0_7376_774366)",
      children: jsx("path", {
        d: "M13.333 7.49951H26.667C28.0474 7.49969 29.1668 8.61906 29.167 9.99951V29.5815C29.167 30.3037 28.3103 30.6848 27.7744 30.2007L21.1172 24.187C20.4827 23.6139 19.5173 23.6139 18.8828 24.187L12.2256 30.2007C11.6897 30.6848 10.833 30.3037 10.833 29.5815V9.99951C10.8332 8.61906 11.9526 7.49969 13.333 7.49951Z",
        stroke: p(u.icon),
        strokeWidth: "1.66667"
      })
    }), jsx("defs", {
      children: jsx("clipPath", {
        id: "clip0_7376_774366",
        children: jsx("rect", {
          width: "26.6667",
          height: "26.6667",
          fill: p(u.bg),
          transform: "translate(6.66699 6.6665)"
        })
      })
    })]
  });
}
function E() {
  return jsxs("svg", {
    width: "40",
    height: "40",
    viewBox: "0 0 40 40",
    fill: "none",
    children: [jsx("mask", {
      id: "path-1-inside-1_7376_774367",
      fill: "white",
      children: jsx("path", {
        d: "M20 6.6665C27.3636 6.6665 33.3327 12.6359 33.333 19.9995C33.333 27.3633 27.3638 33.3335 20 33.3335C17.6248 33.3335 15.3954 32.7111 13.4639 31.6226L8.99609 33.1128C7.69316 33.5471 6.45339 32.3073 6.8877 31.0044L8.37695 26.5347C7.28885 24.6034 6.66699 22.3741 6.66699 19.9995C6.66726 12.6359 12.6364 6.6665 20 6.6665Z"
      })
    }), jsx("path", {
      d: "M20 6.6665L20 4.99984H20V6.6665ZM33.333 19.9995L34.9997 19.9995L34.9997 19.9995L33.333 19.9995ZM20 33.3335L20 35.0002H20L20 33.3335ZM13.4639 31.6226L14.2822 30.1706L13.638 29.8076L12.9365 30.0415L13.4639 31.6226ZM8.99609 33.1128L9.52314 34.6939L9.52345 34.6938L8.99609 33.1128ZM6.8877 31.0044L8.46883 31.5314L8.4689 31.5312L6.8877 31.0044ZM8.37695 26.5347L9.95816 27.0615L10.1918 26.3604L9.829 25.7165L8.37695 26.5347ZM6.66699 19.9995L5.00033 19.9995V19.9995H6.66699ZM20 6.6665L20 8.33317C26.4431 8.33317 31.6661 13.5564 31.6663 19.9996L33.333 19.9995L34.9997 19.9995C34.9994 11.7155 28.2842 4.99984 20 4.99984L20 6.6665ZM33.333 19.9995H31.6663C31.6663 26.443 26.4432 31.6668 20 31.6668L20 33.3335L20 35.0002C28.2844 35.0002 34.9997 28.2836 34.9997 19.9995H33.333ZM20 33.3335V31.6668C17.9196 31.6668 15.9711 31.1224 14.2822 30.1706L13.4639 31.6226L12.6456 33.0745C14.8197 34.2998 17.33 35.0002 20 35.0002V33.3335ZM13.4639 31.6226L12.9365 30.0415L8.46874 31.5318L8.99609 33.1128L9.52345 34.6938L13.9912 33.2036L13.4639 31.6226ZM8.99609 33.1128L8.46905 31.5317L8.46883 31.5314L6.8877 31.0044L5.30656 30.4773C4.43794 33.0832 6.91728 35.5626 9.52314 34.6939L8.99609 33.1128ZM6.8877 31.0044L8.4689 31.5312L9.95816 27.0615L8.37695 26.5347L6.79575 26.0078L5.30649 30.4776L6.8877 31.0044ZM8.37695 26.5347L9.829 25.7165C8.87765 24.028 8.33366 22.0796 8.33366 19.9995H6.66699H5.00033C5.00033 22.6687 5.70006 25.1789 6.9249 27.3528L8.37695 26.5347ZM6.66699 19.9995L8.33366 19.9996C8.33389 13.5564 13.5569 8.33317 20 8.33317V6.6665V4.99984C11.7158 4.99984 5.00062 11.7155 5.00033 19.9995L6.66699 19.9995Z",
      fill: p(u.icon),
      mask: "url(#path-1-inside-1_7376_774367)"
    })]
  });
}
function j() {
  return jsx("svg", {
    width: "40",
    height: "40",
    viewBox: "0 0 40 40",
    fill: "none",
    children: jsx("path", {
      d: "M20.3008 8.3374C26.6049 8.49711 31.666 13.6578 31.666 20.0005L31.6621 20.3013C31.5022 26.6052 26.3424 31.6663 20 31.6665L19.6982 31.6626C13.4947 31.5049 8.49424 26.5049 8.33691 20.3013L8.33301 20.0005C8.33301 13.5574 13.557 8.33385 20 8.3335L20.3008 8.3374ZM20 10.0005C14.4775 10.0008 10 14.4779 10 20.0005C10.0004 25.5228 14.4777 30.0001 20 30.0005C25.5225 30.0003 29.9996 25.5229 30 20.0005C30 14.4777 25.5227 10.0007 20 10.0005ZM25.3779 21.6733C25.622 21.7048 25.842 21.8433 25.9756 22.0542C26.1282 22.2957 26.1468 22.5989 26.0244 22.8569C24.9887 25.0369 22.8027 26.5682 20.248 26.6616L20 26.6655C17.4227 26.6654 15.1891 25.203 14.0801 23.0659L13.9756 22.8569C13.8533 22.5989 13.8719 22.2956 14.0244 22.0542C14.1771 21.8129 14.443 21.6666 14.7285 21.6665H25.2715L25.3779 21.6733ZM16.2744 23.3325C17.1903 24.3557 18.5203 24.9994 20 24.9995L20.3701 24.9858C21.7008 24.8885 22.8867 24.2697 23.7256 23.3325H16.2744ZM16.667 14.9995C17.5873 14.9997 18.3329 15.7462 18.333 16.6665C18.333 17.5869 17.5873 18.3333 16.667 18.3335C15.7465 18.3335 15 17.587 15 16.6665C15.0001 15.7461 15.7466 14.9995 16.667 14.9995ZM23.333 14.9995C24.2534 14.9995 24.9999 15.7461 25 16.6665C25 17.587 24.2535 18.3335 23.333 18.3335C22.4127 18.3333 21.667 17.5869 21.667 16.6665C21.6671 15.7462 22.4127 14.9997 23.333 14.9995Z",
      fill: p(u.icon)
    })
  });
}
function N() {
  return jsx("svg", {
    width: "40",
    height: "40",
    viewBox: "0 0 40 40",
    fill: "none",
    children: jsx("path", {
      d: "M21.3291 11.0493C23.8048 8.61828 27.7764 8.54181 30.3457 10.8208L30.5898 11.0493C33.0574 13.4725 33.1348 17.348 30.8213 19.8618L30.5898 20.1001L20 30.4976L9.41113 20.1001C6.86394 17.5989 6.86394 13.5505 9.41113 11.0493C11.8869 8.61826 15.8585 8.54168 18.4277 10.8208L18.6719 11.0493L19.416 11.7808L20 12.354L20.584 11.7808L21.3291 11.0493Z",
      stroke: p(u.icon),
      strokeWidth: "1.66667"
    })
  });
}
function T() {
  return jsx("svg", {
    width: "40",
    height: "40",
    viewBox: "0 0 40 40",
    fill: "none",
    children: jsx("path", {
      d: "M19.0352 5.30728C19.6528 4.86836 20.4988 4.89969 21.084 5.40103L32.751 15.401C33.1204 15.7177 33.333 16.1801 33.333 16.6667V31.6667C33.3328 32.587 32.5864 33.3336 31.666 33.3336H25C24.0798 33.3335 23.3332 32.5869 23.333 31.6667V21.6667H16.666V31.6667C16.6658 32.5869 15.9202 33.3335 15 33.3336H8.33301C7.41279 33.3335 6.66619 32.5869 6.66602 31.6667V16.6667C6.66602 16.1803 6.8789 15.7177 7.24805 15.401L18.915 5.40103L19.0352 5.30728ZM8.33301 16.6667V31.6667H15V19.9997H25V31.6667H31.666V16.6667L20 6.66666L8.33301 16.6667Z",
      fill: p(u.icon)
    })
  });
}
function S() {
  return jsx("svg", {
    width: "40",
    height: "40",
    viewBox: "0 0 40 40",
    fill: "none",
    children: jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M29.5131 13.2457C30.8458 15.1227 31.5882 17.3443 31.6611 19.6277C31.6648 19.7453 31.6668 19.863 31.667 19.9809C31.667 19.9873 31.6671 19.9936 31.6672 19.9998C31.6672 21.8408 30.1747 23.3332 28.3337 23.3332C27.3381 23.3332 26.4445 22.8967 25.8337 22.2047V14.9998C25.8337 14.5396 25.4606 14.1665 25.0003 14.1665C24.5401 14.1665 24.167 14.5396 24.167 14.9998V15.9174C23.1082 14.8369 21.6326 14.1665 20.0003 14.1665C16.7787 14.1665 14.167 16.7782 14.167 19.9998C14.167 23.2215 16.7787 25.8332 20.0003 25.8332C21.9338 25.8332 23.6476 24.8925 24.709 23.4439C25.6199 24.4023 26.907 24.9998 28.3337 24.9998C31.0475 24.9998 33.2563 22.8379 33.3317 20.1424C33.3327 20.1275 33.3332 20.1125 33.3333 20.0973C33.3335 20.0729 33.3336 20.0485 33.3337 20.0241C33.3337 20.016 33.3337 20.0079 33.3337 19.9998C33.3337 19.9927 33.3337 19.9855 33.3337 19.9783C33.3293 17.2275 32.4736 14.5365 30.8721 12.2808C29.0862 9.76561 26.4835 7.9474 23.5074 7.13601C20.5313 6.32463 17.3659 6.57028 14.5506 7.8311C11.7353 9.09192 9.44429 11.2899 8.06788 14.0505C6.69148 16.8112 6.31487 19.9637 7.00223 22.9708C7.68958 25.978 9.39837 28.6538 11.8374 30.5424C14.2765 32.4309 17.2949 33.4153 20.3784 33.3278C23.1437 33.2494 25.8078 32.3133 28.0073 30.6613C28.039 30.6375 28.0707 30.6135 28.1022 30.5894C28.4677 30.3097 28.503 29.7811 28.2011 29.4337C27.9222 29.1129 27.4532 29.0593 27.0933 29.2708C27.0781 29.2797 27.063 29.2891 27.0482 29.299C27.0341 29.3085 27.0201 29.3183 27.0064 29.3286C25.0818 30.7741 22.7507 31.5932 20.3312 31.6618C17.6331 31.7384 14.992 30.877 12.8578 29.2246C10.7236 27.5721 9.22843 25.2307 8.62699 22.5995C8.02556 19.9682 8.35509 17.2098 9.55944 14.7942C10.7638 12.3786 12.7684 10.4554 15.2318 9.35219C17.6952 8.24897 20.4649 8.03403 23.069 8.74399C25.6731 9.45395 27.9505 11.0449 29.5131 13.2457ZM24.167 19.9998C24.167 22.301 22.3015 24.1665 20.0003 24.1665C17.6992 24.1665 15.8337 22.301 15.8337 19.9998C15.8337 17.6987 17.6992 15.8332 20.0003 15.8332C22.3015 15.8332 24.167 17.6987 24.167 19.9998Z",
      fill: p(u.icon)
    })
  });
}
function A() {
  return jsx("svg", {
    width: "40",
    height: "40",
    viewBox: "0 0 40 40",
    fill: "none",
    children: jsx("path", {
      d: "M20 6.6665C12.6364 6.6665 6.66699 12.6358 6.66699 19.9998C6.66699 27.3639 12.6364 33.3332 20 33.3332C27.3637 33.3332 33.3337 27.3639 33.3337 19.9998C33.3337 12.6358 27.3637 6.6665 20 6.6665ZM20 8.33317C26.4431 8.33317 31.667 13.5564 31.667 19.9998C31.667 22.8207 30.5955 25.3998 28.8223 27.3332C27.6031 25.1332 25.3337 23.6665 22.7087 23.4332C24.3753 22.4998 25.4837 20.7332 25.4837 18.7498C25.4837 15.7498 23.0003 13.3332 20.0003 13.3332C17.0003 13.3332 14.517 15.7498 14.517 18.7498C14.517 20.7332 15.6253 22.4998 17.292 23.4332C14.667 23.6665 12.3976 25.1332 11.1784 27.3332C9.40521 25.3998 8.33366 22.8207 8.33366 19.9998C8.33366 13.5564 13.5569 8.33317 20 8.33317ZM16.1837 18.7498C16.1837 16.6665 17.9003 14.9998 20.0003 14.9998C22.1003 14.9998 23.817 16.6665 23.817 18.7498C23.817 20.8332 22.1003 22.4998 20.0003 22.4998C17.9003 22.4998 16.1837 20.8332 16.1837 18.7498ZM12.9587 28.6665C13.9587 26.1665 16.7503 24.1665 20.0003 24.1665C23.2503 24.1665 26.042 26.1665 27.042 28.6665C24.9587 30.4998 22.6003 31.6665 20 31.6665C17.3997 31.6665 15.042 30.4998 12.9587 28.6665Z",
      fill: p(u.icon)
    })
  });
}
export const Ay = $$g0;