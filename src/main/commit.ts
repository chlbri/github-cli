#!/usr/bin/env node

/* eslint-disable @typescript-eslint/no-var-requires */
import { log } from 'core';
import { __commit } from '../cli/__commit';

async function commit() {
  const answers = await __commit();
  log('answers', answers);
}

commit();
