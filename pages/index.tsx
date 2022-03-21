import type { NextPage } from 'next';
import { wrapper } from '@store';
import { useActions, useTypedSelector } from 'hooks';
import { useEffect } from 'react';
import { Element } from 'react-scroll';
import { NextThunckDispatch } from '@store/reducers';
import { fetchUsersAC } from '@store/actions-creators/user';
import { MainLayout } from 'components';
import { ImgSlider } from 'components/Sliders/ImgSlider';
import { subHeaderMenu } from 'consts';
import s from 'styles/pages/Home.module.scss';

// Redux tests
export const getStaticProps = wrapper.getStaticProps((store): any => async () => {
  const dispatch = store.dispatch as NextThunckDispatch;
  await dispatch(await fetchUsersAC());
});

const Home: NextPage = () => {
  const { users, loading } = useTypedSelector((state) => state.user);
  // const { fetchUsersAC } = useActions();

  // useEffect(() => {
  //   fetchUsersAC();
  // }, []);
  return (
    <MainLayout title="Главная" description="Главная" keywords={['Главная']}>
      <div className={s.mainBlock}>
        {loading && <h3 style={{ color: 'green' }}>Загрузка пользователей...</h3>}
        <ImgSlider />
        {subHeaderMenu.map((item) => (
          <Element name={item.name} key={item.name}>
            <h4>{item.name}</h4>
            <pre style={{ overflow: 'hidden' }}>{JSON.stringify(users, 0, 2)}</pre>
          </Element>
        ))}
      </div>
    </MainLayout>
  );
};

export default Home;
