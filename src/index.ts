import { spawnSync } from "child_process";
import { execution, config } from "./config/env";

const browsers = execution.browsers.length ? execution.browsers : [config.browser.name];

const common = [
  "./src/features/*.feature",
  "--require-module",
  "ts-node/register",
  "--require",
  "./src/step-definitions/**/*.ts",
  "--require",
  "./src/utils/cucumber-timeout.ts",
  "-f",
  "json:./reports/report.json",
  "--format",
  "html:./reports/report.html",
  "--parallel",
  String(execution.parallel),
  "--retry",
  String(execution.retry),
  "--tags",
  "not @ignore",
];

const profiles: Record<string, string[]> = {
  smoke: [...common, "--tags", "@smoke"],
  regression: [...common, "--tags", "@regression"],
  login: [...common, "--tags", "@login"],
  contactUs: [...common, "--tags", "@contact-us"],
  signupReal: [...common, "--tags", "@signupReal"],
};

const profile = process.argv[2] ?? "smoke";

async function run() {
  for (const browserName of browsers) {
    console.log(`\n🚀 Running tests on: ${browserName}\n`);

    const args = [
      ...profiles[profile] ?? profiles.smoke,
      "--world-parameters",
      `{"browser":"${browserName}"}`,
    ];

    const result = spawnSync("npx", ["cucumber-js", ...args], {
      stdio: "inherit",
      shell: true,
    });

    if (result.status !== 0) {
      process.exit(result.status ?? 1);
    }
  }
}

run();
