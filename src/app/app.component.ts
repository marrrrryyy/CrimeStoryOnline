import { getLocaleDayNames } from '@angular/common';
import { Component, Input } from '@angular/core';
import { StartComponent } from './start/start.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CrimeStoryOnline';
  namePlayer = "";

}
