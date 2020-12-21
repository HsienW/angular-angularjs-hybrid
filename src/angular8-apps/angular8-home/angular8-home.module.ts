import {FormsModule} from '@angular/forms';
import {Angular8HomeComponent} from './angular8-home.component';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    Angular8HomeComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: Angular8HomeComponent,
      }
    ]),
  ],
  providers: []
})
export class Angular8HomeModule {
}
