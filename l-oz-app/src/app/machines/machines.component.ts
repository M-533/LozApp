import { Component, ElementRef, ViewChild } from '@angular/core';
import { BigList } from './list.mpdel';

@Component({
  selector: 'app-machines',
  templateUrl: './machines.component.html',
  styleUrls: ['./machines.component.scss'],
})
export class MachinesComponent {
  machinesHead = 'info';
  hideIcon = false;
  statisCharts = 'over';
  listNav = true;

  historyList = [
    new BigList(200533, 'machine name ', new Date(), new Date(), false),
    new BigList(200533, 'machine name ', new Date(), new Date(), false),
    new BigList(200533, 'machine name ', new Date(), new Date(), false),
    new BigList(200533, 'machine name ', new Date(), new Date(), false),
    new BigList(200533, 'machine name ', new Date(), new Date(), false),
    new BigList(200533, 'machine name ', new Date(), new Date(), false),
    new BigList(200533, 'machine name ', new Date(), new Date(), false),
    new BigList(200533, 'machine name ', new Date(), new Date(), false),
    new BigList(200533, 'machine name ', new Date(), new Date(), false),
  ];

  cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  public data: Object[];
  xAxis: Object;

  constructor() {
    this.data = [
      { month: 'may', sales: 35 },
      { month: 'jul', sales: 31 },
      { month: 'sep', sales: 31 },
      { month: 'nov', sales: 31 },
      { month: 'dec', sales: 31 },
      { month: 'dec', sales: 31 },
      { month: 'dec', sales: 31 },
      { month: 'dec', sales: 31 },
      { month: 'dec', sales: 31 },
      { month: 'dec', sales: 31 },
      { month: 'dec', sales: 31 },
      { month: 'dec', sales: 31 },
    ];
    this.xAxis = {
      valueType: 'Category',
    };
  }
}
