"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.__publish = exports.__producePublishQuestions = void 0;
const arg_1 = __importDefault(require("arg"));
const immer_1 = require("immer");
const inquirer_1 = __importDefault(require("inquirer"));
const string_1 = require("../schemas/string");
const objects_1 = require("./../schemas/objects");
const __commit_1 = require("./__commit");
function __producePublishQuestions() {
    // #region Config
    var _a;
    const { questions: _questions, name, email, _isCommitted, description, title, typeCommit, } = (0, __commit_1.__produceCommitQuestions)();
    const args = (0, arg_1.default)({
        [string_1.PARAMS.dev.param]: String,
        [string_1.PARAMS.prod.param]: String,
        [string_1.PARAMS.prod.alias]: string_1.PARAMS.prod.param,
    });
    // #region Variables
    const dev = args[string_1.PARAMS.dev.param];
    const prod = (_a = args[string_1.PARAMS.prod.param]) !== null && _a !== void 0 ? _a : args[string_1.PARAMS.prod.alias];
    // #endregion
    // #endregion
    if (!dev) {
        _questions.push(objects_1.questionGitPublish.dev);
    }
    if (!prod) {
        _questions.push(objects_1.questionGitPublish.prod);
    }
    const questions = (0, immer_1.produce)(_questions, draft => {
        if (!_isCommitted) {
            const index = draft.findIndex(data => data.name == 'typeCommit');
            draft[index].message = `<You need to commit 😒!\n\n> ${draft[index].message}`;
        }
    });
    return {
        questions,
        name,
        email,
        _isCommitted,
        description,
        title,
        typeCommit,
        dev,
        prod,
    };
}
exports.__producePublishQuestions = __producePublishQuestions;
async function __publish() {
    const { questions, name, email, _isCommitted, dev, prod, title, typeCommit, description, } = __producePublishQuestions();
    if (_isCommitted) {
        console.log('You need to commit 😒!\n');
    }
    const answers = {
        dev,
        prod,
        title,
        typeCommit,
        description,
        ...(await inquirer_1.default.prompt(questions)),
        name,
        email,
        _isCommitted,
    };
    return answers;
}
exports.__publish = __publish;
