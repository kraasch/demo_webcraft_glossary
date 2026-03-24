
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
  ],
  template: `
    <div class="hero bg-base-100 min-h-164">
      <div class="hero-content text-center">
        <div class="max-w-md">
          <h4 class="text-5xl font-bold">Welcome to the</h4>
          <h1 class="text-5xl font-bold">Webcraft Glossary</h1>
          <p class="py-6">
            A collection of web development terminology.
          </p>
          <button (click)="goToGlossary()" class="btn btn-primary">Open Glossary</button>
        </div>
      </div>
    </div>
  `,
  styles: ``
})
export class HomeComponent {

  constructor(private router: Router) {}

  goToGlossary() {
    this.router.navigate(['/glossary']);
  }

}

