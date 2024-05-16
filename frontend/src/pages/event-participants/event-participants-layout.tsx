import { useParams } from '~/libs/hooks/hooks.js';
import { Events } from '../events/events.js';
import { EventParticipants } from './event-participants.js';

const EventParticipantsLayout: React.FC = () => {
  const { id } = useParams();

  if (!id) {
    return <Events />;
  }

  return <EventParticipants eventId={Number(id)} />;
};

export { EventParticipantsLayout };
