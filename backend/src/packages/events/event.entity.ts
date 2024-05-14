import { type IEntity } from '~/libs/interfaces/interfaces.js';
import { type EventEntityInstance } from './libs/types/types.js';

class EventEntity implements IEntity {
  private 'id': number | null;
  private 'title': string;
  private 'description': string;
  private 'eventDate': string;
  private 'organiser': string;

  private constructor({
    id,
    title,
    description,
    eventDate,
    organiser,
  }: {
    id: number | null;
    title: string;
    description: string;
    eventDate: string;
    organiser: string;
  }) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.eventDate = eventDate;
    this.organiser = organiser;
  }

  public static initialize({
    id,
    title,
    description,
    eventDate,
    organiser,
  }: {
    id: number | null;
    title: string;
    description: string;
    eventDate: string;
    organiser: string;
  }): EventEntity {
    return new EventEntity({
      id,
      title,
      description,
      eventDate,
      organiser,
    });
  }

  public static initializeNew({
    title,
    description,
    eventDate,
    organiser,
  }: Omit<EventEntityInstance, 'id'>): EventEntity {
    return new EventEntity({
      id: null,
      title,
      description,
      eventDate,
      organiser,
    });
  }

  public toObject(): EventEntityInstance {
    return {
      id: this.id as number,
      title: this.title,
      description: this.description,
      eventDate: this.eventDate,
      organiser: this.organiser,
    };
  }

  public toNewObject(): Omit<EventEntityInstance, 'id'> {
    return {
      title: this.title,
      description: this.description,
      eventDate: this.eventDate,
      organiser: this.organiser,
    };
  }
}

export { EventEntity };
