import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { createRef, useState, useEffect, memo, useCallback } from "react";
import { Ez5, lyf } from "../figma_app/763686";
import { tH, H4 } from "../905/751457";
import { tt, iT } from "../figma_app/74165";
import { k as _$$k } from "../figma_app/564183";
import { qw } from "../figma_app/740163";
import { q as _$$q } from "../905/924253";
import { R as _$$R } from "../figma_app/941983";
import { TY } from "../figma_app/701001";
import { aV, p8 } from "../figma_app/722362";
import { iZ, Pc } from "../905/372672";
import { debounce } from "../905/915765";
import { Xr, useAtomWithSubscription } from "../figma_app/27355";
import { j6, fu } from "../figma_app/831799";
import { P as _$$P } from "../905/347284";
import { s as _$$s2 } from "../cssbuilder/589278";
import { useDispatch } from "../vendor/514228";
import C from "classnames";
import { trackEventAnalytics } from "../905/449184";
import { FJ } from "../905/508367";
import { isGovCluster, buildUploadUrl } from "../figma_app/169182";
import { Fb } from "../figma_app/819458";
import { F as _$$F } from "../5132/756360";
import { getI18nString, renderI18nText } from "../905/303541";
import { q5 } from "../figma_app/516028";
import { w5 } from "../figma_app/345997";
import { mapFileTypeToEditorTypeNullable } from "../figma_app/53721";
import { DF } from "../figma_app/861252";
import { K as _$$K } from "../905/443068";
import { A as _$$A } from "../905/251970";
import { A5, FI, Yj, J9, Zf, QU, iM, yx, Jm, tL } from "../figma_app/274104";
import { $n } from "../905/521428";
import { serializeQuery } from "../905/634134";
import { IW } from "../figma_app/563413";
import { getFeatureFlags } from "../905/601108";
import { B as _$$B } from "../905/714743";
import { $z } from "../figma_app/617427";
import { getI18nState } from "../figma_app/363242";
import { A as _$$A2 } from "../b2835def/491732";
import { oW } from "../905/675859";
import { sx as _$$sx } from "../905/941192";
import { FU } from "../905/26824";
import { to } from "../905/156213";
import { Y5 } from "../figma_app/455680";
import { kA, IO } from "../905/962318";
import { Point } from "../905/736624";
import { Ao } from "../905/748636";
import { E as _$$E } from "../905/632989";
import { C as _$$C } from "../905/520159";
import { hS } from "../905/437088";
import { bL } from "../905/38914";
import { vo } from "../figma_app/272243";
import ey from "../vendor/197638";
import { qE } from "../figma_app/492908";
import { V as _$$V } from "../905/506207";
import { Dm } from "../figma_app/8833";
import { J2 } from "../figma_app/84367";
import { lY } from "../figma_app/779965";
import { bo } from "../figma_app/447445";
import { v2 } from "../1528/88743";
import { KF } from "../figma_app/957070";
var j = C;
function P() {
  let e = useDispatch();
  let t = iZ();
  let {
    isEditingFile,
    unsortedTeams
  } = DF();
  let l = q5();
  let a = mapFileTypeToEditorTypeNullable(l?.editorType);
  let o = createRef();
  return jsxs(Fragment, {
    children: [jsx("button", {
      className: j()(_$$s2.flex.justifyCenter.itemsCenter.absolute.bottom0.left0.wFull.h40.colorBg.font11.fpl__textBodyMediumStrongFontWeight.cursorPointer.$, _$$s2.b1.colorBorder.bb0.br0.bl0.$, "first_level_resource_contact_support--contactSupportButton--Ioy3K"),
      onClick: () => {
        if (trackEventAnalytics("help_widget_get_help", {
          isEditingFile,
          editorType: a,
          source: "in-product-help-panel-button"
        }), isGovCluster()) {
          FJ("mailto:support-figgov@figma.com", "_blank", "noopener");
          return;
        }
        let e = 0 === unsortedTeams.filter(w5).length;
        o.current?.open({
          ticketForms: e ? Fb.FREE : Fb.PAID,
          locale: t?.locale
        });
      },
      children: getI18nString("help_widget.menu.contact_support")
    }), jsx(_$$F, {
      ref: o,
      dispatch: e,
      userName: t?.name || null,
      userEmail: t?.email || null
    })]
  });
}
function D() {
  let {
    hideInProductHelpView
  } = A5();
  return jsxs("div", {
    className: _$$s2.flex.flexRow.justifyBetween.itemsCenter.$,
    children: [jsx("p", {
      className: _$$s2.font16.colorText.fpl__textHeadingLargeFontWeight.$,
      children: getI18nString("in_product_help_and_learning.first_level_header.title")
    }), jsx(_$$K, {
      onClick: () => {
        hideInProductHelpView();
      },
      "aria-label": getI18nString("general.close"),
      children: jsx(_$$A, {})
    })]
  });
}
function G() {
  let e = j6();
  let t = Pc().locale;
  let [s, i] = useState("");
  let [l, a] = useState(!1);
  let o = createRef();
  let d = createRef();
  let c = () => {
    e.trackEvent("CTA Clicked", {
      text: "Help Center Search",
      searchQuery: s
    });
    let r = serializeQuery({
      query: s
    });
    FJ(`https://help.figma.com/hc/${FI(t)}/search?${r}`, "_blank", "noopener");
  };
  useEffect(() => {
    if (d.current && o.current) {
      let e = o.current.offsetWidth;
      d.current.style.setProperty("--in-product-help-and-learning-search-bar-max-width", `calc(100% - 32px - ${e}px - 8px)`);
    }
  }, [d, o]);
  return jsxs("form", {
    onSubmit: e => {
      e.preventDefault();
      c();
    },
    className: "first_level_resource_search_bar--searchBar--BexQF",
    ref: d,
    children: [jsx(IW, {
      className: j()(_$$s2.h32.wFull.colorBgSecondary.bRadius8.$, {
        "first_level_resource_search_bar--isFocused--1E4mp": l
      }),
      clearSearch: () => i(""),
      focusOnMount: !0,
      hasTransparentBackground: !0,
      hideXIcon: !0,
      iconClassName: _$$s2.colorIconSecondary.$,
      isFocused: l,
      onBlur: () => a(!1),
      onChange: i,
      onFocus: () => a(!0),
      query: s
    }), s.length > 0 && jsx("div", {
      className: "first_level_resource_search_bar--searchButtonContainer--BADgp",
      children: jsx($n, {
        variant: "primary",
        type: "submit",
        ref: o,
        children: renderI18nText("in_product_help_and_learning.search")
      })
    })]
  });
}
function W({
  sectionName: e,
  sectionOptions: t
}) {
  return jsxs("div", {
    className: _$$s2.flex.flexColumn.gap10.font11.fpl__textBodyMediumStrongFontWeight.mt8.$,
    children: [jsx("p", {
      className: _$$s2.mb2.$,
      children: e
    }), t]
  });
}
let Y = () => {
  let e = !!getFeatureFlags().web_help_widget_report_translations && getI18nState()?.getPrimaryLocale(!0) !== "en";
  return [{
    label: getI18nString("help_widget.menu.help_center"),
    href: "https://help.figma.com/"
  }, {
    label: getI18nString("help_widget.menu.support_forum"),
    href: "https://forum.figma.com/"
  }, {
    label: getI18nString("help_widget.menu.release_notes"),
    href: "https://www.figma.com/release-notes/"
  }, {
    label: getI18nString("help_widget.menu.legal_summary"),
    href: "/legal"
  }, {
    label: getI18nString("help_widget.menu.submit_feedback"),
    href: "https://forum.figma.com/submit-feedback"
  }, ...(e ? [{
    label: getI18nString("help_widget.menu.report_translation_issues"),
    href: "https://form.asana.com/?k=2lONzHHSiZJo3FThA47peg&d=10497086658021",
    onClick: () => {
      trackEventAnalytics("help_widget_report_translations", {
        source: "in_product_help_and_learning_panel"
      });
    }
  }] : []), {
    label: getI18nString("help_widget.menu.ask_the_community"),
    href: "https://forum.figma.com/ask-community"
  }];
};
let X = memo(function () {
  let e = Y().map(e => jsx("span", {
    className: _$$s2.flex.gap8.colorTextBrand.cursorPointer.$,
    children: jsx($z, {
      variant: "link",
      onClick: () => {
        FJ(e.href, "_blank", "noopener");
        e.onClick?.();
      },
      iconPrefix: jsx(_$$B, {
        svg: _$$A2,
        width: "16px",
        className: _$$s2.colorIconBrand.mr8.$
      }),
      children: e.label
    })
  }, e.label));
  let t = getI18nString("in_product_help_and_learning.more_help_resources.section_title");
  return jsx(W, {
    sectionName: t,
    sectionOptions: e
  });
});
var Z = (e => (e[e.NEW_TO_FIGMA = 0] = "NEW_TO_FIGMA", e[e.EXPLORE_FEATURES = 1] = "EXPLORE_FEATURES", e[e.CREATE_COMPONENTS = 2] = "CREATE_COMPONENTS", e[e.DESIGN_FIRST_BUTTON = 3] = "DESIGN_FIRST_BUTTON", e[e.VIDEO_TUTORIALS = 4] = "VIDEO_TUTORIALS", e))(Z || {});
function Q(e) {
  switch (e) {
    case 0:
      return [{
        displayString: getI18nString("in_product_help_and_learning.article.get_started_with_layers"),
        articleId: 0x182dc2b40797
      }, {
        displayString: getI18nString("in_product_help_and_learning.article.explore_layer_types"),
        articleId: 0x183601f04d17
      }, {
        displayString: getI18nString("in_product_help_and_learning.article.combine_layers"),
        articleId: 0x1833cfa8cf97
      }, {
        displayString: getI18nString("in_product_help_and_learning.article.create_and_edit_text"),
        articleId: 0x53d40dbffa
      }, {
        displayString: getI18nString("in_product_help_and_learning.article.browse_and_apply_fonts"),
        articleId: 0x53d4225f82
      }, {
        displayString: getI18nString("in_product_help_and_learning.article.apply_paints_with_the_color_picker"),
        articleId: 0x53d41dbafe
      }, {
        displayString: getI18nString("in_product_help_and_learning.article.add_images_and_videos_to_design_file"),
        articleId: 0x53d40ed782
      }, {
        displayString: getI18nString("in_product_help_and_learning.article.export_from_figma_design"),
        articleId: 0x53d40ed7d2
      }];
    case 1:
      return [{
        displayString: getI18nString("in_product_help_and_learning.article.frames_in_figma_design"),
        articleId: 0x53d425e791
      }, {
        displayString: getI18nString("in_product_help_and_learning.article.add_auto_layout_to_a_design"),
        articleId: 0x53677016397
      }, {
        displayString: getI18nString("in_product_help_and_learning.article.explore_auto_layout_properties"),
        articleId: 0x53d4154d2d
      }, {
        displayString: getI18nString("in_product_help_and_learning.article.create_color_text_effect_and_layout_grid_styles"),
        articleId: 0x53d3fb49a6
      }, {
        displayString: getI18nString("in_product_help_and_learning.article.create_interactions"),
        articleId: 0x53d4133b7d
      }, {
        displayString: getI18nString("in_product_help_and_learning.article.prototype_triggers"),
        articleId: 0x53d40ef5fa
      }, {
        displayString: getI18nString("in_product_help_and_learning.article.prototype_actions"),
        articleId: 0x53d40ef622
      }, {
        displayString: getI18nString("in_product_help_and_learning.article.prototype_animations"),
        articleId: 0x53d4166285
      }, {
        displayString: getI18nString("in_product_help_and_learning.article.parent_child_and_sibling_relationships"),
        articleId: 0x53d40dc9e6
      }];
    case 2:
      return [{
        displayString: getI18nString("in_product_help_and_learning.article.create_components_to_resuse_in_designs"),
        articleId: 0x53d3fa03f2
      }, {
        displayString: getI18nString("in_product_help_and_learning.article.create_and_insert_component_instances"),
        articleId: 0x53d401725d
      }, {
        displayString: getI18nString("in_product_help_and_learning.article.create_and_use_variants"),
        articleId: 0x53d5094712
      }, {
        displayString: getI18nString("in_product_help_and_learning.article.create_interactive_components_with_variants"),
        articleId: 0x53d5518626
      }, {
        displayString: getI18nString("in_product_help_and_learning.article.explore_component_properties"),
        articleId: 0x513129d7517
      }];
    default:
      return [];
  }
}
function ee({
  resource: e
}) {
  let t = j6();
  let s = Yj();
  let n = Xr(J9);
  let i = Xr(Zf);
  let l = Xr(QU);
  return jsxs("button", {
    className: _$$s2.cursorPointer.$,
    style: _$$sx.radiusMedium.b1.colorBorder.flex.flexRow.wFull.add({
      height: "74px",
      overflow: "hidden"
    }).$,
    onClick: async () => {
      if (t.trackEvent("CTA Clicked", {
        text: e.title
      }), e.resource === Z.DESIGN_FIRST_BUTTON) {
        let t = await s(0xcce00915a97);
        t && (n(2), i(e), l(t));
      } else e.resource === Z.VIDEO_TUTORIALS ? FJ("https://www.youtube.com/playlist?list=PLXDU_eVOJTx4iS4wLdfAcM1msnqZmVwC5", "_blank", "noopener") : (n(2), i(e));
    },
    children: [jsx(oW, {
      src: e.image,
      alt: "",
      style: _$$sx.m0.add({
        width: "108px",
        height: "74px",
        borderRadius: "var(--radius-medium) 0 0 var(--radius-medium)"
      }).$
    }), jsxs("div", {
      className: _$$s2.flex.flexColumn.gap2.m12.wFull.font11.ellipsis.alignLeft.$,
      children: [jsx("p", {
        className: _$$s2.colorText.fpl__textBodyMediumStrongFontWeight.$,
        children: e.title
      }), jsx("p", {
        className: _$$s2.colorTextSecondary.$,
        children: e.description
      })]
    })]
  }, e.title);
}
function et() {
  let e = [{
    resource: 0,
    title: getI18nString("in_product_help_and_learning.popular_resources.new_to_figma.title"),
    description: getI18nString("in_product_help_and_learning.popular_resources.new_to_figma.description"),
    image: buildUploadUrl("a657c232671f190106d0943282bf1a970f036718")
  }, {
    resource: 1,
    title: getI18nString("in_product_help_and_learning.popular_resources.explore_more_features.title"),
    description: getI18nString("in_product_help_and_learning.popular_resources.explore_more_features.description"),
    image: buildUploadUrl("033919a9d852c5a37b60923805a0e11f625cd9b1")
  }, {
    resource: 2,
    title: getI18nString("in_product_help_and_learning.popular_resources.create_components.title"),
    description: getI18nString("in_product_help_and_learning.popular_resources.create_components.description"),
    image: buildUploadUrl("4f93c71141e5989d9f4d8259d2e2751dc3b3d7ab")
  }, {
    resource: 3,
    title: getI18nString("in_product_help_and_learning.popular_resources.design_your_first_button.title"),
    description: getI18nString("in_product_help_and_learning.popular_resources.design_your_first_button.description"),
    image: buildUploadUrl("13d91474245b8e3949763a713a12805283cfe2a2")
  }, {
    resource: 4,
    title: getI18nString("in_product_help_and_learning.popular_resources.video_tutorials.title"),
    description: getI18nString("in_product_help_and_learning.popular_resources.video_tutorials.description"),
    image: buildUploadUrl("02377d4618e4b063422da13c18efd5debece9591")
  }];
  return jsxs("div", {
    className: _$$s2.flex.flexColumn.rowGap8.$,
    children: [jsx("p", {
      className: _$$s2.font13.colorText.fpl__textBodyMediumStrongFontWeight.$,
      children: getI18nString("in_product_help_and_learning.popular_resources.section_title")
    }), e.map(e => jsx(ee, {
      resource: e
    }, e.title))]
  });
}
function el({
  option: e
}) {
  return jsx("span", {
    className: _$$s2.flex.colorTextBrand.cursorPointer.$,
    children: jsx($z, {
      variant: "link",
      onClick: e.onClick,
      children: e.label
    })
  });
}
function ea() {
  let e = useDispatch();
  let t = [{
    label: getI18nString("help_widget.menu.change_keyboard_layout"),
    onClick: function () {
      Y5.isReady() && (e(FU({
        tab: "layout"
      })), Y5.triggerAction("toggle-keyboard-shortcuts"));
    }
  }, {
    label: getI18nString("help_widget.menu.change_languages"),
    onClick: function () {
      e(to({
        type: kA,
        data: {
          source: IO.HELP
        }
      }));
    }
  }, {
    label: getI18nString("help_widget.menu.keyboard_shortcuts"),
    onClick: () => {
      Y5.isReady() && Y5.triggerAction("toggle-keyboard-shortcuts");
    }
  }].map(e => jsx(el, {
    option: e
  }, e.label));
  let s = getI18nString("in_product_help_and_learning.settings.section_title");
  return jsx(W, {
    sectionName: s,
    sectionOptions: t
  });
}
function eo({
  isFloatingModal: e
}) {
  return jsx("div", {
    children: jsxs(fu, {
      name: "First Level",
      children: [jsxs("div", {
        className: _$$s2.flex.flexColumn.gap16.p16.pb8.$,
        children: [jsx(D, {}), jsx(G, {})]
      }), jsx(_$$P, {
        className: e ? "first_level_resources--floatingModalScrollContainer--i7yEe" : "first_level_resources--scrollContainer--t1Gzz",
        children: jsxs("div", {
          className: _$$s2.flex.flexColumn.gap16.pb16.$,
          children: [jsx(et, {}), jsx(ea, {}), jsx(X, {})]
        })
      }), jsx(P, {})]
    })
  });
}
function eu({
  propertiesPanelWidth: e,
  view: t
}) {
  let [s, i] = useState(iM({
    propertiesPanelWidth: e
  }));
  let l = useCallback(() => {
    i(iM({
      propertiesPanelWidth: e
    }));
  }, [e]);
  useEffect(() => {
    let e = debounce(() => {
      l();
    });
    window.addEventListener("resize", e);
    return () => window.removeEventListener("resize", e);
  }, [l]);
  useEffect(() => {
    l();
  }, [e, l]);
  return jsx(Ao, {
    initialWidth: yx,
    initialHeight: .8 * window.innerHeight,
    initialPosition: new Point(s.x, s.y),
    maxHeight: .8 * window.innerHeight,
    children: jsx("div", {
      "data-testid": "in-product-help-floating-modal",
      className: "dynamic_panel--floatingModalContainer--S9bdj",
      children: t
    })
  });
}
function em() {
  let e = useAtomWithSubscription(J9);
  let {
    hideInProductHelpView
  } = A5();
  let s = Xr(J9);
  return jsxs("div", {
    className: _$$s2.flex.flexRow.justifyBetween.p16.pl12.$,
    children: [jsxs(_$$E, {
      onClick: () => {
        s(e - 1);
      },
      "aria-label": getI18nString("general.back"),
      className: _$$s2.flex.flexRow.itemsCenter.justifyCenter.font11.colorText.fpl__textBodyMediumStrongFontWeight.cursorPointer.$,
      children: [jsx(_$$C, {}), renderI18nText("general.back")]
    }), jsx(_$$K, {
      onClick: () => {
        hideInProductHelpView();
      },
      "aria-label": getI18nString("general.close"),
      children: jsx(_$$A, {})
    })]
  });
}
var e_ = ey;
let eb = "third_level_resources--helpCenterArticle--Fnl-a";
function eC({
  afterArticleChildren: e
}) {
  let {
    name
  } = j6();
  let s = useAtomWithSubscription(Zf);
  let i = useAtomWithSubscription(J9);
  let l = useAtomWithSubscription(QU);
  let a = createRef();
  let [o, d] = useState();
  let c = useCallback(() => {
    a.current?.scrollTo(0, 0);
  }, [a]);
  return (useEffect(() => {
    Array.from(document.querySelectorAll(`.${eb} a`)).forEach(e => {
      if (-1 === e.href.indexOf("#")) e.target = "_blank";else {
        let t = e.href.split("#", 2);
        e.href = `#${t[1]}`;
      }
      e.onclick = () => {
        trackEventAnalytics("CTA Clicked", {
          text: e.text,
          linkUrl: e.href,
          trackingContext: name,
          articleId: l?.id
        });
      };
    });
    (function (e) {
      if (e && 0xcce00915a97 === e.id) {
        let e = document.querySelector(".contextual-content.contextual-content--NewUI p:first-of-type");
        try {
          if (e) {
            let t = document.createElement("iframe");
            t.src = "https://www.youtube.com/embed/HJG7ILVSjrI?si=kLtIPYEqkgMC_hwH";
            t.title = "Youtube video player";
            t.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
            t.referrerPolicy = "strict-origin-when-cross-origin";
            t.allowFullscreen = !0;
            t.className = "third_level_resources--embeddedVideo--lnko-";
            let s = e.parentNode;
            s && s.insertBefore(t, e);
          }
        } catch (e) {
          console.error(e);
        }
      }
    })(l);
    Array.from(document.querySelectorAll(`.${eb} img`)).forEach(e => {
      e.onclick = () => {
        d({
          src: e.src,
          alt: e.alt
        });
      };
    });
    let e = Array.from(document.querySelectorAll(".contextual-content--NewUI button.tablinks"));
    let s = Array.from(document.querySelectorAll(".contextual-content--NewUI div.tabcontent"));
    if (e.length > 0 && e.length === s.length) {
      let t = 0;
      let r = t => {
        e.forEach((e, s) => {
          s === t ? e.classList.add("active") : e.classList.remove("active");
        });
        s.forEach((e, s) => {
          s === t ? e.style.display = "block" : e.style.display = "none";
        });
      };
      e.forEach((e, s) => {
        e.onclick = () => r(s);
        e.classList.contains("active") && (t = s);
      });
      r(t);
    }
    c();
  }, [l]), l) ? jsx("div", {
    children: jsxs(fu, {
      name: "Help Center Article",
      properties: {
        articleId: l.id
      },
      children: [jsx(em, {}), !!s && 3 === i && jsxs("h3", {
        className: "third_level_resources--breadcrumb--yQHOD",
        children: [s.title, " /", " ", jsx("span", {
          className: _$$s2.fpl__textBodySmallStrongFontWeight.$,
          children: l.name
        })]
      }), jsx("h1", {
        className: _$$s2.lh24.fontSemiBold.font16.fontInter.pt0.px16.pb12.$,
        children: l.name
      }), jsxs("div", {
        className: "third_level_resources--container--RY81c",
        ref: a,
        children: [jsx("div", {
          className: j()(_$$s2.p16.pt8.$, eb),
          dangerouslySetInnerHTML: {
            __html: e_().sanitize(l.body)
          }
        }), e, jsx(ej, {
          image: o,
          onClose: () => d(void 0)
        })]
      })]
    })
  }) : null;
}
function ej({
  image: e,
  onClose: t
}) {
  let s = hS({
    open: !!e,
    onClose: t
  });
  return jsx(bL, {
    manager: s,
    width: "fit-content",
    children: jsx("div", {
      className: "third_level_resources--enlargedImageContainer--EqCOz",
      children: jsx(vo, {
        children: jsx(oW, {
          src: e?.src,
          alt: e?.alt,
          className: "third_level_resources--enlargedImage--l3atX"
        })
      })
    })
  });
}
function ev() {
  let e = Xr(J9);
  let t = useAtomWithSubscription(Zf);
  let s = useAtomWithSubscription(QU);
  if (!t) return null;
  let n = null;
  return t.resource === Z.DESIGN_FIRST_BUTTON ? jsx(eC, {
    afterArticleChildren: s && 0xcce00915a97 === s.id ? jsx(ek, {}) : void 0
  }) : t.resource === Z.VIDEO_TUTORIALS ? (e(1), null) : (n = jsx(eS, {
    details: function (e) {
      switch (e) {
        case 0:
          return {
            description: getI18nString("in_product_help_and_learning.popular_resources.new_to_figma.details.description"),
            webm: buildUploadUrl("6db4a35b80ddb5910781af9bc60c66bf902dff3a"),
            mp4: buildUploadUrl("88dea447c3d80062d168b864c9c01aa5645790e5"),
            articles: Q(0)
          };
        case 1:
          return {
            description: getI18nString("in_product_help_and_learning.popular_resources.explore_more_features.details.description"),
            webm: buildUploadUrl("23c86354e978f77d1ca96b6cc52dfdc216f5a99d"),
            mp4: buildUploadUrl("fd204bb233c3be09b2e29f8621d93342c24b07af"),
            articles: Q(1)
          };
        case 2:
          return {
            description: getI18nString("in_product_help_and_learning.popular_resources.create_components.details.description"),
            webm: buildUploadUrl("0f0aad5b442ba063078c23b06010aab77ecf0c07"),
            mp4: buildUploadUrl("34285a0d04fb97f14cc2611ddc825950aec93300"),
            articles: Q(2)
          };
      }
    }(t.resource)
  }), jsx("div", {
    children: jsxs(fu, {
      name: "Second Level",
      children: [jsx(em, {}), jsxs("div", {
        className: _$$s2.flex.flexColumn.p16.pt8.pb0.$,
        children: [jsx("p", {
          className: _$$s2.font16.colorText.fpl__textHeadingLargeFontWeight.pb8.$,
          children: t.title
        }), n]
      })]
    })
  }));
}
function eS({
  details: e
}) {
  let t = Yj();
  let s = Xr(J9);
  let n = Xr(QU);
  return jsxs(Fragment, {
    children: [jsx("p", {
      children: e.description
    }), jsxs("video", {
      autoPlay: !0,
      muted: !0,
      loop: !0,
      playsInline: !0,
      className: _$$s2.wFull.hAuto.borderBox.mt16.bRadius5.$,
      children: [jsx("source", {
        type: "video/webm",
        src: e.webm
      }), jsx("source", {
        type: "video/mp4",
        src: e.mp4
      })]
    }), jsx("div", {
      className: _$$s2.flex.flexColumn.gap16.pt24.$,
      children: e.articles.map(e => jsx("span", {
        className: _$$s2.colorTextBrand.cursorPointer.alignLeft.fpl__textBodyMediumStrongFontWeight.$,
        children: jsx($z, {
          variant: "link",
          trackingProperties: {
            articleId: e.articleId
          },
          onClick: async () => {
            let r = await t(e.articleId);
            r && (s(3), n(r));
          },
          children: e.displayString
        })
      }, e.displayString))
    })]
  });
}
function ek() {
  let e = Yj();
  let t = Xr(QU);
  return jsxs("button", {
    className: _$$s2.radiusMedium.b1.colorBorder.flex.flexRow.m16.cursorPointer.overflowHidden.$,
    style: _$$sx.add({
      height: "74px"
    }).$,
    onClick: async () => {
      let s = await e(0x130e9f996b97);
      s && t(s);
    },
    children: [jsx(oW, {
      src: buildUploadUrl("c657cef6e7f2fec74ceef573832e097f2d0ce4cd"),
      alt: "",
      style: _$$sx.m0.add({
        width: "108px",
        height: "74px",
        borderRadius: "var(--radius-medium) 0 0 var(--radius-medium)"
      }).$
    }), jsxs("div", {
      className: _$$s2.flex.flexColumn.gap2.m12.font11.ellipsis.alignLeft.$,
      style: _$$sx.add({
        margin: "auto 12px"
      }).$,
      children: [jsx("p", {
        className: _$$s2.colorText.fpl__textBodyMediumStrongFontWeight.$,
        children: renderI18nText("in_product_help_and_learning.article.design_an_interactive_button")
      }), jsxs("p", {
        className: _$$s2.colorTextSecondary.$,
        children: [renderI18nText("in_product_help_and_learning.design_an_interactive_button.description"), " \u2022", " ", renderI18nText("in_product_help_and_learning.minute_estimate", {
          minutes: 20
        })]
      })]
    })]
  }, "design-an-interactive-button");
}
function eA({
  view: e
}) {
  let {
    inProductHelpViewType
  } = A5();
  let s = J2(Ez5.uiState().inProductHelpSidePanelWidth);
  return "side_panel" !== inProductHelpViewType ? null : jsx(_$$V, {
    children: jsx(bo, {
      children: jsx(lY, {
        className: j()("dynamic_panel--sidePanelPosition--YOgLo", Dm),
        size: s,
        onResize: e => {
          !function (e) {
            let t = qE(e, Jm, tL);
            Ez5?.uiState().inProductHelpSidePanelWidth.set(t);
          }(e);
        },
        side: "left",
        "data-cancel-insertable-resource-drag-and-drop": !0,
        children: jsx("div", {
          className: "dynamic_panel--sidePanelContainer--4KgPk",
          style: {
            width: `${s}px`
          },
          "data-testid": "in-product-help-side-panel",
          children: e
        })
      })
    })
  });
}
function eP({
  propertiesPanelWidth: e
}) {
  let t;
  let {
    inProductHelpViewType,
    hideInProductHelpView,
    updateInProductHelpViewOnWindowWidthResize
  } = A5();
  let a = useAtomWithSubscription(J9);
  return (1 === a ? t = jsx(eo, {
    isFloatingModal: "floating_modal" === inProductHelpViewType
  }) : 2 === a ? t = jsx(ev, {}) : 3 === a && (t = jsx(eC, {})), useEffect(() => {
    let e = debounce(() => {
      "hidden" !== inProductHelpViewType && updateInProductHelpViewOnWindowWidthResize();
    });
    window.addEventListener("resize", e);
    return () => window.removeEventListener("resize", e);
  }, [inProductHelpViewType, e, updateInProductHelpViewOnWindowWidthResize]), useEffect(() => () => hideInProductHelpView(), [hideInProductHelpView]), "side_panel" === inProductHelpViewType) ? jsx(fu, {
    name: "In Product Help Panel",
    children: jsx(eA, {
      view: t
    })
  }) : "floating_modal" === inProductHelpViewType ? jsx(fu, {
    name: "In Product Help Floating",
    children: jsx(eu, {
      propertiesPanelWidth: e,
      view: t
    })
  }) : null;
}
export function $$eO0({
  boundaryKey: e,
  children: t
}) {
  let s = aV();
  let g = _$$q();
  let f = p8("topLevelMode");
  let x = iZ();
  let y = s ? _$$R.topLevelMode : f;
  let _ = TY();
  let b = _$$k();
  let C = y === lyf.LAYOUT || y === lyf.BRANCHING || _ || !!x && y === lyf.PREVIEW || y === lyf.HISTORY;
  let j = qw();
  tt();
  let {
    inProductHelpViewType
  } = A5();
  let {
    setPropertiesPanelCollapsed
  } = iT();
  return (useEffect(() => {
    b && setPropertiesPanelCollapsed(!0);
  }, [setPropertiesPanelCollapsed, b]), b) ? jsx("div", {
    className: KF,
    children: jsx(v2, {})
  }) : jsx(tH, {
    boundaryKey: e,
    fallback: H4.NONE_I_KNOW_WHAT_IM_DOING,
    children: C && g && jsxs(Fragment, {
      children: [t, "hidden" !== inProductHelpViewType && jsx(eP, {
        propertiesPanelWidth: j
      })]
    })
  });
}
export const o = $$eO0;