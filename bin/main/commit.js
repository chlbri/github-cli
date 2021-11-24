#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commit = exports._commit = void 0;
/* eslint-disable @typescript-eslint/no-var-requires */
const shelljs_1 = require("shelljs");
const __commit_1 = require("../cli/__commit");
function _commit(answers) {
    if (answers._isCommitted) {
        return console.log("You don't need to commit");
    }
    const msg = (0, __commit_1.createCommitMsg)(answers);
    const command = `tsc && pnpm lint && git add -A && git commit -am "${msg}"`;
    const { code } = (0, shelljs_1.exec)(command); //?
    if (code === 0) {
        console.log(`\n\nSuccessfull commit :${answers.name}:`);
    }
}
exports._commit = _commit;
async function commit() {
    const answers = await (0, __commit_1.__commit)();
    _commit(answers);
}
exports.commit = commit;
commit();
