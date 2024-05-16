import { type QueryBuilder } from 'objection';
import { type ParticipantModel } from '../../participants.js';

const getWhereEmailQuery = (email: string) => {
  return (
    builder: QueryBuilder<ParticipantModel, ParticipantModel[]>,
  ): void => {
    if (email) {
      void builder.whereILike('email', `%${email}%`);
    }
  };
};

export { getWhereEmailQuery };
