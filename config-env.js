const fs = require('fs');
// This is good for local dev environments, when it's better to
// store a projects environment variables in a .gitignore'd file
require('dotenv').config();

function getEnvironmentVariable(key, _default = '') { return process.env[key] || _default; }

function createEnvironementFile() {
  return `module.exports = environment = {
  production: true,
  host: '${getEnvironmentVariable('DATABASE_HOST')}',
  user: '${getEnvironmentVariable('DATABASE_USER')}',
  password: '${getEnvironmentVariable('DATABASE_PASSWORD')}',
  database: '${getEnvironmentVariable('DATABASE_NAME')}',
  port: ${getEnvironmentVariable('DATABASE_PORT')},
  ssl: true
};
`;
}

const environment = getEnvironmentVariable('ENVIRONMENT');
const environmentFile = createEnvironementFile();

console.log(`
  ENVIRONMENT -> ${environment}
  ---
  ${environmentFile}
`);

fs.writeFile(`./src/environments/environment.prod.js`, environmentFile, (err) => {
  if (err) {
    console.log(err);
  }
});
