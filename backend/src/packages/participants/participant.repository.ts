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

  public update(): ReturnType<IRepository['update']> {
    return Promise.resolve(null);
  }

  public delete(): ReturnType<IRepository['delete']> {
    return Promise.resolve(true);
  }
}

export { ParticipantRepository };
