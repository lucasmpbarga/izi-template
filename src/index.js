const { exec } = require("child_process");

const projectName = process.argv[2];
const structurePath = process.argv[3];

if (!projectName) {
  console.error("Please provide a name for the project.");
  process.exit(1);
}

if (!structurePath) {
  console.error("Please provide a path to the structure file.");
  process.exit(1);
}

const commandToExecute = `node ./src/template-generator.js ${projectName} ${structurePath}`;

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
