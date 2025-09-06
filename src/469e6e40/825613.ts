import { jsx, jsxs } from "react/jsx-runtime";
import { defaultLanguage } from "../905/816253";
import { isNotNullish } from "../figma_app/95419";
import { ServiceCategories as _$$e } from "../905/165054";
import { getFeatureFlags } from "../905/601108";
import { $$default } from "../vendor/73080";
import { tT } from "../905/663269";
import { A as _$$A } from "../905/920142";
import { qr } from "../figma_app/827447";
import { reportError } from "../905/11";
import { getI18nString, renderI18nText } from "../905/303541";
import { getI18nState } from "../figma_app/363242";
import { Tm } from "../figma_app/599327";
import { d as _$$d } from "../469e6e40/490120";
import { UV } from "../figma_app/297957";
import { ud, Gu } from "../905/513035";
import { Ye } from "../905/332483";
import { f2 } from "../figma_app/217457";
import { Te, px } from "../figma_app/765689";
import { FAccessLevelType, FVisibilityType, FFileType, FApprovalMethodType, FPlanFeatureType, FOrganizationLevelType } from "../figma_app/191312";
import { W3 } from "../figma_app/336853";
import { z5, $K, q9, Db } from "../figma_app/12796";
import { v as _$$v } from "../905/124421";
import { t as _$$t2 } from "../figma_app/326667";
import { U as _$$U } from "../figma_app/565016";
import { CT } from "../figma_app/736948";
import { E as _$$E } from "../figma_app/126651";
import { e6 } from "../905/557142";
import { $q } from "../figma_app/482728";
import { r as _$$r } from "../469e6e40/505264";
import { Hj } from "../905/682977";
import { p3 } from "../figma_app/588582";
import { T as _$$T } from "../figma_app/257703";
let y = {
  [ud.EXPERT]: {
    displayName: () => getI18nString("general.bundle.expert")
  },
  [ud.DEVELOPER]: {
    displayName: () => getI18nString("general.bundle.developer")
  },
  [ud.COLLABORATOR]: {
    displayName: () => getI18nString("general.bundle.collaborator")
  },
  [ud.CONTENT]: {
    displayName: () => getI18nString("general.bundle.content")
  }
};
let M = (e, t, a) => a ? e && t ? getI18nString("activity_log.event.library_setting_all_files_org_setting") : t ? getI18nString("activity_log.event.library_setting_figjam_files_org_setting") : e ? getI18nString("activity_log.event.library_setting_figma_files_org_setting") : getI18nString("activity_log.event.library_setting_off_org_setting") : e && t ? getI18nString("activity_log.event.library_setting_all_files") : t ? getI18nString("activity_log.event.library_setting_figjam_files") : e ? getI18nString("activity_log.event.library_setting_figma_files") : getI18nString("activity_log.event.library_setting_off");
function P({
  log: e
}) {
  let t = M(e.metadata.new_figma_enabled, e.metadata.new_figjam_enabled);
  return null === e.metadata.old_figma_enabled ? jsx("span", {
    children: renderI18nText("activity_log.event.org_new_library_setting", {
      libraryName: jsx("b", {
        children: e.metadata.library_file_name
      }),
      orgName: jsx("b", {
        children: e.metadata.org_name
      }),
      librarySetting: t
    })
  }) : jsx("span", {
    children: renderI18nText("activity_log.event.org_changed_library_setting", {
      libraryName: jsx("b", {
        children: e.metadata.library_file_name
      }),
      orgName: jsx("b", {
        children: e.metadata.org_name
      }),
      oldLibrarySetting: M(e.metadata.old_figma_enabled, e.metadata.old_figjam_enabled),
      newLibrarySetting: t
    })
  });
}
function U({
  log: e
}) {
  return jsx("span", {
    children: renderI18nText("activity_log.event.org_library_approved", {
      libraryName: jsx("b", {
        children: e.metadata.library_file_name
      }),
      orgName: jsx("b", {
        children: e.metadata.org_name
      })
    })
  });
}
function F({
  log: e
}) {
  return jsx("span", {
    children: renderI18nText("activity_log.event.org_library_unapproved", {
      libraryName: jsx("b", {
        children: e.metadata.library_file_name
      }),
      orgName: jsx("b", {
        children: e.metadata.org_name
      })
    })
  });
}
function q({
  log: e
}) {
  return jsx("span", {
    children: renderI18nText("activity_log.event.workspace_library_approved", {
      libraryName: jsx("b", {
        children: e.metadata.library_file_name
      }),
      workspaceName: jsx("b", {
        children: e.metadata.workspace_name
      })
    })
  });
}
function $({
  log: e
}) {
  return jsx("span", {
    children: renderI18nText("activity_log.event.workspace_library_unapproved", {
      libraryName: jsx("b", {
        children: e.metadata.library_file_name
      }),
      workspaceName: jsx("b", {
        children: e.metadata.workspace_name
      })
    })
  });
}
function B({
  log: e
}) {
  if (null === e.metadata.old_use_org_settings) return jsx("span", {
    children: renderI18nText("activity_log.event.workspace_new_library_setting_off", {
      libraryName: jsx("b", {
        children: e.metadata.library_file_name
      }),
      workspaceName: jsx("b", {
        children: e.metadata.workspace_name
      })
    })
  });
  let t = M(e.metadata.new_figma_enabled, e.metadata.new_figjam_enabled, e.metadata.new_use_org_settings);
  let a = M(e.metadata.old_figma_enabled, e.metadata.old_figjam_enabled, e.metadata.old_use_org_settings);
  return jsx("span", {
    children: renderI18nText("activity_log.event.workspace_changed_library_setting", {
      libraryName: jsx("b", {
        children: e.metadata.library_file_name
      }),
      workspaceName: jsx("b", {
        children: e.metadata.workspace_name
      }),
      oldLibrarySetting: a,
      newLibrarySetting: t
    })
  });
}
function G({
  log: e
}) {
  return jsx(B, {
    log: e
  });
}
function V({
  log: e
}) {
  return jsx("span", {
    children: renderI18nText("activity_log.event.workspace_admins_add", {
      adminNames: jsx("b", {
        children: jsx(_$$T, {
          children: e.metadata.new_admin_names.map(e => jsx("span", {
            children: e
          }, e))
        })
      }),
      numAdmins: e.metadata.new_admin_names?.length ?? 0,
      workspaceName: jsx("b", {
        children: e.metadata.name
      })
    })
  });
}
function W({
  log: e
}) {
  return jsx("span", {
    children: renderI18nText("activity_log.event.workspace_admins_remove.v2", {
      adminNames: jsx("b", {
        children: jsx(_$$T, {
          children: e.metadata.removed_admin_names.map(e => jsx("span", {
            children: e
          }, e))
        })
      }),
      numAdmins: e.metadata.removed_admin_names?.length ?? 0,
      workspaceName: jsx("b", {
        children: e.metadata.name
      })
    })
  });
}
function H({
  log: e
}) {
  return jsx("span", {
    children: renderI18nText("activity_log.event.workspace_create", {
      workspaceName: jsx("b", {
        children: e.metadata.name
      })
    })
  });
}
function Y({
  log: e
}) {
  return jsx("span", {
    children: renderI18nText("activity_log.event.workspace_delete", {
      workspaceName: jsx("b", {
        children: e.metadata.name
      })
    })
  });
}
function J({
  log: e
}) {
  return jsx("span", {
    children: renderI18nText("activity_log.event.workspace_rename", {
      workspaceName: jsx("b", {
        children: e.metadata.old_name
      }),
      newName: jsx("b", {
        children: e.metadata.name
      })
    })
  });
}
function K({
  log: e
}) {
  return jsx("span", {
    children: renderI18nText("activity_log.event.workspace_members_add", {
      memberEmails: jsx("b", {
        children: jsx(_$$T, {
          children: e.metadata.new_member_emails.map(e => jsx("span", {
            children: e
          }, e))
        })
      }),
      numMembers: e.metadata.new_member_emails.length,
      workspaceName: jsx("b", {
        children: e.metadata.name
      })
    })
  });
}
function X({
  log: e
}) {
  return jsx("span", {
    children: renderI18nText("activity_log.event.workspace_members_remove", {
      memberEmails: jsx("b", {
        children: jsx(_$$T, {
          children: e.metadata.removed_member_emails.map(e => jsx("span", {
            children: e
          }, e))
        })
      }),
      numMembers: e.metadata.removed_member_emails.length,
      workspaceName: jsx("b", {
        children: e.metadata.name
      })
    })
  });
}
function Q({
  log: e
}) {
  return jsx("span", {
    children: renderI18nText("activity_log.event.workspace_member_add", {
      memberEmail: jsx("b", {
        children: e.metadata.user_email
      }),
      workspaceName: jsx("b", {
        children: e.metadata.workspace_name
      })
    })
  });
}
function Z({
  log: e
}) {
  return jsx("span", {
    children: renderI18nText("activity_log.event.workspace_member_remove", {
      memberEmail: jsx("b", {
        children: e.metadata.user_email
      }),
      workspaceName: jsx("b", {
        children: e.metadata.workspace_name
      })
    })
  });
}
function ee({
  log: e
}) {
  return jsx("span", {
    children: renderI18nText("activity_log.event.license_group_membership_self_select", {
      workspaceName: jsx("b", {
        children: e.metadata.workspace_name
      })
    })
  });
}
function et({
  log: e
}) {
  let t = e.metadata.workspace_name;
  let a = e.metadata.old_workspace_name;
  return t ? jsxs("span", {
    children: [!a && renderI18nText("activity_log.teams.added_team_to_workspace", {
      teamName: jsx("b", {
        children: e.metadata.team_name
      }),
      newWorkspaceName: jsx("b", {
        children: t
      })
    }), a && jsx("span", {
      children: renderI18nText("activity_log.teams.added_team_to_workspace_and_removed_from_old_workspace", {
        teamName: jsx("b", {
          children: e.metadata.team_name
        }),
        newWorkspaceName: jsx("b", {
          children: t
        }),
        oldWorkspaceName: jsx("b", {
          children: a
        })
      })
    })]
  }) : jsx("span", {
    children: renderI18nText("activity_log.teams.removed_team_from_workspace", {
      teamName: jsx("b", {
        children: e.metadata.team_name
      }),
      oldWorkspaceName: jsx("b", {
        children: a
      })
    })
  });
}
function ea({
  log: e
}) {
  let t = e.metadata.old_org_access === FAccessLevelType.PUBLIC ? "visible" : "hidden";
  let a = e.metadata.new_org_access === FAccessLevelType.PUBLIC ? "visible" : "hidden";
  return jsx("span", {
    children: renderI18nText("activity_log.event.workspace_visibility_setting_changed", {
      workspaceName: jsx("b", {
        children: e.metadata.name
      }),
      oldOrgAccess: jsx("b", {
        children: t
      }),
      newOrgAccess: jsx("b", {
        children: a
      })
    })
  });
}
function en({
  log: e
}) {
  return e.metadata.is_billing_group ? jsx("span", {
    children: renderI18nText("activity_log.event.billing_group_admins_add", {
      adminNames: jsx("b", {
        children: jsx(_$$T, {
          children: e.metadata.new_admin_names.map(e => jsx("span", {
            children: e
          }, e))
        })
      }),
      numAdmins: e.metadata.new_admin_names?.length ?? 0,
      billingGroupName: jsx("b", {
        children: e.metadata.name
      })
    })
  }) : jsx(V, {
    log: e
  });
}
function es({
  log: e
}) {
  return e.metadata.is_billing_group ? jsx("span", {
    children: renderI18nText("activity_log.event.billing_group_admins_remove.v2", {
      adminNames: jsx("b", {
        children: jsx(_$$T, {
          children: e.metadata.removed_admin_names.map(e => jsx("span", {
            children: e
          }, e))
        })
      }),
      numAdmins: e.metadata.removed_admin_names?.length ?? 0,
      billingGroupName: jsx("b", {
        children: e.metadata.name
      })
    })
  }) : jsx(W, {
    log: e
  });
}
function ei({
  log: e
}) {
  return e.metadata.is_billing_group ? e.metadata.admins ? jsx("span", {
    children: renderI18nText("activity_log.event.billing_group_create_with_admins", {
      billingGroupName: jsx("b", {
        children: e.metadata.name
      }),
      adminNames: jsx("b", {
        children: jsx(_$$T, {
          children: e.metadata.admins.map(e => jsx("span", {
            children: e
          }, e))
        })
      }),
      numAdmins: e.metadata.admins?.length ?? 0
    })
  }) : jsx("span", {
    children: renderI18nText("activity_log.event.billing_group_create", {
      billingGroupName: jsx("b", {
        children: e.metadata.name
      })
    })
  }) : e.metadata.admins ? jsx("span", {
    children: renderI18nText("activity_log.event.license_group_create_with_admins", {
      workspaceName: jsx("b", {
        children: e.metadata.name
      }),
      adminNames: jsx("b", {
        children: jsx(_$$T, {
          children: e.metadata.admins.map(e => jsx("span", {
            children: e
          }, e))
        })
      }),
      numAdmins: e.metadata.admins?.length ?? 0
    })
  }) : jsx(H, {
    log: e
  });
}
function er({
  log: e
}) {
  return e.metadata.is_billing_group ? jsx("span", {
    children: renderI18nText("activity_log.event.billing_group_delete", {
      billingGroupName: jsx("b", {
        children: e.metadata.name
      })
    })
  }) : jsx(Y, {
    log: e
  });
}
function el({
  log: e
}) {
  return e.metadata.is_billing_group ? jsx("span", {
    children: renderI18nText("activity_log.event.billing_group_rename", {
      billingGroupName: jsx("b", {
        children: e.metadata.old_name
      }),
      newName: jsx("b", {
        children: e.metadata.name
      })
    })
  }) : jsx(J, {
    log: e
  });
}
function eo({
  log: e
}) {
  return e.metadata.is_billing_group ? jsx("span", {
    children: renderI18nText("activity_log.event.billing_group_membership_change", {
      userEmail: jsx("b", {
        children: e.metadata.user_email
      }),
      billingGroupName: jsx("b", {
        children: e.metadata.old_license_group_name
      }),
      newName: jsx("b", {
        children: e.metadata.new_license_group_name
      })
    })
  }) : jsx("span", {
    children: renderI18nText("activity_log.event.license_group_membership_change", {
      userEmail: jsx("b", {
        children: e.metadata.user_email
      }),
      workspaceName: jsx("b", {
        children: e.metadata.old_license_group_name
      }),
      newName: jsx("b", {
        children: e.metadata.new_license_group_name
      })
    })
  });
}
function ed({
  log: e
}) {
  return e.metadata.is_billing_group ? jsx("span", {
    children: renderI18nText("activity_log.event.billing_group_membership_self_select", {
      billingGroupName: jsx("b", {
        children: e.metadata.license_group_name
      })
    })
  }) : jsx("span", {
    children: renderI18nText("activity_log.event.license_group_membership_self_select", {
      workspaceName: jsx("b", {
        children: e.metadata.license_group_name
      })
    })
  });
}
function ec({
  log: e
}) {
  let t = {
    ...e.metadata,
    workspace_name: e.metadata.license_group_name,
    old_workspace_name: e.metadata.old_license_group_name
  };
  return jsx(et, {
    log: {
      metadata: t
    }
  });
}
let e_ = "activity_logs_table--actorColumn--UANSi activity_logs_table--_actor--MBVmV activity_logs_table--_columnVertical--0zHKO";
let eu = "activity_logs_table--tableCellSubtext--ouC0F";
export function $$em3(e, t) {
  if (!t) return null;
  switch (t.reason) {
    case _$$U.ROLE_UPGRADE:
    case _$$U.INVITE_REDEEM:
    case _$$U.INVITE_AUTOUPGRADE:
    case _$$U.JOIN_TEAM_REQUEST:
      return getI18nString("activity_log.upgrade.added_to_resource.seat_rename", {
        actor_name: t.actor_name,
        upgrader_name: e,
        resource_name: t.resource_name
      });
    case _$$U.PAID_STATUS_ON_ORG_CREATION:
      return getI18nString("activity_log.upgrade.paid_status_on_org_creation", {
        upgrader_name: e,
        resource_name: t.resource_name
      });
    case _$$U.RESOURCE_MOVED_TO_ORG:
      return getI18nString("activity_log.upgrade.resource_moved_to_org", {
        upgrader_name: e,
        resource_name: t.resource_name
      });
    case _$$U.TEAM_ADDED_TO_ORG_THROUGH_FIGMA_ADMIN:
      return getI18nString("activity_log.upgrade.resource_move.seat_rename", {
        upgrader_name: e,
        resource_name: t.resource_name
      });
    case _$$U.ORG_INVITE_REDEEM:
      return getI18nString("activity_log.upgrade.redeem_invite_to_org", {
        upgrader_name: e
      });
    case _$$U.ORG_MERGE:
      return getI18nString("activity_log.upgrade.org_merge.seat_rename", {
        upgrader_name: e,
        child_org: t.resource_name
      });
    case _$$U.DRAFTS_SHARE:
      return getI18nString("activity_log.upgrade.drafts_share", {
        upgrader_name: e,
        resource_name: t.resource_name,
        actor_name: t.actor_name ? t.actor_name : getI18nString("activity_log.upgrade.drafts_share_anonymous")
      });
    case _$$U.CREATE_TEAM:
      return getI18nString("activity_log.upgrade.create_team", {
        upgrader_name: e,
        resource_name: t.resource_name
      });
    case _$$U.JOIN_TEAM:
      return getI18nString("activity_log.upgrade.join_team.seat_rename", {
        upgrader_name: e,
        resource_name: t.resource_name
      });
    case _$$U.ADMIN_UPGRADE:
      return getI18nString("activity_log.upgrade.admin_upgrade.seat_rename", {
        actor_name: t.actor_name,
        upgrader_name: e
      });
    case _$$U.SCIM:
      return getI18nString("activity_log.upgrade.scim.seat_rename", {
        upgrader_name: e
      });
    case _$$U.FIGMA_ADMIN:
      return getI18nString("activity_log.upgrade.figma_admin", {
        upgrader_name: e,
        resource_name: t.resource_name
      });
    case _$$U.DEPART_TEAM:
      return getI18nString("activity_log.upgrade.depart_team", {
        upgrader_name: e
      });
    case _$$U.CREATE_FILE:
      return getI18nString("activity_log.upgrade.create_file", {
        upgrader_name: e,
        resource_name: t.resource_name
      });
    case _$$U.EDIT_REQUEST_AUTO_APPROVAL:
    case _$$U.EDIT_REQUEST_APPROVAL:
      return getI18nString("activity_log.upgrade.edit_request_approval", {
        upgrader_name: e,
        resource_name: t.resource_name
      });
    case _$$U.RUN_PLUGIN:
      return getI18nString("activity_log.upgrade.run_plugin", {
        upgrader_name: e
      });
    case _$$U.ORG_INVITE_REDEEM:
      return getI18nString("activity_log.upgrade.redeem_invite_to_org", {
        upgrader_name: e
      });
    case _$$U.ORG_MERGE:
      return getI18nString("activity_log.upgrade.org_merge.seat_rename", {
        upgrader_name: e,
        child_org: t.resource_name
      });
    case _$$U.RESOURCE_MOVED_FROM_ORG_DRAFTS:
      return getI18nString("activity_log.upgrade.resource_moved_from_drafts", {
        upgrader_name: e,
        resource_name: t.resource_name
      });
    case _$$U.DEFAULT_PAID_STATUS:
      return getI18nString("activity_log.upgrade.default_paid_status.seat_rename", {
        upgrader_name: e
      });
    case _$$U.FJ_GA_REUPGRADE:
      return getI18nString("activity_log.upgrade.figjam_ga_reupgrade", {
        upgrader_name: e,
        resource_name: t.resource_name
      });
    case _$$U.EDIT_BUTTON:
      return getI18nString("activity_log.upgrade.edit_button", {
        upgrader_name: e,
        resource_name: t.resource_name
      });
    case _$$U.ACCESS_EDIT_LINK:
    case _$$U.EDIT_ACTION:
      return getI18nString("activity_log.upgrade.edit_action", {
        upgrader_name: e,
        resource_name: t.resource_name
      });
    case _$$U.DEV_MODE_PRE_COMMIT_BETA_USE:
      return getI18nString("activity_log.upgrade.dev_mode_pre_commit_beta_use", {
        upgrader_name: e
      });
    default:
      return null;
  }
}
export function $$ep2(e, t, a, s) {
  let {
    internal_admin_event_not_configured
  } = e.metadata;
  if (internal_admin_event_not_configured) return jsx("span", {
    children: renderI18nText("activity_log.event.internal_admin_event_not_configured", {
      eventName: jsx("b", {
        children: e.event_name
      })
    })
  });
  switch (e.event_name) {
    case "autogen_password_controls_setting_change":
      if (e.metadata.new_autogen_password_controls_setting) return jsx("span", {
        children: renderI18nText("activity_log.event.enabled_autogen_password_controls_for_the_org")
      });
      return jsx("span", {
        children: renderI18nText("activity_log.event.disabled_autogen_password_controls_for_the_org")
      });
    case "community_hub_file_publish":
      return jsx("span", {
        children: renderI18nText("activity_log.event.community_hub_file_publish", {
          fileName: e.metadata.file_name
        })
      });
    case "community_hub_file_update":
      return jsx("span", {
        children: renderI18nText("activity_log.event.community_hub_file_update", {
          fileName: e.metadata.file_name
        })
      });
    case "community_hub_file_delete":
      return jsx("span", {
        children: renderI18nText("activity_log.event.community_hub_file_delete", {
          fileName: e.metadata.file_name
        })
      });
    case "community_plugin_publish":
      return jsx("span", {
        children: renderI18nText("activity_log.event.community_plugin_publish", {
          pluginName: jsx("b", {
            children: e.metadata.plugin_name
          })
        })
      });
    case "community_plugin_update":
      return jsx("span", {
        children: renderI18nText("activity_log.event.community_plugin_update", {
          pluginName: jsx("b", {
            children: e.metadata.plugin_name
          })
        })
      });
    case "community_plugin_delete":
      return jsx("span", {
        children: renderI18nText("activity_log.event.community_plugin_delete", {
          pluginName: jsx("b", {
            children: e.metadata.plugin_name
          })
        })
      });
    case "configurable_upgrade_request_message_change":
      if (e.metadata.new_configured_upgrade_request_message) return jsx("span", {
        children: renderI18nText("activity_log.event.configurable_upgrade_request_flow_updated_message")
      });
      return null;
    case "configurable_upgrade_request_setting_change":
      if (e.metadata.new_configured_upgrade_request_setting) {
        let t = e.metadata.old_configured_upgrade_request_setting;
        let a = e.metadata.new_configured_upgrade_request_setting;
        if (t) return jsx("span", {
          children: renderI18nText("activity_log.event.configurable_upgrade_request_flow_changed", {
            oldAudience: renderI18nText(t === FVisibilityType.MEMBERS ? "activity_log.event.configurable_upgrade_request_flow_members" : "activity_log.event.configurable_upgrade_request_flow_all_users"),
            currentAudience: renderI18nText(a === FVisibilityType.MEMBERS ? "activity_log.event.configurable_upgrade_request_flow_members" : "activity_log.event.configurable_upgrade_request_flow_all_users")
          })
        });
        return jsx("span", {
          children: renderI18nText("activity_log.event.configurable_upgrade_request_flow_enabled", {
            currentAudience: renderI18nText(a === FVisibilityType.MEMBERS ? "activity_log.event.configurable_upgrade_request_flow_members" : "activity_log.event.configurable_upgrade_request_flow_all_users")
          })
        });
      }
      return jsx("span", {
        children: renderI18nText("activity_log.event.configurable_upgrade_request_flow_disabled")
      });
    case "plugin_ownership_transfer":
      return jsx("span", {
        children: renderI18nText("activity_log.event.plugin_ownership_transfer", {
          pluginName: jsx("b", {
            children: e.metadata.plugin_name
          }),
          userEmail: jsx("b", {
            children: e.metadata.user_email
          })
        })
      });
    case "community_widget_publish":
      return jsx("span", {
        children: renderI18nText("activity_log.event.community_widget_publish", {
          widgetName: jsx("b", {
            children: e.metadata.plugin_name
          })
        })
      });
    case "community_widget_update":
      return jsx("span", {
        children: renderI18nText("activity_log.event.community_widget_update", {
          widgetName: jsx("b", {
            children: e.metadata.plugin_name
          })
        })
      });
    case "community_widget_delete":
      return jsx("span", {
        children: renderI18nText("activity_log.event.community_widget_delete", {
          widgetName: jsx("b", {
            children: e.metadata.plugin_name
          })
        })
      });
    case "external_collaboration_controls_setting_change":
      return jsx("span", {
        children: e.metadata.external_collaboration_controls_setting ? renderI18nText("activity_log.event.external_collaboration_controls_setting_enabled", {
          orgName: jsx("b", {
            children: t
          })
        }) : renderI18nText("activity_log.event.external_collaboration_controls_setting_disabled", {
          orgName: jsx("b", {
            children: t
          })
        })
      });
    case "widget_ownership_transfer":
      return jsx("span", {
        children: renderI18nText("activity_log.event.widget_ownership_transfer", {
          widgetName: jsx("b", {
            children: e.metadata.plugin_name
          }),
          userEmail: jsx("b", {
            children: e.metadata.user_email
          })
        })
      });
    case "fig_file_create":
      if (e.metadata.folder_name) return jsx("span", {
        children: renderI18nText("activity_log.event.fig_file_create_folder_name", {
          folder: jsx("b", {
            children: e.metadata.folder_name
          })
        })
      });
      return jsx("span", {
        children: renderI18nText("activity_log.event.fig_file_create")
      });
    case "fig_file_duplicate":
      return jsx("span", {
        children: renderI18nText("activity_log.event.fig_file_duplicate", {
          name: jsx("b", {
            children: e.metadata.name
          })
        })
      });
    case "fig_file_export":
      return jsx("span", {
        children: renderI18nText("activity_log.event.fig_file_export", {
          name: jsx("b", {
            children: e.metadata.name
          })
        })
      });
    case "fig_file_image_download":
      return jsx("span", {
        children: renderI18nText("activity_log.event.fig_file_image_download", {
          name: jsx("b", {
            children: e.metadata.name
          })
        })
      });
    case "fig_file_move":
      if (e.metadata.folder_name) return jsx("span", {
        children: renderI18nText("activity_log.event.fig_file_move_folder_name", {
          name: jsx("b", {
            children: e.metadata.name
          }),
          folder: jsx("b", {
            children: e.metadata.folder_name
          })
        })
      });
      return jsx("span", {
        children: renderI18nText("activity_log.event.fig_file_move", {
          name: jsx("b", {
            children: e.metadata.name
          })
        })
      });
    case "fig_file_link_access_change":
      switch (e.metadata.link_access) {
        case "edit":
          return jsx("span", {
            children: renderI18nText("activity_log.event.fig_file_link_access_change.edit", {
              name: jsx("b", {
                children: e.metadata.name
              })
            })
          });
        case "inherit":
          return jsx("span", {
            children: renderI18nText("activity_log.event.fig_file_link_access_change.inherit", {
              name: jsx("b", {
                children: e.metadata.name
              })
            })
          });
        case "org_edit":
          if (e.metadata.org_browsable) return jsx("span", {
            children: renderI18nText("activity_log.event.fig_file_link_access_change.org_edit", {
              name: jsx("b", {
                children: e.metadata.name
              }),
              orgName: jsx("b", {
                children: t
              })
            })
          });
          return jsx("span", {
            children: renderI18nText("activity_log.event.fig_file_link_access_change.org_edit.link", {
              name: jsx("b", {
                children: e.metadata.name
              }),
              orgName: jsx("b", {
                children: t
              })
            })
          });
        case "org_view":
          if (e.metadata.org_browsable) return jsx("span", {
            children: renderI18nText("activity_log.event.fig_file_link_access_change.org_view", {
              name: jsx("b", {
                children: e.metadata.name
              }),
              orgName: jsx("b", {
                children: t
              })
            })
          });
          return jsx("span", {
            children: renderI18nText("activity_log.event.fig_file_link_access_change.org_view.link", {
              name: jsx("b", {
                children: e.metadata.name
              }),
              orgName: jsx("b", {
                children: t
              })
            })
          });
        case "view":
          return jsx("span", {
            children: renderI18nText("activity_log.event.fig_file_link_access_change.view", {
              name: jsx("b", {
                children: e.metadata.name
              })
            })
          });
        default:
          (e => {
            throw Error(`Invalid link access ${e}`);
          })(e.metadata.link_access);
      }
    case "fig_file_link_expiration_change":
      return jsx("span", {
        children: e.metadata?.old_expires_at === null && e.metadata?.new_expires_at !== null ? renderI18nText("activity_log.event.fig_file_link_expiration_change.add_expiration", {
          name: jsx("b", {
            children: e.metadata?.name
          })
        }) : e.metadata?.old_expires_at !== null && e.metadata?.new_expires_at !== null ? renderI18nText("activity_log.event.fig_file_link_expiration_change.change_expiration", {
          name: jsx("b", {
            children: e.metadata?.name
          })
        }) : renderI18nText("activity_log.event.fig_file_link_expiration_change.remove_expiration", {
          name: jsx("b", {
            children: e.metadata?.name
          })
        })
      });
    case "fig_file_proto_link_access_change":
      switch (e.metadata.proto_link_access) {
        case "view":
          return jsx("span", {
            children: renderI18nText("activity_log.event.fig_file_proto_link_access_change.view", {
              name: jsx("b", {
                children: e.metadata.name
              })
            })
          });
        case "org_view":
          return jsx("span", {
            children: renderI18nText("activity_log.event.fig_file_proto_link_access_change.org_view", {
              name: jsx("b", {
                children: e.metadata.name
              }),
              orgName: jsx("b", {
                children: t
              })
            })
          });
        case "inherit":
          return jsx("span", {
            children: renderI18nText("activity_log.event.fig_file_proto_link_access_change.inherit", {
              name: jsx("b", {
                children: e.metadata.name
              })
            })
          });
        case null:
          return jsx("span", {
            children: renderI18nText("activity_log.event.fig_file_proto_link_access_change.null", {
              name: jsx("b", {
                children: e.metadata.name
              })
            })
          });
        default:
          (e => {
            throw Error(`Invalid link access ${e}`);
          })(e.metadata.proto_link_access);
      }
    case "fig_file_set_password":
      if (e.metadata.has_file_link_password) return jsx("span", {
        children: renderI18nText("activity_log.event.fig_file_set_password.file", {
          name: jsx("b", {
            children: e.metadata.name
          })
        })
      });
      return jsx("span", {
        children: renderI18nText("activity_log.event.fig_file_set_password.prototype", {
          name: jsx("b", {
            children: e.metadata.name
          })
        })
      });
    case "fig_file_unset_password":
      return jsx("span", {
        children: renderI18nText("activity_log.event.fig_file_unset_password", {
          name: jsx("b", {
            children: e.metadata.name
          })
        })
      });
    case "fig_file_viewer_access_change":
      if (e.metadata.viewer_export_restricted) return jsx("span", {
        children: renderI18nText("activity_log.event.fig_file_viewer_access_change.restricted", {
          name: jsx("b", {
            children: e.metadata.name
          })
        })
      });
      return jsx("span", {
        children: renderI18nText("activity_log.event.fig_file_viewer_access_change", {
          name: jsx("b", {
            children: e.metadata.name
          })
        })
      });
    case "fig_file_permanent_delete":
      return jsx("span", {
        children: renderI18nText("activity_log.event.fig_file_permanent_delete", {
          name: jsx("b", {
            children: e.metadata.name
          })
        })
      });
    case "fig_file_permanent_undelete":
      return jsx("span", {
        children: renderI18nText("activity_log.event.fig_file_permanent_undelete", {
          name: jsx("b", {
            children: e.metadata.name
          })
        })
      });
    case "fig_file_rename":
      return jsx("span", {
        children: renderI18nText("activity_log.event.fig_file_rename", {
          oldName: jsx("b", {
            children: e.metadata.old_name
          }),
          name: jsx("b", {
            children: e.metadata.name
          })
        })
      });
    case "fig_file_restore":
      return jsx("span", {
        children: renderI18nText("activity_log.event.fig_file_restore", {
          name: jsx("b", {
            children: e.metadata.name
          })
        })
      });
    case "fig_file_save_as":
      return jsx("span", {
        children: renderI18nText("activity_log.event.fig_file_save_as", {
          name: jsx("b", {
            children: e.metadata.name
          })
        })
      });
    case "fig_file_trash":
      return jsx("span", {
        children: renderI18nText("activity_log.event.fig_file_trash", {
          name: jsx("b", {
            children: e.metadata.name
          })
        })
      });
    case "fig_file_view":
      if (e.metadata.embed_location) return jsx("span", {
        children: renderI18nText("activity_log.event.fig_file_view.embedded", {
          name: jsx("b", {
            children: e.metadata.name
          }),
          location: jsx("b", {
            children: e.metadata.embed_location
          })
        })
      });
      return jsx("span", {
        children: renderI18nText("activity_log.event.fig_file_view", {
          name: jsx("b", {
            children: e.metadata.name
          })
        })
      });
    case "fig_file_view_external":
      if (e.metadata.external_org_name) return jsx("span", {
        children: renderI18nText("activity_log.event.fig_file_view_external.org", {
          orgName: jsx("b", {
            children: e.metadata.external_org_name
          })
        })
      });
      if (e.metadata.external_team_name) return jsx("span", {
        children: renderI18nText("activity_log.event.fig_file_view_external.team", {
          teamName: jsx("b", {
            children: e.metadata.external_team_name
          })
        })
      });
      return jsx("span", {
        children: renderI18nText("activity_log.event.fig_file_view_external")
      });
    case "fig_file_view_prototype":
      if (e.metadata.embed_location) return jsx("span", {
        children: renderI18nText("activity_log.event.fig_file_view_prototype.embedded", {
          name: jsx("b", {
            children: e.metadata.name
          }),
          location: jsx("b", {
            children: e.metadata.embed_location
          })
        })
      });
      return jsx("span", {
        children: renderI18nText("activity_log.event.fig_file_view_prototype", {
          name: jsx("b", {
            children: e.metadata.name
          })
        })
      });
    case "fig_file_view_prototype_external":
      if (e.metadata.external_org_name) return jsx("span", {
        children: renderI18nText("activity_log.event.fig_file_view_prototype_external.org", {
          orgName: jsx("b", {
            children: e.metadata.external_org_name
          })
        })
      });
      if (e.metadata.external_team_name) return jsx("span", {
        children: renderI18nText("activity_log.event.fig_file_view_prototype_external.team", {
          teamName: jsx("b", {
            children: e.metadata.external_team_name
          })
        })
      });
      return jsx("span", {
        children: renderI18nText("activity_log.event.fig_file_view_prototype_external")
      });
    case "folder_create":
      return jsx("span", {
        children: renderI18nText("activity_log.event.folder_create", {
          folderName: jsx("b", {
            children: e.metadata.name
          }),
          teamName: jsx("b", {
            children: e.metadata.team_name
          })
        })
      });
    case "folder_delete":
      return jsx("span", {
        children: renderI18nText("activity_log.event.folder_delete", {
          folderName: jsx("b", {
            children: e.metadata.name
          })
        })
      });
    case "folder_trash":
      return jsx("span", {
        children: renderI18nText("activity_log.event.folder_trash", {
          folderName: jsx("b", {
            children: e.metadata.name
          })
        })
      });
    case "folder_export":
      return jsx("span", {
        children: renderI18nText("activity_log.event.folder_export", {
          folderName: jsx("b", {
            children: e.metadata.name
          })
        })
      });
    case "folder_restore":
      return jsx("span", {
        children: renderI18nText("activity_log.event.folder_restore", {
          folderName: jsx("b", {
            children: e.metadata.name
          })
        })
      });
    case "folder_import":
      return jsx("span", {
        children: renderI18nText("activity_log.event.folder_import", {
          folderName: jsx("b", {
            children: e.metadata.name
          })
        })
      });
    case "folder_move":
      return jsx("span", {
        children: renderI18nText("activity_log.event.folder_move", {
          folderName: jsx("b", {
            children: e.metadata.name
          }),
          teamName: jsx("b", {
            children: e.metadata.team_name
          })
        })
      });
    case "folder_rename":
      return jsx("span", {
        children: renderI18nText("activity_log.event.folder_rename", {
          folderName: jsx("b", {
            children: e.metadata.name
          }),
          oldName: jsx("b", {
            children: e.metadata.old_name
          })
        })
      });
    case "folder_team_access_change":
      if (e.metadata.invite_only) return jsx("span", {
        children: renderI18nText("activity_log.event.folder_team_access_change.invite_only", {
          folderName: jsx("b", {
            children: e.metadata.name
          })
        })
      });
      if (e.metadata.view_only) return jsx("span", {
        children: renderI18nText("activity_log.event.folder_team_access_change.view_only", {
          folderName: jsx("b", {
            children: e.metadata.name
          })
        })
      });
      return jsx("span", {
        children: renderI18nText("activity_log.event.folder_team_access_change.edit", {
          folderName: jsx("b", {
            children: e.metadata.name
          })
        })
      });
    case "folder_transfer_sent":
      return e.metadata.destination_team_name ? jsx("span", {
        children: e.metadata.destination_org_name ? renderI18nText("activity_log.event.folder_transfer_sent", {
          folderName: jsx("b", {
            children: e.metadata.folder_name
          }),
          destinationTeam: jsx("b", {
            children: e.metadata.destination_team_name
          }),
          destinationOrg: jsx("b", {
            children: e.metadata.destination_org_name
          })
        }) : renderI18nText("activity_log.event.folder_transfer_sent_pro_team", {
          folderName: jsx("b", {
            children: e.metadata.folder_name
          }),
          destinationTeam: jsx("b", {
            children: e.metadata.destination_team_name
          })
        })
      }) : jsx("span", {
        children: renderI18nText("activity_log.event.folder_transfer_sent_secret_teams", {
          folderName: jsx("b", {
            children: e.metadata.folder_name
          }),
          destinationOrg: jsx("b", {
            children: e.metadata.destination_org_name
          })
        })
      });
    case "folder_transfer_copy_sent":
      return e.metadata.destination_team_name ? jsx("span", {
        children: e.metadata.destination_org_name ? renderI18nText("activity_log.event.folder_transfer_copy_sent", {
          folderName: jsx("b", {
            children: e.metadata.folder_name
          }),
          destinationTeam: jsx("b", {
            children: e.metadata.destination_team_name
          }),
          destinationOrg: jsx("b", {
            children: e.metadata.destination_org_name
          })
        }) : renderI18nText("activity_log.event.folder_transfer_copy_sent_pro_team", {
          folderName: jsx("b", {
            children: e.metadata.folder_name
          }),
          destinationTeam: jsx("b", {
            children: e.metadata.destination_team_name
          })
        })
      }) : jsx("span", {
        children: renderI18nText("activity_log.event.folder_transfer_copy_sent_secret_teams", {
          folderName: jsx("b", {
            children: e.metadata.folder_name
          }),
          destinationOrg: jsx("b", {
            children: e.metadata.destination_org_name
          })
        })
      });
    case "folder_transfer_received":
      {
        let t = jsx("span", {
          children: renderI18nText("activity_log.event.folder_transfer_received_no_source_org", {
            teamName: jsx("b", {
              children: e.metadata.team_name
            }),
            folderName: jsx("b", {
              children: e.metadata.folder_name
            })
          })
        });
        let a = jsx("span", {
          children: renderI18nText("activity_log.event.folder_transfer_received", {
            teamName: jsx("b", {
              children: e.metadata.team_name
            }),
            orgName: jsx("b", {
              children: e.metadata.source_org_name
            }),
            folderName: jsx("b", {
              children: e.metadata.folder_name
            })
          })
        });
        let s = jsx("span", {
          children: renderI18nText("activity_log.event.folder_transfer_received_no_source_team", {
            orgName: jsx("b", {
              children: e.metadata.source_org_name
            }),
            folderName: jsx("b", {
              children: e.metadata.folder_name
            })
          })
        });
        let i = e.metadata.team_name ? a : s;
        return e.metadata.source_org_name ? i : t;
      }
    case "folder_transfer_copy_received":
      {
        let t = jsx("span", {
          children: renderI18nText("activity_log.event.folder_transfer_copy_received_no_source_org", {
            teamName: jsx("b", {
              children: e.metadata.team_name
            }),
            folderName: jsx("b", {
              children: e.metadata.folder_name
            })
          })
        });
        let a = jsx("span", {
          children: renderI18nText("activity_log.event.folder_transfer_copy_received", {
            teamName: jsx("b", {
              children: e.metadata.team_name
            }),
            orgName: jsx("b", {
              children: e.metadata.source_org_name
            }),
            folderName: jsx("b", {
              children: e.metadata.folder_name
            })
          })
        });
        let s = jsx("span", {
          children: renderI18nText("activity_log.event.folder_transfer_copy_received_no_source_team", {
            orgName: jsx("b", {
              children: e.metadata.source_org_name
            }),
            folderName: jsx("b", {
              children: e.metadata.folder_name
            })
          })
        });
        let i = e.metadata.team_name ? a : s;
        return e.metadata.source_org_name ? i : t;
      }
    case "folder_transfer_approved":
      return jsx("span", {
        children: renderI18nText("activity_log.event.folder_transfer_approved", {
          folderName: jsx("b", {
            children: e.metadata.folder_name
          })
        })
      });
    case "folder_transfer_copy_approved":
      return jsx("span", {
        children: renderI18nText("activity_log.event.folder_transfer_copy_approved", {
          folderName: jsx("b", {
            children: e.metadata.folder_name
          })
        })
      });
    case "resource_connection_invite_sent":
      return jsx("span", {
        children: renderI18nText("activity_log.event.resource_connection_invite_sent", {
          folderName: jsx("b", {
            children: e.metadata.folder_name
          }),
          connectingPlanType: e.metadata.connecting_plan_type,
          connectingPlanName: jsx("b", {
            children: e.metadata.connecting_plan_name
          })
        })
      });
    case "resource_connection_invite_received":
      return jsx("span", {
        children: renderI18nText("activity_log.event.resource_connection_invite_received", {
          hostPlanType: e.metadata.host_plan_type,
          hostPlanName: jsx("b", {
            children: e.metadata.host_plan_name
          }),
          folderName: jsx("b", {
            children: e.metadata.folder_name
          })
        })
      });
    case "resource_connection_invite_approved":
      return jsx("span", {
        children: renderI18nText("activity_log.event.resource_connection_invite_approved", {
          folderName: jsx("b", {
            children: e.metadata.folder_name
          }),
          connectingPlanType: e.metadata.connecting_plan_type,
          connectingPlanName: jsx("b", {
            children: e.metadata.connecting_plan_name
          }),
          hostPlanType: e.metadata.host_plan_type,
          hostPlanName: jsx("b", {
            children: e.metadata.host_plan_name
          })
        })
      });
    case "resource_connection_invite_denied":
      return jsx("span", {
        children: renderI18nText("activity_log.event.resource_connection_invite_denied", {
          folderName: jsx("b", {
            children: e.metadata.folder_name
          }),
          connectingPlanType: e.metadata.connecting_plan_type,
          connectingPlanName: jsx("b", {
            children: e.metadata.connecting_plan_name
          }),
          hostPlanType: e.metadata.host_plan_type,
          hostPlanName: jsx("b", {
            children: e.metadata.host_plan_name
          })
        })
      });
    case "resource_connection_invite_revoked":
      return jsx("span", {
        children: renderI18nText("activity_log.event.resource_connection_invite_revoked", {
          folderName: jsx("b", {
            children: e.metadata.folder_name
          }),
          connectingPlanType: e.metadata.connecting_plan_type,
          connectingPlanName: jsx("b", {
            children: e.metadata.connecting_plan_name
          }),
          hostPlanType: e.metadata.host_plan_type,
          hostPlanName: jsx("b", {
            children: e.metadata.host_plan_name
          })
        })
      });
    case "resource_connection_disconnected":
      return jsx("span", {
        children: renderI18nText("activity_log.event.resource_connection_disconnected", {
          folderName: jsx("b", {
            children: e.metadata.folder_name
          }),
          hostPlanType: e.metadata.host_plan_type,
          hostPlanName: jsx("b", {
            children: e.metadata.host_plan_name
          }),
          connectedPlanType: e.metadata.connected_plan_type,
          connectedPlanName: jsx("b", {
            children: e.metadata.connected_plan_name
          })
        })
      });
    case "google_sso_auth_change":
      return jsx("span", {
        children: e.metadata.google_sso_setting ? renderI18nText("activity_log.event.google_sso_auth_enable") : renderI18nText("activity_log.event.google_sso_auth_disable")
      });
    case "github_app_installation":
      if (!getFeatureFlags().dt_github_app_activity_logs) return null;
      return renderI18nText("activity_log.event.github_app_installation", {
        login: jsx("b", {
          children: e.metadata.login
        })
      });
    case "github_app_uninstallation":
      if (!getFeatureFlags().dt_github_app_activity_logs) return null;
      return renderI18nText("activity_log.event.github_app_uninstallation", {
        login: jsx("b", {
          children: e.metadata.login
        })
      });
    case "github_app_suspension":
      if (!getFeatureFlags().dt_github_app_activity_logs) return null;
      return renderI18nText("activity_log.event.github_app_suspension", {
        login: jsx("b", {
          children: e.metadata.login
        })
      });
    case "github_app_unsuspension":
      if (!getFeatureFlags().dt_github_app_activity_logs) return null;
      return renderI18nText("activity_log.event.github_app_unsuspension", {
        login: jsx("b", {
          children: e.metadata.login
        })
      });
    case "github_repository_add":
      if (!getFeatureFlags().dt_github_app_activity_logs) return null;
      return renderI18nText("activity_log.event.github_repository_add", {
        repository: jsxs("b", {
          children: [e.metadata.owner, "/", e.metadata.name]
        })
      });
    case "github_repository_remove":
      if (!getFeatureFlags().dt_github_app_activity_logs) return null;
      return renderI18nText("activity_log.event.github_repository_remove", {
        repository: jsxs("b", {
          children: [e.metadata.owner, "/", e.metadata.name]
        })
      });
    case "github_repository_disable":
      if (!getFeatureFlags().dt_github_app_activity_logs) return null;
      return renderI18nText("activity_log.event.github_repository_disable", {
        repository: jsxs("b", {
          children: [e.metadata.owner, "/", e.metadata.name]
        })
      });
    case "github_repository_enable":
      if (!getFeatureFlags().dt_github_app_activity_logs) return null;
      return renderI18nText("activity_log.event.github_repository_enable", {
        repository: jsxs("b", {
          children: [e.metadata.owner, "/", e.metadata.name]
        })
      });
    case "idle_timeout_setting_change":
      {
        let t;
        let {
          old_idle_timeout_setting,
          new_idle_timeout_setting
        } = e.metadata;
        if (old_idle_timeout_setting && new_idle_timeout_setting) {
          let [e, n] = qr(old_idle_timeout_setting);
          let [i, r] = qr(new_idle_timeout_setting);
          let l = getI18nString(`settings_tab.idle_session_timeout.time.${n}`, {
            duration: e
          });
          let o = getI18nString(`settings_tab.idle_session_timeout.time.${r}`, {
            duration: i
          });
          t = renderI18nText("activity_log.event.idle_timeout_setting_change", {
            oldDuration: l,
            newDuration: o
          });
        } else if (new_idle_timeout_setting) {
          let [e, a] = qr(new_idle_timeout_setting);
          let n = getI18nString(`settings_tab.idle_session_timeout.time.${a}`, {
            duration: e
          });
          t = renderI18nText("activity_log.event.idle_timeout_setting_enable", {
            duration: n
          });
        } else t = renderI18nText("activity_log.event.idle_timeout_setting_disable");
        return jsx("span", {
          children: t
        });
      }
    case "ip_restriction_change":
      return jsx("span", {
        children: e.metadata.ip_restriction_setting ? renderI18nText("activity_log.event.ip_restriction_enable") : renderI18nText("activity_log.event.ip_restriction_disable")
      });
    case "ip_allowlist_setting_change":
      if (e.metadata.ip_allowlist_setting) return renderI18nText("activity_log.event.ip_allowlist_setting_enabled");
      return renderI18nText("activity_log.event.ip_allowlist_setting_disabled");
    case "ip_allowlist_range_create":
      return renderI18nText("activity_log.event.ip_allowlist_range_create", {
        ip_address: e.metadata.ip_address
      });
    case "ip_allowlist_range_delete":
      return renderI18nText("activity_log.event.ip_allowlist_range_delete", {
        ip_address: e.metadata.ip_address
      });
    case "ip_allowlist_rejected":
      return renderI18nText("activity_log.event.ip_allowlist_rejected");
    case "network_access_restriction_range_create":
      return renderI18nText("activity_log.event.ip_network_access_restriction_range_create", {
        ip_address: e.metadata.ip_address
      });
    case "network_access_restriction_range_delete":
      return renderI18nText("activity_log.event.ip_network_access_restriction_range_delete", {
        ip_address: e.metadata.ip_address
      });
    case "network_access_restriction_range_update":
      if (e.metadata.enabled) return renderI18nText("activity_log.event.ip_network_access_restriction_range_enable", {
        ip_address: e.metadata.ip_address
      });
      return renderI18nText("activity_log.event.ip_network_access_restriction_range_disable", {
        ip_address: e.metadata.ip_address
      });
    case "license_group_admins_add":
      return jsx(en, {
        log: e
      });
    case "license_group_admins_remove":
      return jsx(es, {
        log: e
      });
    case "license_group_create":
      return jsx(ei, {
        log: e
      });
    case "license_group_delete":
      return jsx(er, {
        log: e
      });
    case "license_group_rename":
      return jsx(el, {
        log: e
      });
    case "license_group_library_setting_change":
      return jsx(G, {
        log: e
      });
    case "idp_group_create":
      return jsx("span", {
        children: renderI18nText("activity_log.filter.scim_group.idp_group_create", {
          name: jsx("b", {
            children: e.metadata.name
          })
        })
      });
    case "idp_group_delete":
      return jsx("span", {
        children: renderI18nText("activity_log.filter.scim_group.idp_group_delete", {
          name: jsx("b", {
            children: e.metadata.name
          })
        })
      });
    case "idp_group_rename":
      return jsx("span", {
        children: renderI18nText("activity_log.filter.scim_group.idp_group_rename", {
          name: jsx("b", {
            children: e.metadata.name
          }),
          old_name: jsx("b", {
            children: e.metadata.old_name
          })
        })
      });
    case "idp_group_user_add":
      return jsx("span", {
        children: renderI18nText("activity_log.filter.scim_group.idp_group_user_add", {
          user_name: jsx("b", {
            children: e.metadata.user_name
          }),
          idp_group_name: jsx("b", {
            children: e.metadata.idp_group_name
          })
        })
      });
    case "idp_group_user_remove":
      return jsx("span", {
        children: renderI18nText("activity_log.filter.scim_group.idp_group_user_remove", {
          user_name: jsx("b", {
            children: e.metadata.user_name
          }),
          idp_group_name: jsx("b", {
            children: e.metadata.idp_group_name
          })
        })
      });
    case "idp_group_connection_add":
      {
        let t = e.metadata.connection_type;
        "LicenseGroup" === t && (t = "billing group");
        return jsx("span", {
          children: renderI18nText("activity_log.filter.scim_group.idp_group_connection_add", {
            idp_group_name: jsx("b", {
              children: e.metadata.idp_group_name
            }),
            connection_type: t,
            connection_name: jsx("b", {
              children: e.metadata.connection_name
            })
          })
        });
      }
    case "idp_group_connection_remove":
      {
        let t = e.metadata.connection_type;
        "LicenseGroup" === t && (t = "billing group");
        return jsx("span", {
          children: renderI18nText("activity_log.filter.scim_group.idp_group_connection_remove", {
            idp_group_name: jsx("b", {
              children: e.metadata.idp_group_name
            }),
            connection_type: t,
            connection_name: jsx("b", {
              children: e.metadata.connection_name
            })
          })
        });
      }
    case "license_group_membership_change":
      return jsx(eo, {
        log: e
      });
    case "license_group_membership_self_select":
      return jsx(ed, {
        log: e
      });
    case "oauth_token_grant":
      if (e.metadata.app_name) return jsx("span", {
        children: renderI18nText("activity_log.event.oauth_token_grant", {
          appName: jsx("b", {
            children: e.metadata.app_name
          })
        })
      });
      return jsx("span", {
        children: renderI18nText("activity_log.event.oauth_token_grant_unknown")
      });
    case "oauth_token_revoke":
      if (e.metadata.app_name) return jsx("span", {
        children: renderI18nText("activity_log.event.oauth_token_revoke", {
          appName: jsx("b", {
            children: e.metadata.app_name
          })
        })
      });
      return jsx("span", {
        children: renderI18nText("activity_log.event.oauth_token_revoke_unknown")
      });
    case "open_sessions_setting_change":
      return jsx("span", {
        children: e.metadata.workshop_disabled ? renderI18nText("activity_log.disabled_open_sessions_for_the_blog", {
          orgName: jsx("b", {
            children: e.metadata.org_name
          })
        }) : renderI18nText("activity_log.enabled_open_sessions_for_the_blog", {
          orgName: jsx("b", {
            children: e.metadata.org_name
          })
        })
      });
    case "cursor_chat_setting_change":
      return jsx("span", {
        children: e.metadata.cursor_chat_disabled ? renderI18nText("activity_log.disabled_cursor_chat_for_the_blog", {
          orgName: jsx("b", {
            children: e.metadata.org_name
          })
        }) : renderI18nText("activity_log.enabled_cursor_chat_for_the_blog", {
          orgName: jsx("b", {
            children: e.metadata.org_name
          })
        })
      });
    case "open_sessions_start":
      return jsx("span", {
        children: renderI18nText("activity_log.event.open_sessions_start", {
          name: jsx("b", {
            children: e.metadata.name
          })
        })
      });
    case "open_sessions_end":
      return jsx("span", {
        children: renderI18nText("activity_log.event.open_sessions_end", {
          name: jsx("b", {
            children: e.metadata.name
          })
        })
      });
    case "org_default_license_type_change":
      return jsx("span", {
        children: renderI18nText("activity_log.event.org_default_license_type_change.seat_rename", {
          role: jsx("b", {
            children: _$$t2(e.metadata.new_paid_status)
          }),
          product: jsx("b", {
            children: function (e) {
              switch (e) {
                case FFileType.DESIGN:
                case FFileType.SLIDES:
                case FFileType.SITES:
                case FFileType.COOPER:
                case FFileType.FIGMAKE:
                  return getI18nString("general.figma_design");
                case FFileType.WHITEBOARD:
                  return getI18nString("general.figjam");
                case "dev_mode":
                  return getI18nString("general.dev_mode");
              }
            }(e.metadata.editor_type)
          })
        })
      });
    case "org_domain_add":
      return jsx("span", {
        children: renderI18nText("activity_log.event.org_domain_add", {
          domain: jsx("b", {
            children: e.metadata.domain
          }),
          orgName: jsx("b", {
            children: t
          })
        })
      });
    case "org_domain_capture_change":
      return jsx("span", {
        children: e.metadata.domain_capture ? renderI18nText("activity_log.event.org_domain_capture_enable", {
          orgName: jsx("b", {
            children: t
          })
        }) : renderI18nText("activity_log.event.org_domain_capture_disable", {
          orgName: jsx("b", {
            children: t
          })
        })
      });
    case "org_domain_remove":
      return jsx("span", {
        children: renderI18nText("activity_log.event.org_domain_remove", {
          domain: jsx("b", {
            children: e.metadata.domain
          }),
          orgName: jsx("b", {
            children: t
          })
        })
      });
    case "org_domain_verify":
      return jsx("span", {
        children: renderI18nText("activity_log.event.org_domain_verify", {
          domain: jsx("b", {
            children: e.metadata.domain
          }),
          orgName: jsx("b", {
            children: t
          })
        })
      });
    case "org_guest_invite_setting_change":
      return jsx("span", {
        children: renderI18nText("activity_log.event.org_guest_invite_setting_change", {
          guestSetting: jsx("b", {
            children: W3(e.metadata.guest_invite_setting)
          })
        })
      });
    case "org_invite_create":
      if (e.metadata.billable_product_key) return jsx("span", {
        children: renderI18nText("activity_log.event.org_invite_create_with_seat", {
          inviteeEmail: jsx("b", {
            children: e.metadata.invitee_email
          }),
          orgName: jsx("b", {
            children: e.metadata.org_name
          }),
          seatType: jsx("b", {
            children: eb(e.metadata.billable_product_key)
          })
        })
      });
      return jsx("span", {
        children: renderI18nText("activity_log.event.org_invite_create", {
          inviteeEmail: jsx("b", {
            children: e.metadata.invitee_email
          }),
          orgName: jsx("b", {
            children: e.metadata.org_name
          })
        })
      });
    case "org_join_request_create":
      return jsx("span", {
        children: renderI18nText("activity_log.event.org_join_request_create", {
          orgName: jsx("b", {
            children: e.metadata.org_name
          }),
          resourceName: jsx("b", {
            children: e.metadata.resource_name
          })
        })
      });
    case "org_join_request_approve":
      return jsx("span", {
        children: renderI18nText("activity_log.event.org_join_request_approve", {
          orgName: jsx("b", {
            children: e.metadata.org_name
          }),
          resourceName: jsx("b", {
            children: e.metadata.resource_name
          }),
          requesterEmail: jsx("b", {
            children: e.metadata.requester_email
          })
        })
      });
    case "org_library_approve":
      return jsx(U, {
        log: e
      });
    case "org_library_unapprove":
      return jsx(F, {
        log: e
      });
    case "org_library_setting_change":
      return jsx(P, {
        log: e
      });
    case "org_merge":
      return jsx("span", {
        children: renderI18nText("activity_log.event.org_merge", {
          childOrgName: jsx("b", {
            children: e.metadata.child_org_name
          }),
          orgName: jsx("b", {
            children: t
          })
        })
      });
    case "org_user_create":
      {
        let i = null;
        if (s) {
          let a = e.metadata.source ? {
            createdAt: new Date(e.created_at),
            source: e.metadata.source,
            actor: {
              name: e.metadata.actor_email ?? null
            },
            resourceType: e.metadata.resource_type ?? null,
            resourceName: e.metadata.resource_name ?? null,
            resourceId: e.metadata.resource_id_or_key ?? null,
            metadata: {
              status: tT.Loaded,
              data: {
                previous_team_name: e.metadata?.previous_team_name ?? null,
                previous_team_id: e.metadata?.previous_team_id ?? null
              }
            }
          } : null;
          i = _$$d(e.metadata.user_email, t, a, e.metadata.permission).longText;
        }
        if (i) return jsx("span", {
          children: i
        });
        if (a === e.metadata.user_email) return e.metadata.seat_type ? jsx("span", {
          children: renderI18nText("activity_log.event.org_user_create_self_with_seat_type", {
            orgName: jsx("b", {
              children: t
            }),
            permission: jsx("b", {
              children: z5(e.metadata.permission)
            }),
            seatType: jsx("b", {
              children: eb(e.metadata.seat_type)
            })
          })
        }) : jsx("span", {
          children: renderI18nText("activity_log.event.org_user_create_self", {
            orgName: jsx("b", {
              children: t
            }),
            permission: jsx("b", {
              children: z5(e.metadata.permission)
            })
          })
        });
        return jsx("span", {
          children: renderI18nText("activity_log.event.org_user_create", {
            orgName: jsx("b", {
              children: t
            }),
            permission: jsx("b", {
              children: z5(e.metadata.permission)
            }),
            userEmail: jsx("b", {
              children: e.metadata.user_email
            })
          })
        });
      }
    case "org_user_create_external":
      return jsx("span", {
        children: renderI18nText("activity_log.event.org_user_create_external", {
          orgName: jsx("b", {
            children: e.metadata.org_name
          })
        })
      });
    case "org_user_delete":
      return jsx("span", {
        children: renderI18nText("activity_log.event.org_user_delete", {
          userEmail: jsx("b", {
            children: e.metadata.user_email
          }),
          orgName: jsx("b", {
            children: t
          })
        })
      });
    case "org_auto_approval_setting_update":
      return jsx("span", {
        children: renderI18nText("activity_log.event.org_auto_approval_setting_update", {
          actorName: jsx("b", {
            children: e.actor?.name
          }),
          seatType: jsx("b", {
            children: e.metadata.seat_type
          }),
          oldAutoApprovalSetting: jsx("b", {
            children: Tm(e.metadata.old_auto_approval_setting)
          }),
          newAutoApprovalSetting: jsx("b", {
            children: Tm(e.metadata.new_auto_approval_setting)
          })
        })
      });
    case "org_user_delete_external":
      return jsx("span", {
        children: renderI18nText("activity_log.event.org_user_delete_external", {
          orgName: jsx("b", {
            children: e.metadata.org_name
          })
        })
      });
    case "org_user_permission_change":
      return jsx("span", {
        children: renderI18nText("activity_log.event.org_user_permission_change", {
          userEmail: jsx("b", {
            children: e.metadata.user_email
          }),
          orgName: jsx("b", {
            children: t
          }),
          permission: jsx("b", {
            children: z5(e.metadata.permission)
          })
        })
      });
    case "personal_access_token_create":
      return jsx("span", {
        children: renderI18nText("activity_log.event.personal_access_token_create")
      });
    case "personal_access_token_delete":
      return jsx("span", {
        children: renderI18nText("activity_log.event.personal_access_token_delete")
      });
    case "org_user_account_type_change":
      if (ex(e.metadata)) return function (e) {
        if (!e.upgrade_method) return e.reason === _$$U.SCIM ? jsx("span", {
          children: renderI18nText("activity_log.event.org_user_account_type_change.seat_based.scim", {
            userEmail: jsx("b", {
              children: e.user_email
            }),
            oldSeatType: jsx("b", {
              children: eb(e.old_seat_type)
            }),
            newSeatType: jsx("b", {
              children: eb(e.new_seat_type)
            })
          })
        }) : jsx("span", {
          children: renderI18nText("activity_log.event.org_user_account_type_change.seat_based.admin_initiated", {
            userEmail: jsx("b", {
              children: e.user_email
            }),
            oldSeatType: jsx("b", {
              children: eb(e.old_seat_type)
            }),
            newSeatType: jsx("b", {
              children: eb(e.new_seat_type)
            })
          })
        });
        switch (e.upgrade_method) {
          case FApprovalMethodType.ADMIN_INITIATED:
            if (e.reason === _$$U.INVITE_REDEEM) {
              if (e.upgrade_actor_email) return jsxs("span", {
                children: [renderI18nText("activity_log.event.org_user_account_type_change.seat_based.admin_initiated.invite_with_seat", {
                  newSeatType: jsx("b", {
                    children: eb(e.new_seat_type)
                  }),
                  adminEmail: jsx("b", {
                    children: e.upgrade_actor_email
                  })
                }), " "]
              });
              return jsx("span", {
                children: renderI18nText("activity_log.event.org_user_account_type_change.seat_based.admin_initiated.invite_with_seat.fallback", {
                  newSeatType: jsx("b", {
                    children: eb(e.new_seat_type)
                  })
                })
              });
            }
            return jsx("span", {
              children: renderI18nText("activity_log.event.org_user_account_type_change.seat_based.admin_initiated", {
                userEmail: jsx("b", {
                  children: e.user_email
                }),
                oldSeatType: jsx("b", {
                  children: eb(e.old_seat_type)
                }),
                newSeatType: jsx("b", {
                  children: eb(e.new_seat_type)
                })
              })
            });
          case FApprovalMethodType.ADMIN_SELF_UPGRADE:
            return jsx("span", {
              children: renderI18nText("activity_log.event.org_user_account_type_change.seat_based.admin_self_upgrade", {
                oldSeatType: jsx("b", {
                  children: eb(e.old_seat_type)
                }),
                newSeatType: jsx("b", {
                  children: eb(e.new_seat_type)
                })
              })
            });
          case FApprovalMethodType.AUTO_APPROVED:
            return jsx("span", {
              children: renderI18nText("activity_log.event.org_user_account_type_change.seat_based.auto_approved", {
                userEmail: jsx("b", {
                  children: e.user_email
                }),
                oldSeatType: jsx("b", {
                  children: eb(e.old_seat_type)
                }),
                newSeatType: jsx("b", {
                  children: eb(e.new_seat_type)
                })
              })
            });
          case FApprovalMethodType.AUTO_APPROVED_AVAILABLE_SEAT:
            return jsx("span", {
              children: renderI18nText("activity_log.event.org_user_account_type_change.seat_based.auto_approved_if_available", {
                userEmail: jsx("b", {
                  children: e.user_email
                }),
                oldSeatType: jsx("b", {
                  children: eb(e.old_seat_type)
                }),
                newSeatType: jsx("b", {
                  children: eb(e.new_seat_type)
                })
              })
            });
          case FApprovalMethodType.MANUAL_APPROVED:
            return jsx("span", {
              children: renderI18nText("activity_log.event.org_user_account_type_change.seat_based.manually_approved", {
                userEmail: jsx("b", {
                  children: e.user_email
                }),
                oldSeatType: jsx("b", {
                  children: eb(e.old_seat_type)
                }),
                newSeatType: jsx("b", {
                  children: eb(e.new_seat_type)
                })
              })
            });
          case FApprovalMethodType.SCIM:
            return jsx("span", {
              children: renderI18nText("activity_log.event.org_user_account_type_change.seat_based.scim", {
                userEmail: jsx("b", {
                  children: e.user_email
                }),
                oldSeatType: jsx("b", {
                  children: eb(e.old_seat_type)
                }),
                newSeatType: jsx("b", {
                  children: eb(e.new_seat_type)
                })
              })
            });
          default:
            return jsx("span", {
              children: renderI18nText("activity_log.event.org_user_account_type_change.seat_based.generic", {
                userEmail: jsx("b", {
                  children: e.user_email
                }),
                oldSeatType: jsx("b", {
                  children: eb(e.old_seat_type)
                }),
                newSeatType: jsx("b", {
                  children: eb(e.new_seat_type)
                })
              })
            });
        }
      }(e.metadata);
      if (e.metadata.old_account_type) return jsx("span", {
        children: renderI18nText("activity_log.event.org_user_account_type_change.seat_rename", {
          userEmail: jsx("b", {
            children: e.metadata.user_email
          }),
          oldAccountType: jsx("b", {
            children: $K(e.metadata.old_account_type)
          }),
          accountType: jsx("b", {
            children: $K(e.metadata.account_type)
          }),
          product: jsx("b", {
            children: _$$E(Te.DESIGN)
          })
        })
      });
      if (e.metadata.old_whiteboard_paid_status) return jsx("span", {
        children: renderI18nText("activity_log.event.org_user_account_type_change.seat_rename", {
          userEmail: jsx("b", {
            children: e.metadata.user_email
          }),
          oldAccountType: jsx("b", {
            children: $K(e.metadata.old_whiteboard_paid_status)
          }),
          accountType: jsx("b", {
            children: $K(e.metadata.whiteboard_paid_status)
          }),
          product: jsx("b", {
            children: _$$E(Te.WHITEBOARD)
          })
        })
      });
      return jsx("span", {
        children: renderI18nText("activity_log.event.org_user_account_type_change.seat_rename", {
          userEmail: jsx("b", {
            children: e.metadata.user_email
          }),
          oldAccountType: jsx("b", {
            children: $K(e.metadata.old_dev_mode_paid_status)
          }),
          accountType: jsx("b", {
            children: $K(e.metadata.dev_mode_paid_status)
          }),
          product: jsx("b", {
            children: _$$E(Te.DEV_MODE)
          })
        })
      });
    case "org_user_account_type_change_to_full":
      return jsx("span", {
        children: renderI18nText("activity_log.event.org_user_account_type_change_to_full.seat_rename", {
          role: jsx("b", {
            children: renderI18nText("activity_log.event.org_user_account_type_change_to_full.editor.seat_rename")
          }),
          reason: function (e, t) {
            if (!t) return null;
            let a = "activity_logs_table--upgradeReasonBoldedNoun--dzlls";
            let s = e => {
              switch (e) {
                case Te.DESIGN:
                  return getI18nString("general.figma_design_short_lower");
                case Te.WHITEBOARD:
                  return getI18nString("general.figjam");
                case Te.DEV_MODE:
                  return getI18nString("general.dev_mode");
                default:
                  return getI18nString("general.figma_design_short_lower");
              }
            };
            switch (t.reason) {
              case _$$U.ROLE_UPGRADE:
              case _$$U.INVITE_REDEEM:
              case _$$U.INVITE_AUTOUPGRADE:
              case _$$U.JOIN_TEAM_REQUEST:
                return jsx("span", {
                  children: renderI18nText("activity_log.upgrade.added_to_resource_with_product.seat_rename", {
                    actor_name: jsx("span", {
                      className: a,
                      children: t.actor_name
                    }),
                    upgrader_name: jsx("span", {
                      className: a,
                      children: e
                    }),
                    product: s(t.editor_type),
                    resource_name: jsx("span", {
                      className: a,
                      children: t.resource_name
                    })
                  })
                });
              case _$$U.ORG_INVITE_REDEEM:
                return jsx("span", {
                  children: renderI18nText("activity_log.upgrade.redeem_invite_to_org", {
                    upgrader_name: jsx("span", {
                      className: a,
                      children: e
                    })
                  })
                });
              case _$$U.ORG_MERGE:
                return jsx("span", {
                  children: renderI18nText("activity_log.upgrade.org_merge.seat_rename", {
                    upgrader_name: jsx("span", {
                      className: a,
                      children: e
                    }),
                    child_org: jsx("span", {
                      className: a,
                      children: t.resource_name
                    })
                  })
                });
              case _$$U.PAID_STATUS_ON_ORG_CREATION:
              case _$$U.RESOURCE_MOVED_TO_ORG:
                return jsx("span", {
                  children: renderI18nText("activity_log.upgrade.resource_move_with_product.seat_rename", {
                    upgrader_name: jsx("span", {
                      className: a,
                      children: e
                    }),
                    product: s(t.editor_type),
                    resource_name: jsx("span", {
                      className: a,
                      children: t.resource_name
                    })
                  })
                });
              case _$$U.DRAFTS_SHARE:
                return jsx("span", {
                  children: renderI18nText("activity_log.upgrade.drafts_share", {
                    upgrader_name: jsx("span", {
                      className: a,
                      children: e
                    }),
                    resource_name: jsx("span", {
                      className: a,
                      children: t.resource_name
                    }),
                    actor_name: jsx("span", {
                      className: a,
                      children: t.actor_name ? t.actor_name : getI18nString("activity_log.upgrade.drafts_share_anonymous")
                    })
                  })
                });
              case _$$U.CREATE_TEAM:
                return jsx("span", {
                  children: renderI18nText("activity_log.upgrade.create_team", {
                    upgrader_name: jsx("span", {
                      className: a,
                      children: e
                    }),
                    resource_name: jsx("span", {
                      className: a,
                      children: t.resource_name
                    })
                  })
                });
              case _$$U.JOIN_TEAM:
                return jsx("span", {
                  children: renderI18nText("activity_log.upgrade.join_team_with_product.seat_rename", {
                    upgrader_name: jsx("span", {
                      className: a,
                      children: e
                    }),
                    resource_name: jsx("span", {
                      className: a,
                      children: t.resource_name
                    }),
                    product: s(t.editor_type)
                  })
                });
              case _$$U.ADMIN_UPGRADE:
                return jsx("span", {
                  children: renderI18nText("activity_log.upgrade.admin_upgrade_with_product.seat_rename", {
                    actor_name: jsx("span", {
                      className: a,
                      children: t.actor_name
                    }),
                    upgrader_name: jsx("span", {
                      className: a,
                      children: e
                    }),
                    product: s(t.editor_type)
                  })
                });
              case _$$U.SCIM:
                return jsx("span", {
                  children: renderI18nText("activity_log.upgrade.scim_with_product.seat_rename", {
                    upgrader_name: jsx("span", {
                      className: a,
                      children: e
                    }),
                    product: s(t.editor_type)
                  })
                });
              case _$$U.FIGMA_ADMIN:
                return jsx("span", {
                  children: renderI18nText("activity_log.upgrade.figma_admin", {
                    upgrader_name: jsx("span", {
                      className: a,
                      children: e
                    }),
                    resource_name: jsx("span", {
                      className: a,
                      children: t.resource_name
                    })
                  })
                });
              case _$$U.DEPART_TEAM:
                return jsx("span", {
                  children: renderI18nText("activity_log.upgrade.depart_team", {
                    upgrader_name: jsx("span", {
                      className: a,
                      children: e
                    })
                  })
                });
              case _$$U.CREATE_FILE:
                return jsx("span", {
                  children: renderI18nText("activity_log.upgrade.create_file", {
                    upgrader_name: jsx("span", {
                      className: a,
                      children: e
                    }),
                    resource_name: jsx("span", {
                      className: a,
                      children: t.resource_name
                    })
                  })
                });
              case _$$U.EDIT_REQUEST_AUTO_APPROVAL:
              case _$$U.EDIT_REQUEST_APPROVAL:
                return jsx("span", {
                  children: renderI18nText("activity_log.upgrade.edit_request_approval", {
                    upgrader_name: jsx("span", {
                      className: a,
                      children: e
                    }),
                    resource_name: jsx("span", {
                      className: a,
                      children: t.resource_name
                    })
                  })
                });
              case _$$U.RUN_PLUGIN:
                return jsx("span", {
                  children: renderI18nText("activity_log.upgrade.run_plugin", {
                    upgrader_name: jsx("span", {
                      className: a,
                      children: e
                    })
                  })
                });
              case _$$U.ORG_INVITE_REDEEM:
                return jsx("span", {
                  children: renderI18nText("activity_log.upgrade.redeem_invite_to_org", {
                    upgrader_name: jsx("span", {
                      className: a,
                      children: e
                    })
                  })
                });
              case _$$U.ORG_MERGE:
                return jsx("span", {
                  children: renderI18nText("activity_log.upgrade.org_merge.seat_rename", {
                    upgrader_name: jsx("span", {
                      className: a,
                      children: e
                    }),
                    child_org: jsx("span", {
                      className: a,
                      children: t.resource_name
                    })
                  })
                });
              case _$$U.RESOURCE_MOVED_FROM_ORG_DRAFTS:
                return jsx("span", {
                  children: renderI18nText("activity_log.upgrade.resource_moved_from_drafts", {
                    upgrader_name: jsx("span", {
                      className: a,
                      children: e
                    }),
                    resource_name: jsx("span", {
                      className: a,
                      children: t.resource_name
                    })
                  })
                });
              case _$$U.DEFAULT_PAID_STATUS:
                return jsx("span", {
                  children: renderI18nText("activity_log.upgrade.default_paid_status_with_product.seat_rename", {
                    upgrader_name: jsx("span", {
                      className: a,
                      children: e
                    }),
                    product: s(t.editor_type)
                  })
                });
              case _$$U.FJ_GA_REUPGRADE:
                return jsx("span", {
                  children: renderI18nText("activity_log.upgrade.figjam_ga_reupgrade", {
                    upgrader_name: jsx("span", {
                      className: a,
                      children: e
                    }),
                    resource_name: jsx("span", {
                      className: a,
                      children: t.resource_name
                    })
                  })
                });
              case _$$U.EDIT_BUTTON:
                return jsx("span", {
                  children: renderI18nText("activity_log.upgrade.edit_button", {
                    upgrader_name: jsx("span", {
                      className: a,
                      children: e
                    }),
                    resource_name: jsx("span", {
                      className: a,
                      children: t.resource_name
                    })
                  })
                });
              case _$$U.ACCESS_EDIT_LINK:
              case _$$U.ACTIVE_EDIT_ACTION:
              case _$$U.EDIT_ACTION:
                return jsx("span", {
                  children: renderI18nText("activity_log.upgrade.edit_action", {
                    upgrader_name: jsx("span", {
                      className: a,
                      children: e
                    }),
                    resource_name: jsx("span", {
                      className: a,
                      children: t.resource_name
                    })
                  })
                });
              default:
                return null;
            }
          }(e.metadata.user_email, e.metadata)
        })
      });
    case "org_user_account_type_upgrade_requested":
      if (e.metadata.seat_type) return jsx("span", {
        children: renderI18nText("activity_log.event.org_user_account_type_upgrade_requested.seat_based", {
          seatType: jsx("b", {
            children: eb(e.metadata.seat_type)
          })
        })
      });
      return jsx("span", {
        children: renderI18nText("activity_log.event.org_user_account_type_upgrade_requested", {
          accountType: jsx("b", {
            children: $K(FPlanFeatureType.FULL)
          }),
          product: jsx("b", {
            children: _$$E(e.metadata.editor_type)
          })
        })
      });
    case "org_user_account_type_upgrade_approved":
      if (e.metadata.seat_type) return jsx("span", {
        children: renderI18nText("activity_log.event.org_user_account_type_upgrade_approved.seat_based", {
          seatType: jsx("b", {
            children: eb(e.metadata.seat_type)
          }),
          userEmail: jsx("b", {
            children: e.metadata.requested_user_email
          })
        })
      });
      return jsx("span", {
        children: renderI18nText("activity_log.event.org_user_account_type_upgrade_approved", {
          accountType: jsx("b", {
            children: $K(FPlanFeatureType.FULL)
          }),
          product: jsx("b", {
            children: _$$E(e.metadata.editor_type)
          }),
          userEmail: jsx("b", {
            children: e.metadata.requested_user_email
          })
        })
      });
    case "org_user_account_type_upgrade_denied":
      if (e.metadata.seat_type) return jsx("span", {
        children: renderI18nText("activity_log.event.org_user_account_type_upgrade_denied.seat_based", {
          seatType: jsx("b", {
            children: eb(e.metadata.seat_type)
          }),
          userEmail: jsx("b", {
            children: e.metadata.requested_user_email
          })
        })
      });
      return jsx("span", {
        children: renderI18nText("activity_log.event.org_user_account_type_upgrade_denied", {
          accountType: jsx("b", {
            children: $K(FPlanFeatureType.FULL)
          }),
          product: jsx("b", {
            children: _$$E(e.metadata.editor_type)
          }),
          userEmail: jsx("b", {
            children: e.metadata.requested_user_email
          })
        })
      });
    case "plugin_approvelist_enable":
      return jsx("span", {
        children: renderI18nText("activity_log.event.plugin_approvelist_enable_org", {
          org: jsx("b", {
            children: t
          })
        })
      });
    case "plugin_approvelist_disable":
      return jsx("span", {
        children: renderI18nText("activity_log.event.plugin_approvelist_disable_org", {
          org: jsx("b", {
            children: t
          })
        })
      });
    case "plugin_approvelist_add":
      return jsx("span", {
        children: renderI18nText("activity_log.event.plugin_approvelist_add_org", {
          pluginName: jsx("b", {
            children: e.metadata.plugin_name
          }),
          org: jsx("b", {
            children: t
          })
        })
      });
    case "plugin_approvelist_remove":
      return jsx("span", {
        children: renderI18nText("activity_log.event.plugin_approvelist_remove_org", {
          pluginName: jsx("b", {
            children: e.metadata.plugin_name
          }),
          org: jsx("b", {
            children: t
          })
        })
      });
    case "plugin_approvelist_add_workspace":
      return jsx("span", {
        children: renderI18nText("activity_log.event.plugin_approvelist_add_workspace", {
          pluginName: jsx("b", {
            children: e.metadata.plugin_name
          }),
          workspace: jsx("b", {
            children: e.metadata.workspace_name
          })
        })
      });
    case "plugin_approvelist_remove_workspace":
      return jsx("span", {
        children: renderI18nText("activity_log.event.plugin_approvelist_remove_workspace", {
          pluginName: jsx("b", {
            children: e.metadata.plugin_name
          }),
          workspace: jsx("b", {
            children: e.metadata.workspace_name
          })
        })
      });
    case "plugin_approvelist_request_org":
      return jsx("span", {
        children: renderI18nText("activity_log.event.plugin_approvelist_request_org", {
          plugin: jsx("b", {
            children: e.metadata.plugin_name
          }),
          org: jsx("b", {
            children: t
          })
        })
      });
    case "plugin_approvelist_request_approve_org":
      return jsx("span", {
        children: renderI18nText("activity_log.event.plugin_approvelist_request_approve_org", {
          pluginName: jsx("b", {
            children: e.metadata.plugin_name
          }),
          org: jsx("b", {
            children: t
          }),
          requesterName: jsx("b", {
            children: e.metadata.requester_name
          })
        })
      });
    case "plugin_approvelist_request_reject_org":
      return jsx("span", {
        children: renderI18nText("activity_log.event.plugin_approvelist_request_reject_org", {
          pluginName: jsx("b", {
            children: e.metadata.plugin_name
          }),
          org: jsx("b", {
            children: t
          }),
          requesterName: jsx("b", {
            children: e.metadata.requester_name
          })
        })
      });
    case "plugin_approvelist_request_approve_workspace":
      return jsx("span", {
        children: renderI18nText("activity_log.event.plugin_approvelist_request_approve_workspace", {
          pluginName: jsx("b", {
            children: e.metadata.plugin_name
          }),
          workspace: jsx("b", {
            children: e.metadata.workspace_name
          }),
          requesterName: jsx("b", {
            children: e.metadata.requester_name
          })
        })
      });
    case "plugin_approvelist_request_reject_workspace":
      return jsx("span", {
        children: renderI18nText("activity_log.event.plugin_approvelist_request_reject_workspace", {
          pluginName: jsx("b", {
            children: e.metadata.plugin_name
          }),
          workspace: jsx("b", {
            children: e.metadata.workspace_name
          }),
          requesterName: jsx("b", {
            children: e.metadata.requester_name
          })
        })
      });
    case "plugin_publisher_invite":
      return jsx("span", {
        children: renderI18nText("activity_log.event.plugin_publisher_invite", {
          pluginName: jsx("b", {
            children: e.metadata.plugin_name
          }),
          userEmail: jsx("b", {
            children: e.metadata.user_email
          })
        })
      });
    case "plugin_publisher_accept_invite":
      return jsx("span", {
        children: renderI18nText("activity_log.event.plugin_publisher_accept_invite", {
          pluginName: jsx("b", {
            children: e.metadata.plugin_name
          })
        })
      });
    case "plugin_publisher_remove_invite":
      return jsx("span", {
        children: renderI18nText("activity_log.event.plugin_publisher_remove_invite", {
          pluginName: jsx("b", {
            children: e.metadata.plugin_name
          }),
          userEmail: jsx("b", {
            children: e.metadata.user_email
          })
        })
      });
    case "plugin_publisher_remove":
      return jsx("span", {
        children: renderI18nText("activity_log.event.plugin_publisher_remove", {
          pluginName: jsx("b", {
            children: e.metadata.plugin_name
          }),
          userEmail: jsx("b", {
            children: e.metadata.user_email
          })
        })
      });
    case "widget_publisher_invite":
      return jsx("span", {
        children: renderI18nText("activity_log.event.widget_publisher_invite", {
          widgetName: jsx("b", {
            children: e.metadata.plugin_name
          }),
          userEmail: jsx("b", {
            children: e.metadata.user_email
          })
        })
      });
    case "widget_publisher_accept_invite":
      return jsx("span", {
        children: renderI18nText("activity_log.event.widget_publisher_accept_invite", {
          widgetName: jsx("b", {
            children: e.metadata.plugin_name
          })
        })
      });
    case "widget_publisher_remove_invite":
      return jsx("span", {
        children: renderI18nText("activity_log.event.widget_publisher_remove_invite", {
          widgetName: jsx("b", {
            children: e.metadata.plugin_name
          }),
          userEmail: jsx("b", {
            children: e.metadata.user_email
          })
        })
      });
    case "widget_publisher_remove":
      return jsx("span", {
        children: renderI18nText("activity_log.event.widget_publisher_remove", {
          widgetName: jsx("b", {
            children: e.metadata.plugin_name
          }),
          userEmail: jsx("b", {
            children: e.metadata.user_email
          })
        })
      });
    case "plugin_install":
      return jsx("span", {
        children: renderI18nText("activity_log.event.plugin_install", {
          pluginName: e.metadata.plugin_name
        })
      });
    case "plugin_uninstall":
      return jsx("span", {
        children: renderI18nText("activity_log.event.plugin_uninstall", {
          pluginName: e.metadata.plugin_name
        })
      });
    case "private_plugin_publish":
      return jsx("span", {
        children: renderI18nText("activity_log.event.private_plugin_publish", {
          pluginName: jsx("b", {
            children: e.metadata.plugin_name
          })
        })
      });
    case "private_plugin_update":
      return jsx("span", {
        children: renderI18nText("activity_log.event.private_plugin_update", {
          pluginName: jsx("b", {
            children: e.metadata.plugin_name
          })
        })
      });
    case "private_plugin_delete":
      return jsx("span", {
        children: renderI18nText("activity_log.event.private_plugin_delete", {
          pluginName: jsx("b", {
            children: e.metadata.plugin_name
          })
        })
      });
    case "provisional_access_start":
    case "provisional_access_end_request_approved":
    case "provisional_access_end_request_denied":
    case "provisional_access_end_new_request":
      {
        let t = {
          seatType: jsx("b", {
            children: eb(e.metadata.billable_product_key)
          })
        };
        return jsxs("span", {
          children: [(() => {
            switch (e.event_name) {
              case "provisional_access_start":
                return renderI18nText("activity_log.event.provisional_access_start", t);
              case "provisional_access_end_request_approved":
                return renderI18nText("activity_log.event.provisional_access_end_request_approved", t);
              case "provisional_access_end_request_denied":
                return renderI18nText("activity_log.event.provisional_access_end_request_denied", t);
              case "provisional_access_end_new_request":
                return renderI18nText("activity_log.event.provisional_access_end_new_request", t);
              default:
                return null;
            }
          })(), " ", renderI18nText("activity_log.event.provisional_access_approval_setting", {
            approvalSetting: jsx("b", {
              children: Tm(e.metadata.upgrade_approval_setting)
            })
          })]
        });
      }
    case "widgets_enabled":
      return jsx("span", {
        children: renderI18nText("activity_log.event.widget_approvelist_disable_org", {
          org: jsx("b", {
            children: t
          })
        })
      });
    case "widgets_disable":
      return jsx("span", {
        children: renderI18nText("activity_log.event.widget_approvelist_enable_org", {
          org: jsx("b", {
            children: t
          })
        })
      });
    case "widget_approvelist_add":
      return jsx("span", {
        children: renderI18nText("activity_log.event.widget_approvelist_add_org", {
          widgetName: jsx("b", {
            children: e.metadata.plugin_name
          }),
          org: jsx("b", {
            children: t
          })
        })
      });
    case "widget_approvelist_remove":
      return jsx("span", {
        children: renderI18nText("activity_log.event.widget_approvelist_remove_org", {
          widgetName: jsx("b", {
            children: e.metadata.plugin_name
          }),
          org: jsx("b", {
            children: t
          })
        })
      });
    case "widget_approvelist_add_workspace":
      return jsx("span", {
        children: renderI18nText("activity_log.event.widget_approvelist_add_workspace", {
          widgetName: jsx("b", {
            children: e.metadata.plugin_name
          }),
          workspace: jsx("b", {
            children: e.metadata.workspace_name
          })
        })
      });
    case "widget_approvelist_remove_workspace":
      return jsx("span", {
        children: renderI18nText("activity_log.event.widget_approvelist_remove_workspace", {
          widgetName: jsx("b", {
            children: e.metadata.plugin_name
          }),
          workspace: jsx("b", {
            children: e.metadata.workspace_name
          })
        })
      });
    case "widget_approvelist_request_org":
      return jsx("span", {
        children: renderI18nText("activity_log.event.widget_approvelist_request_org", {
          widget: jsx("b", {
            children: e.metadata.plugin_name
          }),
          org: jsx("b", {
            children: t
          })
        })
      });
    case "widget_approvelist_request_approve_org":
      return jsx("span", {
        children: renderI18nText("activity_log.event.widget_approvelist_request_approve_org", {
          widgetName: jsx("b", {
            children: e.metadata.plugin_name
          }),
          org: jsx("b", {
            children: t
          }),
          requesterName: jsx("b", {
            children: e.metadata.requester_name
          })
        })
      });
    case "widget_approvelist_request_approve_workspace":
      return jsx("span", {
        children: renderI18nText("activity_log.event.widget_approvelist_request_approve_workspace", {
          widgetName: jsx("b", {
            children: e.metadata.plugin_name
          }),
          workspace: jsx("b", {
            children: e.metadata.workspace_name
          }),
          requesterName: jsx("b", {
            children: e.metadata.requester_name
          })
        })
      });
    case "widget_approvelist_request_reject_workspace":
      return jsx("span", {
        children: renderI18nText("activity_log.event.widget_approvelist_request_reject_workspace", {
          widgetName: jsx("b", {
            children: e.metadata.plugin_name
          }),
          workspace: jsx("b", {
            children: e.metadata.workspace_name
          }),
          requesterName: jsx("b", {
            children: e.metadata.requester_name
          })
        })
      });
    case "widget_approvelist_request_reject_org":
      return jsx("span", {
        children: renderI18nText("activity_log.event.widget_approvelist_request_reject_org", {
          widgetName: jsx("b", {
            children: e.metadata.plugin_name
          }),
          org: jsx("b", {
            children: t
          }),
          requesterName: jsx("b", {
            children: e.metadata.requester_name
          })
        })
      });
    case "widget_install":
      return jsx("span", {
        children: renderI18nText("activity_log.event.widget_install", {
          widgetName: e.metadata.plugin_name
        })
      });
    case "widget_uninstall":
      return jsx("span", {
        children: renderI18nText("activity_log.event.widget_uninstall", {
          widgetName: e.metadata.plugin_name
        })
      });
    case "private_widget_publish":
      return jsx("span", {
        children: renderI18nText("activity_log.event.private_widget_publish", {
          widgetName: e.metadata.plugin_name
        })
      });
    case "private_widget_update":
      return jsx("span", {
        children: renderI18nText("activity_log.event.private_widget_update", {
          widgetName: e.metadata.plugin_name
        })
      });
    case "private_widget_delete":
      return jsx("span", {
        children: renderI18nText("activity_log.event.private_widget_delete", {
          widgetName: e.metadata.plugin_name
        })
      });
    case "file_export_controls_setting_change":
      {
        if (!getFeatureFlags().plan_level_file_export_controls) return null;
        let t = e.metadata.file_export_setting;
        return jsx("span", {
          children: "allowed" === t ? renderI18nText("activity_log.event.file_export_controls_setting_change_allowed", {
            orgName: jsx("b", {
              children: e.metadata.org_name
            })
          }) : "banned" === t ? renderI18nText("activity_log.event.file_export_controls_setting_change_banned", {
            orgName: jsx("b", {
              children: e.metadata.org_name
            })
          }) : renderI18nText("activity_log.event.file_export_controls_setting_change_members_only", {
            orgName: jsx("b", {
              children: e.metadata.org_name
            })
          })
        });
      }
    case "workspace_file_export_controls_setting_change":
      {
        if (!getFeatureFlags().plan_level_file_export_controls) return null;
        let t = e.metadata.file_export_setting;
        return jsx("span", {
          children: "allowed" === t ? renderI18nText("activity_log.event.workspace_file_export_controls_setting_change_allowed", {
            workspaceName: jsx("b", {
              children: e.metadata.workspace_name
            })
          }) : "banned" === t ? renderI18nText("activity_log.event.workspace_file_export_controls_setting_change_banned", {
            workspaceName: jsx("b", {
              children: e.metadata.workspace_name
            })
          }) : renderI18nText("activity_log.event.workspace_file_export_controls_setting_change_members_only", {
            workspaceName: jsx("b", {
              children: e.metadata.workspace_name
            })
          })
        });
      }
    case "public_link_setting_change":
    case "workspace_public_link_setting_change":
      if (e.metadata.public_links_require_expiration) return function (e) {
        let t = "public_link_setting_change" === e.event_name ? e.metadata.org_name : e.metadata.workspace_name;
        let a = e.metadata.public_links_max_expiration_in_hours >= 24;
        return e.metadata.public_links_require_password && e.metadata.public_links_require_expiration ? jsx("span", {
          children: a ? renderI18nText("activity_log.enabled_public_links_require_expiration_and_password_for_the_blog_days_generic", {
            resourceName: jsx("b", {
              children: t
            }),
            maxDays: e.metadata.public_links_max_expiration_in_hours / 24
          }) : renderI18nText("activity_log.enabled_public_links_require_expiration_and_password_for_the_blog_hours_generic", {
            resourceName: jsx("b", {
              children: t
            }),
            maxHours: e.metadata.public_links_max_expiration_in_hours
          })
        }) : jsx("span", {
          children: a ? renderI18nText("activity_log.enabled_public_links_require_expiration_for_the_blog_days_generic", {
            resourceName: jsx("b", {
              children: t
            }),
            maxDays: e.metadata.public_links_max_expiration_in_hours / 24
          }) : renderI18nText("activity_log.enabled_public_links_require_expiration_for_the_blog_hours_generic", {
            resourceName: jsx("b", {
              children: t
            }),
            maxHours: e.metadata.public_links_max_expiration_in_hours
          })
        });
      }(e);
      if ("public_link_setting_change" === e.event_name) return jsx("span", {
        children: e.metadata.public_links_banned ? renderI18nText("activity_log.disabled_public_links_for_the_blog", {
          orgName: jsx("b", {
            children: e.metadata.org_name
          })
        }) : e.metadata.public_links_require_password ? renderI18nText("activity_log.enabled_public_links_require_password_for_the_blog", {
          orgName: jsx("b", {
            children: e.metadata.org_name
          })
        }) : renderI18nText("activity_log.enabled_public_links_for_the_blog", {
          orgName: jsx("b", {
            children: e.metadata.org_name
          })
        })
      });
      return jsx("span", {
        children: e.metadata.public_links_banned ? renderI18nText("activity_log.disabled_public_links_for_the_blog_workspace", {
          workspaceName: jsx("b", {
            children: e.metadata.workspace_name
          })
        }) : e.metadata.public_links_require_password ? renderI18nText("activity_log.enabled_public_links_require_password_for_the_blog_workspace", {
          workspaceName: jsx("b", {
            children: e.metadata.workspace_name
          })
        }) : renderI18nText("activity_log.enabled_public_links_for_the_blog_workspace", {
          workspaceName: jsx("b", {
            children: e.metadata.workspace_name
          })
        })
      });
    case "saml_sso_auth_change":
      return jsx("span", {
        children: e.metadata.saml_sso_setting ? renderI18nText("activity_log.event.saml_sso_auth_enable") : renderI18nText("activity_log.event.saml_sso_auth_disable")
      });
    case "fig_file_member_add":
    case "file_repo_member_add":
    case "folder_member_add":
    case "team_member_add":
      {
        let t = e.metadata;
        if (t.user_email === a) {
          if (t.level === e6.OWNER) return null;
          return jsx("span", {
            children: renderI18nText("activity_log.teams.joined_the_resource_name_resource", {
              resourceName: jsx("b", {
                children: t.resource_name
              }),
              resourceType: _$$v(t.resource_type)
            })
          });
        }
        return jsx("span", {
          children: renderI18nText("activity_log.teams.added_user_email_to_the_resource", {
            userEmail: jsx("b", {
              children: t.user_email
            }),
            resourceName: jsx("b", {
              children: t.resource_name
            }),
            resourceType: _$$v(t.resource_type),
            level: jsx("b", {
              children: q9(t.level)
            })
          })
        });
      }
    case "team_member_add_external":
      return jsx("span", {
        children: renderI18nText("activity_log.event.team_member_add_external", {
          teamName: jsx("b", {
            children: e.metadata.external_team_name
          })
        })
      });
    case "team_member_remove_external":
      return jsx("span", {
        children: renderI18nText("activity_log.event.team_member_remove_external", {
          teamName: jsx("b", {
            children: e.metadata.external_team_name
          })
        })
      });
    case "fig_file_member_remove":
    case "file_repo_member_remove":
    case "folder_member_remove":
    case "team_member_remove":
      if ("folder" === e.metadata.resource_type && !e.metadata.team_name && !e.metadata.resource_name) return jsx("span", {
        children: renderI18nText("activity_log.teams.removed_user_email_from_org_draft", {
          userEmail: jsx("b", {
            children: e.metadata.user_email
          })
        })
      });
      if (e.metadata.user_email === a) return jsx("span", {
        children: renderI18nText("activity_log.teams.left_the_resource_name_resource", {
          resourceName: jsx("b", {
            children: e.metadata.resource_name
          }),
          resourceType: _$$v(e.metadata.resource_type)
        })
      });
      return jsx("span", {
        children: renderI18nText("activity_log.teams.removed_user_email_from_the_resource", {
          userEmail: jsx("b", {
            children: e.metadata.user_email
          }),
          resourceName: jsx("b", {
            children: e.metadata.resource_name
          }),
          resourceType: _$$v(e.metadata.resource_type)
        })
      });
    case "fig_file_member_permission_change":
    case "file_repo_member_permission_change":
    case "folder_member_permission_change":
    case "team_member_permission_change":
      {
        let t = e.metadata;
        let a = q9(t.old_level);
        let s = q9(t.level);
        return jsx("span", {
          children: renderI18nText("activity_log.teams.changed_user_email", {
            userEmail: jsx("b", {
              children: t.user_email
            }),
            oldPermission: jsx("b", {
              children: a
            }),
            newPermission: jsx("b", {
              children: s
            }),
            resourceName: jsx("b", {
              children: t.resource_name
            }),
            resourceType: _$$v(t.resource_type)
          })
        });
      }
    case "team_create":
      {
        let a = Db(t)[e.metadata.org_access];
        return jsx("span", {
          children: renderI18nText("activity_log.teams.created_the_team_name_team_with", {
            teamName: jsx("b", {
              children: e.metadata.team_name
            }),
            orgAccess: jsx("b", {
              children: a
            })
          })
        });
      }
    case "team_delete":
      return jsx("span", {
        children: renderI18nText("activity_log.teams.deleted_the_team_name_team", {
          teamName: jsx("b", {
            children: e.metadata.team_name
          })
        })
      });
    case "team_export":
      return jsx("span", {
        children: renderI18nText("activity_log.teams.exported_the_team_name_team_out", {
          teamName: jsx("b", {
            children: e.metadata.team_name
          })
        })
      });
    case "team_import":
      return jsx("span", {
        children: renderI18nText("activity_log.teams.imported_the_team_name_team_int", {
          teamName: jsx("b", {
            children: e.metadata.team_name
          })
        })
      });
    case "team_transfer_sent":
      return jsx("span", {
        children: renderI18nText("activity_log.teams.requested_to_transfer_the_team", {
          teamName: jsx("b", {
            children: e.metadata.team_name
          }),
          destinationOrg: jsxs("b", {
            children: [" ", e.metadata.destination_org_name, " "]
          })
        })
      });
    case "team_transfer_received":
      return jsx("span", {
        children: e.metadata.source_org_name ? renderI18nText("activity_log.teams.org_name_wants_to_transfer_team_name", {
          orgName: jsx("b", {
            children: e.metadata.source_org_name
          }),
          teamName: jsx("b", {
            children: e.metadata.team_name
          })
        }) : renderI18nText("activity_log.teams.team_name_wants_to_transfer_their_team", {
          teamName: jsx("b", {
            children: e.metadata.team_name
          })
        })
      });
    case "team_transfer_approved":
      return jsx("span", {
        children: renderI18nText("activity_log.teams.approver_name_approved_the_transfer_of_team_name_team", {
          approverName: jsxs("b", {
            children: [e.metadata.approver_name, " "]
          }),
          teamName: jsx("b", {
            children: e.metadata.team_name
          })
        })
      });
    case "team_restore":
      return jsx("span", {
        children: renderI18nText("activity_log.teams.restored_the_team_name_team", {
          teamName: jsx("b", {
            children: e.metadata.team_name
          })
        })
      });
    case "team_rename":
      return jsx("span", {
        children: renderI18nText("activity_log.teams.renamed_the_old_name_team", {
          teamName: jsx("b", {
            children: e.metadata.team_name
          }),
          oldName: jsx("b", {
            children: e.metadata.old_name
          })
        })
      });
    case "team_org_access_change":
      {
        let a = Db(t)[e.metadata.old_org_access];
        let s = Db(t)[e.metadata.org_access];
        return jsx("span", {
          children: renderI18nText("activity_log.teams.changed_the__team_from_old_access", {
            oldAccess: jsx("b", {
              children: a
            }),
            newAccess: jsx("b", {
              children: s
            })
          })
        });
      }
    case "team_license_group_change":
      return jsx(ec, {
        log: e
      });
    case "team_workspace_change":
      return jsx(et, {
        log: e
      });
    case "ai_features_enable":
      return jsx("span", {
        children: renderI18nText("activity_log.ai_features_enable", {
          orgName: jsx("b", {
            children: t
          })
        })
      });
    case "ai_features_disable":
      return jsx("span", {
        children: renderI18nText("activity_log.ai_features_disable", {
          orgName: jsx("b", {
            children: t
          })
        })
      });
    case "ai_content_training_enable":
      return jsx("span", {
        children: renderI18nText("activity_log.ai_content_training_enable", {
          orgName: jsx("b", {
            children: t
          })
        })
      });
    case "ai_content_training_disable":
      return jsx("span", {
        children: renderI18nText("activity_log.ai_content_training_disable", {
          orgName: jsx("b", {
            children: t
          })
        })
      });
    case "seats_renew":
      return jsx("span", {
        children: renderI18nText("activity_log.seats_renew", {
          orgName: jsx("b", {
            children: t
          })
        })
      });
    case "sites_subdomain_changed":
      return jsx("span", {
        children: renderI18nText("activity_log.sites_subdomain_changed", {
          oldDomain: jsx("b", {
            children: e.metadata.old_domain
          }),
          newDomain: jsx("b", {
            children: e.metadata.new_domain
          })
        })
      });
    case "sites_custom_domain_activate":
      return jsx("span", {
        children: renderI18nText("activity_log.sites_custom_domain_activate", {
          domain: jsx("b", {
            children: e.metadata.domain
          })
        })
      });
    case "sites_custom_domain_removal":
      return jsx("span", {
        children: renderI18nText("activity_log.sites_custom_domain_removal", {
          domain: jsx("b", {
            children: e.metadata.domain
          })
        })
      });
    case "sites_publish":
      return jsx("span", {
        children: renderI18nText("activity_log.sites_publish", {
          domain: jsx("b", {
            children: e.metadata.domain
          })
        })
      });
    case "sites_unpublish":
      return jsx("span", {
        children: renderI18nText("activity_log.sites_unpublish", {
          domain: jsx("b", {
            children: e.metadata.domain
          })
        })
      });
    case "sites_publishing_setting_change":
      return jsx("span", {
        children: e.metadata.sites_publishing_disabled ? renderI18nText("activity_log.disabled_sites_publishing_for_the_org", {
          orgName: jsx("b", {
            children: t
          })
        }) : renderI18nText("activity_log.enabled_sites_publishing_for_the_org", {
          orgName: jsx("b", {
            children: t
          })
        })
      });
    case "sites_set_password":
      return jsx("span", {
        children: renderI18nText("activity_log.event.sites_set_password", {
          name: jsx("b", {
            children: e.metadata.name
          })
        })
      });
    case "sites_unset_password":
      return jsx("span", {
        children: renderI18nText("activity_log.event.sites_unset_password", {
          name: jsx("b", {
            children: e.metadata.name
          })
        })
      });
    case "supabase_setting_change":
      if (!p3()) return null;
      return jsx("span", {
        children: e.metadata.supabase_disabled ? renderI18nText("activity_log.disabled_supabase_for_the_org", {
          orgName: jsx("b", {
            children: t
          })
        }) : renderI18nText("activity_log.enabled_supabase_for_the_org", {
          orgName: jsx("b", {
            children: t
          })
        })
      });
    case "supabase_project_connected":
      if (!p3()) return null;
      return jsx("span", {
        children: renderI18nText("activity_log.connected_supabase_to_file", {
          name: jsx("b", {
            children: e.metadata.name
          })
        })
      });
    case "supabase_project_disconnected":
      if (!p3()) return null;
      return jsx("span", {
        children: renderI18nText("activity_log.disconnected_supabase_from_file", {
          name: jsx("b", {
            children: e.metadata.name
          })
        })
      });
    case "mfa_required_setting_change":
      {
        let t = e.metadata.new_mfa_required_setting;
        let a = e.metadata.old_mfa_required_setting;
        if (null === a && t === CT.GUESTS || a === CT.MEMBERS && t === CT.ALL_USERS) return jsx("span", {
          children: renderI18nText("activity_log.enabled_mfa_required_for_guests")
        });
        if (null === a && t === CT.MEMBERS || a === CT.GUESTS && t === CT.ALL_USERS) return jsx("span", {
          children: renderI18nText("activity_log.enabled_mfa_required_for_members")
        });
        if (null === a && t === CT.ALL_USERS) return jsx("span", {
          children: renderI18nText("activity_log.enabled_mfa_required_for_all_users")
        });
        if (a === CT.GUESTS && null === t || a === CT.ALL_USERS && t === CT.MEMBERS) return jsx("span", {
          children: renderI18nText("activity_log.disabled_mfa_required_for_guests")
        });else if (a === CT.MEMBERS && null === t || a === CT.ALL_USERS && t === CT.GUESTS) return jsx("span", {
          children: renderI18nText("activity_log.disabled_mfa_required_for_members")
        });else if (a === CT.ALL_USERS && null === t) return jsx("span", {
          children: renderI18nText("activity_log.disabled_mfa_required_for_all_users")
        });else return jsx("span", {
          children: renderI18nText("activity_log.mfa_required_setting_changed")
        });
      }
    case "org_team_creation_controls":
      return e.metadata.new_team_creation_controls_setting === $q.TEAM_CREATION_CONTROLS_ANYONE ? jsx("span", {
        children: renderI18nText("activity_log.teams.changed_team_creation_controls_to_anyone")
      }) : jsx("span", {
        children: renderI18nText("activity_log.teams.changed_team_creation_controls_to_admins_only")
      });
    case "user_idle_session_timeout":
      return jsx("span", {
        children: renderI18nText("activity_log.users.session_timed_out")
      });
    case "user_sign_in":
      if ("saml_sso" === e.metadata.source) return jsx("span", {
        children: renderI18nText("activity_log.users.signed_in_saml")
      });
      if ("google_sso" === e.metadata.source) return jsx("span", {
        children: renderI18nText("activity_log.users.signed_in_google")
      });
      if ("password_authn" === e.metadata.source) return jsx("span", {
        children: renderI18nText("activity_log.users.signed_in_password")
      });
      if ("app_auth" === e.metadata.source) return jsx("span", {
        children: renderI18nText("activity_log.users.signed_in_app_auth")
      });
      return jsx("span", {
        children: renderI18nText("activity_log.users.signed_in")
      });
    case "user_sign_out":
      return jsx("span", {
        children: renderI18nText("activity_log.users.signed_out")
      });
    case "voice_call_join_req":
      return jsx("span", {
        children: renderI18nText("activity_log.voice.joined_call_on_file_fig_file_key", {
          figFileKey: jsx("b", {
            children: e.metadata.fig_file_key
          })
        })
      });
    case "roster_exported":
      return jsx("span", {
        children: renderI18nText("activity_log.teams.exported_the_members_list_to_csv")
      });
    case "org_team_csv_exported":
      return jsx("span", {
        children: renderI18nText("activity_log.teams.exported_the_org_team_list_to_csv")
      });
    case "workspace_team_csv_exported":
      return jsx("span", {
        children: renderI18nText("activity_log.teams.exported_the_workspace_team_list_to_csv", {
          workspaceName: jsx("b", {
            children: e.metadata.workspace_name
          })
        })
      });
    case "scim_token_generate":
      return jsx("span", {
        children: renderI18nText("activity_log.event.scim_token_generate")
      });
    case "scim_token_revoke":
      return jsx("span", {
        children: renderI18nText("activity_log.event.scim_token_revoke")
      });
    case "repo_branch_create":
      return jsx("span", {
        children: e.metadata.source_file_name ? renderI18nText("activity_log.repo.created_branch_name_from_file_name", {
          name: jsx("b", {
            children: e.metadata.name
          }),
          fileName: jsx("b", {
            children: e.metadata.source_file_name
          })
        }) : renderI18nText("activity_log.repo.created_branch_name", {
          name: jsx("b", {
            children: e.metadata.name
          })
        })
      });
    case "repo_merge_to_source":
      return jsx("span", {
        children: e.metadata.source_file_name ? renderI18nText("activity_log.repo.merged_branch_name_into_file_name", {
          name: jsx("b", {
            children: e.metadata.name
          }),
          fileName: jsx("b", {
            children: e.metadata.source_file_name
          })
        }) : renderI18nText("activity_log.repo.merged_branch_name", {
          name: jsx("b", {
            children: e.metadata.name
          })
        })
      });
    case "repo_merge_from_source":
      return jsx("span", {
        children: e.metadata.source_file_name ? renderI18nText("activity_log.repo.updated_branch_name_from_file_name", {
          name: jsx("b", {
            children: e.metadata.name
          }),
          fileName: jsx("b", {
            children: e.metadata.source_file_name
          })
        }) : renderI18nText("activity_log.repo.updated_branch_name", {
          name: jsx("b", {
            children: e.metadata.name
          })
        })
      });
    case "repo_branch_delete":
      return jsx("span", {
        children: e.metadata.source_file_name ? renderI18nText("activity_log.repo.deleted_branch_name_from_file_name", {
          name: jsx("b", {
            children: e.metadata.name
          }),
          fileName: jsx("b", {
            children: e.metadata.source_file_name
          })
        }) : renderI18nText("activity_log.repo.deleted_branch_name", {
          name: jsx("b", {
            children: e.metadata.name
          })
        })
      });
    case "repo_branch_archive":
      return jsx("span", {
        children: e.metadata.source_file_name ? renderI18nText("activity_log.repo.archived_branch_name_from_file_name", {
          name: jsx("b", {
            children: e.metadata.name
          }),
          fileName: jsx("b", {
            children: e.metadata.source_file_name
          })
        }) : renderI18nText("activity_log.repo.archived_branch_name", {
          name: jsx("b", {
            children: e.metadata.name
          })
        })
      });
    case "repo_branch_unarchive":
      return jsx("span", {
        children: e.metadata.source_file_name ? renderI18nText("activity_log.repo.unarchived_branch_name_from_file", {
          name: jsx("b", {
            children: e.metadata.name
          }),
          fileName: jsx("b", {
            children: e.metadata.source_file_name
          })
        }) : renderI18nText("activity_log.repo.unarchived_branch_name", {
          name: jsx("b", {
            children: e.metadata.name
          })
        })
      });
    case "workspace_admins_add":
      return jsx(V, {
        log: e
      });
    case "workspace_admins_remove":
      return jsx(W, {
        log: e
      });
    case "workspace_create":
      return jsx(H, {
        log: e
      });
    case "workspace_delete":
      return jsx(Y, {
        log: e
      });
    case "workspace_rename":
      return jsx(J, {
        log: e
      });
    case "workspace_members_add":
      return jsx(K, {
        log: e
      });
    case "workspace_members_remove":
      return jsx(X, {
        log: e
      });
    case "workspace_member_add":
      return jsx(Q, {
        log: e
      });
    case "workspace_member_remove":
      return jsx(Z, {
        log: e
      });
    case "workspace_membership_self_select":
      return jsx(ee, {
        log: e
      });
    case "workspace_library_approve":
      return jsx(q, {
        log: e
      });
    case "workspace_library_unapprove":
      return jsx($, {
        log: e
      });
    case "workspace_library_setting_change":
      return jsx(B, {
        log: e
      });
    case "workspace_visibility_setting_change":
      return jsx(ea, {
        log: e
      });
    case "webhook_create":
      return jsx("span", {
        children: renderI18nText("activity_log.webhooks.webhooks_created", {
          webhookEvent: jsx("b", {
            children: e.metadata.webhook_event_name
          }),
          webhookEndpoint: e.metadata.webhook_endpoint
        })
      });
    case "webhook_delete":
      return jsx("span", {
        children: renderI18nText("activity_log.webhooks.webhooks_deleted", {
          webhookEvent: jsx("b", {
            children: e.metadata.webhook_event_name
          }),
          webhookEndpoint: e.metadata.webhook_endpoint
        })
      });
    case "webhook_update":
      return jsx("span", {
        children: renderI18nText("activity_log.webhooks.webhooks_updated", {
          webhookEvent: jsx("b", {
            children: e.metadata.webhook_event_name
          }),
          webhookEndpoint: e.metadata.webhook_endpoint
        })
      });
    case "idp_config_create":
      return jsx("span", {
        children: renderI18nText("activity_log.event.idp_config_create", {
          sp_tenant_id: jsx("b", {
            children: e.metadata.sp_tenant_id
          })
        })
      });
    case "idp_config_update":
      return jsx("span", {
        children: renderI18nText("activity_log.event.idp_config_update", {
          sp_tenant_id: jsx("b", {
            children: e.metadata.sp_tenant_id
          })
        })
      });
    case "idp_config_delete":
      return jsx("span", {
        children: renderI18nText("activity_log.event.idp_config_delete", {
          sp_tenant_id: jsx("b", {
            children: e.metadata.sp_tenant_id
          })
        })
      });
    case "org_domain_idp_mapping_change":
      {
        let t = e.metadata.old_idp_mapping || renderI18nText("activity_log.event.org_domain_idp_mapping_change.none");
        let a = e.metadata.new_idp_mapping || renderI18nText("activity_log.event.org_domain_idp_mapping_change.none");
        if (null === e.metadata.new_idp_mapping) return jsx("span", {
          children: renderI18nText("activity_log.event.org_domain_idp_mapping_removed", {
            domain: jsx("b", {
              children: e.metadata.domain
            }),
            old_idp_mapping: jsx("b", {
              children: t
            })
          })
        });
        return jsx("span", {
          children: renderI18nText("activity_log.event.org_domain_idp_mapping_change", {
            domain: jsx("b", {
              children: e.metadata.domain
            }),
            old_idp_mapping: jsx("b", {
              children: t
            }),
            new_idp_mapping: jsx("b", {
              children: a
            })
          })
        });
      }
    default:
      console.warn(`${e.event_name} is an unknown event name.`);
      return null;
  }
}
export function $$eg1(e) {
  if (!(["community_hub_file_publish", "community_hub_file_update", "community_hub_file_delete", "fig_file_create", "fig_file_duplicate", "fig_file_link_access_change", "fig_file_proto_link_access_change", "fig_file_viewer_access_change", "fig_file_member_add", "fig_file_member_permission_change", "fig_file_member_remove", "fig_file_move", "fig_file_export", "fig_file_image_download", "fig_file_permanent_delete", "fig_file_permanent_undelete", "fig_file_rename", "fig_file_restore", "fig_file_save_as", "fig_file_set_password", "fig_file_trash", "fig_file_unset_password", "fig_file_view", "fig_file_view_prototype", "supabase_project_connected", "supabase_project_disconnected", "repo_branch_archive", "repo_branch_create", "repo_branch_delete", "repo_merge_to_source", "repo_branch_unarchive", "repo_merge_from_source", "file_repo_member_add", "file_repo_member_remove", "file_repo_member_permission_change", "org_user_account_type_change", "org_user_account_type_change_to_full", "org_user_account_type_upgrade_approved", "org_user_account_type_upgrade_denied", "org_user_account_type_upgrade_requested", "sites_subdomain_changed", "sites_custom_domain_activate", "sites_custom_domain_removal", "sites_set_password", "sites_unset_password", "sites_publish", "sites_unpublish"].includes(e.event_name) && !ex(e.metadata))) return "\u2013";
  {
    let t = null;
    if (e.metadata.editor_type && e.metadata.editor_type !== FFileType.SLIDES && e.metadata.editor_type !== FFileType.SITES && e.metadata.editor_type !== FFileType.FIGMAKE && e.metadata.editor_type !== FFileType.COOPER && !Ye.has(e.metadata.editor_type)) (t = px(e.metadata.editor_type)) || reportError(_$$e.SCALE, Error(`Unexpected editor_type '${e.metadata.editor_type}' encountered in event '${e.event_name}'`), {
      tags: {
        id: e.id
      }
    });else if (e.metadata.editor_type === FFileType.SLIDES) return getI18nString("general.figma_slides");else if (e.metadata.editor_type === FFileType.SITES) return getI18nString("general.figma_sites");else if (e.metadata.editor_type === FFileType.FIGMAKE) return getI18nString("general.figma_rev");else if (e.metadata.editor_type === FFileType.COOPER) return getI18nString("general.figma_buzz");
    return t ? _$$E(t) : _$$E(Te.DESIGN);
  }
}
export function $$eh0(e) {
  let t = UV()(FOrganizationLevelType.ORG);
  let a = !!e.hideIpColumn;
  let i = e => e.is_idp_action ? getI18nString("activity_log.actor.scim_provider") : e.is_figma_admin_action ? getI18nString("activity_log.actor.figma_support") : e.actor ? e.actor.email ? e.actor.name : getI18nString("activity_log.actor.deleted_user") : getI18nString("activity_log.actor.anonymous_user");
  let r = e => e.is_figma_admin_action || !e.actor ? null : e.actor.email ? e.actor.email : e.actor.id.toString();
  let l = getI18nState()?.getPrimaryLocale(!1) ?? defaultLanguage;
  return jsx("div", {
    className: "activity_logs_table--table--J8Tj5",
    children: e.logs.map(s => {
      let d = $$ep2(s, e.org.name, r(s), t);
      if (!d) return;
      let _ = new $$default("{now, date, ::MMMdyyy}", l).format({
        now: new Date(s.created_at)
      });
      return jsxs(Hj, {
        className: "activity_logs_table--row--4fhRo",
        useAdminTableStyles: !0,
        children: [jsxs("div", {
          className: "activity_logs_table--dateColumn--5T2UC activity_logs_table--date--HSpQ0 activity_logs_table--_columnVertical--0zHKO",
          children: [jsx("div", {
            children: _.toString()
          }), jsx("div", {
            className: eu,
            children: _$$A(s.created_at).format("h:mma")
          })]
        }), s.is_figma_admin_action || !s.actor?.email ? jsxs("div", {
          className: e_,
          children: [jsx("div", {
            children: i(s)
          }), jsx("div", {
            className: eu,
            children: r(s)
          })]
        }) : jsx("div", {
          className: e_,
          children: jsx(_$$r, {
            className: "activity_logs_table--avatarWithHandle--r7oaQ admin_settings_page--avatarWithHandle--awCiS ellipsis--ellipsis--Tjyfa",
            dispatch: e.dispatch,
            entity: {
              id: s.actor.id,
              name: s.actor.name,
              email: s.actor.email,
              img_url: s.actor.img_url
            },
            showTooltip: !0,
            size: 24
          })
        }), jsx("div", {
          className: "activity_logs_table--eventDescriptionColumn--iVdqK",
          children: d
        }), jsx("div", {
          className: "activity_logs_table--productColumn--Rdwla",
          children: $$eg1(s)
        }), jsx("div", {
          className: "activity_logs_table--teamColumn--byNbw",
          children: s.metadata.team_name || "\u2013"
        }), !a && jsx("div", {
          className: "activity_logs_table--ipColumn--yvwN5",
          children: s.ip_address
        })]
      }, s.id);
    })
  });
}
function ex(e) {
  return "old_seat_type" in e && "new_seat_type" in e;
}
function eb(e) {
  if (e === Gu.VIEW) return getI18nString("checkout.view");
  {
    let t = e && f2(e);
    return isNotNullish(t) ? y[t].displayName() : void 0;
  }
}
export const zR = $$eh0;
export const Bn = $$eg1;
export const $X = $$ep2;
export const rq = $$em3;