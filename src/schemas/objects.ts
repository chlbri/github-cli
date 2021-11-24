// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { COMMIT_TYPES } from './string';

export const questionsGitComit = {
  typeCommit: {
    type: 'list',
    choices: COMMIT_TYPES,
    name: 'typeCommit',
    message: 'Le type du commit ?',
    pageSize: 4,
    loop: false,
  },
  title: {
    type: 'input',
    name: 'title',
    message: 'Le titre du commit ?',
    default: 'commit',
  },
  description: {
    type: 'input',
    name: 'description',
    message: 'Une petite description ?',
  },
} as const;

export const questionGitPublish = {
  dev: {
    type: 'input',
    default: 'dev',
    message: 'The current branch ?',
    name: 'dev',
  },
  prod: {
    type: 'input',
    default: 'main',
    message: 'The prod/publish branch ?',
    name: 'prod',
  },
} as const;
