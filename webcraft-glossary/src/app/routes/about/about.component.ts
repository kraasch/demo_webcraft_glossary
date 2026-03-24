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
          <p class="py-6">A Glossary of web development terminology and a demo app for Angular 17.</p>
          <p class="py-6">For more info see the weblinks provided in the footer.</p>
        </div>
      </div>
    </div>
  `,
  styles: ``
})
export class AboutComponent {

}
