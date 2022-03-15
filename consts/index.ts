import { pathRoutes, Menu } from 'types';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import FormatColorFillOutlinedIcon from '@mui/icons-material/FormatColorFillOutlined';
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';
import PermContactCalendarOutlinedIcon from '@mui/icons-material/PermContactCalendarOutlined';
import LocalCarWashOutlinedIcon from '@mui/icons-material/LocalCarWashOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import ListAltRoundedIcon from '@mui/icons-material/ListAltRounded';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

export const email = 'qb.wheatley@gmail.com';
export const phone = '88005553535';

export const menu: Menu[] = [
  {
    id: 1,
    title: 'Навигация',
    items: [
      {
        id: 1,
        name: 'Главная',
        path: pathRoutes.HOME,
        Icon: HomeOutlinedIcon,
      },
      {
        id: 2,
        name: 'Поиск',
        path: pathRoutes.SEARCH,
        Icon: SearchOutlinedIcon,
      },
      {
        id: 10,
        name: 'Корзина',
        path: pathRoutes.SEARCH,
        Icon: ShoppingCartOutlinedIcon,
      },
      {
        id: 3,
        name: 'Контакты',
        path: pathRoutes.CONTACTS,
        Icon: PermContactCalendarOutlinedIcon,
      },
      {
        id: 4,
        name: 'Отзывы',
        path: pathRoutes.REVIEWS,
        Icon: ChatOutlinedIcon,
      },
      {
        id: 5,
        name: 'Услуги колористов',
        path: pathRoutes.COLORIST,
        Icon: FormatColorFillOutlinedIcon,
      },
      {
        id: 6,
        name: 'Новости и Акции',
        path: pathRoutes.NEWS,
        Icon: NewspaperOutlinedIcon,
      },
      {
        id: 7,
        name: 'Информация',
        path: pathRoutes.INFO,
        Icon: InfoOutlinedIcon,
      },
      {
        id: 8,
        name: 'ЧаВО (FAQ)',
        path: pathRoutes.FAQ,
        Icon: ContactSupportOutlinedIcon,
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
        Icon: LocalCarWashOutlinedIcon,
      },
      {
        id: 2,
        name: 'Как подкрасить сколы и царапины?',
        path: pathRoutes.ARTICLES,
        Icon: ListAltRoundedIcon,
      },
      {
        id: 3,
        name: 'Как сделать локальный ремонт ЛКМ?',
        path: pathRoutes.ARTICLES,
        Icon: ListAltRoundedIcon,
      },
      {
        id: 4,
        name: 'Характеристики эмалей',
        path: pathRoutes.ARTICLES,
        Icon: ArticleOutlinedIcon,
      },
      {
        id: 5,
        name: 'А что если краска не подойдет?',
        path: pathRoutes.ARTICLES,
        Icon: ArticleOutlinedIcon,
      },
      {
        id: 6,
        name: 'Технологии ремонта ЛКМ',
        path: pathRoutes.ARTICLES,
        Icon: ArticleOutlinedIcon,
      },
    ],
  },
  {
    id: 3,
    title: 'Каталоги эмалей',
    items: [
      {
        id: 0,
        name: 'По коду цвета автомобиля',
        path: pathRoutes.CAR_COLOR,
        Icon: LocalCarWashOutlinedIcon,
      },
      {
        id: 1,
        name: 'Каталог цветов RAL',
        path: pathRoutes.CAR_COLOR,
        Icon: ColorLensOutlinedIcon,
      },
      {
        id: 2,
        name: 'Каталог цветов RAL DESIGN',
        path: pathRoutes.CAR_COLOR,
        Icon: ColorLensOutlinedIcon,
      },
      {
        id: 3,
        name: 'Каталог цветов RAL EFFECT',
        path: pathRoutes.CAR_COLOR,
        Icon: ColorLensOutlinedIcon,
      },
      {
        id: 4,
        name: 'Каталог цветов NCS',
        path: pathRoutes.CAR_COLOR,
        Icon: ColorLensOutlinedIcon,
      },
      {
        id: 5,
        name: 'Каталог цветов PANTONE',
        path: pathRoutes.CAR_COLOR,
        Icon: ColorLensOutlinedIcon,
      },
      {
        id: 6,
        name: 'Каталог цветов LADA',
        path: pathRoutes.CAR_COLOR,
        Icon: ColorLensOutlinedIcon,
      },
    ],
  },
];

export const copyMenu = [
  {
    id: 1,
    name: 'JETCOLOR',
    path: '/',
  },
  {
    id: 2,
    name: 'Политика',
    path: '/',
  },
  {
    id: 3,
    name: 'Копирайт',
    path: '/',
  },
  {
    id: 4,
    name: 'Информация',
    path: '/',
  },
];

export const socials = [
  {
    id: 1,
    name: 'YouTube',
    Icon: YouTubeIcon,
    path: '/',
  },
  {
    id: 2,
    name: 'FaceBook',
    Icon: FacebookIcon,
    path: '/',
  },
  {
    id: 3,
    name: 'Instagram',
    Icon: InstagramIcon,
    path: '/',
  },
  {
    id: 4,
    name: 'Twitter',
    Icon: TwitterIcon,
    path: '/',
  },
];

export const subHeaderMenu = [
  {
    name: 'Штрих-корректоры',
    path: 'id1',
  },
  {
    name: 'Маркеры',
    path: 'id2',
  },
  {
    name: 'Баллончики',
    path: 'id3',
  },
  {
    name: 'Эмаль',
    path: 'id4',
  },
  {
    name: 'Комплекты',
    path: 'id5',
  },
  {
    name: 'Расходные материалы',
    path: 'id6',
  },
];
