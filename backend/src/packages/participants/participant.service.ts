import { type IService } from '~/libs/interfaces/interfaces.js';

import { type ParticipantEntityInstance } from './libs/types/types.js';
import { type ParticipantRepository } from './participant.repository.js';

class ParticipantService implements IService {
  private participantRepository: ParticipantRepository;

  public constructor(participantRepository: ParticipantRepository) {
    this.participantRepository = participantRepository;
  }

  public find(): ReturnType<IService['find']> {
    return Promise.resolve(null);
  }

  public async findAll(): Promise<{ items: ParticipantEntityInstance[] }> {
    const items = await this.participantRepository.findAll();

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

export { ParticipantService };
