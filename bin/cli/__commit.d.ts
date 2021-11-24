import arg from 'arg';
import type { DistinctQuestion } from 'inquirer';
import inquirer from 'inquirer';
import type { CommitAnswers, CommitOptions } from '../types';
export declare function __produceCommitQuestions(): {
    readonly questions: DistinctQuestion<inquirer.Answers>[];
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
export declare function __commit(): Promise<CommitAnswers>;
export declare function createCommitMsg(args: CommitOptions): string;
