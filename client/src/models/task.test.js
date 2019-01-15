import Task from './task.model';

describe('Task model', () => {
  it('Should construct', () => {
    const data = {
      UTA_GUID: '3EDDBBD698AF464A748CB4A5FD3497F2',
      UTA_CUSTOM_USER: '0',
      UTA_CUSTOM_DATE: '0',
      UTA_CUSTOM_ADMIN: '0',
      UTA_CUSTOM_SCHEDULED_DATE: null,
      UTA_REMIND_DATE: null,
      UTA_LABEL: 'Envisager un garde-meuble ',
      UTA_COMMENT:
        "C'est le moment de <b>trier vos affaires </b>afin de savoir lesquelles amener, donner ou garder dans un box. Vous pouvez envisager de <b>garder vos affaires dans un garde meuble</b> afin d'\u00e9viter de transporter des meubles trop encombrant avec vous. Le prix est de plus en plus attractif et il y a un choix important de taille de box. Si vous compter y entreproser des biens de valeurs, il serait plus judicieux de choisir un garde meuble qui dispose d'un syst\u00e8me de surveillance afin d'\u00e9viter de vous faire voler vos affaires. En g\u00e9n\u00e9ral, le prix de location des box contient une assurance. ",
      UTA_HOWTO:
        "Pour trouver le garde meuble qui convient votre situation, il importe de d'abord <b>d\u00e9finir la surface de stockage</b> dont vous avez besoin :<br/><i>- 1m\u00b2 permet de stocker une vingtaine de cartons de taille standard (35?cm x 55?cm x 33?cm)<br/>- 3m\u00b2 suffisent pour stocker l'int\u00e9gralit\u00e9 des meubles et objets contenus dans un studio ou dans un appartement d'une pi\u00e8ce<br/>- 6m\u00b2 seront n\u00e9cessaires pour un appartement de type F2<br/>- 9m\u00b2 pour un appartement de type F3 . <br/>Si vous le souhaitez, nous pouvous vous mettre en relation avec l'un de nos partenaires. </i>",
      UTA_LINK: '',
      UTA_HASHTAG: '#BoxStockage',
      UTA_COMPUTED_HOWTO:
        "Pour trouver le garde meuble qui convient votre situation, il importe de d'abord <b>d\u00e9finir la surface de stockage</b> dont vous avez besoin :<br/><i>- 1m\u00b2 permet de stocker une vingtaine de cartons de taille standard (35?cm x 55?cm x 33?cm)<br/>- 3m\u00b2 suffisent pour stocker l'int\u00e9gralit\u00e9 des meubles et objets contenus dans un studio ou dans un appartement d'une pi\u00e8ce<br/>- 6m\u00b2 seront n\u00e9cessaires pour un appartement de type F2<br/>- 9m\u00b2 pour un appartement de type F3 . <br/>Si vous le souhaitez, nous pouvous vous mettre en relation avec l'un de nos partenaires. </i>",
      UTA_COMPUTED_COMMENT:
        "C'est le moment de <b>trier vos affaires </b>afin de savoir lesquelles amener, donner ou garder dans un box. Vous pouvez envisager de <b>garder vos affaires dans un garde meuble</b> afin d'\u00e9viter de transporter des meubles trop encombrant avec vous. Le prix est de plus en plus attractif et il y a un choix important de taille de box. Si vous compter y entreproser des biens de valeurs, il serait plus judicieux de choisir un garde meuble qui dispose d'un syst\u00e8me de surveillance afin d'\u00e9viter de vous faire voler vos affaires. En g\u00e9n\u00e9ral, le prix de location des box contient une assurance. ",
      UTA_DATE: '1 Mars 2019',
      UTA_SCHEDULED_DATE: '2019-03-01 00:00:00',
      UTA_COMPUTED_SCHEDULED_DATE: '2019-03-01 00:00:00',
      UTA_DONE: '0',
      UTA_PRIORITY: '0',
      UTA_OWNER: '',
      user_taskaction_user: [
        {
          USR_GUID: '9570E5E3C4A0859CF18220E7E21CC4A4',
          USR_FIRSTNAME: 'Miyukiq',
        },
      ],
      user_taskaction_service_company: [],
      user_taskaction_partner_online: [],
      user_taskaction_partner_xpto: [],
      user_taskaction_partner_company: [],
    };
    const t = new Task(data, { themeGuid: 'the_1' });
    expect(t.id).toEqual(data.UTA_GUID);
    expect(t.label).toEqual(data.UTA_LABEL);
    expect(t.date).toEqual(
      new Date(data.UTA_COMPUTED_SCHEDULED_DATE).getTime(),
    );
    expect(t.isDone).toEqual(Boolean(parseInt(data.UTA_DONE)));
    expect(t.themeGuid).toEqual('the_1');
    expect(JSON.parse(JSON.stringify(t))).toEqual({
      id: data.UTA_GUID,
      label: data.UTA_LABEL,
      date: new Date(data.UTA_COMPUTED_SCHEDULED_DATE).getTime(),
      isDone: Boolean(parseInt(data.UTA_DONE)),
      themeGuid: 'the_1',
    });
  });
});
