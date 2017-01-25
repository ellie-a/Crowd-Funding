import { Pipe, PipeTransform } from '@angular/core';
import { Project } from './project.model';
import { FirebaseListObservable } from 'angularfire2';


@Pipe({
  name: 'priority',
  pure: false
})
export class PriorityPipe implements PipeTransform {

//   constructor(private angularFire: AngularFire) {
// }

  transform(input: Project[]): any {
    if (input != null) {
      var output: Project[] = [];
      for(var i = 0; i < input.length; i++){
        if(input[i].priority) {
          output.push(input[i]);
        }
      }
      return output;
    }
    return input;
  }

}
