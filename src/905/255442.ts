import { Ay } from "../figma_app/432652";
export async function $$r0({
  prompt: e,
  signal: t,
  authInfo: i
}) {
  let r = await Ay.figjam.classifyCreate({
    prompt: e
  }, i);
  return t.aborted ? null : r.type;
}
export const P = $$r0;