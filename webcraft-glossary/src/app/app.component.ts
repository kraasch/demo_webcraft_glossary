import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyfooterComponent } from './myfooter/myfooter.component';
import { MyheaderComponent } from './myheader/myheader.component';

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

