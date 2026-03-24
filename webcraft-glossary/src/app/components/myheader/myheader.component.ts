import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MythemeswitchComponent } from '../../components/mythemeswitch/mythemeswitch.component';
import { MycounterService } from '../../services/mycounter/mycounter.service';

@Component({
  selector: 'app-myheader',
  standalone: true,
  imports: [ MythemeswitchComponent, CommonModule ],
  template: `
    <div
      class="hero min-h-1.5"
      style="background-image: url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp);"
    >
      <div class="hero-overlay"></div>
      <div class="hero-content text-neutral-content text-center">
        <div class="max-w-md">
          <h1 class="mb-5 text-5xl font-bold">Webcraft Glossary</h1>
          <p class="mb-5">
            A small collection of some web development terminology.
          </p>
          <button class="btn btn-primary" (click)="counterService.increment()">Add</button>
          <br />
          <label>Count button presses: <span class="badge">{{ count$ | async }}</span></label>
          <br />
          <app-mythemeswitch />
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
