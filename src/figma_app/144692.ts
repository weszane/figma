import { jsx, jsxs } from "react/jsx-runtime";
import i from "classnames";
import { b } from "../figma_app/556971";
var a = i;
let o = "file_load--tabBar--D43oo";
let l = "file_load--shimmer--0w-rr";
let d = "file_load--row--xVNmU";
let c = "file_load--section--OgkK4";
let u = "file_load--repoInfoPlaceholder--nSlHb file_load--shimmer--0w-rr";
function p() {
  return jsx("div", {
    className: `${l} file_load--text--6ZMqP`
  });
}
function _(e) {
  let t = 12 + .5 * e.index;
  return jsxs("div", {
    className: "file_load--style--r3WWP",
    style: {
      animationDelay: `${t}s`
    },
    children: [jsx("div", {
      className: `${l} file_load--circle--RmZhY`
    }), jsx(p, {})]
  });
}
function h(e) {
  let t = Math.floor(e.index / 5);
  let r = e.index % 5;
  return jsx("div", {
    className: "file_load--shimmerContainer--TJ3Mx",
    style: {
      animationDelay: `${3 + 2 * t + .05 * r}s`
    },
    children: jsx(p, {})
  });
}
export function $$m5() {
  return jsxs("div", {
    className: d,
    children: [jsx("div", {
      className: "file_load--ui3Avatar--g2Nf7 file_load--shimmer--0w-rr"
    }), jsxs("div", {
      className: c,
      children: [jsx("div", {
        className: "file_load--ui3Play--w1fUV file_load--shimmer--0w-rr"
      }), jsx("div", {
        className: "file_load--ui3Share--0VHdz file_load--shimmer--0w-rr"
      })]
    })]
  });
}
function g() {
  return jsxs("div", {
    className: o,
    children: [jsx($$m5, {}), jsxs("div", {
      className: d,
      children: [jsxs("div", {
        className: c,
        children: [jsx("div", {
          className: "file_load--tab1--2sCSk file_load--shimmer--0w-rr"
        }), jsx("div", {
          className: "file_load--tab2--Rv1im file_load--shimmer--0w-rr"
        })]
      }), jsx("div", {
        className: "file_load--zoom--Q0ucp file_load--shimmer--0w-rr"
      })]
    })]
  });
}
export function $$f2() {
  let e = [];
  for (let t = 0; t < 15; t++) e.push(jsx(_, {
    index: t
  }, t));
  let t = jsxs("div", {
    className: "file_load--styles--jq3r4",
    children: [jsx("div", {
      className: `${l} file_load--title--kxgMz`
    }), e]
  });
  return jsxs("div", {
    children: [jsx(g, {}), t]
  });
}
export function $$E6() {
  return jsx("div", {
    className: a()(d, "file_load--filenamePlaceholderContainer--PhGxu"),
    children: jsx("div", {
      className: "file_load--filenamePlaceholder--hxD4R file_load--shimmer--0w-rr"
    })
  });
}
export function $$y3() {
  return jsx("div", {
    className: d,
    children: jsx("div", {
      className: u
    })
  });
}
export function $$b1() {
  return jsx("div", {
    className: "file_load--leftRailIconPlaceholder--4njXU file_load--shimmer--0w-rr"
  });
}
export function $$T4() {
  return b() ? jsxs("div", {
    className: "file_load--leftRailHeaderPlaceholder--pNYPB",
    children: [jsxs("div", {
      className: "file_load--leftRailHeaderFileRowPlaceholder--RygF5",
      children: [jsx("div", {
        className: "file_load--leftRailFilenamePlaceholder--d6c-b file_load--shimmer--0w-rr"
      }), jsx("div", {
        className: "file_load--leftRailMinimizeUIPlaceholder--JkxwV file_load--shimmer--0w-rr"
      })]
    }), jsx("div", {
      className: "file_load--leftRailPublishButtonPlaceholder--5FglK file_load--shimmer--0w-rr"
    })]
  }) : jsxs("div", {
    children: [jsx($$E6, {}), jsx($$y3, {}), jsxs("div", {
      className: "file_load--publishRow--TLMrI",
      children: [jsx("div", {
        className: "file_load--publishButtonPlaceholder--o0weV file_load--shimmer--0w-rr"
      }), jsx("div", {
        className: "file_load--metadataButtonPlaceholder--gxM5B file_load--shimmer--0w-rr"
      })]
    })]
  });
}
export function $$I0() {
  let e = [];
  for (let t = 0; t < 24; t++) e.push(jsx(h, {
    index: t
  }, t));
  return jsxs("div", {
    children: [jsxs("div", {
      className: o,
      children: [jsxs("div", {
        className: d,
        children: [jsx("div", {
          className: "file_load--menuButtonPlaceholder---yKdw file_load--shimmer--0w-rr"
        }), jsx("div", {
          className: "file_load--hideSidebarButtonPlaceholder--DZ61q file_load--shimmer--0w-rr"
        })]
      }), jsx($$E6, {}), jsx("div", {
        className: d,
        children: jsx("div", {
          className: u
        })
      })]
    }), jsx("div", {
      className: "file_load--layers--llavb",
      children: e
    })]
  });
}
export const U1 = $$I0;
export const Oh = $$b1;
export const B7 = $$f2;
export const EG = $$y3;
export const VQ = $$T4;
export const YJ = $$m5;
export const cQ = $$E6;