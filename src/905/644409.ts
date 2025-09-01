import { throwIf } from "../905/419236";
import { isObjectType, isEmbedded, isComputed } from "../905/552287";
import { ObjectFieldDefinition } from "../905/824218";
import { ScalarField } from "../905/320277";
import { F, V } from "../905/52806";
import { CustomError } from "../905/962682";
import { oneLine } from "common-tags";
export class $$c0 {
  name;
  fields;
  queriedFields = [];
  needsTransform;
  embedded;
  pendingComputedFields = new Set();
  naturalKey;
  deprecated;
  annotations;
  fieldGuide;
  def;
  constructor(e, t) {
    for (let i of (this.def = e, this.name = e.name, this.fields = new Map(), this.embedded = e.embedded, this.naturalKey = e.naturalKey, this.annotations = e.annotations, this.deprecated = e.deprecated, t && this.name in t && (this.fieldGuide = t[this.name]), e.fields)) {
      let e = this.fieldGuide && i.name in this.fieldGuide ? new Date(this.fieldGuide[i.name].firstSeen) : void 0;
      isObjectType(i) ? (this.fields.set(i.name, new ObjectFieldDefinition(i, e)), isEmbedded(i) && this.queriedFields.push(i.name)) : isComputed(i) ? this.pendingComputedFields.add(i.name) : (this.fields.set(i.name, new ScalarField(i, e)), this.queriedFields.push(i.name));
    }
    this.needsTransform = e.fields.some(({
      type: e
    }) => u(e) || "list" === e.kind && u(e.ofType));
  }
  constructComputedFields(e, t) {
    for (let i of e.fields) if (isComputed(i)) {
      let e = this.fieldGuide && i.name in this.fieldGuide ? new Date(this.fieldGuide[i.name].firstSeen) : void 0;
      let n = new F(i, this, t, e);
      this.fields.set(i.name, n);
      this.pendingComputedFields.$$delete(i.name);
      t.addComputedObject(n);
    }
  }
  validate(e) {
    if ("root" === this.name) {
      for (let e of this.fields.values()) if (e instanceof ObjectFieldDefinition) {
        if (e.embedded) throw new CustomError((0, oneLine)`
               root fields cannot be embedded type, but '${e.name}'
               is embedded`);
      } else if (!(e instanceof F)) throw new CustomError((0, oneLine)`
            root fields must be of object type or computed field type, but '${e.name}' is
            '${e.type.kind}'`);
    } else this.embedded || this.fieldDef("id");
    for (let t of this.fields.values()) {
      if (V(t) && void 0 === t.viewDef) throw new CustomError(`Error constructing lazy viewDef for computed field '${t.name}' of object '${this.name}'`);
      t.validate(e, this);
    }
  }
  fieldDef(e) {
    let t = this.fields.get(e);
    if (t) return t;
    if (this.pendingComputedFields.has(e)) throw new CustomError((0, oneLine)`
        field '${e}' is a computed field of '${this.name}', but computed fields haven't yet been constructed.
        You may need to re-order objects in the Schema definition.
      `);
    throw new CustomError((0, oneLine)`
      field '${e}' isn't present in object type '${this.name}'`);
  }
  readPlainObject(e) {
    if (!this.needsTransform) return e;
    let t = {
      id: e.id
    };
    for (let [i, {
      type: n
    }] of this.fields.entries()) {
      if (!(i in e)) continue;
      let r = e[i];
      t[i] = this.readPlainObjectField(i, r, n);
    }
    return t;
  }
  readPlainObjectField(e, t, i) {
    if (!this.needsTransform) return t;
    if (i || (i = this.fields.get(e).type), null !== t) {
      if (u(i)) return p(t);
      if ("list" === i.kind && u(i.ofType)) return t.map(p);
    }
    return t;
  }
}
function u(e) {
  return "date" === e.kind || "datetime" === e.kind;
}
function p(e) {
  throwIf("string" == typeof e, "readDateFromString: input is not a string");
  return new Date(e);
}
export const D = $$c0;