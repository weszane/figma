import { ViewDefinition } from '../905/119879'
import { isScalarField } from '../905/320277'
import { throwIf } from '../905/419236'
import { createFieldRef, createViewRef, hasFieldsProperty } from '../905/552287'
import { ObjectTypeDefinition } from '../905/644409'
import { validateUniqueArgumentNames } from '../905/690753'
import { ExistenceStatus, PriorityLevels } from '../905/957591'

/**
 * Checks if the first value in the object is a non-empty array or truthy.
 * @param obj - The object to check.
 * @param _unused - Unused parameter.
 * @returns True if the first value is a non-empty array or truthy, false otherwise.
 * @originalName c
 */
function hasNonEmptyFirstValue(obj: Record<string, any> | null | undefined, _unused?: any): boolean {
  const firstValue = obj ? Object.values(obj)[0] : null
  return Array.isArray(firstValue) ? firstValue.length > 0 : !!firstValue
}

/**
 * Definition for a computed field.
 * @originalName $$u0
 */
export class ComputedFieldDef {
  objectDef: ObjectTypeDefinition
  schema: any
  name: string
  type: any
  nullable: boolean
  deprecated: boolean
  typechecked: boolean
  bannedFromViews: boolean
  dslDependencies: any
  template: ExistenceStatus | undefined
  dependencies: Record<string, any>
  rootFilter: any
  rootFieldArgs: Record<string, any>
  rootArgs: Array<{ name: string, type: any }>
  _viewDef: ViewDefinition | undefined
  firstSeen: any
  permissionName: string | undefined
  permissionPolicyName: string | undefined
  resolver: any
  args: Array<any>
  fieldType = 'computed'

  /**
   * Constructs a ComputedFieldDef instance.
   * @param field - Field definition.
   * @param objectDef - Object type definition.
   * @param schema - Schema reference.
   * @param firstSeen - First seen marker.
   */
  constructor(
    field: {
      name: string
      type: any
      nullable?: boolean
      deprecated?: boolean
      typechecked?: boolean
      dependencies?: any
      bannedFromViews?: boolean
      resolver?: any
      permissionName?: string
      permissionPolicyName?: string
      args?: Array<any>
    },
    objectDef: ObjectTypeDefinition,
    schema: any,
    firstSeen: any,
  ) {
    this.objectDef = objectDef
    this.schema = schema
    this.name = field.name
    this.type = field.type
    this.nullable = !!field.nullable
    this.deprecated = field.deprecated
    this.typechecked = field.typechecked === undefined || field.typechecked
    this.dslDependencies = field.dependencies
    this.firstSeen = firstSeen
    this.bannedFromViews = field.bannedFromViews || false
    this.resolver = field.resolver
    this.permissionName = field.permissionName
    this.permissionPolicyName = field.permissionPolicyName

    // Set template status
    this.template = this.computeTemplateStatus(schema)

    // Set dependencies
    if (this.dslDependencies) {
      this.dependencies = this.dslDependencies
    }
    else if (this.resolver && this.resolver.type === 'permission') {
      this.permissionName = this.resolver.permissionName
      this.dependencies = {
        ...this.resolver.denyPolicies,
        ...this.resolver.allowPolicies,
      }
    }
    else {
      throw new Error(
        `cannot create computed field def for ${this.objectDef.name}.${this.name}; no dependencies or resolver provided.`,
      )
    }

    // Setup root args and filters based on naturalKey
    if (objectDef.naturalKey && objectDef.naturalKey.size !== 0) {
      this.rootArgs = []
      this.rootFieldArgs = {}
      Array.from(objectDef.naturalKey).forEach((nk) => {
        const fieldDef = objectDef.fields.get(nk)
        if (!fieldDef) {
          throw new Error(
            `cannot create computed field def for ${this.name}; natural key ${nk} is not found on object def for ${objectDef.name}`,
          )
        }
        if (!isScalarField(fieldDef)) {
          throw new Error(
            `cannot create computed field def for ${this.name}; natural key ${fieldDef.name} is not of scalar type on object def for ${objectDef.name}`,
          )
        }
        this.rootArgs.push({
          name: `_nk_${nk}`,
          type: fieldDef.type,
        })
        this.rootFieldArgs[`_nk_${nk}`] = createViewRef(`_nk_${nk}`)
      })
      const filterClauses: any[] = []
      Array.from(objectDef.naturalKey).forEach((nk) => {
        filterClauses.push([nk, '=', createFieldRef(`_nk_${nk}`)])
      })
      this.rootFilter = filterClauses.length > 1 ? { and: filterClauses } : filterClauses[0]
    }
    else {
      this.rootArgs = [
        {
          name: '_rootId',
          type: { kind: 'string' },
        },
      ]
      this.rootFieldArgs = {
        _rootId: createViewRef('_rootId'),
      }
      this.rootFilter = ['id', '=', createFieldRef('_rootId')]
    }

    this.args = (field.args || []).concat(this.rootArgs)
  }

  /**
   * Computes the template status for the field.
   * @param schema - The schema reference.
   * @returns ExistenceStatus or undefined.
   * @originalName template
   */
  computeTemplateStatus(schema: any): ExistenceStatus | undefined {
    return schema.objectMapping?.[this.objectDef.name]?.computedFields[this.name] === hasNonEmptyFirstValue
      ? ExistenceStatus.Exists
      : undefined
  }

  /**
   * Returns the display name for the computed field.
   * @originalName displayName
   */
  get displayName(): string {
    return `${this.objectDef.name}.${this.name}`
  }

  /**
   * Returns the view definition for the computed field.
   * @originalName viewDef
   */
  get viewDef(): ViewDefinition {
    if (!this._viewDef) {
      this._viewDef = this.makeViewDef()
    }
    return this._viewDef
  }

  /**
   * Creates the view definition for the computed field.
   * @originalName makeViewDef
   */
  makeViewDef(): ViewDefinition {
    const defaultView = this.buildDefaultView(this.dependencies)
    if (this.template === ExistenceStatus.Exists) {
      return this.buildExistsView(defaultView)
    }
    return defaultView
  }

  /**
   * Builds the default view definition.
   * @param dependencies - The dependencies for the view.
   * @returns ViewDefinition instance.
   * @originalName buildDefaultView
   */
  buildDefaultView(dependencies: any): ViewDefinition {
    return new ViewDefinition(
      this.name,
      {
        fields: {
          root: [this.rootFieldArgs, dependencies],
        },
        props: {
          priority: PriorityLevels.P2,
        },
        args: this.args,
      },
      new ObjectTypeDefinition({
        name: 'root',
        permissionRequired: false,
        fields: [
          {
            name: 'root',
            args: this.rootArgs,
            type: {
              kind: 'object',
              name: this.objectDef.name,
            },
            filter: this.rootFilter,
          },
        ],
      }),
      this.schema,
      {
        isComputedFieldDependency: true,
        computedObjectName: this.objectDef.name,
        shouldUseMissingFields: true,
      },
      undefined,
    )
  }

  /**
   * Builds the view definition for existence status.
   * @param viewDef - The default view definition.
   * @returns ViewDefinition instance.
   * @originalName makeViewDef (exists branch)
   */
  buildExistsView(viewDef: ViewDefinition): ViewDefinition {
    const rootQuery = viewDef.root.getQueryByName('root')
    if (!rootQuery) {
      throw new Error(
        `cannot create computed field ViewDef for ${this.name}; view root node is missing.`,
      )
    }
    let [depName, depValue] = Object.entries(this.dependencies)[0] ?? []
    if (depValue && hasFieldsProperty(depValue) && depValue.aliasedField) {
      depName = depValue.aliasedField
    }
    if (!depName || !depValue) {
      throw new Error(
        `cannot create computed field ViewDef for ${this.name}; dependencies are missing.`,
      )
    }
    const depQuery = rootQuery.getQueryByName(depName)
    if (!depQuery)
      throw new Error(`cannot find query ${depName} on computed field view.`)
    depQuery.setQueryFieldsForExists(1)
    return viewDef
  }

  /**
   * Validates the computed field definition.
   * @param context - Validation context.
   * @param objectType - Object type definition.
   * @originalName validate
   */
  validate(context: any, objectType: ObjectTypeDefinition): void {
    validateUniqueArgumentNames(
      `Computed field '${this.name}' of object type '${objectType.name}'`,
      this.args,
    )
    if (this.resolver && this.resolver.type === 'permission') {
      for (const [depName] of Object.entries(this.dependencies)) {
        const fieldDef = this.objectDef.fieldDef(depName)
        throwIf(
          fieldDef.type.kind === 'bool',
          `${this.objectDef.name}.${depName} must be of type 'bool' as it is used as a Policy by Permission ${this.objectDef.name}.${this.name}.`,
        )
      }
    }
  }

  /**
   * Checks if the computed field is of object or objects type.
   * @returns True if type is 'object' or 'objects', false otherwise.
   * @originalName isComputedObject
   */
  isComputedObject(): boolean {
    return this.type.kind === 'object' || this.type.kind === 'objects'
  }
}

/**
 * Checks if the field is a computed field.
 * @param field - The field to check.
 * @returns True if fieldType is 'computed', false otherwise.
 * @originalName $$p1
 */
export const isComputedField = (field: { fieldType: string }): field is ComputedFieldDef => field.fieldType === 'computed'

// Export refactored names
export const F = ComputedFieldDef
export const V = isComputedField
