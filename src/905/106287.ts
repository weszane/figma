

// Constants for MCP internal operations
export const MCP_INTERNAL_GET_TOOLS = "internal_get_tools"
export const MCP_INTERNAL_GET_RESOURCES_LIST = "internal_get_resources_list"
export const MCP_INTERNAL_GET_PROMPTS_LIST = "internal_get_prompts_list"
export const MCP_INTERNAL_GET_RESOURCE = "internal_get_resource"
export const MCP_INTERNAL_GET_PROMPT = "internal_get_prompt"


export function isMcpServerUserError(error: { message: string }): boolean {
  return error.message.includes("EADDRINUSE") || error.message.includes("EACCES")
}
