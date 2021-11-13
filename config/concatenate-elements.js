const fs = require("fs-extra");
const concat = require("concat");
const { rename } = require("fs");

const what = process.argv[2];
const distWhat = "dist/" + what + "/";

(async function build() {
  const files = [
    distWhat + "runtime.js",
    distWhat + "polyfills.js",
    // distWhat + "scripts.js",
    // distWhat + "vendor.js",
    distWhat + "main.js",
  ];
  // await fs.ensureDir('_elements');
  await concat(files, distWhat + "/elements-bundle.js");
})();
