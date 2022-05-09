import { Component, Input, OnInit } from '@angular/core';
import moment = require('moment');

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent implements OnInit {
  @Input() markedDates: Array<string>;
  @Input() partialPossible: boolean;
  calendarSettings: any;
  calendarTitle: string;
  constructor() {}

  ngOnInit() {
    console.log('passed dates', this.markedDates);
    console.log('partial', this.partialPossible);
    this.calendarSettings = {
      date: moment().set('date', 1),
      today: moment(),
    };
    this.displayCalendar(this.calendarSettings);
  }

  incrementMonth() {
    this.calendarSettings.date.add(1, 'Months');
    console.log(`incremented to ${this.calendarSettings.date}`);
    this.displayCalendar(this.calendarSettings);
  }

  decrementMonth() {
    this.calendarSettings.date.subtract(1, 'Months');
    console.log(`decremented to ${this.calendarSettings.date}`);
    this.displayCalendar(this.calendarSettings);
  }

  displayCalendar(calendarSettings) {
    const calendar = document.querySelector('.calendar-grid');

    this.calendarTitle = calendarSettings.date.format('MMMM YYYY');
    const daysInMonth = calendarSettings.date.endOf('Month').date();
    const firstDay = calendarSettings.date.startOf('Month').isoWeekday();
    document.querySelectorAll('.calendar-day').forEach((e) => e.remove());
    for (let day = 1; day < firstDay; day++) {
      let calendarDay = document.createElement('div');
      calendarDay.classList.add('calendar-day');
      calendar.appendChild(calendarDay);
    }
    for (let day = 1; day <= daysInMonth; day++) {
      let calendarDay = document.createElement('div');
      calendarDay.classList.add('calendar-day');
      if (
        calendarSettings.today.month() == calendarSettings.date.month() &&
        calendarSettings.today.year() == calendarSettings.date.year()
      ) {
        if (calendarSettings.today.date() == day) {
          calendarDay.classList.add('current-day');
        }
      }
      if (calendarSettings.date.month) {
        console.log('this.marked', this.markedDates.includes(day.toString()));
        if (this.markedDates.includes(day.toString())) {
          calendarDay.classList.add('success-circle');
        }
      }
      calendarDay.innerHTML =
        '<span class="text-center">' + day.toString() + '</span>';
      calendar.appendChild(calendarDay);
    }
    const daysOver7 = (firstDay + daysInMonth - 1) % 7;
    if (daysOver7) {
      for (let day = 0; day < 7 - daysOver7; day++) {
        let calendarDay = document.createElement('div');
        calendarDay.classList.add('calendar-day');
        calendar.appendChild(calendarDay);
      }
    }
  }
}
