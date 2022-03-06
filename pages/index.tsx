import s from 'styles/Home.module.scss';
import type { NextPage } from 'next';
import { wrapper } from '@store';
import { useActions, useTypedSelector } from 'hooks';
import { useEffect } from 'react';
import { NextThunckDispatch } from '@store/reducers';
import { fetchUsersAC } from '@store/actions-creators/user';
import { MainLayout } from 'components';

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
      <h1 className={s.color}>Hello, world!</h1>
      <h1 className={s.color}>Привет мир</h1>
      <span>
        Язык JavaScript Здесь вы можете изучить JavaScript, начиная с нуля и заканчивая продвинутыми
        концепциями вроде ООП. Мы сосредоточимся на самом языке, изредка добавляя заметки о средах
        его исполнения. Введение Введение в JavaScript Справочники и спецификации Редакторы кода
        Консоль разработчика Основы JavaScript Привет, мир! Структура кода Строгий режим —
        Переменные Типы данных Взаимодействие: alert, prompt, confirm Преобразование типов Базовые
        операторы, математика Операторы сравнения Условное ветвление: if, Логические операторы
        Оператор объединения с null Циклы while и for Конструкция Функции Function Expression
        Функции-стрелки, основы Особенности JavaScript
      </span>
      {loading && <h3 style={{ color: 'green' }}>Загрузка пользователей...</h3>}
      <pre>{JSON.stringify(users, 0, 2)}</pre>
    </MainLayout>
  );
};

export default Home;
