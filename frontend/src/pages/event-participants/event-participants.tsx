import styles from './styles.module.scss';
import {
  useAppDispatch,
  useAppSelector,
  useCallback,
  useDebounce,
  useEffect,
  useState,
} from '~/libs/hooks/hooks.js';
import { actions as eventsActions } from '~/slices/events/events.js';
import { Loader } from '~/libs/components/components.js';
import { DataStatus } from '~/libs/enums/data-status.enum.js';
import { ParticipantCard } from './components/participant-card/participant-card.js';

type Parameters = {
  eventId: number;
  title: string;
};

const EventParticipants: React.FC<Parameters> = ({ eventId, title }) => {
  const dispatch = useAppDispatch();

  const [searchTermTitle, setSearchTermTitle] = useState('');
  const [searchTermEmail, setSearchTermEmail] = useState('');

  const debouncedTitle = useDebounce(searchTermTitle, 500);
  const debouncedEmail = useDebounce(searchTermEmail, 500);

  const { participants, dataStatus } = useAppSelector(({ events }) => ({
    participants: events.eventParticipants,
    dataStatus: events.dataStatus,
  }));

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTermEmail(event.target.value);
    },
    [],
  );

  const handleChangeTitle = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTermTitle(event.target.value);
    },
    [],
  );

  useEffect(() => {
    void dispatch(
      eventsActions.getParticipantsByEventId({
        eventId,
        fullName: debouncedTitle,
        email: debouncedEmail,
      }),
    );
  }, [dispatch, eventId, debouncedTitle, debouncedEmail]);
  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>{`${title} participants : `}</p>
      <div className={styles.searchPanel}>
        <div>
          <label htmlFor="search-input">Search by name: </label>
          <input
            type="search"
            id="search-by-name"
            value={searchTermTitle}
            onChange={handleChangeTitle}
          />
        </div>
        <div>
          <label htmlFor="search-input">Search by email: </label>
          <input
            type="search"
            id="search-by-email"
            value={searchTermEmail}
            onChange={handleChange}
          />
        </div>
      </div>
      <Loader
        isLoading={dataStatus === DataStatus.PENDING}
        hasOverlay
        type="circular"
      >
        <div className={styles.dealsWrapper}>
          {participants &&
            participants.map((participant) => (
              <ParticipantCard participant={participant} key={participant.id} />
            ))}
        </div>
      </Loader>
    </div>
  );
};

export { EventParticipants };
