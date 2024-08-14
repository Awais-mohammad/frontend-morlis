import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FoodMine';

  constructor(private router: Router) {}

  shouldShowHeader(): boolean {
    return this.router.url !== '/nothing-here';
  }
}
