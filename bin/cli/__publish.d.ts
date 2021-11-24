import inquirer from 'inquirer';
import type { PublishAnswers } from '../types';
export declare function __producePublishQuestions(): {
    readonly questions: inquirer.DistinctQuestion<inquirer.Answers>[];
    readonly name: string;
    readonly email: string;
    readonly _isCommitted: boolean;
    readonly description: string | undefined;
    readonly title: string | undefined;
    readonly typeCommit: string | undefined;
    readonly dev: string | undefined;
    readonly prod: string | undefined;
};
export declare function __publish(): Promise<PublishAnswers>;
