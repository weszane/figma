import { unsetSymbol } from '../905/17894'

/**
 * Performs topological sorting of form fields based on their dependencies.
 * Throws an error if a circular dependency is detected.
 * Original name: $$r0
 * @param form - The form object containing fields and fieldToDeps.
 * @returns Sorted array of field names.
 */
export function setupFieldTopologicalSort(form: {
  fields: Record<string, unknown>
  fieldToDeps: Record<string, Record<string, { type: string, source: string }>>
}): string[] {
  const fieldNames = Object.keys(form.fields)

  // Map each field to a set of its dependencies
  const depsMap: Record<string, Set<string>> = Object.entries(form.fieldToDeps).reduce(
    (acc, [field, deps]) => {
      Object.values(deps).forEach((dep) => {
        if (dep.type === 'otherField')
          acc[field].add(dep.source)
      })
      return acc
    },
    Object.fromEntries(fieldNames.map(f => [f, new Set<string>()])),
  )

  const sorted: string[] = []
  while (sorted.length < fieldNames.length) {
    // Find a field with no dependencies
    const entry = Object.entries(depsMap).find(([_, deps]) => deps.size === 0)
    if (!entry)
      throw new Error('Circular dependency detected in form fields')
    const [field] = entry
    delete depsMap[field]
    Object.values(depsMap).forEach(deps => deps.delete(field))
    sorted.push(field)
  }
  return sorted
}

/**
 * Checks if a field is validated and has a value set.
 * Original name: $$a5
 * @param field - The field object.
 * @returns True if validated and value is set.
 */
export function isFieldValidated(field: { currentValue: unknown, status: string }): boolean {
  return field.currentValue !== unsetSymbol && field.status === 'validated'
}

/**
 * Ensures a field is ready (validated and has a value), throws if not.
 * Original name: $$s4
 * @param field - The field object.
 * @returns The field object if ready.
 */
export function assertFieldReady(field: { currentValue: unknown, status: string, fieldDisplayName: string }): typeof field {
  if (!isFieldValidated(field))
    throw new Error(`Expected field ${field.fieldDisplayName} to be ready when it's not`)
  return field
}

/**
 * Checks if a field has a value set and a setValue function.
 * Original name: $$o3
 * @param field - The field object.
 * @returns True if value is set and setValue exists.
 */
export function canSetFieldValue(field: { currentValue: unknown, setValue?: Fn }): boolean {
  return field.currentValue !== unsetSymbol && !!field.setValue
}

/**
 * Returns the field's value, or a default if unset.
 * Original name: $$l1
 * @param field - The field object.
 * @param defaultValue - The default value to return if unset.
 * @returns The field value or default.
 */
export function getFieldValueOrDefault<T>(field: { currentValue: T }, defaultValue: T): T {
  return field.currentValue === unsetSymbol ? defaultValue : field.currentValue
}

/**
 * Checks if the form is validated or in error, and all fields are validated or in error.
 * Original name: $$d2
 * @param form - The form object.
 * @returns True if form and all fields are validated or in error.
 */
export function isFormValidatedOrError(form: { status: string, fieldStates: Record<string, { status: string }> }): boolean {
  return (
    (form.status === 'validated' || form.status === 'error')
    && Object.values(form.fieldStates).every(
      field => field.status === 'validated' || field.status === 'error',
    )
  )
}

// Export aliases for refactored functions
export const B7 = setupFieldTopologicalSort
export const Lz = getFieldValueOrDefault
export const MQ = isFormValidatedOrError
export const Zc = canSetFieldValue
export const c_ = assertFieldReady
export const i_ = isFieldValidated
