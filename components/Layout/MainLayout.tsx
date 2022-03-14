import { Footer } from './Footer';
import { Header, SubHeader } from './Header';
import { HeadTag } from './HeadTag';
import { PageTitle } from './PageTitle';
import s from 'styles/components/Layout/MainLayout.module.scss';

export interface MainLayoutProps {
  title: string;
  keywords: string[];
  description: string;
  showHeader?: boolean;
  showFooter?: boolean;
  showSubHeader?: boolean;
  pageTitle?: string | false;
}

export const MainLayout: React.FC<MainLayoutProps> = (props) => {
  const {
    children,
    keywords,
    description,
    title,
    showFooter = true,
    showHeader = true,
    showSubHeader = true,
    pageTitle = false,
  } = props;

  return (
    <>
      <HeadTag keywords={keywords} description={description} title={title} />
      {showHeader && <Header />}
      {showSubHeader && <SubHeader />}
      {pageTitle && <PageTitle title={pageTitle} />}

      <main className={s.main}>{children}</main>

      {showFooter && <Footer />}
    </>
  );
};
