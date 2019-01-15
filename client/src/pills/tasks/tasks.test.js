import Task from '../../models/task.model';

import { schemaSelectorCreator } from '../schema/schema.selectors';
import { addEntities } from '../schema/schema.actions';
import * as baseApi from '../api/base.api';

import { STATE_KEY, tasksSelector } from './tasks.selectors';
import { getTasks } from './tasks.api';
import {
  getTasks as getTasksAction,
  getAllPending,
  getAllSuccess,
  getAllFailure,
} from './tasks.actions';
import rawTasks from './tasks.data';

jest.mock('../api/base.api');

describe('Tasks selector', () => {
  it('Should created selector use the good STATE_KEY', () => {
    expect(tasksSelector.toString()).toEqual(
      schemaSelectorCreator(STATE_KEY, []).toString(),
    );
  });

  it('Should created selector return the default value', () => {
    let state = {
      Schema: {
        entities: {},
      },
    };
    expect(tasksSelector(state)).toEqual([]);
  });

  it('Should created selector return the `tasks` stored entity', () => {
    let state = {
      Schema: {
        entities: {
          tasks: [{ id: 1, name: 'chomage' }, { id: 2, name: 'assurance' }],
        },
      },
    };
    expect(tasksSelector(state)).toEqual([
      { id: 1, name: 'chomage' },
      { id: 2, name: 'assurance' },
    ]);
  });
});

const expectedTasks = [
  new Task(
    {
      UTA_GUID: '1C5332355B5C24158C50442EE7DDC3E1',
      UTA_CUSTOM_USER: '0',
      UTA_CUSTOM_DATE: '0',
      UTA_CUSTOM_ADMIN: '0',
      UTA_CUSTOM_SCHEDULED_DATE: null,
      UTA_REMIND_DATE: null,
      UTA_LABEL: "Demander un entretien d'information retraite expatriation",
      UTA_COMMENT:
        "Chaque assur\u00e9 \u00e2g\u00e9 <b>d'au moins 45 ans</b> peut b\u00e9n\u00e9ficier, quel que soit son lieu de r\u00e9sidence, d'un entretien d'information retraite sur demande. <br/>Vous devez avoir relev\u00e9 d'un r\u00e9gime de retraite avant le 1er janvier de l'ann\u00e9e o\u00f9 vous demandez cet entretien et vous ne devez pas avoir d\u00e9j\u00e2 obtenu votre retraite (m\u00eame provisoire) dans ce r\u00e9gime. <br/> Cet entretien est destin\u00e9 \u00e0 vous informer, notamment, sur :<br/>- les droits \u00e0 retraite ; <br/>- les possibilit\u00e9s de cotiser \u00e0 l'assurance volontaire ou de racheter des cotisations ;<br/> - l'incidence de l'exercice de son activit\u00e9 \u00e0 l'\u00e9tranger.",
      UTA_HOWTO:
        "Afin d'obtenir cet entretien il vous suffit de contacter l'organisme de retraite auquel vous \u00eates ou avez \u00e9t\u00e9 affili\u00e9.<br/> Vous devez mentionner sur votre demande :<br/><i>- votre nom de famille, (le cas \u00e9ch\u00e9ant votre nom d'usage) ;<br/>- vos pr\u00e9noms ;<br/>- votre date et lieu de naissance ;<br/>- votre adresse personnelle ;<br/>- votre num\u00e9ro d'inscription au r\u00e9pertoire national d'identification des personnes physiques ;<br/>- le ou les r\u00e9gimes dont vous avez relev\u00e9</i>. <br/><br/><b>L'entretien est r\u00e9alis\u00e9 dans un d\u00e9lai maximum de 3 mois suivant votre demande. <br/></b>Il peut \u00eatre r\u00e9alis\u00e9 par vid\u00e9oconf\u00e9rence ou en pr\u00e9sentiel.",
      UTA_LINK: '',
      UTA_HASHTAG: '#ExpertRetraite',
      UTA_COMPUTED_HOWTO:
        "Afin d'obtenir cet entretien il vous suffit de contacter l'organisme de retraite auquel vous \u00eates ou avez \u00e9t\u00e9 affili\u00e9.<br/> Vous devez mentionner sur votre demande :<br/><i>- votre nom de famille, (le cas \u00e9ch\u00e9ant votre nom d'usage) ;<br/>- vos pr\u00e9noms ;<br/>- votre date et lieu de naissance ;<br/>- votre adresse personnelle ;<br/>- votre num\u00e9ro d'inscription au r\u00e9pertoire national d'identification des personnes physiques ;<br/>- le ou les r\u00e9gimes dont vous avez relev\u00e9</i>. <br/><br/><b>L'entretien est r\u00e9alis\u00e9 dans un d\u00e9lai maximum de 3 mois suivant votre demande. <br/></b>Il peut \u00eatre r\u00e9alis\u00e9 par vid\u00e9oconf\u00e9rence ou en pr\u00e9sentiel.",
      UTA_COMPUTED_COMMENT:
        "Chaque assur\u00e9 \u00e2g\u00e9 <b>d'au moins 45 ans</b> peut b\u00e9n\u00e9ficier, quel que soit son lieu de r\u00e9sidence, d'un entretien d'information retraite sur demande. <br/>Vous devez avoir relev\u00e9 d'un r\u00e9gime de retraite avant le 1er janvier de l'ann\u00e9e o\u00f9 vous demandez cet entretien et vous ne devez pas avoir d\u00e9j\u00e2 obtenu votre retraite (m\u00eame provisoire) dans ce r\u00e9gime. <br/> Cet entretien est destin\u00e9 \u00e0 vous informer, notamment, sur :<br/>- les droits \u00e0 retraite ; <br/>- les possibilit\u00e9s de cotiser \u00e0 l'assurance volontaire ou de racheter des cotisations ;<br/> - l'incidence de l'exercice de son activit\u00e9 \u00e0 l'\u00e9tranger.",
      UTA_DATE: '26 D\u00e9cembre 2018',
      UTA_SCHEDULED_DATE: '2018-12-26 00:00:00',
      UTA_COMPUTED_SCHEDULED_DATE: '2018-12-26 00:00:00',
      UTA_DONE: '0',
      UTA_PRIORITY: '0',
      UTA_OWNER: '',
      user_taskaction_user: [
        {
          USR_GUID: '9570E5E3C4A0859CF18220E7E21CC4A4',
          USR_FIRSTNAME: 'Miyukiq',
        },
      ],
      user_taskaction_service_company: [
        { USC_GUID: 'F2FDA8B3A40AA970526315014E0FD8F7' },
      ],
      user_taskaction_partner_online: [
        {
          PRD_GUID: 'RE_Sapiendo',
          PRD_ICON: 'https://www.expateo.com/dev_v2/ws/img_cmp/sapiendo.png',
          PRD_TITLE: 'Sapiendo',
          PRD_SUBTITLE:
            'Solution simple et \u00e9conomique pour faire un bilan, une v\u00e9rification et une optimisation de son r\u00e9gime de retraite. ',
          PRD_DESCRIPTION:
            'Fa\u00eetes le point sur votre retraite gr\u00e2ce aux 3 simulateurs retraite SAPIENDO. Calcul de retraite, date de d\u00e9part, v\u00e9rification et optimisation.',
          PRD_PROMOTIONAL_TITLE: null,
          PRD_PROMOTIONAL_CODE: '',
          PRD_DESCRIPTION_OTHER_TITLE: '',
          PRD_DESCRIPTION_OTHER_CONTENT: '',
          PRD_URL_NAME: 'Sapiendo',
          PRD_URL_LINK: null,
          PRD_SUBSCRIBE_URL_NAME: 'Register Sapiendo',
          PRD_SUBSCRIBE_URL_LINK: 'URL_1029_1',
          PRD_OWNER: 'XPTO',
          partner_contact: [
            {
              PAC_FIRSTNAME: 'Philippe',
              PAC_LASTNAME: 'BELLAICHE',
              PAC_EMAIL: 'philippe.bellaiche@sapiendo.fr',
              PAC_PHONE: '06 61 21 41 31',
              PAC_PHONE2: null,
              PAC_OTHER_MEAN_CONTACT: null,
            },
          ],
        },
      ],
      user_taskaction_partner_xpto: [],
      user_taskaction_partner_company: [],
    },
    { themeGuid: 'THE_4' },
  ),
  new Task(
    {
      UTA_GUID: 'CED679B4D61080B7186BAC65B8B4BCCE',
      UTA_CUSTOM_USER: '0',
      UTA_CUSTOM_DATE: '0',
      UTA_CUSTOM_ADMIN: '0',
      UTA_CUSTOM_SCHEDULED_DATE: null,
      UTA_REMIND_DATE: null,
      UTA_LABEL: 'Fixer la date de votre d\u00e9m\u00e9nagement ',
      UTA_COMMENT:
        'Lorsque vous aurez s\u00e9lectionn\u00e9 une soci\u00e9t\u00e9 de d\u00e9m\u00e9nagement, retournez-leur rapidement le <b>contrat sign\u00e9</b> pour confirmer votre d\u00e9m\u00e9nagement et en figer la date.',
      UTA_HOWTO:
        "Par ailleurs, il est conseill\u00e9 de prendre en compt<b>e le d\u00e9lai d'acheminement de vos effets \u00e0 destination afin de fixer la date de votre d\u00e9m\u00e9nagement</b>. Aussi n'oubliez pas de poser un jour de cong\u00e9 si n\u00e9cessaire. Cela vous permettra de participer au bon d\u00e9roulement des op\u00e9rations. Afin de faciliter votre d\u00e9m\u00e9nagement et surtout, si vous habitez en centre ville, n'oubliez pas de <b>contacter votre mairie pour la mise en place de la signalisation des camions. </b>",
      UTA_LINK: '',
      UTA_HASHTAG: '#D\u00e9m\u00e9nageurs',
      UTA_COMPUTED_HOWTO:
        "Par ailleurs, il est conseill\u00e9 de prendre en compt<b>e le d\u00e9lai d'acheminement de vos effets \u00e0 destination afin de fixer la date de votre d\u00e9m\u00e9nagement</b>. Aussi n'oubliez pas de poser un jour de cong\u00e9 si n\u00e9cessaire. Cela vous permettra de participer au bon d\u00e9roulement des op\u00e9rations. Afin de faciliter votre d\u00e9m\u00e9nagement et surtout, si vous habitez en centre ville, n'oubliez pas de <b>contacter votre mairie pour la mise en place de la signalisation des camions. </b>",
      UTA_COMPUTED_COMMENT:
        'Lorsque vous aurez s\u00e9lectionn\u00e9 une soci\u00e9t\u00e9 de d\u00e9m\u00e9nagement, retournez-leur rapidement le <b>contrat sign\u00e9</b> pour confirmer votre d\u00e9m\u00e9nagement et en figer la date.',
      UTA_DATE: '5 Janvier 2019',
      UTA_SCHEDULED_DATE: '2019-01-05 00:00:00',
      UTA_COMPUTED_SCHEDULED_DATE: '2019-01-05 00:00:00',
      UTA_DONE: '0',
      UTA_PRIORITY: '0',
      UTA_OWNER: '',
      user_taskaction_user: [
        {
          USR_GUID: '9570E5E3C4A0859CF18220E7E21CC4A4',
          USR_FIRSTNAME: 'Miyukiq',
        },
      ],
      user_taskaction_service_company: [
        { USC_GUID: '58686D83021B059EA2962C7ACC057121' },
      ],
      user_taskaction_partner_online: [
        {
          PRD_GUID: 'CMP_LES3D',
          PRD_ICON: 'https://www.expateo.com/dev_v2/ws/img_cmp/les3d.png',
          PRD_TITLE: 'Les 3 Demenageurs',
          PRD_SUBTITLE: 'Demenagement international pour particuliers',
          PRD_DESCRIPTION:
            'Beaucoup de raisons nous poussent a faire un demenagement a l international. Mais ce projet n est pas chose facile et demande beaucoup de temps. C est a cet instant que Les 3 Demenageurs rentrent en jeu.',
          PRD_PROMOTIONAL_TITLE: null,
          PRD_PROMOTIONAL_CODE: 'XPTO',
          PRD_DESCRIPTION_OTHER_TITLE: '',
          PRD_DESCRIPTION_OTHER_CONTENT: '',
          PRD_URL_NAME: 'Les 3 Demenageurs',
          PRD_URL_LINK: null,
          PRD_SUBSCRIBE_URL_NAME: 'Register Les 3 Demenageurs',
          PRD_SUBSCRIBE_URL_LINK: 'URL_1000_1',
          PRD_OWNER: 'XPTO',
          partner_contact: [
            {
              PAC_FIRSTNAME: 'Kevin',
              PAC_LASTNAME: 'PITHIOUD',
              PAC_EMAIL: 'kevin@l3dem.com',
              PAC_PHONE: '(0)4 28 29 03 17',
              PAC_PHONE2: null,
              PAC_OTHER_MEAN_CONTACT: null,
            },
          ],
        },
      ],
      user_taskaction_partner_xpto: [],
      user_taskaction_partner_company: [],
    },
    { themeGuid: 'THE_10' },
  ),
  new Task(
    {
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
    },
    { themeGuid: 'THE_10' },
  ),
];

describe('Tasks API', () => {
  it('Should return an array of Task', async () => {
    baseApi.tasksApi.mockResolvedValueOnce(rawTasks);
    const tasks = await getTasks({ sessionId: '0128d', id: '123' });
    expect(tasks).toEqual(expectedTasks);
  });
});

describe('Tasks action', () => {
  it('Should dispatch pending & success', async () => {
    const thunk = getTasksAction();
    const dispatch = jest.fn();
    baseApi.tasksApi.mockResolvedValueOnce(rawTasks);
    const getState = jest.fn().mockReturnValueOnce({ Auth: { user: {} } });
    await thunk(dispatch, getState, {
      api: { tasks: { getTasks } },
    });
    expect(dispatch).toHaveBeenCalledTimes(3);
    expect(dispatch).toHaveBeenNthCalledWith(1, getAllPending());
    expect(dispatch).toHaveBeenNthCalledWith(2, getAllSuccess());
    expect(dispatch).toHaveBeenNthCalledWith(
      3,
      addEntities({
        [STATE_KEY]: expectedTasks,
      }),
    );
  });

  it('Should dispatch pending & failure', async () => {
    const thunk = getTasksAction();
    const dispatch = jest.fn();
    const e = new Error('failed');
    baseApi.tasksApi.mockRejectedValueOnce(e);
    const getState = jest.fn().mockReturnValueOnce({ Auth: { user: {} } });
    await thunk(dispatch, getState, {
      api: { tasks: { getTasks } },
    });
    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(dispatch).toHaveBeenNthCalledWith(1, getAllPending());
    expect(dispatch).toHaveBeenNthCalledWith(2, getAllFailure(e));
  });
});
