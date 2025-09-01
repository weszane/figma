import { useLayerImpl } from "../vendor/346764";
Object.defineProperty(exports, "__esModule", {
  value: !0
});
function s(e, r) {
  void 0 === r && (r = !1);
  return useLayerImpl(e, {
    keepDeviceValue: r
  });
}
exports.$$default = s;