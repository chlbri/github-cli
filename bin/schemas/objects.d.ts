export declare const questionsGitComit: {
    readonly typeCommit: {
        readonly type: "list";
        readonly choices: ["build", "chore", "ci", "docs", "feat", "fix", "perf", "refactor", "revert", "style", "test"];
        readonly name: "typeCommit";
        readonly message: "Le type du commit ?";
        readonly pageSize: 4;
        readonly loop: false;
    };
    readonly title: {
        readonly type: "input";
        readonly name: "title";
        readonly message: "Le titre du commit ?";
    };
    readonly description: {
        readonly type: "input";
        readonly name: "description";
        readonly message: "Une petite description ?";
    };
};
export declare const questionGitPublish: {
    readonly dev: {
        readonly type: "input";
        readonly default: "dev";
        readonly message: "The current branch ?";
        readonly name: "dev";
    };
    readonly prod: {
        readonly type: "input";
        readonly default: "main";
        readonly message: "The prod/publish branch ?";
        readonly name: "prod";
    };
};
