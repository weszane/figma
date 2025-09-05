import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState, useEffect, useRef, useId, useCallback } from "react";
import { useDispatch, useSelector } from "../vendor/514228";
import { N as _$$N } from "../905/438674";
import { J as _$$J } from "../905/270045";
import { S as _$$S } from "../905/274480";
import { $n } from "../905/521428";
import { getFeatureFlags } from "../905/601108";
import { eU, fp, Xr } from "../figma_app/27355";
import p from "classnames";
import { Tf } from "../905/280919";
import { h as _$$h } from "../905/207101";
import { l as _$$l } from "../905/745972";
import { getInitialOptions } from "../figma_app/169182";
import { l as _$$l2 } from "../905/190247";
import { AF, Pt, qP, of, v_, rf } from "../figma_app/806412";
import { Av } from "../905/149328";
import { Point } from "../905/736624";
import { XHRError, XHR } from "../905/910117";
import { Y as _$$Y } from "../905/506207";
import { ks, e2 } from "../figma_app/637027";
import { l as _$$l3, U as _$$U } from "../905/30301";
import { P as _$$P } from "../905/347284";
import { B as _$$B } from "../905/714743";
import { t as _$$t, tx } from "../905/303541";
import { F as _$$F } from "../905/302958";
import { zX } from "../905/576487";
import { lW } from "../figma_app/11182";
import { Ce } from "../905/156213";
import { b as _$$b } from "../905/985254";
import { Um } from "../905/848862";
import { _6 } from "../figma_app/386952";
import { f as _$$f } from "../905/940356";
import { Bu } from "../figma_app/53721";
import { o as _$$o } from "../905/240151";
import { Ju } from "../905/102752";
import { v as _$$v } from "../905/596134";
import { l6, c$, sK } from "../905/794875";
import { Ao, uF } from "../905/748636";
import { J as _$$J2 } from "../905/639674";
import { yK, oE, $1, yl, vw, uu, y8, _Z, Pf, Tg, HI, kB, dX, GC, VL, Dq, cR, Lw, Yz, UM, lM, U3, AX } from "../905/105972";
import { A as _$$A } from "../5724/734215";
import { A as _$$A2 } from "../5724/75936";
import { A as _$$A3 } from "../1617/805095";
import { A as _$$A4 } from "../1617/230645";
import { A as _$$A5 } from "../1617/794786";
import { A as _$$A6 } from "../svg/237029";
var _ = p;
let $$J2 = eU(!1);
let Z = e => e.map(e => {
  let t = e.name.match(/((.*)\s+-\s+)?(.*)/);
  return {
    optionCategoryName: t && t[2] || "Other",
    optionSubareaName: t && t[3] || e.name,
    gid: e.gid
  };
}).reduce((e, t) => {
  let r = e.get(t.optionCategoryName);
  r || (r = [], e.set(t.optionCategoryName, r));
  r.push({
    name: t.optionSubareaName,
    gid: t.gid
  });
  return e;
}, new Map());
let Q = e => {
  let t = e.match(/app\.asana\.com\/\d\/\d+\/(\d+)/);
  if (!t || t.length < 2) throw Error(_$$t("bug_reporter.error_invalid_asana_url"));
  return t[1];
};
function ee(e) {
  return !et(e);
}
function et(e) {
  return "error" in e;
}
let er = {
  gid: "",
  name: "Pick an option"
};
let en = eU(!0);
let ei = eU("");
let ea = eU("");
let es = eU("");
let eo = eU(er);
let el = eU(er);
let ed = eU(!1);
function ec(e) {
  let [t, r] = useState([]);
  let [o, l] = useState(new Map());
  let d = useDispatch();
  useEffect(() => {
    (async () => {
      try {
        let {
          data
        } = await _$$o.getMeta();
        r(data.meta.severity);
        l(Z(data.meta.product_area));
      } catch (e) {
        d(_$$F.enqueue({
          message: `Could not fetch field metadata: ${e}`,
          error: !0
        }));
      }
    })();
  }, [d]);
  return jsx(eu, {
    ...e,
    descriptionLabel: _$$t("bug_reporter.modal.description"),
    descriptionPlaceholder: _$$t("bug_reporter.modal.description_placeholder"),
    endpoint: "/api/bug_reports",
    modalTitle: _$$t("help_widget.menu.report_issue"),
    onError: e => {
      d(_$$F.enqueue({
        message: `${e}. Couldn't submit report. Try again or use /bug in Slack.`,
        error: !0
      }));
    },
    productAreaGroups: o,
    recordingKey: "bugReporter",
    severityOptions: t,
    shareFileLabel: _$$t("bug_reporter.modal.include_filekey"),
    showTitle: !0,
    submitButtonText: _$$t("bug_reporter.modal.submit"),
    successMessage: tx("bug_reporter.urgent_bug_info", {
      notifyTheRelevantOncall: jsx(_$$N, {
        newTab: !0,
        href: "https://go/find-oncall",
        trusted: !0,
        children: tx("bug_reporter.notify_oncall")
      })
    }),
    supportsTaskUpdates: !0
  });
}
function eu({
  recordingKey: e,
  endpoint: t,
  severityOptions: r,
  productAreaGroups: s,
  supportsTaskUpdates: o = !1,
  showTitle: l = !0,
  descriptionLabel: d,
  descriptionPlaceholder: c,
  submitButtonText: p,
  modalTitle: _,
  shareFileLabel: y,
  onSubmit: b,
  onError: S,
  successMessage: v
}) {
  let x = useSelector(e => e.multiplayer.allUsers.length);
  let N = useSelector(e => e.user?.id);
  let R = _6();
  let D = useDispatch();
  let {
    windowInnerHeight
  } = _$$l();
  let G = _$$v();
  let [H, W] = fp(ei);
  let K = Xr(ea);
  let Y = Xr(es);
  let $ = Xr(eo);
  let X = Xr(el);
  let q = Xr(ed);
  let [Z, ec] = fp(en);
  let [eu, e_] = useState(!1);
  let [em, eg] = useState(!1);
  let ef = useRef("");
  let eE = useRef("");
  let ey = useRef("");
  let eb = useRef("");
  let eT = useRef("");
  let eI = useRef([]);
  let eS = useRef(null);
  let ev = useRef(0);
  let eA = Xr($$J2);
  let ex = () => {
    D(Ce());
  };
  let eN = _$$f("seen_bug_reporter_modal");
  _$$h(() => {
    eN || D(_$$b({
      seen_bug_reporter_modal: !0
    }));
    eA(!0);
  });
  let eC = () => _$$o.getGetTask({
    taskGid: ef.current
  }).then(({
    data: e
  }) => e).catch(e => {
    let t = `Couldn't fetch task details from Asana. ${e.data.message}`;
    e instanceof XHRError && e.data?.message && (t = e.data.message);
    D(_$$F.enqueue({
      message: t,
      error: !0
    }));
  });
  let ew = async e => {
    if (0 === e.length) return {
      attachments: [],
      errorMessages: []
    };
    let t = e.map(async e => {
      try {
        return {
          uuid: await eR(e.fileContent, e.type),
          name: e.name
        };
      } catch (t) {
        return {
          error: `Please add attachment ${e.name} directly in Asana instead. ${t}`
        };
      }
    });
    let r = await Promise.all(t);
    eI.current = r.filter(et).map(({
      error: e
    }) => e);
    return {
      attachments: r.filter(ee),
      errorMessages: r.filter(et).map(({
        error: e
      }) => e)
    };
  };
  let eO = async e => {
    if (!e) return {
      attachments: [],
      errorMessages: []
    };
    try {
      return {
        attachments: [{
          uuid: await eR(JSON.stringify(e), "application/json"),
          name: "profile.json"
        }],
        errorMessages: []
      };
    } catch (e) {
      return {
        attachments: [],
        errorMessages: [`Please record a profile directly in dev tools instead. ${e}`]
      };
    }
  };
  let eR = async (e, t) => {
    let r = await _$$o.getAttachmentUploadUrl({
      fileType: t
    });
    if (200 !== r.status) throw Error("Failed to get presigned upload URL from S3");
    let {
      upload_url,
      fields,
      uuid
    } = r.data.meta;
    let s = new FormData();
    for (let e in fields) s.append(e, fields[e]);
    if (s.append("content-type", t), s.append("file", e), 204 !== (await fetch(upload_url, {
      method: "post",
      body: s
    })).status) throw Error("Failed to upload attachment to S3");
    return uuid;
  };
  let eL = async (e, r, n, i, a, s, d, c) => {
    eg(!0);
    eb.current = e.substring(0, 250);
    eT.current = r;
    D(_$$F.enqueue({
      type: "bug-reporter-submitting",
      message: _$$t("bug_reporter.submitting_visual_bell"),
      timeoutType: "exact",
      timeoutOverride: 4e3,
      icon: zX.SPINNER
    }));
    D(_$$F.enqueue({
      type: "bug-reporter-submitting-long",
      message: _$$t("bug_reporter.long_submitting_visual_bell"),
      delay: 4e3,
      icon: zX.SPINNER
    }));
    let u = {
      env: getInitialOptions().cluster_name,
      user_agent: navigator.userAgent,
      view: R.view,
      user_id: N,
      org_id: getInitialOptions().org_id,
      tracking_session_id: getInitialOptions().tracking_session_id,
      release_commit: getInitialOptions().release_manifest_git_commit,
      device_info: _$$l2(),
      num_people_in_file: x,
      datadog_rum_session_id: Tf.sessionId ? `http://go/dd/rum/session/${Tf.sessionId}` : void 0
    };
    "fullscreen" === R.view ? (u.editor_type = Bu(R.editorType), a && (u.file_key = R.fileKey, u.url = window.location.href)) : u.url = window.location.href;
    let p = {
      title: l ? e : void 0,
      severity: n.gid,
      product_area: i.gid,
      description: r,
      metadata: u,
      is_performance_issue: d
    };
    let _ = [ew(s), eO(c)];
    let [m, g] = await Promise.all(_);
    m.attachments.length > 0 && (p.attachments = m.attachments);
    g.attachments.length > 0 && (p.profileUuid = g.attachments[0].uuid);
    (m.errorMessages.length || g.errorMessages.length) && (eI.current = [...m.errorMessages, ...g.errorMessages]);
    try {
      let e;
      if (!o || Z ? (e = await XHR.post(t, p), eE.current = e.data.meta.task_url, ef.current = e.data.meta.task_gid) : e = await XHR.put(`${t}/update_task`, {
        ...p,
        task_gid: Q(H)
      }), e.status >= 200 && e.status < 300) {
        D(_$$F.dequeue({
          matchType: "bug-reporter-submitting"
        }));
        D(_$$F.dequeue({
          matchType: "bug-reporter-submitting-long"
        }));
        eE.current = e.data.meta.task_url;
        ef.current = e.data.meta.task_gid;
        Z || (ey.current = e.data.meta.slack_url);
        ev.current = eS.current?.getCurrentContentSize()?.y || 0;
        e_(!0);
        q(!0);
        eg(!1);
      } else throw Error(`Request failed with code ${e.status}.`);
    } catch (t) {
      D(_$$F.dequeue({
        matchType: "bug-reporter-submitting"
      }));
      D(_$$F.dequeue({
        matchType: "bug-reporter-submitting-long"
      }));
      let e = t.message;
      t instanceof XHRError && t.data?.message && "string" == typeof t.data.message && (e = t.data.message);
      S?.(e);
      eg(!1);
    }
  };
  let eP = async e => {
    ef.current = e;
    ec(!1);
    let t = await eC();
    t && (K(l ? t.meta.title : ""), Y(t.meta.description), $(t.meta.severity ?? er), X(t.meta.product_area ?? er));
  };
  return jsx(Ao, {
    ref: eS,
    title: _,
    initialPosition: (() => {
      let e = G ? _$$l3 : _$$U;
      let t = _$$l3;
      eu && (t = windowInnerHeight - (ev.current + uF) - _$$l3);
      return new Point(e, t);
    })(),
    initialConstraints: {
      x: "right",
      y: eu ? "top" : "bottom"
    },
    onClose: ex,
    recordingKey: e,
    headerClassName: yK,
    dragHeaderOnly: !0,
    children: eu ? jsx(eh, {
      recordingKey: e,
      isNewReport: !o || Z,
      taskUrl: eE.current,
      taskGid: ef.current,
      slackUrl: ey.current,
      title: l ? eb.current : void 0,
      description: eT.current,
      submissionErrorMessages: eI.current,
      successMessage: v
    }) : jsx(ep, {
      attachFromTask: o ? eP : void 0,
      clearForm: () => {
        ec(!0);
        K("");
        Y("");
        X(er);
        $(er);
        ef.current = "";
        W("");
      },
      descriptionLabel: d,
      descriptionPlaceholder: c,
      isNewReport: !o || Z,
      isSubmitting: em,
      onClose: ex,
      onSubmit: b,
      productAreaGroups: s,
      recordingKey: e,
      selectedView: R,
      severityOptions: r,
      shareFileLabel: y,
      showTitle: l,
      submitButtonText: p,
      submitReport: eL,
      supportsTaskUpdates: o
    })
  });
}
function ep(e) {
  let t = e.recordingKey;
  let r = e.isPerformanceIssue ?? !1;
  let s = Um();
  let p = useDispatch();
  let h = Av();
  let {
    windowInnerHeight
  } = _$$l();
  let [E, T] = fp(ei);
  let [I, O] = fp(ea);
  let [R, L] = fp(es);
  let [P, k] = fp(eo);
  let [M, F] = fp(el);
  let [j, U] = fp(ed);
  let [B, K] = useState(!0);
  let [Y, X] = useState(!1);
  let [q, J] = useState(!1);
  let [Z, ee] = useState([]);
  let [et, en] = useState(void 0);
  let ec = useId();
  let eu = useId();
  let ep = windowInnerHeight - (h + uF + _$$U) - _$$l3;
  _$$h(() => {
    !0 === j && (eh(), U(!1));
  });
  let eh = () => {
    K(!0);
    ee([]);
    e.clearForm();
  };
  let em = useCallback(() => !e.isSubmitting && !!R.trim() && (!e.showTitle || !!I.trim()) && (!e.isNewReport || (!e.severityOptions || !!P.gid) && (!e.productAreaGroups || !!M.gid)), [R, e.isNewReport, e.isSubmitting, e.severityOptions, e.productAreaGroups, e.showTitle, M.gid, P.gid, I]);
  let eg = t => {
    if (t) try {
      let r = Q(t);
      e.attachFromTask?.(r);
    } catch (e) {
      p(_$$F.enqueue({
        message: `${e}`,
        error: !0
      }));
    }
  };
  let ef = AF(Pt(t, "link-input"), "change", e => {
    let t = e.target.value;
    T(t);
    "" === t && eh();
  });
  let eE = AF(Pt(t, "title-input"), "change", e => {
    O(e.target.value);
  });
  let ey = AF(Pt(t, "productAreaSearch"), "change", e => {
    eR(e.target.value);
    "" === e.target.value && F(er);
  });
  let eb = AF(Pt(t, "description-input"), "change", e => {
    let t = e.target.value;
    L(t);
    r && O(t);
  });
  let eT = qP(Pt(t, "severity-input") ?? "", "change", e => {
    k(e);
  });
  let eI = qP(Pt(t, "product-area-input") ?? "", "change", e => {
    F(e);
    eR("");
  });
  let eS = useCallback(e => {
    let t = [];
    let r = [];
    for (let n of e) if (n.size > 0x3200000) r.push(n.name);else {
      let e = URL.createObjectURL(n);
      t.push({
        fileContent: n,
        url: e,
        name: n.name,
        type: n.type
      });
    }
    if (r.length > 0) {
      let e = `Error: files could not be attached (over 50MB limit): [${r.join(", ")}].`;
      console.error(e);
      p(_$$F.enqueue({
        error: !0,
        message: e
      }));
    }
    return t;
  }, [p]);
  let ev = e => {
    if (e.files.length > 0) {
      let t = eS([...e.files]);
      ee(e => [...e, ...t]);
    }
    X(!1);
  };
  let eA = AF(Pt(t, "include-filekey-input"), "change", e => {
    K(e.currentTarget.checked);
  });
  let ex = useCallback(() => {
    em() && (e.submitReport(I, R, P, M, B, Z, r, et), e.onSubmit?.());
  }, [Z, em, R, B, et, e, M, P, I, r]);
  let eN = of(t, "submit", e => {
    e.preventDefault();
    ex();
  });
  let eC = (e, t) => {
    let r = e.target;
    "Enter" === e.key && (e.metaKey || e.ctrlKey ? ex() : ("description" !== t && e.preventDefault(), "asanaInput" === t && eg(E), "productAreaSearch" === t && J(!0)));
    "Escape" === e.key && r && r.blur();
  };
  let ew = v_(Pt(t, "asanaInput"), "keydown", e => {
    eC(e, "asanaInput");
  });
  let [eO, eR] = useState("");
  return jsxs(_$$Y, {
    className: _()(Y && oE),
    isDragTarget: () => !0,
    onTargetDragEnter: () => {
      X(!0);
    },
    onTargetDragLeave: () => {
      X(!1);
    },
    onTargetDrop: e => ev(e),
    children: [Y && jsxs("div", {
      className: $1,
      children: [jsx(_$$B, {
        svg: _$$A
      }), tx("bug_reporter.drop_attachments")]
    }), jsx(_$$P, {
      maxHeight: ep,
      hideScrollbar: Y,
      children: jsxs("form", {
        onSubmit: eN,
        onPaste: e => {
          if (e.clipboardData.files.length > 0) {
            let t = eS([...e.clipboardData.files]);
            ee(e => [...e, ...t]);
          }
        },
        className: _()(yl, Y && vw),
        children: [!e.isPerformanceIssue && e.supportsTaskUpdates && jsxs("div", {
          className: uu,
          children: [jsx(_$$J, {
            className: y8,
            children: tx("bug_reporter.asana_hint")
          }), jsx(ks, {
            className: _Z,
            placeholder: _$$t("bug_reporter.modal.asana_link_placeholder"),
            value: E,
            onChange: ef,
            onPaste: e => {
              let t = e.clipboardData.getData("text");
              try {
                Q(t);
                eg(t);
              } catch {}
            },
            onKeyDown: ew,
            maxLength: 150
          })]
        }), e.showTitle && jsxs("div", {
          children: [jsx(_$$J, {
            className: Pf,
            children: tx("bug_reporter.modal.title")
          }), jsx(ks, {
            className: _Z,
            placeholder: _$$t("bug_reporter.modal.title_placeholder"),
            autoFocus: !0,
            onKeyDown: e => eC(e, "title"),
            value: I,
            onChange: eE,
            maxLength: 150
          })]
        }), e.severityOptions && jsxs("div", {
          children: [jsx(_$$J, {
            htmlAttributes: {
              id: ec
            },
            className: Pf,
            children: tx("bug_reporter.modal.severity")
          }), jsxs(l6, {
            ariaLabelledBy: ec,
            id: "bug_reporter_select_severity",
            dispatch: p,
            property: P,
            onChange: eT,
            dropdownShown: s,
            formatter: {
              format: e => e.name,
              isEqual: (e, t) => e.gid === t.gid
            },
            children: [0 === e.severityOptions.length && jsx(c$, {
              disabled: !0,
              children: tx("bug_reporter.modal.loading")
            }, "loading"), e.severityOptions.map(e => jsx(c$, {
              value: e,
              children: e.name
            }, e.gid))]
          })]
        }), e.productAreaGroups && jsxs("div", {
          children: [jsx(_$$J, {
            htmlAttributes: {
              id: eu
            },
            className: Pf,
            children: tx("bug_reporter.modal.product_area")
          }), jsx(ks, {
            className: _Z,
            placeholder: _$$t("bug_reporter.modal.search_filter_placeholder"),
            autoFocus: !0,
            onKeyDown: e => eC(e, "productAreaSearch"),
            value: eO,
            onChange: ey,
            maxLength: 150
          }), jsx(l6, {
            ariaLabelledBy: eu,
            dataTestId: "bug_reporter_select_product_area",
            dispatch: p,
            dropdownShown: s,
            formatter: {
              format: e => e.name,
              isEqual: (e, t) => e.gid === t.gid
            },
            id: "bug_reporter_select_product_area",
            onChange: e => {
              eI(e);
            },
            property: M,
            setTriggerDropdown: J,
            triggerDropdown: q,
            children: (t => {
              if (!e.productAreaGroups) return [];
              if (0 === e.productAreaGroups.size) return jsx(c$, {
                value: null,
                disabled: !0,
                children: tx("bug_reporter.modal.loading")
              }, "loading");
              let r = [];
              e.productAreaGroups.forEach((e, i) => {
                (t ? e.filter(({
                  name: e
                }) => e.toLowerCase().includes(t.toLowerCase())) : e).length > 0 && (r.push(jsx(c$, {
                  value: null,
                  isHeader: !0,
                  disabled: !0,
                  children: i
                }, i)), e.forEach(e => {
                  (!t || e.name.toLowerCase().includes(t.toLowerCase())) && r.push(jsx(c$, {
                    value: e,
                    dataTestId: e.gid,
                    children: e.name
                  }, e.gid));
                }), r.push(jsx(sK, {}, `${i}.divider`)));
              });
              r.pop();
              return r;
            })(eO)
          })]
        }), jsxs("div", {
          children: [jsx(_$$J, {
            className: Pf,
            children: e.descriptionLabel
          }), jsx(ks, {
            className: [_Z, Tg].join(" "),
            placeholder: e.descriptionPlaceholder,
            type: "textarea",
            value: R,
            onChange: eb,
            onKeyDown: e => eC(e, "description"),
            maxLength: 1e3
          })]
        }), jsxs("div", {
          children: [jsx(_$$J, {
            className: Pf,
            children: tx("bug_reporter.modal.images_and_videos")
          }), jsx(e_, {
            attachmentFiles: Z,
            setAttachmentFiles: ee,
            validateInputFiles: eS
          })]
        }), getFeatureFlags().in_app_performance_profiling && jsx("div", {
          children: jsxs(Fragment, {
            children: [jsx(_$$J, {
              className: Pf,
              children: tx("bug_reporter.profiler.title")
            }), jsx(_$$J2, {
              onProfilingFinish: e => {
                en(e);
              }
            }), et && tx("bug_reporter.profiler.profile_attached")]
          })
        }), "fullscreen" === e.selectedView.view && jsx(_$$S, {
          checked: B,
          onChange: (e, {
            event: t
          }) => eA(t),
          label: jsx(_$$J, {
            children: jsxs("div", {
              className: HI,
              children: [e.shareFileLabel, jsxs("div", {
                className: kB,
                children: [jsx(_$$B, {
                  svg: _$$A4
                }), jsx("div", {
                  className: dX,
                  children: tx("bug_reporter.modal.include_filekey_info")
                })]
              })]
            })
          })
        }), jsxs(e2, {
          className: GC,
          children: [jsx($n, {
            variant: "secondary",
            onClick: e.onClose,
            children: tx("bug_reporter.modal.cancel")
          }), jsx($n, {
            variant: "primary",
            type: "submit",
            disabled: !em(),
            children: e.submitButtonText
          })]
        })]
      })
    })]
  });
}
function e_(e) {
  let {
    attachmentFiles,
    setAttachmentFiles,
    validateInputFiles
  } = e;
  let s = useRef(null);
  let o = useCallback(() => {
    s.current && (s.current.value = "");
  }, []);
  let l = useCallback(() => {
    let e = s.current?.files || null;
    if (null === e || 0 === e.length) return;
    let t = validateInputFiles([...e]);
    setAttachmentFiles(e => [...e, ...t]);
    o();
  }, [o, validateInputFiles, setAttachmentFiles]);
  let d = (e, t, n) => {
    e.preventDefault();
    setAttachmentFiles(e => (e.splice(t, 1), [...e]));
    URL.revokeObjectURL(n);
  };
  return jsxs("div", {
    className: VL,
    children: [attachmentFiles.length > 0 && attachmentFiles.map((e, t) => jsxs("div", {
      className: Dq,
      children: [jsxs("div", {
        children: [e.type.startsWith("image") ? jsx("img", {
          className: cR,
          alt: e.name,
          src: e.url
        }, t) : jsx("video", {
          className: cR,
          src: e.url
        }, t), jsx("div", {
          className: Lw
        })]
      }), jsx("button", {
        onClick: r => d(r, t, e.url),
        children: jsx(_$$B, {
          className: Yz,
          svg: _$$A6
        })
      })]
    }, t)), jsx("label", {
      className: UM,
      htmlFor: "file-upload",
      children: jsx(_$$B, {
        svg: _$$A3
      })
    }), jsx("input", {
      id: "file-upload",
      type: "file",
      accept: "image/png, image/jpeg, image/gif, video/mp4, video/quicktime",
      ref: s,
      onChange: l,
      multiple: !0,
      hidden: !0
    })]
  });
}
function eh(e) {
  let t = useDispatch();
  let r = rf(Pt(e.recordingKey, "asana-link"), "click", () => {});
  return jsxs("div", {
    className: yl,
    children: [jsx("div", {
      className: lM,
      children: tx("bug_reporter.success_message")
    }), jsxs("div", {
      className: U3,
      children: [jsxs("div", {
        className: AX,
        children: [jsx(_$$B, {
          svg: _$$A5
        }), jsx(_$$N, {
          newTab: !0,
          onClick: r,
          href: e.taskUrl,
          trusted: !0,
          children: tx("bug_reporter.asana_link")
        })]
      }), jsxs("div", {
        className: AX,
        children: [jsx(_$$B, {
          svg: _$$A2
        }), jsx($n, {
          variant: "link",
          onClick: () => {
            t(lW({
              stringToCopy: e.taskUrl
            }));
          },
          children: tx("bug_reporter.copy_link")
        })]
      })]
    }), e.isNewReport && jsx("div", {
      children: e.successMessage
    }), e.slackUrl && jsx("div", {
      children: jsx(_$$N.Button, {
        href: e.slackUrl,
        newTab: !0,
        children: tx("bug_reporter.open_slack_discussion")
      })
    }), e.submissionErrorMessages.length > 0 && e.submissionErrorMessages.map(e => jsx("p", {
      children: e.toString()
    }, e))]
  });
}
let $$em0 = Ju(e => jsx(ec, {
  ...e,
  recordingKey: "bugReporter"
}), "BugReporterModal");
let $$eg1 = Ju(e => jsx(eu, {
  ...e,
  descriptionLabel: _$$t("bug_reporter.modal.description_label_performance"),
  descriptionPlaceholder: _$$t("bug_reporter.modal.description_placeholder_performance"),
  endpoint: "/api/perf_reports",
  modalTitle: _$$t("help_widget.menu.report_performance_issue"),
  onSubmit: () => {
    Tf.optUserIntoDebugFlow();
  },
  recordingKey: "perfReporter",
  shareFileLabel: _$$t("bug_reporter.modal.include_filekey_performance"),
  showTitle: !1,
  submitButtonText: _$$t("bug_reporter.modal.submit_performance"),
  successMessage: tx("bug_reporter.success_perf_follow_along", {
    slackChannel: jsx(_$$N, {
      newTab: !0,
      href: "https://go/slack-performance-reports",
      trusted: !0,
      children: "#performance-reports"
    })
  }),
  supportsTaskUpdates: !1
}), "PerfReporterModal");
export const bb = $$em0;
export const cl = $$eg1;
export const jH = $$J2;