/**
 * Transformation symbols for different naming strategies
 * Original symbols: r, a, s
 */
const SNAKE_TO_CAMEL_TRANSFORM = Symbol('TRANSFORMER_SNAKE_TO_CAMEL') // r
const DROP_FIELD_TRANSFORM = Symbol('TRANSFORMER_DROP') // a
const UNSPECIFIED_TRANSFORM = Symbol('TRANSFORMER_UNSPECIFIED') // s

/**
 * Identity transformation function
 * Original: n = e => e
 */
const identityTransform = <T>(value: T): T => value

/**
 * Default transformation configuration
 * Original: o
 */
function createDefaultTransformConfig() {
  return {
    toLiveGraph: identityTransform,
    toSinatra: identityTransform,
    default: true,
  }
}

/**
 * Transformation configuration interface
 */
interface TransformConfig<T = any, U = any> {
  toLiveGraph: (value: T) => U
  toSinatra: (value: U) => T
  default: boolean
}

/**
 * Field transformation class for handling data mapping between formats
 * Original class: l
 */
class FieldTransformer {
  _sinatraT: any = null
  _liveGraphT: any = null

  constructor(
    public nameStrategy: symbol | string,
    public transformations: TransformConfig,
  ) { }

  /**
   * Transform field to camel case
   * Original: camel
   */
  camel(): FieldTransformer {
    return this.createTransformer(SNAKE_TO_CAMEL_TRANSFORM, createDefaultTransformConfig())
  }

  /**
   * Rename field with custom strategy
   * Original: rename
   */
  rename(strategy: string): FieldTransformer {
    return this.createTransformer(strategy, createDefaultTransformConfig())
  }

  /**
   * Drop field from transformation
   * Original: drop
   */
  drop(): FieldTransformer {
    return this.createTransformer(DROP_FIELD_TRANSFORM, {
      toLiveGraph: () => null,
      toSinatra: () => null,
      default: false,
    })
  }

  /**
   * Transform string to Date object
   * Original: stringToDate
   */
  stringToDate(): FieldTransformer {
    return this.createTransformer(UNSPECIFIED_TRANSFORM, {
      toLiveGraph: (value: string) => new Date(value),
      toSinatra: (value: Date) => value.toISOString(),
      default: false,
    })
  }

  /**
   * Transform string to Date object with null handling
   * Original: stringToDateNullable
   */
  stringToDateNullable(): FieldTransformer {
    return this.createTransformer(UNSPECIFIED_TRANSFORM, {
      toLiveGraph: (value: string | null) => value === null ? null : new Date(value),
      toSinatra: (value: Date | null) => value?.toISOString() ?? null,
      default: false,
    })
  }

  /**
   * Custom transformation configuration
   * Original: custom
   */
  custom(config: Partial<TransformConfig>): FieldTransformer {
    return this.createTransformer(UNSPECIFIED_TRANSFORM, {
      ...config,
      default: false,
    } as TransformConfig)
  }

  /**
   * Internal transformer creation method
   * Original: t
   */
  createTransformer(strategy: string | symbol, config: TransformConfig): FieldTransformer {
    const nameStrategy = this.nameStrategy === UNSPECIFIED_TRANSFORM ? strategy : this.nameStrategy
    const transformations = this.transformations.default ? config : this.transformations
    return new FieldTransformer(nameStrategy, transformations)
  }
}

/**
 * Default field transformer instance
 * Original: d
 */
const defaultFieldTransformer = new FieldTransformer(UNSPECIFIED_TRANSFORM, createDefaultTransformConfig())

/**
 * Transform field name based on strategy
 * Original: n function inside $$u0
 */
function transformFieldName(fieldName: string, strategy: symbol): string | null {
  if (strategy === SNAKE_TO_CAMEL_TRANSFORM) {
    return fieldName.replace(/_([a-z])/gi, (_, letter) => letter.toUpperCase())
  }
  if (strategy === DROP_FIELD_TRANSFORM) {
    return null
  }
  return fieldName
}

/**
 * Data mapper interface
 */
export interface DataMapper<TSource = any, TTarget = any> {
  toLiveGraph: (data: TSource) => TTarget
  toSinatra: (data: TTarget) => TSource
  getFields: () => any
  __LIVEGRAPH_TYPE__: Record<string, any>
  __SINATRA_TYPE__: Record<string, any>
  __SINATRA_TO_LIVEGRAPH__: Record<string, any>
  __TRANSFORM_MAP_TYPE__: Record<string, any>
}

/**
 * Create data mapper with transformation configuration
 * Original: $$u0
 */
export function createDataMapper<TSource = any, TTarget = any>(
  schema: any,
  transformerFn: (transformer: FieldTransformer) => any,
): DataMapper<TSource, TTarget> {
  const fieldConfig = transformerFn(defaultFieldTransformer)

  return {
    toLiveGraph(sourceData: TSource): TTarget {
      const result = {} as any

      for (const fieldName in sourceData) {
        if (!fieldConfig[fieldName])
          continue

        const { nameStrategy, transformations } = fieldConfig[fieldName]
        if (nameStrategy === DROP_FIELD_TRANSFORM)
          continue

        const transformedName = transformFieldName(fieldName, nameStrategy)
        if (transformedName !== null) {
          try {
            result[transformedName] = transformations.toLiveGraph(sourceData[fieldName])
          }
          catch (error) {
            // Defer error throwing to avoid blocking execution
            setTimeout(() => {
              throw error
            })
          }
        }
      }

      return result
    },

    toSinatra(targetData: TTarget): TSource {
      const result = {} as any

      for (const fieldName in targetData) {
        const originalField = Object.keys(fieldConfig).find(key =>
          transformFieldName(key, fieldConfig[key].nameStrategy) === fieldName,
        )

        if (!originalField)
          continue

        const { transformations } = fieldConfig[originalField]
        try {
          result[originalField] = transformations.toSinatra(targetData[fieldName])
        }
        catch (error) {
          // Defer error throwing to avoid blocking execution
          setTimeout(() => {
            throw error
          })
        }
      }

      return result
    },

    getFields() {
      return fieldConfig
    },

    __LIVEGRAPH_TYPE__: {},
    __SINATRA_TYPE__: {},
    __SINATRA_TO_LIVEGRAPH__: {},
    __TRANSFORM_MAP_TYPE__: {},
  }
}

/**
 * Create mapper factory function
 * Original: $$c1
 */
export function createMapperFactory() {
  return function <TSource = any, TTarget = any>(
    transformerFn: (transformer: FieldTransformer) => any,
  ): DataMapper<TSource, TTarget> {
    return createDataMapper(null, transformerFn)
  }
}

/**
 * Placeholder function for additional processing
 * Original: $$p2
 */
export function processAdditionalConfig(_config: any): void {
  // Implementation placeholder
}

// Export aliases for backward compatibility
export const x1 = createDataMapper // x1 = $$u0
export const uR = createMapperFactory // uR = $$c1
export const xi = processAdditionalConfig // xi = $$p2
