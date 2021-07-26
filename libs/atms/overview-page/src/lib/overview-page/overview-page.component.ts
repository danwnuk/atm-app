import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Select } from '@ngxs/store';
import { LegendPosition } from '@swimlane/ngx-charts';

import { ATMHistory, ATMSelectors, Denomination } from '@atm-app/atms/state';
import { BarChartOptions, PieChartOptions } from '../chart-options';

@Component({
  selector: 'atm-app-overview-page',
  templateUrl: './overview-page.component.html',
  styleUrls: ['./overview-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OverviewPageComponent implements OnInit {
  @Select(ATMSelectors.denominations) denominations$!: Observable<Denomination[]>;
  @Select(ATMSelectors.history) history$!: Observable<ATMHistory[]>;

  history!: ATMHistory[];

  chartType = 'bar';

  barChartOptions: BarChartOptions = {
    view: [700, 400],
    colorScheme: {
      domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA', '#3432A8', '#A632A8']
    },
    gradient: true,
    showLegend: true,
    showXAxis: true,
    showYAxis: true,
    showXAxisLabel: true,
    showYAxisLabel: true,
    xAxisLabel: 'Denomination',
    yAxisLabel: 'Amount In Stock'
  };

  pieChartOptions: PieChartOptions = {
    view: [700, 400],
    colorScheme: {
      domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA', '#3432A8', '#A632A8']
    },
    gradient: true,
    showLegend: true,
    showLabels: true,
    isDoughnut: false,
    legendPosition: LegendPosition.Right
  };

  chartData: { name: string, value: number }[] = [];

  ngOnInit(): void {
    this.denominations$.subscribe(denominations => {
      this.chartData = denominations.map(denomination => ({
        name: '$' + denomination.value,
        value: denomination.amountInStock
      }));
    });

    this.history$.subscribe(history => {
      this.history = [ ...history ].reverse();
    });
  }

}
