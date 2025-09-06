export function isFigmaBetaOrDev() {
  return /\bFigma(?:Beta|Dev)\//.test(navigator.userAgent)
}

export const N = isFigmaBetaOrDev
