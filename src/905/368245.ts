import { z } from "zod"


// Origin: /Users/allen/github/fig/src/905/368245.ts
// Refactored: Renamed variables, added TypeScript types, improved readability, added comments, simplified logic


/**
 * Type definitions for client context information.
 */
export interface ClientContext {
  clientLanguages?: string; // Comma-separated languages, e.g. "javascript,typescript"
  clientFrameworks?: string; // Comma-separated frameworks, e.g. "react,vue"
}

/**
 * Zod schema for client context.
 */
export const clientContextSchema = z.object({
  clientLanguages: z
    .string()
    .optional()
    .describe(
      "A comma separated list of programming languages used by the client in the current context in string form, e.g. `javascript`, `html,css,typescript`, etc. If you do not know, please list `unknown`. This is used for logging purposes to understand which languages are being used. If you are unsure, it is better to list `unknown` than to make a guess."
    ),
  clientFrameworks: z
    .string()
    .optional()
    .describe(
      "A comma separated list of frameworks used by the client in the current context, e.g. `react`, `vue`, `django` etc. If you do not know, please list `unknown`. This is used for logging purposes to understand which frameworks are being used. If you are unsure, it is better to list `unknown` than to make a guess"
    ),
});

/**
 * Type for node ID string, e.g. "123:456" or "123-456"
 */
export type NodeId = string;

/**
 * Zod schema for node ID with transformation and validation.
 */
export const nodeIdSchema = z
  .string()
  .regex(
    /^$|^-?\d+[:-]-?\d+$/,
    'Node ID must be in the format "123:456" or "123-456"'
  )
  .transform((id) => id.replace("-", ":"))
  .describe(
    'The ID of the node in the Figma document, eg. "123:456" or "123-456". This should be a valid node ID in the Figma document.'
  );

/**
 * Type for node context, extending client context.
 */
export interface NodeContext extends ClientContext {
  nodeId?: NodeId;
}

/**
 * Zod schema for node context.
 */
export const nodeContextSchema = z.object({
  nodeId: nodeIdSchema.optional(),
  ...clientContextSchema.shape,
});

/**
 * Type for component link information.
 */
export interface ComponentLink extends NodeContext {
  source: string;
  componentName: string;
}

/**
 * Zod schema for component link.
 */
export const componentLinkSchema = z.object({
  ...nodeContextSchema.shape,
  source: z.string().describe("The location of the component in the source code"),
  componentName: z.string().describe("The name of the component to link to in the source code"),
});

/**
 * Type for asset directory.
 */
export type AssetDirectory = string;

/**
 * Zod schema for asset directory.
 */
export const assetDirectorySchema = z
  .string()
  .describe(
    "The directory or folder to write image, vector and video assets to. This should be given as an absolute path. If not provided, assets will not be written to disk."
  );

/**
 * Type for node context with asset directory (required).
 */
export interface NodeContextWithAssetDir extends NodeContext {
  dirForAssetWrites: AssetDirectory;
}

/**
 * Zod schema for node context with asset directory (required).
 */
export const nodeContextWithAssetDirSchema = nodeContextSchema.merge(
  z.object({
    dirForAssetWrites: assetDirectorySchema,
  })
);

/**
 * Type for node context with asset directory (optional).
 */
export interface NodeContextWithOptionalAssetDir extends NodeContext {
  dirForAssetWrites?: AssetDirectory;
}

/**
 * Zod schema for node context with asset directory (optional).
 */
export const nodeContextWithOptionalAssetDirSchema = nodeContextSchema.merge(
  z.object({
    dirForAssetWrites: assetDirectorySchema.optional(),
  })
);

/**
 * Type for mock code connect entry.
 */
export interface MockCodeConnectEntry {
  componentName?: string;
  source?: string;
  snippet?: string | null;
  snippetImports?: string[];
  version: string;
}

/**
 * Type for mock codebase suggestion entry.
 */
export interface MockCodebaseSuggestionEntry {
  componentName: string;
  source: string;
}

/**
 * Type for config options.
 */
export interface ConfigOptions {
  codeOption: "design_to_react" | "xml" | "jsx";
  codeConnectToolsEnabled: boolean;
  codebaseSuggestionsEnabled: boolean;
  markupImageOptions: "placeholder-svg" | "local" | "write-to-disk";
  mockCodeConnect: Record<string, MockCodeConnectEntry> | null;
  mockCodebaseSuggestions: Record<string, MockCodebaseSuggestionEntry[]> | null;
  useTailwind: boolean;
  mockDirForImageWritesToDisk?: string;
}

/**
 * Zod schema for config options.
 */
export const configOptionsSchema = z.object({
  codeOption: z
    .enum(["design_to_react", "xml", "jsx"])
    .describe("The code option to use"),
  codeConnectToolsEnabled: z
    .boolean()
    .describe("Whether to enable the code connect tools"),
  codebaseSuggestionsEnabled: z
    .boolean()
    .describe("Whether to enable the codebase suggestions"),
  markupImageOptions: z
    .enum(["placeholder-svg", "local", "write-to-disk"])
    .describe("Whether to use placeholder images or local images"),
  mockCodeConnect: z
    .record(
      z.string(),
      z.object({
        componentName: z.string().optional(),
        source: z.string().optional(),
        snippet: z.string().nullable().optional(),
        snippetImports: z.array(z.string()).optional(),
        version: z.string(),
      })
    )
    .nullable()
    .describe(
      "A map of node IDs to name/source for Code Connect mocking. Can be null"
    ),
  mockCodebaseSuggestions: z
    .record(
      z.string(),
      z.array(
        z.object({
          componentName: z.string(),
          source: z.string(),
        })
      )
    )
    .nullable()
    .describe(
      "A map of node IDs to array of name/source for Codebase Suggestions mocking. Can be null"
    ),
  useTailwind: z.boolean().describe("Whether to use Tailwind CSS"),
  mockDirForImageWritesToDisk: z
    .string()
    .optional()
    .describe("The directory to mock instead of write images to disk"),
});

/**
 * Type for main config object.
 */
export interface MainConfig {
  config: ConfigOptions;
}

/**
 * Zod schema for main config object.
 */
export const mainConfigSchema = z.object({
  config: configOptionsSchema,
});

// Exported schemas (renamed for clarity)
export const Ff = nodeContextWithOptionalAssetDirSchema;
export const Gg = componentLinkSchema;
export const LY = clientContextSchema;
export const ai = nodeContextSchema;
export const gG = mainConfigSchema;
export const qb = nodeContextWithAssetDirSchema;

// Assumed dependency: zod
// Note: No performance issues detected. All schemas are statically defined and type-safe.
