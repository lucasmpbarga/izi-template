function kebabCaseToCamelCase(inputString) {
  return inputString.replace(/-([a-z])/g, (match, group) =>
    group.toUpperCase()
  );
}

const makeNutrientRecommendationTemplate = (parameter) => {
  const camelCaseParameter = kebabCaseToCamelCase(parameter);

  return `
  export const ${camelCaseParameter}Recommendation = ({
    nutrients,
    referencesRange,
  }) => {
    const ${camelCaseParameter}Recommendation = {};
    
      // EXAMPLE
      // if (
      //   nutrients['alanina_aminotransferase'] >
      //   referencesRange['alanina_aminotransferase'].max
      // ) {
      //   alaninaAminotransferaseRecommendation['alanina_aminotransferase'] =
      //     'vitaminas do complexo b , vitamina e , silimarina, L-carnitina';
      // }
  
    return ${camelCaseParameter}Recommendation;
  };
  
`;
};

module.exports = makeNutrientRecommendationTemplate;
