import { pJ } from "../905/787926";
import { Y } from "../905/806400";
let a = {
  name: "canView",
  type: {
    kind: "bool"
  },
  args: [{
    name: "userId",
    type: {
      kind: "bigint"
    },
    nullable: !0
  }],
  computed: !0,
  permissionName: "WORKSPACE::CAN_VIEW",
  dependencies: pJ["WORKSPACE::CAN_VIEW"]
};
let s = {
  name: "canViewWithReasons",
  type: {
    kind: "object",
    name: Y.PermissionEvaluationResult
  },
  args: [{
    name: "userId",
    type: {
      kind: "bigint"
    },
    nullable: !0
  }],
  computed: !0,
  permissionName: "WORKSPACE::CAN_VIEW",
  dependencies: pJ["WORKSPACE::CAN_VIEW"]
};
let o = {
  name: "canAdmin",
  type: {
    kind: "bool"
  },
  args: [{
    name: "userId",
    type: {
      kind: "bigint"
    },
    nullable: !0
  }],
  computed: !0,
  permissionName: "WORKSPACE::CAN_ADMIN",
  dependencies: pJ["WORKSPACE::CAN_ADMIN"]
};
let l = {
  name: "canAdminWithReasons",
  type: {
    kind: "object",
    name: Y.PermissionEvaluationResult
  },
  args: [{
    name: "userId",
    type: {
      kind: "bigint"
    },
    nullable: !0
  }],
  computed: !0,
  permissionName: "WORKSPACE::CAN_ADMIN",
  dependencies: pJ["WORKSPACE::CAN_ADMIN"]
};
let d = {
  name: "canCreateTeam",
  type: {
    kind: "bool"
  },
  args: [{
    name: "userId",
    type: {
      kind: "bigint"
    },
    nullable: !0
  }],
  computed: !0,
  permissionName: "WORKSPACE::CAN_CREATE_TEAM",
  dependencies: pJ["WORKSPACE::CAN_CREATE_TEAM"]
};
let c = {
  name: "canCreateTeamWithReasons",
  type: {
    kind: "object",
    name: Y.PermissionEvaluationResult
  },
  args: [{
    name: "userId",
    type: {
      kind: "bigint"
    },
    nullable: !0
  }],
  computed: !0,
  permissionName: "WORKSPACE::CAN_CREATE_TEAM",
  dependencies: pJ["WORKSPACE::CAN_CREATE_TEAM"]
};
let $$u0 = {
  canView: !1,
  canViewWithReasons: {
    result: !1,
    publicDenyReasons: []
  },
  canAdmin: !1,
  canAdminWithReasons: {
    result: !1,
    publicDenyReasons: []
  },
  canCreateTeam: !1,
  canCreateTeamWithReasons: {
    result: !1,
    publicDenyReasons: []
  }
};
let $$p1 = [o, l, d, c, a, s];
export const fM = $$u0;
export const oJ = $$p1;