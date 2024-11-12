import { Injectable } from '@angular/core';
import { Iproducts } from './iproducts';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products: Iproducts[] =[
    {id: 1, name: "Iced Coffeee", price: 35.0, rating:"⭐⭐⭐⭐⭐", image:"./cafe1.webp"},
    {id: 2, name: "Coffee Mocha", price: 11.90, rating:"⭐⭐⭐⭐⭐", image:"./cafe1.webp"},
    {id: 3, name: "Lattes Coffee", price: 12.90,  rating:"⭐⭐⭐⭐⭐", image:"./cafe1.webp"},
    {id: 4, name: "Cappuccino", price: 9.0, rating:"⭐⭐⭐⭐⭐", image:"./cafe1.webp"},
  ];
  
  getProducts(): Iproducts[]{
    return this.products;
  }

}
  

