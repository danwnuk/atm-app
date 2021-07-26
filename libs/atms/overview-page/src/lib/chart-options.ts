import { LegendPosition } from "@swimlane/ngx-charts";

export interface ChartOptions {
  view: [number, number];
  colorScheme: { domain: string[] };
  gradient: boolean;
  showLegend: boolean;
}

export interface BarChartOptions extends ChartOptions {
  showXAxis: boolean;
  showYAxis: boolean;
  showXAxisLabel: boolean;
  showYAxisLabel: boolean;
  xAxisLabel: string;
  yAxisLabel: string;
}

export interface PieChartOptions extends ChartOptions {
  showLabels: boolean;
  isDoughnut: boolean;
  legendPosition: LegendPosition;
}
