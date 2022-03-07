import { Container, MainLayout, Width } from 'components';
import type { NextPage } from 'next';
import s from 'styles/pages/Articles.module.scss';

const Articles: NextPage = () => {
  return (
    <MainLayout
      pageTitle="Статьи"
      title="Статьи | JETCOLOR"
      description="Статьи"
      keywords={['Статьи']}
    >
      <div className={s.mainBlock}>
        <Width>
          <Container>Container</Container>
          <Container>Container</Container>
          <Container>Container</Container>
          <Container>Container</Container>
        </Width>
      </div>
    </MainLayout>
  );
};

export default Articles;
