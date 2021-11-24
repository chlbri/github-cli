import { literal, union } from 'zod';
import { getLiteralValues } from '../functions/zod';

export const commitTypeSchema = union([
  literal('build'),
  literal('chore'),
  literal('ci'),
  literal('docs'),
  literal('feat'),
  literal('fix'),
  literal('perf'),
  literal('refactor'),
  literal('revert'),
  literal('style'),
  literal('test'),
]);

export const COMMIT_TYPES = getLiteralValues(commitTypeSchema);

export const PARAMS = {
  path: {
    param: '--path',
    alias: '-p',
  },
  typeCommit: {
    param: '--typeCommit',
    alias: '-tc',
  },
  title: {
    param: '--title',
    alias: '-t',
  },
  description: {
    param: '--description',
    alias: '-d',
  },
  dev: {
    param: '--dev',
  },
  prod: {
    param: '--prod',
    alias: '-p',
  },
} as const;
