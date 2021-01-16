import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RoutingModule } from './routing.module';



@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RoutingModule
  ],
  exports: [
    RouterModule,
    NavbarComponent
  ]
})
export class CoreModule { }
