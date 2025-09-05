import _require from "../5609/415609";
import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useRef, useState, useCallback, useEffect } from "react";
import { useSelector } from "../vendor/514228";
import { $n } from "../905/521428";
import { E as _$$E } from "../905/632989";
import { k as _$$k } from "../905/443820";
import { _L } from "../905/911410";
import { vo, Y9, hE, nB } from "../figma_app/272243";
import { Ez5 } from "../figma_app/763686";
import { l7 } from "../905/189185";
import { getSingletonSceneGraph } from "../905/700578";
import { Ay } from "@stylexjs/stylex";
import { buildUploadUrl } from "../figma_app/169182";
import { s_, H4 } from "../905/992467";
import { oW } from "../905/675859";
import { t as _$$t } from "../905/303541";
import { zR } from "../figma_app/817077";
import { Sh } from "../figma_app/889655";
import { Cd, $H } from "../048e062c/416936";
import { ZN } from "../048e062c/444406";
import v from "../b2835def/987714";
import { N } from "../048e062c/525184";
var S = v;
function w({
  fileInputRef: e,
  onChange: t
}) {
  return jsx("input", {
    type: "file",
    ref: e,
    onChange: t,
    accept: ".csv,.xlsx,.xls,.json",
    style: {
      display: "none"
    }
  });
}
let $$T1 = 170;
let $$N2 = 460;
export function $$I0({
  defaultPosition: e,
  nodeId: t,
  isOpen: s,
  onClose: f
}) {
  let v = useRef(null);
  let [I, A] = useState(null);
  let [P, L] = useState(null);
  let R = useSelector(Sh);
  let {
    importFile,
    isLoading
  } = function () {
    let [e, t] = useState(null);
    let [s, r] = useState(!1);
    let i = useCallback(e => new Promise((t, s) => {
      S().parse(e, {
        header: !0,
        dynamicTyping: !1,
        complete: async s => {
          t({
            csv: await e.text(),
            type: "csv"
          });
        },
        error: e => {
          console.error("Error parsing CSV file:", e);
          s(e);
        }
      });
    }), []);
    return {
      error: e,
      isLoading: s,
      importFile: useCallback(async e => {
        r(!0);
        t(null);
        try {
          let t = e.name.split(".").pop()?.toLowerCase();
          if ("csv" === t) return await i(e);
          throw Error(`Unsupported file type: ${t}`);
        } catch (e) {
          t({
            message: "Failed to import file",
            details: e instanceof Error ? e : Error(String(e))
          });
        } finally {
          r(!1);
        }
      }, [i])
    };
  }();
  let [F, B] = useState(null);
  let K = t || F;
  let G = Cd(K ?? "");
  useEffect(() => {
    s || (B(null), L(null), A(null));
  }, [s]);
  let H = () => {
    v.current?.click();
  };
  let V = (e, t, s, r) => {
    l7.user("chart-createChartOnSlide", () => {
      let n = e.createNode("JSX");
      n.resizeWithConstraints(800, 480);
      let i = t.size;
      let l = n.size;
      n.x = (i.x - l.x) / 2;
      n.y = (i.y - l.y) / 2;
      t.appendChild(n);
      $H(n.id, {
        ...ZN(s),
        chartType: r
      });
      B(n.guid);
    });
  };
  let U = (e, t) => {
    if (t) {
      let s = e.get(t);
      if (s && "SLIDE" === s.type) return s;
    }
    let s = Ez5?.canvasGrid();
    if (s) {
      let t = zR();
      let r = s.getClosestGridCoord(t, null);
      let n = s.canvasGridArray.getCopy();
      let i = n[r.row]?.[r.col];
      if (i) return e.get(i);
    }
    return null;
  };
  let z = async e => {
    let t = e.target.files?.[0];
    if (!t) return;
    L(t.name);
    let {
      csv
    } = (await importFile(t)) || {};
    if (csv) {
      if (K) {
        if (getSingletonSceneGraph().get(K)) {
          let e = G?.chartType || I;
          e && l7.user("chart-updateExistingChart", () => {
            $H(K, {
              ...ZN(csv),
              chartType: e
            });
          });
        }
      } else {
        let e = getSingletonSceneGraph();
        let t = U(e, R[0]);
        t && I && V(e, t, csv, I);
      }
    }
  };
  let W = [{
    type: N.BAR_GROUPED,
    icon: "e3bae6898ed50d51dc6ca312b486d7d4eb64883f",
    title: _$$t("slides.charts.bar")
  }];
  let $ = jsx("div", {
    className: "x78zum5 x1jnr06f",
    children: K ? jsx($n, {
      variant: "secondary",
      onClick: H,
      children: _$$t("slides.charts.reupload_file")
    }) : I ? jsxs(Fragment, {
      children: [jsx($n, {
        variant: "secondary",
        onClick: () => {
          if (!I) return;
          let e = getSingletonSceneGraph();
          let t = U(e, R[0]);
          t && V(e, t, "City,2011-10-01,2011-10-02,2011-10-03,2011-10-04,2011-10-05,2011-10-06,2011-10-07,2011-10-08,2011-10-09,2011-10-10,2011-10-11,2011-10-12\nNew York,63.4,58.0,53.3,55.7,64.2,58.8,57.9,61.8,69.3,71.2,68.7,61.8\nSan Francisco,53.4,48.0,43.3,45.7,54.2,48.8,47.9,51.8,59.3,61.2,58.7,51.8", I);
        },
        children: _$$t("slides.charts.start_from_scratch")
      }), jsx($n, {
        variant: "primary",
        onClick: H,
        children: _$$t("slides.charts.upload_csv")
      })]
    }) : null
  });
  return s ? jsx(_L, {
    onClose: f,
    defaultPosition: e,
    defaultWidth: $$N2,
    defaultHeight: $$T1,
    children: jsxs(vo, {
      children: [jsx(Y9, {
        children: jsxs("div", {
          className: "x78zum5 x1qughib x6s0dn4 xh8yej3 xmzs88n",
          children: [jsx(hE, {
            children: P || _$$t("slides.charts.charts")
          }), $]
        })
      }), jsx(nB, {
        children: K ? jsx(function () {
          return K ? jsxs("div", {
            className: "x78zum5",
            children: [jsx(M, {
              jsxProps: G,
              nodeId: K,
              fallback: null
            }), jsx(w, {
              fileInputRef: v,
              onChange: z
            })]
          }) : null;
        }, {}) : isLoading ? jsx(function () {
          return jsxs("div", {
            className: "x78zum5 xl56j7k x6s0dn4 x5yr21d x167g77z",
            children: [jsx(_$$k, {}), jsx("div", {
              className: "x1n0bwc9",
              children: _$$t("slides.charts.import_data_modal.loading")
            })]
          });
        }, {}) : jsx(function () {
          return jsxs("div", {
            className: "x78zum5",
            children: [W.map(e => jsxs("div", {
              children: [jsx(_$$E, {
                className: "x78zum5 xdt5ytf x167g77z",
                onClick: () => A(e.type),
                children: jsx(oW, {
                  src: buildUploadUrl(e.icon),
                  alt: e.title,
                  className: Ay.props(E.image, I === e.type && E.selectedImage).className
                })
              }), jsx("div", {
                children: e.title
              })]
            }, e.type)), jsx(w, {
              fileInputRef: v,
              onChange: z
            })]
          });
        }, {})
      })]
    })
  }) : null;
}
let E = {
  image: {
    border: "xfj9a5l",
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
    borderRadius: "xur7f20",
    borderStartStartRadius: null,
    borderStartEndRadius: null,
    borderEndStartRadius: null,
    borderEndEndRadius: null,
    borderTopLeftRadius: null,
    borderTopRightRadius: null,
    borderBottomLeftRadius: null,
    borderBottomRightRadius: null,
    cursor: "x1ypdohk",
    $$css: !0
  },
  selectedImage: {
    borderColor: "x1fa9rx7",
    borderInlineColor: null,
    borderInlineStartColor: null,
    borderLeftColor: null,
    borderInlineEndColor: null,
    borderRightColor: null,
    borderBlockColor: null,
    borderTopColor: null,
    borderBottomColor: null,
    $$css: !0
  }
};
let M = s_("LazyTable", () => Promise.all([]).then(_require).then(e => e.DataTable), {
  componentName: "LazyTable",
  error: H4.NONE
});
export const nh = $$I0;
export const oH = $$T1;
export const tA = $$N2;