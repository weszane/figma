import { g as _$$g } from "../905/687265";
import _require4 from "../951/130951";
import _require3 from "../1971/941971";
import _require2 from "../9756/399756";
import _require from "../905/802325";
import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { memo, useState, useCallback, useEffect, useRef, useMemo, createContext, useContext, useLayoutEffect, useReducer, lazy, Suspense, useDeferredValue, forwardRef, createRef, useId } from "react";
import { useDispatch, useSelector } from "../vendor/514228";
import { ServiceCategories as _$$e } from "../905/165054";
import { i as _$$i } from "../905/718764";
import { Ez5, NVY, NLJ, XJn, AZ4, glU, biQ, Egt, bbV, ruz, uQ6, Mpt, m1T, CT8 } from "../figma_app/763686";
import { atom, atomStoreManager, useAtomValueAndSetter, createLocalStorageAtom, createRemovableAtomFamily, useAtomWithSubscription, AY, Xr } from "../figma_app/27355";
import { tH as _$$tH, H4 } from "../905/751457";
import { F as _$$F } from "../905/302958";
import { PE, GM } from "../figma_app/251115";
import { I as _$$I } from "../figma_app/827540";
import { gB, QT, Ct } from "../9410/517270";
import { _V, KY, el as _$$el, dL as _$$dL } from "../figma_app/322845";
import { globalPerfTimer } from "../905/542194";
import { h as _$$h } from "../905/207101";
import { Kh } from "../figma_app/370763";
import { s as _$$s } from "../figma_app/523506";
import { V2, cW, ZT, QZ, f6, wW, $1, FG, AR, q3, ll as _$$ll, U6 } from "../figma_app/844435";
import { h as _$$h2 } from "../9410/146161";
import { dd as _$$dd, Lk, Rt, Q8, JB, IH, P_, jh, Bu, rE as _$$rE } from "../figma_app/604494";
import { Hz, H5, Ag } from "../905/235578";
import { JT, bL, Oy, ZM, vA, wj, jb, Nf, GX, C5 } from "../figma_app/930214";
import { cq } from "../905/794154";
import { $L, mP, Sq } from "../figma_app/737746";
import { x as _$$x } from "../905/179739";
import { Ev, eg as _$$eg, HD, NH, i6 as _$$i2, lw as _$$lw, F$, Mq, vI, mi } from "../figma_app/297822";
import { kz, s3 as _$$s2 } from "../figma_app/171177";
import { p as _$$p } from "../9410/363670";
import { throwTypeError } from "../figma_app/465776";
import { lQ as _$$lQ } from "../905/934246";
import { useHandleMouseEvent, generateRecordingKey } from "../figma_app/878298";
import { Uz, xH } from "../905/63728";
import { g as _$$g2 } from "../905/880308";
import { s as _$$s3 } from "../cssbuilder/589278";
import { getI18nString, renderI18nText } from "../905/303541";
import { T1, UF, lc as _$$lc, c as _$$c, G4, Hl } from "../figma_app/545293";
import { aq as _$$aq } from "../figma_app/399472";
import { ze, tB as _$$tB, tS as _$$tS, q5, Hu } from "../figma_app/516028";
import { o3 as _$$o, nt as _$$nt } from "../905/226610";
import { Eh } from "../figma_app/12796";
import { FX } from "../9410/67768";
import { I as _$$I2 } from "../figma_app/130633";
import { b as _$$b } from "../figma_app/598297";
import { eH as _$$eH } from "../figma_app/318590";
import { wC, JT as _$$JT, OZ, UW, i0 as _$$i3 } from "../figma_app/632248";
import { debugState } from "../905/407919";
import { f as _$$f } from "../figma_app/109947";
import { ES, TC } from "../905/198599";
import { _M, Dl, SX, Q0, as as _$$as, hm, zQ } from "../905/487011";
import { Sn, Jc, BY } from "../905/946805";
import { B as _$$B, b as _$$b2 } from "../905/222272";
import { n as _$$n } from "../905/895449";
import { vj, Jj } from "../figma_app/883990";
import { fu, oz as _$$oz, c0 } from "../figma_app/538006";
import { iC as _$$iC, Do, mr } from "../figma_app/169086";
import { R as _$$R } from "../1250/835893";
import { e as _$$e2 } from "../905/149844";
import { v as _$$v } from "../1250/821962";
import { b as _$$b3 } from "../905/946806";
import { getFeatureFlags } from "../905/601108";
import { A as _$$A } from "../vendor/90566";
import { reportError } from "../905/11";
import { PN } from "../figma_app/897289";
import { S as _$$S } from "../figma_app/420927";
import { B as _$$B2 } from "../905/714743";
import { sx as _$$sx } from "../905/941192";
import { Q7 } from "../905/15667";
import { Zj, Dz, WJ } from "../figma_app/847915";
import { TW } from "../figma_app/567902";
import { YT } from "../figma_app/506549";
import { VU } from "../905/625959";
import { UK } from "../figma_app/740163";
import { eY as _$$eY, KH, f4, p8 } from "../figma_app/722362";
import { sZ as _$$sZ, dq } from "../905/845253";
import { J2 } from "../figma_app/84367";
import { nx as _$$nx, qH, DM, AG, Ar } from "../figma_app/300692";
import { R as _$$R2 } from "../figma_app/612938";
import { l as _$$l } from "../905/202425";
import { FW, bH, ZQ, k0 } from "../figma_app/155287";
import { Ib } from "../905/129884";
import { V as _$$V } from "../905/480825";
import { vg, Yh, c1 } from "../figma_app/357047";
import { x0, fJ } from "../figma_app/963341";
import { _ as _$$_, h as _$$h3 } from "../9410/755019";
import { EG, ah as _$$ah, J8, Hr } from "../figma_app/995580";
import { kp, BB, Z7, Sk, PV } from "../figma_app/98578";
import { selectWithShallowEqual } from "../905/103090";
import { filterNotNullish, shuffle } from "../figma_app/656233";
import { U as _$$U } from "../905/103637";
import { K as _$$K } from "../905/799615";
import { T as _$$T } from "../905/336775";
import { V as _$$V2 } from "../905/900932";
import { u as _$$u } from "../905/866761";
import ez from "../vendor/260986";
import { E as _$$E } from "../905/984674";
import { XE, ow as _$$ow, E3 as _$$E2, m0, my, lg as _$$lg } from "../figma_app/976749";
import { getSingletonSceneGraph } from "../905/700578";
import { logInfo, logWarning } from "../905/714362";
import { Ay } from "../figma_app/432652";
import { z as _$$z } from "../905/239603";
import { qp } from "../905/977779";
import { eD as _$$eD, ET } from "../figma_app/646357";
import { Wg, YG, Ow } from "../905/921418";
import { pS } from "../905/588985";
import { E9 } from "../905/851937";
import { wY, mv, iu as _$$iu } from "../905/753206";
import { h as _$$h4 } from "../figma_app/198885";
import { vx, t_ as _$$t_ } from "../905/91038";
import { isDesignOrIllustration, FEditorType } from "../figma_app/53721";
import { o8 as _$$o2 } from "../905/622391";
import { gH } from "../figma_app/985200";
import { P as _$$P } from "../905/545265";
import { td as _$$td } from "../figma_app/181241";
import { XHR } from "../905/910117";
import { T5, D6, X$ } from "../figma_app/465071";
import { wo } from "../figma_app/109130";
import { b as _$$b4 } from "../figma_app/873852";
import { z6, mX, jk, hc } from "../figma_app/846841";
import { Qx, xA } from "../905/742325";
import { B as _$$B3, t as _$$t2 } from "../figma_app/560453";
import { s as _$$s4 } from "../905/234042";
import { k as _$$k2 } from "../905/443820";
import { m as _$$m } from "../905/270214";
import { V as _$$V3 } from "../905/849455";
import { x as _$$x2 } from "../7222/491815";
import { C as _$$C } from "../905/47358";
import { Z as _$$Z } from "../905/279476";
import { W as _$$W } from "../9410/92046";
import { g as _$$g3 } from "../905/125190";
import { _ as _$$_2 } from "../7021/243271";
import { N as _$$N } from "../vendor/930821";
import { P as _$$P2 } from "../vendor/348225";
import { AS, to as _$$to, hm as _$$hm, Lo as _$$Lo } from "../905/156213";
import { iZ as _$$iZ, TA } from "../905/372672";
import { J as _$$J } from "../905/273120";
import { r as _$$r } from "../905/189361";
import { x as _$$x3 } from "../905/773818";
import { q as _$$q } from "../905/516087";
import { a as _$$a } from "../figma_app/380422";
import { U as _$$U2 } from "../figma_app/751728";
import { $n } from "../905/521428";
import { Point } from "../905/736624";
import { Ju, ZU } from "../905/102752";
import { Ao } from "../905/748636";
import { V as _$$V4 } from "../905/453354";
import { ZC } from "../figma_app/39751";
import { e as _$$e3 } from "../905/383776";
import { ZO } from "../figma_app/88239";
import { Sh } from "../figma_app/889655";
import { xm, _g, oG as _$$oG } from "../figma_app/826288";
import { Vr, I9 } from "../figma_app/151869";
import iu from "../vendor/223926";
import ih from "../vendor/104014";
import { C as _$$C2 } from "../figma_app/444297";
import { ImageToolsBindings } from "../figma_app/13528";
import { Tv } from "../figma_app/311375";
import { _p } from "../figma_app/297957";
import { n as _$$n2 } from "../905/548236";
import { y as _$$y } from "../905/705736";
import { ou as _$$ou } from "../905/942991";
import { W as _$$W2 } from "../5132/887999";
import { xk } from "@stylexjs/stylex";
import { rN as _$$rN, VY } from "../9410/607888";
import { $ as _$$$ } from "../905/922405";
import { Zr } from "../figma_app/678782";
import { f6 as _$$f2 } from "../figma_app/915202";
import { FX as _$$FX } from "../figma_app/291792";
import { E as _$$E3 } from "../905/53857";
import { Bc } from "../9410/255781";
import { j as _$$j } from "../9410/853982";
import { bG } from "../1250/506456";
import { R as _$$R4 } from "../9410/46722";
import { T as _$$T2 } from "../905/2124";
import { B as _$$B4 } from "../9410/958580";
import { s as _$$s5 } from "../figma_app/478542";
import { g as _$$g4 } from "../9410/995605";
import { $ as _$$$2 } from "../905/411599";
import { X as _$$X } from "../905/647103";
import { _ as _$$_3 } from "../905/862468";
import { T as _$$T3 } from "../905/632137";
import { B as _$$B5 } from "../905/872019";
import { c as _$$c2 } from "../905/752260";
import { f as _$$f3 } from "../905/555062";
import { O as _$$O } from "../905/587457";
import { r as _$$r2 } from "../figma_app/6042";
import { O as _$$O2 } from "../figma_app/114128";
import { $ as _$$$3 } from "../figma_app/183557";
import { q8, dZ } from "../figma_app/459490";
import { Ay as _$$Ay2 } from "../905/281495";
import { Zh } from "../figma_app/2590";
import { r6 as _$$r3 } from "../905/507950";
import { J as _$$J2 } from "../905/494216";
import { e as _$$e4 } from "../905/462154";
import { bt } from "../figma_app/688194";
import { mD } from "../figma_app/955528";
import { O as _$$O3 } from "../9410/301359";
import { f as _$$f4 } from "../9410/391621";
import { hQ, J7, hG } from "../9410/512956";
import { bJ } from "../figma_app/318123";
import { RL, qy, wj as _$$wj, B3, lc as _$$lc2, zM, Ag as _$$Ag } from "../figma_app/862289";
import { F as _$$F2 } from "../figma_app/757236";
import { w as _$$w } from "../figma_app/588564";
import { J as _$$J3, $ as _$$$4 } from "../9410/589087";
import { K as _$$K2 } from "../9410/565440";
import { s as _$$s6, w as _$$w2 } from "../905/286488";
import { A as _$$A2 } from "../905/721854";
import { Ay as _$$Ay3 } from "../figma_app/948389";
import { $J, NI, dM as _$$dM, F9, bp, sd as _$$sd, o2 as _$$o3 } from "../905/278499";
import { E as _$$E4, f as _$$f5 } from "../905/690713";
import { is as _$$is, Oq } from "../905/904596";
import { A as _$$A3 } from "../905/296182";
import { F as _$$F3 } from "../905/382217";
import { Rz } from "../905/990497";
import { T as _$$T4 } from "../905/172092";
import { zY, S6 } from "../figma_app/664693";
import { G1 } from "../figma_app/691470";
import { xN } from "../figma_app/492908";
import { t as _$$t3 } from "../905/150656";
import { oB as _$$oB, qN, w_ } from "../figma_app/273493";
import { l7 as _$$l2 } from "../905/189185";
import { zN, k9 } from "../905/19536";
import rF from "classnames";
import { ei as _$$ei } from "../figma_app/9054";
import { A as _$$A4 } from "../vendor/21595";
import { analyticsEventManager, trackEventAnalytics } from "../905/449184";
import { DA, UE, tK as _$$tK, F_ } from "../figma_app/191804";
import { Rh } from "../905/485103";
import { Pt as _$$Pt } from "../figma_app/806412";
import { YJ } from "../figma_app/50224";
import { Db, AR as _$$AR } from "../figma_app/705029";
import { getSessionStorage } from "../905/657224";
import { uW } from "../905/426868";
import { z as _$$z2 } from "../figma_app/153551";
import { YB, nd as _$$nd, $L as _$$$L, uq, oP as _$$oP, HS } from "../figma_app/857146";
import { tb as _$$tb, l9 as _$$l3, N_ } from "../9410/234038";
import { P as _$$P3, t as _$$t4 } from "../9410/636108";
import { lH as _$$lH, Dk, lg as _$$lg2 } from "../figma_app/18582";
import { X6, qO } from "../figma_app/234690";
import { BY as _$$BY, uP, Mz, k5, jR, rO as _$$rO, nF as _$$nF } from "../figma_app/541950";
import { lu as _$$lu } from "../figma_app/846140";
import { w as _$$w3 } from "../figma_app/774411";
import { q as _$$q2 } from "../905/196201";
import { Og } from "../figma_app/109758";
import { fv } from "../9410/215872";
import { Dp, WX, TM } from "../9410/423538";
import { Vh } from "../9410/671180";
import { SV, gC } from "../9410/483857";
import { sF as _$$sF } from "../figma_app/193952";
import { Y5 } from "../figma_app/455680";
import { KK, h8 } from "../figma_app/144974";
import { XG, nj as _$$nj } from "../figma_app/360824";
import { k as _$$k3 } from "../905/788559";
import { Vm, ks } from "../figma_app/838407";
import { sI as _$$sI } from "../9410/797086";
import n_ from "../vendor/950573";
import { bL as _$$bL, c$ } from "../905/867927";
import { q as _$$q3 } from "../905/932270";
import { J as _$$J4 } from "../905/270045";
import { A as _$$A5 } from "../905/920165";
import { K as _$$K3 } from "../905/443068";
import { Z as _$$Z2 } from "../905/606826";
import { a as _$$a2 } from "../905/192547";
import { C as _$$C3 } from "../905/520159";
import { DP } from "../905/640017";
import { D8 } from "../905/511649";
import { H as _$$H } from "../905/286442";
import { _ as _$$_4 } from "../905/614936";
import { L0, MQ } from "../905/479155";
import { k as _$$k4 } from "../905/341245";
import { A as _$$A6 } from "../905/780920";
import { F as _$$F4 } from "../905/989956";
import { cd, ZI } from "../figma_app/650460";
import { jR as _$$jR, N0, k0 as _$$k5, RO, Sb } from "../figma_app/728075";
import { ER, NT, Ne, Xy, jF, X4, K4, pz } from "../figma_app/702372";
import { wY as _$$wY } from "../figma_app/708845";
import { Um } from "../905/848862";
import { QS, dt as _$$dt, VA, he, fC } from "../figma_app/259578";
import { p as _$$p2 } from "../figma_app/284426";
import { e as _$$e5 } from "../905/987482";
import { T as _$$T5 } from "../905/273689";
import { A as _$$A7 } from "../svg/499035";
import { A as _$$A8 } from "../9410/63984";
import ay from "../vendor/267721";
import { _i, iR as _$$iR, yZ } from "../figma_app/476572";
import { Y as _$$Y } from "../905/830372";
import { Z as _$$Z3 } from "../905/829242";
import { Y6, NY, CN, FL, Vl, MR, w8 } from "../figma_app/347120";
import { x as _$$x4 } from "../9410/392104";
import { T as _$$T6 } from "../figma_app/949105";
import { iK as _$$iK } from "../9410/845608";
import { B as _$$B6 } from "../905/388732";
import { Rw, zX } from "../905/576487";
import { xF } from "../figma_app/566517";
import { xk as _$$xk, DP as _$$DP } from "../figma_app/612859";
import { Fk } from "../figma_app/167249";
import { a as _$$a3 } from "../905/290931";
import { eb as _$$eb, zs, qi } from "../9410/58505";
import { bL as _$$bL2 } from "../905/911410";
import { vo, Y9, hE, nB as _$$nB } from "../figma_app/272243";
import { f as _$$f6 } from "../905/167712";
import { A as _$$A9 } from "../905/891805";
import { i as _$$i4 } from "../9410/157320";
import { v as _$$v2 } from "../905/318279";
import { v as _$$v3 } from "../905/981847";
import { o as _$$o4 } from "../905/40561";
import { N as _$$N2 } from "../905/438674";
import { EJ, $M } from "../figma_app/930338";
import { dP as _$$dP } from "../figma_app/119475";
import { Dm } from "../figma_app/8833";
import { z as _$$z3 } from "../905/654860";
import { y as _$$y2 } from "../905/263077";
import { y as _$$y3, O as _$$O4 } from "../figma_app/13082";
import { t as _$$t5 } from "../905/605191";
import { WS, jp } from "../905/370597";
import { LZ, oy as _$$oy } from "../figma_app/964367";
import { nj as _$$nj2 } from "../905/125019";
import { UD } from "../figma_app/624361";
import { _G, Pv } from "../905/619652";
import { A as _$$A0 } from "../905/929620";
import { A as _$$A1 } from "../af221b13/388839";
import { xp } from "../905/966582";
import { Ay as _$$Ay4, Tu, DI, Ti } from "../figma_app/724968";
import { w as _$$w4, q as _$$q4 } from "../905/112768";
import { p as _$$p3 } from "../figma_app/398051";
import { Aw } from "../9410/40486";
import { A as _$$A10 } from "../905/51743";
import { to as _$$to2 } from "../figma_app/828186";
import { wx, XV, hk, sF as _$$sF2 } from "../figma_app/593440";
import { M as _$$M } from "../905/637515";
import { c4 } from "../figma_app/805925";
import { X as _$$X2 } from "../9410/57440";
import { r as _$$r4 } from "../905/924231";
import { a as _$$a4 } from "../905/964520";
import { x as _$$x5, E as _$$E5 } from "../905/719609";
import { _ as _$$_5 } from "../905/136246";
import { b as _$$b5 } from "../905/985254";
import { yy, Cb, U5 } from "../figma_app/543529";
import { f as _$$f7 } from "../905/940356";
import { R as _$$R5 } from "../905/304671";
import { FUserTypeClassification, FMemberRoleType, FPlanNameType, FPlanAccessType, FProductAccessType, FFileType } from "../figma_app/191312";
import { $7 } from "../905/509613";
import { A as _$$A11 } from "../905/251970";
import { OZ as _$$OZ } from "../905/783179";
import { r7 as _$$r5, Kp } from "../figma_app/189990";
import { G as _$$G } from "../905/750789";
import { AC, G8 } from "../figma_app/777551";
import { a as _$$a5 } from "../figma_app/453187";
import { RW } from "../figma_app/684168";
import { A as _$$A12 } from "../6828/718668";
import { A as _$$A13 } from "../svg/617101";
import { A as _$$A14 } from "../svg/586486";
import { U as _$$U3 } from "../905/544380";
import { t as _$$t6 } from "../905/572040";
import { hasDesktopAPI } from "../figma_app/876459";
import { R as _$$R6 } from "../905/240644";
import { C as _$$C4 } from "../905/237873";
import { $9, Gk } from "../figma_app/427318";
import { e as _$$e6 } from "../figma_app/324237";
import { vt } from "../figma_app/306946";
import { q as _$$q5, S as _$$S2 } from "../figma_app/277543";
import { Qi } from "../figma_app/559491";
import { M4 } from "../905/713695";
import { z as _$$z4, a as _$$a6 } from "../figma_app/601188";
import { isNotNullish } from "../figma_app/95419";
import { R as _$$R7 } from "../3591/975641";
import { JZ } from "../figma_app/696043";
import { oB as _$$oB2, j7 } from "../905/929976";
import { NV, OX, x2, qu, xZ, Pt as _$$Pt2 } from "../figma_app/33586";
import { bD } from "../figma_app/45218";
import { h as _$$h5 } from "../figma_app/752483";
import { dR as _$$dR } from "../figma_app/248118";
import { j as _$$j2 } from "../905/813868";
import { lM as _$$lM, q8 as _$$q6, U4, S3, Xq } from "../figma_app/254872";
import { t as _$$t7 } from "../figma_app/198180";
import { m as _$$m2 } from "../figma_app/321561";
import { D as _$$D2, p as _$$p4 } from "../figma_app/930185";
import { OX as _$$OX, M6 } from "../figma_app/592180";
import { J as _$$J5 } from "../905/125993";
import { S as _$$S3 } from "../figma_app/552746";
import { dG } from "../figma_app/753501";
import { Ro } from "../figma_app/564095";
import { Dd } from "../figma_app/599979";
import { c as _$$c3 } from "../905/566438";
import { ms } from "../figma_app/38430";
import { O as _$$O5 } from "../figma_app/959385";
import { rH as _$$rH } from "../figma_app/467741";
import { H8, Pf } from "../905/590952";
import { E as _$$E6 } from "../905/632989";
import { R_, JB as _$$JB, e2 as _$$e7 } from "../3591/130069";
import { $J as _$$$J } from "../905/491152";
import { i as _$$i5 } from "../905/186077";
import { o as _$$o5, g as _$$g5 } from "../figma_app/449363";
import { A as _$$A15 } from "../6828/6507";
import { A as _$$A16 } from "../5724/693499";
import dc from "../vendor/946678";
import { A as _$$A17 } from "../vendor/850789";
import { IT } from "../figma_app/566371";
import { j as _$$j3 } from "../905/918929";
import { k as _$$k6 } from "../905/22009";
import { Ih, zd } from "../figma_app/740025";
import { Ef } from "../905/81982";
import { $W } from "../905/144933";
import { S as _$$S4 } from "../905/562072";
import { v5 } from "../figma_app/314264";
import { y as _$$y4 } from "../905/236825";
import { K as _$$K4 } from "../9410/280854";
import { C as _$$C5 } from "../905/504203";
var r = {};
require.d(r, {
  button: () => lL,
  buttonContent: () => lM,
  buttonText: () => lD,
  destructive: () => lY,
  destructiveLink: () => lZ,
  destructiveSecondary: () => lJ,
  fauxFocus: () => lH,
  icon: () => lR,
  largeSize: () => lB,
  largeWideSize: () => lG,
  link: () => lX,
  outlineStyle: () => lK,
  primary: () => lV,
  regularSize: () => lF,
  secondary: () => lW,
  shortcut: () => lP,
  signup: () => lq,
  solidStyle: () => lz,
  wideSize: () => lU
});
function eP() {
  return selectWithShallowEqual(e => {
    let t = {};
    for (let i in e.mirror.appModel) {
      vg(i) && (t[i] = e.mirror.appModel[i]);
      "isReadOnly" === i && (t.isReadOnly = e.mirror.appModel.isReadOnly);
    }
    return t;
  });
}
var eV = ez;
async function eZ(e, t, i) {
  let r;
  return (await Ay.shared.assistantChat({
    messages: [...t, e]
  })).pipeThrough((r = {}, new TransformStream({
    async transform(e, t) {
      if (e.choices.length && (r = function (e, t) {
        let i = (e, t) => {
          for (let [r, n] of (e = {
            ...e
          }, Object.entries(t))) if (void 0 === e[r] || null === e[r]) {
            if (e[r] = n, Array.isArray(e[r])) for (let t of e[r]) delete t.index;
          } else if ("string" == typeof e[r] && "string" == typeof n) e[r] += n; else if ("number" == typeof e[r] && "number" == typeof n) e[r] = n; else if (Array.isArray(e[r]) && Array.isArray(n)) {
            let t = e[r];
            for (let e = 0; e < n.length; e++) {
              let {
                index,
                ...a
              } = n[e];
              if (index - t.length > 1) throw Error(`Error: An array has an empty value when tool_calls are constructed. tool_calls: ${t}; tool: ${n}`);
              t[index] = i(t[index], a);
            }
          } else "object" == typeof e[r] && "object" == typeof n && (e[r] = i(e[r], n));
          return e;
        };
        return i(e, t.choices[0].delta);
      }(r, e), t.enqueue({
        ...r,
        role: "assistant"
      }), r.tool_calls && r.tool_calls.length > 0 && "tool_calls" === e.choices[0].finish_reason)) for (let e of r.tool_calls) {
        let r = await i(e);
        let n = {
          tool_call_id: e.id,
          role: "tool",
          name: e.$$function.name,
          content: JSON.stringify(r)
        };
        t.enqueue(n);
      }
    }
  })));
}
let tr = new class {
  sendFeatureRequest(e) {
    return XHR.post("/api/ask_figma/request_feature", _$$td.toAPIParameters(e));
  }
}();
var tn = (e => (e.Idle = "idle", e.Loading = "loading", e.Error = "error", e))(tn || {});
let ta = atom({
  status: "idle",
  messages: []
});
let ts = _$$z.object({
  node_id: _$$z.string(),
  score: _$$z.number(),
  file_name: _$$z.string(),
  editor_name: _$$z.string(),
  editor_img_url: _$$z.string(),
  last_edited_at: _$$z.string(),
  url: _$$z.string(),
  thumbnail_url: _$$z.string(),
  edit_info: _$$z.object({
    created_at: _$$z.string(),
    last_modified: _$$z.string(),
    last_modified_user: _$$z.string()
  }).optional(),
  containing_page_name: _$$z.string(),
  containing_frame_name: _$$z.string().optional(),
  fragment_name: _$$z.string(),
  width: _$$z.number(),
  height: _$$z.number()
});
let to = _$$z.object({
  type: _$$z.literal("fragments"),
  status: _$$z.literal("success"),
  fragments: _$$z.array(ts)
});
let tl = _$$z.object({
  type: _$$z.literal("fragments"),
  status: _$$z.literal("success"),
  fragments: _$$z.array(ts.pick({
    score: !0,
    file_name: !0,
    editor_name: !0,
    last_edited_at: !0,
    containing_page_name: !0,
    containing_frame_name: !0,
    fragment_name: !0
  })),
  images: _$$z.array(_$$z.string())
});
let td = _$$z.object({
  type: _$$z.literal("selection"),
  status: _$$z.literal("success"),
  selectionLength: _$$z.number()
});
let tc = _$$z.object({
  type: _$$z.literal("selection"),
  status: _$$z.literal("success"),
  selectionLength: _$$z.number(),
  images: _$$z.array(_$$z.string()),
  jsx: _$$z.array(_$$z.string())
});
let tu = _$$z.object({
  type: _$$z.literal("plugin"),
  status: _$$z.literal("success")
});
let tp = _$$z.object({
  type: _$$z.literal("plugin"),
  status: _$$z.literal("success")
});
let th = _$$z.object({
  type: _$$z.literal("assets"),
  queries: _$$z.array(_$$z.string()),
  status: _$$z.literal("success"),
  assets: _$$z.any().array()
});
let tm = _$$z.object({
  type: _$$z.literal("assets"),
  status: _$$z.literal("success"),
  assets: _$$z.array(_$$z.object({
    name: _$$z.string(),
    description: _$$z.string().optional()
  })),
  images: _$$z.array(_$$z.string())
});
let tf = _$$z.object({
  type: _$$z.literal("request-feature"),
  status: _$$z.literal("success"),
  title: _$$z.string(),
  description: _$$z.string()
});
let tg = _$$z.object({
  type: _$$z.literal("request-feature"),
  status: _$$z.literal("success"),
  images: _$$z.undefined()
});
let t_ = _$$z.object({
  userFacing: _$$z.union([to, td, tu, th, tf]),
  assistantFacing: _$$z.union([tl, tc, tp, tm, tg])
});
async function tx(e) {
  if ("function" !== e.type) throw Error("Unexpected tool_call type:" + e.type);
  let t = JSON.parse(e.$$function.$$arguments);
  let i = atomStoreManager.get(ze);
  if (!i) throw Error("No file key found");
  switch (e.$$function.name) {
    case "autocomplete":
    case "view_user_selection":
      {
        let e = getSingletonSceneGraph().getCurrentPage()?.directlySelectedNodes ?? [];
        let t = e?.slice(0, 10);
        let i = t.map(e => {
          let t = T1(e, UF.GPT);
          if (!t) throw Error("Failed to export thumbnail");
          return t;
        });
        let r = t.map(e => "");
        return {
          userFacing: {
            type: "selection",
            status: "success",
            selectionLength: e.length
          },
          assistantFacing: {
            type: "selection",
            status: "success",
            selectionLength: e.length,
            images: i,
            jsx: r
          }
        };
      }
    case "visual_search_with_selection":
    case "search_designs_by_text":
      {
        let r = [];
        if ("visual_search_with_selection" === e.$$function.name) {
          let e = getSingletonSceneGraph().getCurrentPage()?.directlySelectedNodes;
          if (!e || 0 === e.length) throw Error("No selection found");
          r = (await _$$lc({
            type: "input-selection",
            node: e[0],
            file_key: i,
            name: e[0].name
          })).slice(0, 3);
        } else r = (await _$$c({
          type: "input-text",
          value: t.query,
          file_key: i
        })).slice(0, 3);
        return {
          userFacing: {
            type: "fragments",
            status: "success",
            fragments: r
          },
          assistantFacing: {
            type: "fragments",
            status: "success",
            fragments: r.map(e => ({
              score: e.score,
              file_name: e.file_name,
              editor_name: e.editor_name,
              last_edited_at: e.last_edited_at,
              containing_page_name: e.containing_page_name,
              containing_frame_name: e.containing_frame_name,
              fragment_name: e.fragment_name
            })),
            images: r.map(e => e.thumbnail_url)
          }
        };
      }
    case "search_components_by_text":
      {
        let e = t.queries.slice(0, 3);
        if (0 === e.length) throw Error("No queries provided");
        let i = (await Promise.all(e.map(e => tb(e)))).map(e => e.slice(0, 3)).flat();
        let r = [];
        let n = [];
        i.map(e => {
          if (!e.thumbnail_url) return;
          let t = e.thumbnail_url.startsWith("/") ? `${window.location.origin}${e.thumbnail_url}` : e.thumbnail_url;
          r.push(e);
          n.push(t);
        });
        return {
          userFacing: {
            type: "assets",
            status: "success",
            queries: t.queries,
            assets: r
          },
          assistantFacing: {
            type: "assets",
            status: "success",
            assets: r.map(e => ({
              name: e.name,
              description: e.description
            })),
            images: n
          }
        };
      }
    case "create_figma_plugin":
      let r = _$$z.object({
        plugin_code: _$$z.string(),
        ui_code: _$$z.string().optional()
      }).safeParse(t);
      if (!r.success) throw Error("Invalid args: " + r.error.toString());
      let {
        plugin_code,
        ui_code
      } = r.data;
      return ty(plugin_code, ui_code);
    case "edit_file":
      {
        let e = _$$z.object({
          code: _$$z.string()
        }).safeParse(t);
        if (!e.success) throw Error("Invalid args: " + e.error.toString());
        let {
          code
        } = e.data;
        return ty(code);
      }
    case "request_feature":
      let s = _$$z.object({
        title: _$$z.string(),
        description: _$$z.string()
      }).safeParse(t);
      if (!s.success) throw Error("Invalid args: " + s.error.toString());
      let {
        title,
        description
      } = s.data;
      let d = {
        title,
        description,
        chatHistory: atomStoreManager.get(ta).messages
      };
      await tr.sendFeatureRequest(d);
      return {
        userFacing: {
          type: "request-feature",
          status: "success",
          title,
          description
        },
        assistantFacing: {
          type: "request-feature",
          status: "success"
        }
      };
    default:
      throw Error(`No function found for ${e.$$function.name}`);
  }
}
async function ty(e, t) {
  let i = atomStoreManager.get(ze);
  let r = _$$o2();
  if (!r) throw Error("Cannot run plugin while logged out");
  if (!i) throw Error("No file key found");
  await wY();
  let n = `
    <script src="https://cdn.tailwindcss.com"></script>
    <script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

    <script type="text/babel">
    ${t}
    </script>
    <div id="root"></div>
    `;
  let a = t ? _$$nx(e, n) : e;
  let s = mv();
  _$$iu.currentPluginRunID = s;
  E9({
    allowedDomains: gH,
    apiVersion: pS,
    capabilities: [],
    stats: new _$$P(),
    checkSyntax: !0,
    code: a,
    command: "",
    disableSilenceConsole: !0,
    enablePrivatePluginApi: !1,
    enableProposedApi: !1,
    errorHandler: _$$lQ,
    isLocal: !0,
    isWidget: !1,
    name: "Assistant plugin",
    openFileKey: i,
    permissions: qH.forFirstPartyPlugin(),
    pluginID: "",
    pluginRunID: s,
    pluginVersionID: "0",
    queryMode: !1,
    showLaunchErrors: !0,
    showRuntimeErrors: !0,
    titleIconURL: "",
    userID: r,
    vmType: "cppvm",
    editorType: [FW.FIGMA],
    incrementalSafeApi: !1,
    enableNativeJsx: !1,
    enableResponsiveSetHierarchyMutations: !1
  });
  return {
    userFacing: {
      type: "plugin",
      status: "success"
    },
    assistantFacing: {
      type: "plugin",
      status: "success"
    }
  };
}
async function tb(e) {
  let t = debugState.getState();
  let i = _$$tB(t);
  let r = vx(t);
  if (!i || null == r) throw Error("No open file or file version found");
  let n = 1;
  for (; !Wg(debugState.getState()) && n <= 50;) {
    await new Promise(e => setTimeout(e, 200 * n));
    n++;
  }
  if (!Wg(debugState.getState())) throw Error("Failed to initialize assets");
  let a = {
    type: _$$I2.ALL
  };
  let s = isDesignOrIllustration(XE(_$$h4(t)));
  let o = atomStoreManager.get(qp);
  t = debugState.getState();
  let l = {
    type: "input-text",
    query: e,
    assetTypeOption: a,
    isKnownLibrary: e => !0,
    openFile: _$$tB(t),
    selectedView: _$$h4(t),
    inDesignEditor: s,
    fileVersion: r,
    currentOrgId: _$$eD(t),
    fileByKey: _$$t_(t),
    libraryByLibraryKey: o,
    includeVisualAssets: !1,
    usedAssetKeys: ET(t, debugState.dispatch)
  };
  YG.refreshSourcesIfNeeded(debugState);
  let d = await YG.computeResultsReduxSearchTypeHelper(e, a, s, o, null);
  let u = d.normalizedSearchResults;
  u = d.normalizedSearchResults.filter(e => l.isKnownLibrary(e));
  return Ow(u);
}
async function tC(e, t, i, r) {
  try {
    let n;
    let a = getSingletonSceneGraph().getCurrentPage()?.directlySelectedNodes;
    let s = "string" == typeof e ? {
      role: "user",
      content: [{
        type: "text",
        text: `<user_message><user_input>${e}</user_input><selected_layer_ids>${a && JSON.stringify(a.map(e => e.guid))}</selected_layer_ids></user_message>`
      }]
    } : e;
    i(e => ({
      ...e,
      status: tn.Loading,
      messages: [...e.messages, s]
    }));
    let o = [];
    for (let e of t) {
      let t = function (e) {
        if ("tool" !== e.role) return e;
        let t = e.content;
        let i = "string" == typeof t ? JSON.parse(t) : t;
        let r = t_.parse(i).assistantFacing;
        let n = r.type;
        switch (n) {
          case "selection":
          case "assets":
          case "fragments":
            let {
              images,
              ...s
            } = r;
            return {
              ...e,
              content: JSON.stringify(s)
            };
          case "plugin":
          case "request-feature":
            return e;
          default:
            throwTypeError(n);
        }
      }(e);
      o.push(t);
    }
    let l = (await eZ(s, o, r)).getReader();
    for (; ;) {
      let {
        done,
        value
      } = await l.read();
      if (done) {
        i(e => ({
          ...e,
          status: tn.Idle
        }));
        break;
      }
      let {
        sendFollowup,
        newMessages
      } = function (e) {
        if ("tool" !== e.role) return {
          sendFollowup: !1,
          newMessages: []
        };
        let t = e.content;
        let i = "string" == typeof t ? JSON.parse(t) : t;
        let r = t_.parse(i);
        let n = r.assistantFacing.type;
        switch (n) {
          case "selection":
          case "assets":
          case "fragments":
            return {
              sendFollowup: !0,
              newMessages: [{
                role: "user",
                content: [{
                  type: "text",
                  text: "\x3c!-- The tool call showed me the following images: --\x3e"
                }, ...r.assistantFacing.images.map(e => ({
                  type: "image_url",
                  image_url: {
                    url: e.startsWith("http") ? e : `data:image/jpeg;base64,${e}`,
                    detail: "high"
                  }
                }))]
              }]
            };
          case "plugin":
          case "request-feature":
            return {
              sendFollowup: !1,
              newMessages: []
            };
          default:
            throwTypeError(n);
        }
      }(value);
      newMessages.length > 0 && sendFollowup && (n = newMessages[newMessages.length - 1]);
      i(e => "string" == typeof value.content && 0 === value.content.length || value.role !== e.messages[e.messages.length - 1]?.role ? {
        status: tn.Loading,
        messages: [...e.messages, value, ...newMessages]
      } : {
        status: tn.Loading,
        messages: [...e.messages.slice(0, -1), value, ...newMessages]
      });
    }
    n && tC(n, atomStoreManager.get(ta).messages, i, r);
  } catch (e) {
    logInfo("Send chat message failed: ", e.message);
    i(e => ({
      ...e,
      status: tn.Error
    }));
  }
}
let tA = memo(function (e) {
  return jsx("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: jsx("path", {
      fill: "var(--color-icon)",
      d: "M11.5 5a6.5 6.5 0 0 1 4.935 10.728l3.419 3.419.064.078a.5.5 0 0 1-.693.693l-.079-.064-3.419-3.42A6.5 6.5 0 1 1 11.5 5m0 1a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11m-.485 2.44c.126-.505.844-.505.97 0l.515 2.06 2.06.515c.505.126.505.844 0 .97l-2.06.515-.515 2.06c-.126.505-.844.505-.97 0L10.5 12.5l-2.06-.515c-.505-.126-.505-.844 0-.97l2.06-.515z"
    })
  });
});
function t$({
  url: e
}) {
  return jsx("img", {
    src: e,
    className: _$$s3.maxW100.$,
    alt: "debug"
  });
}
function t0(e) {
  let {
    obj,
    depth = 0
  } = e;
  if (null === obj) return jsx("span", {
    className: _$$s3.colorTextTertiary.$,
    children: getI18nString("assistant.debug.null")
  });
  if ("object" != typeof obj) {
    if ("string" == typeof obj) {
      if (obj.startsWith("{") && obj.endsWith("}")) try {
        let e = JSON.parse(obj);
        return jsx(t0, {
          obj: e,
          depth
        });
      } catch (e) { }
      return obj.startsWith("data:image") ? jsx(t$, {
        url: obj
      }) : obj.length > 300 && obj.match(/^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==)?$/) ? jsx(t$, {
        url: `data:image/jpeg;base64,${obj}`
      }) : jsxs("span", {
        className: _$$s3.colorTextSuccess.$,
        children: ['"', obj, '"']
      });
    }
    return "number" == typeof obj ? jsx("span", {
      className: _$$s3.colorTextSelected.$,
      children: obj
    }) : "boolean" == typeof obj ? jsx("span", {
      className: _$$s3.colorTextComponent.$,
      children: obj.toString()
    }) : jsx("span", {
      children: obj
    });
  }
  let r = Array.isArray(obj);
  let a = r ? ["[", "]"] : ["{", "}"];
  let s = Object.entries(obj);
  return jsxs("div", {
    style: {
      marginLeft: `${8 * depth}px`
    },
    children: [a[0], s.length > 0 && jsx("div", {
      children: s.map(([e, t], a) => jsxs("div", {
        children: [!r && jsx("span", {
          className: _$$s3.colorTextDanger.$,
          children: `"${e}:" `
        }), jsx(t0, {
          obj: t,
          depth: depth + 1
        }), a < s.length - 1 && ","]
      }, e))
    }), a[1]]
  });
}
function t1(e) {
  let {
    data
  } = e;
  return jsx("pre", {
    contentEditable: !0,
    className: "font-mono text-sm select-all text-wrap",
    children: jsx(t0, {
      obj: data
    })
  });
}
function t2({
  messages: e
}) {
  return jsx("div", {
    children: jsx("div", {
      className: _$$s3.px2.py2.$,
      children: jsx(t1, {
        data: e
      })
    })
  });
}
let t3 = Ju(function ({
  messages: e
}) {
  let t = useDispatch();
  return jsx(Ao, {
    onClose: () => {
      t(AS());
    },
    initialPosition: new Point(0, 0),
    initialWidth: 400,
    allowResizeWidth: !0,
    autoflowHeight: !0,
    title: getI18nString("assistant.debug.title"),
    dragHeaderOnly: !0,
    children: jsxs("div", {
      className: _$$s3.px2.py2.$,
      style: {
        height: 600,
        overflowX: "scroll",
        overflowY: "scroll"
      },
      children: [jsx($n, {
        onClick: () => {
          navigator.clipboard.writeText(JSON.stringify(e, void 0, 2));
        },
        children: getI18nString("assistant.debug.copy_all")
      }), jsx(t2, {
        messages: e
      })]
    })
  });
}, "AssistantDebugModal", ZU.YES);
function t5() {
  let [e, t] = useState("");
  let [i, r] = useAtomValueAndSetter(ta);
  let o = useDispatch();
  let l = useSelector(e => e.modalShown);
  _$$b();
  let d = useCallback(() => {
    if (l && l.type === t3.type) {
      o(AS());
      return;
    }
    o(_$$to({
      type: t3,
      data: {
        messages: i.messages
      }
    }));
  }, [i.messages, o, l]);
  useEffect(() => {
    l?.type !== t3.type || o(_$$hm({
      type: t3.type,
      data: {
        messages: i.messages
      }
    }));
  }, [i.messages, o, l]);
  let u = useCallback(() => {
    "/debug" === e ? d() : tC(e, i.messages, r, tx);
    t("");
  }, [e, i.messages, r, d]);
  return jsxs(_$$n, {
    height: wC,
    hideActionPanel: !0,
    children: [jsx(_$$n.Body, {
      children: 0 === i.messages.length ? jsx(t4, {}) : jsx(_$$q, {
        stretchContent: !1,
        useBottomPinning: !0,
        enableScrollShadow: !0,
        children: jsxs("div", {
          className: _$$s3.py8.flex.flexColumn.gap4.$,
          children: [i.messages.map((e, t) => jsx(ie, {
            message: e
          }, `msg-${t}`)), jsx("div", {
            style: {
              marginLeft: "44px",
              marginRight: "12px"
            },
            children: jsx(t8, {
              status: i.status
            })
          })]
        })
      })
    }), jsx(_$$n.Footer, {
      children: jsx(vj, {
        placeholder: getI18nString("fullscreen_actions.assistant-chat"),
        searchQuery: e,
        onSearchChange: t,
        endEnhancer: jsx(_$$r, {
          shortcuts: [{
            key: Uz.ENTER
          }],
          onAction: u,
          disabled: 0 === e.length || i.status === tn.Loading,
          children: getI18nString("assistant.chat.send_message")
        })
      })
    })]
  });
}
function t4() {
  return jsxs("div", {
    className: _$$s3.flex.flexColumn.itemsCenter.justifyEnd.hFull.gap8.$,
    children: [jsx(_$$m, {}), jsxs("div", {
      className: _$$s3.flex.flexRow.gap16.$,
      children: [jsxs("div", {
        className: _$$s3.flex.flexColumn.itemsCenter.flexGrow1.gap8.$,
        children: [jsxs(t6, {
          inputToSend: "Find similar designs to my selection",
          children: [jsx(tA, {}), "Find designs"]
        }), jsxs(t6, {
          inputToSend: "I want to request a feature.",
          children: [jsx(_$$V3, {}), getI18nString("assistant.chat.suggestion.request_feature")]
        })]
      }), jsxs("div", {
        className: _$$s3.flex.flexColumn.itemsCenter.flexGrow1.gap8.$,
        children: [jsxs(t6, {
          inputToSend: "Make a plugin that creates rectangles in a grid",
          children: [jsx(_$$x2, {}), getI18nString("assistant.chat.suggestion.make_tool")]
        }), jsxs(t6, {
          inputToSend: "",
          disabled: !0,
          children: [jsx(_$$C, {}), getI18nString("assistant.chat.suggestion.coming_soon")]
        })]
      })]
    })]
  });
}
function t6({
  children: e,
  inputToSend: t,
  disabled: i
}) {
  let [r, s] = useAtomValueAndSetter(ta);
  let o = useCallback(() => {
    tC(t, r.messages, s, tx);
  }, [t, r.messages, s]);
  return jsx("button", {
    className: _$$s3.flex.flexColumn.justifyEnd.wFull.b1.colorBorder.gap8.textBodyLargeStrong.p12.$$if(i, _$$s3.colorTextSecondary).$,
    style: {
      borderRadius: 13,
      minWidth: 150,
      ...(i && {
        "--color-icon": "var(--color-text-secondary)"
      })
    },
    onClick: o,
    disabled: i,
    children: e
  });
}
function t7({
  children: e
}) {
  return jsx("div", {
    className: _$$s3.flex.flexRow.itemsCenter.wFull.b1.colorBorder.gap8.h40.textBodyLargeStrong.px4.mr12.$,
    style: {
      borderRadius: 13
    },
    children: e
  });
}
function t8({
  status: e
}) {
  let t;
  switch (e) {
    case tn.Idle:
      t = null;
      break;
    case tn.Loading:
      t = jsxs(t7, {
        children: [jsx("div", {
          className: _$$s3.pl4.flex.itemsCenter.justifyCenter.$,
          children: jsx(_$$k2, {})
        }), jsx("div", {
          className: _$$s3.colorTextSecondary.$,
          children: getI18nString("assistant.chat.status.loading")
        })]
      });
      break;
    case tn.Error:
      t = jsxs(t7, {
        children: [jsx(_$$Z, {}), getI18nString("assistant.chat.status.error")]
      });
      break;
    default:
      throwTypeError(e);
  }
  return jsx(_$$N, {
    mode: "popLayout",
    initial: !1,
    children: jsx(_$$P2.div, {
      initial: {
        opacity: 0
      },
      animate: {
        opacity: 1
      },
      exit: {
        opacity: 0
      },
      children: t
    }, e)
  });
}
function t9(e) {
  let t = useRef(null);
  let i = useSelector(_$$tB);
  try {
    let r = e.content;
    let a = "string" == typeof r ? JSON.parse(r) : r;
    let {
      userFacing
    } = t_.parse(a);
    if ("fragments" === userFacing.type) {
      let e = userFacing.fragments.map(e => ({
        ...e,
        type: "fig-file-fragment"
      }));
      return jsx(_$$U2, {
        fragments: e,
        focusHandle: t,
        numberOfGridColumns: 3,
        maxResults: 3,
        entryPoint: G4.ACTIONS_LIST,
        disableActionShortcuts: !0
      });
    }
    if ("assets" === userFacing.type) return jsx(_$$x3, {
      primary: !0,
      columns: 3,
      padding: 8,
      gap: 12,
      children: userFacing.assets.map((e, t) => jsx(_$$a, {
        asset: e,
        assetTypeDropdownSelection: _$$I2.ALL,
        disableActionShortcuts: !0,
        libraryNameByLibraryKeyFromLG: {},
        openFileKey: i?.key ?? "",
        queryId: "",
        searchQuery: userFacing.queries[0],
        searchSessionId: atomStoreManager.get(_$$dd) ?? "",
        sectionPosition: t
      }, t))
    });
    if ("selection" === userFacing.type) return jsxs(t7, {
      children: [jsx(_$$W, {}), getI18nString("assistant.chat.tool_result.selection.success")]
    });
    if ("request-feature" === userFacing.type) return jsxs(t7, {
      children: [jsx(_$$W, {}), getI18nString("assistant.chat.tool_result.feature_request")]
    });
    return jsxs(t7, {
      children: [jsx(_$$g3, {}), getI18nString("assistant.chat.tool_result.success")]
    });
  } catch (e) {
    return jsxs(t7, {
      children: [jsx(_$$Z, {}), getI18nString("assistant.chat.tool_result.error")]
    });
  }
}
function ie({
  message: e
}) {
  let t = _$$iZ();
  return "user" === e.role && "string" != typeof e.content && e.content?.length && e.content[0]?.type === "text" && e.content[0].text.startsWith("\x3c!--") || "assistant" === e.role && !e.content || "tool" === e.role && !e.content ? null : jsx("div", {
    className: _$$s3.px12.py4.flex.wFull.$,
    children: jsxs("div", {
      className: _$$s3.gap8.flex.wFull.$,
      children: [jsx("div", {
        className: _$$s3.w24.h24.flexShrink0.flex.itemsCenter.justifyCenter.$,
        children: "assistant" === e.role || "tool" === e.role ? jsx(_$$m, {}) : t?.img_url ? jsx(_$$J, {
          src: t.img_url,
          className: _$$s3.w16.h16.radiusFull.$
        }) : jsx(_$$_2, {})
      }), jsxs("div", {
        className: _$$s3.flex.flexColumn.wFull.pt2.$,
        children: [jsx("span", {
          className: _$$s3.textBodyLargeStrong.$,
          children: "assistant" === e.role || "tool" === e.role ? "Figma" : "You"
        }), "tool" === e.role ? jsx("div", {
          className: _$$s3.wFull.pt4.$,
          children: jsx(t9, {
            ...e
          })
        }) : "string" == typeof e.content ? jsx(it, {
          text: e.content
        }) : jsx("div", {
          children: e.content?.map((e, t) => "text" === e.type ? jsx(it, {
            text: e.text
          }, `sub-t-${t}`) : null)
        })]
      })]
    })
  });
}
function it({
  text: e
}) {
  let t = e;
  try {
    let i = new DOMParser().parseFromString(e, "text/xml").getElementsByTagName("user_input");
    i.length > 0 && (t = i[0].textContent || "");
  } catch { }
  return jsx("div", {
    children: t.split("\n").map((e, t) => jsxs("span", {
      children: [e, jsx("br", {})]
    }, `l-${t}`))
  });
}
let ic = memo(function (e) {
  return jsx("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: jsx("path", {
      fill: "var(--color-icon)",
      fillRule: "evenodd",
      d: "M16 17.5a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5V14H7v3.5A1.5 1.5 0 0 0 8.5 19h7a1.5 1.5 0 0 0 1.5-1.5V9.414a1 1 0 0 0-.293-.707l-3.414-3.414A1 1 0 0 0 12.586 5H8.5A1.5 1.5 0 0 0 7 6.5V11h1V6.5a.5.5 0 0 1 .5-.5H12v2.5a1.5 1.5 0 0 0 1.5 1.5H16zM13 6.414V8.5a.5.5 0 0 0 .5.5h2.086zm-2.146 3.732a.5.5 0 0 0-.708.708L11.293 12H5.5a.5.5 0 0 0 0 1h5.793l-1.147 1.146a.5.5 0 0 0 .708.708l2-2a.5.5 0 0 0 0-.708z",
      clipRule: "evenodd"
    })
  });
});
var ip = iu;
var im = ih;
function ig() {
  let e = useSelector(e => e.mirror?.appModel);
  return (t, i, r = !1) => {
    let n = t[i];
    if (n && (r || !n.disabled && (!n.action || Yh(e, i)))) return n;
  };
}
function i_(e) {
  switch (e) {
    case _$$b4.RECENTS:
      return 0;
    case _$$b4.ORGANIZE:
      return 1;
    case _$$b4.TEMPLATES_AND_DIAGRAMS:
      return 2;
    case _$$b4.IMAGE_EDITING:
      return 3;
    case _$$b4.DESIGN_TOOLS:
      return 4;
    case _$$b4.RIFFING_AND_WRITING:
      return 5;
    case _$$b4.COLLABORATION_TOOLS:
      return 6;
    case _$$b4.HANDOFF_TOOLS:
      return 7;
    case _$$b4.VIEWER_TOOLS:
      return 8;
    case _$$b4.SUGGESTIONS:
      return 9;
    case _$$b4.COMMON_SETTINGS:
      return 10;
    case _$$b4.SEARCH_FOR:
      return 11;
    case _$$b4.MATCHING_ACTIONS:
      return 12;
    case null:
      return 100;
    default:
      return throwTypeError(e);
  }
}
let iw = new Set([_$$JT.REMOVE_BACKGROUND, _$$JT.UPSCALE_IMAGE]);
let iS = new Set([...iw, _$$JT.EDIT_IMAGE]);
var ij = (e => (e[e.NONE = 0] = "NONE", e[e.MULTI_IMAGE = 1] = "MULTI_IMAGE", e[e.SINGLE_IMAGE = 2] = "SINGLE_IMAGE", e[e.IMAGE_PLACEHOLDER = 3] = "IMAGE_PLACEHOLDER", e))(ij || {});
let iI = new Map([[_$$JT.REMOVE_BACKGROUND, _$$b4.IMAGE_EDITING], [_$$JT.UPSCALE_IMAGE, _$$b4.IMAGE_EDITING], [_$$JT.GENERATE_IMAGE, _$$b4.IMAGE_EDITING], [_$$JT.EDIT_IMAGE, _$$b4.IMAGE_EDITING], [_$$JT.AUTO_RENAME_LAYERS, _$$b4.DESIGN_TOOLS], [_$$JT.CONTENT_FILL, _$$b4.DESIGN_TOOLS], [_$$JT.FIND_INSPIRATION, _$$b4.DESIGN_TOOLS], [_$$JT.FIRST_DRAFT, _$$b4.DESIGN_TOOLS], [_$$JT.FIRST_DRAFT_FINE_TUNE, _$$b4.DESIGN_TOOLS], [_$$JT.MAGIC_LINK, _$$b4.DESIGN_TOOLS], [_$$JT.MAKE_EDITS, _$$b4.DESIGN_TOOLS], [_$$JT.REWRITE_TEXT, _$$b4.RIFFING_AND_WRITING], [_$$JT.SLIDES_GENERATE_SPEAKER_NOTES, _$$b4.RIFFING_AND_WRITING], [_$$JT.SLIDES_REWRITE_TEXT, _$$b4.RIFFING_AND_WRITING], [_$$JT.SHORTEN_TEXT, _$$b4.RIFFING_AND_WRITING], [_$$JT.TRANSLATE_TEXT, _$$b4.RIFFING_AND_WRITING], [_$$JT.WHITEBOARD_GENERATE_CONTENT, _$$b4.TEMPLATES_AND_DIAGRAMS], [_$$JT.SUMMARIZE_STICKIES, _$$b4.ORGANIZE], [_$$JT.SORT_STICKIES_BY_TOPIC, _$$b4.ORGANIZE], [_$$JT.MIND_MAP_GENERATE_IDEAS, _$$b4.TEMPLATES_AND_DIAGRAMS], [OZ, _$$b4.DESIGN_TOOLS]]);
let ik = [["set-tool-comments", _$$b4.COLLABORATION_TOOLS], ["present-as-prototype", _$$b4.COLLABORATION_TOOLS], ["set-tool-measure", _$$b4.HANDOFF_TOOLS], ["set-tool-annotate", _$$b4.HANDOFF_TOOLS], ["zoom-to-fit", _$$b4.VIEWER_TOOLS], ["export-selected-exportables", _$$b4.VIEWER_TOOLS], ["copy-as-png", _$$b4.VIEWER_TOOLS]];
let iN = [["theme-light-mode", _$$b4.COMMON_SETTINGS], ["theme-dark-mode", _$$b4.COMMON_SETTINGS], ["theme-system", _$$b4.COMMON_SETTINGS]];
let iA = [["theme-light-mode", _$$b4.COMMON_SETTINGS], ["theme-dark-mode", _$$b4.COMMON_SETTINGS], ["theme-system", _$$b4.COMMON_SETTINGS]];
let iO = [["request-to-edit", _$$b4.COLLABORATION_TOOLS], ["set-tool-comments", _$$b4.COLLABORATION_TOOLS], ["present-as-prototype", _$$b4.COLLABORATION_TOOLS], ["zoom-to-fit", _$$b4.VIEWER_TOOLS], ["page-next", _$$b4.VIEWER_TOOLS], ["export-selected-exportables", _$$b4.VIEWER_TOOLS], ["toggle-rulers", _$$b4.VIEWER_TOOLS]];
var iL = (e => (e.DESIGN_EDITOR_AI = "DESIGN_EDITOR_AI", e.DESIGN_EDITOR_NO_AI = "DESIGN_EDITOR_NO_AI", e.DESIGN_VIEWER = "DESIGN_VIEWER", e.DEV_MODE = "DEV", e.VARIABLES_TABLE = "VARIABLES_TABLE", e.COMPONENT_BROWSER = "COMPONENT_BROWSER", e.NONE = "NONE", e))(iL || {});
function iR() {
  let e = Ez5?.singleSlideView().isFocusedNodeViewFocused();
  let t = Vr();
  let i = useSelector(Sh);
  return (!t || !t.isSlide || !e) && i.length > 0;
}
function iD(e, t) {
  let i = useSelector(e => e.selectedView);
  return useMemo(() => new xm(e, i, t, {
    includeDisabled: !0,
    acceptsUnicode: !0
  }), [e, i, t]);
}
function iW({
  children: e
}) {
  return jsxs("div", {
    className: "x78zum5 x1q0g3np x6s0dn4 xg2d0mh",
    children: [e, jsx(_$$E3, {
      variant: "brandOutline",
      children: renderI18nText("fullscreen_actions.new")
    })]
  });
}
let i$ = memo(function (e) {
  return jsx("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: jsx("path", {
      fill: "var(--color-icon)",
      fillRule: "evenodd",
      d: "M16.5 6A1.5 1.5 0 0 1 18 7.5v6a.5.5 0 0 1-1 0V10h-6v7h2.5a.5.5 0 0 1 0 1h-6A1.5 1.5 0 0 1 6 16.5v-9A1.5 1.5 0 0 1 7.5 6zM10 17v-7H7v6.5a.5.5 0 0 0 .5.5zM7 9h10V7.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5zm9.7 7.7.315-1.26c.126-.505.844-.505.97 0l.315 1.26 1.26.315c.505.126.505.844 0 .97l-1.26.315-.315 1.26c-.126.505-.844.505-.97 0L16.7 18.3l-1.26-.315c-.505-.126-.505-.844 0-.97z",
      clipRule: "evenodd"
    })
  });
});
let i8 = memo(function (e) {
  return _$$O() ? jsx("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: jsx("path", {
      fill: "var(--color-icon)",
      fillRule: "evenodd",
      d: "M18 7a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-2 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 7a.5.5 0 0 1 .5.5v1h1a.5.5 0 1 1 0 1h-1v1a.5.5 0 1 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 .5-.5M8.564 7.62l-.589 2.355-2.355.589c-1.495.374-1.495 2.498 0 2.872l2.355.588.59 2.356c.373 1.494 2.497 1.494 2.87 0l.59-2.356 2.355-.588c1.495-.374 1.495-2.498 0-2.872l-2.355-.589-.59-2.355c-.373-1.495-2.497-1.495-2.87 0m.97.242L8.8 10.8l-2.937.734c-.485.121-.485.81 0 .931L8.8 13.2l.734 2.937c.122.485.81.485.932 0L11.2 13.2l2.937-.735c.485-.12.485-.81 0-.93L11.2 10.8l-.734-2.938c-.121-.484-.81-.484-.932 0",
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
      d: "m9.064 7.12-.589 2.356-2.355.589c-1.495.373-1.495 2.498 0 2.871l2.355.589.59 2.355c.373 1.495 2.497 1.495 2.87 0l.59-2.355 2.355-.589c1.495-.373 1.495-2.498 0-2.871l-2.355-.59-.59-2.354c-.373-1.495-2.497-1.495-2.87 0m.97.243L9.3 10.3l-2.937.735c-.485.12-.485.81 0 .931L9.3 12.7l.734 2.938c.122.484.81.484.932 0L11.7 12.7l2.937-.734c.485-.121.485-.81 0-.931L11.7 10.3l-.734-2.937c-.121-.485-.81-.485-.932 0M15.5 7a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1m1.5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M15.5 14a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 1 1 0 1H16v.5a.5.5 0 0 1-1 0V16h-.5a.5.5 0 0 1 0-1h.5v-.5a.5.5 0 0 1 .5-.5",
      clipRule: "evenodd"
    })
  });
});
function rC({
  action: e,
  actionType: t,
  actionIcon: i,
  actionLabel: r,
  instructionLabel: a
}) {
  let [s] = useAtomValueAndSetter(hQ);
  let o = _$$s6(e);
  let {
    close
  } = cq();
  let d = _M({
    action: e,
    clientLifecycleId: void 0
  });
  return s ? (close(), null) : e && o.state !== _$$w2.SELECTION_OK ? jsx(_$$A2, {
    action: e,
    actionIcon: i,
    actionLabel: r,
    onPerform: () => {
      o.confirmInitialSelection();
      J7(t);
      close();
    },
    aiTrackingContext: d,
    instructionAction: {
      type: "learn_more",
      url: UW
    },
    children: a
  }) : null;
}
let rk = async ({
  params: {
    mermaidText: e
  }
}) => {
  let t = _$$Ay3();
  let i = await Ay.figjam.createVisual({
    prompt: "",
    visualType: "diagram",
    directMermaidText: e
  }, t);
  Rz("diagram", i);
};
var rB = rF;
function rY(e, t) {
  return YJ({
    nodeIds: Object.keys(e),
    options: {
      skipNodeIds: !1,
      detachInstances: !0,
      includeType: !0,
      skipNodeIdsWithoutType: t,
      classPropName: "class",
      autoLayoutTagName: "div",
      frameTagName: "div"
    }
  });
}
let rX = "first_draft_prompt_history_";
async function r$(e, t, i) {
  let r = getSingletonSceneGraph();
  for (let n of i.flatMap(e => e.nodeWeightInfos)) {
    let i = r.get(n.nodeId);
    if (!i) continue;
    let a = function (e, t, i, r) {
      if (!_$$z2[t]) return;
      let n = _$$z2[e];
      if (n) return n[i][r];
    }(t, i.fontName.family, e, n.weight);
    let s = {
      family: t,
      style: a?.style ?? i.fontName.style
    };
    try {
      await uW(s);
      _$$l2.user("first-draft-theme-modal-adjust-font-family", () => {
        i.fontName = s;
      });
    } catch (r) {
      let e = {
        family: t,
        style: "Regular"
      };
      try {
        await uW(e);
        _$$l2.user("first-draft-theme-modal-adjust-font-family", () => {
          i.fontName = e;
        });
      } catch (t) {
        let e = void 0 === t ? "undefined" : t instanceof Error ? t.message : JSON.stringify(t);
        analyticsEventManager.trackDefinedEvent("ai_generation.first_draft_font_error", {
          error: e,
          family: s.family,
          style: s.style,
          location: "adjust-font"
        });
      }
    }
    _$$l2.user("first-draft-theme-modal-adjust-font-family", () => {
      a?.letterSpacing !== void 0 && (i.letterSpacing = a.letterSpacing);
    });
  }
}
let ne = new _$$q2(40);
async function nt({
  changes: e,
  makeChangesSessionId: t,
  clientLifecycleId: i,
  containingNodeId: r,
  instrumentationRef: n
}) {
  let a = getSingletonSceneGraph().get(e.affectedId);
  if (!a) return !1;
  let s = `${t}:${e.affectedId}`;
  if (ne.has(s)) {
    reportError(_$$e.AI_GENERATION, Error("first-draft: Attempted to apply content changes twice"), {
      extra: {
        clientLifecycleId: i
      }
    });
    return !1;
  }
  if (ne.set(s, !0), !a.getSharedPluginData("jsx", "isImage")) {
    _$$l2.ai("first-draft-iterate-text-content", () => function ({
      node: e,
      textContent: t
    }) {
      return "TEXT" !== e.type ? (logWarning("first-draft", "Update text called on a non-text node", {
        nodeId: e.guid,
        nodeType: e.type
      }), !1) : (e.characters = t, !0);
    }({
      node: a,
      textContent: e.content
    }));
    return !0;
  }
  {
    let t = a.getSharedPluginData("jsx", "background");
    await n.current.logImageLoad(() => Og({
      node: a,
      description: e.content,
      background: t,
      clientLifecycleId: i,
      containingNodeId: r,
      endpoint: Ay.design.firstDraftCreateImage
    }));
    return !0;
  }
}
async function ni(e, t) {
  try {
    let {
      parseJSX
    } = await Promise.resolve().then(_require);
    return parseJSX(e, t);
  } catch {
    return null;
  }
}
async function na({
  action: e,
  insertJSX: t,
  options: {
    dsKitKey: i,
    currentTheme: r,
    imageArgs: n,
    rootNodeId: a
  }
}) {
  try {
    let {
      affectedId,
      jsxToInsert
    } = e;
    let l = getSingletonSceneGraph().get(affectedId);
    if (!l) throw Error("Could not find affected node in the scene");
    let d = getSingletonSceneGraph().get(a);
    if (!d) throw Error("Could not find root node in the scene");
    let c = _$$BY(d);
    let u = l.parentNode;
    if (!u) throw Error("Could not find affected node in the scene");
    let p = u.childrenGuids.indexOf(affectedId);
    if (-1 === p) throw Error("Could not find affected node in the scene");
    let h = "below";
    "insert" === e.type && (h = e.insertBehavior);
    let m = await ni(jsxToInsert);
    if (!m || 0 === m.length) throw Error("Failed to parse JSX");
    let f = fv(m);
    if (0 === f.size) throw Error("Only building blocks can be inserted or replaced");
    await t({
      jsxStr: "```jsx\n" + jsxToInsert + "\n```",
      options: {
        ...Dp(),
        insertBehavior: "inline",
        dsKitKey: i,
        themeProperties: r,
        deviceType: c,
        parentNodeId: u.guid,
        insertAtIndex: "above" === h ? p : p + 1,
        imageArgs: n
      }
    });
    "replace" === e.type && _$$l2.ai("first-draft-make-changes-remove", () => {
      l.removeSelfAndChildren();
    });
  } catch (t) {
    reportError(_$$e.AI_GENERATION, t, {
      extra: {
        action: e,
        dsKitKey: i
      }
    });
    return t;
  }
}
function nl() {
  let e = _$$eY();
  let t = Object.entries(KH()).filter(([e, t]) => t).map(([e]) => e);
  let i = null;
  for (let r of t) if (i = function (t) {
    let i = "";
    let r = t;
    for (; !i && r;) {
      let t = e.get(r);
      if (!t) break;
      t.getSharedPluginData(SV, "userPrompt") && (i = r);
      r = t.parentGuid || "";
    }
    return i || null;
  }(r)) break;
  return i;
}
function nh() {
  return jsx("div", {
    className: "animation_overlay--Sweep--yk3ZW"
  });
}
var nx = n_;
var ny = (e => (e.mobile = "MOBILE", e.web = "WEB", e))(ny || {});
function nb(e = 1) {
  let t = [{
    label: getI18nString("first_draft.make_changes.prompt_labels.change_font"),
    prompt: getI18nString("first_draft.make_changes.prompts.futuristic_font")
  }, {
    label: getI18nString("first_draft.make_changes.prompt_labels.colors"),
    prompt: getI18nString("first_draft.make_changes.prompts.calming_colors")
  }, {
    label: getI18nString("first_draft.make_changes.prompt_labels.round_corners"),
    prompt: getI18nString("first_draft.make_changes.prompts.round_corners")
  }, {
    label: getI18nString("first_draft.make_changes.prompt_labels.colors"),
    prompt: getI18nString("first_draft.make_changes.prompts.watermelon_theme")
  }, {
    label: getI18nString("first_draft.make_changes.prompt_labels.rewrite"),
    prompt: getI18nString("first_draft.make_changes.prompts.punchier_text")
  }, {
    label: getI18nString("first_draft.make_changes.prompt_labels.imagery"),
    prompt: getI18nString("first_draft.make_changes.prompts.vibrant_images")
  }, {
    label: getI18nString("first_draft.make_changes.prompt_labels.add"),
    prompt: getI18nString("first_draft.make_changes.prompts.add_another_section")
  }, {
    label: getI18nString("first_draft.make_changes.prompt_labels.replace"),
    prompt: getI18nString("first_draft.make_changes.prompts.replace_hero_image")
  }];
  return eV()(nx()(t.filter(e => "" !== nC(e.label))), e => e.label).slice(0, e);
}
function nC(e) {
  return e.trim().toLowerCase();
}
function nP({
  children: e
}) {
  let t = useRef(null);
  let {
    tracker,
    index
  } = L0(t);
  let s = useMemo(() => ({
    trackerRef: tracker,
    layoutIndex: index
  }), [index, tracker]);
  return jsx(MQ.Provider, {
    value: s,
    children: e
  });
}
let nF = createContext({
  isFocused: !1
});
function nB({
  children: e,
  defaultActiveIndex: t = 0,
  itemsPerRow: i
}) {
  let r = useRef(null);
  let [s, o] = useState(!1);
  useEffect(() => {
    let e = () => r.current?.blur();
    document.addEventListener("mousedown", e);
    return () => document.removeEventListener("mousedown", e);
  }, []);
  useEffect(() => {
    let e = r.current;
    if (!e) return;
    let t = () => o(!0);
    let i = () => o(!1);
    e.addEventListener("focus", t);
    e.addEventListener("blur", i);
    return () => {
      e.removeEventListener("focus", t);
      e.removeEventListener("blur", i);
    };
  }, []);
  let l = useMemo(() => ({
    isFocused: s,
    itemsPerRow: i
  }), [s, i]);
  return jsx(_$$_4, {
    fillWidth: !0,
    children: jsx("div", {
      className: "keyboard_navigation_on_focus--parent--XamDV",
      tabIndex: 0,
      ref: r,
      children: jsx(nP, {
        children: jsx(_$$A6.Provider, {
          value: t,
          children: jsx(nF.Provider, {
            value: l,
            children: e
          })
        })
      })
    })
  });
}
function nU({
  children: e,
  primaryAction: t,
  className: i,
  htmlAttributes: r,
  ...s
}) {
  let o = useRef(null);
  let {
    isFocused,
    itemsPerRow
  } = useContext(nF);
  let {
    active,
    target
  } = _$$H({
    ref: o,
    itemsPerRow
  });
  let p = useCallback(() => {
    isFocused && t();
  }, [isFocused, t]);
  let h = useMemo(() => ({
    shortcuts: [{
      key: Uz.ENTER
    }],
    onAction: p,
    allowDefault: !0
  }), [p]);
  _$$k4({
    primaryAction: h,
    active,
    actionLabel: !1,
    target
  });
  return jsx(D8, {
    forwardedRef: o,
    className: rB()(i, {
      "keyboard_navigation_on_focus--active--vGhwX": active
    }),
    ...r,
    ...s,
    children: e
  });
}
let nz = [_$$jR, N0, _$$k5, RO, Sb].map(e => ({
  string: e,
  color: _$$F4.parse(e)
}));
function nV({
  theme: e,
  onChangeColor: t,
  activeColorIdx: i,
  activeColorOutline: r,
  idx: s,
  colorSwatch: o
}) {
  let l = useCallback(() => {
    t(o.color);
    Y5.triggerAction("commit");
  }, [o.color, t]);
  return jsx(nU, {
    primaryAction: l,
    children: jsx(cd, {
      size: "medium",
      value: o.color,
      background: "dark" === e ? "dark" : "light",
      onClick: l,
      paletteType: "base",
      swatchStyle: {
        ...(i === s && {
          outline: r,
          outlineOffset: "2px"
        }),
        boxSizing: "border-box",
        boxShadow: "none"
      }
    }, o.string)
  });
}
function nW(e) {
  return jsx(nU, {
    primaryAction: e.onClick,
    children: jsx("div", {
      className: _$$s3.radiusFull.$,
      children: -1 === e.activeColorIdx ? jsx(cd, {
        size: "medium",
        value: e.value,
        paletteType: "base",
        selectionState: "selected_custom",
        background: "dark" === e.theme ? "dark" : "light",
        onClick: e.onClick,
        swatchStyle: {
          boxSizing: "border-box",
          boxShadow: "none"
        }
      }) : jsx(ZI, {
        size: "medium",
        onClick: e.onClick,
        swatchStyle: {
          boxSizing: "border-box",
          boxShadow: "none"
        }
      })
    })
  });
}
function nY({
  theme: e,
  onChangeColor: t,
  setShowCustomColorPicker: i,
  value: r
}) {
  let s = useCallback(() => {
    i(!0);
  }, [i]);
  let o = zN(r, DA);
  let {
    activeColorIdx,
    activeColorOutline
  } = useMemo(() => ({
    activeColorIdx: nz.findIndex(e => DA(e.color, o)),
    activeColorOutline: `2px solid ${_$$F4.format(o)}`,
    value: o
  }), [o]);
  let c = Math.max(activeColorIdx, 0);
  return jsx(nB, {
    defaultActiveIndex: c,
    children: jsx("div", {
      className: _$$s3.flex.flexGrow1.justifyBetween.$,
      style: {
        boxSizing: "content-box"
      },
      children: jsxs(Fragment, {
        children: [nz.map((i, r) => jsx(nV, {
          theme: e,
          onChangeColor: t,
          activeColorIdx,
          activeColorOutline,
          idx: r,
          colorSwatch: i
        }, i.string)), jsx(nW, {
          activeColorIdx,
          value: o,
          theme: e,
          onClick: s
        })]
      })
    })
  });
}
var nq = (e => (e.COLOR = "color", e.RADIUS = "radius", e.SPACING = "spacing", e.FONT = "font", e))(nq || {});
var nX = (e => (e.TITLE = "title", e.BODY = "body", e.LABLE = "label", e))(nX || {});
let nZ = "theme_editor--svgText--yyKtR";
let nQ = createContext({
  activeTab: nq.COLOR,
  onTabChange: () => { },
  recordingKey: void 0
});
function n$({
  label: e,
  children: t,
  tab: i
}) {
  let {
    onTabChange,
    activeTab,
    recordingKey
  } = useContext(nQ);
  let l = useCallback(() => {
    onTabChange(i);
  }, [onTabChange, i]);
  return jsx(nU, {
    "aria-label": e,
    primaryAction: l,
    className: rB()("theme_editor--iconButton--SYPlk theme_editor--baseIconButton--15rMM", activeTab === i && "theme_editor--iconActive--8Nsgk"),
    onClick: l,
    recordingKey: _$$Pt(recordingKey, i),
    htmlAttributes: useMemo(() => ({
      "data-tooltip": e,
      "data-tooltip-type": Ib.TEXT,
      "data-tooltip-show-above": !0,
      "data-clickable": !0
    }), [e]),
    children: t
  });
}
function n6(e, t) {
  return t === NVY.HSL ? _$$oB(e) : qN(e);
}
function n7({
  brandColor: e,
  absoluteContainerId: t,
  onChangeColor: i,
  onHide: r
}) {
  let o = useDispatch();
  let l = Um();
  let c = useRef(document.getElementById(t || "fullscreen-root"));
  kz(Uz.ESCAPE, r);
  kz(Uz.BACKSPACE, r, document.activeElement?.tagName.toLowerCase() !== "input");
  let [u, p] = useState(NVY.HEX);
  let [h, m] = useState(n6(e, u));
  let [f, g] = useState({
    left: 0,
    top: 0
  });
  let _ = useRef();
  let x = () => {
    let e = _.current?.getBoundingClientRect();
    e && g({
      left: e.left,
      top: e.bottom - 120
    });
  };
  let y = useCallback(e => {
    e && (_.current = e, x());
  }, []);
  _$$wY(_, () => x());
  _$$wY(c, () => x());
  let b = _$$A4(async (e, t) => {
    await i(e);
    t && Y5.triggerAction("commit");
  }, 100);
  let C = useCallback((e, t) => {
    m(e);
    b(w_(e), t);
  }, [b]);
  let v = useCallback(e => {
    e.a = 1;
    b(e, !0);
    m(QS(h, n6(e, u), e));
  }, [h, u, b]);
  let E = {
    color: e,
    value: h,
    changeCallback: C,
    hideOpacity: !0,
    colorFormat: u,
    dispatch: o,
    currentTool: NLJ.CODE_BLOCK,
    dropdownShown: l,
    onColorChange: v,
    canAcceptStyles: !1,
    canAcceptVariables: !1
  };
  return jsxs("div", {
    className: _$$s3.flex.pr16.pl16.pt8.pb4.flexRow.justifyCenter.itemsEnd.flexGrow1.gap16.$,
    children: [jsxs("div", {
      className: _$$s3.flex.flexRow.justifyCenter.itemsCenter.flexGrow1.gap8.$,
      children: [jsx(_$$K3, {
        "aria-label": getI18nString("first_draft.theme_tool.close_panel"),
        onClick: () => r(),
        recordingKey: "closeSectionEditor",
        children: jsx(_$$C3, {})
      }), jsxs("div", {
        className: _$$s3.flex.flexColumn.justifyBetween.wFull.itemsEnd.gap4.$,
        children: [jsx("div", {
          className: _$$s3.flex.justifyBetween.itemsCenter.wFull.$,
          children: jsx(_$$e5, {
            width: 168,
            color: h,
            changeCallback: C
          })
        }), jsxs("div", {
          className: _$$s3.flex.justifyBetween.itemsCenter.wFull.gap8.$,
          style: {
            maxWidth: 210
          },
          children: [jsx(_$$p2, {
            selectClassName: rB()(_$$s3.flexShrink1.flexGrow0.flex.$, "theme_editor--colorSelect--wIbMH", "theme_editor--precedence--lvYGC"),
            colorFormat: u,
            onColorFormatChange: e => {
              p(e);
              "l" in h && e !== NVY.HSL ? m(qN(w_(h))) : e !== NVY.HSL || "l" in h || m(_$$oB(w_(h)));
            },
            dispatch: o,
            dropdownShown: l
          }), u === NVY.HEX && jsx(_$$dt, {
            ...E
          }), u === NVY.RGB && jsx(VA, {
            ...E
          }), u === NVY.CSS && jsx(he, {
            ...E
          }), (u === NVY.HSL || u === NVY.HSB) && jsx(fC, {
            ...E
          })]
        })]
      })]
    }), jsx("div", {
      className: _$$s3.flex.justifyCenter.itemsCenter.relative.mr8.$,
      ref: y,
      children: jsx("div", {
        style: {
          width: 115
        },
        children: jsxs("div", {
          style: {
            position: "fixed",
            width: 115,
            height: 115,
            ...f
          },
          children: [jsx("div", {
            className: rB()("theme_editor--pickerUnderlay--gfCHS", _$$s3.colorBg.elevation200.absolute.p2.$),
            style: {
              width: 115,
              height: 115,
              borderRadius: 14
            }
          }), jsx("div", {
            className: rB()("theme_editor--pickerOverlay--Ykwy9", _$$s3.flex.colorBg.absolute.p2.overflowHidden.justifyCenter.alignCenter.$),
            style: {
              width: 115,
              height: 115,
              borderRadius: 14
            },
            children: jsx(_$$T5, {
              containerClass: "theme_editor--pickerWrapper--fs-6V",
              size: 115,
              color: h,
              changeCallback: C,
              canvasWrapperStyles: {
                outlineWidth: 0,
                borderRadius: "13px"
              },
              ghostStyles: {
                boxShadow: "none"
              }
            })
          })]
        })
      })
    })]
  });
}
function n9(e) {
  let t = DP();
  let i = e.brandColor;
  let r = ER.get(Math.round(2 * e.cornerRadiusStop) / 2);
  let s = NT.get(Math.round(2 * e.spacingStop) / 2);
  let o = useMemo(() => ({
    activeTab: e.activeTab,
    onTabChange: e.onTabChange,
    recordingKey: e.recordingKey
  }), [e.activeTab, e.onTabChange, e.recordingKey]);
  return jsx(nQ.Provider, {
    value: o,
    children: jsx(nB, {
      defaultActiveIndex: function (e) {
        switch (e) {
          case nq.COLOR:
            return 0;
          case nq.RADIUS:
            return 1;
          case nq.SPACING:
            return 2;
          case nq.FONT:
            return 3;
        }
      }(e.activeTab),
      children: jsxs(_$$B, {
        fullWidth: !0,
        justify: "space-between",
        children: [jsx(n$, {
          tab: nq.COLOR,
          label: getI18nString("first_draft.theme_panel.color"),
          children: jsx(cd, {
            size: "medium",
            value: i,
            paletteType: "base",
            background: "dark" === t ? "dark" : "light",
            swatchStyle: {
              boxSizing: "border-box",
              boxShadow: "none"
            }
          })
        }), jsx(n$, {
          tab: nq.RADIUS,
          label: getI18nString("first_draft.theme_panel.radius"),
          children: jsx(_$$B2, {
            svg: r,
            className: "theme_editor--svgIcon--ongu6"
          })
        }), jsx(n$, {
          tab: nq.SPACING,
          label: getI18nString("first_draft.theme_panel.spacing"),
          children: jsx(_$$B2, {
            svg: s,
            className: nZ
          })
        }), jsx(n$, {
          tab: nq.FONT,
          label: getI18nString("first_draft.theme_panel.font"),
          children: jsx(_$$B2, {
            svg: _$$A7,
            className: nZ
          })
        })]
      })
    })
  });
}
let ae = {
  [nq.COLOR]: function (e) {
    let t = DP();
    let [i, r] = useState(!1);
    let {
      focusParent
    } = e;
    let o = useCallback(() => {
      r(!1);
      focusParent?.();
    }, [focusParent]);
    return i ? jsx(n7, {
      onHide: o,
      ...e
    }) : jsxs("div", {
      className: _$$s3.flex.flexRow.flexGrow1.p16.pt12.pb12.gap16.itemsCenter.$,
      children: [jsx(as, {
        recordingKey: e.recordingKey
      }), jsx("div", {
        className: _$$s3.flex0.flexShrink0.$,
        children: jsxs(_$$bL, {
          onChange: e.onChangeColorMode,
          value: e.colorMode,
          recordingKey: _$$Pt(e, "colorModePicker"),
          legend: jsx(_$$q3, {
            children: renderI18nText("first_draft.theme_tool.color.mode_picker")
          }),
          children: [jsx(c$, {
            value: "light",
            "aria-label": getI18nString("first_draft.theme_tool.color.light_mode"),
            icon: jsx("div", {
              className: _$$s3.flex.w44.itemsCenter.justifyCenter.$,
              children: jsx(_$$Z2, {})
            })
          }), jsx(c$, {
            value: "dark",
            "aria-label": getI18nString("first_draft.theme_tool.color.dark_mode"),
            icon: jsx("div", {
              className: _$$s3.flex.w44.itemsCenter.justifyCenter.$,
              children: jsx(_$$a2, {})
            })
          })]
        })
      }), jsx(nY, {
        value: e.brandColor,
        onChangeColor: e.onChangeColor,
        theme: t,
        setShowCustomColorPicker: r
      })]
    });
  },
  [nq.RADIUS]: function (e) {
    let [t, i] = useState(e.cornerRadiusStop);
    return jsxs("div", {
      className: _$$s3.flex.flexRow.flexGrow1.itemsCenter.p16.gap16.$,
      children: [jsx(as, {
        recordingKey: e.recordingKey
      }), jsx(_$$J4, {
        className: _$$s3.opacity0_5.$,
        children: renderI18nText("first_draft.theme_panel.radius")
      }), jsx(_$$A5, {
        "aria-label": getI18nString("first_draft.theme_panel.radius"),
        bigStep: .2,
        defaultValue: t,
        max: Ne,
        min: Xy,
        onChange: e.onChangeCornerRadiusStop,
        rangeAnchor: Xy,
        recordingKey: _$$Pt(e, "cornerRadiusSlider"),
        step: .1,
        value: e.cornerRadiusStop
      })]
    });
  },
  [nq.SPACING]: function (e) {
    let [t, i] = useState(e.spacingStop);
    return jsxs("div", {
      className: _$$s3.flex.flexRow.flexGrow1.itemsCenter.p16.gap16.$,
      children: [jsx(as, {
        recordingKey: e.recordingKey
      }), jsx(_$$J4, {
        className: _$$s3.opacity0_5.$,
        children: renderI18nText("first_draft.theme_panel.spacing")
      }), jsx(_$$A5, {
        "aria-label": getI18nString("first_draft.theme_panel.spacing"),
        bigStep: .2,
        defaultValue: t,
        max: Ne,
        min: Xy,
        onChange: e.onChangeSpacingStop,
        rangeAnchor: Xy,
        recordingKey: _$$Pt(e, "spacingSizeSlider"),
        step: jF,
        value: e.spacingStop
      })]
    });
  },
  [nq.FONT]: function (e) {
    let [t, i, r] = _$$t3.useTabs({
      [nX.TITLE]: null !== e.titleFont,
      [nX.BODY]: null !== e.bodyFont,
      [nX.LABLE]: null !== e.labelFont
    }, {
      recordingKey: _$$Pt(e, "fontEditor")
    });
    return jsxs("div", {
      className: _$$s3.flex.flex1.flexColumn.$,
      children: [jsxs("div", {
        className: _$$s3.flex.flex1.flexRow.gap8.p8.$,
        children: [jsx(as, {
          recordingKey: e.recordingKey
        }), jsxs(_$$t3.TabStrip, {
          manager: r,
          children: [jsx(_$$t3.Tab, {
            ...t.title,
            children: renderI18nText("first_draft.theme_panel.label.fontTitle")
          }), jsx(_$$t3.Tab, {
            ...t.body,
            children: renderI18nText("first_draft.theme_panel.label.fontBody")
          }), jsx(_$$t3.Tab, {
            ...t.label,
            children: renderI18nText("first_draft.theme_panel.label.fontLabel")
          })]
        })]
      }), jsx("div", {
        className: _$$s3.wFull.colorBgTertiary.h1.$
      }), jsxs("div", {
        className: _$$s3.flex.flex1.flexColumn.gap8.p8.$,
        children: [jsx(_$$t3.TabPanel, {
          ...i.title,
          children: jsx(ar, {
            ...e
          })
        }), jsx(_$$t3.TabPanel, {
          ...i.body,
          children: jsx(an, {
            ...e
          })
        }), jsx(_$$t3.TabPanel, {
          ...i.label,
          children: jsx(aa, {
            ...e
          })
        })]
      })]
    });
  }
};
function at(e) {
  let t = useRef(null);
  let i = useCallback(() => {
    t.current?.focus();
  }, []);
  if (useLayoutEffect(i, [i]), !e.section) return null;
  let r = ae[e.section];
  return jsx("div", {
    ref: t,
    tabIndex: -1,
    className: rB()("theme_editor--boxInherit--BjYCO", _$$s3.flex.relative.wFull.$),
    children: jsx(r, {
      focusParent: i,
      ...e
    })
  });
}
function ai({
  selectedKey: e,
  items: t,
  recordingKey: i
}) {
  let r = t.findIndex(({
    key: t
  }) => t === e);
  return jsx(nB, {
    defaultActiveIndex: r > -1 ? r : 0,
    itemsPerRow: 5,
    children: jsx("div", {
      className: _$$s3.flex.flex1.flexWrap.itemsCenter.rowGap8.justifyBetween.$,
      children: t.map(({
        key: t,
        name: r,
        svg: a,
        onClick: s
      }) => jsx(nU, {
        "aria-label": r,
        recordingKey: _$$Pt(i, t),
        className: rB()("theme_editor--fontIconButton--Vc-KE theme_editor--iconButton--SYPlk theme_editor--baseIconButton--15rMM", nZ, e === t && "theme_editor--selected--2BGbx"),
        primaryAction: s,
        onClick: s,
        htmlAttributes: {
          "data-tooltip": r,
          "data-tooltip-show-above": !0,
          "data-tooltip-type": Ib.TEXT
        },
        children: jsx(_$$B2, {
          svg: a
        })
      }, t))
    })
  });
}
function ar(e) {
  let t = `FontTitle_${e.titleFont}`;
  let i = Array.from(X4).map(([t, i]) => ({
    key: `FontTitle_${t}`,
    name: t,
    svg: i,
    onClick: () => e.onChangeTitleFont(t)
  }));
  return null === e.titleFont ? null : jsx(ai, {
    selectedKey: t,
    items: i,
    recordingKey: e.recordingKey
  });
}
function an(e) {
  let t = `FontBody_${e.bodyFont}`;
  let i = Array.from(K4).map(([t, i]) => ({
    key: `FontBody_${t}`,
    name: t,
    svg: i,
    onClick: () => e.onChangeBodyFont(t)
  }));
  return null === e.bodyFont ? null : jsx(ai, {
    selectedKey: t,
    items: i,
    recordingKey: e.recordingKey
  });
}
function aa(e) {
  let t = `FontLabel_${e.labelFont}`;
  let i = Array.from(pz).map(([t, i]) => ({
    key: `FontLabel_${t}`,
    name: t,
    svg: i,
    onClick: () => e.onChangeLabelFont(t)
  }));
  return null === e.labelFont ? null : jsx(ai, {
    selectedKey: t,
    items: i,
    recordingKey: e.recordingKey
  });
}
function as({
  recordingKey: e
}) {
  let {
    pop
  } = cq();
  kz(Uz.ESCAPE, pop);
  kz(Uz.BACKSPACE, pop);
  return jsx("div", {
    className: _$$s3.h24.$,
    children: jsx(_$$K3, {
      recordingKey: _$$Pt(e, "backButton"),
      onClick: pop,
      "aria-label": getI18nString("qa.go_back"),
      children: jsx(_$$C3, {})
    })
  });
}
function al(e) {
  let {
    close
  } = cq();
  f4(i => {
    if (e) for (let e of Object.keys(i.mirror.sceneGraphSelection)) {
      let i = getSingletonSceneGraph().get(e);
      if (i && !i.isOrInFirstDraft) {
        close();
        return;
      }
    }
  });
}
var ad = (e => (e[e.READY_FOR_PROMPT = 0] = "READY_FOR_PROMPT", e[e.RUNNING = 1] = "RUNNING", e[e.FINISHED = 2] = "FINISHED", e[e.ERROR = 3] = "ERROR", e[e.ICANTDOTHIS = 4] = "ICANTDOTHIS", e))(ad || {});
var ac = (e => (e.PROMPT = "prompt", e.THEME = "theme", e))(ac || {});
function au(e, t) {
  switch (t.type) {
    case "NEW_ROOT_NODE":
    case "EDIT_INFO_UPDATED":
      return t.payload;
    case "SET_BRAND_COLOR":
      return {
        ...e,
        brandColor: t.payload
      };
    case "SET_RADIUS":
      return {
        ...e,
        radius: t.payload
      };
    case "SET_SPACING":
      return {
        ...e,
        spacing: t.payload
      };
    case "SET_COLOR_MODE":
      return {
        ...e,
        colorMode: t.payload
      };
    case "SET_TITLE_FONTS":
      return {
        ...e,
        titleFonts: t.payload
      };
    case "SET_BODY_FONTS":
      return {
        ...e,
        bodyFonts: t.payload
      };
    case "SET_LABEL_FONTS":
      return {
        ...e,
        labelFonts: t.payload
      };
  }
}
let ap = {
  brandColor: UE,
  colorMode: _$$lH.LIGHT,
  spacing: 1,
  radius: 1,
  titleFonts: [],
  bodyFonts: [],
  labelFonts: []
};
function ah(e, {
  pinnedRanges: t
} = {}) {
  let i = getSingletonSceneGraph().get(e);
  if (!i) return ap;
  let r = _$$BY(i);
  let n = uP(i, {
    pinnedRanges: t
  });
  let a = Mz(i, r);
  let s = X6(i) ?? UE;
  return {
    brandColor: _$$tK(_$$tb(s, n.colors)) ?? UE,
    colorMode: _$$P3(i) ?? _$$lH.LIGHT,
    spacing: YB(n.spacingRangesForGuids),
    radius: _$$nd(n.radiusValues),
    titleFonts: a.title,
    bodyFonts: a.body,
    labelFonts: a.label
  };
}
function am({
  initialRootGuid: e
}) {
  let t = _M({
    action: _$$JT.FIRST_DRAFT_MAKE_CHANGES,
    clientLifecycleId: void 0
  });
  let i = t.clientLifecycleId;
  let r = _$$tS();
  let s = useCallback(() => {
    trackEventAnalytics("First Draft: Error", {
      file_key: r,
      clientLifecycleId: i,
      view: "firstDraftMakeChanges"
    }, {
      forwardToDatadog: !0,
      sendAsBeacon: !0,
      mlEvent: !0
    });
  }, [r, i]);
  return jsx(_$$tH, {
    boundaryKey: "FirstDraftMakeChanges",
    fallback: H4.NONE_I_KNOW_WHAT_IM_DOING,
    sentryTags: {
      clientLifecycleId: i,
      area: _$$e.AI_GENERATION
    },
    onError: s,
    children: jsx(af, {
      recordingKey: "firstDraftMakeChangesView",
      initialRootGuid: e,
      aiTrackingContext: t
    })
  });
}
function af(e) {
  let t = e.aiTrackingContext;
  let i = t.clientLifecycleId;
  let [r, l] = useState("");
  let c = _$$tS();
  let u = _$$eY();
  let {
    allUsableKitEntries
  } = _$$sI();
  let h = nl() || e.initialRootGuid;
  let m = KH();
  let f = useMemo(() => h ? u.get(h) : null, [u, h]);
  let {
    applyMakeChanges,
    resetMakeChanges,
    instrumentationRef
  } = function ({
    clientLifecycleId: e
  }) {
    let [t] = useState({
      current: _$$g2()
    });
    let {
      insertJSX,
      resetAsync,
      instrumentationRef: _instrumentationRef
    } = Vh({
      clientLifecycleId: e,
      insertType: "makeChanges"
    });
    return {
      applyMakeChanges: useCallback(async (a, s) => {
        let l = [];
        for (let e of ("affectedId" in a && l.push(a.affectedId), "destinationId" in a && l.push(a.destinationId), l)) {
          if (!function e(t, i, r) {
            let n = t.get(i);
            return !!n && (n.guid === r || !!n.parentGuid && e(t, n.parentGuid, r));
          }(getSingletonSceneGraph(), e, s.rootNodeId)) {
            reportError(_$$e.AI_GENERATION, Error("first-draft: Node does not have root node as ancestor"), {
              extra: {
                nodeId: e,
                action: a,
                ...s
              }
            });
            return;
          }
          if (e === s.rootNodeId) {
            reportError(_$$e.AI_GENERATION, Error("first-draft: Tried to mutate root node"), {
              extra: {
                nodeId: e,
                action: a,
                ...s
              }
            });
            return;
          }
        }
        switch (await resetAsync(), a.type) {
          case "theme":
            {
              let {
                content
              } = a;
              content && function (e, t, i) {
                let r = getSingletonSceneGraph().get(e);
                if (!r) return;
                let n = _$$BY(r);
                if (["borderRadii", "spacing", "colors", "fontFamilies"].some(e => e in i)) {
                  let e = k5(t, i);
                  jR(r, e, n);
                }
                let a = t.darkMode ? _$$lH.DARK : _$$lH.LIGHT;
                let s = t.brandColor ?? function (e) {
                  let t = uP(e, {
                    ignoreOpacity: !0
                  });
                  let i = X6(e) ?? UE;
                  return _$$tb(i, t.colors);
                }(r);
                let o = "darkMode" in i ? i.darkMode ? _$$lH.DARK : _$$lH.LIGHT : void 0;
                if (o && a !== o && _$$l2.ai("first-draft-make-changes-theme-switch-mode", () => {
                  _$$t4(r, o, s);
                }), "brandColor" in i && i.brandColor) {
                  let e = _$$tK(i.brandColor);
                  if (e) {
                    let t = qO(e, o ?? a);
                    _$$l2.ai("first-draft-make-changes-theme-brand-color", () => {
                      _$$l3(r, t, o ?? a ?? _$$lH.LIGHT, {}, s);
                    });
                  }
                }
              }(s.rootNodeId, s.currentTheme, content);
              break;
            }
          case "text_or_image":
            await nt({
              changes: a,
              makeChangesSessionId: t.current,
              clientLifecycleId: e,
              containingNodeId: s.rootNodeId,
              instrumentationRef: _instrumentationRef
            });
            break;
          case "insert":
          case "replace":
            await na({
              action: a,
              options: s,
              insertJSX
            });
            await resetAsync();
            break;
          case "remove":
            _$$l2.ai("first-draft-make-changes-remove", () => {
              let e = getSingletonSceneGraph().get(a.affectedId);
              e && e.removeSelfAndChildren();
            });
            break;
          case "move":
            {
              let {
                affectedId,
                destinationId,
                insertBehavior
              } = a;
              _$$l2.ai("first-draft-make-changes-move", () => {
                let r = getSingletonSceneGraph();
                let n = r.get(affectedId);
                let a = r.get(destinationId);
                let s = a?.parentNode;
                let o = s?.childrenGuids.indexOf(destinationId) ?? -1;
                n && s && ("above" === insertBehavior ? s.insertChild(n, o) : "below" === insertBehavior && (o < s.childCount - 1 ? s.insertChild(n, o + 1) : s.appendChild(n)));
              });
              break;
            }
          case "replaceClasses":
            {
              let {
                affectedId,
                classes
              } = a;
              let i = getSingletonSceneGraph().get(affectedId);
              let r = i?.isIconLike && Dk(i) === _$$lg2.CONTENT ? "Icon" : void 0;
              _$$l2.ai("first-draft-make-changes-replace-classes", () => {
                for (let i of classes) _$$w3(affectedId, i, r);
              });
            }
        }
      }, [e, t, insertJSX, _instrumentationRef, resetAsync]),
      resetMakeChanges: useCallback(() => {
        t.current = _$$g2();
      }, [t]),
      instrumentationRef: _instrumentationRef
    };
  }({
    clientLifecycleId: i
  });
  let [y, b] = useState(0);
  let [C, v] = useState(Error(getI18nString("first_draft.something_went_wrong")));
  let [E, T] = useState(null);
  let [w, S, j] = _$$t3.useTabs({
    prompt: !0,
    theme: !0
  }, {
    defaultActive: "theme",
    recordingKey: _$$Pt(e, "tabs")
  });
  let [I, k] = useState(!1);
  al(2 === y || 3 === y || 4 === y);
  let N = useRef(1);
  let A = useRef(null);
  useEffect(() => {
    A.current = r;
  }, [r]);
  let [L, R] = useState(Date.now());
  let D = useDispatch();
  let P = useRef(I);
  useEffect(() => {
    I !== P.current && f && (I ? Vm(f.guid, jsx(nh, {})) : ks(f.guid), P.current = I);
  }, [I, f]);
  let B = useCallback(() => {
    N.current += 1;
    instrumentationRef.current.trackFinished("stopped");
    ax(t, "stopped");
    b(0);
    k(!1);
  }, [b, t, N, instrumentationRef]);
  let U = useCallback(async () => {
    resetMakeChanges();
    let e = N.current;
    let r = {
      file_key: c,
      clientLifecycleId: i,
      generation_id: f?.firstDraftData?.generationId
    };
    try {
      if (instrumentationRef.current.start(), b(1), T(null), R(Date.now()), !f) throw Error("Root node not found");
      let n = f && f.getSharedPluginData(SV, "userPrompt") || "";
      let a = a_(f);
      let s = "LOCAL" === a.type;
      let o = s ? XJn.getKitKey(a.pageId) : a.key;
      let l = allUsableKitEntries.find(e => "key" in e.dsKitKey && e.dsKitKey.key === o);
      Object.assign(r, {
        dsKitType: a.type,
        isLocal: s,
        kitKey: o,
        kitIdentifier: l?.metadata?.identifier ?? null
      });
      trackEventAnalytics("First Draft: Make Changes Started", {
        ...r,
        hasNonRootNodeSelected: !(f.guid in m)
      }, {
        forwardToDatadog: !0,
        batchRequest: !0,
        mlEvent: !0
      });
      Dl(t);
      let {
        jsxStr
      } = rY({
        [f.guid]: !0
      }, !1);
      let {
        jsxStr: _jsxStr
      } = rY({
        [f.guid]: !0
      }, !0);
      if (!jsxStr || !_jsxStr) {
        trackEventAnalytics("First Draft: Make Changes Ended", {
          ...r,
          timeElapsedMs: Date.now() - L,
          status: "failed",
          reason: "infer-jsx-failed",
          hasNonRootNodeSelected: !(f.guid in m)
        }, {
          forwardToDatadog: !0,
          batchRequest: !0,
          mlEvent: !0
        });
        ax(t, "error");
        b(2);
        return;
      }
      let h = A.current || "";
      let _ = function (e) {
        if (!getFeatureFlags().first_draft_prompt_history || !getFeatureFlags().first_draft_make_changes_history) return [];
        let t = getSessionStorage();
        if (!t) return [];
        let i = `${rX}${e}`;
        let r = t.getItem(i);
        if (!r) return [];
        try {
          return _$$z.array(Db).parse(JSON.parse(r));
        } catch { }
        return [];
      }(f.guid);
      let y = function (e) {
        let t = uP(e, {
          ignoreOpacity: !0
        });
        let i = X6(e) ?? UE;
        let r = _$$tb(i, t.colors);
        let n = _$$P3(e) ?? _$$lH.LIGHT;
        return {
          ..._$$rO(e, t),
          version: 2,
          brandColor: r,
          darkMode: "dark" === n
        };
      }(f);
      let C = await Ay.design.firstDraftMakeChanges({
        userPrompt: h,
        promptHistory: _,
        storedInitialPrompt: n,
        kitKey: o ?? "",
        isLocal: s,
        currentTheme: y,
        jsx: jsxStr,
        jsxInsertReplace: _jsxStr
      }, _$$sF({
        clientLifecycleId: i
      }));
      _.push({
        prompt: h
      });
      (function (e, t) {
        let i = getSessionStorage();
        if (!i) return;
        let r = `${rX}${e}`;
        i.setItem(r, JSON.stringify(t));
      })(f.guid, _);
      let v = C.getReader();
      let E = [];
      for (; ;) {
        let {
          done,
          value
        } = await v.read();
        if (e !== N.current) {
          v.cancel();
          break;
        }
        if (instrumentationRef.current.trackFirstByteReceived(), done && instrumentationRef.current.trackLastStreamByteReceived(), logInfo("makeChanges", "Response message", {
          message: value
        }), value?.trace && T(value.trace), value?.action) {
          if ("replaceClasses" === value.action.type && !getFeatureFlags().first_draft_surgical_edits) {
            logWarning("makeChanges", "Unsupported action", {
              action: value.action.type
            });
            Rh("first_draft.client.make_changes.unsupported_action", {
              action: value.action.type
            });
            E.push(Promise.reject(new G1("make_changes_unsupported", {})));
            continue;
          }
          if (trackEventAnalytics("First Draft: Make Changes Prompt Action", {
            ...r,
            action: value.action.type
          }, {
            forwardToDatadog: !0,
            batchRequest: !0,
            mlEvent: !0
          }), "iCantDoThis" === value.action.type) {
            let e = value.action.rationaleCategory;
            E.push(Promise.reject(new G1("make_changes_unsupported", {
              rationaleCategory: e
            })));
          } else E.push(applyMakeChanges(value.action, {
            dsKitKey: a,
            rootNodeId: f.guid,
            currentTheme: y,
            imageArgs: {
              initialUserPrompt: n
            }
          }));
        }
        if (done) {
          let e = await Promise.allSettled(E);
          if (!E.length) {
            logWarning("makeChanges", "No actions were applied from the prompt response");
            Rh("first_draft.client.make_changes.no_actions_applied");
            return new G1("make_changes_unsupported", {});
          }
          if (e.every(e => "rejected" === e.status)) {
            for (let t of e) if ("rejected" === t.status) throw t.reason;
          }
          trackEventAnalytics("First Draft: Make Changes Ended", {
            ...r,
            status: "completed",
            timeElapsedMs: Date.now() - L,
            hasNonRootNodeSelected: !(f.guid in m)
          }, {
            forwardToDatadog: !0,
            batchRequest: !0,
            mlEvent: !0
          });
          ax(t, "success");
          instrumentationRef.current.trackFinished("success");
          b(2);
          Y5.triggerAction("commit");
          break;
        }
      }
    } catch (a) {
      logWarning("makeChanges", "Error", {
        error: a
      });
      let e = a instanceof G1;
      let i = {
        ...r,
        timeElapsedMs: Date.now() - L,
        error: a.toString(),
        status: "failed",
        reason: "error"
      };
      let n = e ? "handled_internally" : reportError(_$$e.AI_GENERATION, a, {
        extra: i
      });
      trackEventAnalytics("First Draft: Make Changes Ended", {
        ...i,
        sentryEventId: n
      }, {
        forwardToDatadog: !0,
        batchRequest: !0,
        mlEvent: !0
      });
      ax(t, "error");
      instrumentationRef.current.trackFinished("failure");
      e && ("make_changes_unsupported" === a.type || "make_changes_moderated" === a.type) ? (trackEventAnalytics("First Draft: Make Changes Prompt Action", {
        ...r,
        action: "make_changes_unsupported" === a.type ? "iCantDoThis" : "blocked"
      }, {
        forwardToDatadog: !0,
        batchRequest: !0,
        mlEvent: !0
      }), b(4)) : b(3);
      v(a instanceof Error ? a : Error("Unknown error"));
    } finally {
      e === N.current && (N.current += 1);
    }
  }, [c, i, N, instrumentationRef, f, m, t, L, applyMakeChanges, resetMakeChanges, allUsableKitEntries]);
  let K = () => {
    b(0);
    _$$k3();
  };
  let H = E && getFeatureFlags().cortex_execution_tracing;
  switch (y) {
    case 1:
      return jsx(_$$F3, {
        onStop: B,
        aiTrackingContext: t,
        recordingKey: _$$Pt(e, "running"),
        children: renderI18nText("first_draft.making_changes")
      });
    case 3:
      H && _$$A8(D, E);
      return jsx(_$$E4, {
        error: C,
        customMessage: getI18nString("first_draft.something_went_wrong"),
        recordingKey: _$$Pt(e, "error"),
        buttons: [{
          type: _$$f5.GO_BACK,
          callback: K
        }],
        aiTrackingContext: t
      });
    case 4:
      H && _$$A8(D, E);
      return jsx(_$$E4, {
        error: C,
        customMessage: (e => {
          let t = getI18nString("first_draft.make_changes.i_cant_do_this");
          if (e instanceof G1) {
            if ("make_changes_moderated" === e.type) return getI18nString("ai.error.unsafe_or_harmful");
            if (!getFeatureFlags().first_draft_make_changes_errors) return t;
            if ("make_changes_unsupported" === e.type && e.data?.rationaleCategory) {
              let t = e.data.rationaleCategory;
              switch (t) {
                case "component":
                  return getI18nString("first_draft.make_changes.i_cant_do_this_component");
                case "font":
                  return getI18nString("first_draft.make_changes.i_cant_do_this_font");
                case "layout":
                  return getI18nString("first_draft.make_changes.i_cant_do_this_layout");
                case "other":
                  break;
                default:
                  return throwTypeError(t);
              }
            }
          }
          return t;
        })(C),
        recordingKey: _$$Pt(e, "unsupported"),
        buttons: [{
          type: _$$f5.GO_BACK,
          callback: K
        }],
        aiTrackingContext: t
      });
    case 2:
      let z = [];
      KK() && !getFeatureFlags().first_draft_use_gemini && (z.push({
        type: _$$is.UNDO_MAKE_CHANGES,
        callback: () => {
          b(0);
          Y5.triggerAction("undo");
          trackEventAnalytics("First Draft: Make Changes Undo", {
            file_key: c,
            clientLifecycleId: i
          }, {
            forwardToDatadog: !0,
            sendAsBeacon: !0,
            mlEvent: !0
          });
          _$$k3();
        }
      }), z.push({
        type: _$$is.MAKE_CHANGES,
        callback: K
      }));
      H && _$$A8(D, E);
      return jsx(Oq, {
        recordingKey: _$$Pt(e, "iterate"),
        iterateOptions: z,
        aiTrackingContext: {
          ...t,
          iteration_view_type: $J.SUCCESS_WITH_ITERATION
        },
        stayOpen: !0
      });
    case 0:
      return jsx(ag, {
        promptValue: r,
        setPromptValue: l,
        rootNode: f,
        tabManager: j,
        tabPropsMap: w,
        tabPanelPropsMap: S,
        handleSubmit: U,
        recordingKey: e.recordingKey,
        aiTrackingContext: t
      });
    default:
      throwTypeError(y);
  }
}
function ag({
  promptValue: e,
  setPromptValue: t,
  rootNode: i,
  tabManager: r,
  tabPropsMap: s,
  tabPanelPropsMap: o,
  handleSubmit: l,
  recordingKey: d,
  aiTrackingContext: c
}) {
  let u = c.clientLifecycleId;
  let [p, h] = useState(nb(1)[0].prompt);
  let [m, f] = useState(nb(3));
  let [g, _] = useReducer(au, ap);
  let x = useCallback(e => {
    b.current = Date.now();
    _(e);
  }, [_]);
  let y = zN(i, (e, t) => e?.guid === t?.guid);
  useEffect(() => {
    x({
      type: "NEW_ROOT_NODE",
      payload: ah(y?.guid ?? "")
    });
  }, [y?.guid, x]);
  let b = useRef(-1 / 0);
  let C = useRef(_$$$L(y));
  let v = useRef(_$$nF(uq(y)));
  let E = useRef(g.radius);
  let T = useRef(g.spacing);
  useEffect(() => {
    C.current = _$$$L(y);
    v.current = _$$nF(uq(y));
    let e = ah(y?.guid ?? "");
    E.current = e.radius;
    T.current = e.spacing;
  }, [y]);
  let {
    close
  } = cq();
  let j = _$$tS();
  let I = useMemo(() => {
    let e;
    let t;
    let i = {
      file_key: j,
      clientLifecycleId: u,
      generation_id: y?.firstDraftData?.generationId
    };
    y && (t = "LOCAL" === (e = a_(y)).type ? e.pageId : e.key);
    Object.assign(i, {
      dsKitType: null != e ? e.type : null,
      kitKey: t
    });
    return i;
  }, [y, j, u]);
  let k = g.colorMode;
  let N = g.brandColor;
  let A = g.radius;
  let O = g.spacing;
  let L = g.titleFonts;
  let R = g.bodyFonts;
  let M = g.labelFonts;
  let B = _$$ei(y?.guid);
  let U = k9(() => B, [B]);
  useEffect(() => {
    let e = ah(y?.guid ?? "", {
      pinnedRanges: v.current
    });
    xN(_$$oB(N).h, _$$oB(e.brandColor).h, .01) && (e.brandColor = N);
    let t = U?.lastEditedAt ?? -1 / 0;
    (t > b.current || b.current - t > 1e3) && x({
      type: "EDIT_INFO_UPDATED",
      payload: e
    });
  }, [N, x, U, y?.guid, g.radius, g.spacing]);
  let K = _$$A4(e => {
    trackEventAnalytics("First Draft: Make Changes Color Change", {
      ...I,
      color: e
    }, {
      forwardToDatadog: !0,
      batchRequest: !0,
      mlEvent: !0
    });
  }, 5e3);
  let H = useCallback(e => {
    e !== k && (_$$l2.user("first-draft-switch-color-mode", () => {
      _$$t4(y, e, F_(g.brandColor));
    }), K(k), Y5.triggerAction("commit"), x({
      type: "SET_COLOR_MODE",
      payload: e
    }));
  }, [k, K, x, y, g.brandColor]);
  let z = useMemo(() => N_(y), [y]);
  let V = useRef(null);
  let W = useRef(null);
  let Y = useCallback((e, t) => {
    if (W.current) V.current = [e, W.current]; else {
      W.current = e;
      let i = F_(t);
      _$$l2.user("first-draft-apply-brand-color", () => {
        _$$l3(y, e, k, z, i);
      });
      setTimeout(() => {
        if (W.current = null, V.current) {
          let [e, t] = V.current;
          V.current = null;
          Y(e, t);
        }
      }, 30);
    }
  }, [k, z, y]);
  let q = useCallback(e => {
    K(F_(e));
    let t = {
      ...qO(e, k),
      a: 1
    };
    Y(t, N);
    x({
      type: "SET_BRAND_COLOR",
      payload: t
    });
  }, [x, K, k, Y, N]);
  let X = _$$A4(e => {
    trackEventAnalytics("First Draft: Make Changes Radius Change", {
      ...I,
      radius: e
    }, {
      forwardToDatadog: !0,
      batchRequest: !0,
      mlEvent: !0
    });
  }, 1e3);
  let Z = _$$A4(e => {
    X(e);
    _$$oP(C.current, e, E.current);
  }, 100);
  let $ = useCallback((e, t) => {
    t.commit && Y5.triggerAction("commit");
    e !== A && (Z(e), x({
      type: "SET_RADIUS",
      payload: e
    }));
  }, [A, x, Z]);
  let et = _$$A4(e => {
    trackEventAnalytics("First Draft: Make Changes Spacing Change", {
      ...I,
      spacing: e
    }, {
      forwardToDatadog: !0,
      batchRequest: !0,
      mlEvent: !0
    });
  }, 1e3);
  let ei = _$$A4(e => {
    et(e);
    HS(v.current, e, T.current);
  }, 100);
  let er = useCallback((e, t) => {
    t.commit && Y5.triggerAction("commit");
    e !== O && (ei(e), x({
      type: "SET_SPACING",
      payload: e
    }));
  }, [x, ei, O]);
  let en = _$$A4((e, t) => {
    trackEventAnalytics("First Draft: Make Changes Font Change", {
      ...I,
      font_location: e,
      font_type: t
    }, {
      forwardToDatadog: !0,
      batchRequest: !0,
      mlEvent: !0
    });
  }, 1e3);
  let ea = useCallback(e => 0 === e.length ? null : e[0].family, []);
  let es = useCallback(async e => {
    await r$(_$$lu.TITLE, e, L);
    en("title", e);
    Y5.triggerAction("commit");
    y && x({
      type: "SET_TITLE_FONTS",
      payload: Mz(y, _$$BY(y)).title
    });
  }, [L, en, y, x]);
  let eo = useCallback(async e => {
    await r$(_$$lu.BODY, e, g.bodyFonts);
    en("body", e);
    Y5.triggerAction("commit");
    y && x({
      type: "SET_BODY_FONTS",
      payload: Mz(y, _$$BY(y)).body
    });
  }, [g.bodyFonts, en, y, x]);
  let el = useCallback(async e => {
    await r$(_$$lu.LABEL, e, g.labelFonts);
    en("label", e);
    Y5.triggerAction("commit");
    y && x({
      type: "SET_LABEL_FONTS",
      payload: Mz(y, _$$BY(y)).label
    });
  }, [g.labelFonts, en, y, x]);
  let ec = useCallback(e => {
    SX({
      ...c,
      ...Q0(e),
      interaction: NI.GENERATE
    });
    l();
  }, [c, l]);
  let [eu, ep] = useState(nq.COLOR);
  let eh = jsx(_$$r, {
    shortcuts: [{
      key: Uz.ENTER,
      modifier: [xH.META]
    }],
    onAction: ec,
    disabled: !y || 0 === e.length,
    recordingKey: _$$Pt(d, "submit"),
    children: renderI18nText("first_draft.make_changes")
  });
  let em = jsx(_$$r, {
    shortcuts: [{
      key: Uz.ENTER,
      modifier: [xH.META]
    }],
    onAction: close,
    recordingKey: _$$Pt(d, "doneTheming"),
    children: renderI18nText("first_draft.done_theming")
  });
  return jsxs(Fragment, {
    children: [jsx(_$$B, {
      fullWidth: !0,
      align: "center",
      justify: "space-between",
      gap: 0,
      children: "theme" === r.activeTab && jsx(at, {
        bodyFont: ea(R),
        brandColor: N,
        colorMode: k,
        cornerRadiusStop: A,
        labelFont: ea(M),
        onChangeBodyFont: eo,
        onChangeColor: q,
        onChangeColorMode: H,
        onChangeCornerRadiusStop: $,
        onChangeLabelFont: el,
        onChangeSpacingStop: er,
        onChangeTitleFont: es,
        recordingKey: _$$Pt(d, "themeEditorDrawer"),
        section: eu,
        spacingStop: O,
        titleFont: ea(L)
      })
    }), jsxs("div", {
      className: rB()(_$$s3.p8.relative.$, "theme" === r.activeTab && "first_draft_make_changes_view--contentBoxed--L-H0e", eu && _$$s3.elevation500.radiusLarge.$),
      "data-testid": "readyForPromptView",
      children: [jsx(_$$t3.TabPanel, {
        ...o.prompt,
        children: jsx(XG, {
          action: _$$JT.FIRST_DRAFT_MAKE_CHANGES,
          value: e,
          onChange: t,
          recordingKey: _$$Pt(d, "prompt"),
          suggestion: p,
          suggestionPills: getFeatureFlags().first_draft_new_prompt_pills ? m : void 0
        })
      }), jsx(_$$t3.TabPanel, {
        ...o.theme,
        children: jsx(n9, {
          activeTab: eu,
          onTabChange: ep,
          brandColor: N,
          cornerRadiusStop: A,
          spacingStop: O,
          titleFont: ea(L),
          bodyFont: ea(R),
          labelFont: ea(M),
          recordingKey: _$$Pt(d, "themeEditor")
        })
      }), jsxs(_$$B, {
        fullWidth: !0,
        justify: "space-between",
        children: [jsxs(_$$t3.TabStrip, {
          manager: r,
          children: [jsx(_$$t3.Tab, {
            ...s.theme,
            children: renderI18nText("first_draft.style")
          }), jsx(_$$t3.Tab, {
            ...s.prompt,
            children: jsx("span", {
              "data-testid": "promptTabLabel",
              children: renderI18nText("first_draft.prompt")
            })
          })]
        }), "prompt" === r.activeTab ? eh : em]
      })]
    })]
  });
}
function a_(e) {
  let t = e.firstDraftData;
  if (t) {
    if (t.kit.type === AZ4.LOCAL) return {
      type: "LOCAL",
      pageId: XJn.getPageIdFromKitKey(t.kit.key) ?? ""
    };
    if (t.kit.type === AZ4.LIBRARY) return {
      type: "1P_LIBRARY",
      key: t.kit.key
    };
  }
  return JSON.parse(e.getSharedPluginData(SV, "dsKitKey"));
}
function ax(e, t) {
  switch (t) {
    case "success":
      _$$as({
        ...e,
        status: _$$dM.COMPLETED,
        reason: F9.SUCCESS
      });
      break;
    case "error":
      _$$as({
        ...e,
        status: _$$dM.FAILED,
        reason: F9.ERROR
      });
      break;
    case "stopped":
      _$$as({
        ...e,
        status: _$$dM.FAILED,
        reason: F9.STOPPED
      });
  }
}
var ab = ay;
function aj({
  node: e,
  tree: t,
  parentComponent: i,
  descendantComponentGuids: r
}, n) {
  if (!t[e.guid]) {
    if (t[e.guid] = {
      isBuildingBlock: n.isBuildingBlock,
      name: n.name,
      parentGuid: i?.guid ?? null,
      isListItem: n.isListItem,
      inferReason: n.inferReason,
      children: []
    }, i) {
      let r = t[i.guid];
      r && r.children.push(e.guid);
    }
    for (let n of r) {
      let r = t[n];
      r && (!r.parentGuid || r.parentGuid === i?.guid) && (r.parentGuid = e.guid);
    }
  }
}
function aI({
  node: e,
  tree: t,
  parentComponent: i,
  descendantComponentGuids: r
}) {
  t[e.guid] && delete t[e.guid];
  let n = i ? t[i.guid] : null;
  for (let a of (n && (n.children = n.children.filter(t => t !== e.guid)), r)) {
    let r = t[a];
    r && r.parentGuid === e.guid && (r.parentGuid = i?.guid ?? null, n && n.children.push(a));
  }
}
function ak(e) {
  let t = function (e, t) {
    let i = {};
    for (let r of e.childrenNodes) !function e(t, i, r, n, a = null) {
      var s;
      let o = r.components[t.guid];
      s = r.isMobileDesign;
      let l = ("FRAME" === t.type || "INSTANCE" === t.type) && (!s || function (e, t, i = .1) {
        return Math.abs(e - t) < i;
      }(t.size.x, i.size.x - i.stackLeftPadding - i.stackLeftPadding));
      let c = [];
      if (o && (n[t.guid] = {
        isBuildingBlock: l,
        name: o,
        parentGuid: a?.guid ?? null,
        isListItem: !1,
        children: []
      }, a && n[a.guid])) {
        let e = n[a.guid];
        e && e.children.push(t.guid);
      }
      for (let s of t.childrenNodes) c = c.concat(e(s, i, r, n, o ? t : a));
      let u = {
        node: t,
        designNode: i,
        tree: n,
        nodeCanBeBuildingBlock: l,
        descendantComponentGuids: c,
        parentComponent: a
      };
      (function (e) {
        let {
          node,
          tree,
          nodeCanBeBuildingBlock,
          parentComponent
        } = e;
        let a = {};
        for (let e of node.childrenNodes) {
          let t = tree[e.guid];
          t && (a[t.name] || (a[t.name] = []), a[t.name].push(e.guid));
        }
        let s = Object.entries(a).filter(([e, t]) => t.length > 1);
        if (1 !== s.length) return;
        let o = s[0][1];
        let l = o[0];
        for (let a of (tree[node.guid] || parentComponent || !l || aj(e, {
          name: `${tree[l].name}List`,
          isBuildingBlock: nodeCanBeBuildingBlock,
          isListItem: !1,
          inferReason: "list-view"
        }), o)) {
          let e = tree[a];
          e && (e.isListItem = !0, e.isBuildingBlock = !1);
        }
      })(u);
      (function (e) {
        let {
          node,
          tree,
          nodeCanBeBuildingBlock,
          parentComponent,
          descendantComponentGuids
        } = e;
        !tree[node.guid] && !parentComponent && nodeCanBeBuildingBlock && descendantComponentGuids.filter(e => !tree[e]?.isBuildingBlock && !tree[e]?.parentGuid).length > 0 && aj(e, {
          name: `Component:${node.guid}`,
          isBuildingBlock: !0,
          isListItem: !1,
          inferReason: "component-for-orphaned-atoms"
        });
      })(u);
      (function (e) {
        let {
          node,
          tree,
          designNode,
          descendantComponentGuids,
          nodeCanBeBuildingBlock
        } = e;
        !tree[node.guid] && 0 === descendantComponentGuids.length && node.parentGuid === designNode.guid && nodeCanBeBuildingBlock && aj(e, {
          name: `Component:${node.guid}`,
          isBuildingBlock: !0,
          isListItem: !1,
          inferReason: "component-for-uncomponentized-element"
        });
      })(u);
      (function (e) {
        let {
          node,
          designNode,
          tree
        } = e;
        let n = tree[node.guid];
        if (n && n.isBuildingBlock && node.size.y > .66 * designNode.size.y && n.children.length > 1 && n.children.every(e => tree[e]?.isBuildingBlock)) {
          for (let e of n.children) {
            let t = tree[e];
            t && (t.parentGuid = null);
          }
          aI(e);
        }
      })(u);
      (function ({
        node: e,
        tree: t,
        parentComponent: i,
        nodeCanBeBuildingBlock: r,
        descendantComponentGuids: n,
        designNode: a
      }) {
        let s = e.childrenNodes[0];
        if (r && 1 === e.childCount && s && t[s.guid]?.isBuildingBlock) {
          let r = t[s.guid];
          r && !t[e.guid] && (t[e.guid] = {
            isBuildingBlock: !0,
            name: r.name,
            parentGuid: i?.guid ?? null,
            isListItem: !1,
            inferReason: "hoisted-singleton-building-block",
            children: r.children
          });
          aI({
            node: s,
            designNode: a,
            tree: t,
            parentComponent: e,
            descendantComponentGuids: n,
            nodeCanBeBuildingBlock: !0
          });
        }
      })(u);
      let p = function ({
        node: e,
        designNode: t,
        tree: i,
        parentComponent: r,
        descendantComponentGuids: n
      }) {
        if (e.size.x < 100 || e.size.y < 20 || n.length > 0 || "NONE" === e.stackMode || e.childCount <= 1) return [];
        let a = e.childrenNodes[0];
        let s = e.childrenNodes[e.childCount - 1];
        let o = [];
        for (let l of [a, s]) {
          if (l?.type !== "FRAME" || l.size.x < 100 || l.size.y < 20) continue;
          let a = XJn.findSimilarNodes(l.guid, e.guid, !1, !1, !0);
          let s = [l, ...a.map(e => getSingletonSceneGraph().get(e)).filter(e => !!e)];
          let c = Array.from(_i(new Set(e.childrenGuids), new Set([l.guid, ...a])));
          if (s.length >= 2 && s.length >= e.childCount - 1 && c.length <= 1) {
            let a = c[0];
            if (a) {
              let t = e.childrenGuids.indexOf(a);
              if (t > 0 && t < e.childCount - 1) return [];
            }
            for (let a of s) i[a.guid] || (aj({
              node: a,
              designNode: t,
              tree: i,
              parentComponent: i[e.guid] ? e : r,
              descendantComponentGuids: n,
              nodeCanBeBuildingBlock: !1
            }, {
              isBuildingBlock: !1,
              name: `Component:${a.guid}`,
              isListItem: !0,
              inferReason: "similar-sublayers"
            }), o.push(a.guid));
          }
        }
        return o;
      }(u);
      return n[t.guid] ? [t.guid, ...c, ...p] : [...c, ...p];
    }(r, e, t, i);
    return i;
  }(e.frame, e);
  if (!t) return [];
  let {
    suggestedComponentTree,
    node
  } = function (e, t) {
    let i = XJn.detachDesignForComponentize(e.guid, Object.keys(t));
    let r = {};
    for (let [e, n] of Object.entries(t)) {
      let t = i.get(e);
      let a = {
        ...n,
        parentGuid: n.parentGuid ? i.get(n.parentGuid) ?? n.parentGuid : null,
        children: n.children.map(e => i.get(e) ?? e)
      };
      t ? r[t] = a : r[e] = a;
    }
    let n = i.get(e.guid);
    if (!n) throw Error("Failed to detach design");
    let a = getSingletonSceneGraph().get(n);
    if (!a) throw Error("Failed to detach design");
    e.parentNode && e.parentNode.appendChild(a);
    a.x = e.x;
    a.y = e.y;
    e.removeSelfAndChildren();
    return {
      suggestedComponentTree: r,
      node: a
    };
  }(e.frame, t);
  return Array.from(Object.entries(suggestedComponentTree)).filter(([e]) => e !== node.guid).map(([e, t]) => ({
    guid: e,
    name: t.name,
    isBuildingBlock: t.isBuildingBlock
  }));
}
function aN() {
  let [e, t] = useState({
    loaded: 0,
    total: 0
  });
  let i = useContext(_$$x4);
  let r = i?.getSuggestedComponents;
  return {
    submit: useCallback(async (e, i, n, a) => {
      let s = e.filter(e => ("FRAME" === e.type || "INSTANCE" === e.type) && !e.isStateGroup);
      let o = Y6();
      let {
        nodes,
        nodeMappings
      } = _$$l2.user("clone-nodes", () => function (e, t) {
        let i = [];
        let r = {
          x: NY(t.copiedDesigns).right() + CN,
          y: CN
        };
        let n = new Map();
        for (let a of e) {
          let e = XJn.cloneNodeForComponentize(a.guid);
          let s = e.get(a.guid);
          if (!s) continue;
          let o = getSingletonSceneGraph().get(s);
          o && (t.copiedDesigns.appendChild(o), i.push(o), o.relativeTransform = {
            ...o.relativeTransform,
            m02: r.x,
            m12: r.y
          }, r.x += o.size.x + FL, n = new Map([...n, ...e]));
        }
        Vl(t);
        return {
          nodes: i,
          nodeMappings: n
        };
      }(s, o));
      for (let e of (t({
        loaded: 1,
        total: nodes.length
      }), ab()(nodes, 10))) {
        let s = await _$$Z3(r ? r(e) : aA(e, i), n);
        if (n.aborted) return {};
        for (let e of s) if (e) {
          if (a?.remapNodeIdsForTest) for (let [t, i] of nodeMappings.entries()) {
            let r = e.components[t];
            r && (e.components[i] = r, delete e.components[t]);
          }
          _$$l2.user("componentize", () => {
            !function (e, t) {
              let i = getSingletonSceneGraph();
              if (!i.getCurrentPage()) return;
              let r = NY(t.buildingBlocks);
              let n = NY(t.atoms);
              let a = {
                x: r.right() + CN,
                y: CN
              };
              let s = {
                x: n.right() + CN,
                y: CN
              };
              let o = {};
              for (let {
                guid,
                name,
                isBuildingBlock
              } of e) {
                let e = i.get(function (e, t) {
                  for (; t[e];) e = t[e];
                  return e;
                }(guid, o));
                if (!e || "FRAME" !== e.type && "INSTANCE" !== e.type || ("FRAME" === e.type && MR(e, t.icons), !e.isAlive)) continue;
                let c = XJn.findSimilarNodes(e.guid, t.buildingBlocks.guid, !1, !0, !0).concat(XJn.findSimilarNodes(e.guid, t.atoms.guid, !1, !0, !0));
                let u = c[0] ? i.get(c[0]) : null;
                if (!u) {
                  if ("FRAME" === e.type) (u = i.createComponentFromNode(e.clone())).name = name; else {
                    if (!(u = i.get(e.clone()))) throw Error("Failed to clone instance");
                    _$$T6(u);
                  }
                  isBuildingBlock ? (t.buildingBlocks.appendChild(u), u.relativeTransform = {
                    ...u.relativeTransform,
                    m02: a.x,
                    m12: a.y
                  }, a.y += u.size.y + FL) : (t.atoms.appendChild(u), u.relativeTransform = {
                    ...u.relativeTransform,
                    m02: s.x,
                    m12: s.y
                  }, s.y += u.size.y + FL);
                }
                let p = w8(e, u);
                if (p) for (let [e, t] of p?.entries()) {
                  let r = i.get(t);
                  let n = r?.overrideKey;
                  n && (o[e] = n);
                }
              }
              Vl(t);
            }(ak(e), o);
          });
        }
        t(t => ({
          loaded: Math.min(t.loaded + e.length, t.total),
          total: t.total
        }));
      }
      Y5.commit();
      return {};
    }, [r]),
    progress: e
  };
}
async function aA(e, t) {
  let i = await Promise.all(e.map(async e => {
    let t = await gC(e);
    return {
      imageB64: t.base64,
      jsx: t.jsx
    };
  }));
  return (await Ay.design.firstDraftComponentize({
    requests: i
  }, _$$sF({
    clientLifecycleId: t
  }))).responses.map((t, i) => {
    let r = e[i];
    return t && r ? {
      frame: r,
      isMobileDesign: t.isMobileDesign,
      components: t.components.reduce((e, t) => (e[t.guid] = t.name, e), {})
    } : null;
  });
}
var aR = (e => (e[e.COMPONENTIZE = 0] = "COMPONENTIZE", e[e.ADD_PROPS = 1] = "ADD_PROPS", e[e.LINT = 2] = "LINT", e[e.ALL = 3] = "ALL", e))(aR || {});
var aD = (e => (e.INITIAL = "initial", e.COMPONENTIZE = "componentize", e.ADD_PROPS = "add_props", e.LINT = "lint", e.ALL = "all", e))(aD || {});
function aM(e) {
  return e.filter(e => "FRAME" === e.type).length;
}
function aP(e) {
  let [t, i] = useState("initial");
  let r = [{
    step: 3,
    title: getI18nString("first_draft.make_kit.all_steps.title"),
    description: getI18nString("first_draft.make_kit.all_steps.description")
  }, {
    step: 0,
    title: getI18nString("first_draft.make_kit.componentize_step.title"),
    description: getI18nString("first_draft.make_kit.componentize_step.description")
  }, {
    step: 1,
    title: getI18nString("first_draft.make_kit.add_props_step.title"),
    description: getI18nString("first_draft.make_kit.add_props_step.description")
  }, {
    step: 2,
    title: getI18nString("first_draft.make_kit.lint_step.title"),
    description: getI18nString("first_draft.make_kit.lint_step.description")
  }];
  let s = useCallback(e => {
    switch (e) {
      case 0:
        i("componentize");
        break;
      case 1:
        i("add_props");
        break;
      case 2:
        i("lint");
        break;
      case 3:
        i("all");
    }
  }, []);
  let o = e => jsx(_$$B6.Item, {
    primaryAction: {
      onAction: () => {
        s(e.step);
      }
    },
    children: jsxs("div", {
      className: _$$s3.flex.flexColumn.p4.wFull.$,
      children: [jsx("div", {
        className: _$$s3.font13.wFitContent.$,
        children: e.title
      }), jsx("div", {
        className: _$$s3.font11.colorTextSecondary.lh16.wFitContent.$,
        children: e.description
      })]
    })
  }, e.step);
  switch (t) {
    case "initial":
      return jsxs(_$$n, {
        hideActionPanel: !0,
        children: [jsx(_$$n.Header, {
          children: jsxs("div", {
            className: _$$s3.wFull.flex.flexColumn.p8.$,
            children: [jsxs("div", {
              className: _$$s3.wFull.flex.gap4.$,
              children: [jsx("div", {
                className: _$$s3.h24.$,
                children: jsx(_$$K3, {
                  recordingKey: _$$Pt(e.recordingKey, "backButton"),
                  onClick: e.onBack,
                  "aria-label": getI18nString("qa.go_back"),
                  children: jsx(_$$C3, {})
                })
              }), jsx("div", {
                className: _$$s3.colorText.textBodyLarge.$,
                children: renderI18nText("fullscreen_actions.quick_actions.first-draft-make-kit")
              })]
            }), jsx("div", {
              className: _$$s3.wFull.flex.font11.$,
              children: renderI18nText("first_draft.make_kit.description")
            })]
          })
        }), jsx(_$$n.Body, {
          children: jsxs(_$$B6, {
            resultCount: r.length,
            maxVisibleResults: r.length,
            children: [o(r[0]), jsx(_$$B6.Section, {
              header: "Individual steps",
              children: r.slice(1).map(o)
            })]
          })
        })]
      });
    case "componentize":
      return jsx(aB, {});
    case "add_props":
      return jsx(aG, {});
    case "lint":
      return jsx(zY, {});
    case "all":
      return jsx(aK, {});
  }
}
let aF = async ({
  params: {
    submit: e,
    selectedNodes: t
  },
  abortController: i,
  clientLifecycleId: r
}) => {
  await e(t, r, i.signal);
};
function aB(e) {
  let {
    close
  } = cq();
  let i = RL(_$$JT.FIRST_DRAFT_COMPONENTIZE, aF);
  let {
    start,
    stop,
    state,
    aiTrackingContext
  } = i;
  let {
    submit,
    progress
  } = aN();
  let p = useCallback(async () => {
    let e = getSingletonSceneGraph().getCurrentPage();
    if (!e) return;
    let t = e.directlySelectedNodes;
    0 !== t.length && (await start({
      selectedNodes: t,
      submit
    }));
  }, [start, submit]);
  let h = useCallback(() => {
    stop();
    close();
  }, [close, stop]);
  let m = useCallback(() => {
    glU.triggerActionInUserEditScope("undo", {});
    close();
  }, [close]);
  let f = e.overrides?.state ?? state;
  let g = e.overrides?.progress ?? progress;
  switch (f) {
    case qy.INITIAL:
      return jsx(_$$A2, {
        action: _$$JT.FIRST_DRAFT_COMPONENTIZE,
        actionLabel: renderI18nText("first_draft.make_kit.componentize_step.title"),
        actionIcon: jsx(_$$K, {}),
        onPerform: e.overrides?.perform ?? p,
        instructionAction: {
          type: "learn_more",
          url: "https://figma.com"
        },
        aiTrackingContext,
        getCustomSelectedNodesAmount: aM,
        children: renderI18nText("first_draft.make_kit.componentize_step.instructions")
      });
    case qy.RUNNING:
      return jsx(_$$F3, {
        recordingKey: _$$Pt(e.recordingKey, "componentizeRunning"),
        aiTrackingContext,
        onStop: h,
        secondaryMessage: g.total ? getI18nString("first_draft.make_kit.x_of_y_frames", {
          loaded: g.loaded,
          total: g.total
        }) : void 0,
        children: renderI18nText("first_draft.make_kit.componentize_step.running")
      });
    case qy.DONE:
      return jsx(Oq, {
        iterateOptions: [{
          type: _$$is.UNDO,
          callback: m
        }],
        aiTrackingContext: {
          ...aiTrackingContext,
          iteration_view_type: $J.DEFAULT_SUCCESS
        }
      });
    case qy.CANCELLED:
      return null;
    case qy.ERROR:
      return jsx(_$$E4, {
        error: "error" in i ? i.error : Error(),
        recordingKey: _$$Pt(e.recordingKey, "error"),
        buttons: [{
          type: _$$f5.OK,
          callback: close
        }],
        aiTrackingContext
      });
    default:
      throwTypeError(f);
  }
}
let aU = async ({
  params: {
    submit: e,
    selectedNodes: t
  },
  abortController: i,
  clientLifecycleId: r
}) => {
  await e(r, i.signal, t);
};
function aG(e) {
  let {
    close
  } = cq();
  let {
    submit,
    progress
  } = _$$iK();
  let s = RL(_$$JT.FIRST_DRAFT_SUGGEST_PROPS, aU);
  let {
    start,
    stop,
    state,
    aiTrackingContext
  } = s;
  let p = useCallback(async () => {
    let e = getSingletonSceneGraph().getCurrentPage();
    if (!e) return;
    let t = e.directlySelectedNodes;
    0 !== t.length && (await start({
      selectedNodes: t,
      submit
    }));
  }, [start, submit]);
  let h = useCallback(() => {
    stop();
    close();
  }, [close, stop]);
  let m = useCallback(() => {
    glU.triggerActionInUserEditScope("undo", {});
    close();
  }, [close]);
  let f = e.overrides?.state ?? state;
  let g = e.overrides?.progress ?? progress;
  switch (f) {
    case qy.INITIAL:
      return jsx(_$$A2, {
        action: _$$JT.FIRST_DRAFT_SUGGEST_PROPS,
        actionLabel: renderI18nText("first_draft.make_kit.add_props_step.add_props_button"),
        actionIcon: jsx(_$$K, {}),
        onPerform: p,
        instructionAction: {
          type: "learn_more",
          url: "https://figma.com"
        },
        aiTrackingContext,
        children: renderI18nText("first_draft.make_kit.add_props_step.instructions")
      });
    case qy.RUNNING:
      return jsx(_$$F3, {
        recordingKey: _$$Pt(e.recordingKey, "suggestPropsRunning"),
        aiTrackingContext,
        onStop: h,
        secondaryMessage: g.total ? getI18nString("first_draft.make_kit.x_of_y_components", {
          loaded: g.loaded,
          total: g.total
        }) : void 0,
        children: renderI18nText("first_draft.make_kit.add_props_step.running")
      });
    case qy.DONE:
      return jsx(Oq, {
        iterateOptions: [{
          type: _$$is.UNDO,
          callback: m
        }],
        aiTrackingContext: {
          ...aiTrackingContext,
          iteration_view_type: $J.DEFAULT_SUCCESS
        }
      });
    case qy.CANCELLED:
      return null;
    case qy.ERROR:
      return jsx(_$$E4, {
        error: "error" in s ? s.error : Error(),
        recordingKey: _$$Pt(e.recordingKey, "error"),
        buttons: [{
          type: _$$f5.OK,
          callback: close
        }],
        aiTrackingContext
      });
    default:
      throwTypeError(f);
  }
}
function aK(e) {
  let {
    submit,
    progress
  } = aN();
  let {
    start,
    state
  } = RL(_$$JT.FIRST_DRAFT_COMPONENTIZE, aF);
  let {
    submit: _submit,
    progress: _progress
  } = _$$iK();
  let {
    start: _start,
    state: _state
  } = RL(_$$JT.FIRST_DRAFT_SUGGEST_PROPS, aU);
  let u = useCallback(async () => {
    let e = getSingletonSceneGraph().getCurrentPage();
    if (!e) return;
    let i = e.directlySelectedNodes;
    0 !== i.length && (await start({
      selectedNodes: i,
      submit
    }), await _start({
      submit: _submit
    }));
  }, [start, submit, _start, _submit]);
  switch (state) {
    case qy.INITIAL:
    case qy.RUNNING:
    case qy.CANCELLED:
    case qy.ERROR:
      return jsx(aB, {
        overrides: {
          state,
          progress,
          perform: u
        }
      });
    case qy.DONE:
      switch (_state) {
        case qy.INITIAL:
        case qy.RUNNING:
        case qy.CANCELLED:
        case qy.ERROR:
          return jsx(aG, {
            overrides: {
              state: _state,
              progress: _progress
            }
          });
        case qy.DONE:
          return jsx(zY, {});
        default:
          throwTypeError(_state);
      }
    default:
      throwTypeError(state);
  }
}
async function aH(e, t) {
  return (await Promise.all(t.map(async t => {
    let i = await gC(t);
    let r = e.replace("{{jsx}}", i.jsx);
    let n = await Ay.openai.completeChat({
      model: "gpt-4o-2024-08-06",
      temperature: .5,
      n: 1,
      messages: [{
        role: "system",
        content: r
      }, {
        role: "user",
        content: [{
          type: "image_url",
          image_url: {
            url: i.base64
          }
        }]
      }],
      use_cache: !1,
      response_format: {
        type: "json_object"
      }
    });
    let a = n.choices[0]?.message.content;
    return a ? {
      ...function (e) {
        if (!e) throw Error("No content detected in GPT response");
        let t = JSON.parse(e.replace(/```json\n|```/g, ""));
        let i = _$$AR.parse(t);
        return {
          isMobileDesign: i.isMobileDesign,
          components: i.components.reduce((e, t) => (e[t.guid] = t.name, e), {})
        };
      }(a),
      frame: t
    } : null;
  }))).filter(e => null !== e);
}
async function az(e, t) {
  return (await Promise.all(t.map(async t => {
    let i = await gC(t);
    let r = e.replace("{{jsx}}", i.jsx);
    let n = await Ay.openai.completeChat({
      model: "gpt-4o-2024-08-06",
      temperature: .5,
      n: 1,
      messages: [{
        role: "system",
        content: r
      }, {
        role: "user",
        content: [{
          type: "image_url",
          image_url: {
            url: i.base64
          }
        }]
      }],
      use_cache: !1,
      response_format: {
        type: "json_object"
      }
    });
    let a = n.choices[0]?.message.content;
    return a ? {
      component: t,
      ...JSON.parse(a)
    } : null;
  }))).filter(e => null !== e);
}
let aV = e => {
  let t = new Set();
  !function e(i) {
    if (i.name.startsWith("[COMPONENT]") && t.add(i.guid), "childrenNodes" in i) for (let t of i.childrenNodes) e(t);
  }(e);
  return t;
};
let aW = (e, t) => {
  let i = 0;
  let r = e;
  for (; r.guid !== t.guid && i < 8;) {
    if (i += 1, !r.parentNode) throw Error("Node is not a child of root, distance: " + i);
    r = r.parentNode;
  }
  return i;
};
let aY = async ({
  componentizePromptOverride: e,
  dispatch: t
}) => {
  let i = getSingletonSceneGraph().getCurrentPage();
  if (!i) return;
  let r = i.directlySelectedNodes;
  if (0 === r.length) {
    t(_$$F.enqueue({
      type: "eval-componentize",
      message: "No selected nodes"
    }));
    return;
  }
  for (let e of r) {
    if ("FRAME" !== e.type) {
      t(_$$F.enqueue({
        type: "eval-componentize",
        message: "Selected node is not a frame"
      }));
      return;
    }
    if (e.name.startsWith("[TEST]")) {
      t(_$$F.enqueue({
        type: "eval-componentize",
        message: `Selected node ${e.name} is already a test node`
      }));
      return;
    }
  }
  for (let i of r) {
    let r;
    if (i.name = `[TEST] ${i.name}`, !(r = e ? (await aH(e, [i]))[0] : (await aA([i], ""))[0])) {
      t(_$$F.enqueue({
        type: "eval-componentize",
        message: `Failed to get suggested components for ${i.name}`
      }));
      return;
    }
    for (let e of ak(r)) getSingletonSceneGraph().get(e.guid).name = `[COMPONENT] ${e.name}`;
  }
};
let aJ = async ({
  componentizePromptOverride: e,
  dispatch: t,
  close: i
}) => {
  let r = getSingletonSceneGraph().getCurrentPage();
  if (!r) return;
  let n = r.childrenNodes.filter(e => "FRAME" === e.type);
  if (0 === n.length) {
    t(_$$F.enqueue({
      type: "eval-componentize",
      message: "No frames found"
    }));
    return;
  }
  i();
  t(_$$F.enqueue({
    type: "eval-componentize",
    message: "Starting eval"
  }));
  let a = [];
  let s = 0;
  let o = n.filter(e => e.name.startsWith("[TEST]"));
  for (let i of ab()(o, 5)) {
    await Promise.all(i.map(async i => {
      let r;
      r = e ? (await aH(e, [i]))[0] : (await aA([i], ""))[0];
      a.push({
        node: i,
        components: new Set(ak(r).map(e => e.guid)),
        expectedComponents: aV(i)
      });
      s += 1;
      t(_$$F.enqueue({
        type: "eval-componentize",
        message: `Completed ${s} / ${o.length}`
      }));
    }));
    await new Promise(e => setTimeout(e, 100));
  }
  let l = [];
  for (let e of a) {
    let t = _i(e.expectedComponents, e.components).size;
    let i = _i(e.components, e.expectedComponents).size;
    let r = _$$iR(e.expectedComponents, e.components).size;
    l.push({
      falseNegativeCount: t,
      falsePositiveCount: i,
      correctCount: r,
      result: e
    });
  }
  _$$l2.ai("eval-componentize", () => {
    let e = getSingletonSceneGraph().createNode("CANVAS");
    e.name = `Eval Run ${r.name} ${new Date().toISOString()}`;
    let t = getSingletonSceneGraph().createNode("FRAME");
    t.name = "Results Frame";
    t.x = -1e3;
    t.y = -1e3;
    t.size = {
      x: 220,
      y: 220
    };
    t.fills = [{
      type: "SOLID",
      color: {
        r: .9,
        g: .9,
        b: .9,
        a: 1
      },
      visible: !0,
      opacity: 1,
      blendMode: "NORMAL"
    }];
    let i = getSingletonSceneGraph().createNode("TEXT");
    for (let r of (i.name = "Results", biQ.setTextContentOnTextNode(i.guid, `False Negative Count: ${l.reduce((e, t) => e + t.falseNegativeCount, 0)}
False Positive Count: ${l.reduce((e, t) => e + t.falsePositiveCount, 0)}
Correct Count: ${l.reduce((e, t) => e + t.correctCount, 0)}`), i.x = 10, i.y = 10, i.size = {
        x: 200,
        y: 200
      }, i.fills = i.fills.concat([{
        type: "SOLID",
        color: {
          r: 0,
          g: 0,
          b: 0,
          a: 1
        },
        visible: !0,
        opacity: 1,
        blendMode: "NORMAL"
      }]), t.appendChild(i), e.appendChild(t), l)) {
      let t = r.result;
      if (!yZ(t.expectedComponents, t.components)) {
        let i = XJn.cloneNodeForComponentize(t.node.guid);
        let n = getSingletonSceneGraph().get(i.get(t.node.guid));
        if (!n) throw Error("Failed to clone node");
        n.name = t.node.name + ` (FNC: ${r.falseNegativeCount} FPC: ${r.falsePositiveCount} CC: ${r.correctCount})`;
        let a = (e, t) => {
          e.strokePaints = {
            data: e.strokePaints.data.concat([{
              type: "SOLID",
              color: t,
              visible: !0,
              opacity: 1,
              blendMode: "NORMAL"
            }]),
            blobs: e.strokePaints.blobs
          };
          e.strokeWeight = (8 - aW(e, n)) * 2;
          e.strokeAlign = "OUTSIDE";
          e.borderStrokeWeightsIndependent = !1;
          e.borderBottomWeight = 2;
          e.borderTopWeight = 2;
          e.borderLeftWeight = 2;
          e.borderRightWeight = 2;
        };
        let s = new Map();
        for (let [e, t] of i.entries()) s.set(t, e);
        for (let e of _i(t.expectedComponents, t.components)) {
          let t = i.get(e);
          a(getSingletonSceneGraph().get(t), {
            r: 1,
            g: 0,
            b: 0,
            a: 1
          });
        }
        for (let e of _i(t.components, t.expectedComponents)) {
          let t = i.get(e);
          a(getSingletonSceneGraph().get(t), {
            r: 0,
            g: 0,
            b: 1,
            a: 1
          });
        }
        for (let e of _$$iR(t.expectedComponents, t.components)) {
          let t = i.get(e);
          a(getSingletonSceneGraph().get(t), {
            r: 0,
            g: 1,
            b: 0,
            a: 1
          });
        }
        e.appendChild(n);
      }
    }
    getSingletonSceneGraph().setCurrentPageAsync(e.guid);
  });
  t(_$$F.enqueue({
    type: "eval-componentize",
    message: "Finished eval"
  }));
};
let aq = ["componentizePrompt", "suggestProps", "componentizeResultMapping"];
class aX {
  constructor(e = 1) {
    this.queue = [];
    this.queue = [];
    this.concurrencyLimit = e;
    this.activeCount = 0;
  }
  postTask(e, t) {
    return new Promise((i, r) => {
      let n = async () => {
        try {
          i(await e());
        } catch (e) {
          r(e);
        }
      };
      this.queue.push([n, t]);
      this.doNextTask();
    });
  }
  async doNextTask() {
    if (0 === this.queue.length || this.activeCount >= this.concurrencyLimit) return;
    let e = this.queue.shift();
    if (!e) return;
    let [t, i] = e;
    this.activeCount++;
    try {
      await scheduler.postTask(t, i);
    } catch (e) {
      throw e;
    } finally {
      this.activeCount--;
      this.doNextTask();
    }
  }
}
let sl = {
  ORG: "org",
  ALL: "all"
};
let sd = createLocalStorageAtom("firstDraftKitPickerTab", sl.ORG);
function sc({
  aiTrackingContext: e,
  ParentComponent: t
}) {
  let {
    allUsableKitEntries,
    hasLastSelectedKit,
    setSelectedKit,
    kitsAreLoaded
  } = _$$sI();
  let [l, d] = useState("");
  let u = useRef(null);
  _$$y2(l, u);
  _$$z3();
  let {
    pop,
    push
  } = cq();
  let m = useCallback(i => {
    setSelectedKit(i);
    SX({
      ...e,
      interaction: NI.SELECT_KIT,
      interaction_type: bp.BUTTON_CLICK
    });
    hasLastSelectedKit ? pop() : push({
      name: Sn.FIRST_DRAFT,
      module: jsx(t, {})
    });
  }, [t, e, setSelectedKit, hasLastSelectedKit, pop, push]);
  let [f, g] = useState(null);
  useEffect(() => {
    u.current?.focus();
  }, [u]);
  let [_, x] = useAtomValueAndSetter(sd);
  let y = T5("FirstDraftKitSelection").unwrapOr(null);
  let b = y?.name || getI18nString("first_draft.kits.org_libraries.fallback");
  let C = b && b.length > 20;
  let v = getFeatureFlags().first_draft_direct_gen && allUsableKitEntries.some(e => e.metadata.direct_generation);
  let E = f || allUsableKitEntries;
  if (getFeatureFlags().first_draft_direct_gen) {
    if (v) {
      let e = _ === sl.ORG;
      E = E.filter(t => e === t.metadata.direct_generation);
    }
  } else E = E.filter(e => !e.metadata.direct_generation);
  return jsx(_$$s2, {
    name: "firstDraftKitPicker",
    recordingKey: "firstDraftKitPicker",
    children: jsx(_$$dP, {
      children: jsxs("div", {
        className: _$$s3.flex.flexColumn.gap8.pt8.$,
        "data-testid": "kitSelectionListContainer",
        children: [jsxs("div", {
          className: rB()("kit_picker_view--navContainer--JHIEY", Dm),
          children: [jsx("div", {
            className: _$$s3.h24.$,
            children: jsx(_$$K3, {
              recordingKey: _$$Pt("firstDraftKitSelection", "backButton"),
              onClick: pop,
              "aria-label": getI18nString("qa.go_back"),
              children: jsx(_$$C3, {})
            })
          }), jsx("input", {
            ref: u,
            "aria-autocomplete": "list",
            className: rB()("kit_picker_view--searchInput--Yj6zW", Dm),
            dir: "auto",
            maxLength: 100,
            onChange: e => {
              !function (e) {
                if (d(e), 0 === e.length) g(null); else {
                  let t = e.toLowerCase();
                  g(allUsableKitEntries.filter(e => sp(e).toLowerCase().includes(t)));
                }
              }(e.target.value);
            },
            placeholder: getI18nString("first_draft.kits.search_placeholder"),
            spellCheck: !1,
            type: "search",
            value: l
          }), jsx(_$$y3, {
            helpUrlVariant: _$$JT.FIRST_DRAFT_MAKE_KIT
          })]
        }), kitsAreLoaded && getFeatureFlags().first_draft_direct_gen ? jsx("div", {
          className: _$$s3.wFull.pl8.pr8.$,
          children: v ? jsxs(fu, {
            value: _,
            onChange: _$$lQ,
            numItems: 2,
            children: [jsx(_$$oz, {
              tabId: sl.ORG,
              onAction: () => x(sl.ORG),
              recordingKey: _$$Pt("firstDraftKitSelection", "orgTab"),
              htmlAttributes: {
                ...(C && {
                  "data-tooltip": b,
                  "data-tooltip-type": Ib.TEXT
                })
              },
              children: renderI18nText("first_draft.kits.org_libraries", {
                orgName: EJ(b, 20)
              })
            }), jsx(_$$oz, {
              tabId: sl.ALL,
              onAction: () => x(sl.ALL),
              recordingKey: _$$Pt("firstDraftKitSelection", "allTab"),
              children: renderI18nText("first_draft.kits.all_libraries")
            })]
          }) : jsx(sh, {})
        }) : null, jsx("div", {
          style: {
            height: 312
          },
          className: _$$s3.relative.$,
          "data-testid": "kitSelectionListView",
          children: kitsAreLoaded ? jsx(su, {
            kitsToShow: E,
            searchQuery: l,
            onKitOptionSelected: m
          }) : null
        })]
      })
    })
  });
}
function su({
  kitsToShow: e,
  searchQuery: t,
  onKitOptionSelected: i
}) {
  if (t && 0 === e.length) {
    let e = t.length > 20 ? `${t.slice(0, 20)}\u2026` : t;
    return jsx("div", {
      className: _$$s3.p8.selfCenter.justifyCenter.flex.flexGrow0.$,
      children: renderI18nText("first_draft.kits.no_results", {
        searchQuery: e
      })
    });
  }
  return jsx(_$$T4.Provider, {
    value: {
      recordingKey: "firstDraftView"
    },
    children: jsx(_$$B6, {
      primary: !0,
      resultCount: e.length,
      children: e.map((e, t) => jsx(_$$B6.Item, {
        primaryAction: {
          text: "Perform",
          shortcuts: [{
            key: Uz.ENTER
          }],
          onAction: () => i(e)
        },
        actionLabel: !1,
        recordingKey: _$$Pt("firstDraftKitSelection", t, "list-item"),
        children: jsxs("div", {
          className: _$$s3.p4.gap8.flexRow.flex.itemsCenter.$,
          "data-testid": "fd-kit-item",
          children: [jsx("div", {
            className: "kit_picker_view--fileThumbnail--aGgkC",
            style: {
              backgroundImage: `url(${e.thumbnailUrl})`
            }
          }), jsxs("div", {
            className: "kit_picker_view--kitDisplayInformation--Ypl2p",
            children: [jsx("div", {
              children: sp(e)
            }), e.numComponents > 0 && jsx("div", {
              className: "kit_picker_view--componentCountText--bBnSq",
              children: renderI18nText("first_draft.kits.components_count", {
                count: e.numComponents
              })
            })]
          })]
        })
      }, t))
    })
  });
}
function sp(e) {
  switch (e.dsKitKey.type) {
    case "LOCAL":
    case "USER_LIBRARY":
      return e.name;
    case "1P_LIBRARY":
      if (e.metadata.identifier) return getI18nString(`first_draft.kits.${e.metadata.identifier}`) || e.name;
      return e.name;
    default:
      return throwTypeError(e.dsKitKey);
  }
}
function sh() {
  return jsxs("div", {
    className: "kit_picker_view--tempGettingStartedNotice--ADe-Q",
    children: [jsx("div", {
      className: _$$s3.fontBold.$,
      children: renderI18nText("first_draft.direct_gen.getting_started.heading")
    }), jsxs("div", {
      className: _$$s3.inline.colorTextSecondary.flexWrap.$,
      children: [renderI18nText("first_draft.direct_gen.getting_started.notice"), " ", jsx(_$$N2, {
        newTab: !0,
        trusted: !0,
        href: "https://www.figma.com/blog/figma-ai-first-draft-byods/",
        onClick: e => e.stopPropagation(),
        htmlAttributes: {
          "data-tooltip": getI18nString("qa.learn_more"),
          "data-tooltip-type": Ib.TEXT,
          "data-tooltip-show-above": !0
        },
        children: renderI18nText("qa.learn_more")
      })]
    })]
  });
}
function sm({
  onClose: e,
  defaultPosition: t,
  description: i,
  setDescription: r
}) {
  return jsx(_$$bL2, {
    width: "sm",
    onClose: e,
    defaultPosition: {
      bottom: window.innerHeight - t.y - 16,
      right: window.innerWidth - t.x + 16
    },
    children: jsxs(vo, {
      children: [jsx(Y9, {
        children: jsx(hE, {
          children: renderI18nText("first_draft.reference_settings")
        })
      }), jsx(_$$nB, {
        padding: 8,
        children: jsx(_$$v2, {
          placeholder: getI18nString("first_draft.reference_settings.placeholder"),
          value: i,
          onChange: e => {
            r(e.currentTarget.value);
          },
          rows: 3,
          minHeight: 64,
          maxHeight: 64,
          focusOnMount: !0
        })
      })]
    })
  });
}
function sf({
  selectedNodeThumbnailsCache: e,
  onDelete: t,
  promptValue: i,
  setPromptValue: r
}) {
  let s = Array.from(_$$eb().values());
  let [o, l] = useState(null);
  let c = useRef({
    x: 0,
    y: 0
  });
  return jsxs("div", {
    className: _$$s3.p4.flex.flexRow.flexWrap.minW0.flexShrink0.$,
    children: [s?.map(i => jsxs("div", {
      className: _$$s3.relative.$,
      style: {
        display: "flex"
      },
      children: [jsx(_$$v3, {
        thumbnailUrl: e?.get(i.guid)?.imageURL ?? zs,
        altText: i.name,
        onClick: () => {
          glU?.panToNode(i.guid, !1);
        },
        isUploading: e?.get(i.guid)?.promise !== null,
        onDelete: () => {
          t(i.guid);
        }
      }), jsx("div", {
        className: _$$s3.absolute.colorBgSecondary.p4.$,
        style: {
          bottom: "-4px",
          left: "-4px",
          borderRadius: "0 9px 0 0"
        },
        children: jsx(_$$f6, {
          onIcon: jsx(_$$A9, {}),
          offIcon: jsx(_$$A9, {}),
          onChange: (e, {
            event: t
          }) => {
            c.current = {
              x: t.target.getBoundingClientRect().x,
              y: t.target.getBoundingClientRect().bottom
            };
            l(e ? i.guid : null);
          },
          checked: o === i.guid,
          variant: "highlighted",
          "aria-label": getI18nString("first_draft.reference_settings.adjust_settings") || ""
        })
      })]
    }, i.guid)), o && jsx(sm, {
      onClose: () => l(null),
      defaultPosition: c.current,
      description: i.attachmentMetadata?.[o]?.description ?? "",
      setDescription: e => r({
        ...i,
        attachmentMetadata: {
          ...i.attachmentMetadata,
          [o]: {
            description: e
          }
        }
      })
    })]
  });
}
function sg({
  promptValue: e,
  setPromptValue: t,
  onShowKitPicker: i,
  selectedKit: r,
  handleSubmit: s,
  promptHistory: l,
  recordingKey: c,
  aiTrackingContext: u,
  selectedNodeThumbnailsCache: p,
  allowNodeAttachments: h
}) {
  let m;
  let [f] = useState(function (e = 3, t) {
    let i = getFeatureFlags().first_draft_new_prompt_pills;
    let r = [{
      label: getI18nString("first_draft.prompts.pricing_page.label"),
      prompt: getI18nString("first_draft.prompts.pricing_page.prompt"),
      type: "WEB"
    }, {
      label: getI18nString("first_draft.prompts.sign_in_screen.label"),
      prompt: getI18nString("first_draft.prompts.sign_in_screen.prompt"),
      type: "WEB"
    }, {
      label: getI18nString("first_draft.prompts.blog_post.label"),
      prompt: getI18nString("first_draft.prompts.blog_post.prompt"),
      type: "WEB"
    }, {
      label: getI18nString("first_draft.prompts.portfolio.label"),
      prompt: getI18nString("first_draft.prompts.portfolio.prompt"),
      type: "WEB"
    }, {
      label: getI18nString("first_draft.prompts.news_site.label"),
      prompt: getI18nString("first_draft.prompts.news_site.prompt"),
      type: "WEB"
    }, {
      label: getI18nString("first_draft.prompts.onboarding.label"),
      prompt: getI18nString("first_draft.prompts.onboarding.prompt"),
      type: "WEB"
    }, {
      label: getI18nString("first_draft.prompts.sign_in_screen.label"),
      prompt: getI18nString("first_draft.prompts.sign_in_screen.prompt"),
      type: "MOBILE"
    }, {
      label: getI18nString("first_draft.prompts.blog_post.label"),
      prompt: getI18nString("first_draft.prompts.blog_post.prompt"),
      type: "MOBILE"
    }, {
      label: getI18nString("first_draft.prompts.map_app_mobile.label"),
      prompt: getI18nString("first_draft.prompts.map_app_mobile.prompt"),
      type: "MOBILE"
    }, {
      label: getI18nString("first_draft.prompts.messaging_mobile.label"),
      prompt: getI18nString("first_draft.prompts.messaging_mobile.prompt"),
      type: "MOBILE"
    }, {
      label: getI18nString("first_draft.prompts.profile.label"),
      prompt: getI18nString("first_draft.prompts.profile_mobile.prompt"),
      type: "MOBILE"
    }, {
      label: getI18nString("first_draft.prompts.travel_app_mobile.label"),
      prompt: getI18nString("first_draft.prompts.travel_app_mobile.prompt"),
      type: "MOBILE"
    }, {
      label: getI18nString("first_draft.prompts.social_feed_mobile.label"),
      prompt: getI18nString("first_draft.prompts.social_feed_mobile.prompt"),
      type: "MOBILE"
    }, {
      label: getI18nString("first_draft.prompts.ticketing_app.label"),
      prompt: getI18nString("first_draft.prompts.ticketing_app.prompt"),
      type: "MOBILE"
    }, {
      label: getI18nString("first_draft.prompts.ride_sharing_mobile.label"),
      prompt: getI18nString("first_draft.prompts.ride_sharing_mobile.prompt"),
      type: "MOBILE"
    }, {
      label: getI18nString("first_draft.prompts.to_dos_mobile.label"),
      prompt: getI18nString("first_draft.prompts.to_dos_mobile.prompt"),
      type: "MOBILE"
    }];
    i && r.push({
      label: getI18nString("first_draft.prompts.homepage.label"),
      prompt: getI18nString("first_draft.prompts.homepage.prompt"),
      type: "WEB"
    }, {
      label: getI18nString("first_draft.prompts.homepage.label"),
      prompt: getI18nString("first_draft.prompts.homepage_2.prompt"),
      type: "WEB"
    }, {
      label: getI18nString("first_draft.prompts.video_player_streaming.label"),
      prompt: getI18nString("first_draft.prompts.video_player_streaming.prompt"),
      type: "WEB"
    }, {
      label: getI18nString("first_draft.prompts.video_page_with_comments.label"),
      prompt: getI18nString("first_draft.prompts.video_page_with_comments.prompt"),
      type: "WEB"
    }, {
      label: getI18nString("first_draft.prompts.search_results_travel.label"),
      prompt: getI18nString("first_draft.prompts.search_results_travel.prompt"),
      type: "WEB"
    }, {
      label: getI18nString("first_draft.prompts.social_feed_text_heavy.label"),
      prompt: getI18nString("first_draft.prompts.social_feed_text_heavy.prompt"),
      type: "WEB"
    }, {
      label: getI18nString("first_draft.prompts.profile.label"),
      prompt: getI18nString("first_draft.prompts.profile_social_media.prompt"),
      type: "WEB"
    }, {
      label: getI18nString("first_draft.prompts.news_article.label"),
      prompt: getI18nString("first_draft.prompts.news_article.prompt"),
      type: "WEB"
    }, {
      label: getI18nString("first_draft.prompts.landing_page.label"),
      prompt: getI18nString("first_draft.prompts.landing_page_beauty.prompt"),
      type: "WEB"
    }, {
      label: getI18nString("first_draft.prompts.landing_page.label"),
      prompt: getI18nString("first_draft.prompts.landing_page_tech.prompt"),
      type: "WEB"
    }, {
      label: getI18nString("first_draft.prompts.marketing_page_football.label"),
      prompt: getI18nString("first_draft.prompts.marketing_page_football.prompt"),
      type: "WEB"
    }, {
      label: getI18nString("first_draft.prompts.shopping.label"),
      prompt: getI18nString("first_draft.prompts.shopping_hifi.prompt"),
      type: "WEB"
    }, {
      label: getI18nString("first_draft.prompts.shopping.label"),
      prompt: getI18nString("first_draft.prompts.product_details_shoes.prompt"),
      type: "WEB"
    }, {
      label: getI18nString("first_draft.prompts.admin_dashboard_saas.label"),
      prompt: getI18nString("first_draft.prompts.admin_dashboard_saas.prompt"),
      type: "WEB"
    }, {
      label: getI18nString("first_draft.prompts.settings_mobile.label"),
      prompt: getI18nString("first_draft.prompts.settings_mobile.prompt"),
      type: "MOBILE"
    }, {
      label: getI18nString("first_draft.prompts.video_player_comments_mobile.label"),
      prompt: getI18nString("first_draft.prompts.video_player_comments_mobile.prompt"),
      type: "MOBILE"
    }, {
      label: getI18nString("first_draft.prompts.checkout_mobile.label"),
      prompt: getI18nString("first_draft.prompts.checkout_mobile.prompt"),
      type: "MOBILE"
    }, {
      label: getI18nString("first_draft.prompts.reviews_mobile.label"),
      prompt: getI18nString("first_draft.prompts.reviews_mobile.prompt"),
      type: "MOBILE"
    }, {
      label: getI18nString("first_draft.prompts.audio_player_mobile.label"),
      prompt: getI18nString("first_draft.prompts.audio_player_mobile.prompt"),
      type: "MOBILE"
    }, {
      label: getI18nString("first_draft.prompts.investing_mobile.label"),
      prompt: getI18nString("first_draft.prompts.investing_mobile.prompt"),
      type: "MOBILE"
    }, {
      label: getI18nString("first_draft.prompts.app_browsing_mobile.label"),
      prompt: getI18nString("first_draft.prompts.app_browsing_mobile.prompt"),
      type: "MOBILE"
    }, {
      label: getI18nString("first_draft.prompts.reservations_mobile.label"),
      prompt: getI18nString("first_draft.prompts.reservations_mobile.prompt"),
      type: "MOBILE"
    }, {
      label: getI18nString("first_draft.prompts.fitness_mobile.label"),
      prompt: getI18nString("first_draft.prompts.fitness_mobile.prompt"),
      type: "MOBILE"
    }, {
      label: getI18nString("first_draft.prompts.subscriptions_mobile.label"),
      prompt: getI18nString("first_draft.prompts.subscriptions_mobile.prompt"),
      type: "MOBILE"
    }, {
      label: getI18nString("first_draft.prompts.recipes_mobile.label"),
      prompt: getI18nString("first_draft.prompts.recipes_mobile.prompt"),
      type: "MOBILE"
    }, {
      label: getI18nString("first_draft.prompts.sports_mobile.label"),
      prompt: getI18nString("first_draft.prompts.sports_mobile.prompt"),
      type: "MOBILE"
    }, {
      label: getI18nString("first_draft.prompts.delivery_app_mobile.label"),
      prompt: getI18nString("first_draft.prompts.delivery_app_mobile.prompt"),
      type: "MOBILE"
    }, {
      label: getI18nString("first_draft.prompts.calendar_mobile.label"),
      prompt: getI18nString("first_draft.prompts.calendar_mobile.prompt"),
      type: "MOBILE"
    }, {
      label: getI18nString("first_draft.prompts.email_mobile.label"),
      prompt: getI18nString("first_draft.prompts.email_mobile.prompt"),
      type: "MOBILE"
    }, {
      label: getI18nString("first_draft.prompts.file_browser_mobile.label"),
      prompt: getI18nString("first_draft.prompts.file_browser_mobile.prompt"),
      type: "MOBILE"
    }, {
      label: getI18nString("first_draft.prompts.education_mobile.label"),
      prompt: getI18nString("first_draft.prompts.education_mobile.prompt"),
      type: "MOBILE"
    }, {
      label: getI18nString("first_draft.prompts.shopping_mobile.label"),
      prompt: getI18nString("first_draft.prompts.shopping_mobile.prompt"),
      type: "MOBILE"
    });
    let n = r;
    if (t) {
      let e = t.toLowerCase();
      e.includes("mobile") ? n = n.filter(e => "MOBILE" === e.type) : e.includes("web") && (n = n.filter(e => "WEB" === e.type));
    }
    let a = nx()(n);
    let s = {};
    for (let t of a) {
      if (Object.keys(s).length >= e) break;
      let i = nC(t.label);
      s[i] || (s[i] = t);
    }
    let l = Object.values(s).slice(0, e);
    return l.length < e ? (reportError(_$$e.AI_GENERATION, Error(`Unable to generate ${e} unique presets`), {
      extra: {
        count: e,
        generatedCount: l.length,
        selectedPresetsObj: s,
        shuffledPresets: a
      }
    }), []) : l;
  }(4, r?.name));
  let g = useCallback(e => {
    SX({
      ...u,
      ...Q0(e),
      interaction: NI.GENERATE
    });
    s();
  }, [u, s]);
  let _ = Array.from(_$$eb().values());
  let x = useCallback(e => {
    Egt?.removeFromSelection([e]);
  }, []);
  let y = useCallback(() => 0 !== e.prompt.length, [e]);
  let b = getFeatureFlags().first_draft_direct_gen;
  let C = useRef(null);
  let v = () => r && jsx($n, {
    "aria-label": sp(r),
    iconPrefix: jsx(_$$i4, {
      style: {
        marginLeft: 2,
        marginRight: 4
      }
    }),
    onClick: i,
    recordingKey: _$$Pt(c, "changeKit"),
    variant: "secondary",
    children: sp(r)
  });
  let E = _$$o4();
  m = b ? {
    growVertically: !0,
    width: E - 16
  } : {
    growVertically: !1
  };
  return jsxs("div", {
    className: _$$s3.borderBox.$,
    style: {
      padding: 8
    },
    "data-testid": "readyForPromptView",
    children: [jsx(XG, {
      action: _$$JT.FIRST_DRAFT,
      bottomContent: h && b && _ && p && _.length > 0 && jsx(sf, {
        promptValue: e,
        setPromptValue: t,
        selectedNodeThumbnailsCache: p,
        onDelete: x
      }),
      featureNameForInstrumentation: "first_draft",
      onChange: i => t({
        ...e,
        prompt: i
      }),
      promptHistory: b ? [] : l,
      recordingKey: _$$Pt(c, "generate"),
      refocusToInput: !1,
      suggestion: f[0].prompt,
      suggestionPills: f.slice(1),
      textAreaRef: C,
      topNavContent: b ? jsx("div", {}) : jsx("div", {
        className: "first_draft_prompt_view_v2--libraryButtonContainer--P-Bye",
        children: v()
      }),
      value: e.prompt,
      ...m
    }), jsxs(_$$B, {
      fullWidth: !0,
      justify: "space-between",
      children: [b && v() || jsx("div", {}), jsxs(_$$B, {
        gap: 8,
        children: [b && jsx(_$$nj, {
          promptHistory: l,
          onChange: i => t({
            ...e,
            prompt: i
          }),
          textAreaRef: C
        }), jsx(_$$r, {
          shortcuts: [{
            key: Uz.ENTER,
            modifier: [xH.META]
          }],
          onAction: g,
          recordingKey: _$$Pt(c, "generate"),
          disabled: !y(),
          children: renderI18nText("first_draft.generate")
        })]
      })]
    })]
  });
}
function sx({
  options: e,
  onSelect: t
}) {
  let [i, r] = useState();
  let s = useCallback((e, n) => {
    t(e, {
      ev: n,
      prevOption: i
    });
    r(e);
  }, [t, i]);
  return jsxs(_$$_4, {
    children: [jsx(_$$t5, {}), jsx(_$$x3, {
      columns: 6,
      gap: 13.9,
      padding: 0,
      children: e.map((e, t) => jsx(sy, {
        column: t,
        presetOption: e,
        onSelect: s
      }, t))
    })]
  });
}
function sy({
  column: e,
  presetOption: t,
  onSelect: i
}) {
  let r = {
    onAction: e => i(t, e)
  };
  return jsx(_$$x3.Item, {
    recordingKey: `previewTileItem-${e}`,
    focusAction: r,
    primaryAction: r,
    enableFauxFocus: !1,
    children: jsx(_$$x3.GridItemHighlight, {
      children: jsx("div", {
        className: _$$s3.colorBgSecondary.b1.colorBorder.wFull.flex.alignCenter.justifyCenter.$,
        style: {
          aspectRatio: "1/1",
          height: "56px",
          overflow: "hidden",
          borderRadius: "8px",
          alignItems: "flex-start"
        },
        children: jsx("img", {
          alt: getI18nString("first_draft.theme_preview", {
            index: e + 1
          }),
          src: t.dataURI,
          className: _$$s3.maxWFull.$,
          draggable: !1
        })
      })
    })
  });
}
let sb = createLocalStorageAtom("draft_prompt_history", []);
let sC = "first-draft-done-feedback";
let sv = createRemovableAtomFamily(() => atom({
  prompt: ""
}));
let sE = async ({
  params: {
    selectedKit: e,
    promptValue: t,
    submitPrompt: i,
    shouldContinueStreamRef: r,
    selectedNodeIds: n,
    selectedNodeThumbnailsCache: a
  },
  abortController: s
}) => {
  if (s.signal.addEventListener("abort", () => {
    r.current = !1;
  }), !e) throw Error(getI18nString("first_draft.no_design_generated"));
  let o = await i(t, {
    designSystem: e,
    selectedNodeIds: n ?? void 0,
    selectedNodeThumbnailsCache: a
  }, {
    shouldGenerateImages: !0,
    addWireframeBorder: e?.metadata.needs_border,
    skipSelection: WX(e)
  });
  if (o.error) {
    XJn.clearFDScene();
    return o.error;
  }
  if (o?.success && !o?.nodeId) throw Error(getI18nString("first_draft.no_design_generated"));
  return {
    result: o
  };
};
function sT() {
  let e = _$$tS();
  let {
    aiTrackingContext
  } = _$$wj(_$$JT.FIRST_DRAFT);
  let i = aiTrackingContext.clientLifecycleId;
  let r = useCallback(() => {
    trackEventAnalytics("First Draft: Error", {
      file_key: e,
      clientLifecycleId: i,
      view: "firstDraftGenerate"
    }, {
      forwardToDatadog: !0,
      sendAsBeacon: !0,
      mlEvent: !0
    });
  }, [i, e]);
  return jsx(_$$tH, {
    boundaryKey: "FirstDraft",
    fallback: H4.NONE_I_KNOW_WHAT_IM_DOING,
    sentryTags: {
      clientLifecycleId: i,
      area: _$$e.AI_GENERATION
    },
    onError: r,
    children: jsx(_$$T4.Provider, {
      value: {
        recordingKey: "firstDraftView"
      },
      children: jsx(sw, {
        recordingKey: "firstDraftView"
      })
    })
  });
}
function sw({
  recordingKey: e
}) {
  let t = RL(_$$JT.FIRST_DRAFT, sE);
  let {
    start,
    stop,
    state,
    aiTrackingContext
  } = t;
  let u = aiTrackingContext.clientLifecycleId;
  let h = _$$eY();
  let m = _$$tS();
  let f = useRef(null);
  let g = sv(u);
  let [_, x] = useAtomValueAndSetter(g);
  if (f.current) {
    let e = f.current;
    f.current = null;
    x(e);
  }
  let [y, b] = useState([]);
  let C = useRef(!0);
  let v = useRef(null);
  let E = useRef(null);
  let T = useRef(new aX(1));
  let [w, j] = useState(new Set());
  let I = useRef({});
  let {
    kitsAreLoaded,
    hasLastSelectedKit,
    selectedKit
  } = _$$sI();
  let {
    close,
    push,
    replace
  } = cq();
  let [M, P] = useState(!1 === hasLastSelectedKit);
  useEffect(() => {
    if (M || !hasLastSelectedKit) return (hasLastSelectedKit ? push : replace)({
      name: Sn.FIRST_DRAFT_KIT_PICKER,
      module: jsx(sc, {
        aiTrackingContext,
        ParentComponent: sT
      })
    });
  }, [aiTrackingContext, M, hasLastSelectedKit, e, push, replace]);
  let {
    promptHistory,
    addPromptToHistory
  } = _$$a3(sb, e => e);
  let K = WX(selectedKit);
  let [H, z] = useState(!1);
  let V = useDispatch();
  let W = WX(selectedKit);
  let Y = qi({
    enabled: W
  });
  let X = _$$eb();
  al(!K && (state === qy.DONE || state === qy.ERROR));
  useEffect(() => () => {
    XJn.clearFDScene();
  }, []);
  let Z = useCallback(() => C.current, [C]);
  let ee = useCallback(async (e, t, i, r) => {
    if (!e || !i) return;
    xF(e);
    let n = !0;
    selectedKit && !1 === selectedKit.metadata.has_theme && (n = !1);
    0 === r.length && 0 === Object.keys(t).length && (n = !1);
    n && b(await _$$xk(i, e, r, t));
  }, [selectedKit]);
  let {
    submitPrompt,
    executionTrace,
    imageProgress
  } = TM({
    shouldContinueStream: Z,
    onInsertJSXDone: ee,
    clientLifecycleId: u
  });
  let en = useCallback(async () => {
    if (state === qy.RUNNING) {
      logWarning("first-draft", "handleSubmit called while already running");
      return;
    }
    if (!selectedKit) {
      logWarning("first-draft", "handleSubmit called without a selected kit");
      return;
    }
    debugState.dispatch(_$$F.dequeue({
      matchType: sC
    }));
    addPromptToHistory(_.prompt);
    let e = await start({
      selectedKit,
      promptValue: _,
      submitPrompt,
      shouldContinueStreamRef: C,
      selectedNodeIds: W ? Array.from(X.keys()) : void 0,
      selectedNodeThumbnailsCache: Y
    });
    e?.result?.nodeId && (v.current = e.result.nodeId);
  }, [state, selectedKit, addPromptToHistory, _, start, submitPrompt, W, X, Y]);
  let ea = useCallback(() => {
    stop();
    close();
  }, [close, stop]);
  let es = useCallback(async (e, t) => {
    void 0 !== t.prevOption && e !== t.prevOption && hm({
      ...aiTrackingContext,
      ...zQ(t.ev),
      iteration_view_type: $J.SUCCESS_WITH_ITERATION,
      interaction: _$$sd.GALLERY_SELECT,
      status: _$$o3.COMPLETED,
      value: e.modeId || "null"
    });
    t.ev.target?.item && (I.current[t.ev.target.index] = t.ev.target.item);
    await T.current.postTask(() => {
      if (v.current && (E.current?.modeId ?? null) !== e.modeId) {
        let t = _$$DP(e, v.current, w);
        let i = h.get(t);
        let r = i?.firstDraftData;
        let n = r?.kit?.type ?? null;
        trackEventAnalytics("First Draft: Multiple Options Selected", {
          preset_name: e.modeId,
          clientLifecycleId: u,
          isLocal: n === AZ4.LOCAL || null,
          dsKitType: null !== n ? n === AZ4.LOCAL ? "LOCAL" : "1P_LIBRARY" : null,
          kitKey: r?.kit?.key ?? null,
          file_key: m
        }, {
          forwardToDatadog: !0,
          batchRequest: !0,
          mlEvent: !0
        });
        j(new Set([v.current, ...w]));
        v.current = t;
        E.current = e;
      }
    }, {});
  }, [aiTrackingContext, w, u, h, m]);
  let eo = Fk((e, t) => {
    for (let i of t) if (i) {
      let t = e.get(i);
      if (t) return Object.values(t.explicitVariableModes())[0] ?? null;
    }
  }, [v.current, ...w]);
  useEffect(() => {
    if (E.current && void 0 !== eo && E.current.modeId !== eo) {
      let e = y.findIndex(e => e.modeId === eo);
      I.current[e] && (E.current = y[e], I.current[e].fauxFocus());
    }
  }, [eo, y]);
  let el = () => 0 === y.length ? null : jsx(sx, {
    options: y,
    onSelect: es
  });
  let ec = executionTrace && getFeatureFlags().cortex_execution_tracing;
  switch (useLayoutEffect(() => {
    state === qy.DONE && K && (f.current = {
      ..._,
      attachmentMetadata: {
        ..._.attachmentMetadata,
        ...(v.current ? {
          [v.current]: {
            description: "",
            wasOutputOfPreviousGeneration: !0
          }
        } : {})
      }
    }, debugState.dispatch(_$$F.enqueue({
      type: sC,
      messageComponentKey: Rw.FIRST_DRAFT_FEEDBACK,
      icon: zX.GREEN_CHECK,
      onDismiss: () => {
        debugState.dispatch(_$$F.dequeue({
          matchType: sC
        }));
      },
      timeoutOverride: 6e4,
      aiTrackingContext
    })), XJn?.clearFDScene(), B3(_$$JT.FIRST_DRAFT), v.current && Egt?.addToSelection([v.current]));
  }, [state, K, _, aiTrackingContext]), state) {
    case qy.INITIAL:
      return jsx(sg, {
        aiTrackingContext,
        allowNodeAttachments: W,
        handleSubmit: en,
        kitsAreLoaded,
        onShowKitPicker: () => {
          P(!0);
        },
        promptHistory,
        promptValue: _,
        recordingKey: e,
        selectedKit,
        selectedNodeThumbnailsCache: Y,
        setPromptValue: x
      });
    case qy.RUNNING:
      return jsx(_$$F3, {
        recordingKey: _$$Pt(e, "running"),
        onStop: ea,
        aiTrackingContext,
        secondaryMessage: imageProgress.total && imageProgress.loaded ? getI18nString("first_draft.x_of_y_images", {
          loaded: imageProgress.loaded,
          total: imageProgress.total
        }) : void 0,
        children: renderI18nText("first_draft.running")
      });
    case qy.DONE:
      {
        let i = t.result;
        if (H) return jsx(am, {
          initialRootGuid: i.result?.nodeId
        });
        let r = [];
        if (KK() && !getFeatureFlags().first_draft_use_gemini && r.push({
          type: _$$is.MAKE_CHANGES,
          callback: () => {
            XJn.clearFDScene();
            z(!0);
          }
        }), ec && _$$A8(V, executionTrace), K) return null;
        return jsx(Oq, {
          content: selectedKit?.dsKitKey.type === "USER_LIBRARY" ? null : (() => {
            let e = [];
            let t = el();
            return (t && e.push(t), 0 === e.length) ? null : jsx(_$$Y, {
              direction: "vertical",
              spacing: 8,
              children: e
            });
          })(),
          iterateOptions: r,
          recordingKey: _$$Pt(e, "iterate"),
          aiTrackingContext: {
            ...aiTrackingContext,
            iteration_view_type: $J.SUCCESS_WITH_ITERATION
          },
          stayOpen: !0
        });
      }
    case qy.ERROR:
      {
        let {
          error
        } = t;
        ec && _$$A8(V, executionTrace);
        return jsx(_$$E4, {
          error,
          recordingKey: _$$Pt(e, "error"),
          buttons: [{
            type: _$$f5.OK,
            callback: close
          }],
          aiTrackingContext
        });
      }
    case qy.CANCELLED:
      return null;
    default:
      throwTypeError(state);
  }
}
let sI = "7f12ea1300756f144a0fb5daaf68dbfc01103a46";
let sk = (e, t) => {
  let i = e => {
    let t = e => "number" == typeof e && !isNaN(e);
    return t(e.x) && t(e.y) && t(e.width) && t(e.height);
  };
  if (!i(e) || !i(t)) throw Error("Invalid bounding box - all position and size properties must be valid numbers");
  let r = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)) * Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  let n = e.width * e.height + t.width * t.height - r;
  return [r, n];
};
let sN = {
  intersectionOverUnion: {
    distanceFunction: (e, t, i) => {
      let r = !0;
      let n = i.iouDefaultCost;
      try {
        let [a, s] = sk(e.boundingBox, t.boundingBox);
        void 0 !== i.iouThreshold && (r = r && (0 === s ? 0 : a / s) > i.iouThreshold);
        n = s - a;
      } catch (e) {
        return {
          match: !1,
          distance: n
        };
      }
      return {
        match: r,
        distance: n
      };
    },
    options: {
      iouDefaultCost: 1,
      iouThreshold: .2,
      typeMismatchCost: 1
    }
  }
};
function sO(e) {
  return e.fills.some(e => "IMAGE" === e.type);
}
let sL = new Set(["VECTOR", "LINE"]);
let sR = new Set(["VECTOR", "ROUNDED_RECTANGLE", "ELLIPSE", "STAR", "LINE", "REGULAR_POLYGON"]);
function sD(e) {
  return !!(sL.has(e.type) || sR.has(e.type)) || "GROUP" === e.type && e.childrenNodes.every(e => sD(e));
}
function sB(e) {
  let t = atob(e);
  let i = new Uint8Array(t.length);
  for (let e = 0; e < t.length; e++) i[e] = t.charCodeAt(e);
  return i;
}
function sU(e) {
  if (!e || !e.startsWith("data:") || -1 === e.indexOf(";base64,")) throw Error("Invalid data URL format");
  let t = e.split(";base64,").pop();
  if (!t) throw Error("Could not extract base64 data from URL");
  let i = e.substring(5, e.indexOf(";"));
  if (!i) throw Error("Could not extract mime type from data URL");
  return {
    base64: t,
    mimeType: i
  };
}
function sG(e) {
  let t = e.size;
  let i = _G(new Point(t.x, t.y), e.guid, !0, void 0, !1, !0);
  if (!i || !i.pixels || !i.pixelSize || !i.displaySize) return null;
  let {
    base64,
    mimeType
  } = sU(Pv(i.pixels, i.pixelSize));
  return {
    base64,
    mimeType,
    pixelData: i.pixels,
    width: i.pixelSize.x,
    height: i.pixelSize.y
  };
}
async function sK(e, t, i, r, n, a, s, o = "Image") {
  let l;
  let d = sB(a);
  let c = await UD(d, s, "image");
  if (_$$l2.user("create image node", () => {
    (l = e.createNode("RECTANGLE")).size = {
      x: r,
      y: n
    };
    l.insertImageInFillPaint(c);
    l.x = i.x;
    l.y = i.y;
    t.appendChild(l);
    l.name = o;
  }), !l) throw Error("Failed to create node");
  return l;
}
async function sH(e, t, i, r, a, s, o) {
  let l = await sK(e, t, i, r, a, s, o, "Placeholder");
  Vm(l.guid, jsx(_$$A0, {}));
  return l;
}
async function sz(e, t, i, r, n, a, s, o) {
  let {
    node,
    issues
  } = await LZ(i, {
    originalSize: {
      x: n,
      y: a
    },
    normalizePxToRange01: !0,
    excludeImageData: !0,
    excludeVectorData: !0,
    imagePlaceholderRef: sI
  });
  let u = () => {
    node && _$$l2.user("remove aborted node", () => {
      node?.removeSelfAndChildren();
    });
  };
  if (o.signal.aborted) {
    u();
    return new _$$lc2();
  }
  if (!node) throw Error(`Failed to deserialize node${issues.length ? `: ${issues.map(e => e.message).join(", ")}` : ""}`);
  let p = await Promise.all(s.objects.filter(e => "image" === e.cls || "vector" === e.cls).map(async e => {
    let t = function (e, t, i, r) {
      let n = new Uint8Array(r.width * r.height * 4);
      for (let i = 0; i < r.height; i++) for (let a = 0; a < r.width; a++) {
        let s = r.x + a;
        let o = ((r.y + i) * t + s) * 4;
        let l = (i * r.width + a) * 4;
        n[l] = e[o] ?? 0;
        n[l + 1] = e[o + 1] ?? 0;
        n[l + 2] = e[o + 2] ?? 0;
        n[l + 3] = e[o + 3] ?? 0;
      }
      return {
        data: n,
        width: r.width,
        height: r.height
      };
    }(function (e, t, i, r) {
      let n = new Uint8Array(e.length);
      for (let a = 0; a < r; a++) for (let r = 0; r < i; r++) {
        let s = (a * i + r) * 4;
        let o = t[a * i + r];
        n[s] = e[s] ?? 0;
        n[s + 1] = e[s + 1] ?? 0;
        n[s + 2] = e[s + 2] ?? 0;
        n[s + 3] = (e[s + 3] ?? 0) * (o ?? 0) / 255;
      }
      return n;
    }(r, function (e, t, i, r, n) {
      let a = new Uint8Array(r * n);
      for (let s = 0; s < n; s++) for (let o = 0; o < r; o++) {
        let l = Math.floor(o * t / r);
        let d = Math.floor(s * i / n);
        a[s * r + o] = e[d * t + l] ?? 0;
      }
      return a;
    }(e.mask, s.width, s.height, n, a), n, a), n, 0, {
      x: e.x,
      y: e.y,
      width: e.width,
      height: e.height
    });
    let i = sB(function (e, t, i) {
      let r = t * i * 4;
      if (e.length !== r) throw Error(`Data length (${e.length}) does not match expected dimensions (${r})`);
      let {
        canvas,
        ctx
      } = function (e, t) {
        let i = document.createElement("canvas");
        i.width = e;
        i.height = t;
        let r = i.getContext("2d");
        return {
          canvas: i,
          ctx: r
        };
      }(t, i);
      (function (e, t, i, r) {
        let n = e.createImageData(t, i);
        n.data.set(r);
        e.putImageData(n, 0, 0);
      })(ctx, t, i, e);
      return canvas.toDataURL("image/png");
    }(t.data, t.width, t.height).split(",")[1]);
    let o = await UD(i, "image/png", "image");
    return {
      type: e.cls,
      x: e.x,
      y: e.y,
      width: e.width,
      height: e.height,
      imageSetForInsertion: o
    };
  }));
  if (o.signal.aborted) {
    u();
    return new _$$lc2();
  }
  let h = function ({
    node: e,
    graphics: t
  }) {
    var i;
    let [r, n] = function (e, t) {
      let i = [];
      !function e(t) {
        if (i.push(t), t.childrenNodes) for (let i of t.childrenNodes) e(i);
      }(e);
      let r = e.absoluteRenderBounds;
      if (!r) return [[], []];
      let n = [];
      let a = [];
      i.forEach(e => {
        if (t(e)) {
          let {
            relativeBounds,
            isVisible
          } = function (e, t) {
            let i = e.absoluteBoundingBox;
            if (!i) return {
              relativeBounds: void 0,
              isVisible: !1
            };
            let r = {
              x: i.x - t.x,
              y: i.y - t.y,
              width: i.w,
              height: i.h
            };
            let n = r.x < t.width && r.x + r.width > 0 && r.y < t.height && r.y + r.height > 0;
            return {
              relativeBounds: r,
              isVisible: n
            };
          }(e, {
            x: r.x,
            y: r.y,
            width: r.w,
            height: r.h
          });
          isVisible && relativeBounds && (n.push({
            boundingBox: relativeBounds
          }), a.push(e));
        }
      });
      return [n, a];
    }(e, e => sO(e) || sD(e));
    let [a, s] = function (e, t) {
      let i = e.filter(t);
      return [i.map(e => ({
        boundingBox: {
          x: e.x,
          y: e.y,
          width: e.width,
          height: e.height
        }
      })), i];
    }(t, e => "image" === e.type || "vector" === e.type);
    let [o, l] = function (e, t, i = sN.intersectionOverUnion) {
      let {
        columnsForRow,
        rowForColumn
      } = function (e, t = !1) {
        if (0 === e.length || 0 === e[0].length) return {
          columnsForRow: [],
          rowForColumn: [],
          gain: 0
        };
        let i = e.length;
        let r = e[0].length;
        let n = !1;
        if (r > i) {
          e = e[0].map((t, i) => e.map(e => e[i]));
          let t = i;
          i = r;
          r = t;
          n = !0;
        }
        let a = t ? Math.max(...e.flat()) : Math.min(...e.flat());
        t && a < 0 && (a = 0);
        !t && a > 0 && (a = 0);
        e = e.map(e => e.map(e => t ? -e + a : e - a));
        let s = Array(i).fill(-1);
        let o = Array(r).fill(-1);
        let l = Array(r).fill(0);
        let d = Array(i).fill(0);
        for (let t = 0; t < r; t++) {
          let {
            sink,
            predecessors,
            updatedU,
            updatedV
          } = function (e, t, i, r, n, a) {
            let s = r.length;
            let o = r[0].length;
            let l = Array(s).fill(0);
            let d = Array(o).fill(!1);
            let c = Array(s).fill(!1);
            let u = Array.from({
              length: s
            }, (e, t) => t);
            let p = s;
            let h = null;
            let m = 0;
            let f = e;
            let g = Array(s).fill(1 / 0);
            for (; null === h;) {
              d[f] = !0;
              let e = 1 / 0;
              let a = -1;
              for (let n = 0; n < p; n++) {
                let s = u[n];
                let o = m + r[s][f] - t[f] - i[s];
                o < g[s] && (l[s] = f, g[s] = o);
                g[s] < e && (e = g[s], a = n);
              }
              if (!isFinite(e)) return {
                sink: null,
                predecessors: l,
                updatedU: t,
                updatedV: i
              };
              let s = u[a];
              c[s] = !0;
              p--;
              u.splice(a, 1);
              m = g[s];
              -1 === n[s] ? h = s : f = n[s];
            }
            t[e] += m;
            for (let i = 0; i < d.length; i++) d[i] && i !== e && (t[i] += m - g[a[i]]);
            for (let e = 0; e < c.length; e++) c[e] && (i[e] -= m - g[e]);
            return {
              sink: h,
              predecessors: l,
              updatedU: t,
              updatedV: i
            };
          }(t, l, d, e, s, o);
          if (null === sink) return {
            columnsForRow: [],
            rowForColumn: [],
            gain: -1
          };
          l = updatedU;
          d = updatedV;
          let c = sink;
          for (; ;) {
            let e = predecessors[c];
            s[c] = e;
            let i = o[e];
            if (o[e] = c, c = i, e === t) break;
          }
        }
        let c = 0;
        for (let t = 0; t < r; t++) c += e[o[t]][t];
        if (t ? (c = -c + a * r, l = l.map(e => -e), d = d.map(e => -e)) : c += a * r, n) {
          let e = s;
          s = o;
          o = e;
          e = l;
          l = d;
          d = e;
        }
        return {
          columnsForRow: s,
          rowForColumn: o,
          gain: c
        };
      }(function (e, t, i) {
        let {
          distanceFunction,
          options
        } = i;
        if (!distanceFunction) throw Error("`distanceFunction` must be set in config.");
        if (!options) throw Error("`options` must be set in config.");
        let a = Array.from({
          length: e.length
        }, () => Array(t.length).fill(0));
        for (let i = 0; i < e.length; i++) for (let s = 0; s < t.length; s++) a[i][s] = distanceFunction(e[i], t[s], options).distance;
        return a;
      }(e, t, i));
      let {
        distanceFunction,
        options
      } = i;
      for (let i = 0; i < columnsForRow.length; i++) {
        let o = columnsForRow[i];
        -1 === o || distanceFunction(e[i], t[o], options).match || (rowForColumn[o] = -1, columnsForRow[i] = -1);
      }
      return [columnsForRow, rowForColumn];
    }(r, a);
    let d = getSingletonSceneGraph();
    _$$l2.ai("reconcile all graphics", () => {
      for (let e = 0; e < r.length; e++) {
        let t = o[e];
        if (void 0 !== t && -1 !== t) {
          let i = s[t];
          let r = n[e];
          if (r && i?.imageSetForInsertion) {
            if (sO(r)) r.insertImageInFillPaint(i.imageSetForInsertion); else if (sD(r)) {
              let e = d.createNode("RECTANGLE");
              e.name = r.name || r.type;
              e.size = {
                x: i.width,
                y: i.height
              };
              e.x = r.x;
              e.y = r.y;
              e.setImageInFillPaint(i.imageSetForInsertion);
              r.parentNode?.appendChild(e);
              r.removeSelfAndChildren();
            }
          }
        }
      }
    });
    i = n.filter(sO);
    _$$l2.ai("Removing placeholder image fills", () => {
      i.forEach(e => {
        let t = e.fills;
        e.fills = t.filter(e => !("IMAGE" === e.type && e.image && e.image.hash && _$$nj2(e.image.hash) === sI));
      });
    });
    return e;
  }({
    node,
    graphics: p
  });
  _$$l2.user("place node", () => {
    t.parentNode?.appendChild(h);
    h.x = t.x;
    h.y = t.y;
    e.setSelectionToSingleNode(h.guid);
    glU.showSelectionOverlayImmediately();
  });
  return h;
}
let sV = _$$z.object({
  cls: _$$z.string(),
  x: _$$z.number(),
  y: _$$z.number(),
  width: _$$z.number(),
  height: _$$z.number(),
  mask: _$$z.$$instanceof(Uint8Array)
}).passthrough();
let sW = _$$z.object({
  width: _$$z.number(),
  height: _$$z.number(),
  objects: _$$z.array(sV)
}).passthrough();
async function sY(e, t = 1) {
  let i = (await Ay.design.imageToShareJsx({
    input: {
      image: e
    },
    numDesigns: t
  })).jsx;
  if (!i?.length) throw Error("No valid JSX received from server");
  return i.flat();
}
async function sJ(e, t, i) {
  let r = (await Promise.all(t.map(async e => {
    try {
      let {
        node
      } = await LZ(e, {
        originalSize: {
          x: i.size.x,
          y: i.size.y
        },
        normalizePxToRange01: !0,
        excludeImageData: !0,
        excludeVectorData: !0
      });
      if (!node) return null;
      _$$l2.user("place node", () => {
        node.x = i.x;
        node.y = i.y;
      });
      let r = sG(node);
      if (!r) return null;
      let n = r.base64;
      _$$l2.user("hide and remove node", () => {
        node.visible = !1;
        node.removeSelfAndChildren();
      });
      return {
        jsx: e,
        base64: n
      };
    } catch (e) {
      return null;
    }
  }))).filter(e => null !== e);
  if (0 === r.length) {
    console.warn("No valid JSX candidate thumbnails generated, defaulting to first candidate");
    return t[0];
  }
  let n = (await Ay.design.guiclip({
    image: e,
    candidates: r.map(e => e.base64)
  })).bestCandidateIndex;
  return null == n ? (console.warn("Cannot get best candidate index from server, defaulting to first valid candidate"), r[0].jsx) : r[n].jsx;
}
async function sq(e) {
  let t = await Ay.design.uiParser({
    png_b64: e
  });
  let i = {
    width: t.width,
    height: t.height,
    objects: t.objects.map(e => ({
      cls: e.cls,
      x: e.x,
      y: e.y,
      width: e.width,
      height: e.height,
      mask: new Uint8Array(atob(e.mask).split("").map(e => e.charCodeAt(0)))
    }))
  };
  let r = sW.safeParse(i);
  if (!r.success) throw Error("Unable to parse response from UI Parser");
  return r.data;
}
let sX = async ({
  abortController: e
}) => {
  let t;
  let i = getSingletonSceneGraph().getCurrentPage()?.directlySelectedNodes;
  if (!i || 1 !== i.length || void 0 === i[0]) throw Error("No image selected");
  let r = i[0];
  let n = r.size.x;
  let a = r.size.y;
  try {
    let {
      base64,
      mimeType,
      pixelData,
      width,
      height
    } = function (e) {
      let t = sG(e);
      if (!t) throw Error("Cannot process image");
      return t;
    }(r);
    let {
      node,
      location
    } = function (e, t, i) {
      return {
        node: e.parentNode,
        location: new Point(e.x + t + (t + i) / 2 * .15, e.y)
      };
    }(r, width, height);
    let p = getSingletonSceneGraph();
    let h = p.getCurrentPage();
    if (!h) throw Error("Cannot get current page from scene");
    t = await sH(p, node ?? h, location, n, a, base64, mimeType);
    let m = zM((e, t) => sY(e, t), e);
    let f = zM((e, t, i) => sJ(e, t, i), e);
    let g = zM(e => sq(e), e);
    let _ = await m(base64, 4);
    let x = await f(base64, _, t);
    let y = await g(base64);
    let b = zM(sz, e, e => {
      e && _$$l2.user("clean up reconciled node", () => {
        e.removeSelfAndChildren();
      });
    });
    await b(h, t, x, pixelData, width, height, y, e);
  } catch (e) {
    if (e instanceof _$$lc2) return;
    throw e;
  } finally {
    _$$l2.user("remove placeholder node", () => {
      t && t.removeSelfAndChildren();
    });
  }
};
let sZ = async ({
  abortController: e,
  params: t
}) => {
  let i;
  let r = (t.width + t.height) / 2;
  let n = new Point(t.node.x + t.width + .15 * r, t.node.y);
  let a = getSingletonSceneGraph();
  let s = a.getCurrentPage();
  if (!s) throw Error("Cannot get current page from scene");
  let o = sG(t.node);
  if (!o) throw Error("Failed to get image data from node");
  let {
    base64,
    mimeType,
    pixelData,
    width,
    height
  } = o;
  try {
    i = await sH(a, t.node.parentNode ?? s, n, width, height, base64, mimeType);
    let r = await _$$oy(t.node, {
      normalizePxToRange01: !0,
      excludeImageData: !0,
      excludeVectorData: !0
    });
    let o = await bbV?.generateNodeSegmentationFromWeb(t.node.guid);
    if (!o) throw Error("UiParserHelpers is undefined, failed to create segmentation for node");
    let m = {
      width: o.width,
      height: o.height,
      objects: o.objects.map(e => ({
        cls: e.cls,
        x: e.x,
        y: e.y,
        width: e.width,
        height: e.height,
        mask: e.mask
      }))
    };
    await sz(s, i, r.jsxStr, pixelData, width, height, m, e);
  } catch (e) {
    throw e;
  } finally {
    _$$l2.user("remove placeholder node", () => {
      i && i.removeSelfAndChildren();
    });
  }
};
function s0({
  fileInputRef: e,
  onFileInputChange: t
}) {
  return jsx("input", {
    type: "file",
    ref: e,
    accept: xp.join(","),
    onChange: t,
    multiple: !1,
    className: _$$s3.hidden.$
  });
}
function s1({
  action: e,
  instruction: t,
  onPerform: i,
  disableImageUpload: r = !1
}) {
  let {
    close
  } = cq();
  let o = RL(e, sX);
  let {
    state,
    stop,
    aiTrackingContext
  } = o;
  let p = useRef(null);
  let h = () => {
    B3(e);
  };
  switch (state) {
    case qy.INITIAL:
      return jsxs(Fragment, {
        children: [!r && jsx(s0, {
          fileInputRef: p,
          onFileInputChange: e => {
            let t = e.target?.files;
            if (t && t[0]) {
              let e = t[0];
              let i = new FileReader();
              i.onloadend = () => {
                if (i.result) {
                  let t = i.result.toString();
                  let r = new Image();
                  r.onload = async () => {
                    let i = r.width;
                    let n = r.height;
                    let a = getSingletonSceneGraph();
                    let s = a.getCurrentPage();
                    if (!s) return;
                    let o = Y5.getViewportInfo();
                    let l = new Point(o.offsetX - i / 2, o.offsetY - n / 2);
                    let {
                      base64,
                      mimeType
                    } = sU(t);
                    let p = await sK(a, s, l, i, n, base64, mimeType, e.name);
                    s.setSelectionToSingleNode(p.guid);
                    glU.showSelectionOverlayImmediately();
                  };
                  r.src = t;
                }
              };
              i.readAsDataURL(e);
            }
          }
        }), jsx(_$$A2, {
          action: e,
          actionLabel: renderI18nText("image_to_design.action"),
          actionIcon: jsx(_$$f3, {}),
          instructionAction: r ? void 0 : {
            type: "custom",
            label: renderI18nText("fragment_search.visual_search_image_upload_button"),
            iconPrefix: jsx(_$$A1, {}),
            onPerform: () => p.current?.click()
          },
          aiTrackingContext: void 0,
          onPerform: i,
          children: t
        })]
      });
    case qy.RUNNING:
      return jsx(_$$F3, {
        onStop: () => {
          stop();
          h();
          close();
        },
        aiTrackingContext,
        children: renderI18nText("ai.working")
      });
    case qy.DONE:
      return jsx(Oq, {
        iterateOptions: [],
        aiTrackingContext: {
          ...aiTrackingContext,
          iteration_view_type: $J.SUCCESS_WITH_ITERATION
        },
        showFeedbackInline: !0
      });
    case qy.ERROR:
      return jsx(_$$E4, {
        error: o.error,
        buttons: [{
          type: _$$f5.OK,
          callback: h
        }],
        aiTrackingContext
      });
    case qy.CANCELLED:
      return null;
  }
}
let s9 = createLocalStorageAtom("make_video_prompt_history", []);
let oe = lazy(() => _require4);
function ot({
  action: e,
  aiActionType: t,
  actionLabel: i,
  instructionLabel: r,
  icon: a,
  searchSynonyms: s
}) {
  return {
    action: e,
    featureFlags: ["figjam_quick_actions_v2"],
    tags: [_$$$.AI],
    flags: ["edit", "whiteboard"],
    iconType: a,
    searchSynonyms: s,
    quickAction: {
      beforeModuleOpen: () => {
        Yh(debugState.getState().mirror.appModel, e) && J7(t);
      },
      alwaysEnabled: !0,
      module: {
        name: Sn.FIGJAM_AI_CONTEXTUAL_FEATURES,
        module: jsx(rC, {
          action: e,
          actionType: t,
          actionIcon: a,
          actionLabel: i,
          instructionLabel: r
        })
      }
    }
  };
}
let oi = [{
  callback: _$$lQ,
  action: _$$JT.TRANSLATE_TEXT,
  flags: ["edit", "design", "slides", "sites", "cooper", "whiteboard"],
  featureFlags: ["qa_text_features"],
  tags: [_$$$.AI],
  quickAction: {
    beforeModuleOpen: () => {
      B3(_$$JT.TRANSLATE_TEXT);
    },
    alwaysEnabled: !0,
    module: {
      name: Sn.TRANSLATE,
      module: jsx(_$$K2, {})
    }
  },
  iconType: jsx(_$$R4, {}),
  searchSynonyms: ["change language"]
}, {
  callback: _$$lQ,
  action: _$$JT.REWRITE_TEXT,
  flags: ["edit", "design", "slides", "sites", "cooper", "whiteboard"],
  featureFlags: ["qa_text_features"],
  quickAction: {
    beforeModuleOpen: () => {
      B3(_$$JT.REWRITE_TEXT);
    },
    module: {
      name: Sn.REWRITE,
      module: jsx(_$$w, {})
    },
    alwaysEnabled: !0
  },
  iconType: jsx(_$$T2, {}),
  tags: [_$$$.AI],
  searchSynonyms: ["revise this", "modify this", "adjust tone"]
}, {
  callback: () => {
    B3(_$$JT.SLIDES_GENERATE_SPEAKER_NOTES);
    _$$Ag(_$$JT.SLIDES_GENERATE_SPEAKER_NOTES, _$$O3, {
      source: _$$f4.QUICK_ACTIONS
    });
  },
  action: _$$JT.SLIDES_GENERATE_SPEAKER_NOTES,
  flags: ["slides"],
  iconType: jsx(_$$B4, {}),
  tags: [_$$$.AI],
  searchSynonyms: ["presenter notes", "speaker notes", "notes", "draft presenter notes", "draft speaker notes", "draft notes"]
}, {
  callback: () => mD(debugState.dispatch, {
    source: "quick_actions",
    toggle: !0
  }),
  action: _$$JT.SLIDES_REWRITE_TEXT,
  flags: ["slides"],
  iconType: jsx(_$$s5, {}),
  tags: [_$$$.AI],
  searchSynonyms: ["adjust tone", "tone dial", "professional", "casual", "concise", "expanded"]
}, {
  callback: () => mD(debugState.dispatch, {
    source: "quick_actions",
    toggle: !0
  }),
  action: _$$JT.SLIDES_REWRITE_TEXT,
  flags: ["edit", "design"],
  featureFlags: ["aip_tone_dial_fd"],
  iconType: jsx(_$$s5, {}),
  tags: [_$$$.AI],
  searchSynonyms: ["adjust tone", "tone dial", "professional", "casual", "concise", "expanded"]
}, {
  callback: _$$lQ,
  action: _$$JT.SHORTEN_TEXT,
  flags: ["edit", "design", "slides", "sites", "cooper", "whiteboard"],
  featureFlags: ["qa_text_features"],
  quickAction: {
    module: {
      name: Sn.SHORTEN,
      module: jsx(_$$J3, {})
    },
    alwaysEnabled: !0,
    beforeModuleOpen: () => {
      B3(_$$JT.SHORTEN_TEXT);
      Yh(debugState.getState().mirror.appModel, _$$JT.SHORTEN_TEXT) && _$$Ag(_$$JT.SHORTEN_TEXT, _$$$4, {
        featureType: _$$JT.SHORTEN_TEXT,
        source: "quick-actions"
      });
    }
  },
  iconType: jsx(_$$g4, {}),
  tags: [_$$$.AI],
  searchSynonyms: ["make concise", "condense", "reduce", "abbreviate", "shorter"]
}, {
  callback: _$$lQ,
  action: _$$JT.FIRST_DRAFT,
  flags: ["edit", "design"],
  featureFlags: [],
  quickAction: {
    module: {
      module: jsx(sT, {}),
      name: Sn.FIRST_DRAFT
    },
    beforeModuleOpen: () => {
      B3(_$$JT.FIRST_DRAFT);
    }
  },
  iconType: jsx(i$, {}),
  tags: [_$$$.AI],
  searchSynonyms: ["first draft", "make designs", "generate design", "create design", "let's design"]
}, {
  callback: _$$lQ,
  action: _$$JT.MAKE_EDITS,
  flags: ["edit", "design"],
  featureFlags: ["make_edits"],
  quickAction: {
    module: {
      module: jsx(bt, {}),
      name: Sn.MAKE_EDITS
    },
    beforeModuleOpen: () => {
      B3(_$$JT.MAKE_EDITS);
    }
  },
  iconType: jsx(i$, {}),
  tags: [_$$$.AI],
  searchSynonyms: ["make edit", "edit design", "prompt to edit"]
}, {
  callback: _$$lQ,
  action: _$$JT.MAKE_EDITS_DEBUG,
  flags: ["edit", "design", "whiteboard", "slides"],
  featureFlags: ["make_edits", "make_edits_debug"],
  quickAction: {
    module: {
      module: jsx(Aw, {}),
      name: Sn.MAKE_EDITS_DEBUG
    },
    beforeModuleOpen: () => {
      B3(_$$JT.MAKE_EDITS);
    }
  },
  iconType: jsx(i$, {}),
  searchSynonyms: ["debug make edits"],
  tags: [_$$$.AI]
}, {
  callback: _$$lQ,
  action: _$$JT.MAKE_EDITS_DEBUG_REVIEW,
  flags: ["edit", "design", "whiteboard", "slides"],
  featureFlags: ["make_edits", "make_edits_debug"],
  quickAction: {
    module: {
      module: jsx(Suspense, {
        fallback: null,
        children: jsx(oe, {})
      }),
      name: Sn.MAKE_EDITS_DEBUG_REVIEW
    },
    beforeModuleOpen: () => {
      B3(_$$JT.MAKE_EDITS);
    }
  },
  iconType: jsx(i$, {}),
  searchSynonyms: ["debug make edits review"],
  tags: [_$$$.AI]
}, {
  callback: _$$lQ,
  action: _$$JT.MAKE_EDITS,
  flags: ["whiteboard"],
  featureFlags: ["make_edits_figjam"],
  quickAction: {
    module: {
      module: jsx(bt, {}),
      name: Sn.MAKE_EDITS
    },
    beforeModuleOpen: () => {
      B3(_$$JT.MAKE_EDITS);
    }
  },
  iconType: jsx(i$, {}),
  tags: [_$$$.AI],
  searchSynonyms: ["make edit", "edit design", "prompt to edit"]
}, {
  callback: _$$lQ,
  action: _$$JT.MAKE_EDITS,
  flags: ["slides"],
  featureFlags: ["make_edits_slides"],
  quickAction: {
    module: {
      module: jsx(bt, {}),
      name: Sn.MAKE_EDITS
    },
    beforeModuleOpen: () => {
      B3(_$$JT.MAKE_EDITS);
    }
  },
  iconType: jsx(i$, {}),
  tags: [_$$$.AI],
  searchSynonyms: ["make edit", "edit design", "prompt to edit"]
}, {
  callback: _$$lQ,
  action: _$$JT.FIRST_DRAFT_FINE_TUNE,
  flags: ["edit", "design"],
  featureFlags: ["first_draft_fine_tune"],
  quickAction: {
    module: {
      module: jsx(function () {
        let e = lazy(() => _require2);
        let {
          aiTrackingContext
        } = _$$wj(_$$JT.FIRST_DRAFT_FINE_TUNE);
        let r = aiTrackingContext.clientLifecycleId;
        return jsx(_$$tH, {
          boundaryKey: "FirstDraftFineTune",
          fallback: H4.NONE_I_KNOW_WHAT_IM_DOING,
          sentryTags: {
            clientLifecycleId: r,
            area: _$$e.AI_GENERATION
          },
          children: jsx(_$$T4.Provider, {
            value: {
              recordingKey: "firstDraftFineTuneView"
            },
            children: jsx(Suspense, {
              fallback: jsx("div", {
                children: getI18nString("first_draft.make_edits.loading")
              }),
              children: jsx(e, {})
            })
          })
        });
      }, {}),
      name: Sn.FIRST_DRAFT_FINE_TUNE
    },
    beforeModuleOpen: () => {
      B3(_$$JT.FIRST_DRAFT_FINE_TUNE);
    },
    alwaysEnabled: !0
  },
  iconType: jsx(i$, {}),
  tags: [_$$$.AI],
  searchSynonyms: ["fine tune", "first draft fine tune"]
}, {
  callback: _$$lQ,
  action: _$$JT.FIRST_DRAFT_MAKE_CHANGES,
  flags: ["edit", "design"],
  featureFlags: ["first_draft_native", "first_draft_make_changes", "first_draft_make_changes_reopen"],
  notFeatureFlags: ["first_draft_use_gemini"],
  quickAction: {
    module: {
      module: jsx(function () {
        let e = nl();
        let [t] = useState(e);
        return jsx(am, {
          initialRootGuid: t || null
        });
      }, {}),
      name: Sn.FIRST_DRAFT_MAKE_CHANGES
    }
  },
  iconType: jsx(i$, {}),
  tags: [_$$$.AI],
  searchSynonyms: ["make changes", "adjust design", "modify design", "edit design"]
}, {
  callback: _$$lQ,
  action: _$$JT.FIRST_DRAFT_MAKE_KIT,
  flags: ["edit", "design"],
  featureFlags: ["first_draft_native", "first_draft_make_kit"],
  quickAction: {
    module: {
      module: jsx(function () {
        let {
          pop
        } = cq();
        return jsx(_$$tH, {
          boundaryKey: "FirstDraftMakeKitView",
          fallback: H4.NONE_I_KNOW_WHAT_IM_DOING,
          sentryTags: {
            area: _$$e.AI_GENERATION
          },
          children: jsx(aP, {
            recordingKey: "firstDraftMakeKitView",
            onBack: pop
          })
        });
      }, {}),
      name: Sn.FIRST_DRAFT_MAKE_KIT
    },
    beforeModuleOpen: () => {
      B3(_$$JT.FIRST_DRAFT_MAKE_KIT);
      B3(_$$JT.FIRST_DRAFT_COMPONENTIZE);
      B3(_$$JT.FIRST_DRAFT_SUGGEST_PROPS);
    }
  },
  iconType: jsx(i$, {}),
  tags: [_$$$.AI],
  searchSynonyms: ["make kit", "create kit", "generate kit", "design kit"]
}, {
  callback: _$$lQ,
  action: _$$JT.FIRST_DRAFT_MAKE_KIT_DEBUG,
  flags: ["edit", "design"],
  featureFlags: ["first_draft_native", "first_draft_make_kit", "first_draft_debug"],
  quickAction: {
    module: {
      module: jsx(function () {
        let e = useDispatch();
        let {
          close
        } = cq();
        let {
          inputs,
          renderInput
        } = function (e, t, i) {
          let r = useMemo(() => function (e) {
            let t = e.reduce((e, t) => (e[t] = _$$z.object({
              override: _$$z.string(),
              enabled: _$$z.boolean()
            }), e), {});
            return _$$z.object(t);
          }(e), [e]);
          let {
            inputs: _inputs,
            setInputs,
            handleInputChange,
            handleCheckboxChange
          } = function (e, t, i, r) {
            let [n, s] = useState(() => {
              let n = localStorage.getItem(t);
              if (n) try {
                let e = JSON.parse(n);
                if (i) return i.parse(e);
                return e;
              } catch (e) {
                console.error(`Failed to parse saved state for ${t}:`, e);
              }
              return e.reduce((e, t) => (e[t] = {
                override: "",
                enabled: r?.enabled ?? !1
              }, e), {});
            });
            useEffect(() => {
              localStorage.setItem(t, JSON.stringify(n));
            }, [n, t]);
            let o = useCallback(e => t => {
              s(i => ({
                ...i,
                [e]: {
                  ...i[e],
                  override: t.target.value
                }
              }));
            }, []);
            let l = useCallback(e => t => {
              s(i => ({
                ...i,
                [e]: {
                  ...i[e],
                  enabled: t.target.checked
                }
              }));
            }, []);
            return {
              inputs: n,
              setInputs: s,
              handleInputChange: o,
              handleCheckboxChange: l
            };
          }(e, t, r, void 0);
          let c = useCallback(({
            field: e,
            label: t,
            rows: i = 3,
            placeholder: r = "Enter override"
          }) => function (e, t, i, r, a, s = 3, o = "Enter override") {
            let l = e[t] || {
              override: "",
              enabled: !1
            };
            return jsxs(_$$B, {
              fullWidth: !0,
              justify: "space-between",
              children: [jsx("input", {
                type: "checkbox",
                checked: l.enabled,
                onChange: r(t)
              }), jsx("div", {
                style: {
                  opacity: l.enabled ? 1 : .5,
                  width: "100%"
                },
                children: jsxs(_$$Y, {
                  direction: "vertical",
                  spacing: 8,
                  children: [jsx(_$$E, {
                    children: i
                  }), jsx("textarea", {
                    className: _$$s3.resizeNone.wFull.colorBgSecondary.px12.py8.bRadius5.$,
                    rows: s,
                    value: l.override,
                    placeholder: o,
                    onChange: a(t),
                    disabled: !l.enabled
                  })]
                })
              })]
            });
          }(_inputs, e, t, handleCheckboxChange, handleInputChange, i, r), [_inputs, handleInputChange, handleCheckboxChange]);
          return {
            inputs: _inputs,
            setInputs,
            handleInputChange,
            handleCheckboxChange,
            renderInput: c
          };
        }(aq, "firstDraftMakeKitDebugState");
        let o = useMemo(() => inputs.componentizeResultMapping.enabled ? async () => await function (e) {
          if (!e || "" === e.trim()) return {};
          try {
            return JSON.parse(e);
          } catch (e) {
            console.warn("Failed to parse JSON:", e);
            return {};
          }
        }(inputs.componentizeResultMapping.override) : inputs.componentizePrompt.enabled ? async e => await aH(inputs.componentizePrompt.override, e) : void 0, [inputs.componentizePrompt.override, inputs.componentizeResultMapping.override, inputs.componentizeResultMapping.enabled, inputs.componentizePrompt.enabled]);
        let l = useMemo(() => {
          if (inputs.suggestProps.enabled) return async e => {
            try {
              return await az(inputs.suggestProps.override, e);
            } catch (e) {
              console.error("Failed to get suggested props:", e);
              return [];
            }
          };
        }, [inputs.suggestProps.override, inputs.suggestProps.enabled]);
        let [d, c] = useState(!1);
        return d ? jsx(_$$x4.Provider, {
          value: {
            getSuggestedComponents: o,
            getSuggestedProps: l
          },
          children: jsx(aK, {})
        }) : jsx("div", {
          children: jsxs(_$$Y, {
            direction: "vertical",
            spacing: "auto",
            padding: 8,
            children: [jsx(_$$E, {
              fontSize: 14,
              fontWeight: "medium",
              children: "Make First Draft Kit (Debug)"
            }), jsxs(_$$Y, {
              direction: "vertical",
              padding: 8,
              width: "fill-parent",
              spacing: 16,
              children: [renderInput({
                field: "componentizePrompt",
                label: "Componentize Prompt Override",
                rows: 3,
                placeholder: "Enter override, must contain {{jsx}} for substitution"
              }), renderInput({
                field: "suggestProps",
                label: "Suggest Props Prompt Override",
                rows: 3,
                placeholder: "Enter override, must contain {{jsx}} for substitution"
              }), renderInput({
                field: "componentizeResultMapping",
                label: "Componentize Result Mapping Override",
                rows: 3,
                placeholder: "Enter override, must contain {{jsx}} for substitution"
              })]
            }), jsxs(_$$B, {
              gap: 8,
              children: [jsx($n, {
                variant: "secondary",
                onClick: async () => {
                  await aJ({
                    componentizePromptOverride: inputs.componentizePrompt.enabled ? inputs.componentizePrompt.override : void 0,
                    dispatch: e,
                    close
                  });
                },
                children: "Eval componentize on page"
              }), jsx($n, {
                variant: "secondary",
                onClick: () => c(!0),
                children: "Run on current selection"
              }), jsx($n, {
                variant: "secondary",
                onClick: () => aY({
                  componentizePromptOverride: inputs.componentizePrompt.enabled ? inputs.componentizePrompt.override : void 0,
                  dispatch: e
                }),
                children: "Generate test case from selected"
              })]
            })]
          })
        });
      }, {}),
      name: Sn.FIRST_DRAFT_MAKE_KIT_DEBUG
    },
    beforeModuleOpen: () => {
      B3(_$$JT.FIRST_DRAFT_MAKE_KIT);
      B3(_$$JT.FIRST_DRAFT_COMPONENTIZE);
      B3(_$$JT.FIRST_DRAFT_SUGGEST_PROPS);
    }
  },
  iconType: jsx(i$, {}),
  searchSynonyms: ["debug kit", "debug make kit"],
  tags: [_$$$.AI]
}, {
  callback: _$$lQ,
  action: _$$JT.FIRST_DRAFT_LINTING,
  flags: ["edit", "design"],
  featureFlags: ["first_draft_native", "first_draft_publish_ux"],
  quickAction: {
    module: {
      module: jsx(S6, {}),
      name: Sn.FIRST_DRAFT_LINT
    }
  },
  tags: [_$$$.AI]
}, {
  callback: _$$lQ,
  action: _$$JT.FIRST_DRAFT_DEBUG,
  flags: ["edit", "design"],
  featureFlags: ["first_draft_native", "first_draft_debug"],
  quickAction: {
    module: {
      module: jsx(function () {
        let e = lazy(() => _require3);
        return jsx(_$$tH, {
          boundaryKey: "MakeEdits",
          fallback: H4.NONE_I_KNOW_WHAT_IM_DOING,
          sentryTags: {
            area: _$$e.AI_GENERATION
          },
          children: jsx(_$$T4.Provider, {
            value: {
              recordingKey: "firstDraftDebugView"
            },
            children: jsx(Suspense, {
              fallback: jsx("div", {
                children: "Loading..."
              }),
              children: jsx(e, {})
            })
          })
        });
      }, {}),
      name: Sn.FIRST_DRAFT_DEBUG
    }
  },
  tags: [_$$$.AI]
}, {
  name: _$$JT.FIND_INSPIRATION,
  action: _$$JT.FIND_INSPIRATION,
  displayNode: getFeatureFlags().fragment_search_tweaks ? renderI18nText("fullscreen_actions.quick_actions.find-inspiration-verbose") : renderI18nText("fullscreen_actions.find-inspiration"),
  displayForQuickCommand: "find-inspiration-quick-command",
  args: {},
  tags: [_$$$.AI],
  flags: ["design", "slides", "cooper"],
  featureFlags: getFeatureFlags().hub_file_fragments ? [] : ["asset_suggestions"],
  callback: _$$lQ,
  quickAction: {
    module: {
      module: getFeatureFlags().hub_file_fragments ? jsx(z6, {
        isVisualSearch: !0
      }) : jsx(WS, {}),
      name: Sn.VISUAL_SEARCH
    },
    beforeModuleOpen: () => jp(G4.ACTIONS_LIST)
  },
  iconType: jsx(_$$T, {}),
  searchSynonyms: ["visual search", "image search", "selection search", "visual lookup", "find matching", "search for similar", "find similar designs", "find more like"]
}, {
  action: _$$JT.REMOVE_BACKGROUND,
  featureFlags: [],
  tags: [_$$$.AI],
  flags: ["edit", "design", "slides", "cooper", "sites", "whiteboard"],
  iconType: jsx(_$$$2, {}),
  quickAction: {
    module: {
      module: jsx(_$$w4, {
        source: "quick-actions"
      }),
      name: Sn.BACKGROUND_REMOVE_TOAST
    },
    alwaysEnabled: !0,
    beforeModuleOpen: () => {
      if (B3(_$$JT.REMOVE_BACKGROUND), Yh(debugState.getState().mirror.appModel, _$$JT.REMOVE_BACKGROUND)) {
        let e = ruz?.getNodeImagePairsForEdit() ?? [];
        _$$Ag(_$$JT.REMOVE_BACKGROUND, _$$J2, {
          source: "quick-actions",
          targets: e
        }, {
          isBatch: e.length > 1
        });
      }
    }
  },
  callback: _$$lQ,
  searchSynonyms: ["clean up image", "clean up picture", "make transparent", "delete background", "erase background", "eliminate background", "isolate subject"]
}, {
  action: _$$JT.UPSCALE_IMAGE,
  featureFlags: [],
  tags: [_$$$.AI],
  flags: ["edit", "design", "slides", "cooper", "sites", "whiteboard"],
  iconType: jsx(_$$X, {}),
  quickAction: {
    module: {
      module: jsx(_$$q4, {
        source: "quick-actions"
      }),
      name: Sn.UPSCALE_IMAGE_TOAST
    },
    alwaysEnabled: !0,
    beforeModuleOpen: () => {
      if (B3(_$$JT.UPSCALE_IMAGE), Yh(debugState.getState().mirror.appModel, _$$JT.UPSCALE_IMAGE)) {
        let e = ruz?.getNodeImagePairsForEdit() ?? [];
        _$$Ag(_$$JT.UPSCALE_IMAGE, _$$r3, {
          source: "quick-actions",
          targets: e
        }, {
          isBatch: e.length > 1
        });
      }
    }
  },
  callback: _$$lQ,
  searchSynonyms: ["boost resolution", "sharpen image", "sharpen picture", "upscale image", "scale up", "enlarge image", "refine image", "improve image", "unblur", "reduce blur", "increase size", "increase quality", "enhance clarity", "crisp"]
}, {
  callback: _$$lQ,
  action: _$$JT.AUTO_RENAME_LAYERS,
  featureFlags: ["eai_auto_rename_layers"],
  tags: [_$$$.AI],
  flags: ["edit", "design"],
  iconType: jsx(_$$_3, {}),
  quickAction: {
    module: {
      module: jsx(_$$A10, {
        source: uQ6.QUICK_ACTIONS
      }),
      name: Sn.RENAME_LAYERS_TOAST
    },
    alwaysEnabled: !0,
    beforeModuleOpen: () => {
      B3(_$$JT.AUTO_RENAME_LAYERS);
      Yh(debugState.getState().mirror.appModel, _$$JT.AUTO_RENAME_LAYERS) && _$$Ag(_$$JT.AUTO_RENAME_LAYERS, _$$Ay2, {
        source: uQ6.QUICK_ACTIONS,
        overwriteNames: !1
      });
    }
  },
  searchSynonyms: ["rename all layers", "name layers"]
}, {
  callback: _$$lQ,
  action: _$$JT.GENERATE_IMAGE,
  featureFlags: [],
  tags: [_$$$.AI],
  flags: ["edit", "design", "slides", "cooper", "sites", "whiteboard"],
  iconType: jsx(_$$T3, {}),
  quickAction: {
    module: {
      module: jsx(_$$Ay4, {}),
      name: Sn.GENERATE_IMAGE
    },
    beforeModuleOpen: () => {
      B3(_$$JT.GENERATE_IMAGE);
    }
  },
  searchSynonyms: ["generate image", "make a picture", "generate graphic", "generate picture", "generate illustration", "create image"]
}, {
  callback: _$$lQ,
  action: _$$JT.EDIT_IMAGE,
  featureFlags: [],
  tags: [_$$$.AI],
  flags: ["edit", "design", "slides", "cooper", "sites", "whiteboard"],
  iconType: jsx(_$$T2, {}),
  quickAction: {
    module: {
      module: jsx(Tu, {}),
      name: Sn.EDIT_IMAGE
    },
    beforeModuleOpen: () => {
      B3(_$$JT.EDIT_IMAGE);
    },
    alwaysEnabled: !0
  },
  searchSynonyms: ["edit image", "edit picture", "edit graphic", "edit illustration", "modify image", "change image", "style image"]
}, {
  callback: _$$lQ,
  action: _$$JT.MAKE_VIDEO,
  featureFlags: ["aip_mw_video"],
  tags: [_$$$.AI],
  flags: ["edit", "design", "slides", "cooper", "sites", "whiteboard"],
  iconType: jsx(_$$T3, {}),
  quickAction: {
    module: {
      module: jsx(function () {
        let e = _$$to2();
        let {
          close
        } = cq();
        let [i, r] = useState("");
        let {
          promptHistory,
          addPromptToHistory
        } = _$$a3(s9, e => e);
        let l = RL(_$$JT.MAKE_VIDEO, wx);
        let {
          start,
          stop,
          state,
          aiTrackingContext
        } = l;
        let [h, m] = useState([]);
        let f = useRef(null);
        let g = useCallback(e => {
          m(t => t.length >= 1 ? t : [...t, e]);
        }, []);
        let _ = useCallback(async () => {
          addPromptToHistory(i);
          let e = await DI(h);
          await start({
            prompt: i,
            imageUrls: e
          });
        }, [addPromptToHistory, i, h, start]);
        switch (useEffect(() => () => {
          stop();
          B3(_$$JT.MAKE_VIDEO);
        }, [stop]), state) {
          case qy.INITIAL:
            return jsx(_$$A3, {
              action: _$$JT.MAKE_VIDEO,
              aiTrackingContext,
              ariaLabel: getI18nString("fullscreen_actions.make_video"),
              extraFooter: jsx(Ti, {
                fileInputRef: f,
                disabled: h.length >= 1,
                tooltip: h.length >= 1 ? getI18nString("video_ai.make_video.initial_frame_already_set") : getI18nString("video_ai.make_video.set_initial_frame"),
                onFileUpload: g,
                multiple: !1
              }),
              featureNameForInstrumentation: "make_video",
              maxLength: 1024,
              minLength: 3,
              onBack: e ? close : void 0,
              onChangePrompt: r,
              onRun: _,
              prompt: i,
              promptHistory,
              submitLabel: renderI18nText("ai.make_it"),
              useClose: e
            });
          case qy.RUNNING:
            return jsx(_$$F3, {
              onCancel: close,
              aiTrackingContext,
              children: renderI18nText("video_ai.make_video.processing")
            });
          case qy.DONE:
            let x = {
              ...aiTrackingContext,
              iteration_view_type: $J.SUCCESS_WITH_ITERATION
            };
            return jsx(Oq, {
              iterateOptions: [],
              aiTrackingContext: x,
              completionString: getI18nString("video_ai.make_video.initial_completion"),
              showFeedback: !1
            });
          case qy.ERROR:
            return jsx(_$$E4, {
              error: l.error,
              buttons: [{
                type: _$$f5.GO_BACK,
                callback: () => B3(_$$JT.MAKE_VIDEO)
              }],
              aiTrackingContext
            });
          case qy.CANCELLED:
            return null;
        }
      }, {}),
      name: Sn.MAKE_VIDEO
    },
    beforeModuleOpen: () => {
      B3(_$$JT.MAKE_VIDEO);
    }
  },
  searchSynonyms: ["make video", "generate video", "create video", "make animation", "make film", "make clip"]
}, {
  action: _$$JT.MAGIC_LINK,
  flags: ["edit", "design"],
  featureFlags: ["prototype_ai_magic_link"],
  tags: [_$$$.AI],
  quickAction: {
    module: {
      module: jsx(_$$p3, {}),
      name: Sn.MAGIC_LINK
    },
    alwaysEnabled: !0,
    beforeModuleOpen: () => {
      debugState.dispatch(Zh({
        name: "prototype.ai_magic_link_entry_clicked",
        params: {
          source: "quick_actions"
        }
      }));
      B3(_$$JT.MAGIC_LINK);
      Yh(debugState.getState().mirror.appModel, _$$JT.MAGIC_LINK) && _$$Ag(_$$JT.MAGIC_LINK, _$$e4, {});
    }
  },
  iconType: jsx(_$$B5, {}),
  searchSynonyms: ["magic link", "add prototype links", "add prototype connections", "connect prototype", "add interactions", "make prototype"]
}, {
  action: _$$JT.CONTENT_FILL,
  featureFlags: [],
  tags: [_$$$.AI],
  flags: ["edit", "design", "sites"],
  iconType: jsx(_$$c2, {}),
  quickAction: {
    module: {
      module: jsx(_$$F2, {}),
      name: Sn.REGENERATE_TEXT_TOAST
    },
    alwaysEnabled: !0,
    beforeModuleOpen: () => {
      B3(_$$JT.CONTENT_FILL);
    }
  },
  searchSynonyms: ["fill content", "content fill", "lorem ipsum", "rewrite placeholder text", "replace duplicates", "rewrite duplicates"]
}, {
  action: _$$JT.ASSISTANT_CHAT,
  featureFlags: ["prt_legacy_v3"],
  flags: ["design", "slides", "cooper"],
  tags: [_$$$.AI],
  iconType: jsx(_$$V2, {}),
  quickAction: {
    module: {
      module: jsx(t5, {}),
      name: Sn.ASSISTANT_CHAT
    },
    beforeModuleOpen: () => {
      atomStoreManager.set(ta, {
        status: tn.Idle,
        messages: []
      });
    }
  },
  searchSynonyms: ["chat"]
}, {
  action: _$$JT.IMAGE_TO_DESIGN,
  featureFlags: ["gen_llava_lamp"],
  flags: ["edit", "design"],
  tags: [_$$$.AI],
  iconType: jsx(_$$f3, {}),
  quickAction: {
    module: {
      module: jsx(function () {
        let {
          start
        } = RL(_$$JT.IMAGE_TO_DESIGN, sX);
        return jsx(s1, {
          action: _$$JT.IMAGE_TO_DESIGN,
          instruction: renderI18nText("image_to_design.instruction"),
          onPerform: () => {
            start({});
          }
        });
      }, {}),
      name: Sn.IMAGE_TO_DESIGN
    },
    alwaysEnabled: !0,
    beforeModuleOpen: () => {
      B3(_$$JT.IMAGE_TO_DESIGN);
      Yh(debugState.getState().mirror.appModel, _$$JT.IMAGE_TO_DESIGN) && _$$Ag(_$$JT.IMAGE_TO_DESIGN, sX, {});
    }
  },
  searchSynonyms: ["convert image to layers", "make image editable", "convert image to design", "generate design from image", "screenshot to design", "picture to design"]
}, {
  action: _$$JT.IMAGE_TO_DESIGN_ORACLE,
  featureFlags: ["gen_llava_lamp"],
  flags: ["edit", "design"],
  tags: [_$$$.AI],
  iconType: jsx(_$$V2, {}),
  quickAction: {
    module: {
      module: jsx(function () {
        let {
          start
        } = RL(_$$JT.IMAGE_TO_DESIGN_ORACLE, sZ);
        return jsx(s1, {
          action: _$$JT.IMAGE_TO_DESIGN_ORACLE,
          instruction: renderI18nText("image_to_design.oracle_instruction"),
          disableImageUpload: !0,
          onPerform: () => {
            let t = getSingletonSceneGraph().getCurrentPage()?.directlySelectedNodes;
            if (!t || 1 !== t.length || void 0 === t[0]) return;
            let i = t[0];
            start({
              node: i,
              width: i.size.x,
              height: i.size.y
            });
          }
        });
      }, {}),
      name: Sn.IMAGE_TO_DESIGN_ORACLE
    },
    alwaysEnabled: !0,
    beforeModuleOpen: () => {
      B3(_$$JT.IMAGE_TO_DESIGN_ORACLE);
    }
  }
}, {
  callback: () => {
    atomStoreManager.set(bJ);
  },
  action: _$$JT.WHITEBOARD_GENERATE_CONTENT,
  featureFlags: ["figjam_quick_actions_v2"],
  tags: [_$$$.AI],
  flags: ["edit", "whiteboard"],
  iconType: jsx(i8, {}),
  searchSynonyms: ["create content", "add content", "generate content", "create diagram", "add diagram", "generate diagram", "create templates and diagrams", "add templates and diagrams", "generate templates and diagrams"]
}, {
  action: _$$JT.MERMAID_TO_DIAGRAM,
  featureFlags: ["figjam_mermaid_to_diagram"],
  tags: [_$$$.AI],
  flags: ["edit", "whiteboard"],
  iconType: jsx(_$$r2, {}),
  quickAction: {
    module: {
      module: jsx(function () {
        let e = RL(_$$JT.MERMAID_TO_DIAGRAM, rk);
        let {
          start,
          state,
          aiTrackingContext
        } = e;
        let [s, o] = useState("");
        switch (state) {
          case qy.INITIAL:
            return jsx(_$$A3, {
              action: _$$JT.MERMAID_TO_DIAGRAM,
              aiTrackingContext,
              minLength: 3,
              prompt: s,
              onChangePrompt: o,
              onRun: () => {
                start({
                  mermaidText: s
                });
              },
              submitLabel: getI18nString("figjam_ai.ai_actions.make_diagram_button")
            });
          case qy.RUNNING:
            return jsx(_$$F3, {
              aiTrackingContext,
              children: getI18nString("figjam_ai.ai_actions.make_diagram_progress")
            });
          case qy.DONE:
            return jsx(Oq, {
              aiTrackingContext: {
                ...aiTrackingContext,
                iteration_view_type: $J.DEFAULT_SUCCESS
              },
              iterateOptions: []
            });
          case qy.ERROR:
            return jsx(_$$E4, {
              error: e.error,
              aiTrackingContext
            });
          case qy.CANCELLED:
            return null;
        }
      }, {}),
      name: Sn.MERMAID_TO_DIAGRAM
    },
    alwaysEnabled: !0,
    beforeModuleOpen: () => {
      B3(_$$JT.MERMAID_TO_DIAGRAM);
    }
  }
}, ot({
  action: _$$JT.SUMMARIZE_STICKIES,
  aiActionType: hG.SUMMARIZE_STICKIES,
  actionLabel: renderI18nText("fullscreen_actions.summarize-stickies"),
  instructionLabel: renderI18nText("figjam_ai.organize_stickies.make_selection_instruction"),
  icon: jsx(_$$O2, {})
}), ot({
  action: _$$JT.SORT_STICKIES_BY_TOPIC,
  aiActionType: hG.SORT_STICKIES_BY_TOPIC,
  actionLabel: renderI18nText("fullscreen_actions.sort-stickies-by-topic"),
  instructionLabel: renderI18nText("figjam_ai.organize_stickies.make_selection_instruction"),
  icon: jsx(_$$$3, {})
}), ot({
  action: _$$JT.SORT_STICKIES_BY_COLOR,
  aiActionType: hG.SORT_STICKIES_BY_COLOR,
  actionLabel: renderI18nText("fullscreen_actions.sort-stickies-by-color"),
  instructionLabel: renderI18nText("figjam_ai.organize_stickies.make_selection_instruction"),
  icon: jsx(_$$$3, {})
}), ot({
  action: _$$JT.SORT_STICKIES_BY_AUTHOR,
  aiActionType: hG.SORT_STICKIES_BY_AUTHOR,
  actionLabel: renderI18nText("fullscreen_actions.sort-stickies-by-author"),
  instructionLabel: renderI18nText("figjam_ai.organize_stickies.make_selection_instruction"),
  icon: jsx(_$$$3, {})
}), ot({
  action: _$$JT.SORT_STICKIES_BY_STAMP_COUNT,
  aiActionType: hG.SORT_STICKIES_BY_STAMP_COUNT,
  actionLabel: renderI18nText("fullscreen_actions.sort-stickies-by-stamp-count"),
  instructionLabel: renderI18nText("figjam_ai.organize_stickies.make_selection_instruction"),
  icon: jsx(_$$$3, {})
}), ot({
  action: _$$JT.SORT_STICKIES_BY_STAMP_TYPE,
  aiActionType: hG.SORT_STICKIES_BY_STAMP_TYPE,
  actionLabel: renderI18nText("fullscreen_actions.sort-stickies-by-stamp-type"),
  instructionLabel: renderI18nText("figjam_ai.organize_stickies.make_selection_instruction"),
  icon: jsx(_$$$3, {})
}), ot({
  action: _$$JT.MIND_MAP_GENERATE_IDEAS,
  aiActionType: hG.MIND_MAP_GENERATE_IDEAS,
  actionLabel: renderI18nText("fullscreen_actions.mind-map-generate-ideas"),
  instructionLabel: renderI18nText("figjam_ai.make_mindmap_ideas.make_selection_instruction"),
  icon: jsx(_$$r2, {}),
  searchSynonyms: ["generate new mind map ideas", "generate mind map ideas", "generate ideas"]
})];
function or() {
  let e = PE();
  let t = !q8();
  let i = _$$ow();
  let r = e || getFeatureFlags().figjam_ai_menu_items_all_access && i && t;
  let s = GM();
  let o = _$$V4();
  let l = Vr();
  let d = _$$eH();
  let c = _$$sZ();
  return useMemo(() => oi.reduce((e, t) => {
    for (let i of t.featureFlags || []) if (!getFeatureFlags()[i]) return e;
    if (t.action === _$$JT.FIND_INSPIRATION) {
      if (!d && !o) return e;
      let i = {
        ...t
      };
      getFeatureFlags().fragment_search_tweaks && l?.name && !l?.isSlide && (i.displayNode = renderI18nText("fullscreen_actions.quick_actions.find-inspiration-with-selection", {
        frameName: jsx(_$$E, {
          color: "secondary",
          children: l?.name
        })
      }));
      e.push(i);
      return e;
    }
    t.action === _$$JT.EDIT_IMAGE && dZ(c) || (t.action === _$$JT.GENERATE_IMAGE || t.action === _$$JT.EDIT_IMAGE || t.action === _$$JT.UPSCALE_IMAGE || t.action === _$$JT.REMOVE_BACKGROUND) && !s || r && e.push(t);
    return e;
  }, []), [r, s, o, l, d, c]);
}
function od(e) {
  let {
    submenuItem,
    path
  } = e;
  let {
    push,
    close
  } = cq();
  if (!submenuItem || !submenuItem.itemPath || submenuItem.submenu && 0 === submenuItem.submenu.length) return null;
  let s = TW(submenuItem);
  return jsx(_$$B6.Item, {
    primaryAction: {
      onAction: () => {
        if (submenuItem.submenu) {
          push({
            name: Sn.PLUGIN_SUBMENU_ENTRY,
            module: jsx(oc, {
              item: submenuItem,
              path: path.concat(s)
            })
          }, {
            shouldResetSearchQuery: !0
          });
          return;
        }
        let e = !submenuItem.itemParameterArgs;
        submenuItem.callback && (submenuItem.callback(), e && close());
      },
      shortcuts: [{
        key: Uz.ENTER
      }, {
        key: Uz.TAB
      }]
    },
    actionLabel: !1,
    children: jsxs("div", {
      className: _$$s3.flex.justifyBetween.wFull.$,
      children: [jsx("div", {
        className: _$$s3.ml28.$,
        children: s
      }), submenuItem.submenu && jsx(_$$a4, {})]
    })
  }, s);
}
function oc(e) {
  let [t, i] = useState("");
  let [r, s] = useState([]);
  let {
    item,
    path
  } = e;
  if (useEffect(() => {
    item.submenu && (s(item.submenu), i(""));
  }, [item]), !item.submenu) return null;
  let d = jsx(_$$B6, {
    resultCount: r.length,
    children: r.map(e => jsx(od, {
      submenuItem: e,
      path
    }, e.extensionSearchString || ""))
  });
  let c = e => {
    i(e);
    item.submenu && s(item.submenu.filter(t => TW(t).toLowerCase().includes(e.toLowerCase())));
  };
  let u = path.join(" > ");
  return jsxs(_$$n, {
    height: wC,
    children: [jsx(vj, {
      searchQuery: t,
      onSearchChange: c,
      onClear: () => {
        c("");
      },
      placeholder: u
    }), jsx(_$$n.Body, {
      children: d
    })]
  });
}
var oy = (e => (e.PERSONAL_DRAFT = "PERSONAL_DRAFT", e.TEAM_OR_ORG_DISABLED = "TEAM_OR_ORG_DISABLED", e.ORG_GUEST = "ORG_GUEST", e.NON_PAID_SEAT = "NON_PAID_SEAT", e.NO_ORG_OR_TEAM_USER = "NO_ORG_OR_TEAM_USER", e.ROLLING_OUT = "ROLLING_OUT", e))(oy || {});
function oC({
  title: e,
  subTitle: t,
  icon: i,
  onClose: r,
  dataTestId: a
}) {
  return jsx("div", {
    "data-testid": a,
    className: _$$s3.colorBgBrandTertiary.p8.bRadius8.$,
    children: jsxs("div", {
      className: _$$s3.flex.gap8.$,
      children: [i, jsxs("div", {
        className: _$$s3.flex.flexColumn.flexGrow1.$,
        children: [jsx("span", {
          className: "banner--title--gNQoq",
          children: e
        }), jsx("span", {
          className: "banner--subtitle--8K4pM",
          children: t
        })]
      }), r ? jsx(_$$K3, {
        onClick: r,
        "aria-label": getI18nString("qa.dismiss"),
        htmlAttributes: {
          "data-testid": "banner-close-icon"
        },
        children: jsx(_$$A11, {
          style: {
            "--color-icon": "var(--color-icon-secondary)"
          }
        })
      }) : null]
    })
  });
}
function ov() {
  let e;
  let {
    reason,
    dismissKey
  } = function () {
    let e = function () {
      let e = useMemo(() => [], []);
      let t = _$$R5();
      let i = D6("useAIDisabledReasons").unwrapOr(null);
      let r = X$("useAIDisabledReasons").unwrapOr(null);
      let n = T5("useAIDisabledReasons").unwrapOr(null);
      let s = PE();
      let o = q5();
      let l = i?.key.type === FUserTypeClassification.ORG_USER && i?.permission === FMemberRoleType.GUEST;
      let d = !n?.aiFeaturesEnabled;
      let c = !!(r && r.tier !== FPlanNameType.STARTER);
      let u = i?.designPaidStatus === FPlanAccessType.FULL;
      let p = t ? !i?.seatTypeLicenseTypes?.includes(FProductAccessType.DESIGN) : !u;
      let m = !!r;
      let f = m && !!i;
      let g = _$$E2();
      if (s || g !== FEditorType.Design) return e;
      if (!$7("useDisabledReasons")) return ["ROLLING_OUT"];
      let _ = [];
      !o || o.parentOrgId || o.teamId || _.push("PERSONAL_DRAFT");
      d && _.push("TEAM_OR_ORG_DISABLED");
      l && _.push("ORG_GUEST");
      c && p && _.push("NON_PAID_SEAT");
      m && !f && _.push("NO_ORG_OR_TEAM_USER");
      return _;
    }().sort((e, t) => oE(e) - oE(t));
    let t = {
      seen_no_ai_org_disabled: _$$f7("seen_no_ai_org_disabled"),
      seen_no_ai_team_or_org_user: _$$f7("seen_no_ai_team_or_org_user"),
      seen_no_ai_rolling_out: _$$f7("seen_no_ai_rolling_out")
    };
    return useMemo(() => {
      for (let i of e) {
        let e = function (e) {
          switch (e) {
            case oy.ROLLING_OUT:
              return "seen_no_ai_rolling_out";
            case oy.TEAM_OR_ORG_DISABLED:
              return "seen_no_ai_org_disabled";
            case oy.NON_PAID_SEAT:
            case oy.NO_ORG_OR_TEAM_USER:
            case oy.ORG_GUEST:
              return "seen_no_ai_team_or_org_user";
            case oy.PERSONAL_DRAFT:
            case null:
              return null;
            default:
              throwTypeError(e);
          }
        }(i);
        if (!e) return {
          reason: i
        };
        if (!t[e]) return {
          reason: i,
          dismissKey: e
        };
      }
      return {
        reason: null
      };
    }, [e, t]);
  }();
  let r = useDispatch();
  let o = yy();
  let l = useAtomWithSubscription(Hu);
  let d = getI18nString("qa.no_ai.title");
  switch (reason) {
    case oy.ROLLING_OUT:
    case null:
      return null;
    case oy.PERSONAL_DRAFT:
      d = getI18nString("qa.no_ai.title.personal_draft");
      e = getI18nString("qa.no_ai.subtitle.personal_draft");
      break;
    case oy.TEAM_OR_ORG_DISABLED:
      d = getI18nString("qa.no_ai.title.org_disabled");
      e = getI18nString("qa.no_ai.subtitle.org_disabled");
      break;
    case oy.NON_PAID_SEAT:
    case oy.NO_ORG_OR_TEAM_USER:
    case oy.ORG_GUEST:
      d = getI18nString("qa.no_ai.title.not_available_here");
      e = getI18nString("qa.no_ai.subtitle.team_or_org_user_no_access", {
        orgOrTeamName: o?.name || l?.name || ""
      });
      break;
    default:
      throwTypeError(reason);
  }
  return jsx("div", {
    className: _$$s3.mx8.mb8.$,
    children: jsx(oC, {
      title: d,
      subTitle: e,
      icon: jsx(_$$C, {}),
      dataTestId: "no-ai-banner",
      onClose: dismissKey ? () => r(_$$b5({
        [dismissKey]: !0
      })) : void 0
    })
  });
}
function oE(e) {
  switch (e) {
    case oy.ROLLING_OUT:
      return 0;
    case oy.PERSONAL_DRAFT:
      return 1;
    case oy.NON_PAID_SEAT:
    case oy.NO_ORG_OR_TEAM_USER:
    case oy.ORG_GUEST:
      return 2;
    case oy.TEAM_OR_ORG_DISABLED:
      return 3;
    case null:
      return 1e3;
    default:
      throwTypeError(e);
  }
}
function oN(e) {
  let {
    extension,
    publishedExtension,
    canRequest,
    canRun
  } = e;
  let a = _$$sZ();
  let s = RW();
  let o = _$$a5(a?.id, extension.plugin_id, s.loaded ? s.data?.workspaceId : void 0);
  if (bH(extension) && a && a.name) return {
    text: a.name
  };
  if (ZQ(extension) && publishedExtension && AC(publishedExtension)) return {
    text: getI18nString("qa.extensions.in_review"),
    variant: _$$x5.BRAND
  };
  if (ZQ(extension)) return {
    text: getI18nString("qa.extensions.development")
  };
  if (canRun); else if (o) return {
    text: getI18nString("qa.extensions.approval_pending")
  }; else if (canRequest) return {
    text: getI18nString("qa.extensions.needs_approval")
  };
  return null;
}
function oA({
  text: e,
  variant: t
}) {
  return jsx(_$$E5, {
    variant: t,
    children: jsx(_$$G, {
      text: e
    })
  });
}
function oO(e) {
  let {
    searchQuery,
    fullscreenMenuAction
  } = e;
  let r = "";
  if (fullscreenMenuAction.searchSynonyms && (r += `Synonyms: ${fullscreenMenuAction.searchSynonyms.join(", ")}`), !h8()) return null;
  let {
    details,
    score
  } = _$$ou(x0()).debugData(searchQuery, _g(fullscreenMenuAction).searchItem);
  let o = `Score:${score.toFixed(2)}`;
  return jsx("div", {
    className: _$$s3.ml8.colorTextSecondary.noWrap.$,
    "data-tooltip": [details, r].filter(Boolean).join("\n"),
    "data-tooltip-type": Ib.TEXT,
    "data-tooltip-max-width": 300,
    "data-testid": "search-debug-info",
    children: o
  });
}
let oM = e => Zj(e) && !e.hideCheckForQuickCommand;
let oP = () => { };
function oF({
  item: e,
  searchQuery: t,
  createCommonMetrics: i
}) {
  let {
    push
  } = cq();
  let {
    addFrecencyUsage
  } = fJ();
  let d = Dz(e);
  let c = useSelector(e => e.mirror.appModel);
  let u = useDispatch();
  let {
    close
  } = cq();
  let h = J2(UK().showQuickCommandRankDebug);
  let m = V2();
  let f = p8("keyboardShortcuts");
  let _ = useCallback(() => {
    close();
  }, [close]);
  let x = _$$A(_, 300);
  useEffect(() => () => {
    x.cancel();
  }, [x]);
  let y = _$$r5();
  let b = useRef(!1);
  let E = useCallback(r => {
    let n = r ? _$$OZ(r) : "";
    let a = {
      ...i(),
      shortcutText: n
    };
    kp(a);
    y(e);
    addFrecencyUsage(e, t);
  }, [addFrecencyUsage, y, i, e, t]);
  let T = useCallback((e, i) => {
    if (b.current) return;
    b.current = !0;
    let a = i?.key === Uz.TAB ? "tab" : "enter";
    if (x.isPending() && x.cancel(), e.disabled) return;
    if ("plugins-menu-item" === e.name && !m) {
      _();
      _$$R2.instance.handleUpgrade(Q7.RUN_PLUGIN);
      return;
    }
    let s = !!e.itemParameterArgs;
    let l = YT(e);
    if (!(s || l || "enter" === a)) return;
    let d = null;
    if (e.quickAction) {
      let t = {};
      if (e.quickAction.retainSearchQuery && (t.shouldResetSearchQuery = !1), e.quickAction.beforeModuleOpen) {
        let t = _V();
        e.quickAction.beforeModuleOpen(t);
      }
      push(e.quickAction.module, t);
      E(i);
      return;
    }
    if (s) switch (a) {
      case "enter":
        if (e.runPluginArgs && !t) {
          let t = {
            ...e.runPluginArgs,
            ...(e.itemParameterArgs?.command && {
              command: e.itemParameterArgs.command
            })
          };
          d = async () => {
            await _$$R2.instance.enqueue({
              mode: "run-forever",
              runPluginArgs: t
            });
          };
        } else if (e.parametersRequired) {
          let t = e.itemParameterArgs;
          push({
            name: Sn.PLUGIN_PARAMETER_ENTRY,
            module: jsx(_$$r4, {
              command: t.command,
              displayName: t.displayName,
              initialParameterValues: e.runPluginArgs?.parameterValues,
              onExitParameterEntry: _$$lQ,
              parameterOnly: t.parameterOnly,
              parameters: t.parameters,
              pluginId: t.pluginId,
              pluginLocalFileId: t.pluginLocalFileId,
              recentlyUsedCommandName: EG(e),
              triggeredFrom: "quick-actions"
            })
          });
          E(i);
          return;
        }
        break;
      case "tab":
        if (e.itemParameterArgs) {
          let t = e.itemParameterArgs;
          push({
            name: Sn.PLUGIN_PARAMETER_ENTRY,
            module: jsx(_$$r4, {
              command: t.command,
              displayName: t.displayName,
              initialParameterValues: e.runPluginArgs?.parameterValues,
              onExitParameterEntry: _$$lQ,
              parameterOnly: t.parameterOnly,
              parameters: t.parameters,
              pluginId: t.pluginId,
              pluginLocalFileId: t.pluginLocalFileId,
              recentlyUsedCommandName: EG(e),
              triggeredFrom: "quick-actions"
            })
          });
          E(i);
          return;
        }
        break;
      default:
        throwTypeError(a);
    }
    if (l) {
      push({
        name: Sn.PLUGIN_SUBMENU_ENTRY,
        module: jsx(oc, {
          item: e,
          path: [TW(e)]
        })
      });
      E(i);
      return;
    }
    e.callback && !d ? d = async () => {
      e.callback && (await e.callback(Dz(e), e.args, u));
    } : e.action && (d = async () => {
      if (!e.action) return;
      let t = oP();
      if (t) return await t();
      VU.get(e.action, "quick-actions", e.args)();
    });
    E(i);
    oM(e) && !PN() ? x() : e.keepMenuOpen || _();
    d ? d().catch(t => {
      reportError(_$$e.AI_FOR_PRODUCTION, t, {
        extra: {
          item: e
        }
      });
    }) : reportError(_$$e.AI_FOR_PRODUCTION, Error("No valid action triggered from quick actions"), {
      extra: {
        item: e
      }
    });
  }, [b, _, x, u, push, t, E, m]);
  let w = e.shortcutText || c1(f, d);
  let j = "plugins-menu-item" === e.name && !!e.itemParameterArgs && e.itemParameterArgs.parameters.length > 0;
  let I = YT(e);
  let k = cW();
  let N = ZT();
  let A = (() => {
    if (e.itemParameterArgs && e.runPluginArgs && !t) return jsx(_$$_, {
      runPluginArgs: e.runPluginArgs,
      itemParameterArgs: e.itemParameterArgs
    });
    if (e.itemPath) {
      let t = e.itemPath;
      return jsx(_$$h3, {
        itemPath: t
      });
    }
    return e.displayNode ? jsx(Fragment, {
      children: e.displayNode
    }) : jsx(Fragment, {
      children: EG(e)
    });
  })();
  let R = oM(e);
  let M = R ? WJ(c, e) : void 0;
  let B = _$$h2("plugin");
  let U = _$$h2("widget");
  let G = _$$sZ();
  let H = "go-to-page" === e.name ? `go-to-page-${e.args?.pageName}` : e.name || e.action;
  useEffect(() => {
    e.onRender && e.onRender(!!t);
  }, [e, t]);
  let z = _$$o(_$$nt.quickActionsA11y);
  return jsx(_$$B6.Item, {
    primaryAction: {
      text: "Perform",
      shortcuts: [{
        key: Uz.ENTER
      }, {
        key: Uz.TAB
      }],
      onAction: ({
        shortcut: t
      }) => T(e, t)
    },
    actionLabel: !1,
    disabled: z ? e.disabled : void 0,
    recordingKey: H,
    scrollMargin: "32px 0 16px 0",
    type: z && R ? "checkbox" : "button",
    isChecked: !!M,
    children: jsx(_$$_5, {
      checked: M,
      disabled: e.disabled,
      displayNode: A,
      label: EG(e),
      icon: function (e) {
        if ("plugins-menu-item" === e.name) {
          let t;
          return (e.pluginId && (t = DM({
            idToSearch: e.pluginId,
            localExtensionsByFileId: void 0,
            publishedExtensions: {
              ...k,
              ...N
            }
          })), t && !ZQ(t)) ? jsx(_$$V, {
            className: _$$s3.colorIcon.w20.h20.m2.bRadius4.$,
            plugin: t,
            role: "presentation"
          }) : jsx(_$$B2, {
            className: _$$s3.colorIcon.w20.h20.bRadius4.$,
            svg: _$$A14,
            ariaLabel: `${e.name} icon`,
            autosize: !0
          });
        }
        if (e.iconType && "string" == typeof e.iconType) {
          var t;
          return "external_link" === (t = e.iconType) ? jsx(_$$B2, {
            svg: _$$A13,
            className: _$$s3.colorIcon.$
          }) : "import" === t ? jsx(_$$R, {}) : "plus" === t ? jsx(_$$e2, {}) : "widget" === t ? jsx(_$$v, {}) : void 0;
        }
        if (e.iconType && "string" != typeof e.iconType) return e.iconType;
      }(e),
      badge: "run-local-plugin" === e.menuActionType || "insert-local-widget" === e.menuActionType ? jsx("div", {
        style: _$$sx.add({
          maxWidth: "110px"
        }).$,
        children: jsx(oA, {
          text: getI18nString("fullscreen_actions.development")
        })
      }) : G && (B.some(t => t.plugin_id === e.pluginId) || U.some(t => t.plugin_id === e.pluginId)) ? jsx("div", {
        style: _$$sx.add({
          maxWidth: "110px"
        }).$,
        children: jsx(oA, {
          text: G.name
        })
      }) : h ? jsx(oO, {
        searchQuery: t,
        fullscreenMenuAction: e
      }) : e.isRepairCommand && getFeatureFlags().internal_only_debug_tools ? jsx(_$$E5, {
        children: "REPAIR"
      }) : e.action === _$$JT.FIRST_DRAFT && e.disabled ? jsx("div", {
        "data-tooltip": getI18nString("qa.unavailable"),
        "data-tooltip-type": Ib.TEXT,
        style: {
          "--color-icon": "var(--color-icon-disabled)"
        },
        children: jsx(_$$b3, {})
      }) : void 0,
      hoverBadges: (() => {
        if (BB(e)) {
          let t = _$$O4(e);
          return [jsx(_$$y3, {
            helpUrlVariant: t
          }, "ai")];
        }
        if (Z7(e)) return [jsx(_$$E5, {
          children: renderI18nText("general.beta")
        }, "beta")];
      })(),
      keyboardShortcut: w ? jsx(_$$S, {
        shortcut: w
      }) : j || I ? jsxs(Fragment, {
        children: [jsx("div", {
          className: _$$s3.colorBgTertiary.bRadius5.font11.h16.fontMedium.flex.itemsCenter.px4.mr8.$,
          "aria-hidden": !0,
          id: "tab-hint",
          children: renderI18nText("whiteboard.ai_modal.hint_tab")
        }), jsx(_$$B2, {
          svg: _$$A12,
          className: _$$s3.colorIcon.$,
          "aria-describedby": "tab-hint"
        })]
      }) : void 0,
      dataTestId: H
    })
  });
}
function oB({
  setActiveTab: e
}) {
  let t = Ev();
  let i = useAtomWithSubscription(Lk);
  let r = useAtomWithSubscription(_$$dd);
  let o = useSelector(_$$l);
  let l = useAtomWithSubscription(Rt);
  let u = useRef(l);
  let p = useAtomWithSubscription(Q8);
  let m = useDeferredValue(p);
  useEffect(() => {
    u.current = l;
  }, [l]);
  let f = function () {
    let e = _$$FX();
    let t = or();
    let i = function () {
      let e = useSelector(e => e.mirror.appModel.isReadOnly);
      let t = c4();
      let i = function () {
        let e = wo();
        let t = cW();
        let i = ZT();
        let r = _$$E2();
        let n = [];
        let a = [];
        e.forEach(e => {
          if (!e.extensionInfo) return;
          let {
            extensionType,
            extensionId
          } = e.extensionInfo;
          let o = DM({
            idToSearch: extensionId,
            localExtensionsByFileId: {},
            publishedExtensions: {
              ...t,
              ...i
            }
          });
          o && ("plugin" === extensionType ? n.push(o) : a.push(o));
        });
        return {
          plugins: AG(r, n),
          widgets: AG(r, a)
        };
      }();
      return useMemo(() => _$$M({
        isReadOnly: e,
        extensionMenuProps: {
          ...t,
          recentlyUsedPlugins: [...(t.recentlyUsedPlugins ?? []), ...(i.plugins ?? [])],
          recentlyUsedWidgets: [...(t.recentlyUsedWidgets ?? []), ...(i.widgets ?? [])],
          unboundedRecents: !0
        },
        includeDisabled: !0,
        filters: {
          showUnpurchased: !1
        }
      }), [e, t, i]);
    }();
    let r = function () {
      let e = p8("pagesList");
      let t = bG({
        pagesList: e,
        isComparingChanges: !1
      });
      return useMemo(() => getFeatureFlags().qa_go_to_page ? e.map(e => ({
        name: "go-to-page",
        args: {
          pageName: e.name
        },
        callback: () => {
          t(e.nodeId);
        },
        iconType: jsx(ic, {}),
        displayNode: jsx(Fragment, {
          children: renderI18nText("fullscreen_actions.quick_actions.go-to-page", {
            pageName: jsx(_$$E, {
              color: "secondary",
              children: e.name
            })
          })
        })
      })) : [], [e, t]);
    }();
    let o = function () {
      let e = _p();
      let t = Zr("send-to-make-from-design");
      let i = function () {
        let e = getSingletonSceneGraph().getDirectlySelectedNodes();
        return _$$j(e.map(e => e.name)) ?? null;
      }();
      let r = useMemo(() => i ? jsx(_$$E, {
        color: "secondary",
        children: i
      }) : null, [i]);
      return useMemo(() => t && i && e() ? [{
        ...Bc,
        displayNode: jsx(iW, {
          children: renderI18nText("fullscreen_actions.quick_actions.send-frame-to-figma-make", {
            frameName: r
          })
        })
      }] : [], [t, i, e, r]);
    }();
    let l = function () {
      let e = Zr("send-to-buzz-from-design");
      let t = useSelector(_$$tB);
      let i = useSelector(vx);
      let r = _$$eY();
      let o = r.getDirectlySelectedNodes();
      let l = useMemo(() => ({
        tags: [_$$$.BETA],
        iconType: jsx(_$$W2, {}),
        searchSynonyms: ["send to buzz", "export to buzz", "copy to buzz", "create buzz file", "figma buzz", "buzz"],
        flags: ["edit", "design"],
        callback: (e, r, n) => {
          _$$rN(n, VY({
            openFile: t,
            fileVersion: i
          }), _$$f2.SEND_TO_BUZZ_FROM_DESIGN_QA_V2_MENU);
        }
      }), [i, t]);
      return useMemo(() => {
        if (!Mpt || !e || !t || !i) return [];
        let a = o.length > 0;
        let s = a ? Mpt.getSelectedNodesToSend() : Mpt.getTopLevelFramesToSend();
        if (0 === s.length) return [];
        if (1 === s.length) {
          let e = r.get(s[0]);
          if (e?.isTopLevelFrame()) return [{
            action: "send-to-buzz-from-design",
            ...l,
            displayNode: renderI18nText("buzz.send_from_design.send_node_to_figma_buzz", {
              nodeName: jsx("span", {
                className: "x1n0bwc9",
                children: e.name
              })
            })
          }];
        }
        return a ? [{
          action: "send-selection-to-buzz-from-design",
          ...l,
          displayNode: renderI18nText("buzz.send_from_design.send_selection_to_figma_buzz", {
            numSelectedNodes: s.length
          })
        }] : [{
          action: "send-to-buzz-from-design",
          ...l,
          displayNode: renderI18nText("buzz.send_from_design.send_frames_to_figma_buzz", {
            numFrames: s.length
          })
        }];
      }, [o, i, e, t, r, l]);
    }();
    return useMemo(() => [...e, ...o, ...l, ...i, {
      name: "wand-menu",
      callback: _$$lQ,
      children: t
    }, ...r], [e, t, i, r, o, l]);
  }();
  let g = eP();
  let _ = iD(g, f);
  let x = function (e, t, i, r) {
    let o = wo();
    let l = filterNotNullish(o.map(i => {
      let r = t.getItem(e, i.displayName);
      r && i.runPluginArgs && (r.runPluginArgs = i.runPluginArgs);
      return r;
    })).slice(0, 3);
    let {
      items
    } = function (e, t, i) {
      let r = PE();
      let n = ZC(r);
      let o = function (e, t, i) {
        let r = ig();
        let n = t.map(e);
        let o = function () {
          let e = m0();
          let t = _$$e3();
          let i = ZO();
          let r = q5()?.canEdit;
          let n = PE();
          return t ? "VARIABLES_TABLE" : i ? "COMPONENT_BROWSER" : e ? "DEV" : !1 === r ? "DESIGN_VIEWER" : r && n ? "DESIGN_EDITOR_AI" : r && !n ? "DESIGN_EDITOR_NO_AI" : "NONE";
        }();
        let l = function (e, t) {
          let i = function () {
            let e = useSelector(e => e.mirror?.appModel);
            let t = ig();
            let {
              frecencyByAction,
              frecencyByQuery
            } = fJ();
            let n = Tv();
            let o = _$$C2();
            let l = _p();
            return useCallback((a, s) => {
              if (s) return [];
              let d = a.map(e);
              let c = [];
              let u = _$$ou({
                actions: frecencyByAction
              });
              let p = n.filter(e => {
                let t = getSingletonSceneGraph().get(e);
                return t?.isSlide;
              }).length > 0;
              let h = Yh(e, "send-to-make-from-design");
              if (0 === n.length || p) {
                c = [_$$JT.GENERATE_IMAGE, _$$JT.REMOVE_BACKGROUND, _$$JT.UPSCALE_IMAGE, _$$JT.EDIT_IMAGE, _$$JT.AUTO_RENAME_LAYERS, _$$JT.CONTENT_FILL, _$$JT.FIND_INSPIRATION, _$$JT.FIRST_DRAFT, _$$JT.FIRST_DRAFT_FINE_TUNE, _$$JT.MAGIC_LINK, _$$JT.MAKE_EDITS, _$$JT.SLIDES_GENERATE_SPEAKER_NOTES, _$$JT.SLIDES_REWRITE_TEXT, _$$JT.REWRITE_TEXT, _$$JT.SHORTEN_TEXT, _$$JT.TRANSLATE_TEXT, _$$JT.WHITEBOARD_GENERATE_CONTENT, _$$JT.SUMMARIZE_STICKIES, _$$JT.SORT_STICKIES_BY_TOPIC, _$$JT.MIND_MAP_GENERATE_IDEAS];
                o && c.push(OZ);
                return [...c].map(e => t(d, e, !0)).filter(e => !!e).sort((e, t) => u.sort("", _g(e).searchItem, _g(t).searchItem));
              }
              {
                let n;
                let a;
                let s = 0;
                if (ImageToolsBindings) {
                  let e = ImageToolsBindings.getNodeImagePairsForEdit();
                  e.length > 1 && getFeatureFlags().aip_batch_image_modify ? s = 1 : 1 === e.length ? s = 2 : ImageToolsBindings.getGenerateImageTarget() && (s = 3);
                }
                h && l() && c.push(_$$i3);
                c.push(_$$JT.CONTENT_FILL, _$$JT.TRANSLATE_TEXT, _$$JT.REWRITE_TEXT, _$$JT.SHORTEN_TEXT, _$$JT.SLIDES_GENERATE_SPEAKER_NOTES, _$$JT.SLIDES_REWRITE_TEXT, _$$JT.GENERATE_IMAGE, _$$JT.REMOVE_BACKGROUND, _$$JT.UPSCALE_IMAGE, _$$JT.EDIT_IMAGE, _$$JT.FIRST_DRAFT_MAKE_CHANGES, _$$JT.AUTO_RENAME_LAYERS, _$$JT.MAGIC_LINK, _$$JT.FIND_INSPIRATION, _$$JT.FIRST_DRAFT, _$$JT.MAKE_EDITS, _$$JT.FIRST_DRAFT_FINE_TUNE, _$$JT.SUMMARIZE_STICKIES, _$$JT.SORT_STICKIES_BY_TOPIC, _$$JT.MIND_MAP_GENERATE_IDEAS);
                o && c.push(OZ);
                let p = [...c].map(e => t(d, e)).filter(e => !!e);
                let m = p.sort((e, t) => function (e, t, i) {
                  if (1 === e) {
                    if (iw.has(t.action ?? "") && !iw.has(i.action ?? "")) return -1;
                    if (!iw.has(t.action ?? "") && iw.has(i.action ?? "")) return 1;
                  } else if (2 === e) {
                    if (iS.has(t.action ?? "") && !iS.has(i.action ?? "")) return -1;
                    if (!iS.has(t.action ?? "") && iS.has(i.action ?? "")) return 1;
                  }
                  if (3 === e || 2 === e) {
                    if (t.action === _$$JT.GENERATE_IMAGE) return -1;
                    if (i.action === _$$JT.GENERATE_IMAGE) return 1;
                  }
                }(s, e, t) ?? u.sort("", _g(e).searchItem, _g(t).searchItem));
                let f = Object.values(d).filter(t => Yh(e, t.name || t.action || "") && !p.includes(t) && !t.searchOnly && !(t.featureFlags && t.featureFlags.includes("internal_only_debug_tools")) && _$$y("", _$$n2(t), {
                  actions: frecencyByAction,
                  queries: frecencyByQuery
                }) > 0).sort((e, t) => u.sort("", _g(e).searchItem, _g(t).searchItem));
                f.length < 4 ? (n = 8 - f.length, a = f.length) : m.length < 4 ? (n = m.length, a = 8 - m.length) : (n = 4, a = 4);
                return [...m.slice(0, n), ...f.slice(0, a)];
              }
            }, [e, t, frecencyByAction, frecencyByQuery, n, o, l]);
          }();
          let [r] = useState(() => i(e, ""));
          return r;
        }(t, 0);
        let c = function (e, t) {
          let i = !iR();
          return useCallback(() => {
            if (i) {
              let e = [];
              for (let i of t) {
                if (!i.action || i.disabled) continue;
                let t = iI.get(i.action);
                t && e.push([i.action, t]);
              }
              return e;
            }
            let r = [];
            for (let i of (Yh(e, _$$JT.FIRST_DRAFT_MAKE_CHANGES) && r.push([_$$JT.FIRST_DRAFT_MAKE_CHANGES, _$$b4.SUGGESTIONS]), t)) i.action && !i.disabled && r.push([i.action, _$$b4.SUGGESTIONS]);
            return r;
          }, [e, t, i]);
        }(e, l);
        let u = function () {
          let e = I9();
          let t = p8("activeCanvasEditModeType");
          let i = _$$C2();
          return useCallback(() => {
            if (!e?.length) {
              let e = [["canvas-search-replace", _$$b4.SUGGESTIONS], ["select-all", _$$b4.SUGGESTIONS], ["undo", _$$b4.SUGGESTIONS], ["toggle-rulers", _$$b4.COMMON_SETTINGS], ["toggle-snapping-to-pixels", _$$b4.COMMON_SETTINGS], ["toggle-sidebar", _$$b4.COMMON_SETTINGS], ["toggle-ui", _$$b4.COMMON_SETTINGS], ["toggle-multiplayer-cursors", _$$b4.COMMON_SETTINGS], ["show-nudge-amount-picker", _$$b4.COMMON_SETTINGS], ["open-shortcuts", _$$b4.COMMON_SETTINGS], ["open-account-settings", _$$b4.COMMON_SETTINGS]];
              i && e.push(["copy-to-figma-slides", _$$b4.SUGGESTIONS]);
              return e;
            }
            if (1 === e.length) {
              let r = e[0];
              let n = [["add-selection-ready-status", _$$b4.SUGGESTIONS], ["republish-selected-components", _$$b4.SUGGESTIONS], ["publish-changes-to-library", _$$b4.SUGGESTIONS], ["toggle-shown-for-selected-nodes", _$$b4.SUGGESTIONS]];
              let a = [["select-matching", _$$b4.SUGGESTIONS], ["outline-stroke", _$$b4.SUGGESTIONS], ["mask-selection", _$$b4.SUGGESTIONS], ["flatten-selection", _$$b4.SUGGESTIONS], ["unlock-all", _$$b4.SUGGESTIONS], ["convert-to-raster", _$$b4.SUGGESTIONS], ["toggle-shown-for-selected-nodes", _$$b4.SUGGESTIONS]];
              if (t === m1T.VECTOR) return [["flip-horizontal", _$$b4.SUGGESTIONS], ["flip-vertical", _$$b4.SUGGESTIONS], ["align-horizontal-center", _$$b4.SUGGESTIONS], ["align-vertical-center", _$$b4.SUGGESTIONS]];
              switch (r.type) {
                case "SYMBOL":
                  return n;
                case "FRAME":
                  if (r.isStateGroup) return n;
                  if (r.isGroup) return a;
                  let s = [["add-selection-ready-status", _$$b4.SUGGESTIONS], ["select-matching", _$$b4.SUGGESTIONS], ["stack-selection", _$$b4.SUGGESTIONS], ["run-multi-stack-auto-layout", _$$b4.SUGGESTIONS], ["copy-properties", _$$b4.SUGGESTIONS], ["unlock-all", _$$b4.SUGGESTIONS], ["convert-to-raster", _$$b4.SUGGESTIONS], ["toggle-shown-for-selected-nodes", _$$b4.SUGGESTIONS], ["replace-selected-frame-with-section", _$$b4.SUGGESTIONS]];
                  i && s.push(["copy-to-figma-slides", _$$b4.SUGGESTIONS]);
                  return s;
                case "INSTANCE":
                  return [["select-matching", _$$b4.SUGGESTIONS], ["detach-instance", _$$b4.SUGGESTIONS], ["reset-symbol", _$$b4.SUGGESTIONS], ["convert-to-raster", _$$b4.SUGGESTIONS], ["toggle-shown-for-selected-nodes", _$$b4.SUGGESTIONS]];
                case "SLICE":
                  return [["export-selected-exportables", _$$b4.SUGGESTIONS], ["convert-to-raster", _$$b4.SUGGESTIONS], ["toggle-shown-for-selected-nodes", _$$b4.SUGGESTIONS]];
                case "WIDGET":
                  return [["select-all-widgets", _$$b4.SUGGESTIONS], ["convert-to-raster", _$$b4.SUGGESTIONS], ["toggle-shown-for-selected-nodes", _$$b4.SUGGESTIONS]];
                case "SECTION":
                  return [["add-selection-ready-status", _$$b4.SUGGESTIONS], ["select-matching", _$$b4.SUGGESTIONS], ["unlock-all", _$$b4.SUGGESTIONS], ["toggle-shown-for-selected-nodes", _$$b4.SUGGESTIONS], ["replace-selected-section-with-frame", _$$b4.SUGGESTIONS]];
                case "GROUP":
                  return a;
                case "ELLIPSE":
                case "BOOLEAN_OPERATION":
                case "LINE":
                case "REGULAR_POLYGON":
                case "RECTANGLE":
                case "ROUNDED_RECTANGLE":
                case "STAR":
                case "VECTOR":
                  return [["select-matching", _$$b4.SUGGESTIONS], ["flip-horizontal", _$$b4.SUGGESTIONS], ["mask-selection", _$$b4.SUGGESTIONS], ["flatten-selection", _$$b4.SUGGESTIONS], ["copy-properties", _$$b4.SUGGESTIONS], ["convert-to-raster", _$$b4.SUGGESTIONS], ["toggle-shown-for-selected-nodes", _$$b4.SUGGESTIONS]];
                case "TEXT":
                  return [["text-edit-hyperlink", _$$b4.SUGGESTIONS], ["text-toggle-strikethrough", _$$b4.SUGGESTIONS], ["copy-properties", _$$b4.SUGGESTIONS], ["paste-properties", _$$b4.SUGGESTIONS], ["text-font-size-increase", _$$b4.SUGGESTIONS], ["text-font-size-decrease", _$$b4.SUGGESTIONS], ["text-bold-increase", _$$b4.SUGGESTIONS], ["text-bold-decrease", _$$b4.SUGGESTIONS]];
              }
            }
            let r = [["select-matching", _$$b4.SUGGESTIONS], ["frame-selection", _$$b4.SUGGESTIONS], ["create-symbol", _$$b4.SUGGESTIONS], ["create-multiple-symbols", _$$b4.SUGGESTIONS], ["toggle-locked-for-selected-nodes", _$$b4.SUGGESTIONS], ["export-selected-exportables", _$$b4.SUGGESTIONS], ["align-horizontal-center", _$$b4.SUGGESTIONS], ["align-vertical-center", _$$b4.SUGGESTIONS]];
            i && r.push(["copy-to-figma-slides", _$$b4.SUGGESTIONS]);
            return r;
          }, [e, i, t]);
        }();
        let p = useCallback((e, t) => {
          let i = r(n, e, !0);
          if (i) return {
            ...i,
            category: t
          };
        }, [r, n]);
        let m = i.map(e => ({
          ...e,
          category: _$$b4.RECENTS
        })).filter(t => !_$$oG(e, t));
        let f = useCallback(e => {
          let t = e.map(([e, t]) => p(e, t));
          return eV()(filterNotNullish([...m, ...t]), EG);
        }, [m, p]);
        let g = iR();
        let _ = useMemo(() => {
          if (g && !["DESIGN_EDITOR_NO_AI", "DESIGN_EDITOR_AI", "DEV", "VARIABLES_TABLE", "COMPONENT_BROWSER"].includes(o)) {
            var e;
            e = _$$b4.SUGGESTIONS;
            let t = l.map(t => ({
              ...t,
              category: e
            }));
            return eV()(filterNotNullish([...m, ...t]), EG);
          }
          switch (o) {
            case "DESIGN_EDITOR_AI":
              return f(c());
            case "DEV":
              return f(ik);
            case "VARIABLES_TABLE":
              return f(iA);
            case "COMPONENT_BROWSER":
              return f(iN);
            case "DESIGN_VIEWER":
              return f(iO);
            case "DESIGN_EDITOR_NO_AI":
              return f(u());
            case "NONE":
              return [];
            default:
              throwTypeError(o);
          }
        }, [g, o, l, m, f, c, u]);
        return {
          suggestionMode: o,
          items: _
        };
      }(e, t, i);
      let [l, c] = useState(o);
      useEffect(() => {
        (r !== n || 0 === l.items.length && o.items.length > 0 || o.suggestionMode !== l.suggestionMode) && c(o);
      }, [r, n, l.items.length, l.suggestionMode, o]);
      return l;
    }(e, t, l);
    let p = "" !== i;
    let m = useMemo(() => "" === i ? [] : t.search(e, i).slice(0, 25), [e, t, i]);
    let f = function (e, t) {
      let i = my() === FEditorType.Design;
      let r = q5();
      let o = _$$V4();
      let l = _$$s4();
      let d = !!getFeatureFlags().prt_legacy_v3;
      let [u, p] = useAtomValueAndSetter(ta);
      let h = useSelector(Eh);
      let m = _$$eH();
      let f = T5("useSearchFallbacks").unwrapOr(null);
      let g = f?.name || r?.name;
      return useMemo(() => {
        if ("" === e) return [];
        {
          let a = {
            name: "find-community-matching",
            args: {
              searchQuery: e
            },
            callback: () => { },
            displayNode: m ? renderI18nText("fullscreen_actions.quick_actions.find-in-community", {
              searchQuery: jsx(_$$E, {
                color: "secondary",
                children: e
              })
            }) : renderI18nText("fullscreen_actions.quick_actions.find-community-matching", {
              searchQuery: jsx(_$$E, {
                color: "secondary",
                children: e
              })
            }),
            iconType: jsx(_$$U, {}),
            quickAction: {
              module: {
                module: m ? jsx(z6, {
                  initialTab: Qx.COMMUNITY
                }) : jsx(_$$B3, {
                  initialTab: xA.COMMUNITY
                }),
                name: Sn.ASSETS_TAB_DETAIL_VIEW
              },
              beforeModuleOpen: () => {
                r?.key && Hl({
                  type: "input-text",
                  value: e,
                  file_key: r.key
                }, G4.ACTIONS_LIST, void 0, void 0, void 0, !0);
              },
              retainSearchQuery: !0
            },
            disabled: !i || !r?.canEdit || !m || getFeatureFlags().actions_prioritize_search_v3 || getFeatureFlags().actions_prioritize_search
          };
          let s = {
            name: "find-assets-matching",
            args: {
              searchQuery: e
            },
            callback: () => { },
            displayNode: m ? o ? renderI18nText("fullscreen_actions.quick_actions.find-at-plan-file", {
              searchQuery: jsx(_$$E, {
                color: "secondary",
                children: e
              }),
              planFileName: jsx(_$$E, {
                color: "secondary",
                children: g
              })
            }) : renderI18nText("fullscreen_actions.quick_actions.find-components", {
              searchQuery: jsx(_$$E, {
                color: "secondary",
                children: e
              })
            }) : o ? renderI18nText("fullscreen_actions.quick_actions.find-components-matching", {
              searchQuery: jsx(_$$E, {
                color: "secondary",
                children: e
              })
            }) : renderI18nText("fullscreen_actions.quick_actions.find-assets-matching", {
              searchQuery: jsx(_$$E, {
                color: "secondary",
                children: e
              })
            }),
            iconType: jsx(_$$K, {}),
            quickAction: {
              module: {
                module: m ? jsx(z6, {}) : jsx(_$$B3, {}),
                name: Sn.ASSETS_TAB_DETAIL_VIEW
              },
              retainSearchQuery: !0,
              beforeModuleOpen: t => {
                ES({
                  type: "input-text",
                  query: t.searchQuery,
                  assetTypeOption: {
                    type: _$$I2.ALL
                  },
                  isKnownLibrary: l
                });
                r?.key && m && o && Hl({
                  type: "input-text",
                  value: e,
                  file_key: r.key
                }, G4.ACTIONS_LIST, void 0, void 0, void 0, !1);
              }
            },
            disabled: !i || !r?.canEdit || getFeatureFlags().actions_prioritize_search_v3 || getFeatureFlags().actions_prioritize_search
          };
          let f = {
            name: "find-assets-and-community-matching",
            args: {
              searchQuery: e
            },
            callback: () => { },
            displayNode: m ? renderI18nText(getFeatureFlags().actions_prioritize_search ? "fullscreen_actions.quick_actions.search-at-plan-file-and-community" : "fullscreen_actions.quick_actions.find-at-plan-file-and-community", {
              searchQuery: jsx(_$$E, {
                color: "secondary",
                children: getFeatureFlags().actions_prioritize_search_v3 || getFeatureFlags().actions_prioritize_search ? renderI18nText("fullscreen_actions.quick_actions.quoted-query", {
                  searchQuery: e
                }) : e
              }),
              planFileName: g
            }) : o ? renderI18nText("fullscreen_actions.quick_actions.find-components-matching", {
              searchQuery: jsx(_$$E, {
                color: "secondary",
                children: e
              })
            }) : renderI18nText("fullscreen_actions.quick_actions.find-assets-matching", {
              searchQuery: jsx(_$$E, {
                color: "secondary",
                children: e
              })
            }),
            iconType: m || o ? jsx(_$$T, {}) : jsx(_$$K, {}),
            quickAction: {
              module: {
                module: m ? jsx(z6, {}) : jsx(_$$B3, {}),
                name: Sn.ASSETS_TAB_DETAIL_VIEW
              },
              beforeModuleOpen: t => {
                ES({
                  type: "input-text",
                  query: t.searchQuery,
                  assetTypeOption: {
                    type: _$$I2.ALL
                  },
                  isKnownLibrary: l
                });
                r?.key && m && o && Hl({
                  type: "input-text",
                  value: e,
                  file_key: r.key
                }, G4.ACTIONS_LIST, void 0, void 0, void 0, !1);
              },
              retainSearchQuery: !0
            },
            disabled: !i || !r?.canEdit || !getFeatureFlags().actions_prioritize_search_v3 && !getFeatureFlags().actions_prioritize_search
          };
          return [{
            name: "assistant-chat-query",
            args: {
              searchQuery: e
            },
            callback: () => { },
            displayNode: renderI18nText("fullscreen_actions.assistant-chat-query", {
              query: jsx(_$$E, {
                color: "secondary",
                children: e
              })
            }),
            iconType: jsx(_$$V2, {}),
            quickAction: {
              module: {
                module: jsx(t5, {}),
                name: Sn.ASSISTANT_CHAT
              },
              beforeModuleOpen: e => {
                atomStoreManager.set(ta, {
                  status: tn.Idle,
                  messages: []
                });
                tC(e.searchQuery, u.messages, p, tx);
              }
            },
            disabled: !d
          }, s, a, f, {
            name: "find-extensions-matching",
            args: {
              searchQuery: e
            },
            displayNode: m ? renderI18nText(getFeatureFlags().actions_prioritize_search ? "fullscreen_actions.quick_actions.search-plugins-widgets" : "fullscreen_actions.quick_actions.find-plugins-widgets", {
              searchQuery: jsx(_$$E, {
                color: "secondary",
                children: getFeatureFlags().actions_prioritize_search_v3 || getFeatureFlags().actions_prioritize_search ? renderI18nText("fullscreen_actions.quick_actions.quoted-query", {
                  searchQuery: e
                }) : e
              })
            }) : renderI18nText("fullscreen_actions.quick_actions.find-extensions-matching", {
              searchQuery: jsx(_$$E, {
                color: "secondary",
                children: e
              })
            }),
            iconType: jsx(_$$u, {}),
            callback: () => {
              t.setActiveTab(Jc.EXTENSIONS);
            },
            keepMenuOpen: !0,
            disabled: !i || !h
          }].filter(e => !e.disabled);
        }
      }, [e, o, i, r?.canEdit, r?.key, l, t, d, u, p, h, m, g]);
    }(i, r);
    return p ? getFeatureFlags().actions_prioritize_search ? eV()([...m.slice(0, 4), ...f, ...m.slice(4)], EG) : (getFeatureFlags().actions_prioritize_search_v3 && (f.reverse().map(e => {
      "assistant-chat-query" === e.name ? e.category = _$$b4.MATCHING_ACTIONS : e.category = _$$b4.SEARCH_FOR;
    }), m.map(e => e.category = _$$b4.MATCHING_ACTIONS)), eV()([...m, ...f], EG)) : items;
  }(g, _, m, {
    setActiveTab: e
  });
  let y = _$$X2(x);
  let b = x.length;
  let v = function (e) {
    let t = im()(ip()(e, e => e.category), (e, t) => ({
      category: Object.values(_$$b4).find(e => t === e) || null,
      items: e
    })).sort((e, t) => i_(e.category) - i_(t.category));
    let i = [];
    let r = 0;
    for (let {
      category,
      items
    } of t) {
      i.push({
        category,
        items,
        globalIdxOfFirstItem: r
      });
      r += items.length;
    }
    return i;
  }(x);
  _$$iC({
    activeTab: Jc.ALL,
    query: p,
    resultsCount: b
  });
  useEffect(() => {
    i === Jc.ALL && r && t({
      quickActionsSessionId: r,
      quickActionsQueryId: u.current,
      searchQuery: m,
      numSearchResults: b,
      currentSelection: o,
      module: i,
      moduleFilters: null,
      qaVersion: $L,
      searchQueryResults: y
    });
  }, [t, i, r, m, b, o, y]);
  let {
    createMetrics
  } = Sk();
  let w = useMemo(() => {
    let e = 0;
    getFeatureFlags().actions_prioritize_search_v3 && !getFeatureFlags().actions_prioritize_search && "" !== m && v.length > 1 && (e = v[0]?.items.length || 0);
    return e;
  }, [m, v]);
  return jsx(Fragment, {
    children: jsxs(_$$B6, {
      primary: !0,
      resultCount: b,
      defaultActiveIndex: w,
      children: [jsx(ov, {}), v.map(({
        category: e,
        items: t,
        globalIdxOfFirstItem: i
      }) => null !== e && t.length > 0 && v.length > 1 ? jsx(_$$B6.Section, {
        header: function (e) {
          switch (e) {
            case _$$b4.RECENTS:
              return getI18nString("qa.category.recents");
            case _$$b4.DESIGN_TOOLS:
              return getI18nString("qa.category.design_tools");
            case _$$b4.RIFFING_AND_WRITING:
              return getI18nString("qa.category.riffing_and_writing");
            case _$$b4.IMAGE_EDITING:
              return getI18nString("qa.category.image_editing");
            case _$$b4.COLLABORATION_TOOLS:
              return getI18nString("qa.category.collaboration_tools");
            case _$$b4.HANDOFF_TOOLS:
              return getI18nString("qa.category.handoff_tools");
            case _$$b4.VIEWER_TOOLS:
              return getI18nString("qa.category.viewer_tools");
            case _$$b4.SUGGESTIONS:
              return getI18nString("qa.category.suggestions");
            case _$$b4.COMMON_SETTINGS:
              return getI18nString("qa.category.common_settings");
            case _$$b4.SEARCH_FOR:
              return getI18nString("qa.category.search_for");
            case _$$b4.MATCHING_ACTIONS:
              return getI18nString("qa.category.matching_actions");
            case _$$b4.ORGANIZE:
              return getI18nString("qa.category.organize");
            case _$$b4.TEMPLATES_AND_DIAGRAMS:
              return getI18nString("qa.category.templates_and_diagrams");
            default:
              return throwTypeError(e);
          }
        }(e),
        children: t.map((e, t) => jsx(oF, {
          item: e,
          searchQuery: m,
          createCommonMetrics: () => ({
            numSearchResults: b,
            qaVersion: $L,
            searchQuery: m,
            searchPosition: i + t,
            item: e,
            moduleFilters: null,
            ...createMetrics()
          })
        }, EG(e)))
      }, e) : t.map((e, t) => jsx(oF, {
        item: e,
        searchQuery: m,
        createCommonMetrics: () => ({
          numSearchResults: b,
          qaVersion: $L,
          searchQuery: m,
          searchPosition: i + t,
          item: e,
          moduleFilters: null,
          ...createMetrics()
        })
      }, EG(e))))]
    })
  });
}
function oH({
  extensionFilter: e,
  setExtensionFilter: t,
  canViewWidgets: i
}) {
  let r = _$$sZ();
  let s = Cb();
  let o = useMemo(() => ({
    [BY.ALL]: getI18nString("qa.filter.all"),
    [BY.PLUGINS]: getI18nString("qa.filter.plugins"),
    [BY.WIDGETS]: getI18nString("qa.filter.widgets"),
    [BY.FROM_ORG]: getI18nString("qa.filter.from_org_name", {
      org_name: r?.name || ""
    }),
    [BY.DEVELOPMENT]: getI18nString("qa.filter.development")
  }), [r?.name]);
  let l = useMemo(() => {
    let e = !!r && !s;
    let t = hasDesktopAPI();
    let n = [];
    i && n.push({
      type: "checkableOption",
      value: BY.ALL,
      text: o[BY.ALL]
    });
    n.push({
      type: "checkableOption",
      value: BY.PLUGINS,
      text: o[BY.PLUGINS]
    });
    i && n.push({
      type: "checkableOption",
      value: BY.WIDGETS,
      text: o[BY.WIDGETS]
    });
    (e || t) && n.push({
      type: "separator"
    });
    e && n.push({
      type: "checkableOption",
      value: BY.FROM_ORG,
      text: o[BY.FROM_ORG]
    });
    t && n.push({
      type: "checkableOption",
      value: BY.DEVELOPMENT,
      text: o[BY.DEVELOPMENT]
    });
    return n;
  }, [r, s, i, o]);
  return jsx(c0, {
    ariaLabel: getI18nString("qa.filter.aria_label"),
    buttonId: oV,
    displayAboveTarget: !1,
    id: oW,
    items: l,
    labelForSelectedItem: e => o[e],
    menuId: oz,
    onSelectedChange: t,
    placeholder: "Filter",
    recordingKey: oW,
    selected: e
  });
}
let oz = "extensions-filter-dropdown-menu";
let oV = "extensions-filter-dropdown-button";
let oW = "extensions-filter-dropdown";
let lr = e => {
  _$$j2({
    pluginID: e.plugin_id,
    widgetName: e.name,
    pluginVersionID: "",
    triggeredFrom: "quick-actions"
  });
};
function la({
  augmentedExtension: e,
  isAccessibleIcon: t
}) {
  let {
    extension,
    publishedExtension
  } = e;
  if (!ZQ(extension)) return jsx(_$$V, {
    "aria-hidden": t,
    plugin: extension,
    className: _$$s3.colorIcon.w20.h20.m2.bRadius4.$
  });
  let a = publishedExtension && Ar(publishedExtension);
  return a && a.redirect_icon_url ? jsx(_$$V, {
    "aria-hidden": t,
    plugin: a,
    className: _$$s3.colorIcon.w20.h20.m2.bRadius4.$
  }) : jsx(_$$B2, {
    ariaHidden: t,
    svg: _$$A14,
    className: _$$s3.colorIcon.w20.h20.m2.bRadius4.$,
    dataTestId: "qa2-dev-plugin-icon",
    autosize: !0
  });
}
let l_ = "EXTENSION_OPTIONS_DROPDOWN";
function lx(e) {
  let t = Um();
  return ZQ(e) ? t?.type === l_ && t?.data.extensionId === e.plugin_id && t?.data.localFileId === e.localFileId : t?.type === l_ && t?.data.extensionId === e.plugin_id && t?.data.localFileId === null;
}
function ly(e) {
  let t = useDispatch();
  let i = lx(e);
  return useCallback(r => {
    if (i) t(_$$oB2()); else {
      let i = r.getBoundingClientRect();
      t(j7({
        type: l_,
        data: {
          extensionId: e.plugin_id,
          localFileId: ZQ(e) ? e.localFileId : null,
          targetRect: i
        }
      }));
    }
  }, [t, i, e]);
}
function lb(e) {
  let [t, i] = useState(!1);
  useEffect(() => {
    i(!1);
  }, [e]);
  kz(Uz.LEFT_ARROW, e => {
    Jj() && t && (e.preventDefault(), i(!1));
  });
  kz(Uz.RIGHT_ARROW, () => {
    Jj() && !t && i(!0);
  });
  return t;
}
function lC(e) {
  let t = ly(e);
  return {
    text: "",
    shortcuts: [Hz],
    onAction: e => {
      let i = e.target?.element;
      i && t(i);
    }
  };
}
function lv({
  extension: e,
  active: t,
  isAccessibleButton: i
}) {
  let r = ly(e);
  let s = useCallback(e => {
    e.stopPropagation();
    r(e.currentTarget);
  }, [r]);
  let o = jsx(_$$c3, {
    active: t,
    borderWidth: 1,
    children: jsx(_$$J5, {})
  });
  return jsx("div", {
    className: _$$s3.flex.pl8.$,
    children: i ? jsx("button", {
      "aria-label": getI18nString("qa.plugins_widget.more_options", {
        widget: e.name
      }),
      onClick: s,
      onPointerUp: dG,
      className: rB()(_$$s3.bgTransparent.h24.$),
      "data-testid": "extension-options-button",
      children: o
    }) : jsx(_$$S3.div, {
      role: "button",
      tabIndex: 0,
      onClick: s,
      onPointerUp: dG,
      className: rB()(_$$s3.bgTransparent.h24.$),
      "data-testid": "extension-options-button",
      children: o
    })
  });
}
function lE(e) {
  let {
    augmentedExtension
  } = e;
  let {
    extension,
    publishedExtension,
    localPublishedExtension
  } = t;
  let s = Um();
  let l = ZQ(extension) ? extension : localPublishedExtension;
  let d = NV(l, publishedExtension);
  let c = OX(publishedExtension);
  let u = x2(extension, publishedExtension);
  let p = qu(l);
  let h = _$$rH(augmentedExtension);
  let m = xZ(augmentedExtension);
  let f = TA();
  let g = !!publishedExtension && !!f && (Ro(publishedExtension, f) || Dd(publishedExtension, f));
  let _ = lx(extension);
  let x = _$$O5({
    extension: augmentedExtension,
    preloadImage: _
  });
  if (!_) return null;
  let y = [];
  let b = [];
  let C = !!publishedExtension;
  !ZQ(extension) && (C ? (d && g && y.push(d), y.push({
    displayText: getI18nString("qa.extensions.view_details"),
    callback: x
  }), u && g && y.push(u), p && g && y.push(p), m && g && y.push(m), h && b.push(h), c && g && b.push(c)) : reportError(_$$e.AI_FOR_PRODUCTION, Error("[Quick Actions] Published extension is missing publishedExtension from Redux state"), {
    extra: {
      extensionId: extension.plugin_id,
      isWidget: k0(extension),
      types: Array.from(augmentedExtension.types).toString()
    }
  }));
  ZQ(extension) && (d && y.unshift(d), C && u && y.push(u), !extension.error && p && y.push(p), h && b.push(h), c && b.push(c));
  let v = y.some(Boolean) && b.some(Boolean) ? {
    displayText: "",
    separator: !0
  } : null;
  return jsx(ms, {
    parentRect: s?.data.targetRect,
    lean: "left",
    minWidth: 64,
    items: [...y, v, ...b].filter(e => !!e),
    dataTestId: "extensionOptionsDropdown",
    recordingKey: "extensionOptionsDropdown"
  });
}
function lT({
  augmentedExtension: e,
  hasFauxFocus: t,
  optionsActive: i,
  submenuRef: r,
  ...a
}) {
  let {
    extension
  } = e;
  let o = k0(extension) ? jsx(_$$E, {
    color: "tertiary",
    fontSize: 11,
    children: renderI18nText("qa.extensions.widget")
  }) : jsx(_$$E, {
    color: "tertiary",
    fontSize: 11,
    children: renderI18nText("qa.extensions.plugin")
  });
  let l = oN(e);
  let d = jsxs(Fragment, {
    children: [jsx(la, {
      isAccessibleIcon: a.isAccessibleExtensionRow,
      augmentedExtension: e
    }), jsx("div", {
      className: _$$s3.px8.$,
      style: _$$sx.add({
        maxWidth: l ? "205px" : "300px"
      }).$,
      children: jsx(_$$G, {
        text: extension.name
      })
    }), jsx(_$$lM, {
      augmentedExtension: e,
      submenuRef: r
    }), l && jsx("div", {
      style: _$$sx.add({
        maxWidth: "110px"
      }).$,
      children: jsx(oA, {
        text: l.text,
        variant: l.variant
      })
    })]
  });
  return jsxs("div", {
    className: _$$s3.flex.itemsCenter.justifyBetween.wFull.$,
    children: [a.isAccessibleExtensionRow ? jsx("button", {
      className: _$$s3.flex.itemsCenter.$,
      onClick: a.onClick,
      onFocus: a.onFocus,
      style: _$$sx.add({
        background: "transparent",
        flexGrow: 1
      }).$,
      children: d
    }) : jsx("div", {
      className: _$$s3.flex.itemsCenter.$,
      children: d
    }), jsx("div", {
      children: t ? jsx(lv, {
        ...(a.isAccessibleExtensionRow && {
          isAccessibleButton: !0
        }),
        extension,
        active: i
      }) : jsx("span", {
        "aria-hidden": !0,
        children: o
      })
    })]
  });
}
function lw({
  manifestError: e
}) {
  return jsx("div", {
    className: _$$s3.alignLeft.font11.lh16.pl32.$,
    children: jsx(_$$E, {
      color: "danger",
      children: e.displayText
    })
  });
}
function lS({
  extension: e
}) {
  return jsx(_$$R7, {
    className: _$$s3.font11.alignLeft.colorTextSecondary.lh16.pl32.$,
    text: e.localFilePath.replace("/manifest.json", "")
  });
}
function lj({
  augmentedExtension: e,
  submenuRef: t
}) {
  let {
    extension
  } = e;
  let r = useDispatch();
  let [o, l] = useState(!1);
  let d = lx(extension);
  let c = _$$Pt2(extension.error?.type, extension);
  let {
    onAction,
    actionText
  } = function ({
    manifestError: e,
    augmentedExtension: t,
    submenuRef: i
  }) {
    let {
      close
    } = cq();
    let {
      extension: _extension
    } = t;
    let s = _$$q6(_extension);
    let o = U4(_extension);
    let l = S3({
      submenuIsShown: o,
      extension: _extension
    });
    let d = _$$t7(_extension, s);
    let c = _$$dR(_extension.plugin_id, "quick-actions");
    let u = Kp(t);
    let p = useCallback(() => {
      k0(_extension) ? _$$l2.user("insert-widget", () => lr(_extension)) : s && i ? l(i.current) : c();
      s || u();
      d() && close();
    }, [_extension, s, i, l, c, u, d, close]);
    return e ? {
      onAction: () => e.action(),
      actionText: e.displayText
    } : {
      onAction: p,
      actionText: getI18nString("qa.extensions.run")
    };
  }({
    manifestError: c,
    augmentedExtension: e,
    submenuRef: t
  });
  let h = useCallback(() => {
    if (d) {
      r(_$$oB2());
      return;
    }
    onAction();
  }, [d, onAction, r]);
  let m = H5.LOCAL;
  let f = _$$D2({
    source: m,
    text: actionText,
    onAction: h,
    augmentedExtension: e
  });
  let g = lb(o);
  let _ = lC(extension);
  let x = g ? _ : f;
  let y = _$$o(_$$nt.quickActionsA11y);
  let b = jsxs(Fragment, {
    children: [!c && jsx(lS, {
      extension
    }), c && jsx(lw, {
      manifestError: c
    })]
  });
  let C = jsxs(Fragment, {
    children: [jsx(Xq, {
      augmentedExtension: e
    }), jsx(lE, {
      augmentedExtension: e
    })]
  });
  return y ? jsx(_$$p4, {
    hasNestedButton: !0,
    primaryAction: x,
    setActive: l,
    children: (i, r) => jsxs(Fragment, {
      children: [jsxs("div", {
        className: _$$s3.flex.flexColumn.wFull.$,
        children: [jsx(lT, {
          augmentedExtension: e,
          hasFauxFocus: o,
          isAccessibleExtensionRow: !0,
          onClick: r,
          onFocus: i,
          optionsActive: g,
          submenuRef: t
        }), b]
      }), C]
    })
  }) : jsxs(_$$p4, {
    primaryAction: x,
    setActive: l,
    children: [jsxs("div", {
      className: _$$s3.flex.flexColumn.wFull.$,
      children: [jsx(lT, {
        augmentedExtension: e,
        hasFauxFocus: o,
        optionsActive: g,
        submenuRef: t
      }), b]
    }), C]
  });
}
function lI({
  augmentedExtension: e,
  submenuRef: t
}) {
  let {
    extension,
    canRun,
    canRequest
  } = e;
  let l = useDispatch();
  let [d, c] = useState(!1);
  let u = lx(extension);
  let {
    onAction,
    actionText
  } = _$$m2({
    augmentedExtension: e,
    submenuRef: t
  });
  let m = H5.PUBLISHED;
  let f = _$$D2({
    source: m,
    text: actionText,
    onAction: () => {
      if (u) {
        l(_$$oB2());
        return;
      }
      onAction();
    },
    augmentedExtension: e
  });
  let g = lb(d);
  let _ = lC(extension);
  let x = g ? _ : f;
  let y = _$$o(_$$nt.quickActionsA11y);
  if (!canRun && !canRequest) return null;
  let b = jsxs(Fragment, {
    children: [jsx(Xq, {
      augmentedExtension: e
    }), jsx(lE, {
      augmentedExtension: e
    })]
  });
  return y ? jsx(_$$p4, {
    hasNestedButton: !0,
    primaryAction: x,
    setActive: c,
    children: (i, r) => jsxs(Fragment, {
      children: [jsx("div", {
        className: _$$s3.flex.flexColumn.wFull.$,
        children: jsx(lT, {
          augmentedExtension: e,
          hasFauxFocus: d,
          isAccessibleExtensionRow: !0,
          onClick: r,
          onFocus: i,
          optionsActive: g,
          submenuRef: t
        })
      }), b]
    })
  }) : jsxs(_$$p4, {
    primaryAction: x,
    setActive: c,
    children: [jsx(lT, {
      augmentedExtension: e,
      hasFauxFocus: d,
      optionsActive: g,
      submenuRef: t
    }), b]
  });
}
function lk(e) {
  let t = useDispatch();
  let i = QZ();
  return hasDesktopAPI() && [BY.DEVELOPMENT, BY.ALL].includes(e) ? [{
    itemKey: "newPlugin",
    text: getI18nString("whiteboard.inserts.plugin_development_options_new_plugin"),
    svg: _$$e2,
    onAction: () => {
      t(_$$Lo());
      Y5.dispatch(_$$to({
        type: _$$h5,
        data: {
          resourceType: bD.PLUGIN
        }
      }));
    }
  }, i ? {
    itemKey: "newWidget",
    text: getI18nString("whiteboard.inserts.widget_development_options_new_widget"),
    svg: _$$e2,
    onAction: () => {
      t(_$$Lo());
      Y5.dispatch(_$$to({
        type: _$$h5,
        data: {
          resourceType: bD.WIDGET
        }
      }));
    }
  } : null, {
    itemKey: "importFromManifest",
    text: getI18nString("whiteboard.inserts.development_options_import"),
    svg: _$$R,
    onAction: () => t(JZ({
      resourceType: "unknown"
    }))
  }].filter(isNotNullish) : [];
}
function lN({
  itemKey: e,
  text: t,
  svg: i,
  onAction: r
}) {
  let a = _$$OX();
  let s = H5.ACTION;
  let o = _$$D2({
    source: s,
    onAction: t => {
      let {
        target
      } = t;
      PV({
        action: e,
        isAi: !1,
        module: Jc.EXTENSIONS,
        qaVersion: $L,
        rankingAlgorithm: _$$eg(Jc.EXTENSIONS),
        searchPosition: target?.index ?? 0,
        isPlugin: !1,
        numSearchResults: a.numResults,
        searchQuery: a.searchQuery,
        moduleFilters: a.moduleFilters
      });
      r();
    },
    augmentedExtension: null
  });
  return jsx(_$$p4, {
    primaryAction: o,
    children: jsx("div", {
      className: _$$s3.flex.itemsCenter.alignLeft.wFull.justifyBetween.$,
      children: jsxs("div", {
        className: _$$s3.flex.$,
        children: [jsx(i, {}), jsx("div", {
          className: _$$s3.ml8.$,
          children: t
        })]
      })
    })
  });
}
let lL = "button_with_faux_focus--button--4UzJZ";
let lR = "button_with_faux_focus--icon--3ofHG";
let lD = "button_with_faux_focus--buttonText--eXi6z";
let lM = "button_with_faux_focus--buttonContent--QYGhy";
let lP = "button_with_faux_focus--shortcut--XSTpu";
let lF = "button_with_faux_focus--regularSize--PRZRN";
let lB = "button_with_faux_focus--largeSize--KbVb-";
let lU = "button_with_faux_focus--wideSize--vAeP3";
let lG = "button_with_faux_focus--largeWideSize--7umaZ";
let lK = "button_with_faux_focus--outlineStyle--HbkS5";
let lH = "button_with_faux_focus--fauxFocus--ydUPp";
let lz = "button_with_faux_focus--solidStyle--JXrgr";
let lV = "button_with_faux_focus--primary--z-mFg button_with_faux_focus--solidStyle--JXrgr";
let lW = "button_with_faux_focus--secondary--nFRZl button_with_faux_focus--outlineStyle--HbkS5";
let lY = "button_with_faux_focus--destructive--mKBEK button_with_faux_focus--solidStyle--JXrgr";
let lJ = "button_with_faux_focus--destructiveSecondary--Wtsn1 button_with_faux_focus--outlineStyle--HbkS5";
let lq = "button_with_faux_focus--signup--CPfrM button_with_faux_focus--solidStyle--JXrgr";
let lX = "button_with_faux_focus--link--qW4X-";
let lZ = "button_with_faux_focus--destructiveLink--xx-J5 button_with_faux_focus--link--qW4X-";
let lQ = forwardRef(({
  active: e,
  children: t,
  size: i = "regularSize",
  variant: a,
  ...s
}, o) => jsx(_$$E6, {
  className: rB()({
    [lL]: !0,
    [r[a ?? "primary"]]: !0,
    [r[i]]: !0,
    [lH]: e
  }),
  ...s,
  ref: o,
  children: jsx("span", {
    className: lD,
    children: jsx("span", {
      className: lM,
      children: t
    })
  })
}));
function l0({
  action: e,
  children: t,
  dataTestId: i,
  variant: r
}) {
  let s = useRef(null);
  let {
    active,
    target
  } = _$$H({
    ref: s,
    itemsPerRow: 2
  });
  let d = useMemo(() => ({
    shortcuts: [{
      key: Uz.ENTER
    }],
    onAction: e
  }), [e]);
  let {
    onClickCallback
  } = _$$k4({
    primaryAction: d,
    active,
    actionLabel: !1,
    target
  });
  return jsx(lQ, {
    ref: s,
    onClick: e => {
      e.stopPropagation();
      onClickCallback();
    },
    htmlAttributes: {
      "data-testid": i
    },
    variant: r,
    active,
    children: t
  });
}
function l1({
  extension: e
}) {
  let t = R_(e);
  let i = _$$JB(e);
  return jsxs("div", {
    className: _$$s3.mx8.mb8.p8.bRadius8.flex.justifyBetween.gap4.colorBgInfo.$,
    "data-testid": "extension-invite-row",
    children: [jsxs("div", {
      className: _$$s3.flex.gap8.itemsCenter.font11.lh16.$,
      children: [jsx(H8, {
        user: e.creator,
        size: Pf.MEDIUM
      }), jsx(_$$e7, {
        resource: e
      })]
    }), jsxs("div", {
      className: _$$s3.flex.gap4.$,
      children: [jsx(l0, {
        action: i,
        dataTestId: "decline-invite-button",
        variant: "secondary",
        children: jsx(_$$E, {
          fontSize: 11,
          children: renderI18nText("community.detail_view.decline")
        })
      }), jsx(l0, {
        action: t,
        dataTestId: "accept-invite-button",
        children: jsx(_$$E, {
          fontSize: 11,
          children: renderI18nText("community.detail_view.accept")
        })
      })]
    })]
  });
}
function l2({
  invitedPlugins: e,
  invitedWidgets: t,
  selectedFilter: i
}) {
  let r = function ({
    invitedPlugins: e,
    invitedWidgets: t,
    selectedFilter: i
  }) {
    switch (i) {
      case BY.PLUGINS:
        return e;
      case BY.WIDGETS:
        return t;
      case BY.ALL:
      case BY.DEVELOPMENT:
        return [...e, ...t];
      case BY.FROM_ORG:
        return [];
      default:
        throwTypeError(i);
    }
  }({
    invitedPlugins: e,
    invitedWidgets: t,
    selectedFilter: i
  });
  return 0 === r.length ? null : jsx("div", {
    "data-testid": "extension-invite-section",
    className: _$$s3.flex.flexColumn.$,
    children: jsx(_$$B6.Section, {
      header: getI18nString("community.detail_view.invitations"),
      children: r.map(e => jsx(l1, {
        extension: e
      }, e.id))
    })
  });
}
function l8({
  augmentedExtension: e
}) {
  let {
    extension,
    publishedExtension
  } = e;
  let r = k0(extension) ? renderI18nText("qa.extensions.widget") : renderI18nText("qa.extensions.plugin");
  let a = publishedExtension?.unique_run_count ?? 0;
  let s = publishedExtension?.like_count ?? 0;
  let o = publishedExtension ? jsx(_$$o5, {
    publishedExtension,
    showTooltip: !1
  }) : null;
  let l = _$$g5(publishedExtension);
  return jsx("div", {
    className: _$$s3.flex.flexColumn.colorTextSecondary.textBodyMedium.$,
    children: jsxs("div", {
      className: _$$s3.flex.flexRow.$,
      children: [r, jsx(l9, {}), jsx(_$$B2, {
        svg: _$$A15,
        className: _$$s3.mx2.colorIconSecondary.$
      }), jsx("div", {
        className: _$$s3.ml2.$,
        children: getI18nString("qa.extensions.num_users", {
          numUsers: a,
          numUsersStr: $M(a)
        })
      }), jsx(l9, {}), jsx(_$$B2, {
        svg: _$$A16,
        className: _$$s3.colorIconSecondary.$,
        style: _$$sx.add({
          margin: "3px"
        }).$
      }), jsx("div", {
        className: _$$s3.ml2.$,
        children: $M(s)
      }), l && jsx(l9, {}), o]
    })
  });
}
function l9() {
  return jsx("div", {
    className: _$$s3.w1.hFull.mx6.$,
    style: _$$sx.add({
      backgroundColor: "var(--color-border-fs)"
    }).$,
    "data-testid": "divider"
  });
}
function de({
  augmentedExtension: e
}) {
  let {
    extension,
    canRun,
    canRequest
  } = e;
  let [s, o] = useState(!1);
  let l = _$$O5({
    extension: e,
    preloadImage: s
  });
  let d = H5.PUBLISHED_WITH_DETAILS;
  let c = _$$D2({
    source: d,
    text: getI18nString("qa.extensions.view_details"),
    onAction: l,
    augmentedExtension: e
  });
  if (!canRun && !canRequest) return null;
  let u = G8(extension, _$$$J);
  return jsx(_$$p4, {
    primaryAction: c,
    setActive: o,
    children: jsxs("div", {
      className: _$$s3.flex.flexColumn.alignLeft.wFull.$,
      children: [jsxs("div", {
        className: _$$s3.flex.itemsCenter.overflowHidden.$,
        children: [jsx(la, {
          augmentedExtension: e
        }), jsx(dt, {
          augmentedExtension: e
        })]
      }), jsxs("div", {
        className: _$$s3.flex.flexColumn.overflowHidden.ml32.$,
        children: [jsx(_$$G, {
          text: u,
          className: _$$s3.mb4.colorTextSecondary.textBodyMedium.$,
          showTooltip: _$$i5.NEVER
        }), jsx(l8, {
          augmentedExtension: e
        })]
      })]
    })
  });
}
function dt({
  augmentedExtension: e
}) {
  let {
    extension
  } = e;
  let i = oN(e);
  return jsxs("div", {
    className: _$$s3.flex.itemsCenter.ml8.$,
    children: [jsx("div", {
      className: _$$s3.pr8.colorText.textBodyLarge.$,
      style: _$$sx.add({
        maxWidth: i ? "205px" : "300px"
      }).$,
      children: jsx(_$$G, {
        text: extension.name
      })
    }), i && jsx("div", {
      style: _$$sx.add({
        maxWidth: "110px"
      }).$,
      children: jsx(oA, {
        text: i.text,
        variant: i.variant
      })
    })]
  });
}
function di({
  augmentedExtensions: e,
  header: t,
  showExtensionDetails: i = !1,
  dataTestId: r
}) {
  let s = e.map(e => {
    let t = createRef();
    let {
      key
    } = e;
    return JT(e) ? jsx(lj, {
      augmentedExtension: e,
      submenuRef: t
    }, key) : i ? jsx(de, {
      augmentedExtension: e
    }, key) : jsx(lI, {
      augmentedExtension: e,
      submenuRef: t
    }, key);
  });
  return jsxs("div", {
    "data-testid": r,
    className: _$$s3.flex.flexColumn.$,
    children: [t && jsx(_$$B6.Section, {
      header: t,
      children: s
    }), !t && s]
  });
}
function dr({
  actions: e
}) {
  return 0 === e.length ? null : jsx("div", {
    "data-testid": "extension-actions-section",
    className: _$$s3.flex.flexColumn.$,
    children: e.map(({
      itemKey: e,
      ...t
    }) => jsx(lN, {
      itemKey: e,
      ...t
    }, e))
  });
}
function dn({
  extensions: e
}) {
  let t = useMemo(() => [...e].sort(bL), [e]);
  return 0 === t.length ? null : jsx(di, {
    augmentedExtensions: t,
    dataTestId: "my-extensions-section"
  });
}
function da() {
  let e = QZ();
  return jsx("div", {
    className: _$$s3.flex.wFull.mt16.justifyCenter.alignCenter.colorTextSecondary.$,
    "data-testid": "no-extensions-found",
    children: e ? renderI18nText("qa.no_plugins_widgets_found") : renderI18nText("qa.no_plugins")
  });
}
function ds({
  availableExtensions: e,
  selectedFilter: t
}) {
  let i = Ev();
  let r = useAtomWithSubscription(Lk);
  let o = useAtomWithSubscription(_$$dd);
  let l = useAtomWithSubscription(Rt);
  let d = useAtomWithSubscription(Q8);
  let u = useSelector(_$$l);
  let p = f6();
  let h = wW();
  let {
    loaded,
    extensions
  } = function (e) {
    let t = Oy();
    let {
      loaded: _loaded,
      extensions: _extensions
    } = function () {
      let e = useDispatch();
      let t = _$$lg();
      let [i, r] = useState([]);
      let [n, o] = useState(!1);
      let l = useMemo(() => {
        let e = {
          resourceType: [vt.PLUGIN, vt.WIDGET],
          editorType: function (e) {
            switch (e) {
              case FFileType.SLIDES:
                return _$$q5.SLIDES;
              case FFileType.COOPER:
                return _$$q5.COOPER;
              default:
                return _$$q5.DESIGN;
            }
          }(t),
          caller: _$$z4.SUGGESTED_EXTENSIONS,
          sortBy: _$$e6.Browse.POPULAR,
          includeContent: !0
        };
        return [{
          ...e,
          price: _$$C4.FREE
        }, {
          ...e,
          price: _$$C4.PAID
        }];
      }, [t]);
      let d = useCallback(async () => {
        let e;
        let t;
        try {
          [e, t] = await Promise.all([M4.fetch(_$$a6.ResourcesPaginatedQuery(l[0])), M4.fetch(_$$a6.ResourcesPaginatedQuery(l[1]))]);
        } catch (e) {
          o(!1);
          r([]);
          return;
        }
        let i = e.map(e => $9(e)).filter(e => !!e);
        let n = t.map(e => $9(e)).filter(e => !!e);
        r(shuffle([...shuffle(i).slice(0, 10), ...shuffle(n).slice(0, 5)]));
        o(!0);
      }, [l]);
      useEffect(() => {
        d();
      }, [d]);
      useEffect(() => {
        e(Qi({
          publishedPlugins: i,
          src: "Quick Actions V2 suggested extensions"
        }));
      }, [i, e]);
      return {
        loaded: n,
        extensions: useMemo(() => i.map(e => Ar(e)).filter(e => !!e), [i])
      };
    }();
    let n = _extensions.map(e => t(e, Ag.COMMUNITY));
    return {
      loaded: _loaded,
      extensions: ZM([...e, ...n])
    };
  }(e);
  let {
    myExtensions,
    suggestedExtensions,
    otherExtensionsFromOrg
  } = function (e, t) {
    let i = vA(t);
    let r = [];
    let n = [];
    let a = [];
    e.filter(e => e.canRun || e.canRequest).filter(e => i(e)).forEach(e => {
      wj(e) ? r.push(e) : t === BY.FROM_ORG && jb(e) || t !== BY.FROM_ORG && Nf(e) ? n.push(e) : t === BY.FROM_ORG && a.push(e);
    });
    let s = 0;
    let o = e => {
      let t = [];
      for (let i of e) {
        if (s >= 25) break;
        t.push(i);
        s += 1;
      }
      return t;
    };
    return {
      myExtensions: o(r),
      suggestedExtensions: o(n),
      otherExtensionsFromOrg: o(a)
    };
  }(extensions, t);
  let y = lk(t);
  let b = myExtensions.length + suggestedExtensions.length + otherExtensionsFromOrg.length + y.length;
  let v = t === BY.DEVELOPMENT;
  let S = t === BY.FROM_ORG;
  let I = loaded || S || v;
  let N = function ({
    myExtensions: e,
    suggestedExtensions: t,
    otherExtensionsFromOrg: i,
    extensionActions: r
  }) {
    let n = HD("My Extensions", e);
    let a = HD("Suggested", t);
    let s = HD("Other Extensions from Org", i);
    let o = NH(r);
    return _$$i2([n, a, s, o]);
  }({
    myExtensions,
    suggestedExtensions,
    otherExtensionsFromOrg,
    extensionActions: y
  });
  return (useEffect(() => {
    r === Jc.EXTENSIONS && o && I && i({
      quickActionsSessionId: o,
      quickActionsQueryId: l,
      searchQuery: "",
      numSearchResults: b,
      currentSelection: u,
      module: r,
      moduleFilters: t,
      qaVersion: $L,
      searchQueryResults: N
    });
  }, [i, r, o, I, l, b, u, t, N]), _$$iC({
    activeTab: Jc.EXTENSIONS,
    query: d,
    resultsCount: b
  }), 0 === b) ? jsx(da, {}) : jsx(M6, {
    numResults: b,
    moduleFilters: t,
    children: jsxs(_$$B6, {
      primary: !0,
      resultCount: b,
      dataTestId: "browseExtensions",
      children: [jsx(l2, {
        invitedPlugins: p,
        invitedWidgets: h,
        selectedFilter: t
      }), jsx(dn, {
        extensions: myExtensions
      }), jsx(dr, {
        actions: y
      }), jsx(dl, {
        extensions: suggestedExtensions,
        hasLoaded: I
      }), S && jsx(dd, {
        extensions: otherExtensionsFromOrg
      })]
    })
  });
}
function dl({
  extensions: e,
  hasLoaded: t
}) {
  return t ? 0 === e.length ? null : jsx(di, {
    augmentedExtensions: e,
    header: getI18nString("qa.suggested"),
    showExtensionDetails: !0
  }) : jsx("div", {
    className: _$$s3.p8.$,
    children: jsx(_$$R6, {})
  });
}
function dd({
  extensions: e
}) {
  let t = _$$sZ();
  return t && 0 !== e.length ? jsx(di, {
    augmentedExtensions: e,
    header: getI18nString("qa.other_extensions_from_org", {
      org_name: t.name
    }),
    showExtensionDetails: !0
  }) : null;
}
var du = dc;
let dy = M4.Query({
  fetch: async e => (await $W.getExtensions(e)).data.meta,
  enabled: () => !getFeatureFlags().ext_extended_plugin_editor_types,
  output: ({
    data: e
  }) => ({
    public: e.results.$$public.map(e => e.model),
    private: e.results.$$private.map(e => e.model)
  })
});
let db = M4.Query({
  fetch: async e => {
    let t = {
      ...e,
      limit_associations: !0,
      sort_by: _$$e6.Search.RELEVANCY,
      resource_type: [vt.PLUGIN, vt.WIDGET],
      include_content: !0,
      consolidate_org_search: !0
    };
    return (await $W.getResources(t)).data.meta;
  },
  enabled: () => !!getFeatureFlags().ext_extended_plugin_editor_types,
  output: ({
    data: e
  }) => {
    let {
      pass,
      fail
    } = _$$j3(e.results, e => Gk(e.model));
    return {
      public: fail.map(({
        model: e
      }) => e.content?.plugin || e.content?.widget).filter(e => !!e),
      private: pass.map(({
        model: e
      }) => e.content?.plugin || e.content?.widget).filter(e => !!e)
    };
  }
});
function dC() {
  return jsx("div", {
    className: "x78zum5 xh8yej3 xw7yly9 xl56j7k x2b8uid x1n0bwc9",
    children: getI18nString("search.error.max_query_length_exceeded")
  });
}
function dv({
  availableExtensions: e,
  selectedFilter: t
}) {
  let i = Ev();
  let r = useAtomWithSubscription(Lk);
  let l = useAtomWithSubscription(_$$dd);
  let d = useAtomWithSubscription(Q8);
  let [u] = _$$A17(d, 300);
  let p = u.trim();
  let h = useAtomWithSubscription(Rt);
  let m = useSelector(_$$l);
  let f = useDispatch();
  let {
    loading,
    publicExtensions,
    privateExtensions,
    localExtensions
  } = function (e) {
    let {
      status,
      results,
      errors
    } = function (e) {
      let t = function (e) {
        switch (e) {
          case FEditorType.Design:
          case FEditorType.Illustration:
            return _$$k6.Editors.FIGMA;
          case FEditorType.Whiteboard:
            return _$$k6.Editors.FIGJAM;
          case FEditorType.DevHandoff:
            return _$$k6.Editors.DEV_MODE;
          case FEditorType.Slides:
            return _$$k6.Editors.SLIDES;
          case FEditorType.Sites:
            return getFeatureFlags().ext_extended_plugin_editor_types ? _$$k6.Editors.SITES : _$$k6.Editors.ALL;
          case FEditorType.Cooper:
            return getFeatureFlags().ext_extended_plugin_editor_types ? _$$k6.Editors.COOPER : _$$k6.Editors.ALL;
          case null:
          case FEditorType.Figmake:
            return _$$k6.Editors.ALL;
          default:
            throwTypeError(e);
        }
      }(my());
      let i = U5();
      let r = dq() ?? void 0;
      let [{
        status: n,
        data: a,
        errors: s
      }] = IT(getFeatureFlags().ext_extended_plugin_editor_types ? db({
        query: e.trim(),
        resourceEditorType: _$$S2(t),
        orgId: i ? r : void 0,
        maxNumResults: 20
      }) : dy({
        query: e.trim(),
        editorType: t,
        orgSearch: i,
        currentOrgId: r,
        maxNumResults: 20
      }), {
        enabled: e.trim().length > 0 && !GX(e.trim()),
        key: "searchPublishedExtensionsQuery"
      });
      return {
        status: n,
        results: a || {
          public: [],
          private: []
        },
        errors: s
      };
    }(e);
    let n = function (e) {
      let t = $1();
      let i = useMemo(() => Object.values(t), [t]);
      let r = useMemo(() => new Ef(i, Ih), [i]);
      return useMemo(() => r.search(e), [r, e]);
    }(e);
    return useMemo(() => {
      switch (status) {
        case "loading":
          return {
            loading: !0,
            privateExtensions: [],
            publicExtensions: [],
            localExtensions: []
          };
        case "loaded":
          return {
            loading: !1,
            publicExtensions: results.$$public,
            privateExtensions: results.$$private,
            localExtensions: n
          };
        case "disabled":
          return {
            loading: !1,
            privateExtensions: [],
            publicExtensions: [],
            localExtensions: []
          };
        case "errors":
          reportError(_$$e.EXTENSIBILITY, Error("[useSearchExtensions] Unable to fetch search results"), {
            tags: {
              status
            },
            extra: {
              errors
            }
          });
          return {
            loading: !1,
            privateExtensions: [],
            publicExtensions: [],
            localExtensions: []
          };
        default:
          throwTypeError(status);
      }
    }, [results?.private, results?.public, n, status, errors]);
  }(p);
  let b = function (e, t) {
    let i = lk(t);
    let r = useMemo(() => new Ef(i, zd), [i]);
    return useMemo(() => r.search(e), [r, e]);
  }(p, t);
  useEffect(() => {
    let e = [...publicExtensions, ...privateExtensions];
    0 !== e.length && f(Qi({
      publishedPlugins: e,
      src: "Quick actions"
    }));
  }, [f, privateExtensions, publicExtensions]);
  let {
    myExtensions,
    fromOrgExtensions,
    communityExtensions
  } = dw(function ({
    publicExtensions: e,
    privateExtensions: t,
    localExtensions: i
  }) {
    let r = Oy();
    return useMemo(() => {
      let n = (e, t) => e.map(e => Ar(e)).filter(e => !!e).map(e => r(e, t));
      let a = n(e, Ag.COMMUNITY);
      let s = n(t, Ag.ORG_PRIVATE);
      return [...i.map(e => r(e, Ag.LOCAL)), ...s, ...a];
    }, [r, i, t, e]);
  }({
    publicExtensions,
    privateExtensions,
    localExtensions
  }), e, t);
  let N = myExtensions.length + fromOrgExtensions.length + communityExtensions.length + b.length;
  let A = function ({
    myExtensions: e,
    actionItems: t,
    fromOrgExtensions: i,
    communityExtensions: r
  }) {
    let n = HD("My Extensions", e);
    let a = NH(t);
    let s = HD("From Org", i);
    let o = HD("From Community", r);
    return _$$i2([n, a, s, o]);
  }({
    myExtensions,
    actionItems: b,
    fromOrgExtensions,
    communityExtensions
  });
  return (useEffect(() => {
    r === Jc.EXTENSIONS && l && !loading && i({
      quickActionsSessionId: l,
      quickActionsQueryId: h,
      searchQuery: p,
      numSearchResults: N,
      currentSelection: m,
      module: r,
      moduleFilters: t,
      qaVersion: $L,
      searchQueryResults: A
    });
  }, [m, i, r, N, l, h, t, loading, A, p]), _$$iC({
    activeTab: Jc.EXTENSIONS,
    isLoading: loading,
    passthroughErrorMessage: GX(p) ? getI18nString("search.error.max_query_length_exceeded") : null,
    query: d,
    resultsCount: N
  }), loading) ? jsx(_$$R6, {}) : GX(p) ? jsx(dC, {}) : 0 === N ? jsx(da, {}) : jsx(M6, {
    numResults: N,
    moduleFilters: t,
    children: jsxs(_$$B6, {
      primary: !0,
      resultCount: N,
      children: [jsx(dn, {
        extensions: myExtensions
      }), jsx(dr, {
        actions: b
      }), jsx(dE, {
        extensions: fromOrgExtensions
      }), jsx(dT, {
        extensions: communityExtensions
      })]
    })
  });
}
function dE({
  extensions: e
}) {
  let t = _$$sZ();
  if (!t || 0 === e.length) return null;
  let [i, r] = du()(e, e => e.types.has(Ag.ORG_SAVED));
  let a = [...i, ...r];
  return jsx(di, {
    augmentedExtensions: a,
    header: getI18nString("qa.from_org_name", {
      org_name: t.name
    }),
    showExtensionDetails: !0,
    dataTestId: "from-org-extensions-section"
  });
}
function dT({
  extensions: e
}) {
  return 0 === e.length ? null : jsx(di, {
    augmentedExtensions: e,
    header: getI18nString("qa.from_community"),
    showExtensionDetails: !0,
    dataTestId: "community-extensions-section"
  });
}
let dw = (e, t, i) => {
  let r = vA(i);
  let n = useMemo(() => new Set(e.map(e => e.key)), [e]);
  let s = useMemo(() => {
    let i = [...e, ...t];
    return ZM(i);
  }, [t, e]);
  let o = [];
  let l = [];
  let d = [];
  s.filter(e => e.canRun || e.canRequest).filter(e => r(e)).filter(e => n.has(e.key)).forEach(e => {
    wj(e) ? o.push(e) : C5(e) ? l.push(e) : Nf(e) && d.push(e);
  });
  return {
    myExtensions: o,
    fromOrgExtensions: l,
    communityExtensions: d
  };
};
function dS({
  hasLoadedExtensions: e,
  extensions: t,
  selectedFilter: i
}) {
  let r = useAtomWithSubscription(Q8);
  let a = JB();
  let s = AY(_$$t6);
  return (_$$h(() => () => {
    a();
    s();
  }), e) ? r.trim() ? jsx(dv, {
    availableExtensions: t,
    selectedFilter: i
  }) : jsx(ds, {
    availableExtensions: t,
    selectedFilter: i
  }) : jsx(_$$R6, {});
}
function dI() {
  !function () {
    let e = useAtomWithSubscription(IH);
    let t = useAtomWithSubscription(_$$f);
    let {
      autoClose
    } = cq();
    let r = useCallback(() => {
      let e = debugState.getState();
      e.modalShown || e.dropdownShown || e.pickerShown || autoClose();
    }, [autoClose]);
    !function ({
      ref: e,
      handler: t,
      eventType: i = "mousedown",
      eventOptions: r,
      recordingKey: n,
      enabled: s
    }) {
      let o = useCallback(i => {
        if (!(i.target instanceof Node)) return;
        let r = i.target;
        r && r.isConnected && e && (Array.isArray(e) ? e.filter(e => !!(e && e.current)).every(e => e.current && !e.current.contains(r)) : e.current && !e.current.contains(r)) && t(i);
      }, [e, t]);
      let l = useHandleMouseEvent(n, i, o);
      useEffect(() => {
        if (e && s) {
          window.addEventListener(i, l, r);
          return () => {
            window.removeEventListener(i, l, r);
          };
        }
      }, [e, i, o, l, r, s]);
    }({
      ref: useMemo(() => [e, t], [e, t]),
      handler: () => setTimeout(r, 0),
      eventType: "mousedown",
      eventOptions: !0,
      recordingKey: "click-to-dismiss",
      enabled: !0
    });
  }();
  let {
    defaultViewTabsAvailable,
    defaultViewAssetsTabVisible
  } = gB();
  let [i, r] = useAtomValueAndSetter(Q8);
  let o = Xr(Rt);
  let [l, d] = useAtomValueAndSetter(_$$t6);
  let [u, p] = useAtomValueAndSetter(Lk);
  let {
    loaded,
    extensions
  } = useAtomWithSubscription(P_);
  let g = useDispatch();
  useEffect(() => g(_$$aq()), [g]);
  let _ = q5();
  let x = !!(defaultViewTabsAvailable && _?.canEdit);
  let y = _$$s4();
  let b = _$$V4();
  let v = _$$eH();
  _$$b({
    disabled: !x
  });
  let T = u === Jc.ASSETS;
  let {
    debouncedAssetSearch,
    clearAssetSearchAndCancelDebounce
  } = TC({
    debounceWait: 300
  });
  let {
    debouncedFragmentTextSearch,
    clearFragmentSearchAndCancelDebounce
  } = _$$S4({
    debounceWait: 300,
    entryPoint: G4.ACTIONS_ASSETS_TAB
  });
  let {
    debouncedFragmentTextSearch: _debouncedFragmentTextSearch,
    clearFragmentSearchAndCancelDebounce: _clearFragmentSearchAndCancelDebounce
  } = _$$S4({
    debounceWait: 300,
    entryPoint: G4.ACTIONS_ASSETS_TAB,
    isCommunity: !0
  });
  let es = useCallback(e => {
    r(e);
    o(_$$g2());
    _$$lw();
    x && (T || 0 === e.length) && (debouncedAssetSearch(e, {
      type: _$$I2.ALL
    }), b && debouncedFragmentTextSearch(e), v && _debouncedFragmentTextSearch(e));
  }, [r, o, debouncedAssetSearch, debouncedFragmentTextSearch, x, T, b, v, _debouncedFragmentTextSearch]);
  let eo = useCallback(() => {
    r("");
    x && (clearAssetSearchAndCancelDebounce(), b && clearFragmentSearchAndCancelDebounce(), v && _clearFragmentSearchAndCancelDebounce());
  }, [r, x, clearAssetSearchAndCancelDebounce, clearFragmentSearchAndCancelDebounce, b, v, _clearFragmentSearchAndCancelDebounce]);
  let el = useCallback(e => {
    p(e);
    _$$lw();
  }, [p]);
  let ed = useCallback(() => {
    mX(i, () => el(Jc.ASSETS), b, v, y, G4.ACTIONS_ASSETS_TAB);
  }, [i, el, b, v, y]);
  let ec = useRef(null);
  let eu = _$$U3(b);
  let ep = useSelector(Eh);
  let eh = QZ();
  useEffect(() => {
    eh || l !== BY.ALL && l !== BY.WIDGETS || d(BY.PLUGINS);
  }, [eh, l, d]);
  let em = jsxs(fu, {
    value: u,
    onChange: _$$lQ,
    numItems: ep ? 3 : 2,
    children: [jsx(_$$oz, {
      tabId: Jc.ALL,
      onAction: () => el(Jc.ALL),
      navigatingShortcut: {
        key: Uz.KEY_1,
        modifier: [xH.ALT]
      },
      children: renderI18nText("qa.all")
    }), defaultViewAssetsTabVisible && jsx(_$$oz, {
      tabId: Jc.ASSETS,
      onAction: ed,
      navigatingShortcut: {
        key: Uz.KEY_2,
        modifier: [xH.ALT]
      },
      children: renderI18nText("qa.assets")
    }), ep && jsx(_$$oz, {
      tabId: Jc.EXTENSIONS,
      onAction: () => el(Jc.EXTENSIONS),
      navigatingShortcut: {
        key: Uz.KEY_3,
        modifier: [xH.ALT]
      },
      children: eh ? renderI18nText("qa.plugins_widgets") : renderI18nText("qa.plugins")
    })]
  });
  let ef = useCallback(e => {
    (v || b) && jk(e);
  }, [b, v]);
  let eg = _M({
    action: _$$JT.FIND_INSPIRATION,
    clientLifecycleId: void 0
  });
  let e_ = v || b ? jsx("div", {
    className: _$$s3.flex.$,
    children: jsx(hc, {
      entryPoint: G4.ACTIONS_ASSETS_TAB,
      aiTrackingContext: eg,
      recordingKey: generateRecordingKey("defaultView", "visualSearchIconButton")
    })
  }) : void 0;
  let ex = u === Jc.EXTENSIONS;
  let ey = Xr(FX);
  let eb = useId();
  let eC = _$$o(_$$nt.quickActionsA11y);
  return jsx(_$$n, {
    height: wC,
    recordingKey: "defaultView",
    children: jsxs(Do, {
      children: [jsx(vj, {
        searchQuery: i,
        onSearchChange: es,
        onClear: eo,
        onPaste: ef,
        endEnhancer: e_,
        ref: ec,
        placeholder: eC && i || !T ? void 0 : eu,
        descriptorId: eC ? eb : void 0
      }), eC && jsx(mr, {
        id: eb
      }), (x || ex) && jsx("div", {
        className: _$$s3.px8.pb8.$,
        children: jsxs(_$$b2, {
          primary: !1,
          gap: 8,
          fullWidth: !0,
          justify: "space-between",
          children: [x && em, ex && jsx(oH, {
            extensionFilter: l,
            setExtensionFilter: d,
            canViewWidgets: eh
          })]
        })
      }), jsx(_$$n.Body, {
        children: function () {
          switch (u) {
            case Jc.ALL:
              ey(!0);
              return jsx(oB, {
                setActiveTab: el
              });
            case Jc.ASSETS:
              return jsx(_$$t2, {
                searchHandle: ec
              });
            case Jc.EXTENSIONS:
              return jsx(dS, {
                extensions,
                hasLoadedExtensions: loaded,
                selectedFilter: l
              });
            default:
              return throwTypeError(u);
          }
        }()
      })]
    })
  });
}
function dk() {
  let {
    current
  } = cq();
  let t = jh();
  return (_$$h(() => () => {
    t();
  }), current) ? jsx(Fragment, {
    children: current.module
  }) : jsx(dI, {});
}
let dN = (e, t) => {
  let i = _$$x();
  F$(i) && Mq({
    ...t,
    qaVersion: $L,
    quickActionsSessionId: e,
    timeToShowModal: globalPerfTimer.tryStop(mP) || 0,
    module: i
  });
};
function dA() {
  !function () {
    let e = Xr(P_);
    let t = FG();
    let i = AR();
    let {
      loaded,
      userPlugins,
      userWidgets,
      orgPlugins,
      orgWidgets
    } = q3();
    let d = _$$ll();
    let u = U6();
    let p = _$$h2("plugin");
    let h = _$$h2("widget");
    let m = $1();
    let f = Oy();
    let g = useMemo(() => [{
      extensions: t,
      extensionType: Ag.RECENT
    }, {
      extensions: i,
      extensionType: Ag.RECENT
    }, {
      extensions: Object.values(userPlugins),
      extensionType: Ag.USER_SAVED
    }, {
      extensions: Object.values(userWidgets),
      extensionType: Ag.USER_SAVED
    }, {
      extensions: Object.values(orgPlugins),
      extensionType: Ag.ORG_SAVED
    }, {
      extensions: Object.values(orgWidgets),
      extensionType: Ag.ORG_SAVED
    }, {
      extensions: Object.values(d),
      extensionType: Ag.ALLOWLIST
    }, {
      extensions: Object.values(u),
      extensionType: Ag.ALLOWLIST
    }, {
      extensions: p,
      extensionType: Ag.ORG_PRIVATE
    }, {
      extensions: h,
      extensionType: Ag.ORG_PRIVATE
    }, {
      extensions: Object.values(m),
      extensionType: Ag.LOCAL
    }], [t, i, userPlugins, userWidgets, orgPlugins, orgWidgets, d, u, p, h, m]);
    let _ = useMemo(() => {
      let e = loaded ? g.map(({
        extensions: e,
        extensionType: t
      }) => e.map(e => f(e, t))).flat() : [];
      return ZM(e);
    }, [g, f, loaded]);
    useEffect(() => {
      loaded && _ && e({
        loaded,
        extensions: _
      });
    }, [loaded, _, e]);
  }();
  let e = Xr(Bu);
  let t = useAtomWithSubscription(_$$rE);
  let i = useAtomWithSubscription(_$$dd);
  _$$h(() => (e(!0), i && dN(i, t || void 0), () => {
    e(!1);
  }));
  let r = useAtomWithSubscription(Kh);
  let [s, o] = useState(!1);
  let {
    close
  } = cq();
  useEffect(() => {
    dO(r) && o(!0);
    s && !dO(r) && close();
  }, [close, r, s]);
  return jsx(_$$s, {
    children: jsx(_$$s2, {
      name: "quickActions",
      recordingKey: "quickActions",
      children: jsx(_$$p, {
        children: jsx(dk, {})
      })
    })
  });
}
function dO(e) {
  return e === NLJ.SELECT;
}
function dM(e) {
  let t = _$$A(KY, e.timeoutMs);
  let i = _$$el();
  let [r, s] = useState(!1);
  let o = useRef(null);
  useEffect(() => (r ? t.cancel() : t(), () => {
    t.cancel();
  }), [t, r]);
  useEffect(() => {
    i && (t.cancel(), t());
  }, [i, t]);
  return jsx("div", {
    ref: o,
    onPointerEnter: () => {
      s(!0);
    },
    onPointerLeave: () => {
      s(!1);
    },
    children: e.children
  });
}
function dP() {
  let e = debugState.getState();
  let t = _$$l(e);
  let i = e.openFile?.key ?? "";
  let r = v5(e.selectedView, null);
  let s = _$$FX();
  let o = [...or(), ...s];
  let l = eP();
  let u = iD(l, o);
  let p = _$$el();
  let m = p ? u.list(l).find(e => e.action === p.action) : null;
  let f = m?.action;
  let _ = m ? _$$ah(m) : null;
  let x = J8(m?.action, p?.payload);
  let y = Hr(m?.action);
  let b = useCallback(() => {
    f && (Y5.triggerAction(f, p?.payload), KY());
  }, [f, p?.payload]);
  let C = useAtomWithSubscription(_$$dd);
  let v = vI();
  let T = PE();
  _$$K4();
  let w = useMemo(() => ({
    action: f,
    source: "toast",
    toastType: p?.payload?.source,
    quickActionsSessionId: C,
    currentSelection: t,
    qaVersion: $L,
    fileKey: i,
    productType: r,
    role: v,
    hasAiFeatureAccess: T
  }), [f, C, t, i, r, v, T, p?.payload?.source]);
  let S = useRef(w);
  let I = _$$dL(p);
  useEffect(() => {
    S.current = w;
  }, [w]);
  useEffect(() => {
    f && I && trackEventAnalytics(Sq, S.current, {
      forwardToDatadog: !0
    });
  }, [f, I]);
  f4(e => {
    p?.guid && !e.mirror.sceneGraphSelection[p.guid] && KY();
  });
  let O = useCallback(() => {
    if (!m) return;
    let e = m?.action;
    let t = [_$$JT.MAGIC_LINK, _$$JT.FIND_INSPIRATION].includes(e);
    f === _$$JT.CONTENT_FILL && CT8?.dismissContentFillNudge();
    KY({
      dismissedAction: t ? e : void 0
    });
  }, [m, f]);
  if (!I) return null;
  if (!m) {
    console.warn("No menu item found for suggested action.");
    return null;
  }
  let L = _$$O4(m);
  return jsx(_$$s2, {
    name: "quickActions",
    recordingKey: "quickActions",
    children: jsx(_$$p, {
      children: jsx(_$$n, {
        children: jsx(dM, {
          timeoutMs: 1e4,
          children: jsx(_$$y4, {
            onDismiss: O,
            recordingKey: "SuggestionToast",
            children: jsxs(_$$B, {
              justify: "space-between",
              align: "center",
              fullWidth: !0,
              children: [jsxs(_$$B, {
                gap: 4,
                align: "center",
                children: [jsx("span", {
                  style: {
                    "--color-icon": "var(--color-icon-brand)"
                  },
                  children: y
                }), jsxs(_$$B, {
                  align: "center",
                  children: [jsx("span", {
                    className: _$$s3.textBodyMediumStrong.$,
                    children: jsx(_$$E, {
                      color: "brand",
                      children: x
                    })
                  }), BB(m) && jsx(_$$y3, {
                    helpUrlVariant: L
                  })]
                })]
              }), jsx(_$$r, {
                variant: "secondary",
                shortcuts: [{
                  key: Uz.ENTER,
                  modifier: [xH.META]
                }],
                onAction: () => {
                  b();
                  f && mi({
                    ...S.current,
                    isAi: !0
                  });
                },
                recordingKey: "SuggestionToast",
                children: _
              })]
            })
          })
        })
      })
    })
  });
}
function dB() {
  let e = XV();
  let t = hk();
  let i = _$$sF2();
  return e ? jsx(_$$s2, {
    name: "quickActions",
    recordingKey: "quickActions",
    children: jsx(_$$p, {
      children: jsx(_$$n, {
        children: jsx(_$$y4, {
          onDismiss: t,
          recordingKey: "VideoToast",
          children: (() => {
            switch (e.status) {
              case "success":
                return jsxs(_$$B, {
                  justify: "space-between",
                  align: "center",
                  fullWidth: !0,
                  children: [jsxs(_$$B, {
                    gap: 4,
                    align: "center",
                    children: [jsx("span", {
                      className: "x2lah0s",
                      children: jsx(_$$V2, {})
                    }), jsx("span", {
                      ...xk(dU.text),
                      children: renderI18nText("video_ai.make_video.success", {
                        prompt: e.prompt
                      })
                    })]
                  }), jsx(_$$r, {
                    shortcuts: [{
                      key: Uz.ENTER,
                      modifier: [xH.META]
                    }],
                    onAction: i,
                    recordingKey: "VideoToast",
                    children: renderI18nText("video_ai.make_video.insert")
                  })]
                });
              case "error":
                return jsxs(_$$B, {
                  gap: 4,
                  align: "center",
                  children: [jsx("span", {
                    className: "x2lah0s",
                    children: jsx(_$$C5, {
                      style: {
                        "--color-icon": "var(--color-icon-danger)"
                      }
                    })
                  }), jsx("span", {
                    ...xk(dU.text),
                    children: renderI18nText("video_ai.make_video.error", {
                      prompt: e.prompt
                    })
                  })]
                });
              default:
                return null;
            }
          })()
        })
      })
    })
  }) : null;
}
let dU = {
  text: {
    ..._$$g.textBodyMediumStrong,
    $$css: !0
  }
};
export function $$dG0(e) {
  let t = useDispatch();
  let i = _$$I();
  let r = PE();
  return (useEffect(() => {
    glU?.handleHasDesignAIPermissionChange();
  }, [r]), i) ? jsx(_$$tH, {
    boundaryKey: "QuickActionsV2",
    onError: () => {
      t(_$$F.enqueue({
        message: "Unable to open quick actions",
        type: "react-error"
      }));
    },
    team: _$$e.AI_FOR_PRODUCTION,
    fallback: H4.NONE_I_KNOW_WHAT_IM_DOING,
    children: jsx(_$$i, {
      children: jsx(QT, {
        value: Ct(e),
        children: jsx(dK, {})
      })
    })
  }) : null;
}
function dK() {
  let e = useAtomWithSubscription(Bu);
  let t = _$$el();
  let i = XV();
  return e ? jsx(dA, {}) : t ? jsx(dP, {}) : i ? jsx(dB, {}) : null;
}
export const l = $$dG0;
