function i(e) {
  return `LOCAL_${e()}`
}
function n(e) {
  return e.startsWith('LOCAL_')
}

export const createLocalFileKey = i
export const isLocalFileKey = n
