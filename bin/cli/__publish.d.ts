import inquirer from 'inquirer';
export declare function __producePublishQuestions(): {
    readonly questions: inquirer.DistinctQuestion<inquirer.Answers>[];
    readonly name: string;
    readonly email: string;
    readonly _isCommitted: boolean;
};
export declare function __publish(): Promise<{
    name: string;
    email: string;
    _isCommitted: boolean;
    typeCommit: string;
    title: string;
    description: string;
    dev: string;
    prod: string;
}>;
