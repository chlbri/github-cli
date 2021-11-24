import arg from 'arg';
import inquirer, { DistinctQuestion } from 'inquirer';
import { exec } from 'shelljs';
import { isCommitted } from '../functions/git';
import { questionsGitComit } from '../schemas/objects';
import { commitTypeSchema, PARAMS } from './../schemas/string';

export function __produceCommitQuestions() {
  const questions: DistinctQuestion[] = [];
  const args = arg({
    [PARAMS.path.param]: String,
    [PARAMS.typeCommit.param]: String,
    [PARAMS.title.param]: String,
    [PARAMS.description.param]: String,
    [PARAMS.path.alias]: PARAMS.path.param,
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

export async function __commit() {
  const { questions, name, email, _isCommitted, args } =
    __produceCommitQuestions();

  const answers = {
    ...(await inquirer.prompt<{
      [key in keyof typeof questionsGitComit]: string;
    }>(questions)),
    name,
    email,
    _isCommitted,
    args,
  };

  return answers;
}
