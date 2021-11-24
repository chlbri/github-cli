import type { ZodLiteral } from 'zod';
import { COMMIT_TYPES } from './schemas/string';

export type CommitType = typeof COMMIT_TYPES[number];

export type GetTypeOfUnion<T extends ZodLiteral<any>[]> = T extends [
  ZodLiteral<infer U>,
  ...ZodLiteral<infer U>[]
]
  ? U
  : never;
