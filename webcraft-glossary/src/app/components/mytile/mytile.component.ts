
import { Component, Input } from '@angular/core';
import { GlossaryEntry, DEFAULT_ENTRY } from '../../services/data/glossary-entry';

@Component({
  selector: 'app-mytile',
  standalone: true,
  imports: [],
  template: `
    <div class="card bg-base-100 w-96 shadow-sm">
      <!--- TODO: include nice images here -->
      <!-- -- or use https://daisyui.com/components/card/#card-with-image-overlay -- --
        <figure class="h-20 min-w-full rounded-lg">
          <img alt="Image" src="https://img.daisyui.com/images/profile/demo/batperson@192.webp" />
        </figure>
        <figure class="h-20 w-20 rounded-lg">
          <img alt="Image" src="https://img.daisyui.com/images/profile/demo/batperson@192.webp" />
        </figure>
      -->
      <div class="card-body">
        <h2 class="card-title">
          {{ tileData.term }}
          @if (tileData.tags.length) {
            <!--- TODO: look up tag color here -->
            <!--- TODO: update filter to only include these tags on button click -->
            <div class="card-actions justify-end">
              @for (tag of tileData.tags; track tag) {
                <div class="badge badge-info">{{ tag }}</div>
              }
            </div>
          }
        </h2>
        <p>{{ tileData.text }}</p>
        @if (tileData.points.length) {
          <ul>
            @for (point of tileData.points; track point) {
              <li>{{ point }}</li>
            }
          </ul>
        }
        @if (tileData.references.length) {
          <ul>
            @for (ref of tileData.references; track ref.weblink ) {
              <li>
                {{ ref.handle }}: <a href="{{ ref.weblink }}">{{ ref.weblink }}</a>
              </li>
            }
          </ul>
        }
        @if (tileData.crossrefs.length) {
          <div class="card-actions justify-end">
            @for (crossref  of tileData.crossrefs; track crossref ) {
              <!--- TODO: resolve link to crossref -->
              <!--- TODO: resolve name of crossref -->
              <!--- TODO: update filter to only include this reference on button click -->
              <div class="badge badge-outline">{{ crossref  }}</div>
            }
          </div>
        }
      </div>
    </div>
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

