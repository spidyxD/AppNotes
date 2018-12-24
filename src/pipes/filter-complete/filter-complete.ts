import { Pipe, PipeTransform } from '@angular/core';
import { Lista } from '../../Models/list.model';


/**
 * Generated class for the FilterCompletePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'filterComplete',
})
export class FilterCompletePipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(lists: Lista[], complete: boolean) {
    return lists.filter(lista => { return lista.ended === complete})
  }
}
