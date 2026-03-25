
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { GlossaryEntry, DEFAULT_ENTRY } from '../../services/data/glossary-entry';

@Component({
  selector: 'app-mytile',
  standalone: true,
  imports: [],
  template: `
    <div class="card bg-base-200 w-96 shadow-sm image-full" >
        @if (hasBg) {
        <figure>
          <img alt="Image" src="{{ tileData.imgurl }}" />
        </figure>
        }
        <!--- TODO: include nice images here
          see for more https://daisyui.com/components/card/
          <figure class="h-20 min-w-full rounded-lg">
          <figure class="h-20 w-20 rounded-lg">
        -->
      <div class="card-body">
        <h2 class="card-title">
          {{ tileData.term }}
          @if (tileData.tags.length) {
            <!--- TODO: update filter to only include these tags on button click -->
            <div class="card-actions justify-end">
              @for (tag of tileData.tags; track tag) {
                <button
                  class="badge badge-info"
                  [style.background-color]="tagColors[tag]"
                  (click)="emitTagClicked(tag)"
                >
                  {{ tag }}
                </button>
              }
            </div>
          }
        </h2>
        <div>
          <p>{{ tileData.text }}</p>
          @if (tileData.points.length) {
            <ul class="list bg-base-100 rounded-box opacity-80 mt-3">
              @for (point of tileData.points; track point; let idx = $index;) {
                <li class="list-row">
                  <svg class="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor">
                      <path d="M6 3L20 12 6 21 6 3z" />
                    </g>
                  </svg>
                  <div class="list-col-grow">
                    <div>{{ point }}</div>
                  </div>
                </li>
              }
            </ul>
          }
          @if (tileData.references.length) {
            <ul class="list-disc space-y-0 pl-4 text-xs mt-3">
              @for (ref of tileData.references; track ref.weblink ) {
                <li class="text-xs md:text-xs">
                  {{ ref.handle }}: <a class="link link-info text-xs" href="{{ ref.weblink }}">{{ ref.txt }}</a>
                </li>
              }
            </ul>
          }
          <!--- TODO: resolve link to crossref -->
          @if (getCrossrefData().length) {
            <div class="mt-2 text-sm text-secondary">
              <strong class="pr-2">See also:</strong>
              @for (term of getCrossrefData(); track $index) {
                <div class="badge badge-outline">{{ term  }}</div>
              }
            </div>
          }
        </div>
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
  @Input() hasBg: boolean = false;
  @Input() crossrefData!: Map<number, { term: string }>;
  @Input() tagColors: Record<string, string> = {};
  @Output() tagClicked = new EventEmitter<string>();

  emitTagClicked(tag: string): void {
    this.tagClicked.emit(tag);
  }

  getCrossrefData(): string[] {
    if (!this.tileData?.crossrefs?.length) return [];
    return this.tileData.crossrefs
      .map((id: number) => this.crossrefData.get(id)?.term || '')
      .filter(term => !!term);
  }
}

