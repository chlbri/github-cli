export declare const commitTypeSchema: import("zod").ZodUnion<[import("zod").ZodLiteral<"build">, import("zod").ZodLiteral<"chore">, import("zod").ZodLiteral<"ci">, import("zod").ZodLiteral<"docs">, import("zod").ZodLiteral<"feat">, import("zod").ZodLiteral<"fix">, import("zod").ZodLiteral<"perf">, import("zod").ZodLiteral<"refactor">, import("zod").ZodLiteral<"revert">, import("zod").ZodLiteral<"style">, import("zod").ZodLiteral<"test">]>;
export declare const COMMIT_TYPES: ["build", "chore", "ci", "docs", "feat", "fix", "perf", "refactor", "revert", "style", "test"];
export declare const PARAMS: {
    readonly path: {
        readonly param: "--path";
        readonly alias: "-p";
    };
    readonly typeCommit: {
        readonly param: "--typeCommit";
        readonly alias: "-tc";
    };
    readonly title: {
        readonly param: "--title";
        readonly alias: "-t";
    };
    readonly description: {
        readonly param: "--description";
        readonly alias: "-d";
    };
    readonly dev: {
        readonly param: "--dev";
    };
    readonly prod: {
        readonly param: "--prod";
        readonly alias: "-p";
    };
};
