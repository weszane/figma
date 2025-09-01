import { N } from "../905/981904";
import { DESKTOP_API_FEATURES } from "../905/82315";
export class $$a0 {
  constructor(e) {
    this.api = e;
  }
  getVersion() {
    return this.api.version;
  }
  hasFeature(e) {
    if (!DESKTOP_API_FEATURES[e]) throw Error(`hasFeature: unknown feature '${e}'`);
    return this.api.version >= DESKTOP_API_FEATURES[e] || this.api.backportedApiFeatures?.includes(e) || !1;
  }
  getOSVersion() {
    return this.api.osVersion;
  }
  get beta() {
    return N();
  }
  getInformationalVersion() {
    return this.api.appVersion;
  }
  getClientID() {
    return this.api.clientID;
  }
}
export const E = $$a0;