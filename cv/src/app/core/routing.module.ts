import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('../home/home.module').then(mod => mod.HomeModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('../contact/contact.module').then(mod => mod.ContactModule)
  },
  {
    path: 'projects',
    loadChildren: () => import('../projects/projects.module').then(mod => mod.ProjectsModule)
  },
  {
    path: 'resume',
    loadChildren: () => import('../resume/resume.module').then(mod => mod.ResumeModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
