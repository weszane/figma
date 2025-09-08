import { useRecording } from "../905/959312";
export function $$r0({
  onChange: e,
  recordingKey: t,
  ...i
}) {
  let r = useRecording(e, {
    eventName: "change",
    recordingKey: t
  }, [e, i.disabled]);
  return {
    ...i,
    onChange: r
  };
}
export const W = $$r0;