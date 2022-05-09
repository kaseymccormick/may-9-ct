import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  all_habits,
  EHabitGoalUnits,
  EHabitTrackedAs,
  IHabit,
  IUsers_habits,
  users_inital_habits,
} from '../fake-data';

@Component({
  selector: 'app-ct-user-habit-detail',
  templateUrl: './ct-user-habit-detail.component.html',
  styleUrls: ['./ct-user-habit-detail.component.css'],
})
export class CtUserHabitDetailComponent implements OnInit {
  habit: IUsers_habits;
  habitDateArray: Array<any> = [];
  ENUMHabitTrackedAs = EHabitTrackedAs;
  ENUMGoalUnits = EHabitGoalUnits;
  constructor(public route: ActivatedRoute, public _router: Router) {}

  ngOnInit() {
    const habit_id = this.route.snapshot.paramMap.get('id');
    this.habit = users_inital_habits.find(
      (habit) => habit.habit._id === habit_id
    );
    this.fillDateArray();
  }
  fillDateArray() {
    this.habit.habit_days.forEach((habitDay) =>
      this.habitDateArray.push(habitDay.date.getDate().toString())
    );
  }
  habitSettings() {
    this._router.navigate([
      `user/add-habit/${this.habit.habit._id}/habit-settings/${this.habit.tracking_option_id._id}`,
    ],
    { queryParams: { status: 'edit' }});
  }
}
