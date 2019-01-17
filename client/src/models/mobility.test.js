import Mobilty from './mobility.model';

describe('Mobility model', () => {
  it('Should construct', () => {
    const rawData = {
      QUE_88: {
        QUE_GUID: 'QUE_88',
        QUE_LABEL: 'Quelle est votre destination ?',
        QUE_TYPE: 'place',
        QUE_LOCATION: 'MENU_USER',
        QUE_TRANSLATION_CODE: 'PAYS_ETAT_VILLE',
        QUE_LEVEL: null,
        user_theme: [],
        user_answer: [],
        user_answer_done: [
          {
            USA_ANSWER_GUID: null,
            USA_TEXT: 'Allemagne',
            USA_DATE: null,
          },
        ],
      },
      QUE_20: {
        QUE_GUID: 'QUE_20',
        QUE_LABEL: 'Quelle est votre date de départ de France prévisionnelle ?',
        QUE_TYPE: 'date',
        QUE_LOCATION: 'MENU_USER',
        QUE_TRANSLATION_CODE: 'DEPART',
        QUE_LEVEL: null,
        user_theme: [],
        user_answer: [],
        user_answer_done: [
          {
            USA_ANSWER_GUID: null,
            USA_TEXT: null,
            USA_DATE: '2019-03-16 00:00:00',
          },
        ],
      },
    };
    const m = new Mobilty(rawData);
    expect(m.id).toEqual(rawData.id);
    expect(m.destination).toEqual(rawData.QUE_88.user_answer_done[0].USA_TEXT);
    expect(m.startDate).toEqual(
      new Date(rawData.QUE_20.user_answer_done[0].USA_DATE).getTime(),
    );
    expect(JSON.parse(JSON.stringify(m))).toEqual({
      id: undefined,
      destination: rawData.QUE_88.user_answer_done[0].USA_TEXT,
      startDate: new Date(
        rawData.QUE_20.user_answer_done[0].USA_DATE,
      ).getTime(),
    });
  });
});
