import { Button, Input } from '~/libs/components/components.js';
import styles from './styles.module.scss';
import { useAppForm, useCallback } from '~/libs/hooks/hooks.js';
import { DEFAULT_LOGIN_PAYLOAD } from './libs/constants/constants.js';

import {
  type ParticipantRegistrationRequestDto,
  ParticipantsSource,
  registrationValidationSchema,
} from '~/packages/participants/participants.js';

type Properties = {
  onSubmit: (payload: ParticipantRegistrationRequestDto) => Promise<void>;
  eventId: number;
};

const RegistrationForm: React.FC<Properties> = ({ onSubmit, eventId }) => {
  const { control, errors, handleSubmit, register } = useAppForm({
    defaultValues: { ...DEFAULT_LOGIN_PAYLOAD, eventId },
    validationSchema: registrationValidationSchema,
  });

  const handleFormSubmit = useCallback(
    (event_: React.BaseSyntheticEvent): void => {
      void handleSubmit(onSubmit)(event_);
    },
    [handleSubmit, onSubmit],
  );

  return (
    <div className={styles.formWrapper}>
      <h2 className={styles.authFormTitle}>Event registration</h2>
      <form
        className={styles.form}
        name="SignInForm"
        onSubmit={handleFormSubmit}
      >
        <fieldset className={styles.fieldset}>
          <Input
            name="fullName"
            label="Full name"
            errors={errors}
            control={control}
            placeholder="Enter your name"
          />
          <Input
            name="email"
            type="email"
            placeholder="Enter your email"
            label="Email"
            control={control}
            errors={errors}
          />
          <Input
            name="birthDate"
            type="date"
            placeholder="Enter your date of birth"
            label="Date of birth"
            control={control}
            errors={errors}
          />
          <p className={styles.source}>Where did you hear about this event ?</p>
          <div className={styles.radioGroupWrapper}>
            <label className={styles.radioWrapper}>
              <input
                type="radio"
                value={ParticipantsSource.SOCIAL_MEDIA}
                {...register('source')}
                className={styles.sourceRadio}
              />
              <span>
                {ParticipantsSource.SOCIAL_MEDIA.charAt(0).toUpperCase() +
                  ParticipantsSource.SOCIAL_MEDIA.slice(1)}
              </span>
            </label>
            <label className={styles.radioWrapper}>
              <input
                type="radio"
                value={ParticipantsSource.FRIENDS}
                {...register('source')}
                className={styles.sourceRadio}
              />
              <span>
                {ParticipantsSource.FRIENDS.charAt(0).toUpperCase() +
                  ParticipantsSource.FRIENDS.slice(1)}
              </span>
            </label>
            <label className={styles.radioWrapper}>
              <input
                type="radio"
                value={ParticipantsSource.MYSELF}
                {...register('source')}
                className={styles.sourceRadio}
              />
              <span>
                {ParticipantsSource.MYSELF.charAt(0).toUpperCase() +
                  ParticipantsSource.MYSELF.slice(1)}
              </span>
            </label>
          </div>
        </fieldset>
        <p className={styles.forgotPasswordText}></p>
        <Button
          type="submit"
          label="Register"
          hasFullWidth
          classname={styles.signInBtn}
        />
      </form>
    </div>
  );
};

export { RegistrationForm };
