import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useDispatch, useSelector } from "react-redux";
import { throwTypeError } from "../figma_app/465776";
import { range } from "../figma_app/492908";
import { lQ } from "../905/934246";
import { k as _$$k } from "../905/443820";
import { N as _$$N } from "../905/438674";
import c from "classnames";
import { Y1 } from "../905/143116";
import { customHistory } from "../905/612521";
import { useSubscription } from "../figma_app/288654";
import { ms, c$ } from "../figma_app/236327";
import { s as _$$s } from "../cssbuilder/589278";
import { renderI18nText, getI18nString } from "../905/303541";
import { S as _$$S } from "../figma_app/11182";
import { oB } from "../905/929976";
import { Cu } from "../figma_app/314264";
import { fG } from "../figma_app/973927";
import { Cn } from "../905/862913";
import { Um } from "../905/848862";
import { Ve } from "../figma_app/198840";
import { FileCanView } from "../figma_app/43951";
import { n as _$$n } from "../905/79930";
import { zq, FK, zx, Wf } from "../figma_app/961422";
import { Td } from "../905/595131";
import { i as _$$i } from "../figma_app/566312";
import { Ho } from "../figma_app/878651";
import { hx, jq } from "../figma_app/446435";
import { sk, n_, Mm, EQ, Y } from "../figma_app/589564";
var u = c;
export function $$P5(e) {
  return jsx("div", {
    className: sk,
    children: e.children
  });
}
export function $$D6({
  template: e
}) {
  let t = Um();
  let {
    primaryKey
  } = fG()(e);
  return t?.type === hx && t?.data?.templatePrimaryKey === primaryKey && t.data?.position ? jsx(k, {
    template: e,
    position: t.data.position
  }) : null;
}
function k({
  template: e,
  position: t
}) {
  let r = useDispatch();
  let {
    viewSourceFileUrl,
    duplicateLink,
    primaryKey
  } = fG()(e);
  let d = e.type === _$$n.TeamTemplate;
  let c = useSubscription(FileCanView, {
    key: primaryKey
  }, {
    enabled: d
  });
  return jsxs(ms, {
    style: {
      ...t,
      position: "fixed"
    },
    children: [jsx(c$, {
      onClick: () => {
        r(oB());
        r(_$$S({
          url: duplicateLink
        }));
      },
      children: renderI18nText("browse_templates_modal.context_menu.copy_link")
    }), viewSourceFileUrl && d && jsx(c$, {
      onClick: () => {
        r(oB());
        customHistory.redirect(viewSourceFileUrl, "_blank");
      },
      disabled: "loading" === c.status || "disabled" === c.status || !c.data?.file?.hasPermission,
      children: jsxs(Y1, {
        width: "fill-parent",
        horizontalAlignItems: "space-between",
        verticalAlignItems: "center",
        spacing: 8,
        children: [jsx("span", {
          children: renderI18nText("browse_templates_modal.context_menu.view_original_file")
        }), jsx("span", {
          className: _$$s.$$if("loading" !== c.status, _$$s.invisible).$,
          children: jsx(_$$k, {})
        })]
      })
    })]
  });
}
export function $$M0(e) {
  let {
    clientMeta,
    imageUrl,
    thumbnailIsSet,
    isWhiteboard,
    name,
    publishers,
    hubFileId,
    resizedThumbnailUrls
  } = fG()(e.template);
  let u = jq(e.template);
  let p = Td();
  return jsxs(Fragment, {
    children: [jsx(zq, {
      onContextMenu: u,
      image: jsxs(FK, {
        backgroundColor: Cn(clientMeta),
        children: [jsx(zx.Cover, {
          children: jsx("button", {
            className: n_,
            onClick: e.onInsert,
            disabled: e.isInsertingTemplate || p
          })
        }), jsx(zx.Center, {
          children: jsx(_$$i, {
            insertTemplate: e.onInsert,
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
      }),
      bottomRow: jsx(Wf.FullMetadata, {
        name,
        publishers,
        hoverText: e.onPreview ? getI18nString("browse_templates_modal.view_details") : void 0,
        onClick: e.onPreview || lQ
      })
    }), jsx($$D6, {
      template: e.template
    })]
  });
}
export function $$F4(e) {
  let t = useSelector(t => t.hubFiles[e.hubFileId]);
  return jsx($$M0, {
    template: {
      template: t,
      type: _$$n.HubFile
    },
    onInsert: () => e.onInsert({
      template: t,
      type: _$$n.HubFile
    }),
    isInsertingTemplate: e.isInsertingTemplate,
    onPreview: e.previewHubFile,
    templateInsertionLocation: e.templateInsertionLocation
  });
}
export function $$j7({
  url: e,
  fileKey: t
}) {
  return jsx(_$$N.Button, {
    href: e,
    newTab: !0,
    onClick: () => {
      Cu({
        fileKey: t,
        uiSelectedView: "see_more_button",
        name: "Templates Modal Browse More"
      }, "cta_clicked");
    },
    variant: "secondary",
    children: renderI18nText("browse_templates_modal_content.see_more_in_community")
  });
}
function U() {
  return jsx("div", {
    className: _$$s.flex.itemsCenter.h40.my8.wFull.$,
    children: jsx(B, {})
  });
}
function B() {
  return jsx("div", {
    className: u()(_$$s.w100.h16.bRadius3.$, Mm)
  });
}
function G({
  lightness: e = "normal"
}) {
  let t = function (e) {
    switch (e) {
      case "normal":
        return Mm;
      case "light":
        return EQ;
      case "lightest":
        return Y;
      default:
        throwTypeError(e);
    }
  }(e);
  return jsx(zq, {
    image: jsx(FK, {
      removeBorder: !0,
      children: jsx("div", {
        className: u()(t, _$$s.wFull.hFull.$)
      })
    }),
    bottomRow: jsx("div", {
      className: u()(t, _$$s.h16.w100.bRadius3.$)
    })
  });
}
function V({
  shouldFade: e
}) {
  return jsx(Fragment, {
    children: range(3).map(t => {
      let r = "normal";
      e && (r = 2 === t ? "lightest" : 1 === t ? "light" : "normal");
      return jsx(G, {
        lightness: r
      }, t);
    })
  });
}
export function $$H3() {
  return jsxs("div", {
    className: _$$s.px24.$,
    children: [jsx(U, {}), jsxs($$P5, {
      children: [jsx(V, {}), jsx(V, {}), jsx(V, {
        shouldFade: !0
      })]
    })]
  });
}
export function $$z2({
  shouldFade: e
}) {
  return jsxs("div", {
    className: _$$s.pb20.$,
    children: [jsx("div", {
      className: _$$s.h24.mb16.$,
      children: jsx(B, {})
    }), jsx($$P5, {
      children: jsx(V, {
        shouldFade: e
      })
    })]
  });
}
export function $$W1() {
  return jsx(Y1, {
    width: "fill-parent",
    height: "fill-parent",
    verticalAlignItems: "center",
    horizontalAlignItems: "center",
    children: jsx(_$$k, {
      size: "lg"
    })
  });
}
export const AF = $$M0;
export const Cm = $$W1;
export const G3 = $$z2;
export const Kt = $$H3;
export const Pr = $$F4;
export const iq = $$P5;
export const mS = $$D6;
export const tJ = $$j7;