import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { hS } from "../905/437088";
import { Y9, hE, nB, wi, jk, vo } from "../figma_app/272243";
import { $n } from "../905/521428";
import { bL } from "../905/38914";
import { M, getFeatureFlags } from "../905/601108";
import { customHistory } from "../905/612521";
import { VisualBellActions } from "../905/302958";
import { registerModal } from "../905/102752";
import { section, sectionTitle, description, jsonInput, error, complementNote, currentState, flagList, flagItem, history, historyHeader, historyItem, historySubset, historyResult, culpritFlag } from "../905/912407";
let m = "figma_ff_bisector_state";
let $$g1 = "FeatureFlagBisectorModal";
let $$f0 = registerModal(function (e) {
  let t = hS(e);
  let r = useDispatch();
  let [_, g] = useState("");
  let [f, E] = useState("");
  let [y, b] = useState(null);
  useEffect(() => {
    let e = localStorage.getItem(m);
    if (e) try {
      let t = JSON.parse(e);
      Date.now() < t.expiry ? b(t) : localStorage.removeItem(m);
    } catch (e) {
      localStorage.removeItem(m);
    }
  }, []);
  let T = useCallback(e => {
    localStorage.setItem(m, JSON.stringify(e));
  }, []);
  let I = useCallback(e => {
    let {
      internal_only_debug_tools,
      internal_prototyping_debug_tool,
      ...n
    } = e;
    let i = {
      expiration: Date.now() + 144e5,
      flags: n
    };
    localStorage.setItem(M, JSON.stringify(i));
    customHistory.reload("Feature flag bisector applying new flags");
  }, []);
  let S = useCallback(() => {
    try {
      let e = JSON.parse(_);
      let t = {};
      for (let [r, n] of Object.entries(e)) {
        if ("boolean" == typeof n) {
          t[r] = n;
          continue;
        }
        if ("object" == typeof n && n && "value" in n && "boolean" == typeof n.value) t[r] = n.value; else {
          E(`Value for "${r}" must be a boolean`);
          continue;
        }
      }
      if (null === t) {
        E("Input must be a JSON object");
        return;
      }
      for (let [e, r] of Object.entries(t)) if ("boolean" != typeof r) {
        E(`Value for "${e}" must be a boolean`);
        return;
      }
      E("");
      let r = Object.keys(t);
      let n = {
        originalFlags: t,
        currentSubset: r,
        currentComplement: [],
        testingComplement: !1,
        history: [],
        phase: "bisecting",
        expiry: Date.now() + 144e5
      };
      b(n);
      T(n);
      I(t);
    } catch (e) {
      E("Invalid JSON format");
    }
  }, [_, T, I]);
  let v = useCallback(e => {
    let t;
    let n;
    if (!y) return;
    let i = y.testingComplement ? y.currentComplement : y.currentSubset;
    let a = i.reduce((e, t) => (void 0 === y.originalFlags[t] ? console.error(`Flag ${t} is undefined in the original flags`) : e[t] = y.originalFlags[t], e), {});
    let s = [...y.history];
    let o = s[s.length - 1];
    if (o && "pending" === o.result ? o.result = e ? "success" : "failure" : s.push({
      subset: [...i],
      isComplement: y.testingComplement,
      result: e ? "success" : "failure",
      testedFlags: a
    }), 1 === i.length && e) {
      let e = {
        ...y,
        history: s,
        phase: "complete",
        culpritFlag: i[0]
      };
      b(e);
      T(e);
      r(VisualBellActions.enqueue({
        message: `Culprit found: ${i[0]}`,
        type: "feature-flag-bisector-culprit-found"
      }));
      return;
    }
    if (1 === i.length && y.testingComplement && !e) {
      let e = {
        ...y,
        history: s,
        phase: "complex_interaction",
        lastWorkingSet: y.originalFlags
      };
      b(e);
      T(e);
      r(VisualBellActions.enqueue({
        message: "Complex interaction detected - multiple flags may be involved",
        type: "feature-flag-bisector-complex-interaction"
      }));
      return;
    }
    let l = !1;
    if (e) {
      let e = Math.floor(i.length / 2);
      t = i.slice(0, e);
      n = i.slice(e);
      l = !1;
    } else {
      if (y.testingComplement) {
        let e = s.slice().reverse().find(e => "success" === e.result);
        let t = {
          ...y,
          history: s,
          phase: "complex_interaction",
          lastWorkingSet: e?.testedFlags || y.originalFlags
        };
        b(t);
        T(t);
        r(VisualBellActions.enqueue({
          message: "Complex interaction detected - multiple flags may be involved",
          type: "feature-flag-bisector-complex-interaction"
        }));
        return;
      }
      t = y.currentSubset;
      n = y.currentComplement;
      l = !0;
    }
    let d = l ? n : t;
    let c = d.reduce((e, t) => (void 0 === y.originalFlags[t] ? console.error(`Flag ${t} is undefined in the original flags`) : e[t] = y.originalFlags[t], e), {});
    let u = {
      ...y,
      currentSubset: t,
      currentComplement: n,
      testingComplement: l,
      history: [...s, {
        subset: d,
        isComplement: l,
        result: "pending",
        testedFlags: c
      }]
    };
    b(u);
    T(u);
    I(c);
    r(VisualBellActions.enqueue({
      message: `Moving to next subset: ${d.length} flags, refreshing...`,
      type: "feature-flag-bisector-culprit-found"
    }));
  }, [y, T, I, r]);
  let A = useCallback(() => {
    localStorage.removeItem(m);
    localStorage.removeItem(M);
    b(null);
    g("");
    E("");
    r(VisualBellActions.enqueue({
      message: "Feature flag bisector reset successfully",
      type: "feature-flag-bisector-reset"
    }));
    customHistory.reload("Feature flag bisector applying new flags");
  }, [r]);
  let x = useCallback(() => {
    if (!y) return;
    let e = {
      ...y,
      timestamp: new Date().toISOString()
    };
    navigator.clipboard.writeText(JSON.stringify(e, null, 2)).then(() => {
      r(VisualBellActions.enqueue({
        message: "History copied to clipboard",
        type: "feature-flag-bisector-history-copied"
      }));
    }).catch(e => {
      console.error("Failed to copy history:", e);
      r(VisualBellActions.enqueue({
        message: "Failed to copy history",
        type: "feature-flag-bisector-copy-failed",
        error: !0
      }));
    });
  }, [y, r]);
  let N = () => jsxs(Fragment, {
    children: [jsx(Y9, {
      children: jsx(hE, {
        children: "Feature Flag Bisector"
      })
    }), jsx(nB, {
      children: jsxs("div", {
        className: section,
        children: [jsx("h3", {
          className: sectionTitle,
          children: "Feature Flag Configuration"
        }), jsx("p", {
          className: description,
          children: "Enter a JSON object from the Feature Flag differ tool in the Admin Statsig plugin."
        }), jsx("textarea", {
          value: _,
          onChange: e => g(e.target.value),
          placeholder: `{
  "flag_name_1": true,
  "flag_name_2": false,
  "flag_name_3": true
}`,
          rows: 10,
          className: jsonInput,
          "aria-label": "Feature Flags JSON Input"
        }), f && jsx("div", {
          className: error,
          children: f
        })]
      })
    }), jsx(wi, {
      children: jsxs(jk, {
        children: [jsx($n, {
          variant: "secondary",
          onClick: () => t.props.close({
            source: "button"
          }),
          children: "Cancel"
        }), jsx($n, {
          variant: "primary",
          onClick: S,
          disabled: !_.trim(),
          children: "Start Bisection"
        })]
      })
    })]
  });
  let C = () => {
    if (!y) return null;
    let e = y.testingComplement ? y.currentComplement : y.currentSubset;
    return jsxs(Fragment, {
      children: [jsx(Y9, {
        children: jsx(hE, {
          children: "Feature Flag Bisector - Testing"
        })
      }), jsx(nB, {
        children: jsxs("div", {
          className: section,
          children: [jsx("h3", {
            className: sectionTitle,
            children: "Is the bug present with this set of feature flags?"
          }), jsxs("p", {
            className: description,
            children: ['Test the current behavior and click "Yes" if the bug is present, or "No" if it\'s not.', y.testingComplement && jsx("span", {
              className: complementNote,
              children: "(Testing complement - the other half of the previous split)"
            })]
          }), jsxs("div", {
            className: currentState,
            children: [jsx("h4", {
              children: `Current Test Set (${e.length} flags)${y.testingComplement ? " - Complement" : ""}:`
            }), jsx("div", {
              className: flagList,
              children: e.map(e => jsx("span", {
                className: flagItem,
                children: `${e}: ${y.originalFlags[e] ? "true" : "false"}`
              }, e))
            })]
          }), y.history.length > 0 && jsxs("div", {
            className: history,
            children: [jsxs("div", {
              className: historyHeader,
              children: [jsx("h4", {
                children: "Test History:"
              }), jsx($n, {
                variant: "secondary",
                onClick: x,
                children: "Copy History"
              })]
            }), y.history.map((e, t) => jsxs("div", {
              className: historyItem,
              children: [jsx("span", {
                className: historySubset,
                children: `${e.subset.length} flags${e.isComplement ? " (complement)" : ""}`
              }), jsx("span", {
                className: `${historyResult} ${h[e.result]}`,
                children: "success" === e.result ? "Bug Present" : "failure" === e.result ? "Bug Not Present" : "Testing..."
              })]
            }, t))]
          })]
        })
      }), jsx(wi, {
        children: jsxs(jk, {
          children: [jsx($n, {
            variant: "secondary",
            onClick: A,
            children: "Reset"
          }), jsx($n, {
            variant: "destructive",
            onClick: () => v(!0),
            children: "Yes - Bug Present"
          }), jsx($n, {
            variant: "primary",
            onClick: () => v(!1),
            children: "No - Bug Not Present"
          })]
        })
      })]
    });
  };
  let w = () => y ? jsxs(Fragment, {
    children: [jsx(Y9, {
      children: jsx(hE, {
        children: "Feature Flag Bisector - Complete"
      })
    }), jsx(nB, {
      children: jsxs("div", {
        className: section,
        children: [jsx("h3", {
          className: sectionTitle,
          children: "\u{1F389} Culprit Found!"
        }), jsx("p", {
          className: description,
          children: "The bisection algorithm has identified the feature flag responsible for the bug."
        }), jsxs("div", {
          className: currentState,
          children: [jsx("h4", {
            children: "Culprit Feature Flag:"
          }), jsx("div", {
            className: flagList,
            children: jsx("span", {
              className: `${flagItem} ${culpritFlag}`,
              children: `${y.culpritFlag}: ${y.originalFlags[y.culpritFlag] ? "true" : "false"}`
            })
          })]
        }), y.history.length > 0 && jsxs("div", {
          className: history,
          children: [jsxs("div", {
            className: historyHeader,
            children: [jsx("h4", {
              children: "Test History:"
            }), jsx($n, {
              variant: "secondary",
              onClick: x,
              children: "Copy History"
            })]
          }), y.history.map((e, t) => jsxs("div", {
            className: historyItem,
            children: [jsx("span", {
              className: historySubset,
              children: `${e.subset.length} flags${e.isComplement ? " (complement)" : ""}`
            }), jsx("span", {
              className: `${historyResult} ${h[e.result]}`,
              children: "success" === e.result ? "Bug Present" : "Bug Not Present"
            })]
          }, t))]
        })]
      })
    }), jsx(wi, {
      children: jsxs(jk, {
        children: [jsx($n, {
          variant: "secondary",
          onClick: A,
          children: "Start New Bisection"
        }), jsx($n, {
          variant: "primary",
          onClick: () => t.props.close({
            source: "button"
          }),
          children: "Close"
        })]
      })
    })]
  }) : null;
  let O = () => y ? jsxs(Fragment, {
    children: [jsx(Y9, {
      children: jsx(hE, {
        children: "Feature Flag Bisector - Complex Interaction"
      })
    }), jsx(nB, {
      children: jsxs("div", {
        className: section,
        children: [jsx("h3", {
          className: sectionTitle,
          children: "\u26A0\uFE0F Complex Feature Flag Interaction Detected"
        }), jsx("p", {
          className: description,
          children: "The bug appears to be caused by a complex interaction between multiple feature flags, rather than a single flag. This means the bug only occurs when specific combinations of flags are enabled together."
        }), jsxs("div", {
          className: currentState,
          children: [jsx("h4", {
            children: "Last Known Working Set:"
          }), jsx("div", {
            className: flagList,
            children: Object.entries(y.lastWorkingSet || {}).map(([e, t]) => jsx("span", {
              className: flagItem,
              children: `${e}: ${t ? "true" : "false"}`
            }, e))
          })]
        }), y.history.length > 0 && jsxs("div", {
          className: history,
          children: [jsxs("div", {
            className: historyHeader,
            children: [jsx("h4", {
              children: "Test History:"
            }), jsx($n, {
              variant: "secondary",
              onClick: x,
              children: "Copy History"
            })]
          }), y.history.map((e, t) => jsxs("div", {
            className: historyItem,
            children: [jsx("span", {
              className: historySubset,
              children: `${e.subset.length} flags${e.isComplement ? " (complement)" : ""}`
            }), jsx("span", {
              className: `${historyResult} ${h[e.result]}`,
              children: "success" === e.result ? "Bug Present" : "Bug Not Present"
            })]
          }, t))]
        })]
      })
    }), jsx(wi, {
      children: jsxs(jk, {
        children: [jsx($n, {
          variant: "secondary",
          onClick: A,
          children: "Start New Bisection"
        }), jsx($n, {
          variant: "primary",
          onClick: () => t.props.close({
            source: "button"
          }),
          children: "Close"
        })]
      })
    })]
  }) : null;
  return getFeatureFlags().internal_prototyping_debug_tool || getFeatureFlags().internal_only_debug_tools ? jsx(bL, {
    manager: t,
    width: "lg",
    children: jsx(vo, {
      children: (() => {
        if (y && "input" !== y.phase) {
          if ("bisecting" === y.phase) return C();
          if ("complete" === y.phase) return w();
          if ("complex_interaction" === y.phase) return O();
        }
        return N();
      })()
    })
  }) : null;
}, $$g1);
export const sF = $$f0;
export const zJ = $$g1;
