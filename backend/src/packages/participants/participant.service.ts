import { type IService } from '~/libs/interfaces/interfaces.js';

import {
  type ParticipantRegistrationRequestDto,
  type ParticipantEntityInstance,
  type ParticipantRegistrationResponseDto,
} from './libs/types/types.js';
import { type ParticipantRepository } from './participant.repository.js';
import { ParticipantEntity } from './participant.entity.js';

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

  public async create(
    payload: ParticipantRegistrationRequestDto,
  ): Promise<ParticipantRegistrationResponseDto> {
    const participant = await this.participantRepository.create(
      ParticipantEntity.initializeNew(payload),
    );

    return participant.toObject();
  }

  public async getByEventId(
    eventId: number,
    query: { fullName: string; email: string },
  ): Promise<ParticipantRegistrationResponseDto[] | null> {
    const participants = await this.participantRepository.getByEventId(
      eventId,
      query,
    );

    if (!participants) {
      return null;
    }

    return participants.map((participant) => {
      return participant.toObject();
    });
  }

  public update(): ReturnType<IService['update']> {
    return Promise.resolve(null);
  }

  public delete(): ReturnType<IService['delete']> {
    return Promise.resolve(true);
  }
}

export { ParticipantService };
