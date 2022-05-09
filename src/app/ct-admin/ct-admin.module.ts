import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CtAdminComponent } from './ct-admin.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [CtAdminComponent],
  exports: [CtAdminComponent],
})
export class CtAdminModule {}
