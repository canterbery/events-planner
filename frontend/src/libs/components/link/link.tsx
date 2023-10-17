import { NavLink } from 'react-router-dom';

import { type AppRoute } from '~/libs/enums/enums.js';
import { type ValueOf } from '~/libs/types/types.js';
import styles from './styles.module.scss';
import { getValidClassNames } from '~/libs/helpers/helpers.js';

type Properties = {
  to: ValueOf<typeof AppRoute>;
  children: React.ReactNode;
  className?: string;
};

const Link: React.FC<Properties> = ({ children, to, className = '' }) => (
  <NavLink className={getValidClassNames(styles.link, className)} to={to}>
    {children}
  </NavLink>
);

export { Link };
