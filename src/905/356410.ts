import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import r, { createContext, useState, useEffect, useContext, useMemo, useReducer } from "react";
import { useDispatch } from "react-redux";
import { throwTypeError } from "../figma_app/465776";
import { deepEqual } from "../905/382883";
import l from "classnames";
import { trackEventAnalytics } from "../905/449184";
import { ks } from "../figma_app/637027";
import { z as _$$z } from "../905/284530";
import { P as _$$P } from "../905/347284";
import { s as _$$s } from "../cssbuilder/589278";
import { getI18nString, renderI18nText } from "../905/303541";
import { Y } from "../905/830372";
import { $ } from "../905/355181";
import { E as _$$E } from "../905/984674";
import { showModalHandler } from "../905/156213";
import { FRequestStatusType } from "../figma_app/191312";
import { IT, M4 } from "../905/713695";
import { wT, UR, HX, G6, qu } from "../905/671449";
import { is } from "../905/744076";
import { R as _$$R } from "../905/240644";
import { i as _$$i } from "../905/810360";
import { lQ } from "../905/934246";
import { deepClone } from "../905/284190";
import { A as _$$A2 } from "../1617/755299";
import { A as _$$A3 } from "../1617/230645";
var d = l;
let C = createContext({
  canShowErrors: !1,
  setCanShowErrors: lQ,
  numberOfErrors: 0,
  optedOutOfSecurityForm: !1,
  setOptedOutOfSecurityForm: lQ,
  extensionType: "plugin"
});
function T({
  children: e,
  localSecurityFormResponse: t,
  existingSecurityFormResponse: i,
  optedOutOfSecurityForm: a,
  setOptedOutOfSecurityForm: s,
  extensionType: o
}) {
  let [l, d] = useState(!a && wT(t, i));
  let [c, u] = useState(0);
  useEffect(() => {
    u(UR(t, i));
  }, [t, i]);
  return jsx(C.Provider, {
    value: {
      canShowErrors: l,
      setCanShowErrors: d,
      numberOfErrors: c,
      optedOutOfSecurityForm: a,
      setOptedOutOfSecurityForm: s,
      extensionType: o
    },
    children: e
  });
}
function k() {
  return useContext(C);
}
function N(e, t) {
  switch (t.type) {
    case "UPDATE_SINGLE_SELECT_QUESTION":
      {
        let {
          optionIndex,
          questionIndex
        } = t;
        let r = e.questions[questionIndex];
        if (r?.inputType !== "single_select") return e;
        let {
          options
        } = r;
        let s = options.map((e, t) => ({
          ...e,
          isSelected: optionIndex === t && !e.isSelected
        }));
        let o = [...e.questions];
        o[questionIndex] = {
          ...r,
          options: s
        };
        return {
          ...e,
          questions: o
        };
      }
    case "UPDATE_MULTI_SELECT_QUESTION":
      {
        let {
          optionIndex,
          questionIndex
        } = t;
        let r = e.questions[questionIndex];
        if (r?.inputType !== "multi_select") return e;
        let {
          options
        } = r;
        let s = options.map((e, t) => optionIndex === t ? {
          ...e,
          isSelected: !e.isSelected
        } : e);
        let o = [...e.questions];
        o[questionIndex] = {
          ...r,
          options: s
        };
        return {
          ...e,
          questions: o
        };
      }
    case "UPDATE_TEXT_SUBQUESTION":
      {
        let {
          path,
          value
        } = t;
        let r = function (e, t, i) {
          let [n, r, a] = t;
          let s = deepClone(e);
          let o = {
            ...s[n]
          };
          if (o?.inputType === "text") return e;
          let l = o.options[r];
          if (!l.subQuestions) return e;
          let d = l.subQuestions[a];
          l.subQuestions[a] = {
            ...d,
            ...i
          };
          s[n] = o;
          return s;
        }(e.questions, path, {
          value
        });
        return {
          ...e,
          questions: r
        };
      }
    case "UPDATE_TEXT_QUESTION":
      {
        let {
          questionIndex,
          value
        } = t;
        let r = e.questions[questionIndex];
        if (r?.inputType !== "text") return e;
        let a = [...e.questions];
        a[questionIndex] = {
          ...r,
          value
        };
        return {
          ...e,
          questions: a
        };
      }
    case "DISCARD_CHANGES":
      return t.originalState;
    case "RESET_FORM":
      return {
        ...e,
        questions: HX(e.questions)
      };
    default:
      throwTypeError(t);
  }
}
function D({
  text: e
}) {
  return jsx(_$$E, {
    "data-testid": "extension-security-form-error",
    color: "danger",
    children: e
  });
}
function L(e) {
  let {
    canShowErrors
  } = k();
  return canShowErrors && G6(e);
}
export function $$F1(e) {
  let t = e.match(/\[([^\]]+)\]\(([^)]+)\)/);
  if (!t || !t.index) return e;
  let [i, r, a] = t;
  return jsxs("span", {
    "data-testid": "parsed-text-content",
    children: [e.slice(0, t.index), jsx("a", {
      href: a,
      target: "_blank",
      className: _$$s.colorTextBrand.cursorPointer.$,
      children: r
    }), e.slice(t.index + i.length)]
  });
}
function M(e) {
  let {
    onChange,
    question
  } = e;
  let {
    prompt,
    value,
    placeholder
  } = i;
  let o = L(question);
  return jsxs("div", {
    className: _$$s.flex.flexColumn.gap8.$,
    children: [prompt && jsx("div", {
      children: $$F1(prompt)
    }), jsx(ks, {
      className: _$$s.wFull.$,
      value: value ?? "",
      onChange,
      placeholder
    }), o && jsx(D, {
      text: getI18nString("community.publishing.data_security.incomplete_text")
    })]
  });
}
function j(e) {
  let {
    question,
    dispatch,
    path
  } = e;
  let {
    prompt,
    options
  } = getI18nString;
  let o = L(question);
  return jsxs("div", {
    className: _$$s.flex.flexColumn.gap16.$,
    children: [jsx(_$$E, {
      fontWeight: "semi-bold",
      children: prompt
    }), jsx(Fragment, {
      children: options.map((e, t) => {
        let a = `path-${path.join("-")}-option-input-${t}`;
        return jsxs("div", {
          className: _$$s.flex.flexColumn.$,
          children: [jsxs("div", {
            className: _$$s.flex.gap8.$,
            children: [jsx("input", {
              type: "radio",
              id: a,
              checked: e.isSelected ?? !1,
              onChange: () => {
                dispatch({
                  type: "UPDATE_SINGLE_SELECT_QUESTION",
                  questionIndex: path[0],
                  optionIndex: t
                });
              },
              className: _$$s.cursorPointer.$
            }), jsx("label", {
              htmlFor: a,
              className: _$$s.cursorPointer.$,
              children: e.label
            })]
          }), e.subQuestions && e.isSelected && jsx("div", {
            className: _$$s.ml20.flex.flexColumn.gap8.pt8.$,
            children: e.subQuestions.map((e, a) => jsx(B, {
              question: e,
              dispatch,
              path: path.concat(t, a)
            }, `sub-question-${a}`))
          })]
        }, `option-${t}`);
      })
    }), o && jsx(D, {
      text: getI18nString("community.publishing.data_security.incomplete_single_select")
    })]
  });
}
function U(e) {
  let {
    dispatch,
    path,
    question
  } = e;
  let {
    prompt,
    options
  } = r;
  let o = L(question);
  return jsxs("div", {
    className: _$$s.flex.flexColumn.gap16.$,
    children: [jsx(_$$E, {
      fontWeight: "semi-bold",
      children: prompt
    }), jsx(Fragment, {
      children: options.map((e, r) => {
        let a = `path-${path.join("-")}-option-input-${r}`;
        return jsxs("div", {
          className: _$$s.flex.flexColumn.$,
          children: [jsxs("div", {
            className: _$$s.flex.gap8.$,
            children: [jsx("input", {
              type: "checkbox",
              checked: e.isSelected ?? !1,
              onChange: () => {
                dispatch({
                  type: "UPDATE_MULTI_SELECT_QUESTION",
                  questionIndex: path[0],
                  optionIndex: r
                });
              },
              id: a,
              className: _$$s.cursorPointer.$
            }), jsx("label", {
              htmlFor: a,
              className: _$$s.cursorPointer.$,
              children: e.label
            })]
          }), e.subQuestions && e.isSelected && jsx("div", {
            className: _$$s.ml20.flex.flexColumn.gap8.pt8.$,
            children: e.subQuestions.map((e, a) => jsx(B, {
              question: e,
              dispatch,
              path: path.concat(r, a)
            }, `sub-question-${a}`))
          })]
        }, `option-${r}`);
      })
    }), o && jsx(D, {
      text: getI18nString("community.publishing.data_security.incomplete_multi_select")
    })]
  });
}
function B(e) {
  let {
    question,
    dispatch,
    path
  } = e;
  switch (question.inputType) {
    case "single_select":
      return jsx(j, {
        question,
        dispatch,
        path
      });
    case "multi_select":
      return jsx(U, {
        question,
        dispatch,
        path
      });
    case "text":
      return jsx(M, {
        question,
        onChange: e => {
          1 === path.length ? dispatch({
            type: "UPDATE_TEXT_QUESTION",
            questionIndex: path[0],
            value: e.currentTarget.value
          }) : 3 === path.length && dispatch({
            type: "UPDATE_TEXT_SUBQUESTION",
            path: [path[0], path[1], path[2]],
            value: e.currentTarget.value
          });
        },
        path
      });
    default:
      return null;
  }
}
function V(e) {
  let {
    extensionType,
    securityForm,
    dispatch
  } = e;
  let a = "plugin" === extensionType ? renderI18nText("community.publishing.security_form.plugin_description") : renderI18nText("community.publishing.security_form.widget_description");
  let s = "plugin" === extensionType ? renderI18nText("community.publishing.security_form.plugin_sharing_description") : renderI18nText("community.publishing.security_form.widget_sharing_description");
  return jsxs("div", {
    className: _$$s.p16.flex.flexColumn.$,
    "data-testid": "extension-security-form",
    children: [jsx("div", {
      className: _$$s.pb16.$,
      children: jsx(_$$E, {
        fontSize: 14,
        fontWeight: "medium",
        children: renderI18nText("community.publishing.security_form.header")
      })
    }), jsx("div", {
      className: _$$s.pb16.$,
      children: a
    }), jsxs("div", {
      className: _$$s.pb16.$,
      children: [s, jsx("a", {
        href: "plugin" === extensionType ? "https://help.figma.com/hc/articles/360042293394" : "https://help.figma.com/hc/articles/4410337103639",
        target: "_blank",
        className: _$$s.colorTextBrand.cursorPointer.$,
        children: renderI18nText("community.publishing.security_form.learn_more")
      })]
    }), jsx("div", {
      className: _$$s.flex.flexColumn.gap32.$,
      children: securityForm.questions.map((e, t) => jsx(B, {
        question: e,
        dispatch,
        path: [t]
      }, `question-${t}`))
    })]
  });
}
function G({
  onDiscard: e,
  onDone: t,
  securityFormFromDB: i,
  localSecurityFormResponse: s,
  onOptOut: l,
  currentFormStatus: u,
  extensionId: p
}) {
  let m = useMemo(() => !deepEqual(s, i), [s, i]);
  let {
    canShowErrors,
    numberOfErrors,
    optedOutOfSecurityForm,
    extensionType
  } = k();
  let x = qu(i);
  let w = useDispatch();
  return jsxs("div", {
    className: d()(_$$s.flex.gap8.p16.justifyBetween.alignCenter.absolute.bottom0.left0.right0.bSolid.bt1.colorBorder.colorBg.$, "extension_security_form--bottomBarUI3--cXlx-"),
    children: [!x && jsx("button", {
      className: _$$s.bgTransparent.noWrap.$$if(optedOutOfSecurityForm, _$$s.colorTextSecondary, _$$s.colorTextBrand.cursorPointer).$,
      onClick: () => {
        w(showModalHandler({
          type: _$$i,
          data: {
            onConfirm: l,
            status: u,
            extensionType
          },
          showModalsBeneath: !0
        }));
        trackEventAnalytics("Data Security Plugin Form", {
          action: "Remove security details",
          extensionType,
          extensionId: p
        });
      },
      disabled: optedOutOfSecurityForm,
      children: renderI18nText("community.publishing.security_form.opt_out_button")
    }), jsxs(Y, {
      width: "fill-parent",
      horizontalAlignItems: "end",
      children: [jsx($, {
        variant: "secondary",
        onClick: () => {
          e();
          trackEventAnalytics("Data Security Plugin Form", {
            action: "Discard changes",
            extensionType,
            extensionId: p
          });
        },
        disabled: !m,
        children: renderI18nText("community.publishing.security_form.discard_changes")
      }), jsx($, {
        variant: "primary",
        onClick: t,
        disabled: canShowErrors && numberOfErrors > 0,
        children: renderI18nText("general.done")
      })]
    })]
  });
}
function z({
  currentFormStatus: e
}) {
  let t;
  let i;
  let r;
  if (!e) return null;
  switch (e) {
    case FRequestStatusType.APPROVED:
      t = jsxs(Fragment, {
        children: [jsx("div", {
          children: jsx(_$$E, {
            fontWeight: "semi-bold",
            children: renderI18nText("community.publishing.security_banner.approved.title")
          })
        }), jsx("div", {
          children: jsx(_$$E, {
            children: renderI18nText("community.publishing.security_banner.approved.description")
          })
        })]
      });
      i = _$$A2;
      r = "success";
      break;
    case FRequestStatusType.PENDING:
      t = jsxs(Fragment, {
        children: [jsx("div", {
          children: jsx(_$$E, {
            fontWeight: "semi-bold",
            children: renderI18nText("community.publishing.security_banner.pending.title")
          })
        }), jsx("div", {
          children: jsx(_$$E, {
            children: renderI18nText("community.publishing.security_banner.pending.description")
          })
        })]
      });
      i = _$$A3;
      r = "brand";
      break;
    case FRequestStatusType.REJECTED:
      t = jsxs(Fragment, {
        children: [jsx("div", {
          children: jsx(_$$E, {
            fontWeight: "semi-bold",
            children: renderI18nText("community.publishing.security_banner.rejected.title")
          })
        }), jsx("div", {
          children: jsx(_$$E, {
            children: renderI18nText("community.publishing.security_banner.rejected.description")
          })
        }), jsx("div", {}), jsx("div", {
          children: jsx(_$$E, {
            children: renderI18nText("community.publishing.security_banner.rejected.description.check_email")
          })
        })]
      });
      i = _$$A3;
      r = "brand";
      break;
    default:
      throwTypeError(e);
  }
  return jsx(_$$z, {
    iconSrc: i,
    variant: r,
    orientation: "vertical",
    children: t
  });
}
function H({
  localSecurityFormResponse: e,
  securityFormFromDB: t,
  setSecurityFormResponse: i,
  extensionType: a,
  onDone: s,
  currentFormStatus: o,
  existingSecurityFormResponse: l,
  extensionId: d
}) {
  let c = {
    questions: t.questions,
    version: t.version
  };
  let [u, p] = useReducer(N, e ?? c);
  let {
    setCanShowErrors,
    setOptedOutOfSecurityForm,
    optedOutOfSecurityForm
  } = k();
  useEffect(() => {
    i(u);
    qu(u) || setOptedOutOfSecurityForm(!1);
  }, [i, u, setOptedOutOfSecurityForm]);
  return jsxs(Fragment, {
    children: [jsxs(_$$P, {
      className: "extension_security_form--scrollContainer--CkLIi publish_modal--scrollContainer--w0uYJ",
      maxHeight: 800,
      children: [jsx(z, {
        currentFormStatus: o
      }), jsx(V, {
        securityForm: u,
        dispatch: p,
        extensionType: a
      })]
    }), jsx(G, {
      onOptOut: () => {
        p({
          type: "RESET_FORM"
        });
        setOptedOutOfSecurityForm(!0);
      },
      onDiscard: () => {
        p({
          type: "DISCARD_CHANGES",
          originalState: c
        });
        setCanShowErrors(!1);
      },
      onDone: () => {
        if (wT(e, l) && !optedOutOfSecurityForm) {
          setCanShowErrors(!0);
          return;
        }
        s();
      },
      securityFormFromDB: t,
      localSecurityFormResponse: e,
      currentFormStatus: o,
      extensionId: d
    })]
  });
}
export function $$W0(e) {
  let {
    version,
    setSecurityFormResponse,
    extensionType,
    localSecurityFormResponse,
    existingSecurityFormResponse,
    onDone,
    optedOutOfSecurityForm,
    setOptedOutOfSecurityForm,
    extensionId
  } = e;
  let [u] = IT(K(version), {
    enabled: !existingSecurityFormResponse
  });
  let p = (existingSecurityFormResponse ? {
    version: String(existingSecurityFormResponse.formVersion),
    questions: existingSecurityFormResponse.responses
  } : null) ?? ("loaded" === u.status ? u.data : null);
  return p ? jsx(T, {
    localSecurityFormResponse,
    existingSecurityFormResponse,
    optedOutOfSecurityForm,
    setOptedOutOfSecurityForm,
    extensionType,
    children: jsx(H, {
      localSecurityFormResponse,
      securityFormFromDB: p,
      setSecurityFormResponse,
      extensionType,
      onDone,
      currentFormStatus: existingSecurityFormResponse?.status ?? null,
      existingSecurityFormResponse,
      extensionId
    })
  }) : jsx("div", {
    className: _$$s.p8.$,
    children: jsx(_$$R, {})
  });
}
let K = M4.Query({
  fetch: async e => await is.getBlankSecurityForm(e)
});
export const A = $$W0;
export const g = $$F1;