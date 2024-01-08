console.log(process);

const { SHELL, HOMEBREW_PREFIX, npm_lifecycle_script } = process.env;

console.table({ SHELL, HOMEBREW_PREFIX, npm_lifecycle_script });