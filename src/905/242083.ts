import { Ay as _$$Ay7 } from '@stylexjs/stylex';
import rh from 'classnames';
import { createElement, PureComponent, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { H as _$$H2 } from 'react-dom';
import { Fragment, jsx, jsxs } from 'react/jsx-runtime';
import { $D, kF, xO } from '../905/11';
import { Dc as _$$Dc2 } from '../905/2122';
import { Q7 } from '../905/15667';
import { iM as _$$iM, DB, h5, jP, JR, Sp, SW, Z4, Zt } from '../905/25189';
import { FU, v6 } from '../905/26824';
import { P as _$$P } from '../905/35881';
import { z4 as _$$z, Ln } from '../905/37051';
import { bL as _$$bL, Rq } from '../905/38914';
import { ae as _$$ae } from '../905/41973';
import { p as _$$p } from '../905/42189';
import { e as _$$e3, N as _$$N } from '../905/55273';
import { e as _$$e2 } from '../905/58247';
import { K as _$$K2 } from '../905/63322';
import { Uz } from '../905/63728';
import { l as _$$l5 } from '../905/65216';
import { m as _$$m2 } from '../905/70820';
import { z as _$$z2 } from '../905/95280';
import { Ju as _$$Ju, ZU } from '../905/102752';
import { e5 as _$$e5 } from '../905/104019';
import { Z as _$$Z2 } from '../905/104740';
import { q as _$$q2, w as _$$w3 } from '../905/112768';
import { En, jy, KE } from '../905/116101';
import { u as _$$u } from '../905/117966';
import { xK as _$$xK } from '../905/125218';
import { ez as _$$ez, lC as _$$lC, _o, GI, HV, IZ, qL, SK, U9, Vi, W6, wp, yE } from '../905/125333';
import { J as _$$J5 } from '../905/125483';
import { X as _$$X3 } from '../905/128376';
import { Ib } from '../905/129884';
import { g as _$$g2 } from '../905/142432';
import { hO } from '../905/145989';
import { n as _$$n4 } from '../905/155450';
import { $O, to as _$$to, AS, Ce, ES, YK } from '../905/156213';
import { Ph } from '../905/160095';
import { F as _$$F3 } from '../905/162860';
import { ServiceCategories as _$$e } from '../905/165054';
import { _ as _$$_ } from '../905/170564';
import { d as _$$d3 } from '../905/189168';
import { nc as _$$nc, l7 } from '../905/189185';
import { t as _$$t3 } from '../905/192333';
import { Ts } from '../905/194276';
import { fF } from '../905/194389';
import { Cg } from '../905/195479';
import { g as _$$g3 } from '../905/211118';
import { E7 } from '../905/216495';
import { c as _$$c2 } from '../905/217163';
import { z as _$$z3 } from '../905/223332';
import { Xo } from '../905/226610';
import { Ag as _$$Ag } from '../905/235578';
import { fm } from '../905/236856';
import { T as _$$T4 } from '../905/239551';
import { ih as _$$ih, UA } from '../905/250387';
import { R as _$$R2 } from '../905/256203';
import { h as _$$h3, J as _$$J3 } from '../905/270045';
import { Ji } from '../905/276025';
import { dM, F9 } from '../905/278499';
import { Z as _$$Z4 } from '../905/279476';
import { Ay as _$$Ay8, Tr } from '../905/281495';
import { i6 as _$$i2, Ie } from '../905/291654';
import { J as _$$J } from '../905/294113';
import { w as _$$w } from '../905/294864';
import { _N, Vg } from '../905/300621';
import { F as _$$F } from '../905/302958';
import { t as _$$t, tx as _$$tx, YD } from '../905/303541';
import { R as _$$R3 } from '../905/307199';
import { b as _$$b3, c as _$$c4 } from '../905/308099';
import { W6 as _$$W, Lf } from '../905/327522';
import { B as _$$B } from '../905/352524';
import { $ as _$$$ } from '../905/361972';
import { jp, WS } from '../905/370597';
import { c2 } from '../905/382883';
import { $ as _$$$2 } from '../905/383708';
import { x as _$$x4 } from '../905/392802';
import { lP as _$$lP } from '../905/405710';
import { Dn } from '../905/407352';
import { debugState } from '../905/407919';
import { WK } from '../905/414069';
import { JI, Yj } from '../905/416496';
import { G as _$$G3 } from '../905/431526';
import { hS } from '../905/437088';
import { Y as _$$Y } from '../905/438063';
import { N as _$$N2 } from '../905/438674';
import { R as _$$R } from '../905/441305';
import { ch } from '../905/443517';
import { s as _$$s8 } from '../905/445054';
import { sx as _$$sx } from '../905/449184';
import { CM, xL, Yv } from '../905/459248';
import { QC } from '../905/461516';
import { Q as _$$Q } from '../905/463586';
import { Sh } from '../905/470286';
import { MZ } from '../905/470594';
import { $$ap1 } from '../905/472793';
import { A as _$$A } from '../905/482208';
import { Vy, zT } from '../905/484695';
import { S3 } from '../905/485103';
import { as as _$$as, Dl } from '../905/487011';
import { bL as _$$bL2, c$, l9, mc } from '../905/493196';
import { J as _$$J4 } from '../905/494216';
import { k as _$$k3 } from '../905/498777';
import { YQ } from '../905/502364';
import { r6 as _$$r2 } from '../905/507950';
import { hR, hW } from '../905/508457';
import { $7 } from '../905/509613';
import { M as _$$M } from '../905/512402';
import { RR } from '../905/514666';
import { v as _$$v3 } from '../905/516963';
import { dD } from '../905/519113';
import { $n } from '../905/521428';
import { oU as _$$oU, B3, dm, Sr } from '../905/535224';
import { h as _$$h4 } from '../905/537858';
import { P as _$$P2 } from '../905/540614';
import { rH as _$$rH } from '../905/542194';
import { r6 as _$$r } from '../905/542608';
import { fJ, x5 } from '../905/543054';
import { xK } from '../905/543466';
import { g as _$$g5 } from '../905/544669';
import { P as _$$P3 } from '../905/545265';
import { y8 as _$$y6 } from '../905/551193';
import { Ek } from '../905/553831';
import { $e } from '../905/554703';
import { H as _$$H3 } from '../905/561433';
import { oz as _$$oz } from '../905/561485';
import { decodeBase64, encodeBase64 } from '../905/561685';
import { j as _$$j } from '../905/564614';
import { pN as _$$pN } from '../905/571565';
import { s as _$$s } from '../905/573154';
import { m as _$$m } from '../905/575846';
import { zX } from '../905/576487';
import { l as _$$l2, q as _$$q } from '../905/578831';
import { f as _$$f } from '../905/580661';
import { Io } from '../905/581543';
import { k as _$$k2 } from '../905/582200';
import { pS } from '../905/588985';
import { G as _$$G2 } from '../905/591700';
import { getFeatureFlags } from '../905/601108';
import { J6 } from '../905/602906';
import { a as _$$a3 } from '../905/608122';
import { M4 } from '../905/609396';
import { Ay as _$$Ay2, Cs } from '../905/612521';
import { jN } from '../905/612685';
import { qm } from '../905/617744';
import { o8 as _$$o3, Fr } from '../905/622391';
import { x as _$$x2 } from '../905/628884';
import { E as _$$E } from '../905/632989';
import { parseQuery } from '../905/634134';
import { Q_, Vc, x4 } from '../905/657224';
import { isLocalFileKey } from '../905/657242';
import { a6 as _$$a2, il as _$$il, pM as _$$pM, sd as _$$sd, tS as _$$tS, dE, Fo, GZ, Oc, PC, pV, PZ, RU, Uj, un, W9, WE, XF, zN } from '../905/661614';
import { h as _$$h } from '../905/662353';
import { oA as _$$oA } from '../905/663269';
import { gG } from '../905/684180';
import { IM } from '../905/687477';
import { b as _$$b4 } from '../905/690073';
import { EO, F4 } from '../905/691205';
import { qo, UN } from '../905/700578';
import { createPluginContext as _$$e8 } from '../905/700654';
import { X as _$$X } from '../905/701807';
import { y as _$$y } from '../905/705736';
import { T1 } from '../905/711212';
import { FR } from '../905/714160';
import { ED, Lo, x1, xi } from '../905/714362';
import { B as _$$B2 } from '../905/714743';
import { jk as _$$jk } from '../905/715541';
import { l as _$$l } from '../905/716947';
import { A as _$$A6 } from '../905/721854';
import { xP as _$$xP, d_, Gh } from '../905/727576';
import { Point } from '../905/736624';
import { qG, Qx } from '../905/742325';
import { c as _$$c3, s as _$$s7 } from '../905/744710';
import { l as _$$l4 } from '../905/745972';
import { Ao } from '../905/748636';
import { x as _$$x } from '../905/749159';
import { y as _$$y5 } from '../905/749689';
import { iu as _$$iu, wY as _$$wY, mv } from '../905/753206';
import { L6 } from '../905/755627';
import { Z as _$$Z } from '../905/757420';
import { d as _$$d2, X as _$$X2 } from '../905/758967';
import { Kz } from '../905/760074';
import { WL, ZY } from '../905/764747';
import { d1 } from '../905/766303';
import { M as _$$M2 } from '../905/771870';
import { b as _$$b2, eM as _$$eM, gg, LQ, M9, Nz, PE, yF } from '../905/777093';
import { O4 } from '../905/777187';
import { s as _$$s5 } from '../905/780421';
import { $A as _$$$A } from '../905/782918';
import { cq } from '../905/794154';
import { x as _$$x3 } from '../905/797453';
import { B as _$$B6 } from '../905/808775';
import { defaultLanguage } from '../905/816253';
import { o as _$$o2 } from '../905/821217';
import { F as _$$F5 } from '../905/827944';
import { getSceneGraphInstance } from '../905/830071';
import { parseInteger } from '../905/833686';
import { td as _$$td } from '../905/845253';
import { Um } from '../905/848862';
import { f8 } from '../905/850476';
import { s2 as _$$s3, A9, bT, E9, mK } from '../905/851937';
import { m as _$$m3 } from '../905/852057';
import { y as _$$y2 } from '../905/855374';
import { n3 as _$$n, F7, Rf } from '../905/859698';
import { $A, ds as _$$ds, vt } from '../905/862883';
import { sH as _$$sH, AD } from '../905/871411';
import { B as _$$B5 } from '../905/872019';
import { Bn } from '../905/879323';
import { g as _$$g } from '../905/880308';
import { Db } from '../905/881862';
import { g5, Iz, uM, wv } from '../905/888175';
import { bS, bX, fs, pi, vU } from '../905/889931';
import { Kg } from '../905/898440';
import { G_ } from '../905/901759';
import { v as _$$v2 } from '../905/906499';
import { XHR } from '../905/910117';
import { bL } from '../905/911410';
import { y as _$$y4 } from '../905/913008';
import { debounce } from '../905/915765';
import { a7 as _$$a4 } from '../905/917898';
import { sZ as _$$sZ, J5, jd, K8, O8, Vq } from '../905/920793';
import { hD } from '../905/921139';
import { oB as _$$oB, sf as _$$sf, ho, j7 } from '../905/929976';
import { q as _$$q3 } from '../905/932270';
import { c as _$$c5 } from '../905/932790';
import { lQ } from '../905/934246';
import { parse, unparse } from '../905/945633';
import { Jc, Sn } from '../905/946805';
import { $3 } from '../905/946937';
import { qo as _$$qo } from '../905/959568';
import { L as _$$L } from '../905/970585';
import { n as _$$n5 } from '../905/971006';
import { pO } from '../905/977824';
import { b as _$$b } from '../905/985254';
import { K as _$$K } from '../905/987240';
import { Rz } from '../905/990497';
import { Ts as _$$Ts, qV } from '../905/994545';
import { A as _$$A3 } from '../4711/61765';
import { A as _$$A2 } from '../4711/145260';
import { A as _$$A4 } from '../4711/621307';
import { s as _$$s6 } from '../cssbuilder/589278';
import { Zh } from '../figma_app/2590';
import { o$ as _$$o$, t4 as _$$t2, C9, K9, ku, uR, W_, wi } from '../figma_app/8833';
import { El } from '../figma_app/9619';
import { F1 as _$$F2, Pe, Qn } from '../figma_app/12796';
import { bJ as _$$bJ } from '../figma_app/16595';
import { sO as _$$sO } from '../figma_app/21029';
import { md, zl } from '../figma_app/27355';
import { WY } from '../figma_app/31188';
import { iAs } from '../figma_app/43951';
import { nT as _$$nT, fB, yY } from '../figma_app/53721';
import { sF as _$$sF, zJ } from '../figma_app/59657';
import { J as _$$J2 } from '../figma_app/61771';
import { lc as _$$lc, gc, QZ } from '../figma_app/62612';
import { xP } from '../figma_app/65182';
import { XR } from '../figma_app/67099';
import { gh } from '../figma_app/76123';
import { $m } from '../figma_app/78808';
import { $X, Eo, F1, g4 } from '../figma_app/80990';
import { J2 } from '../figma_app/84367';
import { Rm } from '../figma_app/86989';
import { s4 as _$$s2, Wl } from '../figma_app/88239';
import { aK as _$$aK, CN as _$$CN, eH as _$$eH, lz as _$$lz, nN as _$$nN, re as _$$re, Bs, fk, FP, fy, Jt, pj, R5, u1, XE, XQ } from '../figma_app/91703';
import { tO as _$$tO } from '../figma_app/98072';
import { zs } from '../figma_app/106634';
import { s0 as _$$s9, Nl } from '../figma_app/115923';
import { Ed } from '../figma_app/139113';
import { h8 } from '../figma_app/144974';
import { ay as _$$ay, RH } from '../figma_app/147952';
import { H as _$$H } from '../figma_app/147959';
import { IJ } from '../figma_app/149304';
import { Dc as _$$Dc, hV } from '../figma_app/151766';
import { P$ } from '../figma_app/152368';
import { FW, u8, ZQ } from '../figma_app/155287';
import { Fk as _$$Fk } from '../figma_app/167249';
import { buildStaticUrl, buildUploadUrl, getInitialOptions, getSupportEmail, isDevEnvironment } from '../figma_app/169182';
import { jx } from '../figma_app/171569';
import { j as _$$j2 } from '../figma_app/172303';
import { v as _$$v } from '../figma_app/176476';
import { XT as _$$XT, _I } from '../figma_app/176634';
import { Ht, j5 } from '../figma_app/178475';
import { td as _$$td2, vh } from '../figma_app/181241';
import { tK as _$$tK } from '../figma_app/191804';
import { LC } from '../figma_app/192142';
import { zg } from '../figma_app/193867';
import { zk } from '../figma_app/198712';
import { Nh } from '../figma_app/201703';
import { kJ } from '../figma_app/204937';
import { no as _$$no } from '../figma_app/209965';
import { YL } from '../figma_app/213643';
import { Wj } from '../figma_app/224338';
import { N as _$$N3 } from '../figma_app/240060';
import { T6 } from '../figma_app/242565';
import { mr, U2 } from '../figma_app/247611';
import { W7 } from '../figma_app/251115';
import { nl as _$$nl } from '../figma_app/257275';
import { fT as _$$fT } from '../figma_app/260703';
import { n as _$$n3 } from '../figma_app/264395';
import { z4 } from '../figma_app/266084';
import { $W } from '../figma_app/268172';
import { nB as _$$nB, wi as _$$wi, hE, jk, vo, Y9 } from '../figma_app/272243';
import { Dl as _$$Dl, DK, Nd } from '../figma_app/291892';
import { pN } from '../figma_app/292212';
import { e3 as _$$e4 } from '../figma_app/298277';
import { PR } from '../figma_app/299859';
import { c2 as _$$c6, T as _$$T3, fR, Gc, MB, MH, qH } from '../figma_app/300692';
import { Z as _$$Z3 } from '../figma_app/301719';
import { u1 as _$$u2, zi } from '../figma_app/305244';
import { Tv, Zl } from '../figma_app/311375';
import { Cu, Dc, ds, uE, ye } from '../figma_app/314264';
import { _d, P5 } from '../figma_app/318590';
import { $I, iP as _$$iP, h$, jD, Jf, KY } from '../figma_app/322845';
import { c3 } from '../figma_app/327577';
import { cS, Zo } from '../figma_app/334459';
import { wA as _$$wA } from '../figma_app/336853';
import { n as _$$n2 } from '../figma_app/339971';
import { Kx } from '../figma_app/342355';
import { xQ } from '../figma_app/345195';
import { w5 } from '../figma_app/345997';
import { Qy, v$ } from '../figma_app/347120';
import { ln as _$$ln, BG } from '../figma_app/349969';
import { KE as _$$KE } from '../figma_app/351862';
import { pi as _$$pi, TY, Yh } from '../figma_app/357047';
import { pH } from '../figma_app/357433';
import { IU } from '../figma_app/357655';
import { Gq } from '../figma_app/363242';
import { uE as _$$uE, Vi as _$$Vi } from '../figma_app/364284';
import { Yg } from '../figma_app/365713';
import { vE } from '../figma_app/376315';
import { n_ as _$$n_2 } from '../figma_app/385874';
import { kh, MT, O5 } from '../figma_app/387100';
import { lu as _$$lu, lV as _$$lV, k1, mI, OJ } from '../figma_app/389091';
import { jV } from '../figma_app/391338';
import { g as _$$g6 } from '../figma_app/398051';
import { sn as _$$sn, hf } from '../figma_app/407856';
import { u_ } from '../figma_app/415217';
import { bi as _$$bi, hg } from '../figma_app/425489';
import { Ay as _$$Ay5 } from '../figma_app/432652';
import { eY as _$$eY2 } from '../figma_app/442259';
import { U as _$$U } from '../figma_app/449815';
import { A0, R4 } from '../figma_app/454974';
import { $q, lQ as _$$lQ, s$ as _$$s$, _W, fT, QT, uF, XT, Y5, Zi } from '../figma_app/455680';
import { lt as _$$lt, dZ, y8 } from '../figma_app/459490';
import { EA } from '../figma_app/462456';
import { KF, xb } from '../figma_app/465776';
import { T as _$$T2 } from '../figma_app/472024';
import { rd as _$$rd, v7 } from '../figma_app/475303';
import { _ as _$$_2 } from '../figma_app/485258';
import { pP } from '../figma_app/492354';
import { y as _$$y3 } from '../figma_app/504415';
import { ZH } from '../figma_app/504823';
import { bv, Dz, q5 } from '../figma_app/516028';
import { ZS } from '../figma_app/519839';
import { oY as _$$oY } from '../figma_app/524655';
import { mQ } from '../figma_app/527668';
import { F4 as _$$F4, le as _$$le, dn } from '../figma_app/527873';
import { D as _$$D2 } from '../figma_app/528509';
import { A9 as _$$A7 } from '../figma_app/533986';
import { Zb } from '../figma_app/539925';
import { eY as _$$eY, cB, cu, D2, Er, fb, FJ, FM, gU, H3, wh, xY } from '../figma_app/540726';
import { ni as _$$ni, G4, LK } from '../figma_app/545293';
import { _o as _$$_o } from '../figma_app/552821';
import { c3 as _$$c7, ZI } from '../figma_app/553940';
import { Ds, vS } from '../figma_app/557318';
import { $Z, Cf } from '../figma_app/559491';
import { B as _$$B4 } from '../figma_app/560453';
import { Kt } from '../figma_app/562352';
import { be, k6 } from '../figma_app/565197';
import { O as _$$O } from '../figma_app/568977';
import { wy } from '../figma_app/578011';
import { Ak, IL, PV, Xk } from '../figma_app/582924';
import { d1 as _$$d, xi as _$$xi } from '../figma_app/603466';
import { Lk as _$$Lk, dd } from '../figma_app/604494';
import { nd as _$$nd } from '../figma_app/612001';
import { R as _$$R4 } from '../figma_app/612938';
import { OX } from '../figma_app/617606';
import { _b as _$$_b, uP } from '../figma_app/618665';
import { Av } from '../figma_app/622881';
import { Dk, wY } from '../figma_app/623293';
import { lH as _$$lH2 } from '../figma_app/623300';
import { Mj } from '../figma_app/624361';
import { Id, JU } from '../figma_app/626177';
import { JT, zw } from '../figma_app/632248';
import { AT, cX, PW } from '../figma_app/633080';
import { BG as _$$BG } from '../figma_app/634288';
import { e2 as _$$e6, ks } from '../figma_app/637027';
import { canMemberOrg } from '../figma_app/642025';
import { Ju } from '../figma_app/644255';
import { m3 } from '../figma_app/645694';
import { CN, Wz } from '../figma_app/651866';
import { mapFilter } from '../figma_app/656233';
import { WJ } from '../figma_app/671547';
import { _p } from '../figma_app/675605';
import { fS } from '../figma_app/681244';
import { b6 } from '../figma_app/681697';
import { iW as _$$iW, o3 as _$$o, se as _$$se, Ts as _$$Ts2, ye as _$$ye, Ad, H0, LH, p7, PY, vK } from '../figma_app/682945';
import { g as _$$g4 } from '../figma_app/683763';
import { YL as _$$YL } from '../figma_app/688194';
import { ph } from '../figma_app/709893';
import { pM } from '../figma_app/728005';
import { Om } from '../figma_app/731583';
import { qZ } from '../figma_app/738358';
import { W_ as _$$W_, UK } from '../figma_app/740163';
import { i as _$$i, n_ as _$$n_, gX, NT, T8 } from '../figma_app/741237';
import { WJ as _$$WJ, P1, S9 } from '../figma_app/745458';
import { s as _$$s4 } from '../figma_app/751989';
import { w as _$$w2 } from '../figma_app/757236';
import { RA } from '../figma_app/757723';
import { $DY, AlE, b3I, biQ, Bko, ByZ, cgc, CUU, dPJ, E63, eL2, Ez5, FAf, Fk7, fRZ, glU, h3O, H9y, hMR, hR8, hzD, i6g, idw, iZB, jDJ, jkn, jXp, KAf, KG_, KtY, lyf, m7W, MoD, mSn, msz, Nfd, NLJ, OGQ, P2e, PHu, PKm, ppO, qOu, QOV, rcl, rCR, rrT, RsU, ruz, sbT, Sie, t8O, tEb, Ubo, UNF, uXP, vhv, vXe, Vzr, W2B, WXh, X3B, x7E, xae, yDE, YnC, ywP, yxn, zdR, zkO, zvt } from '../figma_app/763686';
import { aJ as _$$aJ, Ay as _$$Ay3 } from '../figma_app/778880';
import { parsePxInt, parsePxNumber } from '../figma_app/783094';
import { S as _$$S } from '../figma_app/787550';
import { T as _$$T } from '../figma_app/792332';
import { Ts as _$$Ts3 } from '../figma_app/793953';
import { Ym } from '../figma_app/806075';
import { Fk } from '../figma_app/806412';
import { RK } from '../figma_app/815170';
import { G_h } from '../figma_app/822011';
import { Ik } from '../figma_app/831696';
import { fu } from '../figma_app/831799';
import { bi } from '../figma_app/836943';
import { mu, Ww, ZG } from '../figma_app/840917';
import { _b, Eg, HF } from '../figma_app/841351';
import { z6 } from '../figma_app/846841';
import { qb } from '../figma_app/857454';
import { kt } from '../figma_app/858013';
import { n as _$$n6 } from '../figma_app/860474';
import { ZW } from '../figma_app/861982';
import { B3 as _$$B3, Ag } from '../figma_app/862289';
import { kS } from '../figma_app/864723';
import { eD as _$$eD } from '../figma_app/876459';
import { bJ } from '../figma_app/881578';
import { rT as _$$rT, dK, vD } from '../figma_app/889655';
import { a as _$$a } from '../figma_app/894185';
import { f7 } from '../figma_app/896988';
import { i as _$$i3 } from '../figma_app/904127';
import { h as _$$h2 } from '../figma_app/907304';
import { fG } from '../figma_app/912411';
import { kF as _$$kF } from '../figma_app/915202';
import { CV } from '../figma_app/916560';
import { lH as _$$lH, EJ, H9, hX, Vs } from '../figma_app/930338';
import { l7 as _$$l3 } from '../figma_app/932601';
import { FU as _$$FU, b$ } from '../figma_app/933328';
import { hR as _$$hR } from '../figma_app/945605';
import { Ay as _$$Ay6 } from '../figma_app/948389';
import { rq as _$$rq } from '../figma_app/952446';
import { C as _$$C } from '../figma_app/959385';
import { x0, Zk } from '../figma_app/963341';
import { c as _$$c } from '../figma_app/968727';
import { e4 as _$$e7 } from '../figma_app/968938';
import { KD, Lk } from '../figma_app/975811';
import { XE as _$$XE } from '../figma_app/976749';
import { gH } from '../figma_app/985200';
import _require from '../vendor/89702';
import { Ay as _$$Ay } from '../vendor/159563';
import { hp } from '../vendor/162266';
import ah from '../vendor/223926';
import { deflateRaw } from '../vendor/323834';
import { d4, wA } from '../vendor/514228';
import oA from '../vendor/805353';
import { A as _$$A5 } from '../vendor/850789';
import { unmountComponentAtNode } from '../vendor/944059';
let n;
let r;
function d(e) {
  let t = parseInteger(e, 0);
  let i = parseInteger(e, e.indexOf(':') + 1);
  if (!AlE || !UNF) throw new Error('Bindings are not initialized');
  let n = AlE.getActiveDocument();
  if (UNF.setGlobalUnstableNodeByID(n, t, i, Sie.REDUX), !UNF.exists(Sie.REDUX)) throw new Error('Missing node!');
}
function c(e, t) {
  let i = window.performance.now();
  for (; window.performance.now() < i + 1e3;) t();
  setTimeout(() => {
    let i = window.performance.now();
    t();
    let n = window.performance.now();
    console.log(`${e} took ${n - i}ms`);
  }, 8e3);
}
getInitialOptions().cluster_name !== 'prod' && (window.runGettersBenchmark = function() {
  let e = AlE && mSn?.getCurrentPage(Sie.PLUGIN, AlE.getActiveDocument());
  if (!e) throw new Error('Missing active page; run this bench in the editor');
  let t = window.performance.now();
  !function e(t, i) {
    if (i(t), d(t), !CUU) throw new Error('SceneNodeCpp undefined');
    for (let t of CUU.getReversedChildren(Sie.REDUX)) e(t, i);
  }(e, e => {
    (function(e) {
      if (d(e), !UNF || !sbT || !Fk7 || !CUU || !H9y || !mSn || !AlE || !x7E || !tEb || !KG_ || !OGQ || !hR8 || !KtY || !ByZ || !qOu || !$DY || !ppO || !RsU || !iZB || !fRZ || !jDJ) throw new Error('Bindings undefined');
      UNF.exists(Sie.REDUX);
      sbT.getType(Sie.REDUX);
      UNF.getBooleanOperation(Sie.REDUX);
      CUU.getFixedChildrenCount(Sie.REDUX);
      $DY.getOverflowDirection(Sie.REDUX);
      tEb.getCornerRadius(Sie.REDUX);
      CUU.getObjectsPanelThumbnailId();
      RsU.getStyleType(Sie.REDUX);
      UNF.getStackMode(Sie.REDUX);
      KtY.getStackPositioning(Sie.REDUX);
      UNF.getStackPrimaryAlignItems(Sie.REDUX);
      KtY.getStackCounterAlignItems(Sie.REDUX);
      jDJ.getResizeToFit(Sie.REDUX);
      CUU.getHasEnabledStaticImagePaint(Sie.REDUX);
      CUU.getHasEnabledAnimatedPaint(Sie.REDUX);
      UNF.getIsInstanceSublayer(Sie.REDUX);
      hR8.getIsStateGroup(Sie.REDUX);
      UNF.getIsState(Sie.REDUX);
      UNF.getStateAbbreviatedName(Sie.REDUX);
      ppO.getIsFrameClippingDisabled(Sie.REDUX);
      UNF.getIsExpandable(Sie.REDUX);
      UNF.getIsSymbolPublishable(Sie.REDUX);
      UNF.getIsTemporarilyExpanded(Sie.REDUX);
      UNF.getIsExpanded(Sie.REDUX);
      UNF.getLocked(Sie.REDUX);
      Fk7.getIsMask(Sie.REDUX);
      fRZ.getVisible(Sie.REDUX);
      UNF.getSimplifyInstancePanels(Sie.REDUX);
      UNF.getName(Sie.REDUX);
      UNF.getParent(Sie.REDUX);
      Fk7.getShapeWithTextType(Sie.REDUX);
      UNF.getContainingStateGroupId(Sie.REDUX);
      UNF.getContainingSymbolId(Sie.REDUX);
      UNF.getSymbolId(Sie.REDUX);
      UNF.getDescription(Sie.REDUX);
      UNF.getStateGroupPropertyValueOrder(Sie.REDUX);
      UNF.getSymbolLinks(Sie.REDUX);
      UNF.getComponentKey(Sie.REDUX);
      UNF.getStateGroupKey(Sie.REDUX);
      UNF.getStyleKey(Sie.REDUX);
      UNF.getStyleVersionHash(Sie.REDUX);
      UNF.getSourceLibraryKey(Sie.REDUX);
      UNF.getSharedSymbolVersion(Sie.REDUX);
      UNF.getSharedStateGroupVersion(Sie.REDUX);
      UNF.getPublishID(Sie.REDUX);
      UNF.getTextContent(Sie.REDUX);
      UNF.getFontName(Sie.REDUX);
      UNF.getExportSettings(Sie.REDUX);
      UNF.getChildren(Sie.REDUX);
      CUU.getReversedChildren(Sie.REDUX);
      UNF.getRichMediaInfo(Sie.REDUX);
      UNF.getStampData(Sie.REDUX);
      UNF.isFaceStamp(Sie.REDUX);
      UNF.childrenAreAllGhosts(Sie.REDUX);
      UNF.tableNumRows(Sie.REDUX);
      UNF.tableNumColumns(Sie.REDUX);
      UNF.tableCellRowIndex(Sie.REDUX);
      UNF.tableCellColumnIndex(Sie.REDUX);
      UNF.isUnderHiddenSection(Sie.REDUX);
      UNF.getChildCount(Sie.PLUGIN);
      CUU.getInstanceScaleFactor(Sie.PLUGIN);
      UNF.getIsInImmutableFrame(Sie.PLUGIN);
      UNF.getIsInWidget(Sie.PLUGIN);
      CUU.getDirectlySelectedNodes(Sie.PLUGIN);
      CUU.getSelectedTextRange(Sie.PLUGIN);
      ppO.getOpacity(Sie.PLUGIN);
      UNF.getCornerRadiusOrMixed(Sie.PLUGIN);
      tEb.getCornerSmoothing(Sie.PLUGIN);
      ppO.getStrokeWeight(Sie.PLUGIN);
      CUU.getCharacters(Sie.PLUGIN);
      UNF.getVariableDataValues(Sie.PLUGIN);
      UNF.getVariableSetModesSorted(Sie.PLUGIN);
      CUU.getEffectivePrototypeStartNodeId(Sie.PLUGIN);
      CUU.getFlowStartingPoints(Sie.PLUGIN);
      UNF.getSymbolId(Sie.PLUGIN);
      OGQ.getIsInternalOnly(Sie.PLUGIN);
      Fk7.getSize(Sie.PLUGIN);
      UNF.getAbsoluteRenderBounds(Sie.PLUGIN);
      UNF.getAbsoluteBoundingBox(Sie.PLUGIN);
      UNF.getProportionsConstrained(Sie.PLUGIN);
      Fk7.getAbsoluteTransform(Sie.PLUGIN);
      UNF.getRelativeTransform(Sie.PLUGIN);
      iZB.getHorizontalConstraint(Sie.PLUGIN);
      iZB.getVerticalConstraint(Sie.PLUGIN);
      KtY.getStackSpacing(Sie.PLUGIN);
      KtY.getStackCounterSpacing(Sie.PLUGIN);
      KtY.getStackCounterSizing(Sie.PLUGIN);
      KtY.getStackChildAlignSelf(Sie.PLUGIN);
      UNF.getStackLeftPadding(Sie.PLUGIN);
      UNF.getStackRightPadding(Sie.PLUGIN);
      UNF.getStackTopPadding(Sie.PLUGIN);
      UNF.getStackBottomPadding(Sie.PLUGIN);
      KtY.getStackPrimarySizing(Sie.PLUGIN);
      KtY.getStackChildPrimaryGrow(Sie.PLUGIN);
      UNF.getStackReverseZIndex(Sie.PLUGIN);
      H9y.getTextTruncation(Sie.PLUGIN);
      tEb.getRectangleTopLeftCornerRadius(Sie.PLUGIN);
      tEb.getRectangleTopRightCornerRadius(Sie.PLUGIN);
      tEb.getRectangleBottomLeftCornerRadius(Sie.PLUGIN);
      tEb.getRectangleBottomRightCornerRadius(Sie.PLUGIN);
      tEb.getRectangleCornerRadiiIndependent(Sie.PLUGIN);
      UNF.getStarInnerScale(Sie.PLUGIN);
      qOu.getCount(Sie.PLUGIN);
      Fk7.getShapeWithTextType(Sie.PLUGIN);
      CUU.getAuthorName(Sie.PLUGIN);
      CUU.getAuthorVisible(Sie.PLUGIN);
      x7E.getConnectorStart(Sie.PLUGIN);
      x7E.getConnectorEnd(Sie.PLUGIN);
      UNF.getConnectorStartCap(Sie.PLUGIN);
      UNF.getConnectorEndCap(Sie.PLUGIN);
      UNF.getCodeBlockLanguage(Sie.PLUGIN);
      UNF.getAutoRename(Sie.PLUGIN);
      UNF.getJsFillPaints(Sie.PLUGIN);
      UNF.getJsStrokePaints(Sie.PLUGIN);
      UNF.getBackgroundPaints(Sie.PLUGIN);
      UNF.getPrototypeBackgroundColor(Sie.PLUGIN);
      UNF.getLayoutGrids(Sie.PLUGIN);
      UNF.getGuides(Sie.PLUGIN);
      UNF.getJsEffects(Sie.PLUGIN);
      UNF.getFillGeometry(Sie.PLUGIN);
      UNF.getStrokeGeometry(Sie.PLUGIN);
      ppO.getBlendMode(Sie.PLUGIN);
      ppO.getStrokeAlign(Sie.PLUGIN);
      UNF.getStrokeCap(Sie.PLUGIN);
      UNF.getStrokeCapOrMixed(Sie.PLUGIN);
      UNF.getStrokeJoin(Sie.PLUGIN);
      UNF.getStrokeJoinOrMixed(Sie.PLUGIN);
      UNF.getHandleMirroring(Sie.PLUGIN);
      UNF.getHandleMirroringOrMixed(Sie.PLUGIN);
      UNF.getStrokeMiterLimit(Sie.PLUGIN);
      UNF.getDashPattern(Sie.PLUGIN);
      H9y.getFontSize(Sie.PLUGIN);
      UNF.getParagraphIndent(Sie.PLUGIN);
      UNF.getParagraphSpacing(Sie.PLUGIN);
      UNF.getListSpacing(Sie.PLUGIN);
      H9y.getTextAlignHorizontal(Sie.PLUGIN);
      H9y.getTextAlignVertical(Sie.PLUGIN);
      H9y.getTextDecoration(Sie.PLUGIN);
      UNF.getTextCase(Sie.PLUGIN);
      H9y.getTextAutoResize(Sie.PLUGIN);
      UNF.getLetterSpacing(Sie.PLUGIN);
      ByZ.getArcData(Sie.PLUGIN);
      UNF.getVectorData(Sie.PLUGIN);
      UNF.getPrototypeInteractions(Sie.PLUGIN);
      $DY.getOverlayPositionType(Sie.PLUGIN);
      UNF.getOverlayBackgroundAppearance(Sie.PLUGIN);
      $DY.getOverlayBackgroundInteraction(Sie.PLUGIN);
      UNF.getSharedSymbolVersion(Sie.PLUGIN);
      UNF.getSharedStateGroupVersion(Sie.PLUGIN);
      UNF.getStyleVersion(Sie.PLUGIN);
      CUU.getTextSublayer(Sie.PLUGIN);
      CUU.getImmutableFrameLabel(Sie.PLUGIN);
      UNF.getConnectorLineType(Sie.PLUGIN);
      UNF.getIsEmbed(Sie.PLUGIN);
      UNF.getIsLinkPreview(Sie.PLUGIN);
      UNF.getLinkPreviewData(Sie.PLUGIN);
      UNF.getEmbedData(Sie.PLUGIN);
      UNF.getMediaData(Sie.PLUGIN);
      mSn.getCurrentPage(Sie.PLUGIN, AlE.getActiveDocument());
      KG_.getWidgetEvents(Sie.PLUGIN);
      UNF.getWidgetId();
      UNF.getWidgetVersionId();
      UNF.getOverriddenInheritedFillStyles(Sie.PLUGIN);
      UNF.getWidgetName();
      UNF.getWidgetSyncedState();
      UNF.getWidgetCachedAncestor();
      UNF.getRenderedSyncedState();
      UNF.getWidgetInputBehavior();
      KG_.getWidgetTooltip(Sie.PLUGIN);
      UNF.getWidgetInputTextNodeType();
    })(e);
  });
  let i = window.performance.now();
  console.log(`Getters bench: ${i - t}ms`);
}, window.runBindingsBenchmark = function() {
  let e = yDE;
  if (!e) throw new Error('BindingsPerfBench is not initialized');
  c('10000 x [empty(): void]', () => {
    for (let t = 0; t < 1e4; t++) e.empty();
  });
  c('10000 x [returnsInt(): int]', () => {
    for (let t = 0; t < 1e4; t++) e.returnsInt();
  });
  c('10000 x [returnsString(): string]', () => {
    for (let t = 0; t < 1e4; t++) e.returnsString();
  });
  c('10000 x [returnsBuffer(): buffer]', () => {
    for (let t = 0; t < 1e4; t++) e.returnsBuffer();
  });
  c('10000 x [returnsVector(): TestVector]', () => {
    for (let t = 0; t < 1e4; t++) e.returnsVector();
  });
  c('10000 x [returnsAffineTransform(): TestAffineTransform]', () => {
    for (let t = 0; t < 1e4; t++) e.returnsAffineTransform();
  });
  c('10000 x [returnsParentIndex(): TestParentIndex]', () => {
    for (let t = 0; t < 1e4; t++) e.returnsParentIndex();
  });
  c('10000 x [returnsArray(): TestParentIndex]', () => {
    for (let t = 0; t < 1e4; t++) e.returnsArray();
  });
  c('10000 x [takesInt(value: int): void]', () => {
    for (let t = 0; t < 1e4; t++) e.takesInt(t);
  });
  c('10000 x [takesString(string): void]', () => {
    for (let t = 0; t < 1e4; t++) e.takesString('ABC');
  });
  c('10000 x [takesBuffer(value: buffer): void]', () => {
    let t = new Uint8Array([0]);
    for (let i = 0; i < 1e4; i++) e.takesBuffer(t);
  });
  c('10000 x [takesVector(value: TestVector): void]', () => {
    let t = {
      x: 0,
      y: 0
    };
    for (let i = 0; i < 1e4; i++) e.takesVector(t);
  });
  c('10000 x [takesAffineTransform(value: TestAffineTransform): void]', () => {
    let t = {
      m00: 0,
      m01: 1,
      m02: 2,
      m10: 3,
      m11: 4,
      m12: 5
    };
    for (let i = 0; i < 1e4; i++) e.takesAffineTransform(t);
  });
  c('10000 x [takesParentIndex(value: TestParentIndex): void]', () => {
    let t = {
      parent: '100:3928',
      position: '01234567890123456789'
    };
    for (let i = 0; i < 1e4; i++) e.takesParentIndex(t);
  });
});
function tt(e, t, i) {
  let n = new Blob([t], {
    type: i
  });
  if (_$$Ay3.msie || _$$Ay3.msedge) {
    let t = document.createElement('a');
    if (void 0 !== t.download) {
      let i = URL.createObjectURL(n);
      t.href = i;
      t.download = e;
      t.click();
    } else {
      try {
        window.navigator.msSaveOrOpenBlob(n, e);
      } catch (t) {
        console.error(`IE can't save the file ${e} ${t}`);
      }
    }
  } else {
    let t = URL.createObjectURL(n);
    let i = document.createElement('a');
    i.href = t;
    let r = void 0 !== i.download;
    r && (i.download = e);
    _$$Ay3.safari ? (r || (i.target = '_blank'), i.click()) : _$$Ay3.firefox ? (document.body.appendChild(i), i.click(), document.body.removeChild(i)) : i.click();
  }
}
async function ti(e, t, i) {
  let n = (await DB([h5], async e => {
    let t = e.objectStore(h5);
    return await t.getAll();
  })).filter(i => i.fileKey === t && i.userID === e);
  let r = mapFilter(n, e => e.autosaveChanges ? {
    fileKey: e.fileKey,
    userID: e.userID,
    startingSessionID: e.startingSessionID,
    newSessionID: e.newSessionID,
    startTime: e.startTime,
    endTime: e.endTime,
    autosaveChanges: function(e) {
      let {
        commit,
        commitPolicy,
        fileVersion,
        commitReason
      } = e;
      let a = {};
      for (let e of commit.changedNodes) {
        let t = i6g ? JSON.parse(i6g.encodeChangesAsJson(e.changes, fileVersion, !1)) : '';
        a[e.nodeID] = {
          changesB64: encodeBase64(e.changes),
          debug: t
        };
      }
      let o = Object.fromEntries(commit.referencedNodes.map(({
        nodeID: e,
        changes: t
      }) => [e, encodeBase64(t)]));
      return {
        commitPolicy: W2B[commitPolicy],
        commitReason: uXP[commitReason],
        changedNodes: a,
        clearedNodes: commit.clearedNodes,
        imageHashes: commit.imageHashes,
        referencedNodes: o
      };
    }(e.autosaveChanges)
  } : null);
  tt(i, JSON.stringify({
    version: 1,
    logs: n.map(({
      logs: e
    }) => e).flat().map(e => ({
      ...e,
      log: JSON.parse(e.log)
    })).sort((e, t) => e.time - t.time),
    autosave: r
  }, null, 2), 'application/json');
}
async function ts(e, t) {
  if (!e) {
    let t = zl.get(_$$h);
    if (!t) throw new Error('Must provide a local file key');
    e = t;
  }
  if (!t) {
    let e = zl.get(kS);
    if (!e) throw new Error('Must provide a user ID');
    t = e;
  }
  let i = await Z4();
  if (!i) throw new Error('Could not open autosave DB');
  let n = i.transaction([Sp, jP, JR]);
  let r = n.objectStore(Sp);
  let a = await r.index(SW).get(Zt(t, e));
  if (!a || !a.id) throw new Error('No editor session row found');
  let s = n.objectStore(JR);
  let o = await s.get(Zt(a.userID, e));
  if (!o) throw new Error('No new file row found');
  let l = n.objectStore(jP);
  let d = (await l.getAll(_$$iM(a.id))).map(e => ({
    ...e,
    changes: encodeBase64(e.changes)
  }));
  return JSON.stringify({
    editorSession: a,
    newFile: o,
    nodeChanges: d
  });
}
async function to(e) {
  let t = JSON.parse(e);
  let i = await Z4();
  if (!i) throw new Error('Could not open autosave DB');
  let n = i.transaction([Sp, jP, JR], 'readwrite');
  let r = n.objectStore(Sp);
  await r.add(t.editorSession);
  let a = n.objectStore(JR);
  await a.add(t.newFile);
  let s = t.nodeChanges.map(e => ({
    ...e,
    changes: decodeBase64(e.changes)
  }));
  let o = n.objectStore(jP);
  for (let e of s) o.add(e);
  await n.done;
}
isDevEnvironment() && (window.exportLocalAutosaveFile = ts, window.importLocalAutosaveFile = to);
function tV() {
  _$$ye?.onMetricsEventLoopFrame();
  requestAnimationFrame(tV);
}
class t4 {
  constructor(e) {
    this.store = e;
  }
  isZombieStyle(e) {
    let t = this.store.getState().library;
    let i = UN();
    let n = i.get(e);
    if (!n) return !1;
    let r = n.styleId.ref;
    if (r) {
      let e = i.getStyleNodeByRef(r);
      let n = {
        guid: _$$sH(e?.styleId.guid)
      };
      return !bi({
        library: t,
        inheritStyleKey: r.key,
        inheritStyleID: n
      });
    }
    return !1;
  }
}
let id = new class {
  constructor() {
    this.ClipboardDataUploadSchemaValidator = vh();
  }
  getClipboardDataUpload(e) {
    return this.ClipboardDataUploadSchemaValidator.validate(async ({
      xr: t
    }) => await t.get('/api/clipboard_data_upload', _$$td2.toAPIParameters({
      device_type: e.deviceType,
      timestamp_ms: e.timestampMs
    })));
  }
}();
let iT = {
  container: {
    padding: 'xf7z5ut',
    paddingInline: null,
    paddingStart: null,
    paddingLeft: null,
    paddingEnd: null,
    paddingRight: null,
    paddingBlock: null,
    paddingTop: null,
    paddingBottom: null,
    display: 'x78zum5',
    flexDirection: 'xdt5ytf',
    $$css: !0
  },
  thumbnailButton: {
    'alignItems': 'x1qjc9v5',
    'borderRadius': 'xcptcoi',
    'borderStartStartRadius': null,
    'borderStartEndRadius': null,
    'borderEndStartRadius': null,
    'borderEndEndRadius': null,
    'borderTopLeftRadius': null,
    'borderTopRightRadius': null,
    'borderBottomLeftRadius': null,
    'borderBottomRightRadius': null,
    'display': 'x78zum5',
    'flexDirection': 'xdt5ytf',
    'gap': 'xg2d0mh',
    'rowGap': null,
    'columnGap': null,
    'height': 'x1wkxgih',
    'padding': 'x1mh6rdz',
    'paddingInline': null,
    'paddingStart': null,
    'paddingLeft': null,
    'paddingEnd': null,
    'paddingRight': null,
    'paddingBlock': null,
    'paddingTop': null,
    'paddingBottom': null,
    'width': 'xh8yej3',
    'backgroundColor': 'xv2f06h',
    '--xi6bjag': 'xc4x8mf xpivayv xiscmya',
    '$$css': !0
  },
  thumbnailImageBorder: {
    alignItems: 'x6s0dn4',
    backgroundColor: 'x1v8gsql',
    borderRadius: 'x19y5rnk',
    borderStartStartRadius: null,
    borderStartEndRadius: null,
    borderEndStartRadius: null,
    borderEndEndRadius: null,
    borderTopLeftRadius: null,
    borderTopRightRadius: null,
    borderBottomLeftRadius: null,
    borderBottomRightRadius: null,
    display: 'x78zum5',
    flex: 'x12lumcd',
    flexGrow: null,
    flexShrink: null,
    flexBasis: null,
    justifyContent: 'xl56j7k',
    minHeight: 'x2lwn1j',
    outline: 'xqrzjgf',
    outlineColor: null,
    outlineOffset: null,
    outlineStyle: null,
    outlineWidth: null,
    padding: 'xf7z5ut',
    paddingInline: null,
    paddingStart: null,
    paddingLeft: null,
    paddingEnd: null,
    paddingRight: null,
    paddingBlock: null,
    paddingTop: null,
    paddingBottom: null,
    $$css: !0
  },
  thumbnailImage: {
    objectFit: 'x19kjcj4',
    maxWidth: 'x193iq5w',
    maxHeight: 'xmz0i5r',
    margin: 'x1bpp3o7',
    marginInline: null,
    marginInlineStart: null,
    marginLeft: null,
    marginInlineEnd: null,
    marginRight: null,
    marginBlock: null,
    marginTop: null,
    marginBottom: null,
    userSelect: 'x87ps6o',
    $$css: !0
  },
  preferredContentName: {
    padding: 'x1mh6rdz',
    paddingInline: null,
    paddingStart: null,
    paddingLeft: null,
    paddingEnd: null,
    paddingRight: null,
    paddingBlock: null,
    paddingTop: null,
    paddingBottom: null,
    $$css: !0
  }
};
function ik(e) {
  !function(e, t) {
    let i = _$$Fk(e => {
      let t = e.getDirectlySelectedNodes()[0];
      return t ? t.guid : null;
    });
    let n = wA();
    useEffect(() => {
      i !== e && n(ES({
        type: t
      }));
    }, [n, e, i, t]);
  }(e.slotNodeId, iN.type);
  let t = wA();
  let i = pN(e.slotNodeId);
  let {
    preferredValues
  } = xP(i ?? void 0);
  let r = useMemo(() => ({
    x: e.position.x + 6,
    y: e.position.y - 180
  }), [e.position]);
  let s = _$$Fk(t => {
    let i = t.get(e.slotNodeId);
    return i ? {
      x: i.size.x / 2,
      y: i.size.y / 2
    } : {
      x: 0,
      y: 0
    };
  });
  let o = useCallback(i => {
    let n = {
      insertAsChildOfGuid: e.slotNodeId,
      insertAsChildOfCanvas: !1,
      canvasPosition: s,
      percentageOffset: new _$$M(0.5, 0.5),
      useSmartPositioning: !1,
      selectAfterInsert: !0
    };
    i.type === PW.COMPONENT ? t(_$$FU({
      item: i,
      ...n
    })) : i.type === PW.STATE_GROUP && t(b$({
      item: i,
      ...n
    }));
  }, [t, e.slotNodeId, s]);
  return jsx(bL, {
    width: _$$qo,
    maxHeight: 360,
    onClose: e.onClose,
    recordingKey: 'slotPreferredContentPicker',
    defaultPosition: r,
    children: jsxs(vo, {
      children: [jsx(Y9, {
        children: jsx(hE, {
          children: _$$tx('design_systems.slots.content_picker.title_add')
        })
      }), jsx(_$$nB, {
        'padding': 0,
        'style': {
          height: 320
        },
        'data-testid': 'slot-preferred-content-picker',
        'children': jsx('div', {
          ..._$$Ay7.props(iT.container),
          children: preferredValues.map(e => jsx(iR, {
            component: e,
            onClick: o
          }, e.node_id))
        })
      })]
    })
  });
}
function iR({
  component: e,
  onClick: t
}) {
  let i = useCallback(() => {
    t(e);
  }, [e, t]);
  return jsxs(_$$E, {
    onClick: i,
    ..._$$Ay7.props(iT.thumbnailButton),
    children: [jsx('div', {
      ..._$$Ay7.props(iT.thumbnailImageBorder),
      children: jsx(_$$M2, {
        item: e,
        shouldGenerateLocalThumbnail: !0,
        draggable: !1,
        ..._$$Ay7.props(iT.thumbnailImage)
      })
    }), jsx('div', {
      ..._$$Ay7.props(iT.preferredContentName),
      children: jsx(ph, {
        text: e.name
      })
    })]
  });
}
let iN = _$$Ju(e => {
  let t;
  return (t = e.slotNodeId, _$$Fk((e, t) => {
    let i = e.get(t);
    return !!i?.isSlotReactive;
  }, t) && getFeatureFlags().dse_slots) ? jsx(ik, {
    ...e
  }) : null;
}, 'SLOT_PREFERRED_CONTENT_PICKER_MODAL_TYPE', ZU.YES);
let iG = {
  dumpFrecencyData: () => {
    let {
      actions,
      queries
    } = x0();
    Lo('Frecency Debug Info:', 'Frecency Data', {
      actions: actions.serialize(),
      queries: queries.serialize()
    });
  },
  dumpFrecencyScoreForAction: (e, t) => {
    let i = x0();
    let n = _$$y(e, t, i);
    let {
      actions,
      queries
    } = x0();
    let s = actions.data(t)?.debugScore();
    let o = queries.data(e, t)?.debugScore();
    Lo('Frecency Debug Info:', 'Frecency Score', {
      action: t,
      query: e,
      totalScore: n,
      actionDebuggingData: s,
      queryDebuggingData: o
    });
  },
  clearFrecencyData: Zk
};
let i0 = _$$Ju(e => {
  let t = wA();
  let i = hS(e);
  return jsx(_$$bL, {
    manager: i,
    width: 'md',
    children: jsxs(vo, {
      children: [jsx(Y9, {
        children: jsx(hE, {
          children: _$$tx('fullscreen.fullscreen_view.attempted_sketch_import.import_from_sketch')
        })
      }), jsx(_$$nB, {
        children: _$$tx('fullscreen.fullscreen_view.attempted_sketch_import.to_import_your_sketch_files_please_drag_them_into_your_file_space')
      }), jsx(_$$wi, {
        children: jsxs(jk, {
          children: [jsx($n, {
            onClick: () => {
              t(Ce());
            },
            variant: 'secondary',
            children: _$$tx('fullscreen.fullscreen_view.attempted_sketch_import.do_it_later')
          }), jsx(_$$N2.Button, {
            newTab: !0,
            href: '/files',
            children: _$$tx('fullscreen.fullscreen_view.attempted_sketch_import.go_to_file_space')
          })]
        })
      })]
    })
  });
}, 'fullscreen-attempted-sketch-file-drop-modal');
function nl(e) {
  cgc?.receive(e);
}
let nm = ['#007BE5', '#0087A8', '#009951', '#00B5CE', '#0FA958', '#14AE5C', '#18A0FB', '#1BC47D', '#536383', '#5551FF', '#667799', '#848484', '#8638E5', '#907CFF', '#9747FF', '#D27C2C', '#DC3412', '#EA10AC', '#EBEBEB', '#EE46D3', '#EF5533', '#F24822', '#F24E1E', '#FF24BD', '#FFC21A', '#FFC700', '#FFCD29'];
let nh = ['Hello world!', 'Collaboration is the key', 'Critical!!!!', 'Can we please iterate on this process', 'This is the most important message of your life', 'I liked it more in the blue color', 'Corporate Accounts Payable, Nina Speaking. JUST A Moment!', 'I Was Told That I Could Listen To The Radio At A Reasonable Volume, From Nine To Eleven', 'Why Does It Say Paper Jam When There Is No Paper Jam!', 'Sounds Like Somebody\u2019s Got A Case Of The Mondays!', 'Oh, And Remember, Next Friday Is Hawaiian Shirt Day!', 'That Means Every Single Day That You See Me, That\u2019s On The Worst Day Of My Life.'];
let ng = {
  mouseMoveMaxDelta: 70,
  canvasBounds: 2e3,
  centerX: 0,
  centerY: 0
};
let nf = _$$nc.testSetup('sticky-typing-scenario', (e, t, i = {}) => {
  let n = i.sessionID ?? Math.floor(2e3 * e()) + 200;
  let [r, a] = nA(e, n, window.INITIAL_OPTIONS.user_data.id);
  let s = Math.floor((t - 1) / 2);
  let o = Math.floor(e() * s);
  let l = t - s;
  let d = nI(e, nh);
  let c = {
    sessionID: n,
    localID: Math.floor(1e3 * e())
  };
  let u = [];
  let p = UN();
  let m = p.createNode('STICKY');
  let h = i.canvasGuid || nP();
  p.get(m.containingCanvas).setSelectionToSingleNode(m.guid);
  nE(m);
  let g = m.textSublayer;
  let [f, ..._] = ny(e, {
    frames: s,
    varyZoom: !1
  }, i);
  nx(m, f.x, f.y);
  nS(g, 'Sticky text');
  nE(m);
  let A = {
    type: 'NODE_CHANGES',
    sessionID: n,
    ackID: 0,
    blobs: nN(),
    nodeChanges: [{
      ...nR(),
      guid: c,
      phase: 'CREATED'
    }]
  };
  u.push([A]);
  u.push(...nk(c, n, m, _.slice(0, o), h));
  let y = '';
  for (let e = 0; e < l; e++) {
    nS(g, y += d[e % d.length]);
    nE(m);
    let t = nR();
    u.push([nw(n, {
      guid: c,
      nodeGenerationData: t.nodeGenerationData,
      derivedImmutableFrameData: t.derivedImmutableFrameData,
      size: t.size,
      name: t.name
    }, nN()), nC(n, [c], h)]);
  }
  u.push(...nk(c, n, m, _.slice(o), h));
  let b = {
    type: 'NODE_CHANGES',
    sessionID: n,
    ackID: 0,
    nodeChanges: [{
      guid: c,
      phase: 'REMOVED'
    }]
  };
  u.push([b]);
  m.removeSelfAndChildren();
  return {
    sessionID: n,
    initMessages: [r],
    repeatMessages: u,
    cleanUpMessages: [a, b]
  };
});
function n_(e, t, i = {}) {
  let n = i.sessionID ?? Math.floor(2e3 * e()) + 200;
  let r = window.INITIAL_OPTIONS.user_data.id;
  let a = i.canvasGuid || nP();
  let s = [];
  for (let {
    x,
    y
  } of ny(e, {
    frames: Math.floor(t / 2),
    varyZoom: !1
  }, i)) {
    s.push([{
      type: 'USER_CHANGES',
      sessionID: n,
      ackID: 0,
      userChanges: [nb(x, y, n, a)]
    }]);
  }
  let o = nv(s);
  t % 2 == 1 && s.push(s[s.length - 1]);
  let [l, d] = nA(e, n, r);
  return {
    sessionID: n,
    initMessages: [l],
    repeatMessages: s.concat(o),
    cleanUpMessages: [d]
  };
}
function nA(e, t, i) {
  let n = nm[Math.floor(e() * nm.length)];
  return [{
    type: 'USER_CHANGES',
    sessionID: t,
    ackID: 0,
    userChanges: [{
      sessionID: t,
      userID: i,
      connected: !0,
      name: 'test user',
      imageURL: 'https://via.placeholder.com/300/09f/fff.png',
      deviceName: 'editor',
      canWrite: !0,
      color: _$$tK(n) || {
        r: 0,
        g: 0,
        b: 0,
        a: 0
      },
      connectedAtTimeS: +new Date()
    }]
  }, {
    type: 'USER_CHANGES',
    sessionID: t,
    ackID: 0,
    userChanges: [{
      sessionID: t,
      userID: i,
      connected: !1
    }]
  }];
}
function ny(e, {
  frames: t,
  varyZoom: i
}, n = {}) {
  let {
    mouseMoveMaxDelta,
    canvasBounds,
    centerX,
    centerY
  } = {
    ...ng,
    ...n
  };
  let l = Math.floor(e() * canvasBounds) + centerX;
  let d = Math.floor(e() * canvasBounds) + centerY;
  let c = 1;
  let u = () => Math.floor(e() * (2 * mouseMoveMaxDelta)) - mouseMoveMaxDelta;
  let p = () => Math.max(1.8 * e(), 0.2);
  let m = () => [u(), u()];
  let h = m();
  let g = (e, t) => [e + h[0] / c, t + h[1] / c];
  let f = [];
  for (let n = 0; n < t; n++) {
    f.push({
      x: l,
      y: d,
      h: 1200 / c,
      w: 1600 / c
    });
    [l, d] = g(l, d);
    e() > 0.6 && (h = m());
    i && e() > 0.8 && (c = p());
  }
  return f;
}
function nb(e, t, i, n) {
  return {
    sessionID: i,
    highFiveStatus: !1,
    mouse: {
      cursor: 'DEFAULT',
      canvasSpaceLocation: {
        x: e,
        y: t
      },
      canvasGuid: n
    }
  };
}
function nv(e) {
  return e.slice().reverse();
}
function nI(e, t) {
  return t[Math.floor(e() * t.length)];
}
function nE(e) {
  UNF.setGlobalUnstableNodeByID(e.sceneGraph.scene, e.sessionID, e.localID, Sie.PLUGIN);
  UNF.getAbsoluteBoundingBox(Sie.PLUGIN);
}
function nx(e, t, i) {
  e.relativeTransform = {
    m00: 1,
    m01: 0,
    m02: t,
    m10: 0,
    m11: 1,
    m12: i
  };
  MT(e.type) && nE(e);
}
_$$nc.testSetup('table-typing-scenario', (e, t, i = {}) => {
  let n = i.sessionID ?? Math.floor(2e3 * e()) + 200;
  let [r, a] = nA(e, n, window.INITIAL_OPTIONS.user_data.id);
  let s = i.canvasGuid || nP();
  let o = Math.floor(t / 2);
  let l = Math.floor(e() * o);
  let d = t - o;
  let c = nI(e, nh);
  let u = [];
  let p = UN();
  let m = i.nodeId;
  let h = p.get(m);
  let g = h.tableNumRows;
  let f = h.tableNumColumns;
  p.get(h.containingCanvas).setSelectionToSingleNode(m);
  nE(h);
  let _ = t => {
    let i = h.cellAt(Math.floor(e() * g), Math.floor(e() * f));
    p.get(i).textSublayer.characters = t;
    nE(h);
  };
  let [A, ...y] = ny(e, {
    frames: o,
    varyZoom: !1
  }, i);
  nx(h, A.x, A.y);
  _('table cell text');
  u.push(...nT(n, h, y.slice(0, l), s));
  let b = '';
  for (let e = 0; e < d; e++) {
    _(b += c[e % c.length]);
    let t = nR();
    u.push([nw(n, {
      guid: _$$sH(m),
      nodeGenerationData: t.nodeGenerationData,
      derivedImmutableFrameData: t.derivedImmutableFrameData,
      size: t.size,
      name: t.name
    }, nN()), nC(n, [_$$sH(m)], s)]);
  }
  u.push(...nT(n, h, y.slice(l), s));
  return {
    sessionID: n,
    initMessages: [r],
    repeatMessages: u,
    cleanUpMessages: [a]
  };
});
let nS = (e, t) => {
  e.characters = t;
};
function nw(e, t, i = []) {
  return {
    type: 'NODE_CHANGES',
    sessionID: e,
    ackID: 0,
    blobs: i,
    nodeChanges: [t]
  };
}
function nC(e, t, i) {
  return {
    type: 'USER_CHANGES',
    sessionID: e,
    ackID: 0,
    userChanges: [{
      sessionID: e,
      viewport: {
        canvasSpaceBounds: {
          x: 0,
          y: 0,
          w: 1024,
          h: 768
        },
        pixelPreview: !1,
        pixelDensity: 1,
        canvasGuid: i
      },
      selection: t
    }]
  };
}
function nT(e, t, i, n) {
  return nk({
    localID: t.localID,
    sessionID: t.sessionID
  }, e, t, i, n);
}
function nk(e, t, i, n, r) {
  let a = [];
  for (let {
    x,
    y
  } of n) {
    nx(i, x, y);
    let n = nR();
    a.push([nw(t, {
      guid: e,
      transform: n.transform
    }), {
      type: 'USER_CHANGES',
      sessionID: t,
      ackID: 0,
      userChanges: [nb(x + 50, y + 50, t, r)]
    }]);
  }
  return a;
}
function nR() {
  return _$$w.decodeNodeChange(msz.dumpSelectedNode());
}
function nN() {
  return _$$w.decodeMessage(msz.dumpSelectedNode()).blobs;
}
function nP() {
  let e = UN().getCurrentPage();
  return _$$sH(e?.guid) || {
    sessionID: 0,
    localID: 1
  };
}
let nO = 'perf_tools--inactiveLabel--ihg7R raw_components--iconInsideBorderFocusWithin--2g7fO';
let nD = 'perf_tools--buttonGroup--OGfJC';
let nL = 'perf_tools--intInput--p485-';
let nU = null;
class nB extends KD {
  constructor() {
    super(...arguments);
    this.allowedUnits = 'ms';
  }
  format(e) {
    if (e == null) return '';
    let t = Math.max(10, Math.floor(e));
    return `${t}ms`;
  }
}
let nV = new nB({});
let nG = new Lk({
  smallNudgeAmount: 0.1,
  bigNudgeAmount: 1
});
let nz = {
  'mouse movement': n_,
  'viewport movement': function(e, t, i = {}) {
    let n = i.sessionID ?? Math.floor(2e3 * e()) + 200;
    let r = window.INITIAL_OPTIONS.user_data.id;
    let a = i.canvasGuid || nP();
    let s = [];
    for (let {
      x,
      y,
      h,
      w
    } of ny(e, {
      frames: Math.floor(t / 2),
      varyZoom: !0
    }, {
      ...i,
      mouseMoveMaxDelta: 250
    })) {
      s.push([{
        type: 'USER_CHANGES',
        sessionID: n,
        ackID: 0,
        userChanges: [nb(x, y, n, a)]
      }, {
        type: 'USER_CHANGES',
        sessionID: n,
        ackID: 0,
        userChanges: [{
          sessionID: n,
          userID: r,
          viewport: {
            canvasSpaceBounds: {
              x: x - w / 2,
              y: y - h / 2,
              w,
              h
            },
            pixelPreview: !1,
            pixelDensity: 1,
            canvasGuid: a
          }
        }]
      }]);
    }
    let o = nv(s);
    t % 2 == 1 && s.push(s[s.length - 1]);
    let [l, d] = nA(e, n, r);
    return {
      sessionID: n,
      initMessages: [l],
      repeatMessages: s.concat(o),
      cleanUpMessages: [d]
    };
  },
  'reactions': function(e, t, i = {}) {
    let n = n_(e, t, i);
    let r = [];
    for (let t of n.repeatMessages) {
      let i = buildUploadUrl(`${nI(e, _$$n4).image}`);
      r.push([...t, {
        type: 'CLIENT_BROADCAST',
        broadcasts: [{
          sessionID: n.sessionID,
          cursorReaction: {
            imageUrl: i
          }
        }]
      }]);
    }
    return {
      ...n,
      repeatMessages: r
    };
  },
  'chatter': function(e, t, i = {}) {
    let {
      canvasBounds,
      centerX,
      centerY
    } = {
      ...ng,
      ...i
    };
    let s = i.sessionID ?? Math.floor(2e3 * e()) + 200;
    let o = window.INITIAL_OPTIONS.user_data.id;
    let l = nI(e, nh);
    let d = i.canvasGuid || nP();
    let c = 0;
    let u = 0;
    let [p, m] = nA(e, s, o);
    let h = [];
    for (let i = 0; i < t;) {
      c = Math.floor(e() * canvasBounds) + centerX;
      u = Math.floor(e() * canvasBounds) + centerY;
      for (let e = 0; e < l.length && i < t - 1; e++, i++) {
        h.push([{
          type: 'USER_CHANGES',
          sessionID: s,
          ackID: 0,
          userChanges: [{
            ...nb(c, u, s, d),
            chatMessage: {
              previousText: '',
              text: l.substring(0, e)
            }
          }]
        }]);
      }
      h.push([{
        type: 'USER_CHANGES',
        sessionID: s,
        ackID: 0,
        userChanges: [{
          ...nb(c, u, s, d),
          chatMessage: {
            previousText: l,
            text: ''
          }
        }]
      }]);
      i++;
    }
    return {
      sessionID: s,
      initMessages: [p],
      repeatMessages: h,
      cleanUpMessages: [m]
    };
  },
  'sticky typing': nf
};
let nH = (e, t, i = 20, n = 'mouse movement', r = 0, a = 0) => {
  useEffect(() => {
    let s = _$$g3(0xFA57FA57);
    let o = [];
    let l = nz[n];
    for (let t = 0; t < e; t++) {
      o.push(l(s, i, {
        centerX: r,
        centerY: a
      }));
    }
    return function(e, t) {
      if (e === null) return () => { };
      let i = 0;
      let n = !1;
      let r = setInterval(() => {
        if (!n) {
          nl(e.initFrame);
          n = !0;
          return;
        }
        let t = e.repeatFrames;
        nl(t[i]);
        i = (i + 1) % t.length;
      }, t);
      return () => {
        clearInterval(r);
        nl(e.cleanUpFrame);
      };
    }(function(e) {
      if (!e.length) return null;
      if (e.some(t => t.repeatMessages.length !== e[0].repeatMessages.length)) throw new Error(`All scenarios must have the same length of repeat messages to be compiled together ${e.map(e => e.repeatMessages.length).join(', ')}`);
      let t = e => {
        let t = new Uint8Array(e.reduce((e, t) => e + t.length, 0));
        let i = 0;
        for (let n of e) {
          t.set(n, i);
          i += n.length;
        }
        return t;
      };
      let i = e => e.reduce((e, t) => e.concat(t), []);
      let n = e => deflateRaw(t(e.map(e => _$$w.encodeMessage(e))));
      let r = {
        initFrame: n(i(e.map(e => e.initMessages))),
        repeatFrames: [],
        cleanUpFrame: n(i(e.map(e => e.cleanUpMessages)))
      };
      let a = e[0].repeatMessages.length;
      for (let t = 0; t < a; t++) {
        let a = i(e.map(e => e.repeatMessages[t]));
        r.repeatFrames.push(n(a));
      }
      return r;
    }(o), t);
  }, [e, t, i, n, r, a]);
};
function nW() {
  let [e, t] = useState(0);
  let [i, n] = useState(33);
  let [r, s] = useState(20);
  let [o, l] = useState(Object.keys(nz)[0]);
  let [d, c] = useState(0);
  let [p, m] = useState(0);
  nH(e, i, r, o, d, p);
  return jsx(Ao, {
    title: 'Fake Multiplayer activity',
    initialPosition: new Point(0.7 * window.innerWidth, 0.5 * window.innerHeight),
    onClose: nK,
    headerClassName: 'perf_tools--header--LMO8p',
    children: jsxs(Id, {
      className: 'perf_tools--modal--KARjM',
      children: [jsx('div', {
        children: jsx('select', {
          value: o,
          onChange: e => l(e.target.value),
          children: Object.keys(nz).map(e => jsx('option', {
            value: e,
            children: e
          }, e))
        })
      }), jsxs('div', {
        children: [jsx(JU, {
          className: 'perf_tools--label--LWmjv',
          children: _$$tx('fake_mp.modal.cursors')
        }), jsx(Ht, {
          'className': nL,
          'value': e,
          'onValueChange': t,
          'min': 0,
          'dispatch': lQ,
          'data-tooltip-type': Ib.TEXT,
          'data-tooltip': _$$t('fake_mp.modal.clients'),
          'children': jsx(_$$B2, {
            className: nO,
            svg: _$$A3
          })
        }), jsx(j5, {
          'className': nL,
          'value': i,
          'onValueChange': n,
          'formatter': nV,
          'dispatch': lQ,
          'data-tooltip-type': Ib.TEXT,
          'data-tooltip': _$$t('fake_mp.modal.frequency'),
          'children': jsx(_$$B2, {
            className: nO,
            svg: _$$A2
          })
        }), jsx(Ht, {
          'className': nL,
          'value': r,
          'onValueChange': s,
          'min': 5,
          'max': 200,
          'dispatch': lQ,
          'data-tooltip-type': Ib.TEXT,
          'data-tooltip': _$$t('fake_mp.modal.steps'),
          'children': jsx(_$$B2, {
            className: nO,
            svg: _$$A4
          })
        }), jsx(j5, {
          'className': nL,
          'value': d,
          'onValueChange': c,
          'dispatch': lQ,
          'formatter': nG,
          'data-tooltip-type': Ib.TEXT,
          'data-tooltip': _$$t('fake_mp.modal.center_x'),
          'children': jsx('span', {
            className: nO,
            children: `${_$$t('fake_mp.modal.center_x')}:`
          })
        }), jsx(j5, {
          'className': nL,
          'value': p,
          'onValueChange': m,
          'dispatch': lQ,
          'formatter': nG,
          'data-tooltip-type': Ib.TEXT,
          'data-tooltip': _$$t('fake_mp.modal.center_y'),
          'children': jsx('span', {
            className: nO,
            children: `${_$$t('fake_mp.modal.center_y')}:`
          })
        })]
      }), jsxs(_$$e6, {
        className: nD,
        children: [jsx($n, {
          variant: 'secondary',
          type: 'submit',
          onClick: () => {
            let e = Y5.getViewportInfo();
            c(e.offsetX);
            m(e.offsetY);
          },
          children: _$$tx('fake_mp.modal.center')
        }), jsx($n, {
          variant: 'secondary',
          type: 'submit',
          onClick: () => {
            t(0);
            n(16);
            s(20);
            c(0);
            m(0);
          },
          children: _$$tx('fake_mp.modal.reset')
        }), jsx($n, {
          variant: 'primary',
          type: 'submit',
          onClick: lQ,
          children: _$$tx('fake_mp.modal.apply')
        })]
      })]
    })
  });
}
function nK() {
  nU ? (unmountComponentAtNode(nU), document.body.removeChild(nU), nU = null) : (nU = document.createElement('div'), document.body.appendChild(nU), _$$H2(nU).render(jsx(nW, {})));
}
let nZ = null;
let nX = null;
class nQ extends KD {
  constructor() {
    super(...arguments);
    this.allowedUnits = 'ms';
  }
  format(e) {
    return e == null ? '' : `${e}s`;
  }
}
function nJ() {
  let e = J2(_$$d2().editFrameExtraSeconds);
  let t = useCallback(e => {
    _$$d2().editFrameExtraSeconds.set(e - 0.016);
  }, []);
  let i = J2(_$$d2().editFrameExtraFramebufferSwitches);
  let n = useCallback(e => {
    _$$d2().editFrameExtraFramebufferSwitches.set(e - 250);
  }, []);
  let r = J2(_$$d2().maxEditTimeSeconds);
  let s = useCallback(e => {
    _$$d2().maxEditTimeSeconds.set(e);
  }, []);
  let o = useCallback(() => {
    _$$d2().editFrameExtraSeconds.set(0.026);
    _$$d2().editFrameExtraFramebufferSwitches.set(0);
    _$$d2().maxEditTimeSeconds.set(1);
  }, []);
  return jsx(bL, {
    defaultPosition: new Point(0.7 * window.innerWidth, 0.5 * window.innerHeight),
    onClose: n0,
    width: 300,
    children: jsxs(vo, {
      children: [jsx(Y9, {
        children: jsx(hE, {
          children: 'TSMER Config'
        })
      }), jsxs(_$$nB, {
        children: [jsx(_$$J3, {
          children: _$$tx('tsmer_config.modal.levers_label')
        }), jsx(j5, {
          'className': nL,
          'value': 0.016 + e,
          'onValueChange': t,
          'formatter': new nQ({
            min: 0.016,
            max: 0.5
          }),
          'dispatch': lQ,
          'data-tooltip-type': Ib.TEXT,
          'data-tooltip': _$$t('tsmer_config.modal.edit_frame_budget_seconds'),
          'children': jsx(_$$B2, {
            className: nO,
            svg: _$$A3
          })
        }), jsx(Ht, {
          'className': nL,
          'value': 250 + i,
          'onValueChange': n,
          'min': 250,
          'max': 2e3,
          'dispatch': lQ,
          'data-tooltip-type': Ib.TEXT,
          'data-tooltip': _$$t('tsmer_config.modal.edit_frame_budget_framebuffer_switches'),
          'children': jsx(_$$B2, {
            className: nO,
            svg: _$$A4
          })
        }), jsx(j5, {
          'className': nL,
          'value': r,
          'onValueChange': s,
          'formatter': new nQ({
            min: 0,
            max: 5
          }),
          'dispatch': lQ,
          'data-tooltip-type': Ib.TEXT,
          'data-tooltip': _$$t('tsmer_config.modal.max_edit_frame_time_seconds'),
          'children': jsx(_$$B2, {
            className: nO,
            svg: _$$A3
          })
        })]
      }), jsx(_$$wi, {
        children: jsx(jk, {
          children: jsx(_$$e6, {
            className: nD,
            children: jsx($n, {
              variant: 'secondary',
              type: 'submit',
              onClick: o,
              children: _$$tx('tsmer_config.modal.reset')
            })
          })
        })
      })]
    })
  });
}
function n0() {
  nZ ? (nX?.unmount(), document.body.removeChild(nZ), nZ = null) : (nZ = document.createElement('div'), document.body.appendChild(nZ), (nX = _$$H2(nZ)).render(jsx(nJ, {})));
}
let rg = rh;
let rv = parsePxNumber('16px');
let rI = parsePxNumber('48px');
let rE = parsePxNumber('41px');
let rx = _$$Ju(() => {
  let e = _$$n5({
    type: rx
  });
  let t = function() {
    let [{
      windowInnerWidth: e,
      windowInnerHeight: t
    }] = _$$A5(_$$l4(), 300);
    let i = Q_();
    let n = window.innerWidth - 2 * rv;
    let r = window.innerHeight - parsePxNumber('20px') - rI - parsePxNumber('60px') - 2 * rv;
    let [a] = useState(() => {
      let a = Number(i?.getItem('fragment-inspect-modal-width'));
      let s = Number(i?.getItem('fragment-inspect-modal-height'));
      let o = function() {
        let e = i?.getItem('fragment-inspect-modal-position');
        if (!e) return;
        let t = JSON.parse(e);
        return new Point(t.x, t.y);
      }();
      if (a && s && o && a <= n && s + rE <= r) {
        return {
          initialWidth: a,
          initialHeight: s,
          initialPosition: o
        };
      }
      let l = Math.min(640, n);
      let d = Math.min(Math.round(1 / (4 / 3) * l), r);
      return {
        initialWidth: l,
        initialHeight: d - rE,
        initialPosition: new Point((e - l) / 2, (t - d) / 2)
      };
    });
    return {
      initialConstraints: {
        x: 'left',
        y: 'top'
      },
      initialWidth: a.initialWidth,
      initialHeight: a.initialHeight,
      initialPosition: a.initialPosition
    };
  }();
  let i = useRef(null);
  let n = md(LK.indexedFragmentDataAtom);
  Object.keys(n).forEach(e => {
    e.endsWith('embedding') && (n[e] = '[...]');
  });
  let r = (() => {
    if (Object.keys(n).length === 0) {
      return jsx('div', {
        children: 'Fragment is not indexed'
      });
    }
    let e = `JSON for fragment with id ${n.file_id}-${n.node_id}`;
    return jsxs('div', {
      children: [jsx('div', {
        className: _$$s6.ml8.fontSemiBold.font11.fontUi.$,
        children: e
      }), jsx('pre', {
        children: JSON.stringify(n, null, 2)
      })]
    });
  })();
  return jsx(Ao, {
    initialConstraints: t?.initialConstraints,
    initialHeight: t?.initialHeight,
    initialPosition: t?.initialPosition,
    initialWidth: t?.initialWidth,
    ref: i,
    onClose: e,
    title: jsx('div', {
      className: rg()('fragment_inspect_modal--antialiased--Pqy2m', _$$s6.flex.flex1.itemsCenter.justifyBetween.pr6.$),
      role: 'button',
      tabIndex: 0,
      children: jsx('div', {
        className: _$$s6.ml8.fontSemiBold.font11.fontUi.$,
        children: _$$tx('fragment_search.fragment_inspect_modal_title')
      })
    }),
    children: jsx('div', {
      className: _$$s6.flex.flexColumn.hFull.overflowYScroll.overflowWrapAnywhere.px16.$,
      children: r
    })
  });
}, 'FRAGMENT_INSPECT_MODAL', ZU.YES);
let rP = [{
  key: 'choice',
  name: 'Pick an option',
  allowFreeform: !1
}];
let rO = [{
  key: 'new-component',
  label: 'Link to new component'
}, {
  key: 'existing-component',
  label: 'Link to existing component'
}];
var rD = (e => (e.INITIAL = 'initial', e.SELECT_EXISTING_COMPONENT = 'select-existing-component', e))(rD || {});
function rL() {
  let [e, t] = useState('initial');
  let [i, n] = useState([]);
  let r = Tv();
  let {
    close
  } = cq();
  let o = useMemo(() => {
    let e = [];
    for (let t of r) {
      let i = UN().get(t);
      i && i.type === 'FRAME' && !i.isStateGroup && e.push(i);
    }
    return e;
  }, [r]);
  switch (e) {
    case 'initial':
      return jsx(ch, {
        parameters: rP,
        triggeredFrom: 'quick-actions',
        displayName: '',
        parameterOnly: !0,
        terminate: lQ,
        hideOnRun: !1,
        handler: {
          triggerParameterInputEvent: ({
            currentSearchQuery: e,
            onSuggestions: t
          }) => {
            let i = e.toLowerCase();
            t({
              type: 'SUGGESTIONS',
              suggestions: rO.filter(e => e.label.toLowerCase().includes(i)).map(e => ({
                name: e.label,
                data: e.key
              }))
            });
          },
          triggerRunEvent: e => {
            if (e && 'parameters' in e && e.parameters) {
              if (e.parameters.choice.data === 'existing-component') {
                n(o.map(e => e.guid));
                let e = UN().getCurrentPage();
                e && (e.directlySelectedNodes = []);
                t('select-existing-component');
              } else {
                e.parameters.choice.data === 'new-component' && (l7.user('create-new-component', () => {
                  Qy(o, !0);
                }), close());
              }
            }
          }
        }
      });
    case 'select-existing-component':
      return jsx(_$$A6, {
        action: 'link-to-existing-component',
        actionIcon: jsx(_$$B5, {}),
        actionLabel: _$$tx('first_draft.link_component.link_button'),
        onPerform: () => {
          if (i.length === 0) return;
          let e = UN().getCurrentPage();
          if (!e) return;
          let t = e.directlySelectedNodes;
          if (t.length === 0) return;
          let n = t[0];
          let r = i.map(e => UN().get(e));
          l7.user('link-frames-to-component', () => {
            v$(r, n);
          });
          close();
        },
        getCustomDisabledTextFromSelectedNodes: e => function(e) {
          let t = _$$tx('first_draft.link_component.component_selection_instruction');
          if (e.length !== 1 || e[0].type !== 'SYMBOL') return t;
        }(e),
        aiTrackingContext: void 0,
        instructionAction: {
          type: 'learn_more',
          url: zw
        },
        children: _$$tx('first_draft.link_component.component_selection_instruction')
      });
    default:
      xb(e);
  }
}
let r0 = (e, t) => {
  if (e === ywP.DISPLAY_P3) {
    if (t === 'convert') return _$$t('fullscreen.color_management.document_modal.confirm.title.convert_display_p3');
    if (t === 'assign') return _$$t('fullscreen.color_management.document_modal.confirm.title.assign_display_p3');
  } else if (e === ywP.SRGB) {
    if (t === 'convert') return _$$t('fullscreen.color_management.document_modal.confirm.title.convert_srgb');
    if (t === 'assign') return _$$t('fullscreen.color_management.document_modal.confirm.title.assign_srgb');
  }
  Lo('DocumentColorProfileModal', `invalid currentDocumentColorProfile (${e}) or changeOption (${t}) for i18NStringForConfirmationText`);
  return _$$t('general.confirm');
};
let r1 = e => _$$t('fullscreen.color_management.document_modal.cancel', {
  color_profile: r2(e)
});
let r2 = e => e === ywP.DISPLAY_P3 ? _$$t('fullscreen.filename_view.color_management.color_profile_display_p3') : e === ywP.SRGB ? _$$t('fullscreen.filename_view.color_management.color_profile_srgb') : (Lo('DocumentColorProfileModal', `invalid documentColorProfile (${e}) for i18NStringForDocumentColorProfile`), '');
let r5 = e => e === ywP.DISPLAY_P3 ? _$$t('fullscreen.color_management.file_history.assign-display-p3') : e === ywP.SRGB ? _$$t('fullscreen.color_management.file_history.assign-srgb') : (Lo('DocumentColorProfileModal', `invalid documentColorProfile (${e}) for i18NStringForDocumentColorProfileAssignment`), '');
let r4 = (e, t) => {
  switch (t.status) {
    case 'SupportedNatively':
    case 'SupportedWithPolyfill':
      return null;
    case 'ClientNotSupported':
      return e === 'convert' ? _$$t('fullscreen.color_management.document_modal.warning.display_p3_not_supported.client.convert') : _$$t('fullscreen.color_management.document_modal.warning.display_p3_not_supported.client.assign');
    case 'MonitorNotSupported':
      return _$$t('fullscreen.color_management.document_modal.warning.display_p3_not_supported.monitor');
  }
};
let r3 = e => {
  switch (e) {
    case ywP.SRGB:
      return _$$t('fullscreen.color_management.document_modal.options.convert.subtitle.srgb_to_display_p3');
    case ywP.DISPLAY_P3:
      return _$$t('fullscreen.color_management.document_modal.options.convert.subtitle.display_p3_to_srgb');
  }
};
function r6(e, t, i, n, r) {
  switch (r && e(t === ywP.LEGACY ? _$$m3({
    fileKey: r,
    label: _$$t('fullscreen.color_management.file_history.label'),
    description: r5(i),
    hideVisualBell: !0
  }) : _$$m3({
    fileKey: r,
    label: _$$t('fullscreen.color_management.file_history.label'),
    description: `${r2(t)} \u2192 ${r2(i)}`,
    hideVisualBell: !0
  })), i) {
    case ywP.SRGB:
      n === 'assign' ? glU.triggerAction('assign-document-color-profile-srgb', {}) : n === 'convert' && glU.triggerAction('convert-document-color-profile-srgb', {});
      break;
    case ywP.DISPLAY_P3:
      n === 'assign' ? glU.triggerAction('assign-document-color-profile-display-p3', {}) : n === 'convert' && glU.triggerAction('convert-document-color-profile-display-p3', {});
  }
}
let r7 = _$$Ju(({
  newDocumentColorProfile: e,
  open: t,
  onClose: i
}) => {
  let n = wA();
  let r = q5();
  let [o, l] = Vc('preferred-document-color-profile-change-option', 'convert');
  let d = Av();
  let c = e === ywP.DISPLAY_P3 ? r4(o, d) : null;
  let u = e === ywP.SRGB ? ywP.DISPLAY_P3 : ywP.SRGB;
  return jsx(fu, {
    name: 'color_management_document_color_profile_modal',
    children: jsxs(_$$R, {
      open: t,
      onClose: i,
      width: 'lg',
      title: jsx(Fragment, {
        children: _$$tx('fullscreen.color_management.document_modal.title', {
          color_profile: r2(e)
        })
      }),
      cancelText: r1(u),
      confirmText: r0(e, o),
      onConfirm: () => r6(n, u, e, o, r?.key),
      children: [jsxs(_$$b3, {
        legend: jsx(_$$q3, {
          children: _$$tx('fullscreen.color_management.document_modal.legend')
        }),
        value: o,
        onChange: e => {
          l(e);
        },
        children: [jsx(_$$c4, {
          value: 'convert',
          label: jsx(_$$J3, {
            children: _$$t('fullscreen.color_management.document_modal.options.convert.title')
          }),
          children: jsxs(Fragment, {
            children: [r3(e), e === ywP.SRGB && o === 'convert' && jsxs('div', {
              className: 'document_color_profile_modal--migratedWarning--4bN32',
              children: [jsx(_$$Z4, {}), _$$tx('fullscreen.color_management.document_modal.warning.clamp.convert'), jsx(Ph, {
                newTab: !0,
                trusted: !0,
                href: _$$s8,
                children: _$$tx('rcs.rcs_shared.learn_more')
              })]
            })]
          })
        }), jsx(_$$c4, {
          value: 'assign',
          label: jsx(_$$J3, {
            children: _$$t('fullscreen.color_management.document_modal.options.assign.title')
          }),
          children: _$$t('fullscreen.color_management.document_modal.options.assign.subtitle')
        })]
      }), c && jsxs('div', {
        className: 'document_color_profile_modal--migratedBottomWarningText--LdbKb',
        children: [jsx(_$$Z4, {}), c]
      })]
    })
  });
}, 'document_color_profile_modal');
async function ad(e, t) {
  if (!_$$il(t)) return;
  let i = {
    x: (t.absoluteBoundingBox.x - e.absoluteBoundingBox.x) / WE,
    y: (t.absoluteBoundingBox.y - e.absoluteBoundingBox.y) / WE,
    w: t.absoluteRenderBounds.width / WE,
    h: t.absoluteRenderBounds.height / WE
  };
  if (!t.id) return i;
  let n = await new Promise(e => {
    e(Vzr?.generateThumbnailForNode(t.id, t.absoluteRenderBounds.width, t.absoluteRenderBounds.height, 1, {}));
  });
  if (!n) return;
  let [r, a] = n;
  let o = hp.from(a).toString('base64');
  return {
    ...i,
    data: `data:image/png;base64,${o}`
  };
}
async function au(e, t, i, n) {
  let r = {
    ...W9(e, t),
    type: 'video'
  };
  let a = PZ(t, {
    imageHashesToUrls: i,
    videoHashesToUrls: n
  });
  if (a) {
    r = {
      ...r,
      ...a,
      extn: 'mp4'
    };
    let e = t.fills?.[0];
    if (e?.imageRef) {
      let t = i?.[e?.imageRef];
      t && (r.cover = await pV(t));
    }
  } else {
    console.error('pptx-export', `Could not resolve video path for node ${t.id}, using dummy instead`);
    r.data = Fo();
  }
  return r;
}
async function ap(e, t, i) {
  if (!t) {
    console.error('pptx-export\', `Could not resolve youtube url for missing node.');
    return null;
  }
  let n = t.interactiveSlideConfigData?.url;
  if (t?.flappType !== 'YOUTUBE' || !n) {
    console.error('pptx-export', `Could not resolve youtube url for node ${t?.id}`);
    return null;
  }
  let r = {
    ...W9(e, t),
    type: 'online',
    link: n
  };
  let a = t.fills?.[0];
  if (a?.imageRef) {
    let e = i?.[a?.imageRef];
    e && (r.cover = await pV(e));
  }
  return r;
}
function am(e, t) {
  let i = {
    ...W9(e, t)
  };
  if (t.fills.length) {
    let e = dE(t);
    e && (i.fill = e);
  }
  (t.type === 'LINE' || t.strokes?.length) && (i.line = function(e) {
    let t = {
      width: e.strokeWeight
    };
    if (e.strokes?.length) {
      let i = e.strokes?.[0];
      let {
        fillColor
      } = _$$pM(e.strokes) ?? {};
      if (fillColor) {
        let {
          hex,
          opacity
        } = XF(fillColor);
        t = {
          ...t,
          color: hex,
          width: e.strokeWeight,
          transparency: 100 - (e.opacity ?? i?.opacity ?? opacity) * 100
        };
      }
      e.strokeDashes?.length && void 0 !== e.strokeDashes[0] && (t.dashType = e.strokeDashes[0] > 10 ? 'lgDash' : 'dash');
    }
    return t;
  }(t));
  t.rotation && (i.rotate = 180 * t.rotation / Math.PI % 360);
  (function(e) {
    let t = e.type === 'SHAPE_WITH_TEXT' && e.shapeType === 'SQUARE';
    let i = e.type === 'ROUNDED_RECTANGLE';
    return t || i || e.type === 'FRAME';
  })(t) && (i.rectRadius = typeof t.cornerRadius == 'number' ? t.cornerRadius / 100 : 0);
  return i;
}
let ag = ah;
function af(e, t) {
  let i = [];
  let n = t.characters.split('\n');
  let r = 0;
  for (let e = 0; e < n.length; e++) {
    let a = n[e];
    if (!a?.length) {
      r += 1;
      continue;
    }
    if (t.characterStyleOverrides && t.characterStyleOverrides.length) {
      let s = [];
      let o = '';
      let l = t.characterStyleOverrides?.[r] ?? 0;
      for (let e = 0; e < a?.length; e++) {
        let i = a[e];
        let n = t.characterStyleOverrides?.[r + e] ?? 0;
        n !== l ? (o && s.push({
          text: o,
          styleId: l
        }), o = i || '', l = n) : o += i;
      }
      o && s.push({
        text: o,
        styleId: l
      });
      s.forEach((r, a) => {
        i.push(a_(r.text, t, r.styleId.toString(), e < n.length - 1 && a === s.length - 1, a === 0 ? e : void 0));
      });
    } else {
      i.push(a_(a, t, '0', e < n.length - 1, e));
    }
    r += a.length + 1;
  }
  let a = W9(e, t);
  a.w = a.w + 0.5;
  return {
    positionProps: a,
    textProps: i
  };
}
function a_(e, t, i, n, r) {
  let a = {
    text: e,
    options: {
      fontFace: t.style.fontFamily,
      fontSize: GZ(t.style.fontSize / 2),
      bold: aA(t.style),
      italic: ay(t.style),
      align: t.style.textAlignHorizontal.toLowerCase(),
      valign: t.style.textAlignVertical.toLowerCase(),
      breakLine: n,
      lineSpacing: GZ(t.style.lineHeightPx / 2),
      charSpacing: GZ(t.style.letterSpacing / 2)
    }
  };
  let s = t.lineIndentations ?? [];
  if (s.length && void 0 !== r && r < s.length) {
    let e = s[r];
    a.options = {
      ...a.options,
      indentLevel: void 0 !== e ? e - 1 : 0,
      bullet: function(e, t) {
        let i = e.lineTypes?.[t];
        return !!i && (i === 'ORDERED' ? {
          type: 'number'
        } : i === 'UNORDERED' && {
          code: '2022'
        });
      }(t, r)
    };
  }
  let o = t.fills?.[0];
  if (o?.color) {
    let {
      hex,
      opacity
    } = XF(o.color);
    a.options.color = hex;
    a.options.transparency = opacity;
  }
  if (i && t.styleOverrideTable?.[i]) {
    let e = t.styleOverrideTable[i];
    e.fontFamily && (a.options.fontFace = e.fontFamily);
    e.fontSize && (a.options.fontSize = GZ(e.fontSize / 2));
    e.fontWeight && (a.options.bold = aA(e));
    e.fontStyle && (a.options.italic = ay(e));
    e.textDecoration === 'UNDERLINE' && (a.options.underline = {
      style: 'sng'
    });
    e.lineHeightPx && (a.options.lineSpacing = GZ(e.lineHeightPx / 2));
    e.letterSpacing && (a.options.charSpacing = GZ(e.letterSpacing / 2));
    e.hyperlink && e.hyperlink.type === 'URL' && (a.options.hyperlink = {
      url: e.hyperlink.url
    });
    let n = e.fills?.[0];
    if (n?.color) {
      let {
        hex,
        opacity
      } = XF(n.color);
      a.options.color = hex;
      a.options.transparency = opacity;
    }
  }
  t?.style?.textCase === 'UPPER' ? a.text = a.text.toLocaleUpperCase() : t?.style?.textCase === 'LOWER' && (a.text = a.text.toLocaleLowerCase());
  return a;
}
function aA(e) {
  return (e.fontStyle ?? '').includes('Bold') || (e.fontWeight ?? 0) >= 700;
}
function ay(e) {
  return (e.fontStyle ?? '').includes('Italic');
}
async function ab(e, t, i, n, r) {
  let a = {};
  let s = [];
  let o = e.addSlide();
  let l = await av(t.document, i);
  l && (o.background = l);
  o.hidden = t.document.isSkippedSlide;
  let d = [t.document];
  for (; d.length > 0;) {
    let l = d.pop();
    if (l) {
      if (l.type === 'SLIDE') {
        try {
          let e = function(e) {
            let t = e.slideSpeakerNotes;
            return t ? El(t) : null;
          }(l);
          if (e && o.addNotes(e), Oc(l)) {
            let e = await au(t.document, l, i, n);
            o.addMedia(e);
          }
        } catch (e) {
          Vy.error(`pptx-export: Could not export slide ${t.document.id}`, r, e);
          continue;
        }
      }
      if (l.children?.length) {
        for (let c of l.children) {
          if (zN(c) && PC(c)) {
            try {
              c.type === 'GROUP' ? Vy.withMetaScope(`GROUP ${c.id}`, r, () => {
                d.push(c);
              }) : c.type === 'FRAME' ? await Vy.withNodeScopeAsync(`FRAME ${c.id}`, r, async () => {
                if (un(c) || _$$tS(c)) {
                  a[c.id] = c;
                } else if (Oc(c)) {
                  let e = await au(t.document, c, i, n);
                  o.addMedia(e);
                  d.push(c);
                } else if (RU(c)) {
                  a[c.id] = c;
                } else {
                  let i = am(t.document, c);
                  o.addShape(_$$sd(e, c.type, c), i);
                  d.push(c);
                }
              }) : c.type === 'TEXT' ? Vy.withNodeScope(`TEXT ${c.id}`, r, () => {
                let e = af(t.document, c);
                if (e) {
                  let {
                    textProps,
                    positionProps
                  } = e;
                  s.push(() => o.addText(textProps, positionProps));
                }
              }) : _$$a2.includes(c.type) ? await Vy.withNodeScopeAsync(`SHAPE ${c.id}`, r, async () => {
                if (un(c) || _$$tS(c)) {
                  a[c.id] = c;
                } else if (Oc(c)) {
                  let e = await au(t.document, c, i, n);
                  o.addMedia(e);
                } else {
                  let i = am(t.document, c);
                  o.addShape(_$$sd(e, c.type, c), i);
                }
              }) : c.type === 'SHAPE_WITH_TEXT' ? Vy.withNodeScope(`SHAPE_WITH_TEXT ${c.id}`, r, () => {
                if (!_$$a2.includes(c.shapeType) || un(c)) {
                  console.warn('pptx-export', `Unsupported shape type: ${c.shapeType}, defaulting to image`);
                  a[c.id] = c;
                } else {
                  let i = am(t.document, c);
                  o.addText(c.characters, {
                    shape: _$$sd(e, c.shapeType, c),
                    ...i
                  });
                }
              }) : c.type === 'TABLE' ? Vy.withNodeScope(`TABLE ${c.id}`, r, () => {
                let {
                  rows,
                  props
                } = function(e, t) {
                  let i = [];
                  let n = {
                    ...W9(e, t)
                  };
                  let r = t.strokes?.[0];
                  if (r?.color) {
                    let {
                      hex
                    } = XF(r.color);
                    n.border = {
                      type: 'solid',
                      color: hex,
                      pt: r.strokeWeight
                    };
                  }
                  let a = [];
                  let s = [];
                  let o = t.children?.filter(e => e.type === 'TABLE_CELL');
                  Object.entries(Object.values(ag()(o, e => {
                    let t = e.id.split(';');
                    return t[1]?.split(':')[1];
                  }))).forEach(([t, n]) => {
                    let r = parseInt(t);
                    n.forEach((t, n) => {
                      let o = function(e, t) {
                        let i = {
                          text: t.characters ?? '',
                          options: {}
                        };
                        let n = dE(t);
                        if (n && (i.options = {
                          ...i.options,
                          fill: {
                            ...n
                          }
                        }), t.children?.length === 1 && t.children[0]?.type === 'TEXT') {
                          let n = t.children[0];
                          if (n) {
                            let t = af(e, n);
                            let r = t?.textProps;
                            r && (i.text = r.length ? r.map(e => ({
                              text: e.text,
                              options: {
                                ...i.options,
                                ...e.options
                              }
                            })) : '');
                          }
                        }
                        return i;
                      }(e, t);
                      i[r] || (i[r] = []);
                      i[r].push(o);
                      r === 0 && a.push(t.size.x / WE);
                      n === 0 && s.push(t.size.y / WE);
                    });
                  });
                  n.colW = a;
                  n.rowH = s;
                  return {
                    rows: i,
                    props: n
                  };
                }(t.document, c);
                s.push(() => o.addTable(rows, props));
              }) : c.type === 'INTERACTIVE_SLIDE_ELEMENT' && c.flappType === 'YOUTUBE' ? await Vy.withNodeScopeAsync(`INTERACTIVE_SLIDE_ELEMENT ${c.id}`, r, async () => {
                let e = await ap(t.document, c, i);
                e && s.push(() => o.addMedia(e));
              }) : Vy.withNodeScope(`UNSUPPORTED ${c.id}`, r, () => {
                console.warn('pptx-export', `Unsupported node type: ${c.type}, defaulting to image`);
                a[c.id] = c;
              });
            } catch (e) {
              continue;
            }
          }
        }
      }
    }
  }
  return {
    slideId: t.document.id,
    slide: o,
    unsupportedNodes: a,
    topLevelActions: s
  };
}
async function av(e, t) {
  let i = dE(e);
  if (i) return i;
  let n = PZ(e, {
    imageHashesToUrls: t
  });
  if (n?.path) {
    return {
      data: await pV(n.path)
    };
  }
  let {
    hex,
    opacity
  } = XF(e.backgroundColor ?? {
    r: 0,
    g: 0,
    b: 0,
    a: 1
  });
  return {
    type: 'solid',
    color: hex,
    transparency: opacity
  };
}
async function aI({
  file: e,
  slideIds: t
}) {
  try {
    let n = (await Promise.all([]).then(_require)).$$default;
    let r = await aE(n, e, t);
    let a = await Uj(r);
    Vy.toConsole(zT.EXPORT);
    Vy.toFigment(e.key, zT.EXPORT, 0, a);
  } catch (t) {
    Vy.toFigment(e.key, zT.EXPORT, 0, 0, t);
    return t;
  } finally {
    Vy.reset();
  }
}
async function aE(e, t, i) {
  let n = Ez5?.canvasGrid().canvasGridArray.getCopy() ?? [];
  let r = UN();
  let a = AlE?.getMutableActiveDocument();
  if (!a) {
    console.error('pptx-export', 'No active document');
    return;
  }
  let o = new e();
  let l = new Set(Bko?.findImagesUnder(a, ['0:0'], MoD.NON_ANIMATED_ONLY));
  let [d, c] = await Promise.all([l.size ? Mj([...l], {
    type: 'figFile',
    fileKey: t.key
  }) : Promise.resolve({
    s3_urls: {}
  }), _$$S.getVideos({
    fileKey: t.key
  })]);
  let u = d.s3_urls;
  let p = c.data.meta.videos;
  let m = {};
  let h = Array.isArray(i) && i.length ? new Set(i) : void 0;
  let g = await Promise.all(n.flatMap(e => e.filter(e => !h || h.has(e)).map(t => {
    let i = r.get(t);
    let n = i?.getSlidesJSON();
    return i && n ? (m[t] = n, Vy.withSlideScopeAsync(e.indexOf(t) + 1, e => ab(o, n, u, p, e))) : (console.error('pptx-export', `Could not export slide id ${t}`), Promise.resolve({
      slideId: t,
      slide: null,
      unsupportedNodes: {},
      topLevelActions: []
    }));
  })));
  let f = g.filter(e => e.slide !== null && !!Object.keys(e.unsupportedNodes).length && e.slideId in m);
  f.length && (await Promise.allSettled(f.flatMap(e => {
    let {
      slide,
      unsupportedNodes,
      slideId
    } = e;
    return Object.values(unsupportedNodes).map(e => Vy.withNodeScopeAsync(e.id, null, async i => {
      let r = m[slideId];
      if (!r) return Promise.reject(new Error(`Slide ${slideId} not found for unsupported node ${e.id}`));
      {
        let i = await ad(r.document, e);
        i && slide.addImage(i);
      }
    }));
  })));
  g.forEach(e => {
    let {
      topLevelActions
    } = e;
    topLevelActions.forEach(e => e());
  });
  await o.writeFile({
    fileName: t.name
  });
  return o;
}
let aN = 'pdf_export_settings_modal--exportSettingsModalRow--Z1ilM';
let aP = 'pdf_export_settings_modal--exportSettingsModalRowAutoHeight--zCiQR';
let aO = _$$Ju(e => {
  let [t, i] = useState(!1);
  let [n, r] = useState(!1);
  let o = hS({
    ...e,
    preventUserClose: t
  });
  let l = _$$sO();
  let d = q5();
  let c = Wj();
  let [p, m] = useState(l ? 'pptx' : 'pdf');
  let h = c.length;
  let [g, f] = useState('all');
  let _ = Um();
  let A = wA();
  let [y, b] = useState(JI);
  let [v, I] = useState('DOCUMENT');
  let E = async () => {
    r(!1);
    i(!0);
    let e = hzD.DOCUMENT;
    v === 'SRGB' ? e = hzD.SRGB : v === 'DISPLAY_P3_V4' && (e = hzD.DISPLAY_P3_V4);
    let t = g === 'selection';
    if (p === 'pdf') {
      setTimeout(() => {
        try {
          glU.exportAllFramesToPdf(y, e, t);
          A(AS());
        } catch (e) {
          r(!0);
        } finally {
          i(!1);
        }
      }, 0);
    } else if (p === 'pptx' && d) {
      try {
        await aI({
          file: d,
          slideIds: g === 'selection' ? c : void 0
        });
        A(AS());
      } catch (e) {
        r(!0);
      } finally {
        i(!1);
      }
    }
  };
  let x = jsx(_$$sZ, {});
  let S = jsx(J5, {
    onExportQualityChange: (e, t) => {
      b(Yj(e, 'PDF'));
    },
    quality: y,
    imageType: 'PDF',
    dropdownShown: _,
    dispatch: A
  });
  let w = jsx(_$$k2, {
    name: 'export_all_frames_to_pdf_settings_modal',
    children: jsxs('form', {
      children: [jsx(ZH, {
        children: ({
          documentExportColorProfile: e
        }) => jsx(cS, {
          label: jsx(Vq, {}),
          input: jsx(K8, {
            documentExportColorProfile: e,
            onColorProfileChange: I,
            colorProfile: v,
            dispatch: A,
            dropdownShown: _
          }),
          appendedClassName: aN
        })
      }), jsx(cS, {
        label: x,
        input: S,
        appendedClassName: aN
      }), l && h > 0 && jsx(Zo, {
        label: jsx(O8, {}),
        input: jsx(jd, {
          numSlides: h,
          value: g,
          setValue: f
        }),
        appendedClassName: rg()(aN, aP)
      })]
    })
  });
  let C = jsx(_$$k2, {
    name: 'export_slides_to_pptx_settings_modal',
    children: jsx('form', {
      children: jsx(Zo, {
        label: jsx(O8, {}),
        input: jsx(jd, {
          numSlides: h,
          value: g,
          setValue: f
        }),
        appendedClassName: rg()(aN, aP)
      })
    })
  });
  let T = useMemo(() => p === 'pdf' ? l ? _$$tx('fullscreen.export.export_slides_to_pdf') : _$$tx('fullscreen.export.export_frames_to_pdf') : _$$tx('fullscreen.export.export_slides_to_pptx'), [p, l]);
  let k = p === 'pdf' ? _$$tx('fullscreen.export.exporting_to_pdf') : _$$tx('fullscreen.export.exporting_to_pptx');
  return jsx(_$$bL, {
    manager: o,
    width: 'md',
    children: jsxs(vo, {
      children: [jsx(Y9, {
        children: jsx(hE, {
          children: T
        })
      }), jsxs(_$$nB, {
        children: [l && jsx(cS, {
          label: jsx(JU, {
            className: hD,
            htmlFor: 'export-settings-file-type',
            children: _$$t('fullscreen.export.export_file_type')
          }),
          input: jsxs(_$$bL2, {
            onChange: e => {
              m(e);
            },
            value: p,
            children: [jsx(l9, {
              label: jsx(_$$h3, {
                children: _$$t('fullscreen.export.export_file_type')
              }),
              width: 'fill'
            }), jsxs(mc, {
              children: [jsx(c$, {
                value: 'pdf',
                children: aL().format('pdf')
              }), jsx(c$, {
                value: 'pptx',
                children: aL().format('pptx')
              })]
            })]
          }),
          appendedClassName: aN
        }), l ? p === 'pdf' ? w : C : w]
      }), jsxs(_$$wi, {
        children: [jsxs('div', {
          className: rg()('pdf_export_settings_modal--exportModalFooterLoader--tW0h6', {
            'pdf_export_settings_modal--exportModalFooterLoaderError--lXi8-': n
          }),
          children: [t && !n && jsxs(Fragment, {
            children: [jsx(kt, {
              imageBacked: !0
            }), k]
          }), !t && n && jsxs(Fragment, {
            children: [jsx(_$$R2, {}), _$$tx('fullscreen.export.unable_to_export')]
          })]
        }), jsx(jk, {
          children: jsx($n, {
            'variant': 'primary',
            'onClick': E,
            'disabled': t,
            'aria-label': _$$t('fullscreen.export.export'),
            'children': _$$tx('fullscreen.export.export')
          })
        })]
      })]
    })
  });
});
var aD = (e => (e.PDF = 'pdf', e.PPTX = 'pptx', e))(aD || {});
let aL = () => ({
  format: e => {
    switch (e) {
      case 'pdf':
        return _$$t('fullscreen.export.export_to_pdf');
      case 'pptx':
        return _$$t('fullscreen.export.export_to_pptx');
    }
  }
});
let aV = 'rename_modal--previewName--lNqCJ';
let aG = 'rename_modal--patternInputContainer--Io3jc rename_modal--_inputContainer--Sh9ic raw_components--singleRowHeight--dKM4t';
let az = 'rename_modal--patternInput--eK79Z';
let aH = parsePxInt('120px');
var aW = (e => (e[e.Match = 0] = 'Match', e[e.NumberAscending = 1] = 'NumberAscending', e[e.NumberDescending = 2] = 'NumberDescending', e))(aW || {});
let aK = {
  0: '$&',
  1: '$nn',
  2: '$NN'
};
let aY = /\$n+/;
let aq = /\$N+/;
function a$(e, t) {
  let i = `${e}`;
  return i.length >= t ? i : Array.from({
    length: t - i.length + 1
  }).join('0') + i;
}
class aZ extends PureComponent {
  constructor(e) {
    super(e);
    this.guidSet = new Set();
    this.sortedGUIDs = [];
    this.shouldRefocusReplaceInput = !1;
    this.lastReplacePatternInputSelectionStart = 0;
    this.lastReplacePatternInputSelectionEnd = 0;
    this.onMatchPatternChange = e => {
      this.setState({
        matchPattern: e.currentTarget.value
      });
    };
    this.onMatchPatternFocus = () => {
      this.shouldRefocusReplaceInput = !1;
    };
    this.onReplacePatternChange = e => {
      this.shouldRefocusReplaceInput = !1;
      let t = e.currentTarget.value;
      this.setState({
        replacePattern: t,
        sequenceLabel: this.getSequenceLabel(t)
      });
    };
    this.setReplacePatternInputSelection = () => {
      let e = this.props.replacePatternInputRef.current;
      e && e.selectionStart != null && e.selectionEnd != null && (this.lastReplacePatternInputSelectionStart = e.selectionStart, this.lastReplacePatternInputSelectionEnd = e.selectionEnd);
    };
    this.updateShouldRefocusReplaceInput = () => {
      let e = this.props.replacePatternInputRef.current;
      this.shouldRefocusReplaceInput = document.activeElement === e;
    };
    this.onPatternButtonClick = e => {
      let {
        replacePattern
      } = this.state;
      let i = this.lastReplacePatternInputSelectionStart;
      let n = this.lastReplacePatternInputSelectionEnd;
      this.lastReplacePatternInputSelectionStart += aK[e].length;
      this.lastReplacePatternInputSelectionEnd = this.lastReplacePatternInputSelectionStart;
      let r = `${replacePattern.slice(0, i)}${aK[e]}${replacePattern.slice(Math.max(i, n), replacePattern.length)}`;
      this.setState({
        replacePattern: r,
        sequenceLabel: this.getSequenceLabel(r)
      });
    };
    this.isUsingNumberPattern = () => aY.test(this.state.replacePattern) || aq.test(this.state.replacePattern);
    this.getSequenceLabel = e => new RegExp(`^.*(?=.*${aY.source})(?=.*${aq.source}).*$`).test(e) ? _$$t('fullscreen.rename_modal.start_sequence_from') : aq.test(e) ? _$$t('fullscreen.rename_modal.stop_descending_at') : aY.test(e) ? _$$t('fullscreen.rename_modal.start_ascending_from') : this.state.sequenceLabel;
    this.onSequenceStartChange = e => {
      this.updateShouldRefocusReplaceInput();
      this.setState({
        sequenceStart: E7(e)
      });
    };
    this.generateLayerNames = () => {
      let e = Number.isInteger(this.state.sequenceStart) ? this.state.sequenceStart : 1;
      let t = this.sortedGUIDs.map(e => {
        let t = this.props.getNode(e);
        return t && t.name;
      }).filter(e => e && e.length);
      let i = this.sortedGUIDs.map((i, n) => {
        let r;
        let a = n + e;
        let s = e + this.sortedGUIDs.length - (n + 1);
        try {
          r = new RegExp(this.state.matchPattern || '.*');
        } catch (e) {
          if (e instanceof SyntaxError) r = this.state.matchPattern; else throw e;
        }
        let o = this.state.replacePattern.replace(new RegExp(aY.source, 'g'), e => a$(a, e.length - 1)).replace(new RegExp(aq.source, 'g'), e => a$(s, e.length - 1));
        return t[n].replace(r, o);
      }).map((e, i) => e || t[i]);
      return this.sortedGUIDs.reduce((e, t, n) => ({
        ...e,
        [t]: i[n]
      }), {});
    };
    this.getPreviewNames = () => {
      let e = this.generateLayerNames();
      let t = this.props.nodeType === 'page' ? [...this.sortedGUIDs].reverse() : this.sortedGUIDs;
      let i = (t.length <= 5 ? t : [...t.slice(0, 4), t[t.length - 1]]).map(t => jsx(_$$R3, {
        className: aV,
        text: e[t],
        maxWidth: aH
      }, t));
      return t.length > 5 ? [...i.slice(0, 4), jsx('p', {
        className: aV,
        children: '...'
      }, '...'), i[i.length - 1]] : i;
    };
    this.onKeyDown = e => {
      e.stopPropagation();
      e.keyCode === Uz.ESCAPE && this.props.onClose();
    };
    this.onSubmit = e => {
      e && e.preventDefault();
      let t = this.generateLayerNames();
      let i = !1;
      l7.user('rename-modal-submit', () => {
        for (let e in t) {
          let n = this.props.getNode(e);
          n && t[e] !== n.name && (_$$i(e, t[e]), i = !0);
        }
      });
      i && Y5.commit();
      this.props.onClose();
    };
    this.renderPreview = () => jsxs(Fragment, {
      children: [jsx('div', {
        className: 'rename_modal--sectionHeader--DKvQY',
        children: _$$tx('fullscreen.rename_modal.preview')
      }), jsx('div', {
        className: 'rename_modal--previewNameContainer--Rls-u',
        children: this.getPreviewNames()
      })]
    });
    this.renderLink = () => this.props.nodeType !== 'layer' ? null : jsx('div', {
      className: 'rename_modal--linkContainer--uRSae',
      children: jsx(_$$N2, {
        href: 'https://help.figma.com/hc/articles/360039958934-Rename-Layers',
        newTab: !0,
        children: _$$tx('fullscreen.rename_modal.learn_more')
      })
    });
    this.renderFormInputs = () => jsxs('div', {
      className: 'rename_modal--formInputs--uxH5m',
      children: [jsx('div', {
        className: aG,
        children: jsx(ks, {
          className: az,
          value: this.state.matchPattern,
          onFocus: this.onMatchPatternFocus,
          onChange: this.onMatchPatternChange,
          placeholder: _$$t('fullscreen.rename_modal.match_optional')
        })
      }), jsx('div', {
        className: aG,
        children: jsx(ks, {
          className: az,
          value: this.state.replacePattern,
          onChange: this.onReplacePatternChange,
          onBlur: this.setReplacePatternInputSelection,
          placeholder: this.state.matchPattern ? _$$t('fullscreen.rename_modal.replace_with') : _$$t('fullscreen.rename_modal.rename_to'),
          ref: this.props.autofocusRef
        })
      }), jsxs('div', {
        className: 'rename_modal--patternButtonsContainer--yWDRZ rename_modal--_inputContainer--Sh9ic raw_components--singleRowHeight--dKM4t',
        children: [jsx($n, {
          variant: 'secondary',
          onClick: () => {
            this.onPatternButtonClick(0);
          },
          htmlAttributes: {
            onMouseDown: this.updateShouldRefocusReplaceInput
          },
          children: this.state.matchPattern ? _$$t('fullscreen.rename_modal.current_match') : _$$t('fullscreen.rename_modal.current_name')
        }), jsx($n, {
          variant: 'secondary',
          onClick: () => {
            this.onPatternButtonClick(1);
          },
          htmlAttributes: {
            onMouseDown: this.updateShouldRefocusReplaceInput
          },
          children: _$$tx('fullscreen.rename_modal.number_ascending')
        }), jsx($n, {
          variant: 'secondary',
          onClick: () => {
            this.onPatternButtonClick(2);
          },
          htmlAttributes: {
            onMouseDown: this.updateShouldRefocusReplaceInput
          },
          children: _$$tx('fullscreen.rename_modal.number_descending')
        })]
      }), jsxs('div', {
        className: this.isUsingNumberPattern() ? 'rename_modal--sequenceInputContainer--wT55c rename_modal--_inputContainer--Sh9ic raw_components--singleRowHeight--dKM4t' : 'rename_modal--sequenceInputContainerDisabled--EwlG- rename_modal--_inputContainer--Sh9ic raw_components--singleRowHeight--dKM4t',
        children: [jsx('span', {
          className: 'rename_modal--sequenceLabel--UTwnc',
          children: this.state.sequenceLabel
        }), jsx(Ht, {
          'className': 'rename_modal--sequenceInput--KWIQX',
          'value': this.state.sequenceStart,
          'onValueChange': this.onSequenceStartChange,
          'disabled': !this.isUsingNumberPattern(),
          'min': 0,
          'data-tooltip-type': Ib.TEXT,
          'data-tooltip': _$$t('fullscreen.rename_modal.start_ascending_from'),
          'tooltipForScreenReadersOnly': !0,
          'dispatch': this.props.dispatch
        })]
      })]
    });
    this.renderFormButtons = () => jsxs(Fragment, {
      children: [jsx($n, {
        variant: 'secondary',
        onClick: this.props.onClose,
        children: _$$tx('fullscreen.rename_modal.cancel')
      }), jsx($n, {
        type: 'submit',
        children: _$$tx('fullscreen.rename_modal.rename')
      })]
    });
    this.guidSet = new Set(e.guids);
    this.sortGUIDs();
    this.state = {
      matchPattern: '',
      replacePattern: '',
      sequenceStart: 1,
      sequenceLabel: _$$t('fullscreen.rename_modal.start_ascending_from')
    };
  }
  componentDidMount() {
    this.maybeHideModal();
    let {
      replacePattern
    } = this.state;
    let t = this.props.replacePatternInputRef.current;
    t && (t.focus(), t.setSelectionRange(replacePattern.length, replacePattern.length));
  }
  componentDidUpdate(e) {
    this.maybeHideModal();
    let t = this.props.replacePatternInputRef.current;
    this.shouldRefocusReplaceInput && t && (document.activeElement !== t && (t.focus(), t.setSelectionRange(this.lastReplacePatternInputSelectionStart, this.lastReplacePatternInputSelectionEnd)), this.shouldRefocusReplaceInput = !1);
    this.props.guids !== e.guids && (this.guidSet = new Set(this.props.guids), this.sortGUIDs());
  }
  maybeHideModal() {
    if (this.props.guids.length === 0) {
      this.props.onClose();
    }
  }
  sortGUIDs() {
    let e = this.props.getNode(this.props.currentPage);
    if (e && this.props.nodeType !== 'page') {
      let t = e.uiOrderedChildren;
      for (this.sortedGUIDs = []; t.length;) {
        let e = this.props.getNode(t[0]);
        t.shift();
        e && (e.uiOrderedChildren && t.unshift(...e.uiOrderedChildren), this.guidSet.has(e.guid) && this.sortedGUIDs.push(e.guid));
      }
    } else {
      this.props.nodeType === 'page' ? this.sortedGUIDs = [...this.props.guids].reverse() : this.sortedGUIDs = this.props.guids;
    }
  }
  render() {
    if (this.props.guids.length === 0) return null;
    let e = this.props.nodeType === 'page' ? _$$t('fullscreen.rename_modal.rename_num_pages_pages', {
      numPages: this.sortedGUIDs.length
    }) : _$$t('fullscreen.rename_modal.rename_num_layers_layers', {
      numLayers: this.sortedGUIDs.length
    });
    return jsx(_$$o2, {
      eventListeners: ['onClick', 'onKeyDown'],
      children: jsx(_$$bL, {
        manager: this.props.manager,
        width: 'lg',
        children: jsxs(Rq, {
          onSubmit: this.onSubmit,
          children: [jsx(Y9, {
            children: jsx(hE, {
              children: e
            })
          }), jsx(_$$nB, {
            children: jsxs('div', {
              className: 'rename_modal--body--bg5OQ',
              children: [jsx('div', {
                className: 'rename_modal--previewContainer--dvYY-',
                children: this.renderPreview()
              }), jsx('div', {
                className: 'rename_modal--form--Pj-fr',
                children: this.renderFormInputs()
              })]
            })
          }), jsxs(_$$wi, {
            children: [this.renderLink(), jsx(jk, {
              children: this.renderFormButtons()
            })]
          })]
        })
      })
    });
  }
}
let aX = _$$Ju(e => {
  let t = hS(e);
  let i = useRef(null);
  let n = _$$X3(i);
  let r = d4(e => (xO(_$$e.UNOWNED, e.mirror.appModel), e.mirror.appModel.currentPage));
  let s = d4(e => e.mirror.sceneGraph.get);
  return jsx(aZ, {
    ...e,
    manager: t,
    replacePatternInputRef: i,
    autofocusRef: n,
    currentPage: r,
    getNode: s
  });
});
let a4 = {
  templates: ['(?:www\\.)?youtube\\.com/(?:tv#/)?watch\\?(?:[^&]+&)*v=([a-zA-Z0-9_-]+)', 'youtu\\.be/([a-zA-Z0-9_-]+)', 'm\\.youtube\\.com/#/watch\\?(?:[^&]+&)*v=([a-zA-Z0-9_-]+)', 'www\\.youtube\\.com/shorts/([a-zA-Z0-9_-]+)', 'www\\.youtube\\.com/embed/([a-zA-Z0-9_-]+)', 'www\\.youtube\\.com/v/([a-zA-Z0-9_-]+)', 'www\\.youtube\\.com/user/[a-zA-Z0-9_-]+\\?v=([a-zA-Z0-9_-]+)', 'www\\.youtube-nocookie\\.com/v/([a-zA-Z0-9_-]+)']
};
let sn = hR(() => zdR?.getAgenda() ?? [], {
  changeFileBehavior: hW.RESET_VALUE_ON_FILE_CHANGE
});
let sr = hR(null, {
  changeFileBehavior: hW.RESET_VALUE_ON_FILE_CHANGE
});
let s_ = {
  restoreSoftDeletedNode(e) {
    l7.user('internal-restore-soft-deleted-node', () => {
      PKm?.restoreSoftDeletedNode(e);
    });
  },
  getNodesPersistingNode(e) {
    return PKm?.getNodesPersistingNode(e);
  },
  getUpdatesState() {
    return {
      updatesForCurrentPage: zl.get(P1),
      updatesForLoadedPages: zl.get(S9),
      updateStatusForCurrentPage: zl.get(_$$WJ)
    };
  }
};
function sC(e) {
  return `${(e *= 1 / 1048576) >= 9.5 ? e.toFixed(1) : e.toFixed(3)} MB`;
}
class sT {
  constructor(e = 0x4000000) {
    this.minReportBytes = e;
    this._meta = [];
    this._categoryBytes = new Map();
    this._totalBytes = 0;
    this._highBytes = 0;
    this._numReports = 0;
    this._growth = new _$$K2(e, 2, 1.2, 2e3, () => {
      this.logStats();
    });
  }
  static instance() {
    sT._instance || (sT._instance = new sT());
    return sT._instance;
  }
  numReports() {
    return this._numReports;
  }
  totalBytes() {
    return this._totalBytes;
  }
  highBytes() {
    return this._highBytes;
  }
  setMeta(e, t, i) {
    this._meta[e] && (console.warn('overwriting meta at index', e), this.clearMeta(e));
    this._meta[e] = {
      category: t,
      numBytes: i
    };
    this.addCategoryBytes(t, i);
  }
  clearMeta(e) {
    let t = this._meta[e];
    t && (this.addCategoryBytes(t.category, -t.numBytes), this._meta[e] = void 0);
  }
  addCategoryBytes(e, t) {
    let i = this._categoryBytes.get(e) || 0;
    i += t;
    this._categoryBytes.set(e, i);
    this._totalBytes += t;
    this._highBytes < this._totalBytes && (this._highBytes = this._totalBytes, this._growth.setCurrent(this._totalBytes));
  }
  logStats() {
    let e = [`high: ${sC(this._highBytes)}`, `current: ${sC(this._totalBytes)}`];
    for (let [t, i] of this._categoryBytes) i >= 1024 && e.push(`${t}: ${sC(i)}`);
    console.log('JsValue memory:', ...e);
    ++this._numReports;
  }
}
class sR { }
function sN(e) {
  return class extends e {
    constructor() {
      super(...arguments);
      this.EXIF = _$$f;
      this.HTMLWindowBindings = IM;
      this.jsValueHelp = sT.instance();
    }
  };
}
function sP(e) {
  return class extends e {
    constructor(...e) {
      super();
      this._fullscreenIsReady = !1;
      this._readyPromiseResolve = null;
      this._fontListLoaded = !1;
      this.fromFullscreen = new _$$b4('fromFullscreen');
      this.viewport = new _$$b4('viewport');
      this.containerElement = null;
      this._viewportInfo = {
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        offsetX: 0,
        offsetY: 0,
        zoomScale: 1,
        isZooming: !1,
        isPanning: !1
      };
      this._fileLoadTime = null;
      this.forwardKeyboardEvent = e => {
        f7(e);
      };
      this.onReady = () => this._readyPromise;
      this.isReady = () => this._fullscreenIsReady && _$$y4.getFullscreenCrashState() === 'ok' && !!glU;
      this.isFontListLoaded = () => this._fontListLoaded;
      this.fromFullscreen.on('console:initialize', () => {
        _$$lQ.then(() => {
          this._osxMessageListener?.initialize();
        });
      });
      _$$H3();
      this._readyPromise = new Promise((e, t) => {
        this.isReady() ? e() : this._readyPromiseResolve = e;
      });
    }
    reparentRootElement(e) {
      this.containerElement = e;
      let t = document.getElementById('fullscreen-root');
      if (!t) return;
      if (!this.containerElement) {
        t.style.visibility = 'hidden';
        document.body.appendChild(t);
        return;
      }
      let i = null;
      document.activeElement instanceof HTMLElement && t.contains(document.activeElement) && (i = document.activeElement);
      t.style.visibility = 'visible';
      this.containerElement.appendChild(t);
      i && i.focus();
    }
    isRootElementVisible() {
      let e = document.getElementById('fullscreen-root');
      return this.containerElement != null && e?.parentElement === this.containerElement;
    }
    documentIsLoaded() {
      this._fileLoadTime = window.performance.now();
    }
    fileLoadTime() {
      return this._fileLoadTime;
    }
    triggerFromFullscreen(e, t) {
      this.fromFullscreen.trigger(e, t);
    }
    startLoadingDroppedImage() {
      _$$J5.startLoadingImage();
    }
    finishLoadingDroppedImage() {
      _$$J5.finishLoadingImage();
    }
    setSentryTag(e, t) {
      kF(e, t);
    }
    onFrame() {
      this.isReady() && glU && glU.onFrame();
    }
    getViewportInfo() {
      return this._viewportInfo;
    }
    updateViewportInfo(e, t, i, n, r, a, s, o, l) {
      this._viewportInfo = {
        x: e,
        y: t,
        width: i,
        height: n,
        offsetX: r,
        offsetY: a,
        zoomScale: s,
        isZooming: o,
        isPanning: l
      };
      this.viewport.trigger('onSetViewport', this._viewportInfo);
    }
    onTilesRendered() {
      Ad();
    }
    onCreateTable() {
      _$$iW();
    }
    onEditTableText() {
      vK();
    }
    onNodeDragStart() {
      _$$se();
    }
    onNodeDragEnd() {
      p7();
    }
    onTileRendererChanged(e) {
      LH(e);
    }
    onCreateSticky() {
      PY();
    }
    onDifferentSectionClicked() {
      _$$o();
    }
    getNextQueryRequestId() {
      return Ak();
    }
    afterQueryCompleted(e) {
      PV(e);
    }
    rejectAllSceneGraphQueries() {
      Xk();
    }
    onNodePositionChanged(e, t) {
      Om(e, t);
    }
  };
}
class sB {
  constructor(e) {
    this._store = e;
  }
  get _state() {
    if (!this._store) throw new Error('Calling _state without a valid store');
    return this._store.getState();
  }
  getUserId() {
    if (this._state.user) return this._state.user.id;
    let e = this._state.multiplayer.allUsers.find(e => this._state.multiplayer.sessionID === e.sessionID);
    return e?.userID || null;
  }
  getUserLocale() {
    return this._state.user?.locale || defaultLanguage;
  }
  hasUserFlag(e) {
    return !!Object.keys(this._state.userFlags).includes(e);
  }
}
async function sq(e, t, i) {
  let n = new M4();
  n.start();
  let r = debugState.getState();
  let a = r.openFile?.key;
  ds('ai_smart_paste_started', a, r, {
    numRows: e.length,
    numCols: e[0].length,
    hasRepeatingContent: t
  });
  i(_$$F.enqueue({
    message: 'Pasting data into designs...',
    type: 'SMART_PASTE',
    timeoutOverride: 1 / 0
  }));
  try {
    let o = UN().getCurrentPage();
    let l = o?.directlySelectedNodes;
    if (!l) {
      i(_$$F.enqueue({
        message: 'Smart Paste: No nodes selected to paste into',
        type: 'SMART_PASTE_ERROR'
      }));
      return;
    }
    let d = l[0];
    let c = d;
    t && (c = c.childrenNodes[0]);
    let u = function e(t) {
      let i = {
        type: t.type,
        id: t.guid,
        name: t.name
      };
      'characters' in t && (i.text = t.characters);
      'childrenNodes' in t && (i.children = t.childrenNodes.map(e));
      return i;
    }(c);
    let p = await _$$Ay5.design.generateSmartPaste({
      nodeRepresentation: u,
      tabularData: e
    }, _$$Ay6());
    let m = n.getElapsedTime();
    let {
      guids
    } = p;
    let g = d.parentNode;
    if (!g) return;
    let f = g.stackMode !== 'NONE';
    let _ = UN();
    l7.user('smart-paste', () => {
      function o(e, t) {
        let i = function(e, t) {
          let i = new Map();
          !function e(t, i, n) {
            if (n.set(t.guid, i.guid), t.childCount !== i.childCount) throw new Error('Mismatched node trees');
            for (let r = 0; r < t.childCount; r++) {
              if (t.childrenNodes[r].type !== i.childrenNodes[r].type) throw new Error('Mismatched node trees');
              e(t.childrenNodes[r], i.childrenNodes[r], n);
            }
          }(e, t, i);
          return i;
        }(c, t);
        e.forEach((e, t) => {
          let n = guids[t];
          let r = i.get(n);
          if (r) {
            if (!_.get(r)) throw new Error('No node found');
            biQ.setTextContentOnTextNode(r, e);
          }
        });
      }
      e.forEach((e, i) => {
        if (t) {
          let t = d.childrenNodes[i];
          t && o(e, t);
        } else {
          let t = d.clone();
          g.appendChild({
            guid: t
          });
          let n = _.get(t);
          o(e, n);
          !f && n && (n.relativeTransform = {
            ...n.relativeTransform,
            m12: d.absoluteBoundingBox.y + i * (d.absoluteBoundingBox.h + 10)
          });
        }
      });
      t || d.removeSelfAndChildren();
      glU.triggerAction('commit', {});
      n.stop();
      let l = n.getElapsedTime();
      ds('ai_smart_paste_completed', a, r, {
        timeToResponse: m,
        timeToCompletion: l,
        numRows: e.length,
        numCols: e[0].length,
        hasRepeatingContent: t
      });
      i(_$$F.enqueue({
        message: 'Done!',
        type: 'SMART_PASTE_SUCCESS'
      }));
    });
  } catch (n) {
    $D(_$$e.AI_PRODUCTIVITY, n, {
      extra: {
        numRows: e.length,
        numCols: e[0].length,
        hasRepeatingContent: t
      }
    });
    ds('ai_smart_paste_failed', a, r, {
      error: n,
      numRows: e.length,
      numCols: e[0].length,
      hasRepeatingContent: t
    });
    i(_$$F.enqueue({
      message: 'Couldn\'t paste data',
      type: 'SMART_PASTE_ERROR'
    }));
  } finally {
    i(_$$F.dequeue({
      matchType: 'SMART_PASTE'
    }));
  }
}
function or({
  source: e,
  mode: t,
  startingNodeId: i
}) {
  if (e !== 'breakpoint_bar' && zl.get(_$$_b)) {
    uP();
    return;
  }
  let n = debugState;
  let r = n.getState();
  let a = dK(r);
  if (O5(a, r.mirror.appModel.currentPage).length) {
    !function({
      startingBreakpointFrameId: e,
      mode: t = 'modal',
      testFlags: i
    }) {
      let n = _$$d3(e);
      let r = n ? {
        mode: t,
        testFlags: i,
        ...n
      } : null;
      zl.set(_$$_b, r);
    }({
      startingBreakpointFrameId: i,
      mode: t
    });
    return;
  }
  n.dispatch(_$$F.enqueue({
    message: 'Page must include at least one responsive set to preview HTML',
    error: !0
  }));
}
class oo {
  constructor(e) {
    this._store = e;
  }
  get _state() {
    if (!this._store) throw new Error('Calling _state without a valid store');
    return this._store.getState();
  }
  setFigmascopeSelectedGuidCallback(e) {
    this._figmascopeFollowSelectionOnceCallback = e;
  }
  handleAction(e) {
    switch (e.name) {
      case 'magic-link':
        _$$g6({
          payload: e.payload
        });
        break;
      case 'make-edits':
        _$$YL();
        break;
      case 'debug-inspect-layer-figma-scope':
        if (UK().showFigmaScope.set(!0), this._figmascopeFollowSelectionOnceCallback) {
          let e = vD(this._store.getState());
          e && this._figmascopeFollowSelectionOnceCallback(e);
        }
        break;
      case 'reset-size':
        this.reset(YnC.SIZE);
        break;
      case 'reset-exports':
        this.reset(YnC.EXPORTS);
        break;
      case 'reset-effects':
        this.reset(YnC.EFFECTS);
        break;
      case 'reset-layer':
        this.reset(YnC.LAYER);
        break;
      case 'reset-visible':
        this.reset(YnC.VISIBLE);
        break;
      case 'reset-name':
        this.reset(YnC.NAME);
        break;
      case 'reset-fill':
        this.reset(YnC.FILL);
        break;
      case 'reset-stroke':
        this.reset(YnC.STROKE);
        break;
      case 'reset-text':
        this.reset(YnC.TEXT);
        break;
      case 'reset-text-style':
        this.reset(YnC.TEXT_STYLE);
        break;
      case 'reset-prototype-interactions':
        this.reset(YnC.PROTOTYPE_INTERACTIONS);
        break;
      case 'reset-overlay':
        this.reset(YnC.OVERLAY);
        break;
      case 'text-bold-increase':
        this._applyTextStylingAction(eL2.INCREASE_BOLD);
        break;
      case 'text-bold-decrease':
        this._applyTextStylingAction(eL2.DECREASE_BOLD);
        break;
      case 'text-toggle-italic':
        this._applyTextStylingAction(eL2.TOGGLE_ITALIC);
        break;
      case 'text-toggle-underline':
        this._applyTextStylingAction(eL2.TOGGLE_UNDERLINE);
        break;
      case 'text-toggle-strikethrough':
        this._applyTextStylingAction(eL2.TOGGLE_STRIKETHROUGH);
        break;
      case 'text-remove-decoration':
        this._applyTextStylingAction(eL2.REMOVE_DECORATION);
        break;
      case 'text-original-case':
        this._applyTextStylingAction(eL2.SET_ORIGINAL_CASE);
        break;
      case 'text-upper-case':
        this._applyTextStylingAction(eL2.SET_UPPER_CASE);
        break;
      case 'text-lower-case':
        this._applyTextStylingAction(eL2.SET_LOWER_CASE);
        break;
      case 'text-title-case':
        this._applyTextStylingAction(eL2.SET_TITLE_CASE);
        break;
      case 'text-line-height-decrease':
        this._applyTextStylingAction(eL2.DECREASE_LINE_HEIGHT, zvt.TEXT_LINE_HEIGHT);
        break;
      case 'text-line-height-increase':
        this._applyTextStylingAction(eL2.INCREASE_LINE_HEIGHT, zvt.TEXT_LINE_HEIGHT);
        break;
      case 'text-letter-spacing-decrease':
        this._applyTextStylingAction(eL2.DECREASE_LETTER_SPACING, zvt.TEXT_LETTER_SPACING);
        break;
      case 'text-letter-spacing-increase':
        this._applyTextStylingAction(eL2.INCREASE_LETTER_SPACING, zvt.TEXT_LETTER_SPACING);
        break;
      case 'present-as-prototype':
        {
          let t = e.payload.source === 'toolbar' ? 'button' : e.payload.source;
          this._openPrototype({
            source: t,
            shouldOpenInNewTab: !0
          });
          break;
        }
      case 'toggle-inline-preview':
        let t = e.payload.source === 'toolbar' ? 'button' : e.payload.source;
        zl.get(hg).modalStatus === _$$bi.OPEN ? (this._store.dispatch(Zh({
          name: 'prototype.close_inline_viewer',
          params: {
            source: t
          }
        })), zl.set(hg, {
          type: 'CLOSE_INLINE_PREVIEW'
        })) : this._openPrototype({
          source: t,
          shouldOpenInNewTab: !1
        });
        break;
      case 'present-slides-audience-view':
        {
          let t = e.payload.source === 'toolbar' ? 'button' : e.payload.source;
          this._openPrototype({
            source: t,
            shouldOpenInNewTab: !0,
            isSlides: !0
          });
          this._store.dispatch(_$$F.enqueue({
            icon: zX.NOTES_ON_RECTANGLE,
            message: _$$t('slides.presenter_view.visual_bells.opened_presentation_in_new_tab')
          }));
          break;
        }
      case 'present-slides-presenter-view':
        {
          let t = e.payload.source === 'toolbar' ? 'button' : e.payload.source;
          this._openPrototype({
            source: t,
            shouldOpenInNewTab: !0,
            isSlides: !0,
            isPresenterViewWithPopoutAudienceView: !0
          });
          this._store.dispatch(_$$F.enqueue({
            icon: zX.NOTES_ON_RECTANGLE,
            message: _$$t('slides.presenter_view.visual_bells.opened_presenter_and_audience_views_in_new_tabs')
          }));
          break;
        }
      case 'present-sites-full-preview':
        if (!getFeatureFlags().sites && !getFeatureFlags().bake) break;
        or({
          source: e.payload.source,
          mode: 'fullscreen',
          startingNodeId: e.payload.startingNodeId
        });
        break;
      case 'toggle-inline-html-preview':
        if (!getFeatureFlags().sites && !getFeatureFlags().bake) break;
        or({
          source: e.payload.source,
          mode: 'modal',
          startingNodeId: e.payload.startingNodeId
        });
        break;
      case 'inline-preview-reset-size':
        let i = dK(this._store.getState());
        zl.set(hg, {
          type: 'CHANGE_DEVICE_FRAME',
          payload: {
            sceneGraph: i,
            oldPresetIdentifier: e.payload.oldPresetIdentifier,
            oldRotation: e.payload.oldRotation,
            newPresetIdentifier: e.payload.newPresetIdentifier,
            newRotation: e.payload.newRotation
          }
        });
        break;
      case 'toggle-bold':
        let n = this._state.mirror.appModel.currentTool;
        _$$XE(this._store.getState().selectedView) === _$$nT.Whiteboard && _$$BG(n) ? this._applyDrawingToolStylingAction(n) : this._applyTextStylingAction(eL2.TOGGLE_BOLD);
        break;
      case 'show-prototype-interaction-edit-modal':
        let {
          x,
          y,
          source,
          isBehaviorsOnly
        } = e.payload.args;
        let d = {
          id: isBehaviorsOnly ? uR : _$$o$,
          initialX: x,
          initialY: y,
          shouldPin: source === yxn.PROPERTIES_PANEL
        };
        this._store.dispatch(u1(d));
        break;
      case 'report-no-video-upload-permissions':
        _$$k3(this._store);
    }
  }
  reset(e) {
    let t = this.getInstanceAndSublayerGUIDs();
    t && glU.resetSymbolOverridesForNodes(t, e);
  }
  getInstanceAndSublayerGUIDs() {
    let e = Object.keys(this._store.getState().mirror.sceneGraphSelection);
    let t = this._store.getState().mirror.sceneGraph;
    return _$$rT(e, t);
  }
  _applyTextStylingAction(e, t) {
    let i = this._store.getState().mirror.sceneGraph.get(this._state.mirror.appModel.currentPage);
    i && (i.applyTextStylingAction(e), t && glU.requestNextCommitMergeWithPrevious(t), glU.triggerAction('commit', {}));
  }
  _openPrototype({
    source: e,
    shouldOpenInNewTab: t,
    isSlides: i,
    isPresenterViewWithPopoutAudienceView: n
  }) {
    let r = X3B.getActivePrototypeStartingPointNodeIdOnCurrentPage();
    let a = this._store.getState().openFile;
    a && this._store.dispatch(_$$K({
      fileKey: a.key,
      startingPointNodeId: r,
      source: e,
      shouldOpenInNewTab: t,
      isSlides: i,
      isPresenterViewWithPopoutAudienceView: n
    }));
  }
  _applyDrawingToolStylingAction(e) {
    switch (e) {
      case NLJ.VECTOR_PENCIL:
        let t = zl.get(GI);
        zl.set(GI, {
          ...t,
          strokeWeight: t.strokeWeight === wv ? uM : wv
        });
        return;
      case NLJ.BRUSH:
        let i = zl.get(Vi);
        zl.set(Vi, {
          ...i,
          strokeWeight: i.strokeWeight === wv ? uM : wv
        });
        return;
      case NLJ.HIGHLIGHTER:
        let n = zl.get(IZ);
        zl.set(IZ, {
          ...n,
          strokeWeight: n.strokeWeight === g5 ? Iz : g5
        });
    }
  }
}
let oy = oA;
let ob = (e, t) => oy()(ov, e, {
  leading: !0,
  maxWait: t,
  trailing: !0
});
let ov = (e, t, i, n, r) => {
  if (e != null) {
    try {
      let a = getInitialOptions().tracking_session_id;
      let s = _$$g();
      _$$sx('mirror_frame_tracking', {
        pageName: 'fullscreen',
        fileKey: e,
        pageId: t,
        frameId: i,
        publisher_id: a,
        selection_id: s,
        selection_ordinal: r,
        isOnLG: !0
      });
      XHR.post(`/api/mobile_app_push/${encodeURIComponent(e)}`, {
        frame_name: _$$lH(n?.substring(0, 200)),
        frame_id: i,
        selection_id: s,
        tsid: a,
        ord: r
      });
    } catch (t) {
      x1('mobileAppPush', 'error performing mobile app push', {
        fileKey: e,
        frameID: i,
        frameName: n
      });
      $D(_$$e.MOBILE_PLATFORM, t);
    }
  }
};
let oI = {
  publishFrameSelectionForMirror(e, t, i, r, a) {
    let s = _$$v3.getExperimentNumber('mirror_debounce_exp', 'debounce_ms', -1);
    let o = _$$v3.getExperimentNumber('mirror_debounce_exp', 'max_debounce_wait_ms', -1);
    s > 0 && o > 0 ? (n || (n = ob(s, o)), n(e, t, i, r, a)) : ov(e, t, i, r, a);
  }
};
let oT = Fig.renderWorkerURL;
let ok = getFeatureFlags()?.fullscreen_use_threaded_rendering ? Fig.renderBundleURLs['compiled_wasm.js'] : 'compiled_wasm.js';
let oR = getFeatureFlags()?.fullscreen_use_threaded_rendering ? Fig.renderBundleURLs['compiled_wasm.wasm'] : 'compiled_wasm.wasm';
let oN = class e {
  constructor() {
    this._worker = null;
    this._currentState = 'uninitialized';
    this._previousState = null;
    this._onEnterStateCallbacks = {};
    this._RenderingWorkerStates = {
      uninitialized: {
        spawn: {
          _event: 'spawn',
          _target: 'spawned',
          _callback: this.defaultTransitionCallback
        },
        error: {
          _event: 'error',
          _target: 'error',
          _callback: this.defaultErrorCallback
        }
      },
      spawned: {
        init: {
          _event: 'init',
          _target: 'initializing',
          _callback: this.defaultTransitionCallback
        },
        error: {
          _event: 'error',
          _target: 'error',
          _callback: this.defaultErrorCallback
        }
      },
      initializing: {
        initialized: {
          _event: 'initialized',
          _target: 'initialized',
          _callback: this.defaultTransitionCallback
        },
        error: {
          _event: 'error',
          _target: 'error',
          _callback: this.defaultErrorCallback
        }
      },
      initialized: {
        start: {
          _event: 'start',
          _target: 'starting',
          _callback: this.defaultTransitionCallback
        },
        error: {
          _event: 'error',
          _target: 'error',
          _callback: this.defaultErrorCallback
        }
      },
      starting: {
        started: {
          _event: 'started',
          _target: 'started',
          _callback: this.defaultTransitionCallback
        },
        error: {
          _event: 'error',
          _target: 'error',
          _callback: this.defaultErrorCallback
        }
      },
      started: {
        stop: {
          _event: 'stop',
          _target: 'stopping',
          _callback: this.defaultTransitionCallback
        },
        error: {
          _event: 'error',
          _target: 'error',
          _callback: this.defaultErrorCallback
        }
      },
      stopping: {
        stopped: {
          _event: 'stopped',
          _target: 'stopped',
          _callback: this.defaultTransitionCallback
        },
        error: {
          _event: 'error',
          _target: 'error',
          _callback: this.defaultErrorCallback
        }
      },
      stopped: {
        start: {
          _event: 'start',
          _target: 'starting',
          _callback: this.defaultTransitionCallback
        },
        error: {
          _event: 'error',
          _target: 'error',
          _callback: this.defaultErrorCallback
        }
      }
    };
  }
  defaultTransitionCallback(t, i, n) {
    let r = e.getInstance()._onEnterStateCallbacks[i];
    r && r(t, i, n);
  }
  defaultErrorCallback(e, t, i) {
    x1('RenderingWorker', `Critical error: invalid event ${i} while in state ${e} to ${t}`);
  }
  processStateMachineEvent(e) {
    let t = this._RenderingWorkerStates[this._currentState];
    if (t) {
      let i = t[e];
      i ? (this._previousState = this._currentState, this._currentState = i._target, i._callback && i._callback(this._previousState, this._currentState, e)) : xi('RenderingWorker', `No transition found for event ${e} in state ${this._currentState}`);
    } else {
      x1('RenderingWorker', `No state information found for ${this._currentState}`);
    }
  }
  onMessage(t) {
    e.getInstance()._currentState;
    t.data.id;
    let {
      id
    } = t.data;
    id && (id ? e.getInstance().processStateMachineEvent(id) : x1('RenderingWorker', `Unknown event ${id} received`));
  }
  onError(e) {
    x1('RenderingWorker', 'Error from rendering worker', {
      error: e
    });
    e.preventDefault();
  }
  static getInstance() {
    e._instance || (e._instance = new e());
    return e._instance;
  }
  spawnWorker() {
    if (this._worker || this._currentState !== 'uninitialized') {
      x1('RenderingWorker', 'Attempting to spawn the rendering worker but it\'s already spawned');
      return;
    }
    if (this._worker = _$$x4(oT), !this._worker) {
      x1('RenderingWorker', 'Failed to spawn rendering worker');
      this.processStateMachineEvent('error');
      return;
    }
    this._worker.addEventListener('error', this.onError);
    this._worker.addEventListener('message', this.onMessage);
    this.processStateMachineEvent('spawn');
  }
  needsAlphaGPUBackingStore() {
    return !!new URLSearchParams(_$$Ay2.location.search).get('needsAlpha');
  }
  init() {
    if (!this._worker) {
      x1('RenderingWorker', 'Trying to init Rendering Worker but it isn\'t spawned yet');
      return;
    }
    this._currentState === 'spawned' || x1('RenderingWorker', `Trying to init Rendering Worker that isn't valid in state ${this._currentState}`);
    let e = document.querySelector('#fullscreen-root canvas');
    if (!e) {
      x1('RenderingWorker', 'Could not find fullscreen canvas');
      return;
    }
    let t = e.parentElement;
    if (!t) {
      x1('RenderingWorker', 'Could not find fullscreen canvas parent');
      return;
    }
    e.id = 'fullscreen-main-thread-canvas';
    let i = document.createElement('canvas');
    i.id = 'fullscreen-render-worker-canvas';
    t.appendChild(i);
    t.removeChild(e);
    let n = i.transferControlToOffscreen();
    this.processStateMachineEvent('init');
    let r = null;
    try {
      r = self.localStorage;
    } catch (e) { }
    let a = !!(r && !0 === r['low-power']);
    this._worker.postMessage({
      id: 'init',
      jsUrl: ok,
      wasmUrl: oR,
      canvas: n,
      powerPref: a ? 'low-power' : 'high-performance'
    }, [n]);
  }
  start() {
    if (!this._worker || this._currentState in ['initialized', 'stopped']) {
      console.error('Trying to start Rendering Worker from an invalid state', this._currentState);
      return;
    }
    this.processStateMachineEvent('start');
    this._worker.postMessage({
      id: 'start'
    });
  }
  spawnAndStart() {
    this._onEnterStateCallbacks.spawned = () => {
      e.getInstance().init();
    };
    this._onEnterStateCallbacks.initialized = () => {
      e.getInstance().start();
    };
    this.spawnWorker();
  }
};
oN._instance = null;
function oz() {
  return getFeatureFlags().ee_unsanitized_png_custom || getFeatureFlags().ee_unsanitized_png;
}
function oH() {
  if (getFeatureFlags().ee_unsanitized_png_custom) return 'web application/x-figma-png';
  if (getFeatureFlags().ee_unsanitized_png) return 'web image/png';
  throw new Error('Unsanitized PNG is not enabled');
}
class oq {
  constructor() {
    this._hashToCmsItemFieldValue = new Map();
  }
  storeVariableData(e) {
    let t = function(e) {
      let t = 0;
      if (e.length === 0) return t;
      for (let i = 0; i < e.length; i++) {
        t = (t << 5) - t + e.charCodeAt(i);
        t &= t;
      }
      return t;
    }(e.value).toString();
    this._hashToCmsItemFieldValue.set(t, e);
    return t;
  }
  fetchVariableData(e) {
    let t = this._hashToCmsItemFieldValue.get(e);
    return void 0 === t ? null : t;
  }
}
var lc = (e => (e.COPY_PASTE = 'COPY_PASTE', e.COPY_PASTE_SAME_FILE = 'COPY_PASTE_SAME_FILE', e.COPY_PASTE_FROM_FIGMA = 'COPY_PASTE_FROM_FIGMA', e.COPY_PASTE_FROM_FIGJAM = 'COPY_PASTE_FROM_FIGJAM', e.DUPLICATE = 'DUPLICATE', e))(lc || {});
var lu = (e => (e.CLICK_DETAILS = 'CLICK_DETAILS', e))(lu || {});
let lp = new class {
  constructor() {
    this.widgetInsertsFromExisting = {};
    this.widgetImpressions = [];
    this.widgetSelectionStateInteractions = {};
    this.scheduleFlushImpressions = debounce(() => {
      let e = debugState?.getState().openFile?.key ?? null;
      let t = this.createWidgetEvent(null, e, this.widgetImpressions);
      _$$sx('Widget Impression', t, {
        forwardToDatadog: !0
      });
      this.widgetImpressions = [];
    }, 1e3);
    this.scheduleFlushInsertsFromExisting = debounce(() => {
      let e = debugState?.getState().openFile?.key ?? null;
      for (let [t, i] of Object.entries(this.widgetInsertsFromExisting)) {
        if (!i || i.length === 0) continue;
        let n = this.createWidgetEvent(t, e, i);
        _$$sx('Widget Insert From Existing', n);
      }
      this.widgetInsertsFromExisting = {};
    }, 1e3);
    this.scheduleFlushSelectionStateInteractions = debounce(() => {
      let e = debugState?.getState().openFile?.key ?? null;
      for (let [t, i] of Object.entries(this.widgetSelectionStateInteractions)) {
        if (!i || i.length === 0) continue;
        let n = this.createWidgetEvent(t, e, i);
        _$$sx('Widget Selection State Interaction', n);
      }
      this.widgetSelectionStateInteractions = {};
    }, 1e3);
    this.createWidgetEvent = (e, t, i) => {
      let n = {
        fileKey: t,
        pluginIDs: [],
        widgetNodeIDs: [],
        pluginVersionIDs: [],
        publishedPluginIDs: []
      };
      e && (n.context = e);
      n.editorType = debugState?.getState().openFile?.editorType?.toString() ?? void 0;
      i.forEach(({
        widgetVersionID: e,
        widgetID: t,
        widgetNodeID: i
      }) => {
        n.pluginIDs.push(t);
        n.widgetNodeIDs.push(i);
        e && (n.publishedPluginIDs.push(t), n.pluginVersionIDs.push(e));
      });
      return n;
    };
  }
  trackImpression(e) {
    this.widgetImpressions.push(...e);
    this.scheduleFlushImpressions();
  }
  trackInsertsFromExisting(e, t) {
    Object.values(lc).includes(t) && (this.widgetInsertsFromExisting[t] || (this.widgetInsertsFromExisting[t] = []), this.widgetInsertsFromExisting[t].push(e), this.scheduleFlushInsertsFromExisting());
  }
  trackSelectionStateInteraction(e, t) {
    Object.values(lu).includes(t) && (this.widgetSelectionStateInteractions[t] || (this.widgetSelectionStateInteractions[t] = []), this.widgetSelectionStateInteractions[t].push(e), this.scheduleFlushSelectionStateInteractions());
  }
}();
let lw = new class {
  runWidget({
    pluginID: e,
    lifecycleCommand: t,
    pluginVersionID: i
  }) {
    let n = _$$uE[e];
    let {
      addShutdownAction,
      closePlugin,
      noOpVm
    } = _$$e8();
    addShutdownAction(() => Y5.commit());
    $$ap1(noOpVm, {
      stats: new _$$P3(),
      name: 'First Party',
      command: JSON.stringify(t),
      queryMode: !1,
      userID: debugState.getState().user?.id || '',
      pluginID: e,
      pluginVersionID: i,
      titleIconURL: '',
      openFileKey: debugState.getState().openFile?.key || '',
      apiVersion: pS,
      closePlugin,
      addShutdownAction,
      apiMode: {
        type: 'WIDGET',
        noOpUI: !0
      },
      enableProposedApi: !0,
      enablePrivatePluginApi: !0,
      deferRunEvent: !1,
      validatedPermissions: qH.forFirstPartyPlugin(),
      isLocal: !1,
      capabilities: [],
      allowedDomains: gH,
      editorType: [FW.FIGJAM, FW.FIGMA, FW.SITES],
      html: null,
      incrementalSafeApi: !1,
      enableNativeJsx: !1,
      isPluginExemptFromPluginDataLimits: !0,
      enableResponsiveSetHierarchyMutations: !1
    });
    n(noOpVm.scope);
  }
}();
var lT = (e => (e[e.NONE = 0] = 'NONE', e[e.FIGJAM_ONLY = 1] = 'FIGJAM_ONLY', e[e.FIGMA_ONLY = 2] = 'FIGMA_ONLY', e[e.ORG_MEMBER_ONLY = 3] = 'ORG_MEMBER_ONLY', e[e.DISALLOWED_BY_ORG = 4] = 'DISALLOWED_BY_ORG', e[e.REQUIRES_PAYMENT = 5] = 'REQUIRES_PAYMENT', e[e.AI_DISABLED = 6] = 'AI_DISABLED', e[e.OTHER = 7] = 'OTHER', e))(lT || {});
var lk = (e => (e.WIDGET_CODE_NOT_FOUND = 'Could not find widget code to run', e.WIDGET_CODE_NOT_FOUND_ON_NODE = 'Could not find widget code on the node', e.WIDGET_NOT_RUNNABLE = 'Widget is not runnable', e.WIDGET_NOT_ALLOWED_BY_ORG = 'This widget is not allowed by the user\'s organization', e.WIDGET_NODE_DOES_NOT_EXIST = 'Widget node does not exist', e.AI_DISABLED = 'Your admin has opted out of AI and you cannot use this widget', e))(lk || {});
class lR extends Error {
  constructor(e) {
    super(e);
  }
}
async function lN({
  pluginID: e,
  lifecycleCommand: t,
  widgetAction: i,
  pluginVersionID: n,
  triggeredFrom: r
}) {
  let {
    openFile,
    currentUserOrgId,
    orgById,
    teams
  } = debugState.getState();
  let {
    widgetNodeID
  } = t;
  let c = getSceneGraphInstance().get(widgetNodeID);
  if (!c) throw new lR('Widget node does not exist');
  let u = _$$F2();
  if (!u.canRun) {
    await fR(u.message);
    return;
  }
  if (lj() && ZY(e)) {
    await lO({
      pluginID: e,
      lifecycleCommand: t,
      pluginVersionID: c.widgetVersionId ?? '0'
    });
    return;
  }
  let p = await lP(c, currentUserOrgId);
  let m = !n;
  let h = currentUserOrgId && orgById[currentUserOrgId] || null;
  let g = openFile ? openFile.teamId : '';
  let f = teams && g ? teams[g] : null;
  let _ = !openFile?.canEdit;
  if (RA.has(e) && _$$lt({
    currentOrg: h,
    currentTeam: f,
    isViewer: _
  })) {
    throw new lR('Your admin has opted out of AI and you cannot use this widget');
  }
  if (!m && h) {
    switch (await _$$y6(p ?? void 0, h)) {
      case u8.PLUGIN_NOT_ORG_APPROVED:
        let A = _$$t('widgets.this_widget_is_not_allowed_by_your_organization');
        let y = _$$t('widgets.this_widget_is_not_allowed_by_your_organization_v2', {
          orgName: h.name,
          widgetName: c.widgetName
        });
        let b = getFeatureFlags().widgets_use_new_org_message ? y : A;
        r !== 'paste_from_url' && (await fR(b));
        return new lR('This widget is not allowed by the user\'s organization');
      case u8.PLUGIN_INSTALLABLE:
    }
  }
  if (getFeatureFlags().widgets_multiplayer_local) {
    if (!p) {
      let i = function({
        pluginID: e,
        lifecycleCommand: t
      }) {
        if (!getFeatureFlags().widgets_multiplayer_local) return null;
        let {
          widgetNodeID
        } = t;
        let n = getSceneGraphInstance().get(widgetNodeID);
        return n && n.getPluginData(e, lD) || null;
      }({
        pluginID: e,
        lifecycleCommand: t,
        pluginVersionID: ''
      });
      if (i) {
        await lF(i, {
          pluginID: e,
          lifecycleCommand: t,
          pluginVersionID: ''
        });
        return;
      }
      r !== 'paste_from_url' && (await fR(_$$t('widgets.could_not_find_widget_code_to_run')));
      return new lR('Could not find widget code on the node');
    }
    m && lL(t.widgetNodeID, e, p);
  }
  if (i = i || (t.name === 'mount' ? t.context : t.name), !p) {
    c.widgetVersionId && $D(_$$e.EXTENSIBILITY, new Error('Could not find widget code to run'), {
      tags: {
        widgetAction: i,
        widgetId: c.widgetId || '',
        widgetVersionId: c.widgetVersionId
      }
    });
    r !== 'paste_from_url' && (await fR(_$$t('widgets.could_not_find_widget_code_to_run')));
    return new lR('Could not find widget code to run');
  }
  if (MH({
    plugin: p
  })) {
    await bT({
      plugin: p,
      command: JSON.stringify(t),
      queryMode: !1,
      isWidget: !0,
      widgetAction: i,
      forcePluginVersionId: c.widgetVersionId,
      runMode: 'default',
      triggeredFrom: r || 'contextmenu',
      openFileKey: openFile?.key || ''
    });
  } else {
    throw new lR('Widget is not runnable');
  }
}
async function lP(e, t) {
  return Gc(e) || (!e.widgetId || !e.widgetVersionId || ZY(e.widgetId) ? null : (await $Z(e.widgetId, e.widgetVersionId, t)) ?? null);
}
async function lO({
  pluginID: e,
  lifecycleCommand: t,
  pluginVersionID: i
}) {
  if (!lj()) return;
  let n = WL(e, i);
  if (!n) return;
  let {
    openFile
  } = debugState.getState();
  let s = _$$o3();
  if (!s) throw new Error('Cannot run widget while logged out');
  let o = mv();
  _$$iu.currentPluginRunID = o;
  try {
    await E9({
      allowedDomains: gH,
      apiVersion: pS,
      capabilities: [],
      stats: new _$$P3(),
      checkSyntax: !0,
      code: `(${n})();`,
      command: JSON.stringify(t),
      disableSilenceConsole: !0,
      enablePrivatePluginApi: !0,
      enableProposedApi: !0,
      errorHandler: e => console.error(e),
      isLocal: !0,
      isWidget: !0,
      name: 'Widget Plugin',
      openFileKey: openFile.key,
      permissions: qH.forTest(),
      pluginID: e,
      pluginRunID: o,
      pluginVersionID: i,
      queryMode: !1,
      showLaunchErrors: !0,
      showRuntimeErrors: !0,
      testMessageHandler: _$$nl() ? r : void 0,
      titleIconURL: '',
      userID: s,
      vmType: 'cppvm',
      editorType: [FW.FIGMA, FW.FIGJAM],
      incrementalSafeApi: !1,
      enableNativeJsx: !1,
      enableResponsiveSetHierarchyMutations: !1
    });
  } finally {
    _$$iu.currentPluginRunID = null;
  }
}
let lD = 'localWidgetCode';
async function lL(e, t, i) {
  let n;
  let r;
  let a = getSceneGraphInstance().get(e);
  if (a) {
    if (ZQ(i)) {
      [n, r] = await Promise.all([_$$c6(i.localFileId, {
        resourceType: 'widget',
        ignoreMissingEditorType: !0,
        isPublishing: !1
      }), MB(i.localFileId)]);
    } else {
      n = i.manifest;
      let e = await _$$F5.getAndCache(i, debugState.getState().currentUserOrgId || void 0);
      if (!e) throw new Error(`No code found for ${i} version`);
      r = e;
    }
    l7.plugin('save-widget-code-setPluginData', () => {
      a.setPluginData(t, lD, JSON.stringify({
        manifest: n,
        code: r
      }));
    });
  }
}
async function lF(e, {
  lifecycleCommand: t,
  pluginVersionID: i
}) {
  try {
    let n = mv();
    _$$iu.currentPluginRunID = n;
    let {
      manifest,
      code
    } = JSON.parse(e);
    let {
      openFile
    } = debugState.getState();
    let o = _$$o3();
    if (!o) throw new Error('Cannot run widget while logged out');
    await E9({
      allowedDomains: manifest.networkAccess?.allowedDomains ?? gH,
      apiVersion: manifest.api,
      capabilities: manifest.capabilities ?? [],
      checkSyntax: !1,
      code,
      command: JSON.stringify(t),
      disableSilenceConsole: !1,
      enablePrivatePluginApi: !!manifest.enablePrivatePluginApi,
      enableProposedApi: !!manifest.enableProposedApi,
      isLocal: !0,
      isWidget: !0,
      name: manifest.name,
      openFileKey: openFile.key,
      permissions: qH.forLocalPlugin({
        manifest
      }),
      pluginID: manifest.id || '',
      pluginRunID: n,
      pluginVersionID: i,
      queryMode: !1,
      showLaunchErrors: !0,
      showRuntimeErrors: !0,
      stats: new _$$P3(),
      titleIconURL: '',
      userID: o,
      vmType: 'cppvm',
      editorType: [FW.FIGMA, FW.FIGJAM],
      incrementalSafeApi: !1,
      enableNativeJsx: !1,
      enableResponsiveSetHierarchyMutations: !1
    });
  } catch (t) {
    console.error(t);
    let e = t && t.message || _$$t('widgets.an_error_occurred_while_running_this_widget');
    fR(e);
  } finally {
    _$$iu.currentPluginRunID = null;
  }
}
getFeatureFlags().widgets_multiplayer_local && (window.saveWidgetCodeOnSelectedNode = () => {
  let e = 0;
  let {
    mirror
  } = debugState.getState();
  for (let i of Object.keys(mirror.sceneGraphSelection)) {
    let t = getSceneGraphInstance().get(i);
    if (!t || t.type !== 'WIDGET') continue;
    let n = Gc(t);
    if (!n) {
      console.warn(`Couldn't fetch plugin for node with id ${t.guid}`);
      continue;
    }
    let r = t.widgetId;
    if (r == null) {
      console.warn(`Node with id ${t.guid} is missing widgetId`);
      continue;
    }
    lL(i, r, n);
    e++;
  }
  console.log(`Stored widget code on ${e} ${e === 1 ? 'node' : 'nodes'}`);
});
let lM = new class {
  constructor() {
    this.activeWidget = null;
    this.runQueue = [];
  }
  findQueueIndex(e) {
    for (let t = 0; t < this.runQueue.length; t++) {
      if (c2(this.runQueue[t], e)) return t;
    }
    return -1;
  }
  pushFront(e) {
    if (e.lifecycleCommand.name !== 'rerender') {
      this.runQueue.unshift(e);
      return;
    }
    let t = this.findQueueIndex(e);
    t !== 0 && (t !== -1 && this.runQueue.splice(t, 1), this.runQueue.unshift(e));
  }
  pushBack(e) {
    if (e.lifecycleCommand.name !== 'rerender') {
      this.runQueue.push(e);
      return;
    }
    this.findQueueIndex(e) === -1 && this.runQueue.push(e);
  }
  runUserInitiatedWidget(e) {
    let t = e.pluginID;
    if (_$$Vi(t)) {
      lw.runWidget({
        ...e,
        pluginID: t
      });
      return;
    }
    let i = this.activeWidget && e.forceRunLowPriority;
    let n = this.activeWidget && e.allowToRunLowPriority && this.activeWidget.lifecycleCommand.widgetNodeID === e.lifecycleCommand.widgetNodeID;
    if (!i && !n) return this.setRunningWidget(e);
    this.pushBack(e);
  }
  runLowPriority(e) {
    this.activeWidget ? this.pushBack(e) : this.setRunningWidget(e);
  }
  setRunningWidget(e) {
    if (this.activeWidget?.lifecycleCommand.name === 'rerender') {
      this.pushFront(e);
      return;
    }
    let t = {
      ...e,
      promise: new Promise(() => { })
    };
    t.promise = (async () => {
      try {
        await lN(e);
      } catch (i) {
        let t = i instanceof Error ? i : new Error('Unable to run widget code');
        i instanceof lR || $D(_$$e.EXTENSIBILITY, t, {
          tags: {
            widgetAction: e.widgetAction,
            widgetId: e.pluginID,
            widgetVersionId: e.pluginVersionID
          }
        });
        return t;
      } finally {
        t === this.activeWidget && (this.activeWidget = null, this.runQueue.length && this.setRunningWidget(this.runQueue.shift()));
      }
    })();
    this.activeWidget = t;
    return t.promise;
  }
}();
function lj() {
  return _$$nl() || !1;
}
function lU(e, t) {
  if (_$$nl() || !t) return;
  let {
    publishedCanvasWidgetVersions,
    fetchedCanvasWidgetVersions,
    publishedWidgets,
    currentUserOrgId,
    orgById,
    openFile,
    teams
  } = debugState.getState();
  let d = t ? publishedCanvasWidgetVersions[e]?.[t] : void 0;
  let c = _$$wA({
    orgById,
    currentUserOrgId
  });
  if (!d) return fetchedCanvasWidgetVersions[e]?.[t] ? c?.widgets_whitelist_enforced ? lT.DISALLOWED_BY_ORG : lT.OTHER : void 0;
  let u = openFile ? openFile.teamId : '';
  let p = teams && u ? teams[u] : null;
  let m = !openFile?.canEdit;
  if (RA.has(e) && _$$lt({
    currentOrg: c,
    currentTeam: p,
    isViewer: m
  })) {
    return lT.AI_DISABLED;
  }
  if (d.org_id && d.org_id !== currentUserOrgId && c) return lT.OTHER;
  if (d.org_id && !canMemberOrg(currentUserOrgId, debugState.getState())) return lT.ORG_MEMBER_ONLY;
  if (Rm(publishedWidgets[e])) return lT.REQUIRES_PAYMENT;
  let h = _$$T3();
  if (h && d.manifest.editorType && !d.manifest.editorType.includes(h)) return h === 'figjam' ? lT.FIGMA_ONLY : lT.FIGJAM_ONLY;
}
class lB {
  constructor(e) {
    this.runWidgets = e;
    this.hostInfoMap = new Map();
    this.stickableInfoMap = new Map();
    this.queueRun = function(e) {
      let t = debugState.getState().mirror.appModel.activeUserAction;
      debugState.subscribe(() => {
        t = debugState.getState().mirror.appModel.activeUserAction;
        [QOV.DEFAULT, QOV.SELECTING_TEXT].includes(t) && i && (e(), i = !1);
      });
      let i = !1;
      return () => {
        [QOV.DEFAULT, QOV.SELECTING_TEXT].includes(t) ? (e(), i = !1) : i = !0;
      };
    }(() => {
      this.runWidgets(this.hostInfoMap, this.stickableInfoMap);
      this.hostInfoMap = new Map();
      this.stickableInfoMap = new Map();
    });
  }
  stickableAdded(e, t) {
    let i = this.hostInfoMap.get(e) ?? {
      addedStickables: new Set(),
      removedStickables: new Set()
    };
    i.addedStickables.add(t);
    i.removedStickables.$$delete(t);
    this.hostInfoMap.set(e, i);
    let n = this.stickableInfoMap.get(t) ?? {
      oldHost: null,
      newHost: null
    };
    n.newHost = e;
    this.stickableInfoMap.set(t, n);
    this.queueRun();
  }
  stickableRemoved(e, t) {
    let i = this.hostInfoMap.get(e) ?? {
      addedStickables: new Set(),
      removedStickables: new Set()
    };
    i.removedStickables.add(t);
    i.addedStickables.$$delete(t);
    this.hostInfoMap.set(e, i);
    let n = this.stickableInfoMap.get(t) ?? {
      oldHost: null,
      newHost: null
    };
    n.oldHost = e;
    n.newHost = null;
    this.stickableInfoMap.set(t, n);
    this.queueRun();
  }
}
class lV {
  constructor() {
    this.stickableManager = new lB((e, t) => {
      for (let [t, {
        addedStickables: i,
        removedStickables: n
      }] of e.entries()) {
        let e = getSceneGraphInstance().get(t);
        e && e.type === 'WIDGET' && e.widgetEvents.find(e => e === 'ATTACHED_STICKABLES_CHANGED') && lM.runLowPriority({
          pluginID: e.widgetId,
          pluginVersionID: e?.widgetVersionId || '',
          lifecycleCommand: {
            widgetNodeID: t,
            name: 'attachedStickablesChanged',
            addedNodes: Array.from(i),
            removedNodes: Array.from(n)
          }
        });
      }
      for (let [e, {
        oldHost: i,
        newHost: n
      }] of t.entries()) {
        let t = getSceneGraphInstance().get(e);
        t && t.type === 'WIDGET' && t.widgetEvents.find(e => e === 'STUCK_STATUS_CHANGED') && lM.runLowPriority({
          pluginID: t.widgetId,
          pluginVersionID: t?.widgetVersionId || '',
          lifecycleCommand: {
            widgetNodeID: e,
            name: 'stuckStatusChanged',
            oldHost: i,
            newHost: n
          }
        });
      }
    });
    this.didCallTextEditEnd = !1;
    this.didStartPreloadingSandbox = !1;
    this.hasCheckedLocalWidgetsInPlaygroundFile = !1;
  }
  mountWidget(e, t, i, n, r, a, s) {
    let o = getSceneGraphInstance().get(t);
    if (!o) {
      _$$pN({
        shouldShowVisualBell: !0
      });
      return new Error(`Widget node ${t} doesn't exist.`);
    }
    let l = o.reversedChildrenGuids.length === 0;
    let d = o.containingCanvas;
    let c = getSceneGraphInstance().getCurrentPage();
    l && c?.guid === d && this.onImpression([{
      widgetNodeID: t,
      widgetID: e,
      widgetVersionID: o.widgetVersionId
    }]);
    return lM.runUserInitiatedWidget({
      pluginID: e,
      pluginVersionID: o.widgetVersionId || '',
      lifecycleCommand: {
        name: 'mount',
        context: i,
        isInsert: l,
        widgetNodeID: t,
        position: n
      },
      widgetAction: r,
      triggeredFrom: a,
      forceRunLowPriority: s
    });
  }
  mountWidgetLowPriority(e, t, i, n, r, a) {
    return this.mountWidget(e, t, i, n, r, a, !0);
  }
  onInsertFromExisting(e, t) {
    _$$Vi(e.widgetID) || (this.addWidgetToRecentlyUsed(e.widgetVersionID, e.widgetID), lp.trackInsertsFromExisting(e, t));
  }
  trackSelectionStateInteraction(e, t) {
    _$$Vi(e.widgetID) || lp.trackSelectionStateInteraction(e, t);
  }
  async onImpression(e) {
    let t = e.filter(e => !!e.widgetVersionID);
    lp.trackImpression(e.filter(e => !_$$Vi(e.widgetID)));
    this.trackLocalWidgetsInPlaygroundFile(e);
    let i = await Dz(debugState);
    i?.canEditCanvas && (debugState?.dispatch(Cf({
      widgetIDAndVersions: t
    })), this.didStartPreloadingSandbox || (_$$a4('cppvm').catch(() => {}) , this.didStartPreloadingSandbox = !0));
    return !0;
  }
  trackLocalWidgetsInPlaygroundFile(e) {
    if (this.hasCheckedLocalWidgetsInPlaygroundFile) return;
    let {
      selectedView
    } = debugState?.getState();
    if (selectedView.view === 'fullscreen' && selectedView.tryPluginId && selectedView.isPlaygroundFile) {
      let i = e.filter(e => !e.widgetVersionID);
      i.length > 0 && ye('local_widget_impression_playground_file', {
        pluginId: selectedView.tryPluginId,
        isWidget: !0,
        localWidgetIds: i.map(e => e.widgetID)
      });
    }
    this.hasCheckedLocalWidgetsInPlaygroundFile = !0;
  }
  onTextEditEnd(e, t, i) {
    let n = i[0];
    let r = getSceneGraphInstance().get(n.id);
    if (r?.type !== 'TEXT') throw new Error('Can\'t have a text event on non text node');
    _$$z3.startInteraction(e, 'textEditEnd');
    this.didCallTextEditEnd = !0;
    let a = {
      pluginID: e,
      pluginVersionID: getSceneGraphInstance().get(t)?.widgetVersionId || '',
      allowToRunLowPriority: !0,
      lifecycleCommand: {
        name: 'textEditEnd',
        widgetNodeID: t,
        bubbledNodes: i,
        event: {
          characters: r.characters
        }
      }
    };
    lM.runUserInitiatedWidget(a)?.finally(() => {
      this.didCallTextEditEnd = !1;
    });
  }
  logMultipleInputEditorsInWidget(e, t) {
    t > 1 && _$$sx('Widget Multiple Input Editors', {
      pluginID: e,
      numEditors: t
    });
  }
  queueRender(e, t) {
    let i = getSceneGraphInstance().get(t);
    if (i?.isEmbed || i?.isLinkPreview) {
      $D(_$$e.EXTENSIBILITY, new Error(`Calling queuRender from a first party widget for pluginID=${e}, widgetNodeID=${t}`));
      return;
    }
    lM.runLowPriority({
      lifecycleCommand: {
        name: 'rerender',
        widgetNodeID: t
      },
      pluginID: e,
      pluginVersionID: i?.widgetVersionId || ''
    });
  }
  renderFirstPartyWidget(e, t) {
    lM.runUserInitiatedWidget({
      pluginID: e,
      lifecycleCommand: {
        name: 'rerender',
        widgetNodeID: t
      },
      pluginVersionID: ''
    });
  }
  clickWidget(e, t, i) {
    if (!_$$Vi(e) && !Fr()) return _$$R4.instance.handleUpgrade(Q7.RUN_WIDGET);
    _$$z3.startInteraction(e, 'click');
    lM.runUserInitiatedWidget({
      pluginID: e,
      lifecycleCommand: {
        name: 'click',
        widgetNodeID: t,
        bubbledNodes: i
      },
      allowToRunLowPriority: this.didCallTextEditEnd,
      pluginVersionID: getSceneGraphInstance().get(t)?.widgetVersionId || ''
    });
    let n = getSceneGraphInstance().get(t);
    this.addWidgetToRecentlyUsed(n?.widgetVersionId, e);
    _$$T3() === 'figma' && YQ({
      id: 'widget_run_from_figma'
    });
  }
  runPropertyMenuCallback(e, t, i, n) {
    if (!_$$Vi(e) && !Fr()) return _$$R4.instance.handleUpgrade(Q7.RUN_WIDGET);
    this.didCallTextEditEnd = !1;
    glU.setDefaultEditMode();
    let r = {
      pluginID: e,
      lifecycleCommand: {
        name: 'propertymenu',
        widgetNodeID: t,
        propertyName: i,
        propertyValue: n
      },
      pluginVersionID: getSceneGraphInstance().get(t)?.widgetVersionId || '',
      allowToRunLowPriority: this.didCallTextEditEnd
    };
    lM.runUserInitiatedWidget(r);
    let a = getSceneGraphInstance().get(t);
    this.addWidgetToRecentlyUsed(a?.widgetVersionId, e);
  }
  terminateRunningWidget(e, t) {
    mK({
      pluginID: e,
      widgetNodeID: t
    }) && _$$wY();
  }
  clickHyperlink(e) {
    _$$Ay2.postRedirect(`/exit?url=${encodeURIComponent(e)}`, '_blank');
  }
  addWidgetToRecentlyUsed(e, t) {
    if (e && !this.canInteractWithWidget(t, e)) return;
    let i = debugState.getState().selectedView.editorType;
    if (void 0 !== i) {
      let n = _$$B6(i);
      debugState?.dispatch(RH({
        storeInRecentsKey: n,
        id: t,
        version: e || '',
        currentUserId: _$$o3()
      }));
    }
  }
  async getWidgetIconBuffer(e, t) {
    let {
      publishedCanvasWidgetVersions,
      currentUserOrgId
    } = debugState.getState();
    let r = !!t;
    let a = t ? publishedCanvasWidgetVersions[e]?.[t] ?? (await $Z(e, t, currentUserOrgId)) : void 0;
    let s = r ? DK : ZI;
    let o = s / 4;
    let l = _$$Dl(s, s);
    let d = l.getContext('2d');
    if (d.beginPath(), d.moveTo(s / 2, 0), d.arcTo(s, 0, s, s, o), d.arcTo(s, s, 0, s, o), d.arcTo(0, s, 0, 0, o), d.arcTo(0, 0, s, 0, o), d.clip(), !r) {
      d.fillStyle = 'black';
      d.globalAlpha = 0.8;
      d.fill(_$$c7, 'evenodd');
      return Nd(l.toDataURL('image/png'));
    }
    if (!a) {
      d.fillStyle = '#e5e5e5';
      d.fillRect(0, 0, s, s);
      return Nd(l.toDataURL('image/png'));
    }
    try {
      let e = `${a.redirect_icon_url}&cors=1`;
      return await lG(e);
    } catch (i) {
      let t = i instanceof Error ? i : new Error('Failed to get widget icon');
      $D(_$$e.EXTENSIBILITY, t, {
        extra: {
          widgetID: e,
          msg: t.message,
          redirectIconUrl: a?.redirect_icon_url,
          originalError: JSON.stringify(i)
        }
      });
      return t;
    }
  }
  showTooltip(e, t) {
    let i = getSceneGraphInstance().get(e);
    if (!i) return;
    let n = {
      bounds: t,
      text: i.widgetTooltip
    };
    c2(n, zl.get(HV)) || HV.syncFromFullscreen(n);
  }
  hideTooltip() {
    HV.syncFromFullscreen(null);
  }
  stickableAdded(e, t) {
    this.stickableManager.stickableAdded(e, t);
  }
  stickableRemoved(e, t) {
    this.stickableManager.stickableRemoved(e, t);
  }
  showNonInteractableWidgetTooltip(e, t) {
    let i;
    let n = getSceneGraphInstance().get(e);
    if (!n || !n.widgetId) return;
    let r = lU(n.widgetId, n.widgetVersionId);
    if (!r) return;
    switch (r) {
      case lT.FIGMA_ONLY:
        i = _$$t('widgets.widget_can_only_run_in_figma');
        break;
      case lT.FIGJAM_ONLY:
        i = _$$t('widgets.widget_can_only_run_in_figjam');
        break;
      case lT.ORG_MEMBER_ONLY:
        {
          let {
            currentUserOrgId,
            orgById
          } = debugState.getState();
          let n = _$$wA({
            orgById,
            currentUserOrgId
          });
          i = _$$t('widgets.widget_only_for_members_of_org', {
            orgName: n.name
          });
          break;
        }
      case lT.REQUIRES_PAYMENT:
        i = _$$t('widgets.paid_widgets_can_only_be_run_after_purchasing');
        break;
      case lT.AI_DISABLED:
        i = _$$t('widgets.your_organization_has_opted_out_of_ai');
        break;
      case lT.DISALLOWED_BY_ORG:
        {
          let {
            currentUserOrgId,
            orgById
          } = debugState.getState();
          let r = _$$wA({
            orgById,
            currentUserOrgId
          });
          let a = _$$t('widgets.this_widget_is_not_allowed_by_your_organization');
          let s = _$$t('widgets.this_widget_is_not_allowed_by_your_organization_v2', {
            orgName: r.name,
            widgetName: n.widgetName
          });
          i = getFeatureFlags().widgets_use_new_org_message ? s : a;
        }
      case lT.OTHER:
    }
    if (!i) return;
    let a = {
      bounds: t,
      text: i
    };
    HV.syncFromFullscreen(a);
  }
  canInteractWithWidget(e, t) {
    return !lU(e, t);
  }
  canViewWidgetDetails(e, t) {
    let i = lU(e, t);
    return i === lT.REQUIRES_PAYMENT || !i;
  }
  isRenderingWidget(e) {
    return _$$Dc2(e);
  }
}
async function lG(e) {
  return (await lH(() => fetch(e))).arrayBuffer().then(e => new Uint8Array(e));
}
function lz() {
  return Kg.waitForWAFValidation('challenge');
}
async function lH(e) {
  let t = !1;
  isDevEnvironment() && (await lz(), t = !0);
  let i = await e();
  return t || i.status !== 202 || i.headers.get('x-amzn-waf-action') !== 'challenge' ? i : (await lz(), e());
}
let lW = !1;
let lK = /^\/file\/([^/]+)(\/[^/]+)?$/;
function lY(e, t) {
  if (typeof e != 'object' || !e) return;
  let {
    paints,
    encodedPaints,
    styleId,
    strokeWeight,
    strokeOpacity,
    strokeCap,
    dashPattern,
    strokeBrushGuid,
    scatterStrokeSettings,
    stretchStrokeSettings,
    dynamicStrokeSettings
  } = e;
  Number.isFinite(strokeWeight) && paints && t.syncFromFullscreen({
    paints,
    encodedPaints,
    styleId,
    strokeWeight,
    strokeOpacity,
    strokeCap,
    dashPattern,
    strokeBrushGuid,
    scatterStrokeSettings,
    stretchStrokeSettings,
    dynamicStrokeSettings
  });
}
export function $$lq1(e, t, i, n) {
  if (!lW) {
    lW = !0;
    let r = getInitialOptions().frame_context;
    let a = getInitialOptions().editing_file;
    r?.type === 'integration' && a?.editor_type !== 'whiteboard' && _$$g5(e => ({
      ...e,
      appIsReadOnly: !0
    }));
    dn === rCR.RECOVERY && a?.editor_type !== 'whiteboard' && _$$g5(e => ({
      ...e,
      appIsRecovery: !0
    }));
    _$$s$(new $$lQ0(e, t, n));
    XT(new sB(t));
    uF(new _$$a3(t));
    fT(new _$$Z3(t));
    $q(new _$$L(t));
    QT(new oq());
    Zb(t);
    gh();
    FR();
    pO();
    zs(t);
    Db();
    _$$eY2();
    $W();
    mQ();
    _$$xi();
    _$$T4(new lV());
    _$$G2();
    _$$a();
    Zi(new t4(t));
    G_();
    z4();
    fG();
    LC();
    _$$n6(t);
    _$$_2();
    xQ();
    WY();
    _$$tO();
    Ln();
    XR();
    qZ();
    OX();
    PR();
    bJ();
    Ju();
    qb();
    pP();
    YL();
    _$$bJ();
    jx(t);
    _$$y5(i);
    _$$no();
    Ds();
    kJ();
    _$$fT();
    h$();
    _$$x3();
    pH(t);
    _$$A7();
    _$$ae();
    jV();
    EA();
    L6();
    wy();
    _$$e7();
    T6();
    _p(t);
    Io();
    bS();
    _$$hR();
    window.App = {
      triggerAction(e) {
        switch (e) {
          case 'prune-derived-data':
          case 'dump-pending-registers':
            Y5.triggerActionInUserEditScope(e);
            break;
          default:
            console.error(`The action ${e} is disabled in release builds.`);
        }
      }
    };
    window.addEventListener('focus', () => {
      Y5.isReady() && glU?.onWindowFocus();
    });
    window.addEventListener('storage', e => {
      if (Y5.isReady() && e.key) {
        let t = e.key;
        WK(() => {
          glU?.onStorage(t);
        });
      }
    });
    window.prompt = (e, t) => {
      let i = '';
      alert(i = 'An error occurred. Please contact support. Sorry for the inconvenience.');
      return i;
    };
  }
  return Y5;
}
getFeatureFlags().ce_aal_enable_debug && (window.AAL_SETTINGS = _$$N, window.resetAALConstants = _$$e3);
let l$ = null;
async function lZ(e) {
  if (l$ && e === l$.fileKey) return l$;
  let t = `https://s3-us-west-2.amazonaws.com/figma-fixed-scrolling/${getInitialOptions().cluster_name}/${e}`;
  let i = await fetch(t);
  if (i.status === 200) {
    let t = await i.json();
    if (!t.fileKey || !t.fixedScrolling) throw new Error(`Broken-fixed-scrolling metadata for file ${e} is missing 'fileKey' or 'fixedScrolling'.`);
    l$ = t;
    return t;
  }
  if (i.status === 404 || i.status === 403) {
    let t = {
      fileKey: e,
      fixedScrolling: []
    };
    l$ = t;
    return t;
  }
  throw new Error(`Broken-fixed-scrolling metadata request error: ${i.status}, ${i.statusText}`);
}
let lX = class e extends sP(sN(sR)) {
  constructor(t, i, n) {
    super();
    this._isDesktopAppRunning = !1;
    this._readyStartTime = 0;
    this.session = {
      user: null
    };
    this._memorySpikeOnFileLoadBytes = 0;
    this.fileArrayToString = null;
    this.loadAndStartFullscreenIfNecessary = Kt(async () => {
      let t = _$$nl();
      if (this._readyStartTime = window.performance.now(), _$$xK.start('loadAndStartFullscreen'), e.startFetchingFontList(), e.startFetchingInterfaceFont(), _$$oU(location.href).then(e => {
        this._isDesktopAppRunning = e;
        e && _$$N3.shouldShowOnce() && this._store.dispatch(_$$aK(_$$kF.FOR_OPEN));
      }), e.prepareSpellCheck(), t && console.log('isMacDebugApp', _$$m), _$$m) {
        await this.onReady();
        glU?.debugMacAppIsStartingFullscreen();
        document.body.parentElement.style.backgroundColor = 'transparent';
      } else {
        let e = this._getTsApisForWasm();
        t && console.log('About to initialize WebGPU');
        await vU();
        t && console.log('About to initialize fullscreen');
        await _$$e4(e);
        t && console.log('Finished initializing fullscreen');
        await this.onReady();
        t && console.log('Finished onReady');
      }
      _$$X2();
      _$$W_();
      _$$F4(dn);
    });
    this._hasSelection = () => !!Ez5 && !Ez5.editorState().selectionEmpty?.getCopy();
    this._currentFileThumbnail = () => {
      let e = bv(this._store?.getState());
      return e?.thumbnailGuid;
    };
    this._isSelectedNodeCurrentThumbnail = () => this._currentFileThumbnail() === this._selectedValidThumbnailNodeIds()[0];
    this.handleSketchImportEvent = e => {
      if (this.hasUnsavedChanges() || !e.dataTransfer || e.dataTransfer.files.length !== 1) return !1;
      let t = e.dataTransfer.files.item(0);
      return !!(t && t.name.toLowerCase().endsWith('.sketch')) && (this.backToFiles(), this._store.dispatch(b6(e.dataTransfer)), !0);
    };
    this.updateSelectionProperties = (e, t = {}) => {
      let i = t.shouldCommit ?? zk.YES;
      let n = t.overwrite ?? WXh.ALWAYS;
      let r = t.editScopeType ?? zkO.USER;
      T8(e, this._state.mirror.selectedStyleProperties, r, i, n);
    };
    this.nullCurrentSelectedProperty = {
      currentSelectedProperty: {
        type: rrT.NONE,
        indices: []
      }
    };
    this.updateAppModel = e => {
      gX(e);
    };
    this.resetLoadedFigFile = () => {
      hMR && hMR?.resetLocalMax();
      _W && _W.resetOOMState();
      this._figFileLoadPromise = new Promise(e => {
        this._figFileLoadPromiseResolve = e;
      });
    };
    this.currentOrgId = () => this._state.currentUserOrgId || null;
    this.currentTeamId = () => {
      let {
        selectedView,
        folders
      } = this._state;
      if (selectedView.view === 'team') return selectedView.teamId;
      if (selectedView.view === 'folder') {
        let i = folders[selectedView.folderId];
        return i ? i.team_id : null;
      }
      return null;
    };
    this.triggerActionEnum = (e, t) => {
      if (e === rcl.ENTER_LAYOUT_MODE) {
        let e = this._store.getState().selectedView;
        this._store.dispatch(_$$sf({
          ...e,
          versionId: void 0
        }));
      }
      if (t != null && typeof t != 'object') throw new Error(`Invalid payload for action ${e}`);
      glU?.triggerActionEnum(e, t);
    };
    this.triggerActionEnumInUserEditScope = (e, t) => {
      l7.user(rcl[e], () => this.triggerActionEnum(e, t));
    };
    this.triggerAction = (e, t) => {
      if (e === 'enter-layout-mode') {
        let e = this._store.getState().selectedView;
        this._store.dispatch(_$$sf({
          ...e,
          versionId: void 0
        }));
      }
      if (t != null && typeof t != 'object') throw new Error(`Invalid payload for action ${e}`);
      glU?.triggerAction(e, t);
    };
    this.triggerActionInUserEditScope = (e, t) => {
      l7.user(e, () => this.triggerAction(e, t));
    };
    this.commit = () => {
      if (!glU) throw new Error('Fullscreen is not available');
      return glU.commit();
    };
    this.getCurrentFileName = () => this._state.openFile?.name || 'Untitled';
    this.isCopyExportRestricted = () => this._state.openFile != null && Pe(this._state.openFile);
    this.onShowImageScaledDownWarningInfoClick = () => {
      _$$Ay2.unsafeRedirect('https://help.figma.com/hc/articles/360040028034', '_blank');
      this.dispatch(_$$F.dequeue({}));
    };
    this.onShowGIFConvertedAndScaledDownWarningInfoClick = () => {
      _$$Ay2.unsafeRedirect('https://help.figma.com/hc/articles/360040028034', '_blank');
      this.dispatch(_$$F.dequeue({}));
    };
    this._viewportQueryParamValue = '';
    this.hasUnsavedChanges = () => !!(this._state.saveStatus && this._state.saveStatus.hasUnsavedChanges);
    this.shouldSuppressUnsavedChangesUI = () => !!(getFeatureFlags().suppress_unsaved_changes_ui && this._state.saveStatus && this._state.saveStatus.tabCloseText === E63.SUPPRESS_UNSAVED_CHANGES_UI);
    this.dispatch = (...e) => {
      if (!this._store) throw new Error('Trying to dispatch before we\'ve been initialized');
      this._store.dispatch(...e);
    };
    this.dispatchIfSaved = (...e) => {
      if (!this.hasUnsavedChanges() || this.shouldSuppressUnsavedChangesUI()) {
        this.dispatch(...e);
        return;
      }
      if (Ed(() => {
        this.dispatch(_$$eH());
      })) {
        return;
      }
      let t = _$$t('autosave.unable_to_leave_document.unsaved_changes_save_in_background');
      !1 === navigator.onLine && (t = _$$t('autosave.unable_to_leave_document.pending_changes'));
      this.dispatch(_$$to({
        type: _$$v2,
        data: {
          message: t
        }
      }));
    };
    this.restoreSoftDeletedNode = e => {
      glU?.restoreSoftDeletedNode(e);
    };
    this.handleUpgradeRefresh = () => {
      _$$Ay2.reload('Multiplayer got handleUpgradeRefresh');
    };
    this._writeFilesQueue = [];
    this.toggleMenu = (e, t, i) => {
      if (e === m7W.SEARCH) {
        Jf(this._state.dropdownShown) ? jD(this.dispatch, this._state.dropdownShown, {
          forceClose: t === 'toolbar'
        }) : $I({
          trackingData: {
            source: t,
            keyboardShortcut: i
          }
        });
        return;
      }
      if (e === m7W.PREFERENCES) {
        if (TY(this._state.dropdownShown)) {
          this.dispatch(ho({
            type: _$$pi,
            data: {
              selectionToUpdate: m7W.PREFERENCES
            }
          }));
        } else {
          let t = this._state.mirror.appModel.showUi ? 42 : 0;
          this.dispatch(j7({
            type: _$$pi,
            data: {
              targetRect: {
                top: 0,
                right: t,
                bottom: t,
                left: 0,
                width: t,
                height: t
              },
              togglePreferences: e === m7W.PREFERENCES
            },
            hasOwnEscKeyHandler: !0
          }));
        }
      } else if (e === m7W.HIDE_UI) {
        let {
          selectedView,
          mirror
        } = debugState.getState();
        mirror.appModel.showUi && (this.dispatch(_$$oB()), Jf(this._state.dropdownShown) && jD(this.dispatch, this._state.dropdownShown, {
          forceClose: t === 'toolbar'
        }));
        selectedView.view === 'fullscreen' && selectedView.editorType === _$$nT.DevHandoff && _$$wY();
      }
    };
    this.getLatestPublishedVersionHashForComponent = (e, t) => {
      let i = this._state.fileByKey[e];
      if (!i || !i.team_id) return F7.INVALID;
      let n = this._state.library.publishedByLibraryKey.components;
      let r = F7.INVALID;
      let a = _$$l(i.library_key ?? _$$$2(e));
      let s = n[i.team_id];
      s?.[a]?.[t] && !s[a][t].unpublished_at && (r = s[a][t].content_hash || F7.INVALID);
      return r;
    };
    this.getLatestPublishedVersionForStateGroup = (e, t) => {
      let i = this._state.fileByKey[e];
      if (!i?.team_id) return Rf.INVALID;
      let n = _$$l(i.library_key ?? _$$$2(e));
      let r = this._state.library.publishedByLibraryKey.stateGroups;
      let a = r[i.team_id]?.[n]?.[t];
      return a && !a.unpublished_at ? a.version : Rf.INVALID;
    };
    this.missingFontPopoverReported = !1;
    this.allowWebGestures = null;
    this.cancelPendingGestures = null;
    this.takePencilSample = null;
    this.takeIndirectPinchGesture = null;
    this.openMakePrototypeModal = () => {
      let e = zl.get(Gh);
      !zl.get(_$$xP) && e ? $I({
        moduleToOpen: {
          type: 'custom',
          module: jsx(_$$x2, {
            aiTrackingContext: e
          }),
          beforeModuleOpen: () => {
            zl.set(Gh, void 0);
          },
          name: Sn.MAGIC_LINK_DONE_TOAST
        },
        trackingData: {
          source: 'fullscreen_action_make_prototype'
        }
      }) : e || Y5.triggerAction('end-magic-link');
    };
    this.isMagicLinkDone = () => zl.get(d_);
    this.isMagicLinkDoneToastShowing = () => zl.get(_$$xP);
    this.linkToComponent = () => {
      $I({
        moduleToOpen: {
          type: 'custom',
          module: jsx(rL, {}),
          name: Sn.LINK_TO_COMPONENT
        },
        trackingData: {
          source: 'fullscreen_action_link_to_component'
        }
      });
    };
    this.logFullscreenActionToDatadogRum = (e, t) => {
      J6.addAction(e, _$$e.SCENEGRAPH_AND_SYNC, _$$$.INFO, t);
    };
    this.showNudgeDesignModeAfterTemplateSetPasted = () => {
      let e = zl.get(Ji(!0));
      let t = e.data?.seatTypeLicenseTypes;
      t?.includes(G_h.DESIGN) && (debugState.dispatch(_$$F.dequeue({})), debugState.dispatch(_$$F.enqueue({
        icon: zX.DESIGN_MODE,
        message: _$$t('cooper.toolbelt.toast.switch_design_mode_edit_template'),
        button: {
          text: _$$t('cooper.toolbelt.toast.switch_design_mode'),
          action: _$$_o
        }
      })));
    };
    this._store = i;
    this._actionHandler = new oo(this._store);
    this.session.user = t;
    this._getTsApisForWasm = n;
    this.resetLoadedFigFile();
    this.bindListeners();
    this.addStackOverflowListener();
  }
  addStackOverflowListener() {
    window.addEventListener('oom_trigger', e => {
      let t = zl.get(qm);
      _$$y4.showMemoryCrashModal({
        isBranching: t
      }, this.openFileKey(), this._store);
    });
    window.addEventListener('error', e => {
      fF({
        message: e.message
      }) ? _$$y4.fullscreenCrashed({
        type: 'stack-overflow'
      }, !0) : e.message.includes('Out of memory') && _$$y4.showMemoryCrashModal({}, this.openFileKey(), this._store);
    });
  }
  static startFetchingFontList() {
    this.fontListPromise == null && (this.fontListPromise = _$$xK.timeAsync('fetchFontList', yF));
  }
  static prepareSpellCheck() {
    _$$Ay3.isIpad || (hO(), (async () => {
      let e = await x5();
      fJ(e);
      e === QC.HUNSPELL && _$$jk();
    })());
  }
  showFragmentSearchSuggestion() {
    let e = this._store.getState().selectedView;
    e && e.view === 'fullscreen' && e.editorType === _$$nT.Design && Ez5?.uiState().isUI3 && getFeatureFlags().fragment_search_selection_suggest && _$$iP(JT.FIND_INSPIRATION, {
      fragmentSearchSource: G4.ACTIONS_SUGGESTION
    });
  }
  static startFetchingInterfaceFont() {
    let t = document.fonts;
    if (e.interfaceFontPromise == null && t && window.FontFace) {
      let i = new window.FontFace('Inter', `url(${buildUploadUrl('2cca21a49f7dad1daa612d73d50357644671964a')}) format('woff2')`);
      t.add(i);
      i.load();
      let n = i.loaded;
      let r = new window.FontFace('Source Code Pro', `url(${buildStaticUrl('webfont/1/SourceCodePro-Medium.woff2')}) format('woff2'), url(${buildStaticUrl('webfont/1/SourceCodePro-Medium.woff')}) format('woff')`);
      t.add(r);
      r.load();
      let a = r.loaded;
      e.interfaceFontPromise = Promise.all([n, a]);
    }
  }
  _shouldShowFileThumbnailReset() {
    return this._isSelectedNodeCurrentThumbnail() || !this._hasSelection();
  }
  getThumbnailMenuItemName() {
    return this._shouldShowFileThumbnailReset() ? 'reset-thumbnail' : 'set-thumbnail';
  }
  getFileThumbnailMenuItemName() {
    return this._shouldShowFileThumbnailReset() ? 'reset-file-thumbnail' : 'set-file-thumbnail';
  }
  disableFileThumbnailMenu() {
    return this._hasSelection() && this._selectedValidThumbnailNodeIds().length !== 1 || !this._hasSelection() && !this._currentFileThumbnail();
  }
  disableShowRotationOriginMenuItem() {
    return !('getDirectlySelectedNodes' in this._state.mirror.sceneGraph) || this._state.mirror.sceneGraph.getDirectlySelectedNodes().length !== 1;
  }
  setFileVersion(e) {
    this._store.dispatch(XQ({
      fileVersion: e
    }));
  }
  handleFileThumbnailMenuItem() {
    let e = this.openFileKey();
    KF(e != null, 'should have editing file key');
    this._store.dispatch($m({
      file_key: e,
      thumbnail_guid: this._shouldShowFileThumbnailReset() ? null : this._selectedValidThumbnailNodeIds()[0]
    }));
  }
  getPageThumbnailMenuItemName() {
    let e = UN().getCurrentPage();
    let t = e?.thumbnailInfo;
    let i = this._state.mirror.sceneGraph.getDirectlySelectedNodes()[0];
    return t?.nodeID === i?.guid || i == null ? 'reset-page-thumbnail' : 'set-page-thumbnail';
  }
  disablePageThumbnailMenu() {
    return !this._hasSelection() || this._selectedValidThumbnailNodeIds().length !== 1;
  }
  handlePageThumbnailMenuItem() {
    let e = this._state.mirror.sceneGraph.getDirectlySelectedNodes()[0];
    if (!e) return;
    let t = UN().getCurrentPage();
    let i = t?.thumbnailInfo;
    i?.nodeID === e?.guid ? t?.clearThumbnailInfo() : t?.setThumbnailInfo({
      nodeID: e?.guid,
      thumbnailVersion: AD
    });
  }
  setFigmascopeSelectedGuidCallback(e) {
    this._actionHandler.setFigmascopeSelectedGuidCallback(e);
  }
  toggleDowntimeBanner() {
    this._store?.getState().showingDowntimeBanner ? this._store.dispatch(_$$CN()) : this._store.dispatch(_$$re());
  }
  closeManageMemoryModal() {
    let e = this._store.getState().modalShown;
    e && e.type === gG.type && this._store.dispatch(AS());
  }
  hasDesktopApp() {
    return this._isDesktopAppRunning;
  }
  getDesktopAppMenuItemName() {
    return this._isDesktopAppRunning ? 'open-in-desktop-app' : 'get-desktop-app';
  }
  memorySpikeOnFileLoadBytes() {
    return this._memorySpikeOnFileLoadBytes;
  }
  handleDesktopAppMenuItem(e) {
    if (e === 'open-in-desktop-app') {
      let e = new Promise(e => {
        window.addEventListener('blur', function t() {
          window.removeEventListener('blur', t);
          e();
        });
      });
      Sr(location.href, B3.FULLSCREEN_MENU).then(t => {
        t && _$$s5.shouldShowOnce() && Promise.race([e, fm(3e3)]).then(() => {
          _$$N3.disableAutoOpenIfUnset();
          this._store.dispatch(_$$aK(_$$kF.FOR_MENU));
        });
      });
    } else {
      e === 'get-desktop-app' && (_$$Ay3.mac ? this.navigateToURL('/download/desktop/mac', jkn.NEW_TAB) : _$$Ay3.windows && this.navigateToURL('/download/desktop/win', jkn.NEW_TAB));
    }
  }
  deselectProperty() {
    this.updateAppModel(this.nullCurrentSelectedProperty);
  }
  openFileKey() {
    return this._state.openFile?.key || null;
  }
  openFileKeyPromise() {
    return Promise.resolve(this.openFileKey() || this._figFileLoadPromise);
  }
  sourceFileKey() {
    return this._state.openFile?.sourceFileKey || null;
  }
  sourceFileKeyPromise() {
    return Promise.resolve(this.sourceFileKey() || this._figFileLoadPromise);
  }
  openFilePromise() {
    let e = this.openFileKey();
    return e ? Promise.resolve({
      type: 'figFile',
      fileKey: e
    }) : this._figFileLoadPromise.then(e => ({
      type: 'figFile',
      fileKey: e
    }));
  }
  figFileLoaded(e) {
    this._figFileLoadPromiseResolve(e);
  }
  get _state() {
    if (!this._store) throw new Error('Calling _state without a valid store');
    return this._store.getState();
  }
  isInDrafts() {
    let e = d1(this._state);
    return !!(e?.folder_id && _$$D2(this._state.folders, e.folder_id));
  }
  showUI() {
    return this._state.mirror.appModel.showUi;
  }
  openExportPicker() {
    _$$sx('Export Picker Opened', {
      from: 'toolbar-or-keyboard'
    });
    this.dispatch(u1({
      id: C9
    }));
  }
  openExportSettingsPicker(e, t, i) {
    _$$sx('Export Settings Picker Opened', {
      from: 'toolbar-or-keyboard'
    });
    this.dispatch(_$$to({
      type: _$$B,
      data: {
        pickerInfo: {
          selectionArea: e,
          canvasArea: t,
          nodeCounts: i
        }
      }
    }));
  }
  getLabValue(e) {
    return Xo(e);
  }
  openPdfExportSettingsModal() {
    this.dispatch(_$$to({
      type: aO
    }));
  }
  openCooperExportModal() {
    this.dispatch(_$$to({
      type: _$$Y
    }));
  }
  openShortcuts() {
    if (Y5.isReady()) {
      let e = this._store.getState().selectedView;
      e && e.view === 'fullscreen' && e.editorType === _$$nT.Whiteboard && this._store.getState().screenreader.enabled && this.dispatch(FU({
        tab: _$$J2.ACCESSIBILITY
      }));
      Y5.triggerAction('toggle-keyboard-shortcuts');
    }
  }
  toggleBrowseAllResourcesModal() {
    Y5.triggerAction('clear-tool', {
      source: 'menu'
    });
    let e = this._store.getState().selectedView;
    if (!(e && e.view === 'fullscreen' && (e.editorType === _$$nT.Whiteboard || e.editorType === _$$nT.Slides || e.editorType === _$$nT.Cooper))) return;
    let t = this._store.getState().universalInsertModal;
    t.showing && t.pinned === _$$t3.NOT_PINNED ? t.pinned === _$$t3.NOT_PINNED ? (Y5.triggerAction('set-tool-default', {
      source: 'menu'
    }), this.dispatch(KE())) : this.dispatch(jy({
      pinned: _$$t3.NOT_PINNED
    })) : this.dispatch(En({
      initialX: 0,
      initialY: 0
    }));
  }
  openPreferencesModal() {
    this.dispatch(_$$to({
      type: _$$T2,
      data: {
        entrypoint: _$$r.QUICK_ACTION
      }
    }));
  }
  showNudgeAmountPicker() {
    this.dispatch(u1({
      id: _$$O
    }));
  }
  openFplDebug() { }
  hidePicker() {
    this.dispatch(XE());
  }
  toggleInteractionRecorderVisibility() {
    if (_$$nl()) {
      this.dispatch(_$$s.error('The interaction recorder is not supported on /test/interactions'));
      return;
    }
    Fk() && (this._store.getState().interactionTestDialogShown ? this.dispatch(_$$l2()) : this.dispatch(_$$q()));
  }
  togglePerfHUDVisibility() {
    if (!getFeatureFlags().perf_hud) return;
    let e = this._store.getState().selectedView;
    let t = e && e.view === 'fullscreen' && e.editorType === _$$nT.Whiteboard;
    _$$v(t);
  }
  toggleFakeMPActivity() {
    getFeatureFlags().perf_hud && nK();
  }
  toggleTSMERConfig() {
    getFeatureFlags().internal_only_debug_tools && n0();
  }
  toggleFeatureFlagBisectorModal() {
    if (!getFeatureFlags().internal_only_debug_tools) return;
    let e = this._store.getState();
    if (e.modalShown?.type === zJ) {
      this.dispatch(AS());
      return;
    }
    this.dispatch(_$$to({
      type: _$$sF
    }));
  }
  showImageScaledDownWarning() {
    this.dispatch(_$$F.enqueue({
      type: 'image_resized',
      message: _$$t('bindings.image_resized_message'),
      button: {
        text: _$$t('bindings.image_resized_message_learn_more'),
        action: this.onShowImageScaledDownWarningInfoClick
      }
    }));
  }
  showGIFConvertedAndScaledDownWarning() {
    this.dispatch(_$$F.enqueue({
      type: 'gif_converted_resized',
      message: _$$t('bindings.gif_resized_and_converted_to_static_image'),
      button: {
        text: _$$t('bindings.gif_resized_and_converted_to_static_image_learn_more'),
        action: this.onShowGIFConvertedAndScaledDownWarningInfoClick
      }
    }));
  }
  usedKeyboardShortcut(e) {
    this.dispatch(v6({
      key: e
    }));
  }
  getClipboardData(e) {
    KF(_$$eD != null, 'clipboard only available on desktop app');
    return _$$eD.getClipboardData([e]).then(({
      data: t,
      format: i
    }) => {
      if (i !== e) throw new Error(`Asked for clipboard data with MIME type ${e}, got data with MIME type ${i} instead.`);
      return new Uint8Array(t);
    });
  }
  canUseClipboardAPI() {
    let e = !!(navigator.clipboard && navigator.clipboard.read && navigator.clipboard.write);
    let t = window.FigmaMobile;
    return (e || !!t?.readClipboardData) && !_$$nl();
  }
  async readClipboardData() {
    let e = {
      text: '',
      html: '',
      containsPng: !1,
      permissionDenied: !1
    };
    let t = window.FigmaMobile;
    if (!(navigator.clipboard && navigator.clipboard.read) && !t?.readClipboardData) throw new Error('No Clipboard API');
    try {
      if (t?.readClipboardData) {
        let i = await t.readClipboardData();
        i.text && (e.text = i.text);
        i.html && (e.html = i.html);
        return e;
      }
      for (let t of await navigator.clipboard.read()) {
        if (t.types.includes('text/html')) {
          let i = await t.getType('text/html');
          e.html = await i.text();
        }
        if (t.types.includes('text/plain')) {
          let i = await t.getType('text/plain');
          e.text = await i.text();
        }
        t.types.includes('image/png') && (e.containsPng = !0);
      }
    } catch (t) {
      t.message.toLowerCase().includes('permission') && uE('clipboard_permission_denied', this._state);
      e.permissionDenied = !0;
    }
    return e;
  }
  async readFilesFromClipboard() {
    if (!navigator.clipboard?.read) throw new Error('No Clipboard API');
    if (!this.fileArrayToString) throw new Error('fileArrayToString undefined');
    let e = await navigator.clipboard.read();
    let t = [];
    for (let i of e) {
      if (i.types.includes('image/png')) {
        if (oz() && function(e) {
          if (!oz()) return !1;
          let t = oH();
          return e.types.includes(t);
        }(i)) {
          let e = new File([await i.getType(oH())], 'image.png');
          t.push(e);
        } else {
          let e = new File([await i.getType('image/png')], 'image.png');
          t.push(e);
        }
      }
    }
    return this.fileArrayToString(t);
  }
  async clipboardHasUnsanitizedPng() {
    if (!oz()) return !1;
    let e = oH();
    try {
      if (!navigator.clipboard?.read) return !1;
      for (let t of await navigator.clipboard.read()) {
        if (t.types.includes(e)) return !0;
      }
    } catch { }
    return !1;
  }
  decodePackedHTML(e) {
    let t = e.indexOf(FJ);
    let i = e.indexOf(gU);
    if (t < 0 || i < 0 || t > i) {
      let t = e.indexOf(xY);
      let i = e.indexOf(_$$eY);
      if (t < 0 || i < 0 || t > i) return new Uint8Array();
      let n = e.slice(t + xY.length, i);
      return Vs(n);
    }
    let n = e.slice(t + FJ.length, i);
    return Vs(n);
  }
  decodeMetadataFromHTML(e) {
    let t = e.indexOf(D2);
    let i = e.indexOf(cu);
    if (t < 0 || i < 0 || t > i) {
      let t = e.indexOf(FM);
      let i = e.indexOf(wh);
      if (t < 0 || i < 0 || t > i) return null;
      let n = e.slice(t + FM.length, i);
      let r = Vs(n);
      return JSON.parse(new TextDecoder().decode(r));
    }
    let n = e.slice(t + D2.length, i);
    let r = Vs(n);
    return JSON.parse(new TextDecoder().decode(r));
  }
  detectSpreadsheetDataInHTML(e) {
    let t = '<table';
    let i = '</table>';
    let n = e.indexOf('<meta');
    let r = e.indexOf('>');
    let a = e.indexOf(t);
    let s = e.indexOf(i);
    if (a < 0 || s < 0 || a >= s) return !1;
    let o = e.includes('google-sheets-html-origin');
    let l = e.includes('content=Excel.Sheet');
    if (o || l) return !0;
    let d = e.includes(t, a + 1);
    let c = (n === 0 && r + 1 === a || a === 0) && s + i.length === e.length - 1;
    return d && c;
  }
  getHtmlString(e, t, i, n) {
    let r = '';
    getFeatureFlags().ce_copy_rightclick_richtext && (r = getFeatureFlags().ce_rich_text_copy && n ? n : `<span style="white-space:pre-wrap;">${hX(e).replace(/\n/g, '<br>')}</span>`);
    return `<meta charset="utf-8"><div>${fb}${btoa(unescape(encodeURIComponent(t)))}${cB}${H3}${H9(i)}${Er}</div>${r}`;
  }
  writeToClipboard(e, t, i, n) {
    if (!navigator.clipboard?.write) throw new Error('No clipboard api');
    let r = this.getHtmlString(e, t, i, n);
    let a = [new ClipboardItem({
      'text/plain': new Blob([e], {
        type: 'text/plain'
      }),
      'text/html': new Blob([r], {
        type: 'text/html'
      })
    })];
    return navigator.clipboard.write(a).then(() => !0).catch(e => (console.error('Error copying to clipboard', e), !1));
  }
  async writeDataToClipboard(e, t) {
    if (!navigator.clipboard || !navigator.clipboard.write) {
      console.error('clipboard.write not available on this browser');
      this.showVisualBellLocalized('copy-as', 'visual_bell.copy_as_png_failed', {}, !1);
      return new Error('clipboard.write not available');
    }
    let i = new Blob([t], {
      type: e
    });
    let n = {
      [e]: i
    };
    if (oz() && e === 'image/png') {
      try {
        let e = oH();
        let i = {
          ...n,
          [e]: new Blob([t], {
            type: e
          })
        };
        await navigator.clipboard.write([new ClipboardItem(i)]);
        this.showVisualBellLocalized('copy-as', 'visual_bell.copied_as_png', {}, !1);
        return !0;
      } catch (e) { }
    }
    let r = [new ClipboardItem(n)];
    try {
      await navigator.clipboard.write(r);
      this.showVisualBellLocalized('copy-as', 'visual_bell.copied_as_png', {}, !1);
      return !0;
    } catch (e) {
      console.error('Error writing clipboard data', e);
      this.showVisualBellWithButtonLocalized('copy-as', 'visual_bell.copy_as_png_failed', {}, 'visual_bell.copy_as_png.retry', () => {
        Y5.triggerAction('copy-as-png');
      }, !1);
      return !1;
    }
  }
  async sendSerializedClipboardDataToS3(e, t) {
    let i;
    let n = this._state;
    if (!_$$n3(n.userAnalyticsData, n.user?.email)) return;
    let r = D2 + btoa(unescape(encodeURIComponent(e))) + cu + FJ + H9(t) + gU;
    let a = 'other';
    if (_$$Ay3.isIpadNative) {
      a = 'ipad';
    } else {
      if (!_$$aJ()) return;
      a = 'desktop';
    }
    let s = Date.now().toString();
    let o = (e, t) => {
      let i = {
        copy_device_type: a,
        copy_timestamp: s
      };
      ds(`crossDeviceCopyPaste_${e}`, n.openFile?.key, n, t ? {
        ...i,
        error: t
      } : i);
    };
    o('upload_url_fetch_start');
    try {
      if (i = await id.getClipboardDataUpload({
        deviceType: a,
        timestampMs: s
      }), i.status === 200) {
        o('upload_url_fetch_success');
      } else {
        throw new Error('Failure from clipboard_data_upload endpoint');
      }
    } catch (e) {
      o('upload_url_fetch_error', e);
      return e;
    }
    let l = i.data.meta;
    if (!l) return;
    let {
      upload_url,
      fields
    } = l;
    let u = new FormData();
    for (let e in fields) u.append(e, fields[e]);
    u.set('Content-Type', 'text/plain');
    u.append('file', r);
    o('clipboard_data_upload_start');
    try {
      let e = await XHR.crossOriginPost(upload_url, u, {
        raw: !0,
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      if (e.status === 204) o('clipboard_data_upload_success'); else throw new Error(`Failed to upload serialized clipboard data to S3 with status code: ${e.status}`);
    } catch (e) {
      o('clipboard_data_upload_error', e);
      return e;
    }
  }
  async getSerializedClipboardDataFromS3(e, t, i) {
    try {
      let n = await fetch(e, {
        method: 'get'
      });
      if (n.ok) {
        ds('crossDeviceCopyPaste_clipboard_data_download_success', this._state.openFile?.key, this._state, {
          copy_device_type: t,
          copy_timestamp: i
        });
        return await n.text();
      }
      throw new Error('Failed to download serialized clipboard data from S3');
    } catch (e) {
      ds('crossDeviceCopyPaste_clipboard_data_download_failure', this._state.openFile?.key, this._state, {
        copy_device_type: t,
        copy_timestamp: i,
        error: e.toString()
      });
      return '';
    }
  }
  getKeyboardLayout() {
    return v7();
  }
  setKeyboardLayoutPreference(e) {
    return _$$rd({
      layout: e
    });
  }
  saveUseNumbersForOpacityPreference(e) {
    this._store.dispatch(_$$b({
      use_numbers_for_opacity: e
    }));
  }
  updateViewportInfo(e, t, i, n, r, a, s, o, l) {
    if (super.updateViewportInfo(e, t, i, n, r, a, s, o, l), _$$eD && !l && !o) {
      let e = `${Math.round(i / 2 - s * r)},${Math.round(n / 2 - s * a)},${Math.round(100 * s) / 100}`;
      this._viewportQueryParamValue !== e && (this._viewportQueryParamValue = e, c3(this._store, e));
    }
  }
  dismissMobileMediaLoadingToast() {
    let e = window.FigmaMobile;
    e?.dismissMediaLoadingToast && e.dismissMediaLoadingToast();
  }
  NOT_LOCALIZED_showMobileNativeToast(e, t) {
    let i = window.FigmaMobile;
    i?.showToast && i.showToast(e, t);
  }
  showMobileNativeToastLocalized(e, t, i) {
    let n = YD(e, t);
    this.NOT_LOCALIZED_showMobileNativeToast(n, i);
  }
  NOT_LOCALIZED_showVisualBell(e, t, i, n) {
    this.dispatch(_$$F.enqueue({
      type: e,
      message: t,
      error: i,
      icon: n
    }));
  }
  NOT_LOCALIZED_showVisualBellInf(e, t, i) {
    this.dispatch(_$$F.enqueue({
      type: e,
      message: t,
      error: i,
      timeoutOverride: 1 / 0
    }));
  }
  showVisualBellLocalized(e, t, i, n) {
    let r = i?.icon;
    let a = r ? zX[r] : void 0;
    let s = YD(t, i);
    let o = window.FigmaMobile;
    o?.showToast ? this.NOT_LOCALIZED_showMobileNativeToast(s, null) : (e === 'copy-as' && YQ({
      id: 'copy_as_completed',
      properties: {
        type: t === 'visual_bell.copied_as_png' ? 'png' : 'svg'
      }
    }), this.NOT_LOCALIZED_showVisualBell(e, s, n, a));
  }
  showVisualBellLocalizedInf(e, t, i, n) {
    let r = YD(t, i);
    let a = window.FigmaMobile;
    a?.showToast ? this.NOT_LOCALIZED_showMobileNativeToast(r, 1 / 0) : this.NOT_LOCALIZED_showVisualBellInf(e, r, n);
  }
  showVisualBellForMultiEdit(e) {
    let t = _$$t('visual_bell.multi_editing');
    this.dispatch(_$$F.enqueue({
      type: e,
      message: t,
      onDismiss: () => Y5.triggerAction('focus-mode-exit'),
      timeoutOverride: 1 / 0
    }));
  }
  showVisualBellForMultiEditGlueError(e) {
    let t = _$$t('visual_bell.multi_edit_glue_error');
    let i = _$$t('visual_bell.multi_edit_glue_error.repair_button');
    this.dispatch(_$$F.enqueue({
      type: e,
      message: t,
      button: {
        text: i,
        action: () => Y5.triggerActionInUserEditScope('repair-breakpoint-multiedit')
      }
    }));
  }
  showVisualBellWithUndo(e, t, i) {
    let n = _$$t('bindings.undo');
    this.dispatch(_$$F.enqueue({
      type: e,
      message: t,
      button: {
        text: n,
        action: () => Y5.triggerActionInUserEditScope('undo')
      },
      error: i
    }));
  }
  showVisualBellWithNodesLocalized(e, t, i) {
    this.dispatch(_$$F.enqueue({
      type: e,
      message: t,
      interpolate: {
        nodes: i
      }
    }));
  }
  showVisualBellWithButtonLocalized(e, t, i, n, r, a) {
    let s = YD(t, i);
    let o = YD(n);
    this.dispatch(_$$F.enqueue({
      type: e,
      message: s,
      button: {
        text: o,
        action: r
      },
      error: a
    }));
  }
  showVisualBellWithCloseButtonLocalized(e, t, i, n, r, a, s) {
    let o = YD(t, i);
    _$$j2(e, n, {
      message: o
    }, r, a, s);
  }
  showVisualBellWithUrlButtonLocalized(e, t, i, n, r) {
    this.showVisualBellWithButtonLocalized(e, t, null, i, () => {
      this._store.dispatch(RK({
        rawInput: n
      }));
    }, r);
  }
  showVisualBellWithReloadButtonLocalized(e, t, i, n, r) {
    this.showVisualBellWithButtonLocalized(e, t, null, i, () => {
      _$$Ay2.reload(n);
    }, r);
  }
  showAutosaveVisualBell() {
    if (this._state.user != null && this._state.openFile != null && this._state.openFile.canEdit) {
      let e;
      let t = ['\u2713', '\u2714', '\u{1F4BE}', '\u{1F44D}', '\u270C\uFE0F', '\u{1F44B}', '\u{1F60E}', '\u26A1\uFE0F'];
      let i = 'autosaveVisualBellLastTime';
      if (navigator.onLine) {
        if (this.hasUnsavedChanges()) {
          e = _$$t('autosave.visual_bell.unsaved_changes');
        } else {
          if (x4) {
            let e = Date.now();
            let t = x4.getItem(i);
            if (x4.setItem(i, e.toString()), t && parseInt(t) >= e - 12096e5) return;
          }
          let n = Math.round(Math.random() * (t.length - 1));
          e = `${t[n]} \xA0 ${_$$t('autosave.you_dont_need_to_save_reminder')}`;
        }
      } else {
        e = _$$t('autosave.visual_bell.offline');
      }
      this.dispatch(_$$F.enqueue({
        type: 'save',
        message: e
      }));
    }
  }
  showAiContentFillSuggestedVisualBell(e, t) {
    if (this._state.user == null || this._state.openFile == null || (this.dismissEphemeralVisualBells(), !this._state.openFile.canEdit)) return;
    let i = UN();
    let n = i.getCurrentPage();
    let r = (n?.directlySelectedNodes || []).map(e => e.guid);
    e.length > 0 && (r = e);
    let a = {
      isMultiSelect: r.length > 1,
      quickActionsSessionId: null
    };
    if (r.length > 0 && r[0]) {
      let e = i.get(r[0]);
      if (e) {
        let t = biQ?.isColumnwiseTable() ?? !1;
        let {
          autoContentNodes
        } = xK([e], t);
        let {
          numTextLayers
        } = CN([e]);
        a.numTextLayers = numTextLayers;
        a.numRows = a.isMultiSelect ? r.length : Wz(autoContentNodes, t);
        a.width = e.size.x;
        a.height = e.size.y;
      }
    }
    _$$iP(JT.CONTENT_FILL, {
      guids: r,
      numExampleRows: 1,
      source: t
    });
    let o = zl.get(dd);
    a.quickActionsSessionId = o;
    ds('ai_text_gen_toast_available', this._state.openFile?.key, this._state, {
      nodeId: r,
      pageId: r[0] && glU ? glU.getPageIdFromNode(r[0]) : '',
      source: t,
      ...a
    });
  }
  clearAiContentFillSuggestedVisualBell() {
    KY({
      actionToClear: JT.CONTENT_FILL
    });
  }
  showMagicLinkSuggestedVisualBell(e) {
    if (this._state.user == null || this._state.openFile == null) return;
    let t = UN().getCurrentPage();
    if (!t) return;
    this.dismissEphemeralVisualBells();
    let i = UN();
    if ((Ez5?.propertiesPanelState()?.propertiesPanelTab?.getCopy() ?? FAf.DESIGN) !== FAf.PROTOTYPE || zl.get(_$$xP) && zl.get(d_)) return;
    let n = t?.directlySelectedNodes || [];
    let r = n.map(e => e.guid);
    if (n.length === 1) {
      let e = n[0];
      e && e.type === 'SECTION' && (r = e.childrenNodes.filter(e => e.isTopLevelFrame()).map(e => e.guid));
    }
    let a = (r = r.filter(e => e && X3B?.isValidNodeForMagicLink(e))).flatMap(e => kh(i, e) ?? []);
    if (a.map(e => e.guid).length === 0) return;
    let o = X3B?.getContextFramesForMagicLink(r) ?? [];
    let l = 0;
    if (e === 'create_node_transition') {
      for (let e of o) {
        let t = Zl(i, e);
        t && (l += Yg(t));
      }
      if (l > 1) return;
    } else if (e === 'box_selection') {
      for (let e of a) l += Yg(e);
      if (l > 0 || !Yh(this._state.mirror.appModel, 'magic-link')) return;
    }
    (r.length !== 1 || !(o.length < 2)) && this._state.openFile.canEdit && _$$iP(JT.MAGIC_LINK, {
      source: e
    });
  }
  showUpscaleImageSuggestedVisualBell(e, t) {
    this._state.user != null && this._state.openFile != null && this._state.openFile.canEdit && (this.dismissEphemeralVisualBells(), _$$iP(JT.UPSCALE_IMAGE, {
      nodeImagePairs: e,
      source: t
    }));
  }
  showPasteWidgetsAsSublayersVisualBell(e, t) {
    let i = t ? {
      text: _$$t('bindings.paste_as_layers'),
      action: e => {
        this.triggerActionInUserEditScope('paste-widgets-as-sublayers');
        this.dispatch(_$$F.dequeue({
          matchType: 'paste-widgets-as-sublayers'
        }));
      }
    } : void 0;
    let n = function(e) {
      switch (e) {
        case KAf.EMBED:
          return _$$t('bindings.embed_paste_notice');
        case KAf.LINK_PREVIEW:
          return _$$t('bindings.link_preview_paste_notice');
        case KAf.WIDGET:
          {
            let e = debugState.getState()?.selectedView;
            switch (e?.editorType) {
              case _$$nT.Slides:
                return _$$t('bindings.widget_paste_notice_slides');
              case _$$nT.Cooper:
                return _$$t('bindings.widget_paste_notice_buzz');
              default:
                return _$$t('bindings.widget_paste_notice');
            }
          }
      }
    }(e);
    this.dispatch(_$$F.enqueue({
      type: 'paste-widgets-as-sublayers',
      message: n,
      timeoutOverride: 5e3,
      timeoutType: 'exact',
      button: i
    }));
  }
  dismissEphemeralVisualBells() {
    this.dispatch(_$$F.dequeue({
      matchTimeout: 'ephemeral'
    }));
  }
  showVisualBellWithDelayLocalized(e, t, i, n, r) {
    let a = YD(t, i);
    this.dispatch(_$$F.enqueue({
      type: e,
      message: a,
      error: n,
      delay: r
    }));
  }
  clearVisualBellType(e) {
    this.dispatch(_$$F.dequeue({
      matchType: e
    }));
  }
  regenerateText(e, t, i, n) {
    $I({
      moduleToOpen: {
        type: 'custom',
        module: jsx(_$$w2, {}),
        beforeModuleOpen: () => {
          _$$B3(JT.CONTENT_FILL);
          Ag(JT.CONTENT_FILL, _$$c5, {
            guids: e,
            numExampleRows: t,
            source: i,
            nodesFromMagicHandle: n
          });
        },
        name: Sn.REGENERATE_TEXT_TOAST
      },
      trackingData: {
        source: 'fullscreen_action_regenerate_text'
      }
    });
  }
  getUserLocale() {
    return Gq()?.getPrimaryLocale(!0) || '';
  }
  getNaturalStyleKey(e) {
    return this._state.library.used__LIVEGRAPH.unnaturalKeyToNaturalKey[_$$n(e)] ?? '';
  }
  getLocalizedString(e, t) {
    return YD(e, t);
  }
  setTimer(e, t, i, n, r, a, s, o) {
    let {
      timer,
      multiplayer
    } = this._store.getState();
    for (let a of multiplayer.allUsers) {
      if (a.sessionID !== e || a.sessionID === multiplayer.sessionID) continue;
      let o = timer.notification;
      let c = 0;
      if (timer.time || t > 0 && t === i) {
        let e = null;
        timer.time && (t === 0 ? (_$$d.timerChange('timerstop'), this.dispatch(_$$lu({
          state: 'closed',
          userInitiated: !1
        }))) : t !== timer.time.totalTimeMs && P$(timer.time) > 0 ? (c = Math.round((t - timer.time.totalTimeMs) / 6e4), o && o.userName === a.name && performance.now() - o.timeOrigin < 1e4 && (c += o.minutesAdded), e = c > 0 ? 'INCREMENTED' : 'DECREMENTED', _$$d.timerChange('timeradjust')) : n ? (e = 'PAUSED', _$$d.timerChange('timerpause')) : t !== i ? (e = 'RESUMED', _$$d.timerChange('timerresume')) : s !== timer.selectedSongID ? _$$d.timerChange('timerupdatesongid') : (this.dispatch(k1(!1)), _$$d.timerChange('timerstart')));
        e != null && this.dispatch(_$$lV({
          action: e,
          timerID: r,
          userName: a.name,
          timeOrigin: performance.now(),
          minutesAdded: c
        }));
      }
    }
    this.dispatch(mI({
      totalTimeMs: t,
      timeRemainingMs: i,
      isPaused: n,
      timerID: r,
      setBy: a,
      songID: s,
      lastReceivedSongTimestampMs: o
    }));
  }
  openTimerModal(e) {
    this.dispatch(_$$lu({
      state: 'open',
      userInitiated: !0,
      source: e
    }));
  }
  resendTimer() {
    let e = this._store.getState();
    if (e.timer?.time?.totalTimeMs) {
      let t = e.timer.time.timeRemainingMs;
      let i = e.timer.time.lastReceivedSongTimestampMs;
      e.timer.time.isPaused || (t -= performance.now() - e.timer.time.timeOrigin, i += performance.now() - e.timer.time.timeOrigin);
      h3O?.sendTimer(e.timer.time.totalTimeMs, t, e.timer.time.isPaused, e.timer.time.timerID, e.timer.setBy, e.timer.selectedSongID, i);
    }
  }
  setMusic(e, t, i, n, r, a) {
    this.dispatch(OJ({
      isPaused: t,
      musicMessageID: i,
      selectedSongID: n,
      lastReceivedSongTimestampMs: r,
      isStopped: a
    }));
  }
  setActiveAgendaItemId(e) {
    sr.syncFromFullscreen(e);
  }
  resendMusic() {
    let e = this._store.getState();
    if (e.music?.music) {
      let t = e.music.music.lastReceivedSongTimestampMs;
      e.music.music.isPaused || (t += performance.now() - e.music.music.timeOrigin);
      h3O?.sendMusic(e.music.music.isPaused, e.music.music.musicMessageID, e.music.music.selectedSongID, t, e.music.music.isStopped);
    }
  }
  activateVotingStampTool() {
    !function() {
      let e = hf(null).find(e => e.name === _$$sn);
      let t = e && k6(e, '');
      t && e.label && be(t, e.label);
    }();
  }
  showReturnToInstanceVisualBell(e) {
    this.dispatch(_$$l5(e));
  }
  showReturnToVariantVisualBell(e, t, i) {
    _$$P2(e, t, i);
  }
  showPushOverridesVisualBell() {
    this.dispatch(_$$F.enqueue({
      type: 'push_overrides',
      message: _$$t('design_systems.component_panel.changes_pushed_to_main_component')
    }));
  }
  showPasteLoadingIndicatorAndPaste() {
    this.dispatch(_$$n2.set({
      message: 'Pasting',
      callback: () => {
        glU?.handlePaste();
      }
    }));
  }
  showPromptToMoveLibraryItems(e) {
    let t = this._state.openFile;
    let i = e.movableSymbols;
    let n = e.movableStateGroups;
    let r = e.symbolToStateGroup;
    let a = e.movableStyles;
    let s = Object.keys(a).length;
    !(!(s || Object.keys(i).length || Object.keys(n).length) || !t || Kz(t)) && (s || w5(t.teamId ? this._state.teams[t.teamId] : void 0)) && (this.dispatch(_$$Q.dequeue({
      type: _$$_.MOVE_COMPONENTS_PROMPT
    })), XHR.post('/api/design_systems/move_validity', {
      style_moves: a,
      component_moves: i,
      state_group_moves: n,
      dst_file_key: t.key
    }).then(e => {
      let {
        valid_move_id_to_file_key
      } = e.data.meta;
      let i = Object.keys(valid_move_id_to_file_key);
      if (i.length === 0) return;
      let n = new Set();
      for (let e of i) {
        let t = r[e];
        t ? n.add(t) : n.add(e);
      }
      this.dispatch(_$$Q.enqueueFront({
        notification: {
          type: _$$_.MOVE_COMPONENTS_PROMPT,
          message: s ? _$$t('design_systems.updates.to_move_pasted_styles_to_this_file_publish_a_library_update') : _$$t('design_systems.updates.to_move_pasted_components_to_this_file_publish_a_library_update'),
          acceptCallback: () => {
            this.dispatch(_$$to({
              type: dD,
              data: {
                initiallyCheckedItemIDs: n,
                entrypoint: RR.FULLSCREEN_MOVE_COMPONENTS_PROMPT
              }
            }));
          },
          movableItemIds: n
        }
      }));
    }).catch(() => {}) );
  }
  _selectedValidThumbnailNodeIds() {
    let e = this._store.getState();
    if (e.mirror == null || e.mirror.sceneGraphSelection == null || e.openFile == null) return [];
    let t = [];
    for (let i in e.mirror.sceneGraphSelection) {
      let n = e.mirror.sceneGraph.get(i);
      n && (n.type === 'FRAME' || n.type === 'SYMBOL' || n.type === 'SECTION' || n.type === 'SLIDE') && !n.resizeToFit && t.push(i);
    }
    return t;
  }
  startRenamingNodes(e) {
    this.dispatch(FP({
      tab: xae.LAYERS
    }));
    this.dispatch($O({
      type: aX.type,
      data: {
        guids: e,
        nodeType: 'layer'
      }
    }));
  }
  startRenamingPage(e) {
    this.dispatch(FP({
      tab: xae.LAYERS
    }));
    zl.set(_$$l3, e);
  }
  startRenamingPages(e) {
    this.dispatch(FP({
      tab: xae.LAYERS
    }));
    this.dispatch($O({
      type: aX.type,
      data: {
        guids: e,
        nodeType: 'page'
      }
    }));
  }
  insertComponentOrShowError__DEPRECATED(e, t, i, n) {
    this.dispatch(_$$c({
      fileKey: e,
      nodeId: t,
      canvasX: i,
      canvasY: n
    }));
  }
  fetchComponentBufferForSevRepair(e, t, i, n) {
    if (i === 'STATE_GROUP') {
      try {
        let e = `/state_group/${t.key}/version/${t.version}/canvas?fv=${n}&adventurous_newt=true`;
        return Eo.getCanvas({
          canvas_url: e
        });
      } catch (e) {
        return Promise.resolve(new Uint8Array());
      }
    } else if (i === 'LOOSE_COMPONENT') {
      try {
        let t = `/component/${e.key}/canvas?ver=${e.version}&fv=${n}`;
        return Eo.getCanvas({
          canvas_url: t
        });
      } catch (e) {
        return Promise.resolve(new Uint8Array());
      }
    } else {
      throw new Error('Invalid assetType');
    }
  }
  fetchComponentBuffers(e, t, i, n) {
    return F1(e, t, i, n);
  }
  fetchVariableSetBuffers(e, t, i, n) {
    return g4(e, t, i, n);
  }
  bindListeners() {
    this.fromFullscreen.on('handleUpgradeRefresh', this.handleUpgradeRefresh);
  }
  validateAndParseURL(e) {
    try {
      let {
        hash,
        host,
        hostname,
        href,
        origin,
        pathname,
        port,
        protocol,
        search
      } = new URL(e);
      return {
        hash,
        host,
        hostname,
        href,
        origin,
        pathname,
        port,
        protocol,
        search
      };
    } catch {
      return null;
    }
  }
  backToFiles() {
    this.dispatch(_$$eH());
  }
  copyLinkToPage(e, t) {
    let i;
    let n = this._state.openFile;
    let r = this._store.getState().mirror;
    let a = r.sceneGraph.get(e);
    let o = a?.name;
    let l = null;
    let d = _$$A('link-copied');
    if (n) {
      switch (t) {
        case idw.SITE:
          let c = _$$oA(n.siteMount);
          let u = c?.siteDomain?.domain;
          if (!u || _$$oA(c?.status) !== 'published') return;
          l = IU({
            domain: u,
            path: o
          });
          d = _$$t('sites.fullscreen_actions.external_url_copied');
          break;
        case idw.FIGMA:
          let p = _$$$A(this._state.selectedView);
          let m = Wl(this._state.selectedView);
          let h = _$$s2(this._state.selectedView);
          l = jN({
            file: n,
            nodeId: e,
            isDevHandoff: p,
            isDevModeOverview: m,
            devModeFocusId: h
          });
          d = m ? _$$t('desktop_bindings.visual_bell.summary_link_copied') : a?.type === 'FRAME' ? _$$t('desktop_bindings.interstitial.frame_link_copied') : a?.type === 'SECTION' ? _$$t('desktop_bindings.interstitial.section_link_copied') : r.appModel.pagesList.length > 1 ? _$$t('desktop_bindings.interstitial.page_link_copied') : _$$P(this._state.selectedView) ? _$$t('desktop_bindings.visual_bell.slide_deck_link_copied') : _$$t('desktop_bindings.visual_bell.file_link_copied');
          break;
        default:
          xb(t);
      }
    } else {
      console.error(`file key is empty in copying link, pathname is ${_$$Ay2.location.pathname}`);
      l = `${location.protocol}//${location.host}${_$$Ay2.location.pathname}?node-id=${encodeURIComponent(EO(e))}`;
    }
    let g = r.selectionProperties.responsiveSetTitle || a?.name || n?.name;
    if (getFeatureFlags().ce_copy_labelled_links && g) {
      let e = document.createElement('a');
      e.href = l;
      e.innerText = g;
      i = wY(e.outerHTML, l);
    } else {
      i = Dk(l);
    }
    i.then(() => this.dispatch(_$$F.enqueue({
      message: d
    })));
  }
  generateLinkToNode(e) {
    return this._generateLinkToNode(e);
  }
  generateLinkToCmsItemPage(e, t) {
    return this._generateLinkToNode(e, t);
  }
  _generateLinkToNode(e, t = null) {
    let i = this._state.openFile;
    let n = null;
    i ? n = jN({
      file: i,
      nodeId: e,
      cmsItemId: t
    }) : (console.error(`file key is empty in generating link to node, pathname is ${_$$Ay2.location.pathname}`), n = `${location.protocol}//${location.host}${_$$Ay2.location.pathname}?node-id=${encodeURIComponent(EO(e))}`);
    return n;
  }
  generateLinkToRemoteNode(e, t) {
    return jN({
      file: {
        key: e
      },
      nodeId: t
    });
  }
  generateRedirectLinkForSignedOutEdit(e, t) {
    if (!e) return _$$Ay2.location.pathname;
    let i = this.generateLinkToNode(e);
    return t ? `${i}${_$$Ay2.location.hash}` : i;
  }
  getLocalGUIDFromUrl(e) {
    let {
      nodeIdInThisFile
    } = _$$ih(e, this._store.getState());
    return nodeIdInThisFile;
  }
  getLocalVersionIdFromUrl(e) {
    let {
      versionId
    } = _$$ih(e, this._store.getState());
    return versionId;
  }
  isUserPresent() {
    return !!this.session.user;
  }
  documentIsLoaded() {
    super.documentIsLoaded();
    this._documentIsLoaded();
  }
  async _documentIsLoaded() {
    if (_$$xK.documentIsLoaded(), _$$eD?.addTabAnalyticsMetadata({
      fileLoadTime: this._fileLoadTime
    }), window.figmaPerfTesting && window.postMessage({
      name: 'DOCUMENT_IS_LOADED',
      value: performance.now() / 1e3
    }, '*'), window.DebuggingHelpers && (window.DebuggingHelpers.documentIsLoaded = !0), mpGlobal.shouldConnectToMultiplayer) {
      let e = ZG();
      let t = h3O?.currentSessionID() ?? -1;
      e && !isLocalFileKey(e.fileKey) ? (t < 0 && x1('Autosave', 'Trying to initialize autosave without a session ID', {
        reportErrorToSentry: !0
      }), await e.onConnect(t), await _$$xK.timeAsync('restoreAutosave', async () => {
        try {
          await e.session()?.restoreAutosaveIfNeeded();
        } catch (e) {
          Lf('Failed to check for or restore autosave changes', e);
        }
      })) : e || t !== 0 ? !e && t > 0 && this._store.getState().user && _$$W('Autosave should have been initialized for logged in user.') : this._figFileLoadPromise.then(async e => {
        let t = this._store.getState().user;
        if (!t) return;
        mu(e, t.id);
        let i = ZG();
        if (i && !i.session()) {
          let e = h3O?.currentSessionID() ?? -1;
          e < 0 && x1('Autosave', 'Trying to initialize autosave without a session ID', {}, {
            reportAsSentryError: !0
          });
          await i.onConnect(e);
        }
      }).catch(e => {
        Lf('Unable to enable autosave for new file', e);
      });
    }
    this.dispatch(_$$X());
    _$$z.getIsExtension() && u_();
    e.maybeEnterRecoveryMode(this._store);
    this._figFileLoadPromise.then(e => {
      let t = this._store.getState().user;
      t && (_$$e5(), _$$s3({
        userID: t.id,
        openFileKey: e
      }));
    });
    this._memorySpikeOnFileLoadBytes = 0;
    P2e && (this._memorySpikeOnFileLoadBytes = hMR ? hMR.getLocalMaxUsedHeapMemory() - hMR.getTotalUsedHeapMemory() : 0);
  }
  static async maybeEnterRecoveryMode(e) {
    let t = await Dz(e);
    let i = e.getState().selectedView;
    t?.canEdit ? t && i.isRecoveryMode && (Ez5?.uiState().isRecovery.set(!0), _$$sx('enter_recovery_mode', {
      currentAllocatedBytes: hMR?.getTotalUsedHeapMemory(),
      maxAllocatedBytes: hMR?.getMaxUsedHeapMemory(),
      fileKey: i.fileKey
    })) : e.dispatch(_$$sf({
      ...i,
      isRecoveryMode: !1
    }));
  }
  openFontSettings() {
    return dm();
  }
  setMissingFont(e, t) {
    glU?.setMissingFontOnSelectedText(e, t);
  }
  selectMissingFontNodes(e, t, i) {
    glU?.selectMissingFontNodes(e, t, i);
  }
  fullscreenIsReady() {
    if (!this._fullscreenIsReady) {
      let t = window.performance.now() - this._readyStartTime;
      console.log(`[Fullscreen] Ready in ${t.toFixed(1)}ms`);
      window.postMessage({
        name: 'FULLSCREEN_IS_READY',
        value: performance.now() / 1e3
      }, '*');
      S3('performance.fullscreen.load_time', t / 1e3);
      _$$xK.start('fullscreenIsReady');
      (function() {
        if (!getFeatureFlags().internal_only_debug_tools) {
          window.DebuggingHelpers = {};
          return;
        }
        window.DebuggingHelpers = Ubo;
        window.DebuggingHelpers.websocket = {
          break: _$$u2,
          unbreak: zi,
          unbreakWithSlowReconnect: () => zi(!0)
        };
        window.DebuggingHelpers.setMemoryUsagePercent = _$$rq;
        window.DebuggingHelpers.setOOM = () => {
          window.dispatchEvent(new Event('oom_trigger'));
        };
        window.DebuggingHelpers.getMemoryBreakdown = () => P2e && hMR ? {
          imageMemory: P2e.getImageMemory(),
          wasmHeapReserved: _$$le(),
          jsBuffers: hMR.getJsBufferMemory(),
          rendererGpuMemory: P2e.getRendererGpuMemory(),
          memStats: hMR.getMemStatsSummary()
        } : {};
        let e = Ubo.reportError;
        let t = Ubo.simulateNullNodeAccess;
        getFeatureFlags().internal_only_debug_tools && (window.DebuggingHelpers.webReport = e => {
          _$$u(() => x1('bindings', `DebuggingHelpers report: ${e}`));
        }, window.DebuggingHelpers.cppReport = t => {
          _$$u(() => e(t));
        }, window.DebuggingHelpers.fakeNodeError = () => {
          _$$u(() => t());
        }, window.TSSceneGraph = qo, window.getActiveTSSceneGraph = UN, window.DesignSystemsHelpers = s_);
        delete window.DebuggingHelpers.reportError;
        delete window.DebuggingHelpers.simulateNullNodeAccess;
      })();
      getFeatureFlags().internal_only_debug_tools && h8() && (window.FrecencyHelpers = iG);
      getFeatureFlags().internal_only_debug_tools && (window.QuickActionsHelpers = {
        showQuickActionsSuggestion: _$$iP,
        clearQuickActionsSuggestion: KY
      });
      window.DebuggingHelpers.dumpAutosave = async () => console.log(JSON.stringify(await Ww()));
      window.DebuggingHelpers.disableAutosave = () => ZG()?.terminateDueToError('Disabled for testing', !1);
      window.DebuggingHelpers.importLocalAutosaveFile = e => to(e);
      window.DebuggingHelpers.exportLocalAutosaveFile = async (e, t) => await ts(e, t);
      window.DebuggingHelpers.exportOfflineLog = () => {
        let e = this.openFileKey() ?? zl.get(_$$h);
        let t = this.getUserId();
        if (!t) throw new Error('Please login and try again');
        if (!e) throw new Error('You must have the file open');
        ti(t, e, `offline-log-${e}.json`);
      };
      window.figmaPerfTesting && (window.FigmaAppTimer = _$$rH, window.FigmaPerfInfo = P2e, window.triggerActionForPerfTests = e => {
        switch (e) {
          case 'insert-lots-of-text':
          case 'zoom-in':
          case 'zoom-out':
          case 'zoom-reset':
          case 'zoom-to-fit':
          case 'zoom-to-selection':
            Y5.triggerActionInUserEditScope(e);
        }
      });
      UK().enableCodegenMcpServer.getCopy() && this.enableCodegenMcpServer(!0);
      _$$Ts2();
      _$$Ts3('Fullscreen Periodic Metrics', () => this.openFileKey(), () => {
        let e = debugState.getState().selectedView;
        return Dc(e.editorType);
      });
      _$$T();
      setTimeout(() => {
        let e = {};
        'figmaExVm' in window && (e.figmaEx = !0);
        (function(e) {
          for (let t of (getComputedStyle(document.body).fontFamily.includes('apple-system') && (e.figgyFontFamilyAppleSystem = !0), document.querySelectorAll('style'))) {
            if (t.textContent && t.textContent.includes('canvas editing page')) {
              e.figgyCanvasEditingPage = !0;
              break;
            }
          }
        })(e);
        (function(e) {
          let t = window.webkit;
          t && (e.figmacWebkit = !0);
          let i = t && t.messageHandlers;
          i && (e.figmacMessageHandlers = !0);
          i && i.readBlob && (e.figmacReadBlob = !0);
        })(e);
        _$$sx('Third Party Apps', e);
      });
      try {
        _I(_$$XT(), this.dispatch);
      } catch (e) {
        $D(_$$e.RENDERING_AND_ANIMATION, new Error(`Error checking hardware acceleration: ${e}`));
      }
      IJ(pi());
      fs();
      bX();
    }
    _$$n_();
    _$$n_2();
    getFeatureFlags()?.fullscreen_use_metrics_event_loop && requestAnimationFrame(tV);
    getFeatureFlags()?.fullscreen_use_threaded_rendering && oN.getInstance().spawnAndStart();
    this.reparentRootElement(this.containerElement);
    _$$m && e.startFetchingFontList();
    KF(e.fontListPromise != null, 'should have loaded font list by the time fullscreen is ready');
    let i = (e, t) => {
      Nz(t) && gg();
      let i = LQ(t);
      let n = performance.now();
      e(_$$nN(t));
      i.redux = performance.now() - n;
      t.localFontAgentVersion && this._store.dispatch(Bs(t.localFontAgentVersion));
      return i;
    };
    e.fontListPromise.then(e => {
      _$$xK.time('updateFontListHost', () => {
        let t = i(this._store.dispatch, e);
        _$$sx('fetched font list', {
          index_font_count: e.indexFontsList?.length,
          index_fonts_timing_xhr: t?.indexFonts?.xhr,
          index_fonts_timing_kiwi_decode: t?.indexFonts?.kiwiDecode,
          index_fonts_timing_preprocess: e.timing?.indexFonts?.preprocess,
          shared_font_count: e.sharedFontsList?.length,
          local_font_count: e.localFontsList?.length,
          fullscreen_kiwi: t?.fullscreen?.kiwiBinding,
          fullscreen_json: t?.fullscreen?.jsonBinding,
          redux: t.redux
        });
      });
      this._fontListLoaded = !0;
      getFeatureFlags().desktop_font_reload_on_focus && (_$$b2() || PE(Date.now() / 1e3), window.addEventListener('focus', () => {
        let e = this._store.getState().selectedView;
        e.view === 'fullscreen' && yY(e.editorType) && M9(() => yF([jXp.LOCAL]), e => {
          getFeatureFlags().desktop_font_reload_on_focus_ux && t8O?.resetNeedsMissingFontsCheck();
          i(this._store.dispatch, e);
        }, e => this.dispatch(_$$F.enqueue(e)));
      }));
    }).catch(e => {
      e.message === 'fetchFontList(): no results' && getFeatureFlags().ce_font_network_status_ui && MZ(this._store.dispatch, _$$t('check_network_compatibility.error_bell.fetch_font_list.message'));
    });
    e.interfaceFontPromise != null && e.interfaceFontPromise.then(() => {
      glU?.interfaceFontLoaded();
    }, e => {
      console.error('Error loading interface font', e);
    });
    window.addEventListener('online', () => Ez5?.uiState().isOffline.set(!1));
    window.addEventListener('offline', () => Ez5?.uiState().isOffline.set(!0));
    vXe?.updateFontList(_$$eM);
    this.resolveReadyPromise();
    glU?.showingProgressBar(this._state.progressBarState.mode);
  }
  setIsReady__TEST_ONLY(e) {
    e ? this.resolveReadyPromise() : this._fullscreenIsReady = !1;
  }
  resolveReadyPromise() {
    this._fullscreenIsReady = !0;
    this._readyPromiseResolve && this._readyPromiseResolve();
  }
  isInWorkshopMode() {
    return zg(this._store.getState().selectedView);
  }
  handleSignedOutEditAttempt(e, t) {
    if (!e && this.isInWorkshopMode()) return;
    let i = this._store.getState().selectedView;
    if (i.view !== 'fullscreen' || i.editorType === _$$nT.Design && !this.session.user) return;
    let n = parseQuery(_$$Ay2.location.search);
    this.dispatch(Ts({
      origin: 'signed_out_edit',
      redirectUrl: this.generateRedirectLinkForSignedOutEdit(n['node-id'], _$$Ay2.location.hash),
      signedUpFromOpenSession: this.isInWorkshopMode()
    }));
    this.dispatch(_$$to({
      type: _$$x,
      data: {
        headerText: this.isInWorkshopMode() ? _$$t('bindings.create_a_figjam_account') : void 0,
        actionOrTool: t
      }
    }));
  }
  openSettings() {
    this._store.getState().user && this.dispatch(_$$to({
      type: _$$s7,
      data: {
        tab: _$$c3.ACCOUNT
      }
    }));
  }
  _jsEditorType(e) {
    return fB(e);
  }
  requestEditorType(e) {
    let t = this._store.getState().selectedView;
    if (t.view !== 'fullscreen') return;
    let i = _$$Ay(t, t => {
      t.editorType === _$$nT.DevHandoff && delete t.devModeFocusId;
      t.editorType = this._jsEditorType(e);
    });
    i !== t && this.dispatch(_$$sf(i));
  }
  logEnterMode(e, t) {
    let i = this._jsEditorType(e);
    (i === _$$nT.Design || i === _$$nT.Illustration || i === _$$nT.DevHandoff) && Ym(this._store.getState(), i, t);
  }
  getDeviceInfoForSize(e, t) {
    return BG(e, t);
  }
  presetDeviceSupportsTouch(e) {
    return _$$ln(e);
  }
  sizeMatchesFramePreset(e) {
    return fS({
      width: e.x,
      height: e.y
    }) != null;
  }
  getFramePresetForSize(e) {
    return fS({
      width: e.x,
      height: e.y
    });
  }
  runLastPlugin() {
    return A9();
  }
  desktopAppQueueFileForWriting(e, t) {
    _$$eD && this._writeFilesQueue.push({
      name: e,
      buffer: t
    });
  }
  desktopAppWriteFiles() {
    _$$eD && this._writeFilesQueue.length !== 0 && (_$$eD.writeFiles(this._writeFilesQueue), this._writeFilesQueue = []);
  }
  enableCodegenMcpServer(e) {
    getFeatureFlags().dt_my_cool_plugin && (zl.get(Kx) !== 'xml' || getFeatureFlags().dt_my_cool_plugin_xml || zl.set(Kx, 'design_to_react'), zl.get(Kx) !== 'jsx' || getFeatureFlags().dt_my_cool_plugin_internal || zl.set(Kx, 'design_to_react'), _$$eD?.setEnableMCP(e, pM, () => this.dispatch(_$$b({
      dev_mode_has_enabled_mcp_server: !0
    }))).then(t => {
      if (!t) return;
      let {
        didStart,
        wasAlreadyRunning,
        port
      } = t;
      if (e) {
        if (wasAlreadyRunning) {
          getFeatureFlags().dt_mcp_get_metadata && this.sendMCPUpdate('tool_list', {});
          return;
        }
        if (didStart) {
          this.dispatch(_$$F.enqueue({
            type: 'codegen-my-cool-plugin-server',
            message: _$$t('mcp.dev_mode_server_enabled', {
              url: `http://127.0.0.1:${port}/${_$$eD?.hasFeature('addMcpStreamableHttpSupport') ? 'mcp' : 'sse'}`
            })
          }));
        } else {
          throw new Error(_$$t('my_cool_plugin.codegen_server_failed_to_start'));
        }
      } else {
        this.dispatch(_$$F.enqueue({
          type: 'codegen-my-cool-plugin-server',
          message: _$$t('my_cool_plugin.codegen_server_stopped')
        }));
      }
    }).catch(e => {
      let t = e.message.includes('EADDRINUSE');
      t || $D(_$$e.DEVELOPER_TOOLS, e);
      console.error(_$$t('my_cool_plugin.codegen_server_failed_to_start'), e);
      this.dispatch(_$$F.enqueue({
        type: 'codegen-my-cool-plugin-server',
        message: t ? _$$t('my_cool_plugin.codegen_server_failed_to_start_port_in_use', {
          port: pM
        }) : _$$t('my_cool_plugin.codegen_server_failed_to_start'),
        error: !0
      }));
      UK().enableCodegenMcpServer.set(!1);
    }));
  }
  sendMCPUpdate(e, t) {
    _$$eD?.sendMCPUpdate(e, t);
  }
  mobileAppExportFile(e, t, i) {
    let n = this.mimeTypeToExportedFileType(t);
    let r = H9(i);
    let a = window.FigmaMobile;
    a?.exportFile && a.exportFile(r, n);
  }
  setMobileCutEnabled(e) {
    let t = window.FigmaMobile;
    t?.updateCutEnabled && t.updateCutEnabled(e);
  }
  setMobileCopyEnabled(e) {
    let t = window.FigmaMobile;
    t?.updateCopyEnabled && t.updateCopyEnabled(e);
  }
  setMobilePasteEnabled(e) {
    let t = window.FigmaMobile;
    t?.updatePasteEnabled && t.updatePasteEnabled(e);
  }
  mobileAppShowContextMenu(e) {
    let t = window.FigmaMobile;
    t?._native_contextual_toolbar_request_menu_items && t._native_contextual_toolbar_request_menu_items(e);
  }
  mimeTypeToExportedFileType(e) {
    return e === 'application/pdf' ? _$$g4.PDF : e === 'image/jpeg' ? _$$g4.JPEG : e === 'image/png' ? _$$g4.PNG : void KF(!1, 'Unexpected MIME type when exporting FigJam selection');
  }
  startMovePagesJob(e, t, i, n) {
    ED('startMovePagesJob', 'Send request to start move pages job.');
    XHR.post(`/api/files/${e}/move_pages`, {
      folder_id: t,
      page_ids: i,
      file_name: n
    }).catch(e => {
      x1('startMovePagesJob', 'Error with starting move pages job.', {
        err: e
      });
    }).then(() => {
      ED('startMovePagesJob', 'Move pages job successfully started.');
    });
  }
  retrieveMetadataAndSelectBrokenFixedScrollingNodes() {
    let e = this._state.openFile?.key;
    e && lZ(e).then(t => {
      if (!t || !t.fixedScrolling || t.fixedScrolling.length === 0) {
        this.dispatch(_$$F.enqueue({
          type: 'no_broken_fixed_scrolling_metadata',
          message: 'We finished scanning your document, and everything looks fine.'
        }));
        ds('Selected Broken Fixed Scrolling Nodes', e, this._state, {
          numNodes: 0,
          missingMetadata: !0,
          error: !1
        });
        return;
      }
      let i = AlE && glU ? glU.selectBrokenFixedScrollingNodesOnPage(AlE.getActiveCanvas(), t) : 0;
      if (i === 0) {
        this.dispatch(_$$F.enqueue({
          type: 'no_broken_fixed_scrolling_nodes_found',
          message: 'We finished scanning this page, and everything looks fine.'
        }));
        ds('Selected Broken Fixed Scrolling Nodes', e, this._state, {
          numNodes: i,
          missingMetadata: !1,
          error: !1
        });
        return;
      }
      this.dispatch(_$$F.enqueue({
        type: 'selected_broken_fixed_scrolling_nodes',
        message: `We found ${i} layers on this page that look like their scroll setting is incorrect. Select the "fix position when scrolling" checkbox to repair them.`
      }));
      ds('Selected Broken Fixed Scrolling Nodes', e, this._state, {
        numNodes: i,
        missingMetadata: !1,
        error: !1
      });
    }).catch(t => {
      this.dispatch(_$$F.enqueue({
        type: 'error_finding_broken_fixed_scrolling_nodes',
        message: `We ran into an error. Please contact ${getSupportEmail()}`
      }));
      ds('Selected Broken Fixed Scrolling Nodes', e, this._state, {
        numNodes: 0,
        errorMessage: t,
        error: !0
      });
      console.error(t);
    });
  }
  mobileAppPush(e, t, i, n, r) {
    oI.publishFrameSelectionForMirror(e, t, i, n, r);
  }
  trackInteractiveSlideElementInsertedForSprig() {
    _$$g2.emit();
  }
  attemptedSketchFileDrop() {
    this.dispatch(_$$to({
      type: i0
    }));
  }
  showCanvasContextMenu(e, t) {
    this.dispatch(j7({
      type: W_,
      data: {
        clientX: e,
        clientY: t
      }
    }));
  }
  showSelectionContextMenu(e, t) {
    this.dispatch(j7({
      type: K9,
      data: {
        clientX: e,
        clientY: t
      }
    }));
  }
  showSelectLayerContextMenu(e, t) {
    this.dispatch(j7({
      type: wi,
      data: {
        clientX: e,
        clientY: t
      }
    }));
  }
  showTextEditModeContextMenu(e, t) {
    this.dispatch(j7({
      type: ku,
      data: {
        clientX: e,
        clientY: t
      }
    }));
  }
  showRulerGuideContextMenu(e, t, i, n) {
    this.dispatch(j7({
      type: _$$t2,
      data: {
        clientX: e,
        clientY: t,
        axis: i,
        rulerGuideContextMenuType: n
      }
    }));
  }
  showLeftPanelTab(e) {
    let t = this._store.getState().selectedView;
    if (t.view === 'fullscreen') {
      if (t.editorType === _$$nT.Design || t.editorType === _$$nT.Illustration) {
        let t = e === xae.ASSETS;
        this.dispatch(FP({
          tab: e,
          persist: !0,
          shouldFocusSearchBar: t
        }));
      } else {
        let i;
        i = this.dispatch;
        Y5.triggerAction('clear-tool', {
          source: 'menu'
        });
        i(En({
          initialX: 0,
          initialY: 0,
          initialTab: _$$p.STICKERS_AND_COMPONENTS
        }));
      }
    }
  }
  toggleTeamLibraryModal() {
    let e = this._store.getState().selectedView;
    if (e.view === 'fullscreen' && e.editorType === _$$nT.Whiteboard) {
      this._store.getState().modalShown?.type === _N ? this.dispatch(Ce()) : this.dispatch(_$$to({
        type: Vg
      }));
      return;
    }
    this._store.getState().modalShown?.type === cX ? this.dispatch(Ce()) : this.dispatch(_$$to({
      type: _$$T2,
      data: {
        entrypoint: _$$r.QUICK_ACTION
      }
    }));
  }
  toggleVariablesModal() {
    this.dispatch(YK({
      type: _$$y2
    }));
  }
  viewWidgetDetails(e) {
    _$$e2({
      id: e,
      isWidget: !0,
      source: 'fullscreen'
    }, createElement(_$$C, {
      extensionId: e,
      extensionType: _$$Ag.COMMUNITY
    }));
  }
  toggleComponentInsertModal() {
    let e = this._store.getState();
    if (e.selectedView.view === 'fullscreen' && e.selectedView.editorType === _$$nT.Design) {
      let {
        x,
        y
      } = Nh(this._state.mirror.appModel.showUi);
      e.universalInsertModal?.showing ? this._state.mirror.appModel.showUi && e.universalInsertModal.pinned !== _$$t3.NOT_PINNED ? (Y5.triggerAction('clear-tool', {
        source: 'menu'
      }), this.dispatch(jy({
        initialX: x,
        initialY: y,
        pinned: _$$t3.NOT_PINNED
      }))) : (this.dispatch(KE()), glU?.triggerAction('set-tool-default', null)) : (_$$sx('Inserts menu opened'), Y5.triggerAction('clear-tool', {
        source: 'menu'
      }), this.dispatch(En({
        initialX: x,
        initialY: y,
        pinned: _$$t3.NOT_PINNED
      })));
    }
  }
  forcePublishStateGroup(e) {
    let t = this._state.openFile;
    this._state.user != null && t != null && t.canEdit && w5(t.teamId ? this._state.teams[t.teamId] : void 0) && this.dispatch(ZS({
      itemsToPublish: new Set(e),
      forcePublish: !0
    }));
  }
  showPublishDialog(e) {
    let t = () => {
      this.dispatch(_$$to({
        type: dD,
        data: {
          initiallyCheckedItemIDs: new Set(e),
          entrypoint: RR.FULLSCREEN_OTHER
        }
      }));
    };
    let i = this._state.openFile?.teamId;
    let n = i ? this._state.teams[i] : void 0;
    this.isInDrafts() || !w5(n) ? this.dispatch(_$$to({
      type: $3,
      data: {
        team: n || null,
        afterFileMove: t
      }
    })) : t();
  }
  async showMissingFontDialog(e, t, i, n) {
    let r = this.isFontListLoaded();
    if (getFeatureFlags().ce_new_missing_fonts_logging) {
      vS(r, t);
    } else {
      let e = this.openFileKey();
      e && !this.missingFontPopoverReported && (ds('Show Missing Fonts Popover', e, this._state, {
        fontListLoaded: r,
        counts: t,
        timeNow: performance.now()
      }), this.missingFontPopoverReported = !0);
    }
    Array.isArray(e) || $D(_$$e.TEXT_AND_VECTOR, new Error('Attempting to show missing fonts dialog when missingFonts is not an array'));
    let a = n === vhv.CURRENT_SELECTION;
    if (!i || this._state.modalShown?.type === CM.type) {
      let i = this._store.getState();
      if (getFeatureFlags().dse_sf_pro_font && i.selectedView.view === 'fullscreen') {
        let t = a ? e.filter(e => e.inSelection) : e;
        let {
          eulaFonts,
          nonEulaFonts
        } = Ie(t, i.fonts, i.selectedView.editorType);
        if (eulaFonts.length > 0 && nonEulaFonts.length === 0) {
          let {
            stillMissingFonts
          } = await _$$i2(eulaFonts, i.fonts, i.userFlags, this.dispatch, 'edit');
          if (stillMissingFonts.length === 0) return;
          e = e.filter(e => !eulaFonts.some(t => t.family === e.family && t.style === e.style) || stillMissingFonts.some(t => t.family === e.family && t.style === e.style));
        }
      }
      this.hidePicker();
      this.hideMissingFontDialog();
      this.dispatch(_$$to({
        type: CM,
        data: {
          isSelectionBased: a,
          missingFonts: e,
          counts: t
        }
      }));
    }
  }
  async showTemplatePublishModal() {
    let e = this._state.openFile;
    if (e) {
      Cu({
        name: 'publish-template-fullscreen-actions',
        fileKey: e.key
      });
      try {
        await ZW({
          dispatch: this.dispatch,
          file: {
            key: e.key,
            name: e.name,
            folder_id: e.folderId,
            team_id: e.teamId,
            editor_type: e.editorType,
            parent_org_id: e.parentOrgId
          },
          source: 'fullscreen-actions',
          fileNeedsMovingBeforePublish: this.isInDrafts()
        });
      } catch {
        this.dispatch(_$$F.enqueue({
          message: _$$t('templates.publishing.bell.no_publish_access'),
          type: 'template-publish-error',
          error: !0
        }));
      }
    }
  }
  hideMissingFontDialog() {
    this._state.modalShown?.type === CM.type && this.dispatch(AS());
  }
  afterFontsLoaded() {
    xL && xL();
    Yv();
  }
  updateSelectedStyleProperties(e, t, i, n, r, a) {
    let s = {
      ..._$$w.decodeMessage(e).nodeChanges[0]
    };
    s.fontName && (s.fontFamily = s.fontName.family, s.fontStyle = s.fontName.style);
    s.intrinsicLineHeight = t;
    i != null && (s.availableOTFeaturesForFonts = i);
    r != null && (s.variableConsumptionMap = r);
    a != null && (s.responsiveTextStyleVariants = a);
    s.leadingTrimEnabled = n;
    this.dispatch(fk({
      selectedStyleProperties: s
    }));
  }
  updateSelectedStyleThumbnail(e) {
    let t = URL.createObjectURL(new Blob([e]));
    this.dispatch(fy({
      selectedStyleThumbnailURL: t
    }));
  }
  updateStyleThumbnail(e, t) {
    let i = this._state.library.local.styles[e];
    if (i && !_$$lP(i.style_type)) {
      let n = $X(t);
      let r = i.meta && i.meta.style_thumbnail;
      this.dispatch(T1({
        styleKind: AT.LOCAL,
        thumbnails: [{
          nodeId: e,
          url: n,
          styleThumbnail: r,
          type: PW.STYLE
        }]
      }));
    }
  }
  async createSavepoint(e, t) {
    let i = this.openFileKey();
    i && (await _$$J(i, e, t, this.dispatch));
    return !0;
  }
  showSavepointModal() {
    this.dispatch(_$$to({
      type: _$$y3,
      data: {}
    }));
  }
  showBrowserAlert(e) {
    alert(e);
  }
  toggleHistoryMode() {
    this._state.mirror.appModel.topLevelMode === lyf.HISTORY ? this.dispatch(Eg()) : this.dispatch(_b());
  }
  showViewChangesNotification(e) {
    let t = this._store.getState();
    let i = HF(t.versionHistory.compareId, t.versionHistory);
    let n = t.modalShown;
    _$$z2(e, this.dispatch, i, n);
  }
  async navigateToURL(e, t) {
    let i = new URL(e, location.href);
    if (location.origin === i.origin) {
      let n = lK.exec(i.pathname);
      if (n && this._store.getState().fileByKey && !this._store.getState().fileByKey[n[1]]) {
        try {
          await _$$S.getFiles({
            fileKey: n[1]
          });
        } catch (e) {
          this.dispatch(_$$F.enqueue({
            message: _$$t('bindings.no_file_access'),
            type: 'NAVIGATE_FILE_FAILED',
            error: !0
          }));
          return;
        }
      }
      t === jkn.CURRENT_TAB ? location.href = e : _$$Ay2.redirect(e, '_blank');
    }
  }
  trimName(e, t) {
    (e = e.trim()).length === 0 && (e = t);
    return e;
  }
  setHyperlinkPopup(e, t, i, n, r, a) {
    let o = null;
    if (e.length > 0) {
      let {
        url,
        nodeIdInThisFile,
        versionId
      } = _$$ih(e, this._store.getState());
      if (nodeIdInThisFile && !versionId) {
        let e = this._store.getState().mirror;
        let t = e.sceneGraph.get(nodeIdInThisFile);
        if (t) {
          let i = t;
          for (; i && i.type !== 'CANVAS';) i = i.parentNode;
          xO(_$$e.FIGJAM, e.appModel);
          o = i && i.guid !== e.appModel.currentPage && t.type !== 'CANVAS' ? {
            type: _$$F3.FRAME,
            text: this.trimName(i.name, _$$t('hyperlink.page')),
            secondaryText: this.trimName(t.name, _$$t('hyperlink.frame'))
          } : {
            type: t.type === 'CANVAS' ? _$$F3.PAGE : _$$F3.FRAME,
            text: this.trimName(t.name, t.type === 'CANVAS' ? _$$t('hyperlink.page') : _$$t('hyperlink.frame'))
          };
        } else {
          _$$lH2(e.appModel.pagesList) ? (o = {
            type: _$$F3.NOT_LOADED,
            text: _$$t('bindings.hyperlink_popup_link_to_unloaded_from_in_this_file')
          }, IL(nodeIdInThisFile, dPJ.HYPERLINK_PRELOAD)) : o = {
            type: _$$F3.MISSING,
            text: _$$t('bindings.hyperlink_popup_link_to_deleted_object')
          };
        }
      } else if (url) {
        let e;
        try {
          e = new URL(url);
          o = e.protocol === 'mailto:' ? {
            type: _$$F3.MAILTO,
            url: e
          } : e.protocol === 'tel:' ? {
            type: _$$F3.TEL,
            url: e
          } : F4(e.hostname) || F4(e.host) ? Sh(e.pathname) ? {
            type: _$$F3.FIGMA_PROTOTYPE,
            url: e
          } : e.searchParams.has('version-id') ? {
            type: _$$F3.FIGMA_VERSION,
            url: e
          } : {
            type: _$$F3.FIGMA_FILE,
            url: e
          } : {
            type: _$$F3.GENERIC,
            url: e
          };
        } catch {
          o = {
            type: _$$F3.INVALID,
            urlString: url
          };
        }
      }
    }
    o ? this.dispatch(R5({
      urlString: e,
      data: o,
      position: t,
      size: i,
      mouse: n,
      guid: r,
      locked: a
    })) : this.dispatch(R5(null));
  }
  updateHyperlinkPopupPosition(e, t) {
    this.dispatch(_$$lz({
      position: e,
      size: t
    }));
  }
  handleUserClickOnHyperlink(e, t) {
    t === PHu.COPY_TO_CLIPBOARD && e.startsWith('mailto:') || e.startsWith('tel:') ? UA(this.dispatch, e, 'HyperlinkCanvas') : this._store?.dispatch(RK({
      rawInput: e
    }));
  }
  setCanvasMentionPopup(e, t, i, n, r, a, s) {
    let o = {
      mentionedUserId: e,
      mentionedByUserId: t
    };
    o ? this.dispatch(Jt({
      data: o,
      position: i,
      size: n,
      mouse: r,
      guid: a,
      locked: s
    })) : this.dispatch(Jt(null));
  }
  updateCanvasMentionPopupPosition(e, t) {
    this.dispatch(pj({
      position: e,
      size: t
    }));
  }
  openHelp() {
    _$$Ay2.unsafeRedirect('https://help.figma.com', '_blank');
  }
  openSupportForum() {
    _$$Ay2.unsafeRedirect('https://forum.figma.com', '_blank');
  }
  openTutorials() {
    _$$Ay2.unsafeRedirect('https://www.youtube.com/figmadesign', '_blank');
  }
  keyboardWillShow() {
    glU?.keyboardWillShow();
  }
  keyboardWillShowWithHeight(e) {
    glU?.keyboardWillShowWithHeight(e);
  }
  getDefaultOnOTFeatures() {
    return _$$G3.OpenTypeFeatureDefaultOn;
  }
  syncPencilStyle(e) {
    lY(e, GI);
  }
  syncBrushStyle(e) {
    lY(e, Vi);
  }
  syncPenStyle(e) {
    lY(e, _o);
  }
  syncHighlighterStyle(e) {
    if (typeof e != 'object' || !e) return;
    let {
      paints,
      strokeWeight
    } = e;
    Number.isFinite(strokeWeight) && paints && IZ.syncFromFullscreen({
      paints,
      strokeWeight
    });
  }
  syncToolStyles(e) {
    if (typeof e != 'object' || !e) return;
    let {
      shapeColor,
      stickyColor,
      shapeWithTextType,
      strokeColor,
      shapeWithTextStrokeStyleType,
      connectorToolLineStyle,
      connectorToolEndCap,
      connectorToolColor,
      washiTapePaint,
      platformShapeSelected
    } = e;
    SK.syncFromFullscreen({
      shapeWithTextType,
      connectorToolLineStyle,
      connectorToolEndCap,
      washiTapePaint
    });
    _$$ez.syncFromFullscreen(shapeColor);
    U9.syncFromFullscreen(shapeWithTextStrokeStyleType);
    getFeatureFlags().figjam_track_stroke_color && _$$lC.syncFromFullscreen(strokeColor);
    qL.syncFromFullscreen(stickyColor);
    wp.syncFromFullscreen(connectorToolColor);
    yE.syncFromFullscreen(platformShapeSelected);
  }
  syncCurrentToolSetSource(e) {
    W6.syncFromFullscreen(e);
  }
  setVideoShouldAutoplay(e) {
    vE.syncFromFullscreen(e);
  }
  getUserName() {
    if (!this._state.user) {
      let e = this._state.multiplayer.allUsers.find(e => this._state.multiplayer.sessionID === e.sessionID);
      return _$$Ay3.isMeetDevice ? _$$t('figjam_try.google_meet_user_name') : e?.name || 'FigJam Human';
    }
    return this._state.user?.name || 'FigJam Human';
  }
  getUserId() {
    if (this._state.user) return this._state.user.id;
    let e = this._state.multiplayer.allUsers.find(e => this._state.multiplayer.sessionID === e.sessionID);
    return e?.userID || null;
  }
  getIsEmojiWheelOpen() {
    return this._state.multiplayerEmoji.type === 'WHEEL';
  }
  openStartingPointFlowInPrototypeViewer(e) {
    let t = this.openFileKey();
    t && this._store.dispatch(_$$K({
      fileKey: t,
      startingPointNodeId: e,
      shouldOpenAtStartingPoint: !0,
      source: 'starting_point'
    }));
  }
  focusPrototypeStartingPointPanelToEditName() {
    NT(FAf.PROTOTYPE);
    this.fromFullscreen.trigger('focusPrototypeStartingPointPanelToEditName', {});
  }
  handleZoomActionTriggeredToSetOnboardingFlag() {
    this.fromFullscreen.trigger('zoomActionMessageForOnboarding', {});
  }
  handlePanActionTriggeredToSetOnboardingFlag() {
    this.fromFullscreen.trigger('panActionMessageForOnboarding', {});
  }
  handleNodeCountReachedForMoveDraft() {
    this.isInDrafts() && YQ({
      id: _$$s4
    });
  }
  escapeAndSaveCSVData(e, t, i) {
    typeof e == 'object' && e && tt(t, unparse(e, {
      escapeFormulae: !0,
      header: i
    }), 'text/csv');
  }
  isNavigatorClipboardWriteSupported() {
    return !!(navigator && navigator.clipboard && navigator.clipboard.write);
  }
  _maybeShowCSVError(e, t) {
    e && this.showVisualBellLocalized('csv import error', t, {}, !1);
  }
  parseCsvStringAndCreateNodes(e, t, i) {
    let n = parse(e, {
      delimiter: t,
      skipEmptyLines: !0
    });
    return this._validateParsedCsvDataAndCreateTable(n, i);
  }
  parseHTMLStringIntoLineDirectionalities(e, t, i) {
    let n = this._parseHTMLLines(e);
    glU?.applyJSONDataAsLineDataToSelection(n, t, i);
    return !0;
  }
  _parseHTMLLines(e) {
    let t = new DOMParser().parseFromString(e, 'text/html');
    if (!t) {
      return {
        data: []
      };
    }
    let i = t.querySelectorAll('p');
    if (!i) {
      return {
        data: []
      };
    }
    let n = [];
    for (let e of i) {
      let t = e.getAttribute('dir') || '';
      n.push(t);
    }
    return {
      data: n
    };
  }
  parseHtmlStringAndCreateNodes(e, t) {
    let i = this._parseHTMLTable(e);
    return this._validateParsedCsvDataAndCreateTable(i, t);
  }
  parseHtmlStringAndTriggerSmartPaste(e, t) {
    sq(this._parseHTMLTable(e).data, t, this._store.dispatch);
    return !0;
  }
  _parseHTMLTable(e) {
    let t = new DOMParser().parseFromString(e, 'text/html');
    if (!t) {
      return {
        data: []
      };
    }
    let i = t.querySelector('table');
    if (!i) {
      return {
        data: []
      };
    }
    let n = 0;
    let r = [];
    for (let e of Array.from(i?.querySelectorAll('tr') ?? [])) {
      let t = [];
      let i = Array.from(e.querySelectorAll('th'));
      let a = Array.from(e.querySelectorAll('td'));
      for (let e of i.length > 0 ? i : a.length > 0 ? a : []) t.push(e.textContent ?? '');
      t.length > n && (n = t.length);
      r.push(t);
    }
    for (let e of r) {
      for (; e.length < n;) e.push('');
    }
    return {
      data: r
    };
  }
  _validateParsedCsvDataAndCreateTable(e, t) {
    return e.meta && e.meta.aborted ? (this._maybeShowCSVError(t, 'whiteboard.csv.parse_failed'), !1) : e.data.length === 0 ? (this._maybeShowCSVError(t, 'whiteboard.csv.file_empty'), !1) : (this.dispatch(_$$n2.set({
      message: _$$t('whiteboard.csv.importing_csv'),
      showLoadingSpinner: !1,
      callback: () => {
        l7.user('whiteboard.import-csv', () => {
          glU?.createTableNodesFromCsvData(e, t);
        });
      }
    })), !0);
  }
  onAgendaChanged(e) {
    sn.syncFromFullscreen(e);
  }
  onSectionPresetPickerCreated(e) {
    _$$h2(e);
  }
  onFigjamStarterKitAction(e) {
    mr(e);
  }
  canUploadAndEditVideo() {
    return Qn(this._state.openFile);
  }
  getVariableSetNumberOfModesAllowed() {
    return f8();
  }
  getDefaultStateKeyForStateGroup(e) {
    let t = UN().get(e);
    if (!t) return '';
    let i = t.assetKeyForPublish;
    if (!i) return '';
    let n = m3(debugState.getState())[i];
    return n ? n.default_state_key : '';
  }
  formatDateTime(e) {
    return new Intl.DateTimeFormat().format(new Date(e));
  }
  setFigjamStarterKitBoundingBox(e, t) {
    return U2(e, t);
  }
  generateEmbed(e) {
    return CV(this._store.dispatch, e, WJ.PASTE).valid;
  }
  generateFlappFromPastedText(e) {
    return !function(e) {
      let t = function(e) {
        let t = e.match(/^(https?:\/\/)/);
        return t ? e.replace(/#.+$/, '').substr(t[1].length) : '';
      }(e);
      for (let e of a4.templates) {
        if (t.match((e.startsWith('^') ? '' : '^(?:www.)?') + e)) return !0;
      }
      return !1;
    }(e) ? !!Ik(e) && (Y5.triggerActionInUserEditScope('insert-interactive-element-into-active-slide', {
      type: 'EMBED',
      url: e,
      canvasFallbackEnabled: !0
    }), !0) : (Y5.triggerActionInUserEditScope('insert-interactive-element-into-active-slide', {
      type: 'YOUTUBE',
      url: e,
      canvasFallbackEnabled: !0
    }), !0);
  }
  generateWidgetFromURL(e, t) {
    return Cg(this._store.dispatch, e, t).some(e => e.valid);
  }
  handleAction(e, t) {
    return this._actionHandler.handleAction({
      name: e,
      payload: t
    });
  }
  pinchZoomFixDisabled() {
    return UK().disablePinchZoomFix.getCopy();
  }
  findInspiration(e = '') {
    $I({
      moduleToOpen: {
        type: 'custom',
        module: P5() ? jsx(z6, {
          isVisualSearch: !0
        }) : jsx(WS, {}),
        beforeModuleOpen: () => jp(e || G4.EDITOR_CONTEXT_MENU),
        name: Sn.VISUAL_SEARCH
      },
      trackingData: {
        source: 'fragment_search_context_menu'
      }
    });
  }
  findCodebaseSuggestions() { }
  openQuickActionsAssetsTab(e, t) {
    $I({
      moduleToOpen: {
        type: 'custom',
        module: P5() ? jsx(z6, {
          initialTab: Qx.PLAN_FILE_ASSETS,
          initialSearchTagType: _d() ? qG.COMPONENTS : void 0,
          closeOnEscape: !0
        }) : jsx(_$$B4, {
          initAssetSearch: !0,
          closeOnEscape: !0
        }),
        beforeModuleOpen: () => {
          zl.set(_$$Lk, Jc.ASSETS);
        },
        name: Sn.ASSETS_TAB_DETAIL_VIEW
      },
      trackingData: {
        source: e,
        keyboardShortcut: t
      }
    });
  }
  inspectFragment() {
    let e = UN().getCurrentPage()?.directlySelectedNodes;
    let t = debugState.getState().openFile?.key;
    if (!e || e.length !== 1 || !t) return;
    let i = e[0];
    _$$ni(i, t);
    let n = debugState.dispatch;
    debugState.getState().modalShown?.type !== rx.type && n(_$$to({
      type: rx
    }));
  }
  startExportAction(e) {
    let t;
    let i = Object.keys(this._store.getState().mirror.sceneGraphSelection);
    switch (e) {
      case b3I.PNG:
        t = hV.CopyAsPNG;
        break;
      case b3I.SVG:
        t = hV.CopyAsSVG;
        break;
      case b3I.RASTERIZE:
        t = hV.RasterizeSelection;
    }
    _$$Dc(t, debugState.getState().saveAsState, this.dispatch, () => e === b3I.RASTERIZE ? l7.user('rasterize', () => glU?.completeExportAction(e)) : glU?.completeExportAction(e), i, 'copy for export');
  }
  sendEventToWebEventListener(e) {
    YQ({
      id: e
    });
  }
  selectPublishedAssetGuids(e) {
    let t = this._store.getState().library.openFilePublished__LIVEGRAPH.styles;
    return e.filter(e => !!t[e]);
  }
  selectLocalStyles(e) {
    let t = new Set(e.map(e => this._store.getState().mirror.sceneGraph.get(e)?.styleType).filter(e => !!e));
    t.size === 1 && this.dispatch(Bn({
      type: Array.from(t.values())[0],
      styleIds: new Set(e),
      folderNames: new Set()
    }));
  }
  async requestOpenExternalSourceFileLibraryKey(e, t, i, n) {
    let r = await Ek(iAs, {
      libraryKey: _$$l(e)
    });
    let a = _$$c2({
      data: r,
      nodeId: t,
      stateGroupId: i,
      isDevHandoff: n,
      mainComponent: !0
    });
    if (a == null) {
      this.dispatch(_$$F.enqueue({
        message: _$$t('bindings.no_file_access'),
        type: 'NAVIGATE_FILE_FAILED',
        error: !0
      }));
      return;
    }
    _$$Ay2.redirect(a.link, '_blank');
  }
  loadedCompareChanges() {
    _$$j.trigger('loadedCompareChanges');
  }
  changeDocumentColorProfile(e, t) {
    let i = this._store.getState().selectedView;
    (i && i.view === 'fullscreen' && yY(i.editorType) || this._state.openFile?.canEdit) && e !== t && (e === ywP.LEGACY ? r6(this.dispatch, e, t, 'assign', this._state.openFile?.key) : this.dispatch(_$$to({
      type: r7,
      data: {
        newDocumentColorProfile: t
      }
    })));
  }
  addWhiteboardToolToRecents(e) {
    if (!_$$ds(e)) return;
    let {
      user
    } = this._store.getState();
    user && this.dispatch(_$$ay({
      currentUserId: user.id,
      storeInRecentsKey: $A.FigJam,
      item: {
        id: e,
        type: vt.WhiteboardTool
      }
    }));
  }
  addWhiteboardDiagrammingShapeToRecents(e, t) {
    let {
      user
    } = this._store.getState();
    _$$KE(e, t, user?.id);
  }
  setUserFlag(e, t) {
    t !== e in this._state.userFlags && this.dispatch(_$$b({
      [e]: t
    }));
  }
  onViewOnlyJiggle(e, t) {
    _$$i3(e, t);
  }
  shouldViewOnlyJiggle() {
    let e = this._store.getState();
    return _$$h4(e);
  }
  upsellLibrariesHandleConsecutivePaste(e, t) {
    _$$nd(e, t);
  }
  onPlaygroundNodeChange(e) {
    _$$U(e);
  }
  triggerHaptics(e) {
    _$$H.trigger(e);
  }
  evaluateMathExpression(e, t) {
    let i = O4(e, t);
    return i.error ? null : i.value;
  }
  onConnectDiagramShapeWithConnector() {
    H0();
  }
  sendActiveStackRegionAnalytics(e) {
    uE('Autolayout focused stack region', this._state, {
      region: e
    });
  }
  afterPageChange(e) {
    _$$Z(e);
  }
  afterComputeViewportSettings(e) {
    gc && gc(e);
    _$$lc();
  }
  movedSingleNodeVisualBell(e, t, i) {
    this.dispatch(_$$F.enqueue({
      type: 'moved-single-node',
      message: _$$t('visual_bell.moved_single_node', {
        nodeName: EJ(t, 30),
        newPage: i
      }),
      ...(getFeatureFlags().ce_move_to_navigate ? {
        button: {
          text: _$$t('visual_bell.go_there'),
          Initialize() {
            let e = _$$Z2();
            return t => {
              e(QZ({
                nodeId: t,
                alwaysPan: !0
              }));
            };
          },
          action(t, i, n) {
            n(e);
          }
        }
      } : {})
    }));
  }
  createSlideAfterFocusedSlide(e) {
    let t = UN();
    return _$$oY(t, e);
  }
  isAiDisabled() {
    return !W7();
  }
  isAiDisabledFigJam() {
    return y8({
      isDisabledForViewers: !0
    });
  }
  isOrgUserGatedForLlama() {
    let {
      currentUserOrgId,
      orgById
    } = debugState.getState();
    return dZ(_$$td(currentUserOrgId, orgById));
  }
  isInAiExperimentOrGrantlist() {
    return $7('bindings');
  }
  removeImageBackground() {
    $I({
      moduleToOpen: {
        type: 'custom',
        module: jsx(_$$w3, {
          source: 'fullscreen-action'
        }),
        beforeModuleOpen: () => {
          let e = ruz?.getNodeImagePairsForEdit() ?? [];
          _$$B3(JT.REMOVE_BACKGROUND);
          Ag(JT.REMOVE_BACKGROUND, _$$J4, {
            source: 'fullscreen-action',
            targets: e
          }, {
            isBatch: e.length > 1
          });
        },
        name: Sn.BACKGROUND_REMOVE_TOAST
      },
      trackingData: {
        source: 'fullscreen_action_remove_image'
      }
    });
  }
  upscaleImage(e, t) {
    $I({
      moduleToOpen: {
        type: 'custom',
        module: jsx(_$$q2, {
          source: t
        }),
        beforeModuleOpen: () => {
          let i = e ?? ruz?.getNodeImagePairsForEdit() ?? [];
          _$$B3(JT.UPSCALE_IMAGE);
          Ag(JT.UPSCALE_IMAGE, _$$r2, {
            targets: i,
            source: t
          }, {
            isBatch: i.length > 1
          });
        },
        name: Sn.BACKGROUND_REMOVE_TOAST
      },
      trackingData: {
        source: 'fullscreen_action_upscale_image'
      }
    });
  }
  autoRenameLayers(e, t) {
    let i = {
      action: JT.AUTO_RENAME_LAYERS,
      source: Tr(e),
      clientLifecycleId: _$$g(),
      file_key: this.openFileKey(),
      quick_actions_session_id: null,
      product_type: 'design'
    };
    let n = new AbortController();
    Dl(i);
    try {
      _$$Ay8({
        params: {
          source: e,
          overwriteNames: !1,
          ignoreDescendants: t
        },
        abortController: n,
        clientLifecycleId: i.clientLifecycleId
      });
    } catch (e) {
      console.error(e);
      _$$as({
        ...i,
        status: dM.FAILED,
        reason: F9.ERROR
      });
      return;
    }
    n.signal.aborted ? _$$as({
      ...i,
      status: dM.FAILED,
      reason: F9.STOPPED
    }) : _$$as({
      ...i,
      status: dM.COMPLETED,
      reason: F9.SUCCESS
    });
  }
  hasAiRenameLayersPermission(e) {
    return A0(e);
  }
  autoRenameLayersDevHandoff(e) {
    R4(e);
  }
  async designToCodeFiles(e, t, i, n, r) {
    if (!Dn()) {
      console.error('Cannot convert design to code while offline');
      return Promise.reject({
        files: []
      });
    }
    let a = UN();
    let s = a.get(e);
    let o = [];
    let l = null;
    if (t) {
      for (let e of n) {
        let t = a.get(e);
        t && o.push(t);
      }
      i && (l = a.get(i));
    }
    if (!s) {
      return Promise.resolve({
        files: []
      });
    }
    let d = {
      useFigmaComponents: getFeatureFlags().componetize_dtr && !r
    };
    return o.length ? await _$$Ts(s, o, l, d) : await _$$Ts(s, void 0, void 0, d);
  }
  bulkExportDesignsToReact() {
    qV(this._store.dispatch);
    return null;
  }
  onDirectExportCompleted() {
    YQ({
      id: 'export_completed',
      properties: {
        from: 'export_panel'
      }
    });
  }
  setSitesViewFile() {
    _$$oz() && (zl.set(_$$s9, Nfd.FILE), this.closeLeftRailOverlay());
  }
  setSitesViewCode() {
    _$$oz() && (zl.set(_$$s9, Nfd.CODE), this.closeLeftRailOverlay());
  }
  setSitesViewCms() {
    _$$oz() && (zl.set(_$$s9, Nfd.DAKOTA), this.closeLeftRailOverlay());
  }
  closeLeftRailOverlay() {
    zl.set(Nl, void 0);
  }
  setSitesInsertsOverlay() {
    _$$oz() && zl.set(Nl, $e.INSERT);
  }
  setSitesFindOverlay() {
    _$$oz() && zl.set(Nl, $e.FIND);
  }
  setAnnotationEditingIndex(e) {
    zl.set(_$$m2, e);
  }
  showSlotPreferredContentPicker(e, t, i) {
    let n;
    n = {
      dispatch: this.dispatch,
      slotNodeId: e,
      position: {
        x: t,
        y: i
      },
      existingOpenModalType: this._state.modalShown?.type
    };
    getFeatureFlags().dse_slots && (n.existingOpenModalType === iN.type && n.dispatch(ES(iN)), n.dispatch(_$$to({
      type: iN,
      showModalsBeneath: !0,
      data: {
        position: n.position,
        slotNodeId: n.slotNodeId
      }
    })));
  }
  async pasteMermaidAsDiagram(e) {
    let t = _$$Ay6();
    try {
      let i = await _$$Ay5.figjam.createVisual({
        prompt: '',
        visualType: 'diagram',
        directMermaidText: e
      }, t);
      Rz('diagram', i);
      return !0;
    } catch (e) {
      console.error('Error pasting mermaid as diagram:', e);
      return !1;
    }
  }
};
lX.interfaceFontPromise = null;
lX.fontListPromise = null;
export let $$lQ0 = lX;
Cs() && $$lQ0.startFetchingFontList();
export const W = $$lQ0;
export const a = $$lq1; 
