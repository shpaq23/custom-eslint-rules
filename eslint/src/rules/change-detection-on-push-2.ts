import { createEslintRule } from '../utils/create-eslint-rule';

const RULE_NAME = 'change-detection-on-push';
type MessageIds = 'componentOnPushRequired';
type Options = [];

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
			componentOnPushRequired: 'Component ChangeDetection strategy should be set to ChangeDetectionStrategy.OnPush()',
		}
	},
	defaultOptions: [],
	create: (context) => {
		return {};
	}
});
