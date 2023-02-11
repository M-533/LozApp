import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-chart2',
  templateUrl: './chart2.component.html',
  styleUrls: ['./chart2.component.scss'],
})
export class Chart2Component {
  canvas: any;
  ctx: any;
  @ViewChild('mychart') mychart: any;

  ngAfterViewInit() {
    this.canvas = this.mychart.nativeElement;
    this.ctx = this.canvas.getContext('2d');

    new Chart(this.ctx, {
      // config : {
      //   type: 'scatter',
      //   data: data,
      //   options: {
      //     scales: {
      //       x: {
      //         type: 'linear',
      //         position: 'bottom'
      //       }
      //     }
      //   }
      // },
      type: 'scatter',
      data: {
        datasets: [
          {
            label: 'Scatter Dataset',
            data: [
              {
                x: 1,
                y: 5,
              },
              {
                x: 2,
                y: 4.6,
              },
              {
                x: 4,
                y: 1.6,
              },
              {
                x: 3,
                y: 5.6,
              },
              {
                x: 4,
                y: 3,
              },
              {
                x: 1.5,
                y: 5.2,
              },
              {
                x: 2,
                y: 3.6,
              },
              {
                x: 3,
                y: 1.6,
              },
              {
                x: 3,
                y: 2,
              },
              {
                x: 6,
                y: 1.6,
              },
              {
                x: 4,
                y: 3.6,
              },
              {
                x: 7,
                y: 2.6,
              },
              {
                x: 5,
                y: 3.6,
              },
              {
                x: 4,
                y: 4.4,
              },
              {
                x: 1.7,
                y: 2.1,
              },
              {
                x: 2,
                y: 4.6,
              },
              {
                x: 7,
                y: 4.2,
              },
              {
                x: 4,
                y: 3,
              },
              {
                x: 1.3,
                y: 2.6,
              },
              {
                x: 4,
                y: 5.9,
              },
              {
                x: 9,
                y: 1.9,
              },
              {
                x: 0,
                y: 3.6,
              },
              {
                x: 0,
                y: 1.6,
              },
              {
                x: 0,
                y: 6.6,
              },
              {
                x: 6,
                y: 3.6,
              },
              {
                x: 6,
                y: 2.3,
              },
              {
                x: 2,
                y: 2.2,
              },
              {
                x: 2,
                y: 3.3,
              },
              {
                x: 3,
                y: 4.4,
              },
              {
                x: 4,
                y: 4.5,
              },
              {
                x: 4,
                y: 1.3,
              },
              {
                x: 4,
                y: 6.4,
              },
              {
                x: 3,
                y: 6.8,
              },
              {
                x: 7,
                y: 6.6,
              },
              {
                x: 5,
                y: 3.6,
              },
              {
                x: 6,
                y: 6.6,
              },
              {
                x: 6,
                y: 6.7,
              },
              {
                x: 4,
                y: 3.6,
              },
              {
                x: 7,
                y: 5.6,
              },
              {
                x: 1,
                y: 6.6,
              },

            ],
            backgroundColor: ' #2d62ed'
          },
        ],
      },
    });
  }
}
