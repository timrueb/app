import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { HeadingComponent } from './components/heading/heading.component';
import { ModalComponent } from './components/modal/modal.component';
import { ModalTriggerDirective } from './directives/modal-trigger.directive';
import { ToggleButtonComponent } from './components/toggle-button/toggle-button.component';



@NgModule({
  declarations: [
    ButtonComponent,
    HeadingComponent,
    ToggleButtonComponent,
    ModalComponent,
    ModalTriggerDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonComponent,
    HeadingComponent,
    ToggleButtonComponent,
    ModalComponent,
    ModalTriggerDirective
  ]
})
export class SharedModule { }
