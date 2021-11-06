import type { TSESTree } from '@typescript-eslint/experimental-utils';
import { createEslintRule } from '../utils/create-eslint-rule';

export const RULE_NAME = 'change-detection-on-push';
export type MessageIds = 'onPushComponentChangeDetectionRequired';
export type Options = [];

export default createEslintRule<Options, MessageIds>({
	name: RULE_NAME,
	meta: {
		type: 'problem',
		docs: {
			description: 'enforce component change detection strategy OnPush',
			recommended: 'error'
		},
		schema: [],
		messages: {
			onPushComponentChangeDetectionRequired: 'Component ChangeDetection strategy should be set to ChangeDetectionStrategy.OnPush()',
		}
	},
	defaultOptions: [],
	create: (context) => {
		return {};
	}
});
