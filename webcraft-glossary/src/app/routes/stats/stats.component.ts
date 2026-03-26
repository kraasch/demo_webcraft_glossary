
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

      <!-- TAG FREQUENCY -->
      <div class="myitem" class="card bg-base-100 shadow-xl p-10 max-h-120 m-1">
        <h3 class="card-title mb-4">Tag frequency</h3>
        <canvas #chartElement class="p-4" width="400" height="300"></canvas>
      </div>

      <!-- DICTIONARY STATISTICS -->
      <div class="myitem" class="card bg-base-100 shadow-xl p-5 m-1">
        <h3 class="card-title mb-4">Dictionary statistics</h3>
        <ul class="list rounded-box shadow-md m-0">
        @for (stat of stats; track stat.key; let idx=$index ) {
        <li class="list-row">
          <div class="text-4xl font-thin opacity-30 tabular-nums">{{ idx+1 }}</div>
          <div class="list-col-grow">
            <div>{{ stat.name.toUpperCase() }}</div>
            <div class="text-xs uppercase font-semibold opacity-60"> {{ stat.count }}</div>
          </div>
        </li>
        }
        </ul>
      </div>

      <!-- TIMELINE -->
      <div class="myitem" class="card bg-base-100 shadow-xl p-10 max-h-120 m-1">
        <h4 class="card-title mb-4">Card data</h4>
        Number of trivia points per card
        <canvas #chartElement2 class="p-4" width="400" height="300"></canvas>
      </div>

      <!-- DUMMY CARD
      <div class="myitem" class="card bg-base-100 shadow-xl p-10 max-h-120">
        Another stat.
      </div>
      -->

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
  stats = [
    { key: 0, count: 0, name: "entries", },
    { key: 1, count: 0, name: "words", },
    { key: 2, count: 0, name: "unique tags", },
    { key: 3, count: 0, name: "total tags", },
    { key: 4, count: 0, name: "cross-references", },
    { key: 5, count: 0, name: "abbreviations", },
    { key: 6, count: 0, name: "external references", },
  ];

  computeStats(): void {
    const allTags: string[] = [];
    const wordPattern = /\w+/g;
    let totalWords = 0;
    for (const entry of this.data) {
      // Count words in term and text.
      const text = (entry.term || "") + " " +
        (entry.text || "") +
        (entry.points.join(" ") || "");
      const matches = text.match(wordPattern);
      totalWords += matches ? matches.length : 0;
      allTags.push(...entry.tags);
      this.stats[4].count += entry.crossrefs?.length || 0;
      this.stats[5].count += entry.abbreviations?.length || 0;
      this.stats[6].count += entry.references?.length || 0;
    }
    this.stats[0].count = this.data.length;
    this.stats[1].count = totalWords;
    this.stats[2].count = new Set(allTags).size;
    this.stats[3].count = allTags.length;
  }

  ngOnInit(): void {

    // Flatten all tags and count them.
    const tags = this.data.flatMap(d => d.tags || []);
    this.tagCounts = tags.reduce((acc, tag) => {
      acc[tag] = (acc[tag] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
    this.renderPie();

    // Compute textual stats.
    // NOTE: also counts tags, but is more independant from order this way.
    this.computeStats();

    // Compute time line.
    this.renderTimeline();
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

  @ViewChild('chartElement2', { static: true }) chartElement2!: ElementRef<HTMLCanvasElement>;

  getTimelineData(): { labels: string[]; numbers: number[] } {
    if (this.data.length === 0) return { labels: [], numbers: [] };
    const sorted = [...this.data].sort((a, b) =>
      new Date(b.creation_date).getTime() - new Date(a.creation_date).getTime()
    );
    const labels = sorted.map(item => item.term);
    const pointsCount = sorted.map(item => item.points.length);
    return { labels, numbers: pointsCount };
  }

  renderTimeline(): void {
    const ctx = this.chartElement2.nativeElement.getContext('2d');
    if (!ctx) return;
    const timelineData = this.getTimelineData();
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: timelineData.labels,
        datasets: [
          {
            label: 'Points Count',
            data: timelineData.numbers,
            borderColor: '#3cba9f',
            backgroundColor: 'rgba(60, 186, 159, 0.2)',
            fill: true,
            tension: 0.4,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom',
            labels: { color: '#FFF' },
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              color: '#FFF',
              stepSize: 1,
              precision: 0,
              callback: function(value) {
                // Skips non-integers.
                return Number.isInteger(value) ? value : null;
              }
            },
            grid: { color: 'rgba(255,255,255,0.1)' },
          },
          x: {
            ticks: {
              color: '#FFF',
              maxRotation: 45,    // Max angle (degrees)
              minRotation: 70,    // Min angle, locks to exactly 45 degrees.
              // mirror: false,   // Should mirror the lables, but does not...
              // autoSkip: false, // Uncomment to show all labels
            },
            grid: { color: 'rgba(255,255,255,0.1)' },
          },
        },
      },
    });
  }

}

