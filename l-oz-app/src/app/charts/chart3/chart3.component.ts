import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-chart3',
  templateUrl: './chart3.component.html',
  styleUrls: ['./chart3.component.scss']
})
export class Chart3Component {


  canvas: any;
  ctx: any;
  @ViewChild('mychart') mychart: any;

  ngAfterViewInit() {
      this.canvas = this.mychart.nativeElement;
      this.ctx = this.canvas.getContext('2d');

      new Chart(this.ctx, {
          type: 'line',
          data: {
              datasets: [{
                  label: 'Current Vallue',
                  data: [0, 20, 40, 50, 20, 50, 50 , 10 , 20],
                  // backgroundColor: "rgb(115 185 243 / 65%)",
                  borderColor: "#007ee7",
                  fill: false,
              },
              {
                  label: 'Invested Amount',
                  data: [0, 20, 40, 60, 50 ,20, 40, 50 , 20 ,10],
                  // backgroundColor: "#47a0e8",
                  borderColor: "#007ee7",
                  fill: false,
              }],
              labels: ['January 2019', 'February 2019', 'March 2019', 'April 2019' , '2023 May','2023 May','2023 May','2023 May','2023 May',]
          },
      });
  }
}
