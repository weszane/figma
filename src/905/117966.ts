export function $$n0(e) {
  let t = [e.slice(0, 512), e.slice(512, 1024), e.slice(1024, 1536), e.slice(1536, 2048), e.slice(2048, 2560)];
  return {
    raw_stack: t[0],
    raw_stack2: t[1],
    raw_stack3: t[2],
    raw_stack4: t[3],
    raw_stack5: t[4]
  };
}
class r {
  runInFakeStackC(e) {
    e();
  }
}
export function $$a1(e) {
  new r().runInFakeStackC(e);
}
export const I = $$n0;
export const u = $$a1;