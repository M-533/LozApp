import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SuppliersService } from 'app/suppliers.service';
import {
  jobOrder,
  mats,
  nestedTable2,
  nestedTable3,
  scrapMats,
  supps,
  weichts,
} from './linMats.model';
import { nestedTable } from './linMats.model';
import { suppliersRow } from './suppliers-list';
@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss'],
})
export class ResourcesComponent {
  hideIcon = false;
  hideNested = false;
  resourceHead = 'theLine';
  currentRoute = 'list';

  w3Routes = 'list3';
  suppliesRoute = 'list';
  consumptionRoute = 'list';
  processNav = 'routes';
  consumptionChart = 'hide';
  chartOrList = 'list';
  lastNave = 'list';
  constructor(private router: Router, private supServise: SuppliersService) {}

  linemats = [
    new mats('#e45563', 'aluminum', 1000, 160, new Date(), false),
    new mats('#c24854', 'silver', 990, 150, new Date(), false),
    new mats(' #9b3842', 'aluminum', 1000, 120, new Date(), false),
    new mats('#003f5ca9', 'silver', 990, 150, new Date(), false),
    new mats('#003f5c67', 'steel', 990, 150, new Date(), false),
  ];
  supplies = [
    new supps('silver', 990, 150, new Date(), false),
    new supps('steel', 990, 150, new Date(), false),
    new supps('aluminum', 1000, 160, new Date(), false),
    new supps('silver', 990, 150, new Date(), false),
    new supps('aluminum', 1000, 120, new Date(), false),
  ];

  weichtsM = [
    new weichts('newly supplied', 990, 150, new Date(), false),
    new weichts('steel', 990, 150, new Date(), false),
    new weichts('aluminum', 1000, 160, new Date(), false),
    new weichts('silver', 990, 150, new Date(), false),
    new weichts('aluminum', 1000, 120, new Date(), false),
  ];

  nestedMats = [
    new nestedTable('supply', '+100kg', '544kg', 'machin', '2533', new Date()),
    new nestedTable('supply', '+100kg', '544kg', 'machin', '2533', new Date()),
    new nestedTable('supply', '+100kg', '544kg', 'machin', '2533', new Date()),
  ];
  nestedMats2 = [
    new nestedTable2(2533, '+100kg', '544kg', 'machin', '2533', new Date()),
    new nestedTable2(2533, '+100kg', '544kg', 'machin', '2533', new Date()),
    new nestedTable2(2533, '+100kg', '544kg', 'machin', '2533', new Date()),
  ];

  nesttedMats3 = [
    new nestedTable3(
      '#ec5967',
      2533,
      '+100kg',
      '544kg',
      'machin',
      '2533',
      new Date()
    ),
    new nestedTable3(
      '#1a8383',
      2533,
      '+100kg',
      '544kg',
      'machin',
      '2533',
      new Date()
    ),
    new nestedTable3(
      '#59b4b4ce',
      2533,
      '+100kg',
      '544kg',
      'machin',
      '2533',
      new Date()
    ),
    new nestedTable3(
      '#831a69',
      2533,
      '+100kg',
      '544kg',
      'machin',
      '2533',
      new Date()
    ),
  ];

  scraps = [
    new scrapMats('newly supplied', 990, 150, new Date(), false),
    new scrapMats('steel', 990, 150, new Date(), false),
    new scrapMats('aluminum', 1000, 160, new Date(), false),
    new scrapMats('silver', 990, 150, new Date(), false),
    new scrapMats('aluminum', 1000, 120, new Date(), false),
  ];
  orders = [
    new jobOrder(3434, 990, 150, new Date(), false),
    new jobOrder(2005, 990, 150, new Date(), false),
    new jobOrder(5333, 1000, 160, new Date(), false),
    new jobOrder(9887, 990, 150, new Date(), false),
    new jobOrder(1533, 1000, 120, new Date(), false),
  ];

  suppliersList = this.supServise.supliesDate;

  onTheLine() {
    this.resourceHead = 'theLine';
  }
  onSupply() {
    this.resourceHead = 'supply';
  }
  onWeitch() {
    this.resourceHead = 'weicht';
  }
  consumption() {
    this.resourceHead = 'consumption';
  }
  scrap() {
    this.resourceHead = 'scrap';
  }
  hideIcone() {
    this.hideIcon = true;
  }

  onProfile() {
    this.currentRoute = 'profile';
  }

  onList() {
    this.currentRoute = 'list';
  }

  onSubbList() {
    this.suppliesRoute = 'list';
  }

  onBubbles() {
    this.suppliesRoute = 'bubbles';
  }

  onScale() {
    this.w3Routes = 'scale';
  }
  onList3() {
    this.w3Routes = 'list3';
  }
  onComsumptionList() {
    this.consumptionChart = 'hide';
  }
  onConChart() {
    this.consumptionChart = 'show';
  }

  onProcess() {
    this.consumptionChart = 'hide';
    this.processNav = 'process';
  }

  onRoutesB() {
    this.consumptionChart = 'hide';
    this.processNav = 'routes';
  }
  onorderB() {
    this.hideNested = true;
    this.consumptionChart = 'hide';
    this.processNav = 'order';
    this.consumptionRoute = 'jobOrder';
  }

  onChart() {
    this.chartOrList = 'chart';
  }

  onLastList() {
    this.chartOrList = 'chart';
  }
}
