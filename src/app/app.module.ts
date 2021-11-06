import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgChangesExample1 } from 'src/app/ng-changes/ng-changes-example-1';
import { NgChangesExample2 } from 'src/app/ng-changes/ng-changes-example-2';
import { NgChangesExample3 } from 'src/app/ng-changes/ng-changes-example-3';
import { OnPushExample1 } from 'src/app/on-push/on-push-example-1';

@NgModule({
	declarations: [
		AppComponent,
		NgChangesExample1,
		NgChangesExample2,
		NgChangesExample3,
		OnPushExample1
	],
	imports: [
		BrowserModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
