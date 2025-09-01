// Original function name: e (renamed to validateAndParseArgument)
// Original export name: n (renamed to argumentValidator)

/**
 * Result type for successful parsing operations
 */
interface ParseResult {
  argName: string;
  type: "parsing";
  value: unknown;
  parsedValue: unknown;
}

/**
 * Result type for validation errors
 */
interface ErrorResult {
  argName: string;
  type: "error";
  msg: string;
}

/**
 * Union type for all possible validation results
 */
type ValidationResult = ParseResult | ErrorResult;

/**
 * Type definition for argument specifications
 */
interface ArgumentSpec {
  name: string;
  type: TypeDefinition;
  nullable?: boolean;
}

/**
 * Type definitions for different data types
 */
interface TypeDefinition {
  kind: "list" | "map" | "enum" | "datetime" | "date" | "bigint" | "uuid" | "string" | "int" | "float" | "bool";
  ofType?: TypeDefinition; // For list types
  valueType?: TypeDefinition; // For map types
}

/**
 * Context interface for validation operations
 */
interface ValidationContext {
  enumDef(type: TypeDefinition): {
    isValidValue(value: string): boolean;
    values: string[];
  };
}

/**
 * Type parser function signature
 */
type TypeParser<T = unknown> = (value: unknown) => T | null;

/**
 * Validates and parses arguments based on type definitions
 * @param context - Validation context containing enum definitions
 * @param spec - Argument specification with name and type
 * @param value - Value to validate and parse
 * @param useStringRepresentation - Whether to use string representation for certain types
 * @returns Validation result with parsed value or error
 */
export function validateAndParseArgument(
  context: ValidationContext,
  spec: ArgumentSpec,
  value: unknown,
  useStringRepresentation: boolean = true
): ValidationResult {
  const { type, name } = spec;

  // Check for undefined values
  if (value === undefined) {
    return createErrorResult(name, "must not be undefined");
  }

  // Check for null values
  if (value === null) {
    if (!spec.nullable) {
      return createErrorResult(name, "must not be null");
    }
    return createParseResult(name, value, value);
  }

  // Handle different type kinds
  switch (type.kind) {
    case "list":
      return handleListType(context, name, type, value, useStringRepresentation);
    
    case "map":
      return handleMapType(context, name, type, value, useStringRepresentation);
    
    case "enum":
      return handleEnumType(context, name, type, value);
    
    default:
      return handlePrimitiveType(name, type, value, useStringRepresentation);
  }
}

/**
 * Creates an error result object
 * @param argName - Name of the argument
 * @param message - Error message
 * @returns Error result object
 */
function createErrorResult(argName: string, message: string): ErrorResult {
  return {
    argName,
    type: "error",
    msg: message
  };
}

/**
 * Creates a successful parse result object
 * @param argName - Name of the argument
 * @param originalValue - Original input value
 * @param parsedValue - Parsed/converted value
 * @returns Parse result object
 */
function createParseResult(argName: string, originalValue: unknown, parsedValue: unknown): ParseResult {
  return {
    argName,
    type: "parsing",
    value: originalValue,
    parsedValue
  };
}

/**
 * Handles validation and parsing of list/array types
 * @param context - Validation context
 * @param name - Argument name
 * @param type - Type definition
 * @param value - Value to validate
 * @param useStringRepresentation - String representation flag
 * @returns Validation result
 */
function handleListType(
  context: ValidationContext,
  name: string,
  type: TypeDefinition,
  value: unknown,
  useStringRepresentation: boolean
): ValidationResult {
  if (!Array.isArray(value)) {
    return createErrorResult(name, "expected an array");
  }

  const parsedItems: unknown[] = [];
  
  for (let index = 0; index < value.length; index++) {
    const itemResult = validateAndParseArgument(
      context,
      {
        name: `${name}[${index}]`,
        type: type.ofType!
      },
      value[index],
      useStringRepresentation
    );

    if (itemResult.type === "error") {
      return itemResult;
    }

    parsedItems.push(itemResult.parsedValue);
  }

  return createParseResult(name, value, parsedItems);
}

/**
 * Handles validation and parsing of map/object types
 * @param context - Validation context
 * @param name - Argument name
 * @param type - Type definition
 * @param value - Value to validate
 * @param useStringRepresentation - String representation flag
 * @returns Validation result
 */
function handleMapType(
  context: ValidationContext,
  name: string,
  type: TypeDefinition,
  value: unknown,
  useStringRepresentation: boolean
): ValidationResult {
  if (typeof value !== "object" || Array.isArray(value) || value instanceof Date) {
    return createErrorResult(name, "expected a map");
  }

  const parsedMap: Record<string, unknown> = {};
  
  for (const key in value as Record<string, unknown>) {
    const propertyResult = validateAndParseArgument(
      context,
      {
        name: `${name}["${key}"]`,
        type: type.valueType!
      },
      (value as Record<string, unknown>)[key],
      useStringRepresentation
    );

    if (propertyResult.type === "error") {
      return propertyResult;
    }

    parsedMap[key] = propertyResult.parsedValue;
  }

  return createParseResult(name, value, parsedMap);
}

/**
 * Handles validation of enum types
 * @param context - Validation context
 * @param name - Argument name
 * @param type - Type definition
 * @param value - Value to validate
 * @returns Validation result
 */
function handleEnumType(
  context: ValidationContext,
  name: string,
  type: TypeDefinition,
  value: unknown
): ValidationResult {
  const enumDefinition = context.enumDef(type);
  
  if (typeof value !== "string" || !enumDefinition.isValidValue(value)) {
    return createErrorResult(name, `expected one of: ${enumDefinition.values.join(", ")}`);
  }

  return createParseResult(name, value, value);
}

/**
 * Handles validation and parsing of primitive types
 * @param name - Argument name
 * @param type - Type definition
 * @param value - Value to validate
 * @param useStringRepresentation - String representation flag
 * @returns Validation result
 */
function handlePrimitiveType(
  name: string,
  type: TypeDefinition,
  value: unknown,
  useStringRepresentation: boolean
): ValidationResult {
  const { expectedType, parser } = getTypeParserInfo(type.kind, useStringRepresentation);
  const parsedValue = parser(value);

  if (parsedValue === null) {
    return createErrorResult(
      name,
      `expected ${expectedType}, got ${typeof value} from ${JSON.stringify(value)}`
    );
  }

  return createParseResult(name, value, parsedValue);
}

/**
 * Gets type parser information for primitive types
 * @param kind - Type kind
 * @param useStringRepresentation - String representation flag
 * @returns Object containing expected type description and parser function
 */
function getTypeParserInfo(kind: string, useStringRepresentation: boolean): {
  expectedType: string;
  parser: TypeParser;
} {
  switch (kind) {
    case "datetime":
    case "date":
      return useStringRepresentation
        ? {
            expectedType: `string representation of ${kind}`,
            parser: createDateStringParser()
          }
        : {
            expectedType: "Date",
            parser: createDateObjectParser()
          };

    case "bigint":
      return {
        expectedType: "string representation of bigint",
        parser: createBigIntParser()
      };

    case "uuid":
      return {
        expectedType: "string representation of uuid",
        parser: createUuidParser()
      };

    case "string":
      return {
        expectedType: "string",
        parser: createStringParser()
      };

    case "int":
    case "float":
      return {
        expectedType: "number",
        parser: createNumberParser()
      };

    case "bool":
      return {
        expectedType: "boolean",
        parser: createBooleanParser()
      };

    default:
      throw new Error(`Unknown type kind: ${kind}`);
  }
}

/**
 * Creates a parser for date strings
 */
function createDateStringParser(): TypeParser<Date> {
  return (value: unknown): Date | null => {
    if (typeof value !== "string") return null;
    
    const timestamp = Date.parse(value);
    return Number.isNaN(timestamp) ? null : new Date(timestamp);
  };
}

/**
 * Creates a parser for Date objects
 */
function createDateObjectParser(): TypeParser<Date> {
  return (value: unknown): Date | null => {
    return value instanceof Date ? value : null;
  };
}

/**
 * Creates a parser for bigint strings
 */
function createBigIntParser(): TypeParser<string> {
  return (value: unknown): string | null => {
    if (typeof value !== "string") return null;
    return /^-?[0-9]+$/.test(value) ? value : null;
  };
}

/**
 * Creates a parser for UUID strings
 */
function createUuidParser(): TypeParser<string> {
  return (value: unknown): string | null => {
    if (typeof value !== "string") return null;
    const uuidRegex = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/;
    return uuidRegex.test(value) ? value : null;
  };
}

/**
 * Creates a parser for strings
 */
function createStringParser(): TypeParser<string> {
  return (value: unknown): string | null => {
    return typeof value === "string" ? value : null;
  };
}

/**
 * Creates a parser for numbers
 */
function createNumberParser(): TypeParser<number> {
  return (value: unknown): number | null => {
    return typeof value === "number" ? value : null;
  };
}

/**
 * Creates a parser for booleans
 */
function createBooleanParser(): TypeParser<boolean> {
  return (value: unknown): boolean | null => {
    return typeof value === "boolean" ? value : null;
  };
}

// Export the main function with a descriptive name
// Original export: n
export const n = validateAndParseArgument;
