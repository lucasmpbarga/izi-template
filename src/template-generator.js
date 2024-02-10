const fs = require("fs-extra");

function generateStructure({ projectName, structurePath }) {
  console.log("Generating project structure...");

  const projectPath = `./${projectName}`;

  if (fs.existsSync(projectPath)) {
    fs.removeSync(projectPath);
  }

  const { makeStructure } = require(structurePath);

  const structure = makeStructure(projectName);

  fs.mkdirSync(projectPath);

  for (const folderOrFile in structure) {
    const path = `${projectPath}/${folderOrFile}`;

    if (typeof structure[folderOrFile] === "string") {
      fs.writeFileSync(path, structure[folderOrFile]);
    } else {
      fs.mkdirSync(path);

      for (const file in structure[folderOrFile]) {
        fs.writeFileSync(`${path}/${file}`, structure[folderOrFile][file]);
      }
    }
  }

  console.log(`Project structure "${projectName}" successfully generated.`);
}

const projectName = process.argv[2];
const structurePath = process.argv[3];

if (!projectName) {
  console.error("Please provide a name for the project.");
  process.exit(1);
}

generateStructure({ projectName, structurePath });
