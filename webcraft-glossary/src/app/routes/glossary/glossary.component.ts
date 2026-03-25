
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

    <div class="bg-base-100 border-base-300 collapse border rounded-none">
      <input type="checkbox" class="peer" />
      <div class="collapse-title bg-base-300 text-secondary-content peer-checked:bg-secondary peer-checked:text-secondary-content" >
        » Options
      </div>
      <!-- collapse-content -->
      <div class="bg-secondary text-secondary-content peer-checked:bg-secondary peer-checked:text-secondary-content" >
        <fieldset class="fieldset bg-secondary border-info rounded-box border p-4">
          <legend class="fieldset-legend">Card style</legend>
          <label class="label">
            <input type="checkbox" [checked]="cardsHaveBg" (change)="cardsHaveBg = !cardsHaveBg" class="toggle" />
            Background images
          </label>
        </fieldset>
      </div>
    </div>

    <div class="mybox">
      @for (dataItem of data; track dataItem.id) {
        <app-mytile
          class="myitem"
          [tileData]="dataItem"
          [hasBg]="cardsHaveBg"
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

  cardsHaveBg: boolean = true;
}

