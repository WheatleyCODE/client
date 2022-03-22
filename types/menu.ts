import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

export enum pathRoutes {
  HOME = '/',
  SEARCH = '/search',
  CONTACTS = '/contacts',
  REVIEWS = '/reviews',
  COLORIST = '/colorist',
  CATALOGS = '/catalogs',
  NEWS = '/news',
  INFO = '/info',
  FAQ = '/faq',
  CAR_COLOR = '/car_color',
  ARTICLES = '/articles',
  USER_ACCOUNT = '/user',
  CART = '/cart',
  LOGIN = '/login',
  REGISTER = '/register',
}

export interface MenuItem {
  id: number;
  name: string;
  path: pathRoutes;
  Icon: OverridableComponent<SvgIconTypeMap> | null;
}

export interface Menu {
  id: number;
  title: string;
  items: MenuItem[];
}
