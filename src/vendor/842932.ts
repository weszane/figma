import i, { prototype } from "../vendor/50613";
var s = i ? prototype : void 0;
var o = s ? s.valueOf : void 0;
function a(e) {
  return o ? Object(o.call(e)) : {};
}
module.exports = a;