import { describeNormalized } from "../905/67898";
import { z } from "../905/239603";
import { createDataMapper, processAdditionalConfig } from "../905/508958";
let r = describeNormalized("TrackTags", z.object({
  default_library_file_treatment_id: z.string().optional().nullable(),
  figma_basics_experiment: z.string().optional().nullable(),
  is_template: z.boolean().optional().nullable(),
  migrated_from_drafts_folder_id: z.string().optional().nullable(),
  source: z.string().optional().nullable(),
  starter_library_src_file_key: z.string().optional().nullable(),
  is_duplicated_from_dev_mode_demo_file: z.boolean().optional().nullable(),
  is_duplicated_from_supabase_connected_file: z.boolean().optional().nullable()
}));
export let $$s0 = createDataMapper(r, e => ({
  default_library_file_treatment_id: e.camel().custom({
    toLiveGraph: e => void 0 === e ? null : e,
    toSinatra: e => e
  }),
  figma_basics_experiment: e.camel().custom({
    toLiveGraph: e => void 0 === e ? null : e,
    toSinatra: e => e
  }),
  is_template: e.camel().custom({
    toLiveGraph: e => void 0 === e ? null : e,
    toSinatra: e => e
  }),
  migrated_from_drafts_folder_id: e.camel().custom({
    toLiveGraph: e => void 0 === e ? null : e,
    toSinatra: e => e
  }),
  source: e.camel().custom({
    toLiveGraph: e => void 0 === e ? null : e,
    toSinatra: e => e
  }),
  starter_library_src_file_key: e.camel().custom({
    toLiveGraph: e => void 0 === e ? null : e,
    toSinatra: e => e
  }),
  is_duplicated_from_dev_mode_demo_file: e.camel().custom({
    toLiveGraph: e => void 0 === e ? null : e,
    toSinatra: e => e
  }),
  is_duplicated_from_supabase_connected_file: e.camel().custom({
    toLiveGraph: e => void 0 === e ? null : e,
    toSinatra: e => e
  })
}));
processAdditionalConfig((e, t, i) => [e()($$s0), t($$s0)(), i($$s0)()]);
export const Z = $$s0; 
