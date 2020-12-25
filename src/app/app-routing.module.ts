import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {
    path: 'angular8/login',
    loadChildren: () => import('../angular8-apps/angular8-login/angular8-login.module').then(m => m.Angular8LoginModule)
  },
  {
    path: 'angular8/home',
    loadChildren: () => import('../angular8-apps/angular8-home/angular8-home.module').then(m => m.Angular8HomeModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,
      {
        paramsInheritanceStrategy: 'always',
        // useHash: false,
        // initialNavigation: false
      }
    )],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
