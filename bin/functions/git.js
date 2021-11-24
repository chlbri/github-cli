"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isCommitted = void 0;
const shelljs_1 = require("shelljs");
const fs_1 = require("fs");
function isCommitted(path) {
    const command = `${path && (0, fs_1.existsSync)(path) ? `cd ${path} && ` : ''}git status -s`; //?
    const out = (0, shelljs_1.exec)(command, {
        silent: true,
    }).stdout.trim(); //?
    return out.length === 0;
}
exports.isCommitted = isCommitted;
