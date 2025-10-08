import { zodToJsonSchema } from "zod-to-json-schema"
import { clientContextSchema, componentLinkSchema, mainConfigSchema, nodeContextSchema, nodeContextWithAssetDirSchema } from "../905/368245"

// Type definition for a generic tool configuration
export interface ToolConfig {
  name: string
  description: string
  inputSchema: object
}

// Tool names
export const CREATE_DESIGN_SYSTEM_RULES = "create_design_system_rules"
export const GET_CODE = "get_code"
export const GET_IMAGE = "get_image"
export const GET_METADATA = "get_metadata"
export const GET_CODE_CONNECT_MAP = "get_code_connect_map"
export const GET_VARIABLE_DEFS = "get_variable_defs"
export const ADD_CODE_CONNECT_LINK = "add_code_connect_link"
export const SET_CODEGEN_CONFIG = "set_codegen_config"
export const GET_CODE_FOR_SELECTION = "get_code_for_selection"
export const LINK_SELECTION_TO_CODE_CONNECT = "link_selection_to_code_connect"

// Prompt and descriptions
export const IMPORTANT_IMAGE_PROMPT = `IMPORTANT: After you call this tool, you MUST call ${GET_IMAGE} to get an image of the node for context.`

export const GET_CODE_DESCRIPTION
  = "Generate UI code for a given node or the currently selected node in the Figma desktop app. Use the nodeId parameter to specify a node id. If no node id is provided, the currently selected node will be used. If a URL is provided, extract the node id from the URL, for example, if given the URL https://figma.com/design/:fileKey/:fileName?node-id=1-2, the extracted nodeId would be `1:2`."

export const GET_METADATA_DESCRIPTION
  = "Get metadata for a node or page in the Figma desktop app in XML format. Useful for just getting an overview of the structure, it only includes node IDs, layer types, names, positions and sizes. To implement nodes you should use the get_code tool. You can call this tool on the node IDs contained in this response. Use the nodeId parameter to specify a node id, it can also be the page id (e.g. 0:1). If no node id is provided, the currently selected node will be used. If a URL is provided, extract the node id from the URL, for example, if given the URL https://figma.com/design/:fileKey/:fileName?node-id=1-2, the extracted nodeId would be `1:2`."

export const GET_VARIABLE_DEFS_DESCRIPTION
  = "Get variable definitions for a given node id. E.g. {'icon/default/secondary': #949494}Variables are reusable values that can be applied to all kinds of design properties, such as fonts, colors, sizes and spacings. Use the nodeId parameter to specify a node id. If no node id is provided, the currently selected node will be used. If a URL is provided, extract the node id from the URL, for example, if given the URL https://figma.com/design/:fileKey/:fileName?node-id=1-2, the extracted nodeId would be `1:2`"

export const GET_CODE_CONNECT_MAP_DESCRIPTION
  = "Get a mapping of {[nodeId]: {codeConnectSrc: e.g. location of component in codebase, codeConnectName: e.g. name of component in codebase} E.g. {'1:2': { codeConnectSrc: 'https://github.com/foo/components/Button.tsx', codeConnectName: 'Button' } }. Use the nodeId parameter to specify a node id. If no node id is provided, the currently selected node will be used. If a URL is provided, extract the node id from the URL, for example, if given the URL https://figma.com/design/:fileKey/:fileName?node-id=1-2, the extracted nodeId would be `1:2`"

export const GET_IMAGE_DESCRIPTION
  = "Generate an image for a given node or the currently selected node in the Figma desktop app. Use the nodeId parameter to specify a node id. If no node id is provided, the currently selected node will be used. If a URL is provided, extract the node id from the URL, for example, if given the URL https://figma.com/design/:fileKey/:fileName?node-id=1-2, the extracted nodeId would be `1:2`"

export const DESIGN_SYSTEM_RULES_PROMPT
  = "Provides a prompt to generate design system rules for this repo."

export const LINK_CODE_CONNECT_PROMPT
  = "Provides a prompt to link the currently selected design elements in Figma to code components in the codebase using Code Connect."

export const GENERATE_CODE_PROMPT
  = "Prompt to generate code for the currently selected design elements in Figma"

// Tool configurations
export const getCodeTool: ToolConfig = {
  name: GET_CODE,
  description: GET_CODE_DESCRIPTION,
  inputSchema: zodToJsonSchema(nodeContextSchema, { strictUnions: true }),
}

export const getCodeWithAssetDirTool: ToolConfig = {
  name: GET_CODE,
  description: GET_CODE_DESCRIPTION,
  inputSchema: zodToJsonSchema(nodeContextWithAssetDirSchema, { strictUnions: true }),
}

export const getMetadataTool: ToolConfig = {
  name: GET_METADATA,
  description: GET_METADATA_DESCRIPTION,
  inputSchema: zodToJsonSchema(nodeContextSchema, { strictUnions: true }),
}

export const getVariableDefsTool: ToolConfig = {
  name: GET_VARIABLE_DEFS,
  description: GET_VARIABLE_DEFS_DESCRIPTION,
  inputSchema: zodToJsonSchema(nodeContextSchema, { strictUnions: true }),
}

export const getCodeConnectMapTool: ToolConfig = {
  name: GET_CODE_CONNECT_MAP,
  description: GET_CODE_CONNECT_MAP_DESCRIPTION,
  inputSchema: zodToJsonSchema(nodeContextSchema, { strictUnions: true }),
}

export const getImageTool: ToolConfig = {
  name: GET_IMAGE,
  description: GET_IMAGE_DESCRIPTION,
  inputSchema: zodToJsonSchema(nodeContextSchema, { strictUnions: true }),
}

export const createDesignSystemRulesTool: ToolConfig = {
  name: CREATE_DESIGN_SYSTEM_RULES,
  description: DESIGN_SYSTEM_RULES_PROMPT,
  inputSchema: zodToJsonSchema(clientContextSchema, { strictUnions: true }),
}

export const addCodeConnectLinkTool: ToolConfig = {
  name: ADD_CODE_CONNECT_LINK,
  description:
    "Link the currently selected Figma node (or a node specified by nodeId) to a code component in your codebase using Code Connect.",
  inputSchema: zodToJsonSchema(componentLinkSchema, { strictUnions: true }),
}

export const setCodegenConfigTool: ToolConfig = {
  name: SET_CODEGEN_CONFIG,
  description: "Set the code generation configuration and output properties for the MCP server",
  inputSchema: zodToJsonSchema(mainConfigSchema, { strictUnions: true }),
}

export const designSystemRulesPromptTool: ToolConfig = {
  name: CREATE_DESIGN_SYSTEM_RULES,
  description: DESIGN_SYSTEM_RULES_PROMPT,
  inputSchema: zodToJsonSchema(clientContextSchema, { strictUnions: true }),
}

// Exported constants (mapping to original exports)
export const A$ = GET_CODE_CONNECT_MAP
export const C = GET_METADATA
export const CM = getCodeTool
export const DA = LINK_SELECTION_TO_CODE_CONNECT
export const IO = CREATE_DESIGN_SYSTEM_RULES
export const If = getCodeConnectMapTool
export const JO = ADD_CODE_CONNECT_LINK
export const NB = IMPORTANT_IMAGE_PROMPT
export const NE = SET_CODEGEN_CONFIG
export const Ob = GENERATE_CODE_PROMPT
export const Qn = getImageTool
export const Y9 = getMetadataTool
export const Zj = setCodegenConfigTool
export const eZ = getCodeWithAssetDirTool
export const fL = DESIGN_SYSTEM_RULES_PROMPT
export const g5 = LINK_CODE_CONNECT_PROMPT
export const o6 = GET_VARIABLE_DEFS
export const oA = CREATE_DESIGN_SYSTEM_RULES
export const q = getVariableDefsTool
export const rV = addCodeConnectLinkTool
export const sj = GET_CODE
export const sl = designSystemRulesPromptTool
export const uf = GET_IMAGE
export const xy = GET_CODE_FOR_SELECTION

// Note: If any referenced schemas or tools are missing, ensure they are imported from the correct module.
