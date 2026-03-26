
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalDataProviderService {
  /*
   * More terms:
   *
   *   - Microsoft
   *   - Internet Explorer
   *   - Netscape
   *   - Navigator
   *   - Mozilla
   *   - Firefox
   *   - JScript
   *   - TypeScript
   *   - Edge
   *   - Chromium
   *   - Chrome
   *   - Safari
   *   - geko
   *   - spidermonkey
   *   - V8
   *   - webkit
   *   - CSS
   *   - Adobe Flash Player
   *   - SSL
   *
   */
  data = [
    {
      id: 0,
      term: "npm",
      text: "A tool for managing JavaScript packages.",
      points: [
        "owned by GitHub, which is a subsidary of Microsoft",
      ],
      abbreviations: [
        { short: "npm", long: "node package manager" },
      ],
      references: [
        { handle: "official", weblink: "https://www.npmjs.com/",  txt: "npmjs.com",      },
        { handle: "docs",     weblink: "https://docs.npmjs.com/", txt: "docs.npmjs.com", },
      ],
      crossrefs: [ 1, ],
      tags: [ "tool" ],
      srcs: [ "ack" ],
      imgurl: "https://upload.wikimedia.org/wikipedia/commons/d/db/Npm-logo.svg",
    },
    {
      id: 1,
      term: "JavaScript",
      text: "A programming language made by Netscape, later Mozilla, during the browser wars in the 90s used to create interactive content on websites.",
      points: [
        "the name was chosen to include Java, which was a cool language at the time",
        "the Internet Explorer alternative was called JScript",
      ],
      abbreviations: [
        { short: "JS", long: "JavaScript" },
      ],
      references: [
        { handle: "official", weblink: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", txt: "mozilla.org",   },
      ],
      crossrefs: [ 4 ],
      tags: [ "language", "browser wars" ],
      srcs: [ "ack" ],
      imgurl: "https://upload.wikimedia.org/wikipedia/commons/9/91/JavaScript_screenshot.png",
    },
    {
      id: 2,
      term: "npx",
      text: "A command-line tool for executing node.js packages",
      points: [
        "allows to run node.js packages without installing them globally",
      ],
      abbreviations: [
        { short: "npx", long: "node package execution" },
      ],
      references: [
        { handle: "docs", weblink: "https://docs.npmjs.com/cli/v8/commands/npx", txt: "docs.npmjs.com",   },
      ],
      crossrefs: [ 0, ],
      tags: [ "tool" ],
      srcs: [ "ack" ],
      imgurl: "https://upload.wikimedia.org/wikipedia/commons/2/29/Linux_command-line._Bash._GNOME_Terminal._screenshot.png",
    },
    {
      id: 3,
      term: "Internet Explorer",
      text: "A web browser developed by Microsoft, widely used for many years, but now phased out.",
      points: [
        "IE is not fully removable from Windows because it was deeply integrated with system functions",
        "was officially retired on June 15, 2022",
      ],
      abbreviations: [
        { short: "IE", long: "Internet Explorer" },
      ],
      references: [
        { handle: "wikipedia", weblink: "https://en.wikipedia.org/wiki/Internet_Explorer", txt: "/Internet_Explorer",  },
      ],
      crossrefs: [ 4, ],
      tags: [ "browser", "browser wars" ],
      srcs: [ "ack" ],
      imgurl: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Fuck_Internet_Explorer.jpg",
    },
    {
      id: 4,
      term: "Browser Wars",
      text: "The intense competition between Microsoft's Internet Explorer and Netscape's Navigator in the late 90s and early 2000s.",
      points: [
        "Microsoft was found to have a monopoly power and accused of anti-competitive practices",
        "after losing the wars, Netscape was acquired by AOL",
      ],
      abbreviations: [
      ],
      references: [
        { handle: "wikipedia", weblink: "https://en.wikipedia.org/wiki/Browser_wars", txt: "/Browser_wars",  },
      ],
      crossrefs: [ 3, ],
      tags: [ "historic event" ],
      srcs: [ "ack" ],
      imgurl: "https://upload.wikimedia.org/wikipedia/commons/1/13/Countries_by_most_used_web_browser.png",
    },
    /* SOME DUMMY ENTRIES
     */
    { id:  5, term: "A", text: "B", points: [ "C", "D", ], abbreviations: [ { short: "E", long: "F" }, { short: "G", long: "H" }, ], references: [ { handle: "I", weblink: "J", txt: "JJ" }, { handle: "K", weblink: "L", txt: "LL" }, ], crossrefs: [ 0, 1 ], tags: [ "M", "N" ], srcs: [ "O", "P" ], imgurl: "", },
    { id:  6, term: "A", text: "B", points: [ "C", "D", ], abbreviations: [ { short: "E", long: "F" }, { short: "G", long: "H" }, ], references: [ { handle: "I", weblink: "J", txt: "JJ" }, { handle: "K", weblink: "L", txt: "LL" }, ], crossrefs: [ 0, 1 ], tags: [ "M", "N" ], srcs: [ "O", "P" ], imgurl: "", },
    { id:  7, term: "A", text: "B", points: [ "C", "D", ], abbreviations: [ { short: "E", long: "F" }, { short: "G", long: "H" }, ], references: [ { handle: "I", weblink: "J", txt: "JJ" }, { handle: "K", weblink: "L", txt: "LL" }, ], crossrefs: [ 0, 1 ], tags: [ "M", "N" ], srcs: [ "O", "P" ], imgurl: "", },
    { id:  8, term: "A", text: "B", points: [ "C", "D", ], abbreviations: [ { short: "E", long: "F" }, { short: "G", long: "H" }, ], references: [ { handle: "I", weblink: "J", txt: "JJ" }, { handle: "K", weblink: "L", txt: "LL" }, ], crossrefs: [ 0, 1 ], tags: [ "M", "N" ], srcs: [ "O", "P" ], imgurl: "", },
    { id:  9, term: "A", text: "B", points: [ "C", "D", ], abbreviations: [ { short: "E", long: "F" }, { short: "G", long: "H" }, ], references: [ { handle: "I", weblink: "J", txt: "JJ" }, { handle: "K", weblink: "L", txt: "LL" }, ], crossrefs: [ 0, 1 ], tags: [ "M", "N" ], srcs: [ "O", "P" ], imgurl: "", },
    { id: 10, term: "A", text: "B", points: [ "C", "D", ], abbreviations: [ { short: "E", long: "F" }, { short: "G", long: "H" }, ], references: [ { handle: "I", weblink: "J", txt: "JJ" }, { handle: "K", weblink: "L", txt: "LL" }, ], crossrefs: [ 0, 1 ], tags: [ "M", "N" ], srcs: [ "O", "P" ], imgurl: "", },
    { id: 11, term: "A", text: "B", points: [ "C", "D", ], abbreviations: [ { short: "E", long: "F" }, { short: "G", long: "H" }, ], references: [ { handle: "I", weblink: "J", txt: "JJ" }, { handle: "K", weblink: "L", txt: "LL" }, ], crossrefs: [ 0, 1 ], tags: [ "M", "N" ], srcs: [ "O", "P" ], imgurl: "", },
    { id: 12, term: "A", text: "B", points: [ "C", "D", ], abbreviations: [ { short: "E", long: "F" }, { short: "G", long: "H" }, ], references: [ { handle: "I", weblink: "J", txt: "JJ" }, { handle: "K", weblink: "L", txt: "LL" }, ], crossrefs: [ 0, 1 ], tags: [ "M", "N" ], srcs: [ "O", "P" ], imgurl: "", },
    { id: 13, term: "A", text: "B", points: [ "C", "D", ], abbreviations: [ { short: "E", long: "F" }, { short: "G", long: "H" }, ], references: [ { handle: "I", weblink: "J", txt: "JJ" }, { handle: "K", weblink: "L", txt: "LL" }, ], crossrefs: [ 0, 1 ], tags: [ "M", "N" ], srcs: [ "O", "P" ], imgurl: "", },
    { id: 14, term: "A", text: "B", points: [ "C", "D", ], abbreviations: [ { short: "E", long: "F" }, { short: "G", long: "H" }, ], references: [ { handle: "I", weblink: "J", txt: "JJ" }, { handle: "K", weblink: "L", txt: "LL" }, ], crossrefs: [ 0, 1 ], tags: [ "M", "N" ], srcs: [ "O", "P" ], imgurl: "", },
    { id: 15, term: "A", text: "B", points: [ "C", "D", ], abbreviations: [ { short: "E", long: "F" }, { short: "G", long: "H" }, ], references: [ { handle: "I", weblink: "J", txt: "JJ" }, { handle: "K", weblink: "L", txt: "LL" }, ], crossrefs: [ 0, 1 ], tags: [ "M", "N" ], srcs: [ "O", "P" ], imgurl: "", },
    { id: 16, term: "A", text: "B", points: [ "C", "D", ], abbreviations: [ { short: "E", long: "F" }, { short: "G", long: "H" }, ], references: [ { handle: "I", weblink: "J", txt: "JJ" }, { handle: "K", weblink: "L", txt: "LL" }, ], crossrefs: [ 0, 1 ], tags: [ "M", "N" ], srcs: [ "O", "P" ], imgurl: "", },
  ];

  getData() {
    return this.data;
  }

}

