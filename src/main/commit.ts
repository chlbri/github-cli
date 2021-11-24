#!/usr/bin/env node

/* eslint-disable @typescript-eslint/no-var-requires */
import { log } from 'core';
import { exec } from 'shelljs';
import { createCommitMsg, __commit } from '../cli/__commit';

async function commit() {
  const answers = await __commit();
  if (answers._isCommitted) {
    return console.log("You don't need to commit");
  }
  const msg = createCommitMsg(answers);
  const command = `git add -A && git commit -am "${msg}"`;
  const { stderr, code } = exec(command);

  if (stderr) {
    return console.log(`Error, exit with (code ${code})`);
  }
  return console.log(`SUcessfull commit (code ${code})`);
}
commit();
