import { exec } from 'shelljs';

export function isCommitted() {
  const command = `git status -s`;
  const out = exec(command, {
    silent: true,
  }).stdout.trim();
  return out.length === 0;
}
