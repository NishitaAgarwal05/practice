export class Hero {

    constructor(
      public id: number,
      public route: string[],
      public customer: string,
      public specialConditions: string[],
      public validUpto: Date,
      public typeOfService: string,
    ) {  }
  
  }
  