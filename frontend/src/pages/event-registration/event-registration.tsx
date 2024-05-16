import { type ParticipantRegistrationRequestDto } from '~/packages/participants/participants.js';
import {
  EventRegistrationLayout,
  RegistrationForm,
} from './components/components.js';

import {
  useAppDispatch,
  useCallback,
  useNavigate,
  useParams,
} from '~/libs/hooks/hooks.js';
import { actions as participantsActions } from '~/slices/participants/participants.js';
import { configureString } from '~/libs/helpers/helpers.js';
import { AppRoute } from '~/libs/enums/app-route.enum.js';

const EventRegistration: React.FC = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const eventRegistrationRoute = configureString(AppRoute.EVENT_PARTICIPANTS, {
    id: String(id),
  }) as typeof AppRoute.EVENT_PARTICIPANTS;

  const handleRegistration = useCallback(
    async (payload: ParticipantRegistrationRequestDto): Promise<void> => {
      const data = await dispatch(
        participantsActions.register(payload),
      ).unwrap();
      if (data) {
        navigate(eventRegistrationRoute, { state: { id } });
      }
    },
    [dispatch, id, eventRegistrationRoute, navigate],
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
