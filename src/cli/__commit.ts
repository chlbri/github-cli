import arg from 'arg';
import { NOmit } from 'core';
import inquirer, { DistinctQuestion } from 'inquirer';
import { exec } from 'shelljs';
import { TypeOf } from 'zod';
import { isCommitted } from '../functions/git';
import { questionsGitComit } from '../schemas/objects';
import { commitTypeSchema, PARAMS } from './../schemas/string';
import { EOL } from 'os';

export function __produceCommitQuestions() {
  const questions: DistinctQuestion[] = [];
  const args = arg({
    [PARAMS.typeCommit.param]: String,
    [PARAMS.title.param]: String,
    [PARAMS.description.param]: String,
    [PARAMS.typeCommit.alias]: PARAMS.typeCommit.param,
    [PARAMS.title.alias]: PARAMS.title.param,
    [PARAMS.description.alias]: PARAMS.description.param,
  });

  const _isCommitted = isCommitted();

  _isCommitted;

  if (!_isCommitted) {
    // #region Variables

    const typeCommit =
      args[PARAMS.typeCommit.param] ?? args[PARAMS.typeCommit.alias];
    const title = args[PARAMS.title.param] ?? args[PARAMS.title.alias];
    const description =
      args[PARAMS.description.param] ?? args[PARAMS.description.alias];

    // #endregion

    const isValidTypeCommit =
      !typeCommit || commitTypeSchema.safeParse(typeCommit).success;

    if (isValidTypeCommit) {
      questions.push(questionsGitComit.typeCommit);
    }
    if (!title) {
      questions.push(questionsGitComit.title);
    }
    if (!description) {
      questions.push(questionsGitComit.description);
    }
  }

  const name = exec(`git config --get user.name`, {
    silent: true,
  }).stdout.trim();

  const email = exec(`git config --get user.email`, {
    silent: true,
  }).stdout.trim();

  return { questions, name, email, _isCommitted, args } as const;
}

type Answers = {
  name: string;
  email: string;
  typeCommit: TypeOf<typeof commitTypeSchema>;
  title: string;
  description: string;
  _isCommitted: boolean;
};

export async function __commit() {
  const { questions, name, email, _isCommitted, args } =
    __produceCommitQuestions();

  const answers = {
    typeCommit: args['--typeCommit'] ?? args['-tc'],
    title: args['--title'] ?? args['-t'],
    description: args['--description'] ?? args['-d'],
    ...(await inquirer.prompt(questions)),
    name,
    email,
    _isCommitted,
  } as Answers;

  return answers;
}

type ExecArgs = NOmit<Answers, '_isCommitted'>;

export function createCommitMsg(args: ExecArgs) {
  const commitmsg = `${args.title}${EOL}( ${args.typeCommit} )${EOL}${EOL}${args.description}${EOL}${EOL}${args.name} : (<${args.email} >)`;
  return commitmsg;
}

createCommitMsg({
  description: 'desc',
  name: 'chlbri',
  email: 'bri_lvi@icloud.com',
  title: 'initial',
  typeCommit: 'build',
}); //?
