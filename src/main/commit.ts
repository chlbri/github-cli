#!/usr/bin/env node

/* eslint-disable @typescript-eslint/no-var-requires */
import { log } from 'core';
import { exec } from 'shelljs';
import { createCommitMsg, __commit } from '../cli/__commit';
import { EOL } from 'os';

async function commit() {
  const answers = await __commit();
  if (answers._isCommitted) {
    return console.log("You don't need to commit");
  }
  const msg = createCommitMsg(answers);
  const command = `git config --global core.autocrlf true && git add -A && git commit -am "${msg}"`;
  const { stderr, stdout, code } = exec(command); //?
  return console.log(`${stderr}\n${stdout}\nWith code ( ${code} )`);
}
commit();
