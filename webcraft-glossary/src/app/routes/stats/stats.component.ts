
import { Component, OnInit, ViewChild, ElementRef, inject } from '@angular/core';
import { LocalDataProviderService } from '../../services/data/local-data-provider.service';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [],
  template: `
    <div class="hero bg-base-100 min-h-40 m-10">
      <div class="hero-content text-center">
        <div class="max-w-md">
          <h1 class="text-5xl font-bold">Stats</h1>
          <p class="py-6">
            Here is some statistical dashboard.
          </p>
        </div>
      </div>
    </div>
    <div class="mybox">

      <div class="myitem" class="card bg-base-100 shadow-xl p-10 max-h-120">
        <h3 class="card-title mb-4">Tag frequency</h3>
        <canvas #chartElement width="400" height="300"></canvas>
      </div>

      <div class="myitem" class="card bg-base-100 shadow-xl p-10 max-h-120">
        Another stat.
      </div>

      <div class="myitem" class="card bg-base-100 shadow-xl p-10 max-h-120">
        Another stat.
      </div>

    </div>
  `,
  styles: `
.mybox {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
}

.myitem {
  padding: 5px;
  /* DEBUG */
  /*
  border-color: #f00;
  overflow-x: hidden;
  border: solid;
  */
}
`
})
export class StatsComponent implements OnInit {

  @ViewChild('chartElement', { static: true }) chartElement!: ElementRef<HTMLCanvasElement>;

  dataProvider = inject(LocalDataProviderService);
  data = this.dataProvider.getData();
  tagCounts: Record<string, number> = {};

  ngOnInit(): void {
    // Flatten all tags and count them.
    const tags = this.data.flatMap(d => d.tags || []);
    this.tagCounts = tags.reduce((acc, tag) => {
      acc[tag] = (acc[tag] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
    this.renderPie();
  }

  renderPie(): void {
    const ctx = this.chartElement.nativeElement.getContext('2d');
    if (!ctx) return;
    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: Object.keys(this.tagCounts),
        datasets: [
          {
            label: 'Tag count',
            data: Object.values(this.tagCounts),
            backgroundColor: [
              '#32936c',
              '#4bc1c1',
              '#5064cb',
              '#636663',
              '#724b9f',
              '#7c78ab',
              '#953f9d',
              '#a2e45a',
              '#af3535',
              '#c7725c',
              '#e189d5',
              '#ffdb6d',
              '#36344c',
              '#417e7e',
              '#626178',
              '#662a87',
              '#6a639f',
              '#76c492',
              '#7ca9cb',
              '#c454b4',
              '#c75347',
              '#c77b43',
              '#d8eeff',
              '#e4db41',
              '#000000',
            ],
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              color: '#FFF',
            },
          },
        },
      },
    });
  }

}

