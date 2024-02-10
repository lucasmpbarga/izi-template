Certainly! Below is a basic template for a README file for your npm library. Make sure to customize it according to your specific project details and features.

---

# izi-template

[![npm version](https://badge.fury.io/js/izi-template.svg)](https://www.npmjs.com/package/izi-template)
[![License](https://img.shields.io/badge/license-ISC-blue.svg)](https://opensource.org/licenses/ISC)

**izi-template** is a Node.js library for template generation, designed to simplify the process of creating project structures based on predefined templates.

## Installation

To use **izi-template**, you need to have Node.js installed. After that, you can install the library globally using npm:

```bash
npm install izi-template
```

## Usage

### Command-Line Interface (CLI)

```bash
izi-template [projectName] [structurePath] [customPath]
```

- `projectName`: Name of the project to be generated.
- `structurePath`: Path to the structure file defining the project template.
- `customPath` (optional): Custom path to place the generated project.

#### Example

```bash
izi-template myProject ./templates/project-structure.js customFolder
```

### NPM Scripts

You can also use **izi-template** as part of your NPM scripts. Add the following scripts to your `package.json` file:

```json
"scripts": {
  "make:project": "izi-template [projectName] [structurePath] [customPath]",
  "make:custom-project": "npm run make:project -- myProject ./templates/project-structure.js customFolder"
}
```

Run the scripts using:

```bash
npm run make:project
# or
npm run make:custom-project
```

## Project Structure

The structure of the generated project is defined by a template file. The template file should export a `makeStructure` function, which specifies the project's directory structure.

Example template file (`project-structure.js`):

```javascript
const makeStructure = (projectName) => {
  return {
    [`${projectName}/src`]: {
      "index.js": "console.log('Hello, ${projectName}!');",
      utils: {
        "helper.js": "/* Helper functions */",
      },
    },
    [`${projectName}/config`]: {
      "settings.json": '{ "apiKey": "your-api-key" }',
    },
  };
};

module.exports = { makeStructure };
```

## License

This project is licensed under the [ISC License](LICENSE).

## Contributing

Feel free to contribute by opening issues or submitting pull requests. Follow the [Contribution Guidelines](CONTRIBUTING.md) for details.

## Acknowledgments

- This project is inspired by the need for a simple project structure generation tool.
- Thanks to the [fs-extra](https://www.npmjs.com/package/fs-extra) library for file system utilities.

## Author

Obar777
