export class Product {

  constructor(name: string, description: string, price: number, images: Array<string>) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.images = images;
  }

  name: string;
  description: string;
  brand: string;
  price: number;
  images: Array<string>;
}
