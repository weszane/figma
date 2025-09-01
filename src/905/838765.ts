import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState, useCallback, memo, useRef } from "react";
import { E as _$$E } from "../905/632989";
import l from "classnames";
import { Ay, rr } from "../figma_app/778880";
import { B } from "../905/714743";
import { s as _$$s } from "../cssbuilder/589278";
import { t as _$$t, tx } from "../905/303541";
import { H8, Pf } from "../905/590952";
import { U3 } from "../figma_app/412189";
import { U6 } from "../figma_app/599917";
import { L } from "../905/606555";
import { v as _$$v } from "../905/617004";
import { Cf, it } from "../905/504727";
import { xY } from "../figma_app/439332";
import { H } from "../905/209153";
import { ev, ll, nK } from "../905/224306";
import { ii, $M, cO, Vl, wp, yZ, MP, Sp, Bi, pB, J7, kU, KR, ai, Fl, Fb, xm, QH, xc, cu, Kb, RR, iz, Tz, vG, Nv, wH, h1, gf, hI, g as _$$g, JQ, Q3, gW, xB, i2, cf, o6, dL } from "../figma_app/957552";
import { A as _$$A } from "../6828/677648";
import { A as _$$A2 } from "../5724/568040";
var $$n1;
var $$r0;
var d = l;
function b() {
  let [e, t] = useState();
  return {
    isFollowing: e,
    toggleFollowing: () => t(!e),
    fetchCreatorFollowStatus: useCallback(e => {
      t(void 0);
      L.getFollows({
        authorId: e
      }).then(({
        data: e
      }) => t(e.meta.current_user_is_following));
    }, [])
  };
}
function v(e) {
  let {
    targetRect,
    profile,
    className,
    trackingProperties,
    trackingEventName,
    isFollowing,
    toggleFollowing
  } = e;
  return jsx(Cf, {
    className: `${className} creator_preview_tooltip--publisherDropdown--DrAYo`,
    targetRect,
    maxWidth: 380,
    minWidth: 380,
    type: it.MATCH_BACKGROUND,
    leanPadding: 0,
    hidePointWhenContentOffScreen: !0,
    disableDropdownScrollContainer: !0,
    propagateCloseClick: !0,
    children: jsx(_$$v, {
      profile: void 0 !== isFollowing ? {
        ...profile,
        current_user_is_following: isFollowing
      } : profile,
      toggleFollowing,
      hideFollowButton: void 0 === isFollowing,
      trackingProperties,
      trackingEventName
    })
  });
}
export let $$T3 = memo(function (e) {
  return jsxs("div", {
    onClick: e.onClick,
    onContextMenu: e.onContextMenu,
    className: ii + (e.className ? ` ${e.className}` : ""),
    "data-testid": e.dataTestId ?? "community-card-layout",
    children: [jsx("div", {
      children: e.image
    }), e.subtitle && jsx("div", {
      className: $M,
      children: e.subtitle
    }), e.bottomRow && jsx("div", {
      className: e.bottomRowClassName || cO,
      children: e.bottomRow
    })]
  });
});
export function $$k2(e) {
  let t = {
    backgroundClip: Ay.safari ? "padding-box" : ""
  };
  e.backgroundColor && (t.backgroundColor = e.backgroundColor);
  let i = "";
  i = e.removeBorder ? Vl + ` ${ev}` + (e.className ? ` ${e.className}` : "") : Vl + (e.className ? ` ${e.className}` : "");
  return jsxs("div", {
    className: i,
    onClick: e => {
      e.preventDefault();
    },
    style: t,
    children: [jsx("div", {
      className: ll
    }), jsx("div", {
      className: nK,
      children: e.children
    })]
  });
}
function R(e) {
  return 1 === e.dropdown.publishers.length ? jsx(v, {
    className: wp,
    targetRect: e.dropdown.targetRect,
    profile: e.dropdown.publishers[0],
    isFollowing: e.dropdown.isFollowing,
    toggleFollowing: e.dropdown.toggleFollowing
  }) : jsx(Cf, {
    targetRect: e.dropdown.targetRect,
    className: yZ,
    disableDropdownScrollContainer: !0,
    maxWidth: 250,
    minWidth: 100,
    type: it.LIGHT,
    propagateCloseClick: !0,
    children: jsx("div", {
      onClick: e => {
        e.stopPropagation();
      },
      children: e.dropdown.publishers.map(e => jsx(U6, {
        profile: e,
        children: jsxs("div", {
          className: MP,
          children: [jsx(H8, {
            user: e,
            size: Pf.LARGE
          }), jsx("div", {
            className: Sp,
            children: e.name
          })]
        })
      }, e.id))
    })
  });
}
(e => {
  e.Center = function (e) {
    return jsx("div", {
      className: Bi,
      children: e.children
    });
  };
  e.Cover = function (e) {
    return jsx("div", {
      className: pB,
      children: e.children
    });
  };
  e.BottomRight = function (e) {
    return jsx("div", {
      className: J7,
      children: e.children
    });
  };
  e.BottomLeft = function (e) {
    return jsx("div", {
      className: kU,
      children: e.children
    });
  };
  e.TopLeft = function (e) {
    return jsx("div", {
      className: KR,
      children: e.children
    });
  };
})($$n1 || ($$n1 = {}));
(e => {
  function t(e) {
    let t = e.length - 1;
    return t > 0 ? _$$t("community.cards.pluralize_num_other_publishers", {
      numOtherPublishers: t
    }) : "";
  }
  function i(e) {
    return e.length && e[0] ? e[0].name : void 0;
  }
  e.MetadataContainer = function (e) {
    return jsx("div", {
      className: ai,
      children: jsx("div", {
        className: `${e.className} ${Fl}`,
        children: e.children
      })
    });
  };
  e.PublisherAvatar = function (e) {
    if (!e.publishers || !e.publishers.length) return null;
    let t = e.publishers[0];
    return jsx("div", {
      className: Fb,
      children: jsx(U6, {
        profile: t,
        children: jsx(H8, {
          user: t,
          size: Pf.LARGE
        })
      })
    });
  };
  e.PublisherAvatarWithDropdown = function (e) {
    let [t, i] = useState(!1);
    let n = useRef(null);
    let {
      isFollowing,
      toggleFollowing,
      fetchCreatorFollowStatus
    } = b();
    if (U3("scroll", () => i(!1)), !e.publishers || !e.publishers.length) return null;
    let d = e.publishers[0];
    return jsxs("div", {
      onMouseLeave: () => i(!1),
      children: [jsx("div", {
        className: Fb,
        onMouseEnter: () => {
          rr || (t || fetchCreatorFollowStatus(d.id), i(!0));
        },
        children: jsx(U6, {
          profile: d,
          children: jsx("span", {
            ref: n,
            children: jsx(H8, {
              user: d,
              size: Pf.LARGE
            })
          })
        })
      }), t && n.current && jsxs(Fragment, {
        children: [jsx("div", {
          className: xm
        }), jsx(v, {
          className: wp,
          targetRect: n.current.getBoundingClientRect(),
          profile: d,
          isFollowing,
          toggleFollowing
        })]
      })]
    });
  };
  e.AvatarAndIconContainer = function (e) {
    return jsx("div", {
      className: Fb,
      children: e.children
    });
  };
  e.TextMetadataLayout = function (e) {
    return jsx(_$$E, {
      onClick: e.onClick,
      className: QH,
      children: jsxs("div", {
        className: xc,
        children: [jsx("div", {
          className: cu,
          children: e.primaryText
        }), e.secondaryText && jsxs("div", {
          className: Kb,
          children: [e.planIconEntity && jsx(H, {
            entityId: e.planIconEntity.id,
            entityName: e.planIconEntity.name,
            imgUrl: e.planIconEntity.img_url
          }), e.secondaryText]
        })]
      })
    });
  };
  e.TextWithHover = function (e) {
    return jsxs(Fragment, {
      children: [jsx("div", {
        className: RR,
        children: e.text
      }), jsx("div", {
        className: iz,
        children: e.hoverText
      })]
    });
  };
  e.MetadataAuthorWithHover = function (e) {
    let n = e.publishers || [];
    let r = t(n);
    let s = i(n);
    return s ? jsxs(Fragment, {
      children: [n.length > 0 && jsx("div", {
        className: RR,
        children: tx("community.publisher_with_suffix", {
          publisherName: s,
          publishersSuffix: r
        })
      }), jsx("div", {
        className: n.length > 0 ? iz : Tz,
        children: e.hoverText
      })]
    }) : null;
  };
  e.MetadataAuthorWithDropdown = function (e) {
    let n = e.publishers || [];
    let r = t(n);
    let o = i(n);
    let l = useRef(null);
    let [d, u] = useState(!1);
    let {
      isFollowing,
      toggleFollowing,
      fetchCreatorFollowStatus
    } = b();
    U3("scroll", () => u(!1));
    return o ? jsx("div", {
      onMouseLeave: () => {
        u(!1);
      },
      children: jsxs("div", {
        ref: l,
        className: vG,
        onMouseEnter: () => {
          rr || (1 !== n.length || d || fetchCreatorFollowStatus(n[0].id), u(!0));
        },
        children: [jsx(U6, {
          profile: n[0],
          children: tx("community.publisher_with_suffix", {
            publisherName: o,
            publishersSuffix: r
          })
        }), d && jsxs(Fragment, {
          children: [jsx("div", {
            className: Nv
          }), jsx(R, {
            dropdown: {
              targetRect: l.current?.getBoundingClientRect(),
              publishers: n,
              isFollowing,
              toggleFollowing
            }
          })]
        })]
      })
    }) : null;
  };
  e.MetadataAuthor = function (e) {
    let n = e.publishers || [];
    let r = t(n);
    let s = i(n);
    return s ? jsx("div", {
      children: tx("community.publisher_with_suffix", {
        publisherName: s,
        publishersSuffix: r
      })
    }) : null;
  };
  e.FigjamMetadataAuthorWithDetails = function (e) {
    let n = e.publishers || [];
    let r = t(n);
    let s = i(n);
    return s ? jsx("div", {
      className: wH,
      children: jsx("div", {
        className: h1,
        children: tx("community.by_publisher_with_suffix", {
          publisherName: s,
          publishersSuffix: r
        })
      })
    }) : null;
  };
  e.FigJamMetadata = function (t) {
    let i = d()(gf, {
      [hI]: t.showPaymentError
    });
    return jsx("div", {
      className: _$$g,
      children: jsxs(e.MetadataContainer, {
        className: d()(JQ, !t.onClick && Q3),
        children: [jsxs("div", {
          className: _$$s.flex.justifyBetween.wFull.minW0.$,
          children: [jsx(e.TextMetadataLayout, {
            onClick: t.onClick,
            primaryText: jsx(Fragment, {
              children: jsxs("div", {
                className: i,
                children: [jsx("div", {
                  className: gW,
                  children: t.name
                }), t.showLockIcon && jsx(B, {
                  svg: _$$A2,
                  className: xB
                }), t.onClick && jsx(B, {
                  svg: _$$A,
                  className: i2
                }), t.showPaymentError && jsx("div", {
                  className: cf,
                  children: jsx(xY, {})
                })]
              })
            }),
            secondaryText: jsx(e.FigjamMetadataAuthorWithDetails, {
              publishers: t.publishers
            })
          }), t.rightAlignedElement && t.rightAlignedElement]
        }), t.showUserAvatar && t.publishers?.[0] && jsx(H8, {
          user: t.publishers[0]
        })]
      })
    });
  };
  e.ResourceActionContainer = function (e) {
    return jsx("div", {
      className: `${e.className} ${o6}`,
      children: e.children
    });
  };
  e.ButtonWrapper = function (e) {
    return jsx("div", {
      className: dL,
      children: e.children
    });
  };
})($$r0 || ($$r0 = {}));
export const dY = $$r0;
export const Wh = $$n1;
export const WM = $$k2;
export const sU = $$T3;