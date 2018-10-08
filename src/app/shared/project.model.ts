export class Project {
  constructor(
    public _id: string,
    public task: string,
    public hours: number,
    public minutes: number,
    public dateStart: number,
    public dateStop: number
  ) {}
}
