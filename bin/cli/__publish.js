"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.__publish = exports.__producePublishQuestions = void 0;
const arg_1 = __importDefault(require("arg"));
const inquirer_1 = __importDefault(require("inquirer"));
const string_1 = require("../schemas/string");
const objects_1 = require("./../schemas/objects");
const __commit_1 = require("./__commit");
function __producePublishQuestions() {
    // #region Config
    var _a;
    const { questions, name, email, _isCommitted } = (0, __commit_1.__produceCommitQuestions)();
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
        questions.push(objects_1.questionGitPublish.dev);
    }
    if (!prod) {
        questions.push(objects_1.questionGitPublish.prod);
    }
    return { questions, name, email, _isCommitted };
}
exports.__producePublishQuestions = __producePublishQuestions;
async function __publish() {
    const { questions, name, email, _isCommitted } = __producePublishQuestions();
    const answers = {
        ...(await inquirer_1.default.prompt(questions)),
        name,
        email,
        _isCommitted,
    };
    return answers;
}
exports.__publish = __publish;
