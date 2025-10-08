import { ASSETS_BASE_URL } from "../905/419431";

/**
 * Documentation for Code Connect integration
 */
export const CODE_CONNECT_DOCS = "If the node is connected to a code component in the users codebase via Code Connect, the connected component will be included in the final markup wrapped in a CodeConnectSnippet element, with relevant imports at the top of the file.An example of a Code Connect Snippet looks like this: <CodeConnectSnippet data-snippet-language=\"React\"><TitleComponent>Hello World</TitleComponent><CodeConnectSnippet>IMPORTANT: the CodeConnectSnippet wrapper element should not be part of the final code.The source of the code component will be in the import path, e.g. import {ComponentName } from 'path/to/component'; IMPORTANT: the import path may not be relative/may point to a URL, so you should search for the component in the codebase and MUST use it if possible.";

/**
 * Documentation for codebase suggestions
 */
export const CODEBASE_SUGGESTIONS_DOCS = "If the node is similar to existing components in your codebase based on name and visual similarity, the top suggested components will be included in the JSX on the data-codebase-suggestions attribute. It will be an array of objects with the component `name` and `source`, ordered in descending order of similarity.IMPORTANT: you should research the provided suggestions and determine whether any of them are a good fit for the node.";

/**
 * Documentation for image asset handling
 */
export const IMAGE_ASSET_DOCS = `Image assets are stored on a localhost server. Clients can use these images directly in code as a way to view the image assets the same way they would other remote servers. Images and SVGs will be stored as constants, e.g. const image = '${ASSETS_BASE_URL}/10c13ac1a228a365cb98a0064b1d5afbc84887b2.png' These constants will be used in the code as the source for the image, e.g. <img src={image} /> This is true for both images and SVGs, so you can use the same approach for both types of assets.`;

/**
 * Generates documentation for image asset handling with custom base URL
 * @param baseUrl - The base URL for image assets
 * @returns Formatted documentation string
 */
export function getImageAssetDocs(baseUrl: string): string {
  return `Image assets should be read from disk. Images and SVGs will be stored as constants, e.g. const image = '${baseUrl}/10c13ac1a228a365cb98a0064b1d5afbc84887b2.png' These constants will be used in the code as the source for the image, e.g. <img src={image} /> This is true for both images and SVGs, so you can use the same approach for both types of assets.`;
}

/**
 * Documentation for annotation attributes
 */
export const ANNOTATION_DOCS = "Some elements have annotation data attributes. They provide extra information about how the element should be implemented.IMPORTANT: Do not ignore these annotation attributes. They should not appear in your final code.";

/**
 * Comprehensive design system analysis prompt
 */
export const DESIGN_SYSTEM_PROMPT = `
Please analyze this codebase thoroughly and provide a comprehensive rules doc for your use (e.g. CLAUDE.md, .cursor/rules/design_system_rules.mdc file) on the following aspects to help integrate Figma designs using the Model Context Protocol:

## Design System Structure

1. **Token Definitions**
   - Where are design tokens (colors, typography, spacing, etc.) defined?
   - What format/structure is used for tokens?
   - Are there any token transformation systems in place?

2. **Component Library**
   - Where are UI components defined?
   - What component architecture is used?
   - Are there any component documentation or storybooks?

3. **Frameworks & Libraries**
   - What UI frameworks are used (React, Vue, etc.)?
   - What styling libraries/frameworks are used?
   - What build system and bundler are used?

4. **Asset Management**
   - How are assets (images, videos, etc.) stored and referenced?
   - What asset optimization techniques are used?
   - Are there any CDN configurations?

5. **Icon System**
   - Where are icons stored?
   - How are icons imported and used in components?
   - Is there an icon naming convention?

6. **Styling Approach**
   - What CSS methodology is used (CSS Modules, Styled Components, etc.)?
   - Are there global styles?
   - How are responsive designs implemented?

7. **Project Structure**
   - What is the overall organization of the codebase?
   - Are there any specific patterns for feature organization?

Provide your analysis as structured markdown with code snippets demonstrating key patterns. Include file paths where relevant.
`;

/**
 * Rule for generating Figma-based code using existing components
 */
export const GENERATE_CODE_RULE = "Generate code for my Figma selection using existing components and styling patterns from the project. Reuse components, colors, and typography tokens when possible";

/**
 * Rule for styling approach detection
 */
export const STYLING_RULE = "Use tailwind if available, otherwise detect the project's styling approach (e.g. CSS in JS, CSS Modules, theme providers, etc) and follow it. Use vanilla CSS only if no system is detected. Do not install any dependencies.";

/**
 * Creates a Code Connect linking instruction
 * @param params - Configuration parameters
 * @param params.nodeId - ID of the Figma node
 * @param params.source - Source path of the component
 * @param params.componentName - Name of the component
 * @returns Formatted instruction string
 */
export function createCodeConnectRule({
  nodeId,
  source,
  componentName
}: {
  nodeId?: string;
  source: string;
  componentName: string;
}): string {
  const nodeDescription = nodeId ? `Figma node with id ${nodeId}` : "selected Figma node";
  return `Link the ${nodeDescription} to the ${componentName} code component located at ${source} using Code Connect.`;
}

// Export constants with clear naming conventions
export const CN = DESIGN_SYSTEM_PROMPT;
export const Dz = GENERATE_CODE_RULE;
export const Ep = STYLING_RULE;
export const _0 = CODE_CONNECT_DOCS;
export const k9 = getImageAssetDocs;
export const n2 = IMAGE_ASSET_DOCS;
export const pD = ANNOTATION_DOCS;
export const s8 = CODEBASE_SUGGESTIONS_DOCS;
export const xe = createCodeConnectRule;