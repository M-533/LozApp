import { Component } from '@angular/core';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  currentActivity = 'functions';

  onFunction() {
    this.currentActivity = 'functions';
  }

  onRoute() {
    this.currentActivity = 'route';
  }

  onOrder() {
    this.currentActivity = 'order';
  }
}
