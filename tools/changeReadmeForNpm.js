const fs = require('fs');
const util = require('util');

readFile = util.promisify(fs.readFile);
writeFile = util.promisify(fs.writeFile);

readFile('./README.md', 'utf8')
  .then(readmeFile => {
    const newFile = readmeFile.replace(
      /https:\/\/github.com\/GITHUB_USER_NAME\/MODULE_NAME\/tree\/DOCUMENTATION_BRANCH/g,
      'https://www.npmjs.com/package/MODULE_NAME');
    return writeFile('README.md', newFile);
  })
  .then(file => {
    console.log('README.MD changed for npm SUCCESSFULLY!', file);
  })
  .catch(console.error);
