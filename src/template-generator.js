const fs = require("fs-extra");

function generateStructure({ projectName, structurePath, customPath }) {
  console.log("Generating project structure...");

  const { makeStructure } = require(structurePath);

  const structure = makeStructure(projectName);

  let projectPath = `./${projectName}`;

  if (customPath) {
    projectPath = `./${customPath}/${projectName}`;
  }

  if (fs.existsSync(projectPath)) {
    fs.removeSync(projectPath);
  }

  fs.mkdirSync(projectPath, { recursive: true });

  for (const folderOrFile in structure) {
    const path = `${projectPath}/${folderOrFile}`;

    if (typeof structure[folderOrFile] === "string") {
      fs.writeFileSync(path, structure[folderOrFile]);
    } else {
      fs.mkdirSync(path, { recursive: true });

      for (const file in structure[folderOrFile]) {
        fs.writeFileSync(`${path}/${file}`, structure[folderOrFile][file]);
      }
    }
  }

  console.log(`Project structure "${projectName}" successfully generated.`);
}

const projectName = process.argv[2];
const structurePath = process.argv[3];
const customPath = process.argv[4];

if (!projectName) {
  console.error("Please provide a name for the project.");
  process.exit(1);
}

generateStructure({ projectName, structurePath, customPath });
