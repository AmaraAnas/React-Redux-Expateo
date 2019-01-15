import Service from './service.model';

describe('Service model', () => {
  it('Should construct', () => {
    const data = {
      SMI_GUID: 'SRV_SAN',
      SMI_NAME: 'Assurance Sant\u00e9',
      SMI_TITLE:
        'Contactez un assureur afin de d\u00e9finir votre couverture sant\u00e9 internationale ',
      SMI_DISPLAY_TYPE: null,
      SMI_DESCRIPTION:
        "Faites le point avec des assureurs habitu\u00e9s \u00e0 un public d'expatri\u00e9s afin de d\u00e9finir l'assurance internationale correspondante \u00e0 votre situation et \u00e0 vos besoins (Assurance au premier euro, CFE etc..). En effet les frais m\u00e9dicaux peuvent s'av\u00e9rer tr\u00e8s \u00e9lev\u00e9s \u00e0 destination",
      SMI_WALLPAPER:
        'https://www.expateo.com/dev_v2/ws/img_smi/smi_housing.jpg',
      PSM_REQUIRED: '0',
      PSM_ALLOW_OUT_OF_PACK: '1',
      SMI_ISPACK: '0',
      SMI_UTA_COUNT: 1,
      SMI_UTA_COUNT_DONE: 0,
      service_company: [],
      service_taskaction: [
        {
          UTA_GUID: 'FF121571682BCD9E4083FDB2EF26DA4A',
          TKA_LABEL: 'V\u00e9rifier votre couverture sant\u00e9 ',
        },
      ],
    };
    const s = new Service(data);
    expect(s.id).toEqual(data.SMI_GUID);
    expect(s.title).toEqual(data.SMI_TITLE);
    expect(s.name).toEqual(data.SMI_NAME);
    expect(s.isRequired).toEqual(Boolean(parseInt(data.PSM_REQUIRED)));
    expect(s.description).toEqual(data.SMI_DESCRIPTION);
    expect(JSON.parse(JSON.stringify(s))).toEqual({
      id: data.SMI_GUID,
      title: data.SMI_TITLE,
      name: data.SMI_NAME,
      description: data.SMI_DESCRIPTION,
      isRequired: Boolean(parseInt(data.PSM_REQUIRED)),
    });
  });
});
