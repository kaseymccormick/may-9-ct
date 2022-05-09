import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  all_habits,
  EHabitGoalUnits,
  IHabit,
  IHabitTrackingOptions,
  EHabitTrackedAs,
} from '../fake-data';

@Component({
  selector: 'app-ct-user-add-habit-detail',
  templateUrl: './ct-user-add-habit-detail.component.html',
  styleUrls: ['./ct-user-add-habit-detail.component.css'],
})
export class CtUserAddHabitDetailComponent implements OnInit {
  habit: IHabit;
  ENUMGoalUnits = EHabitGoalUnits;
  ENUMTrackedAs = EHabitTrackedAs;
  constructor(public route: ActivatedRoute, private _router: Router) {}

  ngOnInit() {
    const habit_id = this.route.snapshot.paramMap.get('id');
    this.habit = all_habits.find((habit) => habit._id === habit_id);
  }
  addHabit(tracking_option: IHabitTrackingOptions) {
    console.log('passed tracking option', tracking_option);
    if (tracking_option.tracked_as === this.ENUMTrackedAs.COMPLETION) {
      console.log('this is completion');
      // add habit to localstorage?
      // route to user with new habit showing
      this._router.navigate(['/user']);
    } else {
      console.log('not a completion habit');
      this._router.navigate([
        `/user/add-habit/${this.habit._id}/habit-settings/${tracking_option._id}`,
      ]);
    }
  }
}
