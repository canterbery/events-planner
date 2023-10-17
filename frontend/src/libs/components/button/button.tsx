import { getValidClassNames } from '~/libs/helpers/helpers.js';
import styles from './styles.module.scss';

type Properties = {
  label: string;
  type?: 'button' | 'submit';
  classname?: string;
  onClick?: () => void;
  hasFullWidth?: boolean;
};

const Button: React.FC<Properties> = ({
  type = 'button',
  label,
  classname = '',
  onClick,
  hasFullWidth,
}) => (
  <button
    className={getValidClassNames(
      styles.button,
      classname,
      hasFullWidth && styles.hasFullWidth,
    )}
    type={type}
    onClick={onClick}
  >
    {label}
  </button>
);

export { Button };
