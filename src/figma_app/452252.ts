import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { createRef, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ServiceCategories as _$$e } from "../905/165054";
import { ButtonPrimitive } from "../905/632989";
import { LinkPrimitive } from "../figma_app/496441";
import { getFeatureFlags } from "../905/601108";
import { useAtomWithSubscription, Xr } from "../figma_app/27355";
import p from "classnames";
import { getAtomMutate } from "../figma_app/566371";
import { RecordingPureComponent, handleMouseEvent, generateRecordingKey, useHandleMouseEvent } from "../figma_app/878298";
import { reportError } from "../905/11";
import { _C } from "../figma_app/709893";
import { renderI18nText, getI18nString } from "../905/303541";
import { N as _$$N } from "../905/438674";
import { F_ } from "../905/748636";
import { b as _$$b } from "../figma_app/47801";
import { W as _$$W } from "../905/95038";
import { renameFileOptimistic } from "../figma_app/78808";
import { vg, Wk } from "../figma_app/91703";
import { NN } from "../905/466026";
import { lu, b_, oE } from "../figma_app/840917";
import { getDisplayNameAlt } from "../905/760074";
import { hL } from "../905/697795";
import { hx } from "../figma_app/290668";
import { selectCurrentFile, selectOpenFile, useCurrentFile } from "../figma_app/516028";
import { selectCurrentUser } from "../905/372672";
import { o3 as _$$o, nt } from "../905/226610";
import { mapFileTypeToEditorType } from "../figma_app/53721";
import { KindEnum } from "../905/129884";
import { l as _$$l, O as _$$O } from "../figma_app/471586";
import { V1 } from "../figma_app/834392";
import { A as _$$A } from "../905/79603";
import { DF } from "../figma_app/146384";
import { getProjectUrl } from "../figma_app/528509";
import { selectPermissionsState } from "../figma_app/212807";
export let $$n6;
var _ = p;
let I = "CONNECTED_PROJECTS_FILE_EDITOR_ONBOARDING_KEY";
function S({
  resourceConnection: e,
  projectUrl: t
}) {
  let r = jsx(_$$N, {
    href: "https://help.figma.com/hc/articles/30124855491863-Guide-to-connected-projects",
    newTab: !0,
    children: renderI18nText("resource_connection.connected_project_link")
  });
  let n = renderI18nText("resource_connection.onboarding.this_file_is_in_your_team_s_connected_project", {
    hostPlanName: e.hostPlanName,
    connectedProject: r,
    connectedPlanName: e.connectedPlanName
  });
  return jsx(_$$b, {
    projectUrl: t,
    description: n,
    title: renderI18nText("resource_connection.onboarding.the_perks_of_being_a_connected_file"),
    trackingContext: "Connected Projects File Editor Onboarding Modal",
    onboardingKey: I,
    arrowPosition: F_.LEFT_TITLE
  });
}
let $$H1 = "FULLSCREEN_FILENAME_CHEVRON";
let $$z2 = "FULLSCREEN_FILENAME_DROPDOWN";
class W extends RecordingPureComponent {
  constructor(e) {
    super(e);
    this.startRenaming = handleMouseEvent(this, "click", () => {
      this.props.canRename && this.props.user && this.props.dispatch(vg());
    });
    this.submitFileName = e => {
      this.props.dispatch(Wk());
      this.props.onRename(e);
    };
    this.cancelFileName = () => {
      this.props.dispatch(Wk());
    };
    this.nameRef = createRef();
  }
  renderButton() {
    let e = _C({
      textRef: this.nameRef,
      text: this.props.name
    });
    let t = getI18nString("fullscreen.filename_view.file_input_title.aria_label", {
      fileName: this.props.name
    });
    return jsx(ButtonPrimitive, {
      className: _()("filename_view--title--6TS7L ellipsis--ellipsis--Tjyfa", {
        "filename_view--signedIn--kbu48": !!this.props.user
      }),
      onClick: this.startRenaming,
      ref: this.nameRef,
      htmlAttributes: {
        "data-tooltip": e ? this.props.name : void 0,
        "data-tooltip-type": KindEnum.TEXT,
        "data-testid": this.props.dataTestId || "filename",
        onKeyDown: e => hx({
          e,
          onClickHandler: this.startRenaming
        })
      },
      "aria-label": t,
      children: this.props.name
    });
  }
  render() {
    return this.props.isRenaming ? jsx(_$$A, {
      className: "filename_view--pageTitleInput--NaN5r ellipsis--ellipsis--Tjyfa",
      placeholderValue: this.props.name,
      submit: this.submitFileName,
      cancel: this.cancelFileName,
      recordingKey: generateRecordingKey(this.props, "input"),
      maxLength: this.props.maxLength,
      inputId: "filename",
      hiddenLabelText: getI18nString("fullscreen.filename_view.file_input_title")
    }) : this.renderButton();
  }
}
export function $$K5(e) {
  return jsx(W, {
    ...e,
    name: getDisplayNameAlt(e.repo),
    onRename: t => {
      e.dispatch(NN({
        repo: e.repo,
        name: t
      }));
    },
    isUI3: !0
  });
}
export function $$Y3(e) {
  let t = useDispatch();
  let r = selectCurrentUser();
  let n = selectCurrentFile();
  let a = useSelector(e => e.isRenaming);
  let o = useAtomWithSubscription(lu);
  let l = !!n && DF(n, r);
  let d = null == n && null != o ? {
    type: "new-autosave-file",
    newAutosaveFile: o
  } : {
    type: "open-file",
    openFile: n,
    canRename: l
  };
  return jsx($, {
    dispatch: t,
    user: r,
    renamableFile: d,
    isRenaming: a,
    recordingKey: e.recordingKey
  });
}
function $(e) {
  let t;
  let r;
  let n;
  let s = getAtomMutate(b_);
  let {
    renamableFile
  } = e;
  "open-file" === renamableFile.type ? (t = renamableFile.canRename, r = renamableFile.openFile?.name) : (t = !0, r = renamableFile.newAutosaveFile.name, n = renamableFile.newAutosaveFile.editorType);
  let d = "new-autosave-file" === renamableFile.type;
  useEffect(() => {
    d && r && n && hL(r, mapFileTypeToEditorType(n));
  }, [d, r, n]);
  return jsx(W, {
    ...e,
    name: r || getI18nString("fullscreen.filename_view.title_placeholder"),
    canRename: t,
    onRename: t => {
      "new-autosave-file" === renamableFile.type ? s({
        fileKey: renamableFile.newAutosaveFile.fileKey,
        name: t,
        source: oE.EDITOR
      }) : renamableFile.openFile ? e.dispatch(renameFileOptimistic({
        file: renamableFile.openFile,
        name: t
      })) : reportError(_$$e.UNOWNED, Error("Tried renaming but file does not exist"));
    },
    isUI3: !0,
    maxLength: 100
  });
}
W.displayName = "EditableName";
export let $$X0 = "Filename chevron clicked";
export function $$q4({
  openFile: e,
  user: t
}) {
  let r = function (e, t) {
    if (!e?.project) return "";
    let r = e.project;
    return r.path ? r.path : r.id === t?.personal_drafts_folder_id ? getI18nString("fullscreen.filename_view.drafts_to_move") : getI18nString("fullscreen.filename_view.drafts");
  }(e, t);
  let n = r.length > 25 ? r : void 0;
  let o = function () {
    let e = useSelector(selectOpenFile);
    let t = selectPermissionsState();
    let r = useSelector(e => e.isOpenFileLoadedFromLiveGraph);
    return useMemo(() => {
      let n = !!e?.project;
      if (e && e.folderId && n) return getProjectUrl(e.folderId, e.parentOrgId, e.teamId, t, !!e.project?.team?.canView, "toolbar_workspace_button.useProjectUrl", r);
    }, [e, t, r]);
  }();
  let l = _$$o(nt.interopFiles);
  let p = Xr(V1);
  let _ = e?.project?.activeProjectResourceConnections?.[0];
  let h = useCurrentFile();
  let g = h?.ownerRole?.userId === t?.id;
  let f = !e?.teamId && !e?.parentOrgId && g;
  let y = getFeatureFlags().dtm_deprecation_pre_migration_onboarding && f;
  let b = !!_ && jsxs(Fragment, {
    children: [jsx(_$$W, {
      hostPlanName: _.hostPlanName,
      connectedPlanName: _.connectedPlanName,
      dataOnboardingKey: I
    }), jsx(S, {
      resourceConnection: _,
      projectUrl: o
    })]
  });
  let T = useHandleMouseEvent("folder-name-link", "click", e => {
    l && (e?.preventDefault(), p(e => !e));
  });
  return jsxs("span", {
    className: r ? "filename_view--folder--lb-Dm" : "filename_view--folderMissing--2b61S filename_view--folder--lb-Dm",
    title: n,
    children: [o ? jsx(LinkPrimitive, {
      htmlAttributes: {
        "data-testid": "folder-name-link"
      },
      className: "filename_view--folderName--ELUh- ellipsis--ellipsis--Tjyfa",
      "aria-label": r,
      href: o,
      newTab: !0,
      onClick: T,
      "data-onboarding-key": _$$l,
      children: r
    }) : jsx("div", {
      className: "filename_view--folderNameMissingUrl---UP6E ellipsis--ellipsis--Tjyfa",
      children: r
    }), b, y && jsx(_$$O, {
      isOwner: g
    })]
  });
}
export const nu = $$X0;
export const O0 = $$H1;
export const eg = $$z2;
export const o3 = $$Y3;
export const ur = $$q4;
export const IS = $$K5;
export const Lh = $$n6;