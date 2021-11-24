"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.clitest = exports.promptOptions = exports.parseArgstoOptions = void 0;
const arg_1 = __importDefault(require("arg"));
const inquirer_1 = __importDefault(require("inquirer"));
const COMMIT_TYPES = [
    'build',
    'chore',
    'ci',
    'docs',
    'feat',
    'fix',
    'perf',
    'refactor',
    'revert',
    'style',
    'test',
];
const args = (0, arg_1.default)({
    [`--${COMMIT_TYPES[0]}`]: Boolean,
    [`--${COMMIT_TYPES[1]}`]: Boolean,
    [`--${COMMIT_TYPES[2]}`]: Boolean,
    [`--${COMMIT_TYPES[3]}`]: Boolean,
    [`--${COMMIT_TYPES[4]}`]: Boolean,
    [`--${COMMIT_TYPES[5]}`]: Boolean,
    [`--${COMMIT_TYPES[5]}`]: Boolean,
    [`--${COMMIT_TYPES[7]}`]: Boolean,
    [`--${COMMIT_TYPES[8]}`]: Boolean,
});
args[`--${COMMIT_TYPES[0]}`]; //?;
function parseArgstoOptions(..._args) {
    var _a;
    const args = (0, arg_1.default)({
        [`--${COMMIT_TYPES[0]}`]: Boolean,
        [`--${COMMIT_TYPES[1]}`]: Boolean,
        [`--${COMMIT_TYPES[2]}`]: Boolean,
        [`--${COMMIT_TYPES[3]}`]: Boolean,
        [`--${COMMIT_TYPES[4]}`]: Boolean,
        [`--${COMMIT_TYPES[5]}`]: Boolean,
        [`--${COMMIT_TYPES[5]}`]: Boolean,
        [`--${COMMIT_TYPES[7]}`]: Boolean,
        [`--${COMMIT_TYPES[8]}`]: Boolean,
    }, { argv: (_a = _args.slice(2)) !== null && _a !== void 0 ? _a : [] });
    args; //?;
    return args;
}
exports.parseArgstoOptions = parseArgstoOptions;
async function promptOptions(args) {
    const questions = [];
    questions.push({
        type: 'list',
        choices: COMMIT_TYPES,
        name: 'typeCommit',
        message: 'Le type du commit ?',
        pageSize: 5,
        loop: false,
    }, { type: 'input', name: 'title', message: 'Le titre du commit ?' });
    return inquirer_1.default.prompt(questions);
}
exports.promptOptions = promptOptions;
function clitest(...args) {
    const options = parseArgstoOptions(...args);
    console.log(options);
}
exports.clitest = clitest;
