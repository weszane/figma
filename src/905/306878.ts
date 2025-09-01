import { Jj, QR, aL, _D, Xn, lc, nf, bp, C7, Fh, g4 } from "../figma_app/33004";
let r = {
  FILE: {
    policyResourceType: Jj.FILE,
    objectName: "File",
    rootFieldName: "filePrototypeInfo",
    fieldAlias: "file",
    liveGraphDependencies: "FilePermissionsDependencies",
    liveGraphPolicyDependencies: "FilePermissionsPolicyDependencies",
    objectIdentifyingArgs: [{
      name: "key",
      type: {
        kind: "string"
      }
    }],
    userIdentifyingArgs: [],
    permissionEnumName: "FilePermission",
    allPermissions: Object.values(QR),
    permissions: {
      [QR.CAN_ACCESS_DEV_MODE_ENTRY_POINT]: {
        computedFieldName: "canAccessDevModeEntryPointV2",
        viewIsOptional: !1
      },
      [QR.CAN_ACCESS_FULL_DEV_MODE]: {
        computedFieldName: "canAccessFullDevModeV2",
        viewIsOptional: !1
      },
      [QR.CAN_BECOME_EDITOR]: {
        computedFieldName: "canBecomeEditorV2"
      },
      [QR.CAN_DELETE]: {
        computedFieldName: "canDeleteV2",
        viewIsOptional: !1
      },
      [QR.CAN_EDIT_CANVAS]: {
        computedFieldName: "canEditCanvasV2",
        viewIsOptional: !1
      },
      [QR.CAN_EDIT_IGNORE_EDU_GRACE_PERIOD]: {
        computedFieldName: "canEditIgnoreEduGracePeriodV2",
        viewIsOptional: !1
      },
      [QR.CAN_EDIT]: {
        computedFieldName: "canEditV3",
        viewIsOptional: !1
      },
      [QR.CAN_FAVORITE]: {
        computedFieldName: "canFavoriteV2",
        viewIsOptional: !1
      },
      [QR.CAN_MANAGE]: {
        computedFieldName: "canManageV2",
        viewIsOptional: !1
      },
      [QR.CAN_PUBLISH_TEMPLATE]: {
        computedFieldName: "canPublishTemplateV2",
        viewIsOptional: !1
      },
      [QR.CAN_RENAME]: {
        computedFieldName: "canRenameV2",
        viewIsOptional: !1
      },
      [QR.CAN_VIEW_PROTOTYPE]: {
        computedFieldName: "canViewPrototypeV3",
        viewIsOptional: !1
      },
      [QR.CAN_VIEW]: {
        computedFieldName: "canViewV3",
        viewIsOptional: !1
      },
      [QR.CAN_ACCESS_FULL_DEV_MODE_ORG_PLUS]: {
        computedFieldName: "canAccessFullDevModeOrgPlusV2"
      },
      [QR.CAN_EDIT_IGNORE_PAID_STATUS]: {
        computedFieldName: "canEditIgnorePaidStatusV2",
        viewIsOptional: !1
      },
      [QR.CAN_INSERT_TEMPLATE]: {
        computedFieldName: "canInsertTemplateV3",
        viewIsOptional: !0
      },
      [QR.CAN_MOVE_COMMENTS]: {
        computedFieldName: "canMoveCommentsV2",
        viewIsOptional: !1
      },
      [QR.CAN_PERMANENTLY_DELETE]: {
        computedFieldName: "canPermanentlyDeleteV3"
      },
      [QR.CAN_RESTORE]: {
        computedFieldName: "canRestoreV3"
      },
      [QR.CAN_TRASH]: {
        computedFieldName: "canTrashV3"
      },
      [QR.CAN_VIEW_AND_CREATE_COMMENTS]: {
        computedFieldName: "canViewAndCreateCommentsV2",
        viewIsOptional: !1
      },
      [QR.IS_ELIGIBLE_FOR_DEV_MODE_TRIAL]: {
        computedFieldName: "isEligibleForDevModeTrialV2",
        viewIsOptional: !1
      },
      [QR.IS_IN_DEV_MODE_TRIAL]: {
        computedFieldName: "isInDevModeTrialV2",
        viewIsOptional: !1
      },
      [QR.MUST_REQUEST_EDITOR_ROLE_TO_EDIT]: {
        computedFieldName: "mustRequestEditorRoleToEdit"
      },
      [QR.CAN_ACCESS]: {
        requireLinkAccessOverrideKey: !0,
        viewIsOptional: !1
      },
      [QR.CAN_MOVE]: {
        reasonsViewIsOptional: !1
      },
      [QR.CAN_PUBLISH_SITE]: {
        viewIsOptional: !1
      }
    }
  },
  FILE_REPO: {
    policyResourceType: Jj.FILE_REPO,
    objectName: "Repo",
    rootFieldName: "repo",
    liveGraphDependencies: "RepoPermissionsDependencies",
    liveGraphPolicyDependencies: "RepoPermissionsPolicyDependencies",
    objectIdentifyingArgs: [{
      name: "id",
      type: {
        kind: "bigint"
      }
    }],
    userIdentifyingArgs: ["userId"],
    permissionEnumName: "RepoPermission",
    allPermissions: Object.values(aL),
    permissions: {
      [aL.CAN_VIEW]: {
        computedFieldName: "canViewV3"
      },
      [aL.CAN_VIEW_PROTOTYPE]: {
        viewIsOptional: !1
      },
      [aL.CAN_EDIT]: {
        viewIsOptional: !1,
        computedFieldName: "canEditV3"
      }
    }
  },
  ORG: {
    policyResourceType: Jj.ORG,
    objectName: "Org",
    rootFieldName: "org",
    liveGraphDependencies: "OrgPermissionsDependencies",
    liveGraphPolicyDependencies: "OrgPermissionsPolicyDependencies",
    objectIdentifyingArgs: [{
      name: "id",
      type: {
        kind: "bigint"
      },
      nullable: !0
    }],
    userIdentifyingArgs: ["userId"],
    permissionEnumName: "OrgPermission",
    allPermissions: Object.values(_D),
    permissions: {}
  },
  PLAN: {
    policyResourceType: Jj.PLAN,
    objectName: "Plan",
    rootFieldName: "plan",
    liveGraphDependencies: "PlanPermissionsDependencies",
    liveGraphPolicyDependencies: "PlanPermissionsPolicyDependencies",
    objectIdentifyingArgs: [{
      name: "planParentId",
      type: {
        kind: "bigint"
      },
      nullable: !1
    }, {
      name: "planType",
      type: {
        kind: "enum",
        name: "PlanType"
      },
      nullable: !1
    }],
    userIdentifyingArgs: ["userId"],
    permissionEnumName: "PlanPermission",
    allPermissions: Object.values(Xn),
    permissions: {},
    livegraphResourceType: "ComputedObject"
  },
  HUB_FILE: {
    policyResourceType: Jj.HUB_FILE,
    objectName: "HubFile",
    rootFieldName: "hubFile",
    liveGraphDependencies: "HubFilePermissionsDependencies",
    liveGraphPolicyDependencies: "HubFilePermissionsPolicyDependencies",
    objectIdentifyingArgs: [{
      name: "id",
      type: {
        kind: "bigint"
      }
    }],
    userIdentifyingArgs: ["userId"],
    permissionEnumName: "HubFilePermission",
    allPermissions: Object.values(lc),
    permissions: {
      [lc.CAN_VIEW]: {
        viewIsOptional: !1
      },
      [lc.CAN_DUPLICATE]: {
        skipComputedFieldReason: "Uses a virtual property `publisherProfileIds that we don't support`",
        excludeReasonsComputedField: !0
      },
      [lc.CAN_ADMIN_COMMENTS]: {
        skipComputedFieldReason: "Uses a virtual property `publisherProfileIds that we do not support`",
        excludeReasonsComputedField: !0
      }
    }
  },
  LITMUS_PROJECT: {
    policyResourceType: Jj.LITMUS_PROJECT,
    objectName: "LitmusProject",
    rootFieldName: "litmusProject",
    liveGraphDependencies: "LitmusProjectPermissionsDependencies",
    liveGraphPolicyDependencies: "LitmusProjectPermissionsPolicyDependencies",
    objectIdentifyingArgs: [{
      name: "id",
      type: {
        kind: "uuid"
      }
    }],
    userIdentifyingArgs: ["userId"],
    permissionEnumName: "LitmusProjectPermission",
    allPermissions: Object.values(nf),
    permissions: {
      [nf.CAN_VIEW]: {
        viewIsOptional: !0
      }
    }
  },
  WORKSPACE: {
    policyResourceType: Jj.WORKSPACE,
    objectName: "Workspace",
    rootFieldName: "workspace",
    liveGraphDependencies: "WorkspacePermissionsDependencies",
    liveGraphPolicyDependencies: "WorkspacePermissionsPolicyDependencies",
    objectIdentifyingArgs: [{
      name: "id",
      type: {
        kind: "bigint"
      }
    }],
    userIdentifyingArgs: ["userId"],
    permissionEnumName: "WorkspacePermission",
    allPermissions: Object.values(bp),
    permissions: {
      [bp.CAN_ADMIN]: {
        viewIsOptional: !1
      },
      [bp.CAN_CREATE_TEAM]: {
        viewIsOptional: !1
      },
      [bp.CAN_VIEW]: {
        viewIsOptional: !1
      }
    }
  },
  FOLDER: {
    policyResourceType: Jj.FOLDER,
    objectName: "Project",
    rootFieldName: "project",
    viewPrefix: "Folder",
    liveGraphDependencies: "FolderPermissionsDependencies",
    liveGraphPolicyDependencies: "FolderPermissionsPolicyDependencies",
    objectIdentifyingArgs: [{
      name: "id",
      type: {
        kind: "bigint"
      }
    }],
    userIdentifyingArgs: ["userId"],
    permissionEnumName: "FolderPermission",
    allPermissions: Object.values(C7),
    permissions: {
      [C7.CAN_EDIT]: {
        viewIsOptional: !1
      },
      [C7.IS_OWNER]: {
        viewIsOptional: !1
      },
      [C7.CAN_VIEW]: {
        viewIsOptional: !1,
        overrideViewField: {
          fieldName: "canRead",
          fieldArgs: ["userId"]
        }
      },
      [C7.SHOULD_USE_CONNECTED_PLAN_USER]: {
        generatePermissionArguments: !0
      }
    }
  },
  TEAM: {
    policyResourceType: Jj.TEAM,
    objectName: "Team",
    rootFieldName: "team",
    liveGraphDependencies: "TeamPermissionsDependencies",
    liveGraphPolicyDependencies: "TeamPermissionsPolicyDependencies",
    objectIdentifyingArgs: [{
      name: "id",
      type: {
        kind: "bigint"
      }
    }],
    userIdentifyingArgs: ["userId"],
    permissionEnumName: "TeamPermission",
    allPermissions: Object.values(Fh),
    permissions: {
      [Fh.CAN_ADMIN]: {
        viewIsOptional: !1
      },
      [Fh.CAN_EDIT]: {
        viewIsOptional: !1
      },
      [Fh.IS_OWNER]: {
        viewIsOptional: !1
      },
      [Fh.CAN_VIEW]: {
        viewIsOptional: !1,
        overrideViewField: {
          fieldName: "canRead",
          fieldArgs: ["userId"]
        }
      }
    }
  },
  USER_GROUP: {
    policyResourceType: Jj.USER_GROUP,
    objectName: "UserGroup",
    rootFieldName: "userGroup",
    liveGraphDependencies: "UserGroupPermissionsDependencies",
    liveGraphPolicyDependencies: "UserGroupPermissionsPolicyDependencies",
    objectIdentifyingArgs: [{
      name: "id",
      type: {
        kind: "uuid"
      }
    }],
    userIdentifyingArgs: [],
    permissionEnumName: "UserGroupPermission",
    allPermissions: Object.values(g4),
    permissions: {
      [g4.CAN_VIEW]: {}
    }
  }
};
let a = e => e.toLowerCase().replace(/^[a-z]/, function (e) {
  return e.toUpperCase();
}).replace(/_([a-z])/g, function (t) {
  if (t.length < 2) throw Error(`Invalid snake case string: ${e}`);
  return t[1].toUpperCase();
});
let s = e => a(e).replace(/^[A-Z]/, e => e.toLowerCase());
let o = {
  userId: {
    name: "userId",
    type: {
      kind: "bigint"
    },
    nullable: !0
  },
  sessionId: {
    name: "sessionId",
    type: {
      kind: "string"
    },
    nullable: !0
  },
  anonymousUserId: {
    name: "anonymousUserId",
    type: {
      kind: "string"
    },
    nullable: !0
  },
  linkAccessOverrideKey: {
    name: "linkAccessOverrideKey",
    type: {
      kind: "string"
    },
    nullable: !0
  },
  permissionArguments: {
    name: "permissionArguments",
    type: {
      kind: "map",
      valueType: {
        kind: "string"
      }
    },
    nullable: !0
  }
};
let l = {
  viewIsOptional: !0,
  reasonsViewIsOptional: !0,
  excludeReasonsComputedField: !1
};
var d = (e => (e.Fields = "fields", e.PoliciesFields = "policiesFields", e.PermissionFields = "permissionFields", e.ComputedFields = "computedFields", e.Views = "views", e.EvaluateTypeSignature = "evaluateTypeSignature", e.Dependencies = "dependencies", e.PoliciesDependencies = "policiesDependencies", e))(d || {});
Object.values({
  dependencies: "./dist/livegraph/dependencies",
  policiesDependencies: "./dist/livegraph/policies-dependencies",
  fields: "./dist/livegraph/schema-fields",
  policiesFields: "./dist/livegraph/schema-policies-fields",
  permissionFields: "./dist/livegraph/schema-permission-fields",
  computedFields: "./dist/livegraph/computed-fields",
  evaluateTypeSignature: "./dist/livegraph/evaluation_signatures",
  views: "./dist/livegraph/views"
});