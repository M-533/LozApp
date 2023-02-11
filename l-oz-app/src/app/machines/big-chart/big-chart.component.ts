import { Component, OnInit, ViewChild } from '@angular/core';
    import { Chart } from 'chart.js';

@Component({
  selector: 'app-big-chart',
  templateUrl: './big-chart.component.html',
  styleUrls: ['./big-chart.component.scss']
})
export class BigChartComponent {

  canvas: any;
  ctx: any;
  @ViewChild('mychart') mychart: any;

  ngAfterViewInit() {
      this.canvas = this.mychart.nativeElement;
      this.ctx = this.canvas.getContext('2d');

      new Chart(this.ctx, {
          type: 'bar',
          data: {
              datasets: [{
                  label: 'Current Vallue',
                  data: [0, 16, 40, 50 ,30 ,57,66],
                  backgroundColor: "rgb(115 185 243 / 65%)",
                  borderColor: "#007ee7",
                  fill: true,
              },

              {
                  label: 'Invested Amount',
                  data: [0, 30, 47, 60, 70 , 33 , 44],

                  backgroundColor: "#2d62ed",
                  borderColor: "#47a0e8",
                  fill: true,
              }],
              labels: ['January 2018', 'February 2019', 'March 2019', 'April 2019', 'may 2020' , 'march 2021' , 'nov 2022' , 'jun 2023'] ,
          },
          //    options: {
          //   maintainAspectRatio:false ,
          // }
      });
  }
}
