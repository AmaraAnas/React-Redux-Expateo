import { traductionApi } from './base.api';

export async function loadField({ language: TRN_LANGUAGE, table: TRN_TABLE }) {
  return traductionApi({ TRN_LANGUAGE, TRN_TABLE });
}
