# and-components-poc

## How to contribute

Fork the repository.

Clone the fork to your local machine and add upstream remote:

```
git clone https://github.com/<your username>/and-components-poc.git
cd and-components-poc
git remote add upstream https://github.com/anasufana/and-components-poc.git
```

Install the dependencies with npm `npm install`

Create a new topic branch: `git checkout -b my-topic-branch`

Make changes, commit and push to your fork: `git push -u origin HEAD`

Go to the repository and make a Pull Request.

Make sure to have eslint and prettier plugins installed with your editor.

## Running locally

Start storybook `npm start`

Test components `npm test`
