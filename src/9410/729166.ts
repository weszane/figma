import M from 'classnames';
import { forwardRef, memo, useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { Fragment, jsx, jsxs } from 'react/jsx-runtime';
import { reportError } from '../905/11';
import { E as _$$E } from '../905/53857';
import { e as _$$e5 } from '../905/74460';
import { i as _$$i } from '../905/97346';
import { Z as _$$Z } from '../905/104740';
import { t as _$$t3 } from '../905/117577';
import { xK } from '../905/125218';
import { J as _$$J } from '../905/125993';
import { KindEnum } from '../905/129884';
import { t as _$$t2 } from '../905/150656';
import { F as _$$F2 } from '../905/160142';
import { ox } from '../905/163832';
import { ServiceCategories as _$$e } from '../905/165054';
import { ju } from '../905/187165';
import { h as _$$h3 } from '../905/207101';
import { nt, o3 } from '../905/226610';
import { o as _$$o2 } from '../905/237202';
import { z as _$$z } from '../905/239603';
import { A as _$$A } from '../905/251970';
import { HiddenLabel } from '../905/270045';
import { v as _$$v } from '../905/293028';
import { O as _$$O2 } from '../905/301080';
import { VisualBellActions } from '../905/302958';
import { getI18nString, renderI18nText } from '../905/303541';
import { wG } from '../905/331989';
import { P as _$$P2 } from '../905/347284';
import { BannerMessage } from '../905/363675';
import { O as _$$O4 } from '../905/365108';
import { selectCurrentUser } from '../905/372672';
import { deepEqual } from '../905/382883';
import { e as _$$e3 } from '../905/383776';
import { LazyInputForwardRef } from '../905/408237';
import { A as _$$A4 } from '../905/408320';
import { i as _$$i2 } from '../905/415810';
import { D as _$$D, d as _$$d } from '../905/433403';
import { N as _$$N } from '../905/438674';
import { K as _$$K } from '../905/443068';
import { k as _$$k2 } from '../905/443820';
import { trackEventAnalytics } from '../905/449184';
import { l as _$$l } from '../905/479687';
import { bL as _$$bL, mc as _$$mc, c$, l9, WL } from '../905/493196';
import { O as _$$O } from '../905/501876';
import { RecordableAnchor } from '../905/511649';
import { C as _$$C } from '../905/520159';
import { Button } from '../905/521428';
import { $ as _$$$ } from '../905/532878';
import { subscribeAndAwaitData } from '../905/553831';
import { ModalWindowType } from '../905/560959';
import { N as _$$N2 } from '../905/572042';
import { H8 } from '../905/590952';
import { getFeatureFlags } from '../905/601108';
import { V as _$$V2 } from '../905/604512';
import { PerfTimer } from '../905/609396';
import { J as _$$J2 } from '../905/614223';
import { ButtonPrimitive } from '../905/632989';
import { DP } from '../905/640017';
import { oW } from '../905/675859';
import { getSingletonSceneGraph } from '../905/700578';
import { L as _$$L } from '../905/704296';
import { $y, Jy, Zu } from '../905/708651';
import { SvgComponent, V as _$$V } from '../905/714743';
import { Point } from '../905/736624';
import { od } from '../905/748636';
import { G as _$$G2 } from '../905/750789';
import { tH as _$$tH, H4 } from '../905/751457';
import { getSelectedFile } from '../905/766303';
import { nm } from '../905/782020';
import { q as _$$q2 } from '../905/820062';
import { j as _$$j } from '../905/834956';
import { BK, Um } from '../905/848862';
import { isVsCodeEnvironment } from '../905/858738';
import { e as _$$e4, y as _$$y } from '../905/871724';
import { useHasParentOrgId } from '../905/882262';
import { A as _$$A9 } from '../905/891805';
import { e as _$$e6 } from '../905/916195';
import { selectViewAction } from '../905/929976';
import { lQ } from '../905/934246';
import { f as _$$f4 } from '../905/940356';
import { postUserFlag } from '../905/985254';
import { Ak } from '../905/986103';
import { h as _$$h2 } from '../905/994594';
import { H as _$$H2 } from '../905/999677';
import { A as _$$A3 } from '../1250/29260';
import { gK, Y7 } from '../1250/158057';
import { bh, TP, TQ, VW, ZJ } from '../1250/224366';
import { o as _$$o } from '../1250/251689';
import { OG, w6 } from '../1250/340571';
import { c as _$$c } from '../1250/425092';
import { VS } from '../1250/506456';
import { n as _$$n } from '../1250/647011';
import { P as _$$P } from '../1250/665611';
import { e as _$$e2 } from '../1250/871209';
import { A as _$$A2, G as _$$G } from '../1250/975106';
import { V as _$$V3 } from '../1577/311426';
import { A as _$$A8 } from '../1617/759863';
import { f as _$$f2 } from '../9410/228507';
import { f as _$$f3 } from '../9410/341198';
import { O as _$$O3 } from '../9410/414444';
import { w as _$$w } from '../9410/519056';
import { n9, YA } from '../9410/608002';
import { p as _$$p } from '../9410/692889';
import { x as _$$x } from '../9410/705473';
import { e as _$$e7 } from '../9410/707590';
import { H as _$$H3 } from '../9410/762998';
import { s as _$$s2 } from '../9410/841699';
import { aq, cD, CN, FO, KW, Xt } from '../9410/855699';
import { iZ as _$$iZ2, _d, k9, Q0 } from '../9410/874933';
import { Lx, v7 } from '../9410/896213';
import { yh } from '../9410/974031';
import { s as _$$s } from '../cssbuilder/589278';
import { Zh } from '../figma_app/2590';
import { ei as _$$ei } from '../figma_app/9054';
import { jY, sO } from '../figma_app/21029';
import { atom, createValidatedLocalStorageAtom, useAtomValueAndSetter, useAtomWithSubscription, Xr } from '../figma_app/27355';
import { a_Q, bTb, Evg, Gyo, m8f, RtY, Wsk, wxr } from '../figma_app/27776';
import { gs, ON, oy } from '../figma_app/31103';
import { n0 } from '../figma_app/32128';
import { J2 as _$$J3 } from '../figma_app/34798';
import { useLatestRef } from '../figma_app/922077';
import { DevModeActivity } from '../figma_app/43951';
import { H as _$$H } from '../figma_app/47866';
import { y as _$$y2 } from '../figma_app/53571';
import { FEditorType } from '../figma_app/53721';
import { BannerInset } from '../figma_app/59509';
import { getViewportX, computeFullscreenViewportForNode, getViewportY } from '../figma_app/62612';
import { U as _$$U2 } from '../figma_app/65327';
import { getObservableOrFallback, getObservableValue } from '../figma_app/84367';
import { l7, US, ZO } from '../figma_app/88239';
import { ap } from '../figma_app/149304';
import { Cj } from '../figma_app/151869';
import { Ig } from '../figma_app/155647';
import { JR, Qp } from '../figma_app/162641';
import { Fk } from '../figma_app/167249';
import { buildUploadUrl, isDevEnvironment } from '../figma_app/169182';
import { is as _$$is, BX, Ho } from '../figma_app/170018';
import { FEventType } from '../figma_app/191312';
import { selectedViewToPath, getSelectedViewUrl } from '../figma_app/193867';
import { Vc } from '../figma_app/211694';
import { _ as _$$_3 } from '../figma_app/214121';
import { fQ } from '../figma_app/238665';
import { L$ } from '../figma_app/241341';
import { f as _$$f } from '../figma_app/258006';
import { a as _$$a } from '../figma_app/289605';
import { y4 } from '../figma_app/298277';
import { mapFileToProductType } from '../figma_app/314264';
import { bq, Gn, hY, L_, qt } from '../figma_app/349969';
import { ut as _$$ut, Ah, Fe, HS, hX, kl, l5, nw, Sq, UB, wR, xY } from '../figma_app/354027';
import { _$, S7 } from '../figma_app/379850';
import { B4 } from '../figma_app/385215';
import { _6 } from '../figma_app/386952';
import { c as _$$c2 } from '../figma_app/391827';
import { Hr, Oi } from '../figma_app/394327';
import { bi } from '../figma_app/425489';
import { dR, Ww } from '../figma_app/440875';
import { fullscreenValue } from '../figma_app/455680';
import { assert, assertNotNullish, throwTypeError } from '../figma_app/465776';
import { useCanAccessFullDevMode, useCanAccessDevModeEntryPoint, useCanUseDevModeDemoFile } from '../figma_app/473493';
import { clamp } from '../figma_app/492908';
import { LinkPrimitive } from '../figma_app/496441';
import { useCurrentFileKey, useOpenFileLibraryKey, selectCurrentFile } from '../figma_app/516028';
import { uv } from '../figma_app/518364';
import { setupCodegenLanguageSync } from '../figma_app/545541';
import { BI } from '../figma_app/546509';
import { Yp } from '../figma_app/578768';
import { Dl } from '../figma_app/601682';
import { createTrackedAtom, setupRemovableAtomFamily } from '../figma_app/615482';
import { Ax } from '../figma_app/616261';
import { eb as _$$eb, i_ as _$$i_, A8, bE, EB, R6, vo, zL } from '../figma_app/617506';
import { flatten } from '../figma_app/656233';
import { zy } from '../figma_app/656450';
import { gk } from '../figma_app/715641';
import { eY as _$$eY } from '../figma_app/722362';
import { dP, Ku, UK } from '../figma_app/740163';
import { clearSelection } from '../figma_app/741237';
import { AppStateTsApi, BuildStatus, Fullscreen, FullscreenPerfMetrics, HandoffBindingsCpp, Multiplayer, PresetType, PrototypingTsApi, RotationType, SelfDesignType, UIVisibilitySetting, VariableDataType, VariableResolvedDataType, webGPUBindings } from '../figma_app/763686';
import { q as _$$q } from '../figma_app/777660';
import { parsePxNumber } from '../figma_app/783094';
import { K as _$$K2, Q as _$$Q2 } from '../figma_app/789979';
import { WC } from '../figma_app/792783';
import { as, OP, uF } from '../figma_app/792958';
import { rh as _$$rh, np } from '../figma_app/803932';
import { nd, sD } from '../figma_app/826998';
import { TrackingProvider } from '../figma_app/831799';
import { dX } from '../figma_app/837840';
import { u as _$$u, BQ, Kd, yp } from '../figma_app/852050';
import { b as _$$b, bL, mc, q7 } from '../figma_app/860955';
import { TR } from '../figma_app/867292';
import { desktopAPIInstance } from '../figma_app/876459';
import { generateRecordingKey, SKIP_RECORDING, useHandleMouseEvent } from '../figma_app/878298';
import { _6 as _$$_2, _o, c7, oz, wz, zz } from '../figma_app/879363';
import { isInteractionPathCheck, Lg } from '../figma_app/897289';
import { trackFileEventWithStore, trackDefinedFileEventWithStore } from '../figma_app/901889';
import { fq, Ou } from '../figma_app/953049';
import { isDesignFileType, isDevHandoffEditorType, isWhiteboardFileType } from '../figma_app/976749';
import { A as _$$A7 } from '../svg/236983';
import { A as _$$A6 } from '../svg/674356';
import { useDebouncedCallback } from 'use-debounce';
import { useDispatch, useSelector } from 'react-redux';
import { Te } from '../vendor/813803';
let P = M;
function B({
  title: e,
  description: t,
  onClick: i,
  children: n,
  disabled: a,
  badge: s,
  iconBackgroundStyle: o = 'dark'
}) {
  return jsxs(ButtonPrimitive, {
    disabled: a,
    onClick: i,
    className: P()('onboarding_card--card--tK7Ix', a && 'onboarding_card--cardDisabled--INeUS'),
    children: [jsx('div', {
      className: P()('onboarding_card--iconContainer--7U4eY', {
        'onboarding_card--iconContainerLight--vxfUB': o === 'light'
      }),
      children: n
    }), jsxs('div', {
      className: 'onboarding_card--cardContent--HBRY-',
      children: [jsx('span', {
        className: 'onboarding_card--title--JNeVh',
        children: e
      }), jsx('span', {
        className: 'onboarding_card--subtitle--2hGgP',
        children: t
      })]
    }), s && jsx('div', {
      className: 'onboarding_card--badgeContainer--DGspo',
      children: s
    })]
  });
}
let z = 'codebase_suggestions_onboarding--background--M3L2O';
let V = 'codebase_suggestions_onboarding--headerTitle--0oG-U';
let W = 'codebase_suggestions_onboarding--headerDescription--Awt2L';
let Y = 'codebase_suggestions_onboarding--closeButton--e6gwu';
let J = 'codebase_suggestions_onboarding--helpButton--bM8v9';
let q = buildUploadUrl('87362980e1543a5db4a0044590b04d5f491a1e75');
let X = buildUploadUrl('a938cc4b8421dc36477282e09f83e9e6770065ed');
function Z({
  onBack: e,
  onClose: t,
  onOptionSelected: i,
  installMethods: n
}) {
  let a = DP() === 'dark';
  return jsxs('div', {
    className: z,
    children: [jsx('div', {
      className: Y,
      children: jsx(_$$K, {
        'aria-label': getI18nString('dev_handoff.component_browser_onboarding.close'),
        'onClick': t,
        'children': jsx(_$$A, {})
      })
    }), jsxs('div', {
      className: 'codebase_suggestions_onboarding--content--EjBk6',
      children: [jsxs('div', {
        className: 'codebase_suggestions_onboarding--header--cIvzn',
        children: [jsx('div', {
          children: jsx(oW, {
            src: a ? q : X,
            height: 111,
            width: 155,
            alt: getI18nString('dev_handoff.component_browser_onboarding.connect_your_running_app')
          })
        }), jsx('div', {
          className: V,
          children: getI18nString('dev_handoff.component_browser_onboarding.connect_your_running_app')
        }), jsx('div', {
          className: P()(W, 'codebase_suggestions_onboarding--headerDescriptionCentered--Mp6aa'),
          children: getI18nString('dev_handoff.codebase_suggestions.we_ll_collect_components_from_your_running_app_that_we_ll_match_to_design_components_choose_a_set_up_option_to_get_started')
        })]
      }), jsx('div', {
        className: 'codebase_suggestions_onboarding--cards--lhl8b',
        children: n.map(e => jsx(B, {
          title: e.renderTitle(),
          description: e.renderDescription(),
          iconBackgroundStyle: 'light',
          onClick: () => i?.(e.installMethod),
          children: jsx(oW, {
            src: a ? e.thumbnailUrls.dark : e.thumbnailUrls.light,
            alt: e.renderTitle(),
            className: ['codebase_suggestions_onboarding--installMethodThumbnail--qYsut', e.thumbnailAlignment === Y7.RIGHT_ALIGNED ? 'codebase_suggestions_onboarding--installMethodThumbnailRightAligned--xqXeV' : 'codebase_suggestions_onboarding--installMethodThumbnailCentered--7z0rq'].join(' ')
          })
        }, e.installMethod))
      }), jsx('div', {
        className: 'codebase_suggestions_onboarding--footer--ys3HK',
        children: jsx(Button, {
          'aria-label': getI18nString('dev_handoff.codebase_suggestions.back_to_all_options'),
          'variant': 'link',
          'onClick': e,
          'iconPrefix': jsx(_$$t3, {}),
          'children': getI18nString('dev_handoff.codebase_suggestions.back_to_all_options')
        })
      })]
    }), jsx('div', {
      className: J,
      children: jsx(_$$n, {})
    })]
  });
}
function Q({
  onClose: e,
  onBack: t,
  methodDetails: i,
  availableInstallMethods: n,
  setMethod: a
}) {
  let s = DP() === 'dark';
  let o = n.reduce((e, t) => (e[t.installMethod] = !0, e), {});
  let l = i.installMethod;
  let [d, c, u] = _$$t2.useManagedTabs(o, l, a, {
    orientation: 'vertical'
  });
  let p = _$$G();
  return jsxs('div', {
    className: z,
    children: [jsx('div', {
      className: P()('codebase_suggestions_onboarding--backButton--KRIT-', 'codebase_suggestions_onboarding--backButtonTopLeft--52IvP'),
      children: jsx(Button, {
        'aria-label': getI18nString('dev_handoff.codebase_suggestions.back_to_all_options'),
        'variant': 'link',
        'onClick': t,
        'iconPrefix': jsx(_$$t3, {}),
        'children': getI18nString('dev_handoff.codebase_suggestions.back_to_all_options')
      })
    }), jsx('div', {
      className: Y,
      children: jsx(_$$K, {
        'aria-label': getI18nString('dev_handoff.component_browser_onboarding.close'),
        'onClick': e,
        'children': jsx(_$$A, {})
      })
    }), jsx('div', {
      className: 'codebase_suggestions_onboarding--contentTop--vUJ3r',
      children: jsxs('div', {
        className: 'codebase_suggestions_onboarding--methodContent--lMPrS',
        children: [jsx('div', {
          className: 'codebase_suggestions_onboarding--methodHeaderIcon--5uHPs',
          children: jsx(oW, {
            src: s ? q : X,
            alt: getI18nString('dev_handoff.component_browser_onboarding.connect_your_running_app'),
            height: 111,
            width: 155
          })
        }), jsxs('div', {
          className: 'codebase_suggestions_onboarding--methodHeaderTitle--bIE7f',
          children: [jsx('div', {
            className: V,
            children: getI18nString('dev_handoff.component_browser_onboarding.connect_your_running_app')
          }), jsx('div', {
            className: W,
            children: getI18nString('dev_handoff.codebase_suggestions.we_ll_collect_components_from_your_running_app_that_we_ll_match_to_design_components_choose_a_set_up_option_to_get_started')
          })]
        }), jsx('div', {
          className: 'codebase_suggestions_onboarding--methodMenu--O6Pdz',
          children: jsx(_$$t2.TabStrip, {
            manager: u,
            children: Object.keys(o).map(e => jsx(_$$t2.Tab, {
              ...d[e],
              children: function (e) {
                let t = n.find(t => t.installMethod === e);
                return t?.renderTitle();
              }(e)
            }, e))
          })
        }), jsxs('div', {
          className: 'codebase_suggestions_onboarding--methodInstructions--coeCJ',
          children: [jsxs('div', {
            className: 'codebase_suggestions_onboarding--methodInstructionsHeader--M6ZOK',
            children: [jsx('div', {
              className: 'codebase_suggestions_onboarding--methodInstructionsHeaderTitle--Uk8lH',
              children: i.renderTitle()
            }), jsx('div', {
              children: i.renderDescription()
            })]
          }), p === 'disabled' && jsx(_$$P, {}), jsx(_$$o, {
            installMethod: i.installMethod,
            onContinue: () => e?.()
          })]
        })]
      })
    }), jsx('div', {
      className: J,
      children: jsx(_$$n, {})
    })]
  });
}
let $ = function ({
  onClose: e,
  onBack: t
}) {
  let {
    installMethod,
    setInstallMethod,
    availableInstallMethods
  } = gK();
  return jsx(TrackingProvider, {
    name: 'Codebase Suggestions Onboarding',
    children: installMethod == null ? jsx(Z, {
      onBack: t,
      onClose: e,
      onOptionSelected: setInstallMethod,
      installMethods: availableInstallMethods
    }) : jsx(Q, {
      onBack: () => {
        t?.();
      },
      onClose: e,
      methodDetails: installMethod,
      availableInstallMethods,
      setMethod: setInstallMethod
    })
  });
};
let ei = 'component_browser_onboarding--githubIconContainer--Lhf1M';
let er = 'component_browser_onboarding--githubIconContainerDarkMode--NS66q';
let en = function ({
  onSkip: e,
  onCodebaseIngestion: t,
  onGitHub: i,
  onClose: a,
  libraryKey: s
}) {
  let o = getFeatureFlags().dt_github_app;
  let l = DP() === 'dark';
  let c = l ? buildUploadUrl('a4446c7782c49b4efdf224dcecfe5fab21d2ab4e') : buildUploadUrl('425e98504f0df618c12eca5c175ef2d544816a4f');
  let u = l ? buildUploadUrl('2848c36c172ebe0bb220551b04d9deb0c8d5784a') : buildUploadUrl('6725539f65217d1d1f70276e9e806ac4a6743a1f');
  let p = l ? buildUploadUrl('16a8f19f5d3abcf181665a9120e0cdd7c330de3f') : buildUploadUrl('2829401d868dbdfc29b4ffea16bc52f6fad2b338');
  let [f, g] = useState('connection-options');
  let _ = OG(s);
  let x = _$$A2();
  let b = _$$e2();
  return f === 'codebase-suggestion-options' ? jsx($, {
    onClose: t,
    onBack: () => g('connection-options')
  }) : f === 'github-options' && (_.status === w6.NeedsInfo || _.status === w6.Connected) ? jsx(_$$A3, {
    onClose: i,
    onBack: () => g('connection-options'),
    libraryKey: s
  }) : jsx(TrackingProvider, {
    name: 'Component Browser Onboarding',
    children: jsxs('div', {
      className: 'component_browser_onboarding--background---pN6U',
      children: [jsx('div', {
        className: 'component_browser_onboarding--closeButton--D5H4w',
        children: jsx(_$$K, {
          'aria-label': getI18nString('dev_handoff.component_browser_onboarding.close'),
          'onClick': a,
          'children': jsx(_$$A, {})
        })
      }), jsxs('div', {
        className: 'component_browser_onboarding--content--Um63s',
        children: [jsxs('div', {
          className: 'component_browser_onboarding--header--ka15q',
          children: [jsx(oW, {
            src: c,
            alt: getI18nString('dev_handoff.component_browser_onboarding.connected_projects_icon'),
            className: 'component_browser_onboarding--headerImage--6Y9rK'
          }), jsx('span', {
            className: 'component_browser_onboarding--pageTitle--sFI0G',
            children: getI18nString('dev_handoff.component_browser_onboarding.choose_how_to_connect_to_code')
          })]
        }), jsxs('div', {
          className: 'component_browser_onboarding--cards--G6Oto',
          children: [o && jsx(B, {
            title: getI18nString('dev_handoff.component_browser_onboarding.connect_to_github'),
            description: getI18nString('dev_handoff.component_browser_onboarding.map_files_from_your_repo'),
            onClick: () => {
              switch (_.status) {
                case w6.NeedsInfo:
                  g('github-options');
                  break;
                case w6.Connected:
                case w6.Pending:
                  i?.();
                  break;
                case w6.NotSetup:
                  b(i);
              }
            },
            disabled: _.queryStatus === _$$H.LOADING,
            badge: jsx(_$$E, {
              variant: 'successOutline',
              children: getI18nString('dev_handoff.component_browser_onboarding.recommended')
            }),
            children: jsxs('div', {
              className: 'component_browser_onboarding--onboardingCardContentContainer--ZZzWH',
              children: [jsx('div', {
                className: l ? er : ei,
                children: jsx(_$$f, {
                  height: 32,
                  width: 32
                })
              }), _.queryStatus === _$$H.LOADING && jsx('div', {
                className: 'component_browser_onboarding--loadingSpinnerContainer--LkuHL',
                children: jsx(_$$k2, {})
              })]
            })
          }), x && jsx(B, {
            title: getI18nString('dev_handoff.component_browser_onboarding.connect_your_running_app'),
            description: getI18nString('dev_handoff.component_browser_onboarding.map_collected_components'),
            onClick: () => {
              g('codebase-suggestion-options');
            },
            iconBackgroundStyle: 'light',
            children: jsx(oW, {
              src: u,
              alt: getI18nString('dev_handoff.component_browser_onboarding.connected_projects_icon'),
              style: {
                height: '46px',
                width: '60px'
              }
            })
          }), !o && jsx(B, {
            title: getI18nString('dev_handoff.component_browser_onboarding.connect_to_github'),
            description: getI18nString('dev_handoff.component_browser_onboarding.map_files_from_your_repo'),
            onClick: lQ,
            disabled: !0,
            badge: jsx(_$$E, {
              children: getI18nString('dev_handoff.component_browser_onboarding.coming_soon')
            }),
            children: jsx('div', {
              className: l ? er : ei,
              children: jsx(_$$f, {
                height: 32,
                width: 32
              })
            })
          }), jsx(B, {
            title: getI18nString('dev_handoff.component_browser_onboarding.skip_for_now_and_map_manually'),
            description: getI18nString('dev_handoff.component_browser_onboarding.copy_and_paste_links'),
            onClick: e,
            iconBackgroundStyle: 'light',
            children: jsx(oW, {
              src: p,
              alt: getI18nString('dev_handoff.component_browser_onboarding.connected_projects_icon')
            })
          })]
        })]
      })]
    })
  });
};
function ea() {
  let e = bh();
  let t = selectCurrentFile();
  let i = Dl(t);
  let [n, a] = Vc('componentBrowserOnboardingSelection', null);
  let s = useOpenFileLibraryKey();
  let o = _6();
  return i && s ? n ? jsx(TrackingProvider, {
    name: 'Component Browser',
    children: jsx('div', {
      className: 'component_browser_container--background--soWIQ',
      children: s && jsx(uv, {
        libraryKey: s,
        componentKey: o?.componentKey,
        fallback: jsx('div', {
          className: 'component_browser_container--loadingContainer--j9mkU',
          children: jsx(_$$k2, {})
        }),
        errorFallback: jsx('div', {
          children: getI18nString('dev_handoff.component_browser_onboarding.error_loading_component_browser')
        }),
        location: 'file',
        defaultFilter: 'all',
        entrypoint: o?.componentBrowserEntrypoint ?? 'filename_menu'
      })
    })
  }) : jsx(en, {
    onClose: e,
    onCodebaseIngestion: () => a('codebase_ingestion'),
    onGitHub: () => a('github'),
    onSkip: () => a('manual'),
    libraryKey: s
  }) : null;
}
let ep = 'mcp-unmapped-components';
function eh({}) {
  let e = useDispatch();
  let t = trackDefinedFileEventWithStore();
  let i = ox();
  let [s, o] = useState(!1);
  let l = useRef({
    x: 0,
    y: 0
  });
  let c = useRef(!1);
  let [u] = useAtomValueAndSetter(_$$D);
  let [p, m] = useAtomValueAndSetter(_$$d);
  let f = useCallback(e => {
    m(!1);
    c.current = !1;
    t('component_browser.mcp_unmapped_components_banner_cta_clicked', {
      bannerId: e,
      cta: 'close_banner',
      unmappedComponentsCount: u.length
    });
  }, [m, t, u.length]);
  let g = useCallback(e => {
    let i = window.innerWidth;
    let r = window.innerHeight;
    l.current = {
      x: Math.max(0, (i - 896) / 2),
      y: Math.max(0, (r - 600) / 2)
    };
    t('component_browser.mcp_unmapped_components_banner_cta_clicked', {
      bannerId: e,
      cta: 'start_mapping',
      unmappedComponentsCount: u.length
    });
    m(!1);
    o(!0);
    c.current = !1;
  }, [m, o, t, u.length]);
  useEffect(() => {
    if (!getFeatureFlags().dt_mcp_unmapped_components_banner) return;
    if (!p || u.length === 0) {
      e(VisualBellActions.dequeue({
        matchType: ep
      }));
      c.current = !1;
      return;
    }
    if (c.current) return;
    let i = crypto.randomUUID();
    e(VisualBellActions.enqueue({
      type: ep,
      message: getI18nString('dev_handoff.mcp.unmapped_components_banner.description', {
        count: u.length
      }),
      button: {
        primary: {
          text: getI18nString('dev_handoff.mcp.unmapped_components_banner.map_now'),
          action: () => g(i)
        },
        secondary: {
          text: getI18nString('dev_handoff.mcp.unmapped_components_banner.ignore'),
          action: () => f(i)
        }
      },
      timeoutOverride: 1e4,
      onDequeue: () => {
        c.current = !1;
      }
    }));
    t('component_browser.mcp_unmapped_components_banner_shown', {
      unmappedComponentsCount: u.length,
      bannerId: i
    });
    c.current = !0;
  }, [p, u, e, f, g, t]);
  return jsx(_$$f2, {
    isOpen: s,
    onClose: () => o(!1),
    defaultPosition: l.current,
    windowDefaultWidth: 896,
    windowDefaultHeight: 600,
    manager: i,
    entrypoint: 'mcp_unmapped_components_banner'
  });
}
let eG = forwardRef(({
  valueToCopy: e,
  isCopyable: t,
  children: i,
  valueTypeForTracking: a,
  variableTypeForTracking: s,
  recordingKey: o
}, l) => {
  let {
    isSelected
  } = _$$e4();
  let c = Cj(e);
  let u = ON();
  let p = useCallback(e => {
    e.stopPropagation();
    c && c();
    u('cell_copied', {
      type: a,
      variableType: s
    });
  }, [c, u, a, s]);
  return jsx(ButtonPrimitive, {
    ref: l,
    className: P()('variable_cell_content--copyButton--KwbAc ellipsis--ellipsis--Tjyfa', isSelected && 'variable_cell_content--isOnSelected--UH9z4'),
    onClick: t ? p : void 0,
    recordingKey: o,
    children: i
  });
});
function eK({
  variable: e,
  modeId: t,
  isCopyable: i,
  variableTypeForTracking: a
}) {
  let s = Kd(e.node_id);
  let d = useMemo(() => t && s ? {
    [s]: t
  } : void 0, [t, s]);
  let c = e.modeValues[t];
  let u = BQ(e.node_id, d);
  let p = c ?? u;
  let h = !p || !u || u === 'MIXED' || p === 'MIXED';
  if (useEffect(() => {
    if (h) {
      let e = p && u ? 'Variables table cell has mixed value' : 'Variables table cell has no value';
      reportError(_$$e.DEVELOPER_TOOLS, new Error(e));
    }
  }, [h, p, u]), h) {
    return null;
  }
  switch (p.type) {
    case VariableDataType.STRING:
    case VariableDataType.FLOAT:
      return jsx(eH, {
        value: p.value,
        isCopyable: i,
        recordingKey: `dev_handoff.variables_table.cell.copy-${e.name}-${t}`
      });
    case VariableDataType.BOOLEAN:
      return jsx(eH, {
        value: Oi(p),
        isCopyable: i,
        variableTypeForTracking: a
      });
    case VariableDataType.COLOR:
      return jsx(ez, {
        value: p,
        isCopyable: i
      });
    case VariableDataType.ALIAS:
      return jsx(eV, {
        value: p,
        resolvedValue: u,
        isCopyable: i,
        variableTypeForTracking: a
      });
    case VariableDataType.SYMBOL_ID:
    case VariableDataType.NODE_FIELD_ALIAS:
    case VariableDataType.EXPRESSION:
    case VariableDataType.FONT_STYLE:
    case VariableDataType.TEXT_DATA:
    case VariableDataType.MAP:
    case VariableDataType.MANAGED_STRING_ALIAS:
    case VariableDataType.CMS_ALIAS:
    case VariableDataType.JS_RUNTIME_ALIAS:
    case VariableDataType.IMAGE:
    case VariableDataType.LINK:
    case VariableDataType.SLOT_CONTENT_ID:
    case VariableDataType.DATE:
      return null;
    default:
      throwTypeError(p);
  }
}
function eH({
  value: e,
  isCopyable: t,
  variableTypeForTracking: i,
  recordingKey: n
}) {
  let a = typeof e == 'number' ? nd(e, '') : e;
  return jsx(eG, {
    valueToCopy: a,
    isCopyable: t,
    valueTypeForTracking: 'value',
    variableTypeForTracking: i,
    recordingKey: n,
    children: jsx('div', {
      className: _$$s.textBodyMedium.truncate.$,
      children: a
    })
  });
}
function ez({
  value: e,
  isCopyable: t,
  recordingKey: i
}) {
  let n = Ku();
  let a = Ig();
  let s = _$$q(e.value, n, a, {
    alphaInPercent: !0
  }).value;
  let o = jsx(_$$rh, {
    color: e.value,
    value: s,
    disableHover: !t,
    pillClassName: 'variable_cell_content--rawColorPillContainer--uuD03'
  });
  return jsx('div', {
    className: _$$s.flex.alignCenter.gap8.h16.minW0.itemsCenter.$,
    children: jsx(eG, {
      valueToCopy: s,
      isCopyable: t,
      valueTypeForTracking: 'value',
      variableTypeForTracking: 'COLOR',
      recordingKey: i,
      children: o
    })
  });
}
function eV({
  value: e,
  resolvedValue: t,
  isCopyable: i,
  variableTypeForTracking: a
}) {
  let s = _$$u(e.value);
  let o = Cj(s?.name);
  let d = ON();
  let c = useCallback(e => {
    e.stopPropagation();
    o && o();
    d('cell_copied', {
      type: 'alias',
      variableType: a
    });
  }, [o, d, a]);
  return t.resolvedType === VariableResolvedDataType.COLOR ? jsx(np, {
    color: t.value,
    variable: s,
    label: s?.name ?? getI18nString('variables.missing_name'),
    onClick: s && i ? c : void 0,
    selected: i
  }) : jsx('div', {
    className: P()('variable_cell_content--aliasWrapper--mHIWi', e.resolvedType === VariableResolvedDataType.COLOR && 'variable_cell_content--shiftLeft--x6CPr'),
    children: jsx(wG, {
      thumbnailValue: t,
      text: s?.name ?? getI18nString('variables.missing_name'),
      variableValue: e.value,
      onClick: s && i ? c : void 0,
      disableHover: !i,
      ui3Height: !0
    })
  });
}
function eW({
  name: e,
  variableId: t,
  isCopyable: i,
  isSelected: a = !1,
  variableTypeForTracking: s
}) {
  let o = getObservableOrFallback(UK().showGuids) && t ? `${e} (${t})` : e;
  let l = sD(o);
  useEffect(() => {
    a && l.current?.scrollIntoView({
      block: 'nearest',
      behavior: 'instant'
    });
  }, [a, l]);
  return jsx(eG, {
    ref: l,
    valueToCopy: e,
    isCopyable: i,
    variableTypeForTracking: s,
    recordingKey: `dev_handoff.variables_table.cell.copy-${e}`,
    children: o
  });
}
let e$ = atom({
  nameColumnWidth: void 0,
  valueColumnWidths: {}
});
function e0({
  modeID: e
}) {
  let [t, i] = useAtomValueAndSetter(e$);
  let a = useRef(null);
  let s = useRef(0);
  let [o, l] = _$$i({
    onBeforeDrag() {
      let i = e ? t.valueColumnWidths[e] : t.nameColumnWidth;
      let r = e ? Gyo : Wsk;
      s.current = i ?? parsePxNumber(r);
    },
    onDrag(t) {
      let r = clamp(s.current + t.delta.x, 50, 500);
      i(t => e ? {
        ...t,
        valueColumnWidths: {
          ...t.valueColumnWidths,
          [e]: r
        }
      } : {
        ...t,
        nameColumnWidth: r
      });
    }
  });
  let d = useCallback(() => {
    i(t => {
      if (e) {
        let {
          [e]: e,
          ...r
        } = t.valueColumnWidths;
        return {
          ...t,
          valueColumnWidths: r
        };
      }
      return {
        ...t,
        nameColumnWidth: void 0
      };
    });
  }, [e, i]);
  return jsx('div', {
    'ref': a,
    'data-dragging': o || void 0,
    'onDoubleClick': d,
    ...l({
      className: 'variables_table_resizing--resizingHandle--il1Ui'
    })
  });
}
let ti = 'variables_table--background--bcZc8';
let tr = 'variables_table--row--dhAQa';
let tn = 'variables_table--cell--3uNjl';
let ta = 'variables_table--rightBorder--WzCBo';
let ts = 'variables_table--cellContents--sgYHU ellipsis--ellipsis--Tjyfa';
let to = 'variables_table--ellipsis--PKOvw ellipsis--ellipsis--Tjyfa';
let tl = parsePxNumber(a_Q);
let td = parsePxNumber(bTb);
function tc({
  name: e
}) {
  let t = e.split('/');
  let i = t.slice(0, -1);
  let n = t[t.length - 1];
  return jsxs('div', {
    className: 'variables_table--groupLabel--Mu-zB',
    children: [i.map((e, t) => jsx(_$$G2, {
      className: 'variables_table--groupLabelParent--yYqmc',
      text: e
    }, `${e}-${t}`)), jsx(_$$G2, {
      className: 'variables_table--groupLabelLast--zaKX-',
      text: n
    })]
  });
}
function tu() {
  let e = dP();
  let t = useRef(null);
  let [i, a] = useState(!1);
  let {
    currentVariableSet,
    setCurrentVariableSet,
    variablesTableColumns,
    variablesTableData,
    selectedVariable,
    selectedRowIndex,
    setSelectedVariable
  } = function () {
    let e = performance.now();
    let t = oy();
    let i = yp();
    let [r, a] = R6(i);
    let s = function (e, t) {
      let i = vo(e);
      return useMemo(() => {
        if (!e) return [];
        let r = i.filter(e => !t || t === _$$eb || e.name === t || e.name.startsWith(`${t}/`));
        return flatten(r.map((t, i) => {
          let r = [];
          let n = t.variables.map(i => {
            let r = e.modes.map(e => ({
              variable: i,
              modeId: e.id
            }));
            let n = i.name.split('/');
            let a = i.name.includes('/') ? n[n.length - 1] : i.name;
            let s = i?.resolvedType !== void 0 ? Hr(i.resolvedType) : void 0;
            return {
              id: i.node_id,
              type: i.resolvedType,
              name: a,
              group: t.name,
              variableId: i.node_id,
              content: r,
              variableTypeForTracking: s
            };
          });
          t.name !== '' && t.variables.length > 0 && r.push({
            id: `group${i}`,
            isDividerRow: !0,
            content: t.name
          });
          r.push(...n);
          return r;
        }));
      }, [t, e, i]);
    }(r, useAtomWithSubscription(bE));
    let o = A8();
    let l = _$$i_();
    let d = useMemo(() => s.findIndex(e => e.variableId === o), [s, o]);
    let c = useMemo(() => {
      let e = r ? r.modes.map(e => {
        let t = r.modes.length === 1 && e.name === nm ? getI18nString('variables.create_modal.value_label') : e.name;
        return {
          id: e.id,
          label: t
        };
      }) : [];
      return {
        currentVariableSet: r,
        setCurrentVariableSet: a,
        variablesTableColumns: [{
          id: 'name',
          label: getI18nString('dev_handoff.variables.table_column_name')
        }, ...e],
        variablesTableData: s,
        selectedRowIndex: d,
        selectedVariable: o,
        setSelectedVariable: l
      };
    }, [r, s, d, o, l, a]);
    t('table', performance.now() - e, {
      type: 'data'
    });
    return c;
  }();
  let _ = EB();
  useEffect(() => {
    _ && setCurrentVariableSet(_);
  }, [_, setCurrentVariableSet]);
  let x = useCallback(() => {
    setSelectedVariable(null);
  }, [setSelectedVariable]);
  let y = Te({
    count: variablesTableData.length,
    getScrollElement: () => t.current,
    estimateSize: e => variablesTableData[e] && tm(variablesTableData[e]) ? td : tl,
    overscan: 20,
    measureElement: e => e.getBoundingClientRect().height + 1
  });
  useEffect(() => {
    !i && selectedRowIndex && selectedRowIndex !== -1 && (y.scrollToIndex(selectedRowIndex, {
      align: 'center'
    }), a(!0));
  }, [i, selectedRowIndex, y]);
  let b = function () {
    let e = useAtomWithSubscription(e$);
    return e.nameColumnWidth ? `${e.nameColumnWidth}px` : Wsk;
  }();
  let C = function (e) {
    let t = useAtomWithSubscription(e$);
    let i = e?.length === 1;
    if (!e) return '';
    if (i) {
      let i = e[0];
      let r = t.valueColumnWidths[i?.id || ''] ?? Gyo;
      return `minmax(${r}, auto)`;
    }
    return e.map((i, r) => {
      let n = t.valueColumnWidths[i.id];
      let a = n ? `${n}px` : Gyo;
      return r === e.length - 1 ? `${a} minmax(${Gyo}, auto)` : a;
    }).join(' ');
  }(currentVariableSet?.modes);
  let v = _$$u(selectedVariable || void 0);
  let T = useAtomWithSubscription(_$$$);
  let S = useMemo(() => ({
    numColumns: variablesTableColumns?.length,
    numRows: variablesTableData?.length,
    variableType: v?.resolvedType !== void 0 ? Hr(v.resolvedType) : void 0,
    entrypoint: T
  }), [v?.resolvedType, variablesTableColumns?.length, variablesTableData?.length, T]);
  if (!zL()) {
    return jsx('div', {
      className: ti,
      children: jsx('div', {
        className: 'variables_table--loadingWrapper--WdL0z',
        style: {
          left: e
        },
        children: jsx(_$$k2, {
          size: 'lg'
        })
      })
    });
  }
  let j = !!currentVariableSet;
  let I = variablesTableData.length === 0;
  let k = currentVariableSet?.modes.length === 1;
  let N = `${b} ${C}`;
  return jsx(_$$tH, {
    boundaryKey: 'varTable',
    fallback: H4.DEFAULT_FULL_PAGE,
    team: _$$e.DEVELOPER_TOOLS,
    sentryTags: {
      area: _$$e.DEVELOPER_TOOLS
    },
    hasCustomWASMBuild: !1,
    children: jsx(gs, {
      name: 'full_table',
      trackingProps: S,
      children: jsx('div', {
        className: ti,
        children: jsxs('div', {
          className: 'variables_table--fullTableView--CVdEq',
          style: {
            left: e
          },
          children: [jsx(th, {
            title: currentVariableSet?.name
          }), jsx('div', {
            className: 'variables_table--tableWrapper---mT7S',
            children: j ? I ? jsx(fQ, {
              title: getI18nString('variables.authoring_modal.no_variables_in_collection'),
              text: getI18nString('dev_handoff.variables.table_collection_empty')
            }) : jsxs(Fragment, {
              children: [jsx('div', {
                className: 'variables_table--scrollContainer--rlU7K',
                ref: t,
                children: jsxs(Zu, {
                  'gridColumnSizes': N,
                  'style': {
                    height: y.getTotalSize() + parsePxNumber(wxr)
                  },
                  'className': P()('variables_table--stickyTopOverride--A1TnP', 'variables_table--stickyLeftOverride--mSdpV'),
                  'stickyTop': !0,
                  'stickyLeft': !0,
                  'aria-label': getI18nString('dev_handoff.variables.table_aria-label'),
                  'aria-describedby': 'dev_mode_variables_table_title',
                  'aria-rowcount': variablesTableData.length,
                  'children': [jsxs($y, {
                    className: tr,
                    children: [variablesTableColumns.map((e, t) => {
                      let i = t === 0;
                      let n = t === variablesTableColumns.length - 1;
                      return jsxs(Jy, {
                        className: P()(tn, {
                          [ta]: t < variablesTableColumns.length - 1 || !k,
                          'variables_table--nameHeaderCell--TM9iU': i
                        }),
                        children: [jsx('div', {
                          className: P()(to, 'variables_table--headerText--uHXN6'),
                          children: e.label
                        }), (!k || !n) && jsx(e0, {
                          modeID: i ? void 0 : e.id
                        })]
                      }, e.id);
                    }), jsx(Jy, {})]
                  }), jsx('tr', {
                    style: {
                      height: y.getVirtualItems()[0]?.start ?? 0,
                      marginTop: -1
                    }
                  }), y.getVirtualItems().map(e => {
                    let t = variablesTableData[e.index];
                    let i = tm(t);
                    let n = !i && t.variableId === selectedVariable;
                    return jsx(_$$y, {
                      isSelected: n,
                      children: jsx(tp, {
                        isDivider: i,
                        variableId: t.variableId ?? '',
                        selectedVariableId: selectedVariable,
                        setSelectedVariable,
                        variableTypeForTracking: t.variableTypeForTracking,
                        children: i ? jsx(Jy, {
                          className: P()(tn, 'variables_table--groupDividerCell--DWXGW'),
                          children: jsx('div', {
                            'className': P()('variables_table--itemPlainText--5KrPr', 'variables_table--groupDivider--4bKFP', to),
                            'data-testid': `dev_handoff.variables_table.header.${t.content}`,
                            'children': jsx(tc, {
                              name: t.content
                            })
                          })
                        }) : jsxs(Fragment, {
                          children: [!!t.name && void 0 !== t.type && jsxs(Jy, {
                            className: P()(tn, 'variables_table--nameCell--tM7zv', ta),
                            children: [jsx(_$$i2, {
                              type: t.type
                            }), jsx('div', {
                              className: ts,
                              children: jsx(eW, {
                                name: t.name,
                                variableId: t.variableId,
                                isCopyable: n,
                                isSelected: n,
                                variableTypeForTracking: t.variableTypeForTracking
                              })
                            }), jsx(e0, {})]
                          }), Array.isArray(t.content) && t.content.map((e, i) => {
                            let a = i === t.content.length - 1;
                            return jsxs(Jy, {
                              className: P()(tn, !k && ta),
                              children: [jsx('div', {
                                className: ts,
                                children: jsx(eK, {
                                  variable: e.variable,
                                  modeId: e.modeId,
                                  isCopyable: n,
                                  variableTypeForTracking: t.variableTypeForTracking
                                })
                              }), (!k || !a) && jsx(e0, {
                                modeID: e.modeId
                              })]
                            }, `${e.variable.node_id}-${e.modeId}`);
                          })]
                        })
                      })
                    }, t.id);
                  })]
                })
              }), selectedVariable && jsxs('div', {
                className: 'variables_table--detailsSidePanel--U-Z97',
                children: [jsxs('div', {
                  className: 'variables_table--detailsSidePanelHeader--pF3Tn',
                  children: [renderI18nText('dev_handoff.variables.details_title'), jsx(_$$K, {
                    'aria-label': getI18nString('general.close'),
                    'htmlAttributes': {
                      'data-tooltip-type': KindEnum.TEXT,
                      'data-tooltip': getI18nString('general.close')
                    },
                    'onClick': x,
                    'children': jsx(_$$A, {})
                  })]
                }), jsx(_$$a, {
                  variableId: selectedVariable,
                  onClose: x,
                  surface: 'full_table_sidebar',
                  entryPoint: ModalWindowType.FullTable
                })]
              })]
            }) : jsx(fQ, {
              title: getI18nString('variables.authoring_modal.no_variables_in_file'),
              text: getI18nString('dev_handoff.variables.table_empty')
            })
          })]
        })
      })
    })
  });
}
function tp({
  isDivider: e,
  variableId: t,
  setSelectedVariable: i,
  selectedVariableId: a,
  variableTypeForTracking: s,
  children: o
}) {
  let l = ON();
  let d = useCallback(e => {
    e.stopPropagation();
    a || l('variable_clicked', {
      variableType: s
    });
    i(a === t ? null : t);
  }, [a, i, l, t, s]);
  let c = useHandleMouseEvent(`dev_handoff.variables_table.row-${t}`, 'click', d);
  let u = !e && t === a;
  return jsx($y, {
    className: P()(tr, {
      'variables_table--divider--TKqZt': e,
      'variables_table--selected--rNRXH': u
    }),
    onMouseDown: c,
    children: o
  });
}
function th({
  title: e
}) {
  let t = Ww();
  let i = Um();
  let s = useSelector(e => e.multiplayer);
  let o = selectCurrentFile();
  let l = selectCurrentUser();
  let d = _6();
  let c = useDispatch();
  let u = useSelector(e => 'devModeVariablesTableBackFocusId' in e.selectedView ? e.selectedView.devModeVariablesTableBackFocusId : void 0);
  let p = Xr(_$$$);
  let m = useCallback(() => {
    p(null);
    c(selectViewAction({
      ...d,
      view: 'fullscreen',
      editorType: FEditorType.DevHandoff,
      showDevModeVariablesTable: !1,
      devModeFocusId: u
    }));
  }, [c, d, p, u]);
  return jsxs('div', {
    className: 'variables_table--header--412jw',
    children: [jsxs('div', {
      className: _$$s.flex.itemsCenter.$,
      children: [jsx(_$$K, {
        'aria-label': getI18nString('general.close'),
        'htmlAttributes': {
          'data-tooltip-type': KindEnum.TEXT,
          'data-tooltip': getI18nString('general.close')
        },
        'onClick': m,
        'recordingKey': 'dev_handoff.variables_table.close',
        'children': jsx(_$$A, {})
      }), jsx('div', {
        'className': 'variables_table--title--16SxT',
        'data-testid': 'dev_handoff.variables_table.title',
        'id': 'dev_mode_variables_table_title',
        'children': e
      })]
    }), jsxs('div', {
      className: _$$s.flex.itemsCenter.gap4.$,
      children: [t && jsx(v7, {
        dropdownShown: i,
        multiplayer: s,
        currentUser: t,
        onUserClick: lQ,
        disableFollowing: !0
      }), o && jsx(_$$w, {
        user: l,
        editingFile: o,
        isFileInWorkshop: !1,
        appendedClassname: 'variables_table--shareButton--UM0c4'
      })]
    })]
  });
}
function tm(e) {
  return !0 === e.isDividerRow && typeof e.content == 'string';
}
function t9() {
  let e = useDispatch();
  return _$$f4('dismissed_dev_mode_overview_banner') || isVsCodeEnvironment() ? null : jsx(TrackingProvider, {
    name: 'Dev Mode Overview Banner',
    properties: {
      severity: _$$c.EVENT
    },
    children: jsxs(BannerInset, {
      variant: 'success',
      onDismiss: () => {
        e(postUserFlag({
          dismissed_dev_mode_overview_banner: !0
        }));
      },
      children: [jsx(BannerMessage, {
        title: getI18nString('dev_handoff.workflows.overview.banner.title'),
        children: renderI18nText('dev_handoff.workflows.overview.banner.subtitle')
      }), jsx(_$$N2, {
        href: 'https://help.figma.com/hc/articles/23918228264855',
        newTab: !0,
        children: renderI18nText('dev_handoff.workflows.overview.banner.learn_more')
      })]
    })
  });
}
let ie = memo(e => {
  return jsx('svg', {
    width: '16',
    height: '16',
    fill: 'none',
    viewBox: '0 0 16 16',
    ...e,
    children: jsx('path', {
      fill: 'var(--color-icon)',
      d: 'M9.644 2.522a.5.5 0 0 1 .335.622l-3 10a.5.5 0 0 1-.957-.287l3-10a.5.5 0 0 1 .622-.335M4.147 5.147a.5.5 0 0 1 .707.707L2.708 8l2.146 2.147a.5.5 0 0 1-.707.707l-2.5-2.5a.5.5 0 0 1 0-.707zm7 0a.5.5 0 0 1 .707 0l2.5 2.5a.5.5 0 0 1 0 .707l-2.5 2.5a.5.5 0 0 1-.707-.707L13.293 8l-2.146-2.146a.5.5 0 0 1 0-.707'
    })
  });
});
let iu = 'overview--background--LdDDC';
let ip = 'overview--overviewBase--8lImP';
let ih = 'overview--withInsetEditorEnabled--ktYXp';
let im = 'overview--focusViewLink--PFEvh';
let ig = 'overview--overviewRecentActivityRow--uTKSo';
let i_ = 'overview--overviewRecentActivity--JwGnv';
let ix = 'overview--editInfo--PHbLh';
let iy = 'overview--timestamp--EH-pe';
let ib = 'overview--avatarIcon--c711v';
let iC = 'overview--editedIcon--MhN1N';
function iv({
  showDescription: e,
  previewUrl: t,
  onClick: i
}) {
  return jsxs(LinkPrimitive, {
    className: P()(i_, im),
    href: t,
    onClick: i,
    children: [jsxs('div', {
      className: ix,
      children: [jsx(Qp, {
        className: 'overview--avatarLoading--jMjJk',
        animationType: JR.NO_SHIMMER
      }), jsx(Qp, {
        className: 'overview--editInfoRecentActivityLoading--w-QoB overview--editInfoRecentActivity---jsVr',
        animationType: JR.NO_SHIMMER
      })]
    }), e && jsx(Qp, {
      className: 'overview--editDescriptionLoading--hrI6B',
      animationType: JR.NO_SHIMMER
    })]
  });
}
function iE({
  user: e,
  icon: t,
  editedString: i
}) {
  return jsxs('div', {
    className: ix,
    children: [jsxs('div', {
      className: 'overview--avatarContainer--OD44p',
      children: [jsx(H8, {
        user: e,
        size: 24
      }), t]
    }), jsx('div', {
      className: 'overview--editInfoRecentActivity---jsVr',
      children: jsx('span', {
        className: 'overview--editInfoUser--P4GkS',
        children: i
      })
    })]
  });
}
function iT(e, t, i) {
  if (!e || i) return null;
  switch (e.status) {
    case BuildStatus.BUILD:
      return jsx(ie, {
        className: P()(t ? iC : 'overview--readyIcon--A94uc', ib)
      });
    case BuildStatus.COMPLETED:
      return jsx(_$$l, {
        className: P()(t ? iC : 'overview--completedIcon--9Nbjl', ib)
      });
  }
  return null;
}
function iw({
  nodeId: e,
  user: t,
  previewUrl: i,
  isFallbackForLegacyStatus: n,
  onClick: a
}) {
  let s = Fk(t => t.get(e)?.getStatusInfo(), e);
  let o = _$$ei(e);
  let l = Ak(o?.lastEditedAt);
  let d = selectCurrentFile();
  let c = useCanAccessFullDevMode();
  if (!t) {
    return jsx(iv, {
      previewUrl: i,
      onClick: a
    });
  }
  let u = s && d && _$$y2(s, d);
  return jsxs('div', {
    className: ig,
    children: [jsx(LinkPrimitive, {
      className: P()(i_, im),
      href: i,
      onClick: a,
      children: jsx(iE, {
        user: t,
        icon: iT(s, !0, n),
        editedString: renderI18nText('dev_handoff.workflows.edit_info.edited', {
          user: t.handle,
          dateFromNow: jsx('span', {
            className: iy,
            children: l
          })
        })
      })
    }), u && c && jsx(ij, {
      nodeId: e,
      isEdited: !0
    })]
  });
}
function iS({
  nodeId: e,
  user: t,
  description: i,
  previewUrl: n,
  isFallbackForLegacyStatus: a,
  onClick: s
}) {
  let o = Fk(t => t.get(e)?.getStatusInfo(), e);
  let d = o?.lastUpdateUnixTimestamp ? 1e3 * o.lastUpdateUnixTimestamp : null;
  let c = Ak(d);
  let u = selectCurrentFile();
  if (!d) {
    return jsx(iw, {
      nodeId: e,
      user: t,
      previewUrl: n,
      isFallbackForLegacyStatus: a,
      onClick: s
    });
  }
  if (!o || !t) {
    return jsx(iv, {
      showDescription: !!i,
      previewUrl: n,
      onClick: s
    });
  }
  let p = TR(o.status, o.prevStatus)?.toLowerCase();
  if (!p) {
    return jsx(iw, {
      nodeId: e,
      user: t,
      previewUrl: n,
      isFallbackForLegacyStatus: a,
      onClick: s
    });
  }
  let m = o.status === BuildStatus.BUILD && (o.status === o.prevStatus || !!o.description);
  let f = u && _$$y2(o, u);
  let g = m ? renderI18nText('dev_handoff.workflows.edit_info.updated_design', {
    user: t.handle,
    dateFromNow: jsx('span', {
      className: iy,
      children: c
    })
  }) : renderI18nText('dev_handoff.workflows.edit_info.marked', {
    user: t.handle,
    status: p,
    dateFromNow: jsx('span', {
      className: iy,
      children: c
    })
  });
  return jsxs('div', {
    className: ig,
    children: [jsxs(LinkPrimitive, {
      className: P()(i_, im),
      href: n,
      onClick: s,
      children: [jsx(iE, {
        user: t,
        icon: iT(o, !1, a),
        editedString: g
      }), !!i && jsx('div', {
        className: 'overview--editDescription--rb1Qn',
        children: i
      })]
    }), m && f && jsx(ij, {
      nodeId: e,
      isEdited: !1
    })]
  });
}
function ij({
  nodeId: e,
  isEdited: t
}) {
  let i = useDispatch();
  let n = selectCurrentFile()?.key;
  let s = trackFileEventWithStore();
  let l = async () => {
    let r;
    let a = null;
    if (n && (s('Dev Mode Activity Compare Changes', {
      source: 'compare_previous_overview'
    }), (a = await subscribeAndAwaitData(DevModeActivity, {
      fileKey: n,
      nodeId: e
    })).file.status === 'loaded' && a.file.data)) {
      let n = a.file.data.devModeActivity.filter(e => e.activityType === FEventType.STATUS_CHANGE).sort((e, t) => t.timestamp.getTime() - e.timestamp.getTime());
      if (r = t || n.length === 1 ? n[0] : n[1], r?.version?.id) {
        L$(r.version?.id, i, !0, e);
        return;
      }
    }
    i(VisualBellActions.enqueue({
      message: getI18nString('dev_handoff.compare_changes.button.failed'),
      error: !0
    }));
    reportError(_$$e.DEVELOPER_TOOLS, new Error('Open compare changes button failed'), {
      extra: {
        fileKey: n,
        activityInfoStatus: a?.file.status,
        activityInfoStatusError: a?.file.status === 'error' ? a?.file.error : void 0,
        activitiesLength: a?.file.status === 'loaded' && a.file.data?.devModeActivity.length,
        prevActivityId: r?.id,
        prevActivityVersionId: r?.version?.id
      }
    });
  };
  return jsx(Button, {
    variant: 'secondary',
    onClick: l,
    children: renderI18nText('inspect_panel.history.compare_changes')
  });
}
let iA = setupRemovableAtomFamily(() => atom(''), {
  preserveValue: !1
});
let iL = 'performance.dev_mode.workflows.overview.time_to_first_thumbnail';
let iR = new PerfTimer(iL, {});
let iD = createTrackedAtom(void 0);
let iM = createTrackedAtom(!1);
let iG = 2 * parsePxNumber(Evg);
let iK = iG / RtY;
let iH = iG / 8;
let iz = iK / 8;
function iV(e) {
  let t = useMemo(() => e.tabs.reduce((e, t) => (e[t.key] = !0, e), {
    [oz.ALL]: !1,
    [oz.RECENTLY_VIEWED]: !1,
    [oz.BUILD]: !1,
    [oz.COMPLETED]: !1
  }), [e.tabs]);
  let [i, a, s] = _$$t2.useManagedTabs(t, e.selected, e.onTabSelected);
  return jsx(_$$t2.TabStrip, {
    manager: s,
    children: e.tabs.map(t => {
      let n = t.key === e.selected;
      return jsxs(_$$t2.Tab, {
        ...i[t.key],
        children: [t.label, void 0 !== t.count && jsx(_$$s2, {
          count: t.count,
          isInTab: !0,
          isActive: n
        })]
      }, t.key);
    })
  });
}
let iW = setupRemovableAtomFamily(() => atom(!1), {
  preserveValue: !1
});
function iY() {
  let e = selectCurrentFile();
  let t = useDispatch();
  let i = selectCurrentUser();
  let s = Um();
  let o = useSelector(e => e.multiplayer);
  let l = useMemo(() => o.allUsers.find(e => e.sessionID === o.sessionID) || null, [o.allUsers, o.sessionID]);
  let d = dR();
  let c = B4();
  let u = useCallback(e => {
    Lx(e, l?.sessionID, t, !1, o, d, c);
  }, [l?.sessionID, t, o, d, c]);
  return jsxs('div', {
    className: 'overview--toolbarRightItems--tjF72',
    children: [o && e && l && jsx(v7, {
      dropdownShown: s,
      multiplayer: o,
      currentUser: l,
      onUserClick: u
    }), e && jsx(_$$w, {
      user: i,
      editingFile: e,
      isFileInWorkshop: !1,
      appendedClassname: 'overview--shareButton--5BlrF'
    })]
  });
}
let iJ = createValidatedLocalStorageAtom('workflows_summary_tab', oz.ALL, _$$z.nativeEnum(oz));
let iq = setupRemovableAtomFamily(() => atom({}), {
  preserveValue: !0
});
let iX = createValidatedLocalStorageAtom('workflows_overview_sorted_by', _$$_2.RECENT, _$$z.nativeEnum(_$$_2));
function iZ() {
  let e = useSelector(e => e.selectedView.overviewBackButtonTargetNodeId);
  let t = useSelector(e => e.mirror.appModel.pagesList[0]);
  let i = function () {
    let e = useSelector(e => e.mirror.appModel.pagesList);
    let t = getObservableOrFallback(AppStateTsApi.currentSceneState().numReadyNodesByPage);
    let i = getObservableOrFallback(AppStateTsApi.currentSceneState().numCompletedNodesByPage);
    return useMemo(() => e.filter(e => {
      let r = e.nodeId;
      let n = t.has(r) ? t.get(r) > 0 : Fullscreen.nodeStatusesOnPage(r).includes(BuildStatus.BUILD);
      let a = i.has(r) ? i.get(r) > 0 : Fullscreen.nodeStatusesOnPage(r).includes(BuildStatus.COMPLETED);
      return n || a;
    }), [e, t, i]);
  }()[0];
  let s = e || i?.nodeId || t?.nodeId;
  let o = ZJ();
  let d = TP(void 0, s);
  let c = useSelector(e => selectedViewToPath(e, d));
  let u = n0();
  let p = VS({
    pagesList: u,
    isComparingChanges: !1
  });
  return s ? jsx(RecordableAnchor, {
    'className': 'overview--backLink--vAo8c',
    'onClick': function (e) {
      e.preventDefault();
      s ? p(s).then(() => {
        o('overview_back_clicked');
      }) : o('overview_back_clicked');
    },
    'href': c,
    'data-testid': 'dev_handoff.workflows.overview.back_button',
    'recordingKey': 'dev_handoff.workflows.overview.back_button',
    'aria-label': getI18nString('dev_handoff.workflows.overview.back_to_page_tooltip'),
    'data-tooltip': getI18nString('dev_handoff.workflows.overview.back_to_page_tooltip'),
    'data-tooltip-type': KindEnum.TEXT,
    'children': jsx(_$$C, {})
  }) : null;
}
function iQ() {
  let e = useCanAccessFullDevMode();
  let t = selectCurrentFile()?.key;
  let i = dP();
  isVsCodeEnvironment() && getFeatureFlags().dt_vscode_ready_for_dev && (i = 0);
  let s = trackFileEventWithStore();
  let o = function () {
    let [e, t] = useAtomValueAndSetter(iD);
    return useCallback(i => {
      e || (t({
        source: i
      }), iR.start());
    }, [e, t]);
  }();
  let c = _6();
  let u = useDispatch();
  _$$O3();
  let p = getObservableOrFallback(AppStateTsApi.currentSceneState().nodesWithStatusForFile);
  let f = useRef(null);
  let [g, _] = useAtomValueAndSetter(gk);
  let [x, y] = useAtomValueAndSetter(iX);
  let v = useCallback(e => {
    s('Dev Mode Overview Sort Changed', {
      sort: e
    });
    y(e);
  }, [y, s]);
  let E = e ? x : _$$_2.PAGE;
  let [T, w] = useAtomValueAndSetter(iJ);
  let S = n9(t);
  let {
    setSearchString,
    searchString,
    searchFilter,
    searchActive
  } = function () {
    let [e, t] = useAtomValueAndSetter(iA);
    let i = trackFileEventWithStore();
    let r = useMemo(() => function (e) {
      let t = e ? new Ax(e.toLowerCase()) : null;
      return {
        filter: e => {
          let i = t ? t.matchAgainst(e) : null;
          return !i || !!i.find(e => e.score > 0);
        }
      };
    }(e), [e]);
    let a = useCallback(e => r.filter([e.nodeName, e.pageName, e.description]), [r]);
    let s = useDebouncedCallback(() => {
      i('Dev Mode Overview Search', {});
    }, 1e3);
    return {
      setSearchString: useCallback(e => {
        t(e);
        s();
      }, [t, s]),
      searchString: e,
      searchFilter: a,
      searchActive: e.length > 0
    };
  }();
  let A = useMemo(() => p.filter(e => e.status === BuildStatus.BUILD && searchFilter(e)), [p, searchFilter]);
  let O = useMemo(() => p.filter(e => e.status === BuildStatus.COMPLETED && searchFilter(e)), [p, searchFilter]);
  let L = useMemo(() => {
    switch (T) {
      case oz.ALL:
        return p.filter(searchFilter);
      case oz.RECENTLY_VIEWED:
        if (!S) return [];
        return Object.entries(S).reduce((e, [t, i]) => {
          let r = p.find(e => e.nodeId === t && searchFilter(e));
          r && e.push({
            ...r,
            lastViewedTimestamp: i
          });
          return e;
        }, []);
      case oz.BUILD:
        return A;
      case oz.COMPLETED:
        return O;
    }
  }, [p, T, S, searchFilter, A, O]);
  let R = useMemo(() => [{
    key: oz.ALL,
    label: getI18nString('dev_handoff.workflows.overview.tab_all')
  }, ...(getFeatureFlags().dt_workflows_recently_viewed ? [{
    key: oz.RECENTLY_VIEWED,
    label: getI18nString('dev_handoff.workflows.overview.tab_recent')
  }] : []), {
    key: oz.BUILD,
    count: A.length,
    label: getI18nString('dev_handoff.workflows.overview.tab_ready')
  }, {
    key: oz.COMPLETED,
    count: O.length,
    label: getI18nString('dev_handoff.workflows.overview.tab_completed')
  }], [A.length, O.length]);
  let D = useMemo(() => {
    if (L.length === 0) return [];
    if (T === oz.RECENTLY_VIEWED) {
      return [{
        key: 'recent',
        sortedNodesWithStatusForFile: L.slice().sort(YA)
      }];
    }
    switch (E) {
      case _$$_2.PAGE:
        let e = {};
        L.slice().sort((e, t) => e.visualOrder - t.visualOrder).forEach(t => {
          e[t.pageId] || (e[t.pageId] = {
            key: t.pageId,
            pageId: t.pageId,
            pageName: t.pageName,
            sortedNodesWithStatusForFile: []
          });
          e[t.pageId].sortedNodesWithStatusForFile.push(t);
        });
        return Object.values(e);
      case _$$_2.RECENT:
        return [{
          key: 'recent',
          sortedNodesWithStatusForFile: L.slice().sort((e, t) => t.updatedAt - e.updatedAt)
        }];
      case _$$_2.ALPHABETICAL:
        return [{
          key: 'alphabetical',
          sortedNodesWithStatusForFile: L.slice().sort((e, t) => e.nodeName.localeCompare(t.nodeName))
        }];
    }
  }, [T, L, E]);
  let [M, F] = useAtomValueAndSetter(iq);
  useEffect(() => {
    F(e => {
      let t = {
        ...e
      };
      D.forEach(({
        pageId: e
      }) => {
        e && void 0 === t[e] && (t[e] = !0);
      });
      return t;
    });
  }, [F, D]);
  let B = useCallback(e => {
    F(t => {
      let i = {
        ...t
      };
      i[e] = !i[e];
      return i;
    });
  }, [F]);
  let {
    numSections,
    numFrames,
    numPages
  } = useMemo(() => ({
    numSections: p.filter(e => e.isSection).length,
    numFrames: p.filter(e => !e.isSection).length,
    numPages: new Set(p.map(e => e.pageId)).size
  }), [p]);
  let H = US();
  !function ({
    nodesWithStatusForFile: e,
    enabled: t
  }) {
    let [i, r] = useAtomValueAndSetter(iW);
    let a = useRef();
    let s = _$$eY();
    useEffect(() => {
      if (!t) return;
      let n = 0;
      let o = 0;
      let l = performance.now();
      if (void 0 === a.current && (a.current = new Set()), e.forEach(e => {
        if (!a.current.has(e.nodeId)) {
          n++;
          let t = performance.now();
          s.get(e.nodeId)?.materializeDescendants();
          let i = performance.now() - t;
          i > o && (o = i);
          a.current.add(e.nodeId);
        }
      }), !i) {
        let e = performance.now() - l;
        trackEventAnalytics('performance.dev_mode.workflows.overview.materialize_nodes', {
          nodeCount: n,
          worstNodeMs: o,
          elapsedMs: e
        }, {
          forwardToDatadog: !0
        });
        r(!0);
      }
    }, [e, a, s, i, r, t]);
  }({
    enabled: H,
    nodesWithStatusForFile: p
  });
  let [z, V] = useState(!1);
  let W = useCallback(() => {
    V(!0);
    _(f.current?.scrollTop);
  }, [_]);
  let [Y] = useAtomValueAndSetter(_o);
  _$$h3(() => {
    let t = Y || 'init';
    s('Dev Mode Overview Shown', {
      type: e ? 'full' : 'lite',
      source: t
    }, {
      forwardToDatadog: !0
    });
    o(t);
    clearSelection();
  });
  let J = [...new Set(L.map(e => e.userId).filter(e => e))];
  let q = zy(J);
  c7(L, T, E);
  zz(J, q, L);
  let X = useCallback(e => {
    s('Dev Mode Overview Tab Clicked', {
      tab: e
    });
    w(e);
  }, [w, s]);
  if (useEffect(() => {
    c.view === 'fullscreen' && c.commentThreadId && _$(u, c, 'overview_open_notification');
  }, [u, c]), !H || z) {
    return jsx('div', {
      className: iu,
      children: jsx('div', {
        className: P()(ip, 'overview--overviewSpinner--zv-dq', ih),
        style: {
          left: i
        },
        children: jsx(_$$k2, {
          size: 'lg'
        })
      })
    });
  }
  let Z = '';
  numSections > 0 && (Z += getI18nString('dev_handoff.workflows.overview.sections_count', {
    count: numSections
  }));
  numFrames > 0 && (numSections > 0 && (Z += ', '), Z += getI18nString('dev_handoff.workflows.overview.frames_count', {
    count: numFrames
  }));
  numSections + numFrames > 0 && (Z += ` ${getI18nString('dev_handoff.workflows.overview.pages_count', {
    count: numPages
  })}`);
  let Q = D.length === 0;
  let $ = {
    left: i
  };
  isVsCodeEnvironment() && getFeatureFlags().dt_vscode_ready_for_dev && ($.margin = '0px');
  return jsx('div', {
    className: iu,
    children: jsxs('div', {
      className: P()(ip, ih),
      style: $,
      children: [getFeatureFlags().dt_vscode_ready_for_dev && isVsCodeEnvironment() ? jsx(_$$f3, {
        isOnReadyForDevPage: !0,
        children: e && jsx(i0, {
          value: searchString,
          onChange: setSearchString
        })
      }) : jsxs('div', {
        className: 'overview--overviewHeader--BBr9p',
        children: [jsx(iZ, {}), jsxs('div', {
          className: 'overview--overviewTitle--gEd5D text--fontPos13--xW8hS text--_fontBase--QdLsd',
          children: [jsx('div', {
            className: 'overview--overviewTitleIcon--NvF-4',
            children: jsx(_$$O, {})
          }), jsx('h1', {
            children: renderI18nText('dev_handoff.workflows.overview.title')
          })]
        }), jsx('div', {
          className: 'overview--overviewTitleInfo--3e2oX text--fontPos11--2LvXf text--_fontBase--QdLsd',
          children: jsx('span', {
            children: Z
          })
        }), jsx(i8, {}), jsx('div', {
          className: 'overview--overviewHeaderSpacer--oRKTg'
        }), e && jsx(i0, {
          value: searchString,
          onChange: setSearchString
        }), jsx(iY, {})]
      }), jsx('div', {
        className: 'overview--bannerWrapper--D8N5z',
        children: jsx(t9, {})
      }), jsxs('div', {
        className: 'overview--scrollAndEmptyMessage--3hOyM',
        children: [Q && jsx('span', {
          className: 'overview--emptyMessage--lyEC8',
          children: searchActive ? renderI18nText('dev_handoff.workflows.overview.empty_message_search') : jsx('div', {
            className: _$$s.preWrap.$,
            children: renderI18nText('dev_handoff.workflows.overview.no_designs', {
              status: function (e) {
                switch (e) {
                  case oz.BUILD:
                    return renderI18nText('dev_handoff.workflows.overview.no_designs_ready');
                  case oz.COMPLETED:
                    return renderI18nText('dev_handoff.workflows.overview.no_designs_completed');
                  default:
                    return renderI18nText('dev_handoff.workflows.overview.no_designs_ready');
                }
              }(T),
              link: jsx('span', {
                className: 'overview--learnMoreLink--Yrujk',
                children: jsx(_$$N, {
                  href: 'https://help.figma.com/hc/articles/23918228264855',
                  trusted: !0,
                  newTab: !0,
                  children: renderI18nText('dev_handoff.workflows.overview.learn_more')
                })
              })
            })
          })
        }), jsx(_$$P2, {
          className: 'overview--overviewNodesScrollContainer--uc1ey',
          scrollContainerRef: f,
          initialScrollTop: g,
          children: jsxs('div', {
            className: 'overview--overviewNodesScrollContainerContents--fTO-e',
            children: [e && jsxs('div', {
              className: 'overview--overviewTabsContainer--sjuS-',
              children: [jsx(iV, {
                tabs: R,
                selected: T,
                onTabSelected: X
              }), T !== oz.RECENTLY_VIEWED && jsx(i7, {
                sortedBy: E,
                setSortedBy: v
              })]
            }), !Q && jsx('div', {
              className: 'overview--overviewNodesContainer--P3anz',
              children: jsx('div', {
                className: 'overview--overviewSections--2H4Qw',
                children: D.map(({
                  key: e,
                  pageId: t,
                  pageName: i,
                  sortedNodesWithStatusForFile: n
                }) => {
                  let a = !t || M[e];
                  return jsx(i1, {
                    isExpanded: a,
                    pageId: t,
                    pageName: i,
                    overviewNodes: n,
                    users: q,
                    onExpandCollapseClicked: t ? () => B(t) : void 0,
                    onPreviewClick: W
                  }, e);
                })
              })
            })]
          })
        })]
      })]
    })
  });
}
function i$({
  pageName: e,
  isExpanded: t,
  onExpandCollapseClicked: i
}) {
  return jsx(ButtonPrimitive, {
    'className': 'overview--pageHeader--dubsT',
    'onClick': i,
    'aria-label': t ? getI18nString('dev_handoff.workflows.overview.collapse_page', {
      pageName: e
    }) : getI18nString('dev_handoff.workflows.overview.expand_page', {
      pageName: e
    }),
    'children': jsxs('div', {
      className: 'overview--pageHeaderContent--Bq-Ol text--fontPos13--xW8hS text--_fontBase--QdLsd',
      children: [jsx(SvgComponent, {
        svg: t ? _$$A7 : _$$A8,
        className: 'overview--caretIcon--gssmY'
      }), jsx(_$$A4, {
        className: 'overview--pageIcon--w9-M7'
      }), jsx('span', {
        children: e
      })]
    })
  });
}
function i0({
  value: e,
  onChange: t
}) {
  return jsx(_$$J2, {
    brand: 'dev-handoff',
    children: jsxs('div', {
      className: 'overview--searchBar--NX8cb',
      children: [jsx(_$$h2, {}), jsx(LazyInputForwardRef, {
        placeholder: getI18nString('dev_handoff.workflows.overview.search_placeholder'),
        value: e,
        onChange: e => {
          t(e.target.value);
        },
        className: 'overview--searchInput--3X9vp text--fontPos11--2LvXf text--_fontBase--QdLsd',
        spellCheck: !1
      }), !!e && jsx(_$$K, {
        'onClick': () => t(''),
        'aria-label': getI18nString('dev_handoff.workflows.overview.clear_search'),
        'htmlAttributes': {
          'data-tooltip': getI18nString('dev_handoff.workflows.overview.clear_search'),
          'data-tooltip-type': KindEnum.TEXT
        },
        'children': jsx(_$$L, {})
      })]
    })
  });
}
function i1({
  pageName: e,
  overviewNodes: t,
  users: i,
  isExpanded: n,
  onExpandCollapseClicked: a,
  onPreviewClick: s
}) {
  return jsxs(Fragment, {
    children: [e && jsx(i$, {
      pageName: e,
      isExpanded: n,
      onExpandCollapseClicked: a
    }), n && jsx('div', {
      className: 'overview--overviewNodesList--ipsOp',
      children: t.map(n => jsx(i5, {
        overviewNode: n,
        onPreviewClick: s,
        renderPageName: !e,
        users: i,
        nodeCount: t.length
      }, n.nodeId))
    })]
  });
}
function i2({
  overviewNode: e,
  onClick: t,
  renderPageName: i,
  showLastUpdated: s
}) {
  let {
    nodeId,
    isSection,
    updatedAt,
    pageName,
    nodeName,
    pageId
  } = e;
  let f = VW(nodeId, pageId);
  let g = useSelector(e => selectedViewToPath(e, f));
  let _ = useSelector(e => getSelectedViewUrl(e, f));
  let y = Cj(_);
  let b = TQ();
  let C = function (e, t) {
    let i = Fk(t => t.get(e)?.getStatusInfo(), e);
    let r = i?.lastUpdateUnixTimestamp ? 1e3 * i.lastUpdateUnixTimestamp : null;
    let n = _$$ei(e);
    let a = t ? n?.lastEditedAt : r;
    let s = Ak(a);
    return a ? s : null;
  }(nodeId, e.hasBeenEditedSinceLastStatusChange);
  let v = useMemo(() => e.hasBeenEditedSinceLastStatusChange ? renderI18nText('dev_handoff.workflows.edit_info.changed') : e.status === BuildStatus.COMPLETED ? renderI18nText('dev_handoff.status.completed') : e.status === BuildStatus.BUILD ? e.description ? renderI18nText('dev_handoff.workflows.edit_info.new version') : renderI18nText('dev_handoff.status.ready_for_dev') : renderI18nText('dev_handoff.workflows.edit_info.changed'), [e.description, e.hasBeenEditedSinceLastStatusChange, e.status]);
  let {
    getTriggerProps,
    manager
  } = _$$b();
  return jsxs('div', {
    className: 'overview--overviewNodeCardHeader--C-KTf',
    children: [jsxs(LinkPrimitive, {
      className: P()('overview--overviewNodeCardHeaderLeft--jYCXL', im),
      onClick: t,
      href: g,
      recordingKey: generateRecordingKey('dev_handoff.workflows.overview.card', nodeId),
      children: [jsxs('div', {
        className: 'overview--headerTextWrapper--BdOAz',
        children: [i && pageName && jsxs('div', {
          className: 'overview--pageNameAndChevron--5v8px',
          children: [jsx('span', {
            className: 'overview--pageName--TURV8',
            children: pageName
          }), jsx('span', {
            className: 'overview--breadCrumbSeparator--zcd8z',
            children: '/'
          })]
        }), jsxs('div', {
          className: 'overview--nodeNameAndIcon--Tl3e-',
          children: [jsx('div', {
            children: isSection ? jsx(_$$e5, {}) : jsx(_$$q2, {})
          }), jsx('span', {
            className: 'overview--nodeName--20NeF',
            children: nodeName
          })]
        })]
      }), s && updatedAt > 1 && jsx('div', {
        className: 'overview--updatedAtText--z05FL text--fontPos11--2LvXf text--_fontBase--QdLsd',
        children: renderI18nText('dev_handoff.overview_mode.design_status', {
          fromNow: C,
          status: v
        })
      })]
    }), jsxs('div', {
      className: 'overview--overviewNodeCardHeaderRight--wRNMN',
      children: [jsxs(bL, {
        manager,
        children: [jsx(_$$K, {
          ...getTriggerProps(),
          'aria-label': getI18nString('dev_handoff.workflows.more_actions_tooltip'),
          'children': jsx(_$$J, {})
        }), jsxs(mc, {
          children: [jsx(q7, {
            onClick: () => b('Dev Mode Overview Card Go To Canvas Clicked', nodeId, pageId),
            children: renderI18nText('dev_handoff.workflows.overview.show_on_page_action')
          }), jsx(q7, {
            onClick: () => y?.(),
            children: renderI18nText('dev_handoff.status.copy_focus_link')
          })]
        })]
      }), jsx(_$$p, {
        nodeId,
        isMinimal: !0,
        sourceForLogging: 'overview'
      })]
    })]
  });
}
function i3({
  overviewNode: e,
  onClick: t,
  user: i
}) {
  let {
    description,
    nodeId,
    hasBeenEditedSinceLastStatusChange
  } = e;
  let l = VW(e.nodeId);
  let d = useSelector(e => selectedViewToPath(e, l));
  return jsx(Fragment, {
    children: jsx('div', {
      className: 'overview--overviewAvatarRowMediaQueryHeader--nigbr',
      children: jsx('div', {
        className: 'overview--overviewRecentActivityHeader--sPkSZ',
        children: jsx('h2', {
          children: hasBeenEditedSinceLastStatusChange ? jsx(iw, {
            nodeId,
            user: i,
            previewUrl: d,
            isFallbackForLegacyStatus: e.isFallbackForLegacyStatus,
            onClick: t
          }) : jsx(iS, {
            nodeId,
            user: i,
            description,
            previewUrl: d,
            isFallbackForLegacyStatus: e.isFallbackForLegacyStatus,
            onClick: t
          })
        })
      })
    })
  });
}
function i5({
  overviewNode: e,
  onPreviewClick: t,
  renderPageName: i,
  users: n,
  nodeCount: s
}) {
  let o = useDispatch();
  let l = trackFileEventWithStore();
  let {
    nodeId,
    pageId,
    updatedAt
  } = e;
  let p = VW(nodeId);
  let h = useSelector(e => selectedViewToPath(e, p));
  let [m] = useAtomValueAndSetter(iX);
  let f = m === _$$_2.RECENT && updatedAt > 1;
  let [, g] = useAtomValueAndSetter(wz);
  let _ = n.usersById?.[e.userId];
  let y = f && (n.loading || _);
  function b(e) {
    e.preventDefault();
    l('Dev Mode Overview Card Clicked', {
      nodeId
    });
    g('overview');
    t();
    o(selectViewAction(p));
  }
  return jsxs('article', {
    className: 'overview--overviewNodeCard--NsmYU',
    children: [y && jsx(i3, {
      overviewNode: e,
      onClick: b,
      user: _
    }), jsxs('div', {
      className: 'overview--previewContainer--5NeGg',
      children: [jsx(i2, {
        overviewNode: e,
        onClick: b,
        renderPageName: i,
        showLastUpdated: !y
      }), jsx(i4, {
        nodeId,
        pageId,
        updatedAt,
        previewUrl: h,
        onClick: b,
        nodeCount: s
      })]
    })]
  });
}
function i4({
  nodeId: e,
  pageId: t,
  updatedAt: i,
  previewUrl: a,
  onClick: s,
  nodeCount: o
}) {
  let d = Fk((e, t, i) => S7(e, t, i) || 'var(--color-bg)', e, t);
  let c = Fk(t => t.get(e)?.size);
  let u = 1 + (5 - 5 * Math.min(1, Math.max(0, Math.max(c ? 1 - (iH - c.x) / iH : 1, c ? 1 - (iz - c.y) / iz : 1))) ** 0.5);
  let p = c ? {
    width: c.x * u,
    height: c.y * u
  } : {
    width: iG,
    height: iK
  };
  let m = Math.min(1, Math.min(iG / p.width, iK / p.height));
  let f = {
    width: Math.round(p.width * m),
    height: Math.round(p.height * m)
  };
  let g = useRef(null);
  let _ = _$$x(g, '100%');
  let x = yh({
    nodeId: e,
    width: f.width,
    height: f.height,
    shouldSkip: !_,
    version: i,
    reason: 'workflows.overview.thumbnail',
    regenerateAfterImagesLoaded: !0,
    isDevModeBlendedSection: HandoffBindingsCpp.canBeBlendedSection(e)
  });
  let y = function () {
    let [e, t] = useAtomValueAndSetter(iM);
    let [i] = useAtomValueAndSetter(iD);
    let r = trackFileEventWithStore();
    return useCallback(n => {
      if (!e && i) {
        t(!0);
        let e = iR.stop();
        r(iL, {
          nodeCount: n,
          source: i.source,
          elapsedMs: e
        }, {
          forwardToDatadog: !0
        });
      }
    }, [e, t, i, r]);
  }();
  useEffect(() => {
    x && y(o);
  }, [x, y, o]);
  return jsxs(LinkPrimitive, {
    ref: g,
    className: P()('overview--previewThumbnail--zofC5', im),
    style: {
      background: d
    },
    onClick: s,
    href: a,
    children: [x && jsx('img', {
      'src': x.src,
      'style': {
        maxWidth: x.displaySize.x,
        maxHeight: x.displaySize.y
      },
      'alt': getI18nString('dev_handoff.nodes_panel.thumbnail_aria_label'),
      'aria-label': getI18nString('dev_handoff.nodes_panel.thumbnail_aria_label')
    }), jsx(_$$J2, {
      mode: 'dark',
      children: jsx('div', {
        'className': 'overview--previewExpandIcon--nqhxn',
        'data-tooltip': getI18nString('dev_handoff.workflows.overview.card_hover_expand_tooltip'),
        'data-tooltip-type': 'text',
        'children': jsx(_$$O2, {})
      })
    })]
  });
}
let i6 = new class {
  format(e) {
    switch (e) {
      case _$$_2.PAGE:
        return getI18nString('dev_handoff.workflows.overview.sort_pages');
      case _$$_2.RECENT:
        return getI18nString('dev_handoff.workflows.overview.sort_recent');
      case _$$_2.ALPHABETICAL:
        return getI18nString('dev_handoff.workflows.overview.sort_alphabetical');
    }
  }
}();
function i7({
  sortedBy: e,
  setSortedBy: t
}) {
  return jsxs(_$$bL, {
    value: e,
    onChange: t,
    children: [jsx(l9, {
      label: jsx(HiddenLabel, {
        children: getI18nString('dev_handoff.workflows.overview.sort_by')
      })
    }), jsxs(_$$mc, {
      children: [jsx(WL, {
        children: getI18nString('dev_handoff.workflows.overview.sort_by')
      }), Object.values(_$$_2).map(e => jsx(c$, {
        value: e,
        children: i6.format(e)
      }, e))]
    })]
  });
}
function i8() {
  return jsx(_$$J2, {
    brand: 'dev-handoff',
    children: jsxs(LinkPrimitive, {
      href: 'https://form.asana.com/?k=dyYqSpHdZqetESFQzNb8hQ&d=10497086658021',
      className: 'overview--betaFeedbackBadge--PUv9s text--fontPos11--2LvXf text--_fontBase--QdLsd',
      newTab: !0,
      children: [renderI18nText('dev_handoff.workflows.overview.feedback'), jsx(SvgComponent, {
        className: 'overview--badgeIcon--rKOUQ',
        svg: _$$A6
      })]
    })
  });
}
let rU = 'hit-target-resize';
function rG(e) {
  let t = hY[e.devicePresetIdentifier].inlinePreviewInfo?.hitTargetSvgUrl;
  let [i, a] = useState(null);
  useEffect(() => {
    fetch(t).then(e => e.text()).then(e => a(e)).catch(() => console.warn('Failed to fetch hit target SVG. Falling back to rectangular resize boundary.'));
  }, [t]);
  let s = useMemo(() => i ? _$$V(i) : null, [i]);
  return s !== null ? jsx(rK, {
    ...e,
    hitTargetSvg: s
  }) : jsx(_$$K2, {
    ...e
  });
}
function rK({
  resizeTo: e,
  getCurrentContainerBounds: t,
  lockAspectRatio: i,
  isResizing: a,
  setIsResizing: s,
  onResizeEnd: o,
  setResizeDirections: l,
  devicePresetIdentifier: d,
  isDeviceRotatedCCW: c,
  hitTargetSvg: u,
  hidden: p,
  recordingKey: h
}) {
  let m = useCallback(() => {
    let e = t();
    let i = (16 / ((c ? e.bottom - e.top : e.right - e.left) / hY[d].imageSize.x)).toFixed(2);
    document.querySelectorAll(`[id^=${rU}]`).forEach(e => e.setAttribute('stroke-width', `${i}`));
  }, [d, c, t]);
  useEffect(() => {
    m();
  }, [m]);
  let f = useCallback(() => {
    m();
    o?.();
  }, [o, m]);
  let {
    startResizing
  } = _$$Q2({
    resizeTo: e,
    getCurrentContainerBounds: t,
    isResizing: a,
    setIsResizing: s,
    setResizeDirections: l,
    onResizeEnd: f,
    lockAspectRatio: i,
    hidden: p,
    recordingKey: h
  });
  let _ = useRef(null);
  let x = useRef(null);
  let y = useMemo(() => qt(d) === bq.WATCH, [d]);
  let b = useCallback(e => {
    let t = e.currentTarget.getBoundingClientRect();
    let i = e.clientX - t.left;
    let r = e.clientY - t.top;
    return y ? rz({
      x: i,
      y: r
    }, t) : rH({
      x: i,
      y: r
    }, t);
  }, [y]);
  let C = useHandleMouseEvent(h, 'mousedown', useCallback(e => {
    e.stopPropagation();
    e.preventDefault();
    startResizing(b(e), {
      x: e.clientX,
      y: e.clientY
    });
  }, [b, startResizing]), {
    recordMetadata: e => {
      let t = e.currentTarget;
      return {
        clientX: e.clientX,
        clientY: e.clientY,
        svgElementId: t.id
      };
    },
    playbackMetadata: e => ({
      currentTarget: document.querySelector(`#${e.svgElementId}`),
      clientX: e.clientX,
      clientY: e.clientY
    })
  });
  let v = useHandleMouseEvent(generateRecordingKey(h, 'deviceFrameResizeTarget'), 'mousemove', useCallback(e => {
    if (a) return SKIP_RECORDING;
    e.stopPropagation();
    e.preventDefault();
    let t = b(e);
    let i = e.currentTarget;
    x.current && i.classList.remove(x.current);
    let r = as(t);
    r && i.classList.add(r);
    x.current = r;
  }, [b, a]), {
    recordMetadata: e => {
      let t = e.currentTarget;
      return {
        clientX: e.clientX,
        clientY: e.clientY,
        svgElementId: t.id
      };
    },
    playbackMetadata: e => ({
      currentTarget: document.querySelector(`#${e.svgElementId}`),
      clientX: e.clientX,
      clientY: e.clientY
    })
  });
  let E = useCallback(e => {
    e.onmousemove = v;
    e.onmousedown = C;
  }, [C, v]);
  return (useEffect(() => {
    document.querySelectorAll(`[id^=${rU}]`).forEach(e => E(e));
  }, [d, E]), p) ? null : c ? (() => {
    let e = hY[d].imageSize;
    let t = e.x / e.y;
    return jsx('div', {
      children: jsx(SvgComponent, {
        svg: u,
        svgClassName: P()(Q0, _d, _$$iZ2),
        svgWidth: `${100 * t}%`,
        ref: _,
        useOriginalSrcFills_DEPRECATED: !0
      })
    });
  })() : jsx('div', {
    children: jsx(SvgComponent, {
      svg: u,
      svgClassName: _$$iZ2,
      ref: _,
      useOriginalSrcFills_DEPRECATED: !0
    })
  });
}
let rH = (e, t) => {
  let {
    x,
    y
  } = e;
  let n = 0.1 * Math.min(t.width, t.height);
  let a = [];
  y < n ? a.push(OP.TOP) : y > t.height - n && a.push(OP.BOTTOM);
  x < n ? a.push(OP.LEFT) : x > t.width - n && a.push(OP.RIGHT);
  return a;
};
let rz = (e, t) => {
  let {
    x,
    y
  } = e;
  let n = 0.1 * t.width;
  if (y < n) return [OP.TOP];
  if (y > t.height - n) return [OP.BOTTOM];
  if (x < n) return [OP.LEFT];
  if (x > t.width - n) return [OP.RIGHT];
  let a = [];
  y < t.height / 2 ? a.push(OP.TOP) : a.push(OP.BOTTOM);
  x < t.width / 2 ? a.push(OP.LEFT) : a.push(OP.RIGHT);
  return a;
};
let rX = {
  x: 600,
  y: 600
};
let rZ = 'inlinePreviewModal';
let rQ = () => {
  let e = getViewportX({
    subscribeToUpdates_expensive: !0
  });
  let t = getViewportY({
    subscribeToUpdates_expensive: !0
  });
  return useMemo(() => new Point(e + wR, t + wR), [e, t]);
};
let r$ = memo(({
  pageId: e,
  viewerControl: t
}) => {
  let [{
    previewKeyForErrorBoundary: i
  }, n] = useAtomValueAndSetter(t.stateAtom);
  return jsx(_$$tH, {
    boundaryKey: 'InlinePreviewModal',
    fallback: H4.NONE_I_KNOW_WHAT_IM_DOING,
    onError: () => {
      if (trackEventAnalytics('inline_preview_crashed', {}, {
        forwardToDatadog: !0
      }), n({
        type: 'HANDLE_PREVIEW_CRASHED'
      }), Lg() || isInteractionPathCheck() || isDevEnvironment()) {
        throw new Error('Inline preview crashed');
      }
    },
    children: jsx(r0, {
      pageId: e,
      viewerControl: t
    })
  }, i);
});
let r0 = memo(({
  pageId: e,
  viewerControl: t
}) => {
  let i = useRef(null);
  let s = useCurrentFileKey();
  let o = useRef(!1);
  let [{
    currentPresentedNode: d,
    navigateBackwardEnabled: c,
    navigateForwardEnabled: p,
    modalStatus: h,
    sizeInfo: m,
    showDeviceFrameEnabled: f,
    scalingInfo: g
  }, _] = useAtomValueAndSetter(t.stateAtom);
  let x = useDispatch();
  let y = _$$eY();
  let C = useMemo(() => h === bi.OPEN, [h]);
  let v = m?.initialViewerSize ?? rX;
  let E = useLatestRef(v);
  let T = rQ();
  let [w, S] = useState(T);
  let [j, I] = useState(v.x);
  let [k, N] = useState(v.y + uF);
  let A = getSingletonSceneGraph().getCurrentPage()?.prototypeDevice || null;
  let O = A?.presetIdentifier;
  let L = !!O && L_(O);
  let R = C && L && f;
  let {
    showing
  } = BK(t.overflowDropdownType);
  let M = _$$Z();
  let F = getObservableOrFallback(AppStateTsApi.singleSlideView().isInFocusedNodeView);
  let [B, U] = useState(!1);
  let G = useCallback(() => {
    U(!0);
    fullscreenValue.triggerAction('inline-preview-iframe-focus-state-changed', {
      isFocused: !0
    });
  }, [U]);
  let K = sO();
  let H = B || showing ? cD : Xt;
  let z = useCallback(e => {
    x(Zh({
      name: 'prototype.close_inline_viewer',
      params: {
        source: e
      }
    }));
    _({
      type: 'CLOSE_INLINE_PREVIEW'
    });
  }, [x, _]);
  let V = useCallback(() => (assert(!!k), assert(!!j), {
    x: j,
    y: k - uF
  }), [k, j]);
  let W = useCallback(e => {
    I(e.x);
    N(e.y + uF);
  }, [I, N]);
  let Y = useCallback(() => {
    let e = V();
    if (!R) return e;
    assertNotNullish(O, 'devicePresetIdentifier must be set');
    let t = A.rotation;
    let {
      framePresetSize,
      idealDeviceSize
    } = _$$is(O, t);
    return BX(e, framePresetSize, idealDeviceSize);
  }, [O, V, R, A?.rotation]);
  useEffect(() => {
    o.current || S(T);
  }, [T]);
  useEffect(() => {
    _({
      type: 'SET_CURRENT_VIEWER_SIZE_CALLBACK',
      payload: Y
    });
  }, [_, Y]);
  let J = useMemo(() => m?.breakpoint?.type !== l5.DEVICE, [m]);
  let q = useCallback(e => {
    if (!J) return;
    let t = Y();
    assert(!!d, 'currentPresentedNode must be set');
    let i = y.get(d);
    assert(!!i, 'expected selectedNode to exist');
    let r = HS(y, i);
    let n = hX(t, i, r, y);
    assert(n.breakpoint.type !== l5.DEVICE, 'fit to aspect ratio not allowed for device');
    W(n.initialViewerSize);
    x(Zh({
      name: 'prototype.resize_to_fit_aspect_ratio',
      params: {
        source: e
      }
    }));
  }, [J, Y, d, y, W, x]);
  let X = () => {
    if (!d) return !1;
    let e = !1;
    if (R) {
      let {
        idealDeviceSize
      } = _$$is(O, A.rotation);
      e = idealDeviceSize.x >= Fe && idealDeviceSize.y >= Sq;
    } else {
      let t = y.get(d);
      if (!t) return !1;
      let i = HS(y, t);
      let r = nw(i, t);
      e = r.x >= Fe && r.y >= Sq;
    }
    return e;
  };
  let Z = useCallback(e => {
    _({
      type: 'SET_PREVIEW_IS_RESPONSIVE',
      payload: e
    });
  }, [_]);
  let Q = useCallback(() => {
    _({
      type: 'RESIZE_MODAL',
      payload: {
        sceneGraph: y
      }
    });
  }, [_, y]);
  let $ = useCallback(e => {
    if (e) {
      let t = computeFullscreenViewportForNode({
        nodeId: e,
        alwaysPan: !0,
        maxScale: 0.6
      });
      K ? h === bi.OPEN && (M(t), F && AppStateTsApi.singleSlideView().focusNodeInFocusedNodeView(e, !0)) : M(t);
    }
  }, [M, K, F, h]);
  useEffect(() => {
    _({
      type: 'SET_SCROLL_CALLBACK',
      payload: $
    });
  }, [_, $]);
  let ee = useCallback(e => {
    W({
      x: e.x,
      y: e.y + parsePxNumber(m8f)
    });
  }, [W]);
  let et = useMemo(() => {
    if (R && hY[O].inlinePreviewInfo?.hitTargetSvgUrl) {
      return function (e) {
        let t = A.rotation === RotationType.CCW_90;
        return jsx(rG, {
          ...e,
          mirrorResizeHorizontally: !1,
          devicePresetIdentifier: O,
          isDeviceRotatedCCW: t
        });
      };
    }
  }, [R, O, A?.rotation]);
  let ei = useCallback(e => {
    assert(m?.breakpoint.type === l5.DEVICE, 'device must be set to toggle device frame');
    assert(!!A, 'prototypeDevice must be set to toggle device frame');
    let t = Y();
    if (e) {
      let e = A.presetIdentifier;
      let {
        idealDeviceSize,
        framePresetSize
      } = _$$is(e, A.rotation);
      ee(Ho(t, framePresetSize, idealDeviceSize));
    } else {
      W(t);
    }
  }, [m?.breakpoint.type, A, Y, W, ee]);
  assert(!C || m !== null, 'sizeInfo should always be set when open');
  useLayoutEffect(() => {
    if (E !== v) {
      if (R) {
        let {
          idealDeviceSize,
          framePresetSize
        } = _$$is(O, A.rotation);
        ee(Ho(v, framePresetSize, idealDeviceSize));
      } else {
        W(v);
      }
    }
  }, [v, E, O, R, A, ee, W]);
  useEffect(() => {
    O && L_(O) && Gn(O);
  }, [O]);
  let er = useCallback(() => {
    let e = V();
    let {
      width,
      height
    } = fullscreenValue.getViewportInfo();
    let r = e.x / width;
    let n = e.y / height;
    x(Zh({
      name: 'prototype.inline_preview_manually_resized',
      params: {
        isDeviceFrameShown: R,
        horizontalCoverage: r,
        verticalCoverage: n
      }
    }));
  }, [x, V, R]);
  let en = useMemo(() => {
    let e = {
      height: '100%'
    };
    return R ? e : {
      ...e,
      borderBottomLeftRadius: 'var(--radius-small)',
      borderBottomRightRadius: 'var(--radius-small)'
    };
  }, [R]);
  if (h === bi.NOT_LOADED) return null;
  let ea = P()(K ? CN : aq, R ? null : H);
  let es = P()(R ? [H, k9] : null, {
    [FO]: K
  });
  let {
    x: _x,
    y: _y
  } = _$$ut(getSingletonSceneGraph(), !0);
  let ec = !C || !m?.initialViewerSize;
  return jsx(od, {
    ResizeTargetComponent: et,
    allowPartialHeaderOnScreen: !0,
    allowResizeHeight: B && !K,
    allowResizeWidth: B && !K,
    alwaysEnsureHeaderModalOnScreen: !0,
    containerClassName: ea,
    containerFillsPage: K,
    customButton: jsx(r1, {
      allowActualSizeReset: X(),
      allowSizeReset: J,
      closeInlinePreview: z,
      iframeRef: i,
      isDeviceSupportedForPreview: L,
      isPreviewFittedToAspectRatio: () => {
        if (!d || !J) return !1;
        let e = y.get(d);
        if (!e) return !1;
        let t = Y();
        let i = HS(y, e);
        let r = hX(t, e, i, y);
        let n = t.x / t.y;
        let a = r.initialViewerSize.x / r.initialViewerSize.y;
        return _$$o2(n, a);
      },
      isPreviewResponsive: g.contentScalingMode === 'responsive',
      isPreviewShownAtActualSize: () => {
        if (!d || !i.current) return !1;
        let e = y.get(d);
        if (!e || !m?.breakpoint) return !1;
        let t = R ? _$$is(O, A.rotation).framePresetSize : nw(m.breakpoint, e);
        let r = Y();
        return _$$o2(t.x, r.x, 1e-4) && _$$o2(t.y, r.y, 1e-4);
      },
      isPrototypeDeviceSet: !!A && A.type !== PresetType.NONE,
      onToggleShowDeviceFrame: ei,
      openFileKey: s || void 0,
      resizeToActualSize: () => {
        if (!X()) return;
        assert(!!d);
        assert(!!m);
        let e = y.get(d);
        assert(!!e);
        x(Zh({
          name: 'prototype.resize_to_actual_size'
        }));
        let t = R ? _$$is(O, A.rotation).idealDeviceSize : nw(m.breakpoint, e);
        let i = (e, t) => {
          W(e);
          S(new Point(t.x, t.y));
        };
        let r = V();
        UB(t, x, () => i(r, w));
        W(t);
      },
      resizeToFitAspectRatio: () => q('overflow_menu'),
      scrollToNode: $,
      setPreviewIsResponsive: Z,
      showFullscreenButton: K,
      showOverflow: !K,
      viewerControl: t,
      width: j
    }),
    disableDragging: K,
    dragHeaderOnly: !0,
    frameStyle: en,
    headerClassName: es,
    height: k,
    hidden: ec,
    ignoreCloseShortcut: !C,
    lockAspectRatio: m?.breakpoint?.type === l5.DEVICE,
    makeContentPixelPerfect: !0,
    minHeight: _y,
    minWidth: _x,
    onClose: () => {
      z('modal');
    },
    onDragStart: () => o.current = !0,
    onEdgeDoubleClick: () => q('double_click'),
    onFocus: () => {
      t.onFocus() || G();
    },
    onResize: Q,
    onResizeEnd: er,
    position: w,
    preventKeyboardFocus: !0,
    recordingKey: rZ,
    setHeight: N,
    setPosition: S,
    setWidth: I,
    tabIndex: 0,
    title: jsx(r2, {
      navigateBackwardEnabled: c,
      navigateForwardEnabled: p,
      width: j,
      onBack: t.onBack,
      onForward: t.onForward,
      onRestart: t.onRestart
    }),
    transparentContentBackground: R,
    width: j,
    children: (() => {
      let n = t.ViewerComponent;
      return jsx(_$$H3, {
        initialViewerSize: v,
        isDeviceFrameShown: R,
        children: jsx(n, {
          ref: i,
          pageId: e,
          openFileKey: s || void 0,
          closeInlinePreview: z,
          isOpen: C,
          iframeFocused: B,
          setIframeFocused: U,
          onIframeFocus: G
        }, e)
      });
    })()
  });
});
function r1({
  allowSizeReset: e,
  allowActualSizeReset: t,
  isPrototypeDeviceSet: i,
  isDeviceSupportedForPreview: s,
  openFileKey: o,
  resizeToFitAspectRatio: d,
  scrollToNode: c,
  showOverflow: u,
  showFullscreenButton: p,
  iframeRef: m,
  resizeToActualSize: f,
  isPreviewShownAtActualSize: g,
  setPreviewIsResponsive: _,
  isPreviewResponsive: x,
  closeInlinePreview: y,
  onToggleShowDeviceFrame: b,
  width: C,
  isPreviewFittedToAspectRatio: v,
  viewerControl: T
}) {
  let w = useDispatch();
  let S = useRef(null);
  let [{
    currentPresentedNode: j,
    targetFrameFollowingEnabled: I,
    showDeviceFrameEnabled: k
  }, N] = useAtomValueAndSetter(T.stateAtom);
  let {
    showing,
    toggle
  } = BK(T.overflowDropdownType);
  let L = useCallback(() => {
    if (!o) throw new Error('Expected openFileKey to exist');
    if (!j) throw new Error('openPrototypeInNewTab called without currentPresentedNode');
    w(_$$F2({
      fileKey: o,
      nodeId: j,
      startingPointNodeId: PrototypingTsApi.getActivePrototypeStartingPointNodeIdOnCurrentPage(),
      source: 'inline_viewer',
      scalingInfo: x ? i ? {
        contentScalingMode: 'responsive',
        viewportScalingMode: 'scale-down'
      } : {
        contentScalingMode: 'responsive',
        viewportScalingMode: 'contain'
      } : void 0
    }));
    y('open_in_new_tab');
  }, [o, j, w, x, i, y]);
  let R = useCallback(() => {
    let e = !I;
    w(Zh({
      name: 'prototype.toggle_follow_previewed_frame',
      params: {
        enabled: e
      }
    }));
    N({
      type: 'TOGGLE_TARGET_FRAME_FOLLOWING'
    });
    c(j);
  }, [w, N, I, c, j]);
  let D = useCallback(() => {
    let e = !k;
    w(Zh({
      name: 'prototype.toggle_show_device_frame',
      params: {
        enabled: e,
        location: 'preview'
      }
    }));
    N({
      type: 'TOGGLE_SHOW_DEVICE_FRAME'
    });
    b(e);
  }, [w, k, b, N]);
  let M = useCallback(() => {
    let n = {
      displayText: getI18nString('inline_preview.overflow_menu.responsive'),
      name: 'responsive',
      recordingKey: 'responsiveButton',
      callback: () => {
        _(!0);
      },
      isChecked: x,
      icon: jsx(_$$V2, {}),
      unsetStrokeOnActiveOption: !0
    };
    let a = {
      displayText: s ? getI18nString('inline_preview.overflow_menu.fixed') : getI18nString('inline_preview.overflow_menu.fit_width'),
      name: s ? 'fixed' : 'fit-width',
      isChecked: !x,
      recordingKey: 'fixedButton',
      icon: s ? jsx(_$$O4, {}) : jsx(_$$v, {}),
      callback: () => {
        _(!1);
      },
      unsetStrokeOnActiveOption: !0
    };
    let o = {
      displayText: getI18nString('inline_preview.overflow_menu.follow_prototype'),
      name: 'follow-active-frame',
      recordingKey: 'followActiveFrame',
      callback: R,
      isChecked: I
    };
    let l = {
      'displayText': s ? getI18nString('inline_preview.overflow_menu.resize_device_100_percent') : getI18nString('inline_preview.overflow_menu.resize_window_100_percent'),
      'name': 'actual-size',
      'recordingKey': 'actualSizeButton',
      'callback': f,
      'disabled': !t,
      'isChecked': g(),
      'data-onboarding-key': 'resize-to-actual-size'
    };
    let c = {
      displayText: getI18nString('inline_preview.overflow_menu.reset_aspect_ratio'),
      name: 'reset-size',
      recordingKey: 'resetSizeButton',
      callback: d,
      isChecked: v(),
      disabled: !e,
      hidden: i
    };
    let u = {
      displayText: getI18nString('inline_preview.overflow_menu.show_device_frame'),
      name: 'show-device-frame',
      recordingKey: 'showDeviceFrame',
      callback: D,
      isChecked: k && s,
      disabled: !s,
      hidden: !i
    };
    return [s ? n : a, s ? a : n, {
      separator: !0,
      displayText: ''
    }, o, l, c, u, {
      displayText: getI18nString('inline_preview.new_tab'),
      recordingKey: 'openInNewTabButton',
      name: 'open-in-new-tab',
      callback: L,
      hidden: C > kl
    }];
  }, [x, s, R, I, f, t, g, d, v, e, i, D, k, L, C, _]);
  let P = useCallback(() => {
    m.current && m.current.requestFullscreen();
  }, [m]);
  return jsxs(Fragment, {
    children: [u && jsx('div', {
      ref: S,
      children: jsx(_$$K, {
        'aria-label': getI18nString('inline_preview.overflow_menu'),
        'htmlAttributes': {
          'data-tooltip-type': KindEnum.TEXT,
          'data-tooltip': getI18nString('inline_preview.overflow_menu')
        },
        'actionOnPointerDown': !0,
        'onClick': e => {
          e.stopPropagation();
          toggle({});
        },
        'recordingKey': generateRecordingKey(rZ, 'overflowMenuButton'),
        'children': jsx(_$$A9, {})
      })
    }), C > kl && jsx(_$$K, {
      'htmlAttributes': {
        'data-tooltip-type': KindEnum.TEXT,
        'data-tooltip': getI18nString('inline_preview.new_tab'),
        'data-testid': 'preview-open-in-presentation-view'
      },
      'aria-label': getI18nString('inline_preview.new_tab'),
      'onClick': L,
      'recordingKey': generateRecordingKey(rZ, 'openInNewTabButton'),
      'children': jsx(_$$V3, {})
    }), p && jsx(_$$K, {
      'onClick': P,
      'htmlAttributes': {
        'data-tooltip-type': KindEnum.TEXT,
        'data-tooltip': getI18nString('inline_preview.open_fullscreen')
      },
      'aria-label': getI18nString('inline_preview.open_fullscreen'),
      'children': jsx(_$$O2, {})
    }), showing && S.current && jsx(_$$j, {
      dispatch: w,
      items: M(),
      lean: 'center',
      onDismissMenu: T.onDismissOverflow,
      onDropdownHidden: T.onDismissOverflow,
      onFocus: e => {
        e.stopPropagation();
      },
      onSelectItem: e => {
        e.callback && e.callback();
      },
      parentRect: S.current.getBoundingClientRect(),
      recordingKey: generateRecordingKey(rZ, 'overflowMenu'),
      showPoint: !0
    })]
  });
}
function r2({
  navigateForwardEnabled: e,
  navigateBackwardEnabled: t,
  onRestart: i,
  width: n,
  onBack: s,
  onForward: o
}) {
  let l = useDispatch();
  return jsxs('div', {
    className: KW,
    children: [n <= Ah ? null : jsxs(Fragment, {
      children: [jsx(_$$K, {
        'htmlAttributes': {
          'data-testid': 'preview-navigate-backward'
        },
        'aria-label': getI18nString('viewer.footer.previous_frame'),
        'onClick': s,
        'disabled': !t,
        'recordingKey': generateRecordingKey(rZ, 'navigateBackwardButton'),
        'children': jsx(_$$C, {})
      }), jsx(_$$K, {
        'aria-label': getI18nString('viewer.footer.next_frame'),
        'onClick': o,
        'disabled': !e,
        'recordingKey': generateRecordingKey(rZ, 'navigateForwardButton'),
        'htmlAttributes': {
          'data-testid': 'preview-navigate-forward'
        },
        'children': jsx(_$$e6, {})
      })]
    }), n <= kl ? null : jsx(_$$K, {
      'aria-label': getI18nString('inline_preview.restart'),
      'htmlAttributes': {
        'data-tooltip-type': KindEnum.TEXT,
        'data-tooltip': getI18nString('inline_preview.restart'),
        'data-testid': 'preview-restart-prototype'
      },
      'onClick': () => {
        l(Zh({
          name: 'prototype.replay_clicked',
          params: {
            source: 'inline viewer'
          }
        }));
        i();
      },
      'recordingKey': generateRecordingKey(rZ, 'restartButton'),
      'children': jsx(_$$H2, {})
    })]
  });
}
function r5() {
  let e = useSelector(e => e.selectedView);
  let t = useCurrentFileKey();
  let i = useSelector(e => e.progressBarState.mode);
  let r = useSelector(e => mapFileToProductType({
    editorType: getSelectedFile(e)?.editor_type
  }));
  let o = i !== UIVisibilitySetting.HIDE_UI && i !== UIVisibilitySetting.ON_AND_LOCKED;
  let p = selectCurrentFile();
  let m = jY();
  let f = BI();
  let g = getObservableValue(AppStateTsApi?.interopToolMode(), SelfDesignType.SELF);
  useEffect(() => (document.body.setAttribute('data-editor-theme', ju(e, g)), () => {
    document.body.removeAttribute('data-editor-theme');
  }), [e, g]);
  Ou();
  fq();
  _$$_3();
  _$$c2();
  useEffect(() => {
    o && t && m && fullscreenValue.onReady().then(() => {
      getFeatureFlags()?.fullscreen_send_client_rendered_message ? Multiplayer?.sendClientRendered(xK.getClientRenderedMetadata()) : Multiplayer?.sendSignal('client-rendered', '');
      window.requestAnimationFrame(() => {
        desktopAPIInstance?.addTabAnalyticsMetadata({
          reactFullscreenViewRenderTime: window.performance.now()
        });
        xK.reactFullscreenViewIsRendered();
        xK.report(t, r);
        getFeatureFlags()?.fullscreen_use_threaded_rendering || function () {
          let e = dX('fullscreen');
          if (!e || webGPUBindings?.usingWebGPU()) return;
          let t = ap() ? e.getContext('webgl2') : e.getContext('webgl');
          if (!t || !window.expectedWebGLContextAttributes) return;
          let i = t.getContextAttributes();
          if (!i) return;
          let r = FullscreenPerfMetrics?.getGpuDeviceInfo() ?? {
            vendor: '',
            renderer: '',
            version: ''
          };
          let n = {};
          for (let e of Object.keys(i)) n[`actual_${e}`] = i[e];
          let a = {};
          let s = !0;
          for (let e of Object.keys(window.expectedWebGLContextAttributes)) {
            i[e] !== window.expectedWebGLContextAttributes[e] && (s = !1);
            a[`expected_${e}`] = window.expectedWebGLContextAttributes[e];
          }
          let o = {
            ...n,
            ...a,
            ...r,
            are_context_attributes_correct: s
          };
          trackEventAnalytics('fullscreen_load_gpu_parameters', o);
        }();
      });
    });
  }, [o, t, r, m]);
  let _ = useSelector(e => e.isFullscreenDocumentLoaded);
  useEffect(() => {
    f?.handleCompleteInitialLoad && _ && f.handleCompleteInitialLoad();
  }, [f, _]);
  let [x, y] = useState(!1);
  let C = useSelector(e => e.mirror.appModel.isReadOnly);
  useEffect(() => {
    f?.updateReadOnly && _ && !x && (y(!0), f.updateReadOnly(C));
  }, [f, _, x, y, C]);
  let v = useLatestRef(p);
  let E = useSelector(e => e.mirror.appModel.pagesList);
  let T = useMemo(() => E.map(e => ({
    id: e.nodeId,
    name: e.name,
    divider: e.isDivider
  })), [E]);
  let w = useLatestRef(T);
  let S = useSelector(e => e.mirror.appModel.currentPage);
  let j = useLatestRef(S);
  useEffect(() => {
    f?.updatePages && p && (!v || p.key !== v.key || p.name !== v.name || p.editorType !== v.editorType || p.isTryFile !== v.isTryFile || !deepEqual(T, w) || S !== j) && f.updatePages({
      fileKey: p.key,
      fileName: p.name,
      editorType: p.editorType,
      isTryFile: p.isTryFile,
      pages: T.length > 0 ? T : [{
        id: S,
        name: getI18nString('fullscreen.pages_panel.pages_placeholder'),
        divider: !1
      }],
      currentPageId: S
    });
  }, [f, p, v, T, w, S, j]);
  let I = WC();
  useEffect(() => {
    f?.updateWebOverlaysShown && f.updateWebOverlaysShown(I);
  }, [f, I]);
  let k = o3(nt.customKeyboardShortcuts);
  useEffect(() => {
    getFeatureFlags().ce_custom_keyboard_shortcuts && Fullscreen?.reloadKeyboardShortcuts();
  }, [k]);
  let N = useSelector(e => e.multiplayer.allUsers);
  let A = useSelector(e => e.multiplayer.observingSessionID);
  let O = useSelector(e => e.multiplayer.presenterSessionID);
  let L = useSelector(e => e.multiplayer.deviceNameFilter);
  let R = useSelector(e => e.multiplayer.sessionID);
  let D = useMemo(() => {
    let {
      users
    } = Yp(N, null, !1, 1048576, {
      sessionID: R,
      observingSessionID: A,
      presenterSessionID: O,
      deviceNameFilter: L
    });
    return {
      sessionID: R,
      observingSessionID: A !== -1 ? A : null,
      presenterSessionID: O !== -1 && O || null,
      users
    };
  }, [N, L, A, O, R]);
  let M = useLatestRef(D);
  useEffect(() => {
    f?.updateMultiplayerUserInfo && !deepEqual(M, D) && f.updateMultiplayerUserInfo(D);
  }, [f, D, M]);
  setupCodegenLanguageSync();
  !function (e, t) {
    let i = useCanAccessDevModeEntryPoint();
    let r = useCanAccessFullDevMode();
    let a = useCanUseDevModeDemoFile();
    let s = useHasParentOrgId();
    let o = _$$U2('permission', !0);
    let d = e && !r && !i && !isVsCodeEnvironment();
    useEffect(() => {
      t || (HandoffBindingsCpp.setCanAccessDevMode(r), HandoffBindingsCpp.setCanEnterDevMode(i), HandoffBindingsCpp.setShowWorkflowsControls(s), HandoffBindingsCpp.setIsUsingDevModeDemoFile(a));
    }, [r, i, s, t, a]);
    useEffect(() => {
      d && o('design');
    }, [o, d]);
  }(isDevHandoffEditorType(), isWhiteboardFileType());
  _$$J3();
  return null;
}
export function $$r40({
  children: e
}) {
  let t = useSelector(xY);
  let i = useSelector(e => e.mirror.appModel.currentPage);
  let n = l7();
  let s = _$$e3();
  let l = ZO();
  let d = isDesignFileType();
  let c = isDevHandoffEditorType();
  let u = useSelector(e => e.isFullscreenDocumentLoaded);
  return jsxs(Fragment, {
    children: [e ?? null, jsx(r5, {}), t && jsx(r$, {
      viewerControl: _$$e7,
      pageId: i
    }), n && jsx(_$$tH, {
      boundaryKey: 'DevModeOverview',
      fallback: H4.DEFAULT_FULL_PAGE,
      sentryTags: {
        area: _$$e.DEVELOPER_TOOLS
      },
      hasCustomWASMBuild: y4,
      children: jsx(iQ, {})
    }), l && jsx(_$$tH, {
      boundaryKey: 'ComponentBrowser',
      fallback: H4.DEFAULT_FULL_PAGE,
      sentryTags: {
        area: _$$e.DEVELOPER_TOOLS
      },
      hasCustomWASMBuild: y4,
      children: jsx(ea, {})
    }), s && u && jsx(_$$tH, {
      boundaryKey: 'DevModeVariablesTable',
      fallback: H4.DEFAULT_FULL_PAGE,
      sentryTags: {
        area: _$$e.DEVELOPER_TOOLS
      },
      hasCustomWASMBuild: y4,
      children: jsx(tu, {})
    }), jsx(_$$tH, {
      boundaryKey: 'McpUnmappedComponentsBanner',
      fallback: H4.NONE_I_KNOW_WHAT_IM_DOING,
      sentryTags: {
        area: _$$e.DEVELOPER_TOOLS
      },
      hasCustomWASMBuild: y4,
      children: (d || c) && jsx(eh, {})
    })]
  });
}
export const G = $$r40;