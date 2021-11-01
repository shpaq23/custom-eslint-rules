import { ESLintUtils } from '@typescript-eslint/experimental-utils';

export const createEslintRule = ESLintUtils.RuleCreator(
	(ruleName) => ruleName
);
