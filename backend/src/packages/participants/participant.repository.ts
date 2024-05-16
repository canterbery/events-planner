import { type IRepository } from '~/libs/interfaces/interfaces.js';
import { type ParticipantModel } from './participant.model.js';
import { ParticipantEntity } from './participant.entity.js';

class ParticipantRepository implements IRepository {
  private participantModel: typeof ParticipantModel;

  public constructor(participantModel: typeof ParticipantModel) {
    this.participantModel = participantModel;
  }

  public find(): ReturnType<IRepository['find']> {
    return Promise.resolve(null);
  }

  public async findAll(): Promise<ParticipantEntity[]> {
    const participants = await this.participantModel.query().execute();

    return participants.map((it) => ParticipantEntity.initialize(it));
  }

  public async create(entity: ParticipantEntity): Promise<ParticipantEntity> {
    const item = await this.participantModel
      .query()
      .insert(entity.toNewObject())
      .returning('*')
      .execute();

    return ParticipantEntity.initialize(item);
  }

  public async getByEventId(
    eventId: number,
  ): Promise<ParticipantEntity[] | null> {
    const participants = await this.participantModel.query().where({ eventId });

    if (participants.length === 0) {
      return null;
    }
    return participants.map((participant) => {
      return ParticipantEntity.initialize({
        id: participant.id,
        fullName: participant.fullName,
        email: participant.email,
        birthDate: participant.birthDate,
        source: participant.source,
        eventId: participant.eventId,
      });
    });
  }

  public update(): ReturnType<IRepository['update']> {
    return Promise.resolve(null);
  }

  public delete(): ReturnType<IRepository['delete']> {
    return Promise.resolve(true);
  }
}

export { ParticipantRepository };
