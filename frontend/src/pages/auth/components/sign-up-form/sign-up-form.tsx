import { Button, Input, Link } from '~/libs/components/components.js';
import { useAppForm, useCallback } from '~/libs/hooks/hooks.js';
import {
  type UserSignUpRequestDto,
  userSignUpValidationSchema,
} from '~/packages/users/users.js';
import styles from './styles.module.scss';

import { DEFAULT_SIGN_UP_PAYLOAD } from './libs/constants.js';
import { AppRoute } from '~/libs/enums/enums.js';

type Properties = {
  onSubmit: (payload: UserSignUpRequestDto) => void;
};

const SignUpForm: React.FC<Properties> = ({ onSubmit }) => {
  const { control, errors, handleSubmit } = useAppForm<UserSignUpRequestDto>({
    defaultValues: DEFAULT_SIGN_UP_PAYLOAD,
    validationSchema: userSignUpValidationSchema,
  });

  const handleFormSubmit = useCallback(
    (event_: React.BaseSyntheticEvent): void => {
      void handleSubmit(onSubmit)(event_);
    },
    [handleSubmit, onSubmit],
  );

  return (
    <div className={styles.formWrapper}>
      <h2 className={styles.authFormTitle}>Sign Up</h2>
      <form onSubmit={handleFormSubmit} className={styles.form}>
        <fieldset className={styles.fieldset}>
          <Input
            type="text"
            label="Email"
            placeholder="Enter your email"
            name="email"
            control={control}
            errors={errors}
          />

          <Input
            type="text"
            label="Password"
            placeholder="Enter password"
            name="password"
            control={control}
            errors={errors}
          />
        </fieldset>
        <Button
          type="submit"
          label="Sign up"
          hasFullWidth
          classname={styles.signUpBtn}
        />
        <p className={styles.signInText}>
          <span>Already have an account? </span>
          <Link to={AppRoute.SIGN_IN} className={styles.signInLink}>
            Sign In
          </Link>
        </p>
      </form>
    </div>
  );
};

export { SignUpForm };
