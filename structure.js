import { makeNutrientEngineTemplate } from "./_template/nutrient-engine-template.js";
import { makeNutrientRecommendationTemplate } from "./_template/nutrient-recommendation-template.js";
import { makeNutrientReferenceRangeTemplate } from "./_template/nutrient-reference-range-template.js";

export const paramStructure = {
  [`${projectName}-engine.ts`]: makeNutrientEngineTemplate(projectName),
  [`${projectName}-recommendation.ts`]:
    makeNutrientRecommendationTemplate(projectName),
  [`${projectName}-reference-range.ts`]:
    makeNutrientReferenceRangeTemplate(projectName),
  "custom-script.js": jsFileContent, // Incluindo o conteúdo do arquivo JS no objeto
};
