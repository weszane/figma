import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState, useEffect, useRef, useId, useCallback, useMemo, forwardRef, Component, createRef } from "react";
import { useDispatch, connect } from "../vendor/514228";
import { debounce } from "../905/915765";
import { c2 } from "../905/382883";
import { lQ } from "../905/934246";
import { ServiceCategories as _$$e } from "../905/165054";
import { b as _$$b } from "../905/618904";
import { b as _$$b2, c as _$$c } from "../905/308099";
import { J as _$$J } from "../905/270045";
import { getFeatureFlags } from "../905/601108";
import { sx } from "../905/449184";
import { parsePxInt } from "../figma_app/783094";
import { Ay } from "../905/612521";
import { buildUploadUrl } from "../figma_app/169182";
import { ZB } from "../905/491152";
import { $D } from "../905/11";
import { useSprigWithSampling } from "../905/99656";
import { G_ } from "../figma_app/99826";
import { Point } from "../905/736624";
import { N_, CY, ks } from "../figma_app/637027";
import { kt } from "../figma_app/858013";
import { P as _$$P } from "../905/347284";
import { YQ } from "../905/502364";
import { tx as _$$tx, t as _$$t } from "../905/303541";
import { F as _$$F } from "../905/302958";
import { zX } from "../905/576487";
import { rk, nF } from "../figma_app/471982";
import { zt, Yp, mZ, F8 } from "../figma_app/808294";
import { Ul, AC } from "../figma_app/777551";
import { J as _$$J2 } from "../905/896954";
import { gH } from "../905/104173";
import { iB as _$$iB } from "../figma_app/188671";
import { fy, wx, uX, Qi, Ij, gD, Dl, Vp, zn, R8, se, fd, pm } from "../figma_app/559491";
import { oB, j7, sf } from "../905/929976";
import { s as _$$s2 } from "../905/58247";
import { to as _$$to, Lo, Ce } from "../905/156213";
import { WX } from "../figma_app/350203";
import { tf as _$$tf, fu } from "../figma_app/831799";
import { A as _$$A2 } from "../905/72153";
import { ye } from "../figma_app/314264";
import { D as _$$D, HN, oH } from "../figma_app/740025";
import { o0, Ro, jY } from "../figma_app/564095";
import { j4, UU, of, f7, kN, Dd, $W, oB as _$$oB, xw } from "../figma_app/599979";
import { D as _$$D2 } from "../905/274925";
import { Ni } from "../figma_app/188152";
import { TA, Pc } from "../905/372672";
import { M4, IT } from "../905/713695";
import { eE as _$$eE, Ts, wA as _$$wA } from "../figma_app/336853";
import { getPermissionsState, canMemberOrg, canAdminOrg } from "../figma_app/642025";
import { uF, lT, vj, nW, T as _$$T, tH as _$$tH, EY, Mi as _$$Mi, u0, M5, SW, ZB as _$$ZB, $H, Tk, CB, mI } from "../figma_app/300692";
import { qu, UR } from "../905/671449";
import { w3 } from "../905/481915";
import { dj, bD, hE, vt } from "../figma_app/45218";
import { kM, k2, aP } from "../figma_app/10554";
import { PN } from "../905/54385";
import { Lu, FW } from "../figma_app/155287";
import { D6 } from "../figma_app/175992";
import { e0 as _$$e2 } from "../905/696396";
import { vh, td as _$$td } from "../figma_app/181241";
import { is as _$$is } from "../905/744076";
import { Ju, ZU } from "../905/102752";
import { oE, zK } from "../figma_app/397269";
import { p as _$$p } from "../905/42189";
import { s as _$$s3 } from "../figma_app/504088";
import { Ao } from "../905/748636";
import { $ as _$$$ } from "../905/241406";
import eA from "classnames";
import { s as _$$s4 } from "../cssbuilder/589278";
import { sx as _$$sx } from "../905/941192";
import { gI } from "../905/277373";
import { sU, WM, Wh } from "../905/838765";
import { z as _$$z } from "../905/255946";
import { dn } from "../figma_app/994403";
import { B as _$$B } from "../905/714743";
import { E as _$$E } from "../905/984674";
import { y$ } from "../figma_app/835219";
import { A as _$$A3 } from "../1617/45452";
import { yX, Vl } from "../905/540198";
import { yX as _$$yX } from "../figma_app/918700";
import { A as _$$A4 } from "../905/356410";
import { NU } from "../figma_app/204891";
import { A as _$$A5 } from "../905/567946";
import { W as _$$W } from "../905/985740";
import { assertNotNullish } from "../figma_app/95419";
import { K as _$$K } from "../905/443068";
import { J as _$$J3 } from "../905/125993";
import { c$ } from "../figma_app/236327";
import { Um } from "../905/848862";
import { Ib } from "../905/129884";
import { Cf } from "../905/504727";
import { A as _$$A6 } from "../905/794518";
import { O as _$$O } from "../905/483217";
import { $ as _$$$2 } from "../905/668315";
import { Oc, EY as _$$EY, Fu, YK, KG, iS as _$$iS, YT, r9, $h, er as _$$er, j as _$$j, e0 as _$$e3, Oh, jB, xe, UI, Zg, Ub, q1, fl, QB, YN } from "../905/599844";
import { t as _$$t2 } from "../905/331623";
import { A as _$$A7 } from "../1617/805095";
import { v as _$$v } from "../905/442517";
import { A as _$$A8 } from "../vendor/90566";
import { v as _$$v2 } from "../905/318279";
import { jE } from "../figma_app/639088";
import { A as _$$A9 } from "../5724/965092";
import { A as _$$A0 } from "../905/562488";
import { xf } from "../figma_app/416935";
import { J as _$$J4 } from "../905/231762";
import { Y as _$$Y } from "../905/830372";
import { um } from "../905/14223";
import { FPublicationStatusType, FRequestStatusType } from "../figma_app/191312";
import { Ef } from "../905/81982";
import { d as _$$d } from "../905/44199";
import { Z as _$$Z } from "../figma_app/761870";
import { e as _$$e4 } from "../905/393279";
import { KM, x5, fJ } from "../figma_app/224019";
import { o6 } from "../905/986349";
import { zE } from "../905/64735";
import { H8 } from "../905/590952";
import { K as _$$K2 } from "../905/868738";
import { HU } from "../figma_app/926061";
import { q as _$$q } from "../905/932270";
import { A as _$$A1 } from "../905/857789";
import { A as _$$A10 } from "../905/118358";
import { A as _$$A11 } from "../1617/579393";
import { A as _$$A12 } from "../1617/582870";
import { k as _$$k2 } from "../905/391967";
import { v_, E3, Qw } from "../905/70909";
import { y as _$$y } from "../905/850671";
import { ox, ab } from "../figma_app/870683";
import { A as _$$A13 } from "../905/419640";
import { A as _$$A14 } from "../905/796878";
import { A as _$$A15 } from "../905/855351";
import { A as _$$A16 } from "../905/395159";
import { Wq, nu } from "../905/358418";
import { A as _$$A17 } from "../905/658855";
import { A as _$$A18 } from "../905/437920";
import { A as _$$A19 } from "../905/61817";
import { Bp } from "../vendor/374122";
import { MH } from "../905/772425";
import { A as _$$A20 } from "../905/972270";
import { A as _$$A21 } from "../1617/19958";
import { Q as _$$Q } from "../905/350210";
import { A as _$$A22 } from "../905/676119";
import { GW } from "../figma_app/975811";
import { Q7 } from "../905/203369";
import { iu as _$$iu, Ql, Ay as _$$Ay } from "../905/918143";
import { A as _$$A23 } from "../905/440661";
import { A as _$$A24 } from "../905/826099";
import { A as _$$A25 } from "../905/560753";
import { throwTypeError } from "../figma_app/465776";
import { _ as _$$_ } from "../figma_app/169991";
import { A as _$$A26 } from "../1617/755299";
import { A as _$$A27 } from "../905/81613";
import { A as _$$A28 } from "../905/568234";
import { A as _$$A29 } from "../905/392698";
import { A as _$$A30 } from "../905/663296";
import { $i, Ay as _$$Ay2 } from "../905/702716";
import { d as _$$d2 } from "../905/884707";
import { SE } from "../905/93400";
import { Z as _$$Z2 } from "../905/279476";
import { fI } from "../figma_app/626177";
import { M4 as _$$M, UC, nn, XT, Kp } from "../905/561298";
import { VJh } from "../figma_app/27776";
var n;
let ec = new class {
  constructor() {
    this.PermissionsSchemaValidator = vh();
  }
  getPermissions(e) {
    return this.PermissionsSchemaValidator.validate(async ({
      xr: t
    }) => await t.get("/api/plugin_publishers/permissions", _$$td.toAPIParameters(e)));
  }
}();
var ey = eA;
function eR() {
  return jsxs("div", {
    className: ey()(_$$s4.cursorDefault.flex.flexColumn.gap10.itemsCenter.justifyCenter.bRadius8.p12.wFull.$),
    children: [jsx("span", {
      style: _$$sx.add({
        boxSizing: "content-box",
        margin: "-20px auto",
        opacity: "0.3"
      }).$,
      children: jsx(y$, {})
    }), jsx(_$$E, {
      color: "default",
      fontSize: 11,
      children: _$$tx("community.cards.generating_widget_thumbnail")
    })]
  });
}
function eN(e) {
  let t = jsx("a", {
    href: "https://help.figma.com/hc/articles/4410337103639#Publish_your_widget",
    target: "_blank",
    className: _$$s4.cursorPointer.font11.colorTextBrand.$,
    onMouseDown: e => {
      e.preventDefault();
    },
    onClick: e => {
      e.stopPropagation();
    },
    children: _$$tx("community.cards.learn_more")
  });
  return jsxs("div", {
    className: ey()(_$$s4.cursorDefault.flex.flexColumn.gap10.itemsCenter.justifyCenter.bRadius8.p12.wFull.$),
    children: [jsx(_$$B, {
      svg: _$$A3
    }), jsx(_$$E, {
      color: "default",
      fontSize: 11,
      children: _$$tx("upload" === e.cardType ? "community.cards.upload_your_widget_thumbnail" : "community.cards.update_your_widget_thumbnail", {
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
    cardType: "update"
  }) : jsx(eN, {
    cardType: "upload"
  });
};
let eD = _$$tf(function (e) {
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
    }).$$finally(() => s(!1));
  }, [pluginId, metadata.widgetSnapshotImageSrc, localPlugin, updatePluginPublishingMetadata]);
  return jsx(sU, {
    onClick: onTileClicked,
    image: jsx("div", {
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
        }), jsxs("div", {
          className: _$$s4.flex.hFull.p32.relative.borderBox.$,
          children: [A && jsx(eP, {
            showLoading: n && !t,
            hasSrc: !!_
          }), jsx("div", {
            className: _$$s4.absolute.left0.top0.hFull.wFull.opacity1.eventsNone.$,
            style: _$$sx.$$if(t, {
              opacity: .1
            }).$,
            children: _ && jsx(_$$z, {
              src: _,
              context: "community"
            })
          })]
        })]
      })
    }),
    subtitle
  });
});
let eF = Ju(function (e) {
  let {
    isWidget,
    onConfirm,
    onCancel
  } = e;
  return jsx(_$$yX, {
    confirmationTitle: _$$t("community.publishing.close_confirmation_modal.title"),
    confirmText: _$$t("general.close_anyway"),
    onConfirm,
    onCancel,
    cancelText: _$$t("general.go_back"),
    popStack: !0,
    children: isWidget ? jsxs(Fragment, {
      children: [jsx(_$$E, {
        children: _$$tx("community.publishing.close_confirmation_modal.data_security_body_1.widget")
      }), jsx(_$$E, {
        children: _$$tx("community.publishing.close_confirmation_modal.data_security_body_2.widget")
      })]
    }) : jsxs(Fragment, {
      children: [jsx(_$$E, {
        children: _$$tx("community.publishing.close_confirmation_modal.data_security_body_1.plugin")
      }), jsx(_$$E, {
        children: _$$tx("community.publishing.close_confirmation_modal.data_security_body_2.plugin")
      })]
    })
  });
}, "DATA_SECURITY_UNPUBLISHED_CONFIRMATION_MODAL");
let eq = "playground_file_row--playgroundFileSelect--AKzzs";
let e$ = "playground_file_row--ui3--61px6";
function eZ(e) {
  let t = useDispatch();
  let {
    resourceId
  } = e;
  let n = assertNotNullish(e.playgroundFigFile);
  let o = Um();
  let l = o?.type === "PLAYGROUND_FILE_EDIT_DROPDOWN" && o.data.resourceId === resourceId;
  let d = useRef(null);
  let c = d.current?.getBoundingClientRect();
  return jsxs("div", {
    className: "playground_file_row--playgroundFileIcon--1f0CR",
    children: [jsx(_$$K, {
      ref: d,
      "aria-label": _$$t("community.publishing.playground_file.tooltip"),
      onClick: () => {
        l ? t(oB()) : t(j7({
          type: "PLAYGROUND_FILE_EDIT_DROPDOWN",
          data: {
            resourceId
          }
        }));
      },
      htmlAttributes: {
        "data-tooltip-type": Ib.TEXT,
        "data-tooltip": _$$t("community.publishing.playground_file.tooltip")
      },
      children: jsx(_$$J3, {})
    }), l && c && jsxs(Cf, {
      targetRect: c,
      lean: "left",
      minWidth: 120,
      maxWidth: 190,
      disableDropdownScrollContainer: !0,
      dataTestId: "playgroundFileEditOptions",
      children: [jsx(c$, {
        onClick: () => {
          let e = n?.url;
          e && Ay.redirect(e, "_blank");
        },
        children: _$$tx("community.publishing.playground_file.dropdown.open_file")
      }), jsx(c$, {
        onClick: () => {
          t(oB());
          e.removeFileCallback();
        },
        children: _$$tx("community.publishing.playground_file.dropdown.remove")
      })]
    })]
  });
}
let eJ = "plugin_publish_modal--semiBoldText--jpwzU";
let e0 = "plugin_publish_modal--successContentParagraph---3X81 publish_modal--successContentParagraph---jcpl";
let e1 = M4.Query({
  fetch: async (e, {
    xr: t
  }) => (await _$$W.getVersions({
    fileKey: e
  })).data.meta.versions[0],
  enabled: e => "" !== e
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
  let u = TA() ?? void 0;
  let [p] = IT(e1(s?.key || ""));
  let m = p.data;
  let g = s?.editor_type ? rk(s.editor_type) : null;
  let f = getFeatureFlags().ext_plugin_publish_rearch ? _$$A5 : _$$A6;
  return jsx(f, {
    label: jsx("div", {
      className: _$$s4.noWrap.$,
      children: _$$tx("community.publishing.playground_file")
    }),
    textLabel: _$$t("community.publishing.playground_file"),
    error: n,
    children: jsx("div", {
      className: ey()("plugin_publish_modal--rightColumn--Ym-vV publish_modal--rightColumn--m4M9Z", _$$s4.flex.flexRow.relative.itemsCenter.$),
      children: s ? jsxs(Fragment, {
        children: [jsx("button", {
          type: "button",
          onClick: o,
          className: eq,
          children: jsxs("div", {
            className: "playground_file_row--playgroundFileThumbnail--3Av7A",
            children: [jsx(NU, {
              file: s,
              noBorder: !0
            }), g && jsx("div", {
              className: "playground_file_row--playgroundFileEditorBadge--gYr-G",
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
        children: [jsx("button", {
          type: "button",
          onClick: o,
          className: eq,
          children: jsx(_$$O, {
            error: !!n
          })
        }), jsx("p", {
          className: ey()("playground_file_row--playgroundFileContentRow--MfIQq", e$),
          children: _$$tx("community.publishing.plugin_playground_file_help_text_new", {
            useTemplateLink: jsx(N_, {
              className: ey()("playground_file_row--playgroundLink--dRxMt", e$),
              href: "https://www.figma.com/community/file/1174497187775558195",
              target: "_blank",
              onClick: () => {
                ye("playground_template_link_click", {
                  isWidget: t,
                  userId: u,
                  pluginId: e
                });
              },
              trusted: !0,
              children: jsx(_$$E, {
                color: "brand",
                children: _$$tx("community.publishing.use_our_template")
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
  let u = t ? uF(t) : lT;
  let p = n === _$$J2.Actions.NOOP && i && i.id !== u.playground_file_version_id;
  let m = t && n === _$$J2.Actions.SET && a?.key === u.playground_fig_file?.key;
  return jsxs("div", {
    className: ey()(_$$s4.flex.flexRow.flexGrow1.itemsCenter.justifyBetween.minW0.$, "playground_file_row--playgroundFileTile--AzCVH"),
    children: [jsxs("div", {
      className: _$$s4.ml16.mr4.alignLeft.fontSemiBold.minW0.$,
      children: [jsx("p", {
        className: _$$s4.font13.ellipsis.noWrap.overflowHidden.fontSemiBold.$,
        children: a?.name
      }), p && jsx("button", {
        className: _$$s4.bgTransparent.cursorPointer.fontNormal.$,
        onClick: () => {
          c(oB());
          o();
        },
        children: jsx(_$$E, {
          color: "brand",
          children: _$$tx("community.publishing.playground_file.dropdown.update_to_latest_version")
        })
      }), m && jsx("div", {
        children: jsx(_$$E, {
          fontWeight: "regular",
          color: "secondary",
          children: _$$tx("community.publishing.playground_file.updated_version_confirmation", {
            undoButton: jsx("button", {
              className: _$$s4.bgTransparent.cursorPointer.$,
              onClick: () => {
                c(oB());
                l();
              },
              children: jsx(_$$E, {
                color: "brand",
                children: _$$tx("community.undo")
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
  return e ? jsx("div", {}) : jsx("div", {
    className: Oc,
    children: _$$tx("community.publishing.last_published_on_date_time", {
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
  let m = TA();
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
      let s = await vj(nW(i), r);
      h(URL.createObjectURL(s), s);
      sx("community_publish_modal", {
        name: "upload_icon",
        userId: m,
        resourceType: n ? "widget" : "plugin",
        resourceId: e,
        isPaid: t.isPaid,
        src: a
      });
    } catch (e) {
      e instanceof Error && h("", void 0, e.message);
      "string" == typeof e && h("", void 0, e);
    }
  };
  let _ = async () => {
    let e = c.current;
    e && (await f({
      files: e.files,
      src: dj.FILE_INPUT
    }));
  };
  let A = async e => {
    await f({
      files: e.clipboardData?.files,
      allowScaling: !0,
      src: dj.PASTE
    });
  };
  let y = async e => {
    e.preventDefault();
    e.stopPropagation();
    await f({
      files: e.dataTransfer?.files,
      src: dj.DROP
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
    u && (document.addEventListener("mousedown", e), t?.addEventListener("mousedown", e));
    return () => {
      document.removeEventListener("mousedown", e);
      t?.removeEventListener("mousedown", e);
    };
  }, [u, i]);
  return jsxs("div", {
    className: _$$s4.flex.itemsCenter.selfCenter.gap16.$,
    ref: d,
    children: [jsxs("div", {
      className: ey()("plugin_publish_icon_upload--uploadIconFocus--DMPjs plugin_publish_modal--uploadFileFocus--PaUOh", _$$s4.flex.itemsCenter.justifyCenter.borderBox.relative.flexShrink0.w48.h48.overflowHidden.$),
      onBlur: v,
      onDragOver: e => {
        e.preventDefault();
        e.stopPropagation();
        e.dataTransfer.dropEffect = "copy";
      },
      onDrop: y,
      onFocus: b,
      onKeyDown: e => {
        "Backspace" === e.key && (h("", void 0, null), c.current && (c.current.value = ""), _());
      },
      onMouseDown: e => {
        let i = d.current?.contains(document.activeElement);
        !t.iconSrc && i && c.current?.click();
      },
      onPaste: A,
      role: "button",
      style: _$$sx.add({
        borderRadius: "12px"
      }).$,
      tabIndex: 0,
      children: [jsx("div", {
        className: _$$s4.absolute.wFull.hFull.$
      }), t.iconSrc ? jsx("img", {
        className: _$$s4.w48.h48.eventsNone.$,
        src: t.iconSrc,
        alt: ""
      }) : jsx(_$$t2, {
        className: _$$s4.colorIcon.w48.h48.b1.colorBorder.borderBox.flex.itemsCenter.justifyCenter.$$with({
          colorBorderDanger: !!o
        }).$,
        style: _$$sx.add({
          borderRadius: "12px",
          borderStyle: "dashed"
        }).$,
        svg: _$$A3,
        fallbackSvg: _$$A7
      })]
    }), jsx("input", {
      className: _$$s4.absolute.w1.h1.$,
      style: _$$sx.add({
        clip: "rect(0,0,0,0)"
      }).$,
      id: "icon-upload-input",
      type: "file",
      accept: "image/*",
      ref: c,
      onChange: _,
      onBlur: v,
      onFocus: b
    }), jsx("div", {
      className: _$$s4.invisible.$$with({
        visible: u
      }).$,
      children: _$$tx("community.publishing.drop_or_paste_your_icon_image_here_or_choose_a_file_from_your_computer", {
        chooseFileLink: jsx("label", {
          className: _$$s4.cursorPointer.noWrap.colorTextBrand.$,
          htmlFor: "icon-upload-input",
          children: _$$tx("community.publishing.choose_a_file")
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
  return jsxs(_$$J, {
    htmlFor: n,
    className: _$$s4.flex.itemsCenter.hFull.justifyEnd.gap8.$,
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
        "data-testid": "plugin-publish-increment-version-toggle"
      }
    })]
  });
}
function ti({
  reviewStatus: e
}) {
  switch (e) {
    case "none":
    case "approved":
      return _$$tx("community.publishing.publish_a_new_version");
    case "required":
      return _$$tx("community.publishing.submit_a_new_version");
    case "pending":
      return _$$tx("community.publishing.resubmit_a_new_version");
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
  let u = _$$A8(c, 200);
  let p = n ? _$$t("community.publishing.whats_changed_in_this_new_version") : _$$t("community.publishing.what_can_users_expect_in_this_current_version");
  return jsx(_$$A6, {
    label: _$$t("community.publishing.version_release_notes"),
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
let to = Ju(function (e) {
  return jsx(_$$yX, {
    destructive: !0,
    confirmationTitle: _$$t("community.publishing.confirm_change_plugin_profile_modal.profile_will_be_removed", {
      profileName: e.prevProfileName
    }),
    confirmText: _$$t("community.publishing.confirm_change_plugin_profile_modal.cta"),
    onConfirm: e.onConfirm,
    onCancel: e.onCancel,
    popStack: !0,
    children: jsx("div", {
      className: jE,
      children: _$$tx("community.publishing.confirm_change_plugin_profile_modal.profile_will_be_removed_reason", {
        prevProfileName: jsx("strong", {
          children: e.prevProfileName
        }),
        newProfileName: jsx("strong", {
          children: e.newProfileName
        })
      })
    })
  });
}, "ConfirmChangePluginProfileModal");
let tl = Ju(function (e) {
  let t = {
    authorName: jsx(_$$E, {
      fontWeight: "bold",
      children: e.authorName
    }),
    orgName: jsx(_$$E, {
      fontWeight: "bold",
      children: e.parentOrgName
    }),
    publishers: jsx(_$$E, {
      fontWeight: "bold",
      children: e.usersToRemove.map(e => e.handle).join(", ")
    })
  };
  return jsx(_$$yX, {
    destructive: !0,
    confirmationTitle: _$$t("community.publishing.confirm_remove_non_org_publishers_modal.permissions_removed"),
    confirmText: _$$t("community.publishing.confirm_remove_non_org_publishers_modal.publish_anyway"),
    onConfirm: e.onConfirm,
    popStack: !0,
    children: jsx(_$$E, {
      children: _$$tx(e.isWidget ? "community.publishing.confirm_remove_non_org_publishers_modal.permissions_removed_body.widget" : "community.publishing.confirm_remove_non_org_publishers_modal.permissions_removed_body.plugin", t)
    })
  });
}, "ConfirmRemoveNonOrgPublishersModal");
function tc() {
  return jsx("div", {
    className: Fu,
    children: jsxs("div", {
      className: "plugin_publish_modal--warningBannerContainerFreemium--Kwqq3 publish_modal--warningBannerContainer--xPWDk publish_modal--infoBannerContainer--4XOeF",
      children: [jsx(_$$B, {
        className: YK,
        svg: _$$A9
      }), jsx("span", {
        className: KG,
        children: _$$tx("community.seller.freemium_publishing_temporarily_restricted")
      })]
    })
  });
}
function tE(e, t, i) {
  let n = new Map();
  for (let t in e) n.set(e[t].id, t);
  let r = new Set();
  if (n.has(t.id) && r.add(n.get(t.id)), i) for (let e of [...i.accepted, ...(i.pending ?? [])]) n.has(e.id) && r.add(n.get(e.id));
  return r;
}
function tx({
  email: e,
  usersByEmail: t,
  orgDomains: i,
  publishedPlugin: n,
  org: r
}) {
  if (!xf(e)) return {
    state: _$$d.ERROR,
    content: e
  };
  let a = t[e] ?? e;
  return tE(t, n.creator, n.plugin_publishers).has(e) ? {
    state: _$$d.ERROR,
    content: a
  } : n.roles.is_public || null == n.roles.org || !r || r.id !== n.roles.org.id ? {
    state: _$$d.OK,
    content: a
  } : _$$eE(i, a) ? {
    state: _$$d.ERROR,
    content: a
  } : {
    state: _$$d.OK,
    content: a
  };
}
let tC = Ju(function (e) {
  return jsxs(_$$yX, {
    destructive: !0,
    confirmationTitle: e.isWidget ? _$$t("community.publishing.confirm_plugin_ownership_transfer_modal.transfer_plugin_ownership.widget") : _$$t("community.publishing.confirm_plugin_ownership_transfer_modal.transfer_plugin_ownership.plugin"),
    confirmText: _$$t("file_browser.modal.transfer_ownership_cta"),
    onConfirm: e.onConfirm,
    onCancel: e.onCancel,
    popStack: !0,
    children: [jsx(_$$E, {
      fontWeight: "bold",
      children: _$$tx("file_browser.modal.are_you_sure_to_transfer_ownership", {
        newOwnerName: e.newOwnerName,
        resourceName: e.resourceName
      })
    }), jsx(_$$E, {
      children: _$$tx("file_browser.modal.cannot_undo_warning")
    })]
  });
}, "ConfirmPluginOwnershipTransferModal");
function tR(e) {
  return {
    type: "option",
    key: e,
    text: function (e) {
      switch (e) {
        case kM.OWNER:
          return _$$t("community.publishing.publisher_role_owner");
        case kM.PUBLISHER:
          return _$$t("community.publishing.publisher_role_can_update");
        default:
          return "";
      }
    }(e)
  };
}
function tN(e) {
  return "handle" in e ? e.handle : e.email ?? "";
}
function tP({
  user: e,
  isPending: t,
  isCurrentUser: i
}) {
  return jsxs(_$$Y, {
    children: [jsx("div", {
      className: _$$s4.$$with({
        opacity0_5: t
      }).$,
      children: jsx(H8, {
        user: e
      })
    }), jsx("div", {
      children: jsxs(_$$E, {
        color: t ? "tertiary" : void 0,
        children: [tN(e), " ", t && _$$tx("community.publish.pending"), " ", i && _$$tx("role_row.you_label"), " "]
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
  let u = Um();
  let p = t === kM.OWNER ? [tR(kM.OWNER)] : [tR(kM.PUBLISHER)];
  t !== kM.OWNER && (!i && a && p.unshift(tR(kM.OWNER)), p.push({
    type: "separator"
  }), p.push({
    type: "option",
    key: kM.NONE,
    text: _$$t("confirm_remove_role.remove")
  }));
  return jsxs(_$$Y, {
    padding: {
      vertical: 4,
      horizontal: 0
    },
    direction: "horizontal",
    spacing: 8,
    horizontalAlignItems: "space-between",
    children: [jsx(tP, {
      isPending: i,
      isCurrentUser: n,
      user: e
    }), jsx(HU, {
      dispatch: c,
      onChange: t => {
        t === kM.OWNER ? l?.monetized_resource_metadata ? c(_$$to({
          type: _$$K2,
          data: {}
        })) : c(_$$to({
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
            onCancel: () => {}
          },
          showModalsBeneath: !0
        })) : (c(wx({
          role: t,
          userId: e.id,
          resource: l
        })), t === kM.NONE && n && d());
      },
      options: p,
      id: `publish-invite-selector-${e.id}`,
      value: t,
      dropdownShown: u,
      dropdownData: {
        dropdownId: e.id
      },
      disabled: t === kM.OWNER
    })]
  });
}
function tD({
  gotoCreatedBySection: e,
  owner: t
}) {
  return jsxs(_$$Y, {
    direction: "vertical",
    horizontalAlignItems: "stretch",
    padding: {
      horizontal: 16,
      vertical: 8
    },
    spacing: 8,
    children: [jsx(zE, {
      orientation: "vertical",
      iconSrc: _$$A9,
      variant: "brand",
      children: _$$tx("community.publishing.publish_first_to_invite", {
        publishThisResourceLink: jsx("button", {
          className: _$$s4.colorTextBrand.cursorPointer.mr0.p0.bgTransparent.b0.$,
          onClick: e,
          children: _$$tx("community.publishing.publish_this_resource")
        })
      })
    }), jsxs(_$$Y, {
      width: "fill-parent",
      horizontalAlignItems: "space-between",
      children: [jsx(tP, {
        isPending: !1,
        isCurrentUser: !0,
        user: t
      }), jsx(_$$E, {
        children: _$$tx("community.publishing.publisher_role_owner")
      })]
    })]
  });
}
function tL({
  token: e
}) {
  let t = Ts(e.content) ? e.content.handle : e.content;
  return jsx("span", {
    className: _$$s4.maxW300.overflowHidden.ellipsis.noWrap.$,
    children: jsx(_$$E, {
      children: t
    })
  });
}
let tF = new Ef([], {
  keys: ["handle", "email"],
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
    inputValue: "",
    tokens: [],
    errorMessage: ""
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
    A(um());
  }, [A]);
  useEffect(() => {
    m !== k2.RESOURCE_PAGE && A(uX({
      resourceId: d.id,
      resourceType: d.is_widget ? bD.WIDGET : bD.PLUGIN
    }));
  }, [A, d.id, d.is_widget, m]);
  let b = !!d.roles.org && !d.roles.is_public && d.publishing_status === FPublicationStatusType.ORG_PRIVATE;
  let v = (t.id === d.creator.id || c) && b;
  return jsxs(_$$Y, {
    direction: "vertical",
    horizontalAlignItems: "stretch",
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
      buttonText: _$$t("file_permissions_modal.send_invite"),
      dispatch: A,
      dropdownShown: null,
      getSearchResults: function (i) {
        var r;
        let {
          usersByEmail
        } = e;
        n?.id === d?.roles?.org?.id && c && (a = {
          ...usersByEmail,
          [t.email]: t
        });
        let s = function (e, t, i, n) {
          let r = tE(t, i, n);
          for (let t of e.tokens) r.add("string" == typeof t.content ? t.content.trim() : t.content.email);
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
      inviteLevel: kM.PUBLISHER,
      isSubmitting: f,
      onAutocompleteChange: function (e) {
        g(e);
      },
      onSubmit: function (e) {
        let t = xf(e.inputValue) ? {
          inputValue: "",
          tokens: [...e.tokens, y(e.inputValue)],
          errorMessage: e.errorMessage
        } : e;
        let i = _$$Z(t);
        _(!0);
        o0(d, i).then(({
          resource: e,
          errors: i
        }) => {
          let n = new Set(i.map(({
            email: e
          }) => e));
          g({
            inputValue: "",
            tokens: t.tokens.filter(e => {
              let t = Ts(e.content) ? e.content.email : e.content;
              return n.has(t);
            }).map(e => ({
              ...e,
              state: _$$d.ERROR
            })),
            errorMessage: ""
          });
          A(Qi({
            publishedPlugins: [e],
            src: "PluginPublishModalPermissionsTabContents.onSubmit"
          }));
        }).catch(e => {
          A(_$$F.enqueue({
            message: _$$J4(e, e.message),
            error: !0
          }));
        }).$$finally(() => {
          _(!1);
        });
      },
      searchResultToken: function (t) {
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
      className: _$$s4.maxH300.$,
      children: jsxs(_$$Y, {
        direction: "vertical",
        spacing: 8,
        children: [jsx(tO, {
          user: d.creator,
          publisherRole: kM.OWNER,
          isPending: !1,
          isCurrentUser: t.id === d.creator.id,
          pluginName: l,
          publishedPlugin: d,
          closePluginPublishModal: p
        }, d.creator.id), d.plugin_publishers?.accepted.map(e => jsx(tO, {
          user: e,
          publisherRole: kM.PUBLISHER,
          isPending: !1,
          isCurrentUser: t.id === e.id,
          canSetToOwner: v,
          pluginName: l,
          publishedPlugin: d,
          closePluginPublishModal: p
        }, e.id)), d.plugin_publishers?.pending?.map(e => jsx(tO, {
          user: e,
          isCurrentUser: t.id === e.id,
          publisherRole: kM.PUBLISHER,
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
  return e.includes(KM.PUBLISH) ? getFeatureFlags().ext_plugin_publish_rearch ? jsx(_$$E, {
    children: t ? _$$t("community.publishing.permissions.org_private_info_text") : _$$t("community.publishing.anyone_you_invite_can_publish")
  }) : t ? jsx(_$$E, {
    children: _$$tx("community.publishing.permissions.org_private_info_text")
  }) : jsx(_$$E, {
    children: _$$tx("community.publishing.people_given_update_permissions_are_not_visible_to_the_public", {
      createdByLink: jsx("button", {
        onClick: i,
        style: _$$sx.colorTextBrand.cursorPointer.mr0.p0.bgTransparent.add({
          border: "none"
        }).$,
        children: _$$tx("community.publishing.created_by_link")
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
  p = o.id && o.plugin_publishers && uF(o).id ? jsx(tM, {
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
  return jsx("div", {
    className: _$$s4.py8.$,
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
    label: _$$t("community.publishing.publish_to"),
    children: jsxs(_$$Y, {
      direction: "vertical",
      spacing: 16,
      children: [jsx(tK, {
        roleToPublishAs: t,
        setRoleToPublishAs: i,
        orgToPublishTo: e,
        disabled: !e || s || a && t === Lu.PUBLIC
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
  return i ? jsxs("form", {
    children: [jsx(_$$b2, {
      value: e,
      onChange: t,
      legend: jsx(_$$q, {
        children: _$$tx("community.publishing.publish_to")
      }),
      children: jsxs("div", {
        className: "plugin_publish_role_to_publish_as--roleToPublishAsRadioOptions--seiRG",
        children: [jsx(_$$c, {
          readonly: n || void 0,
          value: Lu.ORG,
          label: jsx(_$$J, {
            children: i.name
          })
        }), jsx(_$$c, {
          readonly: n || void 0,
          value: Lu.PUBLIC,
          label: jsx(_$$J, {
            children: _$$tx("community.community")
          })
        })]
      })
    }), e === Lu.ORG ? jsx(_$$A1, {
      iconSrc: _$$A11,
      children: _$$tx("community.publishing.private_only_people_at_org_entity", {
        orgName: i.name
      })
    }) : jsx(_$$A1, {
      iconSrc: _$$A12,
      children: _$$tx("community.publishing.public_everyone_in_the_world")
    })]
  }) : jsxs("div", {
    children: [jsx("div", {
      className: _$$s4.h32.flex.flexRow.itemsCenter.ellipsis.noWrap.overflowHidden.$,
      children: jsx(_$$E, {
        fontSize: 12,
        children: _$$tx("community.community")
      })
    }), jsx(_$$A1, {
      iconSrc: _$$A12,
      children: _$$tx("community.publishing.public_everyone_in_the_world")
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
  if (Ul(e) || t === Lu.ORG) return null;
  if (null != n.org && t === Lu.PUBLIC) i = jsx(_$$E, {
    children: _$$tx(a ? "community.publishing.figma_reviews_all_resources_published_to_community_org_private.widget" : "community.publishing.figma_reviews_all_resources_published_to_community_org_private.plugin", {
      orgName: n.org.name
    })
  });else {
    let e = jsx(CY, {
      href: "https://help.figma.com/hc/articles/360039958914",
      target: "_blank",
      trusted: !0,
      children: _$$tx("community.publishing.see_our_guidelines_here")
    });
    i = jsx(_$$E, {
      children: _$$tx(a ? "community.publishing.resources_published_to_the_public_will_be_reviewed.widget" : "community.publishing.resources_published_to_the_public_will_be_reviewed.plugin", {
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
  title: () => _$$t("community.publishing.publish_details"),
  isVisible: () => !0
}, {
  tab: x5[1],
  title: () => _$$t("community.publishing.data_security_tab"),
  isVisible: () => !0
}, {
  tab: x5[2],
  title: () => _$$t("community.publishing.permissions_tab"),
  dataOnboardingKey: _$$k2,
  isVisible: () => !0
}];
function tX(e) {
  return jsx("div", {
    className: ey()(v_, E3),
    role: "tablist",
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
  } = _$$y(n);
  return jsx("div", {
    className: "plugin_share_link--successContentParagraph--lALMC publish_modal--successContentParagraph---jcpl",
    children: jsx("a", {
      className: "plugin_share_link--blueLink--E34aZ blue_link--blueLink--9rlnd",
      href,
      target: "_blank",
      onClick: n => {
        sx("plugin_publish_social_copy", {
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
    let t = e ? _$$t("community.publishing.widget_permissions") : _$$t("community.publishing.plugin_permissions");
    return jsx("div", {
      className: Qw,
      children: t
    });
  }
  let t = e ? _$$t("community.publishing.publish_widget") : _$$t("community.publishing.publish_plugin");
  return jsx(Fragment, {
    children: jsx("div", {
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
            inputValue: ""
          };
        case Bp.stateChangeTypes.InputKeyDownEnter:
        case Bp.stateChangeTypes.ItemClick:
          return {
            ...changes,
            highlightedIndex: e.highlightedIndex,
            isOpen: !0,
            inputValue: ""
          };
        default:
          return changes;
      }
    },
    onStateChange: ({
      selectedItem: n
    }) => {
      if (!n) return;
      let r = -1 === i.findIndex(e => e.id === n.id);
      t([...e, {
        ...n,
        isPending: r
      }]);
    }
  });
  return jsxs("div", {
    className: _$$s4.wFull.$,
    children: [jsx("div", {
      className: _$$s4.wFull.$,
      ...getComboboxProps(),
      children: jsx(ks, {
        className: "plugin_publish_modal--textInputUI3--YaTWB publish_modal--textInputUI3--bgKs8",
        placeholder: _$$t("community.publishing.type_name_or_handle"),
        ...getInputProps()
      })
    }), jsx("ul", {
      className: ey()(_$$s4.absolute.zIndex1.b1.colorBg.colorBorder.bRadius4.mt4.maxH300.overflowYScroll.$$with({
        hidden: !isOpen || !s.length
      }).$, "plugin_creators_autocomplete--dropdownUI3---ShTX"),
      ...getMenuProps(),
      children: isOpen && s.map((e, t) => jsx("li", {
        className: _$$s4.p8.$$with({
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
  return jsx(_$$Y, {
    direction: "vertical",
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
  let o = useMemo(() => e.filter(e => !("user_id" in n) || e.primary_user_id !== n.user_id), [e, n]);
  return jsxs("div", {
    className: _$$s4.flex.flexColumn.gap8.relative.itemsStretch.$,
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
    }), s && jsx(zE, {
      orientation: "vertical",
      variant: "gray",
      iconSrc: _$$A21,
      children: _$$tx("community.publishing.need_to_accept_your_invitation")
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
      label: _$$t("community.publishing.creators"),
      children: jsx("div", {
        children: e ? jsxs(Fragment, {
          children: [jsx(_$$Q, {
            ariaLabelledBy: h,
            property: i.author,
            onChange: t,
            resourceType: n,
            resource: s,
            roleToPublishAs: o,
            isPaid: l
          }), o === Lu.PUBLIC && !p && jsx(_$$A22, {
            onClick: () => m(!0)
          })]
        }) : jsx(_$$A19, {
          profile: {
            ...s.publisher,
            isPending: !1
          },
          dataTestId: "plugin-publish-creator-publisher"
        })
      })
    }), o === Lu.PUBLIC && jsx(Fragment, {
      children: p && jsx(_$$A6, {
        label: _$$t("community.publishing.cocreators"),
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
    label: "",
    disabled: o,
    children: [jsxs("div", {
      className: _$$iS,
      children: [jsxs("div", {
        className: ey()(YT, {
          [r9]: o
        }),
        children: [jsx(_$$v, {
          id: d,
          checked: l,
          onChange: t,
          disabled: o
        }), jsx("label", {
          className: ey()($h, {
            [r9]: o
          }),
          htmlFor: d,
          children: _$$tx("community.seller.give_yearly_discount")
        })]
      }), l && jsxs("div", {
        className: _$$er,
        children: [jsx(Q7, {
          placeholder: e ? _$$t("community.seller.add_percent") : _$$t("community.seller.percent_discount"),
          property: n,
          formatter: new GW(),
          onChange: i,
          className: ey()(_$$j, {
            [_$$e3]: !!s
          }),
          disabled: o
        }), jsx("div", {
          className: Oh,
          children: !s && zt(e, n)
        })]
      })]
    }), l && !!s && jsx("div", {
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
  if (qu(t) && !e) s = jsx(ix, {
    children: jsx(_$$E, {
      children: _$$tx("community.publishing.data_security.initial", {
        buttonText: jsx(iS, {
          text: i ? _$$t("community.publishing.data_security.initial_button.widget") : _$$t("community.publishing.data_security.initial_button.plugin"),
          onClick: n
        })
      })
    })
  });else if (t) {
    let o = UR(t, e);
    s = a && e ? e.status === FRequestStatusType.APPROVED ? jsx(ix, {
      children: jsx(_$$E, {
        children: _$$tx(i ? "community.publishing.data_security.opted_out.approved.widget" : "community.publishing.data_security.opted_out.approved.plugin")
      })
    }) : jsx(ix, {
      children: jsx(_$$E, {
        children: _$$tx("community.publishing.data_security.opted_out.pending_rejected")
      })
    }) : 0 === o ? jsxs(ix, {
      children: [jsx(_$$B, {
        className: _$$s4.colorIcon.$,
        svg: _$$A26
      }), jsx(_$$E, {
        children: _$$tx("community.publishing.data_security.ready_to_submit", {
          buttonText: jsx(iS, {
            text: _$$t("community.publishing.data_security.security_details_button"),
            onClick: n
          })
        })
      })]
    }) : jsx(ix, {
      children: jsxs(_$$Y, {
        width: "fill-parent",
        horizontalAlignItems: "space-between",
        children: [jsx(iS, {
          text: _$$t("community.publishing.data_security.details_are_missing"),
          onClick: n
        }), jsx(_$$Y, {
          width: "hug-contents",
          direction: "horizontal",
          backgroundColor: "danger-tertiary",
          padding: {
            vertical: 4,
            horizontal: 8
          },
          cornerRadius: 3,
          children: jsx(_$$E, {
            color: "danger",
            children: _$$tx("community.publishing.data_security.number_of_errors", {
              num: o
            })
          })
        })]
      })
    });
  } else if (e) switch (e.status) {
    case FRequestStatusType.PENDING:
      s = jsxs(ix, {
        children: [jsx(_$$B, {
          className: _$$s4.colorIcon.$,
          svg: _$$A26
        }), jsx(_$$E, {
          children: _$$tx("community.publishing.data_security.pending", {
            buttonText: jsx(iS, {
              text: _$$t("community.publishing.data_security.security_details_button"),
              onClick: n
            })
          })
        })]
      });
      break;
    case FRequestStatusType.APPROVED:
      s = jsxs(ix, {
        children: [jsx(_$$_, {}), jsx(_$$E, {
          children: _$$tx("community.publishing.data_security.approved", {
            buttonText: jsx(iS, {
              text: _$$t("community.publishing.data_security.security_details_button"),
              onClick: n
            })
          })
        })]
      });
      break;
    case FRequestStatusType.REJECTED:
      s = jsx(ix, {
        children: jsx(_$$E, {
          children: _$$tx("community.publishing.data_security.rejected", {
            buttonText: jsx(iS, {
              text: _$$t("community.publishing.security_form.learn_more_arrow"),
              onClick: n
            })
          })
        })
      });
      break;
    default:
      throwTypeError(e.status);
  }
  return jsx(_$$A6, {
    label: _$$t("community.publishing.data_security"),
    children: s
  });
}
function ix({
  children: e
}) {
  return jsx(_$$Y, {
    width: "fill-parent",
    height: "fill-parent",
    verticalAlignItems: "center",
    children: e
  });
}
function iS({
  text: e,
  onClick: t
}) {
  return jsx("button", {
    onClick: t,
    className: _$$s4.bgTransparent.colorTextBrand.cursorPointer.$,
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
  return jsx("div", {
    className: _$$s4.$$case([[n, _$$s4.colorTextDanger], [a, _$$s4.colorTextWarning]], _$$s4.colorTextTertiary).ml8.$,
    style: _$$sx.add({
      gridColumnStart: 16,
      gridColumnEnd: 18
    }).$,
    "data-testid": "text-character-counter",
    children: t - e.length
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
    label: _$$t("community.general.tagline"),
    afterLabelContent: jsx(iP, {
      value: e,
      warningLength: _$$D,
      maxLength: HN
    }),
    error: n,
    required: a,
    children: jsx(ks, {
      className: ey()(xe, {
        [_$$e3]: !!n
      }),
      value: e,
      onChange: t,
      spellCheck: !1,
      placeholder: i === bD.WIDGET ? _$$t("community.publishing.widget_tagline_input_placeholder") : _$$t("community.publishing.plugin_tagline_input_placeholder")
    })
  });
}
forwardRef(function ({
  maxLength: e,
  warningLength: t,
  ...i
}, n) {
  return jsxs(Fragment, {
    children: [jsx(iP, {
      value: i.value,
      maxLength: e,
      warningLength: t
    }), jsx(ks, {
      ..._$$d2(i),
      className: "plugin_publish_modal--textInput--E1F0C publish_modal--textInput--ru4I2 publish_modal--rightColumn--m4M9Z modal--textInput---r1fJ",
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
  return 0 === n.length ? null : jsx("div", {
    className: UI,
    children: jsx(fI, {
      className: Zg,
      ref: i,
      children: jsxs("div", {
        className: Ub,
        children: [jsxs("div", {
          className: q1,
          children: [jsx(_$$Z2, {}), _$$tx("community.publish.fix_errors")]
        }), jsx("div", {
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
  return jsx("ul", {
    children: e.map(e => jsx("li", {
      className: QB,
      children: t[e]
    }, String(e)))
  });
}
function iU() {
  return jsx("div", {
    className: ey()(Oc, YN),
    "data-testid": "publish-modal-footer-text",
    children: _$$tx("community.publish.fix_errors")
  });
}
let iG = parsePxInt(VJh);
var iz = (e => (e[e.FORM = 0] = "FORM", e[e.POST_PLUGIN_PUBLISH_FLOW = 1] = "POST_PLUGIN_PUBLISH_FLOW", e[e.POST_PAID_PLUGIN_PUBLISH_FLOW = 2] = "POST_PAID_PLUGIN_PUBLISH_FLOW", e))(iz || {});
let iH = ["twoFactorAuthDisabledError", "emailNotVerifiedError", "accountDetailsChangedError", "usesProposedApi", "author", "other", "publishers", "freemiumRequiredForMigrating", "creators", "lego"];
class iW extends Component {
  constructor(e) {
    super(e);
    this.hasAttemptedToPublish = !1;
    this.setActiveTab = e => {
      var t;
      t = {
        currentTab: this.state.activeTab,
        newTab: e,
        entryPoint: this.props.entryPoint,
        pluginId: this.props.publishedPlugin.id,
        userId: this.props.user.id,
        orgId: this.props.currentOrg?.id,
        resourceType: this.isWidget() ? "widget" : "plugin"
      };
      sx("plugin_publish_modal_click_tab", t);
      e === KM.PERMISSIONS && YQ({
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
        (e.code === aP.SUCCESS || e.code === aP.FAILURE) && this.props.dispatch(Ij({
          id: this.getLocalFileIdOrPluginId()
        }));
        sx("plugin_publish_modal_close", {
          entryPoint: this.props.entryPoint,
          pluginId: this.getLocalFileIdOrPluginId(),
          resourceType: this.props.publishedPlugin ? this.props.publishedPlugin.is_widget ? "widget" : "plugin" : void 0,
          publishModalStep: this.state.step,
          userId: this.props.user.id,
          tab: this.state.activeTab
        });
        this.props.Sprig("track", "plugin_publish_modal_close", {
          hasAttemptedToPublish: this.hasAttemptedToPublish,
          hasSucceededToPublish: e.code === aP.SUCCESS,
          timeSpentInModal: this.getTimeSinceComponentDidMount()
        });
        this.props.dispatch(Lo());
        let i = _$$T();
        i && _$$s2({
          initialX: 0,
          initialY: 0,
          initialTab: "figjam" === i ? this.isWidget() ? _$$p.WIDGETS : _$$p.PLUGINS : void 0,
          initialFdResourceTab: "figma" === i ? this.isWidget() ? _$$s3.WIDGET : _$$s3.PLUGIN : void 0,
          initialFdView: "figma" === i ? "development" : void 0,
          scrollDevelopmentSectionIntoView: "figjam" === i,
          source: "extension-publish-modal"
        });
        t && Ay.reload("Published plugin updated");
      };
      let n = this.state.localSecurityFormResponse;
      let r = this.props.existingSecurityFormResponse;
      if (!e && n && !qu(n) && !c2(n, {
        version: r?.formVersion,
        questions: r?.responses
      })) {
        this.props.dispatch(_$$to({
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
      this.inputDebounce("description", e);
    };
    this.onInputChanged = e => t => {
      this.inputDebounce(e, t.currentTarget.value);
    };
    this.inputDebounce = debounce((e, t) => {
      if ("name" === e || "description" === e) {
        let t = "name" === e ? WX.EDIT_NAME : WX.EDIT_DESCRIPTION;
        sx("community_publish_modal", {
          userId: this.props.user.id,
          orgId: this.getOrgIdFromPublisherOrRole(),
          step: t,
          name: t,
          resourceType: this.isWidget() ? "widget" : "plugin",
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
      let t = ZB(e) ? "" : e;
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
          code: aP.EDIT
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
      return status.code === aP.FAILURE && status.error.includes("invalid word");
    };
    this.isPrivateResource = () => this.state.roleToPublishAs === Lu.ORG && !!this.getOrgToPublishTo();
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
          commentsSetting: this.props.commentsDisabled ? Ni.ENABLED : Ni.ALL_DISABLED
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
          isSubscription: e === hE.SUBSCRIPTION
        }
      }));
    };
    this.isInEditPageMode = () => !this.props.localPlugin;
    this.isUniversalPosting = () => this.props.entryPoint === k2.UNIVERSAL_POSTING;
    this.onPublishClick = async () => {
      this.hasAttemptedToPublish = !0;
      let e = await this.existingPluginPublishersPermissions();
      if (!e || 0 === e.fail.length) {
        this.doPublish();
        return;
      }
      let t = "";
      let i = this.props.publishingState.metadata.author;
      if ("org_id" in i) t = i.org_id;else if ("team_id" in i) {
        let e = this.props.teams[i.team_id];
        t = e?.org_id ?? "";
      }
      let n = j4({
        org_id: t
      })?.name;
      let r = j4(this.props.publishingState.metadata.author)?.name;
      if (!n || !r) {
        this.doPublish();
        return;
      }
      this.props.dispatch(_$$to({
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
        sx("plugin_publish_validation_error", e);
        sx("creator_publishing_error", {
          errors: Object.values(e),
          errorFields: Object.keys(e),
          resourceType: this.isWidget() ? "widget" : "plugin",
          resourceId: this.getLocalFileIdOrPluginId(),
          isPaid: !!metadata.price,
          hasPaymentsApi: !!metadata.hasPaymentsApi
        });
        this.isUniversalPosting() && sx("community_publish_modal", {
          userId: this.props.user.id,
          orgId: this.getOrgIdFromPublisherOrRole(),
          step: WX.ERROR,
          errors: Object.values(e)
        });
        return;
      }
      let n = UU(this.props.permissionsState, this.props.publishedPlugin, !1);
      let r = of(this.props.permissionsState, this.props.publishedPlugin);
      this.authorWillChange() && r && !n.some(e => f7(e, r)) ? this.props.dispatch(_$$to({
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
          onCancel: () => {}
        },
        showModalsBeneath: !0
      })) : this.createOrUpdatePluginVersion(i);
    };
    this.submitSecurityForm = () => {
      let e = this.isWidget() ? "widget" : "plugin";
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
      this.props.validPluginId || $D(_$$e.COMMUNITY, Error("validPluginId is undefined but should have been validated already"));
      let i = this.props.validPluginId ?? "";
      let n = this.props.publishedPlugin.third_party_m10n_status === PN.FLAGGED && metadata.isPaid;
      if (!this.isInEditPageMode() && (this.state.shouldIncrementVersion || n) && this.props.localPlugin) {
        sx("plugin_publish_details_view_publish", {
          pluginId: this.props.publishedPlugin?.id,
          currentPluginVersionId: this.props.publishedPlugin?.current_plugin_version_id,
          actionType: this.props.publishedPlugin?.current_plugin_version_id ? "publish_version" : "publish_resource",
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
        this.isUniversalPosting() && sx("community_publish_modal", {
          userId: this.props.user.id,
          orgId: this.getOrgIdFromPublisherOrRole(),
          step: WX.PUBLISH,
          isPaid: metadata.isPaid
        });
        let i = this.props.publishedPlugin.current_plugin_version_id || void 0;
        sx("plugin_publish_details_view_publish", {
          pluginId: this.props.publishedPlugin?.id,
          currentPluginVersionId: i,
          actionType: "publish_edit",
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
            this.props.entryPoint !== k2.EDITOR && this.close({
              ignoreUnsavedChanges: !0,
              reloadResourceDetailPage: this.props.entryPoint === k2.RESOURCE_PAGE
            });
          },
          playgroundFilePublishType: metadata.playgroundFilePublishType,
          localFileIdOrPluginId: this.getLocalFileIdOrPluginId()
        }));
      }
      this.state.otherCategoryInputValue.trim() && sx("community_category_suggestion", {
        resourceType: this.isWidget() ? "widget" : "plugin",
        resourceId: i,
        categoryId: metadata.categoryId,
        suggestedCategory: this.state.otherCategoryInputValue.trim()
      }, {
        forwardToDatadog: !0
      });
    };
    this.updatePublishedPlugin = (e, t, i = !0) => {
      this.props.validPluginId || $D(_$$e.COMMUNITY, Error("validPluginId is undefined but should have been validated already"));
      let n = this.props.validPluginId ?? "";
      this.submitSecurityForm();
      let r = _$$tH(this.getOrgToPublishTo(), this.state.roleToPublishAs);
      if (null == r) return;
      let a = !e.blockPublishingOnToS;
      let s = EY(this.props.publishedPlugin, r);
      let o = Dd(this.props.publishedPlugin, this.props.user.id) || this.props.isRepublishingUnpublishedPlugin;
      s && o && this.props.dispatch(zn({
        pluginId: n,
        role: r,
        agreedToTos: a,
        isWidget: this.isWidget()
      }));
      let l = this.state.roleToPublishAs === Lu.PUBLIC ? t.map(e => e.id) : [];
      this.props.dispatch(R8({
        pluginId: n,
        ...(i ? {
          tags: e.tags,
          tagsV2: e.tagsV2
        } : {}),
        supportContact: e.supportContact || "",
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
          this.props.dispatch(_$$F.enqueue({
            message: this.hasChangedSubscriptionPrice() && !AC(this.props.publishedPlugin) ? _$$t("community.publishing.new_price_will_appear_within_an_hour_on_Community") : _$$t("community.publishing.changes_saved"),
            icon: zX.CHECK
          }));
        },
        hasFreemiumCode: e.hasPaymentsApi,
        ...(!Ro(this.props.publishedPlugin, this.props.user.id) && (this.authorWillChange() || this.isFirstTimePublish()) ? {
          authorTeamId: "team_id" in e.author ? e.author.team_id : "",
          authorOrgId: "org_id" in e.author ? e.author.org_id : ""
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
      if ("org_id" in author) return author.org_id;
      if ("team_id" in author) return this.props.teams[author.team_id]?.org_id || void 0;
      {
        let e = _$$tH(this.getOrgToPublishTo(), this.state.roleToPublishAs);
        return e?.org?.id || void 0;
      }
    };
    this.snapshotUploadPaste = e => {
      let {
        items
      } = e.clipboardData;
      let i = (() => {
        for (let i in items) {
          var e = items[i];
          if ("file" === e.kind && e.type === w3) return e;
        }
      })();
      if (!i) {
        this.props.dispatch(fy({
          id: this.getLocalFileIdOrPluginId(),
          metadata: {
            ...this.props.publishingState.metadata,
            widgetSnapshotImageError: _$$t("community.publishing.error_please_upload_with_transparent_background")
          }
        }));
        return;
      }
      var n = i.getAsFile();
      var r = new FileReader();
      r.onload = e => {
        let t = new Image();
        t.onload = () => {
          let e = document.createElement("canvas");
          e.width = t.width;
          e.height = t.height;
          e.getContext("2d").drawImage(t, 0, 0);
          let i = G_(e.toDataURL("image/png"));
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
      8 === e.keyCode && this.props.dispatch(fy({
        id: this.getLocalFileIdOrPluginId(),
        metadata: {
          ...this.props.publishingState.metadata,
          widgetSnapshotImageSrc: "",
          widgetSnapshotImageBlob: void 0,
          widgetSnapshotImageError: null
        }
      }));
    };
    this.getLocalFileIdOrPluginId = () => _$$Mi(this.props.publishedPlugin, this.props.localPlugin);
    this.getPluginManifest = () => this.props.localPlugin ? this.props.localPlugin.manifest : uF(this.props.publishedPlugin).manifest;
    this.getOrgToPublishTo = () => u0(this.props.publishedPlugin, this.props.currentOrg, this.props.isCurrentOrgMember);
    this.isFirstTimePublish = () => 0 === Object.keys(this.props.publishedPlugin.versions).length;
    this.isPrimaryOwner = () => {
      if (this.isFirstTimePublish()) return !0;
      let e = this.props.publishedPlugin;
      let t = this.props.user;
      return !!e?.creator?.id && e.creator.id === t.id;
    };
    this.isPaidResource = () => !!this.props.publishedPlugin.monetized_resource_metadata;
    this.getLastPublishedAtDateString = () => {
      let e = uF(this.props.publishedPlugin);
      return new Intl.DateTimeFormat("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric"
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
          let e = this.createdBySectionRef.current?.getElementsByTagName("input")[0];
          e?.focus();
        }));
      });
    };
    this.isWidget = () => function (e, t) {
      return !!e.is_widget || !!t && !!t.manifest.containsWidget;
    }(this.props.publishedPlugin, this.props.localPlugin);
    this.resourceType = () => nF(this.isWidget());
    this.hasChangedSubscriptionPrice = () => !!this.props.publishingState.metadata.isSubscription && !this.isFirstTimePublish() && this.state.originalPrice !== this.props.publishingState.metadata.price && null !== this.state.originalPrice;
    this.hideDropdownIfOpen = () => {
      (this.props.dropdownShown?.type === _$$iu || this.props.dropdownShown?.type === Ql) && this.props.dispatch(oB());
    };
    this.isAuthorSame = e => {
      if (Ro(this.props.publishedPlugin, this.props.user.id)) return !0;
      let t = e.metadata.author;
      if (!this.props.profile) {
        let e = of(this.props.permissionsState, this.props.publishedPlugin);
        return e && f7(e, t);
      }
      return "org_id" in this.props.profile && "org_id" in t && this.props.profile.org_id === t.org_id || "team_id" in this.props.profile && "team_id" in t && this.props.profile.team_id === t.team_id || "user_id" in t && this.props.profile.id === this.props.authedActiveCommunityProfile?.id;
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
      this.props.dispatch(_$$to({
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
      Yp(e) && (t = e < mZ ? _$$t("community.seller.paid_resource_minimum_err") : _$$t("community.seller.paid_resource_maximum_err"));
      F8(e) && (t = _$$t("community.seller.prices_must_follow_format"));
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
      Number.isInteger(e) || (t = _$$t("community.seller.discount_must_follow_format"));
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
      !t.current_plugin_version_id || t.monetized_resource_metadata || n || t.third_party_m10n_status === PN.FLAGGED ? "org_id" in e.author ? i = _$$tx("community.seller.orgs_cannot_sell") : "team_id" in e.author ? i = _$$tx("community.seller.teams_cannot_sell") : this.isPrivateResource() && (i = _$$tx("community.seller.resource_is_private")) : i = _$$tx("community.seller.only_new_resources_can_be_sold_on_community");
      return i;
    };
    this.canUserSellPluginOnCmty = () => {
      let e = this.props.user;
      return !!(!this.isPrimaryOwner() || e.can_sell_on_community && e.cmty_seller_capabilities?.includes(D6.EXTENSION));
    };
    this.renderPricingSection = (e, t) => {
      if (!this.canUserSellPluginOnCmty()) return null;
      let i = this.props.publishedPlugin;
      let n = !!e.hasPaymentsApi;
      if (i.current_plugin_version_id && !i.monetized_resource_metadata && !n && i.third_party_m10n_status !== PN.FLAGGED) return null;
      let a = e.isPaid || this.isPaidResource();
      let s = this.isPrivateResource();
      let o = this.isPaidResource();
      let l = this.getPricingDisabledMessage(e, i);
      let c = o ? _$$t("community.seller.pricing_toggle_text_for_already_paid_resources") : n ? _$$t("community.seller.pricing_using_payments_api") : void 0;
      let u = o || s || !!l;
      return jsx(_$$A13, {
        name: "pricing",
        title: jsx(Wq, {}),
        titleContent: jsx(nu, {
          on: a && !s,
          disabled: u,
          disabledMessage: l,
          onChange: n ? lQ : this.onPaidSettingChange,
          tooltipText: c,
          toggleClassName: u || n ? "plugin_publish_modal--disabledCursor--1F--s publish_modal--disabledCursor--OWlOe" : void 0
        }),
        disabled: u,
        defaultActive: n || a,
        numErrors: $W(["price"], t),
        disabledMessage: l,
        children: this.renderIsPaidPricingSection(e, t, o, a)
      });
    };
    this.authorWillChange = () => this.props.publishedPlugin.id && Object.keys(this.props.publishedPlugin.versions).length > 0 && !this.isAuthorSame(this.props.publishingState);
    this.existingPluginPublishersPermissions = async () => {
      let e = this.props.publishingState.metadata.author;
      let t = _$$tH(this.getOrgToPublishTo(), this.state.roleToPublishAs);
      if (!this.authorWillChange() || !("team_id" in e || "org_id" in e) || t && !t.is_public) return;
      let i = this.isWidget() ? {
        ...e,
        widgetId: this.props.publishedPlugin.id
      } : {
        ...e,
        pluginId: this.props.publishedPlugin.id
      };
      try {
        let e = await ec.getPermissions(i);
        if (200 === e.status) return e.data.meta;
      } catch (e) {}
    };
    this.getPublishFormPrimaryButtonText = () => {
      let e = this.getReviewStatus();
      if (!this.state.shouldIncrementVersion) return _$$t("community.publishing.save_changes");
      switch (e) {
        case "none":
          return this.isFirstTimePublish() ? _$$t("community.publishing.publish") : _$$t("community.publishing.publish_new_version");
        case "required":
          return _$$t("community.publishing.submit_for_review");
        case "pending":
          return _$$t("community.publishing.resubmit_for_review");
        case "approved":
          return _$$t("community.publishing.publish_new_version");
      }
    };
    this.getSuccessScreenText = e => {
      let t = this.props.publishedPlugin;
      let i = uF(t);
      let n = t.roles;
      let a = AC(this.props.publishedPlugin);
      let s = this.resourceType();
      if (2 === e && this.isFirstTimePublish()) return {
        title: this.isWidget() ? _$$t("community.publishing.is_under_review.widget") : _$$t("community.publishing.is_under_review.plugin"),
        description: jsxs(Fragment, {
          children: [jsx("p", {
            className: e0,
            children: _$$tx("community.publishing.our_team_will_review")
          }), jsx("p", {
            className: e0,
            children: _$$tx("community.publishing.paid_resource_success_info")
          }), jsx("p", {
            className: e0,
            children: this.isWidget() ? _$$tx("community.publishing.feel_free_to_edit_your_page.widget") : _$$tx("community.publishing.feel_free_to_edit_your_page.plugin")
          })]
        })
      };
      if (2 === e && this.hasChangedSubscriptionPrice() && !a) return {
        title: _$$t("community.publishing.your_update_is_being_published"),
        description: jsx(Fragment, {
          children: jsx("p", {
            className: e0,
            children: _$$tx("community.publishing.when_you_change_the_price_of_a_subscription")
          })
        })
      };
      let o = jsx(t0, {
        plugin: t,
        userId: this.props.user.id,
        orgId: this.getOrgIdFromPublisherOrRole()
      });
      let l = jsx("div", {
        className: e0,
        children: _$$tx("community.publishing.you_can_also_invite_other_people_to_update", {
          inviteOtherPeopleLink: jsx(CY, {
            onClick: () => {
              ye("plugin_publish_invite_others_click", {
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
            children: _$$tx("community.publishing.invite_other_people_link")
          })
        })
      });
      if (a) {
        let e = jsx(CY, {
          href: "https://help.figma.com/hc/articles/360039958914",
          target: "_blank",
          trusted: !0,
          children: _$$tx("community.publishing.see_our_guidelines_here")
        });
        return {
          title: s === bD.PLUGIN ? _$$t("community.publishing.success_your_resource_has_been_submitted_for_review.plugin") : _$$t("community.publishing.success_your_resource_has_been_submitted_for_review.widget"),
          description: jsxs(Fragment, {
            children: [jsx("p", {
              className: e0,
              children: _$$tx("community.publishing.resource_will_now_be_reviewed_by_the_figma_team", {
                resourceName: jsx("span", {
                  className: eJ,
                  children: i.name
                }),
                seeOurGuidelinesLink: e
              })
            }), jsxs("p", {
              className: e0,
              children: [s === bD.PLUGIN && _$$tx("community.publishing.below_is_your_resources_url.plugin.once_approved"), s === bD.WIDGET && _$$tx("community.publishing.below_is_your_resources_url.widget.once_approved")]
            }), o, l]
          })
        };
      }
      return n.org ? {
        title: s === bD.PLUGIN ? _$$t("community.publishing.success_your_resource_has_been_published.plugin.to_organization") : _$$t("community.publishing.success_your_resource_has_been_published.widget.to_organization"),
        description: jsxs(Fragment, {
          children: [jsx("p", {
            className: e0,
            children: _$$tx("community.publishing.resource_is_now_available_to_members_of_org", {
              resourceName: jsx("span", {
                className: eJ,
                children: i.name
              }),
              orgName: n.org.name
            })
          }), jsxs("p", {
            className: e0,
            children: [s === bD.PLUGIN && _$$tx("community.publishing.below_is_your_resources_url.plugin.with_your_teammates"), s === bD.WIDGET && _$$tx("community.publishing.below_is_your_resources_url.widget.with_your_teammates")]
          }), o, l]
        })
      } : {
        title: s === bD.PLUGIN ? _$$t("community.publishing.success_your_resource_has_been_published.plugin") : _$$t("community.publishing.success_your_resource_has_been_published.widget"),
        description: jsxs(Fragment, {
          children: [jsx("p", {
            className: e0,
            children: _$$tx("community.publishing.resource_is_now_available_to_the_entire_community", {
              resourceName: jsx("span", {
                className: eJ,
                children: i.name
              })
            })
          }), jsxs("p", {
            className: e0,
            children: [s === bD.PLUGIN && _$$tx("community.publishing.below_is_your_resources_url.plugin"), s === bD.WIDGET && _$$tx("community.publishing.below_is_your_resources_url.widget")]
          }), o, l]
        })
      };
    };
    this.renderErrorScreen = () => jsx(_$$P, {
      className: "plugin_publish_modal--scrollContainer--cHFjx publish_modal--scrollContainer--w0uYJ",
      children: jsxs("div", {
        className: "plugin_publish_modal--publishContainer---8iA- publish_modal--publishContainer--q8lqv",
        children: [jsx("div", {
          className: "plugin_publish_modal--publishHeader--xNFHi publish_modal--publishHeader--SA7W2 text--fontPos14--OL9Hp text--_fontBase--QdLsd",
          children: _$$tx("general.error")
        }), this.resourceType() === bD.PLUGIN && _$$tx("community.publishing.error_we_could_not_load_your_development_resource.plugin", {
          filename: "manifest.json"
        }), this.resourceType() === bD.WIDGET && _$$tx("community.publishing.error_we_could_not_load_your_development_resource.widget", {
          filename: "manifest.json"
        }), jsx(_$$M, {
          onClick: () => this.close(),
          children: _$$tx("general.done")
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
      unDebouncedDescription: this.props.publishingState.metadata ? this.props.publishingState.metadata.description : "",
      step: 0,
      renderBool: !1,
      publishPluginVersionActionPayload: null,
      shouldIncrementVersion: null != e.localPlugin,
      activeTab: this.props.initialTab ?? KM.PUBLISH,
      allowedTabs: this.props.initialAllowedTabs,
      showAddCreatorsInput: !!this.props.publishingState.metadata?.creators.length,
      advancedAccordionDefaultActive: !1,
      footerErrorHeightPx: 0,
      originalPrice: this.props.publishingState.metadata.price || null,
      localSecurityFormResponse: void 0,
      optedOutOfSecurityForm: !1,
      otherCategoryInputValue: ""
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
      (Ro(i, t ?? "") || i.creator?.id === t) && (e.push(KM.PUBLISH), e.push(KM.DATA_SECURITY));
      this.state.allowedTabs !== e && this.setState({
        allowedTabs: e
      });
    }
  }
  async componentDidMount() {
    this.componentDidMountTime = Date.now();
    this.props.publishedPlugin.id && uF(this.props.publishedPlugin).id && YQ({
      id: zK
    });
    this.footerErrorRef.current && this.setState({
      footerErrorHeightPx: this.footerErrorRef.current.clientHeight
    });
    await this.setAllCategories();
  }
  async setAllCategories() {
    let e = await M4.fetch(_$$iB(void 0));
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
    return !!(e && M5(e));
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
      ...SW(this.props.user, status, this.isWidget(), !this.props.localPlugin)
    };
    metadata.widgetSnapshotImageError && (i.widgetSnapshotImageError = _$$t("community.publishing.error_please_upload_with_transparent_background"));
    i.manifest || this.props.validPluginId || (i.id = _$$t("community.publishing.error_id_identifier_is_invalid"));
    e && (i = {
      ...i,
      ..._$$ZB(metadata, this.getPluginManifest(), this.isWidget(), this.props.publishedPlugin)
    });
    let a = this.props.localPlugin?.manifest;
    a?.enableProposedApi && (i.usesProposedApi = this.resourceType() === bD.PLUGIN ? _$$t("community.publishing.cannot_publish_using_enableProposedApi.plugin") : _$$t("community.publishing.cannot_publish_using_enableProposedApi.widget"));
    (!this.canUserSellPluginOnCmty() || !this.props.user.stripe_account_status) && a?.permissions?.includes("payments") && (i.notApprovedSeller = _$$t("community.publishing.cannot_use_payments_api_if_non_approved"));
    this.isPublishingLegoPlugin() && this.props.localPlugin?.manifest.editorType?.includes(FW.INSPECT) && (i.lego = _$$t("community.publishing.cannot_publish_with_inspect_editor_type"));
    $i(a) && (a?.containsWidget || this.isFirstTimePublish()) && (i.incrementalMode = _$$t("community.publishing.cannot_publish_without_document_access"));
    !this.state.optedOutOfSecurityForm && UR(this.state.localSecurityFormResponse, this.props.existingSecurityFormResponse) > 0 && (i.securityForm = _$$t("community.publishing.data_security.errors"));
    return {
      ...i,
      ...$H(metadata),
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
    null != e ? this.setState({
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
      children: [this.resourceType() === bD.PLUGIN && jsx(_$$A6, {
        label: _$$t("community.seller.payment_type"),
        labelId: "plugin-publish-modal-payment-type-label",
        disabled: i || !n,
        children: jsx("form", {
          children: jsx(_$$b, {
            value: this.props.publishingState.metadata.isSubscription ? hE.SUBSCRIPTION : hE.ONE_TIME,
            onChange: this.onSubscriptionSettingChange,
            "aria-labelledby": "plugin-publish-modal-payment-type-label",
            children: jsxs("div", {
              className: "plugin_publish_modal--paymentTypeRadioOptions--gguqu",
              children: [jsx(_$$c, {
                value: hE.ONE_TIME,
                readonly: !!i || !n || void 0,
                label: jsx(_$$J, {
                  children: _$$tx("community.seller.one_time_payment")
                })
              }), jsx(_$$c, {
                value: hE.SUBSCRIPTION,
                readonly: !!i || !n || void 0,
                label: jsx(_$$J, {
                  children: _$$tx("community.seller.monthly_subscription")
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
    let o = ["supportContact", "creatorPolicy", "playgroundFigFile", "creators", "notApprovedSeller", "securityForm"];
    o.push("incrementalMode");
    return jsxs(Fragment, {
      children: [!this.isFirstTimePublish() && jsx(_$$A13, {
        name: "version",
        title: `${_$$t("community.publishing.version")} ${this.getCurrentPluginVersionNumber() + (n && this.state.shouldIncrementVersion ? 1 : 0)}`,
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
        name: "details",
        title: _$$t("community.publishing.details"),
        defaultActive: this.isFirstTimePublish(),
        numErrors: $W(["iconImageError", "coverImageError", "name", "tagline", "description", "tags", "tagsV2", "categoryId"], i),
        children: [jsx(_$$A6, {
          label: _$$t("community.publishing.icon"),
          error: i.iconImageError,
          subLabel: _$$t("community.publishing.dimensions", {
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
          label: _$$t("community.publishing.widget_snapshot"),
          error: i.widgetSnapshotImageError,
          required: !0,
          children: e
        }), jsx(_$$A29, {
          value: t.name,
          onChange: this.onInputChanged("name"),
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
          isUserPendingOrAcceptedPublisher: jY(this.props.publishedPlugin, this.props.user.id)
        }), jsx(_$$A16, {
          showToSCheckbox: xw(this.props.permissionsState),
          onOrgMsaChange: this.onOrgMsaChange,
          blockPublishingOnToS: t.blockPublishingOnToS
        })]
      }), this.renderPricingSection(t, i), jsxs(_$$A13, {
        name: "advanced",
        title: _$$t("community.publishing.advanced"),
        numErrors: $W(o, i) + (this.hasManifestError(i) ? 1 : 0) + (a.missingNetworkAccess ? 1 : 0),
        defaultActive: this.state.advancedAccordionDefaultActive,
        children: [jsx(_$$A24, {
          value: t.supportContact,
          onChange: this.onInputChanged("supportContact"),
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
        }), this.state.roleToPublishAs === Lu.PUBLIC && jsx(_$$A23, {
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
    let i = this.props.publishingState.status?.code === aP.UPLOADING;
    let n = !1;
    this.hasFormErrors(errors) || i ? n = !0 : metadata.blockPublishingOnToS && xw(this.props.permissionsState) && (n = !0);
    let a = jsx(Fragment, {
      children: jsx("div", {
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
          borderClassName: errors.widgetSnapshotImageError ? "plugin_publish_modal--previewImageContainerError--pqU1v publish_modal--previewImageContainerError--I-s2M" : void 0
        })
      })
    });
    let s = jsx("div", {
      className: "plugin_publish_modal--previewContainer--Sksct publish_modal--previewContainer--q2lDp",
      children: jsx(_$$A17, {
        allowVideoUpload: !0,
        carouselMedia: metadata.carouselMedia,
        disableUploading: !1,
        error: errors.carouselMedia,
        isWidget: this.isWidget(),
        name: metadata.name,
        orgId: this.getOrgIdFromPublisherOrRole(),
        resourceId: this.getLocalFileIdOrPluginId(),
        resourceType: this.props.publishedPlugin && this.props.publishedPlugin.is_widget ? vt.WIDGET : vt.PLUGIN,
        updateCarouselMedia: this.updateCarouselMedia,
        userId: this.props.user.id
      })
    });
    return jsxs(Fragment, {
      children: [jsxs(_$$A14, {
        onScroll: this.hideDropdownIfOpen,
        footerErrorHeightPx: this.state.footerErrorHeightPx,
        children: [s, this.renderAccordionFormFields(a, metadata, errors)]
      }), jsxs("div", {
        children: [jsx(iM, {
          errors,
          forwardedRef: this.footerErrorRef,
          order: iH
        }), jsxs("div", {
          className: "plugin_publish_modal--footer--i71zD publish_modal--footer--MviPA",
          children: [this.hasFormErrors(errors) ? jsx(iU, {}) : jsx(e6, {
            blockPublishingOnToS: metadata.blockPublishingOnToS,
            permissionsState: this.props.permissionsState,
            onOrgMsaChange: this.onOrgMsaChange,
            isFirstTimePublish: this.isFirstTimePublish(),
            getLastPublishedAtDateString: this.getLastPublishedAtDateString
          }), jsxs("div", {
            className: "plugin_publish_modal--buttonGroup--2wfBi publish_modal--buttonGroup--pUnTG",
            children: [jsx(_$$M, {
              disabled: i,
              onClick: () => this.close(),
              children: this.isUniversalPosting() ? _$$t("general.back") : _$$t("general.cancel")
            }), jsx(UC, {
              disabled: !!n,
              onClick: () => {
                sx("community_publish_modal", {
                  userId: this.props.user.id,
                  resourceType: this.isWidget() ? "widget" : "plugin",
                  resourceId: this.getLocalFileIdOrPluginId(),
                  isPaid: this.props.isPaid,
                  publishModalStep: this.state.step,
                  name: "primary_button_clicked"
                });
                i || this.onPublishClick();
              },
              children: i ? jsx(kt, {
                className: "plugin_publish_modal--spinner--ycI09 publish_modal--spinner--7DaqW"
              }) : this.getPublishFormPrimaryButtonText()
            })]
          })]
        })]
      })]
    });
  }
  getReviewStatus() {
    switch (this.state.roleToPublishAs) {
      case Lu.ORG:
        return "none";
      case Lu.PUBLIC:
        if (Ul(this.props.publishedPlugin)) return "approved";
        if (AC(this.props.publishedPlugin)) return "pending";
        return "required";
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
    if ((1 === this.state.step || 2 === this.state.step) && this.props.publishedPlugin && this.props.publishingState.status.code === aP.SUCCESS && this.props.entryPoint === k2.EDITOR) {
      let {
        publishedPlugin,
        profile,
        localPlugin
      } = this.props;
      let o = AC(publishedPlugin) || Ul(publishedPlugin);
      let l = _$$D2.Step.INFO;
      o && (profile?.public_at || (l = _$$D2.Step.USER_PUBLISH_FLOW), profile && ("org_id" in profile && profile.org_id || "team_id" in profile && profile.team_id) && (l = _$$D2.Step.TEAM_ORG_POST_PUBLISH_FLOW));
      let d = _$$Mi(publishedPlugin, localPlugin);
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
    } else if (this.state.activeTab === KM.PUBLISH) e = this.renderForm();else if (this.state.activeTab === KM.PERMISSIONS) e = jsx(tU, {
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
    });else if (this.state.activeTab === KM.DATA_SECURITY) {
      let t = Tk(this.props.unpublishedPlugins, this.props.unpublishedWidgets, this.props.localPlugin);
      e = jsx(_$$A4, {
        localSecurityFormResponse: this.state.localSecurityFormResponse,
        setSecurityFormResponse: this.setSecurityFormResponse,
        extensionType: this.isWidget() ? "widget" : "plugin",
        onDone: () => {
          this.setActiveTab(KM.PUBLISH);
        },
        existingSecurityFormResponse: this.props.existingSecurityFormResponse,
        optedOutOfSecurityForm: this.state.optedOutOfSecurityForm,
        setOptedOutOfSecurityForm: this.setOptedOutOfSecurityForm,
        extensionId: this.props.publishedPlugin.id ? this.props.publishedPlugin.id : t?.id ? t.id : null
      });
    }
    return jsx(fu, {
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
  return jsxs(Ao, {
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
iW.displayName = "PluginPublishModal";
let iY = connect((e, t) => {
  let {
    localFileId,
    publishedPluginId,
    unpublishedPlugins,
    unpublishedWidgets
  } = t;
  let s = e.localPlugins[localFileId || ""];
  let {
    publishedPlugins,
    publishedWidgets
  } = e;
  let d = CB(publishedPlugins, publishedWidgets, s, publishedPluginId);
  let c = Tk(unpublishedPlugins, unpublishedWidgets, s);
  let u = d.id ? d.id : c?.id;
  let p = localFileId && e.publishingPlugins[localFileId] || e.publishingPlugins[d.id];
  localFileId && !p?.metadata && (p = {
    status: oH(p),
    metadata: mI({
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
    currentOrg: _$$wA(e),
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
    commentsDisabled: p.metadata.commentsSetting === Ni.ALL_DISABLED,
    authedActiveCommunityProfile: e.authedActiveCommunityProfile,
    isAdminOfPrivateOrgPlugin: d && canAdminOrg(d.org_id, e, e.user.id),
    isRepublishingUnpublishedPlugin: !d.id && !!c
  };
})(iW);
let $$iq0 = Ju(function (e) {
  let {
    Sprig
  } = useSprigWithSampling();
  let [{
    status: i,
    data: n
  }] = IT(se());
  let [{
    status: a,
    data: s
  }] = IT(fd());
  let o = !!e.publishedPluginId;
  let l = _$$A2(e.publishedPluginId ?? "", o);
  return "loading" !== i && "loading" !== a && l.loaded ? jsx(iY, {
    ...e,
    Sprig,
    unpublishedPlugins: n ?? void 0,
    unpublishedWidgets: s ?? void 0,
    existingSecurityFormResponse: l.data
  }) : jsx(kt, {});
}, "PluginPublishModal", ZU.YES);
(n || (n = {})).PublishModalPostFormFlow = function (e) {
  let t = useDispatch();
  let i = Pc();
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
    t(Ce());
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
      text: _$$t("community.publishing.create_new_profile"),
      onClick: () => {
        takeStep(_$$D2.Step.SET_PROFILE_HANDLE);
      },
      spinner: loading && nextStep === _$$D2.Step.SET_PROFILE_HANDLE,
      disabled: loading
    },
    primaryButton: {
      text: _$$t("community.publishing.connect_existing_profile"),
      onClick: () => {
        takeStep(_$$D2.Step.CONNECT_PROFILES);
      },
      spinner: loading && nextStep === _$$D2.Step.CONNECT_PROFILES,
      disabled: loading
    }
  }) : step === _$$D2.Step.CHOOSE_PROFILE_CREATION_ROUTE_NO_ACCOUNTS ? jsx(nn, {
    isLoading: loading,
    primaryButton: {
      text: _$$t("community.publishing.create_new_profile"),
      onClick: () => {
        takeStep(_$$D2.Step.SET_PROFILE_HANDLE);
      },
      spinner: loading
    },
    withConnectedAccounts: !0
  }) : step === _$$D2.Step.CONNECT_PROFILES ? jsx(_$$$, {
    onSubmit: r => {
      if (!r || !e.publisher) {
        t(_$$F.enqueue({
          type: "profile-merge-error",
          message: _$$t("community.publishing.unable_to_connect_profiles"),
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
      className: "plugin_publish_modal--baseButton--6QXLH hub_file_publish_modal--baseButton--m471x publish_modal--baseButton--C69Mc",
      disabled: loading,
      children: _$$tx("general.back")
    }),
    profilesOnly: !0
  }) : step !== _$$D2.Step.SET_PROFILE_HANDLE ? jsx(XT, {
    title: e.title,
    body: e.description,
    footerLeftSide: e.role.org ? null : _$$tx("community.publishing.review_our_community_guidelines", {
      communityGuidelinesLink: jsx(N_, {
        href: u ? "https://www.figma.com/aup" : "https://help.figma.com/hc/articles/360038510573-Figma-Community-Guidelines",
        target: "_blank",
        trusted: !0,
        children: u ? _$$tx("community.publishing.acceptable_use_policy") : _$$tx("community.publishing.community_guidelines")
      })
    }),
    primaryButton: {
      onClick: u ? () => {
        e.plugin && (e.plugin.is_widget ? t(sf({
          view: "communityHub",
          subView: "widget",
          widgetId: e.plugin.id
        })) : t(sf({
          view: "communityHub",
          subView: "plugin",
          publishedPluginId: e.plugin.id
        })));
        c();
      } : c,
      text: u ? _$$t("community.publishing.view_page") : _$$t("general.done")
    },
    secondaryButton: u ? {
      onClick: c,
      text: _$$t("general.done"),
      dataTestId: "hub-file-publish-done"
    } : void 0,
    headerImgSrc: buildUploadUrl("55cce76b49d5d5c5e62352d0d21ee8ce025eef38")
  }) : e.publisher ? jsx(Kp, {
    onHandleSet: () => {
      takeStep(_$$D2.Step.INFO);
    },
    publisher: e.publisher
  }) : jsx(Fragment, {});
};
let i$ = n.PublishModalPostFormFlow;
export const o = $$iq0;