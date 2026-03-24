
import { Component } from '@angular/core';
import { MyfooterComponent } from './components/myfooter/myfooter.component';
import { MyheaderComponent } from './components/myheader/myheader.component';

import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MyheaderComponent,
    MyfooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'webcraft-glossary';
}

