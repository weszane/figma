import { jsx } from "react/jsx-runtime";
import { useMemo, createContext, useContext } from "react";
import { useSelector } from "../vendor/514228";
import { assertNotNullish } from "../figma_app/95419";
import { K } from "../905/443068";
import { A } from "../905/251970";
import { useAtomWithSubscription } from "../figma_app/27355";
import { parsePxInt } from "../figma_app/783094";
import { $M } from "../figma_app/930338";
import { Point } from "../905/736624";
import { getI18nString } from "../905/303541";
import { g as _$$g } from "../figma_app/777171";
import { m0 } from "../figma_app/976749";
import { z4 } from "../905/37051";
import { ni } from "../figma_app/62612";
import { t as _$$t2 } from "../905/192333";
import { O } from "../figma_app/71774";
import { F } from "../figma_app/603239";
import { cG } from "../figma_app/940844";
import { rDe, SKA, rZj, wgS, iah, LdP, paq } from "../figma_app/27776";
let $$S0 = parsePxInt(rDe);
let v = parsePxInt(SKA);
let $$A15 = parsePxInt(rZj);
let $$x7 = 44;
let $$N14 = parsePxInt(wgS);
let C = parsePxInt(iah);
let w = parsePxInt(LdP);
let $$O6 = parsePxInt(paq);
let $$R11 = 6;
let $$L10 = 10;
let $$P17 = 0;
let $$D12 = 1;
let $$k2 = 2;
export function $$M8(e) {
  let t = function () {
    let e = ni();
    return useMemo(() => new Point(e.x + C, e.y + C), [e.x, e.y]);
  }();
  let r = m0();
  let n = useSelector(e => e.universalInsertModal.pinned);
  let s = useAtomWithSubscription(_$$g);
  if (z4.getIsExtension()) return s - C - e;
  if (r) return window.innerHeight - C - e;
  let o = window.innerHeight - t.y - C - e;
  return n === _$$t2.PINNED_AND_DOCKED_LEFT ? o : Math.min(v - e, o);
}
export let $$F1 = createContext(null);
export function $$j5() {
  return assertNotNullish(useContext($$F1), "Must be wrapped within <FdBrowseResourceModalContext.Provider>");
}
export function $$U9(e) {
  if (!e) return {
    x: C,
    y: C
  };
  let t = document.querySelector("#toolbelt-action-component-insert");
  if (t) {
    let e = t.getBoundingClientRect();
    let r = e ? e?.top - v - 6 : w;
    return {
      x: e?.x || 284,
      y: r
    };
  }
  {
    let e = document.querySelector("#toolbar-action-component-insert")?.getBoundingClientRect();
    return {
      x: e?.x || 284,
      y: e?.bottom || w
    };
  }
}
export function $$B4({
  containerClassName: e
}) {
  let {
    closeModal,
    pinModal
  } = $$j5();
  let i = F() ? jsx(O, {
    setPinned: pinModal
  }) : jsx(K, {
    "aria-label": getI18nString("general.close"),
    onClick: closeModal,
    children: jsx(A, {})
  });
  return jsx("div", {
    className: e,
    children: i
  });
}
export function $$G16(e) {
  if (!e.community_publishers?.accepted || 0 === e.community_publishers.accepted.length) return "";
  let t = e.community_publishers.accepted[0].name;
  return 1 === e.community_publishers.accepted.length ? getI18nString("community.resource.by_creator", {
    spaceChar: " ",
    creator: t
  }) : getI18nString("community.resource.by_more_than_2_creators", {
    spaceChar: " ",
    creator1: t,
    others: getI18nString("community.resource.by_x_others", {
      numPublishers: e.community_publishers.accepted.length - 1
    })
  });
}
export function $$V3(e) {
  let t = ("community_publishers" in e ? e.community_publishers ?? [] : []).map(({
    profile: e
  }) => e).filter(e => null != e).map(e => e.user?.name ?? e.team?.name ?? e.org?.name ?? "");
  let r = cG(e.plugin_id, t);
  let n = r.length;
  if (0 === n) return "";
  let i = r[0];
  return 1 === n ? getI18nString("community.resource.by_creator", {
    spaceChar: " ",
    creator: i
  }) : getI18nString("community.resource.by_more_than_2_creators", {
    spaceChar: " ",
    creator1: i,
    others: getI18nString("community.resource.by_x_others", {
      numPublishers: n - 1
    })
  });
}
export function $$H13(e) {
  let t = $$G16(e);
  let r = e.unique_run_count;
  let n = getI18nString("community.try.people_use_this", {
    numPeople: r,
    numPeopleStr: $M(r)
  });
  return `${t}${r > 0 ? ` \xb7 ${n}` : ""}`;
}
export const AN = $$S0;
export const B0 = $$F1;
export const B6 = $$k2;
export const CF = $$V3;
export const Ex = $$B4;
export const IT = $$j5;
export const Ix = $$O6;
export const Kr = $$x7;
export const NF = $$M8;
export const Nh = $$U9;
export const Xo = $$L10;
export const Zm = $$R11;
export const dQ = $$D12;
export const fO = $$H13;
export const ff = $$N14;
export const gC = $$A15;
export const kB = $$G16;
export const np = $$P17;