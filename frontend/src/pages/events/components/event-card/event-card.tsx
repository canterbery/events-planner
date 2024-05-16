import { Button } from '~/libs/components/components.js';
import styles from './styles.module.scss';
import { type EventEntityInstance } from '~/packages/events/events.js';
import { useCallback, useNavigate } from '~/libs/hooks/hooks.js';
import { configureString } from '~/libs/helpers/helpers.js';
import { AppRoute } from '~/libs/enums/enums.js';

type Properties = {
  event: EventEntityInstance;
};
const EventCard: React.FC<Properties> = ({ event }) => {
  const navigate = useNavigate();
  const articleRouteById = configureString(AppRoute.EVENT_REGISTRATION, {
    id: String(event.id),
  }) as typeof AppRoute.EVENT_REGISTRATION;

  const participantsByEventId = configureString(AppRoute.EVENT_PARTICIPANTS, {
    id: String(event.id),
  }) as typeof AppRoute.EVENT_PARTICIPANTS;

  const handleRegisterClick = useCallback(() => {
    navigate(articleRouteById, { state: { id: event.id } });
  }, [navigate, articleRouteById, event.id]);

  const handleViewClick = useCallback(() => {
    navigate(participantsByEventId, { state: { id: event.id } });
  }, [navigate, participantsByEventId, event.id]);

  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>{event.title}</p>
      <p>{`Дата проведення : ${new Date(event.eventDate).toDateString()}`}</p>
      <br></br>
      <p>{event.description}</p>
      <br></br>
      <p className={styles.title}>{event.organiser}</p>
      <br></br>
      <div className={styles.buttonWrapper}>
        <Button
          label="Register"
          classname={styles.logInBtn}
          onClick={handleRegisterClick}
        />
        <Button
          label="View"
          classname={styles.signUpBtn}
          onClick={handleViewClick}
        />
      </div>
    </div>
  );
};

export { EventCard };
