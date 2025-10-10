import { useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Fragment, jsx, jsxs } from 'react/jsx-runtime';
import { ModalCloseButton } from '../905/17223';
import { registerModal } from '../905/102752';
import { Alignment, KindEnum, PositionEnum } from '../905/129884';
import { hideModal } from '../905/156213';
import { getI18nString, renderI18nText } from '../905/303541';
import { designSet } from '../905/332483';
import { RenderRefCheckbox } from '../905/339549';
import { RecordingScrollContainer } from '../905/347284';
import { AutoLayout } from '../905/470281';
import { ProductAccessTypeEnum } from '../905/513035';
import { ConfirmationModal, HeaderModal } from '../905/519092';
import { registerTooltip } from '../905/524523';
import { getFeatureFlags } from '../905/601108';
import { SvgComponent } from '../905/714743';
import { showTooltip } from '../905/765855';
import { styleBuilderInstance } from '../905/941192';
import { TextWithTruncation } from '../905/984674';
import { s as _$$s } from '../c5e2cae0/341232';
import { cssBuilderInstance } from '../cssbuilder/589278';
import { nR } from '../figma_app/60079';
import { getColorForMultiplayer, multiplayerColors } from '../figma_app/136698';
import { compareProductAccessTypes, getProductAccessTypeByKey } from '../figma_app/217457';
import { logAndTrackCTA } from '../figma_app/314264';
import { renderCheckoutDevModeText } from '../figma_app/361869';
import { CurrencyFormatter } from '../figma_app/514043';
import { ButtonBasePrimary, FocusCheckbox } from '../figma_app/637027';
import { mx } from '../figma_app/681712';
import { az } from '../figma_app/805373';
import { TrackingProvider } from '../figma_app/831799';
import { ModalView } from '../figma_app/918700';
import { A as _$$A } from '../svg/433566';
import { A as _$$A2 } from '../svg/927263';
let O = registerTooltip('org_upgrade_user_info_extended', ({
  teamIds: e,
  teamNames: t
}) => {
  return jsx('div', {
    children: e.map((e, a) => {
      let r = getColorForMultiplayer(e, multiplayerColors);
      return jsxs('div', {
        className: 'org_self_serve_modal_tooltip_content--tooltipRow--CyDdQ',
        children: [jsx('div', {
          style: styleBuilderInstance.add({
            backgroundColor: r,
            minWidth: '10px',
            height: '10px',
            margin: '8px',
            borderRadius: '2px'
          }).$
        }), jsx('div', {
          children: t[a]
        })]
      }, e);
    })
  });
}, e => {
  let t = e.getAttribute('data-tooltip-team-names');
  let a = e.getAttribute('data-tooltip-team-ids');
  return {
    teamNames: t.split(','),
    teamIds: a.split(',')
  };
});
let D = 'org_self_serve_modals--modalContainer--dX-kq';
let B = 'org_self_serve_modals--modalWrapperSmall--A6JUB org_self_serve_modals--modalWrapper--swqMp';
let L = 'org_self_serve_modals--modalHeader--nTa0e';
let V = 'org_self_serve_modals--modalText--VYdf5';
function z(e) {
  return jsx('div', {
    style: {
      height: e.height || 12
    }
  });
}
export function $$F1(e) {
  return jsx(HeaderModal, {
    containerClassName: D,
    headerSize: 'hidden',
    isCloseHidden: !0,
    title: '',
    minWidth: 349,
    maxWidth: 349,
    children: jsxs('div', {
      className: B,
      children: [jsx('div', {
        className: L,
        children: renderI18nText('org_self_serve.modals.invalid_email.figma_organization_only_allows_work_emails')
      }), jsx('div', {
        className: V,
        children: renderI18nText('org_self_serve.modals.invalid_email.change_email_address_to_proceed')
      }), jsx(z, {
        height: 12
      }), jsx('a', {
        onClick: e.onFileBrowserClick,
        children: renderI18nText('org_self_serve.modals.invalid_email.go_to_the_file_browser')
      })]
    })
  });
}
export function $$G0(e) {
  return jsx(HeaderModal, {
    containerClassName: D,
    headerSize: 'hidden',
    isCloseHidden: !0,
    title: '',
    minWidth: 349,
    maxWidth: 349,
    children: jsxs('div', {
      className: B,
      children: [jsx('div', {
        className: L,
        children: renderI18nText('org_self_serve.modals.existing_org_admin.figma_organization_already_purchased')
      }), jsx('div', {
        className: V,
        children: renderI18nText('org_self_serve.modals.existing_org_admin.if_you_need_another_organization', {
          contactSales: jsx('a', {
            onClick: e.onContactSales,
            children: renderI18nText('org_self_serve.modals.existing_org_admin.contact_sales')
          })
        })
      }), jsx(z, {
        height: 4
      }), jsx(z, {
        height: 12
      }), jsx('a', {
        onClick: e.onFileBrowserClick,
        children: renderI18nText('org_self_serve.modals.existing_org_admin.go_to_the_file_browser')
      })]
    })
  });
}
export function $$H2(e) {
  return jsx(HeaderModal, {
    containerClassName: D,
    headerSize: 'hidden',
    onClose: e.onClose,
    title: '',
    minWidth: 580,
    maxWidth: 580,
    dataTestId: 'true-up-edu-modal',
    children: jsxs('div', {
      className: 'org_self_serve_modals--modalWrapper--swqMp',
      children: [jsx(SvgComponent, {
        className: 'org_self_serve_modals--modalClose--XbMl2',
        svg: _$$A2,
        onClick: e.onClose
      }), jsx('div', {
        className: L,
        children: renderI18nText('org_self_serve.modals.true_up_edu.figma_grows_with_your_team')
      }), jsx('div', {
        className: V,
        children: renderI18nText('org_self_serve.modals.true_up_edu.members_can_add_new_editors.seat_rename')
      }), jsx(z, {
        height: 8
      }), jsx('div', {
        className: 'org_self_serve_modals--modalSubHeader--FtC-9',
        children: renderI18nText('org_self_serve.modals.true_up_edu.what_to_expect_at_true_up')
      }), jsx('div', {
        className: V,
        children: renderI18nText('org_self_serve.modals.true_up_edu.true_up_explanation.seat_rename', {
          seeFullDetails: jsx('a', {
            href: 'https://help.figma.com/hc/articles/360040328293',
            target: '_blank',
            children: renderI18nText('org_self_serve.modals.true_up_edu.see_full_details')
          })
        })
      })]
    })
  });
}
registerModal(e => {
  let t = e.isProTeam ? designSet.exclude([ProductAccessTypeEnum.DEV_MODE]) : designSet;
  let [a, i] = useState(t.dict(t => e.seatDataByLicenseType[t]?.currentSeats || 0));
  let [o, c] = useState(null);
  let m = e => {
    let t = a[e];
    void 0 !== t && t < 99 && i({
      ...a,
      [e]: t + 1
    });
  };
  let _ = t => {
    let s = e.seatDataByLicenseType[t];
    let r = a[t];
    s != null && r != null && r > s.minSeats && i({
      ...a,
      [t]: r - 1
    });
  };
  let p = (e, t) => {
    if (e.target.value === '') {
      t(0);
      return;
    }
    let a = parseInt(e.target.value);
    isNaN(a) || t(a);
  };
  let g = new CurrencyFormatter(e.currency);
  let x = a[ProductAccessTypeEnum.FIGJAM];
  let f = {
    [ProductAccessTypeEnum.DESIGN]: {
      headerString: getI18nString('all_carts.figma_design_editors.seat_rename'),
      totalSeatCount: a[ProductAccessTypeEnum.DESIGN],
      shouldShowDevModeIncludedText: !0
    },
    [ProductAccessTypeEnum.FIGJAM]: {
      headerString: getI18nString('all_carts.figjam_editors.seat_rename'),
      totalSeatCount: x,
      shouldShowDevModeIncludedText: !1
    },
    [ProductAccessTypeEnum.DEV_MODE]: {
      headerString: getI18nString('all_carts.dev_mode_only_seats'),
      totalSeatCount: a[ProductAccessTypeEnum.DEV_MODE] ?? 0,
      shouldShowDevModeIncludedText: !1
    }
  };
  return jsxs(ConfirmationModal, {
    onSubmit: () => {
      let s = !1;
      if (t.forEach(t => {
        let r = a[t];
        let i = e.seatDataByLicenseType[t]?.minSeats || 0;
        void 0 !== r && !1 === s && (r < i || r > 99) && (c(t), s = !0);
      }), s) {
        return;
      }
      let r = t.reduce((e, t) => e + (a[t] || 0), 0);
      e.minTotalSeats && r < e.minTotalSeats ? c('total') : (e.dispatch(hideModal()), e.updateAdditionalSeats(a));
    },
    confirmText: getI18nString('all_carts.save'),
    cancelText: getI18nString('all_carts.cancel'),
    title: getI18nString('all_carts.add_additional_editors.seat_rename'),
    children: [jsx('div', {
      className: 'org_self_serve_modals--bannerContainer--ly-u-',
      children: o && jsxs('div', {
        className: 'org_self_serve_modals--errorBanner--EeUdZ',
        children: [jsx(SvgComponent, {
          className: 'org_self_serve_modals--errorSvg--h8gsO',
          svg: _$$A
        }), jsxs('div', {
          className: 'org_self_serve_modals--errorBannerText--srvT- org_self_serve_modals--headerModalText--h0Go9',
          children: [o === ProductAccessTypeEnum.DESIGN && renderI18nText('all_carts.you_need_a_minimum_n_design_editors.seat_rename', {
            minSeatsCount: e.seatDataByLicenseType[ProductAccessTypeEnum.DESIGN].minSeats
          }), o === ProductAccessTypeEnum.FIGJAM && renderI18nText('all_carts.you_need_a_minimum_n_whiteboard_editors.seat_rename', {
            minSeatsCount: e.seatDataByLicenseType[ProductAccessTypeEnum.FIGJAM].minSeats
          }), o === ProductAccessTypeEnum.DEV_MODE && renderI18nText('all_carts.you_need_a_minimum_n_dev_mode_seats', {
            minSeatsCount: e.seatDataByLicenseType[ProductAccessTypeEnum.DEV_MODE]?.minSeats || 0
          }), o === 'total' && !!e.minTotalSeats && (getFeatureFlags().org_checkout_min_seat_info_copy ? renderI18nText('all_carts.minimum_seats', {
            minTotalSeats: e.minTotalSeats,
            minDesignSeats: e.seatDataByLicenseType[ProductAccessTypeEnum.DESIGN].minSeats,
            seatsText: renderI18nText('checkout.seats_text', {
              numOfSeats: e.minTotalSeats
            }),
            designSeatsText: renderI18nText('checkout.seats_text', {
              numOfSeats: e.seatDataByLicenseType[ProductAccessTypeEnum.DESIGN].minSeats
            })
          }) : renderI18nText('all_carts.you_need_a_minimum_n_editors.seat_rename', {
            minSeatsCount: e.minTotalSeats
          }))]
        })]
      })
    }), t.sort(compareProductAccessTypes).map(t => {
      let r = f[t];
      let l = e.seatDataByLicenseType[t];
      let o = a[t];
      return void 0 === r || void 0 === l || void 0 === o ? jsx(Fragment, {}) : jsxs('div', {
        children: [jsx(z, {
          height: 16
        }), jsx('div', {
          className: 'org_self_serve_modals--headerModalBoldText--uhAfp org_self_serve_modals--headerModalText--h0Go9',
          children: r.headerString
        }), r.shouldShowDevModeIncludedText && jsxs(Fragment, {
          children: [jsx(z, {
            height: 4
          }), jsx(renderCheckoutDevModeText, {})]
        }), jsx(z, {
          height: 12
        }), jsx(_$$s, {
          'data-testid': `${t}-seat_counter`,
          'billableProductKey': getProductAccessTypeByKey(t),
          'incrementSeats': () => m(t),
          'decrementSeats': () => _(t),
          'numSeats': o,
          'minSeatsCount': l.minSeats,
          'headerText': g.formatMoney(r.totalSeatCount * l.seatUnitCostInCents * (e.showAnnualPrice ? 12 : 1)),
          'headerSubText': mx(e.showAnnualPrice, r.totalSeatCount, !0, l.seatUnitCostInCents, e.currency),
          'updateAdditionalSeatsText': e => p(e, e => {
            i({
              ...a,
              [t]: e
            });
          })
        })]
      }, t);
    }), jsx(z, {
      height: 18
    }), jsx('div', {
      className: 'org_self_serve_modals--divider--cY9-m'
    })]
  });
}, 'AdditionalEditorsModal');
var X = (e => (e[e.NONE = 0] = 'NONE', e[e.DESIGN = 1] = 'DESIGN', e[e.WHITEBOARD = 2] = 'WHITEBOARD', e[e.TOTAL = 3] = 'TOTAL', e))(X || {});
function W({
  userData: e,
  checkboxHandler: t
}) {
  let [a, l] = useState(0);
  let n = useDispatch<AppDispatch>();
  let d = ({
    rect: e,
    designChecked: s,
    ...r
  }) => {
    if (t(r), r.newVal && a < 3) {
      l(e => e + 1);
      let t = s ? getI18nString('checkout.switch_seat_from_design_to_devmode') : getI18nString('checkout.enabled_devmode');
      n(showTooltip({
        target: {
          kind: Alignment.TEXT,
          text: t
        },
        targetRect: {
          top: e.top,
          right: e.right + 8,
          bottom: e.bottom,
          left: e.left + 8,
          width: e.width,
          height: e.height
        },
        textAlign: 'left',
        position: PositionEnum.RIGHT,
        hideAfterDelay: 1e3
      }));
    }
  };
  return jsx(Fragment, {
    children: e.map((a, r) => jsxs('div', {
      'data-testid': 'user-data-row',
      'children': [jsxs(J, {
        rowType: 'data',
        children: [jsx(az, {
          entity: a.user,
          includeUserEmailAddress: !0,
          size: 24
        }), jsx(Z, {
          userInfo: a
        }), jsx(RenderRefCheckbox, {
          checked: a.designEditor,
          onChange: e => {
            t({
              userId: a.user.id,
              type: 'designEditor',
              newVal: e.currentTarget.checked
            });
          }
        }), jsx(FocusCheckbox, {
          checked: a.devMode,
          className: 'org_self_serve_modals--devModeCheckbox--M-CsB',
          onChange: e => {
            d({
              designChecked: a.designEditor,
              userId: a.user.id,
              type: 'devMode',
              newVal: e.currentTarget.checked,
              rect: e.currentTarget.getBoundingClientRect()
            });
          }
        }), jsx(FocusCheckbox, {
          checked: a.figjamEditor,
          className: 'org_self_serve_modals--figjamCheckbox---FJmg',
          onChange: e => {
            t({
              userId: a.user.id,
              type: 'figjamEditor',
              newVal: e.currentTarget.checked
            });
          }
        })]
      }), r !== e.length - 1 && jsx(Y, {})]
    }, a.user.id))
  });
}
function J({
  rowType: e,
  children: t
}) {
  let a = e === 'footer' ? ['55%', '15%', '15%', '15%'] : ['35%', '20%', '15%', '15%', '15%'];
  return jsx(AutoLayout, {
    dataTestId: 'seat-table-row',
    verticalAlignItems: 'center',
    horizontalAlignItems: 'start',
    padding: {
      top: e === 'data' ? 14 : 16,
      right: 16,
      bottom: e === 'data' ? 14 : 16,
      left: 16
    },
    backgroundColor: e === 'header' ? 'hover' : 'default',
    spacing: 0,
    children: t.map((e, t) => jsx(AutoLayout, {
      width: a[t],
      horizontalAlignItems: 'start',
      verticalAlignItems: 'center',
      padding: {
        right: 16
      },
      children: e
    }, t))
  });
}
function Y() {
  return jsx('div', {
    className: cssBuilderInstance.wFull.colorBgTertiary.h1.$
  });
}
function K({
  teamId: e
}) {
  return jsx('div', {
    className: cssBuilderInstance.w8.h8.bRadius2.minW8.$,
    style: styleBuilderInstance.add({
      backgroundColor: getColorForMultiplayer(e, multiplayerColors)
    }).$
  });
}
function Z({
  userInfo: e
}) {
  return e.teams.length > 1 ? jsx('div', {
    'data-tooltip-show-immediately': !0,
    'data-tooltip-type': KindEnum.SPECIAL,
    'data-tooltip': O,
    'data-tooltip-team-names': e.teams.map(e => e.name).join(','),
    'data-tooltip-team-ids': e.teams.map(e => e.id).join(','),
    'data-tooltip-show-right': !0,
    'data-tooltip-light-mode': !0,
    'children': jsx(TextWithTruncation, {
      color: 'default',
      children: renderI18nText('all_carts.editor_table.multiple_teams')
    })
  }) : jsxs(AutoLayout, {
    spacing: 8,
    verticalAlignItems: 'center',
    horizontalAlignItems: 'start',
    children: [jsx(K, {
      teamId: e.teamIds[0]
    }), jsx('div', {
      className: cssBuilderInstance.noWrap.ellipsis.overflowHidden.$,
      children: jsx(TextWithTruncation, {
        color: 'default',
        children: e.teams[0]?.name
      })
    })]
  });
}
registerModal(({
  users: e,
  updateSelectedEditors: t,
  updateAdditionalEmptySeats: a,
  currency: i,
  minTotalSeats: l,
  dispatch: n,
  seatInfo: u,
  monthlyPriceByProduct: p
}) => {
  let [g, f] = useState(e);
  let [y, S] = useState({
    design: u.design.additionalSeatCount,
    figjam: u.figjam.additionalSeatCount,
    dev_mode: u.dev_mode.additionalSeatCount
  });
  let C = useMemo(() => {
    let e = 0;
    let t = 0;
    let a = 0;
    for (let s of Object.values(g)) {
      s.designEditor && e++;
      s.devMode && a++;
      s.figjamEditor && t++;
    }
    return (e += y.design, a += y.dev_mode, t += y.figjam, l && e + t + a < l) ? 3 : e < u.design.minCount || e > 99 ? 1 : t < u.figjam.minCount || t > 99 ? 2 : 0;
  }, [y, g, l, u]);
  let w = e => {
    y[e] >= 99 || S(t => ({
      ...t,
      [e]: t[e] + 1
    }));
  };
  let A = e => {
    y[e] <= 0 || S(t => ({
      ...t,
      [e]: t[e] - 1
    }));
  };
  let I = (e, t) => {
    let a = e.target.value === '' ? 0 : parseInt(e.target.value);
    isNaN(a) || S(e => ({
      ...e,
      [t]: a
    }));
  };
  let k = new CurrencyFormatter(i);
  let P = () => {
    n(hideModal());
  };
  return jsx(TrackingProvider, {
    name: 'Select Editors Modal',
    children: jsxs(ModalView, {
      size: 864,
      maxHeight: 672,
      hide: () => n(hideModal()),
      className: 'org_self_serve_modals--selectEditorsModal--D0yWS',
      children: [jsxs('div', {
        className: 'org_self_serve_modals--selectEditorModalHeader--wPo15 org_self_serve_modals--headerModalText--h0Go9',
        children: [renderI18nText('checkout.add_or_remove_editors'), jsx(ModalCloseButton, {
          customStyle: {
            position: 'initial'
          },
          dispatch: n,
          onClose: P
        })]
      }), jsx(Y, {}), jsxs(J, {
        rowType: 'header',
        children: [jsx(TextWithTruncation, {
          color: 'default',
          fontWeight: 'medium',
          children: renderI18nText('all_carts.editor_table.Name')
        }), jsx(TextWithTruncation, {
          color: 'default',
          fontWeight: 'medium',
          children: renderI18nText('all_carts.editor_table.Teams')
        }), jsxs(AutoLayout, {
          direction: 'vertical',
          spacing: 0,
          horizontalAlignItems: 'start',
          verticalAlignItems: 'center',
          children: [jsx(TextWithTruncation, {
            color: 'default',
            fontWeight: 'medium',
            children: renderI18nText('general.figma_design')
          }), jsxs('div', {
            children: [jsx(TextWithTruncation, {
              color: 'handoff',
              fontWeight: 'medium',
              children: renderI18nText('general.dev_mode')
            }), '\xA0', jsx(TextWithTruncation, {
              color: 'default',
              fontWeight: 'medium',
              children: renderI18nText('checkout.dev_mode_included_text_formatted.included')
            })]
          })]
        }), jsx(TextWithTruncation, {
          color: 'default',
          fontWeight: 'medium',
          children: renderI18nText('general.dev_mode')
        }), jsx(TextWithTruncation, {
          color: 'default',
          fontWeight: 'medium',
          children: renderI18nText('general.figjam')
        })]
      }), jsx(Y, {}), jsx(RecordingScrollContainer, {
        maxHeight: 426,
        children: jsx(W, {
          userData: Object.values(g),
          checkboxHandler: ({
            userId: e,
            type: t,
            newVal: a
          }) => {
            let s = {
              ...g[e],
              [t]: a
            };
            t === 'devMode' && a && (s.designEditor = !1);
            t === 'designEditor' && a && (s.devMode = !1);
            f(t => ({
              ...t,
              [e]: s
            }));
            logAndTrackCTA({
              name: 'org_checkout_select_editors_checkbox',
              licenseType: t,
              checked: a
            });
          }
        })
      }), jsx(Y, {}), jsxs(J, {
        rowType: 'footer',
        children: [jsxs(AutoLayout, {
          spacing: 0,
          direction: 'vertical',
          horizontalAlignItems: 'start',
          verticalAlignItems: 'center',
          children: [jsx(TextWithTruncation, {
            color: 'default',
            fontWeight: 'medium',
            children: renderI18nText('all_carts.add_additional_editors.seat_rename')
          }), jsx(TextWithTruncation, {
            fontWeight: 'regular',
            color: 'secondary',
            children: renderI18nText('all_carts.add_additional_editors_description.seat_rename')
          })]
        }), jsx(_$$s, {
          billableProductKey: ProductAccessTypeEnum.DESIGN,
          incrementSeats: () => w(ProductAccessTypeEnum.DESIGN),
          decrementSeats: () => A(ProductAccessTypeEnum.DESIGN),
          numSeats: y.design,
          minSeatsCount: 0,
          headerText: '',
          headerSubText: '',
          updateAdditionalSeatsText: e => I(e, ProductAccessTypeEnum.DESIGN)
        }), jsx(_$$s, {
          billableProductKey: ProductAccessTypeEnum.DEV_MODE,
          incrementSeats: () => w(ProductAccessTypeEnum.DEV_MODE),
          decrementSeats: () => A(ProductAccessTypeEnum.DEV_MODE),
          numSeats: y.dev_mode,
          minSeatsCount: 0,
          headerText: '',
          headerSubText: '',
          updateAdditionalSeatsText: e => I(e, ProductAccessTypeEnum.DEV_MODE)
        }), jsx(_$$s, {
          billableProductKey: ProductAccessTypeEnum.FIGJAM,
          incrementSeats: () => w(ProductAccessTypeEnum.FIGJAM),
          decrementSeats: () => A(ProductAccessTypeEnum.FIGJAM),
          numSeats: y.figjam,
          minSeatsCount: 0,
          headerText: '',
          headerSubText: '',
          updateAdditionalSeatsText: e => I(e, ProductAccessTypeEnum.FIGJAM)
        })]
      }), jsxs('div', {
        className: 'org_self_serve_modals--selectEditorModalActions--ng3b0 org_self_serve_modals--selectEditorModalFooter--8vKi7',
        children: [C !== 0 ? (() => {
          switch (C) {
            case 0:
            default:
              return;
            case 1:
              return jsx(TextWithTruncation, {
                color: 'danger',
                children: renderI18nText('all_carts.you_need_a_minimum_n_design_editors.seat_rename', {
                  minSeatsCount: u.design.minCount
                })
              });
            case 2:
              return jsx(TextWithTruncation, {
                color: 'danger',
                children: renderI18nText('all_carts.you_need_a_minimum_n_whiteboard_editors.seat_rename', {
                  minSeatsCount: u.figjam.minCount
                })
              });
            case 3:
              return jsx(TextWithTruncation, {
                color: 'danger',
                children: renderI18nText('org_self_serve.purchase_summary.the_organization_plan_requires_at_least_count_editor_seats.seat_rename', {
                  minCount: l
                })
              });
          }
        })() : jsx(TextWithTruncation, {
          fontWeight: 'regular',
          color: 'secondary',
          children: renderI18nText('all_carts.new_total', {
            total: k.formatMoney(function (e, t, a) {
              let s = t.design;
              let r = t.figjam;
              let i = t.dev_mode;
              for (let t in e) {
                e[t].designEditor ? s++ : e[t].devMode && i++;
                e[t].figjamEditor && r++;
              }
              return s * a[ProductAccessTypeEnum.DESIGN] * 12 + r * a[ProductAccessTypeEnum.FIGJAM] * 12 + i * a[ProductAccessTypeEnum.DEV_MODE] * 12;
            }(g, y, p), {
              showCents: !0
            })
          })
        }), jsxs('div', {
          className: 'org_self_serve_modals--buttonGroup--U5iQn',
          children: [jsx(nR, {
            onClick: P,
            children: getI18nString('general.cancel')
          }), jsx(ButtonBasePrimary, {
            onClick: () => {
              C === 0 && (a(y), t(g), n(hideModal()));
            },
            disabled: C !== 0,
            children: getI18nString('checkout.update_seats')
          })]
        })]
      })]
    })
  });
}, 'SelectEditorsModal');
export const wW = $$G0;
export const VE = $$F1;
export const LJ = $$H2;