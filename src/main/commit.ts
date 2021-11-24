#!/usr/bin/env node

/* eslint-disable @typescript-eslint/no-var-requires */
import { exec } from 'shelljs';
import { createCommitMsg, __commit } from '../cli/__commit';
import type { CommitAnswers } from '../types';

export function _commit(answers: CommitAnswers) {
  if (answers._isCommitted) {
    return console.log("You don't need to commit");
  }
  const msg = createCommitMsg(answers);
  const command = `tsc && pnpm lint && git add -A && git commit -am "${msg}"`;
  const { code } = exec(command); //?

  if (code === 0) {
    console.log(`\n\nSuccessfull commit :${answers.name}:`);
  }
}

export async function commit() {
  const answers = await __commit();

  _commit(answers);
}
commit();
