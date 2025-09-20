import { z } from 'zod'

/**
 * Recursively transforms a Zod schema using a provided transformer function.
 * Original function name: f
 * @param schema - The Zod schema to transform.
 * @param transformer - The function to apply to each schema node.
 * @param path - The path to the current node (used for recursion).
 * @returns The transformed Zod schema or undefined.
 */
export function transformZodSchema(schema: z.ZodTypeAny, transformer: (schema: z.ZodTypeAny, path: (string | number)[]) => z.ZodTypeAny | undefined, path: (string | number)[] = []): z.ZodTypeAny | undefined {
  const transformed = transformer(schema, path)
  if (!transformed)
    return
  if (transformed !== schema)
    return transformed

  const description = transformed.description

  /**
   * Recursively applies the transformer to all child schemas.
   * Original function name: e
   */
  const recursiveTransform = (
    node: z.ZodTypeAny,
    transformer: (schema: z.ZodTypeAny, path: (string | number)[]) => z.ZodTypeAny | undefined,
    path: (string | number)[] = [],
  ): z.ZodTypeAny | undefined => {
    if (
      node instanceof z.ZodString
      || node instanceof z.ZodNumber
      || node instanceof z.ZodBoolean
      || node instanceof z.ZodNull
      || node instanceof z.ZodUndefined
      || node instanceof z.ZodLiteral
      || node instanceof z.ZodEnum
      || node instanceof z.ZodNaN
      || node instanceof z.ZodBigInt
    ) {
      return node
    }

    if (node instanceof z.ZodObject) {
      const shape = node._def.shape()
      const newShape: Record<string, z.ZodTypeAny> = {}
      for (const [key, child] of Object.entries(shape)) {
        const transformedChild = recursiveTransform(child as any, transformer, [...path, key])
        if (transformedChild)
          newShape[key] = transformedChild
      }
      return z.object(newShape)
    }

    if (node instanceof z.ZodArray) {
      const elementTransformed = recursiveTransform(node.element, transformer, [...path, '*'])
      return elementTransformed ? z.array(elementTransformed) : undefined
    }

    if (node instanceof z.ZodDiscriminatedUnion) {
      const options = node._def.options
        .map(option => recursiveTransform(option, transformer, path))
        .filter(Boolean)
      return z.discriminatedUnion(node._def.discriminator, options)
    }

    if (node instanceof z.ZodUnion) {
      const options = node._def.options
        .map(option => recursiveTransform(option, transformer, path))
        .filter(Boolean)
      return z.union(options)
    }

    if (node instanceof z.ZodIntersection) {
      const left = recursiveTransform(node._def.left, transformer, [...path, 'left'])
      const right = recursiveTransform(node._def.right, transformer, [...path, 'right'])
      if (left === undefined)
        return right
      if (right === undefined)
        return left
      return z.intersection(left, right)
    }

    if (node instanceof z.ZodRecord) {
      const valueTypeTransformed = recursiveTransform(node._def.valueType, transformer, [...path, '*'])
      return z.record(node._def.keyType, valueTypeTransformed)
    }

    if (node instanceof z.ZodTuple) {
      const items = node._def.items.map((item, idx) =>
        recursiveTransform(item, transformer, [...path, idx.toString()]),
      )
      return z.tuple(items)
    }

    if (node instanceof z.ZodOptional) {
      const unwrapped = recursiveTransform(node.unwrap(), transformer, path)
      if (!unwrapped)
        return
      return z.optional(unwrapped)
    }

    if (node instanceof z.ZodNullable) {
      const unwrapped = recursiveTransform(node.unwrap(), transformer, path)
      if (!unwrapped)
        return
      return z.nullable(unwrapped)
    }

    if (node instanceof z.ZodDefault) {
      const innerTransformed = recursiveTransform(node._def.innerType, transformer, path)
      if (!innerTransformed)
        return
      return innerTransformed.default(node._def.defaultValue())
    }

    return node
  }

  const result = recursiveTransform(transformed, transformer, path)
  if (result)
    return description ? result.describe(description) : result
}

export const f = transformZodSchema
