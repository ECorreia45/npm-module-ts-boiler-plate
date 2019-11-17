const fs = require('fs');
const util = require('util');

readFile = util.promisify(fs.readFile);
writeFile = util.promisify(fs.writeFile);

readFile('./README.md', 'utf8')
  .then(readmeFile => {
    const newFile = readmeFile.replace(
      /https:\/\/www.npmjs.com\/package\/MODULE_NAME/g,
      'https://github.com/GITHUB_USER_NAME/MODULE_NAME/tree/DOCUMENTATION_BRANCH');
    return writeFile('README.md', newFile);
  })
  .then(() => {
    console.log('README.MD changed for github SUCCESSFULLY!');
  })
  .catch(console.error);
