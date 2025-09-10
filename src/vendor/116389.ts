/**
 * This function filters out falsy values from an array and returns a new array with only truthy values.
 * It appears to be from the Lodash library's compact() function implementation.
 * @param e - Input array to be compacted
 * @returns A new array containing only the truthy values from the input array
 */
module.exports = function compact(e: any[]): any[] {
  const result: any[] = [];
  let resultIndex = 0;
  
  if (!e) return result;
  
  for (let i = 0; i < e.length; i++) {
    const value = e[i];
    if (value) {
      result[resultIndex++] = value;
    }
  }
  
  return result;
};
