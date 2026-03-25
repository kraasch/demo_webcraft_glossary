
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
    <div class="bg-base-100 border-base-300 collapse border rounded-none collapse-arrow">
      <input type="checkbox" class="peer" />
      <div class="collapse-title bg-base-300 text-info-content peer-checked:bg-info peer-checked:text-info-content" >
        Options, filters, searches and sorting
      </div>
      <div class="collapse-content bg-info text-info-content peer-checked:bg-info peer-checked:text-info-content" >

        <!-- option: background images -->
        <fieldset class="fieldset bg-info rounded-box p-2">
          <legend class="fieldset-legend">Card style</legend>
          <label class="label">
            <input type="checkbox" [checked]="cardsHaveBg" (change)="cardsHaveBg = !cardsHaveBg" class="toggle" />
            Background images
          </label>
        </fieldset>

        <!-- filter: tags -->
        <!-- NOTE: input tags within labels are risky. -->
        <fieldset class="fieldset bg-info rounded-box p-2">
          <legend class="fieldset-legend">Filter tags</legend>
            <form class="my-padded-tags-form" (submit)="$event.preventDefault()">
              <input type="button" class="btn btn-square m-1" value="×" (click)="deselectAllTags()"/>
              <input type="button" class="btn btn-square m-1" value="✓" (click)="selectAllTags()"/>
              @for (tag of allTags; track tag) {
                <input class="btn m-1" type="checkbox"
                  [attr.aria-label]="tag"
                  [name]="'tag_' + tag"
                  [checked]="selectedTags[tag]"
                  (change)="toggleTag(tag)"
                  [style.color]="tagColors[tag]"
                />
              }
            </form>
        </fieldset>
      </div>
    </div>

    <div class="mybox mt-3">
      @for (dataItem of filteredData; track dataItem.id) {
        <app-mytile
          class="myitem"
          [tileData]="dataItem"
          [hasBg]="cardsHaveBg"
          [crossrefData]="idToElementData"
          [tagColors]="tagColors"
          (tagClicked)="onTagClicked($event)"
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
  showTagsOnStartup: boolean = true;

  allTags: string[] = [];
  selectedTags: Record<string, boolean> = {};
  tagColors: Record<string, string> = {};
  idToElementData: Map<number, { term: string }> = new Map();

  ngOnInit(): void {
    // Extract all tags and initialize deselected.
    const tags = this.data.flatMap(item => item.tags || []).filter(tag => tag);
    this.allTags = [...new Set(tags)];
    this.allTags.forEach(tag => {
      this.selectedTags[tag] = this.showTagsOnStartup;
      this.tagColors[tag] = this.tagToColor(tag)
    });
    // Build idToElementData map for efficient reference.
    for (const item of this.data) {
      this.idToElementData.set(item.id, { term: item.term });
    }
  }

  // Resets collection of seleectedd tags.
  resetSelectedTags() {
    this.allTags.forEach(tag => (this.selectedTags[tag] = this.showTagsOnStartup));
  }

  // Select all tags.
  selectAllTags() {
    this.allTags.forEach(tag => (this.selectedTags[tag] = true));
  }

  // Deselect all tags.
  deselectAllTags() {
    this.allTags.forEach(tag => (this.selectedTags[tag] = false));
  }

  // Toggle a single tag.
  toggleTag(tag: string): void {
    this.selectedTags[tag] = !this.selectedTags[tag];
  }

  // Returns the same color for the same string.
  tagToColor(tagName: string): string {
    let hash = 0;
    for (let i = 0; i < tagName.length; i++) {
      hash = tagName.charCodeAt(i) + ((hash << 5) - hash);
    }
    let color = "#";
    for (let i = 0; i < 3; i++) {
      const value = (hash >> (i * 8)) & 0xff;
      color += value.toString(16).padStart(2, "0");
    }
    return color;
  }

  // Tag was clicked in child, therefore select it.
  onTagClicked(tag: string): void {
    this.deselectAllTags();
    this.selectedTags[tag] = true;
  }

  // Computed filtered data.
  get filteredData() {
    let filtered = this.data.filter( e => {
      return true;
      /* NOTE: inspiration for later.
      const searchName = this.myfilters.get('searchName')?.value?.toLowerCase() ?? '';
      const searchBody = this.myfilters.get('searchBody')?.value?.toLowerCase() ?? '';
      const heartRating = parseFloat(this.heartRating);
      console.log(searchName);
      // apply decade filter.
      return e.yr >= 1950 + (this.minYear * 10) &&
           // apply name search filter.
           (searchName === '' ||
             e.title.toLowerCase().includes(searchName)) &&
           // apply body search filter.
           (searchBody === '' ||
             e.title.toLowerCase().includes(searchBody) ||
             e.yr.toString().toLowerCase().includes(searchBody) ||
             e.description.toLowerCase().includes(searchBody)) &&
           // apply heart filter.
           (
             (heartRating == 0 ) ||
             (parseFloat(e.rating) >= heartRating && parseFloat(e.rating) <= heartRating + 1.0)
           );
        */
    });
    // Apply tag filter.
    filtered = filtered.filter( e => {
      let take: boolean = false;
      for (const tag of e.tags) {
        if (this.selectedTags[tag]) {
          take = true;
          break;
        }
      }
      return take;
    });
    return filtered;
  }
}

