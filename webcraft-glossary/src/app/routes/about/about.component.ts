import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  template: `
    <div class="hero bg-base-100 min-h-164">
      <div class="hero-content text-center">
        <div class="max-w-md">
          <h1 class="text-5xl font-bold">About</h1>
          <p class="py-6">
            Here some about.
          </p>
        </div>
      </div>
    </div>
  `,
  styles: ``
})
export class AboutComponent {

}
