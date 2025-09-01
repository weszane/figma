import { z } from "../vendor/835909";
import { k } from "../figma_app/970433";
let a = k({
  name: "view_tool",
  trackingName: "view_tool",
  parameters: z.object({
    path: z.string().describe("Absolute path to file or directory, relative to the root at /, e.g. `/app.tsx` or `/`.")
  })
});
let s = k({
  name: "multi_edit_tool",
  trackingName: "multi_edit_tool",
  parameters: z.object({
    diffs: z.string().describe("XML-formatted diffs to implemented the desired edits.".trim())
  })
});
let o = k({
  name: "diffTool",
  trackingName: "diffTool",
  parameters: z.object({
    diffs: z.string().describe(`Generate XML-formatted diffs to implement requested code changes.

IMPORTANT FORMATTING REQUIREMENTS:
1. Each diff must be in this exact format:
<ORIGINAL_n>exact original code</ORIGINAL_n><UPDATED_n>modified code</UPDATED_n>
where n starts at 1 and increments for each diff.

2. The ORIGINAL text must match the source code EXACTLY, including all whitespace, indentation, and newlines.

3. Do not include:
   - Markdown code blocks (no \`\`\` markers)
   - Explanations or descriptions
   - Extra newlines between ORIGINAL and UPDATED tags
   - Any text outside of the XML tags

4. Each diff pair should be on its own line.

5. To ensure higher rates of success, ensure that the diffs are as small as possible, but have enough context to uniquely identify the code to be updated.

Example of correct format:
<ORIGINAL_1>function test() {
  console.log("hello")
}</ORIGINAL_1><UPDATED_1>function test() {
  console.log("hello world")
}</UPDATED_1>
<ORIGINAL_2>const x = 1;</ORIGINAL_2><UPDATED_2>const x = 2;</UPDATED_2>

6. Make sure the diffs will result in code that compiles, and all variable names are declared and defined.

7. Don't forget any visual elements that already exist.

8. Return ONLY the XML diff tags such as <ORIGINAL_1>...</ORIGINAL_1><UPDATED_1>...</UPDATED_1>, nothing else.
    `.trim())
  })
});
let l = k({
  name: "edit_tool",
  trackingName: "edit_tool",
  parameters: z.object({
    path: z.string().describe("Absolute path to file or directory, relative to the root at /, e.g. `/App.tsx` or `/`."),
    old_str: z.string().describe("Required parameter containing the string in `path` to replace."),
    new_str: z.string().describe("Required parameter containing the new string.")
  })
});
let d = k({
  name: "supabase_connect",
  trackingName: "supabase_connect",
  parameters: z.object({})
});
let c = k({
  name: "create_supabase_secret",
  trackingName: "create_supabase_secret",
  parameters: z.object({
    secretName: z.string().describe("The name of the secret to create.")
  })
});
let $$u4 = k({
  name: "str_replace_editor",
  trackingName: "str_replace_editor",
  parameters: z.object({
    command: z.$$enum(["view", "create", "str_replace"]).describe("The commands to run. Allowed options are: `view`, `create`, `str_replace`."),
    path: z.string().describe("Absolute path to file or directory, relative to the root at /, e.g. `/App.tsx` or `/`."),
    file_text: z.string().optional().describe("Required parameter of `create` command, with the content of the file to be created."),
    old_str: z.string().optional().describe("Required parameter of `str_replace` command containing the string in `path` to replace."),
    new_str: z.string().optional().describe("Optional parameter of `str_replace` command containing the new string (if not given, no string will be added). Required parameter of `insert` command containing the string to insert."),
    view_range: z.array(z.number()).optional().describe("Optional parameter of `view` command when `path` points to a file. If none is given, the full file is shown. If provided, the file will be shown in the indicated line number range, e.g. [11, 12] will show lines 11 and 12. Indexing at 1 to start. Setting `[start_line, -1]` shows all lines from `start_line` to the end of the file.")
  })
});
let p = k({
  name: "unsplash_tool",
  trackingName: "unsplash_tool",
  parameters: z.object({
    query: z.string().describe("The search query for the image you want to find.")
  })
});
let $$_3 = k({
  name: "write_tool",
  trackingName: "write_tool",
  parameters: z.object({
    path: z.string().describe("Absolute path to the file to be created, relative to the root at /, e.g. `/App.tsx`."),
    file_text: z.string().describe("The content of the file to be created.")
  })
});
let $$h2 = k({
  name: "fast_apply_tool",
  trackingName: "fast_apply_tool",
  parameters: z.object({
    path: z.string().describe("Absolute path to file or directory, relative to the root at /, e.g. `/App.tsx` or `/`."),
    change_str: z.string().describe(`Your lazy diff of the change to apply to the file. Heres a reminder of the format, it can include multiple edits like so:

    // ... existing code ...
    FIRST_EDIT
    // ... existing code ...
    SECOND_EDIT
    // ... existing code ...
    THIRD_EDIT
    // ... existing code ...

    You can even write // ... remove this code ... to remove code that is no longer needed.

It's crucial that the code is close to a true diff. Rewriting large amounts of code that already exists is unaceptable.
The edit will be intelligently applied by the tool so it only needs a couple lines of context around the edit. You must use // ... existing code ... to represent the code that already exists.
The tool is smart so you can be confident that it will figure out how to correctly apply your lazy diff.`)
  })
});
let m = k({
  name: "get_guidelines_outline",
  trackingName: "get_guidelines_outline",
  parameters: z.object({})
});
let g = k({
  name: "get_guidelines_section",
  trackingName: "get_guidelines_section",
  parameters: z.object({
    ids: z.array(z.string()).describe('Array of section IDs to retrieve (e.g., ["components-button", "design-tokens"])'),
    includeChildren: z.boolean().optional().describe("Whether to include child sections. If true, includes all child sections until the next header of the same or higher level. If false, stops at the next header of any level.")
  })
});
let f = k({
  name: "semantic_merge_editor",
  trackingName: "semantic_merge_editor",
  parameters: z.object({
    command: z.$$enum(["view", "create", "edit"]).describe("The commands to run. Allowed options are: `view`, `create`, `edit`."),
    path: z.string().describe("Absolute path to file or directory, e.g. `/repo/file.py` or `/repo`."),
    file_text: z.string().optional().describe("Required parameter of `create` command, with the content of the file to be created."),
    semantic_edit_snippet: z.string().optional().describe(`Required parameter of \`edit\` command. The 'lazified' edit to an existing file.
Here are the rules for formatting the edit snippet, follow them closely:

- Abbreviate sections of the code in your response that will remain the same by replacing those sections with a comment like  "// ... rest of code ...", "// ... keep existing code ...", "// ... code remains the same".
- Be very precise with the location of these comments within your edit snippet. A less intelligent model will use the context clues you provide to accurately merge your edit snippet.
- If applicable, it can help to include some concise information about the specific code segments you wish to retain "// ... keep calculateTotalFunction ... ".
- If you plan on deleting a section, you must provide the context to delete it. Some options:
    1. If the initial code is \`\`\`code \\n Block 1 \\n Block 2 \\n Block 3 \\n code\`\`\`, and you want to remove Block 2, you would output \`\`\`// ... keep existing code ... \\n Block 1 \\n  Block 2 \\n // ... rest of code ...\`\`\`.
    2. If the initial code is \`\`\`code \\n Block \\n code\`\`\`, and you want to remove Block, you can also specify \`\`\`// ... keep existing code ... \\n // remove Block \\n // ... rest of code ...\`\`\`.
- You must use the comment format applicable to the specific code provided to express these truncations.
- Preserve the indentation and code structure of exactly how you believe the final code will look (do not output lines that will not be in the final code after they are merged).
- Be as length efficient as possible without omitting key context.`),
    view_range: z.array(z.number()).optional().describe("Optional parameter of `view` command when `path` points to a file. If none is given, the full file is shown. If provided, the file will be shown in the indicated line number range, e.g. [11, 12] will show lines 11 and 12. Indexing at 1 to start. Setting `[start_line, -1]` shows all lines from `start_line` to the end of the file.")
  })
});
let E = k({
  name: "rewriteTool",
  trackingName: "rewriteTool",
  parameters: z.object({
    updated_code: z.string().describe(`Update the current code to implements all requested interactivity and output the updated code to <UPDATED_CODE_FILE> tags.

        <UPDATED_CODE_FILE>
        The updated code must:
          1. Avoid unnecessary changes to the code but only update the code regarding the required interactivity -- unless the existing code structure inhibits proper implementation.
          2. Implement all requested interactivity while preserving the visual design, unless otherwise specified.
          3. Include all necessary imports (React, libraries, existing assets)
          4. Manage state efficiently and handle all edge cases
          5. Make sure the updated code compiles, and all variable names are declared and defined.
          6. Function as a complete standalone component that will be executed as-is -- no placeholders, comments like "TODO" or "Code here", or missing functionality are not allowed.
        </UPDATED_CODE_FILE>
        Note: do not forget to include the <UPDATED_CODE_FILE> tags in your response.
  `.trim())
  })
});
let y = k({
  name: "rewriteTool",
  trackingName: "rewriteTool",
  parameters: z.object({
    guidance: z.string().describe(`This guidance provide a structured, step-by-step approach for rewriting the code block. Include:
            - Identify the specific changes needed in the code.
            - Describe how to implement these changes.
            - Highlight any dependencies or imports that need to be added.
    `.trim())
  })
});
let b = k({
  name: "zeroToOneTool",
  trackingName: "zeroToOneTool",
  parameters: z.object({
    generated_code: z.string().describe(`Generated code with user required design and interactivity in <GENERATED_CODE_FILE> tags.
        <GENERATED_CODE_FILE>
            Implement the required design and interactivity in the code. Pay attention to the following:
            - Required imports and dependencies
            - Component hierarchy
            - State and refs definition
            - Event handlers and interaction logic
            - Styling approach (Tailwind/inline)
            - Key JSX structure
            - Make your design and animation tasteful with appropriate motion curves
        </GENERATED_CODE_FILE>
        Note: do not forget to include the <GENERATED_CODE_FILE> tags in your response.
      `.trim())
  })
});
let T = k({
  name: "zeroToOneTool",
  trackingName: "zeroToOneTool",
  parameters: z.object({
    guidance: z.string().describe(`This guidance parameter must contain two essential components:

1. IMPLEMENTATION STRATEGY:
 Provide a structured, step-by-step approach for generating the complete React component. Include:
 - Component architecture decisions
 - State management approach
 - Interactivity implementation strategy
 - Animation and transition planning
 - Responsive design considerations
 - Key technical challenges and solutions

2. CODE ARCHITECTURE:
 Outline the core code structure including:
 - Required imports and dependencies
 - Component hierarchy
 - State and refs definition
 - Event handlers and interaction logic
 - Styling approach (Tailwind/inline)
 - Key JSX structure

Example format:
// ... frameworks and essential imports ...
{ Component structure with state definition }
// ... event handlers and interaction logic ...
{ Main JSX rendering with key interactive elements }
// ... styling approach ...


`.trim())
  })
});
let I = k({
  name: "docsTool",
  trackingName: "docsTool",
  parameters: z.object({
    library: z.string().describe('The name of the library to get documentation for (e.g. "fictional-library")'),
    path: z.string().describe('The path to the documentation to retrieve (e.g. "interactivity.md")')
  })
});
let S = k({
  name: "deprecatedTool",
  trackingName: "deprecatedTool",
  parameters: z.object({})
});
function v(e) {
  return z.object({
    type: z.literal("toolCall"),
    toolCallId: z.string(),
    toolName: z.literal(e.name),
    partialArgs: e.parameters.partial()
  });
}
export let $$A5 = z.union([v(a), v(s), v(l), v(d), v(c), v($$u4), v(p), v($$_3), v($$h2), v(f), v(m), v(g), v(o), v(E), v(y), v(b), v(T), v(I), v(S)]);
function x({
  name: e
}) {
  return z.object({
    type: z.literal("toolCallStart"),
    toolCallId: z.string(),
    toolName: z.literal(e)
  });
}
let $$N1 = z.union([x(a), x(s), x(l), x(d), x(c), x($$u4), x(p), x($$_3), x($$h2), x(f), x(m), x(g), x(o), x(E), x(y), x(b), x(T), x(I), x(S)]);
let $$C0 = [d.name, c.name];
export const AD = $$C0;
export const FJ = $$N1;
export const OT = $$h2;
export const b5 = $$_3;
export const kQ = $$u4;
export const rU = $$A5; 
