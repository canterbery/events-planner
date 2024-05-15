import { type ReactNode } from 'react';
import styles from './styles.module.scss';

type Properties = {
  children: ReactNode;
};

const EventRegistrationLayout: React.FC<Properties> = ({ children }) => {
  return (
    <div className={styles.authLayout}>
      <div className={styles.scrollableFormWrapper}>
        <div className={styles.formWrapper}>
          <div className={styles.formWrapperInner}>{children}</div>
        </div>
      </div>
    </div>
  );
};

export { EventRegistrationLayout };
