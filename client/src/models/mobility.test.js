import Mobilty from './mobility.model';

describe('Mobility model', () => {
  it('Should construct', () => {
    const data = {
      id: 0,
      startDate: '2019-03-01 00:00:00',
      destination: 'Nigeria',
    };
    const m = new Mobilty(data);
    expect(m.id).toEqual(data.id);
    expect(m.destination).toEqual(data.destination);
    expect(m.destination).not.toEqual('');
    expect(m.destination).not.toEqual('2268486');
    expect(m.date).toEqual(new Date(data.startDate).getTime());
    expect(JSON.parse(JSON.stringify(m))).toEqual({
      id: data.id,
      destination: data.destination,
      date: new Date(data.startDate).getTime(),
    });
  });
});
