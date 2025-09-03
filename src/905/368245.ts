import { z } from "../vendor/835909";
import { Kg, iD } from "../905/39567";
let $$a2 = z.object({
  clientLanguages: z.string().optional().describe("A comma separated list of programming languages used by the client in the current context in string form, e.g. `javascript`, `html,css,typescript`, etc. If you do not know, please list `unknown`. This is used for logging purposes to understand which languages are being used. If you are unsure, it is better to list `unknown` than to make a guess."),
  clientFrameworks: z.string().optional().describe("A comma separated list of frameworks used by the client in the current context, e.g. `react`, `vue`, `django` etc. If you do not know, please list `unknown`. This is used for logging purposes to understand which frameworks are being used. If you are unsure, it is better to list `unknown` than to make a guess")
});
let s = z.string().regex(/^$|^(?:-?\d+[:-]-?\d+)$/, 'Node ID must be in the format "123:456" or "123-456"').transform(e => e.replace("-", ":")).describe('The ID of the node in the Figma document, eg. "123:456" or "123-456". This should be a valid node ID in the Figma document.');
let o = z.string().describe("The key of the Figma file to use. If the URL is provided, extract the file key from the URL. The given URL must be in the format https://figma.com/design/:fileKey/:fileName?node-id=:int1-:int2. The extracted fileKey would be `:fileKey`.");
let $$l3 = z.object({
  nodeId: s.optional(),
  ...$$a2.shape
});
z.object({
  nodeId: s,
  fileKey: o,
  ...$$a2.shape
});
let $$d1 = z.object({
  ...$$l3.shape,
  source: z.string().describe("The location of the component in the source code"),
  componentName: z.string().describe("The name of the component to link to in the source code")
});
let c = z.string().describe("The directory or folder to write image, vector and video assets to. This should be given as an absolute path. If not provided, assets will not be written to disk.");
let $$u5 = $$l3.merge(z.object({
  dirForAssetWrites: c
}));
let $$p0 = $$l3.merge(z.object({
  dirForAssetWrites: c.optional()
}));
let $$m4 = z.object({
  config: z.object({
    codeOption: z.enum(Kg).describe("The code option to use"),
    codeConnectToolsEnabled: z.boolean().describe("Whether to enable the code connect tools"),
    codebaseSuggestionsEnabled: z.boolean().describe("Whether to enable the codebase suggestions"),
    markupImageOptions: z.enum(iD).describe("Whether to use placeholder images or local images"),
    mockCodeConnect: z.record(z.string(), z.object({
      componentName: z.string().optional(),
      source: z.string().optional(),
      snippet: z.string().nullable().optional(),
      snippetImports: z.array(z.string()).optional(),
      version: z.string()
    })).nullable().describe("A map of node IDs to name/source for Code Connect mocking. Can be null"),
    mockCodebaseSuggestions: z.record(z.string(), z.array(z.object({
      componentName: z.string(),
      source: z.string()
    }))).nullable().describe("A map of node IDs to array of name/source for Codebase Suggestions mocking. Can be null"),
    useTailwind: z.boolean().describe("Whether to use Tailwind CSS"),
    mockDirForImageWritesToDisk: z.string().optional().describe("The directory to mock instead of write images to disk")
  })
});
export const Ff = $$p0;
export const Gg = $$d1;
export const LY = $$a2;
export const ai = $$l3;
export const gG = $$m4;
export const qb = $$u5; 
