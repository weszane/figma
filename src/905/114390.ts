import { ElementTypeEnum } from '../905/129884';
import { getI18nString } from '../905/303541';
import { debugState } from '../905/407919';
import { getFeatureFlags } from '../905/601108';
import { postUserFlag } from '../905/985254';
import { buildUploadUrl } from '../figma_app/169182';
let d = buildUploadUrl('6a475d98f86a36f65dcb117d395ba97299936193');
let c = '#FADCA2';
let $$u2 = {
  'set-tool-default': {
    assetUrl: buildUploadUrl('9b325bed1ac3574234e9c70763ecdd885da55cb7'),
    assetBgColor: '#FFC470',
    getDescription: () => getI18nString('help_on_hover.select_and_move_objects')
  },
  'set-tool-scale': {
    assetUrl: buildUploadUrl('695d3c7532184cf5a8ef6747952a8364630231f8'),
    assetBgColor: '#FFC470',
    getDescription: () => getI18nString('help_on_hover.proportionally_resize_objects')
  },
  'set-tool-frame': {
    assetUrl: buildUploadUrl('3c6700181ba85f0d0e79c98d4261bdaded9a10bd'),
    assetBgColor: '#AFBCCF',
    getDescription: () => getI18nString('help_on_hover.draw_containers_to_hold_designs')
  },
  'set-tool-section': {
    assetUrl: buildUploadUrl('bda225edcdd987d7031e762b1b4d50dff769c6b0'),
    assetBgColor: '#AFBCCF',
    getDescription: () => getI18nString('help_on_hover.group_related_designs_to_organize_your_canvas_for_collaborators')
  },
  'set-tool-slice': {
    assetUrl: buildUploadUrl('6cd822eb7d3f0ddf161a5df473f6500e08658364'),
    assetBgColor: '#AFBCCF',
    getDescription: () => getI18nString('help_on_hover.export_a_specific_part_of_your_design')
  },
  'set-tool-rectangle': {
    assetUrl: d,
    assetBgColor: c,
    getDescription: () => getI18nString('help_on_hover.draw_vector_shapes_like_rectangles_circles_and_more')
  },
  'set-tool-line': {
    assetUrl: buildUploadUrl('8d7c470e7cfc3ad3b163d549df7119ff6e611aee'),
    assetBgColor: c,
    getDescription: () => getI18nString('help_on_hover.draw_lines_between_two_points')
  },
  'set-tool-arrow': {
    assetUrl: buildUploadUrl('1ab8ad201e6b384e4e0e1aa22c101f9eeabe369f'),
    assetBgColor: c,
    getDescription: () => getI18nString('help_on_hover.draw_arrows_between_two_points')
  },
  'set-tool-ellipse': {
    assetUrl: d,
    assetBgColor: c,
    getDescription: () => getI18nString('help_on_hover.draw_vector_shapes_like_rectangles_circles_and_more')
  },
  'set-tool-regular-polygon': {
    assetUrl: d,
    assetBgColor: c,
    getDescription: () => getI18nString('help_on_hover.draw_vector_shapes_like_rectangles_circles_and_more')
  },
  'set-tool-star': {
    assetUrl: d,
    assetBgColor: c,
    getDescription: () => getI18nString('help_on_hover.draw_vector_shapes_like_rectangles_circles_and_more')
  },
  'place': {
    assetUrl: buildUploadUrl('367bd03bfb73337091cc9a6f78a192d021d666e9'),
    assetBgColor: c,
    getDescription: () => getI18nString('help_on_hover.add_images_or_video_to_your_design')
  },
  'set-tool-pen': {
    assetUrl: buildUploadUrl('953fba23ddb40a712dc12ddef0c774814c761053'),
    assetBgColor: '#FFC6F2',
    getDescription: () => getI18nString('help_on_hover.draw_vector_shapes_and_paths')
  },
  'set-tool-pencil': {
    assetUrl: buildUploadUrl('7788b8b59b8aac4b6e40bd999aa24fda8b9c0ce9'),
    assetBgColor: '#FFC6F2',
    getDescription: () => getI18nString('help_on_hover.draw_freehand_sketches')
  },
  'set-tool-type': {
    assetUrl: buildUploadUrl('81cb004fdcc52a09b70f279dfecd345809b890d5'),
    assetBgColor: '#D5EB97',
    getDescription: () => getI18nString('help_on_hover.add_a_text_box')
  },
  'component-insert': {
    assetUrl: buildUploadUrl('a013b57cf8f53dce708621e1055ba2ba05e80067'),
    assetBgColor: '#E9FDEF',
    getDescription: () => getI18nString('help_on_hover.run_plugins_and_widgets_or_add_components_from_libraries')
  },
  'set-tool-hand': {
    assetUrl: buildUploadUrl('47b9fd427186f071f21f2c5fde49f235a255377a'),
    assetBgColor: '#80CAFF',
    getDescription: () => getI18nString('help_on_hover.navigate_the_canvas')
  },
  'set-tool-comments': {
    assetUrl: buildUploadUrl('e5fa78c66fa8ba1a544d2b511df5dac34722a443'),
    assetBgColor: '#C7B9FF',
    getDescription: () => getI18nString('help_on_hover.leave_notes_or_tag_collaborators')
  }
};
let $$p0 = Object.keys($$u2);
export function $$m3(e) {
  return e?.kind === ElementTypeEnum.KEY && $$p0.includes(e.key);
}
export function $$h1() {
  return getFeatureFlags().exp_help_on_hover_ff && debugState && debugState.getState().userFlags.in_help_on_hover_exp_treatment ? [{
    name: 'show-ui-hints-in-toolbar',
    get checked() {
      return !debugState.getState().userFlags.disabled_help_on_hover_ui_hints;
    },
    callback: (e, t, i) => {
      i(postUserFlag({
        disabled_help_on_hover_ui_hints: !debugState.getState().userFlags.disabled_help_on_hover_ui_hints
      }));
    },
    flags: ['design']
  }] : [];
}
export const TT = $$p0;
export const go = $$h1;
export const oo = $$u2;
export const ul = $$m3;