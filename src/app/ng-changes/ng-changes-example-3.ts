import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { NgChanges } from 'src/app/utils/NgChanges';

@Component({
	selector: 'ng-changes-example-3',
	template: '{{ catName }} - {{ dogName }}',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgChangesExample3 implements OnChanges {

	@Input()
	catName: string;

	@Input()
	dogName: string;

	ngOnChanges(changes: NgChanges<NgChangesExample3>) {
		if (changes.catName && changes.catName.currentValue) {
			this.catName = this.catName.toUpperCase();
		}
		if (changes.dogName && changes.dogName.currentValue) {
			this.dogName = this.dogName.toUpperCase();
		}
	}
}
