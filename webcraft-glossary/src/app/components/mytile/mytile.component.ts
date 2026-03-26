
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { GlossaryEntry, DEFAULT_ENTRY } from '../../services/data/glossary-entry';

@Component({
  selector: 'app-mytile',
  standalone: true,
  imports: [],
  templateUrl: 'mytile.component.html',
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

