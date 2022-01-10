export class Card {
  constructor(
    public title: string,
    public area: string,
    public date: string,
    public isImportant: boolean,
    //public assignee: string,
    //public description: string,
    // public priority: string,
    //public status: string,
    //public id?: number

  ) {}
}

export interface Cards {
  cards: Card[]
}
