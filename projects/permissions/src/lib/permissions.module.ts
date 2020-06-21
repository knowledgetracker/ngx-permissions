import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { PermissionsComponent } from './permissions.component';
import { NgxPermissionsDirective } from './directives/permissions.directive';


@NgModule({
  declarations: [PermissionsComponent, NgxPermissionsDirective],
  imports: [
  ],
  schemas:[NO_ERRORS_SCHEMA],
  exports: [PermissionsComponent, NgxPermissionsDirective]
})
export class PermissionsModule { }
