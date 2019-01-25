import { subscribeApi } from '../api/base.api';

export async function load({
  userGuid: gUsrGuid,
  familyGuid: gFamilyGuid,
  clGuid: gClGuid,
}) {
  const rawData = await subscribeApi.load({
    gUsrGuid,
    gFamilyGuid,
    gClGuid,
  });

  return {
    familyFieldOptions: rawData.list.familystatus.value.map((option) => ({
      text: option.TRN_LABEL,
      value: option.TRN_CODE,
    })),
    isMobilityAlreadyInitialized: rawData.checklisttodo === '0',
    isPasswordAlreadyInitialized: rawData.passwordtodo === '0',
  };
}

export async function subscribe({
  userGuid: gUsrGuid,
  familyGuid: gFamilyGuid,
  clGuid: gClGuid,
  password: gPassword,
  family: gFamille,
  conjoint: gPrenomConjoint,
  startDate: gDepartureDate,
  allowEmail: gAllowEmail,
  confirmpassword: gPasswordConfirm,
}) {
  return await subscribeApi.commit({
    gUsrGuid,
    gFamilyGuid,
    gClGuid,
    gPassword,
    gPasswordConfirm,
    gDepartureDate,
    gFamille,
    gPrenomConjoint,
    gAllowEmail,
  });
}
