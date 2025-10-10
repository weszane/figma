import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { ServiceCategories } from "../905/165054";
import { ButtonPrimitive } from "../905/632989";
import { o as _$$o } from "../905/530496";
import { useSetAtom } from "../figma_app/27355";
import { resourceUtils } from "../905/989992";
import { z } from "../905/239603";
import c from "classnames";
import { trackDefinedFileEventWithStore } from "../figma_app/901889";
import { useSubscription } from "../figma_app/288654";
import { ResourceStatus } from "../905/723791";
import { APILoadingStatus } from "../905/520829";
import { reportError } from "../905/11";
import { LoadingSpinner } from "../figma_app/858013";
import { lv } from "../figma_app/204891";
import { V } from "../figma_app/385855";
import { getI18nString } from "../905/303541";
import { selectCurrentFile } from "../figma_app/516028";
import { PageThumbnailsByFileKeyView } from "../figma_app/43951";
import { fileApiHandler } from "../figma_app/787550";
import { qp } from "../figma_app/932601";
if (443 == require.j) {}
if (443 == require.j) {}
var u = c;
export function $$E0({
  pageRowRef: e,
  pagesListRef: t,
  nodeId: r,
  nodeName: s,
  pageThumbnail: l,
  isLoading: d
}) {
  let c = selectCurrentFile();
  let _ = trackDefinedFileEventWithStore();
  let p = useSetAtom(qp);
  if (!c || !t.current || !e.current) return null;
  let g = t.current.getBoundingClientRect().left + t.current.getBoundingClientRect().width;
  let w = g - 16;
  let E = `calc(${g}px + var(--spacer-2, 0.5rem))`;
  let I = e.current.getBoundingClientRect().top;
  let N = e.current.getBoundingClientRect().height;
  return jsxs(Fragment, {
    children: [jsx("div", {
      style: {
        position: "fixed",
        zIndex: 10,
        left: w + "px",
        top: I + "px",
        height: N + "px",
        width: "32px"
      }
    }), jsxs("div", {
      "data-testid": "PageSummaryPreview",
      className: "page_summary_preview--previewContainer--kx2Uy",
      style: {
        left: E,
        top: I + N / 2
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
        }), jsx(ButtonPrimitive, {
          "aria-label": getI18nString("pages_panel.summary_preview.update_preview"),
          className: u()("page_summary_preview--refreshButton--XAvPe", {
            "page_summary_preview--alwaysShowRefreshButton--M3IDC": !l
          }),
          onClick: () => {
            c && !d && (_("figjam_pages_summary.preview_refreshed", {
              previewPageId: r
            }), p(APILoadingStatus.LOADING), fileApiHandler.updatePageCheckpointThumbnails({
              fileKey: c.key
            }).catch(() => {
              _("figjam_summary_preview.page_thumbnails_request_failed_increment_metric", {});
            }));
          },
          htmlAttributes: {
            "data-tooltip": getI18nString("pages_panel.summary_preview.update_preview"),
            "data-tooltip-type": "text",
            "data-testid": "RefreshPreviewButton"
          },
          children: d ? jsx(LoadingSpinner, {
            testId: "LoadingSpinner",
            size: "small",
            className: "page_summary_preview--loadingSpinner--FXocO"
          }) : jsx(_$$o, {})
        })]
      }), jsx("div", {
        className: "page_summary_preview--pageTitleContainer--Yk-qK text--fontPos13--xW8hS text--_fontBase--QdLsd",
        children: s
      })]
    })]
  });
}
let I = z.record(z.object({
  thumbnail_url: z.string(),
  thumbnail_meta: z.object({}).passthrough().transform(e => JSON.stringify(e)),
  created_at: z.string().optional()
}));
export function $$N1(e) {
  let t = selectCurrentFile();
  let r = useSubscription(PageThumbnailsByFileKeyView, {
    fileKey: t?.key ?? ""
  }, {
    enabled: !!(t?.key && e)
  });
  return resourceUtils.useTransform(r, e => {
    if (e?.file?.pagesSignedThumbnailData.status !== ResourceStatus.Loaded) return null;
    try {
      if (!e?.file?.pagesSignedThumbnailData.data) return null;
      let t = JSON.parse(e.file.pagesSignedThumbnailData.data);
      return I.parse(t);
    } catch (r) {
      reportError(ServiceCategories.FIGJAM, Error(`PageSummaryPreview: Failed to parse page thumbnail data. Error: ${r.message}.`), {
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
export const c0 = $$E0;
export const Jc = $$N1;