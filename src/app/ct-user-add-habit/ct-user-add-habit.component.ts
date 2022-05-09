import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { all_habits, EHabitCategory, IHabit } from '../fake-data';

@Component({
  selector: 'app-ct-user-add-habit',
  templateUrl: './ct-user-add-habit.component.html',
  styleUrls: ['./ct-user-add-habit.component.css'],
})
export class CtUserAddHabitComponent implements OnInit {
  habit_list: IHabit[] = all_habits;
  nutrition_list: IHabit[] = [];
  fitness_list: IHabit[] = [];
  lifestyle_list: IHabit[] = [];

  constructor(public router: Router) {}

  ngOnInit() {
    this.sectionHabits();
  }
  sectionHabits() {
    this.habit_list.forEach((habit) => {
      switch (habit.category) {
        case EHabitCategory.NUTRITION:
          this.nutrition_list.push(habit);
          break;
        case EHabitCategory.FITNESS:
          this.fitness_list.push(habit);

          break;
        case EHabitCategory.LIFESTYLE:
          this.lifestyle_list.push(habit);

          break;
      }
    });
  }
  showDetails(css_id: string) {
    console.log('the id', css_id);
    document.getElementById(css_id).classList.toggle('d-none');
  }
  addHabitDetails(id: string) {
    console.log('the id', id);
    this.router.navigate([`/user/add-habit/${id}`]);
  }
}
