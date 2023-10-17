import { getValidClassNames } from '~/libs/helpers/helpers.js';
import styles from './styles.module.scss';

type Properties = {
  label: string;
  type?: 'button' | 'submit';
  classname?: string;
};

const Button: React.FC<Properties> = ({
  type = 'button',
  label,
  classname = '',
}) => (
  <button className={getValidClassNames(styles.button, classname)} type={type}>
    {label}
  </button>
);

export { Button };
