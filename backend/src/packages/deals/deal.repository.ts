import { type IRepository } from '~/libs/interfaces/interfaces.js';
import { type DealModel } from './deal.model.js';
import { DealEntity } from './deal.entity.js';

class DealRepository implements IRepository {
  private dealModel: typeof DealModel;

  public constructor(userModel: typeof DealModel) {
    this.dealModel = userModel;
  }

  public find(): ReturnType<IRepository['find']> {
    return Promise.resolve(null);
  }

  public async findAll(): Promise<DealEntity[]> {
    const deals = await this.dealModel.query().execute();

    return deals.map((it) => DealEntity.initialize(it));
  }

  public async create(entity: DealEntity): Promise<DealEntity> {
    const item = await this.dealModel
      .query()
      .insert(entity.toNewObject())
      .returning('*')
      .execute();

    return DealEntity.initialize(item);
  }

  public update(): ReturnType<IRepository['update']> {
    return Promise.resolve(null);
  }

  public delete(): ReturnType<IRepository['delete']> {
    return Promise.resolve(true);
  }
}

export { DealRepository };
