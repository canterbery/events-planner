import { type QueryBuilder } from 'objection';
import { type ParticipantModel } from '../../participants.js';

const getWhereFullNameQuery = (fullName: string) => {
  return (
    builder: QueryBuilder<ParticipantModel, ParticipantModel[]>,
  ): void => {
    if (fullName) {
      void builder.whereILike('fullName', `%${fullName}%`);
    }
  };
};

export { getWhereFullNameQuery };
