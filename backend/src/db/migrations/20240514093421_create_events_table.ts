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
          [ColumnName.EVENT_DATE]: '12.06.2024',
          [ColumnName.ORGANISER]: 'SET University',
        },
        {
          [ColumnName.TITLE]: 'Онлайн-курс «Проджект-менеджер в ІТ',
          [ColumnName.DESCRIPTION]:
            'Проджект-менеджмент в ІТ — курс для початківців в проєктному управлінні, які хочуть отримати базу для початку в даній професії від практикуючого ПМ експерта. ',
          [ColumnName.EVENT_DATE]: '12.05.2024',
          [ColumnName.ORGANISER]: 'Laba',
        },
        {
          [ColumnName.TITLE]: 'PM Meetup',
          [ColumnName.DESCRIPTION]: 'Ретроспектива, яку полюбить ваша команда.',
          [ColumnName.EVENT_DATE]: '11.05.2024',
          [ColumnName.ORGANISER]: 'Avenga',
        },
        {
          [ColumnName.TITLE]: 'Вебінар “Backup and Disaster recovery”',
          [ColumnName.DESCRIPTION]:
            'Triangu за підтримки Amazon Web Services проводить оновлений курс вебінарів для технічних спеціалістів та всіх, хто зацікавлений у міграції своїх бізнес ресурсів на Amazon Web Services.',
          [ColumnName.EVENT_DATE]: '11.04.2024',
          [ColumnName.ORGANISER]: 'Triangu & AWS',
        },
        {
          [ColumnName.TITLE]: 'Онлайн-курс «Проджект-менеджер в ІТ ч.2',
          [ColumnName.DESCRIPTION]:
            'Проджект-менеджмент в ІТ — курс для початківців в проєктному управлінні, які хочуть отримати базу для початку в даній професії від практикуючого ПМ експерта. ',
          [ColumnName.EVENT_DATE]: '08.07.2024',
          [ColumnName.ORGANISER]: 'Laba',
        },
        {
          [ColumnName.TITLE]: 'Онлайн-співбесіда: QA Lead #8',
          [ColumnName.DESCRIPTION]:
            'Запрошуємо приєднатися на співбесіду на тренувальну вакансію JQA Lead.',
          [ColumnName.EVENT_DATE]: '03.11.2024',
          [ColumnName.ORGANISER]: 'QA Україна',
        },
        {
          [ColumnName.TITLE]: 'Онлайн-співбесіда: QA Lead #9',
          [ColumnName.DESCRIPTION]:
            'Запрошуємо приєднатися на співбесіду на тренувальну вакансію JQA Lead.',
          [ColumnName.EVENT_DATE]: '10.10.2024',
          [ColumnName.ORGANISER]: 'QA Україна',
        },
        {
          [ColumnName.TITLE]: 'Безкоштовний курс Java Базовий від ITVDN',
          [ColumnName.DESCRIPTION]:
            'Курс дає основи об’єктно-орієнтованої парадигми програмування (ООП) та її втілення в Java. ',
          [ColumnName.EVENT_DATE]: '11.11.2024',
          [ColumnName.ORGANISER]: 'ITVDN',
        },
        {
          [ColumnName.TITLE]: 'Вебінар «Етика та відповідальність у HR»',
          [ColumnName.DESCRIPTION]:
            'Приєднуйтеся до вебінару, щоб зануритися в етичні аспекти сучасного управління персоналом.  ',
          [ColumnName.EVENT_DATE]: '09.07.2024',
          [ColumnName.ORGANISER]: 'Цитрус',
        },
        {
          [ColumnName.TITLE]: 'Безкоштовний курс Java advanced від ITVDN',
          [ColumnName.DESCRIPTION]:
            'Курс дає поглибленні знання об’єктно-орієнтованої парадигми програмування (ООП) та її втілення в Java. ',
          [ColumnName.EVENT_DATE]: '08.07.2024',
          [ColumnName.ORGANISER]: 'ITVDN',
        },
        {
          [ColumnName.TITLE]: 'Вебінар «Як відкрити IT-компанію в 2024»',
          [ColumnName.DESCRIPTION]:
            'На вебінарі ви почуєте реальні історії успіху та невдач, що дозволять вам зрозуміти, які кроки варто робити, а від яких краще утриматись під час відкриття ІТ-компанії.',
          [ColumnName.EVENT_DATE]: '01.06.2024',
          [ColumnName.ORGANISER]: 'Jam',
        },
      ]),
    );
};

const down = (knex: Knex): Promise<void> => {
  return knex.schema.dropTableIfExists(TABLE_NAME);
};

export { down, up };
