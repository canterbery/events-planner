import { type IRepository } from '~/libs/interfaces/interfaces.js';
import { type EventModel } from './event.model.js';
import { EventEntity } from './event.entity.js';

class EventRepository implements IRepository {
  private eventModel: typeof EventModel;

  public constructor(eventModel: typeof EventModel) {
    this.eventModel = eventModel;
  }

  public find(): ReturnType<IRepository['find']> {
    return Promise.resolve(null);
  }

  public async findAll(query: {
    take: number;
    skip: number;
    sortOption: string | null;
  }): Promise<EventEntity[]> {
    const { skip, take, sortOption } = query;
    const events = await this.eventModel
      .query()
      .orderBy(sortOption ?? 'id')
      .page(skip / take, take)
      .execute();

    return events.results.map((it) => EventEntity.initialize(it));
  }

  public async create(entity: EventEntity): Promise<EventEntity> {
    const item = await this.eventModel
      .query()
      .insert(entity.toNewObject())
      .returning('*')
      .execute();

    return EventEntity.initialize(item);
  }

  public update(): ReturnType<IRepository['update']> {
    return Promise.resolve(null);
  }

  public delete(): ReturnType<IRepository['delete']> {
    return Promise.resolve(true);
  }
}

export { EventRepository };
