
import { Component, Input } from '@angular/core';
import { GlossaryEntry, DEFAULT_ENTRY } from '../../services/data/glossary-entry';

@Component({
  selector: 'app-mytile',
  standalone: true,
  imports: [],
  template: `
    <div class="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">
          Card Title
          <div class="badge badge-secondary">NEW</div>
        </h2>
        <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
        <div class="card-actions justify-end">
          <div class="badge badge-outline">Fashion</div>
          <div class="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
    <!-------------------------------------------
    * <div class="tile">
    *   <h3>{{ tileData.term }}</h3>
    *   <p>{{ tileData.text }}</p>
    *
    *   @if (tileData.points?.length) {
    *     <ul>
    *       @for (point of tileData.points; track $index) { <li>{{ point }}</li> }
    *     </ul>
    *   }
    *
    *   @if (tileData.sourceLinks?.length) {
    *     <div>Sources:
    *       @for (source of tileData.sourceLinks; track source.handle) {
    *         <a [href]="source.weblink">{{ source.handle }}</a>
    *       }
    *     </div>
    *   }
    *
    *   Tags: {{ tileData.tags?.join(', ') ?? 'none' }}
    *   Types: {{ tileData.sourceTypes?.join(', ') ?? 'none' }}
    * </div>
    -------------------------------------------->
  `,
  styles: `
    .card {
      width: 100%;
      height: 100%;
    }
`
})
export class MytileComponent {
  @Input() tileData: GlossaryEntry = DEFAULT_ENTRY;
}

