import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { ServiceCategories as _$$e } from "../905/165054";
import { E as _$$E } from "../905/632989";
import { o as _$$o } from "../905/530496";
import { Xr } from "../figma_app/27355";
import { resourceUtils } from "../905/989992";
import { z } from "../905/239603";
import c from "classnames";
import { hC } from "../figma_app/901889";
import { Rs } from "../figma_app/288654";
import { tT } from "../905/723791";
import { r as _$$r } from "../905/520829";
import { $D } from "../905/11";
import { kt } from "../figma_app/858013";
import { lv } from "../figma_app/204891";
import { V } from "../figma_app/385855";
import { t as _$$t } from "../905/303541";
import { q5 } from "../figma_app/516028";
import { SPC } from "../figma_app/43951";
import { S as _$$S } from "../figma_app/787550";
import { qp } from "../figma_app/932601";
var u = c;
export function $$w0({
  pageRowRef: e,
  pagesListRef: t,
  nodeId: i,
  nodeName: n,
  pageThumbnail: l,
  isLoading: d
}) {
  let c = q5();
  let h = hC();
  let m = Xr(qp);
  if (!c || !t.current || !e.current) return null;
  let g = t.current.getBoundingClientRect().left + t.current.getBoundingClientRect().width;
  let v = g - 16;
  let w = `calc(${g}px + var(--spacer-2, 0.5rem))`;
  let S = e.current.getBoundingClientRect().top;
  let j = e.current.getBoundingClientRect().height;
  return jsxs(Fragment, {
    children: [jsx("div", {
      style: {
        position: "fixed",
        zIndex: 10,
        left: v + "px",
        top: S + "px",
        height: j + "px",
        width: "32px"
      }
    }), jsxs("div", {
      "data-testid": "PageSummaryPreview",
      className: "page_summary_preview--previewContainer--kx2Uy",
      style: {
        left: w,
        top: S + j / 2
      },
      children: [jsxs("div", {
        className: "page_summary_preview--thumbnailContainer--a-jPQ",
        children: [jsx("div", {
          "data-testid": "FileThumbnail",
          children: jsx(V, {
            thumbnailType: lv(c.editorType, !1),
            thumbnailUrl: l?.thumbnail_url ?? null,
            clientMeta: l?.thumbnail_meta ?? c.clientMeta,
            noBorder: !0
          })
        }), jsx(_$$E, {
          "aria-label": _$$t("pages_panel.summary_preview.update_preview"),
          className: u()("page_summary_preview--refreshButton--XAvPe", {
            "page_summary_preview--alwaysShowRefreshButton--M3IDC": !l
          }),
          onClick: () => {
            c && !d && (h("figjam_pages_summary.preview_refreshed", {
              previewPageId: i
            }), m(_$$r.LOADING), _$$S.updatePageCheckpointThumbnails({
              fileKey: c.key
            }).catch(() => {
              h("figjam_summary_preview.page_thumbnails_request_failed_increment_metric", {});
            }));
          },
          htmlAttributes: {
            "data-tooltip": _$$t("pages_panel.summary_preview.update_preview"),
            "data-tooltip-type": "text",
            "data-testid": "RefreshPreviewButton"
          },
          children: d ? jsx(kt, {
            testId: "LoadingSpinner",
            size: "small",
            className: "page_summary_preview--loadingSpinner--FXocO"
          }) : jsx(_$$o, {})
        })]
      }), jsx("div", {
        className: "page_summary_preview--pageTitleContainer--Yk-qK text--fontPos13--xW8hS text--_fontBase--QdLsd",
        children: n
      })]
    })]
  });
}
let S = z.record(z.object({
  thumbnail_url: z.string(),
  thumbnail_meta: z.object({}).passthrough().transform(e => JSON.stringify(e)),
  created_at: z.string().optional()
}));
export function $$j1(e) {
  let t = q5();
  let i = Rs(SPC, {
    fileKey: t?.key ?? ""
  }, {
    enabled: !!(t?.key && e)
  });
  return resourceUtils.useTransform(i, e => {
    if (e?.file?.pagesSignedThumbnailData.status !== tT.Loaded) return null;
    try {
      if (!e?.file?.pagesSignedThumbnailData.data) return null;
      let t = JSON.parse(e.file.pagesSignedThumbnailData.data);
      return S.parse(t);
    } catch (i) {
      $D(_$$e.FIGJAM, Error(`PageSummaryPreview: Failed to parse page thumbnail data. Error: ${i.message}.`), {
        tags: {
          fileKey: t?.key
        },
        extra: {
          parsedPageThumbnails: e?.file?.pagesSignedThumbnailData.data
        }
      });
      return null;
    }
  });
}
export const c0 = $$w0;
export const Jc = $$j1;