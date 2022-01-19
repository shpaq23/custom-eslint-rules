import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
	selector: 'ng-changes-example-3',
	template: '{{ catName }} - {{ dogName }}',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgChangesExample9 implements OnChanges {

	@Input()
	catName: string;

	@Input()
	dogName: string;

	ngOnChanges(changes: SimpleChanges) {
		if (changes.catName && changes.catName.currentValue) {
			this.catName = this.catName.toUpperCase();
		}
		if (changes.dogName && changes.dogName.currentValue) {
			this.dogName = this.dogName.toUpperCase();
		}
	}
}
