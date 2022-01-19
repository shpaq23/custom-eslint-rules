import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgChangesExample1 } from 'src/app/ng-changes/ng-changes-example-1';
import { NgChangesExample2 } from 'src/app/ng-changes/ng-changes-example-2';
import { NgChangesExample3 } from 'src/app/ng-changes/ng-changes-example-3';
import { OnPushExample1 } from 'src/app/on-push/on-push-example-1';
import { NgChangesExample6 } from 'src/app/ng-changes/ng-changes-example-6';
import { NgChangesExample7 } from 'src/app/ng-changes/ng-changes-example-7';
import { NgChangesExample4 } from 'src/app/ng-changes/ng-changes-example-4';
import { NgChangesExample5 } from 'src/app/ng-changes/ng-changes-example-5';
import { NgChangesExample10 } from 'src/app/ng-changes/ng-changes-example-10';
import { NgChangesExample8 } from 'src/app/ng-changes/ng-changes-example-8';
import { NgChangesExample9 } from 'src/app/ng-changes/ng-changes-example-9';

@NgModule({
	declarations: [
		AppComponent,
		NgChangesExample1,
		NgChangesExample2,
		NgChangesExample3,
		NgChangesExample4,
		NgChangesExample5,
		NgChangesExample6,
		NgChangesExample7,
		NgChangesExample8,
		NgChangesExample9,
		NgChangesExample10,
		OnPushExample1
	],
	imports: [
		BrowserModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
