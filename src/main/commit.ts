#!/usr/bin/env node

/* eslint-disable @typescript-eslint/no-var-requires */
import { _commit, __commit } from '../cli/__commit';

export async function commit() {
  const answers = await __commit();
  if (answers._isCommitted) {
    return console.log("You don't need to commit");
  }
  const { code } = _commit(answers); //?

  if (code === 0) {
    console.log(`\n\nSuccessfull commit :${answers.name}:`);
  }
}
commit();
