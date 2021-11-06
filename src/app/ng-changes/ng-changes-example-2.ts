import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { NgChanges } from 'src/app/utils/NgChanges';

@Component({
	selector: 'ng-changes-example-2',
	template: '{{ carName }} - {{ engineName }}',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgChangesExample2 implements OnChanges {

	@Input()
	carName: string;

	@Input()
	engineName: string;

	ngOnChanges(changes: NgChanges<NgChangesExample2>) {
		if (changes.carName && changes.carName.currentValue) {
			this.carName = this.carName.toUpperCase();
		}
		if (changes.engineName && changes.engineName.currentValue) {
			this.engineName = this.engineName.toUpperCase();
		}
	}
}
