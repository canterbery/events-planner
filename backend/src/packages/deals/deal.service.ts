import { type IService } from '~/libs/interfaces/interfaces.js';

import { type DealEntityInstance } from './libs/types/types.js';
import { type DealRepository } from './deal.repository.js';

class DealService implements IService {
  private dealRepository: DealRepository;

  public constructor(dealRepository: DealRepository) {
    this.dealRepository = dealRepository;
  }

  public find(): ReturnType<IService['find']> {
    return Promise.resolve(null);
  }

  public async findAll(): Promise<{ items: DealEntityInstance[] }> {
    const items = await this.dealRepository.findAll();

    return {
      items: items.map((it) => it.toObject()),
    };
  }

  public create(): ReturnType<IService['create']> {
    return Promise.resolve(null);
  }

  public update(): ReturnType<IService['update']> {
    return Promise.resolve(null);
  }

  public delete(): ReturnType<IService['delete']> {
    return Promise.resolve(true);
  }
}

export { DealService };
