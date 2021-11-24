import { customAlphabet } from 'nanoid';
import { exec } from 'shelljs';

export const iniGit = (path: string) => exec(`cd ${path} && git init `);
export const unstage = (path: string) =>
  exec(
    `cd ${path} && echo '' > ${customAlphabet(
      'abcdefghijklmnopqrstuvwxyz',
      10,
    )}.txt`,
  );

export const _cwd = () => 'C:/Users/chlbr/Documents/github/github-cli';

