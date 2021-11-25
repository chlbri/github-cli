import arg from 'arg';
import { produce } from 'immer';
import inquirer from 'inquirer';
import { PARAMS } from '../schemas/string';
import type { PublishAnswers } from '../types';
import { questionGitPublish } from './../schemas/objects';
import { __produceCommitQuestions } from './__commit';

export function __producePublishQuestions() {
  // #region Config

  const {
    questions,
    name,
    email,
    _isCommitted,
    description,
    title,
    typeCommit,
  } = __produceCommitQuestions();

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

  // const questions = produce(_questions, draft => {
  //   if (!_isCommitted) {
  //     const index = draft.findIndex(data => data.name == 'typeCommit');
  //     draft[
  //       index
  //     ].message = `<You need to commit 😒!\n\n> ${draft[index].message}`;
  //   }
  // });

  return {
    questions,
    name,
    email,
    _isCommitted,
    description,
    title,
    typeCommit,
    dev,
    prod,
  } as const;
}

export async function __publish() {
  const {
    questions,
    name,
    email,
    _isCommitted,
    dev,
    prod,
    title,
    typeCommit,
    description,
  } = __producePublishQuestions();

  if (!_isCommitted) {
    console.log('You need to commit 😒!\n');
  }

  const answers = {
    dev,
    prod,
    title,
    typeCommit,
    description,
    ...(await inquirer.prompt(questions)),
    name,
    email,
    _isCommitted,
  } as PublishAnswers;

  return answers;
}
