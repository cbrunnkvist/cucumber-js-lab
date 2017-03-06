const common = [
  `--format-options '{"snippetInterface": "synchronous"}' --tags "not @ignored"`
].join(' ')

module.exports = {
  default: `${common}`,
  snippets: `${common} -f snippets`,
}
