export const navData = [
  {
    value: 'Про нас',
    id: 0,
    isOpened: false,
    subMenu: ['Команда', 'Контакти'],
    links: {
      Команда: 'team',
      Контакти: '',
    },
  },
  {
    value: 'Діяльність',
    id: 1,
    isOpened: false,
    subMenu: [
      'Рятувальні операції',
      'Ветеринарна допомога',
      'Реабілітація',
      'Адопція',
      'Терапевтичні програми',
    ],
    links: {
      'Рятувальні операції': '',
      'Ветеринарна допомога': '',
      Реабілітація: '',
      Адопція: '',
      'Терапевтичні програми': '',
    },
  },
  {
    value: 'Підтримати',
    id: 2,
    isOpened: false,
    subMenu: ['Підтримати нас', 'Актуальні збори', 'Стати волонтером'],
    links: {
      'Підтримати нас': '',
      'Актуальні збори': 'current-donations',
      'Стати волонтером': 'become-volunteer',
    },
  },
];

export function getLink(pageName: string, links: any): string {
  return links[pageName];
}

// export const  navData = [
//   {
//     value: "Про нас",
//     id: 0,
//     isOpened: false,
//     subMenu: ["Команда", "Контакти"],
//   },
//   {
//     value: "Діяльність",
//     id: 1,
//     isOpened: false,
//     subMenu: ["Рятувальні операції", "Ветеринарна допомога", "Реабілітація", "Адопція", "Терапевтичні програми"],
//   },
//   {
//     value:"Підтримати",
//     id: 2,
//     isOpened: false,
//     subMenu: ["Підтримати нас", "Актуальні збори", "Стати волонтером"],
//   }
// ]
