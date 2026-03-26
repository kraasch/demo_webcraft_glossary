
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalDataProviderService {
  /*
   * More terms:
   *
   */
  data = [
    {
      id: 0,
      term: "npm",
      text: "A tool for managing JavaScript packages and fundamentally a dependency manager: it reads your package.json and reproducibly installs the exact versions of libraries.",
      points: [
        "Always commit package.json and package-lock.json so others can run npm install.",
        "Avoid editing node_modules by hand, treat it as a build artifact that npm will recreate.",
        "Owned by GitHub, which is a subsidary of Microsoft.",
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
      imgurl: "https://upload.wikimedia.org/wikipedia/commons/d/db/Npm-logo.svg",
      // additional info.
      ribbon: "",
      creation_date: "2026-05-26",
      srcs: [ "ack" ],
    },
    {
      id: 1,
      term: "JavaScript",
      text: "A programming language made by Netscape, later Mozilla, during the browser wars in the 90s used to create interactive content on websites.",
      points: [
        "The name was chosen to include Java, which was a cool language at the time.",
        "The Internet Explorer alternative was called JScript.",
      ],
      abbreviations: [
        { short: "JS", long: "JavaScript" },
      ],
      references: [
        { handle: "official", weblink: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", txt: "mozilla.org",   },
      ],
      crossrefs: [ 4 ],
      tags: [ "language", "browser wars" ],
      imgurl: "https://upload.wikimedia.org/wikipedia/commons/9/91/JavaScript_screenshot.png",
      // additional info.
      ribbon: "",
      creation_date: "2026-05-26",
      srcs: [ "ack" ],
    },
    {
      id: 2,
      term: "npx",
      text: "A command-line tool for executing npm packages",
      points: [
        "Allows to run node.js packages without installing them globally.",
        "When executing, npx checks locally first at node_modules/.bin, then at cache, then at registry, runs the package and cleans up afterward.",
      ],
      abbreviations: [
        { short: "npx", long: "node package execution" },
      ],
      references: [
        { handle: "docs", weblink: "https://docs.npmjs.com/cli/v8/commands/npx", txt: "docs.npmjs.com",   },
      ],
      crossrefs: [ 0, ],
      tags: [ "tool" ],
      imgurl: "https://upload.wikimedia.org/wikipedia/commons/2/29/Linux_command-line._Bash._GNOME_Terminal._screenshot.png",
      // additional info.
      ribbon: "",
      creation_date: "2026-05-26",
      srcs: [ "ack" ],
    },
    {
      id: 3,
      term: "Internet Explorer",
      text: "A web browser developed by Microsoft, widely used for many years, but now phased out.",
      points: [
        "IE is not fully removable from Windows because it was deeply integrated with system functions.",
        "Was officially retired on June 15, 2022.",
      ],
      abbreviations: [
        { short: "IE", long: "Internet Explorer" },
      ],
      references: [
        { handle: "wikipedia", weblink: "https://en.wikipedia.org/wiki/Internet_Explorer", txt: "/Internet_Explorer",  },
      ],
      crossrefs: [ 4, ],
      tags: [ "browser", "browser wars" ],
      imgurl: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Fuck_Internet_Explorer.jpg",
      // additional info.
      ribbon: "",
      creation_date: "2026-05-26",
      srcs: [ "ack" ],
    },
    {
      id: 4,
      term: "Browser Wars",
      text: "The intense competition between Microsoft's Internet Explorer and Netscape's Navigator in the late 90s and early 2000s.",
      points: [
        "Microsoft was found to have a monopoly power and accused of anti-competitive practices.",
        "After losing the wars, Netscape was acquired by AOL.",
      ],
      abbreviations: [
      ],
      references: [
        { handle: "wikipedia", weblink: "https://en.wikipedia.org/wiki/Browser_wars", txt: "/Browser_wars",  },
      ],
      crossrefs: [ 3, ],
      tags: [ "historic event" ],
      imgurl: "https://upload.wikimedia.org/wikipedia/commons/1/13/Countries_by_most_used_web_browser.png",
      // additional info.
      ribbon: "",
      creation_date: "2026-05-26",
      srcs: [ "ack" ],
    },
    /* SOME DUMMY ENTRIES BELOW */
  {
    id: 5,
    term: "JScript",
    text: "Microsoft's proprietary implementation of JavaScript (1996), reverse-engineered from Netscape's version during browser wars.",
    points: [
      "Powered client-side scripting in Internet Explorer.",
      "ECMAScript-compliant but with IE-specific extensions.",
      "Predecessor to modern Chakra/ChakraCore engines.",
    ],
    abbreviations: [],
    references: [
      { handle: "wikipedia", weblink: "https://en.wikipedia.org/wiki/JScript", txt: "Wikipedia" },
    ],
    crossrefs: [ 0, 6 ],
    tags: [ "javascript", "engine" ],
    imgurl: "",
    // additional info.
    ribbon: "AI",
    creation_date: "2026-03-26",
    srcs: [ "perplexity" ],
  },
  {
    id: 6,
    term: "TypeScript",
    text: "Microsoft's open-source superset of JavaScript adding static types, compiles to plain JS for scalable web apps.",
    points: [
      "Created 2012; used by Angular, VS Code.",
      "Catch-all errors at compile-time.",
      "Adopted by 80%+ of surveyed JS devs.",
    ],
    abbreviations: [ { short: "TS", long: "TypeScript" } ],
    references: [
      { handle: "official", weblink: "https://www.typescriptlang.org/", txt: "typescriptlang.org" },
    ],
    crossrefs: [ 0 ],
    tags: [ "language" ],
    imgurl: "",
    // additional info.
    ribbon: "AI",
    creation_date: "2026-03-26",
    srcs: [ "perplexity" ],
  },
  {
    id: 7,
    term: "Edge",
    text: "Microsoft's web browser; originally Trident-based (2015), relaunched on Chromium (2020) for cross-platform compatibility.",
    points: [
      "Default Windows 10/11 browser.",
      "Integrates deeply with Microsoft services.",
      "Faster than legacy Edge; supports most Chrome extensions.",
    ],
    abbreviations: [ { short: "MS Edge", long: "Microsoft Edge" } ],
    references: [
      { handle: "official", weblink: "https://www.microsoft.com/edge", txt: "microsoft.com/edge" },
    ],
    crossrefs: [ 0, 8, 9 ],
    tags: [ "browser" ],
    imgurl: "",
    // additional info.
    ribbon: "AI",
    creation_date: "2026-03-26",
    srcs: [ "perplexity" ],
  },
  {
    id: 8,
    term: "Chromium",
    text: "Google's open-source browser project (2008), foundation for Chrome, Edge, Opera; uses Blink engine and V8 JS.",
    points: [
      "Powers 70%+ of browsers worldwide.",
      "Rapid release cycle (4x/year).",
      "No proprietary Google features like sync.",
    ],
    abbreviations: [],
    references: [
      { handle: "official", weblink: "https://www.chromium.org/", txt: "chromium.org" },
    ],
    crossrefs: [ 7, 9, 13 ],
    tags: [ "browser", "engine" ],
    imgurl: "",
    // additional info.
    ribbon: "AI",
    creation_date: "2026-03-26",
    srcs: [ "perplexity" ],
  },
  {
    id: 9,
    term: "Chrome",
    text: "Google's proprietary browser (2008) based on Chromium, dominant with 65%+ market share, fast V8 JavaScript.",
    points: [
      "Introduced sandboxed tabs, omnibox.",
      "DevTools set web debugging standard.",
      "Syncs across devices via Google account.",
    ],
    abbreviations: [ { short: "Google Chrome", long: "Chrome" } ],
    references: [
      { handle: "official", weblink: "https://www.google.com/chrome/", txt: "google.com/chrome" },
    ],
    crossrefs: [ 8, 13 ],
    tags: [ "browser" ],
    imgurl: "",
    // additional info.
    ribbon: "AI",
    creation_date: "2026-03-26",
    srcs: [ "perplexity" ],
  },
  {
    id: 10,
    term: "Safari",
    text: "Apple's macOS/iOS browser using WebKit engine, emphasizes battery life and privacy features like Intelligent Tracking Prevention.",
    points: [
      "Default on Apple devices.",
      "Fastest on Apple silicon.",
      "iCloud tabs sync across devices.",
    ],
    abbreviations: [],
    references: [
      { handle: "official", weblink: "https://www.apple.com/safari/", txt: "apple.com/safari" },
    ],
    crossrefs: [ 14 ],
    tags: [ "browser" ],
    imgurl: "",
    // additional info.
    ribbon: "AI",
    creation_date: "2026-03-26",
    srcs: [ "perplexity" ],
  },
  {
    id: 11,
    term: "Gecko",
    text: "Mozilla's open-source web rendering engine powering Firefox, supports modern HTML/CSS/JS standards.",
    points: [
      "Layout engine forked from Netscape.",
      "Quantum rewrite (2017) matched Blink speed.",
      "Used in Thunderbird, Servo (Rust rewrite).",
    ],
    abbreviations: [ { short: "Gecko", long: "Gecko" } ], // sic: intentional
    references: [
      { handle: "mozilla", weblink: "https://developer.mozilla.org/en-US/docs/Mozilla/Gecko", txt: "MDN Gecko" },
    ],
    crossrefs: [ 3, 4 ],
    tags: [ "rendering-engine" ],
    imgurl: "",
    // additional info.
    ribbon: "AI",
    creation_date: "2026-03-26",
    srcs: [ "perplexity" ],
  },
  {
    id: 12,
    term: "SpiderMonkey",
    text: "Mozilla's JavaScript engine (1998), first JS implementation; powers Firefox with JIT compilation.",
    points: [
      "Named after Netscape mascot.",
      "Implements ECMAScript standard.",
      "Influenced V8, JavaScriptCore.",
    ],
    abbreviations: [],
    references: [
      { handle: "mozilla", weblink: "https://developer.mozilla.org/en-US/docs/Mozilla/Projects/SpiderMonkey", txt: "MDN SpiderMonkey" },
    ],
    crossrefs: [ 3, 4 ],
    tags: [ "js-engine" ],
    imgurl: "",
    // additional info.
    ribbon: "AI",
    creation_date: "2026-03-26",
    srcs: [ "perplexity" ],
  },
  {
    id: 13,
    term: "V8",
    text: "Google's high-performance JavaScript engine (2008) using JIT compilation; core of Chrome, Node.js, Deno.",
    points: [
      "Ignition interpreter + TurboFan optimizer.",
      "Released as open source.",
      "Powers server-side JS revolution.",
    ],
    abbreviations: [],
    references: [
      { handle: "official", weblink: "https://v8.dev/", txt: "v8.dev" },
    ],
    crossrefs: [ 8, 9 ],
    tags: [ "js-engine" ],
    imgurl: "",
    // additional info.
    ribbon: "AI",
    creation_date: "2026-03-26",
    srcs: [ "perplexity" ],
  },
  {
    id: 14,
    term: "WebKit",
    text: "Apple's open-source rendering engine (2001) forked to Blink (2013); powers Safari.",
    points: [
      "KHTML fork optimized for speed.",
      "JavaScriptCore engine.",
      "Used in GNOME Epiphany.",
    ],
    abbreviations: [],
    references: [
      { handle: "webkit", weblink: "https://webkit.org/", txt: "webkit.org" },
    ],
    crossrefs: [ 10 ],
    tags: [ "rendering-engine" ],
    imgurl: "",
    // additional info.
    ribbon: "AI",
    creation_date: "2026-03-26",
    srcs: [ "perplexity" ],
  },
  {
    id: 15,
    term: "CSS",
    text: "Cascading Style Sheets language for styling HTML/XML; separates content from presentation.",
    points: [
      "Level 1 (1996), Flexbox/Grid modern layout.",
      "Selectors, animations, variables (@property).",
      "Tailwind, styled-components popular frameworks.",
    ],
    abbreviations: [ { short: "CSS", long: "Cascading Style Sheets" } ],
    references: [
      { handle: "w3c", weblink: "https://www.w3.org/Style/CSS/", txt: "W3C CSS" },
    ],
    crossrefs: [ 20 ],
    tags: [ "stylesheet" ],
    imgurl: "",
    // additional info.
    ribbon: "AI",
    creation_date: "2026-03-26",
    srcs: [ "perplexity" ],
  },
  {
    id: 16,
    term: "Adobe Flash Player",
    text: "Multimedia plugin (1996-2020) for animations, video; largely replaced by HTML5.",
    points: [
      "Dominant rich web media 2000s.",
      "Security issues led to deprecation.",
      "End-of-life: Dec 31, 2020.",
    ],
    abbreviations: [ { short: "Flash", long: "Adobe Flash Player" } ],
    references: [
      { handle: "adobe", weblink: "https://www.adobe.com/products/flashplayer/end-of-life-alternative.html", txt: "Adobe EOL" },
    ],
    crossrefs: [],
    tags: [ "plugin" ],
    imgurl: "",
    // additional info.
    ribbon: "AI",
    creation_date: "2026-03-26",
    srcs: [ "perplexity" ],
  },
  {
    id: 17,
    term: "SSL",
    text: "Secure Sockets Layer protocol (1995) for encrypting network connections; predecessor to TLS.",
    points: [
      "Version 3.0 basis for TLS 1.0.",
      "Deprecated due to vulnerabilities.",
      "Use TLS 1.2+ instead.",
    ],
    abbreviations: [ { short: "SSL", long: "Secure Sockets Layer" } ],
    references: [
      { handle: "wikipedia", weblink: "https://en.wikipedia.org/wiki/Transport_Layer_Security#SSL_2.0_and_3.0", txt: "Wikipedia" },
    ],
    crossrefs: [ 19 ],
    tags: [ "security", "protocol" ],
    imgurl: "",
    // additional info.
    ribbon: "AI",
    creation_date: "2026-03-26",
    srcs: [ "perplexity" ],
  },
  {
    id: 18,
    term: "HTTP",
    text: "Hypertext Transfer Protocol for transferring web data; stateless request-response.",
    points: [
      "HTTP/1.1 (1997) persistent connections.",
      "HTTP/2 multiplexing; HTTP/3 QUIC.",
      "REST APIs built on HTTP.",
    ],
    abbreviations: [ { short: "HTTP", long: "Hypertext Transfer Protocol" } ],
    references: [
      { handle: "ietf", weblink: "https://httpwg.org/", txt: "HTTP Working Group" },
    ],
    crossrefs: [ 19 ],
    tags: [ "protocol" ],
    imgurl: "",
    // additional info.
    ribbon: "AI",
    creation_date: "2026-03-26",
    srcs: [ "perplexity" ],
  },
  {
    id: 19,
    term: "HTTPS",
    text: "HTTP over TLS/SSL encryption; secures data in transit with certificates.",
    points: [
      "Prevents MITM attacks, ensures authenticity.",
      "Google marks HTTP 'Not Secure' since 2018.",
      "HSTS enforces HTTPS-only.",
    ],
    abbreviations: [ { short: "HTTPS", long: "HTTP Secure" } ],
    references: [
      { handle: "ietf", weblink: "https://datatracker.ietf.org/doc/html/rfc2818", txt: "RFC 2818" },
    ],
    crossrefs: [ 17, 18 ],
    tags: [ "protocol", "security" ],
    imgurl: "",
    // additional info.
    ribbon: "AI",
    creation_date: "2026-03-26",
    srcs: [ "perplexity" ],
  },
  {
    id: 20,
    term: "HTML",
    text: "HyperText Markup Language standard for web page structure and content.",
    points: [
      "HTML5 (2014) multimedia, canvas, semantic tags.",
      "Living standard via WHATWG.",
      "Powers 99% of websites.",
    ],
    abbreviations: [ { short: "HTML", long: "HyperText Markup Language" } ],
    references: [
      { handle: "whatwg", weblink: "https://html.spec.whatwg.org/", txt: "WHATWG HTML" },
    ],
    crossrefs: [ 15 ],
    tags: [ "markup" ],
    imgurl: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
    // additional info.
    ribbon: "AI",
    creation_date: "2026-03-26",
    srcs: [ "perplexity" ],
  },
  {
    id: 21,
    term: "FTP",
    text: "File Transfer Protocol (1971) for uploading/downloading files over networks.",
    points: [
      "Command-line or GUI clients.",
      "Mostly replaced by SFTP, WebDAV for security.",
      "Still used for large file hosting.",
    ],
    abbreviations: [ { short: "FTP", long: "File Transfer Protocol" } ],
    references: [
      { handle: "ietf", weblink: "https://datatracker.ietf.org/doc/html/rfc959", txt: "RFC 959" },
    ],
    crossrefs: [],
    tags: [ "protocol" ],
    imgurl: "",
    // additional info.
    ribbon: "AI",
    creation_date: "2026-03-26",
    srcs: [ "perplexity" ],
  },
  {
    id: 22,
    term: "SMTP",
    text: "Simple Mail Transfer Protocol for sending emails between servers.",
    points: [
      "Port 25/587; requires authentication.",
      "Works with IMAP/POP3 for receiving.",
      "SPF/DKIM/DMARC prevent spam.",
    ],
    abbreviations: [ { short: "SMTP", long: "Simple Mail Transfer Protocol" } ],
    references: [
      { handle: "ietf", weblink: "https://datatracker.ietf.org/doc/html/rfc5321", txt: "RFC 5321" },
    ],
    crossrefs: [],
    tags: [ "protocol", "email" ],
    imgurl: "",
    // additional info.
    ribbon: "AI",
    creation_date: "2026-03-26",
    srcs: [ "perplexity" ],
  },
  {
    id: 23,
    term: "www",
    text: "World Wide Web information system using HTTP, HTML, URLs invented by Tim Berners-Lee (1989).",
    points: [
      "Not the Internet; runs atop TCP/IP.",
      "Browser-server architecture.",
      "Semantic Web (RDF) evolution.",
    ],
    abbreviations: [ { short: "WWW", long: "World Wide Web" }, { short: "W3", long: "World Wide Web Consortium" } ],
    references: [
      { handle: "w3c", weblink: "https://www.w3.org/", txt: "w3.org" },
    ],
    crossrefs: [ 18, 20 ],
    tags: [ "web" ],
    imgurl: "https://upload.wikimedia.org/wikipedia/commons/9/95/World_Wide_Web_Symbol.svg",
    // additional info.
    ribbon: "AI",
    creation_date: "2026-03-26",
    srcs: [ "perplexity" ],
  },
  {
    id: 24,
    term: "Microsoft",
    text: "Major technology company that has shaped web development through Internet Explorer browser, Active Server Pages (ASP), and modern tools like TypeScript and Edge.",
    points: [
      "Developed Internet Explorer, dominant in the 1990s-2000s browser wars.",
      "Acquired GitHub (owner of npm) and contributed to TypeScript.",
      "Shifted Edge to Chromium base for better web standards compatibility.",
    ],
    abbreviations: [],
    references: [
      { handle: "wikipedia", weblink: "https://en.wikipedia.org/wiki/Microsoft", txt: "Wikipedia" },
    ],
    crossrefs: [],
    tags: [ "company" ],
    imgurl: "",
    // additional info.
    ribbon: "AI",
    creation_date: "2026-03-26",
    srcs: [ "perplexity" ],
  },
  {
    id: 25,
    term: "Netscape",
    text: "Pioneering company that created the Netscape Navigator browser, sparking the 1990s browser wars and commercialization of the web.",
    points: [
      "Released Navigator in 1994, popularizing graphical web browsing.",
      "Authored first JavaScript implementation (branded as LiveScript).",
      "Open-sourced code leading to Mozilla Foundation.",
    ],
    abbreviations: [],
    references: [
      { handle: "wikipedia", weblink: "https://en.wikipedia.org/wiki/Netscape", txt: "Wikipedia" },
    ],
    crossrefs: [ 2, 5 ],
    tags: [ "company", "browser" ],
    imgurl: "",
    // additional info.
    ribbon: "AI",
    creation_date: "2026-03-26",
    srcs: [ "perplexity" ],
  },
  {
    id: 26,
    term: "Navigator",
    text: "Netscape's flagship web browser (1994-2008), first to gain mass adoption and introduce features like JavaScript and frames.",
    points: [
      "Version 1.0 supported images, forms; sparked web's popularity.",
      "Declined due to IE dominance; discontinued in 2008.",
      "Code base evolved into Mozilla Firefox.",
    ],
    abbreviations: [ { short: "N.N.", long: "Netscape Navigator" } ],
    references: [
      { handle: "wikipedia", weblink: "https://en.wikipedia.org/wiki/Netscape_Navigator", txt: "Wikipedia" },
    ],
    crossrefs: [ 1, 3 ],
    tags: [ "browser" ],
    imgurl: "",
    // additional info.
    ribbon: "AI",
    creation_date: "2026-03-26",
    srcs: [ "perplexity" ],
  },
  {
    id: 27,
    term: "Mozilla",
    text: "Non-profit foundation born from Netscape's open-source code, creators of Firefox browser and key web standards advocate.",
    points: [
      "Released Firefox 1.0 in 2004, challenging IE monopoly.",
      "Develops Gecko rendering engine and SpiderMonkey JS engine.",
      "Promotes open web via Mozilla Manifesto.",
    ],
    abbreviations: [],
    references: [
      { handle: "official", weblink: "https://www.mozilla.org/", txt: "mozilla.org" },
    ],
    crossrefs: [ 1, 4, 5, 11, 12 ],
    tags: [ "organization", "browser" ],
    imgurl: "",
    // additional info.
    ribbon: "AI",
    creation_date: "2026-03-26",
    srcs: [ "perplexity" ],
  },
  {
    id: 28,
    term: "Firefox",
    text: "Mozilla's open-source web browser using Gecko engine, known for privacy features and rapid standards implementation.",
    points: [
      "Pioneered tabbed browsing and extensions ecosystem.",
      "Reached 90% market share peak in 2009.",
      "Quantum engine (2017) boosted performance.",
    ],
    abbreviations: [],
    references: [
      { handle: "official", weblink: "https://www.mozilla.org/firefox/", txt: "firefox.com" },
    ],
    crossrefs: [ 3, 11, 12 ],
    tags: [ "browser" ],
    imgurl: "",
    // additional info.
    ribbon: "AI",
    creation_date: "2026-03-26",
    srcs: [ "perplexity" ],
  },
];

  getData() {
    return this.data;
  }

}

