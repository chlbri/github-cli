import type { DistinctQuestion } from 'inquirer';
import inquirer from 'inquirer';
import type { CommitAnswers, CommitOptions } from '../types';
export declare function __produceCommitQuestions(): {
    readonly questions: DistinctQuestion<inquirer.Answers>[];
    readonly name: string;
    readonly email: string;
    readonly _isCommitted: boolean;
    readonly title: string | undefined;
    readonly typeCommit: string | undefined;
    readonly description: string | undefined;
};
export declare function __commit(): Promise<CommitAnswers>;
export declare function createCommitMsg(args: CommitOptions): string;
export declare function _commit(answers: CommitAnswers): import("shelljs").ShellString;
