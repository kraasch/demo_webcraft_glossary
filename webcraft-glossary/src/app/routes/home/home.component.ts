import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
    <div class="hero bg-base-100 min-h-164">
      <div class="hero-content text-center">
        <div class="max-w-md">
          <h1 class="text-5xl font-bold">Hello there</h1>
          <p class="py-6">
            Here a collection of web development terminology.
          </p>
          <button class="btn btn-primary">Open Glossary</button>
        </div>
      </div>
    </div>
  `,
  styles: ``
})
export class HomeComponent {

}
