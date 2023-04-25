import { exit, getArgv } from "@selfage/puppeteer_test_executor/helper";
import { TestRunner } from "@selfage/test_runner";

export let TEST_RUNNER = (function () {
  if (getArgv()) {
    return TestRunner.create(getArgv(), { from: "user" }, () => {
      exit();
    });
  } else {
    return undefined;
  }
})();
