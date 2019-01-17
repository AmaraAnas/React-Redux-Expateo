import Mobility from '../../models/mobility.model';

const mobQuestionsIDs = {
  mob_destination_QUE_GUID: 'QUE_88',
  mob_date_QUE_GUID: 'QUE_20',
};

export function getMobilityFromQuestionArray(questionsArray) {
  let mobility = {
    id: 1,
    startDate: '',
    destination: '',
  };
  questionsArray.map((question) => {
    if (question.QUE_GUID == mobQuestionsIDs.mob_date_QUE_GUID) {
      if (
        question.hasOwnProperty('user_answer_done') &&
        question.user_answer_done[0] != null
      ) {
        mobility.startDate = question.user_answer_done[0].USA_DATE;
      }
    } else if (question.QUE_GUID == mobQuestionsIDs.mob_destination_QUE_GUID) {
      if (
        question.hasOwnProperty('user_answer_done') &&
        question.user_answer_done[0] != null
      ) {
        mobility.destination = question.user_answer_done[0].USA_TEXT;
      }
    }
  });

  return new Mobility(mobility);
}
