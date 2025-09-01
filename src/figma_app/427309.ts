import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { useState, useRef, useEffect, useMemo } from "react";
import { flushSync } from "../vendor/944059";
import { d4 } from "../vendor/514228";
import { isNullish } from "../figma_app/95419";
import { J } from "../figma_app/63663";
import { d as _$$d } from "../figma_app/844319";
import { T as _$$T } from "../figma_app/300269";
import { q } from "../905/820062";
import { AD } from "../905/871411";
import { UN } from "../905/700578";
import { Xr } from "../figma_app/27355";
import { generateRecordingKey } from "../figma_app/878298";
import g from "classnames";
import { am } from "../figma_app/901889";
import { c$ } from "../figma_app/236327";
import { s as _$$s } from "../cssbuilder/589278";
import { t as _$$t } from "../905/303541";
import { uQ } from "../figma_app/311375";
import { O as _$$O } from "../figma_app/373984";
import { EE, lB } from "../figma_app/731583";
import { _X, $g } from "../figma_app/62612";
import { BK } from "../905/848862";
import { Cf, it } from "../905/504727";
import { K } from "../figma_app/695131";
import { b as _$$b } from "../figma_app/192260";
var f = g;
let $$O3 = 430;
let $$R5 = 1024;
let $$L1 = 375;
let $$P0 = 800;
let $$D4 = 1280;
export function $$k2() {
  let e = d4(e => e.mirror.appModel.currentPage);
  return jsx(M, {}, e);
}
function M() {
  let [e, t] = useState({});
  let r = uQ();
  let s = UN().get(r);
  let l = function (e) {
    let t = useRef(e);
    t.current && t.current.length === e.length && t.current.every((t, r) => t === e[r]) || (t.current = e);
    return t.current;
  }(s?.childrenNodes?.filter(e => e.isBreakpointFrame || e.isDerivedBreakpoint).map(e => e.guid) ?? []);
  if (useEffect(() => {
    if (!l.length) return;
    let {
      currentNodePosition
    } = EE("sitesBreakpoints", l ?? [], e => {
      let r = UN().get(e.nodeId);
      !r || !e.position || "FRAME" !== r.type || r.isGroup || r.isStateGroup || r.isResponsiveSet || flushSync(() => {
        t(t => {
          let n = {
            ...t
          };
          n[e.nodeId] = {
            guid: e.nodeId,
            parentGuid: r.parentGuid,
            position: e.position,
            range: r.breakpointFrameRange
          };
          let {
            minWidth,
            maxWidth
          } = t[e.nodeId]?.range ?? {};
          let {
            minWidth: _minWidth,
            maxWidth: _maxWidth
          } = r.breakpointFrameRange ?? {};
          if ((minWidth !== _minWidth || maxWidth !== _maxWidth) && r.parentGuid) {
            let e = UN().get(r.parentGuid);
            if (e && e.isResponsiveSet) {
              for (let t of e.childrenNodes) if (t.isBreakpointFrame && t.guid && n[t.guid]) {
                let e = n[t.guid];
                e && (e.range = t.breakpointFrameRange);
              }
            }
          }
          return n;
        });
      });
    });
    let r = {};
    for (let t in currentNodePosition) {
      let n = UN().get(t);
      n && (r[t] = {
        guid: t,
        parentGuid: n.parentGuid,
        position: currentNodePosition[t]?.position,
        range: n.breakpointFrameRange
      });
    }
    t(r);
    return () => lB("sitesBreakpoints");
  }, [l]), !l.length) return null;
  let d = Object.values(e).filter(e => e.parentGuid === s.guid).sort((e, t) => t.position.width - e.position.width);
  return isNullish(d) ? null : jsx(F, {
    breakpointRanges: d
  });
}
function F({
  breakpointRanges: e
}) {
  let t = BK("BREAKPOINTS_HEADER_DROPDOWN");
  let r = t.data?.responsiveSetId || "";
  let a = am();
  let s = Xr(_$$O);
  let o = Xr(K);
  let m = _X({
    subscribeToUpdates_expensive: !0
  });
  let g = useMemo(() => {
    let e = function (e, t) {
      let r = UN().get(e);
      if (!r) return {
        top: 0,
        bottom: 0,
        height: 0,
        left: 0,
        right: 0,
        width: 0
      };
      let n = r.absoluteBoundingBox;
      let i = n.x + n.w;
      let a = n.y;
      let s = $g(t, {
        x: i,
        y: a
      });
      s.x = s.x - 8 - 24;
      s.y -= 24;
      return {
        top: s.y,
        bottom: s.y + 24,
        height: 24,
        left: s.x,
        right: s.x + 24,
        width: 24
      };
    }(r, m);
    let t = m.x + 8 + 150 + 24 + 9;
    let n = m.x + m.width - 16 - 9;
    e.right = Math.max(Math.min(e.right, n), t);
    return e;
  }, [r, m]);
  if (!r || !e) return null;
  let y = UN().get(r);
  let I = AD;
  let v = null;
  y && y.childrenGuids && y.childCount > 0 && y.childrenGuids[0] && (I = y.childrenGuids[0], v = UN().get(I));
  let O = e => {
    let {
      name,
      width,
      parentId
    } = e;
    t.hide();
    let s = I;
    let l = v ? v.size.x : null;
    y?.childrenNodes?.forEach(e => {
      (!l || e.size.x - width < l - width) && (s = e.guid, l = e.size.x);
    });
    setTimeout(() => {
      _$$b({
        guid: s,
        name,
        width,
        parentId
      });
    });
    o(!0);
    a("sites_add_breakpoint", {
      type: name,
      width
    });
  };
  let R = () => {
    t.hide();
    s({
      duplicatedBreakpointId: I,
      parentId: r
    });
    a("sites_add_custom_breakpoint");
  };
  let k = e.some(e => e.position.width === $$L1);
  let M = e.some(e => e.position.width === $$D4);
  let F = e.some(e => e.position.width === $$P0);
  let U = e[0]?.parentGuid;
  let B = [jsx(j, {
    title: _$$t("sites.breakpoint_bar.add_desktop_breakpoint"),
    width: $$D4,
    disabled: M,
    onClick: () => {
      U && O({
        name: "Desktop",
        width: $$D4,
        parentId: U
      });
    },
    icon: jsx(J, {})
  }, "add-desktop"), jsx(j, {
    title: _$$t("sites.breakpoint_bar.add_tablet_breakpoint"),
    width: $$P0,
    disabled: F,
    onClick: () => {
      U && O({
        name: "Tablet",
        width: $$P0,
        parentId: U
      });
    },
    icon: jsx(_$$d, {})
  }, "add-tablet"), jsx(j, {
    title: _$$t("sites.breakpoint_bar.add_mobile_breakpoint"),
    width: $$L1,
    disabled: k,
    onClick: () => {
      U && O({
        name: "Mobile",
        width: $$L1,
        parentId: U
      });
    },
    icon: jsx(_$$T, {})
  }, "add-mobile"), jsx(j, {
    title: _$$t("sites.breakpoint_bar.add_custom_breakpoint"),
    onClick: () => R(),
    icon: jsx(q, {})
  }, "add-custom-breakpoint")];
  return jsx(Fragment, {
    children: t.showing && jsx(Cf, {
      targetRect: g,
      type: it.DEFAULT,
      maxWidth: 150,
      lean: "left",
      className: f()(_$$s.eventsAuto.$),
      recordingKey: "sitesBreakpointDropdown",
      preventEventCapture: !0,
      children: B
    })
  });
}
function j(e) {
  let {
    title,
    width,
    disabled,
    onClick,
    icon
  } = e;
  return jsx(c$, {
    disabled,
    onClick: disabled ? void 0 : onClick,
    recordingKey: generateRecordingKey("breakpointDropdownAction", title),
    children: jsxs("div", {
      className: _$$s.flex.flexRow.justifyBetween.wFull.alignCenter.$,
      children: [jsxs("div", {
        className: _$$s.flex.flexRow.itemsCenter.gap4.$,
        children: [icon, title]
      }), width && jsx("div", {
        className: _$$s.colorTextMenuTertiary.textBodyMedium.contentCenter.$,
        children: width
      })]
    })
  });
}
export const IL = $$P0;
export const MS = $$L1;
export const Rp = $$k2;
export const b = $$O3;
export const yF = $$D4;
export const zQ = $$R5;