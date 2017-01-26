import { Pipe, PipeTransform } from '@angular/core';
import { Project } from './project.model';
import { FirebaseListObservable } from 'angularfire2';

@Pipe({
  name: 'search',
  pure: false
})
export class SearchPipe implements PipeTransform {

  transform(input: Project[], searchFilter: string): any {
    if (input != null && searchFilter.length != 0) {
      var output: Project[] = [];
      for(var i = 0; i < input.length; i++){
        if(input[i].name.toUpperCase().includes(searchFilter.toUpperCase()) || input[i].details.toUpperCase().includes(searchFilter.toUpperCase()) || input[i].description.toUpperCase().includes(searchFilter.toUpperCase())) {
          output.push(input[i]);
        }
      }
      return output;
    }
    return input;
  }

}
