exports.wrapHunspellInterface = A => ({
  create: A("Hunspell_create", "number", ["number", "number"]),
  destroy: A("Hunspell_destroy", null, ["number"]),
  spell: A("Hunspell_spell", "number", ["number", "number"]),
  suggest: A("Hunspell_suggest", "number", ["number", "number", "number"]),
  free_list: A("Hunspell_free_list", null, ["number", "number", "number"]),
  add_dic: A("Hunspell_add_dic", "number", ["number", "number"]),
  add: A("Hunspell_add", "number", ["number", "number"]),
  add_with_affix: A("Hunspell_add_with_affix", "number", ["number", "number", "number"]),
  remove: A("Hunspell_remove", "number", ["number", "number"])
});