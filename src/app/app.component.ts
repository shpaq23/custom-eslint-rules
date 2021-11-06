import { ChangeDetectionStrategy, Component, OnChanges, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { NgChanges } from 'src/app/utils/NgChanges';

@Component({
	selector: 'app-root',
	template: `<h1>Hello World</h1>`,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit, OnChanges {

	constructor(private readonly appService: AppService) {
	}

	ngOnInit() {

	}
	
	ngOnChanges(changes: NgChanges<AppComponent>) {
		
	}
}
