import arg from 'arg';
import { NOmit } from 'core';
import inquirer from 'inquirer';
import { TypeOf } from 'zod';
import { commitTypeSchema } from './../schemas/string';
export declare function __produceCommitQuestions(): {
    readonly questions: inquirer.DistinctQuestion<inquirer.Answers>[];
    readonly name: string;
    readonly email: string;
    readonly _isCommitted: boolean;
    readonly args: arg.Result<{
        "--typeCommit": StringConstructor;
        "--title": StringConstructor;
        "--description": StringConstructor;
        "-tc": "--typeCommit";
        "-t": "--title";
        "-d": "--description";
    }>;
};
declare type Answers = {
    name: string;
    email: string;
    typeCommit: TypeOf<typeof commitTypeSchema>;
    title: string;
    description: string;
    _isCommitted: boolean;
};
export declare function __commit(): Promise<Answers>;
declare type ExecArgs = NOmit<Answers, '_isCommitted'>;
export declare function createCommitMsg(args: ExecArgs): string;
export {};
