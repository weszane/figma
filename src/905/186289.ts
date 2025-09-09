import { jsx } from "react/jsx-runtime";
import { Component } from "react";
import { connect } from "react-redux";
import { S } from "../905/539306";
import { jr, vj } from "../905/574958";
let $$l1 = "search_file_browser_full_results";
let d = e => "href" in e ? e.href : null;
class c extends Component {
  constructor() {
    super(...arguments);
    this.onClick = e => {
      let t = e.target;
      let i = t.closest("[data-search-click-action]")?.getAttribute("data-search-click-action");
      i !== jr && this.props.analytics?.click(this.props.category, this.props.selectedView, {
        action: i || "click",
        target: d(t)
      }, this.props.planFilter);
    };
    this.onContextMenu = e => {
      let t = e.target;
      let i = t.closest("[data-search-context-menu-action]")?.getAttribute("data-search-context-menu-action");
      i !== jr && this.props.analytics?.click(this.props.category, this.props.selectedView, {
        action: i || "context-click",
        target: d(t)
      });
    };
  }
  render() {
    return jsx("div", {
      "data-search-context-menu-action": "context-click",
      "data-search-click-action": "click",
      onClickCapture: this.onClick,
      onContextMenuCapture: this.onContextMenu,
      children: this.props.children
    });
  }
}
let u = e => {
  let {
    model
  } = e.searchResult;
  let i = "id" in model ? model.id : model.key;
  return {
    position: e.index,
    resource_id: i,
    resource_type: e.searchResult.search_model_type,
    matched_queries: e.searchResult.matched_queries,
    result: e.searchResult
  };
};
let $$p0 = connect((e, t) => {
  let i = new vj.Analytics(e.search, u(t), {
    plan: S(e)
  });
  return (t, n) => (i.update(t.search, u(n), {
    plan: S(t)
  }), {
    analytics: i,
    selectedView: e.selectedView
  });
})(c);
export const G = $$p0;
export const R = $$l1;
