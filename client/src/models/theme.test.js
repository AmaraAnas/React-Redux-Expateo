import Theme from './theme.model';

describe('Theme model', () => {
  it('Should construct', () => {
    const data = {
      THE_ID: '4',
      THE_TRANSLATION_CODE: 'THE_UNEMPLOYMENT_RETIREMENT',
      THE_CONDITION: null,
      THE_ORDER: '3',
      THE_INSERT_DATETIME: '0000-00-00 00:00:00',
      THE_UPDATE_DATETIME: '0000-00-00 00:00:00',
      THE_GUID: 'THE_4',
      THE_ICON: 'THE_UNEMPLOYMENT_RETIREMENT.svg',
      THE_LABEL: 'Chomage et retraite',
      THE_HASHTAG: '#Chomage #Retraite',
    };
    const t = new Theme(data);
    expect(t.id).toEqual(data.THE_GUID);
    expect(t.label).toEqual(data.THE_LABEL);
    expect(t.order).toEqual(data.THE_ORDER);
    expect(JSON.parse(JSON.stringify(t))).toEqual({
      id: data.THE_GUID,
      order: data.THE_ORDER,
      label: data.THE_LABEL,
    });
  });
});
