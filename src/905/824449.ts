import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { memo, useMemo, useRef } from "react";
import { useSelector } from "react-redux";
import { i } from "../905/969773";
import { Z as _$$Z } from "../905/124614";
import { Z as _$$Z2 } from "../905/279476";
import { b as _$$b } from "../905/462537";
import { V as _$$V } from "../905/261687";
import { q as _$$q } from "../905/347574";
import { s as _$$s } from "../905/504529";
import { Y as _$$Y } from "../905/762765";
import { m as _$$m } from "../905/148147";
import { E as _$$E } from "../905/375716";
import { e as _$$e } from "../905/678389";
import { n as _$$n } from "../905/317686";
import { ColorSpaceEnum } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import F from "classnames";
import { whiteColor, borderTranslucent, borderDark, borderLight, blendGradientColors } from "../figma_app/191804";
import { selectWithShallowEqual } from "../905/103090";
import { logError } from "../905/714362";
import { getI18nString } from "../905/303541";
import { F as _$$F } from "../905/989956";
import { pw } from "../905/187165";
import { yM, DP } from "../905/640017";
import { getFillColor, isValidThumbnail } from "../figma_app/80990";
import { dy, rl } from "../905/248569";
import { Ep } from "../figma_app/504823";
import { p3 } from "../figma_app/622881";
import { getBasename } from "../905/309735";
import { isStyleType, getStyleThumbnail } from "../905/405710";
import { Ib } from "../905/129884";
import { M as _$$M } from "../905/968248";
import { Z as _$$Z3 } from "../905/248978";
let s = memo(function (e) {
  return jsxs("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: [jsx("path", {
      fill: "var(--color-icon)",
      d: "M16.204 6.01A2 2 0 0 1 18 8v8l-.01.204a2 2 0 0 1-1.786 1.785L16 18H8l-.204-.01a2 2 0 0 1-1.785-1.786L6 16V8a2 2 0 0 1 1.796-1.99L8 6h8zM8 7a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1z"
    }), jsx("path", {
      fill: "var(--color-icon-tertiary)",
      d: "M16 7a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1zM9 9v6h6V9z"
    })]
  });
});
let o = memo(function (e) {
  return jsxs("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: [jsx("path", {
      fill: "var(--color-icon)",
      d: "M16.204 6.01A2 2 0 0 1 18 8v8l-.01.204a2 2 0 0 1-1.786 1.785L16 18H8l-.204-.01a2 2 0 0 1-1.785-1.786L6 16V8a2 2 0 0 1 1.796-1.99L8 6h8zM8 7a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1z"
    }), jsx("path", {
      fill: "var(--color-icon-tertiary)",
      d: "M16 7a1 1 0 0 1 1 1v3a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1V8a1 1 0 0 1 1-1z"
    })]
  });
});
let d = memo(function (e) {
  return jsxs("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: [jsx("path", {
      fill: "var(--color-icon)",
      d: "M16.204 6.01A2 2 0 0 1 18 8v8l-.01.204a2 2 0 0 1-1.786 1.785L16 18H8l-.204-.01a2 2 0 0 1-1.785-1.786L6 16V8a2 2 0 0 1 1.796-1.99L8 6h8zM8 7a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1z"
    }), jsx("path", {
      fill: "var(--color-icon-tertiary)",
      d: "M11 7a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1H8a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1z"
    })]
  });
});
let c = memo(function (e) {
  return jsxs("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: [jsx("path", {
      fill: "var(--color-icon)",
      d: "M16.204 6.01A2 2 0 0 1 18 8v8l-.01.204a2 2 0 0 1-1.786 1.785L16 18H8l-.204-.01a2 2 0 0 1-1.785-1.786L6 16V8a2 2 0 0 1 1.796-1.99L8 6h8zM8 7a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1z"
    }), jsx("path", {
      fill: "var(--color-icon-tertiary)",
      d: "M16 7a1 1 0 0 1 1 1v1h-7a1 1 0 0 0-1 1v7H8a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1z"
    })]
  });
});
let u = memo(function (e) {
  return jsxs("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: [jsx("path", {
      fill: "var(--color-icon)",
      d: "M16.204 6.01A2 2 0 0 1 18 8v8l-.01.204a2 2 0 0 1-1.786 1.785L16 18H8l-.204-.01a2 2 0 0 1-1.785-1.786L6 16V8a2 2 0 0 1 1.796-1.99L8 6h8zM8 7a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1z"
    }), jsx("path", {
      fill: "var(--color-icon-tertiary)",
      d: "M9 14a1 1 0 0 0 1 1h7v1a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1z"
    })]
  });
});
let p = memo(function (e) {
  return jsxs("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: [jsx("path", {
      fill: "var(--color-icon)",
      d: "M16.204 6.01A2 2 0 0 1 18 8v8l-.01.204a2 2 0 0 1-1.786 1.785L16 18H8l-.204-.01a2 2 0 0 1-1.785-1.786L6 16V8a2 2 0 0 1 1.796-1.99L8 6h8zM8 7a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1z"
    }), jsx("path", {
      fill: "var(--color-icon-tertiary)",
      d: "M16 7a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-3a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1z"
    })]
  });
});
let m = memo(function (e) {
  return jsxs("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: [jsx("path", {
      fill: "var(--color-icon)",
      d: "M16.204 6.01A2 2 0 0 1 18 8v8l-.01.204a2 2 0 0 1-1.786 1.785L16 18H8l-.204-.01a2 2 0 0 1-1.785-1.786L6 16V8a2 2 0 0 1 1.796-1.99L8 6h8zM8 7a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1z"
    }), jsx("path", {
      fill: "var(--color-icon-tertiary)",
      d: "M16 7a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-1v-7a1 1 0 0 0-1-1H7V8a1 1 0 0 1 1-1z"
    })]
  });
});
let h = memo(function (e) {
  return jsxs("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: [jsx("path", {
      fill: "var(--color-icon)",
      d: "M16.204 6.01A2 2 0 0 1 18 8v8l-.01.204a2 2 0 0 1-1.786 1.785L16 18H8l-.204-.01a2 2 0 0 1-1.785-1.786L6 16V8a2 2 0 0 1 1.796-1.99L8 6h8zM8 7a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1z"
    }), jsx("path", {
      fill: "var(--color-icon-tertiary)",
      d: "M16 7a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-1h7a1 1 0 0 0 1-1V7z"
    })]
  });
});
let g = memo(function (e) {
  return jsxs("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: [jsx("path", {
      fill: "var(--color-icon)",
      d: "M16.204 6.01A2 2 0 0 1 18 8v8l-.01.204a2 2 0 0 1-1.786 1.785L16 18H8l-.204-.01a2 2 0 0 1-1.785-1.786L6 16V8a2 2 0 0 1 1.796-1.99L8 6h8zM8 7a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1z"
    }), jsx("path", {
      fill: "var(--color-icon-tertiary)",
      d: "M16 4a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4zM8 6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2z"
    })]
  });
});
let _ = memo(function (e) {
  return jsxs("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: [jsx("path", {
      fill: "var(--color-icon)",
      d: "M16.204 6.01A2 2 0 0 1 18 8v8l-.01.204a2 2 0 0 1-1.786 1.785L16 18H8l-.204-.01a2 2 0 0 1-1.785-1.786L6 16V8a2 2 0 0 1 1.796-1.99L8 6h8zM8 7a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1z"
    }), jsx("path", {
      fill: "var(--color-icon-tertiary)",
      d: "M16 3a2 2 0 0 1 2 2v3a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2V5a2 2 0 0 1 2-2z"
    })]
  });
});
let A = memo(function (e) {
  return jsxs("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: [jsx("path", {
      fill: "var(--color-icon)",
      d: "M16.204 6.01A2 2 0 0 1 18 8v8l-.01.204a2 2 0 0 1-1.786 1.785L16 18H8l-.204-.01a2 2 0 0 1-1.785-1.786L6 16V8a2 2 0 0 1 1.796-1.99L8 6h8zM8 7a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1z"
    }), jsx("path", {
      fill: "var(--color-icon-tertiary)",
      d: "M19 6a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2z"
    })]
  });
});
let y = memo(function (e) {
  return jsxs("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: [jsx("path", {
      fill: "var(--color-icon)",
      d: "M16.204 6.01A2 2 0 0 1 18 8v8l-.01.204a2 2 0 0 1-1.786 1.785L16 18H8l-.204-.01a2 2 0 0 1-1.785-1.786L6 16V8a2 2 0 0 1 1.796-1.99L8 6h8zM8 7a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1z"
    }), jsx("path", {
      fill: "var(--color-icon-tertiary)",
      d: "M18.204 8.01A2 2 0 0 1 20 10v8a2 2 0 0 1-2 2h-8a2 2 0 0 1-1.99-1.796L8 18h8a2 2 0 0 0 2-2V8z"
    })]
  });
});
let b = memo(function (e) {
  return jsxs("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: [jsx("path", {
      fill: "var(--color-icon)",
      d: "M16.204 6.01A2 2 0 0 1 18 8v8l-.01.204a2 2 0 0 1-1.786 1.785L16 18H8l-.204-.01a2 2 0 0 1-1.785-1.786L6 16V8a2 2 0 0 1 1.796-1.99L8 6h8zM8 7a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1z"
    }), jsx("path", {
      fill: "var(--color-icon-tertiary)",
      d: "M18 4a2 2 0 0 1 2 2v8a2 2 0 0 1-1.796 1.99L18 16V8a2 2 0 0 0-2-2H8a2 2 0 0 1 2-2z"
    })]
  });
});
let v = memo(function (e) {
  return jsxs("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: [jsx("path", {
      fill: "var(--color-icon)",
      d: "M16.204 6.01A2 2 0 0 1 18 8v8l-.01.204a2 2 0 0 1-1.786 1.785L16 18H8l-.204-.01a2 2 0 0 1-1.785-1.786L6 16V8a2 2 0 0 1 1.796-1.99L8 6h8zM8 7a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1z"
    }), jsx("path", {
      fill: "var(--color-icon-tertiary)",
      d: "M8 6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"
    })]
  });
});
let I = memo(function (e) {
  return jsxs("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: [jsx("path", {
      fill: "var(--color-icon)",
      d: "M16.204 6.01A2 2 0 0 1 18 8v8l-.01.204a2 2 0 0 1-1.786 1.785L16 18H8l-.204-.01a2 2 0 0 1-1.785-1.786L6 16V8a2 2 0 0 1 1.796-1.99L8 6h8zM8 7a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1z"
    }), jsx("path", {
      fill: "var(--color-icon-tertiary)",
      d: "M6 8v8a2 2 0 0 0 2 2h8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8a2 2 0 0 1 1.796-1.99z"
    })]
  });
});
let E = memo(function (e) {
  return jsxs("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: [jsx("path", {
      fill: "var(--color-icon)",
      d: "M16.204 6.01A2 2 0 0 1 18 8v8l-.01.204a2 2 0 0 1-1.786 1.785L16 18H8l-.204-.01a2 2 0 0 1-1.785-1.786L6 16V8a2 2 0 0 1 1.796-1.99L8 6h8zM8 7a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1z"
    }), jsx("path", {
      fill: "var(--color-icon-tertiary)",
      d: "M14 4a2 2 0 0 1 2 2H8a2 2 0 0 0-2 2v8l-.204-.01A2 2 0 0 1 4 14V6a2 2 0 0 1 2-2z"
    })]
  });
});
var M = F;
let ee = "style_icon--circle--rAeX9 style_icon--fillContainer--YQawC";
let $$et5 = {
  INNER_SHADOW: {
    "00": jsx(s, {}),
    "01": jsx(o, {}),
    "0-1": jsx(i, {}),
    10: jsx(d, {}),
    11: jsx(c, {}),
    "1-1": jsx(u, {}),
    "-10": jsx(p, {}),
    "-11": jsx(m, {}),
    "-1-1": jsx(h, {})
  },
  DROP_SHADOW: {
    "00": jsx(g, {}),
    "01": jsx(_$$Z, {}),
    "0-1": jsx(_, {}),
    10: jsx(A, {}),
    11: jsx(y, {}),
    "1-1": jsx(b, {}),
    "-10": jsx(v, {}),
    "-11": jsx(I, {}),
    "-1-1": jsx(E, {})
  }
};
export function $$ei4(e) {
  return "inheritFillStyleKeyForStroke" === e;
}
export var $$en2 = (e => (e.Standard = "Standard", e.Large = "Large", e.Large_variables = "Large_variables", e.Large_DSA = "Large_DSA", e.Large_illustration = "Large_illustration", e))($$en2 || {});
export function $$er3(e, t) {
  if (e && t && "EFFECT" === e.type && e.effects?.length > 0 && e.effects.find(e => "GLASS" === e.type)) return getI18nString("properties_panel.effects.glass.style.non_frame_warning");
}
export function $$ea1({
  dsStyle: e,
  size: t = "Standard",
  displayAsDonut: i = !1,
  disableOutline: s = !1,
  disableTooltip: o = !1,
  hideNameInTooltip: l = !1,
  itemIndex: d = 0,
  anyNonFrameLikesSelected: c
}) {
  let u = useSelector(t => isStyleType(e.style_type) && (getStyleThumbnail(e) || e.node_id && t.library.local.thumbnails[e.node_id]?.css) || null);
  let p = $$er3(u, !!c);
  let m = useMemo(() => {
    if (u) {
      if ("FILL" === u.type) {
        let e = getFillColor(u);
        if (e) return jsx(eo, {
          color: e,
          disableOutline: s
        });
      } else if ("EFFECT" === u.type) {
        let e = u.effects?.[d] ?? u.effects?.[0];
        if (e) return jsx(el, {
          effect: e,
          disableOutline: s,
          warning: p
        });
      } else if ("GRID" === u.type) {
        let e = u.layoutGrids?.[d] ?? u.layoutGrids?.[0];
        if (e) return jsx(ed, {
          layoutGrid: e
        });
      }
    }
    return jsx(ec, {
      dsStyle: e,
      disableOutline: s
    });
  }, [e, s, d, u, p]);
  let h = "";
  switch (t) {
    case "Large":
      h = "style_icon--largeStyleIcon--Wwp0- style_icon--styleIcon--W-B5i";
      break;
    case "Large_variables":
      h = "style_icon--largeVariablesStyleIcon--V1H5v style_icon--styleIcon--W-B5i";
      break;
    case "Standard":
      h = "style_icon--standardStyleIcon--gtTbY style_icon--styleIcon--W-B5i";
      break;
    case "Large_DSA":
      h = "style_icon--largeDSAStyleIcon--ABw2F style_icon--styleIcon--W-B5i";
      break;
    case "Large_illustration":
      h = "style_icon--largeIllustrationIcon--G1rgk style_icon--styleIcon--W-B5i";
  }
  o || e.name || e.description || (o = !0);
  o || !l || e.description || (o = !0);
  return jsxs("div", {
    className: h,
    ...(u && p ? {
      "data-tooltip": p,
      "data-tooltip-type": Ib.TEXT
    } : o ? {} : {
      "data-tooltip-type": Ib.SPECIAL,
      "data-tooltip": _$$Z3,
      "data-tooltip-style-name": l ? void 0 : getBasename(e.name || ""),
      "data-tooltip-style-description": e.description
    }),
    role: "img",
    "aria-label": e.name,
    children: [m, i && jsx("div", {
      className: "style_icon--donutHole--zNQs-",
      children: jsx($$em0, {
        filled: !0,
        color: "white"
      })
    })]
  });
}
function es(e, t) {
  let i = function (e, t = "colorBg") {
    let i = yM();
    let n = DP();
    return pw(i, e, n, t);
  }(e ?? whiteColor, "colorBg");
  let n = DP();
  if (!e) return null;
  if (!t && i) {
    if (i === borderTranslucent) return "dark" === n ? "white" : "black";
    if (i === borderDark) return "black";
    if (i === borderLight) return "white";
  }
  return null;
}
function eo({
  color: e,
  disableOutline: t
}) {
  let i = es(e, t);
  return jsxs(Fragment, {
    children: [jsx($$em0, {
      filled: !0,
      color: _$$F.format(e)
    }), e.a < 1 && jsx(ep, {
      opacity: 1 - e.a
    }), i && jsx($$em0, {
      width: 1,
      opacity: .15,
      color: i
    })]
  });
}
function el({
  effect: e,
  disableOutline: t,
  warning: i
}) {
  return useMemo(() => {
    if (i && i.length) return jsx(_$$Z2, {
      "data-testid": "effect-style-svg"
    });
    switch (e.type) {
      case "FOREGROUND_BLUR":
        if ("PROGRESSIVE" === e.blurOpType) return jsx(_$$b, {
          "data-testid": "effect-style-svg"
        });
        return jsx(_$$V, {
          "data-testid": "effect-style-svg"
        });
      case "BACKGROUND_BLUR":
        return jsx(_$$q, {
          "data-testid": "effect-style-svg"
        });
      case "REPEAT":
      case "SYMMETRY":
      case "GRAIN":
      case "NOISE":
        return _$$M(e.type, e.repeatType);
      case "GLASS":
        return jsx(_$$s, {
          "data-testid": "effect-style-svg"
        });
      case "DROP_SHADOW":
      case "INNER_SHADOW":
        if (!e.offset) return null;
        let t = $$et5[e.type];
        let r = `${Math.sign(e.offset.x)}${Math.sign(e.offset.y)}`;
        return t?.[r] ?? null;
      case void 0:
        return null;
      default:
        logError("Unknown effect type", e.type);
        return jsx(_$$V, {
          "data-testid": "effect-style-svg"
        });
    }
  }, [e, i]) ?? jsx(eu, {
    styleType: "EFFECT",
    disableOutline: t
  });
}
function ed({
  layoutGrid: e
}) {
  return "STRIPES" === e.pattern ? "Y" === e.axis ? jsx(_$$Y, {
    "data-testid": "grid-style-icon"
  }) : jsx(_$$m, {
    "data-testid": "grid-style-icon"
  }) : jsx(_$$E, {
    "data-testid": "grid-style-icon"
  });
}
function ec({
  dsStyle: e,
  disableOutline: t
}) {
  let i = useSelector(t => {
    let i = e.node_id;
    return i && t.library.local.thumbnails[i]?.url;
  });
  let r = es(selectWithShallowEqual(t => {
    if (!e.node_id) return null;
    let i = t.mirror.sceneGraph.get(e.node_id);
    return blendGradientColors(i?.fills);
  }), t);
  let s = isValidThumbnail(i) && i || isValidThumbnail(e.thumbnail_url) && e.thumbnail_url || void 0;
  if (!s) return jsx(eu, {
    styleType: e.style_type,
    disableOutline: t
  });
  {
    let t = "FILL" === e.style_type;
    return jsxs(Fragment, {
      children: [jsx("img", {
        draggable: !1,
        src: s,
        className: t ? "style_icon--fillImageContainer--nxVWH" : "style_icon--imageContainer--wPpAX",
        alt: ""
      }), t && r && jsx($$em0, {
        width: 1,
        opacity: .15,
        color: r
      })]
    });
  }
}
function eu({
  styleType: e,
  disableOutline: t
}) {
  switch (e) {
    case "TEXT":
      return jsx(_$$e, {
        "data-testid": "text-style-fallback-icon"
      });
    case "EFFECT":
      return jsx(_$$n, {
        "data-testid": "effect-style-fallback-icon"
      });
    case "GRID":
      return jsx(_$$E, {
        "data-testid": "grid-style-fallback-icon"
      });
    default:
      return jsxs(Fragment, {
        children: [jsx("div", {
          className: "style_icon--questionMark--FO1Oo style_icon--fillContainer--YQawC",
          children: "?"
        }), !t && jsx($$em0, {
          width: 1,
          opacity: .3,
          color: "black"
        })]
      });
  }
}
function ep({
  opacity: e
}) {
  let t = useRef(String(performance.now()));
  return jsxs(Fragment, {
    children: [jsx("div", {
      className: M()("style_icon--checkerboardBackground--QougW", "style_icon--fillContainer--YQawC"),
      style: {
        opacity: e,
        clipPath: `url(#${t.current})`
      }
    }), jsx("svg", {
      width: "0",
      height: "0",
      children: jsx("defs", {
        children: jsx("clipPath", {
          id: t.current,
          clipPathUnits: "objectBoundingBox",
          children: jsx("path", {
            d: "M  0.146   0.146  A  0.5 0.5 225 0 1 0.854 0.854"
          })
        })
      })
    })]
  });
}
export function $$em0(e) {
  let t = Ep();
  return getFeatureFlags().ee_color_management_circle_p3 && t === ColorSpaceEnum.DISPLAY_P3 && e.filled ? jsx(ef, {
    ...e
  }) : jsx(e_, {
    ...e
  });
}
let eh = (e, t) => t === ColorSpaceEnum.SRGB ? e : _$$F.format(dy(e), t === ColorSpaceEnum.DISPLAY_P3 ? "display-p3" : void 0);
let eg = e => `calc(calc(100% / 16) * ${e})`;
function ef(e) {
  let t = Ep();
  let i = useMemo(() => p3(), []);
  return jsx("div", {
    className: ee,
    style: {
      borderRadius: eg(8),
      opacity: e.opacity,
      backgroundColor: i ? void 0 : eh(e.color, t),
      backgroundImage: i ? `url(${rl(dy(e.color), t)})` : void 0
    }
  });
}
function e_(e) {
  let t = e.filled ? 0 : e.width ?? 2;
  return jsx("svg", {
    "data-testid": "svg-circle",
    viewBox: "0 0 32 32",
    className: ee,
    children: jsx("circle", {
      cx: 16,
      cy: 16,
      r: 16 - t / 2,
      fill: e.filled ? e.color : "none",
      stroke: e.filled ? void 0 : e.color,
      fillOpacity: e.filled ? e.opacity : void 0,
      strokeOpacity: e.filled ? void 0 : e.opacity,
      strokeWidth: e.filled ? void 0 : t
    })
  });
}
export const jl = $$em0;
export const zi = $$ea1;
export const iL = $$en2;
export const xo = $$er3;
export const QN = $$ei4;
export const WT = $$et5;