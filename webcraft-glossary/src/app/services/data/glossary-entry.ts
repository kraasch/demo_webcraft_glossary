
export interface Abbreviation {
  short: string;
  long:  string;
}

export interface Reference {
  handle:  string;
  weblink: string;
  txt:     string;
}

export interface GlossaryEntry {
  id:            number;
  term:          string;
  text:          string;
  points:        string[];
  abbreviations: Abbreviation[];
  references:    Reference[];
  crossrefs:     number[];
  tags:          string[];
  imgurl:        string;
  ribbon:        string;
  creation_date: string;
  srcs:          string[];
}

export const DEFAULT_ENTRY: GlossaryEntry = {
  id: 0,
  term: '',
  text: '',
  points: [],
  abbreviations: [],
  references: [],
  crossrefs: [],
  tags: [],
  imgurl: '',
  ribbon:  '',
  creation_date:  '',
  srcs: [],
};

/* If creating entries is needed. */
// export const createGlossaryEntry = (overrides: Partial<GlossaryEntry> = {}): GlossaryEntry =>
//   ({ ...DEFAULT_ENTRY, ...overrides });

