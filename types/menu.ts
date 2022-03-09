export enum pathRoutes {
  HOME = '/',
  SEARCH = '/search',
  CONTACTS = '/contacts',
  REVIEWS = '/reviews',
  COLORIST = '/colorist',
  NEWS = '/news',
  INFO = '/info',
  FAQ = '/faq',
  CAR_COLOR = '/car_color',
  ARTICLES = '/articles',
}

export interface MenuItem {
  id: number;
  name: string;
  path: pathRoutes;
  icon: string | null;
}

export interface Menu {
  id: number;
  title: string;
  items: MenuItem[];
}
