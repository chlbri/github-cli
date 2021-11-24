#!/usr/bin/env node

/* eslint-disable @typescript-eslint/no-var-requires */
import { log } from 'core';
import { __commit } from '../cli/__commit';

async function commit() {
  log('answers', await __commit());
}

commit();
