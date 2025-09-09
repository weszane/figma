import { isDevOrInspect, ManifestEditorType } from '../figma_app/155287'

/**
 * Version constant (original: $$r10)
 */
export const pS = '1.0.0'

/**
 * Returns code to close the Figma plugin (original: $$a8)
 * @returns {string}
 */
export const hl = (): string => 'figma.closePlugin();'

/**
 * Shows the HTML page in "ui.html" (original: b)
 */
const b = `// This shows the HTML page in "ui.html".
figma.showUI(__html__);`


/**
 * Inspect/codegen HTML snippets (original: E)
 */
const E = {
  inspect: `
  <h2>Selection Change Observer</h2>
  <p>Observe the contents of figma.selection change as you change the selection in the file.</p>
  <p>ID of selection is: </p>
  <p id=selection></p>

  <script>

  onmessage = (event) => {
    document.getElementById('selection').innerHTML = event.data.pluginMessage[0] ? event.data.pluginMessage[0].id : 'No selection';
  }

  </script>
  `,
  codegen: '',
}

/**
 * Plugin code comments (original: p)
 */
const p = `// This file holds the main code for plugins. Code in this file has access to
// the *figma document* via the figma global object.
// You can access browser APIs in the <script> tag inside "ui.html" which has a
// full browser environment (See https://www.figma.com/plugin-docs/how-plugins-run).`

/**
 * Plugin close code comment (original: m)
 */
const m = `// Make sure to close the plugin when you're done. Otherwise the plugin will
// keep running, which shows the cancel button at the bottom of the screen.
figma.closePlugin();`

/**
 * Inspect/codegen plugin code snippets (original: h)
 */
const h = {
  inspect: `// This plugin will open a tab that indicates that it will monitor the current
// selection on the page. It cannot change the document itself.

${p}

// This shows the HTML page in "ui.html".
figma.showUI(__html__);

// This monitors the selection changes and posts the selection to the UI
figma.on('selectionchange', () => {
  figma.ui.postMessage(figma.currentPage.selection)
});
`,
  codegen: `// This plugin will generate a sample codegen plugin
// that appears in the Element tab of the Inspect panel.

${p}

// This provides the callback to generate the code.
figma.codegen.on('generate', (event) => {
  const code = \`{
    name: '\${event.node.name}'
  }\`;
  return [
    {
      language: 'PLAINTEXT',
      code: code,
      title: 'Codegen Plugin',
    },
  ];
});
`,
}

/**
 * Generates main plugin code based on editor type (original: $$s2)
 * @param {ManifestEditorType[]} editors
 * @returns {string}
 */
export function MQ(editors: ManifestEditorType[]): string {
  if (editors?.includes(ManifestEditorType.INSPECT)) {
    throw new Error('Inspect panel plugins cannot be created without a UI')
  }
  const types = editors && editors.length > 0 ? editors : [ManifestEditorType.FIGMA]
  if (types.length === 0)
    return ''
  let code = `${p}\n\n`
  if (types.length === 1 && types[0] !== undefined) {
    code += `${getEditorCode(types[0])('5')}\n\n`
    code += `${m}\n`
  }
  else {
    code += types.map(type =>
      `${getEditorConditional(type)}\n`
      + `  ${indent(getEditorCode(type)('5'), 2)}\n\n  ${indent(m, 2)}`
      + `\n}\n`,
    ).join('\n')
  }
  return code
}

/**
 * Generates plugin code with UI and message handling (original: $$o5)
 * @param {ManifestEditorType[]} editors
 * @returns {string}
 */
export function Pg(editors: ManifestEditorType[]): string {
  const types = editors && editors.length > 0 ? editors : [ManifestEditorType.FIGMA]
  if (types.length === 0)
    return ''
  if (isDevOrInspect(types))
    return h.inspect
  let code = ''
  if (types.length === 1 && types[0] !== undefined) {
    code += `${getEditorIntro(types[0])}\n\n`
    code += `${p}\n\n`
    code += `${b}\n\n`
    code += `${v(getEditorCode(types[0])('msg.count'))}\n`
  }
  else {
    code += `${p}\n\n`
    code += types.map(type =>
      `${getEditorConditional(type)}\n`
      + `  ${indent(getEditorIntro(type), 2)}\n\n  ${indent(b, 2)}\n\n  ${indent(v(getEditorCode(type)('msg.count')), 2)}`
      + `\n}\n`,
    ).join('\n')
  }
  return code
}

/**
 * Generates HTML for plugin UI (original: $$l9)
 * @param {ManifestEditorType[]} editors
 * @returns {string}
 */
export function kE(editors: ManifestEditorType[]): string {
  const types = editors && editors.length > 0 ? editors : [ManifestEditorType.FIGMA]
  if (types.length === 0)
    return ''
  if (isDevOrInspect(types))
    return E.inspect
  let title = 'Rectangle Creator'
  if (types.length === 1 && types[0] === ManifestEditorType.FIGJAM) {
    title = 'Shape & Connector Creator'
  }
  else if (types.length === 1 && types[0] === ManifestEditorType.SLIDES) {
    title = 'Slide Creator'
  }
  else if (types.length > 1) {
    title = 'Shape Creator'
  }
  return x(title)
}

/**
 * Returns code snippet for inspect/codegen (original: $$d11)
 * @param {keyof typeof h} type
 * @returns {string}
 */
export const rK = (type: keyof typeof h): string => h[type]

/**
 * Returns HTML snippet for inspect/codegen (original: $$c7)
 * @param {keyof typeof E} type
 * @returns {string}
 */
export const hW = (type: keyof typeof E): string => E[type]

/**
 * Indents each line of a string by the given number of spaces (original: u)
 * @param {string} str
 * @param {number} spaces
 * @returns {string}
 */
function indent(str: string, spaces: number): string {
  const pad = ' '.repeat(spaces)
  const lines = str.split('\n')
  for (let i = 1; i < lines.length; i++) {
    if (lines[i].length !== 0)
      lines[i] = pad + lines[i]
  }
  return lines.join('\n')
}

/**
 * Returns code for creating rectangles (original: g)
 * @param {string|number} count
 * @returns {string}
 */
function rectangleCode(count: string | number): string {
  return `// This plugin creates rectangles on the screen.
const numberOfRectangles = ${count};

const nodes: SceneNode[] = [];
for (let i = 0; i < numberOfRectangles; i++) {
  const rect = figma.createRectangle();
  rect.x = i * 150;
  rect.fills = [{ type: 'SOLID', color: { r: 1, g: 0.5, b: 0 } }];
  figma.currentPage.appendChild(rect);
  nodes.push(rect);
}
figma.currentPage.selection = nodes;
figma.viewport.scrollAndZoomIntoView(nodes);`
}

/**
 * Returns code for creating shapes/connectors (original: f)
 * @param {string|number} count
 * @returns {string}
 */
function shapeConnectorCode(count: string | number): string {
  return `// This plugin creates shapes and connectors on the screen.
const numberOfShapes = ${count};

const nodes: SceneNode[] = [];
for (let i = 0; i < numberOfShapes; i++) {
  const shape = figma.createShapeWithText();
  // You can set shapeType to one of: 'SQUARE' | 'ELLIPSE' | 'ROUNDED_RECTANGLE' | 'DIAMOND' | 'TRIANGLE_UP' | 'TRIANGLE_DOWN' | 'PARALLELOGRAM_RIGHT' | 'PARALLELOGRAM_LEFT'
  shape.shapeType = 'ROUNDED_RECTANGLE';
  shape.x = i * (shape.width + 200);
  shape.fills = [{ type: 'SOLID', color: { r: 1, g: 0.5, b: 0 } }];
  figma.currentPage.appendChild(shape);
  nodes.push(shape);
}

for (let i = 0; i < numberOfShapes - 1; i++) {
  const connector = figma.createConnector();
  connector.strokeWeight = 8;

  connector.connectorStart = {
    endpointNodeId: nodes[i].id,
    magnet: 'AUTO',
  };

  connector.connectorEnd = {
    endpointNodeId: nodes[i + 1].id,
    magnet: 'AUTO',
  };
}

figma.currentPage.selection = nodes;
figma.viewport.scrollAndZoomIntoView(nodes);`
}

/**
 * Returns code for creating slides (original: _)
 * @param {string|number} count
 * @returns {string}
 */
function slideCode(count: string | number): string {
  return `// This plugin creates slides and puts the user in grid view.
const numberOfSlides = ${count};

const nodes: SlideNode[] = [];
for (let i = 0; i < numberOfSlides; i++) {
  const slide = figma.createSlide();
  nodes.push(slide);
}

figma.viewport.slidesView = 'grid';
figma.currentPage.selection = nodes;`
}

/**
 * Returns code generator function based on editor type (original: A)
 * @param {ManifestEditorType} type
 * @returns {(count: string|number) => string}
 */
function getEditorCode(type: ManifestEditorType): (count: string | number) => string {
  if (type === ManifestEditorType.FIGMA)
    return rectangleCode
  if (type === ManifestEditorType.FIGJAM)
    return shapeConnectorCode
  if (type === ManifestEditorType.SLIDES)
    return slideCode
  return () => ''
}

/**
 * Returns conditional code block for editor type (original: y)
 * @param {ManifestEditorType} type
 * @returns {string}
 */
function getEditorConditional(type: ManifestEditorType): string {
  if (type === ManifestEditorType.FIGMA)
    return '// Runs this code if the plugin is run in Figma\nif (figma.editorType === \'figma\') {'
  if (type === ManifestEditorType.FIGJAM)
    return '// Runs this code if the plugin is run in FigJam\nif (figma.editorType === \'figjam\') {'
  if (type === ManifestEditorType.SLIDES)
    return '// Runs this code if the plugin is run in Slides\nif (figma.editorType === \'slides\') {'
  return ''
}


/**
 * Returns code for handling UI messages (original: v)
 * @param {string} code
 * @returns {string}
 */
function v(code: string): string {
  return `// Calls to "parent.postMessage" from within the HTML page will trigger this
// callback. The callback will be passed the "pluginMessage" property of the
// posted message.
figma.ui.onmessage =  (msg: {type: string, count: number}) => {
  // One way of distinguishing between different types of messages sent from
  // your HTML page is to use an object with a "type" property like this.
  if (msg.type === 'create-shapes') {
    ${indent(code, 4)}
  }

  ${indent(m, 2)}
};`
}

/**
 * Returns intro comment for plugin code (original: I)
 * @param {ManifestEditorType} type
 * @returns {string}
 */
function getEditorIntro(type: ManifestEditorType): string {
  let intro = '// This plugin will open a window to prompt the user to enter a number, and\n'
  if (type === ManifestEditorType.FIGMA)
    intro += '// it will then create that many rectangles on the screen.'
  else if (type === ManifestEditorType.FIGJAM)
    intro += '// it will then create that many shapes and connectors on the screen.'
  else if (type === ManifestEditorType.SLIDES)
    intro += '// it will then create that many slides on the screen.'
  return intro
}





/**
 * Generates HTML for plugin UI (original: x)
 * @param {string} title
 * @returns {string}
 */
function x(title: string): string {
  return `<h2>${title}</h2>
<p>Count: <input id="count" type="number" value="5"></p>
<button id="create">Create</button>
<button id="cancel">Cancel</button>
<script>

document.getElementById('create').onclick = () => {
  const textbox = document.getElementById('count');
  const count = parseInt(textbox.value, 10);
  parent.postMessage({ pluginMessage: { type: 'create-shapes', count } }, '*')
}

document.getElementById('cancel').onclick = () => {
  parent.postMessage({ pluginMessage: { type: 'cancel' } }, '*')
}

</script>
`
}

/**
 * TypeScript error message (original: $$S1)
 */
export const Bt = 'throw new Error("This plugin template uses TypeScript. Follow the instructions in `README.md` to generate `code.js`.")'

/**
 * Plugin quickstart instructions (original: $$w6)
 */
export const fN = `Below are the steps to get your plugin running. You can also find instructions at:

  https://www.figma.com/plugin-docs/plugin-quickstart-guide/

This plugin template uses Typescript and NPM, two standard tools in creating JavaScript applications.

First, download Node.js which comes with NPM. This will allow you to install TypeScript and other
libraries. You can find the download link here:

  https://nodejs.org/en/download/

Next, install TypeScript using the command:

  npm install -g typescript

Finally, in the directory of your plugin, get the latest type definitions for the plugin API by running:

  npm install --save-dev @figma/plugin-typings

If you are familiar with JavaScript, TypeScript will look very familiar. In fact, valid JavaScript code
is already valid Typescript code.

TypeScript adds type annotations to variables. This allows code editors such as Visual Studio Code
to provide information about the Figma API while you are writing code, as well as help catch bugs
you previously didn't notice.

For more information, visit https://www.typescriptlang.org/

Using TypeScript requires a compiler to convert TypeScript (code.ts) into JavaScript (code.js)
for the browser to run.

We recommend writing TypeScript code using Visual Studio code:

1. Download Visual Studio Code if you haven't already: https://code.visualstudio.com/.
2. Open this directory in Visual Studio Code.
3. Compile TypeScript to JavaScript: Run the "Terminal > Run Build Task..." menu item,
    then select "npm: watch". You will have to do this again every time
    you reopen Visual Studio Code.

That's it! Visual Studio Code will regenerate the JavaScript file every time you save.
`

/**
 * TypeScript compiler config (original: $$C0)
 */
export const Ah = `{
  "compilerOptions": {
    "target": "es6",
    "lib": ["es6"],
    "strict": true,
    "typeRoots": [
      "./node_modules/@types",
      "./node_modules/@figma"
    ]
  }
}
`

/**
 * Slide width (original: $$T4)
 */
export const PJ = 1920

/**
 * Slide height (original: $$k3)
 */
export const Oq = 1080
