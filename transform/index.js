import reserved from "reserved-words";
export function check(word) {
  return (
    reserved.check(word, 3) ||
    ["arguments", "default", "in", "do"].includes(word)
  );
}
