import {
  AbstractModel,
  DatabaseTableName,
} from '~/libs/packages/database/database.js';

class EventModel extends AbstractModel {
  public 'title': string;
  public 'description': string;
  public 'eventDate': string;
  public 'organiser': string;

  public static override get tableName(): string {
    return DatabaseTableName.EVENTS;
  }
}

export { EventModel };
