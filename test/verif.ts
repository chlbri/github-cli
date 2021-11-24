import { log } from 'core';
import { exec } from 'shelljs';
import { existsSync } from 'fs';

const cwd = exec(`cd ${process.cwd()} && git status -s`, {
  silent: true,
});
log('cwd', cwd);
log('__dirname', process.cwd());

const name = exec(`git config --get user.name`, {
  silent: true,
}).stdout;
const email = exec(`git config --get user.email`, {
  silent: true,
}).stdout;
name; //?
email; //?
existsSync('C:\\Users\\chlbr\\Documents\\github\\github-cli\\.__temp'); //?
