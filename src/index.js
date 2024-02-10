const { exec } = require("child_process");

const projectName = process.argv[2];

if (!projectName) {
  console.error("Usage: node index.js <dynamicArgument>");
  process.exit(1);
}

const commandToExecute = `node ./src/template-generator.js ${projectName} ./_template/_structure.js`;

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
