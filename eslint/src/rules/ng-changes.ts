import type { TSESTree } from '@typescript-eslint/experimental-utils';
import { RuleFix } from '@typescript-eslint/experimental-utils/dist/ts-eslint';
import { RuleFixer } from '@typescript-eslint/experimental-utils/dist/ts-eslint/Rule';
import { createEslintRule } from '../utils/create-eslint-rule';
import { getMethodSelector } from '../utils/selectors';
import * as utils from '../utils/utils';


export const RULE_NAME = 'ng-changes';
export type MessageIds = 'ngChangesTypeRequired';
export type Options = [];

export default createEslintRule<Options, MessageIds>({
	name: RULE_NAME,
	meta: {
		type: 'suggestion',
		docs: {
			description: 'enforce ngOnChanges function parameter to be typed as NgChanges',
			recommended: 'error'
		},
		fixable: 'code',
		schema: [],
		messages: {
			ngChangesTypeRequired: `The changes parameter of ngOnChanges function should be typed as NgChanges<>`
		}
	},
	defaultOptions: [],
	create: (context) => {
		return {
			[getMethodSelector('ngOnChanges')](node: TSESTree.MethodDefinition) {
				const parameter: TSESTree.Identifier = utils.getMethodParameter(node, 'changes');
				const parameterType: TSESTree.TSTypeReference = parameter && utils.getMethodParameterType(parameter);
				const parameterTypeName: string = parameterType && utils.getMethodParameterTypeName(parameterType);
				if (!parameterType || parameterTypeName === 'NgChanges') {
					return;
				}
				const loc = utils.getLocation(node);
				context.report({
					messageId: 'ngChangesTypeRequired',
					loc: {
						...loc,
						start: { ...loc.start, column: loc.start.column + 1 }
					},
					fix: (fixer: RuleFixer) => {
						const program: TSESTree.Program = utils.getProgramFromNode(node);
						const classDeclaration: TSESTree.ClassDeclaration = utils.getClassDeclarationFromNode(node);
						const className: string | null = classDeclaration.id && classDeclaration.id.name;
						const addImportFixer: RuleFix = utils.getAddImportRuleFix('NgChanges', 'src/app/utils/NgChanges', program, fixer);
						const fixers: Array<RuleFix> = [
							fixer.replaceText(parameterType, 'NgChanges<' + className + '>')
						];

						if (addImportFixer) {
							fixers.push(addImportFixer);
						}

						return fixers;
					}
				});
			}
		};
	}
});
