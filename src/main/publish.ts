#!/usr/bin/env node

/* eslint-disable @typescript-eslint/no-var-requires */
import { exec } from 'shelljs';
import { _commit } from '../cli/__commit';
import { __publish } from '../cli/__publish';
import { PublishOptions } from '../types';

export function _publish(anwsers: PublishOptions) {
  const command = `git checkout ${anwsers.dev} && git push --follow-tags && git checkout ${anwsers.prod} && git merge ${anwsers.dev} && git push --follow-tags && git checkout ${anwsers.dev}`;
  return exec(command);
}

async function publish() {
  const answers = await __publish();
  let commitCode = -1;
  if (!answers._isCommitted) {
    commitCode = _commit(answers).code;
  }
  const { code: publishCode } = _publish(answers);

  if (commitCode === 0) {
    console.log(`Successfull commit :${answers.name}:`);
  }
  if (publishCode === 0) {
    console.log(`Successfull publish :${answers.name}:`);
  }
}

publish();
