export class Category {
    id: number;
    name: string;
    imageUrl: string;
  }

export class Product {
  id: number;
  name: string;
  price: DoubleRange;
  description: string;
  category_id: number;
  econom: number;
  sale: string;
  shortDesc: string;
  oldPrice: number;
  size: string;
  image: string;

}

class User {
  id: number;
  password: string;
  username: string;
  is_active: boolean;
}

export class LoginResponse {
  token: string;
  username: string;
  userid:number;
  is_superuser:boolean;
}