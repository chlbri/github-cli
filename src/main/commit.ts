#!/usr/bin/env node

/* eslint-disable @typescript-eslint/no-var-requires */
import { log } from 'core';
import { __commit } from '../cli/__commit';

async function commit() {
  await __commit().then(answers => log('answers', answers));
}

commit();
