import { D } from "../905/644409";
import { oneLine } from "../vendor/619199";
import { findItemByName } from "../905/957591";
import { validateAndParseArgument } from "../905/119577";
import { CustomError } from "../905/962682";
import { validateUniqueArgumentNames } from "../905/690753";
class n {
  name;
  values;
  annotations;
  constructor(e) {
    this.name = e.name;
    this.values = e.values;
    this.annotations = e.annotations;
  }
  isValidValue(e) {
    return this.values.some(t => "string" == typeof t ? e === t : e === t[1]);
  }
  validate(e) {}
}
class c {
  args;
  constructor(e) {
    this.args = e && e.args || [{
      name: "userId",
      type: {
        kind: "string"
      },
      nullable: !0
    }];
    this.args.find(e => "sessionId" === e.name) || this.args.push({
      name: "sessionId",
      type: {
        kind: "string"
      },
      nullable: !0
    });
    this.args.find(e => "anonymousUserId" === e.name) || this.args.push({
      name: "anonymousUserId",
      type: {
        kind: "string"
      },
      nullable: !0
    });
    validateUniqueArgumentNames("Session definition ", this.args);
    this.validateUserIdArgument(this.args);
  }
  validateUserIdArgument(e) {
    for (let t of e) if ("userId" === t.name) {
      if (!["string", "bigint"].includes(t.type.kind)) throw new CustomError((0, oneLine)`
            Session definition error: 'userId' arg must be of type 'string' or 'bigint'
          `);
      return;
    }
    throw new CustomError((0, oneLine)`
      Session definition error: 'userId' arg of type 'string' or 'bigint' is required
    `);
  }
  parseAndValidateArguments(e, t) {
    let i = {
      userId: null,
      sessionId: "",
      anonymousUserId: null
    };
    for (let n in e) {
      let r = findItemByName(this.args, n);
      if (r) {
        let s = validateAndParseArgument(t, r, e[n]);
        if ("error" === s.type) throw new CustomError((0, oneLine)`
            Session argument error: '${s.argName}' '${s.msg}'`);
        i[n] = s.parsedValue;
      } else throw new CustomError((0, oneLine)`
          Session argument error: '${n}' is not a valid argument
          name`);
    }
    for (let t of this.args) if (!(t.name in e)) throw new CustomError((0, oneLine)`
          Session argument error: the argument '${t.name}' is missing`);
    return i;
  }
}
class u {
  typeConversionExemptions = {
    viewArg: {},
    filterArg: {},
    computedFieldArg: {}
  };
  allowAllConversions;
  constructor(e) {
    this.populateTypeConversions(e);
    this.allowAllConversions = e?.allowAllExemptions ?? !0;
  }
  populateTypeConversions(e) {
    if (!e?.exemptions) return;
    let t = JSON.parse(JSON.stringify(e?.exemptions));
    for (let i of Object.keys(e?.exemptions)) for (let [n, r] of Object.entries(t[i])) for (let t of Object.keys(r)) r[t] = new Set(e.exemptions[i][n][t]);
    this.typeConversionExemptions = t;
  }
  isTypeConversionExempted(e, t, i, n) {
    try {
      return this.allowAllConversions || this.typeConversionExemptions[e][t][i].has(n);
    } catch (e) {
      return !1;
    }
  }
  toJSON() {
    return JSON.stringify({
      typeConversionExemptions: this.typeConversionExemptions,
      allowAllConversions: this.allowAllConversions
    });
  }
}
export class $$p0 {
  constructor(e, t, i) {
    for (let i of (this.schema = e, this.session = new c(e.session), this.legacyConfig = new u(e.legacyConfigDef), this._objectMapping = t, this.enums = new Map(), e.enums || [])) this.enums.set(i.name, new n(i));
    for (let t of (this.objects = new Map(), e.objects)) this.objects.set(t.name, new D(t, i));
    for (let t of e.objects) this.objects.get(t.name).constructComputedFields(t, this);
    this.enums.forEach(e => e.validate(this));
    this.objects.forEach(e => e.validate(this));
  }
  enums;
  objects;
  session;
  legacyConfig;
  computedObjectFields = {};
  _objectMapping;
  addComputedObject(e) {
    if (!e.isComputedObject()) return;
    let t = e.type.name;
    this.computedObjectFields[t] || (this.computedObjectFields[t] = []);
    this.computedObjectFields[t].push({
      parentName: e.objectDef.name,
      fieldName: e.name
    });
  }
  typeWithKind(e, t) {
    let i = this[e].get(t);
    if (i) return i;
    throw new CustomError(`${e} with name '${t}' isn't present in schema`);
  }
  enumDef({
    name: e
  }) {
    return this.typeWithKind("enums", e);
  }
  objectDef({
    name: e
  }) {
    return this.typeWithKind("objects", e);
  }
  toJSON() {
    return this.schema;
  }
  fieldType(e, t) {
    if (!this.objects.has(e)) return;
    let i = this.objects.get(e);
    if (i.fields.has(t)) return i.fields.get(t).type;
  }
  dsl() {
    return this.schema;
  }
  get objectMapping() {
    return this._objectMapping;
  }
}
export const S = $$p0;