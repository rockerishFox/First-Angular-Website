export class Product {
    constructor(private _title: string) {}

    get title() {
      return this._title;
    }

    public static getNewProducts() {
      return [new Product('Title1'), new Product('Title2')];
    }
}
