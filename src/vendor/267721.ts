

import slice from "../vendor/670820";
import toInteger from "../vendor/915124";
import toLength from "../vendor/865757";

const ceil = Math.ceil;
const max = Math.max;

/**
 * Creates an array of elements split into groups the length of size.
 * If array can't be split evenly, the final chunk will be the remaining elements.
 * 
 * @param array The array to process.
 * @param size The length of each chunk.
 * @param guard Enables use as an iteratee for methods like _.map.
 * @returns Returns the new array of chunks.
 */
function chunk<T>(array: T[] | null | undefined, size: number = 1, guard?: boolean): T[][] {
  // (d, r, n) => (e, r, n)
  size = (guard ? toInteger(array, size, guard as any) : undefined === size) ? 1 : max(toLength(size), 0);

  const length = array?.length;
  if (!length || size < 1) return [];

  const resultLength = ceil(length / size);
  const result: T[][] = Array(resultLength);

  for (let index = 0, resultIndex = 0; index < length;) {
    result[resultIndex++] = slice(array, index, index += size);
  }

  return result;
}

export default chunk;
