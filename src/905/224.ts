import { jsx } from "react/jsx-runtime";
import { wA } from "../vendor/514228";
import { throwTypeError } from "../figma_app/465776";
import { getFeatureFlags } from "../905/601108";
import { eD } from "../figma_app/876459";
import { Rs } from "../figma_app/288654";
import { x1 } from "../905/714362";
import { Us } from "../figma_app/637027";
import { t as _$$t, tx } from "../905/303541";
import { EK } from "../figma_app/396432";
import { dR, lk } from "../figma_app/109538";
import { I as _$$I } from "../905/641938";
import { Lo, Ce, to } from "../905/156213";
import { WX, Bq } from "../figma_app/482142";
import { c as _$$c } from "../905/370443";
import { VG } from "../905/389382";
import { q5 } from "../figma_app/516028";
import { FFileType, FOrganizationLevelType } from "../figma_app/191312";
import { kQI } from "../figma_app/43951";
import { WW, Wf, LF } from "../figma_app/345997";
import { vL, Bi, Pj } from "../905/652992";
import { oO, TN } from "../figma_app/831101";
import { ZN } from "../figma_app/630077";
import { wR } from "../figma_app/765689";
import { b as _$$b } from "../905/165519";
var $$n0;
(e => {
  e.useModalControls = function (e) {
    let t = wA();
    let i = () => {
      t(Lo());
    };
    let n = () => {
      t(Ce());
    };
    return {
      cancel: i,
      dispatch: t,
      startProUpgradeFlow: (r, a) => {
        if (e) {
          n();
          let i = oO({
            upsellSource: a,
            fallbackEntryPoint: TN.CONSUMPTION_MODAL
          });
          t(WX({
            teamId: e,
            openInNewTab: !eD,
            selectedView: {
              view: "team",
              teamId: e
            },
            entryPoint: i,
            ...(r ? {
              onBillingCompleteRedirectInfo: r
            } : {})
          }));
        } else {
          i();
          t(to({
            type: dR,
            data: {
              plan: _$$I.PRO,
              upsellSource: _$$b.UNSET,
              ...(r ? {
                onBillingCompleteRedirectInfo: r
              } : {})
            }
          }));
        }
      },
      startOrgUpgradeFlow: ({
        upsellSource: e
      }) => {
        n();
        let i = oO({
          upsellSource: e,
          fallbackEntryPoint: TN.CONSUMPTION_MODAL
        });
        t(Bq({
          openInNewTab: !0,
          upsellSource: e,
          entryPoint: i
        }));
      },
      startEnterpriseUpgradeFlow: e => {
        n();
        t(to({
          type: lk,
          data: {
            source: e
          }
        }));
      }
    };
  };
  let t = (e, t) => {
    switch (e) {
      case vL.FILE:
        return WW;
      case vL.FOLDER:
        return Wf;
      case vL.PAGE:
        return t ? LF[t] : LF[FFileType.DESIGN];
    }
  };
  function i(t, i, r) {
    switch (t) {
      case vL.FOLDER:
        return _$$t("consumption_paywalls.free_project_limit", {
          project_limit: e.getResourceLimit(vL.FOLDER, i)
        });
      case vL.FILE:
        return r ? _$$t("consumption_paywalls.campfire.starter_file_limit") : _$$t("consumption_paywalls.both_file_limits", {
          file_limit: e.getResourceLimit(vL.FILE, i)
        });
      case vL.PAGE:
        if (i === FFileType.WHITEBOARD) return _$$t("consumption_paywalls.free_page_limit_figjam", {
          page_limit: e.getResourceLimit(vL.PAGE, i)
        });
        return _$$t("consumption_paywalls.free_page_limit", {
          page_limit: e.getResourceLimit(vL.PAGE, FFileType.DESIGN)
        });
      case Bi.AUDIO:
        return _$$t("consumption_paywalls.text_comments");
      case Bi.OPEN_SESSION:
        return _$$t("consumption_paywalls.open_session.no_open_session");
      case Bi.PROJECT_TRANSFER:
        return _$$t("consumption_paywalls.project_transfer.no_project_transfers");
      case Bi.PROTOTYPE_SHARING:
        return i === FFileType.SLIDES ? _$$t("consumption_paywalls.presentation_sharing.no_sharing_presentation_separately") : _$$t("consumption_paywalls.prototype_sharing.no_sharing_prototypes_separately");
      case Bi.PASSWORD_PROTECTION:
        return _$$t("consumption_paywalls.password_protection.no_password_protection");
      case Bi.VERSION_HISTORY:
        return _$$t("consumption_paywalls.version_history.no_version_history_past_30_days");
      case Bi.VIDEOS_IN_PROTOTYPES:
      case Bi.VIDEOS_IN_SLIDES:
      case Bi.VIDEOS_IN_BUZZ:
      case Bi.VIDEOS_IN_WHITEBOARD:
        return _$$t("consumption_paywalls.videos_in_prototypes.image_fills_only");
      case Bi.VOTING:
        return _$$t("consumption_paywalls.text_comments");
      case Bi.TEAM_LIBRARY:
        return _$$t("consumption_paywalls.shared_styles");
      case Bi.VIEW_ONLY_PROJECT:
      case Bi.INVITE_ONLY_PROJECT:
        return _$$t("consumption_paywalls.no_control_over_project_permissions");
      case Bi.PUBLISH_STYLES:
      case Pj.TEAM_CREATION_SPEED_BUMP:
        return "";
      case Bi.PROTOTYPING_MULTIPLE_ACTIONS:
      case Bi.PROTOTYPING_VARIABLES:
      case Bi.PROTOTYPING_CONDITIONAL_ACTIONS:
        return _$$t("consumption_paywalls.interactive_prototypes");
      case Bi.VARIABLES_MODES:
        return _$$t("consumption_paywalls.variables.1_mode");
      case Bi.PLUGIN_ANALYTICS:
      case Bi.WIDGET_ANALYTICS:
        return "";
      case Bi.SHARED_FONTS:
        return n(t, i);
      case Bi.DEV_MODE:
      case Bi.DEV_MODE_ADMIN_SETTINGS:
        return "";
      case Bi.CONNECTED_PROJECTS:
        return _$$t("consumption_paywalls.connected_projects.starter_plan_text");
      case Bi.ADVANCED_SHAPES:
        return _$$t("consumption_paywalls.advanced_diagramming.basic_shapes_only");
      case Bi.ORG:
        return "";
      case Bi.FIGMAKE:
        return _$$t("consumption_paywalls.figmake_limit");
      case Bi.PROMPT_LIMIT:
      case Bi.PUBLISH_SITE:
      case Bi.CONNECT_DOMAIN:
        return _$$t("consumption_paywalls.publish_site.no_publishing");
      case Bi.CODE_CHAT_LIBRARY_IMPORT:
        return _$$t("consumption_paywalls.code_chat_library_import.no_design_libraries");
      case Bi.MCP:
        return _$$t("consumption_paywalls.mcp.no_mcp_access");
      default:
        throwTypeError(t);
    }
  }
  (e => {
    e[e.STARTER = 0] = "STARTER";
    e[e.PRO = 1] = "PRO";
    e[e.ORG = 2] = "ORG";
    e[e.ENTERPRISE = 3] = "ENTERPRISE";
  })(e.Plan || (e.Plan = {}));
  e.getResourceLimit = (e, i) => t(e, i);
  e.getStarterPlanFeatureText = i;
  let n = (e, t) => {
    switch (e) {
      case vL.FOLDER:
        return _$$t("consumption_paywalls.unlimited_projects");
      case vL.FILE:
        return _$$t("consumption_paywalls.unlimited_files");
      case vL.PAGE:
        if (t === FFileType.WHITEBOARD) return _$$t("consumption_paywalls.unlimited_pages_in_figjam_files");
        return _$$t("consumption_paywalls.unlimited_pages_in_design_files");
      case Bi.VOTING:
        return _$$t("consumption_paywalls.voting");
      case Bi.AUDIO:
        return _$$t("consumption_paywalls.audio_conversations");
      case Bi.OPEN_SESSION:
        return _$$t("consumption_paywalls.open_session.host_open_sessions");
      case Bi.PROJECT_TRANSFER:
        return _$$t("consumption_paywalls.project_transfer.transfer_projects");
      case Bi.PROTOTYPE_SHARING:
        return t === FFileType.SLIDES ? _$$t("consumption_paywalls.presentation_sharing.share_presentation_separately") : _$$t("consumption_paywalls.prototype_sharing.share_prototypes_separately");
      case Bi.PASSWORD_PROTECTION:
        return _$$t("consumption_paywalls.password_protection.password_protection");
      case Bi.VERSION_HISTORY:
        return _$$t("consumption_paywalls.version_history.unlimited_version_history");
      case Bi.VIDEOS_IN_PROTOTYPES:
      case Bi.VIDEOS_IN_SLIDES:
      case Bi.VIDEOS_IN_BUZZ:
      case Bi.VIDEOS_IN_WHITEBOARD:
        return _$$t("consumption_paywalls.videos_in_prototypes.video_and_image_fills");
      case Bi.TEAM_LIBRARY:
        return _$$t("consumption_paywalls.shared_team_libraries");
      case Bi.VIEW_ONLY_PROJECT:
      case Bi.INVITE_ONLY_PROJECT:
        return _$$t("consumption_paywalls.full_control_over_project_permissions");
      case Bi.VARIABLES_MODES:
        return _$$t("consumption_paywalls.variables.4_modes");
      case Bi.PUBLISH_STYLES:
      case Pj.TEAM_CREATION_SPEED_BUMP:
        return "";
      case Bi.PROTOTYPING_MULTIPLE_ACTIONS:
        return _$$t("consumption_paywalls.multiple_action_prototypes");
      case Bi.PROTOTYPING_VARIABLES:
        return _$$t("consumption_paywalls.variables_in_prototypes");
      case Bi.PROTOTYPING_CONDITIONAL_ACTIONS:
        return _$$t("consumption_paywalls.conditional_prototypes");
      case Bi.PLUGIN_ANALYTICS:
      case Bi.WIDGET_ANALYTICS:
        return "";
      case Bi.SHARED_FONTS:
        return _$$t("consumption_paywalls.shared_fonts.locally_installed_fonts");
      case Bi.DEV_MODE:
        return _$$t("consumption_paywalls.dev_mode");
      case Bi.DEV_MODE_ADMIN_SETTINGS:
        return _$$t("consumption_paywalls.dev_mode_admin_settings");
      case Bi.CONNECTED_PROJECTS:
        return _$$t("consumption_paywalls.connected_projects.feature_text");
      case Bi.ADVANCED_SHAPES:
        return _$$t("consumption_paywalls.advanced_diagramming.basic_and_advanced_shapes");
      case Bi.ORG:
        return "";
      case Bi.FIGMAKE:
        return _$$t("consumption_paywalls.access_to_figmake");
      case Bi.PROMPT_LIMIT:
      case Bi.PUBLISH_SITE:
      case Bi.CONNECT_DOMAIN:
        return getFeatureFlags().ai_ga && t ? _$$t("consumption_paywalls.ai_ga.publishing_current_product", {
          productName: VG(wR(t))
        }) : _$$t("consumption_paywalls.publish_site.publishing");
      case Bi.MCP:
        return _$$t("consumption_paywalls.mcp.access_to_mcp");
      case Bi.CODE_CHAT_LIBRARY_IMPORT:
        return _$$t("consumption_paywalls.code_chat_library_import.bring_styling_context");
      default:
        throwTypeError(e);
    }
  };
  let k = (e, t) => {
    switch (e) {
      case Bi.VARIABLES_MODES:
        return _$$t("consumption_paywalls.variables.4_modes");
      case vL.FOLDER:
      case vL.FILE:
      case vL.PAGE:
      case Bi.VOTING:
      case Bi.AUDIO:
      case Bi.OPEN_SESSION:
      case Bi.PROJECT_TRANSFER:
      case Bi.PROTOTYPE_SHARING:
      case Bi.PASSWORD_PROTECTION:
      case Bi.VERSION_HISTORY:
      case Bi.VIDEOS_IN_PROTOTYPES:
      case Bi.VIDEOS_IN_SLIDES:
      case Bi.VIDEOS_IN_BUZZ:
      case Bi.VIDEOS_IN_WHITEBOARD:
      case Bi.TEAM_LIBRARY:
      case Bi.VIEW_ONLY_PROJECT:
      case Bi.INVITE_ONLY_PROJECT:
      case Bi.PUBLISH_STYLES:
      case Pj.TEAM_CREATION_SPEED_BUMP:
      case Bi.PROTOTYPING_MULTIPLE_ACTIONS:
      case Bi.PROTOTYPING_VARIABLES:
      case Bi.PROTOTYPING_CONDITIONAL_ACTIONS:
      case Bi.PLUGIN_ANALYTICS:
      case Bi.WIDGET_ANALYTICS:
      case Bi.DEV_MODE:
      case Bi.DEV_MODE_ADMIN_SETTINGS:
      case Bi.ADVANCED_SHAPES:
      case Bi.CONNECTED_PROJECTS:
      case Bi.FIGMAKE:
      case Bi.PROMPT_LIMIT:
      case Bi.PUBLISH_SITE:
      case Bi.CONNECT_DOMAIN:
      case Bi.MCP:
      case Bi.CODE_CHAT_LIBRARY_IMPORT:
        return n(e, t);
      case Bi.SHARED_FONTS:
        return _$$t("consumption_paywalls.shared_fonts.shared_fonts_and_libraries");
      case Bi.ORG:
        return "";
      default:
        throwTypeError(e);
    }
  };
  let R = (e, t) => {
    switch (e) {
      case Bi.VARIABLES_MODES:
        return _$$t("consumption_paywalls.variables.40_modes");
      case vL.FOLDER:
      case vL.FILE:
      case vL.PAGE:
      case Bi.VOTING:
      case Bi.AUDIO:
      case Bi.OPEN_SESSION:
      case Bi.PROJECT_TRANSFER:
      case Bi.PROTOTYPE_SHARING:
      case Bi.PASSWORD_PROTECTION:
      case Bi.VERSION_HISTORY:
      case Bi.VIDEOS_IN_PROTOTYPES:
      case Bi.VIDEOS_IN_SLIDES:
      case Bi.VIDEOS_IN_BUZZ:
      case Bi.VIDEOS_IN_WHITEBOARD:
      case Bi.TEAM_LIBRARY:
      case Bi.VIEW_ONLY_PROJECT:
      case Bi.INVITE_ONLY_PROJECT:
      case Bi.PUBLISH_STYLES:
      case Pj.TEAM_CREATION_SPEED_BUMP:
      case Bi.PROTOTYPING_MULTIPLE_ACTIONS:
      case Bi.PROTOTYPING_VARIABLES:
      case Bi.PROTOTYPING_CONDITIONAL_ACTIONS:
      case Bi.PLUGIN_ANALYTICS:
      case Bi.SHARED_FONTS:
      case Bi.WIDGET_ANALYTICS:
      case Bi.DEV_MODE:
      case Bi.DEV_MODE_ADMIN_SETTINGS:
      case Bi.CONNECTED_PROJECTS:
      case Bi.ADVANCED_SHAPES:
      case Bi.ORG:
      case Bi.FIGMAKE:
      case Bi.PROMPT_LIMIT:
      case Bi.PUBLISH_SITE:
      case Bi.CONNECT_DOMAIN:
      case Bi.MCP:
      case Bi.CODE_CHAT_LIBRARY_IMPORT:
        return k(e, t);
      default:
        throwTypeError(e);
    }
  };
  let N = (e, t) => 2 === t ? e === Bi.PLUGIN_ANALYTICS ? [{
    text: _$$t("consumption_paywalls.manage_plugin_access")
  }] : [{
    text: _$$t("consumption_paywalls.manage_widget_access")
  }] : 3 === t ? e === Bi.PLUGIN_ANALYTICS ? [{
    text: _$$t("consumption_paywalls.manage_plugin_access_by_workspace")
  }, {
    text: _$$t("consumption_paywalls.plugin_usage_analytics")
  }] : [{
    text: _$$t("consumption_paywalls.manage_widget_access_by_workspace")
  }, {
    text: _$$t("consumption_paywalls.widget_usage_analytics")
  }] : [];
  let P = e => 2 === e ? [{
    text: _$$t("consumption_paywalls.manage_plugin_access")
  }] : 3 === e ? [{
    text: _$$t("consumption_paywalls.manage_plugin_access_by_workspace")
  }, {
    text: _$$t("consumption_paywalls.plugin_usage_analytics")
  }, {
    text: _$$t("consumption_paywalls.dev_mode_customize_experience")
  }] : [];
  e.getPaywallFeatureList = function (e, t, i, n, r) {
    if (Object.values(vL).includes(e)) return M(e, t, n, r);
    if (e === Bi.VARIABLES_MODES) return L(t, i);
    if (e === Bi.PLUGIN_ANALYTICS || e === Bi.WIDGET_ANALYTICS) return N(e, t);
    if (e === Bi.DEV_MODE_ADMIN_SETTINGS) return P(t);
    if (e === Bi.SHARED_FONTS) return D(e, t, r);
    if (e === Bi.ORG) return O(t);
    if (Object.values(Bi).includes(e)) return U(e, t, n, r);else if (e === Pj.TEAM_CREATION_SPEED_BUMP) return F(t, n, r);
    return [];
  };
  let O = e => 1 === e ? [{
    text: _$$t("consumption_paywalls.unlimited_files.feature_text")
  }, {
    text: _$$t("consumption_paywalls.unlimited_pages.feature_text")
  }, {
    text: _$$t("consumption_paywalls.unlimited_projects.feature_text")
  }] : 2 === e ? [{
    text: _$$t("plan_comparison.campfire.org.feature.unlimited_teams")
  }, {
    text: _$$t("plan_comparison.campfire.org.feature.branching")
  }, {
    text: _$$t("plan_comparison.campfire.org.feature.security")
  }, {
    text: _$$t("plan_comparison.campfire.org.feature.scim")
  }, {
    text: _$$t("plan_comparison.campfire.org.feature.customizations")
  }] : [];
  let D = (e, t, r) => 0 === t ? [{
    text: i(e, FFileType.DESIGN, r)
  }] : 1 === t ? [{
    text: n(e, FFileType.DESIGN)
  }] : 2 === t ? [{
    text: k(e, FFileType.DESIGN)
  }, {
    text: _$$t("consumption_paywalls.branching.feature_text")
  }, {
    text: _$$t("consumption_paywalls.design_system_analytics.feature_text")
  }] : [];
  let L = (e, t, a) => 0 === e ? [{
    text: i(vL.FILE, FFileType.DESIGN, a),
    disabled: B(i(vL.FILE, FFileType.DESIGN, a))
  }, {
    text: i(Bi.VARIABLES_MODES, FFileType.DESIGN, a)
  }] : 1 === e ? e === t ? [{
    text: n(Bi.VARIABLES_MODES, FFileType.DESIGN)
  }, {
    text: _$$t("consumption_paywalls.shared_team_libraries")
  }] : [{
    text: n(vL.FILE, FFileType.DESIGN)
  }, {
    text: n(Bi.VARIABLES_MODES, FFileType.DESIGN)
  }, {
    text: _$$t("consumption_paywalls.shared_team_libraries")
  }] : 2 === e ? [{
    text: k(Bi.VARIABLES_MODES, FFileType.DESIGN)
  }, {
    text: _$$t("consumption_paywalls.shared_team_libraries")
  }] : 3 === e ? [{
    text: R(Bi.VARIABLES_MODES, FFileType.DESIGN)
  }, {
    text: _$$t("consumption_paywalls.variables.rest_api"),
    hoverText: tx("consumption_paywalls.variables.rest_api_hover_text", {
      learnMore: jsx(Us, {
        trusted: !0,
        href: "https://www.figma.com/developers/api#variables",
        target: "_blank",
        children: tx("consumption_paywalls.learn_more")
      })
    })
  }, {
    text: _$$t("consumption_paywalls.workspaces")
  }] : void throwTypeError(e);
  let F = (t, i, n) => 0 === t ? [{
    text: _$$t("consumption_paywalls.free_project_limit", {
      project_limit: e.getResourceLimit(vL.FOLDER, i)
    })
  }, n ? {
    text: _$$t("consumption_paywalls.campfire.starter_file_limit")
  } : {
    text: _$$t("consumption_paywalls.both_file_limits", {
      file_limit: e.getResourceLimit(vL.FILE, i)
    })
  }, {
    text: _$$t("consumption_paywalls.free_page_limit", {
      page_limit: e.getResourceLimit(vL.PAGE, i)
    })
  }] : [{
    text: _$$t("consumption_paywalls.unlimited_projects")
  }, {
    text: _$$t("consumption_paywalls.unlimited_files")
  }, {
    text: _$$t("consumption_paywalls.unlimited_pages_in_design_files")
  }];
  let M = (e, t, r, a) => {
    let s = Object.values(vL).filter(t => t !== e);
    switch (t) {
      case 0:
        return j(e, s, i, r, a).map(e => ({
          text: e,
          disabled: B(e)
        }));
      case 1:
        return j(e, s, n, r).map(e => ({
          text: e
        }));
      case 2:
        return j(e, s, k, r).map(e => ({
          text: e
        }));
      case 3:
        return j(e, s, R, r).map(e => ({
          text: e
        }));
    }
  };
  let j = (e, t, i, n, r) => [i(e, n, r)].concat(t.map(e => i(e, n, r)));
  let U = (t, r, a, s) => {
    let l;
    let d = a === FFileType.WHITEBOARD ? _$$t("consumption_paywalls.editor_type.figjam") : _$$t("consumption_paywalls.editor_type.figma_design");
    if (0 === r) switch (t) {
      case Bi.VOTING:
      case Bi.PUBLISH_STYLES:
        l = [_$$t("consumption_paywalls.free_editor_type_files_and_project_limit", {
          editor_type: d
        }), _$$t("consumption_paywalls.free_page_limit_per_editor_type_file", {
          page_limit: e.getResourceLimit(vL.PAGE, a),
          editor_type: d
        })];
        break;
      case Bi.TEAM_LIBRARY:
        l = [_$$t("consumption_paywalls.free_design_files_and_project_limit"), _$$t("consumption_paywalls.free_page_limit", {
          page_limit: e.getResourceLimit(vL.PAGE, a)
        })];
        break;
      case Bi.PROTOTYPING_MULTIPLE_ACTIONS:
      case Bi.PROTOTYPING_VARIABLES:
      case Bi.PROTOTYPING_CONDITIONAL_ACTIONS:
        l = [i(t, a, s)];
        break;
      case Bi.DEV_MODE:
        l = [_$$t("consumption_paywalls.free_design_files_and_project_limit"), _$$t("consumption_paywalls.free_page_limit", {
          page_limit: e.getResourceLimit(vL.PAGE, a)
        })];
        break;
      case Bi.CONNECTED_PROJECTS:
        l = [i(t, a, s), _$$t("consumption_paywalls.campfire.starter_file_limit"), _$$t("consumption_paywalls.free_page_limit", {
          page_limit: e.getResourceLimit(vL.PAGE, a)
        })];
        break;
      case Bi.FIGMAKE:
        l = [i(t, a, s)];
        break;
      case Bi.CODE_CHAT_LIBRARY_IMPORT:
        l = [_$$t("consumption_paywalls.code_chat_library_import.no_design_libraries"), _$$t("consumption_paywalls.three_files_and_one_project_per_team")];
        break;
      case Bi.PUBLISH_SITE:
      case Bi.CONNECT_DOMAIN:
        l = [getFeatureFlags().ai_ga && a === FFileType.FIGMAKE ? _$$t("consumption_paywalls.ai_ga.publish_make_community") : _$$t("consumption_paywalls.publish_site.no_publishing"), _$$t("consumption_paywalls.three_files_and_one_project_per_team")];
        break;
      default:
        l = [i(t, a, s), _$$t("consumption_paywalls.free_editor_type_files_and_project_limit", {
          editor_type: d
        }), _$$t("consumption_paywalls.free_page_limit_per_editor_type_file", {
          page_limit: e.getResourceLimit(vL.PAGE, a),
          editor_type: d
        })];
    } else switch (t) {
      case Bi.PUBLISH_STYLES:
        l = [_$$t("consumption_paywalls.unlimited_files_and_projects"), _$$t("consumption_paywalls.unlimited_pages_in_design_files"), _$$t("consumption_paywalls.shared_team_libraries")];
        break;
      case Bi.PROTOTYPING_MULTIPLE_ACTIONS:
      case Bi.PROTOTYPING_VARIABLES:
      case Bi.PROTOTYPING_CONDITIONAL_ACTIONS:
        l = [_$$t("consumption_paywalls.multiple_action_prototypes"), _$$t("consumption_paywalls.variables_in_prototypes"), _$$t("consumption_paywalls.conditional_prototypes")];
        break;
      case Bi.CONNECTED_PROJECTS:
        l = [n(t, a), _$$t("consumption_paywalls.unlimited_files"), _$$t("consumption_paywalls.unlimited_pages_in_design_files")];
        break;
      case Bi.FIGMAKE:
        l = [n(t, a)];
        break;
      case Bi.PUBLISH_SITE:
        l = [getFeatureFlags().ai_ga && a ? _$$t("consumption_paywalls.ai_ga.publishing_current_product", {
          productName: VG(wR(a))
        }) : _$$t("consumption_paywalls.publish_site.publishing"), getFeatureFlags().ai_ga ? _$$t("plan_comparison.feature.ai_credits", {
          aiCredits: EK
        }) : _$$t("consumption_paywalls.publish_site.higher_credit_limits"), _$$t("consumption_paywalls.unlimited_files_and_projects")];
        break;
      case Bi.CODE_CHAT_LIBRARY_IMPORT:
        l = [_$$t("consumption_paywalls.code_chat_library_import.bring_styling_context"), getFeatureFlags().ai_ga ? _$$t("plan_comparison.feature.ai_credits", {
          aiCredits: EK
        }) : _$$t("consumption_paywalls.publish_site.higher_credit_limits"), _$$t("consumption_paywalls.unlimited_files_and_projects")];
        break;
      default:
        l = [n(t, a), _$$t("consumption_paywalls.unlimited_files_and_projects"), _$$t("consumption_paywalls.unlimited_pages_in_editor_type_files", {
          editor_type: d
        })];
    }
    return l.map(e => ({
      text: e,
      disabled: B(e)
    }));
  };
  function B(e) {
    switch (e) {
      case _$$t("consumption_paywalls.password_protection.no_password_protection"):
      case _$$t("consumption_paywalls.open_session.no_open_session"):
      case _$$t("consumption_paywalls.project_transfer.no_project_transfers"):
      case _$$t("consumption_paywalls.presentation_sharing.no_sharing_presentation_separately"):
      case _$$t("consumption_paywalls.prototype_sharing.no_sharing_prototypes_separately"):
      case _$$t("consumption_paywalls.version_history.no_version_history_past_30_days"):
      case _$$t("consumption_paywalls.figmake_limit"):
      case _$$t("consumption_paywalls.publish_site.no_publishing"):
      case _$$t("consumption_paywalls.mcp.no_mcp_access"):
      case _$$t("consumption_paywalls.code_chat_library_import.no_design_libraries"):
        return !0;
      default:
        return !1;
    }
  }
  e.getModalTitle = function (e, t, i, n) {
    switch (e) {
      case vL.FILE:
        if (t === ZN.MOVE_FILES) return i ? _$$t("consumption_paywalls.want_to_add_these_files_to_your_team") : _$$t("consumption_paywalls_want_to_add_this_file_to_your_team");
        if (t === ZN.RESTORE_FILES) return i ? _$$t("consumption_paywalls.want_to_restore_these_files") : _$$t("consumption_paywalls.want_to_restore_this_file");
        if (t === ZN.DUPLICATE_FILES) return i ? _$$t("consumption_paywalls.want_to_duplicate_these_files") : _$$t("consumption_paywalls.want_to_duplicate_this_file");
        if (t === ZN.IMPORT_FILES) return i ? _$$t("consumption_paywalls.want_to_import_these_files") : _$$t("consumption_paywalls.want_to_import_this_file");
        return _$$t("consumption_paywalls.need_more_files");
      case vL.FOLDER:
        if (t === ZN.MOVE_FOLDER) return _$$t("consumption_paywalls.want_to_move_this_project");
        return _$$t("consumption_paywalls.need_more_projects");
      case vL.PAGE:
        return _$$t("consumption_paywalls.need_more_pages");
      case Bi.AUDIO:
        return _$$t("consumption_paywalls.talk_it_through_with_audio");
      case Bi.OPEN_SESSION:
        return _$$t("consumption_paywalls.open_session.title");
      case Bi.PROJECT_TRANSFER:
        return _$$t("consumption_paywalls.project_transfer.title");
      case Bi.PROTOTYPE_SHARING:
        return n === FFileType.SLIDES ? _$$t("consumption_paywalls.presentation_sharing.title") : _$$t("consumption_paywalls.prototype_sharing.title");
      case Bi.PASSWORD_PROTECTION:
        return _$$t("consumption_paywalls.password_protection.title");
      case Bi.VERSION_HISTORY:
        return _$$t("consumption_paywalls.version_history.title");
      case Bi.VIDEOS_IN_PROTOTYPES:
        return _$$t("consumption_paywalls.videos_in_prototypes.title");
      case Bi.VIDEOS_IN_SLIDES:
        return _$$t("consumption_paywalls.videos_in_slides.title");
      case Bi.VIDEOS_IN_BUZZ:
        return _$$t("consumption_paywalls.videos_in_buzz.title");
      case Bi.VIDEOS_IN_WHITEBOARD:
        return _$$t("consumption_paywalls.videos_in_whiteboard.title");
      case Bi.VOTING:
        return _$$t("consumption_paywalls.voting_title");
      case Bi.TEAM_LIBRARY:
        return _$$t("consumption_paywalls.ready_to_build_a_team_library");
      case Bi.VIEW_ONLY_PROJECT:
      case Bi.INVITE_ONLY_PROJECT:
        return _$$t("consumption_paywalls.need_more_privacy_for_this_project");
      case Pj.TEAM_CREATION_SPEED_BUMP:
        return _$$t("consumption_paywalls.looking_for_unlimited_projects");
      case Bi.PUBLISH_STYLES:
        return _$$t("consumption_paywalls.need_to_publish_styles");
      case Bi.PROTOTYPING_MULTIPLE_ACTIONS:
      case Bi.PROTOTYPING_VARIABLES:
      case Bi.PROTOTYPING_CONDITIONAL_ACTIONS:
        return _$$t("consumption_paywalls.need_to_access_prototyping_features");
      case Bi.VARIABLES_MODES:
        return t === ZN.PUBLISH_MORE_VARIABLE_MODES ? _$$t("consumption_paywalls.variables_modes.need_to_publish_variables_for_your_team") : _$$t("consumption_paywalls.variables_modes.need_more_modes");
      case Bi.PLUGIN_ANALYTICS:
        return _$$t("consumption_paywalls.whos_using_plugin");
      case Bi.WIDGET_ANALYTICS:
        return _$$t("consumption_paywalls.whos_using_widget");
      case Bi.SHARED_FONTS:
        return _$$t("consumption_paywalls.shared_fonts.modal_title");
      case Bi.DEV_MODE:
        return _$$t("consumption_paywalls.dev_mode_modal_title");
      case Bi.DEV_MODE_ADMIN_SETTINGS:
        return _$$t("consumption_paywalls.dev_mode_admin_settings_modal_title");
      case Bi.CONNECTED_PROJECTS:
        return _$$t("consumption_paywalls.connected_projects.title");
      case Bi.ADVANCED_SHAPES:
        return _$$t("consumption_paywalls.advanced_diagramming.need_more_advanced_shapes");
      case Bi.ORG:
        return _$$t("org_upgrade.single_team.get_more_out_of_figma_as_you_grow");
      case Bi.FIGMAKE:
        return _$$t("consumption_paywalls.upgrade_your_team_to_use_figmake");
      case Bi.PROMPT_LIMIT:
        return _$$t("consumption_paywalls.credit_limit.title");
      case Bi.PUBLISH_SITE:
        return _$$t("consumption_paywalls.publish_site.title");
      case Bi.CONNECT_DOMAIN:
        return _$$t("consumption_paywalls.connect_domain.title");
      case Bi.MCP:
        return _$$t("consumption_paywalls.mcp.title");
      case Bi.CODE_CHAT_LIBRARY_IMPORT:
        return _$$t("consumption_paywalls.code_chat_library_import.title");
      default:
        throwTypeError(e);
    }
  };
  e.getModalLearnMoreLink = function (e) {
    switch (e) {
      case Bi.FIGMAKE:
        return jsx(Us, {
          trusted: !0,
          target: "_blank",
          href: "https://help.figma.com/hc/articles/31722591905559-Figma-Make-FAQs",
          children: _$$t("general.learn_more")
        });
      case vL.FILE:
      case vL.PAGE:
        if (getFeatureFlags().sts_starter_enabled) return jsx(Us, {
          trusted: !0,
          target: "_blank",
          href: "https://help.figma.com/hc/articles/33543548184215",
          children: _$$t("consumption_paywalls.learn_more.global_file_limit")
        });
        return null;
      default:
        return null;
    }
  };
  e.getModalSubtitle = function (t, i, n, r) {
    switch (t) {
      case vL.FILE:
        return _$$t("consumption_paywalls.the_starter_plan_only_comes_with_file_limit_files", {
          file_limit: e.getResourceLimit(t, r)
        });
      case vL.FOLDER:
        return _$$t("consumption_paywalls.the_starter_plan_only_comes_with_project_limit_projects", {
          project_limit: e.getResourceLimit(t, r)
        });
      case vL.PAGE:
        if (r === FFileType.WHITEBOARD) return _$$t("consumption_paywalls.upgrade_your_plan_to_get_unlimited_pages_in_all_your_figjam_files");
        return _$$t("consumption_paywalls.the_starter_plan_only_comes_with_page_limit_pages", {
          page_limit: e.getResourceLimit(t, r)
        });
      case Bi.VOTING:
        return _$$t("consumption_paywalls.upgrade_to_use_voting_description");
      case Bi.AUDIO:
        return _$$t("consumption_paywalls.upgrade_to_have_quick_easy_conversations_right_from_your_file");
      case Bi.OPEN_SESSION:
        return _$$t("consumption_paywalls.open_session.subtitle");
      case Bi.PROJECT_TRANSFER:
        return _$$t("consumption_paywalls.project_transfer.subtitle");
      case Bi.PROTOTYPE_SHARING:
        return r === FFileType.SLIDES ? _$$t("consumption_paywalls.presentation_sharing.subtitle") : _$$t("consumption_paywalls.prototype_sharing.subtitle");
      case Bi.PASSWORD_PROTECTION:
        return _$$t("consumption_paywalls.password_protection.subtitle");
      case Bi.VERSION_HISTORY:
        return _$$t("consumption_paywalls.version_history.subtitle");
      case Bi.VIDEOS_IN_PROTOTYPES:
      case Bi.VIDEOS_IN_SLIDES:
      case Bi.VIDEOS_IN_BUZZ:
      case Bi.VIDEOS_IN_WHITEBOARD:
        return _$$t("consumption_paywalls.videos_in_prototypes.subtitle");
      case Bi.TEAM_LIBRARY:
        return _$$t("consumption_paywalls.plan_does_not_support_team_libraries");
      case Bi.VIEW_ONLY_PROJECT:
      case Bi.INVITE_ONLY_PROJECT:
        return _$$t("consumption_paywalls.on_your_plan_projects_are_public_to_the_whole_team_professional_lets_you_choose_who_sees_what");
      case Pj.TEAM_CREATION_SPEED_BUMP:
        return _$$t("consumption_paywalls.your_plan_only_comes_with_project_limit_projects", {
          project_limit: e.getResourceLimit(vL.FOLDER, r)
        });
      case Bi.PUBLISH_STYLES:
        return _$$t("consumption_paywalls.your_plan_does_not_support_publishing_library_assets");
      case Bi.PROTOTYPING_MULTIPLE_ACTIONS:
        return _$$t("consumption_paywalls.you_cannot_create_multiple_actions_with_your_current_plan");
      case Bi.PROTOTYPING_VARIABLES:
        return _$$t("consumption_paywalls.you_cannot_use_variables_in_prototyping_with_your_current_plan");
      case Bi.PROTOTYPING_CONDITIONAL_ACTIONS:
        return _$$t("consumption_paywalls.you_cannot_use_conditional_prototyping_with_your_current_plan");
      case Bi.VARIABLES_MODES:
        if (i === ZN.PUBLISH_MORE_VARIABLE_MODES) return _$$t("consumption_paywalls.variables_modes.subtitle_publishing");
        if (0 === n) return _$$t("consumption_paywalls.variables_modes.subtitle_starter");
        if (1 === n) return _$$t("consumption_paywalls.variables_modes.subtitle_pro");
        if (2 === n) return _$$t("consumption_paywalls.variables_modes.subtitle_org");
        x1("designSystems", "Attempted to show upsell modal when current plan is enterprise");
        return "";
      case Bi.PLUGIN_ANALYTICS:
        return _$$t("consumption_paywalls.upgrade_plugin_analytics");
      case Bi.WIDGET_ANALYTICS:
        return _$$t("consumption_paywalls.upgrade_widget_analytics");
      case Bi.SHARED_FONTS:
        return _$$t("consumption_paywalls.shared_fonts.modal_description");
      case Bi.DEV_MODE:
        return _$$t("consumption_paywalls.plan_does_not_support_dev_mode");
      case Bi.DEV_MODE_ADMIN_SETTINGS:
        return _$$t("consumption_paywalls.dev_mode_admin_settings_modal_subtitle");
      case Bi.CONNECTED_PROJECTS:
        return _$$t("consumption_paywalls.connected_projects.subtitle");
      case Bi.ADVANCED_SHAPES:
        return _$$t("consumption_paywalls.advanced_diagramming.upgrade_advanced_shapes");
      case Bi.ORG:
        return "";
      case Bi.FIGMAKE:
        return _$$t("consumption_paywalls.starter_teams_cannot_access_figmake");
      case Bi.PROMPT_LIMIT:
        return _$$t("consumption_paywalls.prompt_limit.subtitle");
      case Bi.PUBLISH_SITE:
        return getFeatureFlags().ai_ga && r === FFileType.FIGMAKE ? _$$t("consumption_paywalls.publish_site.ai_ga.subtitle") : _$$t("consumption_paywalls.publish_site.subtitle");
      case Bi.CONNECT_DOMAIN:
        return _$$t("consumption_paywalls.connect_domain.subtitle");
      case Bi.MCP:
        return _$$t("consumption_paywalls.mcp.subtitle");
      case Bi.CODE_CHAT_LIBRARY_IMPORT:
        return _$$t("consumption_paywalls.code_chat_library_import.subtitle");
      default:
        throwTypeError(t);
    }
  };
  e.getModalTrackingName = function (e, t) {
    let i = Object.values(Pj).includes(e);
    let n = Object.values(Bi).includes(e);
    let r = Object.values(vL).includes(e);
    if (i) return e === Pj.TEAM_CREATION_SPEED_BUMP ? "Team creation speed bump upsell modal" : throwTypeError(e);
    if (n) switch (e) {
      case Bi.TEAM_LIBRARY:
        return "Team Library Paywall Modal";
      case Bi.AUDIO:
        return "Audio Paywall Modal";
      case Bi.VIEW_ONLY_PROJECT:
      case Bi.INVITE_ONLY_PROJECT:
        return "Project Permissions Paywall Modal";
      case Bi.VOTING:
        return "Voting Paywall Modal";
      case Bi.OPEN_SESSION:
        return "Open Session Paywall Modal";
      case Bi.PROJECT_TRANSFER:
        return "Project Transfer Paywall Modal";
      case Bi.PROTOTYPE_SHARING:
        return "Prototype Sharing Paywall Modal";
      case Bi.PASSWORD_PROTECTION:
        return "Password Protection Paywall Modal";
      case Bi.VERSION_HISTORY:
        return "Version History Paywall Modal";
      case Bi.VIDEOS_IN_PROTOTYPES:
        return "Videos in Prototypes Paywall Modal";
      case Bi.VIDEOS_IN_SLIDES:
        return "Videos in Slides Paywall Modal";
      case Bi.VIDEOS_IN_BUZZ:
        return "Videos in Buzz Paywall Modal";
      case Bi.VIDEOS_IN_WHITEBOARD:
        return "Videos in FigJam Paywall Modal";
      case Bi.PUBLISH_STYLES:
        return "Style Publishing Paywall Modal";
      case Bi.PROTOTYPING_MULTIPLE_ACTIONS:
      case Bi.PROTOTYPING_VARIABLES:
      case Bi.PROTOTYPING_CONDITIONAL_ACTIONS:
        return "Advanced Prototyping Paywall Modal";
      case Bi.VARIABLES_MODES:
        return "Variables Modes Paywall Modal";
      case Bi.PLUGIN_ANALYTICS:
        return "Plugin Analytics Paywall Modal";
      case Bi.WIDGET_ANALYTICS:
        return "Widget Analytics Paywall Modal";
      case Bi.SHARED_FONTS:
        return "Shared Fonts Paywall Modal";
      case Bi.DEV_MODE:
        return "Dev Mode Paywall Modal";
      case Bi.DEV_MODE_ADMIN_SETTINGS:
        return "Dev Mode Admin Settings Paywall Modal";
      case Bi.CONNECTED_PROJECTS:
        return "Connected Projects Paywall Modal";
      case Bi.ADVANCED_SHAPES:
        return "Advanced Shapes Paywall Modal";
      case Bi.ORG:
        return "Pro To Org Modal";
      case Bi.FIGMAKE:
        return "Figma Make Paywall Modal";
      case Bi.PROMPT_LIMIT:
        return "Prompt Limit Paywall Modal";
      case Bi.PUBLISH_SITE:
        return "Publish Site Paywall Modal";
      case Bi.CONNECT_DOMAIN:
        return "Connect Domain Paywall Modal";
      case Bi.MCP:
        return "Figma MCP Paywall Modal";
      case Bi.CODE_CHAT_LIBRARY_IMPORT:
        return "Code Chat Library Import Paywall Modal";
      default:
        return throwTypeError(e);
    } else if (r && t) switch (t) {
      case ZN.CREATE_FILE:
      case ZN.CREATE_FOLDER:
      case ZN.CREATE_PAGE:
      case ZN.MOVE_FILES:
      case ZN.DUPLICATE_PAGE:
        return "Consumption Paywall Modal: Plans Pricing";
      case ZN.RESTORE_FILES:
      case ZN.DUPLICATE_FILES:
      case ZN.IMPORT_FILES:
      case ZN.MOVE_FOLDER:
        return "Consumption Paywall Modal: Pricing Clarity V2";
      case ZN.CREATE_FILE_FROM_DROPDOWN:
        return "Consumption Paywall Modal: Hit File Limit From Dropdown";
    }
    return `${e} ${t} Paywall Modal`;
  };
  e.getModalTrackingProductType = function (e) {
    if (e) switch (e) {
      case FFileType.DESIGN:
        return "design";
      case FFileType.WHITEBOARD:
        return "figjam";
      case FFileType.SLIDES:
        return "slides";
      case FFileType.COOPER:
        return "cooper";
      case FFileType.SITES:
        return "sites";
      case FFileType.FIGMAKE:
        return "figmake";
      default:
        return throwTypeError(e);
    }
  };
  e.isNegativeText = B;
  e.getCtaTrackingDescriptor = function ({
    plan: e
  }) {
    return 3 === e ? _$$c.CONTACT_SALES : 2 === e ? _$$c.UPGRADE_TO_ORGANIZATION : 1 === e ? _$$c.UPGRADE_TO_PROFESSIONAL : null;
  };
  e.useShouldHideStarterCtaForOpenFile = function () {
    let e = q5();
    let t = e?.teamId;
    let i = Rs(kQI({
      id: t ?? ""
    }), {
      enabled: !!t
    });
    return "loaded" === i.status && !i.data?.team?.hasPermission;
  };
  e.consumptionPlanToPlanType = function (e) {
    switch (e) {
      case 0:
      case 1:
        return FOrganizationLevelType.TEAM;
      case 2:
      case 3:
        return FOrganizationLevelType.ORG;
    }
  };
})($$n0 || ($$n0 = {}));
export const F = $$n0;