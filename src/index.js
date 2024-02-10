#!/usr/bin/env node
const { exec } = require("child_process");

const projectName = process.argv[2];
const encryptedStructure = process.argv[3];
const customPath = process.argv[4];

if (!projectName) {
  console.error("Please provide a name for the project.");
  process.exit(1);
}

if (!encryptedStructure) {
  console.error("Please provide a path to the structure file as string.");
  process.exit(1);
}

const isLib = process.argv.some((arg) => arg.includes("node_modules"));

let templateGeneratorPath = "./src/template-generator.js";

if (isLib) {
  templateGeneratorPath =
    "./node_modules/izi-template/src/template-generator.js";
}

const commandToExecute = `node ${templateGeneratorPath} ${projectName} ${encryptedStructure} ${customPath}`;

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
