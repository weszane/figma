import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { memo, PureComponent, useContext, useCallback, forwardRef, useState, useMemo, useRef, useEffect, useId, createRef } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { debug } from "../figma_app/465776";
import { t as _$$t } from "../905/150656";
import { d as _$$d } from "../905/976845";
import { IconButton } from "../905/443068";
import { J as _$$J } from "../905/125993";
import { A as _$$A } from "../905/891805";
import { A as _$$A2 } from "../905/251970";
import { n3 } from "../905/859698";
import { VisibilityCondition, TypographySettings, FontHelpers, TextAlignmentOptions, LayoutTabType, Fullscreen, VariableResolvedDataType, TextPathStartHelpers, NodePropertyCategory } from "../figma_app/763686";
import { permissionScopeHandler } from "../905/189185";
import { sessionLocalIDToString } from "../905/871411";
import { getFeatureFlags } from "../905/601108";
import { useAtomWithSubscription } from "../figma_app/27355";
import { memoizeByArgs } from "../figma_app/815945";
import { localStorageRef } from "../905/657224";
import { analyticsEventManager, trackEventAnalytics } from "../905/449184";
import { desktopAPIInstance } from "../figma_app/876459";
import { selectWithShallowEqual } from "../905/103090";
import { BrowserInfo } from "../figma_app/778880";
import { generateRecordingKey } from "../figma_app/878298";
import { E as _$$E } from "../905/277716";
import { k as _$$k2 } from "../905/582200";
import { MediaQuerySvgComponent } from "../905/331623";
import { getI18nString, renderI18nText } from "../905/303541";
import { XE, u1, Uv } from "../figma_app/91703";
import { sw } from "../figma_app/914957";
import { h2, AB, Pr } from "../figma_app/8833";
import { TrackedAnchor } from "../figma_app/831799";
import { fullscreenValue } from "../figma_app/455680";
import { Kk } from "../905/777093";
import { m as _$$m, Cy } from "../905/571439";
import { isValidValue, isInvalidValue, MIXED_MARKER, valueOrFallback, AUTO_MARKER, isAutoMarker, toArray, isMixedArray } from "../905/216495";
import { u as _$$u } from "../figma_app/852050";
import { a6 } from "../905/129660";
import { KindEnum } from "../905/129884";
import { pn } from "../905/714538";
import { cn } from "../905/959568";
import { gq, Se, Jl, $j } from "../figma_app/178475";
import { a2 } from "../figma_app/762558";
import { $i } from "../figma_app/467440";
import { _D } from "../905/657318";
import { zM, zK } from "../905/182453";
import { Q as _$$Q } from "../905/346809";
import { fI, JU, Zk, UZ, zi } from "../figma_app/626177";
import { oE } from "../figma_app/305626";
import { yT, bi, dd } from "../figma_app/836943";
import { e as _$$e } from "../905/2401";
import { wJ, Ig, XA } from "../905/805224";
import { bL, c$ } from "../905/867927";
import { q as _$$q } from "../905/932270";
import { ButtonWide, Button } from "../905/521428";
import { A as _$$A3 } from "../905/920165";
import { DialogTitle, DialogBackButton, DialogHiddenTitle, DialogTabStrip, DialogContents, DialogHeader, DialogBody } from "../figma_app/272243";
import { bL as _$$bL } from "../905/911410";
import { ScrollContainer } from "../905/143421";
import { f as _$$f } from "../905/335032";
import { h as _$$h } from "../905/513745";
import { N as _$$N } from "../905/568293";
import { K as _$$K2 } from "../905/459096";
import { h as _$$h2 } from "../905/123399";
import { k as _$$k3 } from "../905/44647";
import { _ as _$$_ } from "../905/38543";
import { D as _$$D } from "../905/829855";
import { L as _$$L } from "../905/954291";
import { U as _$$U } from "../905/169553";
import { r as _$$r } from "../905/11924";
import eN from "classnames";
import { OPTICAL_SIZE_AXIS_TAG } from "../905/165290";
import { Point } from "../905/736624";
import { P as _$$P2 } from "../905/347284";
import { SvgComponent } from "../905/714743";
import { Ku, sT } from "../figma_app/740163";
import { pw, zj, tN as _$$tN, wR, kl } from "../905/275640";
import { useOnSelectionChange } from "../figma_app/722362";
import { yesNoTrackingEnum } from "../figma_app/198712";
import { e as _$$e2 } from "../905/579635";
import { k as _$$k4 } from "../905/336528";
import { $6 } from "../905/213527";
import { lQ } from "../905/934246";
import { Z as _$$Z } from "../905/498136";
import { p as _$$p } from "../905/682418";
import { XL, DJ } from "../figma_app/519250";
import { h$, B9, i4, vK, MK, LM, PK, mw } from "../905/566585";
import { sJ } from "../figma_app/841644";
import { p as _$$p2 } from "../905/427409";
import { d9 } from "../905/579068";
import { mI, o as _$$o, H0, cx, El } from "../905/361629";
import { _X } from "../figma_app/260445";
import { Ao } from "../905/748636";
import { W as _$$W } from "../905/378870";
import { O as _$$O } from "../905/587457";
import { N as _$$N2 } from "../905/430294";
import { ButtonPrimitive } from "../905/632989";
import { O4 } from "../905/777187";
import { defaultGrayColor } from "../figma_app/385874";
import { Rz, ku } from "../905/149223";
import { Pi } from "../figma_app/580959";
import { G as _$$G } from "../905/431526";
import tL from "../vendor/197638";
import { C as _$$C } from "../905/520159";
import { FONT_SF_PRO_DISPLAY } from "../905/946258";
import { trackFileEventWithUser } from "../figma_app/901889";
import { _r } from "../figma_app/451499";
import { Checkbox } from "../905/274480";
import { Label } from "../905/270045";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { A as _$$A4 } from "../6828/523860";
import { A as _$$A5 } from "../6828/85206";
import { bO, Hn } from "../905/435127";
import { A as _$$A6 } from "../5724/388041";
import { fn } from "../figma_app/811257";
import { bo } from "../figma_app/447445";
import { B as _$$B2 } from "../figma_app/846647";
import { u3 } from "../figma_app/152690";
import { MH } from "../figma_app/394327";
import { isSitesFeatureEnabled } from "../905/561485";
import { c as _$$c } from "../figma_app/73139";
import { K0 } from "../figma_app/778125";
import { gb, yp, kx, nf, hf, KY, Kk as _$$Kk, lY, qf } from "../905/71683";
import { ay } from "../figma_app/628987";
import { Z as _$$Z2 } from "../905/278240";
import { zD, nb, wM, JB, zz } from "../905/32188";
import { I as _$$I } from "../905/439783";
import { a as _$$a } from "../905/575557";
import { fB } from "../figma_app/473317";
import { EI, Fc, H as _$$H, bd } from "../905/468313";
import { Qf } from "../figma_app/459377";
import { A as _$$A7 } from "../2854/357693";
var n;
let m = memo(function (e) {
  return jsx("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: jsx("path", {
      fill: "var(--color-icon)",
      d: "M18 12a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1 0-1h11a.5.5 0 0 1 .5.5m-3.701-2.584a.5.5 0 0 1-.913.355l-.046-.09L13.074 9h-2.15l-.264.682a.5.5 0 0 1-.931-.364l.388-1 1.167-3 .033-.068A.5.5 0 0 1 11.75 5h.5l.076.006a.5.5 0 0 1 .39.312l1.167 3 .389 1zm0 5.168-.027.098-.39 1-1.166 3a.5.5 0 0 1-.39.312L12.25 19h-.5a.5.5 0 0 1-.433-.25l-.033-.068-1.167-3-.388-1a.5.5 0 0 1 .931-.364l.265.682h2.15l.265-.682.046-.09a.5.5 0 0 1 .913.356m-2.3-8.348L11.315 8h1.37zM11.315 16l.684 1.764.686-1.764z"
    })
  });
});
let ec = memo(function (e) {
  return jsx("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: jsx("path", {
      fill: "var(--color-icon)",
      d: "M18.319 15.337a.65.65 0 0 1-.476-.2.65.65 0 0 1-.199-.475.65.65 0 0 1 .2-.476.65.65 0 0 1 .475-.199.65.65 0 0 1 .476.2.65.65 0 0 1 .199.475q0 .18-.093.337a.7.7 0 0 1-.245.245.63.63 0 0 1-.337.093m-2.693 0a.65.65 0 0 1-.476-.2.65.65 0 0 1-.199-.475.65.65 0 0 1 .2-.476.65.65 0 0 1 .475-.199.65.65 0 0 1 .476.2.65.65 0 0 1 .199.475q0 .18-.092.337a.7.7 0 0 1-.245.245.63.63 0 0 1-.338.093m-2.693 0a.65.65 0 0 1-.476-.2.65.65 0 0 1-.199-.475.65.65 0 0 1 .2-.476.65.65 0 0 1 .475-.199.65.65 0 0 1 .476.2.65.65 0 0 1 .199.475q0 .18-.093.337a.7.7 0 0 1-.245.245.63.63 0 0 1-.337.093m-6.769-.391a.489.489 0 1 1-.92-.329l2.22-6.107a.776.776 0 0 1 1.459 0l2.218 6.107a.489.489 0 1 1-.92.328L8.23 9.263a.04.04 0 0 0-.075 0zm.151-2.092c0-.235.191-.426.426-.426H9.64a.426.426 0 1 1 0 .852H6.741a.426.426 0 0 1-.426-.426"
    })
  });
});
let ef = memo(function (e) {
  return jsx("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: jsx("path", {
      fill: "var(--color-icon)",
      fillRule: "evenodd",
      d: "M5.5 7.5A.5.5 0 0 1 6 7h12a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5m0 10A.5.5 0 0 1 6 17h12a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5m2.633-3.078a.49.49 0 0 0 .468-.338l.292-.88h1.885l.291.88a.493.493 0 1 0 .935-.318l-1.344-3.85a.872.872 0 0 0-1.647 0l-1.346 3.85a.493.493 0 0 0 .466.656m2.386-1.998-.656-1.982a.028.028 0 0 0-.053 0l-.657 1.982zm3.088 3.375q.355.135.852.135.528 0 .94-.162t.646-.485q.237-.322.236-.813V11.08a.476.476 0 0 0-.476-.476h-.157a.32.32 0 0 0-.319.318v.29a.03.03 0 0 1-.029.028.03.03 0 0 1-.026-.016 1.4 1.4 0 0 0-.19-.29 1.1 1.1 0 0 0-.349-.268 1.2 1.2 0 0 0-.547-.112q-.432 0-.788.222a1.54 1.54 0 0 0-.566.656q-.21.435-.21 1.071 0 .627.21 1.042.208.412.564.619.355.204.79.204.318 0 .535-.095.219-.097.353-.241.129-.137.198-.275a.027.027 0 0 1 .052.012v.686q0 .41-.24.586a1 1 0 0 1-.607.18q-.256 0-.427-.07a.75.75 0 0 1-.271-.174c-.11-.112-.261-.198-.415-.168l-.114.022c-.27.053-.443.335-.266.547q.025.03.051.058.215.23.57.363m1.332-2.306a.8.8 0 0 1-.465.134.8.8 0 0 1-.477-.14.9.9 0 0 1-.29-.392 1.6 1.6 0 0 1-.1-.597q0-.338.097-.599a.9.9 0 0 1 .29-.412.76.76 0 0 1 .48-.152q.276 0 .467.144a.9.9 0 0 1 .291.408q.1.261.1.611 0 .354-.102.607a.84.84 0 0 1-.291.388",
      clipRule: "evenodd"
    })
  });
});
let e_ = memo(function (e) {
  return jsx("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: jsx("path", {
      fill: "var(--color-icon)",
      fillRule: "evenodd",
      d: "M6 8a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1zm0 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm10 .5a.5.5 0 0 1 .5-.5H18a.5.5 0 0 1 0 1h-1.5a.5.5 0 0 1-.5-.5m-7.867-2.078a.49.49 0 0 0 .468-.338l.292-.88h1.885l.291.88a.493.493 0 1 0 .935-.318l-1.344-3.85a.872.872 0 0 0-1.647 0l-1.346 3.85a.493.493 0 0 0 .466.656m2.386-1.998-.656-1.982a.028.028 0 0 0-.053 0l-.657 1.982zm3.088 3.375q.355.135.852.135.528 0 .94-.162t.646-.485q.237-.322.236-.813V11.08a.476.476 0 0 0-.476-.476h-.157a.32.32 0 0 0-.319.318v.29a.03.03 0 0 1-.029.028.03.03 0 0 1-.026-.016 1.4 1.4 0 0 0-.19-.29 1.1 1.1 0 0 0-.349-.268 1.2 1.2 0 0 0-.547-.112q-.432 0-.788.222a1.54 1.54 0 0 0-.566.656q-.21.435-.21 1.071 0 .627.21 1.042.208.412.564.619.355.204.79.204.318 0 .535-.095.219-.097.353-.241.129-.137.198-.275a.027.027 0 0 1 .052.012v.686q0 .41-.24.586a1 1 0 0 1-.607.18q-.256 0-.427-.07a.75.75 0 0 1-.271-.174c-.11-.112-.261-.198-.415-.168l-.114.022c-.27.053-.443.335-.266.547q.025.03.051.058.215.23.57.363m1.332-2.306a.8.8 0 0 1-.465.134.8.8 0 0 1-.477-.14.9.9 0 0 1-.29-.392 1.6 1.6 0 0 1-.1-.597q0-.338.097-.599a.9.9 0 0 1 .29-.412.76.76 0 0 1 .48-.152q.276 0 .467.144a.9.9 0 0 1 .291.408q.1.261.1.611 0 .354-.102.607a.84.84 0 0 1-.291.388",
      clipRule: "evenodd"
    })
  });
});
let eb = memo(function (e) {
  return jsx("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: jsx("path", {
      fill: "var(--color-icon)",
      fillRule: "evenodd",
      d: "M15.5 8c-1.7 0-3 1.501-3 3.25v1.5c0 1.749 1.3 3.25 3 3.25s3-1.501 3-3.25V12a.5.5 0 0 0-.5-.5h-2a.5.5 0 1 0 0 1h1.5v.25c0 1.289-.94 2.25-2 2.25s-2-.961-2-2.25v-1.5c0-1.289.94-2.25 2-2.25.655 0 1.252.357 1.624.938a.5.5 0 0 0 .843-.54C17.434 8.568 16.537 8 15.5 8m-9.754 8c.222 0 .42-.14.494-.35l.624-1.781h3.093l.624 1.781a.523.523 0 1 0 .985-.35L9.192 8.764a.83.83 0 0 0-1.56 0l-2.377 6.534a.523.523 0 0 0 .491.702m3.892-3.043L8.453 9.57a.043.043 0 0 0-.081 0l-1.188 3.387z",
      clipRule: "evenodd"
    })
  });
});
let ex = memo(function (e) {
  return jsx("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: jsx("path", {
      fill: "var(--color-icon)",
      d: "M7.51 15.65a.523.523 0 1 1-.985-.352l2.377-6.534a.83.83 0 0 1 1.56 0l2.374 6.534a.523.523 0 1 1-.985.351L9.722 9.57a.043.043 0 0 0-.08 0zm.162-2.238c0-.252.204-.456.456-.456h3.1a.456.456 0 0 1 0 .912h-3.1a.456.456 0 0 1-.456-.456m6.652 3.925a.436.436 0 0 1-.287-.765l1.64-1.431q.259-.228.433-.407.175-.178.266-.345a.76.76 0 0 0 .091-.365.61.61 0 0 0-.258-.52q-.255-.195-.63-.195-.4 0-.643.21a.7.7 0 0 0-.133.151c-.127.197-.3.403-.534.403s-.432-.194-.367-.418q.11-.378.434-.642.494-.402 1.257-.403.513 0 .897.183.387.181.604.501.217.316.217.714 0 .316-.13.586-.125.27-.395.555a9 9 0 0 1-.695.634l-.927.798a.023.023 0 0 0 .016.042h1.895a.357.357 0 0 1 0 .714z"
    })
  });
});
let eS = memo(function (e) {
  return jsx("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: jsx("path", {
      fill: "var(--color-icon)",
      d: "M6.51 15.65a.523.523 0 1 1-.985-.352l2.377-6.534a.83.83 0 0 1 1.56 0l2.374 6.534a.523.523 0 1 1-.985.351L8.722 9.57a.043.043 0 0 0-.08 0zm.162-2.238c0-.252.204-.456.456-.456h3.1a.456.456 0 1 1 0 .912h-3.1a.456.456 0 0 1-.456-.456M13.692 16a.55.55 0 0 1-.401-.927l2.454-2.611q.436-.471.718-.82.285-.35.425-.666.14-.315.14-.665 0-.399-.189-.687a1.26 1.26 0 0 0-.517-.453 1.65 1.65 0 0 0-.733-.16q-.434 0-.756.18-.32.178-.494.497-.066.12-.107.256c-.08.266-.293.497-.571.497-.279 0-.51-.228-.458-.501q.074-.393.273-.72.32-.524.878-.816a2.7 2.7 0 0 1 1.262-.293q.71 0 1.253.293.544.288.852.783.307.494.307 1.105 0 .434-.16.848-.154.41-.543.915-.387.502-1.079 1.22l-1.633 1.732a.044.044 0 0 0 .032.073h3.053a.46.46 0 0 1 0 .92z"
    })
  });
});
let ew = memo(function (e) {
  return jsx("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: jsx("path", {
      fill: "var(--color-icon)",
      d: "M7.51 15.65a.523.523 0 1 1-.985-.352l2.377-6.534a.83.83 0 0 1 1.56 0l2.374 6.534a.523.523 0 1 1-.985.351L9.722 9.57a.043.043 0 0 0-.08 0zm.162-2.238c0-.252.204-.456.456-.456h3.1a.456.456 0 0 1 0 .912h-3.1a.456.456 0 0 1-.456-.456m6.652-1.303a.436.436 0 0 1-.287-.765l1.64-1.432q.259-.228.433-.406.175-.179.266-.346a.76.76 0 0 0 .091-.365.61.61 0 0 0-.258-.52q-.255-.195-.63-.194-.4 0-.643.209a.7.7 0 0 0-.133.152c-.127.196-.3.403-.534.403s-.432-.194-.367-.419q.11-.378.434-.641.494-.403 1.257-.403.513 0 .897.182.387.183.604.502.217.315.217.714 0 .315-.13.585-.125.27-.395.555a9 9 0 0 1-.695.635l-.927.798a.023.023 0 0 0 .016.041h1.895a.357.357 0 1 1 0 .715z"
    })
  });
});
let eC = memo(function (e) {
  return jsx("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: jsx("path", {
      fill: "var(--color-icon)",
      d: "M12.698 17.129a.493.493 0 1 0 .88.444l3.208-6.385a.777.777 0 0 0-.694-1.126h-3.828a.46.46 0 0 0 0 .92h3.462a.05.05 0 0 1 .043.071zm-3.384-7.066c.444 0 .804.36.804.803v4.448a.53.53 0 1 1-1.06 0v-4.133a.035.035 0 0 0-.055-.03l-1.198.79a.435.435 0 0 1-.478-.727l1.544-1.019a.8.8 0 0 1 .443-.133"
    })
  });
});
let eT = memo(function (e) {
  return jsx("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: jsx("path", {
      fill: "var(--color-icon)",
      d: "M9.14 8.218c.444 0 .804.36.804.804v6.448a.53.53 0 1 1-1.06 0V9.336a.035.035 0 0 0-.055-.03l-1.198.79a.435.435 0 0 1-.479-.727l1.545-1.018a.8.8 0 0 1 .443-.133M13.313 16a.493.493 0 0 1-.44-.716l3.071-6.075a.05.05 0 0 0-.044-.071h-3.46a.46.46 0 0 1 0-.92h3.828a.777.777 0 0 1 .694 1.126l-3.208 6.384a.49.49 0 0 1-.44.272"
    })
  });
});
let ek = memo(function (e) {
  return jsx("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: jsx("path", {
      fill: "var(--color-icon)",
      fillRule: "evenodd",
      d: "M9.358 8.866a.804.804 0 0 0-1.247-.67L6.567 9.213a.435.435 0 0 0 .478.726l1.198-.789a.035.035 0 0 1 .055.03v5.663H7.027a.5.5 0 0 0 0 1h3.5a.5.5 0 0 0 0-1h-1.17zm4.08 6.263a.493.493 0 1 0 .88.444l3.208-6.385a.777.777 0 0 0-.694-1.126h-3.828a.46.46 0 0 0 0 .92h3.462a.05.05 0 0 1 .043.071z",
      clipRule: "evenodd"
    })
  });
});
let eR = memo(function (e) {
  return jsx("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: jsx("path", {
      fill: "var(--color-icon)",
      d: "M10.118 10.866a.804.804 0 0 0-1.247-.67l-1.544 1.018a.435.435 0 0 0 .478.726l1.198-.789a.035.035 0 0 1 .054.03v3.663h-1.27a.5.5 0 0 0 0 1h3.5a.5.5 0 0 0 0-1h-1.17zm2.58 6.263a.493.493 0 1 0 .88.444l3.208-6.385a.777.777 0 0 0-.694-1.126h-3.828a.46.46 0 0 0 0 .92h3.462a.05.05 0 0 1 .043.071z"
    })
  });
});
var eP = eN;
class eY extends PureComponent {
  constructor() {
    super(...arguments);
    this.onListStyleChange = e => {
      "PLAIN" === e ? fullscreenValue.triggerActionInUserEditScope("text-clear-list-formatting", {
        source: this.props.eventSource
      }) : "UNORDERED_LIST" === e && "UNORDERED_LIST" !== this.props.textLineType ? fullscreenValue.triggerActionInUserEditScope("text-toggle-unordered-list", {
        source: this.props.eventSource
      }) : "ORDERED_LIST" === e && "ORDERED_LIST" !== this.props.textLineType && fullscreenValue.triggerActionInUserEditScope("text-toggle-ordered-list", {
        source: this.props.eventSource
      });
    };
  }
  render() {
    return jsx("span", {
      className: this.props.className,
      children: jsxs(bL, {
        value: isValidValue(this.props.textLineType) ? this.props.textLineType : void 0,
        onChange: this.onListStyleChange,
        readonly: this.props.disabled,
        legend: jsx(_$$q, {
          children: getI18nString("type_settings.list_style")
        }),
        recordingKey: this.props.recordingKey,
        children: [jsx(c$, {
          icon: jsx(_$$f, {}),
          value: "PLAIN",
          "aria-label": getI18nString("fullscreen.type_panel.no_list"),
          "data-tooltip-show-above": !0,
          onMouseEnter: () => this.props.mouseHoverHandler("PLAIN", "ENTER"),
          onMouseLeave: () => this.props.mouseHoverHandler("PLAIN", "LEAVE")
        }), jsx(c$, {
          icon: jsx(_$$Z, {}),
          value: "UNORDERED_LIST",
          "aria-label": getI18nString("fullscreen.type_panel.bulleted_list"),
          "data-tooltip-show-above": !0,
          onMouseEnter: () => this.props.mouseHoverHandler("UNORDERED_LIST", "ENTER"),
          onMouseLeave: () => this.props.mouseHoverHandler("UNORDERED_LIST", "LEAVE")
        }), jsx(c$, {
          icon: jsx(_$$p, {}),
          value: "ORDERED_LIST",
          "aria-label": getI18nString("fullscreen.type_panel.numbered_list"),
          "data-tooltip-show-above": !0,
          onMouseEnter: () => this.props.mouseHoverHandler("ORDERED_LIST", "ENTER"),
          onMouseLeave: () => this.props.mouseHoverHandler("ORDERED_LIST", "LEAVE")
        })]
      })
    });
  }
}
eY.defaultProps = {
  mouseHoverHandler: lQ
};
function eJ({
  inputClassName: e,
  activeInputClassName: t,
  currentFieldValue: i,
  inputRef: n,
  rowElementRef: s,
  recordingKey: o,
  children: l
}) {
  let d = useContext(_$$p2);
  let c = d?.isShowingBindingUI ?? !1;
  let u = useCallback(() => {
    s.current && d?.showBindingUI(s.current, {
      currentFieldValue: i,
      initialPosition: cn(s.current, d9)
    });
  }, [d, i, s]);
  return jsx(sJ, {
    inputClassName: eP()({
      [e]: !!e,
      [t]: c && !!t
    }),
    currentFieldValue: i,
    isActive: d?.isShowingBindingUI ?? !1,
    recordingKey: o,
    hasBindingContextMenu: !0,
    inputRef: n,
    onPickerOpen: u,
    children: l
  });
}
let e3 = memo(function (e) {
  return _$$O() ? jsx("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: jsx("path", {
      fill: "var(--color-icon)",
      fillRule: "evenodd",
      d: "M9 7.5a.5.5 0 0 0-1 0V12a4 4 0 0 0 8 0V7.5a.5.5 0 0 0-1 0V12a3 3 0 1 1-6 0zm-1.5 11a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m2 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m1.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m2.5-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m1.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m2.5-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0",
      clipRule: "evenodd"
    })
  }) : jsx("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: jsx("path", {
      fill: "var(--color-icon)",
      fillRule: "evenodd",
      d: "M9 7.5a.5.5 0 0 0-1 0V12a4 4 0 0 0 8 0V7.5a.5.5 0 0 0-1 0V12a3 3 0 1 1-6 0zM7.5 19a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m2 0a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m2.5-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m1.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m2.5-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0",
      clipRule: "evenodd"
    })
  });
});
let e6 = memo(function (e) {
  return jsx("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: jsx("path", {
      fill: "var(--color-icon)",
      fillRule: "evenodd",
      d: "M9 7.5a.5.5 0 0 0-1 0V12a4 4 0 0 0 8 0V7.5a.5.5 0 0 0-1 0V12a3 3 0 1 1-6 0zm7.699 11.009c.143-.14.301-.295.301-.488v-.107c0-.276-.23-.508-.49-.418a1.5 1.5 0 0 0-.57.357l-.586.586a.5.5 0 0 1-.708 0l-.585-.586a1.5 1.5 0 0 0-2.122 0l-.585.586a.5.5 0 0 1-.708 0l-.585-.586a1.5 1.5 0 0 0-2.122 0l-.585.586-.053.051c-.143.14-.301.295-.301.488v.107c0 .276.23.508.49.418.209-.072.404-.19.57-.357l.586-.586a.5.5 0 0 1 .708 0l.585.586a1.5 1.5 0 0 0 2.122 0l.585-.586a.5.5 0 0 1 .708 0l.585.586a1.5 1.5 0 0 0 2.122 0l.585-.586z",
      clipRule: "evenodd"
    })
  });
});
let e7 = memo(function (e) {
  return jsx("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: jsx("path", {
      fill: "var(--color-icon)",
      fillRule: "evenodd",
      d: "M6.746 15.082c.222 0 .42-.14.494-.35l.624-1.782h3.093l.624 1.782a.523.523 0 1 0 .985-.352l-2.374-6.534a.83.83 0 0 0-1.56 0L6.255 14.38a.523.523 0 0 0 .491.702m3.892-3.044L9.453 8.651a.043.043 0 0 0-.081 0l-1.188 3.387zm3.87 5.18q.483.174 1.156.174.721 0 1.307-.228.18-.07.337-.164h.192a.5.5 0 0 0 .474-.659q.27-.447.27-1.111V9.74a.496.496 0 0 0-.496-.496h-.029a.467.467 0 0 0-.467.468v.413a.054.054 0 0 1-.1.029 5 5 0 0 0-.273-.378q-.181-.24-.516-.422-.334-.186-.893-.186-.722 0-1.28.361-.559.36-.875 1.03-.315.665-.315 1.577 0 .92.323 1.558.323.637.878.969.558.327 1.257.326.552 0 .886-.17.338-.175.524-.403.174-.216.271-.383a.048.048 0 0 1 .09.024v1.119q0 .51-.23.823h-2.685a.57.57 0 0 0-.64-.091.5.5 0 0 0-.122.09H6.5a.5.5 0 0 0 0 1h7.537q.211.126.471.218m2.007-3.337q-.354.236-.87.236-.536 0-.897-.251a1.6 1.6 0 0 1-.543-.703 2.8 2.8 0 0 1-.183-1.041q0-.578.179-1.045.182-.468.543-.745.36-.277.9-.277.522 0 .878.266.357.261.54.725.182.464.182 1.076 0 .623-.186 1.071a1.5 1.5 0 0 1-.543.688",
      clipRule: "evenodd"
    })
  });
});
let e8 = memo(function (e) {
  return jsx("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: jsx("path", {
      fill: "var(--color-icon)",
      fillRule: "evenodd",
      d: "M6.746 15.082c.222 0 .42-.14.494-.35l.624-1.782h3.093l.624 1.782a.523.523 0 1 0 .985-.352l-2.374-6.534a.83.83 0 0 0-1.56 0L6.255 14.38a.523.523 0 0 0 .491.702m3.892-3.044L9.453 8.651a.043.043 0 0 0-.081 0l-1.188 3.387zm3.87 5.18q.483.174 1.156.174.721 0 1.307-.228.585-.228.927-.707.346-.476.346-1.227V9.74a.496.496 0 0 0-.496-.496h-.029a.467.467 0 0 0-.467.468v.413a.054.054 0 0 1-.1.029 5 5 0 0 0-.273-.378q-.181-.24-.516-.422-.334-.186-.893-.186-.722 0-1.28.361-.559.36-.875 1.03-.315.665-.315 1.577 0 .92.323 1.558.323.637.878.969.558.327 1.257.326.552 0 .886-.17.338-.175.524-.403.174-.216.271-.383a.048.048 0 0 1 .09.024v1.119q0 .706-.44 1.033-.442.33-1.118.33-.497 0-.81-.144a1.6 1.6 0 0 1-.493-.342l-.006-.006a.57.57 0 0 0-.689-.14c-.245.133-.343.44-.16.65q.09.104.197.203.316.285.798.456m2.007-3.337q-.354.236-.87.236-.536 0-.897-.251a1.6 1.6 0 0 1-.543-.703 2.8 2.8 0 0 1-.183-1.041q0-.578.179-1.045.182-.468.543-.745.36-.277.9-.277.522 0 .878.266.357.261.54.725.182.464.182 1.076 0 .623-.186 1.071a1.5 1.5 0 0 1-.543.688M6.5 16a.5.5 0 0 0 0 1h5a.5.5 0 1 0 0-1z",
      clipRule: "evenodd"
    })
  });
});
let e9 = "type_settings--variationAxisSlider--nyKQi";
let te = "type_settings--panelWithTopPadding--9QvJ-";
let tt = "type_settings--typeDetailsFeatureLabel---06lO type_settings--_centered--QZTO4";
let ti = "type_settings--typeDetailsFeatureLabelLong--5Jdkb";
let tn = "type_settings--openTypeFeatureLabel--iCh2c type_settings--_centered--QZTO4 ellipsis--ellipsisAfter2Lines--Qo-Xh ellipsis--_ellipsisAfterNLines--LzI7k";
let tr = "type_settings--typeDetailsControlTwoSegments--jCism";
let ta = "type_settings--typeDetailsControlThreeSegments--RDI7z";
let ts = "type_settings--typeDetailsControlFourSegments--ofV2k";
let to = "type_settings--typeDetailsControlFiveSegments--bp-T7";
let tl = "type_settings--spacer--RYoph";
let td = "type_settings--numericTypeSettingsInputContainer--kr-2D";
let tc = "type_settings--numericTypeSettingsInput--uPSiJ";
let tu = "type_settings--inputControl--ZYh2s";
let tp = "type_settings--inputControlWithActivePicker--bl0G6";
let tm = "type_settings--lineHeightUpdateRow--CVgee";
let th = "type_settings--lineHeightUpdateInfo--0sHJc";
let tg = "type_settings--lineHeightUpdateIcon--qysTc";
let tf = "type_settings--lineHeightUpgradeButtonFpl--2VNtF";
let t_ = e => {
  analyticsEventManager.trackDefinedEvent("text_and_vector.text_decoration_style_change", {
    style: e
  });
  trackEventAnalytics("ce_text_decoration_style_change", {
    style: e
  });
  fullscreenValue.updateSelectionProperties({
    textDecorationStyle: e
  });
};
function tA(e) {
  return jsx(Fragment, {
    children: jsx("div", {
      className: ta,
      children: jsxs(bL, {
        value: isValidValue(e.textDecorationStyle) && !e.disabled ? e.textDecorationStyle : void 0,
        onChange: t_,
        readonly: e.disabled,
        legend: jsx(_$$q, {
          children: renderI18nText("type_settings.decoration.decoration_style")
        }),
        recordingKey: generateRecordingKey(e, "textDecorationStyle"),
        children: [jsx(c$, {
          icon: jsx(_$$W, {}),
          value: "SOLID",
          "aria-label": getI18nString("type_settings.decoration.decoration_style.solid"),
          htmlAttributes: {
            "data-tooltip-show-above": !0,
            onMouseEnter: () => e.decorationHoverHandler("SOLID", "ENTER"),
            onMouseLeave: () => e.decorationHoverHandler("SOLID", "LEAVE")
          }
        }), jsx(c$, {
          icon: jsx(e3, {}),
          value: "DOTTED",
          "aria-label": getI18nString("type_settings.decoration.decoration_style.dotted"),
          htmlAttributes: {
            "data-tooltip-show-above": !0,
            onMouseEnter: () => e.decorationHoverHandler("DOTTED", "ENTER"),
            onMouseLeave: () => e.decorationHoverHandler("DOTTED", "LEAVE")
          }
        }), jsx(c$, {
          icon: jsx(e6, {}),
          value: "WAVY",
          "aria-label": getI18nString("type_settings.decoration.decoration_style.wavy"),
          htmlAttributes: {
            "data-tooltip-show-above": !0,
            onMouseEnter: () => e.decorationHoverHandler("WAVY", "ENTER"),
            onMouseLeave: () => e.decorationHoverHandler("WAVY", "LEAVE")
          }
        })]
      })
    })
  });
}
let ty = e => {
  let t = "TRUE" === e;
  analyticsEventManager.trackDefinedEvent("text_and_vector.text_decoration_skip_ink_toggled", {
    skipInk: t
  });
  fullscreenValue.updateSelectionProperties({
    textDecorationSkipInk: t
  }, {
    shouldCommit: yesNoTrackingEnum.YES
  });
};
function tb(e) {
  return jsx("div", {
    className: "type_settings--typeDetailsControlTwoSegmentsWide--8hIoN",
    children: jsxs(bL, {
      onChange: e => {
        ty(e);
      },
      value: isValidValue(e.skipInk) && !e.disabled ? e.skipInk ? "TRUE" : "FALSE" : void 0,
      legend: jsx(_$$q, {
        children: getI18nString("type_settings.decoration.skip_ink")
      }),
      readonly: e.disabled,
      recordingKey: generateRecordingKey(e, "textDecorationSkipInk"),
      children: [jsx(c$, {
        value: "FALSE",
        "aria-label": getI18nString("type_settings.decoration.skip_ink_off"),
        icon: jsx(e7, {}),
        htmlAttributes: {
          "data-tooltip-show-above": !0,
          onMouseEnter: () => e.decorationHoverHandler(!1, "ENTER"),
          onMouseLeave: () => e.decorationHoverHandler(!1, "LEAVE")
        }
      }), jsx(c$, {
        value: "TRUE",
        "aria-label": getI18nString("type_settings.decoration.skip_ink_on"),
        icon: jsx(e8, {}),
        htmlAttributes: {
          "data-tooltip-show-above": !0,
          onMouseEnter: () => e.decorationHoverHandler(!0, "ENTER"),
          onMouseLeave: () => e.decorationHoverHandler(!0, "LEAVE")
        }
      })]
    })
  });
}
let tI = e => {
  fullscreenValue.updateSelectionProperties({
    textDecoration: e
  });
  "UNDERLINE" !== e && fullscreenValue.updateSelectionProperties({
    textDecorationSkipInk: !1
  });
  "NONE" !== e && h$(e);
};
let tE = function (e) {
  return jsx("span", {
    className: e.drillInChevronShowing ? "type_settings--textDecorationsWithDrillIn--k6Np4" : ta,
    children: jsxs(bL, {
      value: isValidValue(e.textDecoration) ? e.textDecoration : void 0,
      onChange: tI,
      readonly: e.disabled,
      legend: jsx(_$$q, {
        children: renderI18nText("type_settings.decoration")
      }),
      recordingKey: generateRecordingKey(e, "textDecoration"),
      children: [jsx(c$, {
        icon: jsx(_$$f, {}),
        value: "NONE",
        "aria-label": getI18nString("type_settings.decoration.none"),
        htmlAttributes: {
          "data-tooltip-show-above": !0,
          onMouseEnter: () => e.decorationHoverHandler("NONE", "ENTER"),
          onMouseLeave: () => e.decorationHoverHandler("NONE", "LEAVE")
        }
      }), jsx(c$, {
        icon: jsx(_$$W, {}),
        value: "UNDERLINE",
        "aria-label": getI18nString("type_settings.decoration.underline"),
        htmlAttributes: {
          "data-tooltip-show-above": !0,
          onMouseEnter: () => e.decorationHoverHandler("UNDERLINE", "ENTER"),
          onMouseLeave: () => e.decorationHoverHandler("UNDERLINE", "LEAVE"),
          onDoubleClick: () => e.onUnderlineDoubleClick?.()
        }
      }), jsx(c$, {
        icon: jsx(_$$N2, {}),
        value: "STRIKETHROUGH",
        "aria-label": getI18nString("type_settings.decoration.strikethrough"),
        htmlAttributes: {
          "data-tooltip-show-above": !0,
          onMouseEnter: () => e.decorationHoverHandler("STRIKETHROUGH", "ENTER"),
          onMouseLeave: () => e.decorationHoverHandler("STRIKETHROUGH", "LEAVE")
        }
      })]
    })
  });
};
let tS = forwardRef(function ({
  children: e,
  ...t
}, i) {
  return jsx(ButtonPrimitive, {
    ref: i,
    ...t,
    className: eP()("text_decoration_drill_in_button--drillInButton--1QZaZ text_decoration_drill_in_button--iconButton--gimF7 text_decoration_drill_in_button--baseIconButton--t1Akg", "text_decoration_drill_in_button--ghost--GFegu"),
    children: jsx("span", {
      "aria-hidden": !0,
      className: eP()("text_decoration_drill_in_button--icon--kPh32", "text_decoration_drill_in_button--drillInIcon--zLKxT"),
      children: e
    })
  });
});
class tC {
  constructor(e) {
    this.defaultValue = e;
    this.defaultValue = e;
  }
  parse(e, t) {
    if ("" === (e = e.trim().toLowerCase()) || null == t || "%" === e || "px" === e || "auto%".startsWith(e)) return this.defaultValue;
    let i = -1 !== e.indexOf("%") ? "PERCENT" : -1 !== e.indexOf("px") ? "PIXELS" : void 0;
    e = e.replace(RegExp("%|px", "g"), "");
    let n = O4(e, NaN);
    if (n.error) return t;
    let r = n.value;
    void 0 === i && (i = "RAW" === t.units ? "PERCENT" : "PIXELS");
    return {
      value: r,
      units: i
    };
  }
  incrementBy(e, t) {
    ("RAW" === e.units || isInvalidValue(e.value)) && (e = this.defaultValue);
    t /= "PERCENT" === e.units || "RAW" === e.units ? 2 : 10;
    return {
      value: e.value + t,
      units: e.units
    };
  }
  defaultSelection(e) {
    let t = /[0-9\.]+/.exec(e);
    return null != t ? {
      start: t.index,
      end: t.index + t[0].length
    } : {
      start: 0,
      end: e.length
    };
  }
  format(e) {
    if (isInvalidValue(e)) return "Mixed";
    if (!e || isNaN(e.value)) return "";
    if ("RAW" === e.units) return "Auto";
    let t = parseFloat(e.value.toFixed(2));
    return "PERCENT" === e.units ? `${t}%` : `${t}px`;
  }
}
let tN = memo(function (e) {
  let [t, i] = useState(!1);
  let [n, s] = useState({
    id: "",
    initialX: 0,
    initialY: 0
  });
  let [o, l] = useState(!1);
  let d = useMemo(() => ({
    color: {
      r: 0,
      g: 0,
      b: 0,
      a: 0
    },
    opacity: e.isEditingStyle ? 1 : 0,
    type: "SOLID"
  }), [e.isEditingStyle]);
  let c = useMemo(() => isInvalidValue(e.textDecorationFillPaints) ? MIXED_MARKER : valueOrFallback(e.textDecorationFillPaints, []), [e.textDecorationFillPaints]);
  let u = useMemo(() => isInvalidValue(e.fillPaints) ? MIXED_MARKER : valueOrFallback(e.fillPaints, []), [e.fillPaints]);
  let p = selectWithShallowEqual(e => e.mirror.selectionPaints.paintsDirectlyOnSingleNode);
  let m = !isInvalidValue(c) && c.length <= 0;
  let h = useMemo(() => m ? isInvalidValue(u) ? {
    ...u,
    color: MIXED_MARKER,
    type: "SOLID",
    visible: !0
  } : u.length > 0 && u[0]?.colorVar ? u[0] : {
    ...u,
    color: AUTO_MARKER,
    type: "SOLID",
    visible: !0
  } : isInvalidValue(c) || 0 === c.length ? {
    ...c,
    color: MIXED_MARKER,
    type: "SOLID",
    visible: !0
  } : c[0], [m, u, c]);
  let g = useMemo(() => m || isInvalidValue(c) || !c.length ? !isInvalidValue(u) && u.length ? u[0] : p.length > 0 ? p[0].paint : d : c[0], [m, c, u, p, d]);
  let _ = (e, t, i) => {
    if (analyticsEventManager.trackDefinedEvent("text_and_vector.text_decoration_fill_set", {
      wasAuto: m,
      toAuto: isAutoMarker(e.color)
    }), isAutoMarker(e.color)) {
      fullscreenValue.updateSelectionProperties({
        textDecorationFillPaints: []
      }, {
        shouldCommit: t,
        overwrite: i ?? VisibilityCondition.ALWAYS
      });
      return;
    }
    fullscreenValue.updateSelectionProperties({
      textDecorationFillPaints: [e]
    }, {
      shouldCommit: t,
      overwrite: i ?? VisibilityCondition.ONLY_WHEN_NOT_EMPTY
    });
    l(!1);
  };
  let A = useRef(null);
  let y = () => {
    if (!A) return;
    let t = e.isEditingStyle ? h2 : AB;
    i(e.pickerShown?.id === t);
    let n = cn(A.current);
    s({
      id: Pr,
      initialX: n.x,
      initialY: n.y
    });
  };
  let b = () => {
    i(!1);
  };
  return jsxs("div", {
    children: [jsx(Pi, {
      ref: A,
      allowAutoAndMixed: !0,
      chitOverride: {
        paint: g
      },
      disableOpacity: !!m,
      firstIconButton: null,
      fitToSize: !0,
      hasFocus: !1,
      id: Pr,
      isDragHover: !1,
      isDragging: !1,
      noBorderOnFocus: !0,
      onChange: _,
      onInputBlur: () => {
        l(!1);
      },
      onInputFocus: () => {
        l(!0);
      },
      paint: o ? g : h,
      recordingKey: e.recordingKey,
      secondIconButton: null,
      shownPickerMatchesThisPaint: t,
      singletonRow: !0,
      togglePicker: () => {
        t ? b() : y();
      },
      ...Rz(e)
    }), t && jsx(ku, {
      canPickerShowColorContrast: !e.isEditingStyle,
      defaultColor: e.defaultColor,
      disableStyleModal: !0,
      dropdownShown: e.dropdownShown,
      hasVisiblePaintBelow: !1,
      inheritStyleKeyField: "inheritFillStyleKey",
      isInStyleModal: e.isEditingStyle,
      onChange: _,
      onClose: b,
      paint: g,
      paintId: Pr,
      pickerShown: n,
      recordingKey: e.recordingKey,
      selectedStyle: null,
      solidPaintOnly: !0,
      variableScopes: e.variableScopes
    })]
  });
});
(n || (n = {})).ConnectedTextDecorationFillPanel = connect(e => ({
  library: e.library,
  currentSelectedProperty: e.mirror.appModel.currentSelectedProperty,
  currentSelectedGradientStop: e.mirror.appModel.currentSelectedGradientStop,
  currentTool: e.mirror.appModel.currentTool,
  activeCanvasEditModeType: e.mirror.appModel.activeCanvasEditModeType,
  sceneGraphSelection: e.mirror.sceneGraphSelection,
  dropdownShown: e.dropdownShown,
  modalShown: e.modalShown,
  pickerShown: e.pickerShown,
  pickerInStyleCreationShown: e.pickerInStyleCreationShown,
  stylePickerShown: e.stylePickerShown,
  stylePickerListLayout: e.stylePickerListLayout,
  openFile: e.openFile
}))(function (e) {
  let t = Ku();
  let {
    exportBackgroundDisabled,
    exportSettings,
    inheritFillStyleKey,
    textDecorationFillPaints,
    styleIdForText
  } = (e.shouldUseSelectedStyleProperties ? pw : zj)("exportBackgroundDisabled", "exportSettings", "inheritFillStyleKey", "styleIdForText", "textDecorationFillPaints");
  let l = _$$tN("fillPaints");
  let d = _$$m();
  let c = wR("textDecorationFillPaints");
  return jsx(tN, {
    colorFormat: t,
    currentSelectedGradientStop: e.currentSelectedGradientStop,
    currentSelectedProperty: e.currentSelectedProperty,
    currentTool: e.currentTool,
    defaultColor: defaultGrayColor,
    dispatch: e.dispatch,
    dropdownShown: e.dropdownShown,
    editModeType: e.activeCanvasEditModeType,
    exportBackgroundDisabled,
    fillPaints: l,
    hasExports: !!exportSettings && valueOrFallback(exportSettings, []).length > 0,
    inheritStyleID: styleIdForText || null,
    inheritStyleKey: inheritFillStyleKey || null,
    isEditingStyle: e.isEditingStyle,
    isPanelBodyCollapsedAtom: null,
    isUI3: !0,
    library: e.library,
    modalShown: e.modalShown,
    openFile: e.openFile,
    pickerInStyleCreationShown: e.pickerInStyleCreationShown,
    pickerShown: e.pickerShown,
    recordingKey: e.recordingKey,
    sceneGraphSelection: e.sceneGraphSelection,
    selectionContainsFrames: d,
    stylePickerListLayout: e.stylePickerListLayout,
    stylePickerShown: e.stylePickerShown,
    textDecorationFillPaints: e.isEditingStyle ? c : textDecorationFillPaints
  }, e.key);
});
let tP = n.ConnectedTextDecorationFillPanel;
function tO(e) {
  let t = !e.selectionContainsUnderline;
  return jsxs(Fragment, {
    children: [jsx(fI, {
      children: jsx(JU, {
        disabled: t,
        className: "type_settings--decorationColorTypeLabel--hUX19 type_settings--_centered--QZTO4",
        children: getI18nString("type_settings.decoration.custom_color")
      })
    }), jsx("div", {
      className: "type_settings--textDecorationColorPicker--x2B-f",
      children: "NONE" !== e.textDecoration && "STRIKETHROUGH" !== e.textDecoration && jsx(tP, {
        isEditingStyle: e.isEditingStyle,
        recordingKey: e.recordingKey,
        shouldUseSelectedStyleProperties: e.shouldUseSelectedStyleProperties
      }, "text-decoration-fill")
    })]
  });
}
var tF = tL;
let tM = new Map();
function tj({
  previewStyleOverride: e,
  previewOpenTypeFeature: t,
  previewVariation: i,
  shouldDrawBoundingBox: n
}) {
  let [s, o] = useState(null);
  let [l, d] = useState({
    placeholder: getI18nString("type_settings.preview.preview")
  });
  let c = useRef(null);
  useEffect(() => {
    if (c.current) {
      let e = c.current;
      let t = e.getBoundingClientRect();
      let i = e.parentElement.getBoundingClientRect().height;
      s && t.width === s.width && t.height === s.height && i === s.viewportHeight || o({
        width: t.width,
        height: t.height,
        viewportHeight: i
      });
    }
  }, [s]);
  useEffect(() => {
    if (e === TypographySettings.EMPTY || null === s) {
      d({
        placeholder: getI18nString("type_settings.preview.preview")
      });
      return;
    }
    let n = FontHelpers.getPreview(e, t || "", i, s.width, s.viewportHeight);
    if ("placeholder" in n && "No preview available" === n.placeholder) {
      let e = `${n.family}_${n.style}_${t ?? i}`;
      let r = tM.get(e) || 0;
      let a = Date.now();
      a - r > 3e4 && (tM.set(e, a), trackEventAnalytics("Type Details Preview Unavailable", {
        family: n.family,
        style: n.style,
        feature: t
      }));
    }
    "svg" in n && (n.svg = tF().sanitize(n.svg));
    d(n);
  }, [s, t, e, i]);
  let u = e === TypographySettings.LIST_STYLE_PLAIN || e === TypographySettings.LIST_STYLE_ORDERED || e === TypographySettings.LIST_STYLE_UNORDERED || e === TypographySettings.HANGING_LISTS_ON || e === TypographySettings.HANGING_LISTS_OFF;
  let p = jsx("div", {
    className: "type_settings--previewContainer--7JLdy",
    children: jsx("div", {
      ref: c,
      className: eP()({
        "type_settings--previewBox--RFjra": !0,
        "type_settings--previewBoxShiftedRight--ZJfuk": u
      }),
      children: "svg" in l ? jsx("div", {
        className: eP()({
          "type_settings--previewBorder--mN6tJ": n
        }),
        dangerouslySetInnerHTML: {
          __html: l.svg
        }
      }) : jsx("div", {
        className: "type_settings--previewPlaceholder--if8uB",
        children: l.placeholder
      })
    })
  });
  return getFeatureFlags().ce_tv_fpl_type_settings ? jsx("div", {
    className: "type_settings--previewWrapper--mWSTY",
    children: p
  }) : p;
}
tj.displayName = "Preview";
let tB = "type_settings_tab_header--singleTabHeader--DOF57 type_settings--tabsHeader--AWpX1";
let tV = "type_settings_tab_header--parentTab--PaIkC";
let tG = "type_settings_tab_header--drillInRow--l9OdD";
let tz = "type_settings_tab_header--separator--9hO5J";
function tH() {
  return getFeatureFlags().ce_tv_fpl_type_settings ? jsx(DialogTitle, {
    children: getI18nString("type_settings.type_settings")
  }) : jsx("div", {
    className: tB,
    children: jsx("div", {
      className: "type_settings_tab_header--typeSettingsTitle--OpoVK header_modal--headerModalTitle--32hFx",
      children: getI18nString("type_settings.type_settings")
    })
  });
}
function tW({
  tabs: e,
  activeTab: t,
  onChange: i,
  inTextUnderlineDrillInView: n,
  onDrillInViewChange: s,
  tabContent: o
}) {
  useEffect(() => {
    e.find(e => e === t) || i("Basics");
  });
  let l = e.length > 1;
  let d = getFeatureFlags().ce_tv_fpl_type_settings ? jsxs(Fragment, {
    children: [jsx(DialogBackButton, {
      onClick: s
    }), jsx(DialogTitle, {
      children: jsxs("div", {
        className: tG,
        children: [jsx("span", {
          className: tV,
          children: l ? getI18nString("fullscreen.type_settings.basic_tab") : getI18nString("type_settings.type_settings")
        }), jsx("span", {
          className: tz,
          children: "/"
        }), jsx("span", {
          children: getI18nString("type_settings.decoration.underline")
        })]
      })
    })]
  }) : jsxs("div", {
    className: l ? "type_settings_tab_header--tabsHeader--HybJs type_settings--tabsHeader--AWpX1" : tB,
    children: [jsx(IconButton, {
      htmlAttributes: {
        "data-tooltip": getI18nString("general.back"),
        "data-tooltip-type": KindEnum.TEXT
      },
      "aria-label": getI18nString("general.back"),
      onClick: s,
      children: jsx(_$$C, {})
    }), jsxs("div", {
      className: tG,
      children: [jsx("span", {
        className: tV,
        children: l ? getI18nString("fullscreen.type_settings.basic_tab") : getI18nString("type_settings.type_settings")
      }), jsx("span", {
        className: tz,
        children: "/"
      }), jsx("span", {
        children: getI18nString("type_settings.decoration.underline")
      })]
    })]
  });
  return n ? d : l ? o : jsx(tH, {});
}
function tQ({
  axis: e,
  axisValues: t,
  onChangeCallback: i,
  previewHoverHandler: n,
  trackEvent: o,
  clampedOpticalSize: l,
  onDetachOpticalSizeChange: d,
  variationAxisTickValues: c,
  formatter: u
}) {
  let p = useDispatch();
  let m = kl("detachOpticalSizeFromFontSize");
  let h = !isInvalidValue(m) && !m;
  let g = e.$$default ?? 0;
  let f = t[e.tag]?.value ?? e.value ?? g;
  e.tag !== OPTICAL_SIZE_AXIS_TAG || t[e.tag]?.value !== void 0 || m || (f = l);
  let _ = isInvalidValue(f) ? 0 : f;
  let A = 1;
  let y = 10;
  let b = e.max - e.min;
  b <= 3 ? (A = .01, y = .25) : b <= 6 && (A = .1, y = 1);
  b >= 500 && (y = 25);
  let v = useMemo(() => {
    let t = Array.from(c[e.tag]) ?? [];
    t.push(g);
    t.sort((e, t) => e - t);
    let i = function (e, t) {
      let i = new Set();
      for (let n = 0; n < e.length; n++) if (!i.has(n)) for (let r = n + 1; r < e.length && !(e[r] - e[n] > t); r++) i.add(n);
      return e.filter((e, t) => !i.has(t));
    }(t, 15 * A);
    return i.length <= 15 ? i : [g];
  }, [c, e, g, A]);
  let I = useId();
  return jsx("div", {
    className: "variation_axis_slider--variationAxisSliderOuter--ru7QE",
    children: jsxs("div", {
      onMouseEnter: () => n(e, "ENTER"),
      onMouseLeave: () => n(e, "LEAVE"),
      children: [jsxs(fI, {
        className: "variation_axis_slider--variationAxisLabel--gc0Mq raw_components--label--4LcC7 raw_components--base--T7G0z",
        children: [jsx("span", {
          id: I,
          children: u.format(mI[e.tag] || e.name || e.tag)
        }), jsx(_$$e2, {
          condition: e.tag === _$$o,
          wrapper: e => jsx(wJ, {
            children: e
          }),
          children: jsx(gq, {
            bigNudgeAmount: 10,
            className: "variation_axis_slider--variationAxisScrubbable--YIgep",
            "data-tooltip": u.format(mI[e.tag] || e.name || e.tag),
            "data-tooltip-type": KindEnum.TEXT,
            dataTestId: generateRecordingKey("VariableFontSection.AxisInput", e.tag),
            dispatch: p,
            inputClassName: "variation_axis_slider--variationAxisInput--znVac",
            max: e.max,
            min: e.min,
            onValueChange: (t, n) => {
              i(t, e.tag, n);
              o("Variable Font Axis Value Changed", {
                axis: e.tag,
                source: "input"
              });
            },
            recordingKey: generateRecordingKey("VariableFontSection.AxisInput", e.tag),
            smallNudgeAmount: 1,
            tooltipForScreenReadersOnly: !0,
            value: f
          })
        })]
      }), jsx(fI, {
        className: "variation_axis_slider--variationAxisSlider--sPM94",
        children: jsx(_$$A3, {
          "aria-labelledby": I,
          bigStep: y,
          defaultValue: g,
          hints: v,
          max: e.max,
          min: e.min,
          mixed: isInvalidValue(f),
          onChange: (t, {
            commit: n
          }) => {
            i(t, e.tag, n ? yesNoTrackingEnum.YES : yesNoTrackingEnum.NO);
            n && o("Variable Font Axis Value Changed", {
              axis: e.tag,
              source: "slider"
            });
          },
          rangeAnchor: e.min,
          recordingKey: generateRecordingKey("VariableFontSection.Slider", e.tag),
          step: A,
          value: _
        })
      }), e.tag === OPTICAL_SIZE_AXIS_TAG && jsx("div", {
        className: "variation_axis_slider--variationAxisFPLRow---mC10",
        children: jsx(Checkbox, {
          checked: h,
          onChange: d,
          recordingKey: "VariableFontSection.OpticalSize",
          label: jsx(Label, {
            children: jsx("span", {
              className: cssBuilderInstance.colorTextSecondary.$,
              children: renderI18nText("type_settings.variable_fonts.set_optical_size_automatically")
            })
          })
        })
      })]
    })
  }, `${e.tag}`);
}
let t1 = {
  [FONT_SF_PRO_DISPLAY]: {
    wdth: !1,
    yaxs: !0
  }
};
function t2({
  variationAxes: e,
  variationAxisTickValues: t,
  axisValues: i,
  onChange: n,
  previewHoverHandler: s,
  fontSize: o,
  fontFamily: l
}) {
  let d = new _r();
  let c = isInvalidValue(l) ? {} : t1[l] ?? {};
  let u = useCallback(e => c[e.tag?.toLowerCase()] ?? !!e.hidden, [c]);
  let p = H0(e.filter(e => !u(e) && "ital" !== e.tag));
  let m = e.filter(e => u(e));
  let [h, g] = useState(!1);
  let f = useCallback((e, t, i) => {
    isInvalidValue(e) || n(e, t, i);
  }, [n]);
  let _ = trackFileEventWithUser();
  let A = useMemo(() => {
    if (isInvalidValue(o)) return o;
    let t = e.find(e => e.tag === OPTICAL_SIZE_AXIS_TAG);
    return t ? Math.max(Math.min(o, t.max), t.min) : o;
  }, [e, o]);
  let y = useCallback(e => {
    let t = {
      axisTag: cx(OPTICAL_SIZE_AXIS_TAG),
      axisName: mI[OPTICAL_SIZE_AXIS_TAG],
      value: e || isInvalidValue(A) ? void 0 : A
    };
    fullscreenValue.updateSelectionProperties({
      detachOpticalSizeFromFontSize: !e,
      fontVariations: [t]
    });
    _("Variable Font Detaching OPSZ", {
      attached: e
    });
  }, [A, _]);
  return jsx(Fragment, {
    children: jsxs(Zk, {
      children: [p.map(e => jsx(tQ, {
        axis: e,
        axisValues: i,
        clampedOpticalSize: A,
        formatter: d,
        onChangeCallback: f,
        onDetachOpticalSizeChange: y,
        previewHoverHandler: s,
        trackEvent: _,
        variationAxisTickValues: t
      }, e.tag)), m.length > 0 && jsxs(Fragment, {
        children: [jsx(fI, {
          onClick: () => g(!h),
          children: jsxs(_$$Q, {
            extended: !0,
            className: "type_settings--variableFontHeader--N5He4",
            children: [jsx(SvgComponent, {
              svg: h ? _$$A4 : _$$A5,
              className: "type_settings--expandCaret--CmM8q"
            }), renderI18nText("type_settings.variable_fonts.additional_axes")]
          })
        }), h && jsx(Fragment, {
          children: m.map(e => jsx(tQ, {
            axis: e,
            axisValues: i,
            clampedOpticalSize: A,
            formatter: d,
            onChangeCallback: f,
            onDetachOpticalSizeChange: y,
            previewHoverHandler: s,
            trackEvent: _,
            variationAxisTickValues: t
          }, e.tag))
        })]
      })]
    })
  });
}
function t3(e) {
  let t = useDispatch();
  let i = useRef();
  useOnSelectionChange(() => {
    i.current = void 0;
  });
  let n = kl("textAutoResize");
  let o = kl("textTruncation");
  let l = kl("maxLines");
  let {
    smallNudgeAmount,
    bigNudgeAmount
  } = sT();
  let u = "NONE" !== n && "ENDING" === o;
  return jsxs(Fragment, {
    children: [jsxs(fI, {
      children: [jsx(JU, {
        className: ti,
        children: renderI18nText("type_settings.truncate_text")
      }), jsx("span", {
        className: tr,
        children: jsxs(bL, {
          value: isValidValue(o) ? o : void 0,
          onChange: e => {
            let t = {
              textTruncation: e
            };
            "ENDING" === e && i.current ? t.maxLines = i.current : "DISABLED" === e && l && isValidValue(l) && l > 0 && (i.current = l);
            h$("TEXT_TRUNCATION", yesNoTrackingEnum.YES);
            fullscreenValue.updateSelectionProperties(t);
          },
          readonly: e.disabled,
          legend: jsx(_$$q, {
            children: getI18nString("type_settings.truncate_text")
          }),
          recordingKey: generateRecordingKey(e, "textTruncation"),
          children: [jsx(c$, {
            icon: jsx(_$$f, {}),
            value: "DISABLED",
            "aria-label": getI18nString("type_settings.no_truncation"),
            htmlAttributes: {
              "data-tooltip-show-above": !0,
              onMouseEnter: () => e.textTruncationHoverHandler("DISABLED", "ENTER"),
              onMouseLeave: () => e.textTruncationHoverHandler("DISABLED", "LEAVE")
            }
          }), jsx(c$, {
            icon: jsx(ec, {}),
            value: "ENDING",
            "aria-label": getI18nString("type_settings.truncation_enabled"),
            htmlAttributes: {
              "data-tooltip-show-above": !0,
              onMouseEnter: () => e.textTruncationHoverHandler("ENDING", "ENTER"),
              onMouseLeave: () => e.textTruncationHoverHandler("ENDING", "LEAVE")
            }
          })]
        })
      })]
    }), u && jsxs(fI, {
      children: [jsx(JU, {
        className: ti,
        children: getI18nString("type_settings.max_lines")
      }), jsx(Se, {
        bigNudgeAmount,
        className: td,
        "data-tooltip": getI18nString("type_settings.max_lines"),
        "data-tooltip-type": KindEnum.TEXT,
        dispatch: t,
        inputClassName: tc,
        min: 1,
        onValueChange: (e, t) => {
          isAutoMarker(e) || (i.current = e, fullscreenValue.updateSelectionProperties({
            maxLines: e
          }, {
            shouldCommit: t
          }), h$("MAX_LINES", t));
        },
        recordingKey: generateRecordingKey(e, "maxLines"),
        scrubMultiplier: .25,
        smallNudgeAmount,
        value: l || AUTO_MARKER
      })]
    })]
  });
}
function t6(e) {
  let t = useDispatch();
  let {
    smallNudgeAmount,
    bigNudgeAmount
  } = sT();
  let [o, d] = useState(TypographySettings.EMPTY);
  let [c, u] = useState(null);
  let [p, m] = useState(!1);
  let [h, g] = useState(void 0);
  let [_, A] = useState(!1);
  let b = kl("selectedTextContainsUnderline") ?? !1;
  let v = "UNDERLINE" === e.textDecoration || b;
  let I = useSelector(e => e.mirror.selectedStyleProperties.toggledOnOTFeatures);
  let x = useSelector(e => e.mirror.selectedStyleProperties.toggledOffOTFeatures);
  let S = useSelector(e => e.mirror.selectedStyleProperties.guid);
  let w = B9(e.shouldUseSelectedStyleProperties);
  let T = void 0 !== S;
  let k = !!valueOrFallback(e.missingFont, !1);
  let R = (0 | e.enabledTypePanelControls) & 1 << TextAlignmentOptions.TEXT_TRUNCATION;
  let O = useRef(null);
  let D = useRef(null);
  let L = useRef(null);
  let M = useRef(null);
  let j = () => {
    t(XE());
  };
  let B = e.editModeType === LayoutTabType.TEXT;
  let V = e => e in w.supported;
  let z = e => e in w.applicable;
  let K = useRef();
  let Y = useCallback(e => {
    switch (e) {
      case "ENTER":
        K.current && (clearTimeout(K.current), K.current = void 0);
        break;
      case "LEAVE":
        K.current = setTimeout(() => {
          d(TypographySettings.EMPTY);
          u(null);
          m(!1);
        }, 300);
    }
  }, []);
  let q = (e, t) => {
    fullscreenValue.updateSelectionProperties({
      paragraphIndent: e
    }, {
      shouldCommit: t
    });
    h$("PARAGRAPH_INDENT", t);
  };
  let $ = (e, t) => {
    fullscreenValue.updateSelectionProperties({
      paragraphSpacing: e
    }, {
      shouldCommit: t
    });
    h$("PARAGRAPH_SPACING", t, "settings");
  };
  let Q = (e, t) => {
    fullscreenValue.updateSelectionProperties({
      listSpacing: e
    }, {
      shouldCommit: t
    });
    h$("LIST_SPACING", t);
  };
  let J = (e, t) => {
    fullscreenValue.updateSelectionProperties({
      textUnderlineOffset: e
    }, {
      shouldCommit: t
    });
  };
  let ee = (e, t) => {
    fullscreenValue.updateSelectionProperties({
      textDecorationThickness: e
    }, {
      shouldCommit: t
    });
  };
  let et = e => {
    fullscreenValue.updateSelectionProperties({
      leadingTrim: e
    }, {
      shouldCommit: yesNoTrackingEnum.YES,
      overwrite: VisibilityCondition.ONLY_WHEN_NOT_DISABLED
    });
    "NONE" !== e && h$(e);
  };
  let ec = e => {
    fullscreenValue.updateSelectionProperties({
      hangingPunctuation: e
    }, {
      shouldCommit: yesNoTrackingEnum.YES
    });
    e && h$("HANGING_QUOTE");
  };
  let eN = e => {
    fullscreenValue.updateSelectionProperties({
      hangingList: e
    }, {
      shouldCommit: yesNoTrackingEnum.YES
    });
    e && h$("HANGING_LIST");
  };
  let eU = e => {
    fullscreenValue.updateSelectionProperties({
      textAlignHorizontal: e
    });
  };
  let eH = e => fullscreenValue.updateSelectionProperties({
    fontVariantPosition: e
  });
  let eW = (e, t) => {
    if (_$$G.OpenTypeFeatureDefaultOn.includes(e)) {
      let i = w.off.filter(t => t !== e);
      "Style" === tx && x && (i = x.filter(t => t !== e));
      "OFF" === t && i.push(e);
      let n = w.mixed.filter(t => t !== e);
      T ? fullscreenValue.updateSelectionProperties({
        toggledOffOTFeatures: i
      }, {
        shouldCommit: yesNoTrackingEnum.YES
      }) : fullscreenValue.updateSelectionProperties({
        toggledOffOTFeaturesForSelection: i,
        mixedStateOTFeaturesForSelection: n
      }, {
        shouldCommit: yesNoTrackingEnum.YES
      });
    } else {
      let i = w.on.filter(t => t !== e);
      "Style" === tx && I && (i = I.filter(t => t !== e));
      "ON" === t && i.push(e);
      let n = w.mixed.filter(t => t !== e);
      T ? fullscreenValue.updateSelectionProperties({
        toggledOnOTFeatures: i
      }, {
        shouldCommit: yesNoTrackingEnum.YES
      }) : fullscreenValue.updateSelectionProperties({
        toggledOnOTFeaturesForSelection: i,
        mixedStateOTFeaturesForSelection: n
      }, {
        shouldCommit: yesNoTrackingEnum.YES
      });
    }
    trackEventAnalytics("OpenType Feature Change", {
      feature: e,
      state: t
    });
  };
  let eK = () => {
    let t = "NORMAL" === e.fontVariantNumericSpacing;
    let i = "NORMAL" === e.fontVariantNumericFigure;
    if (!(isValidValue(e.fontVariantNumericSpacing) && isValidValue(e.fontVariantNumericFigure))) return "MIXED";
    if (t && i) return "ORIGINAL";
    if (t || "PROPORTIONAL" === e.fontVariantNumericSpacing) {
      if (i || "LINING" === e.fontVariantNumericFigure) return "UPPER_PROPORTIONAL";
      if ("OLDSTYLE" === e.fontVariantNumericFigure) return "LOWER_PROPORTIONAL";
    } else if ("TABULAR" === e.fontVariantNumericSpacing) {
      if (i || "LINING" === e.fontVariantNumericFigure) return "UPPER_MONOSPACE";
      if ("OLDSTYLE" === e.fontVariantNumericFigure) return "LOWER_MONOSPACE";
    }
    return "MIXED";
  };
  let eZ = () => "MIXED" === valueOrFallback(e.fontVariantNumericFraction, "MIXED") ? "MIXED" : "STACKED" === e.fontVariantNumericFraction ? "ON" : "OFF";
  let eX = t => "DLIG" === t ? e.fontVariantDiscretionaryLigatures === MIXED_MARKER ? "MIXED" : valueOrFallback(e.fontVariantDiscretionaryLigatures, !1) ? "ON" : "OFF" : "HLIG" === t ? e.fontVariantHistoricalLigatures === MIXED_MARKER ? "MIXED" : valueOrFallback(e.fontVariantHistoricalLigatures, !1) ? "ON" : "OFF" : w.mixed.includes(t) ? "MIXED" : _$$G.OpenTypeFeatureDefaultOn.includes(t) ? "Style" === tx ? x?.includes(t) ? "OFF" : "ON" : w.off.includes(t) ? "OFF" : "ON" : "Style" === tx ? I?.includes(t) ? "ON" : "OFF" : w.on.includes(t) ? "ON" : "OFF";
  let e5 = () => {
    fullscreenValue.updateSelectionProperties({
      textUserLayoutVersion: 1
    });
    e3(!1);
  };
  let e4 = () => {
    fullscreenValue.updateSelectionProperties({
      textBidiVersion: 1
    });
  };
  let e3 = e => {
    getFeatureFlags().ce_mixed_text_spacing && Fullscreen.upgradeToLatestTextExplicitLayoutVersion(e);
  };
  let e6 = () => {
    fullscreenValue.updateSelectionProperties({
      textUserLayoutVersion: 0,
      textExplicitLayoutVersion: 0
    });
  };
  let e7 = () => 0 === e.textUserLayoutVersion || -1 !== toArray(e.textUserLayoutVersion).indexOf(0) ? "upgrade" : 1 === e.textUserLayoutVersion && "downgrade";
  let e8 = () => jsxs(Fragment, {
    children: [(e7() || ty()) && jsx("div", {
      className: tl
    }), tv(), (e7() || ty()) && jsx("div", {
      className: tl
    })]
  });
  let tc = 1 !== e.textBidiVersion;
  let t_ = () => jsxs(Fragment, {
    children: [tc && jsx("div", {
      className: tl
    }), tc && jsxs(fI, {
      className: tm,
      onMouseDown: e => {
        e.stopPropagation();
      },
      children: [jsxs("div", {
        className: th,
        children: [renderI18nText("type_settings.bidi_update_desc"), jsx(SvgComponent, {
          svg: _$$A6,
          "data-tooltip-type": KindEnum.LOOKUP,
          "data-tooltip": "bidi-update-info",
          className: tg,
          style: {
            verticalAlign: "top"
          }
        })]
      }), jsx("span", {
        className: tf,
        children: jsx(ButtonWide, {
          variant: "secondary",
          onClick: e4,
          recordingKey: generateRecordingKey(e, "upgrade-text-user-layout-version-bidi"),
          children: renderI18nText("type_settings.update")
        })
      })]
    })]
  });
  let ty = () => "Style" !== tx && (1 !== e.textExplicitLayoutVersion || -1 !== toArray(e.textExplicitLayoutVersion).indexOf(0));
  let tv = () => "upgrade" === e7() ? jsxs(fI, {
    className: tm,
    onMouseDown: e => {
      e.stopPropagation();
    },
    children: [jsxs("div", {
      className: th,
      children: [isValidValue(e.textUserLayoutVersion) ? getI18nString("type_settings.older_text_rendering_method_used") : getI18nString("type_settings.older_text_rendering_method_used_for_part_of_the_selection"), jsx(SvgComponent, {
        svg: _$$A6,
        "data-tooltip-type": KindEnum.LOOKUP,
        "data-tooltip": "line-height-update-info",
        className: tg,
        style: {
          verticalAlign: "top"
        }
      })]
    }), jsx("span", {
      className: tf,
      children: jsx(ButtonWide, {
        variant: "secondary",
        onClick: e5,
        recordingKey: generateRecordingKey(e, "upgrade-text-user-layout-version"),
        children: renderI18nText("type_settings.update")
      })
    })]
  }) : "downgrade" === e7() ? jsxs(fI, {
    className: tm,
    onMouseDown: e => {
      e.stopPropagation();
    },
    children: [jsxs("div", {
      className: "type_settings--lineHeightDowngradeInfo--Ps63T type_settings--lineHeightUpdateInfo--0sHJc",
      children: [renderI18nText("type_settings.new_text_rendering_method_used"), jsx(SvgComponent, {
        svg: _$$A6,
        "data-tooltip-type": KindEnum.LOOKUP,
        "data-tooltip": "line-height-update-info",
        className: tg,
        style: {
          verticalAlign: "top"
        }
      })]
    }), jsx("span", {
      className: "type_settings--lineHeightDowngradeButton--XjXG8 type_settings--_lineHeightButton--EiBKy",
      children: jsx(Button, {
        variant: "link",
        onClick: e6,
        recordingKey: generateRecordingKey(e, "downgrade-text-user-layout-version"),
        children: renderI18nText("type_settings.revert")
      })
    })]
  }) : ty() ? tI() : void 0;
  let tI = () => jsxs(fI, {
    className: tm,
    onMouseDown: e => {
      e.stopPropagation();
    },
    children: [jsxs("div", {
      className: th,
      children: [renderI18nText("type_settings.explicit_text_layout_update_desc"), getFeatureFlags().ce_mixed_text_spacing && jsx(SvgComponent, {
        svg: _$$A6,
        "data-tooltip-type": KindEnum.LOOKUP,
        "data-tooltip": "explicit-text-layout-version-info",
        className: tg,
        style: {
          verticalAlign: "top"
        }
      })]
    }), jsx("span", {
      className: tf,
      children: jsx(ButtonWide, {
        variant: "secondary",
        onClick: () => {
          e3(!0);
        },
        recordingKey: generateRecordingKey(e, "upgrade-text-explicit-user-layout-version"),
        children: renderI18nText("type_settings.update")
      })
    })]
  });
  let tx = void 0 !== S ? "Style" : e.isStyleConsumer ? "NodeStyleConsumer" : "NodeNotStyleConsumer";
  let tw = "NodeNotStyleConsumer" === tx || "Style" === tx;
  let tT = "NodeNotStyleConsumer" === tx || "NodeStyleConsumer" === tx;
  let tk = () => {
    let t = (e, t) => {
      Y(t);
      "ENTER" === t && (d("LEFT" === e ? TypographySettings.ALIGNMENT_LEFT : "CENTER" === e ? TypographySettings.ALIGNMENT_CENTER : "RIGHT" === e ? TypographySettings.ALIGNMENT_RIGHT : "JUSTIFIED" === e ? TypographySettings.ALIGNMENT_JUSTIFIED : TypographySettings.EMPTY), u(null), m(!1));
    };
    let i = tT && !t0;
    return jsx(Fragment, {
      children: i && e.textAlignHorizontal && jsxs(fI, {
        children: [jsx(JU, {
          className: tt,
          children: renderI18nText("type_settings.alignment")
        }), jsx("span", {
          className: ts,
          children: jsxs(bL, {
            value: isValidValue(e.textAlignHorizontal) ? e.textAlignHorizontal : void 0,
            onChange: eU,
            recordingKey: e.recordingKey,
            legend: jsx(_$$q, {
              children: renderI18nText("type_settings.alignment")
            }),
            readonly: k,
            children: [jsx(c$, {
              icon: jsx(_$$h, {}),
              value: "LEFT",
              "aria-label": getI18nString("fullscreen_actions.text-align-left"),
              htmlAttributes: {
                "data-tooltip-type": KindEnum.TEXT,
                "data-tooltip": getI18nString("fullscreen_actions.text-align-left"),
                "data-tooltip-shortcut-key": XL.LEFT,
                "data-tooltip-show-above": !0,
                onMouseEnter: () => t("LEFT", "ENTER"),
                onMouseLeave: () => t("LEFT", "LEAVE")
              }
            }), jsx(c$, {
              icon: jsx(_$$N, {}),
              value: "CENTER",
              "aria-label": getI18nString("fullscreen_actions.text-align-center"),
              htmlAttributes: {
                "data-tooltip-type": KindEnum.TEXT,
                "data-tooltip": getI18nString("fullscreen_actions.text-align-center"),
                "data-tooltip-shortcut-key": XL.CENTER,
                "data-tooltip-show-above": !0,
                onMouseEnter: () => t("CENTER", "ENTER"),
                onMouseLeave: () => t("CENTER", "LEAVE")
              }
            }), jsx(c$, {
              icon: jsx(_$$K2, {}),
              value: "RIGHT",
              "aria-label": getI18nString("fullscreen_actions.text-align-right"),
              htmlAttributes: {
                "data-tooltip-type": KindEnum.TEXT,
                "data-tooltip": getI18nString("fullscreen_actions.text-align-right"),
                "data-tooltip-shortcut-key": XL.RIGHT,
                "data-tooltip-show-above": !0,
                onMouseEnter: () => t("RIGHT", "ENTER"),
                onMouseLeave: () => t("RIGHT", "LEAVE")
              }
            }), jsx(c$, {
              icon: jsx(_$$h2, {}),
              value: "JUSTIFIED",
              "aria-label": getI18nString("fullscreen_actions.text-align-justified"),
              htmlAttributes: {
                "data-tooltip-type": KindEnum.TEXT,
                "data-tooltip": getI18nString("fullscreen_actions.text-align-justified"),
                "data-tooltip-shortcut-key": XL.JUSTIFIED,
                "data-tooltip-show-above": !0,
                onMouseEnter: () => t("JUSTIFIED", "ENTER"),
                onMouseLeave: () => t("JUSTIFIED", "LEAVE")
              }
            })]
          })
        })]
      })
    });
  };
  let tR = () => {
    if (tT) return jsx(t3, {
      textTruncationHoverHandler: (e, t) => {
        Y(t);
        "ENTER" === t && (m(!0), d("DISABLED" === e ? TypographySettings.TRUNCATION_DISABLED : TypographySettings.TRUNCATION_ENABLED));
      },
      disabled: k,
      recordingKey: e.recordingKey
    });
  };
  let tN = (e, t) => {
    Y(t);
    "ENTER" === t && (d("NONE" === e ? TypographySettings.DECORATION_NONE : "STRIKETHROUGH" === e ? TypographySettings.DECORATION_STRIKETHROUGH : "UNDERLINE" === e ? TypographySettings.DECORATION_UNDERLINE : TypographySettings.EMPTY), u(null), m(!1));
  };
  let tP = () => {
    let t = tT || tw;
    return jsx(Fragment, {
      children: t && jsxs(fI, {
        children: [jsx(JU, {
          className: tt,
          children: renderI18nText("type_settings.decoration")
        }), jsx(tE, {
          decorationHoverHandler: tN,
          disabled: k,
          recordingKey: e.recordingKey,
          textDecoration: e.textDecoration,
          drillInChevronShowing: !0,
          onUnderlineDoubleClick: () => {
            A(!0);
            analyticsEventManager.trackDefinedEvent("text_and_vector.text_decoration_menu_opened", {
              source: "Style" === tx ? "text_style" : "type_settings",
              entryPoint: "double_click"
            });
          }
        }), jsx("div", {
          className: "type_settings--textDecorationDrillInButton--cDpb4",
          children: jsx(tS, {
            htmlAttributes: {
              "data-tooltip": getI18nString("type_settings.decoration.details"),
              "data-tooltip-type": KindEnum.TEXT,
              "data-tooltip-show-above": !0,
              "data-tooltip-offset-x": 4
            },
            "aria-label": getI18nString("type_settings.decoration.details"),
            onClick: () => {
              A(!0);
              analyticsEventManager.trackDefinedEvent("text_and_vector.text_decoration_menu_opened", {
                source: "Style" === tx ? "text_style" : "type_settings",
                entryPoint: "drill_in_button"
              });
            },
            recordingKey: generateRecordingKey(e, "textDecorationDrillInButton"),
            children: jsx(_$$k3, {})
          })
        })]
      })
    });
  };
  let tL = () => {
    if (tw) return jsx(t7, {
      ref: O,
      label: getI18nString("type_settings.decoration.paragraph_spacing"),
      input: jsx(_X, {
        fields: ["PARAGRAPH_SPACING"],
        resolvedType: VariableResolvedDataType.FLOAT,
        editingStyleGuid: S,
        initialPickerPosition: () => O.current ? cn(O.current, d9) : null,
        children: jsx(eJ, {
          inputRef: D,
          inputClassName: eP()(tu, bO),
          activeInputClassName: eP()(tp, Hn),
          currentFieldValue: isInvalidValue(e.paragraphSpacing) ? void 0 : e.paragraphSpacing,
          rowElementRef: O,
          recordingKey: generateRecordingKey(e.recordingKey, "paragraphSpacing.variableControl"),
          children: jsx(t8, {
            ref: D,
            onValueChange: $,
            value: e.paragraphSpacing,
            disabled: k,
            dataTooltip: getI18nString("type_settings.decoration.paragraph_spacing"),
            recordingKey: generateRecordingKey(e, "paragraphSpacing"),
            noBorderOnHover: !0,
            hasVariablesEntrypoint: !0
          })
        })
      })
    });
  };
  let tF = () => {
    let t = tT && !!e.textLineType;
    let i = tw && "PLAIN" !== e.wholeNodeTextLineType;
    return jsxs(Fragment, {
      children: [t && jsxs(fI, {
        children: [jsx(JU, {
          className: tt,
          children: renderI18nText("type_settings.list_style")
        }), jsx(eY, {
          className: ta,
          textLineType: e.textLineType,
          eventSource: "settings",
          disabled: k,
          recordingKey: generateRecordingKey(e, "listStyle"),
          mouseHoverHandler: (e, t) => {
            if (Y(t), "ENTER" === t) {
              let t;
              switch (e) {
                case "PLAIN":
                  t = TypographySettings.LIST_STYLE_PLAIN;
                  break;
                case "UNORDERED_LIST":
                  t = TypographySettings.LIST_STYLE_UNORDERED;
                  break;
                case "ORDERED_LIST":
                  t = TypographySettings.LIST_STYLE_ORDERED;
                  break;
                default:
                  t = TypographySettings.EMPTY;
              }
              d(t);
              u(null);
              m(!1);
            }
          }
        })]
      }), i && jsx(t7, {
        label: getI18nString("type_settings.decoration.list_spacing"),
        input: jsx(t8, {
          onValueChange: Q,
          value: e.listSpacing,
          disabled: k,
          dataTooltip: getI18nString("type_settings.decoration.list_spacing"),
          recordingKey: generateRecordingKey(e, "listSpacing")
        })
      })]
    });
  };
  let tM = t => e.missingFont || k ? "" : e.leadingTrimDisabled ? getI18nString("type_settings.leading_trim.font_does_not_support_leading_trim") : t;
  let tU = () => {
    let t = (e, t) => {
      Y(t);
      "ENTER" === t && (d("CAP_HEIGHT" === e ? TypographySettings.LEADING_TRIM_CAP_HEIGHT : "NONE" === e ? TypographySettings.LEADING_TRIM_NONE : TypographySettings.EMPTY), u(null), m(!0));
    };
    return jsx(Fragment, {
      children: tw && jsxs(fI, {
        children: [jsx(JU, {
          className: ti,
          children: renderI18nText("type_settings.leading_trim")
        }), jsx("span", {
          className: tr,
          children: jsxs(bL, {
            value: isValidValue(e.leadingTrim) && !e.leadingTrimDisabled ? e.leadingTrim : void 0,
            onChange: et,
            readonly: k || e.leadingTrimDisabled,
            legend: jsx(_$$q, {
              children: renderI18nText("type_settings.leading_trim")
            }),
            recordingKey: generateRecordingKey(e, "leadingTrim"),
            children: [jsx(c$, {
              icon: jsx(ef, {}),
              value: "NONE",
              "aria-label": tM(getI18nString("type_settings.leading_trim.none")),
              htmlAttributes: {
                "data-tooltip-show-above": !0,
                onMouseEnter: () => t("NONE", "ENTER"),
                onMouseLeave: () => t("NONE", "LEAVE")
              }
            }), jsx(c$, {
              icon: jsx(e_, {}),
              value: "CAP_HEIGHT",
              "aria-label": tM(getI18nString("type_settings.leading_trim.cap_height")),
              htmlAttributes: {
                "data-tooltip-show-above": !0,
                onMouseEnter: () => t("CAP_HEIGHT", "ENTER"),
                onMouseLeave: () => t("CAP_HEIGHT", "LEAVE")
              }
            })]
          })
        })]
      })
    });
  };
  let tB = () => jsx(Fragment, {
    children: tw && jsx(_$$k4, {
      segmentedControlClassName: tr,
      label: getI18nString("type_settings.hanging_punctuation"),
      labelInactive: !e.isHangingPunctuationApplicableToSelection,
      recordingKey: generateRecordingKey(e, "hangingPunctuation"),
      property: e.hangingPunctuation,
      disabled: k,
      onChange: e => {
        ec(e);
      },
      onHover: (e, t) => {
        Y(t);
        "ENTER" === t && (d(!0 === e ? TypographySettings.HANGING_PUNCTUATION_ON : !1 === e ? TypographySettings.HANGING_PUNCTUATION_OFF : TypographySettings.EMPTY), u(null), m(!1));
      }
    })
  });
  let tV = () => {
    let t = "PLAIN" !== e.wholeNodeTextLineType;
    return jsx(Fragment, {
      children: tw && jsx(_$$k4, {
        segmentedControlClassName: tr,
        label: getI18nString("type_settings.hanging_lists"),
        labelInactive: !t,
        recordingKey: generateRecordingKey(e, "hangingList"),
        property: e.hangingList,
        disabled: k,
        onChange: e => {
          eN(e);
        },
        onHover: (e, t) => {
          Y(t);
          "ENTER" === t && (d(!0 === e ? TypographySettings.HANGING_LISTS_ON : !1 === e ? TypographySettings.HANGING_LISTS_OFF : TypographySettings.EMPTY), u(null), m(!1));
        }
      })
    });
  };
  let tG = () => jsxs(Zk, {
    children: [jsx(fI, {
      children: jsx(_$$Q, {
        extended: !0,
        children: getI18nString("type_settings.indentation")
      })
    }), tB(), tV(), jsx(t7, {
      ref: L,
      label: getI18nString("type_settings.decoration.paragraph_indent"),
      input: jsx(_X, {
        fields: ["PARAGRAPH_INDENT"],
        resolvedType: VariableResolvedDataType.FLOAT,
        editingStyleGuid: S,
        initialPickerPosition: () => L.current ? cn(L.current, d9) : null,
        children: jsx(eJ, {
          inputRef: M,
          inputClassName: eP()(tu, bO),
          activeInputClassName: eP()(tp, Hn),
          currentFieldValue: isInvalidValue(e.paragraphIndent) ? void 0 : e.paragraphIndent,
          rowElementRef: L,
          recordingKey: generateRecordingKey(e.recordingKey, "paragraphIndent"),
          children: jsx(t8, {
            ref: M,
            onValueChange: q,
            value: e.paragraphIndent,
            disabled: k,
            dataTooltip: getI18nString("type_settings.decoration.paragraph_indent"),
            recordingKey: generateRecordingKey(e.recordingKey, "paragraphIndent"),
            noBorderOnHover: !0,
            hasVariablesEntrypoint: !0
          })
        })
      })
    }), jsx("div", {
      className: tl
    })]
  });
  let tz = () => {
    let a = {
      value: parseFloat((100 * FontHelpers.getDefaultUnderlineOffset()).toFixed(2)),
      units: "RAW"
    };
    let s = new tC(a);
    let o = !e.textUnderlineOffset || isValidValue(e.textUnderlineOffset) && 0 === e.textUnderlineOffset.value && "RAW" === e.textUnderlineOffset.units ? {
      value: parseFloat((100 * FontHelpers.getDefaultUnderlineOffset()).toFixed(2)),
      units: "RAW"
    } : e.textUnderlineOffset;
    let l = {
      min: 0,
      max: isInvalidValue(o) || "PIXELS" !== o.units ? 25 : .25 * valueOrFallback(e.fontSize, 12)
    };
    let c = {
      value: parseFloat((100 * FontHelpers.getDefaultUnderlineThickness()).toFixed(2)),
      units: "RAW"
    };
    let p = new tC(c);
    let h = !e.textDecorationThickness || isValidValue(e.textDecorationThickness) && 0 === e.textDecorationThickness.value && "RAW" === e.textDecorationThickness.units ? {
      value: parseFloat((100 * FontHelpers.getDefaultUnderlineThickness()).toFixed(2)),
      units: "RAW"
    } : e.textDecorationThickness;
    let g = {
      min: .5,
      max: isInvalidValue(h) || "PIXELS" !== h.units ? 20 : .2 * valueOrFallback(e.fontSize, 12)
    };
    let _ = !v || k;
    return jsxs(Zk, {
      children: [jsxs(fI, {
        children: [jsx(JU, {
          className: tt,
          children: getI18nString("type_settings.decoration")
        }), jsx(tE, {
          decorationHoverHandler: tN,
          disabled: k,
          recordingKey: generateRecordingKey(e, "textUnderlineDrillInMenu"),
          textDecoration: e.textDecoration,
          drillInChevronShowing: !1
        })]
      }), jsxs(fI, {
        children: [jsx(JU, {
          disabled: _,
          className: ti,
          children: getI18nString("type_settings.decoration.decoration_style")
        }), jsx(tA, {
          decorationHoverHandler: (e, t) => {
            Y(t);
            "ENTER" === t && ("DOTTED" === e ? d(TypographySettings.DECORATION_STYLE_DOTTED) : "WAVY" === e ? d(TypographySettings.DECORATION_STYLE_WAVY) : "SOLID" === e && d(TypographySettings.DECORATION_STYLE_SOLID), u(null), m(!1));
          },
          disabled: _,
          recordingKey: generateRecordingKey(e, "textUnderlineDrillInMenu"),
          textDecorationStyle: e.textDecorationStyle
        })]
      }), jsxs(fI, {
        children: [jsx(JU, {
          disabled: _,
          className: ti,
          children: getI18nString("type_settings.decoration.thickness")
        }), jsx(Jl, {
          bigNudgeAmount,
          className: td,
          "data-tooltip": getI18nString("type_settings.decoration.thickness"),
          "data-tooltip-type": KindEnum.TEXT,
          disabled: _,
          dispatch: t,
          formatter: p,
          onValueChange: ee,
          placeholder: `${isInvalidValue(c) ? "" : c.value}%`,
          recordingKey: generateRecordingKey(e, "underlineThickness"),
          shouldClearOnFocus: !isInvalidValue(h) && "RAW" === h.units,
          smallNudgeAmount,
          value: _ ? {
            value: 0,
            units: "PERCENT"
          } : h
        })]
      }), jsx(fI, {
        className: e9,
        children: jsx(_$$A3, {
          "aria-labelledby": "underline-thickness-slider",
          min: g.min,
          max: g.max,
          step: isValidValue(h) && "PERCENT" === h.units ? .5 : .1,
          bigStep: isValidValue(h) && "PERCENT" === h.units ? 5 : .5,
          disabled: _,
          value: isInvalidValue(h) || _ ? 0 : h.value,
          onChange: (t, {
            commit: i
          }) => {
            if (!e.textDecorationThickness) return;
            let n = isInvalidValue(e.textDecorationThickness) ? "PERCENT" : e.textDecorationThickness.units;
            ee({
              value: t,
              units: "RAW" === n ? "PERCENT" : n
            }, i ? yesNoTrackingEnum.YES : yesNoTrackingEnum.NO);
          },
          rangeAnchor: g.min
        })
      }), jsxs(fI, {
        children: [jsx(JU, {
          disabled: _,
          className: ti,
          children: getI18nString("type_settings.decoration.offset")
        }), jsx(Jl, {
          bigNudgeAmount,
          className: td,
          "data-tooltip": getI18nString("fullscreen.type_panel.underline_offset"),
          "data-tooltip-type": KindEnum.TEXT,
          disabled: _,
          dispatch: t,
          formatter: s,
          onValueChange: J,
          placeholder: `${isInvalidValue(a) ? "" : a.value}%`,
          recordingKey: generateRecordingKey(e, "underlineOffset"),
          shouldClearOnFocus: !isInvalidValue(o) && "RAW" === o.units,
          smallNudgeAmount,
          value: _ ? {
            value: 0,
            units: "PERCENT"
          } : o
        })]
      }), jsx(fI, {
        className: e9,
        children: jsx(_$$A3, {
          "aria-labelledby": "underline-offset-slider",
          min: l.min,
          max: l.max,
          step: isValidValue(o) && "PERCENT" === o.units ? .5 : .1,
          bigStep: isValidValue(o) && "PERCENT" === o.units ? 5 : .5,
          disabled: _,
          value: isInvalidValue(o) || _ ? 0 : o.value,
          onChange: (t, {
            commit: i
          }) => {
            if (!e.textUnderlineOffset) return;
            let n = isInvalidValue(e.textUnderlineOffset) ? "PERCENT" : e.textUnderlineOffset.units;
            J({
              value: t,
              units: "RAW" === n ? "PERCENT" : n
            }, i ? yesNoTrackingEnum.YES : yesNoTrackingEnum.NO);
          },
          rangeAnchor: l.min
        })
      }), jsxs(fI, {
        children: [jsx(JU, {
          disabled: _,
          className: ti,
          children: getI18nString("type_settings.decoration.skip_ink")
        }), jsx(tb, {
          decorationHoverHandler: (e, t) => {
            Y(t);
            "ENTER" === t && (d(!0 === e ? TypographySettings.DECORATION_SKIP_INK_ON : TypographySettings.DECORATION_SKIP_INK_OFF), u(null), m(!1));
          },
          recordingKey: generateRecordingKey(e, "textUnderlineDrillInMenu"),
          skipInk: e.textDecorationSkipInk,
          disabled: _
        })]
      }), jsx(tO, {
        fillPaints: e.fillPaints,
        textDecorationFillPaints: e.textDecorationFillPaints,
        textDecoration: e.textDecoration,
        isEditingStyle: "Style" === tx,
        selectionContainsUnderline: v,
        recordingKey: generateRecordingKey(e, "textDecorationColor"),
        shouldUseSelectedStyleProperties: e.shouldUseSelectedStyleProperties
      })]
    });
  };
  let tH = (t, i = !0) => {
    if (!tw) return;
    let n = (e, t) => {
      if (Y(t), "ENTER" === t) {
        let t;
        switch (e) {
          case "ORIGINAL":
            t = TypographySettings.TEXT_CASE_ORIGINAL;
            break;
          case "UPPER":
            t = TypographySettings.TEXT_CASE_UPPER;
            break;
          case "LOWER":
            t = TypographySettings.TEXT_CASE_LOWER;
            break;
          case "TITLE":
            t = TypographySettings.TEXT_CASE_TITLE;
            break;
          case "SMALL_CAPS":
            t = TypographySettings.TEXT_CASE_SMALL_CAPS;
            break;
          case "SMALL_CAPS_FORCED":
            t = TypographySettings.TEXT_CASE_SMALL_CAPS_FORCED;
            break;
          default:
            t = TypographySettings.EMPTY;
        }
        d(t);
        u(null);
        m(!1);
      }
    };
    let a = [];
    V("SMCP") ? a.push(jsx(c$, {
      value: "SMALL_CAPS",
      icon: jsx(_$$_, {}),
      "aria-label": getI18nString("type_settings.small_caps"),
      htmlAttributes: {
        "data-tooltip-show-above": !0,
        onMouseEnter: () => n("SMALL_CAPS", "ENTER"),
        onMouseLeave: () => n("SMALL_CAPS", "LEAVE")
      }
    }, "toggleOpenTypeFeatureSMCP")) : a.push(jsx(c$, {
      value: "SMALL_CAPS",
      icon: jsx(_$$_, {}),
      readonly: !0,
      "aria-label": getI18nString("type_settings.font_doesn_t_support_small_caps"),
      htmlAttributes: {
        "data-tooltip-show-above": !0,
        onMouseEnter: () => n("SMALL_CAPS", "ENTER"),
        onMouseLeave: () => n("SMALL_CAPS", "LEAVE")
      }
    }, "toggleOpenTypeFeatureSMCP"));
    V("C2SC") && a.push(jsx(c$, {
      value: "SMALL_CAPS_FORCED",
      icon: jsx(_$$D, {}),
      "aria-label": getI18nString("type_settings.forced_small_caps"),
      htmlAttributes: {
        "data-tooltip-show-above": !0,
        onMouseEnter: () => n("SMALL_CAPS_FORCED", "ENTER"),
        onMouseLeave: () => n("SMALL_CAPS_FORCED", "LEAVE")
      }
    }, "toggleOpenTypeFeatureC2SC"));
    let s = jsx(Fragment, {
      children: jsxs(fI, {
        children: [jsx(JU, {
          className: tt,
          children: renderI18nText("type_settings.case")
        }), jsx("span", {
          className: V("C2SC") ? "type_settings--typeDetailsControlSixSegments--6VDYd" : to,
          children: jsxs(bL, {
            value: isValidValue(t) ? t : void 0,
            onChange: e => i4(e, i ? "settings-details" : "settings-basic"),
            readonly: k,
            legend: jsx(_$$q, {
              children: renderI18nText("type_settings.case")
            }),
            recordingKey: generateRecordingKey(e, "textCase"),
            children: [jsx(c$, {
              value: "ORIGINAL",
              icon: jsx(_$$f, {}),
              "aria-label": getI18nString("type_settings.case.as_typed"),
              htmlAttributes: {
                "data-tooltip-show-above": !0,
                onMouseEnter: () => n("ORIGINAL", "ENTER"),
                onMouseLeave: () => n("ORIGINAL", "LEAVE")
              }
            }), jsx(c$, {
              value: "UPPER",
              icon: jsx(eb, {}),
              "aria-label": getI18nString("type_settings.case.uppercase"),
              htmlAttributes: {
                "data-tooltip-show-above": !0,
                onMouseEnter: () => n("UPPER", "ENTER"),
                onMouseLeave: () => n("UPPER", "LEAVE")
              }
            }), jsx(c$, {
              value: "LOWER",
              icon: jsx(_$$L, {}),
              "aria-label": getI18nString("type_settings.case.lowercase"),
              htmlAttributes: {
                "data-tooltip-show-above": !0,
                onMouseEnter: () => n("LOWER", "ENTER"),
                onMouseLeave: () => n("LOWER", "LEAVE")
              }
            }), jsx(c$, {
              value: "TITLE",
              icon: jsx(_$$U, {}),
              "aria-label": getI18nString("type_settings.case.title_case"),
              htmlAttributes: {
                "data-tooltip-show-above": !0,
                onMouseEnter: () => n("TITLE", "ENTER"),
                onMouseLeave: () => n("TITLE", "LEAVE")
              }
            }), a]
          })
        })]
      })
    });
    return i ? jsxs(Zk, {
      children: [jsx(fI, {
        children: jsx(_$$Q, {
          extended: !0,
          children: renderI18nText("type_settings.letter_case")
        })
      }), s, tq("PCAP"), tq("CASE"), tq("CPSP"), tq("TITL"), tq("UNIC"), jsx("div", {
        className: tl
      })]
    }) : s;
  };
  let tK = () => {
    var t;
    let i;
    let n = e.fontVariationAxes;
    if (!n) return;
    t = e.fontVariations;
    i = {};
    let a = isMixedArray(t) ? i = t.reduce((e, t, i) => {
      let n = {
        ...e
      };
      for (let r in t.forEach(t => {
        let r = El(t.axisTag);
        0 === i ? e[r] = {
          value: t.value,
          axisName: t.axisName
        } : (delete n[r], e[r] && e[r].value === t.value || (e[r] = {
          value: MIXED_MARKER,
          axisName: t.axisName
        }));
      }), n) e[r].value = MIXED_MARKER;
      return e;
    }, {}) : (t.forEach(e => {
      i[El(e.axisTag)] = {
        value: e.value,
        axisName: e.axisName
      };
    }), i);
    return jsx(t2, {
      variationAxes: n,
      variationAxisTickValues: e.fontVariationAxisTickValues,
      axisValues: a,
      onChange: (t, i, r) => {
        let s = [];
        let o = {};
        n.forEach(n => {
          if (i !== OPTICAL_SIZE_AXIS_TAG && n.tag === OPTICAL_SIZE_AXIS_TAG && !e.detachOpticalSize) return;
          i !== OPTICAL_SIZE_AXIS_TAG || e.detachOpticalSize || (o.detachOpticalSizeFromFontSize = !0);
          let r = i === n.tag ? t : a[n.tag]?.value ?? n.value;
          isValidValue(r) && s.push({
            axisTag: cx(n.tag),
            axisName: n.name,
            value: r
          });
        });
        o.fontVariations = s;
        s.length && fullscreenValue.updateSelectionProperties(o, {
          shouldCommit: r
        });
      },
      previewHoverHandler: (e, t) => {
        Y(t);
        "ENTER" === t && (d(TypographySettings.FONT_VARIATIONS), u(null), g(e), m(!1));
      },
      fontFamily: e.fontFamily,
      fontSize: e.fontSize
    });
  };
  let tY = (e, t) => {
    let i = _$$G.OpenTypeFeatureGroups.filter(t => t.group_name === e)[0].tags.map(e => tq(e)).filter(e => e);
    if (0 !== i.length) return jsxs(Zk, {
      children: [jsx(fI, {
        children: jsx(_$$Q, {
          extended: !0,
          children: t
        })
      }), i, jsx("div", {
        className: tl
      })]
    });
  };
  let tq = t => {
    if (!V(t)) return;
    let i = z(t);
    let n = (e, i) => {
      Y(i);
      "ENTER" === i && ("FRAC" === t ? (d("ON" === e ? TypographySettings.FRACTIONS_ON : TypographySettings.FRACTIONS_OFF), u(null)) : (d("ON" === e ? TypographySettings.OPENTYPE_FEATURE_ON : TypographySettings.OPENTYPE_FEATURE_OFF), u(t)), m(!1));
    };
    let a = w.supported;
    let s = w.applicable;
    let o = "FRAC" === t ? getI18nString("type_settings.fractions") : (i ? s : a)[t] || _$$G.OpenTypeFeatureNames[t];
    let l = "toggleOpenTypeFeature" + ("FRAC" === t ? "Fractions" : t);
    let c = "string" == typeof o && o.length > 25;
    return jsxs(fI, {
      heightMultiplier: c ? 1.25 : void 0,
      children: [i ? jsx(JU, {
        className: tn,
        children: o
      }) : jsx(UZ, {
        "data-tooltip-type": KindEnum.TEXT,
        "data-tooltip": getI18nString("type_settings.not_applicable_for_selected_text"),
        "data-tooltip-timeout-delay": 1200,
        "data-tooltip-show-above": !0,
        className: tn,
        children: o
      }), jsx("span", {
        className: tr,
        children: jsxs(bL, {
          value: "FRAC" === t ? eZ() : eX(t),
          onChange: e => {
            if ("FRAC" === t) {
              fullscreenValue.updateSelectionProperties({
                fontVariantNumericFraction: "ON" === e ? "STACKED" : "NORMAL"
              });
              return;
            }
            switch (t) {
              case "DLIG":
                fullscreenValue.updateSelectionProperties({
                  fontVariantDiscretionaryLigatures: "ON" === e
                });
                break;
              case "HLIG":
                fullscreenValue.updateSelectionProperties({
                  fontVariantHistoricalLigatures: "ON" === e
                });
                break;
              default:
                "ON" === e && eW(t, e);
                "OFF" === e && eW(t, e);
            }
          },
          readonly: k,
          legend: jsx(_$$q, {
            children: o
          }),
          recordingKey: generateRecordingKey(e, l),
          children: [jsx(c$, {
            value: "OFF",
            icon: jsx(_$$f, {}),
            "aria-label": getI18nString("settings_tab.disabled"),
            htmlAttributes: {
              "data-tooltip-show-above": !0,
              onMouseEnter: () => n("OFF", "ENTER"),
              onMouseLeave: () => n("OFF", "LEAVE")
            }
          }), jsx(c$, {
            value: "ON",
            icon: jsx(_$$r, {}),
            "aria-label": getI18nString("settings_tab.enabled"),
            htmlAttributes: {
              "data-tooltip-show-above": !0,
              onMouseEnter: () => n("ON", "ENTER"),
              onMouseLeave: () => n("ON", "LEAVE")
            }
          })]
        })
      })]
    }, l);
  };
  let t$ = () => {
    let t = (e, t) => {
      Y(t);
      "ENTER" === t && (d("NORMAL" === e ? TypographySettings.NUMERIC_POSITION_NORMAL : "SUB" === e ? TypographySettings.NUMERIC_POSITION_SUB : "SUPER" === e ? TypographySettings.NUMERIC_POSITION_SUPER : TypographySettings.EMPTY), u(null), m(!1));
    };
    return jsxs(fI, {
      children: [jsx(JU, {
        className: tt,
        children: renderI18nText("type_settings.position")
      }), jsx("span", {
        className: ta,
        children: jsxs(bL, {
          value: isValidValue(e.fontVariantPosition) ? e.fontVariantPosition : void 0,
          onChange: eH,
          readonly: k,
          legend: jsx(_$$q, {
            children: renderI18nText("type_settings.position")
          }),
          recordingKey: generateRecordingKey(e, "numericPosition"),
          children: [jsx(c$, {
            value: "SUB",
            icon: jsx(ex, {}),
            "aria-label": getI18nString("type_settings.subscript"),
            htmlAttributes: {
              "data-tooltip-show-above": !0,
              onMouseEnter: () => t("SUB", "ENTER"),
              onMouseLeave: () => t("SUB", "LEAVE")
            }
          }), jsx(c$, {
            value: "NORMAL",
            icon: jsx(eS, {}),
            "aria-label": getI18nString("type_settings.normal"),
            htmlAttributes: {
              "data-tooltip-show-above": !0,
              onMouseEnter: () => t("NORMAL", "ENTER"),
              onMouseLeave: () => t("NORMAL", "LEAVE")
            }
          }), jsx(c$, {
            value: "SUPER",
            icon: jsx(ew, {}),
            "aria-label": getI18nString("type_settings.superscript"),
            htmlAttributes: {
              "data-tooltip-show-above": !0,
              onMouseEnter: () => t("SUPER", "ENTER"),
              onMouseLeave: () => t("SUPER", "LEAVE")
            }
          })]
        })
      })]
    });
  };
  let tZ = () => {
    let t = [];
    let i = V("LNUM");
    let n = V("ONUM");
    let a = V("PNUM");
    let s = V("TNUM");
    let o = z("LNUM") || z("ONUM") || z("PNUM") || z("TNUM");
    let l = e => "ORIGINAL" === e ? {
      fontVariantNumericFigure: "NORMAL",
      fontVariantNumericSpacing: "NORMAL"
    } : {
      fontVariantNumericFigure: "UPPER_PROPORTIONAL" === e || "UPPER_MONOSPACE" === e ? "LINING" : "OLDSTYLE",
      fontVariantNumericSpacing: "UPPER_PROPORTIONAL" === e || "LOWER_PROPORTIONAL" === e ? "PROPORTIONAL" : "TABULAR"
    };
    let c = (e, t) => {
      let i;
      switch (Y(t), e) {
        case "ORIGINAL":
          i = TypographySettings.NUMERIC_STYLE_ORIGINAL;
          break;
        case "UPPER_PROPORTIONAL":
          i = TypographySettings.NUMERIC_STYLE_UPPER_PROPORTIONAL;
          break;
        case "LOWER_PROPORTIONAL":
          i = TypographySettings.NUMERIC_STYLE_LOWER_PROPORTIONAL;
          break;
        case "UPPER_MONOSPACE":
          i = TypographySettings.NUMERIC_STYLE_UPPER_MONOSPACE;
          break;
        case "LOWER_MONOSPACE":
          i = TypographySettings.NUMERIC_STYLE_LOWER_MONOSPACE;
          break;
        default:
          i = TypographySettings.EMPTY;
      }
      "ENTER" === t && (d(i), u(null), m(!1));
    };
    let p = jsx(c$, {
      value: "LOWER_PROPORTIONAL",
      icon: jsx(eC, {}),
      "aria-label": getI18nString("type_settings.numeric.proportional_lowercase_old_style"),
      htmlAttributes: {
        "data-tooltip-show-above": !0,
        onMouseEnter: () => c("LOWER_PROPORTIONAL", "ENTER"),
        onMouseLeave: () => c("LOWER_PROPORTIONAL", "LEAVE")
      }
    }, "fontVariantNumericFigureAndSpacingLOWER_PROPORTIONAL");
    let h = jsx(c$, {
      value: "UPPER_PROPORTIONAL",
      icon: jsx(eT, {}),
      "aria-label": getI18nString("type_settings.numeric.proportional_uppercase_lining"),
      htmlAttributes: {
        "data-tooltip-show-above": !0,
        onMouseEnter: () => c("UPPER_PROPORTIONAL", "ENTER"),
        onMouseLeave: () => c("UPPER_PROPORTIONAL", "LEAVE")
      }
    }, "fontVariantNumericFigureAndSpacingUPPER_PROPORTIONAL");
    let g = jsx(c$, {
      value: "UPPER_MONOSPACE",
      icon: jsx(ek, {}),
      "aria-label": getI18nString("type_settings.numeric.monospace_uppercase_lining"),
      htmlAttributes: {
        "data-tooltip-show-above": !0,
        onMouseEnter: () => c("UPPER_MONOSPACE", "ENTER"),
        onMouseLeave: () => c("UPPER_MONOSPACE", "LEAVE")
      }
    }, "fontVariantNumericFigureAndSpacingUPPER_MONOSPACE");
    let _ = jsx(c$, {
      value: "LOWER_MONOSPACE",
      icon: jsx(eR, {}),
      "aria-label": getI18nString("type_settings.monospace_lowercase_old_style"),
      htmlAttributes: {
        "data-tooltip-show-above": !0,
        onMouseEnter: () => c("LOWER_MONOSPACE", "ENTER"),
        onMouseLeave: () => c("LOWER_MONOSPACE", "LEAVE")
      }
    }, "fontVariantNumericFigureAndSpacingLOWER_MONOSPACE");
    let A = jsx(c$, {
      value: "ORIGINAL",
      icon: jsx(_$$f, {}),
      "aria-label": getI18nString("type_settings.numeric.font_default"),
      htmlAttributes: {
        "data-tooltip-show-above": !0,
        onMouseEnter: () => c("ORIGINAL", "ENTER"),
        onMouseLeave: () => c("ORIGINAL", "LEAVE")
      }
    }, "fontVariantNumericFigureAndSpacingORIGINAL");
    let y = jsx(c$, {
      value: "ORIGINAL",
      icon: jsx(eT, {}),
      "aria-label": getI18nString("type_settings.numeric.proportional_uppercase_lining"),
      htmlAttributes: {
        "data-tooltip-show-above": !0,
        onMouseEnter: () => c("ORIGINAL", "ENTER"),
        onMouseLeave: () => c("ORIGINAL", "LEAVE")
      }
    }, "fontVariantNumericFigureAndSpacingUPPER_PROPORTIONAL");
    let b = jsx(c$, {
      value: "ORIGINAL",
      icon: jsx(ek, {}),
      "aria-label": getI18nString("type_settings.numeric.monospace_uppercase_lining"),
      htmlAttributes: {
        "data-tooltip-show-above": !0,
        onMouseEnter: () => c("ORIGINAL", "ENTER"),
        onMouseLeave: () => c("ORIGINAL", "LEAVE")
      }
    }, "fontVariantNumericFigureAndSpacingUPPER_MONOSPACE");
    let v = jsx(c$, {
      value: "ORIGINAL",
      icon: jsx(eC, {}),
      "aria-label": getI18nString("type_settings.numeric.proportional_lowercase_old_style"),
      htmlAttributes: {
        "data-tooltip-show-above": !0,
        onMouseEnter: () => c("ORIGINAL", "ENTER"),
        onMouseLeave: () => c("ORIGINAL", "LEAVE")
      }
    }, "fontVariantNumericFigureAndSpacingLOWER_PROPORTIONAL");
    (i || n || a || s) && (a || s ? i || n ? (t.push(A), (a || i) && t.push(h), (s || i) && t.push(g), (a || n) && t.push(p), (s || n) && t.push(_)) : a && s ? (t.push(A), t.push(h), t.push(g)) : a ? s || (t.push(h), t.push(b)) : (t.push(y), t.push(g)) : i && n ? (t.push(A), t.push(h), t.push(p)) : i ? n || (t.push(h), t.push(v)) : (t.push(y), t.push(p)));
    return jsxs(Zk, {
      children: [jsx(fI, {
        children: jsx(_$$Q, {
          extended: !0,
          children: renderI18nText("type_settings.numbers")
        })
      }), i || n || a || s ? jsxs(fI, {
        children: [o ? jsx(JU, {
          className: tt,
          children: renderI18nText("type_settings.numeric.style")
        }) : jsx(UZ, {
          "data-tooltip-type": KindEnum.TEXT,
          "data-tooltip": getI18nString("type_settings.not_applicable_for_selected_text"),
          "data-tooltip-timeout-delay": 1200,
          "data-tooltip-show-above": !0,
          className: tt,
          children: renderI18nText("type_settings.numeric.style")
        }), jsx("span", {
          className: 2 === t.length ? tr : 3 === t.length ? ta : 4 === t.length ? ts : to,
          children: jsx(bL, {
            value: isValidValue(eK()) ? eK() : void 0,
            onChange: e => {
              fullscreenValue.updateSelectionProperties(l(e));
            },
            readonly: k,
            legend: jsx(_$$q, {
              children: renderI18nText("type_settings.numeric.style")
            }),
            recordingKey: generateRecordingKey(e, "numericStyle"),
            children: t
          })
        })]
      }) : "", t$(), tq("FRAC"), tq("AFRC"), tq("ZERO"), jsx("div", {
        className: tl
      })]
    });
  };
  let tX = () => {
    let t = [];
    t0 || t.push("Basics");
    tw && (t.push("Details"), e.fontVariationAxes?.length && t.push("Variable"));
    return t;
  };
  let tQ = () => {
    let t = e => {
      switch (e) {
        case "Basics":
          return getI18nString("fullscreen.type_settings.basic_tab");
        case "Details":
          return getI18nString("fullscreen.type_settings.details_tab");
        case "Variable":
          return getI18nString("fullscreen.type_settings.variable_tab");
        default:
          return e;
      }
    };
    let i = getFeatureFlags().ce_tv_fpl_type_settings ? jsxs(Fragment, {
      children: [jsx(DialogHiddenTitle, {
        children: getI18nString("type_settings.type_settings")
      }), jsx(DialogTabStrip, {
        manager: e.tabManager,
        children: tX().map(i => jsx(_$$t.Tab, {
          ...e.tabPropsMap[i],
          children: t(i)
        }, i))
      })]
    }) : jsx("div", {
      className: "type_settings--tabsHeader--AWpX1",
      children: jsx(_$$t.TabStrip, {
        manager: e.tabManager,
        children: tX().map(i => jsx(_$$t.Tab, {
          ...e.tabPropsMap[i],
          children: t(i)
        }, i))
      })
    });
    return jsx(tW, {
      tabs: tX(),
      onChange: t => {
        e.setActiveTab(t);
      },
      activeTab: e.activeTab,
      inTextUnderlineDrillInView: _,
      onDrillInViewChange: () => {
        A(!1);
      },
      tabContent: i
    });
  };
  let tJ = t => {
    let i = e => jsx(_$$P2, {
      height: 322,
      children: e
    });
    return _ ? jsx(_$$e2, {
      wrapper: i,
      condition: !getFeatureFlags().ce_tv_fpl_type_settings,
      children: jsx("div", {
        children: tz()
      })
    }) : jsx(_$$e2, {
      wrapper: i,
      condition: !getFeatureFlags().ce_tv_fpl_type_settings,
      children: jsxs(Fragment, {
        children: [jsx(_$$t.TabPanel, {
          ...e.tabPanelPropsMap.Basics,
          children: t1(t)
        }), jsx(_$$t.TabPanel, {
          ...e.tabPanelPropsMap.Details,
          children: t6()
        }), jsx(_$$t.TabPanel, {
          ...e.tabPanelPropsMap.Variable,
          children: t9()
        })]
      })
    });
  };
  let t0 = vK();
  let t1 = e => jsx("div", {
    children: jsxs("div", {
      children: [jsxs(Zk, {
        children: [tk(), !t0 && tP(), tH(e, !1)]
      }), !t0 && jsxs(Zk, {
        className: te,
        children: [tU(), tF(), tL(), !!R && tR(), jsx("div", {
          className: tl
        })]
      }), !tw && jsx(Zk, {
        className: te,
        children: t$()
      })]
    })
  });
  let t6 = () => jsxs("div", {
    children: [tw && tG(), tw && tH(ie), tw && tZ(), tw && tY("Letterforms", getI18nString("type_settings.letterforms")), tw && tY("Stylistic sets", getI18nString("type_settings.stylistic_sets")), tw && tY("Character variants", getI18nString("type_settings.character_variants")), tw && tY("Math", getI18nString("type_settings.math")), tw && tY("Horizontal spacing", getI18nString("type_settings.horizontal_spacing")), tw && tY("Writing direction", getI18nString("type_settings.writing_direction")), tw && tY("More features", getI18nString("type_settings.more_features")), tT && e8(), tT && t_()]
  });
  let t9 = () => jsx("div", {
    children: tw && tK()
  });
  let ie = "SMALL" === e.fontVariantCaps ? "SMALL_CAPS" : "ALL_SMALL" === e.fontVariantCaps ? "SMALL_CAPS_FORCED" : e.textCase;
  let it = new Point(e.picker.initialX, e.picker.initialY);
  let ii = jsxs(Fragment, {
    children: [jsx(tj, {
      previewStyleOverride: o,
      previewOpenTypeFeature: c,
      previewVariation: h,
      shouldDrawBoundingBox: p,
      availableOTFeaturesForSelection: w.applicable
    }), tJ(ie)]
  });
  return getFeatureFlags().ce_tv_fpl_type_settings ? jsx(_$$bL, {
    onClose: e => {
      "escape" === e.source && B || "outside" === e.source || j();
    },
    htmlAttributes: {
      "data-testid": "type-settings-modal"
    },
    recordingKey: e.recordingKey,
    width: $6,
    defaultPosition: it,
    children: jsxs(DialogContents, {
      style: {
        height: 506
      },
      children: [jsx(DialogHeader, {
        children: tQ()
      }), jsx(DialogBody, {
        padding: 0,
        style: {
          display: "flex",
          flexDirection: "column"
        },
        scrolling: getFeatureFlags().fpl_window_scroll_container ? void 0 : "none",
        children: getFeatureFlags().fpl_window_scroll_container ? ii : jsx(ScrollContainer, {
          children: ii
        })
      })]
    })
  }) : jsxs(Ao, {
    closeButtonClassName: "type_settings--closeButton--pwMCE",
    dataTestId: "type-settings-modal",
    dragHeaderOnly: !0,
    headerClassName: "type_settings--tabbedModalHeader--gEg50",
    headerSize: "small",
    ignoreCloseShortcut: B,
    initialPosition: it,
    initialWidth: $6,
    onClose: j,
    recordingKey: e.recordingKey,
    title: tQ(),
    children: [jsx(tj, {
      previewStyleOverride: o,
      previewOpenTypeFeature: c,
      previewVariation: h,
      shouldDrawBoundingBox: p,
      availableOTFeaturesForSelection: w.applicable
    }), jsx("div", {
      className: "type_settings--tabContentContainer--IUA-3 type_settings--contentContainer--3BGiD",
      children: tJ(ie)
    })]
  });
}
let t7 = forwardRef(function (e, t) {
  return jsxs(fI, {
    ref: t,
    children: [jsx(JU, {
      className: ti,
      children: e.label
    }), jsx("div", {
      className: td,
      children: e.input
    })]
  });
});
let t8 = forwardRef(function (e, t) {
  let i = useDispatch();
  let {
    smallNudgeAmount,
    bigNudgeAmount
  } = sT();
  return jsx($j, {
    bigNudgeAmount,
    className: eP()({
      "type_settings--scrubbableControlWithVariables--8UGKC": e.hasVariablesEntrypoint
    }),
    "data-tooltip": e.dataTooltip,
    "data-tooltip-type": KindEnum.TEXT,
    disabled: e.disabled,
    dispatch: i,
    forwardedRef: t,
    inputClassName: eP()(tc, {
      "type_settings--numericTypeSettingsInputWithVariables--IywR-": e.hasVariablesEntrypoint
    }),
    isTokenizable: !0,
    min: e.min,
    noBorderOnHover: e.noBorderOnHover,
    onValueChange: e.onValueChange,
    recordingKey: e.recordingKey,
    smallNudgeAmount,
    tooltipForScreenReadersOnly: !0,
    value: e.value
  });
});
let io = memo(function (e) {
  return jsx("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: jsx("path", {
      fill: "var(--color-icon)",
      fillRule: "evenodd",
      d: "M10 6a3 3 0 0 0 0 6h2v2.5a.5.5 0 0 0 1 0V7h1v7.5a.5.5 0 0 0 1 0v-8a.5.5 0 0 0-.5-.5zm0 1h2v4h-2a2 2 0 1 1 0-4m-2.5 9a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1z",
      clipRule: "evenodd"
    })
  });
});
let il = memo(function (e) {
  return jsx("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: jsx("path", {
      fill: "var(--color-icon)",
      fillRule: "evenodd",
      d: "M10 6a3 3 0 0 0 0 6h2v2.5a.5.5 0 0 0 1 0V7h1v5.5a.5.5 0 0 0 1 0v-6a.5.5 0 0 0-.5-.5zm0 1h2v4h-2a2 2 0 1 1 0-4m6.854 9.146-2-2a.5.5 0 0 0-.708.708L15.293 16H7.5a.5.5 0 0 0 0 1h7.793l-1.147 1.146a.5.5 0 0 0 .708.708l2-2a.5.5 0 0 0 0-.708",
      clipRule: "evenodd"
    })
  });
});
let id = memo(function (e) {
  return jsx("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: jsx("path", {
      fill: "var(--color-icon)",
      fillRule: "evenodd",
      d: "M10 6a3 3 0 0 0 0 6h2v2.5a.5.5 0 0 0 1 0V7h1v7.5a.5.5 0 0 0 1 0v-8a.5.5 0 0 0-.5-.5zm0 1h2v4h-2a2 2 0 1 1 0-4m-.854 7.146a.5.5 0 0 1 .708.708L8.707 16H16.5a.5.5 0 0 1 0 1H8.707l1.147 1.146a.5.5 0 0 1-.708.708l-2-2a.5.5 0 0 1 0-.708z",
      clipRule: "evenodd"
    })
  });
});
class ip extends PureComponent {
  constructor() {
    super(...arguments);
    this.onClick = () => {
      isInvalidValue(this.props.directionality) || "RTL" === this.props.directionality ? fullscreenValue.triggerActionInUserEditScope("text-set-directionality-ltr") : fullscreenValue.triggerActionInUserEditScope("text-set-directionality-rtl");
    };
  }
  render() {
    let e;
    e = isInvalidValue(this.props.directionality) ? jsx(io, {}) : "LTR" === this.props.directionality ? jsx(il, {}) : jsx(id, {});
    return jsx("span", {
      className: gb,
      children: jsx(K0, {
        onClick: this.onClick,
        recordingKey: generateRecordingKey(this.props, "bidiSwitcher"),
        "data-tooltip-type": KindEnum.TEXT,
        "data-tooltip": getI18nString("fullscreen.type_panel.switch_text_direction"),
        children: e
      })
    });
  }
}
let iE = "font-agent-update-dismissed";
export function $$ix0(e) {
  let t = useSelector(e => e.mirror.appModel.currentPage);
  let i = selectWithShallowEqual(e => Cy(e.mirror));
  let n = "text-panel" === useAtomWithSubscription($i);
  let a = vK();
  let [o, d, c] = _$$t.useTabs({
    Basics: !0,
    Details: !0,
    Variable: !0
  }, {
    recordingKey: "TypeDetailsTab"
  });
  return jsx(iS, {
    ...e,
    pageId: t,
    selectedNodeIds: i,
    version: "ui3",
    showBlueBorder: n,
    tabPropsMap: o,
    tabPanelPropsMap: d,
    tabManager: c,
    isOnlyTextPath: a
  });
}
class iS extends PureComponent {
  constructor(e) {
    super(e);
    this.context = null;
    this.versionsForStyles = {};
    this.showFontAgentCTA = Kk() && !desktopAPIInstance && (BrowserInfo.mac || BrowserInfo.windows) && !BrowserInfo.isMobileBrowser;
    this.getTickAxisValues = memoizeByArgs(e => isInvalidValue(e) ? {} : MK(e, this.props.fonts[e], this.versionsForStyles[e]));
    this.stopPropagation = e => e.stopPropagation();
    this.onMouseDown = e => {
      fullscreenValue.deselectProperty();
      this.shownSettings() && e.stopPropagation();
    };
    this.alignmentRowRef = createRef();
    this.paragraphRowRef = createRef();
    this.lineHeightRowRef = createRef();
    this.stylePickerRowRef = createRef();
    this.stylePanelRef = createRef();
    this.fontStyleInputRef = createRef();
    this.fontStyleVariablePickerHandleRef = createRef();
    this.shownSettings = () => {
      let e = this.isInStyleModal() ? h2 : AB;
      return this.props.pickerShown && this.props.pickerShown.id === e ? this.props.pickerShown : null;
    };
    this.maybeUnsetVariableTab = () => {
      let e = LM({
        fontFamily: this.props.fontFamily,
        fontStyle: this.props.fontStyle,
        fonts: this.props.fonts,
        versionsForStyles: this.versionsForStyles
      });
      e?.variationAxes || "Variable" !== this.state.activeTab || this.setActiveTab("Basics");
    };
    this.toggleSettings = e => {
      let t = this.isInStyleModal();
      if (this.shownSettings()) this.props.dispatch(XE());else if (e.current) {
        let i = cn(e.current);
        let n = t ? h2 : AB;
        this.props.dispatch(u1({
          id: n,
          initialX: i.x,
          initialY: i.y
        }));
        this.maybeUnsetVariableTab();
        let r = this.getIsStyleConsumer();
        let a = this.props.isOnlyTextPath;
        r && "Basics" !== this.state.activeTab ? this.setActiveTab("Basics") : a && this.setActiveTab("Details");
        !t && (this.props.stylePickerShown.isShown && this.props.dispatch(Uv()), this.props.stylePreviewShown.isShown && this.props.dispatch(sw()));
      }
    };
    this.toggleSettingsFromAlignmentRow = () => {
      this.toggleSettings(this.alignmentRowRef);
    };
    this.toggleSettingsFromParagraphRow = () => this.toggleSettings(this.paragraphRowRef);
    this.toggleSettingsFromLineHeightRow = () => this.toggleSettings(this.lineHeightRowRef);
    this.toggleSettingsFromStylePicker = () => this.toggleSettings(this.stylePickerRowRef);
    this.onFontFamilyChange = (e, t, i) => {
      getFeatureFlags().ce_properties_panel_tracking && trackEventAnalytics("editor_type_panel_change", {
        key: "fontFamily"
      });
      debug(!(void 0 === e && void 0 === t), "onFontFamilyChange called without a fontFamily or previewFontFamily");
      this.maybeUnsetVariableTab();
      PK({
        fontFamily: e,
        previewFontFamily: t,
        lineHeightInContext: a6(this.props),
        fonts: this.props.fonts,
        fontVariations: this.props.fontVariations,
        versionsForStyles: this.versionsForStyles,
        shouldCommit: i
      });
      getFeatureFlags().ce_font_picker_metrics && trackEventAnalytics("font picker font selected", {
        pageId: this.props.pageId,
        nodeIds: this.props.selectedNodeIds,
        section: "",
        font: e
      });
      a2("fontFamily");
    };
    this.onFontStyleChange = (e, t, i) => {
      getFeatureFlags().ce_properties_panel_tracking && trackEventAnalytics("editor_type_panel_change", {
        key: "fontStyle"
      });
      zD({
        fontStyle: e,
        shouldCommit: t,
        fontVariations: i,
        lineHeightInContext: a6(this.props),
        showVariableFontSettings: () => {
          this.shownSettings() || this.toggleSettingsFromStylePicker();
          trackEventAnalytics("Variable Font Show Panel", {
            source: "font-picker"
          });
          this.setActiveTab("Variable");
        },
        showTypeVariablePicker: () => {
          this.fontStyleVariablePickerHandleRef.current?.showVariablePicker();
        }
      });
      e !== nb() && e !== wM() && a2("fontStyle");
    };
    this.onChangeParagraphSpacing = (e, t) => {
      fullscreenValue.updateSelectionProperties({
        paragraphSpacing: e
      }, {
        shouldCommit: t
      });
      h$("PARAGRAPH_SPACING", t, "panel");
    };
    this.shouldRenderListSpacing = () => !this.isInStyleModal() && isValidValue(this.props.textLineType) && "PLAIN" !== this.props.textLineType;
    this.onChangeListSpacing = (e, t) => {
      fullscreenValue.updateSelectionProperties({
        listSpacing: e
      }, {
        shouldCommit: t
      });
      h$("LIST_SPACING", t);
    };
    this.renderAdvancedTypePicker = e => {
      let t = this.shownSettings();
      if (!t) return null;
      let i = !valueOrFallback(this.props.leadingTrimEnabled, !1);
      let n = LM({
        fontFamily: this.props.fontFamily,
        fontStyle: this.props.fontStyle,
        fonts: this.props.fonts,
        versionsForStyles: this.versionsForStyles
      });
      return jsx(t6, {
        activeTab: this.props.tabManager.activeTab,
        detachOpticalSize: this.props.detachOpticalSize,
        editModeType: this.props.editModeType,
        enabledTypePanelControls: this.props.enabledTypePanelControls,
        fontFamily: this.props.fontFamily,
        fontSize: this.props.fontSize,
        fontVariantCaps: this.props.fontVariantCaps,
        fontVariantDiscretionaryLigatures: this.props.fontVariantDiscretionaryLigatures,
        fontVariantHistoricalLigatures: this.props.fontVariantHistoricalLigatures,
        fontVariantNumericFigure: this.props.fontVariantNumericFigure,
        fontVariantNumericFraction: this.props.fontVariantNumericFraction,
        fontVariantNumericSpacing: this.props.fontVariantNumericSpacing,
        fontVariantPosition: this.props.fontVariantPosition,
        fontVariationAxes: n?.variationAxes,
        fontVariationAxisTickValues: this.getTickAxisValues(this.props.fontFamily),
        fontVariations: this.props.fontVariations,
        hangingList: this.props.hangingList,
        hangingPunctuation: this.props.hangingPunctuation,
        isHangingPunctuationApplicableToSelection: this.props.isHangingPunctuationApplicableToSelection,
        isStyleConsumer: e,
        leadingTrim: this.props.leadingTrim,
        leadingTrimDisabled: i,
        listSpacing: this.props.listSpacing,
        missingFont: this.props.missingFont,
        paragraphIndent: this.props.paragraphIndent,
        paragraphSpacing: this.props.paragraphSpacing,
        picker: t,
        recordingKey: generateRecordingKey(this.props, "typeSettings"),
        setActiveTab: e => this.setActiveTab(e),
        shouldUseSelectedStyleProperties: this.props.shouldUseSelectedStyleProperties,
        tabManager: this.props.tabManager,
        tabPanelPropsMap: this.props.tabPanelPropsMap,
        tabPropsMap: this.props.tabPropsMap,
        textAlignHorizontal: this.props.textAlignHorizontal,
        textAutoResize: this.props.textAutoResize,
        textBidiVersion: this.props.textBidiVersion,
        textCase: this.props.textCase,
        textDecoration: this.props.textDecoration,
        textDecorationSkipInk: this.props.textDecorationSkipInk,
        textDecorationStyle: this.props.textDecorationStyle,
        textDecorationThickness: this.props.textDecorationThickness,
        textExplicitLayoutVersion: this.props.textExplicitLayoutVersion,
        textLineType: this.props.textLineType,
        textUnderlineOffset: this.props.textUnderlineOffset,
        textUserLayoutVersion: this.props.textUserLayoutVersion,
        wholeNodeTextLineType: this.props.wholeNodeTextLineType
      });
    };
    this.renderIconButtons = ({
      isEditingStyle: e
    }) => {
      let t = "ui3" === this.props.version;
      let i = [];
      if (e) {
        let e = this.isInStyleModal() ? "style-preview-" : "";
        let {
          onClick,
          recordingKey,
          ...s
        } = {
          onClick: t ? this.toggleSettingsFromLineHeightRow : this.toggleSettingsFromParagraphRow,
          onMouseDown: this.stopPropagation,
          recordingKey: generateRecordingKey(this.props, e + "settings"),
          "data-tooltip-type": KindEnum.TEXT,
          "data-tooltip": getI18nString("fullscreen.type_panel.type_details")
        };
        i.push(jsx("span", {
          className: gb,
          children: jsx(_$$d, {
            "aria-expanded": !!this.shownSettings(),
            "aria-label": getI18nString("fullscreen.type_panel.type_details"),
            onClick,
            recordingKey,
            htmlAttributes: {
              ...s
            },
            children: jsx(_$$J, {})
          })
        }));
      } else {
        if (this.props.hasHadRTLText && i.push(jsx(ip, {
          directionality: this.props.textDirectionality
        })), !this.props.isTextPropReferencedByAnyNodeInSelection && this.props.textVariablesExist && !t) {
          let e = this.props.mainStyle ? this.stylePanelRef : t ? this.lineHeightRowRef : this.paragraphRowRef;
          i.push(jsx(_$$E, {
            name: "open_variable_picker_button",
            children: jsx(Ig, {
              children: jsx(EI, {
                elementRef: e,
                dataTestId: "text-variable-binding-button",
                recordingKey: generateRecordingKey(this.props.recordingKey, "variablePickerButton")
              })
            })
          }));
        }
        let {
          onClick,
          recordingKey,
          "aria-label": a,
          ...s
        } = {
          onClick: this.toggleSettingsFromAlignmentRow,
          onMouseDown: this.stopPropagation,
          recordingKey: generateRecordingKey(this.props, "settings"),
          "data-onboarding-key": "type-panel-settings",
          "data-tooltip-type": KindEnum.TEXT,
          "data-tooltip": getI18nString("fullscreen.type_panel.type_settings"),
          "aria-label": getI18nString("fullscreen.type_panel.type_settings")
        };
        let o = jsx(_$$A, {});
        i.push(jsx(_$$E, {
          name: "open_type_settings_button",
          children: jsx("span", {
            className: gb,
            children: jsx(_$$d, {
              "aria-expanded": !!this.shownSettings(),
              "aria-label": a,
              recordingKey,
              onClick,
              htmlAttributes: {
                ...s
              },
              children: o
            })
          })
        }));
      }
      return i;
    };
    this.renderTextPathFlipButton = () => jsx(_$$E, {
      name: "flip_text_path_button",
      children: jsx("span", {
        className: gb,
        children: jsx(_$$d, {
          "aria-expanded": !1,
          "aria-label": getI18nString("fullscreen.type_panel.text_on_a_path_flip"),
          recordingKey: generateRecordingKey(this.props, "flipTextPathButton"),
          onClick: () => {
            getFeatureFlags().ce_properties_panel_tracking && trackEventAnalytics("editor_type_panel_change", {
              key: "textPathStart",
              value: "[flip]"
            });
            permissionScopeHandler.user("flip-text-path-orientation", () => {
              TextPathStartHelpers?.flipTextPathStartForSelection();
            });
          },
          children: jsx(m, {})
        })
      })
    });
    this.addProperty = e => {
      permissionScopeHandler.user("add-text-property", () => Fullscreen.clobberSelectedTextStyles());
    };
    this.dismissFontAgentPrompt = () => {
      this.setState({
        fontAgentUpdatePromptDismissed: !0
      });
      let e = new Date().getTime();
      localStorageRef?.setItem(iE, `${e + 6048e5}`);
    };
    this.hasMixedStyles = () => {
      if (null == this.props.inheritStyleKey) return !1;
      let e = null;
      for (let t in this.props.sceneGraphSelection) {
        let i = this.props.sceneGraph.get(t);
        if (!i || "TEXT" !== i.type) continue;
        let n = i.inheritedTextStyle;
        let r = n ? n.key : n3("NONE");
        if (null == e) e = r;else if (!n || e !== n.key) return !0;
      }
      return !1;
    };
    this.getStylePanelProps = () => {
      let e = this.getHasMixedProperties();
      let t = valueOrFallback(this.props.missingFont, !0);
      return yT({
        ...this.props,
        styleType: "TEXT",
        inheritStyleKeyField: "inheritTextStyleKey",
        hasMixedProperties: e,
        hasMissingFont: t
      });
    };
    this.getIsStyleConsumer = () => this.props.inheritStyleKey === MIXED_MARKER || !!bi({
      library: this.props.library,
      inheritStyleKey: this.props.inheritStyleKey,
      inheritStyleID: this.props.inheritStyleID
    });
    this.getHasMixedPropertiesInner = (e = !1, t = !1) => {
      let i = isValidValue(this.props.fontVariantCaps) && isValidValue(this.props.fontVariantDiscretionaryLigatures) && isValidValue(this.props.fontVariantHistoricalLigatures) && isValidValue(this.props.fontVariantNumericFigure) && isValidValue(this.props.fontVariantNumericFraction) && isValidValue(this.props.fontVariantNumericSpacing);
      let n = isValidValue(this.props.fontFamily) && (e || isValidValue(this.props.fontStyle)) && (t || isValidValue(this.props.fontSize)) && (t || isValidValue(this.props.lineHeight)) && (t || isValidValue(this.props.letterSpacing)) && isValidValue(this.props.paragraphIndent) && (t || isValidValue(this.props.paragraphSpacing)) && isValidValue(this.props.listSpacing);
      return i && n;
    };
    this.getHasMixedProperties = () => {
      let e = this.props.areFontStylesUniformOrOnlyMixedDueToTextStyleOverrides && this.getIsStyleConsumer();
      return !this.getHasMixedPropertiesInner(e, this.props.validMixedPropertiesForResponsiveTextStyle && isValidValue(this.props.validMixedPropertiesForResponsiveTextStyle));
    };
    this.getIsOnlyFontStyleMixed = () => isInvalidValue(this.props.fontStyle) && this.getHasMixedPropertiesInner(!0);
    this.state = {
      fontAgentUpdatePromptDismissed: !1,
      activeTab: "Basics"
    };
    this.updateVersionsForStyles(this.props);
  }
  isInStyleModal() {
    return null != this.context;
  }
  componentDidMount() {
    let e = this.state.fontAgentUpdatePromptDismissed;
    if (this.showFontAgentCTA && 14 > (this.props.localFontAgentVersion || 0)) {
      let t = localStorageRef?.getItem(iE);
      t && (JSON.parse(t) > new Date().getTime() ? (e = !0, this.setState({
        fontAgentUpdatePromptDismissed: !0
      })) : localStorageRef?.removeItem(iE));
      e || trackEventAnalytics("action_font_agent_update_prompt_shown", {
        name: "Font agent update prompt shown",
        platform: BrowserInfo.mac ? "mac" : "windows",
        localFontAgentVersion: this.props.localFontAgentVersion
      });
    }
    this.setState({
      fontAgentUpdatePromptDismissed: e
    });
    this.setActiveTab("Basics");
    this.updateVersionsForStyles(this.props);
  }
  updateVersionsForStyles(e) {
    this.versionsForStyles = pn(e.fonts);
  }
  UNSAFE_componentWillReceiveProps(e) {
    e.fonts !== this.props.fonts && this.updateVersionsForStyles(e);
  }
  hideTextStyleControl() {
    return ((0 | this.props.enabledTypePanelControls) & 1 << TextAlignmentOptions.TEXT_STYLE) == 0;
  }
  setActiveTab(e) {
    this.props.tabManager.setActiveTab(e);
  }
  render() {
    let e = this.getHasMixedProperties();
    let t = this.getStylePanelProps();
    let i = !!fullscreenValue?.isFontListLoaded();
    let n = valueOrFallback(this.props.missingFont, !1);
    let a = isSitesFeatureEnabled() && getFeatureFlags().sites_responsive_text_styles;
    let s = mw(this.props.sceneGraphSelection, this.props.library);
    let o = a && s && _$$c(this.props.sceneGraphSelection);
    let l = a && !s && _$$c(this.props.sceneGraphSelection) && this.getHasMixedPropertiesInner(!1, this.props.validMixedPropertiesForResponsiveTextStyle && isValidValue(this.props.validMixedPropertiesForResponsiveTextStyle));
    let d = !o && (this.props.inheritStyleKey === MIXED_MARKER || this.hasMixedStyles() || this.getIsStyleConsumer() && e);
    let u = this.showFontAgentCTA && 14 > (this.props.localFontAgentVersion || 0) && !(this.state && this.state.fontAgentUpdatePromptDismissed);
    let p = "ui3" === this.props.version;
    let m = isInvalidValue(this.props.textDecoration) || isInvalidValue(this.props.leadingTrim) || isInvalidValue(this.props.hangingList) || isInvalidValue(this.props.hangingPunctuation) || isInvalidValue(this.props.textCase) || isInvalidValue(this.props.fontVariantPosition);
    if (!dd(this.props.selectedStyleProperties) || !this.isInStyleModal()) {
      let [a, ...s] = this.renderIconButtons({
        isEditingStyle: !1
      }).reverse();
      let o = this.props.isOnlyTextPath ? this.renderTextPathFlipButton() : null;
      return jsx(_$$k2, {
        name: "type_panel",
        children: jsx(zi, {
          className: this.props.showBlueBorder ? yp : void 0,
          onMouseDown: this.onMouseDown,
          "data-onboarding-key": _$$B2,
          children: jsxs(bo, {
            children: [jsx("div", {
              ref: this.stylePanelRef,
              children: jsx(_D, {
                ...t,
                addProperty: d ? this.addProperty : null,
                disableStyleCreation: this.props.areFontStylesUniformOrOnlyMixedDueToTextStyleOverrides && this.getIsOnlyFontStyleMixed() || m || l,
                hasMixedProperties: e || d,
                hideTextStyleControl: this.hideTextStyleControl(),
                isEmpty: !1,
                openStylePickerToLeft: "ui3" === this.props.version,
                recordingKey: this.props.recordingKey,
                removeAllProperties: null,
                rightButton: this.props.mainStyle ? s[0] : null,
                selectedPropertyType: NodePropertyCategory.NONE,
                stylePickerListLayout: !0,
                stylesButtonDataTag: "text-styles",
                title: "ui3" === this.props.version ? getI18nString("fullscreen.type_panel.typography") : getI18nString("fullscreen.type_panel.text"),
                children: jsx(iw, {
                  bigNudgeAmount: this.props.bigNudgeAmount,
                  dispatch: this.props.dispatch,
                  dropdownShown: this.props.dropdownShown,
                  editingStyle: !1,
                  enabledTypePanelControls: this.props.enabledTypePanelControls,
                  fontFamily: this.props.fontFamily,
                  fontListLoaded: i,
                  fontSize: this.props.fontSize,
                  fontStyle: this.props.fontStyle,
                  fontStyleInputRef: this.fontStyleInputRef,
                  fontStyleVariablePickerHandleRef: this.fontStyleVariablePickerHandleRef,
                  fontVariations: this.props.fontVariations,
                  fonts: this.props.fonts,
                  iconButtons: this.props.mainStyle ? void 0 : s,
                  intrinsicLineHeight: this.props.intrinsicLineHeight,
                  isInStyleModal: this.isInStyleModal(),
                  isSlides: this.props.isSlides,
                  letterSpacing: this.props.letterSpacing,
                  lineHeight: this.props.lineHeight,
                  lineHeightRowRef: this.lineHeightRowRef,
                  listSpacing: this.props.listSpacing,
                  missingFont: n,
                  onChangeListSpacing: this.onChangeListSpacing,
                  onChangeParagraphSpacing: this.onChangeParagraphSpacing,
                  onFontFamilyChange: this.onFontFamilyChange,
                  onFontStyleChange: this.onFontStyleChange,
                  paragraphRowRef: this.paragraphRowRef,
                  paragraphSpacing: this.props.paragraphSpacing,
                  recordingKey: this.props.recordingKey,
                  selectedStyleProperties: this.props.selectedStyleProperties,
                  shouldRenderListSpacing: this.shouldRenderListSpacing(),
                  smallNudgeAmount: this.props.smallNudgeAmount,
                  stylePickerRowRef: this.stylePickerRowRef,
                  textAutoResize: this.props.textAutoResize,
                  textUserLayoutVersion: this.props.textUserLayoutVersion,
                  variableConsumptionMap: this.props.variableConsumptionMap,
                  version: this.props.version,
                  versionsForStyles: this.versionsForStyles
                })
              })
            }), jsx(DJ, {
              alignmentRowRef: this.alignmentRowRef,
              enabledTypePanelControls: this.props.enabledTypePanelControls,
              iconButton: a,
              isStyleConsumer: this.getIsStyleConsumer(),
              isUI3: "ui3" === this.props.version,
              missingFont: n,
              recordingKey: this.props.recordingKey,
              textAlignVertical: this.props.textAlignVertical,
              textPathFlipButton: o
            }), !p && jsx(Fc, {
              textContentBoundAsset: this.props.textContentBoundAsset,
              recordingKey: this.props.recordingKey
            }), this.renderAdvancedTypePicker(this.getIsStyleConsumer()), u && jsx(oE, {
              closeButton: jsx(IconButton, {
                onClick: this.dismissFontAgentPrompt,
                "aria-label": getI18nString("general.close"),
                children: jsx(_$$A2, {})
              }),
              children: renderI18nText("fullscreen.type_panel.update_agent_cta", {
                link: jsx("div", {
                  className: kx,
                  children: jsx(TrackedAnchor, {
                    target: "_blank",
                    className: nf,
                    href: "https://www.figma.com/downloads/",
                    trackingProperties: {
                      action: "action_download_font_agent_update",
                      localFontAgentVersion: this.props.localFontAgentVersion,
                      platform: BrowserInfo.mac ? "mac" : "windows"
                    },
                    children: renderI18nText("fullscreen.type_panel.update_your_font_installer")
                  })
                })
              })
            })]
          })
        })
      });
    }
    let g = sessionLocalIDToString(this.props.selectedStyleGuid);
    let _ = !!(g && this.props.library.local.styles[g]) && this.context === zM.EDIT_STYLE;
    let b = this.context === zM.CREATE_STYLE;
    let v = this.renderIconButtons({
      isEditingStyle: !0
    }).reverse();
    return this.props.isSlides ? jsx(iw, {
      bigNudgeAmount: this.props.bigNudgeAmount,
      dispatch: this.props.dispatch,
      dropdownShown: this.props.dropdownShown,
      editingStyle: !0,
      enabledTypePanelControls: this.props.enabledTypePanelControls,
      fontFamily: this.props.fontFamily,
      fontListLoaded: i,
      fontSize: this.props.fontSize,
      fontStyle: this.props.fontStyle,
      fontStyleInputRef: this.fontStyleInputRef,
      fontStyleVariablePickerHandleRef: this.fontStyleVariablePickerHandleRef,
      fontVariations: this.props.fontVariations,
      fonts: this.props.fonts,
      iconButtons: v,
      intrinsicLineHeight: this.props.intrinsicLineHeight,
      isInStyleModal: this.isInStyleModal(),
      isSlides: this.props.isSlides,
      letterSpacing: this.props.letterSpacing,
      lineHeight: this.props.lineHeight,
      lineHeightRowRef: this.lineHeightRowRef,
      listSpacing: this.props.listSpacing,
      missingFont: n,
      onChangeListSpacing: this.onChangeListSpacing,
      onChangeParagraphSpacing: this.onChangeParagraphSpacing,
      onFontFamilyChange: this.onFontFamilyChange,
      onFontStyleChange: this.onFontStyleChange,
      paragraphRowRef: this.paragraphRowRef,
      paragraphSpacing: this.props.paragraphSpacing,
      recordingKey: this.props.recordingKey,
      selectedStyleProperties: this.props.selectedStyleProperties,
      shouldRenderListSpacing: this.shouldRenderListSpacing(),
      smallNudgeAmount: this.props.smallNudgeAmount,
      stylePickerRowRef: this.stylePickerRowRef,
      textAutoResize: this.props.textAutoResize,
      textUserLayoutVersion: this.props.textUserLayoutVersion,
      variableConsumptionMap: this.props.variableConsumptionMap,
      version: this.props.version,
      versionsForStyles: this.versionsForStyles
    }) : jsxs(Zk, {
      className: _ || b ? "" : Qf,
      children: [jsx(fI, {
        children: jsx(_$$Q, {
          children: renderI18nText("fullscreen.type_panel.properties")
        })
      }), jsx(iw, {
        bigNudgeAmount: this.props.bigNudgeAmount,
        dispatch: this.props.dispatch,
        dropdownShown: this.props.dropdownShown,
        editingStyle: !0,
        enabledTypePanelControls: this.props.enabledTypePanelControls,
        fontFamily: this.props.fontFamily,
        fontListLoaded: i,
        fontSize: this.props.fontSize,
        fontStyle: this.props.fontStyle,
        fontStyleInputRef: this.fontStyleInputRef,
        fontStyleVariablePickerHandleRef: this.fontStyleVariablePickerHandleRef,
        fontVariations: this.props.fontVariations,
        fonts: this.props.fonts,
        iconButtons: v,
        intrinsicLineHeight: this.props.intrinsicLineHeight,
        isInStyleModal: this.isInStyleModal(),
        isSlides: this.props.isSlides,
        letterSpacing: this.props.letterSpacing,
        lineHeight: this.props.lineHeight,
        lineHeightRowRef: this.lineHeightRowRef,
        listSpacing: this.props.listSpacing,
        missingFont: n,
        onChangeListSpacing: this.onChangeListSpacing,
        onChangeParagraphSpacing: this.onChangeParagraphSpacing,
        onFontFamilyChange: this.onFontFamilyChange,
        onFontStyleChange: this.onFontStyleChange,
        paragraphRowRef: this.paragraphRowRef,
        paragraphSpacing: this.props.paragraphSpacing,
        recordingKey: this.props.recordingKey,
        selectedStyleProperties: this.props.selectedStyleProperties,
        shouldRenderListSpacing: this.shouldRenderListSpacing(),
        smallNudgeAmount: this.props.smallNudgeAmount,
        stylePickerRowRef: this.stylePickerRowRef,
        textAutoResize: this.props.textAutoResize,
        textUserLayoutVersion: this.props.textUserLayoutVersion,
        variableConsumptionMap: this.props.variableConsumptionMap,
        version: this.props.version,
        versionsForStyles: this.versionsForStyles
      }), this.renderAdvancedTypePicker(this.getIsStyleConsumer())]
    });
  }
}
function iw(e) {
  let t = e.isInStyleModal ? "style-preview-" : "";
  let i = LM({
    fontFamily: e.fontFamily,
    fontStyle: e.fontStyle,
    fonts: e.fonts,
    versionsForStyles: e.versionsForStyles
  });
  let n = e.iconButtons ?? [];
  let a = e.editingStyle && e.isInStyleModal ? e.selectedStyleProperties.guid : void 0;
  let s = !e.fontListLoaded;
  let o = !e.fontListLoaded || e.missingFont;
  let {
    consumedVariable,
    clearVariableConsumption
  } = u3(["FONT_FAMILY"], a);
  let c = () => clearVariableConsumption();
  let u = consumedVariable ? MH(consumedVariable) : null;
  let p = _$$u(u ?? void 0);
  let {
    consumedVariable: _consumedVariable
  } = u3(["FONT_STYLE"], a);
  let h = _consumedVariable ? MH(_consumedVariable) : null;
  let g = _$$u(h ?? void 0);
  let f = vK();
  let _ = g ? jsx(_$$H, {
    elementRef: e.stylePickerRowRef,
    editingStyleGuid: a,
    invalid: JB({
      fontFamily: e.fontFamily,
      fontStyle: e.fontStyle,
      fontVariations: e.fontVariations,
      fontVariationAxes: i?.variationAxes,
      versionsForStyles: e.versionsForStyles
    })
  }) : jsx(_$$E, {
    name: "font_style",
    children: jsx(zz, {
      editingStyleGuid: a,
      elementRef: e.fontStyleInputRef,
      fontFamily: e.fontFamily,
      fontStyle: e.fontStyle,
      fontVariationAxes: i?.variationAxes,
      fontVariations: e.fontVariations,
      fonts: e.fonts,
      id: t + "font-style-select",
      onChange: e.onFontStyleChange,
      recordingKey: generateRecordingKey(e, "fontStyle"),
      showMissingIcon: "ui3" !== e.version,
      versionsForStyles: e.versionsForStyles
    })
  });
  let A = jsx(_$$E, {
    name: "font_size",
    children: jsx(_$$Z2, {
      id: t + "font-size-combo-box",
      rowElementRef: e.stylePickerRowRef,
      fontSize: e.fontSize,
      disabled: o,
      recordingKey: generateRecordingKey(e, "fontSize"),
      editingStyleGuid: a
    })
  });
  let y = jsx(_$$E, {
    name: "line_height",
    children: jsx(_$$a, {
      lineHeight: e.lineHeight,
      lineHeightInContext: a6(e),
      rowElementRef: e.lineHeightRowRef,
      disabled: o || f,
      disableVariables: o || f,
      recordingKey: generateRecordingKey(e, "lineHeight"),
      editingStyleGuid: a
    })
  });
  let b = "ui3" === e.version;
  let v = jsx(_$$E, {
    name: "letter_spacing",
    children: jsx(_$$I, {
      smallNudgeAmount: e.smallNudgeAmount,
      bigNudgeAmount: e.bigNudgeAmount,
      letterSpacing: e.letterSpacing,
      disabled: o,
      dispatch: e.dispatch,
      recordingKey: generateRecordingKey(e, "letterSpacing"),
      rowElementRef: e.lineHeightRowRef,
      editingStyleGuid: a
    })
  });
  let I = jsx(_$$E, {
    name: "paragraph_spacing",
    children: jsx(_$$e, {
      paragraphSpacing: e.paragraphSpacing,
      isDisabled: o,
      smallNudgeAmount: e.smallNudgeAmount,
      bigNudgeAmount: e.bigNudgeAmount,
      rowElementRef: e.paragraphRowRef,
      editingStyleGuid: a,
      recordingKey: generateRecordingKey(e.recordingKey, "paragraphSpacing"),
      onChange: e.onChangeParagraphSpacing
    })
  });
  let E = jsx(_$$E, {
    name: "list_spacing",
    children: jsx($j, {
      bigNudgeAmount: e.bigNudgeAmount,
      className: hf,
      "data-tooltip": getI18nString("fullscreen.type_panel.list_spacing"),
      "data-tooltip-type": KindEnum.TEXT,
      disabled: o,
      dispatch: e.dispatch,
      inputClassName: KY,
      onValueChange: e.onChangeListSpacing,
      recordingKey: generateRecordingKey(e, "listSpacing"),
      smallNudgeAmount: e.smallNudgeAmount,
      value: e.listSpacing,
      children: jsx(MediaQuerySvgComponent, {
        svg: _$$A7,
        className: _$$Kk
      })
    })
  });
  return b ? jsxs("div", {
    children: [jsx(ay, {
      boundVariable: p ?? void 0,
      disabled: s,
      editingStyleGuid: a,
      fontFamily: e.fontFamily,
      fonts: e.fonts,
      id: t + "font-family-combo-box",
      onChange: e.onFontFamilyChange,
      onDetachVariableClick: c,
      recordingKey: generateRecordingKey(e, "fontFamily"),
      useLegacyFontPickerDropdown: !1,
      versionsForStyles: e.versionsForStyles
    }), jsx(fn, {
      ref: e.stylePickerRowRef,
      leftLabel: null,
      leftInput: _,
      rightLabel: null,
      rightInput: A,
      icon: n[1]
    }), jsx(XA, {
      children: jsx(bd, {
        ref: e.fontStyleVariablePickerHandleRef,
        rowRef: e.stylePickerRowRef,
        elementRef: e.fontStyleInputRef,
        currentFieldValue: isValidValue(e.fontStyle) ? e.fontStyle : "",
        isInStyleModal: e.editingStyle && e.isInStyleModal
      })
    }), !e.isSlides && jsx(fn, {
      ref: e.lineHeightRowRef,
      leftLabel: renderI18nText("properties.label.line_height"),
      leftInput: y,
      rightLabel: renderI18nText("properties.label.letter_spacing"),
      rightInput: v,
      icon: n[0]
    })]
  }) : jsxs("div", {
    children: [jsx(ay, {
      boundVariable: p ?? void 0,
      disabled: s,
      editingStyleGuid: a,
      fontFamily: e.fontFamily,
      fonts: e.fonts,
      id: t + "font-family-combo-box",
      onChange: e.onFontFamilyChange,
      onDetachVariableClick: c,
      recordingKey: generateRecordingKey(e, "fontFamily"),
      useLegacyFontPickerDropdown: !1,
      versionsForStyles: e.versionsForStyles
    }), jsxs(fI, {
      ref: e.stylePickerRowRef,
      children: [_, A]
    }), jsx(XA, {
      children: jsx(bd, {
        ref: e.fontStyleVariablePickerHandleRef,
        rowRef: e.stylePickerRowRef,
        elementRef: e.fontStyleInputRef,
        currentFieldValue: isValidValue(e.fontStyle) ? e.fontStyle : "",
        isInStyleModal: e.editingStyle && e.isInStyleModal
      })
    }), !e.isSlides && jsxs(Fragment, {
      children: [jsxs(fI, {
        className: lY,
        ref: e.lineHeightRowRef,
        children: [y, v, n[1]]
      }), jsxs(fI, {
        className: lY,
        ref: e.paragraphRowRef,
        children: [e.shouldRenderListSpacing ? E : I, !e.editingStyle && jsx("div", {
          className: qf,
          children: jsx(fB, {
            disabled: o,
            enabledTypePanelControls: e.enabledTypePanelControls,
            textAutoResize: e.textAutoResize,
            recordingKey: e.recordingKey
          })
        }), n[0]]
      })]
    })]
  });
}
iS.displayName = "TypePanel";
iS.contextType = zK;
export const J = $$ix0;