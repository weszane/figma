import { createRef, PureComponent, useCallback, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Fragment, jsx, jsxs } from 'react/jsx-runtime';
import { ModalRootComponent } from '../905/38914';
import { registerModal } from '../905/102752';
import { KindEnum } from '../905/129884';
import { e as _$$e } from '../905/149844';
import { popModalStack, showModalHandler } from '../905/156213';
import { cleanFontVersion } from '../905/165290';
import { b as _$$b } from '../905/168239';
import { HiddenLabel, Label } from '../905/270045';
import { Cj } from '../905/270084';
import { Checkbox } from '../905/274480';
import { getI18nString, renderI18nText } from '../905/303541';
import { CenterTruncatedText } from '../905/307199';
import { RecordingScrollContainer } from '../905/347284';
import { $ as _$$$ } from '../905/355181';
import { useModalManager } from '../905/437088';
import { IconButton } from '../905/443068';
import { LoadingSpinner } from '../905/443820';
import { trackEventAnalytics } from '../905/449184';
import { AutoLayout } from '../905/470281';
import { Button } from '../905/521428';
import { BaseLinkComponent } from '../905/551536';
import { p as _$$p } from '../905/597320';
import { getFeatureFlags } from '../905/601108';
import { setupThemeContext } from '../905/614223';
import { K as _$$K } from '../905/628118';
import { HeaderCell, LoadingRow, TableRow } from '../905/682977';
import { navigationRoutes } from '../905/698965';
import { SvgComponent } from '../905/714743';
import { g as _$$g } from '../905/763242';
import { fetchSharedFonts } from '../905/777093';
import { generateUploadId, sharedFontActions } from '../905/784599';
import { EventShield } from '../905/821217';
import { selectViewAction } from '../905/929976';
import { A as SVG3 } from '../6828/493300';
import { cssBuilderInstance } from '../cssbuilder/589278';
import { SharedFontsModalOrgPermissions, SharedFontsModalTeamPermissions } from '../figma_app/43951';
import { l as _$$l } from '../figma_app/121794';
import { selectPermissionsState } from '../figma_app/212807';
import { c$, gw } from '../figma_app/236327';
import { DialogActionStrip, DialogBody, DialogContents, DialogFooter, DialogHeader, DialogTitle } from '../figma_app/272243';
import { useSubscription } from '../figma_app/288654';
import { V as _$$V } from '../figma_app/312987';
import { z as _$$z } from '../figma_app/369596';
import { IU } from '../figma_app/421401';
import { throwTypeError } from '../figma_app/465776';
import { hP } from '../figma_app/527041';
import { Lp, y2 } from '../figma_app/563413';
import { FuzzyMatcher, MatchResult } from '../figma_app/616261';
import { WithTrackedButton } from '../figma_app/617427';
import { DashboardSection, FigResourceType } from '../figma_app/650409';
import { getOrgAdminTabMessage } from '../figma_app/809387';
import { memoizeByArgs } from '../figma_app/815945';
import { RecordingComponent } from '../figma_app/878298';
import { Badge, BadgeColor } from '../figma_app/919079';
import { formatList } from '../figma_app/930338';
import { A as SVG } from '../svg/57540';
import { A as SVG2 } from '../svg/443105';
import { A as SVG1 } from '../svg/562672';
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
    dispatch(sharedFontActions.clearFontsToDelete());
    dispatch(sharedFontActions.toggleFontsToDelete({
      fonts: e
    }));
    onShowDeleteFontsModal();
  };
  let g = memoizeByArgs(e => {
    let t = e[`org-${orgId}`];
    if (!t) return {};
    let i = {};
    for (let e of Object.keys(t)) {
      for (let n of Object.keys(t[e])) {
        if (sortedAndSearchFilteredFamilyNames.includes(e) && sortedAndSearchFilteredFamilyNamesToStyleNames[e].includes(n)) {
          let r = t[e][n];
          i[r.id] = r;
        }
      }
    }
    return i;
  });
  let f = (() => {
    let e = [];
    function r() {
      return jsx(Fragment, {
        children: '\u2013'
      });
    }
    e.push({
      name: getI18nString('resources_tab.shared_fonts_table.font'),
      className: 'shared_fonts_table--fontColumn--jxMk- shared_fonts_table--column--F0oIs table--column--974RA',
      getSortValue: e => e.sortValue,
      cellComponent: e => {
        if (e.isVariableFont) {
          let t = e.fontInfo.variationInstances?.map(e => e.name).join(', ') || '';
          let i = getI18nString('resources_tab.shared_fonts_table.list_of_styles', {
            numberOfStyles: e.fontInfo.variationInstances?.length || 0,
            instancesString: t
          });
          return jsxs('div', {
            className: 'shared_fonts_table--variableFontNameColumn--nG-Ca',
            children: [jsxs('div', {
              children: [jsx('span', {
                children: e.displayName
              }), jsx('span', {
                className: 'shared_fonts_table--variableFontBadge--rKy2g',
                children: jsx(Badge, {
                  text: getI18nString('resources_tab.shared_fonts_table.variable_font_badge'),
                  color: BadgeColor.INVERT
                })
              })]
            }), jsx('div', {
              children: jsx(CenterTruncatedText, {
                text: i,
                className: 'shared_fonts_table--variableFontInstances--1K1CG'
              })
            })]
          });
        }
        return jsx(CenterTruncatedText, {
          text: e.displayName
        });
      }
    });
    e.push({
      name: getI18nString('resources_tab.shared_fonts_table.version'),
      className: 'shared_fonts_table--versionColumn--jXx5l shared_fonts_table--column--F0oIs table--column--974RA',
      cellComponent: e => e.fontInfo.version ? jsx(Fragment, {
        children: e.fontInfo.version
      }) : jsx(r, {})
    });
    e.push({
      name: getI18nString('resources_tab.shared_fonts_table.sample'),
      className: 'shared_fonts_table--sampleColumn--FrtoU shared_fonts_table--column--F0oIs table--column--974RA',
      cellComponent: e => jsx('img', {
        className: 'shared_fonts_table--sample--l1Fio',
        src: e.fontInfo.sampleUrl,
        alt: ''
      })
    });
    e.push({
      name: '',
      className: 'shared_fonts_table--iconColumn--e9Mer',
      cellComponent(e, r) {
        if (r) return jsx(Fragment, {});
        let a = `MENU_DROPDOWN-${e.displayName}`;
        let s = dropdownShown?.type === a;
        return jsxs(_$$V, {
          className: hP,
          dispatch,
          showingDropdown: s,
          type: a,
          hideChevron: !0,
          children: [jsx(SvgComponent, {
            svg: SVG3,
            className: 'shared_fonts_table--menuIcon--jIy13'
          }), s && jsx(gw, {
            dispatch,
            className: 'shared_fonts_table--dropdown---Uhz6',
            style: dropdownShown.data.position,
            children: jsx(c$, {
              onClick: () => h([e.fontInfo]),
              children: renderI18nText('resources_tab.shared_fonts_table.delete_font')
            })
          })]
        });
      }
    });
    return e;
  })();
  let [_, A, H] = _$$z({
    columnName: 'Font',
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
        sortValue: `${i.family} ${i.italic ? 'italic' : ''} ${i.weight || 400}`,
        isVariableFont: e
      });
    }
    return t;
  })(), f);
  let W = jsx(_$$$, {
    variant: 'primary',
    icon: 'plus-32',
    onClick: onUploadClick,
    children: renderI18nText('resources_tab.shared_fonts_table.add_font')
  });
  return jsxs(Fragment, {
    children: [!getFeatureFlags().ff_a11y_page_tab_fix && jsxs(Fragment, {
      children: [jsx(_$$K, {
        title: getOrgAdminTabMessage(DashboardSection.RESOURCES)
      }), jsx(_$$b, {
        tab: DashboardSection.RESOURCES,
        selectedSecondaryTab: FigResourceType.SHARED_FONTS,
        rightActions: W
      })]
    }), e.isLoading ? jsx('div', {
      className: cssBuilderInstance.wFull.hFull.flex.flexRow.justifyCenter.itemsCenter.$,
      children: jsx(LoadingSpinner, {})
    }) : jsx(Cj, {
      actionBar: e => {
        if (e.length === 0) return jsx(Fragment, {});
        let t = e.map(e => e.fontInfo);
        return jsx(IU, {
          onClick: () => h(t),
          label: getI18nString('resources_tab.shared_fonts_table.bulk_delete_fonts', {
            selectedFontsCount: e.length
          })
        });
      },
      columns: f,
      emptyContent: jsx(_$$p, {
        children: query ? renderI18nText('resources_tab.shared_fonts_table.no_fonts_match_your_search_query', {
          uploadFontsLink: jsx(BaseLinkComponent, {
            onClick: onUploadClick,
            trusted: !0,
            className: cssBuilderInstance.ml4.$,
            children: renderI18nText('resources_tab.shared_fonts_table.embedded_upload_fonts_link')
          })
        }) : jsxs(AutoLayout, {
          spacing: 4,
          children: [jsx('span', {
            children: renderI18nText('resources_tab.shared_fonts_table.no_shared_fonts_yet')
          }), jsx(BaseLinkComponent, {
            onClick: onUploadClick,
            trusted: !0,
            children: renderI18nText('resources_tab.shared_fonts_table.upload_fonts_link')
          })]
        })
      }),
      getItemKey: e => e.fontInfo.id,
      hasNewScrollContext: !0,
      itemTypeContext: {
        itemType: 'font',
        getSelectedCountString: e => getI18nString('multi_select_list.selected_count_font', {
          numSelected: e
        })
      },
      items: H,
      onSetSortState: A,
      sortState: _,
      stickyContent: jsx('div', {
        className: cssBuilderInstance.pt8.pb8.colorBorder.bSolid.bt1.bb1.wFull.$,
        children: jsx(y2, {
          onChange: setQuery,
          query,
          clearSearch: () => {
            setQuery('');
          },
          placeholder: getI18nString('resources_tab.shared_fonts_table.search_fonts_placeholder_text_with_ellipsis')
        })
      })
    })]
  });
}
let X = 'shared_fonts_collision--row--aaKwu';
let Q = 'shared_fonts_collision--cell--v5Adk text--fontPos11--2LvXf text--_fontBase--QdLsd';
let J = 'shared_fonts_collision--icon--v33wj';
let ee = 'shared_fonts_collision--sectionTitle--f83zt shared_fonts_collision--cell--v5Adk text--fontPos11--2LvXf text--_fontBase--QdLsd';
function en(e) {
  return e.cellType === 'style' ? jsx('div', {
    className: 'shared_fonts_collision--bullet--ortUn',
    children: e.fontStyle
  }) : jsxs('div', {
    children: [e.fontFile.family, ' ', e.fontFile.style, ' ', cleanFontVersion(e.fontFile.version), e.fontFile.variation_axes && jsx(SvgComponent, {
      className: J,
      svg: SVG1
    })]
  });
}
function er({
  data: e
}) {
  return jsxs('div', {
    className: X,
    children: [jsxs('div', {
      className: Q,
      children: [e.existingFontCellProps?.cellType === 'style' && jsx(en, {
        cellType: 'style',
        fontStyle: e.existingFontCellProps.fontStyle
      }), e.existingFontCellProps?.cellType === 'file' && jsx(en, {
        cellType: 'file',
        fontFile: e.existingFontCellProps.fontFile
      })]
    }), jsxs('div', {
      className: Q,
      children: [e.newFontCellProps?.cellType === 'style' && jsx(en, {
        cellType: 'style',
        fontStyle: e.newFontCellProps.fontStyle
      }), e.newFontCellProps?.cellType === 'file' && jsx(en, {
        cellType: 'file',
        fontFile: e.newFontCellProps.fontFile
      })]
    }), e.showArrow && jsx('div', {
      className: 'shared_fonts_collision--arrow--Eetla text--fontPos11--2LvXf text--_fontBase--QdLsd'
    })]
  });
}
function ea(e) {
  return jsxs('div', {
    className: 'shared_fonts_collision--banner--u1eeS',
    children: [jsx(SvgComponent, {
      className: J,
      svg: SVG
    }), jsx('div', {
      className: 'shared_fonts_collision--content--cy2uM',
      children: e.children
    })]
  });
}
let es = (e, t) => e.existing.variation_instances ? e.existing.variation_instances.map(e => e.name).filter(e => !t.includes(e)) : [];
let eo = (e, t, i) => t.variation_instances ? e.existing.variation_instances ? e.existing.variation_instances.filter(e => i.includes(e.name)).map(e => ({
  existingFontCellProps: {
    cellType: 'style',
    fontStyle: e.name
  },
  newFontCellProps: {
    cellType: 'style',
    fontStyle: e.name
  },
  showArrow: !0
})) : [{
  existingFontCellProps: {
    cellType: 'file',
    fontFile: e.existing
  },
  newFontCellProps: {
    cellType: 'style',
    fontStyle: e.existing.style
  },
  showArrow: !0
}] : e.existing.variation_instances ? [{
  existingFontCellProps: {
    cellType: 'style',
    fontStyle: t.style
  },
  newFontCellProps: {
    cellType: 'file',
    fontFile: t
  },
  showArrow: !0
}] : [{
  existingFontCellProps: {
    cellType: 'file',
    fontFile: e.existing
  },
  newFontCellProps: {
    cellType: 'file',
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
    if (e === 0 && a.variation_instances) {
      if (i.existing.variation_instances) {
        d.push(...es(i, o));
        let e = t.length === 1 && d.length === 0;
        if (l.push({
          existingFontCellProps: {
            cellType: 'file',
            fontFile: i.existing
          },
          newFontCellProps: {
            cellType: 'file',
            fontFile: a
          },
          showArrow: e
        }), e) {
          continue;
        }
      } else {
        l.push({
          existingFontCellProps: void 0,
          newFontCellProps: {
            cellType: 'file',
            fontFile: a
          }
        });
      }
    } else {
      i.existing.variation_instances && (d.push(...es(i, o)), l.push({
        existingFontCellProps: {
          cellType: 'file',
          fontFile: i.existing
        },
        newFontCellProps: void 0
      }), a.variation_instances || (c = !0));
    }
    l.push(...eo(i, a, o));
  }
  return jsxs('div', {
    className: 'shared_fonts_collision--container--jaZWs',
    children: [s ? i ? renderI18nText('design_systems.shared_fonts.replace_warning_new_variable_font_all_collsions_variable', {
      numCollisions: t.length
    }) : r ? renderI18nText('design_systems.shared_fonts.replace_warning_new_variable_font_all_collisions_non_variable', {
      numCollisions: t.length
    }) : renderI18nText('design_systems.shared_fonts.replace_warning_new_variable_font', {
      numCollisions: t.length
    }) : r ? renderI18nText('design_systems.shared_fonts.replace_warning', {
      numCollisions: t.length
    }) : renderI18nText('design_systems.shared_fonts.replace_warning_not_all_collsions_variable', {
      numCollisions: t.length
    }), jsxs('div', {
      className: 'shared_fonts_collision--table--PopGY',
      children: [jsxs('div', {
        className: X,
        children: [jsx('div', {
          className: ee,
          children: renderI18nText('design_systems.shared_fonts.existing_fonts')
        }), jsx('div', {
          className: ee,
          children: renderI18nText('design_systems.shared_fonts.new_font')
        })]
      }), l.map((e, t) => jsx(er, {
        data: e
      }, t))]
    }), d.length !== 0 && jsxs(ea, {
      children: [renderI18nText('design_systems.shared_fonts.some_of_the_existing_styles_will_become_unavailable'), ' ', d.map(e => `${a.family} ${e}`).join(', ')]
    }), c && jsx(ea, {
      children: renderI18nText('design_systems.shared_fonts.replace_variable_font_error')
    })]
  });
}
let ey = 'shared_fonts_modal_content--container--xkQnG';
let eb = 'shared_fonts_modal_content--scrollContainer--GYsu9 shared_fonts--scrollContainer--qJLhc';
let ev = 'shared_fonts_modal_content--column--Tj43z shared_fonts--column--bUnQT table--column--974RA';
let eI = 'shared_fonts_modal_content--actionColumn--NUqAH table--column--974RA';
let eE = 'shared_fonts_modal_content--familyColumn--1WO5I shared_fonts--familyColumn--7PnCb shared_fonts--column--bUnQT table--column--974RA';
let ex = 'shared_fonts_modal_content--row--YRehx shared_fonts--row--qJMqt multi_select_list--row--nfio-';
let eS = 'shared_fonts_modal_content--headerRow--JYl5b multi_select_list--headerRow--22Lao shared_fonts_modal_content--row--YRehx shared_fonts--row--qJMqt multi_select_list--row--nfio-';
let ew = 'shared_fonts_modal_content--errorColumnFile--3Jyxz';
let eC = 'shared_fonts_modal_content--errorColumnMessage--Sgi77';
let eT = 'shared_fonts_modal_content--footer--LgL5o';
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
  let F = useSubscription(SharedFontsModalTeamPermissions, {
    teamId: resourceId
  }, {
    enabled: resourceType === 'team'
  });
  let M = useSubscription(SharedFontsModalOrgPermissions, {
    orgId: resourceId
  }, {
    enabled: resourceType === 'org'
  });
  let j = useMemo(() => resourceType === 'team' ? !!F.data?.team?.canAdmin : resourceType === 'org' ? !!M.data?.org?.canAdmin : void throwTypeError(resourceType), [F, M, resourceType]);
  let U = (e, t, r) => {
    let s = sharedFonts.fontsByResourceId[e];
    if (!s) return [];
    let o = [];
    let {
      sortedAndSearchFilteredFamilyNames,
      sortedAndSearchFilteredFamilyNamesToStyleNames
    } = getSortedAndSearchFilteredFonts(e);
    for (let a of sortedAndSearchFilteredFamilyNames) {
      for (let l of sortedAndSearchFilteredFamilyNamesToStyleNames[a]) {
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
    }
    return o;
  };
  let B = createRef();
  if (shouldShowUploadErrors) {
    return jsxs('div', {
      className: ey,
      children: [jsxs(RecordingScrollContainer, {
        width,
        className: eb,
        children: [jsxs(TableRow, {
          header: !0,
          className: eS,
          children: [jsx(HeaderCell, {
            className: ew,
            children: renderI18nText('design_systems.shared_fonts.error_table_header_file')
          }), jsx(HeaderCell, {
            className: eC,
            children: renderI18nText('design_systems.shared_fonts.error_table_header_error')
          })]
        }), sharedFonts.unsuccessfulUploads.map(e => jsxs(TableRow, {
          className: ex,
          children: [jsx('div', {
            className: ew,
            children: jsx(CenterTruncatedText, {
              text: e.filename
            })
          }), jsx('div', {
            className: eC,
            children: _$$g(e.status)
          })]
        }, e.filename))]
      }), jsx('div', {
        className: 'shared_fonts_modal_content--errorActionContainer--aZAOx shared_fonts_modal_content--footer--LgL5o',
        children: jsx(Button, {
          onClick: onDismissUploadErrors,
          children: renderI18nText('design_systems.shared_fonts.dismiss_errors')
        })
      })]
    });
  }
  let {
    uploadsRemaining
  } = T;
  let G = (() => {
    let {
      fontsByResourceId
    } = e.sharedFonts;
    if (!fontsByResourceId[uniqueResourceId]) return [];
    if (resourceType === 'org') return U(uniqueResourceId, j);
    {
      let e = teams[resourceId].org_id;
      return U(uniqueResourceId, j, fontsByResourceId[`org-${e}`]);
    }
  })();
  let z = !fontLoadPromise && G.length === 0 && !query;
  return jsxs('div', {
    className: ey,
    children: [jsx('div', {
      className: 'shared_fonts_modal_content--searchContainer--WEi4- modal--searchContainer--EA8ib',
      children: jsx(Lp, {
        focusOnMount: !0,
        extraSpacing: !0,
        query,
        clearSearch: () => setQuery(''),
        onChange: setQuery
      })
    }), jsxs('div', {
      className: z ? 'shared_fonts_modal_content--fontsContainer--Oj-o3' : 'shared_fonts_modal_content--fontsContainerWithFooter--HaBIH shared_fonts_modal_content--fontsContainer--Oj-o3',
      children: [jsxs(TableRow, {
        header: !0,
        className: eS,
        children: [jsx(HeaderCell, {
          className: eI,
          children: j && jsx(Checkbox, {
            label: jsx(HiddenLabel, {
              children: renderI18nText('design_systems.shared_fonts.checkbox_select_all_fonts')
            }),
            checked: Object.keys(sharedFonts.fontsToDelete).length > 0,
            onChange: toggleCheckAllFontIDs
          })
        }), jsx(HeaderCell, {
          className: eE,
          children: renderI18nText('design_systems.shared_fonts.font')
        }), jsx(HeaderCell, {
          className: ev,
          children: renderI18nText('design_systems.shared_fonts.version')
        }), jsx(HeaderCell, {
          className: ev,
          children: renderI18nText('design_systems.shared_fonts.sample')
        }), jsx(HeaderCell, {
          className: eI,
          children: j && jsx(IconButton, {
            'aria-label': getI18nString('design_systems.shared_fonts.upload_new_shared_font'),
            'onClick': onUploadClick,
            'htmlAttributes': {
              'data-tooltip-type': KindEnum.TEXT,
              'data-tooltip': getI18nString('design_systems.shared_fonts.upload_new_shared_font')
            },
            'children': jsx(_$$e, {})
          })
        })]
      }), z ? (() => {
        let e = null;
        let t = null;
        let i = 0;
        orgFonts && Object.keys(orgFonts).forEach(e => {
          i += Object.keys(orgFonts[e]).length;
        });
        resourceType === 'team' ? j ? e = getI18nString('design_systems.shared_fonts.upload_fonts_you_own_to_share_with_your_team') : (e = getI18nString('design_systems.shared_fonts.no_fonts_have_been_uploaded_to_this_team'), t = getI18nString('design_systems.shared_fonts.only_team_admins_have_permission_to_upload_fonts')) : j ? e = getI18nString('design_systems.shared_fonts.upload_fonts_you_own_to_share_with_your_organization') : (e = getI18nString('design_systems.shared_fonts.no_fonts_have_been_uploaded_to_this_organization'), t = getI18nString('design_systems.shared_fonts.only_organization_admins_have_permission_to_upload_fonts'));
        let r = resourceType === 'team' && i > 0;
        return jsxs('div', {
          className: 'shared_fonts_modal_content--nullContainer--Z5Kga',
          children: [jsxs('div', {
            className: 'shared_fonts_modal_content--nullMessagesContainer--VFsR-',
            children: [e && jsx('div', {
              className: 'shared_fonts_modal_content--primaryNullMessage--nM-FW',
              children: e
            }), t && jsx('div', {
              children: t
            }), org && r && jsx('div', {
              className: j ? 'shared_fonts_modal_content--orgNullMessageAdmin--gKbAY' : 'shared_fonts_modal_content--orgNullMessage--8FdUD shared_fonts_modal_content--orgNullMessageAdmin--gKbAY',
              children: renderI18nText('design_systems.shared_fonts.view_shared_fonts_from_organization', {
                action: jsx(Button, {
                  variant: 'link',
                  onClick: onViewOrgFontsClick,
                  children: renderI18nText('design_systems.shared_fonts.view_shared_fonts_from_organization_action', {
                    numOrgFonts: i
                  })
                }),
                orgName: org.name
              })
            })]
          }), j && jsx(Button, {
            onClick: onUploadClick,
            children: renderI18nText('design_systems.shared_fonts.upload_fonts')
          })]
        });
      })() : jsxs(Fragment, {
        children: [jsxs(RecordingScrollContainer, {
          width,
          className: eb,
          onScroll: onFontListScroll,
          onCanScrollChange: onFontListCanScrollChange,
          children: [fontLoadPromise && jsx(LoadingRow, {}), Object.keys(uploadsRemaining).sort().map((e, t) => {
            let i = sharedFonts.uploadsRemaining[e];
            return jsxs(TableRow, {
              className: ex,
              children: [jsx('div', {
                className: eI
              }), jsxs('div', {
                className: 'shared_fonts_modal_content--uploadInProgress--m2pgq',
                ref: t === 0 ? B : void 0,
                children: [jsx(CenterTruncatedText, {
                  text: i.file.name
                }), jsx('div', {
                  className: 'shared_fonts_modal_content--uploadIndicator--6Vgje',
                  style: {
                    width: `${100 * i.progress}%`
                  }
                })]
              }), jsx('div', {
                className: eI
              })]
            }, e);
          }), G.length > 0 && G, G.length === 0 && query && jsx('div', {
            className: 'shared_fonts_modal_content--noSearchResultsInfo--K25Iw',
            children: renderI18nText('design_systems.shared_fonts.no_results_for_query', {
              query
            })
          })]
        }, 'shared-fonts-scroll-container'), fontLoadPromise ? null : jsxs(Fragment, {
          children: [jsx('div', {
            className: shouldShowFooterBorder ? 'shared_fonts_modal_content--footerBorder--YO-59' : 'shared_fonts_modal_content--footerBorderInvisible--6-TY1'
          }, 'footer-border'), Object.keys(sharedFonts.fontsToDelete).length > 0 ? (() => {
            let e = Object.keys(sharedFonts.fontsToDelete).length;
            return jsxs('div', {
              className: eT,
              children: [jsx('span', {
                children: renderI18nText('design_systems.shared_fonts.num_fonts_selected', {
                  numFontsSelected: e
                })
              }), jsx(Button, {
                variant: 'secondary',
                onClick: onShowDeleteFontsModal,
                children: renderI18nText('design_systems.shared_fonts.delete')
              })]
            }, 'shared-fonts-delete-footer');
          })() : (() => {
            let e = jsx('div', {});
            if (resourceType === 'team' && org && orgFonts && Object.keys(orgFonts).length > 0) {
              let t = 0;
              Object.keys(orgFonts).forEach(e => {
                t += Object.keys(orgFonts[e]).length;
              });
              e = jsx('div', {
                children: jsx('div', {
                  className: 'shared_fonts_modal_content--uploadFooterMessage--fYOc9',
                  children: renderI18nText('design_systems.shared_fonts.upload_footer_message', {
                    linkText: jsx(Button, {
                      variant: 'link',
                      onClick: onViewOrgFontsClick,
                      children: renderI18nText('design_systems.shared_fonts.upload_footer_message_link', {
                        numFonts: t
                      })
                    }),
                    orgName: org.name
                  })
                })
              });
            }
            let t = j ? jsx(Button, {
              onClick: onUploadClick,
              children: renderI18nText('design_systems.shared_fonts.upload_fonts')
            }) : null;
            return t || e ? jsxs('div', {
              className: eT,
              children: [e, t]
            }, 'shared-fonts-upload-footer') : null;
          })()]
        })]
      })]
    }), (() => {
      let {
        uploadsLaunched,
        successfulUploads,
        unsuccessfulUploads
      } = sharedFonts;
      return uploadsLaunched === 0 ? null : uploadsLaunched - successfulUploads.length - unsuccessfulUploads.length > 0 ? jsx('div', {
        className: 'shared_fonts_modal_content--progress--lTEJk shared_fonts_modal_content--footer--LgL5o',
        children: jsx('span', {
          children: renderI18nText('design_systems.shared_fonts.upload_progress', {
            current: successfulUploads.length + unsuccessfulUploads.length + 1,
            total: uploadsLaunched
          })
        })
      }) : unsuccessfulUploads.length === 0 ? null : jsxs('div', {
        className: 'shared_fonts_modal_content--progressFailure--UbA63 shared_fonts_modal_content--progress--lTEJk shared_fonts_modal_content--footer--LgL5o',
        children: [jsx('span', {
          children: renderI18nText('design_systems.shared_fonts.import_complete_with_error_count', {
            numErrors: unsuccessfulUploads.length
          })
        }), jsx('div', {
          children: jsxs(setupThemeContext, {
            mode: 'dark',
            children: [jsx(Button, {
              onClick: onReviewUploadErrors,
              variant: 'secondary',
              children: renderI18nText('design_systems.shared_fonts.import_complete_with_errors_review', {
                numErrors: unsuccessfulUploads.length
              })
            }), jsx(Button, {
              onClick: onClearFontUploadResults,
              variant: 'secondary',
              children: renderI18nText('design_systems.shared_fonts.import_complete_with_errors_ok')
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
    return e.variationInstances ? jsxs('div', {
      className: 'shared_fonts_modal_content--variableFontNameColumn--E70jY',
      children: [jsxs('div', {
        children: [renderI18nText('design_systems.shared_fonts.font_family_and_style', {
          fontFamily: e.family,
          fontStyle: e.style
        }), jsx('span', {
          className: 'shared_fonts_modal_content--variableFontBadge---whIx',
          children: jsx(Badge, {
            text: getI18nString('design_systems.shared_fonts.variable'),
            color: BadgeColor.INVERT
          })
        })]
      }), jsx('div', {
        children: jsx(CenterTruncatedText, {
          text: getI18nString('design_systems.shared_fonts.list_of_variations_for_font', {
            numVariations: e.variationInstances.length,
            listOfVariations: formatList(e.variationInstances.map(e => e.name))
          }),
          className: 'shared_fonts_modal_content--variableFontInstances--nee-z'
        })
      })]
    }) : jsx(CenterTruncatedText, {
      text: `${e.family} ${e.style}`
    });
  }
  render() {
    let {
      version,
      sampleUrl
    } = this.props.fontInfo;
    return jsxs(TableRow, {
      className: this.props.isOverridden ? 'shared_fonts_modal_content--rowInactive--MdqXa shared_fonts_modal_content--row--YRehx shared_fonts--row--qJMqt multi_select_list--row--nfio-' : ex,
      onClick: this.props.canCheck ? this.handleRowClick : void 0,
      children: [jsx('div', {
        className: this.props.shouldShowCheckbox ? eI : 'shared_fonts_modal_content--actionColumnInactive--kFWMk shared_fonts_modal_content--actionColumn--NUqAH table--column--974RA',
        children: this.props.canCheck && jsx(EventShield, {
          eventListeners: ['onClick'],
          children: jsx(Checkbox, {
            label: jsx(HiddenLabel, {
              children: renderI18nText('design_systems.shared_fonts.checkbox_select_font')
            }),
            checked: this.props.isChecked,
            onChange: (e, {
              event: t
            }) => this.handleCheck(t)
          })
        })
      }), jsx('div', {
        className: eE,
        children: this.renderFontDisplayName()
      }), jsx('div', {
        className: ev,
        children: version || '\u2014'
      }), jsx('div', {
        className: ev,
        children: jsx('img', {
          className: 'shared_fonts_modal_content--sample--nSd3q',
          src: sampleUrl,
          alt: ''
        })
      }), jsx('div', {
        className: eI,
        children: this.props.isOverridden && jsx('div', {
          'data-tooltip-type': KindEnum.TEXT,
          'data-tooltip': getI18nString('design_systems.shared_fonts.this_font_style_was_uploaded_to_your_organization_any_new_text_objects_will_use_the_organization_font'),
          'children': jsx(SvgComponent, {
            svg: SVG2
          })
        })
      })]
    });
  }
}
let eO = 'shared_fonts--modalInfo--1Z1ZN';
let eD = 'shared_fonts--checkboxControl--EvIzD';
let eL = 'shared_fonts--familyColumn--7PnCb shared_fonts--column--bUnQT table--column--974RA';
let eF = 'shared_fonts--dateColumn--tQtqD shared_fonts--column--bUnQT table--column--974RA';
export class SharedFontsComponent extends RecordingComponent<SharedFontsComponentProps, SharedFontsComponentState> {
  private fileInput: HTMLInputElement;
  private files: FileList | null = null;
  private currentVisibleCollision: FontCollision | null = null;
  private isShowingWarning = false;
  private updateUploadRef = createRef<HTMLDivElement>();
  static displayName = 'SharedFonts';
  static fontLoadPromise: Promise<SharedFont[]> | null = null;
  static loadedFonts = false;
  constructor(props: SharedFontsComponentProps) {
    super(props);

    // Initialize file input
    this.fileInput = document.createElement('input');
    this.fileInput.type = 'file';
    this.fileInput.multiple = true;
    this.fileInput.accept = 'font/opentype,font/ttf,.otf,.ttf';
    this.fileInput.onchange = (event: Event) => {
      const target = event.target as HTMLInputElement;
      this.files = target.files;
      this.setState({
        shouldShowLicenseModal: true
      });
    };

    // Initialize component state
    this.state = {
      shouldShowUploadErrors: props.sharedFonts.unsuccessfulUploads.length > 0,
      shouldShowLicenseModal: false,
      query: '',
      shouldShowFooterBorder: false
    };
  }
  componentDidMount(): void {
    this.props.onRightActionsChange?.(jsx(WithTrackedButton, {
      variant: 'primary',
      iconPrefix: jsx(_$$e, {}),
      onClick: this.handleUploadClick,
      children: renderI18nText('resources_tab.shared_fonts_table.add_font')
    }));
  }
  componentDidUpdate(prevProps: SharedFontsComponentProps): void {
    const uploadRef = this.updateUploadRef.current;

    // Scroll to upload when new uploads start
    if (Object.keys(this.props.sharedFonts.uploadsRemaining).length > 0 && Object.keys(prevProps.sharedFonts.uploadsRemaining).length === 0 && uploadRef) {
      uploadRef.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }

    // Handle font collisions
    const collision = this.props.sharedFonts.collisions[0];
    if (collision && this.currentVisibleCollision !== collision) {
      this.currentVisibleCollision = collision;
      if (collision.overwritten_fonts?.length) {
        this.props.dispatch(showModalHandler({
          type: FontCollisionReplacementModal,
          data: {
            collision,
            overwrittenFonts: collision.overwritten_fonts,
            resourceType: this.props.resourceType,
            resourceId: this.getResourceId(),
            onCollisionResolved: () => {
              this.currentVisibleCollision = null;
            }
          },
          showModalsBeneath: true
        }));
      } else if (collision.existing) {
        this.props.dispatch(showModalHandler({
          type: DuplicateFontNameCollisionModal,
          data: {
            collision,
            existing: collision.existing,
            resourceType: this.props.resourceType,
            resourceId: this.getResourceId(),
            onCollisionResolved: () => {
              this.currentVisibleCollision = null;
            }
          },
          showModalsBeneath: true
        }));
      }
    }

    // Handle font warnings
    const warning = this.props.sharedFonts.warnings[0];
    if (!this.isShowingWarning && !this.currentVisibleCollision && warning && warning.collisions.filter(c => c.teamId && this.props.permissionsState.teams[c.teamId]).map(c => this.props.permissionsState.teams[c.teamId]).map(team => team.name).length) {
      this.isShowingWarning = true;
      this.props.dispatch(showModalHandler({
        type: TeamFontsOverrideWarningModal,
        data: {
          onWarningDismissed: () => {
            this.isShowingWarning = false;
          }
        },
        showModalsBeneath: true
      }));
    }
  }
  componentWillUnmount(): void {
    this.props.dispatch(sharedFontActions.clearFontsToDelete());
  }

  // Static method to load shared fonts
  static loadSharedFonts(dispatch: (action: any) => void): void {
    if (!SharedFontsComponent.fontLoadPromise && !SharedFontsComponent.loadedFonts) {
      SharedFontsComponent.fontLoadPromise = fetchSharedFonts();
      SharedFontsComponent.fontLoadPromise.then(fonts => {
        dispatch(sharedFontActions.updateSharedFontList(fonts));
        SharedFontsComponent.fontLoadPromise = null;
        SharedFontsComponent.loadedFonts = true;
      });
    }
  }

  // Event handlers
  private handleFontListScroll = (scrollTop: number, scrollInfo: {
    trackHeight: number;
    scrollHeight: number;
  }): void => {
    this.setState({
      shouldShowFooterBorder: scrollTop + scrollInfo.trackHeight !== scrollInfo.scrollHeight
    });
  };
  private handleFontListCanScrollChange = (canScroll: boolean): void => {
    this.setState({
      shouldShowFooterBorder: canScroll
    });
  };
  private handleReviewUploadErrors = (): void => {
    this.setState({
      shouldShowUploadErrors: true
    });
  };
  private handleDismissUploadErrors = (): void => {
    this.props.dispatch(sharedFontActions.clearFontUploadResults());
    this.setState({
      shouldShowUploadErrors: false
    });
  };
  private handleClearFontUploadResults = (): void => {
    this.props.dispatch(sharedFontActions.clearFontUploadResults());
  };
  private handleUploadConfirm = (): void => {
    const {
      uploadsRemaining
    } = this.props.sharedFonts;
    if (Object.keys(uploadsRemaining).length === 0) {
      this.handleClearFontUploadResults();
    }
    const fontsToUpload: Record<string, File> = {};
    if (this.files) {
      for (const file of Array.from(this.files)) {
        fontsToUpload[generateUploadId()] = file;
      }
    }
    this.fileInput.value = '';
    this.props.dispatch(sharedFontActions.uploadFonts({
      fonts: fontsToUpload,
      resourceType: this.props.resourceType,
      resourceId: this.getResourceId(),
      overwrite: false
    }));
    this.resetUpload();
  };
  private handleUploadClick = (): void => {
    this.fileInput.click();
  };
  private handleDismissWarning = (): void => {
    this.props.dispatch(sharedFontActions.dismissFontWarning());
  };
  private handleShowDeleteFontsModal = (): void => {
    this.props.dispatch(showModalHandler({
      type: ConfirmDeleteFontsModal,
      showModalsBeneath: true
    }));
  };
  private handleToggleCheckAllFontIDs = (): void => {
    const fontsByResource = this.props.sharedFonts.fontsByResourceId[this.getUniqueResourceId()];
    const {
      sortedAndSearchFilteredFamilyNames,
      sortedAndSearchFilteredFamilyNamesToStyleNames
    } = this.getSortedAndSearchFilteredFonts(this.getUniqueResourceId());
    const fontsToToggle: SharedFont[] = [];
    for (const familyName of sortedAndSearchFilteredFamilyNames) {
      for (const styleName of sortedAndSearchFilteredFamilyNamesToStyleNames[familyName]) {
        fontsToToggle.push(fontsByResource[familyName][styleName]);
      }
    }
    this.props.dispatch(sharedFontActions.toggleFontsToDelete({
      fonts: fontsToToggle,
      checked: Object.keys(this.props.sharedFonts.fontsToDelete).length < fontsToToggle.length
    }));
  };
  private handleToggleCheckFont = (font: SharedFont): void => {
    this.props.dispatch(sharedFontActions.toggleFontsToDelete({
      fonts: [font]
    }));
  };
  private handleSearchQueryChange = (query: string): void => {
    this.setState({
      query
    });
  };
  private handleViewOrgFontsClick = (): void => {
    const org = this.getOrgForTeam();
    if (org) {
      if (this.props.resourceType === 'team' && this.props.canAdminOrg) {
        this.props.dispatch(selectViewAction({
          view: 'orgAdminSettings',
          orgAdminSettingsViewTab: DashboardSection.RESOURCES,
          orgAdminSettingsViewSecondaryTab: FigResourceType.SHARED_FONTS
        }));
      } else {
        this.props.dispatch(selectViewAction({
          view: 'org',
          orgId: org.id,
          orgViewTab: navigationRoutes.FONTS
        }));
      }
    }
  };

  // Helper methods
  private getResourceId(): string {
    return this.props.resourceType === 'team' ? this.props.teamId : this.props.orgId;
  }
  private getUniqueResourceId(): string {
    return `${this.props.resourceType}-${this.getResourceId()}`;
  }
  private getOrgFontsForTeam(): SharedFontsByFamily | null {
    if (this.props.resourceType !== 'team') {
      return null;
    }
    const org = this.getOrgForTeam();
    return org ? this.props.sharedFonts.fontsByResourceId[`org-${org.id}`] : null;
  }
  private getSortedAndSearchFilteredFonts(resourceId: string): {
    sortedAndSearchFilteredFamilyNames: string[];
    sortedAndSearchFilteredFamilyNamesToStyleNames: Record<string, string[]>;
  } {
    const familyNames: string[] = [];
    const familyToStyleNames: Record<string, string[]> = {};
    const fontsByResource = this.props.sharedFonts.fontsByResourceId[resourceId];
    if (!fontsByResource) {
      return {
        sortedAndSearchFilteredFamilyNames: familyNames,
        sortedAndSearchFilteredFamilyNamesToStyleNames: familyToStyleNames
      };
    }
    if (this.state.query) {
      const matcher = new FuzzyMatcher(this.state.query);
      const matchedFamilies: MatchResult[] = [];
      for (const familyName in fontsByResource) {
        const matchedStyles: MatchResult[] = [];
        const familyMatch = matcher.matchAgainstText(familyName);
        for (const styleName in fontsByResource[familyName]) {
          const fullText = `${familyName} ${styleName}`;
          const styleMatch = matcher.matchAgainstText(fullText);
          if (styleMatch) {
            const familyResult = familyMatch || new MatchResult(styleMatch.result, styleMatch.score, familyName);
            const styleResult = new MatchResult(styleMatch.result, styleMatch.score, styleName);
            matchedStyles.push(styleResult);
          }
        }
        if (matchedStyles.length > 0) {
          if (familyMatch) {
            matchedFamilies.push(familyMatch);
          } else {
            familyNames.push(familyName);
          }
          familyToStyleNames[familyName] = matchedStyles.sort((a, b) => b.score - a.score).map(match => match.text);
        } else if (familyMatch) {
          matchedFamilies.push(familyMatch);
          familyToStyleNames[familyName] = Object.keys(fontsByResource[familyName]).sort();
        }
      }
      familyNames.unshift(...matchedFamilies.sort((a, b) => b.score - a.score).map(match => match.text));
    } else {
      familyNames.push(...Object.keys(fontsByResource).sort());
      for (const familyName of familyNames) {
        familyToStyleNames[familyName] = Object.keys(fontsByResource[familyName]).sort((a, b) => {
          const aItalic = !!fontsByResource[familyName][a].italic;
          const bItalic = !!fontsByResource[familyName][b].italic;
          if (!aItalic && bItalic) return -1;
          if (aItalic && !bItalic) return 1;
          return (fontsByResource[familyName][a].weight || 400) - (fontsByResource[familyName][b].weight || 400);
        });
      }
    }
    return {
      sortedAndSearchFilteredFamilyNames: familyNames,
      sortedAndSearchFilteredFamilyNamesToStyleNames: familyToStyleNames
    };
  }
  private getOrgForTeam(): Org | null {
    if (!this.props.permissionsState.teams[this.getResourceId()]) {
      return null;
    }
    const orgId = this.props.permissionsState.teams[this.getResourceId()].org_id;
    return orgId ? this.props.permissionsState.orgById[orgId] : null;
  }
  private resetUpload(): void {
    this.files = null;
    this.setState({
      shouldShowLicenseModal: false
    });
  }
  private renderUploadModal(): JSX.Element {
    return jsx(_$$l, {
      checkboxText: getI18nString('design_systems.shared_fonts.i_own_the_fonts_i_am_uploading_or_have_the_right_to_distribute_copies_to_others_and_to_authorize_the_use_of_copies_with_figma'),
      buttonText: getI18nString('design_systems.shared_fonts.upload'),
      onConfirm: this.handleUploadConfirm,
      onHide: this.resetUpload,
      hideCancelButton: false,
      dispatch: this.props.dispatch,
      title: getI18nString('design_systems.shared_fonts.uploading_n_fonts', {
        numFonts: this.files ? this.files.length : 0
      })
    });
  }
  private renderContent(): JSX.Element {
    return this.props.useModalViewComponent ? jsx(eR, {
      dispatch: this.props.dispatch,
      fontLoadPromise: SharedFontsComponent.fontLoadPromise,
      getSortedAndSearchFilteredFonts: this.getSortedAndSearchFilteredFonts,
      onClearFontUploadResults: this.handleClearFontUploadResults,
      onDismissUploadErrors: this.handleDismissUploadErrors,
      onFontListCanScrollChange: this.handleFontListCanScrollChange,
      onFontListScroll: this.handleFontListScroll,
      onReviewUploadErrors: this.handleReviewUploadErrors,
      onShowDeleteFontsModal: this.handleShowDeleteFontsModal,
      onToggleCheckFont: this.handleToggleCheckFont,
      onUploadClick: this.handleUploadClick,
      onViewOrgFontsClick: this.handleViewOrgFontsClick,
      org: this.getOrgForTeam(),
      orgById: this.props.permissionsState.orgById,
      orgFonts: this.getOrgFontsForTeam(),
      query: this.state.query,
      resourceId: this.getResourceId(),
      resourceType: this.props.resourceType,
      setQuery: this.handleSearchQueryChange,
      sharedFonts: this.props.sharedFonts,
      shouldShowFooterBorder: this.state.shouldShowFooterBorder,
      shouldShowUploadErrors: this.state.shouldShowUploadErrors,
      teams: this.props.permissionsState.teams,
      toggleCheckAllFontIDs: this.handleToggleCheckAllFontIDs,
      uniqueResourceId: this.getUniqueResourceId(),
      width: this.props.width
    }) : jsx(H, {
      dispatch: this.props.dispatch,
      dropdownShown: this.props.dropdownShown,
      getSearchFilteredFonts: this.getSortedAndSearchFilteredFonts,
      isLoading: this.props.isLoading,
      onShowDeleteFontsModal: this.handleShowDeleteFontsModal,
      onUploadClick: this.handleUploadClick,
      orgId: this.props.orgId,
      query: this.state.query,
      setQuery: this.handleSearchQueryChange,
      sharedFonts: this.props.sharedFonts,
      uniqueResourceId: this.getUniqueResourceId()
    });
  }
  render(): JSX.Element {
    return jsxs(Fragment, {
      children: [this.renderContent(), this.state.shouldShowLicenseModal && this.renderUploadModal()]
    });
  }
}

// eU - Font Collision Replacement Modal
const FontCollisionReplacementModal = registerModal(props => {
  const modalManager = useModalManager({
    ...props,
    preventUserClose: true
  });
  const {
    collision,
    overwrittenFonts,
    resourceType,
    resourceId,
    onCollisionResolved
  } = props;
  const [applyToAll, setApplyToAll] = useState(false);
  const toggleApplyToAll = useCallback(() => {
    setApplyToAll(prev => !prev);
  }, [setApplyToAll]);
  const sharedFonts = useSelector(state => state.sharedFonts);
  const dispatch = useDispatch<AppDispatch>();
  const handleSkipReplacement = useCallback(() => {
    const collisionsToProcess = applyToAll ? sharedFonts.collisions : [sharedFonts.collisions[0]];
    collisionsToProcess.forEach(() => {
      trackEventAnalytics('shared_fonts_skip_collision');
      dispatch(sharedFontActions.dismissFontCollision());
    });
    onCollisionResolved();
    dispatch(popModalStack());
  }, [applyToAll, sharedFonts.collisions, dispatch, onCollisionResolved]);
  const handleReplaceFonts = useCallback(() => {
    const collisionsToProcess = applyToAll ? sharedFonts.collisions : [sharedFonts.collisions[0]];
    collisionsToProcess.forEach(collision => {
      dispatch(sharedFontActions.uploadFonts({
        fonts: {
          [generateUploadId()]: collision.file
        },
        resourceType,
        resourceId,
        overwrite: true
      }));
      trackEventAnalytics('shared_fonts_skip_collision');
      dispatch(sharedFontActions.dismissFontCollision());
    });
    onCollisionResolved();
    dispatch(popModalStack());
  }, [applyToAll, sharedFonts.collisions, dispatch, resourceType, resourceId, onCollisionResolved]);
  return jsx(ModalRootComponent, {
    manager: modalManager,
    width: 'lg',
    children: jsxs(DialogContents, {
      children: [jsx(DialogHeader, {
        children: jsx(DialogTitle, {
          children: renderI18nText('design_systems.shared_fonts.replacing_fonts_modal_title')
        })
      }), jsx(DialogBody, {
        children: jsx(el, {
          uploaded: collision.uploaded,
          overwritten_fonts: overwrittenFonts
        })
      }), jsxs(DialogFooter, {
        children: [jsx('div', {
          className: 'shared_fonts--control--W-DlW',
          children: sharedFonts.collisions.length > 1 && jsx('div', {
            className: eD,
            children: jsx(Checkbox, {
              label: jsx(Label, {
                children: renderI18nText('design_systems.shared_fonts.apply_to_all_remaining_uploads', {
                  numRemainingUploads: sharedFonts.collisions.length - 1
                })
              }),
              checked: applyToAll,
              onChange: toggleApplyToAll
            })
          })
        }), jsxs('div', {
          className: 'shared_fonts--actions---ihpk',
          children: [jsx(Button, {
            variant: 'secondary',
            onClick: handleSkipReplacement,
            children: renderI18nText('design_systems.shared_fonts.don_t_replace')
          }), jsx(Button, {
            onClick: handleReplaceFonts,
            children: renderI18nText('design_systems.shared_fonts.replace')
          })]
        })]
      })]
    })
  });
});

// eB - Team Fonts Override Warning Modal
const TeamFontsOverrideWarningModal = registerModal(props => {
  const {
    onWarningDismissed
  } = props;
  const modalManager = useModalManager(props);
  const sharedFonts = useSelector(state => state.sharedFonts);
  const permissionsState = selectPermissionsState();
  const warning = sharedFonts.warnings[0];
  const dispatch = useDispatch<AppDispatch>();
  const handleDismissWarning = useCallback(() => {
    dispatch(sharedFontActions.dismissFontWarning());
    onWarningDismissed();
    dispatch(popModalStack());
  }, [dispatch, onWarningDismissed]);
  if (!warning) return null;
  const teamNames = warning.collisions.filter(collision => collision.teamId && permissionsState.teams[collision.teamId]).map(collision => permissionsState.teams[collision.teamId]).map(team => team.name);
  return teamNames.length ? jsx(ModalRootComponent, {
    manager: modalManager,
    width: 'md',
    children: jsxs(DialogContents, {
      children: [jsx(DialogHeader, {
        children: jsx(DialogTitle, {
          children: renderI18nText('design_systems.shared_fonts.team_fonts_will_be_overridden')
        })
      }), jsxs(DialogBody, {
        children: [jsx('div', {
          className: eO,
          children: renderI18nText('design_systems.shared_fonts.team_fonts_override_warning_1', {
            fontFamily: warning.font.family,
            fontStyle: warning.font.style,
            listOfTeams: formatList(teamNames)
          })
        }), jsx('div', {
          className: eO,
          children: renderI18nText('design_systems.shared_fonts.team_fonts_override_warning_2')
        }), jsx('div', {
          className: eO,
          children: renderI18nText('design_systems.shared_fonts.team_fonts_override_warning_3')
        })]
      }), jsx(DialogFooter, {
        children: jsx(DialogActionStrip, {
          children: jsx(Button, {
            onClick: handleDismissWarning,
            children: renderI18nText('design_systems.shared_fonts.okay')
          })
        })
      })]
    })
  }) : null;
});

// eV - Confirm Delete Fonts Modal
const ConfirmDeleteFontsModal = registerModal(props => {
  const modalManager = useModalManager(props);
  const dispatch = useDispatch<AppDispatch>();
  const selectedFontsCount = Object.keys(useSelector(state => state.sharedFonts).fontsToDelete).length;
  const handleConfirmDelete = useCallback(() => {
    dispatch(sharedFontActions.deleteFonts());
    dispatch(popModalStack());
  }, [dispatch]);
  const handleCancelDelete = useCallback(() => {
    dispatch(popModalStack());
  }, [dispatch]);
  return jsx(ModalRootComponent, {
    manager: modalManager,
    width: 'md',
    children: jsxs(DialogContents, {
      children: [jsx(DialogHeader, {
        children: jsx(DialogTitle, {
          children: renderI18nText('design_systems.shared_fonts.confirm_delete')
        })
      }), jsx(DialogBody, {
        children: renderI18nText('design_systems.shared_fonts.are_you_sure_you_want_to_delete', {
          numFonts: selectedFontsCount
        })
      }), jsx(DialogFooter, {
        children: jsxs(DialogActionStrip, {
          children: [jsx(Button, {
            variant: 'secondary',
            onClick: handleCancelDelete,
            children: renderI18nText('design_systems.shared_fonts.cancel')
          }), jsx(Button, {
            onClick: handleConfirmDelete,
            children: renderI18nText('design_systems.shared_fonts.confirm')
          })]
        })
      })]
    })
  });
});

// eG - Duplicate Font Name Collision Modal
const DuplicateFontNameCollisionModal = registerModal(props => {
  const modalManager = useModalManager({
    ...props,
    preventUserClose: true
  });
  const {
    collision,
    existing,
    resourceType,
    resourceId,
    onCollisionResolved
  } = props;
  const [applyToAll, setApplyToAll] = useState(false);
  const toggleApplyToAll = useCallback(() => {
    setApplyToAll(prev => !prev);
  }, [setApplyToAll]);
  const sharedFonts = useSelector(state => state.sharedFonts);
  const dispatch = useDispatch<AppDispatch>();
  const handleSkipReplacement = useCallback(() => {
    const collisionsToProcess = applyToAll ? sharedFonts.collisions : [sharedFonts.collisions[0]];
    collisionsToProcess.forEach(() => {
      trackEventAnalytics('shared_fonts_skip_collision');
      dispatch(sharedFontActions.dismissFontCollision());
    });
    onCollisionResolved();
    dispatch(popModalStack());
  }, [applyToAll, sharedFonts.collisions, dispatch, onCollisionResolved]);
  const handleReplaceFont = useCallback(() => {
    const collisionsToProcess = applyToAll ? sharedFonts.collisions : [sharedFonts.collisions[0]];
    collisionsToProcess.forEach(collision => {
      dispatch(sharedFontActions.uploadFonts({
        fonts: {
          [generateUploadId()]: collision.file
        },
        resourceType,
        resourceId,
        overwrite: true
      }));
      trackEventAnalytics('shared_fonts_skip_collision');
      dispatch(sharedFontActions.dismissFontCollision());
    });
    onCollisionResolved();
    dispatch(popModalStack());
  }, [applyToAll, sharedFonts.collisions, dispatch, resourceType, resourceId, onCollisionResolved]);
  return jsx(ModalRootComponent, {
    manager: modalManager,
    width: 'lg',
    children: jsxs(DialogContents, {
      children: [jsx(DialogHeader, {
        children: jsx(DialogTitle, {
          children: renderI18nText('design_systems.shared_fonts.you_already_have_a_font_with_this_name')
        })
      }), jsxs(DialogBody, {
        children: [jsxs(TableRow, {
          className: 'shared_fonts--existingRow--DA9eV shared_fonts--collisionRow--pNU7g shared_fonts--row--qJMqt multi_select_list--row--nfio-',
          children: [jsx('div', {
            className: eL,
            children: existing.version ? renderI18nText('design_systems.shared_fonts.family_info_with_version', {
              fontFamily: existing.family,
              fontStyle: existing.style,
              fontVersion: existing.version
            }) : renderI18nText('design_systems.shared_fonts.family_info_without_version', {
              fontFamily: existing.family,
              fontStyle: existing.style
            })
          }), jsx('div', {
            className: eF,
            children: existing.updatedAt && renderI18nText('design_systems.shared_fonts.updated_at_date', {
              updatedAt: new Date(existing.updatedAt)
            })
          })]
        }), jsxs(TableRow, {
          className: 'shared_fonts--collisionRow--pNU7g shared_fonts--row--qJMqt multi_select_list--row--nfio-',
          children: [jsx('div', {
            className: eL,
            children: collision.uploaded.version ? renderI18nText('design_systems.shared_fonts.family_info_with_version', {
              fontFamily: existing.family,
              fontStyle: existing.style,
              fontVersion: cleanFontVersion(collision.uploaded.version)
            }) : renderI18nText('design_systems.shared_fonts.family_info_without_version', {
              fontFamily: existing.family,
              fontStyle: existing.style
            })
          }), jsx('div', {
            className: eF,
            children: renderI18nText('design_systems.shared_fonts.just_now')
          })]
        }), sharedFonts.collisions.length > 1 && jsx('div', {
          className: 'shared_fonts--applyAll--44Pm2',
          children: jsx('div', {
            className: eD,
            children: jsx(Checkbox, {
              label: jsx(Label, {
                children: renderI18nText('design_systems.shared_fonts.apply_to_all_remaining_uploads', {
                  numRemainingUploads: sharedFonts.collisions.length
                })
              }),
              checked: applyToAll,
              onChange: toggleApplyToAll
            })
          })
        })]
      }), jsx(DialogFooter, {
        children: jsxs(DialogActionStrip, {
          children: [jsx(Button, {
            variant: 'secondary',
            onClick: handleSkipReplacement,
            children: renderI18nText('design_systems.shared_fonts.don_t_replace')
          }), jsx(Button, {
            onClick: handleReplaceFont,
            children: renderI18nText('design_systems.shared_fonts.replace')
          })]
        })
      })]
    })
  });
});
export const y = SharedFontsComponent;
export const SharedFonts = registerModal(SharedFontsComponent);