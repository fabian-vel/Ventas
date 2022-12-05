import { Injectable } from '@angular/core';
import { Products } from 'src/app/models/product.models';

@Injectable({
  providedIn: 'root'
})
export class SalesListService {

  constructor() { }

  private listaProducts: Products[] = [];

  get listaProductSold() {
    return this.listaProducts;
  }

  addProduct(product: Products) {
    this.listaProducts.push(product);
  }

}
