import { Component } from '@angular/core';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [],
  template: `
    <div class="hero bg-base-100 min-h-164">
      <div class="hero-content text-center">
        <div class="max-w-md">
          <h1 class="text-5xl font-bold">Stats</h1>
          <p class="py-6">
            Here some stats.
          </p>
        </div>
      </div>
    </div>
  `,
  styles: ``
})
export class StatsComponent {

}
