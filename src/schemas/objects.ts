import { DistinctQuestion } from 'inquirer';
import { COMMIT_TYPES } from './string';

export const questionsGitComit: DistinctQuestion[] = [
  {
    type: 'list',
    choices: COMMIT_TYPES,
    name: 'typeCommit',
    message: 'Le type du commit ?',
    pageSize: 4,
    loop: false,
  },
  { type: 'input', name: 'title', message: 'Le titre du commit ?' },
  {
    type: 'input',
    name: 'description',
    message: 'Une petite description ?',
  },
];

export const questionGitPublish: DistinctQuestion[] = [
  {
    type: 'input',
    default: 'dev',
    message: 'The current branch ?',
    name: 'dev',
  },
  {
    type: 'input',
    default: 'main',
    message: 'The prod/publish branch ?',
    name: 'prod',
  },
];
