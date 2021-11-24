import arg, { Result, Spec } from 'arg';
import inquirer from 'inquirer';
export declare function parseArgstoOptions(..._args: string[]): arg.Result<{
    [x: string]: BooleanConstructor;
}>;
export declare function promptOptions<T extends Spec = Spec>(args?: Result<T>): Promise<inquirer.Answers>;
export declare function clitest(...args: string[]): void;
