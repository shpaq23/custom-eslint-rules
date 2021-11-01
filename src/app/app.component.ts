import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
	selector: 'app-root',
	template: `<h1>Hello World</h1>`,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

	constructor(private appService: AppService) {
	}

	ngOnInit() {
		this.appService = {};
	}
}
