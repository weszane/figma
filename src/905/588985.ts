import { FW, Pe } from "../figma_app/155287";
export let $$r10 = "1.0.0";
export function $$a8() {
  return "figma.closePlugin();";
}
export function $$s2(e) {
  if (e?.includes(FW.INSPECT)) throw Error("Inspect panel plugins cannot be created without a UI");
  return function (e) {
    if (0 === e.length) return "";
    let t = p + "\n\n";
    1 === e.length && void 0 !== e[0] ? (t += A(e[0])("5") + "\n\n", t += m + "\n") : t += e.map(e => y(e) + "\n" + ("  " + u(A(e)("5"), 2) + "\n\n  " + u(m, 2)) + "\n}\n").join("\n");
    return t;
  }(e && e.length > 0 ? e : [FW.FIGMA]);
}
export function $$o5(e) {
  return function (e) {
    if (0 === e.length) return "";
    if (Pe(e)) return h.inspect;
    let t = "";
    1 === e.length && void 0 !== e[0] ? (t += I(e[0]) + "\n\n", t += p + "\n\n", t += b + "\n\n", t += v(A(e[0])("msg.count")) + "\n") : (t += p + "\n\n", t += e.map(e => y(e) + "\n" + ("  " + u(I(e), 2) + "\n\n  " + u(b, 2) + "\n\n  " + u(v(A(e)("msg.count")), 2)) + "\n}\n").join("\n"));
    return t;
  }(e && e.length > 0 ? e : [FW.FIGMA]);
}
export function $$l9(e) {
  return function (e) {
    if (0 === e.length) return "";
    if (Pe(e)) return E.inspect;
    let t = "Rectangle Creator";
    1 === e.length && e[0] === FW.FIGJAM ? t = "Shape & Connector Creator" : 1 === e.length && e[0] === FW.SLIDES ? t = "Slide Creator" : e.length > 1 && (t = "Shape Creator");
    return x(t);
  }(e && e.length > 0 ? e : [FW.FIGMA]);
}
export function $$d11(e) {
  return h[e];
}
export function $$c7(e) {
  return E[e];
}
function u(e, t) {
  let i = " ".repeat(t);
  let n = e.split("\n");
  for (let e = 1; e < n.length; e++) 0 !== n[e].length && (n[e] = i + n[e]);
  return n.join("\n");
}
let p = `// This file holds the main code for plugins. Code in this file has access to
// the *figma document* via the figma global object.
// You can access browser APIs in the <script> tag inside "ui.html" which has a
// full browser environment (See https://www.figma.com/plugin-docs/how-plugins-run).`;
let m = `// Make sure to close the plugin when you're done. Otherwise the plugin will
// keep running, which shows the cancel button at the bottom of the screen.
figma.closePlugin();`;
let h = {
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
`
};
let g = e => `// This plugin creates rectangles on the screen.
const numberOfRectangles = ${e};

const nodes: SceneNode[] = [];
for (let i = 0; i < numberOfRectangles; i++) {
  const rect = figma.createRectangle();
  rect.x = i * 150;
  rect.fills = [{ type: 'SOLID', color: { r: 1, g: 0.5, b: 0 } }];
  figma.currentPage.appendChild(rect);
  nodes.push(rect);
}
figma.currentPage.selection = nodes;
figma.viewport.scrollAndZoomIntoView(nodes);`;
let f = e => `// This plugin creates shapes and connectors on the screen.
const numberOfShapes = ${e};

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
figma.viewport.scrollAndZoomIntoView(nodes);`;
let _ = e => `// This plugin creates slides and puts the user in grid view.
const numberOfSlides = ${e};

const nodes: SlideNode[] = [];
for (let i = 0; i < numberOfSlides; i++) {
  const slide = figma.createSlide();
  nodes.push(slide);
}

figma.viewport.slidesView = 'grid';
figma.currentPage.selection = nodes;`;
function A(e) {
  return e === FW.FIGMA ? g : e === FW.FIGJAM ? f : e === FW.SLIDES ? _ : e => "";
}
function y(e) {
  let t = "";
  e === FW.FIGMA && (t += "// Runs this code if the plugin is run in Figma\nif (figma.editorType === 'figma') {");
  e === FW.FIGJAM && (t += "// Runs this code if the plugin is run in FigJam\nif (figma.editorType === 'figjam') {");
  e === FW.SLIDES && (t += "// Runs this code if the plugin is run in Slides\nif (figma.editorType === 'slides') {");
  return t;
}
let b = `// This shows the HTML page in "ui.html".
figma.showUI(__html__);`;
let v = e => `// Calls to "parent.postMessage" from within the HTML page will trigger this
// callback. The callback will be passed the "pluginMessage" property of the
// posted message.
figma.ui.onmessage =  (msg: {type: string, count: number}) => {
  // One way of distinguishing between different types of messages sent from
  // your HTML page is to use an object with a "type" property like this.
  if (msg.type === 'create-shapes') {
    ${u(e, 4)}
  }

  ${u(m, 2)}
};`;
function I(e) {
  let t = "// This plugin will open a window to prompt the user to enter a number, and\n";
  e === FW.FIGMA && (t += "// it will then create that many rectangles on the screen.");
  e === FW.FIGJAM && (t += "// it will then create that many shapes and connectors on the screen.");
  e === FW.SLIDES && (t += "// it will then create that many slides on the screen.");
  return t;
}
let E = {
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
  codegen: ""
};
let x = e => `<h2>${e}</h2>
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
`;
let $$S1 = 'throw new Error("This plugin template uses TypeScript. Follow the instructions in `README.md` to generate `code.js`.")';
let $$w6 = `Below are the steps to get your plugin running. You can also find instructions at:

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
`;
let $$C0 = `{
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
`;
let $$T4 = 1920;
let $$k3 = 1080;
export const Ah = $$C0;
export const Bt = $$S1;
export const MQ = $$s2;
export const Oq = $$k3;
export const PJ = $$T4;
export const Pg = $$o5;
export const fN = $$w6;
export const hW = $$c7;
export const hl = $$a8;
export const kE = $$l9;
export const pS = $$r10;
export const rK = $$d11;