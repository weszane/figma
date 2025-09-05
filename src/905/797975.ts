import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { hS } from "../905/437088";
import { t as _$$t } from "../905/150656";
import { bL } from "../905/38914";
import { vo, Y9, hE, Jn, nB, Wk } from "../figma_app/272243";
import { bL as _$$bL } from "../905/246123";
import { fI } from "../905/201252";
import { fh } from "../905/127493";
import { r as _$$r } from "../905/216849";
import { e as _$$e } from "../905/693478";
import { E as _$$E } from "../905/500201";
import { s as _$$s } from "../905/539471";
import { g as _$$g } from "../905/687265";
import { Ay } from "@stylexjs/stylex";
import { t as _$$t2 } from "../905/303541";
import { Ju } from "../905/102752";
import { memo, useState, useEffect, useMemo } from "react";
import { W as _$$W } from "../figma_app/304955";
import { fp, zl } from "../figma_app/27355";
import { JT } from "../figma_app/632248";
import { RL, qy, z8, wj, Ag } from "../figma_app/862289";
import { nM, NJ } from "../figma_app/570630";
import { Iq, Qc, mp } from "../905/723429";
import { tI, Zc, Ul, R6 } from "../905/127813";
import { WW, $n } from "../905/521428";
import { O as _$$O } from "../905/587457";
import { buildUploadUrl } from "../figma_app/169182";
import { oW } from "../905/675859";
import { r as _$$r2 } from "../905/571838";
import { useDispatch } from "../vendor/514228";
import { E as _$$E2 } from "../905/53857";
import { k as _$$k } from "../905/443820";
import { V as _$$V } from "../905/291719";
import { g as _$$g2 } from "../905/757007";
import { U as _$$U } from "../905/275247";
import { e as _$$e2 } from "../905/483726";
import { aZ, Lo } from "../905/156213";
import { R as _$$R } from "../figma_app/184628";
import { createPortal } from "../vendor/944059";
import { gR, bL as _$$bL2 } from "../figma_app/861123";
import { B as _$$B } from "../905/950875";
import { f as _$$f } from "../905/555062";
import { glU } from "../figma_app/763686";
import { l7 } from "../905/189185";
let k = memo(function (e) {
  return _$$O() ? jsx("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: jsx("path", {
      fill: "var(--color-icon)",
      d: "M5.972 5.316a9 9 0 0 1 12.392.32l.198.204a9 9 0 0 1 2.304 7.713C20.586 15.158 19.1 16 17.732 16H14a1 1 0 0 0-1 1v.5c0 .959-.397 1.867-1.066 2.474-.687.624-1.67.924-2.701.591a9 9 0 0 1-3.4-2.01l-.198-.192a9 9 0 0 1 0-12.727zm11.685 1.027A8 8 0 1 0 9.54 19.614c1.231.397 2.315-.595 2.446-1.858L12 17.5V17a2 2 0 0 1 2-2h3.73l.191-.007c.882-.067 1.68-.594 1.916-1.429l.042-.183a7.99 7.99 0 0 0-2.223-7.038M7.5 11.5a1.5 1.5 0 1 1-.001 3.002A1.5 1.5 0 0 1 7.5 11.5m0 1a.5.5 0 1 0 .001 1 .5.5 0 0 0 0-1m8.501-3a1.5 1.5 0 1 1 0 3.001A1.5 1.5 0 0 1 16 9.5m0 .999a.501.501 0 0 0 0 1 .501.501 0 0 0 0-1M8.501 7a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M8.5 8a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1.001M13 6a1.5 1.5 0 1 1-.002 3.002A1.5 1.5 0 0 1 13 6m0 1a.5.5 0 1 0 .002 1A.5.5 0 0 0 13 7"
    })
  }) : jsx("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: jsx("path", {
      fill: "var(--color-icon)",
      d: "M5.972 5.316a9 9 0 0 1 12.391.32l.198.204a9 9 0 0 1 2.304 7.713C20.585 15.159 19.1 16 17.731 16H14a1 1 0 0 0-1 1v.5c0 .959-.396 1.867-1.065 2.474-.688.624-1.67.924-2.702.591a9 9 0 0 1-3.4-2.01l-.197-.192a9 9 0 0 1 0-12.727zm11.684 1.027A8 8 0 1 0 9.54 19.614c1.232.397 2.316-.595 2.446-1.858L12 17.5V17a2 2 0 0 1 2-2h3.731l.19-.007c.883-.066 1.68-.593 1.917-1.429l.042-.183a7.99 7.99 0 0 0-2.224-7.038M7.5 12a1.5 1.5 0 1 1-.001 3 1.5 1.5 0 0 1 0-3.001m0 1A.5.5 0 1 0 7.5 14a.5.5 0 0 0 0-1m9-3a1.5 1.5 0 1 1-.001 3 1.5 1.5 0 0 1 0-3m0 1a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1m-8-4a1.5 1.5 0 1 1-.002 3.002A1.5 1.5 0 0 1 8.5 7m0 1a.5.5 0 1 0 .002 1.002A.5.5 0 0 0 8.5 8m5-2a1.5 1.5 0 1 1-.002 3 1.5 1.5 0 0 1 .002-3m0 1a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1"
    })
  });
});
function P({
  handleCtaClick: e
}) {
  return jsx(_$$bL, {
    children: jsxs(fI, {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr"
      },
      children: [jsxs(fh, {
        style: {
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          alignItems: "flex-start",
          padding: "32px 40px 32px 32px",
          justifyContent: "center",
          maxHeight: "80vh"
        },
        children: [jsx("div", {
          className: "x78zum5 xe8ttls xl56j7k x1sxf85j x1ijawla xvy4d1p",
          children: jsx(k, {})
        }), jsxs("div", {
          className: "x78zum5 xdt5ytf x167g77z x1cy8zhl xkh2ocl",
          children: [jsx("span", {
            ...Ay.props(O.title),
            children: _$$t2("figmake.design_system_imports.library_extraction_theming_progress.intro.title")
          }), jsx("span", {
            ...Ay.props(O.subtitle),
            children: _$$t2("figmake.design_system_imports.library_extraction_theming_progress.intro.description")
          })]
        }), jsxs("div", {
          className: "x78zum5 x1cy8zhl x1v2ro7d",
          children: [jsx(WW, {
            onClick: e,
            children: _$$t2("figmake.design_system_imports.library_extraction_theming_progress.intro.cta")
          }), jsx(WW, {
            variant: "secondary",
            children: _$$t2("figmake.design_system_imports.library_extraction_theming_progress.intro.learn_more")
          })]
        })]
      }), jsx(fh, {
        style: {
          backgroundColor: "#A259FF",
          overflow: "hidden"
        },
        children: jsx("div", {
          className: "xesecky x1nhvcw1 x2lah0s x6s0dn4 xh8yej3 x5yr21d xb3r6kr x78zum5",
          children: jsx(oW, {
            src: buildUploadUrl("8f9ea4299394b01641704355fb378c6159f05a52"),
            width: 839,
            height: 884,
            style: {
              flexShrink: 0,
              borderRadius: "20px",
              objectPosition: "left"
            }
          })
        })
      })]
    })
  });
}
let O = {
  title: {
    ..._$$g.textHeadingMedium,
    $$css: !0
  },
  subtitle: {
    ..._$$g.textBodyMedium,
    $$css: !0
  }
};
function L({
  onTryAgain: e
}) {
  return jsxs("div", {
    className: "x78zum5 xdt5ytf x6s0dn4 xl56j7k x11lgt47 xh8yej3 x1v2ro7d",
    children: [jsx("div", {
      className: "x78zum5 xe8ttls xl56j7k x1sxf85j xvy4d1p",
      style: {
        backgroundColor: "var(--color-bg-danger-tertiary)"
      },
      children: jsx(_$$r2, {
        style: {
          "--color-icon": "var(--color-icon-danger)"
        }
      })
    }), jsx("h3", {
      ...Ay.props(F.title),
      children: _$$t2("figmake.design_system_imports.library_extraction_theming_progress.title.failed")
    }), jsx("span", {
      ...Ay.props(F.errorSubtitle),
      children: _$$t2("figmake.design_system_imports.library_extraction_theming_progress.subtitle.failed")
    }), e && jsx($n, {
      variant: "primary",
      onClick: () => {
        e();
      },
      children: _$$t2("figmake.design_system_imports.library_extraction_theming_progress.try_again")
    })]
  });
}
let F = {
  title: {
    ..._$$g.textBodyLargeStrong,
    textAlign: "x2b8uid",
    $$css: !0
  },
  errorSubtitle: {
    ..._$$g.textBodyMedium,
    color: "xv1l7n4",
    textAlign: "x2b8uid",
    maxWidth: "x1racy4e",
    $$css: !0
  }
};
function W({
  setWasMissingExamplesInPreviousRender: e
}) {
  let t = RL(JT.PUBLISH_LIBRARY_FOR_AI, Iq);
  return jsxs("div", {
    className: "x78zum5 x193iq5w xdt5ytf x1cy8zhl x167g77z x1vcdrz3 xkh2ocl",
    children: [jsx("span", {
      ...Ay.props(q.optionalText),
      children: _$$t2("figmake.design_system_imports.library_extraction_theming_progress.step.examples.found.subtitle")
    }), jsx("div", {
      className: "x78zum5 x1cy8zhl x167g77z x1a02dak",
      children: jsx($n, {
        onClick: () => {
          e(!1);
          t.start();
        },
        children: _$$t2("figmake.design_system_imports.library_extraction_theming_progress.step.examples.found.cta")
      })
    })]
  });
}
function K({
  setSkippedExamples: e
}) {
  let t = RL(JT.PUBLISH_LIBRARY_FOR_AI, Iq);
  let i = useDispatch();
  return jsxs("div", {
    className: "x78zum5 x193iq5w xdt5ytf x1cy8zhl x167g77z x1vcdrz3 xkh2ocl",
    children: [jsx("span", {
      ...Ay.props(q.optionalText),
      children: _$$t2("figmake.design_system_imports.library_extraction_theming_progress.step.examples.error_description")
    }), jsxs("div", {
      className: "x78zum5 x1cy8zhl x167g77z",
      children: [jsx(_$$E2, {
        variant: "brandOutline",
        size: "md",
        children: _$$t2("figmake.design_system_imports.library_extraction_theming_progress.step.examples.step_1_number")
      }), jsx("span", {
        ...Ay.props(q.optionalText),
        children: _$$t2("figmake.design_system_imports.library_extraction_theming_progress.step.examples.step_1")
      })]
    }), jsxs("div", {
      className: "x78zum5 x1cy8zhl x167g77z",
      children: [jsx(_$$E2, {
        variant: "brandOutline",
        size: "md",
        children: _$$t2("figmake.design_system_imports.library_extraction_theming_progress.step.examples.step_2_number")
      }), jsx("span", {
        ...Ay.props(q.optionalText),
        children: _$$t2("figmake.design_system_imports.library_extraction_theming_progress.step.examples.step_2")
      })]
    }), jsxs("div", {
      className: "x78zum5 x1cy8zhl x167g77z",
      children: [jsx(_$$E2, {
        variant: "brandOutline",
        size: "md",
        children: _$$t2("figmake.design_system_imports.library_extraction_theming_progress.step.examples.step_3_number")
      }), jsx("span", {
        ...Ay.props(q.optionalText),
        children: _$$t2("figmake.design_system_imports.library_extraction_theming_progress.step.examples.step_3")
      })]
    }), jsxs("div", {
      className: "x78zum5 x1cy8zhl x167g77z x1a02dak",
      children: [jsx($n, {
        onClick: () => {
          e(!0);
          t.start();
        },
        children: _$$t2("figmake.design_system_imports.library_extraction_theming_progress.step.examples.skip")
      }), jsx($n, {
        variant: "secondary",
        onClick: () => {
          i(aZ());
          i(Lo());
        },
        children: _$$t2("figmake.design_system_imports.library_extraction_theming_progress.step.examples.go_to_canvas")
      })]
    })]
  });
}
function Y({
  setShowCodeEditor: e
}) {
  let {
    start,
    tasks,
    state
  } = RL(JT.PUBLISH_LIBRARY_FOR_AI, Iq);
  let [a, s] = fp(tI);
  let [o] = fp(Zc);
  let [u, m] = useState(!1);
  useEffect(() => {
    o && state === qy.ERROR && (m(!0), start());
  }, []);
  let h = useMemo(() => state !== qy.RUNNING ? null : tasks.find(e => e.state === z8.INCOMPLETE), [tasks, state]);
  let g = useMemo(() => tasks.every(e => e.state === z8.SUCCEEDED || e.state === z8.FAILED && e.error instanceof Qc && a), [tasks, a]);
  let A = useMemo(() => tasks.some(e => e.state === z8.FAILED && !(e.error instanceof Qc)), [tasks]);
  let b = useMemo(() => state !== qy.RUNNING && o && !a, [state, o, a]);
  let x = e => {
    switch (e.taskId) {
      case mp.STYLES:
        return _$$t2("figmake.design_system_imports.library_extraction_theming_progress.step.styles");
      case mp.EXAMPLES:
        return e.state === z8.FAILED ? e.error.message : e.state === z8.SUCCEEDED && u ? _$$t2("figmake.design_system_imports.library_extraction_theming_progress.step.examples.found") : _$$t2("figmake.design_system_imports.library_extraction_theming_progress.step.examples");
      case mp.CSS:
        return _$$t2("figmake.design_system_imports.library_extraction_theming_progress.step.css");
    }
  };
  let T = e => {
    switch (e.state) {
      case z8.INCOMPLETE:
        return h && e.taskId === h.taskId ? jsx(_$$k, {
          size: "md"
        }) : jsx(_$$V, {});
      case z8.SUCCEEDED:
        if (g && e.taskId === mp.CSS) return jsx(_$$g2, {
          style: {
            "--color-icon": "var(--color-icon-success)"
          }
        });
        return jsx(_$$U, {
          style: {
            "--color-icon": "var(--color-icon-success)"
          }
        });
      case z8.FAILED:
        return jsx(_$$e2, {
          style: {
            "--color-icon": "var(--color-icon-warning)"
          }
        });
    }
  };
  return A ? jsx(L, {
    onTryAgain: () => {
      s(!1);
      start();
    }
  }) : jsxs(_$$bL, {
    className: "xrvj5dj xl56j7k x6s0dn4 x1v2ro7d x8tv4h3",
    children: [jsx(fI, {
      className: "x78zum5 xdt5ytf x6s0dn4 xg7h5cd xdzyupr",
      children: jsx(fh, {
        className: "x78zum5 xe8ttls xl56j7k x1sxf85j xvy4d1p",
        style: {
          backgroundColor: g ? "var(--color-bg-success-tertiary)" : b ? "var(--color-bg-warning-tertiary)" : "var(--color-bg-secondary)"
        },
        children: g ? jsx(_$$U, {
          style: {
            "--color-icon": "var(--color-icon-success)"
          }
        }) : b ? jsx(_$$e2, {
          style: {
            "--color-icon": "var(--color-icon-warning)"
          }
        }) : jsx(_$$e, {})
      })
    }), jsx(fI, {
      className: "x78zum5 xdt5ytf x6s0dn4 xg7h5cd xdzyupr",
      children: jsxs(fh, {
        children: [jsx("h3", {
          ...Ay.props(q.title),
          children: g ? _$$t2("figmake.design_system_imports.library_extraction_theming_progress.title.completed") : b ? _$$t2("figmake.design_system_imports.library_extraction_theming_progress.title.error") : _$$t2("figmake.design_system_imports.library_extraction_theming_progress.title.in_progress")
        }), jsx("span", {
          ...Ay.props(q.subtitle),
          children: g ? _$$t2("figmake.design_system_imports.library_extraction_theming_progress.description.completed") : b ? _$$t2("figmake.design_system_imports.library_extraction_theming_progress.description.error") : _$$t2("figmake.design_system_imports.library_extraction_theming_progress.description.in_progress")
        })]
      })
    }), jsx(fI, {
      className: "x78zum5 xdt5ytf x6s0dn4 xg7h5cd xdzyupr",
      children: jsx(_$$bL, {
        className: "x78zum5 xdt5ytf x1cy8zhl xur7f20 x1ci220x xh8yej3 xw5ewwj",
        children: tasks.map(t => jsxs(fI, {
          className: "x78zum5 xdt5ytf xc7ga6q x1kgkb76 x9f619 xh8yej3 x1rix2v9",
          children: [jsxs("div", {
            className: "x78zum5 x6s0dn4 xkh2ocl x1q0g3np x167g77z xh8yej3",
            children: [jsx("div", {
              ...Ay.props(q.stateHeader),
              children: jsxs("span", {
                children: [" ", T(t)]
              })
            }), jsx("span", {
              children: x(t)
            }), t.taskId === mp.EXAMPLES && !a && jsx("span", {
              ...Ay.props(q.optionalText),
              children: _$$t2("figmake.design_system_imports.library_extraction_theming_progress.step.examples.optional")
            }), t.taskId === mp.EXAMPLES && o && a && jsx("span", {
              ...Ay.props(q.optionalText),
              children: _$$t2("figmake.design_system_imports.library_extraction_theming_progress.step.examples.skipped")
            }), t.taskId === mp.CSS && g && jsx("div", {
              className: "x78zum5 x6s0dn4 xpvyfi4 xeq5yr9 x8x9d4c",
              children: jsx($n, {
                onClick: () => {
                  e(!0);
                },
                children: _$$t2("figmake.design_system_imports.library_extraction_theming_progress.button.complete")
              })
            })]
          }), t.taskId === mp.EXAMPLES && b && state === qy.ERROR && jsx(K, {
            setSkippedExamples: s
          }), t.taskId === mp.EXAMPLES && t.state === z8.SUCCEEDED && u && jsx(W, {
            setWasMissingExamplesInPreviousRender: m
          })]
        }, t.taskId))
      })
    })]
  });
}
let q = {
  title: {
    ..._$$g.textBodyLargeStrong,
    textAlign: "x2b8uid",
    $$css: !0
  },
  subtitle: {
    ..._$$g.textBodyMedium,
    color: "xv1l7n4",
    alignSelf: "xkh2ocl",
    textAlign: "x2b8uid",
    display: "x78zum5",
    maxWidth: "xw5ewwj",
    $$css: !0
  },
  stateHeader: {
    ..._$$g.textBodyMediumStrong,
    $$css: !0
  },
  optionalText: {
    ..._$$g.textBodyMedium,
    color: "xv1l7n4",
    marginLeft: "x8x9d4c",
    marginInlineStart: null,
    marginInlineEnd: null,
    alignSelf: "xamitd3",
    display: "x78zum5",
    alignItems: "x6s0dn4",
    $$css: !0
  }
};
function Z({
  filePath: e
}) {
  let t = zl.get(nM);
  let i = _$$W(t, NJ, e);
  return i ? jsx(Fragment, {
    children: jsx(_$$R, {
      codeFile: i,
      fullHeight: !0
    })
  }) : jsx(L, {});
}
function et({
  codeFileName: e,
  handleCtaClick: t
}) {
  return jsxs("div", {
    className: "x78zum5 x6s0dn4 xkh2ocl x1q0g3np xh8yej3 x5yr21d x1qughib xj5tbmc",
    children: [jsxs("div", {
      ...Ay.props(en.rightPanelHeaderText),
      children: [jsx("span", {
        children: e
      }), jsx(_$$B, {})]
    }), jsx("div", {
      className: "x8x9d4c xamitd3 x78zum5 x6s0dn4",
      children: jsx(ei, {
        onCtaClick: t
      })
    })]
  });
}
function ei({
  onCtaClick: e
}) {
  let [t, i] = useState(!1);
  let {
    getTriggerProps,
    manager
  } = gR({
    isOpen: t,
    onOpenChange: i
  });
  let s = jsx(_$$bL2, {
    manager,
    children: jsxs(vo, {
      children: [jsxs(Y9, {
        children: [jsx(hE, {
          children: _$$t2("figmake.design_system_imports.library_extraction_theming_progress.re_extract.title")
        }), jsx(Jn, {})]
      }), jsx(nB, {
        children: jsxs("div", {
          className: "x78zum5 xdt5ytf x1usb9k9 xw5ewwj x1m7nem5",
          children: [jsx("span", {
            ...Ay.props(en.updateStylesWindowText),
            children: _$$t2("figmake.design_system_imports.library_extraction_theming_progress.re_extract.description_top")
          }), jsx("span", {
            ...Ay.props(en.updateStylesWindowText),
            children: _$$t2("figmake.design_system_imports.library_extraction_theming_progress.re_extract.description_bottom")
          }), jsx("div", {
            className: "x14atkfc",
            children: jsx($n, {
              onClick: e,
              children: _$$t2("figmake.design_system_imports.library_extraction_theming_progress.re_extract.parse_again")
            })
          })]
        })
      })]
    })
  });
  return jsxs(Fragment, {
    children: [jsx("div", {
      ...getTriggerProps(),
      children: jsx($n, {
        variant: "secondary",
        iconPrefix: jsx(_$$f, {}),
        onClick: () => i(!0),
        children: _$$t2("figmake.design_system_imports.library_extraction_theming_progress.parse_styles")
      })
    }), createPortal(s, document.body)]
  });
}
let en = {
  rightPanelHeaderText: {
    ..._$$g.textBodyMediumStrong,
    paddingLeft: "xpymby5",
    paddingInlineStart: null,
    paddingInlineEnd: null,
    display: "x78zum5",
    alignItems: "x6s0dn4",
    gap: "x1jnr06f",
    rowGap: null,
    columnGap: null,
    height: "x5yr21d",
    $$css: !0
  },
  updateStylesWindowText: {
    ..._$$g.textBodyMedium,
    $$css: !0
  }
};
function er({
  innerLibraryEditor: e,
  headerContent: t
}) {
  return jsxs(Fragment, {
    children: [jsx("div", {
      className: "x78zum5 x1cy8zhl xkh2ocl x1rtxkqr x1kgkb76",
      children: t
    }), jsx("div", {
      className: "xyambd0",
      children: e
    })]
  });
}
function ea() {
  let e = wj(JT.PUBLISH_LIBRARY_FOR_AI);
  let [t, i] = useState(e.state !== qy.INITIAL);
  let [r, a] = useState(() => {
    let e = zl.get(nM);
    return !!_$$W(e, NJ, Ul);
  });
  useEffect(() => {
    e.state !== qy.INITIAL && i(!0);
  }, [e.state]);
  let s = () => {
    a(!1);
    Ag(JT.PUBLISH_LIBRARY_FOR_AI, Iq, null);
    i(!0);
  };
  let o = jsx(P, {
    handleCtaClick: s
  });
  let l = null;
  if (r) {
    let e = zl.get(nM);
    let t = _$$W(e, NJ, Ul);
    t ? (o = jsx(Z, {
      filePath: t.name
    }), l = jsx(et, {
      codeFileName: t.name,
      handleCtaClick: s
    })) : o = jsx(L, {});
  }
  t && (o = jsx(Y, {
    setShowCodeEditor: a
  }), l = null);
  return jsx(er, {
    innerLibraryEditor: o,
    headerContent: l
  });
}
let es = {
  1: `**Add your own guidelines here**
<!--

System Guidelines

Use this file to provide the AI with rules and guidelines you want it to follow.
This template outlines a few examples of things you can add. You can add your own sections and format it to suit your needs

TIP: More context isn't always better. It can confuse the LLM. Try and add the most important rules you need

# General guidelines

Any general rules you want the AI to follow.
For example:

* Only use absolute positioning when necessary. Opt for responsive and well structured layouts that use flexbox and grid by default
* Refactor code as you go to keep code clean
* Keep file sizes small and put helper functions and components in their own files.

--------------

# Design system guidelines
Rules for how the AI should make generations look like your company's design system

Additionally, if you select a design system to use in the prompt box, you can reference
your design system's components, tokens, variables and components.
For example:

* Use a base font-size of 14px
* Date formats should always be in the format \u{201C}Jun 10\u{201D}
* The bottom toolbar should only ever have a maximum of 4 items
* Never use the floating action button with the bottom toolbar
* Chips should always come in sets of 3 or more
* Don't use a dropdown if there are 2 or fewer options

You can also create sub sections and add more specific details
For example:


## Button
The Button component is a fundamental interactive element in our design system, designed to trigger actions or navigate
users through the application. It provides visual feedback and clear affordances to enhance user experience.

### Usage
Buttons should be used for important actions that users need to take, such as form submissions, confirming choices,
or initiating processes. They communicate interactivity and should have clear, action-oriented labels.

### Variants
* Primary Button
  * Purpose : Used for the main action in a section or page
  * Visual Style : Bold, filled with the primary brand color
  * Usage : One primary button per section to guide users toward the most important action
* Secondary Button
  * Purpose : Used for alternative or supporting actions
  * Visual Style : Outlined with the primary color, transparent background
  * Usage : Can appear alongside a primary button for less important actions
* Tertiary Button
  * Purpose : Used for the least important actions
  * Visual Style : Text-only with no border, using primary color
  * Usage : For actions that should be available but not emphasized
-->
`
};
function ed() {
  l7.user("create-new-code-file", () => {
    let e = zl.get(nM);
    _$$W(e, NJ, R6) || glU?.createNewCodeFile(R6, es["1"] || "", null, !1);
  });
  let [e, t] = useState(jsx("span", {
    ...Ay.props(ec.rightPanelHeaderText),
    children: R6
  }));
  return jsx(er, {
    innerLibraryEditor: jsx(Z, {
      filePath: R6
    }),
    headerContent: e
  });
}
let ec = {
  rightPanelHeaderText: {
    ..._$$g.textBodyMediumStrong,
    paddingLeft: "xpymby5",
    paddingInlineStart: null,
    paddingInlineEnd: null,
    display: "x78zum5",
    alignItems: "x6s0dn4",
    height: "x5yr21d",
    $$css: !0
  }
};
let eu = {
  leftPanelHeaderTitle: {
    ..._$$g.textBodyMediumStrong,
    $$css: !0
  },
  leftPanelHeaderSubtitle: {
    ..._$$g.textBodyMedium,
    $$css: !0
  },
  leftPanelTab: {
    display: "x78zum5",
    padding: "xe8ttls",
    paddingInline: null,
    paddingStart: null,
    paddingLeft: null,
    paddingEnd: null,
    paddingRight: null,
    paddingBlock: null,
    paddingTop: null,
    paddingBottom: null,
    alignItems: "x1cy8zhl",
    gap: "x167g77z",
    rowGap: null,
    columnGap: null,
    alignSelf: "xkh2ocl",
    borderRadius: "x12oqio5",
    borderStartStartRadius: null,
    borderStartEndRadius: null,
    borderEndStartRadius: null,
    borderEndEndRadius: null,
    borderTopLeftRadius: null,
    borderTopRightRadius: null,
    borderBottomLeftRadius: null,
    borderBottomRightRadius: null,
    margin: "xe6hj4x",
    marginInline: null,
    marginInlineStart: null,
    marginLeft: null,
    marginInlineEnd: null,
    marginRight: null,
    marginBlock: null,
    marginTop: null,
    marginBottom: null,
    backgroundColor: "xqz9e21",
    height: "x5yr21d",
    $$css: !0
  },
  leftPanelTabActive: {
    backgroundColor: "x1yrfp1h",
    $$css: !0
  },
  leftPanelTabTextTitle: {
    ..._$$g.textBodyMediumStrong,
    $$css: !0
  },
  leftPanelTabTextSubtitle: {
    ..._$$g.textBodyMedium,
    textAlign: "xdpxx8g",
    $$css: !0
  }
};
let $$ep0 = Ju(function (e) {
  let t = hS({
    ...e
  });
  let [i, g, A] = _$$t.useTabs({
    theming: !0,
    guidelines: !0
  }, {
    orientation: "vertical"
  });
  return jsx(bL, {
    manager: t,
    width: "lg",
    height: "fullscreen",
    children: jsx(Wk, {
      children: jsx(_$$bL, {
        style: {
          height: "100%"
        },
        children: jsxs(fI, {
          style: {
            height: "100%",
            display: "grid",
            gridTemplateColumns: "1fr 4fr"
          },
          children: [jsx(fh, {
            style: {
              height: "100%",
              borderRight: "1px solid var(--color-border)"
            },
            children: jsxs(_$$bL, {
              children: [jsxs(fI, {
                className: "x78zum5 xdt5ytf x1tamke2 x167g77z x1cy8zhl xkh2ocl x1kgkb76",
                children: [jsx(_$$e, {}), jsx("span", {
                  ...Ay.props(eu.leftPanelHeaderTitle),
                  children: _$$t2("figmake.design_system_imports.library_extraction_modal.sidebar_title")
                }), jsx("span", {
                  ...Ay.props(eu.leftPanelHeaderSubtitle),
                  children: _$$t2("figmake.design_system_imports.library_extraction_modal.sidebar_subtitle")
                })]
              }), jsx(fI, {
                children: jsxs(_$$t.TabStrip, {
                  manager: A,
                  children: [jsxs(_$$r, {
                    ...i.theming,
                    ...Ay.props(eu.leftPanelTab, "theming" === A.activeTab && eu.leftPanelTabActive),
                    children: [jsx(_$$E, {}), jsxs("div", {
                      className: "x78zum5 xdt5ytf xl56j7k x1cy8zhl x5mp9sv",
                      children: [jsx("span", {
                        ...Ay.props(eu.leftPanelTabTextTitle),
                        children: _$$t2("figmake.design_system_imports.library_extraction_modal.tabs.styles.title")
                      }), jsx("span", {
                        ...Ay.props(eu.leftPanelTabTextSubtitle),
                        children: _$$t2("figmake.design_system_imports.library_extraction_modal.tabs.styles.subtitle")
                      })]
                    })]
                  }), jsxs(_$$r, {
                    ...i.guidelines,
                    ...Ay.props(eu.leftPanelTab, "guidelines" === A.activeTab && eu.leftPanelTabActive),
                    children: [jsx(_$$s, {}), jsxs("div", {
                      className: "x78zum5 xdt5ytf xl56j7k x1cy8zhl x5mp9sv",
                      children: [jsx("span", {
                        ...Ay.props(eu.leftPanelTabTextTitle),
                        children: _$$t2("figmake.design_system_imports.library_extraction_modal.tabs.guidelines.title")
                      }), jsx("span", {
                        ...Ay.props(eu.leftPanelTabTextSubtitle),
                        children: _$$t2("figmake.design_system_imports.library_extraction_modal.tabs.guidelines.subtitle")
                      })]
                    })]
                  })]
                })
              })]
            })
          }), jsxs(fh, {
            className: "x1bhy1sc xh8yej3 xb3r6kr",
            children: [jsx(_$$t.TabPanel, {
              ...g.theming,
              height: "fill",
              children: jsx(ea, {})
            }), jsx(_$$t.TabPanel, {
              ...g.guidelines,
              height: "fill",
              children: jsx(ed, {})
            })]
          })]
        })
      })
    })
  });
}, "LibraryExtractionModal");
export const i = $$ep0;