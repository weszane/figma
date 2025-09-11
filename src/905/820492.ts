import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState, useId, Component } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { debounce } from "../905/915765";
import { sha1Hex } from "../905/125019";
import { ServiceCategories as _$$e } from "../905/165054";
import { Thumbnail, SlideConstantsCppBindings, Fullscreen, PrototypingTsApi, PresentationValidationStatus } from "../figma_app/763686";
import { permissionScopeHandler } from "../905/189185";
import { getFeatureFlags } from "../905/601108";
import { atomStoreManager, useAtomWithSubscription, Xr } from "../figma_app/27355";
import h from "classnames";
import { trackEventAnalytics } from "../905/449184";
import { parsePxInt } from "../figma_app/783094";
import { desktopAPIInstance } from "../figma_app/876459";
import { customHistory } from "../905/612521";
import { buildUploadUrl } from "../figma_app/169182";
import { isStrippedHtmlEmpty } from "../905/491152";
import { reportError } from "../905/11";
import { logError } from "../905/714362";
import { useSprigWithSampling } from "../905/99656";
import { CY, N_ } from "../figma_app/637027";
import { kt } from "../figma_app/858013";
import { B as _$$B } from "../905/714743";
import { getI18nString, renderI18nText } from "../905/303541";
import { VisualBellActions } from "../905/302958";
import { VisualBellIcon } from "../905/576487";
import { R as _$$R } from "../905/792510";
import { W as _$$W } from "../905/841666";
import { Lj } from "../figma_app/835219";
import { DV, qD } from "../figma_app/471982";
import { BT } from "../905/618447";
import { rY } from "../figma_app/524655";
import { ae } from "../figma_app/808294";
import { gH } from "../905/104173";
import { W as _$$W2, T as _$$T } from "../905/336482";
import { iB } from "../figma_app/188671";
import { cO } from "../figma_app/530167";
import { i9, N4, VS, oO, bk } from "../figma_app/49598";
import { oB, sf } from "../905/929976";
import { M3 } from "../figma_app/91703";
import { hideModal, popModalStack } from "../905/156213";
import { WX } from "../figma_app/350203";
import { fu } from "../figma_app/831799";
import { Wi, sD, IZ, oH, EL, qA, UP } from "../figma_app/740025";
import { Ii, vC, $x, nK, $W, j4, xw } from "../figma_app/599979";
import { D as _$$D } from "../905/274925";
import { Ni } from "../figma_app/188152";
import { selectUser } from "../905/372672";
import { bH, cp, HF, zv, yS, cU, vK, Rj, al, a6, ow } from "../figma_app/198840";
import { FTemplateCategoryType } from "../figma_app/191312";
import { M4 } from "../905/713695";
import { getExplicitRoleForUserAndFile, getPermissionsState } from "../figma_app/642025";
import { Ef } from "../905/81982";
import { Np } from "../figma_app/193867";
import { dj, vt, bD } from "../figma_app/45218";
import { mN } from "../905/71785";
import { k2, aP } from "../figma_app/10554";
import { LibrarySourceEnum } from "../figma_app/633080";
import { AccessLevelEnum } from "../905/557142";
import { ShareAction } from "../figma_app/707808";
import { SourceType } from "../figma_app/175992";
import { Rs } from "../figma_app/761870";
import { e0 as _$$e3 } from "../905/696396";
import { s as _$$s2 } from "../905/608932";
import { registerModal, ModalSupportsBackground } from "../905/102752";
import { pz } from "../figma_app/825489";
import { OJ } from "../905/519092";
import { $ as _$$$ } from "../905/241406";
import { F4, _g } from "../figma_app/60023";
import { A as _$$A2 } from "../905/172237";
import { A as _$$A3 } from "../905/855351";
import { A as _$$A4 } from "../905/437920";
import { A as _$$A5 } from "../905/663296";
import { PJ, BP, R4, bv, iA, i1, S as _$$S, qr, YN, GC, u1, Zx, U5, qw, h_ } from "../905/443375";
import { Ay as _$$Ay, nV } from "../905/361060";
import { N as _$$N } from "../905/620375";
import { A as _$$A6 } from "../905/419640";
import { A as _$$A7 } from "../905/796878";
import { A as _$$A8 } from "../905/395159";
import { Wq, nu } from "../905/358418";
import { A as _$$A9 } from "../905/658855";
import { iu, Ql, d_, Ay as _$$Ay2 } from "../905/918143";
import { A as _$$A0 } from "../905/440661";
import { A as _$$A1 } from "../905/826099";
import { A as _$$A10 } from "../905/560753";
import { Q as _$$Q } from "../905/350210";
import { lQ } from "../905/934246";
import { P as _$$P } from "../905/392438";
import { A as _$$A11 } from "../905/972270";
import { A as _$$A12 } from "../905/676119";
import { A as _$$A13 } from "../905/794518";
import { A as _$$A14 } from "../905/81613";
import { y4I } from "../figma_app/822011";
import { d as _$$d } from "../905/49800";
import { Label } from "../905/270045";
import { A as _$$A15 } from "../905/118358";
import { GP, w6 } from "../figma_app/292324";
import { A as _$$A16 } from "../905/857789";
import { A as _$$A17 } from "../905/568234";
import { A as _$$A18 } from "../905/392698";
import { SE } from "../905/93400";
import { M4 as _$$M, UC, nn, Kp, XT } from "../905/561298";
import { VJh } from "../figma_app/27776";
import { A as _$$A19 } from "../svg/619883";
var n;
var g = h;
async function M() {
  return await Promise.all(rY(atomStoreManager.get(BT)).map(e => scheduler.postTask(() => function (e) {
    let [t, i] = Thumbnail.generateThumbnailForNode(e, SlideConstantsCppBindings.slideWidth(), SlideConstantsCppBindings.slideHeight(), 1, {
      useAbsoluteBounds: !0
    });
    return {
      url: URL.createObjectURL(new Blob([i || ""])),
      buffer: i,
      sha1: sha1Hex(i),
      type: "image"
    };
  }(e))));
}
function eS({
  figFile: e,
  hubFile: t,
  metadata: i,
  onPriceChange: n,
  isPaid: a,
  pagesList: s,
  error: o
}) {
  let l = "whiteboard" === e.editor_type || i.viewerMode === FTemplateCategoryType.WHITEBOARD;
  return jsxs(Fragment, {
    children: [jsx(_$$A5, {
      price: i.price,
      onChange: n,
      error: o,
      disabled: !a,
      required: !0
    }), jsx(_$$A4, {
      resource: t,
      disabled: !a
    }), a && jsx("div", {
      children: jsx(_$$A2, {
        pagesList: s,
        isFirstTimePublish: !t,
        isWhiteboardFile: l
      })
    }), jsx(_$$A3, {})]
  });
}
function eC({
  getFooterProfileIdentifier: e
}) {
  return jsx("div", {
    className: PJ,
    "data-testid": "publish-modal-footer-text",
    children: e()
  });
}
function eU({
  authors: e
}) {
  return jsx("div", {
    className: BP,
    children: jsx("div", {
      children: e?.map(e => jsx("p", {
        children: e.name
      }, e.id))
    })
  });
}
function eH({
  publishers: e,
  onChange: t,
  publisherSearchResults: i
}) {
  return jsx("div", {
    className: "publishing_metadata_cocreators_input--autocompleteWrapperUI3--mJb41",
    children: jsx(_$$P, {
      autocomplete: e,
      placeholder: getI18nString("community.publishing.give_up_to_n_creators_credit", {
        maxCreatorsPerResource: Wi
      }),
      onChange: t,
      validateToken: lQ,
      TokenComponent: eW,
      SearchResultComponent: eK,
      getSearchResults: i,
      EmptySearchResultComponent: eY
    })
  });
}
function eW(e) {
  return jsx("div", {
    children: e.token.content.name
  });
}
function eK(e) {
  return jsx(_$$A11, {
    avatarEntity: e.searchResult,
    authorDisplayName: e.searchResult.name,
    authorProfileHandle: e.searchResult.profile_handle
  });
}
function eY() {
  return jsxs("div", {
    className: "publishing_metadata_cocreators_input--textOnlyRow--pOsvc",
    children: [jsx("div", {
      className: "publishing_metadata_cocreators_input--profilePrimaryText--2GBUq autocomplete_permissions--name--62sCS ellipsis--ellipsis--Tjyfa",
      children: renderI18nText("community.publishing.editor_or_viewer_not_found")
    }), jsx("div", {
      className: "publishing_metadata_cocreators_input--profileSecondaryText--OFneI text--fontPos11--2LvXf text--_fontBase--QdLsd",
      children: renderI18nText("community.publishing.invite_creators_to_the_file_to_give_credit_creators_must_have_community_profiles")
    })]
  });
}
function eZ({
  figFile: e,
  hubFile: t,
  isEditHubFilePageMode: i,
  author: n,
  publishers: s,
  publisherSearchResults: o,
  onChangeCocreators: l,
  onChangeAuthor: d
}) {
  let [c, u] = useState(!!s?.tokens.length);
  return jsxs(Fragment, {
    children: [jsx(_$$A13, {
      label: getI18nString("community.publishing.creators"),
      children: i ? jsx(eU, {
        authors: t?.community_publishers?.accepted
      }) : jsxs(Fragment, {
        children: [jsx(_$$Q, {
          property: n,
          onChange: d,
          resourceType: "hub_file",
          editingFile: e,
          isEditHubFilePageMode: i
        }), !c && jsx(_$$A12, {
          onClick: () => u(!0)
        })]
      })
    }), c && jsx(_$$A13, {
      label: getI18nString("community.publishing.cocreators"),
      children: jsx(eH, {
        publishers: s,
        onChange: l,
        publisherSearchResults: o
      })
    })]
  });
}
function e2({
  fileKey: e
}) {
  let t = renderI18nText("community.publishing.this_editor_is_being_published_as_a_file", {
    fileEditorLink: jsx(CY, {
      href: `/file/${e}`,
      target: "_blank",
      trusted: !0,
      children: renderI18nText("community.publishing.file_editor")
    })
  });
  return jsx(_$$A15, {
    bannerContent: t
  });
}
function e4({
  scalingMode: e,
  onScalingOptionChange: t,
  ariaLabelledBy: i
}) {
  return jsx(_$$Ay, {
    ariaLabelledBy: i,
    dropdownType: "PUBLISHING_METADATA_SCALING_MODE_SELECT",
    property: e,
    onChange: t,
    scalingDropdownFormatter: {
      format: e => GP(w6({
        viewportScalingMode: e,
        contentScalingMode: "fixed"
      }))
    }
  });
}
function e6({
  fileKey: e,
  viewerMode: t,
  isValidPrototype: i,
  showPrototypePublishedAsFileNotice: n,
  onViewerModeChange: s,
  onScalingOptionChange: o,
  dispatch: l,
  dropdownShown: d,
  scalingMode: c
}) {
  let u = t === y4I.PROTOTYPE && i;
  let p = useId();
  return jsxs(Fragment, {
    children: [jsx(_$$A13, {
      label: getI18nString("community.publishing.file_preview"),
      children: jsxs("div", {
        className: R4,
        children: [jsx(_$$d, {
          checked: t === y4I.PROTOTYPE,
          disabled: n,
          label: jsx(Label, {
            children: renderI18nText("community.publishing.use_a_prototype_preview")
          }),
          onChange: e => {
            s(e ? y4I.PROTOTYPE : y4I.CANVAS);
          }
        }), jsxs(_$$A16, {
          children: [renderI18nText("community.publishing.instead_of_images_your_resource_will_display_as_a_prototype"), jsx(CY, {
            href: "https://help.figma.com/hc/articles/360040035974-Publish-files-to-the-Community",
            target: "_blank",
            trusted: !0,
            children: renderI18nText("general.learn_more")
          })]
        })]
      })
    }), u && jsx(_$$A13, {
      labelId: p,
      label: getI18nString("community.publishing.prototype_preview"),
      children: jsx(e4, {
        ariaLabelledBy: p,
        dropdownShown: d,
        scalingMode: c,
        dispatch: l,
        onScalingOptionChange: o
      })
    }), n && jsx(e2, {
      fileKey: e
    })]
  });
}
let tn = parsePxInt(VJh);
let tr = ["name", "description", "tags", "categoryId", "creatorPolicy", "publisherIds", "thumbnailIsSet", "thumbnailBuffer", "price", "supportContact"];
var ta = (e => (e[e.FORM = 0] = "FORM", e[e.PRE_HUB_FILE_PUBLISH_FLOW = 1] = "PRE_HUB_FILE_PUBLISH_FLOW", e[e.POST_HUB_FILE_PUBLISH_FLOW = 2] = "POST_HUB_FILE_PUBLISH_FLOW", e))(ta || {});
class ts extends Component {
  constructor(e) {
    super(e);
    this.hasAttemptedToPublish = !1;
    this.hasSucceededToPublish = !1;
    this.onClose = () => {
      trackEventAnalytics("publish_details_view_cancel", {
        fileKey: this.props.fileKey,
        userId: this.props.user.id,
        teamId: this.props.figFile.team_id,
        orgId: this.props.figFile.parent_org_id
      });
      this.props.hideModal();
    };
    this.forceRender = () => {
      this.setState({
        renderBool: !this.state.renderBool
      });
    };
    this.getUpdateHubFilePayload = () => {
      let {
        metadata
      } = this.props.publishingState;
      return {
        hubFileId: this.props.hubFile?.id || "",
        name: metadata.name,
        description: metadata.description,
        categoryId: metadata.categoryId,
        suggestedCategory: this.state.otherCategoryInputValue?.trim() || null,
        creatorPolicy: metadata.creatorPolicy,
        tags: metadata.tags,
        tagsV2: metadata.tagsV2,
        viewerMode: metadata.viewerMode,
        scalingMode: metadata.scalingMode,
        commentsSetting: metadata.commentsSetting,
        price: metadata.price,
        supportContact: metadata.supportContact,
        carouselMedia: metadata.carouselMedia,
        thumbnailBuffer: this.state.customThumbnail && "buffer" in this.state.customThumbnail ? this.state.customThumbnail.buffer : null,
        customCarouselThumbnail: this.state.customThumbnail,
        hasCustomUploadedThumbnail: this.state.thumbnailType === mN.USER_UPLOADED
      };
    };
    this.getCreateHubFilePayload = () => {
      let {
        metadata
      } = this.props.publishingState;
      let t = "org_id" in this.props.publishingState.metadata.author ? this.props.publishingState.metadata.author.org_id : "";
      let i = "team_id" in this.props.publishingState.metadata.author ? this.props.publishingState.metadata.author.team_id : "";
      let n = this.state.customThumbnail;
      let r = metadata.viewerMode === FTemplateCategoryType.PROTOTYPE ? this.getCarouselMediaForPrototype() : metadata.carouselMedia;
      return {
        hubFileId: this.props.hubFile?.id || null,
        fileKey: this.props.figFile.key,
        name: metadata.name,
        description: metadata.description,
        categoryId: metadata.categoryId,
        suggestedCategory: this.state.otherCategoryInputValue?.trim() || null,
        creatorPolicy: metadata.creatorPolicy,
        tags: metadata.tags ?? [],
        tagsV2: metadata.tagsV2 ?? [],
        thumbnailBuffer: n && "buffer" in n ? n.buffer : null,
        thumbnailIsSet: void 0 !== n,
        hasCustomUploadedThumbnail: this.state.thumbnailType === mN.USER_UPLOADED,
        viewerMode: metadata.viewerMode,
        scalingMode: metadata.scalingMode,
        authorOrgId: t,
        authorTeamId: i,
        validPrototype: this.props.validPrototype,
        publisherIds: metadata.publishers?.tokens.map(({
          content: e
        }) => e.id),
        commentsSetting: metadata.commentsSetting,
        agreedToTos: this.props.showToSCheckbox ? !metadata.blockPublishingOnToS : void 0,
        isPaid: metadata.isPaid,
        price: metadata.price,
        supportContact: metadata.supportContact,
        carouselMedia: r,
        customCarouselThumbnail: n
      };
    };
    this.onTagsChanged = e => {
      this.updatePublishingMetadata(e);
    };
    this.submit = () => {
      this.hasAttemptedToPublish = !0;
      let {
        metadata
      } = this.props.publishingState;
      let t = "org_id" in metadata.author ? metadata.author.org_id : null;
      let i = "team_id" in metadata.author ? metadata.author.team_id : null;
      if (this.props.isEditHubFilePageMode && this.props.hubFile) {
        let n = this.getUpdateHubFilePayload();
        let r = bH(n);
        if (this.setState({
          formErrors: r
        }), this.hasFormErrors(r)) {
          trackEventAnalytics("creator_publishing_error", {
            errors: Object.values(r),
            errorFields: Object.keys(r),
            resourceType: "hub_file",
            resourceId: this.props.hubFile.id,
            isPaid: this.props.isPaid
          });
          return;
        }
        this.shouldPublishHubFileOnSubmit() ? (trackEventAnalytics("publish_details_view_publish", {
          fileKey: this.props.figFile.key,
          hubFileId: this.props.hubFile.id,
          currentHubFileVersionId: this.props.hubFileVersion?.id,
          actionType: "publish_edit",
          userId: this.props.user.id,
          teamId: i,
          orgId: t,
          isPaid: this.props.isPaid
        }, {
          forwardToDatadog: !0
        }), this.props.updateHubFile(n, () => {
          if (!this.props.hubFile) return;
          this.hasSucceededToPublish = !0;
          let t = this.props.hubFile.comments_setting === Ni.ENABLED && this.props.hubFile.viewer_mode !== FTemplateCategoryType.PROTOTYPE;
          let i = metadata.commentsSetting === Ni.ENABLED && metadata.viewerMode !== FTemplateCategoryType.PROTOTYPE;
          (metadata.commentsSetting !== this.props.hubFile.comments_setting || t !== i) && this.props.dispatch(cO());
          this.props.isEditHubFilePageMode && customHistory.reload("Published hubfile updated");
          this.props.dispatch(VisualBellActions.enqueue({
            message: getI18nString("community.publishing.changes_saved"),
            icon: VisualBellIcon.CHECK
          }));
        }), this.setState({
          step: 2
        })) : this.props.dispatch(VisualBellActions.enqueue({
          message: getI18nString("community.error.profile_not_found"),
          error: !0
        }));
      } else {
        let e = this.getCreateHubFilePayload();
        let n = bH(e);
        if (this.setState({
          formErrors: n
        }), this.hasFormErrors(n)) {
          trackEventAnalytics("creator_publishing_error", {
            errors: Object.values(n),
            errorFields: Object.keys(n),
            resourceType: "hub_file",
            fileKey: this.props.fileKey,
            isPaid: this.props.isPaid
          });
          this.isUniversalPosting() && trackEventAnalytics("community_publish_modal", {
            fileKey: this.props.fileKey,
            userId: this.props.user.id,
            teamId: this.props.figFile.team_id,
            orgId: this.props.figFile.parent_org_id,
            step: WX.ERROR,
            errors: Object.values(n)
          });
          return;
        }
        this.shouldPublishHubFileOnSubmit() ? (trackEventAnalytics("publish_details_view_publish", {
          fileKey: this.props.figFile.key,
          hubFileId: this.props.hubFile?.id,
          currentHubFileVersionId: this.props.hubFileVersion?.id,
          actionType: this.props.hubFileVersion?.id ? "publish_version" : "publish_resource",
          userId: this.props.user.id,
          teamId: i,
          orgId: t,
          isPaid: this.props.isPaid
        }, {
          forwardToDatadog: !0
        }), this.props.createHubFile(e), this.isUniversalPosting() && trackEventAnalytics("community_publish_modal", {
          fileKey: this.props.fileKey,
          userId: this.props.user.id,
          teamId: this.props.figFile.team_id,
          orgId: this.props.figFile.parent_org_id,
          step: WX.PUBLISH,
          isPaid: this.props.isPaid
        }), this.setState({
          step: 2
        })) : this.setState({
          step: 1,
          requestPayload: e
        });
      }
    };
    this.shouldPublishHubFileOnSubmit = () => {
      let e = this.props.publishingState.metadata.author;
      if ("org_id" in e || "team_id" in e) return !0;
      let t = sD(this.props.user, this.props.authedProfilesById);
      return t && Ii(t, this.props.publishingState.metadata.author) || !1;
    };
    this.publishHubFile = () => {
      let {
        requestPayload
      } = this.state;
      requestPayload && this.props.createHubFile(requestPayload);
    };
    this.updatePublishingMetadata = e => {
      this.props.onPublishingMetadataChanged(this.props.figFile.key, {
        ...this.props.publishingState.metadata,
        ...e
      });
    };
    this.updateCarouselMedia = e => {
      this.setFormErrors({
        carouselMedia: vC(e.carouselMedia)
      });
      this.updatePublishingMetadata(e);
    };
    this.updateCategoryInputValue = e => {
      this.setState({
        otherCategoryInputValue: e
      });
    };
    this.inputDebounce = debounce((e, t) => {
      if ("name" === e || "description" === e) {
        let t = "name" === e ? WX.EDIT_NAME : WX.EDIT_DESCRIPTION;
        trackEventAnalytics("community_publish_modal", {
          userId: this.props.user.id,
          step: t,
          name: t,
          resourceType: "hub_file",
          resourceId: this.props.hubFile?.id
        });
      }
      this.updatePublishingMetadata({
        [e]: t
      });
    }, 200);
    this.onViewerModeChange = e => {
      let t = {
        viewerMode: e
      };
      this.updatePublishingMetadata({
        viewerMode: e
      });
      e === FTemplateCategoryType.PROTOTYPE && null == this.props.scalingMode && (t.scalingMode = nV);
      e !== FTemplateCategoryType.PROTOTYPE || this.state.customThumbnail || this.setState({
        customThumbnail: this.state.canvasThumbnail,
        thumbnailType: this.hasUserSetCanvasThumbnail() ? mN.USER_CANVAS : mN.DEFAULT_CANVAS
      });
      this.updatePublishingMetadata(t);
    };
    this.onPublishingMetadataAuthorChange = e => {
      let {
        publishers
      } = this.props.publishingState.metadata;
      this.updatePublishingMetadata({
        author: e,
        publishers: {
          ...publishers,
          tokens: publishers.tokens.filter(t => !Ii(this.props.authedProfilesById[t.content.id], e))
        }
      });
    };
    this.onScalingOptionChange = e => {
      this.updatePublishingMetadata({
        scalingMode: e
      });
    };
    this.onPaidResourceSettingChange = () => {
      let e = this.props.publishingState.metadata.isPaid;
      this.updatePublishingMetadata({
        isPaid: !e,
        publishers: e ? this.props.publishingState.metadata.publishers : Rs()
      });
      !e && this.props.publishingState.metadata.price ? this.setFormErrors({
        price: cp(!e, this.props.publishingState.metadata.price)
      }) : this.setFormErrors({
        price: void 0
      });
    };
    this.onOrgMsaChange = e => {
      let t = e.currentTarget.checked;
      this.updatePublishingMetadata({
        blockPublishingOnToS: !t
      });
    };
    this.publisherSearchResults = e => {
      let {
        metadata
      } = this.props.publishingState;
      let i = new Ef([], {
        keys: ["profile_handle", "name"],
        threshold: 0,
        tokenize: !0,
        matchAllTokens: !0
      });
      i.set(this.state.editorCommunityProfiles);
      let n = e.inputValue.trim().toLowerCase().replace(/^@/, "");
      return i.search(n).filter(e => !Ii(this.props.authedProfilesById[e.id], metadata.author) && (!metadata.publishers || !metadata.publishers.tokens.length || metadata.publishers.tokens.every(t => t.content?.id !== e.id)));
    };
    this.onPrototypeThumbnailUploadChange = async e => {
      try {
        let t = await $x(e, this.state.customThumbnail);
        let i = {
          ...t,
          sha1: sha1Hex(t.buffer),
          type: "image"
        };
        this.setState({
          customThumbnail: i,
          thumbnailType: mN.USER_UPLOADED
        }, () => {
          this.updateCarouselMedia({
            carouselMedia: [i]
          });
        });
        trackEventAnalytics("community_publish_modal", {
          name: "upload_image",
          userId: this.props.user.id,
          resourceType: "hub_file",
          resourceId: this.props?.hubFile?.id,
          isPaid: this.props.publishingState.metadata.isPaid,
          src: dj.FILE_INPUT
        });
      } catch (e) {
        this.setFormErrors({
          thumbnailBuffer: e.message
        });
      }
    };
    this.onCarouselUploadThumbnailChange = e => {
      try {
        this.setState({
          customThumbnail: e,
          coverImageCarouselMediaId: "id" in e ? e.id : void 0,
          thumbnailType: mN.USER_UPLOADED
        });
        trackEventAnalytics("community_publish_modal", {
          name: "use_custom_thumbnail",
          userId: this.props.user.id,
          resourceType: "hub_file",
          resourceId: this.props?.hubFile?.id,
          isPaid: this.props.publishingState.metadata.isPaid
        });
      } catch (e) {
        this.setFormErrors({
          thumbnailBuffer: e.message
        });
      }
    };
    this.restorePrototypeFileThumbnail = () => {
      let e = this.state.customThumbnail;
      this.setState({
        customThumbnail: this.state.canvasThumbnail,
        thumbnailType: this.hasUserSetCanvasThumbnail() ? mN.USER_CANVAS : mN.DEFAULT_CANVAS
      }, () => {
        this.state.canvasThumbnail && this.updateCarouselMedia({
          carouselMedia: [this.state.canvasThumbnail]
        });
        e && "buffer" in e && nK(e);
      });
    };
    this.restoreCarouselFileThumbnail = () => {
      let e = this.hasUserSetCanvasThumbnail() ? this.state.canvasThumbnail : void 0;
      if (this.setState({
        customThumbnail: e,
        coverImageCarouselMediaId: "",
        thumbnailType: mN.USER_CANVAS
      }, () => {}), e) {
        let t = this.props.publishingState.metadata.carouselMedia ?? [];
        t.some(t => t.sha1 === e.sha1) || this.updateCarouselMedia({
          carouselMedia: [e, ...t]
        });
      }
    };
    this.getFooterProfileIdentifier = e => {
      let t = e => jsx("span", {
        className: bv,
        children: e
      });
      return jsx("span", {
        children: (() => {
          if ("org_id" in e) return this.props.orgEntity ? renderI18nText("community.publishing.you_are_publishing_to_the_org_profile", {
            orgName: t(this.props.orgEntity.name)
          }) : renderI18nText("community.publishing.you_are_publishing_to_the_org_profile.fallback", {
            org: t(getI18nString("general.fallback_org_name"))
          });
          if ("team_id" in e) {
            let i = this.props.teams[e.team_id];
            return i ? renderI18nText("community.publishing.you_are_publishing_to_the_team_profile", {
              teamName: t(i.name)
            }) : renderI18nText("community.publishing.you_are_publishing_to_the_team_profile.fallback", {
              team: t(getI18nString("general.fallback_org_name"))
            });
          }
          return renderI18nText("community.publishing.you_are_publishing_to_user_profile", {
            userName: t(this.props.user?.handle ? this.props.user?.handle : getI18nString("general.fallback_user_name"))
          });
        })()
      });
    };
    this.isUniversalPosting = () => this.props.entryPoint === k2.UNIVERSAL_POSTING;
    this.hideDropdownIfOpen = () => {
      (this.props.dropdownShown?.type === iu || this.props.dropdownShown?.type === Ql) && this.props.hideDropdown();
    };
    this.setFormErrors = debounce(e => {
      let t = this.state.formErrors;
      for (let [i, n] of Object.entries(e)) n ? t[i] = n : delete t[i];
      this.setState({
        formErrors: t
      });
    }, 100);
    this.state = {
      unDebouncedDescription: this.props.publishingState.metadata ? this.props.publishingState.metadata.description : "",
      unDebouncedCreatorPolicy: this.props.publishingState.metadata ? this.props.publishingState.metadata.creatorPolicy : "",
      formErrors: {},
      isGeneratingThumbnail: !1,
      editorCommunityProfiles: [],
      step: 0,
      requestPayload: null,
      renderBool: !1,
      carryOverComments: !1,
      customThumbnail: this.existingHubFileHasCustomThumbnail() ? this.getExistingHubFileThumbnail() : void 0,
      thumbnailType: void 0,
      coverImageCarouselMediaId: this.props.publishingState.metadata?.coverImageCarouselMediaId,
      otherCategoryInputValue: ""
    };
  }
  getTimeSinceComponentDidMount() {
    if (void 0 !== this.componentDidMountTime) return Date.now() - this.componentDidMountTime;
  }
  existingHubFileHasCustomThumbnail() {
    return !!this.props.publishingState.metadata?.carouselMedia?.length;
  }
  hasUserSetCanvasThumbnail() {
    return !!this.props.figFile.thumbnail_guid;
  }
  getCarouselMediaForPrototype() {
    let e = this.state.customThumbnail;
    return e ? [e] : void 0;
  }
  getExistingHubFileThumbnail() {
    let {
      publishingState
    } = this.props;
    let {
      metadata
    } = e;
    let i = metadata?.carouselMedia;
    if (i?.length) {
      let e = metadata.coverImageCarouselMediaId ? i.find(e => "id" in e && e.id === metadata.coverImageCarouselMediaId) : i[0];
      if (e) return e;
    }
  }
  componentWillUnmount() {
    this.state.canvasThumbnail && nK(this.state.canvasThumbnail);
    this.props.publishingState.status.code === aP.SUCCESS && this.props.clearPublishingState();
    this.props.Sprig("track", "hub_file_publish_modal_close", {
      hasAttemptedToPublish: this.hasAttemptedToPublish,
      hasSucceededToPublish: this.hasSucceededToPublish,
      timeSpentInModal: this.getTimeSinceComponentDidMount()
    });
  }
  async componentDidMount() {
    this.componentDidMountTime = Date.now();
    await Promise.all([(async () => {
      this.isSlidePublish() ? await this.initPublishingMetadataForSlides() : await this.setThumbnailPublishingState();
    })(), (async () => {
      let {
        data,
        status
      } = await _$$s2.getEditors({
        fileKey: this.props.figFile.key
      });
      200 === status && this.setState({
        editorCommunityProfiles: data.meta
      });
    })(), this.setAllCategories()]);
    this.props.publishingState.metadata.viewerMode === FTemplateCategoryType.SLIDE_TEMPLATE && this.props.isFullscreenOpen && permissionScopeHandler.system("slides-prepare-modules-for-publish", () => {
      Fullscreen.createSlideModulesForPublish();
    });
  }
  async setAllCategories() {
    let e = await M4.fetch(iB(gH(this.props.figFile.editor_type ?? void 0, this.props.publishingState.metadata.viewerMode)));
    this.setState({
      allCategories: e
    });
  }
  async setThumbnailPublishingState() {
    let {
      canvasThumbnailPromise,
      publishingState
    } = this.props;
    this.setState({
      isGeneratingThumbnail: !0
    });
    let i = await canvasThumbnailPromise;
    let n = i ? {
      ...i,
      type: "image",
      sha1: sha1Hex(i.buffer)
    } : void 0;
    this.setState({
      canvasThumbnail: n,
      isGeneratingThumbnail: !1
    });
    let r = {};
    if (HF(this.props.hubFile)) {
      let e = this.state.customThumbnail && this.state.customThumbnail.sha1 === n?.sha1;
      r.thumbnailType = (() => {
        if (this.state.customThumbnail) return e ? this.hasUserSetCanvasThumbnail() ? mN.USER_CANVAS : mN.DEFAULT_CANVAS : mN.USER_UPLOADED;
      })();
    } else {
      let e = [];
      this.hasUserSetCanvasThumbnail() && n ? (r.customThumbnail = n, r.thumbnailType = mN.USER_CANVAS, e = [n]) : publishingState.metadata.viewerMode === FTemplateCategoryType.PROTOTYPE && n ? (r.customThumbnail = n, r.thumbnailType = mN.DEFAULT_CANVAS, e = [n]) : (r.customThumbnail = void 0, r.thumbnailType = void 0);
      this.updatePublishingMetadata({
        carouselMedia: e
      });
    }
    this.setState(r);
  }
  async generateSlidesThumbnails() {
    let e = [];
    try {
      e = await M();
    } catch (e) {
      reportError(_$$e.COMMUNITY, e);
      logError("Community slide template thumbnail generation", e);
    }
    return e;
  }
  async getCategoryIdForPresentations() {
    let e = await M4.fetch(iB(gH(this.props.figFile.editor_type ?? void 0, this.props.publishingState.metadata.viewerMode)));
    return e.find(d_)?.id;
  }
  async initPublishingMetadataForSlides() {
    let e;
    let t;
    if (this.props.isFullscreenOpen ? (this.setState({
      isGeneratingThumbnail: !0
    }), this.props.setLibraryPublishingMode(LibrarySourceEnum.HUBFILE), [e, t] = await Promise.all([this.generateSlidesThumbnails(), this.getCategoryIdForPresentations()])) : t = await this.getCategoryIdForPresentations(), void 0 === e) {
      this.updatePublishingMetadata({
        categoryId: t
      });
      return;
    }
    e && e.length > 0 ? this.setState({
      customThumbnail: e[0],
      thumbnailType: mN.USER_UPLOADED,
      isGeneratingThumbnail: !1
    }, () => {
      this.updatePublishingMetadata({
        categoryId: t,
        carouselMedia: e
      });
    }) : (this.setState({
      isGeneratingThumbnail: !1
    }), this.props.dispatch(VisualBellActions.enqueue({
      message: getI18nString("community.error.slide_template_publishing_error"),
      error: !0
    })));
  }
  isDesignFile() {
    return "design" === this.props.figFile.editor_type;
  }
  getPrimaryButtonText() {
    return this.props.isEditHubFilePageMode || zv(this.props.hubFile) ? getI18nString("general.save") : this.props.isPaid ? getI18nString("community.publishing.submit_for_review") : getI18nString("community.publishing.publish");
  }
  hasFormErrors(e) {
    return !!$W(Object.keys(e), e);
  }
  renderForm() {
    let {
      metadata
    } = this.props.publishingState;
    let t = this.props.hubFile;
    let i = j4(metadata.author);
    let n = this.state.formErrors;
    let a = this.props.publishingState.status.code === aP.UPLOADING || this.props.slidesPublishState === F4.PUBLISH_HUB_FILE_INITIATED;
    let s = n.thumbnailIsSet || n.thumbnailBuffer;
    let o = this.state.customThumbnail;
    let l = metadata.isPaid ? {
      id: "0",
      badges: [],
      monetized_resource_metadata: {
        id: "0",
        price: ae(metadata.price),
        is_subscription: !1
      }
    } : null;
    let d = metadata.viewerMode !== FTemplateCategoryType.PROTOTYPE ? jsx(_$$A9, {
      allowVideoUpload: !1,
      canvasSetThumbnailSha1: this.state.canvasThumbnail?.sha1,
      carouselMedia: metadata.carouselMedia,
      coverImageCarouselMediaId: this.state.coverImageCarouselMediaId,
      disableUploading: this.isSlidePublish(),
      error: n.carouselMedia,
      hasCustomCanvasThumbnail: this.hasUserSetCanvasThumbnail(),
      name: metadata.name,
      onCustomThumbnailChange: this.onCarouselUploadThumbnailChange,
      onRestore: this.restoreCarouselFileThumbnail,
      resourceId: this.props.hubFile?.id,
      resourceType: vt.HUB_FILE,
      thumbnail: o,
      updateCarouselMedia: this.updateCarouselMedia,
      userId: this.props.user.id
    }) : jsx("div", {
      className: iA,
      children: jsx(_$$N, {
        acceptedPublishers: t?.community_publishers?.accepted,
        author: {
          name: i?.name,
          imgUrl: i?.img_url
        },
        enableRestore: !this.props.isEditHubFilePageMode && this.state.thumbnailType === mN.USER_UPLOADED,
        enableUpload: !this.props.isEditHubFilePageMode && this.state.thumbnailType !== mN.USER_UPLOADED,
        isCustomThumbnailSet: this.state.thumbnailType !== mN.DEFAULT_CANVAS,
        metricFooter: {
          viewCount: t?.view_count || 0,
          likeCount: t?.like_count || 0,
          currentUserLiked: this.props.currentUserLikedHubFile,
          duplicateCount: t?.duplicate_count || 0,
          isPaid: !!metadata.isPaid
        },
        name: metadata.name,
        onRestore: this.restorePrototypeFileThumbnail,
        onUpload: this.onPrototypeThumbnailUploadChange,
        thumbnail: o,
        tileOverlayResource: l,
        uploadError: s
      })
    });
    return jsxs(Fragment, {
      children: [jsxs(_$$A7, {
        onScroll: this.hideDropdownIfOpen,
        isEditHubFilePageMode: this.props.isEditHubFilePageMode,
        children: [jsx("div", {
          className: i1,
          children: this.state.isGeneratingThumbnail ? jsx(kt, {
            size: "medium",
            className: _$$S
          }) : d
        }), jsxs(_$$A6, {
          name: "details",
          title: getI18nString("community.publishing.details"),
          defaultActive: !0,
          numErrors: $W(["name", "categoryId", "description", "tags", "tagsV2"], n),
          children: [jsx(_$$A18, {
            value: metadata.name,
            onChange: e => {
              let t = e.currentTarget.value;
              this.inputDebounce("name", t);
              this.setFormErrors({
                name: yS(t)
              });
            },
            error: n.name,
            autoFocus: !0,
            disabled: a
          }), !this.isSlidePublish() && jsx(_$$Ay2, {
            editorType: gH(this.props.figFile.editor_type ?? void 0, this.props.publishingState.metadata.viewerMode),
            value: metadata.categoryId,
            previousValue: t?.category_id,
            onChange: e => {
              this.updatePublishingMetadata({
                categoryId: e
              });
              n.categoryId && this.setFormErrors({
                categoryId: cU(e)
              });
            },
            categoryInputValue: this.state.otherCategoryInputValue,
            onCategoryInputChange: this.updateCategoryInputValue,
            error: n.categoryId,
            required: !0
          }), jsx(_$$A14, {
            defaultValue: this.state.unDebouncedDescription,
            onChange: e => {
              this.setState({
                unDebouncedDescription: e
              });
              this.inputDebounce("description", e);
              this.setFormErrors({
                description: vK(e)
              });
            },
            resourceType: bD.HUB_FILE,
            error: n.description
          }), this.state.allCategories && (!this.isSlidePublish() || metadata.categoryId) && jsx(SE, {
            categoryId: metadata.categoryId,
            tagsV1: metadata.tags,
            tagsV2: metadata.tagsV2,
            existingResourceContent: this.props.hubFile ?? void 0,
            allCategories: this.state.allCategories,
            onChange: this.onTagsChanged,
            onErrors: e => {
              this.setFormErrors({
                tags: e.tags,
                tagsV2: e.tagsV2
              });
            }
          }), this.isDesignFile() && jsx(e6, {
            fileKey: this.props.fileKey,
            viewerMode: metadata.viewerMode,
            isValidPrototype: this.props.validPrototype,
            showPrototypePublishedAsFileNotice: this.props.wasPrototypeRevertingToFile && this.isUniversalPosting(),
            onViewerModeChange: this.onViewerModeChange,
            onScalingOptionChange: this.onScalingOptionChange,
            dispatch: this.props.dispatch,
            dropdownShown: this.props.dropdownShown,
            scalingMode: metadata.scalingMode
          }), getFeatureFlags().cmty_hub_file_creator_policy && jsx(_$$A10, {
            defaultValue: this.state.unDebouncedCreatorPolicy,
            onChange: e => {
              let t = isStrippedHtmlEmpty(e) ? "" : e;
              this.setState({
                unDebouncedCreatorPolicy: t
              });
              this.inputDebounce("creatorPolicy", t);
              this.setFormErrors({
                creatorPolicy: Rj(e)
              });
            },
            resourceType: bD.HUB_FILE,
            error: n.creatorPolicy
          }), jsx(_$$A8, {
            showToSCheckbox: this.props.showToSCheckbox,
            onOrgMsaChange: this.onOrgMsaChange,
            blockPublishingOnToS: metadata.blockPublishingOnToS
          })]
        }), this.renderPricingSection(metadata), jsxs(_$$A6, {
          name: "advanced",
          title: getI18nString("community.publishing.advanced"),
          numErrors: $W(["supportContact", "publisherIds"], n),
          children: [jsx(_$$A1, {
            value: metadata.supportContact || "",
            onChange: e => {
              let t = e.currentTarget.value;
              this.inputDebounce("supportContact", t);
              this.setFormErrors({
                supportContact: al(this.props.isPaid, t)
              });
            },
            error: n.supportContact,
            required: this.props.isPaid
          }), jsx(eZ, {
            hubFile: this.props.hubFile,
            figFile: this.props.figFile,
            isEditHubFilePageMode: this.props.isEditHubFilePageMode,
            author: metadata.author,
            publishers: metadata.publishers,
            publisherSearchResults: this.publisherSearchResults,
            onChangeCocreators: e => {
              this.updatePublishingMetadata({
                publishers: e
              });
              this.setFormErrors({
                publisherIds: IZ(e.tokens.length) || void 0
              });
            },
            onChangeAuthor: this.onPublishingMetadataAuthorChange
          }), jsx(_$$A0, {
            isCommentsEnabled: !this.props.commentsDisabled,
            onChange: () => {
              this.updatePublishingMetadata({
                commentsSetting: this.props.commentsDisabled ? Ni.ENABLED : Ni.ALL_DISABLED
              });
            }
          }), jsx(_$$A17, {
            isPaid: this.props.isPaid,
            resourceType: bD.HUB_FILE
          })]
        })]
      }), jsx("div", {
        children: jsxs("div", {
          className: qr,
          children: [$W(tr, n) ? jsxs("div", {
            className: g()(PJ, YN),
            "data-testid": "publish-modal-footer-text",
            children: [jsx(_$$B, {
              svg: _$$A19
            }), renderI18nText("community.publish.fix_errors")]
          }) : jsx(eC, {
            getFooterProfileIdentifier: () => this.getFooterProfileIdentifier(metadata.author)
          }), jsxs("div", {
            className: GC,
            children: [jsx(_$$M, {
              disabled: a,
              onClick: this.onClose,
              children: this.isUniversalPosting() ? getI18nString("general.back") : getI18nString("general.cancel")
            }), a || this.state.isGeneratingThumbnail ? jsx(UC, {
              children: jsx(kt, {
                className: u1
              })
            }) : jsx(UC, {
              onClick: () => {
                trackEventAnalytics("community_publish_modal", {
                  userId: this.props.user.id,
                  resourceType: "hub_file",
                  resourceId: this.props.hubFile?.id,
                  isPaid: this.props.isPaid,
                  name: "primary_button_clicked",
                  productType: this.props.figFile.editor_type
                });
                this.submit();
              },
              disabled: metadata.blockPublishingOnToS || this.hasFormErrors(n),
              dataTestId: "hub-file-publish-modal-submit-button",
              children: this.getPrimaryButtonText()
            })]
          })]
        })
      })]
    });
  }
  getPricingDisabledMessage(e, t) {
    if (t && t.current_hub_file_version_id && !t.monetized_resource_metadata) return renderI18nText("community.seller.only_new_resources_can_be_sold_on_community");
    let i = jsx(CY, {
      href: "https://help.figma.com/hc/articles/12067637274519-About-selling-Community-resources",
      target: "_blank",
      trusted: !0,
      children: renderI18nText("general.learn_more")
    });
    return "org_id" in e.author ? this.props.org?.cmty_publish_as_user_enabled ? renderI18nText("community.seller.you_can_only_publish_paid_resources_from_a_personal_profile", {
      learnMoreLink: i
    }) : renderI18nText("community.seller.pricing_is_disabled_because_your_organization_does_not_allow", {
      learnMoreLink: i
    }) : "team_id" in e.author ? renderI18nText("community.seller.you_can_only_publish_paid_resources_from_a_personal_profile", {
      learnMoreLink: i
    }) : this.props.isFigFileExplicitOwner ? null : renderI18nText("community.seller.only_explicit_owner_can_sell");
  }
  renderPricingSection(e) {
    if (!this.props.user.can_sell_on_community || getFeatureFlags().cmty_expand_extension_m10n && !this.props.user.cmty_seller_capabilities?.includes(SourceType.FILE) || e.viewerMode === FTemplateCategoryType.SLIDE_TEMPLATE) return null;
    let t = this.props.hubFile;
    let i = !!t?.current_hub_file_version_id && !!t.monetized_resource_metadata;
    let n = this.getPricingDisabledMessage(e, this.props.hubFile);
    let a = this.props.isEditHubFilePageMode || i || !!n;
    let s = i ? getI18nString("community.seller.pricing_toggle_text_for_already_paid_resources") : void 0;
    return jsx(_$$A6, {
      name: "pricing",
      title: jsx(Wq, {}),
      titleContent: jsx(nu, {
        on: this.props.isPaid,
        disabled: a,
        disabledMessage: n,
        onChange: this.onPaidResourceSettingChange,
        tooltipText: s,
        toggleClassName: a ? Zx : void 0
      }),
      disabled: a,
      disabledMessage: n,
      defaultActive: this.props.isPaid,
      numErrors: $W(["price"], this.state.formErrors),
      children: jsx(eS, {
        figFile: this.props.figFile,
        hubFile: t,
        isPaid: this.props.isPaid,
        metadata: e,
        pagesList: this.props.pagesList,
        onPriceChange: e => {
          this.updatePublishingMetadata({
            price: e
          });
          this.setFormErrors({
            price: cp(this.props.isPaid, e)
          });
        },
        error: this.state.formErrors.price
      })
    });
  }
  isSlidePublish() {
    return this.props.publishingState.metadata.viewerMode === FTemplateCategoryType.SLIDE_TEMPLATE;
  }
  render() {
    let e = null;
    let t = !1;
    let i = this.isSlidePublish();
    let n = i && this.props.slidesPublishState === F4.PUBLISH_HUB_FILE_COMPLETED;
    if (2 === this.state.step && this.props.hubFile && this.props.publishingState.status.code === aP.SUCCESS && this.props.publisher && (!i || n)) {
      let {
        hubFile,
        fileKey,
        publisher
      } = this.props;
      let s = _$$D.Step.INFO;
      publisher && ("org_id" in publisher && publisher.org_id || "team_id" in publisher && publisher.team_id) && (s = _$$D.Step.TEAM_ORG_POST_PUBLISH_FLOW);
      e = jsx(td, {
        fileKey,
        hubFile,
        publisher,
        publishHubFile: this.publishHubFile,
        forceParentRender: this.forceRender,
        resourcePublishingStatusCode: this.props.publishingState.status.code,
        initialStep: s,
        isPaid: this.props.isPaid
      });
      t = !0;
    } else if (1 === this.state.step) {
      let {
        hubFile,
        fileKey,
        publisher
      } = this.props;
      let s = _$$D.Step.USER_PUBLISH_FLOW;
      publisher && ("org_id" in publisher && publisher.org_id || "team_id" in publisher && publisher.team_id) && (s = _$$D.Step.TEAM_ORG_POST_PUBLISH_FLOW);
      e = jsx(td, {
        fileKey,
        hubFile,
        publisher,
        publishHubFile: this.publishHubFile,
        onBack: () => {
          this.setState({
            step: 0
          });
        },
        forceParentRender: this.forceRender,
        resourcePublishingStatusCode: this.props.publishingState.status.code,
        initialStep: s,
        isPaid: this.props.isPaid
      });
      t = !0;
    } else e = this.renderForm();
    return jsx(fu, {
      name: _$$e3.COMMUNITY_HUB_FILE_PUBLISH_MODAL,
      properties: {
        entryPoint: this.props.entryPoint,
        fileKey: this.props.fileKey,
        hubFileId: this.props.hubFile?.id,
        isEditHubFilePageMode: this.props.isEditHubFilePageMode,
        userId: this.props.user.id
      },
      children: jsx(OJ, {
        title: this.props.isEditHubFilePageMode ? getI18nString("community.publishing.edit_file_page") : i ? getI18nString("community.publishing.publish_slide_deck_template") : getI18nString("community.publishing.publish_file"),
        minWidth: tn,
        maxWidth: tn,
        onClose: this.onClose,
        isCloseHidden: t,
        children: e
      })
    });
  }
}
ts.displayName = "HubFilePublishModal";
let to = connect((e, t) => {
  let {
    fileKey,
    isEditHubFilePageMode,
    isFullscreenOpen
  } = t;
  let a = t.hubFile;
  let s = a && a6(a);
  let o = getExplicitRoleForUserAndFile(fileKey, e);
  let l = o?.level === AccessLevelEnum.OWNER;
  let d = isEditHubFilePageMode ? !!s?.valid_prototype : t.entryPoint !== k2.UNIVERSAL_POSTING && PrototypingTsApi.firstPagePrototypeStatus() === PresentationValidationStatus.VALID;
  let u = e.publishingHubFiles[fileKey];
  u && u.metadata || (u = {
    status: oH(u),
    metadata: ow({
      ...getPermissionsState(e),
      currentUserOrgId: e.currentUserOrgId,
      figFilePublishedAsHubFile: e.figFilePublishedAsHubFile,
      hubFiles: e.hubFiles,
      authedActiveCommunityProfile: e.authedActiveCommunityProfile,
      authedProfilesById: e.authedProfilesById
    }, fileKey, isEditHubFilePageMode, isFullscreenOpen)
  });
  let p = EL(e);
  let m = p && e.orgById[p.id];
  let h = e.mirror?.appModel?.pagesList || [];
  let g = a && qA(e, a);
  let f = g && g.id in e.authedProfilesById && e.authedProfilesById[g.id] || null;
  return {
    pagesList: h,
    dropdownShown: e.dropdownShown,
    publishingState: u,
    orgEntity: p,
    org: m,
    user: e.user,
    hubFileVersion: s,
    isFigFileExplicitOwner: l,
    publisher: f,
    validPrototype: d,
    scalingMode: u.metadata.scalingMode,
    teams: e.teams,
    commentsDisabled: u.metadata.commentsSetting === Ni.ALL_DISABLED,
    authedProfilesById: e.authedProfilesById,
    showToSCheckbox: xw(e),
    wasPrototypeRevertingToFile: a?.viewer_mode === FTemplateCategoryType.PROTOTYPE && u.metadata.viewerMode !== FTemplateCategoryType.PROTOTYPE,
    isPaid: u.metadata.isPaid || !1
  };
}, (e, t) => ({
  createHubFile: t => {
    e(i9(t));
  },
  updateHubFile: (t, i) => {
    e(N4({
      payload: t,
      onSuccess: t => {
        e(hideModal());
        i();
      }
    }));
  },
  hideModal: () => {
    t.isEditHubFilePageMode || e(M3({
      view: ShareAction.INVITE
    }));
    e(popModalStack());
  },
  onPublishingMetadataChanged: (t, i) => {
    e(VS({
      id: t,
      metadata: i
    }));
  },
  clearPublishingState: () => {
    e(oO({
      id: t.fileKey
    }));
    e(bk({
      id: t.fileKey
    }));
  },
  hideDropdown: () => {
    e(oB());
  },
  dispatch: e
}))(ts);
let $$tl0 = registerModal(function (e) {
  let {
    Sprig
  } = useSprigWithSampling();
  let i = M4.useFile(e.fileKey).data;
  let n = useSelector(e => {
    if (!i) return null;
    let t = e.figFilePublishedAsHubFile[i.key];
    return t ? e.hubFiles[t] ?? null : null;
  });
  let a = _$$W(n?.id, vt.HUB_FILE);
  let o = useAtomWithSubscription(_g);
  let l = Xr(pz);
  return i ? _$$W2(i.editor_type) ? jsx(_$$T, {
    publishingEntryPoint: e.entryPoint,
    figFileKey: e.fileKey
  }) : jsx(to, {
    Sprig,
    figFile: i,
    hubFile: n,
    currentUserLikedHubFile: !!a.data?.[0],
    slidesPublishState: o,
    setLibraryPublishingMode: l,
    ...e
  }) : null;
}, "HubFilePublishModal", ModalSupportsBackground.YES);
(n || (n = {})).PublishModalSuccessScreen = function (e) {
  let t = useDispatch();
  let i = UP();
  let n = useSelector(t => e.hubFile && Np(t, {
    view: "communityHub",
    subView: "hubFile",
    hubFileId: e.hubFile.id
  }));
  let a = e.hubFile?.viewer_mode === FTemplateCategoryType.SLIDE_TEMPLATE;
  let o = selectUser();
  let {
    addCommunityProfileUser,
    setNextStep,
    takeStep,
    loading,
    step,
    nextStep
  } = _$$D.usePublishModalStateMachine({
    publisher: e.publisher,
    resource: e.hubFile,
    resourcePublishingStatusCode: e.resourcePublishingStatusCode,
    forceParentRender: e.forceParentRender,
    initialStep: e.initialStep
  });
  let h = () => {
    t(hideModal());
    t(oO({
      id: e.fileKey
    }));
    t(bk({
      id: e.fileKey
    }));
  };
  if (step === _$$D.Step.CHOOSE_PROFILE_CREATION_ROUTE_WITH_ACCOUNTS) return jsx(nn, {
    className: U5,
    isLoading: loading,
    secondaryButton: {
      text: getI18nString("community.publishing.create_new_profile"),
      onClick: () => {
        setNextStep(_$$D.Step.SET_PROFILE_HANDLE);
        e.publishHubFile();
      },
      spinner: loading && nextStep === _$$D.Step.SET_PROFILE_HANDLE,
      disabled: loading
    },
    primaryButton: {
      text: getI18nString("community.publishing.connect_existing_profile"),
      onClick: () => {
        setNextStep(_$$D.Step.CONNECT_PROFILES);
        e.publishHubFile();
      },
      spinner: loading && nextStep === _$$D.Step.CONNECT_PROFILES,
      disabled: loading
    },
    onBack: e.onBack
  });
  if (step === _$$D.Step.CHOOSE_PROFILE_CREATION_ROUTE_NO_ACCOUNTS) return jsx(nn, {
    className: U5,
    isLoading: loading,
    primaryButton: {
      text: getI18nString("community.publishing.create_new_profile"),
      onClick: () => {
        setNextStep(_$$D.Step.SET_PROFILE_HANDLE);
        e.publishHubFile();
      },
      spinner: loading,
      dataTestId: "hub-file-publish-create-new-profile"
    },
    onBack: e.onBack,
    withConnectedAccounts: !0
  });
  if (step === _$$D.Step.CONNECT_PROFILES) return jsx(_$$$, {
    onSubmit: i => {
      if (setNextStep(_$$D.Step.INFO), !i || !e.publisher) {
        t(VisualBellActions.enqueue({
          type: "profile-merge-error",
          message: getI18nString("community.publishing.unable_to_connect_profiles"),
          error: !0
        }));
        return;
      }
      addCommunityProfileUser({
        primaryUserId: i.id,
        secondaryUserId: o.id
      });
    },
    footerLeft: jsx(_$$M, {
      onClick: () => {
        takeStep(_$$D.Step.CHOOSE_PROFILE_CREATION_ROUTE_WITH_ACCOUNTS);
      },
      className: qw,
      disabled: loading,
      children: renderI18nText("general.back")
    }),
    profilesOnly: !0
  });
  {
    if (step === _$$D.Step.SET_PROFILE_HANDLE) return e.publisher ? jsx(Kp, {
      className: U5,
      onHandleSet: () => {
        takeStep(_$$D.Step.INFO);
      },
      publisher: e.publisher
    }) : jsx(Fragment, {});
    let s = e.isPaid && !zv(e.hubFile);
    return jsx(XT, {
      className: U5,
      title: s ? getI18nString("community.publishing.is_under_review.file") : getI18nString("community.publishing.congratulations"),
      body: jsxs(Fragment, {
        children: [s && jsx("p", {
          className: h_,
          children: renderI18nText("community.publishing.our_team_will_review")
        }), jsx("p", {
          className: h_,
          children: e.isPaid ? renderI18nText("community.publishing.paid_resource_success_info") : a ? renderI18nText("community.publishing.your_slides_file_will_soon_be_available_for_everyone") : renderI18nText("community.publishing.your_file_will_soon_be_available_for_everyone_no_remix")
        }), jsx("p", {
          className: h_,
          children: s ? renderI18nText("community.publishing.feel_free_to_edit_your_page.file") : a ? renderI18nText("community.publishing.help_people_discover_your_template") : renderI18nText("community.publishing.help_people_discover_your_file")
        }), e.hubFile && !e.isPaid ? jsx(_$$R, {
          author: Lj(e.hubFile),
          resourceType: vt.HUB_FILE,
          resourceURL: DV(e.hubFile),
          resourceId: e.hubFile.id,
          resourceName: qD(e.hubFile).name,
          disableHeader: !0
        }) : null]
      }),
      footerLeftSide: renderI18nText("community.publishing.review_our_community_guidelines", {
        communityGuidelinesLink: jsx(N_, {
          href: e.isPaid ? "https://www.figma.com/aup" : "https://help.figma.com/hc/articles/360038510573-Figma-Community-Guidelines",
          target: "_blank",
          trusted: !0,
          children: e.isPaid ? renderI18nText("community.publishing.acceptable_use_policy") : renderI18nText("community.publishing.community_guidelines")
        })
      }),
      primaryButton: {
        onClick: () => {
          n && (desktopAPIInstance && i && e.hubFile ? t(sf({
            view: "communityHub",
            subView: "hubFile",
            hubFileId: e.hubFile.id
          })) : customHistory.redirect(n, "_blank"), h());
        },
        text: getI18nString("community.publishing.view_page"),
        dataTestId: "hub-file-publish-view-page"
      },
      secondaryButton: {
        onClick: h,
        text: getI18nString("general.done"),
        dataTestId: "hub-file-publish-done"
      },
      headerImgSrc: buildUploadUrl("55cce76b49d5d5c5e62352d0d21ee8ce025eef38")
    });
  }
};
let td = n.PublishModalSuccessScreen;
export const F0 = $$tl0;