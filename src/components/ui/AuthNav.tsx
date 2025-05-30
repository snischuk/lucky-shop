import { NavLink } from 'react-router-dom';

const AuthNav = () => {
  return (
    <div>
      <h1>Насолоджуйтесь найкращим шопінгом разом з Lucky</h1>
      <p>
        Увійдіть або зареєструйтесь, щоб насолодитися персоналізованим шопінгом
        і доступом до всіх наших послуг
      </p>
      <NavLink to="/login">Увійти</NavLink>
      <NavLink to="/register">Зареєструватися</NavLink>
    </div>
  );
};

export default AuthNav;
