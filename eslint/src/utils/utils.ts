import { AST_NODE_TYPES, TSESTree } from '@typescript-eslint/experimental-utils';

export function getClassDeclarationFromDecorator(node: TSESTree.Decorator): TSESTree.ClassDeclaration {
	const parent = node.parent;

	if (!isClassDeclaration(parent)) {
		return;
	}
	return parent;
}

export function getConstructorFromClassDeclaration(node: TSESTree.ClassDeclaration): TSESTree.MethodDefinition {
	const body: TSESTree.ClassBody = node.body;

	if (!body) {
		return;
	}

	const classElements: Array<TSESTree.ClassElement> = body.body;

	if (!Array.isArray(classElements) || classElements.length === 0) {
		return;
	}

	const constructorMethodDefinition: TSESTree.ClassElement = classElements
		.filter(classElement => isMethodDefinition(classElement))
		.find(methodDefinition => (methodDefinition as TSESTree.MethodDefinition).kind === 'constructor');

	if (!constructorMethodDefinition || !isMethodDefinition(constructorMethodDefinition)) {
		return;
	}

	return constructorMethodDefinition;
}

export function getParameterPropertiesFromMethodDefinition(node: TSESTree.MethodDefinition): Array<TSESTree.TSParameterProperty> {
	const value: TSESTree.FunctionExpression = node.value as TSESTree.FunctionExpression;

	if (!isFunctionExpression(value)) {
		return undefined;
	}

	return (value.params as Array<TSESTree.TSParameterProperty>)
		.filter((node: TSESTree.TSParameterProperty) => isParameterProperty(node));
}

export function isParameterPropertyAccessibilityNamed(node: TSESTree.TSParameterProperty, accessibility: string): boolean {
	if (!isParameterProperty(node)) {
		return;
	}

	return node.accessibility === accessibility;
}

export function isParameterPropertyReadonly(node: TSESTree.TSParameterProperty): boolean {
	if (!isParameterProperty(node)) {
		return;
	}

	return node.readonly;
}


export function isClassDeclaration(node: TSESTree.Node): node is TSESTree.ClassDeclaration {
	return node.type === AST_NODE_TYPES.ClassDeclaration;
}

export function isMethodDefinition(node: TSESTree.Node): node is TSESTree.MethodDefinition {
	return node.type === AST_NODE_TYPES.MethodDefinition;
}

export function isFunctionExpression(node: TSESTree.Node): node is TSESTree.FunctionExpression {
	return node.type === AST_NODE_TYPES.FunctionExpression;
}

export function isParameterProperty(node: TSESTree.Node): node is TSESTree.TSParameterProperty {
	return node.type === AST_NODE_TYPES.TSParameterProperty;
}
