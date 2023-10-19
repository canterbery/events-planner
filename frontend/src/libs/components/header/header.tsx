import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '../components.js';
import styles from './styles.module.scss';
import { useCallback } from 'react';
import { AppRoute } from '~/libs/enums/app-route.enum.js';
import { type UserAuthResponseDto } from '~/packages/users/users.js';
import { useAppDispatch } from '~/libs/hooks/hooks.js';
import { actions as authActions } from '~/slices/auth/auth.js';

type Properties = {
  user: UserAuthResponseDto | null;
};

const Header: React.FC<Properties> = ({ user }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const handleLogInClick = useCallback(() => {
    navigate(AppRoute.SIGN_IN);
  }, [navigate]);
  const handleSignUpClick = useCallback(() => {
    navigate(AppRoute.SIGN_UP);
  }, [navigate]);
  const handleSignOutClick = useCallback(() => {
    void dispatch(authActions.logout());
  }, [dispatch]);
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
      {user && (
        <Button
          label="Sign Out"
          classname={styles.signUpBtn}
          onClick={handleSignOutClick}
        />
      )}
    </div>
  );
};

export { Header };
