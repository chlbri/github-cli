module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
};

/* <F extends NFunction>\(\n  func: F,\n  actuals: PTupleOf<F, \d+>,\n  expecteds: Expecteds<F, \d+>,\n  uuid = false,\n\): ReturnGeneratorTests<\d+> \{

<F extends NFunction>\(\n  func: F,\n  actuals: TupleOf<Parameters<F>, \d+>,\n  expecteds: TupleOf<ThenArg<ReturnType<F>>, \d+>,\n  uuid = false,\n\) \{ */
