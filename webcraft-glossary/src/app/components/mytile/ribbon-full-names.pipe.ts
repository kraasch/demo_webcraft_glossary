
import { Pipe, PipeTransform } from '@angular/core';

const defaultName: string = "NEW";

const fullNames: Record<string, string> = {
  /*
   * Used ribbons:
   *
   * HW for HOMEWORK
   *
   */
  "HW": "HW",
  "NOW": "NOW",
  "NEW": "NEW",
};

@Pipe({
  name: 'ribbonFullNames',
  standalone: true
})
export class RibbonFullNamesPipe implements PipeTransform {

  transform(name: string, ...args: unknown[]): unknown {
    let resultName: string = defaultName;
    if (name in fullNames) {
      resultName = fullNames[name]
    }
    return resultName;
  }

}

