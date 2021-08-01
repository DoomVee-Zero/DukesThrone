const Rule = {
  Level: {
    DISABLED: 0,
    WARNING: 1,
    ERROR: 2,
  },
  Applicable: {
    ALWAYS: "always",
    NEVER: "never",
  },
};

/**
 * Commit Message Structure:
 * <type>(<scope?>): <subject>
 *
 * <optional body>
 */

const Configuration = {
  rules: {
    "header-max-length": [Rule.Level.WARNING, Rule.Applicable.ALWAYS, 72],
    "header-case": [Rule.Level.WARNING, Rule.Applicable.ALWAYS, "lower-case"],
    "scope-case": [Rule.Level.WARNING, Rule.Applicable.ALWAYS, "lower-case"],
    "subject-case": [Rule.Level.WARNING, Rule.Applicable.ALWAYS, "lower-case"],
    "type-enum": [
      Rule.Level.ERROR,
      Rule.Applicable.ALWAYS,
      [
        "feat",
        "fix",
        "doc",
        "style",
        "refactor",
        "test",
        "revert",
        "bump",
        "del",
        "config",
        "infra",
      ],
    ],
    "type-case": [Rule.Level.WARNING, Rule.Applicable.ALWAYS, "lower-case"],
    "type-empty": [Rule.Level.ERROR, Rule.Applicable.NEVER],
  },
  helpUrl: "https://gist.github.com/turbo/efb8d57c145e00dc38907f9526b60f17",
};

module.exports = Configuration;
