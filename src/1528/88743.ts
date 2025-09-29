import { Ay } from '@stylexjs/stylex';
import U from 'lodash-es/mapValues';
import { useCallback, useContext, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { flushSync } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Fragment, jsx, jsxs } from 'react/jsx-runtime';
import { ModalRootComponent } from '../905/38914';
import { registerModal } from '../905/102752';
import { hideModalHandler, showModalHandler } from '../905/156213';
import { Label } from '../905/270045';
import { Checkbox } from '../905/274480';
import { G as _$$G } from '../905/298663';
import { getI18nString } from '../905/303541';
import { selectCurrentUser } from '../905/372672';
import { JI, Yj } from '../905/416496';
import { useModalManager } from '../905/437088';
import { Y as _$$Y } from '../905/438063';
import { IconButton } from '../905/443068';
import { k as _$$k3 } from '../905/443820';
import { Button, ButtonLarge } from '../905/521428';
import { useIsFullscreenSitesView } from '../905/561485';
import { k as _$$k2 } from '../905/582200';
import { UserAvatar } from '../905/590952';
import { getFeatureFlags } from '../905/601108';
import { setupThemeContext } from '../905/614223';
import { ButtonPrimitive } from '../905/632989';
import { textDisplayConfig } from '../905/687265';
import { useSingleEffect } from '../905/791079';
import { useDropdownState } from '../905/848862';
import { K as _$$K2 } from '../905/851274';
import { J5, K8 } from '../905/920793';
import { O as _$$O } from '../905/969533';
import { e as _$$e2 } from '../1528/93111';
import { pw } from '../1528/157131';
import { $ as _$$$ } from '../1528/660656';
import { o as _$$o } from '../1528/709529';
import { eI as _$$eI, GC } from '../1528/961203';
import { sK } from '../9410/124657';
import { _j, kV } from '../9410/486658';
import { w as _$$w } from '../9410/519056';
import { e as _$$e } from '../9410/707590';
import { Lx, v7 } from '../9410/896213';
import { cssBuilderInstance } from '../cssbuilder/589278';
import { getWorkshopModeStatus } from '../figma_app/789';
import { isExportRestricted } from '../figma_app/12796';
import { useIsFullscreenSlidesView } from '../figma_app/21029';
import { atom, atomStoreManager, useAtomValueAndSetter, useAtomWithSubscription, Xr } from '../figma_app/27355';
import { Ax, Fz } from '../figma_app/29089';
import { fu, Hk, lK, pu } from '../figma_app/123994';
import { YJ } from '../figma_app/144692';
import { DialogActionStrip, DialogBody, DialogContents, DialogFooter, DialogHeader, DialogTitle } from '../figma_app/272243';
import { useAnyNodeHasVideoPaint } from '../figma_app/334505';
import { IS } from '../figma_app/336720';
import { oe } from '../figma_app/376315';
import { H as _$$H } from '../figma_app/378458';
import { B4 } from '../figma_app/385215';
import { kb, Oh, OI, tU, wR, Yg } from '../figma_app/386160';
import { hg, u7 } from '../figma_app/425489';
import { dR } from '../figma_app/440875';
import { throwTypeError } from '../figma_app/465776';
import { isIntegrationContext } from '../figma_app/469876';
import { useCanUseDevModeDemoFile } from '../figma_app/473493';
import { t as _$$t2 } from '../figma_app/501766';
import { ZH } from '../figma_app/504823';
import { selectCurrentFile } from '../figma_app/516028';
import { isUserNotLoggedInAndEditorSupported } from '../figma_app/564183';
import { WN } from '../figma_app/638601';
import { useSceneGraphSelector } from '../figma_app/722362';
import { Command, DocumentColorProfileEnum } from '../figma_app/763686';
import { isCooperFeatureEnabled, useIsSelectedViewFullscreenCooper } from '../figma_app/828186';
import { generateRecordingKey } from '../figma_app/878298';
import { QE } from '../figma_app/914216';
import { isPrototypeView } from '../figma_app/976749';
let K = U;
class $ {
  constructor() {
    this._playingListeners = [];
    this._canPlayListeners = [];
    this._endedListeners = [];
    this._timeUpdateListeners = [];
    this._resetListeners = [];
    this._videoVolumeByNodeId = {};
    this._status = 'stopped';
    this._currentTimeMs = 0;
    this._canPlayTriggered = !1;
    this.onAtomUpdate = () => {
      let {
        status,
        currentTimeMs
      } = atomStoreManager.get(hg).timelinePlayerState;
      (this._status !== status || this._currentTimeMs !== currentTimeMs) && (this._status !== 'stopped' || this._currentTimeMs !== 0 || this._canPlayTriggered || (this._canPlayListeners.forEach(e => e(new Event('canplay'))), this._canPlayTriggered = !0), (this._status !== status || this._currentTimeMs !== currentTimeMs) && this._timeUpdateListeners.forEach(e => e(new Event('timeupdate'))), this._status !== 'playing' && status === 'playing' && this._playingListeners.forEach(e => e(new Event('playing'))), this._status !== 'ended' && status === 'ended' && this._endedListeners.forEach(e => e(new Event('ended'))), this._status = status, this._currentTimeMs = currentTimeMs);
    };
    this._unsubscribe = atomStoreManager.sub(hg, this.onAtomUpdate);
  }
  setVolumeByNodeId(e) {
    this._videoVolumeByNodeId = e;
  }
  isPlaying() {
    return atomStoreManager.get(hg).timelinePlayerState.status === 'playing';
  }
  isPaused() {
    return atomStoreManager.get(hg).timelinePlayerState.status === 'paused';
  }
  hasEnded() {
    return atomStoreManager.get(hg).timelinePlayerState.status === 'ended';
  }
  getVideoState() {
    let e = atomStoreManager.get(hg).timelinePlayerState.status;
    switch (e) {
      case 'playing':
        return 'playing';
      case 'paused':
        return 'paused';
      case 'ended':
        return 'ended';
      case 'stopped':
        return 'dormant';
      default:
        throwTypeError(e);
    }
  }
  currentTime() {
    return atomStoreManager.get(hg).timelinePlayerState.currentTimeMs / 1e3;
  }
  totalTime() {
    return atomStoreManager.get(hg).timelinePlayerState.totalTimeMs / 1e3;
  }
  togglePlay() {
    let e = atomStoreManager.get(hg).timelinePlayerState.status;
    switch (e) {
      case 'stopped':
      case 'paused':
      case 'ended':
        atomStoreManager.set(hg, {
          type: 'TIMELINE_PLAYER_PLAY',
          payload: {
            videoVolumeByNodeId: this._videoVolumeByNodeId
          }
        });
        break;
      case 'playing':
        atomStoreManager.set(hg, {
          type: 'TIMELINE_PLAYER_PAUSE'
        });
        break;
      default:
        throwTypeError(e);
    }
    return Promise.resolve();
  }
  loop() {
    return !1;
  }
  setVolume(e) {}
  addEventListener(e, t) {
    switch (e) {
      case 'playing':
        this._playingListeners.push(t);
        break;
      case 'canplay':
        this._canPlayListeners.push(t);
        break;
      case 'ended':
        this._endedListeners.push(t);
        break;
      case 'timeupdate':
        this._timeUpdateListeners.push(t);
        break;
      case 'reset':
        this._resetListeners.push(t);
        break;
      default:
        throwTypeError(e);
    }
  }
  removeEventListener(e, t) {
    switch (e) {
      case 'playing':
        this._playingListeners = this._playingListeners.filter(e => e !== t);
        break;
      case 'canplay':
        this._canPlayListeners = this._canPlayListeners.filter(e => e !== t);
        break;
      case 'ended':
        this._endedListeners = this._endedListeners.filter(e => e !== t);
        break;
      case 'timeupdate':
        this._timeUpdateListeners = this._timeUpdateListeners.filter(e => e !== t);
        break;
      case 'reset':
        this._resetListeners = this._resetListeners.filter(e => e !== t);
        break;
      default:
        throwTypeError(e);
    }
  }
  triggerReset() {
    this._resetListeners.forEach(e => e(new Event('reset')));
  }
  destroy() {
    this.isPlaying() && this.togglePlay();
    this._unsubscribe();
  }
}
function J({
  onClickCarouselItem: e,
  carouselIds: t,
  currentCooperFrameIndex: n
}) {
  let r = useRef(null);
  let i = useRef(new Map());
  useEffect(() => {
    let a = a => {
      let l;
      let r = _j(a);
      if (r && (a.preventDefault(), a.stopPropagation(), (l = r === kV.BACK ? n === 0 ? t.length - 1 : n - 1 : n === t.length - 1 ? 0 : n + 1) !== n && l >= 0 && l < t.length)) {
        let n = t[l];
        if (n) {
          let t = i.current.get(n);
          e(n);
          t?.focus();
        }
      }
    };
    let l = r.current;
    if (l) {
      l.addEventListener('keydown', a);
      return () => {
        l.removeEventListener('keydown', a);
      };
    }
  }, [n, t, e]);
  return jsxs('div', {
    ref: r,
    tabIndex: 0,
    className: 'x1v8gsql xspf3my x78zum5 xdt5ytf xygoll0',
    children: [jsx(Q, {
      currentCooperFrameIndex: n,
      totalCooperFrameCount: t.length
    }), jsx('div', {
      className: 'x1n2onr6 x5yr21d x1rife3k x1xzczws xkcv6ua',
      children: jsx('ul', {
        className: 'x10l6tqk xu96u03 x13vifvy x78zum5 xdt5ytf x6s0dn4 x1nfngrj xf7z5ut xe8uvvx',
        children: t.map((t, l) => jsx(ButtonPrimitive, {
          ref: e => {
            e ? i.current.set(t, e) : i.current.$$delete(t);
          },
          onClick: n => e(t, n),
          ...Ay.props(ee.exportCarouselItem, l === n ? ee.exportCarouselItemSelected : void 0),
          children: jsx(_$$eI, {
            guid: t,
            thumbnailBorder: void 0,
            smallSquares: !0,
            thumbnailType: GC.NORMAL
          }, l)
        }, l))
      })
    })]
  });
}
function Q({
  currentCooperFrameIndex: e,
  totalCooperFrameCount: t
}) {
  return jsx('div', {
    className: 'x13vifvy x78zum5 x6s0dn4 xl56j7k x1n5zjp5 xf7z5ut',
    children: jsx('h3', {
      ...Ay.props(ee.exportCarouselHeader),
      children: getI18nString('buzz.toolbar.export_modal.frame_number', {
        current: e + 1,
        total: t
      })
    })
  });
}
let ee = {
  exportCarouselItem: {
    position: 'x1n2onr6',
    padding: 'x1mh6rdz',
    paddingInline: null,
    paddingStart: null,
    paddingLeft: null,
    paddingEnd: null,
    paddingRight: null,
    paddingBlock: null,
    paddingTop: null,
    paddingBottom: null,
    borderRadius: 'x19y5rnk',
    borderStartStartRadius: null,
    borderStartEndRadius: null,
    borderEndStartRadius: null,
    borderEndEndRadius: null,
    borderTopLeftRadius: null,
    borderTopRightRadius: null,
    borderBottomLeftRadius: null,
    borderBottomRightRadius: null,
    backgroundColor: 'x1v8gsql',
    border: 'xehbxol xehu9ly',
    borderWidth: null,
    borderInlineWidth: null,
    borderInlineStartWidth: null,
    borderLeftWidth: null,
    borderInlineEndWidth: null,
    borderRightWidth: null,
    borderBlockWidth: null,
    borderTopWidth: null,
    borderBottomWidth: null,
    borderStyle: null,
    borderInlineStyle: null,
    borderInlineStartStyle: null,
    borderLeftStyle: null,
    borderInlineEndStyle: null,
    borderRightStyle: null,
    borderBlockStyle: null,
    borderTopStyle: null,
    borderBottomStyle: null,
    borderColor: null,
    borderInlineColor: null,
    borderInlineStartColor: null,
    borderLeftColor: null,
    borderInlineEndColor: null,
    borderRightColor: null,
    borderBlockColor: null,
    borderTopColor: null,
    borderBottomColor: null,
    $$css: !0
  },
  exportCarouselItemSelected: {
    backgroundColor: 'x176lpz5',
    border: 'x6rs6n1',
    borderWidth: null,
    borderInlineWidth: null,
    borderInlineStartWidth: null,
    borderLeftWidth: null,
    borderInlineEndWidth: null,
    borderRightWidth: null,
    borderBlockWidth: null,
    borderTopWidth: null,
    borderBottomWidth: null,
    borderStyle: null,
    borderInlineStyle: null,
    borderInlineStartStyle: null,
    borderLeftStyle: null,
    borderInlineEndStyle: null,
    borderRightStyle: null,
    borderBlockStyle: null,
    borderTopStyle: null,
    borderBottomStyle: null,
    borderColor: null,
    borderInlineColor: null,
    borderInlineStartColor: null,
    borderLeftColor: null,
    borderInlineEndColor: null,
    borderRightColor: null,
    borderBlockColor: null,
    borderTopColor: null,
    borderBottomColor: null,
    $$css: !0
  },
  exportCarouselHeader: {
    ...textDisplayConfig.textBodyMedium,
    textAlign: 'x2b8uid',
    $$css: !0
  }
};
let ei = e => e !== 'MP4';
let es = e => e === 'MP4';
let eo = e => e?.type && ei(e.type) ? e.type : 'PNG';
let ed = e => e?.type && es(e.type) ? e.type : 'MP4';
function ec({
  currentFrameId: e,
  frameConfigs: t,
  updateFrameConfig: n
}) {
  let l = useDispatch();
  let i = useDropdownState();
  let s = e ? t[e] : null;
  let o = e && s?.type === 'MP4';
  let d = s?.type === 'PDF Print';
  let u = s?.type === 'PDF';
  let p = s?.type === 'PNG';
  let h = jsx(Hk, {
    imageType: eo(s),
    setImageType: t => {
      if (e) {
        let a = {
          type: t
        };
        t === 'PDF Print' ? a.colorProfile = DocumentColorProfileEnum.CMYK : s?.colorProfile === DocumentColorProfileEnum.CMYK && (a.colorProfile = DocumentColorProfileEnum.DOCUMENT);
        n(e, a);
      }
    },
    dropdownShown: i,
    dispatch: l
  });
  let m = jsx(lK, {
    videoType: ed(s),
    setVideoType: t => {
      e && n(e, {
        type: t
      });
    },
    dropdownShown: i,
    dispatch: l
  });
  let _ = jsx(fu, {
    imageType: eo(s),
    constraint: s?.constraint ?? {
      type: 'CONTENT_SCALE',
      value: 1
    },
    setConstraint: t => {
      e && n(e, {
        constraint: t
      });
    },
    dropdownShown: i,
    dispatch: l
  });
  let x = jsx(J5, {
    onExportQualityChange: (t, a) => {
      e && n(e, {
        exportQuality: Yj(t, a)
      });
    },
    quality: s?.exportQuality ?? 0.76,
    imageType: eo(s),
    dropdownShown: i,
    dispatch: l
  });
  let g = jsx(ZH, {
    children: ({
      documentExportColorProfile: t
    }) => jsx(K8, {
      documentExportColorProfile: t,
      onColorProfileChange: t => {
        e && n(e, {
          colorProfile: DocumentColorProfileEnum[t]
        });
      },
      colorProfile: s?.colorProfile !== void 0 ? DocumentColorProfileEnum[s?.colorProfile] : 'DOCUMENT',
      inBuzzPrint: !!getFeatureFlags().buzz_print_export && eo(s) === 'PDF Print',
      dispatch: l,
      dropdownShown: i,
      width: 240
    }, s?.colorProfile)
  });
  return jsxs('div', {
    className: 'xafpxmx x78zum5 xdt5ytf xg2d0mh xv2w18j x1wsuqlk xehsoiq',
    children: [jsx('span', {
      className: 'xkezfkh',
      children: getI18nString('cooper.toolbar.export_modal.file_type')
    }), o ? m : h, o ? jsx(Checkbox, {
      label: jsx(Label, {
        children: getI18nString('buzz.toolbar.export_modal.include_audio')
      }),
      checked: s.includeAudio ?? !0,
      onChange: t => {
        e && n(e, {
          includeAudio: t
        });
      }
    }) : null, !o && jsxs(Fragment, {
      children: [!u && !d && jsxs(Fragment, {
        children: [jsx('span', {
          className: 'xkezfkh',
          children: getI18nString('cooper.toolbar.export_modal.size')
        }), _]
      }), !p && !d && jsxs(Fragment, {
        children: [jsx('span', {
          className: 'xkezfkh',
          children: getI18nString('cooper.toolbar.export_modal.quality')
        }), x]
      }), jsx('span', {
        className: 'xkezfkh',
        children: getI18nString('cooper.toolbar.export_modal.color_profile')
      }), jsx('span', {
        className: 'x1ef8nbk',
        children: g
      }), d && jsx('span', {
        className: 'x1n0bwc9 x1ah0xmj',
        children: getI18nString('cooper.toolbar.export_modal.color_profile_warning')
      }), getFeatureFlags().buzz_print_export && d && jsx(Checkbox, {
        label: jsx(Label, {
          children: getI18nString('cooper.toolbar.export_modal.show_print_marks')
        }),
        checked: s?.shouldAddPrintMarks ?? !1,
        onChange: t => {
          e && n(e, {
            shouldAddPrintMarks: t
          });
        }
      })]
    })]
  });
}
function eu({
  selectedIds: e,
  frameConfigs: t,
  updateFrameConfig: n
}) {
  let [r, i] = useState(0);
  let s = e[r];
  let {
    ref,
    inlinePreviewStatus
  } = function (e) {
    let [t, n] = useState(null);
    let [{
      exporting: a,
      currentPresentedNode: r,
      buzzInlinePreviewStatus: i
    }, s] = useAtomValueAndSetter(_$$e.stateAtom);
    let o = useAnyNodeHasVideoPaint(e ? [e] : []);
    useEffect(() => {
      i === u7.LOAD_FORBIDDEN && s({
        type: 'UPDATE_BUZZ_INLINE_PREVIEW',
        payload: {
          status: u7.LOAD_PENDING
        }
      });
    }, [i, s]);
    useLayoutEffect(() => {
      s({
        type: 'UPDATE_BUZZ_INLINE_PREVIEW',
        payload: {
          position: {
            left: t?.x || 0,
            top: t?.y || 0
          },
          size: {
            x: t?.width || 0,
            y: t?.height || 0
          }
        }
      });
    }, [t, s]);
    useLayoutEffect(() => {
      a || s({
        type: 'UPDATE_BUZZ_INLINE_PREVIEW',
        payload: {
          requestedNodeId: e
        }
      });
    }, [e, s, a]);
    let d = o && !a && r === e;
    let c = d && i === u7.HIDDEN;
    let p = !d && i === u7.SHOWN;
    useLayoutEffect(() => {
      c ? s({
        type: 'UPDATE_BUZZ_INLINE_PREVIEW',
        payload: {
          status: u7.SHOWN
        }
      }) : p && s({
        type: 'UPDATE_BUZZ_INLINE_PREVIEW',
        payload: {
          status: u7.HIDDEN
        }
      });
    }, [s, d, p, c]);
    let [h, m] = useState(null);
    !function (e, t) {
      let n = useCallback(() => {
        if (!e) {
          t({
            x: 0,
            y: 0,
            width: 0,
            height: 0
          });
          return;
        }
        let n = e.getBoundingClientRect();
        t({
          x: n.x,
          y: n.y,
          width: n.width,
          height: n.height
        });
      }, [t, e]);
      useLayoutEffect(() => (window.addEventListener('resize', n), () => window.removeEventListener('resize', n)), [n]);
      useLayoutEffect(() => {
        let a = new ResizeObserver(n);
        e ? a.observe(e) : t({
          x: 0,
          y: 0,
          width: 0,
          height: 0
        });
        return () => a.disconnect();
      }, [t, e, n]);
    }(h, n);
    useSingleEffect(() => () => queueMicrotask(() => flushSync(() => {
      s({
        type: 'TIMELINE_PLAYER_RESET'
      });
      s({
        type: 'UPDATE_BUZZ_INLINE_PREVIEW',
        payload: {
          status: u7.HIDDEN
        }
      });
    })));
    let _ = 'disabled';
    a ? _ = 'exporting' : o && (_ = d ? 'ready' : 'loading');
    return {
      ref: m,
      inlinePreviewStatus: _
    };
  }(s);
  let c = inlinePreviewStatus === 'loading';
  let h = inlinePreviewStatus === 'ready';
  let m = function () {
    let [e, t] = useState(null);
    let [n] = useAtomValueAndSetter(oe);
    let a = useMemo(() => K()(n, e => e.currentVolume), [n]);
    useSingleEffect(() => {
      let e = new $();
      e.setVolumeByNodeId(a);
      t(e);
      return () => {
        e.destroy();
        t(null);
      };
    });
    useEffect(() => {
      e?.setVolumeByNodeId(a);
    }, [e, a]);
    return e;
  }();
  let _ = useCallback((t, n) => {
    n?.stopPropagation();
    let a = e.indexOf(t);
    a !== -1 && i(a);
  }, [e]);
  return jsx(Fragment, {
    children: jsxs('div', {
      className: 'x78zum5 x5yr21d',
      children: [e.length > 1 && jsx(J, {
        onClickCarouselItem: _,
        carouselIds: e,
        currentCooperFrameIndex: r
      }), jsx('div', {
        className: 'x1n2onr6 xecqa5w x98rzlu x78zum5 xdt5ytf xl56j7k x6s0dn4 x1gkjlqi x1v8gsql xspf3my',
        children: void 0 === s ? jsx('div', {
          className: 'xdmton0 x1ybc05g x1g82q5y x2b8uid xxymvpz x1n0bwc9',
          children: getI18nString('cooper.toolbar.export_modal.no_assets_selected')
        }) : jsx(Fragment, {
          children: jsx(ZH, {
            children: ({
              documentExportColorProfile: e
            }) => jsxs(Fragment, {
              children: [m && h && jsx(pw, {
                nodeId: s,
                videoPlayerAdapter: m,
                isLoading: !1,
                shouldHidePlaybackButton: !1,
                isVideoNodeHovered: !0,
                inExportView: !0
              }), c && jsx('div', {
                className: 'x10l6tqk x8ow593 xibut22 x78zum5 x6s0dn4 xl56j7k xxk0z11 xvy4d1p x19y5rnk x68m4m9',
                children: jsx(setupThemeContext, {
                  brand: 'cooper',
                  mode: 'dark',
                  children: jsx(_$$k3, {})
                })
              }), jsx(pu, {
                ref,
                selectedCooperFrameNodeId: s,
                recordingKey: generateRecordingKey(s, 'exportModalPreview'),
                useAbsoluteBounds: !0,
                panelWidth: 337,
                panelHeight: 337,
                colorProfile: e,
                renderPrintMarks: t[s]?.shouldAddPrintMarks
              }, s)]
            })
          })
        })
      }), jsx(ec, {
        currentFrameId: s,
        frameConfigs: t,
        updateFrameConfig: n
      })]
    })
  });
}
let ep = registerModal(e => {
  let t = useModalManager(e);
  let n = useDispatch();
  let i = useSceneGraphSelector();
  let o = function () {
    let [{
      currentPresentedNode: e
    }] = useAtomValueAndSetter(_$$e.stateAtom);
    return !!e;
  }();
  let [d, p] = useState({});
  let h = _$$$();
  let m = h.length;
  let _ = useAnyNodeHasVideoPaint(h);
  let x = useCallback(e => {
    let t = i.get(e);
    let n = t?.hasVideoPaintOrHasVideoPaintDescendant ?? !1;
    return {
      type: n ? 'MP4' : 'PNG',
      constraint: {
        type: 'CONTENT_SCALE',
        value: 1
      },
      colorProfile: DocumentColorProfileEnum.DOCUMENT,
      exportQuality: n ? 1 : JI,
      shouldAddPrintMarks: !1,
      includeAudio: !0
    };
  }, [i]);
  let g = useCallback((e, t) => {
    p(n => ({
      ...n,
      [e]: {
        ...x(e),
        ...n[e],
        ...t
      }
    }));
  }, [x]);
  useSingleEffect(() => {
    let e = {};
    h.forEach(t => {
      t && (e[t] = x(t));
    });
    p(e);
  });
  return jsx(ModalRootComponent, {
    manager: t,
    width: 'fit-content',
    children: jsxs(DialogContents, {
      children: [jsx(DialogHeader, {
        children: jsx(DialogTitle, {
          children: getI18nString('cooper.toolbar.export_modal.export_title')
        })
      }), jsx(DialogBody, {
        padding: 0,
        children: jsx(_$$k2, {
          name: 'cooper_export_modal',
          children: jsx(eu, {
            selectedIds: h,
            frameConfigs: d,
            updateFrameConfig: g
          })
        })
      }), jsx(DialogFooter, {
        children: jsx(DialogActionStrip, {
          children: jsx(Button, {
            variant: 'primary',
            onClick: () => {
              let e = [];
              let t = [];
              let a = [];
              Object.entries(d).forEach(([n, l]) => {
                let r = {
                  nodeId: n,
                  ...l
                };
                switch (l.type) {
                  case 'MP4':
                    e.push(r);
                    break;
                  case 'PDF':
                  case 'PDF Print':
                    a.push(r);
                    break;
                  default:
                    t.push(r);
                }
              });
              let l = e.length + t.length + a.length;
              atomStoreManager.set(_$$o, {
                mp4Configs: e,
                imageConfigs: t,
                pdfConfigs: a,
                completed: 0,
                total: l,
                isExporting: !0
              });
              n(hideModalHandler());
            },
            disabled: h.length === 0 || _ && !o,
            children: getI18nString('buzz.toolbar.export_modal.export_button_text', {
              assetCount: m
            })
          })
        })
      })]
    })
  });
});
function em() {
  let e = useDispatch();
  let t = selectCurrentFile();
  let n = useAtomWithSubscription(_$$o);
  let i = !!t && isExportRestricted(t);
  let o = useCallback(() => getFeatureFlags().buzz_video_export || getFeatureFlags().buzz_print_export ? ep : _$$Y, []);
  return jsx('div', {
    className: 'x1057jvv xnfn54o',
    children: jsx(ButtonLarge, {
      variant: 'secondary',
      disabled: i || n.isExporting,
      onClick: () => e(showModalHandler({
        type: o()
      })),
      children: getI18nString('fullscreen.toolbar.cooper.export')
    })
  });
}
export let $$eP1 = atom(0);
function eF(e) {
  let {
    isRightPanelCollapsed
  } = useContext(_$$t2);
  let n = useDispatch();
  let f = useIsFullscreenSlidesView();
  let v = useIsFullscreenSitesView();
  let I = useIsSelectedViewFullscreenCooper() && isCooperFeatureEnabled();
  let N = isPrototypeView();
  let y = dR();
  let b = useSelector(e => e.multiplayer);
  let C = useMemo(() => b.allUsers.find(e => e.sessionID === b.sessionID) || null, [b.allUsers, b.sessionID]);
  let S = B4();
  let T = N ? null : e.openFile;
  let L = getWorkshopModeStatus(T?.key || '').enabled;
  let R = isIntegrationContext();
  let D = useRef(null);
  let O = Xr($$eP1);
  let j = isUserNotLoggedInAndEditorSupported();
  let k = _$$e2();
  let A = _$$G();
  let w = useCanUseDevModeDemoFile();
  let P = selectCurrentUser();
  let F = WN();
  useEffect(() => {
    D.current && isRightPanelCollapsed && O(D.current.clientWidth);
  }, [isRightPanelCollapsed, D, O, b.allUsers]);
  let M = useCallback(e => {
    Lx(e, C?.sessionID, n, N, b, y, S);
  }, [C?.sessionID, n, N, b, y, S]);
  return jsx('div', {
    ref: D,
    children: T === null ? jsx('div', {
      className: tU,
      children: jsx(YJ, {})
    }) : jsxs('div', {
      className: Yg,
      children: [jsxs('div', {
        className: kb,
        children: [jsx(sK, {
          isUI3: !0
        }), w && P && jsx(UserAvatar, {
          user: {
            ...P,
            id: P.id
          }
        }), b && e.openFile && C && !w && jsx(v7, {
          thresholdUsesContainerWidth: !0,
          dropdownShown: e.dropdownShown,
          multiplayer: b,
          currentUser: C,
          onUserClick: j ? () => F(Command.FOLLOW_PRESENTER) : M
        })]
      }), (isRightPanelCollapsed || j) && !I && jsx('div', {
        className: wR,
        children: jsx(_$$H, {
          recordingKey: generateRecordingKey('header', 'zoomMenu')
        })
      }), jsx('div', {
        className: Oh,
        children: jsxs('div', {
          className: cssBuilderInstance.flex.itemsCenter.$,
          children: [!R && !I && (k || !A) && !j && jsx(QE, {
            item: v ? Ax : f ? IS : Fz,
            recordingKey: e.recordingKey,
            numUnreadComments: 0
          }), j && !I && !A && jsxs('div', {
            className: cssBuilderInstance.flex.flexRow.$,
            children: [jsx(IconButton, {
              'aria-label': getI18nString('fullscreen_actions.present-as-prototype'),
              'onClick': () => F(Command.PRESENT_AS_PROTOTYPE),
              'children': jsx(_$$K2, {})
            }), jsx(IconButton, {
              'aria-label': getI18nString('fullscreen.flyout.prototype_view'),
              'onClick': () => F(Command.PRESENT_AS_PROTOTYPE),
              'children': jsx(_$$O, {})
            })]
          }), I && jsx(em, {}), j && jsx('div', {
            style: {
              marginLeft: 8,
              marginRight: 8
            },
            children: jsx(ButtonLarge, {
              variant: 'secondary',
              onClick: () => F('SHARE_BUTTON'),
              children: getI18nString('fullscreen.toolbar.multiplayer.share')
            })
          }), T && !j && jsx(_$$w, {
            user: e.user,
            editingFile: T,
            isFileInWorkshop: L,
            appendedClassname: OI
          })]
        })
      })]
    })
  });
}
export function $$eM0({
  recordingKey: e
}) {
  let t = selectCurrentFile();
  let n = useSelector(e => e.user);
  let l = useSelector(e => e.dropdownShown);
  return jsx(eF, {
    recordingKey: e,
    openFile: t,
    dropdownShown: l,
    user: n,
    isIntegration: isIntegrationContext()
  });
}
export const v2 = $$eM0;
export const Ds = $$eP1;