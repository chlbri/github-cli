"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.questionGitPublish = exports.questionsGitComit = void 0;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const string_1 = require("./string");
exports.questionsGitComit = {
    typeCommit: {
        type: 'list',
        choices: string_1.COMMIT_TYPES,
        name: 'typeCommit',
        message: 'Le type du commit ?',
        pageSize: 4,
        loop: false,
    },
    title: { type: 'input', name: 'title', message: 'Le titre du commit ?' },
    description: {
        type: 'input',
        name: 'description',
        message: 'Une petite description ?',
    },
};
exports.questionGitPublish = {
    dev: {
        type: 'input',
        default: 'dev',
        message: 'The current branch ?',
        name: 'dev',
    },
    prod: {
        type: 'input',
        default: 'main',
        message: 'The prod/publish branch ?',
        name: 'prod',
    },
};
