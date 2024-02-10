function kebabCaseToCamelCase(inputString) {
  return inputString.replace(/-([a-z])/g, (match, group) =>
    group.toUpperCase()
  );
}

const makeNutrientReferenceRangeTemplate = (parameter) => {
  const camelCaseParameter = kebabCaseToCamelCase(parameter);

  return `
  export const ${camelCaseParameter}ReferenceRange = () => {
    let response = {
      type: 'U/L',
      min: 0,
      max: 0,
    };
  
    // EXAMPLE
    // if (ageInDays >= 0 && ageInDays <= 14) {
    //   response = {
    //     ...response,
    //     min: 134,
    //     max: 518,
    //   };
    // } else if (ageInDays > 14 && ageInDays <= 365) {
    //   response = {
    //     ...response,
    //     min: 134,
    //     max: 518,
    //   };
    // } else {
    //   response = {
    //     ...response,
    //     min: 40,
    //     max: 150,
    //   };
    // }
  
    return response;
  };  
`;
};

module.exports = makeNutrientReferenceRangeTemplate;
