import p from 'classnames';
import { useCallback, useEffect, useId, useRef, useState } from 'react';
import { Fragment, jsx, jsxs } from 'react/jsx-runtime';
import { l as _$$l3, U as _$$U } from '../905/30301';
import { registerModal } from '../905/102752';
import { $1, _Z, AX, cR, Dq, dX, GC, HI, kB, lM, Lw, oE, Pf, Tg, U3, UM, uu, VL, vw, y8, yK, yl, Yz } from '../905/105972';
import { getFileTypePx } from '../905/149328';
import { hideModal } from '../905/156213';
import { getGpuDeviceInfo } from '../905/190247';
import { useSingleEffect } from '../905/791079';
import { o as _$$o } from '../905/240151';
import { Label } from '../905/270045';
import { Checkbox } from '../905/274480';
import { Tf } from '../905/280919';
import { VisualBellActions } from '../905/302958';
import { getI18nString, renderI18nText } from '../905/303541';
import { P as _$$P } from '../905/347284';
import { Link } from '../905/438674';
import { Y as _$$Y } from '../905/506207';
import { Button } from '../905/521428';
import { VisualBellIcon } from '../905/576487';
import { v as _$$v } from '../905/596134';
import { getFeatureFlags } from '../905/601108';
import { J as _$$J2 } from '../905/639674';
import { SvgComponent } from '../905/714743';
import { Point } from '../905/736624';
import { l as _$$l } from '../905/745972';
import { DraggableModalManager, HEADER_HEIGHT } from '../905/748636';
import { c$, l6, sK } from '../905/794875';
import { useDropdownState } from '../905/848862';
import { sendWithRetry, XHRError } from '../905/910117';
import { selectUserFlag } from '../905/940356';
import { postUserFlag } from '../905/985254';
import { A as _$$A4 } from '../1617/230645';
import { A as _$$A5 } from '../1617/794786';
import { A as _$$A3 } from '../1617/805095';
import { A as _$$A2 } from '../5724/75936';
import { A as _$$A } from '../5724/734215';
import { lW } from '../figma_app/11182';
import { atom, useAtomValueAndSetter, Xr } from '../figma_app/27355';
import { mapEditorTypeToStringWithObfuscated } from '../figma_app/53721';
import { getInitialOptions } from '../figma_app/169182';
import { getSelectedView } from '../figma_app/386952';
import { ButtonBaseReversedContainer, BigTextInputForwardRef } from '../figma_app/637027';
import { generateRecordingKey, useHandleChangeEvent, useHandleFocusEvent, useHandleKeyboardEvent, useHandleMouseEvent, useSetupPlayback } from '../figma_app/878298';
import { A as _$$A6 } from '../svg/237029';
import { useDispatch, useSelector } from 'react-redux';
let _ = p;
let $$J2 = atom(!1);
let Z = e => e.map(e => {
  let t = e.name.match(/((.*)\s+-\s+)?(.*)/);
  return {
    optionCategoryName: t && t[2] || 'Other',
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
  if (!t || t.length < 2) throw new Error(getI18nString('bug_reporter.error_invalid_asana_url'));
  return t[1];
};
function ee(e) {
  return !et(e);
}
function et(e) {
  return 'error' in e;
}
let er = {
  gid: '',
  name: 'Pick an option'
};
let en = atom(!0);
let ei = atom('');
let ea = atom('');
let es = atom('');
let eo = atom(er);
let el = atom(er);
let ed = atom(!1);
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
        d(VisualBellActions.enqueue({
          message: `Could not fetch field metadata: ${e}`,
          error: !0
        }));
      }
    })();
  }, [d]);
  return jsx(eu, {
    ...e,
    descriptionLabel: getI18nString('bug_reporter.modal.description'),
    descriptionPlaceholder: getI18nString('bug_reporter.modal.description_placeholder'),
    endpoint: '/api/bug_reports',
    modalTitle: getI18nString('help_widget.menu.report_issue'),
    onError: e => {
      d(VisualBellActions.enqueue({
        message: `${e}. Couldn't submit report. Try again or use /bug in Slack.`,
        error: !0
      }));
    },
    productAreaGroups: o,
    recordingKey: 'bugReporter',
    severityOptions: t,
    shareFileLabel: getI18nString('bug_reporter.modal.include_filekey'),
    showTitle: !0,
    submitButtonText: getI18nString('bug_reporter.modal.submit'),
    successMessage: renderI18nText('bug_reporter.urgent_bug_info', {
      notifyTheRelevantOncall: jsx(Link, {
        newTab: !0,
        href: 'https://go/find-oncall',
        trusted: !0,
        children: renderI18nText('bug_reporter.notify_oncall')
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
  let R = getSelectedView();
  let D = useDispatch();
  let {
    windowInnerHeight
  } = _$$l();
  let G = _$$v();
  let [H, W] = useAtomValueAndSetter(ei);
  let K = Xr(ea);
  let Y = Xr(es);
  let $ = Xr(eo);
  let X = Xr(el);
  let q = Xr(ed);
  let [Z, ec] = useAtomValueAndSetter(en);
  let [eu, e_] = useState(!1);
  let [em, eg] = useState(!1);
  let ef = useRef('');
  let eE = useRef('');
  let ey = useRef('');
  let eb = useRef('');
  let eT = useRef('');
  let eI = useRef([]);
  let eS = useRef(null);
  let ev = useRef(0);
  let eA = Xr($$J2);
  let ex = () => {
    D(hideModal());
  };
  let eN = selectUserFlag('seen_bug_reporter_modal');
  useSingleEffect(() => {
    eN || D(postUserFlag({
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
    D(VisualBellActions.enqueue({
      message: t,
      error: !0
    }));
  });
  let ew = async e => {
    if (e.length === 0) {
      return {
        attachments: [],
        errorMessages: []
      };
    }
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
    if (!e) {
      return {
        attachments: [],
        errorMessages: []
      };
    }
    try {
      return {
        attachments: [{
          uuid: await eR(JSON.stringify(e), 'application/json'),
          name: 'profile.json'
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
    if (r.status !== 200) throw new Error('Failed to get presigned upload URL from S3');
    let {
      upload_url,
      fields,
      uuid
    } = r.data.meta;
    let s = new FormData();
    for (let e in fields) s.append(e, fields[e]);
    if (s.append('content-type', t), s.append('file', e), (await fetch(upload_url, {
      method: 'post',
      body: s
    })).status !== 204) {
      throw new Error('Failed to upload attachment to S3');
    }
    return uuid;
  };
  let eL = async (e, r, n, i, a, s, d, c) => {
    eg(!0);
    eb.current = e.substring(0, 250);
    eT.current = r;
    D(VisualBellActions.enqueue({
      type: 'bug-reporter-submitting',
      message: getI18nString('bug_reporter.submitting_visual_bell'),
      timeoutType: 'exact',
      timeoutOverride: 4e3,
      icon: VisualBellIcon.SPINNER
    }));
    D(VisualBellActions.enqueue({
      type: 'bug-reporter-submitting-long',
      message: getI18nString('bug_reporter.long_submitting_visual_bell'),
      delay: 4e3,
      icon: VisualBellIcon.SPINNER
    }));
    let u = {
      env: getInitialOptions().cluster_name,
      user_agent: navigator.userAgent,
      view: R.view,
      user_id: N,
      org_id: getInitialOptions().org_id,
      tracking_session_id: getInitialOptions().tracking_session_id,
      release_commit: getInitialOptions().release_manifest_git_commit,
      device_info: getGpuDeviceInfo(),
      num_people_in_file: x,
      datadog_rum_session_id: Tf.sessionId ? `http://go/dd/rum/session/${Tf.sessionId}` : void 0
    };
    R.view === 'fullscreen' ? (u.editor_type = mapEditorTypeToStringWithObfuscated(R.editorType), a && (u.file_key = R.fileKey, u.url = window.location.href)) : u.url = window.location.href;
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
      if (!o || Z ? (e = await sendWithRetry.post(t, p), eE.current = e.data.meta.task_url, ef.current = e.data.meta.task_gid) : e = await sendWithRetry.put(`${t}/update_task`, {
        ...p,
        task_gid: Q(H)
      }), e.status >= 200 && e.status < 300) {
        D(VisualBellActions.dequeue({
          matchType: 'bug-reporter-submitting'
        }));
        D(VisualBellActions.dequeue({
          matchType: 'bug-reporter-submitting-long'
        }));
        eE.current = e.data.meta.task_url;
        ef.current = e.data.meta.task_gid;
        Z || (ey.current = e.data.meta.slack_url);
        ev.current = eS.current?.getCurrentContentSize()?.y || 0;
        e_(!0);
        q(!0);
        eg(!1);
      } else {
        throw new Error(`Request failed with code ${e.status}.`);
      }
    } catch (t) {
      D(VisualBellActions.dequeue({
        matchType: 'bug-reporter-submitting'
      }));
      D(VisualBellActions.dequeue({
        matchType: 'bug-reporter-submitting-long'
      }));
      let e = t.message;
      t instanceof XHRError && t.data?.message && typeof t.data.message == 'string' && (e = t.data.message);
      S?.(e);
      eg(!1);
    }
  };
  let eP = async e => {
    ef.current = e;
    ec(!1);
    let t = await eC();
    t && (K(l ? t.meta.title : ''), Y(t.meta.description), $(t.meta.severity ?? er), X(t.meta.product_area ?? er));
  };
  return jsx(DraggableModalManager, {
    ref: eS,
    title: _,
    initialPosition: (() => {
      let e = G ? _$$l3 : _$$U;
      let t = _$$l3;
      eu && (t = windowInnerHeight - (ev.current + HEADER_HEIGHT) - _$$l3);
      return new Point(e, t);
    })(),
    initialConstraints: {
      x: 'right',
      y: eu ? 'top' : 'bottom'
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
        K('');
        Y('');
        X(er);
        $(er);
        ef.current = '';
        W('');
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
  let s = useDropdownState();
  let p = useDispatch();
  let h = getFileTypePx();
  let {
    windowInnerHeight
  } = _$$l();
  let [E, T] = useAtomValueAndSetter(ei);
  let [I, O] = useAtomValueAndSetter(ea);
  let [R, L] = useAtomValueAndSetter(es);
  let [P, k] = useAtomValueAndSetter(eo);
  let [M, F] = useAtomValueAndSetter(el);
  let [j, U] = useAtomValueAndSetter(ed);
  let [B, K] = useState(!0);
  let [Y, X] = useState(!1);
  let [q, J] = useState(!1);
  let [Z, ee] = useState([]);
  let [et, en] = useState(void 0);
  let ec = useId();
  let eu = useId();
  let ep = windowInnerHeight - (h + HEADER_HEIGHT + _$$U) - _$$l3;
  useSingleEffect(() => {
    !0 === j && (eh(), U(!1));
  });
  let eh = () => {
    K(!0);
    ee([]);
    e.clearForm();
  };
  let em = useCallback(() => !e.isSubmitting && !!R.trim() && (!e.showTitle || !!I.trim()) && (!e.isNewReport || (!e.severityOptions || !!P.gid) && (!e.productAreaGroups || !!M.gid)), [R, e.isNewReport, e.isSubmitting, e.severityOptions, e.productAreaGroups, e.showTitle, M.gid, P.gid, I]);
  let eg = t => {
    if (t) {
      try {
        let r = Q(t);
        e.attachFromTask?.(r);
      } catch (e) {
        p(VisualBellActions.enqueue({
          message: `${e}`,
          error: !0
        }));
      }
    }
  };
  let ef = useHandleChangeEvent(generateRecordingKey(t, 'link-input'), 'change', e => {
    let t = e.target.value;
    T(t);
    t === '' && eh();
  });
  let eE = useHandleChangeEvent(generateRecordingKey(t, 'title-input'), 'change', e => {
    O(e.target.value);
  });
  let ey = useHandleChangeEvent(generateRecordingKey(t, 'productAreaSearch'), 'change', e => {
    eR(e.target.value);
    e.target.value === '' && F(er);
  });
  let eb = useHandleChangeEvent(generateRecordingKey(t, 'description-input'), 'change', e => {
    let t = e.target.value;
    L(t);
    r && O(t);
  });
  let eT = useSetupPlayback(generateRecordingKey(t, 'severity-input') ?? '', 'change', e => {
    k(e);
  });
  let eI = useSetupPlayback(generateRecordingKey(t, 'product-area-input') ?? '', 'change', e => {
    F(e);
    eR('');
  });
  let eS = useCallback(e => {
    let t = [];
    let r = [];
    for (let n of e) {
      if (n.size > 0x3200000) {
        r.push(n.name);
      } else {
        let e = URL.createObjectURL(n);
        t.push({
          fileContent: n,
          url: e,
          name: n.name,
          type: n.type
        });
      }
    }
    if (r.length > 0) {
      let e = `Error: files could not be attached (over 50MB limit): [${r.join(', ')}].`;
      console.error(e);
      p(VisualBellActions.enqueue({
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
  let eA = useHandleChangeEvent(generateRecordingKey(t, 'include-filekey-input'), 'change', e => {
    K(e.currentTarget.checked);
  });
  let ex = useCallback(() => {
    em() && (e.submitReport(I, R, P, M, B, Z, r, et), e.onSubmit?.());
  }, [Z, em, R, B, et, e, M, P, I, r]);
  let eN = useHandleFocusEvent(t, 'submit', e => {
    e.preventDefault();
    ex();
  });
  let eC = (e, t) => {
    let r = e.target;
    e.key === 'Enter' && (e.metaKey || e.ctrlKey ? ex() : (t !== 'description' && e.preventDefault(), t === 'asanaInput' && eg(E), t === 'productAreaSearch' && J(!0)));
    e.key === 'Escape' && r && r.blur();
  };
  let ew = useHandleKeyboardEvent(generateRecordingKey(t, 'asanaInput'), 'keydown', e => {
    eC(e, 'asanaInput');
  });
  let [eO, eR] = useState('');
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
    children: [Y && jsxs('div', {
      className: $1,
      children: [jsx(SvgComponent, {
        svg: _$$A
      }), renderI18nText('bug_reporter.drop_attachments')]
    }), jsx(_$$P, {
      maxHeight: ep,
      hideScrollbar: Y,
      children: jsxs('form', {
        onSubmit: eN,
        onPaste: e => {
          if (e.clipboardData.files.length > 0) {
            let t = eS([...e.clipboardData.files]);
            ee(e => [...e, ...t]);
          }
        },
        className: _()(yl, Y && vw),
        children: [!e.isPerformanceIssue && e.supportsTaskUpdates && jsxs('div', {
          className: uu,
          children: [jsx(Label, {
            className: y8,
            children: renderI18nText('bug_reporter.asana_hint')
          }), jsx(BigTextInputForwardRef, {
            className: _Z,
            placeholder: getI18nString('bug_reporter.modal.asana_link_placeholder'),
            value: E,
            onChange: ef,
            onPaste: e => {
              let t = e.clipboardData.getData('text');
              try {
                Q(t);
                eg(t);
              } catch {}
            },
            onKeyDown: ew,
            maxLength: 150
          })]
        }), e.showTitle && jsxs('div', {
          children: [jsx(Label, {
            className: Pf,
            children: renderI18nText('bug_reporter.modal.title')
          }), jsx(BigTextInputForwardRef, {
            className: _Z,
            placeholder: getI18nString('bug_reporter.modal.title_placeholder'),
            autoFocus: !0,
            onKeyDown: e => eC(e, 'title'),
            value: I,
            onChange: eE,
            maxLength: 150
          })]
        }), e.severityOptions && jsxs('div', {
          children: [jsx(Label, {
            htmlAttributes: {
              id: ec
            },
            className: Pf,
            children: renderI18nText('bug_reporter.modal.severity')
          }), jsxs(l6, {
            ariaLabelledBy: ec,
            id: 'bug_reporter_select_severity',
            dispatch: p,
            property: P,
            onChange: eT,
            dropdownShown: s,
            formatter: {
              format: e => e.name,
              isEqual: (e, t) => e.gid === t.gid
            },
            children: [e.severityOptions.length === 0 && jsx(c$, {
              disabled: !0,
              children: renderI18nText('bug_reporter.modal.loading')
            }, 'loading'), e.severityOptions.map(e => jsx(c$, {
              value: e,
              children: e.name
            }, e.gid))]
          })]
        }), e.productAreaGroups && jsxs('div', {
          children: [jsx(Label, {
            htmlAttributes: {
              id: eu
            },
            className: Pf,
            children: renderI18nText('bug_reporter.modal.product_area')
          }), jsx(BigTextInputForwardRef, {
            className: _Z,
            placeholder: getI18nString('bug_reporter.modal.search_filter_placeholder'),
            autoFocus: !0,
            onKeyDown: e => eC(e, 'productAreaSearch'),
            value: eO,
            onChange: ey,
            maxLength: 150
          }), jsx(l6, {
            ariaLabelledBy: eu,
            dataTestId: 'bug_reporter_select_product_area',
            dispatch: p,
            dropdownShown: s,
            formatter: {
              format: e => e.name,
              isEqual: (e, t) => e.gid === t.gid
            },
            id: 'bug_reporter_select_product_area',
            onChange: e => {
              eI(e);
            },
            property: M,
            setTriggerDropdown: J,
            triggerDropdown: q,
            children: (t => {
              if (!e.productAreaGroups) return [];
              if (e.productAreaGroups.size === 0) {
                return jsx(c$, {
                  value: null,
                  disabled: !0,
                  children: renderI18nText('bug_reporter.modal.loading')
                }, 'loading');
              }
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
        }), jsxs('div', {
          children: [jsx(Label, {
            className: Pf,
            children: e.descriptionLabel
          }), jsx(BigTextInputForwardRef, {
            className: [_Z, Tg].join(' '),
            placeholder: e.descriptionPlaceholder,
            type: 'textarea',
            value: R,
            onChange: eb,
            onKeyDown: e => eC(e, 'description'),
            maxLength: 1e3
          })]
        }), jsxs('div', {
          children: [jsx(Label, {
            className: Pf,
            children: renderI18nText('bug_reporter.modal.images_and_videos')
          }), jsx(e_, {
            attachmentFiles: Z,
            setAttachmentFiles: ee,
            validateInputFiles: eS
          })]
        }), getFeatureFlags().in_app_performance_profiling && jsx('div', {
          children: jsxs(Fragment, {
            children: [jsx(Label, {
              className: Pf,
              children: renderI18nText('bug_reporter.profiler.title')
            }), jsx(_$$J2, {
              onProfilingFinish: e => {
                en(e);
              }
            }), et && renderI18nText('bug_reporter.profiler.profile_attached')]
          })
        }), e.selectedView.view === 'fullscreen' && jsx(Checkbox, {
          checked: B,
          onChange: (e, {
            event: t
          }) => eA(t),
          label: jsx(Label, {
            children: jsxs('div', {
              className: HI,
              children: [e.shareFileLabel, jsxs('div', {
                className: kB,
                children: [jsx(SvgComponent, {
                  svg: _$$A4
                }), jsx('div', {
                  className: dX,
                  children: renderI18nText('bug_reporter.modal.include_filekey_info')
                })]
              })]
            })
          })
        }), jsxs(ButtonBaseReversedContainer, {
          className: GC,
          children: [jsx(Button, {
            variant: 'secondary',
            onClick: e.onClose,
            children: renderI18nText('bug_reporter.modal.cancel')
          }), jsx(Button, {
            variant: 'primary',
            type: 'submit',
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
    s.current && (s.current.value = '');
  }, []);
  let l = useCallback(() => {
    let e = s.current?.files || null;
    if (e === null || e.length === 0) return;
    let t = validateInputFiles([...e]);
    setAttachmentFiles(e => [...e, ...t]);
    o();
  }, [o, validateInputFiles, setAttachmentFiles]);
  let d = (e, t, n) => {
    e.preventDefault();
    setAttachmentFiles(e => (e.splice(t, 1), [...e]));
    URL.revokeObjectURL(n);
  };
  return jsxs('div', {
    className: VL,
    children: [attachmentFiles.length > 0 && attachmentFiles.map((e, t) => jsxs('div', {
      className: Dq,
      children: [jsxs('div', {
        children: [e.type.startsWith('image') ? jsx('img', {
          className: cR,
          alt: e.name,
          src: e.url
        }, t) : jsx('video', {
          className: cR,
          src: e.url
        }, t), jsx('div', {
          className: Lw
        })]
      }), jsx('button', {
        onClick: r => d(r, t, e.url),
        children: jsx(SvgComponent, {
          className: Yz,
          svg: _$$A6
        })
      })]
    }, t)), jsx('label', {
      className: UM,
      htmlFor: 'file-upload',
      children: jsx(SvgComponent, {
        svg: _$$A3
      })
    }), jsx('input', {
      id: 'file-upload',
      type: 'file',
      accept: 'image/png, image/jpeg, image/gif, video/mp4, video/quicktime',
      ref: s,
      onChange: l,
      multiple: !0,
      hidden: !0
    })]
  });
}
function eh(e) {
  let t = useDispatch();
  let r = useHandleMouseEvent(generateRecordingKey(e.recordingKey, 'asana-link'), 'click', () => {});
  return jsxs('div', {
    className: yl,
    children: [jsx('div', {
      className: lM,
      children: renderI18nText('bug_reporter.success_message')
    }), jsxs('div', {
      className: U3,
      children: [jsxs('div', {
        className: AX,
        children: [jsx(SvgComponent, {
          svg: _$$A5
        }), jsx(Link, {
          newTab: !0,
          onClick: r,
          href: e.taskUrl,
          trusted: !0,
          children: renderI18nText('bug_reporter.asana_link')
        })]
      }), jsxs('div', {
        className: AX,
        children: [jsx(SvgComponent, {
          svg: _$$A2
        }), jsx(Button, {
          variant: 'link',
          onClick: () => {
            t(lW({
              stringToCopy: e.taskUrl
            }));
          },
          children: renderI18nText('bug_reporter.copy_link')
        })]
      })]
    }), e.isNewReport && jsx('div', {
      children: e.successMessage
    }), e.slackUrl && jsx('div', {
      children: jsx(Link.Button, {
        href: e.slackUrl,
        newTab: !0,
        children: renderI18nText('bug_reporter.open_slack_discussion')
      })
    }), e.submissionErrorMessages.length > 0 && e.submissionErrorMessages.map(e => jsx('p', {
      children: e.toString()
    }, e))]
  });
}
let $$em0 = registerModal(e => jsx(ec, {
  ...e,
  recordingKey: 'bugReporter'
}), 'BugReporterModal');
let $$eg1 = registerModal(e => jsx(eu, {
  ...e,
  descriptionLabel: getI18nString('bug_reporter.modal.description_label_performance'),
  descriptionPlaceholder: getI18nString('bug_reporter.modal.description_placeholder_performance'),
  endpoint: '/api/perf_reports',
  modalTitle: getI18nString('help_widget.menu.report_performance_issue'),
  onSubmit: () => {
    Tf.optUserIntoDebugFlow();
  },
  recordingKey: 'perfReporter',
  shareFileLabel: getI18nString('bug_reporter.modal.include_filekey_performance'),
  showTitle: !1,
  submitButtonText: getI18nString('bug_reporter.modal.submit_performance'),
  successMessage: renderI18nText('bug_reporter.success_perf_follow_along', {
    slackChannel: jsx(Link, {
      newTab: !0,
      href: 'https://go/slack-performance-reports',
      trusted: !0,
      children: '#performance-reports'
    })
  }),
  supportsTaskUpdates: !1
}), 'PerfReporterModal');
export const bb = $$em0;
export const cl = $$eg1;
export const jH = $$J2;