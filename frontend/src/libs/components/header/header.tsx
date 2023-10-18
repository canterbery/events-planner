import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '../components.js';
import styles from './styles.module.scss';
import { useCallback } from 'react';
import { AppRoute } from '~/libs/enums/app-route.enum.js';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const handleLogInClick = useCallback(() => {
    navigate(AppRoute.SIGN_IN);
  }, [navigate]);
  const handleSignUpClick = useCallback(() => {
    navigate(AppRoute.SIGN_UP);
  }, [navigate]);
  return (
    <div className={styles.header}>
      {pathname === AppRoute.ROOT && (
        <>
          <Button
            label="Sign In"
            classname={styles.logInBtn}
            onClick={handleLogInClick}
          />
          <Button
            label="Sign Up"
            classname={styles.signUpBtn}
            onClick={handleSignUpClick}
          />
        </>
      )}
    </div>
  );
};

export { Header };
