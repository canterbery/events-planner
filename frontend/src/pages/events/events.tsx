import { useEffect } from 'react';
import styles from './styles.module.scss';
import { useAppDispatch, useAppSelector } from '~/libs/hooks/hooks.js';
import { actions as eventsActions } from '~/slices/events/events.js';
import { EventCard } from './components/event-card/event-card.js';
import { Loader } from '~/libs/components/components.js';
import { DataStatus } from '~/libs/enums/data-status.enum.js';

const Events: React.FC = () => {
  const dispatch = useAppDispatch();

  const { events, dataStatus } = useAppSelector(({ events }) => ({
    events: events.events,
    dataStatus: events.dataStatus,
  }));

  useEffect(() => {
    void dispatch(eventsActions.loadAll());
  }, [dispatch]);
  return (
    <Loader
      isLoading={dataStatus === DataStatus.PENDING}
      hasOverlay
      type="circular"
    >
      <div className={styles.wrapper}>
        <p className={styles.title}>Scheduled events : </p>
        <div className={styles.dealsWrapper}>
          {events.map((event) => (
            <EventCard event={event} key={event.id} />
          ))}
        </div>
      </div>
    </Loader>
  );
};

export { Events };
