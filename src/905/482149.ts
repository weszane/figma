export function $$n0(e) {
  let {
    buttonID,
    actionType,
    generationStep,
    rationale,
    score,
    destScreenID
  } = e;
  return {
    buttonID: null != buttonID ? buttonID : "",
    destinationScreenID: null != destScreenID ? destScreenID : null,
    navigationType: actionType,
    generationStep,
    rationale: null != rationale ? rationale : "",
    score: null != score ? score : 0
  };
}
export const HP = $$n0;