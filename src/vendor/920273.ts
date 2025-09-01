import { getModuleLoader } from "../vendor/523005";
import { hunspellLoader } from "../vendor/113817";
import { log } from "../vendor/448752";
import E from "../vendor/441807";
Object.defineProperty(exports, "__esModule", {
  value: !0
});
let i = async (A = {}) => {
  let {
    timeout
  } = A;
  log("loadModule: loading hunspell wasm binary", {
    initOptions: A
  });
  return (await getModuleLoader(A => hunspellLoader(A), E, void 0, {
    timeout
  }))();
};
exports.loadModule = i;