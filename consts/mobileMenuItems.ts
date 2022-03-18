import { pathRoutes } from 'types';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PermContactCalendarOutlinedIcon from '@mui/icons-material/PermContactCalendarOutlined';
import InsertCommentOutlinedIcon from '@mui/icons-material/InsertCommentOutlined';
import NewspaperRoundedIcon from '@mui/icons-material/NewspaperRounded';
import FormatColorFillRoundedIcon from '@mui/icons-material/FormatColorFillRounded';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import LocalCarWashOutlinedIcon from '@mui/icons-material/LocalCarWashOutlined';
import ListAltRoundedIcon from '@mui/icons-material/ListAltRounded';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';

// const useRoute = useRouter();

export const menuItemsFirst = [
  {
    name: 'Войти',
    Icon: LoginRoundedIcon,
    path: pathRoutes.LOGIN,
  },
  {
    name: 'Личный кабинет',
    Icon: AccountCircleOutlinedIcon,
    path: pathRoutes.USER_ACCOUNT,
  },
  {
    name: 'Поиск',
    Icon: SearchRoundedIcon,
    path: pathRoutes.SEARCH,
  },
  {
    name: 'Корзина',
    Icon: ShoppingCartOutlinedIcon,
    path: pathRoutes.CART,
  },
  {
    name: 'ЧаВо (FAQ)',
    Icon: ContactSupportOutlinedIcon,
    path: pathRoutes.FAQ,
  },
  {
    name: 'Как узнать код краски автомобиля?',
    Icon: InfoOutlinedIcon,
    path: pathRoutes.CAR_COLOR,
  },
];

export const menuItemsSecond = [
  {
    isAccordion: false,
    name: 'Главная',
    Icon: HomeOutlinedIcon,
    path: pathRoutes.HOME,
  },
  {
    isAccordion: false,
    name: 'Контакты',
    Icon: PermContactCalendarOutlinedIcon,
    path: pathRoutes.CONTACTS,
  },
  {
    isAccordion: false,
    name: 'Отзывы',
    Icon: InsertCommentOutlinedIcon,
    path: pathRoutes.REVIEWS,
  },
  {
    isAccordion: false,
    name: 'Услуги колористов',
    Icon: FormatColorFillRoundedIcon,
    path: pathRoutes.COLORIST,
  },
  {
    isAccordion: false,
    name: 'Новости и Акции',
    Icon: NewspaperRoundedIcon,
    path: pathRoutes.NEWS,
  },
  {
    isAccordion: false,
    name: 'Информация',
    Icon: InfoOutlinedIcon,
    path: pathRoutes.INFO,
  },
  {
    isAccordion: true,
    name: 'Каталог эмалей',
    Icon: ColorLensOutlinedIcon,
    path: pathRoutes.CATALOGS,
    items: [
      {
        name: 'По куду цвета автомобиля',
        Icon: LocalCarWashOutlinedIcon,
        path: pathRoutes.CATALOGS,
      },
      {
        name: 'Каталог цветов RAL',
        Icon: ColorLensOutlinedIcon,
        path: pathRoutes.CATALOGS,
      },
      {
        name: 'Каталог цветов RAL DESIGN',
        Icon: ColorLensOutlinedIcon,
        path: pathRoutes.CATALOGS,
      },
      {
        name: 'Каталог цветов RAL EFFECT',
        Icon: ColorLensOutlinedIcon,
        path: pathRoutes.CATALOGS,
      },
      {
        name: 'Каталог цветов NCS',
        Icon: ColorLensOutlinedIcon,
        path: pathRoutes.CATALOGS,
      },
      {
        name: 'Каталог цветов NCS',
        Icon: ColorLensOutlinedIcon,
        path: pathRoutes.CATALOGS,
      },
      {
        name: 'Каталог цветов PHANTONE',
        Icon: ColorLensOutlinedIcon,
        path: pathRoutes.CATALOGS,
      },
      {
        name: 'Каталог цветов LADA',
        Icon: ColorLensOutlinedIcon,
        path: pathRoutes.CATALOGS,
      },
    ],
  },
  {
    isAccordion: true,
    name: 'Статьи',
    Icon: ArticleOutlinedIcon,
    path: pathRoutes.ARTICLES,
    items: [
      {
        name: 'Как узнать код краски автомобиля?',
        Icon: LocalCarWashOutlinedIcon,
        path: pathRoutes.ARTICLES,
      },
      {
        name: ' Rак подкрасить сколы и царапины?',
        Icon: ListAltRoundedIcon,
        path: pathRoutes.ARTICLES,
      },
      {
        name: 'Как сделать локальный ремонт ЛКМ?',
        Icon: ListAltRoundedIcon,
        path: pathRoutes.ARTICLES,
      },
      {
        name: 'Характеристики эмалей',
        Icon: ArticleOutlinedIcon,
        path: pathRoutes.ARTICLES,
      },
      {
        name: 'А что если краска не подойдет?',
        Icon: ArticleOutlinedIcon,
        path: pathRoutes.ARTICLES,
      },
      {
        name: 'Технологии ремонта ЛКМ',
        Icon: ArticleOutlinedIcon,
        path: pathRoutes.ARTICLES,
      },
    ],
  },
];
