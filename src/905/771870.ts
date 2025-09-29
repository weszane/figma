import { PureComponent } from 'react'
import { connect } from 'react-redux'
import { jsx } from 'react/jsx-runtime'
import { J } from '../905/273120'
import { appendSearchParam } from '../905/508367'
import { replaceThumbnailsOptimist } from '../905/711212'
import { generateNodeThumbnail, generateThumbnailFromStyleMaster, isValidThumbnail } from '../figma_app/80990'
import { CodeComponentIdHandler, ResponsiveSetIdHandler } from '../figma_app/243058'
import { hasAssetId, PrimaryWorkflowEnum, SubscriptionStatusEnum } from '../figma_app/633080'
import { Fullscreen, StylesBindings } from '../figma_app/763686'

let n;
((e) => {
  class t extends PureComponent {
    constructor(e) {
      super(e)
      this.localThumbnail = () => {
        let {
          item,
        } = this.props
        let t = this.state.fallbackLocalThumbnailGuid
        hasAssetId(item) ? t = item.type === PrimaryWorkflowEnum.RESPONSIVE_SET ? ResponsiveSetIdHandler.toGuidStrIfLocal(item.assetId) : item.type === PrimaryWorkflowEnum.CODE_COMPONENT ? CodeComponentIdHandler.toGuidStrIfLocal(item.assetId) : this.state.fallbackLocalThumbnailGuid : item.isLocal && (t = item.node_id)
        return t && this.props.thumbnails[t] || null
      }
      this.onError = () => {
        let e = null
        switch (this.props.item.type) {
          case PrimaryWorkflowEnum.COMPONENT:
            this.props.item.component_key && this.props.item.content_hash && (e = Fullscreen?.getSymbolNodeId(this.props.item.component_key, this.props.item.content_hash) ?? null)
            break
          case PrimaryWorkflowEnum.STATE_GROUP:
            this.props.item.key && (e = Fullscreen?.getStateGroupNodeId(this.props.item.key, this.props.item.version) ?? null)
            break
          case PrimaryWorkflowEnum.STYLE:
            this.props.item.content_hash && (e = StylesBindings?.getStyleNodeId(this.props.item.key, this.props.item.content_hash) ?? null)
        }
        e && (this.setState({
          fallbackLocalThumbnailGuid: e,
        }), this.generateLocalThumbnailUrl(e, SubscriptionStatusEnum.SUBSCRIBED_WITH_LIBRARY))
      }
      this.state = {
        fallbackLocalThumbnailGuid: null,
      }
      this.shouldGenerateLocalThumbnailUrl() && !hasAssetId(this.props.item) && this.generateLocalThumbnailUrl(this.props.item.node_id, SubscriptionStatusEnum.LOCAL)
    }

    isLocalItem() {
      return !hasAssetId(this.props.item) && this.props.item.isLocal
    }

    thumbnailUrl() {
      let {
        item,
      } = this.props
      return hasAssetId(item) ? item.subscriptionStatus === 'LIBRARY' ? item.mainThumbnailInfo.thumbnailUrl : null : this.getOpenFilePublishedThumbnailUrl() || item.thumbnail_url
    }

    generateLocalThumbnailUrl(e, t) {
      requestAnimationFrame(() => {
        if (!e)
          return
        let i = this.props.item.type === 'style' ? generateThumbnailFromStyleMaster(e, this.props.item.style_type) : generateNodeThumbnail(e)
        if (i != null) {
          let n = [{
            nodeId: e,
            url: i,
            type: this.props.item.type,
          }]
          t === SubscriptionStatusEnum.LOCAL ? this.props.updateLocalSourceThumbnails(n) : this.props.updatePublishedSourceThumbnails(n, this.props.item)
        }
      })
    }

    getOpenFilePublishedThumbnailUrl() {
      let {
        item,
        publishedProductComponent,
      } = this.props
      return item.type === PrimaryWorkflowEnum.COMPONENT && publishedProductComponent?.type === PrimaryWorkflowEnum.COMPONENT && publishedProductComponent.content_hash === item.content_hash && publishedProductComponent.thumbnail_url || item.type === PrimaryWorkflowEnum.STATE_GROUP && publishedProductComponent?.type === PrimaryWorkflowEnum.STATE_GROUP && publishedProductComponent.version === item.version && publishedProductComponent.thumbnail_url ? publishedProductComponent.thumbnail_url : null
    }

    shouldGenerateLocalThumbnailUrl() {
      let {
        item,
      } = this.props
      let t = this.localThumbnail()
      if (!this.props.shouldGenerateLocalThumbnail || !this.isLocalItem() || this.getOpenFilePublishedThumbnailUrl())
        return !1
      if (!t)
        return !0
      if (item.type === PrimaryWorkflowEnum.STATE_GROUP) {
        if (item.version !== t.content_hash)
          return !0
      }
      else if (item.type === PrimaryWorkflowEnum.VARIABLE || item.type === PrimaryWorkflowEnum.VARIABLE_SET || item.type === PrimaryWorkflowEnum.MANAGED_STRING) {
        return !1
      }
      else if (item.type === PrimaryWorkflowEnum.MODULE) {
        if (item.version !== t.content_hash)
          return !0
      }
      else if (item.type === PrimaryWorkflowEnum.RESPONSIVE_SET || item.type === PrimaryWorkflowEnum.CODE_COMPONENT || item.type === PrimaryWorkflowEnum.CODE_FILE || item.type === PrimaryWorkflowEnum.CODE_LIBRARY) {
        if (item.version !== t.content_hash)
          return !0
      }
      else if (item.content_hash !== t.content_hash) {
        return !0
      }
      return t.url === this.thumbnailUrl()
    }

    render() {
      let e
      let {
        className,
        style,
      } = this.props
      let n = this.localThumbnail()
      let a = this.thumbnailUrl()
      e = n && isValidThumbnail(n.url) ? n.url : a && this.props.user ? appendSearchParam(a, 'fuid', this.props.user.id) : a
      return jsx(J, {
        className,
        style,
        src: e || void 0,
        draggable: this.props.draggable,
        onError: this.onError,
        loading: this.props.loading ?? 'lazy',
      })
    }
  }
  t.displayName = 'ComponentImage'
  e.ConnectedLibraryItemImage = connect((e, t) => ({
    thumbnails: e.library.local.thumbnails,
    user: e.user,
    publishedProductComponent: t.item?.type === PrimaryWorkflowEnum.COMPONENT ? e.library.openFilePublished__LIVEGRAPH.components[t.item.node_id] : t.item?.type === PrimaryWorkflowEnum.STATE_GROUP ? e.library.openFilePublished__LIVEGRAPH.stateGroups[t.item.node_id] : null,
  }), e => ({
    updateLocalSourceThumbnails: (t) => {
      e(replaceThumbnailsOptimist({
        thumbnails: t,
        styleKind: SubscriptionStatusEnum.LOCAL,
      }))
    },
    updatePublishedSourceThumbnails: (t, i) => {
      e(replaceThumbnailsOptimist({
        thumbnails: t,
        styleKind: SubscriptionStatusEnum.SUBSCRIBED_WITH_LIBRARY,
        item: i,
      }))
    },
  }))(t)
})(n || (n = {}))
export let $$h0 = n.ConnectedLibraryItemImage
export const M = $$h0
