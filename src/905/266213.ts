import { jsx } from "react/jsx-runtime";
import { connect } from "react-redux";
import { IK } from "../905/521428";
import { useAtomWithSubscription } from "../figma_app/27355";
import { RecordingPureComponent, handleMouseEvent } from "../figma_app/878298";
import { renderI18nText } from "../905/303541";
import { showModalHandler } from "../905/156213";
import { isBranchAlt } from "../905/760074";
import { fA, qN, $c, Iy, p9 } from "../figma_app/803787";
import { LibraryPublishStatusEnum, PublishStatusEnum } from "../figma_app/633080";
import { bj, E4, m3 } from "../905/66449";
import { dD } from "../905/519113";
import { $3 } from "../905/946937";
class f extends RecordingPureComponent {
  constructor() {
    super(...arguments);
    this.showPublishModal = () => {
      this.props.dispatch(showModalHandler({
        type: dD,
        data: {
          entrypoint: this.props.entryPoint,
          libraryModalSessionId: this.props.libraryModalSessionId
        }
      }));
    };
    this.showUpsellModal = () => {
      let e = this.props.openFile?.teamId;
      let t = e ? this.props.teams[e] : void 0;
      this.props.dispatch(showModalHandler({
        type: $3,
        data: {
          team: t || null,
          afterFileMove: this.showPublishModal
        }
      }));
    };
    this.showModal = handleMouseEvent(this, "click", () => {
      this.props.canPublishComponents ? this.showPublishModal() : this.showUpsellModal();
    });
    this.stopPropagation = e => e.stopPropagation();
  }
  render() {
    if (!this.props.openFile || isBranchAlt(this.props.openFile)) return null;
    if (this.props.library.publishProgress.state !== LibraryPublishStatusEnum.NONE) return jsx(IK, {
      variant: "secondary",
      disabled: !0,
      children: this.props.library.publishProgress.publishType === PublishStatusEnum.UNPUBLISH ? renderI18nText("design_systems.libraries_modal.unpublishing") : renderI18nText("design_systems.libraries_modal.publishing")
    });
    let e = this.props.currentFileIsPublished;
    let t = this.props.currentFileHasLocalAssets;
    let i = this.props.currentFileHasChangesToPublish;
    return e ? t || i ? jsx(bj, {
      elementRef: this.props.buttonRef,
      kbArgs: this.props.kbArgs,
      children: jsx(IK, {
        variant: "primary",
        disabled: this.props.isPublishingModalDisabled,
        onClick: this.showModal,
        htmlAttributes: {
          onMouseDown: this.stopPropagation
        },
        ref: this.props.buttonRef,
        children: renderI18nText("design_systems.libraries_modal.publish")
      })
    }) : this.props.publishedState : t ? jsx(bj, {
      elementRef: this.props.buttonRef,
      kbArgs: this.props.kbArgs,
      children: jsx(IK, {
        variant: "primary",
        disabled: this.props.isPublishingModalDisabled,
        onClick: this.showModal,
        htmlAttributes: {
          onMouseDown: this.stopPropagation
        },
        ref: this.props.buttonRef,
        children: renderI18nText("design_systems.libraries_modal.publish")
      })
    }) : this.props.emptyState;
  }
}
f.displayName = "PublishButton";
export let $$_0 = connect(e => ({
  library: e.library,
  teams: e.teams,
  canPublishComponents: fA(e),
  openFile: e.openFile
}))(function (e) {
  let {
    ref,
    kbArgs
  } = E4({
    path: [m3.TabBodySection.Footer],
    column: 2
  });
  let r = useAtomWithSubscription(qN);
  let a = useAtomWithSubscription($c);
  let o = useAtomWithSubscription(Iy(void 0));
  let l = useAtomWithSubscription(p9);
  return jsx(f, {
    buttonRef: ref,
    kbArgs,
    currentFileIsPublished: r,
    currentFileHasLocalAssets: a,
    currentFileHasChangesToPublish: o,
    isPublishingModalDisabled: !l,
    ...e
  });
});
export const I = $$_0;