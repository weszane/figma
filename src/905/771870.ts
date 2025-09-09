import { jsx } from "react/jsx-runtime";
import { PureComponent } from "react";
import { connect } from "react-redux";
import { ResponsiveSetIdHandler, CodeComponentIdHandler } from "../figma_app/243058";
import { Fullscreen, StylesBindings } from "../figma_app/763686";
import { NQ } from "../905/508367";
import { T1 } from "../905/711212";
import { aV, r2, OM } from "../figma_app/80990";
import { Do, PW, AT } from "../figma_app/633080";
import { J } from "../905/273120";
var n;
(e => {
  class t extends PureComponent {
    constructor(e) {
      super(e);
      this.localThumbnail = () => {
        let {
          item
        } = this.props;
        let t = this.state.fallbackLocalThumbnailGuid;
        Do(item) ? t = item.type === PW.RESPONSIVE_SET ? ResponsiveSetIdHandler.toGuidStrIfLocal(item.assetId) : item.type === PW.CODE_COMPONENT ? CodeComponentIdHandler.toGuidStrIfLocal(item.assetId) : this.state.fallbackLocalThumbnailGuid : item.isLocal && (t = item.node_id);
        return t && this.props.thumbnails[t] || null;
      };
      this.onError = () => {
        let e = null;
        switch (this.props.item.type) {
          case PW.COMPONENT:
            this.props.item.component_key && this.props.item.content_hash && (e = Fullscreen?.getSymbolNodeId(this.props.item.component_key, this.props.item.content_hash) ?? null);
            break;
          case PW.STATE_GROUP:
            this.props.item.key && (e = Fullscreen?.getStateGroupNodeId(this.props.item.key, this.props.item.version) ?? null);
            break;
          case PW.STYLE:
            this.props.item.content_hash && (e = StylesBindings?.getStyleNodeId(this.props.item.key, this.props.item.content_hash) ?? null);
        }
        e && (this.setState({
          fallbackLocalThumbnailGuid: e
        }), this.generateLocalThumbnailUrl(e, AT.SUBSCRIBED_WITH_LIBRARY));
      };
      this.state = {
        fallbackLocalThumbnailGuid: null
      };
      this.shouldGenerateLocalThumbnailUrl() && !Do(this.props.item) && this.generateLocalThumbnailUrl(this.props.item.node_id, AT.LOCAL);
    }
    isLocalItem() {
      return !Do(this.props.item) && this.props.item.isLocal;
    }
    thumbnailUrl() {
      let {
        item
      } = this.props;
      return Do(item) ? "LIBRARY" === item.subscriptionStatus ? item.mainThumbnailInfo.thumbnailUrl : null : this.getOpenFilePublishedThumbnailUrl() || item.thumbnail_url;
    }
    generateLocalThumbnailUrl(e, t) {
      requestAnimationFrame(() => {
        if (!e) return;
        let i = "style" === this.props.item.type ? aV(e, this.props.item.style_type) : r2(e);
        if (null != i) {
          let n = [{
            nodeId: e,
            url: i,
            type: this.props.item.type
          }];
          t === AT.LOCAL ? this.props.updateLocalSourceThumbnails(n) : this.props.updatePublishedSourceThumbnails(n, this.props.item);
        }
      });
    }
    getOpenFilePublishedThumbnailUrl() {
      let {
        item,
        publishedProductComponent
      } = this.props;
      return item.type === PW.COMPONENT && publishedProductComponent?.type === PW.COMPONENT && publishedProductComponent.content_hash === item.content_hash && publishedProductComponent.thumbnail_url || item.type === PW.STATE_GROUP && publishedProductComponent?.type === PW.STATE_GROUP && publishedProductComponent.version === item.version && publishedProductComponent.thumbnail_url ? publishedProductComponent.thumbnail_url : null;
    }
    shouldGenerateLocalThumbnailUrl() {
      let {
        item
      } = this.props;
      let t = this.localThumbnail();
      if (!this.props.shouldGenerateLocalThumbnail || !this.isLocalItem() || this.getOpenFilePublishedThumbnailUrl()) return !1;
      if (!t) return !0;
      if (item.type === PW.STATE_GROUP) {
        if (item.version !== t.content_hash) return !0;
      } else if (item.type === PW.VARIABLE || item.type === PW.VARIABLE_SET || item.type === PW.MANAGED_STRING) return !1; else if (item.type === PW.MODULE) {
        if (item.version !== t.content_hash) return !0;
      } else if (item.type === PW.RESPONSIVE_SET || item.type === PW.CODE_COMPONENT || item.type === PW.CODE_FILE || item.type === PW.CODE_LIBRARY) {
        if (item.version !== t.content_hash) return !0;
      } else if (item.content_hash !== t.content_hash) return !0;
      return t.url === this.thumbnailUrl();
    }
    render() {
      let e;
      let {
        className,
        style
      } = this.props;
      let n = this.localThumbnail();
      let a = this.thumbnailUrl();
      e = n && OM(n.url) ? n.url : a && this.props.user ? NQ(a, "fuid", this.props.user.id) : a;
      return jsx(J, {
        className,
        style,
        src: e || void 0,
        draggable: this.props.draggable,
        onError: this.onError,
        loading: this.props.loading ?? "lazy"
      });
    }
  }
  t.displayName = "ComponentImage";
  e.ConnectedLibraryItemImage = connect((e, t) => ({
    thumbnails: e.library.local.thumbnails,
    user: e.user,
    publishedProductComponent: t.item?.type === PW.COMPONENT ? e.library.openFilePublished__LIVEGRAPH.components[t.item.node_id] : t.item?.type === PW.STATE_GROUP ? e.library.openFilePublished__LIVEGRAPH.stateGroups[t.item.node_id] : null
  }), e => ({
    updateLocalSourceThumbnails: t => {
      e(T1({
        thumbnails: t,
        styleKind: AT.LOCAL
      }));
    },
    updatePublishedSourceThumbnails: (t, i) => {
      e(T1({
        thumbnails: t,
        styleKind: AT.SUBSCRIBED_WITH_LIBRARY,
        item: i
      }));
    }
  }))(t);
})(n || (n = {}));
export let $$h0 = n.ConnectedLibraryItemImage;
export const M = $$h0;
