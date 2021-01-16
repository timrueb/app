import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeComponent } from './resume.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { StageComponent } from './components/stage/stage.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: ResumeComponent
  }
]

@NgModule({
  declarations: [ResumeComponent, TimelineComponent, StageComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class ResumeModule { }
