function kebabCaseToCamelCase(inputString) {
  return inputString.replace(/-([a-z])/g, (match, group) =>
    group.toUpperCase()
  );
}

const makeNutrientEngineTemplate = (parameter) => {
  const camelCaseParameter = kebabCaseToCamelCase(parameter);

  return `
import { ${camelCaseParameter}Recommendation } from './${parameter}-recommendation';
import { ${camelCaseParameter}ReferenceRange } from './${parameter}-reference-range';

export const ${camelCaseParameter}Engine = {
  getReferenceRange: ${camelCaseParameter}ReferenceRange,
  getRecommendation: ${camelCaseParameter}Recommendation,
};

`;
};

module.exports = makeNutrientEngineTemplate;
