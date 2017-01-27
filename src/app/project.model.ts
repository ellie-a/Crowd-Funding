export class Project {
  public currentFunding: number;
  public fundingPercent: number;
  constructor(public name: string, public managers: string[], public description: string, public target: number, public details: string, public swag: string[], public priority: boolean=false, public edit: boolean=false){
    this.currentFunding = 0;
    this.fundingPercent = 0;
  }
}
