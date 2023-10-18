import { type Knex } from 'knex';

const TABLE_NAME = 'deals';

const ColumnName = {
  ID: 'id',
  NAME: 'name',
  PRICE: 'price',
  YEILD: 'yeild',
  SOLD: 'sold',
  TICKET: 'ticket',
  DAYS_LEFT: 'days_left',
  IMG: 'img',
  CREATED_AT: 'created_at',
  UPDATED_AT: 'updated_at',
};

const up = (knex: Knex): Promise<void> => {
  return knex.schema
    .createTable(TABLE_NAME, (table) => {
      table.increments(ColumnName.ID).primary();
      table.string(ColumnName.NAME).notNullable();
      table.string(ColumnName.PRICE).notNullable();
      table.string(ColumnName.YEILD).notNullable();
      table.string(ColumnName.SOLD).notNullable();
      table.string(ColumnName.TICKET).notNullable();
      table.string(ColumnName.DAYS_LEFT).notNullable();
      table.string(ColumnName.IMG).notNullable();
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
          [ColumnName.NAME]: 'The Marina Torch',
          [ColumnName.PRICE]: '6 500 000 Dhs',
          [ColumnName.YEILD]: '9.25%',
          [ColumnName.SOLD]: '75%',
          [ColumnName.TICKET]: '60 000 Dhs',
          [ColumnName.DAYS_LEFT]: '150',
          [ColumnName.IMG]:
            'https://res.cloudinary.com/dzdbupgjk/image/upload/v1697619409/samples/zenbit/marina-torch_l5neiy.jpg',
        },
        {
          [ColumnName.NAME]: 'HHHR Tower',
          [ColumnName.PRICE]: '7 500 000 Dhs',
          [ColumnName.YEILD]: '19.25%',
          [ColumnName.SOLD]: '55%',
          [ColumnName.TICKET]: '20 000 Dhs',
          [ColumnName.DAYS_LEFT]: '50',
          [ColumnName.IMG]:
            'https://res.cloudinary.com/dzdbupgjk/image/upload/v1697619461/samples/zenbit/HHHR-tower_tj9ulu.jpg',
        },
        {
          [ColumnName.NAME]: 'Ocean Peaks',
          [ColumnName.PRICE]: '17 500 000 Dhs',
          [ColumnName.YEILD]: '29.25%',
          [ColumnName.SOLD]: '45%',
          [ColumnName.TICKET]: '120 000 Dhs',
          [ColumnName.DAYS_LEFT]: '20',
          [ColumnName.IMG]:
            'https://res.cloudinary.com/dzdbupgjk/image/upload/v1697619445/samples/zenbit/ocean-peaks_akzpsx.jpg',
        },
        {
          [ColumnName.NAME]: 'Al Yaqoub Tower',
          [ColumnName.PRICE]: '5 500 000 Dhs',
          [ColumnName.YEILD]: '12.25%',
          [ColumnName.SOLD]: '95%',
          [ColumnName.TICKET]: '40 000 Dhs',
          [ColumnName.DAYS_LEFT]: '120',
          [ColumnName.IMG]:
            'https://res.cloudinary.com/dzdbupgjk/image/upload/v1697619473/samples/zenbit/al-yaqoub-tower_hjwwuy.jpg',
        },
      ]),
    );
};

const down = (knex: Knex): Promise<void> => {
  return knex.schema.dropTableIfExists(TABLE_NAME);
};

export { down, up };
