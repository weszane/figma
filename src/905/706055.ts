import { fc } from "../905/239603";
import { FFolderType } from "../figma_app/191312";
import { repositoryDefinition } from "../905/954314";
import { createDataMapper, processAdditionalConfig } from "../905/508958";
let o = fc(FFolderType);
let $$l0 = createDataMapper(repositoryDefinition, e => ({
  id: e.camel(),
  name: e.camel(),
  folder_id: e.camel(),
  default_file_key: e.camel(),
  deleted_at: e.custom({
    toLiveGraph: e => null === e ? null : new Date(e),
    toSinatra: e => e?.toISOString() || null
  }).camel(),
  trashed_at: e.custom({
    toLiveGraph: e => null === e ? null : new Date(e),
    toSinatra: e => e?.toISOString() || null
  }).camel(),
  created_at: e.camel().stringToDate(),
  updated_at: e.camel().stringToDate(),
  team_id: e.camel(),
  link_access: e.camel(),
  proto_link_access: e.camel(),
  has_file_link_password: e.camel().custom({
    toLiveGraph: e => !!e,
    toSinatra: e => e
  }),
  has_proto_link_password: e.camel().custom({
    toLiveGraph: e => !!e,
    toSinatra: e => e
  }),
  org_audience: e.camel(),
  org_browsable: e.camel(),
  parent_org_id: e.camel(),
  is_favorited: e.camel(),
  has_active_branches: e.camel().custom({
    toLiveGraph: e => !!e,
    toSinatra: e => e
  }),
  trashed_with_parent: e.camel().custom({
    toLiveGraph: e => null == e ? null : o.parse(e),
    toSinatra: e => e
  }),
  realtime_token: e.drop(),
  shared_at: e.drop(),
  shared_by: e.drop(),
  shared_by_user: e.drop(),
  parent_org: e.drop(),
  parent_team: e.drop()
}));
processAdditionalConfig((e, t, i) => [e()($$l0), t($$l0)(), i($$l0)()]);
export const H = $$l0;