
import { Routes }            from '@angular/router';
import { HomeComponent }     from './routes/home/home.component';
import { AboutComponent }    from './routes/about/about.component';
import { GlossaryComponent } from './routes/glossary/glossary.component';
import { StatsComponent }    from './routes/stats/stats.component';

export const routes: Routes = [
  { path: '',         component: HomeComponent,     title: 'Home'     },
  { path: 'about',    component: AboutComponent,    title: 'About'    },
  { path: 'glossary', component: GlossaryComponent, title: 'Glossary' },
  { path: 'stats',    component: StatsComponent,    title: 'Stats'    },
];

