import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { CtAdminComponent } from './ct-admin/ct-admin.component';
import { CtUserAddHabitDetailSettingsComponent } from './ct-user-add-habit-detail-settings/ct-user-add-habit-detail-settings.component';
import { CtUserAddHabitDetailComponent } from './ct-user-add-habit-detail/ct-user-add-habit-detail.component';
import { CtUserAddHabitComponent } from './ct-user-add-habit/ct-user-add-habit.component';

import { CtUserHabitDetailComponent } from './ct-user-habit-detail/ct-user-habit-detail.component';
import { CtUserComponent } from './ct-user/ct-user.component';
import { CtAdminModule } from './ct-admin/ct-admin.module';
export const routes: Routes = [
  {
    path: 'user',
    component: CtUserComponent,
    loadChildren: () =>
      from(import('./ct-user/ct-user.module').then((m) => m.CtUserModule)),
  },

  {
    path: 'user/add-habit',
    component: CtUserAddHabitComponent,
    loadChildren: () =>
      from(import('./ct-user/ct-user.module').then((m) => m.CtUserModule)),
  },
  {
    path: 'user/add-habit/:id',
    component: CtUserAddHabitDetailComponent,
    loadChildren: () =>
      from(import('./ct-user/ct-user.module').then((m) => m.CtUserModule)),
  },
  {
    path: 'user/add-habit/:id/habit-settings/:tracking_option_id',
    component: CtUserAddHabitDetailSettingsComponent,
    loadChildren: () =>
      from(import('./ct-user/ct-user.module').then((m) => m.CtUserModule)),
  },
  {
    path: 'habit-detail/:id',
    component: CtUserHabitDetailComponent,
  },
  {
    path: 'admin',
    component: CtAdminComponent,
  },
  {
    path: 'admin',
    component: CtAdminModule,
    loadChildren: () =>
      from(import('./ct-admin/ct-admin.module').then((m) => m.CtAdminModule)),
  },
  {
    path: '**',
    redirectTo: 'user',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
