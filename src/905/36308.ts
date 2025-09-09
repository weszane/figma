import { createElement, memo, useCallback, useState } from 'react';
import { jsx, jsxs } from 'react/jsx-runtime';
import { F as _$$F5 } from '../905/224';
import { a as _$$a } from '../905/5627';
import { r as _$$r3 } from '../905/11890';
import { R as _$$R2 } from '../905/16785';
import { A as _$$A } from '../905/24328';
import { m as _$$m } from '../905/37328';
import { _ as _$$_3 } from '../905/38543';
import { bL, Rq } from '../905/38914';
import { J as _$$J2, x as _$$x4 } from '../905/61366';
import { W as _$$W } from '../905/63398';
import { s as _$$s2 } from '../905/66404';
import { M as _$$M } from '../905/69907';
import { H as _$$H3 } from '../905/75186';
import { D as _$$D6 } from '../905/80656';
import { c as _$$c } from '../905/90943';
import { registerModal, ModalSupportsBackground } from '../905/102752';
import { h as _$$h4 } from '../905/104000';
import { E as _$$E3 } from '../905/105281';
import { K as _$$K3 } from '../905/107582';
import { L as _$$L2 } from '../905/109200';
import { go } from '../905/114390';
import { N as _$$N2 } from '../905/120979';
import { h as _$$h3 } from '../905/123399';
import { A as _$$A3 } from '../905/126947';
import { setupAutofocusHandler } from '../905/128376';
import { c as _$$c2 } from '../905/144429';
import { A as _$$A6 } from '../905/150554';
import { showModalHandler } from '../905/156213';
import { UpsellModalType } from '../905/165519';
import { U as _$$U3 } from '../905/169553';
import { F as _$$F3 } from '../905/172964';
import { permissionScopeHandler } from '../905/189185';
import { X7 } from '../905/193529';
import { h as _$$h5 } from '../905/200386';
import { N as _$$N } from '../905/201779';
import { H as _$$H2 } from '../905/203408';
import { I as _$$I2 } from '../905/203573';
import { n as _$$n } from '../905/221510';
import { y as _$$y3 } from '../905/225297';
import { nt as _$$nt } from '../905/226610';
import { p as _$$p } from '../905/233082';
import { l as _$$l } from '../905/241412';
import { j as _$$j } from '../905/253683';
import { Label } from '../905/270045';
import { r as _$$r2 } from '../905/271565';
import { deepClone } from '../905/284190';
import { y as _$$y2 } from '../905/292472';
import { dX } from '../905/294543';
import { A as _$$A2 } from '../905/295481';
import { sendMessageToParent } from '../905/298920';
import { O as _$$O } from '../905/301080';
import { VisualBellActions } from '../905/302958';
import { getI18nString, renderI18nText } from '../905/303541';
import { EE } from '../905/316062';
import { t as _$$t } from '../905/316903';
import { e as _$$e3 } from '../905/318479';
import { dh, IZ, K7 } from '../905/346794';
import { p as _$$p3 } from '../905/347427';
import { Z as _$$Z } from '../905/357899';
import { IOS as _$$p4, IOS_UIKIT, ANDROID, ANDROID_XML, SupportedPlatforms, WEB } from '../905/359509';
import { w as _$$w } from '../905/359860';
import { m as _$$m2, t as _$$t3 } from '../905/364535';
import { E as _$$E5 } from '../905/370356';
import { W as _$$W2 } from '../905/378870';
import { $ as _$$$ } from '../905/379902';
import { k as _$$k } from '../905/381239';
import { Q as _$$Q2 } from '../905/384324';
import { X as _$$X2 } from '../905/399133';
import { Z as _$$Z3 } from '../905/404142';
import { debugState } from '../905/407919';
import { O as _$$O3 } from '../905/410575';
import { _ as _$$_4 } from '../905/410717';
import { F as _$$F } from '../905/427107';
import { N as _$$N4 } from '../905/430294';
import { hS } from '../905/437088';
import { k as _$$k4 } from '../905/443820';
import { trackEventAnalytics } from '../905/449184';
import { aJ, Oc } from '../905/449579';
import { n as _$$n2 } from '../905/451212';
import { K as _$$K2 } from '../905/459096';
import { fK } from '../905/469533';
import { x9 } from '../905/470594';
import { $$ab4, $$av5 } from '../905/472793';
import { V as _$$V } from '../905/477816';
import { e as _$$e2 } from '../905/478588';
import { b as _$$b } from '../905/484176';
import { u as _$$u3 } from '../905/486140';
import { z as _$$z2 } from '../905/489760';
import { Z as _$$Z2 } from '../905/498136';
import { r as _$$r5 } from '../905/501976';
import { l as _$$l3 } from '../905/509505';
import { h as _$$h6 } from '../905/510194';
import { h as _$$h2 } from '../905/513745';
import { updateCodeExtensionPreferences } from '../905/515076';
import { $n } from '../905/521428';
import { F as _$$F2 } from '../905/544329';
import { s as _$$s } from '../905/551945';
import { A as _$$A4, x as _$$x2 } from '../905/553642';
import { l as _$$l2 } from '../905/556594';
import { B as _$$B } from '../905/559262';
import { encodeBase64 } from '../905/561685';
import { i4 as _$$i } from '../905/566585';
import { Q as _$$Q } from '../905/567676';
import { N as _$$N5 } from '../905/568293';
import { BellId, VisualBellIcon } from '../905/576487';
import { y as _$$y } from '../905/582657';
import { O as _$$O2 } from '../905/587457';
import { D as _$$D } from '../905/591570';
import { u as _$$u2 } from '../905/591949';
import { getFeatureFlags } from '../905/601108';
import { _ as _$$_ } from '../905/607842';
import { D as _$$D5 } from '../905/629114';
import { R as _$$R } from '../905/649743';
import { logger } from '../905/651849';
import { Bi } from '../905/652992';
import { z as _$$z } from '../905/653569';
import { i } from '../905/661697';
import { o5 } from '../905/664512';
import { e as _$$e } from '../905/678389';
import { p as _$$p2 } from '../905/682418';
import { f as _$$f, h as _$$h7 } from '../905/693155';
import { e0 as _$$e4 } from '../905/696396';
import { Wq } from '../905/697795';
import { SingletonSceneGraph } from '../905/700578';
import { E as _$$E4 } from '../905/701278';
import { s as _$$s3 } from '../905/702260';
import { U as _$$U } from '../905/708285';
import { u as _$$u4 } from '../905/712485';
import { logInfo } from '../905/714362';
import { v as _$$v } from '../905/717395';
import { x as _$$x3 } from '../905/719609';
import { R as _$$R3 } from '../905/726507';
import { E as _$$E } from '../905/730894';
import { X as _$$X } from '../905/736922';
import { E as _$$E2 } from '../905/737393';
import { DV } from '../905/739964';
import { d as _$$d } from '../905/758967';
import { N as _$$N6 } from '../905/778966';
import { r as _$$r4 } from '../905/784543';
import { S as _$$S } from '../905/788053';
import { _E, aZ, lE, Oo, vt } from '../905/788069';
import { K as _$$K } from '../905/799615';
import { G as _$$G } from '../905/800369';
import { qf } from '../905/817095';
import { H as _$$H } from '../905/821118';
import { z as _$$z3 } from '../905/821223';
import { _ as _$$_2 } from '../905/821768';
import { N as _$$N3 } from '../905/825967';
import { z as _$$z4 } from '../905/828520';
import { D as _$$D2 } from '../905/829855';
import { q as _$$q } from '../905/838985';
import { td as _$$td } from '../905/845253';
import { r as _$$r } from '../905/857502';
import { u as _$$u } from '../905/866761';
import { b as _$$b2 } from '../905/874849';
import { $ as _$$$2 } from '../905/922405';
import { oB } from '../905/929976';
import { I as _$$I } from '../905/932503';
import { lQ } from '../905/934246';
import { O as _$$O4 } from '../905/936515';
import { U as _$$U2 } from '../905/944163';
import { dL, qz } from '../905/944871';
import { L as _$$L } from '../905/954291';
import { Vd } from '../905/964786';
import { Qs } from '../905/992395';
import { D as _$$D3 } from '../905/993374';
import { h as _$$h } from '../905/994594';
import _require from '../5052/635052';
import { y as _$$y4 } from '../figma_app/13082';
import { S5 } from '../figma_app/24841';
import { atomStoreManager } from '../figma_app/27355';
import { $t, HZ } from '../figma_app/29287';
import { eH as _$$eH } from '../figma_app/91703';
import { isNotNullish } from '../figma_app/95419';
import { b1 } from '../figma_app/120227';
import { Dc, hV, mU } from '../figma_app/151766';
import { He } from '../figma_app/155728';
import { conditionalFeatureFlag, getInitialOptions } from '../figma_app/169182';
import { FPlanNameType } from '../figma_app/191312';
import { WB } from '../figma_app/192664';
import { t as _$$t4 } from '../figma_app/235299';
import { N as _$$N7 } from '../figma_app/240060';
import { j6 } from '../figma_app/243025';
import { W7 } from '../figma_app/251115';
import { Sd } from '../figma_app/253220';
import { qd, YQ } from '../figma_app/257779';
import { hE, jk, nB, vo, wi, Y9 } from '../figma_app/272243';
import { gn } from '../figma_app/322845';
import { tz as _$$tz, Kx, lk, Lw, pe, Pq, rx, SV } from '../figma_app/342355';
import { toggleFigmentDebugger } from '../figma_app/347406';
import { c1 } from '../figma_app/357047';
import { ce } from '../figma_app/401069';
import { OX } from '../figma_app/407414';
import { k1 } from '../figma_app/407767';
import { Ay as _$$Ay2 } from '../figma_app/432652';
import { fullscreenValue } from '../figma_app/455680';
import { isZoomIntegration, IntegrationUtils } from '../figma_app/469876';
import { xt } from '../figma_app/475303';
import { useCurrentFileKey } from '../figma_app/516028';
import { N5 } from '../figma_app/528509';
import { sendBackToFilesAction } from '../figma_app/564528';
import { zM } from '../figma_app/580736';
import { L as _$$L3 } from '../figma_app/582681';
import { Bu, dd } from '../figma_app/604494';
import { Dk } from '../figma_app/623293';
import { jT } from '../figma_app/626177';
import { fileActionEnum } from '../figma_app/630077';
import { JT } from '../figma_app/632248';
import { PW } from '../figma_app/633080';
import { x as _$$x, Lk } from '../figma_app/639711';
import { fx, PF } from '../figma_app/657972';
import { i as _$$i2 } from '../figma_app/714009';
import { eY as _$$eY } from '../figma_app/722362';
import { UK } from '../figma_app/740163';
import { AppStateTsApi, SwitchState, Fullscreen, EasingType, SelfDesignType, LogToConsoleMode, ComponentPanelTab, MenuType, MeasurementUnit, Thumbnail } from '../figma_app/763686';
import { X as _$$X4 } from '../figma_app/765161';
import { BrowserInfo } from '../figma_app/778880';
import { As } from '../figma_app/802241';
import { useHandleFocusEvent, generateRecordingKey } from '../figma_app/878298';
import { hV as _$$hV, M3 as _$$M2, _p, lW, MH, pn, rH, u2 } from '../figma_app/847915';
import { YA } from '../figma_app/865646';
import { desktopAPIInstance } from '../figma_app/876459';
import { Fn, OO, qM } from '../figma_app/913518';
import { bb } from '../figma_app/926950';
import { Ay as _$$Ay3 } from '../figma_app/948389';
import { db } from '../figma_app/967873';
import { O as _$$O5 } from '../figma_app/984498';
import { E as _$$E6 } from '../figma_app/999099';
let A = memo(e => {
  return jsx('svg', {
    width: '24',
    height: '24',
    fill: 'none',
    viewBox: '0 0 24 24',
    ...e,
    children: jsx('path', {
      fill: 'var(--color-icon)',
      fillRule: 'evenodd',
      d: 'M5 6h14a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm3.146 3.146a.5.5 0 0 0 0 .708L7.293 12l-1.147 1.146a.5.5 0 0 0 .708.708l1.5-1.5a.5.5 0 0 0 0-.708l-1.5-1.5a.5.5 0 0 0-.708 0m11.708 0a.5.5 0 0 1 0 .708L16.707 12l1.147 1.146a.5.5 0 0 1-.708.708l-1.5-1.5a.5.5 0 0 1 0-.708l1.5-1.5a.5.5 0 0 1 .708 0',
      clipRule: 'evenodd'
    })
  });
});
let N = memo(e => {
  return jsx('svg', {
    width: '24',
    height: '24',
    fill: 'none',
    viewBox: '0 0 24 24',
    ...e,
    children: jsx('path', {
      fill: 'var(--color-icon)',
      d: 'm5.68 8.033.397.154a16.5 16.5 0 0 0 11.846 0l.397-.154A.5.5 0 0 1 19 8.5v7a.5.5 0 0 1-.68.467l-.397-.154a16.5 16.5 0 0 0-11.846 0l-.397.154A.5.5 0 0 1 5 15.5v-7a.5.5 0 0 1 .68-.467M18 9.223a17.5 17.5 0 0 1-12 0v5.552a17.5 17.5 0 0 1 12 0z'
    })
  });
});
let $$P = memo(e => {
  return jsx('svg', {
    width: '24',
    height: '24',
    fill: 'none',
    viewBox: '0 0 24 24',
    ...e,
    children: jsx('path', {
      fill: 'var(--color-icon)',
      d: 'M6 13a1 1 0 1 1 0 2 1 1 0 0 1 0-2m4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2m4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2m4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2M8 11a1 1 0 1 1 0 2 1 1 0 0 1 0-2m4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2m4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2M6 9a1 1 0 1 1 0 2 1 1 0 0 1 0-2m4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2m4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2m4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2'
    })
  });
});
let B = memo(e => {
  return jsx('svg', {
    width: '24',
    height: '24',
    fill: 'none',
    viewBox: '0 0 24 24',
    ...e,
    children: jsx('path', {
      fill: 'var(--color-icon)',
      fillRule: 'evenodd',
      d: 'M11.146 6.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L12 7.707V15h3.5a1.5 1.5 0 0 1 0 3h-8a1.5 1.5 0 0 1 0-3H11V7.707L9.854 8.854a.5.5 0 1 1-.708-.708zM7.5 16a.5.5 0 0 0 0 1h8a.5.5 0 0 0 0-1zM7 12.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 0 0-1h-2a1.5 1.5 0 0 0 0 3h2a.5.5 0 0 0 0-1h-2a.5.5 0 0 1-.5-.5m8.5-1.5h-2a.5.5 0 0 0 0 1h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 0 0 1h2a1.5 1.5 0 0 0 0-3',
      clipRule: 'evenodd'
    })
  });
});
let V = memo(e => {
  return jsx('svg', {
    width: '24',
    height: '24',
    fill: 'none',
    viewBox: '0 0 24 24',
    ...e,
    children: jsx('path', {
      fill: 'var(--color-icon)',
      fillRule: 'evenodd',
      d: 'M7.5 7a.5.5 0 0 0 0 1h8a.5.5 0 0 0 0-1zM6 7.5A1.5 1.5 0 0 1 7.5 6h8a1.5 1.5 0 0 1 0 3h-8A1.5 1.5 0 0 1 6 7.5m5.146 2.646a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L12 11.707V15h3.5a1.5 1.5 0 0 1 0 3h-8a1.5 1.5 0 0 1 0-3H11v-3.293l-1.146 1.147a.5.5 0 0 1-.708-.708zM7 16.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5',
      clipRule: 'evenodd'
    })
  });
});
let G = memo(e => {
  return jsx('svg', {
    width: '24',
    height: '24',
    fill: 'none',
    viewBox: '0 0 24 24',
    ...e,
    children: jsx('path', {
      fill: 'var(--color-icon)',
      fillRule: 'evenodd',
      d: 'M15.5 17a.5.5 0 0 0 0-1h-8a.5.5 0 0 0 0 1zm1.5-.5a1.5 1.5 0 0 1-1.5 1.5h-8a1.5 1.5 0 0 1 0-3h8a1.5 1.5 0 0 1 1.5 1.5m-5.146-2.646a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L11 12.293V9H7.5a1.5 1.5 0 1 1 0-3h8a1.5 1.5 0 0 1 0 3H12v3.293l1.146-1.147a.5.5 0 0 1 .708.708zM16 7.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1 0-1h8a.5.5 0 0 1 .5.5',
      clipRule: 'evenodd'
    })
  });
});
let z = memo(e => {
  return jsx('svg', {
    width: '24',
    height: '24',
    fill: 'none',
    viewBox: '0 0 24 24',
    ...e,
    children: jsx('path', {
      fill: 'var(--color-icon)',
      fillRule: 'evenodd',
      d: 'M11.854 17.854a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L11 16.293V9H7.5a1.5 1.5 0 1 1 0-3h8a1.5 1.5 0 0 1 0 3H12v7.293l1.146-1.147a.5.5 0 0 1 .708.708zM15.5 8a.5.5 0 0 0 0-1h-8a.5.5 0 0 0 0 1zm.5 3.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 0 0 1h2a1.5 1.5 0 0 0 0-3h-2a.5.5 0 0 0 0 1h2a.5.5 0 0 1 .5.5M7.5 13h2a.5.5 0 0 0 0-1h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 0 0-1h-2a1.5 1.5 0 0 0 0 3',
      clipRule: 'evenodd'
    })
  });
});
let K = memo(e => {
  return jsx('svg', {
    width: '24',
    height: '24',
    fill: 'none',
    viewBox: '0 0 24 24',
    ...e,
    children: jsx('path', {
      fill: 'var(--color-icon)',
      fillRule: 'evenodd',
      d: 'M8 11a4 4 0 0 1 8 0v1.5a.5.5 0 1 0 1 0V11a5 5 0 0 0-10 0v.293l-1.146-1.147a.5.5 0 0 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8 11.293zm9.146 6.854L12 12.707l-5.146 5.147a.5.5 0 0 1-.708-.708l5.324-5.323a.75.75 0 0 1 1.06 0l5.324 5.323a.5.5 0 0 1-.708.708',
      clipRule: 'evenodd'
    })
  });
});
let Y = memo(e => {
  return jsx('svg', {
    width: '24',
    height: '24',
    fill: 'none',
    viewBox: '0 0 24 24',
    ...e,
    children: jsx('path', {
      fill: 'var(--color-icon)',
      d: 'M10.94 9.646a1.5 1.5 0 0 1 2.006-.103l.114.103 3.293 3.292a1.5 1.5 0 0 1 0 2.122l-3.293 3.292a1.5 1.5 0 0 1-2.12 0L7.645 15.06a1.5 1.5 0 0 1 0-2.122zm1.413.706a.5.5 0 0 0-.707 0l-3.293 3.294-.064.078a.5.5 0 0 0 .064.628l3.293 3.293.078.065a.5.5 0 0 0 .63-.065l3.292-3.293a.5.5 0 0 0 0-.707zM9.525 5.767a3.5 3.5 0 0 1 4.95 0l2.378 2.379a.5.5 0 0 1-.707.707l-2.379-2.38a2.5 2.5 0 0 0-3.535 0L8.707 8H10a.5.5 0 0 1 0 1H7.5a.5.5 0 0 1-.5-.5V6a.5.5 0 0 1 1 0v1.293z'
    })
  });
});
let Z = memo(e => {
  return jsx('svg', {
    width: '24',
    height: '24',
    fill: 'none',
    viewBox: '0 0 24 24',
    ...e,
    children: jsx('path', {
      fill: 'var(--color-icon)',
      fillRule: 'evenodd',
      d: 'M15.5 10a5.5 5.5 0 0 0-5.5 5.5 1.5 1.5 0 0 1-3 0A8.5 8.5 0 0 1 15.5 7a1.5 1.5 0 0 1 0 3m0 1a4.5 4.5 0 0 0-4.5 4.5 2.5 2.5 0 0 1-5 0A9.5 9.5 0 0 1 15.5 6a2.5 2.5 0 0 1 0 5M9 15.5A6.5 6.5 0 0 1 15.5 9a.5.5 0 0 0 0-1A7.5 7.5 0 0 0 8 15.5a.5.5 0 0 0 1 0',
      clipRule: 'evenodd'
    })
  });
});
let X = memo(e => {
  return jsxs('svg', {
    width: '24',
    height: '24',
    fill: 'none',
    viewBox: '0 0 24 24',
    ...e,
    children: [jsx('path', {
      fill: 'var(--color-icon-tertiary)',
      fillRule: 'evenodd',
      d: 'M14 5H5v9h5v5h9v-9h-5z',
      clipRule: 'evenodd'
    }), jsx('path', {
      fill: 'var(--color-icon)',
      fillRule: 'evenodd',
      d: 'M10 14v5h9v-9h-5V5H5v9zM4 5v9a1 1 0 0 0 1 1h4v4a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1h-4V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1',
      clipRule: 'evenodd'
    })]
  });
});
let et = memo(e => {
  return jsx('svg', {
    width: '24',
    height: '24',
    fill: 'none',
    viewBox: '0 0 24 24',
    ...e,
    children: jsx('path', {
      fill: 'var(--color-icon)',
      fillRule: 'evenodd',
      d: 'M11 5.5a.5.5 0 0 1 1 0v12a.5.5 0 0 1-1 0zm-1 11.68c0 .33-.309.574-.62.466a6.503 6.503 0 0 1 0-12.292c.311-.108.62.136.62.466a.545.545 0 0 1-.368.506 5.502 5.502 0 0 0 0 10.349.545.545 0 0 1 .368.505M13 6.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V8h1.5a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5H16v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1H15v-1.5a.5.5 0 0 1 .5-.5H17V9h-1.5a.5.5 0 0 1-.5-.5V7h-1.5a.5.5 0 0 1-.5-.5',
      clipRule: 'evenodd'
    })
  });
});
let en = memo(e => {
  return jsx('svg', {
    width: '24',
    height: '24',
    fill: 'none',
    viewBox: '0 0 24 24',
    ...e,
    children: jsx('path', {
      fill: 'var(--color-icon)',
      fillRule: 'evenodd',
      d: 'M9 7a3 3 0 1 1 6 0v.5a.5.5 0 0 0 1 0V7a4 4 0 0 0-8 0v3h-.125C6.839 10 6 10.84 6 11.875v5.25C6 18.16 6.84 19 7.875 19h8.25C17.16 19 18 18.16 18 17.125v-5.25C18 10.839 17.16 10 16.125 10H9zm-2 4.875c0-.483.392-.875.875-.875h8.25c.483 0 .875.392.875.875v5.25a.875.875 0 0 1-.875.875h-8.25A.875.875 0 0 1 7 17.125z',
      clipRule: 'evenodd'
    })
  });
});
let em = memo(e => {
  return _$$O2() ? jsx('svg', {
    width: '24',
    height: '24',
    fill: 'none',
    viewBox: '0 0 24 24',
    ...e,
    children: jsx('path', {
      fill: 'var(--color-icon)',
      fillRule: 'evenodd',
      d: 'M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12m0 1a7 7 0 1 0 0-14 7 7 0 0 0 0 14M10.995 8.57a.5.5 0 0 0-.99-.14L9.852 9.5H8.5a.5.5 0 0 0 0 1h1.21l-.43 3H8.5a.5.5 0 0 0 0 1h.638l-.133.93a.5.5 0 1 0 .99.14l.153-1.07h2.99l-.133.93a.5.5 0 0 0 .99.14l.153-1.07H15.5a.5.5 0 0 0 0-1h-1.21l.43-3h.78a.5.5 0 0 0 0-1h-.638l.133-.93a.5.5 0 0 0-.99-.14l-.153 1.07h-2.99zm2.286 4.93h-2.99l.428-3h2.99z',
      clipRule: 'evenodd'
    })
  }) : jsx('svg', {
    width: '24',
    height: '24',
    fill: 'none',
    viewBox: '0 0 24 24',
    ...e,
    children: jsx('path', {
      fill: 'var(--color-icon)',
      fillRule: 'evenodd',
      d: 'M11.5 17a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11m0 1a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13m-1.002-9.458a.5.5 0 0 0-.996-.084L9.457 9H8.5a.5.5 0 0 0 0 1h.873l-.25 3H8.5a.5.5 0 0 0 0 1h.54l-.038.459a.5.5 0 0 0 .996.082l.045-.541h2.497l-.038.459a.5.5 0 0 0 .996.082l.045-.541h.957a.5.5 0 0 0 0-1h-.873l.25-3h.623a.5.5 0 0 0 0-1h-.54l.038-.458a.5.5 0 0 0-.996-.084L12.957 9H10.46zM12.623 13h-2.496l.25-3h2.496z',
      clipRule: 'evenodd'
    })
  });
});
let eU = memo(e => {
  return jsx('svg', {
    width: '24',
    height: '24',
    fill: 'none',
    viewBox: '0 0 24 24',
    ...e,
    children: jsx('path', {
      fill: 'var(--color-icon)',
      fillRule: 'evenodd',
      d: 'M8 8h2v2H8zm5 2h-2V8h2zm4 0h1V9a1 1 0 0 0-1-1zm-1 0V8h-2v2zM6 9a1 1 0 0 1 1-1v2H6zm6 4v-2h2v2zm3 0v-2h3v2zm-7-2H6v2h2zm1 0v2h2v-2zm-3 3v1a1 1 0 0 0 1 1h1v-2zm10 2h1a1 1 0 0 0 1-1v-1h-2zM5 9a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2zm4 5h6v2H9z',
      clipRule: 'evenodd'
    })
  });
});
let eB = memo(e => {
  return jsx('svg', {
    width: '24',
    height: '24',
    fill: 'none',
    viewBox: '0 0 24 24',
    ...e,
    children: jsx('path', {
      fill: 'var(--color-icon)',
      fillRule: 'evenodd',
      d: 'M8 8h8a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2m-3 2a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3zm7.992 2L11 13.138v-2.276zm-1.87-2.22a.75.75 0 0 0-1.122.65v3.14a.75.75 0 0 0 1.122.65l2.746-1.569a.75.75 0 0 0 0-1.302z',
      clipRule: 'evenodd'
    })
  });
});
let eV = memo(e => {
  return jsx('svg', {
    width: '24',
    height: '24',
    fill: 'none',
    viewBox: '0 0 24 24',
    ...e,
    children: jsx('path', {
      fill: 'var(--color-icon)',
      fillRule: 'evenodd',
      d: 'M15.5 6h-7a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-11a.5.5 0 0 0-.5-.5m-7-1A1.5 1.5 0 0 0 7 6.5v11A1.5 1.5 0 0 0 8.5 19h7a1.5 1.5 0 0 0 1.5-1.5v-11A1.5 1.5 0 0 0 15.5 5zm5.354 3.146a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708 0l-1-1a.5.5 0 0 1 .708-.708l.646.647 1.646-1.647a.5.5 0 0 1 .708 0m0 5.708a.5.5 0 0 0-.708-.708L11.5 14.793l-.646-.647a.5.5 0 0 0-.708.708l1 1a.5.5 0 0 0 .708 0z',
      clipRule: 'evenodd'
    })
  });
});
let eK = memo(e => {
  return jsx('svg', {
    width: '24',
    height: '24',
    fill: 'none',
    viewBox: '0 0 24 24',
    ...e,
    children: jsx('path', {
      fill: 'var(--color-icon)',
      fillRule: 'evenodd',
      d: 'M14.724 5.053a.5.5 0 0 1 .223.67l-.5 1a.5.5 0 1 1-.894-.446l.5-1a.5.5 0 0 1 .67-.224m3.13 1.094a.5.5 0 0 1 0 .707l-1.5 1.5a.5.5 0 0 1-.708-.707l1.5-1.5a.5.5 0 0 1 .707 0m-6.208.5a.5.5 0 0 1 .707 0l5 5a.5.5 0 0 1 0 .707l-2 2a.5.5 0 0 1-.195.12l-2.888.963-2.71 2.71a1.5 1.5 0 0 1-2.12 0L5.853 16.56a1.5 1.5 0 0 1 0-2.121l2.709-2.71.963-2.888a.5.5 0 0 1 .12-.195zm-1.428 3.279 3.856 3.856-2.232.744a.5.5 0 0 0-.196.12l-2.79 2.794a.5.5 0 0 1-.708 0l-1.585-1.585a.5.5 0 0 1 0-.707l2.793-2.793a.5.5 0 0 0 .12-.196zM15 13.293 16.293 12 12 7.707 10.707 9zm3.947-4.016a.5.5 0 0 1-.223.67l-1 .5a.5.5 0 1 1-.448-.894l1-.5a.5.5 0 0 1 .671.223m-7.593 3.37a.5.5 0 0 1 0 .707l-.5.5a.5.5 0 0 1-.708-.707l.5-.5a.5.5 0 0 1 .707 0',
      clipRule: 'evenodd'
    })
  });
});
let tr = memo(e => {
  return jsx('svg', {
    width: '24',
    height: '24',
    fill: 'none',
    viewBox: '0 0 24 24',
    ...e,
    children: jsx('path', {
      fill: 'var(--color-icon)',
      fillRule: 'evenodd',
      d: 'M11.5 5a.5.5 0 0 0 0 1H13v12h-1.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1H14V6h1.5a.5.5 0 0 0 0-1zm-5 4a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h5a.5.5 0 0 1 0 1h-5A1.5 1.5 0 0 1 5 14.5v-5A1.5 1.5 0 0 1 6.5 8h5a.5.5 0 0 1 0 1zm11 0a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 0 0 1h2a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 17.5 8h-2a.5.5 0 0 0 0 1z',
      clipRule: 'evenodd'
    })
  });
});
async function tR(e) {
  let t = [];
  let i = i => {
    let n = {
      label: function (e) {
        let t;
        if ('message' in e) {
          if (t = e.message, e.message) {
            ;
          } else {
            let t = [];
            e.button && ('text' in e.button ? t.push(e.button.text) : ('primary' in e.button && t.push(e.button.primary.text), 'secondary' in e.button && t.push(e.button.secondary.text)));
          }
        } else {
          'i18n' in e ? t = e.i18n?.id !== void 0 ? BellId[e.i18n.id] : void 0 : 'messageComponentKey' in e && (t = e.messageComponentKey);
        }
        if (t) return t;
        {
          let t = [];
          e.button && ('text' in e.button ? t.push(e.button.text) : ('primary' in e.button && t.push(e.button.primary.text), 'secondary' in e.button && t.push(e.button.secondary.text)));
          return `[${t.join('|')}]`;
        }
      }(i)
    };
    t.push(n);
    i.button && ('text' in i.button ? i.button.action = () => {
      n.firstButtonClickCount = (n.firstButtonClickCount ?? 0) + 1;
    } : ('primary' in i.button && (i.button.primary.action = () => {
      n.firstButtonClickCount = (n.firstButtonClickCount ?? 0) + 1;
    }), 'secondary' in i.button && (i.button.secondary.action = () => {
      n.secondButtonClickCount = (n.secondButtonClickCount ?? 0) + 1;
    })));
    e.dispatch(VisualBellActions.enqueue({
      ...i,
      onDequeue: e => {
        n.dismissReason = e;
        n.dismissTime = +Date.now();
      }
    }));
  };
  i({
    message: 'Short message'
  });
  i({
    message: 'Short message with icon',
    icon: VisualBellIcon.EXCLAMATION
  });
  i({
    message: 'This is a longer message and I expect it to wrap around to the next line and possibly even be truncated. Lorem ipsum dolor set amet'
  });
  i({
    message: 'Error bell',
    error: !0
  });
  i({
    i18n: {
      id: BellId.FILE_MOVE_FOLDER_BELL_ID,
      params: {
        text: 'Some folder'
      }
    }
  });
  i({
    i18n: {
      id: BellId.FILE_MOVE_FOLDER_BELL_ID,
      params: {
        text: 'Some folder'
      }
    }
  });
  i({
    message: 'Single button bell',
    button: {
      text: 'Do it',
      action: lQ
    }
  });
  i({
    message: 'Single button bell with icon',
    icon: VisualBellIcon.RETURN_TO_INSTANCE,
    button: {
      text: 'Do it',
      action: lQ
    }
  });
  i({
    message: 'Two button bell',
    button: {
      primary: {
        text: 'Do one thing',
        action: lQ
      },
      secondary: {
        text: 'Do another',
        action: lQ
      }
    }
  });
  i({
    message: '',
    button: {
      text: 'Button without message',
      action: lQ
    }
  });
  await new Promise(t => {
    queueMicrotask(() => {
      let i = e.subscribe(() => {
        e.getState().visualBell.length === 0 && (i(), t());
      });
    });
  });
  logger.table(t);
}
function tU(e, t, i) {
  return {
    name: e,
    get checked() {
      return i.devHandoffCodeLanguage.id === t;
    },
    callback: (e, i, n) => {
      n(dX({
        codeLanguage: SupportedPlatforms[t]
      }));
    }
  };
}
function tB(e, t, i, n, r) {
  let a = n.devHandoffCodeLanguage;
  let s = n.devHandoffPreferences;
  return {
    name: e,
    displayForQuickCommand: t,
    args: r,
    get checked() {
      return (s.codeExtensionPreferences[a.id]?.unit ?? MeasurementUnit.PIXEL) === i;
    },
    callback: () => {
      updateCodeExtensionPreferences(s, a, {
        unit: i
      });
    }
  };
}
let tQ = {
  'Potea - Screen - Reviews - Cleaned': {
    detections: [{
      score: 0.99,
      box: {
        x: 0,
        y: 0,
        width: 428,
        height: 44
      }
    }, {
      score: 0.99,
      box: {
        x: 24,
        y: 68,
        width: 380,
        height: 48
      }
    }, {
      score: 0.99,
      box: {
        x: 24,
        y: 140,
        width: 380,
        height: 38
      }
    }, {
      score: 0.99,
      box: {
        x: 24,
        y: 202,
        width: 380,
        height: 776
      }
    }]
  },
  'Potea - Screen - Home - Cleaned': {
    detections: [{
      score: 0.99,
      box: {
        x: 0,
        y: 0,
        width: 428,
        height: 44
      }
    }, {
      score: 0.99,
      box: {
        x: 24,
        y: 68,
        width: 380,
        height: 52
      }
    }, {
      score: 0.99,
      box: {
        x: 24,
        y: 144,
        width: 380,
        height: 56
      }
    }, {
      score: 0.99,
      box: {
        x: 24,
        y: 224,
        width: 380,
        height: 24
      }
    }, {
      score: 0.99,
      box: {
        x: 24,
        y: 272,
        width: 1008,
        height: 362
      }
    }, {
      score: 0.99,
      box: {
        x: 24,
        y: 658,
        width: 380,
        height: 24
      }
    }, {
      score: 0.99,
      box: {
        x: 24,
        y: 706,
        width: 380,
        height: 38
      }
    }, {
      score: 0.99,
      box: {
        x: 24,
        y: 768,
        width: 380,
        height: 882
      }
    }, {
      score: 0.99,
      box: {
        x: 0,
        y: 1674,
        width: 428,
        height: 98
      }
    }]
  },
  'Potea - Screen - Log In - Cleaned': {
    detections: [{
      score: 0.99,
      box: {
        x: 0,
        y: 0,
        width: 428,
        height: 44
      }
    }, {
      score: 0.99,
      box: {
        x: 24,
        y: 69,
        width: 380,
        height: 48
      }
    }, {
      score: 0.99,
      box: {
        x: 138.5,
        y: 166.80078125,
        width: 151,
        height: 68
      }
    }, {
      score: 0.99,
      box: {
        x: 24,
        y: 284.599609375,
        width: 380,
        height: 38
      }
    }, {
      score: 0.99,
      box: {
        x: 24,
        y: 372.400390625,
        width: 380,
        height: 262
      }
    }, {
      score: 0.99,
      box: {
        x: 24,
        y: 684.2001953125,
        width: 380,
        height: 125
      }
    }, {
      score: 0.99,
      box: {
        x: 24,
        y: 859,
        width: 380,
        height: 20
      }
    }]
  },
  'Youtube - Screen - Home - Cleaned': {
    detections: [{
      score: 0.99,
      box: {
        x: 0,
        y: 0,
        width: 428,
        height: 56
      }
    }, {
      score: 0.99,
      box: {
        x: 0,
        y: 56,
        width: 428,
        height: 4
      }
    }, {
      score: 0.99,
      box: {
        x: 0,
        y: 60,
        width: 428,
        height: 120
      }
    }, {
      score: 0.99,
      box: {
        x: 0,
        y: 180,
        width: 428,
        height: 4
      }
    }, {
      score: 0.99,
      box: {
        x: 0,
        y: 184,
        width: 428,
        height: 54
      }
    }, {
      score: 0.99,
      box: {
        x: 0,
        y: 238,
        width: 428,
        height: 283
      }
    }, {
      score: 0.99,
      box: {
        x: 0,
        y: 525,
        width: 428,
        height: 283
      }
    }, {
      score: 0.99,
      box: {
        x: 0,
        y: 812,
        width: 428,
        height: 283
      }
    }, {
      score: 0.99,
      box: {
        x: 0,
        y: 1099,
        width: 428,
        height: 283
      }
    }, {
      score: 0.99,
      box: {
        x: 0,
        y: 1382,
        width: 428,
        height: 68
      }
    }]
  },
  'Potea - Screen - Product Page': {
    detections: [{
      score: 0.99,
      box: {
        x: 0,
        y: 0,
        width: 428,
        height: 43
      }
    }, {
      score: 0.99,
      box: {
        x: 0,
        y: 43,
        width: 428,
        height: 476
      }
    }, {
      score: 0.99,
      box: {
        x: 166,
        y: 519,
        width: 96.00000762939453,
        height: 24
      }
    }, {
      score: 0.99,
      box: {
        x: 24,
        y: 67,
        width: 28,
        height: 28
      }
    }, {
      score: 0.99,
      box: {
        x: 0,
        y: 543,
        width: 428,
        height: 402
      }
    }]
  },
  'YouTube - Screen - Library': {
    detections: [{
      score: 0.99,
      box: {
        x: 0,
        y: 0,
        width: 428,
        height: 56
      }
    }, {
      score: 0.99,
      box: {
        x: 0,
        y: 56,
        width: 428,
        height: 4
      }
    }, {
      score: 0.99,
      box: {
        x: 0,
        y: 60,
        width: 428,
        height: 31
      }
    }, {
      score: 0.99,
      box: {
        x: 0,
        y: 91,
        width: 428,
        height: 178
      }
    }, {
      score: 0.99,
      box: {
        x: 0,
        y: 269,
        width: 428,
        height: 4
      }
    }, {
      score: 0.99,
      box: {
        x: 0,
        y: 273,
        width: 428,
        height: 286
      }
    }, {
      score: 0.99,
      box: {
        x: 0,
        y: 559,
        width: 428,
        height: 4
      }
    }, {
      score: 0.99,
      box: {
        x: 0,
        y: 563,
        width: 428,
        height: 220
      }
    }, {
      score: 0.99,
      box: {
        x: 0,
        y: 783,
        width: 428,
        height: 68
      }
    }]
  },
  'Spotify - Album View - Auto Layout': {
    detections: [{
      score: 0.99,
      box: {
        x: 0,
        y: 0,
        width: 450,
        height: 44
      }
    }, {
      score: 0.99,
      box: {
        x: 24,
        y: 68,
        width: 402,
        height: 276
      }
    }, {
      score: 0.99,
      box: {
        x: 24,
        y: 384,
        width: 402,
        height: 165
      }
    }, {
      score: 0.99,
      box: {
        x: 24,
        y: 565,
        width: 402,
        height: 259
      }
    }, {
      score: 0.99,
      box: {
        x: 0,
        y: 676,
        width: 450,
        height: 250
      }
    }]
  },
  'Spotify - Playlist Search - Auto Layout': {
    detections: [{
      score: 0.99,
      box: {
        x: 0,
        y: 0,
        width: 450,
        height: 44
      }
    }, {
      score: 0.99,
      box: {
        x: 24,
        y: 68,
        width: 402,
        height: 440
      }
    }, {
      score: 0.99,
      box: {
        x: 24,
        y: 520,
        width: 402,
        height: 88
      }
    }, {
      score: 0.99,
      box: {
        x: 24,
        y: 624,
        width: 402,
        height: 168
      }
    }, {
      score: 0.99,
      box: {
        x: 0,
        y: 676,
        width: 450,
        height: 250
      }
    }]
  },
  'Spotify - Chose Podcasts - Auto Layout': {
    detections: [{
      score: 0.99,
      box: {
        x: 0,
        y: 0,
        width: 450,
        height: 44
      }
    }, {
      score: 0.99,
      box: {
        x: 0,
        y: 44,
        width: 450,
        height: 189
      }
    }, {
      score: 0.99,
      box: {
        x: 24,
        y: 281,
        width: 112,
        height: 168
      }
    }, {
      score: 0.99,
      box: {
        x: 169,
        y: 281,
        width: 112,
        height: 152
      }
    }, {
      score: 0.99,
      box: {
        x: 314,
        y: 281,
        width: 112,
        height: 168
      }
    }, {
      score: 0.99,
      box: {
        x: 24,
        y: 461,
        width: 112,
        height: 152
      }
    }, {
      score: 0.99,
      box: {
        x: 169,
        y: 461,
        width: 112,
        height: 168
      }
    }, {
      score: 0.99,
      box: {
        x: 314,
        y: 461,
        width: 112,
        height: 152
      }
    }, {
      score: 0.99,
      box: {
        x: 24,
        y: 641,
        width: 112,
        height: 168
      }
    }, {
      score: 0.99,
      box: {
        x: 169,
        y: 641,
        width: 112,
        height: 152
      }
    }, {
      score: 0.99,
      box: {
        x: 314,
        y: 641,
        width: 112,
        height: 168
      }
    }, {
      score: 0.99,
      box: {
        x: 24,
        y: 821,
        width: 112,
        height: 152
      }
    }, {
      score: 0.99,
      box: {
        x: 169,
        y: 821,
        width: 112,
        height: 168
      }
    }, {
      score: 0.99,
      box: {
        x: 314,
        y: 821,
        width: 112,
        height: 152
      }
    }, {
      score: 0.99,
      box: {
        x: 0,
        y: 676,
        width: 450,
        height: 250
      }
    }]
  },
  'Music Player - Screen': {
    detections: [{
      score: 0.99,
      box: {
        x: 25,
        y: 65,
        width: 340,
        height: 24
      }
    }, {
      score: 0.99,
      box: {
        x: 25,
        y: 129,
        width: 340,
        height: 340
      }
    }, {
      score: 0.99,
      box: {
        x: 25,
        y: 508,
        width: 340,
        height: 56
      }
    }, {
      score: 0.99,
      box: {
        x: 25,
        y: 606,
        width: 340,
        height: 28
      }
    }, {
      score: 0.99,
      box: {
        x: 25,
        y: 684,
        width: 340,
        height: 64
      }
    }, {
      score: 0.99,
      box: {
        x: -249.51953125,
        y: 676.8084225297971,
        width: 655.1994601669194,
        height: 514.700671580893
      }
    }, {
      score: 0.99,
      box: {
        x: 181,
        y: -189.720703125,
        width: 326.9999694824219,
        height: 322.01214599609375
      }
    }]
  },
  'Yoga - Homepage': {
    detections: [{
      score: 0.99,
      box: {
        x: 20,
        y: 28,
        width: 341,
        height: 36
      }
    }, {
      score: 0.99,
      box: {
        x: 20,
        y: 94,
        width: 341,
        height: 120
      }
    }, {
      score: 0.99,
      box: {
        x: 20,
        y: 229,
        width: 341,
        height: 590
      }
    }, {
      score: 0.99,
      box: {
        x: 0,
        y: 845,
        width: 381,
        height: 51
      }
    }]
  },
  'Happn - Sign In': {
    detections: [{
      score: 0.99,
      box: {
        x: 0,
        y: 0,
        width: 380,
        height: 47
      }
    }, {
      score: 0.99,
      box: {
        x: 13,
        y: 47,
        width: 50,
        height: 50
      }
    }, {
      score: 0.99,
      box: {
        x: 13,
        y: 97,
        width: 354,
        height: 359
      }
    }, {
      score: 0.99,
      box: {
        x: 13,
        y: 456,
        width: 354,
        height: 359
      }
    }, {
      score: 0.99,
      box: {
        x: 123,
        y: 815,
        width: 134,
        height: 29
      }
    }, {
      score: 0.99,
      box: {
        x: -66,
        y: 293.2529296875,
        width: 1190,
        height: 551
      }
    }]
  },
  'Shoes-Checkout': {
    detections: [{
      score: 0.99,
      box: {
        x: 0,
        y: 0,
        width: 375,
        height: 78
      }
    }, {
      score: 0.99,
      box: {
        x: 0,
        y: 103,
        width: 375,
        height: 90
      }
    }, {
      score: 0.99,
      box: {
        x: 0,
        y: 209,
        width: 375,
        height: 8
      }
    }, {
      score: 0.99,
      box: {
        x: 0,
        y: 233,
        width: 375,
        height: 396
      }
    }, {
      score: 0.99,
      box: {
        x: 0,
        y: 645,
        width: 375,
        height: 8
      }
    }, {
      score: 0.99,
      box: {
        x: 0,
        y: 669,
        width: 375,
        height: 31
      }
    }, {
      score: 0.99,
      box: {
        x: 0,
        y: 716,
        width: 648,
        height: 112
      }
    }, {
      score: 0.99,
      box: {
        x: 0,
        y: 844,
        width: 375,
        height: 124
      }
    }]
  },
  'Shoes-AddAddress': {
    detections: [{
      score: 0.99,
      box: {
        x: 0,
        y: 0,
        width: 375,
        height: 78
      }
    }, {
      score: 0.99,
      box: {
        x: 16,
        y: 94,
        width: 90,
        height: 13
      }
    }, {
      score: 0.99,
      box: {
        x: 16,
        y: 123,
        width: 343,
        height: 282
      }
    }, {
      score: 0.99,
      box: {
        x: 16,
        y: 437,
        width: 343,
        height: 360
      }
    }, {
      score: 0.99,
      box: {
        x: 16,
        y: 829,
        width: 343,
        height: 194
      }
    }, {
      score: 0.99,
      box: {
        x: 16,
        y: 1055,
        width: 343,
        height: 56
      }
    }]
  },
  'Profile Page': {
    detections: [{
      score: 0.99,
      box: {
        x: 0,
        y: 0,
        width: 375,
        height: 44
      }
    }, {
      score: 0.99,
      box: {
        x: 0,
        y: 44,
        width: 375,
        height: 60
      }
    }, {
      score: 0.99,
      box: {
        x: 24,
        y: 128,
        width: 327,
        height: 192
      }
    }, {
      score: 0.99,
      box: {
        x: 24,
        y: 336,
        width: 327,
        height: 268
      }
    }]
  },
  '3legant - CheckOut': {
    detections: [{
      score: 0.99,
      box: {
        x: 0,
        y: 0,
        width: 376,
        height: 36
      }
    }, {
      score: 0.99,
      box: {
        x: 0,
        y: 36,
        width: 376,
        height: 60
      }
    }, {
      score: 0.99,
      box: {
        x: 32,
        y: 112,
        width: 49,
        height: 24
      }
    }, {
      score: 0.99,
      box: {
        x: 32,
        y: 176,
        width: 312,
        height: 134
      }
    }, {
      score: 0.99,
      box: {
        x: 32,
        y: 350,
        width: 312,
        height: 1292
      }
    }, {
      score: 0.99,
      box: {
        x: 32,
        y: 1666,
        width: 312,
        height: 810
      }
    }, {
      score: 0.99,
      box: {
        x: 32,
        y: 2500,
        width: 312,
        height: 52
      }
    }, {
      score: 0.99,
      box: {
        x: 0,
        y: 2632,
        width: 376,
        height: 665
      }
    }]
  },
  '3legant - Cart': {
    detections: [{
      score: 0.99,
      box: {
        x: 0,
        y: 0,
        width: 1280,
        height: 60
      }
    }, {
      score: 0.99,
      box: {
        x: 80,
        y: 140,
        width: 1120,
        height: 166
      }
    }, {
      score: 0.99,
      box: {
        x: 80,
        y: 306,
        width: 1120,
        height: 642
      }
    }, {
      score: 0.99,
      box: {
        x: 80,
        y: 948,
        width: 424,
        height: 129
      }
    }, {
      score: 0.99,
      box: {
        x: 0,
        y: 1157,
        width: 1280,
        height: 261
      }
    }]
  },
  '3legant - Order Complete': {
    detections: [{
      score: 0.99,
      box: {
        x: 0,
        y: 0,
        width: 376,
        height: 36
      }
    }, {
      score: 0.99,
      box: {
        x: 0,
        y: 36,
        width: 376,
        height: 60
      }
    }, {
      score: 0.99,
      box: {
        x: 32,
        y: 112,
        width: 107,
        height: 24
      }
    }, {
      score: 0.99,
      box: {
        x: 32,
        y: 176,
        width: 312,
        height: 134
      }
    }, {
      score: 0.99,
      box: {
        x: 32,
        y: 350,
        width: 312,
        height: 794
      }
    }, {
      score: 0.99,
      box: {
        x: 0,
        y: 1224,
        width: 376,
        height: 665
      }
    }]
  },
  '3legant - My Account/wishlist': {
    detections: [{
      score: 0.99,
      box: {
        x: 0,
        y: 0,
        width: 376,
        height: 36
      }
    }, {
      score: 0.99,
      box: {
        x: 0,
        y: 36,
        width: 376,
        height: 60
      }
    }, {
      score: 0.99,
      box: {
        x: 32,
        y: 112,
        width: 49,
        height: 24
      }
    }, {
      score: 0.99,
      box: {
        x: 32,
        y: 176,
        width: 312,
        height: 44
      }
    }, {
      score: 0.99,
      box: {
        x: 32,
        y: 260,
        width: 312,
        height: 288
      }
    }, {
      score: 0.99,
      box: {
        x: 32,
        y: 588,
        width: 312,
        height: 774
      }
    }, {
      score: 0.99,
      box: {
        x: 0,
        y: 1442,
        width: 376,
        height: 665
      }
    }]
  },
  '3legant - My Account/orders': {
    detections: [{
      score: 0.99,
      box: {
        x: 0,
        y: 0,
        width: 376,
        height: 36
      }
    }, {
      score: 0.99,
      box: {
        x: 0,
        y: 36,
        width: 376,
        height: 60
      }
    }, {
      score: 0.99,
      box: {
        x: 32,
        y: 112,
        width: 49,
        height: 24
      }
    }, {
      score: 0.99,
      box: {
        x: 32,
        y: 176,
        width: 312,
        height: 44
      }
    }, {
      score: 0.99,
      box: {
        x: 32,
        y: 260,
        width: 312,
        height: 288
      }
    }, {
      score: 0.99,
      box: {
        x: 32,
        y: 588,
        width: 312,
        height: 744
      }
    }, {
      score: 0.99,
      box: {
        x: 0,
        y: 1412,
        width: 376,
        height: 665
      }
    }]
  },
  '3legant - My Account/Address': {
    detections: [{
      score: 0.99,
      box: {
        x: 0,
        y: 0,
        width: 376,
        height: 36
      }
    }, {
      score: 0.99,
      box: {
        x: 0,
        y: 36,
        width: 376,
        height: 60
      }
    }, {
      score: 0.99,
      box: {
        x: 32,
        y: 112,
        width: 49,
        height: 24
      }
    }, {
      score: 0.99,
      box: {
        x: 32,
        y: 176,
        width: 312,
        height: 44
      }
    }, {
      score: 0.99,
      box: {
        x: 32,
        y: 260,
        width: 312,
        height: 682
      }
    }, {
      score: 0.99,
      box: {
        x: 0,
        y: 1022,
        width: 376,
        height: 665
      }
    }]
  },
  '3legant - My Account': {
    detections: [{
      score: 0.99,
      box: {
        x: 0,
        y: 0,
        width: 1280,
        height: 60
      }
    }, {
      score: 0.99,
      box: {
        x: 80,
        y: 60,
        width: 1120,
        height: 218
      }
    }, {
      score: 0.99,
      box: {
        x: 80,
        y: 278,
        width: 262,
        height: 828
      }
    }, {
      score: 0.99,
      box: {
        x: 349,
        y: 278,
        width: 851,
        height: 828
      }
    }, {
      score: 0.99,
      box: {
        x: 0,
        y: 1186,
        width: 1280,
        height: 261
      }
    }]
  },
  'Electronic Store - Product Page - Autolayout': {
    detections: [{
      score: 0.99,
      box: {
        x: 0,
        y: 0,
        width: 360,
        height: 56
      }
    }, {
      score: 0.99,
      box: {
        x: 0,
        y: 56,
        width: 360,
        height: 305
      }
    }, {
      score: 0.99,
      box: {
        x: 0,
        y: 361,
        width: 360,
        height: 387
      }
    }, {
      score: 0.99,
      box: {
        x: 0,
        y: 748,
        width: 360,
        height: 140
      }
    }, {
      score: 0.99,
      box: {
        x: 0,
        y: 888,
        width: 360,
        height: 282
      }
    }]
  },
  'Electronic Store - Home - Autolayout': {
    detections: [{
      score: 0.99,
      box: {
        x: 0,
        y: 0,
        width: 360,
        height: 56
      }
    }, {
      score: 0.99,
      box: {
        x: 0,
        y: 56,
        width: 360,
        height: 108
      }
    }, {
      score: 0.99,
      box: {
        x: 0,
        y: 164,
        width: 360,
        height: 180
      }
    }, {
      score: 0.99,
      box: {
        x: 0,
        y: 354,
        width: 360,
        height: 244
      }
    }, {
      score: 0.99,
      box: {
        x: 0,
        y: 608,
        width: 360,
        height: 270
      }
    }, {
      score: 0.99,
      box: {
        x: 0,
        y: 888,
        width: 360,
        height: 270
      }
    }, {
      score: 0.99,
      box: {
        x: 0,
        y: 1168,
        width: 360,
        height: 150
      }
    }, {
      score: 0.99,
      box: {
        x: 0,
        y: 1328,
        width: 360,
        height: 1042
      }
    }]
  },
  'Monito - Homepage': {
    detections: [{
      score: 0.99,
      box: {
        x: 0,
        y: 0,
        width: 1296,
        height: 695
      }
    }, {
      score: 0.99,
      box: {
        x: 40,
        y: 755,
        width: 1216,
        height: 854
      }
    }, {
      score: 0.99,
      box: {
        x: 40,
        y: 1669,
        width: 1216,
        height: 330
      }
    }, {
      score: 0.99,
      box: {
        x: 40,
        y: 2059,
        width: 1216,
        height: 1014
      }
    }, {
      score: 0.99,
      box: {
        x: 40,
        y: 3133,
        width: 1216,
        height: 176
      }
    }, {
      score: 0.99,
      box: {
        x: 40,
        y: 3369,
        width: 1216,
        height: 330
      }
    }, {
      score: 0.99,
      box: {
        x: 40,
        y: 3759,
        width: 1216,
        height: 514
      }
    }, {
      score: 0.99,
      box: {
        x: 0,
        y: 4333,
        width: 1296,
        height: 440
      }
    }, {
      score: 0.99,
      box: {
        x: 0,
        y: 0,
        width: 1296,
        height: 100
      }
    }]
  },
  'Monito - Category Page': {
    detections: [{
      score: 0.99,
      box: {
        x: 0,
        y: 0,
        width: 1280,
        height: 100
      }
    }, {
      score: 0.99,
      box: {
        x: 0,
        y: 100,
        width: 1280,
        height: 429
      }
    }, {
      score: 0.99,
      box: {
        x: 40,
        y: 569,
        width: 280,
        height: 622
      }
    }, {
      score: 0.99,
      box: {
        x: 344,
        y: 569,
        width: 896,
        height: 2116
      }
    }, {
      score: 0.99,
      box: {
        x: 0,
        y: 2725,
        width: 1280,
        height: 440
      }
    }]
  },
  'Monito - Product': {
    detections: [{
      score: 0.99,
      box: {
        x: 0,
        y: 0,
        width: 1440,
        height: 100
      }
    }, {
      score: 0.99,
      box: {
        x: 130,
        y: 120,
        width: 1180,
        height: 826
      }
    }, {
      score: 0.99,
      box: {
        x: 130,
        y: 966,
        width: 1180,
        height: 471
      }
    }, {
      score: 0.99,
      box: {
        x: 0,
        y: 1457,
        width: 1440,
        height: 588
      }
    }, {
      score: 0.99,
      box: {
        x: 0,
        y: 2065,
        width: 1440,
        height: 440
      }
    }]
  },
  '3legant - Complete': {
    detections: [{
      score: 0.99,
      box: {
        x: 0,
        y: 0,
        width: 1280,
        height: 60
      }
    }, {
      score: 0.99,
      box: {
        x: 224,
        y: 140,
        width: 832,
        height: 164
      }
    }, {
      score: 0.99,
      box: {
        x: 367,
        y: 464,
        width: 546,
        height: 138
      }
    }, {
      score: 0.99,
      box: {
        x: 367,
        y: 642,
        width: 546,
        height: 112
      }
    }, {
      score: 0.99,
      box: {
        x: 366,
        y: 794,
        width: 548,
        height: 148
      }
    }, {
      score: 0.99,
      box: {
        x: 538.5,
        y: 982,
        width: 203,
        height: 52
      }
    }, {
      score: 0.99,
      box: {
        x: 0,
        y: 1194,
        width: 1280,
        height: 261
      }
    }]
  },
  '3legant - History': {
    detections: [{
      score: 0.99,
      box: {
        x: 0,
        y: 0,
        width: 1280,
        height: 60
      }
    }, {
      score: 0.99,
      box: {
        x: 80,
        y: 60,
        width: 1120,
        height: 218
      }
    }, {
      score: 0.99,
      box: {
        x: 80,
        y: 278,
        width: 1120,
        height: 498
      }
    }, {
      score: 0.99,
      box: {
        x: 0,
        y: 856,
        width: 1280,
        height: 261
      }
    }]
  },
  '3legant - Check Out': {
    detections: [{
      score: 0.99,
      box: {
        x: 0,
        y: 0,
        width: 1280,
        height: 60
      }
    }, {
      score: 0.99,
      box: {
        x: 80,
        y: 140,
        width: 1120,
        height: 164
      }
    }, {
      score: 0.99,
      box: {
        x: 80,
        y: 384,
        width: 656,
        height: 1386
      }
    }, {
      score: 0.99,
      box: {
        x: 800,
        y: 384,
        width: 400,
        height: 862
      }
    }, {
      score: 0.99,
      box: {
        x: 0,
        y: 1930,
        width: 1280,
        height: 261
      }
    }]
  },
  '3legant - Wishlist': {
    detections: [{
      score: 0.99,
      box: {
        x: 0,
        y: 0,
        width: 1280,
        height: 60
      }
    }, {
      score: 0.99,
      box: {
        x: 80,
        y: 60,
        width: 1120,
        height: 218
      }
    }, {
      score: 0.99,
      box: {
        x: 80,
        y: 278,
        width: 1120,
        height: 582
      }
    }, {
      score: 0.99,
      box: {
        x: 0,
        y: 940,
        width: 1280,
        height: 261
      }
    }]
  },
  'Electronic Store - Home': {
    detections: [{
      score: 0.99,
      box: {
        x: 0,
        y: 0,
        width: 1440,
        height: 126
      }
    }, {
      score: 0.99,
      box: {
        x: 0,
        y: 156,
        width: 1440,
        height: 400
      }
    }, {
      score: 0.99,
      box: {
        x: 0,
        y: 586,
        width: 1440,
        height: 1213.066650390625
      }
    }, {
      score: 0.99,
      box: {
        x: 0,
        y: 1829.06640625,
        width: 1440,
        height: 692.2392578125
      }
    }, {
      score: 0.99,
      box: {
        x: 0,
        y: 2551.3056640625,
        width: 1440,
        height: 420
      }
    }, {
      score: 0.99,
      box: {
        x: 0,
        y: 3001.3056640625,
        width: 1440,
        height: 494.0001220703125
      }
    }]
  },
  'Electronic Store - Product Page': {
    detections: [{
      score: 0.99,
      box: {
        x: 0,
        y: 0,
        width: 1440,
        height: 126
      }
    }, {
      score: 0.99,
      box: {
        x: 0,
        y: 126,
        width: 1440,
        height: 64
      }
    }, {
      score: 0.99,
      box: {
        x: 130,
        y: 190,
        width: 1180,
        height: 576
      }
    }, {
      score: 0.99,
      box: {
        x: 130,
        y: 786,
        width: 1180,
        height: 613
      }
    }, {
      score: 0.99,
      box: {
        x: 130,
        y: 1419,
        width: 1180,
        height: 319
      }
    }, {
      score: 0.99,
      box: {
        x: 130,
        y: 1758,
        width: 1180,
        height: 120
      }
    }, {
      score: 0.99,
      box: {
        x: 0,
        y: 1966,
        width: 1440,
        height: 304.0001220703125
      }
    }]
  },
  'Dashboard  - 01 - Auto Layout': {
    detections: [{
      score: 0.99,
      box: {
        x: 0,
        y: 0,
        width: 272,
        height: 1028
      }
    }, {
      score: 0.99,
      box: {
        x: 272,
        y: 0,
        width: 1008,
        height: 221
      }
    }, {
      score: 0.99,
      box: {
        x: 336,
        y: 285,
        width: 266.6666564941406,
        height: 671
      }
    }, {
      score: 0.99,
      box: {
        x: 642.66650390625,
        y: 285,
        width: 266.66668701171875,
        height: 490
      }
    }, {
      score: 0.99,
      box: {
        x: 949.3330078125,
        y: 285,
        width: 266.66668701171875,
        height: 671
      }
    }]
  },
  'Data Dashboard': {
    detections: [{
      score: 0.99,
      box: {
        x: 16,
        y: 16,
        width: 1392,
        height: 426
      }
    }, {
      score: 0.99,
      box: {
        x: 16,
        y: 458,
        width: 1392,
        height: 426
      }
    }]
  },
  'Logoi': {
    detections: [{
      score: 0.99,
      box: {
        x: 0,
        y: 0,
        width: 316,
        height: 1097
      }
    }, {
      score: 0.99,
      box: {
        x: 356,
        y: 32,
        width: 884,
        height: 80
      }
    }, {
      score: 0.99,
      box: {
        x: 356,
        y: 142,
        width: 884,
        height: 923
      }
    }]
  },
  'Team Members Table': {
    detections: [{
      score: 0.99,
      box: {
        x: 28,
        y: 34,
        width: 1224,
        height: 112
      }
    }, {
      score: 0.99,
      box: {
        x: 28,
        y: 164,
        width: 62,
        height: 580
      }
    }, {
      score: 0.99,
      box: {
        x: 90,
        y: 164,
        width: 397,
        height: 580
      }
    }, {
      score: 0.99,
      box: {
        x: 487,
        y: 164,
        width: 120,
        height: 580
      }
    }, {
      score: 0.99,
      box: {
        x: 607,
        y: 164,
        width: 397,
        height: 580
      }
    }, {
      score: 0.99,
      box: {
        x: 1004,
        y: 164,
        width: 120,
        height: 580
      }
    }, {
      score: 0.99,
      box: {
        x: 1124,
        y: 164,
        width: 64,
        height: 580
      }
    }, {
      score: 0.99,
      box: {
        x: 1188,
        y: 164,
        width: 64,
        height: 580
      }
    }, {
      score: 0.99,
      box: {
        x: 28,
        y: 762,
        width: 1224,
        height: 32
      }
    }]
  },
  'WeHR': {
    detections: [{
      score: 0.99,
      box: {
        x: 0,
        y: 0,
        width: 242,
        height: 998.435546875
      }
    }, {
      score: 0.99,
      box: {
        x: 242,
        y: 0,
        width: 1198,
        height: 69
      }
    }, {
      score: 0.99,
      box: {
        x: 292,
        y: 93,
        width: 748,
        height: 753
      }
    }, {
      score: 0.99,
      box: {
        x: 1070,
        y: 93,
        width: 320,
        height: 881.435546875
      }
    }]
  },
  'Leads': {
    detections: [{
      score: 0.99,
      box: {
        x: 0,
        y: 0,
        width: 80,
        height: 816
      }
    }, {
      score: 0.99,
      box: {
        x: 116,
        y: 26,
        width: 83,
        height: 32
      }
    }, {
      score: 0.99,
      box: {
        x: 116,
        y: 90,
        width: 1128,
        height: 48
      }
    }, {
      score: 0.99,
      box: {
        x: 116,
        y: 170,
        width: 225.60000610351563,
        height: 620
      }
    }, {
      score: 0.99,
      box: {
        x: 341.60009765625,
        y: 170,
        width: 225.60000610351563,
        height: 620
      }
    }, {
      score: 0.99,
      box: {
        x: 567.2001953125,
        y: 170,
        width: 225.6000213623047,
        height: 620
      }
    }, {
      score: 0.99,
      box: {
        x: 792.7998046875,
        y: 170,
        width: 225.60000610351563,
        height: 620
      }
    }, {
      score: 0.99,
      box: {
        x: 1018.400390625,
        y: 170,
        width: 225.60000610351563,
        height: 620
      }
    }]
  },
  'Table with progress bar': {
    detections: [{
      score: 0.99,
      box: {
        x: 0,
        y: 0,
        width: 1380,
        height: 91
      }
    }, {
      score: 0.99,
      box: {
        x: 0,
        y: 91,
        width: 1380,
        height: 64
      }
    }, {
      score: 0.99,
      box: {
        x: 0,
        y: 155,
        width: 66,
        height: 620
      }
    }, {
      score: 0.99,
      box: {
        x: 66,
        y: 155,
        width: 416.6666564941406,
        height: 620
      }
    }, {
      score: 0.99,
      box: {
        x: 482.66650390625,
        y: 155,
        width: 416.66668701171875,
        height: 620
      }
    }, {
      score: 0.99,
      box: {
        x: 899.33349609375,
        y: 155,
        width: 416.66668701171875,
        height: 620
      }
    }, {
      score: 0.99,
      box: {
        x: 1316,
        y: 155,
        width: 64,
        height: 620
      }
    }, {
      score: 0.99,
      box: {
        x: 0,
        y: 775,
        width: 1380,
        height: 64
      }
    }]
  },
  'Landify - Home Screen - AutoLayout': {
    detections: [{
      score: 0.99,
      box: {
        x: 0,
        y: 0,
        width: 1440,
        height: 816
      }
    }, {
      score: 0.99,
      box: {
        x: 0,
        y: 816,
        width: 1440,
        height: 242
      }
    }, {
      score: 0.99,
      box: {
        x: 0,
        y: 1058,
        width: 1440,
        height: 781
      }
    }, {
      score: 0.99,
      box: {
        x: 0,
        y: 1839,
        width: 1440,
        height: 868
      }
    }, {
      score: 0.99,
      box: {
        x: 0,
        y: 2707,
        width: 1440,
        height: 502
      }
    }, {
      score: 0.99,
      box: {
        x: 0,
        y: 3209,
        width: 1440,
        height: 772.0003051757813
      }
    }, {
      score: 0.99,
      box: {
        x: 0,
        y: 3981,
        width: 1440,
        height: 828.00048828125
      }
    }, {
      score: 0.99,
      box: {
        x: 0,
        y: 4809.0009765625,
        width: 1440,
        height: 600
      }
    }, {
      score: 0.99,
      box: {
        x: 0,
        y: 5409.0009765625,
        width: 1440,
        height: 496
      }
    }]
  },
  'Landify - Coworking Screen - Autolayout': {
    detections: [{
      score: 0.99,
      box: {
        x: 0,
        y: 0,
        width: 1440,
        height: 946
      }
    }, {
      score: 0.99,
      box: {
        x: 0,
        y: 946,
        width: 1440,
        height: 607
      }
    }, {
      score: 0.99,
      box: {
        x: 0,
        y: 1553,
        width: 1440,
        height: 1136
      }
    }, {
      score: 0.99,
      box: {
        x: 0,
        y: 2689,
        width: 1440,
        height: 498
      }
    }, {
      score: 0.99,
      box: {
        x: 0,
        y: 3187,
        width: 1440,
        height: 392
      }
    }, {
      score: 0.99,
      box: {
        x: 0,
        y: 3579,
        width: 1440,
        height: 1276
      }
    }, {
      score: 0.99,
      box: {
        x: 0,
        y: 4855,
        width: 1440,
        height: 742
      }
    }, {
      score: 0.99,
      box: {
        x: 0,
        y: 5597,
        width: 1440,
        height: 708
      }
    }, {
      score: 0.99,
      box: {
        x: 0,
        y: 6305,
        width: 1440,
        height: 732
      }
    }, {
      score: 0.99,
      box: {
        x: 0,
        y: 7037,
        width: 1440,
        height: 496
      }
    }]
  },
  'Workspace - Screen': {
    detections: [{
      score: 0.99,
      box: {
        x: 0,
        y: 0,
        width: 1440,
        height: 866
      }
    }, {
      score: 0.99,
      box: {
        x: 0,
        y: 866,
        width: 1440,
        height: 193
      }
    }, {
      score: 0.99,
      box: {
        x: 0,
        y: 1059,
        width: 1440,
        height: 472
      }
    }, {
      score: 0.99,
      box: {
        x: 0,
        y: 1531,
        width: 1440,
        height: 1060
      }
    }, {
      score: 0.99,
      box: {
        x: 0,
        y: 2591,
        width: 1440,
        height: 502
      }
    }, {
      score: 0.99,
      box: {
        x: 0,
        y: 3093,
        width: 1440,
        height: 732
      }
    }, {
      score: 0.99,
      box: {
        x: 0,
        y: 3825,
        width: 1440,
        height: 256
      }
    }]
  },
  'World Peas - Screen': {
    detections: [{
      score: 0.99,
      box: {
        x: 73,
        y: 59,
        width: 1294,
        height: 49
      }
    }, {
      score: 0.99,
      box: {
        x: 73,
        y: 195,
        width: 1294,
        height: 23
      }
    }, {
      score: 0.99,
      box: {
        x: 73,
        y: 305,
        width: 1294,
        height: 154
      }
    }, {
      score: 0.99,
      box: {
        x: 73,
        y: 546,
        width: 1294,
        height: 660
      }
    }, {
      score: 0.99,
      box: {
        x: 73,
        y: 1293,
        width: 1294,
        height: 290
      }
    }, {
      score: 0.99,
      box: {
        x: 73,
        y: 1670,
        width: 1294,
        height: 301
      }
    }, {
      score: 0.99,
      box: {
        x: 73,
        y: 2058,
        width: 1294,
        height: 421
      }
    }, {
      score: 0.99,
      box: {
        x: 73,
        y: 2653,
        width: 1294,
        height: 343
      }
    }, {
      score: 0.99,
      box: {
        x: 73,
        y: 3170,
        width: 1294,
        height: 119
      }
    }]
  }
};
async function tJ() {
  let e = _$$D5();
  let t = figma.currentPage.selection;
  if (t.length !== 1 || t[0].type !== 'FRAME') {
    logger.log('Please select a single frame to test object detection');
    return;
  }
  let i = t[0];
  let n = await t1(i);
  let r = new Oc();
  let a = {
    value: 1
  };
  for (let t of n.detections) {
    let n = [];
    let s = e => {
      let i = e.absoluteBoundingBox;
      i && function (e, t) {
        let i = Math.max(e.x, t.x);
        let n = Math.max(e.y, t.y);
        return Math.max(0, Math.min(e.x + e.width, t.x + t.width) - i) * Math.max(0, Math.min(e.y + e.height, t.y + t.height) - n) / (e.width * e.height);
      }(i, t.box) > 0.95 ? n.push(e) : 'children' in e && e.children && e.children.forEach(s);
    };
    s(i);
    figma.currentPage.selection = n;
    aJ(n, e, r, a, {
      skipResponsive: !1,
      recurseOnlySingleLayer: !0,
      noRecurse: !1
    }, {
      width: i.absoluteBoundingBox.width,
      height: i.absoluteBoundingBox.height
    }, !0);
  }
  figma.currentPage.selection = [i];
  aJ([i], e, r, a);
}
async function t0() {
  let e = figma.currentPage.selection;
  if (e.length !== 1 || e[0].type !== 'FRAME') {
    logger.log('Please select a single frame to test object detection');
    return;
  }
  let t = e[0];
  (await t1(t)).detections.forEach(e => {
    !function (e, t, i, n, r) {
      let a = figma.createFrame();
      a.x = e;
      a.y = t;
      a.resize(i, n);
      a.fills = [];
      a.name = `${r}`;
      a.strokes = [{
        type: 'SOLID',
        color: {
          r: 1,
          g: 0,
          b: 0
        }
      }];
      a.strokeWeight = 2;
      figma.currentPage.appendChild(a);
    }(e.box.x, e.box.y, e.box.width, e.box.height, e.score);
  });
}
function t1(e) {
  let t = e.absoluteBoundingBox;
  let [i, n] = Thumbnail.generateThumbnailForNode(e.id, t.width, t.height, 1, {});
  let r = encodeBase64(n);
  let a = debugState.getState().openFile;
  return a?.key === 'b2XUNRa1b1UPr0ZqkqiOOu' && tQ[e.name] ? Promise.resolve({
    detections: tQ[e.name].detections.map(t => ({
      score: t.score,
      box: {
        x: t.box.x + e.absoluteBoundingBox.x,
        y: t.box.y + e.absoluteBoundingBox.y,
        width: t.box.width,
        height: t.box.height
      }
    }))
  }) : _$$Ay2.design.sectionDetection({
    image: r,
    imageCoordinates: t
  }, _$$Ay3());
}
let iU = 'test - ';
var iB = (e => (e[e.NOT_STARTED = 0] = 'NOT_STARTED', e[e.IN_PROGRESS = 1] = 'IN_PROGRESS', e[e.COMPLETE = 2] = 'COMPLETE', e))(iB || {});
var iV = (e => (e.PASS = 'PASS', e.FAIL = 'FAIL', e.NO_SUGGESTIONS = 'NO_SUGGESTIONS', e))(iV || {});
let iG = [1, 3, 4, 5, 'MAX'];
let iz = {
  PASS: 0,
  FAIL: 0,
  NO_SUGGESTIONS: 0
};
let iH = Object.fromEntries(iG.map(e => [e, {
  resultCount: iz,
  recall: void 0,
  precision: void 0,
  fBetaScore: void 0
}]));
let iW = {
  progress: {
    numComplete: 0,
    numTotal: 0
  },
  results: iH
};
let iK = registerModal(e => {
  return getFeatureFlags().anticipation && getFeatureFlags().anticipation_eval ? jsx(iY, {
    ...e
  }) : null;
}, 'auto-suggest-eval-modal');
function iY(e) {
  let t = hS(e);
  let i = _$$eY();
  let r = useCurrentFileKey();
  let a = He();
  let [s, o] = useState(0);
  let l = {
    ...k1(),
    loggerConfig: {
      logFunnelEvents: !1,
      logTimers: !1,
      logDebugInfo: !0
    }
  };
  let [d, c] = useState(JSON.stringify(l, null, 2));
  let [u, p] = useState();
  let [m, h] = useState(iW);
  let g = useCallback(async () => {
    if (r && s !== 1) {
      o(1);
      p(null);
      try {
        let e = JSON.parse(d);
        getInitialOptions().anticipation_config = e;
        let t = function (e) {
          let t = [];
          let i = e.getCurrentPage();
          let n = i?.childrenNodes.filter(e => e.type === 'FRAME' && e.name.toLowerCase().startsWith(iU));
          n?.forEach((i, n) => {
            let r = i.name.replace(iU, '');
            let a = i.childrenNodes.find(e => e.type === 'FRAME' && e.name.toLowerCase().startsWith('input'));
            let s = i.childrenNodes.find(e => e.type === 'FRAME' && e.name.toLowerCase().startsWith('expected'));
            if (!a || !s || a.childrenNodes.length === 0) return;
            let o = a.childrenNodes[0];
            let l = o.findAllWithCriteriaGUIDs({
              types: ['FRAME']
            }).map(t => e.get(t)).filter(e => e.borderTopWeight > 0 && e.strokePaints.data.length === 1 && e.strokePaints.data[0].color && e.strokePaints.data[0].color.r > 0.95 && e.strokePaints.data[0].color.g < 0.05 && e.strokePaints.data[0].color.b < 0.05);
            let d = l.length > 0 ? l[0] : o;
            let c = [];
            if (s.childrenNodes.forEach(t => {
              if (!t.symbolId) return;
              let i = e.get(t.symbolId);
              i.stateGroupKey ? c.push(i.stateGroupKey) : i.componentKey && c.push(i.componentKey);
              i.containingStateGroupId && c.push(e.get(i.containingStateGroupId).stateGroupKey);
            }), c.length === 0) {
              i$(`No expected assets found for test: ${r}`, {
                testName: r,
                topLevelNode: o,
                targetNode: d,
                expectedAssetIds: c
              });
              return;
            }
            t.push({
              id: n,
              testName: r,
              topLevelNode: o,
              targetNode: d,
              expectedAssetIds: c
            });
          });
          return t;
        }(i);
        let n = new _$$O5({
          analyticsData: YQ,
          config: e,
          entryPoint: qd.EVAL
        });
        let s = new AbortController();
        let o = new _$$I2(ComponentPanelTab.COMPONENTS, s);
        let l = new iq(h, t, e);
        await Promise.all(t.map(async t => {
          let i = await _$$A6({
            openFileKey: r,
            targetNode: t.targetNode,
            topLevelNode: t.topLevelNode,
            subscribedLibraryKeys: a,
            signal: s.signal,
            autoSuggestSession: o,
            logger: n,
            config: e
          });
          l.addTestResult(t, i, n.debugInfo);
        }));
        p(l);
        i$('Eval complete', l.getDetailedResults(!0));
      } catch (e) {
        i$('Eval failed to run due to error', e);
      } finally {
        o(2);
      }
    }
  }, [i, r, a, d, s, p, h]);
  let f = useCallback(() => {
    u && Dk(u.getSummaryString(), {
      withLineBreaks: !0
    });
  }, [u]);
  let A = useCallback(() => {
    u && Dk(u.getDetailedResultsString(), {
      withLineBreaks: !0
    });
  }, [u]);
  let y = useCallback(() => {
    if (!u) return;
    let e = new Blob([u.getDetailedResultsString(!0)], {
      type: 'application/json'
    });
    let t = URL.createObjectURL(e);
    let i = document.createElement('a');
    i.href = t;
    i.download = `autocomplete_logs_${new Date().toISOString()}.json`;
    document.body.appendChild(i);
    i.click();
    document.body.removeChild(i);
    URL.revokeObjectURL(t);
  }, [u]);
  let b = !r || s === 1;
  return jsxs(bL, {
    manager: t,
    width: 'lg',
    height: 'dynamic',
    children: [jsxs(vo, {
      children: [jsx(Y9, {
        children: jsx(hE, {
          children: renderI18nText('auto_suggest.eval.title')
        })
      }), jsx(nB, {
        children: jsxs('div', {
          children: [jsx(Label, {
            htmlFor: 'config',
            children: renderI18nText('auto_suggest.eval.config.label')
          }), jsx('textarea', {
            rows: 10,
            value: d,
            name: 'config',
            id: 'config',
            onChange: e => c(e.target.value),
            className: 'xh8yej3 x1bamp8i x192jxwq x1jp4ehj xe8ttls x9f619',
            disabled: b
          })]
        })
      }), jsx(wi, {
        children: jsx(jk, {
          children: jsx($n, {
            onClick: g,
            disabled: b,
            children: renderI18nText('auto_suggest.eval.start_button')
          })
        })
      })]
    }), jsx('br', {}), s !== 0 && jsxs(vo, {
      children: [jsx(Y9, {
        children: jsx(hE, {
          children: renderI18nText('auto_suggest.eval.results.title')
        })
      }), jsxs(nB, {
        children: [jsxs('div', {
          children: [jsxs('div', {
            className: 'x78zum5 x1q0g3np x167g77z x6xwguf',
            children: [renderI18nText('auto_suggest.eval.results.tests_run'), ' ', m.progress.numComplete, ' /', ' ', m.progress.numTotal, ' ', b && jsx(_$$k4, {})]
          }), jsx('br', {}), jsxs('div', {
            className: 'x78zum5 x1q0g3np x167g77z',
            children: [iG.map(e => jsxs('div', {
              className: 'xktpd3l x1bamp8i x192jxwq xe8ttls x9f619',
              children: [jsxs('div', {
                className: 'x6xwguf x1n5zjp5 x1y0btm7 xh8yej3',
                children: ['@', ' ', e === 'MAX' ? `MAX (${l.numResults ? 2 * l.numResults : 'undefined'})` : e]
              }), jsxs('ul', {
                children: [jsxs('li', {
                  children: [renderI18nText('auto_suggest.eval.results.tests_pass'), m.results[e].resultCount.PASS]
                }), jsxs('li', {
                  children: [renderI18nText('auto_suggest.eval.results.tests_fail'), m.results[e].resultCount.FAIL]
                }), jsxs('li', {
                  children: [renderI18nText('auto_suggest.eval.results.tests_no_suggestions'), m.results[e].resultCount.NO_SUGGESTIONS]
                })]
              }), jsx('br', {}), jsx('div', {
                children: jsxs('ul', {
                  children: [jsxs('li', {
                    children: [renderI18nText('auto_suggest.eval.results.tests_recall'), ' ', m.results[e].recall?.toFixed(2)]
                  }), jsxs('li', {
                    children: [renderI18nText('auto_suggest.eval.results.tests_precision'), ' ', m.results[e].precision?.toFixed(2)]
                  }), jsxs('li', {
                    children: [renderI18nText('auto_suggest.eval.results.tests_score'), ' ', m.results[e].fBetaScore?.toFixed(2)]
                  })]
                })
              })]
            }, e)), jsx('div', {
              style: {
                minWidth: 16
              }
            })]
          })]
        }), jsx('br', {})]
      }), jsx(wi, {
        children: jsxs(jk, {
          children: [jsx($n, {
            onClick: f,
            disabled: b || !u,
            children: renderI18nText('auto_suggest.eval.results.copy_summary')
          }), jsx($n, {
            onClick: A,
            disabled: b || !u,
            children: renderI18nText('auto_suggest.eval.results.copy_details')
          }), jsx($n, {
            onClick: y,
            disabled: b || !u,
            children: renderI18nText('auto_suggest.eval.results.download')
          })]
        })
      })]
    })]
  });
}
class iq {
  constructor(e, t, i) {
    this.updateDisplay = e;
    this.testData = t;
    this.config = i;
    this.numTotalTests = t.length;
    this.numCompletedTests = 0;
    this.testResults = {};
    this.startTime = Date.now();
    this.aggregate = iH;
    this.triggerDisplayUpdate();
    i$('Starting new eval', {
      testData: t,
      config: i
    });
  }
  addTestResult(e, t, i) {
    let n = t.suggestions.map(t => {
      let i;
      return (i = t.type === PW.STATE_GROUP ? t.key : t.component_key) && e.expectedAssetIds.includes(i) || !1;
    });
    let r = iG.reduce((e, i) => {
      if (t.suggestions.length === 0) {
        e[i] = 'NO_SUGGESTIONS';
        return e;
      }
      let r = i === 'MAX' ? this.config.numResults ? 2 * this.config.numResults : t.suggestions.length : i;
      n.slice(0, r).some(e => e) ? e[i] = 'PASS' : e[i] = 'FAIL';
      return e;
    }, {});
    this.testResults[e.id] = {
      testCase: e,
      output: t,
      suggestionCorrectness: n,
      result: r,
      debugInfo: i
    };
    this.numCompletedTests++;
    i$(`Completed test: ${e.testName}`, this.testResults[e.id]);
    this.computeAggregate();
    this.triggerDisplayUpdate();
  }
  computeAggregate() {
    this.aggregate = iG.reduce((e, t) => {
      let i = deepClone(iz);
      let n = {
        PASS: [],
        FAIL: [],
        NO_SUGGESTIONS: []
      };
      Object.values(this.testResults).forEach(e => {
        i[e.result[t]]++;
        n[e.result[t]]?.push({
          id: e.testCase.id,
          name: e.testCase.testName
        });
      });
      Object.values(n).map(e => {
        e.sort((e, t) => e.id - t.id);
      });
      let r = i.PASS / Math.max(i.PASS + i.FAIL + i.NO_SUGGESTIONS, 1);
      let a = i.PASS / Math.max(i.PASS + i.FAIL, 1);
      e[t] = {
        resultCount: i,
        recall: r,
        precision: a,
        fBetaScore: a * r == 0 ? 0 : 1.25 * a * r / (0.25 * a + r),
        testCaseSummary: n
      };
      return e;
    }, {});
  }
  triggerDisplayUpdate() {
    let e = {
      progress: {
        numComplete: this.numCompletedTests,
        numTotal: this.numTotalTests
      },
      results: deepClone(this.aggregate)
    };
    this.updateDisplay(e);
  }
  getSummaryString() {
    let e = `Time: ${this.startTime}
`;
    iG.forEach(t => {
      let i = this.aggregate[t];
      e += `----------------
Results @${t}:
- Num Pass: ${i.resultCount.PASS}
- Num Fail: ${i.resultCount.FAIL}
- Num No Suggestions: ${i.resultCount.NO_SUGGESTIONS}
- Recall: ${i.recall}
- Precision: ${i.precision}
- fBetaScore: ${i.fBetaScore}
`;
      i.testCaseSummary && (e += `
Test case results:
`, Object.entries(i.testCaseSummary).forEach(([t, i]) => {
        e += `
${t}: ${i.join(', ')}`;
      }));
    });
    return e;
  }
  getDetailedResults(e = !1) {
    let t = Object.fromEntries([...Object.entries(deepClone(this.testResults))].sort(([e], [t]) => e.localeCompare(t)).map(([t, i]) => [t, e ? i : {
      ...i,
      debugInfo: void 0
    }]));
    return {
      startTime: this.startTime,
      numTotalTests: this.numTotalTests,
      aggregate: deepClone(this.aggregate),
      testResults: t,
      config: deepClone(this.config)
    };
  }
  getDetailedResultsString(e = !1) {
    return JSON.stringify(this.getDetailedResults(e), null, 2);
  }
}
function i$(e, t) {
  let i = deepClone(t);
  logInfo('AutoSuggestEval', e, i, {
    logToConsole: LogToConsoleMode.ALWAYS,
    forwardToDatadog: !1,
    reportAsSentryError: !1
  });
}
let na = 'debugMissingFontsModal';
let ns = registerModal(no, 'DEBUG_MISSING_FONTS_MODAL', ModalSupportsBackground.YES);
function no(e) {
  let [t, i] = useState('Have Fun');
  let [r, a] = useState('Bold');
  let {
    open,
    onClose
  } = e;
  let l = hS({
    open,
    onClose
  });
  let d = setupAutofocusHandler();
  let c = useHandleFocusEvent(na, 'submit', e => {
    e.preventDefault();
    t && r && (permissionScopeHandler.user('set-missing-font', () => {
      fullscreenValue.setMissingFont(t, r);
    }), onClose());
  });
  return jsx(bL, {
    width: 'sm',
    manager: l,
    children: jsxs(Rq, {
      onSubmit: c,
      children: [jsx(Y9, {
        children: jsx(hE, {
          children: 'Set missing font on selected text'
        })
      }), jsxs(nB, {
        children: [jsx('p', {
          children: 'Font family'
        }), jsx(jT, {
          ref: d,
          value: t,
          onChange: e => {
            i(e.currentTarget.value);
          },
          placeholder: 'Font family',
          recordingKey: generateRecordingKey(na, 'fontFamily'),
          required: !0
        }), jsx('p', {
          children: 'Font style'
        }), jsx(jT, {
          value: r,
          onChange: e => {
            a(e.currentTarget.value);
          },
          recordingKey: generateRecordingKey(na, 'fontStyle'),
          placeholder: 'Font style',
          required: !0
        })]
      }), jsx(wi, {
        children: jsx(jk, {
          children: jsx($n, {
            variant: 'primary',
            type: 'submit',
            recordingKey: generateRecordingKey(na, 'setMissingFontButton'),
            children: 'Set missing font'
          })
        })
      })]
    })
  });
}
no.displayName = 'DebugMissingFontsModal';
let nE = [{
  action: 'regenerate-all-instances'
}, {
  action: 'regenerate-missing-thumbnails',
  flags: ['design', 'whiteboard'],
  featureFlags: ['regenerate_thumbnails_action'],
  searchOnly: !0,
  isLowPriorityMatch: !0
}, {
  action: 'update-instance-layout-version',
  featureFlags: ['instance_layout_version_swapsize']
}, {
  action: 'detach-all-instances',
  flags: ['edit', 'design', 'sites']
}, {
  action: 'repair-selected-instances'
}, {
  action: 'repair-state-group-versions'
}, {
  action: 'repair-variable-connections',
  flags: ['design', 'whiteboard', 'slides']
}, {
  action: 'repair-variable-mode-values',
  flags: ['design', 'whiteboard', 'slides'],
  featureFlags: ['internal_only_debug_tools']
}, {
  action: 'restore-soft-deleted-variable-sets',
  flags: ['design'],
  featureFlags: ['show_internal_only_canvas', 'internal_only_debug_tools']
}, {
  action: 'remove-orphaned-variables',
  flags: ['design', 'whiteboard', 'slides'],
  featureFlags: ['internal_only_debug_tools']
}, {
  action: 'reresolve-variable-references',
  flags: ['design', 'whiteboard', 'slides']
}, {
  action: 'regenerate-component-props'
}, {
  action: 'relink-instances-to-local-component'
}, {
  action: 'find-shared-instances-need-relinking'
}, {
  action: 'calculate-deleted-components-published-version'
}, {
  action: 'clear-component-props-data-for-selection'
}, {
  action: 'prune-invalid-component-prop-refs'
}, {
  action: 'prune-orphaned-slot-content',
  flags: ['dse_slots', 'internal_only_debug_tools']
}, {
  action: 'update-via-instance-swap',
  featureFlags: ['ds_update_via_instance_swap'],
  callback: (e, t, i) => {
    !function (e, t) {
      let i = SingletonSceneGraph.instance;
      let n = Object.keys(e);
      let r = e => {
        let t = e.symbolId;
        if (!t) return null;
        let n = i.get(t);
        if (!n) return null;
        if (n.isState) {
          let e = n.parentNode;
          if (!e) return null;
          if (e.isStateGroup && e.stateGroupKey) {
            return {
              type: 'STATE_GROUP',
              key: e.stateGroupKey
            };
          }
        } else if (n.componentKey) {
          return {
            type: 'COMPONENT',
            key: n.componentKey
          };
        }
        return null;
      };
      let a = n.map(e => i.get(e)).reduce((e, t) => {
        if (!t) return e;
        for (let [n, r] of (t.type === 'INSTANCE' && e.push(t), t.findAllWithCriteria({
          types: ['INSTANCE']
        }) || [])) {
          let t = i.guidFromDeveloperFriendlyId(n);
          let r = i.get(t);
          r && e.push(r);
        }
        return e;
      }, []).reduce((e, t) => {
        let i = r(t);
        i && (e[i.key] = i);
        return e;
      }, Object.create(null));
      let s = i.get('0:0');
      if (!s) return;
      let o = s.findAllWithCriteria({
        types: ['INSTANCE']
      }).reduce((e, [t, n]) => {
        let s = i.guidFromDeveloperFriendlyId(t);
        let o = i.get(s);
        if (!o) return e;
        let l = r(o);
        if (!l) return e;
        let {
          key
        } = l;
        a[key] && (e[key] || (e[key] = []), e[key].push(o));
        return e;
      }, Object.create(null)) || {};
      let l = [];
      let d = () => {
        console.log('[Update via instance swap] Updated all instances of:', l.map(e => [e.name, e.type, e.isStateGroup ? e.stateGroupKey : e.componentKey]));
        l.length === 0 ? t(VisualBellActions.enqueue({
          message: 'Nothing to update'
        })) : l.length === 1 ? t(VisualBellActions.enqueue({
          message: `Updated all instances of ${l[0].name}`
        })) : t(VisualBellActions.enqueue({
          message: `Updated all instances of ${l.length} components, including ${l[l.length - 1].name}`
        }));
      };
      Promise.all(Object.values(a).map(async ({
        key: e,
        type: t
      }) => {
        let n = t === 'COMPONENT' ? await $$ab4(e) : await $$av5(e);
        let r = i.get(n);
        if (!r) return;
        l.push(r);
        let a = (r.isStateGroup ? r.reversedChildrenGuids.map(e => i.get(e)).filter(e => !!e) : [r]).reduce((e, t) => (t.componentKey && (e[t.componentKey] = t), e), Object.create(null));
        for (let t of o[e] || []) {
          if (!t.symbolId) continue;
          let e = i.get(t.symbolId);
          e?.componentKey && a[e.componentKey] && t.swapComponent(a[e.componentKey]);
        }
      })).then(d).catch(d);
    }(debugState.getState().mirror.sceneGraphSelection, i);
  }
}, {
  action: 'backup-all-overrides'
}, {
  action: 'repair-missing-override-keys',
  featureFlags: ['internal_only_debug_tools']
}, {
  action: 'repair-corrupt-override-keys-for-selected',
  featureFlags: ['ds_new_repair_for_corrupt_keys', 'internal_only_debug_tools']
}, {
  action: 'restore-soft-deleted-selection',
  featureFlags: ['show_internal_only_canvas', 'internal_only_debug_tools']
}, {
  action: 'repair-duplicate-subscribed-assets',
  featureFlags: ['internal_only_debug_tools']
}].map(e => ({
  ...e,
  flags: e.flags ?? ['design'],
  searchOnly: !0,
  searchSynonyms: ['repair'],
  isLowPriorityMatch: !0,
  isRepairCommand: !0
}));
let nS = registerModal(e => {
  let {
    onSaveClick,
    onClose
  } = e;
  let n = hS(e);
  return jsx(bL, {
    manager: n,
    width: 'md',
    children: jsxs(vo, {
      children: [jsx(Y9, {
        children: jsx(hE, {
          children: renderI18nText('cms_file_operations_import_export.save_without_cms')
        })
      }), jsx(nB, {
        children: renderI18nText('cms_file_operations_import_export.local_copies_of_sites_files')
      }), jsx(wi, {
        children: jsxs(jk, {
          children: [jsx($n, {
            variant: 'secondary',
            onClick: onClose,
            children: renderI18nText('cms_file_operations_import_export.cancel')
          }), jsx($n, {
            variant: 'primary',
            onClick: () => {
              onSaveClick();
              onClose();
            },
            children: renderI18nText('cms_file_operations_import_export.save')
          })]
        })
      })]
    })
  });
});
function nT(e) {
  return e ? e.map(e => e.featureFlags ? e : {
    ...e,
    featureFlags: []
  }) : [];
}
function nk() {
  return W7() && getFeatureFlags().aip_magnolia ? [{
    action: 'toggle-text-suggestions-preference',
    property: UK().wantsTextSuggestions,
    propertyValue: !0,
    flags: ['design', 'edit'],
    featureFlags: [],
    rightIcon: createElement(_$$y4, {
      variant: _$$x3.ON_MENU,
      helpUrlVariant: JT.SUGGEST_TEXT
    })
  }] : [];
}
export function $$nR1() {
  switch (AppStateTsApi.editorState().selectionIsMask.getCopy()) {
    case SwitchState.OFF:
    case SwitchState.MIXED:
      return 'mask-selection';
    case SwitchState.ON:
      return 'remove-mask';
  }
}
export function $$nN0(e) {
  let t;
  let {
    fileMenuArgs,
    pluginAndWidgetMenuArgs,
    additionalDebugItems,
    theme,
    backToFileArgs,
    zoomArgs,
    publishingModalArgs,
    spotlightArgs,
    drawArgs,
    mcpArgs
  } = e;
  let tX = debugState.getState();
  return [...(backToFileArgs.shouldShowBackToFiles ? [{
    'callback': (e, t, i, n) => {
      if (n?.preventDefault(), trackEventAnalytics('Back to files button clicked', {
        source: 'fullscreen_menu'
      }), !sendBackToFilesAction()) {
        if (n.metaKey || n.button === 1) {
          let e = debugState.getState().openFile;
          let t = e?.project?.id || null;
          N5(debugState.getState().folders, t) ? Wq(EE(t, e?.parentOrgId ?? null), i) : Wq('/', i);
        } else {
          i(_$$eH());
          i(oB());
        }
      }
    },
    'name': 'back-to-files',
    'recordingKey': 'back-to-files',
    'data-onboarding-key': 'back-to-files',
    'disabled': backToFileArgs.isDisabled,
    'featureFlags': []
  }, {
    separator: !0
  }] : []), {
    action: 'toggle-menu',
    displayText: gn() ? getI18nString('fullscreen_actions.toggle-actions-menu') : getI18nString('fullscreen_actions.toggle-menu'),
    hideForQuickCommand: !0,
    iconType: 'search',
    featureFlags: [],
    flags: ['!figmake']
  }, {
    separator: !0
  }, ...(fileMenuArgs ? function ({
    branchingActionsStatus: e,
    saveAsState: t,
    topLevelMode: i,
    fileCreationMenuItems: r,
    unreadCommentCount: s,
    shouldShowSlideConversionEntrypoint: d,
    hasCollections: c
  }) {
    let u = [{
      action: 'place',
      iconType: createElement(_$$s),
      flags: ['edit', 'design', 'slides', 'cooper', 'sites'],
      featureFlags: []
    }, {
      action: 'import',
      flags: ['edit', 'whiteboard'],
      featureFlags: []
    }, {
      separator: !0
    }, ...(getInitialOptions().integration_host ? [] : [{
      name: 'save-as',
      callback: (e, i, n) => {
        let r = () => {
          Dc(hV.SaveLocalFile, t, n, e, ['0:0'], 'save-as');
          ce();
        };
        c ? function ({
          dispatch: e,
          onSaveClick: t
        }) {
          e(showModalHandler({
            type: nS,
            data: {
              onSaveClick: t
            }
          }));
        }({
          dispatch: n,
          onSaveClick: r
        }) : r();
      },
      flags: ['view_restricted', '!recovery'],
      featureFlags: []
    }]), {
      action: 'create-savepoint',
      flags: ['edit', '!integration', '!recovery'],
      featureFlags: []
    }, {
      action: 'toggle-version-history',
      flags: ['edit', '!integration', '!recovery'],
      property: 'topLevelMode',
      featureFlags: []
    }, {
      separator: !0
    }, {
      action: 'export-selected-exportables',
      iconType: createElement(_$$b),
      callback: (e, t, i) => {
        fullscreenValue.triggerAction(e, {
          source: 'menu'
        });
      },
      flags: ['view_restricted', 'design', 'dev_handoff', 'slides', '!cooper', '!recovery', '!limited_dev_mode'],
      featureFlags: []
    }, {
      action: 'export-selection-or-current-page',
      flags: ['view_restricted', '!slides', 'whiteboard', '!limited_dev_mode'],
      featureFlags: []
    }, ...(HZ() ? [{
      separator: !0,
      flags: ['whiteboard']
    }, {
      name: 'create-slides-outline-from-figjam',
      callback: (e, t, i) => {
        $t({
          dispatch: i,
          source: _$$E6.FJ_FILE_MENU
        });
      },
      tags: [_$$$2.AI],
      flags: ['whiteboard'],
      featureFlags: []
    }, {
      separator: !0,
      flags: ['whiteboard']
    }] : []), ...function (e) {
      if (!e) return [];
      let t = debugState.getState();
      return [{
        action: 'copy-to-figma-slides',
        disabled: !t.openFile?.key || t.fileVersion == null,
        iconType: createElement(_$$l),
        callback: (e, i, n) => {
          fx(t.openFile, t.fileVersion, !0).then(e => PF(n, e));
        },
        flags: ['design', 'edit'],
        featureFlags: []
      }];
    }(!!d), {
      name: 'export-all-frames-to-pdf',
      callback: (e, i, n) => {
        mU(t, n, e);
      },
      flags: ['view_restricted', 'design', '!slides', 'dev_handoff', '!recovery', '!limited_dev_mode'],
      featureFlags: []
    }, {
      name: 'export-slides-to',
      callback: (e, i, n) => {
        mU(t, n, e);
      },
      searchSynonyms: [getI18nString('fullscreen.export.export_to_pptx'), getI18nString('fullscreen.export.export_to_pdf')],
      flags: ['view_restricted', 'slides']
    }, {
      action: 'export-cooper-assets',
      flags: ['view_restricted', 'cooper'],
      featureFlags: ['cooper']
    }, {
      separator: !0
    }, ...nT(_$$m2(e, _$$e4.EDITOR_MENU, i, s)), ...nT(_$$t3(e, _$$e4.EDITOR_MENU, i)), {
      separator: !0
    }];
    return [{
      name: 'file-menu',
      flags: [],
      children: r.length > 0 ? [...r, {
        separator: !0
      }, ...u] : u
    }];
  }(fileMenuArgs) : []), {
    name: rH,
    flags: ['!edit', '!dev_handoff', '!variables_table', '!figmake'],
    featureFlags: [],
    children: [{
      action: 'undo',
      flags: ['recovery'],
      featureFlags: []
    }, {
      action: 'redo',
      flags: ['recovery'],
      featureFlags: []
    }, {
      separator: !0
    }, {
      action: 'focus-mode',
      flags: ['design', 'sites'],
      searchOnly: !0,
      featureFlags: ['ce_multi_edit_focus_mode']
    }, {
      action: 'focus-mode-exit',
      flags: ['design', 'sites'],
      searchOnly: !0,
      featureFlags: ['ce_multi_edit_focus_mode']
    }, {
      action: 'canvas-search',
      featureFlags: []
    }, {
      action: 'canvas-search-next',
      featureFlags: []
    }, {
      action: 'canvas-search-prev',
      featureFlags: []
    }, {
      separator: !0
    }, {
      action: 'toggle-dropper',
      featureFlags: []
    }, {
      action: 'copy-properties',
      iconType: createElement(_$$a),
      flags: ['view_restricted'],
      featureFlags: []
    }, {
      separator: !0
    }, {
      action: 'select-all',
      iconType: createElement(_$$A),
      featureFlags: []
    }, {
      action: 'deselect-all',
      featureFlags: []
    }, {
      action: 'select-inverse',
      featureFlags: []
    }, {
      separator: !0
    }, {
      action: 'select-matching',
      iconType: createElement(_$$A),
      featureFlags: []
    }, {
      action: 'select-similar',
      iconType: createElement(_$$A),
      featureFlags: []
    }, {
      name: 'select-all-with-menu-options',
      flags: ['design', 'sites'],
      featureFlags: [],
      children: [{
        action: 'select-same-style',
        iconType: createElement(_$$A),
        flags: ['design', 'sites'],
        featureFlags: []
      }, {
        action: 'select-same-fill',
        iconType: createElement(_$$A),
        flags: ['design', 'sites'],
        featureFlags: []
      }, {
        action: 'select-same-stroke',
        iconType: createElement(_$$A),
        flags: ['design', 'sites'],
        featureFlags: []
      }, {
        action: 'select-same-effect',
        iconType: createElement(_$$A),
        flags: ['design', 'sites'],
        featureFlags: []
      }, {
        action: 'select-same-text',
        iconType: createElement(_$$A),
        flags: ['design', 'sites'],
        featureFlags: []
      }, {
        action: 'select-same-font',
        iconType: createElement(_$$A),
        flags: ['design', 'sites'],
        featureFlags: []
      }, {
        action: 'select-same-instance',
        iconType: createElement(_$$y),
        flags: ['design', 'sites'],
        featureFlags: []
      }, {
        action: 'select-same-variant',
        iconType: createElement(_$$A),
        flags: ['design', 'sites'],
        featureFlags: []
      }]
    }, {
      name: 'request-to-edit',
      flags: ['design', 'sites', '!edit'],
      searchOnly: !0,
      callback: (e, t, i) => {
        let n = debugState.getState().openFile?.key;
        n && _$$E5(i, n);
      },
      featureFlags: []
    }]
  }, {
    name: rH,
    flags: ['!edit', 'dev_handoff', '!variables_table', '!figmake'],
    featureFlags: [],
    children: [{
      name: 'copy',
      flags: ['desktop_os_menu'],
      featureFlags: []
    }, {
      name: 'paste',
      flags: ['desktop_os_menu'],
      featureFlags: []
    }, {
      name: 'cut',
      flags: ['desktop_os_menu'],
      featureFlags: []
    }, {
      action: 'copy-as-menu',
      flags: ['view_restricted'],
      featureFlags: [],
      children: [{
        action: 'copy-text',
        iconType: createElement(_$$e),
        featureFlags: []
      }, {
        action: 'copy-as-svg',
        iconType: createElement(i),
        featureFlags: []
      }, {
        action: 'copy-as-png',
        iconType: createElement(_$$s),
        featureFlags: []
      }, {
        action: 'copy-layer-name',
        featureFlags: []
      }]
    }, {
      separator: !0
    }, {
      action: 'focus-mode',
      flags: ['design', 'sites'],
      searchOnly: !0,
      featureFlags: ['ce_multi_edit_focus_mode']
    }, {
      action: 'focus-mode-exit',
      flags: ['design', 'sites'],
      searchOnly: !0,
      featureFlags: ['ce_multi_edit_focus_mode']
    }, {
      action: 'canvas-search',
      featureFlags: []
    }, {
      action: 'canvas-search-next',
      featureFlags: []
    }, {
      action: 'canvas-search-prev',
      featureFlags: []
    }, {
      separator: !0
    }, {
      action: 'select-all',
      iconType: createElement(_$$A),
      featureFlags: []
    }, {
      action: 'deselect-all',
      featureFlags: []
    }]
  }, {
    name: rH,
    flags: ['edit', '!dev_handoff', '!variables_table', '!figmake'],
    featureFlags: [],
    children: [{
      action: 'undo',
      featureFlags: []
    }, {
      action: 'redo',
      featureFlags: []
    }, {
      separator: !0
    }, {
      name: 'cut',
      flags: ['desktop_os_menu'],
      featureFlags: []
    }, {
      name: 'copy',
      flags: ['desktop_os_menu'],
      featureFlags: []
    }, {
      action: 'copy-as-menu',
      flags: ['view_restricted'],
      featureFlags: [],
      children: [{
        action: 'copy-text',
        iconType: createElement(_$$e),
        flags: ['design', 'sites', 'slides', 'cooper'],
        featureFlags: []
      }, {
        action: 'copy-as-css',
        iconType: createElement(i),
        flags: ['design', 'sites'],
        callback: () => {
          trackEventAnalytics('edit_menu_copy_as_css_clicked');
        },
        featureFlags: []
      }, {
        action: 'copy-as-css-recursive',
        flags: ['design', 'sites'],
        callback: () => {
          trackEventAnalytics('edit_menu_copy_as_css_all_layers_clicked');
        },
        featureFlags: []
      }, {
        action: 'copy-as-svg',
        iconType: createElement(i),
        flags: ['design', 'sites'],
        featureFlags: []
      }, {
        action: 'copy-as-png',
        iconType: createElement(_$$s),
        featureFlags: []
      }]
    }, {
      name: 'paste',
      flags: ['desktop_os_menu'],
      featureFlags: []
    }, {
      action: 'paste-over-selection',
      iconType: createElement(_$$X),
      featureFlags: []
    }, {
      action: 'paste-to-replace',
      iconType: createElement(_$$X),
      featureFlags: []
    }, {
      action: 'duplicate-in-place',
      iconType: createElement(_$$u2),
      featureFlags: []
    }, {
      action: 'delete-selection',
      featureFlags: []
    }, {
      separator: !0
    }, {
      action: 'focus-mode',
      flags: ['design', 'sites'],
      searchOnly: !0,
      featureFlags: ['ce_multi_edit_focus_mode']
    }, {
      action: 'focus-mode-exit',
      flags: ['design', 'sites'],
      searchOnly: !0,
      featureFlags: ['ce_multi_edit_focus_mode']
    }, {
      action: 'canvas-search',
      featureFlags: []
    }, {
      action: 'canvas-search-next',
      featureFlags: []
    }, {
      action: 'canvas-search-prev',
      featureFlags: []
    }, {
      action: 'canvas-search-replace',
      iconType: createElement(_$$h),
      featureFlags: []
    }, {
      separator: !0
    }, {
      action: 'set-default-style',
      flags: ['design', 'sites'],
      featureFlags: []
    }, {
      action: 'copy-properties',
      iconType: createElement(_$$a),
      flags: ['design', 'sites'],
      featureFlags: []
    }, {
      action: 'paste-properties',
      iconType: createElement(_$$X),
      flags: ['design', 'sites'],
      featureFlags: []
    }, {
      separator: !0
    }, {
      action: 'toggle-dropper',
      flags: ['design', 'sites'],
      featureFlags: []
    }, {
      separator: !0
    }, {
      action: 'select-all',
      iconType: createElement(_$$A),
      featureFlags: []
    }, {
      action: 'select-matching',
      iconType: createElement(_$$A),
      flags: ['design', 'sites', 'slides', 'cooper'],
      featureFlags: []
    }, {
      action: 'deselect-all',
      featureFlags: []
    }, {
      action: 'select-inverse',
      featureFlags: []
    }, {
      name: 'select-all-with-menu-options',
      flags: ['design', 'slides', 'cooper'],
      featureFlags: [],
      children: [{
        action: 'select-same-style',
        iconType: createElement(_$$A),
        flags: ['design', 'sites', 'slides', 'cooper'],
        featureFlags: []
      }, {
        action: 'select-same-fill',
        iconType: createElement(_$$A),
        flags: ['design', 'sites', 'slides', 'cooper'],
        featureFlags: []
      }, {
        action: 'select-same-stroke',
        iconType: createElement(_$$A),
        flags: ['design', 'sites', 'slides', 'cooper'],
        featureFlags: []
      }, {
        action: 'select-same-effect',
        iconType: createElement(_$$A),
        flags: ['design', 'sites', 'slides', 'cooper'],
        featureFlags: []
      }, {
        action: 'select-same-text',
        iconType: createElement(_$$A),
        flags: ['design', 'sites', 'slides', 'cooper'],
        featureFlags: []
      }, {
        action: 'select-same-font',
        iconType: createElement(_$$A),
        flags: ['design', 'sites', 'slides', 'cooper'],
        featureFlags: []
      }, {
        action: 'select-same-instance',
        iconType: createElement(_$$y),
        flags: ['design', 'sites', 'slides', 'cooper'],
        featureFlags: []
      }, {
        action: 'select-same-variant',
        iconType: createElement(_$$A),
        flags: ['design', 'sites', 'slides', 'cooper'],
        featureFlags: []
      }]
    }]
  }, {
    name: rH,
    flags: ['figmake', 'desktop_os_menu'],
    featureFlags: [],
    children: [{
      action: 'undo',
      featureFlags: []
    }, {
      action: 'redo',
      featureFlags: []
    }, {
      separator: !0
    }, {
      name: 'cut',
      featureFlags: []
    }, {
      name: 'copy',
      featureFlags: []
    }, {
      name: 'paste',
      featureFlags: []
    }, {
      separator: !0
    }, {
      action: 'select-all',
      featureFlags: []
    }]
  }, {
    name: _p,
    featureFlags: [],
    flags: ['!variables_table', '!figmake'],
    children: [{
      action: 'toggle-grid',
      flags: ['design', 'sites', 'dev_handoff'],
      property: UK().renderGrid,
      propertyValue: !0,
      displayForQuickCommand: 'show-pixel-grid',
      featureFlags: []
    }, {
      action: 'toggle-show-dot-grid',
      flags: ['whiteboard'],
      property: UK().showDotGrid,
      propertyValue: !0,
      displayForQuickCommand: 'toggle-show-dot-grid',
      featureFlags: []
    }, {
      action: 'toggle-shown-layout-grids',
      flags: ['edit', 'design', 'sites', 'slides', 'cooper', 'dev_handoff'],
      property: UK().showFrameGrids,
      propertyValue: !0,
      displayForQuickCommand: 'show-layout-grids',
      featureFlags: []
    }, {
      action: 'toggle-shown-layout-grids',
      flags: ['!edit', 'design', 'sites', 'slides', 'cooper', 'dev_handoff'],
      property: _$$d().showFrameGridsViewOnly,
      propertyValue: !0,
      displayForQuickCommand: 'show-layout-grids',
      featureFlags: []
    }, {
      action: 'toggle-rulers',
      flags: ['design', 'dev_handoff', 'slides', 'cooper', 'sites'],
      property: UK().renderRulers,
      propertyValue: !0,
      displayForQuickCommand: 'show-rulers',
      featureFlags: []
    }, {
      name: 'ruler-unit-menu',
      flags: ['cooper'],
      featureFlags: ['buzz_print_export'],
      children: [{
        action: 'toggle-ruler-unit-pixels',
        featureFlags: [],
        property: UK().renderRulerUnitAsPixels,
        propertyValue: !0
      }, {
        action: 'toggle-ruler-unit-inches',
        featureFlags: [],
        property: UK().renderRulerUnitAsInches,
        propertyValue: !0
      }, {
        action: 'toggle-ruler-unit-centimeters',
        featureFlags: [],
        property: UK().renderRulerUnitAsCentimeters,
        propertyValue: !0
      }]
    }, {
      action: 'toggle-print-marks',
      flags: ['cooper'],
      property: UK().renderPrintMarks,
      propertyValue: !0,
      displayForQuickCommand: 'show-print-marks',
      featureFlags: ['buzz_print_export']
    }, {
      action: 'toggle-stack-debug-mode',
      flags: ['design'],
      property: UK().stackInsertionDebugMode,
      propertyValue: !0,
      displayForQuickCommand: 'toggle-stack-debug-mode',
      featureFlags: ['ce_al_experiments_disabled']
    }, {
      action: 'toggle-stack-shadows',
      flags: ['design'],
      property: UK().renderStackShadows,
      propertyValue: !0,
      displayForQuickCommand: 'toggle-stack-shadows',
      featureFlags: ['ce_al_experiments_disabled']
    }, {
      action: 'toggle-dynamic-insertion-points',
      flags: ['design'],
      property: UK().renderDynamicInsertionPoints,
      propertyValue: !0,
      displayForQuickCommand: 'toggle-dynamic-insertion-points',
      featureFlags: ['ce_al_experiments_disabled']
    }, {
      action: 'toggle-auto-fill-full-width-children',
      flags: ['design'],
      property: UK().shouldSetFullWidthChildToFill,
      propertyValue: !0,
      displayForQuickCommand: 'toggle-auto-fill-full-width-children',
      featureFlags: ['ce_al_experiments_experimental']
    }, {
      action: 'toggle-show-slices',
      flags: ['design'],
      property: UK().showSlices,
      propertyValue: !0,
      displayForQuickCommand: 'show-slices',
      featureFlags: []
    }, {
      action: 'toggle-show-comments',
      flags: ['design', 'dev_handoff', 'slides', 'cooper', 'sites'],
      property: 'showComments',
      propertyValue: !0,
      displayForQuickCommand: 'show-comments',
      hideForQuickCommand: BrowserInfo.isIpadNative,
      featureFlags: []
    }, {
      action: 'toggle-show-annotations',
      flags: getFeatureFlags().dt_annotations_always_expand ? ['design', 'dev_handoff', '!illustration'] : ['dev_handoff'],
      property: AppStateTsApi.uiState().showAnnotationsInDevMode,
      propertyValue: !0,
      displayForQuickCommand: 'show-annotations',
      hideForQuickCommand: BrowserInfo.isIpadNative,
      featureFlags: []
    }, {
      action: 'toggle-always-expand-annotations',
      flags: ['design'],
      property: AppStateTsApi.uiState().alwaysExpandAnnotations,
      propertyValue: !1,
      displayForQuickCommand: 'toggle-always-expand-annotations',
      hideForQuickCommand: BrowserInfo.isIpadNative,
      featureFlags: [],
      notFeatureFlags: ['dt_annotations_always_expand']
    }, {
      name: 'outline-mode',
      flags: ['design', 'dev_handoff', 'slides', 'cooper', 'sites'],
      featureFlags: [],
      children: [{
        action: 'toggle-outlines',
        property: _$$d().showOutlines,
        propertyValue: !0,
        shortcutText: c1(debugState.getState().mirror.appModel.keyboardShortcuts, 'toggle-outlines'),
        featureFlags: []
      }, {
        separator: !0
      }, {
        action: 'toggle-outline-mode-hidden-layers',
        property: _$$d().showOutlineHiddenLayers,
        propertyValue: !0,
        displayForQuickCommand: 'toggle-outline-mode-hidden-layers-qc',
        featureFlags: []
      }, {
        action: 'toggle-outline-mode-object-bounds',
        property: _$$d().showOutlineObjectBounds,
        propertyValue: !0,
        displayForQuickCommand: 'toggle-outline-mode-object-bounds-qc',
        featureFlags: []
      }]
    }, {
      action: 'toggle-pixel-preview',
      flags: ['design', 'dev_handoff', 'slides', 'cooper', 'sites'],
      property: UK().activeCanvasPixelPreview,
      propertyValue: !0,
      displayForQuickCommand: 'show-pixel-preview',
      featureFlags: []
    }, {
      action: 'toggle-show-masks',
      flags: ['design'],
      property: UK().showMasks,
      propertyValue: !0,
      displayForQuickCommand: 'show-mask-outlines',
      featureFlags: []
    }, {
      action: 'toggle-show-artboard-outlines',
      flags: ['design'],
      property: UK().showArtboardOutlines,
      propertyValue: !0,
      displayForQuickCommand: 'show-frame-outlines',
      featureFlags: []
    }, {
      action: 'toggle-memory-usage-indicator',
      property: AppStateTsApi.uiState().showMemoryUsage,
      flags: ['design', 'sites'],
      propertyValue: !0,
      featureFlags: []
    }, {
      action: 'toggle-resource-use',
      property: AppStateTsApi.uiState().renderResourceUse,
      flags: ['whiteboard'],
      propertyValue: !0,
      featureFlags: []
    }, {
      action: 'toggle-icon-detection',
      property: AppStateTsApi.devHandoffState().automaticIconDetection,
      propertyValue: !0,
      flags: ['dev_handoff', '!limited_dev_mode'],
      featureFlags: [],
      notFeatureFlags: ['dt_insp_impr_assets']
    }, {
      action: 'toggle-dropper',
      flags: ['dev_handoff'],
      featureFlags: []
    }, {
      separator: !0
    }, ...(AppStateTsApi.uiState().isUI3.getCopy() ? [{
      callback: () => {
        let e = atomStoreManager.get(Bu);
        fullscreenValue.triggerAction('toggle-show-property-labels', {
          source: e ? 'quick-action' : 'view-menu'
        });
      },
      name: 'toggle-show-property-labels',
      property: UK().showPropertyLabels,
      propertyValue: !0,
      featureFlags: []
    }, {
      action: 'toggle-sidebar',
      displayText: getI18nString('fullscreen_actions.minimize-ui'),
      displayForQuickCommand: 'minimize-ui',
      checked: AppStateTsApi?.uiState().leftPanelCollapsedUI3.getCopy(),
      searchSynonyms: [getI18nString('fullscreen_actions.expand-ui')],
      featureFlags: []
    }] : []), {
      action: 'toggle-ui',
      property: 'showUi',
      propertyValue: !0,
      featureFlags: []
    }, {
      action: 'toggle-multiplayer-cursors',
      property: AppStateTsApi?.uiState().hideMultiplayerCursors,
      propertyValue: !1,
      featureFlags: []
    }, ...(AppStateTsApi.uiState().isUI3.getCopy() ? [] : [{
      action: 'toggle-sidebar',
      property: UK().showSidebar,
      propertyValue: !0,
      flags: ['dev_handoff'],
      featureFlags: []
    }]), {
      action: 'enter-design-mode',
      flags: ['dev_handoff', 'illustration'],
      featureFlags: [],
      searchSynonyms: ['mode', 'open']
    }, ...(drawArgs?.hasDrawModeAccess ? [{
      action: 'enter-draw-mode',
      flags: ['dev_handoff', 'design', '!illustration'],
      featureFlags: ['ce_il_root'],
      searchSynonyms: ['mode', 'open']
    }] : []), {
      action: 'enter-inspect-mode',
      flags: ['!dev_handoff', '!recovery', '!slides', '!sites', '!cooper'],
      searchSynonyms: ['mode', 'open'],
      disabled: isZoomIntegration(),
      featureFlags: []
    }, AppStateTsApi.interopToolMode().getCopy() === SelfDesignType.SELF ? {
      action: 'enter-slides-design-mode',
      flags: ['slides'],
      featureFlags: []
    } : {
      action: 'enter-slides-mode',
      flags: ['slides'],
      featureFlags: []
    }, {
      action: 'panels-menu',
      flags: ['design', 'view_restricted', '!dev_handoff'],
      featureFlags: [],
      children: [{
        action: 'toggle-layers',
        iconType: createElement(A),
        featureFlags: []
      }, {
        action: 'toggle-publish',
        featureFlags: []
      }, {
        action: 'show-design-panel',
        flags: ['!illustration'],
        featureFlags: []
      }, {
        action: 'show-prototype-panel',
        flags: ['!illustration'],
        featureFlags: []
      }, {
        action: 'toggle-prototyping-info',
        iconType: createElement(A),
        searchOnly: !0,
        flags: ['edit', '!illustration'],
        featureFlags: []
      }, {
        action: 'toggle-prototyping-info',
        iconType: createElement(A),
        searchOnly: !0,
        flags: ['!edit', '!illustration'],
        displayForQuickCommand: 'toggle-prototyping-information',
        featureFlags: []
      }, {
        action: 'show-inspect-panel',
        flags: ['!edit'],
        featureFlags: []
      }, {
        action: 'toggle-variables',
        featureFlags: []
      }, {
        separator: !0
      }, ...(AppStateTsApi.uiState().isUI3.getCopy() ? [] : [{
        action: 'toggle-sidebar',
        property: UK().showSidebar,
        propertyValue: !0,
        featureFlags: []
      }])]
    }, {
      separator: !0
    }, {
      action: 'zoom-in',
      iconType: createElement(_$$Z),
      disabled: !zoomArgs?.canZoomIn,
      featureFlags: []
    }, {
      action: 'zoom-out',
      iconType: createElement(_$$Z),
      disabled: !zoomArgs?.canZoomOut,
      featureFlags: []
    }, {
      action: 'zoom-reset',
      featureFlags: []
    }, {
      action: 'zoom-to-fit',
      iconType: createElement(_$$O),
      featureFlags: []
    }, {
      action: 'zoom-to-selection',
      featureFlags: []
    }, {
      separator: !0
    }, {
      action: 'page-previous',
      iconType: createElement(_$$E),
      flags: ['design', 'whiteboard', 'dev_handoff'],
      featureFlags: []
    }, {
      action: 'page-next',
      iconType: createElement(_$$s2),
      flags: ['design', 'whiteboard', 'dev_handoff'],
      featureFlags: []
    }, {
      action: 'previous-artboard',
      iconType: createElement(_$$E),
      flags: ['design', 'dev_handoff'],
      featureFlags: []
    }, {
      action: 'next-artboard',
      iconType: createElement(_$$N),
      flags: ['design', 'dev_handoff'],
      featureFlags: []
    }, {
      action: 'previous-artboard-same-zoom',
      flags: ['design', 'dev_handoff'],
      featureFlags: []
    }, {
      action: 'next-artboard-same-zoom',
      iconType: createElement(_$$z),
      flags: ['design', 'dev_handoff'],
      featureFlags: []
    }, {
      separator: !0
    }, {
      name: 'interface-scale-menu',
      flags: ['desktop_os_menu'],
      featureFlags: []
    }, {
      separator: !0
    }, {
      name: 'toggle-full-screen',
      flags: ['desktop_os_menu'],
      featureFlags: []
    }, {
      name: 'always-show-tabs-when-presenting',
      flags: ['desktop_os_menu'],
      featureFlags: []
    }]
  }, {
    name: _$$M2,
    flags: ['!dev_handoff', '!figmake'],
    featureFlags: [],
    children: [{
      action: 'create-responsive-set',
      flags: ['sites', 'edit'],
      featureFlags: ['sites']
    }, {
      action: 'frame-selection',
      iconType: createElement(_$$q),
      flags: ['design', 'edit'],
      featureFlags: []
    }, {
      action: 'group-selection',
      iconType: createElement(_$$M),
      flags: ['edit'],
      featureFlags: []
    }, {
      action: 'ungroup-selection',
      iconType: createElement(_$$H),
      flags: ['edit'],
      featureFlags: []
    }, {
      separator: !0
    }, {
      action: 'aspect-ratio-lock',
      iconType: createElement(_$$z2),
      flags: ['edit'],
      featureFlags: []
    }, {
      action: 'aspect-ratio-unlock',
      flags: ['edit'],
      featureFlags: []
    }, {
      separator: !0
    }, {
      action: 'create-section-from-selection',
      iconType: createElement(_$$c),
      flags: ['edit', '!slides', '!cooper'],
      featureFlags: []
    }, {
      action: 'replace-selected-frame-with-section',
      iconType: createElement(_$$c),
      flags: ['edit', '!slides', '!cooper'],
      featureFlags: []
    }, {
      action: 'replace-selected-section-with-frame',
      iconType: createElement(_$$q),
      flags: ['edit', '!slides', '!cooper'],
      featureFlags: []
    }, {
      separator: !0
    }, {
      action: 'create-section',
      flags: ['whiteboard', 'edit'],
      searchOnly: !0,
      featureFlags: []
    }, {
      action: 'mask-selection',
      iconType: createElement(_$$n),
      flags: ['design', 'edit', 'slides', 'cooper', 'sites'],
      get displayForQuickCommand() {
        return $$nR1();
      },
      featureFlags: []
    }, {
      action: 'create-stretch-brush',
      iconType: createElement(N),
      flags: ['design', 'edit'],
      displayForQuickCommand: 'create-stretch-brush-qc',
      featureFlags: ['ce_il_strokes'],
      searchOnly: !0
    }, {
      action: 'create-scatter-brush',
      iconType: createElement($$P),
      flags: ['design', 'edit'],
      displayForQuickCommand: 'create-scatter-brush-qc',
      featureFlags: ['ce_il_scatter'],
      searchOnly: !0
    }, {
      action: 'show-rotation-origin',
      featureFlags: [],
      flags: ['design', 'edit'],
      displayForQuickCommand: 'show-rotation-origin',
      get disabled() {
        return fullscreenValue.disableShowRotationOriginMenuItem();
      },
      searchOnly: !0
    }, {
      action: 'create-comment',
      flags: ['whiteboard', 'edit'],
      searchOnly: !0,
      featureFlags: [],
      notFeatureFlags: ['fpl_create_comment_action_design']
    }, {
      action: 'create-comment',
      flags: ['whiteboard', 'design', 'edit'],
      searchOnly: !0,
      featureFlags: ['fpl_create_comment_action_design']
    }, {
      action: 'create-sticky',
      flags: ['whiteboard', 'edit'],
      searchOnly: !0,
      featureFlags: []
    }, {
      action: 'create-text-node',
      flags: ['whiteboard', 'edit'],
      searchOnly: !0,
      featureFlags: []
    }, {
      action: 'create-ellipse',
      flags: ['whiteboard', 'edit'],
      searchOnly: !0,
      featureFlags: []
    }, {
      action: 'create-diamond',
      flags: ['whiteboard', 'edit'],
      searchOnly: !0,
      featureFlags: []
    }, {
      action: 'create-triangle',
      flags: ['whiteboard', 'edit'],
      searchOnly: !0,
      featureFlags: []
    }, {
      action: 'create-rounded-rectangle',
      flags: ['whiteboard', 'edit'],
      searchOnly: !0,
      featureFlags: []
    }, {
      action: 'create-responsive-set',
      flags: ['sites', 'edit'],
      featureFlags: ['sites'],
      searchOnly: !0
    }, {
      action: 'repair-breakpoint-multiedit',
      flags: ['sites', 'edit'],
      featureFlags: ['sites'],
      searchOnly: !0,
      searchSynonyms: ['repair'],
      isLowPriorityMatch: !0,
      isRepairCommand: !0
    }, {
      action: 'remove-responsive-text-style-variants',
      flags: ['sites', 'edit'],
      featureFlags: ['sites'],
      searchOnly: !0,
      searchSynonyms: ['remove responsive text style variants'],
      isLowPriorityMatch: !0,
      isRepairCommand: !0
    }, {
      action: 'set-tool-code-component',
      flags: ['sites', 'edit'],
      featureFlags: ['sites', 'sts_code', 'sts_code_authoring'],
      notFeatureFlags: ['sts_code_authoring_by_plan'],
      searchOnly: !0,
      iconType: createElement(_$$t)
    }, {
      action: 'set-tool-code-component',
      flags: ['sites', 'edit'],
      featureFlags: ['sites', 'sts_code', 'sts_code_authoring_by_plan'],
      searchOnly: !0,
      iconType: createElement(_$$t)
    }, {
      action: 'focus-mode-responsive-set',
      property: UK().toggleResponsiveSetAutoFocus,
      propertyValue: !0,
      flags: ['sites'],
      featureFlags: ['sites', 'sts_multiedit_toggle'],
      searchOnly: !0
    }, {
      action: 'convert-table-to-sticky-grid',
      flags: ['whiteboard', 'edit'],
      searchOnly: !0,
      featureFlags: []
    }, {
      get name() {
        return getFeatureFlags().dse_library_pg_thumbnails ? fullscreenValue.getFileThumbnailMenuItemName() : fullscreenValue.getThumbnailMenuItemName();
      },
      callback: () => fullscreenValue.handleFileThumbnailMenuItem(),
      get disabled() {
        return fullscreenValue.disableFileThumbnailMenu();
      },
      flags: ['edit'],
      featureFlags: []
    }, {
      get name() {
        return fullscreenValue.getPageThumbnailMenuItemName();
      },
      callback: () => fullscreenValue.handlePageThumbnailMenuItem(),
      get disabled() {
        return fullscreenValue.disablePageThumbnailMenu();
      },
      flags: ['edit', 'design'],
      featureFlags: ['dse_library_pg_thumbnails']
    }, {
      separator: !0
    }, {
      action: 'stack-selection',
      iconType: createElement(_$$Q),
      flags: ['design', 'sites', 'edit'],
      featureFlags: []
    }, ...nT([_$$t4()]), {
      action: 'create-symbol',
      flags: ['design', 'sites', 'edit'],
      iconType: createElement(_$$K),
      featureFlags: []
    }, {
      action: 'create-symbol',
      flags: ['slides'],
      iconType: createElement(_$$K),
      featureFlags: []
    }, {
      action: 'edit-code',
      flags: ['edit', 'sites'],
      featureFlags: ['sites', 'sts_code', 'sts_code_authoring'],
      notFeatureFlags: ['sts_code_authoring_by_plan'],
      iconType: createElement(_$$t)
    }, {
      action: 'edit-code',
      flags: ['edit', 'sites'],
      featureFlags: ['sites', 'sts_code', 'sts_code_authoring_by_plan'],
      iconType: createElement(_$$t)
    }, {
      action: 'create-code-layer-from-design',
      flags: ['edit', 'sites'],
      featureFlags: ['sites', 'sts_code', 'design_to_react', 'sts_code_authoring'],
      notFeatureFlags: ['sts_code_authoring_by_plan'],
      iconType: createElement(_$$t)
    }, {
      action: 'create-code-layer-from-design',
      flags: ['edit', 'sites'],
      featureFlags: ['sites', 'sts_code', 'design_to_react', 'sts_code_authoring_by_plan'],
      iconType: createElement(_$$t)
    }, {
      action: 'bulk-export-design-to-react',
      flags: ['edit', 'sites', 'design'],
      featureFlags: ['sites', 'sts_code', 'design_to_react', 'd2r_bulk'],
      iconType: createElement(_$$t)
    }, {
      action: 'restore-design-in-place-from-code',
      flags: ['edit', 'sites'],
      featureFlags: ['sites', 'sts_code', 'design_to_react', 'sts_code_authoring'],
      notFeatureFlags: ['sts_code_authoring_by_plan'],
      iconType: createElement(_$$U)
    }, {
      action: 'restore-design-in-place-from-code',
      flags: ['edit', 'sites'],
      featureFlags: ['sites', 'sts_code', 'design_to_react', 'sts_code_authoring_by_plan'],
      iconType: createElement(_$$U)
    }, {
      action: 'copy-out-design-from-code',
      flags: ['edit', 'sites'],
      featureFlags: ['sites', 'sts_code', 'design_to_react', 'sts_code_authoring'],
      notFeatureFlags: ['sts_code_authoring_by_plan'],
      iconType: createElement(_$$q)
    }, {
      action: 'copy-out-design-from-code',
      flags: ['edit', 'sites'],
      featureFlags: ['sites', 'sts_code', 'design_to_react', 'sts_code_authoring_by_plan'],
      iconType: createElement(_$$q)
    }, {
      action: 'create-template',
      flags: ['design', 'edit'],
      featureFlags: ['dse_templates_proto']
    }, {
      action: 'convert-to-slot',
      flags: ['design', 'edit'],
      featureFlags: ['dse_slots']
    }, {
      action: 'empty-slot-contents',
      flags: ['design', 'edit'],
      iconType: createElement(_$$_),
      featureFlags: ['dse_slots']
    }, {
      action: 'reset-symbol',
      iconType: createElement(_$$N2),
      flags: ['design', 'edit'],
      featureFlags: []
    }, {
      action: 'reset-fauxverride',
      iconType: createElement(_$$N2),
      flags: ['sites', 'edit'],
      featureFlags: ['sites']
    }, {
      action: 'detach-instance',
      iconType: createElement(_$$U),
      flags: ['design', 'edit', 'sites', 'slides'],
      featureFlags: []
    }, {
      action: 'reset-symbol',
      iconType: createElement(_$$N2),
      flags: ['slides'],
      featureFlags: []
    }, {
      action: 'main-component',
      flags: ['design', 'sites'],
      featureFlags: [],
      children: [{
        action: 'find-symbol',
        iconType: createElement(_$$h),
        featureFlags: []
      }, {
        action: 'push-changes-to-main',
        iconType: createElement(_$$m),
        flags: ['edit'],
        featureFlags: []
      }, {
        action: 'restore-symbol-or-state-group',
        flags: ['edit'],
        featureFlags: []
      }]
    }, {
      action: 'find-symbol',
      iconType: createElement(_$$h),
      flags: ['slides'],
      featureFlags: []
    }, {
      action: 'link-to-component',
      flags: ['design', 'edit'],
      featureFlags: ['first_draft_link_to_component']
    }, {
      separator: !0
    }, {
      action: 'bring-to-front',
      iconType: createElement(B),
      flags: ['edit'],
      featureFlags: []
    }, {
      action: 'bring-forward',
      iconType: createElement(V),
      flags: ['edit'],
      featureFlags: []
    }, {
      action: 'send-backward',
      iconType: createElement(G),
      flags: ['edit'],
      featureFlags: []
    }, {
      action: 'send-to-back',
      iconType: createElement(z),
      flags: ['edit'],
      featureFlags: []
    }, {
      separator: !0
    }, {
      action: 'flip-horizontal',
      iconType: createElement(_$$W),
      flags: ['edit'],
      featureFlags: []
    }, {
      action: 'flip-vertical',
      iconType: createElement(_$$D),
      flags: ['edit'],
      featureFlags: []
    }, {
      separator: !0
    }, {
      action: 'rotate-180',
      iconType: createElement(K),
      flags: ['edit'],
      featureFlags: []
    }, {
      action: 'rotate-90-counterclockwise',
      iconType: createElement(Y),
      flags: ['edit'],
      featureFlags: []
    }, {
      action: 'rotate-90-clockwise',
      iconType: createElement(_$$R),
      flags: ['edit'],
      featureFlags: []
    }, {
      separator: !0
    }, {
      action: 'flatten-selection',
      iconType: createElement(_$$p),
      flags: ['design', 'edit', 'sites', 'slides', 'cooper'],
      featureFlags: []
    }, {
      action: 'outline-stroke',
      iconType: createElement(Z),
      flags: ['design', 'edit', 'sites', 'slides', 'cooper'],
      shortcutText: c1(debugState.getState().mirror.appModel.keyboardShortcuts, 'outline-stroke'),
      featureFlags: []
    }, {
      name: 'boolean-menu',
      flags: ['design', 'edit', 'sites', 'slides', 'cooper'],
      featureFlags: [],
      children: [{
        action: 'live-boolean-union',
        iconType: createElement(X),
        featureFlags: []
      }, {
        action: 'live-boolean-subtract',
        iconType: createElement(_$$R2),
        featureFlags: []
      }, {
        action: 'live-boolean-intersect',
        iconType: createElement(_$$U2),
        featureFlags: []
      }, {
        action: 'live-boolean-xor',
        iconType: createElement(_$$N3),
        featureFlags: []
      }]
    }, {
      action: 'convert-to-raster',
      iconType: createElement(et),
      flags: ['design', 'edit', 'sites'],
      featureFlags: []
    }, {
      separator: !0
    }, {
      action: 'toggle-shown-for-selected-nodes',
      flags: ['design', 'sites', 'slides', 'cooper', 'edit'],
      featureFlags: []
    }, {
      action: 'toggle-locked-for-selected-nodes',
      iconType: createElement(_$$$),
      flags: ['edit'],
      featureFlags: []
    }, {
      action: 'unlock-all',
      iconType: createElement(en),
      flags: ['whiteboard', 'edit'],
      featureFlags: []
    }, {
      action: 'hide-sibling-layers',
      flags: ['design', 'edit'],
      featureFlags: []
    }, {
      action: 'collapse-layers',
      iconType: createElement(_$$_2),
      flags: ['design', 'sites', 'edit', 'slides', 'cooper'],
      featureFlags: []
    }, {
      separator: !0
    }, {
      action: 'remove-fill',
      flags: ['design', 'sites', 'edit', 'slides', 'cooper'],
      featureFlags: []
    }, {
      action: 'remove-stroke',
      flags: ['design', 'sites', 'edit', 'slides', 'cooper'],
      featureFlags: []
    }, {
      action: 'swap-fill-and-stroke',
      iconType: createElement(_$$F),
      flags: ['design', 'edit', 'slides', 'cooper', 'sites'],
      featureFlags: []
    }, {
      action: 'remove-interactions-on-selection',
      flags: ['design', 'edit'],
      featureFlags: []
    }]
  }, {
    name: MH,
    flags: ['edit', '!dev_handoff', '!figmake'],
    featureFlags: [],
    children: [{
      action: 'toggle-bold',
      featureFlags: []
    }, {
      action: 'text-toggle-italic',
      iconType: createElement(_$$s3),
      featureFlags: []
    }, {
      action: 'text-toggle-underline',
      iconType: createElement(_$$W2),
      featureFlags: []
    }, {
      action: 'text-toggle-strikethrough',
      iconType: createElement(_$$N4),
      featureFlags: []
    }, {
      action: 'text-edit-hyperlink',
      iconType: createElement(_$$r),
      featureFlags: []
    }, {
      action: 'text-upgrade-to-bidi',
      searchOnly: !0,
      featureFlags: []
    }, {
      action: 'text-upgrade-explicit-layout-version',
      featureFlags: ['ce_textlinedata_styleid'],
      searchOnly: !0
    }, {
      separator: !0,
      featureFlags: []
    }, {
      action: 'text-toggle-unordered-list',
      iconType: createElement(_$$Z2),
      featureFlags: []
    }, {
      action: 'text-toggle-ordered-list',
      iconType: createElement(_$$p2),
      featureFlags: []
    }, {
      separator: !0
    }, {
      action: 'insert-slide-numbers-all-slides',
      iconType: createElement(em),
      featureFlags: [],
      searchOnly: !0
    }, {
      action: 'skip-slides',
      flags: ['slides'],
      featureFlags: [],
      searchOnly: !0,
      searchSynonyms: ['hide slides']
    }, {
      action: 'unskip-slides',
      flags: ['slides'],
      featureFlags: [],
      searchOnly: !0,
      searchSynonyms: ['show slides']
    }, {
      action: 'text-align-menu',
      featureFlags: [],
      children: [{
        action: 'text-align-left',
        iconType: createElement(_$$h2),
        featureFlags: []
      }, {
        action: 'text-align-center',
        iconType: createElement(_$$N5),
        featureFlags: []
      }, {
        action: 'text-align-right',
        iconType: createElement(_$$K2),
        featureFlags: []
      }, {
        action: 'text-align-justified',
        iconType: createElement(_$$h3),
        flags: ['design', 'sites', 'slides', 'cooper'],
        featureFlags: []
      }, {
        separator: !0,
        flags: ['design', 'sites', 'slides', 'cooper']
      }, {
        action: 'text-align-top',
        iconType: createElement(_$$b2),
        flags: ['design', 'sites', 'slides', 'cooper'],
        featureFlags: []
      }, {
        action: 'text-align-middle',
        iconType: createElement(_$$X2),
        flags: ['design', 'sites', 'slides', 'cooper'],
        featureFlags: []
      }, {
        action: 'text-align-bottom',
        iconType: createElement(_$$z3),
        flags: ['design', 'sites', 'slides', 'cooper'],
        featureFlags: []
      }]
    }, {
      action: 'text-adjust-menu',
      featureFlags: [],
      children: [{
        action: 'text-indent-list',
        featureFlags: []
      }, {
        action: 'text-dedent-list',
        featureFlags: []
      }, {
        action: 'text-font-size-increase',
        iconType: createElement(_$$Z),
        flags: ['design', 'sites', 'slides', 'cooper'],
        featureFlags: []
      }, {
        action: 'text-font-size-decrease',
        iconType: createElement(_$$Z),
        flags: ['design', 'sites', 'slides', 'cooper'],
        featureFlags: []
      }, {
        action: 'text-bold-increase',
        iconType: createElement(_$$j),
        flags: ['design', 'sites', 'slides', 'cooper'],
        featureFlags: []
      }, {
        action: 'text-bold-decrease',
        iconType: createElement(_$$j),
        flags: ['design', 'sites', 'slides', 'cooper'],
        featureFlags: []
      }, {
        action: 'text-line-height-increase',
        iconType: createElement(_$$e2),
        flags: ['design', 'sites', 'slides', 'cooper'],
        featureFlags: []
      }, {
        action: 'text-line-height-decrease',
        iconType: createElement(_$$e2),
        flags: ['design', 'sites', 'slides', 'cooper'],
        featureFlags: []
      }, {
        action: 'text-letter-spacing-increase',
        iconType: createElement(_$$y2),
        flags: ['design', 'sites', 'slides', 'cooper'],
        featureFlags: []
      }, {
        action: 'text-letter-spacing-decrease',
        iconType: createElement(_$$y2),
        flags: ['design', 'sites', 'slides', 'cooper'],
        featureFlags: []
      }]
    }, {
      action: 'text-case-menu',
      flags: ['design', 'sites', 'slides'],
      featureFlags: [],
      children: [{
        action: 'text-original-case',
        iconType: createElement(_$$U3),
        callback: () => {
          _$$i('ORIGINAL', 'menu');
        },
        flags: ['design', 'sites', 'slides', 'cooper'],
        featureFlags: []
      }, {
        action: 'text-upper-case',
        iconType: createElement(_$$D2),
        callback: () => {
          _$$i('UPPER', 'menu');
        },
        flags: ['design', 'sites', 'slides', 'cooper'],
        featureFlags: []
      }, {
        action: 'text-lower-case',
        iconType: createElement(_$$L),
        callback: () => {
          _$$i('LOWER', 'menu');
        },
        flags: ['design', 'sites', 'slides', 'cooper'],
        featureFlags: []
      }, {
        action: 'text-title-case',
        iconType: createElement(_$$U3),
        callback: () => {
          _$$i('TITLE', 'menu');
        },
        flags: ['design', 'sites', 'slides', 'cooper'],
        searchOnly: !0,
        featureFlags: []
      }, {
        action: 'text-small-caps',
        iconType: createElement(_$$_3),
        callback: () => {
          _$$i('SMALL_CAPS', 'menu');
        },
        flags: ['design', 'sites', 'slides', 'cooper'],
        searchOnly: !0,
        featureFlags: []
      }, {
        action: 'text-forced-small-caps',
        iconType: createElement(_$$_3),
        callback: () => {
          _$$i('SMALL_CAPS_FORCED', 'menu');
        },
        flags: ['design', 'sites', 'slides', 'cooper'],
        searchOnly: !0,
        featureFlags: []
      }]
    }, {
      action: 'text-directionality-menu',
      featureFlags: [],
      children: [{
        action: 'text-set-directionality-ltr',
        hideForQuickCommand: !0,
        featureFlags: []
      }, {
        action: 'text-set-directionality-rtl',
        hideForQuickCommand: !0,
        featureFlags: []
      }, {
        action: 'text-set-directionality-ltr-qa',
        searchOnly: !0,
        featureFlags: []
      }, {
        action: 'text-set-directionality-rtl-qa',
        searchOnly: !0,
        featureFlags: []
      }]
    }, {
      separator: !0
    }, {
      name: 'spell-check-menu',
      flags: ['design', 'sites', 'whiteboard', 'slides', 'cooper'],
      featureFlags: [],
      children: [...nT([_$$x2()]), {
        separator: !0
      }, ...nT(_$$A4())]
    }, ...nk(), ...nT(dL(pluginAndWidgetMenuArgs, 'filemenu'))]
  }, {
    name: pn,
    flags: ['edit', '!dev_handoff', '!figmake'],
    featureFlags: [],
    children: [{
      action: 'round-to-pixels',
      flags: ['design'],
      featureFlags: []
    }, {
      separator: !0
    }, {
      action: 'align-left',
      iconType: createElement(_$$K3),
      featureFlags: []
    }, {
      action: 'align-horizontal-center',
      iconType: createElement(_$$E2),
      featureFlags: []
    }, {
      action: 'align-right',
      iconType: createElement(_$$F2),
      featureFlags: []
    }, {
      action: 'align-top',
      iconType: createElement(_$$Q2),
      featureFlags: []
    }, {
      action: 'align-vertical-center',
      iconType: createElement(_$$O3),
      featureFlags: []
    }, {
      action: 'align-bottom',
      iconType: createElement(_$$u3),
      featureFlags: []
    }, {
      separator: !0
    }, {
      action: 'tidy-up',
      iconType: createElement(_$$D3),
      featureFlags: []
    }, {
      separator: !0
    }, {
      action: 'pack-horizontal',
      flags: ['design'],
      featureFlags: []
    }, {
      action: 'pack-vertical',
      flags: ['design'],
      featureFlags: []
    }, {
      separator: !0
    }, {
      action: 'distribute-horizontal-spacing',
      iconType: createElement(_$$A2),
      featureFlags: []
    }, {
      action: 'distribute-vertical-spacing',
      iconType: createElement(_$$e3),
      featureFlags: []
    }, {
      separator: !0
    }, {
      action: 'distribute-left',
      flags: ['design'],
      featureFlags: []
    }, {
      action: 'distribute-horizontal-center',
      iconType: createElement(_$$A2),
      flags: ['design'],
      featureFlags: []
    }, {
      action: 'distribute-right',
      flags: ['design'],
      featureFlags: []
    }, {
      action: 'distribute-top',
      flags: ['design'],
      featureFlags: []
    }, {
      action: 'distribute-vertical-center',
      iconType: createElement(_$$e3),
      flags: ['design'],
      featureFlags: []
    }, {
      action: 'distribute-bottom',
      flags: ['design'],
      featureFlags: []
    }]
  }, {
    name: u2,
    flags: ['edit', 'design', '!dev_handoff'],
    featureFlags: [],
    children: [{
      action: 'join-selection',
      featureFlags: []
    }, {
      action: 'smooth-join-selection',
      featureFlags: []
    }, {
      action: 'delete-and-heal-selection',
      featureFlags: []
    }]
  }, {
    separator: !0
  }, ...(pluginAndWidgetMenuArgs ? nT(function (e) {
    {
      if (!e || !e.userCanViewPlugins) return [];
      let t = qz(e, 'filemenu');
      return t ? [t] : [];
    }
  }(pluginAndWidgetMenuArgs)) : []), ...(pluginAndWidgetMenuArgs ? nT(pluginAndWidgetMenuArgs && !pluginAndWidgetMenuArgs.isReadOnly ? [Vd(pluginAndWidgetMenuArgs, 'filemenu')] : []) : []), ...function () {
    let e = debugState.getState();
    let t = _$$td(e.currentUserOrgId, e.orgById);
    let i = [{
      name: 'see-all-plugins',
      displayText: getI18nString('fullscreen_actions.see-all-plugins'),
      callback: () => {
        atomStoreManager.set(Lk, _$$x.PLUGINS);
      },
      iconType: createElement(_$$u),
      flags: ['cooper'],
      featureFlags: ['buzz_plugins'],
      searchSynonyms: ['plugins', 'extensions'],
      searchOnly: !0
    }];
    t && i.push({
      name: 'plugins-from-org',
      displayText: getI18nString('fullscreen_actions.plugins-from-org', {
        orgName: t.name
      }),
      callback: () => {
        atomStoreManager.set(Lk, _$$x.PLUGINS);
        atomStoreManager.set(zM, 'org');
      },
      flags: ['cooper'],
      featureFlags: ['buzz_plugins'],
      searchSynonyms: ['plugins', 'extensions', 'organization', 'org plugins'],
      searchOnly: !0
    });
    return i;
  }(), {
    action: 'browse-all-resources-modal',
    flags: ['whiteboard', 'slides', 'cooper', 'edit'],
    searchOnly: !0,
    featureFlags: []
  }, {
    action: 'set-tool-code-block',
    flags: ['whiteboard', 'slides', 'edit'],
    searchOnly: !0,
    featureFlags: []
  }, {
    name: lW,
    featureFlags: [],
    children: [{
      name: 'dev-handoff-code-settings-language',
      flags: ['dev_handoff', '!limited_dev_mode'],
      children: nT((t = debugState.getState().mirror.appModel, [tU('dev-handoff-css-language', WEB, t), {
        name: 'dev-handoff-ios-language-group',
        children: [tU('dev-handoff-swiftui-language', _$$p4, t), tU('dev-handoff-uikit-language', IOS_UIKIT, t)]
      }, {
        name: 'dev-handoff-android-language-group',
        children: [tU('dev-handoff-compose-language', ANDROID, t), tU('dev-handoff-xml-language', ANDROID_XML, t)]
      }]))
    }, {
      name: 'dev-handoff-code-settings-unit',
      flags: ['dev_handoff', '!limited_dev_mode'],
      featureFlags: [],
      children: nT(function (e) {
        let t = e.devHandoffCodeLanguage;
        return t.type !== 'first-party' ? [] : [tB('dev-handoff-code-settings-unit-pixel', 'dev-handoff-code-settings-unit-pixel-quick-command', MeasurementUnit.PIXEL, e), tB('dev-handoff-code-settings-unit-scaled', 'dev-handoff-code-settings-unit-scaled-quick-command', MeasurementUnit.SCALED, e, {
          scaledUnit: b1(t.id)
        }), {
          name: 'dev-handoff-code-settings-unit-settings',
          callback: (e, t, i) => {
            i(showModalHandler({
              type: j6
            }));
          }
        }];
      }(debugState.getState().mirror.appModel))
    }, {
      separator: !0,
      flags: ['dev_handoff', '!limited_dev_mode']
    }, {
      action: 'toggle-snapping-to-geometry',
      property: UK().snapToGeometry,
      propertyValue: !0,
      flags: ['edit', 'design'],
      featureFlags: []
    }, {
      action: 'toggle-snapping-to-objects',
      property: UK().snapToObjects,
      propertyValue: !0,
      flags: ['edit', 'design'],
      featureFlags: []
    }, {
      action: 'toggle-snapping-to-pixels',
      property: UK().snapToPixelGrid,
      propertyValue: !0,
      flags: ['edit', 'design', 'slides', 'cooper', 'sites'],
      featureFlags: []
    }, {
      action: 'toggle-snapping-to-dots',
      property: getFeatureFlags().figjam_snap_to_dot_grid_reset ? UK().snapToDotGridStagingReset : UK().snapToDotGrid,
      propertyValue: !0,
      flags: ['edit', 'whiteboard'],
      featureFlags: []
    }, {
      separator: !0,
      flags: ['edit']
    }, {
      action: 'toggle-sticky-tools',
      property: UK().stickyTools,
      propertyValue: !0,
      flags: ['design', 'dev_handoff'],
      hideForQuickCommand: !0,
      featureFlags: []
    }, {
      action: 'disable-pinch-zoom-fix',
      property: UK().disablePinchZoomFix,
      propertyValue: !0,
      platforms: ['windows'],
      hideForQuickCommand: !0,
      featureFlags: []
    }, {
      action: 'toggle-layer-hover',
      property: UK().layerHover,
      propertyValue: !0,
      flags: ['design', 'dev_handoff'],
      hideForQuickCommand: !0,
      featureFlags: []
    }, {
      action: 'toggle-copy-renaming',
      property: UK().copyRenaming,
      propertyValue: !0,
      flags: ['edit', 'design'],
      hideForQuickCommand: !0,
      featureFlags: []
    }, {
      action: 'toggle-annotations',
      property: UK().renderAnnotations,
      propertyValue: !0,
      flags: ['design'],
      hideForQuickCommand: !0,
      featureFlags: []
    }, {
      action: 'toggle-viewport-overlay-hiding',
      property: UK().temporarilyHideViewportOverlay,
      propertyValue: !0,
      flags: ['design'],
      hideForQuickCommand: !0,
      featureFlags: []
    }, {
      action: 'toggle-smart-quotes',
      property: UK().smartQuotes,
      propertyValue: !0,
      flags: ['edit', 'design'],
      hideForQuickCommand: !0,
      featureFlags: [],
      notFeatureFlags: ['ce_tv_typing_shortcuts']
    }, {
      action: 'toggle-smart-text-substitution',
      property: UK().smartQuotes,
      propertyValue: !0,
      flags: ['edit', 'design'],
      hideForQuickCommand: !0,
      featureFlags: ['ce_tv_typing_shortcuts']
    }, {
      action: 'toggle-flip-during-resize',
      property: UK().flipDuringResize,
      propertyValue: !0,
      flags: ['edit', 'design'],
      hideForQuickCommand: !0,
      featureFlags: []
    }, {
      action: 'set-constraints-automatically-toggle',
      property: UK().setConstraintsAutomaticallyToggle,
      propertyValue: !0,
      featureFlags: ['sites', 'sts_auto_constraints'],
      flags: ['edit', 'sites']
    }, {
      separator: !0,
      flags: ['edit', 'whiteboard']
    }, {
      action: 'toggle-keyboard-zoom-to-selection',
      property: UK().keyboardZoomToSelection,
      propertyValue: !0,
      hideForQuickCommand: !0,
      featureFlags: [],
      flags: ['!figmake']
    }, {
      action: 'toggle-invert-zoom',
      property: UK().invertZoom,
      propertyValue: !0,
      hideForQuickCommand: !0,
      featureFlags: [],
      flags: ['!figmake']
    }, {
      action: 'toggle-ctrl-click-context-menu',
      property: UK().ctrlClickContextMenu,
      propertyValue: !0,
      hideForQuickCommand: !0,
      featureFlags: []
    }, {
      separator: !0,
      flags: ['edit', 'whiteboard']
    }, {
      action: 'toggle-cursor-high-five-wiggle',
      property: UK().cursorHighFiveWiggle,
      propertyValue: !0,
      flags: ['whiteboard'],
      hideForQuickCommand: !0,
      featureFlags: []
    }, {
      action: 'toggle-use-numbers-for-opacity',
      property: AppStateTsApi.editorState().useNumbersForOpacity,
      propertyValue: !0,
      flags: ['edit', 'design', 'slides', 'cooper'],
      hideForQuickCommand: !0,
      featureFlags: []
    }, {
      action: 'toggle-use-old-outline-shortcuts',
      property: UK().useOldOutlineShortcuts,
      propertyValue: !0,
      flags: ['design', 'dev_handoff'],
      hideForQuickCommand: !0,
      featureFlags: []
    }, {
      name: 'open-links-in-desktop-app',
      get checked() {
        return _$$N7.isAutoOpenEnabled();
      },
      callback: () => {
        _$$N7.toggleAutoOpen();
      },
      flags: getFeatureFlags().desktop_use_db_auto_open_pref ? [] : ['!desktop'],
      get platforms() {
        return _$$N7.shouldShowOnce() ? [] : ['mac', 'windows'];
      },
      featureFlags: []
    }, ...(desktopAPIInstance?.hasFeature('addCodegenMCPStartupBinding') && getFeatureFlags().show_mcp_server_upsell && !mcpArgs?.canStartCodegenMcpServer && fileMenuArgs?.openFile?.plan?.tier === FPlanNameType.STARTER ? [{
      action: 'toggle-enable-codegen-mcp-server',
      property: UK().enableCodegenMcpServer,
      flags: ['desktop', 'design', 'dev_handoff'],
      propertyValue: !0,
      callback: (e, t, i) => {
        i(showModalHandler({
          type: DV,
          data: {
            team: fileMenuArgs?.openFile?.team ?? null,
            editorType: fileMenuArgs?.openFile?.editorType ?? null,
            resource: Bi.MCP,
            action: fileActionEnum.ENABLE_MCP,
            currentPlan: _$$F5.Plan.STARTER,
            upsellPlan: _$$F5.Plan.PRO,
            upsellSource: UpsellModalType.MCP_MODAL,
            hideUpsellPlanCta: !1
          }
        }));
      },
      featureFlags: ['dt_my_cool_plugin']
    }] : []), ...(desktopAPIInstance?.hasFeature('addCodegenMCPStartupBinding') && mcpArgs?.canStartCodegenMcpServer ? [{
      action: 'toggle-enable-codegen-mcp-server',
      property: UK().enableCodegenMcpServer,
      flags: ['desktop', 'design', 'dev_handoff'],
      propertyValue: !0,
      featureFlags: ['dt_my_cool_plugin']
    }, {
      name: 'dev-mode-mcp-server-settings',
      flags: ['desktop', 'design', 'dev_handoff'],
      featureFlags: ['dt_my_cool_plugin'],
      children: [...(getFeatureFlags().dt_my_cool_plugin_internal || getFeatureFlags().dt_my_cool_plugin_xml ? [{
        name: 'dev-mode-mcp-server-settings',
        displayText: getI18nString('fullscreen_actions.mcp-react-tailwind-code'),
        get checked() {
          return atomStoreManager.get(Kx) === 'design_to_react';
        },
        callback: () => {
          atomStoreManager.set(Kx, 'design_to_react');
        }
      }, {
        name: 'dev-mode-codegen-mcp-server-settings',
        displayText: getI18nString('fullscreen_actions.mcp-xml-code'),
        get checked() {
          return atomStoreManager.get(Kx) === 'xml';
        },
        callback: () => {
          atomStoreManager.set(Kx, 'xml');
        },
        featureFlags: ['dt_my_cool_plugin_xml']
      }, {
        name: 'dev-mode-codegen-mcp-server-settings',
        displayText: getI18nString('fullscreen_actions.mcp-jsx-code'),
        get checked() {
          return atomStoreManager.get(Kx) === 'jsx';
        },
        callback: () => {
          atomStoreManager.set(Kx, 'jsx');
        },
        featureFlags: ['dt_my_cool_plugin_internal']
      }, {
        separator: !0
      }] : []), {
        name: 'dev-mode-mcp-server-settings',
        displayText: getI18nString('fullscreen_actions.mcp-use-tailwind'),
        get checked() {
          return atomStoreManager.get(Kx) === 'design_to_react' && atomStoreManager.get(lk);
        },
        callback: () => {
          atomStoreManager.set(lk, e => !e);
        },
        disabled: atomStoreManager.get(Kx) !== 'design_to_react',
        featureFlags: ['dt_my_cool_plugin_d2r_tailwind_option']
      }, ...(mcpArgs?.canAccessCodeConnect ? [{
        name: 'dev-mode-mcp-server-settings',
        displayText: getI18nString('fullscreen_actions.mcp-enable-code-connect'),
        get checked() {
          return atomStoreManager.get(_$$tz);
        },
        callback: () => {
          atomStoreManager.set(_$$tz, e => !e);
        }
      }] : []), {
        name: 'dev-mode-mcp-server-settings',
        displayText: getI18nString('fullscreen_actions.mcp-enable-codebase-suggestions'),
        get checked() {
          return Lw();
        },
        callback: () => {
          atomStoreManager.set(SV, !Lw());
        },
        featureFlags: ['dt_my_cool_plugin_codebase_suggestions']
      }, ...function () {
        if (!desktopAPIInstance?.hasFeature('addMcpImageSupport') || atomStoreManager.get(Kx) === 'xml') return [];
        let e = [{
          name: 'dev-mode-mcp-server-settings',
          displayText: getI18nString('fullscreen_actions.mcp-use-placeholder-images'),
          get checked() {
            return atomStoreManager.get(pe) === 'placeholder-svg';
          },
          callback: () => {
            atomStoreManager.set(pe, 'placeholder-svg');
          },
          featureFlags: []
        }, {
          name: 'dev-mode-mcp-server-settings',
          displayText: getI18nString('fullscreen_actions.mcp-use-local-images'),
          get checked() {
            return atomStoreManager.get(pe) === 'local';
          },
          callback: () => {
            atomStoreManager.set(pe, 'local');
          },
          hideForQuickCommand: !0,
          featureFlags: []
        }, ...(As() ? [{
          name: 'dev-mode-mcp-server-settings',
          displayText: getI18nString('fullscreen_actions.mcp-write-images-to-disk'),
          get checked() {
            return atomStoreManager.get(pe) === 'write-to-disk';
          },
          callback: () => {
            atomStoreManager.set(pe, 'write-to-disk');
          },
          featureFlags: [],
          hideForQuickCommand: !0
        }, ...(atomStoreManager.get(pe) === 'write-to-disk' ? [{
          separator: !0
        }, {
          name: 'dev-mode-mcp-server-settings',
          displayText: getI18nString('fullscreen_actions.mcp-allow-overwriting-files'),
          get checked() {
            return !atomStoreManager.get(Pq);
          },
          callback: () => {
            atomStoreManager.set(Pq, e => !e);
          },
          featureFlags: [],
          hideForQuickCommand: !0
        }] : [])] : [])];
        return [{
          name: 'dev-mode-mcp-server-settings',
          displayText: getI18nString('fullscreen_actions.mcp-image-settings'),
          children: e,
          hideForQuickCommand: !0,
          featureFlags: []
        }];
      }(), {
        separator: !0,
        featureFlags: ['dt_my_cool_plugin_internal']
      }, {
        name: 'dev-mode-mcp-server-settings',
        displayText: 'Mock Code Connect from clipboard',
        callback: () => {
          let e = () => {
            atomStoreManager.set(rx, null);
            debugState.dispatch(VisualBellActions.enqueue({
              message: 'Reset Code Connect mock'
            }));
          };
          navigator.clipboard.readText().then(t => {
            try {
              let e = JSON.parse(t);
              atomStoreManager.set(rx, e);
              debugState.dispatch(VisualBellActions.enqueue({
                message: 'Set Code Connect mock'
              }));
            } catch (t) {
              e();
            }
          }, e);
        },
        featureFlags: ['dt_my_cool_plugin_internal']
      }, {
        name: 'dev-mode-mcp-server-settings',
        displayText: 'Copy get_code output',
        callback: () => {
          let e = debugState;
          _$$r5('get_code', void 0, e).then(t => {
            let i = t.content.map(e => e.text).join('\n');
            navigator.clipboard.writeText(i).then(() => {
              e.dispatch(VisualBellActions.enqueue({
                message: 'Copied code to clipboard'
              }));
            });
          });
        },
        featureFlags: ['dt_my_cool_plugin_internal']
      }, {
        name: 'dev-mode-mcp-server-settings',
        displayText: getI18nString('fullscreen_actions.mcp-get-test-cases-snapshot'),
        callback: async () => {
          let {
            getTestCasesSnapshot
          } = await _require;
          await getTestCasesSnapshot(debugState);
        },
        featureFlags: ['dt_my_cool_plugin_internal']
      }]
    }] : []), ...nT(go()), ...nk(), {
      name: 'show-templates-for-new-figjam-files',
      get checked() {
        return !_$$J2();
      },
      callback: (e, t, i) => {
        i(_$$x4({
          hide: !_$$J2(),
          triggeredFrom: 'fullscreen_menu'
        }));
      },
      flags: ['whiteboard'],
      featureFlags: []
    }, ...nT(Sd()), {
      separator: !0,
      flags: ['edit']
    }, {
      separator: !0,
      flags: ['dev_handoff']
    }, {
      name: 'theme-menu-option',
      flags: ['design', 'dev_handoff', 'slides', 'cooper', 'sites'],
      featureFlags: [],
      children: nT(YA(theme))
    }, ...nT(function () {
      let e = Object.values(_$$nt);
      let t = e.filter(e => e.canOverride());
      let i = () => e.filter(e => e.isOverridden(debugState.getState().userFlags));
      if (t.length === 0) return [];
      let n = [];
      t.forEach(e => {
        let t = e.getDisplayName();
        n.push({
          name: 'lab-menu-item-enable',
          searchOnly: !0,
          args: {
            labName: t
          },
          get checked() {
            return e.getValue();
          },
          callback: (t, i, n) => {
            e.toggleValue(debugState.getState().user, n, 'quick_actions');
          }
        });
        n.push({
          name: 'lab-menu-item',
          hideForQuickCommand: !0,
          args: {
            labName: t
          },
          get checked() {
            return e.getValue();
          },
          callback: (t, i, n) => {
            e.toggleValue(debugState.getState().user, n, 'fullscreen_menu');
          }
        });
      });
      n.push({
        separator: !0
      });
      n.push({
        name: 'lab-menu-reset',
        disabled: i().length === 0,
        callback(e, t, n) {
          let r = i();
          r.forEach(e => e.resetToDefault(debugState.getState().user, n));
          n(VisualBellActions.enqueue({
            message: getI18nString('lab.menu.changed_to_default', {
              count: r.length
            })
          }));
        }
      });
      return [{
        name: 'labs',
        children: n
      }];
    }()), ...nT([WB()]), ...nT(xt()), {
      name: 'accessibility-settings',
      flags: ['whiteboard', ...conditionalFeatureFlag('a11y_design_dom_mirror', ['design', 'dev_handoff'], []), ...conditionalFeatureFlag('slides_editor_a11y', ['slides'], []), ...conditionalFeatureFlag('fpl_enhanced_contrast_toggle', ['edit', 'sites', 'slides', 'cooper', 'design', 'dev_handoff', 'figmake'], [])].filter(isNotNullish),
      callback: (e, t, i) => {
        i(showModalHandler({
          type: _$$L3
        }));
      },
      featureFlags: []
    }, {
      name: 'adapt-content-for-screenreaders',
      flags: ['whiteboard', ...conditionalFeatureFlag('a11y_design_dom_mirror', ['design', 'dev_handoff'], []), ...conditionalFeatureFlag('slides_editor_a11y', ['slides'], [])].filter(isNotNullish),
      checked: tX.screenreader.enabled,
      searchOnly: !0,
      searchSynonyms: ['screenreader', 'accessibility'],
      callback: (e, t, i) => {
        let n = !tX.screenreader.enabled;
        _$$f(n ? _$$h7.TOGGLE_DOM_ON_MENU : _$$h7.TOGGLE_DOM_OFF_MENU);
        i(X7({
          enabled: !tX.screenreader.enabled,
          scope: 'PERSISTENT',
          user: tX.user || void 0
        }));
      }
    }, {
      action: 'show-nudge-amount-picker',
      iconType: createElement(_$$L2),
      flags: ['edit', 'design', 'sites', 'slides', 'cooper'],
      featureFlags: []
    }]
  }, {
    action: 'open-preferences-modal',
    flags: ['design', 'slides'],
    featureFlags: []
  }, {
    separator: !0
  }, {
    get name() {
      return fullscreenValue.getDesktopAppMenuItemName();
    },
    callback: e => fullscreenValue.handleDesktopAppMenuItem(e),
    flags: ['!desktop'],
    platforms: ['mac', 'windows'],
    featureFlags: []
  }, {
    name: _$$hV,
    featureFlags: [],
    children: [{
      action: 'open-help',
      iconType: createElement(_$$G),
      featureFlags: []
    }, {
      action: 'open-shortcuts',
      iconType: createElement(eU),
      featureFlags: []
    }, {
      action: 'open-support-forum',
      iconType: createElement(_$$G),
      featureFlags: []
    }, {
      action: 'open-tutorials',
      iconType: createElement(eB),
      featureFlags: []
    }, {
      action: 'open-release-notes',
      iconType: createElement(eV),
      featureFlags: []
    }, {
      action: 'open-font-settings',
      flags: ['!desktop', '!integration', 'design'],
      iconType: 'external_link',
      featureFlags: []
    }, {
      separator: !0
    }, {
      name: 'troubleshooting-menu',
      flags: ['desktop_os_menu'],
      featureFlags: []
    }, {
      separator: !0
    }, {
      action: 'open-legal-summary',
      iconType: 'external_link',
      featureFlags: []
    }, {
      action: 'open-account-settings',
      iconType: createElement(_$$I),
      flags: ['!integration'],
      featureFlags: []
    }, {
      name: 'sign-out',
      flags: IntegrationUtils.isGoogleClassroomIntegration() ? [] : ['!integration'],
      callback: (e, t, i) => {
        IntegrationUtils.isGoogleClassroomIntegration() ? sendMessageToParent({
          action: 'logOut'
        }) : i(S5());
      },
      hideForQuickCommand: !0,
      featureFlags: []
    }]
  }, {
    action: 'set-tool-mindmap-tree-nucleus',
    flags: ['whiteboard', 'edit'],
    searchOnly: !0,
    featureFlags: []
  }, {
    action: 'set-tool-arrow',
    iconType: createElement(_$$E3),
    flags: ['design'],
    searchOnly: !0,
    featureFlags: []
  }, {
    action: 'set-tool-default',
    flags: ['design'],
    searchOnly: !0,
    featureFlags: []
  }, {
    action: 'set-tool-default-figjam',
    flags: ['whiteboard'],
    searchOnly: !0,
    featureFlags: []
  }, {
    action: 'set-tool-hand',
    iconType: createElement(_$$O4),
    searchOnly: !0,
    featureFlags: []
  }, {
    action: 'set-tool-comments',
    iconType: createElement(_$$S),
    searchOnly: !0,
    disabled: BrowserInfo.isIpadNative,
    featureFlags: []
  }, {
    action: 'spotlight-me',
    iconType: createElement(eK),
    searchOnly: !0,
    disabled: spotlightArgs?.spotlightDisabledForSelf,
    featureFlags: []
  }, {
    action: 'follow-presenter',
    iconType: createElement(eK),
    searchOnly: !0,
    featureFlags: []
  }, ...nT(nE), {
    action: 'restore-autolayout-position',
    flags: ['design'],
    searchOnly: !0,
    isLowPriorityMatch: !0,
    featureFlags: []
  }, {
    action: 'republish-selected-components',
    flags: ['design'],
    searchOnly: !0,
    featureFlags: []
  }, {
    action: 'component-insert',
    flags: ['design'],
    searchOnly: !0,
    featureFlags: []
  }, {
    action: 'republish-auto-layout-components',
    flags: ['design'],
    searchOnly: !0,
    isLowPriorityMatch: !0,
    featureFlags: []
  }, {
    action: 'select-broken-fixed-scrolling-nodes',
    flags: ['design'],
    searchOnly: !0,
    isLowPriorityMatch: !0,
    featureFlags: []
  }, {
    action: 'text-relayout',
    searchOnly: !0,
    isLowPriorityMatch: !0,
    featureFlags: []
  }, {
    action: 'downgrade-vector-operation-version',
    searchOnly: !0,
    isLowPriorityMatch: !0,
    featureFlags: ['ce_tv_downgrade_vector_op_version_qa']
  }, {
    action: 'apply-transform-modifiers',
    featureFlags: [],
    searchOnly: !0
  }, {
    action: 'break-vector-network-into-paths',
    flags: ['design', 'edit', 'sites', 'slides', 'cooper'],
    displayForQuickCommand: 'break-vector-network-into-paths',
    featureFlags: ['ce_il_var_width_points'],
    searchOnly: !0,
    searchSynonyms: ['break']
  }, {
    action: 'set-tool-simplify-vector',
    searchOnly: !0,
    featureFlags: ['ce_il_simplify']
  }, {
    action: 'migrate-effect-repeats-to-transforms',
    searchOnly: !0,
    isLowPriorityMatch: !0,
    featureFlags: ['ce_il_array_tr']
  }, {
    action: 'migrate-pattern-spacing',
    searchOnly: !0,
    isLowPriorityMatch: !0,
    featureFlags: ['ce_il_pattern_migration_tool']
  }, {
    action: 'disable-all-unframed-masks',
    flags: ['whiteboard'],
    searchOnly: !0,
    featureFlags: []
  }, {
    action: 'regenerate-file-geometry',
    isLowPriorityMatch: !0,
    searchOnly: !0,
    featureFlags: []
  }, {
    action: 'resize-to-fit',
    iconType: createElement(_$$F3),
    flags: ['design'],
    searchOnly: !0,
    featureFlags: []
  }, {
    action: 'toggle-frame-clipping',
    flags: ['design'],
    searchOnly: !0,
    featureFlags: []
  }, {
    action: 'set-tool-bend',
    iconType: createElement(_$$r2),
    flags: ['edit', 'design'],
    searchOnly: !0,
    featureFlags: []
  }, {
    action: 'set-tool-ellipse',
    iconType: createElement(_$$B),
    flags: ['edit', 'design'],
    searchOnly: !0,
    featureFlags: []
  }, {
    action: 'set-tool-frame',
    iconType: createElement(_$$q),
    flags: ['edit', 'design'],
    searchOnly: !0,
    featureFlags: []
  }, {
    action: 'set-tool-line',
    iconType: createElement(_$$h4),
    flags: ['edit', 'design'],
    searchOnly: !0,
    featureFlags: []
  }, {
    action: 'set-tool-paint-bucket',
    iconType: createElement(_$$w),
    flags: ['edit'],
    searchOnly: !0,
    featureFlags: []
  }, {
    action: 'set-tool-pen',
    iconType: createElement(_$$k),
    flags: ['edit', 'design'],
    searchOnly: !0,
    featureFlags: []
  }, {
    action: 'set-tool-pencil',
    iconType: createElement(_$$A3),
    flags: ['edit', 'design'],
    searchOnly: !0,
    featureFlags: []
  }, {
    action: 'set-tool-cut',
    iconType: createElement(_$$z4),
    flags: ['edit', 'design'],
    searchOnly: !0,
    featureFlags: ['ce_il_vem_cut_tool']
  }, {
    action: 'set-tool-offset-path',
    iconType: createElement(_$$R3),
    flags: ['edit', 'design'],
    searchOnly: !0,
    featureFlags: ['ce_il_vem_offset_path']
  }, {
    action: 'set-tool-vector-lasso',
    iconType: createElement(_$$N6),
    flags: ['edit'],
    searchOnly: !0,
    featureFlags: []
  }, {
    action: 'set-tool-shape-builder',
    iconType: createElement(_$$v),
    flags: ['edit', 'design', 'sites'],
    searchOnly: !0,
    featureFlags: []
  }, {
    name: 'set-tool-marker',
    shortcutText: 'M',
    callback: () => {
      fullscreenValue.triggerAction('set-tool-pencil');
    },
    flags: ['edit', 'whiteboard'],
    searchOnly: !0,
    featureFlags: []
  }, {
    action: 'set-tool-rectangle',
    iconType: createElement(_$$y3),
    flags: ['edit', 'design'],
    searchOnly: !0,
    featureFlags: []
  }, {
    action: 'set-tool-regular-polygon',
    iconType: createElement(_$$h5),
    flags: ['edit', 'design'],
    searchOnly: !0,
    featureFlags: []
  }, {
    action: 'set-tool-scale',
    iconType: createElement(_$$l2),
    flags: ['edit', 'design', 'slides', 'cooper', 'sites'],
    searchOnly: !0,
    featureFlags: []
  }, {
    action: 'set-tool-slice',
    iconType: createElement(_$$h6),
    flags: ['edit', 'design'],
    searchOnly: !0,
    featureFlags: []
  }, {
    action: 'set-tool-star',
    iconType: createElement(_$$Z3),
    flags: ['edit', 'design'],
    searchOnly: !0,
    featureFlags: []
  }, {
    action: 'set-tool-sticky',
    flags: ['edit', 'whiteboard'],
    searchOnly: !0,
    featureFlags: []
  }, {
    name: 'set-tool-stamp',
    flags: ['edit', 'whiteboard'],
    searchOnly: !0,
    callback: (e, t, i) => {
      _$$X4({
        source: 'quick-actions'
      });
    },
    featureFlags: []
  }, {
    action: 'set-tool-connector-elbowed',
    flags: ['edit', 'whiteboard'],
    searchOnly: !0,
    featureFlags: []
  }, {
    action: 'set-tool-connector-straight',
    flags: ['edit', 'whiteboard'],
    searchOnly: !0,
    featureFlags: []
  }, {
    action: 'set-tool-shape-whiteboard-square',
    flags: ['edit', 'whiteboard'],
    searchOnly: !0,
    featureFlags: []
  }, {
    action: 'set-tool-shape-whiteboard-ellipse',
    flags: ['edit', 'whiteboard'],
    searchOnly: !0,
    featureFlags: []
  }, {
    action: 'set-tool-shape-whiteboard-diamond',
    flags: ['edit', 'whiteboard'],
    searchOnly: !0,
    featureFlags: []
  }, {
    action: 'set-tool-shape-whiteboard-triangle-up',
    flags: ['edit', 'whiteboard'],
    searchOnly: !0,
    featureFlags: []
  }, {
    action: 'set-tool-shape-whiteboard-triangle-down',
    flags: ['edit', 'whiteboard'],
    searchOnly: !0,
    featureFlags: []
  }, {
    action: 'set-tool-shape-whiteboard-rounded-rectangle',
    flags: ['edit', 'whiteboard'],
    searchOnly: !0,
    featureFlags: []
  }, {
    action: 'set-tool-type',
    iconType: createElement(_$$e),
    flags: ['edit'],
    searchOnly: !0,
    featureFlags: []
  }, {
    action: 'set-tool-eraser',
    flags: ['whiteboard'],
    searchOnly: !0,
    featureFlags: []
  }, {
    action: 'set-tool-highlighter',
    flags: ['whiteboard'],
    searchOnly: !0,
    featureFlags: []
  }, {
    action: 'set-tool-washi-tape',
    flags: ['edit', 'whiteboard'],
    searchOnly: !0,
    featureFlags: []
  }, {
    action: 'set-tool-table',
    flags: ['edit', 'whiteboard'],
    searchOnly: !0,
    featureFlags: []
  }, {
    action: 'set-tool-measure',
    iconType: createElement(_$$L2),
    flags: ['dev_handoff'],
    searchOnly: !0,
    featureFlags: []
  }, {
    action: 'set-tool-annotate',
    iconType: createElement(_$$r3),
    flags: ['dev_handoff'],
    searchOnly: !0,
    featureFlags: []
  }, {
    action: 'open-timer',
    flags: ['whiteboard'],
    searchOnly: !0,
    callback: () => {
      atomStoreManager.set(Qs, {
        type: 'OPEN'
      });
      atomStoreManager.set(qM, !1);
      trackEventAnalytics(Fn.OPEN, {
        source: OO.QUICK_ACTIONS
      });
      _$$D6(() => {
        atomStoreManager.set(Qs, {
          type: 'CLOSE'
        });
      });
    },
    featureFlags: []
  }, {
    action: 'toggle-help-widget',
    searchOnly: !0,
    property: UK().hideHelpWidget,
    propertyValue: !0,
    featureFlags: []
  }, {
    action: 'toggle-multiplayer-cursors',
    searchOnly: !0,
    property: AppStateTsApi?.uiState().hideMultiplayerCursors,
    propertyValue: !1,
    featureFlags: []
  }, {
    action: 'unlock-all',
    iconType: createElement(en),
    flags: ['edit'],
    searchOnly: !0,
    featureFlags: []
  }, {
    action: 'unhide-all',
    iconType: createElement(_$$_4),
    flags: ['edit', 'design'],
    searchOnly: !0,
    featureFlags: []
  }, {
    action: 'toggle-library',
    iconType: createElement(A),
    flags: ['edit'],
    searchOnly: !0,
    featureFlags: []
  }, {
    action: 'crop-image',
    iconType: createElement(_$$V),
    flags: ['edit'],
    searchOnly: !0,
    featureFlags: []
  }, {
    action: 'reset-transform',
    flags: ['edit', 'design', 'whiteboard', 'slides', 'cooper'],
    searchOnly: !0,
    isLowPriorityMatch: !0,
    featureFlags: []
  }, {
    action: 'copy-link',
    flags: ['edit', 'design', 'whiteboard', 'slides', 'cooper'],
    searchOnly: !0,
    featureFlags: []
  }, {
    action: 'sites-copy-link',
    featureFlags: [],
    flags: ['sites'],
    searchOnly: !0
  }, {
    name: 'report-issue',
    featureFlags: ['bug_reporter'],
    callback: (e, t, i) => {
      i(showModalHandler({
        type: bb,
        data: {},
        showModalsBeneath: !0
      }));
    },
    searchOnly: !0,
    searchSynonyms: ['report a bug']
  }, {
    action: 'publish-template',
    flags: ['slides'],
    featureFlags: [],
    searchOnly: !0
  }, {
    name: 'set-commit-sha',
    featureFlags: ['set_frontend_commit_sha'],
    callback: (e, t, i) => {
      i(showModalHandler({
        type: _$$H3,
        data: {},
        showModalsBeneath: !0
      }));
    },
    searchOnly: !0
  }, {
    name: 'theme-enhanced-contrast-on',
    displayForQuickCommand: 'theme-enhanced-contrast-quick-command',
    checked: debugState.getState().theme.enhancedContrast,
    callback: (e, t, i) => {
      _$$f(_$$h7.TOGGLE_ENHANCED_CONTRAST_ON);
      i(fK({
        enhancedContrast: !debugState.getState().theme.enhancedContrast,
        userInitiated: !0
      }));
    },
    searchSynonyms: ['enhance', 'contrast', 'readability', 'mode', 'accessibility'],
    iconType: createElement(_$$n2),
    searchOnly: !0,
    featureFlags: ['fpl_enhanced_contrast_toggle']
  }, {
    name: 'debug-menu',
    flags: getFeatureFlags().internal_only_debug_tools ? [] : ['!ship'],
    featureFlags: [],
    children: [{
      action: 'add-default-cell-styles-to-tables',
      searchOnly: !0,
      featureFlags: []
    }, {
      action: 'toggle-memory-usage-indicator',
      property: AppStateTsApi.uiState().showMemoryUsage,
      flags: ['design'],
      propertyValue: !0,
      featureFlags: []
    }, {
      name: 'download-memory-profile',
      featureFlags: ['memory_profiling_local'],
      callback: async () => {
        window.MemoryDebug && (await window.MemoryDebug.downloadPprof());
        alert('Profile downloaded!');
      }
    }, {
      action: 'toggle-resource-use',
      property: AppStateTsApi.uiState().renderResourceUse,
      propertyValue: !0,
      featureFlags: []
    }, {
      action: 'debug-toggle-show-canvas-axis',
      property: AppStateTsApi.uiState().showCanvasXYAxis,
      propertyValue: !0,
      featureFlags: ['internal_only_debug_tools']
    }, {
      action: 'debug-toggle-show-mouse-position',
      property: AppStateTsApi.uiState().showMousePosition,
      propertyValue: !0,
      featureFlags: ['internal_only_debug_tools']
    }, {
      action: 'debug-toggle-whiteboard-pdf-import-node-replacement',
      property: UK().disableWhiteboardPdfImportNodeReplacement,
      propertyValue: !1,
      isLowPriorityMatch: !0,
      featureFlags: ['internal_only_debug_tools']
    }, {
      action: 'debug-selection',
      featureFlags: []
    }, {
      action: 'debug-toggle-show-vector-network-labels',
      property: UK().showVectorNetworkLabels,
      propertyValue: !0,
      isLowPriorityMatch: !0,
      featureFlags: ['internal_only_debug_tools']
    }, {
      name: 'change-feature-flags',
      callback() {
        fullscreenValue.dispatch(showModalHandler({
          type: qf,
          data: {},
          showModalsBeneath: !0
        }));
      },
      featureFlags: ['feature_flag_overrides']
    }, {
      name: 'toggle-downtime-banner',
      callback: () => fullscreenValue.toggleDowntimeBanner()
    }, {
      action: 'change-document-color-profile-to-display-p3',
      displayForQuickCommand: 'change-document-color-profile-to-display-p3-quick-action',
      featureFlags: []
    }, {
      action: 'change-document-color-profile-to-srgb',
      displayForQuickCommand: 'change-document-color-profile-to-srgb-quick-action',
      featureFlags: []
    }, {
      action: 'assign-document-color-profile-legacy',
      displayForQuickCommand: 'assign-document-color-profile-legacy-quick-action',
      featureFlags: ['ee_color_management_debug']
    }, {
      action: 'toggle-recording-interactions',
      featureFlags: []
    }, {
      action: 'toggle-show-feature-flag-bisector',
      featureFlags: []
    }, {
      action: 'toggle-perf-hud',
      featureFlags: []
    }, {
      action: 'toggle-fake-mp-activity',
      featureFlags: []
    }, {
      action: 'toggle-tsmer-config',
      featureFlags: []
    }, {
      action: 'toggle-debug-doc-sync-logs',
      isLowPriorityMatch: !0,
      featureFlags: []
    }, {
      action: 'toggle-debug-user-sync-logs',
      isLowPriorityMatch: !0,
      featureFlags: []
    }, {
      action: 'toggle-debug-page-sync-logs',
      isLowPriorityMatch: !0,
      featureFlags: []
    }, {
      action: 'debug-incremental-loading-all-pages',
      isLowPriorityMatch: !0,
      featureFlags: []
    }, {
      action: 'debug-incremental-loading-current-only',
      isLowPriorityMatch: !0,
      featureFlags: []
    }, {
      action: 'toggle-debug-layout-logs',
      isLowPriorityMatch: !0,
      featureFlags: []
    }, {
      action: 'toggle-debug-materializer-logs',
      isLowPriorityMatch: !0,
      featureFlags: []
    }, {
      action: 'clear-constraint-info',
      isLowPriorityMatch: !0,
      featureFlags: []
    }, {
      action: 'toggle-show-guids',
      property: UK().showGuids,
      propertyValue: !0,
      isLowPriorityMatch: !0,
      featureFlags: []
    }, {
      action: 'debug-toggle-figma-scope',
      property: UK().showFigmaScope,
      propertyValue: !0,
      isLowPriorityMatch: !0,
      featureFlags: ['internal_only_debug_tools']
    }, {
      action: 'debug-print-as-test-code',
      isLowPriorityMatch: !0,
      featureFlags: []
    }, {
      action: 'debug-print-vector-network-as-test-code',
      isLowPriorityMatch: !0,
      featureFlags: []
    }, {
      action: 'force-publish-state-group',
      isLowPriorityMatch: !0,
      featureFlags: ['ds_force_publish_cmd']
    }, {
      action: 'toggle-canvas-search-debug',
      property: UK().canvasSearchDebug,
      propertyValue: !0,
      isLowPriorityMatch: !0,
      featureFlags: []
    }, {
      action: 'toggle-accessibility-dom-debug',
      property: UK().accessibilityDomDebug,
      flags: ['whiteboard'],
      propertyValue: !0,
      isLowPriorityMatch: !0,
      featureFlags: []
    }, {
      action: 'open-fpl-debug',
      isLowPriorityMatch: !0,
      featureFlags: []
    }, {
      action: 'toggle-plugin-api-debug',
      property: UK().pluginApiDebug,
      propertyValue: !0,
      isLowPriorityMatch: !0,
      featureFlags: []
    }, {
      action: 'toggle-show-quick-command-rank-debug',
      property: UK().showQuickCommandRankDebug,
      propertyValue: !0,
      featureFlags: []
    }, {
      action: 'toggle-show-immutable-frame-sublayers',
      flags: ['design'],
      property: UK().showImmutableFrameSublayers,
      propertyValue: !0,
      featureFlags: []
    }, {
      action: 'toggle-force-publish-flattened',
      property: 'forcePublishFlattened',
      propertyValue: !0,
      featureFlags: []
    }, {
      action: 'toggle-pen-tool-avoid-single-handles',
      property: UK().penToolAvoidSingleHandles,
      propertyValue: !0,
      featureFlags: []
    }, {
      action: 'purge-all-memory',
      isLowPriorityMatch: !0,
      featureFlags: []
    }, {
      action: 'export-for-framer',
      flags: ['design'],
      featureFlags: []
    }, {
      action: 'simulate-back-to-files',
      flags: ['!integration'],
      featureFlags: []
    }, {
      action: 'test-multiplayer-upgrade',
      featureFlags: []
    }, {
      action: 'test-multiplayer-reject-too-old',
      featureFlags: []
    }, {
      action: 'test-multiplayer-reject-invalid-permissions',
      featureFlags: []
    }, {
      action: 'test-multiplayer-reject-not-logged-in',
      featureFlags: []
    }, {
      action: 'test-multiplayer-reject-too-many-connections',
      featureFlags: []
    }, {
      action: 'download-webgl-trace',
      featureFlags: ['webgl_recorder']
    }, {
      action: 'print-render-tree',
      featureFlags: []
    }, {
      action: 'print-image-diagnostics',
      featureFlags: []
    }, {
      action: 'test-action',
      featureFlags: []
    }, {
      action: 'toggle-display-dirty-rects',
      property: UK().toggleDisplayDirtyRects,
      propertyValue: !0,
      featureFlags: []
    }, {
      action: 'toggle-display-dirty-tiles',
      property: UK().toggleDisplayDirtyTiles,
      propertyValue: !0,
      featureFlags: []
    }, {
      action: 'toggle-display-pixel-heat-map',
      property: UK().toggleDisplayPixelHeatMap,
      propertyValue: !0,
      featureFlags: []
    }, {
      action: 'toggle-display-expensive-tiles',
      property: UK().toggleDisplayExpensiveTiles,
      propertyValue: !0,
      featureFlags: []
    }, {
      action: 'toggle-display-gpu-metrics',
      property: UK().toggleDisplayGpuMetrics,
      propertyValue: !0,
      featureFlags: []
    }, {
      action: 'toggle-display-cpu-timer-tree',
      property: UK().toggleDisplayCpuTimerTree,
      propertyValue: !0,
      featureFlags: []
    }, {
      action: 'toggle-perf-mode-medium',
      property: UK().togglePerfModeMedium,
      propertyValue: !0,
      featureFlags: []
    }, {
      name: 'set-missing-font',
      callback: () => fullscreenValue.dispatch(showModalHandler({
        type: ns,
        data: {}
      })),
      featureFlags: []
    }, {
      name: 'detach-multiplayer',
      callback: (e, t, i) => {
        K7();
      },
      featureFlags: []
    }, {
      name: 'reattach-multiplayer',
      callback: (e, t, i) => {
        dh();
      },
      featureFlags: []
    }, {
      name: 'abandon-reattach',
      callback: (e, t, i) => {
        IZ();
      },
      featureFlags: []
    }, {
      action: 'reflow-immutable-frames',
      searchOnly: !0,
      featureFlags: []
    }, {
      action: 'set-selection-hug-horizontal',
      featureFlags: ['ce_tv_fill_hug_suggest'],
      searchOnly: !0
    }, {
      action: 'set-selection-hug-vertical',
      featureFlags: ['ce_tv_fill_hug_suggest'],
      searchOnly: !0
    }, {
      action: 'set-selection-fill-horizontal',
      featureFlags: ['ce_tv_fill_hug_suggest'],
      searchOnly: !0
    }, {
      action: 'set-selection-fill-vertical',
      featureFlags: ['ce_tv_fill_hug_suggest'],
      searchOnly: !0
    }, {
      action: 'swap-nodes',
      searchOnly: !0,
      featureFlags: []
    }, {
      action: 'toggle-overlay-ui-rendering',
      property: _$$d().overlayUiRendering,
      propertyValue: !0,
      isLowPriorityMatch: !0,
      featureFlags: []
    }, {
      action: 'toggle-allow-time-sliced-edit-rendering-optimization',
      property: _$$d().allowTimeSlicedEditRenderingOptimization,
      flags: ['whiteboard'],
      propertyValue: !0,
      isLowPriorityMatch: !0,
      featureFlags: []
    }, {
      action: 'toggle-sync-cursor-rendering',
      property: _$$d().syncCursorRenderingToSceneGraph,
      flags: ['whiteboard'],
      propertyValue: !0,
      isLowPriorityMatch: !0,
      featureFlags: []
    }, {
      name: 'apply-palette-to-selection',
      callback: db,
      flags: ['whiteboard'],
      isLowPriorityMatch: !0,
      featureFlags: []
    }, {
      action: 'similar-includes-matching',
      flags: ['design'],
      property: UK().similarIncludesMatching,
      propertyValue: !0,
      featureFlags: []
    }, {
      action: 'toggle-similar-highlights',
      flags: ['design'],
      property: UK().toggleSimilarHighlights,
      featureFlags: []
    }, {
      name: 'toggle-figment-debugger',
      searchOnly: !0,
      featureFlags: ['figment_debugger'],
      searchSynonyms: ['logs'],
      callback: toggleFigmentDebugger
    }, {
      action: 'debug-toggle-diagram-layout-paused',
      searchOnly: !0,
      featureFlags: []
    }, {
      action: 'enter-staging-mode',
      searchOnly: !0,
      searchSynonyms: ['staged'],
      isLowPriorityMatch: !0,
      featureFlags: ['internal_only_debug_tools']
    }, {
      action: 'commit-staged-changes',
      searchOnly: !0,
      searchSynonyms: ['staged'],
      isLowPriorityMatch: !0,
      featureFlags: ['internal_only_debug_tools']
    }, {
      action: 'rollback-staged-changes',
      searchOnly: !0,
      searchSynonyms: ['staged'],
      isLowPriorityMatch: !0,
      featureFlags: ['internal_only_debug_tools']
    }, {
      action: 'test-independent-layer-animation',
      featureFlags: []
    }, {
      action: 'test-independent-layer-animation-eased',
      featureFlags: ['fullscreen_flanimations']
    }, {
      action: 'test-independent-layer-animation-opacity',
      featureFlags: ['fullscreen_flanimations']
    }, {
      name: 'magic-link-debug-group',
      featureFlags: [],
      children: [{
        action: 'debug-magic-link-ai-model',
        featureFlags: ['prototype_ai_magic_link', 'internal_only_debug_tools'],
        searchOnly: !0
      }]
    }, {
      name: 'typescript-animations',
      featureFlags: [],
      children: [{
        name: 'test-typescript-bezier-animation',
        featureFlags: ['fullscreen_flanimations'],
        callback: () => {
          aZ(_E.forBezier(EasingType.INOUT_CUBIC, 2));
        }
      }, {
        name: 'test-typescript-oscillating-opacity-animation',
        featureFlags: ['fullscreen_flanimations'],
        callback: () => {
          lE(_E.forOpacityOscillation(2, 0.25, 1, 2));
        }
      }, {
        name: 'test-typescript-jiggle-animation',
        featureFlags: ['fullscreen_flanimations'],
        callback: Oo
      }, {
        name: 'test-typescript-spring-animation',
        featureFlags: ['fullscreen_flanimations'],
        callback: () => {
          aZ(_E.forBouncySpring());
        }
      }, {
        name: 'test-typescript-spring-animation-low-bounciness',
        featureFlags: ['fullscreen_flanimations'],
        callback: () => {
          aZ(_E.forSpringBounciness(0.2, 2));
        }
      }, {
        name: 'test-typescript-spring-animation-high-bounciness',
        featureFlags: ['fullscreen_flanimations'],
        callback: () => {
          aZ(_E.forSpringBounciness(0.8, 2));
        }
      }]
    }, {
      name: 'cancel-last-animation',
      featureFlags: ['fullscreen_flanimations'],
      callback: vt
    }, {
      action: 'test-non-independent-layer-animation',
      featureFlags: ['fullscreen_flanimations']
    }, {
      action: 'toggle-noodles-without-dragging',
      property: UK().toggleNoodlesWithoutDragging,
      featureFlags: ['prototype_on_canvas_improvements'],
      searchOnly: !0,
      propertyValue: !0
    }, {
      action: 'start-magic-link',
      featureFlags: ['prototype_ai_magic_link'],
      searchOnly: !0
    }, {
      action: 'end-magic-link',
      featureFlags: ['prototype_ai_magic_link'],
      searchOnly: !0
    }, {
      action: 'add-platform-shape-definition',
      featureFlags: ['shapes_platform_authoring'],
      searchOnly: !0
    }, {
      action: 'remove-platform-shape-definition',
      featureFlags: ['shapes_platform_authoring'],
      searchOnly: !0
    }, {
      action: 'toggle-undo-redo-debug',
      featureFlags: [],
      property: UK().toggleUndoRedoDebugLogging,
      propertyValue: !0
    }, {
      action: 'toggle-collaborative-text-debug',
      featureFlags: [],
      property: UK().toggleCollaborativeTextDebugLogging,
      propertyValue: !0
    }, {
      name: 'auto-suggest-eval',
      featureFlags: ['anticipation_eval'],
      flags: ['design'],
      searchOnly: !0,
      callback: (e, t) => {
        fullscreenValue.dispatch(showModalHandler({
          type: iK,
          data: {},
          showModalsBeneath: !0
        }));
      }
    }, {
      name: 'fire-several-visual-bells',
      featureFlags: [],
      searchOnly: !0,
      callback: () => {
        tR(debugState);
      }
    }, {
      name: 'toggle-visible-canvas-inputs',
      searchOnly: !0,
      callback: () => {
        document.body.getAttribute('data-visible-canvas-inputs') ? document.body.removeAttribute('data-visible-canvas-inputs') : document.body.setAttribute('data-visible-canvas-inputs', 'true');
      }
    }, {
      name: 'throw-frontend-error',
      featureFlags: ['sites'],
      callback: () => {
        throw new Error('Test frontend uncaught error');
      }
    }, ...(nT(additionalDebugItems) || [])]
  }, {
    action: 'select-all-text',
    iconType: createElement(_$$A),
    flags: ['design'],
    searchOnly: !0,
    featureFlags: []
  }, {
    action: 'select-parent',
    iconType: createElement(_$$r4),
    searchOnly: !0,
    featureFlags: []
  }, {
    action: 'select-child',
    iconType: createElement(_$$A),
    searchOnly: !0,
    featureFlags: []
  }, {
    action: 'select-next-sibling',
    flags: ['design'],
    searchOnly: !0,
    featureFlags: []
  }, {
    action: 'select-previous-sibling',
    iconType: createElement(_$$E),
    flags: ['design'],
    searchOnly: !0,
    featureFlags: []
  }, {
    action: 'rename-selection',
    iconType: createElement(tr),
    flags: ['design', 'slides', 'sites', 'cooper'],
    searchOnly: !0,
    featureFlags: []
  }, {
    action: 'set-opacity-1',
    flags: ['design'],
    searchOnly: !0,
    featureFlags: []
  }, {
    action: 'set-opacity-5',
    flags: ['design'],
    searchOnly: !0,
    featureFlags: []
  }, {
    action: 'set-opacity-0',
    flags: ['design'],
    searchOnly: !0,
    featureFlags: []
  }, {
    action: 'unstack-selection',
    flags: ['design'],
    searchOnly: !0,
    featureFlags: []
  }, {
    action: 'create-multiple-symbols',
    iconType: createElement(_$$p3),
    flags: ['design', 'sites'],
    searchOnly: !0,
    featureFlags: []
  }, {
    action: 'create-multiple-symbols-and-state-group',
    iconType: createElement(_$$E4),
    flags: ['design', 'sites'],
    searchOnly: !0,
    featureFlags: []
  }, {
    action: 'create-multiple-symbols',
    iconType: createElement(_$$p3),
    flags: ['slides'],
    searchOnly: !0,
    featureFlags: []
  }, {
    action: 'create-multiple-symbols-and-state-group',
    iconType: createElement(_$$E4),
    flags: ['slides'],
    searchOnly: !0,
    featureFlags: []
  }, {
    action: 'publish-selection',
    iconType: createElement(_$$l3),
    flags: ['design'],
    searchOnly: !0,
    featureFlags: []
  }, {
    action: 'publish-changes-to-library',
    iconType: createElement(_$$l3),
    flags: ['design'],
    searchOnly: !0,
    disabled: publishingModalArgs.isPublishingModalDisabled,
    featureFlags: []
  }, {
    action: 'reset-variable-modes',
    flags: ['design'],
    searchOnly: !0,
    featureFlags: []
  }, {
    action: 'detach-deleted-variables',
    flags: ['design'],
    searchOnly: !0,
    featureFlags: []
  }, {
    action: 'detach-deleted-styles',
    flags: ['design'],
    searchOnly: !0,
    featureFlags: ['ds_detach_deleted_styles_action']
  }, {
    action: 'back-to-files',
    callback: (e, t, i) => {
      i(_$$eH());
    },
    searchOnly: !0,
    flags: ['!desktop', '!integration'],
    featureFlags: []
  }, {
    action: 'present-as-prototype',
    iconType: createElement(_$$H2),
    searchOnly: !0,
    flags: ['design', 'dev_handoff'],
    featureFlags: []
  }, {
    action: 'toggle-inline-preview',
    searchOnly: !0,
    flags: ['design', 'dev_handoff'],
    featureFlags: []
  }, {
    action: 'present-slides-audience-view',
    searchOnly: !0,
    flags: ['slides'],
    featureFlags: []
  }, {
    action: 'present-slides-presenter-view',
    searchOnly: !0,
    flags: ['slides'],
    featureFlags: []
  }, {
    action: 'toggle-animate-info',
    searchOnly: !0,
    flags: ['slides'],
    featureFlags: []
  }, {
    action: 'toggle-grid-focus-view',
    searchOnly: !0,
    flags: ['slides', 'cooper'],
    featureFlags: []
  }, {
    action: 'simplify-selected-instance-panels',
    callback: (e, t, i) => {
      permissionScopeHandler.user('simplify-selected-instance-panels', () => {
        Fullscreen.setSimplifyInstancePanels(!0);
      });
    },
    searchOnly: !0,
    flags: ['edit', 'design'],
    featureFlags: []
  }, {
    name: 'check-network-compatibility',
    callback: (e, t, i) => x9(i),
    searchOnly: !0,
    featureFlags: []
  }, {
    name: 'run-auto-auto-layout',
    featureFlags: ['auto_auto_layout_debug'],
    callback: (e, t) => {
      let i = _$$D5();
      o5(i, {
        recurseOnlySingleLayer: !0
      });
    },
    searchOnly: !0
  }, {
    name: 'run-auto-auto-layout-skip-responsive',
    featureFlags: ['auto_auto_layout_debug'],
    callback: (e, t) => {
      let i = _$$D5();
      o5(i, {
        skipResponsive: !0,
        recurseOnlySingleLayer: !0
      });
    },
    searchOnly: !0
  }, {
    action: 'run-set-responsive-settings',
    featureFlags: ['ce_al_set_responsive_settings'],
    searchOnly: !0
  }, {
    action: 'destroy-all-auto-layout',
    featureFlags: ['auto_auto_layout'],
    searchOnly: !0
  }, {
    name: 'run-auto-auto-layout-with-section-detection',
    featureFlags: ['auto_auto_layout_debug'],
    callback: (e, t) => {
      tJ();
    },
    searchOnly: !0
  }, {
    name: 'run-auto-auto-layout-section-detection',
    featureFlags: ['auto_auto_layout'],
    callback: (e, t) => {
      t0();
    },
    searchOnly: !0
  }, {
    action: 'add-selection-ready-status',
    flags: ['design', 'dev_handoff', 'edit', '!sites'],
    searchOnly: !0,
    featureFlags: []
  }, {
    action: 'debug-toggle-cooper-mode',
    featureFlags: ['cooper'],
    flags: ['design'],
    searchOnly: !0
  }, {
    action: 'open-shapes-sidebar',
    featureFlags: [],
    flags: ['whiteboard'],
    searchOnly: !0
  }, {
    action: 'detect-violations',
    callback: () => {
      _$$u4({
        source: MenuType.ACTIONS_MENU
      });
    },
    featureFlags: ['aip_flower_garden'],
    tags: [_$$$2.BETA],
    flags: ['edit', 'design', '!illustration'],
    iconType: createElement(_$$c2),
    searchSynonyms: ['check', 'check designs', 'detect issues', 'detect violations', 'detect', 'suggested actions', 'suggestions', 'find suggestions', 'linter', 'lint', 'linting'],
    onRender: e => {
      let t = atomStoreManager.get(dd);
      t && OX({
        impressionId: t,
        source: MenuType.ACTIONS_MENU,
        hasSearchTerm: e
      });
    }
  }, ..._$$i2];
}
export const p = $$nN0;
export const P = $$nR1;