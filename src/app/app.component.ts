import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  showDetails(elementId: string) {
    document.getElementById(elementId).classList.toggle('d-none');
  }
}
