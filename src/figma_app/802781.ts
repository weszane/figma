import { jsx, jsxs } from "react/jsx-runtime";
import { useMemo, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { throwTypeError } from "../figma_app/465776";
import { bL, mc as _$$mc, c$ } from "../905/493196";
import { v as _$$v } from "../905/213481";
import { b as _$$b, bL as _$$bL, mc as _$$mc2, YJ, hE } from "../figma_app/860955";
import { H_ } from "../905/963340";
import { O } from "../905/969533";
import { trackEventAnalytics } from "../905/449184";
import { s as _$$s } from "../cssbuilder/589278";
import { getI18nString, renderI18nText } from "../905/303541";
import { H8 } from "../905/590952";
import { JF } from "../905/34809";
import { HH } from "../figma_app/828186";
import { nX, FE } from "../figma_app/314264";
import { wW } from "../figma_app/656450";
import { G } from "../figma_app/471068";
import { ue, rR, rJ, Jh, t2, C0 } from "../figma_app/756995";
import { H } from "../905/209153";
import { aI } from "../figma_app/552876";
import { oz } from "../905/561485";
import { E as _$$E } from "../905/409917";
export function $$x7(e) {
  let t = wW(e.userId).user;
  return jsx("div", {
    className: _$$s.mr4.flex.itemsCenter.$,
    children: t && jsx(H8, {
      user: t,
      size: 14
    })
  });
}
export function $$N5(e) {
  let t = useSelector(e => e.teams);
  let r = useSelector(e => e.orgById);
  if (!e.planOption?.plan_id) return null;
  let i = "org" === e.planOption.plan_type && e.planOption.plan_id ? r[e.planOption.plan_id]?.img_url : t[e.planOption.plan_id]?.img_url;
  return jsx("div", {
    className: _$$s.flex.itemsCenter.$,
    children: jsx(H, {
      entityId: e.planOption.plan_id,
      entityName: e.planOption.label,
      imgUrl: i
    })
  });
}
export let $$C2 = {
  sortOptions: [ue.ASC, ue.DESC],
  sortOptionsDisplayText: (e, t) => {
    switch (e) {
      case ue.ASC:
        switch (t) {
          case rR.TIME:
            return getI18nString("tile.sort_filter.sort_direction_oldest_first");
          case rR.ALPHABETICAL:
            return getI18nString("tile.sort_filter.sort_direction_a_to_z");
          default:
            return getI18nString("tile.sort_filter.sort_direction_ascending");
        }
      case ue.DESC:
        switch (t) {
          case rR.TIME:
            return getI18nString("tile.sort_filter.sort_direction_newest_first");
          case rR.ALPHABETICAL:
            return getI18nString("tile.sort_filter.sort_direction_z_to_a");
          default:
            return getI18nString("tile.sort_filter.sort_direction_descending");
        }
      default:
        throwTypeError(e);
    }
  }
};
function w(e) {
  let t = e.checkedValue.toString();
  let r = (t, r) => {
    let n = e.filterOptions.find(e => e.toString() === t);
    void 0 !== n && (e.onChange(n, r), trackEventAnalytics("Sort Changed - Dropdown", {
      oldValueString: `${e.checkedValue}`,
      newValueString: `${n}`,
      dir: r === ue.ASC ? "asc" : r === ue.DESC ? "desc" : void 0
    }));
  };
  return jsxs(bL, {
    value: t,
    onChange: e => r(e ?? ""),
    children: [jsx(_$$v.SelectTrigger, {
      selected: "0" !== t && "" !== t,
      children: jsx("span", {
        children: e.filterDisplayText[e.checkedValue]
      })
    }), jsx(_$$mc, {
      children: e.filterOptions.map(t => jsx(c$, {
        value: t.toString(),
        children: e.filterDisplayText[t]
      }, t))
    })]
  });
}
export function $$O3(e) {
  return jsx(w, {
    filterOptions: [rJ.ANY, rJ.SELF, rJ.OTHER],
    filterDisplayText: {
      [rJ.ANY]: renderI18nText("tile.sort_filter.created_by_anyone"),
      [rJ.SELF]: renderI18nText("tile.sort_filter.created_by_you"),
      [rJ.OTHER]: renderI18nText("tile.sort_filter.created_by_others")
    },
    checkedValue: e.options.tileSortFilterConfig.filters.creator,
    onChange: t => {
      let r = e.options.tileSortFilterConfig;
      let n = {
        ...r,
        filters: {
          ...r.filters,
          creator: t
        }
      };
      e.dispatch(JF({
        selectedView: e.selectedView,
        config: n
      }));
    }
  });
}
export function $$R1(e) {
  return jsx(w, {
    filterOptions: [Jh.CAN_BE_RESTORED_DELETED, Jh.CAN_BE_VIEWED],
    filterDisplayText: {
      [Jh.CAN_BE_RESTORED_DELETED]: renderI18nText("tile.sort_filter.can_be_restored_permanently_deleted"),
      [Jh.CAN_BE_VIEWED]: renderI18nText("tile.sort_filter.can_be_viewed")
    },
    checkedValue: e.options.tileSortFilterConfig.filters.role ?? Jh.CAN_BE_RESTORED_DELETED,
    onChange: t => {
      let r = e.options.tileSortFilterConfig;
      let n = {
        ...r,
        filters: {
          ...r.filters,
          role: t
        }
      };
      e.dispatch(JF({
        selectedView: e.selectedView,
        config: n
      }));
    }
  });
}
export function $$L8(e) {
  let t = useDispatch();
  let r = useSelector(e => e.selectedView);
  let i = oz();
  let s = HH();
  let o = aI();
  let l = "recentsAndSharing" === r.view;
  let d = [t2.ANY, t2.DESIGN, t2.FIGJAM, t2.SLIDES];
  d = s ? d.concat([t2.COOPER]) : d;
  d = i ? d.concat([t2.SITES]) : d;
  d = o ? d.concat([t2.MAKE]) : d;
  d = l ? d.concat([t2.PROTOTYPE]) : d;
  let c = {
    [t2.ANY]: renderI18nText("tile.sort_filter.filter_by_all_files"),
    [t2.DESIGN]: renderI18nText("tile.sort_filter.filter_by_design_files"),
    [t2.FIGJAM]: renderI18nText("tile.sort_filter.filter_by_figjam_files"),
    [t2.PROTOTYPE]: renderI18nText("tile.sort_filter.filter_by_prototype_files"),
    [t2.SITES]: renderI18nText("tile.sort_filter.filter_by_sites_files"),
    [t2.SLIDES]: renderI18nText("tile.sort_filter.filter_by_slides_files"),
    [t2.COOPER]: renderI18nText("tile.sort_filter.filter_by_buzz_files"),
    [t2.MAKE]: renderI18nText("tile.sort_filter.filter_by_make_files")
  };
  return jsx(w, {
    filterOptions: d,
    filterDisplayText: c,
    checkedValue: e.config.filters.fileType,
    onChange: n => {
      let i = {
        ...e.config,
        filters: {
          ...e.config.filters,
          fileType: n
        }
      };
      t(JF({
        selectedView: r,
        config: i,
        tab: e.tab
      }));
    }
  });
}
export function $$P4(e) {
  let t = useDispatch();
  let r = useSelector(e => e.selectedView);
  return jsx(w, {
    checkedValue: e.config.filters.sharedBy ?? "",
    onChange: n => {
      let i = {
        ...e.config,
        filters: {
          ...e.config.filters,
          sharedBy: n
        }
      };
      let a = "recentsAndSharing" === r.view ? r.tab || G.RECENTLY_VIEWED : r.view;
      nX(n, a);
      t(JF({
        selectedView: r,
        config: i,
        tab: e.tab
      }));
    },
    filterOptions: Object.keys(e.filterOptions),
    filterDisplayText: e.filterOptions
  });
}
export function $$D0(e) {
  let t = useDispatch();
  let r = useSelector(e => e.selectedView);
  let s = useMemo(() => {
    let t = {};
    Object.entries(e.filterOptions).forEach(([e, r]) => {
      t[e] = r.label;
    });
    return t;
  }, [e.filterOptions]);
  let o = e.config.filters.plan?.planId ?? "";
  useEffect(() => {
    let n = e.config.filters.plan?.planId;
    if (n && !s[n]) {
      let n = {
        ...e.config,
        filters: {
          ...e.config.filters,
          plan: {
            planId: void 0,
            planType: void 0
          }
        }
      };
      t(JF({
        selectedView: r,
        config: n,
        tab: e.tab
      }));
    }
  }, [e.config, e.tab, t, r, s]);
  return jsx(w, {
    checkedValue: o,
    onChange: n => {
      let i = e.filterOptions[n];
      if (!i) return;
      let {
        plan_id,
        plan_type
      } = i;
      let o = {
        ...e.config,
        filters: {
          ...e.config.filters,
          plan: {
            planId: plan_id,
            planType: plan_type
          }
        }
      };
      let l = "recentsAndSharing" === r.view ? r.tab || G.RECENTLY_VIEWED : r.view;
      FE(plan_id, l, plan_type);
      t(JF({
        selectedView: r,
        config: o,
        tab: e.tab
      }));
    },
    filterOptions: Object.keys(e.filterOptions),
    filterDisplayText: s
  });
}
let k = {
  [C0.NAME]: ue.ASC,
  [C0.CREATED_AT]: ue.DESC,
  [C0.TOUCHED_AT]: ue.DESC,
  [C0.TRASHED_AT]: ue.DESC,
  [C0.PROJECT_NAME]: ue.ASC,
  [C0.ACCESSED_AT]: ue.DESC,
  [C0.SHARED_AT]: ue.DESC,
  [C0.OWNER]: ue.DESC,
  [C0.SEARCH_RELEVANCE]: ue.DESC
};
export function $$M6(e) {
  let {
    options,
    selectedView,
    tab,
    dispatch
  } = e;
  let o = e => k[e] ?? ue.ASC;
  let _ = useCallback((e, n) => {
    let i = options.tileSortFilterConfig;
    let l = void 0 === n ? o(e) : n;
    let d = {
      ...i,
      sort: {
        key: e,
        dir: l
      }
    };
    dispatch(JF({
      selectedView,
      config: d,
      tab
    }));
  }, [options.tileSortFilterConfig, selectedView, tab, dispatch]);
  useEffect(() => {
    options.sortKeys.some(e => e === options.tileSortFilterConfig.sort.key) || _(options.sortKeys[options.sortKeys.length - 1], options.tileSortFilterConfig.sort.dir);
  }, [options.sortKeys, options.tileSortFilterConfig.sort.key, options.tileSortFilterConfig.sort.dir, _]);
  let m = {
    [C0.CREATED_AT]: renderI18nText("tile.sort_filter.sort_date_created"),
    [C0.TOUCHED_AT]: renderI18nText("tile.sort_filter.sort_last_modified"),
    [C0.ACCESSED_AT]: renderI18nText("tile.sort_filter.sort_last_viewed"),
    [C0.NAME]: renderI18nText("tile.sort_filter.sort_alphabetical"),
    [C0.TRASHED_AT]: renderI18nText("tile.sort_filter.sort_date_trashed"),
    [C0.SHARED_AT]: renderI18nText("tile.sort_filter.date_shared"),
    [C0.OWNER]: renderI18nText("tile.sort_filter.owner"),
    [C0.SEARCH_RELEVANCE]: renderI18nText("tile.sort_filter.trending"),
    [C0.PROJECT_NAME]: renderI18nText("tile.sort_filter.team")
  };
  let {
    getTriggerProps,
    manager
  } = _$$b();
  let y = (e, r) => {
    trackEventAnalytics("Sort Changed - Dropdown", {
      oldValueString: `${options.tileSortFilterConfig.sort.key}`,
      newValueString: `${e}`,
      dir: r === ue.ASC ? "asc" : r === ue.DESC ? "desc" : void 0
    });
    _(e, r);
  };
  return jsxs(_$$bL, {
    manager,
    children: [jsx(_$$v, {
      trailing: jsx(O, {}),
      ...getTriggerProps(),
      children: jsx("span", {
        children: m[options.tileSortFilterConfig.sort.key]
      })
    }), jsxs(_$$mc2, {
      children: [options.sortKeys.length > 1 && jsx(YJ, {
        title: jsx(hE, {
          children: getI18nString("tile.sort_filter.sort_by_label")
        }),
        children: options.sortKeys.map(e => jsx(H_, {
          onChange: () => y(e),
          checked: e === options.tileSortFilterConfig.sort.key,
          children: m[e]
        }, `sort-filter-label-${e}`))
      }, "sort-filter-label"), jsx(YJ, {
        title: jsx(hE, {
          children: getI18nString("tile.sort_filter.order_label")
        }),
        children: $$C2.sortOptions.map((e, r) => jsx(H_, {
          onChange: () => y(options.tileSortFilterConfig.sort.key, e),
          checked: e === options.tileSortFilterConfig.sort.dir,
          children: $$C2.sortOptionsDisplayText(e, _$$E(options.tileSortFilterConfig.sort.key))
        }, `sort-option-label-${r}`))
      }, "sort-option-label")]
    })]
  });
}
export const FU = $$D0;
export const KH = $$R1;
export const R1 = $$C2;
export const gr = $$O3;
export const lI = $$P4;
export const lV = $$N5;
export const mc = $$M6;
export const qD = $$x7;
export const ye = $$L8;
