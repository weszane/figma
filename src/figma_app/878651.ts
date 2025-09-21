import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { useState, memo, useCallback, useRef, useMemo, PureComponent, Component } from "react";
import { useSelector, useDispatch, connect } from "react-redux";
import { throwTypeError } from "../figma_app/465776";
import p from "classnames";
import { customHistory } from "../905/612521";
import { isCommandOrShift, ignoreCommandOrShift } from "../905/63728";
import { BrowserInfo, isMobileUA } from "../figma_app/778880";
import { stripHtmlTags } from "../905/491152";
import { AUTH_INIT } from "../905/194276";
import { Badge, BadgeColor } from "../figma_app/919079";
import { f as _$$f } from "../905/671470";
import { C as _$$C } from "../905/196436";
import { SvgComponent } from "../905/714743";
import { MediaQuerySvgComponent } from "../905/331623";
import { renderI18nText, getI18nString } from "../905/303541";
import { VisualBellActions } from "../905/302958";
import { Xy } from "../figma_app/578832";
import { Mr } from "../figma_app/795938";
import { decimalToPercent } from "../figma_app/808294";
import { getResourceTaglineOrDescription } from "../figma_app/777551";
import { getResourceType } from "../figma_app/427318";
import { getProfileRouteHref } from "../905/934145";
import { C as _$$C2 } from "../figma_app/382445";
import { s1, uR, oj } from "../figma_app/304207";
import { selectViewAction } from "../905/929976";
import { showModalHandler } from "../905/156213";
import { withTrackedClick } from "../figma_app/831799";
import { isOrgOrTeamExport, useCurrentOrgAdminInfo } from "../figma_app/740025";
import { Cn } from "../905/862913";
import { DropdownEnableState } from "../figma_app/188152";
import { selectCurrentUser } from "../905/372672";
import { a6 } from "../figma_app/198840";
import { getPluginVersion, getPluginMetadata } from "../figma_app/300692";
import { ResourceTypeNoComment, isWidget } from "../figma_app/45218";
import { PluginInstallStatus } from "../figma_app/155287";
import { KindEnum } from "../905/129884";
import { V as _$$V } from "../905/480825";
import { Ro } from "../figma_app/805373";
import { f as _$$f2 } from "../figma_app/750432";
import { W as _$$W } from "../905/316655";
import { Qi } from "../figma_app/599917";
import { a as _$$a } from "../905/889612";
import { ho, X$, YW } from "../figma_app/870683";
import { Ek } from "../905/483217";
import { Ij } from "../905/988303";
import { Cf, it } from "../905/504727";
import { l as _$$l } from "../905/690005";
import { G$, FF } from "../figma_app/588092";
import { H as _$$H } from "../905/209153";
import { Bz, kj, h1, mH, ZX, eB, cT, wr, Ak, vG, wA as _$$wA, Az, K9, Ry, Tk, jG, qP, ZR, _ as _$$_, JM, cR, i1, __, t5, HC, dB, bI, vz, Z2, Ls, jq, q2, o_, IM, Gf, U$, w as _$$w, _F, bs, gx, MN, uB, Rw, Wf, hz, y as _$$y, hA, Pw, Ys, XC, sn, uu, a_, s3, kP, Ah, CD, Vz, my as _$$my, NB, Jt, zb, H as _$$H2, Yt, sj, Ai, tr, Ll, IC, pt, FK, uy, HG, DU, W8, kl, r9, TD, O3, _7, k1, u0, oQ, iR, t9, x7 } from "../905/417669";
import { A as _$$A } from "../6828/409073";
import { A as _$$A2 } from "../6828/903761";
import { A as _$$A3 } from "../6828/445903";
import { A as _$$A4 } from "../1617/579393";
import { A as _$$A5 } from "../1617/424579";
var n;
var i;
var a;
var s;
var o;
var _ = p;
export function $$eu2(e) {
  let t;
  let [r, n] = useState(!1);
  let i = !r && e.isSet ? Bz : e.isWhiteboard ? kj : h1;
  let a = e.showNewBadge ? jsx($$eg3, {}) : e.showFigPickBadge ? jsx(em, {}) : jsx(Fragment, {});
  let s = _()(e.isSet ? mH : ZX, {
    [eB]: e.includeChromiumDownscalingFix && BrowserInfo.chrome
  }, e.imageClassName);
  t = e.image ? e.showOriginalThumbnail ? jsx("img", {
    className: s,
    src: e.image,
    loading: "lazy",
    onLoad: () => n(!0),
    alt: e.alt,
    draggable: !1
  }) : jsx(Xy, {
    className: s,
    image: e.image,
    onLoad: () => n(!0),
    hubFileId: e.hubFileId,
    alt: e.alt,
    thumbnailContext: e.thumbnailContext,
    resizedThumbnailUrls: e.resizedThumbnailUrls,
    draggable: e.draggable
  }) : jsx(Ek, {});
  return jsxs("div", {
    className: i,
    style: {
      backgroundColor: e.backgroundColor
    },
    children: [t, a, e.showPrototypeIcon && jsx("div", {
      className: cT,
      children: jsx(MediaQuerySvgComponent, {
        svg: _$$A5,
        className: wr,
        useOriginalSrcFills_DEPRECATED: !0,
        fallbackSvg: _$$A5
      })
    }), e.showWhiteboardIcon && jsx(ef, {})]
  });
}
function ep(e) {
  let t = useSelector(e => e.orgById);
  let r = "search" === useSelector(({
    selectedView: e
  }) => e).view;
  let n = e.plugin.org_id && t?.[e.plugin.org_id];
  let i = getPluginVersion(e.plugin);
  let {
    tagline,
    description,
    name
  } = i;
  let d = getResourceTaglineOrDescription({
    description: e.isPublishing ? "" : e.descriptionOverride ?? description ?? "",
    tagline: tagline ?? ""
  }, stripHtmlTags);
  return jsxs("div", {
    className: Ak,
    children: [jsx("div", {
      className: vG,
      children: jsx("img", {
        src: i.redirect_icon_url,
        loading: "lazy",
        alt: ""
      })
    }), jsx("div", {
      className: _$$wA,
      children: jsx(_$$V, {
        plugin: i,
        className: Az,
        loading: "lazy",
        alt: ""
      })
    }), name && jsx("div", {
      className: K9,
      children: name
    }), d && jsx("div", {
      className: name ? Ry : Tk,
      children: d
    }), r && n && jsxs("div", {
      className: jG,
      children: [jsx(_$$H, {
        entityId: n.id,
        entityName: n.name,
        imgUrl: n.img_url,
        hideTooltip: !0
      }), n.name]
    }), e.showNewBadge ? jsx($$eg3, {}) : e.showInstalledIcon && jsx("span", {
      className: qP,
      children: renderI18nText("community.plugins.saved")
    }), e.children]
  });
}
memo(function (e) {
  function t() {
    return e.name ? jsx("div", {
      className: ZR,
      children: e.name
    }) : jsx("div", {
      className: _$$_,
      children: e.placeholderName
    });
  }
  function r() {
    return jsx("div", {
      children: e.author ? e.author : jsx("div", {
        className: JM
      })
    });
  }
  return jsx(Fragment, {
    children: jsxs("div", {
      className: e.showFileNameAsPrimary ? cR : i1,
      onClick: e.onClick,
      children: [jsx("div", {
        className: __,
        children: jsx("a", {
          className: t5,
          href: e.href,
          onClick: e => e.preventDefault(),
          style: {
            backgroundColor: e.backgroundColor,
            backgroundClip: BrowserInfo.safari ? "padding-box" : ""
          },
          children: jsx($$eu2, {
            alt: e.name,
            hubFileId: e.hubFileId,
            image: e.backgroundImage,
            isSet: !!e.thumbnailIsSet,
            isWhiteboard: e.isWhiteboard,
            showFigPickBadge: e.showFigPickBadge,
            showNewBadge: e.showNewBadge,
            showOriginalThumbnail: e.showOriginalThumbnail,
            showPrototypeIcon: e.isPrototype,
            showWhiteboardIcon: e.isWhiteboard
          })
        })
      }), jsxs("div", {
        className: HC,
        children: [jsx("div", {
          className: dB,
          children: e.showFileNameAsPrimary ? jsx(r, {}) : jsx(t, {})
        }), jsxs("div", {
          className: bI,
          children: [jsxs("div", {
            className: vz,
            children: [e_(e.commentsSetting) && jsx(eh, {
              count: e.commentCount
            }), e.duplicateButton]
          }), e.showFileNameAsPrimary ? jsx(t, {}) : jsx(r, {})]
        })]
      })]
    })
  });
});
let e_ = e => e !== DropdownEnableState.ALL_DISABLED;
function eh(e) {
  return jsxs("div", {
    className: Z2,
    children: [jsx(SvgComponent, {
      className: Ls,
      svg: _$$A3
    }), " ", e.count]
  });
}
function em() {
  return jsx("div", {
    className: jq,
    "data-tooltip-type": KindEnum.TEXT,
    "data-tooltip": getI18nString("community.profiles.boosted_by_the_figma_team"),
    "data-tooltip-show-immediately": !0,
    children: jsx(Badge, {
      text: getI18nString("community.profiles.fig_pick"),
      color: BadgeColor.BRAND,
      className: q2
    })
  });
}
export function $$eg3() {
  return jsx("div", {
    className: jq,
    children: jsx(Badge, {
      text: getI18nString("community.profiles.new"),
      color: BadgeColor.SUCCESS,
      className: q2
    })
  });
}
function ef() {
  return jsx("div", {
    className: o_,
    "data-tooltip-type": KindEnum.TEXT,
    "data-tooltip": getI18nString("community.profiles.made_in_fig_jam"),
    "data-tooltip-show-immediately": !0,
    children: jsx(MediaQuerySvgComponent, {
      svg: _$$A,
      useOriginalSrcFills_DEPRECATED: !0,
      fallbackSvg: _$$A
    })
  });
}
function eE(e) {
  let {
    CreatorsOverlay,
    creatorsOverlayProps
  } = n.useCreatorsHoverOverlay({
    resource: e.plugin
  });
  let i = e.isPaid ? {
    id: "0",
    badges: [],
    monetized_resource_metadata: {
      id: "0",
      price: decimalToPercent(e.price),
      is_subscription: !1
    }
  } : null;
  return jsxs("div", {
    className: BrowserInfo.mobile ? IM : e.showAuthorByDefault ? Gf : U$,
    onClick: e.onClick,
    children: [i && jsx(Mr, {
      resource: i || e.plugin
    }), jsx(CreatorsOverlay, {
      ...creatorsOverlayProps,
      children: jsxs("div", {
        className: _$$w,
        children: [jsx("div", {
          className: _F,
          children: jsx($$ey1, {
            plugin: e.plugin,
            showNewBadge: e.showNewBadge,
            showInstalledIcon: e.showInstalledIcon,
            isPublishing: e.isPublishing,
            descriptionOverride: e.descriptionOverride,
            isPublicOverride: e.isPublicOverride
          })
        }), jsx($$eb5, {
          plugin: e.plugin,
          showInstallCount: e.showInstallCount,
          author: e.author,
          isPaid: e.isPaid,
          isPublicOverride: e.isPublicOverride,
          dropdown: e.dropdown
        })]
      })
    })]
  });
}
export function $$ey1({
  plugin: e,
  showNewBadge: t,
  showInstalledIcon: r,
  isPublishing: n,
  descriptionOverride: i,
  isPublicOverride: a,
  ...s
}) {
  let o = eT(e, a);
  return jsx(ep, {
    showInstalledIcon: r ?? o,
    showNewBadge: t,
    isPublishing: n,
    plugin: e,
    descriptionOverride: i,
    children: jsx("div", {
      className: bs,
      children: jsx(_$$C, {
        ...s
      })
    })
  });
}
export function $$eb5({
  plugin: e,
  showInstallCount: t,
  author: r,
  isPaid: i,
  dropdown: a,
  isPublicOverride: s
}) {
  let {
    AuthorsJSX
  } = n.useCreatorsHoverOverlay({
    resource: e
  });
  let u = useSelector(e => e.authedActiveCommunityProfile);
  let p = isOrgOrTeamExport(u);
  let _ = eT(e, s);
  let h = s ?? !!e.roles.is_public;
  let m = selectCurrentUser();
  let f = useDispatch();
  let y = e.publisher || e.creator;
  let T = jsx("div", {
    className: gx,
    children: jsx("div", {
      className: MN,
      children: AuthorsJSX
    })
  });
  let S = useCallback(t => {
    if (t?.stopPropagation(), t?.preventDefault(), _) m && (f(s1({
      id: e.id,
      resourceType: ResourceTypeNoComment.PLUGIN,
      source: uR.COMMUNITY_HUB
    })), f(VisualBellActions.enqueue({
      message: getI18nString("community.profiles.removed_from_saved_plugins"),
      type: "plugin-installed",
      button: {
        text: getI18nString("community.comments.undo"),
        action: () => {
          f(oj({
            id: e.id,
            resourceType: ResourceTypeNoComment.PLUGIN,
            orgId: void 0
          }));
        }
      }
    })));else {
      if (!m) {
        if (isMobileUA) {
          window.location.href = "/login";
          return;
        }
        f(AUTH_INIT({
          origin: "plugin_install_signed_out"
        }));
        f(showModalHandler({
          type: _$$l,
          data: {
            headerText: getI18nString("community.profiles.save_this_plugin_to_give_you_and_figma_a_boost"),
            icon: _$$A2,
            dispatch: f
          }
        }));
        return;
      }
      f(oj({
        id: e.id,
        resourceType: ResourceTypeNoComment.PLUGIN,
        orgId: void 0
      }));
    }
  }, [_, e, m, f]);
  return jsxs("div", {
    className: uB,
    children: [t && jsxs("div", {
      className: Rw,
      children: [h && (r || T), !h && jsxs("div", {
        className: Wf,
        children: [jsx(SvgComponent, {
          className: hz,
          svg: _$$A4
        }), renderI18nText("community.cards.private")]
      }), jsxs("div", {
        className: _$$y,
        children: [h && e_(e.comments_setting) && jsx(eh, {
          count: e.comment_count
        }), i ? jsx(Ij, {
          metric: e.unique_run_count || 0
        }) : jsxs("div", {
          className: BrowserInfo.mobile ? hA : Pw,
          children: [jsx(_$$f, {
            className: BrowserInfo.mobile || p ? Ys : _ ? XC : sn,
            count: e.install_count,
            prefix: jsx("div", {
              className: uu,
              children: _ ? "\u2713 " : "\u2193 "
            }),
            onClick: BrowserInfo.mobile || p ? void 0 : S
          }), _ && jsx("div", {
            className: a_,
            onClick: BrowserInfo.mobile || p ? void 0 : S,
            children: renderI18nText("community.profiles.remove_from_saved_plugins")
          })]
        }), a]
      })]
    }), !t && jsx(Ro, {
      entity: y,
      size: 24
    })]
  });
}
function eT(e, t) {
  let r = useSelector(e => e.authedActiveCommunityProfile);
  let n = useCurrentOrgAdminInfo();
  return (void 0 === t || t) && e.roles.is_public ? r ? _$$a(r, e) : e.profile_install_status === PluginInstallStatus.PLUGIN_INSTALLED_FOR_USER : e.install_status === PluginInstallStatus.PLUGIN_INSTALLED_FOR_USER || !!n && e.install_status === PluginInstallStatus.PLUGIN_INSTALLED_FOR_ORG;
}
(e => {
  function t(e) {
    return jsxs("div", {
      onMouseLeave: () => {
        e.setDropdownRef(null);
        e.setDropdownContent(null);
      },
      children: [e.dropdownContent && e.dropdownRef?.current && jsx(Cf, {
        targetRect: e.dropdownRef.current.getBoundingClientRect(),
        maxWidth: 150,
        minWidth: 1,
        type: it.LIGHT,
        className: s3,
        disableDropdownScrollContainer: !0,
        propagateCloseClick: !0,
        children: jsx("div", {
          className: kP,
          children: e.dropdownContent
        })
      }), e.children]
    });
  }
  function r(e) {
    let {
      setDropdownContent,
      setDropdownRef
    } = e;
    let n = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];
    let i = useRef(null);
    let a = ({
      profile: n,
      ref: i
    }) => jsx("span", {
      onMouseEnter: () => {
        setDropdownRef(i);
        setDropdownContent(jsx(Qi, {
          publisher: n,
          className: Ah
        }));
      },
      ref: i,
      className: e.avatarContainerClassName,
      children: jsx(Qi, {
        publisher: n,
        className: CD,
        avatarClassName: Vz,
        avatarSize: e.avatarSize,
        showAvatar: !0,
        hideName: !0
      })
    }, `author-link-${n.id}`);
    let s = ({
      profile: t,
      stylesOverride: r
    }) => jsx(Qi, {
      publisher: t,
      className: r || CD,
      avatarClassName: _$$my,
      avatarSize: e.avatarSize,
      showAvatar: !0
    }, `author-link-${t.id}`);
    let o = ({
      profiles: e,
      ref: n
    }) => {
      let i = jsx(Qi, {
        publisher: e[0],
        className: CD
      });
      return jsxs("div", {
        className: NB,
        children: [1 === e.length && renderI18nText("community.by_publisher", {
          publisher: i
        }), e.length > 1 && renderI18nText("community.by_publisher_with_suffix", {
          publisherName: i,
          publishersSuffix: jsx(Fragment, {
            children: jsx("span", {
              ref: n,
              className: Jt,
              onMouseLeave: () => {
                setDropdownRef(null);
              },
              onMouseEnter: () => {
                setDropdownRef(n);
                setDropdownContent(jsx(Fragment, {
                  children: e.slice(1).map(e => s({
                    profile: e,
                    stylesOverride: Ah
                  }))
                }));
              },
              children: renderI18nText("community.cards.pluralize_num_other_publishers", {
                numOtherPublishers: e.length - 1
              })
            })
          })
        })]
      });
    };
    let {
      resource
    } = e;
    if (!resource) return null;
    let u = resource.community_publishers.accepted;
    return 1 === u.length ? e.showAuthorAndOthersTextLabel ? jsxs(Fragment, {
      children: [a({
        profile: u[0],
        ref: n[0]
      }), o({
        profiles: u,
        ref: i
      })]
    }) : jsx(Fragment, {
      children: s({
        profile: u[0]
      })
    }) : u.length <= 4 ? jsxs(Fragment, {
      children: [u.map((e, t) => a({
        profile: e,
        ref: n[t]
      })), e.showAuthorAndOthersTextLabel && o({
        profiles: u,
        ref: i
      })]
    }) : jsxs(Fragment, {
      children: [...u.slice(0, 4).map((e, t) => a({
        profile: e,
        ref: n[t]
      })), (({
        profiles: n,
        ref: i
      }) => jsx("span", {
        ref: i,
        onMouseEnter: () => {
          setDropdownRef(i);
          setDropdownContent(jsx(Fragment, {
            children: n.map(e => s({
              profile: e,
              stylesOverride: Ah
            }))
          }));
        },
        onMouseLeave: () => {
          setDropdownRef(null);
        },
        children: jsx(_$$f2, {
          size: e.avatarSize,
          className: zb,
          text: `${n.length}`
        })
      }))({
        profiles: u.slice(4),
        ref: n[4]
      }), e.showAuthorAndOthersTextLabel && o({
        profiles: u,
        ref: i
      })]
    });
  }
  e.useCreatorsHoverOverlay = function ({
    resource: e,
    avatarStyleOverrides: n = {
      size: 24,
      containerClassName: _$$H2,
      showAuthorAndOthersTextLabel: !1
    }
  }) {
    let [i, a] = useState(null);
    let [s, o] = useState(null);
    let c = useMemo(() => ({
      setDropdownRef: o,
      setDropdownContent: a,
      dropdownRef: s,
      dropdownContent: i,
      avatarStyleOverrides: n
    }), [o, a, s, i, n]);
    return {
      AuthorsJSX: useMemo(() => jsx(r, {
        resource: e,
        showAuthorAndOthersTextLabel: n.showAuthorAndOthersTextLabel,
        avatarSize: n.size,
        avatarContainerClassName: n.containerClassName,
        setDropdownContent: a,
        setDropdownRef: o
      }), [e, a, o, n]),
      CreatorsOverlay: t,
      creatorsOverlayProps: c
    };
  };
  e.Authors = r;
})(n || (n = {}));
(e => {
  class t extends PureComponent {
    constructor() {
      super(...arguments);
      this.onClick = e => {
        if (isCommandOrShift(e)) {
          customHistory.redirect(ho(this.props.plugin?.id), "_blank");
          return;
        }
        this.props.onClick();
      };
    }
    render() {
      return jsx(eE, {
        onClick: this.onClick,
        showInstallCount: !0,
        showAuthorByDefault: this.props.showAuthorByDefault,
        showNewBadge: !!(this.props.lastViewedAtForNewBadge && Date.parse(this.props.plugin.created_at) > Date.parse(this.props.lastViewedAtForNewBadge)),
        dropdown: this.props.dropdown,
        plugin: this.props.plugin,
        isPublicOverride: this.props.isPublicOverride
      });
    }
  }
  e.ConnectedPluginTile = connect(null, (e, t) => ({
    onClick: () => {
      t.onClick?.();
      e(selectViewAction({
        view: "communityHub",
        subView: "plugin",
        publishedPluginId: t.pluginId
      }));
    },
    onProfileCreate: r => {
      e(showModalHandler({
        type: G$,
        data: {
          variations: [FF.OPT_IN],
          userId: r.id,
          onFinish: () => e(_$$C2({
            id: t.pluginId,
            resourceType: ResourceTypeNoComment.PLUGIN
          }))
        }
      }));
    }
  }))(t);
  e.PluginTile = function (t) {
    let r = useSelector(e => e.publishedPlugins);
    let n = t.plugin || getPluginMetadata(t.pluginId, r);
    return jsx(e.ConnectedPluginTile, {
      ...t,
      plugin: n
    });
  };
})(i || (i = {}));
let $$eI6 = i.PluginTile;
let $$eS0 = withTrackedClick($$eI6);
export class $$ev7 extends Component {
  render() {
    let {
      numResources,
      maxResources,
      className
    } = this.props;
    return jsx(Fragment, {
      children: numResources < maxResources ? Array(maxResources - numResources).fill(null).map((e, t) => jsx("div", {
        className
      }, t)) : null
    });
  }
}
$$ev7.defaultProps = {
  maxResources: 4
};
(e => {
  class t extends Component {
    constructor() {
      super(...arguments);
      this.onHubFileClick = ignoreCommandOrShift(e => {
        e.preventDefault();
        e.stopPropagation();
        this.props.onHubFileClick();
      });
    }
    render() {
      let e = a6(this.props.hubFile);
      return jsx("div", {
        className: Yt,
        children: jsx("div", {
          className: sj,
          children: jsx("a", {
            className: Ai,
            style: {
              backgroundColor: Cn(this.props.hubFile.client_meta),
              backgroundImage: `url(${this.props.hubFile.thumbnail_url})`
            },
            onClick: this.onHubFileClick,
            href: X$(this.props.hubFile.id),
            children: jsx("div", {
              className: tr,
              children: jsx("div", {
                className: Ll,
                children: e.name
              })
            })
          })
        })
      });
    }
  }
  t.displayName = "PublicProfileHubFileTile";
  e.PublicProfileHubFileTile = connect(null, (e, t) => ({
    onHubFileClick: () => {
      e(selectViewAction({
        view: "communityHub",
        subView: "hubFile",
        hubFileId: t.hubFile.id
      }));
    }
  }))(t);
})(a || (a = {}));
(e => {
  class t extends Component {
    constructor() {
      super(...arguments);
      this.onPluginClick = ignoreCommandOrShift(e => {
        e.preventDefault();
        e.stopPropagation();
        this.props.onResourceClick();
      });
    }
    render() {
      let e = getPluginVersion(this.props.resource);
      let t = isWidget(this.props.resource);
      return jsx("div", {
        className: Yt,
        children: jsx("div", {
          className: sj,
          children: jsxs("a", {
            className: IC,
            onClick: this.onPluginClick,
            href: t ? YW(this.props.resource.id) : ho(this.props.resource.id),
            children: [jsx(_$$V, {
              className: pt,
              plugin: e,
              loading: "lazy",
              alt: ""
            }), jsx("div", {
              className: FK,
              children: e.name
            })]
          })
        })
      });
    }
  }
  t.displayName = "PublicProfilePluginTile";
  e.PublicProfileBasePluginTile = connect(null, (e, t) => ({
    onResourceClick: () => {
      isWidget(t.resource) ? e(selectViewAction({
        view: "communityHub",
        subView: "widget",
        widgetId: t.resource.id
      })) : e(selectViewAction({
        view: "communityHub",
        subView: "plugin",
        publishedPluginId: t.resource.id
      }));
    }
  }))(t);
})(s || (s = {}));
(e => {
  class t extends Component {
    constructor(e) {
      super(e);
      this.onPublicProfileClick = e => {
        if (isCommandOrShift(e)) {
          let e = this.props.publicProfile;
          if (!e) return;
          customHistory.redirect(getProfileRouteHref(e.profile_handle) || "", "_blank");
          return;
        }
        this.props.onPublicProfileClick();
      };
      this.updateFollowInfoOnFollowClick = () => {
        let e = this.state.currentUserIsFollowing ? {
          currentUserFollowActionCountDiff: this.state.currentUserFollowActionCountDiff - 1,
          currentUserIsFollowing: !1
        } : {
          currentUserFollowActionCountDiff: this.state.currentUserFollowActionCountDiff + 1,
          currentUserIsFollowing: !0
        };
        this.setState(e);
      };
      this.state = {
        currentUserFollowActionCountDiff: 0,
        currentUserIsFollowing: e.publicProfile.current_user_is_following
      };
    }
    render() {
      let e = this.props.publicProfile;
      if (!e) return null;
      let t = {
        id: e.id,
        name: e.name,
        img_url: e.img_url
      };
      return jsxs("div", {
        className: `${uy} ${this.props.notTabletSidebarOptimized ? HG : ""}`,
        children: [jsxs("div", {
          className: DU,
          children: [jsx("div", {
            onClick: this.onPublicProfileClick,
            children: jsx(Ro, {
              entity: t,
              size: 96,
              className: W8
            })
          }), jsxs("div", {
            className: kl,
            children: [jsx("div", {
              className: r9,
              onClick: this.onPublicProfileClick,
              children: e.name
            }), e.profile_handle && jsxs("div", {
              className: TD,
              children: [jsxs("div", {
                className: O3,
                onClick: this.onPublicProfileClick,
                children: ["@", e.profile_handle]
              }), e.current_user_is_followed && jsx($$ex8, {})]
            }), e.location && jsx("div", {
              className: _7,
              children: e.location
            }), jsxs("div", {
              className: k1,
              children: [!this.props.isOwnProfile && jsx(_$$W, {
                profile: e,
                onClick: this.updateFollowInfoOnFollowClick,
                onError: this.updateFollowInfoOnFollowClick
              }), jsxs("div", {
                children: [jsx("div", {
                  className: u0,
                  children: renderI18nText("community.follow.followers")
                }), jsx("div", {
                  className: oQ,
                  children: e.follower_count + this.state.currentUserFollowActionCountDiff
                })]
              })]
            })]
          })]
        }), this.props.resources.length > 0 && jsxs("div", {
          className: iR,
          children: [this.props.resources.map(e => {
            let t = getResourceType(e);
            switch (t) {
              case ResourceTypeNoComment.HUB_FILE:
                return jsx(a.PublicProfileHubFileTile, {
                  hubFile: e
                }, e.id);
              case ResourceTypeNoComment.PLUGIN:
              case ResourceTypeNoComment.WIDGET:
                return jsx(s.PublicProfileBasePluginTile, {
                  resource: e
                }, e.id);
              default:
                throwTypeError(t);
            }
          }), jsx($$ev7, {
            numResources: this.props.resources.length,
            maxResources: 6,
            className: Yt
          })]
        }), 0 === this.props.resources.length && jsx("div", {
          className: t9,
          children: renderI18nText("community.profiles.no_resources_published_yet")
        })]
      });
    }
  }
  t.displayName = "PublicProfileTile";
  let r = (e, t) => ({
    isOwnProfile: e.authedActiveCommunityProfile?.id === t.publicProfile.id
  });
  let n = (e, t) => ({
    onPublicProfileClick: () => {
      t.onClick && t.onClick();
      e(selectViewAction({
        view: "communityHub",
        subView: "handle",
        handle: t.publicProfile.profile_handle
      }));
    }
  });
  e.ConnectedPublicProfileTile = connect(r, n)(t);
  e.ConnectedPublicProfileTileTracked = connect(r, n)(withTrackedClick(t));
})(o || (o = {}));
export let $$eA4 = o.ConnectedPublicProfileTile;
export function $$ex8({
  color: e = BadgeColor.DEFAULT
}) {
  return jsx(Badge, {
    text: getI18nString("community.profiles.follows_you"),
    color: e,
    className: x7
  });
}
o.ConnectedPublicProfileTileTracked;
export const AB = $$eS0;
export const Ce = $$ey1;
export const Ho = $$eu2;
export const Q7 = $$eg3;
export const TL = $$eA4;
export const Xg = $$eb5;
export const cS = $$eI6;
export const hT = $$ev7;
export const v_ = $$ex8;