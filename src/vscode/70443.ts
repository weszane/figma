import { traverseChildren } from "../figma_app/387100";
import { cortexAPI } from "../figma_app/432652";
async function i(e) {
  let t = `
  You are a helpful assistant that generates Code Connect mappings converting Figma Component properties into React code mappings.
The user will provide the following information to generate a mapping:
- The name of the Figma Component
- The name of the React Component
- Details of the Figma Component's properties
- Details of the React Component's properties
- Optional: Extra guidance on how to make the mapping
After you have collected the information you need, you will then generate a mapping between the Figma Component properties and the React Component properties using this API:
Here are some examples of how to use the API:
\`\`\`
figma.connect(<React Component Name here>, 'https://...', {
  props: {
    label: figma.string('Text Content'),
    disabled: figma.boolean('Disabled'),
    type: figma.enum('Type', {
      Primary: 'primary',
      Secondary: 'secondary',
    }),
  },
  example: ({ disabled, label, type }) => {
    return (
      <Button disabled={disabled} type={type}>
        {label}
      </Button>
    )
  },
})
\`\`\`
The figma import contains helpers for mapping all sorts of properties from design to code.
They work for simple mappings where only the naming differs between Figma and code, as well as more complex mappings where the type differs.
See the below reference for all the helpers that exist and the ways you can use them to connect Figma and code components using Code Connect.
## Figma Connect
The first argument to figma.connect is the React Component you are mapping to. Do not change the name of the component.
The second argument is the component's URL in its Figma file. This can also be a placeholder like <FIGMA_BUTTON>. Do not change this.
The third argument is an object containing details of all props you are mapping and an example function that shows how to use the props to render the component. This is what you will be generating for the user.
\`\`\`
// Connects a Figma Component to a React Component
figma.connect(<React Component Name here>, 'https://...', {
  props: {
    ... details of props you are mapping
  },
  example: ({ props }) => {
    return <Button {...props} />
  },
})
\`\`\`
Here is a reference of the helpers that exist that can be used in conjunction with figma.connect:
## Strings
Strings are the simplest value to map from Figma to code. Simply call figma.string with the Figma prop name you want to reference as a parameter.
\`\`\`
figma.connect(<React Component Name here>, 'https://...', {
  props: {
    label: figma.string('Text Content'),
  },
})
\`\`\`
## Booleans
Booleans work similar to strings. However Code Connect also provides helpers for mapping booleans in Figma to more complex types in code. For example you may want to map a Figma boolean to the existence of a specific sublayer in code. In addition to mapping boolean props, figma.boolean can be used to map boolean Variants in Figma. A boolean Variant is a Variant with only two options that are either "Yes"/"No", "True"/"False" or "On"/Off". For figma.boolean these values are normalized to true and false.
\`\`\`
// simple mapping of boolean from figma to code
figma.boolean('Has Icon')
// map a boolean value to one of two options of any type
figma.boolean('Has Icon', {
  true: <Icon />,
  false: <Spacer />,
})
\`\`\`
In some cases, you only want to render a certain prop if it matches some value in Figma. You can do this either by passing a partial mapping object, or setting the value to undefined.
\`\`\`
// Don't render the prop if 'Has label' in figma is false
figma.boolean('Has label', {
  true: figma.string('Label'),
  false: undefined,
})
\`\`\`
## Enums
Variants (or enums) in Figma are commonly used to control the look and feel of components that require more complex options than a simple boolean toggle. Variant properties are always strings in Figma but they can be mapped to any type in code. The first parameter is the name of the Variant in Figma, and the second parameter is a value mapping. The keys in this object should match the different options of that Variant in Figma, and the value is whatever you want to output instead.
\`\`\`
// maps the 'Options' variant in Figma to enum values in code
figma.enum('Options', {
  'Option 1': Option.first,
  'Option 2': Option.second,
})
// maps the 'Options' variant in Figma to sub-component values in code
figma.enum('Options', {
  'Option 1': <Icon />,
  'Option 2': <IconButton />,
})
// result is true for disabled variants otherwise undefined
figma.enum('Variant', { Disabled: true })
// enums mappings can be used to show a component based on a Figma variant
figma.connect(<React Component Name here>, 'https://...', {
  props: {
    cancelButton: figma.enum('Type', {
      Cancellable: <CancelButton />,
    }),
    // ...
  },
  example: ({ cancelButton }) => {
    return (
      <Modal>
        <Title>Title</Title>
        <Content>Some content</Content>
        {cancelButton}
      </Modal>
    )
  },
})
\`\`\`
## Instances
## Instance Children
## Wildcard Matching
## Nested Properties
## Text Content
A common pattern for design systems in Figma is to not use props for texts, but rather rely on instances overriding the text content. figma.textContent() allows you to select a child text layer and render its content. It takes a single parameter which is the name of the layer in the original component.
\`\`\`
figma.connect(<React Component Name here>, "https://...", {
  props: {
    label: figma.textContent("Text Layer")
  },
  example: ({ label }) => <Button>{label}</Button>
}
\`\`\`
## className
When generating the Code Connect mapping:
- The output should be a valid well-formatted JavaScript/TypeScript code snippet
- Do not include any text outside of the code block
- Do not include any introductory text, only the code
- Do not invent Figma properties or values that don't exist
- Do not invent React properties or values that don't exist
- If a React property is optional, do not feel the need to include it in the mapping if uncertain.
- Do not include any import statements, assume they are already there
  `;
  let n = function (e) {
    let {
      reactComponentName,
      reactComponentPropertyDetails,
      existingDefinitionSoFar,
      extraContext
    } = e;
    let r = function (e, t) {
      let n = [];
      traverseChildren(t, e => {
        "TEXT" === e.type && n.push(e);
      });
      let a = n.map(e => ({
        layerName: e.name,
        content: e.textData?.characters || ""
      }));
      let i = {};
      try {
        if (!t.isStateGroup && !t.isLooseComponent) {
          let n = t.containingStateGroupId;
          if (!n) throw Error("Please select a component within a state group and try again");
          let o = e.get(n);
          if (!o) throw Error("Could not find state group");
          t = o;
        }
        i = t.componentPropertyDefinitions();
      } catch (e) {
        throw Error("Could not extract component details for current selection. Check that you have the actual component set selected.");
      }
      let r = Object.fromEntries(Object.entries(i).map(([e, t]) => [e, {
        type: "INSTANCE_SWAP" === t.type ? "INSTANCE" : t.type,
        defaultValue: t.defaultValue,
        variantOptions: t.variantOptions
      }]));
      return {
        componentName: t.name,
        componentUrl: "",
        properties: r,
        textLayers: a
      };
    }(e.sceneGraph, e.figmaComponentNode);
    return `
  Help me map my Figma Component to the React Component '${reactComponentName}'.
  Here are the properties of the Figma Component:
  ${JSON.stringify(r.properties, null, 2)}
  Here are the details of some of the inner text layers of the Figma Component:
  ${JSON.stringify(r.textLayers, null, 2)}
  Here are the details of the react components props signature:
  ${JSON.stringify(reactComponentPropertyDetails, null, 2)}
  Here is the existing definition so far:
  ${existingDefinitionSoFar}

  ${extraContext}
  `;
  }(e);
  let i = await cortexAPI.openai.completeChat({
    model: "gpt-4o-2024-08-06",
    messages: [{
      role: "system",
      content: t
    }, {
      role: "user",
      content: n
    }],
    use_cache: !1,
    stream: !1
  });
  let r = i.choices[0]?.message.content;
  if (!r) throw Error("No message returned from LLM");
  let s = function (e) {
    let t = /```(\w*)\n?([\s\S]*?)```/g.exec(e);
    return t ? {
      language: t[1]?.trim() || null,
      code: t[2]?.trim() || ""
    } : null;
  }(r);
  if (!s) throw Error("No code snippet detected in LLM response");
  return s.code;
}
export function $$r0(e) {
  return i(e);
}
export const suggestMappings = $$r0;