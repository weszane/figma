import fs from "node:fs";
import path from "node:path";
import { transformSync } from "@babel/core";
import transformClassArrowRequire from "./transform/transform-class-arrow-require";
import transformCommonjsToModule from "./transform/transform-commonjs-to-module";
import transformDeconstruct from "./transform/transform-deconstruct";
import transformGen from "./transform/transform-gen";
import transformMemberRequire from "./transform/transform-member-require";
import transformOptimizeRequire from "./transform/transform-optimize-require";
import transformRequireD from "./transform/transform-require-d";
// import transformToEsm from "./transform/transform-to-esm";
import transformRequireR from "./transform/transform-require-r";
import transformSplitVar from "./transform/transform-split-var";
import transformToRequire from "./transform/transform-to-require";
import transformEnum from "./transform/transform-enum";
import transformIf from "./transform/transform-if";
import transformCallRename from "./transform/transform-call-rename";
// import babelPluginRestoreDeepOptionalChaining from "./transform/babel-plugin-restore-deep-optional-chaining";

let obj = {};
let names = {};
try {
  obj = JSON.parse(fs.readFileSync("require.json", "utf8"));
  names = JSON.parse(fs.readFileSync("names.json", "utf8"));
} catch (e) {
  console.error("Error reading require.json:", e);
}

function processDirectory(inputDir, outputDir, fn, write = false) {
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  fs.readdirSync(inputDir).forEach((item) => {
    const itemPath = path.join(inputDir, item);
    const outputPath = path.join(outputDir, item);
    if (itemPath.indexOf('formatter') !== -1) return
    if (fs.statSync(itemPath).isDirectory()) {
      processDirectory(itemPath, outputPath, fn, write);
    } else {
      if (!item.endsWith(".js")) return;
      const fileContent = fs.readFileSync(itemPath, "utf8");
      const processedContent = fn(fileContent, item);
      if (!write) return;
      fs.writeFileSync(outputPath, processedContent, {
        encoding: "utf8",
        flag: "w",
      });
    }
  });
}

function clean(code, filename) {
  const name = filename.split(".")[0];
  return transformSync(code, {
    compact: false,
    filename: name,
    plugins: [[transformToRequire, { filename: name, output: obj }]],
    targets: {
      esmodules: true,
    },
  }).code;
}

function main() {
  // step 1
  processDirectory("ou", "out", clean, true);
  // // // // // // // // // // step 2
  // fs.writeFileSync("require.json", JSON.stringify(obj, null, 2));
  processDirectory("out", "gen", gen, false);
  // // step 3
  processDirectory("gen", "src1", numberToString, true);
  processDirectory("src1", "src2", step4, true);
  processDirectory("src2", "src3", step5, true);
  processDirectory("src3", "src4", step6, true);
}
// processDirectory('ou', 'out', clean, true)

function gen(code, filename) {
  const name = filename.split(".")[0];
  return transformSync(code, {
    compact: false,
    filename: name,
    plugins: [[transformGen, { filename: name, output: "gen" }]],
    targets: {
      esmodules: true,
    },
  }).code;
}
function numberToString(code, filename) {
  const name = filename.split(".")[0];
  const code1 = transformSync(code, {
    compact: false,
    filename,
    plugins: [
      transformSplitVar,
      transformDeconstruct,
      [transformRequireR, { cache: obj }],
      transformCallRename
    ],
    targets: {
      esmodules: true,
    },
  }).code;
  const res = transformSync(code1, {
    compact: false,
    filename,
    plugins: [[transformRequireD, { cache: obj, filename: name, names }],],
    targets: {
      esmodules: true,
    },
  }).code;
  // fs.writeFileSync("names.json", JSON.stringify(names, null, 2));
  return res;
}
function step4(code, filename) {
  console.log(filename)
  const code1 = transformSync(code, {
    compact: false,
    plugins: [
      [transformOptimizeRequire, { cache: obj }],
      transformClassArrowRequire,
      // [transformMemberRequire, { filename }],
    ],
    targets: {
      esmodules: true,
    },
  }).code;
  return code1;
}

function step5(code, filename) {
  const l = new Set();
  const code1 = transformSync(code, {
    compact: false,
    plugins: [
      ["transform-nullish-to-optional-chaining", { filename, list: l }],
      transformIf
    ],

    targets: {
      // esmodules: true,
    },
  }).code;
  return code1;
}
main();

function step6(code, filename) {
  console.log(filename)
  const name = filename.split(".")[0];
  return transformSync(code, {
    compact: false,
    filename: name,
    plugins: [
      [transformCommonjsToModule, { filename: name,  prefix: "$$" }],
      // transformEnum,
    ],
    targets: {
      esmodules: true,
    },
  }).code;
}
