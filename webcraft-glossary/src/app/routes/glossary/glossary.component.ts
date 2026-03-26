
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormControl, FormGroup } from '@angular/forms';
import { MytileComponent } from '../../components/mytile/mytile.component';
import { LocalDataProviderService } from '../../services/data/local-data-provider.service';

@Component({
  selector: 'app-glossary',
  standalone: true,
  imports: [
    MytileComponent,
    ReactiveFormsModule,
    FormsModule,
  ],
  template: `

    <!-- BEGIN OF SEARCH OPTIONS -->
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
            <input type="checkbox" class="toggle" [checked]="cardsHaveBg" (change)="cardsHaveBg = !cardsHaveBg" />
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

        <!-- search within text -->
        <fieldset class="fieldset bg-info rounded-box p-2">
          <legend class="fieldset-legend">Search content</legend>
          <form class="my-padded-tags-form" (submit)="$event.preventDefault()" [formGroup]="myfilters">
            <input formControlName="searchBody" type="text" placeholder="Search here" class="input" />
          </form>
          <label class="label">
            <input type="checkbox" class="toggle" [checked]="searchWithinTerms" (change)="searchWithinTerms = !searchWithinTerms" />
            Include titles
          </label>
          <label class="label">
            <input type="checkbox" class="toggle" [checked]="searchWithinTexts" (change)="searchWithinTexts = !searchWithinTexts" />
            Include descriptions
          </label>
          <label class="label">
            <input type="checkbox" class="toggle" [checked]="searchWithinPoints" (change)="searchWithinPoints = !searchWithinPoints" />
            Include notes
          </label>
        </fieldset>

        <!-- sort results -->
        <!--
          TODO: by tag number (numerically).
          TODO: by title (alphabetically).
        -->
        <fieldset class="fieldset bg-info rounded-box p-2">
          <legend class="fieldset-legend">Sort style</legend>
          <label class="label">
            <input type="checkbox" class="toggle" [checked]="sortAscending" (change)="sortAscending = !sortAscending" />
            Sort ascending
          </label>
        </fieldset>

      </div>
    </div>
    <!-- END OF SEARCH OPTIONS -->

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
        <p></p>
        <!--
        <p>No cards to display.</p>
        -->
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
  searchWithinTerms:  boolean = true;
  searchWithinTexts:  boolean = true;
  searchWithinPoints: boolean = true;
  sortAscending:      boolean = true;

  myfilters = new FormGroup({
    searchBody:  new FormControl('')
  });

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
      const searchBody = this.myfilters.get('searchBody')?.value?.toLowerCase() ?? ''; // The search phrase provided by input.
      let searchTargets = ""; // The text which will be searched in the end.
      // Add parts to search in, depending on toggle choices.
      if (this.searchWithinTerms) {
        searchTargets += e.term;
      }
      if (this.searchWithinTexts) {
        searchTargets += e.text;
      }
      if (this.searchWithinPoints) {
        searchTargets += e.points;
      }
      // Apply search filter.
      return (searchBody === '' || searchTargets.toLowerCase().includes(searchBody));
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

