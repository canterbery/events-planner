import { type IService } from '~/libs/interfaces/interfaces.js';

import { type EventEntityInstance } from './libs/types/types.js';
import { type EventRepository } from './event.repository.js';

class EventService implements IService {
  private eventRepository: EventRepository;

  public constructor(eventRepository: EventRepository) {
    this.eventRepository = eventRepository;
  }

  public find(): ReturnType<IService['find']> {
    return Promise.resolve(null);
  }

  public async findAll(query: {
    take: number;
    skip: number;
    sortOption: string | null;
  }): Promise<{ items: EventEntityInstance[]; skip: number }> {
    const events = await this.eventRepository.findAll(query);

    return {
      items: events.map((it) => it.toObject()),
      skip: query.skip,
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

export { EventService };
