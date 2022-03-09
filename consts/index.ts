import { pathRoutes, Menu } from 'types';

export const menu: Menu[] = [
  {
    id: 1,
    title: 'Меню',
    items: [
      {
        id: 1,
        name: 'Главная',
        path: pathRoutes.HOME,
        icon: 'fal fa-home',
      },
      {
        id: 2,
        name: 'Поиск',
        path: pathRoutes.SEARCH,
        icon: 'fal fa-search',
      },
      {
        id: 3,
        name: 'Контакты',
        path: pathRoutes.CONTACTS,
        icon: 'fal fa-search',
      },
      {
        id: 4,
        name: 'Отзывы',
        path: pathRoutes.REVIEWS,
        icon: 'fal fa-search',
      },
      {
        id: 5,
        name: 'Услуги колористов',
        path: pathRoutes.COLORIST,
        icon: 'fal fa-search',
      },
      {
        id: 6,
        name: 'Новости и Акции',
        path: pathRoutes.NEWS,
        icon: 'fal fa-search',
      },
      {
        id: 7,
        name: 'Информация',
        path: pathRoutes.INFO,
        icon: 'fal fa-search',
      },
      {
        id: 8,
        name: 'ЧаВО (FAQ)',
        path: pathRoutes.FAQ,
        icon: 'fal fa-search',
      },
    ],
  },
  {
    id: 2,
    title: 'Статьи',
    items: [
      {
        id: 1,
        name: 'Как узнать код краски автомобиля?',
        path: pathRoutes.ARTICLES,
        icon: null,
      },
      {
        id: 2,
        name: 'Как подкрасить сколы и царапины?',
        path: pathRoutes.ARTICLES,
        icon: null,
      },
      {
        id: 3,
        name: 'Как сделать локальный ремонт ЛКМ',
        path: pathRoutes.ARTICLES,
        icon: null,
      },
      {
        id: 4,
        name: 'Характеристики эмалей',
        path: pathRoutes.ARTICLES,
        icon: null,
      },
      {
        id: 5,
        name: 'Как сделать локальный ремонт ЛКМ',
        path: pathRoutes.ARTICLES,
        icon: null,
      },
      {
        id: 6,
        name: 'Характеристики эмалей',
        path: pathRoutes.ARTICLES,
        icon: null,
      },
    ],
  },
  {
    id: 3,
    title: 'Код краски',
    items: [
      {
        id: 1,
        name: 'Каталог цветов RAL',
        path: pathRoutes.CAR_COLOR,
        icon: null,
      },
      {
        id: 2,
        name: 'Каталог цветов RAL EFFECT',
        path: pathRoutes.CAR_COLOR,
        icon: null,
      },
      {
        id: 3,
        name: 'Каталог цветов NCS',
        path: pathRoutes.CAR_COLOR,
        icon: null,
      },
      {
        id: 4,
        name: 'Каталог цветов PANTONE',
        path: pathRoutes.CAR_COLOR,
        icon: null,
      },
      {
        id: 5,
        name: 'Каталог цветов LADA',
        path: pathRoutes.CAR_COLOR,
        icon: null,
      },
    ],
  },
];
