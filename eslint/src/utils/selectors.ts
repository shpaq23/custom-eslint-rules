export const ANY_ANGULAR_CLASS_DECORATOR =
	'ClassDeclaration > Decorator:matches(' +
	'[expression.callee.name="Component"], ' +
	'[expression.callee.name="Directive"], ' +
	'[expression.callee.name="Pipe"], ' +
	'[expression.callee.name="Injectable"], ' +
	'[expression.callee.name="NgModule"])';

export function getMethodSelector(methodName: string): string {
	return `MethodDefinition[key.name=${methodName}]`;
}
