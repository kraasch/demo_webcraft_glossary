
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MycounterService } from '../../services/mycounter/mycounter.service';
import { MythemeswitchComponent } from '../../components/mythemeswitch/mythemeswitch.component';

import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-myfooter',
  standalone: true,
  imports: [
    MythemeswitchComponent,
    RouterModule,
  ],
  template: `
    <footer class="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
      <!--
      <nav class="grid grid-flow-col gap-4">
        <a routerLink="" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Home</a>
        <div class="divider divider-horizontal"></div>
        <a routerLink="glossary" routerLinkActive="active">Glossary</a>
        <div class="divider divider-horizontal"></div>
        <a routerLink="stats" routerLinkActive="active">Stats</a>
        <div class="divider divider-horizontal"></div>
        <a routerLink="about" routerLinkActive="active">About</a>
      </nav>
      -->
      <nav>
        <app-mythemeswitch class="h-6 max-h-6 dropdown-right dropdown-end" />
      </nav>
      <!--
        <p>Items: {{ counterService.getCount() }}</p>
        <button class="btn btn-primary" (click)="counterService.decrement()">Remove</button>
      -->
      <nav>
        <div class="grid grid-flow-col gap-4">

          <!-- link to github -->
          <a href="https://github.com/kraasch/demo_webcraft_glossary/">
          <span style="white-space: nowrap">
            <svg fill="currentColor" height="20" width="20" version="1.1" xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-267 265 264.5 225.1" xml:space="preserve">
              <path d="M-21.8,354.4c-0.8-0.9-1.3-2.3-1.2-3.5c0.9-20.1-1.8-39.6-8.6-58.6c-0.9-2.4-2-3.3-4.5-2.6c-5.6,1.7-11.4,3-16.9,5
	          	c-15.2,5.5-29.1,13.5-42.6,22.2c-1.4,0.9-3.5,1.5-5.2,1.2c-22.1-3.9-44.3-3.7-66.5-0.3c-2.2,0.3-5-0.2-6.8-1.3
	          	c-15.7-10.2-31.7-20.2-50-25c-15.1-4-12-4.8-16.3,8.9c-5.1,16.4-7.1,33.4-6,50.6c0.1,1.2-0.8,2.7-1.6,3.8
	          	c-6.6,7.9-11.7,16.6-14.8,26.4c-6,19-4.8,38.2-1,57.3c7.5,37.5,32.8,63.8,70.2,70.3c19.3,3.4,39.2,3.7,57.3,5.2
	          	c20.2-1.5,38.9-1.6,57.1-4.5c31.8-5.1,55.8-22,67.8-52.7c4.2-10.7,6.5-22.4,7.9-33.8C-0.3,397.9-4.6,374.3-21.8,354.4z
	          	 M-39.5,458.8c-3.3,15.6-12.4,26.3-27.6,31.8c-14.7,5.4-29.9,7.6-45.4,8.6c-7.5,0.5-15,0.1-22.5,0.1c-20.2,0.4-40.4-0.4-59.9-6.2
	          	c-24.5-7.3-35.5-21.9-36.2-47.5c-0.3-9.1,0.7-17.9,5-26.1c8.5-16.5,23.2-22.3,40.6-22.6c9.5-0.1,19.1,0.7,28.7,1.6
	          	c20.1,1.8,40-0.1,60-1.2c8.8-0.5,17.8-0.7,26.4,0.8c18.5,3.2,32.5,21.6,32.8,42.3C-37.6,446.5-38.3,452.8-39.5,458.8z" />
              <path d="M-191.5,424.5c-5.5,5.7-7.4,12.9-7.7,19.3c0,9.6,2.8,17.3,7.7,22.3c6.8,6.9,16.1,6.7,22.6-0.3c9.8-10.6,9.7-30.5,0-41
	          	C-175.4,417.7-184.9,417.6-191.5,424.5z" />
              <path d="M-99.4,423.7c-11.2,10.3-11.2,33,0,43.2c6.5,5.9,15.3,5.6,21.4-0.7c5.6-5.8,7.6-13.1,7.8-21c-0.2-7.9-2.2-15.1-7.9-20.9
	          	C-84.2,418-93,417.8-99.4,423.7z" />
            </svg>
          </span>
          </a>

          <!-- link to github pages -->
          <a href="https://kraasch.github.io/demo_webcraft_glossary/">
          <span style="white-space: nowrap">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="currentColor" fill-opacity="0%" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 10.4V20M12 10.4C12 8.15979 12 7.03969 11.564 6.18404C11.1805 5.43139 10.5686 4.81947 9.81596 4.43597C8.96031 4 7.84021 4 5.6 4H4.6C4.03995 4 3.75992 4 3.54601 4.10899C3.35785 4.20487 3.20487 4.35785 3.10899 4.54601C3 4.75992 3 5.03995 3 5.6V16.4C3 16.9601 3 17.2401 3.10899 17.454C3.20487 17.6422 3.35785 17.7951 3.54601 17.891C3.75992 18 4.03995 18 4.6 18H7.54668C8.08687 18 8.35696 18 8.61814 18.0466C8.84995 18.0879 9.0761 18.1563 9.29191 18.2506C9.53504 18.3567 9.75977 18.5065 10.2092 18.8062L12 20M12 10.4C12 8.15979 12 7.03969 12.436 6.18404C12.8195 5.43139 13.4314 4.81947 14.184 4.43597C15.0397 4 16.1598 4 18.4 4H19.4C19.9601 4 20.2401 4 20.454 4.10899C20.6422 4.20487 20.7951 4.35785 20.891 4.54601C21 4.75992 21 5.03995 21 5.6V16.4C21 16.9601 21 17.2401 20.891 17.454C20.7951 17.6422 20.6422 17.7951 20.454 17.891C20.2401 18 19.9601 18 19.4 18H16.4533C15.9131 18 15.643 18 15.3819 18.0466C15.15 18.0879 14.9239 18.1563 14.7081 18.2506C14.465 18.3567 14.2402 18.5065 13.7908 18.8062L12 20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>
          </a>

          <!-- link to home page -->
          <a href="https://kraasch.eu/">
          <span style="white-space: nowrap">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
              <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" stroke="currentColor" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>
          </a>

        </div>
      </nav>
      <aside>
        <p>Copyright © {{year}} 	&mdash; <a class="link link-accent" href="https://kraasch.eu/">A. Kraasch</a></p>
      </aside>
    </footer>
  `,
  styles: ``
})

export class MyfooterComponent {
  year: string = new Date().getFullYear().toString();
  counterService = inject(MycounterService);
  currentYear: number = new Date().getFullYear();
}

