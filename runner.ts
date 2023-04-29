import { exit, getArgv } from "@selfage/puppeteer_test_executor_api";
import {
  Environment,
  TestCase,
  TestCaseResult,
  TestRunner,
  TestSet,
  TestSetResult,
} from "@selfage/test_runner";

export { Environment, TestCase, TestCaseResult, TestSet, TestSetResult };

export let TEST_RUNNER = (function () {
  if (getArgv()) {
    return TestRunner.create(getArgv(), { from: "user" }, () => {
      exit();
    });
  } else {
    return undefined;
  }
})();
