import { useEffect } from 'react';
import styles from './styles.module.scss';
import { useAppDispatch, useAppSelector } from '~/libs/hooks/hooks.js';
import { actions as eventsActions } from '~/slices/events/events.js';
import { Loader } from '~/libs/components/components.js';
import { DataStatus } from '~/libs/enums/data-status.enum.js';
import { ParticipantCard } from './components/participant-card/participant-card.js';

type Parameters = {
  eventId: number;
};

const EventParticipants: React.FC<Parameters> = ({ eventId }) => {
  const dispatch = useAppDispatch();

  const { participants, dataStatus } = useAppSelector(({ events }) => ({
    participants: events.eventParticipants,
    dataStatus: events.dataStatus,
  }));

  useEffect(() => {
    void dispatch(eventsActions.getParticipantsByEventId(eventId));
  }, [dispatch, eventId]);
  return (
    <Loader
      isLoading={dataStatus === DataStatus.PENDING}
      hasOverlay
      type="circular"
    >
      <div className={styles.wrapper}>
        <p className={styles.title}>Event participants : </p>
        <div className={styles.dealsWrapper}>
          {participants &&
            participants.map((participant) => (
              <ParticipantCard participant={participant} key={participant.id} />
            ))}
        </div>
      </div>
    </Loader>
  );
};

export { EventParticipants };
