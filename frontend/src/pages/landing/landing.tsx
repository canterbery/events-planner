import { Button } from '~/libs/components/components.js';
import styles from './styles.module.scss';

const Landing: React.FC = () => {
  return (
    <div className={styles.landingWrapper}>
      <p className={styles.title}>The chemical negatively charged</p>
      <div className={styles.description}>
        <p>
          Numerous calculations predict, and experiments confirm, that the force
          field reflects the beam, while the mass defect is not formed. The
          chemical compound is negatively charged. Twhile the mass defect is
        </p>
      </div>
      <Button
        type="button"
        label="Get Started"
        classname={styles.getStartedBtn}
      />
    </div>
  );
};

export { Landing };
