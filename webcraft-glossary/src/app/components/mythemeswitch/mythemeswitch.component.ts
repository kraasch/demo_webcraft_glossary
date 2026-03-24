import { Component } from '@angular/core';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-mythemeswitch',
  standalone: true,
  imports: [ TitleCasePipe ],
  template: `
    <div class="dropdown mb-72">
      <div tabindex="0" role="button" class="btn m-1">
        Theme
        <svg
          width="12px"
          height="12px"
          class="inline-block h-2 w-2 fill-current opacity-60"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2048 2048">
          <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
        </svg>
      </div>
      <ul tabindex="-1" class="dropdown-content bg-base-300 rounded-box z-1 w-52 p-2 shadow-2xl">

        @for (aTheme of allThemes; track aTheme.name; let idx = $index) {

          @if ( aTheme.isDiv ) {
            <div class="divider">{{ aTheme.name }}</div>
          } @else {
            <li>
              <input
                type="radio"
                name="theme-dropdown"
                class="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
                [attr.aria-label]="aTheme.name | titlecase"
                value="{{ aTheme.name }}" />
            </li>
          }

        } @empty {
          <li>No themes found</li>
        }

      </ul>
    </div>
  `,
  styles: ``
})
export class MythemeswitchComponent {

  allThemes = [
    { isDiv:false, name:"default",       },
    { isDiv:true,  name:"HIGH CONTRAST", },
    { isDiv:false, name:"abyss",         },
    { isDiv:false, name:"aqua",          },
    { isDiv:false, name:"black",         },
    { isDiv:false, name:"business",      },
    { isDiv:false, name:"coffee",        },
    { isDiv:false, name:"dark",          },
    { isDiv:false, name:"dim",           },
    { isDiv:false, name:"dracula",       },
    { isDiv:false, name:"forest",        },
    { isDiv:false, name:"halloween",     },
    { isDiv:false, name:"luxury",        },
    { isDiv:false, name:"night",         },
    { isDiv:false, name:"sunset",        },
    { isDiv:false, name:"synthwave",     },
    { isDiv:false, name:"wireframe",     },
    { isDiv:false, name:"walkingdino",   },
    { isDiv:true,  name:"LOW CONTRAST",  },
    { isDiv:false, name:"acid",          },
    { isDiv:false, name:"autumn",        },
    { isDiv:false, name:"bumblebee",     },
    { isDiv:false, name:"caramellatte",  },
    { isDiv:false, name:"cmyk",          },
    { isDiv:false, name:"corporate",     },
    { isDiv:false, name:"cupcake",       },
    { isDiv:false, name:"cyberpunk",     },
    { isDiv:false, name:"emerald",       },
    { isDiv:false, name:"fantasy",       },
    { isDiv:false, name:"garden",        },
    { isDiv:false, name:"lemonade",      },
    { isDiv:false, name:"light",         },
    { isDiv:false, name:"lofi",          },
    { isDiv:false, name:"nord",          },
    { isDiv:false, name:"pastel",        },
    { isDiv:false, name:"retro",         },
    { isDiv:false, name:"silk",          },
    { isDiv:false, name:"valentine",     },
    { isDiv:false, name:"winter",        },
  ];

}
