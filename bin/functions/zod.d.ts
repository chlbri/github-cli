import { TuplifyUnion } from '@core_chlbri/core';
import { ZodLiteral, ZodUnion } from 'zod';
import { GetTypeOfUnion } from '../types';
export declare function getLiteralValues<T extends [ZodLiteral<any>, ...ZodLiteral<any>[]]>(union: ZodUnion<T>): TuplifyUnion<GetTypeOfUnion<T>>;
