/**
 * Manages a collection of records with parent-child relationships.
 * Provides methods to remove records and access the current records.
 */
interface RecordValue {
  parentId?: string
  [key: string]: any
}

/**
 * Internal storage for records.
 * (original variable: n)
 */
const records: Record<string, RecordValue> = {}

/**
 * Removes a record by key and also removes all child records with matching parentId.
 * (original function: $$r0.remove)
 * @param key - The key of the record to remove.
 */
function removeRecord(key: string): void {
  delete records[key]
  Object.entries(records)
    .filter(([_, value]) => value.parentId === key)
    .forEach(([childKey]) => delete records[childKey])
}

/**
 * Record manager object exposing remove and records.
 * (original variable: $$r0)
 */
export const recordsWithRemove = {
  remove: removeRecord,
  records,
}
