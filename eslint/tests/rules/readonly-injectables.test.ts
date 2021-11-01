import { RuleTester } from '@typescript-eslint/experimental-utils/dist/ts-eslint';
import rule, { MessageIds, RULE_NAME } from '../../src/rules/readonly-injectables';


const ruleTester: RuleTester = new RuleTester({
	// @ts-ignore
	parser: require.resolve('@typescript-eslint/parser')
});

const validStatements = [
`
@Component({
	selector: 'app-root',
	template: ''
})
export class AppComponent {

	constructor(private readonly appService: AppService) {
	}
}
`,
`
@Directive({
	selector: 'app-root-directive'
})
export class AppRootDirective {

	constructor(protected readonly appService: AppService) {
	}
}
`,
`
@Component({
	selector: 'app-root',
	template: ''
})
export class AppComponent {

	constructor(private readonly appService: AppService,
				protected readonly appService2: AppService2) {
	}
}
`,
`
export class SimpleClass {

	constructor(appService: AppService) {
	}
}
`,
`
@Component({
	selector: 'app-root',
	template: ''
})
export class AppComponent extends BaseComponent {

	constructor(elementRef: ElementRef) {
		super(elementRef);
	}
}
`
];

const invalidStatements = [
`
@Component({
	selector: 'app-root',
	template: ''
})
export class AppComponent {

	constructor(private appService: AppService) {
	}
}
`,
`
@Directive({
	selector: 'app-root-directive'
})
export class AppRootDirective {

	constructor(protected appService: AppService) {
	}
}
`,
`
@Component({
	selector: 'app-root',
	template: ''
})
export class AppComponent {

	constructor(private readonly appService: AppService,
				protected appService2: AppService2) {
	}
}
`
];

const messageId: MessageIds = 'readonlyInjectablesRequired';

ruleTester.run(RULE_NAME, rule, {
	valid: validStatements,
	invalid: [
		{ code: invalidStatements[0], errors: [{ messageId }], output: validStatements[0] },
		{ code: invalidStatements[1], errors: [{ messageId }], output: validStatements[1] },
		{ code: invalidStatements[2], errors: [{ messageId }], output: validStatements[2] }
	]
});
