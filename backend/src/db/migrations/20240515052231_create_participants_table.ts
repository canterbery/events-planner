import { type Knex } from 'knex';
import { ParticipantsSource } from 'shared/build/index.js';

const TABLE_NAME = 'participants';

const ColumnName = {
  ID: 'id',
  FULL_NAME: 'full_name',
  EMAIL: 'email',
  BIRTH_DATE: 'birth_date',
  SOURCE: 'source',
  EVENT_ID: 'event_id',
  CREATED_AT: 'created_at',
  UPDATED_AT: 'updated_at',
};

const up = (knex: Knex): Promise<void> => {
  return knex.schema
    .createTable(TABLE_NAME, (table) => {
      table.increments(ColumnName.ID).primary();
      table.text(ColumnName.FULL_NAME).notNullable();
      table.string(ColumnName.EMAIL).notNullable();
      table.date(ColumnName.BIRTH_DATE).notNullable();
      table.string(ColumnName.SOURCE).notNullable();
      table
        .integer(ColumnName.EVENT_ID)
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('events')
        .onDelete('CASCADE')
        .index();
      table
        .dateTime(ColumnName.CREATED_AT)
        .notNullable()
        .defaultTo(knex.fn.now());
      table
        .dateTime(ColumnName.UPDATED_AT)
        .notNullable()
        .defaultTo(knex.fn.now());
      table.unique([ColumnName.EVENT_ID, ColumnName.EMAIL]);
    })
    .then(() =>
      knex(TABLE_NAME).insert([
        {
          [ColumnName.FULL_NAME]: 'Кшиштиняк Вячеслав',
          [ColumnName.EMAIL]: 'wophantommail@gmail.com',
          [ColumnName.BIRTH_DATE]: '12.05.1924',
          [ColumnName.SOURCE]: ParticipantsSource.FRIENDS,
          [ColumnName.EVENT_ID]: 1,
        },
        {
          [ColumnName.FULL_NAME]: 'Олег Матвієнко',
          [ColumnName.EMAIL]: 'borgendom@gmail.com',
          [ColumnName.BIRTH_DATE]: '04.11.1994',
          [ColumnName.SOURCE]: ParticipantsSource.FRIENDS,
          [ColumnName.EVENT_ID]: 1,
        },
        {
          [ColumnName.FULL_NAME]: 'Андрій Сергієнко',
          [ColumnName.EMAIL]: 'tempmail@gmail.com',
          [ColumnName.BIRTH_DATE]: '04.01.1954',
          [ColumnName.SOURCE]: ParticipantsSource.MYSELF,
          [ColumnName.EVENT_ID]: 2,
        },
        {
          [ColumnName.FULL_NAME]: 'Олена Півень',
          [ColumnName.EMAIL]: 'tempmail22@gmail.com',
          [ColumnName.BIRTH_DATE]: '11.05.2004',
          [ColumnName.SOURCE]: ParticipantsSource.MYSELF,
          [ColumnName.EVENT_ID]: 2,
        },
        {
          [ColumnName.FULL_NAME]: 'Олег Андрійчеко',
          [ColumnName.EMAIL]: 'olegandri@gmail.com',
          [ColumnName.BIRTH_DATE]: '04.02.1974',
          [ColumnName.SOURCE]: ParticipantsSource.SOCIAL_MEDIA,
          [ColumnName.EVENT_ID]: 3,
        },
        {
          [ColumnName.FULL_NAME]: 'Іван Магнов',
          [ColumnName.EMAIL]: 'ivamag@gmail.com',
          [ColumnName.BIRTH_DATE]: '03.05.1994',
          [ColumnName.SOURCE]: ParticipantsSource.FRIENDS,
          [ColumnName.EVENT_ID]: 3,
        },
        {
          [ColumnName.FULL_NAME]: 'Анна Колісникова',
          [ColumnName.EMAIL]: 'powerbank@gmail.com',
          [ColumnName.BIRTH_DATE]: '04.02.1974',
          [ColumnName.SOURCE]: ParticipantsSource.SOCIAL_MEDIA,
          [ColumnName.EVENT_ID]: 4,
        },
      ]),
    );
};

const down = (knex: Knex): Promise<void> => {
  return knex.schema.dropTableIfExists(TABLE_NAME);
};

export { down, up };
