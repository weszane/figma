function n(e) {
  for (var t = 1; t < $$arguments.length; t++) {
    var i = null != $$arguments[t] ? $$arguments[t] : {};
    var n = Object.keys(i);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(i).filter(function (e) {
      return Object.getOwnPropertyDescriptor(i, e).enumerable;
    })));
    n.forEach(function (t) {
      var n;
      n = i[t];
      t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n;
    });
  }
  return e;
}
function r(e, t) {
  t = null != t ? t : {};
  Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : function (e, t) {
    var i = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      i.push.apply(i, n);
    }
    return i;
  }(Object(t)).forEach(function (i) {
    Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(t, i));
  });
  return e;
}
let $$a1 = "clip-huge-ai-proto-offline-pretrained-chk";
let $$s2 = "use-heuristics-for-icons";
function o(e) {
  let t = "us.meta.llama3-2-90b-instruct-v1:0";
  let i = r(n({}, e), {
    gptConfig: r(n({}, e.gptConfig), {
      modelName: t,
      providerId: "amazon-bedrock"
    })
  });
  e.captioningModel && (i.captioningModel = t);
  return i;
}
let $$l3 = {
  providerId: "openai",
  modelName: "gpt-4o-2024-05-13",
  promptDir: "gpt_4o",
  temperature: .15,
  jsxFilters: ["flatten_groups", "remove_empty_nodes", "remove_invisible_nodes", "remove_long_or_generated_text", "remove_nonstandard_node_types"]
};
let d = {
  gptConfig: $$l3,
  heuristicInteractionHoisting: !0
};
let c = {
  gptConfig: {
    providerId: "openai",
    modelName: "ft:gpt-4o-2024-08-06:figma-development::A95wrEFE:ckpt-step-732",
    promptDir: "gpt_4o_fine_tuned",
    top_p: 0,
    jsxFilters: ["remove_empty_nodes", "remove_invisible_nodes", "remove_long_or_generated_text"]
  },
  heuristicInteractionHoisting: !1
};
let u = {
  gptConfig: {
    providerId: "openai",
    modelName: "ft:gpt-4o-2024-08-06:figma-development::A95wrEFE:ckpt-step-732",
    promptDir: "gpt_4o_fine_tuned",
    top_p: 0,
    jsxFilters: ["remove_empty_nodes", "remove_invisible_nodes", "remove_long_or_generated_text"]
  },
  inputImagesToLLM: !1,
  heuristicInteractionHoisting: !1,
  iconClassifierEndpointName: "magic-link-icon-classifier-v1",
  iconClassifierColumns: ["normalizedYRelativeToTlf", "childCharactersLength", "areaRelativeToParent", "textTypeTime", "normalizedXRelativeToTlf", "nodeTypeLine", "widthRelativeToTlf", "charactersLength", "inSemanticTypeHeader", "numDescendants", "inSemanticTypeFooter", "width", "nodeTypeText", "childCharactersAreExactBackButtonString", "childTextTypeTime", "numAncestors", "fontSize", "parentNodeTypeSymbol", "area", "textIsExactBackButtonString", "cornerRadius", "nameIsExactBackButtonString", "heightRelativeToTlf", "numEllipseDescendants", "isLeftAlignedText", "height", "parentNodeTypeGroup", "nodeTypeEllipse", "isInNavigationMenu", "numGroupDescendants", "isLargestButtonInTLF", "numChildren", "numSiblingsSameTypeAndArea", "relativeYPositionToParent", "textTypeNoLetters", "relativeXPositionToParent", "inSemanticTypeButton", "colorfulness", "semanticTypeButton", "numRoundedRectDescendants", "TlfNumDescendants", "aspectRatio", "parentNodeTypeInstance", "numTextDescendants", "nodeTypeVector", "numSiblingsSameType", "childFontSize", "numVectorDescendants", "hasColorfulSolidFill", "isGenericEmptyNode", "isCenterAlignedText", "isContainerWithGenericVectors", "containingTlfWidth", "numSiblings", "containingTlfHeight", "numRectDescendants", "childTextTypeNoLetters", "numTLFsLeftOfContainingTLF", "parentNodeTypeFrame", "numFrameDescendants", "TlfNumTextDescendants", "isIconish", "nodeTypeFrame", "numColsInSelection", "nodeTypeInstance", "numTLFsBelowContainingTLF", "numRowsInSelection", "numTLFsRightOfContainingTLF", "nodeTypeGroup", "numInstanceDescendants", "numImageDescendants", "numTLFsAboveContainingTLF", "nodeTypeRectangle", "isCovered", "isSearchContainer", "isSearchStringText", "nodeTypeSymbol", "isRightAlignedText", "isEmptyInputText", "isFilledInputText", "isInputContainer", "childTextTypePrice", "isClippedByAncestor", "semanticTypeHeader", "isTlf", "semanticTypeInput", "semanticTypeFooter", "inSemanticTypeInput", "isNavigationMenu", "isInputField", "textTypePrice", "nodeIsVisible", "nodeTypeBooleanOperation"],
  backButtonClassifierEndpointName: "magic-link-back-button-classifier-v4",
  backButtonClassifierColumns: ["area", "isTlf", "numAncestors", "numDescendants", "numChildren", "numSiblings", "numSiblingsSameType", "numSiblingsSameTypeAndArea", "nameIsExactBackButtonString", "textIsExactBackButtonString", "nodeTypeEllipse", "nodeTypeFrame", "nodeTypeGroup", "nodeTypeInstance", "nodeTypeRectangle", "nodeTypeSymbol", "nodeTypeText", "nodeTypeVector", "nodeTypeBooleanOperation", "nodeTypeLine", "parentNodeTypeFrame", "parentNodeTypeGroup", "parentNodeTypeInstance", "parentNodeTypeSymbol", "nodeIsVisible", "containingTlfWidth", "containingTlfHeight", "normalizedXRelativeToTlf", "normalizedYRelativeToTlf", "fontSize", "childCharactersAreExactBackButtonString", "childFontSize", "semanticTypeButton", "semanticTypeHeader", "semanticTypeInput", "semanticTypeFooter", "inSemanticTypeButton", "inSemanticTypeHeader", "inSemanticTypeInput", "inSemanticTypeFooter", "isEmptyRectangle", "isEmptyVector", "textTypePrice", "textTypeTime", "textTypeNoLetters", "childTextTypePrice", "childTextTypeTime", "childTextTypeNoLetters", "isContainerWithGenericVectors", "isLeftAlignedText", "isRightAlignedText", "isCenterAlignedText", "isSearchContainer", "isSearchStringText", "isEmptyInputText", "isFilledInputText", "backButtonScore", "emptyImageScore", "highestOtherArrowScore", "highestNonArrowScore", "charactersLength", "childCharactersLength", "overlappingSiblingFontSize", "overlappingSiblingCharactersLength", "overlappingTextTypePrice", "overlappingTextTypeTime", "overlappingTextTypeNoLetters", "isMaybeBackButton", "numVisuallyContainedSiblings", "numVisuallyContainingSiblings", "visuallyContainedInRectangle", "numVisuallyContainedRectangles", "maxAreaRatioVisuallyContainedSiblings", "minAreaRatioVisuallyContainingSiblings", "width", "height", "areaRelativeToParent", "aspectRatio", "cornerRadius", "isClippedByAncestor", "widthRelativeToTlf", "heightRelativeToTlf", "isNavigationMenu", "isInNavigationMenu", "isGenericEmptyNode", "isCovered", "numTLFsLeftOfContainingTLF", "numTLFsRightOfContainingTLF", "numTLFsAboveContainingTLF", "numTLFsBelowContainingTLF", "isIconish", "isInputField", "numRowsInSelection", "numColsInSelection", "hasColorfulSolidFill", "colorfulness", "isLargestButtonInTLF", "numEllipseDescendants", "numFrameDescendants", "numGroupDescendants", "numImageDescendants", "numInstanceDescendants", "numTextDescendants", "numRectDescendants", "numRoundedRectDescendants", "numVectorDescendants", "TlfNumDescendants", "TlfNumTextDescendants", "isInputContainer", "relativeXPositionToParent", "relativeYPositionToParent"]
};
let p = {
  gptConfig: {
    providerId: "openai",
    modelName: "ft:gpt-4o-2024-08-06:figma-development::A95wrEFE:ckpt-step-732",
    promptDir: "gpt_4o_fine_tuned",
    top_p: 0,
    jsxFilters: ["remove_empty_nodes", "remove_invisible_nodes", "remove_long_or_generated_text"]
  },
  heuristicInteractionHoisting: !1,
  iconClassifierEndpointName: $$s2,
  inputImagesToLLM: !0,
  imageProcessing: "checkerboard"
};
let m = {
  gptConfig: {
    providerId: "openai",
    modelName: "ft:gpt-4o-2024-08-06:figma-development::AOJ3FqLB",
    promptDir: "gpt_4o_fine_tuned",
    top_p: 0,
    jsxFilters: ["remove_empty_nodes", "remove_invisible_nodes", "remove_long_or_generated_text"]
  },
  heuristicInteractionHoisting: !1,
  iconClassifierEndpointName: $$s2,
  inputImagesToLLM: !0,
  captioningModel: "gpt-4o-mini-2024-07-18"
};
let h = {
  gpt: d,
  llama: o(d),
  "gpt-fine-tuned": c,
  "llama-fine-tuned": o(c),
  "gpt-fine-tuned-v2": u,
  "llama-fine-tuned-v2": o(u),
  "gpt-fine-tuned-vision": p,
  "llama-fine-tuned-vision": o(p),
  "gpt-multi-stage-captioning": m,
  "llama-multi-stage-captioning": o(m),
  ensemble: {
    gptConfig: $$l3,
    heuristicInteractionHoisting: !1,
    ensembleConfig: {
      endpointName: "magic-link-v27",
      features: ["area_source", "area_target", "aspect_ratio_source", "aspect_ratio_target", "characters_length_source", "child_characters_length_source", "child_text_font_size_source", "colorfulness_delta", "corner_radius_source", "font_size_source", "gains_colorful_solid_fill", "gptScore", "has_child_characters_source", "height_relative_to_tlf_source", "height_source", "height_target", "hoisted_image_area_ratio_source", "hoisted_image_width_ratio_source", "hoisted_image_height_ratio_source", "hoisted_image_from_child_num_levels_source", "hoisted_image_from_sibling_source", "hoisted_image_num_candidates_source", "image_max_similarity_area_ratio", "image_max_similarity_target_area", "image_max_similarity_with_target_descendant_characters", "image_max_similarity_with_target_descendant_characters_global_avg", "image_max_similarity_with_target_descendant_characters_global_count", "image_max_similarity_with_target_descendant_characters_per_source_avg", "image_max_similarity_with_target_descendant_characters_per_source_count", "image_max_similarity_with_target_descendant_names", "image_max_similarity_with_target_descendant_names_global_avg", "image_max_similarity_with_target_descendant_names_global_count", "image_max_similarity_with_target_descendant_names_per_source_avg", "image_max_similarity_with_target_descendant_names_per_source_count", "image_max_similarity_with_target_descendants", "image_max_similarity_with_target_descendants_global_avg", "image_max_similarity_with_target_descendants_global_count", "image_max_similarity_with_target_descendants_per_source_avg", "image_max_similarity_with_target_descendants_per_source_count", "image_similarity_with_target_tlf_name", "image_similarity_with_target_tlf_name_global_avg", "image_similarity_with_target_tlf_name_global_count", "image_similarity_with_target_tlf_name_per_source_avg", "image_similarity_with_target_tlf_name_per_source_count", "image_similarity_with_target_tlf_summary", "image_similarity_with_target_tlf_summary_global_avg", "image_similarity_with_target_tlf_summary_global_count", "image_similarity_with_target_tlf_summary_per_source_avg", "image_similarity_with_target_tlf_summary_per_source_count", "image_similarity_with_target_tlf_name_summary", "image_similarity_with_target_tlf_name_summary_global_avg", "image_similarity_with_target_tlf_name_summary_global_count", "image_similarity_with_target_tlf_name_summary_per_source_avg", "image_similarity_with_target_tlf_name_summary_per_source_count", "in_semantic_type_footer_source", "in_semantic_type_header_source", "is_covered_source", "is_generic_empty_node_source", "is_iconish_source", "is_in_navigation_menu_source", "is_input_field_source", "is_largest_button_in_tlf_source", "is_maybe_back_button_source", "is_navigation_menu_source", "loses_colorful_solid_fill", "name_max_similarity_with_target_descendants", "name_max_similarity_with_target_descendants_global_avg", "name_max_similarity_with_target_descendants_global_count", "name_max_similarity_with_target_descendants_per_source_avg", "name_max_similarity_with_target_descendants_per_source_count", "name_similarity_with_target_tlf_name", "name_similarity_with_target_tlf_name_global_avg", "name_similarity_with_target_tlf_name_global_count", "name_similarity_with_target_tlf_name_per_source_avg", "name_similarity_with_target_tlf_name_per_source_count", "name_similarity_with_target_tlf_summary", "name_similarity_with_target_tlf_summary_global_avg", "name_similarity_with_target_tlf_summary_global_count", "name_similarity_with_target_tlf_summary_per_source_avg", "name_similarity_with_target_tlf_summary_per_source_count", "name_similarity_with_target_tlf_name_summary", "name_similarity_with_target_tlf_name_summary_global_avg", "name_similarity_with_target_tlf_name_summary_global_count", "name_similarity_with_target_tlf_name_summary_per_source_avg", "name_similarity_with_target_tlf_name_summary_per_source_count", "node_type_boolean_operation_source", "node_type_ellipse_source", "node_type_frame_source", "node_type_group_source", "node_type_instance_source", "node_type_line_source", "node_type_rectangle_source", "node_type_symbol_source", "node_type_text_source", "node_type_vector_source", "normalized_relative_x_source", "normalized_relative_y_source", "numAncestors_source", "numChildren_source", "numChildren_target", "numCols", "numDescendants_source", "numDescendants_target", "numNodes", "numRows", "numSourceTlfCombinations", "numSiblings_source", "numTextDescendants_source", "numTextDescendants_target", "numTlfs", "num_tlfs_above_source", "num_tlfs_below_source", "num_tlfs_left_source", "num_tlfs_right_source", "overlapping_sibling_characters_length_source", "overlapping_text_font_size_source", "semantic_type_button_source", "semantic_type_footer_source", "semantic_type_header_source", "text_max_similarity_font_ratio", "text_max_similarity_source_descendent", "text_max_similarity_source_overlapping", "text_max_similarity_source_self", "text_max_similarity_target_num_chars", "text_max_similarity_with_target_descendant_images", "text_max_similarity_with_target_descendant_images_global_avg", "text_max_similarity_with_target_descendant_images_global_count", "text_max_similarity_with_target_descendant_images_per_source_avg", "text_max_similarity_with_target_descendant_images_per_source_count", "text_max_similarity_with_target_descendants", "text_max_similarity_with_target_descendants_global_avg", "text_max_similarity_with_target_descendants_global_count", "text_max_similarity_with_target_descendants_per_source_avg", "text_max_similarity_with_target_descendants_per_source_count", "text_similarity_with_target_tlf_name", "text_similarity_with_target_tlf_name_global_avg", "text_similarity_with_target_tlf_name_global_count", "text_similarity_with_target_tlf_name_per_source_avg", "text_similarity_with_target_tlf_name_per_source_count", "text_similarity_with_target_tlf_summary", "text_similarity_with_target_tlf_summary_global_avg", "text_similarity_with_target_tlf_summary_global_count", "text_similarity_with_target_tlf_summary_per_source_avg", "text_similarity_with_target_tlf_summary_per_source_count", "text_similarity_with_target_tlf_name_summary", "text_similarity_with_target_tlf_name_summary_global_avg", "text_similarity_with_target_tlf_name_summary_global_count", "text_similarity_with_target_tlf_name_summary_per_source_avg", "text_similarity_with_target_tlf_name_summary_per_source_count", "text_type_no_letters_source", "text_type_not_normal_source", "text_type_price_source", "text_type_time_source", "tlf_area_source", "tlf_aspect_ratio_source", "tlf_height_source", "tlf_num_descendants_source", "tlf_num_descendants_target", "tlf_num_text_descendants_source", "tlf_num_text_descendants_target", "tlfs_between_target_and_source", "width_relative_to_tlf_source", "width_source", "width_target", "x_rel_diff_target_tlf_to_source_tlf", "y_rel_diff_target_tlf_to_source_tlf"]
    }
  },
  "ensemble-v2": {
    gptConfig: {
      providerId: "openai",
      modelName: "ft:gpt-4o-2024-08-06:figma-development::A95wrEFE:ckpt-step-732",
      promptDir: "gpt_4o_fine_tuned",
      top_p: 0,
      jsxFilters: ["remove_long_or_generated_text"]
    },
    heuristicInteractionHoisting: !1,
    iconClassifierEndpointName: "magic-link-icon-classifier-v1",
    ensembleConfig: {
      endpointName: "magic-link-v29",
      acceptAllGptInteractions: !0,
      features: ["area_source", "area_target", "aspect_ratio_source", "aspect_ratio_target", "characters_length_source", "child_characters_length_source", "child_text_font_size_source", "colorfulness_delta", "corner_radius_source", "font_size_source", "gains_colorful_solid_fill", "gptScore", "gptScoreHoistedFromAncestors", "gptScoreHoistedFromAncestorsAreaRatio", "gptScoreHoistedFromDescendants", "gptScoreHoistedFromDescendantsAreaRatio", "gptScoreHoistedFromDescendantsNumSteps", "gptScoreHoistedFromSiblings", "gptScoreHoistedFromSiblingsAreaRatio", "has_child_characters_source", "height_relative_to_tlf_source", "height_source", "height_target", "hoisted_image_area_ratio_source", "hoisted_image_width_ratio_source", "hoisted_image_height_ratio_source", "hoisted_image_from_child_num_levels_source", "hoisted_image_from_sibling_source", "hoisted_image_num_candidates_source", "image_max_similarity_area_ratio", "image_max_similarity_target_area", "image_max_similarity_with_target_descendant_characters", "image_max_similarity_with_target_descendant_characters_global_avg", "image_max_similarity_with_target_descendant_characters_global_count", "image_max_similarity_with_target_descendant_characters_per_source_avg", "image_max_similarity_with_target_descendant_characters_per_source_count", "image_max_similarity_with_target_descendant_names", "image_max_similarity_with_target_descendant_names_global_avg", "image_max_similarity_with_target_descendant_names_global_count", "image_max_similarity_with_target_descendant_names_per_source_avg", "image_max_similarity_with_target_descendant_names_per_source_count", "image_max_similarity_with_target_descendants", "image_max_similarity_with_target_descendants_global_avg", "image_max_similarity_with_target_descendants_global_count", "image_max_similarity_with_target_descendants_per_source_avg", "image_max_similarity_with_target_descendants_per_source_count", "image_similarity_with_target_tlf_name", "image_similarity_with_target_tlf_name_global_avg", "image_similarity_with_target_tlf_name_global_count", "image_similarity_with_target_tlf_name_per_source_avg", "image_similarity_with_target_tlf_name_per_source_count", "image_similarity_with_target_tlf_summary", "image_similarity_with_target_tlf_summary_global_avg", "image_similarity_with_target_tlf_summary_global_count", "image_similarity_with_target_tlf_summary_per_source_avg", "image_similarity_with_target_tlf_summary_per_source_count", "image_similarity_with_target_tlf_name_summary", "image_similarity_with_target_tlf_name_summary_global_avg", "image_similarity_with_target_tlf_name_summary_global_count", "image_similarity_with_target_tlf_name_summary_per_source_avg", "image_similarity_with_target_tlf_name_summary_per_source_count", "in_semantic_type_footer_source", "in_semantic_type_header_source", "is_covered_source", "is_generic_empty_node_source", "is_iconish_source", "is_in_navigation_menu_source", "is_input_field_source", "is_largest_button_in_tlf_source", "is_maybe_back_button_source", "is_navigation_menu_source", "loses_colorful_solid_fill", "name_max_similarity_with_target_descendants", "name_max_similarity_with_target_descendants_global_avg", "name_max_similarity_with_target_descendants_global_count", "name_max_similarity_with_target_descendants_per_source_avg", "name_max_similarity_with_target_descendants_per_source_count", "name_similarity_with_target_tlf_name", "name_similarity_with_target_tlf_name_global_avg", "name_similarity_with_target_tlf_name_global_count", "name_similarity_with_target_tlf_name_per_source_avg", "name_similarity_with_target_tlf_name_per_source_count", "name_similarity_with_target_tlf_summary", "name_similarity_with_target_tlf_summary_global_avg", "name_similarity_with_target_tlf_summary_global_count", "name_similarity_with_target_tlf_summary_per_source_avg", "name_similarity_with_target_tlf_summary_per_source_count", "name_similarity_with_target_tlf_name_summary", "name_similarity_with_target_tlf_name_summary_global_avg", "name_similarity_with_target_tlf_name_summary_global_count", "name_similarity_with_target_tlf_name_summary_per_source_avg", "name_similarity_with_target_tlf_name_summary_per_source_count", "node_type_boolean_operation_source", "node_type_ellipse_source", "node_type_frame_source", "node_type_group_source", "node_type_instance_source", "node_type_line_source", "node_type_rectangle_source", "node_type_symbol_source", "node_type_text_source", "node_type_vector_source", "normalized_relative_x_source", "normalized_relative_y_source", "numAncestors_source", "numChildren_source", "numChildren_target", "numCols", "numDescendants_source", "numDescendants_target", "numNodes", "numRows", "numSourceTlfCombinations", "numSiblings_source", "numTextDescendants_source", "numTextDescendants_target", "numTlfs", "num_tlfs_above_source", "num_tlfs_below_source", "num_tlfs_left_source", "num_tlfs_right_source", "overlapping_sibling_characters_length_source", "overlapping_text_font_size_source", "semantic_type_button_source", "semantic_type_footer_source", "semantic_type_header_source", "text_max_similarity_font_ratio", "text_max_similarity_source_descendent", "text_max_similarity_source_overlapping", "text_max_similarity_source_self", "text_max_similarity_target_num_chars", "text_max_similarity_with_target_descendant_images", "text_max_similarity_with_target_descendant_images_global_avg", "text_max_similarity_with_target_descendant_images_global_count", "text_max_similarity_with_target_descendant_images_per_source_avg", "text_max_similarity_with_target_descendant_images_per_source_count", "text_max_similarity_with_target_descendants", "text_max_similarity_with_target_descendants_global_avg", "text_max_similarity_with_target_descendants_global_count", "text_max_similarity_with_target_descendants_per_source_avg", "text_max_similarity_with_target_descendants_per_source_count", "text_similarity_with_target_tlf_name", "text_similarity_with_target_tlf_name_global_avg", "text_similarity_with_target_tlf_name_global_count", "text_similarity_with_target_tlf_name_per_source_avg", "text_similarity_with_target_tlf_name_per_source_count", "text_similarity_with_target_tlf_summary", "text_similarity_with_target_tlf_summary_global_avg", "text_similarity_with_target_tlf_summary_global_count", "text_similarity_with_target_tlf_summary_per_source_avg", "text_similarity_with_target_tlf_summary_per_source_count", "text_similarity_with_target_tlf_name_summary", "text_similarity_with_target_tlf_name_summary_global_avg", "text_similarity_with_target_tlf_name_summary_global_count", "text_similarity_with_target_tlf_name_summary_per_source_avg", "text_similarity_with_target_tlf_name_summary_per_source_count", "text_type_no_letters_source", "text_type_not_normal_source", "text_type_price_source", "text_type_time_source", "tlf_area_source", "tlf_aspect_ratio_source", "tlf_height_source", "tlf_num_descendants_source", "tlf_num_descendants_target", "tlf_num_text_descendants_source", "tlf_num_text_descendants_target", "tlfs_between_target_and_source", "width_relative_to_tlf_source", "width_source", "width_target", "x_rel_diff_target_tlf_to_source_tlf", "y_rel_diff_target_tlf_to_source_tlf"]
    }
  }
};
export function $$g0(e) {
  let t = h[e];
  if (!t) {
    let t = Object.keys(h).join(", ");
    throw Error(`Unknown ensemble model variant: ${e}. Please select from: ${t}`);
  }
  return t;
}
export const Ac = $$g0;
export const Gm = $$a1;
export const O4 = $$s2;
export const bc = $$l3;