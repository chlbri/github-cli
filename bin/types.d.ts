import { NOmit } from 'core';
import type { TypeOf, ZodLiteral } from 'zod';
import { commitTypeSchema, COMMIT_TYPES } from './schemas/string';
export declare type CommitType = typeof COMMIT_TYPES[number];
export declare type GetTypeOfUnion<T extends ZodLiteral<any>[]> = T extends [
    ZodLiteral<infer U>,
    ...ZodLiteral<infer U>[]
] ? U : never;
export declare type PublishAnswers = {
    name: string;
    email: string;
    typeCommit: TypeOf<typeof commitTypeSchema>;
    title: string;
    description: string;
    _isCommitted: boolean;
    dev: string;
    prod: string;
};
export declare type CommitAnswers = {
    name: string;
    email: string;
    typeCommit: TypeOf<typeof commitTypeSchema>;
    title: string;
    description: string;
    _isCommitted: boolean;
};
export declare type CommitOptions = NOmit<CommitAnswers, '_isCommitted'>;
export declare type PublishOptions = Pick<PublishAnswers, 'dev' | 'prod'>;
