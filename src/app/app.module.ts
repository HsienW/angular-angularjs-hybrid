import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {UpgradeModule} from '@angular/upgrade/static';
import {AppRoutingModule} from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    UpgradeModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ],
  entryComponents: [
    AppComponent
  ]
})
export class AppModule {
  constructor(private upgrade: UpgradeModule) {
    if (document.getElementById('angular1-root')) {
      this.upgrade.bootstrap(document.querySelector('#angular1'), ['angular1']);
    }
  }
}
