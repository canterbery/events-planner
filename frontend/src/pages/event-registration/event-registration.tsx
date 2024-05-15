import { type ParticipantRegistrationRequestDto } from '~/packages/participants/participants.js';
import {
  EventRegistrationLayout,
  RegistrationForm,
} from './components/components.js';

import { useAppDispatch, useCallback, useParams } from '~/libs/hooks/hooks.js';
import { actions as participantsActions } from '~/slices/participants/participants.js';

const EventRegistration: React.FC = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  const handleRegistration = useCallback(
    (payload: ParticipantRegistrationRequestDto): void => {
      void dispatch(participantsActions.register(payload));
    },
    [dispatch],
  );

  return (
    <EventRegistrationLayout>
      {id && (
        <RegistrationForm eventId={Number(id)} onSubmit={handleRegistration} />
      )}
    </EventRegistrationLayout>
  );
};

export { EventRegistration };
