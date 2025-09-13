import { z } from 'zod'
import { describeNormalized } from '../905/67898'
import { createDataMapper, processAdditionalConfig } from '../905/508958'

/**
 * TrackTagsSchema defines the structure for TrackTags.
 */
const TrackTagsSchema = z.object({
  default_library_file_treatment_id: z.string().optional().nullable(),
  figma_basics_experiment: z.string().optional().nullable(),
  is_template: z.boolean().optional().nullable(),
  migrated_from_drafts_folder_id: z.string().optional().nullable(),
  source: z.string().optional().nullable(),
  starter_library_src_file_key: z.string().optional().nullable(),
  is_duplicated_from_dev_mode_demo_file: z.boolean().optional().nullable(),
  is_duplicated_from_supabase_connected_file: z.boolean().optional().nullable(),
})

/**
 * Maps TrackTags fields with custom transformation logic.
 * @param e - Mapper utility
 * @returns Mapped fields for TrackTags
 */
function mapTrackTagsFields(e: any) {
  return {
  // default_library_file_treatment_id
    default_library_file_treatment_id: e.camel().custom({
      toLiveGraph: (val: string | undefined | null) => val === undefined ? null : val,
      toSinatra: (val: string | undefined | null) => val,
    }),
    // figma_basics_experiment
    figma_basics_experiment: e.camel().custom({
      toLiveGraph: (val: string | undefined | null) => val === undefined ? null : val,
      toSinatra: (val: string | undefined | null) => val,
    }),
    // is_template
    is_template: e.camel().custom({
      toLiveGraph: (val: boolean | undefined | null) => val === undefined ? null : val,
      toSinatra: (val: boolean | undefined | null) => val,
    }),
    // migrated_from_drafts_folder_id
    migrated_from_drafts_folder_id: e.camel().custom({
      toLiveGraph: (val: string | undefined | null) => val === undefined ? null : val,
      toSinatra: (val: string | undefined | null) => val,
    }),
    // source
    source: e.camel().custom({
      toLiveGraph: (val: string | undefined | null) => val === undefined ? null : val,
      toSinatra: (val: string | undefined | null) => val,
    }),
    // starter_library_src_file_key
    starter_library_src_file_key: e.camel().custom({
      toLiveGraph: (val: string | undefined | null) => val === undefined ? null : val,
      toSinatra: (val: string | undefined | null) => val,
    }),
    // is_duplicated_from_dev_mode_demo_file
    is_duplicated_from_dev_mode_demo_file: e.camel().custom({
      toLiveGraph: (val: boolean | undefined | null) => val === undefined ? null : val,
      toSinatra: (val: boolean | undefined | null) => val,
    }),
    // is_duplicated_from_supabase_connected_file
    is_duplicated_from_supabase_connected_file: e.camel().custom({
      toLiveGraph: (val: boolean | undefined | null) => val === undefined ? null : val,
      toSinatra: (val: boolean | undefined | null) => val,
    }),
  }
}

/**
 * TrackTagsMapper is the main data mapper for TrackTags.
 */
export const TrackTagsMapper = createDataMapper(
  describeNormalized('TrackTags', TrackTagsSchema),
  mapTrackTagsFields,
)

/**
 * Registers additional config processing for TrackTagsMapper.
 */
processAdditionalConfig((e, t, i) => [
  e()(TrackTagsMapper),
  t(TrackTagsMapper)(),
  i(TrackTagsMapper)(),
])

// Export for external usage (original: Z)
export const Z = TrackTagsMapper
