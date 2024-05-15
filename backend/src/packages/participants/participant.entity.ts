import { type IEntity } from '~/libs/interfaces/interfaces.js';
import { type ParticipantEntityInstance } from './libs/types/types.js';

class ParticipantEntity implements IEntity {
  private 'id': number | null;
  private 'fullName': string;
  private 'email': string;
  private 'birthDate': string;
  private 'source': string;
  private 'eventId': number;

  private constructor({
    id,
    fullName,
    email,
    birthDate,
    source,
    eventId,
  }: {
    id: number | null;
    fullName: string;
    email: string;
    birthDate: string;
    source: string;
    eventId: number;
  }) {
    this.id = id;
    this.fullName = fullName;
    this.email = email;
    this.birthDate = birthDate;
    this.source = source;
    this.eventId = eventId;
  }

  public static initialize({
    id,
    fullName,
    email,
    birthDate,
    source,
    eventId,
  }: {
    id: number | null;
    fullName: string;
    email: string;
    birthDate: string;
    source: string;
    eventId: number;
  }): ParticipantEntity {
    return new ParticipantEntity({
      id,
      fullName,
      email,
      birthDate,
      source,
      eventId,
    });
  }

  public static initializeNew({
    fullName,
    email,
    birthDate,
    source,
    eventId,
  }: Omit<ParticipantEntityInstance, 'id'>): ParticipantEntity {
    return new ParticipantEntity({
      id: null,
      fullName,
      email,
      birthDate,
      source,
      eventId,
    });
  }

  public toObject(): ParticipantEntityInstance {
    return {
      id: this.id as number,
      fullName: this.fullName,
      email: this.email,
      birthDate: this.birthDate,
      source: this.source,
      eventId: this.eventId,
    };
  }

  public toNewObject(): Omit<ParticipantEntityInstance, 'id'> {
    return {
      fullName: this.fullName,
      email: this.email,
      birthDate: this.birthDate,
      source: this.source,
      eventId: this.eventId,
    };
  }
}

export { ParticipantEntity };
