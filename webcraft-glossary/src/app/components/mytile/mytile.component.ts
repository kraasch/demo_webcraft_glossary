
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { GlossaryEntry, DEFAULT_ENTRY } from '../../services/data/glossary-entry';
import { RibbonFullNamesPipe } from './ribbon-full-names.pipe';

const colors: Record<string, string> = {
  "concrete":    "#a0a0a0",
  "green":       "#4fd11f",
  "orange":      "#ff7700",
  "yellow":      "#f5ef42",
  "red":         "#ff0000",
  "pink":        "#ff00dd",
  "blue":        "#0077ff",
  "c0ffee":      "#c0ffee",
  "eggshell":    "#f0ead6",
};
const ribbonColors: Record<string, string> = {
  // permanent.
  "HW":    colors['green'],
  // temporary and helpers.
  "NEW":   colors['orange'],
  "NOW":   colors['red'],
};
const defaultRibbonColor: string = colors['yellow'];

@Component({
  selector: 'app-mytile',
  standalone: true,
  imports: [
    RibbonFullNamesPipe,
  ],
  templateUrl: 'mytile.component.html',
  styles: `
    .card {
      width: 100%;
      height: 100%;
    }

   .ribbon-wrapper {
     position: absolute;
     top: -3px;
     right: -3px;
     width: 74px;
     height: 74px;
     overflow: hidden;
     z-index: 10;
     pointer-events: none;
   }

   .ribbon {
     font: bold 12px sans-serif;
     color: #333;
     text-align: center;
     transform: rotate(45deg);
     position: relative;
     padding: 5px 0;
     left: -6px;
     top: 13px;
     width: 110px;
     box-shadow: 0 2px 6px rgba(0,0,0,0.2);
     pointer-events: none;
   }

   .ribbon:before, .ribbon:after {
     content: "";
     border-top: 2px solid #f57f17;
     border-left: 2px solid transparent;
     border-right: 2px solid transparent;
     position: absolute;
     bottom: -2px;
     pointer-events: none;
   }

   .ribbon:before {
     left: 0;
     pointer-events: none;
   }

   .ribbon:after {
     right: 0;
     pointer-events: none;
   }

   .badge.badge-info:hover {
     cursor: pointer; /* Values can be "default", "help", "move", "not-allowed", etc. */
   }

   .badge.badge-outline:hover {
     cursor: pointer;
   }
`
})
export class MytileComponent {

  @Input() tileData: GlossaryEntry = DEFAULT_ENTRY;
  @Input() hasBg: boolean = false;
  @Input() crossrefData!: Map<number, { term: string }>;
  @Input() tagColors: Record<string, string> = {};
  @Input() tagFgColors: Record<string, string> = {};
  @Output() tagClicked = new EventEmitter<string>();
  @Output() refClicked = new EventEmitter<string>();

  searchRibbonColor(text: string) {
    let newColor = defaultRibbonColor;
    if (text in ribbonColors) {
      newColor = ribbonColors[text];
    }
    return newColor;
  }

  emitRefClicked(term: string): void {
    this.refClicked.emit(term);
  }

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

