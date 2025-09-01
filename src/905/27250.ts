import { jsxs, jsx } from "react/jsx-runtime";
import { PureComponent, createRef } from "react";
import { sortByPropertyWithOptions, sortBy, sortByProperty } from "../figma_app/656233";
import { e as _$$e } from "../905/916195";
import { DN } from "../905/657224";
import l from "classnames";
import { w } from "../905/835474";
import { o as _$$o } from "../905/605383";
import { t as _$$t } from "../905/303541";
import { LT } from "../figma_app/646357";
import { PW } from "../figma_app/633080";
import { Hj, tD } from "../905/682977";
var d = l;
let f = "library_item_stats--avatarColumn--do7-S text--fontPos11--2LvXf text--_fontBase--QdLsd";
let _ = "library_item_stats--caretColumn--rxdCY";
let $$A = "library_item_stats--statsColumn--w1WRv text--fontPos11--2LvXf text--_fontBase--QdLsd";
let y = "library_item_stats--statsColVal--iaJsV library_item_stats--statsColumn--w1WRv text--fontPos11--2LvXf text--_fontBase--QdLsd";
export class $$b0 extends PureComponent {
  constructor(e) {
    super(e);
    this.storageKey = "subscriptionFileViewComponentStats:state";
    this.storage = DN();
    this.onSortScrollTargetRef = createRef();
    this.setSortByAndOrder = e => {
      let t = this.state.sortBy;
      let i = t !== e || !this.state.isDescending;
      let n = {
        sortBy: e,
        prevCol: t,
        isDescending: i
      };
      this.setState(n);
      this.storage.set(this.storageKey, n);
      this.onSortScrollTargetRef.current?.offsetTop && this.props.scrollTo(this.onSortScrollTargetRef.current.offsetTop);
    };
    this.CHUNK_SIZE = 50;
    let t = this.storage.get(this.storageKey);
    this.state = t || {
      sortBy: "alpha",
      prevCol: null,
      isDescending: !0
    };
  }
  render() {
    let e = [{
      header: this.props.showingStateStats ? _$$t("design_systems.libraries_modal.variant_name") : _$$t("design_systems.libraries_modal.component_name"),
      sortBy: "alpha",
      className: f
    }];
    this.props.showingStateStats || e.push({
      header: _$$t("design_systems.libraries_modal.total_variants"),
      sortBy: "num_states",
      className: $$A
    });
    e.push({
      header: _$$t("design_systems.libraries_modal.total_instances"),
      sortBy: "num_existing_instances",
      className: $$A
    });
    e.push({
      header: _$$t("design_systems.libraries_modal.inserts_last_duration", {
        duration: LT(this.props.duration)
      }),
      sortBy: "num_insertions",
      className: $$A
    });
    e.push({
      header: _$$t("design_systems.libraries_modal.detaches_last_duration", {
        duration: LT(this.props.duration)
      }),
      sortBy: "num_detachments",
      className: $$A
    });
    let t = this.props.itemStats;
    switch (this.state.sortBy) {
      case "alpha":
        sortByPropertyWithOptions(t, "name", {
          isDescending: !this.state.isDescending
        });
        break;
      case "num_states":
        sortBy(t, e => e.type === PW.STATE_GROUP ? e.num_states : 0, this.state.isDescending);
        break;
      case "num_existing_instances":
        sortByProperty(t, "num_existing_instances", this.state.isDescending);
        break;
      case "num_insertions":
        sortByProperty(t, "num_insertions", this.state.isDescending);
        break;
      case "num_detachments":
        sortByProperty(t, "num_detachments", this.state.isDescending);
    }
    let i = this.props.itemStats.map(e => e.type === PW.COMPONENT ? e.component_key : e.key).join(",");
    return jsxs("div", {
      className: "library_item_stats--statsTable--ThkjJ",
      children: [jsx("div", {
        className: "library_item_stats--libraryAnalyticsHeader--eLsyV library_modal_stats--libraryAnalyticsHeader--9giDS text--fontPos14--OL9Hp text--_fontBase--QdLsd",
        children: this.props.showingStateStats ? _$$t("design_systems.libraries_modal.all_variants") : _$$t("design_systems.libraries_modal.component_statistics")
      }), jsx("div", {
        ref: this.onSortScrollTargetRef
      }), jsxs(Hj, {
        className: "library_item_stats--statsTableHeaderRow--rCg6s library_modal_stats--headerRow--MTZxi text--fontPos11--2LvXf text--_fontBase--QdLsd",
        children: [e.map(e => jsx(tD, {
          className: d()(e.className, {
            "library_item_stats--selectedCol--ZqfRg library_modal_stats--selectedCol--pwGl4": this.state.sortBy === e.sortBy
          }),
          isDescending: this.state.isDescending,
          hasArrow: this.state.sortBy === e.sortBy,
          field: e.sortBy,
          sortBy: this.setSortByAndOrder,
          children: e.header
        }, e.sortBy)), jsx("div", {
          className: _
        })]
      }), jsx("div", {
        children: jsx(_$$o, {
          chunkSize: this.CHUNK_SIZE,
          listKey: i,
          children: t.map(e => jsx(v, {
            stat: e,
            viewItem: this.props.viewItem,
            showingStateStats: this.props.showingStateStats
          }, e.type === PW.COMPONENT ? e.component_key : e.key))
        })
      })]
    });
  }
}
class v extends PureComponent {
  constructor() {
    super(...arguments);
    this.viewComponent = e => {
      e.stopPropagation();
      e.preventDefault();
      this.props.viewItem(e, this.props.stat);
    };
  }
  renderSplitName(e) {
    let t = [];
    return (t = this.props.showingStateStats ? [w(e)] : e.split("/")).length <= 1 ? jsx("span", {
      children: t[t.length - 1]
    }) : jsxs("span", {
      children: [jsxs("span", {
        className: "library_item_stats--prefixText---b4V4",
        children: [t.slice(0, t.length - 1).join("/"), "/"]
      }), jsx("span", {
        children: t[t.length - 1]
      })]
    });
  }
  render() {
    let e = this.props.stat;
    return jsxs(Hj, {
      className: "library_item_stats--row--CVlCa text--fontPos11--2LvXf text--_fontBase--QdLsd",
      onMouseDown: this.viewComponent,
      children: [jsxs("div", {
        className: f,
        children: [jsx("img", {
          src: e.thumbnail_url,
          className: "library_item_stats--componentAvatar--i5fhp",
          alt: ""
        }), jsx("div", {
          className: "library_item_stats--avatarColumnComponentName--UJJYP ellipsis--ellipsis--Tjyfa",
          children: this.renderSplitName(e.name)
        })]
      }), !this.props.showingStateStats && jsx("div", {
        className: y,
        children: e.type === PW.STATE_GROUP ? e.num_states : _$$t("design_systems.libraries_modal.n_a")
      }), jsx("div", {
        className: y,
        children: e.num_existing_instances.toLocaleString()
      }), jsx("div", {
        className: y,
        children: e.num_insertions.toLocaleString()
      }), jsx("div", {
        className: y,
        children: e.num_detachments.toLocaleString()
      }), jsx("div", {
        className: _,
        children: jsx("div", {
          className: "library_item_stats--componentRowCaretRightWrapper--7-iSn",
          children: jsx(_$$e, {})
        })
      })]
    });
  }
}
v.displayName = "ComponentRow";
export const A = $$b0;