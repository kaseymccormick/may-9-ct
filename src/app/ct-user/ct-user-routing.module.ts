import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CtUserAddHabitDetailComponent } from '../ct-user-add-habit-detail/ct-user-add-habit-detail.component';
import { CtUserAddHabitComponent } from '../ct-user-add-habit/ct-user-add-habit.component';
import { CtUserHabitDetailComponent } from '../ct-user-habit-detail/ct-user-habit-detail.component';
import { CtUserComponent } from './ct-user.component';

export const routes: Routes = [
  {
    path: '',
    component: CtUserComponent,
  },
  // {
  //   path: 'habit-detail/:id',
  //   component: CtUserHabitDetailComponent,
  // },
  // {
  //   path: 'add-habit',
  //   component: CtUserAddHabitComponent,
  //   children: [
  //     {
  //       path: ':id',
  //       component: CtUserAddHabitDetailComponent,
  //     },
  //   ],
  // },
];

@NgModule({
  // imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class CtUserRoutingModule {}
