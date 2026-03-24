import { Component } from '@angular/core';
import { MythemeswitchComponent } from '../../components/mythemeswitch/mythemeswitch.component';

@Component({
  selector: 'app-myheader',
  standalone: true,
  imports: [ MythemeswitchComponent ],
  template: `
    <div
      class="hero min-h-1.5"
      style="background-image: url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp);"
    >
      <div class="hero-overlay"></div>
      <div class="hero-content text-neutral-content text-center">
        <div class="max-w-md">
          <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
          <p class="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
            quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
          <button class="btn btn-primary">Get Started</button>
          <app-mythemeswitch />
        </div>
      </div>
    </div>
  `,
  styles: ``
})
export class MyheaderComponent {

}
