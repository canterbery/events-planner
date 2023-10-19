import { Button, Input, Link } from '~/libs/components/components.js';
import styles from './styles.module.scss';
import { useAppForm, useCallback } from '~/libs/hooks/hooks.js';
import { DEFAULT_LOGIN_PAYLOAD } from './libs/constants/constants.js';
import {
  type UserSignInRequestDto,
  userSignInValidationSchema,
} from '~/packages/users/users.js';
import { AppRoute } from '~/libs/enums/enums.js';

type Properties = {
  onSubmit: (payload: UserSignInRequestDto) => void;
};

const SignInForm: React.FC<Properties> = ({ onSubmit }) => {
  const { control, errors, handleSubmit } = useAppForm({
    defaultValues: DEFAULT_LOGIN_PAYLOAD,
    validationSchema: userSignInValidationSchema,
  });

  const handleFormSubmit = useCallback(
    (event_: React.BaseSyntheticEvent): void => {
      void handleSubmit(onSubmit)(event_);
    },
    [handleSubmit, onSubmit],
  );

  return (
    <div className={styles.formWrapper}>
      <h2 className={styles.authFormTitle}>Sign In</h2>
      <form
        className={styles.form}
        name="SignInForm"
        onSubmit={handleFormSubmit}
      >
        <fieldset className={styles.fieldset}>
          <Input
            name="email"
            type="email"
            placeholder="Enter your email"
            label="Email"
            control={control}
            errors={errors}
          />
          <Input
            name="password"
            label="Password"
            errors={errors}
            control={control}
            placeholder="Enter password"
          />
        </fieldset>
        <p className={styles.forgotPasswordText}>
          <Link className={styles.forgotPasswordLink} to={AppRoute.ROOT}>
            Forgot password?
          </Link>
        </p>
        <Button
          type="submit"
          label="Sign In"
          hasFullWidth
          classname={styles.signInBtn}
        />
        <p className={styles.signUpText}>
          <span>Dont have account? </span>
          <Link to={AppRoute.SIGN_UP} className={styles.signUpLink}>
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
};

export { SignInForm };
