import { tx } from "../905/303541";
export class $$r0 {}
$$r0.OpenTypeFeatureGroups = [{
  group_name: "Letter case",
  tags: ["PCAP", "C2PC", "CASE", "CPSP", "TITL", "UNIC"]
}, {
  group_name: "Numbers",
  tags: ["AFRC", "ZERO"]
}, {
  group_name: "Letterforms",
  tags: ["LIGA", "CLIG", "DLIG", "HLIG", "CALT", "RCLT", "ORDN", "RVRN", "VERT", "SWSH", "CSWH", "NALT", "STCH", "HIST", "ORNM", "ITAL", "RAND"]
}, {
  group_name: "Stylistic sets",
  tags: ["SALT", "SS01", "SS02", "SS03", "SS04", "SS05", "SS06", "SS07", "SS08", "SS09", "SS10", "SS11", "SS12", "SS13", "SS14", "SS15", "SS16", "SS17", "SS18", "SS19", "SS20"]
}, {
  group_name: "Character variants",
  tags: ["CV01", "CV02", "CV03", "CV04", "CV05", "CV06", "CV07", "CV08", "CV09", "CV10", "CV11", "CV12", "CV13", "CV14", "CV15", "CV16", "CV17", "CV18", "CV19", "CV20", "CV21", "CV22", "CV23", "CV24", "CV25", "CV26", "CV27", "CV28", "CV29", "CV30", "CV31", "CV32", "CV33", "CV34", "CV35", "CV36", "CV37", "CV38", "CV39", "CV40", "CV41", "CV42", "CV43", "CV44", "CV45", "CV46", "CV47", "CV48", "CV49", "CV50", "CV51", "CV52", "CV53", "CV54", "CV55", "CV56", "CV57", "CV58", "CV59", "CV60", "CV61", "CV62", "CV63", "CV64", "CV65", "CV66", "CV67", "CV68", "CV69", "CV70", "CV71", "CV72", "CV73", "CV74", "CV75", "CV76", "CV77", "CV78", "CV79", "CV80", "CV81", "CV82", "CV83", "CV84", "CV85", "CV86", "CV87", "CV88", "CV89", "CV90", "CV91", "CV92", "CV93", "CV94", "CV95", "CV96", "CV97", "CV98", "CV99"]
}, {
  group_name: "Math",
  tags: ["DTLS", "FLAC", "MGRK", "SSTY"]
}, {
  group_name: "Horizontal spacing",
  tags: ["KERN", "FWID", "HWID", "HALT", "TWID", "QWID", "PWID", "JUST", "LFBD", "OPBD", "RTBD", "PALT", "PKNA"]
}, {
  group_name: "Writing direction",
  tags: ["LTRA", "LTRM", "RTLA", "RTLM"]
}, {
  group_name: "More features",
  tags: ["DNOM", "NUMR", "SINF", "ABRV", "VALT", "VHAL", "CFAR", "CPCT", "CURS", "EXPT", "FALT", "FINA", "FIN2", "FIN3", "HALN", "HKNA", "HNGL", "HOJO", "INIT", "ISOL", "JP78", "JP83", "JP90", "JP04", "LJMO", "MEDI", "MED2", "NLCK", "PREF", "VPAL", "PSTF", "RUBY", "SMPL", "TJMO", "TNAM", "TRAD", "VJMO", "VKNA", "VKRN", "VRTR", "VRT2"]
}];
$$r0.OpenTypeFeatureDefaultOn = ["CALT", "CLIG", "CURS", "KERN", "LIGA", "RCLT", "CCMP", "LOCL", "MARK", "MKMK", "RLIG"];
$$r0.OpenTypeFeatureNames = {
  PCAP: tx("type_settings.open_type_features.petite_capitals"),
  C2PC: tx("type_settings.open_type_features.petite_capitals_from_capitals"),
  CASE: tx("type_settings.open_type_features.case_sensitive_forms"),
  CPSP: tx("type_settings.open_type_features.capital_spacing"),
  TITL: tx("type_settings.open_type_features.titling"),
  UNIC: tx("type_settings.open_type_features.unicase"),
  AFRC: tx("type_settings.open_type_features.alternative_fractions"),
  DNOM: tx("type_settings.open_type_features.fraction_denominators"),
  NUMR: tx("type_settings.open_type_features.fraction_numerators"),
  SINF: tx("type_settings.open_type_features.scientific_inferiors"),
  ORDN: tx("type_settings.open_type_features.ordinals"),
  ZERO: tx("type_settings.open_type_features.slashed_zero"),
  LIGA: tx("type_settings.open_type_features.ligatures"),
  CLIG: tx("type_settings.open_type_features.contextual_ligatures"),
  DLIG: tx("type_settings.open_type_features.rare_ligatures"),
  HLIG: tx("type_settings.open_type_features.historical_ligatures"),
  RLIG: tx("type_settings.open_type_features.required_ligatures"),
  AALT: tx("type_settings.open_type_features.access_all_alternates"),
  CALT: tx("type_settings.open_type_features.contextual_alternates"),
  RCLT: tx("type_settings.open_type_features.required_contextual_alternates"),
  SALT: tx("type_settings.open_type_features.stylistic_alternates"),
  RVRN: tx("type_settings.open_type_features.required_variation_alternates"),
  VERT: tx("type_settings.open_type_features.vertical_alternates"),
  SWSH: tx("type_settings.open_type_features.swash"),
  CSWH: tx("type_settings.open_type_features.contextual_swash"),
  NALT: tx("type_settings.open_type_features.alternate_annotation_forms"),
  CCMP: tx("type_settings.open_type_features.glyph_composition_decomposition"),
  STCH: tx("type_settings.open_type_features.stretching_glyph_decomposition"),
  HIST: tx("type_settings.open_type_features.historical_forms"),
  SIZE: tx("type_settings.open_type_features.optical_size"),
  ORNM: tx("type_settings.open_type_features.ornaments"),
  ITAL: tx("type_settings.open_type_features.italics"),
  RAND: tx("type_settings.open_type_features.randomize"),
  DTLS: tx("type_settings.open_type_features.dotless_forms"),
  FLAC: tx("type_settings.open_type_features.flattened_ascent_forms"),
  MGRK: tx("type_settings.open_type_features.mathematical_greek"),
  SSTY: tx("type_settings.open_type_features.math_script_style_alternates"),
  KERN: tx("type_settings.open_type_features.kerning_pairs"),
  FWID: tx("type_settings.open_type_features.full_widths"),
  HWID: tx("type_settings.open_type_features.half_widths"),
  HALT: tx("type_settings.open_type_features.alternate_half_widths"),
  TWID: tx("type_settings.open_type_features.third_widths"),
  QWID: tx("type_settings.open_type_features.quarter_widths"),
  PWID: tx("type_settings.open_type_features.proportional_widths"),
  JUST: tx("type_settings.open_type_features.justification_alternates"),
  LFBD: tx("type_settings.open_type_features.left_bounds"),
  OPBD: tx("type_settings.open_type_features.optical_bounds"),
  RTBD: tx("type_settings.open_type_features.right_bounds"),
  PALT: tx("type_settings.open_type_features.proportional_alternate_widths"),
  PKNA: tx("type_settings.open_type_features.proportional_kana"),
  LTRA: tx("type_settings.open_type_features.left_to_right_alternates"),
  LTRM: tx("type_settings.open_type_features.left_to_right_mirrored_forms"),
  RTLA: tx("type_settings.open_type_features.right_to_left_alternates"),
  RTLM: tx("type_settings.open_type_features.right_to_left_mirrored_forms"),
  ABRV: tx("type_settings.open_type_features.above_base_forms"),
  ABVM: tx("type_settings.open_type_features.above_base_mark_positioning"),
  ABVS: tx("type_settings.open_type_features.above_base_substitutions"),
  VALT: tx("type_settings.open_type_features.alternate_vertical_metrics"),
  VHAL: tx("type_settings.open_type_features.alternate_vertical_half_metrics"),
  BLWF: tx("type_settings.open_type_features.below_base_forms"),
  BLWM: tx("type_settings.open_type_features.below_base_mark_positioning"),
  BLWS: tx("type_settings.open_type_features.below_base_substitutions"),
  AKHN: tx("type_settings.open_type_features.akhand_ligature_devanagari"),
  CJCT: tx("type_settings.open_type_features.conjuct_forms"),
  CFAR: tx("type_settings.open_type_features.conjunct_form_after_ro"),
  CPCT: tx("type_settings.open_type_features.centered_cjk_punctuation"),
  CURS: tx("type_settings.open_type_features.cursive_positioning"),
  DIST: tx("type_settings.open_type_features.distances"),
  EXPT: tx("type_settings.open_type_features.expert_forms"),
  FALT: tx("type_settings.open_type_features.final_glyph_on_line_alternates"),
  FINA: tx("type_settings.open_type_features.terminal_forms"),
  FIN2: tx("type_settings.open_type_features.terminal_form", {
    integerArgument: 2
  }),
  FIN3: tx("type_settings.open_type_features.terminal_form", {
    integerArgument: 3
  }),
  HALF: tx("type_settings.open_type_features.half_forms"),
  HALN: tx("type_settings.open_type_features.halant_forms"),
  HKNA: tx("type_settings.open_type_features.horizontal_kana_alternates"),
  HNGL: tx("type_settings.open_type_features.hangul"),
  HOJO: tx("type_settings.open_type_features.hojo_kanji_forms"),
  INIT: tx("type_settings.open_type_features.initial_forms"),
  ISOL: tx("type_settings.open_type_features.isolated_forms"),
  JP78: tx("type_settings.open_type_features.j_i_s_78_forms"),
  JP83: tx("type_settings.open_type_features.j_i_s_83_forms"),
  JP90: tx("type_settings.open_type_features.j_i_s_90_forms"),
  JP04: tx("type_settings.open_type_features.j_i_s_2004_forms"),
  LJMO: tx("type_settings.open_type_features.leading_jamo_forms_hangul"),
  LOCL: tx("type_settings.open_type_features.localized_forms"),
  MARK: tx("type_settings.open_type_features.mark_positioning_arabic"),
  MEDI: tx("type_settings.open_type_features.medial_forms"),
  MED2: tx("type_settings.open_type_features.medial_forms_2"),
  MKMK: tx("type_settings.open_type_features.mark_to_mark_positioning"),
  NLCK: tx("type_settings.open_type_features.nlc_kanji_forms"),
  NUKT: tx("type_settings.open_type_features.nukta_forms"),
  PREF: tx("type_settings.open_type_features.pre_base_forms"),
  PRES: tx("type_settings.open_type_features.pre_base_substitutions"),
  VPAL: tx("type_settings.open_type_features.proportional_alternate_vertical_metrics"),
  PSTF: tx("type_settings.open_type_features.post_base_forms"),
  PSTS: tx("type_settings.open_type_features.post_base_substitutions"),
  RKRF: tx("type_settings.open_type_features.rakar_forms"),
  RPHF: tx("type_settings.open_type_features.reph_form"),
  RUBY: tx("type_settings.open_type_features.ruby_notation_forms"),
  SMPL: tx("type_settings.open_type_features.simplified_forms"),
  TJMO: tx("type_settings.open_type_features.trailing_jamo_forms"),
  TNAM: tx("type_settings.open_type_features.traditional_name_forms"),
  TRAD: tx("type_settings.open_type_features.traditional_forms"),
  VATU: tx("type_settings.open_type_features.vattu_variants"),
  VJMO: tx("type_settings.open_type_features.vovel_jamo_forms"),
  VKNA: tx("type_settings.open_type_features.vertical_kana_alternates"),
  VKRN: tx("type_settings.open_type_features.vertical_kerning"),
  VRTR: tx("type_settings.open_type_features.vertical_alternates_for_rotation"),
  VRT2: tx("type_settings.open_type_features.vertical_alternates_and_rotation"),
  SS01: tx("type_settings.open_type_features.stylistic_set", {
    integerArgument: 1
  }),
  SS02: tx("type_settings.open_type_features.stylistic_set", {
    integerArgument: 2
  }),
  SS03: tx("type_settings.open_type_features.stylistic_set", {
    integerArgument: 3
  }),
  SS04: tx("type_settings.open_type_features.stylistic_set", {
    integerArgument: 4
  }),
  SS05: tx("type_settings.open_type_features.stylistic_set", {
    integerArgument: 5
  }),
  SS06: tx("type_settings.open_type_features.stylistic_set", {
    integerArgument: 6
  }),
  SS07: tx("type_settings.open_type_features.stylistic_set", {
    integerArgument: 7
  }),
  SS08: tx("type_settings.open_type_features.stylistic_set", {
    integerArgument: 8
  }),
  SS09: tx("type_settings.open_type_features.stylistic_set", {
    integerArgument: 9
  }),
  SS10: tx("type_settings.open_type_features.stylistic_set", {
    integerArgument: 10
  }),
  SS11: tx("type_settings.open_type_features.stylistic_set", {
    integerArgument: 11
  }),
  SS12: tx("type_settings.open_type_features.stylistic_set", {
    integerArgument: 12
  }),
  SS13: tx("type_settings.open_type_features.stylistic_set", {
    integerArgument: 13
  }),
  SS14: tx("type_settings.open_type_features.stylistic_set", {
    integerArgument: 14
  }),
  SS15: tx("type_settings.open_type_features.stylistic_set", {
    integerArgument: 15
  }),
  SS16: tx("type_settings.open_type_features.stylistic_set", {
    integerArgument: 16
  }),
  SS17: tx("type_settings.open_type_features.stylistic_set", {
    integerArgument: 17
  }),
  SS18: tx("type_settings.open_type_features.stylistic_set", {
    integerArgument: 18
  }),
  SS19: tx("type_settings.open_type_features.stylistic_set", {
    integerArgument: 19
  }),
  SS20: tx("type_settings.open_type_features.stylistic_set", {
    integerArgument: 20
  }),
  CV01: tx("type_settings.open_type_features.character_variant", {
    integerArgument: 1
  }),
  CV02: tx("type_settings.open_type_features.character_variant", {
    integerArgument: 2
  }),
  CV03: tx("type_settings.open_type_features.character_variant", {
    integerArgument: 3
  }),
  CV04: tx("type_settings.open_type_features.character_variant", {
    integerArgument: 4
  }),
  CV05: tx("type_settings.open_type_features.character_variant", {
    integerArgument: 5
  }),
  CV06: tx("type_settings.open_type_features.character_variant", {
    integerArgument: 6
  }),
  CV07: tx("type_settings.open_type_features.character_variant", {
    integerArgument: 7
  }),
  CV08: tx("type_settings.open_type_features.character_variant", {
    integerArgument: 8
  }),
  CV09: tx("type_settings.open_type_features.character_variant", {
    integerArgument: 9
  }),
  CV10: tx("type_settings.open_type_features.character_variant", {
    integerArgument: 10
  }),
  CV11: tx("type_settings.open_type_features.character_variant", {
    integerArgument: 11
  }),
  CV12: tx("type_settings.open_type_features.character_variant", {
    integerArgument: 12
  }),
  CV13: tx("type_settings.open_type_features.character_variant", {
    integerArgument: 13
  }),
  CV14: tx("type_settings.open_type_features.character_variant", {
    integerArgument: 14
  }),
  CV15: tx("type_settings.open_type_features.character_variant", {
    integerArgument: 15
  }),
  CV16: tx("type_settings.open_type_features.character_variant", {
    integerArgument: 16
  }),
  CV17: tx("type_settings.open_type_features.character_variant", {
    integerArgument: 17
  }),
  CV18: tx("type_settings.open_type_features.character_variant", {
    integerArgument: 18
  }),
  CV19: tx("type_settings.open_type_features.character_variant", {
    integerArgument: 19
  }),
  CV20: tx("type_settings.open_type_features.character_variant", {
    integerArgument: 20
  }),
  CV21: tx("type_settings.open_type_features.character_variant", {
    integerArgument: 21
  }),
  CV22: tx("type_settings.open_type_features.character_variant", {
    integerArgument: 22
  }),
  CV23: tx("type_settings.open_type_features.character_variant", {
    integerArgument: 23
  }),
  CV24: tx("type_settings.open_type_features.character_variant", {
    integerArgument: 24
  }),
  CV25: tx("type_settings.open_type_features.character_variant", {
    integerArgument: 25
  }),
  CV26: tx("type_settings.open_type_features.character_variant", {
    integerArgument: 26
  }),
  CV27: tx("type_settings.open_type_features.character_variant", {
    integerArgument: 27
  }),
  CV28: tx("type_settings.open_type_features.character_variant", {
    integerArgument: 28
  }),
  CV29: tx("type_settings.open_type_features.character_variant", {
    integerArgument: 29
  }),
  CV30: tx("type_settings.open_type_features.character_variant", {
    integerArgument: 30
  }),
  CV31: tx("type_settings.open_type_features.character_variant", {
    integerArgument: 31
  }),
  CV32: tx("type_settings.open_type_features.character_variant", {
    integerArgument: 32
  }),
  CV33: tx("type_settings.open_type_features.character_variant", {
    integerArgument: 33
  }),
  CV34: tx("type_settings.open_type_features.character_variant", {
    integerArgument: 34
  }),
  CV35: tx("type_settings.open_type_features.character_variant", {
    integerArgument: 35
  }),
  CV36: tx("type_settings.open_type_features.character_variant", {
    integerArgument: 36
  }),
  CV37: tx("type_settings.open_type_features.character_variant", {
    integerArgument: 37
  }),
  CV38: tx("type_settings.open_type_features.character_variant", {
    integerArgument: 38
  }),
  CV39: tx("type_settings.open_type_features.character_variant", {
    integerArgument: 39
  }),
  CV40: tx("type_settings.open_type_features.character_variant", {
    integerArgument: 40
  }),
  CV41: tx("type_settings.open_type_features.character_variant", {
    integerArgument: 41
  }),
  CV42: tx("type_settings.open_type_features.character_variant", {
    integerArgument: 42
  }),
  CV43: tx("type_settings.open_type_features.character_variant", {
    integerArgument: 43
  }),
  CV44: tx("type_settings.open_type_features.character_variant", {
    integerArgument: 44
  }),
  CV45: tx("type_settings.open_type_features.character_variant", {
    integerArgument: 45
  }),
  CV46: tx("type_settings.open_type_features.character_variant", {
    integerArgument: 46
  }),
  CV47: tx("type_settings.open_type_features.character_variant", {
    integerArgument: 47
  }),
  CV48: tx("type_settings.open_type_features.character_variant", {
    integerArgument: 48
  }),
  CV49: tx("type_settings.open_type_features.character_variant", {
    integerArgument: 49
  }),
  CV50: tx("type_settings.open_type_features.character_variant", {
    integerArgument: 50
  }),
  CV51: tx("type_settings.open_type_features.character_variant", {
    integerArgument: 51
  }),
  CV52: tx("type_settings.open_type_features.character_variant", {
    integerArgument: 52
  }),
  CV53: tx("type_settings.open_type_features.character_variant", {
    integerArgument: 53
  }),
  CV54: tx("type_settings.open_type_features.character_variant", {
    integerArgument: 54
  }),
  CV55: tx("type_settings.open_type_features.character_variant", {
    integerArgument: 55
  }),
  CV56: tx("type_settings.open_type_features.character_variant", {
    integerArgument: 56
  }),
  CV57: tx("type_settings.open_type_features.character_variant", {
    integerArgument: 57
  }),
  CV58: tx("type_settings.open_type_features.character_variant", {
    integerArgument: 58
  }),
  CV59: tx("type_settings.open_type_features.character_variant", {
    integerArgument: 59
  }),
  CV60: tx("type_settings.open_type_features.character_variant", {
    integerArgument: 60
  }),
  CV61: tx("type_settings.open_type_features.character_variant", {
    integerArgument: 61
  }),
  CV62: tx("type_settings.open_type_features.character_variant", {
    integerArgument: 62
  }),
  CV63: tx("type_settings.open_type_features.character_variant", {
    integerArgument: 63
  }),
  CV64: tx("type_settings.open_type_features.character_variant", {
    integerArgument: 64
  }),
  CV65: tx("type_settings.open_type_features.character_variant", {
    integerArgument: 65
  }),
  CV66: tx("type_settings.open_type_features.character_variant", {
    integerArgument: 66
  }),
  CV67: tx("type_settings.open_type_features.character_variant", {
    integerArgument: 67
  }),
  CV68: tx("type_settings.open_type_features.character_variant", {
    integerArgument: 68
  }),
  CV69: tx("type_settings.open_type_features.character_variant", {
    integerArgument: 69
  }),
  CV70: tx("type_settings.open_type_features.character_variant", {
    integerArgument: 70
  }),
  CV71: tx("type_settings.open_type_features.character_variant", {
    integerArgument: 71
  }),
  CV72: tx("type_settings.open_type_features.character_variant", {
    integerArgument: 72
  }),
  CV73: tx("type_settings.open_type_features.character_variant", {
    integerArgument: 73
  }),
  CV74: tx("type_settings.open_type_features.character_variant", {
    integerArgument: 74
  }),
  CV75: tx("type_settings.open_type_features.character_variant", {
    integerArgument: 75
  }),
  CV76: tx("type_settings.open_type_features.character_variant", {
    integerArgument: 76
  }),
  CV77: tx("type_settings.open_type_features.character_variant", {
    integerArgument: 77
  }),
  CV78: tx("type_settings.open_type_features.character_variant", {
    integerArgument: 78
  }),
  CV79: tx("type_settings.open_type_features.character_variant", {
    integerArgument: 79
  }),
  CV80: tx("type_settings.open_type_features.character_variant", {
    integerArgument: 80
  }),
  CV81: tx("type_settings.open_type_features.character_variant", {
    integerArgument: 81
  }),
  CV82: tx("type_settings.open_type_features.character_variant", {
    integerArgument: 82
  }),
  CV83: tx("type_settings.open_type_features.character_variant", {
    integerArgument: 83
  }),
  CV84: tx("type_settings.open_type_features.character_variant", {
    integerArgument: 84
  }),
  CV85: tx("type_settings.open_type_features.character_variant", {
    integerArgument: 85
  }),
  CV86: tx("type_settings.open_type_features.character_variant", {
    integerArgument: 86
  }),
  CV87: tx("type_settings.open_type_features.character_variant", {
    integerArgument: 87
  }),
  CV88: tx("type_settings.open_type_features.character_variant", {
    integerArgument: 88
  }),
  CV89: tx("type_settings.open_type_features.character_variant", {
    integerArgument: 89
  }),
  CV90: tx("type_settings.open_type_features.character_variant", {
    integerArgument: 90
  }),
  CV91: tx("type_settings.open_type_features.character_variant", {
    integerArgument: 91
  }),
  CV92: tx("type_settings.open_type_features.character_variant", {
    integerArgument: 92
  }),
  CV93: tx("type_settings.open_type_features.character_variant", {
    integerArgument: 93
  }),
  CV94: tx("type_settings.open_type_features.character_variant", {
    integerArgument: 94
  }),
  CV95: tx("type_settings.open_type_features.character_variant", {
    integerArgument: 95
  }),
  CV96: tx("type_settings.open_type_features.character_variant", {
    integerArgument: 96
  }),
  CV97: tx("type_settings.open_type_features.character_variant", {
    integerArgument: 97
  }),
  CV98: tx("type_settings.open_type_features.character_variant", {
    integerArgument: 98
  }),
  CV99: tx("type_settings.open_type_features.character_variant", {
    integerArgument: 99
  })
};
export const G = $$r0;