import _require from "../0c62c2fd/632200";
import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { p as _$$p } from "../905/636263";
import { e as _$$e } from "../905/295932";
import { a as _$$a } from "../905/676930";
import { dayjs } from "../905/920142";
import { customHistory } from "../905/612521";
import { useSubscription } from "../figma_app/288654";
import { getResourceDataOrFallback } from "../905/723791";
import { ModalUpperRightCorner } from "../905/17223";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { renderI18nText, getI18nString } from "../905/303541";
import { AutoLayout, Spacer } from "../905/470281";
import { TrackedButton } from "../905/599896";
import { I as _$$I } from "../905/343721";
import { FileBrowser } from "../905/658244";
import { createModalConfig, registerLegacyModal, registerModal } from "../905/102752";
import { hideModal, showModalHandler } from "../905/156213";
import { useStarterGlobalFileLimitsExperiment } from "../figma_app/297957";
import { TrackedAnchor, TrackingProvider } from "../figma_app/831799";
import { ChurnFrictionPersonalizedModalView } from "../figma_app/43951";
import { STANDARD_LIMIT, PRIMARY_LIMIT } from "../figma_app/345997";
import { TrackingKeyEnum } from "../905/696396";
import { W as _$$W } from "../905/244810";
import { ModalContainer } from "../figma_app/918700";
import { isFigmakeSitesEnabled } from "../figma_app/552876";
import { isSitesFeatureEnabled } from "../905/561485";
import { I as _$$I2 } from "../905/597430";
import { L as _$$L } from "../905/479295";
let $$v = "team-admin-confirm-downgrade";
let I = FileBrowser.createLazyComponent(() => Promise.all([]).then(_require).then(e => e.ConfirmDowngradeModal), createModalConfig("ConfirmDowngradeModal"));
registerLegacyModal($$v, I);
let L = {
  title: renderI18nText("churn_friction.modal.team_libraries"),
  url: "https://help.figma.com/hc/articles/360041051154-Guide-to-libraries-in-Figma",
  graphic: jsx(_$$L, {})
};
let F = {
  title: renderI18nText("churn_friction.modal.audio_conversations"),
  url: "https://help.figma.com/hc/articles/1500004414622-Use-audio-to-chat-with-your-team",
  graphic: jsx(function () {
    return jsxs("svg", {
      width: "112",
      height: "84",
      viewBox: "0 0 112 84",
      fill: "none",
      children: [jsx("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M24.4848 42.5397C24.4848 42.4363 24.3835 42.3633 24.2854 42.396L23.3763 42.699C23.3144 42.7197 23.2727 42.7776 23.2727 42.8428V43.7273V44.0303V44.6118C23.2727 44.677 23.3144 44.7349 23.3763 44.7555L24.2854 45.0586C24.3835 45.0913 24.4848 45.0182 24.4848 44.9148V42.5397ZM22.6666 44.0303V44.6118C22.6666 44.9379 22.8753 45.2274 23.1846 45.3305L24.0937 45.6335C24.5843 45.797 25.0909 45.4319 25.0909 44.9148V42.5397C25.0909 42.0227 24.5843 41.6575 24.0937 41.821L23.2727 42.0947V41.9091C23.2727 39.9008 24.9007 38.2727 26.9091 38.2727C28.9174 38.2727 30.5454 39.9008 30.5454 41.9091V42.0947L29.7244 41.821C29.2338 41.6575 28.7273 42.0227 28.7273 42.5397V44.9148C28.7273 45.4319 29.2338 45.797 29.7244 45.6335L30.6335 45.3305C30.9428 45.2274 31.1515 44.9379 31.1515 44.6118V42.8428C31.1515 42.841 31.1515 42.8393 31.1515 42.8375V41.9091C31.1515 39.5661 29.2521 37.6667 26.9091 37.6667C24.566 37.6667 22.6666 39.5661 22.6666 41.9091V42.8428V43.7273V44.0303ZM30.5454 44.0303V44.6118C30.5454 44.677 30.5037 44.7349 30.4418 44.7555L29.5327 45.0585C29.4346 45.0913 29.3333 45.0182 29.3333 44.9148V42.5397C29.3333 42.4363 29.4346 42.3633 29.5327 42.396L30.4418 42.699C30.503 42.7194 30.5444 42.7762 30.5454 42.8405V43.7273V44.0303H30.5454Z",
        fill: "#2C2C2C"
      }), jsx("circle", {
        cx: "46.6061",
        cy: "42.2121",
        r: "7.27273",
        fill: "#00B5CE"
      }), jsx("path", {
        d: "M45.2143 44.3636H44.4378L46.1826 39.5152H47.0277L48.7725 44.3636H47.996L46.6253 40.3958H46.5874L45.2143 44.3636ZM45.3445 42.465H47.8634V43.0805H45.3445V42.465Z",
        fill: "white"
      }), jsx("circle", {
        cx: "66",
        cy: "42.2121",
        r: "7.27273",
        fill: "#FFC700"
      }), jsx("path", {
        d: "M66.5779 39.5152H67.3071V42.9527C67.3071 43.2636 67.2455 43.5295 67.1224 43.7505C67.0009 43.9714 66.8296 44.1403 66.6087 44.2571C66.3877 44.3723 66.1289 44.4299 65.8322 44.4299C65.5591 44.4299 65.3137 44.3802 65.0959 44.2808C64.8797 44.1813 64.7084 44.0369 64.5822 43.8475C64.4575 43.6566 64.3951 43.4246 64.3951 43.1515H65.1219C65.1219 43.2857 65.1527 43.4017 65.2143 43.4995C65.2774 43.5974 65.3634 43.6739 65.4723 43.7292C65.5828 43.7828 65.7091 43.8097 65.8511 43.8097C66.0058 43.8097 66.1368 43.7773 66.2441 43.7126C66.353 43.6463 66.4359 43.5492 66.4927 43.4214C66.5495 43.2936 66.5779 43.1373 66.5779 42.9527V39.5152Z",
        fill: "white"
      }), jsx("circle", {
        cx: "85.3939",
        cy: "42.2121",
        r: "7.27273",
        fill: "#1BC47D"
      }), jsx("path", {
        d: "M85.0906 44.3636H83.5209V39.5152H85.1403C85.6153 39.5152 86.0233 39.6122 86.3642 39.8063C86.7051 39.9989 86.9663 40.2759 87.1478 40.6373C87.3309 40.9972 87.4225 41.4288 87.4225 41.9323C87.4225 42.4373 87.3301 42.8714 87.1455 43.2344C86.9624 43.5974 86.6972 43.8767 86.35 44.0724C86.0028 44.2666 85.583 44.3636 85.0906 44.3636ZM84.2525 43.7244H85.0503C85.4196 43.7244 85.7266 43.655 85.9712 43.5161C86.2159 43.3756 86.3989 43.1728 86.5205 42.9077C86.642 42.6409 86.7028 42.3158 86.7028 41.9323C86.7028 41.5519 86.642 41.2292 86.5205 40.964C86.4005 40.6989 86.2214 40.4976 85.9831 40.3603C85.7447 40.223 85.4488 40.1544 85.0953 40.1544H84.2525V43.7244Z",
        fill: "white"
      }), jsx("rect", {
        x: "16.1739",
        y: "31.1739",
        width: "79.6522",
        height: "21.4704",
        rx: "10.7352",
        stroke: "#383838",
        strokeWidth: "0.347826"
      })]
    });
  }, {})
};
let M = {
  title: renderI18nText("churn_friction.modal.advanced_prototyping"),
  url: "https://help.figma.com/hc/sections/15485559585687-Advanced-prototyping",
  graphic: jsx(function () {
    return jsxs("svg", {
      width: "112",
      height: "84",
      viewBox: "0 0 112 84",
      fill: "none",
      children: [jsx("rect", {
        x: "12.2588",
        y: "22.8287",
        width: "6.40955",
        height: "6.40955",
        fill: "#80CAFF",
        stroke: "#80CAFF",
        strokeWidth: "0.517582"
      }), jsx("path", {
        d: "M68.1577 46.5696H63.4006C60.8279 46.5696 58.7424 44.4841 58.7424 41.9114V41.9114C58.7424 39.3387 56.6568 37.2531 54.0841 37.2531H49.5247",
        stroke: "#80CAFF",
        strokeWidth: "0.517582"
      }), jsx("path", {
        d: "M44.9575 37.7535L39.4959 47.2378L28.5726 47.2378L23.111 37.7535L28.5726 28.2693L39.4959 28.2693L44.9575 37.7535Z",
        fill: "#FFC700",
        stroke: "black",
        strokeWidth: "0.517582"
      }), jsx("rect", {
        width: "30.6278",
        height: "30.6278",
        transform: "matrix(-1 0 0 1 49.5228 22.2544)",
        stroke: "#80CAFF",
        strokeWidth: "0.628572"
      }), jsx("rect", {
        x: "0.314286",
        y: "-0.314286",
        width: "3.4784",
        height: "3.4784",
        transform: "matrix(-1 0 0 1 51.5666 20.8381)",
        fill: "white",
        stroke: "#80CAFF",
        strokeWidth: "0.628572",
        strokeLinecap: "square"
      }), jsx("rect", {
        x: "0.314286",
        y: "-0.314286",
        width: "3.4784",
        height: "3.4784",
        transform: "matrix(-1 0 0 1 51.5666 51.3229)",
        fill: "white",
        stroke: "#80CAFF",
        strokeWidth: "0.628572",
        strokeLinecap: "square"
      }), jsx("rect", {
        x: "0.314286",
        y: "-0.314286",
        width: "3.4784",
        height: "3.4784",
        transform: "matrix(-1 0 0 1 20.9402 51.3229)",
        fill: "white",
        stroke: "#80CAFF",
        strokeWidth: "0.628572",
        strokeLinecap: "square"
      }), jsx("rect", {
        x: "0.314286",
        y: "-0.314286",
        width: "3.4784",
        height: "3.4784",
        transform: "matrix(-1 0 0 1 20.9402 20.8381)",
        fill: "white",
        stroke: "#80CAFF",
        strokeWidth: "0.628572",
        strokeLinecap: "square"
      }), jsx("path", {
        d: "M51.2097 37.5128C51.2097 38.4854 50.4213 39.2738 49.4488 39.2738C48.4762 39.2738 47.6878 38.4854 47.6878 37.5128C47.6878 36.5403 48.4762 35.7519 49.4488 35.7519C50.4213 35.7519 51.2097 36.5403 51.2097 37.5128Z",
        fill: "white",
        stroke: "#80CAFF",
        strokeWidth: "0.628572"
      }), jsx("rect", {
        width: "30.6278",
        height: "30.6278",
        transform: "matrix(-1 0 0 1 98.4727 31.4131)",
        stroke: "#80CAFF",
        strokeWidth: "0.628572"
      }), jsx("rect", {
        x: "0.314286",
        y: "-0.314286",
        width: "3.4784",
        height: "3.4784",
        transform: "matrix(-1 0 0 1 100.516 29.9979)",
        fill: "white",
        stroke: "#80CAFF",
        strokeWidth: "0.628572",
        strokeLinecap: "square"
      }), jsx("rect", {
        x: "0.314286",
        y: "-0.314286",
        width: "3.4784",
        height: "3.4784",
        transform: "matrix(-1 0 0 1 100.516 60.4827)",
        fill: "white",
        stroke: "#80CAFF",
        strokeWidth: "0.628572",
        strokeLinecap: "square"
      }), jsx("rect", {
        x: "0.314286",
        y: "-0.314286",
        width: "3.4784",
        height: "3.4784",
        transform: "matrix(-1 0 0 1 69.89 60.4827)",
        fill: "white",
        stroke: "#80CAFF",
        strokeWidth: "0.628572",
        strokeLinecap: "square"
      }), jsx("rect", {
        x: "0.314286",
        y: "-0.314286",
        width: "3.4784",
        height: "3.4784",
        transform: "matrix(-1 0 0 1 69.89 29.9979)",
        fill: "white",
        stroke: "#80CAFF",
        strokeWidth: "0.628572",
        strokeLinecap: "square"
      }), jsx("path", {
        d: "M84.8424 62.1273C84.8424 63.0998 84.054 63.8883 83.0815 63.8883C82.1089 63.8883 81.3205 63.0998 81.3205 62.1273C81.3205 61.1547 82.1089 60.3663 83.0815 60.3663C84.054 60.3663 84.8424 61.1547 84.8424 62.1273Z",
        fill: "white",
        stroke: "#80CAFF",
        strokeWidth: "0.628572"
      }), jsx("path", {
        d: "M77.0616 59.0063C74.5081 56.4757 73.0638 53.0316 73.0463 49.4317C73.0288 45.8318 74.4397 42.3709 76.9684 39.8105C79.4972 37.2501 82.9368 35.7998 86.5305 35.7787C90.1242 35.7576 93.5776 37.1674 96.1311 39.698L89.3369 46.5773C88.6029 45.85 87.6103 45.4448 86.5774 45.4508C85.5445 45.4569 84.5559 45.8737 83.8291 46.6097C83.1022 47.3456 82.6967 48.3403 82.7018 49.375C82.7068 50.4097 83.1219 51.3996 83.8558 52.127L77.0616 59.0063Z",
        fill: "#FF8577",
        stroke: "#2C2C2C",
        strokeWidth: "0.517582"
      }), jsx("path", {
        d: "M16.4666 26.2529L16.8178 26.0334L16.4666 25.814L14.7348 24.7316L14.3389 24.4841L14.3389 24.9511L14.3389 27.1158L14.3389 27.5827L14.7348 27.3353L16.4666 26.2529Z",
        stroke: "white",
        strokeWidth: "0.517582"
      })]
    });
  }, {})
};
let j = {
  title: renderI18nText("churn_friction.modal.private_projects_and_prototypes"),
  url: "https://help.figma.com/hc/articles/360038006494-Create-a-new-project",
  graphic: jsx(_$$I2, {})
};
let U = {
  title: renderI18nText("churn_friction.modal.published_content"),
  url: isSitesFeatureEnabled() ? "https://help.figma.com/hc/articles/31242845959703-Publish-a-site" : "https://help.figma.com/hc/articles/31304586129559",
  graphic: jsx(function () {
    return jsxs("svg", {
      width: "112",
      height: "84",
      viewBox: "0 0 112 84",
      fill: "none",
      children: [jsx("path", {
        d: "M21 16.02H91C92.1046 16.02 93 16.9154 93 18.02V65.98C93 67.0846 92.1046 67.98 91 67.98H21C19.8954 67.98 19 67.0846 19 65.98V18.02C19 16.9154 19.8954 16.02 21 16.02Z",
        stroke: "var(--border-border-menu, #383838)",
        strokeWidth: "0.5",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }), jsx("rect", {
        x: "25.5",
        y: "20.02",
        width: "61",
        height: "6.68",
        fill: "#E5F4FF"
      }), jsx("rect", {
        x: "25.5",
        y: "29.2",
        width: "29.24",
        height: "33.41",
        fill: "#E5F4FF"
      }), jsx("rect", {
        x: "57.26",
        y: "29.2",
        width: "29.24",
        height: "33.41",
        fill: "#E5F4FF"
      })]
    });
  }, {})
};
function B() {
  return !!isFigmakeSitesEnabled() || !!isSitesFeatureEnabled();
}
function V({
  image: e,
  title: t,
  subtitle: i
}) {
  return jsxs(AutoLayout, {
    direction: "vertical",
    horizontalAlignItems: "center",
    cornerRadius: 8,
    strokeColor: "default",
    strokeWidth: 1,
    padding: {
      vertical: 36,
      horizontal: 8
    },
    spacing: 0,
    height: "auto",
    children: [e, jsx("p", {
      className: cssBuilderInstance.font13.colorText.fontMedium.lh24.mt4.$,
      className: "x2b8uid x4z9k3i xk50ysn x1o2sk6j x1gslohp",
      children: t
    }), jsx("p", {
      className: cssBuilderInstance.font11.colorText.lh16.colorTextSecondary.alignCenter.$,
      children: i
    })]
  });
}
function G({
  title: e,
  subtitle: t,
  onSubtitleClick: i,
  graphic: r
}) {
  return jsxs(AutoLayout, {
    horizontalAlignItems: "start",
    spacing: 8,
    cornerRadius: 8,
    strokeColor: "default",
    strokeWidth: 1,
    children: [r, jsxs(AutoLayout, {
      direction: "vertical",
      verticalAlignItems: "center",
      spacing: 0,
      children: [jsx("p", {
        className: cssBuilderInstance.font13.colorText.fontMedium.lh24.$,
        children: e
      }), jsx(TrackedAnchor, {
        className: cssBuilderInstance.font13.colorText.lh24.colorTextBrand.cursorPointer.$,
        onClick: i,
        children: t
      })]
    })]
  });
}
export let $$z0 = registerModal(function ({
  teamId: e
}) {
  let t = useSubscription(ChurnFrictionPersonalizedModalView, {
    teamId: e
  });
  let i = useStarterGlobalFileLimitsExperiment();
  let y = useSelector(e => {
    let t = e.teamBilling.summary.annual_subscription?.current_period_end || e.teamBilling.summary.monthly_subscription?.current_period_end;
    return t ? dayjs(t).format("LL") : void 0;
  });
  let b = useDispatch();
  let [I, N] = useState(!1);
  let P = () => {
    b(hideModal());
  };
  if ("loaded" !== t.status) return null;
  let O = t.data?.team?.teamFileCounts?.designFileCount ?? 0;
  let z = getResourceDataOrFallback(t.data?.team?.teamFileCounts?.totalFileCount) ?? 0;
  let H = i ? {
    show: z > STANDARD_LIMIT,
    count: z
  } : {
    show: O > STANDARD_LIMIT,
    count: O
  };
  let W = t.data?.team?.projectsCount ?? 0;
  let K = parseInt(t.data?.team?.editorsTotalUniqueCount ?? "0");
  let Y = t.data?.team?.sampledEditors?.map(e => ({
    id: e.user?.id ?? "",
    name: e.user?.name ?? "",
    img_url: e.user?.imgUrl ?? "",
    handle: e.user?.handle ?? ""
  })) ?? [];
  let q = [];
  H.show && q.push(jsx(V, {
    image: jsx(_$$p, {}),
    title: getI18nString("churn_friction.modal.design_file_count", {
      designFileCount: H.count
    }),
    subtitle: getI18nString("churn_friction.modal.design_file_subtitle")
  }, "files-stat-box"));
  W > PRIMARY_LIMIT && q.push(jsx(V, {
    image: jsx(_$$e, {}),
    title: getI18nString("churn_friction.modal.project_count", {
      projectCount: W
    }),
    subtitle: getI18nString("churn_friction.modal.project_subtitle")
  }, "projects-stat-box"));
  B() && q.push(jsx(V, {
    image: jsx(_$$a, {}),
    title: getI18nString("churn_friction.modal.published_content"),
    subtitle: getI18nString("churn_friction.modal.published_content_subtitle")
  }, "published-stat-box"));
  K > 1 && q.push(jsx(V, {
    image: jsx(_$$W, {
      className: cssBuilderInstance.my4.$,
      maxNumHeads: 3,
      overlapped: !0,
      entityList: Y,
      currentUser: null
    }),
    title: getI18nString("churn_friction.modal.editor_count.seat_rename", {
      editorCount: K
    }),
    subtitle: getI18nString("churn_friction.modal.editor_subtitle")
  }, "editors-stat-box"));
  let $ = q.length < 2 || I;
  let Z = B() ? [L, U, M, j] : [L, F, M, j];
  let X = jsxs(AutoLayout, {
    direction: "vertical",
    spacing: 16,
    children: [jsx("p", {
      className: cssBuilderInstance.font13.colorText.lh24.$,
      children: renderI18nText("churn_friction.modal.your_team_will_lose")
    }), Z.map(({
      title: e,
      url: t,
      graphic: i
    }) => jsx(G, {
      title: e,
      onSubtitleClick: () => customHistory.unsafeRedirect(t, "_blank"),
      subtitle: getI18nString("churn_friction.modal.learn_more"),
      graphic: i
    }, t))]
  });
  let Q = jsxs(Fragment, {
    children: [jsxs(AutoLayout, {
      direction: "vertical",
      spacing: 16,
      children: [jsx("p", {
        className: cssBuilderInstance.font13.colorText.lh24.$,
        children: B() && y ? renderI18nText("churn_friction.modal.view_only_on_date", {
          date: y
        }) : renderI18nText("churn_friction.modal.converted_to_view_only")
      }), jsx(AutoLayout, {
        spacing: 16,
        verticalAlignItems: "stretch",
        height: "fill-parent",
        children: q
      })]
    }), jsxs(AutoLayout, {
      direction: "vertical",
      spacing: 16,
      children: [jsx("p", {
        className: cssBuilderInstance.font13.colorText.lh24.$,
        children: renderI18nText("churn_friction.modal.your_team_will_lose")
      }), jsx(G, {
        title: renderI18nText("churn_friction.modal.feature_examples"),
        subtitle: getI18nString("churn_friction.modal.cta.see_everything_youll_lose"),
        onSubtitleClick: () => N(!0),
        graphic: jsx(_$$L, {})
      })]
    })]
  });
  return jsx(TrackingProvider, {
    name: TrackingKeyEnum.CHURN_FRICTION_PERSONALIZED_VALUE_MODAL,
    properties: {
      team_id: e
    },
    children: jsxs(ModalContainer, {
      size: 520,
      className: cssBuilderInstance.px32.pt32.pb24.cursorDefault.$,
      "data-testid": "downgrade-churn-friction-modal",
      children: [jsx(ModalUpperRightCorner, {
        onClick: P
      }), jsx("p", {
        className: cssBuilderInstance.font20.colorText.fontSemiBold.lh32.$,
        children: renderI18nText("churn_friction.modal.title")
      }), jsxs(AutoLayout, {
        direction: "vertical",
        spacing: 24,
        children: [$ ? X : Q, jsxs(AutoLayout, {
          horizontalAlignItems: "end",
          padding: {
            top: 24
          },
          strokeWidth: {
            top: 1
          },
          strokeColor: "default",
          spacing: "12px",
          children: [I && jsx("button", {
            onClick: () => N(!1),
            className: "churn_friction_personalized_value_modal--backButton---cdQq",
            children: jsx(_$$I, {
              icon: "navigate-back-32"
            })
          }), jsx(Spacer, {}), jsx("button", {
            className: cssBuilderInstance.mx12.my8.underline.cursorPointer.fontMedium.lh16.$,
            onClick: P,
            children: renderI18nText("churn_friction.modal.cta.keep_plan")
          }), jsx(TrackedButton, {
            variant: "secondary",
            innerText: "Continue",
            onClick: () => {
              b(showModalHandler({
                type: $$v,
                data: {
                  teamId: e,
                  billingEndDate: y || void 0
                }
              }));
            },
            children: jsx("div", {
              className: cssBuilderInstance.fontMedium.lh16.$,
              children: renderI18nText("churn_friction.modal.cta.continue")
            })
          })]
        })]
      })]
    })
  });
}, "ChurnFrictionPersonalizedValueModal");
export const v = $$z0;