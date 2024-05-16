import { useCallback, useEffect, useState } from 'react';
import styles from './styles.module.scss';
import {
  useAppDispatch,
  useAppSelector,
  usePagination,
} from '~/libs/hooks/hooks.js';
import { actions as eventsActions } from '~/slices/events/events.js';
import { EventCard } from './components/event-card/event-card.js';
import { InfiniteScroll, Loader } from '~/libs/components/components.js';
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

  const isLoading = dataStatus === DataStatus.PENDING;

  const { hasMore, loadMore, resetSkip } = usePagination();

  const handleLoadEvents = useCallback(() => {
    void loadMore(async (skip: number, take: number) => {
      const data = await dispatch(
        eventsActions.loadAll({
          take,
          skip,
          sortOption: sortBy?.value ?? null,
        }),
      ).unwrap();

      return Boolean(data.items.length >= take);
    });
  }, [dispatch, loadMore, sortBy]);

  useEffect(() => {
    handleLoadEvents();
  }, [handleLoadEvents]);
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
          onChange={(newValue): void => {
            resetSkip();
            setSortBy(newValue ?? null);
          }}
          value={sortBy}
        />
        <InfiniteScroll
          hasMore={hasMore}
          className={styles.dealsWrapper}
          dataLength={events.length}
          isLoading={isLoading}
          onFetchData={handleLoadEvents}
        >
          {events.map((event) => (
            <EventCard event={event} key={event.id} />
          ))}
        </InfiniteScroll>
      </div>
    </Loader>
  );
};

export { Events };
