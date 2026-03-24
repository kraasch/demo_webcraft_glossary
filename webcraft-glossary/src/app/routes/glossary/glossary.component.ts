
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
    <div class="mybox">
      @for (dataItem of data; track dataItem.id) {
        <app-mytile
          class="myitem"
          [tileData]="dataItem"
        />
      } @empty {
        <p>No tiles available.</p>
      }
    </div>
  `,
  styles: `
.mybox {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
}

.myitem {
  padding: 5px;
  /* DEBUG */
  /*
  border-color: #f00;
  overflow-x: hidden;
  border: solid;
  */
}
`
})
export class GlossaryComponent {
  dataProvider = inject(LocalDataProviderService);
  data = this.dataProvider.getData();
}

