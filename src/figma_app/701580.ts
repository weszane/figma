import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useEffect, useMemo, useRef, useState, useCallback } from "react";
import { useDispatch, useSelector } from "../vendor/514228";
import { throwTypeError } from "../figma_app/465776";
import { isEmptyObject } from "../figma_app/493477";
import { Y9, Wk } from "../figma_app/272243";
import { hS } from "../905/437088";
import { bL } from "../905/38914";
import { J as _$$J } from "../905/614223";
import _ from "classnames";
import { getI18nString, renderI18nText } from "../905/303541";
import { j6, fu } from "../figma_app/831799";
import { _ as _$$_ } from "../905/793009";
import { Gi, tS, wv } from "../figma_app/622574";
import { Ou, Fz, b4, WS } from "../figma_app/106207";
import { Cu } from "../figma_app/314264";
import { tS as _$$tS } from "../figma_app/516028";
import { a6, Ve, RD } from "../figma_app/198840";
import { n as _$$n } from "../905/79930";
import { cS } from "../figma_app/45218";
import { vt } from "../905/862883";
import { registerModal } from "../905/102752";
import { $n } from "../905/521428";
import { fG } from "../figma_app/973927";
import { FFileType } from "../figma_app/191312";
import { hT } from "../figma_app/878651";
import { N as _$$N } from "../905/438674";
import { E as _$$E } from "../905/632989";
import { U as _$$U } from "../905/103637";
import { s as _$$s } from "../cssbuilder/589278";
import { b as _$$b } from "../905/985254";
import { f as _$$f } from "../905/940356";
import { pz, vC, D5, wP, X6, Mo, rb, xQ, w0, $I, ON, hW, jE } from "../figma_app/589564";
import { tJ, G3, iq, AF, Pr, Cm } from "../figma_app/80782";
import { O9 } from "../figma_app/522930";
import { R as _$$R } from "../figma_app/313269";
import { $J } from "../905/491152";
import { G4 } from "../figma_app/707808";
import { Z as _$$Z } from "../figma_app/684783";
import { L as _$$L, I as _$$I } from "../1577/16430";
import { iZ } from "../905/372672";
import { avG } from "../figma_app/27776";
import { i as _$$i } from "../figma_app/566312";
import { a as _$$a } from "../905/925868";
import { _3 } from "../figma_app/502363";
import { A as _$$A } from "../6828/44395";
import { K as _$$K } from "../905/443068";
import { C as _$$C } from "../905/520159";
import { IW } from "../figma_app/563413";
import { yB } from "../figma_app/359152";
import { z as _$$z } from "../figma_app/497127";
import { bg } from "../figma_app/446435";
var n;
var h = _;
let j = "_team_templates_browse";
let U = "seen_figjam_make_tmpl_category";
function B({
  selectedCategory: e,
  selectCategory: t,
  categoryTitles: r,
  categoryIds: n,
  triggeredFrom: o,
  makeSomethingCategoryId: l,
  subcategories: d
}) {
  let c = useDispatch();
  let u = _$$tS();
  let p = Gi();
  let _ = _$$f("figjam_editor_onboarded");
  let h = _$$f(U);
  let g = n.filter(e => d.every(t => !t.categoryIds.includes(e)));
  useEffect(() => {
    "makeSomething" !== o && _ && !h && (t(l), c(_$$b({
      [U]: !0
    })));
  }, [c, _, h, l, t, o]);
  let f = e => {
    t(e);
    Cu({
      fileKey: u,
      categoryName: e
    }, "template_modal_category_selected");
  };
  let y = t => t.map(t => {
    let n = r[t];
    return n ? jsx(G, {
      text: n,
      isSelected: e === t,
      onClick: () => f(t)
    }, t) : null;
  });
  return jsxs("div", {
    className: pz,
    children: [jsx(G, {
      text: getI18nString("browse_templates_modal.all_templates"),
      onClick: () => t(void 0),
      isSelected: !e
    }), p && jsx(Fragment, {
      children: jsx(G, {
        text: getI18nString("browse_templates_modal.header_name_templates", {
          entityName: p.name || ""
        }),
        onClick: () => f(j),
        isSelected: e === j,
        "data-testid": "org-templates"
      })
    }), y(g), d.map(e => jsxs("div", {
      children: [jsx("div", {
        className: _$$s.minH16.p0.$
      }), jsx("div", {
        className: vC,
        children: e.title
      }), y(e.categoryIds)]
    }, e.id)), jsx("div", {
      className: _$$s.minH8.$
    }), jsxs("span", {
      className: D5,
      children: [jsx(_$$U, {
        className: wP
      }), jsx(_$$N, {
        href: "/community/figjam",
        newTab: !0,
        onClick: () => {
          Cu({
            fileKey: u,
            uiSelectedView: "browse_more_sidebar_link",
            name: "Templates Modal Browse More"
          }, "cta_clicked");
        },
        children: renderI18nText("browse_templates_modal_sidebar.see_more_in_community")
      })]
    })]
  });
}
function G(e) {
  return jsx(_$$E, {
    className: e.isSelected ? X6 : Mo,
    onClick: e.onClick,
    children: e.text
  });
}
B.displayName = "BrowseTemplatesModalSidebar";
G.displayName = "TemplatesPickerSidebarItem";
function z(e) {
  let t = tS();
  let r = useSelector(e => e.hubFiles);
  let n = _$$tS();
  let o = useMemo(() => $(e.templates), [e.templates]);
  let l = useRef(null);
  useEffect(() => {
    l.current?.scrollTo(0, 0);
  }, [e.selectedCategory]);
  let d = null;
  if (e.selectedCategory) {
    let t = (e.templates[e.selectedCategory] || []).map(e => r[e]);
    d = jsx(K, {
      templates: t.filter(e => !!e).map(e => ({
        template: e,
        type: _$$n.HubFile
      })),
      categoryTitle: e.categoryTitles[e.selectedCategory],
      category: e.selectedCategory,
      templateInsertionLocation: e.templateInsertionLocation,
      onInsertTemplate: e.onInsertTemplate,
      isInsertingTemplate: e.isInsertingTemplate,
      previewHubFile: e.previewHubFile
    });
  } else d = jsxs(Fragment, {
    children: [jsx(O9, {}, "team_template_announcement"), t && jsx(W, {
      onInsertTemplate: e.onInsertTemplate,
      isInsertingTemplate: e.isInsertingTemplate,
      templateInsertionLocation: e.templateInsertionLocation,
      selectCategory: e.selectCategory
    }), e.categoryIds.map(t => {
      let n = (o[t] || []).map(e => r[e]).filter(e => !!e);
      return jsx(K, {
        category: t,
        categoryTitle: e.categoryTitles[t],
        templates: n.map(e => ({
          template: e,
          type: _$$n.HubFile,
          category: t
        })),
        templateInsertionLocation: e.templateInsertionLocation,
        selectCategory: e.selectCategory,
        onInsertTemplate: e.onInsertTemplate,
        isInsertingTemplate: e.isInsertingTemplate,
        previewHubFile: e.previewHubFile
      }, `templates_category_preview:${t}`);
    })]
  });
  return jsxs("div", {
    className: rb,
    ref: l,
    children: [d, jsx(tJ, {
      url: e.enterCommunityUrl,
      fileKey: n || null
    })]
  });
}
function W(e) {
  let {
    teamTemplates,
    isLoading
  } = wv(FFileType.WHITEBOARD, 3);
  let n = Gi();
  return n ? isLoading ? jsxs(Fragment, {
    children: [jsx(G3, {}), jsx(G3, {}), jsx(G3, {
      shouldFade: !0
    })]
  }) : teamTemplates?.length ? jsx(K, {
    category: j,
    categoryTitle: getI18nString("browse_templates_modal.header_name_templates", {
      entityName: n.name
    }),
    templates: teamTemplates,
    selectCategory: e.selectCategory,
    templateInsertionLocation: e.templateInsertionLocation,
    onInsertTemplate: e.onInsertTemplate,
    isInsertingTemplate: e.isInsertingTemplate
  }) : null : null;
}
function K(e) {
  let t = e.selectCategory;
  return jsxs("div", {
    className: xQ,
    children: [jsxs("div", {
      className: w0,
      children: [jsx("div", {
        className: $I,
        children: e.categoryTitle
      }), t && jsx($n, {
        variant: "link",
        onClick: () => t(e.category),
        children: renderI18nText("browse_templates_modal.see_all")
      })]
    }), jsx(Y, {
      templates: e.templates,
      templateInsertionLocation: e.templateInsertionLocation,
      previewHubFile: e.previewHubFile,
      onInsertTemplate: e.onInsertTemplate,
      isInsertingTemplate: e.isInsertingTemplate
    })]
  });
}
function Y(e) {
  let t = fG();
  let {
    previewHubFile
  } = e;
  return jsxs(iq, {
    children: [e.templates.map(n => {
      let {
        primaryKey
      } = t(n);
      return jsx(AF, {
        template: n,
        templateInsertionLocation: e.templateInsertionLocation,
        onInsert: () => e.onInsertTemplate(n),
        isInsertingTemplate: e.isInsertingTemplate(primaryKey),
        onPreview: n.type === _$$n.HubFile && previewHubFile ? () => previewHubFile(n.template.id) : void 0
      }, primaryKey);
    }), jsx(hT, {
      numResources: e.templates.length,
      maxResources: 3
    })]
  });
}
z.displayName = "BrowseTemplatesModalContent";
K.displayName = "TemplatesPickerCategorySection";
let $ = (e, t = 3) => {
  let r = {};
  Object.keys(e).forEach(n => {
    e[n] && (r[n] = e[n].slice(0, t));
  });
  return r;
};
(e => {
  function t(e) {
    return jsx("div", {
      className: "resource_detail_view_header--subtitleContainer--G4iVj",
      children: e.children
    });
  }
  e.SmallStickyTopBar = function (e) {
    let r = iZ() ? {} : {
      top: avG
    };
    return jsx("div", {
      className: e.className || "resource_detail_view_header--headerContainer_Small--GNjXr resource_detail_view_header--headerContainerBase--noQIf",
      style: r,
      children: jsxs("div", {
        className: "resource_detail_view_header--headerElementsContainer_Small--7d4Dl resource_detail_view_header--headerElementsContainerBase--Bkwye detail_view--container--5uafb detail_view--_container--9sCA7 text--fontPos14--OL9Hp text--_fontBase--QdLsd",
        children: [jsxs("div", {
          className: "resource_detail_view_header--headerLeft--3evKW",
          children: [jsxs("div", {
            className: "resource_detail_view_header--titleContainer--D1-zT",
            children: [jsx("h1", {
              className: "resource_detail_view_header--nameShrunk--djxg3 text--fontPos18--rYXJb text--_fontBase--QdLsd ellipsis--ellipsis--Tjyfa",
              children: e.name
            }), e.titleBadge]
          }), jsx(t, {
            children: jsxs("div", {
              className: "resource_detail_view_header--subtitleItem--Wtt2d text--fontPos13--xW8hS text--_fontBase--QdLsd",
              children: [jsx(_$$L, {
                publishers: e.resource.community_publishers.accepted
              }), jsx(_$$I, {
                publishers: e.resource.community_publishers.accepted
              })]
            })
          })]
        }), jsxs("div", {
          className: "resource_detail_view_header--headerRight--HScUW detail_view--headerRight--nsyNm",
          children: [jsx("div", {
            className: "resource_detail_view_header--secondaryCTAContainer--iNAnz detail_view--likesContainer--LC17P",
            children: e.secondaryCTAButton
          }), jsx("div", {
            className: "resource_detail_view_header--rowReverse--Fl6Zv detail_view--rowReverse---FVgL",
            children: e.mainCTAButton
          })]
        })]
      })
    });
  };
})(n || (n = {}));
function en(e) {
  let t = useDispatch();
  let r = useSelector(e => e.hubFiles);
  let a = r[e.templateId];
  let o = a6(a);
  if (!a) return null;
  let l = jsx(_$$i, {
    insertTemplate: () => e.insertTemplate({
      type: _$$n.HubFile,
      template: a
    }),
    isInsertingTemplate: e.isInsertingTemplate,
    children: Ve(e.templateInsertionLocation)
  });
  let d = e.moreTemplateIds.filter(t => t !== e.templateId).map(e => r[e]);
  return jsxs("div", {
    className: "browse_templates_modal_resource_preview--resourcePreview--xsc-T",
    children: [jsx(n.SmallStickyTopBar, {
      resource: a,
      name: o.name,
      mainCTAButton: l,
      secondaryCTAButton: jsx(Fragment, {}),
      className: "browse_templates_modal_resource_preview--headerContainer--SGsCX",
      openCreatorsInNewTab: !0
    }), jsxs("div", {
      className: "browse_templates_modal_resource_preview--container--FlTtG hub_file_detail_view--container--wjAfD",
      children: [jsx("div", {
        className: "browse_templates_modal_resource_preview--embedContainer--ONcnZ hub_file_detail_view--embedContainer--QMuUr detail_view--embedContainer---TcbF",
        children: jsx(_$$Z, {
          containerClassName: "browse_templates_modal_resource_preview--embedContainerInner--Bu6RJ hub_file_detail_view--iframeContainer---uQYN",
          disableClickToExpand: !0,
          disableComments: !0,
          disableFullscreen: !0,
          dispatch: t,
          fixedSize: !0,
          fullscreenState: G4.DEFAULT,
          hubFile: a,
          profileIdToAdminResourceAs: null
        }, a.id)
      }), jsxs("div", {
        className: "browse_templates_modal_resource_preview--metadataContainer--GipYm",
        children: [jsxs("div", {
          className: "browse_templates_modal_resource_preview--description--EuZxv",
          children: [$J(o.description).trim().length > 0 && jsx(_$$R, {
            fallback: null,
            errorFallback: null,
            value: o.description
          }), jsx("div", {
            className: _$$s.mt16.$,
            children: jsx(_$$N, {
              href: `/community/file/${e.templateId}`,
              newTab: !0,
              children: renderI18nText("browse_templates_modal.see_more_details_in_community")
            })
          })]
        }), jsx("div", {
          className: "browse_templates_modal_resource_preview--moreTemplatesHeader--Kz1a1 text--fontPos13--xW8hS text--_fontBase--QdLsd",
          children: renderI18nText("browse_templates_modal.more_templates_like_this")
        }), jsx("div", {
          className: "browse_templates_modal_resource_preview--moreTemplatesGrid--LqGIO",
          children: d.slice(0, 6).map(t => jsx(Pr, {
            hubFileId: t.id,
            templateInsertionLocation: e.templateInsertionLocation,
            onInsert: () => e.insertTemplate({
              type: _$$n.HubFile,
              template: t
            }),
            isInsertingTemplate: e.isInsertingTemplate,
            previewHubFile: () => e.selectTemplate(t.id)
          }, t.id))
        })]
      })]
    })]
  });
}
en.displayName = "BrowseTemplatesModalResourcePreview";
function eo({
  searchQuery: e,
  hubFileResultIds: t,
  isInsertingTemplate: r,
  onInsertTemplate: n,
  onPreviewHubFileTemplate: s
}) {
  let o = _$$tS();
  let l = useRef(null);
  let d = tS();
  let [c, u] = useState(!d);
  let {
    templates,
    requestLoadMore,
    isLoading
  } = Ou(e, d, FFileType.WHITEBOARD);
  useEffect(() => {
    u(!d);
    "function" == typeof l.current?.scroll && l.current.scroll({
      top: 0,
      behavior: "smooth"
    });
  }, [e, d]);
  let g = `/community/search?resource_type=files&editor_type=figjam&query=${e}`;
  return 0 !== t.length || 0 !== templates.length || isLoading ? isLoading && 0 === templates.length ? jsx(Cm, {}) : jsxs("section", {
    className: _$$s.wFull.p24.overflowYScroll.$,
    ref: l,
    children: [jsxs(iq, {
      children: [d && templates.map(e => jsx(AF, {
        template: {
          template: e,
          type: _$$n.TeamTemplate
        },
        isInsertingTemplate: r(e.file_key),
        onInsert: () => n({
          template: e,
          type: _$$n.TeamTemplate
        })
      }, `team-template-${e.file_key}`)), c && t.map(e => jsx(Pr, {
        hubFileId: e,
        onInsert: n,
        isInsertingTemplate: r(e),
        previewHubFile: () => s(e)
      }, `hub-file-template-${e}`))]
    }), d && !isLoading && jsx(_$$a, {
      onIntersectionChange: ({
        isIntersecting: e
      }) => {
        e && !requestLoadMore() && u(!0);
      }
    }), !isLoading && jsx("div", {
      className: _$$s.mt24.$,
      children: jsx(tJ, {
        url: g,
        fileKey: o
      })
    })]
  }) : jsx(_3, {
    illustration: _$$A,
    resourceTypeDisplayString: "templates",
    query: e,
    cta: jsx(_$$N.Button, {
      href: g,
      newTab: !0,
      variant: "secondary",
      children: renderI18nText("browse_templates_modal.browse_more_in_community")
    })
  });
}
function eu(e) {
  return jsx(Y9, {
    children: e.previewTemplateId ? jsx(_$$K, {
      "aria-label": getI18nString("general.back"),
      onClick: e.goBack,
      children: jsx(_$$C, {})
    }) : jsx(IW, {
      query: e.searchQuery,
      clearSearch: () => e.setSearchQuery(""),
      onChange: e.setSearchQuery,
      className: ON,
      placeholder: getI18nString("browse_templates_modal.search_templates"),
      focusOnMount: !0
    })
  });
}
eu.displayString = "BrowseTemplatesModalTopBar";
function em(e) {
  let t;
  let {
    onTemplateInsertedCurrentFile,
    onTemplateInsertedNewFile,
    onClose
  } = e;
  let u = useRef(null);
  let {
    templates,
    categoryTitles,
    duplicateFile,
    fileKey,
    searchQuery,
    searchTemplatesResult,
    setSearchQuery,
    categoryIds,
    subcategories
  } = bg({
    source: "browse-templates-modal"
  });
  let {
    templates: _templates,
    categoryIds: _categoryIds
  } = bg({
    templatesShelfType: cS.FIGJAM_SIMPLE_TEMPLATES_PICKER
  });
  let L = {
    ..._templates,
    ...templates
  };
  let P = Gi();
  let D = {};
  _categoryIds.reduce((e, t) => (e[t] = getI18nString("browse_templates_modal_sidebar.get_started"), e), D);
  let k = {
    ...categoryTitles,
    ...D
  };
  let [M, U] = useState();
  let [G, V] = useState();
  let H = isEmptyObject(L);
  let W = M && Object.values(L).find(e => e.includes(M)) || [];
  let {
    insertTemplate,
    isInsertingTemplate
  } = Fz();
  let $ = useSelector(e => M ? e.hubFiles[M] : null);
  let X = useCallback(() => {
    onTemplateInsertedCurrentFile ? onTemplateInsertedCurrentFile() : onClose();
  }, [onTemplateInsertedCurrentFile, onClose]);
  useEffect(() => {
    let t = categoryIds.filter(t => categoryTitles[t] === e.initiallySelectedCategoryTitle);
    1 === t.length && V(t[0]);
  }, [categoryIds, categoryTitles, e.initiallySelectedCategoryTitle]);
  useEffect(() => {
    u.current?.scrollTo(0, 0);
    M && $ && _$$_("resource_previewed", {
      fileKey,
      resourceType: "template",
      resourceName: a6($).name,
      resourceId: M,
      triggeredFrom: "browse-templates-modal",
      templateType: _$$n.HubFile
    });
  }, [M, fileKey, $]);
  let q = !searchQuery;
  let J = b4();
  let Z = WS();
  let Q = e => isInsertingTemplate(e) || Z(e);
  let ee = t => {
    if (e.templateInsertionLocation === RD.CURRENT_FILE) insertTemplate({
      template: t,
      onSuccess: X,
      triggeredFrom: "browse-templates-modal"
    });else {
      switch (t.type) {
        case _$$n.HubFile:
          duplicateFile(t.template.id);
          break;
        case _$$n.TeamTemplate:
          J({
            templateIdentifier: {
              type: vt.TeamTemplate,
              file_key: t.template.file_key
            },
            templateName: t.template.name,
            openInNewTab: !0
          });
          break;
        case _$$n.TeamTemplateLg:
          J({
            templateIdentifier: {
              type: vt.TeamTemplate,
              file_key: t.template.fileKey
            },
            templateName: t.template.name,
            openInNewTab: !0
          });
          break;
        default:
          throwTypeError(t);
      }
      onTemplateInsertedNewFile?.();
    }
  };
  if (M) {
    t = jsx(en, {
      templateId: M,
      templateInsertionLocation: e.templateInsertionLocation,
      insertTemplate: ee,
      isInsertingTemplate: Q(M),
      moreTemplateIds: W,
      selectTemplate: U
    });
    q = !1;
  } else if (searchQuery) t = jsx(eo, {
    searchQuery,
    hubFileResultIds: searchTemplatesResult,
    isInsertingTemplate: Q,
    onInsertTemplate: ee,
    onPreviewHubFileTemplate: U
  });else if (G === j) switch (P?.type) {
    case "org":
      t = jsx(yB, {
        insertTemplate: ee,
        isInsertingTemplate: Q,
        templateInsertionLocation: e.templateInsertionLocation
      });
      break;
    case "team":
      t = jsx(_$$z, {
        teamId: P.entity.id,
        teamName: P.name,
        onInsert: ee,
        isInsertingTemplate: Q,
        templateInsertionLocation: e.templateInsertionLocation
      });
      break;
    default:
      t = jsx(Fragment, {});
  } else t = H ? jsx(Fragment, {}) : jsx(z, {
    categoryIds,
    categoryTitles: k,
    enterCommunityUrl: "/community/figjam",
    isInsertingTemplate: Q,
    onInsertTemplate: ee,
    previewHubFile: U,
    selectCategory: V,
    selectedCategory: G,
    templateInsertionLocation: e.templateInsertionLocation,
    templates: L
  });
  return jsxs(Wk, {
    className: h()({
      [hW]: "newFile" === e.triggeredFrom
    }),
    children: [jsx(eu, {
      searchQuery,
      setSearchQuery,
      previewTemplateId: M,
      goBack: () => U(void 0)
    }), jsxs("div", {
      className: jE,
      ref: u,
      children: [q && jsx(B, {
        categoryIds,
        categoryTitles: k,
        selectedCategory: G,
        selectCategory: V,
        makeSomethingCategoryId: _categoryIds[0] ?? "",
        triggeredFrom: e.triggeredFrom,
        subcategories
      }), t]
    })]
  });
}
function eg(e) {
  let {
    properties,
    name
  } = j6();
  let {
    onClose
  } = e;
  let s = useCallback(() => {
    onClose();
    Cu({
      ...properties,
      trackingContext: name,
      text: "Templates Close Button"
    });
  }, [properties, name, onClose]);
  let o = hS({
    ...e,
    onClose: s
  });
  return jsx(_$$J, {
    brand: "whiteboard",
    children: jsx(bL, {
      width: 888,
      manager: o,
      children: jsx(em, {
        ...e
      })
    })
  });
}
export let $$ef0 = registerModal(function (e) {
  let t = _$$tS();
  return jsx(fu, {
    name: "template_modal_shown",
    properties: {
      fileKey: t,
      source: e.triggeredFrom
    },
    children: jsx(eg, {
      ...e
    })
  });
}, "BrowseTemplatesModal");
export const PH = $$ef0;