import type { TSESTree } from '@typescript-eslint/experimental-utils';
import { createEslintRule } from '../utils/create-eslint-rule';
import * as utils from '../utils/utils';

const RULE_NAME = 'change-detection-on-push';
type MessageIds = 'componentOnPushRequired';
type Options = [];
const selector =
	'ClassDeclaration > Decorator[expression.callee.name="Component"]';


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
		return {
			[selector](node: TSESTree.Decorator) {
				const changeDetectionExpression: TSESTree.MemberExpression = utils.getDecoratorPropertyValueMemberExpression(node, 'changeDetection');
				if (changeDetectionExpression && utils.isIdentifier(changeDetectionExpression.property) && changeDetectionExpression.property.name === 'OnPush') {
					return;
				}

				context.report({
					messageId: 'componentOnPushRequired',
					loc: utils.getLocation(node)
				});
			}
		};
	}
});
