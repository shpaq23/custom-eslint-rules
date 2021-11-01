import type { TSESTree } from '@typescript-eslint/experimental-utils';
import { RuleContext, RuleFix, RuleFixer } from '@typescript-eslint/experimental-utils/dist/ts-eslint';
import { createEslintRule } from '../utils/create-eslint-rule';
import { ANY_ANGULAR_CLASS_DECORATOR } from '../utils/selectors';
import * as utils from '../utils/utils';

export const RULE_NAME = 'readonly-injectables';
export type MessageIds = 'readonlyInjectablesRequired';
export type Options = [];

export default createEslintRule<Options, MessageIds>({
	name: RULE_NAME,
	meta: {
		type: 'problem',
		docs: {
			description: 'force class injectables to be readonly if they are private/public/protected',
			recommended: 'error'
		},
		fixable: 'code',
		schema: [],
		messages: {
			readonlyInjectablesRequired: 'The class injectables should be declared with keyword "readonly" if they are private/protected/public.'
		}
	},
	defaultOptions: [],
	create: (context: Readonly<RuleContext<MessageIds, Options>>) => {
		return {
			[ANY_ANGULAR_CLASS_DECORATOR](node: TSESTree.Decorator) {
				const classDeclaration: TSESTree.ClassDeclaration = utils.getClassDeclarationFromDecorator(node);
				const constructor: TSESTree.MethodDefinition = utils.getConstructorFromClassDeclaration(classDeclaration);

				if (!constructor) {
					return;
				}

				const parameters: Array<TSESTree.TSParameterProperty> = utils.getParameterPropertiesFromMethodDefinition(constructor);
				if (!Array.isArray(parameters) || parameters.length === 0) {
					return;
				}


				parameters.forEach(parameter => resolveParameter(parameter, context));

			}
		}
	}
});

function resolveParameter(parameter: TSESTree.TSParameterProperty, context: Readonly<RuleContext<MessageIds, Options>>): void {
	const isPublic = utils.isParameterPropertyAccessibilityNamed(parameter, 'public');
	const isPrivate = utils.isParameterPropertyAccessibilityNamed(parameter, 'private');
	const isProtected = utils.isParameterPropertyAccessibilityNamed(parameter, 'protected');

	if (!isPublic && !isPrivate && !isProtected) {
		return;
	}

	if (utils.isParameterPropertyReadonly(parameter)) {
		return;
	}

	context.report({
		messageId: 'readonlyInjectablesRequired',
		loc: parameter.loc,
		fix: (fixer: RuleFixer) => {
			const identifier = parameter.parameter
			const fixers: Array<RuleFix> = [
				fixer.insertTextBefore(identifier, 'readonly ')
			];
			return fixers;
		}
	});

}
