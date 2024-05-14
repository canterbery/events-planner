import { type Knex } from 'knex';

const TABLE_NAME = 'events';

const ColumnName = {
  ID: 'id',
  TITLE: 'title',
  DESCRIPTION: 'description',
  EVENT_DATE: 'event_date',
  ORGANISER: 'organiser',
  CREATED_AT: 'created_at',
  UPDATED_AT: 'updated_at',
};

const up = (knex: Knex): Promise<void> => {
  return knex.schema
    .createTable(TABLE_NAME, (table) => {
      table.increments(ColumnName.ID).primary();
      table.string(ColumnName.TITLE).notNullable();
      table.text(ColumnName.DESCRIPTION).notNullable();
      table.date(ColumnName.EVENT_DATE).notNullable();
      table.string(ColumnName.ORGANISER).notNullable();

      table
        .dateTime(ColumnName.CREATED_AT)
        .notNullable()
        .defaultTo(knex.fn.now());
      table
        .dateTime(ColumnName.UPDATED_AT)
        .notNullable()
        .defaultTo(knex.fn.now());
    })
    .then(() =>
      knex(TABLE_NAME).insert([
        {
          [ColumnName.TITLE]: 'Курс Solution Architecture ',
          [ColumnName.DESCRIPTION]:
            'Відкриваємо набір на Solution Architecture, мікромагістерську програму — для тих, хто хоче рухатися до позиції Solution Architect. За 10 тижнів ми не зробимо з вас архітектора програмного забезпечення — але це стане потужною базою, щоб рухатися до цієї позиції',
          [ColumnName.EVENT_DATE]: '14.05.2024',
          [ColumnName.ORGANISER]: 'SET University',
        },
        {
          [ColumnName.TITLE]: 'Онлайн-курс «Проджект-менеджер в ІТ',
          [ColumnName.DESCRIPTION]:
            'Проджект-менеджмент в ІТ — курс для початківців в проєктному управлінні, які хочуть отримати базу для початку в даній професії від практикуючого ПМ експерта. ',
          [ColumnName.EVENT_DATE]: '15.05.2024',
          [ColumnName.ORGANISER]: 'Laba',
        },
        {
          [ColumnName.TITLE]: 'PM Meetup',
          [ColumnName.DESCRIPTION]: 'Ретроспектива, яку полюбить ваша команда.',
          [ColumnName.EVENT_DATE]: '21.05.2024',
          [ColumnName.ORGANISER]: 'Avenga',
        },
        {
          [ColumnName.TITLE]: 'Вебінар “Backup and Disaster recovery”',
          [ColumnName.DESCRIPTION]:
            'Triangu за підтримки Amazon Web Services проводить оновлений курс вебінарів для технічних спеціалістів та всіх, хто зацікавлений у міграції своїх бізнес ресурсів на Amazon Web Services.',
          [ColumnName.EVENT_DATE]: '25.05.2024',
          [ColumnName.ORGANISER]: 'Triangu & AWS',
        },
      ]),
    );
};

const down = (knex: Knex): Promise<void> => {
  return knex.schema.dropTableIfExists(TABLE_NAME);
};

export { down, up };
