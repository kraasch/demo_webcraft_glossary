import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MycounterService } from '../../services/mycounter/mycounter.service';

import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-myheader',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
  ],
  template: `
    <div
      class="hero min-h-1.5"
      style="background-image: url(https://images.unsplash.com/photo-1593720213428-28a5b9e94613?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);"
    >
      <div class="hero-overlay"></div>
      <div class="hero-content text-neutral-content text-center">
        <div class="max-w-md">
          <h1 class="mb-5 text-5xl font-bold">Webcraft Glossary</h1>
          <p class="mb-5">
            A collection of some web development terminology.
          </p>
          <!-- BUTTON
            <button class="btn btn-primary" (click)="counterService.increment()">Add</button>
            <br />
            <label>Count button presses: <span class="badge">{{ count$ | async }}</span></label>
          -->
          <br />
        </div>
      </div>
    </div>
    <div class="hero bg-base-200 min-h-1.5" >
      <div class="hero-overlay"></div>
      <div class="hero-content text-neutral-content text-center">
        <div class="max-w-md">
          <nav class="grid grid-flow-col gap-4">
            <a routerLink="" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Home</a>
            <div class="divider divider-horizontal"></div>
            <a routerLink="glossary" routerLinkActive="active">Glossary</a>
            <div class="divider divider-horizontal"></div>
            <a routerLink="stats" routerLinkActive="active">Stats</a>
            <div class="divider divider-horizontal"></div>
            <a routerLink="about" routerLinkActive="active">About</a>
          </nav>
        </div>
      </div>
    </div>
  `,
  styles: ``
})
export class MyheaderComponent {
  counterService = inject(MycounterService);
  count$ = this.counterService.count$;

}
