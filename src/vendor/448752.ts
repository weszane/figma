import { enableLogger } from "../vendor/523005";
Object.defineProperty(exports, "__esModule", {
  value: !0
});
let Q = () => {};
exports.log = (...A) => Q(...A);
exports.enableLogger = A => {
  let I = I => (B, ...g) => {
    A(`${I}::${B}`, ...g);
  };
  Q = I("hunspell");
  enableLogger(I("hunspellLoader"));
};