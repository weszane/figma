import { oneLine } from 'common-tags'
import { QueryDef } from '../905/8928'
import { validateAndParseArgument } from '../905/119577'
import { validateUniqueArgumentNames } from '../905/690753'
import { ObjectFieldDefinition } from '../905/824218'
import { ConnectionAttemptTypes, DEFAULT_PRIORITY, findItemByName, PriorityLevels } from '../905/957591'
import { CustomError } from '../905/962682'

// Result type definitions for better error handling
type Result<T, E> = OkResult<T> | ErrorResult<E>

interface OkResult<T> {
  type: 'ok'
  value: T
  unwrap: () => T
  unwrapErr: () => never
}

interface ErrorResult<E> {
  type: 'err'
  error: E
  unwrap: () => never
  unwrapErr: () => E
}

/**
 * Creates a successful result (originally function 'c')
 * @param value - The success value
 * @returns OkResult containing the value
 */
function createOkResult<T>(value: T): OkResult<T> {
  return {
    type: 'ok',
    value,
    unwrap: () => value,
    unwrapErr() {
      throw new Error(`Expected Err, found Ok(${value})`)
    },
  }
}

/**
 * Creates an error result (originally function 'u')
 * @param error - The error value
 * @returns ErrorResult containing the error
 */
function createErrorResult<E>(error: E): ErrorResult<E> {
  return {
    type: 'err',
    error,
    unwrap() {
      if (error instanceof Error)
        throw error
      throw new Error(`Expected Ok, found Err(${error})`)
    },
    unwrapErr: () => error,
  }
}
/**
 * ViewDefinition class (originally $$p0)
 * Represents a view definition with query capabilities, argument validation, and metadata
 */
export class ViewDefinition {
  // Class properties with proper typing
  public readonly name: string
  public readonly metadata: any
  public readonly context: any
  public readonly annotations: any
  public readonly dslDef: any
  public readonly fields: any
  public readonly root: QueryDef
  public readonly args: any[]
  public readonly props: any
  public readonly schema: any

  constructor(
    name: string,          // originally 'e'
    dslDefinition: any,    // originally 't'
    objectDef: any,        // originally 'i'
    schema: any,           // originally 'n'
    metadata: any,         // originally 'a'
    context?: any           // originally 'o'
  ) {
    this.name = name
    this.metadata = metadata
    this.context = context
    this.annotations = dslDefinition.annotations
    this.dslDef = Object.freeze(JSON.parse(JSON.stringify(dslDefinition)))
    this.fields = dslDefinition.fields

    // Initialize root QueryDef with proper configuration
    this.root = new QueryDef({
      parent: this,
      objectDef,
      objectFieldDef: new ObjectFieldDefinition(
        {
          name,
          type: {
            kind: 'object',
            name: objectDef.name,
          },
        },
        {} // Second parameter for ObjectFieldDefinition constructor
      ),
      fieldArgs: {},
      fields: dslDefinition.fields,
      viewArgs: dslDefinition.args || [],
      schema,
      metadata: {
        shouldUseMissingFields: !!metadata?.shouldUseMissingFields,
        skipArgValidation: !!metadata?.skipArgValidation,
      },
      context,
      optional: false, // Add required optional property
    })

    // Log warning if view has no queries or computations
    this._logEmptyViewWarning(context, name, dslDefinition)

    this.args = dslDefinition.args || []
    this.props = dslDefinition.props
    this.schema = schema

    // Validate argument names are unique
    validateUniqueArgumentNames(`View '${name}'`, this.args)
  }

  /**
   * Logs warning if view has no queries or computations
   */
  _logEmptyViewWarning(context: any, viewName: string, dslDef: any): void {
    if (context?.options?.logger &&
      this.root.queries.size === 0 &&
      this.root.computations.size === 0) {
      context.options.logger.warn(`View '${viewName}' has no queries or computations`, {
        viewName,
        dslDef,
      })
    }
  }

  /**
   * Gets the path for this view definition
   */
  get path(): string[] {
    return this.isComputedFieldDependency ? [this.metadata?.computedObjectName] : []
  }

  /**
   * Checks if this is a computed field dependency
   */
  get isComputedFieldDependency(): boolean {
    return !!this.metadata?.isComputedFieldDependency
  }

  /**
   * Internal method to parse and validate arguments with error handling
   * @param args - Arguments to validate (originally 'e')
   * @param shouldParse - Whether to parse values (originally 't')
   * @returns Result containing parsed arguments or error
   */
  _parseAndValidateArguments(
    args: Record<string, any>,
    shouldParse: boolean
  ): Result<Record<string, any>, CustomError> {
    const parsedArgs: Record<string, any> = {}

    // Process each provided argument
    for (const [argName, argValue] of Object.entries(args)) {
      // Skip special __requestId argument
      if (argName === '__requestId') {
        parsedArgs[argName] = argValue
        continue
      }

      // Find argument definition
      const argDef = findItemByName(this.args, argName)
      if (!argDef) {
        return createErrorResult(new CustomError(oneLine`
          View '${this.name}': argument error: '${argName}' is not a valid argument
        `))
      }

      // Validate and parse the argument value
      const validationResult = validateAndParseArgument(this.schema, argDef, argValue, shouldParse)
      if (validationResult.type === 'error') {
        return createErrorResult(new CustomError(oneLine`
          View '${this.name}': argument error: '${validationResult.argName}' '${validationResult.msg}'
        `))
      }

      parsedArgs[argName] = validationResult.parsedValue
    }

    // Check for missing required arguments
    for (const { name } of this.args) {
      if (args[name] === undefined) {
        return createErrorResult(new CustomError(`View '${this.name}': Missing argument '${name}'`))
      }
    }

    return createOkResult(parsedArgs)
  }

  /**
   * Parses and validates arguments, returning parsed values
   * @param args - Arguments to parse and validate
   * @returns Result containing parsed arguments or error
   */
  public parseAndValidateArguments(args: Record<string, any>): Result<Record<string, any>, CustomError> {
    return this._parseAndValidateArguments(args, true)
  }

  /**
   * Validates arguments without parsing values
   * @param args - Arguments to validate
   * @returns Result indicating success or error
   */
  public validateArguments(args: Record<string, any>): Result<void, CustomError> {
    const result = this._parseAndValidateArguments(args, false)
    return result.type === 'ok' ? createOkResult(undefined) : createErrorResult(result.error)
  }

  /**
   * Checks if this view has static queries by traversing the query tree
   * @returns True if any static queries are found
   */
  public hasStaticQueries(): boolean {
    const queryStack = [this.root]

    while (queryStack.length > 0) {
      const currentQuery = queryStack.pop()
      if (!currentQuery) continue

      if (currentQuery.hasStaticQueries()) {
        return true
      }

      // Add child queries to the stack for processing
      for (const childQuery of currentQuery.queries.values() || []) {
        queryStack.push(childQuery)
      }
    }

    return false
  }

  /**
   * Gets the priority level for this view based on connection attempt type
   * @param connectionAttemptType - Type of connection attempt
   * @returns Priority level
   */
  public getPriority(connectionAttemptType: ConnectionAttemptTypes): number {
    let priority = this.props?.priority ?? DEFAULT_PRIORITY

    // Use P3 priority for reinitialization attempts
    if (connectionAttemptType === ConnectionAttemptTypes.Reinitialization ||
      connectionAttemptType === ConnectionAttemptTypes.LegacyReinitialization) {
      priority = PriorityLevels.P3
    }

    return priority
  }
}

// Export with original name for backward compatibility (originally $$p0)
export const l = ViewDefinition
