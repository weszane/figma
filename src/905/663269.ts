import { ViewDefinition } from '../905/119879'
import { createSessionRef } from '../905/552287'
import { SchemaHandler } from '../905/578699'
import { CodedError, deepEqual, INTERNAL_SYMBOL, ResourceStatus } from '../905/957591'
import { FigmaAppClient } from '../figma_app/28817'

/**
 * Registry for view definitions.
 * Original class name: $$l0
 */
export class ViewRegistry {
  /**
   * Map of view names to their definitions.
   */
  views: Map<string, ViewDefinition | undefined> = new Map()

  /**
   * @param viewDefs - Object containing view definitions.
   * @param schema - Schema object.
   */
  constructor(public viewDefs: Record<string, any>, public schema: any) {
    // Initialize views map with keys from viewDefs, values as undefined
    Object.keys(viewDefs).forEach((key) => {
      this.views.set(key, undefined)
    })
  }

  /**
   * Creates a ViewDefinition for the given view name.
   * @param name - View name.
   */
  createViewDef(name: string): ViewDefinition {
    return new ViewDefinition(name, this.viewDefs[name], this.schema.objects.get('root'), this.schema, {
      shouldValidateDeprecated: true,
      shouldUseMissingFields: false,
    })
  }

  /**
   * Sets a view definition in the registry.
   * Throws if the view already exists.
   * @param name - View name.
   * @param def - View definition.
   */
  set(name: string, def: ViewDefinition): void {
    if (this.views.has(name)) {
      throw new Error(`View ${name} already exists in the registry.`)
    }
    this.views.set(name, def)
  }

  /**
   * Gets a view definition, creating it if necessary.
   * @param name - View name.
   */
  get(name: string): ViewDefinition | null {
    if (this.views.has(name) && this.views.get(name) === undefined) {
      this.views.set(name, this.createViewDef(name))
    }
    return this.views.get(name) ?? null
  }

  /**
   * Returns an iterator of [name, viewDef] entries.
   * Ensures all undefined entries are created.
   */
  entries(): IterableIterator<[string, ViewDefinition | undefined]> {
    for (const name of this.views.keys()) {
      if (this.views.get(name) === undefined) {
        this.views.set(name, this.createViewDef(name))
      }
    }
    return this.views.entries()
  }
}

/**
 * Checks if an object has the INTERNAL_SYMBOL property.
 * Original function name: $$c5
 * @param obj - Object to check.
 */
export function hasInternalSymbol(obj: any): boolean {
  return !!obj && typeof obj === 'object' && Object.prototype.hasOwnProperty.call(obj, INTERNAL_SYMBOL)
}

/**
 * Handles optimistic mutations.
 * Original class name: $$u1
 */
export class OptimisticMutationHandler extends FigmaAppClient {
  /**
   * Applies a 'create' mutation optimistically.
   */
  optimisticallyCreate(entity: any, mutations: any): any {
    return this.applyMutations(entity, mutations, 'create')
  }

  /**
   * Applies an 'update' mutation optimistically.
   */
  optimisticallyUpdate(entity: any, mutations: any): any {
    return this.applyMutations(entity, mutations, 'update')
  }

  /**
   * Applies a 'delete' mutation optimistically.
   */
  optimisticallyDelete(entity: any, mutations: any): any {
    return this.applyMutations(entity, mutations, 'delete')
  }

  /**
   * Applies a 'create' mutation with UUID optimistically.
   */
  optimisticallyCreateWithUUID(entity: any, mutations: any): any {
    return this.applyMutationsWithUUID(entity, mutations, 'create')
  }

  /**
   * Applies an 'update' mutation with UUID optimistically.
   */
  optimisticallyUpdateWithUUID(entity: any, mutations: any): any {
    return this.applyMutationsWithUUID(entity, mutations, 'update')
  }

  /**
   * Applies a 'delete' mutation with UUID optimistically.
   */
  optimisticallyDeleteWithUUID(entity: any, mutations: any): any {
    return this.applyMutationsWithUUID(entity, mutations, 'delete')
  }

  /**
   * Gets an ID from a UUID.
   */
  getIdFromUuid(uuid: any, type: any): any {
    return super.getIdFromUuid(uuid, type)
  }
}

// Re-exported modules and variables with updated names
export { getResourceDataOrFallback } from '../905/419236'
export { CodedError, createSessionRef, deepEqual, ResourceStatus, SchemaHandler }
export const tT = CodedError
export const lw = deepEqual
// export const CodedError = ResourceStatus
// Refactored exports
export const YJ = ViewRegistry // $$l0 -> ViewRegistry -> YJ
export const Oh = OptimisticMutationHandler // $$u1 -> OptimisticMutationHandler -> Oh
export const Sj = SchemaHandler // S -> Sj
export const bu = hasInternalSymbol // $$c5 -> hasInternalSymbol -> bu
export const iO = ViewRegistry
export const dZ = createSessionRef
