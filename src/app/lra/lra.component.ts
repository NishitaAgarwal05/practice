import { Component } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { Chart } from 'chart.js';
// import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';

@Component({
  selector: 'app-lra',
  templateUrl: './lra.component.html',
  styleUrls: ['./lra.component.scss']
})
export class LraComponent {
  public pieChartData = [
    { data: [22,28,12,13,25],
      backgroundColor: ['#90EE90', 'green', 'yellow', '#FF4F4B', 'red'],
    },
  ];
  public pieChartType:ChartType = 'pie';
  
  constructor(){
    Chart.defaults.elements.arc.borderWidth = 0; 
    this.sortRisks();
  }
  sortRisks() {
    this.pieChartData[0].data = this.pieChartData[0].data.slice().sort((a, b) => {
       if (a > b) {
        return 1;
      }else if (a < b) {
        return -1;
      }
    return 0;
    });
  }
}

