# @selfage/test_runner

## Install

`npm install @selfage/puppeteer_test_runner`

## Overview

Written in TypeScript and compiled to ES6 with inline source map & source. See [@selfage/tsconfig](https://www.npmjs.com/package/@selfage/tsconfig) for full compiler options. Provides a simple test runner that makes each test file itself an exectuable file, executed by `@selfage/puppeteer_test_executor`.

## Test runner for Puppeteer test executor environment

The API to write tests are the same as [@selfage/test_runner](https://github.com/selfage/test_runner/tree/main), except you need to do `import { TEST_RUNNER } from "@selfage/puppeteer_test_runner";`.

```TypeScript
import { TEST_RUNNER } from "@selfage/puppeteer_test_runner";

TEST_RUNNER.run({
  // ...
  // Note this file is run in browser context with an empty HTML page.
  // So you have to make sure that partially created DOM trees are appended to
  // HTML body and also will be cleaned up between test cases.
});
```

In order to run the test file, you need to first bundle the file as the main file, install `@selfage/puppeteer_test_executor`, and then do `$ pexe your_test_file`.
