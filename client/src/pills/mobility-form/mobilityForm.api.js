import * as traductionApi from '../api/traduction.api';

export async function load(language) {
  const childrawData = await traductionApi.loadField({
    language,
    table: 'childcount',
  });
  const familyrawData = await traductionApi.loadField({
    language,
    table: 'familystatus',
  });

  return {
    childFieldOptions: Object.entries(childrawData.translations).map(
      ([value, text]) => ({ value, text }),
    ),
    familyFieldOptions: Object.entries(familyrawData.translations).map(
      ([value, text]) => ({ value, text }),
    ),
  };
}
