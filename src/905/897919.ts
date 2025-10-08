// Origin: /Users/allen/github/fig/src/905/897919.ts
// Refactored: Renamed variables, added types, simplified logic, added comments and type safety

/**
 * Extracts named values from an HTMLFormElement's elements collection.
 * Returns an object mapping element names to their values.
 * Assumed dependency: The input is an HTMLFormElement.
 */
export interface FormValues {
  [key: string]: string;
}

/**
 * Iterates over the form's elements and collects name/value pairs.
 * Skips elements without a name or value.
 * Note: If multiple elements share the same name, only the last one's value is kept.
 */
export function extractFormValues(form: HTMLFormElement): FormValues {
  const result: FormValues = {};
  const elements = form.elements;

  // Iterate over all elements in the form
  for (let index = 0; index < elements.length; index++) {
    const element = elements.item(index) as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | null;
    // Only process elements with a name and a value
    if (element && element.name && typeof element.value === 'string') {
      result[element.name] = element.value;
    }
  }

  return result;
}

// Export alias for backwards compatibility with original code
export const t = extractFormValues;
