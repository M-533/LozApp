import { Component } from '@angular/core';
import { nestedOrders, Orders } from './lists.model';

@Component({
  selector: 'app-manufacturing',
  templateUrl: './manufacturing.component.html',
  styleUrls: ['./manufacturing.component.scss'],
})
export class ManufacturingComponent {
  hideIcon = false;
  manufacHead = 'flowChart';
  alertsheader = true;
  jobOrders = true;
  bigBtn = false;
  flowChart = true;
  showBar = true;

  orders = [
    new Orders(
      2533,
      new Date(),
      'Mort wissam',
      '9 tons ',
      'gold',
      854019,
      true
    ),
    new Orders(
      2533,
      new Date(),
      'Mort wissam',
      '9 tons ',
      'gold',
      854019,
      true
    ),
    new Orders(
      2533,
      new Date(),
      'Mort wissam',
      '9 tons ',
      'gold',
      854019,
      true
    ),
    new Orders(
      2533,
      new Date(),
      'Mort wissam',
      '9 tons ',
      'gold',
      854019,
      true
    ),
    new Orders(
      2533,
      new Date(),
      'Mort wissam',
      '9 tons ',
      'gold',
      854019,
      true
    ),
  ];

  nestedOrders = [
    new nestedOrders(
      'oil',
      '100kg | 62kg',
      'function',
      new Date(),
      '40Kg | 211kg',
      'Mort Wissam'
    ),
    new nestedOrders(
      'oil',
      '100kg | 62kg',
      'function',
      new Date(),
      '40Kg | 211kg',
      'Mort Wissam'
    ),
    new nestedOrders(
      'oil',
      '100kg | 62kg',
      'function',
      new Date(),
      '40Kg | 211kg',
      'Mort Wissam'
    ),
    new nestedOrders(
      'oil',
      '100kg | 62kg',
      'function',
      new Date(),
      '40Kg | 211kg',
      'Mort Wissam'
    ),
    new nestedOrders(
      'oil',
      '100kg | 62kg',
      'function',
      new Date(),
      '40Kg | 211kg',
      'Mort Wissam'
    ),
  ];

  onFlowChart() {
    this.manufacHead = 'flowChart';
    this.flowChart = true;
  }

  onJobOrder() {
    this.flowChart = false;
    this.manufacHead = 'jobOrder';
    this.showBar = true;
  }

  onRoutes() {
    this.flowChart = false;
    this.manufacHead = 'routes';
    this.showBar = false;
  }

  onProcess() {
    this.flowChart = false;
    this.manufacHead = 'process';
    this.showBar = true;
  }
}
