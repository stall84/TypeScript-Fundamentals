// Project Type
// We want to be able to instantiate later so will use a Class instead of an Interface
export enum ProjectStatus {
  Active,
  Finished,
}
export class Project {
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public people: number,
    public status: ProjectStatus
  ) {}
}
