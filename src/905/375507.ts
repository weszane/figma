import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { useMemo, createRef, PureComponent, useState, useCallback } from "react";
import { d4, wA } from "../vendor/514228";
import { hS } from "../905/437088";
import { bL } from "../905/38914";
import { vo, Y9, hE, nB, wi, jk } from "../figma_app/272243";
import { S as _$$S } from "../905/274480";
import { h as _$$h, J as _$$J } from "../905/270045";
import { $n } from "../905/521428";
import { e as _$$e } from "../905/149844";
import { sx } from "../905/449184";
import { ot } from "../905/165290";
import { Ax, Jt } from "../figma_app/616261";
import { uA } from "../figma_app/806412";
import { Yx } from "../figma_app/930338";
import { $z } from "../figma_app/617427";
import { t as _$$t, tx } from "../905/303541";
import { k as _$$k } from "../905/443820";
import { getFeatureFlags } from "../905/601108";
import { xx } from "../figma_app/815945";
import { IU } from "../figma_app/421401";
import { Ex, zE } from "../figma_app/919079";
import { R as _$$R } from "../905/307199";
import { gw, c$ } from "../figma_app/236327";
import { V as _$$V } from "../figma_app/312987";
import T, { N as _$$N } from "../905/551536";
import { y2, Lp } from "../figma_app/563413";
import { B as _$$B } from "../905/714743";
import { s as _$$s } from "../cssbuilder/589278";
import { Y as _$$Y } from "../905/830372";
import { $ as _$$$ } from "../905/355181";
import { p as _$$p } from "../905/597320";
import { b as _$$b } from "../905/168239";
import { K as _$$K } from "../905/628118";
import { X as _$$X, i } from "../905/784599";
import { z as _$$z } from "../figma_app/369596";
import { O as _$$O } from "../figma_app/809387";
import { J7, _d } from "../figma_app/650409";
import { Cj } from "../905/270084";
import { hP } from "../figma_app/527041";
import { A as _$$A } from "../6828/493300";
import { sf } from "../905/929976";
import { to, Lo } from "../905/156213";
import { oN } from "../905/777093";
import { FC } from "../figma_app/212807";
import { X as _$$X2 } from "../905/698965";
import { Ju } from "../905/102752";
import { A as _$$A2 } from "../svg/562672";
import { A as _$$A3 } from "../svg/57540";
import { throwTypeError } from "../figma_app/465776";
import { K as _$$K2 } from "../905/443068";
import { o as _$$o } from "../905/821217";
import { J as _$$J2 } from "../905/614223";
import { Rs } from "../figma_app/288654";
import { P as _$$P } from "../905/347284";
import { UAQ, JM$ } from "../figma_app/43951";
import { g as _$$g } from "../905/763242";
import { Ib } from "../905/129884";
import { Hj, A3, FO } from "../905/682977";
import { A as _$$A4 } from "../svg/443105";
import { l as _$$l } from "../figma_app/121794";
function H(e) {
  let {
    dispatch,
    dropdownShown,
    getSearchFilteredFonts,
    setQuery,
    sharedFonts,
    orgId,
    onUploadClick,
    onShowDeleteFontsModal,
    query,
    uniqueResourceId
  } = e;
  let {
    sortedAndSearchFilteredFamilyNames,
    sortedAndSearchFilteredFamilyNamesToStyleNames
  } = getSearchFilteredFonts(uniqueResourceId);
  let h = e => {
    dispatch(_$$X.clearFontsToDelete());
    dispatch(_$$X.toggleFontsToDelete({
      fonts: e
    }));
    onShowDeleteFontsModal();
  };
  let g = xx(e => {
    let t = e[`org-${orgId}`];
    if (!t) return {};
    let i = {};
    for (let e of Object.keys(t)) for (let n of Object.keys(t[e])) if (sortedAndSearchFilteredFamilyNames.includes(e) && sortedAndSearchFilteredFamilyNamesToStyleNames[e].includes(n)) {
      let r = t[e][n];
      i[r.id] = r;
    }
    return i;
  });
  let f = (() => {
    let e = [];
    function r() {
      return jsx(Fragment, {
        children: "\u2013"
      });
    }
    e.push({
      name: _$$t("resources_tab.shared_fonts_table.font"),
      className: "shared_fonts_table--fontColumn--jxMk- shared_fonts_table--column--F0oIs table--column--974RA",
      getSortValue: e => e.sortValue,
      cellComponent: e => {
        if (e.isVariableFont) {
          let t = e.fontInfo.variationInstances?.map(e => e.name).join(", ") || "";
          let i = _$$t("resources_tab.shared_fonts_table.list_of_styles", {
            numberOfStyles: e.fontInfo.variationInstances?.length || 0,
            instancesString: t
          });
          return jsxs("div", {
            className: "shared_fonts_table--variableFontNameColumn--nG-Ca",
            children: [jsxs("div", {
              children: [jsx("span", {
                children: e.displayName
              }), jsx("span", {
                className: "shared_fonts_table--variableFontBadge--rKy2g",
                children: jsx(Ex, {
                  text: _$$t("resources_tab.shared_fonts_table.variable_font_badge"),
                  color: zE.INVERT
                })
              })]
            }), jsx("div", {
              children: jsx(_$$R, {
                text: i,
                className: "shared_fonts_table--variableFontInstances--1K1CG"
              })
            })]
          });
        }
        return jsx(_$$R, {
          text: e.displayName
        });
      }
    });
    e.push({
      name: _$$t("resources_tab.shared_fonts_table.version"),
      className: "shared_fonts_table--versionColumn--jXx5l shared_fonts_table--column--F0oIs table--column--974RA",
      cellComponent: e => e.fontInfo.version ? jsx(Fragment, {
        children: e.fontInfo.version
      }) : jsx(r, {})
    });
    e.push({
      name: _$$t("resources_tab.shared_fonts_table.sample"),
      className: "shared_fonts_table--sampleColumn--FrtoU shared_fonts_table--column--F0oIs table--column--974RA",
      cellComponent: e => jsx("img", {
        className: "shared_fonts_table--sample--l1Fio",
        src: e.fontInfo.sampleUrl,
        alt: ""
      })
    });
    e.push({
      name: "",
      className: "shared_fonts_table--iconColumn--e9Mer",
      cellComponent: function (e, r) {
        if (r) return jsx(Fragment, {});
        let a = `MENU_DROPDOWN-${e.displayName}`;
        let s = dropdownShown?.type === a;
        return jsxs(_$$V, {
          className: hP,
          dispatch,
          showingDropdown: s,
          type: a,
          hideChevron: !0,
          children: [jsx(_$$B, {
            svg: _$$A,
            className: "shared_fonts_table--menuIcon--jIy13"
          }), s && jsx(gw, {
            dispatch,
            className: "shared_fonts_table--dropdown---Uhz6",
            style: dropdownShown.data.position,
            children: jsx(c$, {
              onClick: () => h([e.fontInfo]),
              children: tx("resources_tab.shared_fonts_table.delete_font")
            })
          })]
        });
      }
    });
    return e;
  })();
  let [_, A, H] = _$$z({
    columnName: "Font",
    isReversed: !1
  }, (() => {
    let e = g(sharedFonts.fontsByResourceId);
    let t = [];
    for (let i of Object.values(e)) {
      let e = !!i.variationInstances;
      let n = `${i.family} ${i.style}`;
      t.push({
        fontInfo: i,
        displayName: n,
        sortValue: `${i.family} ${i.italic ? "italic" : ""} ${i.weight || 400}`,
        isVariableFont: e
      });
    }
    return t;
  })(), f);
  let W = jsx(_$$$, {
    variant: "primary",
    icon: "plus-32",
    onClick: onUploadClick,
    children: tx("resources_tab.shared_fonts_table.add_font")
  });
  return jsxs(Fragment, {
    children: [!getFeatureFlags().ff_a11y_page_tab_fix && jsxs(Fragment, {
      children: [jsx(_$$K, {
        title: _$$O(J7.RESOURCES)
      }), jsx(_$$b, {
        tab: J7.RESOURCES,
        selectedSecondaryTab: _d.SHARED_FONTS,
        rightActions: W
      })]
    }), e.isLoading ? jsx("div", {
      className: _$$s.wFull.hFull.flex.flexRow.justifyCenter.itemsCenter.$,
      children: jsx(_$$k, {})
    }) : jsx(Cj, {
      actionBar: e => {
        if (0 === e.length) return jsx(Fragment, {});
        let t = e.map(e => e.fontInfo);
        return jsx(IU, {
          onClick: () => h(t),
          label: _$$t("resources_tab.shared_fonts_table.bulk_delete_fonts", {
            selectedFontsCount: e.length
          })
        });
      },
      columns: f,
      emptyContent: jsx(_$$p, {
        children: query ? tx("resources_tab.shared_fonts_table.no_fonts_match_your_search_query", {
          uploadFontsLink: jsx(_$$N, {
            onClick: onUploadClick,
            trusted: !0,
            className: _$$s.ml4.$,
            children: tx("resources_tab.shared_fonts_table.embedded_upload_fonts_link")
          })
        }) : jsxs(_$$Y, {
          spacing: 4,
          children: [jsx("span", {
            children: tx("resources_tab.shared_fonts_table.no_shared_fonts_yet")
          }), jsx(_$$N, {
            onClick: onUploadClick,
            trusted: !0,
            children: tx("resources_tab.shared_fonts_table.upload_fonts_link")
          })]
        })
      }),
      getItemKey: e => e.fontInfo.id,
      hasNewScrollContext: !0,
      itemTypeContext: {
        itemType: "font",
        getSelectedCountString: e => _$$t("multi_select_list.selected_count_font", {
          numSelected: e
        })
      },
      items: H,
      onSetSortState: A,
      sortState: _,
      stickyContent: jsx("div", {
        className: _$$s.pt8.pb8.colorBorder.bSolid.bt1.bb1.wFull.$,
        children: jsx(y2, {
          onChange: setQuery,
          query,
          clearSearch: () => {
            setQuery("");
          },
          placeholder: _$$t("resources_tab.shared_fonts_table.search_fonts_placeholder_text_with_ellipsis")
        })
      })
    })]
  });
}
let X = "shared_fonts_collision--row--aaKwu";
let Q = "shared_fonts_collision--cell--v5Adk text--fontPos11--2LvXf text--_fontBase--QdLsd";
let J = "shared_fonts_collision--icon--v33wj";
let ee = "shared_fonts_collision--sectionTitle--f83zt shared_fonts_collision--cell--v5Adk text--fontPos11--2LvXf text--_fontBase--QdLsd";
function en(e) {
  return "style" === e.cellType ? jsx("div", {
    className: "shared_fonts_collision--bullet--ortUn",
    children: e.fontStyle
  }) : jsxs("div", {
    children: [e.fontFile.family, " ", e.fontFile.style, " ", ot(e.fontFile.version), e.fontFile.variation_axes && jsx(_$$B, {
      className: J,
      svg: _$$A2
    })]
  });
}
function er({
  data: e
}) {
  return jsxs("div", {
    className: X,
    children: [jsxs("div", {
      className: Q,
      children: [e.existingFontCellProps?.cellType === "style" && jsx(en, {
        cellType: "style",
        fontStyle: e.existingFontCellProps.fontStyle
      }), e.existingFontCellProps?.cellType === "file" && jsx(en, {
        cellType: "file",
        fontFile: e.existingFontCellProps.fontFile
      })]
    }), jsxs("div", {
      className: Q,
      children: [e.newFontCellProps?.cellType === "style" && jsx(en, {
        cellType: "style",
        fontStyle: e.newFontCellProps.fontStyle
      }), e.newFontCellProps?.cellType === "file" && jsx(en, {
        cellType: "file",
        fontFile: e.newFontCellProps.fontFile
      })]
    }), e.showArrow && jsx("div", {
      className: "shared_fonts_collision--arrow--Eetla text--fontPos11--2LvXf text--_fontBase--QdLsd"
    })]
  });
}
function ea(e) {
  return jsxs("div", {
    className: "shared_fonts_collision--banner--u1eeS",
    children: [jsx(_$$B, {
      className: J,
      svg: _$$A3
    }), jsx("div", {
      className: "shared_fonts_collision--content--cy2uM",
      children: e.children
    })]
  });
}
let es = (e, t) => e.existing.variation_instances ? e.existing.variation_instances.map(e => e.name).filter(e => !t.includes(e)) : [];
let eo = (e, t, i) => t.variation_instances ? e.existing.variation_instances ? e.existing.variation_instances.filter(e => i.includes(e.name)).map(e => ({
  existingFontCellProps: {
    cellType: "style",
    fontStyle: e.name
  },
  newFontCellProps: {
    cellType: "style",
    fontStyle: e.name
  },
  showArrow: !0
})) : [{
  existingFontCellProps: {
    cellType: "file",
    fontFile: e.existing
  },
  newFontCellProps: {
    cellType: "style",
    fontStyle: e.existing.style
  },
  showArrow: !0
}] : e.existing.variation_instances ? [{
  existingFontCellProps: {
    cellType: "style",
    fontStyle: t.style
  },
  newFontCellProps: {
    cellType: "file",
    fontFile: t
  },
  showArrow: !0
}] : [{
  existingFontCellProps: {
    cellType: "file",
    fontFile: e.existing
  },
  newFontCellProps: {
    cellType: "file",
    fontFile: t
  },
  showArrow: !0
}];
function el(e) {
  let t = e.overwritten_fonts.sort((e, t) => e.existing.style.localeCompare(t.existing.style)).sort((e, t) => +!!t.existing.variation_instances - +!!e.existing.variation_instances);
  let i = t.every(e => !!e.existing.variation_instances);
  let r = t.every(e => !e.existing.variation_instances);
  let a = e.uploaded;
  let s = !!a.variation_instances;
  let o = a.variation_instances ? a.variation_instances.map(e => e.name) : [a.style];
  let l = [];
  let d = [];
  let c = !1;
  for (let [e, i] of t.entries()) {
    if (0 === e && a.variation_instances) {
      if (i.existing.variation_instances) {
        d.push(...es(i, o));
        let e = 1 === t.length && 0 === d.length;
        if (l.push({
          existingFontCellProps: {
            cellType: "file",
            fontFile: i.existing
          },
          newFontCellProps: {
            cellType: "file",
            fontFile: a
          },
          showArrow: e
        }), e) continue;
      } else l.push({
        existingFontCellProps: void 0,
        newFontCellProps: {
          cellType: "file",
          fontFile: a
        }
      });
    } else i.existing.variation_instances && (d.push(...es(i, o)), l.push({
      existingFontCellProps: {
        cellType: "file",
        fontFile: i.existing
      },
      newFontCellProps: void 0
    }), a.variation_instances || (c = !0));
    l.push(...eo(i, a, o));
  }
  return jsxs("div", {
    className: "shared_fonts_collision--container--jaZWs",
    children: [s ? i ? tx("design_systems.shared_fonts.replace_warning_new_variable_font_all_collsions_variable", {
      numCollisions: t.length
    }) : r ? tx("design_systems.shared_fonts.replace_warning_new_variable_font_all_collisions_non_variable", {
      numCollisions: t.length
    }) : tx("design_systems.shared_fonts.replace_warning_new_variable_font", {
      numCollisions: t.length
    }) : r ? tx("design_systems.shared_fonts.replace_warning", {
      numCollisions: t.length
    }) : tx("design_systems.shared_fonts.replace_warning_not_all_collsions_variable", {
      numCollisions: t.length
    }), jsxs("div", {
      className: "shared_fonts_collision--table--PopGY",
      children: [jsxs("div", {
        className: X,
        children: [jsx("div", {
          className: ee,
          children: tx("design_systems.shared_fonts.existing_fonts")
        }), jsx("div", {
          className: ee,
          children: tx("design_systems.shared_fonts.new_font")
        })]
      }), l.map((e, t) => jsx(er, {
        data: e
      }, t))]
    }), 0 !== d.length && jsxs(ea, {
      children: [tx("design_systems.shared_fonts.some_of_the_existing_styles_will_become_unavailable"), " ", d.map(e => `${a.family} ${e}`).join(", ")]
    }), c && jsx(ea, {
      children: tx("design_systems.shared_fonts.replace_variable_font_error")
    })]
  });
}
let ey = "shared_fonts_modal_content--container--xkQnG";
let eb = "shared_fonts_modal_content--scrollContainer--GYsu9 shared_fonts--scrollContainer--qJLhc";
let ev = "shared_fonts_modal_content--column--Tj43z shared_fonts--column--bUnQT table--column--974RA";
let eI = "shared_fonts_modal_content--actionColumn--NUqAH table--column--974RA";
let eE = "shared_fonts_modal_content--familyColumn--1WO5I shared_fonts--familyColumn--7PnCb shared_fonts--column--bUnQT table--column--974RA";
let ex = "shared_fonts_modal_content--row--YRehx shared_fonts--row--qJMqt multi_select_list--row--nfio-";
let eS = "shared_fonts_modal_content--headerRow--JYl5b multi_select_list--headerRow--22Lao shared_fonts_modal_content--row--YRehx shared_fonts--row--qJMqt multi_select_list--row--nfio-";
let ew = "shared_fonts_modal_content--errorColumnFile--3Jyxz";
let eC = "shared_fonts_modal_content--errorColumnMessage--Sgi77";
let eT = "shared_fonts_modal_content--footer--LgL5o";
function eR(e) {
  let {
    fontLoadPromise,
    dispatch,
    getSortedAndSearchFilteredFonts,
    onClearFontUploadResults,
    onDismissUploadErrors,
    onFontListScroll,
    onFontListCanScrollChange,
    onReviewUploadErrors,
    onToggleCheckFont,
    onUploadClick,
    onShowDeleteFontsModal,
    onViewOrgFontsClick,
    org,
    orgById,
    orgFonts,
    query,
    resourceType,
    resourceId,
    setQuery,
    sharedFonts,
    shouldShowFooterBorder,
    shouldShowUploadErrors,
    teams,
    toggleCheckAllFontIDs,
    width,
    uniqueResourceId
  } = e;
  let F = Rs(UAQ, {
    teamId: resourceId
  }, {
    enabled: "team" === resourceType
  });
  let M = Rs(JM$, {
    orgId: resourceId
  }, {
    enabled: "org" === resourceType
  });
  let j = useMemo(() => "team" === resourceType ? !!F.data?.team?.canAdmin : "org" === resourceType ? !!M.data?.org?.canAdmin : void throwTypeError(resourceType), [F, M, resourceType]);
  let U = (e, t, r) => {
    let s = sharedFonts.fontsByResourceId[e];
    if (!s) return [];
    let o = [];
    let {
      sortedAndSearchFilteredFamilyNames,
      sortedAndSearchFilteredFamilyNamesToStyleNames
    } = getSortedAndSearchFilteredFonts(e);
    for (let a of sortedAndSearchFilteredFamilyNames) for (let l of sortedAndSearchFilteredFamilyNamesToStyleNames[a]) {
      let d = s[a][l];
      let c = !!(r && r[a] && r[a][l]);
      o.push(jsx(eN, {
        canCheck: t,
        dispatch,
        fontInfo: d,
        handleToggleCheck: onToggleCheckFont,
        isChecked: d.id in sharedFonts.fontsToDelete,
        isOverridden: c,
        orgById,
        shouldShowCheckbox: Object.keys(sharedFonts.fontsToDelete).length > 0,
        teams
      }, `${a}-${l}-${e}`));
    }
    return o;
  };
  let B = createRef();
  if (shouldShowUploadErrors) return jsxs("div", {
    className: ey,
    children: [jsxs(_$$P, {
      width,
      className: eb,
      children: [jsxs(Hj, {
        header: !0,
        className: eS,
        children: [jsx(A3, {
          className: ew,
          children: tx("design_systems.shared_fonts.error_table_header_file")
        }), jsx(A3, {
          className: eC,
          children: tx("design_systems.shared_fonts.error_table_header_error")
        })]
      }), sharedFonts.unsuccessfulUploads.map(e => jsxs(Hj, {
        className: ex,
        children: [jsx("div", {
          className: ew,
          children: jsx(_$$R, {
            text: e.filename
          })
        }), jsx("div", {
          className: eC,
          children: _$$g(e.status)
        })]
      }, e.filename))]
    }), jsx("div", {
      className: "shared_fonts_modal_content--errorActionContainer--aZAOx shared_fonts_modal_content--footer--LgL5o",
      children: jsx($n, {
        onClick: onDismissUploadErrors,
        children: tx("design_systems.shared_fonts.dismiss_errors")
      })
    })]
  });
  let {
    uploadsRemaining
  } = T;
  let G = (() => {
    let {
      fontsByResourceId
    } = e.sharedFonts;
    if (!fontsByResourceId[uniqueResourceId]) return [];
    if ("org" === resourceType) return U(uniqueResourceId, j);
    {
      let e = teams[resourceId].org_id;
      return U(uniqueResourceId, j, fontsByResourceId[`org-${e}`]);
    }
  })();
  let z = !fontLoadPromise && 0 === G.length && !query;
  return jsxs("div", {
    className: ey,
    children: [jsx("div", {
      className: "shared_fonts_modal_content--searchContainer--WEi4- modal--searchContainer--EA8ib",
      children: jsx(Lp, {
        focusOnMount: !0,
        extraSpacing: !0,
        query,
        clearSearch: () => setQuery(""),
        onChange: setQuery
      })
    }), jsxs("div", {
      className: z ? "shared_fonts_modal_content--fontsContainer--Oj-o3" : "shared_fonts_modal_content--fontsContainerWithFooter--HaBIH shared_fonts_modal_content--fontsContainer--Oj-o3",
      children: [jsxs(Hj, {
        header: !0,
        className: eS,
        children: [jsx(A3, {
          className: eI,
          children: j && jsx(_$$S, {
            label: jsx(_$$h, {
              children: tx("design_systems.shared_fonts.checkbox_select_all_fonts")
            }),
            checked: Object.keys(sharedFonts.fontsToDelete).length > 0,
            onChange: toggleCheckAllFontIDs
          })
        }), jsx(A3, {
          className: eE,
          children: tx("design_systems.shared_fonts.font")
        }), jsx(A3, {
          className: ev,
          children: tx("design_systems.shared_fonts.version")
        }), jsx(A3, {
          className: ev,
          children: tx("design_systems.shared_fonts.sample")
        }), jsx(A3, {
          className: eI,
          children: j && jsx(_$$K2, {
            "aria-label": _$$t("design_systems.shared_fonts.upload_new_shared_font"),
            onClick: onUploadClick,
            htmlAttributes: {
              "data-tooltip-type": Ib.TEXT,
              "data-tooltip": _$$t("design_systems.shared_fonts.upload_new_shared_font")
            },
            children: jsx(_$$e, {})
          })
        })]
      }), z ? (() => {
        let e = null;
        let t = null;
        let i = 0;
        orgFonts && Object.keys(orgFonts).forEach(e => {
          i += Object.keys(orgFonts[e]).length;
        });
        "team" === resourceType ? j ? e = _$$t("design_systems.shared_fonts.upload_fonts_you_own_to_share_with_your_team") : (e = _$$t("design_systems.shared_fonts.no_fonts_have_been_uploaded_to_this_team"), t = _$$t("design_systems.shared_fonts.only_team_admins_have_permission_to_upload_fonts")) : j ? e = _$$t("design_systems.shared_fonts.upload_fonts_you_own_to_share_with_your_organization") : (e = _$$t("design_systems.shared_fonts.no_fonts_have_been_uploaded_to_this_organization"), t = _$$t("design_systems.shared_fonts.only_organization_admins_have_permission_to_upload_fonts"));
        let r = "team" === resourceType && i > 0;
        return jsxs("div", {
          className: "shared_fonts_modal_content--nullContainer--Z5Kga",
          children: [jsxs("div", {
            className: "shared_fonts_modal_content--nullMessagesContainer--VFsR-",
            children: [e && jsx("div", {
              className: "shared_fonts_modal_content--primaryNullMessage--nM-FW",
              children: e
            }), t && jsx("div", {
              children: t
            }), org && r && jsx("div", {
              className: j ? "shared_fonts_modal_content--orgNullMessageAdmin--gKbAY" : "shared_fonts_modal_content--orgNullMessage--8FdUD shared_fonts_modal_content--orgNullMessageAdmin--gKbAY",
              children: tx("design_systems.shared_fonts.view_shared_fonts_from_organization", {
                action: jsx($n, {
                  variant: "link",
                  onClick: onViewOrgFontsClick,
                  children: tx("design_systems.shared_fonts.view_shared_fonts_from_organization_action", {
                    numOrgFonts: i
                  })
                }),
                orgName: org.name
              })
            })]
          }), j && jsx($n, {
            onClick: onUploadClick,
            children: tx("design_systems.shared_fonts.upload_fonts")
          })]
        });
      })() : jsxs(Fragment, {
        children: [jsxs(_$$P, {
          width,
          className: eb,
          onScroll: onFontListScroll,
          onCanScrollChange: onFontListCanScrollChange,
          children: [fontLoadPromise && jsx(FO, {}), Object.keys(uploadsRemaining).sort().map((e, t) => {
            let i = sharedFonts.uploadsRemaining[e];
            return jsxs(Hj, {
              className: ex,
              children: [jsx("div", {
                className: eI
              }), jsxs("div", {
                className: "shared_fonts_modal_content--uploadInProgress--m2pgq",
                ref: 0 === t ? B : void 0,
                children: [jsx(_$$R, {
                  text: i.file.name
                }), jsx("div", {
                  className: "shared_fonts_modal_content--uploadIndicator--6Vgje",
                  style: {
                    width: `${100 * i.progress}%`
                  }
                })]
              }), jsx("div", {
                className: eI
              })]
            }, e);
          }), G.length > 0 && G, 0 === G.length && query && jsx("div", {
            className: "shared_fonts_modal_content--noSearchResultsInfo--K25Iw",
            children: tx("design_systems.shared_fonts.no_results_for_query", {
              query
            })
          })]
        }, "shared-fonts-scroll-container"), fontLoadPromise ? null : jsxs(Fragment, {
          children: [jsx("div", {
            className: shouldShowFooterBorder ? "shared_fonts_modal_content--footerBorder--YO-59" : "shared_fonts_modal_content--footerBorderInvisible--6-TY1"
          }, "footer-border"), Object.keys(sharedFonts.fontsToDelete).length > 0 ? (() => {
            let e = Object.keys(sharedFonts.fontsToDelete).length;
            return jsxs("div", {
              className: eT,
              children: [jsx("span", {
                children: tx("design_systems.shared_fonts.num_fonts_selected", {
                  numFontsSelected: e
                })
              }), jsx($n, {
                variant: "secondary",
                onClick: onShowDeleteFontsModal,
                children: tx("design_systems.shared_fonts.delete")
              })]
            }, "shared-fonts-delete-footer");
          })() : (() => {
            let e = jsx("div", {});
            if ("team" === resourceType && org && orgFonts && Object.keys(orgFonts).length > 0) {
              let t = 0;
              Object.keys(orgFonts).forEach(e => {
                t += Object.keys(orgFonts[e]).length;
              });
              e = jsx("div", {
                children: jsx("div", {
                  className: "shared_fonts_modal_content--uploadFooterMessage--fYOc9",
                  children: tx("design_systems.shared_fonts.upload_footer_message", {
                    linkText: jsx($n, {
                      variant: "link",
                      onClick: onViewOrgFontsClick,
                      children: tx("design_systems.shared_fonts.upload_footer_message_link", {
                        numFonts: t
                      })
                    }),
                    orgName: org.name
                  })
                })
              });
            }
            let t = j ? jsx($n, {
              onClick: onUploadClick,
              children: tx("design_systems.shared_fonts.upload_fonts")
            }) : null;
            return t || e ? jsxs("div", {
              className: eT,
              children: [e, t]
            }, "shared-fonts-upload-footer") : null;
          })()]
        })]
      })]
    }), (() => {
      let {
        uploadsLaunched,
        successfulUploads,
        unsuccessfulUploads
      } = sharedFonts;
      return 0 === uploadsLaunched ? null : uploadsLaunched - successfulUploads.length - unsuccessfulUploads.length > 0 ? jsx("div", {
        className: "shared_fonts_modal_content--progress--lTEJk shared_fonts_modal_content--footer--LgL5o",
        children: jsx("span", {
          children: tx("design_systems.shared_fonts.upload_progress", {
            current: successfulUploads.length + unsuccessfulUploads.length + 1,
            total: uploadsLaunched
          })
        })
      }) : 0 === unsuccessfulUploads.length ? null : jsxs("div", {
        className: "shared_fonts_modal_content--progressFailure--UbA63 shared_fonts_modal_content--progress--lTEJk shared_fonts_modal_content--footer--LgL5o",
        children: [jsx("span", {
          children: tx("design_systems.shared_fonts.import_complete_with_error_count", {
            numErrors: unsuccessfulUploads.length
          })
        }), jsx("div", {
          children: jsxs(_$$J2, {
            mode: "dark",
            children: [jsx($n, {
              onClick: onReviewUploadErrors,
              variant: "secondary",
              children: tx("design_systems.shared_fonts.import_complete_with_errors_review", {
                numErrors: unsuccessfulUploads.length
              })
            }), jsx($n, {
              onClick: onClearFontUploadResults,
              variant: "secondary",
              children: tx("design_systems.shared_fonts.import_complete_with_errors_ok")
            })]
          })
        })]
      });
    })()]
  });
}
class eN extends PureComponent {
  constructor() {
    super(...arguments);
    this.handleRowClick = e => {
      this.props.handleToggleCheck(this.props.fontInfo);
      e.stopPropagation();
    };
    this.handleCheck = e => {
      this.props.handleToggleCheck(this.props.fontInfo);
      e.stopPropagation();
    };
    this.handleCheckboxClick = e => {
      e.stopPropagation();
    };
  }
  renderFontDisplayName() {
    let e = this.props.fontInfo;
    return e.variationInstances ? jsxs("div", {
      className: "shared_fonts_modal_content--variableFontNameColumn--E70jY",
      children: [jsxs("div", {
        children: [tx("design_systems.shared_fonts.font_family_and_style", {
          fontFamily: e.family,
          fontStyle: e.style
        }), jsx("span", {
          className: "shared_fonts_modal_content--variableFontBadge---whIx",
          children: jsx(Ex, {
            text: _$$t("design_systems.shared_fonts.variable"),
            color: zE.INVERT
          })
        })]
      }), jsx("div", {
        children: jsx(_$$R, {
          text: _$$t("design_systems.shared_fonts.list_of_variations_for_font", {
            numVariations: e.variationInstances.length,
            listOfVariations: Yx(e.variationInstances.map(e => e.name))
          }),
          className: "shared_fonts_modal_content--variableFontInstances--nee-z"
        })
      })]
    }) : jsx(_$$R, {
      text: `${e.family} ${e.style}`
    });
  }
  render() {
    let {
      version,
      sampleUrl
    } = this.props.fontInfo;
    return jsxs(Hj, {
      className: this.props.isOverridden ? "shared_fonts_modal_content--rowInactive--MdqXa shared_fonts_modal_content--row--YRehx shared_fonts--row--qJMqt multi_select_list--row--nfio-" : ex,
      onClick: this.props.canCheck ? this.handleRowClick : void 0,
      children: [jsx("div", {
        className: this.props.shouldShowCheckbox ? eI : "shared_fonts_modal_content--actionColumnInactive--kFWMk shared_fonts_modal_content--actionColumn--NUqAH table--column--974RA",
        children: this.props.canCheck && jsx(_$$o, {
          eventListeners: ["onClick"],
          children: jsx(_$$S, {
            label: jsx(_$$h, {
              children: tx("design_systems.shared_fonts.checkbox_select_font")
            }),
            checked: this.props.isChecked,
            onChange: (e, {
              event: t
            }) => this.handleCheck(t)
          })
        })
      }), jsx("div", {
        className: eE,
        children: this.renderFontDisplayName()
      }), jsx("div", {
        className: ev,
        children: version || "\u2014"
      }), jsx("div", {
        className: ev,
        children: jsx("img", {
          className: "shared_fonts_modal_content--sample--nSd3q",
          src: sampleUrl,
          alt: ""
        })
      }), jsx("div", {
        className: eI,
        children: this.props.isOverridden && jsx("div", {
          "data-tooltip-type": Ib.TEXT,
          "data-tooltip": _$$t("design_systems.shared_fonts.this_font_style_was_uploaded_to_your_organization_any_new_text_objects_will_use_the_organization_font"),
          children: jsx(_$$B, {
            svg: _$$A4
          })
        })
      })]
    });
  }
}
let eO = "shared_fonts--modalInfo--1Z1ZN";
let eD = "shared_fonts--checkboxControl--EvIzD";
let eL = "shared_fonts--familyColumn--7PnCb shared_fonts--column--bUnQT table--column--974RA";
let eF = "shared_fonts--dateColumn--tQtqD shared_fonts--column--bUnQT table--column--974RA";
let eM = class e extends uA {
  constructor(e) {
    super(e);
    this.fileInput = document.createElement("input");
    this.files = [];
    this.currentVisibleCollision = null;
    this.isShowingWarning = !1;
    this.handleFontListScroll = (e, t) => {
      this.setState({
        shouldShowFooterBorder: e + t.trackHeight !== t.scrollHeight
      });
    };
    this.handleFontListCanScrollChange = e => {
      this.setState({
        shouldShowFooterBorder: e
      });
    };
    this.resourceId = () => "team" === this.props.resourceType ? this.props.teamId : this.props.orgId;
    this.uniqueResourceId = () => `${this.props.resourceType}-${this.resourceId()}`;
    this.reviewUploadErrors = () => {
      this.setState({
        shouldShowUploadErrors: !0
      });
    };
    this.dismissUploadErrors = () => {
      this.props.dispatch(_$$X.clearFontUploadResults());
      this.setState({
        shouldShowUploadErrors: !1
      });
    };
    this.clearFontUploadResults = () => this.props.dispatch(_$$X.clearFontUploadResults());
    this.onUploadConfirm = () => {
      let {
        uploadsRemaining
      } = this.props.sharedFonts;
      0 === Object.keys(uploadsRemaining).length && this.clearFontUploadResults();
      let t = {};
      for (let e of this.files) t[i()] = e;
      this.fileInput.value = "";
      this.props.dispatch(_$$X.uploadFonts({
        fonts: t,
        resourceType: this.props.resourceType,
        resourceId: this.resourceId(),
        overwrite: !1
      }));
      this.resetUpload();
    };
    this.onUploadClick = () => {
      this.fileInput.click();
    };
    this.getOrgFontsForTeam = () => {
      if ("team" !== this.props.resourceType) return null;
      let e = this.getOrgForTeam();
      return e && this.props.sharedFonts.fontsByResourceId[`org-${e.id}`];
    };
    this.getSortedAndSearchFilteredFonts = e => {
      let t = [];
      let i = {};
      let n = this.props.sharedFonts.fontsByResourceId[e];
      if (!n) return {
        sortedAndSearchFilteredFamilyNames: t,
        sortedAndSearchFilteredFamilyNamesToStyleNames: i
      };
      if (this.state.query) {
        let e = new Ax(this.state.query);
        let r = [];
        for (let a in n) {
          let s = [];
          let o = e.matchAgainstText(a);
          for (let t in n[a]) {
            let i = e.matchAgainstText(`${a} ${t}`);
            if (i) {
              o || (o = new Jt(i.result, i.score, a));
              let e = new Jt(i.result, i.score, t);
              s.push(e);
            }
          }
          s.length > 0 ? (o ? r.push(o) : t.push(a), i[a] = s.sort((e, t) => t.score - e.score).map(e => e.text)) : o && (r.push(o), i[a] = Object.keys(n[a]).sort());
        }
        t = [...r.sort((e, t) => t.score - e.score).map(e => e.text), ...t];
      } else for (let e of t = Object.keys(n).sort()) i[e] = Object.keys(n[e]).sort(function (t, i) {
        let r = !!n[e][t].italic;
        let a = !!n[e][i].italic;
        return !r && a ? -1 : r && !a ? 1 : (n[e][t].weight || 400) - (n[e][i].weight || 400);
      });
      return {
        sortedAndSearchFilteredFamilyNames: t,
        sortedAndSearchFilteredFamilyNamesToStyleNames: i
      };
    };
    this.updateUploadRef = createRef();
    this.dismissWarning = () => {
      this.props.dispatch(_$$X.dismissFontWarning());
    };
    this.showDeleteFontsModal = () => {
      this.props.dispatch(to({
        type: eV,
        showModalsBeneath: !0
      }));
    };
    this.resetUpload = () => {
      this.files = [];
      this.setState({
        shouldShowLicenseModal: !1
      });
    };
    this.toggleCheckAllFontIDs = () => {
      let e = this.props.sharedFonts.fontsByResourceId[this.uniqueResourceId()];
      let {
        sortedAndSearchFilteredFamilyNames,
        sortedAndSearchFilteredFamilyNamesToStyleNames
      } = this.getSortedAndSearchFilteredFonts(this.uniqueResourceId());
      let n = [];
      for (let r of sortedAndSearchFilteredFamilyNames) for (let t of sortedAndSearchFilteredFamilyNamesToStyleNames[r]) n.push(e[r][t]);
      this.props.dispatch(_$$X.toggleFontsToDelete({
        fonts: n,
        checked: Object.keys(this.props.sharedFonts.fontsToDelete).length < n.length
      }));
    };
    this.toggleCheckFont = e => {
      this.props.dispatch(_$$X.toggleFontsToDelete({
        fonts: [e]
      }));
    };
    this.onSearchQueryChange = e => {
      this.setState({
        query: e
      });
    };
    this.onViewOrgFontsClick = () => {
      let e = this.getOrgForTeam();
      e && ("team" === this.props.resourceType && this.props.canAdminOrg ? this.props.dispatch(sf({
        view: "orgAdminSettings",
        orgAdminSettingsViewTab: J7.RESOURCES,
        orgAdminSettingsViewSecondaryTab: _d.SHARED_FONTS
      })) : this.props.dispatch(sf({
        view: "org",
        orgId: e.id,
        orgViewTab: _$$X2.FONTS
      })));
    };
    this.renderUploadModal = () => jsx(_$$l, {
      checkboxText: _$$t("design_systems.shared_fonts.i_own_the_fonts_i_am_uploading_or_have_the_right_to_distribute_copies_to_others_and_to_authorize_the_use_of_copies_with_figma"),
      buttonText: _$$t("design_systems.shared_fonts.upload"),
      onConfirm: this.onUploadConfirm,
      onHide: this.resetUpload,
      hideCancelButton: !1,
      dispatch: this.props.dispatch,
      title: _$$t("design_systems.shared_fonts.uploading_n_fonts", {
        numFonts: this.files.length
      })
    });
    this.fileInput.type = "file";
    this.fileInput.multiple = !0;
    this.fileInput.accept = "font/opentype,font/ttf,.otf,.ttf";
    this.fileInput.onchange = e => {
      this.files = e.target.files;
      this.setState({
        shouldShowLicenseModal: !0
      });
    };
    this.state = {
      shouldShowUploadErrors: e.sharedFonts.unsuccessfulUploads.length > 0,
      shouldShowLicenseModal: !1,
      query: "",
      shouldShowFooterBorder: !1
    };
  }
  componentDidMount() {
    this.props.onRightActionsChange?.(jsx($z, {
      variant: "primary",
      iconPrefix: jsx(_$$e, {}),
      onClick: this.onUploadClick,
      children: tx("resources_tab.shared_fonts_table.add_font")
    }));
  }
  componentDidUpdate(e) {
    let t = this.updateUploadRef.current;
    Object.keys(this.props.sharedFonts.uploadsRemaining).length > 0 && 0 === Object.keys(e.sharedFonts.uploadsRemaining).length && t && t.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
    let i = this.props.sharedFonts.collisions[0];
    i && this.currentVisibleCollision !== i && (this.currentVisibleCollision = i, i.overwritten_fonts?.length ? this.props.dispatch(to({
      type: eU,
      data: {
        collision: i,
        overwrittenFonts: i.overwritten_fonts,
        resourceType: this.props.resourceType,
        resourceId: this.resourceId(),
        onCollisionResolved: () => {
          this.currentVisibleCollision = null;
        }
      },
      showModalsBeneath: !0
    })) : i.existing && this.props.dispatch(to({
      type: eG,
      data: {
        collision: i,
        existing: i.existing,
        resourceType: this.props.resourceType,
        resourceId: this.resourceId(),
        onCollisionResolved: () => {
          this.currentVisibleCollision = null;
        }
      },
      showModalsBeneath: !0
    })));
    let n = this.props.sharedFonts.warnings[0];
    !this.isShowingWarning && !this.currentVisibleCollision && n && n.collisions.filter(e => e.teamId && this.props.permissionsState.teams[e.teamId]).map(e => this.props.permissionsState.teams[e.teamId]).map(e => e.name).length && (this.isShowingWarning = !0, this.props.dispatch(to({
      type: eB,
      data: {
        onWarningDismissed: () => {
          this.isShowingWarning = !1;
        }
      },
      showModalsBeneath: !0
    })));
  }
  componentWillUnmount() {
    this.props.dispatch(_$$X.clearFontsToDelete());
  }
  static loadSharedFonts(t) {
    e.fontLoadPromise || e.loadedFonts || (e.fontLoadPromise = oN(), e.fontLoadPromise.then(i => {
      t(_$$X.updateSharedFontList(i));
      e.fontLoadPromise = null;
      e.loadedFonts = !0;
    }));
  }
  getOrgForTeam() {
    if (!this.props.permissionsState.teams[this.resourceId()]) return null;
    let e = this.props.permissionsState.teams[this.resourceId()].org_id;
    return e ? this.props.permissionsState.orgById[e] : null;
  }
  renderContent() {
    return this.props.useModalViewComponent ? jsx(eR, {
      dispatch: this.props.dispatch,
      fontLoadPromise: e.fontLoadPromise,
      getSortedAndSearchFilteredFonts: this.getSortedAndSearchFilteredFonts,
      onClearFontUploadResults: this.clearFontUploadResults,
      onDismissUploadErrors: this.dismissUploadErrors,
      onFontListCanScrollChange: this.handleFontListCanScrollChange,
      onFontListScroll: this.handleFontListScroll,
      onReviewUploadErrors: this.reviewUploadErrors,
      onShowDeleteFontsModal: this.showDeleteFontsModal,
      onToggleCheckFont: this.toggleCheckFont,
      onUploadClick: this.onUploadClick,
      onViewOrgFontsClick: this.onViewOrgFontsClick,
      org: this.getOrgForTeam(),
      orgById: this.props.permissionsState.orgById,
      orgFonts: this.getOrgFontsForTeam(),
      query: this.state.query,
      resourceId: this.resourceId(),
      resourceType: this.props.resourceType,
      setQuery: this.onSearchQueryChange,
      sharedFonts: this.props.sharedFonts,
      shouldShowFooterBorder: this.state.shouldShowFooterBorder,
      shouldShowUploadErrors: this.state.shouldShowUploadErrors,
      teams: this.props.permissionsState.teams,
      toggleCheckAllFontIDs: this.toggleCheckAllFontIDs,
      uniqueResourceId: this.uniqueResourceId(),
      width: this.props.width
    }) : jsx(H, {
      dispatch: this.props.dispatch,
      dropdownShown: this.props.dropdownShown,
      getSearchFilteredFonts: this.getSortedAndSearchFilteredFonts,
      isLoading: this.props.isLoading,
      onShowDeleteFontsModal: this.showDeleteFontsModal,
      onUploadClick: this.onUploadClick,
      orgId: this.props.orgId,
      query: this.state.query,
      setQuery: this.onSearchQueryChange,
      sharedFonts: this.props.sharedFonts,
      uniqueResourceId: this.uniqueResourceId()
    });
  }
  render() {
    return jsxs(Fragment, {
      children: [this.renderContent(), this.state.shouldShowLicenseModal && this.renderUploadModal()]
    });
  }
};
eM.displayName = "SharedFonts";
eM.fontLoadPromise = null;
eM.loadedFonts = !1;
let $$ej0 = eM;
let eU = Ju(function (e) {
  let t = hS({
    ...e,
    preventUserClose: !0
  });
  let {
    collision,
    overwrittenFonts,
    resourceType,
    resourceId,
    onCollisionResolved
  } = e;
  let [_, A] = useState(!1);
  let b = useCallback(() => {
    A(e => !e);
  }, [A]);
  let v = d4(e => e.sharedFonts);
  let I = wA();
  let E = useCallback(() => {
    (_ ? v.collisions : [v.collisions[0]]).forEach(() => {
      sx("shared_fonts_skip_collision");
      I(_$$X.dismissFontCollision());
    });
    onCollisionResolved();
    I(Lo());
  }, [_, v.collisions, I, onCollisionResolved]);
  let x = useCallback(() => {
    (_ ? v.collisions : [v.collisions[0]]).forEach(e => {
      I(_$$X.uploadFonts({
        fonts: {
          [i()]: e.file
        },
        resourceType,
        resourceId,
        overwrite: !0
      }));
      sx("shared_fonts_skip_collision");
      I(_$$X.dismissFontCollision());
    });
    onCollisionResolved();
    I(Lo());
  }, [_, v.collisions, I, resourceType, resourceId, onCollisionResolved]);
  return jsx(bL, {
    manager: t,
    width: "lg",
    children: jsxs(vo, {
      children: [jsx(Y9, {
        children: jsx(hE, {
          children: tx("design_systems.shared_fonts.replacing_fonts_modal_title")
        })
      }), jsx(nB, {
        children: jsx(el, {
          uploaded: collision.uploaded,
          overwritten_fonts: overwrittenFonts
        })
      }), jsxs(wi, {
        children: [jsx("div", {
          className: "shared_fonts--control--W-DlW",
          children: v.collisions.length > 1 && jsx("div", {
            className: eD,
            children: jsx(_$$S, {
              label: jsx(_$$J, {
                children: tx("design_systems.shared_fonts.apply_to_all_remaining_uploads", {
                  numRemainingUploads: v.collisions.length - 1
                })
              }),
              checked: _,
              onChange: b
            })
          })
        }), jsxs("div", {
          className: "shared_fonts--actions---ihpk",
          children: [jsx($n, {
            variant: "secondary",
            onClick: E,
            children: tx("design_systems.shared_fonts.don_t_replace")
          }), jsx($n, {
            onClick: x,
            children: tx("design_systems.shared_fonts.replace")
          })]
        })]
      })]
    })
  });
});
let eB = Ju(function (e) {
  let {
    onWarningDismissed
  } = e;
  let i = hS(e);
  let d = d4(e => e.sharedFonts);
  let c = FC();
  let p = d.warnings[0];
  let m = wA();
  let h = useCallback(() => {
    m(_$$X.dismissFontWarning());
    onWarningDismissed();
    m(Lo());
  }, [m, onWarningDismissed]);
  if (!p) return null;
  let g = p.collisions.filter(e => e.teamId && c.teams[e.teamId]).map(e => c.teams[e.teamId]).map(e => e.name);
  return g.length ? jsx(bL, {
    manager: i,
    width: "md",
    children: jsxs(vo, {
      children: [jsx(Y9, {
        children: jsx(hE, {
          children: tx("design_systems.shared_fonts.team_fonts_will_be_overridden")
        })
      }), jsxs(nB, {
        children: [jsx("div", {
          className: eO,
          children: tx("design_systems.shared_fonts.team_fonts_override_warning_1", {
            fontFamily: p.font.family,
            fontStyle: p.font.style,
            listOfTeams: Yx(g)
          })
        }), jsx("div", {
          className: eO,
          children: tx("design_systems.shared_fonts.team_fonts_override_warning_2")
        }), jsx("div", {
          className: eO,
          children: tx("design_systems.shared_fonts.team_fonts_override_warning_3")
        })]
      }), jsx(wi, {
        children: jsx(jk, {
          children: jsx($n, {
            onClick: h,
            children: tx("design_systems.shared_fonts.okay")
          })
        })
      })]
    })
  }) : null;
});
let eV = Ju(function (e) {
  let t = hS(e);
  let i = wA();
  let d = Object.keys(d4(e => e.sharedFonts).fontsToDelete).length;
  let c = useCallback(() => {
    i(_$$X.deleteFonts());
    i(Lo());
  }, [i]);
  let p = useCallback(() => {
    i(Lo());
  }, [i]);
  return jsx(bL, {
    manager: t,
    width: "md",
    children: jsxs(vo, {
      children: [jsx(Y9, {
        children: jsx(hE, {
          children: tx("design_systems.shared_fonts.confirm_delete")
        })
      }), jsx(nB, {
        children: tx("design_systems.shared_fonts.are_you_sure_you_want_to_delete", {
          numFonts: d
        })
      }), jsx(wi, {
        children: jsxs(jk, {
          children: [jsx($n, {
            variant: "secondary",
            onClick: p,
            children: tx("design_systems.shared_fonts.cancel")
          }), jsx($n, {
            onClick: c,
            children: tx("design_systems.shared_fonts.confirm")
          })]
        })
      })]
    })
  });
});
let eG = Ju(function (e) {
  let t = hS({
    ...e,
    preventUserClose: !0
  });
  let {
    collision,
    existing,
    resourceType,
    resourceId,
    onCollisionResolved
  } = e;
  let [A, b] = useState(!1);
  let v = useCallback(() => {
    b(e => !e);
  }, [b]);
  let I = d4(e => e.sharedFonts);
  let E = wA();
  let x = useCallback(() => {
    (A ? I.collisions : [I.collisions[0]]).forEach(() => {
      sx("shared_fonts_skip_collision");
      E(_$$X.dismissFontCollision());
    });
    onCollisionResolved();
    E(Lo());
  }, [A, I.collisions, E, onCollisionResolved]);
  let S = useCallback(() => {
    (A ? I.collisions : [I.collisions[0]]).forEach(e => {
      E(_$$X.uploadFonts({
        fonts: {
          [i()]: e.file
        },
        resourceType,
        resourceId,
        overwrite: !0
      }));
      sx("shared_fonts_skip_collision");
      E(_$$X.dismissFontCollision());
    });
    onCollisionResolved();
    E(Lo());
  }, [A, I.collisions, E, resourceType, resourceId, onCollisionResolved]);
  return jsx(bL, {
    manager: t,
    width: "lg",
    children: jsxs(vo, {
      children: [jsx(Y9, {
        children: jsx(hE, {
          children: tx("design_systems.shared_fonts.you_already_have_a_font_with_this_name")
        })
      }), jsxs(nB, {
        children: [jsxs(Hj, {
          className: "shared_fonts--existingRow--DA9eV shared_fonts--collisionRow--pNU7g shared_fonts--row--qJMqt multi_select_list--row--nfio-",
          children: [jsx("div", {
            className: eL,
            children: existing.version ? tx("design_systems.shared_fonts.family_info_with_version", {
              fontFamily: existing.family,
              fontStyle: existing.style,
              fontVersion: existing.version
            }) : tx("design_systems.shared_fonts.family_info_without_version", {
              fontFamily: existing.family,
              fontStyle: existing.style
            })
          }), jsx("div", {
            className: eF,
            children: existing.updatedAt && tx("design_systems.shared_fonts.updated_at_date", {
              updatedAt: new Date(existing.updatedAt)
            })
          })]
        }), jsxs(Hj, {
          className: "shared_fonts--collisionRow--pNU7g shared_fonts--row--qJMqt multi_select_list--row--nfio-",
          children: [jsx("div", {
            className: eL,
            children: collision.uploaded.version ? tx("design_systems.shared_fonts.family_info_with_version", {
              fontFamily: existing.family,
              fontStyle: existing.style,
              fontVersion: ot(collision.uploaded.version)
            }) : tx("design_systems.shared_fonts.family_info_without_version", {
              fontFamily: existing.family,
              fontStyle: existing.style
            })
          }), jsx("div", {
            className: eF,
            children: tx("design_systems.shared_fonts.just_now")
          })]
        }), I.collisions.length > 1 && jsx("div", {
          className: "shared_fonts--applyAll--44Pm2",
          children: jsx("div", {
            className: eD,
            children: jsx(_$$S, {
              label: jsx(_$$J, {
                children: tx("design_systems.shared_fonts.apply_to_all_remaining_uploads", {
                  numRemainingUploads: I.collisions.length
                })
              }),
              checked: A,
              onChange: v
            })
          })
        })]
      }), jsx(wi, {
        children: jsxs(jk, {
          children: [jsx($n, {
            variant: "secondary",
            onClick: x,
            children: tx("design_systems.shared_fonts.don_t_replace")
          }), jsx($n, {
            onClick: S,
            children: tx("design_systems.shared_fonts.replace")
          })]
        })
      })]
    })
  });
});
export const y = $$ej0;