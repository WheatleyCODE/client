import { Footer } from './Footer';
import { Header } from './Header';
import { HeadTag } from './HeadTag';

export interface MainLayoutProps {
  title: string;
  keywords: string[];
  description: string;
  showHeader?: boolean;
  showFooter?: boolean;
}

export const MainLayout: React.FC<MainLayoutProps> = (props) => {
  const { children, keywords, description, title, showFooter = true, showHeader = true } = props;

  return (
    <>
      <HeadTag keywords={keywords} description={description} title={title} />
      {showHeader && <Header />}
      <main>{children}</main>
      {showFooter && <Footer />}
    </>
  );
};
