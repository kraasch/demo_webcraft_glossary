import { Component, inject } from '@angular/core';
import { MytileComponent } from '../../components/mytile/mytile.component';
import { LocalDataProviderService } from '../../services/data/local-data-provider.service';

@Component({
  selector: 'app-glossary',
  standalone: true,
  imports: [
    MytileComponent,
  ],
  template: `
    <div>
      @for (item of data; track item.id) {
        <app-mytile [tileData]="item" />
      } @empty {
        <p>No tiles available.</p>
      }
    </div>
  `,
  styles: ``
})
export class GlossaryComponent {
  dataProvider = inject(LocalDataProviderService);
  data = this.dataProvider.getData();
}
