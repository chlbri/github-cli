#!/usr/bin/env node

/* eslint-disable @typescript-eslint/no-var-requires */
import { exec } from 'shelljs';
import { __publish } from '../cli/__publish';
import { PublishOptions } from '../types';
import { _commit } from './commit';

export function _publish(anwsers: PublishOptions) {
  const command = `git checkout ${anwsers.dev} && git push --follow-tags && git checkout ${anwsers.prod} && git merge ${anwsers.dev} && git push --follow-tags && git checkout ${anwsers.dev}`;
  return exec(command);
}

async function publish() {
  const answers = await __publish();
  _commit(answers);
  const { code } = _publish(answers);
  if (code === 0) {
    console.log(`Successfull publish :${answers.name}:`);
  }
}

publish();
