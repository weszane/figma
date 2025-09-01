import { kiwiParserCodec } from "../905/294864";
import { createConnectorMixin } from "../905/112832";
export function $$a1(e) {
  return class extends createConnectorMixin(e) {
    get connectorLineStyle() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getConnectorLineStyle(this.sceneGraph.nodeContext);
    }
    set connectorLineStyle(e) {
      this.setGlobalNodeID();
      let t = this.bindings.NodeTsApi.setConnectorLineStyle(e, this.sceneGraph.nodeContext);
      if (t) throw Error(t);
    }
    get connectorLineType() {
      this.setGlobalNodeID();
      return kiwiParserCodec.ConnectorLineStyle[this.bindings.NodeTsApi.getConnectorLineType(this.sceneGraph.nodeContext)] || null;
    }
    set connectorLineType(e) {
      let t = kiwiParserCodec.ConnectorLineStyle[e];
      if ("number" == typeof t) {
        this.setGlobalNodeID();
        let e = this.bindings.NodeTsApi.setConnectorLineType(t, this.sceneGraph.nodeContext);
        if (e) throw Error(e);
      } else throw Error("Invalid value for connectorLineStyle");
    }
    get connectorStartCanvasPosition() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.connectorStartCanvasPosition(this.sceneGraph.nodeContext);
    }
    get connectorEndCanvasPosition() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.connectorEndCanvasPosition(this.sceneGraph.nodeContext);
    }
    get connectorStartCap() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getConnectorStartCap(this.sceneGraph.nodeContext);
    }
    set connectorStartCap(e) {
      this.setGlobalNodeID();
      let t = this.bindings.NodeTsApi.setConnectorStartCap(e, this.sceneGraph.nodeContext);
      if (t) throw Error(t);
    }
    get connectorEndCap() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.getConnectorEndCap(this.sceneGraph.nodeContext);
    }
    set connectorEndCap(e) {
      this.setGlobalNodeID();
      let t = this.bindings.NodeTsApi.setConnectorEndCap(e, this.sceneGraph.nodeContext);
      if (t) throw Error(t);
    }
    isConnectorUnattached() {
      this.setGlobalNodeID();
      return this.bindings.NodeTsApi.isConnectorUnattached(this.sceneGraph.nodeContext);
    }
    get attachedConnectorIDs() {
      this.setGlobalNodeID();
      return this.bindings.SceneGraphTsApi.getAttachedConnectorIDs();
    }
  };
}
export function $$s0(e) {
  return "CONNECTOR" === e.type;
}
export const E = $$s0;
export const w = $$a1;