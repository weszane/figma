import { ViewDefinition } from '../905/119879';
import { isScalarField } from '../905/320277';
import { throwIf } from '../905/419236';
import { createFieldRef, createViewRef, hasFieldsProperty } from '../905/552287';
import { D } from '../905/644409';
import { validateUniqueArgumentNames } from '../905/690753';
import { ExistenceStatus, PriorityLevels } from '../905/957591';
function c(e, t) {
  let i = e ? Object.values(e)[0] : null;
  return Array.isArray(i) ? i.length > 0 : !!i;
}
export class $$u0 {
  constructor(e, t, i, n) {
    this.objectDef = t;
    this.schema = i;
    this.name = e.name;
    this.type = e.type;
    this.nullable = !!e.nullable;
    this.deprecated = e.deprecated;
    this.typechecked = void 0 === e.typechecked || e.typechecked;
    this.dslDependencies = e.dependencies;
    this.firstSeen = n;
    this.bannedFromViews = e.bannedFromViews || !1;
    this.resolver = e.resolver;
    this.permissionName = e.permissionName;
    this.permissionPolicyName = e.permissionPolicyName;
    this.template = function (e, t) {
      return t.objectMapping?.[e.objectDef.name]?.computedFields[e.name] === c ? ExistenceStatus.Exists : void 0;
    }(this, i);
    if (this.dslDependencies) {
      this.dependencies = this.dslDependencies;
    } else if (this.resolver && this.resolver.type === 'permission') {
      this.permissionName = this.resolver.permissionName;
      this.dependencies = {
        ...this.resolver.denyPolicies,
        ...this.resolver.allowPolicies
      };
    } else {
      throw new Error(`cannot create computed field def for ${this.objectDef.name}.${this.name}; no dependencies or resolver provided.`);
    }
    if (t.naturalKey && t.naturalKey.size !== 0) {
      this.rootArgs = [];
      this.rootFieldArgs = {};
      Array.from(t.naturalKey).forEach(e => {
        let i = t.fields.get(e);
        if (!i) throw new Error(`cannot create computed field def for ${this.name}; natural key ${e} is not found on object def for ${t.name}`);
        if (!isScalarField(i)) throw new Error(`cannot create computed field def for ${this.name}; natural key ${i.name} is not of scalar type on object def for ${t.name}`);
        this.rootArgs.push({
          name: `_nk_${e}`,
          type: i.type
        });
        this.rootFieldArgs[`_nk_${e}`] = createViewRef(`_nk_${e}`);
      });
      let e = [];
      Array.from(t.naturalKey).forEach(t => {
        e.push([t, '=', createFieldRef(`_nk_${t}`)]);
      });
      e.length > 1 ? this.rootFilter = {
        and: e
      } : this.rootFilter = e[0];
    } else {
      this.rootArgs = [{
        name: '_rootId',
        type: {
          kind: 'string'
        }
      }];
      this.rootFieldArgs = {
        _rootId: createViewRef('_rootId')
      };
      this.rootFilter = ['id', '=', createFieldRef('_rootId')];
    }
    this.args = (e.args || []).concat(this.rootArgs);
  }
  fieldType = 'computed';
  name;
  type;
  args;
  nullable;
  deprecated;
  typechecked;
  bannedFromViews;
  dslDependencies;
  template;
  dependencies;
  rootFilter;
  rootFieldArgs;
  rootArgs;
  _viewDef;
  firstSeen;
  permissionName;
  permissionPolicyName;
  resolver;
  get viewDef() {
    this._viewDef || (this._viewDef = this.makeViewDef());
    return this._viewDef;
  }
  makeViewDef() {
    let e = this.buildDefaultView(this.dependencies);
    return this.template === ExistenceStatus.Exists ? function (e, t) {
      let i = e.root.getQueryByName('root');
      if (!i) throw new Error(`cannot create computed field ViewDef for ${t.name}; view root node is missing.`);
      let [n, r] = Object.entries(t.dependencies)[0] ?? [];
      if (r && hasFieldsProperty(r) && r.aliasedField && (n = r.aliasedField), !n || !r) throw new Error(`cannot create computed field ViewDef for ${t.name}; dependencies are missing.`);
      let a = i.getQueryByName(n);
      if (!a) throw new Error(`cannot find query ${n} on computed field view.`);
      a.setQueryFieldsForExists(1);
      return e;
    }(e, this) : e;
  }
  buildDefaultView(e) {
    return new ViewDefinition(this.name, {
      fields: {
        root: [this.rootFieldArgs, e]
      },
      props: {
        priority: PriorityLevels.P2
      },
      args: this.args
    }, new D({
      name: 'root',
      permissionRequired: !1,
      fields: [{
        name: 'root',
        args: this.rootArgs,
        type: {
          kind: 'object',
          name: this.objectDef.name
        },
        filter: this.rootFilter
      }]
    }), this.schema, {
      isComputedFieldDependency: !0,
      computedObjectName: this.objectDef.name,
      shouldUseMissingFields: !0
    }, void 0);
  }
  get displayName() {
    return `${this.objectDef.name}.${this.name}`;
  }
  validate(e, t) {
    if (validateUniqueArgumentNames(`Computed field '${this.name}' of object type '${t.name}'`, this.args), this.resolver && this.resolver.type === 'permission') {
      for (let [e, t] of Object.entries(this.dependencies)) {
        let t = this.objectDef.fieldDef(e);
        throwIf(t.type.kind === 'bool', `${this.objectDef.name}.${e} must be of type 'bool' as it is used as a Policy by Permission ${this.objectDef.name}.${this.name}.`);
      }
    }
  }
  isComputedObject() {
    return this.type.kind === 'object' || this.type.kind === 'objects';
  }
}
export function $$p1(e) {
  return e.fieldType === 'computed';
}
export const F = $$u0;
export const V = $$p1;