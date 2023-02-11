
export class mats {
  constructor(
    public color: string,
    public type: string,
    public weight: number,
    public lastChange: number,
    public date: Date,
    public show: boolean
  ) {}
}

export class supps {
  constructor(
    public type: string,
    public weight: number,
    public lastChange: number,
    public date: Date,
    public show: boolean
  ) {}
}

export class weichts {
  constructor(
    public type: string,
    public weight: number,
    public lastChange: number,
    public date: Date,
    public show: boolean
  ) {}
}
export class nestedTable {
  constructor(
    public chType: string,
    public chValue: string,
    public nWeight: string,
    public machine: string,
    public suppOrder: string,
    public date: Date
  ) {}
}
export class nestedTable2 {
  constructor(
    public id: number,
    public chValue: string,
    public nWeight: string,
    public machine: string,
    public suppOrder: string,
    public date: Date
  ) {}
}
export class nestedTable3 {
  constructor(
    public color: string,
    public id: number,
    public chValue: string,
    public nWeight: string,
    public machine: string,
    public suppOrder: string,
    public date: Date
  ) {}
}
export class scrapMats {
  constructor(
    public type: string,
    public weight: number,
    public lastChange: number,
    public date: Date,
    public show: boolean
  ) {}
}
export class jobOrder {
  constructor(
    public type: number,
    public weight: number,
    public lastChange: number,
    public date: Date,
    public show: boolean
  ) {}
}

