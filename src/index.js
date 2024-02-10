#!/usr/bin/env node
const { exec } = require("child_process");

console.log(process.argv);

const from = process.argv[2];
const projectName = process.argv[3];
const structurePath = process.argv[4];

if (!projectName) {
  console.error("Please provide a name for the project.");
  process.exit(1);
}

if (!structurePath) {
  console.error("Please provide a path to the structure file.");
  process.exit(1);
}
let templateGeneratorPath = "./src/template-generator.js";

if (from === "external") {
  templateGeneratorPath =
    "./node_modules/izi-template/src/template-generator.js";
}

const commandToExecute = `node ${templateGeneratorPath} ${projectName} ${structurePath}`;

exec(commandToExecute, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error executing command: ${error.message}`);
    return;
  }

  console.log("Command output:", stdout);

  if (stderr) {
    console.error("Command error:", stderr);
  }
});
