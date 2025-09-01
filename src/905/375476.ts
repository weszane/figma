export function $$n1(e) {
  let {
    family,
    style,
    url,
    unicodeRange
  } = e;
  return `
  @font-face {
    font-family: "${family}";
    font-style: ${style};
    src: url("${url}");
    font-display: block;
    ${unicodeRange && "*" !== unicodeRange ? `unicode-range: ${unicodeRange};` : ""}
  }
`;
}
export function $$r0(e) {
  let {
    family,
    style,
    fontBase64
  } = e;
  return `
  @font-face {
    font-family: "${family}";
    font-style: ${style};
    src: url('data:font/woff2;base64,${fontBase64}') format('woff2');
    font-display: block;
  }
`;
}
export const l = $$r0;
export const t = $$n1;