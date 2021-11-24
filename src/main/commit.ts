#!/usr/bin/env node

/* eslint-disable @typescript-eslint/no-var-requires */
import { exec } from 'shelljs';
import { createCommitMsg, __commit } from '../cli/__commit';

async function commit() {
  const answers = await __commit();
  if (answers._isCommitted) {
    return console.log("You don't need to commit");
  }
  const msg = createCommitMsg(answers);
  const command = `git config --global core.autocrlf true && git add -A && git commit -am "${msg}"`;
  const { code } = exec(command); //?

  if (code === 0) {
    console.log(`\n\nSuccessfull commit ${answers.name}`);
  }
}
commit();
