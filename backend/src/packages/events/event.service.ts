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

  public async findAll(): Promise<{ items: EventEntityInstance[] }> {
    const items = await this.eventRepository.findAll();

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

export { EventService };
