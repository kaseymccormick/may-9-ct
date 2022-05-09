import { NgModule } from '@angular/core';
import { CtUserRoutingModule } from './ct-user-routing.module';
import { CtUserComponent } from './ct-user.component';
import { CtUserAddHabitComponent } from '../ct-user-add-habit/ct-user-add-habit.component';
import { CtUserAddHabitDetailComponent } from '../ct-user-add-habit-detail/ct-user-add-habit-detail.component';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from '../calendar/calendar.component';
import { CtUserHabitDetailComponent } from '../ct-user-habit-detail/ct-user-habit-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CtUserAddHabitDetailSettingsComponent } from '../ct-user-add-habit-detail-settings/ct-user-add-habit-detail-settings.component';

@NgModule({
  imports: [CommonModule, CtUserRoutingModule, ReactiveFormsModule],
  declarations: [
    CtUserComponent,
    CtUserAddHabitDetailComponent,
    CtUserAddHabitComponent,
    CalendarComponent,
    CtUserHabitDetailComponent,
    CtUserAddHabitDetailSettingsComponent,
  ],
  exports: [
    CtUserComponent,
    CtUserAddHabitDetailComponent,
    CtUserAddHabitComponent,
    CalendarComponent,
    CtUserHabitDetailComponent,
    CtUserAddHabitDetailSettingsComponent,
  ],
})
export class CtUserModule {}
