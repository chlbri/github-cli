import arg from 'arg';
import inquirer from 'inquirer';
export declare function __produceCommitQuestions(): {
    readonly questions: inquirer.DistinctQuestion<inquirer.Answers>[];
    readonly name: string;
    readonly email: string;
    readonly _isCommitted: boolean;
    readonly args: arg.Result<{
        "--path": StringConstructor;
        "--typeCommit": StringConstructor;
        "--title": StringConstructor;
        "--description": StringConstructor;
        "-p": "--path";
        "-tc": "--typeCommit";
        "-t": "--title";
        "-d": "--description";
    }>;
};
export declare function __commit(): Promise<{
    name: string;
    email: string;
    _isCommitted: boolean;
    args: arg.Result<{
        "--path": StringConstructor;
        "--typeCommit": StringConstructor;
        "--title": StringConstructor;
        "--description": StringConstructor;
        "-p": "--path";
        "-tc": "--typeCommit";
        "-t": "--title";
        "-d": "--description";
    }>;
    typeCommit: string;
    title: string;
    description: string;
}>;
