import {
  type Control,
  type FieldErrors,
  type FieldPath,
  type FieldValues,
} from 'react-hook-form';

import { useFormController } from '~/libs/hooks/hooks.js';
import styles from './styles.module.scss';
import { getValidClassNames } from '~/libs/helpers/helpers.js';

type Properties<T extends FieldValues> = {
  control: Control<T, null>;
  errors: FieldErrors<T>;
  label: string;
  name: FieldPath<T>;
  placeholder?: string;
  type?: 'text' | 'email';
  className?: string;
};

const Input = <T extends FieldValues>({
  control,
  errors,
  label,
  name,
  placeholder = '',
  type = 'text',
  className = '',
}: Properties<T>): JSX.Element => {
  const { field } = useFormController({ name, control });

  const error = errors[name]?.message;
  const hasError = Boolean(error);

  const classNames = getValidClassNames(styles.input, className);

  return (
    <label className={styles.label}>
      <span className={styles.text}>{label}</span>
      <input
        {...field}
        type={type}
        placeholder={placeholder}
        className={classNames}
      />
      {hasError && <span>{error as string}</span>}
    </label>
  );
};

export { Input };
