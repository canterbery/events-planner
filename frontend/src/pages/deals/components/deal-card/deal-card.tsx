import styles from './styles.module.scss';
import { type DealEntityInstance } from '~/packages/deals/deals.js';

type Properties = {
  deal: DealEntityInstance;
};
const DealCard: React.FC<Properties> = ({ deal }) => {
  return (
    <div className={styles.wrapper}>
      <img src={deal.img} alt="deal" />
      <div className={styles.overlay}>
        <p className={styles.title}>{deal.name}</p>
        <div className={styles.details}>
          <span>{deal.price}</span>
          <span>{'Yield ' + deal.price}</span>
          <span>{'Sold ' + deal.sold}</span>
          <span>{'Ticket - ' + deal.ticket}</span>
          <span>{'Days left ' + deal.daysLeft}</span>
        </div>
      </div>
    </div>
  );
};

export { DealCard };
