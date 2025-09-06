import { jsxs, jsx } from "react/jsx-runtime";
import { useDispatch } from "../vendor/514228";
import { ServiceCategories as _$$e } from "../905/165054";
import { getIsMobile } from "../figma_app/778880";
import { reportError } from "../905/11";
import { q8 } from "../figma_app/459490";
import { s_ } from "../905/17223";
import { $$ } from "../figma_app/637027";
import { renderI18nText } from "../905/303541";
import { Ce, to } from "../905/156213";
import { Ju } from "../905/102752";
import { d_ } from "../figma_app/918700";
import { s as _$$s } from "../5430/913603";
import { zE } from "../905/738636";
import { Cu } from "../figma_app/314264";
import { B } from "../905/524020";
import { FFileType } from "../figma_app/191312";
import { f6, ai } from "../figma_app/915202";
import { fV, es } from "../figma_app/610446";
import w from "classnames";
import { c as _$$c } from "../905/320067";
import { tL } from "../af221b13/10766";
import { y as _$$y } from "../905/978641";
import { Ui, Nr, Sl } from "../af221b13/148820";
import { jx, tt, hh } from "../5430/774694";
let h = Ju(function (e) {
  return jsxs(d_, {
    title: jsx("div", {
      className: "feature_not_available_modal--title--kPAVe text--fontPos14--OL9Hp text--_fontBase--QdLsd",
      children: renderI18nText("community.collections.this_feature_isnt_available")
    }),
    className: "feature_not_available_modal--modalContainer--Etu7A",
    children: [jsx(s_, {
      dispatch: e.dispatch
    }), jsxs("div", {
      className: "feature_not_available_modal--modalBody--Dhwo0 text--fontPos14--OL9Hp text--_fontBase--QdLsd",
      children: [renderI18nText("community.collections.this_feature_isnt_available_body"), " ", jsx("a", {
        className: "feature_not_available_modal--learnMore--L4kDU modal--blueLink--9GcJu blue_link--blueLink--9rlnd",
        target: "_blank",
        href: "https://help.figma.com/hc/articles/17725942479127-Access-or-opt-out-of-AI-features",
        children: renderI18nText("community.collections.learn_more")
      })]
    }), jsx("div", {
      className: "feature_not_available_modal--buttonContainer--9-Zwv",
      children: jsx($$, {
        onClick: () => {
          e.dispatch(Ce());
        },
        children: renderI18nText("general.got_it")
      })
    })]
  });
}, " FeatureNotAvailableModal");
var E = w;
function T({
  title: e,
  description: t,
  imageUrl: i,
  onClick: a
}) {
  let s = getIsMobile();
  return jsx("div", {
    className: E()(Ui, "figjam_ai_card--cardContainer--kCDdk"),
    "data-testid": "collection-figjam-ai-card",
    children: jsxs("div", {
      className: E()(Nr, "figjam_ai_card--card--KTu46"),
      children: [s ? jsx("div", {
        className: "figjam_ai_card--mobileOverlay--EhOsZ",
        children: jsx("button", {
          className: "figjam_ai_card--invisibleButton--LuV4E",
          onClick: a
        })
      }) : jsxs("div", {
        className: "figjam_ai_card--overlayContainer--dDIiY",
        children: [jsx("div", {
          className: "figjam_ai_card--overlay--g6q4O"
        }), jsx("button", {
          className: E()("figjam_ai_card--ctaButton--wveh5", jx, tt, hh),
          onClick: a,
          children: renderI18nText("community.collections.generate")
        })]
      }), jsx(tL, {
        title: e,
        description: t
      }), jsx(_$$c, {
        srcSet: "",
        src: i,
        image_type: _$$y.COMMUNITY_HUB_FILE_THUMBNAIL,
        alt: e,
        className: E()(Sl, "figjam_ai_card--image--L-R2C"),
        imageProps: {
          onLoad: e => e.currentTarget.style.opacity = "1"
        }
      })]
    })
  });
}
export function $$I0({
  title: e,
  description: t,
  imageUrl: i,
  prompt: c,
  promptCategory: d
}) {
  let u = useDispatch();
  let g = B();
  let p = getIsMobile();
  let w = q8();
  let E = (e, t) => {
    u(zE({
      state: g,
      from: f6.COMMUNITY_COLLECTIONS_PAGE,
      editorType: FFileType.WHITEBOARD,
      team: void 0,
      openNewFileIn: ai.NEW_TAB,
      figjamAiNewFileData: {
        prompt: e,
        subtitle: e,
        useCaseCategory: t,
        entrypoint: fV.COMMUNITY
      }
    }));
  };
  return jsx(T, {
    onClick: () => {
      Cu({
        name: "community_collections_figjam_ai",
        prompt: c,
        title: e,
        description: t,
        promptCategory: d,
        isMobile: `${p}`
      });
      p ? u(to({
        type: _$$s,
        data: {
          dispatch: u
        }
      })) : w ? u(to({
        type: h,
        data: {
          dispatch: u
        }
      })) : Object.values(es).includes(d) ? E(c, d) : reportError(_$$e.COMMUNITY, Error(`Invalid use case category (${d}) for figjam ai card: ${e}`));
    },
    title: e,
    description: t,
    imageUrl: i
  });
}
export const i = $$I0;