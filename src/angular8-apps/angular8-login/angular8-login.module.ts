import {FormsModule} from '@angular/forms';
import {Angular8LoginComponent} from './angular8-login.component';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    Angular8LoginComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: Angular8LoginComponent,
      }
    ]),
  ],
  providers: []
})
export class Angular8LoginModule {
}
