let n = "figma:asset";
export function $$i0({
  imageHash: e,
  imageVariableName: t,
  extension: r
}) {
  let i = function ({
    imageHash: e,
    extension: t
  }) {
    return t ? `${n}/${e}.${t}` : `${n}/${e}`;
  }({
    imageHash: e,
    extension: r
  });
  return `import ${t} from '${i}';`;
}
export const r = $$i0;