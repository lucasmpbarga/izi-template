const makeNutrientEngineTemplate = require("./nutrient-engine-template.js");
const makeNutrientRecommendationTemplate = require("./nutrient-recommendation-template.js");
const makeNutrientReferenceRangeTemplate = require("./nutrient-reference-range-template.js");

const makeStructure = (projectName) => {
  return {
    [`${projectName}-engine.ts`]: makeNutrientEngineTemplate(projectName),
    [`${projectName}-recommendation.ts`]:
      makeNutrientRecommendationTemplate(projectName),
    [`${projectName}-reference-range.ts`]:
      makeNutrientReferenceRangeTemplate(projectName),
  };
};

module.exports = { makeStructure };
