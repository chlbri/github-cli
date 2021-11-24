#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const shelljs_1 = require("shelljs");
const __commit_1 = require("../cli/__commit");
async function commit() {
    const answers = await (0, __commit_1.__commit)();
    if (answers._isCommitted) {
        return console.log("You don't need to commit");
    }
    const msg = (0, __commit_1.createCommitMsg)(answers);
    const command = `git add -A && git commit -am "${msg}"`;
    const { stderr, stdout, code } = (0, shelljs_1.exec)(command); //?
    if (stderr) {
        return console.log(`Error, exit with (code ${code})`);
    }
    return console.log(`SUcessfull commit (code ${code})`);
}
commit();
