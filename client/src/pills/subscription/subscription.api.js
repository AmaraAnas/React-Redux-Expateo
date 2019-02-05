import { subscribeApi } from '../api/base.api';

export async function isPasswordAlreadyInitialized({
  userGuid: gUsrGuid,
  familyGuid: gFamilyGuid,
}) {
  const rawData = await subscribeApi.load({
    gUsrGuid,
    gFamilyGuid,
  });
  return rawData.status === 'done';
}

export async function subscribe({
  userGuid: gUsrGuid,
  familyGuid: gFamilyGuid,
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
    gPassword,
    gPasswordConfirm,
    gDepartureDate,
    gFamille,
    gPrenomConjoint,
    gAllowEmail,
  });
}
