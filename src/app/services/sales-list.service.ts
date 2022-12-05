import { Injectable } from '@angular/core';
import { Products } from 'src/app/models/product.models';

@Injectable({
  providedIn: 'root'
})
export class SalesListService {

  constructor() { }

  private listaProducts: Products[] = [];

  getListaProductSold() {
    return this.listaProducts;
  }

  addProduct(product: Products) {
    this.listaProducts.push(product);
  }

  getTotalCost() {
    return this.listaProducts.map(t => t.price).reduce((acc, value) => acc + value, 0);
  }

}
