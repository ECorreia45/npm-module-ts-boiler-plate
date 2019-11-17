This is a simple npm module typescript boilerplate
to make starting an npm module project simple.

Please modify /tools/*.js replacing:

GITHUB_USER_NAME
MODULE_NAME
DOCUMENTATION_BRANCH

These tools will help you change links in your README.md to work with npm or github pages in case where you write
links to inside the readme file


`npm run local`: compile and run your module in watch mode and applying linting rules
`npm run publish`: will automatically publish your current branch to npm. Make sure you are logged in with your npm. 
It will also run the tools to fix any github links to work with npm site.

Look into `package.json` scripts for more
