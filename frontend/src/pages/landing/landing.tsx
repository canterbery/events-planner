import { Button } from '~/libs/components/components.js';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';
import { useCallback } from '~/libs/hooks/hooks.js';
import { AppRoute } from '~/libs/enums/app-route.enum.js';

const Landing: React.FC = () => {
  const navigate = useNavigate();
  const hadleGetStartedClick = useCallback(() => {
    navigate(AppRoute.SIGN_IN);
  }, [navigate]);
  return (
    <div className={styles.landingWrapper}>
      <p className={styles.title}>Event Registration App</p>
      <div className={styles.description}></div>
      <Button
        type="button"
        label="Get Started"
        classname={styles.getStartedBtn}
        onClick={hadleGetStartedClick}
      />
    </div>
  );
};

export { Landing };
