import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { noop } from 'lodash-es';
import { cssBuilderInstance } from "../cssbuilder/589278";
import { fG } from "../figma_app/973927";
import { Cn } from "../905/862913";
import { S as _$$S } from "../3276/591174";
import { B } from "../3276/578394";
import { Ve } from "../figma_app/198840";
import { n as _$$n } from "../905/79930";
import { sU, WM, Wh, dY } from "../905/838765";
import { i as _$$i } from "../figma_app/566312";
import { b as _$$b } from "../905/635568";
import { mS } from "../figma_app/80782";
import { jq } from "../figma_app/446435";
import { Ho } from "../figma_app/878651";
import { J } from "../469e6e40/430781";
import { n_ } from "../1291/472727";
export function $$y1(e) {
  let {
    imageUrl,
    clientMeta,
    thumbnailIsSet,
    isWhiteboard,
    name,
    hubFileId,
    publishers,
    resizedThumbnailUrls
  } = fG()(e.template);
  let N = _$$b();
  let {
    dragState,
    onInsertableResourcePointerDown
  } = B({
    resource: e.template,
    clickToInsert_DEPRECATED: !0,
    afterSuccessfulInsert: N,
    triggeredFrom: e.triggeredFrom
  });
  let $ = jq(e.template);
  return jsxs(Fragment, {
    children: [jsx(sU, {
      image: jsx("div", {
        onPointerDown: onInsertableResourcePointerDown,
        className: dragState ? J : void 0,
        children: jsxs(WM, {
          backgroundColor: Cn(clientMeta),
          children: [jsx(Wh.Cover, {
            children: jsx("div", {
              className: n_
            })
          }), jsx(Wh.Center, {
            children: jsx(_$$i, {
              insertTemplate: noop,
              isInsertingTemplate: e.isInsertingTemplate,
              shouldUseOpaqueBackground: !0,
              children: Ve(e.templateInsertionLocation)
            })
          }), jsx(Ho, {
            image: imageUrl,
            isSet: thumbnailIsSet,
            isWhiteboard,
            hubFileId,
            alt: name,
            resizedThumbnailUrls
          })]
        })
      }),
      bottomRow: jsx(dY.FigJamMetadata, {
        name,
        onClick: e.onClickTitle,
        publishers,
        showUserAvatar: e.template.type === _$$n.TeamTemplate
      }),
      onContextMenu: $
    }), jsx(_$$S, {
      dragState
    }), jsx(mS, {
      template: e.template
    })]
  });
}
export function $$j0() {
  return jsx(sU, {
    className: cssBuilderInstance.invisible.$,
    image: jsx("div", {
      children: jsx(WM, {
        children: jsx(Ho, {
          image: void 0,
          isSet: !1,
          isWhiteboard: !0,
          hubFileId: void 0,
          alt: ""
        })
      })
    }),
    bottomRow: jsx(dY.FigJamMetadata, {
      name: "\xa0",
      onClick: noop,
      publishers: []
    })
  });
}
$$y1.displayName = "TemplatesHubFileTile";
$$j0.displayName = "BrowseTemplatesFileTilePlaceholder";
export const N = $$j0;
export const S = $$y1;
