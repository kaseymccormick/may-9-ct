import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { all_habits, IHabit, IHabitTrackingOptions } from '../fake-data';

@Component({
  selector: 'app-ct-user-add-habit-detail-settings',
  templateUrl: './ct-user-add-habit-detail-settings.component.html',
  styleUrls: ['./ct-user-add-habit-detail-settings.component.css'],
})
export class CtUserAddHabitDetailSettingsComponent implements OnInit {
  habit: IHabit;
  tracking_option: IHabitTrackingOptions;
  form: FormGroup;
  status: string;
  constructor(public route: ActivatedRoute, public fb: FormBuilder) {}

  ngOnInit() {
    this.status = this.route.snapshot.queryParams.status;
    console.log('params', this.status);
    const habit_id = this.route.snapshot.paramMap.get('id');
    const tracking_id = this.route.snapshot.paramMap.get('tracking_option_id');
    this.habit = all_habits.find((habit) => habit._id === habit_id);
    this.tracking_option = this.habit.tracking_options.find(
      (option) => option._id === tracking_id
    );
    this.buildForm();
  }
  buildForm() {
    this.form = this.fb.group({
      goal_amount: [this.tracking_option.goal_reccomended],
    });
  }
  get goal_amount(): AbstractControl {
    return this.form.get('goal_amount');
  }
  addHabit() {
    // save habit to localmemory?
    //    route to user view with new habit.
  }
}
