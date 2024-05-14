import { Button } from '~/libs/components/components.js';
import styles from './styles.module.scss';
import { type EventEntityInstance } from '~/packages/events/events.js';
import { useCallback } from '~/libs/hooks/hooks.js';

type Properties = {
  event: EventEntityInstance;
};
const EventCard: React.FC<Properties> = ({ event }) => {
  const handleLogInClick = useCallback(() => {}, []);
  const handleSignUpClick = useCallback(() => {}, []);
  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>{event.title}</p>
      <br></br>
      <p>{event.description}</p>
      <br></br>
      <div className={styles.buttonWrapper}>
        <Button
          label="Register"
          classname={styles.logInBtn}
          onClick={handleLogInClick}
        />
        <Button
          label="View"
          classname={styles.signUpBtn}
          onClick={handleSignUpClick}
        />
      </div>
    </div>
  );
};

export { EventCard };
