import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  all_habits,
  EHabitGoalUnits,
  EHabitMeasuredAs,
  EHabitTrackedAs,
  users_available_habits,
  users_inital_habits,
} from '../fake-data';

@Component({
  selector: 'app-ct-user',
  templateUrl: './ct-user.component.html',
  styleUrls: ['./ct-user.component.css'],
})
export class CtUserComponent implements OnInit {
  users_habits = users_inital_habits; // this would be an observable or input in real app
  available_habits = users_available_habits;
  constructor(private _router: Router, public fb: FormBuilder) {}
  ENUMTrackedAs = EHabitTrackedAs;
  ENUMMeasuredAs = EHabitMeasuredAs;
  ENUMGoalUnits = EHabitGoalUnits;
  form: FormGroup;

  ngOnInit() {
    this.buildForm();
  }
  buildForm() {
    // get localdata, find todays sentance
    this.form = this.fb.group({
      journal_sentance: [null, Validators.required],
    });
  }
  showHabitDetail(habit_id: string) {
    this._router.navigate(['/habit-detail', habit_id]);
  }
  addHabit() {
    this._router.navigate(['/user/add-habit']);
  }
  calculateGoalButtons(user_set_goal: number): Array<string> {
    const btnsArray = [];
    for (var i = 1; i <= user_set_goal; i++) {
      btnsArray.push(i);
    }
    return btnsArray;
  }
  completeHabit(habit) {
    // open modal
    // add note
    // save
  }
  completeFruitVegtable(event) {
    event.srcElement.classList.remove('btn-primary');
    event.srcElement.classList.add('btn-success');
    console.log(event.srcElement);
    event.srcElement.setAttribute('disabled', true); // WE have to disable through attribute to get the right color
    document.getElementById('24thfruit').classList.add('day-circle--success'); // this is demo code to get it to show, not how we'll do in real app
    this.increaseStreakNumber(event);
  }
  saveJournalSentance(event) {
    document.getElementById('24thJournal').classList.add('day-circle--success'); // this is demo code to get it to show, not how we'll do in real app
    event.srcElement.classList.remove('btn-primary');
    event.srcElement.classList.add('btn-success');
    // event.srcElement.setAttribute('disabled', true); // WE have to disable through attribute to get the right color
    this.increaseStreakNumber(event);
    document.getElementById('24thJournalButton').innerHTML = 'Update';
    // save sentance to localmemory
  }
  increaseStreakNumber(event) {
    const spanHTML =
      event.srcElement.parentNode.parentNode.parentNode.parentNode.parentNode
        .firstChild.firstChild.lastChild.innerHTML;

    event.srcElement.parentNode.parentNode.parentNode.parentNode.parentNode.firstChild.firstChild.lastChild.innerHTML =
      Number(Number(spanHTML) + 1);
  }
  showDetails(elementId: string) {
    document.getElementById(elementId).classList.toggle('d-none');
  }
}
