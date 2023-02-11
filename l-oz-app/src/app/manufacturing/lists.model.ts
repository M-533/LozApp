export class Orders {
  constructor(
    public id: number,
    public date: Date,
    public client: string,
    public sales: string,
    public product: string,
    public id2: number,
    public showNestedList: boolean
  ) {}
}

export class nestedOrders {
  constructor(
    public material: string,
    public func: string,
    public consump: string,
    public date: Date,
    public pro: string,
    public worker: string
  ) {}
}
