import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  january: number;
  february: number;
  march: number;
  highcharts: any;
  chart: any;
  colors: String[];
  selectedValue1: String;
  selectedValue2: String;
  selectedValue3: String;

  constructor() {
    this.january = 3000;
    this.february = 5000;
    this.march = 2000;
    this.colors = ['Red', 'Purple', 'Blue', 'Orange', 'Green', 'Yellow', 'Grey'];
    this.highcharts = Highcharts;
    this.selectedValue1 = this.colors[4]
    this.selectedValue2 = this.colors[2]
    this.selectedValue3 = this.colors[5]
  }

  ngOnInit(): void {
    this.createChartBar();
  }

  updateData() {
    this.chart.series[0].setData([
      { y: Number(this.january), color: this.selectedValue1 },
      { y: Number(this.february), color: this.selectedValue2 },
      { y: Number(this.march), color: this.selectedValue3 }]);
  }

  private createChartBar(): void {
    this.chart = Highcharts.chart('chartContainer', {
      chart: {
        type: 'column',
      },
      title: {
        text: 'Market Qtr Report',
      },
      yAxis: {
        min: 1000,
        title: {
          text: 'Select Monthly Revenue',
        }
      },
      xAxis: {
        categories: ['January', 'Feburary', 'March'],
        title: {
          text: 'Color'
        }
      },
      series: [{
        data: [
          { y: Number(this.january), color: this.selectedValue1 },
          { y: Number(this.february), color: this.selectedValue2 },
          { y: Number(this.march), color: this.selectedValue3 }]
      }],
      credits: {
        enabled: false
      }, legend: {
        enabled: false,
      }
    } as any);

  }

  private createChartPie(): void {

    this.chart = Highcharts.chart('chartContainer', {
      chart: {
        type: 'pie',
      },
      title: {
        text: 'Market Qtr Report',
      },
      yAxis: {
        min: 1000,
        title: {
          text: 'Select Monthly Revenue',
        }
      },
      xAxis: {
        categories: ['January', 'Feburary', 'March'],
        title: {
          text: 'Color'
        }
      },
      series: [{
        data: [
          { y: Number(this.january), color: this.selectedValue1 },
          { y: Number(this.february), color: this.selectedValue2 },
          { y: Number(this.march), color: this.selectedValue3 }]
      }],
      credits: {
        enabled: false
      }, legend: {
        enabled: false,
      }
    } as any);
  }

  private createChartLine(): void {
    this.chart = Highcharts.chart('chartContainer', {
      chart: {
        type: 'line',
      },
      title: {
        text: 'Market Qtr Report',
      },
      yAxis: {
        min: 1000,
        title: {
          text: 'Select Monthly Revenue',
        }
      },
      xAxis: {
        categories: ['January', 'Feburary', 'March'],
        title: {
          text: 'Color'
        }
      },
      series: [{
        data: [
          { y: Number(this.january), color: this.selectedValue1 },
          { y: Number(this.february), color: this.selectedValue2 },
          { y: Number(this.march), color: this.selectedValue3 }]
      }],
      credits: {
        enabled: false
      }, legend: {
        enabled: false,
      }
    } as any);
  }

  radioEvent(value: String) {
    if (value === 'pie') {
      this.createChartPie();
    }
    else if (value === 'line') {
      this.createChartLine();
    }
    else if (value === 'bar') {
      this.createChartBar();
    }
  }
}
