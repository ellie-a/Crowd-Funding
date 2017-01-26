export class Project {
  constructor(public name: string, public managers: string[], public description: string, public target: number, public details: string, public swag: string[], public priority: boolean=false, public edit: boolean=false){}
}
