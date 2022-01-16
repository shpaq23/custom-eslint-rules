import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
	selector: 'ng-changes-example-1',
	template: '{{ bookName }} - {{ authorName }}',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgChangesExample1 implements OnChanges {

	@Input()
	bookName: string;

	@Input()
	authorName: string;

	ngOnChanges(changes: SimpleChanges) {
		if (changes.bookName && changes.bookName.currentValue) {
			this.bookName = this.bookName.toUpperCase();
		}
		if (changes.authorName && changes.authorName.currentValue) {
			this.authorName = this.authorName.toUpperCase();
		}
	}
}
