import { pJ } from "../905/787926"
import { EntityType } from "../905/806400"

interface PermissionFieldConfig {
  name: string
  type: {
    kind: string
    name?: string
  }
  args: Array<{
    name: string
    type: {
      kind: string
    }
    nullable: boolean
  }>
  computed: boolean
  permissionName: string
  dependencies: unknown
}

interface PermissionDefaults {
  canView: boolean
  canViewWithReasons: {
    result: boolean
    publicDenyReasons: never[]
  }
  canAdmin: boolean
  canAdminWithReasons: {
    result: boolean
    publicDenyReasons: never[]
  }
  canCreateTeam: boolean
  canCreateTeamWithReasons: {
    result: boolean
    publicDenyReasons: never[]
  }
}

// Permission field configurations
const canViewField: PermissionFieldConfig = {
  name: "canView",
  type: {
    kind: "bool",
  },
  args: [{
    name: "userId",
    type: {
      kind: "bigint",
    },
    nullable: true,
  }],
  computed: true,
  permissionName: "WORKSPACE::CAN_VIEW",
  dependencies: pJ["WORKSPACE::CAN_VIEW"],
}

const canViewWithReasonsField: PermissionFieldConfig = {
  name: "canViewWithReasons",
  type: {
    kind: "object",
    name: EntityType.PermissionEvaluationResult,
  },
  args: [{
    name: "userId",
    type: {
      kind: "bigint",
    },
    nullable: true,
  }],
  computed: true,
  permissionName: "WORKSPACE::CAN_VIEW",
  dependencies: pJ["WORKSPACE::CAN_VIEW"],
}

const canAdminField: PermissionFieldConfig = {
  name: "canAdmin",
  type: {
    kind: "bool",
  },
  args: [{
    name: "userId",
    type: {
      kind: "bigint",
    },
    nullable: true,
  }],
  computed: true,
  permissionName: "WORKSPACE::CAN_ADMIN",
  dependencies: pJ["WORKSPACE::CAN_ADMIN"],
}

const canAdminWithReasonsField: PermissionFieldConfig = {
  name: "canAdminWithReasons",
  type: {
    kind: "object",
    name: EntityType.PermissionEvaluationResult,
  },
  args: [{
    name: "userId",
    type: {
      kind: "bigint",
    },
    nullable: true,
  }],
  computed: true,
  permissionName: "WORKSPACE::CAN_ADMIN",
  dependencies: pJ["WORKSPACE::CAN_ADMIN"],
}

const canCreateTeamField: PermissionFieldConfig = {
  name: "canCreateTeam",
  type: {
    kind: "bool",
  },
  args: [{
    name: "userId",
    type: {
      kind: "bigint",
    },
    nullable: true,
  }],
  computed: true,
  permissionName: "WORKSPACE::CAN_CREATE_TEAM",
  dependencies: pJ["WORKSPACE::CAN_CREATE_TEAM"],
}

const canCreateTeamWithReasonsField: PermissionFieldConfig = {
  name: "canCreateTeamWithReasons",
  type: {
    kind: "object",
    name: EntityType.PermissionEvaluationResult,
  },
  args: [{
    name: "userId",
    type: {
      kind: "bigint",
    },
    nullable: true,
  }],
  computed: true,
  permissionName: "WORKSPACE::CAN_CREATE_TEAM",
  dependencies: pJ["WORKSPACE::CAN_CREATE_TEAM"],
}

// Default permission values
export const defaultPermissions: PermissionDefaults = {
  canView: false,
  canViewWithReasons: {
    result: false,
    publicDenyReasons: [],
  },
  canAdmin: false,
  canAdminWithReasons: {
    result: false,
    publicDenyReasons: [],
  },
  canCreateTeam: false,
  canCreateTeamWithReasons: {
    result: false,
    publicDenyReasons: [],
  },
}

// Ordered list of permission field configurations
export const permissionFields: PermissionFieldConfig[] = [
  canAdminField,
  canAdminWithReasonsField,
  canCreateTeamField,
  canCreateTeamWithReasonsField,
  canViewField,
  canViewWithReasonsField,
]

export const fM = defaultPermissions
export const oJ = permissionFields
