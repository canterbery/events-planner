import styles from './styles.module.scss';
import { type EventEntityInstance } from '~/packages/events/events.js';

type Properties = {
  event: EventEntityInstance;
};
const EventCard: React.FC<Properties> = ({ event }) => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>{event.title}</p>
      <p>{event.description}</p>
    </div>
  );
};

export { EventCard };
