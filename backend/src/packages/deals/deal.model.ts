import {
  AbstractModel,
  DatabaseTableName,
} from '~/libs/packages/database/database.js';

class DealModel extends AbstractModel {
  public 'name': string;
  public 'price': string;
  public 'yeild': string;
  public 'sold': string;
  public 'ticket': string;
  public 'daysLeft': string;
  public 'img': string;

  public static override get tableName(): string {
    return DatabaseTableName.DEALS;
  }
}

export { DealModel };
