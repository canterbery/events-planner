import { useEffect } from 'react';
import styles from './styles.module.scss';
import { useAppDispatch, useAppSelector } from '~/libs/hooks/hooks.js';
import { actions as dealsActions } from '~/slices/deals/deals.js';
import { DealCard } from './components/deal-card/deal-card.js';

const Deals: React.FC = () => {
  const dispatch = useAppDispatch();

  const deals = useAppSelector(({ deals }) => deals.deals);

  useEffect(() => {
    void dispatch(dealsActions.loadAll());
  }, [dispatch]);
  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>Open Deals</p>
      <div className={styles.dealsWrapper}>
        {deals.map((deal) => (
          <DealCard deal={deal} key={deal.id} />
        ))}
      </div>
    </div>
  );
};

export { Deals };
