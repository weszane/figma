import eA from 'classnames';
import { Component, createRef, forwardRef, useCallback, useEffect, useId, useMemo, useRef, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { Fragment, jsx, jsxs } from 'react/jsx-runtime';
import { useDebouncedCallback } from 'use-debounce';
import { reportError } from '../905/11';
import { fetchContactsOptimist } from '../905/14223';
import { p as _$$p } from '../905/42189';
import { d as _$$d } from '../905/44199';
import { ProductStatus } from '../905/54385';
import { s as _$$s2 } from '../905/58247';
import { A as _$$A19 } from '../905/61817';
import { Alert } from '../905/64735';
import { E3, Qw, v_ } from '../905/70909';
import { A as _$$A2 } from '../905/72153';
import { A as _$$A27 } from '../905/81613';
import { Ef } from '../905/81982';
import { SE } from '../905/93400';
import { useSprigWithSampling } from '../905/99656';
import { ModalSupportsBackground, registerModal } from '../905/102752';
import { gH } from '../905/104173';
import { A as _$$A10 } from '../905/118358';
import { J as _$$J3 } from '../905/125993';
import { KindEnum } from '../905/129884';
import { hideModal, popModalStack, showModalHandler } from '../905/156213';
import { ServiceCategories } from '../905/165054';
import { FormattedInputVariant1 } from '../905/203369';
import { resolveMessage } from '../905/231762';
import { $ as _$$$ } from '../905/241406';
import { z as _$$z } from '../905/255946';
import { Label } from '../905/270045';
import { D as _$$D2 } from '../905/274925';
import { gI } from '../905/277373';
import { Z as _$$Z2 } from '../905/279476';
import { VisualBellActions } from '../905/302958';
import { getI18nString, renderI18nText } from '../905/303541';
import { b as _$$b2, c as _$$c } from '../905/308099';
import { v as _$$v2 } from '../905/318279';
import { MediaQuerySvgComponent } from '../905/331623';
import { P as _$$P } from '../905/347284';
import { Q as _$$Q } from '../905/350210';
import { A as _$$A4 } from '../905/356410';
import { nu, Wq } from '../905/358418';
import { getUserId, selectUser } from '../905/372672';
import { deepEqual } from '../905/382883';
import { k as _$$k2 } from '../905/391967';
import { A as _$$A29 } from '../905/392698';
import { e as _$$e4 } from '../905/393279';
import { A as _$$A16 } from '../905/395159';
import { A as _$$A13 } from '../905/419640';
import { A as _$$A18 } from '../905/437920';
import { A as _$$A23 } from '../905/440661';
import { v as _$$v } from '../905/442517';
import { IconButton } from '../905/443068';
import { trackEventAnalytics } from '../905/449184';
import { AutoLayout } from '../905/470281';
import { w3 } from '../905/481915';
import { O as _$$O } from '../905/483217';
import { isStrippedHtmlEmpty } from '../905/491152';
import { handleAtomEvent } from '../905/502364';
import { Cf } from '../905/504727';
import { Vl, yX } from '../905/540198';
import { A as _$$A25 } from '../905/560753';
import { M4 as _$$M, Kp, nn, UC, XT } from '../905/561298';
import { A as _$$A0 } from '../905/562488';
import { FieldContainer } from '../905/567946';
import { A as _$$A28 } from '../905/568234';
import { VisualBellIcon } from '../905/576487';
import { UserAvatar } from '../905/590952';
import { $h, e0 as _$$e3, er as _$$er, EY as _$$EY, iS as _$$iS, j as _$$j, fl, Fu, jB, KG, Oc, Oh, q1, QB, r9, Ub, UI, xe, YK, YN, YT, Zg } from '../905/599844';
import { getFeatureFlags } from '../905/601108';
import { customHistory } from '../905/612521';
import { ManuallyLabeledRadioRoot } from '../905/618904';
import { A as _$$A17 } from '../905/658855';
import { A as _$$A30 } from '../905/663296';
import { $ as _$$$2 } from '../905/668315';
import { qu, UR } from '../905/671449';
import { A as _$$A22 } from '../905/676119';
import { e0 as _$$e2 } from '../905/696396';
import { $i, Ay as _$$Ay2 } from '../905/702716';
import { liveStoreInstance, setupResourceAtomHandler } from '../905/713695';
import { SvgComponent } from '../905/714743';
import { Point } from '../905/736624';
import { is as _$$is } from '../905/744076';
import { DraggableModalManager } from '../905/748636';
import { MH } from '../905/772425';
import { A as _$$A6 } from '../905/794518';
import { A as _$$A14 } from '../905/796878';
import { A as _$$A24 } from '../905/826099';
import { sU, Wh, WM } from '../905/838765';
import { useDropdownState } from '../905/848862';
import { getVsCodeLinkProps } from '../905/850671';
import { A as _$$A15 } from '../905/855351';
import { A as _$$A1 } from '../905/857789';
import { K as _$$K2 } from '../905/868738';
import { d as _$$d2 } from '../905/884707';
import { J as _$$J2 } from '../905/896954';
import { debounce } from '../905/915765';
import { Ay as _$$Ay, iu as _$$iu, Ql } from '../905/918143';
import { hideDropdownAction, selectViewAction, showDropdownThunk } from '../905/929976';
import { q as _$$q } from '../905/932270';
import { noop } from 'lodash-es';
;
import { styleBuilderInstance } from '../905/941192';
import { A as _$$A20 } from '../905/972270';
import { TextWithTruncation } from '../905/984674';
import { versionHandlerInstance } from '../905/985740';
import { o6 } from '../905/986349';
import { A as _$$A21 } from '../1617/19958';
import { A as _$$A3 } from '../1617/45452';
import { A as _$$A11 } from '../1617/579393';
import { A as _$$A12 } from '../1617/582870';
import { A as _$$A26 } from '../1617/755299';
import { A as _$$A7 } from '../1617/805095';
import { A as _$$A9 } from '../5724/965092';
import { cssBuilderInstance } from '../cssbuilder/589278';
import { PageTypeEnum, PublisherRole, UploadStatusEnum } from '../figma_app/10554';
import { VJh } from '../figma_app/27776';
import { FileInputType, HubTypeEnum, PaymentType, ResourceTypeNoComment } from '../figma_app/45218';
import { assertNotNullish } from '../figma_app/95419';
import { G_ } from '../figma_app/99826';
import { ManifestEditorType, PublisherType } from '../figma_app/155287';
import { buildUploadUrl } from '../figma_app/169182';
import { _ as _$$_ } from '../figma_app/169991';
import { SourceType } from '../figma_app/175992';
import { APIParameterUtils, createNoOpValidator } from '../figma_app/181241';
import { DropdownEnableState } from '../figma_app/188152';
import { allCategoriesQuery } from '../figma_app/188671';
import { FPublicationStatusType, FRequestStatusType } from '../figma_app/191312';
import { NU } from '../figma_app/204891';
import { fJ, KM, x5 } from '../figma_app/224019';
import { c$ } from '../figma_app/236327';
import { getFirstFileOrThrow, getFullscreenViewEditorType, getLocalFileId, getOrgRole, getPluginVersion, getPublishedResource, getPublishedResourceOrNull, getPublishingData, getPublishingErrors, getPublishingRole, hasRoleOrOrgChanged, isDevModePlugin, pluginMetadata, validateAndResizeIconImage, validatePublishingData, validatePublishingDataLengths } from '../figma_app/300692';
import { trackGenericEvent } from '../figma_app/314264';
import { getCurrentUserOrg, hasValidId, isEmailAllowed } from '../figma_app/336853';
import { PublishModalState } from '../figma_app/350203';
import { oE, zK } from '../figma_app/397269';
import { isValidEmail } from '../figma_app/416935';
import { throwTypeError } from '../figma_app/465776';
import { getPluginWidgetLabel, mapFileTypeToEnum } from '../figma_app/471982';
import { s as _$$s3 } from '../figma_app/504088';
import { Dl, fd, fy, gD, Ij, pm, Qi, R8, se, uX, Vp, wx, zn } from '../figma_app/559491';
import { isAcceptedPublisher, isAnyPublisher, sendPublisherInvites } from '../figma_app/564095';
import { $W, oB as _$$oB, Dd, f7, j4, kN, of, UU, xw } from '../figma_app/599979';
import { fI } from '../figma_app/626177';
import { BaseLinkComponent, BigTextInputForwardRef, SecureLink } from '../figma_app/637027';
import { jE } from '../figma_app/639088';
import { canAdminOrg, canMemberOrg, getPermissionsState } from '../figma_app/642025';
import { getStatusOrDefault, MAX_TAGLINE_LENGTH, MAX_TAGS_PER_FEED } from '../figma_app/740025';
import { Z as _$$Z } from '../figma_app/761870';
import { isResourceApprovedPublic, isResourcePendingPublishing } from '../figma_app/777551';
import { parsePxInt } from '../figma_app/783094';
import { getAnnualPriceString, isNotInteger, isPriceOutOfRange, MIN_PRICE } from '../figma_app/808294';
import { TrackingProvider, withTrackedClick } from '../figma_app/831799';
import { y$ } from '../figma_app/835219';
import { LoadingSpinner } from '../figma_app/858013';
import { ab, ox } from '../figma_app/870683';
import { ConfirmationModal2 } from '../figma_app/918700';
import { HU } from '../figma_app/926061';
import { GW } from '../figma_app/975811';
import { dn } from '../figma_app/994403';
import { Bp } from '../vendor/374122';
let n;
let ec = new class {
  constructor() {
    this.PermissionsSchemaValidator = createNoOpValidator();
  }
  getPermissions(e) {
    return this.PermissionsSchemaValidator.validate(async ({
      xr: t
    }) => await t.get('/api/plugin_publishers/permissions', APIParameterUtils.toAPIParameters(e)));
  }
}();
let ey = eA;
function eR() {
  return jsxs('div', {
    className: ey()(cssBuilderInstance.cursorDefault.flex.flexColumn.gap10.itemsCenter.justifyCenter.bRadius8.p12.wFull.$),
    children: [jsx('span', {
      style: styleBuilderInstance.add({
        boxSizing: 'content-box',
        margin: '-20px auto',
        opacity: '0.3'
      }).$,
      children: jsx(y$, {})
    }), jsx(TextWithTruncation, {
      color: 'default',
      fontSize: 11,
      children: renderI18nText('community.cards.generating_widget_thumbnail')
    })]
  });
}
function eN(e) {
  let t = jsx('a', {
    href: 'https://help.figma.com/hc/articles/4410337103639#Publish_your_widget',
    target: '_blank',
    className: cssBuilderInstance.cursorPointer.font11.colorTextBrand.$,
    onMouseDown: e => {
      e.preventDefault();
    },
    onClick: e => {
      e.stopPropagation();
    },
    children: renderI18nText('community.cards.learn_more')
  });
  return jsxs('div', {
    className: ey()(cssBuilderInstance.cursorDefault.flex.flexColumn.gap10.itemsCenter.justifyCenter.bRadius8.p12.wFull.$),
    children: [jsx(SvgComponent, {
      svg: _$$A3
    }), jsx(TextWithTruncation, {
      color: 'default',
      fontSize: 11,
      children: renderI18nText(e.cardType === 'upload' ? 'community.cards.upload_your_widget_thumbnail' : 'community.cards.update_your_widget_thumbnail', {
        learnHowLink: t
      })
    })]
  });
}
let eP = function ({
  showLoading: e,
  hasSrc: t
}) {
  return e ? jsx(eR, {}) : t ? jsx(eN, {
    cardType: 'update'
  }) : jsx(eN, {
    cardType: 'upload'
  });
};
let eD = withTrackedClick(e => {
  let [t, i] = useState(!1);
  let [n, s] = useState(!0);
  let {
    pluginId,
    onTileClicked,
    updatePluginPublishingMetadata,
    metadata,
    widget,
    localManifest,
    localPlugin,
    borderClassName,
    subtitle
  } = e;
  let f = widget.current_plugin_version_id ? widget.versions[widget.current_plugin_version_id] : void 0;
  let _ = metadata.widgetSnapshotImageSrc || f?.redirect_snapshot_url;
  let A = t || !_;
  useEffect(() => {
    !metadata.widgetSnapshotImageSrc && localPlugin && gI(localPlugin).then(e => {
      e && updatePluginPublishingMetadata(pluginId, {
        widgetSnapshotImageSrc: URL.createObjectURL(e),
        widgetSnapshotImageBlob: e,
        widgetSnapshotImageError: null
      });
    }).finally(() => s(!1));
  }, [pluginId, metadata.widgetSnapshotImageSrc, localPlugin, updatePluginPublishingMetadata]);
  return jsx(sU, {
    onClick: onTileClicked,
    image: jsx('div', {
      className: yX,
      tabIndex: 0,
      onFocus: () => {
        i(!0);
      },
      onBlur: () => {
        i(!1);
      },
      ref: e.cardRef,
      children: jsxs(WM, {
        className: ey()(Vl, borderClassName),
        children: [jsx(Wh.BottomLeft, {
          children: jsx(dn, {
            editorType: f ? f?.manifest.editorType : localManifest?.editorType
          })
        }), jsxs('div', {
          className: cssBuilderInstance.flex.hFull.p32.relative.borderBox.$,
          children: [A && jsx(eP, {
            showLoading: n && !t,
            hasSrc: !!_
          }), jsx('div', {
            className: cssBuilderInstance.absolute.left0.top0.hFull.wFull.opacity1.eventsNone.$,
            style: styleBuilderInstance.if(t, {
              opacity: 0.1
            }).$,
            children: _ && jsx(_$$z, {
              src: _,
              context: 'community'
            })
          })]
        })]
      })
    }),
    subtitle
  });
});
let eF = registerModal(e => {
  let {
    isWidget,
    onConfirm,
    onCancel
  } = e;
  return jsx(ConfirmationModal2, {
    confirmationTitle: getI18nString('community.publishing.close_confirmation_modal.title'),
    confirmText: getI18nString('general.close_anyway'),
    onConfirm,
    onCancel,
    cancelText: getI18nString('general.go_back'),
    popStack: !0,
    children: isWidget ? jsxs(Fragment, {
      children: [jsx(TextWithTruncation, {
        children: renderI18nText('community.publishing.close_confirmation_modal.data_security_body_1.widget')
      }), jsx(TextWithTruncation, {
        children: renderI18nText('community.publishing.close_confirmation_modal.data_security_body_2.widget')
      })]
    }) : jsxs(Fragment, {
      children: [jsx(TextWithTruncation, {
        children: renderI18nText('community.publishing.close_confirmation_modal.data_security_body_1.plugin')
      }), jsx(TextWithTruncation, {
        children: renderI18nText('community.publishing.close_confirmation_modal.data_security_body_2.plugin')
      })]
    })
  });
}, 'DATA_SECURITY_UNPUBLISHED_CONFIRMATION_MODAL');
let eq = 'playground_file_row--playgroundFileSelect--AKzzs';
let e$ = 'playground_file_row--ui3--61px6';
function eZ(e) {
  let t = useDispatch();
  let {
    resourceId
  } = e;
  let n = assertNotNullish(e.playgroundFigFile);
  let o = useDropdownState();
  let l = o?.type === 'PLAYGROUND_FILE_EDIT_DROPDOWN' && o.data.resourceId === resourceId;
  let d = useRef(null);
  let c = d.current?.getBoundingClientRect();
  return jsxs('div', {
    className: 'playground_file_row--playgroundFileIcon--1f0CR',
    children: [jsx(IconButton, {
      'ref': d,
      'aria-label': getI18nString('community.publishing.playground_file.tooltip'),
      'onClick': () => {
        l ? t(hideDropdownAction()) : t(showDropdownThunk({
          type: 'PLAYGROUND_FILE_EDIT_DROPDOWN',
          data: {
            resourceId
          }
        }));
      },
      'htmlAttributes': {
        'data-tooltip-type': KindEnum.TEXT,
        'data-tooltip': getI18nString('community.publishing.playground_file.tooltip')
      },
      'children': jsx(_$$J3, {})
    }), l && c && jsxs(Cf, {
      targetRect: c,
      lean: 'left',
      minWidth: 120,
      maxWidth: 190,
      disableDropdownScrollContainer: !0,
      dataTestId: 'playgroundFileEditOptions',
      children: [jsx(c$, {
        onClick: () => {
          let e = n?.url;
          e && customHistory.redirect(e, '_blank');
        },
        children: renderI18nText('community.publishing.playground_file.dropdown.open_file')
      }), jsx(c$, {
        onClick: () => {
          t(hideDropdownAction());
          e.removeFileCallback();
        },
        children: renderI18nText('community.publishing.playground_file.dropdown.remove')
      })]
    })]
  });
}
let eJ = 'plugin_publish_modal--semiBoldText--jpwzU';
let e0 = 'plugin_publish_modal--successContentParagraph---3X81 publish_modal--successContentParagraph---jcpl';
let e1 = liveStoreInstance.Query({
  fetch: async (e, {
    xr: t
  }) => (await versionHandlerInstance.getVersions({
    fileKey: e
  })).data.meta.versions[0],
  enabled: e => e !== ''
});
function e2({
  localFileIdOrPluginId: e,
  isWidget: t,
  publishedResource: i,
  error: n,
  playgroundFilePublishType: a,
  playgroundFigFile: s,
  onPlaygroundFileClick: o,
  updateVersionCallback: l,
  revertVersionCallback: d,
  removeFileCallback: c
}) {
  let u = getUserId() ?? void 0;
  let [p] = setupResourceAtomHandler(e1(s?.key || ''));
  let m = p.data;
  let g = s?.editor_type ? mapFileTypeToEnum(s.editor_type) : null;
  let f = getFeatureFlags().ext_plugin_publish_rearch ? FieldContainer : _$$A6;
  return jsx(f, {
    label: jsx('div', {
      className: cssBuilderInstance.noWrap.$,
      children: renderI18nText('community.publishing.playground_file')
    }),
    textLabel: getI18nString('community.publishing.playground_file'),
    error: n,
    children: jsx('div', {
      className: ey()('plugin_publish_modal--rightColumn--Ym-vV publish_modal--rightColumn--m4M9Z', cssBuilderInstance.flex.flexRow.relative.itemsCenter.$),
      children: s ? jsxs(Fragment, {
        children: [jsx('button', {
          type: 'button',
          onClick: o,
          className: eq,
          children: jsxs('div', {
            className: 'playground_file_row--playgroundFileThumbnail--3Av7A',
            children: [jsx(NU, {
              file: s,
              noBorder: !0
            }), g && jsx('div', {
              className: 'playground_file_row--playgroundFileEditorBadge--gYr-G',
              children: jsx(dn, {
                editorType: g,
                isPlaygroundFileInsertBadge: !0
              })
            })]
          })
        }), jsx(e5, {
          localFileIdOrPluginId: e,
          publishedResource: i,
          latestPlaygroundFileVersion: m,
          playgroundFilePublishType: a,
          playgroundFigFile: s,
          updateVersionCallback: l,
          revertVersionCallback: d,
          removeFileCallback: c
        })]
      }) : jsxs(Fragment, {
        children: [jsx('button', {
          type: 'button',
          onClick: o,
          className: eq,
          children: jsx(_$$O, {
            error: !!n
          })
        }), jsx('p', {
          className: ey()('playground_file_row--playgroundFileContentRow--MfIQq', e$),
          children: renderI18nText('community.publishing.plugin_playground_file_help_text_new', {
            useTemplateLink: jsx(BaseLinkComponent, {
              className: ey()('playground_file_row--playgroundLink--dRxMt', e$),
              href: 'https://www.figma.com/community/file/1174497187775558195',
              target: '_blank',
              onClick: () => {
                trackGenericEvent('playground_template_link_click', {
                  isWidget: t,
                  userId: u,
                  pluginId: e
                });
              },
              trusted: !0,
              children: jsx(TextWithTruncation, {
                color: 'brand',
                children: renderI18nText('community.publishing.use_our_template')
              })
            })
          })
        })]
      })
    })
  });
}
function e5({
  localFileIdOrPluginId: e,
  publishedResource: t,
  latestPlaygroundFileVersion: i,
  playgroundFilePublishType: n,
  playgroundFigFile: a,
  updateVersionCallback: o,
  revertVersionCallback: l,
  removeFileCallback: d
}) {
  let c = useDispatch();
  let u = t ? getPluginVersion(t) : pluginMetadata;
  let p = n === _$$J2.Actions.NOOP && i && i.id !== u.playground_file_version_id;
  let m = t && n === _$$J2.Actions.SET && a?.key === u.playground_fig_file?.key;
  return jsxs('div', {
    className: ey()(cssBuilderInstance.flex.flexRow.flexGrow1.itemsCenter.justifyBetween.minW0.$, 'playground_file_row--playgroundFileTile--AzCVH'),
    children: [jsxs('div', {
      className: cssBuilderInstance.ml16.mr4.alignLeft.fontSemiBold.minW0.$,
      children: [jsx('p', {
        className: cssBuilderInstance.font13.ellipsis.noWrap.overflowHidden.fontSemiBold.$,
        children: a?.name
      }), p && jsx('button', {
        className: cssBuilderInstance.bgTransparent.cursorPointer.fontNormal.$,
        onClick: () => {
          c(hideDropdownAction());
          o();
        },
        children: jsx(TextWithTruncation, {
          color: 'brand',
          children: renderI18nText('community.publishing.playground_file.dropdown.update_to_latest_version')
        })
      }), m && jsx('div', {
        children: jsx(TextWithTruncation, {
          fontWeight: 'regular',
          color: 'secondary',
          children: renderI18nText('community.publishing.playground_file.updated_version_confirmation', {
            undoButton: jsx('button', {
              className: cssBuilderInstance.bgTransparent.cursorPointer.$,
              onClick: () => {
                c(hideDropdownAction());
                l();
              },
              children: jsx(TextWithTruncation, {
                color: 'brand',
                children: renderI18nText('community.undo')
              })
            })
          })
        })
      })]
    }), jsx(eZ, {
      resourceId: e,
      playgroundFigFile: a,
      removeFileCallback: d
    })]
  });
}
function e6({
  isFirstTimePublish: e,
  getLastPublishedAtDateString: t
}) {
  return e ? jsx('div', {}) : jsx('div', {
    className: Oc,
    children: renderI18nText('community.publishing.last_published_on_date_time', {
      dateTime: t()
    })
  });
}
let e9 = function ({
  pluginId: e,
  metadata: t,
  publishModalRef: i,
  isWidget: n,
  error: o
}) {
  let l = useDispatch();
  let d = useRef(null);
  let c = useRef(null);
  let [u, p] = useState(!c.current?.value);
  let m = getUserId();
  let h = (i, n, r) => {
    l(fy({
      id: e,
      metadata: {
        ...t,
        iconSrc: i,
        iconBlob: n,
        iconImageError: r ?? null
      }
    }));
  };
  let f = async ({
    files: i,
    allowScaling: r = !1,
    src: a
  }) => {
    try {
      let s = await validateAndResizeIconImage(getFirstFileOrThrow(i), r);
      h(URL.createObjectURL(s), s);
      trackEventAnalytics('community_publish_modal', {
        name: 'upload_icon',
        userId: m,
        resourceType: n ? 'widget' : 'plugin',
        resourceId: e,
        isPaid: t.isPaid,
        src: a
      });
    } catch (e) {
      e instanceof Error && h('', void 0, e.message);
      typeof e == 'string' && h('', void 0, e);
    }
  };
  let _ = async () => {
    let e = c.current;
    e && (await f({
      files: e.files,
      src: FileInputType.FILE_INPUT
    }));
  };
  let A = async e => {
    await f({
      files: e.clipboardData?.files,
      allowScaling: !0,
      src: FileInputType.PASTE
    });
  };
  let y = async e => {
    e.preventDefault();
    e.stopPropagation();
    await f({
      files: e.dataTransfer?.files,
      src: FileInputType.DROP
    });
  };
  let b = () => {
    p(!0);
  };
  let v = e => {
    e.relatedTarget && p(!1);
  };
  useEffect(() => {
    let e = e => {
      d.current && e.target && (d.current.contains(e.target) || p(!1));
    };
    let t = i.current?.getEl();
    u && (document.addEventListener('mousedown', e), t?.addEventListener('mousedown', e));
    return () => {
      document.removeEventListener('mousedown', e);
      t?.removeEventListener('mousedown', e);
    };
  }, [u, i]);
  return jsxs('div', {
    className: cssBuilderInstance.flex.itemsCenter.selfCenter.gap16.$,
    ref: d,
    children: [jsxs('div', {
      className: ey()('plugin_publish_icon_upload--uploadIconFocus--DMPjs plugin_publish_modal--uploadFileFocus--PaUOh', cssBuilderInstance.flex.itemsCenter.justifyCenter.borderBox.relative.flexShrink0.w48.h48.overflowHidden.$),
      onBlur: v,
      onDragOver: e => {
        e.preventDefault();
        e.stopPropagation();
        e.dataTransfer.dropEffect = 'copy';
      },
      onDrop: y,
      onFocus: b,
      onKeyDown: e => {
        e.key === 'Backspace' && (h('', void 0, null), c.current && (c.current.value = ''), _());
      },
      onMouseDown: e => {
        let i = d.current?.contains(document.activeElement);
        !t.iconSrc && i && c.current?.click();
      },
      onPaste: A,
      role: 'button',
      style: styleBuilderInstance.add({
        borderRadius: '12px'
      }).$,
      tabIndex: 0,
      children: [jsx('div', {
        className: cssBuilderInstance.absolute.wFull.hFull.$
      }), t.iconSrc ? jsx('img', {
        className: cssBuilderInstance.w48.h48.eventsNone.$,
        src: t.iconSrc,
        alt: ''
      }) : jsx(MediaQuerySvgComponent, {
        className: cssBuilderInstance.colorIcon.w48.h48.b1.colorBorder.borderBox.flex.itemsCenter.justifyCenter.$$with({
          colorBorderDanger: !!o
        }).$,
        style: styleBuilderInstance.add({
          borderRadius: '12px',
          borderStyle: 'dashed'
        }).$,
        svg: _$$A3,
        fallbackSvg: _$$A7
      })]
    }), jsx('input', {
      className: cssBuilderInstance.absolute.w1.h1.$,
      style: styleBuilderInstance.add({
        clip: 'rect(0,0,0,0)'
      }).$,
      id: 'icon-upload-input',
      type: 'file',
      accept: 'image/*',
      ref: c,
      onChange: _,
      onBlur: v,
      onFocus: b
    }), jsx('div', {
      className: cssBuilderInstance.invisible.with({
        visible: u
      }).$,
      children: renderI18nText('community.publishing.drop_or_paste_your_icon_image_here_or_choose_a_file_from_your_computer', {
        chooseFileLink: jsx('label', {
          className: cssBuilderInstance.cursorPointer.noWrap.colorTextBrand.$,
          htmlFor: 'icon-upload-input',
          children: renderI18nText('community.publishing.choose_a_file')
        })
      })
    })]
  });
};
function tt({
  shouldIncrementVersion: e,
  updateShouldIncrementVersion: t,
  reviewStatus: i
}) {
  let n = useId();
  return jsxs(Label, {
    htmlFor: n,
    className: cssBuilderInstance.flex.itemsCenter.hFull.justifyEnd.gap8.$,
    children: [jsx(ti, {
      reviewStatus: i
    }), jsx(_$$v, {
      id: n,
      checked: e,
      onChange: (e, {
        event: i
      }) => {
        i.stopPropagation();
        t(e);
      },
      htmlAttributes: {
        'data-testid': 'plugin-publish-increment-version-toggle'
      }
    })]
  });
}
function ti({
  reviewStatus: e
}) {
  switch (e) {
    case 'none':
    case 'approved':
      return renderI18nText('community.publishing.publish_a_new_version');
    case 'required':
      return renderI18nText('community.publishing.submit_a_new_version');
    case 'pending':
      return renderI18nText('community.publishing.resubmit_a_new_version');
  }
}
function ta({
  pluginId: e,
  updatePluginPublishingMetadata: t,
  metadata: i,
  shouldIncrementVersion: n
}) {
  let [s, o] = useState(i.currentVersionReleaseNotes);
  let [l, d] = useState(i.newVersionReleaseNotes);
  let c = useCallback((i, n) => {
    t(e, n ? {
      newVersionReleaseNotes: i
    } : {
      currentVersionReleaseNotes: i
    });
  }, [e, t]);
  let u = useDebouncedCallback(c, 200);
  let p = n ? getI18nString('community.publishing.whats_changed_in_this_new_version') : getI18nString('community.publishing.what_can_users_expect_in_this_current_version');
  return jsx(_$$A6, {
    label: getI18nString('community.publishing.version_release_notes'),
    children: jsx(_$$v2, {
      maxLength: 1e4,
      onChange: e => {
        let t = e.currentTarget.value;
        n ? d(t) : o(t);
        u(t, n);
      },
      value: n ? l : s,
      delay: 0,
      placeholder: p,
      className: _$$EY
    })
  });
}
let to = registerModal(e => {
  return jsx(ConfirmationModal2, {
    destructive: !0,
    confirmationTitle: getI18nString('community.publishing.confirm_change_plugin_profile_modal.profile_will_be_removed', {
      profileName: e.prevProfileName
    }),
    confirmText: getI18nString('community.publishing.confirm_change_plugin_profile_modal.cta'),
    onConfirm: e.onConfirm,
    onCancel: e.onCancel,
    popStack: !0,
    children: jsx('div', {
      className: jE,
      children: renderI18nText('community.publishing.confirm_change_plugin_profile_modal.profile_will_be_removed_reason', {
        prevProfileName: jsx('strong', {
          children: e.prevProfileName
        }),
        newProfileName: jsx('strong', {
          children: e.newProfileName
        })
      })
    })
  });
}, 'ConfirmChangePluginProfileModal');
let tl = registerModal(e => {
  let t = {
    authorName: jsx(TextWithTruncation, {
      fontWeight: 'bold',
      children: e.authorName
    }),
    orgName: jsx(TextWithTruncation, {
      fontWeight: 'bold',
      children: e.parentOrgName
    }),
    publishers: jsx(TextWithTruncation, {
      fontWeight: 'bold',
      children: e.usersToRemove.map(e => e.handle).join(', ')
    })
  };
  return jsx(ConfirmationModal2, {
    destructive: !0,
    confirmationTitle: getI18nString('community.publishing.confirm_remove_non_org_publishers_modal.permissions_removed'),
    confirmText: getI18nString('community.publishing.confirm_remove_non_org_publishers_modal.publish_anyway'),
    onConfirm: e.onConfirm,
    popStack: !0,
    children: jsx(TextWithTruncation, {
      children: renderI18nText(e.isWidget ? 'community.publishing.confirm_remove_non_org_publishers_modal.permissions_removed_body.widget' : 'community.publishing.confirm_remove_non_org_publishers_modal.permissions_removed_body.plugin', t)
    })
  });
}, 'ConfirmRemoveNonOrgPublishersModal');
function tc() {
  return jsx('div', {
    className: Fu,
    children: jsxs('div', {
      className: 'plugin_publish_modal--warningBannerContainerFreemium--Kwqq3 publish_modal--warningBannerContainer--xPWDk publish_modal--infoBannerContainer--4XOeF',
      children: [jsx(SvgComponent, {
        className: YK,
        svg: _$$A9
      }), jsx('span', {
        className: KG,
        children: renderI18nText('community.seller.freemium_publishing_temporarily_restricted')
      })]
    })
  });
}
function tE(e, t, i) {
  let n = new Map();
  for (let t in e) n.set(e[t].id, t);
  let r = new Set();
  if (n.has(t.id) && r.add(n.get(t.id)), i) {
    for (let e of [...i.accepted, ...(i.pending ?? [])]) n.has(e.id) && r.add(n.get(e.id));
  }
  return r;
}
function tx({
  email: e,
  usersByEmail: t,
  orgDomains: i,
  publishedPlugin: n,
  org: r
}) {
  if (!isValidEmail(e)) {
    return {
      state: _$$d.ERROR,
      content: e
    };
  }
  let a = t[e] ?? e;
  return tE(t, n.creator, n.plugin_publishers).has(e) ? {
    state: _$$d.ERROR,
    content: a
  } : n.roles.is_public || n.roles.org == null || !r || r.id !== n.roles.org.id ? {
    state: _$$d.OK,
    content: a
  } : isEmailAllowed(i, a) ? {
    state: _$$d.ERROR,
    content: a
  } : {
    state: _$$d.OK,
    content: a
  };
}
let tC = registerModal(e => {
  return jsxs(ConfirmationModal2, {
    destructive: !0,
    confirmationTitle: e.isWidget ? getI18nString('community.publishing.confirm_plugin_ownership_transfer_modal.transfer_plugin_ownership.widget') : getI18nString('community.publishing.confirm_plugin_ownership_transfer_modal.transfer_plugin_ownership.plugin'),
    confirmText: getI18nString('file_browser.modal.transfer_ownership_cta'),
    onConfirm: e.onConfirm,
    onCancel: e.onCancel,
    popStack: !0,
    children: [jsx(TextWithTruncation, {
      fontWeight: 'bold',
      children: renderI18nText('file_browser.modal.are_you_sure_to_transfer_ownership', {
        newOwnerName: e.newOwnerName,
        resourceName: e.resourceName
      })
    }), jsx(TextWithTruncation, {
      children: renderI18nText('file_browser.modal.cannot_undo_warning')
    })]
  });
}, 'ConfirmPluginOwnershipTransferModal');
function tR(e) {
  return {
    type: 'option',
    key: e,
    text: function (e) {
      switch (e) {
        case PublisherRole.OWNER:
          return getI18nString('community.publishing.publisher_role_owner');
        case PublisherRole.PUBLISHER:
          return getI18nString('community.publishing.publisher_role_can_update');
        default:
          return '';
      }
    }(e)
  };
}
function tN(e) {
  return 'handle' in e ? e.handle : e.email ?? '';
}
function tP({
  user: e,
  isPending: t,
  isCurrentUser: i
}) {
  return jsxs(AutoLayout, {
    children: [jsx('div', {
      className: cssBuilderInstance.$$with({
        opacity0_5: t
      }).$,
      children: jsx(UserAvatar, {
        user: e
      })
    }), jsx('div', {
      children: jsxs(TextWithTruncation, {
        color: t ? 'tertiary' : void 0,
        children: [tN(e), ' ', t && renderI18nText('community.publish.pending'), ' ', i && renderI18nText('role_row.you_label'), ' ']
      })
    })]
  });
}
function tO({
  user: e,
  publisherRole: t,
  isPending: i,
  isCurrentUser: n,
  canSetToOwner: a,
  pluginName: o,
  publishedPlugin: l,
  closePluginPublishModal: d
}) {
  let c = useDispatch();
  let u = useDropdownState();
  let p = t === PublisherRole.OWNER ? [tR(PublisherRole.OWNER)] : [tR(PublisherRole.PUBLISHER)];
  t !== PublisherRole.OWNER && (!i && a && p.unshift(tR(PublisherRole.OWNER)), p.push({
    type: 'separator'
  }), p.push({
    type: 'option',
    key: PublisherRole.NONE,
    text: getI18nString('confirm_remove_role.remove')
  }));
  return jsxs(AutoLayout, {
    padding: {
      vertical: 4,
      horizontal: 0
    },
    direction: 'horizontal',
    spacing: 8,
    horizontalAlignItems: 'space-between',
    children: [jsx(tP, {
      isPending: i,
      isCurrentUser: n,
      user: e
    }), jsx(HU, {
      dispatch: c,
      onChange: t => {
        t === PublisherRole.OWNER ? l?.monetized_resource_metadata ? c(showModalHandler({
          type: _$$K2,
          data: {}
        })) : c(showModalHandler({
          type: tC,
          data: {
            newOwnerName: tN(e),
            resourceName: o,
            isWidget: l.is_widget,
            onConfirm: () => {
              c(wx({
                role: t,
                userId: e.id,
                resource: l
              }));
            },
            onCancel: () => { }
          },
          showModalsBeneath: !0
        })) : (c(wx({
          role: t,
          userId: e.id,
          resource: l
        })), t === PublisherRole.NONE && n && d());
      },
      options: p,
      id: `publish-invite-selector-${e.id}`,
      value: t,
      dropdownShown: u,
      dropdownData: {
        dropdownId: e.id
      },
      disabled: t === PublisherRole.OWNER
    })]
  });
}
function tD({
  gotoCreatedBySection: e,
  owner: t
}) {
  return jsxs(AutoLayout, {
    direction: 'vertical',
    horizontalAlignItems: 'stretch',
    padding: {
      horizontal: 16,
      vertical: 8
    },
    spacing: 8,
    children: [jsx(Alert, {
      orientation: 'vertical',
      iconSrc: _$$A9,
      variant: 'brand',
      children: renderI18nText('community.publishing.publish_first_to_invite', {
        publishThisResourceLink: jsx('button', {
          className: cssBuilderInstance.colorTextBrand.cursorPointer.mr0.p0.bgTransparent.b0.$,
          onClick: e,
          children: renderI18nText('community.publishing.publish_this_resource')
        })
      })
    }), jsxs(AutoLayout, {
      width: 'fill-parent',
      horizontalAlignItems: 'space-between',
      children: [jsx(tP, {
        isPending: !1,
        isCurrentUser: !0,
        user: t
      }), jsx(TextWithTruncation, {
        children: renderI18nText('community.publishing.publisher_role_owner')
      })]
    })]
  });
}
function tL({
  token: e
}) {
  let t = hasValidId(e.content) ? e.content.handle : e.content;
  return jsx('span', {
    className: cssBuilderInstance.maxW300.overflowHidden.ellipsis.noWrap.$,
    children: jsx(TextWithTruncation, {
      children: t
    })
  });
}
let tF = new Ef([], {
  keys: ['handle', 'email'],
  threshold: 0,
  tokenize: !0,
  matchAllTokens: !0
});
function tM({
  contacts: e,
  currentUser: t,
  gotoCreatedBySection: i,
  org: n,
  orgDomains: o,
  pluginName: l,
  publishedPlugin: d,
  userIsAdmin: c,
  allowedTabs: u,
  closePluginPublishModal: p,
  entryPoint: m
}) {
  let [h, g] = useState({
    inputValue: '',
    tokens: [],
    errorMessage: ''
  });
  let [f, _] = useState(!1);
  let A = useDispatch();
  function y(t) {
    return tx({
      email: t,
      usersByEmail: e.usersByEmail,
      org: n,
      publishedPlugin: d,
      orgDomains: o
    });
  }
  useEffect(() => {
    A(fetchContactsOptimist());
  }, [A]);
  useEffect(() => {
    m !== PageTypeEnum.RESOURCE_PAGE && A(uX({
      resourceId: d.id,
      resourceType: d.is_widget ? HubTypeEnum.WIDGET : HubTypeEnum.PLUGIN
    }));
  }, [A, d.id, d.is_widget, m]);
  let b = !!d.roles.org && !d.roles.is_public && d.publishing_status === FPublicationStatusType.ORG_PRIVATE;
  let v = (t.id === d.creator.id || c) && b;
  return jsxs(AutoLayout, {
    direction: 'vertical',
    horizontalAlignItems: 'stretch',
    padding: {
      horizontal: 16,
      vertical: 8
    },
    spacing: 8,
    children: [jsx(tj, {
      allowedTabs: u,
      isPrivateResource: b,
      gotoCreatedBySection: i
    }), jsx(_$$e4, {
      SearchResultComponent: o6,
      TokenComponent: tL,
      autocomplete: h,
      buttonText: getI18nString('file_permissions_modal.send_invite'),
      dispatch: A,
      dropdownShown: null,
      getSearchResults(i) {
        let r;
        let {
          usersByEmail
        } = e;
        n?.id === d?.roles?.org?.id && c && (a = {
          ...usersByEmail,
          [t.email]: t
        });
        let s = function (e, t, i, n) {
          let r = tE(t, i, n);
          for (let t of e.tokens) r.add(typeof t.content == 'string' ? t.content.trim() : t.content.email);
          return r;
        }(i, usersByEmail, d.creator, d.plugin_publishers);
        let o = Object.keys(r = usersByEmail).map(e => {
          let t = r[e];
          return {
            ...t,
            email: t.email.trim(),
            handle: t.handle.trim()
          };
        });
        tF.set(o);
        return tF.search(i.inputValue).filter(({
          email: e
        }) => !s.has(e)).slice(0, 10);
      },
      inviteLevel: PublisherRole.PUBLISHER,
      isSubmitting: f,
      onAutocompleteChange(e) {
        g(e);
      },
      onSubmit(e) {
        let t = isValidEmail(e.inputValue) ? {
          inputValue: '',
          tokens: [...e.tokens, y(e.inputValue)],
          errorMessage: e.errorMessage
        } : e;
        let i = _$$Z(t);
        _(!0);
        sendPublisherInvites(d, i).then(({
          resource: e,
          errors: i
        }) => {
          let n = new Set(i.map(({
            email: e
          }) => e));
          g({
            inputValue: '',
            tokens: t.tokens.filter(e => {
              let t = hasValidId(e.content) ? e.content.email : e.content;
              return n.has(t);
            }).map(e => ({
              ...e,
              state: _$$d.ERROR
            })),
            errorMessage: ''
          });
          A(Qi({
            publishedPlugins: [e],
            src: 'PluginPublishModalPermissionsTabContents.onSubmit'
          }));
        }).catch(e => {
          A(VisualBellActions.enqueue({
            message: resolveMessage(e, e.message),
            error: !0
          }));
        }).finally(() => {
          _(!1);
        });
      },
      searchResultToken(t) {
        return tx({
          email: t.email,
          usersByEmail: e.usersByEmail,
          org: n,
          publishedPlugin: d,
          orgDomains: o
        });
      },
      validateToken: y
    }), jsx(_$$P, {
      className: cssBuilderInstance.maxH300.$,
      children: jsxs(AutoLayout, {
        direction: 'vertical',
        spacing: 8,
        children: [jsx(tO, {
          user: d.creator,
          publisherRole: PublisherRole.OWNER,
          isPending: !1,
          isCurrentUser: t.id === d.creator.id,
          pluginName: l,
          publishedPlugin: d,
          closePluginPublishModal: p
        }, d.creator.id), d.plugin_publishers?.accepted.map(e => jsx(tO, {
          user: e,
          publisherRole: PublisherRole.PUBLISHER,
          isPending: !1,
          isCurrentUser: t.id === e.id,
          canSetToOwner: v,
          pluginName: l,
          publishedPlugin: d,
          closePluginPublishModal: p
        }, e.id)), d.plugin_publishers?.pending?.map(e => jsx(tO, {
          user: e,
          isCurrentUser: t.id === e.id,
          publisherRole: PublisherRole.PUBLISHER,
          isPending: !0,
          pluginName: l,
          publishedPlugin: d,
          closePluginPublishModal: p
        }, e.id))]
      })
    })]
  });
}
function tj({
  allowedTabs: e,
  isPrivateResource: t,
  gotoCreatedBySection: i
}) {
  return e.includes(KM.PUBLISH) ? getFeatureFlags().ext_plugin_publish_rearch ? jsx(TextWithTruncation, {
    children: t ? getI18nString('community.publishing.permissions.org_private_info_text') : getI18nString('community.publishing.anyone_you_invite_can_publish')
  }) : t ? jsx(TextWithTruncation, {
    children: renderI18nText('community.publishing.permissions.org_private_info_text')
  }) : jsx(TextWithTruncation, {
    children: renderI18nText('community.publishing.people_given_update_permissions_are_not_visible_to_the_public', {
      createdByLink: jsx('button', {
        onClick: i,
        style: styleBuilderInstance.colorTextBrand.cursorPointer.mr0.p0.bgTransparent.add({
          border: 'none'
        }).$,
        children: renderI18nText('community.publishing.created_by_link')
      })
    })
  }) : null;
}
function tU({
  contacts: e,
  currentUser: t,
  gotoCreatedBySection: i,
  org: n,
  orgDomains: a,
  pluginName: s,
  publishedPlugin: o,
  userIsAdmin: l,
  allowedTabs: d,
  closePluginPublishModal: c,
  entryPoint: u
}) {
  let p = null;
  p = o.id && o.plugin_publishers && getPluginVersion(o).id ? jsx(tM, {
    allowedTabs: d,
    closePluginPublishModal: c,
    contacts: e,
    currentUser: t,
    entryPoint: u,
    gotoCreatedBySection: i,
    org: n,
    orgDomains: a,
    pluginName: s,
    publishedPlugin: o,
    userIsAdmin: l
  }) : jsx(tD, {
    gotoCreatedBySection: i,
    owner: t
  });
  return jsx('div', {
    className: cssBuilderInstance.py8.$,
    children: p
  });
}
function tW({
  orgToPublishTo: e,
  roleToPublishAs: t,
  setRoleToPublishAs: i,
  publishedPlugin: n,
  isPaidResource: a,
  isUserPendingOrAcceptedPublisher: s
}) {
  return jsx(_$$A6, {
    label: getI18nString('community.publishing.publish_to'),
    children: jsxs(AutoLayout, {
      direction: 'vertical',
      spacing: 16,
      children: [jsx(tK, {
        roleToPublishAs: t,
        setRoleToPublishAs: i,
        orgToPublishTo: e,
        disabled: !e || s || a && t === PublisherType.PUBLIC
      }), jsx(tY, {
        publishedPlugin: n,
        roleToPublishAs: t
      })]
    })
  });
}
function tK({
  roleToPublishAs: e,
  setRoleToPublishAs: t,
  orgToPublishTo: i,
  disabled: n
}) {
  return i ? jsxs('form', {
    children: [jsx(_$$b2, {
      value: e,
      onChange: t,
      legend: jsx(_$$q, {
        children: renderI18nText('community.publishing.publish_to')
      }),
      children: jsxs('div', {
        className: 'plugin_publish_role_to_publish_as--roleToPublishAsRadioOptions--seiRG',
        children: [jsx(_$$c, {
          readonly: n || void 0,
          value: PublisherType.ORG,
          label: jsx(Label, {
            children: i.name
          })
        }), jsx(_$$c, {
          readonly: n || void 0,
          value: PublisherType.PUBLIC,
          label: jsx(Label, {
            children: renderI18nText('community.community')
          })
        })]
      })
    }), e === PublisherType.ORG ? jsx(_$$A1, {
      iconSrc: _$$A11,
      children: renderI18nText('community.publishing.private_only_people_at_org_entity', {
        orgName: i.name
      })
    }) : jsx(_$$A1, {
      iconSrc: _$$A12,
      children: renderI18nText('community.publishing.public_everyone_in_the_world')
    })]
  }) : jsxs('div', {
    children: [jsx('div', {
      className: cssBuilderInstance.h32.flex.flexRow.itemsCenter.ellipsis.noWrap.overflowHidden.$,
      children: jsx(TextWithTruncation, {
        fontSize: 12,
        children: renderI18nText('community.community')
      })
    }), jsx(_$$A1, {
      iconSrc: _$$A12,
      children: renderI18nText('community.publishing.public_everyone_in_the_world')
    })]
  });
}
function tY({
  publishedPlugin: e,
  roleToPublishAs: t
}) {
  let i;
  let n = e.roles;
  let a = e.is_widget;
  if (isResourceApprovedPublic(e) || t === PublisherType.ORG) return null;
  if (n.org != null && t === PublisherType.PUBLIC) {
    i = jsx(TextWithTruncation, {
      children: renderI18nText(a ? 'community.publishing.figma_reviews_all_resources_published_to_community_org_private.widget' : 'community.publishing.figma_reviews_all_resources_published_to_community_org_private.plugin', {
        orgName: n.org.name
      })
    });
  } else {
    let e = jsx(SecureLink, {
      href: 'https://help.figma.com/hc/articles/360039958914',
      target: '_blank',
      trusted: !0,
      children: renderI18nText('community.publishing.see_our_guidelines_here')
    });
    i = jsx(TextWithTruncation, {
      children: renderI18nText(a ? 'community.publishing.resources_published_to_the_public_will_be_reviewed.widget' : 'community.publishing.resources_published_to_the_public_will_be_reviewed.plugin', {
        seeOurGuidelinesLink: e
      })
    });
  }
  return jsx(Fragment, {
    children: jsx(_$$A10, {
      bannerContent: i
    })
  });
}
let tZ = [{
  tab: x5[0],
  title: () => getI18nString('community.publishing.publish_details'),
  isVisible: () => !0
}, {
  tab: x5[1],
  title: () => getI18nString('community.publishing.data_security_tab'),
  isVisible: () => !0
}, {
  tab: x5[2],
  title: () => getI18nString('community.publishing.permissions_tab'),
  dataOnboardingKey: _$$k2,
  isVisible: () => !0
}];
function tX(e) {
  return jsx('div', {
    className: ey()(v_, E3),
    role: 'tablist',
    children: tZ.map(t => e.allowedTabs.includes(t.tab) && t.isVisible() ? jsx(fJ, {
      selectedTab: e.selectedTab,
      onClick: e.onClick,
      tab: t.tab,
      title: t.title,
      dataOnboardingKey: t.dataOnboardingKey
    }, t.tab) : null)
  });
}
function t0({
  plugin: e,
  userId: t,
  orgId: i
}) {
  let n = e.is_widget ? ox(e.id) : ab(e.id);
  let {
    href,
    onClick
  } = getVsCodeLinkProps(n);
  return jsx('div', {
    className: 'plugin_share_link--successContentParagraph--lALMC publish_modal--successContentParagraph---jcpl',
    children: jsx('a', {
      className: 'plugin_share_link--blueLink--E34aZ blue_link--blueLink--9rlnd',
      href,
      target: '_blank',
      onClick: n => {
        trackEventAnalytics('plugin_publish_social_copy', {
          userId: t,
          orgId: i,
          pluginId: e.id
        });
        onClick && onClick(n);
      },
      children: n
    })
  });
}
function t5({
  isWidget: e
}) {
  if (getFeatureFlags().ext_plugin_publish_rearch) {
    let t = e ? getI18nString('community.publishing.widget_permissions') : getI18nString('community.publishing.plugin_permissions');
    return jsx('div', {
      className: Qw,
      children: t
    });
  }
  let t = e ? getI18nString('community.publishing.publish_widget') : getI18nString('community.publishing.publish_plugin');
  return jsx(Fragment, {
    children: jsx('div', {
      className: Qw,
      children: t
    })
  });
}
let ir = new MH();
function ia({
  creators: e,
  setCreators: t,
  acceptedCreators: i,
  author: n
}) {
  let [s, o] = useState([]);
  let l = useMemo(() => new Map(e.map(e => [e.id, e])), [e]);
  let d = useMemo(() => j4(n), [n]);
  let {
    isOpen,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    getItemProps
  } = Bp({
    selectedItem: null,
    items: s,
    onInputValueChange: ({
      inputValue: e
    }) => {
      if (!e) {
        o([]);
        return;
      }
      ir.search(e).then(e => o(e.filter(e => !l.has(e.id) && d?.community_profile_id !== e.id)));
    },
    stateReducer: (e, t) => {
      let {
        changes,
        type
      } = t;
      switch (type) {
        case Bp.stateChangeTypes.InputBlur:
          return {
            ...changes,
            highlightedIndex: e.highlightedIndex,
            inputValue: ''
          };
        case Bp.stateChangeTypes.InputKeyDownEnter:
        case Bp.stateChangeTypes.ItemClick:
          return {
            ...changes,
            highlightedIndex: e.highlightedIndex,
            isOpen: !0,
            inputValue: ''
          };
        default:
          return changes;
      }
    },
    onStateChange: ({
      selectedItem: n
    }) => {
      if (!n) return;
      let r = i.findIndex(e => e.id === n.id) === -1;
      t([...e, {
        ...n,
        isPending: r
      }]);
    }
  });
  return jsxs('div', {
    className: cssBuilderInstance.wFull.$,
    children: [jsx('div', {
      className: cssBuilderInstance.wFull.$,
      ...getComboboxProps(),
      children: jsx(BigTextInputForwardRef, {
        className: 'plugin_publish_modal--textInputUI3--YaTWB publish_modal--textInputUI3--bgKs8',
        placeholder: getI18nString('community.publishing.type_name_or_handle'),
        ...getInputProps()
      })
    }), jsx('ul', {
      className: ey()(cssBuilderInstance.absolute.zIndex1.b1.colorBg.colorBorder.bRadius4.mt4.maxH300.overflowYScroll.$$with({
        hidden: !isOpen || !s.length
      }).$, 'plugin_creators_autocomplete--dropdownUI3---ShTX'),
      ...getMenuProps(),
      children: isOpen && s.map((e, t) => jsx('li', {
        className: cssBuilderInstance.p8.$$with({
          colorBgBrandTertiary: highlightedIndex === t
        }).$,
        ...getItemProps({
          item: e,
          index: t
        }),
        children: jsx(_$$A20, {
          avatarEntity: e,
          authorDisplayName: e.name,
          authorProfileHandle: e.profile_handle
        })
      }, e.id))
    })]
  });
}
function is({
  creators: e,
  removeCreator: t
}) {
  return jsx(AutoLayout, {
    direction: 'vertical',
    children: e.map(e => jsx(_$$A19, {
      profile: e,
      onClick: () => t(e.id)
    }, e.id))
  });
}
function il({
  creators: e,
  setCreators: t,
  acceptedCreators: i,
  author: n
}) {
  let s = useMemo(() => e.some(e => e.isPending), [e]);
  let o = useMemo(() => e.filter(e => !('user_id' in n) || e.primary_user_id !== n.user_id), [e, n]);
  return jsxs('div', {
    className: cssBuilderInstance.flex.flexColumn.gap8.relative.itemsStretch.$,
    children: [jsx(is, {
      creators: o,
      removeCreator: i => {
        t(e.filter(e => e.id !== i));
      }
    }), jsx(ia, {
      creators: e,
      setCreators: t,
      acceptedCreators: i,
      author: n
    }), s && jsx(Alert, {
      orientation: 'vertical',
      variant: 'gray',
      iconSrc: _$$A21,
      children: renderI18nText('community.publishing.need_to_accept_your_invitation')
    })]
  });
}
function iu({
  isPrimaryOwner: e,
  onChange: t,
  metadata: i,
  resourceType: n,
  publishedPlugin: s,
  roleToPublishAs: o,
  isPaidResource: l,
  updateCreators: d,
  setCreatorsError: c,
  publishingState: u
}) {
  let [p, m] = useState(!!u.metadata?.creators.length);
  let h = useId();
  return jsxs(Fragment, {
    children: [jsx(_$$A6, {
      labelId: h,
      label: getI18nString('community.publishing.creators'),
      children: jsx('div', {
        children: e ? jsxs(Fragment, {
          children: [jsx(_$$Q, {
            ariaLabelledBy: h,
            property: i.author,
            onChange: t,
            resourceType: n,
            resource: s,
            roleToPublishAs: o,
            isPaid: l
          }), o === PublisherType.PUBLIC && !p && jsx(_$$A22, {
            onClick: () => m(!0)
          })]
        }) : jsx(_$$A19, {
          profile: {
            ...s.publisher,
            isPending: !1
          },
          dataTestId: 'plugin-publish-creator-publisher'
        })
      })
    }), o === PublisherType.PUBLIC && jsx(Fragment, {
      children: p && jsx(_$$A6, {
        label: getI18nString('community.publishing.cocreators'),
        children: jsx(il, {
          creators: i.creators,
          setCreators: d,
          setError: c,
          acceptedCreators: s.community_publishers.accepted,
          author: i.author
        })
      })
    })]
  });
}
function ih({
  price: e,
  onIsAnnualDiscountActiveChange: t,
  onAnnualDiscountChange: i,
  annualDiscount: n,
  annualDiscountError: s,
  disabled: o = !1,
  isAnnualDiscountActive: l = !1
}) {
  let d = useId();
  return jsxs(_$$A6, {
    label: '',
    disabled: o,
    children: [jsxs('div', {
      className: _$$iS,
      children: [jsxs('div', {
        className: ey()(YT, {
          [r9]: o
        }),
        children: [jsx(_$$v, {
          id: d,
          checked: l,
          onChange: t,
          disabled: o
        }), jsx('label', {
          className: ey()($h, {
            [r9]: o
          }),
          htmlFor: d,
          children: renderI18nText('community.seller.give_yearly_discount')
        })]
      }), l && jsxs('div', {
        className: _$$er,
        children: [jsx(FormattedInputVariant1, {
          placeholder: e ? getI18nString('community.seller.add_percent') : getI18nString('community.seller.percent_discount'),
          property: n,
          formatter: new GW(),
          onChange: i,
          className: ey()(_$$j, {
            [_$$e3]: !!s
          }),
          disabled: o
        }), jsx('div', {
          className: Oh,
          children: !s && getAnnualPriceString(e, n)
        })]
      })]
    }), l && !!s && jsx('div', {
      className: jB,
      children: s
    })]
  });
}
function iE({
  existingSecurityFormResponse: e,
  localSecurityFormResponse: t,
  isWidget: i,
  goToSecurityTab: n,
  optedOutOfSecurityForm: a
}) {
  let s = null;
  if (qu(t) && !e) {
    s = jsx(ix, {
      children: jsx(TextWithTruncation, {
        children: renderI18nText('community.publishing.data_security.initial', {
          buttonText: jsx(iS, {
            text: i ? getI18nString('community.publishing.data_security.initial_button.widget') : getI18nString('community.publishing.data_security.initial_button.plugin'),
            onClick: n
          })
        })
      })
    });
  } else if (t) {
    let o = UR(t, e);
    s = a && e ? e.status === FRequestStatusType.APPROVED ? jsx(ix, {
      children: jsx(TextWithTruncation, {
        children: renderI18nText(i ? 'community.publishing.data_security.opted_out.approved.widget' : 'community.publishing.data_security.opted_out.approved.plugin')
      })
    }) : jsx(ix, {
      children: jsx(TextWithTruncation, {
        children: renderI18nText('community.publishing.data_security.opted_out.pending_rejected')
      })
    }) : o === 0 ? jsxs(ix, {
      children: [jsx(SvgComponent, {
        className: cssBuilderInstance.colorIcon.$,
        svg: _$$A26
      }), jsx(TextWithTruncation, {
        children: renderI18nText('community.publishing.data_security.ready_to_submit', {
          buttonText: jsx(iS, {
            text: getI18nString('community.publishing.data_security.security_details_button'),
            onClick: n
          })
        })
      })]
    }) : jsx(ix, {
      children: jsxs(AutoLayout, {
        width: 'fill-parent',
        horizontalAlignItems: 'space-between',
        children: [jsx(iS, {
          text: getI18nString('community.publishing.data_security.details_are_missing'),
          onClick: n
        }), jsx(AutoLayout, {
          width: 'hug-contents',
          direction: 'horizontal',
          backgroundColor: 'danger-tertiary',
          padding: {
            vertical: 4,
            horizontal: 8
          },
          cornerRadius: 3,
          children: jsx(TextWithTruncation, {
            color: 'danger',
            children: renderI18nText('community.publishing.data_security.number_of_errors', {
              num: o
            })
          })
        })]
      })
    });
  } else if (e) {
    switch (e.status) {
      case FRequestStatusType.PENDING:
        s = jsxs(ix, {
          children: [jsx(SvgComponent, {
            className: cssBuilderInstance.colorIcon.$,
            svg: _$$A26
          }), jsx(TextWithTruncation, {
            children: renderI18nText('community.publishing.data_security.pending', {
              buttonText: jsx(iS, {
                text: getI18nString('community.publishing.data_security.security_details_button'),
                onClick: n
              })
            })
          })]
        });
        break;
      case FRequestStatusType.APPROVED:
        s = jsxs(ix, {
          children: [jsx(_$$_, {}), jsx(TextWithTruncation, {
            children: renderI18nText('community.publishing.data_security.approved', {
              buttonText: jsx(iS, {
                text: getI18nString('community.publishing.data_security.security_details_button'),
                onClick: n
              })
            })
          })]
        });
        break;
      case FRequestStatusType.REJECTED:
        s = jsx(ix, {
          children: jsx(TextWithTruncation, {
            children: renderI18nText('community.publishing.data_security.rejected', {
              buttonText: jsx(iS, {
                text: getI18nString('community.publishing.security_form.learn_more_arrow'),
                onClick: n
              })
            })
          })
        });
        break;
      default:
        throwTypeError(e.status);
    }
  }
  return jsx(_$$A6, {
    label: getI18nString('community.publishing.data_security'),
    children: s
  });
}
function ix({
  children: e
}) {
  return jsx(AutoLayout, {
    width: 'fill-parent',
    height: 'fill-parent',
    verticalAlignItems: 'center',
    children: e
  });
}
function iS({
  text: e,
  onClick: t
}) {
  return jsx('button', {
    onClick: t,
    className: cssBuilderInstance.bgTransparent.colorTextBrand.cursorPointer.$,
    children: e
  });
}
function iP({
  value: e,
  maxLength: t,
  warningLength: i
}) {
  let n = e.length > t;
  let a = e.length > i && e.length <= t;
  return jsx('div', {
    'className': cssBuilderInstance.$$case([[n, cssBuilderInstance.colorTextDanger], [a, cssBuilderInstance.colorTextWarning]], cssBuilderInstance.colorTextTertiary).ml8.$,
    'style': styleBuilderInstance.add({
      gridColumnStart: 16,
      gridColumnEnd: 18
    }).$,
    'data-testid': 'text-character-counter',
    'children': t - e.length
  });
}
function iO({
  value: e,
  onChange: t,
  resourceType: i,
  error: n,
  required: a = !1
}) {
  return jsx(_$$A6, {
    label: getI18nString('community.general.tagline'),
    afterLabelContent: jsx(iP, {
      value: e,
      warningLength: MAX_TAGS_PER_FEED,
      maxLength: MAX_TAGLINE_LENGTH
    }),
    error: n,
    required: a,
    children: jsx(BigTextInputForwardRef, {
      className: ey()(xe, {
        [_$$e3]: !!n
      }),
      value: e,
      onChange: t,
      spellCheck: !1,
      placeholder: i === HubTypeEnum.WIDGET ? getI18nString('community.publishing.widget_tagline_input_placeholder') : getI18nString('community.publishing.plugin_tagline_input_placeholder')
    })
  });
}
forwardRef(({
  maxLength: e,
  warningLength: t,
  ...i
}, n) => {
  return jsxs(Fragment, {
    children: [jsx(iP, {
      value: i.value,
      maxLength: e,
      warningLength: t
    }), jsx(BigTextInputForwardRef, {
      ..._$$d2(i),
      className: 'plugin_publish_modal--textInput--E1F0C publish_modal--textInput--ru4I2 publish_modal--rightColumn--m4M9Z modal--textInput---r1fJ',
      ref: n
    })]
  });
});
function iM({
  errors: e,
  order: t,
  forwardedRef: i
}) {
  let n = t.filter(t => !!e[t]);
  return n.length === 0 ? null : jsx('div', {
    className: UI,
    children: jsx(fI, {
      className: Zg,
      ref: i,
      children: jsxs('div', {
        className: Ub,
        children: [jsxs('div', {
          className: q1,
          children: [jsx(_$$Z2, {}), renderI18nText('community.publish.fix_errors')]
        }), jsx('div', {
          className: fl,
          children: jsx(ij, {
            visibleErrors: n,
            errors: e
          })
        })]
      })
    })
  });
}
function ij({
  visibleErrors: e,
  errors: t
}) {
  return jsx('ul', {
    children: e.map(e => jsx('li', {
      className: QB,
      children: t[e]
    }, String(e)))
  });
}
function iU() {
  return jsx('div', {
    'className': ey()(Oc, YN),
    'data-testid': 'publish-modal-footer-text',
    'children': renderI18nText('community.publish.fix_errors')
  });
}
let iG = parsePxInt(VJh);
var iz = (e => (e[e.FORM = 0] = 'FORM', e[e.POST_PLUGIN_PUBLISH_FLOW = 1] = 'POST_PLUGIN_PUBLISH_FLOW', e[e.POST_PAID_PLUGIN_PUBLISH_FLOW = 2] = 'POST_PAID_PLUGIN_PUBLISH_FLOW', e))(iz || {});
let iH = ['twoFactorAuthDisabledError', 'emailNotVerifiedError', 'accountDetailsChangedError', 'usesProposedApi', 'author', 'other', 'publishers', 'freemiumRequiredForMigrating', 'creators', 'lego'];
class iW extends Component {
  constructor(e) {
    super(e);
    this.hasAttemptedToPublish = !1;
    this.setActiveTab = e => {
      let t;
      t = {
        currentTab: this.state.activeTab,
        newTab: e,
        entryPoint: this.props.entryPoint,
        pluginId: this.props.publishedPlugin.id,
        userId: this.props.user.id,
        orgId: this.props.currentOrg?.id,
        resourceType: this.isWidget() ? 'widget' : 'plugin'
      };
      trackEventAnalytics('plugin_publish_modal_click_tab', t);
      e === KM.PERMISSIONS && handleAtomEvent({
        id: oE
      });
      this.setState({
        activeTab: e
      });
    };
    this.close = ({
      ignoreUnsavedChanges: e,
      reloadResourceDetailPage: t
    } = {}) => {
      let i = () => {
        let e = this.props.publishingState.status;
        (e.code === UploadStatusEnum.SUCCESS || e.code === UploadStatusEnum.FAILURE) && this.props.dispatch(Ij({
          id: this.getLocalFileIdOrPluginId()
        }));
        trackEventAnalytics('plugin_publish_modal_close', {
          entryPoint: this.props.entryPoint,
          pluginId: this.getLocalFileIdOrPluginId(),
          resourceType: this.props.publishedPlugin ? this.props.publishedPlugin.is_widget ? 'widget' : 'plugin' : void 0,
          publishModalStep: this.state.step,
          userId: this.props.user.id,
          tab: this.state.activeTab
        });
        this.props.Sprig('track', 'plugin_publish_modal_close', {
          hasAttemptedToPublish: this.hasAttemptedToPublish,
          hasSucceededToPublish: e.code === UploadStatusEnum.SUCCESS,
          timeSpentInModal: this.getTimeSinceComponentDidMount()
        });
        this.props.dispatch(popModalStack());
        let i = getFullscreenViewEditorType();
        i && _$$s2({
          initialX: 0,
          initialY: 0,
          initialTab: i === 'figjam' ? this.isWidget() ? _$$p.WIDGETS : _$$p.PLUGINS : void 0,
          initialFdResourceTab: i === 'figma' ? this.isWidget() ? _$$s3.WIDGET : _$$s3.PLUGIN : void 0,
          initialFdView: i === 'figma' ? 'development' : void 0,
          scrollDevelopmentSectionIntoView: i === 'figjam',
          source: 'extension-publish-modal'
        });
        t && customHistory.reload('Published plugin updated');
      };
      let n = this.state.localSecurityFormResponse;
      let r = this.props.existingSecurityFormResponse;
      if (!e && n && !qu(n) && !deepEqual(n, {
        version: r?.formVersion,
        questions: r?.responses
      })) {
        this.props.dispatch(showModalHandler({
          type: eF,
          data: {
            isWidget: this.isWidget(),
            onConfirm: i,
            onCancel: () => this.setActiveTab(KM.PUBLISH)
          },
          showModalsBeneath: !0
        }));
        return;
      }
      i();
    };
    this.onQuillInputChanged = e => {
      this.setState({
        unDebouncedDescription: e
      });
      this.inputDebounce('description', e);
    };
    this.onInputChanged = e => t => {
      this.inputDebounce(e, t.currentTarget.value);
    };
    this.inputDebounce = debounce((e, t) => {
      if (e === 'name' || e === 'description') {
        let t = e === 'name' ? PublishModalState.EDIT_NAME : PublishModalState.EDIT_DESCRIPTION;
        trackEventAnalytics('community_publish_modal', {
          userId: this.props.user.id,
          orgId: this.getOrgIdFromPublisherOrRole(),
          step: t,
          name: t,
          resourceType: this.isWidget() ? 'widget' : 'plugin',
          resourceId: this.getLocalFileIdOrPluginId()
        });
      }
      this.props.dispatch(fy({
        id: this.getLocalFileIdOrPluginId(),
        metadata: {
          ...this.props.publishingState.metadata,
          [e]: t
        }
      }));
    }, 200);
    this.updateCreatorPolicy = e => {
      let t = isStrippedHtmlEmpty(e) ? '' : e;
      this.props.dispatch(fy({
        id: this.getLocalFileIdOrPluginId(),
        metadata: {
          ...this.props.publishingState.metadata,
          creatorPolicy: t
        }
      }));
    };
    this.updateCarouselMedia = e => {
      let t = this.getFormErrors();
      this.setState({
        errors: t
      });
      this.updatePluginPublishingMetadata(this.getLocalFileIdOrPluginId(), e);
    };
    this.updateCategoryInputValue = e => {
      this.setState({
        otherCategoryInputValue: e
      });
    };
    this.updatePluginPublishingMetadata = (e, t) => {
      this.props.dispatch(fy({
        id: e,
        metadata: {
          ...this.props.publishingState.metadata,
          ...t
        }
      }));
    };
    this.clearOtherError = () => {
      this.props.dispatch(gD({
        id: this.getLocalFileIdOrPluginId(),
        status: {
          code: UploadStatusEnum.EDIT
        }
      }));
      let {
        errors
      } = this.state;
      delete errors.other;
      this.setState({
        errors
      });
    };
    this.isInvalidTagError = () => {
      let {
        status
      } = this.props.publishingState;
      return status.code === UploadStatusEnum.FAILURE && status.error.includes('invalid word');
    };
    this.isPrivateResource = () => this.state.roleToPublishAs === PublisherType.ORG && !!this.getOrgToPublishTo();
    this.onTagsChanged = e => {
      this.props.dispatch(fy({
        id: this.getLocalFileIdOrPluginId(),
        metadata: {
          ...this.props.publishingState.metadata,
          ...e
        }
      }));
      this.isInvalidTagError() && this.clearOtherError();
    };
    this.onCategoryChanged = e => {
      this.props.dispatch(fy({
        id: this.getLocalFileIdOrPluginId(),
        metadata: {
          ...this.props.publishingState.metadata,
          categoryId: e
        }
      }));
    };
    this.onPublishingMetadataAuthorChange = e => {
      this.props.dispatch(fy({
        id: this.getLocalFileIdOrPluginId(),
        metadata: {
          ...this.props.publishingState.metadata,
          author: e
        }
      }));
    };
    this.onCommentsSettingChange = () => {
      this.props.dispatch(fy({
        id: this.getLocalFileIdOrPluginId(),
        metadata: {
          ...this.props.publishingState.metadata,
          commentsSetting: this.props.commentsDisabled ? DropdownEnableState.ENABLED : DropdownEnableState.ALL_DISABLED
        }
      }));
    };
    this.onPaidSettingChange = () => {
      let e = this.props.publishingState.metadata.isPaid;
      this.props.dispatch(fy({
        id: this.getLocalFileIdOrPluginId(),
        metadata: {
          ...this.props.publishingState.metadata,
          isPaid: !e,
          publishers: this.props.publishingState.metadata.publishers
        }
      }));
    };
    this.onIsAnnualDiscountActiveChange = () => {
      let e = this.props.publishingState.metadata.isAnnualDiscountActive;
      let t = this.props.publishingState.metadata.price;
      let i = this.props.publishingState.metadata.annualDiscount;
      !i && t && (i = 20);
      this.props.dispatch(fy({
        id: this.getLocalFileIdOrPluginId(),
        metadata: {
          ...this.props.publishingState.metadata,
          isAnnualDiscountActive: !e,
          annualDiscount: i
        }
      }));
    };
    this.onSubscriptionSettingChange = e => {
      this.props.dispatch(fy({
        id: this.getLocalFileIdOrPluginId(),
        metadata: {
          ...this.props.publishingState.metadata,
          isSubscription: e === PaymentType.SUBSCRIPTION
        }
      }));
    };
    this.isInEditPageMode = () => !this.props.localPlugin;
    this.isUniversalPosting = () => this.props.entryPoint === PageTypeEnum.UNIVERSAL_POSTING;
    this.onPublishClick = async () => {
      this.hasAttemptedToPublish = !0;
      let e = await this.existingPluginPublishersPermissions();
      if (!e || e.fail.length === 0) {
        this.doPublish();
        return;
      }
      let t = '';
      let i = this.props.publishingState.metadata.author;
      if ('org_id' in i) {
        t = i.org_id;
      } else if ('team_id' in i) {
        let e = this.props.teams[i.team_id];
        t = e?.org_id ?? '';
      }
      let n = j4({
        org_id: t
      })?.name;
      let r = j4(this.props.publishingState.metadata.author)?.name;
      if (!n || !r) {
        this.doPublish();
        return;
      }
      this.props.dispatch(showModalHandler({
        type: tl,
        data: {
          usersToRemove: e.fail,
          onConfirm: () => {
            this.doPublish();
          },
          authorName: r,
          parentOrgName: n,
          isWidget: this.isWidget()
        },
        showModalsBeneath: !0
      }));
    };
    this.doPublish = () => {
      this.setState({
        showingDeferredFieldErrors: !0
      });
      let e = this.getFormErrors(!0);
      let {
        metadata
      } = this.props.publishingState;
      let i = metadata.creators;
      if (this.setState({
        errors: e
      }), this.hasFormErrors(e)) {
        trackEventAnalytics('plugin_publish_validation_error', e);
        trackEventAnalytics('creator_publishing_error', {
          errors: Object.values(e),
          errorFields: Object.keys(e),
          resourceType: this.isWidget() ? 'widget' : 'plugin',
          resourceId: this.getLocalFileIdOrPluginId(),
          isPaid: !!metadata.price,
          hasPaymentsApi: !!metadata.hasPaymentsApi
        });
        this.isUniversalPosting() && trackEventAnalytics('community_publish_modal', {
          userId: this.props.user.id,
          orgId: this.getOrgIdFromPublisherOrRole(),
          step: PublishModalState.ERROR,
          errors: Object.values(e)
        });
        return;
      }
      let n = UU(this.props.permissionsState, this.props.publishedPlugin, !1);
      let r = of(this.props.permissionsState, this.props.publishedPlugin);
      this.authorWillChange() && r && !n.some(e => f7(e, r)) ? this.props.dispatch(showModalHandler({
        type: to,
        data: {
          prevProfileName: this.props.publishedPlugin.publisher.name,
          newProfileName: kN(this.props.publishingState.metadata.author, {
            ...this.props.permissionsState,
            authedProfilesById: this.props.authedProfilesById
          }),
          onConfirm: () => {
            this.createOrUpdatePluginVersion(i);
          },
          onCancel: () => { }
        },
        showModalsBeneath: !0
      })) : this.createOrUpdatePluginVersion(i);
    };
    this.submitSecurityForm = () => {
      let e = this.isWidget() ? 'widget' : 'plugin';
      let t = this.props.validPluginId;
      let i = this.state.localSecurityFormResponse;
      let n = this.props.existingSecurityFormResponse;
      let r = this.state.optedOutOfSecurityForm;
      if (t && n && r) {
        _$$is.deleteSecurityFormResponse(t, e, n.formVersion);
        return;
      }
      i && t && _$$is.submitSecurityFormResponse(t, e, i);
    };
    this.createOrUpdatePluginVersion = e => {
      let {
        metadata
      } = this.props.publishingState;
      this.setState({
        step: metadata.isPaid && !this.props.publishedPlugin.third_party_m10n_status ? 2 : 1
      });
      this.props.validPluginId || reportError(ServiceCategories.COMMUNITY, new Error('validPluginId is undefined but should have been validated already'));
      let i = this.props.validPluginId ?? '';
      let n = this.props.publishedPlugin.third_party_m10n_status === ProductStatus.FLAGGED && metadata.isPaid;
      if (!this.isInEditPageMode() && (this.state.shouldIncrementVersion || n) && this.props.localPlugin) {
        trackEventAnalytics('plugin_publish_details_view_publish', {
          pluginId: this.props.publishedPlugin?.id,
          currentPluginVersionId: this.props.publishedPlugin?.current_plugin_version_id,
          actionType: this.props.publishedPlugin?.current_plugin_version_id ? 'publish_version' : 'publish_resource',
          userId: this.props.user.id,
          isPaid: !!this.props.isPaid,
          isWidget: this.isWidget()
        }, {
          forwardToDatadog: !0
        });
        this.props.dispatch(Dl({
          pluginId: i,
          localFileId: this.props.localPlugin.localFileId,
          pluginVersion: {
            name: metadata.name,
            description: metadata.description,
            tagline: metadata.tagline,
            creatorPolicy: metadata.creatorPolicy,
            releaseNotes: metadata.newVersionReleaseNotes,
            iconBlob: metadata.iconBlob,
            coverBlob: metadata.coverImageBlob,
            carouselMedia: metadata.carouselMedia,
            snapshotBlob: this.isWidget() ? metadata.widgetSnapshotImageBlob : void 0,
            playground_fig_file_key: metadata.playgroundFigFile?.key
          },
          isWidget: this.props.publishedPlugin.is_widget,
          commentsSetting: metadata.commentsSetting,
          categoryId: metadata.categoryId,
          callback: () => {
            this.updatePublishedPlugin(metadata, e, !1);
          },
          agreedToTos: !metadata.blockPublishingOnToS,
          orgId: this.getOrgIdFromPublisherOrRole(),
          tags: metadata.tags ?? [],
          tagsV2: metadata.tagsV2 ?? [],
          playgroundFilePublishType: metadata.playgroundFilePublishType
        }));
      } else {
        this.isUniversalPosting() && trackEventAnalytics('community_publish_modal', {
          userId: this.props.user.id,
          orgId: this.getOrgIdFromPublisherOrRole(),
          step: PublishModalState.PUBLISH,
          isPaid: metadata.isPaid
        });
        let i = this.props.publishedPlugin.current_plugin_version_id || void 0;
        trackEventAnalytics('plugin_publish_details_view_publish', {
          pluginId: this.props.publishedPlugin?.id,
          currentPluginVersionId: i,
          actionType: 'publish_edit',
          userId: this.props.user.id,
          isPaid: !!this.props.isPaid,
          isWidget: this.isWidget()
        }, {
          forwardToDatadog: !0
        });
        this.props.dispatch(Vp({
          resource: {
            ...this.props.publishedPlugin,
            comments_setting: metadata.commentsSetting,
            category_id: metadata.categoryId
          },
          pluginVersion: {
            name: metadata.name,
            description: metadata.description,
            tagline: metadata.tagline,
            creatorPolicy: metadata.creatorPolicy,
            releaseNotes: metadata.currentVersionReleaseNotes,
            iconBlob: metadata.iconBlob,
            coverBlob: metadata.coverImageBlob,
            carouselMedia: metadata.carouselMedia,
            snapshotBlob: this.isWidget() ? metadata.widgetSnapshotImageBlob : void 0,
            id: i,
            playground_fig_file_key: metadata.playgroundFigFile?.key
          },
          callback: () => {
            this.updatePublishedPlugin(metadata, e);
            this.props.entryPoint !== PageTypeEnum.EDITOR && this.close({
              ignoreUnsavedChanges: !0,
              reloadResourceDetailPage: this.props.entryPoint === PageTypeEnum.RESOURCE_PAGE
            });
          },
          playgroundFilePublishType: metadata.playgroundFilePublishType,
          localFileIdOrPluginId: this.getLocalFileIdOrPluginId()
        }));
      }
      this.state.otherCategoryInputValue.trim() && trackEventAnalytics('community_category_suggestion', {
        resourceType: this.isWidget() ? 'widget' : 'plugin',
        resourceId: i,
        categoryId: metadata.categoryId,
        suggestedCategory: this.state.otherCategoryInputValue.trim()
      }, {
        forwardToDatadog: !0
      });
    };
    this.updatePublishedPlugin = (e, t, i = !0) => {
      this.props.validPluginId || reportError(ServiceCategories.COMMUNITY, new Error('validPluginId is undefined but should have been validated already'));
      let n = this.props.validPluginId ?? '';
      this.submitSecurityForm();
      let r = getPublishingRole(this.getOrgToPublishTo(), this.state.roleToPublishAs);
      if (r == null) return;
      let a = !e.blockPublishingOnToS;
      let s = hasRoleOrOrgChanged(this.props.publishedPlugin, r);
      let o = Dd(this.props.publishedPlugin, this.props.user.id) || this.props.isRepublishingUnpublishedPlugin;
      s && o && this.props.dispatch(zn({
        pluginId: n,
        role: r,
        agreedToTos: a,
        isWidget: this.isWidget()
      }));
      let l = this.state.roleToPublishAs === PublisherType.PUBLIC ? t.map(e => e.id) : [];
      this.props.dispatch(R8({
        pluginId: n,
        ...(i ? {
          tags: e.tags,
          tagsV2: e.tagsV2
        } : {}),
        supportContact: e.supportContact || '',
        publisherIds: l,
        agreedToTos: a,
        isWidget: this.isWidget(),
        isPaid: e.isPaid,
        isSubscription: e.isSubscription,
        price: e.price,
        annualDiscount: e.annualDiscount,
        isAnnualDiscountActive: e.isAnnualDiscountActive,
        categoryId: e.categoryId,
        isPublic: r.is_public,
        onSuccess: () => {
          this.props.dispatch(VisualBellActions.enqueue({
            message: this.hasChangedSubscriptionPrice() && !isResourcePendingPublishing(this.props.publishedPlugin) ? getI18nString('community.publishing.new_price_will_appear_within_an_hour_on_Community') : getI18nString('community.publishing.changes_saved'),
            icon: VisualBellIcon.CHECK
          }));
        },
        hasFreemiumCode: e.hasPaymentsApi,
        ...(!isAcceptedPublisher(this.props.publishedPlugin, this.props.user.id) && (this.authorWillChange() || this.isFirstTimePublish()) ? {
          authorTeamId: 'team_id' in e.author ? e.author.team_id : '',
          authorOrgId: 'org_id' in e.author ? e.author.org_id : ''
        } : {})
      }));
    };
    this.onRoleChanged = e => {
      this.setState({
        roleToPublishAs: e
      });
    };
    this.getOrgIdFromPublisherOrRole = () => {
      let {
        author
      } = this.props.publishingState.metadata;
      if ('org_id' in author) return author.org_id;
      if ('team_id' in author) return this.props.teams[author.team_id]?.org_id || void 0;
      {
        let e = getPublishingRole(this.getOrgToPublishTo(), this.state.roleToPublishAs);
        return e?.org?.id || void 0;
      }
    };
    this.snapshotUploadPaste = e => {
      let {
        items
      } = e.clipboardData;
      let i = (() => {
        for (let i in items) {
          let e = items[i];
          if (e.kind === 'file' && e.type === w3) return e;
        }
      })();
      if (!i) {
        this.props.dispatch(fy({
          id: this.getLocalFileIdOrPluginId(),
          metadata: {
            ...this.props.publishingState.metadata,
            widgetSnapshotImageError: getI18nString('community.publishing.error_please_upload_with_transparent_background')
          }
        }));
        return;
      }
      let n = i.getAsFile();
      let r = new FileReader();
      r.onload = e => {
        let t = new Image();
        t.onload = () => {
          let e = document.createElement('canvas');
          e.width = t.width;
          e.height = t.height;
          e.getContext('2d').drawImage(t, 0, 0);
          let i = G_(e.toDataURL('image/png'));
          this.unpublishedWidgetCardRef.current?.blur();
          this.props.dispatch(fy({
            id: this.getLocalFileIdOrPluginId(),
            metadata: {
              ...this.props.publishingState.metadata,
              widgetSnapshotImageSrc: t.src,
              widgetSnapshotImageBlob: i,
              widgetSnapshotImageError: null
            }
          }));
        };
        t.src = e.target.result;
      };
      r.readAsDataURL(n);
    };
    this.removeSnapshotUploadOnDelete = e => {
      e.keyCode === 8 && this.props.dispatch(fy({
        id: this.getLocalFileIdOrPluginId(),
        metadata: {
          ...this.props.publishingState.metadata,
          widgetSnapshotImageSrc: '',
          widgetSnapshotImageBlob: void 0,
          widgetSnapshotImageError: null
        }
      }));
    };
    this.getLocalFileIdOrPluginId = () => getLocalFileId(this.props.publishedPlugin, this.props.localPlugin);
    this.getPluginManifest = () => this.props.localPlugin ? this.props.localPlugin.manifest : getPluginVersion(this.props.publishedPlugin).manifest;
    this.getOrgToPublishTo = () => getOrgRole(this.props.publishedPlugin, this.props.currentOrg, this.props.isCurrentOrgMember);
    this.isFirstTimePublish = () => Object.keys(this.props.publishedPlugin.versions).length === 0;
    this.isPrimaryOwner = () => {
      if (this.isFirstTimePublish()) return !0;
      let e = this.props.publishedPlugin;
      let t = this.props.user;
      return !!e?.creator?.id && e.creator.id === t.id;
    };
    this.isPaidResource = () => !!this.props.publishedPlugin.monetized_resource_metadata;
    this.getLastPublishedAtDateString = () => {
      let e = getPluginVersion(this.props.publishedPlugin);
      return new Intl.DateTimeFormat('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      }).format(new Date(e.created_at));
    };
    this.updateCreators = e => {
      this.props.dispatch(fy({
        id: this.getLocalFileIdOrPluginId(),
        metadata: {
          ...this.props.publishingState.metadata,
          creators: e
        }
      }));
    };
    this.gotoCreatedBySection = () => {
      this.setState({
        activeTab: KM.PUBLISH,
        advancedAccordionDefaultActive: !0
      }, () => {
        this.createdBySectionRef.current && (this.createdBySectionRef.current.scrollIntoView(), this.setState({
          showAddCreatorsInput: !0
        }, () => {
          let e = this.createdBySectionRef.current?.getElementsByTagName('input')[0];
          e?.focus();
        }));
      });
    };
    this.isWidget = () => function (e, t) {
      return !!e.is_widget || !!t && !!t.manifest.containsWidget;
    }(this.props.publishedPlugin, this.props.localPlugin);
    this.resourceType = () => getPluginWidgetLabel(this.isWidget());
    this.hasChangedSubscriptionPrice = () => !!this.props.publishingState.metadata.isSubscription && !this.isFirstTimePublish() && this.state.originalPrice !== this.props.publishingState.metadata.price && this.state.originalPrice !== null;
    this.hideDropdownIfOpen = () => {
      (this.props.dropdownShown?.type === _$$iu || this.props.dropdownShown?.type === Ql) && this.props.dispatch(hideDropdownAction());
    };
    this.isAuthorSame = e => {
      if (isAcceptedPublisher(this.props.publishedPlugin, this.props.user.id)) return !0;
      let t = e.metadata.author;
      if (!this.props.profile) {
        let e = of(this.props.permissionsState, this.props.publishedPlugin);
        return e && f7(e, t);
      }
      return 'org_id' in this.props.profile && 'org_id' in t && this.props.profile.org_id === t.org_id || 'team_id' in this.props.profile && 'team_id' in t && this.props.profile.team_id === t.team_id || 'user_id' in t && this.props.profile.id === this.props.authedActiveCommunityProfile?.id;
    };
    this.forceRender = () => {
      this.setState({
        renderBool: !this.state.renderBool
      });
    };
    this.onOrgMsaChange = e => {
      let t = e.currentTarget.checked;
      this.props.dispatch(fy({
        id: this.getLocalFileIdOrPluginId(),
        metadata: {
          ...this.props.publishingState.metadata,
          blockPublishingOnToS: !t
        }
      }));
    };
    this.onPlaygroundFileClick = () => {
      this.props.dispatch(showModalHandler({
        type: _$$$2,
        data: {
          pluginId: this.getLocalFileIdOrPluginId(),
          onAddCallback: this.onPlaygroundFileSelect,
          isWidget: this.isWidget(),
          pluginManifestEditorType: this.getPluginManifest().editorType
        },
        showModalsBeneath: !0
      }));
    };
    this.onPlaygroundFileSelect = e => {
      this.props.dispatch(fy({
        id: this.getLocalFileIdOrPluginId(),
        metadata: {
          ...this.props.publishingState.metadata,
          playgroundFigFile: e,
          playgroundFilePublishType: _$$J2.Actions.SET
        }
      }));
    };
    this.onPlaygroundFileUpdateVersion = () => {
      this.props.dispatch(fy({
        id: this.getLocalFileIdOrPluginId(),
        metadata: {
          ...this.props.publishingState.metadata,
          playgroundFilePublishType: _$$J2.Actions.SET
        }
      }));
    };
    this.onPlaygroundFileRevertVersion = () => {
      this.props.dispatch(fy({
        id: this.getLocalFileIdOrPluginId(),
        metadata: {
          ...this.props.publishingState.metadata,
          playgroundFilePublishType: _$$J2.Actions.NOOP
        }
      }));
    };
    this.onPlaygroundFileRemoveFile = () => {
      this.props.dispatch(fy({
        id: this.getLocalFileIdOrPluginId(),
        metadata: {
          ...this.props.publishingState.metadata,
          playgroundFigFile: null,
          playgroundFilePublishType: _$$J2.Actions.REMOVE
        }
      }));
    };
    this.onPriceChange = e => {
      let t;
      isPriceOutOfRange(e) && (t = e < MIN_PRICE ? getI18nString('community.seller.paid_resource_minimum_err') : getI18nString('community.seller.paid_resource_maximum_err'));
      isNotInteger(e) && (t = getI18nString('community.seller.prices_must_follow_format'));
      this.setState({
        errors: {
          ...this.getFormErrors(!0),
          price: t
        }
      });
      this.props.dispatch(fy({
        id: this.getLocalFileIdOrPluginId(),
        metadata: {
          ...this.props.publishingState.metadata,
          price: e
        }
      }));
    };
    this.onAnnualDiscountChange = e => {
      let t;
      Number.isInteger(e) || (t = getI18nString('community.seller.discount_must_follow_format'));
      this.setState({
        errors: {
          ...this.getFormErrors(!0),
          annualDiscount: t
        }
      });
      this.props.dispatch(fy({
        id: this.getLocalFileIdOrPluginId(),
        metadata: {
          ...this.props.publishingState.metadata,
          annualDiscount: e
        }
      }));
    };
    this.getPricingDisabledMessage = (e, t) => {
      let i = null;
      let n = !!e.hasPaymentsApi;
      !t.current_plugin_version_id || t.monetized_resource_metadata || n || t.third_party_m10n_status === ProductStatus.FLAGGED ? 'org_id' in e.author ? i = renderI18nText('community.seller.orgs_cannot_sell') : 'team_id' in e.author ? i = renderI18nText('community.seller.teams_cannot_sell') : this.isPrivateResource() && (i = renderI18nText('community.seller.resource_is_private')) : i = renderI18nText('community.seller.only_new_resources_can_be_sold_on_community');
      return i;
    };
    this.canUserSellPluginOnCmty = () => {
      let e = this.props.user;
      return !!(!this.isPrimaryOwner() || e.can_sell_on_community && e.cmty_seller_capabilities?.includes(SourceType.EXTENSION));
    };
    this.renderPricingSection = (e, t) => {
      if (!this.canUserSellPluginOnCmty()) return null;
      let i = this.props.publishedPlugin;
      let n = !!e.hasPaymentsApi;
      if (i.current_plugin_version_id && !i.monetized_resource_metadata && !n && i.third_party_m10n_status !== ProductStatus.FLAGGED) return null;
      let a = e.isPaid || this.isPaidResource();
      let s = this.isPrivateResource();
      let o = this.isPaidResource();
      let l = this.getPricingDisabledMessage(e, i);
      let c = o ? getI18nString('community.seller.pricing_toggle_text_for_already_paid_resources') : n ? getI18nString('community.seller.pricing_using_payments_api') : void 0;
      let u = o || s || !!l;
      return jsx(_$$A13, {
        name: 'pricing',
        title: jsx(Wq, {}),
        titleContent: jsx(nu, {
          on: a && !s,
          disabled: u,
          disabledMessage: l,
          onChange: n ? noop : this.onPaidSettingChange,
          tooltipText: c,
          toggleClassName: u || n ? 'plugin_publish_modal--disabledCursor--1F--s publish_modal--disabledCursor--OWlOe' : void 0
        }),
        disabled: u,
        defaultActive: n || a,
        numErrors: $W(['price'], t),
        disabledMessage: l,
        children: this.renderIsPaidPricingSection(e, t, o, a)
      });
    };
    this.authorWillChange = () => this.props.publishedPlugin.id && Object.keys(this.props.publishedPlugin.versions).length > 0 && !this.isAuthorSame(this.props.publishingState);
    this.existingPluginPublishersPermissions = async () => {
      let e = this.props.publishingState.metadata.author;
      let t = getPublishingRole(this.getOrgToPublishTo(), this.state.roleToPublishAs);
      if (!this.authorWillChange() || !('team_id' in e || 'org_id' in e) || t && !t.is_public) return;
      let i = this.isWidget() ? {
        ...e,
        widgetId: this.props.publishedPlugin.id
      } : {
        ...e,
        pluginId: this.props.publishedPlugin.id
      };
      try {
        let e = await ec.getPermissions(i);
        if (e.status === 200) return e.data.meta;
      } catch (e) { }
    };
    this.getPublishFormPrimaryButtonText = () => {
      let e = this.getReviewStatus();
      if (!this.state.shouldIncrementVersion) return getI18nString('community.publishing.save_changes');
      switch (e) {
        case 'none':
          return this.isFirstTimePublish() ? getI18nString('community.publishing.publish') : getI18nString('community.publishing.publish_new_version');
        case 'required':
          return getI18nString('community.publishing.submit_for_review');
        case 'pending':
          return getI18nString('community.publishing.resubmit_for_review');
        case 'approved':
          return getI18nString('community.publishing.publish_new_version');
      }
    };
    this.getSuccessScreenText = e => {
      let t = this.props.publishedPlugin;
      let i = getPluginVersion(t);
      let n = t.roles;
      let a = isResourcePendingPublishing(this.props.publishedPlugin);
      let s = this.resourceType();
      if (e === 2 && this.isFirstTimePublish()) {
        return {
          title: this.isWidget() ? getI18nString('community.publishing.is_under_review.widget') : getI18nString('community.publishing.is_under_review.plugin'),
          description: jsxs(Fragment, {
            children: [jsx('p', {
              className: e0,
              children: renderI18nText('community.publishing.our_team_will_review')
            }), jsx('p', {
              className: e0,
              children: renderI18nText('community.publishing.paid_resource_success_info')
            }), jsx('p', {
              className: e0,
              children: this.isWidget() ? renderI18nText('community.publishing.feel_free_to_edit_your_page.widget') : renderI18nText('community.publishing.feel_free_to_edit_your_page.plugin')
            })]
          })
        };
      }
      if (e === 2 && this.hasChangedSubscriptionPrice() && !a) {
        return {
          title: getI18nString('community.publishing.your_update_is_being_published'),
          description: jsx(Fragment, {
            children: jsx('p', {
              className: e0,
              children: renderI18nText('community.publishing.when_you_change_the_price_of_a_subscription')
            })
          })
        };
      }
      let o = jsx(t0, {
        plugin: t,
        userId: this.props.user.id,
        orgId: this.getOrgIdFromPublisherOrRole()
      });
      let l = jsx('div', {
        className: e0,
        children: renderI18nText('community.publishing.you_can_also_invite_other_people_to_update', {
          inviteOtherPeopleLink: jsx(SecureLink, {
            onClick: () => {
              trackGenericEvent('plugin_publish_invite_others_click', {
                userId: this.props.user.id,
                pluginId: t.id,
                isWidget: this.isWidget()
              });
              this.setState({
                activeTab: KM.PERMISSIONS,
                step: 0
              });
            },
            trusted: !0,
            children: renderI18nText('community.publishing.invite_other_people_link')
          })
        })
      });
      if (a) {
        let e = jsx(SecureLink, {
          href: 'https://help.figma.com/hc/articles/360039958914',
          target: '_blank',
          trusted: !0,
          children: renderI18nText('community.publishing.see_our_guidelines_here')
        });
        return {
          title: s === HubTypeEnum.PLUGIN ? getI18nString('community.publishing.success_your_resource_has_been_submitted_for_review.plugin') : getI18nString('community.publishing.success_your_resource_has_been_submitted_for_review.widget'),
          description: jsxs(Fragment, {
            children: [jsx('p', {
              className: e0,
              children: renderI18nText('community.publishing.resource_will_now_be_reviewed_by_the_figma_team', {
                resourceName: jsx('span', {
                  className: eJ,
                  children: i.name
                }),
                seeOurGuidelinesLink: e
              })
            }), jsxs('p', {
              className: e0,
              children: [s === HubTypeEnum.PLUGIN && renderI18nText('community.publishing.below_is_your_resources_url.plugin.once_approved'), s === HubTypeEnum.WIDGET && renderI18nText('community.publishing.below_is_your_resources_url.widget.once_approved')]
            }), o, l]
          })
        };
      }
      return n.org ? {
        title: s === HubTypeEnum.PLUGIN ? getI18nString('community.publishing.success_your_resource_has_been_published.plugin.to_organization') : getI18nString('community.publishing.success_your_resource_has_been_published.widget.to_organization'),
        description: jsxs(Fragment, {
          children: [jsx('p', {
            className: e0,
            children: renderI18nText('community.publishing.resource_is_now_available_to_members_of_org', {
              resourceName: jsx('span', {
                className: eJ,
                children: i.name
              }),
              orgName: n.org.name
            })
          }), jsxs('p', {
            className: e0,
            children: [s === HubTypeEnum.PLUGIN && renderI18nText('community.publishing.below_is_your_resources_url.plugin.with_your_teammates'), s === HubTypeEnum.WIDGET && renderI18nText('community.publishing.below_is_your_resources_url.widget.with_your_teammates')]
          }), o, l]
        })
      } : {
        title: s === HubTypeEnum.PLUGIN ? getI18nString('community.publishing.success_your_resource_has_been_published.plugin') : getI18nString('community.publishing.success_your_resource_has_been_published.widget'),
        description: jsxs(Fragment, {
          children: [jsx('p', {
            className: e0,
            children: renderI18nText('community.publishing.resource_is_now_available_to_the_entire_community', {
              resourceName: jsx('span', {
                className: eJ,
                children: i.name
              })
            })
          }), jsxs('p', {
            className: e0,
            children: [s === HubTypeEnum.PLUGIN && renderI18nText('community.publishing.below_is_your_resources_url.plugin'), s === HubTypeEnum.WIDGET && renderI18nText('community.publishing.below_is_your_resources_url.widget')]
          }), o, l]
        })
      };
    };
    this.renderErrorScreen = () => jsx(_$$P, {
      className: 'plugin_publish_modal--scrollContainer--cHFjx publish_modal--scrollContainer--w0uYJ',
      children: jsxs('div', {
        className: 'plugin_publish_modal--publishContainer---8iA- publish_modal--publishContainer--q8lqv',
        children: [jsx('div', {
          className: 'plugin_publish_modal--publishHeader--xNFHi publish_modal--publishHeader--SA7W2 text--fontPos14--OL9Hp text--_fontBase--QdLsd',
          children: renderI18nText('general.error')
        }), this.resourceType() === HubTypeEnum.PLUGIN && renderI18nText('community.publishing.error_we_could_not_load_your_development_resource.plugin', {
          filename: 'manifest.json'
        }), this.resourceType() === HubTypeEnum.WIDGET && renderI18nText('community.publishing.error_we_could_not_load_your_development_resource.widget', {
          filename: 'manifest.json'
        }), jsx(_$$M, {
          onClick: () => this.close(),
          children: renderI18nText('general.done')
        })]
      })
    });
    this.setSecurityFormResponse = e => {
      this.setState({
        localSecurityFormResponse: e
      }, () => {
        this.getFormErrors();
      });
    };
    this.setOptedOutOfSecurityForm = e => {
      this.setState({
        optedOutOfSecurityForm: e
      });
    };
    this.state = {
      roleToPublishAs: this.getDefaultRole(),
      showingDeferredFieldErrors: !1,
      errors: {},
      unDebouncedDescription: this.props.publishingState.metadata ? this.props.publishingState.metadata.description : '',
      step: 0,
      renderBool: !1,
      publishPluginVersionActionPayload: null,
      shouldIncrementVersion: e.localPlugin != null,
      activeTab: this.props.initialTab ?? KM.PUBLISH,
      allowedTabs: this.props.initialAllowedTabs,
      showAddCreatorsInput: !!this.props.publishingState.metadata?.creators.length,
      advancedAccordionDefaultActive: !1,
      footerErrorHeightPx: 0,
      originalPrice: this.props.publishingState.metadata.price || null,
      localSecurityFormResponse: void 0,
      optedOutOfSecurityForm: !1,
      otherCategoryInputValue: ''
    };
    this.createdBySectionRef = createRef();
    this.unpublishedWidgetCardRef = createRef();
    this.publishModalRef = createRef();
    this.footerErrorRef = createRef();
    this.postFormFlow = !1;
  }
  getTimeSinceComponentDidMount() {
    if (void 0 !== this.componentDidMountTime) return Date.now() - this.componentDidMountTime;
  }
  componentDidUpdate(e) {
    if (e.localFileId !== this.props.localFileId && this.setState({
      roleToPublishAs: this.getDefaultRole()
    }), this.footerErrorRef.current && this.footerErrorRef.current.clientHeight !== this.state.footerErrorHeightPx && this.setState({
      footerErrorHeightPx: this.footerErrorRef.current.clientHeight
    }), (e.publishingState.metadata.isPaid || !this.props.publishingState.metadata.isPaid) && ((e.publishingState.metadata !== this.props.publishingState.metadata || e.validPluginId !== this.props.validPluginId) && (this.state.errors.publishers ? this.setState(e => ({
      errors: {
        ...this.getFormErrors(),
        publishers: e.errors.publishers
      }
    })) : this.state.errors.price ? this.setState(e => ({
      errors: {
        ...this.getFormErrors(),
        price: this.props.publishingState.metadata.isPaid ? e.errors.price : void 0
      }
    })) : this.setState({
      errors: this.getFormErrors()
    })), e.publishedPlugin.plugin_publishers !== this.props.publishedPlugin.plugin_publishers)) {
      let e = [KM.PERMISSIONS];
      let t = this.props.user.id;
      let i = this.props.publishedPlugin;
      (isAcceptedPublisher(i, t ?? '') || i.creator?.id === t) && (e.push(KM.PUBLISH), e.push(KM.DATA_SECURITY));
      this.state.allowedTabs !== e && this.setState({
        allowedTabs: e
      });
    }
  }
  async componentDidMount() {
    this.componentDidMountTime = Date.now();
    this.props.publishedPlugin.id && getPluginVersion(this.props.publishedPlugin).id && handleAtomEvent({
      id: zK
    });
    this.footerErrorRef.current && this.setState({
      footerErrorHeightPx: this.footerErrorRef.current.clientHeight
    });
    await this.setAllCategories();
  }
  async setAllCategories() {
    let e = await liveStoreInstance.fetch(allCategoriesQuery(void 0));
    this.setState({
      allCategories: e
    });
  }
  getDefaultRole() {
    return _$$oB(this.props.publishedPlugin, this.props.currentOrg, this.props.isCurrentOrgMember, this.props.publishingState.metadata.hasPaymentsApi);
  }
  getCurrentPublishedPluginVersion() {
    let e = this.props.publishedPlugin.current_plugin_version_id;
    return e ? this.props.publishedPlugin.versions[e] : null;
  }
  getCurrentPluginVersionNumber() {
    let e = this.getCurrentPublishedPluginVersion();
    return e ? parseInt(e.version) : 0;
  }
  isPublishingLegoPlugin() {
    let e = this.props.localPlugin ?? this.getCurrentPublishedPluginVersion();
    return !!(e && isDevModePlugin(e));
  }
  getFormErrors(e, t = {}) {
    e || (e = this.state.showingDeferredFieldErrors);
    let i = {};
    let {
      metadata,
      status
    } = this.props.publishingState;
    i = {
      ...i,
      ...getPublishingErrors(this.props.user, status, this.isWidget(), !this.props.localPlugin)
    };
    metadata.widgetSnapshotImageError && (i.widgetSnapshotImageError = getI18nString('community.publishing.error_please_upload_with_transparent_background'));
    i.manifest || this.props.validPluginId || (i.id = getI18nString('community.publishing.error_id_identifier_is_invalid'));
    e && (i = {
      ...i,
      ...validatePublishingData(metadata, this.getPluginManifest(), this.isWidget(), this.props.publishedPlugin)
    });
    let a = this.props.localPlugin?.manifest;
    a?.enableProposedApi && (i.usesProposedApi = this.resourceType() === HubTypeEnum.PLUGIN ? getI18nString('community.publishing.cannot_publish_using_enableProposedApi.plugin') : getI18nString('community.publishing.cannot_publish_using_enableProposedApi.widget'));
    (!this.canUserSellPluginOnCmty() || !this.props.user.stripe_account_status) && a?.permissions?.includes('payments') && (i.notApprovedSeller = getI18nString('community.publishing.cannot_use_payments_api_if_non_approved'));
    this.isPublishingLegoPlugin() && this.props.localPlugin?.manifest.editorType?.includes(ManifestEditorType.INSPECT) && (i.lego = getI18nString('community.publishing.cannot_publish_with_inspect_editor_type'));
    $i(a) && (a?.containsWidget || this.isFirstTimePublish()) && (i.incrementalMode = getI18nString('community.publishing.cannot_publish_without_document_access'));
    !this.state.optedOutOfSecurityForm && UR(this.state.localSecurityFormResponse, this.props.existingSecurityFormResponse) > 0 && (i.securityForm = getI18nString('community.publishing.data_security.errors'));
    return {
      ...i,
      ...validatePublishingDataLengths(metadata),
      ...t
    };
  }
  getFormWarnings() {
    let e = {};
    let t = this.props.localPlugin?.manifest;
    t && !t.networkAccess && (e.missingNetworkAccess = !0);
    return e;
  }
  hasFormErrors(e) {
    return !!$W(Object.keys(e), e);
  }
  setCreatorsError(e) {
    let {
      creators,
      ...i
    } = this.state.errors;
    e != null ? this.setState({
      errors: {
        ...i,
        creators: e
      }
    }) : this.setState({
      errors: i
    });
  }
  renderIsPaidPricingSection(e, t, i, n) {
    return jsxs(Fragment, {
      children: [this.resourceType() === HubTypeEnum.PLUGIN && jsx(_$$A6, {
        label: getI18nString('community.seller.payment_type'),
        labelId: 'plugin-publish-modal-payment-type-label',
        disabled: i || !n,
        children: jsx('form', {
          children: jsx(ManuallyLabeledRadioRoot, {
            'value': this.props.publishingState.metadata.isSubscription ? PaymentType.SUBSCRIPTION : PaymentType.ONE_TIME,
            'onChange': this.onSubscriptionSettingChange,
            'aria-labelledby': 'plugin-publish-modal-payment-type-label',
            'children': jsxs('div', {
              className: 'plugin_publish_modal--paymentTypeRadioOptions--gguqu',
              children: [jsx(_$$c, {
                value: PaymentType.ONE_TIME,
                readonly: !!i || !n || void 0,
                label: jsx(Label, {
                  children: renderI18nText('community.seller.one_time_payment')
                })
              }), jsx(_$$c, {
                value: PaymentType.SUBSCRIPTION,
                readonly: !!i || !n || void 0,
                label: jsx(Label, {
                  children: renderI18nText('community.seller.monthly_subscription')
                })
              })]
            })
          })
        })
      }), jsx(_$$A30, {
        price: e.price,
        onChange: this.onPriceChange,
        error: t.price,
        disabled: !n,
        required: !0
      }), this.props.publishingState.metadata.isSubscription && jsx(ih, {
        price: e.price,
        annualDiscount: e.annualDiscount,
        onAnnualDiscountChange: this.onAnnualDiscountChange,
        annualDiscountError: t.annualDiscount,
        onIsAnnualDiscountActiveChange: this.onIsAnnualDiscountActiveChange,
        isAnnualDiscountActive: e.isAnnualDiscountActive,
        disabled: !n
      }), jsx(_$$A18, {
        resource: this.isFirstTimePublish() ? null : this.props.publishedPlugin,
        disabled: !n
      }), n && jsx(_$$A0, {
        resourceType: this.resourceType(),
        hasBeenPublishedAsPaid: i,
        isSubscription: this.props.publishingState.metadata.isSubscription
      }), t.freemiumPublishingTemporarilyRestricted && jsx(tc, {}), jsx(_$$A15, {})]
    });
  }
  hasManifestError(e) {
    return !!(this.props.localPlugin && (this.props.localPlugin.error || !this.props.localPlugin?.manifest) || !this.props.validPluginId);
  }
  renderAccordionFormFields(e, t, i) {
    let n = !!this.props.localPlugin;
    let a = this.getFormWarnings();
    let s = this.isWidget() && this.isFirstTimePublish();
    let o = ['supportContact', 'creatorPolicy', 'playgroundFigFile', 'creators', 'notApprovedSeller', 'securityForm'];
    o.push('incrementalMode');
    return jsxs(Fragment, {
      children: [!this.isFirstTimePublish() && jsx(_$$A13, {
        name: 'version',
        title: `${getI18nString('community.publishing.version')} ${this.getCurrentPluginVersionNumber() + (n && this.state.shouldIncrementVersion ? 1 : 0)}`,
        titleContent: n ? jsx(tt, {
          shouldIncrementVersion: this.state.shouldIncrementVersion,
          updateShouldIncrementVersion: e => this.setState({
            shouldIncrementVersion: e
          }),
          reviewStatus: this.getReviewStatus()
        }) : null,
        defaultActive: !0,
        children: jsx(ta, {
          pluginId: this.getLocalFileIdOrPluginId(),
          updatePluginPublishingMetadata: this.updatePluginPublishingMetadata,
          metadata: t,
          shouldIncrementVersion: !!n && this.state.shouldIncrementVersion
        })
      }), jsxs(_$$A13, {
        name: 'details',
        title: getI18nString('community.publishing.details'),
        defaultActive: this.isFirstTimePublish(),
        numErrors: $W(['iconImageError', 'coverImageError', 'name', 'tagline', 'description', 'tags', 'tagsV2', 'categoryId'], i),
        children: [jsx(_$$A6, {
          label: getI18nString('community.publishing.icon'),
          error: i.iconImageError,
          subLabel: getI18nString('community.publishing.dimensions', {
            width: 128,
            height: 128
          }),
          required: !0,
          children: jsx(e9, {
            pluginId: this.getLocalFileIdOrPluginId(),
            metadata: t,
            publishModalRef: this.publishModalRef,
            isWidget: this.isWidget(),
            error: i.iconImageError
          })
        }), this.isWidget() && jsx(_$$A6, {
          label: getI18nString('community.publishing.widget_snapshot'),
          error: i.widgetSnapshotImageError,
          required: !0,
          children: e
        }), jsx(_$$A29, {
          value: t.name,
          onChange: this.onInputChanged('name'),
          error: i.name
        }), jsx(iO, {
          value: t.tagline,
          onChange: e => this.updatePluginPublishingMetadata(this.getLocalFileIdOrPluginId(), {
            tagline: e.currentTarget.value
          }),
          resourceType: this.resourceType(),
          error: i.tagline,
          required: !0
        }), jsx(_$$Ay, {
          editorType: gH(this.getPluginManifest().editorType?.[0]),
          value: t.categoryId,
          previousValue: this.props.publishedPlugin?.category_id,
          onChange: this.onCategoryChanged,
          categoryInputValue: this.state.otherCategoryInputValue,
          onCategoryInputChange: this.updateCategoryInputValue,
          error: i.categoryId,
          required: !0
        }), jsx(_$$A27, {
          defaultValue: this.state.unDebouncedDescription,
          onChange: this.onQuillInputChanged,
          resourceType: this.resourceType(),
          error: i.description,
          required: !0
        }), this.state.allCategories && jsx(SE, {
          categoryId: t.categoryId,
          tagsV1: t.tags,
          tagsV2: t.tagsV2,
          existingResourceContent: this.props.publishedPlugin,
          allCategories: this.state.allCategories,
          onChange: this.onTagsChanged,
          onErrors: e => {
            this.setState({
              errors: this.getFormErrors(void 0, e)
            });
          }
        }), jsx(tW, {
          orgToPublishTo: this.getOrgToPublishTo(),
          roleToPublishAs: this.state.roleToPublishAs,
          setRoleToPublishAs: this.onRoleChanged,
          publishedPlugin: this.props.publishedPlugin,
          isPaidResource: !!(this.isPaidResource() || this.props.publishingState.metadata.isPaid),
          isUserPendingOrAcceptedPublisher: isAnyPublisher(this.props.publishedPlugin, this.props.user.id)
        }), jsx(_$$A16, {
          showToSCheckbox: xw(this.props.permissionsState),
          onOrgMsaChange: this.onOrgMsaChange,
          blockPublishingOnToS: t.blockPublishingOnToS
        })]
      }), this.renderPricingSection(t, i), jsxs(_$$A13, {
        name: 'advanced',
        title: getI18nString('community.publishing.advanced'),
        numErrors: $W(o, i) + (this.hasManifestError(i) ? 1 : 0) + (a.missingNetworkAccess ? 1 : 0),
        defaultActive: this.state.advancedAccordionDefaultActive,
        children: [jsx(_$$A24, {
          value: t.supportContact,
          onChange: this.onInputChanged('supportContact'),
          error: i.supportContact,
          required: !0
        }), !s && jsx(e2, {
          error: this.state.errors.playgroundFigFile,
          isWidget: this.isWidget(),
          localFileIdOrPluginId: this.getLocalFileIdOrPluginId(),
          onPlaygroundFileClick: this.onPlaygroundFileClick,
          playgroundFigFile: this.props.publishingState.metadata.playgroundFigFile,
          playgroundFilePublishType: this.props.publishingState.metadata.playgroundFilePublishType,
          publishedResource: this.props.publishedPlugin,
          removeFileCallback: this.onPlaygroundFileRemoveFile,
          revertVersionCallback: this.onPlaygroundFileRevertVersion,
          updateVersionCallback: this.onPlaygroundFileUpdateVersion
        }), jsx(iu, {
          createdBySectionRef: this.createdBySectionRef,
          isPaidResource: this.isPaidResource() || t.isPaid,
          isPrimaryOwner: this.isPrimaryOwner(),
          metadata: t,
          onChange: this.onPublishingMetadataAuthorChange,
          publishedPlugin: this.props.publishedPlugin,
          publishingState: this.props.publishingState,
          resourceType: this.resourceType(),
          roleToPublishAs: this.state.roleToPublishAs,
          setCreatorsError: this.setCreatorsError,
          updateCreators: this.updateCreators
        }), jsx(_$$Ay2, {
          errors: i,
          localPlugin: this.props.localPlugin,
          publishedPlugin: this.props.publishedPlugin,
          pendingPluginId: this.props.publishingState.metadata.pendingPluginId,
          validPluginId: this.props.validPluginId,
          resourceType: this.resourceType(),
          updatePluginPublishingMetadata: this.updatePluginPublishingMetadata
        }), this.state.roleToPublishAs === PublisherType.PUBLIC && jsx(_$$A23, {
          isCommentsEnabled: !this.props.commentsDisabled,
          onChange: this.onCommentsSettingChange
        }), !this.isPrivateResource() && jsx(_$$A28, {
          isPaid: t.isPaid,
          resourceType: this.resourceType()
        }), getFeatureFlags().pub_improv_creator_policy && jsx(_$$A25, {
          defaultValue: t.creatorPolicy,
          onChange: this.updateCreatorPolicy,
          resourceType: this.resourceType()
        }), jsx(iE, {
          existingSecurityFormResponse: this.props.existingSecurityFormResponse,
          localSecurityFormResponse: this.state.localSecurityFormResponse,
          isWidget: this.isWidget(),
          goToSecurityTab: () => this.setActiveTab(KM.DATA_SECURITY),
          optedOutOfSecurityForm: this.state.optedOutOfSecurityForm
        })]
      })]
    });
  }
  renderForm() {
    let {
      metadata
    } = this.props.publishingState;
    let {
      errors
    } = this.state;
    t = {
      ...errors,
      ...this.getFormErrors()
    };
    let i = this.props.publishingState.status?.code === UploadStatusEnum.UPLOADING;
    let n = !1;
    this.hasFormErrors(errors) || i ? n = !0 : metadata.blockPublishingOnToS && xw(this.props.permissionsState) && (n = !0);
    let a = jsx(Fragment, {
      children: jsx('div', {
        onPaste: this.snapshotUploadPaste,
        onKeyDown: this.removeSnapshotUploadOnDelete,
        children: jsx(eD, {
          metadata,
          widget: this.props.publishedPlugin,
          localManifest: this.props.localPlugin?.manifest,
          cardRef: this.unpublishedWidgetCardRef,
          localPlugin: this.props.localPlugin ?? null,
          updatePluginPublishingMetadata: this.updatePluginPublishingMetadata,
          pluginId: this.getLocalFileIdOrPluginId(),
          borderClassName: errors.widgetSnapshotImageError ? 'plugin_publish_modal--previewImageContainerError--pqU1v publish_modal--previewImageContainerError--I-s2M' : void 0
        })
      })
    });
    let s = jsx('div', {
      className: 'plugin_publish_modal--previewContainer--Sksct publish_modal--previewContainer--q2lDp',
      children: jsx(_$$A17, {
        allowVideoUpload: !0,
        carouselMedia: metadata.carouselMedia,
        disableUploading: !1,
        error: errors.carouselMedia,
        isWidget: this.isWidget(),
        name: metadata.name,
        orgId: this.getOrgIdFromPublisherOrRole(),
        resourceId: this.getLocalFileIdOrPluginId(),
        resourceType: this.props.publishedPlugin && this.props.publishedPlugin.is_widget ? ResourceTypeNoComment.WIDGET : ResourceTypeNoComment.PLUGIN,
        updateCarouselMedia: this.updateCarouselMedia,
        userId: this.props.user.id
      })
    });
    return jsxs(Fragment, {
      children: [jsxs(_$$A14, {
        onScroll: this.hideDropdownIfOpen,
        footerErrorHeightPx: this.state.footerErrorHeightPx,
        children: [s, this.renderAccordionFormFields(a, metadata, errors)]
      }), jsxs('div', {
        children: [jsx(iM, {
          errors,
          forwardedRef: this.footerErrorRef,
          order: iH
        }), jsxs('div', {
          className: 'plugin_publish_modal--footer--i71zD publish_modal--footer--MviPA',
          children: [this.hasFormErrors(errors) ? jsx(iU, {}) : jsx(e6, {
            blockPublishingOnToS: metadata.blockPublishingOnToS,
            permissionsState: this.props.permissionsState,
            onOrgMsaChange: this.onOrgMsaChange,
            isFirstTimePublish: this.isFirstTimePublish(),
            getLastPublishedAtDateString: this.getLastPublishedAtDateString
          }), jsxs('div', {
            className: 'plugin_publish_modal--buttonGroup--2wfBi publish_modal--buttonGroup--pUnTG',
            children: [jsx(_$$M, {
              disabled: i,
              onClick: () => this.close(),
              children: this.isUniversalPosting() ? getI18nString('general.back') : getI18nString('general.cancel')
            }), jsx(UC, {
              disabled: !!n,
              onClick: () => {
                trackEventAnalytics('community_publish_modal', {
                  userId: this.props.user.id,
                  resourceType: this.isWidget() ? 'widget' : 'plugin',
                  resourceId: this.getLocalFileIdOrPluginId(),
                  isPaid: this.props.isPaid,
                  publishModalStep: this.state.step,
                  name: 'primary_button_clicked'
                });
                i || this.onPublishClick();
              },
              children: i ? jsx(LoadingSpinner, {
                className: 'plugin_publish_modal--spinner--ycI09 publish_modal--spinner--7DaqW'
              }) : this.getPublishFormPrimaryButtonText()
            })]
          })]
        })]
      })]
    });
  }
  getReviewStatus() {
    switch (this.state.roleToPublishAs) {
      case PublisherType.ORG:
        return 'none';
      case PublisherType.PUBLIC:
        if (isResourceApprovedPublic(this.props.publishedPlugin)) return 'approved';
        if (isResourcePendingPublishing(this.props.publishedPlugin)) return 'pending';
        return 'required';
    }
  }
  render() {
    let e = null;
    let t = jsx(t5, {
      activeTab: this.state.activeTab,
      setActiveTab: this.setActiveTab,
      allowedTabs: this.state.allowedTabs,
      isWidget: this.isWidget()
    });
    let {
      title,
      description
    } = this.getSuccessScreenText(this.state.step);
    if ((this.state.step === 1 || this.state.step === 2) && this.props.publishedPlugin && this.props.publishingState.status.code === UploadStatusEnum.SUCCESS && this.props.entryPoint === PageTypeEnum.EDITOR) {
      let {
        publishedPlugin,
        profile,
        localPlugin
      } = this.props;
      let o = isResourcePendingPublishing(publishedPlugin) || isResourceApprovedPublic(publishedPlugin);
      let l = _$$D2.Step.INFO;
      o && (profile?.public_at || (l = _$$D2.Step.USER_PUBLISH_FLOW), profile && ('org_id' in profile && profile.org_id || 'team_id' in profile && profile.team_id) && (l = _$$D2.Step.TEAM_ORG_POST_PUBLISH_FLOW));
      let d = getLocalFileId(publishedPlugin, localPlugin);
      d ? (this.postFormFlow = !0, e = jsx(i$, {
        plugin: publishedPlugin,
        publisher: profile,
        forceParentRender: this.forceRender,
        resourcePublishingStatusCode: this.props.publishingState.status.code,
        localFileIdOrPluginId: d,
        title,
        description,
        role: publishedPlugin.roles,
        initialStep: l
      })) : e = this.renderErrorScreen();
    } else if (this.state.activeTab === KM.PUBLISH) {
      e = this.renderForm();
    } else if (this.state.activeTab === KM.PERMISSIONS) {
      e = jsx(tU, {
        allowedTabs: this.state.allowedTabs,
        closePluginPublishModal: this.close,
        contacts: this.props.contacts,
        currentUser: this.props.user,
        entryPoint: this.props.entryPoint,
        gotoCreatedBySection: this.gotoCreatedBySection,
        org: this.props.currentOrg,
        orgDomains: this.props.orgDomains,
        pluginName: this.props.publishingState.metadata.name,
        publishedPlugin: this.props.publishedPlugin,
        userIsAdmin: this.props.isAdminOfPrivateOrgPlugin
      });
    } else if (this.state.activeTab === KM.DATA_SECURITY) {
      let t = getPublishedResourceOrNull(this.props.unpublishedPlugins, this.props.unpublishedWidgets, this.props.localPlugin);
      e = jsx(_$$A4, {
        localSecurityFormResponse: this.state.localSecurityFormResponse,
        setSecurityFormResponse: this.setSecurityFormResponse,
        extensionType: this.isWidget() ? 'widget' : 'plugin',
        onDone: () => {
          this.setActiveTab(KM.PUBLISH);
        },
        existingSecurityFormResponse: this.props.existingSecurityFormResponse,
        optedOutOfSecurityForm: this.state.optedOutOfSecurityForm,
        setOptedOutOfSecurityForm: this.setOptedOutOfSecurityForm,
        extensionId: this.props.publishedPlugin.id ? this.props.publishedPlugin.id : t?.id ? t.id : null
      });
    }
    return jsx(TrackingProvider, {
      name: _$$e2.COMMUNITY_HUB_PLUGIN_PUBLISH_MODAL,
      properties: {
        entryPoint: this.props.entryPoint,
        isInEditPageMode: this.isInEditPageMode(),
        isWidget: this.isWidget(),
        userId: this.props.user?.id,
        pluginId: this.getLocalFileIdOrPluginId()
      },
      children: jsx(iK, {
        draggableModalTitle: t,
        draggableModalContent: e,
        onClose: this.close,
        publishModalRef: this.publishModalRef,
        setActiveTab: this.setActiveTab,
        activeTab: this.state.activeTab,
        allowedTabs: this.state.allowedTabs,
        postFormFlow: this.postFormFlow
      })
    });
  }
}
function iK({
  draggableModalTitle: e,
  draggableModalContent: t,
  onClose: i,
  publishModalRef: n,
  setActiveTab: a,
  allowedTabs: s,
  activeTab: o,
  postFormFlow: l
}) {
  return jsxs(DraggableModalManager, {
    title: e,
    dragHeaderOnly: !0,
    onClose: i,
    initialPosition: new Point(window.innerWidth / 2 - iG / 2, window.innerHeight / 2 - 380),
    initialWidth: iG,
    minBottomMargin: 100,
    autoflowHeight: !0,
    ref: n,
    children: [!l && !getFeatureFlags().ext_plugin_publish_rearch && jsx(tX, {
      onClick: a,
      selectedTab: o,
      allowedTabs: s
    }), t]
  });
}
iW.displayName = 'PluginPublishModal';
let iY = connect((e, t) => {
  let {
    localFileId,
    publishedPluginId,
    unpublishedPlugins,
    unpublishedWidgets
  } = t;
  let s = e.localPlugins[localFileId || ''];
  let {
    publishedPlugins,
    publishedWidgets
  } = e;
  let d = getPublishedResource(publishedPlugins, publishedWidgets, s, publishedPluginId);
  let c = getPublishedResourceOrNull(unpublishedPlugins, unpublishedWidgets, s);
  let u = d.id ? d.id : c?.id;
  let p = localFileId && e.publishingPlugins[localFileId] || e.publishingPlugins[d.id];
  localFileId && !p?.metadata && (p = {
    status: getStatusOrDefault(p),
    metadata: getPublishingData({
      ...getPermissionsState(e),
      localPlugins: e.localPlugins,
      publishedPlugins,
      publishedWidgets,
      currentUserOrgId: e.currentUserOrgId,
      authedProfilesById: e.authedProfilesById
    }, localFileId)
  });
  let m = d && d.publisher.id in e.authedProfilesById ? e.authedProfilesById[d.publisher.id] : null;
  return {
    localPlugin: s,
    publishedPlugin: d,
    validPluginId: u,
    currentOrg: getCurrentUserOrg(e),
    isCurrentOrgMember: canMemberOrg(e.currentUserOrgId, e, e.user.id),
    orgDomains: e.orgDomains,
    authedProfilesById: e.authedProfilesById,
    publishingState: p,
    user: e.user,
    profile: m,
    contacts: e.contacts,
    dropdownShown: e.dropdownShown,
    permissionsState: getPermissionsState(e),
    teams: e.teams,
    commentsDisabled: p.metadata.commentsSetting === DropdownEnableState.ALL_DISABLED,
    authedActiveCommunityProfile: e.authedActiveCommunityProfile,
    isAdminOfPrivateOrgPlugin: d && canAdminOrg(d.org_id, e, e.user.id),
    isRepublishingUnpublishedPlugin: !d.id && !!c
  };
})(iW);
let $$iq0 = registerModal(e => {
  let {
    Sprig
  } = useSprigWithSampling();
  let [{
    status: i,
    data: n
  }] = setupResourceAtomHandler(se());
  let [{
    status: a,
    data: s
  }] = setupResourceAtomHandler(fd());
  let o = !!e.publishedPluginId;
  let l = _$$A2(e.publishedPluginId ?? '', o);
  return i !== 'loading' && a !== 'loading' && l.loaded ? jsx(iY, {
    ...e,
    Sprig,
    unpublishedPlugins: n ?? void 0,
    unpublishedWidgets: s ?? void 0,
    existingSecurityFormResponse: l.data
  }) : jsx(LoadingSpinner, {});
}, 'PluginPublishModal', ModalSupportsBackground.YES);
(n || (n = {})).PublishModalPostFormFlow = function (e) {
  let t = useDispatch();
  let i = selectUser();
  let {
    addCommunityProfileUser,
    takeStep,
    loading,
    step,
    nextStep
  } = _$$D2.usePublishModalStateMachine({
    publisher: e.publisher,
    resource: e.plugin,
    resourcePublishingStatusCode: e.resourcePublishingStatusCode,
    forceParentRender: e.forceParentRender,
    initialStep: e.initialStep
  });
  let c = () => {
    t(hideModal());
    t(Ij({
      id: e.localFileIdOrPluginId
    }));
    t(pm({
      id: e.localFileIdOrPluginId
    }));
  };
  let u = !!e.plugin?.monetized_resource_metadata;
  return step === _$$D2.Step.CHOOSE_PROFILE_CREATION_ROUTE_WITH_ACCOUNTS ? jsx(nn, {
    isLoading: loading,
    secondaryButton: {
      text: getI18nString('community.publishing.create_new_profile'),
      onClick: () => {
        takeStep(_$$D2.Step.SET_PROFILE_HANDLE);
      },
      spinner: loading && nextStep === _$$D2.Step.SET_PROFILE_HANDLE,
      disabled: loading
    },
    primaryButton: {
      text: getI18nString('community.publishing.connect_existing_profile'),
      onClick: () => {
        takeStep(_$$D2.Step.CONNECT_PROFILES);
      },
      spinner: loading && nextStep === _$$D2.Step.CONNECT_PROFILES,
      disabled: loading
    }
  }) : step === _$$D2.Step.CHOOSE_PROFILE_CREATION_ROUTE_NO_ACCOUNTS ? jsx(nn, {
    isLoading: loading,
    primaryButton: {
      text: getI18nString('community.publishing.create_new_profile'),
      onClick: () => {
        takeStep(_$$D2.Step.SET_PROFILE_HANDLE);
      },
      spinner: loading
    },
    withConnectedAccounts: !0
  }) : step === _$$D2.Step.CONNECT_PROFILES ? jsx(_$$$, {
    onSubmit: r => {
      if (!r || !e.publisher) {
        t(VisualBellActions.enqueue({
          type: 'profile-merge-error',
          message: getI18nString('community.publishing.unable_to_connect_profiles'),
          error: !0
        }));
        return;
      }
      addCommunityProfileUser({
        primaryUserId: r.id,
        secondaryUserId: i.id
      });
    },
    footerLeft: jsx(_$$M, {
      onClick: () => {
        takeStep(_$$D2.Step.CHOOSE_PROFILE_CREATION_ROUTE_WITH_ACCOUNTS);
      },
      className: 'plugin_publish_modal--baseButton--6QXLH hub_file_publish_modal--baseButton--m471x publish_modal--baseButton--C69Mc',
      disabled: loading,
      children: renderI18nText('general.back')
    }),
    profilesOnly: !0
  }) : step !== _$$D2.Step.SET_PROFILE_HANDLE ? jsx(XT, {
    title: e.title,
    body: e.description,
    footerLeftSide: e.role.org ? null : renderI18nText('community.publishing.review_our_community_guidelines', {
      communityGuidelinesLink: jsx(BaseLinkComponent, {
        href: u ? 'https://www.figma.com/aup' : 'https://help.figma.com/hc/articles/360038510573-Figma-Community-Guidelines',
        target: '_blank',
        trusted: !0,
        children: u ? renderI18nText('community.publishing.acceptable_use_policy') : renderI18nText('community.publishing.community_guidelines')
      })
    }),
    primaryButton: {
      onClick: u ? () => {
        e.plugin && (e.plugin.is_widget ? t(selectViewAction({
          view: 'communityHub',
          subView: 'widget',
          widgetId: e.plugin.id
        })) : t(selectViewAction({
          view: 'communityHub',
          subView: 'plugin',
          publishedPluginId: e.plugin.id
        })));
        c();
      } : c,
      text: u ? getI18nString('community.publishing.view_page') : getI18nString('general.done')
    },
    secondaryButton: u ? {
      onClick: c,
      text: getI18nString('general.done'),
      dataTestId: 'hub-file-publish-done'
    } : void 0,
    headerImgSrc: buildUploadUrl('55cce76b49d5d5c5e62352d0d21ee8ce025eef38')
  }) : e.publisher ? jsx(Kp, {
    onHandleSet: () => {
      takeStep(_$$D2.Step.INFO);
    },
    publisher: e.publisher
  }) : jsx(Fragment, {});
};
let i$ = n.PublishModalPostFormFlow;
export const o = $$iq0;
