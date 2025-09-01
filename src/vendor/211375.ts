/**
* virtual-core
*
* Copyright (c) TanStack
*
* This source code is licensed under the MIT license found in the
* LICENSE.md file in the root directory of this source tree.
*
* @license MIT
*/
export function $$i0() {
  return ($$i0 = Object.assign ? Object.assign.bind() : function (e) {
    for (var r = 1; r < $$arguments.length; r++) {
      var n = $$arguments[r];
      for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
    }
    return e;
  }).apply(this, arguments);
}
export const _ = $$i0;