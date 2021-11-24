import arg from 'arg';
import inquirer from 'inquirer';
import { PARAMS } from '../schemas/string';
import {
  questionGitPublish,
  questionsGitComit,
} from './../schemas/objects';
import { __produceCommitQuestions } from './__commit';

export function __producePublishQuestions() {
  // #region Config

  const { questions, name, email, _isCommitted } =
    __produceCommitQuestions();

  const args = arg({
    [PARAMS.dev.param]: String,
    [PARAMS.prod.param]: String,
    [PARAMS.prod.alias]: PARAMS.prod.param,
  });

  // #region Variables

  const dev = args[PARAMS.dev.param];
  const prod = args[PARAMS.prod.param] ?? args[PARAMS.prod.alias];

  // #endregion

  // #endregion

  if (!dev) {
    questions.push(questionGitPublish.dev);
  }

  if (!prod) {
    questions.push(questionGitPublish.prod);
  }

  return { questions, name, email, _isCommitted } as const;
}

export async function __publish() {
  const { questions, name, email, _isCommitted } =
    __producePublishQuestions();

  const answers = {
    ...(await inquirer.prompt<{
      [key in
        | keyof typeof questionGitPublish
        | keyof typeof questionsGitComit]: string;
    }>(questions)),
    name,
    email,
    _isCommitted,
  };

  return answers;
}
