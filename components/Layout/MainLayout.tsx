import { useEffect } from 'react';
import { Portal } from '@mui/material';
import { CSSTransition } from 'react-transition-group';
import { useRouter } from 'next/router';
import { useActions, useTypedSelector } from 'hooks';
import { Footer } from './Footer';
import { Header, SubHeader } from './Header';
import { HeadTag } from './HeadTag';
import { PageTitle } from './PageTitle';
import { MainMenuMobile, MiniCart, Modal } from '../Modals';
import { AuthForm } from 'components/Auth/AuthForm';
import { pathRoutes } from 'types';
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
  const { showMiniCart, showLoginModal, showSearchModal, showMainMenuMobile } = useTypedSelector(
    (state) => state.modals
  );
  const { toggleLoginModalDesctop, toggleSearchModalDesctop } = useActions();
  const router = useRouter();

  useEffect(() => {
    if (router.query.login === 'true') toggleLoginModalDesctop();

    if (router.query.search === 'true') toggleSearchModalDesctop();
  }, [router.query]);

  const onCloseLoginModal = () => {
    router.push({
      query: {},
    });
    if (showLoginModal) toggleLoginModalDesctop();
  };

  const onCloseSearchModal = () => {
    router.push({
      query: {},
    });
    if (showSearchModal) toggleSearchModalDesctop();
  };

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
      <MiniCart show={showMiniCart} />

      <Portal>
        <CSSTransition
          mountOnEnter
          unmountOnExit
          in={showLoginModal}
          timeout={200}
          classNames="showModal"
        >
          <Modal
            bottomLink={{ title: 'На страницу входа', path: pathRoutes.LOGIN }}
            scrollDisable
            onClose={() => onCloseLoginModal()}
          >
            <AuthForm showTitle isLogin />
          </Modal>
        </CSSTransition>
      </Portal>

      <Portal>
        <CSSTransition
          mountOnEnter
          unmountOnExit
          in={showSearchModal}
          timeout={200}
          classNames="showModal"
        >
          <Modal
            bottomLink={{ title: 'На страницу поиска', path: pathRoutes.SEARCH }}
            scrollDisable
            onClose={() => onCloseSearchModal()}
          >
            <h1>Поиск эмалей</h1>
          </Modal>
        </CSSTransition>
      </Portal>

      <MainMenuMobile show={showMainMenuMobile} />
    </>
  );
};
