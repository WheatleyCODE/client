import { useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import { useRouter } from 'next/router';
import { useActions, useTypedSelector } from 'hooks';
import { Footer } from './Footer';
import { Header, SubHeader } from './Header';
import { HeadTag } from './HeadTag';
import { PageTitle } from './PageTitle';
import { LoginModal, MainMenuMobile, MiniCart, Modal, SearchModal } from '../Modals';
import { Portal } from '@mui/material';
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
    if (router.query.login === 'true') {
      toggleLoginModalDesctop();
    }

    if (router.query.search === 'true') {
      toggleSearchModalDesctop();
    }
  }, [router.query]);

  const onCloseLoginModal = () => {
    router.push({
      query: {},
    });
    toggleLoginModalDesctop();
  };

  const onCloseSearchModal = () => {
    router.push({
      query: {},
    });
    toggleSearchModalDesctop();
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
          <Modal onClose={() => onCloseLoginModal()}>
            <LoginModal />
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
          <Modal onClose={() => onCloseSearchModal()}>
            <SearchModal />
          </Modal>
        </CSSTransition>
      </Portal>

      <MainMenuMobile show={showMainMenuMobile} />
    </>
  );
};
