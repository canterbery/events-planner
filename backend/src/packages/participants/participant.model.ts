import {
  AbstractModel,
  DatabaseTableName,
} from '~/libs/packages/database/database.js';

class ParticipantModel extends AbstractModel {
  public 'fullName': string;
  public 'email': string;
  public 'birthDate': string;
  public 'source': string;
  public 'eventId': number;

  public static override get tableName(): string {
    return DatabaseTableName.PARTICIPANTS;
  }
}

export { ParticipantModel };
