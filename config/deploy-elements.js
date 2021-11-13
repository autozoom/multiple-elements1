const fs = require('fs-extra');
const concat = require('concat');
const { rename } = require('fs');

const what = process.argv[2];
const distWhat = 'dist/' + what + '/';

(async function build() {
  await fs.ensureDir('_custom-element-html-client/' + what);
  await fs.copy(distWhat, '_custom-element-html-client/' + what);
})();
