#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._publish = void 0;
/* eslint-disable @typescript-eslint/no-var-requires */
const shelljs_1 = require("shelljs");
const __commit_1 = require("../cli/__commit");
const __publish_1 = require("../cli/__publish");
function _publish(anwsers) {
    const command = `git checkout ${anwsers.dev} && git push --follow-tags && git checkout ${anwsers.prod} && git merge ${anwsers.dev} && git push --follow-tags && git checkout ${anwsers.dev}`;
    return (0, shelljs_1.exec)(command);
}
exports._publish = _publish;
async function publish() {
    const answers = await (0, __publish_1.__publish)();
    let commitCode = -1;
    if (!answers._isCommitted) {
        commitCode = (0, __commit_1._commit)(answers).code;
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
