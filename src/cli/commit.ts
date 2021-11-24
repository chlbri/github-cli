import arg from 'arg';
import inquirer, { DistinctQuestion } from 'inquirer';
import { exec } from 'shelljs';
import { isCommitted } from '../functions/git';
import { questionsGitComit } from '../schemas/objects';

export async function __commit(path?: string) {
  const questions: DistinctQuestion[] = [];
  // const args = arg({
  //   '--path': String,
  // });

  const _isCommitted = isCommitted(path);

  _isCommitted;

  if (!_isCommitted) {
    questions.push(...questionsGitComit);
  }

  const name = exec(`git config --get user.name`, {
    silent: true,
  }).stdout.trim();

  const email = exec(`git config --get user.email`, {
    silent: true,
  }).stdout.trim();

  const answers: Record<string, any> = {
    ...(await inquirer.prompt(questions)),
    name,
    email,
    _isCommitted,
  };

  return answers;
}
