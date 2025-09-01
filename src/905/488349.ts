import { By } from "../905/816730";
let r = By.arrayOf(By.exact({
  name: By.string,
  key: By.string,
  description: By.string.isOptional,
  optional: By.bool.isOptional,
  allowFreeform: By.bool.isOptional
}));
let a = By.arrayOf(By.oneOf([By.exact({
  command: By.string,
  name: By.string,
  parameters: r.isOptional,
  parameterOnly: By.bool.isOptional
}), By.exact({
  separator: !0
}), By.exact({
  name: By.string,
  get menu() {
    return a;
  }
})]));
let s = By.arrayOf(By.string).isOptional;
let o = By.arrayOf(By.oneOf([By.exact({
  itemType: "action",
  propertyName: By.string,
  label: By.string.isOptional,
  includedLanguages: s
}), By.exact({
  itemType: "unit",
  scaledUnit: By.string,
  defaultScaleFactor: By.$$float.isOptional,
  default: By.bool.isOptional,
  includedLanguages: s
}), By.exact({
  itemType: "select",
  propertyName: By.string,
  label: By.string.isOptional,
  includedLanguages: s,
  options: By.arrayOf(By.exact({
    value: By.string,
    label: By.string,
    isDefault: By.bool.isOptional
  }))
})]));
let l = By.exact({
  label: By.string,
  value: By.string
});
let $$d4 = By.arrayOf(By.string).isOptional;
let $$c3 = By.arrayOf(By.string).isOptional;
let u = {
  id: By.string.isOptional,
  name: By.string,
  api: By.string,
  main: By.string,
  ui: By.oneOf([By.string.isOptional, By.dictionaryOf(By.string.isOptional)]),
  build: By.string.isOptional,
  enableProposedApi: By.bool.isOptional,
  enablePrivatePluginApi: By.bool.isOptional,
  permissions: By.arrayOf(By.string).isOptional,
  capabilities: $$c3,
  networkAccess: By.exact({
    allowedDomains: By.arrayOf(By.string),
    reasoning: By.string.isOptional,
    devAllowedDomains: By.arrayOf(By.string).isOptional
  }).isOptional,
  documentAccess: By.string.isOptional
};
let $$p1 = By.exact({
  ...u,
  menu: a.isOptional,
  relaunchButtons: By.arrayOf(By.exact({
    command: By.string,
    name: By.string,
    multipleSelection: By.bool.isOptional
  })).isOptional,
  parameters: r.isOptional,
  parameterOnly: By.bool.isOptional,
  editorType: $$d4,
  enableReadOnly: By.bool.isOptional,
  codegenLanguages: By.arrayOf(l).isOptional,
  codegenPreferences: o.isOptional,
  relatedLinkDomains: By.arrayOf(By.string).isOptional,
  devResourceDomains: By.arrayOf(By.string).isOptional
});
let $$m0 = By.exact({
  ...u,
  containsWidget: !0,
  widgetApi: By.string.isOptional,
  editorType: $$d4
});
let h = By.exact({
  type: By.string,
  data: By.string
});
let $$g2 = By.exact({
  clientX: By.$$float,
  clientY: By.$$float,
  items: By.arrayOf(h).isOptional,
  files: By.arrayOf(By.any).isOptional,
  dropMetadata: By.any.isOptional
});
export const Vf = $$m0;
export const _O = $$p1;
export const fK = $$g2;
export const hb = $$c3;
export const ib = $$d4;