
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalDataProviderService {

  data = [

    /* HOMEWORK */
    {
      id: 0,
      term: "Angular Module",
      text: "Fundamental building block in Angular apps that groups components, directives, pipes and services.",
      points: [
        "Modules bootstrap the app and configure dependency injection.",
        "Decorated with @NgModule defining declarations, imports, providers and bootstrap.",
        "Modern Angular favors standalone components over traditional modules (NgModules).",
      ],
      abbreviations: [
        { short: "@NgModule", long: "Angular module decorator" }
      ],
      references: [
        { handle: "docs", weblink: "https://angular.dev/guide/ngmodules/overview", txt: "angular.dev/ngmodules" }
      ],
      crossrefs: [ 1, 2, 3, 10, 11, 84, 126, ],
      tags: [ "homework", "angular", "technicality" ],
      imgurl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Angular_gradient_logo.png/960px-Angular_gradient_logo.png?_=20231107180344",
      ribbon: "HW",
      creation_date: "2026-03-29",
      srcs: [ "sad" ],
    },
    {
      id: 1,
      term: "Angular Standalone Component",
      text: "Modern Angular components that do not require NgModules and can directly import other standalone components, directives and pipes.",
      points: [
        "Simplifies architecture by eliminating module boilerplate.",
        "Default in Angular 17+.",
        "A full NgModule hierarchy defining the app's entry point is not required.",
        "Bootstrap directly in main.ts and use 'standalone: true' in @Component decorator.",
      ],
      abbreviations: [],
      references: [
        { handle: "docs", weblink: "https://v17.angular.io/guide/standalone-components", txt: "angular.io/v17/standalone" }
      ],
      crossrefs: [ 0, 2 ],
      tags: [ "homework", "angular", "technicality" ],
      imgurl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Angular_gradient_logo.png/960px-Angular_gradient_logo.png?_=20231107180344",
      ribbon: "HW",
      creation_date: "2026-03-29",
      srcs: [ "sad" ],
    },
    {
      id: 2,
      term: "Angular Component",
      text: "Core building block controlling a view, containing a template, styles and the logic for UI elements.",
      points: [
        "Lifecycle hooks: ngOnInit, ngOnChanges, ngOnDestroy, etc.",
        "Uses @Input and @Output for parent-child communication.",
        "Can be standalone or declared in NgModule.",
      ],
      abbreviations: [
        { short: "@Component", long: "Angular componenet decorator" }
      ],
      references: [
        { handle: "docs", weblink: "https://angular.dev/guide/components", txt: "angular.dev/components" }
      ],
      crossrefs: [ 0, 1, 7 ],
      tags: [ "homework", "angular", "technicality" ],
      imgurl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Angular_gradient_logo.png/960px-Angular_gradient_logo.png?_=20231107180344",
      ribbon: "HW",
      creation_date: "2026-03-29",
      srcs: [ "sad" ],
    },
    {
      id: 3,
      term: "Angular Pipe",
      text: "Transform display values in templates. There is built-in pipes and custom pipes via @Pipe decorator.",
      points: [
        "Usage: {{ value | pipeName:arg }} within templates syntax",
        "Pure pipes optimize by only updating on input reference change (default).",
        "Impure pipes change every detecion cycle (heavy logic can slow the app).",
        "AsyncPipe subscribes to observables/promises automatically.",
      ],
      abbreviations: [],
      references: [
        { handle: "docs",  weblink: "https://angular.dev/guide/templates/pipes", txt: "angular.dev/guide/pipes" },
        { handle: "docs",  weblink: "https://angular.dev/api/core/Pipe", txt: "angular.dev/core/pipe" },
        { handle: "guide", weblink: "https://angular.dev/tutorials/learn-angular/24-create-a-pipe", txt: "angular.dev/create-a-pipe" },
        { handle: "demo",  weblink: "https://www.youtu.be/DdFvhAua05Y", txt: "youtu.be/DdFvhAua05Y" },
      ],
      crossrefs: [ 0, ],
      tags: [ "homework", "angular", "technicality" ],
      imgurl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Angular_gradient_logo.png/960px-Angular_gradient_logo.png?_=20231107180344",
      ribbon: "HW",
      creation_date: "2026-03-29",
      srcs: [ "sad" ],
    },
    {
      id: 4,
      term: "Angular Observable",
      text: "RxJS Observable streams for handling async operations and reactive data flows. Foundation of Angular's change detection.",
      points: [
        "Promises resolve once, Observables can emit multiple values and have to be subscribed to (no data without subsscriber, aka. lazy).",
        "Create with Observable.create() or helpers like of(), from(), interval().",
        "Operators like map, filter, switchMap, debounceTime.",
      ],
      abbreviations: [],
      references: [
        { handle: "docs",  weblink: "https://rxjs.dev/guide/observable",          txt: "rxjs.dev/observable" },
        { handle: "guide", weblink: "https://v17.angular.io/guide/observables",   txt: "angular.io/v17/observables" },
        { handle: "guide", weblink: "https://angular.dev/ecosystem/rxjs-interop", txt: "angular.dev/rxjs-interop" },
        { handle: "demo",  weblink: "https://youtu.be/LT8pyUwZQhI",               txt: "youtu.be/LT8pyUwZQhI" },
      ],
      crossrefs: [ 5, 57, 70, ],
      tags: [ "homework", "angular", "technicality" ],
      imgurl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Angular_gradient_logo.png/960px-Angular_gradient_logo.png?_=20231107180344",
      ribbon: "HW",
      creation_date: "2026-03-29",
      srcs: [ "sad" ],
    },
    {
      id: 5,
      term: "Angular HttpClient",
      text: "Angular's HTTP client service for making AJAX requests. Provides typed responses, interceptors and progress events.",
      points: [
        "Inject HttpClient in services; use get(), post(), etc.",
        "Returns Observables; use map(), catchError() operators.",
        "Must import HttpClientModule in standalone bootstrap (from main.ts and without NgModules).",
      ],
      abbreviations: [],
      references: [
        { handle: "docs",  weblink: "https://angular.dev/api/common/http/HttpClient", txt: "angular.dev/HttpClient" },
        { handle: "guide", weblink: "https://angular.dev/guide/http", txt: "angular.dev/guide/http" },
        { handle: "guide", weblink: "https://angular.dev/best-practices/security#trusting-safe-values", txt: "angular.dev/security" },
      ],
      crossrefs: [ 4, 6, 36, 61, 105 ],
      tags: [ "homework", "angular", "technicality", "security"],
      imgurl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Angular_gradient_logo.png/960px-Angular_gradient_logo.png?_=20231107180344",
      ribbon: "HW",
      creation_date: "2026-03-29",
      srcs: [ "sad" ],
    },
    {
      id: 6,
      term: "Angular HttpClient Interceptor",
      text: "RxJS interceptors that transform HTTP requests and responses globally.",
      points: [
        "Can be used for auth headers, logging, caching.",
        "Implement HttpInterceptor interface, provided through dependency injection.",
        "Method intercept(req, next) returns Observable<HttpEvent>.",
        "Use clone() to modify request headers and body.",
      ],
      abbreviations: [],
      references: [
        { handle: "official", weblink: "https://angular.dev/guide/http/interceptor", txt: "angular.dev/interceptors" },
        { handle: "demo",     weblink: "https://youtu.be/BNM5203kxgs", txt: "youtu.be/BNM5203kxgs" },
        { handle: "demo",     weblink: "https://youtu.be/Qg9Y2Mv2I2M", txt: "youtu.be/Qg9Y2Mv2I2M" },
      ],
      crossrefs: [ 4, 5, 11, 57, ],
      tags: [ "homework", "angular", "technicality" ],
      imgurl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Angular_gradient_logo.png/960px-Angular_gradient_logo.png?_=20231107180344",
      ribbon: "HW",
      creation_date: "2026-03-29",
      srcs: [ "sad" ],
    },
    {
      id: 7,
      term: "Angular Component Lifecycle",
      text: "Predictable sequence of hooks from creation to destruction.",
      points: [
        "Standalone components have the same lifecycle hooks.",
        "Change detection hooks: ngOnInit, ngOnChanges, ngDoCheck, etc.",
        "Rendering hooks: afterNextRenderer, afterEveryRenderer.",
        "Destruction hook: ngOnDestroy.",
      ],
      abbreviations: [],
      references: [
        { handle: "docs", weblink: "https://angular.dev/guide/components/lifecycle", txt: "angular.dev/lifecycle" }
      ],
      crossrefs: [ 2 ],
      tags: [ "homework", "angular", "technicality", ],
      imgurl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Angular_gradient_logo.png/960px-Angular_gradient_logo.png?_=20231107180344",
      ribbon: "HW",
      creation_date: "2026-03-29",
      srcs: [ "sad" ],
    },
    {
      id: 8,
      term: "Jasmine",
      text: "Behavior-driven development framework for testing JavaScript.",
      points: [
        "Default build-in Angular test runner using describe/it/expect syntax.",
        "Group tests with describe(), define test cases with it().",
        "Matchers: expect(value).toBe(), toEqual(), toBeTruthy().",
        "Async testing: fakeAsync(), tick(), async and await.",
      ],
      abbreviations: [],
      references: [
        { handle: "docs",   weblink: "https://jasmine.github.io/",       txt: "jasmine.github.io" },
        { handle: "github", weblink: "https://github.com/jasmine/",      txt: "github.com/jasmine" },
        { handle: "demo",   weblink: "https://www.youtu.be/h2eWfvcAOTI", txt: "youtu.be/h2eWfvcAOTI" },
      ],
      crossrefs: [ 9, 19, 80, 81, 84, ],
      tags: [ "homework", "testing", ],
      imgurl: "https://upload.wikimedia.org/wikipedia/en/2/22/Logo_jasmine.svg",
      ribbon: "HW",
      creation_date: "2026-03-29",
      srcs: [ "sad" ],
    },
    {
      id: 9,
      term: "Karma",
      text: "Test runner for JavaScript executing tests in real browsers.",
      points: [
        "Configure browsers, frameworks, reporters in karma.conf.js.",
        "Angular's tests (ng test) runs karma in watch mode with live reload.",
        "Angular CLI uses karma-jasmine-html-reporter by default.",
        "Supports Chrome, Firefox, Edge and Safari.",
      ],
      abbreviations: [],
      references: [
        { handle: "official", weblink: "https://karma-runner.github.io/latest/index.html",           txt: "karma-runner.github.io" },
        { handle: "docs",     weblink: "https://karma-runner.github.io/6.4/intro/how-it-works.html", txt: "karma-runner.github.io" },
        { handle: "github",   weblink: "https://github.com/karma-runner/karma",                      txt: "github.com/karma-runner" },
        { handle: "npm",      weblink: "https://www.npmjs.com/package/karma",                        txt: "npmjs.com/package/karma" },
        { handle: "demo",     weblink: "https://www.youtu.be/bJc078szrZA",                           txt: "youtu.be/bJc078szrZA" },
      ],
      crossrefs: [ 8, 18, 84, ],
      tags: [ "homework", "testing", "browser", ],
      imgurl: "https://avatars.githubusercontent.com/u/3284117?s=200&v=4",
      ribbon: "HW",
      creation_date: "2026-03-29",
      srcs: [ "sad" ],
    },
    {
      id: 10,
      term: "Dependency Injection",
      text: "Simple design pattern where components receive dependencies from external source rather than creating them.",
      points: [
        "Angular's DI is hierarchical mirroring componenet and module tree.",
      ],
      abbreviations: [
        { short: "DI", long: "dependency injection" }
      ],
      references: [
        { handle: "wikipedia", weblink: "https://en.wikipedia.org/wiki/Dependency_injection", txt: "/Dependency Injection" },
        { handle: "guide", weblink: "https://angular.dev/guide/di", txt: "angular.dev/di" },
      ],
      crossrefs: [ 11 ],
      tags: [ "homework", "design-pattern", ],
      imgurl: "https://upload.wikimedia.org/wikipedia/commons/3/35/%D9%86%D8%B8%D8%B1%D8%A9_%D9%85%D9%82%D8%B1%D8%A8%D8%A9_%D9%84%D9%84%D8%B2%D9%84%D9%8A%D8%AC_%D9%81%D9%8A_%D9%85%D8%AF%D8%B1%D8%B3%D8%A9_%D8%A7%D8%A8%D9%86_%D9%8A%D9%88%D8%B3%D9%81.jpeg",
      ribbon: "HW",
      creation_date: "2026-03-29",
      srcs: [ "sad" ],
    },
    {
      id: 11,
      term: "Angular Dependency Injection Scope",
      text: "Angular's hierarchical dependency-injection tree determines service instance sharing.",
      points: [
        "Angular has element injectors at component and directive level and environment injectors at module and app level.",
        "Angular has DI providers at component (providers array), module (@Injectable) and root levels control scope.",
        "Advanced usage through useExisting, useValue, useFactory.",
      ],
      abbreviations: [
      ],
      references: [
        { handle: "docs", weblink: "https://angular.dev/guide/di/defining-dependency-providers#injector-hierarchy-in-angular", txt: "angular.dev/guide/di" }
      ],
      crossrefs: [ 10, 84, ],
      tags: [ "homework", "angular", "technicality", ],
      imgurl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Angular_gradient_logo.png/960px-Angular_gradient_logo.png?_=20231107180344",
      ribbon: "HW",
      creation_date: "2026-03-29",
      srcs: [ "sad" ],
    },
    {
      id: 12,
      term: "RxJS Subject",
      text: "Special Observable that can multicast to multiple subscribers.",
      points: [
        "Subjects are hot, underlying data producer already exists and can push values independently of whether there are subscribers (subscribers get only current and future emissions).",
        "Base for BehaviorSubject, ReplaySubject, AsyncSubject.",
        "Use next(value) to emit, complete() or error(err).",
        "Never expose a raw Subject, use as service observables.",
      ],
      abbreviations: [],
      references: [
        { handle: "docs", weblink: "https://rxjs.dev/guide/subject", txt: "rxjs.dev/subject" }
      ],
      crossrefs: [ 4, 57, ],
      tags: [ "homework", "rxjs", "technicality", ],
      imgurl: "https://rxjs.dev/generated/images/marketing/home/Rx_Logo-512-512.png",
      ribbon: "HW",
      creation_date: "2026-03-29",
      srcs: [ "sad" ],
    },
    {
      id: 13,
      term: "RxJS BehaviorSubject",
      text: "Special Subject that requires initial value and replays last emitted value to new subscribers.",
      points: [
        "Common for state management in Angular services.",
        "Can be used for app state, user preferences and form state.",
        "Object new BehaviorSubject(initialValue) emits current value immediately on subscribe().",
        "Method getValue() returns current value synchronously.",
      ],
      abbreviations: [],
      references: [
        { handle: "docs", weblink: "https://rxjs.dev/api/index/class/BehaviorSubject", txt: "rxjs.dev/BehaviorSubject" }
      ],
      crossrefs: [ 4, 57, 84, ],
      tags: [ "homework", "rxjs", "technicality", ],
      imgurl: "https://rxjs.dev/generated/images/marketing/home/Rx_Logo-512-512.png",
      ribbon: "HW",
      creation_date: "2026-03-29",
      srcs: [ "sad" ],
    },
    {
      id: 14,
      term: "Angular DataBinding",
      text: "Automatic synchronization between component TypeScript properties and DOM template.",
      points: [
        "Four types: interpolation, property, event, two-way.",
        "Interpolation '{{ }}' displays property values.",
        "Property binding '[prop]=expression' sets element properties.",
        "Capture DOM events with '(event)=handler'.",
        "Create two-way bindings with '[(ngModel)]=property'.",
      ],
      abbreviations: [],
      references: [
        { handle: "docs", weblink: "https://angular.dev/guide/templates/binding", txt: "angular.dev/databinding" }
      ],
      crossrefs: [ 2, 84, 104, ],
      tags: [ "homework", "angular", "technicality", ],
      imgurl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Angular_gradient_logo.png/960px-Angular_gradient_logo.png?_=20231107180344",
      ribbon: "HW",
      creation_date: "2026-03-29",
      srcs: [ "sad" ],
    },
    {
      id: 15,
      term: "Angular Reactive Forms",
      text: "Programmatic form handling using Observable-based validation and value changes.",
      points: [
        "ReactiveFormsModule provides FormBuilder and validators.",
        "Involved Objects are FormGroup, FormControl and FormArray.",
        "Form's observable valueChanges emits on every input change.",
        "Nested forms with FormGroup; dynamic arrays with FormArray.",
      ],
      abbreviations: [],
      references: [
        { handle: "docs", weblink: "https://angular.dev/guide/forms/reactive-forms", txt: "angular.dev/reactive-forms" }
      ],
      crossrefs: [ 2, 84, ],
      tags: [ "homework", "angular", "technicality", ],
      imgurl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Angular_gradient_logo.png/960px-Angular_gradient_logo.png?_=20231107180344",
      ribbon: "HW",
      creation_date: "2026-03-29",
      srcs: [ "sad" ],
    },
    {
      id: 16,
      term: "Angular ContentChildren",
      text: "Query children content projected via ng-content. ",
      points: [
        "Access components and directives in parent template's ng-content.",
        "Detects changes when content children are added or removed.",
        "Use '{descendants: true}' to include nested children.",
      ],
      abbreviations: [],
      references: [
        { handle: "docs", weblink: "https://angular.dev/api/core/ContentChildren", txt: "angular.dev/ContentChildren" },
        { handle: "docs", weblink: "https://angular.dev/api/core/ng-content",      txt: "angular.dev/ng-content" },
        { handle: "demo", weblink: "https://www.youtu.be/8-U_x0Ui0p8",             txt: "youtu.be/8-U_x0Ui0p8" },
      ],
      crossrefs: [ 2, 17, 84, 126, ],
      tags: [ "homework", "angular", "technicality", ],
      imgurl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Angular_gradient_logo.png/960px-Angular_gradient_logo.png?_=20231107180344",
      ribbon: "HW",
      creation_date: "2026-03-29",
      srcs: [ "sad" ],
    },
    {
      id: 17,
      term: "Angular ViewChild",
      text: "Query child components, directives, or DOM elements in component's own template. Access via @ViewChild.",
      points: [
        "@ViewChild(ChildComponent) child!: ChildComponent; available after ngAfterViewInit.",
        "Supports static/dynamic queries with {static: false}.",
        "Template reference variables: @ViewChild('myTemplate') template!: TemplateRef.",
      ],
      abbreviations: [],
      references: [
        { handle: "docs", weblink: "https://angular.dev/api/core/ViewChild", txt: "angular.dev/ViewChild" },
        { handle: "demo", weblink: "https://www.youtu.be/ZsaTJzke0iA",       txt: "youtu.be/ZsaTJzke0iA"  },
      ],
      crossrefs: [ 2, 16, 84, ],
      tags: [ "homework", "angular", "technicality", ],
      imgurl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Angular_gradient_logo.png/960px-Angular_gradient_logo.png?_=20231107180344",
      ribbon: "HW",
      creation_date: "2026-03-29",
      srcs: [ "sad" ],
    },

      /* ADDITIONAL ENTRIES */
      {
        id: 18,
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
        crossrefs: [ ],
        tags: [ "tool" ],
        imgurl: "https://upload.wikimedia.org/wikipedia/commons/d/db/Npm-logo.svg",
        ribbon: "NOW",
        creation_date: "2026-05-26",
        srcs: [ "ack" ],
      },
      {
        id: 19,
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
        crossrefs: [ ],
        tags: [ "language", "browser wars" ],
        imgurl: "https://upload.wikimedia.org/wikipedia/commons/b/b9/JavaScript_shield_logo_%28no_text%29.svg",
        ribbon: "BASIC",
        creation_date: "2026-05-26",
        srcs: [ "ack" ],
      },
//      {
//        id: 20,
//        term: "npx",
//        text: "A command-line tool for executing npm packages",
//        points: [
//          "Allows to run node.js packages without installing them globally.",
//          "When executing, npx checks locally first at node_modules/.bin, then at cache, then at registry, runs the package and cleans up afterward.",
//        ],
//        abbreviations: [
//          { short: "npx", long: "node package execution" },
//        ],
//        references: [
//          { handle: "docs", weblink: "https://docs.npmjs.com/cli/v8/commands/npx", txt: "docs.npmjs.com",   },
//        ],
//        crossrefs: [ ],
//        tags: [ "tool" ],
//        imgurl: "https://upload.wikimedia.org/wikipedia/commons/2/29/Linux_command-line._Bash._GNOME_Terminal._screenshot.png",
//        ribbon: "BASIC",
//        creation_date: "2026-05-26",
//        srcs: [ "ack" ],
//      },
//      {
//        id: 21,
//        term: "Internet Explorer",
//        text: "A web browser developed by Microsoft, widely used for many years, but now phased out.",
//        points: [
//          "IE is not fully removable from Windows because it was deeply integrated with system functions.",
//          "Was officially retired on June 15, 2022.",
//        ],
//        abbreviations: [
//          { short: "IE", long: "Internet Explorer" },
//        ],
//        references: [
//          { handle: "wikipedia", weblink: "https://en.wikipedia.org/wiki/Internet_Explorer", txt: "/Internet_Explorer",  },
//        ],
//        crossrefs: [ ],
//        tags: [ "browser", "browser wars" ],
//        imgurl: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Fuck_Internet_Explorer.jpg",
//        ribbon: "BASIC",
//        creation_date: "2026-05-26",
//        srcs: [ "ack" ],
//      },
//      {
//        id: 22,
//        term: "Browser Wars",
//        text: "The intense competition between Microsoft's Internet Explorer and Netscape's Navigator in the late 90s and early 2000s.",
//        points: [
//          "Microsoft was found to have a monopoly power and accused of anti-competitive practices.",
//          "After losing the wars, Netscape was acquired by AOL.",
//        ],
//        abbreviations: [
//        ],
//        references: [
//          { handle: "wikipedia", weblink: "https://en.wikipedia.org/wiki/Browser_wars", txt: "/Browser_wars",  },
//        ],
//        crossrefs: [ ],
//        tags: [ "historic event" ],
//        imgurl: "https://upload.wikimedia.org/wikipedia/commons/1/13/Countries_by_most_used_web_browser.png",
//        ribbon: "BASIC",
//        creation_date: "2026-05-26",
//        srcs: [ "ack" ],
//      },
//     {
//       id: 23,
//       term: "JScript",
//       text: "Microsoft's proprietary implementation of JavaScript (1996), reverse-engineered from Netscape's version during browser wars.",
//       points: [
//         "ECMAScript-compliant but with IE-specific extensions.",
//         "Powered client-side scripting in Internet Explorer.",
//       ],
//       abbreviations: [],
//       references: [
//         { handle: "wikipedia", weblink: "https://en.wikipedia.org/wiki/JScript", txt: "Wikipedia" },
//       ],
//       crossrefs: [ ],
//       tags: [ "javascript", "engine" ],
//       imgurl: "https://upload.wikimedia.org/wikipedia/en/e/e8/Jscript_icon.gif",
//       ribbon: "AI",
//       creation_date: "2026-03-26",
//       srcs: [ "perplexity" ],
//     },
//     {
//       id: 24,
//       term: "TypeScript",
//       text: "Microsoft's open-source superset of JavaScript adding static types, compiles to plain JS for scalable web apps.",
//       points: [
//         "Created 2012, used by Angular.",
//       ],
//       abbreviations: [ { short: "TS", long: "TypeScript" } ],
//       references: [
//         { handle: "official", weblink: "https://www.typescriptlang.org/", txt: "typescriptlang.org" },
//       ],
//       crossrefs: [ ],
//       tags: [ "language" ],
//       imgurl: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
//       ribbon: "AI",
//       creation_date: "2026-03-26",
//       srcs: [ "perplexity" ],
//     },
//     {
//       id: 25,
//       term: "Edge",
//       text: "Microsoft's web browser; originally Trident-based (2015), relaunched on Chromium (2020) for cross-platform compatibility.",
//       points: [
//         "Default Windows 10/11 browser.",
//         "Integrates deeply with Microsoft services.",
//         "Faster than legacy Edge; supports most Chrome extensions.",
//       ],
//       abbreviations: [ { short: "MS Edge", long: "Microsoft Edge" } ],
//       references: [
//         { handle: "official", weblink: "https://www.microsoft.com/edge", txt: "microsoft.com/edge" },
//       ],
//       crossrefs: [  ],
//       tags: [ "browser" ],
//       imgurl: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Microsoft_Edge_logo_%282015%E2%80%932019%29.svg",
//       ribbon: "AI",
//       creation_date: "2026-03-26",
//       srcs: [ "perplexity" ],
//     },
//     {
//       id: 26,
//       term: "Chromium",
//       text: "Google's open-source browser project (2008), foundation for Chrome, Edge, Opera; uses Blink engine and V8 JS.",
//       points: [
//         "Powers 70%+ of browsers worldwide.",
//         "Rapid release cycle (4x/year).",
//         "No proprietary Google features like sync.",
//       ],
//       abbreviations: [],
//       references: [
//         { handle: "official", weblink: "https://www.chromium.org/", txt: "chromium.org" },
//       ],
//       crossrefs: [ ],
//       tags: [ "browser", "engine" ],
//       imgurl: "https://upload.wikimedia.org/wikipedia/commons/2/28/Chromium_Logo.svg",
//       ribbon: "AI",
//       creation_date: "2026-03-26",
//       srcs: [ "perplexity" ],
//     },
//     {
//       id: 27,
//       term: "Chrome",
//       text: "Google's proprietary browser (2008) based on Chromium, dominant with 65%+ market share, fast V8 JavaScript.",
//       points: [
//         "Introduced sandboxed tabs, omnibox.",
//         "DevTools set web debugging standard.",
//         "Syncs across devices via Google account.",
//       ],
//       abbreviations: [ { short: "Google Chrome", long: "Chrome" } ],
//       references: [
//         { handle: "official", weblink: "https://www.google.com/chrome/", txt: "google.com/chrome" },
//       ],
//       crossrefs: [ ],
//       tags: [ "browser" ],
//       imgurl: "https://upload.wikimedia.org/wikipedia/commons/0/05/Chrome_app_icon_on_smartphone_screen_%28perspective_render%29_%2849896396628%29.jpg",
//       ribbon: "AI",
//       creation_date: "2026-03-26",
//       srcs: [ "perplexity" ],
//     },
//     {
//       id: 28,
//       term: "Safari",
//       text: "Apple's macOS/iOS browser using WebKit engine, emphasizes battery life and privacy features like Intelligent Tracking Prevention.",
//       points: [
//         "Default on Apple devices.",
//         "Fastest on Apple silicon.",
//         "iCloud tabs sync across devices.",
//       ],
//       abbreviations: [],
//       references: [
//         { handle: "official", weblink: "https://www.apple.com/safari/", txt: "apple.com/safari" },
//       ],
//       crossrefs: [ ],
//       tags: [ "browser" ],
//       imgurl: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Safari-icon-1024.png",
//       ribbon: "AI",
//       creation_date: "2026-03-26",
//       srcs: [ "perplexity" ],
//     },
//     {
//       id: 29,
//       term: "Gecko",
//       text: "Mozilla's open-source web rendering engine powering Firefox, supports modern HTML/CSS/JS standards.",
//       points: [
//         "Layout engine forked from Netscape.",
//         "Quantum rewrite (2017) matched Blink speed.",
//         "Used in Thunderbird, Servo (Rust rewrite).",
//       ],
//       abbreviations: [ { short: "Gecko", long: "Gecko" } ], // sic: intentional
//       references: [
//         { handle: "mozilla", weblink: "https://developer.mozilla.org/en-US/docs/Mozilla/Gecko", txt: "MDN Gecko" },
//       ],
//       crossrefs: [ ],
//       tags: [ "rendering-engine" ],
//       imgurl: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Mozillagecko-logo.svg",
//       ribbon: "AI",
//       creation_date: "2026-03-26",
//       srcs: [ "perplexity" ],
//     },
//     {
//       id: 30,
//       term: "SpiderMonkey",
//       text: "Mozilla's JavaScript engine (1998), first JS implementation; powers Firefox with JIT compilation.",
//       points: [
//         "Named after Netscape mascot.",
//         "Implements ECMAScript standard.",
//         "Influenced V8, JavaScriptCore.",
//       ],
//       abbreviations: [],
//       references: [
//         { handle: "mozilla", weblink: "https://developer.mozilla.org/en-US/docs/Mozilla/Projects/SpiderMonkey", txt: "MDN SpiderMonkey" },
//       ],
//       crossrefs: [ ],
//       tags: [ "js-engine" ],
//       imgurl: "https://upload.wikimedia.org/wikipedia/commons/a/ae/SpiderMonkey_Logo.png",
//       ribbon: "AI",
//       creation_date: "2026-03-26",
//       srcs: [ "perplexity" ],
//     },
//     {
//       id: 31,
//       term: "V8",
//       text: "Google's high-performance JavaScript engine (2008) using JIT compilation; core of Chrome, Node.js, Deno.",
//       points: [
//         "Ignition interpreter + TurboFan optimizer.",
//         "Released as open source.",
//         "Powers server-side JS revolution.",
//       ],
//       abbreviations: [],
//       references: [
//         { handle: "official", weblink: "https://v8.dev/", txt: "v8.dev" },
//       ],
//       crossrefs: [ ],
//       tags: [ "js-engine" ],
//       imgurl: "https://upload.wikimedia.org/wikipedia/commons/3/3f/V8_JavaScript_engine_logo_2.svg",
//       ribbon: "AI",
//       creation_date: "2026-03-26",
//       srcs: [ "perplexity" ],
//     },
//     {
//       id: 32,
//       term: "WebKit",
//       text: "Apple's open-source rendering engine (2001) forked to Blink (2013); powers Safari.",
//       points: [
//         "KHTML fork optimized for speed.",
//         "JavaScriptCore engine.",
//         "Used in GNOME Epiphany.",
//       ],
//       abbreviations: [],
//       references: [
//         { handle: "webkit", weblink: "https://webkit.org/", txt: "webkit.org" },
//       ],
//       crossrefs: [ ],
//       tags: [ "rendering-engine" ],
//       imgurl: "https://upload.wikimedia.org/wikipedia/commons/5/55/WebKit_logo.svg",
//       ribbon: "AI",
//       creation_date: "2026-03-26",
//       srcs: [ "perplexity" ],
//     },
//     {
//       id: 33,
//       term: "CSS",
//       text: "Cascading Style Sheets language for styling HTML/XML; separates content from presentation.",
//       points: [
//         "Level 1 (1996), Flexbox/Grid modern layout.",
//         "Selectors, animations, variables (@property).",
//         "Tailwind, styled-components popular frameworks.",
//       ],
//       abbreviations: [ { short: "CSS", long: "Cascading Style Sheets" } ],
//       references: [
//         { handle: "w3c", weblink: "https://www.w3.org/Style/CSS/", txt: "W3C CSS" },
//       ],
//       crossrefs: [ ],
//       tags: [ "stylesheet" ],
//       imgurl: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Official_CSS_Logo.svg",
//       ribbon: "AI",
//       creation_date: "2026-03-26",
//       srcs: [ "perplexity" ],
//     },
//     {
//       id: 34,
//       term: "Adobe Flash Player",
//       text: "Multimedia plugin (1996-2020) for animations, video; largely replaced by HTML5.",
//       points: [
//         "Dominant rich web media 2000s.",
//         "Security issues led to deprecation.",
//         "End-of-life: Dec 31, 2020.",
//       ],
//       abbreviations: [ { short: "Flash", long: "Adobe Flash Player" } ],
//       references: [
//         { handle: "adobe", weblink: "https://www.adobe.com/products/flashplayer/end-of-life-alternative.html", txt: "Adobe EOL" },
//       ],
//       crossrefs: [ ],
//       tags: [ "plugin" ],
//       imgurl: "https://upload.wikimedia.org/wikipedia/commons/1/1f/Adobe_Flash_Player_v10_icon.png",
//       ribbon: "AI",
//       creation_date: "2026-03-26",
//       srcs: [ "perplexity" ],
//     },
//     {
//       id: 35,
//       term: "SSL",
//       text: "Secure Sockets Layer protocol (1995) for encrypting network connections; predecessor to TLS.",
//       points: [
//         "Version 3.0 basis for TLS 1.0.",
//         "Deprecated due to vulnerabilities.",
//         "Use TLS 1.2+ instead.",
//       ],
//       abbreviations: [ { short: "SSL", long: "Secure Sockets Layer" } ],
//       references: [
//         { handle: "wikipedia", weblink: "https://en.wikipedia.org/wiki/Transport_Layer_Security#SSL_2.0_and_3.0", txt: "Wikipedia" },
//       ],
//       crossrefs: [ ],
//       tags: [ "security", "protocol", "encryption" ],
//       imgurl: "https://upload.wikimedia.org/wikipedia/commons/a/ae/SSL_VPN_Topology-en.svg",
//       ribbon: "AI",
//       creation_date: "2026-03-26",
//       srcs: [ "perplexity" ],
//     },
     {
       id: 36,
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
       crossrefs: [ ],
       tags: [ "protocol" ],
       imgurl: "https://upload.wikimedia.org/wikipedia/commons/0/09/HTTP-1.1_vs._HTTP-2_vs._HTTP-3_Protocol_Stack.svg",
       ribbon: "AI",
       creation_date: "2026-03-26",
       srcs: [ "perplexity" ],
     },
//     {
//       id: 37,
//       term: "HTTPS",
//       text: "HTTP over TLS/SSL encryption; secures data in transit with certificates.",
//       points: [
//         "Prevents MITM attacks, ensures authenticity.",
//         "Google marks HTTP 'Not Secure' since 2018.",
//         "HSTS enforces HTTPS-only.",
//       ],
//       abbreviations: [ { short: "HTTPS", long: "HTTP Secure" } ],
//       references: [
//         { handle: "ietf", weblink: "https://datatracker.ietf.org/doc/html/rfc2818", txt: "RFC 2818" },
//       ],
//       crossrefs: [ ],
//       tags: [ "protocol", "security" ],
//       imgurl: "https://upload.wikimedia.org/wikipedia/commons/0/05/Https_Browser_%2866747481%29.jpeg",
//       ribbon: "AI",
//       creation_date: "2026-03-26",
//       srcs: [ "perplexity" ],
//     },
//     {
//       id: 38,
//       term: "HTML",
//       text: "HyperText Markup Language standard for web page structure and content.",
//       points: [
//         "HTML5 (2014) multimedia, canvas, semantic tags.",
//         "Living standard via WHATWG.",
//         "Powers 99% of websites.",
//       ],
//       abbreviations: [ { short: "HTML", long: "HyperText Markup Language" } ],
//       references: [
//         { handle: "whatwg", weblink: "https://html.spec.whatwg.org/", txt: "WHATWG HTML" },
//       ],
//       crossrefs: [ ],
//       tags: [ "markup" ],
//       imgurl: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
//       ribbon: "AI",
//       creation_date: "2026-03-26",
//       srcs: [ "perplexity" ],
//     },
//     {
//       id: 39,
//       term: "FTP",
//       text: "File Transfer Protocol (1971) for uploading/downloading files over networks.",
//       points: [
//         "Command-line or GUI clients.",
//         "Mostly replaced by SFTP, WebDAV for security.",
//         "Still used for large file hosting.",
//       ],
//       abbreviations: [ { short: "FTP", long: "File Transfer Protocol" } ],
//       references: [
//         { handle: "ietf", weblink: "https://datatracker.ietf.org/doc/html/rfc959", txt: "RFC 959" },
//       ],
//       crossrefs: [ ],
//       tags: [ "protocol" ],
//       imgurl: "https://upload.wikimedia.org/wikipedia/commons/8/89/AktivesFTP.png",
//       ribbon: "AI",
//       creation_date: "2026-03-26",
//       srcs: [ "perplexity" ],
//     },
//     {
//       id: 40,
//       term: "SMTP",
//       text: "Simple Mail Transfer Protocol for sending emails between servers.",
//       points: [
//         "Port 25/587; requires authentication.",
//         "Works with IMAP/POP3 for receiving.",
//         "SPF/DKIM/DMARC prevent spam.",
//       ],
//       abbreviations: [ { short: "SMTP", long: "Simple Mail Transfer Protocol" } ],
//       references: [
//         { handle: "ietf", weblink: "https://datatracker.ietf.org/doc/html/rfc5321", txt: "RFC 5321" },
//       ],
//       crossrefs: [ ],
//       tags: [ "protocol", "email" ],
//       imgurl: "https://upload.wikimedia.org/wikipedia/commons/9/93/Sav.png",
//       ribbon: "AI",
//       creation_date: "2026-03-26",
//       srcs: [ "perplexity" ],
//     },
//     {
//       id: 41,
//       term: "www",
//       text: "World Wide Web information system using HTTP, HTML, URLs invented by Tim Berners-Lee (1989).",
//       points: [
//         "Not the Internet; runs atop TCP/IP.",
//         "Browser-server architecture.",
//         "Semantic Web (RDF) evolution.",
//       ],
//       abbreviations: [
//         { short: "www", long: "World Wide Web" },
//         { short: "W3", long: "World Wide Web Consortium" }
//       ],
//       references: [
//         { handle: "w3c", weblink: "https://www.w3.org/", txt: "w3.org" },
//       ],
//       crossrefs: [ ],
//       tags: [ "web" ],
//       imgurl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/WWW_logo_by_Robert_Cailliau.svg/640px-WWW_logo_by_Robert_Cailliau.svg.png",
//       ribbon: "AI",
//       creation_date: "2026-03-26",
//       srcs: [ "perplexity" ],
//     },
//     {
//       id: 42,
//       term: "Active Server Pages",
//       text: "",
//       points: [
//         "Developed by Microsoft.",
//       ],
//       abbreviations: [
//         { short: "ASP", long: "Active Server Pages" }
//       ],
//       references: [
//         { handle: "wikipedia", weblink: "https://en.wikipedia.org/wiki/Microsoft", txt: "Wikipedia" },
//       ],
//       crossrefs: [ ],
//       tags: [ "xxx", "microsoft" ],
//       imgurl: "",
//       ribbon: "AI",
//       creation_date: "2026-03-26",
//       srcs: [ "perplexity" ],
//     },
//     {
//       id: 43,
//       term: "Netscape",
//       text: "Pioneering company that created the Netscape Navigator browser, sparking the 1990s browser wars and commercialization of the web.",
//       points: [
//         "Released Navigator in 1994, popularizing graphical web browsing.",
//         "Authored first JavaScript implementation (branded as LiveScript).",
//         "Open-sourced code leading to Mozilla Foundation.",
//       ],
//       abbreviations: [],
//       references: [
//         { handle: "wikipedia", weblink: "https://en.wikipedia.org/wiki/Netscape", txt: "Wikipedia" },
//       ],
//       crossrefs: [ ],
//       tags: [ "company", "browser" ],
//       imgurl: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netscape_icon.svg",
//       ribbon: "AI",
//       creation_date: "2026-03-26",
//       srcs: [ "perplexity" ],
//     },
//     {
//       id: 44,
//       term: "Navigator",
//       text: "Netscape's flagship web browser (1994-2008), first to gain mass adoption and introduce features like JavaScript and frames.",
//       points: [
//         "Version 1.0 supported images, forms; sparked web's popularity.",
//         "Declined due to IE dominance; discontinued in 2008.",
//         "Code base evolved into Mozilla Firefox.",
//       ],
//       abbreviations: [ { short: "N.N.", long: "Netscape Navigator" } ],
//       references: [
//         { handle: "wikipedia", weblink: "https://en.wikipedia.org/wiki/Netscape_Navigator", txt: "Wikipedia" },
//       ],
//       crossrefs: [ ],
//       tags: [ "browser" ],
//       imgurl: "https://upload.wikimedia.org/wikipedia/en/c/c9/Navigator_1-22.png",
//       ribbon: "AI",
//       creation_date: "2026-03-26",
//       srcs: [ "perplexity" ],
//     },
//     {
//       id: 45,
//       term: "Mozilla",
//       text: "Non-profit foundation born from Netscape's open-source code, creators of Firefox browser and key web standards advocate.",
//       points: [
//         "Released Firefox 1.0 in 2004, challenging IE monopoly.",
//         "Develops Gecko rendering engine and SpiderMonkey JS engine.",
//         "Promotes open web via Mozilla Manifesto.",
//       ],
//       abbreviations: [],
//       references: [
//         { handle: "official", weblink: "https://www.mozilla.org/", txt: "mozilla.org" },
//       ],
//       crossrefs: [ ],
//       tags: [ "organization" ],
//       imgurl: "https://upload.wikimedia.org/wikipedia/commons/8/82/WP20Symbols_Mozilla.svg",
//       ribbon: "AI",
//       creation_date: "2026-03-26",
//       srcs: [ "perplexity" ],
//     },
//     {
//       id: 46,
//       term: "Firefox",
//       text: "Mozilla's open-source web browser using Gecko engine, known for privacy features and rapid standards implementation.",
//       points: [
//         "Pioneered tabbed browsing and extensions ecosystem.",
//         "Reached 90% market share peak in 2009.",
//         "Quantum engine (2017) boosted performance.",
//       ],
//       abbreviations: [],
//       references: [
//         { handle: "official", weblink: "https://www.mozilla.org/firefox/", txt: "firefox.com" },
//       ],
//       crossrefs: [ ],
//       tags: [ "browser" ],
//       imgurl: "https://upload.wikimedia.org/wikipedia/commons/0/01/Mozilla_Firefox_2004_Logo.png",
//       ribbon: "AI",
//       creation_date: "2026-03-26",
//       srcs: [ "perplexity" ],
//     },
//     {
//       id: 47,
//       term: "tailwindcss",
//       text: "A utility-first CSS framework that provides low-level classes for building custom designs directly in HTML without writing separate style sheets.",
//       points: [
//         "Encourages composition through atomic utility classes.",
//         "Eliminates unused CSS using PurgeCSS during production builds.",
//         "Highly customizable via a central configuration file (tailwind.config.js)."
//       ],
//       abbreviations: [
//         { short: "TW", long: "Tailwind CSS" }
//       ],
//       references: [
//         { handle: "official", weblink: "https://tailwindcss.com/", txt: "tailwindcss.com" },
//         { handle: "docs", weblink: "https://tailwindcss.com/docs", txt: "tailwindcss.com/docs" }
//       ],
//       crossrefs: [ ],
//       tags: ["framework", "css"],
//       imgurl: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
//       ribbon: "AI",
//       creation_date: "2026-03-27",
//       srcs: ["perplexity"]
//     },
//     {
//       id: 48,
//       term: "ecmascript",
//       text: "The standardized specification of the JavaScript language maintained by ECMA International. Each yearly edition defines core syntax, semantics, and built-in objects used by browsers and Node.js.",
//       points: [
//         "ECMAScript 6 (ES2015) introduced classes, modules, and arrow functions.",
//         "New editions are released annually with incremental improvements.",
//         "Transpilers like Babel enable using new syntax in older browsers."
//       ],
//       abbreviations: [
//         { short: "ES", long: "ECMA Script" }
//       ],
//       references: [
//         { handle: "spec", weblink: "https://tc39.es/ecma262/", txt: "ecma262 (official spec)" }
//       ],
//       crossrefs: [ ],
//       tags: ["language", "standard"],
//       imgurl: "https://upload.wikimedia.org/wikipedia/commons/9/9c/ECMAScript_logo.svg",
//       ribbon: "AI",
//       creation_date: "2026-03-27",
//       srcs: ["perplexity"]
//     },
//     {
//       id: 49,
//       term: "svg",
//       text: "A vector image format based on XML, allowing for scalable graphics that remain crisp at any resolution and can be styled or animated with CSS and JavaScript.",
//       points: [
//         "Ideal for icons, charts, and logos due to resolution independence.",
//         "Can include interactive elements via JavaScript.",
//         "Supports accessibility features like titles and roles."
//       ],
//       abbreviations: [
//         { short: "SVG", long: "Scalable Vector Graphics" }
//       ],
//       references: [
//         { handle: "spec", weblink: "https://svgwg.org/specs/", txt: "W3C SVG specs" }
//       ],
//       crossrefs: [ ],
//       tags: ["format", "graphics"],
//       imgurl: "https://upload.wikimedia.org/wikipedia/commons/0/02/SVG_logo.svg",
//       ribbon: "AI",
//       creation_date: "2026-03-27",
//       srcs: ["perplexity"]
//     },
//     {
//       id: 50,
//       term: "cdn",
//       text: "A network of distributed servers that deliver content like images, scripts, and stylesheets efficiently by serving users from geographically closer locations.",
//       points: [
//         "Reduces latency and improves website loading speed.",
//         "Often used for hosting popular libraries (e.g., via jsDelivr or Cloudflare).",
//         "Helps mitigate traffic spikes and DDoS attacks."
//       ],
//       abbreviations: [
//         { short: "CDN", long: "Content Delivery Network" }
//       ],
//       references: [
//         { handle: "wiki", weblink: "https://en.wikipedia.org/wiki/Content_delivery_network", txt: "Wikipedia: CDN" }
//       ],
//       crossrefs: [ ],
//       tags: ["infrastructure", "web"],
//       imgurl: "https://upload.wikimedia.org/wikipedia/commons/a/a1/CDN_icon.svg",
//       ribbon: "AI",
//       creation_date: "2026-03-27",
//       srcs: ["perplexity"]
//     },
//     {
//       id: 51,
//       term: "APF (.apf)",
//       text: "The Angular Package Format defines how Angular libraries should be structured, built, and distributed to ensure compatibility with the Angular ecosystem.",
//       points: [
//         "Ensures libraries can be consumed by Angular CLI projects.",
//         "Includes precompiled metadata for AoT (Ahead-of-Time) compilation.",
//         "Distributes both ES2015 and ES5 module variants."
//       ],
//       abbreviations: [
//         { short: "APF", long: "Angular Package Format" }
//       ],
//       references: [
//         { handle: "guide", weblink: "https://angular.io/guide/angular-package-format", txt: "Angular.io APF Guide" }
//       ],
//       crossrefs: [ ],
//       tags: ["framework", "angular"],
//       imgurl: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg",
//       ribbon: "AI",
//       creation_date: "2026-03-27",
//       srcs: ["perplexity"]
//     },
//     {
//       id: 52,
//       term: "LCP",
//       text: "Largest Contentful Paint is a Core Web Vital metric that measures how long it takes for the largest visible element to render on a page.",
//       points: [
//         "Good LCP is considered under 2.5 seconds.",
//         "Images and background videos are common LCP elements.",
//         "Improved by optimizing image loading, caching, and server response times."
//       ],
//       abbreviations: [
//         { short: "LCP", long: "Largest Contentful Paint" }
//       ],
//       references: [
//         { handle: "web", weblink: "https://web.dev/lcp/", txt: "web.dev/lcp" }
//       ],
//       crossrefs: [ ],
//       tags: ["performance", "metrics"],
//       imgurl: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Web.dev_logo.svg",
//       ribbon: "AI",
//       creation_date: "2026-03-27",
//       srcs: ["perplexity"]
//     },
//     {
//       id: 53,
//       term: "PostCSS",
//       text: "A JavaScript tool that processes CSS with plugins, allowing transformations such as autoprefixing, nesting, or linting during the build step.",
//       points: [
//         "Serves as a foundation for modern CSS tooling like Tailwind CSS.",
//         "Plugins offer composable transformations of stylesheets.",
//         "Integrates easily with Webpack and other bundlers."
//       ],
//       abbreviations: [],
//       references: [
//         { handle: "official", weblink: "https://postcss.org/", txt: "postcss.org" }
//       ],
//       crossrefs: [ ],
//       tags: ["tool", "css"],
//       imgurl: "https://upload.wikimedia.org/wikipedia/commons/0/01/PostCSS_Logo.svg",
//       ribbon: "AI",
//       creation_date: "2026-03-27",
//       srcs: ["perplexity"]
//     },
//     {
//       id: 54,
//       term: "webpack",
//       text: "A JavaScript module bundler that processes and combines assets such as JS, CSS, and images into optimized bundles for deployment.",
//       points: [
//         "Uses a dependency graph starting from one or more entry points.",
//         "Supports loaders for transforming file types and plugins for custom build logic.",
//         "Often integrated with Babel and PostCSS to streamline frontend builds."
//       ],
//       abbreviations: [],
//       references: [
//         { handle: "official", weblink: "https://webpack.js.org/", txt: "webpack.js.org" }
//       ],
//       crossrefs: [ ],
//       tags: ["tool", "bundler"],
//       imgurl: "https://upload.wikimedia.org/wikipedia/commons/9/94/Webpack.svg",
//       ribbon: "AI",
//       creation_date: "2026-03-27",
//       srcs: ["perplexity"]
//     },
//     {
//       id: 55,
//       term: "web assembly",
//       text: "A low-level binary format that allows code written in languages like C, C++, or Rust to run efficiently in web browsers.",
//       points: [
//         "Runs at near-native speed within a sandboxed environment.",
//         "Complements JavaScript rather than replacing it.",
//         "Used for performance-heavy applications like games, image processing, or CAD tools."
//       ],
//       abbreviations: [
//         { short: "WASM", long: "Web Assembly" }
//       ],
//       references: [
//         { handle: "official", weblink: "https://webassembly.org/", txt: "webassembly.org" }
//       ],
//       crossrefs: [ ],
//       tags: ["technology", "web"],
//       imgurl: "https://upload.wikimedia.org/wikipedia/commons/1/1f/WebAssembly_Logo.svg",
//       ribbon: "AI",
//       creation_date: "2026-03-27",
//       srcs: ["perplexity"]
//     },
//     {
//       id: 56,
//       term: "API",
//       text: "A defined interface for communication between software components that allows one system to request or send data to another.",
//       points: [
//         "Commonly exposed over HTTP using REST or GraphQL conventions.",
//         "Facilitates separation of frontend and backend concerns.",
//         "Must handle authentication, versioning, and error responses carefully."
//       ],
//       abbreviations: [
//         { short: "API", long: "Application Programming Interface" }
//       ],
//       references: [
//         { handle: "wiki", weblink: "https://en.wikipedia.org/wiki/API", txt: "Wikipedia: API" }
//       ],
//       crossrefs: [ ],
//       tags: ["architecture", "web"],
//       imgurl: "https://upload.wikimedia.org/wikipedia/commons/d/dc/API.svg",
//       ribbon: "AI",
//       creation_date: "2026-03-27",
//       srcs: ["perplexity"]
//     },
     {
       id: 57,
       term: "RxJS",
       text: "A reactive programming library for composing asynchronous and event-based programs using observable sequences in JavaScript.",
       points: [
         "Central to Angular’s change detection and event systems.",
         "Supports operators for filtering, mapping, and combining streams.",
         "Promotes declarative handling of asynchronous workflows."
       ],
       abbreviations: [
         { short: "RxJS", long: "Reactive Extensions for JavaScript" }
       ],
       references: [
         { handle: "official", weblink: "https://rxjs.dev/", txt: "rxjs.dev" }
       ],
       crossrefs: [ ],
       tags: ["library", "async"],
       imgurl: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Rx_Logo_Grey.svg",
       ribbon: "AI",
       creation_date: "2026-03-27",
       srcs: ["perplexity"]
     },
//     {
//       id: 58,
//       term: "cors",
//       text: "Cross-Origin Resource Sharing is a browser mechanism that allows controlled access to resources from a different domain than the one that served the web page.",
//       points: [
//         "Enforced by browsers for security.",
//         "Servers must explicitly send headers like Access-Control-Allow-Origin.",
//         "Needed when frontend and backend run on different domains or ports."
//       ],
//       abbreviations: [
//         { short: "CORS", long: "Cross-Origin Resource Sharing" }
//       ],
//       references: [
//         { handle: "mdn", weblink: "https://developer.mozilla.org/docs/Web/HTTP/CORS", txt: "MDN Web Docs: CORS" }
//       ],
//       crossrefs: [ ],
//       tags: ["security", "web"],
//       imgurl: "https://upload.wikimedia.org/wikipedia/commons/3/38/HTTP_icon.svg",
//       ribbon: "AI",
//       creation_date: "2026-03-27",
//       srcs: ["perplexity"]
//     },
//     {
//       id: 59,
//       term: "XSS",
//       text: "A type of web vulnerability where an attacker injects malicious scripts into webpages viewed by other users.",
//       points: [
//         "Occurs when unescaped input is rendered into HTML.",
//         "Prevention includes proper output encoding and use of CSP (Content Security Policy).",
//         "Can lead to data theft, session hijacking, or defacement."
//       ],
//       abbreviations: [
//         { short: "XSS", long: "Cross-Site Scripting" }
//       ],
//       references: [
//         { handle: "owasp", weblink: "https://owasp.org/www-community/attacks/xss/", txt: "OWASP: XSS" }
//       ],
//       crossrefs: [ ],
//       tags: ["security"],
//       imgurl: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Lock-green.svg",
//       ribbon: "AI",
//       creation_date: "2026-03-27",
//       srcs: ["perplexity"]
//     },
//     {
//       id: 60,
//       term: "csrf",
//       text: "A web security vulnerability where unauthorized commands are transmitted from a trusted user’s browser to a web application, exploiting credentialed sessions.",
//       points: [
//         "Prevention involves using anti-CSRF tokens and SameSite cookies.",
//         "Targets state-changing requests (e.g., form submissions).",
//         "Browsers and frameworks now include built-in mitigations."
//       ],
//       abbreviations: [
//         { short: "CSRF", long: "Cross-Site Request Forgery" }
//       ],
//       references: [
//         { handle: "owasp", weblink: "https://owasp.org/www-community/attacks/csrf/", txt: "OWASP: CSRF" }
//       ],
//       crossrefs: [ ],
//       tags: ["security"],
//       imgurl: "https://upload.wikimedia.org/wikipedia/commons/3/39/Security_Shield.svg",
//       ribbon: "AI",
//       creation_date: "2026-03-27",
//       srcs: ["perplexity"]
//     },
     {
       id: 61,
       term: "AJAX",
       text: "A method for asynchronously updating parts of a web page without reloading by exchanging data with a server through JavaScript.",
       points: [
         "Uses XMLHttpRequest or the modern Fetch API.",
         "Enabled rich, dynamic web applications.",
         "JSON replaced XML as the dominant data format used with AJAX."
       ],
       abbreviations: [
         { short: "AJAX", long: "Asynchronous JavaScript and XML" }
       ],
       references: [
         { handle: "mdn", weblink: "https://developer.mozilla.org/docs/Web/Guide/AJAX", txt: "MDN Web Docs: AJAX" }
       ],
       crossrefs: [ ],
       tags: ["web", "async"],
       imgurl: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Ajax.svg",
       ribbon: "AI",
       creation_date: "2026-03-27",
       srcs: ["perplexity"]
     },
//     {
//       id: 62,
//       term: "json",
//       text: "A lightweight data-interchange format based on human-readable text used for structuring data.",
//       points: [
//         "Widely used for APIs and configuration files.",
//         "Supports nested objects and arrays.",
//         "Derived from JavaScript object syntax but language-independent."
//       ],
//       abbreviations: [
//         { short: "JSON", long: "JavaScript Object Notation" }
//       ],
//       references: [
//         { handle: "official", weblink: "https://www.json.org/", txt: "json.org" }
//       ],
//       crossrefs: [ ],
//       tags: ["data", "format"],
//       imgurl: "https://upload.wikimedia.org/wikipedia/commons/c/c9/JSON_vector_logo.svg",
//       ribbon: "AI",
//       creation_date: "2026-03-27",
//       srcs: ["perplexity"]
//     },
//     {
//       id: 63,
//       term: "jsonc",
//       text: "A variation of JSON that allows comments and trailing commas, commonly used in configuration files for tools like VS Code.",
//       points: [
//         "Not part of the official JSON standard.",
//         "Simplifies maintaining readable configuration files.",
//         "Must be parsed with a JSONC-aware parser since standard JSON parsers reject comments."
//       ],
//       abbreviations: [
//         { short: "JSONC", long: "JSON with Comments" }
//       ],
//       references: [
//         { handle: "wiki", weblink: "https://code.visualstudio.com/docs/languages/json", txt: "VS Code Docs: JSONC" }
//       ],
//       crossrefs: [],
//       tags: ["data", "format"],
//       imgurl: "https://upload.wikimedia.org/wikipedia/commons/c/c9/JSON_vector_logo.svg",
//       ribbon: "AI",
//       creation_date: "2026-03-27",
//       srcs: ["perplexity"]
//     },
//     {
//       id: 64,
//       term: "jsonp",
//       text: "A historical technique for requesting data from a server in a different domain by dynamically injecting a script tag with a callback.",
//       points: [
//         "Used before browsers supported CORS.",
//         "Requires server support to wrap data in a callback function.",
//         "Now largely obsolete and replaced by modern CORS-based approaches."
//       ],
//       abbreviations: [
//         { short: "JSONP", long: "JSON with Padding" }
//       ],
//       references: [
//         { handle: "mdn", weblink: "https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/JSONP", txt: "MDN Web Docs: JSONP" }
//       ],
//       crossrefs: [],
//       tags: ["legacy", "web"],
//       imgurl: "https://upload.wikimedia.org/wikipedia/commons/c/c9/JSON_vector_logo.svg",
//       ribbon: "AI",
//       creation_date: "2026-03-27",
//       srcs: ["perplexity"]
//     },
//     {
//       id: 65,
//       term: "react",
//       text: "A JavaScript library for building user interfaces using a component-based architecture and declarative rendering.",
//       points: [
//         "Created and maintained by Meta (Facebook).",
//         "Uses a virtual DOM to efficiently update and render components.",
//         "JSX allows HTML-like syntax within JavaScript code.",
//         "Ecosystem includes React Router, Redux, and Next.js."
//       ],
//       abbreviations: [],
//       references: [
//         { handle: "official", weblink: "https://react.dev/", txt: "react.dev" },
//         { handle: "github", weblink: "https://github.com/facebook/react", txt: "github.com/facebook/react" }
//       ],
//       crossrefs: [],
//       tags: ["framework", "frontend", "library"],
//       imgurl: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
//       ribbon: "AI",
//       creation_date: "2026-03-27",
//       srcs: ["perplexity"]
//     },
//     {
//       id: 66,
//       term: "Node.js",
//       text: "A runtime environment that lets developers run JavaScript outside the browser, built on Chrome's V8 JavaScript engine.",
//       points: [
//         "Ideal for backend and server-side applications.",
//         "Uses an event-driven, non-blocking I/O model that promotes scalability.",
//         "Commonly used with npm for package management."
//       ],
//       abbreviations: [{ short: "Node", long: "Node.js" }],
//       references: [
//         { handle: "official", weblink: "https://nodejs.org/", txt: "nodejs.org" }
//       ],
//       crossrefs: [],
//       tags: ["runtime", "backend", "tool"],
//       imgurl: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
//       ribbon: "AI",
//       creation_date: "2026-03-27",
//       srcs: ["perplexity"]
//     },
//     {
//       id: 67,
//       term: "Nuxt",
//       text: "An open-source framework built on top of Vue.js for creating server-rendered and static web applications.",
//       points: [
//         "Simplifies setup for SSR, static generation, and routing in Vue projects.",
//         "Offers automatic code-splitting and prefetching.",
//         "Strong focus on developer experience and configuration conventions."
//       ],
//       abbreviations: [],
//       references: [
//         { handle: "official", weblink: "https://nuxt.com/", txt: "nuxt.com" }
//       ],
//       crossrefs: [],
//       tags: ["framework", "vue", "frontend"],
//       imgurl: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Nuxt_logo.svg",
//       ribbon: "AI",
//       creation_date: "2026-03-27",
//       srcs: ["perplexity"]
//     },
//     {
//       id: 68,
//       term: "Vite",
//       text: "A modern frontend build tool that provides instant server start, lightning-fast HMR, and optimized builds using ES modules and Rollup.",
//       points: [
//         "Created by Evan You, author of Vue.js.",
//         "Supports frameworks like Vue, React, and Svelte.",
//         "Replaces older bundlers like Webpack for many projects."
//       ],
//       abbreviations: [],
//       references: [
//         { handle: "official", weblink: "https://vitejs.dev/", txt: "vitejs.dev" }
//       ],
//       crossrefs: [],
//       tags: ["tool", "frontend", "build"],
//       imgurl: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg",
//       ribbon: "AI",
//       creation_date: "2026-03-27",
//       srcs: ["perplexity"]
//     },
//     {
//       id: 69,
//       term: "Rxjs forkjoin",
//       text: "A function in RxJS that combines multiple observables and emits a single value when all of them complete.",
//       points: [
//         "Useful for running parallel HTTP requests and combining their results.",
//         "Emits values as an array corresponding to each observable’s last emitted value.",
//         "Completes only after all inner observables have finished."
//       ],
//       abbreviations: [],
//       references: [
//         { handle: "official", weblink: "https://rxjs.dev/api/index/function/forkJoin", txt: "rxjs.dev" }
//       ],
//       crossrefs: [],
//       tags: ["rxjs", "async", "observables"],
//       imgurl: "https://rxjs.dev/assets/images/logos/rxjs-512-512.png",
//       ribbon: "AI",
//       creation_date: "2026-03-27",
//       srcs: ["perplexity"]
//     },
     {
       id: 70,
       term: "JavaScript async",
       text: "A keyword in JavaScript used to define asynchronous functions that return a Promise.",
       points: [
         "Allows use of 'await' for simplified asynchronous code.",
         "Enables non-blocking execution for operations like API calls.",
         "Async functions always return a Promise, even if no explicit return is provided."
       ],
       abbreviations: [],
       references: [
         { handle: "mdn", weblink: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function", txt: "MDN docs" }
       ],
       crossrefs: [],
       tags: ["javascript", "async"],
       imgurl: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
       ribbon: "AI",
       creation_date: "2026-03-27",
       srcs: ["perplexity"]
     },
//     {
//       id: 71,
//       term: "JavaScript await",
//       text: "A keyword used inside async functions to pause execution until a Promise resolves or rejects.",
//        points: [
//          "Can only be used within an async function.",
//          "Simplifies asynchronous logic by avoiding nested .then() calls.",
//          "Code after 'await' resumes once the awaited Promise settles."
//        ],
//        abbreviations: [],
//        references: [
//          { handle: "mdn", weblink: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await", txt: "MDN docs" }
//        ],
//        crossrefs: [],
//        tags: ["javascript", "async", "promise"],
//        imgurl: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
//        ribbon: "AI",
//        creation_date: "2026-03-27",
//        srcs: ["perplexity"]
//      },
//      {
//        id: 72,
//        term: "DNS",
//        text: "The Domain Name System (DNS) translates human-readable domain names (like example.com) into IP addresses that computers use to communicate.",
//        points: [
//          "DNS is like an address book for the internet.",
//          "Key record types include A, AAAA, CNAME, MX, and TXT.",
//          "DNS caching improves speed but can delay propagation of changes."
//        ],
//        abbreviations: [
//          { short: "DNS", long: "domain name system" }
//        ],
//        references: [
//          { handle: "wiki", weblink: "https://en.wikipedia.org/wiki/Domain_Name_System", txt: "Wikipedia" }
//        ],
//        crossrefs: [],
//        tags: ["networking", "internet"],
//        imgurl: "https://upload.wikimedia.org/wikipedia/commons/4/4b/DNS_structure.png",
//        ribbon: "AI",
//        creation_date: "2026-05-27",
//        srcs: ["perplexity"]
//      },
//      {
//        id: 73,
//        term: "CI/CD",
//        text: "CI/CD stands for Continuous Integration and Continuous Deployment, practices that automate code testing and delivery to production.",
//        points: [
//          "Continuous Integration merges code frequently with automated tests.",
//          "Continuous Deployment automates release steps for faster delivery.",
//          "Popular tools include GitHub Actions, Jenkins, and GitLab CI."
//        ],
//        abbreviations: [
//          { short: "CI", long: "continuous integration" },
//          { short: "CD", long: "continuous deployment" },
//        ],
//        references: [
//          { handle: "atlassian", weblink: "https://www.atlassian.com/continuous-delivery", txt: "Atlassian CI/CD Guide" }
//        ],
//        crossrefs: [],
//        tags: ["devops", "automation"],
//        imgurl: "https://upload.wikimedia.org/wikipedia/commons/5/5a/CI-CD_diagram.png",
//        ribbon: "AI",
//        creation_date: "2026-05-27",
//        srcs: ["perplexity"]
//      },
//      {
//        id: 74,
//        term: "SaaS",
//        text: "Software as a Service (SaaS) is a software delivery model where applications are hosted centrally and accessed over the internet.",
//        points: [
//          "Users subscribe instead of installing software locally.",
//          "Common examples: Google Workspace, Salesforce, Slack.",
//          "Vendors handle maintenance, scaling, and security updates."
//        ],
//        abbreviations: [
//          { short: "SaaS", long: "software as a service" }
//        ],
//        references: [
//          { handle: "aws", weblink: "https://aws.amazon.com/saas/", txt: "AWS SaaS Overview" }
//        ],
//        crossrefs: [],
//        tags: ["cloud", "business-model"],
//        imgurl: "https://upload.wikimedia.org/wikipedia/commons/1/19/SaaS-cloud.svg",
//        ribbon: "AI",
//        creation_date: "2026-05-27",
//        srcs: ["perplexity"]
//      },
//      {
//        id: 75,
//        term: "TLS",
//        text: "Transport Layer Security (TLS) encrypts data between clients and servers, ensuring confidentiality and integrity over the internet.",
//        points: [
//          "Successor of SSL (Secure Sockets Layer).",
//          "Used in HTTPS to secure web traffic.",
//          "TLS certificates are issued by trusted certificate authorities."
//        ],
//        abbreviations: [
//          { short: "tls", long: "transport layer security" }
//        ],
//        references: [
//          { handle: "ietf", weblink: "https://datatracker.ietf.org/doc/html/rfc5246", txt: "RFC 5246 (TLS 1.2)" }
//        ],
//        crossrefs: [],
//        tags: ["security", "encryption"],
//        imgurl: "https://upload.wikimedia.org/wikipedia/commons/c/cb/TLS_SSL.png",
//        ribbon: "AI",
//        creation_date: "2026-05-27",
//        srcs: ["perplexity"]
//      },
//      {
//        id: 76,
//        term: "OAuth",
//        text: "OAuth is an open authorization standard that lets users grant third-party apps limited access to their resources without sharing credentials.",
//        points: [
//          "Used in 'Login with Google' or similar login flows.",
//          "Involves access tokens, scopes, and refresh tokens.",
//          "OAuth 2.0 is the current widely used version."
//        ],
//        abbreviations: [
//          { short: "OAuth", long: "open authorization" }
//        ],
//        references: [
//          { handle: "oauth", weblink: "https://oauth.net/2/", txt: "OAuth.net" }
//        ],
//        crossrefs: [],
//        tags: ["security", "authentication"],
//        imgurl: "https://upload.wikimedia.org/wikipedia/commons/d/d2/Oauth_logo.svg",
//        ribbon: "AI",
//        creation_date: "2026-05-27",
//        srcs: ["perplexity"]
//      },
//      {
//        id: 77,
//        term: "sso",
//        text: "Single Sign-On (SSO) allows users to access multiple applications with one set of login credentials.",
//        points: [
//          "Reduces password fatigue and improves security.",
//          "Commonly implemented using SAML, OAuth, or OpenID Connect.",
//          "Widely used in enterprise environments."
//        ],
//        abbreviations: [
//          { short: "sso", long: "single sign-on" }
//        ],
//        references: [
//          { handle: "okta", weblink: "https://www.okta.com/what-is-single-sign-on/", txt: "Okta SSO Overview" }
//        ],
//        crossrefs: [],
//        tags: ["authentication", "security"],
//        imgurl: "https://upload.wikimedia.org/wikipedia/commons/8/8d/SSO_Workflow.svg",
//        ribbon: "AI",
//        creation_date: "2026-05-27",
//        srcs: ["perplexity"]
//      },
//      {
//        id: 78,
//        term: "dry",
//        text: "DRY stands for 'Don't Repeat Yourself', a software principle that discourages code duplication.",
//        points: [
//          "Encourages reuse through abstraction and modular design.",
//          "Improves maintainability and reduces errors.",
//          "Often contrasted with WET (Write Everything Twice)."
//        ],
//        abbreviations: [
//          { short: "DRY", long: "don't repeat yourself" }
//        ],
//        references: [
//          { handle: "wiki", weblink: "https://en.wikipedia.org/wiki/Don%27t_repeat_yourself", txt: "Wikipedia" }
//        ],
//        crossrefs: [  ],
//        tags: ["principle", "software-engineering"],
//        imgurl: "https://upload.wikimedia.org/wikipedia/commons/4/4b/DRY_principle_diagram.png",
//        ribbon: "AI",
//        creation_date: "2026-05-27",
//        srcs: ["perplexity"]
//      },
//      {
//        id: 79,
//        term: "KISS",
//        text: "KISS stands for 'Keep It Simple, Stupid', a design principle emphasizing simplicity over unnecessary complexity.",
//        points: [
//          "Simpler systems are easier to understand and maintain.",
//          "Avoid over-engineering or adding speculative features.",
//          "Often used in conjunction with DRY."
//        ],
//        abbreviations: [
//          { short: "kiss", long: "keep it simple, stupid" }
//        ],
//        references: [
//          { handle: "wiki", weblink: "https://en.wikipedia.org/wiki/KISS_principle", txt: "Wikipedia" }
//        ],
//        crossrefs: [  ],
//        tags: ["principle", "design"],
//        imgurl: "https://upload.wikimedia.org/wikipedia/commons/9/94/Keep-It-Simple-Stupid.svg",
//        ribbon: "AI",
//        creation_date: "2026-05-27",
//        srcs: ["perplexity"]
//      },
      {
        id: 80,
        term: "TDD",
        text: "Test-Driven Development (TDD) is a software process where tests are written before the code that satisfies them.",
        points: [
          "Cycle: Red → Green → Refactor.",
          "Encourages small, iterative changes and strong test coverage.",
          "Often used with unit test frameworks like Jest or JUnit."
        ],
        abbreviations: [
          { short: "tdd", long: "test-driven development" }
        ],
        references: [
          { handle: "martinfowler", weblink: "https://martinfowler.com/bliki/TestDrivenDevelopment.html", txt: "Martin Fowler on TDD" }
        ],
        crossrefs: [],
        tags: ["testing", "methodology"],
        imgurl: "https://upload.wikimedia.org/wikipedia/commons/0/0b/TDD_Global_Lifecycle.png",
        ribbon: "AI",
        creation_date: "2026-05-27",
        srcs: ["perplexity"]
      },
      {
        id: 81,
        term: "BDD",
        text: "Behavior-Driven Development (BDD) builds on TDD by focusing on human-readable tests that describe system behavior.",
        points: [
          "Uses 'Given-When-Then' syntax to define expected outcomes.",
          "Popular tools: Cucumber, SpecFlow, Jasmine.",
          "Bridges the gap between technical and non-technical stakeholders."
        ],
        abbreviations: [
          { short: "BDD", long: "behavior-driven development" }
        ],
        references: [
          { handle: "cucumber", weblink: "https://cucumber.io/docs/bdd/", txt: "Cucumber Docs" }
        ],
        crossrefs: [],
        tags: ["testing", "methodology"],
        imgurl: "https://upload.wikimedia.org/wikipedia/commons/f/f0/BDD_process_overview.png",
        ribbon: "AI",
        creation_date: "2026-05-27",
        srcs: ["perplexity"]
      },
//      {
//        id: 82,
//        term: "rfc",
//        text: "RFCs (Requests for Comments) are a series of documents describing standards, protocols, and procedures for the internet.",
//        points: [
//          "Maintained by the Internet Engineering Task Force (IETF).",
//          "Each RFC has a unique number and may update or obsolete previous ones.",
//          "Not all RFCs become official standards, but many define key internet protocols."
//        ],
//        abbreviations: [
//          { short: "rfc", long: "request for comments" }
//        ],
//        references: [
//          { handle: "ietf", weblink: "https://www.rfc-editor.org/", txt: "RFC Editor Website" }
//        ],
//        crossrefs: [],
//        tags: ["internet", "standards"],
//        imgurl: "https://upload.wikimedia.org/wikipedia/commons/f/f6/IETF_logo.png",
//        ribbon: "AI",
//        creation_date: "2026-05-27",
//        srcs: ["perplexity"]
//      },
//      {
//        id: 83,
//        term: "google merchant",
//        text: "Google Merchant Center is a platform that allows businesses to upload and manage product data for Google Shopping ads and other Google commerce services.",
//        points: [
//          "Feeds product information (price, availability, description) to Google’s ecosystem.",
//          "Used with Google Ads for Product Listing Ads (PLAs).",
//          "Requires compliant product data feeds for approval."
//        ],
//        abbreviations: [],
//        references: [
//          { handle: "official", weblink: "https://merchants.google.com/", txt: "Google Merchant Center" }
//        ],
//        crossrefs: [],
//        tags: ["marketing", "ecommerce"],
//        imgurl: "https://upload.wikimedia.org/wikipedia/commons/2/24/Google_Merchant_Center_logo.png",
//        ribbon: "AI",
//        creation_date: "2026-05-27",
//        srcs: ["perplexity"]
//      },
      {
        id: 84,
        term: "Angular",
        text: "Angular is a modern TypeScript-based web application framework maintained by Google, suited for building large-scale single-page applications.",
        points: [
          "Completely rewritten version separate from AngularJS.",
          "Uses TypeScript, dependency injection, and reactive programming.",
          "Supports strong tooling via Angular CLI."
        ],
        abbreviations: [],
        references: [
          { handle: "official", weblink: "https://angular.dev", txt: "Angular.dev" }
        ],
        crossrefs: [],
        tags: ["framework", "frontend"],
        imgurl: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg",
        ribbon: "AI",
        creation_date: "2026-05-27",
        srcs: ["perplexity"]
      },
//      {
//        id: 85,
//        term: "angular.js",
//        text: "AngularJS is the original JavaScript-based front-end framework created by Google, emphasizing two-way data binding and MVC architecture.",
//        points: [
//          "Introduced declarative templates using HTML.",
//          "Now deprecated in favor of modern Angular.",
//          "Pioneered many early SPA development concepts."
//        ],
//        abbreviations: [],
//        references: [
//          { handle: "archive", weblink: "https://angularjs.org/", txt: "AngularJS.org" }
//        ],
//        crossrefs: [],
//        tags: ["framework", "legacy", "frontend"],
//        imgurl: "https://upload.wikimedia.org/wikipedia/commons/c/ca/AngularJS_logo.svg",
//        ribbon: "AI",
//        creation_date: "2026-05-27",
//        srcs: ["perplexity"]
//      },
//      {
//        id: 86,
//        term: "vue",
//        text: "Vue.js is a progressive JavaScript framework for building user interfaces, emphasizing ease of integration and reactive components.",
//        points: [
//          "Created by Evan You after working at Google on AngularJS.",
//          "Adopts concepts from Angular and React in a lightweight form.",
//          "Used for both small widgets and complex single-page apps."
//        ],
//        abbreviations: [
//          { short: "vue", long: "vue.js" }
//        ],
//        references: [
//          { handle: "official", weblink: "https://vuejs.org/", txt: "Vue.js Website" }
//        ],
//        crossrefs: [],
//        tags: ["framework", "frontend"],
//        imgurl: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg",
//        ribbon: "AI",
//        creation_date: "2026-05-27",
//        srcs: ["perplexity"]
//      },
//      {
//        id: 87,
//        term: "certificate authority (ca)",
//        text: "A Certificate Authority (CA) is a trusted entity that issues digital certificates verifying the ownership of encryption keys used in secure communications.",
//        points: [
//          "CAs are integral to the TLS/SSL ecosystem.",
//          "Examples include Let's Encrypt, DigiCert, and GlobalSign.",
//          "Certificates enable HTTPS and secure authentication."
//        ],
//        abbreviations: [
//          { short: "ca", long: "certificate authority" }
//        ],
//        references: [
//          { handle: "wiki", weblink: "https://en.wikipedia.org/wiki/Certificate_authority", txt: "Wikipedia" }
//        ],
//        crossrefs: [],
//        tags: ["security", "encryption"],
//        imgurl: "https://upload.wikimedia.org/wikipedia/commons/6/63/Certificate_chain.svg",
//        ribbon: "AI",
//        creation_date: "2026-05-27",
//        srcs: ["perplexity"]
//      },
//      {
//        id: 88,
//        term: "web of trust",
//        text: "A Web of Trust is a decentralized trust model where users validate each other’s identities, used notably in PGP encryption systems.",
//        points: [
//          "Contrasts with centralized certificate authorities.",
//          "Trust grows organically through mutual verification.",
//          "Used in open-source and identity verification contexts."
//        ],
//        abbreviations: [],
//        references: [
//          { handle: "wiki", weblink: "https://en.wikipedia.org/wiki/Web_of_trust", txt: "Wikipedia" }
//        ],
//        crossrefs: [],
//        tags: ["security", "cryptography"],
//        imgurl: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Web_of_Trust_diagram.png",
//        ribbon: "AI",
//        creation_date: "2026-05-27",
//        srcs: ["perplexity"]
//      },
//      {
//        id: 89,
//        term: "javascriptcore",
//        text: "JavaScriptCore is Apple’s JavaScript engine developed for Safari and WebKit, responsible for interpreting and executing JS code.",
//        points: [
//          "Written in C++ with a focus on speed and compliance with ECMAScript.",
//          "Powers not just Safari but also macOS and iOS WebViews.",
//          "Similar in purpose to V8 (Chrome) and SpiderMonkey (Firefox)."
//        ],
//        abbreviations: [],
//        references: [
//          { handle: "webkit", weblink: "https://developer.apple.com/documentation/javascriptcore", txt: "Apple JavaScriptCore Docs" }
//        ],
//        crossrefs: [],
//        tags: ["runtime", "web"],
//        imgurl: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Webkit_logo.svg",
//        ribbon: "AI",
//        creation_date: "2026-05-27",
//        srcs: ["perplexity"]
//      },
//      {
//        id: 90,
//        term: "blink",
//        text: "Blink is the open-source browser engine developed by Google as part of the Chromium project, powering Chrome, Edge, and Opera.",
//        points: [
//          "Forked from WebKit in 2013.",
//          "Handles HTML, CSS, and DOM rendering.",
//          "Used to improve performance and simplify multi-process architecture."
//        ],
//        abbreviations: [],
//        references: [
//          { handle: "chromium", weblink: "https://chromium.googlesource.com/chromium/src/+/main/docs/blink.md", txt: "Chromium Blink Docs" }
//        ],
//        crossrefs: [],
//        tags: ["browser-engine", "web"],
//        imgurl: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Chromium_Logo.svg",
//        ribbon: "AI",
//        creation_date: "2026-05-27",
//        srcs: ["perplexity"]
//      },
//      {
//        id: 91,
//        term: "ssr",
//        text: "Server-Side Rendering (SSR) is the process of generating a complete HTML page on the server for each request rather than building it in the browser. This improves initial load times and SEO.",
//        points: [
//          "Often used with frameworks like Next.js or Nuxt.js.",
//          "Provides fully rendered HTML for faster perceived performance.",
//          "Can combine with client-side hydration for interactivity."
//        ],
//        abbreviations: [{ short: "ssr", long: "server-side rendering" }],
//        references: [
//          { handle: "nextjs", weblink: "https://nextjs.org/docs/basic-features/pages#server-side-rendering", txt: "Next.js docs" }
//        ],
//        crossrefs: [],
//        tags: ["webdev", "rendering"],
//        imgurl: "https://upload.wikimedia.org/wikipedia/commons/3/30/Server.svg",
//        ribbon: "AI",
//        creation_date: "2026-03-27",
//        srcs: ["perplexity"]
//      },
//      {
//        id: 92,
//        term: "mpa",
//        text: "A Multi-Page Application (MPA) loads each page separately from the server, refreshing the browser and reloading assets with each navigation.",
//        points: [
//          "Traditional web architecture before SPAs became popular.",
//          "Better SEO out-of-the-box since pages are independently rendered.",
//          "May require more data loading and slower transitions."
//        ],
//        abbreviations: [{ short: "mpa", long: "multi-page application" }],
//        references: [],
//        crossrefs: [],
//        tags: ["architecture", "webdev"],
//        imgurl: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Browser_icon.svg",
//        ribbon: "AI",
//        creation_date: "2026-03-27",
//        srcs: ["perplexity"]
//      },
//      {
//        id: 93,
//        term: "spa",
//        text: "A Single-Page Application (SPA) dynamically updates the current page instead of loading entire new ones from the server. It relies heavily on client-side JavaScript and APIs.",
//        points: [
//          "Examples: React, Angular, and Vue apps.",
//          "Improves navigation speed but may have SEO challenges.",
//          "Uses client-side routing to mimic multiple pages."
//        ],
//        abbreviations: [{ short: "spa", long: "single-page application" }],
//        references: [
//          { handle: "mdn", weblink: "https://developer.mozilla.org/en-US/docs/Glossary/SPA", txt: "MDN Glossary" }
//        ],
//        crossrefs: [],
//        tags: ["architecture", "javascript"],
//        imgurl: "https://upload.wikimedia.org/wikipedia/commons/9/99/Html5.svg",
//        ribbon: "AI",
//        creation_date: "2026-03-27",
//        srcs: ["perplexity"]
//      },
//      {
//        id: 94,
//        term: "pwa",
//        text: "A Progressive Web App (PWA) combines web and native app features such as offline use, push notifications, and installation on devices.",
//        points: [
//          "Uses Service Workers to cache resources offline.",
//          "Requires HTTPS to ensure integrity and security.",
//          "Can be added to home screens on mobile devices."
//        ],
//        abbreviations: [{ short: "pwa", long: "progressive web app" }],
//        references: [
//          { handle: "mdn", weblink: "https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps", txt: "MDN PWAs" }
//        ],
//        crossrefs: [],
//        tags: ["webapp", "offline", "mobile"],
//        imgurl: "https://upload.wikimedia.org/wikipedia/commons/2/29/PWA-logo.svg",
//        ribbon: "AI",
//        creation_date: "2026-03-27",
//        srcs: ["perplexity"]
//      },
//      {
//        id: 95,
//        term: "ssg",
//        text: "Static Site Generation (SSG) pre-builds HTML pages at build time, serving them as static assets for high performance and scalability.",
//        points: [
//          "Common in frameworks like Next.js, Gatsby, and Hugo.",
//          "Ideal for blogs and documentation sites.",
//          "Updates require a rebuild unless combined with ISR."
//        ],
//        abbreviations: [{ short: "ssg", long: "static site generation" }],
//        references: [],
//        crossrefs: [],
//        tags: ["webdev", "build"],
//        imgurl: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Html_document_icon.svg",
//        ribbon: "AI",
//        creation_date: "2026-03-27",
//        srcs: ["perplexity"]
//      },
//      {
//        id: 96,
//        term: "seo",
//        text: "Search Engine Optimization (SEO) enhances a website’s visibility in search engines by improving content relevance, accessibility, and technical structure. Practice of increasing organic (unpaid) traffic from search engines through on-page, technical, and off-page strategies.",
//        points: [
//          "Practices include metadata optimization, proper headings, and fast load speeds.",
//          "SSR and static rendering help crawlers index dynamic content.",
//          "Important for marketing, discoverability, and performance.",
//          "Long-term traffic source cheaper than paid advertising.",
//          "Core elements include keywords, content quality, and site speed.",
//          "Essential for product pages and category landing pages.",
//        ],
//        abbreviations: [{ short: "seo", long: "search engine optimization" }],
//        references: [
//          { handle: "moz", weblink: "https://moz.com/learn/seo/what-is-seo", txt: "Moz SEO Basics" },
//          { handle: "moz", weblink: "https://moz.com/learn/seo", txt: "Moz SEO" },
//        ],
//        crossrefs: [],
//        tags: ["marketing", "visibility"],
//        imgurl: "https://upload.wikimedia.org/wikipedia/commons/d/dc/SEO_Icon.svg",
//        ribbon: "AI",
//        creation_date: "2026-03-27",
//        srcs: ["perplexity"]
//      },
//      {
//        id: 97,
//        term: "isr",
//        text: "Incremental Static Regeneration (ISR) updates pre-rendered static pages in the background as traffic comes in, avoiding full rebuilds.",
//        points: [
//          "Unique to frameworks like Next.js.",
//          "Balances static performance with fresh data.",
//          "Configurable through revalidation intervals."
//        ],
//        abbreviations: [{ short: "isr", long: "incremental static regeneration" }],
//        references: [
//          { handle: "nextjs", weblink: "https://nextjs.org/docs/pages/building-your-application/data-fetching/incremental-static-regeneration", txt: "Next.js ISR Docs" }
//        ],
//        crossrefs: [],
//        tags: ["webdev", "rendering"],
//        imgurl: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Regeneration_icon.svg",
//        ribbon: "AI",
//        creation_date: "2026-03-27",
//        srcs: ["perplexity"]
//      },
//      {
//        id: 98,
//        term: "ui",
//        text: "User Interface (UI) refers to the visual and interactive elements users engage with in software or websites.",
//        points: [
//          "Includes buttons, input fields, icons, and layouts.",
//          "Goals are clarity, consistency, and accessibility.",
//          "UI design complements UX by focusing on look and feel."
//        ],
//        abbreviations: [{ short: "ui", long: "user interface" }],
//        references: [],
//        crossrefs: [],
//        tags: ["design", "frontend"],
//        imgurl: "https://upload.wikimedia.org/wikipedia/commons/2/23/UI_icon.svg",
//        ribbon: "AI",
//        creation_date: "2026-03-27",
//        srcs: ["perplexity"]
//      },
//      {
//        id: 99,
//        term: "gui",
//        text: "Graphical User Interface (GUI) is a type of UI that uses visual components like windows, icons, and menus to allow user interaction with digital systems.",
//        points: [
//          "Popularized by operating systems like Windows and macOS.",
//          "Contrasts with command-line interfaces (CLI).",
//          "Strongly influenced UX outcomes."
//        ],
//        abbreviations: [{ short: "gui", long: "graphical user interface" }],
//        references: [],
//        crossrefs: [],
//        tags: ["design", "interface"],
//        imgurl: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Computer_icon.svg",
//        ribbon: "AI",
//        creation_date: "2026-03-27",
//        srcs: ["perplexity"]
//      },
//      {
//        id: 100,
//        term: "ux",
//        text: "User Experience (UX) describes the overall emotional and functional experience a user has while interacting with a product or service.",
//        points: [
//          "Focuses on ease of use, satisfaction, and accessibility.",
//          "Good UX involves research, testing, and iteration.",
//          "Differs from UI, which deals with visual design only."
//        ],
//        abbreviations: [{ short: "ux", long: "user experience" }],
//        references: [],
//        crossrefs: [],
//        tags: ["design", "interaction"],
//        imgurl: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Happy_face_icon.svg",
//        ribbon: "AI",
//        creation_date: "2026-03-27",
//        srcs: ["perplexity"]
//      },
//      {
//        id: 101,
//        term: "cms",
//        text: "A Content Management System (CMS) is software that lets users create, manage, and modify content on a website without needing coding skills.",
//        points: [
//          "Examples include WordPress, Drupal, and Strapi.",
//          "Supports role-based access and version control.",
//          "Headless CMS decouples frontend from backend."
//        ],
//        abbreviations: [{ short: "cms", long: "content management system" }],
//        references: [
//          { handle: "wordpress", weblink: "https://wordpress.org/", txt: "WordPress.org" }
//        ],
//        crossrefs: [],
//        tags: ["content", "backend"],
//        imgurl: "https://upload.wikimedia.org/wikipedia/commons/2/20/Content_management_system_icon.svg",
//        ribbon: "AI",
//        creation_date: "2026-03-27",
//        srcs: ["perplexity"]
//      },
//      {
//        id: 102,
//        term: "url",
//        text: "A Uniform Resource Locator (URL) specifies the address of a resource on the internet, combining protocol, domain, and path.",
//        points: [
//          "Looks like: https://example.com/path?query=1.",
//          "Essential for linking and routing between pages.",
//          "Defined by IETF standards such as RFC 3986."
//        ],
//        abbreviations: [{ short: "url", long: "uniform resource locator" }],
//        references: [
//          { handle: "ietf", weblink: "https://datatracker.ietf.org/doc/html/rfc3986", txt: "RFC 3986" }
//        ],
//        crossrefs: [],
//        tags: ["web", "networking"],
//        imgurl: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Internet_icon.svg",
//        ribbon: "AI",
//        creation_date: "2026-03-27",
//        srcs: ["perplexity"]
//      },
//      {
//        id: 103,
//        term: "XML",
//        text: "eXtensible Markup Language (XML) is a data format that defines structured documents through custom tags, often used for data interchange.",
//        points: [
//          "Similar to HTML but designed for data representation.",
//          "Commonly used in configuration files and APIs.",
//          "Has been partially replaced by JSON in modern web apps."
//        ],
//        abbreviations: [{ short: "xml", long: "extensible markup language" }],
//        references: [
//          { handle: "w3c", weblink: "https://www.w3.org/XML/", txt: "W3C XML" }
//        ],
//        crossrefs: [],
//        tags: ["data", "markup"],
//        imgurl: "https://upload.wikimedia.org/wikipedia/commons/8/82/XML_icon.svg",
//        ribbon: "AI",
//        creation_date: "2026-03-27",
//        srcs: ["perplexity"]
//      },
      {
        id: 104,
        term: "DOM",
        text: "The Document Object Model (DOM) is a programming interface representing the structure of HTML and XML documents as objects and nodes.",
        points: [
          "Allows scripts to read and modify web page content.",
          "Central to dynamic web interactions in browsers.",
          "Accessible in JavaScript via window.document."
        ],
        abbreviations: [
          { short: "DOM", long: "document object model" },
        ],
        references: [
          { handle: "mdn", weblink: "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model", txt: "MDN DOM API" }
        ],
        crossrefs: [],
        tags: ["web", "javascript", "api"],
        imgurl: "https://upload.wikimedia.org/wikipedia/commons/9/99/Dom_model.svg",
        ribbon: "AI",
        creation_date: "2026-03-27",
        srcs: ["perplexity"]
      },
      {
        id: 105,
        term: "REST",
        text: "Representational State Transfer (REST) is an architectural style for designing APIs, using stateless operations and standard HTTP methods.",
        points: [
          "Typically uses JSON or XML payloads.",
          "URL endpoints represent resources, not actions.",
          "GET, POST, PUT, DELETE map to CRUD operations."
        ],
        abbreviations: [
          { short: "rest", long: "representational state transfer" }
        ],
        references: [
          { handle: "royfielding", weblink: "https://www.ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm", txt: "Fielding Dissertation" }
        ],
        crossrefs: [],
        tags: ["api", "architecture"],
        imgurl: "https://upload.wikimedia.org/wikipedia/commons/6/6e/API_Icon.svg",
        ribbon: "AI",
        creation_date: "2026-03-27",
        srcs: ["perplexity"]
      },
//      {
//        id: 106,
//        term: "RESTful",
//        text: "A RESTful API follows REST principles strictly, ensuring statelessness, consistent resource URIs, and proper use of HTTP verbs and response codes.",
//        points: [
//          "Every URL uniquely identifies a resource.",
//          "Resources are manipulated via standard HTTP methods.",
//          "Enhances scalability and simplicity of web services."
//        ],
//        abbreviations: [],
//        references: [],
//        crossrefs: [],
//        tags: ["api", "architecture"],
//        imgurl: "https://upload.wikimedia.org/wikipedia/commons/2/25/Globe_API_icon.svg",
//        ribbon: "AI",
//        creation_date: "2026-03-27",
//        srcs: ["perplexity"]
//      },
//      {
//        id: 107,
//        term: "CRUD",
//        text: "CRUD stands for the basic operations for persistent storage and database interactions.",
//        points: [
//          "Commonly mapped to HTTP verbs: POST, GET, PUT, DELETE.",
//          "Used in data models, APIs, and administrative tools.",
//          "Minimizing CRUD repetition leads to cleaner codebases."
//        ],
//        abbreviations: [{ short: "CRUD", long: "create, read, update, delete" }],
//        references: [],
//        crossrefs: [],
//        tags: ["database", "api"],
//        imgurl: "https://upload.wikimedia.org/wikipedia/commons/2/25/Database_icon.svg",
//        ribbon: "AI",
//        creation_date: "2026-03-27",
//        srcs: ["perplexity"]
//      },
//      {
//        id: 108,
//        term: "MVC",
//        text: "Model–View–Controller (MVC) is a design pattern that separates an application into three interconnected components, promoting organized, reusable code.",
//        points: [
//          "Model: manages data and business logic.",
//          "View: handles UI and presentation.",
//          "Controller: manages user input and links Model and View."
//        ],
//        abbreviations: [{ short: "mvc", long: "model-view-controller" }],
//        references: [
//          { handle: "spring", weblink: "https://docs.spring.io/spring-framework/docs/current/reference/html/web.html#mvc", txt: "Spring MVC Docs" }
//        ],
//        crossrefs: [],
//        tags: ["pattern", "architecture", "design-pattern"],
//        imgurl: "https://upload.wikimedia.org/wikipedia/commons/3/35/%D9%86%D8%B8%D8%B1%D8%A9_%D9%85%D9%82%D8%B1%D8%A8%D8%A9_%D9%84%D9%84%D8%B2%D9%84%D9%8A%D8%AC_%D9%81%D9%8A_%D9%85%D8%AF%D8%B1%D8%B3%D8%A9_%D8%A7%D8%A8%D9%86_%D9%8A%D9%88%D8%B3%D9%81.jpeg",
//        ribbon: "AI",
//        creation_date: "2026-03-27",
//        srcs: ["perplexity"]
//      },
//      {
//        id: 109,
//        term: "ORM",
//        text: "Object–Relational Mapping (ORM) is a programming technique that converts data between relational databases and object-oriented languages.",
//        points: [
//          "Automates SQL generation from object structures.",
//          "Popular tools include Prisma, Hibernate, and Sequelize.",
//          "Reduces manual query handling but can affect performance."
//        ],
//        abbreviations: [{ short: "orm", long: "object-relational mapping" }],
//        references: [
//          { handle: "prisma", weblink: "https://www.prisma.io/", txt: "Prisma.io" }
//        ],
//        crossrefs: [],
//        tags: ["database", "pattern"],
//        imgurl: "https://upload.wikimedia.org/wikipedia/commons/8/83/Database-mapping.svg",
//        ribbon: "AI",
//        creation_date: "2026-03-27",
//        srcs: ["perplexity"]
//      },
//      {
//        id: 110,
//        term: "FLoC",
//        text: "Federated Learning of Cohorts (FLoC) was a Google proposal to replace third-party cookies by grouping users into cohorts based on browsing behavior, enabling interest-based advertising without individual tracking.",
//        points: [
//          "Abandoned in favor of Google's Topics API after privacy concerns and poor adoption.",
//          "Used on-device processing to assign cohort IDs without sharing raw browsing data.",
//          "Criticized by privacy groups for potential fingerprinting risks."
//        ],
//        abbreviations: [
//          { short: "FLoC", long: "Federated Learning of Cohorts" }
//        ],
//        references: [
//          { handle: "official", weblink: "https://privacysandbox.com/proposals/floc", txt: "Privacy Sandbox FLoC" },
//          { handle: "wiki", weblink: "https://en.wikipedia.org/wiki/Federated_Learning_of_Cohorts", txt: "Wikipedia" }
//        ],
//        crossrefs: [],
//        tags: ["privacy", "ads", "web", "google"],
//        imgurl: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Chrome_icon_%282023%29.svg",
//        ribbon: "AI",
//        creation_date: "2026-03-27",
//        srcs: ["perplexity"]
//      },
//      {
//        id: 111,
//        term: "Topics API",
//        text: "The Topics API is part of Google's Privacy Sandbox initiative, replacing FLoC by letting browsers determine coarse interest topics locally and share only a few relevant ones with advertisers.",
//        points: [
//          "Designed to improve user privacy while supporting personalized ads.",
//          "Topics are stored in the browser for a limited time, not shared across devices.",
//          "Users can view and manage topics in their browser settings."
//        ],
//        abbreviations: [],
//        references: [
//          { handle: "official", weblink: "https://privacysandbox.com/proposals/topics", txt: "Privacy Sandbox Topics" },
//          { handle: "docs", weblink: "https://developer.chrome.com/docs/privacy-sandbox/topics", txt: "Chrome Dev Docs" }
//        ],
//        crossrefs: [],
//        tags: ["privacy", "ads", "web"],
//        imgurl: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Privacy_Sandbox_logo.svg",
//        ribbon: "AI",
//        creation_date: "2026-03-27",
//        srcs: ["perplexity"]
//      },
//      {
//        id: 112,
//        term: "DRM",
//        text: "Digital Rights Management (DRM) refers to technologies that restrict the use, modification, and distribution of digital content to protect intellectual property rights.",
//        points: [
//          "Used widely in streaming, ebooks, and software licensing.",
//          "Often criticized for limiting user freedom and device compatibility.",
//          "Implemented via encryption and authentication mechanisms."
//        ],
//        abbreviations: [
//          { short: "DRM", long: "Digital Rights Management" }
//        ],
//        references: [
//          { handle: "wiki", weblink: "https://en.wikipedia.org/wiki/Digital_rights_management", txt: "Wikipedia" }
//        ],
//        crossrefs: [],
//        tags: ["security", "media", "rights"],
//        imgurl: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Padlock-icon.svg",
//        ribbon: "AI",
//        creation_date: "2026-03-27",
//        srcs: ["perplexity"]
//      },
      {
        id: 113,
        term: "Angular CLI (ng command)",
        text: "Short for Angular, a TypeScript-based web application framework developed by Google for building single-page client applications.",
        points: [
          "Successor to AngularJS with a modular and component-driven architecture.",
          "Uses TypeScript for strong typing and robust tooling integration.",
          "Includes a powerful CLI for scaffolding, building, and testing projects."
        ],
        abbreviations: [
          { short: "ng", long: "Angular" }
        ],
        references: [
          { handle: "official", weblink: "https://angular.dev/", txt: "angular.dev" },
          { handle: "docs", weblink: "https://angular.dev/reference", txt: "Angular Docs" }
        ],
        crossrefs: [],
        tags: ["framework", "typescript", "frontend"],
        imgurl: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg",
        ribbon: "AI",
        creation_date: "2026-03-27",
        srcs: ["perplexity"]
      },
//      {
//        id: 114,
//        term: "pgp",
//        text: "Pretty Good Privacy (PGP) is a data encryption and decryption program providing cryptographic privacy and authentication for emails and files.",
//        points: [
//          "Combines symmetric encryption with public key cryptography.",
//          "Commonly used for secure email communication and digital signatures.",
//          "Based on the OpenPGP standard, supported by tools like GnuPG."
//        ],
//        abbreviations: [
//          { short: "PGP", long: "Pretty Good Privacy" }
//        ],
//        references: [
//          { handle: "wiki", weblink: "https://en.wikipedia.org/wiki/Pretty_Good_Privacy", txt: "Wikipedia" },
//          { handle: "gnupg", weblink: "https://gnupg.org/", txt: "GnuPG" }
//        ],
//        crossrefs: [],
//        tags: ["security", "encryption", "privacy"],
//        imgurl: "https://upload.wikimedia.org/wikipedia/commons/5/5a/OpenPGP_Logo.svg",
//        ribbon: "AI",
//        creation_date: "2026-03-27",
//        srcs: ["perplexity"]
//      },
//      {
//        id: 115,
//        term: "typescript class",
//        text: "A TypeScript class is a blueprint for creating objects, extending JavaScript’s class syntax with type safety, visibility modifiers, and decorators.",
//        points: [
//          "Supports inheritance, interfaces, and generic types for structured code.",
//          "Classes can define fields, constructors, and methods with explicit types.",
//          "Often used with frameworks like Angular for component structure."
//        ],
//        abbreviations: [],
//        references: [
//          { handle: "docs", weblink: "https://www.typescriptlang.org/docs/handbook/classes.html", txt: "TypeScript Classes" }
//        ],
//        crossrefs: [],
//        tags: ["typescript", "oop", "frontend"],
//        imgurl: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
//        ribbon: "AI",
//        creation_date: "2026-03-27",
//        srcs: ["perplexity"]
//      },
//      {
//        id: 116,
//        term: "typescript interface",
//        text: "A TypeScript interface defines the shape of an object, specifying property names, types, and optional members to enforce consistent type contracts.",
//        points: [
//          "Used for compile-time type checking and code documentation.",
//          "Can extend other interfaces to combine structures.",
//          "Not included in JavaScript output, purely for type checking."
//        ],
//        abbreviations: [],
//        references: [
//          { handle: "docs", weblink: "https://www.typescriptlang.org/docs/handbook/interfaces.html", txt: "TypeScript Interfaces" }
//        ],
//        crossrefs: [],
//        tags: ["typescript", "types", "design"],
//        imgurl: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
//        ribbon: "AI",
//        creation_date: "2026-03-27",
//        srcs: ["perplexity"]
//      },
//      {
//        id: 117,
//        term: "typescript enum",
//        text: "A TypeScript enum is a feature for defining sets of named constants, mapping names to numeric or string values for clearer and safer code.",
//        points: [
//          "Supports both numeric and string-based enumerations.",
//          "Can help make code more readable when using fixed sets of options.",
//          "Compiled enums are represented as objects in JavaScript output."
//        ],
//        abbreviations: [],
//        references: [
//          { handle: "docs", weblink: "https://www.typescriptlang.org/docs/handbook/enums.html", txt: "TypeScript Enums" }
//        ],
//        crossrefs: [],
//        tags: ["typescript", "constants", "design"],
//        imgurl: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
//        ribbon: "AI",
//        creation_date: "2026-03-27",
//        srcs: ["perplexity"]
//      },
//      {
//        id: 118,
//        term: "conversion rate",
//        text: "Percentage of website visitors who complete a desired action like making a purchase, calculated as (conversions ÷ total visitors) × 100.",
//        points: [
//          "Primary KPI for measuring e-commerce effectiveness.",
//          "Improved by optimizing checkout flow and reducing friction.",
//          "Typical benchmarks range from 2-5% depending on industry."
//        ],
//        abbreviations: [
//          { short: "CR", long: "Conversion Rate" }
//        ],
//        references: [
//          { handle: "wiki", weblink: "https://en.wikipedia.org/wiki/Conversion_marketing", txt: "Wikipedia" }
//        ],
//        crossrefs: [],
//        tags: ["ecommerce", "metrics"],
//        imgurl: "",
//        ribbon: "AI",
//        creation_date: "2026-03-27",
//        srcs: ["perplexity"]
//      },
//      {
//        id: 119,
//        term: "cart abandonment",
//        text: "When shoppers add items to their shopping cart but exit without completing the purchase, averaging 69% abandonment rate globally.",
//        points: [
//          "Common causes include unexpected shipping costs and complex checkout.",
//          "Recovery strategies include cart abandonment emails.",
//          "Average recovery rate is around 10-15% with email campaigns."
//        ],
//        abbreviations: [
//          { short: "CA", long: "Cart Abandonment" }
//        ],
//        references: [
//          { handle: "baymard", weblink: "https://baymard.com/lists/cart-abandonment-rate", txt: "Baymard Institute" }
//        ],
//        crossrefs: [],
//        tags: ["ecommerce", "behavior"],
//        imgurl: "",
//        ribbon: "AI",
//        creation_date: "2026-03-27",
//        srcs: ["perplexity"]
//      },
//      {
//        id: 120,
//        term: "customer lifetime value",
//        text: "Total revenue expected from a single customer account throughout their relationship with the business (CLV = average order value × purchase frequency × lifespan).",
//        points: [
//          "More profitable to retain existing customers than acquire new ones.",
//          "Guides marketing budget allocation and customer segmentation.",
//          "Key metric for subscription and SaaS businesses."
//        ],
//        abbreviations: [
//          { short: "CLV", long: "Customer Lifetime Value" },
//          { short: "LTV", long: "Lifetime Value" }
//        ],
//        references: [
//          { handle: "hubspot", weblink: "https://blog.hubspot.com/service/customer-lifetime-value", txt: "HubSpot" }
//        ],
//        crossrefs: [],
//        tags: ["ecommerce", "metrics"],
//        imgurl: "",
//        ribbon: "AI",
//        creation_date: "2026-03-27",
//        srcs: ["perplexity"]
//      },
//      {
//        id: 121,
//        term: "omnichannel",
//        text: "Seamless customer experience across all channels (web, mobile, store, social) where the brand recognizes customers wherever they engage.",
//        points: [
//          "Unified inventory and customer data across all touchpoints.",
//          "Higher customer satisfaction and increased average order value.",
//          "Examples include buy online pickup in store (BOPIS)."
//        ],
//        abbreviations: [
//          { short: "O2O", long: "Online to Offline" }
//        ],
//        references: [
//          { handle: "forbes", weblink: "https://www.forbes.com/sites/forbesagencycouncil/2021/03/15/omnichannel-vs-multichannel-whats-the-difference/", txt: "Forbes" }
//        ],
//        crossrefs: [],
//        tags: ["ecommerce", "strategy"],
//        imgurl: "",
//        ribbon: "AI",
//        creation_date: "2026-03-27",
//        srcs: ["perplexity"]
//      },
//      {
//        id: 122,
//        term: "data-driven decisions",
//        text: "Using customer analytics, A/B testing, and performance metrics to guide business strategy rather than intuition.",
//        points: [
//          "Track KPIs like bounce rate, time on site, and revenue per visitor.",
//          "Tools include Google Analytics 4, Hotjar, and Mixpanel.",
//          "Regular testing optimizes conversion rates continuously."
//        ],
//        abbreviations: [],
//        references: [
//          { handle: "google", weblink: "https://analytics.google.com/analytics/web/", txt: "Google Analytics" }
//        ],
//        crossrefs: [],
//        tags: ["ecommerce", "analytics"],
//        imgurl: "",
//        ribbon: "AI",
//        creation_date: "2026-03-27",
//        srcs: ["perplexity"]
//      },
//      {
//        id: 123,
//        term: "trust and security",
//        text: "Building customer confidence through SSL certificates, clear privacy policies, secure payment gateways, and trust signals.",
//        points: [
//          "HTTPS required for all e-commerce transactions.",
//          "Display security badges, money-back guarantees, customer reviews.",
//          "PCI-DSS compliance mandatory for card processing."
//        ],
//        abbreviations: [
//          { short: "SSL", long: "Secure Sockets Layer" },
//          { short: "PCI-DSS", long: "Payment Card Industry Data Security Standard" }
//        ],
//        references: [
//          { handle: "pci", weblink: "https://www.pcisecuritystandards.org/", txt: "PCI Security Standards" }
//        ],
//        crossrefs: [],
//        tags: ["ecommerce", "security"],
//        imgurl: "",
//        ribbon: "AI",
//        creation_date: "2026-03-27",
//        srcs: ["perplexity"]
//      },
//      {
//        id: 124,
//        term: "scalability",
//        text: "Ability of e-commerce infrastructure to handle increased traffic, orders, and data without performance degradation.",
//        points: [
//          "Cloud hosting (AWS, Google Cloud) handles traffic spikes.",
//          "CDN for global content delivery and fast load times.",
//          "Microservices architecture for independent scaling."
//        ],
//        abbreviations: [],
//        references: [
//          { handle: "aws", weblink: "https://aws.amazon.com/ecommerce/", txt: "AWS Ecommerce" }
//        ],
//        crossrefs: [],
//        tags: ["ecommerce", "infrastructure"],
//        imgurl: "",
//        ribbon: "AI",
//        creation_date: "2026-03-27",
//        srcs: ["perplexity"]
//      },
//      {
//        id: 125,
//        term: "customer retention",
//        text: "Strategies to encourage repeat purchases through loyalty programs, personalized marketing, and excellent post-purchase experience.",
//        points: [
//          "5x cheaper to retain existing customers than acquire new ones.",
//          "Email marketing achieves 40x ROI for retention campaigns.",
//          "Subscription models create predictable recurring revenue."
//        ],
//        abbreviations: [],
//        references: [
//          { handle: "forbes", weblink: "https://www.forbes.com/sites/jayschwedelson/2019/10/09/customer-retention/", txt: "Forbes Retention" }
//        ],
//        crossrefs: [],
//        tags: ["ecommerce", "marketing"],
//        imgurl: "",
//        ribbon: "AI",
//        creation_date: "2026-03-27",
//        srcs: ["perplexity"]
//      },
      {
        id: 126,
        term: "Angular Directive",
        text: "Angular directives extend HTML by adding behavior to elements through attributes, structural changes (*ngIf, *ngFor), or custom logic via @Directive decorator.",
        points: [
          "Attribute directives modify appearance/behavior (ngClass, ngStyle).",
          "Structural directives manipulate DOM (add/remove elements).",
          "Custom directives created with @Directive({ selector: '[appHighlight]' })"
        ],
        abbreviations: [],
        references: [
          { handle: "docs", weblink: "https://angular.dev/guide/templates/directives", txt: "Angular Directives" }
        ],
        crossrefs: [],
        tags: ["xxx", "angular", "templates"],
      imgurl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Angular_gradient_logo.png/960px-Angular_gradient_logo.png?_=20231107180344",
        ribbon: "AI",
        creation_date: "2026-03-29",
        srcs: ["inferred:sad"]
      },
//      {
//        id: 127,
//        term: "angular routing guard",
//        text: "Guards control access to routes with CanActivate, CanDeactivate, CanLoad, and Resolve interfaces to protect routes or pre-fetch data.",
//        points: [
//          "CanActivate() checks authentication/authorization before route activation.",
//          "CanDeactivate() prevents navigation away from unsaved forms.",
//          "CanLoad() prevents lazy-loaded module loading without permission."
//        ],
//        abbreviations: [],
//        references: [
//          { handle: "docs", weblink: "https://angular.dev/guide/routing/router-guards", txt: "Angular Route Guards" }
//        ],
//        crossrefs: [],
//        tags: ["angular", "routing", "security"],
//        imgurl: "",
//        ribbon: "AI",
//        creation_date: "2026-03-27",
//        srcs: ["perplexity"]
//      },
//      {
//        id: 128,
//        term: "angular routing resolver",
//        text: "Resolvers pre-fetch data before route activation using Resolve<T> interface, ensuring components receive required data on initialization.",
//        points: [
//          "Implements resolve() method returning Observable/Promise of data.",
//          "Prevents 'spinner of death' by loading data before component renders.",
//          "Injected into route config: { path: 'user/:id', resolve: { user: UserResolver } }"
//        ],
//        abbreviations: [],
//        references: [
//          { handle: "docs", weblink: "https://angular.dev/guide/routing/router-resolvers", txt: "Angular Resolvers" }
//        ],
//        crossrefs: [],
//        tags: ["angular", "routing", "data"],
//        imgurl: "",
//        ribbon: "AI",
//        creation_date: "2026-03-27",
//        srcs: ["perplexity"]
//      },
//      {
//        id: 129,
//        term: "angular routing interceptor",
//        text: "Interceptors intercept HTTP requests/responses globally to add headers, handle errors, cache responses, or transform data.",
//        points: [
//          "Implements HttpInterceptor interface with intercept() method.",
//          "Common uses: adding auth tokens, logging requests, retry logic.",
//          "Registered in providers: provideHttpClient(withInterceptors([authInterceptor]))"
//        ],
//        abbreviations: [],
//        references: [
//          { handle: "docs", weblink: "https://angular.dev/guide/http/interceptors", txt: "Angular HTTP Interceptors" }
//        ],
//        crossrefs: [],
//        tags: ["angular", "http", "middleware"],
//        imgurl: "",
//        ribbon: "AI",
//        creation_date: "2026-03-27",
//        srcs: ["perplexity"]
//      },
//      {
//        id: 130,
//        term: "angular app-shell",
//        text: "App shell architecture pre-renders critical UI framework (header, nav, footer) while lazy-loading route content for instant page loads.",
//        points: [
//          "Created with `ng generate app-shell` or Angular Universal.",
//          "Server renders static shell, client hydrates with dynamic content.",
//          "Improves Largest Contentful Paint (LCP) and perceived performance."
//        ],
//        abbreviations: [],
//        references: [
//          { handle: "docs", weblink: "https://angular.dev/guide/app-shell", txt: "Angular App Shell" }
//        ],
//        crossrefs: [],
//        tags: ["angular", "pwa", "performance"],
//        imgurl: "",
//        ribbon: "AI",
//        creation_date: "2026-03-27",
//        srcs: ["perplexity"]
//      },
//      {
//        id: 131,
//        term: "angular service-worker",
//        text: "PWA service worker for caching assets, offline support, and background sync, configured via ngsw-config.json.",
//        points: [
//          "Enabled with `ng add @angular/pwa` command.",
//          "Caches critical resources using assetGroups and dataGroups.",
//          "Provides install/update notifications and version management."
//        ],
//        abbreviations: [],
//        references: [
//          { handle: "docs", weblink: "https://angular.dev/guide/service-worker-getting-started", txt: "Angular Service Worker" }
//        ],
//        crossrefs: [],
//        tags: ["angular", "pwa", "offline"],
//        imgurl: "",
//        ribbon: "AI",
//        creation_date: "2026-03-27",
//        srcs: ["perplexity"]
//      },
//      {
//        id: 132,
//        term: "angular web-worker",
//        text: "Web Workers run scripts in background threads, preventing UI blocking during heavy computations like data processing or image manipulation.",
//        points: [
//          "Created with `ng generate web-worker my-worker`.",
//          "Communicate via postMessage/onmessage pattern.",
//          "Angular provides TransferState for SSR worker coordination."
//        ],
//        abbreviations: [],
//        references: [
//          { handle: "docs", weblink: "https://angular.dev/guide/web-worker", txt: "Angular Web Workers" }
//        ],
//        crossrefs: [],
//        tags: ["angular", "performance", "threads"],
//        imgurl: "",
//        ribbon: "AI",
//        creation_date: "2026-03-27",
//        srcs: ["perplexity"]
//      },
//      {
//        id: 133,
//        term: "angular config",
//        text: "Configuration management through injection tokens and factory providers for environment-specific settings and feature flags.",
//        points: [
//          "Uses APP_INITIALIZER to load config before app bootstrap.",
//          "InjectionToken-based: const API_CONFIG = new InjectionToken('api.config').",
//          "Supports runtime config updates without rebuilding."
//        ],
//        abbreviations: [],
//        references: [
//          { handle: "docs", weblink: "https://angular.dev/guide/dependency-injection/providers", txt: "Angular DI Config" }
//        ],
//        crossrefs: [],
//        tags: ["angular", "config", "di"],
//        imgurl: "",
//        ribbon: "AI",
//        creation_date: "2026-03-27",
//        srcs: ["perplexity"]
//      },
//      {
//        id: 134,
//        term: "angular environments",
//        text: "Build-time environment configuration using environment.ts files (development, production, staging) replaced during ng build.",
//        points: [
//          "src/environments/environment.prod.ts contains production settings.",
//          "Accessed via import { environment } from '../environments/environment'.",
//          "ng build --configuration production replaces environment values."
//        ],
//        abbreviations: [],
//        references: [
//          { handle: "docs", weblink: "https://angular.dev/guide/build/configuring-application-environments", txt: "Angular Environments" }
//        ],
//        crossrefs: [],
//        tags: ["angular", "build", "deployment"],
//        imgurl: "",
//        ribbon: "AI",
//        creation_date: "2026-03-27",
//        srcs: ["perplexity"]
//      }
//      {
//        id: 135,
//        term: "Command-Line Interface",
//        text: "How programs were run before desktop environments.",
//        points: [
//          "For example: ng."
//        ],
//        abbreviations: [
//          { short: "CLI", long: "Command-Line Interface" }
//        ],
//        references: [
//          { handle: "docs", weblink: "https://angular.dev/guide/build/configuring-application-environments", txt: "Angular Environments" }
//        ],
//        crossrefs: [ 113, ],
//        tags: ["angular", "build", "deployment"],
//        imgurl: "",
//        ribbon: "AI",
//        creation_date: "2026-03-27",
//        srcs: ["perplexity"]
//      }
   ];

  getData() {
    return this.data;
  }

}
