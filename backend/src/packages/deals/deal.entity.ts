import { type IEntity } from '~/libs/interfaces/interfaces.js';
import { type DealEntityInstance } from './libs/types/types.js';

class DealEntity implements IEntity {
  private 'id': number | null;
  private 'name': string;
  private 'price': string;
  private 'yeild': string;
  private 'sold': string;
  private 'ticket': string;
  private 'daysLeft': string;
  private 'img': string;

  private constructor({
    id,
    name,
    price,
    yeild,
    sold,
    ticket,
    daysLeft,
    img,
  }: {
    id: number | null;
    name: string;
    price: string;
    yeild: string;
    sold: string;
    ticket: string;
    daysLeft: string;
    img: string;
  }) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.yeild = yeild;
    this.sold = sold;
    this.ticket = ticket;
    this.daysLeft = daysLeft;
    this.img = img;
  }

  public static initialize({
    id,
    name,
    price,
    yeild,
    sold,
    ticket,
    daysLeft,
    img,
  }: {
    id: number | null;
    name: string;
    price: string;
    yeild: string;
    sold: string;
    ticket: string;
    daysLeft: string;
    img: string;
  }): DealEntity {
    return new DealEntity({
      id,
      name,
      price,
      yeild,
      sold,
      ticket,
      daysLeft,
      img,
    });
  }

  public static initializeNew({
    name,
    price,
    yeild,
    sold,
    ticket,
    daysLeft,
    img,
  }: Omit<DealEntityInstance, 'id'>): DealEntity {
    return new DealEntity({
      id: null,
      name,
      price,
      yeild,
      sold,
      ticket,
      daysLeft,
      img,
    });
  }

  public toObject(): DealEntityInstance {
    return {
      id: this.id as number,
      name: this.name,
      price: this.price,
      yeild: this.yeild,
      sold: this.sold,
      ticket: this.ticket,
      daysLeft: this.daysLeft,
      img: this.img,
    };
  }

  public toNewObject(): Omit<DealEntityInstance, 'id'> {
    return {
      name: this.name,
      price: this.price,
      yeild: this.yeild,
      sold: this.sold,
      ticket: this.ticket,
      daysLeft: this.daysLeft,
      img: this.img,
    };
  }
}

export { DealEntity };
