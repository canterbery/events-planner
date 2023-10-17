import { Button } from '../components.js';
import styles from './styles.module.scss';

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <Button label="Log In" classname={styles.logInBtn} />
      <Button label="Sign Up" classname={styles.signUpBtn} />
    </div>
  );
};

export { Header };
