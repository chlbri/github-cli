import { NOmit } from '@core_chlbri/core';
import type { TypeOf, ZodLiteral } from 'zod';
import { commitTypeSchema, COMMIT_TYPES } from './schemas/string';

export type CommitType = typeof COMMIT_TYPES[number];

export type GetTypeOfUnion<T extends ZodLiteral<any>[]> = T extends [
  ZodLiteral<infer U>,
  ...ZodLiteral<infer U>[]
]
  ? U
  : never;

export type PublishAnswers = {
  name: string;
  email: string;
  typeCommit: TypeOf<typeof commitTypeSchema>;
  title: string;
  description: string;
  _isCommitted: boolean;
  dev: string;
  prod: string;
};

export type CommitAnswers = {
  name: string;
  email: string;
  typeCommit: TypeOf<typeof commitTypeSchema>;
  title: string;
  description: string;
  _isCommitted: boolean;
};

export type CommitOptions = NOmit<CommitAnswers, '_isCommitted'>;
export type PublishOptions = Pick<PublishAnswers, 'dev' | 'prod'>;
