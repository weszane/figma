import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { g as _$$g } from "../905/687265";
import { Ay } from "@stylexjs/stylex";
import { s as _$$s } from "../cssbuilder/589278";
import { getI18nString, renderI18nText } from "../905/303541";
import { E as _$$E } from "../905/984674";
import { V as _$$V } from "../905/453937";
import { e as _$$e } from "../905/311297";
import { M as _$$M } from "../905/269719";
import { useDispatch } from "react-redux";
import { sf } from "../905/929976";
import { Tf } from "../figma_app/543100";
import { o as _$$o } from "../905/895626";
import { az } from "../figma_app/805373";
import { E as _$$E2 } from "../905/391888";
import { p as _$$p } from "../905/767868";
import { H8, Pf } from "../905/590952";
import { wW } from "../figma_app/656450";
import { Xg } from "../905/375175";
import { C0 } from "../figma_app/756995";
import { w4 } from "../905/445814";
import { e as _$$e2 } from "../905/457828";
import { y as _$$y } from "../905/171275";
import { C as _$$C } from "../905/226458";
import { A as _$$A } from "../905/100919";
function _(e) {
  let t = useDispatch();
  let i = Tf.getOwner(e.tile);
  if (!i) return jsx(_$$E, {
    fontSize: 13,
    truncate: !0,
    children: "--"
  });
  let r = Tf.getOrgId(e.tile);
  return jsx("div", {
    className: "generic_tile_owner--hugContents--77Wld",
    children: jsx(az, {
      entity: i,
      size: 24,
      showIsMe: !1,
      onClick: () => {
        t(sf({
          view: "user",
          userId: i.id,
          userViewTab: _$$o.INTERNAL_PROFILE,
          orgId: r
        }));
      }
    }, i.id)
  });
}
function b(e) {
  let t = e.getFolderIdFromGenericTile(e.tile);
  let i = _$$p(t);
  let r = i.data?.folderName || null;
  let a = i.data?.isTrashed || !1;
  let s = _$$E2();
  let d = !a;
  return "loaded" === i.status && r && t ? d ? jsx("span", {
    children: jsx("span", {
      role: "link",
      tabIndex: -1,
      onClick: e => {
        d && (e.stopPropagation(), s(t, e));
      },
      className: "generic_tile_previous_location--folder_name_clickable--yQN6N",
      children: jsx(_$$E, {
        fontSize: e.fontSize,
        truncate: !0,
        children: r
      })
    })
  }) : jsxs(_$$E, {
    fontSize: e.fontSize,
    truncate: !0,
    children: [r, "\xa0", a && getI18nString("file_browser.folder.trashed_folder")]
  }) : jsx(_$$E, {
    fontSize: e.fontSize,
    truncate: !0,
    children: "--"
  });
}
function E(e) {
  let t = Tf.getSharedByName(e.tile);
  let i = Tf.getSharedBy(e.tile) ?? null;
  let o = wW(i).user;
  return i ? jsxs("div", {
    className: _$$s.flex.itemsCenter.gap8.$,
    children: [o && jsx(H8, {
      user: o,
      size: Pf.MEDIUM
    }), jsx(_$$E, {
      truncate: !0,
      children: jsx("span", {
        ...Ay.props(_$$g.textBodyMedium),
        children: t
      })
    })]
  }) : jsx(_$$E, {
    truncate: !0,
    children: jsx("span", {
      ...Ay.props(_$$g.textBodyMedium),
      children: "--"
    })
  });
}
function N(e) {
  let t = _$$C(e.tile);
  return jsxs("div", {
    className: _$$s.flex.itemsCenter.gap12.overflowHidden.h48.wFull.$,
    children: [jsxs("div", {
      className: _$$s.relative.flexShrink0.hFull.$,
      children: [jsx("div", {
        className: "tile_name_and_preview--iconContainer--sybhv",
        children: jsx(w4, {
          size: 16,
          type: t
        })
      }), jsx(_$$e2, {
        tile: e.tile,
        size: _$$y.SMALL,
        borderRadius: 4
      })]
    }), jsx("div", {
      className: _$$s.wFull.$,
      children: jsx(_$$E, {
        fontWeight: "medium",
        fontSize: 13,
        truncate: !0,
        children: jsx(_$$A, {
          tile: e.tile,
          isListView: !0,
          checksForViewOnlyLabels: e.checksForViewOnlyLabels
        })
      })
    })]
  });
}
let P = {
  renderRowCell: (e, {
    isSelected: t,
    isHovered: i
  }) => jsx(O, {
    tile: e,
    isSelected: t,
    isHovered: i
  })
};
function O({
  tile: e,
  isSelected: t,
  isHovered: i
}) {
  let r = Xg(e);
  let a = Tf.getIsFavorited(e);
  return r && (a || t || i) ? jsx(_$$e, {
    tile: e,
    entrypoint: "file_list_row",
    containerClassName: _$$s.pl8.wFull.$
  }) : jsx(Fragment, {});
}
export function $$D1({
  truncate: e = !1,
  children: t
}) {
  return jsx(_$$E, {
    truncate: e,
    children: jsx("span", {
      ...Ay.props(_$$g.textBodyMedium),
      children: t
    })
  });
}
let L = e => ({
  field: C0.NAME,
  headerCellClassName: _$$s.wHalf.$,
  renderHeaderCell: () => jsx(_$$E, {
    truncate: !0,
    children: renderI18nText("file_browser.file_list_view.header_name_column")
  }),
  renderRowCell: t => jsx(N, {
    tile: t,
    checksForViewOnlyLabels: e
  })
});
let F = {
  field: C0.TOUCHED_AT,
  renderHeaderCell: () => jsx(_$$E, {
    truncate: !0,
    children: renderI18nText("file_browser.file_list_view.header_last_modified_column")
  }),
  renderRowCell: e => jsx($$D1, {
    truncate: !0,
    children: jsx(_$$M, {
      tile: e,
      getDateFromGenericTile: Tf.getTouchedAt
    })
  })
};
let M = {
  field: C0.TRASHED_AT,
  renderHeaderCell: () => jsx(_$$E, {
    truncate: !0,
    children: renderI18nText("file_browser.file_list_view.header_trashed_at_column")
  }),
  renderRowCell: e => jsx($$D1, {
    truncate: !0,
    children: jsx(_$$M, {
      tile: e,
      getDateFromGenericTile: Tf.getTrashedAt
    })
  })
};
let j = {
  renderHeaderCell: () => jsx(_$$E, {
    truncate: !0,
    children: renderI18nText("file_browser.file_list_view.header_previous_location_column")
  }),
  renderRowCell: e => jsx($$D1, {
    children: jsx(b, {
      tile: e,
      getFolderIdFromGenericTile: Tf.getFolderId
    })
  })
};
let U = {
  field: C0.CREATED_AT,
  renderHeaderCell: () => jsx(_$$E, {
    truncate: !0,
    children: renderI18nText("file_browser.file_list_view.header_created_column")
  }),
  renderRowCell: e => jsx($$D1, {
    truncate: !0,
    children: jsx(_$$M, {
      tile: e,
      getDateFromGenericTile: Tf.getCreatedAt
    })
  })
};
let B = {
  field: C0.SHARED_AT,
  renderHeaderCell: () => jsx(_$$E, {
    truncate: !0,
    children: renderI18nText("file_browser.file_list_view.header_shared_at_column")
  }),
  renderRowCell: e => jsx($$D1, {
    truncate: !0,
    children: jsx(_$$M, {
      tile: e,
      getDateFromGenericTile: Tf.getSharedAt
    })
  })
};
let V = {
  renderHeaderCell: () => jsx(Fragment, {}),
  headerCellClassName: "tile_list_view_columns--facePileColumn--p9Lvs",
  renderRowCell: e => jsx(_$$V, {
    tile: e
  })
};
let G = {
  renderHeaderCell: () => jsx(_$$E, {
    truncate: !0,
    children: renderI18nText("file_browser.file_list_view.header_owner_column")
  }),
  renderRowCell: e => jsx(_, {
    tile: e
  })
};
export function $$z4(e) {
  return {
    gutterColumn: P,
    columns: [L(e), F, U, V]
  };
}
export function $$H0(e) {
  return {
    gutterColumn: P,
    columns: [L(e), M, j]
  };
}
export let $$W3 = {
  gutterColumn: P,
  columns: [L(), {
    renderHeaderCell: () => jsx(_$$E, {
      truncate: !0,
      children: renderI18nText("file_browser.file_list_view.header_shared_by_column")
    }),
    renderRowCell: e => jsx(E, {
      tile: e
    })
  }, B, V]
};
export function $$K2(e) {
  return {
    gutterColumn: P,
    columns: [L(e), F, U, G]
  };
}
export const TM = $$H0;
export const BV = $$D1;
export const X_ = $$K2;
export const TF = $$W3;
export const l1 = $$z4;
