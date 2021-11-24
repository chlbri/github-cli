import { exec } from 'shelljs';
import { existsSync } from 'fs';

export function isCommitted(path?: string) {
  const command = `${
    path && existsSync(path) ? `cd ${path} && ` : ''
  }git status -s`; //?
  const out = exec(command, {
    silent: true,
  }).stdout.trim(); //?
  return out.length === 0;
}
