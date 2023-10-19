import { useEffect } from 'react';
import styles from './styles.module.scss';
import { useAppDispatch, useAppSelector } from '~/libs/hooks/hooks.js';
import { actions as dealsActions } from '~/slices/deals/deals.js';
import { DealCard } from './components/deal-card/deal-card.js';
import { Loader } from '~/libs/components/components.js';
import { DataStatus } from '~/libs/enums/data-status.enum.js';

const Deals: React.FC = () => {
  const dispatch = useAppDispatch();

  const { deals, dataStatus } = useAppSelector(({ deals }) => ({
    deals: deals.deals,
    dataStatus: deals.dataStatus,
  }));

  useEffect(() => {
    void dispatch(dealsActions.loadAll());
  }, [dispatch]);
  return (
    <Loader
      isLoading={dataStatus === DataStatus.PENDING}
      hasOverlay
      type="circular"
    >
      <div className={styles.wrapper}>
        <p className={styles.title}>Open Deals</p>
        <div className={styles.dealsWrapper}>
          {deals.map((deal) => (
            <DealCard deal={deal} key={deal.id} />
          ))}
        </div>
      </div>
    </Loader>
  );
};

export { Deals };
