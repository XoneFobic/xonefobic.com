import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(module => module.HomeModule),
    data: { animation: 'home' }
  },
  {
    path: 'experience',
    loadChildren: () => import('./experience/experience.module').then(module => module.ExperienceModule),
    data: { animation: 'experience' }
  },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled'
    })
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
