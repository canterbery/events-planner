import styles from './styles.module.scss';

import { type ParticipantRegistrationResponseDto } from '~/packages/participants/participants.js';

type Properties = {
  participant: ParticipantRegistrationResponseDto;
};
const ParticipantCard: React.FC<Properties> = ({ participant }) => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>{participant.fullName}</p>
      <br></br>
      <p>{participant.email}</p>
    </div>
  );
};

export { ParticipantCard };
