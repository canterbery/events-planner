import { useLocation, useParams } from '~/libs/hooks/hooks.js';
import { Events } from '../events/events.js';
import { EventParticipants } from './event-participants.js';

type locationState = {
  id: string;
  title: string;
};

const EventParticipantsLayout: React.FC = () => {
  const { id } = useParams();

  const location = useLocation();
  const state = location.state as locationState;

  if (!id) {
    return <Events />;
  }

  return <EventParticipants eventId={Number(id)} title={state.title ?? ''} />;
};

export { EventParticipantsLayout };
