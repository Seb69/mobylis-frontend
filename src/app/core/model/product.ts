export class Product {

  constructor(name: string, id: string, description: string, brand: string, price: number, images: Array<string>) {
    this.name = name;
    this.id = id;
    this.description = description;
    this.brand = brand;
    this.price = price;
    this.images = images;
  }

  name: string;
  id: string;
  description: string;
  brand: string;
  price: number;
  images: Array<string>;
}
