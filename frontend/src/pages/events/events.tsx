import { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { useAppDispatch, useAppSelector } from '~/libs/hooks/hooks.js';
import { actions as eventsActions } from '~/slices/events/events.js';
import { EventCard } from './components/event-card/event-card.js';
import { Loader } from '~/libs/components/components.js';
import { DataStatus } from '~/libs/enums/data-status.enum.js';
import Select from 'react-select';

const options = [
  { value: 'title', label: 'Title' },
  { value: 'eventDate', label: 'Event date' },
  { value: 'organiser', label: 'Organiser' },
];

const Events: React.FC = () => {
  const dispatch = useAppDispatch();
  const [sortBy, setSortBy] = useState<{ value: string; label: string } | null>(
    null,
  );

  const events = useAppSelector(({ events }) => events.events);
  const dataStatus = useAppSelector(({ events }) => events.dataStatus);

  useEffect(() => {
    void dispatch(eventsActions.loadAll(sortBy?.value ?? null));
  }, [dispatch, sortBy]);
  return (
    <Loader
      isLoading={dataStatus === DataStatus.PENDING}
      hasOverlay
      type="circular"
    >
      <div className={styles.wrapper}>
        <p className={styles.title}>Scheduled events : </p>
        <Select
          options={options}
          isClearable
          placeholder="Sort by..."
          onChange={(newValue): void => setSortBy(newValue ?? null)}
          value={sortBy}
        />
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
