import { TuplifyUnion } from '@core_chlbri/core';
import { ZodLiteral, ZodUnion } from 'zod';
import { GetTypeOfUnion } from '../types';

export function getLiteralValues<
  T extends [ZodLiteral<any>, ...ZodLiteral<any>[]],
>(union: ZodUnion<T>) {
  return union.options.map(un => un._def.value) as unknown as TuplifyUnion<
    GetTypeOfUnion<T>
  >;
}
