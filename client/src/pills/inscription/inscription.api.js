import { subscribeApi } from '../api/base.api';

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
  return await subscribeApi({
    gUsrGuid,
    gFamilyGuid,
    gPassword,
    gAllowEmail,
    gDepartureDate,
    gFamille,
    gPrenomConjoint,
    gPasswordConfirm,
  });
}
