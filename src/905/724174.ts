import { Ik } from "../vendor/200068";
import { ai, qb, LY, Gg, gG } from "../905/368245";
let $$a4 = "create_design_system_rules";
let $$s20 = "get_code";
let $$o22 = "get_image";
let $$l1 = "get_metadata";
let $$d0 = "get_code_connect_map";
let $$c16 = "get_variable_defs";
let $$u6 = "add_code_connect_link";
let $$p8 = "set_codegen_config";
let $$m7 = `IMPORTANT: After you call this tool, you MUST call ${$$o22} to get an image of the node for context.`;
let h = "Generate UI code for a given node or the currently selected node in the Figma desktop app. Use the nodeId parameter to specify a node id. If no node id is provided, the currently selected node will be used. If a URL is provided, extract the node id from the URL, for example, if given the URL https://figma.com/design/:fileKey/:fileName?node-id=1-2, the extracted nodeId would be `1:2`.";
let $$g23 = "get_code_for_selection";
let $$f17 = "create_design_system_rules";
let $$_3 = "link_selection_to_code_connect";
let $$A9 = "Prompt to generate code for the currently selected design elements in Figma";
let $$y14 = "Provides a prompt to generate design system rules for this repo.";
let $$b15 = "Provides a prompt to link the currently selected design elements in Figma to code components in the codebase using Code Connect.";
let $$v2 = {
  name: $$s20,
  description: h,
  inputSchema: Ik(ai, {
    strictUnions: !0
  })
};
let $$I13 = {
  name: $$s20,
  description: h,
  inputSchema: Ik(qb, {
    strictUnions: !0
  })
};
let $$E11 = {
  name: $$l1,
  description: "Get metadata for a node or page in the Figma desktop app in XML format. Useful for just getting an overview of the structure, it only includes node IDs, layer types, names, positions and sizes. To implement nodes you should use the get_code tool. You can call this tool on the node IDs contained in this response. Use the nodeId parameter to specify a node id, it can also be the page id (e.g. 0:1). If no node id is provided, the currently selected node will be used. If a URL is provided, extract the node id from the URL, for example, if given the URL https://figma.com/design/:fileKey/:fileName?node-id=1-2, the extracted nodeId would be `1:2`.",
  inputSchema: Ik(ai, {
    strictUnions: !0
  })
};
let $$x18 = {
  name: $$c16,
  description: "Get variable definitions for a given node id. E.g. {'icon/default/secondary': #949494}Variables are reusable values that can be applied to all kinds of design properties, such as fonts, colors, sizes and spacings. Use the nodeId parameter to specify a node id. If no node id is provided, the currently selected node will be used. If a URL is provided, extract the node id from the URL, for example, if given the URL https://figma.com/design/:fileKey/:fileName?node-id=1-2, the extracted nodeId would be `1:2`",
  inputSchema: Ik(ai, {
    strictUnions: !0
  })
};
let $$S5 = {
  name: $$d0,
  description: "Get a mapping of {[nodeId]: {codeConnectSrc: e.g. location of component in codebase, codeConnectName: e.g. name of component in codebase} E.g. {'1:2': { codeConnectSrc: 'https://github.com/foo/components/Button.tsx', codeConnectName: 'Button' } }. Use the nodeId parameter to specify a node id. If no node id is provided, the currently selected node will be used. If a URL is provided, extract the node id from the URL, for example, if given the URL https://figma.com/design/:fileKey/:fileName?node-id=1-2, the extracted nodeId would be `1:2`",
  inputSchema: Ik(ai, {
    strictUnions: !0
  })
};
let $$w10 = {
  name: $$o22,
  description: "Generate an image for a given node or the currently selected node in the Figma desktop app. Use the nodeId parameter to specify a node id. If no node id is provided, the currently selected node will be used. If a URL is provided, extract the node id from the URL, for example, if given the URL https://figma.com/design/:fileKey/:fileName?node-id=1-2, the extracted nodeId would be `1:2`",
  inputSchema: Ik(ai, {
    strictUnions: !0
  })
};
let $$$$C21 = {
  name: $$a4,
  description: $$y14,
  inputSchema: Ik(LY, {
    strictUnions: !0
  })
};
let $$T19 = {
  name: $$u6,
  description: "Link the currently selected Figma node (or a node specified by nodeId) to a code component in your codebase using Code Connect.",
  inputSchema: Ik(Gg, {
    strictUnions: !0
  })
};
let $$k12 = {
  name: $$p8,
  description: "Set the code generation configuration and output properties for the MCP server",
  inputSchema: Ik(gG, {
    strictUnions: !0
  })
};
export const A$ = $$d0;
export const C = $$l1;
export const CM = $$v2;
export const DA = $$_3;
export const IO = $$a4;
export const If = $$S5;
export const JO = $$u6;
export const NB = $$m7;
export const NE = $$p8;
export const Ob = $$A9;
export const Qn = $$w10;
export const Y9 = $$E11;
export const Zj = $$k12;
export const eZ = $$I13;
export const fL = $$y14;
export const g5 = $$b15;
export const o6 = $$c16;
export const oA = $$f17;
export const q = $$x18;
export const rV = $$T19;
export const sj = $$s20;
export const sl = $$$$C21;
export const uf = $$o22;
export const xy = $$g23;